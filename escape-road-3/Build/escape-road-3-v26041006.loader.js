function createUnityInstance(t, n, l) {
  function c(e, t) {
    if (!c.aborted && n.showBanner) {
      if (t == "error") {
        c.aborted = true;
      }
      return n.showBanner(e, t);
    }
    switch (t) {
      case "error":
        console.error(e);
        break;
      case "warning":
        console.warn(e);
        break;
      default:
        console.log(e);
    }
  }
  function r(e) {
    var t = e.reason || e.error;
    var n = t ? t.toString() : e.message || e.reason || "";
    var r = t && t.stack ? t.stack.toString() : "";
    if ((n += "\n" + (r = r.startsWith(n) ? r.substring(n.length) : r).trim()) && u.stackTraceRegExp && u.stackTraceRegExp.test(n)) {
      x(n, e.filename || t && (t.fileName || t.sourceURL) || "", e.lineno || t && (t.lineNumber || t.line) || 0);
    }
  }
  function e(e, t, n) {
    var r = e[t];
    if (r === undefined || !r) {
      console.warn("Config option \"" + t + "\" is missing or empty. Falling back to default value: \"" + n + "\". Consider updating your WebGL template to include the missing config option.");
      e[t] = n;
    }
  }
  l = l || function () {};
  var o;
  var u = {
    canvas: t,
    webglContextAttributes: {
      preserveDrawingBuffer: false,
      powerPreference: 2
    },
    cacheControl: function (e) {
      if (e == u.dataUrl || e.match(/\.bundle/)) {
        return "must-revalidate";
      } else {
        return "no-store";
      }
    },
    streamingAssetsUrl: "StreamingAssets",
    downloadProgress: {},
    deinitializers: [],
    intervals: {},
    setInterval: function (e, t) {
      e = window.setInterval(e, t);
      this.intervals[e] = true;
      return e;
    },
    clearInterval: function (e) {
      delete this.intervals[e];
      window.clearInterval(e);
    },
    preRun: [],
    postRun: [],
    print: function (e) {
      console.log(e);
    },
    printErr: function (e) {
      console.error(e);
      if (typeof e == "string" && e.indexOf("wasm streaming compile failed") != -1) {
        if (e.toLowerCase().indexOf("mime") != -1) {
          c("HTTP Response Header \"Content-Type\" configured incorrectly on the server for file " + u.codeUrl + " , should be \"application/wasm\". Startup time performance will suffer.", "warning");
        } else {
          c("WebAssembly streaming compilation failed! This can happen for example if \"Content-Encoding\" HTTP header is incorrectly enabled on the server for file " + u.codeUrl + ", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.", "warning");
        }
      }
    },
    locateFile: function (e) {
      return e;
    },
    disabledCanvasEvents: ["contextmenu", "dragstart"]
  };
  e(n, "companyName", "Unity");
  e(n, "productName", "WebGL Player");
  e(n, "productVersion", "1.0");
  for (o in n) {
    u[o] = n[o];
  }
  u.streamingAssetsUrl = new URL(u.streamingAssetsUrl, document.URL).href;
  var a = u.disabledCanvasEvents.slice();
  function i(e) {
    e.preventDefault();
  }
  a.forEach(function (e) {
    t.addEventListener(e, i);
  });
  window.addEventListener("error", r);
  window.addEventListener("unhandledrejection", r);
  var s = "";
  var d = "";
  function f(e) {
    if (document.webkitCurrentFullScreenElement === t) {
      if (t.style.width) {
        s = t.style.width;
        d = t.style.height;
        t.style.width = "100%";
        t.style.height = "100%";
      }
    } else if (s) {
      t.style.width = s;
      t.style.height = d;
      d = s = "";
    }
  }
  document.addEventListener("webkitfullscreenchange", f);
  u.deinitializers.push(function () {
    u.disableAccessToMediaDevices();
    a.forEach(function (e) {
      t.removeEventListener(e, i);
    });
    window.removeEventListener("error", r);
    window.removeEventListener("unhandledrejection", r);
    document.removeEventListener("webkitfullscreenchange", f);
    for (var e in u.intervals) {
      window.clearInterval(e);
    }
    u.intervals = {};
  });
  u.QuitCleanup = function () {
    for (var e = 0; e < u.deinitializers.length; e++) {
      u.deinitializers[e]();
    }
    u.deinitializers = [];
    if (typeof u.onQuit == "function") {
      u.onQuit();
    }
  };
  var h;
  var m;
  var b;
  var p;
  var g;
  var w;
  var v;
  var y;
  var k;
  var _ = {
    Module: u,
    SetFullscreen: function () {
      if (u.SetFullscreen) {
        return u.SetFullscreen.apply(u, arguments);
      }
      u.print("Failed to set Fullscreen mode: Player not loaded yet.");
    },
    SendMessage: function () {
      if (u.SendMessage) {
        return u.SendMessage.apply(u, arguments);
      }
      u.print("Failed to execute SendMessage: Player not loaded yet.");
    },
    Quit: function () {
      return new Promise(function (e, t) {
        u.shouldQuit = true;
        u.onQuit = e;
      });
    },
    GetMemoryInfo: function () {
      var e = u._getMemInfo();
      return {
        totalWASMHeapSize: u.HEAPU32[e >> 2],
        usedWASMHeapSize: u.HEAPU32[1 + (e >> 2)],
        totalJSHeapSize: u.HEAPF64[1 + (e >> 3)],
        usedJSHeapSize: u.HEAPF64[2 + (e >> 3)]
      };
    }
  };
  function x(e, t, n) {
    if (e.indexOf("fullscreen error") == -1) {
      if (u.startupErrorHandler) {
        u.startupErrorHandler(e, t, n);
      } else if (!u.errorHandler || !u.errorHandler(e, t, n)) {
        console.log("Invoking error handler due to\n" + e);
        if (typeof dump == "function") {
          dump("Invoking error handler due to\n" + e);
        }
        if (!x.didShowErrorMessage) {
          if ((e = "An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n" + e).indexOf("DISABLE_EXCEPTION_CATCHING") != -1) {
            e = "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.";
          } else if (e.indexOf("Cannot enlarge memory arrays") != -1) {
            e = "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.";
          } else if (e.indexOf("Invalid array buffer length") != -1 || e.indexOf("Invalid typed array length") != -1 || e.indexOf("out of memory") != -1 || e.indexOf("could not allocate memory") != -1) {
            e = "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings.";
          }
          alert(e);
          x.didShowErrorMessage = true;
        }
      }
    }
  }
  function S(e, t) {
    if (e != "symbolsUrl") {
      var n = u.downloadProgress[e];
      n = n || (u.downloadProgress[e] = {
        started: false,
        finished: false,
        lengthComputable: false,
        total: 0,
        loaded: 0
      });
      if (typeof t == "object" && (t.type == "progress" || t.type == "load")) {
        if (!n.started) {
          n.started = true;
          n.lengthComputable = t.lengthComputable;
        }
        n.total = t.total;
        n.loaded = t.loaded;
        if (t.type == "load") {
          n.finished = true;
        }
      }
      var r = 0;
      var o = 0;
      var a = 0;
      var i = 0;
      var s = 0;
      for (e in u.downloadProgress) {
        if (!(n = u.downloadProgress[e]).started) {
          return;
        }
        a++;
        if (n.lengthComputable) {
          r += n.loaded;
          o += n.total;
          i++;
        } else if (!n.finished) {
          s++;
        }
      }
      l((a ? (a - s - (o ? i * (o - r) / o : 0)) / a : 0) * 0.9);
    }
  }
  function C() {
    var e = this;
    this.isConnected = this.connect().then(function () {
      return e.cleanUpCache();
    });
    this.isConnected.catch(function (e) {
      e = "Error when initializing cache: " + e;
      console.log("[UnityCache] " + e);
    });
  }
  function E(e) {
    console.log("[UnityCache] " + e);
  }
  function U(e) {
    U.link = U.link || document.createElement("a");
    U.link.href = e;
    return U.link.href;
  }
  u.SystemInfo = function () {
    var e;
    var t;
    var n;
    var r;
    var o = navigator.userAgent + " ";
    var a = [["Firefox", "Firefox"], ["OPR", "Opera"], ["Edg", "Edge"], ["SamsungBrowser", "Samsung Browser"], ["Trident", "Internet Explorer"], ["MSIE", "Internet Explorer"], ["Chrome", "Chrome"], ["CriOS", "Chrome on iOS Safari"], ["FxiOS", "Firefox on iOS Safari"], ["Safari", "Safari"]];
    function i(e, t, n) {
      return (e = RegExp(e, "i").exec(t)) && e[n];
    }
    for (var s = 0; s < a.length; ++s) {
      if (t = i(a[s][0] + "[/ ](.*?)[ \\)]", o, 1)) {
        e = a[s][1];
        break;
      }
    }
    if (e == "Safari") {
      t = i("Version/(.*?) ", o, 1);
    }
    if (e == "Internet Explorer") {
      t = i("rv:(.*?)\\)? ", o, 1) || t;
    }
    for (var l = [["Windows (.*?)[;)]", "Windows"], ["Android ([0-9_.]+)", "Android"], ["iPhone OS ([0-9_.]+)", "iPhoneOS"], ["iPad.*? OS ([0-9_.]+)", "iPadOS"], ["FreeBSD( )", "FreeBSD"], ["OpenBSD( )", "OpenBSD"], ["Linux|X11()", "Linux"], ["Mac OS X ([0-9_\\.]+)", "MacOS"], ["bot|google|baidu|bing|msn|teoma|slurp|yandex", "Search Bot"]], c = 0; c < l.length; ++c) {
      if (u = i(l[c][0], o, 1)) {
        n = l[c][1];
        u = u.replace(/_/g, ".");
        break;
      }
    }
    var d;
    var u = {
      "NT 5.0": "2000",
      "NT 5.1": "XP",
      "NT 5.2": "Server 2003",
      "NT 6.0": "Vista",
      "NT 6.1": "7",
      "NT 6.2": "8",
      "NT 6.3": "8.1",
      "NT 10.0": "10"
    }[u] || u;
    if (f = document.createElement("canvas")) {
      d = (h = f.getContext("webgl2")) ? 2 : 0;
      if (!h) {
        if (h = f && f.getContext("webgl")) {
          d = 1;
        }
      }
      if (h) {
        r = h.getExtension("WEBGL_debug_renderer_info") && h.getParameter(37446) || h.getParameter(7937);
      }
    }
    var f = typeof SharedArrayBuffer != "undefined";
    var h = typeof WebAssembly == "object" && typeof WebAssembly.compile == "function";
    return {
      width: screen.width,
      height: screen.height,
      userAgent: o.trim(),
      browser: e || "Unknown browser",
      browserVersion: t || "Unknown version",
      mobile: /Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),
      os: n || "Unknown OS",
      osVersion: u || "Unknown OS Version",
      gpu: r || "Unknown GPU",
      language: navigator.userLanguage || navigator.language,
      hasWebGL: d,
      hasCursorLock: !!document.body.requestPointerLock,
      hasFullscreen: !!document.body.requestFullscreen || !!document.body.webkitRequestFullscreen,
      hasThreads: f,
      hasWasm: h,
      hasWasmThreads: false
    };
  }();
  u.abortHandler = function (e) {
    x(e, "", 0);
    return true;
  };
  Error.stackTraceLimit = Math.max(Error.stackTraceLimit || 0, 50);
  u.readBodyWithProgress = function (a, i, s) {
    var e = a.body ? a.body.getReader() : undefined;
    var l = a.headers.get("Content-Length") !== undefined;
    var c = function (e, t) {
      if (!t) {
        return 0;
      }
      var t = e.headers.get("Content-Encoding");
      var n = parseInt(e.headers.get("Content-Length"));
      switch (t) {
        case "br":
          return Math.round(n * 5);
        case "gzip":
          return Math.round(n * 4);
        default:
          return n;
      }
    }(a, l);
    var d = new Uint8Array(c);
    var u = [];
    var f = 0;
    var h = 0;
    if (!l) {
      console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance.");
    }
    return function o() {
      if (e === undefined) {
        return a.arrayBuffer().then(function (e) {
          var t = new Uint8Array(e);
          i({
            type: "progress",
            response: a,
            total: e.length,
            loaded: 0,
            lengthComputable: l,
            chunk: s ? t : null
          });
          return t;
        });
      } else {
        return e.read().then(function (e) {
          if (e.done) {
            if (f === c) {
              return d;
            }
            if (f < c) {
              return d.slice(0, f);
            }
            var t = new Uint8Array(f);
            t.set(d, 0);
            var n = h;
            for (var r = 0; r < u.length; ++r) {
              t.set(u[r], n);
              n += u[r].length;
            }
            return t;
          }
          if (f + e.value.length <= d.length) {
            d.set(e.value, f);
            h = f + e.value.length;
          } else {
            u.push(e.value);
          }
          f += e.value.length;
          i({
            type: "progress",
            response: a,
            total: Math.max(c, f),
            loaded: f,
            lengthComputable: l,
            chunk: s ? e.value : null
          });
          return o();
        });
      }
    }().then(function (e) {
      i({
        type: "load",
        response: a,
        total: e.length,
        loaded: e.length,
        lengthComputable: l,
        chunk: null
      });
      a.parsedBody = e;
      return a;
    });
  };
  u.fetchWithProgress = function (e, t) {
    function n() {}
    if (t && t.onProgress) {
      n = t.onProgress;
    }
    return fetch(e, t).then(function (e) {
      return u.readBodyWithProgress(e, n, t.enableStreamingDownload);
    });
  };
  h = {
    name: "UnityCache",
    version: 4
  };
  m = {
    name: "RequestMetaDataStore",
    version: 1
  };
  b = "RequestStore";
  p = "WebAssembly";
  g = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  w = null;
  C.getInstance = function () {
    return w = w || new C();
  };
  C.destroyInstance = function () {
    if (w) {
      return w.close().then(function () {
        w = null;
      });
    } else {
      return Promise.resolve();
    }
  };
  C.prototype.clearCache = function () {
    var r = this;
    return this.isConnected.then(function () {
      return r.execute(m.name, "clear", []);
    }).then(function () {
      return r.cache.keys();
    }).then(function e(t) {
      var n;
      if (t.length === 0) {
        return Promise.resolve();
      } else {
        n = t.pop();
        return r.cache.delete(n).then(function () {
          return e(t);
        });
      }
    });
  };
  C.UnityCacheDatabase = h;
  C.RequestMetaDataStore = m;
  C.MaximumCacheSize = 1073741824;
  C.prototype.loadRequest = function (e) {
    var t = this;
    return t.isConnected.then(function () {
      return Promise.all([t.cache.match(e), t.loadRequestMetaData(e)]);
    }).then(function (e) {
      if (e[0] !== undefined && e[1] !== undefined) {
        return {
          response: e[0],
          metaData: e[1]
        };
      }
    });
  };
  C.prototype.loadRequestMetaData = function (e) {
    e = typeof e == "string" ? e : e.url;
    return this.execute(m.name, "get", [e]);
  };
  C.prototype.updateRequestMetaData = function (e) {
    return this.execute(m.name, "put", [e]);
  };
  C.prototype.storeRequest = function (e, t) {
    var n = this;
    return n.isConnected.then(function () {
      return n.cache.put(e, t);
    });
  };
  C.prototype.close = function () {
    return this.isConnected.then(function () {
      if (this.database) {
        this.database.close();
        this.database = null;
      }
      this.cache &&= null;
    }.bind(this));
  };
  C.prototype.connect = function () {
    var o = this;
    if (g === undefined) {
      return Promise.reject(new Error("Could not connect to cache: IndexedDB is not supported."));
    } else if (window.caches === undefined) {
      return Promise.reject(new Error("Could not connect to cache: Cache API is not supported."));
    } else {
      return new Promise(function (t, n) {
        try {
          function r() {
            if (o.openDBTimeout) {
              clearTimeout(o.openDBTimeout);
              o.openDBTimeout = null;
            }
          }
          o.openDBTimeout = setTimeout(function () {
            if (o.database === undefined) {
              n(new Error("Could not connect to cache: Database timeout."));
            }
          }, 20000);
          var e = g.open(h.name, h.version);
          e.onupgradeneeded = o.upgradeDatabase.bind(o);
          e.onsuccess = function (e) {
            r();
            o.database = e.target.result;
            t();
          };
          e.onerror = function (e) {
            r();
            o.database = null;
            n(new Error("Could not connect to database."));
          };
        } catch (e) {
          r();
          o.database = null;
          o.cache = null;
          n(new Error("Could not connect to cache: Could not connect to database."));
        }
      }).then(function () {
        var e = h.name + "_" + u.companyName + "_" + u.productName;
        return caches.open(e);
      }).then(function (e) {
        o.cache = e;
      });
    }
  };
  C.prototype.upgradeDatabase = function (e) {
    var t;
    var e = e.target.result;
    if (!e.objectStoreNames.contains(m.name)) {
      t = e.createObjectStore(m.name, {
        keyPath: "url"
      });
      ["accessedAt", "updatedAt"].forEach(function (e) {
        t.createIndex(e, e);
      });
    }
    if (e.objectStoreNames.contains(b)) {
      e.deleteObjectStore(b);
    }
    if (e.objectStoreNames.contains(p)) {
      e.deleteObjectStore(p);
    }
  };
  C.prototype.execute = function (a, i, s) {
    return this.isConnected.then(function () {
      return new Promise(function (t, n) {
        try {
          var e;
          var r;
          var o;
          if (this.database === null) {
            n(new Error("indexedDB access denied"));
          } else {
            e = ["put", "delete", "clear"].indexOf(i) != -1 ? "readwrite" : "readonly";
            r = this.database.transaction([a], e).objectStore(a);
            if (i == "openKeyCursor") {
              r = r.index(s[0]);
              s = s.slice(1);
            }
            (o = r[i].apply(r, s)).onsuccess = function (e) {
              t(e.target.result);
            };
            o.onerror = function (e) {
              n(e);
            };
          }
        } catch (e) {
          n(e);
        }
      }.bind(this));
    }.bind(this));
  };
  C.prototype.getMetaDataEntries = function () {
    var r = this;
    var o = 0;
    var a = [];
    return new Promise(function (t, n) {
      var e = r.database.transaction([m.name], "readonly").objectStore(m.name).openCursor();
      e.onsuccess = function (e) {
        e = e.target.result;
        if (e) {
          o += e.value.size;
          a.push(e.value);
          e.continue();
        } else {
          t({
            metaDataEntries: a,
            cacheSize: o
          });
        }
      };
      e.onerror = function (e) {
        n(e);
      };
    });
  };
  C.prototype.cleanUpCache = function () {
    var i = this;
    return this.getMetaDataEntries().then(function (e) {
      for (var t = e.metaDataEntries, n = e.cacheSize, r = [], o = [], a = 0; a < t.length; ++a) {
        if (t[a].version == u.productVersion) {
          o.push(t[a]);
        } else {
          r.push(t[a]);
          n -= t[a].size;
        }
      }
      o.sort(function (e, t) {
        return e.accessedAt - t.accessedAt;
      });
      for (a = 0; a < o.length && !(n < C.MaximumCacheSize); ++a) {
        r.push(o[a]);
        n -= o[a].size;
      }
      return function e() {
        var t;
        if (r.length === 0) {
          return Promise.resolve();
        } else {
          t = r.pop();
          return i.cache.delete(t.url).then(function (e) {
            if (e) {
              r = t.url;
              return new Promise(function (e, t) {
                var n = i.database.transaction([m.name], "readwrite");
                n.objectStore(m.name).delete(r);
                n.oncomplete = e;
                n.onerror = t;
              });
            }
            var r;
          }).then(e);
        }
      }();
    });
  };
  u.UnityCache = C;
  v = u.UnityCache;
  y = u.fetchWithProgress;
  k = u.readBodyWithProgress;
  u.cachedFetch = function (o, a) {
    var e;
    var t;
    var i = v.getInstance();
    var s = U(typeof o == "string" ? o : o.url);
    var l = {
      enabled: (e = s, (!(t = a) || !t.method || t.method === "GET") && (!t || ["must-revalidate", "immutable"].indexOf(t.control) != -1) && !!e.match("^https?://"))
    };
    function c(n, r) {
      return fetch(n, r).then(function (e) {
        var t;
        if (!l.enabled || l.revalidated) {
          return e;
        } else if (e.status === 304) {
          l.revalidated = true;
          i.updateRequestMetaData(l.metaData).then(function () {
            E("'" + l.metaData.url + "' successfully revalidated and served from the indexedDB cache");
          }).catch(function (e) {
            E("'" + l.metaData.url + "' successfully revalidated but not stored in the indexedDB cache due to the error: " + e);
          });
          return k(l.response, r.onProgress, r.enableStreamingDownload);
        } else if (e.status == 200) {
          l.response = e;
          l.metaData.updatedAt = l.metaData.accessedAt;
          l.revalidated = true;
          t = e.clone();
          return k(e, r.onProgress, r.enableStreamingDownload).then(function (e) {
            l.metaData.size = e.parsedBody.length;
            Promise.all([i.storeRequest(n, t), i.updateRequestMetaData(l.metaData)]).then(function () {
              E("'" + s + "' successfully downloaded and stored in the indexedDB cache");
            }).catch(function (e) {
              E("'" + s + "' successfully downloaded but not stored in the indexedDB cache due to the error: " + e);
            });
            return e;
          });
        } else {
          E("'" + s + "' request failed with status: " + e.status + " " + e.statusText);
          return k(e, r.onProgress, r.enableStreamingDownload);
        }
      });
    }
    if (a) {
      l.control = a.control;
      l.companyName = a.companyName;
      l.productName = a.productName;
      l.productVersion = a.productVersion;
    }
    l.revalidated = false;
    l.metaData = {
      url: s,
      accessedAt: Date.now(),
      version: l.productVersion
    };
    l.response = null;
    if (l.enabled) {
      return i.loadRequest(s).then(function (e) {
        var n;
        var r;
        var t;
        if (e) {
          n = e.response;
          r = e.metaData;
          l.response = n;
          l.metaData.size = r.size;
          l.metaData.updatedAt = r.updatedAt;
          if (l.control == "immutable") {
            l.revalidated = true;
            i.updateRequestMetaData(r).then(function () {
              E("'" + l.metaData.url + "' served from the indexedDB cache without revalidation");
            });
            return k(n, a.onProgress, a.enableStreamingDownload);
          } else {
            e = s;
            if ((t = window.location.href.match(/^[a-z]+:\/\/[^\/]+/)) && !e.lastIndexOf(t[0], 0) || !n.headers.get("Last-Modified") && !n.headers.get("ETag")) {
              e = (a = a || {}).headers || {};
              a.headers = e;
              if (n.headers.get("Last-Modified")) {
                e["If-Modified-Since"] = n.headers.get("Last-Modified");
                e["Cache-Control"] = "no-cache";
              } else if (n.headers.get("ETag")) {
                e["If-None-Match"] = n.headers.get("ETag");
                e["Cache-Control"] = "no-cache";
              }
              return c(o, a);
            } else {
              return fetch(s, {
                method: "HEAD"
              }).then(function (t) {
                l.revalidated = ["Last-Modified", "ETag"].every(function (e) {
                  return !n.headers.get(e) || n.headers.get(e) == t.headers.get(e);
                });
                if (l.revalidated) {
                  i.updateRequestMetaData(r).then(function () {
                    E("'" + l.metaData.url + "' successfully revalidated and served from the indexedDB cache");
                  });
                  return k(l.response, a.onProgress, a.enableStreamingDownload);
                } else {
                  return c(o, a);
                }
              });
            }
          }
        } else {
          return c(o, a);
        }
      }).catch(function (e) {
        E("Failed to load '" + l.metaData.url + "' from indexedDB cache due to the error: " + e);
        return y(o, a);
      });
    } else {
      return y(o, a);
    }
  };
  var D = {
    gzip: {
      require: function (e) {
        var t;
        var n = {
          "inflate.js": function (e, t, n) {
            "use strict";

            var u = e("./zlib/inflate");
            var f = e("./utils/common");
            var h = e("./utils/strings");
            var m = e("./zlib/constants");
            var r = e("./zlib/messages");
            var o = e("./zlib/zstream");
            var a = e("./zlib/gzheader");
            var b = Object.prototype.toString;
            function i(e) {
              if (!(this instanceof i)) {
                return new i(e);
              }
              this.options = f.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
              }, e || {});
              var t = this.options;
              if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
                t.windowBits = -t.windowBits;
                if (t.windowBits === 0) {
                  t.windowBits = -15;
                }
              }
              if (!!(t.windowBits >= 0) && !!(t.windowBits < 16) && (!e || !e.windowBits)) {
                t.windowBits += 32;
              }
              if (t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) == 0) {
                t.windowBits |= 15;
              }
              this.err = 0;
              this.msg = "";
              this.ended = false;
              this.chunks = [];
              this.strm = new o();
              this.strm.avail_out = 0;
              if ((e = u.inflateInit2(this.strm, t.windowBits)) !== m.Z_OK) {
                throw new Error(r[e]);
              }
              this.header = new a();
              u.inflateGetHeader(this.strm, this.header);
            }
            function s(e, t) {
              (t = new i(t)).push(e, true);
              if (t.err) {
                throw t.msg || r[t.err];
              }
              return t.result;
            }
            i.prototype.push = function (e, t) {
              var n;
              var r;
              var o;
              var a;
              var i;
              var s = this.strm;
              var l = this.options.chunkSize;
              var c = this.options.dictionary;
              var d = false;
              if (this.ended) {
                return false;
              }
              r = t === ~~t ? t : t === true ? m.Z_FINISH : m.Z_NO_FLUSH;
              if (typeof e == "string") {
                s.input = h.binstring2buf(e);
              } else if (b.call(e) === "[object ArrayBuffer]") {
                s.input = new Uint8Array(e);
              } else {
                s.input = e;
              }
              s.next_in = 0;
              s.avail_in = s.input.length;
              do {
                if (s.avail_out === 0) {
                  s.output = new f.Buf8(l);
                  s.next_out = 0;
                  s.avail_out = l;
                }
                if ((n = u.inflate(s, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && c) {
                  i = typeof c == "string" ? h.string2buf(c) : b.call(c) === "[object ArrayBuffer]" ? new Uint8Array(c) : c;
                  n = u.inflateSetDictionary(this.strm, i);
                }
                if (n === m.Z_BUF_ERROR && d === true) {
                  n = m.Z_OK;
                  d = false;
                }
                if (n !== m.Z_STREAM_END && n !== m.Z_OK) {
                  this.onEnd(n);
                  return !(this.ended = true);
                }
              } while (!s.next_out || s.avail_out !== 0 && n !== m.Z_STREAM_END && (s.avail_in !== 0 || r !== m.Z_FINISH && r !== m.Z_SYNC_FLUSH) || (this.options.to === "string" ? (i = h.utf8border(s.output, s.next_out), o = s.next_out - i, a = h.buf2string(s.output, i), s.next_out = o, s.avail_out = l - o, o && f.arraySet(s.output, s.output, i, o, 0), this.onData(a)) : this.onData(f.shrinkBuf(s.output, s.next_out))), s.avail_in === 0 && s.avail_out === 0 && (d = true), (s.avail_in > 0 || s.avail_out === 0) && n !== m.Z_STREAM_END);
              if ((r = n === m.Z_STREAM_END ? m.Z_FINISH : r) === m.Z_FINISH) {
                n = u.inflateEnd(this.strm);
                this.onEnd(n);
                this.ended = true;
                return n === m.Z_OK;
              } else {
                return r !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(s.avail_out = 0));
              }
            };
            i.prototype.onData = function (e) {
              this.chunks.push(e);
            };
            i.prototype.onEnd = function (e) {
              if (e === m.Z_OK) {
                if (this.options.to === "string") {
                  this.result = this.chunks.join("");
                } else {
                  this.result = f.flattenChunks(this.chunks);
                }
              }
              this.chunks = [];
              this.err = e;
              this.msg = this.strm.msg;
            };
            n.Inflate = i;
            n.inflate = s;
            n.inflateRaw = function (e, t) {
              (t = t || {}).raw = true;
              return s(e, t);
            };
            n.ungzip = s;
          },
          "utils/common.js": function (e, t, n) {
            "use strict";

            var r = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
            n.assign = function (e) {
              for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var n = t.shift();
                if (n) {
                  if (typeof n != "object") {
                    throw new TypeError(n + "must be non-object");
                  }
                  for (var r in n) {
                    if (n.hasOwnProperty(r)) {
                      e[r] = n[r];
                    }
                  }
                }
              }
              return e;
            };
            n.shrinkBuf = function (e, t) {
              if (e.length !== t) {
                if (e.subarray) {
                  return e.subarray(0, t);
                }
                e.length = t;
              }
              return e;
            };
            var o = {
              arraySet: function (e, t, n, r, o) {
                if (t.subarray && e.subarray) {
                  e.set(t.subarray(n, n + r), o);
                } else {
                  for (var a = 0; a < r; a++) {
                    e[o + a] = t[n + a];
                  }
                }
              },
              flattenChunks: function (e) {
                var t;
                var n;
                var r;
                var o = 0;
                for (var a = 0, i = e.length; a < i; a++) {
                  o += e[a].length;
                }
                r = new Uint8Array(o);
                a = t = 0;
                i = e.length;
                for (; a < i; a++) {
                  n = e[a];
                  r.set(n, t);
                  t += n.length;
                }
                return r;
              }
            };
            var a = {
              arraySet: function (e, t, n, r, o) {
                for (var a = 0; a < r; a++) {
                  e[o + a] = t[n + a];
                }
              },
              flattenChunks: function (e) {
                return [].concat.apply([], e);
              }
            };
            n.setTyped = function (e) {
              if (e) {
                n.Buf8 = Uint8Array;
                n.Buf16 = Uint16Array;
                n.Buf32 = Int32Array;
                n.assign(n, o);
              } else {
                n.Buf8 = Array;
                n.Buf16 = Array;
                n.Buf32 = Array;
                n.assign(n, a);
              }
            };
            n.setTyped(r);
          },
          "utils/strings.js": function (e, t, n) {
            "use strict";

            var l = e("./common");
            var o = true;
            var a = true;
            try {
              String.fromCharCode.apply(null, [0]);
            } catch (e) {
              o = false;
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1));
            } catch (e) {
              a = false;
            }
            var c = new l.Buf8(256);
            for (var r = 0; r < 256; r++) {
              c[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
            }
            function d(e, t) {
              if (t < 65537 && (e.subarray && a || !e.subarray && o)) {
                return String.fromCharCode.apply(null, l.shrinkBuf(e, t));
              }
              var n = "";
              for (var r = 0; r < t; r++) {
                n += String.fromCharCode(e[r]);
              }
              return n;
            }
            c[254] = c[254] = 1;
            n.string2buf = function (e) {
              var t;
              var n;
              var r;
              var o;
              for (var a = e.length, i = 0, s = 0; s < a; s++) {
                if (((n = e.charCodeAt(s)) & 64512) == 55296 && s + 1 < a && ((r = e.charCodeAt(s + 1)) & 64512) == 56320) {
                  n = 65536 + (n - 55296 << 10) + (r - 56320);
                  s++;
                }
                i += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
              }
              t = new l.Buf8(i);
              s = o = 0;
              for (; o < i; s++) {
                if (((n = e.charCodeAt(s)) & 64512) == 55296 && s + 1 < a && ((r = e.charCodeAt(s + 1)) & 64512) == 56320) {
                  n = 65536 + (n - 55296 << 10) + (r - 56320);
                  s++;
                }
                if (n < 128) {
                  t[o++] = n;
                } else {
                  if (n < 2048) {
                    t[o++] = n >>> 6 | 192;
                  } else {
                    if (n < 65536) {
                      t[o++] = n >>> 12 | 224;
                    } else {
                      t[o++] = n >>> 18 | 240;
                      t[o++] = n >>> 12 & 63 | 128;
                    }
                    t[o++] = n >>> 6 & 63 | 128;
                  }
                  t[o++] = n & 63 | 128;
                }
              }
              return t;
            };
            n.buf2binstring = function (e) {
              return d(e, e.length);
            };
            n.binstring2buf = function (e) {
              var t = new l.Buf8(e.length);
              for (var n = 0, r = t.length; n < r; n++) {
                t[n] = e.charCodeAt(n);
              }
              return t;
            };
            n.buf2string = function (e, t) {
              for (var n, r, o = t || e.length, a = new Array(o * 2), i = 0, s = 0; s < o;) {
                if ((n = e[s++]) < 128) {
                  a[i++] = n;
                } else if ((r = c[n]) > 4) {
                  a[i++] = 65533;
                  s += r - 1;
                } else {
                  for (n &= r === 2 ? 31 : r === 3 ? 15 : 7; r > 1 && s < o;) {
                    n = n << 6 | e[s++] & 63;
                    r--;
                  }
                  if (r > 1) {
                    a[i++] = 65533;
                  } else if (n < 65536) {
                    a[i++] = n;
                  } else {
                    n -= 65536;
                    a[i++] = n >> 10 & 1023 | 55296;
                    a[i++] = n & 1023 | 56320;
                  }
                }
              }
              return d(a, i);
            };
            n.utf8border = function (e, t) {
              for (var n = (t = (t = t || e.length) > e.length ? e.length : t) - 1; n >= 0 && (e[n] & 192) == 128;) {
                n--;
              }
              if (!(n < 0) && n !== 0 && n + c[e[n]] > t) {
                return n;
              } else {
                return t;
              }
            };
          },
          "zlib/inflate.js": function (e, t, n) {
            "use strict";

            var T = e("../utils/common");
            var R = e("./adler32");
            var P = e("./crc32");
            var I = e("./inffast");
            var L = e("./inftrees");
            var z = 0;
            var O = -2;
            var N = 1;
            var r = 852;
            var o = 592;
            function F(e) {
              return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
            }
            function a() {
              this.mode = 0;
              this.last = false;
              this.wrap = 0;
              this.havedict = false;
              this.flags = 0;
              this.dmax = 0;
              this.check = 0;
              this.total = 0;
              this.head = null;
              this.wbits = 0;
              this.wsize = 0;
              this.whave = 0;
              this.wnext = 0;
              this.window = null;
              this.hold = 0;
              this.bits = 0;
              this.length = 0;
              this.offset = 0;
              this.extra = 0;
              this.lencode = null;
              this.distcode = null;
              this.lenbits = 0;
              this.distbits = 0;
              this.ncode = 0;
              this.nlen = 0;
              this.ndist = 0;
              this.have = 0;
              this.next = null;
              this.lens = new T.Buf16(320);
              this.work = new T.Buf16(288);
              this.lendyn = null;
              this.distdyn = null;
              this.sane = 0;
              this.back = 0;
              this.was = 0;
            }
            function i(e) {
              var t;
              if (e && e.state) {
                t = e.state;
                e.total_in = e.total_out = t.total = 0;
                e.msg = "";
                if (t.wrap) {
                  e.adler = t.wrap & 1;
                }
                t.mode = N;
                t.last = 0;
                t.havedict = 0;
                t.dmax = 32768;
                t.head = null;
                t.hold = 0;
                t.bits = 0;
                t.lencode = t.lendyn = new T.Buf32(r);
                t.distcode = t.distdyn = new T.Buf32(o);
                t.sane = 1;
                t.back = -1;
                return z;
              } else {
                return O;
              }
            }
            function s(e) {
              var t;
              if (e && e.state) {
                (t = e.state).wsize = 0;
                t.whave = 0;
                t.wnext = 0;
                return i(e);
              } else {
                return O;
              }
            }
            function l(e, t) {
              var n;
              var r;
              if (!e || !e.state || (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15))) {
                return O;
              } else {
                if (r.window !== null && r.wbits !== t) {
                  r.window = null;
                }
                r.wrap = n;
                r.wbits = t;
                return s(e);
              }
            }
            function c(e, t) {
              var n;
              if (e) {
                n = new a();
                (e.state = n).window = null;
                if ((n = l(e, t)) !== z) {
                  e.state = null;
                }
                return n;
              } else {
                return O;
              }
            }
            var M;
            var H;
            var Z = true;
            function j(e, t, n, r) {
              var o;
              if ((e = e.state).window === null) {
                e.wsize = 1 << e.wbits;
                e.wnext = 0;
                e.whave = 0;
                e.window = new T.Buf8(e.wsize);
              }
              if (r >= e.wsize) {
                T.arraySet(e.window, t, n - e.wsize, e.wsize, 0);
                e.wnext = 0;
                e.whave = e.wsize;
              } else {
                if (r < (o = e.wsize - e.wnext)) {
                  o = r;
                }
                T.arraySet(e.window, t, n - r, o, e.wnext);
                if (r -= o) {
                  T.arraySet(e.window, t, n - r, r, 0);
                  e.wnext = r;
                  e.whave = e.wsize;
                } else {
                  e.wnext += o;
                  if (e.wnext === e.wsize) {
                    e.wnext = 0;
                  }
                  if (e.whave < e.wsize) {
                    e.whave += o;
                  }
                }
              }
              return 0;
            }
            n.inflateReset = s;
            n.inflateReset2 = l;
            n.inflateResetKeep = i;
            n.inflateInit = function (e) {
              return c(e, 15);
            };
            n.inflateInit2 = c;
            n.inflate = function (e, t) {
              var n;
              var r;
              var o;
              var a;
              var i;
              var s;
              var l;
              var c;
              var d;
              var u;
              var f;
              var h;
              var m;
              var b;
              var p;
              var g;
              var w;
              var v;
              var y;
              var k;
              var _;
              var x;
              var S;
              var C;
              var E = 0;
              var U = new T.Buf8(4);
              var D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
              if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) {
                return O;
              }
              if ((n = e.state).mode === 12) {
                n.mode = 13;
              }
              i = e.next_out;
              o = e.output;
              l = e.avail_out;
              a = e.next_in;
              r = e.input;
              s = e.avail_in;
              c = n.hold;
              d = n.bits;
              u = s;
              f = l;
              x = z;
              e: while (true) {
                switch (n.mode) {
                  case N:
                    if (n.wrap === 0) {
                      n.mode = 13;
                    } else {
                      while (d < 16) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      if (n.wrap & 2 && c === 35615) {
                        U[n.check = 0] = c & 255;
                        U[1] = c >>> 8 & 255;
                        n.check = P(n.check, U, 2, 0);
                        d = c = 0;
                        n.mode = 2;
                      } else {
                        n.flags = 0;
                        if (n.head) {
                          n.head.done = false;
                        }
                        if (!(n.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
                          e.msg = "incorrect header check";
                          n.mode = 30;
                        } else if ((c & 15) != 8) {
                          e.msg = "unknown compression method";
                          n.mode = 30;
                        } else {
                          d -= 4;
                          _ = 8 + ((c >>>= 4) & 15);
                          if (n.wbits === 0) {
                            n.wbits = _;
                          } else if (_ > n.wbits) {
                            e.msg = "invalid window size";
                            n.mode = 30;
                            break;
                          }
                          n.dmax = 1 << _;
                          e.adler = n.check = 1;
                          n.mode = c & 512 ? 10 : 12;
                          d = c = 0;
                        }
                      }
                    }
                    break;
                  case 2:
                    while (d < 16) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    n.flags = c;
                    if ((n.flags & 255) != 8) {
                      e.msg = "unknown compression method";
                      n.mode = 30;
                      break;
                    }
                    if (n.flags & 57344) {
                      e.msg = "unknown header flags set";
                      n.mode = 30;
                      break;
                    }
                    if (n.head) {
                      n.head.text = c >> 8 & 1;
                    }
                    if (n.flags & 512) {
                      U[0] = c & 255;
                      U[1] = c >>> 8 & 255;
                      n.check = P(n.check, U, 2, 0);
                    }
                    d = c = 0;
                    n.mode = 3;
                  case 3:
                    while (d < 32) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    if (n.head) {
                      n.head.time = c;
                    }
                    if (n.flags & 512) {
                      U[0] = c & 255;
                      U[1] = c >>> 8 & 255;
                      U[2] = c >>> 16 & 255;
                      U[3] = c >>> 24 & 255;
                      n.check = P(n.check, U, 4, 0);
                    }
                    d = c = 0;
                    n.mode = 4;
                  case 4:
                    while (d < 16) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    if (n.head) {
                      n.head.xflags = c & 255;
                      n.head.os = c >> 8;
                    }
                    if (n.flags & 512) {
                      U[0] = c & 255;
                      U[1] = c >>> 8 & 255;
                      n.check = P(n.check, U, 2, 0);
                    }
                    d = c = 0;
                    n.mode = 5;
                  case 5:
                    if (n.flags & 1024) {
                      while (d < 16) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      n.length = c;
                      if (n.head) {
                        n.head.extra_len = c;
                      }
                      if (n.flags & 512) {
                        U[0] = c & 255;
                        U[1] = c >>> 8 & 255;
                        n.check = P(n.check, U, 2, 0);
                      }
                      d = c = 0;
                    } else if (n.head) {
                      n.head.extra = null;
                    }
                    n.mode = 6;
                  case 6:
                    if (n.flags & 1024 && ((h = s < (h = n.length) ? s : h) && (n.head && (_ = n.head.extra_len - n.length, n.head.extra ||= new Array(n.head.extra_len), T.arraySet(n.head.extra, r, a, h, _)), n.flags & 512 && (n.check = P(n.check, r, h, a)), s -= h, a += h, n.length -= h), n.length)) {
                      break e;
                    }
                    n.length = 0;
                    n.mode = 7;
                  case 7:
                    if (n.flags & 2048) {
                      if (s === 0) {
                        break e;
                      }
                      for (h = 0; _ = r[a + h++], n.head && _ && n.length < 65536 && (n.head.name += String.fromCharCode(_)), _ && h < s;);
                      if (n.flags & 512) {
                        n.check = P(n.check, r, h, a);
                      }
                      s -= h;
                      a += h;
                      if (_) {
                        break e;
                      }
                    } else if (n.head) {
                      n.head.name = null;
                    }
                    n.length = 0;
                    n.mode = 8;
                  case 8:
                    if (n.flags & 4096) {
                      if (s === 0) {
                        break e;
                      }
                      for (h = 0; _ = r[a + h++], n.head && _ && n.length < 65536 && (n.head.comment += String.fromCharCode(_)), _ && h < s;);
                      if (n.flags & 512) {
                        n.check = P(n.check, r, h, a);
                      }
                      s -= h;
                      a += h;
                      if (_) {
                        break e;
                      }
                    } else if (n.head) {
                      n.head.comment = null;
                    }
                    n.mode = 9;
                  case 9:
                    if (n.flags & 512) {
                      while (d < 16) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      if (c !== (n.check & 65535)) {
                        e.msg = "header crc mismatch";
                        n.mode = 30;
                        break;
                      }
                      d = c = 0;
                    }
                    if (n.head) {
                      n.head.hcrc = n.flags >> 9 & 1;
                      n.head.done = true;
                    }
                    e.adler = n.check = 0;
                    n.mode = 12;
                    break;
                  case 10:
                    while (d < 32) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    e.adler = n.check = F(c);
                    d = c = 0;
                    n.mode = 11;
                  case 11:
                    if (n.havedict === 0) {
                      e.next_out = i;
                      e.avail_out = l;
                      e.next_in = a;
                      e.avail_in = s;
                      n.hold = c;
                      n.bits = d;
                      return 2;
                    }
                    e.adler = n.check = 1;
                    n.mode = 12;
                  case 12:
                    if (t === 5 || t === 6) {
                      break e;
                    }
                  case 13:
                    if (n.last) {
                      c >>>= d & 7;
                      d -= d & 7;
                      n.mode = 27;
                    } else {
                      while (d < 3) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      n.last = c & 1;
                      --d;
                      switch ((c >>>= 1) & 3) {
                        case 0:
                          n.mode = 14;
                          break;
                        case 1:
                          var B;
                          var B = A = undefined;
                          var A = n;
                          if (Z) {
                            M = new T.Buf32(512);
                            H = new T.Buf32(32);
                            B = 0;
                            while (B < 144) {
                              A.lens[B++] = 8;
                            }
                            while (B < 256) {
                              A.lens[B++] = 9;
                            }
                            while (B < 280) {
                              A.lens[B++] = 7;
                            }
                            while (B < 288) {
                              A.lens[B++] = 8;
                            }
                            L(1, A.lens, 0, 288, M, 0, A.work, {
                              bits: 9
                            });
                            B = 0;
                            while (B < 32) {
                              A.lens[B++] = 5;
                            }
                            L(2, A.lens, 0, 32, H, 0, A.work, {
                              bits: 5
                            });
                            Z = false;
                          }
                          A.lencode = M;
                          A.lenbits = 9;
                          A.distcode = H;
                          A.distbits = 5;
                          n.mode = 20;
                          if (t !== 6) {
                            break;
                          }
                          c >>>= 2;
                          d -= 2;
                          break e;
                        case 2:
                          n.mode = 17;
                          break;
                        case 3:
                          e.msg = "invalid block type";
                          n.mode = 30;
                      }
                      c >>>= 2;
                      d -= 2;
                    }
                    break;
                  case 14:
                    c >>>= d & 7;
                    d -= d & 7;
                    while (d < 32) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    if ((c & 65535) != (c >>> 16 ^ 65535)) {
                      e.msg = "invalid stored block lengths";
                      n.mode = 30;
                      break;
                    }
                    n.length = c & 65535;
                    d = c = 0;
                    n.mode = 15;
                    if (t === 6) {
                      break e;
                    }
                  case 15:
                    n.mode = 16;
                  case 16:
                    if (h = n.length) {
                      if ((h = l < (h = s < h ? s : h) ? l : h) === 0) {
                        break e;
                      }
                      T.arraySet(o, r, a, h, i);
                      s -= h;
                      a += h;
                      l -= h;
                      i += h;
                      n.length -= h;
                    } else {
                      n.mode = 12;
                    }
                    break;
                  case 17:
                    while (d < 14) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    n.nlen = 257 + (c & 31);
                    c >>>= 5;
                    d -= 5;
                    n.ndist = 1 + (c & 31);
                    c >>>= 5;
                    d -= 5;
                    n.ncode = 4 + (c & 15);
                    c >>>= 4;
                    d -= 4;
                    if (n.nlen > 286 || n.ndist > 30) {
                      e.msg = "too many length or distance symbols";
                      n.mode = 30;
                      break;
                    }
                    n.have = 0;
                    n.mode = 18;
                  case 18:
                    while (n.have < n.ncode) {
                      while (d < 3) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      n.lens[D[n.have++]] = c & 7;
                      c >>>= 3;
                      d -= 3;
                    }
                    while (n.have < 19) {
                      n.lens[D[n.have++]] = 0;
                    }
                    n.lencode = n.lendyn;
                    n.lenbits = 7;
                    S = {
                      bits: n.lenbits
                    };
                    x = L(0, n.lens, 0, 19, n.lencode, 0, n.work, S);
                    n.lenbits = S.bits;
                    if (x) {
                      e.msg = "invalid code lengths set";
                      n.mode = 30;
                      break;
                    }
                    n.have = 0;
                    n.mode = 19;
                  case 19:
                    while (n.have < n.nlen + n.ndist) {
                      while (g = (E = n.lencode[c & (1 << n.lenbits) - 1]) >>> 16 & 255, w = E & 65535, !((p = E >>> 24) <= d)) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      if (w < 16) {
                        c >>>= p;
                        d -= p;
                        n.lens[n.have++] = w;
                      } else {
                        if (w === 16) {
                          for (C = p + 2; d < C;) {
                            if (s === 0) {
                              break e;
                            }
                            s--;
                            c += r[a++] << d;
                            d += 8;
                          }
                          c >>>= p;
                          d -= p;
                          if (n.have === 0) {
                            e.msg = "invalid bit length repeat";
                            n.mode = 30;
                            break;
                          }
                          _ = n.lens[n.have - 1];
                          h = 3 + (c & 3);
                          c >>>= 2;
                          d -= 2;
                        } else if (w === 17) {
                          for (C = p + 3; d < C;) {
                            if (s === 0) {
                              break e;
                            }
                            s--;
                            c += r[a++] << d;
                            d += 8;
                          }
                          _ = 0;
                          h = 3 + ((c >>>= p) & 7);
                          c >>>= 3;
                          d = d - p - 3;
                        } else {
                          for (C = p + 7; d < C;) {
                            if (s === 0) {
                              break e;
                            }
                            s--;
                            c += r[a++] << d;
                            d += 8;
                          }
                          _ = 0;
                          h = 11 + ((c >>>= p) & 127);
                          c >>>= 7;
                          d = d - p - 7;
                        }
                        if (n.have + h > n.nlen + n.ndist) {
                          e.msg = "invalid bit length repeat";
                          n.mode = 30;
                          break;
                        }
                        while (h--) {
                          n.lens[n.have++] = _;
                        }
                      }
                    }
                    if (n.mode === 30) {
                      break;
                    }
                    if (n.lens[256] === 0) {
                      e.msg = "invalid code -- missing end-of-block";
                      n.mode = 30;
                      break;
                    }
                    n.lenbits = 9;
                    S = {
                      bits: n.lenbits
                    };
                    x = L(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S);
                    n.lenbits = S.bits;
                    if (x) {
                      e.msg = "invalid literal/lengths set";
                      n.mode = 30;
                      break;
                    }
                    n.distbits = 6;
                    n.distcode = n.distdyn;
                    S = {
                      bits: n.distbits
                    };
                    x = L(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S);
                    n.distbits = S.bits;
                    if (x) {
                      e.msg = "invalid distances set";
                      n.mode = 30;
                      break;
                    }
                    n.mode = 20;
                    if (t === 6) {
                      break e;
                    }
                  case 20:
                    n.mode = 21;
                  case 21:
                    if (s >= 6 && l >= 258) {
                      e.next_out = i;
                      e.avail_out = l;
                      e.next_in = a;
                      e.avail_in = s;
                      n.hold = c;
                      n.bits = d;
                      I(e, f);
                      i = e.next_out;
                      o = e.output;
                      l = e.avail_out;
                      a = e.next_in;
                      r = e.input;
                      s = e.avail_in;
                      c = n.hold;
                      d = n.bits;
                      if (n.mode === 12) {
                        n.back = -1;
                      }
                      break;
                    }
                    for (n.back = 0; g = (E = n.lencode[c & (1 << n.lenbits) - 1]) >>> 16 & 255, w = E & 65535, !((p = E >>> 24) <= d);) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    if (g && (g & 240) == 0) {
                      v = p;
                      y = g;
                      k = w;
                      while (g = (E = n.lencode[k + ((c & (1 << v + y) - 1) >> v)]) >>> 16 & 255, w = E & 65535, !(v + (p = E >>> 24) <= d)) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      c >>>= v;
                      d -= v;
                      n.back += v;
                    }
                    c >>>= p;
                    d -= p;
                    n.back += p;
                    n.length = w;
                    if (g === 0) {
                      n.mode = 26;
                      break;
                    }
                    if (g & 32) {
                      n.back = -1;
                      n.mode = 12;
                      break;
                    }
                    if (g & 64) {
                      e.msg = "invalid literal/length code";
                      n.mode = 30;
                      break;
                    }
                    n.extra = g & 15;
                    n.mode = 22;
                  case 22:
                    if (n.extra) {
                      for (C = n.extra; d < C;) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      n.length += c & (1 << n.extra) - 1;
                      c >>>= n.extra;
                      d -= n.extra;
                      n.back += n.extra;
                    }
                    n.was = n.length;
                    n.mode = 23;
                  case 23:
                    while (g = (E = n.distcode[c & (1 << n.distbits) - 1]) >>> 16 & 255, w = E & 65535, !((p = E >>> 24) <= d)) {
                      if (s === 0) {
                        break e;
                      }
                      s--;
                      c += r[a++] << d;
                      d += 8;
                    }
                    if ((g & 240) == 0) {
                      v = p;
                      y = g;
                      k = w;
                      while (g = (E = n.distcode[k + ((c & (1 << v + y) - 1) >> v)]) >>> 16 & 255, w = E & 65535, !(v + (p = E >>> 24) <= d)) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      c >>>= v;
                      d -= v;
                      n.back += v;
                    }
                    c >>>= p;
                    d -= p;
                    n.back += p;
                    if (g & 64) {
                      e.msg = "invalid distance code";
                      n.mode = 30;
                      break;
                    }
                    n.offset = w;
                    n.extra = g & 15;
                    n.mode = 24;
                  case 24:
                    if (n.extra) {
                      for (C = n.extra; d < C;) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      n.offset += c & (1 << n.extra) - 1;
                      c >>>= n.extra;
                      d -= n.extra;
                      n.back += n.extra;
                    }
                    if (n.offset > n.dmax) {
                      e.msg = "invalid distance too far back";
                      n.mode = 30;
                      break;
                    }
                    n.mode = 25;
                  case 25:
                    if (l === 0) {
                      break e;
                    }
                    if (n.offset > (h = f - l)) {
                      if ((h = n.offset - h) > n.whave && n.sane) {
                        e.msg = "invalid distance too far back";
                        n.mode = 30;
                        break;
                      }
                      m = h > n.wnext ? (h -= n.wnext, n.wsize - h) : n.wnext - h;
                      if (h > n.length) {
                        h = n.length;
                      }
                      b = n.window;
                    } else {
                      b = o;
                      m = i - n.offset;
                      h = n.length;
                    }
                    l -= h = l < h ? l : h;
                    n.length -= h;
                    while (o[i++] = b[m++], --h);
                    if (n.length === 0) {
                      n.mode = 21;
                    }
                    break;
                  case 26:
                    if (l === 0) {
                      break e;
                    }
                    o[i++] = n.length;
                    l--;
                    n.mode = 21;
                    break;
                  case 27:
                    if (n.wrap) {
                      while (d < 32) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c |= r[a++] << d;
                        d += 8;
                      }
                      f -= l;
                      e.total_out += f;
                      n.total += f;
                      if (f) {
                        e.adler = n.check = (n.flags ? P : R)(n.check, o, f, i - f);
                      }
                      f = l;
                      if ((n.flags ? c : F(c)) !== n.check) {
                        e.msg = "incorrect data check";
                        n.mode = 30;
                        break;
                      }
                      d = c = 0;
                    }
                    n.mode = 28;
                  case 28:
                    if (n.wrap && n.flags) {
                      while (d < 32) {
                        if (s === 0) {
                          break e;
                        }
                        s--;
                        c += r[a++] << d;
                        d += 8;
                      }
                      if (c !== (n.total & -1)) {
                        e.msg = "incorrect length check";
                        n.mode = 30;
                        break;
                      }
                      d = c = 0;
                    }
                    n.mode = 29;
                  case 29:
                    x = 1;
                    break e;
                  case 30:
                    x = -3;
                    break e;
                  case 31:
                    return -4;
                  default:
                    return O;
                }
              }
              e.next_out = i;
              e.avail_out = l;
              e.next_in = a;
              e.avail_in = s;
              n.hold = c;
              n.bits = d;
              if ((n.wsize || f !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== 4)) && j(e, e.output, e.next_out, f - e.avail_out)) {
                n.mode = 31;
                return -4;
              } else {
                u -= e.avail_in;
                f -= e.avail_out;
                e.total_in += u;
                e.total_out += f;
                n.total += f;
                if (n.wrap && f) {
                  e.adler = n.check = (n.flags ? P : R)(n.check, o, f, e.next_out - f);
                }
                e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === 12 ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0);
                if ((u == 0 && f === 0 || t === 4) && x === z) {
                  return -5;
                } else {
                  return x;
                }
              }
            };
            n.inflateEnd = function (e) {
              if (e && e.state) {
                e.state.window &&= null;
                e.state = null;
                return z;
              } else {
                return O;
              }
            };
            n.inflateGetHeader = function (e, t) {
              if (e && e.state && ((e = e.state).wrap & 2) != 0) {
                (e.head = t).done = false;
                return z;
              } else {
                return O;
              }
            };
            n.inflateSetDictionary = function (e, t) {
              var n;
              var r = t.length;
              if (!e || !e.state || (n = e.state).wrap !== 0 && n.mode !== 11) {
                return O;
              } else if (n.mode === 11 && R(1, t, r, 0) !== n.check) {
                return -3;
              } else if (j(e, t, r, r)) {
                n.mode = 31;
                return -4;
              } else {
                n.havedict = 1;
                return z;
              }
            };
            n.inflateInfo = "pako inflate (from Nodeca project)";
          },
          "zlib/constants.js": function (e, t, n) {
            "use strict";

            t.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8
            };
          },
          "zlib/messages.js": function (e, t, n) {
            "use strict";

            t.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version"
            };
          },
          "zlib/zstream.js": function (e, t, n) {
            "use strict";

            t.exports = function () {
              this.input = null;
              this.next_in = 0;
              this.avail_in = 0;
              this.total_in = 0;
              this.output = null;
              this.next_out = 0;
              this.avail_out = 0;
              this.total_out = 0;
              this.msg = "";
              this.state = null;
              this.data_type = 2;
              this.adler = 0;
            };
          },
          "zlib/gzheader.js": function (e, t, n) {
            "use strict";

            t.exports = function () {
              this.text = 0;
              this.time = 0;
              this.xflags = 0;
              this.os = 0;
              this.extra = null;
              this.extra_len = 0;
              this.name = "";
              this.comment = "";
              this.hcrc = 0;
              this.done = false;
            };
          },
          "zlib/adler32.js": function (e, t, n) {
            "use strict";

            t.exports = function (e, t, n, r) {
              var o = e & 65535 | 0;
              var a = e >>> 16 & 65535 | 0;
              var i = 0;
              for (; n !== 0;) {
                for (n -= i = n > 2000 ? 2000 : n; a = a + (o = o + t[r++] | 0) | 0, --i;);
                o %= 65521;
                a %= 65521;
              }
              return o | a << 16 | 0;
            };
          },
          "zlib/crc32.js": function (e, t, n) {
            "use strict";

            var s = function () {
              var e = [];
              for (var t = 0; t < 256; t++) {
                var n = t;
                for (var r = 0; r < 8; r++) {
                  n = n & 1 ? n >>> 1 ^ -306674912 : n >>> 1;
                }
                e[t] = n;
              }
              return e;
            }();
            t.exports = function (e, t, n, r) {
              var o = s;
              var a = r + n;
              e ^= -1;
              for (var i = r; i < a; i++) {
                e = e >>> 8 ^ o[(e ^ t[i]) & 255];
              }
              return e ^ -1;
            };
          },
          "zlib/inffast.js": function (e, t, n) {
            "use strict";

            t.exports = function (e, t) {
              var n;
              var r;
              var o;
              var a;
              var i;
              var s;
              var l = e.state;
              var c = e.next_in;
              var d = e.input;
              var u = c + (e.avail_in - 5);
              var f = e.next_out;
              var h = e.output;
              var m = f - (t - e.avail_out);
              var b = f + (e.avail_out - 257);
              var p = l.dmax;
              var g = l.wsize;
              var w = l.whave;
              var v = l.wnext;
              var y = l.window;
              var k = l.hold;
              var _ = l.bits;
              var x = l.lencode;
              var S = l.distcode;
              var C = (1 << l.lenbits) - 1;
              var E = (1 << l.distbits) - 1;
              e: do {
                if (_ < 15) {
                  k += d[c++] << _;
                  _ += 8;
                  k += d[c++] << _;
                  _ += 8;
                }
                n = x[k & C];
                while (true) {
                  k >>>= r = n >>> 24;
                  _ -= r;
                  if ((r = n >>> 16 & 255) == 0) {
                    h[f++] = n & 65535;
                  } else {
                    if (!(r & 16)) {
                      if ((r & 64) == 0) {
                        n = x[(n & 65535) + (k & (1 << r) - 1)];
                        continue;
                      }
                      if (r & 32) {
                        l.mode = 12;
                        break e;
                      }
                      e.msg = "invalid literal/length code";
                      l.mode = 30;
                      break e;
                    }
                    o = n & 65535;
                    if (r &= 15) {
                      if (_ < r) {
                        k += d[c++] << _;
                        _ += 8;
                      }
                      o += k & (1 << r) - 1;
                      k >>>= r;
                      _ -= r;
                    }
                    if (_ < 15) {
                      k += d[c++] << _;
                      _ += 8;
                      k += d[c++] << _;
                      _ += 8;
                    }
                    n = S[k & E];
                    while (true) {
                      k >>>= r = n >>> 24;
                      _ -= r;
                      if (!((r = n >>> 16 & 255) & 16)) {
                        if ((r & 64) == 0) {
                          n = S[(n & 65535) + (k & (1 << r) - 1)];
                          continue;
                        }
                        e.msg = "invalid distance code";
                        l.mode = 30;
                        break e;
                      }
                      a = n & 65535;
                      if (_ < (r &= 15)) {
                        k += d[c++] << _;
                        if ((_ += 8) < r) {
                          k += d[c++] << _;
                          _ += 8;
                        }
                      }
                      if (p < (a += k & (1 << r) - 1)) {
                        e.msg = "invalid distance too far back";
                        l.mode = 30;
                        break e;
                      }
                      k >>>= r;
                      _ -= r;
                      if ((r = f - m) < a) {
                        if (w < (r = a - r) && l.sane) {
                          e.msg = "invalid distance too far back";
                          l.mode = 30;
                          break e;
                        }
                        s = y;
                        if ((i = 0) === v) {
                          i += g - r;
                          if (r < o) {
                            for (o -= r; h[f++] = y[i++], --r;);
                            i = f - a;
                            s = h;
                          }
                        } else if (v < r) {
                          i += g + v - r;
                          if ((r -= v) < o) {
                            for (o -= r; h[f++] = y[i++], --r;);
                            i = 0;
                            if (v < o) {
                              for (o -= r = v; h[f++] = y[i++], --r;);
                              i = f - a;
                              s = h;
                            }
                          }
                        } else {
                          i += v - r;
                          if (r < o) {
                            for (o -= r; h[f++] = y[i++], --r;);
                            i = f - a;
                            s = h;
                          }
                        }
                        while (o > 2) {
                          h[f++] = s[i++];
                          h[f++] = s[i++];
                          h[f++] = s[i++];
                          o -= 3;
                        }
                        if (o) {
                          h[f++] = s[i++];
                          if (o > 1) {
                            h[f++] = s[i++];
                          }
                        }
                      } else {
                        for (i = f - a; h[f++] = h[i++], h[f++] = h[i++], h[f++] = h[i++], (o -= 3) > 2;);
                        if (o) {
                          h[f++] = h[i++];
                          if (o > 1) {
                            h[f++] = h[i++];
                          }
                        }
                      }
                      break;
                    }
                  }
                  break;
                }
              } while (c < u && f < b);
              k &= (1 << (_ -= (o = _ >> 3) << 3)) - 1;
              e.next_in = c -= o;
              e.next_out = f;
              e.avail_in = c < u ? u - c + 5 : 5 - (c - u);
              e.avail_out = f < b ? b - f + 257 : 257 - (f - b);
              l.hold = k;
              l.bits = _;
            };
          },
          "zlib/inftrees.js": function (e, t, n) {
            "use strict";

            var I = e("../utils/common");
            var L = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
            var z = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
            var O = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
            var N = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            t.exports = function (e, t, n, r, o, a, i, s) {
              var l;
              var c;
              var d;
              var u;
              var f;
              var h;
              var m;
              var b;
              var p;
              var g = s.bits;
              for (var w = 0, v = 0, y = 0, k = 0, _ = 0, x = 0, S = 0, C = 0, E = 0, U = 0, D = null, B = 0, A = new I.Buf16(16), T = new I.Buf16(16), R = null, P = 0, w = 0; w <= 15; w++) {
                A[w] = 0;
              }
              for (v = 0; v < r; v++) {
                A[t[n + v]]++;
              }
              _ = g;
              k = 15;
              for (; k >= 1 && A[k] === 0; k--);
              if (k < _) {
                _ = k;
              }
              if (k === 0) {
                o[a++] = 20971520;
                o[a++] = 20971520;
                s.bits = 1;
              } else {
                for (y = 1; y < k && A[y] === 0; y++);
                if (_ < y) {
                  _ = y;
                }
                w = C = 1;
                for (; w <= 15; w++) {
                  if ((C = (C <<= 1) - A[w]) < 0) {
                    return -1;
                  }
                }
                if (C > 0 && (e === 0 || k !== 1)) {
                  return -1;
                }
                T[1] = 0;
                w = 1;
                for (; w < 15; w++) {
                  T[w + 1] = T[w] + A[w];
                }
                for (v = 0; v < r; v++) {
                  if (t[n + v] !== 0) {
                    i[T[t[n + v]]++] = v;
                  }
                }
                h = e === 0 ? (D = R = i, 19) : e === 1 ? (D = L, B -= 257, R = z, P -= 257, 256) : (D = O, R = N, -1);
                w = y;
                f = a;
                S = v = U = 0;
                d = -1;
                u = (E = 1 << (x = _)) - 1;
                if (e === 1 && E > 852 || e === 2 && E > 592) {
                  return 1;
                }
                while (true) {
                  p = i[v] < h ? (b = 0, i[v]) : i[v] > h ? (b = R[P + i[v]], D[B + i[v]]) : (b = 96, 0);
                  l = 1 << (m = w - S);
                  y = c = 1 << x;
                  while (o[f + (U >> S) + (c -= l)] = m << 24 | b << 16 | p | 0, c !== 0);
                  for (l = 1 << w - 1; U & l;) {
                    l >>= 1;
                  }
                  U = l !== 0 ? (U & l - 1) + l : 0;
                  v++;
                  if (--A[w] == 0) {
                    if (w === k) {
                      break;
                    }
                    w = t[n + i[v]];
                  }
                  if (_ < w && (U & u) !== d) {
                    f += y;
                    C = 1 << (x = w - (S = S === 0 ? _ : S));
                    while (x + S < k && !((C -= A[x + S]) <= 0)) {
                      x++;
                      C <<= 1;
                    }
                    E += 1 << x;
                    if (e === 1 && E > 852 || e === 2 && E > 592) {
                      return 1;
                    }
                    o[d = U & u] = _ << 24 | x << 16 | f - a | 0;
                  }
                }
                if (U !== 0) {
                  o[f + U] = w - S << 24 | 4194304 | 0;
                }
                s.bits = _;
              }
              return 0;
            };
          }
        };
        for (t in n) {
          n[t].folder = t.substring(0, t.lastIndexOf("/") + 1);
        }
        function r(e, t) {
          var n = t.match(/^\//) ? null : e ? t.match(/^\.\.?\//) ? o(e.folder + t) : a(e, t) : o(t);
          if (n) {
            if (!n.exports) {
              n.parent = e;
              n(r.bind(null, n), n, n.exports = {});
            }
            return n.exports;
          }
          throw "module not found: " + t;
        }
        function o(e) {
          var t = [];
          if (e = e.split("/").every(function (e) {
            if (e == "..") {
              return t.pop();
            } else {
              return e == "." || e == "" || t.push(e);
            }
          }) ? t.join("/") : null) {
            return n[e] || n[e + ".js"] || n[e + "/index.js"];
          } else {
            return null;
          }
        }
        function a(e, t) {
          if (e) {
            return o(e.folder + "node_modules/" + t) || a(e.parent, t);
          } else {
            return null;
          }
        }
        return r(null, e);
      },
      decompress: function (e) {
        this.exports ||= this.require("inflate.js");
        try {
          return this.exports.inflate(e);
        } catch (e) {}
      },
      hasUnityMarker: function (e) {
        var t = 10;
        var n = "UnityWeb Compressed Content (gzip)";
        if (t > e.length || e[0] != 31 || e[1] != 139) {
          return false;
        }
        var r = e[3];
        if (r & 4) {
          if (t + 2 > e.length) {
            return false;
          }
          if ((t += 2 + e[t] + (e[t + 1] << 8)) > e.length) {
            return false;
          }
        }
        if (r & 8) {
          while (t < e.length && e[t]) {
            t++;
          }
          if (t + 1 > e.length) {
            return false;
          }
          t++;
        }
        return r & 16 && String.fromCharCode.apply(null, e.subarray(t, t + n.length + 1)) == n + "\0";
      }
    }
  };
  function B(n) {
    S(n);
    var e = u.cacheControl(u[n]);
    var t = u.companyName && u.productName ? u.cachedFetch : u.fetchWithProgress;
    var r = u[n];
    var r = /file:\/\//.exec(r) ? "same-origin" : undefined;
    return t(u[n], {
      method: "GET",
      companyName: u.companyName,
      productName: u.productName,
      productVersion: u.productVersion,
      control: e,
      mode: r,
      onProgress: function (e) {
        S(n, e);
      }
    }).then(function (e) {
      i = e.parsedBody;
      s = u[n];
      return new Promise(function (e, t) {
        try {
          for (var n in D) {
            var r;
            var o;
            var a;
            if (D[n].hasUnityMarker(i)) {
              if (s) {
                console.log("You can reduce startup time if you configure your web server to add \"Content-Encoding: " + n + "\" response header when serving \"" + s + "\" file.");
              }
              if (!(r = D[n]).worker) {
                o = URL.createObjectURL(new Blob(["this.require = ", r.require.toString(), "; this.decompress = ", r.decompress.toString(), "; this.onmessage = ", function (e) {
                  e = {
                    id: e.data.id,
                    decompressed: this.decompress(e.data.compressed)
                  };
                  postMessage(e, e.decompressed ? [e.decompressed.buffer] : []);
                }.toString(), "; postMessage({ ready: true });"], {
                  type: "application/javascript"
                }));
                r.worker = new Worker(o);
                r.worker.onmessage = function (e) {
                  if (e.data.ready) {
                    URL.revokeObjectURL(o);
                  } else {
                    this.callbacks[e.data.id](e.data.decompressed);
                    delete this.callbacks[e.data.id];
                  }
                };
                r.worker.callbacks = {};
                r.worker.nextCallbackId = 0;
              }
              a = r.worker.nextCallbackId++;
              r.worker.callbacks[a] = e;
              r.worker.postMessage({
                id: a,
                compressed: i
              }, [i.buffer]);
              return;
            }
          }
          e(i);
        } catch (e) {
          t(e);
        }
      });
      var i;
      var s;
    }).catch(function (e) {
      var t = "Failed to download file " + u[n];
      if (location.protocol == "file:") {
        c(t + ". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.", "error");
      } else {
        console.error(t);
      }
    });
  }
  function A() {
    Promise.all([B("frameworkUrl").then(function (e) {
      var s = URL.createObjectURL(new Blob([e], {
        type: "application/javascript"
      }));
      return new Promise(function (a, e) {
        var i = document.createElement("script");
        i.src = s;
        i.onload = function () {
          if (typeof unityFramework == "undefined" || !unityFramework) {
            var e;
            var t = [["br", "br"], ["gz", "gzip"]];
            for (e in t) {
              var n;
              var r = t[e];
              if (u.frameworkUrl.endsWith("." + r[0])) {
                n = "Unable to parse " + u.frameworkUrl + "!";
                if (location.protocol == "file:") {
                  c(n + " Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.", "error");
                  return;
                } else {
                  n += " This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header \"Content-Encoding: " + r[1] + "\" present. Check browser Console and Devtools Network tab to debug.";
                  if (r[0] == "br" && location.protocol == "http:") {
                    r = ["localhost", "127.0.0.1"].indexOf(location.hostname) != -1 ? "" : "Migrate your server to use HTTPS.";
                    n = /Firefox/.test(navigator.userAgent) ? "Unable to parse " + u.frameworkUrl + "!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header \"Content-Encoding: br\". Brotli compression may not be supported in Firefox over HTTP connections. " + r + " See <a href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=1670675\">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information." : "Unable to parse " + u.frameworkUrl + "!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header \"Content-Encoding: br\". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.";
                  }
                  c(n, "error");
                  return;
                }
              }
            }
            c("Unable to parse " + u.frameworkUrl + "! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)", "error");
          }
          var o = unityFramework;
          unityFramework = null;
          i.onload = null;
          URL.revokeObjectURL(s);
          a(o);
        };
        i.onerror = function (e) {
          c("Unable to load file " + u.frameworkUrl + "! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)", "error");
        };
        document.body.appendChild(i);
        u.deinitializers.push(function () {
          document.body.removeChild(i);
        });
      });
    }), B("codeUrl")]).then(function (e) {
      u.wasmBinary = e[1];
      e[0](u);
    });
    var e = B("dataUrl");
    u.preRun.push(function () {
      u.addRunDependency("dataUrl");
      e.then(function (e) {
        var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
        var n = 0;
        var r = "UnityWebData1.0\0";
        if (!String.fromCharCode.apply(null, e.subarray(n, n + r.length)) == r) {
          throw "unknown data format";
        }
        var o = t.getUint32(n += r.length, true);
        for (n += 4; n < o;) {
          var a = t.getUint32(n, true);
          n += 4;
          var i = t.getUint32(n, true);
          n += 4;
          var s = t.getUint32(n, true);
          n += 4;
          var l = String.fromCharCode.apply(null, e.subarray(n, n + s));
          n += s;
          for (var c = 0, d = l.indexOf("/", c) + 1; d > 0; c = d, d = l.indexOf("/", c) + 1) {
            u.FS_createPath(l.substring(0, c), l.substring(c, d - 1), true, true);
          }
          u.FS_createDataFile(l, null, e.subarray(a, a + i), true, true, true);
        }
        u.removeRunDependency("dataUrl");
      });
    });
  }
  return new Promise(function (e, t) {
    var n;
    if (u.SystemInfo.hasWebGL) {
      if (u.SystemInfo.hasWebGL == 1) {
        n = "Your browser does not support graphics API \"WebGL 2\" which is required for this content.";
        if (u.SystemInfo.browser == "Safari" && parseInt(u.SystemInfo.browserVersion) < 15) {
          if (u.SystemInfo.mobile || navigator.maxTouchPoints > 1) {
            n += "\nUpgrade to iOS 15 or later.";
          } else {
            n += "\nUpgrade to Safari 15 or later.";
          }
        }
        t(n);
      } else if (u.SystemInfo.hasWasm) {
        u.startupErrorHandler = t;
        l(0);
        u.postRun.push(function () {
          l(1);
          delete u.startupErrorHandler;
          e(_);
        });
        A();
      } else {
        t("Your browser does not support WebAssembly.");
      }
    } else {
      t("Your browser does not support WebGL.");
    }
  });
}