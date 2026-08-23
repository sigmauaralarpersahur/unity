/*
  Doomz.io WebGL chat sanitizer + entered-game detector
*/

(() => {
  const SANITIZE_INCOMING_CHAT = true;

  // Observed chat signature in Doomz packets: 7a 00 01 73 00 [type] [ASCII chat...]
  const CHAT_SIG = new Uint8Array([0x7a, 0x00, 0x01, 0x73, 0x00]);

  // ---- Enter-game detection tuning ----
  const ENTER_WARMUP_MS = 7500;
  const NONCHAT_SIZE_TRIGGER = 400;    // bytes
  const BURST_WINDOW_MS = 200;        // window to count sends
  const BURST_COUNT_TRIGGER = 16;      // if >= this many non-chat sends in window

  window.__doomzEnteredGame = false;
  const __doomzStart = performance.now();
  let __nonchatSendTimes = [];

  function __doomzMaybeEnteredGame(reason) {
    if (window.__doomzEnteredGame) return;

    // Must be armed by page (prevents premature triggers during boot)
    if (!window.__doomzEnterArmed) return;

    if (performance.now() - __doomzStart < ENTER_WARMUP_MS) return;

    window.__doomzEnteredGame = true;
    window.dispatchEvent(new CustomEvent("doomz:enteredGame", { detail: { reason } }));
  }

  function findSig(u8, sig) {
    for (let i = 0; i <= u8.length - sig.length; i++) {
      let ok = true;
      for (let j = 0; j < sig.length; j++) {
        if (u8[i + j] !== sig[j]) { ok = false; break; }
      }
      if (ok) return i;
    }
    return -1;
  }

  function sanitizeChatInPlace(u8, msgStart) {
    let i = msgStart;
    while (i < u8.length && u8[i] !== 0x00) {
      const b = u8[i];
      if (b === 0x3C) u8[i] = 0x5B;       // '<' -> '['
      else if (b === 0x3E) u8[i] = 0x5D;  // '>' -> ']'
      i++;
    }
  }

  // Case-insensitive ASCII "quad" search inside [msgStart .. null]
  function msgContainsQuad(u8, msgStart) {
    // Looking for q u a d in any case:
    // q/Q = 0x71/0x51, etc. We'll lowercase by OR 0x20 for A-Z.
    const q = 0x71, u = 0x75, a = 0x61, d = 0x64;

    let window4 = [];
    let i = msgStart;

    while (i < u8.length && u8[i] !== 0x00) {
      let c = u8[i];

      // Lowercase ASCII if A-Z
      if (c >= 0x41 && c <= 0x5A) c = c | 0x20;

      window4.push(c);
      if (window4.length > 4) window4.shift();

      if (window4.length === 4) {
        if (window4[0] === q && window4[1] === u && window4[2] === a && window4[3] === d) {
          return true;
        }
      }
      i++;
    }
    return false;
  }

  function msgHasAngleBrackets(u8, msgStart) {
    let i = msgStart;
    while (i < u8.length && u8[i] !== 0x00) {
      const b = u8[i];
      if (b === 0x3C || b === 0x3E) return true;
      i++;
    }
    return false;
  }

  function maybeSanitizeArrayBuffer(buf) {
    if (!SANITIZE_INCOMING_CHAT || !(buf instanceof ArrayBuffer)) return;

    const u8 = new Uint8Array(buf);
    const pos = findSig(u8, CHAT_SIG);
    if (pos === -1) return;

    const typePos = pos + CHAT_SIG.length;
    const msgStart = typePos + 1;
    if (msgStart >= u8.length) return;

    // Only sanitize if:
    // 1) message contains "quad" (anywhere), and
    // 2) message contains < or >
    if (!msgContainsQuad(u8, msgStart)) return;
    if (!msgHasAngleBrackets(u8, msgStart)) return;

    sanitizeChatInPlace(u8, msgStart);
  }

  function wrapMessageHandler(fn) {
    return function(ev) {
      try {
        if (ev && ev.data instanceof ArrayBuffer) {
          maybeSanitizeArrayBuffer(ev.data);
        } else if (ev && ev.data && ev.data instanceof Blob) {
          // If something forces Blob, convert to ArrayBuffer and forward
          const orig = ev.data;
          orig.arrayBuffer().then((ab) => {
            maybeSanitizeArrayBuffer(ab);
            const newEv = new MessageEvent("message", {
              data: ab,
              origin: ev.origin,
              lastEventId: ev.lastEventId,
              source: ev.source,
              ports: ev.ports
            });
            fn(newEv);
          }).catch(() => fn(ev));
          return;
        }
      } catch {}
      return fn(ev);
    };
  }

  function isChatPacket(u8) {
    return findSig(u8, CHAT_SIG) !== -1;
  }

  function noteNonChatSend(len) {
    const t = performance.now();
    __nonchatSendTimes.push(t);

    const cutoff = t - BURST_WINDOW_MS;
    while (__nonchatSendTimes.length && __nonchatSendTimes[0] < cutoff) {
      __nonchatSendTimes.shift();
    }

    if (len >= NONCHAT_SIZE_TRIGGER) {
      __doomzMaybeEnteredGame(`send_nonchat_big_${len}`);
      return;
    }

    if (__nonchatSendTimes.length >= BURST_COUNT_TRIGGER) {
      __doomzMaybeEnteredGame(`send_nonchat_burst_${__nonchatSendTimes.length}`);
    }
  }

  const OriginalWebSocket = window.WebSocket;

  function WrappedWebSocket(url, protocols) {
    const ws = protocols ? new OriginalWebSocket(url, protocols) : new OriginalWebSocket(url);

    try { ws.binaryType = "arraybuffer"; } catch {}

    const origSend = ws.send.bind(ws);
    ws.send = function(data) {
      try {
        if (!window.__doomzEnteredGame && data instanceof ArrayBuffer) {
          const u8 = new Uint8Array(data);
          if (!isChatPacket(u8)) {
            noteNonChatSend(u8.length);
          }
        }
      } catch {}
      return origSend(data);
    };

    const proxy = new Proxy(ws, {
      set(target, prop, value) {
        try {
          if (prop === "onmessage" && typeof value === "function") {
            target.onmessage = wrapMessageHandler(value);
            return true;
          }
          if (prop === "binaryType") {
            target.binaryType = value;
            return true;
          }
        } catch {}
        target[prop] = value;
        return true;
      },
      get(target, prop) {
        const v = target[prop];
        if (prop === "addEventListener") {
          return function(type, listener, options) {
            if (type === "message" && typeof listener === "function") {
              return target.addEventListener(type, wrapMessageHandler(listener), options);
            }
            return target.addEventListener(type, listener, options);
          };
        }
        return typeof v === "function" ? v.bind(target) : v;
      }
    });

    return proxy;
  }

  WrappedWebSocket.prototype = OriginalWebSocket.prototype;
  ["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(k => {
    try { Object.defineProperty(WrappedWebSocket, k, { value: OriginalWebSocket[k] }); } catch {}
  });

  window.WebSocket = WrappedWebSocket;
})();
