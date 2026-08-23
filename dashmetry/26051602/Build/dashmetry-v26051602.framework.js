function unityFramework(_0x24391e) {
  var _0x24391e = typeof _0x24391e !== "undefined" ? _0x24391e : {};
  _0x24391e.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x4f9071(_0x5ca827, _0x1b7377) {
    _0xdfc5d6("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x242db5(_0x5ca827, _0x1b7377);
  }
  _0x24391e.Pointer_stringify = _0x4f9071;
  var _0x293343 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x43469d = _0x3fe786().match(new RegExp(_0x293343));
  if (_0x43469d) {
    _0x24391e.stackTraceRegExp = new RegExp(_0x293343.replace("([^\\n]+)", _0x43469d[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x5bcf92 = function (_0x2dd65c) {
    if (_0x23d11b) {
      return;
    }
    _0x23d11b = true;
    _0x3fb91d = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x2dd65c !== undefined) {
      _0xed26c0(_0x2dd65c);
      _0x38748e(_0x2dd65c);
      _0x2dd65c = JSON.stringify(_0x2dd65c);
    } else {
      _0x2dd65c = "";
    }
    var _0x7023b6 = "abort(" + _0x2dd65c + ") at " + _0x19fe57();
    if (_0x24391e.abortHandler && _0x24391e.abortHandler(_0x7023b6)) {
      return;
    }
    throw _0x7023b6;
  };
  _0x24391e.SetFullscreen = function (_0x1a3c60) {
    if (typeof _0x5c4bf8 === "undefined" || !_0x5c4bf8) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x2de040 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x3bb184 = _0x2de040.canPerformEventHandlerRequests;
      _0x2de040.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x24391e.ccall("SetFullscreen", null, ["number"], [_0x1a3c60]);
      _0x2de040.canPerformEventHandlerRequests = _0x3bb184;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x24391e.preRun.push(function () {
      var _0x42e004 = _0x24391e.unityFileSystemInit || function () {
        _0x415c36.mkdir("/idbfs");
        _0x415c36.mount(_0x3116fa, {}, "/idbfs");
        _0x24391e.addRunDependency("JS_FileSystem_Mount");
        _0x415c36.syncfs(true, function (_0x18b346) {
          if (_0x18b346) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x24391e.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x42e004();
    });
  }
  var _0x55753a = [];
  var _0x2d18be = false;
  var _0x892a9f;
  var _0x4d646e = null;
  function _0x45e929(_0x1b9617) {
    var _0x2bfe01 = Object.keys(_0x55753a);
    for (var _0x50f226 = 0; _0x50f226 < _0x2bfe01.length; ++_0x50f226) {
      var _0x148660 = _0x55753a[_0x2bfe01[_0x50f226]];
      if (_0x148660.deviceId && _0x148660.deviceId == _0x1b9617.deviceId) {
        return _0x148660;
      }
    }
    for (var _0x50f226 = 0; _0x50f226 < _0x2bfe01.length; ++_0x50f226) {
      var _0x148660 = _0x55753a[_0x2bfe01[_0x50f226]];
      if (_0x148660 == _0x1b9617) {
        return _0x148660;
      }
    }
    for (var _0x50f226 = 0; _0x50f226 < _0x2bfe01.length; ++_0x50f226) {
      var _0x148660 = _0x55753a[_0x2bfe01[_0x50f226]];
      if (_0x148660.label && _0x148660.label == _0x1b9617.label) {
        return _0x148660;
      }
    }
    for (var _0x50f226 = 0; _0x50f226 < _0x2bfe01.length; ++_0x50f226) {
      var _0x148660 = _0x55753a[_0x2bfe01[_0x50f226]];
      if (_0x148660.groupId && _0x148660.kind && _0x148660.groupId == _0x1b9617.groupId && _0x148660.kind == _0x1b9617.kind) {
        return _0x148660;
      }
    }
  }
  function _0x1ee374() {
    for (var _0x1df9ed = 0;; ++_0x1df9ed) {
      if (!_0x55753a[_0x1df9ed]) {
        return _0x1df9ed;
      }
    }
  }
  function _0x1a753e(_0x1eaa75) {
    _0x892a9f();
    _0x55753a = [];
    var _0xdfe36f = {};
    var _0x4e0141 = [];
    _0x1eaa75.forEach(function (_0x195d42) {
      if (_0x195d42.kind === "videoinput") {
        var _0x48c82c = _0x45e929(_0x195d42);
        if (_0x48c82c) {
          _0xdfe36f[_0x48c82c.id] = _0x48c82c;
        } else {
          _0x4e0141.push(_0x195d42);
        }
      }
    });
    _0x55753a = _0xdfe36f;
    _0x4e0141.forEach(function (_0x46262e) {
      if (!_0x46262e.id) {
        _0x46262e.id = _0x1ee374();
        _0x46262e.name = _0x46262e.label || "Video input #" + (_0x46262e.id + 1);
        _0x46262e.isFrontFacing = _0x46262e.name.toLowerCase().includes("front") || !_0x46262e.name.toLowerCase().includes("front") && !_0x46262e.name.toLowerCase().includes("back");
        _0x55753a[_0x46262e.id] = _0x46262e;
      }
    });
  }
  function _0x3a2433() {
    if (!_0x55753a) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x529eca) {
      _0x1a753e(_0x529eca);
      _0x2d18be = true;
    }).catch(function (_0x577501) {
      console.warn("Unable to enumerate media devices: " + _0x577501 + "\nWebcams will not be available.");
      _0x2f7803();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x3a2433, 60000);
      _0xdfc5d6("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x2f7803() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x3a2433);
    }
    _0x55753a = null;
  }
  _0x24391e.disableAccessToMediaDevices = _0x2f7803;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x2f7803();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0xb357("enumerateMediaDevices");
        _0x892a9f = function () {
          if (_0x4d646e !== null) {
            clearTimeout(_0x4d646e);
          }
          _0xe3545b("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x892a9f = function () {};
        };
        _0x3a2433();
        _0x4d646e = setTimeout(_0x892a9f, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x3a2433);
      } catch (_0x1415ec) {
        console.warn("Unable to enumerate media devices: " + _0x1415ec);
        _0x2f7803();
      }
    }, 0);
  }
  function _0x41590d(_0x13d6b2, _0x4648fb, _0x3fc807) {
    var _0x327202 = _0x3067f0(_0x4648fb);
    var _0x1200c3 = _0x3067f0(_0x13d6b2);
    var _0x324ea8 = 0;
    try {
      if (_0x3fc807 === undefined) {
        _0x5d9154(_0x1200c3, _0x327202);
      } else if (typeof _0x3fc807 === "string") {
        _0x324ea8 = _0x3067f0(_0x3fc807);
        _0x5ba8af(_0x1200c3, _0x327202, _0x324ea8);
      } else if (typeof _0x3fc807 === "number") {
        _0x4db00e(_0x1200c3, _0x327202, _0x3fc807);
      } else {
        throw "" + _0x3fc807 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0xc27a35(_0x324ea8);
      _0xc27a35(_0x1200c3);
      _0xc27a35(_0x327202);
    }
  }
  _0x24391e.SendMessage = _0x41590d;
  var _0x4a5d44 = {};
  var _0xb92b21;
  for (_0xb92b21 in _0x24391e) {
    if (_0x24391e.hasOwnProperty(_0xb92b21)) {
      _0x4a5d44[_0xb92b21] = _0x24391e[_0xb92b21];
    }
  }
  var _0x9bb8e8 = [];
  var _0x5b6f88 = "./this.program";
  var _0x2c59b9 = function (_0x2059bf, _0x58ddec) {
    throw _0x58ddec;
  };
  var _0x549849 = false;
  var _0x122c9d = false;
  var _0x494d8b = false;
  var _0x281b44 = false;
  _0x549849 = typeof window === "object";
  _0x122c9d = typeof importScripts === "function";
  _0x494d8b = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x281b44 = !_0x549849 && !_0x494d8b && !_0x122c9d;
  var _0x585070 = "";
  function _0x31bcac(_0x33e35a) {
    if (_0x24391e.locateFile) {
      return _0x24391e.locateFile(_0x33e35a, _0x585070);
    }
    return _0x585070 + _0x33e35a;
  }
  var _0x5f3fcf;
  var _0x2b9b2a;
  var _0x314640;
  var _0x487198;
  var _0x5d324f;
  var _0x5476d6;
  if (_0x494d8b) {
    if (_0x122c9d) {
      _0x585070 = require("path").dirname(_0x585070) + "/";
    } else {
      _0x585070 = __dirname + "/";
    }
    _0x5f3fcf = function _0x165c5a(_0x25e367, _0x925943) {
      if (!_0x5d324f) {
        _0x5d324f = require("fs");
      }
      if (!_0x5476d6) {
        _0x5476d6 = require("path");
      }
      _0x25e367 = _0x5476d6.normalize(_0x25e367);
      return _0x5d324f.readFileSync(_0x25e367, _0x925943 ? null : "utf8");
    };
    _0x314640 = function _0xb5124a(_0x4f7ccc) {
      var _0x1109c7 = _0x5f3fcf(_0x4f7ccc, true);
      if (!_0x1109c7.buffer) {
        _0x1109c7 = new Uint8Array(_0x1109c7);
      }
      _0x18a873(_0x1109c7.buffer);
      return _0x1109c7;
    };
    if (process.argv.length > 1) {
      _0x5b6f88 = process.argv[1].replace(/\\/g, "/");
    }
    _0x9bb8e8 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x24391e;
    }
    process.on("uncaughtException", function (_0x3d6491) {
      if (!(_0x3d6491 instanceof _0x4210ac)) {
        throw _0x3d6491;
      }
    });
    process.on("unhandledRejection", _0x5bcf92);
    _0x2c59b9 = function (_0x1de9ff) {
      process.exit(_0x1de9ff);
    };
    _0x24391e.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x281b44) {
    if (typeof read != "undefined") {
      _0x5f3fcf = function _0x2723f4(_0x3ea6a6) {
        return read(_0x3ea6a6);
      };
    }
    _0x314640 = function _0x30bc79(_0x5e00dd) {
      var _0x3eea9b;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x5e00dd));
      }
      _0x3eea9b = read(_0x5e00dd, "binary");
      _0x18a873(typeof _0x3eea9b === "object");
      return _0x3eea9b;
    };
    if (typeof scriptArgs != "undefined") {
      _0x9bb8e8 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x9bb8e8 = arguments;
    }
    if (typeof quit === "function") {
      _0x2c59b9 = function (_0x12e29a) {
        quit(_0x12e29a);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x549849 || _0x122c9d) {
    if (_0x122c9d) {
      _0x585070 = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x585070 = document.currentScript.src;
    }
    if (_0x585070.indexOf("blob:") !== 0) {
      _0x585070 = _0x585070.substr(0, _0x585070.lastIndexOf("/") + 1);
    } else {
      _0x585070 = "";
    }
    {
      _0x5f3fcf = function (_0x369635) {
        var _0x41ef00 = new XMLHttpRequest();
        _0x41ef00.open("GET", _0x369635, false);
        _0x41ef00.send(null);
        return _0x41ef00.responseText;
      };
      if (_0x122c9d) {
        _0x314640 = function (_0x4a8bbd) {
          var _0x3eeffa = new XMLHttpRequest();
          _0x3eeffa.open("GET", _0x4a8bbd, false);
          _0x3eeffa.responseType = "arraybuffer";
          _0x3eeffa.send(null);
          return new Uint8Array(_0x3eeffa.response);
        };
      }
      _0x2b9b2a = function (_0x8d8428, _0x5b2286, _0x197f54) {
        var _0xc087e3 = new XMLHttpRequest();
        _0xc087e3.open("GET", _0x8d8428, true);
        _0xc087e3.responseType = "arraybuffer";
        _0xc087e3.onload = function () {
          if (_0xc087e3.status == 200 || _0xc087e3.status == 0 && _0xc087e3.response) {
            _0x5b2286(_0xc087e3.response);
            return;
          }
          _0x197f54();
        };
        _0xc087e3.onerror = _0x197f54;
        _0xc087e3.send(null);
      };
    }
    _0x487198 = function (_0x39ba00) {
      document.title = _0x39ba00;
    };
  } else {}
  var _0xed26c0 = _0x24391e.print || console.log.bind(console);
  var _0x38748e = _0x24391e.printErr || console.warn.bind(console);
  for (_0xb92b21 in _0x4a5d44) {
    if (_0x4a5d44.hasOwnProperty(_0xb92b21)) {
      _0x24391e[_0xb92b21] = _0x4a5d44[_0xb92b21];
    }
  }
  _0x4a5d44 = null;
  if (_0x24391e.arguments) {
    _0x9bb8e8 = _0x24391e.arguments;
  }
  if (_0x24391e.thisProgram) {
    _0x5b6f88 = _0x24391e.thisProgram;
  }
  if (_0x24391e.quit) {
    _0x2c59b9 = _0x24391e.quit;
  }
  var _0x3ebb7a = 16;
  function _0x55b434(_0x312fb0, _0x4ec4fc) {
    if (!_0x4ec4fc) {
      _0x4ec4fc = _0x3ebb7a;
    }
    return Math.ceil(_0x312fb0 / _0x4ec4fc) * _0x4ec4fc;
  }
  function _0xdfc5d6(_0x3fd188) {
    if (!_0xdfc5d6.shown) {
      _0xdfc5d6.shown = {};
    }
    if (!_0xdfc5d6.shown[_0x3fd188]) {
      _0xdfc5d6.shown[_0x3fd188] = 1;
      _0x38748e(_0x3fd188);
    }
  }
  var _0x383ab9 = 0;
  var _0x5ea706 = function (_0xccd74f) {
    _0x383ab9 = _0xccd74f;
  };
  var _0xff7d3b = function () {
    return _0x383ab9;
  };
  var _0xd9cbf9;
  if (_0x24391e.wasmBinary) {
    _0xd9cbf9 = _0x24391e.wasmBinary;
  }
  var _0x135013 = _0x24391e.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x5bcf92("no native wasm support detected");
  }
  var _0xc8cd95;
  var _0x23d11b = false;
  var _0x3fb91d;
  function _0x18a873(_0x34f6a6, _0x446fd0) {
    if (!_0x34f6a6) {
      _0x5bcf92("Assertion failed: " + _0x446fd0);
    }
  }
  function _0x16596e(_0x357e61) {
    var _0x285100 = _0x24391e["_" + _0x357e61];
    _0x18a873(_0x285100, "Cannot call unknown function " + _0x357e61 + ", make sure it is exported");
    return _0x285100;
  }
  function _0x5dcbe5(_0xf84dd1, _0xd8ff28, _0x2c25aa, _0x773018, _0x182671) {
    var _0x16d53d = {
      string: function (_0x5534ed) {
        var _0x235e7b = 0;
        if (_0x5534ed !== null && _0x5534ed !== undefined && _0x5534ed !== 0) {
          var _0x12ee7e = (_0x5534ed.length << 2) + 1;
          _0x235e7b = _0xbe2651(_0x12ee7e);
          _0x291bc6(_0x5534ed, _0x235e7b, _0x12ee7e);
        }
        return _0x235e7b;
      },
      array: function (_0xeeccb8) {
        var _0x43e1dd = _0xbe2651(_0xeeccb8.length);
        _0x4bdb39(_0xeeccb8, _0x43e1dd);
        return _0x43e1dd;
      }
    };
    function _0xad4d0b(_0x2481d3) {
      if (_0xd8ff28 === "string") {
        return _0x242db5(_0x2481d3);
      }
      if (_0xd8ff28 === "boolean") {
        return Boolean(_0x2481d3);
      }
      return _0x2481d3;
    }
    var _0x133aa3 = _0x16596e(_0xf84dd1);
    var _0x2d172c = [];
    var _0x4d7f3e = 0;
    if (_0x773018) {
      for (var _0x23b759 = 0; _0x23b759 < _0x773018.length; _0x23b759++) {
        var _0x2daa22 = _0x16d53d[_0x2c25aa[_0x23b759]];
        if (_0x2daa22) {
          if (_0x4d7f3e === 0) {
            _0x4d7f3e = _0x27ee1f();
          }
          _0x2d172c[_0x23b759] = _0x2daa22(_0x773018[_0x23b759]);
        } else {
          _0x2d172c[_0x23b759] = _0x773018[_0x23b759];
        }
      }
    }
    var _0x30f270 = _0x133aa3.apply(null, _0x2d172c);
    _0x30f270 = _0xad4d0b(_0x30f270);
    if (_0x4d7f3e !== 0) {
      _0x1df486(_0x4d7f3e);
    }
    return _0x30f270;
  }
  function _0x187b1f(_0x2678b7, _0x2613bc, _0x5dbf1b, _0x5e026e) {
    _0x5dbf1b = _0x5dbf1b || [];
    var _0x36a0d5 = _0x5dbf1b.every(function (_0x556d5e) {
      return _0x556d5e === "number";
    });
    var _0x965d8 = _0x2613bc !== "string";
    if (_0x965d8 && _0x36a0d5 && !_0x5e026e) {
      return _0x16596e(_0x2678b7);
    }
    return function () {
      return _0x5dcbe5(_0x2678b7, _0x2613bc, _0x5dbf1b, arguments, _0x5e026e);
    };
  }
  var _0x38fcd0 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x51bdc9(_0x3b1fa9, _0x28c8c4, _0x59c0e9) {
    var _0x60058f = _0x28c8c4 + _0x59c0e9;
    var _0x7c32eb = _0x28c8c4;
    while (_0x3b1fa9[_0x7c32eb] && !(_0x7c32eb >= _0x60058f)) {
      ++_0x7c32eb;
    }
    if (_0x7c32eb - _0x28c8c4 > 16 && _0x3b1fa9.subarray && _0x38fcd0) {
      return _0x38fcd0.decode(_0x3b1fa9.subarray(_0x28c8c4, _0x7c32eb));
    } else {
      var _0x32dac2 = "";
      while (_0x28c8c4 < _0x7c32eb) {
        var _0x2b5fdb = _0x3b1fa9[_0x28c8c4++];
        if (!(_0x2b5fdb & 128)) {
          _0x32dac2 += String.fromCharCode(_0x2b5fdb);
          continue;
        }
        var _0x17b4d4 = _0x3b1fa9[_0x28c8c4++] & 63;
        if ((_0x2b5fdb & 224) == 192) {
          _0x32dac2 += String.fromCharCode((_0x2b5fdb & 31) << 6 | _0x17b4d4);
          continue;
        }
        var _0x2e2fd9 = _0x3b1fa9[_0x28c8c4++] & 63;
        if ((_0x2b5fdb & 240) == 224) {
          _0x2b5fdb = (_0x2b5fdb & 15) << 12 | _0x17b4d4 << 6 | _0x2e2fd9;
        } else {
          _0x2b5fdb = (_0x2b5fdb & 7) << 18 | _0x17b4d4 << 12 | _0x2e2fd9 << 6 | _0x3b1fa9[_0x28c8c4++] & 63;
        }
        if (_0x2b5fdb < 65536) {
          _0x32dac2 += String.fromCharCode(_0x2b5fdb);
        } else {
          var _0x16460c = _0x2b5fdb - 65536;
          _0x32dac2 += String.fromCharCode(_0x16460c >> 10 | 55296, _0x16460c & 1023 | 56320);
        }
      }
    }
    return _0x32dac2;
  }
  function _0x242db5(_0x4bac87, _0x42dbaf) {
    if (_0x4bac87) {
      return _0x51bdc9(_0x5d32f0, _0x4bac87, _0x42dbaf);
    } else {
      return "";
    }
  }
  function _0x389f76(_0xbd5aec, _0x57664b, _0x52fe0d, _0x3428a1) {
    if (!(_0x3428a1 > 0)) {
      return 0;
    }
    var _0x4bc7ec = _0x52fe0d;
    var _0x44278d = _0x52fe0d + _0x3428a1 - 1;
    for (var _0x1c6c95 = 0; _0x1c6c95 < _0xbd5aec.length; ++_0x1c6c95) {
      var _0x3b26a6 = _0xbd5aec.charCodeAt(_0x1c6c95);
      if (_0x3b26a6 >= 55296 && _0x3b26a6 <= 57343) {
        var _0xe17e46 = _0xbd5aec.charCodeAt(++_0x1c6c95);
        _0x3b26a6 = 65536 + ((_0x3b26a6 & 1023) << 10) | _0xe17e46 & 1023;
      }
      if (_0x3b26a6 <= 127) {
        if (_0x52fe0d >= _0x44278d) {
          break;
        }
        _0x57664b[_0x52fe0d++] = _0x3b26a6;
      } else if (_0x3b26a6 <= 2047) {
        if (_0x52fe0d + 1 >= _0x44278d) {
          break;
        }
        _0x57664b[_0x52fe0d++] = _0x3b26a6 >> 6 | 192;
        _0x57664b[_0x52fe0d++] = _0x3b26a6 & 63 | 128;
      } else if (_0x3b26a6 <= 65535) {
        if (_0x52fe0d + 2 >= _0x44278d) {
          break;
        }
        _0x57664b[_0x52fe0d++] = _0x3b26a6 >> 12 | 224;
        _0x57664b[_0x52fe0d++] = _0x3b26a6 >> 6 & 63 | 128;
        _0x57664b[_0x52fe0d++] = _0x3b26a6 & 63 | 128;
      } else {
        if (_0x52fe0d + 3 >= _0x44278d) {
          break;
        }
        _0x57664b[_0x52fe0d++] = _0x3b26a6 >> 18 | 240;
        _0x57664b[_0x52fe0d++] = _0x3b26a6 >> 12 & 63 | 128;
        _0x57664b[_0x52fe0d++] = _0x3b26a6 >> 6 & 63 | 128;
        _0x57664b[_0x52fe0d++] = _0x3b26a6 & 63 | 128;
      }
    }
    _0x57664b[_0x52fe0d] = 0;
    return _0x52fe0d - _0x4bc7ec;
  }
  function _0x291bc6(_0x53d4af, _0x702ba7, _0x178297) {
    return _0x389f76(_0x53d4af, _0x5d32f0, _0x702ba7, _0x178297);
  }
  function _0x72e291(_0x298ee6) {
    var _0x49ab3f = 0;
    for (var _0x39f84f = 0; _0x39f84f < _0x298ee6.length; ++_0x39f84f) {
      var _0x39c109 = _0x298ee6.charCodeAt(_0x39f84f);
      if (_0x39c109 >= 55296 && _0x39c109 <= 57343) {
        _0x39c109 = 65536 + ((_0x39c109 & 1023) << 10) | _0x298ee6.charCodeAt(++_0x39f84f) & 1023;
      }
      if (_0x39c109 <= 127) {
        ++_0x49ab3f;
      } else if (_0x39c109 <= 2047) {
        _0x49ab3f += 2;
      } else if (_0x39c109 <= 65535) {
        _0x49ab3f += 3;
      } else {
        _0x49ab3f += 4;
      }
    }
    return _0x49ab3f;
  }
  function _0x2e89e2(_0x41dd54) {
    var _0x348282 = _0x72e291(_0x41dd54) + 1;
    var _0x1f41de = _0x25ed17(_0x348282);
    if (_0x1f41de) {
      _0x389f76(_0x41dd54, _0xf10f52, _0x1f41de, _0x348282);
    }
    return _0x1f41de;
  }
  function _0x42289a(_0x29d116) {
    var _0x4b6696 = _0x72e291(_0x29d116) + 1;
    var _0x26740c = _0xbe2651(_0x4b6696);
    _0x389f76(_0x29d116, _0xf10f52, _0x26740c, _0x4b6696);
    return _0x26740c;
  }
  function _0x4bdb39(_0xd99506, _0x28395d) {
    _0xf10f52.set(_0xd99506, _0x28395d);
  }
  function _0x5b2088(_0x22535e, _0x20c9de, _0x2bedfa) {
    for (var _0x1d8bf6 = 0; _0x1d8bf6 < _0x22535e.length; ++_0x1d8bf6) {
      _0xf10f52[_0x20c9de++ >> 0] = _0x22535e.charCodeAt(_0x1d8bf6);
    }
    if (!_0x2bedfa) {
      _0xf10f52[_0x20c9de >> 0] = 0;
    }
  }
  function _0x46c83e(_0x573572, _0x1fde16) {
    if (_0x573572 % _0x1fde16 > 0) {
      _0x573572 += _0x1fde16 - _0x573572 % _0x1fde16;
    }
    return _0x573572;
  }
  var _0x5da3a0;
  var _0xf10f52;
  var _0x5d32f0;
  var _0x4ea5dd;
  var _0x5b2658;
  var _0x447875;
  var _0x51a6ce;
  var _0x5d3882;
  var _0xf10a16;
  function _0x245f1b(_0x43541e) {
    _0x5da3a0 = _0x43541e;
    _0x24391e.HEAP8 = _0xf10f52 = new Int8Array(_0x43541e);
    _0x24391e.HEAP16 = _0x4ea5dd = new Int16Array(_0x43541e);
    _0x24391e.HEAP32 = _0x447875 = new Int32Array(_0x43541e);
    _0x24391e.HEAPU8 = _0x5d32f0 = new Uint8Array(_0x43541e);
    _0x24391e.HEAPU16 = _0x5b2658 = new Uint16Array(_0x43541e);
    _0x24391e.HEAPU32 = _0x51a6ce = new Uint32Array(_0x43541e);
    _0x24391e.HEAPF32 = _0x5d3882 = new Float32Array(_0x43541e);
    _0x24391e.HEAPF64 = _0xf10a16 = new Float64Array(_0x43541e);
  }
  var _0x33b239 = _0x24391e.INITIAL_MEMORY || 33554432;
  var _0x1b3c69;
  var _0x40775b = [];
  var _0x87369b = [];
  var _0x25af89 = [];
  var _0x5091af = [];
  var _0x33cc82 = [];
  var _0x5c4bf8 = false;
  var _0x5e50f0 = false;
  function _0x45f933() {
    if (_0x24391e.preRun) {
      if (typeof _0x24391e.preRun == "function") {
        _0x24391e.preRun = [_0x24391e.preRun];
      }
      while (_0x24391e.preRun.length) {
        _0x2d9ff5(_0x24391e.preRun.shift());
      }
    }
    _0x7e8ac2(_0x40775b);
  }
  function _0x240418() {
    _0x5c4bf8 = true;
    if (!_0x24391e.noFSInit && !_0x415c36.init.initialized) {
      _0x415c36.init();
    }
    _0x1862fb.init();
    _0x54211a.root = _0x415c36.mount(_0x54211a, {}, null);
    _0x33eca5.root = _0x415c36.mount(_0x33eca5, {}, null);
    _0x7e8ac2(_0x87369b);
  }
  function _0x38dcb() {
    _0x415c36.ignorePermissions = false;
    _0x7e8ac2(_0x25af89);
  }
  function _0x26fa6b() {
    _0x5e50f0 = true;
  }
  function _0x1dc4a2() {
    if (_0x24391e.postRun) {
      if (typeof _0x24391e.postRun == "function") {
        _0x24391e.postRun = [_0x24391e.postRun];
      }
      while (_0x24391e.postRun.length) {
        _0x37ad0a(_0x24391e.postRun.shift());
      }
    }
    _0x7e8ac2(_0x33cc82);
  }
  function _0x2d9ff5(_0xecba9b) {
    _0x40775b.unshift(_0xecba9b);
  }
  function _0x4446e8(_0x483d16) {
    _0x87369b.unshift(_0x483d16);
  }
  function _0x37ad0a(_0x324fbd) {
    _0x33cc82.unshift(_0x324fbd);
  }
  var _0xcab905 = 0;
  var _0x4c5e77 = null;
  var _0x3b2e29 = null;
  function _0x96e2c4(_0x145875) {
    return _0x145875;
  }
  function _0xb357(_0x3bfef4) {
    _0xcab905++;
    if (_0x24391e.monitorRunDependencies) {
      _0x24391e.monitorRunDependencies(_0xcab905);
    }
  }
  function _0xe3545b(_0x2e3f10) {
    _0xcab905--;
    if (_0x24391e.monitorRunDependencies) {
      _0x24391e.monitorRunDependencies(_0xcab905);
    }
    if (_0xcab905 == 0) {
      if (_0x4c5e77 !== null) {
        clearInterval(_0x4c5e77);
        _0x4c5e77 = null;
      }
      if (_0x3b2e29) {
        var _0x3d5742 = _0x3b2e29;
        _0x3b2e29 = null;
        _0x3d5742();
      }
    }
  }
  _0x24391e.preloadedImages = {};
  _0x24391e.preloadedAudios = {};
  function _0x5bcf92(_0x53feb4) {
    if (_0x24391e.onAbort) {
      _0x24391e.onAbort(_0x53feb4);
    }
    _0x53feb4 += "";
    _0x38748e(_0x53feb4);
    _0x23d11b = true;
    _0x3fb91d = 1;
    _0x53feb4 = "abort(" + _0x53feb4 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x295f63 = new WebAssembly.RuntimeError(_0x53feb4);
    throw _0x295f63;
  }
  var _0x4f1728 = "data:application/octet-stream;base64,";
  function _0x396b36(_0x299197) {
    return _0x299197.startsWith(_0x4f1728);
  }
  function _0x145bfc(_0x2df5e9) {
    return _0x2df5e9.startsWith("file://");
  }
  var _0x481f79 = "build.wasm";
  if (!_0x396b36(_0x481f79)) {
    _0x481f79 = _0x31bcac(_0x481f79);
  }
  function _0xadbad4(_0x2fb48a) {
    try {
      if (_0x2fb48a == _0x481f79 && _0xd9cbf9) {
        return new Uint8Array(_0xd9cbf9);
      }
      if (_0x314640) {
        return _0x314640(_0x2fb48a);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x3b0545) {
      _0x5bcf92(_0x3b0545);
    }
  }
  function _0x12ef07() {
    if (!_0xd9cbf9 && (_0x549849 || _0x122c9d)) {
      if (typeof fetch === "function" && !_0x145bfc(_0x481f79)) {
        return fetch(_0x481f79, {
          credentials: "same-origin"
        }).then(function (_0x327bb1) {
          if (!_0x327bb1.ok) {
            throw "failed to load wasm binary file at '" + _0x481f79 + "'";
          }
          return _0x327bb1.arrayBuffer();
        }).catch(function () {
          return _0xadbad4(_0x481f79);
        });
      } else if (_0x2b9b2a) {
        return new Promise(function (_0x20f8cf, _0xaf040a) {
          _0x2b9b2a(_0x481f79, function (_0xf6dbb2) {
            _0x20f8cf(new Uint8Array(_0xf6dbb2));
          }, _0xaf040a);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0xadbad4(_0x481f79);
    });
  }
  function _0x4f75ae() {
    var _0x262124 = {
      a: _0x521387
    };
    function _0xe2f0de(_0x5d559a, _0x5568af) {
      var _0x43e015 = _0x5d559a.exports;
      _0x24391e.asm = _0x43e015;
      _0xc8cd95 = _0x24391e.asm.ql;
      _0x245f1b(_0xc8cd95.buffer);
      _0x1b3c69 = _0x24391e.asm.Ql;
      _0x4446e8(_0x24391e.asm.rl);
      _0xe3545b("wasm-instantiate");
    }
    _0xb357("wasm-instantiate");
    function _0x2a3849(_0x555a42) {
      _0xe2f0de(_0x555a42.instance);
    }
    function _0x24a087(_0x11e94c) {
      return _0x12ef07().then(function (_0x2eae0f) {
        var _0x143cd1 = WebAssembly.instantiate(_0x2eae0f, _0x262124);
        return _0x143cd1;
      }).then(_0x11e94c, function (_0x14f1a2) {
        _0x38748e("failed to asynchronously prepare wasm: " + _0x14f1a2);
        _0x5bcf92(_0x14f1a2);
      });
    }
    function _0x663a64() {
      if (!_0xd9cbf9 && typeof WebAssembly.instantiateStreaming === "function" && !_0x396b36(_0x481f79) && !_0x145bfc(_0x481f79) && typeof fetch === "function") {
        return fetch(_0x481f79, {
          credentials: "same-origin"
        }).then(function (_0x5ace3c) {
          var _0x360bcc = WebAssembly.instantiateStreaming(_0x5ace3c, _0x262124);
          return _0x360bcc.then(_0x2a3849, function (_0x3927d0) {
            _0x38748e("wasm streaming compile failed: " + _0x3927d0);
            _0x38748e("falling back to ArrayBuffer instantiation");
            return _0x24a087(_0x2a3849);
          });
        });
      } else {
        return _0x24a087(_0x2a3849);
      }
    }
    if (_0x24391e.instantiateWasm) {
      try {
        var _0x465e9b = _0x24391e.instantiateWasm(_0x262124, _0xe2f0de);
        return _0x465e9b;
      } catch (_0x561fae) {
        _0x38748e("Module.instantiateWasm callback failed with error: " + _0x561fae);
        return false;
      }
    }
    _0x663a64();
    return {};
  }
  var _0x33506f;
  var _0x3b432d;
  var _0x45844e = {
    5490568: function () {
      return _0x24391e.webglContextAttributes.premultipliedAlpha;
    },
    5490629: function () {
      return _0x24391e.webglContextAttributes.preserveDrawingBuffer;
    },
    5490693: function () {
      return _0x24391e.webglContextAttributes.powerPreference;
    }
  };
  function _0x7e8ac2(_0x618ee8) {
    while (_0x618ee8.length > 0) {
      var _0x50c10b = _0x618ee8.shift();
      if (typeof _0x50c10b == "function") {
        _0x50c10b(_0x24391e);
        continue;
      }
      var _0xeca97e = _0x50c10b.func;
      if (typeof _0xeca97e === "number") {
        if (_0x50c10b.arg === undefined) {
          (function () {
            _0x3fcf98.call(null, _0xeca97e);
          })();
        } else {
          (function (_0x19b876) {
            _0xe5b92e.apply(null, [_0xeca97e, _0x19b876]);
          })(_0x50c10b.arg);
        }
      } else {
        _0xeca97e(_0x50c10b.arg === undefined ? null : _0x50c10b.arg);
      }
    }
  }
  function _0x28df49(_0x10edff) {
    return _0x10edff;
  }
  function _0x1c5b1a(_0x317285) {
    var _0x5c923a = /\b_Z[\w\d_]+/g;
    return _0x317285.replace(_0x5c923a, function (_0x2224c0) {
      var _0x2b2c4c = _0x28df49(_0x2224c0);
      if (_0x2224c0 === _0x2b2c4c) {
        return _0x2224c0;
      } else {
        return _0x2b2c4c + " [" + _0x2224c0 + "]";
      }
    });
  }
  function _0x43a0f8(_0x5e38a3, _0x3c7a2a, _0x5ece0a) {
    var _0x6c4ca9 = _0x24391e["dynCall_" + _0x5e38a3];
    if (_0x5ece0a && _0x5ece0a.length) {
      return _0x6c4ca9.apply(null, [_0x3c7a2a].concat(_0x5ece0a));
    } else {
      return _0x6c4ca9.call(null, _0x3c7a2a);
    }
  }
  function _0x19c2cf(_0x453c61, _0x53f74d, _0xc1ccc3) {
    return _0x43a0f8(_0x453c61, _0x53f74d, _0xc1ccc3);
  }
  function _0x3fe786() {
    var _0x2de17f = new Error();
    if (!_0x2de17f.stack) {
      try {
        throw new Error();
      } catch (_0xa9cd42) {
        _0x2de17f = _0xa9cd42;
      }
      if (!_0x2de17f.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x2de17f.stack.toString();
  }
  var _0xc6ba52 = 0;
  function _0x54e3a5() {
    return _0x135013 || _0xc6ba52 > 0;
  }
  function _0x19fe57() {
    var _0x17d542 = _0x3fe786();
    if (_0x24391e.extraStackTrace) {
      _0x17d542 += "\n" + _0x24391e.extraStackTrace();
    }
    return _0x1c5b1a(_0x17d542);
  }
  function _0x4a1cfe(_0x5cac7c, _0x2277f8, _0x11e41b, _0x53bb47, _0x599791) {
    var _0x396e49 = _0x242db5(_0x5cac7c);
    var _0x1907db = _0x242db5(_0x2277f8);
    var _0xd62c3c = _0x242db5(_0x11e41b);
    var _0x63d3f0 = _0x242db5(_0x53bb47);
    var _0x1eb603 = _0x242db5(_0x599791);
    try {
      firebase.firestore().collection(_0x396e49).add(JSON.parse(_0x1907db)).then(function (_0xda2ce7) {
        window.unityInstance.SendMessage(_0xd62c3c, _0x63d3f0, "Success: document added in collection " + _0x396e49);
      }).catch(function (_0xc9533d) {
        window.unityInstance.SendMessage(_0xd62c3c, _0x1eb603, JSON.stringify(_0xc9533d, Object.getOwnPropertyNames(_0xc9533d)));
      });
    } catch (_0x2b8849) {
      window.unityInstance.SendMessage(_0xd62c3c, _0x1eb603, JSON.stringify(_0x2b8849, Object.getOwnPropertyNames(_0x2b8849)));
    }
  }
  function _0x87ea14(_0xaaec7e, _0xc38ef3, _0x56bccd, _0x1c7cf2, _0xca4132, _0x1b540f, _0x2d36da) {
    var _0x1cc93e = _0x242db5(_0xaaec7e);
    var _0x43b2c5 = _0x242db5(_0xc38ef3);
    var _0x4ea9e9 = _0x242db5(_0x56bccd);
    var _0x2b5191 = _0x242db5(_0x1c7cf2);
    var _0x168852 = _0x242db5(_0xca4132);
    var _0x4b95c2 = _0x242db5(_0x1b540f);
    var _0x4546a8 = _0x242db5(_0x2d36da);
    try {
      var _0x1c7cf2 = {};
      _0x1c7cf2[_0x4ea9e9] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x2b5191));
      firebase.firestore().collection(_0x1cc93e).doc(_0x43b2c5).update(_0x1c7cf2).then(function () {
        window.unityInstance.SendMessage(_0x168852, _0x4b95c2, "Success: element " + _0x2b5191 + " was added in " + _0x4ea9e9);
      }).catch(function (_0x3df0e9) {
        window.unityInstance.SendMessage(_0x168852, _0x4546a8, JSON.stringify(_0x3df0e9, Object.getOwnPropertyNames(_0x3df0e9)));
      });
    } catch (_0x1703df) {
      window.unityInstance.SendMessage(_0x168852, _0x4546a8, JSON.stringify(_0x1703df, Object.getOwnPropertyNames(_0x1703df)));
    }
  }
  function _0x7c3c0c(_0xcbbc13) {
    try {
      window.CrazyGames.SDK.user.addScore(_0xcbbc13);
    } catch (_0x2244cb) {
      window.UnitySDK.logError("Error while calling addScore:", _0x2244cb);
    }
  }
  function _0x20d55d(_0x42d3ca, _0x198d0b) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x42d3ca), JSON.parse(window.unityStringify(_0x198d0b)));
    } catch (_0x35dafb) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x35dafb);
    }
  }
  function _0x47eb67(_0x1b48c4) {
    const _0x260650 = document.createElement("textarea");
    _0x260650.value = window.unityStringify(_0x1b48c4);
    document.body.appendChild(_0x260650);
    _0x260650.select();
    _0x260650.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x260650);
  }
  function _0x1eaf3e(_0x36d196, _0x49c95f, _0x328127, _0x1c5c84, _0x5b8050) {
    var _0xd88037 = _0x242db5(_0x36d196);
    var _0x2a165d = _0x242db5(_0x49c95f);
    var _0x30677 = _0x242db5(_0x328127);
    var _0x112d76 = _0x242db5(_0x1c5c84);
    var _0x34bd90 = _0x242db5(_0x5b8050);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0xd88037, _0x2a165d).then(function (_0x4b4af8) {
        window.unityInstance.SendMessage(_0x30677, _0x112d76, "Success: signed up for " + _0xd88037);
      }).catch(function (_0x70ca28) {
        window.unityInstance.SendMessage(_0x30677, _0x34bd90, JSON.stringify(_0x70ca28, Object.getOwnPropertyNames(_0x70ca28)));
      });
    } catch (_0x120275) {
      window.unityInstance.SendMessage(_0x30677, _0x34bd90, JSON.stringify(_0x120275, Object.getOwnPropertyNames(_0x120275)));
    }
  }
  function _0x39faad() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x176c0d) {
      window.UnitySDK.logError("Error while calling clear:", _0x176c0d);
    }
  }
  function _0x445810(_0xc66694) {
    var _0x2f4b74 = null;
    try {
      _0x2f4b74 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0xc66694));
    } catch (_0xc89b4f) {
      window.UnitySDK.logError("Error while calling getItem:", _0xc89b4f);
    }
    var _0x5dd64d = _0x72e291(_0x2f4b74 + "") + 1;
    var _0x58050e = _0x25ed17(_0x5dd64d);
    _0x291bc6(_0x2f4b74, _0x58050e, _0x5dd64d);
    return _0x58050e;
  }
  function _0x43242d(_0x11b2d8) {
    var _0x3390e0 = null;
    try {
      _0x3390e0 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x11b2d8));
    } catch (_0x30419f) {
      window.UnitySDK.logError("Error while calling getItem:", _0x30419f);
    }
    return _0x3390e0 !== null;
  }
  function _0x2aae00(_0x39b16e) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x39b16e));
    } catch (_0x2f037e) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x2f037e);
    }
  }
  function _0x3373a9(_0x35e580, _0x284339) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x35e580), window.unityStringify(_0x284339));
    } catch (_0x5494e7) {
      window.UnitySDK.logError("Error while calling setItem:", _0x5494e7);
    }
  }
  function _0x46082e(_0x1c608b, _0x187742, _0x13c9ff, _0x390713, _0x57b0ef) {
    var _0x1cffb4 = _0x242db5(_0x1c608b);
    var _0x11ae0c = _0x242db5(_0x187742);
    var _0x33d9a8 = _0x242db5(_0x13c9ff);
    var _0x1ed934 = _0x242db5(_0x390713);
    var _0x3a62ac = _0x242db5(_0x57b0ef);
    try {
      firebase.firestore().collection(_0x1cffb4).doc(_0x11ae0c).delete().then(function () {
        window.unityInstance.SendMessage(_0x33d9a8, _0x1ed934, "Success: document " + _0x11ae0c + " was deleted");
      }).catch(function (_0xad973a) {
        window.unityInstance.SendMessage(_0x33d9a8, _0x3a62ac, JSON.stringify(_0xad973a, Object.getOwnPropertyNames(_0xad973a)));
      });
    } catch (_0x3843a1) {
      window.unityInstance.SendMessage(_0x33d9a8, _0x3a62ac, JSON.stringify(_0x3843a1, Object.getOwnPropertyNames(_0x3843a1)));
    }
  }
  function _0x2d61cc(_0x5d9ab7, _0x160ef1, _0x23f214, _0x26ede8, _0x34a8a2, _0x3bbc16) {
    var _0x2d6427 = _0x242db5(_0x5d9ab7);
    var _0x38f5a5 = _0x242db5(_0x160ef1);
    var _0x1f31c8 = _0x242db5(_0x23f214);
    var _0x27bf67 = _0x242db5(_0x26ede8);
    var _0x3eac2f = _0x242db5(_0x34a8a2);
    var _0x322415 = _0x242db5(_0x3bbc16);
    try {
      var _0xff0871 = {};
      _0xff0871[_0x1f31c8] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x2d6427).doc(_0x38f5a5).update(_0xff0871).then(function () {
        window.unityInstance.SendMessage(_0x27bf67, _0x3eac2f, "Success: field " + _0x1f31c8 + " was deleted");
      }).catch(function (_0x1ca368) {
        window.unityInstance.SendMessage(_0x27bf67, _0x322415, JSON.stringify(_0x1ca368, Object.getOwnPropertyNames(_0x1ca368)));
      });
    } catch (_0x36cdcf) {
      window.unityInstance.SendMessage(_0x27bf67, _0x322415, JSON.stringify(_0x36cdcf, Object.getOwnPropertyNames(_0x36cdcf)));
    }
  }
  function _0x117c47(_0x29bbf9, _0x5a471f, _0x3ae892, _0x78e5c7) {
    var _0x3d4d14 = _0x242db5(_0x29bbf9);
    var _0x33193e = _0x242db5(_0x5a471f);
    var _0x33d377 = _0x242db5(_0x3ae892);
    var _0x35885e = _0x242db5(_0x78e5c7);
    try {
      firebase.database().ref(_0x3d4d14).remove().then(function (_0x233e69) {
        window.unityInstance.SendMessage(_0x33193e, _0x33d377, "Success: " + _0x3d4d14 + " was deleted");
      });
    } catch (_0xc2a279) {
      window.unityInstance.SendMessage(_0x33193e, _0x35885e, JSON.stringify(_0xc2a279, Object.getOwnPropertyNames(_0xc2a279)));
    }
  }
  function _0x17e791() {
    if (window.clipboardPasteHandler) {
      window.removeEventListener("paste", window.clipboardPasteHandler);
      window.clipboardPasteHandler = null;
      console.log("Paste listener disabled.");
    }
  }
  function _0x4d580d(_0x4cb8e8, _0x5e21f7, _0xb98182, _0x544b19) {
    var _0x33ae87 = _0x242db5(_0x4cb8e8);
    var _0x499be6 = _0x242db5(_0x5e21f7);
    var _0x11685b = _0x242db5(_0xb98182);
    var _0x1a911a = _0x242db5(_0x544b19);
    try {
      firebase.storage().ref(_0x33ae87).getDownloadURL().then(function (_0x1eff9c) {
        var _0x5d5f6b = new XMLHttpRequest();
        _0x5d5f6b.responseType = "arraybuffer";
        _0x5d5f6b.onload = function (_0x4a53f0) {
          var _0x5f4e36 = _0x5d5f6b.response;
          window.unityInstance.SendMessage(_0x499be6, _0x11685b, _0x3f73ec(_0x5f4e36));
        };
        _0x5d5f6b.open("GET", _0x1eff9c);
        _0x5d5f6b.send();
      }).catch(function (_0x45587f) {
        window.unityInstance.SendMessage(_0x499be6, _0x1a911a, JSON.stringify(_0x45587f, Object.getOwnPropertyNames(_0x45587f)));
      });
    } catch (_0x4bdc8f) {
      window.unityInstance.SendMessage(_0x499be6, _0x1a911a, JSON.stringify(_0x4bdc8f, Object.getOwnPropertyNames(_0x4bdc8f)));
    }
    function _0x3f73ec(_0x442052) {
      var _0x296b8d = "";
      var _0x3cfc42 = new Uint8Array(_0x442052);
      var _0x39e621 = _0x3cfc42.byteLength;
      for (var _0x13e62d = 0; _0x13e62d < _0x39e621; _0x13e62d++) {
        _0x296b8d += String.fromCharCode(_0x3cfc42[_0x13e62d]);
      }
      return window.btoa(_0x296b8d);
    }
  }
  function _0x3ad725(_0x5ef18a, _0x489fb2) {
    var _0x5aebba = _0x242db5(_0x5ef18a);
    var _0xb82b7e = _0x242db5(_0x489fb2);
    if (window.clipboardPasteHandler) {
      return;
    }
    window.clipboardPasteHandler = function (_0x1c0cfa) {
      _0x1c0cfa.preventDefault();
      var _0x468a86 = (_0x1c0cfa.clipboardData || window.clipboardData).getData("text");
      _0x41590d(_0x5aebba, _0xb82b7e, _0x468a86);
    };
    window.addEventListener("paste", window.clipboardPasteHandler);
    console.log("Paste listener enabled.");
  }
  function _0x324769() {
    var _0xf0cbce = window.document;
    var _0x4736c5 = _0xf0cbce.fullscreenElement || _0xf0cbce.mozFullScreenElement || _0xf0cbce.webkitFullscreenElement || _0xf0cbce.msFullscreenElement;
    if (_0x4736c5) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  function _0x3a4eef(_0xf393a0, _0x333f96) {
    var _0x33de05 = _0x242db5(_0xf393a0);
    var _0x330643 = _0x242db5(_0x333f96);
    var _0x4dc670 = new Blob([_0x330643], {
      type: "text/plain"
    });
    var _0x287a7a = document.createElement("a");
    _0x287a7a.href = URL.createObjectURL(_0x4dc670);
    _0x287a7a.download = _0x33de05;
    _0x287a7a.click();
    setTimeout(() => URL.revokeObjectURL(_0x287a7a.href), 100);
  }
  function _0x58805e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x2537fe) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x7bd10f(_0x355e7b) {
    var _0x2368a = {
      adStarted: function () {
        _0x41590d("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x41590d("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x2a318c) {
        _0x41590d("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x2a318c));
      }
    };
    var _0x510ec0 = window.GMSOFT_GMADS_INFO.reward;
    var _0x358f83 = _0x510ec0[Math.floor(Math.random() * _0x510ec0.length)];
    try {
      var _0x4df6d0 = document.createElement("div");
      _0x4df6d0.id = "gm-ad-overlay";
      _0x4df6d0.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x588426 = document.createElement("div");
      _0x588426.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x2b1f9f = document.createElement("video");
      _0x2b1f9f.src = _0x358f83.image;
      _0x2b1f9f.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x2b1f9f.autoplay = true;
      _0x2b1f9f.muted = true;
      _0x2b1f9f.preload = "auto";
      var _0x5fcd57 = document.createElement("button");
      _0x5fcd57.innerHTML = "Skip (5)";
      _0x5fcd57.disabled = true;
      _0x5fcd57.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x5fcd57.disabled = true;
      _0x5fcd57.style.opacity = "0.5";
      var _0x1df4eb = document.createElement("div");
      _0x1df4eb.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x267610 = document.createElement("div");
      _0x267610.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x2e5a7a = 5;
      var _0x5cd988 = setInterval(function () {
        _0x2e5a7a--;
        if (_0x2e5a7a > 0) {
          _0x5fcd57.innerHTML = "Skip (" + _0x2e5a7a + ")";
        } else {
          _0x5fcd57.innerHTML = "Skip";
          _0x5fcd57.disabled = false;
          _0x5fcd57.style.opacity = "1";
          _0x5fcd57.style.cursor = "pointer";
          clearInterval(_0x5cd988);
        }
      }, 1000);
      function _0xae54d() {
        if (_0x4df6d0 && _0x4df6d0.parentNode) {
          _0x4df6d0.parentNode.removeChild(_0x4df6d0);
        }
        clearInterval(_0x5cd988);
        _0x2368a.adFinished();
      }
      function _0x51045d() {
        window.open(_0x358f83.url, "_blank");
      }
      function _0x32e351() {
        if (_0x2b1f9f.duration && _0x2b1f9f.currentTime) {
          var _0x16bc97 = _0x2b1f9f.currentTime / _0x2b1f9f.duration * 100;
          _0x267610.style.width = _0x16bc97 + "%";
        }
      }
      _0x2b1f9f.addEventListener("loadstart", function () {
        _0x2368a.adStarted();
      });
      _0x2b1f9f.addEventListener("timeupdate", function () {
        _0x32e351();
      });
      _0x2b1f9f.addEventListener("ended", function () {
        _0xae54d();
      });
      _0x2b1f9f.addEventListener("error", function (_0x445fcc) {
        var _0x28546a = {
          message: "Video load error",
          code: _0x445fcc.target.error ? _0x445fcc.target.error.code : "unknown"
        };
        _0x2368a.adError(_0x28546a);
        _0xae54d();
      });
      _0x2b1f9f.addEventListener("click", function () {
        _0x51045d();
      });
      _0x5fcd57.addEventListener("click", function () {
        if (!_0x5fcd57.disabled) {
          _0xae54d();
        }
      });
      _0x2b1f9f.addEventListener("contextmenu", function (_0x5b77ec) {
        _0x5b77ec.preventDefault();
      });
      _0x1df4eb.appendChild(_0x267610);
      _0x588426.appendChild(_0x2b1f9f);
      _0x588426.appendChild(_0x5fcd57);
      _0x588426.appendChild(_0x1df4eb);
      _0x4df6d0.appendChild(_0x588426);
      document.body.appendChild(_0x4df6d0);
      _0x2b1f9f.play().catch(function (_0x5d2dba) {
        console.error("Video play error:", _0x5d2dba);
        _0x2368a.adError({
          message: "Cannot play video",
          details: _0x5d2dba.message
        });
        _0xae54d();
      });
    } catch (_0xa6ecd5) {
      console.error("Ad overlay creation error:", _0xa6ecd5);
      _0x2368a.adError({
        message: "Failed to create ad overlay",
        details: _0xa6ecd5.message
      });
    }
  }
  function _0x4c10a6() {
    try {
      console.log("Check local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      if (window.GMSOFT_SIGNED) {
        console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0x41590d("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
        return;
      }
    } catch (_0x520746) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature  ", _0x520746);
    }
    try {
      let _0x38bb65 = "hn=" + "https://games.1games.io";
      let _0x37cddb = btoa(_0x38bb65);
      let _0x444ae1 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x444ae1 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x3f0ca0 = _0x444ae1 + "?params=" + _0x37cddb;
      var _0x3dffd3 = new XMLHttpRequest();
      let _0x15388e = "";
      _0x3dffd3.open("GET", _0x3f0ca0, false);
      _0x3dffd3.send(_0x15388e);
      let _0x5b2789 = _0x3dffd3.responseText;
      window.GMSOFT_SIGNED = _0x5b2789;
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x41590d("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0xb6659f) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0xb6659f);
    }
  }
  function _0x55171a() {
    let _0x345fed = "https://games.1games.io";
    _0x41590d("GmSoft", "SetUnityHostName", _0x345fed);
    _0x41590d("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x3c76d4() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x41590d("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x3e69ba) {
      console.error("Error JS 12", _0x3e69ba);
    }
    try {
      gmStartAds(function () {
        _0x41590d("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x257fcc) {
      console.error("Error JS 20", _0x257fcc);
    }
    try {
    } catch (_0x3f1764) {
      console.error("Error JS 28", _0x3f1764);
    }
  }
  function _0x4df394(_0x25631d) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x25631d);
    } catch (_0x45cfd8) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x1b748b() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x4017c5) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x4017c5);
    }
  }
  function _0x194a28() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x427056) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x427056);
    }
  }
  function _0x398619() {
    var _0x16cde2 = firebaseConfig.projectId;
    var _0x1e7173 = _0x72e291(_0x16cde2) + 1;
    var _0x409186 = _0x25ed17(_0x1e7173);
    _0x291bc6(_0x16cde2, _0x409186, _0x1e7173);
    return _0x409186;
  }
  function _0x5acae0(_0x3db8fa, _0x56981c, _0x4e0ddf, _0x3f2eee, _0x4bfa1b) {
    var _0x2d168c = _0x242db5(_0x3db8fa);
    var _0x4a4c85 = _0x242db5(_0x56981c);
    var _0x353353 = _0x242db5(_0x4e0ddf);
    var _0x295d2 = _0x242db5(_0x3f2eee);
    var _0x29c72c = _0x242db5(_0x4bfa1b);
    try {
      firebase.firestore().collection(_0x2d168c).doc(_0x4a4c85).get().then(function (_0x559e11) {
        if (_0x559e11.exists) {
          window.unityInstance.SendMessage(_0x353353, _0x295d2, JSON.stringify(_0x559e11.data()));
        } else {
          window.unityInstance.SendMessage(_0x353353, _0x295d2, "null");
        }
      }).catch(function (_0x3acb1b) {
        window.unityInstance.SendMessage(_0x353353, _0x29c72c, JSON.stringify(_0x3acb1b, Object.getOwnPropertyNames(_0x3acb1b)));
      });
    } catch (_0x211a8b) {
      window.unityInstance.SendMessage(_0x353353, _0x29c72c, JSON.stringify(_0x211a8b, Object.getOwnPropertyNames(_0x211a8b)));
    }
  }
  function _0x5d91ce(_0x3ec369, _0x406969, _0x420489, _0x4ee08d) {
    var _0x405715 = _0x242db5(_0x3ec369);
    var _0x30b256 = _0x242db5(_0x406969);
    var _0x55e43a = _0x242db5(_0x420489);
    var _0x131002 = _0x242db5(_0x4ee08d);
    try {
      firebase.firestore().collection(_0x405715).get().then(function (_0x3bfadb) {
        var _0x163e8e = {};
        _0x3bfadb.forEach(function (_0x423b54) {
          _0x163e8e[_0x423b54.id] = _0x423b54.data();
        });
        window.unityInstance.SendMessage(_0x30b256, _0x55e43a, JSON.stringify(_0x163e8e));
      }).catch(function (_0x2e5809) {
        window.unityInstance.SendMessage(_0x30b256, _0x131002, JSON.stringify(_0x2e5809, Object.getOwnPropertyNames(_0x2e5809)));
      });
    } catch (_0xf84e91) {
      window.unityInstance.SendMessage(_0x30b256, _0x131002, JSON.stringify(_0xf84e91, Object.getOwnPropertyNames(_0xf84e91)));
    }
  }
  function _0x5b704b() {
    var _0x1c1f72 = window.CrazyGames.SDK.environment;
    var _0x4f9f34 = _0x72e291(_0x1c1f72) + 1;
    var _0x16cb30 = _0x25ed17(_0x4f9f34);
    _0x291bc6(_0x1c1f72, _0x16cb30, _0x4f9f34);
    return _0x16cb30;
  }
  function _0x5c44c7() {
    var _0x2577d3 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x2157d6 = _0x72e291(_0x2577d3) + 1;
    var _0x470164 = _0x25ed17(_0x2157d6);
    _0x291bc6(_0x2577d3, _0x470164, _0x2157d6);
    return _0x470164;
  }
  function _0x1b73a9(_0x1b5635) {
    var _0x445031 = new URLSearchParams(window.location.search);
    var _0x273375 = _0x445031.get(window.unityStringify(_0x1b5635));
    if (_0x273375 === null) {
      _0x273375 = "";
    }
    var _0x11da3e = _0x72e291(_0x273375) + 1;
    var _0x4e4088 = _0x25ed17(_0x11da3e);
    _0x291bc6(_0x273375, _0x4e4088, _0x11da3e);
    return _0x4e4088;
  }
  function _0x230edf() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x3c89a8(_0x29810f, _0x5e5227, _0x589ed8, _0x3ed133) {
    var _0x5d2f05 = _0x242db5(_0x29810f);
    var _0x2fe1b8 = _0x242db5(_0x5e5227);
    var _0x2a6dd6 = _0x242db5(_0x589ed8);
    var _0x3d329c = _0x242db5(_0x3ed133);
    try {
      firebase.database().ref(_0x5d2f05).once("value").then(function (_0x350d8a) {
        window.unityInstance.SendMessage(_0x2fe1b8, _0x2a6dd6, JSON.stringify(_0x350d8a.val()));
      });
    } catch (_0x91f13b) {
      window.unityInstance.SendMessage(_0x2fe1b8, _0x3d329c, JSON.stringify(_0x91f13b, Object.getOwnPropertyNames(_0x91f13b)));
    }
  }
  function _0x2483a4() {
    var _0x43a9b = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x1c7fe7 = _0x72e291(_0x43a9b) + 1;
    var _0x41ce38 = _0x25ed17(_0x1c7fe7);
    _0x291bc6(_0x43a9b, _0x41ce38, _0x1c7fe7);
    return _0x41ce38;
  }
  function _0xd2dc2b() {
    if (performance.memory) {
      return performance.memory.totalJSHeapSize;
    }
    return 0;
  }
  function _0x3dd2b7() {
    if (performance.memory) {
      return performance.memory.usedJSHeapSize;
    }
    return 0;
  }
  function _0x3c4341() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x24674b) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x24674b)
      }));
    }).catch(function (_0x4e175f) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x4e175f)
      }));
    });
  }
  function _0x3f48d0() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x562f6f) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x562f6f
      }));
    }).catch(function (_0x27c20f) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x27c20f)
      }));
    });
  }
  function _0x3d9086() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x1e73cc) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x1e73cc
      }));
    }).catch(function (_0x228769) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x228769)
      }));
    });
  }
  function _0xa04472() {}
  function _0x23ccf4() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x41590d("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x292edb) {
          this._showRewardAdFn = _0x292edb;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x41590d("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x41590d("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x2701f2) {
          console.log("[H5 Ads] Reward break done");
          _0x41590d("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x41590d("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x599e46() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x41590d("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x41590d("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x41590d("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x2c48ae() {
    if (this._showRewardAdFn) {
      _0x41590d("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x41590d("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x1e3e82() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0xf49a4e) {
      window.UnitySDK.logError("Error while calling happytime:", _0xf49a4e);
    }
  }
  function _0x2480c8() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x253ed0) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x253ed0);
    }
  }
  function _0x7643ac(_0xf631a3, _0x1a079f) {
    const _0x44d875 = _0x242db5(_0xf631a3);
    const _0x6cfe8c = _0x242db5(_0x1a079f);
    const _0x449352 = document.createElement("input");
    _0x449352.type = "file";
    _0x449352.accept = ".txt";
    _0x449352.onchange = _0xf6bee0 => {
      const _0x959700 = _0xf6bee0.target.files[0];
      if (_0x959700) {
        const _0x24e16b = new FileReader();
        _0x24e16b.onload = () => {
          const _0x218a7f = _0x24e16b.result;
          _0x41590d(_0x44d875, _0x6cfe8c, _0x218a7f);
        };
        _0x24e16b.readAsText(_0x959700);
      }
    };
    _0x449352.click();
  }
  function _0x44bc3a(_0x548c5, _0x4e4b3e) {
    const _0x47d977 = _0x242db5(_0x548c5);
    const _0x46ef3b = _0x242db5(_0x4e4b3e);
    const _0x16629b = document.createElement("input");
    _0x16629b.type = "file";
    _0x16629b.accept = ".gmd";
    _0x16629b.onchange = _0x482e0d => {
      const _0xd77d84 = _0x482e0d.target.files[0];
      if (_0xd77d84) {
        const _0x8267ce = new FileReader();
        _0x8267ce.onload = () => {
          const _0x32fcb8 = _0x8267ce.result;
          _0x41590d(_0x47d977, _0x46ef3b, _0x32fcb8);
        };
        _0x8267ce.readAsText(_0xd77d84);
      }
    };
    _0x16629b.click();
  }
  function _0x8c6fdc(_0x20b7ea, _0x278a2e, _0x3137b8, _0x5203d6, _0x53e67b, _0x54a34d, _0x552f5) {
    var _0x1cb4ca = _0x242db5(_0x20b7ea);
    var _0x1686a4 = _0x242db5(_0x278a2e);
    var _0x262d94 = _0x242db5(_0x3137b8);
    var _0x149748 = _0x242db5(_0x53e67b);
    var _0x20f428 = _0x242db5(_0x54a34d);
    var _0x1cd1c2 = _0x242db5(_0x552f5);
    try {
      var _0x298f01 = {};
      _0x298f01[_0x262d94] = firebase.firestore.FieldValue.increment(_0x5203d6);
      firebase.firestore().collection(_0x1cb4ca).doc(_0x1686a4).update(_0x298f01).then(function () {
        window.unityInstance.SendMessage(_0x149748, _0x20f428, "Success: incremented " + _0x262d94 + " by " + _0x5203d6);
      }).catch(function (_0x2fec0a) {
        window.unityInstance.SendMessage(_0x149748, _0x1cd1c2, JSON.stringify(_0x2fec0a, Object.getOwnPropertyNames(_0x2fec0a)));
      });
    } catch (_0x1db758) {
      window.unityInstance.SendMessage(_0x149748, _0x1cd1c2, JSON.stringify(_0x1db758, Object.getOwnPropertyNames(_0x1db758)));
    }
  }
  function _0x2afbb8(_0x4f5c15) {
    if (typeof _0x242db5 !== "undefined") {
      window.unityStringify = _0x242db5;
    } else {
      window.unityStringify = _0x242db5;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x4f5c15),
      pointerLockElement: undefined,
      unlockPointer: function () {
        this.pointerLockElement = document.pointerLockElement || null;
        if (this.pointerLockElement && document.exitPointerLock) {
          document.exitPointerLock();
        }
      },
      lockPointer: function () {
        if (this.pointerLockElement && this.pointerLockElement.requestPointerLock) {
          this.pointerLockElement.requestPointerLock();
        }
      },
      logError: function () {
        var _0x14d379 = Array.prototype.slice.call(arguments);
        _0x14d379.unshift("[JsLib]");
        console.error.apply(console, _0x14d379);
      }
    };
    var _0x5f0831 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x4f5c15)
      }
    };
    var _0x59b59c = document.createElement("script");
    _0x59b59c.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x59b59c);
    _0x59b59c.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x5f0831).then(function () {
        _0x41590d("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x455ab6) {
          _0x41590d("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x455ab6 ? 1 : 0);
        }).catch(function (_0x24de27) {
          window.UnitySDK.logError("Error while checking adblock:", _0x24de27);
          _0x41590d("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x5dbe08) {
          _0x41590d("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x5dbe08)
          }));
        });
      });
    });
  }
  function _0x45cf36() {
    if (/CrOS/.test(navigator.userAgent)) {
      return 1;
    } else {
      return 0;
    }
  }
  function _0x121f40() {
    var _0x136cc1 = window.document;
    var _0x469158 = _0x136cc1.fullscreenElement || _0x136cc1.mozFullScreenElement || _0x136cc1.webkitFullscreenElement || _0x136cc1.msFullscreenElement;
    return _0x469158 != null;
  }
  function _0xc7247e() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x40fb41 = null;
  var _0x408ec5 = 0;
  function _0x1cf046() {
    return _0x40fb41 && _0x40fb41.activated || _0x408ec5 != 0;
  }
  var _0x3e0017 = 1;
  var _0x47b9d5 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x4139ca() {
    _0x47b9d5 = {
      x: _0x40fb41.x * _0x3e0017,
      y: _0x40fb41.y * _0x3e0017,
      z: _0x40fb41.z * _0x3e0017
    };
    if (_0x408ec5 != 0) {
      _0x399b31(_0x408ec5, _0x47b9d5.x, _0x47b9d5.y, _0x47b9d5.z);
    }
  }
  var _0x2a266b = 0;
  var _0x4aaa1e = 0;
  var _0x27c06d = 0;
  var _0x53932b = 0;
  var _0x5547f0 = 0;
  function _0x1264cb(_0x421dda, _0x46a05a) {
    var _0x29d0a8 = {
      x: _0x421dda.x - _0x46a05a.x,
      y: _0x421dda.y - _0x46a05a.y,
      z: _0x421dda.z - _0x46a05a.z
    };
    var _0x4686c2 = _0x29d0a8.x * _0x29d0a8.x + _0x29d0a8.y * _0x29d0a8.y + _0x29d0a8.z * _0x29d0a8.z;
    var _0x1a76ee = {
      x: _0x421dda.x + _0x46a05a.x,
      y: _0x421dda.y + _0x46a05a.y,
      z: _0x421dda.z + _0x46a05a.z
    };
    var _0x1d1128 = _0x1a76ee.x * _0x1a76ee.x + _0x1a76ee.y * _0x1a76ee.y + _0x1a76ee.z * _0x1a76ee.z;
    if (_0x4686c2 <= _0x1d1128) {
      return _0x29d0a8;
    } else {
      return _0x1a76ee;
    }
  }
  function _0x1ea095(_0x34cb1d) {
    var _0x1b83e8 = {
      x: _0x34cb1d.accelerationIncludingGravity.x * _0x3e0017,
      y: _0x34cb1d.accelerationIncludingGravity.y * _0x3e0017,
      z: _0x34cb1d.accelerationIncludingGravity.z * _0x3e0017
    };
    if (_0x408ec5 != 0) {
      _0x399b31(_0x408ec5, _0x1b83e8.x, _0x1b83e8.y, _0x1b83e8.z);
    }
    var _0x12cc9a = {
      x: _0x34cb1d.acceleration.x * _0x3e0017,
      y: _0x34cb1d.acceleration.y * _0x3e0017,
      z: _0x34cb1d.acceleration.z * _0x3e0017
    };
    if (_0x27c06d != 0) {
      _0x399b31(_0x27c06d, _0x12cc9a.x, _0x12cc9a.y, _0x12cc9a.z);
    }
    if (_0x53932b != 0) {
      var _0x5b8cde = _0x1264cb(_0x1b83e8, _0x12cc9a);
      _0x399b31(_0x53932b, _0x5b8cde.x, _0x5b8cde.y, _0x5b8cde.z);
    }
    if (_0x5547f0 != 0) {
      var _0x24b9fe = Math.PI / 180;
      _0x399b31(_0x5547f0, _0x34cb1d.rotationRate.alpha * _0x24b9fe, _0x34cb1d.rotationRate.beta * _0x24b9fe, _0x34cb1d.rotationRate.gamma * _0x24b9fe);
    }
  }
  var _0x722440 = 0;
  function _0x565d6a(_0x13e21d) {
    if (_0x13e21d & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x1908e8) {
          if (_0x1908e8 === "granted") {
            _0x722440 &= ~1;
          } else {
            _0xdfc5d6("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x3e6202) {
          _0xdfc5d6(_0x3e6202);
          _0x722440 |= 1;
        });
      }
    }
    if (_0x13e21d & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x2d89fd) {
          if (_0x2d89fd === "granted") {
            _0x722440 &= ~2;
          } else {
            _0xdfc5d6("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x4bf2b6) {
          _0xdfc5d6(_0x4bf2b6);
          _0x722440 |= 2;
        });
      }
    }
  }
  function _0x5a8bed() {
    if (_0x408ec5 == 0 && _0x27c06d == 0 && _0x53932b == 0 && _0x5547f0 == 0) {
      _0x565d6a(2);
      window.addEventListener("devicemotion", _0x1ea095);
    }
  }
  function _0x19917b() {
    var _0x267c18 = 9.80665;
    _0x3e0017 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x267c18 : -1 / _0x267c18;
  }
  function _0x168858(_0x5f44dc, _0x4e5fd5) {
    _0x19917b();
    if (typeof Accelerometer === "undefined") {
      _0x5a8bed();
      if (_0x5f44dc != 0) {
        _0x408ec5 = _0x5f44dc;
      }
      return;
    }
    if (_0x5f44dc != 0) {
      _0x408ec5 = _0x5f44dc;
    }
    function _0x381f36(_0x22d129) {
      _0x40fb41 = new Accelerometer({
        frequency: _0x22d129,
        referenceFrame: "device"
      });
      _0x40fb41.addEventListener("reading", _0x4139ca);
      _0x40fb41.addEventListener("error", function (_0x1574af) {
        _0xdfc5d6(_0x1574af.error ? _0x1574af.error : _0x1574af);
      });
      _0x40fb41.start();
      _0x4aaa1e = _0x22d129;
    }
    if (_0x40fb41) {
      if (_0x4aaa1e != _0x4e5fd5) {
        _0x40fb41.stop();
        _0x40fb41.removeEventListener("reading", _0x4139ca);
        _0x381f36(_0x4e5fd5);
      }
    } else if (_0x2a266b != 0) {
      _0x2a266b = _0x4e5fd5;
    } else {
      _0x2a266b = _0x4e5fd5;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x425d61) {
        if (_0x425d61.state === "granted") {
          _0x381f36(_0x2a266b);
        } else {
          _0xdfc5d6("No permission to use Accelerometer.");
        }
        _0x2a266b = 0;
      });
    }
  }
  function _0x3607f6() {
    if (_0x408ec5 == 0 && _0x27c06d == 0 && _0x53932b == 0 && _0x5547f0 == 0) {
      window.removeEventListener("devicemotion", _0x5ddda0);
    }
  }
  function _0x3c408a() {
    if (_0x40fb41) {
      if (typeof GravitySensor !== "undefined" || _0x53932b == 0) {
        _0x40fb41.stop();
        _0x40fb41.removeEventListener("reading", _0x4139ca);
        _0x40fb41 = null;
      }
      _0x408ec5 = 0;
      _0x4aaa1e = 0;
    } else if (_0x408ec5 != 0) {
      _0x408ec5 = 0;
      _0x3607f6();
    }
  }
  function _0x300b38(_0x229960, _0x133933) {
    var _0x2dc881 = "";
    for (var _0x291810 = 0; _0x291810 < _0x133933; _0x291810++) {
      _0x2dc881 += String.fromCharCode(_0x5d32f0[_0x229960 + _0x291810]);
    }
    _0x24391e.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x2dc881) + "),default";
  }
  function _0x174970(_0x1bf258) {
    _0x24391e.canvas.style.cursor = _0x1bf258 ? "default" : "none";
  }
  function _0x1e8cfa(_0x7f60f0) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x7f60f0);
    }
    return _0x7f60f0.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x13d3ce() {
    var _0x1d5f9f = _0x24391e.canvas ? _0x24391e.canvas.id : "unity-canvas";
    return "#" + _0x1e8cfa(_0x1d5f9f);
  }
  function _0xbd03fb(_0x5c5671, _0x1c478c, _0x282fb4, _0x8a48bc) {
    var _0x793630 = document.querySelector(_0x13d3ce());
    var _0x4b0f39 = _0x793630 && _0x793630.getBoundingClientRect();
    _0x51a6ce[_0x282fb4 >> 2] = _0x5c5671 - (_0x4b0f39 ? _0x4b0f39.left : 0);
    _0x51a6ce[_0x8a48bc >> 2] = _0x1c478c - (_0x4b0f39 ? _0x4b0f39.top : 0);
  }
  function _0x3067f0(_0x17846f) {
    var _0x4bf9c8 = _0x72e291(_0x17846f) + 1;
    var _0x354ac2 = _0x25ed17(_0x4bf9c8);
    _0x291bc6(_0x17846f, _0x354ac2, _0x4bf9c8);
    return _0x354ac2;
  }
  function _0x689948() {
    var _0x1d05b4 = _0x13d3ce();
    if (_0x689948.selector != _0x1d05b4) {
      _0xc27a35(_0x689948.ptr);
      _0x689948.ptr = _0x3067f0(_0x1d05b4);
      _0x689948.selector = _0x1d05b4;
    }
    return _0x689948.ptr;
  }
  function _0x571806(_0x2d4afa) {
    var _0x4a4e56 = _0x242db5(_0x2d4afa);
    try {
      eval(_0x4a4e56);
    } catch (_0x456a74) {
      console.error(_0x456a74);
    }
  }
  function _0x4011f5(_0x4c505d) {
    var _0x2aaf41 = _0x242db5(_0x4c505d);
    window.open(_0x2aaf41, "_blank", "");
  }
  var _0xcb7e2 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x261b83) {
      if (_0x261b83) {
        if (_0xcb7e2.numPendingSync == 0) {
          return;
        }
      } else if (_0xcb7e2.syncInProgress) {
        _0xcb7e2.numPendingSync++;
        return;
      }
      _0xcb7e2.syncInProgress = true;
      _0x415c36.syncfs(false, function (_0x199067) {
        _0xcb7e2.syncInProgress = false;
      });
      _0xcb7e2.numPendingSync = 0;
    }
  };
  function _0x51a271() {
    _0x24391e.setInterval(function () {
      _0xcb7e2.sync(true);
    }, _0xcb7e2.syncInternal);
  }
  function _0x1c5783() {
    _0xcb7e2.sync(false);
  }
  var _0x228790 = null;
  function _0xb67ef2() {
    if (typeof GravitySensor !== "undefined") {
      return _0x228790 && _0x228790.activated;
    } else {
      return _0x53932b != 0;
    }
  }
  function _0x368b72() {
    if (_0x53932b != 0) {
      _0x399b31(_0x53932b, _0x228790.x * _0x3e0017, _0x228790.y * _0x3e0017, _0x228790.z * _0x3e0017);
    }
  }
  var _0x34ae84 = 0;
  var _0x5443aa = null;
  function _0x1d5e5c() {
    var _0x2456d0 = {
      x: _0x5443aa.x * _0x3e0017,
      y: _0x5443aa.y * _0x3e0017,
      z: _0x5443aa.z * _0x3e0017
    };
    if (_0x27c06d != 0) {
      _0x399b31(_0x27c06d, _0x2456d0.x, _0x2456d0.y, _0x2456d0.z);
    }
    if (_0x53932b != 0 && typeof GravitySensor === "undefined") {
      var _0x3c09dd = _0x1264cb(_0x47b9d5, _0x2456d0);
      _0x399b31(_0x53932b, _0x3c09dd.x, _0x3c09dd.y, _0x3c09dd.z);
    }
  }
  var _0x18d1ee = 0;
  var _0x33b0eb = 0;
  function _0x4e60a6(_0x1bf223, _0x4b8255) {
    _0x19917b();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x5a8bed();
      if (_0x1bf223 != 0) {
        _0x27c06d = _0x1bf223;
      }
      return;
    }
    if (_0x1bf223 != 0) {
      _0x27c06d = _0x1bf223;
    }
    function _0x2f5fb8(_0x4892ec) {
      _0x5443aa = new LinearAccelerationSensor({
        frequency: _0x4892ec,
        referenceFrame: "device"
      });
      _0x5443aa.addEventListener("reading", _0x1d5e5c);
      _0x5443aa.addEventListener("error", function (_0x46bf99) {
        _0xdfc5d6(_0x46bf99.error ? _0x46bf99.error : _0x46bf99);
      });
      _0x5443aa.start();
      _0x33b0eb = _0x4892ec;
    }
    if (_0x5443aa) {
      if (_0x33b0eb != _0x4b8255) {
        _0x5443aa.stop();
        _0x5443aa.removeEventListener("reading", _0x1d5e5c);
        _0x2f5fb8(_0x4b8255);
      }
    } else if (_0x18d1ee != 0) {
      _0x18d1ee = _0x4b8255;
    } else {
      _0x18d1ee = _0x4b8255;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x29f38a) {
        if (_0x29f38a.state === "granted") {
          _0x2f5fb8(_0x18d1ee);
        } else {
          _0xdfc5d6("No permission to use LinearAccelerationSensor.");
        }
        _0x18d1ee = 0;
      });
    }
  }
  function _0x17dc3d(_0x1062cd, _0x4462c7) {
    if (typeof GravitySensor === "undefined") {
      _0x168858(0, Math.max(_0x4462c7, _0x4aaa1e));
      _0x4e60a6(0, Math.max(_0x4462c7, _0x33b0eb));
      _0x53932b = _0x1062cd;
      return;
    }
    _0x19917b();
    _0x53932b = _0x1062cd;
    function _0x8d25a5(_0x23a667) {
      _0x228790 = new GravitySensor({
        frequency: _0x23a667,
        referenceFrame: "device"
      });
      _0x228790.addEventListener("reading", _0x368b72);
      _0x228790.addEventListener("error", function (_0xa9b6f0) {
        _0xdfc5d6(_0xa9b6f0.error ? _0xa9b6f0.error : _0xa9b6f0);
      });
      _0x228790.start();
    }
    if (_0x228790) {
      _0x228790.stop();
      _0x228790.removeEventListener("reading", _0x368b72);
      _0x8d25a5(_0x4462c7);
    } else if (_0x34ae84 != 0) {
      _0x34ae84 = _0x4462c7;
    } else {
      _0x34ae84 = _0x4462c7;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0xdb631f) {
        if (_0xdb631f.state === "granted") {
          _0x8d25a5(_0x34ae84);
        } else {
          _0xdfc5d6("No permission to use GravitySensor.");
        }
        _0x34ae84 = 0;
      });
    }
  }
  function _0xe4104c() {
    if (_0x5443aa) {
      if (typeof GravitySensor !== "undefined" || _0x53932b == 0) {
        _0x5443aa.stop();
        _0x5443aa.removeEventListener("reading", _0x1d5e5c);
        _0x5443aa = null;
      }
      _0x27c06d = 0;
      _0x33b0eb = 0;
    } else if (_0x27c06d != 0) {
      _0x27c06d = 0;
      _0x3607f6();
    }
  }
  function _0x13c5b7() {
    _0x53932b = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x408ec5 == 0) {
        _0x3c408a();
      }
      if (_0x27c06d == 0) {
        _0xe4104c();
      }
      return;
    }
    if (_0x228790) {
      _0x228790.stop();
      _0x228790.removeEventListener("reading", _0x368b72);
      _0x228790 = null;
    }
  }
  function _0x2db342(_0x4eee8e) {
    try {
      (function () {
        _0x3fcf98.call(null, _0x4eee8e);
      })();
    } catch (_0x4636fa) {
      console.warn(_0x4636fa);
    }
  }
  var _0x93a0cd = null;
  function _0x5ad744() {
    return _0x93a0cd && _0x93a0cd.activated || _0x5547f0 != 0;
  }
  function _0x464c28() {
    if (_0x5547f0 != 0) {
      _0x399b31(_0x5547f0, _0x93a0cd.x, _0x93a0cd.y, _0x93a0cd.z);
    }
  }
  var _0x364c84 = 0;
  function _0x5e5cdc(_0x2b81ad, _0x3196d7) {
    if (typeof Gyroscope === "undefined") {
      _0x5a8bed();
      _0x5547f0 = _0x2b81ad;
      return;
    }
    _0x5547f0 = _0x2b81ad;
    function _0x2f76f3(_0x5c95d5) {
      _0x93a0cd = new Gyroscope({
        frequency: _0x5c95d5,
        referenceFrame: "device"
      });
      _0x93a0cd.addEventListener("reading", _0x464c28);
      _0x93a0cd.addEventListener("error", function (_0x34c19c) {
        _0xdfc5d6(_0x34c19c.error ? _0x34c19c.error : _0x34c19c);
      });
      _0x93a0cd.start();
    }
    if (_0x93a0cd) {
      _0x93a0cd.stop();
      _0x93a0cd.removeEventListener("reading", _0x464c28);
      _0x2f76f3(_0x3196d7);
    } else if (_0x364c84 != 0) {
      _0x364c84 = _0x3196d7;
    } else {
      _0x364c84 = _0x3196d7;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x480fd6) {
        if (_0x480fd6.state === "granted") {
          _0x2f76f3(_0x364c84);
        } else {
          _0xdfc5d6("No permission to use Gyroscope.");
        }
        _0x364c84 = 0;
      });
    }
  }
  function _0x4642ec() {
    if (_0x93a0cd) {
      _0x93a0cd.stop();
      _0x93a0cd.removeEventListener("reading", _0x464c28);
      _0x93a0cd = null;
      _0x5547f0 = 0;
    } else if (_0x5547f0 != 0) {
      _0x5547f0 = 0;
      _0x3607f6();
    }
  }
  function _0x49fcd0() {
    const _0x27409b = function (_0x2d3f47) {
      if (_0x2d3f47.target.localName !== "canvas") {
        _0x291ad7();
      }
    };
    document.addEventListener("contextmenu", _0x27409b);
    _0x24391e.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x27409b);
    });
  }
  function _0x390411() {
    return _0x5443aa && _0x5443aa.activated || _0x27c06d != 0;
  }
  function _0x45c919(_0x32a399, _0x525b82) {
    var _0x2db659 = _0x242db5(_0x32a399);
    if (typeof dump == "function") {
      dump(_0x2db659);
    }
    switch (_0x525b82) {
      case 0:
      case 1:
      case 4:
        console.error(_0x2db659);
        return;
      case 2:
        console.warn(_0x2db659);
        return;
      case 3:
      case 5:
        console.log(_0x2db659);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x2db659);
    }
  }
  function _0x3c3dc2(_0x1f699a, _0xe4f2d8) {
    var _0x1cede4 = _0x19fe57();
    if (_0x1f699a) {
      _0x291bc6(_0x1cede4, _0x1f699a, _0xe4f2d8);
    }
    return _0x72e291(_0x1cede4);
  }
  var _0x4f5f61 = null;
  var _0x5f2d2e = 0;
  function _0x2b7522() {
    return _0x4f5f61 && _0x4f5f61.activated || _0x5f2d2e != 0;
  }
  function _0x5029d6() {
    if (_0x5f2d2e != 0) {
      _0x135a07(_0x5f2d2e, _0x4f5f61.quaternion[0], _0x4f5f61.quaternion[1], _0x4f5f61.quaternion[2], _0x4f5f61.quaternion[3]);
    }
  }
  var _0x33532c = 0;
  function _0x5ddda0(_0xf46b95) {
    if (_0x5f2d2e) {
      var _0x4ec8ea = Math.PI / 180;
      var _0x4a72ba = _0xf46b95.beta * _0x4ec8ea;
      var _0x5d01dd = _0xf46b95.gamma * _0x4ec8ea;
      var _0x15f9f5 = _0xf46b95.alpha * _0x4ec8ea;
      var _0x7352cd = Math.cos(_0x4a72ba / 2);
      var _0x2bd6d0 = Math.sin(_0x4a72ba / 2);
      var _0x3dd248 = Math.cos(_0x5d01dd / 2);
      var _0x2986f5 = Math.sin(_0x5d01dd / 2);
      var _0x19c7a5 = Math.cos(_0x15f9f5 / 2);
      var _0xdfd65f = Math.sin(_0x15f9f5 / 2);
      var _0x55d94a = _0x2bd6d0 * _0x3dd248 * _0x19c7a5 - _0x7352cd * _0x2986f5 * _0xdfd65f;
      var _0x15b0c8 = _0x7352cd * _0x2986f5 * _0x19c7a5 + _0x2bd6d0 * _0x3dd248 * _0xdfd65f;
      var _0x4aa15f = _0x7352cd * _0x3dd248 * _0xdfd65f + _0x2bd6d0 * _0x2986f5 * _0x19c7a5;
      var _0x259c5f = _0x7352cd * _0x3dd248 * _0x19c7a5 - _0x2bd6d0 * _0x2986f5 * _0xdfd65f;
      _0x135a07(_0x5f2d2e, _0x55d94a, _0x15b0c8, _0x4aa15f, _0x259c5f);
    }
  }
  function _0x2e0d4f(_0x22662e, _0x14e139) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x5f2d2e == 0) {
        _0x5f2d2e = _0x22662e;
        _0x565d6a(1);
        window.addEventListener("deviceorientation", _0x5ddda0);
      }
      return;
    }
    _0x5f2d2e = _0x22662e;
    function _0x22c2ee(_0x106eb5) {
      _0x4f5f61 = new RelativeOrientationSensor({
        frequency: _0x106eb5,
        referenceFrame: "device"
      });
      _0x4f5f61.addEventListener("reading", _0x5029d6);
      _0x4f5f61.addEventListener("error", function (_0x4615f2) {
        _0xdfc5d6(_0x4615f2.error ? _0x4615f2.error : _0x4615f2);
      });
      _0x4f5f61.start();
    }
    if (_0x4f5f61) {
      _0x4f5f61.stop();
      _0x4f5f61.removeEventListener("reading", _0x5029d6);
      _0x22c2ee(_0x14e139);
    } else if (_0x33532c != 0) {
      _0x33532c = _0x14e139;
    } else {
      _0x33532c = _0x14e139;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x2f94bb) {
        if (_0x2f94bb.every(function (_0x461921) {
          return _0x461921.state === "granted";
        })) {
          _0x22c2ee(_0x33532c);
        } else {
          _0xdfc5d6("No permissions to use RelativeOrientationSensor.");
        }
        _0x33532c = 0;
      });
    }
  }
  function _0x10e9f8() {
    if (_0x4f5f61) {
      _0x4f5f61.stop();
      _0x4f5f61.removeEventListener("reading", _0x5029d6);
      _0x4f5f61 = null;
    } else if (_0x5f2d2e != 0) {
      window.removeEventListener("deviceorientation", _0x5ddda0);
    }
    _0x5f2d2e = 0;
  }
  function _0x562bf7() {
    if (_0x722440 == 0) {
      return;
    }
    _0x565d6a(_0x722440);
  }
  function _0x24e4f8() {
    _0x24391e.QuitCleanup();
  }
  var _0x206ebb = 0;
  function _0x217bf8() {
    if (_0x206ebb) {
      _0x4fa5fa(_0x206ebb, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x2fdfe5() {
    _0x206ebb = 0;
    window.removeEventListener("resize", _0x217bf8);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x217bf8);
    }
  }
  function _0x20374b(_0x1943ea) {
    if (!_0x206ebb) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x217bf8);
      }
      window.addEventListener("resize", _0x217bf8);
      _0x206ebb = _0x1943ea;
      setTimeout(_0x217bf8, 0);
    }
  }
  var _0xcfe613 = -1;
  var _0x2b4352 = -1;
  var _0x2db627 = -1;
  function _0x25a1b7(_0x1ea22b) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0xc44201() {
      _0x2b4352 = _0xcfe613;
      var _0x5c5388 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x17caed = _0x5c5388[_0x2b4352];
      screen.orientation.lock(_0x17caed).then(function () {
        if (_0xcfe613 != _0x2b4352) {
          _0x2db627 = setTimeout(_0xc44201, 0);
        } else {
          _0x2db627 = -1;
        }
      }).catch(function (_0x5528a2) {
        _0xdfc5d6(_0x5528a2);
        _0x2db627 = -1;
      });
    }
    _0xcfe613 = _0x1ea22b;
    if (_0x2db627 == -1 && _0x1ea22b != _0x2b4352) {
      _0x2db627 = setTimeout(_0xc44201, 0);
    }
  }
  var _0x94b82f = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x5f34d7(_0x5964aa) {
    _0x5964aa.estimatePlaybackPosition = function () {
      var _0x13e969 = (_0x94b82f.audioContext.currentTime - _0x5964aa.playbackStartTime) * _0x5964aa.playbackRate.value;
      if (_0x5964aa.loop && _0x13e969 >= _0x5964aa.loopStart) {
        _0x13e969 = (_0x13e969 - _0x5964aa.loopStart) % (_0x5964aa.loopEnd - _0x5964aa.loopStart) + _0x5964aa.loopStart;
      }
      return _0x13e969;
    };
    _0x5964aa.setPitch = function (_0x5eed90) {
      var _0x2aee08 = _0x5964aa.estimatePlaybackPosition();
      if (_0x2aee08 >= 0) {
        _0x5964aa.playbackStartTime = _0x94b82f.audioContext.currentTime - _0x2aee08 / _0x5eed90;
      }
      if (_0x5964aa.playbackRate.value !== _0x5eed90) {
        _0x5964aa.playbackRate.value = _0x5eed90;
      }
    };
  }
  function _0x58cbd0(_0x2d84e3, _0x1c65ab) {
    var _0x5dc2d2 = {
      buffer: _0x2d84e3,
      error: _0x1c65ab
    };
    _0x5dc2d2.release = function () {};
    _0x5dc2d2.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x5dcacc = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x5dcacc;
    };
    _0x5dc2d2.getData = function (_0x2fd481, _0x124961) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x3a9080 = _0x2fd481 >> 2;
      var _0x1aabb5 = _0x5d3882.subarray(_0x3a9080, _0x3a9080 + (_0x124961 >> 2));
      var _0x56f87d = Math.floor((_0x124961 >> 2) / this.buffer.numberOfChannels);
      var _0x49fc5d = Math.min(this.buffer.length, _0x56f87d);
      for (var _0x217e10 = 0; _0x217e10 < this.buffer.numberOfChannels; _0x217e10++) {
        var _0x458571 = this.buffer.getChannelData(_0x217e10).subarray(0, _0x49fc5d);
        _0x1aabb5.set(_0x458571, _0x217e10 * _0x49fc5d);
      }
      return _0x49fc5d * this.buffer.numberOfChannels * 4;
    };
    _0x5dc2d2.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x5dc2d2.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x5dc2d2.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x2d3450 = _0x94b82f.audioContext.createBufferSource();
      _0x2d3450.buffer = this.buffer;
      _0x5f34d7(_0x2d3450);
      return _0x2d3450;
    };
    return _0x5dc2d2;
  }
  function _0x23aba8(_0x2baace, _0x30432e) {
    var _0x2d7c03 = {
      callback: _0x2baace,
      userData: _0x30432e,
      source: null,
      gain: _0x94b82f.audioContext.createGain(),
      panner: _0x94b82f.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x2d7c03.panner.rolloffFactor = 0;
    _0x2d7c03.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x2d7c03.playSoundClip = function (_0x1fd16f, _0xdd4d22, _0x2debeb) {
      try {
        var _0x337d8b = this;
        this.source = _0x1fd16f.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x337d8b.source.isStopped = true;
          _0x337d8b.disconnectSource();
          if (_0x337d8b.callback) {
            _0x19c2cf("vi", _0x337d8b.callback, [_0x337d8b.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0xdd4d22, _0x2debeb);
        this.source.playbackStartTime = _0xdd4d22 - _0x2debeb / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x37b98f) {
        console.error("Channel.playSoundClip error. Exception: " + _0x37b98f);
      }
    };
    _0x2d7c03.stop = function (_0x42858a) {
      if (!this.source) {
        return;
      }
      try {
        _0x2d7c03.source.stop(_0x94b82f.audioContext.currentTime + _0x42858a);
      } catch (_0x4e933c) {}
      if (_0x42858a == 0) {
        this.disconnectSource();
      }
    };
    _0x2d7c03.isPaused = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.isPausedMockNode) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.mediaElement.paused || this.source.pauseRequested;
      }
      return false;
    };
    _0x2d7c03.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x45406b = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x3bd620) {
          this.playbackRate = _0x3bd620;
        },
        stop: function (_0x3b4936) {
          this.scheduledStopTime = _0x3b4936;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x45406b;
    };
    _0x2d7c03.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x5b90e0 = this.source;
      var _0x37a2a3 = _0x58cbd0(_0x5b90e0.buffer, false);
      this.playSoundClip(_0x37a2a3, _0x94b82f.audioContext.currentTime, Math.max(0, _0x5b90e0.playbackPausedAtPosition));
      this.source.loop = _0x5b90e0.loop;
      this.source.loopStart = _0x5b90e0.loopStart;
      this.source.loopEnd = _0x5b90e0.loopEnd;
      this.source.setPitch(_0x5b90e0.playbackRate);
      if (typeof _0x5b90e0.scheduledStopTime !== "undefined") {
        var _0x504f9a = Math.max(_0x5b90e0.scheduledStopTime - _0x94b82f.audioContext.currentTime, 0);
        this.stop(_0x504f9a);
      }
    };
    _0x2d7c03.setLoop = function (_0x40babd) {
      this.loop = _0x40babd;
      if (!this.source || this.source.loop == _0x40babd) {
        return;
      }
      this.source.loop = _0x40babd;
    };
    _0x2d7c03.setLoopPoints = function (_0x3c2a0c, _0x5e86fa) {
      this.loopStart = _0x3c2a0c;
      this.loopEnd = _0x5e86fa;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x3c2a0c) {
        this.source.loopStart = _0x3c2a0c;
      }
      if (this.source.loopEnd !== _0x5e86fa) {
        this.source.loopEnd = _0x5e86fa;
      }
    };
    _0x2d7c03.set3D = function (_0x2dbfc1) {
      if (this.threeD == _0x2dbfc1) {
        return;
      }
      this.threeD = _0x2dbfc1;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x2d7c03.setPitch = function (_0x36a40c) {
      this.pitch = _0x36a40c;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x36a40c);
    };
    _0x2d7c03.setVolume = function (_0x55ac2a) {
      if (this.gain.gain.value == _0x55ac2a) {
        return;
      }
      this.gain.gain.value = _0x55ac2a;
    };
    _0x2d7c03.setPosition = function (_0x5933bf, _0x1c8a3c, _0x2ccfab) {
      var _0x115c9b = this.panner;
      if (_0x115c9b.positionX) {
        if (_0x115c9b.positionX.value !== _0x5933bf) {
          _0x115c9b.positionX.value = _0x5933bf;
        }
        if (_0x115c9b.positionY.value !== _0x1c8a3c) {
          _0x115c9b.positionY.value = _0x1c8a3c;
        }
        if (_0x115c9b.positionZ.value !== _0x2ccfab) {
          _0x115c9b.positionZ.value = _0x2ccfab;
        }
      } else if (_0x115c9b._x !== _0x5933bf || _0x115c9b._y !== _0x1c8a3c || _0x115c9b._z !== _0x2ccfab) {
        _0x115c9b.setPosition(_0x5933bf, _0x1c8a3c, _0x2ccfab);
        _0x115c9b._x = _0x5933bf;
        _0x115c9b._y = _0x1c8a3c;
        _0x115c9b._z = _0x2ccfab;
      }
    };
    _0x2d7c03.disconnectSource = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
      }
      this.source.onended = null;
      this.source.disconnect();
      delete this.source;
    };
    _0x2d7c03.setupPanning = function () {
      if (this.source.isPausedMockNode) {
        return;
      }
      this.source.disconnect();
      this.panner.disconnect();
      this.gain.disconnect();
      if (this.threeD) {
        this.source.connect(this.panner);
        this.panner.connect(this.gain);
      } else {
        this.source.connect(this.gain);
      }
      this.gain.connect(_0x94b82f.audioContext.destination);
    };
    _0x2d7c03.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x2d7c03;
  }
  function _0x31c24f(_0x1918bc, _0x11de20) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    _0x94b82f.audioInstances[++_0x94b82f.audioInstanceIdCounter] = _0x23aba8(_0x1918bc, _0x11de20);
    return _0x94b82f.audioInstanceIdCounter;
  }
  function _0x521cf8(_0x1e3549) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return 0;
    }
    var _0x2cea7d = _0x94b82f.audioInstances[_0x1e3549];
    if (!_0x2cea7d) {
      return 0;
    }
    return _0x2cea7d.getLength();
  }
  function _0x302f12(_0x6bdeac) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return 2;
    }
    var _0x4fade3 = _0x94b82f.audioInstances[_0x6bdeac];
    if (_0x4fade3.error) {
      return 2;
    }
    if (_0x4fade3.buffer || _0x4fade3.url) {
      return 0;
    }
    return 1;
  }
  function _0xd47ef0(_0x98c55c, _0x4ecc86) {
    if (_0x94b82f.audioWebEnabled == 0) {
      _0x51a6ce[_0x4ecc86 >> 2] = 0;
      _0x51a6ce[(_0x4ecc86 >> 2) + 1] = 0;
      return false;
    }
    var _0x210319 = _0x94b82f.audioInstances[_0x98c55c];
    if (!_0x210319) {
      _0x51a6ce[_0x4ecc86 >> 2] = 0;
      _0x51a6ce[(_0x4ecc86 >> 2) + 1] = 0;
      return false;
    }
    _0x51a6ce[_0x4ecc86 >> 2] = _0x210319.getNumberOfChannels();
    _0x51a6ce[(_0x4ecc86 >> 2) + 1] = _0x210319.getFrequency();
    return true;
  }
  function _0x4167de(_0x535f76) {
    var _0xf8b29c = _0x94b82f.pendingAudioSources[_0x535f76];
    _0xf8b29c.sourceNode._startPlayback(_0xf8b29c.offset);
    delete _0x94b82f.pendingAudioSources[_0x535f76];
  }
  function _0x42257d() {
    Object.keys(_0x94b82f.pendingAudioSources).forEach(function (_0x5b08c9) {
      _0x4167de(_0x5b08c9);
    });
  }
  function _0x403353() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x94b82f.audioContext = new AudioContext();
      var _0x2ef7cf = function () {
        if (_0x94b82f.audioContext.state === "suspended") {
          _0x94b82f.audioContext.resume().catch(function (_0xbcfe67) {
            console.warn("Could not resume audio context. Exception: " + _0xbcfe67);
          });
        } else {
          _0x24391e.clearInterval(_0x59f1b4);
        }
      };
      var _0x59f1b4 = _0x24391e.setInterval(_0x2ef7cf, 400);
      _0x94b82f.audioWebEnabled = 1;
      var _0x238541 = function () {
        try {
          if (_0x94b82f.audioContext.state !== "running" && _0x94b82f.audioContext.state !== "closed") {
            _0x94b82f.audioContext.resume().catch(function (_0x8ba95e) {
              console.warn("Could not resume audio context. Exception: " + _0x8ba95e);
            });
          }
          _0x42257d();
          var _0x444b24 = 20;
          while (_0x94b82f.audioCache.length < _0x444b24) {
            var _0x89666a = new Audio();
            _0x89666a.autoplay = false;
            _0x94b82f.audioCache.push(_0x89666a);
          }
        } catch (_0x38de8f) {}
      };
      window.addEventListener("mousedown", _0x238541);
      window.addEventListener("touchstart", _0x238541);
      _0x24391e.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x238541);
        window.removeEventListener("touchstart", _0x238541);
      });
    } catch (_0xe8a773) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x1e41d2(_0x297edb) {
    var _0x2c686d = _0x58cbd0(null, false);
    _0x94b82f.audioContext.decodeAudioData(_0x297edb, function (_0x5da677) {
      _0x2c686d.buffer = _0x5da677;
    }, function (_0x306c77) {
      _0x2c686d.error = true;
      console.log("Decode error: " + _0x306c77);
    });
    return _0x2c686d;
  }
  function _0x1b26e1(_0x38fe1c, _0x1e99b5) {
    _0x94b82f.pendingAudioSources[_0x38fe1c.mediaElement.src] = {
      sourceNode: _0x38fe1c,
      offset: _0x1e99b5
    };
  }
  function _0x1ca282(_0x2598ae) {
    switch (_0x2598ae) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x6544c(_0x1a8c3c, _0x1ce977) {
    var _0x43dbf5 = _0x1ca282(_0x1ce977);
    var _0x4f2ff6 = new Blob([_0x1a8c3c], {
      type: _0x43dbf5
    });
    var _0x21d71a = {
      url: URL.createObjectURL(_0x4f2ff6),
      error: false,
      mediaElement: new Audio()
    };
    _0x21d71a.mediaElement.preload = "metadata";
    _0x21d71a.mediaElement.src = _0x21d71a.url;
    _0x21d71a.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x21d71a.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x21d71a.getData = function (_0x33263c, _0x48f001) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x21d71a.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x21d71a.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x21d71a.createSourceNode = function () {
      var _0x52a1b9 = this;
      var _0x42d373 = _0x94b82f.audioCache.length ? _0x94b82f.audioCache.pop() : new Audio();
      _0x42d373.preload = "metadata";
      _0x42d373.src = this.url;
      var _0x49aa78 = _0x94b82f.audioContext.createMediaElementSource(_0x42d373);
      Object.defineProperty(_0x49aa78, "loop", {
        get: function () {
          return _0x49aa78.mediaElement.loop;
        },
        set: function (_0x35a440) {
          if (_0x49aa78.mediaElement.loop !== _0x35a440) {
            _0x49aa78.mediaElement.loop = _0x35a440;
          }
        }
      });
      _0x49aa78.playbackRate = {};
      Object.defineProperty(_0x49aa78.playbackRate, "value", {
        get: function () {
          return _0x49aa78.mediaElement.playbackRate;
        },
        set: function (_0x3a9aba) {
          if (_0x49aa78.mediaElement.playbackRate !== _0x3a9aba) {
            _0x49aa78.mediaElement.playbackRate = _0x3a9aba;
          }
        }
      });
      Object.defineProperty(_0x49aa78, "currentTime", {
        get: function () {
          return _0x49aa78.mediaElement.currentTime;
        },
        set: function (_0x415235) {
          if (_0x49aa78.mediaElement.currentTime !== _0x415235) {
            _0x49aa78.mediaElement.currentTime = _0x415235;
          }
        }
      });
      Object.defineProperty(_0x49aa78, "mute", {
        get: function () {
          return _0x49aa78.mediaElement.mute;
        },
        set: function (_0x5af53e) {
          if (_0x49aa78.mediaElement.mute !== _0x5af53e) {
            _0x49aa78.mediaElement.mute = _0x5af53e;
          }
        }
      });
      Object.defineProperty(_0x49aa78, "onended", {
        get: function () {
          return _0x49aa78.mediaElement.onended;
        },
        set: function (_0xe61b0c) {
          _0x49aa78.mediaElement.onended = _0xe61b0c;
        }
      });
      _0x49aa78.playPromise = null;
      _0x49aa78.playTimeout = null;
      _0x49aa78.pauseRequested = false;
      _0x49aa78.isStopped = false;
      _0x49aa78._pauseMediaElement = function () {
        if (_0x49aa78.playPromise || _0x49aa78.playTimeout) {
          _0x49aa78.pauseRequested = true;
        } else {
          _0x49aa78.mediaElement.pause();
        }
      };
      _0x49aa78._startPlayback = function (_0x25f0fd) {
        if (_0x49aa78.playPromise || _0x49aa78.playTimeout) {
          _0x49aa78.mediaElement.currentTime = _0x25f0fd;
          _0x49aa78.pauseRequested = false;
          return;
        }
        _0x49aa78.mediaElement.currentTime = _0x25f0fd;
        _0x49aa78.playPromise = _0x49aa78.mediaElement.play();
        if (_0x49aa78.playPromise) {
          _0x49aa78.playPromise.then(function () {
            if (_0x49aa78.pauseRequested) {
              _0x49aa78.mediaElement.pause();
              _0x49aa78.pauseRequested = false;
            }
            _0x49aa78.playPromise = null;
          }).catch(function (_0x4f94ee) {
            _0x49aa78.playPromise = null;
            if (_0x4f94ee.name !== "NotAllowedError") {
              throw _0x4f94ee;
            }
            _0x1b26e1(_0x49aa78, _0x25f0fd);
          });
        }
      };
      _0x49aa78.start = function (_0xc079e4, _0x1651ed) {
        if (typeof _0xc079e4 === "undefined") {
          _0xc079e4 = _0x94b82f.audioContext.currentTime;
        }
        if (typeof _0x1651ed === "undefined") {
          _0x1651ed = 0;
        }
        var _0x5e6c10 = 4;
        var _0x194bce = (_0xc079e4 - _0x94b82f.audioContext.currentTime) * 1000;
        if (_0x194bce > _0x5e6c10) {
          _0x49aa78.playTimeout = setTimeout(function () {
            _0x49aa78.playTimeout = null;
            _0x49aa78._startPlayback(_0x1651ed);
          }, _0x194bce);
        } else {
          _0x49aa78._startPlayback(_0x1651ed);
        }
      };
      _0x49aa78.stop = function (_0x420b95) {
        if (typeof _0x420b95 === "undefined") {
          _0x420b95 = _0x94b82f.audioContext.currentTime;
        }
        var _0x95dcdd = 4;
        var _0x488bd7 = (_0x420b95 - _0x94b82f.audioContext.currentTime) * 1000;
        if (_0x488bd7 > _0x95dcdd) {
          setTimeout(function () {
            _0x49aa78._pauseMediaElement();
            _0x49aa78.isStopped = true;
          }, _0x488bd7);
        } else {
          _0x49aa78._pauseMediaElement();
          _0x49aa78.isStopped = true;
        }
      };
      _0x5f34d7(_0x49aa78);
      return _0x49aa78;
    };
    return _0x21d71a;
  }
  function _0x6c3422(_0x3d2260, _0x2ed95a, _0x17c283, _0x59ecd3) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return 0;
    }
    var _0x5c8180 = _0x5d32f0.buffer.slice(_0x3d2260, _0x3d2260 + _0x2ed95a);
    if (_0x2ed95a < 131072) {
      _0x17c283 = 1;
    }
    var _0xdef396;
    if (_0x17c283) {
      _0xdef396 = _0x1e41d2(_0x5c8180);
    } else {
      _0xdef396 = _0x6544c(_0x5c8180, _0x59ecd3);
    }
    _0x94b82f.audioInstances[++_0x94b82f.audioInstanceIdCounter] = _0xdef396;
    return _0x94b82f.audioInstanceIdCounter;
  }
  function _0x309ddd(_0x19ce44, _0x3fc4d8, _0x2586db, _0x5ebceb) {
    var _0x172358 = _0x94b82f.audioContext.createBuffer(_0x19ce44, _0x3fc4d8, _0x2586db);
    for (var _0x5990b0 = 0; _0x5990b0 < _0x19ce44; _0x5990b0++) {
      var _0x5cd6c8 = (_0x5ebceb >> 2) + _0x3fc4d8 * _0x5990b0;
      var _0x598759 = _0x172358.copyToChannel || function (_0x2fa7c5, _0x1cbca8, _0x496c79) {
        var _0xda0011 = _0x2fa7c5.subarray(0, Math.min(_0x2fa7c5.length, this.length - (_0x496c79 | 0)));
        this.getChannelData(_0x1cbca8 | 0).set(_0xda0011, _0x496c79 | 0);
      };
      _0x598759.apply(_0x172358, [_0x5d3882.subarray(_0x5cd6c8, _0x5cd6c8 + _0x3fc4d8), _0x5990b0, 0]);
    }
    return _0x58cbd0(_0x172358, false);
  }
  function _0x204e29(_0x44cf7a, _0x707bf0, _0x36ddc4, _0x43530f) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return 0;
    }
    var _0x5c0a94 = _0x309ddd(_0x44cf7a, _0x707bf0, _0x36ddc4, _0x43530f);
    _0x94b82f.audioInstances[++_0x94b82f.audioInstanceIdCounter] = _0x5c0a94;
    return _0x94b82f.audioInstanceIdCounter;
  }
  function _0x4e5878(_0x2ed8d4, _0x5acff9, _0x284f1a, _0x45d879) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    _0x19da8a(_0x5acff9, 0);
    var _0x13ccad = _0x94b82f.audioInstances[_0x2ed8d4];
    var _0x250064 = _0x94b82f.audioInstances[_0x5acff9];
    if (!_0x13ccad) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x250064.playSoundClip(_0x13ccad, _0x94b82f.audioContext.currentTime + _0x45d879, _0x284f1a);
    } catch (_0x4344a6) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x149893(_0xee089d) {
    var _0x481473 = _0x94b82f.audioInstances[_0xee089d];
    if (_0x481473) {
      _0x481473.release();
    }
    delete _0x94b82f.audioInstances[_0xee089d];
  }
  function _0x57e97d() {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    if (_0x94b82f.audioContext.state === "suspended") {
      _0x94b82f.audioContext.resume().catch(function (_0x39b4b2) {
        console.warn("Could not resume audio context. Exception: " + _0x39b4b2);
      });
    }
  }
  function _0x3827be(_0x23d2c2, _0x757449) {
    var _0x4e1615 = _0x94b82f.audioInstances[_0x23d2c2];
    _0x4e1615.set3D(_0x757449);
  }
  function _0x4847a5(_0x2f5721, _0x49bfe8, _0xa7cd27, _0x5c2ff5, _0x183337, _0x1b507f) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    _0x2f5721 = -_0x2f5721;
    _0x49bfe8 = -_0x49bfe8;
    _0xa7cd27 = -_0xa7cd27;
    var _0x656097 = _0x94b82f.audioContext.listener;
    if (_0x656097.forwardX) {
      if (_0x656097.forwardX.value !== _0x2f5721) {
        _0x656097.forwardX.value = _0x2f5721;
      }
      if (_0x656097.forwardY.value !== _0x49bfe8) {
        _0x656097.forwardY.value = _0x49bfe8;
      }
      if (_0x656097.forwardZ.value !== _0xa7cd27) {
        _0x656097.forwardZ.value = _0xa7cd27;
      }
      if (_0x656097.upX.value !== _0x5c2ff5) {
        _0x656097.upX.value = _0x5c2ff5;
      }
      if (_0x656097.upY.value !== _0x183337) {
        _0x656097.upY.value = _0x183337;
      }
      if (_0x656097.upZ.value !== _0x1b507f) {
        _0x656097.upZ.value = _0x1b507f;
      }
    } else if (_0x656097._forwardX !== _0x2f5721 || _0x656097._forwardY !== _0x49bfe8 || _0x656097._forwardZ !== _0xa7cd27 || _0x656097._upX !== _0x5c2ff5 || _0x656097._upY !== _0x183337 || _0x656097._upZ !== _0x1b507f) {
      _0x656097.setOrientation(_0x2f5721, _0x49bfe8, _0xa7cd27, _0x5c2ff5, _0x183337, _0x1b507f);
      _0x656097._forwardX = _0x2f5721;
      _0x656097._forwardY = _0x49bfe8;
      _0x656097._forwardZ = _0xa7cd27;
      _0x656097._upX = _0x5c2ff5;
      _0x656097._upY = _0x183337;
      _0x656097._upZ = _0x1b507f;
    }
  }
  function _0x27218c(_0x32001c, _0x4eab1d, _0x472435) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    var _0xe91b08 = _0x94b82f.audioContext.listener;
    if (_0xe91b08.positionX) {
      if (_0xe91b08.positionX.value !== _0x32001c) {
        _0xe91b08.positionX.value = _0x32001c;
      }
      if (_0xe91b08.positionY.value !== _0x4eab1d) {
        _0xe91b08.positionY.value = _0x4eab1d;
      }
      if (_0xe91b08.positionZ.value !== _0x472435) {
        _0xe91b08.positionZ.value = _0x472435;
      }
    } else if (_0xe91b08._positionX !== _0x32001c || _0xe91b08._positionY !== _0x4eab1d || _0xe91b08._positionZ !== _0x472435) {
      _0xe91b08.setPosition(_0x32001c, _0x4eab1d, _0x472435);
      _0xe91b08._positionX = _0x32001c;
      _0xe91b08._positionY = _0x4eab1d;
      _0xe91b08._positionZ = _0x472435;
    }
  }
  function _0xfd955d(_0x5add72, _0x4e835c) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    var _0xa340c4 = _0x94b82f.audioInstances[_0x5add72];
    _0xa340c4.setLoop(_0x4e835c);
  }
  function _0x2b225c(_0x2b3196, _0x3f1700, _0x501fcf) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    var _0x59ddb3 = _0x94b82f.audioInstances[_0x2b3196];
    _0x59ddb3.setLoopPoints(_0x3f1700, _0x501fcf);
  }
  function _0x3324d4(_0x2c7153, _0x19e5a2) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    var _0x45a8ce = _0x94b82f.audioInstances[_0x2c7153];
    if (_0x19e5a2 != _0x45a8ce.isPaused()) {
      if (_0x19e5a2) {
        _0x45a8ce.pause();
      } else {
        _0x45a8ce.resume();
      }
    }
  }
  function _0x148e02(_0x5984c3, _0x2e85c0) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x36d26e = _0x94b82f.audioInstances[_0x5984c3];
      _0x36d26e.setPitch(_0x2e85c0);
    } catch (_0x320c88) {
      console.error("JS_Sound_SetPitch(channel=" + _0x5984c3 + ", pitch=" + _0x2e85c0 + ") threw an exception: " + _0x320c88);
    }
  }
  function _0x4ed43a(_0x3fffe8, _0x249838, _0x2c5793, _0x1eea37) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    var _0x9ec517 = _0x94b82f.audioInstances[_0x3fffe8];
    _0x9ec517.setPosition(_0x249838, _0x2c5793, _0x1eea37);
  }
  function _0x2d4c9d(_0x418db1, _0x2392e5) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x11a610 = _0x94b82f.audioInstances[_0x418db1];
      _0x11a610.setVolume(_0x2392e5);
    } catch (_0x1d6b85) {
      console.error("JS_Sound_SetVolume(channel=" + _0x418db1 + ", volume=" + _0x2392e5 + ") threw an exception: " + _0x1d6b85);
    }
  }
  function _0x19da8a(_0xbb7a67, _0x2e256c) {
    if (_0x94b82f.audioWebEnabled == 0) {
      return;
    }
    var _0x85dd79 = _0x94b82f.audioInstances[_0xbb7a67];
    _0x85dd79.stop(_0x2e256c);
  }
  function _0x2d1df5(_0x241224, _0x32afe8, _0x4241e8) {
    var _0x57d17f = _0x242db5(_0x241224);
    var _0x425409 = _0x57d17f == "#canvas" ? _0x24391e.canvas : document.querySelector(_0x57d17f);
    var _0x599da4 = 0;
    var _0x43b8be = 0;
    if (_0x425409) {
      var _0x1d9dcb = _0x425409.getBoundingClientRect();
      _0x599da4 = _0x1d9dcb.width;
      _0x43b8be = _0x1d9dcb.height;
    }
    _0xf10a16[_0x32afe8 >> 3] = _0x599da4;
    _0xf10a16[_0x4241e8 >> 3] = _0x43b8be;
  }
  function _0x30cfe7(_0x4091de, _0x3a47e1) {
    if (_0x4091de) {
      _0x291bc6("https://games.1games.io", _0x4091de, _0x3a47e1);
    }
    return _0x72e291("https://games.1games.io");
  }
  function _0x97677(_0x1aafd9, _0x4998d5) {
    var _0x3974bd = _0x24391e.SystemInfo.gpu;
    if (_0x1aafd9) {
      _0x291bc6(_0x3974bd, _0x1aafd9, _0x4998d5);
    }
    return _0x72e291(_0x3974bd);
  }
  function _0x126e2e() {
    return _0x24391e.matchWebGLToCanvasSize || _0x24391e.matchWebGLToCanvasSize === undefined;
  }
  function _0x84f147() {
    return _0x5d32f0.length / 1048576;
  }
  function _0x3ea2ba(_0x56640b, _0x4b1d80) {
    var _0x1b0bc8 = _0x24391e.SystemInfo.os + " " + _0x24391e.SystemInfo.osVersion;
    if (_0x56640b) {
      _0x291bc6(_0x1b0bc8, _0x56640b, _0x4b1d80);
    }
    return _0x72e291(_0x1b0bc8);
  }
  function _0x4d2771() {
    if (_0x24391e.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x24391e.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0xacda2f(_0x407303, _0x512fb5) {
    _0xf10a16[_0x407303 >> 3] = _0x24391e.SystemInfo.width;
    _0xf10a16[_0x512fb5 >> 3] = _0x24391e.SystemInfo.height;
  }
  function _0x1b5044(_0xb8711a, _0x59b439) {
    if (_0xb8711a) {
      _0x291bc6(_0x24391e.streamingAssetsUrl, _0xb8711a, _0x59b439);
    }
    return _0x72e291(_0x24391e.streamingAssetsUrl);
  }
  function _0x4c6429() {
    var _0xba6640 = _0x2eecc9.getExtension("WEBGL_compressed_texture_astc");
    if (_0xba6640 && _0xba6640.getSupportedProfiles) {
      return _0xba6640.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x4cf016() {
    return _0x24391e.SystemInfo.hasCursorLock;
  }
  function _0x51f07d() {
    return _0x24391e.SystemInfo.hasFullscreen;
  }
  function _0x3d2a52() {
    return _0x24391e.SystemInfo.hasWebGL;
  }
  function _0x508e09() {
    return _0x24391e.SystemInfo.mobile;
  }
  function _0x2952fc() {
    return !!_0x24391e.shouldQuit;
  }
  var _0x23e456 = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x2044d4(_0x252f04) {
    var _0x4aa753 = _0x23e456.abortControllers[_0x252f04];
    if (!_0x4aa753 || _0x4aa753.signal.aborted) {
      return;
    }
    _0x4aa753.abort();
  }
  function _0x5e197(_0x4a060d, _0x396ac5) {
    var _0x323636 = _0x242db5(_0x4a060d);
    var _0x21b676 = _0x242db5(_0x396ac5);
    var _0xa1685 = new AbortController();
    var _0xd5913d = {
      url: _0x323636,
      init: {
        method: _0x21b676,
        signal: _0xa1685.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x23e456.abortControllers[_0x23e456.nextRequestId] = _0xa1685;
    _0x23e456.requests[_0x23e456.nextRequestId] = _0xd5913d;
    return _0x23e456.nextRequestId++;
  }
  function _0x3ffe24(_0x2cab3a) {
    var _0x86d3b2 = _0x23e456.responses[_0x2cab3a];
    if (!_0x86d3b2) {
      return "";
    }
    if (_0x86d3b2.headerString) {
      return _0x86d3b2.headerString;
    }
    var _0x49a2d0 = "";
    var _0xda2934 = _0x86d3b2.headers.entries();
    for (var _0x3a7a13 = _0xda2934.next(); !_0x3a7a13.done; _0x3a7a13 = _0xda2934.next()) {
      _0x49a2d0 += _0x3a7a13.value[0] + ": " + _0x3a7a13.value[1] + "\r\n";
    }
    _0x86d3b2.headerString = _0x49a2d0;
    return _0x49a2d0;
  }
  function _0x3961ce(_0x31dd71, _0x13927a, _0x2241f6, _0x3c2d05, _0x2762a7) {
    var _0x3d5678 = _0x23e456.responses[_0x31dd71];
    if (!_0x3d5678) {
      _0x291bc6("", _0x13927a, _0x2241f6);
      _0x291bc6("", _0x3c2d05, _0x2762a7);
      return;
    }
    if (_0x13927a) {
      var _0x1a2b6c = _0x3ffe24(_0x31dd71);
      _0x291bc6(_0x1a2b6c, _0x13927a, _0x2241f6);
    }
    if (_0x3c2d05) {
      _0x291bc6(_0x3d5678.url, _0x3c2d05, _0x2762a7);
    }
  }
  function _0x5941ba(_0x5bbf40, _0x801801) {
    var _0x19e37e = _0x23e456.responses[_0x5bbf40];
    if (!_0x19e37e) {
      _0x51a6ce[_0x801801 >> 2] = 0;
      _0x51a6ce[(_0x801801 >> 2) + 1] = 0;
      return;
    }
    var _0x59abc7 = _0x3ffe24(_0x5bbf40);
    _0x51a6ce[_0x801801 >> 2] = _0x72e291(_0x59abc7);
    _0x51a6ce[(_0x801801 >> 2) + 1] = _0x72e291(_0x19e37e.url);
  }
  function _0xe27e9b(_0x20cfec) {
    if (_0x23e456.timer[_0x20cfec]) {
      clearTimeout(_0x23e456.timer[_0x20cfec]);
    }
    delete _0x23e456.requests[_0x20cfec];
    delete _0x23e456.responses[_0x20cfec];
    delete _0x23e456.abortControllers[_0x20cfec];
    delete _0x23e456.timer[_0x20cfec];
  }
  function _0x4b7117(_0x3ffe61, _0x565658, _0x52c21c, _0x95e51, _0x34b9ea, _0x28c72b) {
    var _0x5e452c = _0x23e456.requests[_0x3ffe61];
    var _0x2b36a6 = _0x23e456.abortControllers[_0x3ffe61];
    function _0x42b591(_0x5bad15) {
      if (!_0x5e452c.tempBuffer) {
        const _0x55e4dd = Math.max(_0x5bad15, 1024);
        _0x5e452c.tempBuffer = _0x25ed17(_0x55e4dd);
        _0x5e452c.tempBufferSize = _0x55e4dd;
      }
      if (_0x5e452c.tempBufferSize < _0x5bad15) {
        _0xc27a35(_0x5e452c.tempBuffer);
        _0x5e452c.tempBuffer = _0x25ed17(_0x5bad15);
        _0x5e452c.tempBufferSize = _0x5bad15;
      }
      return _0x5e452c.tempBuffer;
    }
    function _0x1c5d24() {
      if (_0x23e456.timer[_0x3ffe61]) {
        clearTimeout(_0x23e456.timer[_0x3ffe61]);
        delete _0x23e456.timer[_0x3ffe61];
      }
    }
    function _0x2d5bed(_0x10d7ea, _0x31eb76) {
      _0x1c5d24();
      if (!_0x34b9ea) {
        return;
      }
      var _0x4ef5dd = 0;
      if (_0x5e452c.init.enableStreamingDownload) {
        _0x19c2cf("viiiiii", _0x34b9ea, [_0x95e51, _0x10d7ea.status, 0, _0x31eb76.length, 0, _0x4ef5dd]);
      } else if (_0x31eb76.length != 0) {
        var _0x291c39 = _0x25ed17(_0x31eb76.length);
        _0x5d32f0.set(_0x31eb76, _0x291c39);
        _0x19c2cf("viiiiii", _0x34b9ea, [_0x95e51, _0x10d7ea.status, _0x291c39, _0x31eb76.length, 0, _0x4ef5dd]);
      } else {
        _0x19c2cf("viiiiii", _0x34b9ea, [_0x95e51, _0x10d7ea.status, 0, 0, 0, _0x4ef5dd]);
      }
      if (_0x5e452c.tempBuffer) {
        _0xc27a35(_0x5e452c.tempBuffer);
      }
    }
    function _0x17293c(_0x294513, _0x31d4fe) {
      _0x1c5d24();
      if (!_0x34b9ea) {
        return;
      }
      var _0x21a678 = _0x72e291(_0x294513) + 1;
      var _0x1f5156 = _0x25ed17(_0x21a678);
      _0x291bc6(_0x294513, _0x1f5156, _0x21a678);
      _0x19c2cf("viiiiii", _0x34b9ea, [_0x95e51, 500, 0, 0, _0x1f5156, _0x31d4fe]);
      _0xc27a35(_0x1f5156);
      if (_0x5e452c.tempBuffer) {
        _0xc27a35(_0x5e452c.tempBuffer);
      }
    }
    function _0x3b4a08(_0x2bf126) {
      if (!_0x28c72b || !_0x2bf126.lengthComputable) {
        return;
      }
      var _0x56f9de = _0x2bf126.response;
      _0x23e456.responses[_0x3ffe61] = _0x56f9de;
      if (_0x2bf126.chunk) {
        var _0x11a393 = _0x42b591(_0x2bf126.chunk.length);
        _0x5d32f0.set(_0x2bf126.chunk, _0x11a393);
        _0x19c2cf("viiiiii", _0x28c72b, [_0x95e51, _0x56f9de.status, _0x2bf126.loaded, _0x2bf126.total, _0x11a393, _0x2bf126.chunk.length]);
      } else {
        _0x19c2cf("viiiiii", _0x28c72b, [_0x95e51, _0x56f9de.status, _0x2bf126.loaded, _0x2bf126.total, 0, 0]);
      }
    }
    try {
      if (_0x52c21c > 0) {
        var _0x2f41cc = _0x5d32f0.subarray(_0x565658, _0x565658 + _0x52c21c);
        _0x5e452c.init.body = new Blob([_0x2f41cc]);
      }
      if (_0x5e452c.timeout) {
        _0x23e456.timer[_0x3ffe61] = setTimeout(function () {
          _0x5e452c.isTimedOut = true;
          _0x2b36a6.abort();
        }, _0x5e452c.timeout);
      }
      var _0x3293ac = _0x24391e.fetchWithProgress;
      _0x5e452c.init.onProgress = _0x3b4a08;
      if (_0x24391e.companyName && _0x24391e.productName && _0x24391e.cachedFetch) {
        _0x3293ac = _0x24391e.cachedFetch;
        _0x5e452c.init.companyName = _0x24391e.companyName;
        _0x5e452c.init.productName = _0x24391e.productName;
        _0x5e452c.control = _0x24391e.cacheControl(_0x5e452c.url);
      }
      _0x3293ac(_0x5e452c.url, _0x5e452c.init).then(function (_0x5eab73) {
        _0x23e456.responses[_0x3ffe61] = _0x5eab73;
        _0x2d5bed(_0x5eab73, _0x5eab73.parsedBody);
      }).catch(function (_0x50e4e7) {
        var _0x43358f = 2;
        var _0x1d6dc7 = 17;
        var _0x2d52bb = 14;
        if (_0x5e452c.isTimedOut) {
          _0x17293c("Connection timed out.", _0x2d52bb);
        } else if (_0x2b36a6.signal.aborted) {
          _0x17293c("Aborted.", _0x1d6dc7);
        } else {
          _0x17293c(_0x50e4e7.message, _0x43358f);
        }
      });
    } catch (_0x3065a3) {
      var _0x1f7e8d = 2;
      _0x17293c(_0x3065a3.message, _0x1f7e8d);
    }
  }
  function _0x4c96d5(_0x57df02, _0x365d67) {
    var _0x474c68 = _0x23e456.requests[_0x57df02];
    if (!_0x474c68) {
      return;
    }
    _0x474c68.init.redirect = _0x365d67 === 0 ? "error" : "follow";
  }
  function _0x31828e(_0x79161a, _0x588f4d, _0x120359) {
    var _0x2b5890 = _0x23e456.requests[_0x79161a];
    if (!_0x2b5890) {
      return;
    }
    var _0x119ff5 = _0x242db5(_0x588f4d);
    var _0x553d8b = _0x242db5(_0x120359);
    _0x2b5890.init.headers[_0x119ff5] = _0x553d8b;
  }
  function _0x310972(_0x47b885, _0x59c00f) {
    var _0x5e4c6d = _0x23e456.requests[_0x47b885];
    if (!_0x5e4c6d) {
      return;
    }
    _0x5e4c6d.timeout = _0x59c00f;
  }
  function _0x5651e8(_0x3a988e, _0x1e037a, _0x541b9f) {
    const _0x3c56d1 = _0x242db5(_0x3a988e);
    let _0xe31569 = _0x242db5(_0x1e037a);
    _0xe31569 = _0x1e037a || 300000;
    let _0x581002 = _0x242db5(_0x541b9f);
    if (window._keepAliveInterval) {
      clearInterval(window._keepAliveInterval);
    }
    window._keepAliveInterval = setInterval(() => {
      let _0x2c3e53 = new Date().toISOString();
      fetch(_0x3c56d1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
          session_id: _0x581002
        })
      }).then(_0x2aedb5 => {
        if (!_0x2aedb5.ok) {
          console.warn("Keep-alive failed:" + _0x2aedb5.status);
        } else {
          console.log("Keep-alive successful");
        }
      }).catch(_0x2080e1 => {
        console.error("Keep-alive error:", _0x2080e1);
      });
    }, _0xe31569);
  }
  function _0x444d94(_0x451ad5, _0x471da9, _0x4e634a, _0x54d18b) {
    var _0x2d8443 = _0x242db5(_0x451ad5);
    var _0x5922d3 = _0x242db5(_0x471da9);
    var _0x400e1f = _0x242db5(_0x4e634a);
    var _0xc97750 = _0x242db5(_0x54d18b);
    try {
      firebase.database().ref(_0x2d8443).on("child_added", function (_0xd862e) {
        window.unityInstance.SendMessage(_0x5922d3, _0x400e1f, JSON.stringify(_0xd862e.val()));
      });
    } catch (_0x414390) {
      window.unityInstance.SendMessage(_0x5922d3, _0xc97750, JSON.stringify(_0x414390, Object.getOwnPropertyNames(_0x414390)));
    }
  }
  function _0x2696e8(_0x3464c6, _0xdef8b8, _0x4b58a9, _0x47e63f) {
    var _0xc92902 = _0x242db5(_0x3464c6);
    var _0x224ca7 = _0x242db5(_0xdef8b8);
    var _0x37baa8 = _0x242db5(_0x4b58a9);
    var _0x44f5a2 = _0x242db5(_0x47e63f);
    try {
      firebase.database().ref(_0xc92902).on("child_changed", function (_0x435af4) {
        window.unityInstance.SendMessage(_0x224ca7, _0x37baa8, JSON.stringify(_0x435af4.val()));
      });
    } catch (_0x398693) {
      window.unityInstance.SendMessage(_0x224ca7, _0x44f5a2, JSON.stringify(_0x398693, Object.getOwnPropertyNames(_0x398693)));
    }
  }
  function _0x4818b1(_0x469b3b, _0x80a9b8, _0x469467, _0x6314c0) {
    var _0x43ad99 = _0x242db5(_0x469b3b);
    var _0x1fd366 = _0x242db5(_0x80a9b8);
    var _0x584887 = _0x242db5(_0x469467);
    var _0x3aa226 = _0x242db5(_0x6314c0);
    try {
      firebase.database().ref(_0x43ad99).on("child_removed", function (_0x5d68d1) {
        window.unityInstance.SendMessage(_0x1fd366, _0x584887, JSON.stringify(_0x5d68d1.val()));
      });
    } catch (_0x31421c) {
      window.unityInstance.SendMessage(_0x1fd366, _0x3aa226, JSON.stringify(_0x31421c, Object.getOwnPropertyNames(_0x31421c)));
    }
  }
  function _0x42ffcc(_0x38cb81, _0x35d939, _0x4f3e0c, _0xefc0f0, _0x231dd6) {
    var _0x5b0021 = _0x242db5(_0x38cb81);
    var _0x25f88e = _0x242db5(_0x4f3e0c);
    var _0x135850 = _0x242db5(_0xefc0f0);
    var _0x490357 = _0x242db5(_0x231dd6);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x5b0021 + "/collection/"] = firebase.firestore().collection(_0x5b0021).onSnapshot({
        includeMetadataChanges: _0x35d939 == 1
      }, function (_0x17bbca) {
        var _0x1d278d = {};
        _0x17bbca.forEach(function (_0x432010) {
          _0x1d278d[_0x432010.id] = _0x432010.data();
        });
        window.unityInstance.SendMessage(_0x25f88e, _0x135850, JSON.stringify(_0x1d278d));
      }, function (_0x4c5e0d) {
        window.unityInstance.SendMessage(_0x25f88e, _0x490357, JSON.stringify(_0x4c5e0d, Object.getOwnPropertyNames(_0x4c5e0d)));
      });
    } catch (_0x3b0890) {
      window.unityInstance.SendMessage(_0x25f88e, _0x490357, JSON.stringify(_0x3b0890, Object.getOwnPropertyNames(_0x3b0890)));
    }
  }
  function _0x2953fc(_0x47b864, _0x37c71e, _0x503750, _0x1fbcf8, _0x47a6f4, _0x1b8b4e) {
    var _0x47b27e = _0x242db5(_0x47b864);
    var _0x46c403 = _0x242db5(_0x37c71e);
    var _0x166a8f = _0x242db5(_0x1fbcf8);
    var _0x45e3fc = _0x242db5(_0x47a6f4);
    var _0xf5c4cd = _0x242db5(_0x1b8b4e);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x47b27e + "/" + _0x46c403] = firebase.firestore().collection(_0x47b27e).doc(_0x46c403).onSnapshot({
        includeMetadataChanges: _0x503750 == 1
      }, function (_0x3cd82f) {
        window.unityInstance.SendMessage(_0x166a8f, _0x45e3fc, JSON.stringify(_0x3cd82f.data()));
      }, function (_0x1599c8) {
        window.unityInstance.SendMessage(_0x166a8f, _0xf5c4cd, JSON.stringify(_0x1599c8, Object.getOwnPropertyNames(_0x1599c8)));
      });
    } catch (_0x6f79d4) {
      window.unityInstance.SendMessage(_0x166a8f, _0xf5c4cd, JSON.stringify(_0x6f79d4, Object.getOwnPropertyNames(_0x6f79d4)));
    }
  }
  function _0xfbfce2(_0x18b8de, _0xdea393, _0x18d758, _0x31833b) {
    var _0xf64ac6 = _0x242db5(_0x18b8de);
    var _0x403977 = _0x242db5(_0xdea393);
    var _0x478c5d = _0x242db5(_0x18d758);
    var _0x341f97 = _0x242db5(_0x31833b);
    try {
      firebase.database().ref(_0xf64ac6).on("value", function (_0xd4ea40) {
        window.unityInstance.SendMessage(_0x403977, _0x478c5d, JSON.stringify(_0xd4ea40.val()));
      });
    } catch (_0x165ddc) {
      window.unityInstance.SendMessage(_0x403977, _0x341f97, JSON.stringify(_0x165ddc, Object.getOwnPropertyNames(_0x165ddc)));
    }
  }
  function _0x9b5a0f(_0x17857b) {
    var _0x4933de = _0x242db5(_0x17857b);
    firebaseLogEvent(_0x4933de);
  }
  function _0x505442(_0xdec366, _0x179587) {
    var _0x39c867 = _0x242db5(_0xdec366);
    var _0x5a78e2 = JSON.parse(_0x242db5(_0x179587));
    firebaseLogEventParameter(_0x39c867, _0x5a78e2);
  }
  function _0x4b1d50(_0x553f17) {
    document.makeFullscreen(_0x242db5(_0x553f17));
  }
  function _0x46831b(_0x5aad0a, _0x3e36f7, _0x423cc7, _0x4ee975, _0x2385d8) {
    var _0x210c38 = _0x242db5(_0x5aad0a);
    var _0x3e9c5a = _0x242db5(_0x423cc7);
    var _0x5320e1 = _0x242db5(_0x4ee975);
    var _0x5eca6d = _0x242db5(_0x2385d8);
    try {
      firebase.database().ref(_0x210c38).transaction(function (_0x331a83) {
        if (!isNaN(_0x331a83)) {
          return _0x331a83 + _0x3e36f7;
        } else {
          return _0x3e36f7;
        }
      }).then(function (_0x337e61) {
        window.unityInstance.SendMessage(_0x3e9c5a, _0x5320e1, "Success: transaction run in " + _0x210c38);
      });
    } catch (_0x51a6fa) {
      window.unityInstance.SendMessage(_0x3e9c5a, _0x5eca6d, JSON.stringify(_0x51a6fa, Object.getOwnPropertyNames(_0x51a6fa)));
    }
  }
  function _0xf90643(_0x31e57b, _0x5646a6, _0x235942) {
    var _0x23d856 = _0x242db5(_0x31e57b);
    var _0x525ed7 = _0x242db5(_0x5646a6);
    var _0x2372b7 = _0x242db5(_0x235942);
    firebase.auth().onAuthStateChanged(function (_0x173289) {
      if (_0x173289) {
        window.unityInstance.SendMessage(_0x23d856, _0x525ed7, JSON.stringify(_0x173289));
      } else {
        window.unityInstance.SendMessage(_0x23d856, _0x2372b7, "User signed out");
      }
    });
  }
  function _0x1df865(_0x3515dd) {
    window.wgUnityInstance = _0x24391e;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x3515dd);
    } catch (_0x5ca454) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x19f95b = document.createElement("script");
      _0x19f95b.addEventListener("load", function (_0x1ee990) {
        var _0x257d4e = document.createElement("script");
        _0x257d4e.addEventListener("load", function (_0x53dc01) {
          console.log("WGSDK: Development resources loaded.");
          _0x58cfaf(_0x3515dd, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x257d4e);
        _0x257d4e.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x19f95b);
      _0x19f95b.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x58cfaf(_0x35c0e1, _0x374c81) {
    var _0x37aa68;
    if (_0x374c81 === true) {
      _0x37aa68 = _0x35c0e1;
    } else {
      _0x37aa68 = _0x242db5(_0x35c0e1);
    }
    setTimeout(function () {
      _0x1df865(_0x37aa68);
    }, 250);
  }
  function _0x39e12(_0x83976c, _0x17ec74, _0x266da5, _0x126810, _0x409c55) {
    var _0x425406 = _0x242db5(_0x83976c);
    var _0xd85d73 = _0x242db5(_0x17ec74);
    var _0x422ea6 = _0x242db5(_0x266da5);
    var _0x254628 = _0x242db5(_0x126810);
    var _0x268e75 = _0x242db5(_0x409c55);
    try {
      firebase.database().ref(_0x425406).set(JSON.parse(_0xd85d73)).then(function (_0x5e568a) {
        window.unityInstance.SendMessage(_0x422ea6, _0x254628, "Success: " + _0xd85d73 + " was posted to " + _0x425406);
      });
    } catch (_0x34762f) {
      window.unityInstance.SendMessage(_0x422ea6, _0x268e75, JSON.stringify(_0x34762f, Object.getOwnPropertyNames(_0x34762f)));
    }
  }
  function _0xdbb827(_0x59df97, _0x46a0c3, _0x3c6726, _0x5e9202, _0x2d7d4d) {
    var _0x169dc4 = _0x242db5(_0x59df97);
    var _0x15f87e = _0x242db5(_0x46a0c3);
    var _0x5c57dd = _0x242db5(_0x3c6726);
    var _0x232277 = _0x242db5(_0x5e9202);
    var _0x2bfffe = _0x242db5(_0x2d7d4d);
    try {
      firebase.database().ref(_0x169dc4).push().set(JSON.parse(_0x15f87e)).then(function (_0x1db733) {
        window.unityInstance.SendMessage(_0x5c57dd, _0x232277, "Success: " + _0x15f87e + " was pushed to " + _0x169dc4);
      });
    } catch (_0x3b099a) {
      window.unityInstance.SendMessage(_0x5c57dd, _0x2bfffe, JSON.stringify(_0x3b099a, Object.getOwnPropertyNames(_0x3b099a)));
    }
  }
  function _0x352501(_0x35da0f) {
    _0x35da0f = _0x4f9071(_0x35da0f);
    window.open(_0x35da0f);
  }
  function _0xfc7c4e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x413e54) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x24a5b3() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x24391e);
    } catch (_0x366df3) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x24a5b3();
      }, 250);
    }
  }
  function _0x49ee35() {
    window.onbeforeunload = function (_0x41e833) {
      if (typeof _0x41590d === "function") {
        _0x41590d("CanvasLoading", "OnTabCloseDetected");
      }
    };
  }
  function _0x567210() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0xe421e2) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x4b3713();
    }
  }
  function _0x4b3713() {
    setTimeout(function () {
      _0x567210();
    }, 250);
  }
  function _0x4f3312(_0x9eee81, _0x436ff0, _0x421970, _0x37dfca, _0x361f72, _0x945714, _0x117e35) {
    var _0x1cfa98 = _0x242db5(_0x9eee81);
    var _0xcfca59 = _0x242db5(_0x436ff0);
    var _0x357f31 = _0x242db5(_0x421970);
    var _0x5988df = _0x242db5(_0x37dfca);
    var _0xa8fac1 = _0x242db5(_0x361f72);
    var _0x35019c = _0x242db5(_0x945714);
    var _0x190b3b = _0x242db5(_0x117e35);
    try {
      var _0x37dfca = {};
      _0x37dfca[_0x357f31] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x5988df));
      firebase.firestore().collection(_0x1cfa98).doc(_0xcfca59).update(_0x37dfca).then(function () {
        window.unityInstance.SendMessage(_0xa8fac1, _0x35019c, "Success: element " + _0x5988df + " was removed in " + _0x357f31);
      }).catch(function (_0x4757ac) {
        window.unityInstance.SendMessage(_0xa8fac1, _0x190b3b, JSON.stringify(_0x4757ac, Object.getOwnPropertyNames(_0x4757ac)));
      });
    } catch (_0x5b04d0) {
      window.unityInstance.SendMessage(_0xa8fac1, _0x190b3b, JSON.stringify(_0x5b04d0, Object.getOwnPropertyNames(_0x5b04d0)));
    }
  }
  function _0x40dfe0(_0x2c9050) {
    var _0x81ad25 = window.unityStringify(_0x2c9050);
    var _0x3e605b = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x41590d("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x41590d("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x371228) {
        _0x41590d("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x371228));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x81ad25, _0x3e605b).catch(function (_0x3e19fc) {
      window.UnitySDK.logError("Error while requesting ad:", _0x3e19fc);
      _0x41590d("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x3e19fc.message || "Unknown error"
      }));
    });
  }
  function _0x28ed3f(_0x3fb782) {
    var _0x4d782e = JSON.parse(window.unityStringify(_0x3fb782));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x4d782e, function (_0x345457, _0x26c712, _0x491cde) {});
    } catch (_0x359499) {
      window.UnitySDK.logError("Error while requesting banners:", _0x359499);
    }
  }
  function _0x200ca7(_0x3f9cd3) {
    var _0x4a22d8 = JSON.parse(window.unityStringify(_0x3f9cd3));
    var _0x275626 = "";
    try {
      _0x275626 = window.CrazyGames.SDK.game.inviteLink(_0x4a22d8);
    } catch (_0xc82040) {
      window.UnitySDK.logError("Error while requesting invite url:", _0xc82040);
    }
    var _0x52c37b = _0x72e291(_0x275626) + 1;
    var _0x2c7e09 = _0x25ed17(_0x52c37b);
    _0x291bc6(_0x275626, _0x2c7e09, _0x52c37b);
    return _0x2c7e09;
  }
  function _0x536e10(_0x1c1fb9) {
    _0x1c1fb9 = _0x242db5(_0x1c1fb9);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x1c1fb9,
      onEvent: function (_0x1ced58) {
        switch (_0x1ced58.name) {
          case "SDK_GAME_START":
            _0x41590d("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x41590d("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x41590d("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x41590d("GameDistribution", "EventCallback", _0x1ced58.name);
        }
      }
    };
    (function (_0x336d67, _0x2e5040, _0x2d517a) {
      var _0x1a96ff;
      var _0xfae368 = _0x336d67.getElementsByTagName(_0x2e5040)[0];
      if (_0x336d67.getElementById(_0x2d517a)) {
        return;
      }
      _0x1a96ff = _0x336d67.createElement(_0x2e5040);
      _0x1a96ff.id = _0x2d517a;
      _0x1a96ff.src = "//html5.api.gamedistribution.com/main.min.js";
      _0xfae368.parentNode.insertBefore(_0x1a96ff, _0xfae368);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x2e4744() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x52c455) {
        _0x41590d("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x27c1b1) {
        _0x41590d("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x249424(_0x52586e) {
    _0x52586e = _0x242db5(_0x52586e);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x52586e !== "undefined") {
      gdsdk.sendEvent(_0x52586e).then(function (_0x568e41) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x97f962) {
        console.log(_0x97f962.message);
      });
    }
  }
  function _0x145730(_0x3075b9) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x3075b9 = _0x242db5(_0x3075b9) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x3075b9).then(function (_0x113a82) {
        if (_0x3075b9 === gdsdk.AdType.Rewarded) {
          _0x41590d("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x107019) {
        if (_0x3075b9 === gdsdk.AdType.Rewarded) {
          _0x41590d("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x5c7ba6(_0x220988, _0x5edc5c, _0x3e5d97, _0x118c3e, _0x500cc1, _0x48ce59) {
    var _0xf03eaa = _0x242db5(_0x220988);
    var _0x4b18c0 = _0x242db5(_0x5edc5c);
    var _0x54734a = _0x242db5(_0x3e5d97);
    var _0x45438d = _0x242db5(_0x118c3e);
    var _0x33ef3e = _0x242db5(_0x500cc1);
    var _0x75f129 = _0x242db5(_0x48ce59);
    try {
      firebase.firestore().collection(_0xf03eaa).doc(_0x4b18c0).set(JSON.parse(_0x54734a)).then(function () {
        window.unityInstance.SendMessage(_0x45438d, _0x33ef3e, "Success: document " + _0x4b18c0 + " was set");
      }).catch(function (_0x521796) {
        window.unityInstance.SendMessage(_0x45438d, _0x75f129, JSON.stringify(_0x521796, Object.getOwnPropertyNames(_0x521796)));
      });
    } catch (_0x28a0ed) {
      window.unityInstance.SendMessage(_0x45438d, _0x75f129, JSON.stringify(_0x28a0ed, Object.getOwnPropertyNames(_0x28a0ed)));
    }
  }
  function _0xdb79b1(_0x548c35) {
    var _0x3a98c3 = JSON.parse(_0x242db5(_0x548c35));
    firebaseSetUserProperties(_0x3a98c3);
  }
  function _0x21e686() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x4b63a5) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x4b63a5)
      }));
    }).catch(function (_0x1dc815) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x1dc815)
      }));
    });
  }
  function _0x42e373() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x5c2fd9) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x5c2fd9)
      }));
    }).catch(function (_0x21572a) {
      _0x41590d("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x21572a)
      }));
    });
  }
  function _0x2c1c02(_0x57b9d9) {
    var _0x5ac74c = JSON.parse(window.unityStringify(_0x57b9d9));
    var _0x204fef = "";
    try {
      _0x204fef = window.CrazyGames.SDK.game.showInviteButton(_0x5ac74c);
    } catch (_0x1811b0) {
      window.UnitySDK.logError("Error while showing invite button:", _0x1811b0);
    }
    var _0x1b5326 = _0x72e291(_0x204fef) + 1;
    var _0x429a6b = _0x25ed17(_0x1b5326);
    _0x291bc6(_0x204fef, _0x429a6b, _0x1b5326);
    return _0x429a6b;
  }
  function _0x39fb9e() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x365ddf(_0x5bb460, _0x4b74b1, _0xac42cb) {
    var _0x25111a = _0x242db5(_0x5bb460);
    var _0x38150d = _0x242db5(_0x4b74b1);
    var _0xbd2289 = _0x242db5(_0xac42cb);
    try {
      firebase.auth().signInAnonymously().then(function (_0x3a9015) {
        window.unityInstance.SendMessage(_0x25111a, _0x38150d, "Success: signed up for " + _0x3a9015);
      }).catch(function (_0x33b00d) {
        window.unityInstance.SendMessage(_0x25111a, _0xbd2289, JSON.stringify(_0x33b00d, Object.getOwnPropertyNames(_0x33b00d)));
      });
    } catch (_0x12ee54) {
      window.unityInstance.SendMessage(_0x25111a, _0xbd2289, JSON.stringify(_0x12ee54, Object.getOwnPropertyNames(_0x12ee54)));
    }
  }
  function _0x4b947d(_0x62f088, _0x48748a, _0x45e4ad, _0x3c9923, _0x2c5763) {
    var _0x57a16e = _0x242db5(_0x62f088);
    var _0x2898cb = _0x242db5(_0x48748a);
    var _0x5e5cee = _0x242db5(_0x45e4ad);
    var _0x409495 = _0x242db5(_0x3c9923);
    var _0x35c576 = _0x242db5(_0x2c5763);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x57a16e, _0x2898cb).then(function (_0x5e942a) {
        window.unityInstance.SendMessage(_0x5e5cee, _0x409495, "Success: signed in for " + _0x57a16e);
      }).catch(function (_0x42e1e6) {
        window.unityInstance.SendMessage(_0x5e5cee, _0x35c576, JSON.stringify(_0x42e1e6, Object.getOwnPropertyNames(_0x42e1e6)));
      });
    } catch (_0x329afe) {
      window.unityInstance.SendMessage(_0x5e5cee, _0x35c576, JSON.stringify(_0x329afe, Object.getOwnPropertyNames(_0x329afe)));
    }
  }
  function _0x2cc4fe(_0x530a26, _0xe568b6, _0xbe418) {
    var _0xf77a12 = _0x242db5(_0x530a26);
    var _0x3b6dbb = _0x242db5(_0xe568b6);
    var _0x296320 = _0x242db5(_0xbe418);
    try {
      var _0x1275ed = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x1275ed).then(function (_0x4ef70e) {
        window.unityInstance.SendMessage(_0xf77a12, _0x3b6dbb, "Success: signed in with Facebook!");
      }).catch(function (_0xa5d736) {
        window.unityInstance.SendMessage(_0xf77a12, _0x296320, JSON.stringify(_0xa5d736, Object.getOwnPropertyNames(_0xa5d736)));
      });
    } catch (_0x2e1831) {
      window.unityInstance.SendMessage(_0xf77a12, _0x296320, JSON.stringify(_0x2e1831, Object.getOwnPropertyNames(_0x2e1831)));
    }
  }
  function _0x3188aa(_0x474955, _0x212ddd, _0x4eb42f) {
    var _0x2e1226 = _0x242db5(_0x474955);
    var _0x760698 = _0x242db5(_0x212ddd);
    var _0x3a56ba = _0x242db5(_0x4eb42f);
    try {
      var _0x57ff39 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x57ff39).then(function (_0x2a5d2c) {
        window.unityInstance.SendMessage(_0x2e1226, _0x760698, "Success: signed in with Google!");
      }).catch(function (_0x6d6800) {
        window.unityInstance.SendMessage(_0x2e1226, _0x3a56ba, JSON.stringify(_0x6d6800, Object.getOwnPropertyNames(_0x6d6800)));
      });
    } catch (_0x50ea13) {
      window.unityInstance.SendMessage(_0x2e1226, _0x3a56ba, JSON.stringify(_0x50ea13, Object.getOwnPropertyNames(_0x50ea13)));
    }
  }
  function _0x40b66a(_0x41fe46, _0x4a12ad, _0x5c6e4d, _0x529948) {
    var _0x1ddbc2 = _0x242db5(_0x41fe46);
    var _0x251d2c = _0x242db5(_0x4a12ad);
    var _0x475ea8 = _0x242db5(_0x5c6e4d);
    var _0x5ad549 = _0x242db5(_0x529948);
    try {
      firebase.database().ref(_0x1ddbc2).off("child_added");
      window.unityInstance.SendMessage(_0x251d2c, _0x475ea8, "Success: listener removed");
    } catch (_0x5ba840) {
      window.unityInstance.SendMessage(_0x251d2c, _0x5ad549, JSON.stringify(_0x5ba840, Object.getOwnPropertyNames(_0x5ba840)));
    }
  }
  function _0x20a684(_0x535037, _0x20be80, _0x241286, _0x1204ba) {
    var _0x141f80 = _0x242db5(_0x535037);
    var _0xe77d2 = _0x242db5(_0x20be80);
    var _0x109d1f = _0x242db5(_0x241286);
    var _0x469973 = _0x242db5(_0x1204ba);
    try {
      firebase.database().ref(_0x141f80).off("child_changed");
      window.unityInstance.SendMessage(_0xe77d2, _0x109d1f, "Success: listener removed");
    } catch (_0x142893) {
      window.unityInstance.SendMessage(_0xe77d2, _0x469973, JSON.stringify(_0x142893, Object.getOwnPropertyNames(_0x142893)));
    }
  }
  function _0x1ff015(_0x53c62c, _0x33a833, _0x433945, _0x265052) {
    var _0x38020f = _0x242db5(_0x53c62c);
    var _0xb8f28 = _0x242db5(_0x33a833);
    var _0x147392 = _0x242db5(_0x433945);
    var _0x2d9c41 = _0x242db5(_0x265052);
    try {
      firebase.database().ref(_0x38020f).off("child_removed");
      window.unityInstance.SendMessage(_0xb8f28, _0x147392, "Success: listener removed");
    } catch (_0x58c750) {
      window.unityInstance.SendMessage(_0xb8f28, _0x2d9c41, JSON.stringify(_0x58c750, Object.getOwnPropertyNames(_0x58c750)));
    }
  }
  function _0x47dfbc(_0x18e3b9, _0xec1afc, _0xc9623e, _0x44dddd) {
    var _0x51fd93 = _0x242db5(_0x18e3b9);
    var _0x3f36e4 = _0x242db5(_0xec1afc);
    var _0x482f14 = _0x242db5(_0xc9623e);
    var _0x5d09e3 = _0x242db5(_0x44dddd);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x51fd93 + "/collection/"]();
      window.unityInstance.SendMessage(_0x3f36e4, _0x482f14, "Success: listener was removed");
    } catch (_0x3b5ddc) {
      window.unityInstance.SendMessage(_0x3f36e4, _0x5d09e3, JSON.stringify(_0x3b5ddc, Object.getOwnPropertyNames(_0x3b5ddc)));
    }
  }
  function _0x3cb2ee(_0x11c6b0, _0x5ddd01, _0x1937d9, _0x11ff2d, _0x4c2d4b) {
    var _0x5ed5d9 = _0x242db5(_0x11c6b0);
    var _0x105335 = _0x242db5(_0x5ddd01);
    var _0x5cd13e = _0x242db5(_0x1937d9);
    var _0xdbbf84 = _0x242db5(_0x11ff2d);
    var _0xcd3049 = _0x242db5(_0x4c2d4b);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x5ed5d9 + "/" + _0x105335]();
      window.unityInstance.SendMessage(_0x5cd13e, _0xdbbf84, "Success: listener was removed");
    } catch (_0x14e3ea) {
      window.unityInstance.SendMessage(_0x5cd13e, _0xcd3049, JSON.stringify(_0x14e3ea, Object.getOwnPropertyNames(_0x14e3ea)));
    }
  }
  function _0x3451c7(_0x1046d6, _0x4eb4b5, _0x919f40, _0xc20a15) {
    var _0x1bee51 = _0x242db5(_0x1046d6);
    var _0x4fd23c = _0x242db5(_0x4eb4b5);
    var _0xe91add = _0x242db5(_0x919f40);
    var _0x3cd03f = _0x242db5(_0xc20a15);
    try {
      firebase.database().ref(_0x1bee51).off("value");
      window.unityInstance.SendMessage(_0x4fd23c, _0xe91add, "Success: listener removed");
    } catch (_0x46a4b3) {
      window.unityInstance.SendMessage(_0x4fd23c, _0x3cd03f, JSON.stringify(_0x46a4b3, Object.getOwnPropertyNames(_0x46a4b3)));
    }
  }
  function _0x5d0f7f() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x1d35b2) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x1d35b2);
    }
  }
  function _0x39453b(_0x1691a5, _0x5d937c, _0x44f152, _0x1ea57a) {
    var _0x495b00 = _0x242db5(_0x1691a5);
    var _0x45d06c = _0x242db5(_0x5d937c);
    var _0x252428 = _0x242db5(_0x44f152);
    var _0x46d592 = _0x242db5(_0x1ea57a);
    try {
      firebase.database().ref(_0x495b00).transaction(function (_0x55d58d) {
        if (typeof _0x55d58d === "boolean") {
          return !_0x55d58d;
        } else {
          return true;
        }
      }).then(function (_0x18f30d) {
        window.unityInstance.SendMessage(_0x45d06c, _0x252428, "Success: transaction run in " + _0x495b00);
      });
    } catch (_0x5943b0) {
      window.unityInstance.SendMessage(_0x45d06c, _0x46d592, JSON.stringify(_0x5943b0, Object.getOwnPropertyNames(_0x5943b0)));
    }
  }
  function _0x200022(_0x14b553, _0x139334, _0x352c52, _0x178e31, _0x48b092, _0x390d36) {
    var _0x5703f2 = _0x242db5(_0x14b553);
    var _0x1fc25f = _0x242db5(_0x139334);
    var _0x68d98a = _0x242db5(_0x352c52);
    var _0x4cf831 = _0x242db5(_0x178e31);
    var _0x32df8c = _0x242db5(_0x48b092);
    var _0x223eb3 = _0x242db5(_0x390d36);
    try {
      firebase.firestore().collection(_0x5703f2).doc(_0x1fc25f).update(JSON.parse(_0x68d98a)).then(function () {
        window.unityInstance.SendMessage(_0x4cf831, _0x32df8c, "Success: document " + _0x1fc25f + " was updated");
      }).catch(function (_0x191af2) {
        window.unityInstance.SendMessage(_0x4cf831, _0x223eb3, JSON.stringify(_0x191af2, Object.getOwnPropertyNames(_0x191af2)));
      });
    } catch (_0x15a658) {
      window.unityInstance.SendMessage(_0x4cf831, _0x223eb3, JSON.stringify(_0x15a658, Object.getOwnPropertyNames(_0x15a658)));
    }
  }
  function _0x28eb49(_0x543e10, _0x7107b2, _0x5be2cf, _0x5982ad, _0x1d3db0) {
    var _0x40b0f6 = _0x242db5(_0x543e10);
    var _0x11a30b = _0x242db5(_0x7107b2);
    var _0x329416 = _0x242db5(_0x5be2cf);
    var _0x367616 = _0x242db5(_0x5982ad);
    var _0x517ea0 = _0x242db5(_0x1d3db0);
    try {
      firebase.database().ref(_0x40b0f6).update(JSON.parse(_0x11a30b)).then(function (_0x1eb91a) {
        window.unityInstance.SendMessage(_0x329416, _0x367616, "Success: " + _0x11a30b + " was updated in " + _0x40b0f6);
      });
    } catch (_0x22595a) {
      window.unityInstance.SendMessage(_0x329416, _0x517ea0, JSON.stringify(_0x22595a, Object.getOwnPropertyNames(_0x22595a)));
    }
  }
  function _0x5cbcc0(_0x3c56ac, _0x4c3867, _0x1c6f77, _0x5bf939, _0x276efc) {
    var _0x46e567 = _0x242db5(_0x3c56ac);
    var _0x567a97 = _0x242db5(_0x4c3867);
    var _0x23906e = _0x242db5(_0x1c6f77);
    var _0x452dee = _0x242db5(_0x5bf939);
    var _0x3e9550 = _0x242db5(_0x276efc);
    try {
      firebase.storage().ref(_0x46e567).put(_0xceab0b(_0x567a97)).then(function (_0x24efe0) {
        window.unityInstance.SendMessage(_0x23906e, _0x452dee, "Success: data was posted to " + _0x46e567);
      });
    } catch (_0xec362d) {
      window.unityInstance.SendMessage(_0x23906e, _0x3e9550, JSON.stringify(_0xec362d, Object.getOwnPropertyNames(_0xec362d)));
    }
    function _0xceab0b(_0x453498) {
      var _0x4afd45 = window.atob(_0x453498);
      var _0x32b1c4 = _0x4afd45.length;
      var _0x12547f = new Uint8Array(_0x32b1c4);
      for (var _0x26bfd9 = 0; _0x26bfd9 < _0x32b1c4; _0x26bfd9++) {
        _0x12547f[_0x26bfd9] = _0x4afd45.charCodeAt(_0x26bfd9);
      }
      return _0x12547f.buffer;
    }
  }
  function _0x2a3e4e(_0x273f67) {
    _0x273f67 = _0x242db5(_0x273f67);
    let _0xc04cf1 = document.createElement("input");
    _0xc04cf1.type = "file";
    _0xc04cf1.accept = ".mp3";
    _0xc04cf1.style.display = "none";
    _0xc04cf1.onchange = () => {
      _0x41590d("SongUploader", "LoadingPanel", "open");
      let _0x5c0a5a = _0xc04cf1.files[0];
      if (!_0x5c0a5a) {
        console.log("empty_file");
        _0x41590d("SongUploader", "OnFileUploadError", "empty_file");
        return;
      }
      if (_0x5c0a5a.type !== "audio/mpeg") {
        console.log("invalid_file_type");
        _0x41590d("SongUploader", "OnFileUploadError", "invalid_file_type");
        return;
      }
      if (_0x5c0a5a.size > 5242880) {
        console.log("max_exceed_file_size");
        _0x41590d("SongUploader", "OnFileUploadError", "max_exceed_file_size");
        return;
      }
      let _0x5552d4 = new FormData();
      _0x5552d4.append("file", _0x5c0a5a);
      _0x5552d4.append("payload", _0x273f67);
      fetch("https://api.1games.io/sound/upload", {
        method: "POST",
        body: _0x5552d4
      }).then(_0x3235c0 => _0x3235c0.text()).then(_0x5a751b => {
        _0x41590d("SongUploader", "OnFileUploaded", _0x5a751b);
        console.log("AFTER UPLOAD");
        _0x41590d("SongUploader", "LoadingPanel", "close");
      }).catch(_0x616a5e => {
        console.error("Upload error", _0x616a5e);
        _0x41590d("SongUploader", "OnFileUploadError", "upload_file_error");
        console.log("AFTER UPLOAD ERR");
        _0x41590d("SongUploader", "LoadingPanel", "close");
      });
    };
    document.body.appendChild(_0xc04cf1);
    _0xc04cf1.click();
    setTimeout(() => _0xc04cf1.remove(), 1000);
  }
  var _0x2d717c = [];
  function _0x571ee3(_0x2bc517, _0x2544f7, _0x5d5521, _0x233a10, _0x202e82, _0x193a9b, _0xa1645d, _0x549580, _0x33187d, _0x1f5184, _0x173d45, _0x391aac) {
    var _0x133743 = document.getElementById(_0x242db5(_0x2bc517));
    var _0x2b4eca = _0x133743.getElementsByTagName("canvas")[0];
    if (!_0x133743 && _0x2b4eca) {
      _0x133743 = _0x2b4eca.parentNode;
    }
    if (_0x2b4eca) {
      var _0x3f1b18 = _0x133743.offsetWidth / _0x2b4eca.width;
      var _0x54763d = _0x133743.offsetHeight / _0x2b4eca.height;
      if (_0x3f1b18 && _0x54763d) {
        _0x2544f7 *= _0x3f1b18;
        _0x233a10 *= _0x3f1b18;
        _0x5d5521 *= _0x54763d;
        _0x202e82 *= _0x54763d;
      }
    }
    var _0x4d1ae8 = document.createElement(_0x33187d ? "textarea" : "input");
    _0x4d1ae8.style.position = "absolute";
    if (_0x391aac) {
      _0x4d1ae8.style.bottom = "1vh";
      _0x4d1ae8.style.left = "5vw";
      _0x4d1ae8.style.width = "90vw";
      _0x4d1ae8.style.height = (_0x33187d ? 18 : 10) + "vh";
      _0x4d1ae8.style.fontSize = "5vh";
      _0x4d1ae8.style.borderWidth = "5px";
      _0x4d1ae8.style.borderColor = "#000000";
    } else {
      _0x4d1ae8.style.top = _0x5d5521 + "px";
      _0x4d1ae8.style.left = _0x2544f7 + "px";
      _0x4d1ae8.style.width = _0x233a10 + "px";
      _0x4d1ae8.style.height = _0x202e82 + "px";
      _0x4d1ae8.style.fontSize = _0x193a9b + "px";
    }
    _0x4d1ae8.style.outlineWidth = "1px";
    _0x4d1ae8.style.opacity = _0x173d45 ? 0 : 1;
    _0x4d1ae8.style.resize = "none";
    _0x4d1ae8.style.padding = "0px 1px";
    _0x4d1ae8.style.cursor = "default";
    _0x4d1ae8.style.touchAction = "none";
    _0x4d1ae8.spellcheck = false;
    _0x4d1ae8.value = _0x242db5(_0xa1645d);
    _0x4d1ae8.placeholder = _0x242db5(_0x549580);
    _0x4d1ae8.style.outlineColor = "black";
    if (_0x1f5184) {
      _0x4d1ae8.type = "password";
    }
    if (_0x391aac) {
      document.body.appendChild(_0x4d1ae8);
    } else {
      _0x133743.appendChild(_0x4d1ae8);
    }
    return _0x2d717c.push(_0x4d1ae8) - 1;
  }
  function _0x2e5975(_0x36f5ec) {
    var _0x22dbe3 = _0x2d717c[_0x36f5ec];
    _0x22dbe3.parentNode.removeChild(_0x22dbe3);
    _0x2d717c[_0x36f5ec] = null;
  }
  function _0x299d77(_0x5dd692, _0x269e52) {
    var _0x35b1e2 = _0x2d717c[_0x5dd692];
    _0x35b1e2.addEventListener("keydown", function (_0xbbabf7) {
      if (_0xbbabf7.which && _0xbbabf7.which === 13 || _0xbbabf7.keyCode && _0xbbabf7.keyCode === 13) {
        if (_0x269e52) {
          _0xbbabf7.preventDefault();
          _0x35b1e2.blur();
        }
      }
    });
  }
  function _0x2a1073(_0x1033d6) {
    var _0x3609dc = _0x2d717c[_0x1033d6];
    _0x3609dc.focus();
  }
  function _0x36458f(_0x3c1eba) {
    var _0x86ab3a = _0x2d717c[_0x3c1eba];
    _0x86ab3a.blur();
  }
  function _0x125e84() {
    if (typeof _0x19c2cf === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x19c2cf
      };
    }
  }
  function _0x275ff3(_0x2dd18b) {
    return _0x2d717c[_0x2dd18b] === document.activeElement;
  }
  function _0x3a91eb(_0x1deb98, _0x4c33fe) {
    var _0x263b27 = _0x2d717c[_0x1deb98];
    _0x263b27.maxLength = _0x4c33fe;
  }
  function _0x30cf35(_0x3320df, _0x2e338e) {
    document.body.addEventListener("focusout", function () {
      document.body.removeEventListener("focusout", arguments.callee);
      Runtime.dynCall("vi", _0x2e338e, [_0x3320df]);
    });
  }
  function _0x3f21af(_0x296bda) {
    var _0x581f65 = _0x2d717c.push(null) - 1;
    document.body.addEventListener("touchend", function () {
      document.body.removeEventListener("touchend", arguments.callee);
      Runtime.dynCall("vi", _0x296bda, [_0x581f65]);
    });
    return _0x581f65;
  }
  function _0x16fe58(_0xddfe5f, _0x163dc1) {
    var _0x184a8a = _0x2d717c[_0xddfe5f];
    _0x184a8a.onblur = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x163dc1, [_0xddfe5f]);
      } else {
        (function (_0x1bbea7) {
          _0xe5b92e.apply(null, [_0x163dc1, _0x1bbea7]);
        })(_0xddfe5f);
      }
    };
  }
  function _0xbe230(_0x7df120, _0x389b13) {
    var _0x572932 = _0x2d717c[_0x7df120];
    _0x572932.onchange = function () {
      var _0xba8f01 = _0x572932.value;
      var _0x1854d2 = _0x72e291(_0xba8f01) + 1;
      var _0x446710 = _0x25ed17(_0x1854d2);
      _0x291bc6(_0xba8f01, _0x446710, _0x1854d2);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x389b13, [_0x7df120, _0x446710]);
      } else {
        (function (_0x44e828, _0x58242e) {
          _0x55ba98.apply(null, [_0x389b13, _0x44e828, _0x58242e]);
        })(_0x7df120, _0x446710);
      }
    };
  }
  function _0x5659bc(_0x6b8971, _0x22611d) {
    var _0x54b1ed = _0x2d717c[_0x6b8971];
    _0x54b1ed.onfocus = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x22611d, [_0x6b8971]);
      } else {
        (function (_0x27dfeb) {
          _0xe5b92e.apply(null, [_0x22611d, _0x27dfeb]);
        })(_0x6b8971);
      }
    };
  }
  function _0x347ef5(_0x302503, _0x3ef7ab) {
    var _0x2deb78 = _0x2d717c[_0x302503];
    var _0x7d95f = function (_0x32a428, _0x5841e5) {
      if (_0x5841e5 instanceof KeyboardEvent) {
        var _0x23d310 = _0x72e291(_0x5841e5.key) + 1;
        var _0x23ba0e = _0x25ed17(_0x23d310);
        _0x291bc6(_0x5841e5.key, _0x23ba0e, _0x23d310);
        var _0x2f8cf5 = _0x5841e5.code;
        var _0x230f91 = _0x5841e5.shiftKey ? 1 : 0;
        var _0x1fc846 = _0x5841e5.ctrlKey ? 1 : 0;
        var _0x2f7f61 = _0x5841e5.altKey ? 1 : 0;
        if (Runtime.dynCall) {
          Runtime.dynCall("viiiiiii", _0x3ef7ab, [_0x302503, _0x32a428, _0x23ba0e, _0x2f8cf5, _0x230f91, _0x1fc846, _0x2f7f61]);
        } else {
          (function (_0x3e9cf1, _0x524652, _0x29eea8, _0x16c83c, _0x4a8350, _0x2e86a0, _0x4721ba) {
            _0x3d15bb.apply(null, [_0x3ef7ab, _0x3e9cf1, _0x524652, _0x29eea8, _0x16c83c, _0x4a8350, _0x2e86a0, _0x4721ba]);
          })(_0x302503, _0x32a428, _0x23ba0e, _0x2f8cf5, _0x230f91, _0x1fc846, _0x2f7f61);
        }
      }
    };
    _0x2deb78.addEventListener("keydown", function (_0x4947b6) {
      _0x7d95f(1, _0x4947b6);
    });
    _0x2deb78.addEventListener("keyup", function (_0x1e74da) {
      _0x7d95f(2, _0x1e74da);
    });
  }
  function _0x567db7(_0x10a28d, _0x279cc0) {
    var _0x230196 = _0x2d717c[_0x10a28d];
    _0x230196.oninput = function () {
      var _0x4e2df9 = _0x230196.value;
      var _0x230476 = _0x72e291(_0x4e2df9) + 1;
      var _0x2b7607 = _0x25ed17(_0x230476);
      _0x291bc6(_0x4e2df9, _0x2b7607, _0x230476);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x279cc0, [_0x10a28d, _0x2b7607]);
      } else {
        (function (_0x327121, _0x36d02b) {
          _0x55ba98.apply(null, [_0x279cc0, _0x327121, _0x36d02b]);
        })(_0x10a28d, _0x2b7607);
      }
    };
  }
  function _0x5cd68a(_0x1a2c26) {
    var _0x3e829a = _0x2d717c[_0x1a2c26];
    if (_0x3e829a.selectionDirection == "backward") {
      return -1;
    } else {
      return 1;
    }
  }
  function _0x50830a(_0x2803) {
    var _0x1255bc = _0x2d717c[_0x2803];
    return _0x1255bc.selectionEnd;
  }
  function _0x3dad0f(_0x3533e0) {
    var _0x4038ba = _0x2d717c[_0x3533e0];
    return _0x4038ba.selectionStart;
  }
  function _0x53613e(_0x2fd791, _0x489adb, _0x2af34b) {
    var _0x4297f0 = _0x2d717c[_0x2fd791];
    _0x4297f0.setSelectionRange(_0x489adb, _0x2af34b);
  }
  function _0x40d1c2(_0x40fb33, _0x6aa54b) {
    var _0x27bd8b = _0x2d717c[_0x40fb33];
    _0x27bd8b.addEventListener("keydown", function (_0x3ea04a) {
      if (_0x3ea04a.which && _0x3ea04a.which === 9 || _0x3ea04a.keyCode && _0x3ea04a.keyCode === 9) {
        _0x3ea04a.preventDefault();
        if (_0x27bd8b.enableTabText) {
          var _0x3d5383 = _0x27bd8b.value;
          var _0xb37f9f = _0x27bd8b.selectionStart;
          var _0x57fae2 = _0x27bd8b.selectionEnd;
          _0x27bd8b.value = _0x3d5383.substr(0, _0xb37f9f) + "\t" + _0x3d5383.substr(_0x57fae2, _0x3d5383.length);
          _0x27bd8b.setSelectionRange(_0xb37f9f + 1, _0xb37f9f + 1);
          _0x27bd8b.oninput();
        } else if (Runtime.dynCall) {
          Runtime.dynCall("vii", _0x6aa54b, [_0x40fb33, _0x3ea04a.shiftKey ? -1 : 1]);
        } else {
          (function (_0x5a7b76, _0x2085ae) {
            _0x55ba98.apply(null, [_0x6aa54b, _0x5a7b76, _0x2085ae]);
          })(_0x40fb33, _0x3ea04a.shiftKey ? -1 : 1);
        }
      }
    });
  }
  function _0x438f47(_0x5b992c, _0xb394df) {
    var _0xc5d98 = _0x2d717c[_0x5b992c];
    _0xc5d98.value = _0x242db5(_0xb394df);
  }
  function _0x36d218() {
    var _0x32648b = document.getElementsByTagName("canvas");
    var _0x15b93a = "";
    if (_0x32648b.length >= 1) {
      _0x15b93a = _0x32648b[0].parentNode.id;
      if (_0x15b93a == "") {
        _0x15b93a = _0x32648b[0].parentNode.id = "WebGLWindow:Canvas:ParentNode";
      }
    }
    var _0x2b9847 = _0x72e291(_0x15b93a) + 1;
    var _0x3170fa = _0x25ed17(_0x2b9847);
    _0x291bc6(_0x15b93a, _0x3170fa, _0x2b9847);
    return _0x3170fa;
  }
  function _0x559685() {
    if (typeof _0x19c2cf === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x19c2cf
      };
    }
  }
  function _0xdb3107() {
    document.makeFullscreen = function (_0x3dc8b0, _0x119946) {
      var _0x5664aa = function () {
        var _0x930c23 = window.document;
        var _0x5899c4 = _0x930c23.fullscreenElement || _0x930c23.mozFullScreenElement || _0x930c23.webkitFullscreenElement || _0x930c23.msFullscreenElement;
        return _0x5899c4;
      };
      var _0x30ced0 = function (_0x1fafff) {
        document.addEventListener("fullscreenchange", _0x1fafff, false);
        document.addEventListener("webkitfullscreenchange", _0x1fafff, false);
        document.addEventListener("mozfullscreenchange", _0x1fafff, false);
        document.addEventListener("MSFullscreenChange", _0x1fafff, false);
      };
      var _0x538a5c = function (_0x5e6c1e) {
        document.removeEventListener("fullscreenchange", _0x5e6c1e, false);
        document.removeEventListener("webkitfullscreenchange", _0x5e6c1e, false);
        document.removeEventListener("mozfullscreenchange", _0x5e6c1e, false);
        document.removeEventListener("MSFullscreenChange", _0x5e6c1e, false);
      };
      var _0xfd878e = document.createElement("div");
      document.body.appendChild(_0xfd878e);
      var _0x4cd5ff = document.getElementsByTagName("canvas")[0];
      var _0x132ffa = {
        width: _0x4cd5ff.style.width,
        height: _0x4cd5ff.style.height
      };
      var _0x2a2c93 = document.getElementById(_0x3dc8b0);
      var _0x59510e = _0x2a2c93.tagName.toLowerCase() == "body";
      if (_0x59510e) {
        _0xfd878e.id = _0x2a2c93.id;
        _0x2a2c93.id = "";
        _0x2a2c93 = _0x4cd5ff;
      }
      var _0x2a4be8 = _0x2a2c93.parentNode;
      var _0x4b37d7 = window.getComputedStyle(_0x2a2c93);
      var _0x4c99d5 = parseInt(_0x4b37d7.width);
      var _0x5109cd = parseInt(_0x4b37d7.height);
      var _0x54a32b = Array.from(_0x2a4be8.children).findIndex(function (_0x1717f1) {
        return _0x1717f1 == _0x2a2c93;
      });
      _0xfd878e.appendChild(_0x2a2c93);
      var _0x174ea3 = function () {
        if (_0x5664aa()) {
          if (_0x119946) {
            var _0x16dfaa = Math.min(window.screen.width / _0x4c99d5, window.screen.height / _0x5109cd);
            var _0x1f8f97 = Math.floor(_0x4c99d5 * _0x16dfaa);
            var _0x166e67 = Math.floor(_0x5109cd * _0x16dfaa);
            _0x2a2c93.style.width = _0x1f8f97 + "px";
            _0x2a2c93.style.height = _0x166e67 + "px";
          } else {
            _0x2a2c93.style.width = window.screen.width + "px";
            _0x2a2c93.style.height = window.screen.height + "px";
          }
          _0x4cd5ff.style.width = "100%";
          _0x4cd5ff.style.height = "100%";
        } else {
          _0x2a2c93.style.width = _0x4c99d5 + "px";
          _0x2a2c93.style.height = _0x5109cd + "px";
          _0x2a4be8.insertBefore(_0x2a2c93, Array.from(_0x2a4be8.children)[_0x54a32b]);
          if (_0x59510e) {
            _0x2a4be8.id = _0xfd878e.id;
          }
          _0xfd878e.parentNode.removeChild(_0xfd878e);
          _0x4cd5ff.style.width = _0x132ffa.width;
          _0x4cd5ff.style.height = _0x132ffa.height;
          _0x538a5c(_0x174ea3);
        }
      };
      _0x30ced0(_0x174ea3);
      if (_0xfd878e.mozRequestFullScreen) {
        _0xfd878e.mozRequestFullScreen();
      } else if (_0xfd878e.webkitRequestFullScreen) {
        _0xfd878e.webkitRequestFullScreen();
      } else if (_0xfd878e.msRequestFullscreen) {
        _0xfd878e.msRequestFullscreen();
      } else if (_0xfd878e.requestFullscreen) {
        _0xfd878e.requestFullscreen();
      }
    };
  }
  function _0x9dd370(_0x61d582) {
    this.blurListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x61d582, []);
      } else {
        (function () {
          _0x3fcf98.call(null, _0x61d582);
        })();
      }
    };
    window.addEventListener("blur", this.blurListener);
  }
  function _0x2e5866(_0x18af66) {
    this.focusListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x18af66, []);
      } else {
        (function () {
          _0x3fcf98.call(null, _0x18af66);
        })();
      }
    };
    window.addEventListener("focus", this.focusListener);
  }
  function _0x136f5f(_0x3dfed0) {
    this.resizeListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x3dfed0, []);
      } else {
        (function () {
          _0x3fcf98.call(null, _0x3dfed0);
        })();
      }
    };
    window.addEventListener("resize", this.resizeListener);
  }
  function _0x218e7b() {
    if (focusListener) {
      window.removeEventListener("focus", this.focusListener);
      this.focusListener = null;
    }
    if (blurListener) {
      window.removeEventListener("blur", this.blurListener);
      this.blurListener = null;
    }
    if (resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  var _0x14e16d = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x5cede9, _0x40f6fa, _0x5163d6) {
      const _0x4fe6fd = new TextEncoder();
      const _0x4d6ba6 = _0x4fe6fd.encode(_0x5163d6);
      const _0x5bc589 = function (_0x1c3538, _0x2b388b) {
        return _0x9d1641.apply(null, [_0x14e16d.onallocbuffer, _0x1c3538, _0x2b388b]);
      }(_0x5cede9, _0x4d6ba6.length);
      _0x5d32f0.set(_0x4d6ba6, _0x5bc589);
      (function (_0x24a7e2, _0x217619, _0x365349) {
        _0x4fa5fa.apply(null, [_0x40f6fa, _0x24a7e2, _0x217619, _0x365349]);
      })(_0x5cede9, _0x5bc589, _0x4d6ba6.length);
    },
    GetResponseHeaders: function (_0x2f68ce, _0x2c7474) {
      if (_0x14e16d.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x2f68ce + ")");
      }
      var _0x401c62 = "";
      if (document && document.cookie) {
        var _0xa2be53 = document.cookie.split(";");
        for (var _0x11bc05 = 0; _0x11bc05 < _0xa2be53.length; ++_0x11bc05) {
          const _0x2e68dc = _0xa2be53[_0x11bc05].trim();
          if (_0x2e68dc.length > 0) {
            _0x401c62 += "Set-Cookie:" + _0x2e68dc + "\n";
          }
        }
      }
      const _0x30e973 = _0x14e16d.requestInstances[_0x2f68ce].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x30e973.forEach(_0x4d3453 => {
        const _0x3b5878 = _0x4d3453.split(": ");
        const _0x57b139 = _0x3b5878.shift();
        const _0x5607dd = _0x3b5878.join(": ");
        if (_0x57b139 !== "content-length") {
          _0x401c62 += _0x57b139 + ":" + _0x5607dd + "\n";
        }
      });
      _0x14e16d.SendTextToCSharpSide(_0x2f68ce, _0x2c7474, _0x401c62);
    }
  };
  function _0x26eff3(_0x144810) {
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x144810 + ")");
    }
    _0x14e16d.requestInstances[_0x144810].abort();
  }
  function _0x1ac21d(_0x5c0d3b, _0x1ac222, _0x33601f, _0xe4616, _0x559746) {
    var _0x294dd6 = new URL(_0x242db5(_0x1ac222));
    var _0x3afeaa = _0x242db5(_0x5c0d3b);
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_Create (" + _0x14e16d.nextRequestId + ", " + _0x3afeaa + ", " + _0x294dd6.toString() + ", " + _0x559746 + ")");
    }
    var _0x108df9 = new XMLHttpRequest();
    if (_0x33601f && _0xe4616) {
      var _0x1f6415 = _0x242db5(_0x33601f);
      var _0x4957d3 = _0x242db5(_0xe4616);
      _0x108df9.withCredentials = true;
      _0x108df9.open(_0x3afeaa, _0x294dd6.toString(), true, _0x1f6415, _0x4957d3);
    } else {
      _0x108df9.withCredentials = _0x559746;
      _0x108df9.open(_0x3afeaa, _0x294dd6.toString(), true);
    }
    _0x108df9.responseType = "arraybuffer";
    _0x14e16d.requestInstances[_0x14e16d.nextRequestId] = _0x108df9;
    return _0x14e16d.nextRequestId++;
  }
  function _0x1d9594(_0x5da669) {
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_Release(" + _0x5da669 + ")");
    }
    delete _0x14e16d.requestInstances[_0x5da669];
  }
  function _0x259079(_0x5ac7dd, _0x4cc3ab, _0x3c3a2a) {
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_Send(" + _0x5ac7dd + ", " + _0x4cc3ab + ", " + _0x3c3a2a + ")");
    }
    var _0xfea59b = _0x14e16d.requestInstances[_0x5ac7dd];
    try {
      if (_0x3c3a2a > 0) {
        _0xfea59b.send(_0x5d32f0.subarray(_0x4cc3ab, _0x4cc3ab + _0x3c3a2a));
      } else {
        _0xfea59b.send();
      }
    } catch (_0x3a90e7) {
      if (_0x14e16d.loglevel <= 4) {
        console.error("XHR_Send(" + _0x5ac7dd + "): " + _0x3a90e7.name + " : " + _0x3a90e7.message);
      }
    }
  }
  function _0x247d67(_0x143f6e) {
    _0x14e16d.loglevel = _0x143f6e;
  }
  function _0x98d8ac(_0x4d60dc, _0x3886ad, _0x2d4c5f) {
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x4d60dc + ")");
    }
    var _0x9e78 = _0x14e16d.requestInstances[_0x4d60dc];
    if (_0x9e78) {
      if (_0x3886ad) {
        _0x9e78.onprogress = function _0x44979b(_0x39551e) {
          if (_0x14e16d.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x4d60dc + ", " + _0x39551e.loaded + ", " + _0x39551e.total + ")");
          }
          if (_0x39551e.lengthComputable) {
            (function (_0x357d1f, _0x32013d, _0x2c7b44) {
              _0x4fa5fa.apply(null, [_0x3886ad, _0x357d1f, _0x32013d, _0x2c7b44]);
            })(_0x4d60dc, _0x39551e.loaded, _0x39551e.total);
          }
        };
      }
      if (_0x2d4c5f) {
        _0x9e78.upload.addEventListener("progress", function _0x24c7cb(_0x7cfd8f) {
          if (_0x14e16d.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x4d60dc + ", " + _0x7cfd8f.loaded + ", " + _0x7cfd8f.total + ")");
          }
          if (_0x7cfd8f.lengthComputable) {
            (function (_0x480fc4, _0x534078, _0x5aa08b) {
              _0x4fa5fa.apply(null, [_0x2d4c5f, _0x480fc4, _0x534078, _0x5aa08b]);
            })(_0x4d60dc, _0x7cfd8f.loaded, _0x7cfd8f.total);
          }
        }, true);
      }
    }
  }
  function _0x50bcd7(_0x13bf07, _0x68c11b, _0x1b4314) {
    var _0x3ca41f = _0x242db5(_0x68c11b);
    var _0x5eb5ce = _0x242db5(_0x1b4314);
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x3ca41f + ", " + _0x5eb5ce + ")");
    }
    if (_0x3ca41f != "Cookie") {
      _0x14e16d.requestInstances[_0x13bf07].setRequestHeader(_0x3ca41f, _0x5eb5ce);
    } else {
      var _0x299b60 = _0x5eb5ce.split(";");
      for (var _0x7d4a4a = 0; _0x7d4a4a < _0x299b60.length; _0x7d4a4a++) {
        document.cookie = _0x299b60[_0x7d4a4a];
      }
    }
  }
  function _0x26a36d(_0x183d91, _0x2d6988, _0x5fc666, _0x367c68, _0x24d6db, _0x1efd58, _0x47ff90) {
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x183d91 + ")");
    }
    _0x14e16d.onallocbuffer = _0x47ff90;
    var _0x5b5945 = _0x14e16d.requestInstances[_0x183d91];
    _0x5b5945.onreadystatechange = _0x1bcde3 => {
      if (_0x14e16d.loglevel <= 1) {
        console.log(_0x183d91 + " onreadystatechange(" + _0x5b5945.readyState + ")");
      }
      switch (_0x5b5945.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x14e16d.SendTextToCSharpSide(_0x183d91, _0x1efd58, "HTTP/1.1 " + _0x5b5945.status + " " + _0x5b5945.statusText + "\n");
            _0x14e16d.GetResponseHeaders(_0x183d91, _0x1efd58);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x5b5945.onloadstart = _0x321652 => {
      if (_0x14e16d.loglevel <= 1) {
        console.log(_0x183d91 + " onloadstart: " + _0x321652);
      }
    };
    _0x5b5945.onload = function _0x4973fb(_0x264cb9) {
      if (_0x14e16d.loglevel <= 1) {
        console.log(_0x183d91 + " onload(" + _0x5b5945.status + ", " + _0x5b5945.statusText + ")");
      }
      if (_0x2d6988) {
        var _0x417d83 = 0;
        var _0x1c81a = 0;
        if (_0x5b5945.response) {
          var _0x282c50 = _0x5b5945.response;
          _0x417d83 = _0x282c50.byteLength;
          _0x14e16d.SendTextToCSharpSide(_0x183d91, _0x1efd58, "content-length:" + _0x417d83 + "\n\n");
          _0x1c81a = function (_0x54efeb, _0x4078eb) {
            return _0x9d1641.apply(null, [_0x47ff90, _0x54efeb, _0x4078eb]);
          }(_0x183d91, _0x417d83);
          var _0x4d3496 = new Uint8Array(_0x282c50);
          var _0x4f822e = _0x5d32f0.subarray(_0x1c81a, _0x1c81a + _0x417d83);
          _0x4f822e.set(_0x4d3496);
        } else {
          _0x14e16d.SendTextToCSharpSide(_0x183d91, _0x1efd58, "content-length:0\n\n");
        }
        (function (_0x1c91df, _0x7981ac, _0x500588) {
          _0x4fa5fa.apply(null, [_0x2d6988, _0x1c91df, _0x7981ac, _0x500588]);
        })(_0x183d91, _0x1c81a, _0x417d83);
      }
    };
    if (_0x5fc666) {
      _0x5b5945.onerror = function _0x482935(_0x18a235) {
        function _0x1e38a6(_0x3e7505) {
          var _0x5917f8 = _0x72e291(_0x3e7505) + 1;
          var _0x5d2095 = _0x25ed17(_0x5917f8);
          _0x389f76(_0x3e7505, _0x5d32f0, _0x5d2095, _0x5917f8);
          (function (_0x508b2f, _0x4bd13b) {
            _0x55ba98.apply(null, [_0x5fc666, _0x508b2f, _0x4bd13b]);
          })(_0x183d91, _0x5d2095);
          _0xc27a35(_0x5d2095);
        }
        if (_0x18a235.error) {
          _0x1e38a6(_0x18a235.error);
        } else {
          _0x1e38a6("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x367c68) {
      _0x5b5945.ontimeout = function _0x59c9aa(_0x514c39) {
        (function (_0x2149e4) {
          _0xe5b92e.apply(null, [_0x367c68, _0x2149e4]);
        })(_0x183d91);
      };
    }
    if (_0x24d6db) {
      _0x5b5945.onabort = function _0x318f49(_0x57d1ad) {
        (function (_0x582980) {
          _0xe5b92e.apply(null, [_0x24d6db, _0x582980]);
        })(_0x183d91);
      };
    }
  }
  function _0x377f8b(_0x536889, _0x276731) {
    if (_0x14e16d.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x536889 + ", " + _0x276731 + ")");
    }
    _0x14e16d.requestInstances[_0x536889].timeout = _0x276731;
  }
  var _0x216591 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x15148c(_0x26af80) {
    return _0x25ed17(_0x26af80 + _0x216591.SIZE) + _0x216591.SIZE;
  }
  function _0x1c43d4(_0x1a46ad) {
    this.excPtr = _0x1a46ad;
    this.ptr = _0x1a46ad - _0x216591.SIZE;
    this.set_type = function (_0x401289) {
      _0x447875[this.ptr + _0x216591.TYPE_OFFSET >> 2] = _0x401289;
    };
    this.get_type = function () {
      return _0x447875[this.ptr + _0x216591.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x3a7d37) {
      _0x447875[this.ptr + _0x216591.DESTRUCTOR_OFFSET >> 2] = _0x3a7d37;
    };
    this.get_destructor = function () {
      return _0x447875[this.ptr + _0x216591.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x2e6ed2) {
      _0x447875[this.ptr + _0x216591.REFCOUNT_OFFSET >> 2] = _0x2e6ed2;
    };
    this.set_caught = function (_0x1099b1) {
      _0x1099b1 = _0x1099b1 ? 1 : 0;
      _0xf10f52[this.ptr + _0x216591.CAUGHT_OFFSET >> 0] = _0x1099b1;
    };
    this.get_caught = function () {
      return _0xf10f52[this.ptr + _0x216591.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x568467) {
      _0x568467 = _0x568467 ? 1 : 0;
      _0xf10f52[this.ptr + _0x216591.RETHROWN_OFFSET >> 0] = _0x568467;
    };
    this.get_rethrown = function () {
      return _0xf10f52[this.ptr + _0x216591.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x10d2a7, _0x25ec94) {
      this.set_type(_0x10d2a7);
      this.set_destructor(_0x25ec94);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x45d6a0 = _0x447875[this.ptr + _0x216591.REFCOUNT_OFFSET >> 2];
      _0x447875[this.ptr + _0x216591.REFCOUNT_OFFSET >> 2] = _0x45d6a0 + 1;
    };
    this.release_ref = function () {
      var _0x4265ea = _0x447875[this.ptr + _0x216591.REFCOUNT_OFFSET >> 2];
      _0x447875[this.ptr + _0x216591.REFCOUNT_OFFSET >> 2] = _0x4265ea - 1;
      return _0x4265ea === 1;
    };
  }
  function _0x3fad75(_0x2f5a61) {
    this.free = function () {
      _0xc27a35(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x518c77) {
      _0x447875[this.ptr >> 2] = _0x518c77;
    };
    this.get_base_ptr = function () {
      return _0x447875[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0xaf28c0) {
      var _0x24ce06 = 4;
      _0x447875[this.ptr + _0x24ce06 >> 2] = _0xaf28c0;
    };
    this.get_adjusted_ptr = function () {
      var _0x390385 = 4;
      return _0x447875[this.ptr + _0x390385 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0xd4796f = _0x1888ca(this.get_exception_info().get_type());
      if (_0xd4796f) {
        return _0x447875[this.get_base_ptr() >> 2];
      }
      var _0x2c6f57 = this.get_adjusted_ptr();
      if (_0x2c6f57 !== 0) {
        return _0x2c6f57;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x1c43d4(this.get_base_ptr());
    };
    if (_0x2f5a61 === undefined) {
      this.ptr = _0x25ed17(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x2f5a61;
    }
  }
  var _0x105a45 = [];
  function _0x4b62ee(_0x481254) {
    _0x481254.add_ref();
  }
  var _0x37dda9 = 0;
  function _0x5f22c4(_0x5964d1) {
    var _0x3142e5 = new _0x3fad75(_0x5964d1);
    var _0x55f477 = _0x3142e5.get_exception_info();
    if (!_0x55f477.get_caught()) {
      _0x55f477.set_caught(true);
      _0x37dda9--;
    }
    _0x55f477.set_rethrown(false);
    _0x105a45.push(_0x3142e5);
    _0x4b62ee(_0x55f477);
    return _0x3142e5.get_exception_ptr();
  }
  var _0x23fed7 = 0;
  function _0x309f0e(_0x31e3d8) {
    return _0xc27a35(new _0x1c43d4(_0x31e3d8).ptr);
  }
  function _0x62e604(_0x3af536) {
    if (_0x3af536.release_ref() && !_0x3af536.get_rethrown()) {
      var _0x16559a = _0x3af536.get_destructor();
      if (_0x16559a) {
        (function (_0x596092) {
          return _0x5a9657.apply(null, [_0x16559a, _0x596092]);
        })(_0x3af536.excPtr);
      }
      _0x309f0e(_0x3af536.excPtr);
    }
  }
  function _0x5df71f() {
    _0x225d08(0);
    var _0x517635 = _0x105a45.pop();
    _0x62e604(_0x517635.get_exception_info());
    _0x517635.free();
    _0x23fed7 = 0;
  }
  function _0x12c5c7(_0x226e69) {
    var _0x5305a5 = new _0x3fad75(_0x226e69);
    var _0x49473f = _0x5305a5.get_base_ptr();
    if (!_0x23fed7) {
      _0x23fed7 = _0x49473f;
    }
    _0x5305a5.free();
    throw _0x49473f;
  }
  function _0x5ac526() {
    var _0x113810 = _0x23fed7;
    if (!_0x113810) {
      _0x5ea706(0);
      return 0;
    }
    var _0x274d12 = new _0x1c43d4(_0x113810);
    var _0x56f99c = _0x274d12.get_type();
    var _0x3e30d6 = new _0x3fad75();
    _0x3e30d6.set_base_ptr(_0x113810);
    if (!_0x56f99c) {
      _0x5ea706(0);
      return _0x3e30d6.ptr | 0;
    }
    var _0x2bc8e5 = Array.prototype.slice.call(arguments);
    var _0x764c27 = _0x27ee1f();
    var _0x1e5c63 = _0xbe2651(4);
    _0x447875[_0x1e5c63 >> 2] = _0x113810;
    for (var _0x4c9776 = 0; _0x4c9776 < _0x2bc8e5.length; _0x4c9776++) {
      var _0x4a105a = _0x2bc8e5[_0x4c9776];
      if (_0x4a105a === 0 || _0x4a105a === _0x56f99c) {
        break;
      }
      if (_0x176592(_0x4a105a, _0x56f99c, _0x1e5c63)) {
        var _0x2c3888 = _0x447875[_0x1e5c63 >> 2];
        if (_0x113810 !== _0x2c3888) {
          _0x3e30d6.set_adjusted_ptr(_0x2c3888);
        }
        _0x5ea706(_0x4a105a);
        return _0x3e30d6.ptr | 0;
      }
    }
    _0x1df486(_0x764c27);
    _0x5ea706(_0x56f99c);
    return _0x3e30d6.ptr | 0;
  }
  function _0x4abc16() {
    var _0x567c69 = _0x23fed7;
    if (!_0x567c69) {
      _0x5ea706(0);
      return 0;
    }
    var _0x447813 = new _0x1c43d4(_0x567c69);
    var _0xec2dfb = _0x447813.get_type();
    var _0x5e827f = new _0x3fad75();
    _0x5e827f.set_base_ptr(_0x567c69);
    if (!_0xec2dfb) {
      _0x5ea706(0);
      return _0x5e827f.ptr | 0;
    }
    var _0x134f1d = Array.prototype.slice.call(arguments);
    var _0x2ad05a = _0x27ee1f();
    var _0x353d7b = _0xbe2651(4);
    _0x447875[_0x353d7b >> 2] = _0x567c69;
    for (var _0x4e3474 = 0; _0x4e3474 < _0x134f1d.length; _0x4e3474++) {
      var _0x2572d8 = _0x134f1d[_0x4e3474];
      if (_0x2572d8 === 0 || _0x2572d8 === _0xec2dfb) {
        break;
      }
      if (_0x176592(_0x2572d8, _0xec2dfb, _0x353d7b)) {
        var _0x5c74e6 = _0x447875[_0x353d7b >> 2];
        if (_0x567c69 !== _0x5c74e6) {
          _0x5e827f.set_adjusted_ptr(_0x5c74e6);
        }
        _0x5ea706(_0x2572d8);
        return _0x5e827f.ptr | 0;
      }
    }
    _0x1df486(_0x2ad05a);
    _0x5ea706(_0xec2dfb);
    return _0x5e827f.ptr | 0;
  }
  function _0x232a53() {
    var _0x214bd4 = _0x23fed7;
    if (!_0x214bd4) {
      _0x5ea706(0);
      return 0;
    }
    var _0x118f11 = new _0x1c43d4(_0x214bd4);
    var _0x16ba0c = _0x118f11.get_type();
    var _0x23f42e = new _0x3fad75();
    _0x23f42e.set_base_ptr(_0x214bd4);
    if (!_0x16ba0c) {
      _0x5ea706(0);
      return _0x23f42e.ptr | 0;
    }
    var _0x35151c = Array.prototype.slice.call(arguments);
    var _0x5125c2 = _0x27ee1f();
    var _0x38a6c0 = _0xbe2651(4);
    _0x447875[_0x38a6c0 >> 2] = _0x214bd4;
    for (var _0x58aa2e = 0; _0x58aa2e < _0x35151c.length; _0x58aa2e++) {
      var _0x1e2e56 = _0x35151c[_0x58aa2e];
      if (_0x1e2e56 === 0 || _0x1e2e56 === _0x16ba0c) {
        break;
      }
      if (_0x176592(_0x1e2e56, _0x16ba0c, _0x38a6c0)) {
        var _0x224275 = _0x447875[_0x38a6c0 >> 2];
        if (_0x214bd4 !== _0x224275) {
          _0x23f42e.set_adjusted_ptr(_0x224275);
        }
        _0x5ea706(_0x1e2e56);
        return _0x23f42e.ptr | 0;
      }
    }
    _0x1df486(_0x5125c2);
    _0x5ea706(_0x16ba0c);
    return _0x23f42e.ptr | 0;
  }
  function _0x45b29b() {
    var _0x3bc7a8 = _0x105a45.pop();
    if (!_0x3bc7a8) {
      _0x5bcf92("no exception to throw");
    }
    var _0x29bf07 = _0x3bc7a8.get_exception_info();
    var _0x4cd8fb = _0x3bc7a8.get_base_ptr();
    if (!_0x29bf07.get_rethrown()) {
      _0x105a45.push(_0x3bc7a8);
      _0x29bf07.set_rethrown(true);
      _0x29bf07.set_caught(false);
      _0x37dda9++;
    } else {
      _0x3bc7a8.free();
    }
    _0x23fed7 = _0x4cd8fb;
    throw _0x4cd8fb;
  }
  function _0x35f546(_0x42a047, _0x3f0700, _0xfaf5f1) {
    var _0x512eeb = new _0x1c43d4(_0x42a047);
    _0x512eeb.init(_0x3f0700, _0xfaf5f1);
    _0x23fed7 = _0x42a047;
    _0x37dda9++;
    throw _0x42a047;
  }
  function _0x11b404(_0x516e52, _0x1af991) {
    var _0x34a595 = new Date(_0x447875[_0x516e52 >> 2] * 1000);
    _0x447875[_0x1af991 >> 2] = _0x34a595.getUTCSeconds();
    _0x447875[_0x1af991 + 4 >> 2] = _0x34a595.getUTCMinutes();
    _0x447875[_0x1af991 + 8 >> 2] = _0x34a595.getUTCHours();
    _0x447875[_0x1af991 + 12 >> 2] = _0x34a595.getUTCDate();
    _0x447875[_0x1af991 + 16 >> 2] = _0x34a595.getUTCMonth();
    _0x447875[_0x1af991 + 20 >> 2] = _0x34a595.getUTCFullYear() - 1900;
    _0x447875[_0x1af991 + 24 >> 2] = _0x34a595.getUTCDay();
    _0x447875[_0x1af991 + 36 >> 2] = 0;
    _0x447875[_0x1af991 + 32 >> 2] = 0;
    var _0xb7b101 = Date.UTC(_0x34a595.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x4f2bb8 = (_0x34a595.getTime() - _0xb7b101) / 86400000 | 0;
    _0x447875[_0x1af991 + 28 >> 2] = _0x4f2bb8;
    if (!_0x11b404.GMTString) {
      _0x11b404.GMTString = _0x2e89e2("GMT");
    }
    _0x447875[_0x1af991 + 40 >> 2] = _0x11b404.GMTString;
    return _0x1af991;
  }
  function _0x3e6e62(_0x597bfd, _0x3ef47d) {
    return _0x11b404(_0x597bfd, _0x3ef47d);
  }
  function _0x4c8dcc() {
    if (_0x4c8dcc.called) {
      return;
    }
    _0x4c8dcc.called = true;
    var _0x20ebc9 = new Date().getFullYear();
    var _0x371583 = new Date(_0x20ebc9, 0, 1);
    var _0xcee586 = new Date(_0x20ebc9, 6, 1);
    var _0xb00e9b = _0x371583.getTimezoneOffset();
    var _0x1e2ba5 = _0xcee586.getTimezoneOffset();
    var _0x45740a = Math.max(_0xb00e9b, _0x1e2ba5);
    _0x447875[_0x4ce763() >> 2] = _0x45740a * 60;
    _0x447875[_0x55a096() >> 2] = Number(_0xb00e9b != _0x1e2ba5);
    function _0x3929cc(_0xa61725) {
      var _0x2af21b = _0xa61725.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x2af21b) {
        return _0x2af21b[1];
      } else {
        return "GMT";
      }
    }
    var _0x26e78c = _0x3929cc(_0x371583);
    var _0x4695a7 = _0x3929cc(_0xcee586);
    var _0x549ad8 = _0x2e89e2(_0x26e78c);
    var _0x22db6a = _0x2e89e2(_0x4695a7);
    if (_0x1e2ba5 < _0xb00e9b) {
      _0x447875[_0x173d77() >> 2] = _0x549ad8;
      _0x447875[_0x173d77() + 4 >> 2] = _0x22db6a;
    } else {
      _0x447875[_0x173d77() >> 2] = _0x22db6a;
      _0x447875[_0x173d77() + 4 >> 2] = _0x549ad8;
    }
  }
  function _0x3180ae(_0x30ca80, _0x337551) {
    _0x4c8dcc();
    var _0xd3ce1b = new Date(_0x447875[_0x30ca80 >> 2] * 1000);
    _0x447875[_0x337551 >> 2] = _0xd3ce1b.getSeconds();
    _0x447875[_0x337551 + 4 >> 2] = _0xd3ce1b.getMinutes();
    _0x447875[_0x337551 + 8 >> 2] = _0xd3ce1b.getHours();
    _0x447875[_0x337551 + 12 >> 2] = _0xd3ce1b.getDate();
    _0x447875[_0x337551 + 16 >> 2] = _0xd3ce1b.getMonth();
    _0x447875[_0x337551 + 20 >> 2] = _0xd3ce1b.getFullYear() - 1900;
    _0x447875[_0x337551 + 24 >> 2] = _0xd3ce1b.getDay();
    var _0x4ca4fa = new Date(_0xd3ce1b.getFullYear(), 0, 1);
    var _0x57ecee = (_0xd3ce1b.getTime() - _0x4ca4fa.getTime()) / 86400000 | 0;
    _0x447875[_0x337551 + 28 >> 2] = _0x57ecee;
    _0x447875[_0x337551 + 36 >> 2] = -(_0xd3ce1b.getTimezoneOffset() * 60);
    var _0x3054c8 = new Date(_0xd3ce1b.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x55680c = _0x4ca4fa.getTimezoneOffset();
    var _0x145363 = (_0x3054c8 != _0x55680c && _0xd3ce1b.getTimezoneOffset() == Math.min(_0x55680c, _0x3054c8)) | 0;
    _0x447875[_0x337551 + 32 >> 2] = _0x145363;
    var _0x5c82ed = _0x447875[_0x173d77() + (_0x145363 ? 4 : 0) >> 2];
    _0x447875[_0x337551 + 40 >> 2] = _0x5c82ed;
    return _0x337551;
  }
  function _0x1e0ba5(_0x52fcb0, _0x171c33) {
    return _0x3180ae(_0x52fcb0, _0x171c33);
  }
  var _0x2cbe33 = {
    splitPath: function (_0x27fd83) {
      var _0x55c2ec = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x55c2ec.exec(_0x27fd83).slice(1);
    },
    normalizeArray: function (_0xf71394, _0x33f3a7) {
      var _0x115e96 = 0;
      for (var _0x238a72 = _0xf71394.length - 1; _0x238a72 >= 0; _0x238a72--) {
        var _0x12df91 = _0xf71394[_0x238a72];
        if (_0x12df91 === ".") {
          _0xf71394.splice(_0x238a72, 1);
        } else if (_0x12df91 === "..") {
          _0xf71394.splice(_0x238a72, 1);
          _0x115e96++;
        } else if (_0x115e96) {
          _0xf71394.splice(_0x238a72, 1);
          _0x115e96--;
        }
      }
      if (_0x33f3a7) {
        for (; _0x115e96; _0x115e96--) {
          _0xf71394.unshift("..");
        }
      }
      return _0xf71394;
    },
    normalize: function (_0x11a88e) {
      var _0x501527 = _0x11a88e.charAt(0) === "/";
      var _0x205e15 = _0x11a88e.substr(-1) === "/";
      _0x11a88e = _0x2cbe33.normalizeArray(_0x11a88e.split("/").filter(function (_0x2c02e9) {
        return !!_0x2c02e9;
      }), !_0x501527).join("/");
      if (!_0x11a88e && !_0x501527) {
        _0x11a88e = ".";
      }
      if (_0x11a88e && _0x205e15) {
        _0x11a88e += "/";
      }
      return (_0x501527 ? "/" : "") + _0x11a88e;
    },
    dirname: function (_0x50978c) {
      var _0x4793d3 = _0x2cbe33.splitPath(_0x50978c);
      var _0x2e081d = _0x4793d3[0];
      var _0xa8c67f = _0x4793d3[1];
      if (!_0x2e081d && !_0xa8c67f) {
        return ".";
      }
      _0xa8c67f &&= _0xa8c67f.substr(0, _0xa8c67f.length - 1);
      return _0x2e081d + _0xa8c67f;
    },
    basename: function (_0x20b197) {
      if (_0x20b197 === "/") {
        return "/";
      }
      _0x20b197 = _0x2cbe33.normalize(_0x20b197);
      _0x20b197 = _0x20b197.replace(/\/$/, "");
      var _0x3a1ff9 = _0x20b197.lastIndexOf("/");
      if (_0x3a1ff9 === -1) {
        return _0x20b197;
      }
      return _0x20b197.substr(_0x3a1ff9 + 1);
    },
    extname: function (_0x3362bc) {
      return _0x2cbe33.splitPath(_0x3362bc)[3];
    },
    join: function () {
      var _0x519f74 = Array.prototype.slice.call(arguments, 0);
      return _0x2cbe33.normalize(_0x519f74.join("/"));
    },
    join2: function (_0x424377, _0x555e08) {
      return _0x2cbe33.normalize(_0x424377 + "/" + _0x555e08);
    }
  };
  function _0x2a85c5() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x229af2 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x229af2);
        return _0x229af2[0];
      };
    } else if (_0x494d8b) {
      try {
        var _0x18a375 = require("crypto");
        return function () {
          return _0x18a375.randomBytes(1)[0];
        };
      } catch (_0x52b0cc) {}
    }
    return function () {
      _0x5bcf92("randomDevice");
    };
  }
  var _0x5a28b5 = {
    resolve: function () {
      var _0x32dd58 = "";
      var _0x543af1 = false;
      for (var _0x592819 = arguments.length - 1; _0x592819 >= -1 && !_0x543af1; _0x592819--) {
        var _0xfc7923 = _0x592819 >= 0 ? arguments[_0x592819] : _0x415c36.cwd();
        if (typeof _0xfc7923 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0xfc7923) {
          return "";
        }
        _0x32dd58 = _0xfc7923 + "/" + _0x32dd58;
        _0x543af1 = _0xfc7923.charAt(0) === "/";
      }
      _0x32dd58 = _0x2cbe33.normalizeArray(_0x32dd58.split("/").filter(function (_0x4bd1e7) {
        return !!_0x4bd1e7;
      }), !_0x543af1).join("/");
      return (_0x543af1 ? "/" : "") + _0x32dd58 || ".";
    },
    relative: function (_0x8fd1cb, _0x2f2581) {
      _0x8fd1cb = _0x5a28b5.resolve(_0x8fd1cb).substr(1);
      _0x2f2581 = _0x5a28b5.resolve(_0x2f2581).substr(1);
      function _0x3c0389(_0xcb71da) {
        var _0x8eec7 = 0;
        for (; _0x8eec7 < _0xcb71da.length; _0x8eec7++) {
          if (_0xcb71da[_0x8eec7] !== "") {
            break;
          }
        }
        var _0x23ef71 = _0xcb71da.length - 1;
        for (; _0x23ef71 >= 0; _0x23ef71--) {
          if (_0xcb71da[_0x23ef71] !== "") {
            break;
          }
        }
        if (_0x8eec7 > _0x23ef71) {
          return [];
        }
        return _0xcb71da.slice(_0x8eec7, _0x23ef71 - _0x8eec7 + 1);
      }
      var _0x5735a8 = _0x3c0389(_0x8fd1cb.split("/"));
      var _0x65863e = _0x3c0389(_0x2f2581.split("/"));
      var _0x5d6f2e = Math.min(_0x5735a8.length, _0x65863e.length);
      var _0x6434d = _0x5d6f2e;
      for (var _0x56a78a = 0; _0x56a78a < _0x5d6f2e; _0x56a78a++) {
        if (_0x5735a8[_0x56a78a] !== _0x65863e[_0x56a78a]) {
          _0x6434d = _0x56a78a;
          break;
        }
      }
      var _0x53c82b = [];
      for (var _0x56a78a = _0x6434d; _0x56a78a < _0x5735a8.length; _0x56a78a++) {
        _0x53c82b.push("..");
      }
      _0x53c82b = _0x53c82b.concat(_0x65863e.slice(_0x6434d));
      return _0x53c82b.join("/");
    }
  };
  var _0x1862fb = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x362d11, _0x3bbfe8) {
      _0x1862fb.ttys[_0x362d11] = {
        input: [],
        output: [],
        ops: _0x3bbfe8
      };
      _0x415c36.registerDevice(_0x362d11, _0x1862fb.stream_ops);
    },
    stream_ops: {
      open: function (_0x4fde6b) {
        var _0x4d462d = _0x1862fb.ttys[_0x4fde6b.node.rdev];
        if (!_0x4d462d) {
          throw new _0x415c36.ErrnoError(43);
        }
        _0x4fde6b.tty = _0x4d462d;
        _0x4fde6b.seekable = false;
      },
      close: function (_0x9f1b9a) {
        _0x9f1b9a.tty.ops.flush(_0x9f1b9a.tty);
      },
      flush: function (_0x39c077) {
        _0x39c077.tty.ops.flush(_0x39c077.tty);
      },
      read: function (_0x389dea, _0x3266f5, _0x2c9a1c, _0x1952af, _0x3cc2bc) {
        if (!_0x389dea.tty || !_0x389dea.tty.ops.get_char) {
          throw new _0x415c36.ErrnoError(60);
        }
        var _0x59e89e = 0;
        for (var _0x48254a = 0; _0x48254a < _0x1952af; _0x48254a++) {
          var _0x587592;
          try {
            _0x587592 = _0x389dea.tty.ops.get_char(_0x389dea.tty);
          } catch (_0x29afad) {
            throw new _0x415c36.ErrnoError(29);
          }
          if (_0x587592 === undefined && _0x59e89e === 0) {
            throw new _0x415c36.ErrnoError(6);
          }
          if (_0x587592 === null || _0x587592 === undefined) {
            break;
          }
          _0x59e89e++;
          _0x3266f5[_0x2c9a1c + _0x48254a] = _0x587592;
        }
        if (_0x59e89e) {
          _0x389dea.node.timestamp = Date.now();
        }
        return _0x59e89e;
      },
      write: function (_0x24f6da, _0x161775, _0x21809d, _0x1e7c52, _0x3ee4ef) {
        if (!_0x24f6da.tty || !_0x24f6da.tty.ops.put_char) {
          throw new _0x415c36.ErrnoError(60);
        }
        try {
          for (var _0x5376d5 = 0; _0x5376d5 < _0x1e7c52; _0x5376d5++) {
            _0x24f6da.tty.ops.put_char(_0x24f6da.tty, _0x161775[_0x21809d + _0x5376d5]);
          }
        } catch (_0x2989fc) {
          throw new _0x415c36.ErrnoError(29);
        }
        if (_0x1e7c52) {
          _0x24f6da.node.timestamp = Date.now();
        }
        return _0x5376d5;
      }
    },
    default_tty_ops: {
      get_char: function (_0x510771) {
        if (!_0x510771.input.length) {
          var _0x5add32 = null;
          if (_0x494d8b) {
            var _0x5cef16 = 256;
            var _0x28ff89 = Buffer.alloc ? Buffer.alloc(_0x5cef16) : new Buffer(_0x5cef16);
            var _0x2b9bb7 = 0;
            try {
              _0x2b9bb7 = _0x5d324f.readSync(process.stdin.fd, _0x28ff89, 0, _0x5cef16, null);
            } catch (_0x117b62) {
              if (_0x117b62.toString().includes("EOF")) {
                _0x2b9bb7 = 0;
              } else {
                throw _0x117b62;
              }
            }
            if (_0x2b9bb7 > 0) {
              _0x5add32 = _0x28ff89.slice(0, _0x2b9bb7).toString("utf-8");
            } else {
              _0x5add32 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x5add32 = window.prompt("Input: ");
            if (_0x5add32 !== null) {
              _0x5add32 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x5add32 = readline();
            if (_0x5add32 !== null) {
              _0x5add32 += "\n";
            }
          }
          if (!_0x5add32) {
            return null;
          }
          _0x510771.input = _0x380359(_0x5add32, true);
        }
        return _0x510771.input.shift();
      },
      put_char: function (_0x497101, _0x5450eb) {
        if (_0x5450eb === null || _0x5450eb === 10) {
          _0xed26c0(_0x51bdc9(_0x497101.output, 0));
          _0x497101.output = [];
        } else if (_0x5450eb != 0) {
          _0x497101.output.push(_0x5450eb);
        }
      },
      flush: function (_0x21577c) {
        if (_0x21577c.output && _0x21577c.output.length > 0) {
          _0xed26c0(_0x51bdc9(_0x21577c.output, 0));
          _0x21577c.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x4c0f94, _0x4e229a) {
        if (_0x4e229a === null || _0x4e229a === 10) {
          _0x38748e(_0x51bdc9(_0x4c0f94.output, 0));
          _0x4c0f94.output = [];
        } else if (_0x4e229a != 0) {
          _0x4c0f94.output.push(_0x4e229a);
        }
      },
      flush: function (_0x181d4a) {
        if (_0x181d4a.output && _0x181d4a.output.length > 0) {
          _0x38748e(_0x51bdc9(_0x181d4a.output, 0));
          _0x181d4a.output = [];
        }
      }
    }
  };
  function _0x12e4ad(_0x1fde92) {
    var _0x129d83 = _0x55b434(_0x1fde92, 65536);
    var _0x1073e7 = _0x25ed17(_0x129d83);
    while (_0x1fde92 < _0x129d83) {
      _0xf10f52[_0x1073e7 + _0x1fde92++] = 0;
    }
    return _0x1073e7;
  }
  var _0x548abe = {
    ops_table: null,
    mount: function (_0xe2625f) {
      return _0x548abe.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x3073fa, _0x350ab9, _0x349c65, _0x4c4307) {
      if (_0x415c36.isBlkdev(_0x349c65) || _0x415c36.isFIFO(_0x349c65)) {
        throw new _0x415c36.ErrnoError(63);
      }
      if (!_0x548abe.ops_table) {
        _0x548abe.ops_table = {
          dir: {
            node: {
              getattr: _0x548abe.node_ops.getattr,
              setattr: _0x548abe.node_ops.setattr,
              lookup: _0x548abe.node_ops.lookup,
              mknod: _0x548abe.node_ops.mknod,
              rename: _0x548abe.node_ops.rename,
              unlink: _0x548abe.node_ops.unlink,
              rmdir: _0x548abe.node_ops.rmdir,
              readdir: _0x548abe.node_ops.readdir,
              symlink: _0x548abe.node_ops.symlink
            },
            stream: {
              llseek: _0x548abe.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x548abe.node_ops.getattr,
              setattr: _0x548abe.node_ops.setattr
            },
            stream: {
              llseek: _0x548abe.stream_ops.llseek,
              read: _0x548abe.stream_ops.read,
              write: _0x548abe.stream_ops.write,
              allocate: _0x548abe.stream_ops.allocate,
              mmap: _0x548abe.stream_ops.mmap,
              msync: _0x548abe.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x548abe.node_ops.getattr,
              setattr: _0x548abe.node_ops.setattr,
              readlink: _0x548abe.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x548abe.node_ops.getattr,
              setattr: _0x548abe.node_ops.setattr
            },
            stream: _0x415c36.chrdev_stream_ops
          }
        };
      }
      var _0x44ca9c = _0x415c36.createNode(_0x3073fa, _0x350ab9, _0x349c65, _0x4c4307);
      if (_0x415c36.isDir(_0x44ca9c.mode)) {
        _0x44ca9c.node_ops = _0x548abe.ops_table.dir.node;
        _0x44ca9c.stream_ops = _0x548abe.ops_table.dir.stream;
        _0x44ca9c.contents = {};
      } else if (_0x415c36.isFile(_0x44ca9c.mode)) {
        _0x44ca9c.node_ops = _0x548abe.ops_table.file.node;
        _0x44ca9c.stream_ops = _0x548abe.ops_table.file.stream;
        _0x44ca9c.usedBytes = 0;
        _0x44ca9c.contents = null;
      } else if (_0x415c36.isLink(_0x44ca9c.mode)) {
        _0x44ca9c.node_ops = _0x548abe.ops_table.link.node;
        _0x44ca9c.stream_ops = _0x548abe.ops_table.link.stream;
      } else if (_0x415c36.isChrdev(_0x44ca9c.mode)) {
        _0x44ca9c.node_ops = _0x548abe.ops_table.chrdev.node;
        _0x44ca9c.stream_ops = _0x548abe.ops_table.chrdev.stream;
      }
      _0x44ca9c.timestamp = Date.now();
      if (_0x3073fa) {
        _0x3073fa.contents[_0x350ab9] = _0x44ca9c;
        _0x3073fa.timestamp = _0x44ca9c.timestamp;
      }
      return _0x44ca9c;
    },
    getFileDataAsTypedArray: function (_0x5358ec) {
      if (!_0x5358ec.contents) {
        return new Uint8Array(0);
      }
      if (_0x5358ec.contents.subarray) {
        return _0x5358ec.contents.subarray(0, _0x5358ec.usedBytes);
      }
      return new Uint8Array(_0x5358ec.contents);
    },
    expandFileStorage: function (_0x349acb, _0x532cbc) {
      var _0x2936c0 = _0x349acb.contents ? _0x349acb.contents.length : 0;
      if (_0x2936c0 >= _0x532cbc) {
        return;
      }
      var _0x4a036e = 1048576;
      _0x532cbc = Math.max(_0x532cbc, _0x2936c0 * (_0x2936c0 < _0x4a036e ? 2 : 1.125) >>> 0);
      if (_0x2936c0 != 0) {
        _0x532cbc = Math.max(_0x532cbc, 256);
      }
      var _0x4ecbb8 = _0x349acb.contents;
      _0x349acb.contents = new Uint8Array(_0x532cbc);
      if (_0x349acb.usedBytes > 0) {
        _0x349acb.contents.set(_0x4ecbb8.subarray(0, _0x349acb.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x56ac6f, _0x3a7720) {
      if (_0x56ac6f.usedBytes == _0x3a7720) {
        return;
      }
      if (_0x3a7720 == 0) {
        _0x56ac6f.contents = null;
        _0x56ac6f.usedBytes = 0;
      } else {
        var _0x567db8 = _0x56ac6f.contents;
        _0x56ac6f.contents = new Uint8Array(_0x3a7720);
        if (_0x567db8) {
          _0x56ac6f.contents.set(_0x567db8.subarray(0, Math.min(_0x3a7720, _0x56ac6f.usedBytes)));
        }
        _0x56ac6f.usedBytes = _0x3a7720;
      }
    },
    node_ops: {
      getattr: function (_0x2ea106) {
        var _0x5abfd4 = {};
        _0x5abfd4.dev = _0x415c36.isChrdev(_0x2ea106.mode) ? _0x2ea106.id : 1;
        _0x5abfd4.ino = _0x2ea106.id;
        _0x5abfd4.mode = _0x2ea106.mode;
        _0x5abfd4.nlink = 1;
        _0x5abfd4.uid = 0;
        _0x5abfd4.gid = 0;
        _0x5abfd4.rdev = _0x2ea106.rdev;
        if (_0x415c36.isDir(_0x2ea106.mode)) {
          _0x5abfd4.size = 4096;
        } else if (_0x415c36.isFile(_0x2ea106.mode)) {
          _0x5abfd4.size = _0x2ea106.usedBytes;
        } else if (_0x415c36.isLink(_0x2ea106.mode)) {
          _0x5abfd4.size = _0x2ea106.link.length;
        } else {
          _0x5abfd4.size = 0;
        }
        _0x5abfd4.atime = new Date(_0x2ea106.timestamp);
        _0x5abfd4.mtime = new Date(_0x2ea106.timestamp);
        _0x5abfd4.ctime = new Date(_0x2ea106.timestamp);
        _0x5abfd4.blksize = 4096;
        _0x5abfd4.blocks = Math.ceil(_0x5abfd4.size / _0x5abfd4.blksize);
        return _0x5abfd4;
      },
      setattr: function (_0x3f9695, _0x182339) {
        if (_0x182339.mode !== undefined) {
          _0x3f9695.mode = _0x182339.mode;
        }
        if (_0x182339.timestamp !== undefined) {
          _0x3f9695.timestamp = _0x182339.timestamp;
        }
        if (_0x182339.size !== undefined) {
          _0x548abe.resizeFileStorage(_0x3f9695, _0x182339.size);
        }
      },
      lookup: function (_0x1b2d47, _0x19bb08) {
        throw _0x415c36.genericErrors[44];
      },
      mknod: function (_0x501af1, _0x4c53c4, _0x49080c, _0x1d613b) {
        return _0x548abe.createNode(_0x501af1, _0x4c53c4, _0x49080c, _0x1d613b);
      },
      rename: function (_0x1407f6, _0x8ba48, _0x398f29) {
        if (_0x415c36.isDir(_0x1407f6.mode)) {
          var _0x4ecff6;
          try {
            _0x4ecff6 = _0x415c36.lookupNode(_0x8ba48, _0x398f29);
          } catch (_0x52f713) {}
          if (_0x4ecff6) {
            for (var _0x193326 in _0x4ecff6.contents) {
              throw new _0x415c36.ErrnoError(55);
            }
          }
        }
        delete _0x1407f6.parent.contents[_0x1407f6.name];
        _0x1407f6.parent.timestamp = Date.now();
        _0x1407f6.name = _0x398f29;
        _0x8ba48.contents[_0x398f29] = _0x1407f6;
        _0x8ba48.timestamp = _0x1407f6.parent.timestamp;
        _0x1407f6.parent = _0x8ba48;
      },
      unlink: function (_0x47f960, _0x2465c4) {
        delete _0x47f960.contents[_0x2465c4];
        _0x47f960.timestamp = Date.now();
      },
      rmdir: function (_0xc0b91a, _0x266592) {
        var _0x31977f = _0x415c36.lookupNode(_0xc0b91a, _0x266592);
        for (var _0x12fce8 in _0x31977f.contents) {
          throw new _0x415c36.ErrnoError(55);
        }
        delete _0xc0b91a.contents[_0x266592];
        _0xc0b91a.timestamp = Date.now();
      },
      readdir: function (_0x287a4e) {
        var _0x2b2838 = [".", ".."];
        for (var _0x290519 in _0x287a4e.contents) {
          if (!_0x287a4e.contents.hasOwnProperty(_0x290519)) {
            continue;
          }
          _0x2b2838.push(_0x290519);
        }
        return _0x2b2838;
      },
      symlink: function (_0x1411a7, _0x3224ce, _0x1d9ebf) {
        var _0x1c542a = _0x548abe.createNode(_0x1411a7, _0x3224ce, 41471, 0);
        _0x1c542a.link = _0x1d9ebf;
        return _0x1c542a;
      },
      readlink: function (_0x3c5825) {
        if (!_0x415c36.isLink(_0x3c5825.mode)) {
          throw new _0x415c36.ErrnoError(28);
        }
        return _0x3c5825.link;
      }
    },
    stream_ops: {
      read: function (_0x3c3bee, _0x1b6b4f, _0x57ea71, _0x184bc8, _0x23dde4) {
        var _0x413012 = _0x3c3bee.node.contents;
        if (_0x23dde4 >= _0x3c3bee.node.usedBytes) {
          return 0;
        }
        var _0x3186dc = Math.min(_0x3c3bee.node.usedBytes - _0x23dde4, _0x184bc8);
        if (_0x3186dc > 8 && _0x413012.subarray) {
          _0x1b6b4f.set(_0x413012.subarray(_0x23dde4, _0x23dde4 + _0x3186dc), _0x57ea71);
        } else {
          for (var _0x354e4c = 0; _0x354e4c < _0x3186dc; _0x354e4c++) {
            _0x1b6b4f[_0x57ea71 + _0x354e4c] = _0x413012[_0x23dde4 + _0x354e4c];
          }
        }
        return _0x3186dc;
      },
      write: function (_0x1b98b7, _0x3f4ddb, _0x38f627, _0x1146af, _0x2f4d7c, _0x12584e) {
        if (_0x3f4ddb.buffer === _0xf10f52.buffer) {
          _0x12584e = false;
        }
        if (!_0x1146af) {
          return 0;
        }
        var _0x52cd89 = _0x1b98b7.node;
        _0x52cd89.timestamp = Date.now();
        if (_0x3f4ddb.subarray && (!_0x52cd89.contents || _0x52cd89.contents.subarray)) {
          if (_0x12584e) {
            _0x52cd89.contents = _0x3f4ddb.subarray(_0x38f627, _0x38f627 + _0x1146af);
            _0x52cd89.usedBytes = _0x1146af;
            return _0x1146af;
          } else if (_0x52cd89.usedBytes === 0 && _0x2f4d7c === 0) {
            _0x52cd89.contents = _0x3f4ddb.slice(_0x38f627, _0x38f627 + _0x1146af);
            _0x52cd89.usedBytes = _0x1146af;
            return _0x1146af;
          } else if (_0x2f4d7c + _0x1146af <= _0x52cd89.usedBytes) {
            _0x52cd89.contents.set(_0x3f4ddb.subarray(_0x38f627, _0x38f627 + _0x1146af), _0x2f4d7c);
            return _0x1146af;
          }
        }
        _0x548abe.expandFileStorage(_0x52cd89, _0x2f4d7c + _0x1146af);
        if (_0x52cd89.contents.subarray && _0x3f4ddb.subarray) {
          _0x52cd89.contents.set(_0x3f4ddb.subarray(_0x38f627, _0x38f627 + _0x1146af), _0x2f4d7c);
        } else {
          for (var _0x4d3e3c = 0; _0x4d3e3c < _0x1146af; _0x4d3e3c++) {
            _0x52cd89.contents[_0x2f4d7c + _0x4d3e3c] = _0x3f4ddb[_0x38f627 + _0x4d3e3c];
          }
        }
        _0x52cd89.usedBytes = Math.max(_0x52cd89.usedBytes, _0x2f4d7c + _0x1146af);
        return _0x1146af;
      },
      llseek: function (_0x20cd0a, _0x5cb63d, _0x54b959) {
        var _0x36d81f = _0x5cb63d;
        if (_0x54b959 === 1) {
          _0x36d81f += _0x20cd0a.position;
        } else if (_0x54b959 === 2) {
          if (_0x415c36.isFile(_0x20cd0a.node.mode)) {
            _0x36d81f += _0x20cd0a.node.usedBytes;
          }
        }
        if (_0x36d81f < 0) {
          throw new _0x415c36.ErrnoError(28);
        }
        return _0x36d81f;
      },
      allocate: function (_0x4789d7, _0xbe813c, _0x3618e2) {
        _0x548abe.expandFileStorage(_0x4789d7.node, _0xbe813c + _0x3618e2);
        _0x4789d7.node.usedBytes = Math.max(_0x4789d7.node.usedBytes, _0xbe813c + _0x3618e2);
      },
      mmap: function (_0x5c3dbf, _0x39c500, _0x4bd96f, _0x25b413, _0x428c36, _0x52cad3) {
        if (_0x39c500 !== 0) {
          throw new _0x415c36.ErrnoError(28);
        }
        if (!_0x415c36.isFile(_0x5c3dbf.node.mode)) {
          throw new _0x415c36.ErrnoError(43);
        }
        var _0x1bbd98;
        var _0x4362fc;
        var _0x1ddfcc = _0x5c3dbf.node.contents;
        if (!(_0x52cad3 & 2) && _0x1ddfcc.buffer === _0x5da3a0) {
          _0x4362fc = false;
          _0x1bbd98 = _0x1ddfcc.byteOffset;
        } else {
          if (_0x25b413 > 0 || _0x25b413 + _0x4bd96f < _0x1ddfcc.length) {
            if (_0x1ddfcc.subarray) {
              _0x1ddfcc = _0x1ddfcc.subarray(_0x25b413, _0x25b413 + _0x4bd96f);
            } else {
              _0x1ddfcc = Array.prototype.slice.call(_0x1ddfcc, _0x25b413, _0x25b413 + _0x4bd96f);
            }
          }
          _0x4362fc = true;
          _0x1bbd98 = _0x12e4ad(_0x4bd96f);
          if (!_0x1bbd98) {
            throw new _0x415c36.ErrnoError(48);
          }
          _0xf10f52.set(_0x1ddfcc, _0x1bbd98);
        }
        return {
          ptr: _0x1bbd98,
          allocated: _0x4362fc
        };
      },
      msync: function (_0xa3ce79, _0x5e405f, _0x4d60cb, _0x57e92e, _0x3e760e) {
        if (!_0x415c36.isFile(_0xa3ce79.node.mode)) {
          throw new _0x415c36.ErrnoError(43);
        }
        if (_0x3e760e & 2) {
          return 0;
        }
        var _0x44e427 = _0x548abe.stream_ops.write(_0xa3ce79, _0x5e405f, 0, _0x57e92e, _0x4d60cb, false);
        return 0;
      }
    }
  };
  var _0x3116fa = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x4e4b80 = null;
      if (typeof window === "object") {
        _0x4e4b80 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x18a873(_0x4e4b80, "IDBFS used, but indexedDB not supported");
      return _0x4e4b80;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x44cd7e) {
      return _0x548abe.mount.apply(null, arguments);
    },
    syncfs: function (_0x11103b, _0x24980d, _0x209da6) {
      _0x3116fa.getLocalSet(_0x11103b, function (_0x3997a4, _0x1ca9a0) {
        if (_0x3997a4) {
          return _0x209da6(_0x3997a4);
        }
        _0x3116fa.getRemoteSet(_0x11103b, function (_0x35b159, _0x2677ef) {
          if (_0x35b159) {
            return _0x209da6(_0x35b159);
          }
          var _0x28296c = _0x24980d ? _0x2677ef : _0x1ca9a0;
          var _0xc4a935 = _0x24980d ? _0x1ca9a0 : _0x2677ef;
          _0x3116fa.reconcile(_0x28296c, _0xc4a935, _0x209da6);
        });
      });
    },
    getDB: function (_0x4d4813, _0x577110) {
      var _0x19def8 = _0x3116fa.dbs[_0x4d4813];
      if (_0x19def8) {
        return _0x577110(null, _0x19def8);
      }
      var _0x39771a;
      try {
        _0x39771a = _0x3116fa.indexedDB().open(_0x4d4813, _0x3116fa.DB_VERSION);
      } catch (_0x28e223) {
        return _0x577110(_0x28e223);
      }
      if (!_0x39771a) {
        return _0x577110("Unable to connect to IndexedDB");
      }
      _0x39771a.onupgradeneeded = function (_0x528c80) {
        var _0x2bfc0a = _0x528c80.target.result;
        var _0x5491ea = _0x528c80.target.transaction;
        var _0x484362;
        if (_0x2bfc0a.objectStoreNames.contains(_0x3116fa.DB_STORE_NAME)) {
          _0x484362 = _0x5491ea.objectStore(_0x3116fa.DB_STORE_NAME);
        } else {
          _0x484362 = _0x2bfc0a.createObjectStore(_0x3116fa.DB_STORE_NAME);
        }
        if (!_0x484362.indexNames.contains("timestamp")) {
          _0x484362.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x39771a.onsuccess = function () {
        _0x19def8 = _0x39771a.result;
        _0x3116fa.dbs[_0x4d4813] = _0x19def8;
        _0x577110(null, _0x19def8);
      };
      _0x39771a.onerror = function (_0xb7c019) {
        _0x577110(this.error);
        _0xb7c019.preventDefault();
      };
    },
    getLocalSet: function (_0x1affa2, _0xb41446) {
      var _0xcad5b = {};
      function _0x18c2d9(_0x59500c) {
        return _0x59500c !== "." && _0x59500c !== "..";
      }
      function _0xff5781(_0xefe4f2) {
        return function (_0x11f762) {
          return _0x2cbe33.join2(_0xefe4f2, _0x11f762);
        };
      }
      var _0x1652ff = _0x415c36.readdir(_0x1affa2.mountpoint).filter(_0x18c2d9).map(_0xff5781(_0x1affa2.mountpoint));
      while (_0x1652ff.length) {
        var _0x16e24b = _0x1652ff.pop();
        var _0x306423;
        try {
          _0x306423 = _0x415c36.stat(_0x16e24b);
        } catch (_0x2e88f6) {
          return _0xb41446(_0x2e88f6);
        }
        if (_0x415c36.isDir(_0x306423.mode)) {
          _0x1652ff.push.apply(_0x1652ff, _0x415c36.readdir(_0x16e24b).filter(_0x18c2d9).map(_0xff5781(_0x16e24b)));
        }
        _0xcad5b[_0x16e24b] = {
          timestamp: _0x306423.mtime
        };
      }
      return _0xb41446(null, {
        type: "local",
        entries: _0xcad5b
      });
    },
    getRemoteSet: function (_0xa73af7, _0x43b6f1) {
      var _0x49501e = {};
      _0x3116fa.getDB(_0xa73af7.mountpoint, function (_0x44c548, _0x1a661e) {
        if (_0x44c548) {
          return _0x43b6f1(_0x44c548);
        }
        try {
          var _0x39edda = _0x1a661e.transaction([_0x3116fa.DB_STORE_NAME], "readonly");
          _0x39edda.onerror = function (_0x4cf668) {
            _0x43b6f1(this.error);
            _0x4cf668.preventDefault();
          };
          var _0x22c077 = _0x39edda.objectStore(_0x3116fa.DB_STORE_NAME);
          var _0x571e12 = _0x22c077.index("timestamp");
          _0x571e12.openKeyCursor().onsuccess = function (_0x149ca9) {
            var _0x5afd81 = _0x149ca9.target.result;
            if (!_0x5afd81) {
              return _0x43b6f1(null, {
                type: "remote",
                db: _0x1a661e,
                entries: _0x49501e
              });
            }
            _0x49501e[_0x5afd81.primaryKey] = {
              timestamp: _0x5afd81.key
            };
            _0x5afd81.continue();
          };
        } catch (_0x5427f2) {
          return _0x43b6f1(_0x5427f2);
        }
      });
    },
    loadLocalEntry: function (_0x15e853, _0x1af860) {
      var _0x17a178;
      var _0x53c4f7;
      try {
        var _0x167e8f = _0x415c36.lookupPath(_0x15e853);
        _0x53c4f7 = _0x167e8f.node;
        _0x17a178 = _0x415c36.stat(_0x15e853);
      } catch (_0x3687d1) {
        return _0x1af860(_0x3687d1);
      }
      if (_0x415c36.isDir(_0x17a178.mode)) {
        return _0x1af860(null, {
          timestamp: _0x17a178.mtime,
          mode: _0x17a178.mode
        });
      } else if (_0x415c36.isFile(_0x17a178.mode)) {
        _0x53c4f7.contents = _0x548abe.getFileDataAsTypedArray(_0x53c4f7);
        return _0x1af860(null, {
          timestamp: _0x17a178.mtime,
          mode: _0x17a178.mode,
          contents: _0x53c4f7.contents
        });
      } else {
        return _0x1af860(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x525d51, _0x442dd8, _0x4d54f2) {
      try {
        if (_0x415c36.isDir(_0x442dd8.mode)) {
          _0x415c36.mkdirTree(_0x525d51, _0x442dd8.mode);
        } else if (_0x415c36.isFile(_0x442dd8.mode)) {
          _0x415c36.writeFile(_0x525d51, _0x442dd8.contents, {
            canOwn: true
          });
        } else {
          return _0x4d54f2(new Error("node type not supported"));
        }
        _0x415c36.chmod(_0x525d51, _0x442dd8.mode);
        _0x415c36.utime(_0x525d51, _0x442dd8.timestamp, _0x442dd8.timestamp);
      } catch (_0x4ae397) {
        return _0x4d54f2(_0x4ae397);
      }
      _0x4d54f2(null);
    },
    removeLocalEntry: function (_0x53cb3b, _0x45832e) {
      try {
        var _0x252fb4 = _0x415c36.lookupPath(_0x53cb3b);
        var _0x2c460b = _0x415c36.stat(_0x53cb3b);
        if (_0x415c36.isDir(_0x2c460b.mode)) {
          _0x415c36.rmdir(_0x53cb3b);
        } else if (_0x415c36.isFile(_0x2c460b.mode)) {
          _0x415c36.unlink(_0x53cb3b);
        }
      } catch (_0x42ace6) {
        return _0x45832e(_0x42ace6);
      }
      _0x45832e(null);
    },
    loadRemoteEntry: function (_0x4bed5d, _0x43cae4, _0x2b8ea6) {
      var _0x17f577 = _0x4bed5d.get(_0x43cae4);
      _0x17f577.onsuccess = function (_0x270d05) {
        _0x2b8ea6(null, _0x270d05.target.result);
      };
      _0x17f577.onerror = function (_0x1afe21) {
        _0x2b8ea6(this.error);
        _0x1afe21.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x5ee30c, _0xffd25d, _0xb99930, _0x53a403) {
      var _0x39e907 = _0x5ee30c.put(_0xb99930, _0xffd25d);
      _0x39e907.onsuccess = function () {
        _0x53a403(null);
      };
      _0x39e907.onerror = function (_0x5bd772) {
        _0x53a403(this.error);
        _0x5bd772.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x2c441c, _0x2e265b, _0x2fbbc2) {
      var _0x16e21a = _0x2c441c.delete(_0x2e265b);
      _0x16e21a.onsuccess = function () {
        _0x2fbbc2(null);
      };
      _0x16e21a.onerror = function (_0x28f9d1) {
        _0x2fbbc2(this.error);
        _0x28f9d1.preventDefault();
      };
    },
    reconcile: function (_0x5e2c70, _0x3fbd99, _0x3275cb) {
      var _0x2219c8 = 0;
      var _0x370cfa = [];
      Object.keys(_0x5e2c70.entries).forEach(function (_0x168138) {
        var _0x12d36d = _0x5e2c70.entries[_0x168138];
        var _0x594c39 = _0x3fbd99.entries[_0x168138];
        if (!_0x594c39 || _0x12d36d.timestamp.getTime() != _0x594c39.timestamp.getTime()) {
          _0x370cfa.push(_0x168138);
          _0x2219c8++;
        }
      });
      var _0x560865 = [];
      Object.keys(_0x3fbd99.entries).forEach(function (_0x1081fc) {
        if (!_0x5e2c70.entries[_0x1081fc]) {
          _0x560865.push(_0x1081fc);
          _0x2219c8++;
        }
      });
      if (!_0x2219c8) {
        return _0x3275cb(null);
      }
      var _0x149845 = false;
      var _0x2139a8 = _0x5e2c70.type === "remote" ? _0x5e2c70.db : _0x3fbd99.db;
      var _0x1bb8ac = _0x2139a8.transaction([_0x3116fa.DB_STORE_NAME], "readwrite");
      var _0x365c0d = _0x1bb8ac.objectStore(_0x3116fa.DB_STORE_NAME);
      function _0x2e807f(_0x37ac49) {
        if (_0x37ac49 && !_0x149845) {
          _0x149845 = true;
          return _0x3275cb(_0x37ac49);
        }
      }
      _0x1bb8ac.onerror = function (_0x341291) {
        _0x2e807f(this.error);
        _0x341291.preventDefault();
      };
      _0x1bb8ac.oncomplete = function (_0x22e221) {
        if (!_0x149845) {
          _0x3275cb(null);
        }
      };
      _0x370cfa.sort().forEach(function (_0x2d7191) {
        if (_0x3fbd99.type === "local") {
          _0x3116fa.loadRemoteEntry(_0x365c0d, _0x2d7191, function (_0x6b5feb, _0x5b221f) {
            if (_0x6b5feb) {
              return _0x2e807f(_0x6b5feb);
            }
            _0x3116fa.storeLocalEntry(_0x2d7191, _0x5b221f, _0x2e807f);
          });
        } else {
          _0x3116fa.loadLocalEntry(_0x2d7191, function (_0x286189, _0x1707a5) {
            if (_0x286189) {
              return _0x2e807f(_0x286189);
            }
            _0x3116fa.storeRemoteEntry(_0x365c0d, _0x2d7191, _0x1707a5, _0x2e807f);
          });
        }
      });
      _0x560865.sort().reverse().forEach(function (_0x248c66) {
        if (_0x3fbd99.type === "local") {
          _0x3116fa.removeLocalEntry(_0x248c66, _0x2e807f);
        } else {
          _0x3116fa.removeRemoteEntry(_0x365c0d, _0x248c66, _0x2e807f);
        }
      });
    }
  };
  var _0x415c36 = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    trackingDelegate: {},
    tracking: {
      openFlags: {
        READ: 1,
        WRITE: 2
      }
    },
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: function (_0xa8aafa, _0x263b60) {
      _0xa8aafa = _0x5a28b5.resolve(_0x415c36.cwd(), _0xa8aafa);
      _0x263b60 = _0x263b60 || {};
      if (!_0xa8aafa) {
        return {
          path: "",
          node: null
        };
      }
      var _0x585330 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x430d6d in _0x585330) {
        if (_0x263b60[_0x430d6d] === undefined) {
          _0x263b60[_0x430d6d] = _0x585330[_0x430d6d];
        }
      }
      if (_0x263b60.recurse_count > 8) {
        throw new _0x415c36.ErrnoError(32);
      }
      var _0x5d6b93 = _0x2cbe33.normalizeArray(_0xa8aafa.split("/").filter(function (_0x30daff) {
        return !!_0x30daff;
      }), false);
      var _0x2aa069 = _0x415c36.root;
      var _0x500466 = "/";
      for (var _0x32e4cf = 0; _0x32e4cf < _0x5d6b93.length; _0x32e4cf++) {
        var _0x54d353 = _0x32e4cf === _0x5d6b93.length - 1;
        if (_0x54d353 && _0x263b60.parent) {
          break;
        }
        _0x2aa069 = _0x415c36.lookupNode(_0x2aa069, _0x5d6b93[_0x32e4cf]);
        _0x500466 = _0x2cbe33.join2(_0x500466, _0x5d6b93[_0x32e4cf]);
        if (_0x415c36.isMountpoint(_0x2aa069)) {
          if (!_0x54d353 || _0x54d353 && _0x263b60.follow_mount) {
            _0x2aa069 = _0x2aa069.mounted.root;
          }
        }
        if (!_0x54d353 || _0x263b60.follow) {
          var _0x1d9347 = 0;
          while (_0x415c36.isLink(_0x2aa069.mode)) {
            var _0x3768a4 = _0x415c36.readlink(_0x500466);
            _0x500466 = _0x5a28b5.resolve(_0x2cbe33.dirname(_0x500466), _0x3768a4);
            var _0x14f187 = _0x415c36.lookupPath(_0x500466, {
              recurse_count: _0x263b60.recurse_count
            });
            _0x2aa069 = _0x14f187.node;
            if (_0x1d9347++ > 40) {
              throw new _0x415c36.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x500466,
        node: _0x2aa069
      };
    },
    getPath: function (_0x16bdb2) {
      var _0x1884ae;
      while (true) {
        if (_0x415c36.isRoot(_0x16bdb2)) {
          var _0x17fd36 = _0x16bdb2.mount.mountpoint;
          if (!_0x1884ae) {
            return _0x17fd36;
          }
          if (_0x17fd36[_0x17fd36.length - 1] !== "/") {
            return _0x17fd36 + "/" + _0x1884ae;
          } else {
            return _0x17fd36 + _0x1884ae;
          }
        }
        _0x1884ae = _0x1884ae ? _0x16bdb2.name + "/" + _0x1884ae : _0x16bdb2.name;
        _0x16bdb2 = _0x16bdb2.parent;
      }
    },
    hashName: function (_0x2228e4, _0x49273c) {
      var _0x7fa27a = 0;
      for (var _0x397166 = 0; _0x397166 < _0x49273c.length; _0x397166++) {
        _0x7fa27a = (_0x7fa27a << 5) - _0x7fa27a + _0x49273c.charCodeAt(_0x397166) | 0;
      }
      return (_0x2228e4 + _0x7fa27a >>> 0) % _0x415c36.nameTable.length;
    },
    hashAddNode: function (_0x431b47) {
      var _0x23aa90 = _0x415c36.hashName(_0x431b47.parent.id, _0x431b47.name);
      _0x431b47.name_next = _0x415c36.nameTable[_0x23aa90];
      _0x415c36.nameTable[_0x23aa90] = _0x431b47;
    },
    hashRemoveNode: function (_0x354d9f) {
      var _0x47bf1b = _0x415c36.hashName(_0x354d9f.parent.id, _0x354d9f.name);
      if (_0x415c36.nameTable[_0x47bf1b] === _0x354d9f) {
        _0x415c36.nameTable[_0x47bf1b] = _0x354d9f.name_next;
      } else {
        var _0x1f9054 = _0x415c36.nameTable[_0x47bf1b];
        while (_0x1f9054) {
          if (_0x1f9054.name_next === _0x354d9f) {
            _0x1f9054.name_next = _0x354d9f.name_next;
            break;
          }
          _0x1f9054 = _0x1f9054.name_next;
        }
      }
    },
    lookupNode: function (_0x6d7ca0, _0x153bcf) {
      var _0x3ebaff = _0x415c36.mayLookup(_0x6d7ca0);
      if (_0x3ebaff) {
        throw new _0x415c36.ErrnoError(_0x3ebaff, _0x6d7ca0);
      }
      var _0x205aca = _0x415c36.hashName(_0x6d7ca0.id, _0x153bcf);
      for (var _0x24afc1 = _0x415c36.nameTable[_0x205aca]; _0x24afc1; _0x24afc1 = _0x24afc1.name_next) {
        var _0x2c6a49 = _0x24afc1.name;
        if (_0x24afc1.parent.id === _0x6d7ca0.id && _0x2c6a49 === _0x153bcf) {
          return _0x24afc1;
        }
      }
      return _0x415c36.lookup(_0x6d7ca0, _0x153bcf);
    },
    createNode: function (_0x4f09ff, _0x4d2cbc, _0x225a6c, _0x967a95) {
      var _0x235551 = new _0x415c36.FSNode(_0x4f09ff, _0x4d2cbc, _0x225a6c, _0x967a95);
      _0x415c36.hashAddNode(_0x235551);
      return _0x235551;
    },
    destroyNode: function (_0x126c35) {
      _0x415c36.hashRemoveNode(_0x126c35);
    },
    isRoot: function (_0x2a4b03) {
      return _0x2a4b03 === _0x2a4b03.parent;
    },
    isMountpoint: function (_0x591b81) {
      return !!_0x591b81.mounted;
    },
    isFile: function (_0x10a719) {
      return (_0x10a719 & 61440) === 32768;
    },
    isDir: function (_0x55dbdd) {
      return (_0x55dbdd & 61440) === 16384;
    },
    isLink: function (_0x55cb72) {
      return (_0x55cb72 & 61440) === 40960;
    },
    isChrdev: function (_0x470a53) {
      return (_0x470a53 & 61440) === 8192;
    },
    isBlkdev: function (_0x5f2205) {
      return (_0x5f2205 & 61440) === 24576;
    },
    isFIFO: function (_0x2a9ff5) {
      return (_0x2a9ff5 & 61440) === 4096;
    },
    isSocket: function (_0x430353) {
      return (_0x430353 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x4d6e2a) {
      var _0x1ad284 = _0x415c36.flagModes[_0x4d6e2a];
      if (typeof _0x1ad284 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x4d6e2a);
      }
      return _0x1ad284;
    },
    flagsToPermissionString: function (_0x40b90b) {
      var _0x4d24b7 = ["r", "w", "rw"][_0x40b90b & 3];
      if (_0x40b90b & 512) {
        _0x4d24b7 += "w";
      }
      return _0x4d24b7;
    },
    nodePermissions: function (_0x226483, _0x1c4d81) {
      if (_0x415c36.ignorePermissions) {
        return 0;
      }
      if (_0x1c4d81.includes("r") && !(_0x226483.mode & 292)) {
        return 2;
      } else if (_0x1c4d81.includes("w") && !(_0x226483.mode & 146)) {
        return 2;
      } else if (_0x1c4d81.includes("x") && !(_0x226483.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0xa976c0) {
      var _0x33b23a = _0x415c36.nodePermissions(_0xa976c0, "x");
      if (_0x33b23a) {
        return _0x33b23a;
      }
      if (!_0xa976c0.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x4b5bc9, _0x23ec5a) {
      try {
        var _0x36e4c5 = _0x415c36.lookupNode(_0x4b5bc9, _0x23ec5a);
        return 20;
      } catch (_0x112966) {}
      return _0x415c36.nodePermissions(_0x4b5bc9, "wx");
    },
    mayDelete: function (_0x49226c, _0x252d72, _0x6cc4a3) {
      var _0x23690c;
      try {
        _0x23690c = _0x415c36.lookupNode(_0x49226c, _0x252d72);
      } catch (_0x45ca64) {
        return _0x45ca64.errno;
      }
      var _0x14a1e7 = _0x415c36.nodePermissions(_0x49226c, "wx");
      if (_0x14a1e7) {
        return _0x14a1e7;
      }
      if (_0x6cc4a3) {
        if (!_0x415c36.isDir(_0x23690c.mode)) {
          return 54;
        }
        if (_0x415c36.isRoot(_0x23690c) || _0x415c36.getPath(_0x23690c) === _0x415c36.cwd()) {
          return 10;
        }
      } else if (_0x415c36.isDir(_0x23690c.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x7767cd, _0x83e5da) {
      if (!_0x7767cd) {
        return 44;
      }
      if (_0x415c36.isLink(_0x7767cd.mode)) {
        return 32;
      } else if (_0x415c36.isDir(_0x7767cd.mode)) {
        if (_0x415c36.flagsToPermissionString(_0x83e5da) !== "r" || _0x83e5da & 512) {
          return 31;
        }
      }
      return _0x415c36.nodePermissions(_0x7767cd, _0x415c36.flagsToPermissionString(_0x83e5da));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x21b2f9, _0x6ff83f) {
      _0x21b2f9 = _0x21b2f9 || 0;
      _0x6ff83f = _0x6ff83f || _0x415c36.MAX_OPEN_FDS;
      for (var _0x28d911 = _0x21b2f9; _0x28d911 <= _0x6ff83f; _0x28d911++) {
        if (!_0x415c36.streams[_0x28d911]) {
          return _0x28d911;
        }
      }
      throw new _0x415c36.ErrnoError(33);
    },
    getStream: function (_0x307176) {
      return _0x415c36.streams[_0x307176];
    },
    createStream: function (_0x189563, _0x408f7a, _0xbac162) {
      if (!_0x415c36.FSStream) {
        _0x415c36.FSStream = function () {};
        _0x415c36.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x1e3297) {
              this.node = _0x1e3297;
            }
          },
          isRead: {
            get: function () {
              return (this.flags & 2097155) !== 1;
            }
          },
          isWrite: {
            get: function () {
              return (this.flags & 2097155) !== 0;
            }
          },
          isAppend: {
            get: function () {
              return this.flags & 1024;
            }
          }
        };
      }
      var _0x4545ee = new _0x415c36.FSStream();
      for (var _0x27736d in _0x189563) {
        _0x4545ee[_0x27736d] = _0x189563[_0x27736d];
      }
      _0x189563 = _0x4545ee;
      var _0x30f170 = _0x415c36.nextfd(_0x408f7a, _0xbac162);
      _0x189563.fd = _0x30f170;
      _0x415c36.streams[_0x30f170] = _0x189563;
      return _0x189563;
    },
    closeStream: function (_0x31279f) {
      _0x415c36.streams[_0x31279f] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x31b977) {
        var _0x5562ec = _0x415c36.getDevice(_0x31b977.node.rdev);
        _0x31b977.stream_ops = _0x5562ec.stream_ops;
        if (_0x31b977.stream_ops.open) {
          _0x31b977.stream_ops.open(_0x31b977);
        }
      },
      llseek: function () {
        throw new _0x415c36.ErrnoError(70);
      }
    },
    major: function (_0x3a6e85) {
      return _0x3a6e85 >> 8;
    },
    minor: function (_0x33ce6c) {
      return _0x33ce6c & 255;
    },
    makedev: function (_0x2896f5, _0xe0349a) {
      return _0x2896f5 << 8 | _0xe0349a;
    },
    registerDevice: function (_0x1f7efc, _0x25f626) {
      _0x415c36.devices[_0x1f7efc] = {
        stream_ops: _0x25f626
      };
    },
    getDevice: function (_0x5e8de5) {
      return _0x415c36.devices[_0x5e8de5];
    },
    getMounts: function (_0x3d8164) {
      var _0x52b30f = [];
      var _0xce9cf3 = [_0x3d8164];
      while (_0xce9cf3.length) {
        var _0x40d7bc = _0xce9cf3.pop();
        _0x52b30f.push(_0x40d7bc);
        _0xce9cf3.push.apply(_0xce9cf3, _0x40d7bc.mounts);
      }
      return _0x52b30f;
    },
    syncfs: function (_0x2cfff6, _0x1c0b97) {
      if (typeof _0x2cfff6 === "function") {
        _0x1c0b97 = _0x2cfff6;
        _0x2cfff6 = false;
      }
      _0x415c36.syncFSRequests++;
      if (_0x415c36.syncFSRequests > 1) {
        _0x38748e("warning: " + _0x415c36.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x399306 = _0x415c36.getMounts(_0x415c36.root.mount);
      var _0x2804e7 = 0;
      function _0x2e2557(_0x36fd5) {
        _0x415c36.syncFSRequests--;
        return _0x1c0b97(_0x36fd5);
      }
      function _0x457c54(_0x465d97) {
        if (_0x465d97) {
          if (!_0x457c54.errored) {
            _0x457c54.errored = true;
            return _0x2e2557(_0x465d97);
          }
          return;
        }
        if (++_0x2804e7 >= _0x399306.length) {
          _0x2e2557(null);
        }
      }
      _0x399306.forEach(function (_0x2dc795) {
        if (!_0x2dc795.type.syncfs) {
          return _0x457c54(null);
        }
        _0x2dc795.type.syncfs(_0x2dc795, _0x2cfff6, _0x457c54);
      });
    },
    mount: function (_0x281e6b, _0x4d8b97, _0x518281) {
      var _0x3fa9ac = _0x518281 === "/";
      var _0x3886f3 = !_0x518281;
      var _0x13af15;
      if (_0x3fa9ac && _0x415c36.root) {
        throw new _0x415c36.ErrnoError(10);
      } else if (!_0x3fa9ac && !_0x3886f3) {
        var _0x352d5d = _0x415c36.lookupPath(_0x518281, {
          follow_mount: false
        });
        _0x518281 = _0x352d5d.path;
        _0x13af15 = _0x352d5d.node;
        if (_0x415c36.isMountpoint(_0x13af15)) {
          throw new _0x415c36.ErrnoError(10);
        }
        if (!_0x415c36.isDir(_0x13af15.mode)) {
          throw new _0x415c36.ErrnoError(54);
        }
      }
      var _0x53e735 = {
        type: _0x281e6b,
        opts: _0x4d8b97,
        mountpoint: _0x518281,
        mounts: []
      };
      var _0x2738fa = _0x281e6b.mount(_0x53e735);
      _0x2738fa.mount = _0x53e735;
      _0x53e735.root = _0x2738fa;
      if (_0x3fa9ac) {
        _0x415c36.root = _0x2738fa;
      } else if (_0x13af15) {
        _0x13af15.mounted = _0x53e735;
        if (_0x13af15.mount) {
          _0x13af15.mount.mounts.push(_0x53e735);
        }
      }
      return _0x2738fa;
    },
    unmount: function (_0x5a4480) {
      var _0x21053b = _0x415c36.lookupPath(_0x5a4480, {
        follow_mount: false
      });
      if (!_0x415c36.isMountpoint(_0x21053b.node)) {
        throw new _0x415c36.ErrnoError(28);
      }
      var _0x4d5919 = _0x21053b.node;
      var _0x256a20 = _0x4d5919.mounted;
      var _0x22a060 = _0x415c36.getMounts(_0x256a20);
      Object.keys(_0x415c36.nameTable).forEach(function (_0xce876a) {
        var _0x1a8920 = _0x415c36.nameTable[_0xce876a];
        while (_0x1a8920) {
          var _0x1bc8c8 = _0x1a8920.name_next;
          if (_0x22a060.includes(_0x1a8920.mount)) {
            _0x415c36.destroyNode(_0x1a8920);
          }
          _0x1a8920 = _0x1bc8c8;
        }
      });
      _0x4d5919.mounted = null;
      var _0x4d58dc = _0x4d5919.mount.mounts.indexOf(_0x256a20);
      _0x4d5919.mount.mounts.splice(_0x4d58dc, 1);
    },
    lookup: function (_0x52b5e3, _0x4b876e) {
      return _0x52b5e3.node_ops.lookup(_0x52b5e3, _0x4b876e);
    },
    mknod: function (_0x3e9051, _0x5ce324, _0x416697) {
      var _0x1bf104 = _0x415c36.lookupPath(_0x3e9051, {
        parent: true
      });
      var _0x987ceb = _0x1bf104.node;
      var _0x2ad6f8 = _0x2cbe33.basename(_0x3e9051);
      if (!_0x2ad6f8 || _0x2ad6f8 === "." || _0x2ad6f8 === "..") {
        throw new _0x415c36.ErrnoError(28);
      }
      var _0x47f028 = _0x415c36.mayCreate(_0x987ceb, _0x2ad6f8);
      if (_0x47f028) {
        throw new _0x415c36.ErrnoError(_0x47f028);
      }
      if (!_0x987ceb.node_ops.mknod) {
        throw new _0x415c36.ErrnoError(63);
      }
      return _0x987ceb.node_ops.mknod(_0x987ceb, _0x2ad6f8, _0x5ce324, _0x416697);
    },
    create: function (_0x3581cf, _0x2b60d4) {
      _0x2b60d4 = _0x2b60d4 !== undefined ? _0x2b60d4 : 438;
      _0x2b60d4 &= 4095;
      _0x2b60d4 |= 32768;
      return _0x415c36.mknod(_0x3581cf, _0x2b60d4, 0);
    },
    mkdir: function (_0x475348, _0x5ee168) {
      _0x5ee168 = _0x5ee168 !== undefined ? _0x5ee168 : 511;
      _0x5ee168 &= 1023;
      _0x5ee168 |= 16384;
      return _0x415c36.mknod(_0x475348, _0x5ee168, 0);
    },
    mkdirTree: function (_0x53a532, _0x5f089e) {
      var _0x10c4d4 = _0x53a532.split("/");
      var _0x24aa68 = "";
      for (var _0x1f6ec3 = 0; _0x1f6ec3 < _0x10c4d4.length; ++_0x1f6ec3) {
        if (!_0x10c4d4[_0x1f6ec3]) {
          continue;
        }
        _0x24aa68 += "/" + _0x10c4d4[_0x1f6ec3];
        try {
          _0x415c36.mkdir(_0x24aa68, _0x5f089e);
        } catch (_0x45cc50) {
          if (_0x45cc50.errno != 20) {
            throw _0x45cc50;
          }
        }
      }
    },
    mkdev: function (_0x1e2949, _0x2c0173, _0x18da56) {
      if (typeof _0x18da56 === "undefined") {
        _0x18da56 = _0x2c0173;
        _0x2c0173 = 438;
      }
      _0x2c0173 |= 8192;
      return _0x415c36.mknod(_0x1e2949, _0x2c0173, _0x18da56);
    },
    symlink: function (_0x4c4320, _0x5e2a0e) {
      if (!_0x5a28b5.resolve(_0x4c4320)) {
        throw new _0x415c36.ErrnoError(44);
      }
      var _0x7d2248 = _0x415c36.lookupPath(_0x5e2a0e, {
        parent: true
      });
      var _0x3174ac = _0x7d2248.node;
      if (!_0x3174ac) {
        throw new _0x415c36.ErrnoError(44);
      }
      var _0x43c46c = _0x2cbe33.basename(_0x5e2a0e);
      var _0xbaa4f0 = _0x415c36.mayCreate(_0x3174ac, _0x43c46c);
      if (_0xbaa4f0) {
        throw new _0x415c36.ErrnoError(_0xbaa4f0);
      }
      if (!_0x3174ac.node_ops.symlink) {
        throw new _0x415c36.ErrnoError(63);
      }
      return _0x3174ac.node_ops.symlink(_0x3174ac, _0x43c46c, _0x4c4320);
    },
    rename: function (_0x2b9adb, _0x3a2252) {
      var _0x465ca8 = _0x2cbe33.dirname(_0x2b9adb);
      var _0xa967f = _0x2cbe33.dirname(_0x3a2252);
      var _0x1fe445 = _0x2cbe33.basename(_0x2b9adb);
      var _0x3350e4 = _0x2cbe33.basename(_0x3a2252);
      var _0x57a3bf;
      var _0x570309;
      var _0x85646e;
      _0x57a3bf = _0x415c36.lookupPath(_0x2b9adb, {
        parent: true
      });
      _0x570309 = _0x57a3bf.node;
      _0x57a3bf = _0x415c36.lookupPath(_0x3a2252, {
        parent: true
      });
      _0x85646e = _0x57a3bf.node;
      if (!_0x570309 || !_0x85646e) {
        throw new _0x415c36.ErrnoError(44);
      }
      if (_0x570309.mount !== _0x85646e.mount) {
        throw new _0x415c36.ErrnoError(75);
      }
      var _0x3d7b54 = _0x415c36.lookupNode(_0x570309, _0x1fe445);
      var _0x96b453 = _0x5a28b5.relative(_0x2b9adb, _0xa967f);
      if (_0x96b453.charAt(0) !== ".") {
        throw new _0x415c36.ErrnoError(28);
      }
      _0x96b453 = _0x5a28b5.relative(_0x3a2252, _0x465ca8);
      if (_0x96b453.charAt(0) !== ".") {
        throw new _0x415c36.ErrnoError(55);
      }
      var _0x55a8aa;
      try {
        _0x55a8aa = _0x415c36.lookupNode(_0x85646e, _0x3350e4);
      } catch (_0x2895b9) {}
      if (_0x3d7b54 === _0x55a8aa) {
        return;
      }
      var _0x158dfe = _0x415c36.isDir(_0x3d7b54.mode);
      var _0x454cc3 = _0x415c36.mayDelete(_0x570309, _0x1fe445, _0x158dfe);
      if (_0x454cc3) {
        throw new _0x415c36.ErrnoError(_0x454cc3);
      }
      _0x454cc3 = _0x55a8aa ? _0x415c36.mayDelete(_0x85646e, _0x3350e4, _0x158dfe) : _0x415c36.mayCreate(_0x85646e, _0x3350e4);
      if (_0x454cc3) {
        throw new _0x415c36.ErrnoError(_0x454cc3);
      }
      if (!_0x570309.node_ops.rename) {
        throw new _0x415c36.ErrnoError(63);
      }
      if (_0x415c36.isMountpoint(_0x3d7b54) || _0x55a8aa && _0x415c36.isMountpoint(_0x55a8aa)) {
        throw new _0x415c36.ErrnoError(10);
      }
      if (_0x85646e !== _0x570309) {
        _0x454cc3 = _0x415c36.nodePermissions(_0x570309, "w");
        if (_0x454cc3) {
          throw new _0x415c36.ErrnoError(_0x454cc3);
        }
      }
      try {
        if (_0x415c36.trackingDelegate.willMovePath) {
          _0x415c36.trackingDelegate.willMovePath(_0x2b9adb, _0x3a2252);
        }
      } catch (_0x1ccc31) {
        _0x38748e("FS.trackingDelegate['willMovePath']('" + _0x2b9adb + "', '" + _0x3a2252 + "') threw an exception: " + _0x1ccc31.message);
      }
      _0x415c36.hashRemoveNode(_0x3d7b54);
      try {
        _0x570309.node_ops.rename(_0x3d7b54, _0x85646e, _0x3350e4);
      } catch (_0x209492) {
        throw _0x209492;
      } finally {
        _0x415c36.hashAddNode(_0x3d7b54);
      }
      try {
        if (_0x415c36.trackingDelegate.onMovePath) {
          _0x415c36.trackingDelegate.onMovePath(_0x2b9adb, _0x3a2252);
        }
      } catch (_0x14e8e8) {
        _0x38748e("FS.trackingDelegate['onMovePath']('" + _0x2b9adb + "', '" + _0x3a2252 + "') threw an exception: " + _0x14e8e8.message);
      }
    },
    rmdir: function (_0x14af33) {
      var _0x202db0 = _0x415c36.lookupPath(_0x14af33, {
        parent: true
      });
      var _0x1fa2eb = _0x202db0.node;
      var _0x19e673 = _0x2cbe33.basename(_0x14af33);
      var _0xb27f16 = _0x415c36.lookupNode(_0x1fa2eb, _0x19e673);
      var _0xb961c8 = _0x415c36.mayDelete(_0x1fa2eb, _0x19e673, true);
      if (_0xb961c8) {
        throw new _0x415c36.ErrnoError(_0xb961c8);
      }
      if (!_0x1fa2eb.node_ops.rmdir) {
        throw new _0x415c36.ErrnoError(63);
      }
      if (_0x415c36.isMountpoint(_0xb27f16)) {
        throw new _0x415c36.ErrnoError(10);
      }
      try {
        if (_0x415c36.trackingDelegate.willDeletePath) {
          _0x415c36.trackingDelegate.willDeletePath(_0x14af33);
        }
      } catch (_0x3573f7) {
        _0x38748e("FS.trackingDelegate['willDeletePath']('" + _0x14af33 + "') threw an exception: " + _0x3573f7.message);
      }
      _0x1fa2eb.node_ops.rmdir(_0x1fa2eb, _0x19e673);
      _0x415c36.destroyNode(_0xb27f16);
      try {
        if (_0x415c36.trackingDelegate.onDeletePath) {
          _0x415c36.trackingDelegate.onDeletePath(_0x14af33);
        }
      } catch (_0xcad05) {
        _0x38748e("FS.trackingDelegate['onDeletePath']('" + _0x14af33 + "') threw an exception: " + _0xcad05.message);
      }
    },
    readdir: function (_0x13c948) {
      var _0x5e6f91 = _0x415c36.lookupPath(_0x13c948, {
        follow: true
      });
      var _0x103247 = _0x5e6f91.node;
      if (!_0x103247.node_ops.readdir) {
        throw new _0x415c36.ErrnoError(54);
      }
      return _0x103247.node_ops.readdir(_0x103247);
    },
    unlink: function (_0x5ece71) {
      var _0x42ede0 = _0x415c36.lookupPath(_0x5ece71, {
        parent: true
      });
      var _0x3aea7f = _0x42ede0.node;
      var _0x9aedf6 = _0x2cbe33.basename(_0x5ece71);
      var _0x1ebe7d = _0x415c36.lookupNode(_0x3aea7f, _0x9aedf6);
      var _0x5e806b = _0x415c36.mayDelete(_0x3aea7f, _0x9aedf6, false);
      if (_0x5e806b) {
        throw new _0x415c36.ErrnoError(_0x5e806b);
      }
      if (!_0x3aea7f.node_ops.unlink) {
        throw new _0x415c36.ErrnoError(63);
      }
      if (_0x415c36.isMountpoint(_0x1ebe7d)) {
        throw new _0x415c36.ErrnoError(10);
      }
      try {
        if (_0x415c36.trackingDelegate.willDeletePath) {
          _0x415c36.trackingDelegate.willDeletePath(_0x5ece71);
        }
      } catch (_0x377da7) {
        _0x38748e("FS.trackingDelegate['willDeletePath']('" + _0x5ece71 + "') threw an exception: " + _0x377da7.message);
      }
      _0x3aea7f.node_ops.unlink(_0x3aea7f, _0x9aedf6);
      _0x415c36.destroyNode(_0x1ebe7d);
      try {
        if (_0x415c36.trackingDelegate.onDeletePath) {
          _0x415c36.trackingDelegate.onDeletePath(_0x5ece71);
        }
      } catch (_0x55d402) {
        _0x38748e("FS.trackingDelegate['onDeletePath']('" + _0x5ece71 + "') threw an exception: " + _0x55d402.message);
      }
    },
    readlink: function (_0x35ba29) {
      var _0x3cba1e = _0x415c36.lookupPath(_0x35ba29);
      var _0x3a1b52 = _0x3cba1e.node;
      if (!_0x3a1b52) {
        throw new _0x415c36.ErrnoError(44);
      }
      if (!_0x3a1b52.node_ops.readlink) {
        throw new _0x415c36.ErrnoError(28);
      }
      return _0x5a28b5.resolve(_0x415c36.getPath(_0x3a1b52.parent), _0x3a1b52.node_ops.readlink(_0x3a1b52));
    },
    stat: function (_0x1dc6a5, _0x2ed285) {
      var _0x597e3f = _0x415c36.lookupPath(_0x1dc6a5, {
        follow: !_0x2ed285
      });
      var _0xe419ad = _0x597e3f.node;
      if (!_0xe419ad) {
        throw new _0x415c36.ErrnoError(44);
      }
      if (!_0xe419ad.node_ops.getattr) {
        throw new _0x415c36.ErrnoError(63);
      }
      return _0xe419ad.node_ops.getattr(_0xe419ad);
    },
    lstat: function (_0x263597) {
      return _0x415c36.stat(_0x263597, true);
    },
    chmod: function (_0x379da3, _0x4524df, _0x9e01c0) {
      var _0x1f0e72;
      if (typeof _0x379da3 === "string") {
        var _0x2eed06 = _0x415c36.lookupPath(_0x379da3, {
          follow: !_0x9e01c0
        });
        _0x1f0e72 = _0x2eed06.node;
      } else {
        _0x1f0e72 = _0x379da3;
      }
      if (!_0x1f0e72.node_ops.setattr) {
        throw new _0x415c36.ErrnoError(63);
      }
      _0x1f0e72.node_ops.setattr(_0x1f0e72, {
        mode: _0x4524df & 4095 | _0x1f0e72.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x452533, _0x1a57db) {
      _0x415c36.chmod(_0x452533, _0x1a57db, true);
    },
    fchmod: function (_0x2bc6f0, _0x5a43f4) {
      var _0x448b8d = _0x415c36.getStream(_0x2bc6f0);
      if (!_0x448b8d) {
        throw new _0x415c36.ErrnoError(8);
      }
      _0x415c36.chmod(_0x448b8d.node, _0x5a43f4);
    },
    chown: function (_0x5b7724, _0x20053d, _0x2a3368, _0x122952) {
      var _0x1f27ab;
      if (typeof _0x5b7724 === "string") {
        var _0x2b9936 = _0x415c36.lookupPath(_0x5b7724, {
          follow: !_0x122952
        });
        _0x1f27ab = _0x2b9936.node;
      } else {
        _0x1f27ab = _0x5b7724;
      }
      if (!_0x1f27ab.node_ops.setattr) {
        throw new _0x415c36.ErrnoError(63);
      }
      _0x1f27ab.node_ops.setattr(_0x1f27ab, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x29e74c, _0x1c0125, _0x44e42c) {
      _0x415c36.chown(_0x29e74c, _0x1c0125, _0x44e42c, true);
    },
    fchown: function (_0x570457, _0x3525ad, _0x27c8c3) {
      var _0x1c6452 = _0x415c36.getStream(_0x570457);
      if (!_0x1c6452) {
        throw new _0x415c36.ErrnoError(8);
      }
      _0x415c36.chown(_0x1c6452.node, _0x3525ad, _0x27c8c3);
    },
    truncate: function (_0x544963, _0x528d14) {
      if (_0x528d14 < 0) {
        throw new _0x415c36.ErrnoError(28);
      }
      var _0x50c1d7;
      if (typeof _0x544963 === "string") {
        var _0x466fb5 = _0x415c36.lookupPath(_0x544963, {
          follow: true
        });
        _0x50c1d7 = _0x466fb5.node;
      } else {
        _0x50c1d7 = _0x544963;
      }
      if (!_0x50c1d7.node_ops.setattr) {
        throw new _0x415c36.ErrnoError(63);
      }
      if (_0x415c36.isDir(_0x50c1d7.mode)) {
        throw new _0x415c36.ErrnoError(31);
      }
      if (!_0x415c36.isFile(_0x50c1d7.mode)) {
        throw new _0x415c36.ErrnoError(28);
      }
      var _0x3b8b44 = _0x415c36.nodePermissions(_0x50c1d7, "w");
      if (_0x3b8b44) {
        throw new _0x415c36.ErrnoError(_0x3b8b44);
      }
      _0x50c1d7.node_ops.setattr(_0x50c1d7, {
        size: _0x528d14,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x118f02, _0x1dc645) {
      var _0xba0d44 = _0x415c36.getStream(_0x118f02);
      if (!_0xba0d44) {
        throw new _0x415c36.ErrnoError(8);
      }
      if ((_0xba0d44.flags & 2097155) === 0) {
        throw new _0x415c36.ErrnoError(28);
      }
      _0x415c36.truncate(_0xba0d44.node, _0x1dc645);
    },
    utime: function (_0x468a51, _0x57cf55, _0x268230) {
      var _0xefaf7b = _0x415c36.lookupPath(_0x468a51, {
        follow: true
      });
      var _0x46e660 = _0xefaf7b.node;
      _0x46e660.node_ops.setattr(_0x46e660, {
        timestamp: Math.max(_0x57cf55, _0x268230)
      });
    },
    open: function (_0x54b71f, _0x236e90, _0x57fcc3, _0x2d8033, _0x2f9517) {
      if (_0x54b71f === "") {
        throw new _0x415c36.ErrnoError(44);
      }
      _0x236e90 = typeof _0x236e90 === "string" ? _0x415c36.modeStringToFlags(_0x236e90) : _0x236e90;
      _0x57fcc3 = typeof _0x57fcc3 === "undefined" ? 438 : _0x57fcc3;
      if (_0x236e90 & 64) {
        _0x57fcc3 = _0x57fcc3 & 4095 | 32768;
      } else {
        _0x57fcc3 = 0;
      }
      var _0xd7c300;
      if (typeof _0x54b71f === "object") {
        _0xd7c300 = _0x54b71f;
      } else {
        _0x54b71f = _0x2cbe33.normalize(_0x54b71f);
        try {
          var _0x4944eb = _0x415c36.lookupPath(_0x54b71f, {
            follow: !(_0x236e90 & 131072)
          });
          _0xd7c300 = _0x4944eb.node;
        } catch (_0x31302f) {}
      }
      var _0x4f6acf = false;
      if (_0x236e90 & 64) {
        if (_0xd7c300) {
          if (_0x236e90 & 128) {
            throw new _0x415c36.ErrnoError(20);
          }
        } else {
          _0xd7c300 = _0x415c36.mknod(_0x54b71f, _0x57fcc3, 0);
          _0x4f6acf = true;
        }
      }
      if (!_0xd7c300) {
        throw new _0x415c36.ErrnoError(44);
      }
      if (_0x415c36.isChrdev(_0xd7c300.mode)) {
        _0x236e90 &= ~512;
      }
      if (_0x236e90 & 65536 && !_0x415c36.isDir(_0xd7c300.mode)) {
        throw new _0x415c36.ErrnoError(54);
      }
      if (!_0x4f6acf) {
        var _0x28c00f = _0x415c36.mayOpen(_0xd7c300, _0x236e90);
        if (_0x28c00f) {
          throw new _0x415c36.ErrnoError(_0x28c00f);
        }
      }
      if (_0x236e90 & 512) {
        _0x415c36.truncate(_0xd7c300, 0);
      }
      _0x236e90 &= ~131712;
      var _0x5a2843 = _0x415c36.createStream({
        node: _0xd7c300,
        path: _0x415c36.getPath(_0xd7c300),
        flags: _0x236e90,
        seekable: true,
        position: 0,
        stream_ops: _0xd7c300.stream_ops,
        ungotten: [],
        error: false
      }, _0x2d8033, _0x2f9517);
      if (_0x5a2843.stream_ops.open) {
        _0x5a2843.stream_ops.open(_0x5a2843);
      }
      if (_0x24391e.logReadFiles && !(_0x236e90 & 1)) {
        if (!_0x415c36.readFiles) {
          _0x415c36.readFiles = {};
        }
        if (!(_0x54b71f in _0x415c36.readFiles)) {
          _0x415c36.readFiles[_0x54b71f] = 1;
          _0x38748e("FS.trackingDelegate error on read file: " + _0x54b71f);
        }
      }
      try {
        if (_0x415c36.trackingDelegate.onOpenFile) {
          var _0x171a38 = 0;
          if ((_0x236e90 & 2097155) !== 1) {
            _0x171a38 |= _0x415c36.tracking.openFlags.READ;
          }
          if ((_0x236e90 & 2097155) !== 0) {
            _0x171a38 |= _0x415c36.tracking.openFlags.WRITE;
          }
          _0x415c36.trackingDelegate.onOpenFile(_0x54b71f, _0x171a38);
        }
      } catch (_0x1bed4d) {
        _0x38748e("FS.trackingDelegate['onOpenFile']('" + _0x54b71f + "', flags) threw an exception: " + _0x1bed4d.message);
      }
      return _0x5a2843;
    },
    close: function (_0x5787e6) {
      if (_0x415c36.isClosed(_0x5787e6)) {
        throw new _0x415c36.ErrnoError(8);
      }
      if (_0x5787e6.getdents) {
        _0x5787e6.getdents = null;
      }
      try {
        if (_0x5787e6.stream_ops.close) {
          _0x5787e6.stream_ops.close(_0x5787e6);
        }
      } catch (_0x594d3a) {
        throw _0x594d3a;
      } finally {
        _0x415c36.closeStream(_0x5787e6.fd);
      }
      _0x5787e6.fd = null;
    },
    isClosed: function (_0xcdc555) {
      return _0xcdc555.fd === null;
    },
    llseek: function (_0x4dcd83, _0x2eb5ba, _0xacaa10) {
      if (_0x415c36.isClosed(_0x4dcd83)) {
        throw new _0x415c36.ErrnoError(8);
      }
      if (!_0x4dcd83.seekable || !_0x4dcd83.stream_ops.llseek) {
        throw new _0x415c36.ErrnoError(70);
      }
      if (_0xacaa10 != 0 && _0xacaa10 != 1 && _0xacaa10 != 2) {
        throw new _0x415c36.ErrnoError(28);
      }
      _0x4dcd83.position = _0x4dcd83.stream_ops.llseek(_0x4dcd83, _0x2eb5ba, _0xacaa10);
      _0x4dcd83.ungotten = [];
      return _0x4dcd83.position;
    },
    read: function (_0x48f10f, _0x43defa, _0xc272e, _0x19e612, _0x94b1f8) {
      if (_0x19e612 < 0 || _0x94b1f8 < 0) {
        throw new _0x415c36.ErrnoError(28);
      }
      if (_0x415c36.isClosed(_0x48f10f)) {
        throw new _0x415c36.ErrnoError(8);
      }
      if ((_0x48f10f.flags & 2097155) === 1) {
        throw new _0x415c36.ErrnoError(8);
      }
      if (_0x415c36.isDir(_0x48f10f.node.mode)) {
        throw new _0x415c36.ErrnoError(31);
      }
      if (!_0x48f10f.stream_ops.read) {
        throw new _0x415c36.ErrnoError(28);
      }
      var _0x5d2611 = typeof _0x94b1f8 !== "undefined";
      if (!_0x5d2611) {
        _0x94b1f8 = _0x48f10f.position;
      } else if (!_0x48f10f.seekable) {
        throw new _0x415c36.ErrnoError(70);
      }
      var _0x51cb26 = _0x48f10f.stream_ops.read(_0x48f10f, _0x43defa, _0xc272e, _0x19e612, _0x94b1f8);
      if (!_0x5d2611) {
        _0x48f10f.position += _0x51cb26;
      }
      return _0x51cb26;
    },
    write: function (_0x5eaf13, _0x4196c3, _0x16d3e8, _0x266d6c, _0x56fedb, _0x1bd990) {
      if (_0x266d6c < 0 || _0x56fedb < 0) {
        throw new _0x415c36.ErrnoError(28);
      }
      if (_0x415c36.isClosed(_0x5eaf13)) {
        throw new _0x415c36.ErrnoError(8);
      }
      if ((_0x5eaf13.flags & 2097155) === 0) {
        throw new _0x415c36.ErrnoError(8);
      }
      if (_0x415c36.isDir(_0x5eaf13.node.mode)) {
        throw new _0x415c36.ErrnoError(31);
      }
      if (!_0x5eaf13.stream_ops.write) {
        throw new _0x415c36.ErrnoError(28);
      }
      if (_0x5eaf13.seekable && _0x5eaf13.flags & 1024) {
        _0x415c36.llseek(_0x5eaf13, 0, 2);
      }
      var _0x3c7a9e = typeof _0x56fedb !== "undefined";
      if (!_0x3c7a9e) {
        _0x56fedb = _0x5eaf13.position;
      } else if (!_0x5eaf13.seekable) {
        throw new _0x415c36.ErrnoError(70);
      }
      var _0x442f30 = _0x5eaf13.stream_ops.write(_0x5eaf13, _0x4196c3, _0x16d3e8, _0x266d6c, _0x56fedb, _0x1bd990);
      if (!_0x3c7a9e) {
        _0x5eaf13.position += _0x442f30;
      }
      try {
        if (_0x5eaf13.path && _0x415c36.trackingDelegate.onWriteToFile) {
          _0x415c36.trackingDelegate.onWriteToFile(_0x5eaf13.path);
        }
      } catch (_0x3f4031) {
        _0x38748e("FS.trackingDelegate['onWriteToFile']('" + _0x5eaf13.path + "') threw an exception: " + _0x3f4031.message);
      }
      return _0x442f30;
    },
    allocate: function (_0x34202e, _0x21497d, _0x167252) {
      if (_0x415c36.isClosed(_0x34202e)) {
        throw new _0x415c36.ErrnoError(8);
      }
      if (_0x21497d < 0 || _0x167252 <= 0) {
        throw new _0x415c36.ErrnoError(28);
      }
      if ((_0x34202e.flags & 2097155) === 0) {
        throw new _0x415c36.ErrnoError(8);
      }
      if (!_0x415c36.isFile(_0x34202e.node.mode) && !_0x415c36.isDir(_0x34202e.node.mode)) {
        throw new _0x415c36.ErrnoError(43);
      }
      if (!_0x34202e.stream_ops.allocate) {
        throw new _0x415c36.ErrnoError(138);
      }
      _0x34202e.stream_ops.allocate(_0x34202e, _0x21497d, _0x167252);
    },
    mmap: function (_0x51b302, _0x51790d, _0x5d102a, _0x101e67, _0xfbb69, _0x4f2c1a) {
      if ((_0xfbb69 & 2) !== 0 && (_0x4f2c1a & 2) === 0 && (_0x51b302.flags & 2097155) !== 2) {
        throw new _0x415c36.ErrnoError(2);
      }
      if ((_0x51b302.flags & 2097155) === 1) {
        throw new _0x415c36.ErrnoError(2);
      }
      if (!_0x51b302.stream_ops.mmap) {
        throw new _0x415c36.ErrnoError(43);
      }
      return _0x51b302.stream_ops.mmap(_0x51b302, _0x51790d, _0x5d102a, _0x101e67, _0xfbb69, _0x4f2c1a);
    },
    msync: function (_0x69c897, _0x47d380, _0x3be5b4, _0x1615cc, _0x1535d5) {
      if (!_0x69c897 || !_0x69c897.stream_ops.msync) {
        return 0;
      }
      return _0x69c897.stream_ops.msync(_0x69c897, _0x47d380, _0x3be5b4, _0x1615cc, _0x1535d5);
    },
    munmap: function (_0x46e341) {
      return 0;
    },
    ioctl: function (_0x33c385, _0x493bc9, _0x27d990) {
      if (!_0x33c385.stream_ops.ioctl) {
        throw new _0x415c36.ErrnoError(59);
      }
      return _0x33c385.stream_ops.ioctl(_0x33c385, _0x493bc9, _0x27d990);
    },
    readFile: function (_0x13d49c, _0x3de0ca) {
      _0x3de0ca = _0x3de0ca || {};
      _0x3de0ca.flags = _0x3de0ca.flags || 0;
      _0x3de0ca.encoding = _0x3de0ca.encoding || "binary";
      if (_0x3de0ca.encoding !== "utf8" && _0x3de0ca.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x3de0ca.encoding + "\"");
      }
      var _0x19066b;
      var _0x3a259a = _0x415c36.open(_0x13d49c, _0x3de0ca.flags);
      var _0x44775b = _0x415c36.stat(_0x13d49c);
      var _0x29fa96 = _0x44775b.size;
      var _0x4c3507 = new Uint8Array(_0x29fa96);
      _0x415c36.read(_0x3a259a, _0x4c3507, 0, _0x29fa96, 0);
      if (_0x3de0ca.encoding === "utf8") {
        _0x19066b = _0x51bdc9(_0x4c3507, 0);
      } else if (_0x3de0ca.encoding === "binary") {
        _0x19066b = _0x4c3507;
      }
      _0x415c36.close(_0x3a259a);
      return _0x19066b;
    },
    writeFile: function (_0x50f7d8, _0x2b4e03, _0x4cc081) {
      _0x4cc081 = _0x4cc081 || {};
      _0x4cc081.flags = _0x4cc081.flags || 577;
      var _0x2db100 = _0x415c36.open(_0x50f7d8, _0x4cc081.flags, _0x4cc081.mode);
      if (typeof _0x2b4e03 === "string") {
        var _0x20e3c2 = new Uint8Array(_0x72e291(_0x2b4e03) + 1);
        var _0x58af9f = _0x389f76(_0x2b4e03, _0x20e3c2, 0, _0x20e3c2.length);
        _0x415c36.write(_0x2db100, _0x20e3c2, 0, _0x58af9f, undefined, _0x4cc081.canOwn);
      } else if (ArrayBuffer.isView(_0x2b4e03)) {
        _0x415c36.write(_0x2db100, _0x2b4e03, 0, _0x2b4e03.byteLength, undefined, _0x4cc081.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x415c36.close(_0x2db100);
    },
    cwd: function () {
      return _0x415c36.currentPath;
    },
    chdir: function (_0x1464dd) {
      var _0x209557 = _0x415c36.lookupPath(_0x1464dd, {
        follow: true
      });
      if (_0x209557.node === null) {
        throw new _0x415c36.ErrnoError(44);
      }
      if (!_0x415c36.isDir(_0x209557.node.mode)) {
        throw new _0x415c36.ErrnoError(54);
      }
      var _0x1cf535 = _0x415c36.nodePermissions(_0x209557.node, "x");
      if (_0x1cf535) {
        throw new _0x415c36.ErrnoError(_0x1cf535);
      }
      _0x415c36.currentPath = _0x209557.path;
    },
    createDefaultDirectories: function () {
      _0x415c36.mkdir("/tmp");
      _0x415c36.mkdir("/home");
      _0x415c36.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x415c36.mkdir("/dev");
      _0x415c36.registerDevice(_0x415c36.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0xfc979f, _0x4f4c3a, _0x46dd45, _0x106e78, _0x3feece) {
          return _0x106e78;
        }
      });
      _0x415c36.mkdev("/dev/null", _0x415c36.makedev(1, 3));
      _0x1862fb.register(_0x415c36.makedev(5, 0), _0x1862fb.default_tty_ops);
      _0x1862fb.register(_0x415c36.makedev(6, 0), _0x1862fb.default_tty1_ops);
      _0x415c36.mkdev("/dev/tty", _0x415c36.makedev(5, 0));
      _0x415c36.mkdev("/dev/tty1", _0x415c36.makedev(6, 0));
      var _0x8ddcb3 = _0x2a85c5();
      _0x415c36.createDevice("/dev", "random", _0x8ddcb3);
      _0x415c36.createDevice("/dev", "urandom", _0x8ddcb3);
      _0x415c36.mkdir("/dev/shm");
      _0x415c36.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x415c36.mkdir("/proc");
      var _0x53abcc = _0x415c36.mkdir("/proc/self");
      _0x415c36.mkdir("/proc/self/fd");
      _0x415c36.mount({
        mount: function () {
          var _0x907a8e = _0x415c36.createNode(_0x53abcc, "fd", 16895, 73);
          _0x907a8e.node_ops = {
            lookup: function (_0x5aca1a, _0x487ab4) {
              var _0x218909 = +_0x487ab4;
              var _0x3b0066 = _0x415c36.getStream(_0x218909);
              if (!_0x3b0066) {
                throw new _0x415c36.ErrnoError(8);
              }
              var _0x5c4a6a = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x3b0066.path;
                  }
                }
              };
              _0x5c4a6a.parent = _0x5c4a6a;
              return _0x5c4a6a;
            }
          };
          return _0x907a8e;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x24391e.stdin) {
        _0x415c36.createDevice("/dev", "stdin", _0x24391e.stdin);
      } else {
        _0x415c36.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x24391e.stdout) {
        _0x415c36.createDevice("/dev", "stdout", null, _0x24391e.stdout);
      } else {
        _0x415c36.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x24391e.stderr) {
        _0x415c36.createDevice("/dev", "stderr", null, _0x24391e.stderr);
      } else {
        _0x415c36.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x49e1b5 = _0x415c36.open("/dev/stdin", 0);
      var _0x3facfe = _0x415c36.open("/dev/stdout", 1);
      var _0x294969 = _0x415c36.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x415c36.ErrnoError) {
        return;
      }
      _0x415c36.ErrnoError = function _0x1b0035(_0x5605cc, _0x160aa5) {
        this.node = _0x160aa5;
        this.setErrno = function (_0x5de663) {
          this.errno = _0x5de663;
        };
        this.setErrno(_0x5605cc);
        this.message = "FS error";
      };
      _0x415c36.ErrnoError.prototype = new Error();
      _0x415c36.ErrnoError.prototype.constructor = _0x415c36.ErrnoError;
      [44].forEach(function (_0x4694ec) {
        _0x415c36.genericErrors[_0x4694ec] = new _0x415c36.ErrnoError(_0x4694ec);
        _0x415c36.genericErrors[_0x4694ec].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x415c36.ensureErrnoError();
      _0x415c36.nameTable = new Array(4096);
      _0x415c36.mount(_0x548abe, {}, "/");
      _0x415c36.createDefaultDirectories();
      _0x415c36.createDefaultDevices();
      _0x415c36.createSpecialDirectories();
      _0x415c36.filesystems = {
        MEMFS: _0x548abe,
        IDBFS: _0x3116fa
      };
    },
    init: function (_0xe5b8bd, _0x2cc349, _0x127fd7) {
      _0x415c36.init.initialized = true;
      _0x415c36.ensureErrnoError();
      _0x24391e.stdin = _0xe5b8bd || _0x24391e.stdin;
      _0x24391e.stdout = _0x2cc349 || _0x24391e.stdout;
      _0x24391e.stderr = _0x127fd7 || _0x24391e.stderr;
      _0x415c36.createStandardStreams();
    },
    quit: function () {
      _0x415c36.init.initialized = false;
      var _0x4a2afc = _0x24391e._fflush;
      if (_0x4a2afc) {
        _0x4a2afc(0);
      }
      for (var _0x3a10ca = 0; _0x3a10ca < _0x415c36.streams.length; _0x3a10ca++) {
        var _0x4a25af = _0x415c36.streams[_0x3a10ca];
        if (!_0x4a25af) {
          continue;
        }
        _0x415c36.close(_0x4a25af);
      }
    },
    getMode: function (_0x178c5a, _0x4ba721) {
      var _0x2643a1 = 0;
      if (_0x178c5a) {
        _0x2643a1 |= 365;
      }
      if (_0x4ba721) {
        _0x2643a1 |= 146;
      }
      return _0x2643a1;
    },
    findObject: function (_0x581242, _0x15ebbe) {
      var _0x1f5391 = _0x415c36.analyzePath(_0x581242, _0x15ebbe);
      if (_0x1f5391.exists) {
        return _0x1f5391.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x50773d, _0x101b9c) {
      try {
        var _0x12cfb6 = _0x415c36.lookupPath(_0x50773d, {
          follow: !_0x101b9c
        });
        _0x50773d = _0x12cfb6.path;
      } catch (_0x5d364a) {}
      var _0x410be7 = {
        isRoot: false,
        exists: false,
        error: 0,
        name: null,
        path: null,
        object: null,
        parentExists: false,
        parentPath: null,
        parentObject: null
      };
      try {
        var _0x12cfb6 = _0x415c36.lookupPath(_0x50773d, {
          parent: true
        });
        _0x410be7.parentExists = true;
        _0x410be7.parentPath = _0x12cfb6.path;
        _0x410be7.parentObject = _0x12cfb6.node;
        _0x410be7.name = _0x2cbe33.basename(_0x50773d);
        _0x12cfb6 = _0x415c36.lookupPath(_0x50773d, {
          follow: !_0x101b9c
        });
        _0x410be7.exists = true;
        _0x410be7.path = _0x12cfb6.path;
        _0x410be7.object = _0x12cfb6.node;
        _0x410be7.name = _0x12cfb6.node.name;
        _0x410be7.isRoot = _0x12cfb6.path === "/";
      } catch (_0x2a90cc) {
        _0x410be7.error = _0x2a90cc.errno;
      }
      return _0x410be7;
    },
    createPath: function (_0x1c5b26, _0x57baf8, _0xe00a42, _0x4dea14) {
      _0x1c5b26 = typeof _0x1c5b26 === "string" ? _0x1c5b26 : _0x415c36.getPath(_0x1c5b26);
      var _0x48c0d2 = _0x57baf8.split("/").reverse();
      while (_0x48c0d2.length) {
        var _0x517215 = _0x48c0d2.pop();
        if (!_0x517215) {
          continue;
        }
        var _0x34a660 = _0x2cbe33.join2(_0x1c5b26, _0x517215);
        try {
          _0x415c36.mkdir(_0x34a660);
        } catch (_0x24caaa) {}
        _0x1c5b26 = _0x34a660;
      }
      return _0x34a660;
    },
    createFile: function (_0x457001, _0x3f1850, _0x3f0880, _0x583ffe, _0x2ea465) {
      var _0x4cfb06 = _0x2cbe33.join2(typeof _0x457001 === "string" ? _0x457001 : _0x415c36.getPath(_0x457001), _0x3f1850);
      var _0x40314b = _0x415c36.getMode(_0x583ffe, _0x2ea465);
      return _0x415c36.create(_0x4cfb06, _0x40314b);
    },
    createDataFile: function (_0x4ca6e1, _0x358031, _0x5ae02f, _0x1ec468, _0x173aa1, _0x277b8c) {
      var _0x2cf64f = _0x358031 ? _0x2cbe33.join2(typeof _0x4ca6e1 === "string" ? _0x4ca6e1 : _0x415c36.getPath(_0x4ca6e1), _0x358031) : _0x4ca6e1;
      var _0x413345 = _0x415c36.getMode(_0x1ec468, _0x173aa1);
      var _0x506669 = _0x415c36.create(_0x2cf64f, _0x413345);
      if (_0x5ae02f) {
        if (typeof _0x5ae02f === "string") {
          var _0x31c38a = new Array(_0x5ae02f.length);
          for (var _0x276393 = 0, _0x3cfb2e = _0x5ae02f.length; _0x276393 < _0x3cfb2e; ++_0x276393) {
            _0x31c38a[_0x276393] = _0x5ae02f.charCodeAt(_0x276393);
          }
          _0x5ae02f = _0x31c38a;
        }
        _0x415c36.chmod(_0x506669, _0x413345 | 146);
        var _0xf20f1d = _0x415c36.open(_0x506669, 577);
        _0x415c36.write(_0xf20f1d, _0x5ae02f, 0, _0x5ae02f.length, 0, _0x277b8c);
        _0x415c36.close(_0xf20f1d);
        _0x415c36.chmod(_0x506669, _0x413345);
      }
      return _0x506669;
    },
    createDevice: function (_0x29d2c2, _0x1e8a70, _0x3dff58, _0x3ea8ae) {
      var _0x41a30f = _0x2cbe33.join2(typeof _0x29d2c2 === "string" ? _0x29d2c2 : _0x415c36.getPath(_0x29d2c2), _0x1e8a70);
      var _0x9ba8f8 = _0x415c36.getMode(!!_0x3dff58, !!_0x3ea8ae);
      if (!_0x415c36.createDevice.major) {
        _0x415c36.createDevice.major = 64;
      }
      var _0x362179 = _0x415c36.makedev(_0x415c36.createDevice.major++, 0);
      _0x415c36.registerDevice(_0x362179, {
        open: function (_0x129431) {
          _0x129431.seekable = false;
        },
        close: function (_0x1a0eda) {
          if (_0x3ea8ae && _0x3ea8ae.buffer && _0x3ea8ae.buffer.length) {
            _0x3ea8ae(10);
          }
        },
        read: function (_0x4fcc28, _0x6aa112, _0x2896fd, _0xdd4cc1, _0x1a963a) {
          var _0x22c9f6 = 0;
          for (var _0x371c50 = 0; _0x371c50 < _0xdd4cc1; _0x371c50++) {
            var _0x15a205;
            try {
              _0x15a205 = _0x3dff58();
            } catch (_0x373d30) {
              throw new _0x415c36.ErrnoError(29);
            }
            if (_0x15a205 === undefined && _0x22c9f6 === 0) {
              throw new _0x415c36.ErrnoError(6);
            }
            if (_0x15a205 === null || _0x15a205 === undefined) {
              break;
            }
            _0x22c9f6++;
            _0x6aa112[_0x2896fd + _0x371c50] = _0x15a205;
          }
          if (_0x22c9f6) {
            _0x4fcc28.node.timestamp = Date.now();
          }
          return _0x22c9f6;
        },
        write: function (_0x468a20, _0x337fa8, _0xd42fea, _0x2d6d16, _0xad9f22) {
          for (var _0x55b46b = 0; _0x55b46b < _0x2d6d16; _0x55b46b++) {
            try {
              _0x3ea8ae(_0x337fa8[_0xd42fea + _0x55b46b]);
            } catch (_0x5245b0) {
              throw new _0x415c36.ErrnoError(29);
            }
          }
          if (_0x2d6d16) {
            _0x468a20.node.timestamp = Date.now();
          }
          return _0x55b46b;
        }
      });
      return _0x415c36.mkdev(_0x41a30f, _0x9ba8f8, _0x362179);
    },
    forceLoadFile: function (_0x40b629) {
      if (_0x40b629.isDevice || _0x40b629.isFolder || _0x40b629.link || _0x40b629.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x5f3fcf) {
        try {
          _0x40b629.contents = _0x380359(_0x5f3fcf(_0x40b629.url), true);
          _0x40b629.usedBytes = _0x40b629.contents.length;
        } catch (_0x385e99) {
          throw new _0x415c36.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x49cb5e, _0x597652, _0x2e263c, _0x5585f5, _0x204586) {
      function _0x39e80c() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x39e80c.prototype.get = function _0x4a8635(_0x5c12db) {
        if (_0x5c12db > this.length - 1 || _0x5c12db < 0) {
          return undefined;
        }
        var _0x27ff71 = _0x5c12db % this.chunkSize;
        var _0x3cd0f9 = _0x5c12db / this.chunkSize | 0;
        return this.getter(_0x3cd0f9)[_0x27ff71];
      };
      _0x39e80c.prototype.setDataGetter = function _0x2ca6f6(_0x5258cd) {
        this.getter = _0x5258cd;
      };
      _0x39e80c.prototype.cacheLength = function _0x2b63e8() {
        var _0x120614 = new XMLHttpRequest();
        _0x120614.open("HEAD", _0x2e263c, false);
        _0x120614.send(null);
        if ((!(_0x120614.status >= 200) || !(_0x120614.status < 300)) && _0x120614.status !== 304) {
          throw new Error("Couldn't load " + _0x2e263c + ". Status: " + _0x120614.status);
        }
        var _0x4a1e86 = Number(_0x120614.getResponseHeader("Content-length"));
        var _0x366762;
        var _0x545855 = (_0x366762 = _0x120614.getResponseHeader("Accept-Ranges")) && _0x366762 === "bytes";
        var _0x3d0ccc = (_0x366762 = _0x120614.getResponseHeader("Content-Encoding")) && _0x366762 === "gzip";
        var _0x5a263a = 1048576;
        if (!_0x545855) {
          _0x5a263a = _0x4a1e86;
        }
        var _0x2fe6d0 = function (_0x1f5c8b, _0x43a04b) {
          if (_0x1f5c8b > _0x43a04b) {
            throw new Error("invalid range (" + _0x1f5c8b + ", " + _0x43a04b + ") or no bytes requested!");
          }
          if (_0x43a04b > _0x4a1e86 - 1) {
            throw new Error("only " + _0x4a1e86 + " bytes available! programmer error!");
          }
          var _0x1cd684 = new XMLHttpRequest();
          _0x1cd684.open("GET", _0x2e263c, false);
          if (_0x4a1e86 !== _0x5a263a) {
            _0x1cd684.setRequestHeader("Range", "bytes=" + _0x1f5c8b + "-" + _0x43a04b);
          }
          if (typeof Uint8Array != "undefined") {
            _0x1cd684.responseType = "arraybuffer";
          }
          if (_0x1cd684.overrideMimeType) {
            _0x1cd684.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x1cd684.send(null);
          if ((!(_0x1cd684.status >= 200) || !(_0x1cd684.status < 300)) && _0x1cd684.status !== 304) {
            throw new Error("Couldn't load " + _0x2e263c + ". Status: " + _0x1cd684.status);
          }
          if (_0x1cd684.response !== undefined) {
            return new Uint8Array(_0x1cd684.response || []);
          } else {
            return _0x380359(_0x1cd684.responseText || "", true);
          }
        };
        var _0x24729a = this;
        _0x24729a.setDataGetter(function (_0x296eb8) {
          var _0x2e2fd4 = _0x296eb8 * _0x5a263a;
          var _0x15c194 = (_0x296eb8 + 1) * _0x5a263a - 1;
          _0x15c194 = Math.min(_0x15c194, _0x4a1e86 - 1);
          if (typeof _0x24729a.chunks[_0x296eb8] === "undefined") {
            _0x24729a.chunks[_0x296eb8] = _0x2fe6d0(_0x2e2fd4, _0x15c194);
          }
          if (typeof _0x24729a.chunks[_0x296eb8] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x24729a.chunks[_0x296eb8];
        });
        if (_0x3d0ccc || !_0x4a1e86) {
          _0x5a263a = _0x4a1e86 = 1;
          _0x4a1e86 = this.getter(0).length;
          _0x5a263a = _0x4a1e86;
          _0xed26c0("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x4a1e86;
        this._chunkSize = _0x5a263a;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x122c9d) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x134b48 = new _0x39e80c();
        Object.defineProperties(_0x134b48, {
          length: {
            get: function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            }
          },
          chunkSize: {
            get: function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            }
          }
        });
        var _0x1f1b96 = {
          isDevice: false,
          contents: _0x134b48
        };
      } else {
        var _0x1f1b96 = {
          isDevice: false,
          url: _0x2e263c
        };
      }
      var _0x179d41 = _0x415c36.createFile(_0x49cb5e, _0x597652, _0x1f1b96, _0x5585f5, _0x204586);
      if (_0x1f1b96.contents) {
        _0x179d41.contents = _0x1f1b96.contents;
      } else if (_0x1f1b96.url) {
        _0x179d41.contents = null;
        _0x179d41.url = _0x1f1b96.url;
      }
      Object.defineProperties(_0x179d41, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x4454ba = {};
      var _0x38befc = Object.keys(_0x179d41.stream_ops);
      _0x38befc.forEach(function (_0x156c1e) {
        var _0x501c98 = _0x179d41.stream_ops[_0x156c1e];
        _0x4454ba[_0x156c1e] = function _0x1fe908() {
          _0x415c36.forceLoadFile(_0x179d41);
          return _0x501c98.apply(null, arguments);
        };
      });
      _0x4454ba.read = function _0x17adaf(_0x10ae63, _0x59bd37, _0xac589a, _0x277e6e, _0x45aafc) {
        _0x415c36.forceLoadFile(_0x179d41);
        var _0x3672d6 = _0x10ae63.node.contents;
        if (_0x45aafc >= _0x3672d6.length) {
          return 0;
        }
        var _0x53a1f0 = Math.min(_0x3672d6.length - _0x45aafc, _0x277e6e);
        if (_0x3672d6.slice) {
          for (var _0x474738 = 0; _0x474738 < _0x53a1f0; _0x474738++) {
            _0x59bd37[_0xac589a + _0x474738] = _0x3672d6[_0x45aafc + _0x474738];
          }
        } else {
          for (var _0x474738 = 0; _0x474738 < _0x53a1f0; _0x474738++) {
            _0x59bd37[_0xac589a + _0x474738] = _0x3672d6.get(_0x45aafc + _0x474738);
          }
        }
        return _0x53a1f0;
      };
      _0x179d41.stream_ops = _0x4454ba;
      return _0x179d41;
    },
    createPreloadedFile: function (_0x1201af, _0x396715, _0x2a64d3, _0xf505da, _0x3d696e, _0xb2760b, _0x227cb2, _0x432e58, _0x1163e0, _0x13a3d2) {
      _0x43e1b2.init();
      var _0x68f6c1 = _0x396715 ? _0x5a28b5.resolve(_0x2cbe33.join2(_0x1201af, _0x396715)) : _0x1201af;
      var _0x5dcf4e = _0x96e2c4("cp " + _0x68f6c1);
      function _0x4ff878(_0xba07f4) {
        function _0x1fd5f2(_0x3c1958) {
          if (_0x13a3d2) {
            _0x13a3d2();
          }
          if (!_0x432e58) {
            _0x415c36.createDataFile(_0x1201af, _0x396715, _0x3c1958, _0xf505da, _0x3d696e, _0x1163e0);
          }
          if (_0xb2760b) {
            _0xb2760b();
          }
          _0xe3545b(_0x5dcf4e);
        }
        var _0x421327 = false;
        _0x24391e.preloadPlugins.forEach(function (_0x37e35b) {
          if (_0x421327) {
            return;
          }
          if (_0x37e35b.canHandle(_0x68f6c1)) {
            _0x37e35b.handle(_0xba07f4, _0x68f6c1, _0x1fd5f2, function () {
              if (_0x227cb2) {
                _0x227cb2();
              }
              _0xe3545b(_0x5dcf4e);
            });
            _0x421327 = true;
          }
        });
        if (!_0x421327) {
          _0x1fd5f2(_0xba07f4);
        }
      }
      _0xb357(_0x5dcf4e);
      if (typeof _0x2a64d3 == "string") {
        _0x43e1b2.asyncLoad(_0x2a64d3, function (_0x4c7770) {
          _0x4ff878(_0x4c7770);
        }, _0x227cb2);
      } else {
        _0x4ff878(_0x2a64d3);
      }
    },
    indexedDB: function () {
      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    },
    DB_NAME: function () {
      return "EM_FS_" + window.location.pathname;
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: function (_0x44fbd5, _0x2f3cce, _0x67f649) {
      _0x2f3cce = _0x2f3cce || function () {};
      _0x67f649 = _0x67f649 || function () {};
      var _0x5da97d = _0x415c36.indexedDB();
      try {
        var _0x3fadf0 = _0x5da97d.open(_0x415c36.DB_NAME(), _0x415c36.DB_VERSION);
      } catch (_0x2fb618) {
        return _0x67f649(_0x2fb618);
      }
      _0x3fadf0.onupgradeneeded = function _0x4e4803() {
        _0xed26c0("creating db");
        var _0x3a6606 = _0x3fadf0.result;
        _0x3a6606.createObjectStore(_0x415c36.DB_STORE_NAME);
      };
      _0x3fadf0.onsuccess = function _0x3182c9() {
        var _0x5de9be = _0x3fadf0.result;
        var _0x4310f4 = _0x5de9be.transaction([_0x415c36.DB_STORE_NAME], "readwrite");
        var _0x4646f3 = _0x4310f4.objectStore(_0x415c36.DB_STORE_NAME);
        var _0x2275a1 = 0;
        var _0x37439c = 0;
        var _0x12a8a4 = _0x44fbd5.length;
        function _0x16df84() {
          if (_0x37439c == 0) {
            _0x2f3cce();
          } else {
            _0x67f649();
          }
        }
        _0x44fbd5.forEach(function (_0x49038c) {
          var _0xc76d7a = _0x4646f3.put(_0x415c36.analyzePath(_0x49038c).object.contents, _0x49038c);
          _0xc76d7a.onsuccess = function _0x15379b() {
            _0x2275a1++;
            if (_0x2275a1 + _0x37439c == _0x12a8a4) {
              _0x16df84();
            }
          };
          _0xc76d7a.onerror = function _0x259aea() {
            _0x37439c++;
            if (_0x2275a1 + _0x37439c == _0x12a8a4) {
              _0x16df84();
            }
          };
        });
        _0x4310f4.onerror = _0x67f649;
      };
      _0x3fadf0.onerror = _0x67f649;
    },
    loadFilesFromDB: function (_0x3398b4, _0x1283a2, _0x1491c5) {
      _0x1283a2 = _0x1283a2 || function () {};
      _0x1491c5 = _0x1491c5 || function () {};
      var _0x31a14d = _0x415c36.indexedDB();
      try {
        var _0x1ded29 = _0x31a14d.open(_0x415c36.DB_NAME(), _0x415c36.DB_VERSION);
      } catch (_0x1dfb32) {
        return _0x1491c5(_0x1dfb32);
      }
      _0x1ded29.onupgradeneeded = _0x1491c5;
      _0x1ded29.onsuccess = function _0x53ff61() {
        var _0x1a3252 = _0x1ded29.result;
        try {
          var _0xb0b54f = _0x1a3252.transaction([_0x415c36.DB_STORE_NAME], "readonly");
        } catch (_0x3c1155) {
          _0x1491c5(_0x3c1155);
          return;
        }
        var _0x406a0e = _0xb0b54f.objectStore(_0x415c36.DB_STORE_NAME);
        var _0x513a91 = 0;
        var _0x39112c = 0;
        var _0x1d77f7 = _0x3398b4.length;
        function _0x53da5c() {
          if (_0x39112c == 0) {
            _0x1283a2();
          } else {
            _0x1491c5();
          }
        }
        _0x3398b4.forEach(function (_0x584b48) {
          var _0xb38160 = _0x406a0e.get(_0x584b48);
          _0xb38160.onsuccess = function _0x47870c() {
            if (_0x415c36.analyzePath(_0x584b48).exists) {
              _0x415c36.unlink(_0x584b48);
            }
            _0x415c36.createDataFile(_0x2cbe33.dirname(_0x584b48), _0x2cbe33.basename(_0x584b48), _0xb38160.result, true, true, true);
            _0x513a91++;
            if (_0x513a91 + _0x39112c == _0x1d77f7) {
              _0x53da5c();
            }
          };
          _0xb38160.onerror = function _0x3efa4d() {
            _0x39112c++;
            if (_0x513a91 + _0x39112c == _0x1d77f7) {
              _0x53da5c();
            }
          };
        });
        _0xb0b54f.onerror = _0x1491c5;
      };
      _0x1ded29.onerror = _0x1491c5;
    }
  };
  var _0x58ac26 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x51f0af, _0x49d046, _0x120f59) {
      if (_0x49d046[0] === "/") {
        return _0x49d046;
      }
      var _0x5f6c8e;
      if (_0x51f0af === -100) {
        _0x5f6c8e = _0x415c36.cwd();
      } else {
        var _0x593a79 = _0x415c36.getStream(_0x51f0af);
        if (!_0x593a79) {
          throw new _0x415c36.ErrnoError(8);
        }
        _0x5f6c8e = _0x593a79.path;
      }
      if (_0x49d046.length == 0) {
        if (!_0x120f59) {
          throw new _0x415c36.ErrnoError(44);
        }
        return _0x5f6c8e;
      }
      return _0x2cbe33.join2(_0x5f6c8e, _0x49d046);
    },
    doStat: function (_0x34b6ed, _0x353a7d, _0x548a4e) {
      try {
        var _0x5e69e0 = _0x34b6ed(_0x353a7d);
      } catch (_0x2b9d13) {
        if (_0x2b9d13 && _0x2b9d13.node && _0x2cbe33.normalize(_0x353a7d) !== _0x2cbe33.normalize(_0x415c36.getPath(_0x2b9d13.node))) {
          return -54;
        }
        throw _0x2b9d13;
      }
      _0x447875[_0x548a4e >> 2] = _0x5e69e0.dev;
      _0x447875[_0x548a4e + 4 >> 2] = 0;
      _0x447875[_0x548a4e + 8 >> 2] = _0x5e69e0.ino;
      _0x447875[_0x548a4e + 12 >> 2] = _0x5e69e0.mode;
      _0x447875[_0x548a4e + 16 >> 2] = _0x5e69e0.nlink;
      _0x447875[_0x548a4e + 20 >> 2] = _0x5e69e0.uid;
      _0x447875[_0x548a4e + 24 >> 2] = _0x5e69e0.gid;
      _0x447875[_0x548a4e + 28 >> 2] = _0x5e69e0.rdev;
      _0x447875[_0x548a4e + 32 >> 2] = 0;
      _0x3b432d = [_0x5e69e0.size >>> 0, (_0x33506f = _0x5e69e0.size, +Math.abs(_0x33506f) >= 1 ? _0x33506f > 0 ? (Math.min(+Math.floor(_0x33506f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x33506f - +(~~_0x33506f >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x447875[_0x548a4e + 40 >> 2] = _0x3b432d[0];
      _0x447875[_0x548a4e + 44 >> 2] = _0x3b432d[1];
      _0x447875[_0x548a4e + 48 >> 2] = 4096;
      _0x447875[_0x548a4e + 52 >> 2] = _0x5e69e0.blocks;
      _0x447875[_0x548a4e + 56 >> 2] = _0x5e69e0.atime.getTime() / 1000 | 0;
      _0x447875[_0x548a4e + 60 >> 2] = 0;
      _0x447875[_0x548a4e + 64 >> 2] = _0x5e69e0.mtime.getTime() / 1000 | 0;
      _0x447875[_0x548a4e + 68 >> 2] = 0;
      _0x447875[_0x548a4e + 72 >> 2] = _0x5e69e0.ctime.getTime() / 1000 | 0;
      _0x447875[_0x548a4e + 76 >> 2] = 0;
      _0x3b432d = [_0x5e69e0.ino >>> 0, (_0x33506f = _0x5e69e0.ino, +Math.abs(_0x33506f) >= 1 ? _0x33506f > 0 ? (Math.min(+Math.floor(_0x33506f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x33506f - +(~~_0x33506f >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x447875[_0x548a4e + 80 >> 2] = _0x3b432d[0];
      _0x447875[_0x548a4e + 84 >> 2] = _0x3b432d[1];
      return 0;
    },
    doMsync: function (_0x2a323e, _0x5e6523, _0x10b750, _0x4b8dad, _0x866ad6) {
      var _0x4be275 = _0x5d32f0.slice(_0x2a323e, _0x2a323e + _0x10b750);
      _0x415c36.msync(_0x5e6523, _0x4be275, _0x866ad6, _0x10b750, _0x4b8dad);
    },
    doMkdir: function (_0x375881, _0x3d971c) {
      _0x375881 = _0x2cbe33.normalize(_0x375881);
      if (_0x375881[_0x375881.length - 1] === "/") {
        _0x375881 = _0x375881.substr(0, _0x375881.length - 1);
      }
      _0x415c36.mkdir(_0x375881, _0x3d971c, 0);
      return 0;
    },
    doMknod: function (_0x3b8d30, _0x29f053, _0x461fa8) {
      switch (_0x29f053 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x415c36.mknod(_0x3b8d30, _0x29f053, _0x461fa8);
      return 0;
    },
    doReadlink: function (_0x42d0e0, _0x5bf665, _0x2446d0) {
      if (_0x2446d0 <= 0) {
        return -28;
      }
      var _0x1ac87e = _0x415c36.readlink(_0x42d0e0);
      var _0x457851 = Math.min(_0x2446d0, _0x72e291(_0x1ac87e));
      var _0x4c0fbb = _0xf10f52[_0x5bf665 + _0x457851];
      _0x291bc6(_0x1ac87e, _0x5bf665, _0x2446d0 + 1);
      _0xf10f52[_0x5bf665 + _0x457851] = _0x4c0fbb;
      return _0x457851;
    },
    doAccess: function (_0x22da8b, _0x2c83da) {
      if (_0x2c83da & ~7) {
        return -28;
      }
      var _0x149269;
      var _0x4d7426 = _0x415c36.lookupPath(_0x22da8b, {
        follow: true
      });
      _0x149269 = _0x4d7426.node;
      if (!_0x149269) {
        return -44;
      }
      var _0x50ea91 = "";
      if (_0x2c83da & 4) {
        _0x50ea91 += "r";
      }
      if (_0x2c83da & 2) {
        _0x50ea91 += "w";
      }
      if (_0x2c83da & 1) {
        _0x50ea91 += "x";
      }
      if (_0x50ea91 && _0x415c36.nodePermissions(_0x149269, _0x50ea91)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x5c6f76, _0x3304c0, _0x3376d9) {
      var _0x5149b7 = _0x415c36.getStream(_0x3376d9);
      if (_0x5149b7) {
        _0x415c36.close(_0x5149b7);
      }
      return _0x415c36.open(_0x5c6f76, _0x3304c0, 0, _0x3376d9, _0x3376d9).fd;
    },
    doReadv: function (_0x1d2571, _0x3140e1, _0x134956, _0x3bbb06) {
      var _0x18783d = 0;
      for (var _0x499ebd = 0; _0x499ebd < _0x134956; _0x499ebd++) {
        var _0x5aaaaa = _0x447875[_0x3140e1 + _0x499ebd * 8 >> 2];
        var _0x26ebf2 = _0x447875[_0x3140e1 + (_0x499ebd * 8 + 4) >> 2];
        var _0x379c5e = _0x415c36.read(_0x1d2571, _0xf10f52, _0x5aaaaa, _0x26ebf2, _0x3bbb06);
        if (_0x379c5e < 0) {
          return -1;
        }
        _0x18783d += _0x379c5e;
        if (_0x379c5e < _0x26ebf2) {
          break;
        }
      }
      return _0x18783d;
    },
    doWritev: function (_0x8b3df, _0x3d0626, _0x5d2f33, _0xe28bab) {
      var _0x419003 = 0;
      for (var _0x529091 = 0; _0x529091 < _0x5d2f33; _0x529091++) {
        var _0x7cf792 = _0x447875[_0x3d0626 + _0x529091 * 8 >> 2];
        var _0x21f8f1 = _0x447875[_0x3d0626 + (_0x529091 * 8 + 4) >> 2];
        var _0x28d81b = _0x415c36.write(_0x8b3df, _0xf10f52, _0x7cf792, _0x21f8f1, _0xe28bab);
        if (_0x28d81b < 0) {
          return -1;
        }
        _0x419003 += _0x28d81b;
      }
      return _0x419003;
    },
    varargs: undefined,
    get: function () {
      _0x58ac26.varargs += 4;
      var _0xd6bcd6 = _0x447875[_0x58ac26.varargs - 4 >> 2];
      return _0xd6bcd6;
    },
    getStr: function (_0x2b4596) {
      var _0x17f606 = _0x242db5(_0x2b4596);
      return _0x17f606;
    },
    getStreamFromFD: function (_0x208eaa) {
      var _0x2702ef = _0x415c36.getStream(_0x208eaa);
      if (!_0x2702ef) {
        throw new _0x415c36.ErrnoError(8);
      }
      return _0x2702ef;
    },
    get64: function (_0x51578a, _0x50d39b) {
      return _0x51578a;
    }
  };
  function _0x7c3e6a(_0x397f07, _0x3e49dd, _0x3692b9, _0xea484e, _0x22a857) {
    try {
      var _0x22bf45 = 0;
      var _0x15b4c7 = _0x3e49dd ? _0x447875[_0x3e49dd >> 2] : 0;
      var _0x433d3f = _0x3e49dd ? _0x447875[_0x3e49dd + 4 >> 2] : 0;
      var _0x1cddbc = _0x3692b9 ? _0x447875[_0x3692b9 >> 2] : 0;
      var _0x23d456 = _0x3692b9 ? _0x447875[_0x3692b9 + 4 >> 2] : 0;
      var _0x5a0e7b = _0xea484e ? _0x447875[_0xea484e >> 2] : 0;
      var _0x1f32d4 = _0xea484e ? _0x447875[_0xea484e + 4 >> 2] : 0;
      var _0x42d062 = 0;
      var _0x703357 = 0;
      var _0x28b225 = 0;
      var _0x1cba5b = 0;
      var _0x457cae = 0;
      var _0x250e1c = 0;
      var _0x4331d3 = (_0x3e49dd ? _0x447875[_0x3e49dd >> 2] : 0) | (_0x3692b9 ? _0x447875[_0x3692b9 >> 2] : 0) | (_0xea484e ? _0x447875[_0xea484e >> 2] : 0);
      var _0xc45aed = (_0x3e49dd ? _0x447875[_0x3e49dd + 4 >> 2] : 0) | (_0x3692b9 ? _0x447875[_0x3692b9 + 4 >> 2] : 0) | (_0xea484e ? _0x447875[_0xea484e + 4 >> 2] : 0);
      var _0x2649dc = function (_0x4ef3bc, _0x442f7c, _0x2f6f42, _0x100821) {
        if (_0x4ef3bc < 32) {
          return _0x442f7c & _0x100821;
        } else {
          return _0x2f6f42 & _0x100821;
        }
      };
      for (var _0x1cedca = 0; _0x1cedca < _0x397f07; _0x1cedca++) {
        var _0x896627 = 1 << _0x1cedca % 32;
        if (!_0x2649dc(_0x1cedca, _0x4331d3, _0xc45aed, _0x896627)) {
          continue;
        }
        var _0x1c7cc7 = _0x415c36.getStream(_0x1cedca);
        if (!_0x1c7cc7) {
          throw new _0x415c36.ErrnoError(8);
        }
        var _0x80d243 = _0x58ac26.DEFAULT_POLLMASK;
        if (_0x1c7cc7.stream_ops.poll) {
          _0x80d243 = _0x1c7cc7.stream_ops.poll(_0x1c7cc7);
        }
        if (_0x80d243 & 1 && _0x2649dc(_0x1cedca, _0x15b4c7, _0x433d3f, _0x896627)) {
          if (_0x1cedca < 32) {
            _0x42d062 = _0x42d062 | _0x896627;
          } else {
            _0x703357 = _0x703357 | _0x896627;
          }
          _0x22bf45++;
        }
        if (_0x80d243 & 4 && _0x2649dc(_0x1cedca, _0x1cddbc, _0x23d456, _0x896627)) {
          if (_0x1cedca < 32) {
            _0x28b225 = _0x28b225 | _0x896627;
          } else {
            _0x1cba5b = _0x1cba5b | _0x896627;
          }
          _0x22bf45++;
        }
        if (_0x80d243 & 2 && _0x2649dc(_0x1cedca, _0x5a0e7b, _0x1f32d4, _0x896627)) {
          if (_0x1cedca < 32) {
            _0x457cae = _0x457cae | _0x896627;
          } else {
            _0x250e1c = _0x250e1c | _0x896627;
          }
          _0x22bf45++;
        }
      }
      if (_0x3e49dd) {
        _0x447875[_0x3e49dd >> 2] = _0x42d062;
        _0x447875[_0x3e49dd + 4 >> 2] = _0x703357;
      }
      if (_0x3692b9) {
        _0x447875[_0x3692b9 >> 2] = _0x28b225;
        _0x447875[_0x3692b9 + 4 >> 2] = _0x1cba5b;
      }
      if (_0xea484e) {
        _0x447875[_0xea484e >> 2] = _0x457cae;
        _0x447875[_0xea484e + 4 >> 2] = _0x250e1c;
      }
      return _0x22bf45;
    } catch (_0x1648a) {
      if (typeof _0x415c36 === "undefined" || !(_0x1648a instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x1648a);
      }
      return -_0x1648a.errno;
    }
  }
  var _0x2a11de = {
    EPERM: 63,
    ENOENT: 44,
    ESRCH: 71,
    EINTR: 27,
    EIO: 29,
    ENXIO: 60,
    E2BIG: 1,
    ENOEXEC: 45,
    EBADF: 8,
    ECHILD: 12,
    EAGAIN: 6,
    EWOULDBLOCK: 6,
    ENOMEM: 48,
    EACCES: 2,
    EFAULT: 21,
    ENOTBLK: 105,
    EBUSY: 10,
    EEXIST: 20,
    EXDEV: 75,
    ENODEV: 43,
    ENOTDIR: 54,
    EISDIR: 31,
    EINVAL: 28,
    ENFILE: 41,
    EMFILE: 33,
    ENOTTY: 59,
    ETXTBSY: 74,
    EFBIG: 22,
    ENOSPC: 51,
    ESPIPE: 70,
    EROFS: 69,
    EMLINK: 34,
    EPIPE: 64,
    EDOM: 18,
    ERANGE: 68,
    ENOMSG: 49,
    EIDRM: 24,
    ECHRNG: 106,
    EL2NSYNC: 156,
    EL3HLT: 107,
    EL3RST: 108,
    ELNRNG: 109,
    EUNATCH: 110,
    ENOCSI: 111,
    EL2HLT: 112,
    EDEADLK: 16,
    ENOLCK: 46,
    EBADE: 113,
    EBADR: 114,
    EXFULL: 115,
    ENOANO: 104,
    EBADRQC: 103,
    EBADSLT: 102,
    EDEADLOCK: 16,
    EBFONT: 101,
    ENOSTR: 100,
    ENODATA: 116,
    ETIME: 117,
    ENOSR: 118,
    ENONET: 119,
    ENOPKG: 120,
    EREMOTE: 121,
    ENOLINK: 47,
    EADV: 122,
    ESRMNT: 123,
    ECOMM: 124,
    EPROTO: 65,
    EMULTIHOP: 36,
    EDOTDOT: 125,
    EBADMSG: 9,
    ENOTUNIQ: 126,
    EBADFD: 127,
    EREMCHG: 128,
    ELIBACC: 129,
    ELIBBAD: 130,
    ELIBSCN: 131,
    ELIBMAX: 132,
    ELIBEXEC: 133,
    ENOSYS: 52,
    ENOTEMPTY: 55,
    ENAMETOOLONG: 37,
    ELOOP: 32,
    EOPNOTSUPP: 138,
    EPFNOSUPPORT: 139,
    ECONNRESET: 15,
    ENOBUFS: 42,
    EAFNOSUPPORT: 5,
    EPROTOTYPE: 67,
    ENOTSOCK: 57,
    ENOPROTOOPT: 50,
    ESHUTDOWN: 140,
    ECONNREFUSED: 14,
    EADDRINUSE: 3,
    ECONNABORTED: 13,
    ENETUNREACH: 40,
    ENETDOWN: 38,
    ETIMEDOUT: 73,
    EHOSTDOWN: 142,
    EHOSTUNREACH: 23,
    EINPROGRESS: 26,
    EALREADY: 7,
    EDESTADDRREQ: 17,
    EMSGSIZE: 35,
    EPROTONOSUPPORT: 66,
    ESOCKTNOSUPPORT: 137,
    EADDRNOTAVAIL: 4,
    ENETRESET: 39,
    EISCONN: 30,
    ENOTCONN: 53,
    ETOOMANYREFS: 141,
    EUSERS: 136,
    EDQUOT: 19,
    ESTALE: 72,
    ENOTSUP: 138,
    ENOMEDIUM: 148,
    EILSEQ: 25,
    EOVERFLOW: 61,
    ECANCELED: 11,
    ENOTRECOVERABLE: 56,
    EOWNERDEAD: 62,
    ESTRPIPE: 135
  };
  var _0x54211a = {
    mount: function (_0x585cfa) {
      _0x24391e.websocket = _0x24391e.websocket && typeof _0x24391e.websocket === "object" ? _0x24391e.websocket : {};
      _0x24391e.websocket._callbacks = {};
      _0x24391e.websocket.on = function (_0x1fbc0a, _0x283e8a) {
        if (typeof _0x283e8a === "function") {
          this._callbacks[_0x1fbc0a] = _0x283e8a;
        }
        return this;
      };
      _0x24391e.websocket.emit = function (_0x14c8f8, _0x563571) {
        if (typeof this._callbacks[_0x14c8f8] === "function") {
          this._callbacks[_0x14c8f8].call(this, _0x563571);
        }
      };
      return _0x415c36.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x5b8ad1, _0x24575e, _0x4aca89) {
      _0x24575e &= ~526336;
      var _0x15f364 = _0x24575e == 1;
      if (_0x4aca89) {
        _0x18a873(_0x15f364 == (_0x4aca89 == 6));
      }
      var _0x46b89d = {
        family: _0x5b8ad1,
        type: _0x24575e,
        protocol: _0x4aca89,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x54211a.websocket_sock_ops
      };
      var _0x398bdd = _0x54211a.nextname();
      var _0x422a7b = _0x415c36.createNode(_0x54211a.root, _0x398bdd, 49152, 0);
      _0x422a7b.sock = _0x46b89d;
      var _0x3fc562 = _0x415c36.createStream({
        path: _0x398bdd,
        node: _0x422a7b,
        flags: 2,
        seekable: false,
        stream_ops: _0x54211a.stream_ops
      });
      _0x46b89d.stream = _0x3fc562;
      return _0x46b89d;
    },
    getSocket: function (_0x127d4a) {
      var _0x5b694d = _0x415c36.getStream(_0x127d4a);
      if (!_0x5b694d || !_0x415c36.isSocket(_0x5b694d.node.mode)) {
        return null;
      }
      return _0x5b694d.node.sock;
    },
    stream_ops: {
      poll: function (_0x248f57) {
        var _0x179b87 = _0x248f57.node.sock;
        return _0x179b87.sock_ops.poll(_0x179b87);
      },
      ioctl: function (_0x55560f, _0x1aa0f5, _0x784af5) {
        var _0x302df2 = _0x55560f.node.sock;
        return _0x302df2.sock_ops.ioctl(_0x302df2, _0x1aa0f5, _0x784af5);
      },
      read: function (_0x2c5ac9, _0x29d498, _0x410a8c, _0x465915, _0x5ab3a4) {
        var _0x5ce059 = _0x2c5ac9.node.sock;
        var _0x584ec7 = _0x5ce059.sock_ops.recvmsg(_0x5ce059, _0x465915);
        if (!_0x584ec7) {
          return 0;
        }
        _0x29d498.set(_0x584ec7.buffer, _0x410a8c);
        return _0x584ec7.buffer.length;
      },
      write: function (_0x9b9c5c, _0x5d13ef, _0x424e06, _0x1d415e, _0x575046) {
        var _0x42028d = _0x9b9c5c.node.sock;
        return _0x42028d.sock_ops.sendmsg(_0x42028d, _0x5d13ef, _0x424e06, _0x1d415e);
      },
      close: function (_0x204285) {
        var _0x433d01 = _0x204285.node.sock;
        _0x433d01.sock_ops.close(_0x433d01);
      }
    },
    nextname: function () {
      if (!_0x54211a.nextname.current) {
        _0x54211a.nextname.current = 0;
      }
      return "socket[" + _0x54211a.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x38cb02, _0x320b5f, _0x30c2a3) {
        var _0x30ed69;
        if (typeof _0x320b5f === "object") {
          _0x30ed69 = _0x320b5f;
          _0x320b5f = null;
          _0x30c2a3 = null;
        }
        if (_0x30ed69) {
          if (_0x30ed69._socket) {
            _0x320b5f = _0x30ed69._socket.remoteAddress;
            _0x30c2a3 = _0x30ed69._socket.remotePort;
          } else {
            var _0x312ecc = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x30ed69.url);
            if (!_0x312ecc) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x320b5f = _0x312ecc[1];
            _0x30c2a3 = parseInt(_0x312ecc[2], 10);
          }
        } else {
          try {
            var _0x19cf51 = _0x24391e.websocket && typeof _0x24391e.websocket === "object";
            var _0x274f73 = "ws:#".replace("#", "//");
            if (_0x19cf51) {
              if (typeof _0x24391e.websocket.url === "string") {
                _0x274f73 = _0x24391e.websocket.url;
              }
            }
            if (_0x274f73 === "ws://" || _0x274f73 === "wss://") {
              var _0x1648c5 = _0x320b5f.split("/");
              _0x274f73 = _0x274f73 + _0x1648c5[0] + ":" + _0x30c2a3 + "/" + _0x1648c5.slice(1).join("/");
            }
            var _0x1477dd = "binary";
            if (_0x19cf51) {
              if (typeof _0x24391e.websocket.subprotocol === "string") {
                _0x1477dd = _0x24391e.websocket.subprotocol;
              }
            }
            var _0x4efbc2 = undefined;
            if (_0x1477dd !== "null") {
              _0x1477dd = _0x1477dd.replace(/^ +| +$/g, "").split(/ *, */);
              _0x4efbc2 = _0x494d8b ? {
                protocol: _0x1477dd.toString()
              } : _0x1477dd;
            }
            if (_0x19cf51 && _0x24391e.websocket.subprotocol === null) {
              _0x1477dd = "null";
              _0x4efbc2 = undefined;
            }
            var _0x3f623c;
            if (_0x494d8b) {
              _0x3f623c = require("ws");
            } else {
              _0x3f623c = WebSocket;
            }
            _0x30ed69 = new _0x3f623c(_0x274f73, _0x4efbc2);
            _0x30ed69.binaryType = "arraybuffer";
          } catch (_0x3172cc) {
            throw new _0x415c36.ErrnoError(_0x2a11de.EHOSTUNREACH);
          }
        }
        var _0x4eb316 = {
          addr: _0x320b5f,
          port: _0x30c2a3,
          socket: _0x30ed69,
          dgram_send_queue: []
        };
        _0x54211a.websocket_sock_ops.addPeer(_0x38cb02, _0x4eb316);
        _0x54211a.websocket_sock_ops.handlePeerEvents(_0x38cb02, _0x4eb316);
        if (_0x38cb02.type === 2 && typeof _0x38cb02.sport !== "undefined") {
          _0x4eb316.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x38cb02.sport & 65280) >> 8, _0x38cb02.sport & 255]));
        }
        return _0x4eb316;
      },
      getPeer: function (_0x20e71c, _0x3685b5, _0x502f50) {
        return _0x20e71c.peers[_0x3685b5 + ":" + _0x502f50];
      },
      addPeer: function (_0x639228, _0x4e83b3) {
        _0x639228.peers[_0x4e83b3.addr + ":" + _0x4e83b3.port] = _0x4e83b3;
      },
      removePeer: function (_0x525f8c, _0x2d817b) {
        delete _0x525f8c.peers[_0x2d817b.addr + ":" + _0x2d817b.port];
      },
      handlePeerEvents: function (_0x321828, _0x1fa249) {
        var _0x33e05b = true;
        var _0x44c305 = function () {
          _0x24391e.websocket.emit("open", _0x321828.stream.fd);
          try {
            var _0x475d8a = _0x1fa249.dgram_send_queue.shift();
            while (_0x475d8a) {
              _0x1fa249.socket.send(_0x475d8a);
              _0x475d8a = _0x1fa249.dgram_send_queue.shift();
            }
          } catch (_0x28714a) {
            _0x1fa249.socket.close();
          }
        };
        function _0x42e901(_0x1820a6) {
          if (typeof _0x1820a6 === "string") {
            var _0x4536f9 = new TextEncoder();
            _0x1820a6 = _0x4536f9.encode(_0x1820a6);
          } else {
            _0x18a873(_0x1820a6.byteLength !== undefined);
            if (_0x1820a6.byteLength == 0) {
              return;
            } else {
              _0x1820a6 = new Uint8Array(_0x1820a6);
            }
          }
          var _0x1821bd = _0x33e05b;
          _0x33e05b = false;
          if (_0x1821bd && _0x1820a6.length === 10 && _0x1820a6[0] === 255 && _0x1820a6[1] === 255 && _0x1820a6[2] === 255 && _0x1820a6[3] === 255 && _0x1820a6[4] === "p".charCodeAt(0) && _0x1820a6[5] === "o".charCodeAt(0) && _0x1820a6[6] === "r".charCodeAt(0) && _0x1820a6[7] === "t".charCodeAt(0)) {
            var _0xc1c0fe = _0x1820a6[8] << 8 | _0x1820a6[9];
            _0x54211a.websocket_sock_ops.removePeer(_0x321828, _0x1fa249);
            _0x1fa249.port = _0xc1c0fe;
            _0x54211a.websocket_sock_ops.addPeer(_0x321828, _0x1fa249);
            return;
          }
          _0x321828.recv_queue.push({
            addr: _0x1fa249.addr,
            port: _0x1fa249.port,
            data: _0x1820a6
          });
          _0x24391e.websocket.emit("message", _0x321828.stream.fd);
        }
        if (_0x494d8b) {
          _0x1fa249.socket.on("open", _0x44c305);
          _0x1fa249.socket.on("message", function (_0x2fd1fe, _0x3f5aa4) {
            if (!_0x3f5aa4.binary) {
              return;
            }
            _0x42e901(new Uint8Array(_0x2fd1fe).buffer);
          });
          _0x1fa249.socket.on("close", function () {
            _0x24391e.websocket.emit("close", _0x321828.stream.fd);
          });
          _0x1fa249.socket.on("error", function (_0x261cd9) {
            _0x321828.error = _0x2a11de.ECONNREFUSED;
            _0x24391e.websocket.emit("error", [_0x321828.stream.fd, _0x321828.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x1fa249.socket.onopen = _0x44c305;
          _0x1fa249.socket.onclose = function () {
            _0x24391e.websocket.emit("close", _0x321828.stream.fd);
          };
          _0x1fa249.socket.onmessage = function _0x1ae8b7(_0x21983c) {
            _0x42e901(_0x21983c.data);
          };
          _0x1fa249.socket.onerror = function (_0x2f26b3) {
            _0x321828.error = _0x2a11de.ECONNREFUSED;
            _0x24391e.websocket.emit("error", [_0x321828.stream.fd, _0x321828.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x1d1e3a) {
        if (_0x1d1e3a.type === 1 && _0x1d1e3a.server) {
          if (_0x1d1e3a.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x18d7ee = 0;
        var _0xc01226 = _0x1d1e3a.type === 1 ? _0x54211a.websocket_sock_ops.getPeer(_0x1d1e3a, _0x1d1e3a.daddr, _0x1d1e3a.dport) : null;
        if (_0x1d1e3a.recv_queue.length || !_0xc01226 || _0xc01226 && _0xc01226.socket.readyState === _0xc01226.socket.CLOSING || _0xc01226 && _0xc01226.socket.readyState === _0xc01226.socket.CLOSED) {
          _0x18d7ee |= 65;
        }
        if (!_0xc01226 || _0xc01226 && _0xc01226.socket.readyState === _0xc01226.socket.OPEN) {
          _0x18d7ee |= 4;
        }
        if (_0xc01226 && _0xc01226.socket.readyState === _0xc01226.socket.CLOSING || _0xc01226 && _0xc01226.socket.readyState === _0xc01226.socket.CLOSED) {
          _0x18d7ee |= 16;
        }
        return _0x18d7ee;
      },
      ioctl: function (_0x48122b, _0x4aa3c3, _0x35cfaf) {
        switch (_0x4aa3c3) {
          case 21531:
            var _0x5f1214 = 0;
            if (_0x48122b.recv_queue.length) {
              _0x5f1214 = _0x48122b.recv_queue[0].data.length;
            }
            _0x447875[_0x35cfaf >> 2] = _0x5f1214;
            return 0;
          default:
            return _0x2a11de.EINVAL;
        }
      },
      close: function (_0x27afd9) {
        if (_0x27afd9.server) {
          try {
            _0x27afd9.server.close();
          } catch (_0x3b0e2a) {}
          _0x27afd9.server = null;
        }
        var _0x4f2743 = Object.keys(_0x27afd9.peers);
        for (var _0x21740b = 0; _0x21740b < _0x4f2743.length; _0x21740b++) {
          var _0x187ff0 = _0x27afd9.peers[_0x4f2743[_0x21740b]];
          try {
            _0x187ff0.socket.close();
          } catch (_0x22aa04) {}
          _0x54211a.websocket_sock_ops.removePeer(_0x27afd9, _0x187ff0);
        }
        return 0;
      },
      bind: function (_0x1432a1, _0x1c0aa6, _0x2f120b) {
        if (typeof _0x1432a1.saddr !== "undefined" || typeof _0x1432a1.sport !== "undefined") {
          throw new _0x415c36.ErrnoError(_0x2a11de.EINVAL);
        }
        _0x1432a1.saddr = _0x1c0aa6;
        _0x1432a1.sport = _0x2f120b;
        if (_0x1432a1.type === 2) {
          if (_0x1432a1.server) {
            _0x1432a1.server.close();
            _0x1432a1.server = null;
          }
          try {
            _0x1432a1.sock_ops.listen(_0x1432a1, 0);
          } catch (_0x59cbc3) {
            if (!(_0x59cbc3 instanceof _0x415c36.ErrnoError)) {
              throw _0x59cbc3;
            }
            if (_0x59cbc3.errno !== _0x2a11de.EOPNOTSUPP) {
              throw _0x59cbc3;
            }
          }
        }
      },
      connect: function (_0x58c254, _0x4ce583, _0x5e8740) {
        if (_0x58c254.server) {
          throw new _0x415c36.ErrnoError(_0x2a11de.EOPNOTSUPP);
        }
        if (typeof _0x58c254.daddr !== "undefined" && typeof _0x58c254.dport !== "undefined") {
          var _0x2adad5 = _0x54211a.websocket_sock_ops.getPeer(_0x58c254, _0x58c254.daddr, _0x58c254.dport);
          if (_0x2adad5) {
            if (_0x2adad5.socket.readyState === _0x2adad5.socket.CONNECTING) {
              throw new _0x415c36.ErrnoError(_0x2a11de.EALREADY);
            } else {
              throw new _0x415c36.ErrnoError(_0x2a11de.EISCONN);
            }
          }
        }
        var _0xd98ee4 = _0x54211a.websocket_sock_ops.createPeer(_0x58c254, _0x4ce583, _0x5e8740);
        _0x58c254.daddr = _0xd98ee4.addr;
        _0x58c254.dport = _0xd98ee4.port;
        throw new _0x415c36.ErrnoError(_0x2a11de.EINPROGRESS);
      },
      listen: function (_0x22644d, _0x4669cc) {
        if (!_0x494d8b) {
          throw new _0x415c36.ErrnoError(_0x2a11de.EOPNOTSUPP);
        }
        if (_0x22644d.server) {
          throw new _0x415c36.ErrnoError(_0x2a11de.EINVAL);
        }
        var _0x1ba8f7 = require("ws").Server;
        var _0x27ded8 = _0x22644d.saddr;
        _0x22644d.server = new _0x1ba8f7({
          host: _0x27ded8,
          port: _0x22644d.sport
        });
        _0x24391e.websocket.emit("listen", _0x22644d.stream.fd);
        _0x22644d.server.on("connection", function (_0x322826) {
          if (_0x22644d.type === 1) {
            var _0x5dc02e = _0x54211a.createSocket(_0x22644d.family, _0x22644d.type, _0x22644d.protocol);
            var _0x478af3 = _0x54211a.websocket_sock_ops.createPeer(_0x5dc02e, _0x322826);
            _0x5dc02e.daddr = _0x478af3.addr;
            _0x5dc02e.dport = _0x478af3.port;
            _0x22644d.pending.push(_0x5dc02e);
            _0x24391e.websocket.emit("connection", _0x5dc02e.stream.fd);
          } else {
            _0x54211a.websocket_sock_ops.createPeer(_0x22644d, _0x322826);
            _0x24391e.websocket.emit("connection", _0x22644d.stream.fd);
          }
        });
        _0x22644d.server.on("closed", function () {
          _0x24391e.websocket.emit("close", _0x22644d.stream.fd);
          _0x22644d.server = null;
        });
        _0x22644d.server.on("error", function (_0x30b68b) {
          _0x22644d.error = _0x2a11de.EHOSTUNREACH;
          _0x24391e.websocket.emit("error", [_0x22644d.stream.fd, _0x22644d.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x215e74) {
        if (!_0x215e74.server) {
          throw new _0x415c36.ErrnoError(_0x2a11de.EINVAL);
        }
        var _0x562e14 = _0x215e74.pending.shift();
        _0x562e14.stream.flags = _0x215e74.stream.flags;
        return _0x562e14;
      },
      getname: function (_0x429f0f, _0x510a27) {
        var _0x1c9600;
        var _0x4c154b;
        if (_0x510a27) {
          if (_0x429f0f.daddr === undefined || _0x429f0f.dport === undefined) {
            throw new _0x415c36.ErrnoError(_0x2a11de.ENOTCONN);
          }
          _0x1c9600 = _0x429f0f.daddr;
          _0x4c154b = _0x429f0f.dport;
        } else {
          _0x1c9600 = _0x429f0f.saddr || 0;
          _0x4c154b = _0x429f0f.sport || 0;
        }
        return {
          addr: _0x1c9600,
          port: _0x4c154b
        };
      },
      sendmsg: function (_0x3313c1, _0x2678c5, _0x339510, _0x56a09b, _0x427850, _0x33daae) {
        if (_0x3313c1.type === 2) {
          if (_0x427850 === undefined || _0x33daae === undefined) {
            _0x427850 = _0x3313c1.daddr;
            _0x33daae = _0x3313c1.dport;
          }
          if (_0x427850 === undefined || _0x33daae === undefined) {
            throw new _0x415c36.ErrnoError(_0x2a11de.EDESTADDRREQ);
          }
        } else {
          _0x427850 = _0x3313c1.daddr;
          _0x33daae = _0x3313c1.dport;
        }
        var _0x3b0d1a = _0x54211a.websocket_sock_ops.getPeer(_0x3313c1, _0x427850, _0x33daae);
        if (_0x3313c1.type === 1) {
          if (!_0x3b0d1a || _0x3b0d1a.socket.readyState === _0x3b0d1a.socket.CLOSING || _0x3b0d1a.socket.readyState === _0x3b0d1a.socket.CLOSED) {
            throw new _0x415c36.ErrnoError(_0x2a11de.ENOTCONN);
          } else if (_0x3b0d1a.socket.readyState === _0x3b0d1a.socket.CONNECTING) {
            throw new _0x415c36.ErrnoError(_0x2a11de.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x2678c5)) {
          _0x339510 += _0x2678c5.byteOffset;
          _0x2678c5 = _0x2678c5.buffer;
        }
        var _0x254175;
        _0x254175 = _0x2678c5.slice(_0x339510, _0x339510 + _0x56a09b);
        if (_0x3313c1.type === 2) {
          if (!_0x3b0d1a || _0x3b0d1a.socket.readyState !== _0x3b0d1a.socket.OPEN) {
            if (!_0x3b0d1a || _0x3b0d1a.socket.readyState === _0x3b0d1a.socket.CLOSING || _0x3b0d1a.socket.readyState === _0x3b0d1a.socket.CLOSED) {
              _0x3b0d1a = _0x54211a.websocket_sock_ops.createPeer(_0x3313c1, _0x427850, _0x33daae);
            }
            _0x3b0d1a.dgram_send_queue.push(_0x254175);
            return _0x56a09b;
          }
        }
        try {
          _0x3b0d1a.socket.send(_0x254175);
          return _0x56a09b;
        } catch (_0x346526) {
          throw new _0x415c36.ErrnoError(_0x2a11de.EINVAL);
        }
      },
      recvmsg: function (_0x5c8d22, _0xff51d9) {
        if (_0x5c8d22.type === 1 && _0x5c8d22.server) {
          throw new _0x415c36.ErrnoError(_0x2a11de.ENOTCONN);
        }
        var _0xab1fcf = _0x5c8d22.recv_queue.shift();
        if (!_0xab1fcf) {
          if (_0x5c8d22.type === 1) {
            var _0x240e8f = _0x54211a.websocket_sock_ops.getPeer(_0x5c8d22, _0x5c8d22.daddr, _0x5c8d22.dport);
            if (!_0x240e8f) {
              throw new _0x415c36.ErrnoError(_0x2a11de.ENOTCONN);
            } else if (_0x240e8f.socket.readyState === _0x240e8f.socket.CLOSING || _0x240e8f.socket.readyState === _0x240e8f.socket.CLOSED) {
              return null;
            } else {
              throw new _0x415c36.ErrnoError(_0x2a11de.EAGAIN);
            }
          } else {
            throw new _0x415c36.ErrnoError(_0x2a11de.EAGAIN);
          }
        }
        var _0x4204db = _0xab1fcf.data.byteLength || _0xab1fcf.data.length;
        var _0x44c75a = _0xab1fcf.data.byteOffset || 0;
        var _0x3bb519 = _0xab1fcf.data.buffer || _0xab1fcf.data;
        var _0x9ff849 = Math.min(_0xff51d9, _0x4204db);
        var _0x20f268 = {
          buffer: new Uint8Array(_0x3bb519, _0x44c75a, _0x9ff849),
          addr: _0xab1fcf.addr,
          port: _0xab1fcf.port
        };
        if (_0x5c8d22.type === 1 && _0x9ff849 < _0x4204db) {
          var _0x50aa8c = _0x4204db - _0x9ff849;
          _0xab1fcf.data = new Uint8Array(_0x3bb519, _0x44c75a + _0x9ff849, _0x50aa8c);
          _0x5c8d22.recv_queue.unshift(_0xab1fcf);
        }
        return _0x20f268;
      }
    }
  };
  function _0x28fb1d(_0x3daf03) {
    var _0xfed1b3 = _0x54211a.getSocket(_0x3daf03);
    if (!_0xfed1b3) {
      throw new _0x415c36.ErrnoError(8);
    }
    return _0xfed1b3;
  }
  function _0x4c5b5d(_0x54f1f7) {
    _0x447875[_0x25512d() >> 2] = _0x54f1f7;
    return _0x54f1f7;
  }
  function _0x41aa04(_0x533f24) {
    var _0x4ae5a5 = _0x533f24.split(".");
    for (var _0x31ce64 = 0; _0x31ce64 < 4; _0x31ce64++) {
      var _0x4d0b79 = Number(_0x4ae5a5[_0x31ce64]);
      if (isNaN(_0x4d0b79)) {
        return null;
      }
      _0x4ae5a5[_0x31ce64] = _0x4d0b79;
    }
    return (_0x4ae5a5[0] | _0x4ae5a5[1] << 8 | _0x4ae5a5[2] << 16 | _0x4ae5a5[3] << 24) >>> 0;
  }
  function _0x35de35(_0x1d9af1) {
    return parseInt(_0x1d9af1);
  }
  function _0x1635be(_0x58e03f) {
    var _0x57bf33;
    var _0x315269;
    var _0x5b2bef;
    var _0x41dd01;
    var _0x428cbf = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x509210 = [];
    if (!_0x428cbf.test(_0x58e03f)) {
      return null;
    }
    if (_0x58e03f === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x58e03f.startsWith("::")) {
      _0x58e03f = _0x58e03f.replace("::", "Z:");
    } else {
      _0x58e03f = _0x58e03f.replace("::", ":Z:");
    }
    if (_0x58e03f.indexOf(".") > 0) {
      _0x58e03f = _0x58e03f.replace(new RegExp("[.]", "g"), ":");
      _0x57bf33 = _0x58e03f.split(":");
      _0x57bf33[_0x57bf33.length - 4] = _0x35de35(_0x57bf33[_0x57bf33.length - 4]) + _0x35de35(_0x57bf33[_0x57bf33.length - 3]) * 256;
      _0x57bf33[_0x57bf33.length - 3] = _0x35de35(_0x57bf33[_0x57bf33.length - 2]) + _0x35de35(_0x57bf33[_0x57bf33.length - 1]) * 256;
      _0x57bf33 = _0x57bf33.slice(0, _0x57bf33.length - 2);
    } else {
      _0x57bf33 = _0x58e03f.split(":");
    }
    _0x5b2bef = 0;
    _0x41dd01 = 0;
    for (_0x315269 = 0; _0x315269 < _0x57bf33.length; _0x315269++) {
      if (typeof _0x57bf33[_0x315269] === "string") {
        if (_0x57bf33[_0x315269] === "Z") {
          for (_0x41dd01 = 0; _0x41dd01 < 8 - _0x57bf33.length + 1; _0x41dd01++) {
            _0x509210[_0x315269 + _0x41dd01] = 0;
          }
          _0x5b2bef = _0x41dd01 - 1;
        } else {
          _0x509210[_0x315269 + _0x5b2bef] = _0x150ea4(parseInt(_0x57bf33[_0x315269], 16));
        }
      } else {
        _0x509210[_0x315269 + _0x5b2bef] = _0x57bf33[_0x315269];
      }
    }
    return [_0x509210[1] << 16 | _0x509210[0], _0x509210[3] << 16 | _0x509210[2], _0x509210[5] << 16 | _0x509210[4], _0x509210[7] << 16 | _0x509210[6]];
  }
  function _0x3ee87b(_0x35c1dc, _0x32f4b9, _0x56f323, _0x366258, _0x469a5a) {
    switch (_0x32f4b9) {
      case 2:
        _0x56f323 = _0x41aa04(_0x56f323);
        if (_0x469a5a) {
          _0x447875[_0x469a5a >> 2] = 16;
        }
        _0x4ea5dd[_0x35c1dc >> 1] = _0x32f4b9;
        _0x447875[_0x35c1dc + 4 >> 2] = _0x56f323;
        _0x4ea5dd[_0x35c1dc + 2 >> 1] = _0x150ea4(_0x366258);
        _0x3b432d = [0, (_0x33506f = 0, +Math.abs(_0x33506f) >= 1 ? _0x33506f > 0 ? (Math.min(+Math.floor(_0x33506f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x33506f - +(~~_0x33506f >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x447875[_0x35c1dc + 8 >> 2] = _0x3b432d[0];
        _0x447875[_0x35c1dc + 12 >> 2] = _0x3b432d[1];
        break;
      case 10:
        _0x56f323 = _0x1635be(_0x56f323);
        if (_0x469a5a) {
          _0x447875[_0x469a5a >> 2] = 28;
        }
        _0x447875[_0x35c1dc >> 2] = _0x32f4b9;
        _0x447875[_0x35c1dc + 8 >> 2] = _0x56f323[0];
        _0x447875[_0x35c1dc + 12 >> 2] = _0x56f323[1];
        _0x447875[_0x35c1dc + 16 >> 2] = _0x56f323[2];
        _0x447875[_0x35c1dc + 20 >> 2] = _0x56f323[3];
        _0x4ea5dd[_0x35c1dc + 2 >> 1] = _0x150ea4(_0x366258);
        _0x447875[_0x35c1dc + 4 >> 2] = 0;
        _0x447875[_0x35c1dc + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0xc23971 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x7eca4c) {
      var _0x55c40d = _0x41aa04(_0x7eca4c);
      if (_0x55c40d !== null) {
        return _0x7eca4c;
      }
      _0x55c40d = _0x1635be(_0x7eca4c);
      if (_0x55c40d !== null) {
        return _0x7eca4c;
      }
      var _0x45a76a;
      if (_0xc23971.address_map.addrs[_0x7eca4c]) {
        _0x45a76a = _0xc23971.address_map.addrs[_0x7eca4c];
      } else {
        var _0x1999ad = _0xc23971.address_map.id++;
        _0x18a873(_0x1999ad < 65535, "exceeded max address mappings of 65535");
        _0x45a76a = "172.29." + (_0x1999ad & 255) + "." + (_0x1999ad & 65280);
        _0xc23971.address_map.names[_0x45a76a] = _0x7eca4c;
        _0xc23971.address_map.addrs[_0x7eca4c] = _0x45a76a;
      }
      return _0x45a76a;
    },
    lookup_addr: function (_0x26021b) {
      if (_0xc23971.address_map.names[_0x26021b]) {
        return _0xc23971.address_map.names[_0x26021b];
      }
      return null;
    }
  };
  function _0x4f63d2(_0x4dd4f9, _0x557ec4, _0x5613f4, _0x4b063c) {
    try {
      var _0x31d1d8 = _0x28fb1d(_0x4dd4f9);
      var _0x21e466 = _0x31d1d8.sock_ops.accept(_0x31d1d8);
      if (_0x557ec4) {
        var _0x4d8984 = _0x3ee87b(_0x557ec4, _0x21e466.family, _0xc23971.lookup_name(_0x21e466.daddr), _0x21e466.dport, _0x5613f4);
      }
      return _0x21e466.stream.fd;
    } catch (_0x29be29) {
      if (typeof _0x415c36 === "undefined" || !(_0x29be29 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x29be29);
      }
      return -_0x29be29.errno;
    }
  }
  function _0x2737a2(_0x10ce3b, _0x41d512) {
    try {
      _0x10ce3b = _0x58ac26.getStr(_0x10ce3b);
      return _0x58ac26.doAccess(_0x10ce3b, _0x41d512);
    } catch (_0x48977f) {
      if (typeof _0x415c36 === "undefined" || !(_0x48977f instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x48977f);
      }
      return -_0x48977f.errno;
    }
  }
  function _0x1f82c7(_0x34797e) {
    return (_0x34797e & 255) + "." + (_0x34797e >> 8 & 255) + "." + (_0x34797e >> 16 & 255) + "." + (_0x34797e >> 24 & 255);
  }
  function _0x9ea6cd(_0x36229c) {
    var _0x32f98d = "";
    var _0x330b4c = 0;
    var _0x328746 = 0;
    var _0x1a4529 = 0;
    var _0x3f1c05 = 0;
    var _0x2c41b2 = 0;
    var _0x2f93ba = 0;
    var _0x4d4158 = [_0x36229c[0] & 65535, _0x36229c[0] >> 16, _0x36229c[1] & 65535, _0x36229c[1] >> 16, _0x36229c[2] & 65535, _0x36229c[2] >> 16, _0x36229c[3] & 65535, _0x36229c[3] >> 16];
    var _0x320fb8 = true;
    var _0x3c8355 = "";
    for (_0x2f93ba = 0; _0x2f93ba < 5; _0x2f93ba++) {
      if (_0x4d4158[_0x2f93ba] !== 0) {
        _0x320fb8 = false;
        break;
      }
    }
    if (_0x320fb8) {
      _0x3c8355 = _0x1f82c7(_0x4d4158[6] | _0x4d4158[7] << 16);
      if (_0x4d4158[5] === -1) {
        _0x32f98d = "::ffff:";
        _0x32f98d += _0x3c8355;
        return _0x32f98d;
      }
      if (_0x4d4158[5] === 0) {
        _0x32f98d = "::";
        if (_0x3c8355 === "0.0.0.0") {
          _0x3c8355 = "";
        }
        if (_0x3c8355 === "0.0.0.1") {
          _0x3c8355 = "1";
        }
        _0x32f98d += _0x3c8355;
        return _0x32f98d;
      }
    }
    for (_0x330b4c = 0; _0x330b4c < 8; _0x330b4c++) {
      if (_0x4d4158[_0x330b4c] === 0) {
        if (_0x330b4c - _0x1a4529 > 1) {
          _0x2c41b2 = 0;
        }
        _0x1a4529 = _0x330b4c;
        _0x2c41b2++;
      }
      if (_0x2c41b2 > _0x328746) {
        _0x328746 = _0x2c41b2;
        _0x3f1c05 = _0x330b4c - _0x328746 + 1;
      }
    }
    for (_0x330b4c = 0; _0x330b4c < 8; _0x330b4c++) {
      if (_0x328746 > 1) {
        if (_0x4d4158[_0x330b4c] === 0 && _0x330b4c >= _0x3f1c05 && _0x330b4c < _0x3f1c05 + _0x328746) {
          if (_0x330b4c === _0x3f1c05) {
            _0x32f98d += ":";
            if (_0x3f1c05 === 0) {
              _0x32f98d += ":";
            }
          }
          continue;
        }
      }
      _0x32f98d += Number(_0x2253b0(_0x4d4158[_0x330b4c] & 65535)).toString(16);
      _0x32f98d += _0x330b4c < 7 ? ":" : "";
    }
    return _0x32f98d;
  }
  function _0x454d06(_0x4fb203, _0x423bd3) {
    var _0x2f5587 = _0x4ea5dd[_0x4fb203 >> 1];
    var _0x3777d4 = _0x2253b0(_0x5b2658[_0x4fb203 + 2 >> 1]);
    var _0x46179f;
    switch (_0x2f5587) {
      case 2:
        if (_0x423bd3 !== 16) {
          return {
            errno: 28
          };
        }
        _0x46179f = _0x447875[_0x4fb203 + 4 >> 2];
        _0x46179f = _0x1f82c7(_0x46179f);
        break;
      case 10:
        if (_0x423bd3 !== 28) {
          return {
            errno: 28
          };
        }
        _0x46179f = [_0x447875[_0x4fb203 + 8 >> 2], _0x447875[_0x4fb203 + 12 >> 2], _0x447875[_0x4fb203 + 16 >> 2], _0x447875[_0x4fb203 + 20 >> 2]];
        _0x46179f = _0x9ea6cd(_0x46179f);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x2f5587,
      addr: _0x46179f,
      port: _0x3777d4
    };
  }
  function _0x9631d5(_0x5d4bef, _0x1293e4, _0x1086c4) {
    if (_0x1086c4 && _0x5d4bef === 0) {
      return null;
    }
    var _0x3aead9 = _0x454d06(_0x5d4bef, _0x1293e4);
    if (_0x3aead9.errno) {
      throw new _0x415c36.ErrnoError(_0x3aead9.errno);
    }
    _0x3aead9.addr = _0xc23971.lookup_addr(_0x3aead9.addr) || _0x3aead9.addr;
    return _0x3aead9;
  }
  function _0x5354f2(_0x2759fe, _0x1d192f, _0x5bb8be) {
    try {
      var _0x3ddd61 = _0x28fb1d(_0x2759fe);
      var _0x92f52b = _0x9631d5(_0x1d192f, _0x5bb8be);
      _0x3ddd61.sock_ops.bind(_0x3ddd61, _0x92f52b.addr, _0x92f52b.port);
      return 0;
    } catch (_0x3a87f8) {
      if (typeof _0x415c36 === "undefined" || !(_0x3a87f8 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x3a87f8);
      }
      return -_0x3a87f8.errno;
    }
  }
  function _0x2c4371(_0x2625ab, _0x119d3e) {
    try {
      _0x2625ab = _0x58ac26.getStr(_0x2625ab);
      _0x415c36.chmod(_0x2625ab, _0x119d3e);
      return 0;
    } catch (_0x57db57) {
      if (typeof _0x415c36 === "undefined" || !(_0x57db57 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x57db57);
      }
      return -_0x57db57.errno;
    }
  }
  function _0x61b07d(_0x1f56ae, _0x1b6967, _0x505459) {
    try {
      var _0x8724c4 = _0x28fb1d(_0x1f56ae);
      var _0x459c01 = _0x9631d5(_0x1b6967, _0x505459);
      _0x8724c4.sock_ops.connect(_0x8724c4, _0x459c01.addr, _0x459c01.port);
      return 0;
    } catch (_0x26fd30) {
      if (typeof _0x415c36 === "undefined" || !(_0x26fd30 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x26fd30);
      }
      return -_0x26fd30.errno;
    }
  }
  function _0xc3eaeb(_0x29a959, _0x2f40de) {
    try {
      var _0x43ca75 = _0x58ac26.getStreamFromFD(_0x29a959);
      if (_0x43ca75.fd === _0x2f40de) {
        return _0x2f40de;
      }
      return _0x58ac26.doDup(_0x43ca75.path, _0x43ca75.flags, _0x2f40de);
    } catch (_0x5d4799) {
      if (typeof _0x415c36 === "undefined" || !(_0x5d4799 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x5d4799);
      }
      return -_0x5d4799.errno;
    }
  }
  function _0x10874d(_0x2519c4, _0x512a5e, _0x5a4d3d) {
    _0x58ac26.varargs = _0x5a4d3d;
    try {
      var _0x2d712b = _0x58ac26.getStreamFromFD(_0x2519c4);
      switch (_0x512a5e) {
        case 0:
          {
            var _0x35af69 = _0x58ac26.get();
            if (_0x35af69 < 0) {
              return -28;
            }
            var _0x1f2afe;
            _0x1f2afe = _0x415c36.open(_0x2d712b.path, _0x2d712b.flags, 0, _0x35af69);
            return _0x1f2afe.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x2d712b.flags;
        case 4:
          {
            var _0x35af69 = _0x58ac26.get();
            _0x2d712b.flags |= _0x35af69;
            return 0;
          }
        case 12:
          {
            var _0x35af69 = _0x58ac26.get();
            var _0x246606 = 0;
            _0x4ea5dd[_0x35af69 + _0x246606 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x4c5b5d(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x340476) {
      if (typeof _0x415c36 === "undefined" || !(_0x340476 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x340476);
      }
      return -_0x340476.errno;
    }
  }
  function _0x1d9e8e(_0x551a67, _0x117c5d) {
    try {
      var _0x3583cc = _0x58ac26.getStreamFromFD(_0x551a67);
      return _0x58ac26.doStat(_0x415c36.stat, _0x3583cc.path, _0x117c5d);
    } catch (_0x21770d) {
      if (typeof _0x415c36 === "undefined" || !(_0x21770d instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x21770d);
      }
      return -_0x21770d.errno;
    }
  }
  function _0x788403(_0x55cfc5, _0x3c3873, _0x4f825c, _0x17788e) {
    try {
      var _0x1f46e5 = _0x58ac26.get64(_0x4f825c, _0x17788e);
      _0x415c36.ftruncate(_0x55cfc5, _0x1f46e5);
      return 0;
    } catch (_0x30128e) {
      if (typeof _0x415c36 === "undefined" || !(_0x30128e instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x30128e);
      }
      return -_0x30128e.errno;
    }
  }
  function _0x49f5ff(_0x217794, _0x5e4c04) {
    try {
      if (_0x5e4c04 === 0) {
        return -28;
      }
      var _0x3ceb9e = _0x415c36.cwd();
      var _0x38a5de = _0x72e291(_0x3ceb9e);
      if (_0x5e4c04 < _0x38a5de + 1) {
        return -68;
      }
      _0x291bc6(_0x3ceb9e, _0x217794, _0x5e4c04);
      return _0x217794;
    } catch (_0x34506f) {
      if (typeof _0x415c36 === "undefined" || !(_0x34506f instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x34506f);
      }
      return -_0x34506f.errno;
    }
  }
  function _0x5d4782(_0x4a7ac0, _0x12709d, _0x63c058) {
    try {
      var _0x1b976f = _0x58ac26.getStreamFromFD(_0x4a7ac0);
      if (!_0x1b976f.getdents) {
        _0x1b976f.getdents = _0x415c36.readdir(_0x1b976f.path);
      }
      var _0x374e03 = 280;
      var _0x4e5046 = 0;
      var _0x461dcc = _0x415c36.llseek(_0x1b976f, 0, 1);
      var _0x40be6b = Math.floor(_0x461dcc / _0x374e03);
      while (_0x40be6b < _0x1b976f.getdents.length && _0x4e5046 + _0x374e03 <= _0x63c058) {
        var _0x4b7cf5;
        var _0x20179a;
        var _0x3e2a74 = _0x1b976f.getdents[_0x40be6b];
        if (_0x3e2a74[0] === ".") {
          _0x4b7cf5 = 1;
          _0x20179a = 4;
        } else {
          var _0x5219cd = _0x415c36.lookupNode(_0x1b976f.node, _0x3e2a74);
          _0x4b7cf5 = _0x5219cd.id;
          _0x20179a = _0x415c36.isChrdev(_0x5219cd.mode) ? 2 : _0x415c36.isDir(_0x5219cd.mode) ? 4 : _0x415c36.isLink(_0x5219cd.mode) ? 10 : 8;
        }
        _0x3b432d = [_0x4b7cf5 >>> 0, (_0x33506f = _0x4b7cf5, +Math.abs(_0x33506f) >= 1 ? _0x33506f > 0 ? (Math.min(+Math.floor(_0x33506f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x33506f - +(~~_0x33506f >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x447875[_0x12709d + _0x4e5046 >> 2] = _0x3b432d[0];
        _0x447875[_0x12709d + _0x4e5046 + 4 >> 2] = _0x3b432d[1];
        _0x3b432d = [(_0x40be6b + 1) * _0x374e03 >>> 0, (_0x33506f = (_0x40be6b + 1) * _0x374e03, +Math.abs(_0x33506f) >= 1 ? _0x33506f > 0 ? (Math.min(+Math.floor(_0x33506f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x33506f - +(~~_0x33506f >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x447875[_0x12709d + _0x4e5046 + 8 >> 2] = _0x3b432d[0];
        _0x447875[_0x12709d + _0x4e5046 + 12 >> 2] = _0x3b432d[1];
        _0x4ea5dd[_0x12709d + _0x4e5046 + 16 >> 1] = 280;
        _0xf10f52[_0x12709d + _0x4e5046 + 18 >> 0] = _0x20179a;
        _0x291bc6(_0x3e2a74, _0x12709d + _0x4e5046 + 19, 256);
        _0x4e5046 += _0x374e03;
        _0x40be6b += 1;
      }
      _0x415c36.llseek(_0x1b976f, _0x40be6b * _0x374e03, 0);
      return _0x4e5046;
    } catch (_0x3bc47b) {
      if (typeof _0x415c36 === "undefined" || !(_0x3bc47b instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x3bc47b);
      }
      return -_0x3bc47b.errno;
    }
  }
  function _0x5708a8() {
    return 0;
  }
  function _0x213576() {
    return _0x5708a8();
  }
  function _0x541686(_0x58b6af, _0x12078c, _0x5ad0da) {
    try {
      var _0x1c743f = _0x28fb1d(_0x58b6af);
      if (!_0x1c743f.daddr) {
        return -53;
      }
      var _0x291931 = _0x3ee87b(_0x12078c, _0x1c743f.family, _0xc23971.lookup_name(_0x1c743f.daddr), _0x1c743f.dport, _0x5ad0da);
      return 0;
    } catch (_0x2a412e) {
      if (typeof _0x415c36 === "undefined" || !(_0x2a412e instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x2a412e);
      }
      return -_0x2a412e.errno;
    }
  }
  function _0x6dee0c() {
    return 42;
  }
  function _0x160405(_0x5063dc, _0x4ea22b) {
    try {
      _0xbf679d(_0x4ea22b, 0, 136);
      _0x447875[_0x4ea22b >> 2] = 1;
      _0x447875[_0x4ea22b + 4 >> 2] = 2;
      _0x447875[_0x4ea22b + 8 >> 2] = 3;
      _0x447875[_0x4ea22b + 12 >> 2] = 4;
      return 0;
    } catch (_0x17b5e1) {
      if (typeof _0x415c36 === "undefined" || !(_0x17b5e1 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x17b5e1);
      }
      return -_0x17b5e1.errno;
    }
  }
  function _0x1c7405(_0x2e16f5, _0xa88d47, _0x28398d) {
    try {
      _0x38748e("__sys_getsockname " + _0x2e16f5);
      var _0x4ed334 = _0x28fb1d(_0x2e16f5);
      var _0x5bb65f = _0x3ee87b(_0xa88d47, _0x4ed334.family, _0xc23971.lookup_name(_0x4ed334.saddr || "0.0.0.0"), _0x4ed334.sport, _0x28398d);
      return 0;
    } catch (_0x4eb052) {
      if (typeof _0x415c36 === "undefined" || !(_0x4eb052 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x4eb052);
      }
      return -_0x4eb052.errno;
    }
  }
  function _0x1ca295(_0x37a09d, _0x3bc22c, _0x58b869, _0xdf6d55, _0x404f72) {
    try {
      var _0x4e2457 = _0x28fb1d(_0x37a09d);
      if (_0x3bc22c === 1) {
        if (_0x58b869 === 4) {
          _0x447875[_0xdf6d55 >> 2] = _0x4e2457.error;
          _0x447875[_0x404f72 >> 2] = 4;
          _0x4e2457.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x50bde4) {
      if (typeof _0x415c36 === "undefined" || !(_0x50bde4 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x50bde4);
      }
      return -_0x50bde4.errno;
    }
  }
  function _0x63f6ac() {
    return _0x5708a8();
  }
  function _0x3a2270(_0x3795f9, _0x59bbb5, _0x2827c8) {
    _0x58ac26.varargs = _0x2827c8;
    try {
      var _0x3d5141 = _0x58ac26.getStreamFromFD(_0x3795f9);
      switch (_0x59bbb5) {
        case 21509:
        case 21505:
          {
            if (!_0x3d5141.tty) {
              return -59;
            }
            return 0;
          }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          {
            if (!_0x3d5141.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x3d5141.tty) {
              return -59;
            }
            var _0xe4d70e = _0x58ac26.get();
            _0x447875[_0xe4d70e >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x3d5141.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0xe4d70e = _0x58ac26.get();
            return _0x415c36.ioctl(_0x3d5141, _0x59bbb5, _0xe4d70e);
          }
        case 21523:
          {
            if (!_0x3d5141.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x3d5141.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x5bcf92("bad ioctl syscall " + _0x59bbb5);
      }
    } catch (_0x396b29) {
      if (typeof _0x415c36 === "undefined" || !(_0x396b29 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x396b29);
      }
      return -_0x396b29.errno;
    }
  }
  function _0x38626c(_0x5946b6, _0x5483af) {
    try {
      var _0xae652a = _0x28fb1d(_0x5946b6);
      _0xae652a.sock_ops.listen(_0xae652a, _0x5483af);
      return 0;
    } catch (_0x55cc26) {
      if (typeof _0x415c36 === "undefined" || !(_0x55cc26 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x55cc26);
      }
      return -_0x55cc26.errno;
    }
  }
  function _0x3f6c0e(_0x50d476, _0x2fb192) {
    try {
      _0x50d476 = _0x58ac26.getStr(_0x50d476);
      return _0x58ac26.doStat(_0x415c36.lstat, _0x50d476, _0x2fb192);
    } catch (_0x335b62) {
      if (typeof _0x415c36 === "undefined" || !(_0x335b62 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x335b62);
      }
      return -_0x335b62.errno;
    }
  }
  function _0x15217b(_0x553631, _0x59b094) {
    try {
      _0x553631 = _0x58ac26.getStr(_0x553631);
      return _0x58ac26.doMkdir(_0x553631, _0x59b094);
    } catch (_0x1d170e) {
      if (typeof _0x415c36 === "undefined" || !(_0x1d170e instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x1d170e);
      }
      return -_0x1d170e.errno;
    }
  }
  function _0x2b13a5(_0x66b657, _0xda0169, _0x12b477, _0x30ea05, _0x40834f, _0x522c24) {
    _0x522c24 <<= 12;
    var _0x3f1c08;
    var _0x59ba02 = false;
    if ((_0x30ea05 & 16) !== 0 && _0x66b657 % 65536 !== 0) {
      return -28;
    }
    if ((_0x30ea05 & 32) !== 0) {
      _0x3f1c08 = _0x2a72f5(65536, _0xda0169);
      if (!_0x3f1c08) {
        return -48;
      }
      _0xbf679d(_0x3f1c08, 0, _0xda0169);
      _0x59ba02 = true;
    } else {
      var _0x32d3f8 = _0x415c36.getStream(_0x40834f);
      if (!_0x32d3f8) {
        return -8;
      }
      var _0x15490b = _0x415c36.mmap(_0x32d3f8, _0x66b657, _0xda0169, _0x522c24, _0x12b477, _0x30ea05);
      _0x3f1c08 = _0x15490b.ptr;
      _0x59ba02 = _0x15490b.allocated;
    }
    _0x58ac26.mappings[_0x3f1c08] = {
      malloc: _0x3f1c08,
      len: _0xda0169,
      allocated: _0x59ba02,
      fd: _0x40834f,
      prot: _0x12b477,
      flags: _0x30ea05,
      offset: _0x522c24
    };
    return _0x3f1c08;
  }
  function _0x55a804(_0x1958d9, _0x52f0ef, _0x36befe, _0x427a8f, _0x153dcf, _0x1aa77d) {
    try {
      return _0x2b13a5(_0x1958d9, _0x52f0ef, _0x36befe, _0x427a8f, _0x153dcf, _0x1aa77d);
    } catch (_0x574191) {
      if (typeof _0x415c36 === "undefined" || !(_0x574191 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x574191);
      }
      return -_0x574191.errno;
    }
  }
  function _0x46d4c1(_0x40451c, _0x43c95d) {
    if ((_0x40451c | 0) === -1 || _0x43c95d === 0) {
      return -28;
    }
    var _0x24b8a3 = _0x58ac26.mappings[_0x40451c];
    if (!_0x24b8a3) {
      return 0;
    }
    if (_0x43c95d === _0x24b8a3.len) {
      var _0xb8c413 = _0x415c36.getStream(_0x24b8a3.fd);
      if (_0xb8c413) {
        if (_0x24b8a3.prot & 2) {
          _0x58ac26.doMsync(_0x40451c, _0xb8c413, _0x43c95d, _0x24b8a3.flags, _0x24b8a3.offset);
        }
        _0x415c36.munmap(_0xb8c413);
      }
      _0x58ac26.mappings[_0x40451c] = null;
      if (_0x24b8a3.allocated) {
        _0xc27a35(_0x24b8a3.malloc);
      }
    }
    return 0;
  }
  function _0x3b034d(_0x287332, _0x38677b) {
    try {
      return _0x46d4c1(_0x287332, _0x38677b);
    } catch (_0x2b05c3) {
      if (typeof _0x415c36 === "undefined" || !(_0x2b05c3 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x2b05c3);
      }
      return -_0x2b05c3.errno;
    }
  }
  function _0x43109e(_0x4b1172, _0x2a4a81, _0x5882fc) {
    _0x58ac26.varargs = _0x5882fc;
    try {
      var _0x2f10ca = _0x58ac26.getStr(_0x4b1172);
      var _0x4e9cd6 = _0x5882fc ? _0x58ac26.get() : 0;
      var _0x405355 = _0x415c36.open(_0x2f10ca, _0x2a4a81, _0x4e9cd6);
      return _0x405355.fd;
    } catch (_0x53f575) {
      if (typeof _0x415c36 === "undefined" || !(_0x53f575 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x53f575);
      }
      return -_0x53f575.errno;
    }
  }
  var _0x33eca5 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x4e47c7) {
      return _0x415c36.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x4e91e5 = {
        buckets: []
      };
      _0x4e91e5.buckets.push({
        buffer: new Uint8Array(_0x33eca5.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x364f1a = _0x33eca5.nextname();
      var _0x4c8cb7 = _0x33eca5.nextname();
      var _0x5315dd = _0x415c36.createNode(_0x33eca5.root, _0x364f1a, 4096, 0);
      var _0x3b009d = _0x415c36.createNode(_0x33eca5.root, _0x4c8cb7, 4096, 0);
      _0x5315dd.pipe = _0x4e91e5;
      _0x3b009d.pipe = _0x4e91e5;
      var _0x4d39c5 = _0x415c36.createStream({
        path: _0x364f1a,
        node: _0x5315dd,
        flags: 0,
        seekable: false,
        stream_ops: _0x33eca5.stream_ops
      });
      _0x5315dd.stream = _0x4d39c5;
      var _0x3e0c6d = _0x415c36.createStream({
        path: _0x4c8cb7,
        node: _0x3b009d,
        flags: 1,
        seekable: false,
        stream_ops: _0x33eca5.stream_ops
      });
      _0x3b009d.stream = _0x3e0c6d;
      return {
        readable_fd: _0x4d39c5.fd,
        writable_fd: _0x3e0c6d.fd
      };
    },
    stream_ops: {
      poll: function (_0x32ec9a) {
        var _0x5253f3 = _0x32ec9a.node.pipe;
        if ((_0x32ec9a.flags & 2097155) === 1) {
          return 260;
        } else if (_0x5253f3.buckets.length > 0) {
          for (var _0x263cb0 = 0; _0x263cb0 < _0x5253f3.buckets.length; _0x263cb0++) {
            var _0x334f73 = _0x5253f3.buckets[_0x263cb0];
            if (_0x334f73.offset - _0x334f73.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0xa057e2, _0x3953fe, _0x8b3437) {
        return _0x2a11de.EINVAL;
      },
      fsync: function (_0xb1e268) {
        return _0x2a11de.EINVAL;
      },
      read: function (_0x4c558c, _0x16ffd6, _0x42ec03, _0x33facb, _0x3aad47) {
        var _0x36069b = _0x4c558c.node.pipe;
        var _0x4f893f = 0;
        for (var _0x43b5ef = 0; _0x43b5ef < _0x36069b.buckets.length; _0x43b5ef++) {
          var _0x51ca3b = _0x36069b.buckets[_0x43b5ef];
          _0x4f893f += _0x51ca3b.offset - _0x51ca3b.roffset;
        }
        _0x18a873(_0x16ffd6 instanceof ArrayBuffer || ArrayBuffer.isView(_0x16ffd6));
        var _0x1a97de = _0x16ffd6.subarray(_0x42ec03, _0x42ec03 + _0x33facb);
        if (_0x33facb <= 0) {
          return 0;
        }
        if (_0x4f893f == 0) {
          throw new _0x415c36.ErrnoError(_0x2a11de.EAGAIN);
        }
        var _0x290ffb = Math.min(_0x4f893f, _0x33facb);
        var _0x93e4d4 = _0x290ffb;
        var _0x59e263 = 0;
        for (var _0x43b5ef = 0; _0x43b5ef < _0x36069b.buckets.length; _0x43b5ef++) {
          var _0x545182 = _0x36069b.buckets[_0x43b5ef];
          var _0x460c93 = _0x545182.offset - _0x545182.roffset;
          if (_0x290ffb <= _0x460c93) {
            var _0x231741 = _0x545182.buffer.subarray(_0x545182.roffset, _0x545182.offset);
            if (_0x290ffb < _0x460c93) {
              _0x231741 = _0x231741.subarray(0, _0x290ffb);
              _0x545182.roffset += _0x290ffb;
            } else {
              _0x59e263++;
            }
            _0x1a97de.set(_0x231741);
            break;
          } else {
            var _0x231741 = _0x545182.buffer.subarray(_0x545182.roffset, _0x545182.offset);
            _0x1a97de.set(_0x231741);
            _0x1a97de = _0x1a97de.subarray(_0x231741.byteLength);
            _0x290ffb -= _0x231741.byteLength;
            _0x59e263++;
          }
        }
        if (_0x59e263 && _0x59e263 == _0x36069b.buckets.length) {
          _0x59e263--;
          _0x36069b.buckets[_0x59e263].offset = 0;
          _0x36069b.buckets[_0x59e263].roffset = 0;
        }
        _0x36069b.buckets.splice(0, _0x59e263);
        return _0x93e4d4;
      },
      write: function (_0x4b6d97, _0x399a9b, _0x320fd8, _0x4d8760, _0x37734a) {
        var _0x2b98db = _0x4b6d97.node.pipe;
        _0x18a873(_0x399a9b instanceof ArrayBuffer || ArrayBuffer.isView(_0x399a9b));
        var _0x1d6cb4 = _0x399a9b.subarray(_0x320fd8, _0x320fd8 + _0x4d8760);
        var _0x510cc4 = _0x1d6cb4.byteLength;
        if (_0x510cc4 <= 0) {
          return 0;
        }
        var _0x24737d = null;
        if (_0x2b98db.buckets.length == 0) {
          _0x24737d = {
            buffer: new Uint8Array(_0x33eca5.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x2b98db.buckets.push(_0x24737d);
        } else {
          _0x24737d = _0x2b98db.buckets[_0x2b98db.buckets.length - 1];
        }
        _0x18a873(_0x24737d.offset <= _0x33eca5.BUCKET_BUFFER_SIZE);
        var _0x2a5e4d = _0x33eca5.BUCKET_BUFFER_SIZE - _0x24737d.offset;
        if (_0x2a5e4d >= _0x510cc4) {
          _0x24737d.buffer.set(_0x1d6cb4, _0x24737d.offset);
          _0x24737d.offset += _0x510cc4;
          return _0x510cc4;
        } else if (_0x2a5e4d > 0) {
          _0x24737d.buffer.set(_0x1d6cb4.subarray(0, _0x2a5e4d), _0x24737d.offset);
          _0x24737d.offset += _0x2a5e4d;
          _0x1d6cb4 = _0x1d6cb4.subarray(_0x2a5e4d, _0x1d6cb4.byteLength);
        }
        var _0x3a326d = _0x1d6cb4.byteLength / _0x33eca5.BUCKET_BUFFER_SIZE | 0;
        var _0x10f97a = _0x1d6cb4.byteLength % _0x33eca5.BUCKET_BUFFER_SIZE;
        for (var _0x56d1d1 = 0; _0x56d1d1 < _0x3a326d; _0x56d1d1++) {
          var _0x59406a = {
            buffer: new Uint8Array(_0x33eca5.BUCKET_BUFFER_SIZE),
            offset: _0x33eca5.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x2b98db.buckets.push(_0x59406a);
          _0x59406a.buffer.set(_0x1d6cb4.subarray(0, _0x33eca5.BUCKET_BUFFER_SIZE));
          _0x1d6cb4 = _0x1d6cb4.subarray(_0x33eca5.BUCKET_BUFFER_SIZE, _0x1d6cb4.byteLength);
        }
        if (_0x10f97a > 0) {
          var _0x59406a = {
            buffer: new Uint8Array(_0x33eca5.BUCKET_BUFFER_SIZE),
            offset: _0x1d6cb4.byteLength,
            roffset: 0
          };
          _0x2b98db.buckets.push(_0x59406a);
          _0x59406a.buffer.set(_0x1d6cb4);
        }
        return _0x510cc4;
      },
      close: function (_0x104b69) {
        var _0x3979be = _0x104b69.node.pipe;
        _0x3979be.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x33eca5.nextname.current) {
        _0x33eca5.nextname.current = 0;
      }
      return "pipe[" + _0x33eca5.nextname.current++ + "]";
    }
  };
  function _0x551fb3(_0x2e2c7b) {
    try {
      if (_0x2e2c7b == 0) {
        throw new _0x415c36.ErrnoError(21);
      }
      var _0x42896c = _0x33eca5.createPipe();
      _0x447875[_0x2e2c7b >> 2] = _0x42896c.readable_fd;
      _0x447875[_0x2e2c7b + 4 >> 2] = _0x42896c.writable_fd;
      return 0;
    } catch (_0x5b2105) {
      if (typeof _0x415c36 === "undefined" || !(_0x5b2105 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x5b2105);
      }
      return -_0x5b2105.errno;
    }
  }
  function _0x4c1f3c(_0x35aed2, _0x286b2c, _0x160a30) {
    try {
      var _0x3e1a0b = 0;
      for (var _0x19a5be = 0; _0x19a5be < _0x286b2c; _0x19a5be++) {
        var _0x2fa937 = _0x35aed2 + _0x19a5be * 8;
        var _0x27e9c2 = _0x447875[_0x2fa937 >> 2];
        var _0xc8be94 = _0x4ea5dd[_0x2fa937 + 4 >> 1];
        var _0x5a5cc6 = 32;
        var _0x5024e3 = _0x415c36.getStream(_0x27e9c2);
        if (_0x5024e3) {
          _0x5a5cc6 = _0x58ac26.DEFAULT_POLLMASK;
          if (_0x5024e3.stream_ops.poll) {
            _0x5a5cc6 = _0x5024e3.stream_ops.poll(_0x5024e3);
          }
        }
        _0x5a5cc6 &= _0xc8be94 | 8 | 16;
        if (_0x5a5cc6) {
          _0x3e1a0b++;
        }
        _0x4ea5dd[_0x2fa937 + 6 >> 1] = _0x5a5cc6;
      }
      return _0x3e1a0b;
    } catch (_0x3d328d) {
      if (typeof _0x415c36 === "undefined" || !(_0x3d328d instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x3d328d);
      }
      return -_0x3d328d.errno;
    }
  }
  function _0x1ef058(_0x48265a, _0x200115, _0x4bfbc8) {
    try {
      _0x48265a = _0x58ac26.getStr(_0x48265a);
      return _0x58ac26.doReadlink(_0x48265a, _0x200115, _0x4bfbc8);
    } catch (_0x1e5941) {
      if (typeof _0x415c36 === "undefined" || !(_0x1e5941 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x1e5941);
      }
      return -_0x1e5941.errno;
    }
  }
  function _0xf50021(_0x42330a, _0x1823e5, _0x5b0242, _0x1a6170, _0x244535, _0x44bdd5) {
    try {
      var _0x302844 = _0x28fb1d(_0x42330a);
      var _0x13ab57 = _0x302844.sock_ops.recvmsg(_0x302844, _0x5b0242);
      if (!_0x13ab57) {
        return 0;
      }
      if (_0x244535) {
        var _0xf09997 = _0x3ee87b(_0x244535, _0x302844.family, _0xc23971.lookup_name(_0x13ab57.addr), _0x13ab57.port, _0x44bdd5);
      }
      _0x5d32f0.set(_0x13ab57.buffer, _0x1823e5);
      return _0x13ab57.buffer.byteLength;
    } catch (_0x557670) {
      if (typeof _0x415c36 === "undefined" || !(_0x557670 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x557670);
      }
      return -_0x557670.errno;
    }
  }
  function _0x25e134(_0x5d2a65, _0x46f637, _0x1be334) {
    try {
      var _0x1637ac = _0x28fb1d(_0x5d2a65);
      var _0x5eedbd = _0x447875[_0x46f637 + 8 >> 2];
      var _0x46e0d7 = _0x447875[_0x46f637 + 12 >> 2];
      var _0x45bb6f = 0;
      for (var _0x4bce41 = 0; _0x4bce41 < _0x46e0d7; _0x4bce41++) {
        _0x45bb6f += _0x447875[_0x5eedbd + (_0x4bce41 * 8 + 4) >> 2];
      }
      var _0x53fe35 = _0x1637ac.sock_ops.recvmsg(_0x1637ac, _0x45bb6f);
      if (!_0x53fe35) {
        return 0;
      }
      var _0x6d7479 = _0x447875[_0x46f637 >> 2];
      if (_0x6d7479) {
        var _0x239435 = _0x3ee87b(_0x6d7479, _0x1637ac.family, _0xc23971.lookup_name(_0x53fe35.addr), _0x53fe35.port);
      }
      var _0x68d650 = 0;
      var _0xaabbee = _0x53fe35.buffer.byteLength;
      for (var _0x4bce41 = 0; _0xaabbee > 0 && _0x4bce41 < _0x46e0d7; _0x4bce41++) {
        var _0x451c88 = _0x447875[_0x5eedbd + (_0x4bce41 * 8 + 0) >> 2];
        var _0x31240e = _0x447875[_0x5eedbd + (_0x4bce41 * 8 + 4) >> 2];
        if (!_0x31240e) {
          continue;
        }
        var _0x2a9b65 = Math.min(_0x31240e, _0xaabbee);
        var _0x1a0513 = _0x53fe35.buffer.subarray(_0x68d650, _0x68d650 + _0x2a9b65);
        _0x5d32f0.set(_0x1a0513, _0x451c88 + _0x68d650);
        _0x68d650 += _0x2a9b65;
        _0xaabbee -= _0x2a9b65;
      }
      return _0x68d650;
    } catch (_0x10d297) {
      if (typeof _0x415c36 === "undefined" || !(_0x10d297 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x10d297);
      }
      return -_0x10d297.errno;
    }
  }
  function _0x4352b8(_0x7a02a5, _0x52e61c) {
    try {
      _0x7a02a5 = _0x58ac26.getStr(_0x7a02a5);
      _0x52e61c = _0x58ac26.getStr(_0x52e61c);
      _0x415c36.rename(_0x7a02a5, _0x52e61c);
      return 0;
    } catch (_0x7939d7) {
      if (typeof _0x415c36 === "undefined" || !(_0x7939d7 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x7939d7);
      }
      return -_0x7939d7.errno;
    }
  }
  function _0x5e9aea(_0x6ad2b2) {
    try {
      _0x6ad2b2 = _0x58ac26.getStr(_0x6ad2b2);
      _0x415c36.rmdir(_0x6ad2b2);
      return 0;
    } catch (_0x5aa9f7) {
      if (typeof _0x415c36 === "undefined" || !(_0x5aa9f7 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x5aa9f7);
      }
      return -_0x5aa9f7.errno;
    }
  }
  function _0x4a8495(_0xe46365, _0x5ca62a, _0x472a91) {
    try {
      var _0x2d88f9 = _0x28fb1d(_0xe46365);
      var _0x561da8 = _0x447875[_0x5ca62a + 8 >> 2];
      var _0x26fea0 = _0x447875[_0x5ca62a + 12 >> 2];
      var _0x40cdf0;
      var _0x12e7fc;
      var _0x56de64 = _0x447875[_0x5ca62a >> 2];
      var _0x33ec84 = _0x447875[_0x5ca62a + 4 >> 2];
      if (_0x56de64) {
        var _0x579440 = _0x454d06(_0x56de64, _0x33ec84);
        if (_0x579440.errno) {
          return -_0x579440.errno;
        }
        _0x12e7fc = _0x579440.port;
        _0x40cdf0 = _0xc23971.lookup_addr(_0x579440.addr) || _0x579440.addr;
      }
      var _0x4e3c68 = 0;
      for (var _0x519b2e = 0; _0x519b2e < _0x26fea0; _0x519b2e++) {
        _0x4e3c68 += _0x447875[_0x561da8 + (_0x519b2e * 8 + 4) >> 2];
      }
      var _0x13f985 = new Uint8Array(_0x4e3c68);
      var _0x58bc71 = 0;
      for (var _0x519b2e = 0; _0x519b2e < _0x26fea0; _0x519b2e++) {
        var _0x370015 = _0x447875[_0x561da8 + (_0x519b2e * 8 + 0) >> 2];
        var _0x3880d9 = _0x447875[_0x561da8 + (_0x519b2e * 8 + 4) >> 2];
        for (var _0x1a57b5 = 0; _0x1a57b5 < _0x3880d9; _0x1a57b5++) {
          _0x13f985[_0x58bc71++] = _0xf10f52[_0x370015 + _0x1a57b5 >> 0];
        }
      }
      return _0x2d88f9.sock_ops.sendmsg(_0x2d88f9, _0x13f985, 0, _0x4e3c68, _0x40cdf0, _0x12e7fc);
    } catch (_0x45bff4) {
      if (typeof _0x415c36 === "undefined" || !(_0x45bff4 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x45bff4);
      }
      return -_0x45bff4.errno;
    }
  }
  function _0x350f93(_0x1c1bcf, _0x4b2364, _0x1e8be7, _0x3d2669, _0x20c016, _0x18714c) {
    try {
      var _0x2b85f5 = _0x28fb1d(_0x1c1bcf);
      var _0x78ca76 = _0x9631d5(_0x20c016, _0x18714c, true);
      if (!_0x78ca76) {
        return _0x415c36.write(_0x2b85f5.stream, _0xf10f52, _0x4b2364, _0x1e8be7);
      } else {
        return _0x2b85f5.sock_ops.sendmsg(_0x2b85f5, _0xf10f52, _0x4b2364, _0x1e8be7, _0x78ca76.addr, _0x78ca76.port);
      }
    } catch (_0x4c0889) {
      if (typeof _0x415c36 === "undefined" || !(_0x4c0889 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x4c0889);
      }
      return -_0x4c0889.errno;
    }
  }
  function _0x295515(_0x209980) {
    try {
      return -50;
    } catch (_0x4510fa) {
      if (typeof _0x415c36 === "undefined" || !(_0x4510fa instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x4510fa);
      }
      return -_0x4510fa.errno;
    }
  }
  function _0x4f6e0e(_0x58dce9, _0x6a6e52) {
    try {
      _0x28fb1d(_0x58dce9);
      return -52;
    } catch (_0x5b2079) {
      if (typeof _0x415c36 === "undefined" || !(_0x5b2079 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x5b2079);
      }
      return -_0x5b2079.errno;
    }
  }
  function _0x4fcca7(_0x3b2097, _0x3cff7f, _0x59ffac) {
    try {
      var _0x4afffb = _0x54211a.createSocket(_0x3b2097, _0x3cff7f, _0x59ffac);
      return _0x4afffb.stream.fd;
    } catch (_0x2d98b0) {
      if (typeof _0x415c36 === "undefined" || !(_0x2d98b0 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x2d98b0);
      }
      return -_0x2d98b0.errno;
    }
  }
  function _0xcb9de3(_0x544a0b, _0x1f708b) {
    try {
      _0x544a0b = _0x58ac26.getStr(_0x544a0b);
      return _0x58ac26.doStat(_0x415c36.stat, _0x544a0b, _0x1f708b);
    } catch (_0x408f44) {
      if (typeof _0x415c36 === "undefined" || !(_0x408f44 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x408f44);
      }
      return -_0x408f44.errno;
    }
  }
  function _0x96dac4(_0x564d2f, _0x3e1254, _0x4f9882) {
    try {
      _0x564d2f = _0x58ac26.getStr(_0x564d2f);
      _0x447875[_0x4f9882 + 4 >> 2] = 4096;
      _0x447875[_0x4f9882 + 40 >> 2] = 4096;
      _0x447875[_0x4f9882 + 8 >> 2] = 1000000;
      _0x447875[_0x4f9882 + 12 >> 2] = 500000;
      _0x447875[_0x4f9882 + 16 >> 2] = 500000;
      _0x447875[_0x4f9882 + 20 >> 2] = _0x415c36.nextInode;
      _0x447875[_0x4f9882 + 24 >> 2] = 1000000;
      _0x447875[_0x4f9882 + 28 >> 2] = 42;
      _0x447875[_0x4f9882 + 44 >> 2] = 2;
      _0x447875[_0x4f9882 + 36 >> 2] = 255;
      return 0;
    } catch (_0x277e18) {
      if (typeof _0x415c36 === "undefined" || !(_0x277e18 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x277e18);
      }
      return -_0x277e18.errno;
    }
  }
  function _0x13a921(_0x5759cb, _0x1f3563, _0x4b5cf4, _0x595ec) {
    try {
      _0x5759cb = _0x58ac26.getStr(_0x5759cb);
      var _0x5a18e2 = _0x58ac26.get64(_0x4b5cf4, _0x595ec);
      _0x415c36.truncate(_0x5759cb, _0x5a18e2);
      return 0;
    } catch (_0x594559) {
      if (typeof _0x415c36 === "undefined" || !(_0x594559 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x594559);
      }
      return -_0x594559.errno;
    }
  }
  function _0x365c17(_0x31a4a2) {
    try {
      if (!_0x31a4a2) {
        return -21;
      }
      var _0x1928db = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x3e1fe6 = function (_0x4261f9, _0x512f2d) {
        var _0x239dda = _0x1928db[_0x4261f9];
        _0x5b2088(_0x512f2d, _0x31a4a2 + _0x239dda);
      };
      _0x3e1fe6("sysname", "Emscripten");
      _0x3e1fe6("nodename", "emscripten");
      _0x3e1fe6("release", "1.0");
      _0x3e1fe6("version", "#1");
      _0x3e1fe6("machine", "wasm32");
      return 0;
    } catch (_0x4524ab) {
      if (typeof _0x415c36 === "undefined" || !(_0x4524ab instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x4524ab);
      }
      return -_0x4524ab.errno;
    }
  }
  function _0x48aca3(_0x161c74) {
    try {
      _0x161c74 = _0x58ac26.getStr(_0x161c74);
      _0x415c36.unlink(_0x161c74);
      return 0;
    } catch (_0x40fce1) {
      if (typeof _0x415c36 === "undefined" || !(_0x40fce1 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x40fce1);
      }
      return -_0x40fce1.errno;
    }
  }
  function _0x1cc445() {
    _0x5bcf92();
  }
  function _0x4af134() {
    if (_0x4af134.start === undefined) {
      _0x4af134.start = Date.now();
    }
    return (Date.now() - _0x4af134.start) * 1000 | 0;
  }
  function _0x478588() {
    if (_0x494d8b) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x684359 = true;
  function _0x3c4579(_0x1daa03, _0x4bee4b) {
    var _0x14e6f8;
    if (_0x1daa03 === 0) {
      _0x14e6f8 = 1000000;
    } else if (_0x1daa03 === 1 && _0x684359) {
      _0x14e6f8 = _0x478588();
    } else {
      _0x4c5b5d(28);
      return -1;
    }
    _0x447875[_0x4bee4b >> 2] = _0x14e6f8 / 1000000000 | 0;
    _0x447875[_0x4bee4b + 4 >> 2] = _0x14e6f8;
    return 0;
  }
  var _0x5412fd;
  if (_0x494d8b) {
    _0x5412fd = function () {
      var _0x2aabc5 = process.hrtime();
      return _0x2aabc5[0] * 1000 + _0x2aabc5[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x5412fd = dateNow;
  } else {
    _0x5412fd = function () {
      return performance.now();
    };
  }
  function _0x5ae50f(_0x3aeae5, _0x24a979) {
    var _0x1098b5;
    if (_0x3aeae5 === 0) {
      _0x1098b5 = Date.now();
    } else if ((_0x3aeae5 === 1 || _0x3aeae5 === 4) && _0x684359) {
      _0x1098b5 = _0x5412fd();
    } else {
      _0x4c5b5d(28);
      return -1;
    }
    _0x447875[_0x24a979 >> 2] = _0x1098b5 / 1000 | 0;
    _0x447875[_0x24a979 + 4 >> 2] = _0x1098b5 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x52b9ff(_0xd595b7, _0x461596) {
    return _0xd595b7 - _0x461596;
  }
  function _0x12d09e(_0x18772b) {}
  function _0x493071() {
    return 0;
  }
  function _0xcd6d85(_0x5ae03d, _0x30639e) {}
  function _0x108606(_0xa4e6b0, _0x55f1c6) {
    return 0;
  }
  var _0x27c4b4 = [];
  function _0x8ea2be(_0x4ca1b9, _0x1d76d2) {
    _0x27c4b4.length = 0;
    var _0x219130;
    _0x1d76d2 >>= 2;
    while (_0x219130 = _0x5d32f0[_0x4ca1b9++]) {
      var _0x64b45d = _0x219130 < 105;
      if (_0x64b45d && _0x1d76d2 & 1) {
        _0x1d76d2++;
      }
      _0x27c4b4.push(_0x64b45d ? _0xf10a16[_0x1d76d2++ >> 1] : _0x447875[_0x1d76d2]);
      ++_0x1d76d2;
    }
    return _0x27c4b4;
  }
  function _0x2abae8(_0x3166b3, _0x10b666, _0x15ec72, _0x2f90df) {
    var _0x10da34 = _0x8ea2be(_0x10b666, _0x15ec72);
    return _0x45844e[_0x3166b3].apply(null, _0x10da34);
  }
  function _0x1252ed(_0x1eef05, _0x1e6f56, _0x12d752) {
    return _0x2abae8(_0x1eef05, _0x1e6f56, _0x12d752, 1);
  }
  function _0x5b36ec(_0x4d8445, _0x3eb440) {
    _0x43e1b2.mainLoop.timingMode = _0x4d8445;
    _0x43e1b2.mainLoop.timingValue = _0x3eb440;
    if (!_0x43e1b2.mainLoop.func) {
      return 1;
    }
    if (!_0x43e1b2.mainLoop.running) {
      _0x43e1b2.mainLoop.running = true;
    }
    if (_0x4d8445 == 0) {
      _0x43e1b2.mainLoop.scheduler = function _0x5f2a3a() {
        var _0x23230c = Math.max(0, _0x43e1b2.mainLoop.tickStartTime + _0x3eb440 - _0x5412fd()) | 0;
        setTimeout(_0x43e1b2.mainLoop.runner, _0x23230c);
      };
      _0x43e1b2.mainLoop.method = "timeout";
    } else if (_0x4d8445 == 1) {
      _0x43e1b2.mainLoop.scheduler = function _0x15ef50() {
        _0x43e1b2.requestAnimationFrame(_0x43e1b2.mainLoop.runner);
      };
      _0x43e1b2.mainLoop.method = "rAF";
    } else if (_0x4d8445 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x4526be = [];
        var _0xf27c4b = "setimmediate";
        var _0x48f8d2 = function (_0x48453a) {
          if (_0x48453a.data === _0xf27c4b || _0x48453a.data.target === _0xf27c4b) {
            _0x48453a.stopPropagation();
            _0x4526be.shift()();
          }
        };
        addEventListener("message", _0x48f8d2, true);
        setImmediate = function _0x572475(_0x3b53cf) {
          _0x4526be.push(_0x3b53cf);
          if (_0x122c9d) {
            if (_0x24391e.setImmediates === undefined) {
              _0x24391e.setImmediates = [];
            }
            _0x24391e.setImmediates.push(_0x3b53cf);
            postMessage({
              target: _0xf27c4b
            });
          } else {
            postMessage(_0xf27c4b, "*");
          }
        };
      }
      _0x43e1b2.mainLoop.scheduler = function _0x50463b() {
        setImmediate(_0x43e1b2.mainLoop.runner);
      };
      _0x43e1b2.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x1ce215(_0x493942) {
    _0xe39eeb(_0x493942);
  }
  function _0x395ad4() {
    if (!_0x54e3a5()) {
      try {
        _0x1ce215(_0x3fb91d);
      } catch (_0x3d4b2f) {
        if (_0x3d4b2f instanceof _0x4210ac) {
          return;
        }
        throw _0x3d4b2f;
      }
    }
  }
  function _0x598fa8(_0x3ee97d, _0x4c1b4f, _0x400bd6, _0x50a8cb, _0x2de215) {
    _0x18a873(!_0x43e1b2.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x43e1b2.mainLoop.func = _0x3ee97d;
    _0x43e1b2.mainLoop.arg = _0x50a8cb;
    var _0x275668 = _0x43e1b2.mainLoop.currentlyRunningMainloop;
    function _0x2bd2de() {
      if (_0x275668 < _0x43e1b2.mainLoop.currentlyRunningMainloop) {
        _0x395ad4();
        return false;
      }
      return true;
    }
    _0x43e1b2.mainLoop.running = false;
    _0x43e1b2.mainLoop.runner = function _0x136073() {
      if (_0x23d11b) {
        return;
      }
      if (_0x43e1b2.mainLoop.queue.length > 0) {
        var _0x1f7f76 = Date.now();
        var _0x4002ea = _0x43e1b2.mainLoop.queue.shift();
        _0x4002ea.func(_0x4002ea.arg);
        if (_0x43e1b2.mainLoop.remainingBlockers) {
          var _0x4f2fe3 = _0x43e1b2.mainLoop.remainingBlockers;
          var _0x333be1 = _0x4f2fe3 % 1 == 0 ? _0x4f2fe3 - 1 : Math.floor(_0x4f2fe3);
          if (_0x4002ea.counted) {
            _0x43e1b2.mainLoop.remainingBlockers = _0x333be1;
          } else {
            _0x333be1 = _0x333be1 + 0.5;
            _0x43e1b2.mainLoop.remainingBlockers = (_0x4f2fe3 * 8 + _0x333be1) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x4002ea.name + "\" took " + (Date.now() - _0x1f7f76) + " ms");
        _0x43e1b2.mainLoop.updateStatus();
        if (!_0x2bd2de()) {
          return;
        }
        setTimeout(_0x43e1b2.mainLoop.runner, 0);
        return;
      }
      if (!_0x2bd2de()) {
        return;
      }
      _0x43e1b2.mainLoop.currentFrameNumber = _0x43e1b2.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x43e1b2.mainLoop.timingMode == 1 && _0x43e1b2.mainLoop.timingValue > 1 && _0x43e1b2.mainLoop.currentFrameNumber % _0x43e1b2.mainLoop.timingValue != 0) {
        _0x43e1b2.mainLoop.scheduler();
        return;
      } else if (_0x43e1b2.mainLoop.timingMode == 0) {
        _0x43e1b2.mainLoop.tickStartTime = _0x5412fd();
      }
      _0x5e5447.newRenderingFrameStarted();
      _0x43e1b2.mainLoop.runIter(_0x3ee97d);
      if (!_0x2bd2de()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x43e1b2.mainLoop.scheduler();
    };
    if (!_0x2de215) {
      if (_0x4c1b4f && _0x4c1b4f > 0) {
        _0x5b36ec(0, 1000 / _0x4c1b4f);
      } else {
        _0x5b36ec(1, 1);
      }
      _0x43e1b2.mainLoop.scheduler();
    }
    if (_0x400bd6) {
      throw "unwind";
    }
  }
  function _0x543c6a(_0xb5f4f1, _0x21a611) {
    if (_0x23d11b) {
      return;
    }
    if (_0x21a611) {
      _0xb5f4f1();
      return;
    }
    try {
      _0xb5f4f1();
    } catch (_0x545d65) {
      if (_0x545d65 instanceof _0x4210ac) {
        return;
      } else if (_0x545d65 !== "unwind") {
        if (_0x545d65 && typeof _0x545d65 === "object" && _0x545d65.stack) {
          _0x38748e("exception thrown: " + [_0x545d65, _0x545d65.stack]);
        }
        throw _0x545d65;
      }
    }
  }
  var _0x43e1b2 = {
    mainLoop: {
      running: false,
      scheduler: null,
      method: "",
      currentlyRunningMainloop: 0,
      func: null,
      arg: 0,
      timingMode: 0,
      timingValue: 0,
      currentFrameNumber: 0,
      queue: [],
      pause: function () {
        _0x43e1b2.mainLoop.scheduler = null;
        _0x43e1b2.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x43e1b2.mainLoop.currentlyRunningMainloop++;
        var _0x36d65c = _0x43e1b2.mainLoop.timingMode;
        var _0xd1fd7d = _0x43e1b2.mainLoop.timingValue;
        var _0xda3ec2 = _0x43e1b2.mainLoop.func;
        _0x43e1b2.mainLoop.func = null;
        _0x598fa8(_0xda3ec2, 0, false, _0x43e1b2.mainLoop.arg, true);
        _0x5b36ec(_0x36d65c, _0xd1fd7d);
        _0x43e1b2.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x24391e.setStatus) {
          var _0x3ec6ad = _0x24391e.statusMessage || "Please wait...";
          var _0x53536b = _0x43e1b2.mainLoop.remainingBlockers;
          var _0x1fd8bb = _0x43e1b2.mainLoop.expectedBlockers;
          if (_0x53536b) {
            if (_0x53536b < _0x1fd8bb) {
              _0x24391e.setStatus(_0x3ec6ad + " (" + (_0x1fd8bb - _0x53536b) + "/" + _0x1fd8bb + ")");
            } else {
              _0x24391e.setStatus(_0x3ec6ad);
            }
          } else {
            _0x24391e.setStatus("");
          }
        }
      },
      runIter: function (_0x209e17) {
        if (_0x23d11b) {
          return;
        }
        if (_0x24391e.preMainLoop) {
          var _0x505351 = _0x24391e.preMainLoop();
          if (_0x505351 === false) {
            return;
          }
        }
        _0x543c6a(_0x209e17);
        if (_0x24391e.postMainLoop) {
          _0x24391e.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x24391e.preloadPlugins) {
        _0x24391e.preloadPlugins = [];
      }
      if (_0x43e1b2.initted) {
        return;
      }
      _0x43e1b2.initted = true;
      try {
        new Blob();
        _0x43e1b2.hasBlobConstructor = true;
      } catch (_0x337178) {
        _0x43e1b2.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x43e1b2.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x43e1b2.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x43e1b2.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x24391e.noImageDecoding && typeof _0x43e1b2.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x24391e.noImageDecoding = true;
      }
      var _0x49d7f9 = {};
      _0x49d7f9.canHandle = function _0x18d55e(_0xa7b54c) {
        return !_0x24391e.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0xa7b54c);
      };
      _0x49d7f9.handle = function _0x2a8e08(_0x147d70, _0x284295, _0xa32bed, _0xe18422) {
        var _0x205f61 = null;
        if (_0x43e1b2.hasBlobConstructor) {
          try {
            _0x205f61 = new Blob([_0x147d70], {
              type: _0x43e1b2.getMimetype(_0x284295)
            });
            if (_0x205f61.size !== _0x147d70.length) {
              _0x205f61 = new Blob([new Uint8Array(_0x147d70).buffer], {
                type: _0x43e1b2.getMimetype(_0x284295)
              });
            }
          } catch (_0x500bd4) {
            _0xdfc5d6("Blob constructor present but fails: " + _0x500bd4 + "; falling back to blob builder");
          }
        }
        if (!_0x205f61) {
          var _0x169ce4 = new _0x43e1b2.BlobBuilder();
          _0x169ce4.append(new Uint8Array(_0x147d70).buffer);
          _0x205f61 = _0x169ce4.getBlob();
        }
        var _0x5b4ee5 = _0x43e1b2.URLObject.createObjectURL(_0x205f61);
        var _0x501c54 = new Image();
        _0x501c54.onload = function _0x6181b7() {
          _0x18a873(_0x501c54.complete, "Image " + _0x284295 + " could not be decoded");
          var _0x22dc47 = document.createElement("canvas");
          _0x22dc47.width = _0x501c54.width;
          _0x22dc47.height = _0x501c54.height;
          var _0x2919e0 = _0x22dc47.getContext("2d");
          _0x2919e0.drawImage(_0x501c54, 0, 0);
          _0x24391e.preloadedImages[_0x284295] = _0x22dc47;
          _0x43e1b2.URLObject.revokeObjectURL(_0x5b4ee5);
          if (_0xa32bed) {
            _0xa32bed(_0x147d70);
          }
        };
        _0x501c54.onerror = function _0x28f247(_0x30f0c3) {
          console.log("Image " + _0x5b4ee5 + " could not be decoded");
          if (_0xe18422) {
            _0xe18422();
          }
        };
        _0x501c54.src = _0x5b4ee5;
      };
      _0x24391e.preloadPlugins.push(_0x49d7f9);
      var _0x31f91a = {};
      _0x31f91a.canHandle = function _0x437ad2(_0x21efb7) {
        return !_0x24391e.noAudioDecoding && _0x21efb7.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x31f91a.handle = function _0x7e6bd(_0x8d267f, _0x5c26d0, _0x45f745, _0x287fe5) {
        var _0x3adb4f = false;
        function _0x34160e(_0x215a59) {
          if (_0x3adb4f) {
            return;
          }
          _0x3adb4f = true;
          _0x24391e.preloadedAudios[_0x5c26d0] = _0x215a59;
          if (_0x45f745) {
            _0x45f745(_0x8d267f);
          }
        }
        function _0x258e4c() {
          if (_0x3adb4f) {
            return;
          }
          _0x3adb4f = true;
          _0x24391e.preloadedAudios[_0x5c26d0] = new Audio();
          if (_0x287fe5) {
            _0x287fe5();
          }
        }
        if (_0x43e1b2.hasBlobConstructor) {
          try {
            var _0x5ed484 = new Blob([_0x8d267f], {
              type: _0x43e1b2.getMimetype(_0x5c26d0)
            });
          } catch (_0x1b7612) {
            return _0x258e4c();
          }
          var _0x1ce383 = _0x43e1b2.URLObject.createObjectURL(_0x5ed484);
          var _0x55c1c4 = new Audio();
          _0x55c1c4.addEventListener("canplaythrough", function () {
            _0x34160e(_0x55c1c4);
          }, false);
          _0x55c1c4.onerror = function _0x59a2b7(_0x329158) {
            if (_0x3adb4f) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x5c26d0 + ", trying slower base64 approach");
            function _0x3d60cb(_0x4a4a05) {
              var _0x6c28f8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x9c7202 = "=";
              var _0xb399f9 = "";
              var _0x3a718e = 0;
              var _0x49b54a = 0;
              for (var _0x1648f6 = 0; _0x1648f6 < _0x4a4a05.length; _0x1648f6++) {
                _0x3a718e = _0x3a718e << 8 | _0x4a4a05[_0x1648f6];
                _0x49b54a += 8;
                while (_0x49b54a >= 6) {
                  var _0x58cc0b = _0x3a718e >> _0x49b54a - 6 & 63;
                  _0x49b54a -= 6;
                  _0xb399f9 += _0x6c28f8[_0x58cc0b];
                }
              }
              if (_0x49b54a == 2) {
                _0xb399f9 += _0x6c28f8[(_0x3a718e & 3) << 4];
                _0xb399f9 += _0x9c7202 + _0x9c7202;
              } else if (_0x49b54a == 4) {
                _0xb399f9 += _0x6c28f8[(_0x3a718e & 15) << 2];
                _0xb399f9 += _0x9c7202;
              }
              return _0xb399f9;
            }
            _0x55c1c4.src = "data:audio/x-" + _0x5c26d0.substr(-3) + ";base64," + _0x3d60cb(_0x8d267f);
            _0x34160e(_0x55c1c4);
          };
          _0x55c1c4.src = _0x1ce383;
          _0x43e1b2.safeSetTimeout(function () {
            _0x34160e(_0x55c1c4);
          }, 10000);
        } else {
          return _0x258e4c();
        }
      };
      _0x24391e.preloadPlugins.push(_0x31f91a);
      function _0x1213cc() {
        _0x43e1b2.pointerLock = document.pointerLockElement === _0x24391e.canvas || document.mozPointerLockElement === _0x24391e.canvas || document.webkitPointerLockElement === _0x24391e.canvas || document.msPointerLockElement === _0x24391e.canvas;
      }
      var _0x23b2d5 = _0x24391e.canvas;
      if (_0x23b2d5) {
        _0x23b2d5.requestPointerLock = _0x23b2d5.requestPointerLock || _0x23b2d5.mozRequestPointerLock || _0x23b2d5.webkitRequestPointerLock || _0x23b2d5.msRequestPointerLock || function () {};
        _0x23b2d5.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x23b2d5.exitPointerLock = _0x23b2d5.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x1213cc, false);
        document.addEventListener("mozpointerlockchange", _0x1213cc, false);
        document.addEventListener("webkitpointerlockchange", _0x1213cc, false);
        document.addEventListener("mspointerlockchange", _0x1213cc, false);
        if (_0x24391e.elementPointerLock) {
          _0x23b2d5.addEventListener("click", function (_0x4ed0af) {
            if (!_0x43e1b2.pointerLock && _0x24391e.canvas.requestPointerLock) {
              _0x24391e.canvas.requestPointerLock();
              _0x4ed0af.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x415df5, _0x11c1a3, _0x1f53d3, _0x28de67) {
      if (_0x11c1a3 && _0x24391e.ctx && _0x415df5 == _0x24391e.canvas) {
        return _0x24391e.ctx;
      }
      var _0x5b9b03;
      var _0x10111d;
      if (_0x11c1a3) {
        var _0x541838 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x28de67) {
          for (var _0x3048a9 in _0x28de67) {
            _0x541838[_0x3048a9] = _0x28de67[_0x3048a9];
          }
        }
        if (typeof _0x5e5447 !== "undefined") {
          _0x10111d = _0x5e5447.createContext(_0x415df5, _0x541838);
          if (_0x10111d) {
            _0x5b9b03 = _0x5e5447.getContext(_0x10111d).GLctx;
          }
        }
      } else {
        _0x5b9b03 = _0x415df5.getContext("2d");
      }
      if (!_0x5b9b03) {
        return null;
      }
      if (_0x1f53d3) {
        if (!_0x11c1a3) {
          _0x18a873(typeof _0x2eecc9 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x24391e.ctx = _0x5b9b03;
        if (_0x11c1a3) {
          _0x5e5447.makeContextCurrent(_0x10111d);
        }
        _0x24391e.useWebGL = _0x11c1a3;
        _0x43e1b2.moduleContextCreatedCallbacks.forEach(function (_0x41e543) {
          _0x41e543();
        });
        _0x43e1b2.init();
      }
      return _0x5b9b03;
    },
    destroyContext: function (_0x47fe15, _0x1ef93a, _0x4f75b7) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x25589c, _0x550f6e) {
      _0x43e1b2.lockPointer = _0x25589c;
      _0x43e1b2.resizeCanvas = _0x550f6e;
      if (typeof _0x43e1b2.lockPointer === "undefined") {
        _0x43e1b2.lockPointer = true;
      }
      if (typeof _0x43e1b2.resizeCanvas === "undefined") {
        _0x43e1b2.resizeCanvas = false;
      }
      var _0x2d6a72 = _0x24391e.canvas;
      function _0xb5982f() {
        _0x43e1b2.isFullscreen = false;
        var _0x58b16a = _0x2d6a72.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x58b16a) {
          _0x2d6a72.exitFullscreen = _0x43e1b2.exitFullscreen;
          if (_0x43e1b2.lockPointer) {
            _0x2d6a72.requestPointerLock();
          }
          _0x43e1b2.isFullscreen = true;
          if (_0x43e1b2.resizeCanvas) {
            _0x43e1b2.setFullscreenCanvasSize();
          } else {
            _0x43e1b2.updateCanvasDimensions(_0x2d6a72);
          }
        } else {
          _0x58b16a.parentNode.insertBefore(_0x2d6a72, _0x58b16a);
          _0x58b16a.parentNode.removeChild(_0x58b16a);
          if (_0x43e1b2.resizeCanvas) {
            _0x43e1b2.setWindowedCanvasSize();
          } else {
            _0x43e1b2.updateCanvasDimensions(_0x2d6a72);
          }
        }
        if (_0x24391e.onFullScreen) {
          _0x24391e.onFullScreen(_0x43e1b2.isFullscreen);
        }
        if (_0x24391e.onFullscreen) {
          _0x24391e.onFullscreen(_0x43e1b2.isFullscreen);
        }
      }
      if (!_0x43e1b2.fullscreenHandlersInstalled) {
        _0x43e1b2.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0xb5982f, false);
        document.addEventListener("mozfullscreenchange", _0xb5982f, false);
        document.addEventListener("webkitfullscreenchange", _0xb5982f, false);
        document.addEventListener("MSFullscreenChange", _0xb5982f, false);
      }
      var _0x6c52cf = document.createElement("div");
      _0x2d6a72.parentNode.insertBefore(_0x6c52cf, _0x2d6a72);
      _0x6c52cf.appendChild(_0x2d6a72);
      _0x6c52cf.requestFullscreen = _0x6c52cf.requestFullscreen || _0x6c52cf.mozRequestFullScreen || _0x6c52cf.msRequestFullscreen || (_0x6c52cf.webkitRequestFullscreen ? function () {
        _0x6c52cf.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x6c52cf.webkitRequestFullScreen ? function () {
        _0x6c52cf.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x6c52cf.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x43e1b2.isFullscreen) {
        return false;
      }
      var _0x13d92f = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x13d92f.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x918125) {
      var _0x1f6266 = Date.now();
      if (_0x43e1b2.nextRAF === 0) {
        _0x43e1b2.nextRAF = _0x1f6266 + 1000 / 60;
      } else {
        while (_0x1f6266 + 2 >= _0x43e1b2.nextRAF) {
          _0x43e1b2.nextRAF += 1000 / 60;
        }
      }
      var _0x2223d9 = Math.max(_0x43e1b2.nextRAF - _0x1f6266, 0);
      setTimeout(_0x918125, _0x2223d9);
    },
    requestAnimationFrame: function (_0x5b008c) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x5b008c);
        return;
      }
      var _0x1e2252 = _0x43e1b2.fakeRequestAnimationFrame;
      _0x1e2252(_0x5b008c);
    },
    safeRequestAnimationFrame: function (_0x5b3feb) {
      return _0x43e1b2.requestAnimationFrame(function () {
        _0x543c6a(_0x5b3feb);
      });
    },
    safeSetTimeout: function (_0xa627b4, _0x17f87f) {
      return setTimeout(function () {
        _0x543c6a(_0xa627b4);
      }, _0x17f87f);
    },
    getMimetype: function (_0x8e3f1e) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x8e3f1e.substr(_0x8e3f1e.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x30fc4e) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x30fc4e);
    },
    getMovementX: function (_0x42db91) {
      return _0x42db91.movementX || _0x42db91.mozMovementX || _0x42db91.webkitMovementX || 0;
    },
    getMovementY: function (_0x132b5c) {
      return _0x132b5c.movementY || _0x132b5c.mozMovementY || _0x132b5c.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x4ee2d5) {
      var _0x33111f = 0;
      switch (_0x4ee2d5.type) {
        case "DOMMouseScroll":
          _0x33111f = _0x4ee2d5.detail / 3;
          break;
        case "mousewheel":
          _0x33111f = _0x4ee2d5.wheelDelta / 120;
          break;
        case "wheel":
          _0x33111f = _0x4ee2d5.deltaY;
          switch (_0x4ee2d5.deltaMode) {
            case 0:
              _0x33111f /= 100;
              break;
            case 1:
              _0x33111f /= 3;
              break;
            case 2:
              _0x33111f *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x4ee2d5.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x4ee2d5.type;
      }
      return _0x33111f;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x553098) {
      if (_0x43e1b2.pointerLock) {
        if (_0x553098.type != "mousemove" && "mozMovementX" in _0x553098) {
          _0x43e1b2.mouseMovementX = _0x43e1b2.mouseMovementY = 0;
        } else {
          _0x43e1b2.mouseMovementX = _0x43e1b2.getMovementX(_0x553098);
          _0x43e1b2.mouseMovementY = _0x43e1b2.getMovementY(_0x553098);
        }
        if (typeof SDL != "undefined") {
          _0x43e1b2.mouseX = SDL.mouseX + _0x43e1b2.mouseMovementX;
          _0x43e1b2.mouseY = SDL.mouseY + _0x43e1b2.mouseMovementY;
        } else {
          _0x43e1b2.mouseX += _0x43e1b2.mouseMovementX;
          _0x43e1b2.mouseY += _0x43e1b2.mouseMovementY;
        }
      } else {
        var _0xb111fc = _0x24391e.canvas.getBoundingClientRect();
        var _0x36e16b = _0x24391e.canvas.width;
        var _0x16bcad = _0x24391e.canvas.height;
        var _0x93922c = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x833526 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x553098.type === "touchstart" || _0x553098.type === "touchend" || _0x553098.type === "touchmove") {
          var _0x57a414 = _0x553098.touch;
          if (_0x57a414 === undefined) {
            return;
          }
          var _0x42ea16 = _0x57a414.pageX - (_0x93922c + _0xb111fc.left);
          var _0x2c5845 = _0x57a414.pageY - (_0x833526 + _0xb111fc.top);
          _0x42ea16 = _0x42ea16 * (_0x36e16b / _0xb111fc.width);
          _0x2c5845 = _0x2c5845 * (_0x16bcad / _0xb111fc.height);
          var _0x1fb71d = {
            x: _0x42ea16,
            y: _0x2c5845
          };
          if (_0x553098.type === "touchstart") {
            _0x43e1b2.lastTouches[_0x57a414.identifier] = _0x1fb71d;
            _0x43e1b2.touches[_0x57a414.identifier] = _0x1fb71d;
          } else if (_0x553098.type === "touchend" || _0x553098.type === "touchmove") {
            var _0x3c2dfd = _0x43e1b2.touches[_0x57a414.identifier];
            if (!_0x3c2dfd) {
              _0x3c2dfd = _0x1fb71d;
            }
            _0x43e1b2.lastTouches[_0x57a414.identifier] = _0x3c2dfd;
            _0x43e1b2.touches[_0x57a414.identifier] = _0x1fb71d;
          }
          return;
        }
        var _0x420c69 = _0x553098.pageX - (_0x93922c + _0xb111fc.left);
        var _0x253b9a = _0x553098.pageY - (_0x833526 + _0xb111fc.top);
        _0x420c69 = _0x420c69 * (_0x36e16b / _0xb111fc.width);
        _0x253b9a = _0x253b9a * (_0x16bcad / _0xb111fc.height);
        _0x43e1b2.mouseMovementX = _0x420c69 - _0x43e1b2.mouseX;
        _0x43e1b2.mouseMovementY = _0x253b9a - _0x43e1b2.mouseY;
        _0x43e1b2.mouseX = _0x420c69;
        _0x43e1b2.mouseY = _0x253b9a;
      }
    },
    asyncLoad: function (_0x325f03, _0x3aaeec, _0x545af0, _0x387875) {
      var _0x5ced38 = !_0x387875 ? _0x96e2c4("al " + _0x325f03) : "";
      _0x2b9b2a(_0x325f03, function (_0x5f5732) {
        _0x18a873(_0x5f5732, "Loading data file \"" + _0x325f03 + "\" failed (no arrayBuffer).");
        _0x3aaeec(new Uint8Array(_0x5f5732));
        if (_0x5ced38) {
          _0xe3545b(_0x5ced38);
        }
      }, function (_0x37f508) {
        if (_0x545af0) {
          _0x545af0();
        } else {
          throw "Loading data file \"" + _0x325f03 + "\" failed.";
        }
      });
      if (_0x5ced38) {
        _0xb357(_0x5ced38);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x1ffe9a = _0x24391e.canvas;
      _0x43e1b2.resizeListeners.forEach(function (_0x33e8a1) {
        _0x33e8a1(_0x1ffe9a.width, _0x1ffe9a.height);
      });
    },
    setCanvasSize: function (_0xea74b3, _0x3dbddc, _0x206142) {
      var _0x401f35 = _0x24391e.canvas;
      _0x43e1b2.updateCanvasDimensions(_0x401f35, _0xea74b3, _0x3dbddc);
      if (!_0x206142) {
        _0x43e1b2.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x267e57 = _0x51a6ce[SDL.screen >> 2];
        _0x267e57 = _0x267e57 | 8388608;
        _0x447875[SDL.screen >> 2] = _0x267e57;
      }
      _0x43e1b2.updateCanvasDimensions(_0x24391e.canvas);
      _0x43e1b2.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x1b2b29 = _0x51a6ce[SDL.screen >> 2];
        _0x1b2b29 = _0x1b2b29 & ~8388608;
        _0x447875[SDL.screen >> 2] = _0x1b2b29;
      }
      _0x43e1b2.updateCanvasDimensions(_0x24391e.canvas);
      _0x43e1b2.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x14e40b, _0x478cd4, _0x33928e) {
      if (_0x478cd4 && _0x33928e) {
        _0x14e40b.widthNative = _0x478cd4;
        _0x14e40b.heightNative = _0x33928e;
      } else {
        _0x478cd4 = _0x14e40b.widthNative;
        _0x33928e = _0x14e40b.heightNative;
      }
      var _0x597aa6 = _0x478cd4;
      var _0x25cbab = _0x33928e;
      if (_0x24391e.forcedAspectRatio && _0x24391e.forcedAspectRatio > 0) {
        if (_0x597aa6 / _0x25cbab < _0x24391e.forcedAspectRatio) {
          _0x597aa6 = Math.round(_0x25cbab * _0x24391e.forcedAspectRatio);
        } else {
          _0x25cbab = Math.round(_0x597aa6 / _0x24391e.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x14e40b.parentNode && typeof screen != "undefined") {
        var _0x234fa5 = Math.min(screen.width / _0x597aa6, screen.height / _0x25cbab);
        _0x597aa6 = Math.round(_0x597aa6 * _0x234fa5);
        _0x25cbab = Math.round(_0x25cbab * _0x234fa5);
      }
      if (_0x43e1b2.resizeCanvas) {
        if (_0x14e40b.width != _0x597aa6) {
          _0x14e40b.width = _0x597aa6;
        }
        if (_0x14e40b.height != _0x25cbab) {
          _0x14e40b.height = _0x25cbab;
        }
        if (typeof _0x14e40b.style != "undefined") {
          _0x14e40b.style.removeProperty("width");
          _0x14e40b.style.removeProperty("height");
        }
      } else {
        if (_0x14e40b.width != _0x478cd4) {
          _0x14e40b.width = _0x478cd4;
        }
        if (_0x14e40b.height != _0x33928e) {
          _0x14e40b.height = _0x33928e;
        }
        if (typeof _0x14e40b.style != "undefined") {
          if (_0x597aa6 != _0x478cd4 || _0x25cbab != _0x33928e) {
            _0x14e40b.style.setProperty("width", _0x597aa6 + "px", "important");
            _0x14e40b.style.setProperty("height", _0x25cbab + "px", "important");
          } else {
            _0x14e40b.style.removeProperty("width");
            _0x14e40b.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x40cf0f = _0x43e1b2.nextWgetRequestHandle;
      _0x43e1b2.nextWgetRequestHandle++;
      return _0x40cf0f;
    }
  };
  function _0x56e9a8() {
    _0x43e1b2.mainLoop.pause();
    _0x43e1b2.mainLoop.func = null;
  }
  function _0x4d90a8(_0x3b7c2a) {
    clearInterval(_0x3b7c2a);
  }
  var _0x2de040 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x59f4c4 = _0x2de040.eventHandlers.length - 1; _0x59f4c4 >= 0; --_0x59f4c4) {
        _0x2de040._removeHandler(_0x59f4c4);
      }
      _0x2de040.eventHandlers = [];
      _0x2de040.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x2de040.removeEventListenersRegistered) {
        _0x5091af.push(_0x2de040.removeAllEventListeners);
        _0x2de040.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x2b376d, _0x121d8f, _0x234064) {
      function _0x73bb5d(_0x30f846, _0x5e92d8) {
        if (_0x30f846.length != _0x5e92d8.length) {
          return false;
        }
        for (var _0x22c3f1 in _0x30f846) {
          if (_0x30f846[_0x22c3f1] != _0x5e92d8[_0x22c3f1]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x4fb2a0 in _0x2de040.deferredCalls) {
        var _0x32f95b = _0x2de040.deferredCalls[_0x4fb2a0];
        if (_0x32f95b.targetFunction == _0x2b376d && _0x73bb5d(_0x32f95b.argsList, _0x234064)) {
          return;
        }
      }
      _0x2de040.deferredCalls.push({
        targetFunction: _0x2b376d,
        precedence: _0x121d8f,
        argsList: _0x234064
      });
      _0x2de040.deferredCalls.sort(function (_0xd22f21, _0x236900) {
        return _0xd22f21.precedence < _0x236900.precedence;
      });
    },
    removeDeferredCalls: function (_0x1968e2) {
      for (var _0x179860 = 0; _0x179860 < _0x2de040.deferredCalls.length; ++_0x179860) {
        if (_0x2de040.deferredCalls[_0x179860].targetFunction == _0x1968e2) {
          _0x2de040.deferredCalls.splice(_0x179860, 1);
          --_0x179860;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x2de040.inEventHandler && _0x2de040.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x2de040.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x161ef5 = 0; _0x161ef5 < _0x2de040.deferredCalls.length; ++_0x161ef5) {
        var _0x43a9d4 = _0x2de040.deferredCalls[_0x161ef5];
        _0x2de040.deferredCalls.splice(_0x161ef5, 1);
        --_0x161ef5;
        _0x43a9d4.targetFunction.apply(null, _0x43a9d4.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x252a5c, _0x7b6e77) {
      for (var _0xca5840 = 0; _0xca5840 < _0x2de040.eventHandlers.length; ++_0xca5840) {
        if (_0x2de040.eventHandlers[_0xca5840].target == _0x252a5c && (!_0x7b6e77 || _0x7b6e77 == _0x2de040.eventHandlers[_0xca5840].eventTypeString)) {
          _0x2de040._removeHandler(_0xca5840--);
        }
      }
    },
    _removeHandler: function (_0x166ebd) {
      var _0x1443a4 = _0x2de040.eventHandlers[_0x166ebd];
      _0x1443a4.target.removeEventListener(_0x1443a4.eventTypeString, _0x1443a4.eventListenerFunc, _0x1443a4.useCapture);
      _0x2de040.eventHandlers.splice(_0x166ebd, 1);
    },
    registerOrRemoveHandler: function (_0x1fca7b) {
      var _0xe60ccf = function _0x58c0ca(_0x3dd0ca) {
        ++_0x2de040.inEventHandler;
        _0x2de040.currentEventHandler = _0x1fca7b;
        _0x2de040.runDeferredCalls();
        _0x1fca7b.handlerFunc(_0x3dd0ca);
        _0x2de040.runDeferredCalls();
        --_0x2de040.inEventHandler;
      };
      if (_0x1fca7b.callbackfunc) {
        _0x1fca7b.eventListenerFunc = _0xe60ccf;
        _0x1fca7b.target.addEventListener(_0x1fca7b.eventTypeString, _0xe60ccf, _0x1fca7b.useCapture);
        _0x2de040.eventHandlers.push(_0x1fca7b);
        _0x2de040.registerRemoveEventListeners();
      } else {
        for (var _0x3fa589 = 0; _0x3fa589 < _0x2de040.eventHandlers.length; ++_0x3fa589) {
          if (_0x2de040.eventHandlers[_0x3fa589].target == _0x1fca7b.target && _0x2de040.eventHandlers[_0x3fa589].eventTypeString == _0x1fca7b.eventTypeString) {
            _0x2de040._removeHandler(_0x3fa589--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x4b3da1) {
      if (!_0x4b3da1) {
        return "";
      }
      if (_0x4b3da1 == window) {
        return "#window";
      }
      if (_0x4b3da1 == screen) {
        return "#screen";
      }
      if (_0x4b3da1 && _0x4b3da1.nodeName) {
        return _0x4b3da1.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x480acc = {};
  function _0x50222e(_0x194815) {
    if (_0x194815 > 2) {
      return _0x242db5(_0x194815);
    } else {
      return _0x194815;
    }
  }
  var _0x5c5621 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x150982(_0x59876b) {
    _0x59876b = _0x50222e(_0x59876b);
    var _0x192012 = _0x5c5621[_0x59876b] || (typeof document !== "undefined" ? document.querySelector(_0x59876b) : undefined);
    return _0x192012;
  }
  function _0x48fbc2(_0x190aef) {
    return _0x150982(_0x190aef);
  }
  function _0x3f3231(_0x23fba2, _0x3ab62f, _0x314ffc) {
    var _0x57e6d0 = _0x48fbc2(_0x23fba2);
    if (!_0x57e6d0) {
      return -4;
    }
    _0x447875[_0x3ab62f >> 2] = _0x57e6d0.width;
    _0x447875[_0x314ffc >> 2] = _0x57e6d0.height;
  }
  function _0x6a7798(_0x372075) {
    var _0x16020e = _0x27ee1f();
    var _0xff36e6 = _0xbe2651(8);
    var _0x1eb605 = _0xff36e6 + 4;
    var _0x31ff7f = _0xbe2651(_0x372075.id.length + 1);
    _0x291bc6(_0x372075.id, _0x31ff7f, _0x372075.id.length + 1);
    var _0xd842fa = _0x3f3231(_0x31ff7f, _0xff36e6, _0x1eb605);
    var _0x19a6ae = [_0x447875[_0xff36e6 >> 2], _0x447875[_0x1eb605 >> 2]];
    _0x1df486(_0x16020e);
    return _0x19a6ae;
  }
  function _0x4f3b85(_0xc9def4, _0x51c120, _0x42e5b2) {
    var _0x4916c0 = _0x48fbc2(_0xc9def4);
    if (!_0x4916c0) {
      return -4;
    }
    _0x4916c0.width = _0x51c120;
    _0x4916c0.height = _0x42e5b2;
    return 0;
  }
  function _0x24f8be(_0x508e00, _0x23a70e, _0x1c2bd1) {
    if (!_0x508e00.controlTransferredOffscreen) {
      _0x508e00.width = _0x23a70e;
      _0x508e00.height = _0x1c2bd1;
    } else {
      var _0x3258b4 = _0x27ee1f();
      var _0x351856 = _0xbe2651(_0x508e00.id.length + 1);
      _0x291bc6(_0x508e00.id, _0x351856, _0x508e00.id.length + 1);
      _0x4f3b85(_0x351856, _0x23a70e, _0x1c2bd1);
      _0x1df486(_0x3258b4);
    }
  }
  function _0x7faf79(_0x49fc89) {
    var _0x4f8b71 = _0x6a7798(_0x49fc89);
    var _0x3f1506 = _0x4f8b71[0];
    var _0x1bea23 = _0x4f8b71[1];
    var _0x382cae = _0x49fc89.style.width;
    var _0x3d8d0a = _0x49fc89.style.height;
    var _0x548655 = _0x49fc89.style.backgroundColor;
    var _0x383990 = document.body.style.backgroundColor;
    var _0x598613 = _0x49fc89.style.paddingLeft;
    var _0x2bf176 = _0x49fc89.style.paddingRight;
    var _0x47c667 = _0x49fc89.style.paddingTop;
    var _0x203c09 = _0x49fc89.style.paddingBottom;
    var _0x1cbefb = _0x49fc89.style.marginLeft;
    var _0x3816f8 = _0x49fc89.style.marginRight;
    var _0x4faea7 = _0x49fc89.style.marginTop;
    var _0x250095 = _0x49fc89.style.marginBottom;
    var _0x386428 = document.body.style.margin;
    var _0x16c901 = document.documentElement.style.overflow;
    var _0x209363 = document.body.scroll;
    var _0x23158b = _0x49fc89.style.imageRendering;
    function _0x2640ca() {
      var _0x5a9651 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x5a9651) {
        document.removeEventListener("fullscreenchange", _0x2640ca);
        document.removeEventListener("webkitfullscreenchange", _0x2640ca);
        _0x24f8be(_0x49fc89, _0x3f1506, _0x1bea23);
        _0x49fc89.style.width = _0x382cae;
        _0x49fc89.style.height = _0x3d8d0a;
        _0x49fc89.style.backgroundColor = _0x548655;
        if (!_0x383990) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x383990;
        _0x49fc89.style.paddingLeft = _0x598613;
        _0x49fc89.style.paddingRight = _0x2bf176;
        _0x49fc89.style.paddingTop = _0x47c667;
        _0x49fc89.style.paddingBottom = _0x203c09;
        _0x49fc89.style.marginLeft = _0x1cbefb;
        _0x49fc89.style.marginRight = _0x3816f8;
        _0x49fc89.style.marginTop = _0x4faea7;
        _0x49fc89.style.marginBottom = _0x250095;
        document.body.style.margin = _0x386428;
        document.documentElement.style.overflow = _0x16c901;
        document.body.scroll = _0x209363;
        _0x49fc89.style.imageRendering = _0x23158b;
        if (_0x49fc89.GLctxObject) {
          _0x49fc89.GLctxObject.GLctx.viewport(0, 0, _0x3f1506, _0x1bea23);
        }
        if (_0x480acc.canvasResizedCallback) {
          (function (_0x3eabaf, _0x4d5b75, _0x18e0ce) {
            return _0x348186.apply(null, [_0x480acc.canvasResizedCallback, _0x3eabaf, _0x4d5b75, _0x18e0ce]);
          })(37, 0, _0x480acc.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x2640ca);
    document.addEventListener("webkitfullscreenchange", _0x2640ca);
    return _0x2640ca;
  }
  function _0x3f7104(_0x4cb38a, _0x31de40, _0x50244d) {
    _0x4cb38a.style.paddingLeft = _0x4cb38a.style.paddingRight = _0x50244d + "px";
    _0x4cb38a.style.paddingTop = _0x4cb38a.style.paddingBottom = _0x31de40 + "px";
  }
  function _0x54c929(_0x3491a2) {
    if (_0x5c5621.indexOf(_0x3491a2) < 0) {
      return _0x3491a2.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x66a529(_0x38bacd, _0x21da64) {
    var _0x1b2d29 = _0x7faf79(_0x38bacd);
    var _0x1f92b4 = _0x21da64.softFullscreen ? innerWidth : screen.width;
    var _0x3f9c7f = _0x21da64.softFullscreen ? innerHeight : screen.height;
    var _0x19df59 = _0x54c929(_0x38bacd);
    var _0x46af9d = _0x19df59.width;
    var _0x1df6ce = _0x19df59.height;
    var _0x1bd067 = _0x6a7798(_0x38bacd);
    var _0x446311 = _0x1bd067[0];
    var _0x36561b = _0x1bd067[1];
    if (_0x21da64.scaleMode == 3) {
      _0x3f7104(_0x38bacd, (_0x3f9c7f - _0x1df6ce) / 2, (_0x1f92b4 - _0x46af9d) / 2);
      _0x1f92b4 = _0x46af9d;
      _0x3f9c7f = _0x1df6ce;
    } else if (_0x21da64.scaleMode == 2) {
      if (_0x1f92b4 * _0x36561b < _0x446311 * _0x3f9c7f) {
        var _0x114902 = _0x36561b * _0x1f92b4 / _0x446311;
        _0x3f7104(_0x38bacd, (_0x3f9c7f - _0x114902) / 2, 0);
        _0x3f9c7f = _0x114902;
      } else {
        var _0x1fbd6a = _0x446311 * _0x3f9c7f / _0x36561b;
        _0x3f7104(_0x38bacd, 0, (_0x1f92b4 - _0x1fbd6a) / 2);
        _0x1f92b4 = _0x1fbd6a;
      }
    }
    if (!_0x38bacd.style.backgroundColor) {
      _0x38bacd.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x38bacd.style.width = _0x1f92b4 + "px";
    _0x38bacd.style.height = _0x3f9c7f + "px";
    if (_0x21da64.filteringMode == 1) {
      _0x38bacd.style.imageRendering = "optimizeSpeed";
      _0x38bacd.style.imageRendering = "-moz-crisp-edges";
      _0x38bacd.style.imageRendering = "-o-crisp-edges";
      _0x38bacd.style.imageRendering = "-webkit-optimize-contrast";
      _0x38bacd.style.imageRendering = "optimize-contrast";
      _0x38bacd.style.imageRendering = "crisp-edges";
      _0x38bacd.style.imageRendering = "pixelated";
    }
    var _0x22fa8c = _0x21da64.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x21da64.canvasResolutionScaleMode != 0) {
      var _0x2bf3ac = _0x1f92b4 * _0x22fa8c | 0;
      var _0x77dd6c = _0x3f9c7f * _0x22fa8c | 0;
      _0x24f8be(_0x38bacd, _0x2bf3ac, _0x77dd6c);
      if (_0x38bacd.GLctxObject) {
        _0x38bacd.GLctxObject.GLctx.viewport(0, 0, _0x2bf3ac, _0x77dd6c);
      }
    }
    return _0x1b2d29;
  }
  function _0x59096a(_0x3b4ef9, _0x38ca2b) {
    if (_0x38ca2b.scaleMode != 0 || _0x38ca2b.canvasResolutionScaleMode != 0) {
      _0x66a529(_0x3b4ef9, _0x38ca2b);
    }
    if (_0x3b4ef9.requestFullscreen) {
      _0x3b4ef9.requestFullscreen();
    } else if (_0x3b4ef9.webkitRequestFullscreen) {
      _0x3b4ef9.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x2de040.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x480acc = _0x38ca2b;
    if (_0x38ca2b.canvasResizedCallback) {
      (function (_0x1d6311, _0x5874b1, _0x3b72ed) {
        return _0x348186.apply(null, [_0x38ca2b.canvasResizedCallback, _0x1d6311, _0x5874b1, _0x3b72ed]);
      })(37, 0, _0x38ca2b.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x2f18cb() {
    if (!_0x2de040.fullscreenEnabled()) {
      return -1;
    }
    _0x2de040.removeDeferredCalls(_0x59096a);
    var _0x2c1070 = _0x5c5621[1];
    if (_0x2c1070.exitFullscreen) {
      if (_0x2c1070.fullscreenElement) {
        _0x2c1070.exitFullscreen();
      }
    } else if (_0x2c1070.webkitExitFullscreen) {
      if (_0x2c1070.webkitFullscreenElement) {
        _0x2c1070.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x20d1d2(_0x206f1d) {
    if (_0x206f1d.requestPointerLock) {
      _0x206f1d.requestPointerLock();
    } else if (_0x206f1d.msRequestPointerLock) {
      _0x206f1d.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x344d1e() {
    _0x2de040.removeDeferredCalls(_0x20d1d2);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1561df(_0x11a843) {
    var _0x16844b = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x250383 = !!_0x16844b;
    _0x447875[_0x11a843 >> 2] = _0x250383;
    _0x447875[_0x11a843 + 4 >> 2] = _0x2de040.fullscreenEnabled();
    var _0x4685bf = _0x250383 ? _0x16844b : _0x2de040.previousFullscreenElement;
    var _0x15947f = _0x2de040.getNodeNameForTarget(_0x4685bf);
    var _0x427ccd = _0x4685bf && _0x4685bf.id ? _0x4685bf.id : "";
    _0x291bc6(_0x15947f, _0x11a843 + 8, 128);
    _0x291bc6(_0x427ccd, _0x11a843 + 136, 128);
    _0x447875[_0x11a843 + 264 >> 2] = _0x4685bf ? _0x4685bf.clientWidth : 0;
    _0x447875[_0x11a843 + 268 >> 2] = _0x4685bf ? _0x4685bf.clientHeight : 0;
    _0x447875[_0x11a843 + 272 >> 2] = screen.width;
    _0x447875[_0x11a843 + 276 >> 2] = screen.height;
    if (_0x250383) {
      _0x2de040.previousFullscreenElement = _0x16844b;
    }
  }
  function _0x268820(_0x33f8f3) {
    if (!_0x2de040.fullscreenEnabled()) {
      return -1;
    }
    _0x1561df(_0x33f8f3);
    return 0;
  }
  function _0xb8b115(_0x38d1a7, _0x37304b) {
    _0xf10a16[_0x38d1a7 >> 3] = _0x37304b.timestamp;
    for (var _0x2d089b = 0; _0x2d089b < _0x37304b.axes.length; ++_0x2d089b) {
      _0xf10a16[_0x38d1a7 + _0x2d089b * 8 + 16 >> 3] = _0x37304b.axes[_0x2d089b];
    }
    for (var _0x2d089b = 0; _0x2d089b < _0x37304b.buttons.length; ++_0x2d089b) {
      if (typeof _0x37304b.buttons[_0x2d089b] === "object") {
        _0xf10a16[_0x38d1a7 + _0x2d089b * 8 + 528 >> 3] = _0x37304b.buttons[_0x2d089b].value;
      } else {
        _0xf10a16[_0x38d1a7 + _0x2d089b * 8 + 528 >> 3] = _0x37304b.buttons[_0x2d089b];
      }
    }
    for (var _0x2d089b = 0; _0x2d089b < _0x37304b.buttons.length; ++_0x2d089b) {
      if (typeof _0x37304b.buttons[_0x2d089b] === "object") {
        _0x447875[_0x38d1a7 + _0x2d089b * 4 + 1040 >> 2] = _0x37304b.buttons[_0x2d089b].pressed;
      } else {
        _0x447875[_0x38d1a7 + _0x2d089b * 4 + 1040 >> 2] = _0x37304b.buttons[_0x2d089b] == 1;
      }
    }
    _0x447875[_0x38d1a7 + 1296 >> 2] = _0x37304b.connected;
    _0x447875[_0x38d1a7 + 1300 >> 2] = _0x37304b.index;
    _0x447875[_0x38d1a7 + 8 >> 2] = _0x37304b.axes.length;
    _0x447875[_0x38d1a7 + 12 >> 2] = _0x37304b.buttons.length;
    _0x291bc6(_0x37304b.id, _0x38d1a7 + 1304, 64);
    _0x291bc6(_0x37304b.mapping, _0x38d1a7 + 1368, 64);
  }
  function _0x4da936(_0x29b500, _0x25645f) {
    if (_0x29b500 < 0 || _0x29b500 >= _0x2de040.lastGamepadState.length) {
      return -5;
    }
    if (!_0x2de040.lastGamepadState[_0x29b500]) {
      return -7;
    }
    _0xb8b115(_0x25645f, _0x2de040.lastGamepadState[_0x29b500]);
    return 0;
  }
  function _0x28e45b() {
    return 2147483648;
  }
  function _0x4a2eb9() {
    return _0x2de040.lastGamepadState.length;
  }
  function _0x8d2b8b() {
    _0x2de040.removeAllEventListeners();
  }
  function _0x5e566a(_0x22f6eb) {
    return !_0x5e5447.contexts[_0x22f6eb] || _0x5e5447.contexts[_0x22f6eb].GLctx.isContextLost();
  }
  function _0x5ee946(_0x4fe8e7) {
    return _0x4fe8e7 < 0 || _0x4fe8e7 === 0 && 1 / _0x4fe8e7 === -Infinity;
  }
  function _0x564f55(_0x4adb53, _0x2ef74b) {
    return (_0x4adb53 >>> 0) + _0x2ef74b * 4294967296;
  }
  function _0x1dd918(_0x3ef660, _0x2c75ee) {
    return (_0x3ef660 >>> 0) + (_0x2c75ee >>> 0) * 4294967296;
  }
  function _0x79a5f9(_0x516a01, _0x31d23b) {
    if (_0x516a01 <= 0) {
      return _0x516a01;
    }
    var _0x106c19 = _0x31d23b <= 32 ? Math.abs(1 << _0x31d23b - 1) : Math.pow(2, _0x31d23b - 1);
    if (_0x516a01 >= _0x106c19 && (_0x31d23b <= 32 || _0x516a01 > _0x106c19)) {
      _0x516a01 = _0x106c19 * -2 + _0x516a01;
    }
    return _0x516a01;
  }
  function _0x142640(_0x17468a, _0x5db7af) {
    if (_0x17468a >= 0) {
      return _0x17468a;
    }
    if (_0x5db7af <= 32) {
      return Math.abs(1 << _0x5db7af - 1) * 2 + _0x17468a;
    } else {
      return Math.pow(2, _0x5db7af) + _0x17468a;
    }
  }
  function _0x5001fe(_0x16c707, _0xff4e79) {
    var _0x4f0175 = _0x16c707;
    var _0x34663c = _0xff4e79;
    function _0x178647(_0x5039cd, _0x38d473) {
      if (_0x38d473 === "double" || _0x38d473 === "i64") {
        if (_0x5039cd & 7) {
          _0x5039cd += 4;
        }
      } else {}
      return _0x5039cd;
    }
    function _0x56c719(_0x586388) {
      var _0x574845;
      _0x34663c = _0x178647(_0x34663c, _0x586388);
      if (_0x586388 === "double") {
        _0x574845 = _0xf10a16[_0x34663c >> 3];
        _0x34663c += 8;
      } else if (_0x586388 == "i64") {
        _0x574845 = [_0x447875[_0x34663c >> 2], _0x447875[_0x34663c + 4 >> 2]];
        _0x34663c += 8;
      } else {
        _0x586388 = "i32";
        _0x574845 = _0x447875[_0x34663c >> 2];
        _0x34663c += 4;
      }
      return _0x574845;
    }
    var _0x1b8338 = [];
    var _0x3a358a;
    var _0x50fe02;
    var _0x29dce3;
    while (1) {
      var _0x38b6ed = _0x4f0175;
      _0x3a358a = _0xf10f52[_0x4f0175 >> 0];
      if (_0x3a358a === 0) {
        break;
      }
      _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
      if (_0x3a358a == 37) {
        var _0x547c41 = false;
        var _0x242226 = false;
        var _0x4460d9 = false;
        var _0xf74f15 = false;
        var _0x5260f3 = false;
        _0x32112f: while (1) {
          switch (_0x50fe02) {
            case 43:
              _0x547c41 = true;
              break;
            case 45:
              _0x242226 = true;
              break;
            case 35:
              _0x4460d9 = true;
              break;
            case 48:
              if (_0xf74f15) {
                break _0x32112f;
              } else {
                _0xf74f15 = true;
                break;
              }
            case 32:
              _0x5260f3 = true;
              break;
            default:
              break _0x32112f;
          }
          _0x4f0175++;
          _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
        }
        var _0x20e698 = 0;
        if (_0x50fe02 == 42) {
          _0x20e698 = _0x56c719("i32");
          _0x4f0175++;
          _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
        } else {
          while (_0x50fe02 >= 48 && _0x50fe02 <= 57) {
            _0x20e698 = _0x20e698 * 10 + (_0x50fe02 - 48);
            _0x4f0175++;
            _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
          }
        }
        var _0x3447f3 = false;
        var _0x375773 = -1;
        if (_0x50fe02 == 46) {
          _0x375773 = 0;
          _0x3447f3 = true;
          _0x4f0175++;
          _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
          if (_0x50fe02 == 42) {
            _0x375773 = _0x56c719("i32");
            _0x4f0175++;
          } else {
            while (1) {
              var _0x461f29 = _0xf10f52[_0x4f0175 + 1 >> 0];
              if (_0x461f29 < 48 || _0x461f29 > 57) {
                break;
              }
              _0x375773 = _0x375773 * 10 + (_0x461f29 - 48);
              _0x4f0175++;
            }
          }
          _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
        }
        if (_0x375773 < 0) {
          _0x375773 = 6;
          _0x3447f3 = false;
        }
        var _0x25a03f;
        switch (String.fromCharCode(_0x50fe02)) {
          case "h":
            var _0x569660 = _0xf10f52[_0x4f0175 + 2 >> 0];
            if (_0x569660 == 104) {
              _0x4f0175++;
              _0x25a03f = 1;
            } else {
              _0x25a03f = 2;
            }
            break;
          case "l":
            var _0x569660 = _0xf10f52[_0x4f0175 + 2 >> 0];
            if (_0x569660 == 108) {
              _0x4f0175++;
              _0x25a03f = 8;
            } else {
              _0x25a03f = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x25a03f = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x25a03f = 4;
            break;
          default:
            _0x25a03f = null;
        }
        if (_0x25a03f) {
          _0x4f0175++;
        }
        _0x50fe02 = _0xf10f52[_0x4f0175 + 1 >> 0];
        switch (String.fromCharCode(_0x50fe02)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x41de10 = _0x50fe02 == 100 || _0x50fe02 == 105;
              _0x25a03f = _0x25a03f || 4;
              _0x29dce3 = _0x56c719("i" + _0x25a03f * 8);
              var _0x46d63c;
              if (_0x25a03f == 8) {
                _0x29dce3 = _0x50fe02 == 117 ? _0x1dd918(_0x29dce3[0], _0x29dce3[1]) : _0x564f55(_0x29dce3[0], _0x29dce3[1]);
              }
              if (_0x25a03f <= 4) {
                var _0x1a0a88 = Math.pow(256, _0x25a03f) - 1;
                _0x29dce3 = (_0x41de10 ? _0x79a5f9 : _0x142640)(_0x29dce3 & _0x1a0a88, _0x25a03f * 8);
              }
              var _0x49d433 = Math.abs(_0x29dce3);
              var _0x2a528b = "";
              if (_0x50fe02 == 100 || _0x50fe02 == 105) {
                _0x46d63c = _0x79a5f9(_0x29dce3, _0x25a03f * 8, 1).toString(10);
              } else if (_0x50fe02 == 117) {
                _0x46d63c = _0x142640(_0x29dce3, _0x25a03f * 8, 1).toString(10);
                _0x29dce3 = Math.abs(_0x29dce3);
              } else if (_0x50fe02 == 111) {
                _0x46d63c = (_0x4460d9 ? "0" : "") + _0x49d433.toString(8);
              } else if (_0x50fe02 == 120 || _0x50fe02 == 88) {
                _0x2a528b = _0x4460d9 && _0x29dce3 != 0 ? "0x" : "";
                if (_0x29dce3 < 0) {
                  _0x29dce3 = -_0x29dce3;
                  _0x46d63c = (_0x49d433 - 1).toString(16);
                  var _0xef47e8 = [];
                  for (var _0x2b408f = 0; _0x2b408f < _0x46d63c.length; _0x2b408f++) {
                    _0xef47e8.push((15 - parseInt(_0x46d63c[_0x2b408f], 16)).toString(16));
                  }
                  _0x46d63c = _0xef47e8.join("");
                  while (_0x46d63c.length < _0x25a03f * 2) {
                    _0x46d63c = "f" + _0x46d63c;
                  }
                } else {
                  _0x46d63c = _0x49d433.toString(16);
                }
                if (_0x50fe02 == 88) {
                  _0x2a528b = _0x2a528b.toUpperCase();
                  _0x46d63c = _0x46d63c.toUpperCase();
                }
              } else if (_0x50fe02 == 112) {
                if (_0x49d433 === 0) {
                  _0x46d63c = "(nil)";
                } else {
                  _0x2a528b = "0x";
                  _0x46d63c = _0x49d433.toString(16);
                }
              }
              if (_0x3447f3) {
                while (_0x46d63c.length < _0x375773) {
                  _0x46d63c = "0" + _0x46d63c;
                }
              }
              if (_0x29dce3 >= 0) {
                if (_0x547c41) {
                  _0x2a528b = "+" + _0x2a528b;
                } else if (_0x5260f3) {
                  _0x2a528b = " " + _0x2a528b;
                }
              }
              if (_0x46d63c.charAt(0) == "-") {
                _0x2a528b = "-" + _0x2a528b;
                _0x46d63c = _0x46d63c.substr(1);
              }
              while (_0x2a528b.length + _0x46d63c.length < _0x20e698) {
                if (_0x242226) {
                  _0x46d63c += " ";
                } else if (_0xf74f15) {
                  _0x46d63c = "0" + _0x46d63c;
                } else {
                  _0x2a528b = " " + _0x2a528b;
                }
              }
              _0x46d63c = _0x2a528b + _0x46d63c;
              _0x46d63c.split("").forEach(function (_0x51bb3c) {
                _0x1b8338.push(_0x51bb3c.charCodeAt(0));
              });
              break;
            }
          case "f":
          case "F":
          case "e":
          case "E":
          case "g":
          case "G":
            {
              _0x29dce3 = _0x56c719("double");
              var _0x46d63c;
              if (isNaN(_0x29dce3)) {
                _0x46d63c = "nan";
                _0xf74f15 = false;
              } else if (!isFinite(_0x29dce3)) {
                _0x46d63c = (_0x29dce3 < 0 ? "-" : "") + "inf";
                _0xf74f15 = false;
              } else {
                var _0x25c5fb = false;
                var _0x59fb07 = Math.min(_0x375773, 20);
                if (_0x50fe02 == 103 || _0x50fe02 == 71) {
                  _0x25c5fb = true;
                  _0x375773 = _0x375773 || 1;
                  var _0x15d9ac = parseInt(_0x29dce3.toExponential(_0x59fb07).split("e")[1], 10);
                  if (_0x375773 > _0x15d9ac && _0x15d9ac >= -4) {
                    _0x50fe02 = (_0x50fe02 == 103 ? "f" : "F").charCodeAt(0);
                    _0x375773 -= _0x15d9ac + 1;
                  } else {
                    _0x50fe02 = (_0x50fe02 == 103 ? "e" : "E").charCodeAt(0);
                    _0x375773--;
                  }
                  _0x59fb07 = Math.min(_0x375773, 20);
                }
                if (_0x50fe02 == 101 || _0x50fe02 == 69) {
                  _0x46d63c = _0x29dce3.toExponential(_0x59fb07);
                  if (/[eE][-+]\d$/.test(_0x46d63c)) {
                    _0x46d63c = _0x46d63c.slice(0, -1) + "0" + _0x46d63c.slice(-1);
                  }
                } else if (_0x50fe02 == 102 || _0x50fe02 == 70) {
                  _0x46d63c = _0x29dce3.toFixed(_0x59fb07);
                  if (_0x29dce3 === 0 && _0x5ee946(_0x29dce3)) {
                    _0x46d63c = "-" + _0x46d63c;
                  }
                }
                var _0x29f9c5 = _0x46d63c.split("e");
                if (_0x25c5fb && !_0x4460d9) {
                  while (_0x29f9c5[0].length > 1 && _0x29f9c5[0].includes(".") && (_0x29f9c5[0].slice(-1) == "0" || _0x29f9c5[0].slice(-1) == ".")) {
                    _0x29f9c5[0] = _0x29f9c5[0].slice(0, -1);
                  }
                } else {
                  if (_0x4460d9 && _0x46d63c.indexOf(".") == -1) {
                    _0x29f9c5[0] += ".";
                  }
                  while (_0x375773 > _0x59fb07++) {
                    _0x29f9c5[0] += "0";
                  }
                }
                _0x46d63c = _0x29f9c5[0] + (_0x29f9c5.length > 1 ? "e" + _0x29f9c5[1] : "");
                if (_0x50fe02 == 69) {
                  _0x46d63c = _0x46d63c.toUpperCase();
                }
                if (_0x29dce3 >= 0) {
                  if (_0x547c41) {
                    _0x46d63c = "+" + _0x46d63c;
                  } else if (_0x5260f3) {
                    _0x46d63c = " " + _0x46d63c;
                  }
                }
              }
              while (_0x46d63c.length < _0x20e698) {
                if (_0x242226) {
                  _0x46d63c += " ";
                } else if (_0xf74f15 && (_0x46d63c[0] == "-" || _0x46d63c[0] == "+")) {
                  _0x46d63c = _0x46d63c[0] + "0" + _0x46d63c.slice(1);
                } else {
                  _0x46d63c = (_0xf74f15 ? "0" : " ") + _0x46d63c;
                }
              }
              if (_0x50fe02 < 97) {
                _0x46d63c = _0x46d63c.toUpperCase();
              }
              _0x46d63c.split("").forEach(function (_0x3a4c1a) {
                _0x1b8338.push(_0x3a4c1a.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x3c9b20 = _0x56c719("i8*");
              var _0x383ee8 = _0x3c9b20 ? _0x3cbd81(_0x3c9b20) : "(null)".length;
              if (_0x3447f3) {
                _0x383ee8 = Math.min(_0x383ee8, _0x375773);
              }
              if (!_0x242226) {
                while (_0x383ee8 < _0x20e698--) {
                  _0x1b8338.push(32);
                }
              }
              if (_0x3c9b20) {
                for (var _0x2b408f = 0; _0x2b408f < _0x383ee8; _0x2b408f++) {
                  _0x1b8338.push(_0x5d32f0[_0x3c9b20++ >> 0]);
                }
              } else {
                _0x1b8338 = _0x1b8338.concat(_0x380359("(null)".substr(0, _0x383ee8), true));
              }
              if (_0x242226) {
                while (_0x383ee8 < _0x20e698--) {
                  _0x1b8338.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x242226) {
                _0x1b8338.push(_0x56c719("i8"));
              }
              while (--_0x20e698 > 0) {
                _0x1b8338.push(32);
              }
              if (!_0x242226) {
                _0x1b8338.push(_0x56c719("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x5a51ad = _0x56c719("i32*");
              _0x447875[_0x5a51ad >> 2] = _0x1b8338.length;
              break;
            }
          case "%":
            {
              _0x1b8338.push(_0x3a358a);
              break;
            }
          default:
            {
              for (var _0x2b408f = _0x38b6ed; _0x2b408f < _0x4f0175 + 2; _0x2b408f++) {
                _0x1b8338.push(_0xf10f52[_0x2b408f >> 0]);
              }
            }
        }
        _0x4f0175 += 2;
      } else {
        _0x1b8338.push(_0x3a358a);
        _0x4f0175 += 1;
      }
    }
    return _0x1b8338;
  }
  function _0x4e8ecd(_0x17a7ab) {
    if (!_0x17a7ab || !_0x17a7ab.callee || !_0x17a7ab.callee.name) {
      return [null, "", ""];
    }
    var _0xbd1b1f = _0x17a7ab.callee.toString();
    var _0x51430f = _0x17a7ab.callee.name;
    var _0x10e82f = "(";
    var _0x168db1 = true;
    for (var _0xc5cf8d in _0x17a7ab) {
      var _0x498424 = _0x17a7ab[_0xc5cf8d];
      if (!_0x168db1) {
        _0x10e82f += ", ";
      }
      _0x168db1 = false;
      if (typeof _0x498424 === "number" || typeof _0x498424 === "string") {
        _0x10e82f += _0x498424;
      } else {
        _0x10e82f += "(" + typeof _0x498424 + ")";
      }
    }
    _0x10e82f += ")";
    var _0x402b70 = _0x17a7ab.callee.caller;
    _0x17a7ab = _0x402b70 ? _0x402b70.arguments : [];
    if (_0x168db1) {
      _0x10e82f = "";
    }
    return [_0x17a7ab, _0x51430f, _0x10e82f];
  }
  function _0x3f2c7d(_0x2506c5) {
    var _0x3f9da6 = _0x3fe786();
    var _0x3df26b = _0x3f9da6.lastIndexOf("_emscripten_log");
    var _0x1ad58d = _0x3f9da6.lastIndexOf("_emscripten_get_callstack");
    var _0x2b2900 = _0x3f9da6.indexOf("\n", Math.max(_0x3df26b, _0x1ad58d)) + 1;
    _0x3f9da6 = _0x3f9da6.slice(_0x2b2900);
    if (_0x2506c5 & 32) {
      _0xdfc5d6("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x2506c5 & 8 && typeof emscripten_source_map === "undefined") {
      _0xdfc5d6("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x2506c5 ^= 8;
      _0x2506c5 |= 16;
    }
    var _0x9060a1 = null;
    if (_0x2506c5 & 128) {
      _0x9060a1 = _0x4e8ecd(arguments);
      while (_0x9060a1[1].includes("_emscripten_")) {
        _0x9060a1 = _0x4e8ecd(_0x9060a1[0]);
      }
    }
    var _0x843baf = _0x3f9da6.split("\n");
    _0x3f9da6 = "";
    var _0x2d8953 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x53a373 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x56318f = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x136b02 in _0x843baf) {
      var _0x1b4f0f = _0x843baf[_0x136b02];
      var _0x4870aa = "";
      var _0x151c60 = "";
      var _0x23cf1f = 0;
      var _0x41a2a6 = 0;
      var _0x5eb72d = _0x56318f.exec(_0x1b4f0f);
      if (_0x5eb72d && _0x5eb72d.length == 5) {
        _0x4870aa = _0x5eb72d[1];
        _0x151c60 = _0x5eb72d[2];
        _0x23cf1f = _0x5eb72d[3];
        _0x41a2a6 = _0x5eb72d[4];
      } else {
        _0x5eb72d = _0x2d8953.exec(_0x1b4f0f);
        if (!_0x5eb72d) {
          _0x5eb72d = _0x53a373.exec(_0x1b4f0f);
        }
        if (_0x5eb72d && _0x5eb72d.length >= 4) {
          _0x4870aa = _0x5eb72d[1];
          _0x151c60 = _0x5eb72d[2];
          _0x23cf1f = _0x5eb72d[3];
          _0x41a2a6 = _0x5eb72d[4] | 0;
        } else {
          _0x3f9da6 += _0x1b4f0f + "\n";
          continue;
        }
      }
      var _0x13e935 = false;
      if (_0x2506c5 & 8) {
        var _0x49e59d = emscripten_source_map.originalPositionFor({
          line: _0x23cf1f,
          column: _0x41a2a6
        });
        _0x13e935 = _0x49e59d && _0x49e59d.source;
        if (_0x13e935) {
          if (_0x2506c5 & 64) {
            _0x49e59d.source = _0x49e59d.source.substring(_0x49e59d.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x3f9da6 += "    at " + _0x4870aa + " (" + _0x49e59d.source + ":" + _0x49e59d.line + ":" + _0x49e59d.column + ")\n";
        }
      }
      if (_0x2506c5 & 16 || !_0x13e935) {
        if (_0x2506c5 & 64) {
          _0x151c60 = _0x151c60.substring(_0x151c60.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x3f9da6 += (_0x13e935 ? "     = " + _0x4870aa : "    at " + _0x4870aa) + " (" + _0x151c60 + ":" + _0x23cf1f + ":" + _0x41a2a6 + ")\n";
      }
      if (_0x2506c5 & 128 && _0x9060a1[0]) {
        if (_0x9060a1[1] == _0x4870aa && _0x9060a1[2].length > 0) {
          _0x3f9da6 = _0x3f9da6.replace(/\s+$/, "");
          _0x3f9da6 += " with values: " + _0x9060a1[1] + _0x9060a1[2] + "\n";
        }
        _0x9060a1 = _0x4e8ecd(_0x9060a1[0]);
      }
    }
    _0x3f9da6 = _0x3f9da6.replace(/\s+$/, "");
    return _0x3f9da6;
  }
  function _0x3e3b8b(_0x75b1dc, _0x3b4286) {
    if (_0x75b1dc & 24) {
      _0x3b4286 = _0x3b4286.replace(/\s+$/, "");
      _0x3b4286 += (_0x3b4286.length > 0 ? "\n" : "") + _0x3f2c7d(_0x75b1dc);
    }
    if (_0x75b1dc & 1) {
      if (_0x75b1dc & 4) {
        console.error(_0x3b4286);
      } else if (_0x75b1dc & 2) {
        console.warn(_0x3b4286);
      } else if (_0x75b1dc & 512) {
        console.info(_0x3b4286);
      } else if (_0x75b1dc & 256) {
        console.debug(_0x3b4286);
      } else {
        console.log(_0x3b4286);
      }
    } else if (_0x75b1dc & 6) {
      _0x38748e(_0x3b4286);
    } else {
      _0xed26c0(_0x3b4286);
    }
  }
  function _0x1c19ba(_0x5b3979, _0x431f1d, _0x522898) {
    var _0x169772 = _0x5001fe(_0x431f1d, _0x522898);
    var _0x55d2cf = _0x51bdc9(_0x169772, 0);
    _0x3e3b8b(_0x5b3979, _0x55d2cf);
  }
  function _0x52be85(_0x126147, _0x1de99f) {
    _0x225d08(_0x126147, _0x1de99f || 1);
    throw "longjmp";
  }
  function _0xe92050(_0x1651db, _0x4067a3) {
    return _0x52be85(_0x1651db, _0x4067a3);
  }
  function _0x3073c2(_0x34fd86, _0x27ed33, _0x738539) {
    _0x5d32f0.copyWithin(_0x34fd86, _0x27ed33, _0x27ed33 + _0x738539);
  }
  function _0x5d1856(_0x2b821a, _0x1692a5) {
    if (!_0x2de040.fullscreenEnabled()) {
      return -1;
    }
    _0x2b821a = _0x150982(_0x2b821a);
    if (!_0x2b821a) {
      return -4;
    }
    if (!_0x2b821a.requestFullscreen && !_0x2b821a.webkitRequestFullscreen) {
      return -3;
    }
    var _0x5521c9 = _0x2de040.canPerformEventHandlerRequests();
    if (!_0x5521c9) {
      if (_0x1692a5.deferUntilInEventHandler) {
        _0x2de040.deferCall(_0x59096a, 1, [_0x2b821a, _0x1692a5]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x59096a(_0x2b821a, _0x1692a5);
  }
  function _0x30eb4d(_0x2bd4d5, _0x3609b4) {
    var _0x496eef = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x3609b4,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x5d1856(_0x2bd4d5, _0x496eef);
  }
  function _0x3d2ad6(_0x3c8ed5, _0xa90762) {
    _0x3c8ed5 = _0x150982(_0x3c8ed5);
    if (!_0x3c8ed5) {
      return -4;
    }
    if (!_0x3c8ed5.requestPointerLock && !_0x3c8ed5.msRequestPointerLock) {
      return -1;
    }
    var _0x861020 = _0x2de040.canPerformEventHandlerRequests();
    if (!_0x861020) {
      if (_0xa90762) {
        _0x2de040.deferCall(_0x20d1d2, 2, [_0x3c8ed5]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x20d1d2(_0x3c8ed5);
  }
  function _0x4d3341(_0x168a23) {
    try {
      _0xc8cd95.grow(_0x168a23 - _0x5da3a0.byteLength + 65535 >>> 16);
      _0x245f1b(_0xc8cd95.buffer);
      return 1;
    } catch (_0x3b6b44) {}
  }
  function _0x586f8f(_0x1f41f0) {
    var _0x4b77a3 = _0x5d32f0.length;
    _0x1f41f0 = _0x1f41f0 >>> 0;
    var _0x481ac1 = 2147483648;
    if (_0x1f41f0 > _0x481ac1) {
      return false;
    }
    for (var _0xc23940 = 1; _0xc23940 <= 4; _0xc23940 *= 2) {
      var _0x3c49e7 = _0x4b77a3 * (1 + 0.2 / _0xc23940);
      _0x3c49e7 = Math.min(_0x3c49e7, _0x1f41f0 + 100663296);
      var _0x1080fb = Math.min(_0x481ac1, _0x46c83e(Math.max(_0x1f41f0, _0x3c49e7), 65536));
      var _0x2d1898 = _0x4d3341(_0x1080fb);
      if (_0x2d1898) {
        return true;
      }
    }
    return false;
  }
  function _0x2321d4() {
    try {
      if (navigator.getGamepads) {
        if (_0x2de040.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x1ca2b5) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x4dd3f2(_0xa0924f, _0x96108, _0x3c2660, _0x1c2504, _0x4f7ae3, _0x5afc4e, _0x3d4fa1) {
    if (!_0x2de040.focusEvent) {
      _0x2de040.focusEvent = _0x25ed17(256);
    }
    var _0x392272 = function (_0x547943) {
      var _0xd24e09 = _0x547943 || event;
      var _0x52901c = _0x2de040.getNodeNameForTarget(_0xd24e09.target);
      var _0x3f664d = _0xd24e09.target.id ? _0xd24e09.target.id : "";
      var _0x53c831 = _0x2de040.focusEvent;
      _0x291bc6(_0x52901c, _0x53c831 + 0, 128);
      _0x291bc6(_0x3f664d, _0x53c831 + 128, 128);
      if (function (_0x44776, _0x2af2ec, _0x4d49ff) {
        return _0x348186.apply(null, [_0x1c2504, _0x44776, _0x2af2ec, _0x4d49ff]);
      }(_0x4f7ae3, _0x53c831, _0x96108)) {
        _0xd24e09.preventDefault();
      }
    };
    var _0x541827 = {
      target: _0x150982(_0xa0924f),
      eventTypeString: _0x5afc4e,
      callbackfunc: _0x1c2504,
      handlerFunc: _0x392272,
      useCapture: _0x3c2660
    };
    _0x2de040.registerOrRemoveHandler(_0x541827);
  }
  function _0x1f1a1(_0x7fd153, _0xfc1c77, _0x295eaa, _0x45b669, _0x286428) {
    _0x4dd3f2(_0x7fd153, _0xfc1c77, _0x295eaa, _0x45b669, 12, "blur", _0x286428);
    return 0;
  }
  function _0x6f40fb(_0xc468bb, _0x309c08, _0x2ebc88, _0x34c8d5, _0x16d8c5) {
    _0x4dd3f2(_0xc468bb, _0x309c08, _0x2ebc88, _0x34c8d5, 13, "focus", _0x16d8c5);
    return 0;
  }
  function _0x516c36(_0x2fee51, _0x4eec1e, _0x26889c, _0x3e07eb, _0xdfd578, _0x411e64, _0x11add9) {
    if (!_0x2de040.fullscreenChangeEvent) {
      _0x2de040.fullscreenChangeEvent = _0x25ed17(280);
    }
    var _0x21bb88 = function (_0x28e7d8) {
      var _0x3d6760 = _0x28e7d8 || event;
      var _0x84d4db = _0x2de040.fullscreenChangeEvent;
      _0x1561df(_0x84d4db);
      if (function (_0x223bf2, _0x1a4840, _0x472b43) {
        return _0x348186.apply(null, [_0x3e07eb, _0x223bf2, _0x1a4840, _0x472b43]);
      }(_0xdfd578, _0x84d4db, _0x4eec1e)) {
        _0x3d6760.preventDefault();
      }
    };
    var _0x5b7c6c = {
      target: _0x2fee51,
      eventTypeString: _0x411e64,
      callbackfunc: _0x3e07eb,
      handlerFunc: _0x21bb88,
      useCapture: _0x26889c
    };
    _0x2de040.registerOrRemoveHandler(_0x5b7c6c);
  }
  function _0x2a76f5(_0x2769b0, _0x5c625d, _0x2c6fe6, _0x4d9d13, _0x4a166c) {
    if (!_0x2de040.fullscreenEnabled()) {
      return -1;
    }
    _0x2769b0 = _0x150982(_0x2769b0);
    if (!_0x2769b0) {
      return -4;
    }
    _0x516c36(_0x2769b0, _0x5c625d, _0x2c6fe6, _0x4d9d13, 19, "fullscreenchange", _0x4a166c);
    _0x516c36(_0x2769b0, _0x5c625d, _0x2c6fe6, _0x4d9d13, 19, "webkitfullscreenchange", _0x4a166c);
    return 0;
  }
  function _0x234510(_0x309b2c, _0x5f2881, _0x20addc, _0x4dcbf7, _0x4e8c40, _0x311864, _0x54b433) {
    if (!_0x2de040.gamepadEvent) {
      _0x2de040.gamepadEvent = _0x25ed17(1432);
    }
    var _0x11e3ea = function (_0x1af54f) {
      var _0xac7d61 = _0x1af54f || event;
      var _0x557d9f = _0x2de040.gamepadEvent;
      _0xb8b115(_0x557d9f, _0xac7d61.gamepad);
      if (function (_0x1808bc, _0x48a3f4, _0x522a56) {
        return _0x348186.apply(null, [_0x4dcbf7, _0x1808bc, _0x48a3f4, _0x522a56]);
      }(_0x4e8c40, _0x557d9f, _0x5f2881)) {
        _0xac7d61.preventDefault();
      }
    };
    var _0x226d7b = {
      target: _0x150982(_0x309b2c),
      allowsDeferredCalls: true,
      eventTypeString: _0x311864,
      callbackfunc: _0x4dcbf7,
      handlerFunc: _0x11e3ea,
      useCapture: _0x20addc
    };
    _0x2de040.registerOrRemoveHandler(_0x226d7b);
  }
  function _0x46538f(_0x5df29b, _0x1888fa, _0xfb2d90, _0x47ed2d) {
    if (_0x2321d4()) {
      return -1;
    }
    return _0x234510(2, _0x5df29b, _0x1888fa, _0xfb2d90, 26, "gamepadconnected", _0x47ed2d);
  }
  function _0x4577ae(_0x52a487, _0x373901, _0xa5650f, _0x4ec342) {
    if (_0x2321d4()) {
      return -1;
    }
    return _0x234510(2, _0x52a487, _0x373901, _0xa5650f, 27, "gamepaddisconnected", _0x4ec342);
  }
  function _0x130b9c(_0x59ff00, _0x12bd10, _0x3e29a3) {
    return setInterval(function () {
      (function (_0x17c7e4) {
        _0xe5b92e.apply(null, [_0x59ff00, _0x17c7e4]);
      })(_0x3e29a3);
    }, _0x12bd10);
  }
  function _0xbbfb4a(_0x425df9, _0x572d4f, _0x1219a0, _0x3ae9ce, _0x23096c, _0xbfcf6c, _0x113dd0) {
    if (!_0x2de040.keyEvent) {
      _0x2de040.keyEvent = _0x25ed17(164);
    }
    var _0x3dcf6f = function (_0x901b03) {
      var _0x151809 = _0x2de040.keyEvent;
      var _0x5c8a95 = _0x151809 >> 2;
      _0x447875[_0x5c8a95 + 0] = _0x901b03.location;
      _0x447875[_0x5c8a95 + 1] = _0x901b03.ctrlKey;
      _0x447875[_0x5c8a95 + 2] = _0x901b03.shiftKey;
      _0x447875[_0x5c8a95 + 3] = _0x901b03.altKey;
      _0x447875[_0x5c8a95 + 4] = _0x901b03.metaKey;
      _0x447875[_0x5c8a95 + 5] = _0x901b03.repeat;
      _0x447875[_0x5c8a95 + 6] = _0x901b03.charCode;
      _0x447875[_0x5c8a95 + 7] = _0x901b03.keyCode;
      _0x447875[_0x5c8a95 + 8] = _0x901b03.which;
      _0x291bc6(_0x901b03.key || "", _0x151809 + 36, 32);
      _0x291bc6(_0x901b03.code || "", _0x151809 + 68, 32);
      _0x291bc6(_0x901b03.char || "", _0x151809 + 100, 32);
      _0x291bc6(_0x901b03.locale || "", _0x151809 + 132, 32);
      if (function (_0x3bac79, _0x4a5513, _0x21b819) {
        return _0x348186.apply(null, [_0x3ae9ce, _0x3bac79, _0x4a5513, _0x21b819]);
      }(_0x23096c, _0x151809, _0x572d4f)) {
        _0x901b03.preventDefault();
      }
    };
    var _0x58acaf = {
      target: _0x150982(_0x425df9),
      allowsDeferredCalls: true,
      eventTypeString: _0xbfcf6c,
      callbackfunc: _0x3ae9ce,
      handlerFunc: _0x3dcf6f,
      useCapture: _0x1219a0
    };
    _0x2de040.registerOrRemoveHandler(_0x58acaf);
  }
  function _0x5dce30(_0x16fa76, _0x262fb8, _0x532fcd, _0xd987be, _0x52c872) {
    _0xbbfb4a(_0x16fa76, _0x262fb8, _0x532fcd, _0xd987be, 2, "keydown", _0x52c872);
    return 0;
  }
  function _0x29ecc6(_0x11275d, _0x332abe, _0x114493, _0x2deabc, _0x159edd) {
    _0xbbfb4a(_0x11275d, _0x332abe, _0x114493, _0x2deabc, 1, "keypress", _0x159edd);
    return 0;
  }
  function _0x2b1c89(_0x234972, _0x529012, _0x4149df, _0x288ca1, _0x33f40f) {
    _0xbbfb4a(_0x234972, _0x529012, _0x4149df, _0x288ca1, 3, "keyup", _0x33f40f);
    return 0;
  }
  function _0x12b51f(_0x166505, _0xf22ed9, _0x3452b9) {
    var _0x1cd61c = function () {
      _0x3fcf98.call(null, _0x166505);
    };
    _0x598fa8(_0x1cd61c, _0xf22ed9, _0x3452b9);
  }
  function _0x322814(_0x284436, _0x27203a, _0x3a2a04) {
    var _0x1bfa09 = _0x284436 >> 2;
    _0x447875[_0x1bfa09 + 0] = _0x27203a.screenX;
    _0x447875[_0x1bfa09 + 1] = _0x27203a.screenY;
    _0x447875[_0x1bfa09 + 2] = _0x27203a.clientX;
    _0x447875[_0x1bfa09 + 3] = _0x27203a.clientY;
    _0x447875[_0x1bfa09 + 4] = _0x27203a.ctrlKey;
    _0x447875[_0x1bfa09 + 5] = _0x27203a.shiftKey;
    _0x447875[_0x1bfa09 + 6] = _0x27203a.altKey;
    _0x447875[_0x1bfa09 + 7] = _0x27203a.metaKey;
    _0x4ea5dd[_0x1bfa09 * 2 + 16] = _0x27203a.button;
    _0x4ea5dd[_0x1bfa09 * 2 + 17] = _0x27203a.buttons;
    _0x447875[_0x1bfa09 + 9] = _0x27203a.movementX;
    _0x447875[_0x1bfa09 + 10] = _0x27203a.movementY;
    var _0x333d68 = _0x54c929(_0x3a2a04);
    _0x447875[_0x1bfa09 + 11] = _0x27203a.clientX - _0x333d68.left;
    _0x447875[_0x1bfa09 + 12] = _0x27203a.clientY - _0x333d68.top;
  }
  function _0x399f8b(_0x254d76, _0x5dc3be, _0x5d4aff, _0x380242, _0x5a33f8, _0x477fb8, _0x21caa7) {
    if (!_0x2de040.mouseEvent) {
      _0x2de040.mouseEvent = _0x25ed17(64);
    }
    _0x254d76 = _0x150982(_0x254d76);
    var _0x3bbb37 = function (_0x4daaa4) {
      var _0x26bb9a = _0x4daaa4 || event;
      _0x322814(_0x2de040.mouseEvent, _0x26bb9a, _0x254d76);
      if (function (_0x77e24e, _0x227828, _0x3c9542) {
        return _0x348186.apply(null, [_0x380242, _0x77e24e, _0x227828, _0x3c9542]);
      }(_0x5a33f8, _0x2de040.mouseEvent, _0x5dc3be)) {
        _0x26bb9a.preventDefault();
      }
    };
    var _0x3d8377 = {
      target: _0x254d76,
      allowsDeferredCalls: _0x477fb8 != "mousemove" && _0x477fb8 != "mouseenter" && _0x477fb8 != "mouseleave",
      eventTypeString: _0x477fb8,
      callbackfunc: _0x380242,
      handlerFunc: _0x3bbb37,
      useCapture: _0x5d4aff
    };
    _0x2de040.registerOrRemoveHandler(_0x3d8377);
  }
  function _0x3e7f7f(_0x258a07, _0x288d8a, _0x5644bc, _0x5807d1, _0x208ba9) {
    _0x399f8b(_0x258a07, _0x288d8a, _0x5644bc, _0x5807d1, 5, "mousedown", _0x208ba9);
    return 0;
  }
  function _0x82515b(_0x13745e, _0x386cdd, _0x2db104, _0x29befd, _0x2bf048) {
    _0x399f8b(_0x13745e, _0x386cdd, _0x2db104, _0x29befd, 8, "mousemove", _0x2bf048);
    return 0;
  }
  function _0x57dd19(_0x4a0276, _0x5a507e, _0x28f744, _0x2911be, _0x2cd77d) {
    _0x399f8b(_0x4a0276, _0x5a507e, _0x28f744, _0x2911be, 6, "mouseup", _0x2cd77d);
    return 0;
  }
  function _0x50271d(_0x41b876) {
    var _0x552126 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x40f640 = !!_0x552126;
    _0x447875[_0x41b876 >> 2] = _0x40f640;
    var _0x1ec430 = _0x2de040.getNodeNameForTarget(_0x552126);
    var _0x2c2743 = _0x552126 && _0x552126.id ? _0x552126.id : "";
    _0x291bc6(_0x1ec430, _0x41b876 + 4, 128);
    _0x291bc6(_0x2c2743, _0x41b876 + 132, 128);
  }
  function _0x4145a1(_0x2deb53, _0x32f733, _0x3fd3e5, _0x26a0ce, _0x28a96c, _0x5c0f02, _0x1fa16f) {
    if (!_0x2de040.pointerlockChangeEvent) {
      _0x2de040.pointerlockChangeEvent = _0x25ed17(260);
    }
    var _0x473471 = function (_0x28698a) {
      var _0x27a1d5 = _0x28698a || event;
      var _0x25ceae = _0x2de040.pointerlockChangeEvent;
      _0x50271d(_0x25ceae);
      if (function (_0xa968ee, _0x2e1ed4, _0x3e128b) {
        return _0x348186.apply(null, [_0x26a0ce, _0xa968ee, _0x2e1ed4, _0x3e128b]);
      }(_0x28a96c, _0x25ceae, _0x32f733)) {
        _0x27a1d5.preventDefault();
      }
    };
    var _0x558d8b = {
      target: _0x2deb53,
      eventTypeString: _0x5c0f02,
      callbackfunc: _0x26a0ce,
      handlerFunc: _0x473471,
      useCapture: _0x3fd3e5
    };
    _0x2de040.registerOrRemoveHandler(_0x558d8b);
  }
  function _0x34d439(_0x492a7f, _0x248f45, _0x1fbe18, _0x384c86, _0x458c68) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x492a7f = _0x150982(_0x492a7f);
    if (!_0x492a7f) {
      return -4;
    }
    _0x4145a1(_0x492a7f, _0x248f45, _0x1fbe18, _0x384c86, 20, "pointerlockchange", _0x458c68);
    _0x4145a1(_0x492a7f, _0x248f45, _0x1fbe18, _0x384c86, 20, "mozpointerlockchange", _0x458c68);
    _0x4145a1(_0x492a7f, _0x248f45, _0x1fbe18, _0x384c86, 20, "webkitpointerlockchange", _0x458c68);
    _0x4145a1(_0x492a7f, _0x248f45, _0x1fbe18, _0x384c86, 20, "mspointerlockchange", _0x458c68);
    return 0;
  }
  function _0x16ca07(_0x42d191, _0x1df34e, _0x3c69e4, _0x4d02bf, _0x169073, _0x14d93e, _0x4169bb) {
    if (!_0x2de040.touchEvent) {
      _0x2de040.touchEvent = _0x25ed17(1684);
    }
    _0x42d191 = _0x150982(_0x42d191);
    var _0x41a450 = function (_0x2e58aa) {
      var _0x528b1d;
      var _0x5486e8 = {};
      var _0x146e09 = _0x2e58aa.touches;
      for (var _0x2237d8 = 0; _0x2237d8 < _0x146e09.length; ++_0x2237d8) {
        _0x528b1d = _0x146e09[_0x2237d8];
        _0x528b1d.isChanged = _0x528b1d.onTarget = 0;
        _0x5486e8[_0x528b1d.identifier] = _0x528b1d;
      }
      for (var _0x2237d8 = 0; _0x2237d8 < _0x2e58aa.changedTouches.length; ++_0x2237d8) {
        _0x528b1d = _0x2e58aa.changedTouches[_0x2237d8];
        _0x528b1d.isChanged = 1;
        _0x5486e8[_0x528b1d.identifier] = _0x528b1d;
      }
      for (var _0x2237d8 = 0; _0x2237d8 < _0x2e58aa.targetTouches.length; ++_0x2237d8) {
        _0x5486e8[_0x2e58aa.targetTouches[_0x2237d8].identifier].onTarget = 1;
      }
      var _0x20c55e = _0x2de040.touchEvent;
      var _0xc9dd21 = _0x20c55e >> 2;
      _0x447875[_0xc9dd21 + 1] = _0x2e58aa.ctrlKey;
      _0x447875[_0xc9dd21 + 2] = _0x2e58aa.shiftKey;
      _0x447875[_0xc9dd21 + 3] = _0x2e58aa.altKey;
      _0x447875[_0xc9dd21 + 4] = _0x2e58aa.metaKey;
      _0xc9dd21 += 5;
      var _0x493c4 = _0x54c929(_0x42d191);
      var _0x5d89ce = 0;
      for (var _0x2237d8 in _0x5486e8) {
        var _0x528b1d = _0x5486e8[_0x2237d8];
        _0x447875[_0xc9dd21 + 0] = _0x528b1d.identifier;
        _0x447875[_0xc9dd21 + 1] = _0x528b1d.screenX;
        _0x447875[_0xc9dd21 + 2] = _0x528b1d.screenY;
        _0x447875[_0xc9dd21 + 3] = _0x528b1d.clientX;
        _0x447875[_0xc9dd21 + 4] = _0x528b1d.clientY;
        _0x447875[_0xc9dd21 + 5] = _0x528b1d.pageX;
        _0x447875[_0xc9dd21 + 6] = _0x528b1d.pageY;
        _0x447875[_0xc9dd21 + 7] = _0x528b1d.isChanged;
        _0x447875[_0xc9dd21 + 8] = _0x528b1d.onTarget;
        _0x447875[_0xc9dd21 + 9] = _0x528b1d.clientX - _0x493c4.left;
        _0x447875[_0xc9dd21 + 10] = _0x528b1d.clientY - _0x493c4.top;
        _0xc9dd21 += 13;
        if (++_0x5d89ce > 31) {
          break;
        }
      }
      _0x447875[_0x20c55e >> 2] = _0x5d89ce;
      if (function (_0x25439e, _0x52055d, _0x3af21e) {
        return _0x348186.apply(null, [_0x4d02bf, _0x25439e, _0x52055d, _0x3af21e]);
      }(_0x169073, _0x20c55e, _0x1df34e)) {
        _0x2e58aa.preventDefault();
      }
    };
    var _0x3b3766 = {
      target: _0x42d191,
      allowsDeferredCalls: _0x14d93e == "touchstart" || _0x14d93e == "touchend",
      eventTypeString: _0x14d93e,
      callbackfunc: _0x4d02bf,
      handlerFunc: _0x41a450,
      useCapture: _0x3c69e4
    };
    _0x2de040.registerOrRemoveHandler(_0x3b3766);
  }
  function _0x3fc1c6(_0x22d092, _0x59f6ea, _0x5cb041, _0x1d8e60, _0x5a2c63) {
    _0x16ca07(_0x22d092, _0x59f6ea, _0x5cb041, _0x1d8e60, 25, "touchcancel", _0x5a2c63);
    return 0;
  }
  function _0x1c39a4(_0x181743, _0x256148, _0x38d1c3, _0x1a7045, _0x5dcfc2) {
    _0x16ca07(_0x181743, _0x256148, _0x38d1c3, _0x1a7045, 23, "touchend", _0x5dcfc2);
    return 0;
  }
  function _0x12be4c(_0x5dfb17, _0x109f96, _0x4da1a9, _0x2a4481, _0x43da17) {
    _0x16ca07(_0x5dfb17, _0x109f96, _0x4da1a9, _0x2a4481, 24, "touchmove", _0x43da17);
    return 0;
  }
  function _0x43638a(_0x1847ed, _0x3edf2a, _0x69c0b, _0x25d29c, _0x4dfcbc) {
    _0x16ca07(_0x1847ed, _0x3edf2a, _0x69c0b, _0x25d29c, 22, "touchstart", _0x4dfcbc);
    return 0;
  }
  function _0x534423(_0x560ecd, _0x390c6c, _0x597c62, _0x1ac57e, _0x526d0e, _0x7d626f, _0x5bf84c) {
    if (!_0x2de040.wheelEvent) {
      _0x2de040.wheelEvent = _0x25ed17(96);
    }
    var _0x3ef61d = function (_0x46cdb8) {
      var _0x107c39 = _0x46cdb8 || event;
      var _0x33a639 = _0x2de040.wheelEvent;
      _0x322814(_0x33a639, _0x107c39, _0x560ecd);
      _0xf10a16[_0x33a639 + 64 >> 3] = _0x107c39.deltaX;
      _0xf10a16[_0x33a639 + 72 >> 3] = _0x107c39.deltaY;
      _0xf10a16[_0x33a639 + 80 >> 3] = _0x107c39.deltaZ;
      _0x447875[_0x33a639 + 88 >> 2] = _0x107c39.deltaMode;
      if (function (_0x423bd1, _0x512f59, _0x1f4de5) {
        return _0x348186.apply(null, [_0x1ac57e, _0x423bd1, _0x512f59, _0x1f4de5]);
      }(_0x526d0e, _0x33a639, _0x390c6c)) {
        _0x107c39.preventDefault();
      }
    };
    var _0x1e5fcf = {
      target: _0x560ecd,
      allowsDeferredCalls: true,
      eventTypeString: _0x7d626f,
      callbackfunc: _0x1ac57e,
      handlerFunc: _0x3ef61d,
      useCapture: _0x597c62
    };
    _0x2de040.registerOrRemoveHandler(_0x1e5fcf);
  }
  function _0x2c4f45(_0x75e784, _0x2de002, _0x4933fd, _0x5a85af, _0x53bee2) {
    _0x75e784 = _0x150982(_0x75e784);
    if (typeof _0x75e784.onwheel !== "undefined") {
      _0x534423(_0x75e784, _0x2de002, _0x4933fd, _0x5a85af, 9, "wheel", _0x53bee2);
      return 0;
    } else {
      return -1;
    }
  }
  function _0xc293eb(_0x265f03) {
    var _0x2ac06e = _0x5412fd();
    while (_0x5412fd() - _0x2ac06e < _0x265f03) {}
  }
  function _0x173579(_0x1acc9a) {
    var _0x3632cc = _0x1acc9a.getExtension("ANGLE_instanced_arrays");
    if (_0x3632cc) {
      _0x1acc9a.vertexAttribDivisor = function (_0x45185a, _0x982275) {
        _0x3632cc.vertexAttribDivisorANGLE(_0x45185a, _0x982275);
      };
      _0x1acc9a.drawArraysInstanced = function (_0x4efefd, _0x3c67ef, _0x2df6ec, _0x4d9e67) {
        _0x3632cc.drawArraysInstancedANGLE(_0x4efefd, _0x3c67ef, _0x2df6ec, _0x4d9e67);
      };
      _0x1acc9a.drawElementsInstanced = function (_0x4e7409, _0x17725f, _0x29d9f0, _0x4c4dad, _0x113c52) {
        _0x3632cc.drawElementsInstancedANGLE(_0x4e7409, _0x17725f, _0x29d9f0, _0x4c4dad, _0x113c52);
      };
      return 1;
    }
  }
  function _0x2612be(_0x5d4706) {
    var _0x3066c2 = _0x5d4706.getExtension("OES_vertex_array_object");
    if (_0x3066c2) {
      _0x5d4706.createVertexArray = function () {
        return _0x3066c2.createVertexArrayOES();
      };
      _0x5d4706.deleteVertexArray = function (_0x5251b6) {
        _0x3066c2.deleteVertexArrayOES(_0x5251b6);
      };
      _0x5d4706.bindVertexArray = function (_0x478819) {
        _0x3066c2.bindVertexArrayOES(_0x478819);
      };
      _0x5d4706.isVertexArray = function (_0x2a50fc) {
        return _0x3066c2.isVertexArrayOES(_0x2a50fc);
      };
      return 1;
    }
  }
  function _0x2c6d43(_0x458237) {
    var _0x5870da = _0x458237.getExtension("WEBGL_draw_buffers");
    if (_0x5870da) {
      _0x458237.drawBuffers = function (_0x3a383d, _0x5d706b) {
        _0x5870da.drawBuffersWEBGL(_0x3a383d, _0x5d706b);
      };
      return 1;
    }
  }
  function _0x10464b(_0x294b14) {
    return !!(_0x294b14.dibvbi = _0x294b14.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x297029(_0x499a58) {
    return !!(_0x499a58.mdibvbi = _0x499a58.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x30fcef(_0x3f4078) {
    return !!(_0x3f4078.multiDrawWebgl = _0x3f4078.getExtension("WEBGL_multi_draw"));
  }
  var _0x5e5447 = {
    counter: 1,
    buffers: [],
    mappedBuffers: {},
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: [],
    offscreenCanvases: {},
    queries: [],
    samplers: [],
    transformFeedbacks: [],
    syncs: [],
    byteSizeByTypeRoot: 5120,
    byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    stringCache: {},
    stringiCache: {},
    unpackAlignment: 4,
    recordError: function _0x31f9c2(_0x431ad5) {
      if (!_0x5e5447.lastError) {
        _0x5e5447.lastError = _0x431ad5;
      }
    },
    getNewId: function (_0x5cbffb) {
      var _0x5a6016 = _0x5e5447.counter++;
      for (var _0x4e1413 = _0x5cbffb.length; _0x4e1413 < _0x5a6016; _0x4e1413++) {
        _0x5cbffb[_0x4e1413] = null;
      }
      return _0x5a6016;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x4b94e2) {
      return 32 - Math.clz32(_0x4b94e2 === 0 ? 0 : _0x4b94e2 - 1);
    },
    generateTempBuffers: function (_0x4f43ec, _0x375cdb) {
      var _0x3445de = _0x5e5447.log2ceilLookup(_0x5e5447.MAX_TEMP_BUFFER_SIZE);
      _0x375cdb.tempVertexBufferCounters1 = [];
      _0x375cdb.tempVertexBufferCounters2 = [];
      _0x375cdb.tempVertexBufferCounters1.length = _0x375cdb.tempVertexBufferCounters2.length = _0x3445de + 1;
      _0x375cdb.tempVertexBuffers1 = [];
      _0x375cdb.tempVertexBuffers2 = [];
      _0x375cdb.tempVertexBuffers1.length = _0x375cdb.tempVertexBuffers2.length = _0x3445de + 1;
      _0x375cdb.tempIndexBuffers = [];
      _0x375cdb.tempIndexBuffers.length = _0x3445de + 1;
      for (var _0x4452d1 = 0; _0x4452d1 <= _0x3445de; ++_0x4452d1) {
        _0x375cdb.tempIndexBuffers[_0x4452d1] = null;
        _0x375cdb.tempVertexBufferCounters1[_0x4452d1] = _0x375cdb.tempVertexBufferCounters2[_0x4452d1] = 0;
        var _0x3cee01 = _0x5e5447.numTempVertexBuffersPerSize;
        _0x375cdb.tempVertexBuffers1[_0x4452d1] = [];
        _0x375cdb.tempVertexBuffers2[_0x4452d1] = [];
        var _0x45fbf8 = _0x375cdb.tempVertexBuffers1[_0x4452d1];
        var _0x126e41 = _0x375cdb.tempVertexBuffers2[_0x4452d1];
        _0x45fbf8.length = _0x126e41.length = _0x3cee01;
        for (var _0x5049b8 = 0; _0x5049b8 < _0x3cee01; ++_0x5049b8) {
          _0x45fbf8[_0x5049b8] = _0x126e41[_0x5049b8] = null;
        }
      }
      if (_0x4f43ec) {
        _0x375cdb.tempQuadIndexBuffer = _0x2eecc9.createBuffer();
        _0x375cdb.GLctx.bindBuffer(34963, _0x375cdb.tempQuadIndexBuffer);
        var _0x209bd4 = _0x5e5447.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x53b76d = new Uint16Array(_0x209bd4);
        var _0x4452d1 = 0;
        var _0x2d0aed = 0;
        while (1) {
          _0x53b76d[_0x4452d1++] = _0x2d0aed;
          if (_0x4452d1 >= _0x209bd4) {
            break;
          }
          _0x53b76d[_0x4452d1++] = _0x2d0aed + 1;
          if (_0x4452d1 >= _0x209bd4) {
            break;
          }
          _0x53b76d[_0x4452d1++] = _0x2d0aed + 2;
          if (_0x4452d1 >= _0x209bd4) {
            break;
          }
          _0x53b76d[_0x4452d1++] = _0x2d0aed;
          if (_0x4452d1 >= _0x209bd4) {
            break;
          }
          _0x53b76d[_0x4452d1++] = _0x2d0aed + 2;
          if (_0x4452d1 >= _0x209bd4) {
            break;
          }
          _0x53b76d[_0x4452d1++] = _0x2d0aed + 3;
          if (_0x4452d1 >= _0x209bd4) {
            break;
          }
          _0x2d0aed += 4;
        }
        _0x375cdb.GLctx.bufferData(34963, _0x53b76d, 35044);
        _0x375cdb.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x35f690(_0x3e294e) {
      var _0x581b9b = _0x5e5447.log2ceilLookup(_0x3e294e);
      var _0x187197 = _0x5e5447.currentContext.tempVertexBuffers1[_0x581b9b];
      var _0x2facc4 = _0x5e5447.currentContext.tempVertexBufferCounters1[_0x581b9b];
      _0x5e5447.currentContext.tempVertexBufferCounters1[_0x581b9b] = _0x5e5447.currentContext.tempVertexBufferCounters1[_0x581b9b] + 1 & _0x5e5447.numTempVertexBuffersPerSize - 1;
      var _0x58e334 = _0x187197[_0x2facc4];
      if (_0x58e334) {
        return _0x58e334;
      }
      var _0x45b1c6 = _0x2eecc9.getParameter(34964);
      _0x187197[_0x2facc4] = _0x2eecc9.createBuffer();
      _0x2eecc9.bindBuffer(34962, _0x187197[_0x2facc4]);
      _0x2eecc9.bufferData(34962, 1 << _0x581b9b, 35048);
      _0x2eecc9.bindBuffer(34962, _0x45b1c6);
      return _0x187197[_0x2facc4];
    },
    getTempIndexBuffer: function _0x2df47b(_0x964e55) {
      var _0x2d3ccd = _0x5e5447.log2ceilLookup(_0x964e55);
      var _0x3adce7 = _0x5e5447.currentContext.tempIndexBuffers[_0x2d3ccd];
      if (_0x3adce7) {
        return _0x3adce7;
      }
      var _0xdaadb3 = _0x2eecc9.getParameter(34965);
      _0x5e5447.currentContext.tempIndexBuffers[_0x2d3ccd] = _0x2eecc9.createBuffer();
      _0x2eecc9.bindBuffer(34963, _0x5e5447.currentContext.tempIndexBuffers[_0x2d3ccd]);
      _0x2eecc9.bufferData(34963, 1 << _0x2d3ccd, 35048);
      _0x2eecc9.bindBuffer(34963, _0xdaadb3);
      return _0x5e5447.currentContext.tempIndexBuffers[_0x2d3ccd];
    },
    newRenderingFrameStarted: function _0x15a401() {
      if (!_0x5e5447.currentContext) {
        return;
      }
      var _0x3b6102 = _0x5e5447.currentContext.tempVertexBuffers1;
      _0x5e5447.currentContext.tempVertexBuffers1 = _0x5e5447.currentContext.tempVertexBuffers2;
      _0x5e5447.currentContext.tempVertexBuffers2 = _0x3b6102;
      _0x3b6102 = _0x5e5447.currentContext.tempVertexBufferCounters1;
      _0x5e5447.currentContext.tempVertexBufferCounters1 = _0x5e5447.currentContext.tempVertexBufferCounters2;
      _0x5e5447.currentContext.tempVertexBufferCounters2 = _0x3b6102;
      var _0x150dbc = _0x5e5447.log2ceilLookup(_0x5e5447.MAX_TEMP_BUFFER_SIZE);
      for (var _0x759ebb = 0; _0x759ebb <= _0x150dbc; ++_0x759ebb) {
        _0x5e5447.currentContext.tempVertexBufferCounters1[_0x759ebb] = 0;
      }
    },
    getSource: function (_0x4dbf3d, _0x170d5d, _0x265e8f, _0x4606e2) {
      var _0x1bc048 = "";
      for (var _0x1d29a5 = 0; _0x1d29a5 < _0x170d5d; ++_0x1d29a5) {
        var _0x3caaca = _0x4606e2 ? _0x447875[_0x4606e2 + _0x1d29a5 * 4 >> 2] : -1;
        _0x1bc048 += _0x242db5(_0x447875[_0x265e8f + _0x1d29a5 * 4 >> 2], _0x3caaca < 0 ? undefined : _0x3caaca);
      }
      return _0x1bc048;
    },
    calcBufLength: function _0x4bc72b(_0x576b11, _0x17c5a2, _0x41588f, _0x51992d) {
      if (_0x41588f > 0) {
        return _0x51992d * _0x41588f;
      }
      var _0x5974b6 = _0x5e5447.byteSizeByType[_0x17c5a2 - _0x5e5447.byteSizeByTypeRoot];
      return _0x576b11 * _0x5974b6 * _0x51992d;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0xb2fc29(_0x3a7609) {
      _0x5e5447.resetBufferBinding = false;
      for (var _0x25be68 = 0; _0x25be68 < _0x5e5447.currentContext.maxVertexAttribs; ++_0x25be68) {
        var _0x37af35 = _0x5e5447.currentContext.clientBuffers[_0x25be68];
        if (!_0x37af35.clientside || !_0x37af35.enabled) {
          continue;
        }
        _0x5e5447.resetBufferBinding = true;
        var _0x40b8bd = _0x5e5447.calcBufLength(_0x37af35.size, _0x37af35.type, _0x37af35.stride, _0x3a7609);
        var _0x302bc9 = _0x5e5447.getTempVertexBuffer(_0x40b8bd);
        _0x2eecc9.bindBuffer(34962, _0x302bc9);
        _0x2eecc9.bufferSubData(34962, 0, _0x5d32f0.subarray(_0x37af35.ptr, _0x37af35.ptr + _0x40b8bd));
        _0x37af35.vertexAttribPointerAdaptor.call(_0x2eecc9, _0x25be68, _0x37af35.size, _0x37af35.type, _0x37af35.normalized, _0x37af35.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x1335cc() {
      if (_0x5e5447.resetBufferBinding) {
        _0x2eecc9.bindBuffer(34962, _0x5e5447.buffers[_0x2eecc9.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x3cde1d, _0x102c59) {
      if (!_0x3cde1d.getContextSafariWebGL2Fixed) {
        _0x3cde1d.getContextSafariWebGL2Fixed = _0x3cde1d.getContext;
        _0x3cde1d.getContext = function (_0x1421a6, _0x42d46e) {
          var _0x2e1280 = _0x3cde1d.getContextSafariWebGL2Fixed(_0x1421a6, _0x42d46e);
          if (_0x1421a6 == "webgl" == _0x2e1280 instanceof WebGLRenderingContext) {
            return _0x2e1280;
          } else {
            return null;
          }
        };
      }
      var _0x4aa062 = _0x102c59.majorVersion > 1 ? _0x3cde1d.getContext("webgl2", _0x102c59) : _0x3cde1d.getContext("webgl", _0x102c59);
      if (!_0x4aa062) {
        return 0;
      }
      var _0x478af0 = _0x5e5447.registerContext(_0x4aa062, _0x102c59);
      return _0x478af0;
    },
    registerContext: function (_0x5b5849, _0x264a33) {
      var _0xf0fc63 = _0x5e5447.getNewId(_0x5e5447.contexts);
      var _0xe64f0 = {
        handle: _0xf0fc63,
        attributes: _0x264a33,
        version: _0x264a33.majorVersion,
        GLctx: _0x5b5849
      };
      if (_0x5b5849.canvas) {
        _0x5b5849.canvas.GLctxObject = _0xe64f0;
      }
      _0x5e5447.contexts[_0xf0fc63] = _0xe64f0;
      if (typeof _0x264a33.enableExtensionsByDefault === "undefined" || _0x264a33.enableExtensionsByDefault) {
        _0x5e5447.initExtensions(_0xe64f0);
      }
      _0xe64f0.maxVertexAttribs = _0xe64f0.GLctx.getParameter(34921);
      _0xe64f0.clientBuffers = [];
      for (var _0x19b297 = 0; _0x19b297 < _0xe64f0.maxVertexAttribs; _0x19b297++) {
        _0xe64f0.clientBuffers[_0x19b297] = {
          enabled: false,
          clientside: false,
          size: 0,
          type: 0,
          normalized: 0,
          stride: 0,
          ptr: 0,
          vertexAttribPointerAdaptor: null
        };
      }
      _0x5e5447.generateTempBuffers(false, _0xe64f0);
      return _0xf0fc63;
    },
    makeContextCurrent: function (_0x2a3e8a) {
      _0x5e5447.currentContext = _0x5e5447.contexts[_0x2a3e8a];
      _0x24391e.ctx = _0x2eecc9 = _0x5e5447.currentContext && _0x5e5447.currentContext.GLctx;
      return !_0x2a3e8a || !!_0x2eecc9;
    },
    getContext: function (_0x419068) {
      return _0x5e5447.contexts[_0x419068];
    },
    deleteContext: function (_0x39238d) {
      if (_0x5e5447.currentContext === _0x5e5447.contexts[_0x39238d]) {
        _0x5e5447.currentContext = null;
      }
      if (typeof _0x2de040 === "object") {
        _0x2de040.removeAllHandlersOnTarget(_0x5e5447.contexts[_0x39238d].GLctx.canvas);
      }
      if (_0x5e5447.contexts[_0x39238d] && _0x5e5447.contexts[_0x39238d].GLctx.canvas) {
        _0x5e5447.contexts[_0x39238d].GLctx.canvas.GLctxObject = undefined;
      }
      _0x5e5447.contexts[_0x39238d] = null;
    },
    initExtensions: function (_0x5b7f81) {
      if (!_0x5b7f81) {
        _0x5b7f81 = _0x5e5447.currentContext;
      }
      if (_0x5b7f81.initExtensionsDone) {
        return;
      }
      _0x5b7f81.initExtensionsDone = true;
      var _0xe108d7 = _0x5b7f81.GLctx;
      _0x173579(_0xe108d7);
      _0x2612be(_0xe108d7);
      _0x2c6d43(_0xe108d7);
      _0x10464b(_0xe108d7);
      _0x297029(_0xe108d7);
      if (_0x5b7f81.version >= 2) {
        _0xe108d7.disjointTimerQueryExt = _0xe108d7.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x5b7f81.version < 2 || !_0xe108d7.disjointTimerQueryExt) {
        _0xe108d7.disjointTimerQueryExt = _0xe108d7.getExtension("EXT_disjoint_timer_query");
      }
      _0x30fcef(_0xe108d7);
      var _0x3c0140 = _0xe108d7.getSupportedExtensions() || [];
      _0x3c0140.forEach(function (_0x3ce51e) {
        if (!_0x3ce51e.includes("lose_context") && !_0x3ce51e.includes("debug")) {
          _0xe108d7.getExtension(_0x3ce51e);
        }
      });
    }
  };
  var _0x318764 = ["default", "low-power", "high-performance"];
  function _0x1b0321(_0x1c0b23, _0x5debb6) {
    var _0x41662a = _0x5debb6 >> 2;
    var _0x1c037f = _0x447875[_0x41662a + 6];
    var _0x14e634 = {
      alpha: !!_0x447875[_0x41662a + 0],
      depth: !!_0x447875[_0x41662a + 1],
      stencil: !!_0x447875[_0x41662a + 2],
      antialias: !!_0x447875[_0x41662a + 3],
      premultipliedAlpha: !!_0x447875[_0x41662a + 4],
      preserveDrawingBuffer: !!_0x447875[_0x41662a + 5],
      powerPreference: _0x318764[_0x1c037f],
      failIfMajorPerformanceCaveat: !!_0x447875[_0x41662a + 7],
      majorVersion: _0x447875[_0x41662a + 8],
      minorVersion: _0x447875[_0x41662a + 9],
      enableExtensionsByDefault: _0x447875[_0x41662a + 10],
      explicitSwapControl: _0x447875[_0x41662a + 11],
      proxyContextToMainThread: _0x447875[_0x41662a + 12],
      renderViaOffscreenBackBuffer: _0x447875[_0x41662a + 13]
    };
    var _0x1018bc = _0x48fbc2(_0x1c0b23);
    if (!_0x1018bc) {
      return 0;
    }
    if (_0x14e634.explicitSwapControl) {
      return 0;
    }
    var _0x54a912 = _0x5e5447.createContext(_0x1018bc, _0x14e634);
    return _0x54a912;
  }
  function _0x39c9b5(_0x31afb8, _0x142614) {
    return _0x1b0321(_0x31afb8, _0x142614);
  }
  function _0x30eeaf() {
    if (_0x5e5447.currentContext) {
      return _0x5e5447.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0xf649e4() {
    return _0x30eeaf();
  }
  _0x24391e._emscripten_webgl_get_current_context = _0xf649e4;
  function _0x2c24e8(_0x4634ee) {
    var _0x3e3bbd = _0x5e5447.makeContextCurrent(_0x4634ee);
    if (_0x3e3bbd) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x24391e._emscripten_webgl_make_context_current = _0x2c24e8;
  function _0x5a637f(_0x3f742e) {
    if (_0x5e5447.currentContext == _0x3f742e) {
      _0x5e5447.currentContext = 0;
    }
    _0x5e5447.deleteContext(_0x3f742e);
  }
  function _0x353e62(_0xaca383, _0x778455) {
    var _0xb68e63 = _0x5e5447.getContext(_0xaca383);
    var _0x14b601 = _0x242db5(_0x778455);
    if (_0x14b601.startsWith("GL_")) {
      _0x14b601 = _0x14b601.substr(3);
    }
    if (_0x14b601 == "ANGLE_instanced_arrays") {
      _0x173579(_0x2eecc9);
    }
    if (_0x14b601 == "OES_vertex_array_object") {
      _0x2612be(_0x2eecc9);
    }
    if (_0x14b601 == "WEBGL_draw_buffers") {
      _0x2c6d43(_0x2eecc9);
    }
    if (_0x14b601 == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x10464b(_0x2eecc9);
    }
    if (_0x14b601 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x297029(_0x2eecc9);
    }
    if (_0x14b601 == "WEBGL_multi_draw") {
      _0x30fcef(_0x2eecc9);
    }
    var _0x45dc7f = _0xb68e63.GLctx.getExtension(_0x14b601);
    return !!_0x45dc7f;
  }
  function _0x30c126(_0x2135c7) {
    var _0xa6e5cf = _0x2135c7 >> 2;
    for (var _0x5b327c = 0; _0x5b327c < 14; ++_0x5b327c) {
      _0x447875[_0xa6e5cf + _0x5b327c] = 0;
    }
    _0x447875[_0xa6e5cf + 0] = _0x447875[_0xa6e5cf + 1] = _0x447875[_0xa6e5cf + 3] = _0x447875[_0xa6e5cf + 4] = _0x447875[_0xa6e5cf + 8] = _0x447875[_0xa6e5cf + 10] = 1;
  }
  var _0xf969c4 = {};
  function _0x2a47d5() {
    return _0x5b6f88 || "./this.program";
  }
  function _0x2b538c() {
    if (!_0x2b538c.strings) {
      var _0xb56c7b = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x207744 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0xb56c7b,
        _: _0x2a47d5()
      };
      for (var _0x6ec314 in _0xf969c4) {
        _0x207744[_0x6ec314] = _0xf969c4[_0x6ec314];
      }
      var _0x121881 = [];
      for (var _0x6ec314 in _0x207744) {
        _0x121881.push(_0x6ec314 + "=" + _0x207744[_0x6ec314]);
      }
      _0x2b538c.strings = _0x121881;
    }
    return _0x2b538c.strings;
  }
  function _0x274732(_0x254c8d, _0x23556a) {
    try {
      var _0x26b5c8 = 0;
      _0x2b538c().forEach(function (_0x1ec3cd, _0x2b8f19) {
        var _0x4feaa7 = _0x23556a + _0x26b5c8;
        _0x447875[_0x254c8d + _0x2b8f19 * 4 >> 2] = _0x4feaa7;
        _0x5b2088(_0x1ec3cd, _0x4feaa7);
        _0x26b5c8 += _0x1ec3cd.length + 1;
      });
      return 0;
    } catch (_0x4aab25) {
      if (typeof _0x415c36 === "undefined" || !(_0x4aab25 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x4aab25);
      }
      return _0x4aab25.errno;
    }
  }
  function _0x516427(_0x149159, _0x1a336f) {
    try {
      var _0x49fafc = _0x2b538c();
      _0x447875[_0x149159 >> 2] = _0x49fafc.length;
      var _0x33fdf2 = 0;
      _0x49fafc.forEach(function (_0x31e492) {
        _0x33fdf2 += _0x31e492.length + 1;
      });
      _0x447875[_0x1a336f >> 2] = _0x33fdf2;
      return 0;
    } catch (_0x515866) {
      if (typeof _0x415c36 === "undefined" || !(_0x515866 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x515866);
      }
      return _0x515866.errno;
    }
  }
  function _0x55fbf3(_0x13fad0) {
    try {
      var _0x21adf0 = _0x58ac26.getStreamFromFD(_0x13fad0);
      _0x415c36.close(_0x21adf0);
      return 0;
    } catch (_0x4f5741) {
      if (typeof _0x415c36 === "undefined" || !(_0x4f5741 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x4f5741);
      }
      return _0x4f5741.errno;
    }
  }
  function _0x1f1533(_0x54e5fc, _0x429295) {
    try {
      var _0x1c25a7 = _0x58ac26.getStreamFromFD(_0x54e5fc);
      var _0x340bba = _0x1c25a7.tty ? 2 : _0x415c36.isDir(_0x1c25a7.mode) ? 3 : _0x415c36.isLink(_0x1c25a7.mode) ? 7 : 4;
      _0xf10f52[_0x429295 >> 0] = _0x340bba;
      return 0;
    } catch (_0x271484) {
      if (typeof _0x415c36 === "undefined" || !(_0x271484 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x271484);
      }
      return _0x271484.errno;
    }
  }
  function _0x16c9ac(_0x14398a, _0x56efa6, _0x42866a, _0x1a0b55) {
    try {
      var _0x4d3dc4 = _0x58ac26.getStreamFromFD(_0x14398a);
      var _0x598954 = _0x58ac26.doReadv(_0x4d3dc4, _0x56efa6, _0x42866a);
      _0x447875[_0x1a0b55 >> 2] = _0x598954;
      return 0;
    } catch (_0x1ed7e4) {
      if (typeof _0x415c36 === "undefined" || !(_0x1ed7e4 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x1ed7e4);
      }
      return _0x1ed7e4.errno;
    }
  }
  function _0x4e8b8a(_0x50b168, _0x5e4793, _0x321925, _0x18abd7, _0x354eb8) {
    try {
      var _0x317255 = _0x58ac26.getStreamFromFD(_0x50b168);
      var _0x3c9e4a = 4294967296;
      var _0x3dac11 = _0x321925 * _0x3c9e4a + (_0x5e4793 >>> 0);
      var _0x13f6fe = 9007199254740992;
      if (_0x3dac11 <= -_0x13f6fe || _0x3dac11 >= _0x13f6fe) {
        return -61;
      }
      _0x415c36.llseek(_0x317255, _0x3dac11, _0x18abd7);
      _0x3b432d = [_0x317255.position >>> 0, (_0x33506f = _0x317255.position, +Math.abs(_0x33506f) >= 1 ? _0x33506f > 0 ? (Math.min(+Math.floor(_0x33506f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x33506f - +(~~_0x33506f >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x447875[_0x354eb8 >> 2] = _0x3b432d[0];
      _0x447875[_0x354eb8 + 4 >> 2] = _0x3b432d[1];
      if (_0x317255.getdents && _0x3dac11 === 0 && _0x18abd7 === 0) {
        _0x317255.getdents = null;
      }
      return 0;
    } catch (_0x2d8321) {
      if (typeof _0x415c36 === "undefined" || !(_0x2d8321 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x2d8321);
      }
      return _0x2d8321.errno;
    }
  }
  function _0x452782(_0x2fd0c7, _0x2b5521, _0x5048be, _0x2ba3a9) {
    try {
      var _0x4afb90 = _0x58ac26.getStreamFromFD(_0x2fd0c7);
      var _0x3b1433 = _0x58ac26.doWritev(_0x4afb90, _0x2b5521, _0x5048be);
      _0x447875[_0x2ba3a9 >> 2] = _0x3b1433;
      return 0;
    } catch (_0x2a8e46) {
      if (typeof _0x415c36 === "undefined" || !(_0x2a8e46 instanceof _0x415c36.ErrnoError)) {
        _0x5bcf92(_0x2a8e46);
      }
      return _0x2a8e46.errno;
    }
  }
  function _0x560f17(_0x1d83d4, _0x5109a1) {
    return 0;
  }
  function _0x85bf40() {
    return _0xff7d3b();
  }
  function _0x3b8d1e(_0x1b0bdf, _0x37c64f, _0x1e10b9, _0x2029e9) {
    var _0x38a42e = 0;
    var _0x3138b1 = 0;
    var _0x1698d3 = 0;
    var _0x257c8b = 0;
    var _0x3d3b48 = 0;
    var _0x41846f = 0;
    var _0x9c6bf8;
    function _0x1028d3(_0x486708, _0x11e5e3, _0x583ecb, _0x21d86e, _0x9ca78b, _0x620e26) {
      var _0x1b4f6e;
      var _0x23560e;
      var _0x48b2cb;
      var _0x4a4838;
      _0x23560e = _0x486708 === 10 ? 28 : 16;
      _0x9ca78b = _0x486708 === 10 ? _0x9ea6cd(_0x9ca78b) : _0x1f82c7(_0x9ca78b);
      _0x1b4f6e = _0x25ed17(_0x23560e);
      _0x4a4838 = _0x3ee87b(_0x1b4f6e, _0x486708, _0x9ca78b, _0x620e26);
      _0x18a873(!_0x4a4838);
      _0x48b2cb = _0x25ed17(32);
      _0x447875[_0x48b2cb + 4 >> 2] = _0x486708;
      _0x447875[_0x48b2cb + 8 >> 2] = _0x11e5e3;
      _0x447875[_0x48b2cb + 12 >> 2] = _0x583ecb;
      _0x447875[_0x48b2cb + 24 >> 2] = _0x21d86e;
      _0x447875[_0x48b2cb + 20 >> 2] = _0x1b4f6e;
      if (_0x486708 === 10) {
        _0x447875[_0x48b2cb + 16 >> 2] = 28;
      } else {
        _0x447875[_0x48b2cb + 16 >> 2] = 16;
      }
      _0x447875[_0x48b2cb + 28 >> 2] = 0;
      return _0x48b2cb;
    }
    if (_0x1e10b9) {
      _0x1698d3 = _0x447875[_0x1e10b9 >> 2];
      _0x257c8b = _0x447875[_0x1e10b9 + 4 >> 2];
      _0x3d3b48 = _0x447875[_0x1e10b9 + 8 >> 2];
      _0x41846f = _0x447875[_0x1e10b9 + 12 >> 2];
    }
    if (_0x3d3b48 && !_0x41846f) {
      _0x41846f = _0x3d3b48 === 2 ? 17 : 6;
    }
    if (!_0x3d3b48 && _0x41846f) {
      _0x3d3b48 = _0x41846f === 17 ? 2 : 1;
    }
    if (_0x41846f === 0) {
      _0x41846f = 6;
    }
    if (_0x3d3b48 === 0) {
      _0x3d3b48 = 1;
    }
    if (!_0x1b0bdf && !_0x37c64f) {
      return -2;
    }
    if (_0x1698d3 & ~1087) {
      return -1;
    }
    if (_0x1e10b9 !== 0 && _0x447875[_0x1e10b9 >> 2] & 2 && !_0x1b0bdf) {
      return -1;
    }
    if (_0x1698d3 & 32) {
      return -2;
    }
    if (_0x3d3b48 !== 0 && _0x3d3b48 !== 1 && _0x3d3b48 !== 2) {
      return -7;
    }
    if (_0x257c8b !== 0 && _0x257c8b !== 2 && _0x257c8b !== 10) {
      return -6;
    }
    if (_0x37c64f) {
      _0x37c64f = _0x242db5(_0x37c64f);
      _0x3138b1 = parseInt(_0x37c64f, 10);
      if (isNaN(_0x3138b1)) {
        if (_0x1698d3 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x1b0bdf) {
      if (_0x257c8b === 0) {
        _0x257c8b = 2;
      }
      if ((_0x1698d3 & 1) === 0) {
        if (_0x257c8b === 2) {
          _0x38a42e = _0x4c5302(2130706433);
        } else {
          _0x38a42e = [0, 0, 0, 1];
        }
      }
      _0x9c6bf8 = _0x1028d3(_0x257c8b, _0x3d3b48, _0x41846f, null, _0x38a42e, _0x3138b1);
      _0x447875[_0x2029e9 >> 2] = _0x9c6bf8;
      return 0;
    }
    _0x1b0bdf = _0x242db5(_0x1b0bdf);
    _0x38a42e = _0x41aa04(_0x1b0bdf);
    if (_0x38a42e !== null) {
      if (_0x257c8b === 0 || _0x257c8b === 2) {
        _0x257c8b = 2;
      } else if (_0x257c8b === 10 && _0x1698d3 & 8) {
        _0x38a42e = [0, 0, _0x4c5302(65535), _0x38a42e];
        _0x257c8b = 10;
      } else {
        return -2;
      }
    } else {
      _0x38a42e = _0x1635be(_0x1b0bdf);
      if (_0x38a42e !== null) {
        if (_0x257c8b === 0 || _0x257c8b === 10) {
          _0x257c8b = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x38a42e != null) {
      _0x9c6bf8 = _0x1028d3(_0x257c8b, _0x3d3b48, _0x41846f, _0x1b0bdf, _0x38a42e, _0x3138b1);
      _0x447875[_0x2029e9 >> 2] = _0x9c6bf8;
      return 0;
    }
    if (_0x1698d3 & 4) {
      return -2;
    }
    _0x1b0bdf = _0xc23971.lookup_name(_0x1b0bdf);
    _0x38a42e = _0x41aa04(_0x1b0bdf);
    if (_0x257c8b === 0) {
      _0x257c8b = 2;
    } else if (_0x257c8b === 10) {
      _0x38a42e = [0, 0, _0x4c5302(65535), _0x38a42e];
    }
    _0x9c6bf8 = _0x1028d3(_0x257c8b, _0x3d3b48, _0x41846f, null, _0x38a42e, _0x3138b1);
    _0x447875[_0x2029e9 >> 2] = _0x9c6bf8;
    return 0;
  }
  function _0x3b89ce(_0x111b83) {
    var _0x5dd4d0 = _0x25ed17(20);
    var _0x423ac6 = _0x25ed17(_0x111b83.length + 1);
    _0x291bc6(_0x111b83, _0x423ac6, _0x111b83.length + 1);
    _0x447875[_0x5dd4d0 >> 2] = _0x423ac6;
    var _0x5adca6 = _0x25ed17(4);
    _0x447875[_0x5adca6 >> 2] = 0;
    _0x447875[_0x5dd4d0 + 4 >> 2] = _0x5adca6;
    var _0x268bab = 2;
    _0x447875[_0x5dd4d0 + 8 >> 2] = _0x268bab;
    _0x447875[_0x5dd4d0 + 12 >> 2] = 4;
    var _0x4740b4 = _0x25ed17(12);
    _0x447875[_0x4740b4 >> 2] = _0x4740b4 + 8;
    _0x447875[_0x4740b4 + 4 >> 2] = 0;
    _0x447875[_0x4740b4 + 8 >> 2] = _0x41aa04(_0xc23971.lookup_name(_0x111b83));
    _0x447875[_0x5dd4d0 + 16 >> 2] = _0x4740b4;
    return _0x5dd4d0;
  }
  function _0x1c6cfa(_0xe17e27, _0x908096, _0x494124) {
    if (_0x494124 !== 2) {
      _0x4c5b5d(5);
      return null;
    }
    _0xe17e27 = _0x447875[_0xe17e27 >> 2];
    var _0x23cec4 = _0x1f82c7(_0xe17e27);
    var _0x374818 = _0xc23971.lookup_addr(_0x23cec4);
    if (_0x374818) {
      _0x23cec4 = _0x374818;
    }
    return _0x3b89ce(_0x23cec4);
  }
  function _0x3d5e4b(_0x4394f6) {
    return _0x3b89ce(_0x242db5(_0x4394f6));
  }
  function _0x3537ba(_0x39758d, _0x3681d2, _0x8d038, _0x196ceb, _0x534cf2, _0x4b68b4, _0x229dff) {
    var _0x5bdc11 = _0x454d06(_0x39758d, _0x3681d2);
    if (_0x5bdc11.errno) {
      return -6;
    }
    var _0x3e086d = _0x5bdc11.port;
    var _0x276995 = _0x5bdc11.addr;
    var _0x34c29d = false;
    if (_0x8d038 && _0x196ceb) {
      var _0x42ad19;
      if (_0x229dff & 1 || !(_0x42ad19 = _0xc23971.lookup_addr(_0x276995))) {
        if (_0x229dff & 8) {
          return -2;
        }
      } else {
        _0x276995 = _0x42ad19;
      }
      var _0x3434f0 = _0x291bc6(_0x276995, _0x8d038, _0x196ceb);
      if (_0x3434f0 + 1 >= _0x196ceb) {
        _0x34c29d = true;
      }
    }
    if (_0x534cf2 && _0x4b68b4) {
      _0x3e086d = "" + _0x3e086d;
      var _0x3434f0 = _0x291bc6(_0x3e086d, _0x534cf2, _0x4b68b4);
      if (_0x3434f0 + 1 >= _0x4b68b4) {
        _0x34c29d = true;
      }
    }
    if (_0x34c29d) {
      return -12;
    }
    return 0;
  }
  function _0x3cf828() {
    throw "getpwuid: TODO";
  }
  function _0x1e262c(_0x139d53) {
    var _0x2caade = Date.now();
    _0x447875[_0x139d53 >> 2] = _0x2caade / 1000 | 0;
    _0x447875[_0x139d53 + 4 >> 2] = _0x2caade % 1000 * 1000 | 0;
    return 0;
  }
  function _0x314cc7(_0xf51639) {
    _0x2eecc9.activeTexture(_0xf51639);
  }
  function _0x380d27(_0xe12363, _0x37a701) {
    _0xe12363 = _0x5e5447.programs[_0xe12363];
    _0x37a701 = _0x5e5447.shaders[_0x37a701];
    _0xe12363[_0x37a701.shaderType] = _0x37a701;
    _0x2eecc9.attachShader(_0xe12363, _0x37a701);
  }
  function _0x12d099(_0x34ae64, _0xe603d8) {
    _0x2eecc9.beginQuery(_0x34ae64, _0x5e5447.queries[_0xe603d8]);
  }
  function _0x4cd5c7(_0x475832) {
    _0x2eecc9.beginTransformFeedback(_0x475832);
  }
  function _0x1877a3(_0x293fa, _0x2ae389, _0x4a06f7) {
    _0x2eecc9.bindAttribLocation(_0x5e5447.programs[_0x293fa], _0x2ae389, _0x242db5(_0x4a06f7));
  }
  function _0xad1395(_0x4bafd9, _0x2d359d) {
    if (_0x4bafd9 == 34962) {
      _0x2eecc9.currentArrayBufferBinding = _0x2d359d;
    } else if (_0x4bafd9 == 34963) {
      _0x2eecc9.currentElementArrayBufferBinding = _0x2d359d;
    }
    if (_0x4bafd9 == 35051) {
      _0x2eecc9.currentPixelPackBufferBinding = _0x2d359d;
    } else if (_0x4bafd9 == 35052) {
      _0x2eecc9.currentPixelUnpackBufferBinding = _0x2d359d;
    }
    _0x2eecc9.bindBuffer(_0x4bafd9, _0x5e5447.buffers[_0x2d359d]);
  }
  function _0x399c3d(_0x20df37, _0x53fb08, _0x1650ac) {
    _0x2eecc9.bindBufferBase(_0x20df37, _0x53fb08, _0x5e5447.buffers[_0x1650ac]);
  }
  function _0x4b8bc1(_0x37afe9, _0x403244, _0x24bca2, _0x341ae0, _0x1ebaba) {
    _0x2eecc9.bindBufferRange(_0x37afe9, _0x403244, _0x5e5447.buffers[_0x24bca2], _0x341ae0, _0x1ebaba);
  }
  function _0x2cef2e(_0x348c0c, _0x4dd683) {
    _0x2eecc9.bindFramebuffer(_0x348c0c, _0x5e5447.framebuffers[_0x4dd683]);
  }
  function _0x207074(_0x291024, _0xcf3c44) {
    _0x2eecc9.bindRenderbuffer(_0x291024, _0x5e5447.renderbuffers[_0xcf3c44]);
  }
  function _0x233415(_0x20de9f, _0xa1b6a2) {
    _0x2eecc9.bindSampler(_0x20de9f, _0x5e5447.samplers[_0xa1b6a2]);
  }
  function _0x226b71(_0x276815, _0x382d3f) {
    _0x2eecc9.bindTexture(_0x276815, _0x5e5447.textures[_0x382d3f]);
  }
  function _0x414482(_0x5e0721, _0x52414b) {
    _0x2eecc9.bindTransformFeedback(_0x5e0721, _0x5e5447.transformFeedbacks[_0x52414b]);
  }
  function _0x5a49fe(_0x3c1f86) {
    _0x2eecc9.bindVertexArray(_0x5e5447.vaos[_0x3c1f86]);
    var _0x2f3e3b = _0x2eecc9.getParameter(34965);
    _0x2eecc9.currentElementArrayBufferBinding = _0x2f3e3b ? _0x2f3e3b.name | 0 : 0;
  }
  function _0x232d13(_0x2e2eef) {
    _0x2eecc9.blendEquation(_0x2e2eef);
  }
  function _0x5e2f17(_0x613bcd, _0x5ba3c5) {
    _0x2eecc9.blendEquationSeparate(_0x613bcd, _0x5ba3c5);
  }
  function _0x4bb9f6(_0x767f26, _0x5d7d61, _0x388ea7, _0x2f6543) {
    _0x2eecc9.blendFuncSeparate(_0x767f26, _0x5d7d61, _0x388ea7, _0x2f6543);
  }
  function _0x363029(_0x31c70e, _0x108ada, _0x8b9e48, _0x34d734, _0x891b1a, _0x5ef9cc, _0x5db015, _0x484084, _0x4c2bc7, _0x28bdaa) {
    _0x2eecc9.blitFramebuffer(_0x31c70e, _0x108ada, _0x8b9e48, _0x34d734, _0x891b1a, _0x5ef9cc, _0x5db015, _0x484084, _0x4c2bc7, _0x28bdaa);
  }
  function _0x58ce38(_0x34b808, _0x30f88c, _0x41e8fc, _0x55959b) {
    if (_0x5e5447.currentContext.version >= 2) {
      if (_0x41e8fc) {
        _0x2eecc9.bufferData(_0x34b808, _0x5d32f0, _0x55959b, _0x41e8fc, _0x30f88c);
      } else {
        _0x2eecc9.bufferData(_0x34b808, _0x30f88c, _0x55959b);
      }
    } else {
      _0x2eecc9.bufferData(_0x34b808, _0x41e8fc ? _0x5d32f0.subarray(_0x41e8fc, _0x41e8fc + _0x30f88c) : _0x30f88c, _0x55959b);
    }
  }
  function _0x570d33(_0x2fb270, _0x251152, _0x1a4d08, _0x504caf) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.bufferSubData(_0x2fb270, _0x251152, _0x5d32f0, _0x504caf, _0x1a4d08);
      return;
    }
    _0x2eecc9.bufferSubData(_0x2fb270, _0x251152, _0x5d32f0.subarray(_0x504caf, _0x504caf + _0x1a4d08));
  }
  function _0x505eb6(_0x8c4cd) {
    return _0x2eecc9.checkFramebufferStatus(_0x8c4cd);
  }
  function _0x341cf2(_0x4d1752) {
    _0x2eecc9.clear(_0x4d1752);
  }
  function _0x560d5d(_0x19ba12, _0x26e449, _0x2570a5, _0x5ce886) {
    _0x2eecc9.clearBufferfi(_0x19ba12, _0x26e449, _0x2570a5, _0x5ce886);
  }
  function _0x4d4a67(_0x25810e, _0x712f91, _0xe116dd) {
    _0x2eecc9.clearBufferfv(_0x25810e, _0x712f91, _0x5d3882, _0xe116dd >> 2);
  }
  function _0x4d72a6(_0x3d0bff, _0x435141, _0xd91707) {
    _0x2eecc9.clearBufferuiv(_0x3d0bff, _0x435141, _0x51a6ce, _0xd91707 >> 2);
  }
  function _0xbc9c70(_0x12d820, _0x4758ce, _0x79656a, _0x3b5726) {
    _0x2eecc9.clearColor(_0x12d820, _0x4758ce, _0x79656a, _0x3b5726);
  }
  function _0x201587(_0x5f5044) {
    _0x2eecc9.clearDepth(_0x5f5044);
  }
  function _0x2a1adf(_0x3afc91) {
    _0x2eecc9.clearStencil(_0x3afc91);
  }
  function _0x286527(_0x21304e, _0x2d7f91, _0x2c7673, _0x695994) {
    return _0x2eecc9.clientWaitSync(_0x5e5447.syncs[_0x21304e], _0x2d7f91, _0x564f55(_0x2c7673, _0x695994));
  }
  function _0xf9e3c8(_0x59e537, _0x4c2346, _0x7d9f5a, _0x31fb5a) {
    _0x2eecc9.colorMask(!!_0x59e537, !!_0x4c2346, !!_0x7d9f5a, !!_0x31fb5a);
  }
  function _0x14b6bb(_0x5b5081) {
    _0x2eecc9.compileShader(_0x5e5447.shaders[_0x5b5081]);
  }
  function _0x4ccd81(_0x3a9472, _0x5b914e, _0x591550, _0x4b508, _0x9488d4, _0x23597a, _0x22287e, _0x3085a4) {
    if (_0x5e5447.currentContext.version >= 2) {
      if (_0x2eecc9.currentPixelUnpackBufferBinding) {
        _0x2eecc9.compressedTexImage2D(_0x3a9472, _0x5b914e, _0x591550, _0x4b508, _0x9488d4, _0x23597a, _0x22287e, _0x3085a4);
      } else {
        _0x2eecc9.compressedTexImage2D(_0x3a9472, _0x5b914e, _0x591550, _0x4b508, _0x9488d4, _0x23597a, _0x5d32f0, _0x3085a4, _0x22287e);
      }
      return;
    }
    _0x2eecc9.compressedTexImage2D(_0x3a9472, _0x5b914e, _0x591550, _0x4b508, _0x9488d4, _0x23597a, _0x3085a4 ? _0x5d32f0.subarray(_0x3085a4, _0x3085a4 + _0x22287e) : null);
  }
  function _0xc1d8b7(_0x44a611, _0x36a508, _0x29ceb1, _0x581019, _0x32d7a8, _0x1eeb53, _0x2ce469, _0x521b70, _0x4ffa71) {
    if (_0x2eecc9.currentPixelUnpackBufferBinding) {
      _0x2eecc9.compressedTexImage3D(_0x44a611, _0x36a508, _0x29ceb1, _0x581019, _0x32d7a8, _0x1eeb53, _0x2ce469, _0x521b70, _0x4ffa71);
    } else {
      _0x2eecc9.compressedTexImage3D(_0x44a611, _0x36a508, _0x29ceb1, _0x581019, _0x32d7a8, _0x1eeb53, _0x2ce469, _0x5d32f0, _0x4ffa71, _0x521b70);
    }
  }
  function _0x5604de(_0x2f7953, _0x4c9431, _0x251b9f, _0xb251e5, _0x45b88d, _0x3b44aa, _0x342f23, _0x46fa2e, _0x459096) {
    if (_0x5e5447.currentContext.version >= 2) {
      if (_0x2eecc9.currentPixelUnpackBufferBinding) {
        _0x2eecc9.compressedTexSubImage2D(_0x2f7953, _0x4c9431, _0x251b9f, _0xb251e5, _0x45b88d, _0x3b44aa, _0x342f23, _0x46fa2e, _0x459096);
      } else {
        _0x2eecc9.compressedTexSubImage2D(_0x2f7953, _0x4c9431, _0x251b9f, _0xb251e5, _0x45b88d, _0x3b44aa, _0x342f23, _0x5d32f0, _0x459096, _0x46fa2e);
      }
      return;
    }
    _0x2eecc9.compressedTexSubImage2D(_0x2f7953, _0x4c9431, _0x251b9f, _0xb251e5, _0x45b88d, _0x3b44aa, _0x342f23, _0x459096 ? _0x5d32f0.subarray(_0x459096, _0x459096 + _0x46fa2e) : null);
  }
  function _0x2ff737(_0x4eebb1, _0x49fb72, _0x2acdb9, _0x1f2a54, _0x8efa61, _0x2f249d, _0x4d3896, _0x1e7cd3, _0x2eccb2, _0x216f32, _0x36aaca) {
    if (_0x2eecc9.currentPixelUnpackBufferBinding) {
      _0x2eecc9.compressedTexSubImage3D(_0x4eebb1, _0x49fb72, _0x2acdb9, _0x1f2a54, _0x8efa61, _0x2f249d, _0x4d3896, _0x1e7cd3, _0x2eccb2, _0x216f32, _0x36aaca);
    } else {
      _0x2eecc9.compressedTexSubImage3D(_0x4eebb1, _0x49fb72, _0x2acdb9, _0x1f2a54, _0x8efa61, _0x2f249d, _0x4d3896, _0x1e7cd3, _0x2eccb2, _0x5d32f0, _0x36aaca, _0x216f32);
    }
  }
  function _0x30c4d2(_0x3bd63b, _0x43ccb5, _0x426a1d, _0x1fbbe8, _0x218249) {
    _0x2eecc9.copyBufferSubData(_0x3bd63b, _0x43ccb5, _0x426a1d, _0x1fbbe8, _0x218249);
  }
  function _0x2a254e(_0x3e3796, _0xd2159f, _0x1e5a81, _0x4e1d70, _0x9f5425, _0x21c61f, _0x42ab10, _0x136205) {
    _0x2eecc9.copyTexImage2D(_0x3e3796, _0xd2159f, _0x1e5a81, _0x4e1d70, _0x9f5425, _0x21c61f, _0x42ab10, _0x136205);
  }
  function _0x4fa757(_0x3f1c01, _0x37c6da, _0x3e42e6, _0x29731d, _0x1f304d, _0x4d6b63, _0x1e0307, _0x3108f9) {
    _0x2eecc9.copyTexSubImage2D(_0x3f1c01, _0x37c6da, _0x3e42e6, _0x29731d, _0x1f304d, _0x4d6b63, _0x1e0307, _0x3108f9);
  }
  function _0x129980() {
    var _0x19af5e = _0x5e5447.getNewId(_0x5e5447.programs);
    var _0x19f30c = _0x2eecc9.createProgram();
    _0x19f30c.name = _0x19af5e;
    _0x19f30c.maxUniformLength = _0x19f30c.maxAttributeLength = _0x19f30c.maxUniformBlockNameLength = 0;
    _0x19f30c.uniformIdCounter = 1;
    _0x5e5447.programs[_0x19af5e] = _0x19f30c;
    return _0x19af5e;
  }
  function _0x57593f(_0x3057d9) {
    var _0x41775b = _0x5e5447.getNewId(_0x5e5447.shaders);
    _0x5e5447.shaders[_0x41775b] = _0x2eecc9.createShader(_0x3057d9);
    _0x5e5447.shaders[_0x41775b].shaderType = _0x3057d9 & 1 ? "vs" : "fs";
    return _0x41775b;
  }
  function _0x31db15(_0x1023b1) {
    _0x2eecc9.cullFace(_0x1023b1);
  }
  function _0x483d75(_0x181ba6, _0xfbd92a) {
    for (var _0x1bcba8 = 0; _0x1bcba8 < _0x181ba6; _0x1bcba8++) {
      var _0x340b64 = _0x447875[_0xfbd92a + _0x1bcba8 * 4 >> 2];
      var _0x42bb32 = _0x5e5447.buffers[_0x340b64];
      if (!_0x42bb32) {
        continue;
      }
      _0x2eecc9.deleteBuffer(_0x42bb32);
      _0x42bb32.name = 0;
      _0x5e5447.buffers[_0x340b64] = null;
      if (_0x340b64 == _0x2eecc9.currentArrayBufferBinding) {
        _0x2eecc9.currentArrayBufferBinding = 0;
      }
      if (_0x340b64 == _0x2eecc9.currentElementArrayBufferBinding) {
        _0x2eecc9.currentElementArrayBufferBinding = 0;
      }
      if (_0x340b64 == _0x2eecc9.currentPixelPackBufferBinding) {
        _0x2eecc9.currentPixelPackBufferBinding = 0;
      }
      if (_0x340b64 == _0x2eecc9.currentPixelUnpackBufferBinding) {
        _0x2eecc9.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x223f23(_0x4788cd, _0x4d8540) {
    for (var _0x14f1e8 = 0; _0x14f1e8 < _0x4788cd; ++_0x14f1e8) {
      var _0x3d42f9 = _0x447875[_0x4d8540 + _0x14f1e8 * 4 >> 2];
      var _0x59e54b = _0x5e5447.framebuffers[_0x3d42f9];
      if (!_0x59e54b) {
        continue;
      }
      _0x2eecc9.deleteFramebuffer(_0x59e54b);
      _0x59e54b.name = 0;
      _0x5e5447.framebuffers[_0x3d42f9] = null;
    }
  }
  function _0x162484(_0x23bc95) {
    if (!_0x23bc95) {
      return;
    }
    var _0xc812ad = _0x5e5447.programs[_0x23bc95];
    if (!_0xc812ad) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x2eecc9.deleteProgram(_0xc812ad);
    _0xc812ad.name = 0;
    _0x5e5447.programs[_0x23bc95] = null;
  }
  function _0x1c21e5(_0x1960a9, _0x57cefa) {
    for (var _0x5ddf63 = 0; _0x5ddf63 < _0x1960a9; _0x5ddf63++) {
      var _0x20dee6 = _0x447875[_0x57cefa + _0x5ddf63 * 4 >> 2];
      var _0x738ee4 = _0x5e5447.queries[_0x20dee6];
      if (!_0x738ee4) {
        continue;
      }
      _0x2eecc9.deleteQuery(_0x738ee4);
      _0x5e5447.queries[_0x20dee6] = null;
    }
  }
  function _0x481bcf(_0x5e2dcc, _0x2564f7) {
    for (var _0x3bb315 = 0; _0x3bb315 < _0x5e2dcc; _0x3bb315++) {
      var _0x21fa82 = _0x447875[_0x2564f7 + _0x3bb315 * 4 >> 2];
      var _0x15f860 = _0x5e5447.renderbuffers[_0x21fa82];
      if (!_0x15f860) {
        continue;
      }
      _0x2eecc9.deleteRenderbuffer(_0x15f860);
      _0x15f860.name = 0;
      _0x5e5447.renderbuffers[_0x21fa82] = null;
    }
  }
  function _0x5f21a6(_0x40bc2a, _0x496456) {
    for (var _0x1b6cb7 = 0; _0x1b6cb7 < _0x40bc2a; _0x1b6cb7++) {
      var _0x3c42c7 = _0x447875[_0x496456 + _0x1b6cb7 * 4 >> 2];
      var _0x3d81c9 = _0x5e5447.samplers[_0x3c42c7];
      if (!_0x3d81c9) {
        continue;
      }
      _0x2eecc9.deleteSampler(_0x3d81c9);
      _0x3d81c9.name = 0;
      _0x5e5447.samplers[_0x3c42c7] = null;
    }
  }
  function _0x3331e6(_0x2fec6b) {
    if (!_0x2fec6b) {
      return;
    }
    var _0x5ad62c = _0x5e5447.shaders[_0x2fec6b];
    if (!_0x5ad62c) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x2eecc9.deleteShader(_0x5ad62c);
    _0x5e5447.shaders[_0x2fec6b] = null;
  }
  function _0x13363b(_0x4b073c) {
    if (!_0x4b073c) {
      return;
    }
    var _0x9d3b69 = _0x5e5447.syncs[_0x4b073c];
    if (!_0x9d3b69) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x2eecc9.deleteSync(_0x9d3b69);
    _0x9d3b69.name = 0;
    _0x5e5447.syncs[_0x4b073c] = null;
  }
  function _0x14c84f(_0x3666a7, _0x6ea36b) {
    for (var _0x34e6c0 = 0; _0x34e6c0 < _0x3666a7; _0x34e6c0++) {
      var _0x19c1a8 = _0x447875[_0x6ea36b + _0x34e6c0 * 4 >> 2];
      var _0x4b1a47 = _0x5e5447.textures[_0x19c1a8];
      if (!_0x4b1a47) {
        continue;
      }
      _0x2eecc9.deleteTexture(_0x4b1a47);
      _0x4b1a47.name = 0;
      _0x5e5447.textures[_0x19c1a8] = null;
    }
  }
  function _0x392ff7(_0x11671b, _0x2ab4ac) {
    for (var _0x4f4420 = 0; _0x4f4420 < _0x11671b; _0x4f4420++) {
      var _0x2acaec = _0x447875[_0x2ab4ac + _0x4f4420 * 4 >> 2];
      var _0x15f844 = _0x5e5447.transformFeedbacks[_0x2acaec];
      if (!_0x15f844) {
        continue;
      }
      _0x2eecc9.deleteTransformFeedback(_0x15f844);
      _0x15f844.name = 0;
      _0x5e5447.transformFeedbacks[_0x2acaec] = null;
    }
  }
  function _0x44a85e(_0x1dbd8b, _0xa00640) {
    for (var _0x204ea6 = 0; _0x204ea6 < _0x1dbd8b; _0x204ea6++) {
      var _0x16ff39 = _0x447875[_0xa00640 + _0x204ea6 * 4 >> 2];
      _0x2eecc9.deleteVertexArray(_0x5e5447.vaos[_0x16ff39]);
      _0x5e5447.vaos[_0x16ff39] = null;
    }
  }
  function _0x345d5f(_0x3478ff) {
    _0x2eecc9.depthFunc(_0x3478ff);
  }
  function _0x3ce268(_0x52d21a) {
    _0x2eecc9.depthMask(!!_0x52d21a);
  }
  function _0x4c6bfe(_0xb2e0a2, _0x9c61da) {
    _0x2eecc9.detachShader(_0x5e5447.programs[_0xb2e0a2], _0x5e5447.shaders[_0x9c61da]);
  }
  function _0x38216e(_0x3298bc) {
    _0x2eecc9.disable(_0x3298bc);
  }
  function _0x702f16(_0x43d74e) {
    var _0x5d2c1b = _0x5e5447.currentContext.clientBuffers[_0x43d74e];
    _0x5d2c1b.enabled = false;
    _0x2eecc9.disableVertexAttribArray(_0x43d74e);
  }
  function _0x5e2683(_0x2fa655, _0x2fc022, _0x52b3b8) {
    _0x5e5447.preDrawHandleClientVertexAttribBindings(_0x2fc022 + _0x52b3b8);
    _0x2eecc9.drawArrays(_0x2fa655, _0x2fc022, _0x52b3b8);
    _0x5e5447.postDrawHandleClientVertexAttribBindings();
  }
  function _0xb36a1b(_0xbee998, _0x14191a, _0x120642, _0x41c936) {
    _0x2eecc9.drawArraysInstanced(_0xbee998, _0x14191a, _0x120642, _0x41c936);
  }
  var _0xc22a58 = [];
  function _0x32787a(_0x362643, _0x93ede3) {
    var _0x1c18e1 = _0xc22a58[_0x362643];
    for (var _0x125736 = 0; _0x125736 < _0x362643; _0x125736++) {
      _0x1c18e1[_0x125736] = _0x447875[_0x93ede3 + _0x125736 * 4 >> 2];
    }
    _0x2eecc9.drawBuffers(_0x1c18e1);
  }
  function _0x4dcce1(_0x29b1d8, _0x573f90, _0x52aafc, _0x97b166) {
    var _0x493c78;
    if (!_0x2eecc9.currentElementArrayBufferBinding) {
      var _0x1ed5ed = _0x5e5447.calcBufLength(1, _0x52aafc, 0, _0x573f90);
      _0x493c78 = _0x5e5447.getTempIndexBuffer(_0x1ed5ed);
      _0x2eecc9.bindBuffer(34963, _0x493c78);
      _0x2eecc9.bufferSubData(34963, 0, _0x5d32f0.subarray(_0x97b166, _0x97b166 + _0x1ed5ed));
      _0x97b166 = 0;
    }
    _0x5e5447.preDrawHandleClientVertexAttribBindings(_0x573f90);
    _0x2eecc9.drawElements(_0x29b1d8, _0x573f90, _0x52aafc, _0x97b166);
    _0x5e5447.postDrawHandleClientVertexAttribBindings(_0x573f90);
    if (!_0x2eecc9.currentElementArrayBufferBinding) {
      _0x2eecc9.bindBuffer(34963, null);
    }
  }
  function _0x2bb7f2(_0x1548f5, _0x2bd466, _0x5728bd, _0x510e6b, _0x164c45) {
    _0x2eecc9.drawElementsInstanced(_0x1548f5, _0x2bd466, _0x5728bd, _0x510e6b, _0x164c45);
  }
  function _0x4c347e(_0x2f1b42) {
    _0x2eecc9.enable(_0x2f1b42);
  }
  function _0xadd60a(_0xf9aab) {
    var _0x475b0e = _0x5e5447.currentContext.clientBuffers[_0xf9aab];
    _0x475b0e.enabled = true;
    _0x2eecc9.enableVertexAttribArray(_0xf9aab);
  }
  function _0x244e43(_0x40bf24) {
    _0x2eecc9.endQuery(_0x40bf24);
  }
  function _0x992081() {
    _0x2eecc9.endTransformFeedback();
  }
  function _0x42e325(_0xf943c8, _0x3d8b77) {
    var _0x39123f = _0x2eecc9.fenceSync(_0xf943c8, _0x3d8b77);
    if (_0x39123f) {
      var _0x1c2320 = _0x5e5447.getNewId(_0x5e5447.syncs);
      _0x39123f.name = _0x1c2320;
      _0x5e5447.syncs[_0x1c2320] = _0x39123f;
      return _0x1c2320;
    } else {
      return 0;
    }
  }
  function _0x297aa8() {
    _0x2eecc9.finish();
  }
  function _0x430b41() {
    _0x2eecc9.flush();
  }
  function _0x5e050c(_0x5833b0) {
    switch (_0x5833b0) {
      case 34962:
        _0x5833b0 = 34964;
        break;
      case 34963:
        _0x5833b0 = 34965;
        break;
      case 35051:
        _0x5833b0 = 35053;
        break;
      case 35052:
        _0x5833b0 = 35055;
        break;
      case 35982:
        _0x5833b0 = 35983;
        break;
      case 36662:
        _0x5833b0 = 36662;
        break;
      case 36663:
        _0x5833b0 = 36663;
        break;
      case 35345:
        _0x5833b0 = 35368;
        break;
    }
    var _0x1cceab = _0x2eecc9.getParameter(_0x5833b0);
    if (_0x1cceab) {
      return _0x1cceab.name | 0;
    } else {
      return 0;
    }
  }
  function _0x43254c(_0x3dba5d) {
    switch (_0x3dba5d) {
      case 34962:
      case 34963:
      case 36662:
      case 36663:
      case 35051:
      case 35052:
      case 35882:
      case 35982:
      case 35345:
        return true;
      default:
        return false;
    }
  }
  function _0xcfad5f(_0x56f62c, _0x59f30e, _0xa7663f) {
    if (!_0x43254c(_0x56f62c)) {
      _0x5e5447.recordError(1280);
      _0x38748e("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0xf376c6 = _0x5e5447.mappedBuffers[_0x5e050c(_0x56f62c)];
    if (!_0xf376c6) {
      _0x5e5447.recordError(1282);
      _0x38748e("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0xf376c6.access & 16)) {
      _0x5e5447.recordError(1282);
      _0x38748e("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x59f30e < 0 || _0xa7663f < 0 || _0x59f30e + _0xa7663f > _0xf376c6.length) {
      _0x5e5447.recordError(1281);
      _0x38748e("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x2eecc9.bufferSubData(_0x56f62c, _0xf376c6.offset, _0x5d32f0.subarray(_0xf376c6.mem + _0x59f30e, _0xf376c6.mem + _0x59f30e + _0xa7663f));
  }
  function _0x18f2f8(_0x1a35d1, _0x51dec1, _0x2e8d03, _0x31f21f) {
    _0x2eecc9.framebufferRenderbuffer(_0x1a35d1, _0x51dec1, _0x2e8d03, _0x5e5447.renderbuffers[_0x31f21f]);
  }
  function _0x2ef743(_0xe4ea59, _0x26fb52, _0x3a5d69, _0x349d2b, _0x315ed8) {
    _0x2eecc9.framebufferTexture2D(_0xe4ea59, _0x26fb52, _0x3a5d69, _0x5e5447.textures[_0x349d2b], _0x315ed8);
  }
  function _0x3c8903(_0x2371fa, _0x1a0627, _0x136c8c, _0x52f20d, _0x3cb44b) {
    _0x2eecc9.framebufferTextureLayer(_0x2371fa, _0x1a0627, _0x5e5447.textures[_0x136c8c], _0x52f20d, _0x3cb44b);
  }
  function _0x13c82b(_0x13d283) {
    _0x2eecc9.frontFace(_0x13d283);
  }
  function _0x5949a8(_0xf6ef61, _0x59f125, _0x346c08, _0x1b3d7b) {
    for (var _0x47dbf9 = 0; _0x47dbf9 < _0xf6ef61; _0x47dbf9++) {
      var _0x38e711 = _0x2eecc9[_0x346c08]();
      var _0x37e1ae = _0x38e711 && _0x5e5447.getNewId(_0x1b3d7b);
      if (_0x38e711) {
        _0x38e711.name = _0x37e1ae;
        _0x1b3d7b[_0x37e1ae] = _0x38e711;
      } else {
        _0x5e5447.recordError(1282);
      }
      _0x447875[_0x59f125 + _0x47dbf9 * 4 >> 2] = _0x37e1ae;
    }
  }
  function _0xaea1d7(_0x1361e7, _0x58cba4) {
    _0x5949a8(_0x1361e7, _0x58cba4, "createBuffer", _0x5e5447.buffers);
  }
  function _0x52ea86(_0x314118, _0x2e1f0f) {
    _0x5949a8(_0x314118, _0x2e1f0f, "createFramebuffer", _0x5e5447.framebuffers);
  }
  function _0x15b445(_0x24c614, _0x3b6b97) {
    _0x5949a8(_0x24c614, _0x3b6b97, "createQuery", _0x5e5447.queries);
  }
  function _0x2fb0c7(_0x2cf0b1, _0x14490e) {
    _0x5949a8(_0x2cf0b1, _0x14490e, "createRenderbuffer", _0x5e5447.renderbuffers);
  }
  function _0x523724(_0x55cf91, _0x2b3575) {
    _0x5949a8(_0x55cf91, _0x2b3575, "createSampler", _0x5e5447.samplers);
  }
  function _0x4cee95(_0x22dd1, _0x74dea8) {
    _0x5949a8(_0x22dd1, _0x74dea8, "createTexture", _0x5e5447.textures);
  }
  function _0xd968b1(_0x20a0eb, _0x5476ad) {
    _0x5949a8(_0x20a0eb, _0x5476ad, "createTransformFeedback", _0x5e5447.transformFeedbacks);
  }
  function _0x3b82e4(_0x1c6305, _0x54cb4d) {
    _0x5949a8(_0x1c6305, _0x54cb4d, "createVertexArray", _0x5e5447.vaos);
  }
  function _0x55e688(_0x22a3b8) {
    _0x2eecc9.generateMipmap(_0x22a3b8);
  }
  function _0x16a32e(_0x1a69a5, _0x1a051c, _0x8700eb, _0x4d6063, _0x502fe3, _0x18ee0d, _0x9bc262, _0x32ed81) {
    _0x1a051c = _0x5e5447.programs[_0x1a051c];
    var _0x5a1aa2 = _0x2eecc9[_0x1a69a5](_0x1a051c, _0x8700eb);
    if (_0x5a1aa2) {
      var _0x436158 = _0x32ed81 && _0x291bc6(_0x5a1aa2.name, _0x32ed81, _0x4d6063);
      if (_0x502fe3) {
        _0x447875[_0x502fe3 >> 2] = _0x436158;
      }
      if (_0x18ee0d) {
        _0x447875[_0x18ee0d >> 2] = _0x5a1aa2.size;
      }
      if (_0x9bc262) {
        _0x447875[_0x9bc262 >> 2] = _0x5a1aa2.type;
      }
    }
  }
  function _0x139602(_0x1c903f, _0x44cb1a, _0x8cf906, _0x5886cc, _0x16282b, _0x37d57c, _0x2143a8) {
    _0x16a32e("getActiveAttrib", _0x1c903f, _0x44cb1a, _0x8cf906, _0x5886cc, _0x16282b, _0x37d57c, _0x2143a8);
  }
  function _0x2ed0c8(_0xa621c8, _0x338029, _0xd86e71, _0xf59933, _0x4afd7e, _0x169655, _0x45256c) {
    _0x16a32e("getActiveUniform", _0xa621c8, _0x338029, _0xd86e71, _0xf59933, _0x4afd7e, _0x169655, _0x45256c);
  }
  function _0x1ed779(_0x504b56, _0x5bf7c8, _0x273b56, _0x39adc4, _0x12bcc8) {
    _0x504b56 = _0x5e5447.programs[_0x504b56];
    var _0x3c104f = _0x2eecc9.getActiveUniformBlockName(_0x504b56, _0x5bf7c8);
    if (!_0x3c104f) {
      return;
    }
    if (_0x12bcc8 && _0x273b56 > 0) {
      var _0x3779b4 = _0x291bc6(_0x3c104f, _0x12bcc8, _0x273b56);
      if (_0x39adc4) {
        _0x447875[_0x39adc4 >> 2] = _0x3779b4;
      }
    } else if (_0x39adc4) {
      _0x447875[_0x39adc4 >> 2] = 0;
    }
  }
  function _0x2d4150(_0x470f80, _0x16a210, _0x2f9a58, _0x141719) {
    if (!_0x141719) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x470f80 = _0x5e5447.programs[_0x470f80];
    if (_0x2f9a58 == 35393) {
      var _0xba8bcf = _0x2eecc9.getActiveUniformBlockName(_0x470f80, _0x16a210);
      _0x447875[_0x141719 >> 2] = _0xba8bcf.length + 1;
      return;
    }
    var _0x3e60f3 = _0x2eecc9.getActiveUniformBlockParameter(_0x470f80, _0x16a210, _0x2f9a58);
    if (_0x3e60f3 === null) {
      return;
    }
    if (_0x2f9a58 == 35395) {
      for (var _0x39b28e = 0; _0x39b28e < _0x3e60f3.length; _0x39b28e++) {
        _0x447875[_0x141719 + _0x39b28e * 4 >> 2] = _0x3e60f3[_0x39b28e];
      }
    } else {
      _0x447875[_0x141719 >> 2] = _0x3e60f3;
    }
  }
  function _0x36fabd(_0x4c772b, _0x3442d7, _0x4510eb, _0x5ba81d, _0x437874) {
    if (!_0x437874) {
      _0x5e5447.recordError(1281);
      return;
    }
    if (_0x3442d7 > 0 && _0x4510eb == 0) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x4c772b = _0x5e5447.programs[_0x4c772b];
    var _0x37cd6b = [];
    for (var _0xd26778 = 0; _0xd26778 < _0x3442d7; _0xd26778++) {
      _0x37cd6b.push(_0x447875[_0x4510eb + _0xd26778 * 4 >> 2]);
    }
    var _0x2494c1 = _0x2eecc9.getActiveUniforms(_0x4c772b, _0x37cd6b, _0x5ba81d);
    if (!_0x2494c1) {
      return;
    }
    var _0x18138c = _0x2494c1.length;
    for (var _0xd26778 = 0; _0xd26778 < _0x18138c; _0xd26778++) {
      _0x447875[_0x437874 + _0xd26778 * 4 >> 2] = _0x2494c1[_0xd26778];
    }
  }
  function _0x4a34fa(_0x43fc87, _0x11df66) {
    return _0x2eecc9.getAttribLocation(_0x5e5447.programs[_0x43fc87], _0x242db5(_0x11df66));
  }
  function _0x2a56c3(_0x5d65ef, _0x4bcbcf, _0x2691b4, _0xb0ad4) {
    if (!_0xb0ad4) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x2eecc9.getBufferSubData(_0x5d65ef, _0x4bcbcf, _0x5d32f0, _0xb0ad4, _0x2691b4);
  }
  function _0x287cb4() {
    var _0x328178 = _0x2eecc9.getError() || _0x5e5447.lastError;
    _0x5e5447.lastError = 0;
    return _0x328178;
  }
  function _0x43a6e7(_0x4f0c48, _0x256c85, _0x4bb31d, _0x916391) {
    var _0x39d54d = _0x2eecc9.getFramebufferAttachmentParameter(_0x4f0c48, _0x256c85, _0x4bb31d);
    if (_0x39d54d instanceof WebGLRenderbuffer || _0x39d54d instanceof WebGLTexture) {
      _0x39d54d = _0x39d54d.name | 0;
    }
    _0x447875[_0x916391 >> 2] = _0x39d54d;
  }
  function _0x2cfa3a(_0x1f3596, _0x23c545) {
    _0x51a6ce[_0x1f3596 >> 2] = _0x23c545;
    _0x51a6ce[_0x1f3596 + 4 >> 2] = (_0x23c545 - _0x51a6ce[_0x1f3596 >> 2]) / 4294967296;
  }
  function _0x288a8c(_0x26e423, _0x55316c, _0x48b4df, _0x372ece) {
    if (!_0x48b4df) {
      _0x5e5447.recordError(1281);
      return;
    }
    var _0x3d6cfd = _0x2eecc9.getIndexedParameter(_0x26e423, _0x55316c);
    var _0x14aa2d;
    switch (typeof _0x3d6cfd) {
      case "boolean":
        _0x14aa2d = _0x3d6cfd ? 1 : 0;
        break;
      case "number":
        _0x14aa2d = _0x3d6cfd;
        break;
      case "object":
        if (_0x3d6cfd === null) {
          switch (_0x26e423) {
            case 35983:
            case 35368:
              _0x14aa2d = 0;
              break;
            default:
              {
                _0x5e5447.recordError(1280);
                return;
              }
          }
        } else if (_0x3d6cfd instanceof WebGLBuffer) {
          _0x14aa2d = _0x3d6cfd.name | 0;
        } else {
          _0x5e5447.recordError(1280);
          return;
        }
        break;
      default:
        _0x5e5447.recordError(1280);
        return;
    }
    switch (_0x372ece) {
      case 1:
        _0x2cfa3a(_0x48b4df, _0x14aa2d);
        break;
      case 0:
        _0x447875[_0x48b4df >> 2] = _0x14aa2d;
        break;
      case 2:
        _0x5d3882[_0x48b4df >> 2] = _0x14aa2d;
        break;
      case 4:
        _0xf10f52[_0x48b4df >> 0] = _0x14aa2d ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x372ece;
    }
  }
  function _0x5a8c17(_0x2d25e0, _0xff268a, _0x52e8c4) {
    _0x288a8c(_0x2d25e0, _0xff268a, _0x52e8c4, 0);
  }
  function _0x20558b(_0x4ff0e9, _0x17fee8, _0x17bdde) {
    if (!_0x17fee8) {
      _0x5e5447.recordError(1281);
      return;
    }
    var _0x51a7db = undefined;
    switch (_0x4ff0e9) {
      case 36346:
        _0x51a7db = 1;
        break;
      case 36344:
        if (_0x17bdde != 0 && _0x17bdde != 1) {
          _0x5e5447.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x51a7db = 0;
        break;
      case 34466:
        var _0x1c0018 = _0x2eecc9.getParameter(34467);
        _0x51a7db = _0x1c0018 ? _0x1c0018.length : 0;
        break;
      case 33390:
        _0x51a7db = 1048576;
        break;
      case 33309:
        if (_0x5e5447.currentContext.version < 2) {
          _0x5e5447.recordError(1282);
          return;
        }
        var _0x4d93f3 = _0x2eecc9.getSupportedExtensions() || [];
        _0x51a7db = _0x4d93f3.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x5e5447.currentContext.version < 2) {
          _0x5e5447.recordError(1280);
          return;
        }
        _0x51a7db = _0x4ff0e9 == 33307 ? 3 : 0;
        break;
    }
    if (_0x51a7db === undefined) {
      var _0x2f47db = _0x2eecc9.getParameter(_0x4ff0e9);
      switch (typeof _0x2f47db) {
        case "number":
          _0x51a7db = _0x2f47db;
          break;
        case "boolean":
          _0x51a7db = _0x2f47db ? 1 : 0;
          break;
        case "string":
          _0x5e5447.recordError(1280);
          return;
        case "object":
          if (_0x2f47db === null) {
            switch (_0x4ff0e9) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                {
                  _0x51a7db = 0;
                  break;
                }
              default:
                {
                  _0x5e5447.recordError(1280);
                  return;
                }
            }
          } else if (_0x2f47db instanceof Float32Array || _0x2f47db instanceof Uint32Array || _0x2f47db instanceof Int32Array || _0x2f47db instanceof Array) {
            for (var _0x380082 = 0; _0x380082 < _0x2f47db.length; ++_0x380082) {
              switch (_0x17bdde) {
                case 0:
                  _0x447875[_0x17fee8 + _0x380082 * 4 >> 2] = _0x2f47db[_0x380082];
                  break;
                case 2:
                  _0x5d3882[_0x17fee8 + _0x380082 * 4 >> 2] = _0x2f47db[_0x380082];
                  break;
                case 4:
                  _0xf10f52[_0x17fee8 + _0x380082 >> 0] = _0x2f47db[_0x380082] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x51a7db = _0x2f47db.name | 0;
            } catch (_0x2d47d9) {
              _0x5e5447.recordError(1280);
              _0x38748e("GL_INVALID_ENUM in glGet" + _0x17bdde + "v: Unknown object returned from WebGL getParameter(" + _0x4ff0e9 + ")! (error: " + _0x2d47d9 + ")");
              return;
            }
          }
          break;
        default:
          _0x5e5447.recordError(1280);
          _0x38748e("GL_INVALID_ENUM in glGet" + _0x17bdde + "v: Native code calling glGet" + _0x17bdde + "v(" + _0x4ff0e9 + ") and it returns " + _0x2f47db + " of type " + typeof _0x2f47db + "!");
          return;
      }
    }
    switch (_0x17bdde) {
      case 1:
        _0x2cfa3a(_0x17fee8, _0x51a7db);
        break;
      case 0:
        _0x447875[_0x17fee8 >> 2] = _0x51a7db;
        break;
      case 2:
        _0x5d3882[_0x17fee8 >> 2] = _0x51a7db;
        break;
      case 4:
        _0xf10f52[_0x17fee8 >> 0] = _0x51a7db ? 1 : 0;
        break;
    }
  }
  function _0x1bbe14(_0x31d08c, _0x5623f3) {
    _0x20558b(_0x31d08c, _0x5623f3, 0);
  }
  function _0x5dd9d5(_0x444e9a, _0x966390, _0x15b0b6, _0x36b69e, _0x5cf7aa) {
    if (_0x36b69e < 0) {
      _0x5e5447.recordError(1281);
      return;
    }
    if (!_0x5cf7aa) {
      _0x5e5447.recordError(1281);
      return;
    }
    var _0x12cc3e = _0x2eecc9.getInternalformatParameter(_0x444e9a, _0x966390, _0x15b0b6);
    if (_0x12cc3e === null) {
      return;
    }
    for (var _0x59a137 = 0; _0x59a137 < _0x12cc3e.length && _0x59a137 < _0x36b69e; ++_0x59a137) {
      _0x447875[_0x5cf7aa + _0x59a137 * 4 >> 2] = _0x12cc3e[_0x59a137];
    }
  }
  function _0x27bca9(_0x550e46, _0xd582ee, _0x404b7b, _0x2f08fd, _0x23140a) {
    _0x5e5447.recordError(1282);
  }
  function _0x496289(_0x2baf21, _0x8a9e7, _0x2e8461, _0x2fdfca) {
    var _0x2ae8d6 = _0x2eecc9.getProgramInfoLog(_0x5e5447.programs[_0x2baf21]);
    if (_0x2ae8d6 === null) {
      _0x2ae8d6 = "(unknown error)";
    }
    var _0x2c04fe = _0x8a9e7 > 0 && _0x2fdfca ? _0x291bc6(_0x2ae8d6, _0x2fdfca, _0x8a9e7) : 0;
    if (_0x2e8461) {
      _0x447875[_0x2e8461 >> 2] = _0x2c04fe;
    }
  }
  function _0x1b2ac2(_0x120ede, _0xbe6ca7, _0x589891) {
    if (!_0x589891) {
      _0x5e5447.recordError(1281);
      return;
    }
    if (_0x120ede >= _0x5e5447.counter) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x120ede = _0x5e5447.programs[_0x120ede];
    if (_0xbe6ca7 == 35716) {
      var _0x2d5c4b = _0x2eecc9.getProgramInfoLog(_0x120ede);
      if (_0x2d5c4b === null) {
        _0x2d5c4b = "(unknown error)";
      }
      _0x447875[_0x589891 >> 2] = _0x2d5c4b.length + 1;
    } else if (_0xbe6ca7 == 35719) {
      if (!_0x120ede.maxUniformLength) {
        for (var _0x50101c = 0; _0x50101c < _0x2eecc9.getProgramParameter(_0x120ede, 35718); ++_0x50101c) {
          _0x120ede.maxUniformLength = Math.max(_0x120ede.maxUniformLength, _0x2eecc9.getActiveUniform(_0x120ede, _0x50101c).name.length + 1);
        }
      }
      _0x447875[_0x589891 >> 2] = _0x120ede.maxUniformLength;
    } else if (_0xbe6ca7 == 35722) {
      if (!_0x120ede.maxAttributeLength) {
        for (var _0x50101c = 0; _0x50101c < _0x2eecc9.getProgramParameter(_0x120ede, 35721); ++_0x50101c) {
          _0x120ede.maxAttributeLength = Math.max(_0x120ede.maxAttributeLength, _0x2eecc9.getActiveAttrib(_0x120ede, _0x50101c).name.length + 1);
        }
      }
      _0x447875[_0x589891 >> 2] = _0x120ede.maxAttributeLength;
    } else if (_0xbe6ca7 == 35381) {
      if (!_0x120ede.maxUniformBlockNameLength) {
        for (var _0x50101c = 0; _0x50101c < _0x2eecc9.getProgramParameter(_0x120ede, 35382); ++_0x50101c) {
          _0x120ede.maxUniformBlockNameLength = Math.max(_0x120ede.maxUniformBlockNameLength, _0x2eecc9.getActiveUniformBlockName(_0x120ede, _0x50101c).length + 1);
        }
      }
      _0x447875[_0x589891 >> 2] = _0x120ede.maxUniformBlockNameLength;
    } else {
      _0x447875[_0x589891 >> 2] = _0x2eecc9.getProgramParameter(_0x120ede, _0xbe6ca7);
    }
  }
  function _0x24da3a(_0xd8b48a, _0xb7852c, _0x5ecff0) {
    if (!_0x5ecff0) {
      _0x5e5447.recordError(1281);
      return;
    }
    var _0x19253e = _0x5e5447.queries[_0xd8b48a];
    var _0x243300 = _0x2eecc9.getQueryParameter(_0x19253e, _0xb7852c);
    var _0x3f3d8f;
    if (typeof _0x243300 == "boolean") {
      _0x3f3d8f = _0x243300 ? 1 : 0;
    } else {
      _0x3f3d8f = _0x243300;
    }
    _0x447875[_0x5ecff0 >> 2] = _0x3f3d8f;
  }
  function _0x1148b0(_0x47225d, _0x22ee32, _0x4e3470) {
    if (!_0x4e3470) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x447875[_0x4e3470 >> 2] = _0x2eecc9.getQuery(_0x47225d, _0x22ee32);
  }
  function _0x238480(_0x1b4550, _0x5dff95, _0x410abd) {
    if (!_0x410abd) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x447875[_0x410abd >> 2] = _0x2eecc9.getRenderbufferParameter(_0x1b4550, _0x5dff95);
  }
  function _0x12ade2(_0x5ea80d, _0xf549bc, _0x45a80b, _0x193ed2) {
    var _0x3a7f8d = _0x2eecc9.getShaderInfoLog(_0x5e5447.shaders[_0x5ea80d]);
    if (_0x3a7f8d === null) {
      _0x3a7f8d = "(unknown error)";
    }
    var _0x354260 = _0xf549bc > 0 && _0x193ed2 ? _0x291bc6(_0x3a7f8d, _0x193ed2, _0xf549bc) : 0;
    if (_0x45a80b) {
      _0x447875[_0x45a80b >> 2] = _0x354260;
    }
  }
  function _0x27a44c(_0x3e5c3d, _0x3000f6, _0x1f0f28, _0x14e574) {
    var _0x291138 = _0x2eecc9.getShaderPrecisionFormat(_0x3e5c3d, _0x3000f6);
    _0x447875[_0x1f0f28 >> 2] = _0x291138.rangeMin;
    _0x447875[_0x1f0f28 + 4 >> 2] = _0x291138.rangeMax;
    _0x447875[_0x14e574 >> 2] = _0x291138.precision;
  }
  function _0x4c013e(_0x1876f8, _0x11938b, _0x531ff7, _0x3e1f94) {
    var _0x988437 = _0x2eecc9.getShaderSource(_0x5e5447.shaders[_0x1876f8]);
    if (!_0x988437) {
      return;
    }
    var _0x126473 = _0x11938b > 0 && _0x3e1f94 ? _0x291bc6(_0x988437, _0x3e1f94, _0x11938b) : 0;
    if (_0x531ff7) {
      _0x447875[_0x531ff7 >> 2] = _0x126473;
    }
  }
  function _0xef710c(_0x51beb3, _0x2203f1, _0x71c4c) {
    if (!_0x71c4c) {
      _0x5e5447.recordError(1281);
      return;
    }
    if (_0x2203f1 == 35716) {
      var _0x87840 = _0x2eecc9.getShaderInfoLog(_0x5e5447.shaders[_0x51beb3]);
      if (_0x87840 === null) {
        _0x87840 = "(unknown error)";
      }
      var _0x5b323e = _0x87840 ? _0x87840.length + 1 : 0;
      _0x447875[_0x71c4c >> 2] = _0x5b323e;
    } else if (_0x2203f1 == 35720) {
      var _0xacf63b = _0x2eecc9.getShaderSource(_0x5e5447.shaders[_0x51beb3]);
      var _0x518b49 = _0xacf63b ? _0xacf63b.length + 1 : 0;
      _0x447875[_0x71c4c >> 2] = _0x518b49;
    } else {
      _0x447875[_0x71c4c >> 2] = _0x2eecc9.getShaderParameter(_0x5e5447.shaders[_0x51beb3], _0x2203f1);
    }
  }
  function _0x3f4280(_0x5d2d17) {
    var _0x30a811 = _0x5e5447.stringCache[_0x5d2d17];
    if (!_0x30a811) {
      switch (_0x5d2d17) {
        case 7939:
          var _0x328001 = _0x2eecc9.getSupportedExtensions() || [];
          _0x328001 = _0x328001.concat(_0x328001.map(function (_0x2efcab) {
            return "GL_" + _0x2efcab;
          }));
          _0x30a811 = _0x3067f0(_0x328001.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x5c13e8 = _0x2eecc9.getParameter(_0x5d2d17);
          if (!_0x5c13e8) {
            _0x5e5447.recordError(1280);
          }
          _0x30a811 = _0x5c13e8 && _0x3067f0(_0x5c13e8);
          break;
        case 7938:
          var _0xeb7ec6 = _0x2eecc9.getParameter(7938);
          if (_0x5e5447.currentContext.version >= 2) {
            _0xeb7ec6 = "OpenGL ES 3.0 (" + _0xeb7ec6 + ")";
          } else {
            _0xeb7ec6 = "OpenGL ES 2.0 (" + _0xeb7ec6 + ")";
          }
          _0x30a811 = _0x3067f0(_0xeb7ec6);
          break;
        case 35724:
          var _0x18b467 = _0x2eecc9.getParameter(35724);
          var _0x57ea12 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x87a20a = _0x18b467.match(_0x57ea12);
          if (_0x87a20a !== null) {
            if (_0x87a20a[1].length == 3) {
              _0x87a20a[1] = _0x87a20a[1] + "0";
            }
            _0x18b467 = "OpenGL ES GLSL ES " + _0x87a20a[1] + " (" + _0x18b467 + ")";
          }
          _0x30a811 = _0x3067f0(_0x18b467);
          break;
        default:
          _0x5e5447.recordError(1280);
      }
      _0x5e5447.stringCache[_0x5d2d17] = _0x30a811;
    }
    return _0x30a811;
  }
  function _0x3c46e4(_0x2c0865, _0x7a7628) {
    if (_0x5e5447.currentContext.version < 2) {
      _0x5e5447.recordError(1282);
      return 0;
    }
    var _0x5a777a = _0x5e5447.stringiCache[_0x2c0865];
    if (_0x5a777a) {
      if (_0x7a7628 < 0 || _0x7a7628 >= _0x5a777a.length) {
        _0x5e5447.recordError(1281);
        return 0;
      }
      return _0x5a777a[_0x7a7628];
    }
    switch (_0x2c0865) {
      case 7939:
        var _0x330715 = _0x2eecc9.getSupportedExtensions() || [];
        _0x330715 = _0x330715.concat(_0x330715.map(function (_0xf6f277) {
          return "GL_" + _0xf6f277;
        }));
        _0x330715 = _0x330715.map(function (_0x4b0a8c) {
          return _0x3067f0(_0x4b0a8c);
        });
        _0x5a777a = _0x5e5447.stringiCache[_0x2c0865] = _0x330715;
        if (_0x7a7628 < 0 || _0x7a7628 >= _0x5a777a.length) {
          _0x5e5447.recordError(1281);
          return 0;
        }
        return _0x5a777a[_0x7a7628];
      default:
        _0x5e5447.recordError(1280);
        return 0;
    }
  }
  function _0x6fb292(_0x36fb14, _0x4f1c47, _0x1c3e90) {
    if (!_0x1c3e90) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x447875[_0x1c3e90 >> 2] = _0x2eecc9.getTexParameter(_0x36fb14, _0x4f1c47);
  }
  function _0x4be686(_0x5f1633, _0x28cc07) {
    return _0x2eecc9.getUniformBlockIndex(_0x5e5447.programs[_0x5f1633], _0x242db5(_0x28cc07));
  }
  function _0x3af141(_0x3f4cef, _0x4740ed, _0x3263eb, _0x4f48af) {
    if (!_0x4f48af) {
      _0x5e5447.recordError(1281);
      return;
    }
    if (_0x4740ed > 0 && (_0x3263eb == 0 || _0x4f48af == 0)) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x3f4cef = _0x5e5447.programs[_0x3f4cef];
    var _0x32cd19 = [];
    for (var _0x17f336 = 0; _0x17f336 < _0x4740ed; _0x17f336++) {
      _0x32cd19.push(_0x242db5(_0x447875[_0x3263eb + _0x17f336 * 4 >> 2]));
    }
    var _0x443a2a = _0x2eecc9.getUniformIndices(_0x3f4cef, _0x32cd19);
    if (!_0x443a2a) {
      return;
    }
    var _0x3187db = _0x443a2a.length;
    for (var _0x17f336 = 0; _0x17f336 < _0x3187db; _0x17f336++) {
      _0x447875[_0x4f48af + _0x17f336 * 4 >> 2] = _0x443a2a[_0x17f336];
    }
  }
  function _0xce8b72(_0x121cf7, _0x154604) {
    function _0x4be384(_0x34bb15) {
      return _0x34bb15.slice(-1) == "]" && _0x34bb15.lastIndexOf("[");
    }
    _0x154604 = _0x242db5(_0x154604);
    if (_0x121cf7 = _0x5e5447.programs[_0x121cf7]) {
      var _0x51d3e6 = _0x121cf7.uniformLocsById;
      var _0x387f1f = _0x121cf7.uniformSizeAndIdsByName;
      var _0x542aff;
      var _0x3a7132;
      var _0x4590ca = 0;
      var _0x1cf1b1 = _0x154604;
      var _0x4d0820 = _0x4be384(_0x154604);
      if (!_0x51d3e6) {
        _0x121cf7.uniformLocsById = _0x51d3e6 = {};
        _0x121cf7.uniformArrayNamesById = {};
        for (_0x542aff = 0; _0x542aff < _0x2eecc9.getProgramParameter(_0x121cf7, 35718); ++_0x542aff) {
          var _0x2c1402 = _0x2eecc9.getActiveUniform(_0x121cf7, _0x542aff);
          var _0x94c8f4 = _0x2c1402.name;
          var _0x115535 = _0x2c1402.size;
          var _0x918a96 = _0x4be384(_0x94c8f4);
          var _0x55eedf = _0x918a96 > 0 ? _0x94c8f4.slice(0, _0x918a96) : _0x94c8f4;
          var _0xecc8c0 = _0x387f1f[_0x55eedf] ? _0x387f1f[_0x55eedf][1] : _0x121cf7.uniformIdCounter;
          _0x121cf7.uniformIdCounter = Math.max(_0xecc8c0 + _0x115535, _0x121cf7.uniformIdCounter);
          _0x387f1f[_0x55eedf] = [_0x115535, _0xecc8c0];
          for (_0x3a7132 = 0; _0x3a7132 < _0x115535; ++_0x3a7132) {
            _0x51d3e6[_0xecc8c0] = _0x3a7132;
            _0x121cf7.uniformArrayNamesById[_0xecc8c0++] = _0x55eedf;
          }
        }
      }
      if (_0x4d0820 > 0) {
        _0x4590ca = _0x35de35(_0x154604.slice(_0x4d0820 + 1)) >>> 0;
        _0x1cf1b1 = _0x154604.slice(0, _0x4d0820);
      }
      var _0xc3fb87 = _0x387f1f[_0x1cf1b1];
      if (_0xc3fb87 && _0x4590ca < _0xc3fb87[0]) {
        _0x4590ca += _0xc3fb87[1];
        if (_0x51d3e6[_0x4590ca] = _0x51d3e6[_0x4590ca] || _0x2eecc9.getUniformLocation(_0x121cf7, _0x154604)) {
          return _0x4590ca;
        }
      }
    } else {
      _0x5e5447.recordError(1281);
    }
    return -1;
  }
  function _0x99e313(_0x57482e) {
    var _0x56af7d = _0x2eecc9.currentProgram;
    if (_0x56af7d) {
      var _0x53b334 = _0x56af7d.uniformLocsById[_0x57482e];
      if (typeof _0x53b334 === "number") {
        _0x56af7d.uniformLocsById[_0x57482e] = _0x53b334 = _0x2eecc9.getUniformLocation(_0x56af7d, _0x56af7d.uniformArrayNamesById[_0x57482e] + (_0x53b334 > 0 ? "[" + _0x53b334 + "]" : ""));
      }
      return _0x53b334;
    } else {
      _0x5e5447.recordError(1282);
    }
  }
  function _0x1106af(_0x4322b9, _0x51a75f, _0x346213, _0x5cf26d) {
    if (!_0x346213) {
      _0x5e5447.recordError(1281);
      return;
    }
    _0x4322b9 = _0x5e5447.programs[_0x4322b9];
    var _0x26f9a0 = _0x2eecc9.getUniform(_0x4322b9, _0x99e313(_0x51a75f));
    if (typeof _0x26f9a0 == "number" || typeof _0x26f9a0 == "boolean") {
      switch (_0x5cf26d) {
        case 0:
          _0x447875[_0x346213 >> 2] = _0x26f9a0;
          break;
        case 2:
          _0x5d3882[_0x346213 >> 2] = _0x26f9a0;
          break;
      }
    } else {
      for (var _0x540992 = 0; _0x540992 < _0x26f9a0.length; _0x540992++) {
        switch (_0x5cf26d) {
          case 0:
            _0x447875[_0x346213 + _0x540992 * 4 >> 2] = _0x26f9a0[_0x540992];
            break;
          case 2:
            _0x5d3882[_0x346213 + _0x540992 * 4 >> 2] = _0x26f9a0[_0x540992];
            break;
        }
      }
    }
  }
  function _0x47d1c0(_0x5f3502, _0x1e382f, _0x29879c) {
    _0x1106af(_0x5f3502, _0x1e382f, _0x29879c, 0);
  }
  function _0xf2995c(_0x2e5e0b, _0x2727fd, _0x579990, _0x3a873c) {
    if (!_0x579990) {
      _0x5e5447.recordError(1281);
      return;
    }
    if (_0x5e5447.currentContext.clientBuffers[_0x2e5e0b].enabled) {
      _0x38748e("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x583673 = _0x2eecc9.getVertexAttrib(_0x2e5e0b, _0x2727fd);
    if (_0x2727fd == 34975) {
      _0x447875[_0x579990 >> 2] = _0x583673 && _0x583673.name;
    } else if (typeof _0x583673 == "number" || typeof _0x583673 == "boolean") {
      switch (_0x3a873c) {
        case 0:
          _0x447875[_0x579990 >> 2] = _0x583673;
          break;
        case 2:
          _0x5d3882[_0x579990 >> 2] = _0x583673;
          break;
        case 5:
          _0x447875[_0x579990 >> 2] = Math.fround(_0x583673);
          break;
      }
    } else {
      for (var _0x568db5 = 0; _0x568db5 < _0x583673.length; _0x568db5++) {
        switch (_0x3a873c) {
          case 0:
            _0x447875[_0x579990 + _0x568db5 * 4 >> 2] = _0x583673[_0x568db5];
            break;
          case 2:
            _0x5d3882[_0x579990 + _0x568db5 * 4 >> 2] = _0x583673[_0x568db5];
            break;
          case 5:
            _0x447875[_0x579990 + _0x568db5 * 4 >> 2] = Math.fround(_0x583673[_0x568db5]);
            break;
        }
      }
    }
  }
  function _0x14f41d(_0x276549, _0x5d4531, _0x890e65) {
    _0xf2995c(_0x276549, _0x5d4531, _0x890e65, 5);
  }
  function _0x5ed5c3(_0x2ec143, _0x17a1b9, _0x411680) {
    var _0x194e92 = _0xc22a58[_0x17a1b9];
    for (var _0x2fde02 = 0; _0x2fde02 < _0x17a1b9; _0x2fde02++) {
      _0x194e92[_0x2fde02] = _0x447875[_0x411680 + _0x2fde02 * 4 >> 2];
    }
    _0x2eecc9.invalidateFramebuffer(_0x2ec143, _0x194e92);
  }
  function _0x449507(_0x188ee4) {
    return _0x2eecc9.isEnabled(_0x188ee4);
  }
  function _0x51022e(_0x373c4e) {
    var _0x63ebc4 = _0x5e5447.vaos[_0x373c4e];
    if (!_0x63ebc4) {
      return 0;
    }
    return _0x2eecc9.isVertexArray(_0x63ebc4);
  }
  function _0x28df41(_0x5ac779) {
    _0x5ac779 = _0x5e5447.programs[_0x5ac779];
    _0x2eecc9.linkProgram(_0x5ac779);
    _0x5ac779.uniformLocsById = 0;
    _0x5ac779.uniformSizeAndIdsByName = {};
    [_0x5ac779.vs, _0x5ac779.fs].forEach(function (_0xb5ddfb) {
      Object.keys(_0xb5ddfb.explicitUniformLocations).forEach(function (_0x2a42e6) {
        var _0x25cf38 = _0xb5ddfb.explicitUniformLocations[_0x2a42e6];
        _0x5ac779.uniformSizeAndIdsByName[_0x2a42e6] = [1, _0x25cf38];
        _0x5ac779.uniformIdCounter = Math.max(_0x5ac779.uniformIdCounter, _0x25cf38 + 1);
      });
    });
    function _0x20c735(_0x4ecf74, _0x3efd88) {
      Object.keys(_0x3efd88).forEach(function (_0x51075b) {
        _0x4ecf74[_0x51075b] = _0x3efd88[_0x51075b];
      });
    }
    _0x5ac779.explicitUniformBindings = {};
    _0x5ac779.explicitSamplerBindings = {};
    [_0x5ac779.vs, _0x5ac779.fs].forEach(function (_0x3b208e) {
      _0x20c735(_0x5ac779.explicitUniformBindings, _0x3b208e.explicitUniformBindings);
      _0x20c735(_0x5ac779.explicitSamplerBindings, _0x3b208e.explicitSamplerBindings);
    });
    _0x5ac779.explicitProgramBindingsApplied = 0;
  }
  function _0x37b4b9(_0x1b49db, _0x15c82f, _0x7ddcbd, _0x596a7a) {
    if (_0x596a7a != 26 && _0x596a7a != 10) {
      _0x38748e("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x43254c(_0x1b49db)) {
      _0x5e5447.recordError(1280);
      _0x38748e("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x429975 = _0x25ed17(_0x7ddcbd);
    if (!_0x429975) {
      return 0;
    }
    _0x5e5447.mappedBuffers[_0x5e050c(_0x1b49db)] = {
      offset: _0x15c82f,
      length: _0x7ddcbd,
      mem: _0x429975,
      access: _0x596a7a
    };
    return _0x429975;
  }
  function _0x183092(_0x4801b3, _0x587753) {
    if (_0x4801b3 == 3317) {
      _0x5e5447.unpackAlignment = _0x587753;
    }
    _0x2eecc9.pixelStorei(_0x4801b3, _0x587753);
  }
  function _0x35f991(_0x2c73ac, _0x3d204f) {
    _0x2eecc9.polygonOffset(_0x2c73ac, _0x3d204f);
  }
  function _0x2ccc61(_0x514fde, _0x14a7f6, _0xf1351c, _0x339428) {
    _0x5e5447.recordError(1280);
  }
  function _0x375978(_0x3f1bc7, _0x2302f1, _0x2e5072) {
    _0x5e5447.recordError(1280);
  }
  function _0xa5cd58(_0x1722db) {
    _0x2eecc9.readBuffer(_0x1722db);
  }
  function _0x4c58ac(_0x197379, _0x339b06, _0x133062, _0x14cf19) {
    function _0x2c1173(_0x481e31, _0x509c27) {
      return _0x481e31 + _0x509c27 - 1 & -_0x509c27;
    }
    var _0x4baaa5 = _0x197379 * _0x133062;
    var _0xee28ca = _0x2c1173(_0x4baaa5, _0x14cf19);
    return _0x339b06 * _0xee28ca;
  }
  function _0x5a52f0(_0x4e4c9c) {
    var _0x3c11d5 = {
      5: 3,
      6: 4,
      8: 2,
      29502: 3,
      29504: 4,
      26917: 2,
      26918: 2,
      29846: 3,
      29847: 4
    };
    return _0x3c11d5[_0x4e4c9c - 6402] || 1;
  }
  function _0xf057f0(_0x520e02) {
    _0x520e02 -= 5120;
    if (_0x520e02 == 0) {
      return _0xf10f52;
    }
    if (_0x520e02 == 1) {
      return _0x5d32f0;
    }
    if (_0x520e02 == 2) {
      return _0x4ea5dd;
    }
    if (_0x520e02 == 4) {
      return _0x447875;
    }
    if (_0x520e02 == 6) {
      return _0x5d3882;
    }
    if (_0x520e02 == 5 || _0x520e02 == 28922 || _0x520e02 == 28520 || _0x520e02 == 30779 || _0x520e02 == 30782) {
      return _0x51a6ce;
    }
    return _0x5b2658;
  }
  function _0x2f4054(_0x40c1cb) {
    return 31 - Math.clz32(_0x40c1cb.BYTES_PER_ELEMENT);
  }
  function _0x4cb480(_0x5bd63b, _0x31d4cd, _0x21d445, _0x584172, _0x438ede, _0x32f2f1) {
    var _0x25bb0b = _0xf057f0(_0x5bd63b);
    var _0x2cdd5d = _0x2f4054(_0x25bb0b);
    var _0x162de3 = 1 << _0x2cdd5d;
    var _0x5ce0e0 = _0x5a52f0(_0x31d4cd) * _0x162de3;
    var _0x4f4ce5 = _0x4c58ac(_0x21d445, _0x584172, _0x5ce0e0, _0x5e5447.unpackAlignment);
    return _0x25bb0b.subarray(_0x438ede >> _0x2cdd5d, _0x438ede + _0x4f4ce5 >> _0x2cdd5d);
  }
  function _0x52438f(_0x34abac, _0x39e9db, _0x3dd3f6, _0x237365, _0x54c2da, _0x165c56, _0x26e42c) {
    if (_0x5e5447.currentContext.version >= 2) {
      if (_0x2eecc9.currentPixelPackBufferBinding) {
        _0x2eecc9.readPixels(_0x34abac, _0x39e9db, _0x3dd3f6, _0x237365, _0x54c2da, _0x165c56, _0x26e42c);
      } else {
        var _0x266a5e = _0xf057f0(_0x165c56);
        _0x2eecc9.readPixels(_0x34abac, _0x39e9db, _0x3dd3f6, _0x237365, _0x54c2da, _0x165c56, _0x266a5e, _0x26e42c >> _0x2f4054(_0x266a5e));
      }
      return;
    }
    var _0x309f84 = _0x4cb480(_0x165c56, _0x54c2da, _0x3dd3f6, _0x237365, _0x26e42c, _0x54c2da);
    if (!_0x309f84) {
      _0x5e5447.recordError(1280);
      return;
    }
    _0x2eecc9.readPixels(_0x34abac, _0x39e9db, _0x3dd3f6, _0x237365, _0x54c2da, _0x165c56, _0x309f84);
  }
  function _0x334192(_0x147e09, _0xb50c30, _0x12dcc3, _0x319ee9) {
    _0x2eecc9.renderbufferStorage(_0x147e09, _0xb50c30, _0x12dcc3, _0x319ee9);
  }
  function _0x55c7b1(_0x48fc51, _0x192ed6, _0x30eedd, _0x751c65, _0x3b602f) {
    _0x2eecc9.renderbufferStorageMultisample(_0x48fc51, _0x192ed6, _0x30eedd, _0x751c65, _0x3b602f);
  }
  function _0x3ebe2d(_0x32f8c9, _0x222b7c, _0x3d54fc) {
    _0x2eecc9.samplerParameteri(_0x5e5447.samplers[_0x32f8c9], _0x222b7c, _0x3d54fc);
  }
  function _0x2430de(_0x54bfdf, _0x37f08d, _0xd79d1c, _0x13aa05) {
    _0x2eecc9.scissor(_0x54bfdf, _0x37f08d, _0xd79d1c, _0x13aa05);
  }
  function _0x4835a9(_0x1bde34, _0x2eb5df, _0x251014 = "(", _0x84fcbd = ")") {
    var _0x5aabe3 = 0;
    for (; _0x2eb5df < _0x1bde34.length; ++_0x2eb5df) {
      if (_0x1bde34[_0x2eb5df] == _0x251014) {
        ++_0x5aabe3;
      }
      if (_0x1bde34[_0x2eb5df] == _0x84fcbd && --_0x5aabe3 == 0) {
        return _0x2eb5df;
      }
    }
  }
  function _0x49a135(_0x1769b2) {
    var _0x5608c1 = 0;
    var _0x1ed35b = _0x1769b2.length;
    var _0x2be94b = "";
    var _0x1efcc4 = [1];
    var _0x320062 = {
      defined: function (_0x3797ea) {
        if (_0x320062[_0x3797ea[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x32dc23(_0x55b0ac, _0x300f24) {
      return !(_0x55b0ac.charCodeAt(_0x300f24) > 32);
    }
    function _0x510223(_0x51aef6, _0x20e185) {
      while (!_0x32dc23(_0x51aef6, _0x20e185)) {
        ++_0x20e185;
      }
      return _0x20e185;
    }
    function _0x26ac69(_0x3bfc8c, _0x46f4ae) {
      var _0x32cf10 = _0x3bfc8c.charCodeAt(_0x46f4ae);
      if (_0x32cf10 > 32) {
        if (_0x32cf10 < 48) {
          return 1;
        }
        if (_0x32cf10 < 58) {
          return 2;
        }
        if (_0x32cf10 < 65) {
          return 1;
        }
        if (_0x32cf10 < 91 || _0x32cf10 == 95) {
          return 3;
        }
        if (_0x32cf10 < 97) {
          return 1;
        }
        if (_0x32cf10 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x32cf10 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x3fc42f(_0xd0d2f6, _0x3b9116) {
      var _0x19ddef = [];
      var _0x579b75 = _0xd0d2f6.length;
      for (var _0x53b546 = 0; _0x53b546 <= _0x579b75; ++_0x53b546) {
        var _0x1b874f = _0x26ac69(_0xd0d2f6, _0x53b546);
        if (_0x1b874f == 2 || _0x1b874f == 3) {
          for (var _0x4ec81b = _0x53b546 + 1; _0x4ec81b <= _0x579b75; ++_0x4ec81b) {
            var _0x52e344 = _0x26ac69(_0xd0d2f6, _0x4ec81b);
            if (_0x52e344 != _0x1b874f && (_0x52e344 != 2 || _0x1b874f != 3)) {
              _0x19ddef.push(_0xd0d2f6.substring(_0x53b546, _0x4ec81b));
              _0x53b546 = _0x4ec81b - 1;
              break;
            }
          }
        } else if (_0x1b874f == 1) {
          var _0x118e6c = _0xd0d2f6.substr(_0x53b546, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x118e6c)) {
            _0x19ddef.push(_0x118e6c);
            ++_0x53b546;
          } else {
            _0x19ddef.push(_0xd0d2f6[_0x53b546]);
          }
        }
      }
      return _0x19ddef;
    }
    function _0x30f933(_0x457dfd, _0xe3db0a, _0x22a8c6 = _0x457dfd.length) {
      var _0x4b0775 = _0x457dfd.length;
      var _0x3e3d29 = "";
      for (var _0x135182 = _0xe3db0a; _0x135182 < _0x22a8c6; ++_0x135182) {
        var _0x258412 = _0x26ac69(_0x457dfd, _0x135182);
        if (_0x258412 == 3) {
          for (var _0x153fef = _0x135182 + 1; _0x153fef <= _0x22a8c6; ++_0x153fef) {
            var _0x23f408 = _0x26ac69(_0x457dfd, _0x153fef);
            if (_0x23f408 != 2 && _0x23f408 != 3) {
              var _0x425be5 = _0x457dfd.substring(_0x135182, _0x153fef);
              var _0x23867f = _0x320062[_0x425be5];
              if (_0x23867f) {
                var _0x5963de = _0x457dfd.substring(_0xe3db0a, _0x135182);
                if (_0x23867f.length && _0x457dfd[_0x153fef] == "(") {
                  var _0x2c5cb3 = _0x4835a9(_0x457dfd, _0x153fef);
                  _0x5963de += _0x23867f(_0x457dfd.substring(_0x153fef + 1, _0x2c5cb3).split(",")) + _0x457dfd.substring(_0x2c5cb3 + 1, _0x22a8c6);
                } else {
                  _0x5963de += _0x23867f() + _0x457dfd.substring(_0x153fef, _0x22a8c6);
                }
                return _0x30f933(_0x5963de, 0);
              } else {
                _0x3e3d29 += _0x425be5;
                _0x135182 = _0x153fef - 1;
                break;
              }
            }
          }
        } else {
          _0x3e3d29 += _0x457dfd[_0x135182];
        }
      }
      return _0x3e3d29;
    }
    function _0xea02b8(_0x4e775f) {
      while (_0x4e775f.length > 1 || typeof _0x4e775f[0] != "function") {
        _0x4e775f = function (_0x5caf97) {
          var _0x41253f;
          var _0x5d6f45;
          var _0xf8fb3e;
          var _0x20f62c = -2;
          for (_0x5d6f45 = 0; _0x5d6f45 < _0x5caf97.length; ++_0x5d6f45) {
            if ((_0xf8fb3e = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x5caf97[_0x5d6f45])) > _0x20f62c) {
              _0x41253f = _0x5d6f45;
              _0x20f62c = _0xf8fb3e;
            }
          }
          if (_0x20f62c == 13) {
            var _0x5d6f45 = _0x4835a9(_0x5caf97, _0x41253f);
            if (_0x5d6f45) {
              _0x5caf97.splice(_0x41253f, _0x5d6f45 + 1 - _0x41253f, _0xea02b8(_0x5caf97.slice(_0x41253f + 1, _0x5d6f45)));
              return _0x5caf97;
            }
          }
          if (_0x20f62c == 4) {
            _0x41253f = _0x5caf97.lastIndexOf("!");
            var _0x653680 = _0xea02b8(_0x5caf97.slice(_0x41253f + 1, _0x41253f + 2));
            _0x5caf97.splice(_0x41253f, 2, function () {
              return !_0x653680();
            });
            return _0x5caf97;
          }
          if (_0x20f62c >= 0) {
            var _0x378d02 = _0xea02b8(_0x5caf97.slice(0, _0x41253f));
            var _0x1cc1bb = _0xea02b8(_0x5caf97.slice(_0x41253f + 1));
            switch (_0x5caf97[_0x41253f]) {
              case "&&":
                return [function () {
                  return _0x378d02() && _0x1cc1bb();
                }];
              case "||":
                return [function () {
                  return _0x378d02() || _0x1cc1bb();
                }];
              case "==":
                return [function () {
                  return _0x378d02() == _0x1cc1bb();
                }];
              case "!=":
                return [function () {
                  return _0x378d02() != _0x1cc1bb();
                }];
              case "<":
                return [function () {
                  return _0x378d02() < _0x1cc1bb();
                }];
              case "<=":
                return [function () {
                  return _0x378d02() <= _0x1cc1bb();
                }];
              case ">":
                return [function () {
                  return _0x378d02() > _0x1cc1bb();
                }];
              case ">=":
                return [function () {
                  return _0x378d02() >= _0x1cc1bb();
                }];
              case "+":
                return [function () {
                  return _0x378d02() + _0x1cc1bb();
                }];
              case "-":
                return [function () {
                  return _0x378d02() - _0x1cc1bb();
                }];
              case "*":
                return [function () {
                  return _0x378d02() * _0x1cc1bb();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x378d02() / _0x1cc1bb());
                }];
            }
          }
          var _0x258f33 = _0x35de35(_0x5caf97[_0x41253f]);
          return [function () {
            return _0x258f33;
          }];
        }(_0x4e775f);
      }
      return _0x4e775f[0];
    }
    for (; _0x5608c1 < _0x1ed35b; ++_0x5608c1) {
      var _0xb51ccf = _0x5608c1;
      _0x5608c1 = _0x1769b2.indexOf("\n", _0x5608c1);
      if (_0x5608c1 < 0) {
        _0x5608c1 = _0x1ed35b;
      }
      for (var _0x437c10 = _0xb51ccf; _0x437c10 < _0x5608c1 && _0x32dc23(_0x1769b2, _0x437c10); ++_0x437c10);
      var _0x564f49 = _0x1efcc4[_0x1efcc4.length - 1];
      if (_0x1769b2[_0x437c10] != "#") {
        if (_0x564f49) {
          _0x2be94b += _0x30f933(_0x1769b2, _0xb51ccf, _0x5608c1) + "\n";
        }
        continue;
      }
      var _0x416926 = _0x510223(_0x1769b2, _0x437c10);
      var _0x30632e = _0x1769b2.substring(_0x437c10 + 1, _0x416926);
      var _0x494b6d = _0x1769b2.substring(_0x416926, _0x5608c1).trim();
      switch (_0x30632e) {
        case "if":
          var _0x4a7b3a = _0x3fc42f(_0x30f933(_0x494b6d, 0));
          var _0x28aa30 = _0xea02b8(_0x4a7b3a);
          var _0x2ebe09 = _0x28aa30();
          _0x1efcc4.push(!!_0x2ebe09 * _0x1efcc4[_0x1efcc4.length - 1]);
          break;
        case "ifdef":
          _0x1efcc4.push(!!_0x320062[_0x494b6d] * _0x1efcc4[_0x1efcc4.length - 1]);
          break;
        case "ifndef":
          _0x1efcc4.push(!_0x320062[_0x494b6d] * _0x1efcc4[_0x1efcc4.length - 1]);
          break;
        case "else":
          _0x1efcc4[_0x1efcc4.length - 1] = 1 - _0x1efcc4[_0x1efcc4.length - 1];
          break;
        case "endif":
          _0x1efcc4.pop();
          break;
        case "define":
          if (_0x564f49) {
            var _0x48919f = _0x494b6d.indexOf("(");
            var _0x5dac16 = _0x510223(_0x494b6d, 0);
            if (_0x5dac16 < _0x48919f) {
              _0x48919f = 0;
            }
            if (_0x48919f > 0) {
              var _0x1fdcb8 = _0x494b6d.indexOf(")", _0x48919f);
              let _0xd78616 = _0x494b6d.substring(_0x48919f + 1, _0x1fdcb8).split(",").map(_0x16cd6f => _0x16cd6f.trim());
              let _0x1e0604 = _0x3fc42f(_0x494b6d.substring(_0x1fdcb8 + 1).trim());
              _0x320062[_0x494b6d.substring(0, _0x48919f)] = function (_0x263249) {
                var _0x628349 = "";
                _0x1e0604.forEach(_0x5f4a2e => {
                  var _0x5ea9b2 = _0xd78616.indexOf(_0x5f4a2e);
                  _0x628349 += _0x5ea9b2 >= 0 ? _0x263249[_0x5ea9b2] : _0x5f4a2e;
                });
                return _0x628349;
              };
            } else {
              let _0x5c798a = _0x30f933(_0x494b6d.substring(_0x5dac16 + 1).trim(), 0);
              _0x320062[_0x494b6d.substring(0, _0x5dac16)] = function () {
                return _0x5c798a;
              };
            }
          }
          break;
        case "undef":
          if (_0x564f49) {
            delete _0x320062[_0x494b6d];
          }
          break;
        default:
          if (_0x30632e != "version" && _0x30632e != "pragma" && _0x30632e != "extension") {}
          _0x2be94b += _0x30f933(_0x1769b2, _0xb51ccf, _0x5608c1) + "\n";
      }
    }
    return _0x2be94b;
  }
  function _0x18e303(_0x590517) {
    var _0x44a70f = 0;
    var _0x1df568 = "";
    var _0x382337;
    var _0x4bf27b;
    var _0x4fa45c = _0x590517.length;
    for (; _0x44a70f < _0x4fa45c; ++_0x44a70f) {
      _0x382337 = _0x590517[_0x44a70f];
      if (_0x382337 == "/") {
        _0x4bf27b = _0x590517[_0x44a70f + 1];
        if (_0x4bf27b == "/") {
          while (_0x44a70f < _0x4fa45c && _0x590517[_0x44a70f + 1] != "\n") {
            ++_0x44a70f;
          }
        } else if (_0x4bf27b == "*") {
          while (_0x44a70f < _0x4fa45c && (_0x590517[_0x44a70f - 1] != "*" || _0x590517[_0x44a70f] != "/")) {
            ++_0x44a70f;
          }
        } else {
          _0x1df568 += _0x382337;
        }
      } else {
        _0x1df568 += _0x382337;
      }
    }
    return _0x1df568;
  }
  function _0x3a4a64(_0x2a7e52, _0x11b361, _0x2740a1, _0x421007) {
    var _0x293441 = _0x5e5447.getSource(_0x2a7e52, _0x11b361, _0x2740a1, _0x421007);
    _0x293441 = _0x49a135(_0x18e303(_0x293441));
    var _0xeabc04 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x3c2edb = {};
    var _0x5c767e;
    while (_0x5c767e = _0xeabc04.exec(_0x293441)) {
      _0x3c2edb[_0x5c767e[5]] = _0x35de35(_0x5c767e[1]);
      if (!(_0x3c2edb[_0x5c767e[5]] >= 0) || !(_0x3c2edb[_0x5c767e[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x3c2edb[_0x5c767e[5]] + "\"! (" + _0x5c767e[0] + ")");
        _0x5e5447.recordError(1281);
        return;
      }
    }
    _0x293441 = _0x293441.replace(_0xeabc04, "$2");
    _0x5e5447.shaders[_0x2a7e52].explicitUniformLocations = _0x3c2edb;
    var _0x4fce48 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0xbfb5de = {};
    var _0x54ac31 = {};
    var _0x2e34e9;
    while (_0x2e34e9 = _0x4fce48.exec(_0x293441)) {
      var _0x7acd75 = 1;
      for (var _0x3e220a = _0x2e34e9.index; _0x3e220a < _0x293441.length && _0x293441[_0x3e220a] != ";"; ++_0x3e220a) {
        if (_0x293441[_0x3e220a] == "[") {
          _0x7acd75 = _0x35de35(_0x293441.slice(_0x3e220a + 1));
          break;
        }
        if (_0x293441[_0x3e220a] == "{") {
          _0x3e220a = _0x4835a9(_0x293441, _0x3e220a, "{", "}") - 1;
        }
      }
      var _0x17ed5c = _0x35de35(_0x2e34e9[1]);
      var _0x43b512 = 34930;
      if (_0x2e34e9[3] && _0x2e34e9[2].indexOf("sampler") != -1) {
        _0xbfb5de[_0x2e34e9[3]] = [_0x17ed5c, _0x7acd75];
      } else {
        _0x43b512 = 35374;
        _0x54ac31[_0x2e34e9[2]] = [_0x17ed5c, _0x7acd75];
      }
      var _0x313e9 = _0x2eecc9.getParameter(_0x43b512);
      if (!(_0x17ed5c >= 0) || !(_0x17ed5c + _0x7acd75 <= _0x313e9)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x17ed5c + "\"! (" + _0x2e34e9[0] + "). Valid range is [0, " + _0x313e9 + "-1]");
        _0x5e5447.recordError(1281);
        return;
      }
    }
    _0x293441 = _0x293441.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x293441 = _0x293441.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x293441 = _0x293441.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x5e5447.shaders[_0x2a7e52].explicitSamplerBindings = _0xbfb5de;
    _0x5e5447.shaders[_0x2a7e52].explicitUniformBindings = _0x54ac31;
    _0x2eecc9.shaderSource(_0x5e5447.shaders[_0x2a7e52], _0x293441);
  }
  function _0x4e04da(_0x1b6bb3, _0x369788, _0x3e5883, _0x45c620) {
    _0x2eecc9.stencilFuncSeparate(_0x1b6bb3, _0x369788, _0x3e5883, _0x45c620);
  }
  function _0x4f121c(_0xdaac7d) {
    _0x2eecc9.stencilMask(_0xdaac7d);
  }
  function _0xca87ee(_0x3f6977, _0x190f2e, _0x45ccf3, _0xf90b01) {
    _0x2eecc9.stencilOpSeparate(_0x3f6977, _0x190f2e, _0x45ccf3, _0xf90b01);
  }
  function _0x2e1a8e(_0x4e33f4, _0x22fb8d, _0x24fd96, _0x2b7fcc, _0x17455d, _0x5f45e4, _0x15226f, _0x16a034, _0x52ab44) {
    if (_0x5e5447.currentContext.version >= 2) {
      if (_0x2eecc9.currentPixelUnpackBufferBinding) {
        _0x2eecc9.texImage2D(_0x4e33f4, _0x22fb8d, _0x24fd96, _0x2b7fcc, _0x17455d, _0x5f45e4, _0x15226f, _0x16a034, _0x52ab44);
      } else if (_0x52ab44) {
        var _0xf90cd5 = _0xf057f0(_0x16a034);
        _0x2eecc9.texImage2D(_0x4e33f4, _0x22fb8d, _0x24fd96, _0x2b7fcc, _0x17455d, _0x5f45e4, _0x15226f, _0x16a034, _0xf90cd5, _0x52ab44 >> _0x2f4054(_0xf90cd5));
      } else {
        _0x2eecc9.texImage2D(_0x4e33f4, _0x22fb8d, _0x24fd96, _0x2b7fcc, _0x17455d, _0x5f45e4, _0x15226f, _0x16a034, null);
      }
      return;
    }
    _0x2eecc9.texImage2D(_0x4e33f4, _0x22fb8d, _0x24fd96, _0x2b7fcc, _0x17455d, _0x5f45e4, _0x15226f, _0x16a034, _0x52ab44 ? _0x4cb480(_0x16a034, _0x15226f, _0x2b7fcc, _0x17455d, _0x52ab44, _0x24fd96) : null);
  }
  function _0x416ddc(_0x1e5f5f, _0x370d78, _0xd9ddd6, _0x2a46cf, _0x58069c, _0x317576, _0x11a52b, _0x5f1f6c, _0x1a7d16, _0xdb511a) {
    if (_0x2eecc9.currentPixelUnpackBufferBinding) {
      _0x2eecc9.texImage3D(_0x1e5f5f, _0x370d78, _0xd9ddd6, _0x2a46cf, _0x58069c, _0x317576, _0x11a52b, _0x5f1f6c, _0x1a7d16, _0xdb511a);
    } else if (_0xdb511a) {
      var _0x4f5a6b = _0xf057f0(_0x1a7d16);
      _0x2eecc9.texImage3D(_0x1e5f5f, _0x370d78, _0xd9ddd6, _0x2a46cf, _0x58069c, _0x317576, _0x11a52b, _0x5f1f6c, _0x1a7d16, _0x4f5a6b, _0xdb511a >> _0x2f4054(_0x4f5a6b));
    } else {
      _0x2eecc9.texImage3D(_0x1e5f5f, _0x370d78, _0xd9ddd6, _0x2a46cf, _0x58069c, _0x317576, _0x11a52b, _0x5f1f6c, _0x1a7d16, null);
    }
  }
  function _0x4a0f11(_0x52afd9, _0x49b9b3, _0x173f21) {
    _0x2eecc9.texParameterf(_0x52afd9, _0x49b9b3, _0x173f21);
  }
  function _0x133f4d(_0x4bd2f1, _0x57c573, _0x4d521f) {
    _0x2eecc9.texParameteri(_0x4bd2f1, _0x57c573, _0x4d521f);
  }
  function _0x283a7f(_0x463283, _0x4b32db, _0x1f89fa) {
    var _0x27a4e9 = _0x447875[_0x1f89fa >> 2];
    _0x2eecc9.texParameteri(_0x463283, _0x4b32db, _0x27a4e9);
  }
  function _0x21800e(_0x4d5c42, _0x283b22, _0x19ca92, _0x4cdc98, _0x330c84) {
    _0x2eecc9.texStorage2D(_0x4d5c42, _0x283b22, _0x19ca92, _0x4cdc98, _0x330c84);
  }
  function _0x3aa2bd(_0xa89b1, _0x52544a, _0x5e0fca, _0x46937d, _0x1840b7, _0x208e4a) {
    _0x2eecc9.texStorage3D(_0xa89b1, _0x52544a, _0x5e0fca, _0x46937d, _0x1840b7, _0x208e4a);
  }
  function _0x3b3967(_0x383127, _0x2a168b, _0x587b68, _0x2b89e3, _0x45915f, _0x2d3363, _0x1af082, _0x2ca6d8, _0x3293b0) {
    if (_0x5e5447.currentContext.version >= 2) {
      if (_0x2eecc9.currentPixelUnpackBufferBinding) {
        _0x2eecc9.texSubImage2D(_0x383127, _0x2a168b, _0x587b68, _0x2b89e3, _0x45915f, _0x2d3363, _0x1af082, _0x2ca6d8, _0x3293b0);
      } else if (_0x3293b0) {
        var _0x18754c = _0xf057f0(_0x2ca6d8);
        _0x2eecc9.texSubImage2D(_0x383127, _0x2a168b, _0x587b68, _0x2b89e3, _0x45915f, _0x2d3363, _0x1af082, _0x2ca6d8, _0x18754c, _0x3293b0 >> _0x2f4054(_0x18754c));
      } else {
        _0x2eecc9.texSubImage2D(_0x383127, _0x2a168b, _0x587b68, _0x2b89e3, _0x45915f, _0x2d3363, _0x1af082, _0x2ca6d8, null);
      }
      return;
    }
    var _0x86503a = null;
    if (_0x3293b0) {
      _0x86503a = _0x4cb480(_0x2ca6d8, _0x1af082, _0x45915f, _0x2d3363, _0x3293b0, 0);
    }
    _0x2eecc9.texSubImage2D(_0x383127, _0x2a168b, _0x587b68, _0x2b89e3, _0x45915f, _0x2d3363, _0x1af082, _0x2ca6d8, _0x86503a);
  }
  function _0xa2029e(_0x530faa, _0xe4bdb0, _0x32a822, _0x3ceafd, _0x32c83c, _0x3b382f, _0x54abf0, _0x35b692, _0x49d47e, _0x179e48, _0x22eb8b) {
    if (_0x2eecc9.currentPixelUnpackBufferBinding) {
      _0x2eecc9.texSubImage3D(_0x530faa, _0xe4bdb0, _0x32a822, _0x3ceafd, _0x32c83c, _0x3b382f, _0x54abf0, _0x35b692, _0x49d47e, _0x179e48, _0x22eb8b);
    } else if (_0x22eb8b) {
      var _0x3dd3eb = _0xf057f0(_0x179e48);
      _0x2eecc9.texSubImage3D(_0x530faa, _0xe4bdb0, _0x32a822, _0x3ceafd, _0x32c83c, _0x3b382f, _0x54abf0, _0x35b692, _0x49d47e, _0x179e48, _0x3dd3eb, _0x22eb8b >> _0x2f4054(_0x3dd3eb));
    } else {
      _0x2eecc9.texSubImage3D(_0x530faa, _0xe4bdb0, _0x32a822, _0x3ceafd, _0x32c83c, _0x3b382f, _0x54abf0, _0x35b692, _0x49d47e, _0x179e48, null);
    }
  }
  function _0x1cc340(_0x36a873, _0x1e0a9b, _0x4878f9, _0x49b49) {
    _0x36a873 = _0x5e5447.programs[_0x36a873];
    var _0x1726b8 = [];
    for (var _0x4e614a = 0; _0x4e614a < _0x1e0a9b; _0x4e614a++) {
      _0x1726b8.push(_0x242db5(_0x447875[_0x4878f9 + _0x4e614a * 4 >> 2]));
    }
    _0x2eecc9.transformFeedbackVaryings(_0x36a873, _0x1726b8, _0x49b49);
  }
  var _0x41924f = [];
  function _0x1c6a83(_0x56f6f9, _0x3a3e18, _0x4cf3bf) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform1fv(_0x99e313(_0x56f6f9), _0x5d3882, _0x4cf3bf >> 2, _0x3a3e18);
      return;
    }
    if (_0x3a3e18 <= 288) {
      var _0x14a8da = _0x41924f[_0x3a3e18 - 1];
      for (var _0x29b8c9 = 0; _0x29b8c9 < _0x3a3e18; ++_0x29b8c9) {
        _0x14a8da[_0x29b8c9] = _0x5d3882[_0x4cf3bf + _0x29b8c9 * 4 >> 2];
      }
    } else {
      var _0x14a8da = _0x5d3882.subarray(_0x4cf3bf >> 2, _0x4cf3bf + _0x3a3e18 * 4 >> 2);
    }
    _0x2eecc9.uniform1fv(_0x99e313(_0x56f6f9), _0x14a8da);
  }
  function _0x1def22(_0x28f9f6, _0x1b6e31) {
    _0x2eecc9.uniform1i(_0x99e313(_0x28f9f6), _0x1b6e31);
  }
  var _0x1566ec = [];
  function _0x2b3dc8(_0x1f5f43, _0x119b3d, _0x4f1d1b) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform1iv(_0x99e313(_0x1f5f43), _0x447875, _0x4f1d1b >> 2, _0x119b3d);
      return;
    }
    if (_0x119b3d <= 288) {
      var _0x304c47 = _0x1566ec[_0x119b3d - 1];
      for (var _0x70e6bb = 0; _0x70e6bb < _0x119b3d; ++_0x70e6bb) {
        _0x304c47[_0x70e6bb] = _0x447875[_0x4f1d1b + _0x70e6bb * 4 >> 2];
      }
    } else {
      var _0x304c47 = _0x447875.subarray(_0x4f1d1b >> 2, _0x4f1d1b + _0x119b3d * 4 >> 2);
    }
    _0x2eecc9.uniform1iv(_0x99e313(_0x1f5f43), _0x304c47);
  }
  function _0x55ecc7(_0xe8e59c, _0x22365f, _0x24c26d) {
    _0x2eecc9.uniform1uiv(_0x99e313(_0xe8e59c), _0x51a6ce, _0x24c26d >> 2, _0x22365f);
  }
  function _0x192833(_0x5e0bf3, _0x18d34c, _0x290e73) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform2fv(_0x99e313(_0x5e0bf3), _0x5d3882, _0x290e73 >> 2, _0x18d34c * 2);
      return;
    }
    if (_0x18d34c <= 144) {
      var _0x20d83d = _0x41924f[_0x18d34c * 2 - 1];
      for (var _0xa63835 = 0; _0xa63835 < _0x18d34c * 2; _0xa63835 += 2) {
        _0x20d83d[_0xa63835] = _0x5d3882[_0x290e73 + _0xa63835 * 4 >> 2];
        _0x20d83d[_0xa63835 + 1] = _0x5d3882[_0x290e73 + (_0xa63835 * 4 + 4) >> 2];
      }
    } else {
      var _0x20d83d = _0x5d3882.subarray(_0x290e73 >> 2, _0x290e73 + _0x18d34c * 8 >> 2);
    }
    _0x2eecc9.uniform2fv(_0x99e313(_0x5e0bf3), _0x20d83d);
  }
  function _0x2ad9cb(_0x1245df, _0x55bbb9, _0x3f0507) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform2iv(_0x99e313(_0x1245df), _0x447875, _0x3f0507 >> 2, _0x55bbb9 * 2);
      return;
    }
    if (_0x55bbb9 <= 144) {
      var _0x14291e = _0x1566ec[_0x55bbb9 * 2 - 1];
      for (var _0x52b9e6 = 0; _0x52b9e6 < _0x55bbb9 * 2; _0x52b9e6 += 2) {
        _0x14291e[_0x52b9e6] = _0x447875[_0x3f0507 + _0x52b9e6 * 4 >> 2];
        _0x14291e[_0x52b9e6 + 1] = _0x447875[_0x3f0507 + (_0x52b9e6 * 4 + 4) >> 2];
      }
    } else {
      var _0x14291e = _0x447875.subarray(_0x3f0507 >> 2, _0x3f0507 + _0x55bbb9 * 8 >> 2);
    }
    _0x2eecc9.uniform2iv(_0x99e313(_0x1245df), _0x14291e);
  }
  function _0xd4b102(_0x1ea0c3, _0x543755, _0x156758) {
    _0x2eecc9.uniform2uiv(_0x99e313(_0x1ea0c3), _0x51a6ce, _0x156758 >> 2, _0x543755 * 2);
  }
  function _0x32fd7f(_0xa4e08f, _0x3798b3, _0x4691a7) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform3fv(_0x99e313(_0xa4e08f), _0x5d3882, _0x4691a7 >> 2, _0x3798b3 * 3);
      return;
    }
    if (_0x3798b3 <= 96) {
      var _0x143a5c = _0x41924f[_0x3798b3 * 3 - 1];
      for (var _0x313652 = 0; _0x313652 < _0x3798b3 * 3; _0x313652 += 3) {
        _0x143a5c[_0x313652] = _0x5d3882[_0x4691a7 + _0x313652 * 4 >> 2];
        _0x143a5c[_0x313652 + 1] = _0x5d3882[_0x4691a7 + (_0x313652 * 4 + 4) >> 2];
        _0x143a5c[_0x313652 + 2] = _0x5d3882[_0x4691a7 + (_0x313652 * 4 + 8) >> 2];
      }
    } else {
      var _0x143a5c = _0x5d3882.subarray(_0x4691a7 >> 2, _0x4691a7 + _0x3798b3 * 12 >> 2);
    }
    _0x2eecc9.uniform3fv(_0x99e313(_0xa4e08f), _0x143a5c);
  }
  function _0x27b99b(_0x4d97f9, _0x54977, _0x535642) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform3iv(_0x99e313(_0x4d97f9), _0x447875, _0x535642 >> 2, _0x54977 * 3);
      return;
    }
    if (_0x54977 <= 96) {
      var _0x1a2748 = _0x1566ec[_0x54977 * 3 - 1];
      for (var _0x31638c = 0; _0x31638c < _0x54977 * 3; _0x31638c += 3) {
        _0x1a2748[_0x31638c] = _0x447875[_0x535642 + _0x31638c * 4 >> 2];
        _0x1a2748[_0x31638c + 1] = _0x447875[_0x535642 + (_0x31638c * 4 + 4) >> 2];
        _0x1a2748[_0x31638c + 2] = _0x447875[_0x535642 + (_0x31638c * 4 + 8) >> 2];
      }
    } else {
      var _0x1a2748 = _0x447875.subarray(_0x535642 >> 2, _0x535642 + _0x54977 * 12 >> 2);
    }
    _0x2eecc9.uniform3iv(_0x99e313(_0x4d97f9), _0x1a2748);
  }
  function _0x139b71(_0x5f1b3a, _0x1faf6a, _0x4da12e) {
    _0x2eecc9.uniform3uiv(_0x99e313(_0x5f1b3a), _0x51a6ce, _0x4da12e >> 2, _0x1faf6a * 3);
  }
  function _0x2815db(_0x17df24, _0xc3144b, _0x1aa81c) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform4fv(_0x99e313(_0x17df24), _0x5d3882, _0x1aa81c >> 2, _0xc3144b * 4);
      return;
    }
    if (_0xc3144b <= 72) {
      var _0x4739b2 = _0x41924f[_0xc3144b * 4 - 1];
      var _0x4e4163 = _0x5d3882;
      _0x1aa81c >>= 2;
      for (var _0x22c44e = 0; _0x22c44e < _0xc3144b * 4; _0x22c44e += 4) {
        var _0xf81715 = _0x1aa81c + _0x22c44e;
        _0x4739b2[_0x22c44e] = _0x4e4163[_0xf81715];
        _0x4739b2[_0x22c44e + 1] = _0x4e4163[_0xf81715 + 1];
        _0x4739b2[_0x22c44e + 2] = _0x4e4163[_0xf81715 + 2];
        _0x4739b2[_0x22c44e + 3] = _0x4e4163[_0xf81715 + 3];
      }
    } else {
      var _0x4739b2 = _0x5d3882.subarray(_0x1aa81c >> 2, _0x1aa81c + _0xc3144b * 16 >> 2);
    }
    _0x2eecc9.uniform4fv(_0x99e313(_0x17df24), _0x4739b2);
  }
  function _0x26bcd1(_0x5d48de, _0xf23d51, _0xd4a151) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniform4iv(_0x99e313(_0x5d48de), _0x447875, _0xd4a151 >> 2, _0xf23d51 * 4);
      return;
    }
    if (_0xf23d51 <= 72) {
      var _0x72583d = _0x1566ec[_0xf23d51 * 4 - 1];
      for (var _0x3380b5 = 0; _0x3380b5 < _0xf23d51 * 4; _0x3380b5 += 4) {
        _0x72583d[_0x3380b5] = _0x447875[_0xd4a151 + _0x3380b5 * 4 >> 2];
        _0x72583d[_0x3380b5 + 1] = _0x447875[_0xd4a151 + (_0x3380b5 * 4 + 4) >> 2];
        _0x72583d[_0x3380b5 + 2] = _0x447875[_0xd4a151 + (_0x3380b5 * 4 + 8) >> 2];
        _0x72583d[_0x3380b5 + 3] = _0x447875[_0xd4a151 + (_0x3380b5 * 4 + 12) >> 2];
      }
    } else {
      var _0x72583d = _0x447875.subarray(_0xd4a151 >> 2, _0xd4a151 + _0xf23d51 * 16 >> 2);
    }
    _0x2eecc9.uniform4iv(_0x99e313(_0x5d48de), _0x72583d);
  }
  function _0x1bd303(_0x4749da, _0x29fe84, _0x5a43ef) {
    _0x2eecc9.uniform4uiv(_0x99e313(_0x4749da), _0x51a6ce, _0x5a43ef >> 2, _0x29fe84 * 4);
  }
  function _0x1e277f(_0x454b42, _0x25718c, _0x56acad) {
    _0x454b42 = _0x5e5447.programs[_0x454b42];
    _0x2eecc9.uniformBlockBinding(_0x454b42, _0x25718c, _0x56acad);
  }
  function _0x2bccdd(_0x25fb7a, _0x5e3409, _0x4bd9a7, _0x5511be) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniformMatrix3fv(_0x99e313(_0x25fb7a), !!_0x4bd9a7, _0x5d3882, _0x5511be >> 2, _0x5e3409 * 9);
      return;
    }
    if (_0x5e3409 <= 32) {
      var _0x46edfd = _0x41924f[_0x5e3409 * 9 - 1];
      for (var _0x5185d5 = 0; _0x5185d5 < _0x5e3409 * 9; _0x5185d5 += 9) {
        _0x46edfd[_0x5185d5] = _0x5d3882[_0x5511be + _0x5185d5 * 4 >> 2];
        _0x46edfd[_0x5185d5 + 1] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 4) >> 2];
        _0x46edfd[_0x5185d5 + 2] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 8) >> 2];
        _0x46edfd[_0x5185d5 + 3] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 12) >> 2];
        _0x46edfd[_0x5185d5 + 4] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 16) >> 2];
        _0x46edfd[_0x5185d5 + 5] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 20) >> 2];
        _0x46edfd[_0x5185d5 + 6] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 24) >> 2];
        _0x46edfd[_0x5185d5 + 7] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 28) >> 2];
        _0x46edfd[_0x5185d5 + 8] = _0x5d3882[_0x5511be + (_0x5185d5 * 4 + 32) >> 2];
      }
    } else {
      var _0x46edfd = _0x5d3882.subarray(_0x5511be >> 2, _0x5511be + _0x5e3409 * 36 >> 2);
    }
    _0x2eecc9.uniformMatrix3fv(_0x99e313(_0x25fb7a), !!_0x4bd9a7, _0x46edfd);
  }
  function _0x58ee8a(_0x5304aa, _0x3bad8c, _0x35629d, _0x5dd4a4) {
    if (_0x5e5447.currentContext.version >= 2) {
      _0x2eecc9.uniformMatrix4fv(_0x99e313(_0x5304aa), !!_0x35629d, _0x5d3882, _0x5dd4a4 >> 2, _0x3bad8c * 16);
      return;
    }
    if (_0x3bad8c <= 18) {
      var _0x560b43 = _0x41924f[_0x3bad8c * 16 - 1];
      var _0x5cc100 = _0x5d3882;
      _0x5dd4a4 >>= 2;
      for (var _0x171361 = 0; _0x171361 < _0x3bad8c * 16; _0x171361 += 16) {
        var _0x5cb986 = _0x5dd4a4 + _0x171361;
        _0x560b43[_0x171361] = _0x5cc100[_0x5cb986];
        _0x560b43[_0x171361 + 1] = _0x5cc100[_0x5cb986 + 1];
        _0x560b43[_0x171361 + 2] = _0x5cc100[_0x5cb986 + 2];
        _0x560b43[_0x171361 + 3] = _0x5cc100[_0x5cb986 + 3];
        _0x560b43[_0x171361 + 4] = _0x5cc100[_0x5cb986 + 4];
        _0x560b43[_0x171361 + 5] = _0x5cc100[_0x5cb986 + 5];
        _0x560b43[_0x171361 + 6] = _0x5cc100[_0x5cb986 + 6];
        _0x560b43[_0x171361 + 7] = _0x5cc100[_0x5cb986 + 7];
        _0x560b43[_0x171361 + 8] = _0x5cc100[_0x5cb986 + 8];
        _0x560b43[_0x171361 + 9] = _0x5cc100[_0x5cb986 + 9];
        _0x560b43[_0x171361 + 10] = _0x5cc100[_0x5cb986 + 10];
        _0x560b43[_0x171361 + 11] = _0x5cc100[_0x5cb986 + 11];
        _0x560b43[_0x171361 + 12] = _0x5cc100[_0x5cb986 + 12];
        _0x560b43[_0x171361 + 13] = _0x5cc100[_0x5cb986 + 13];
        _0x560b43[_0x171361 + 14] = _0x5cc100[_0x5cb986 + 14];
        _0x560b43[_0x171361 + 15] = _0x5cc100[_0x5cb986 + 15];
      }
    } else {
      var _0x560b43 = _0x5d3882.subarray(_0x5dd4a4 >> 2, _0x5dd4a4 + _0x3bad8c * 64 >> 2);
    }
    _0x2eecc9.uniformMatrix4fv(_0x99e313(_0x5304aa), !!_0x35629d, _0x560b43);
  }
  function _0x21debd(_0x32f74d) {
    if (!_0x43254c(_0x32f74d)) {
      _0x5e5447.recordError(1280);
      _0x38748e("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x4d88c3 = _0x5e050c(_0x32f74d);
    var _0xfc0388 = _0x5e5447.mappedBuffers[_0x4d88c3];
    if (!_0xfc0388) {
      _0x5e5447.recordError(1282);
      _0x38748e("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x5e5447.mappedBuffers[_0x4d88c3] = null;
    if (!(_0xfc0388.access & 16)) {
      if (_0x5e5447.currentContext.version >= 2) {
        _0x2eecc9.bufferSubData(_0x32f74d, _0xfc0388.offset, _0x5d32f0, _0xfc0388.mem, _0xfc0388.length);
      } else {
        _0x2eecc9.bufferSubData(_0x32f74d, _0xfc0388.offset, _0x5d32f0.subarray(_0xfc0388.mem, _0xfc0388.mem + _0xfc0388.length));
      }
    }
    _0xc27a35(_0xfc0388.mem);
    return 1;
  }
  function _0x39c445() {
    var _0x43037b = _0x2eecc9.currentProgram;
    if (!_0x43037b.explicitProgramBindingsApplied) {
      if (_0x5e5447.currentContext.version >= 2) {
        Object.keys(_0x43037b.explicitUniformBindings).forEach(function (_0x3d886b) {
          var _0x306627 = _0x43037b.explicitUniformBindings[_0x3d886b];
          for (var _0x4ec746 = 0; _0x4ec746 < _0x306627[1]; ++_0x4ec746) {
            var _0x2b5a86 = _0x2eecc9.getUniformBlockIndex(_0x43037b, _0x3d886b + (_0x306627[1] > 1 ? "[" + _0x4ec746 + "]" : ""));
            _0x2eecc9.uniformBlockBinding(_0x43037b, _0x2b5a86, _0x306627[0] + _0x4ec746);
          }
        });
      }
      Object.keys(_0x43037b.explicitSamplerBindings).forEach(function (_0x4be867) {
        var _0x56beb9 = _0x43037b.explicitSamplerBindings[_0x4be867];
        for (var _0x3f0e2e = 0; _0x3f0e2e < _0x56beb9[1]; ++_0x3f0e2e) {
          _0x2eecc9.uniform1i(_0x2eecc9.getUniformLocation(_0x43037b, _0x4be867 + (_0x3f0e2e ? "[" + _0x3f0e2e + "]" : "")), _0x56beb9[0] + _0x3f0e2e);
        }
      });
      _0x43037b.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x50e20a(_0x42bbbb) {
    _0x42bbbb = _0x5e5447.programs[_0x42bbbb];
    _0x2eecc9.useProgram(_0x42bbbb);
    if (_0x2eecc9.currentProgram = _0x42bbbb) {
      _0x39c445();
    }
  }
  function _0x2ea7a6(_0x15362d) {
    _0x2eecc9.validateProgram(_0x5e5447.programs[_0x15362d]);
  }
  function _0x7d9983(_0x46b8a7, _0xd5dfc1, _0x5b2598, _0x15f3f2, _0x415d27) {
    _0x2eecc9.vertexAttrib4f(_0x46b8a7, _0xd5dfc1, _0x5b2598, _0x15f3f2, _0x415d27);
  }
  function _0x50b1af(_0x101d44, _0xc250d6) {
    _0x2eecc9.vertexAttrib4f(_0x101d44, _0x5d3882[_0xc250d6 >> 2], _0x5d3882[_0xc250d6 + 4 >> 2], _0x5d3882[_0xc250d6 + 8 >> 2], _0x5d3882[_0xc250d6 + 12 >> 2]);
  }
  function _0x5991bb(_0x163ae9, _0x200ed7, _0x43baf8, _0x3e44e2, _0x67e69a) {
    var _0x377f7d = _0x5e5447.currentContext.clientBuffers[_0x163ae9];
    if (!_0x2eecc9.currentArrayBufferBinding) {
      _0x377f7d.size = _0x200ed7;
      _0x377f7d.type = _0x43baf8;
      _0x377f7d.normalized = false;
      _0x377f7d.stride = _0x3e44e2;
      _0x377f7d.ptr = _0x67e69a;
      _0x377f7d.clientside = true;
      _0x377f7d.vertexAttribPointerAdaptor = function (_0x3ad706, _0x31199a, _0xc34ab3, _0x3c8198, _0x110ca6, _0x5bb05b) {
        this.vertexAttribIPointer(_0x3ad706, _0x31199a, _0xc34ab3, _0x110ca6, _0x5bb05b);
      };
      return;
    }
    _0x377f7d.clientside = false;
    _0x2eecc9.vertexAttribIPointer(_0x163ae9, _0x200ed7, _0x43baf8, _0x3e44e2, _0x67e69a);
  }
  function _0x55d17f(_0x2e3b87, _0x200f06, _0x18a4f, _0x4f8d3f, _0x36ee02, _0xa04f42) {
    var _0x3c446e = _0x5e5447.currentContext.clientBuffers[_0x2e3b87];
    if (!_0x2eecc9.currentArrayBufferBinding) {
      _0x3c446e.size = _0x200f06;
      _0x3c446e.type = _0x18a4f;
      _0x3c446e.normalized = _0x4f8d3f;
      _0x3c446e.stride = _0x36ee02;
      _0x3c446e.ptr = _0xa04f42;
      _0x3c446e.clientside = true;
      _0x3c446e.vertexAttribPointerAdaptor = function (_0x24a4d5, _0x1be235, _0x4a6e06, _0x33b8f8, _0x1f0bef, _0x2e2328) {
        this.vertexAttribPointer(_0x24a4d5, _0x1be235, _0x4a6e06, _0x33b8f8, _0x1f0bef, _0x2e2328);
      };
      return;
    }
    _0x3c446e.clientside = false;
    _0x2eecc9.vertexAttribPointer(_0x2e3b87, _0x200f06, _0x18a4f, !!_0x4f8d3f, _0x36ee02, _0xa04f42);
  }
  function _0x25a6ed(_0x384ae2, _0x47e585, _0x5f435a, _0x47f7b2) {
    _0x2eecc9.viewport(_0x384ae2, _0x47e585, _0x5f435a, _0x47f7b2);
  }
  function _0x4b115a(_0x1cab8e) {
    return _0x1cab8e;
  }
  function _0x53ef25(_0x305489) {
    _0x4c8dcc();
    var _0x3ef2c3 = new Date(_0x447875[_0x305489 + 20 >> 2] + 1900, _0x447875[_0x305489 + 16 >> 2], _0x447875[_0x305489 + 12 >> 2], _0x447875[_0x305489 + 8 >> 2], _0x447875[_0x305489 + 4 >> 2], _0x447875[_0x305489 >> 2], 0);
    var _0x3d65fa = _0x447875[_0x305489 + 32 >> 2];
    var _0x38dd2e = _0x3ef2c3.getTimezoneOffset();
    var _0x546964 = new Date(_0x3ef2c3.getFullYear(), 0, 1);
    var _0x1a0b05 = new Date(_0x3ef2c3.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x19ee67 = _0x546964.getTimezoneOffset();
    var _0x4a9be8 = Math.min(_0x19ee67, _0x1a0b05);
    if (_0x3d65fa < 0) {
      _0x447875[_0x305489 + 32 >> 2] = Number(_0x1a0b05 != _0x19ee67 && _0x4a9be8 == _0x38dd2e);
    } else if (_0x3d65fa > 0 != (_0x4a9be8 == _0x38dd2e)) {
      var _0x32d753 = Math.max(_0x19ee67, _0x1a0b05);
      var _0x4a6b38 = _0x3d65fa > 0 ? _0x4a9be8 : _0x32d753;
      _0x3ef2c3.setTime(_0x3ef2c3.getTime() + (_0x4a6b38 - _0x38dd2e) * 60000);
    }
    _0x447875[_0x305489 + 24 >> 2] = _0x3ef2c3.getDay();
    var _0x4c75c3 = (_0x3ef2c3.getTime() - _0x546964.getTime()) / 86400000 | 0;
    _0x447875[_0x305489 + 28 >> 2] = _0x4c75c3;
    _0x447875[_0x305489 >> 2] = _0x3ef2c3.getSeconds();
    _0x447875[_0x305489 + 4 >> 2] = _0x3ef2c3.getMinutes();
    _0x447875[_0x305489 + 8 >> 2] = _0x3ef2c3.getHours();
    _0x447875[_0x305489 + 12 >> 2] = _0x3ef2c3.getDate();
    _0x447875[_0x305489 + 16 >> 2] = _0x3ef2c3.getMonth();
    return _0x3ef2c3.getTime() / 1000 | 0;
  }
  function _0x3a41ab(_0x100816) {
    _0x5ea706(_0x100816);
  }
  function _0x26cacc(_0x5770a3, _0x59f6b0, _0x19a167) {
    return 0;
  }
  function _0x3af286(_0x708b89) {
    _0x447875[_0x708b89 >> 2] = 0;
    return 0;
  }
  function _0x55719b(_0x1c372e) {
    return _0x1c372e % 4 === 0 && (_0x1c372e % 100 !== 0 || _0x1c372e % 400 === 0);
  }
  function _0x35d61b(_0xc5cabd, _0x50808f) {
    var _0x5b6ae9 = 0;
    for (var _0x2e8ed1 = 0; _0x2e8ed1 <= _0x50808f; _0x5b6ae9 += _0xc5cabd[_0x2e8ed1++]) {}
    return _0x5b6ae9;
  }
  var _0x287a96 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x519c8d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x4fc1e5(_0x477857, _0x153b86) {
    var _0x5daf0e = new Date(_0x477857.getTime());
    while (_0x153b86 > 0) {
      var _0xbfa497 = _0x55719b(_0x5daf0e.getFullYear());
      var _0x103d9f = _0x5daf0e.getMonth();
      var _0x19aa5a = (_0xbfa497 ? _0x287a96 : _0x519c8d)[_0x103d9f];
      if (_0x153b86 > _0x19aa5a - _0x5daf0e.getDate()) {
        _0x153b86 -= _0x19aa5a - _0x5daf0e.getDate() + 1;
        _0x5daf0e.setDate(1);
        if (_0x103d9f < 11) {
          _0x5daf0e.setMonth(_0x103d9f + 1);
        } else {
          _0x5daf0e.setMonth(0);
          _0x5daf0e.setFullYear(_0x5daf0e.getFullYear() + 1);
        }
      } else {
        _0x5daf0e.setDate(_0x5daf0e.getDate() + _0x153b86);
        return _0x5daf0e;
      }
    }
    return _0x5daf0e;
  }
  function _0x2e7330(_0x19ea35, _0x27a9dc, _0x2090c0, _0x19c9aa) {
    var _0x2538c5 = _0x447875[_0x19c9aa + 40 >> 2];
    var _0x52870d = {
      tm_sec: _0x447875[_0x19c9aa >> 2],
      tm_min: _0x447875[_0x19c9aa + 4 >> 2],
      tm_hour: _0x447875[_0x19c9aa + 8 >> 2],
      tm_mday: _0x447875[_0x19c9aa + 12 >> 2],
      tm_mon: _0x447875[_0x19c9aa + 16 >> 2],
      tm_year: _0x447875[_0x19c9aa + 20 >> 2],
      tm_wday: _0x447875[_0x19c9aa + 24 >> 2],
      tm_yday: _0x447875[_0x19c9aa + 28 >> 2],
      tm_isdst: _0x447875[_0x19c9aa + 32 >> 2],
      tm_gmtoff: _0x447875[_0x19c9aa + 36 >> 2],
      tm_zone: _0x2538c5 ? _0x242db5(_0x2538c5) : ""
    };
    var _0x2b02c3 = _0x242db5(_0x2090c0);
    var _0x1854a = {
      "%c": "%a %b %d %H:%M:%S %Y",
      "%D": "%m/%d/%y",
      "%F": "%Y-%m-%d",
      "%h": "%b",
      "%r": "%I:%M:%S %p",
      "%R": "%H:%M",
      "%T": "%H:%M:%S",
      "%x": "%m/%d/%y",
      "%X": "%H:%M:%S",
      "%Ec": "%c",
      "%EC": "%C",
      "%Ex": "%m/%d/%y",
      "%EX": "%H:%M:%S",
      "%Ey": "%y",
      "%EY": "%Y",
      "%Od": "%d",
      "%Oe": "%e",
      "%OH": "%H",
      "%OI": "%I",
      "%Om": "%m",
      "%OM": "%M",
      "%OS": "%S",
      "%Ou": "%u",
      "%OU": "%U",
      "%OV": "%V",
      "%Ow": "%w",
      "%OW": "%W",
      "%Oy": "%y"
    };
    for (var _0xd939b9 in _0x1854a) {
      _0x2b02c3 = _0x2b02c3.replace(new RegExp(_0xd939b9, "g"), _0x1854a[_0xd939b9]);
    }
    var _0x417b4a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x3923b4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x532f1d(_0x16d9e0, _0x4e5923, _0x4ff357) {
      var _0x2c4279 = typeof _0x16d9e0 === "number" ? _0x16d9e0.toString() : _0x16d9e0 || "";
      while (_0x2c4279.length < _0x4e5923) {
        _0x2c4279 = _0x4ff357[0] + _0x2c4279;
      }
      return _0x2c4279;
    }
    function _0x3bc10c(_0x227896, _0x471b23) {
      return _0x532f1d(_0x227896, _0x471b23, "0");
    }
    function _0x2db373(_0x593166, _0xbd6cab) {
      function _0x544a97(_0x1feade) {
        if (_0x1feade < 0) {
          return -1;
        } else if (_0x1feade > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x289856;
      if ((_0x289856 = _0x544a97(_0x593166.getFullYear() - _0xbd6cab.getFullYear())) === 0) {
        if ((_0x289856 = _0x544a97(_0x593166.getMonth() - _0xbd6cab.getMonth())) === 0) {
          _0x289856 = _0x544a97(_0x593166.getDate() - _0xbd6cab.getDate());
        }
      }
      return _0x289856;
    }
    function _0x23fe28(_0x4da4ec) {
      switch (_0x4da4ec.getDay()) {
        case 0:
          return new Date(_0x4da4ec.getFullYear() - 1, 11, 29);
        case 1:
          return _0x4da4ec;
        case 2:
          return new Date(_0x4da4ec.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x4da4ec.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x4da4ec.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x4da4ec.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x4da4ec.getFullYear() - 1, 11, 30);
      }
    }
    function _0x4f288c(_0x397bd4) {
      var _0x308e79 = _0x4fc1e5(new Date(_0x397bd4.tm_year + 1900, 0, 1), _0x397bd4.tm_yday);
      var _0x1cca06 = new Date(_0x308e79.getFullYear(), 0, 4);
      var _0x545e67 = new Date(_0x308e79.getFullYear() + 1, 0, 4);
      var _0x2b769e = _0x23fe28(_0x1cca06);
      var _0x35e7fa = _0x23fe28(_0x545e67);
      if (_0x2db373(_0x2b769e, _0x308e79) <= 0) {
        if (_0x2db373(_0x35e7fa, _0x308e79) <= 0) {
          return _0x308e79.getFullYear() + 1;
        } else {
          return _0x308e79.getFullYear();
        }
      } else {
        return _0x308e79.getFullYear() - 1;
      }
    }
    var _0x3c1738 = {
      "%a": function (_0x5c6343) {
        return _0x417b4a[_0x5c6343.tm_wday].substring(0, 3);
      },
      "%A": function (_0x5954f6) {
        return _0x417b4a[_0x5954f6.tm_wday];
      },
      "%b": function (_0x58f8c9) {
        return _0x3923b4[_0x58f8c9.tm_mon].substring(0, 3);
      },
      "%B": function (_0x3285c6) {
        return _0x3923b4[_0x3285c6.tm_mon];
      },
      "%C": function (_0x468748) {
        var _0x221b3b = _0x468748.tm_year + 1900;
        return _0x3bc10c(_0x221b3b / 100 | 0, 2);
      },
      "%d": function (_0xaa18c6) {
        return _0x3bc10c(_0xaa18c6.tm_mday, 2);
      },
      "%e": function (_0x36e262) {
        return _0x532f1d(_0x36e262.tm_mday, 2, " ");
      },
      "%g": function (_0x3ab9c5) {
        return _0x4f288c(_0x3ab9c5).toString().substring(2);
      },
      "%G": function (_0x3869cb) {
        return _0x4f288c(_0x3869cb);
      },
      "%H": function (_0x22ca7d) {
        return _0x3bc10c(_0x22ca7d.tm_hour, 2);
      },
      "%I": function (_0x31139b) {
        var _0x222e57 = _0x31139b.tm_hour;
        if (_0x222e57 == 0) {
          _0x222e57 = 12;
        } else if (_0x222e57 > 12) {
          _0x222e57 -= 12;
        }
        return _0x3bc10c(_0x222e57, 2);
      },
      "%j": function (_0x3cb272) {
        return _0x3bc10c(_0x3cb272.tm_mday + _0x35d61b(_0x55719b(_0x3cb272.tm_year + 1900) ? _0x287a96 : _0x519c8d, _0x3cb272.tm_mon - 1), 3);
      },
      "%m": function (_0x3ca0f4) {
        return _0x3bc10c(_0x3ca0f4.tm_mon + 1, 2);
      },
      "%M": function (_0x71e59d) {
        return _0x3bc10c(_0x71e59d.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x1743ea) {
        if (_0x1743ea.tm_hour >= 0 && _0x1743ea.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x49d5b9) {
        return _0x3bc10c(_0x49d5b9.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x13e2c1) {
        return _0x13e2c1.tm_wday || 7;
      },
      "%U": function (_0x144bec) {
        var _0x185342 = new Date(_0x144bec.tm_year + 1900, 0, 1);
        var _0x53856f = _0x185342.getDay() === 0 ? _0x185342 : _0x4fc1e5(_0x185342, 7 - _0x185342.getDay());
        var _0x3d6dda = new Date(_0x144bec.tm_year + 1900, _0x144bec.tm_mon, _0x144bec.tm_mday);
        if (_0x2db373(_0x53856f, _0x3d6dda) < 0) {
          var _0xf31564 = _0x35d61b(_0x55719b(_0x3d6dda.getFullYear()) ? _0x287a96 : _0x519c8d, _0x3d6dda.getMonth() - 1) - 31;
          var _0x2033d4 = 31 - _0x53856f.getDate();
          var _0x482191 = _0x2033d4 + _0xf31564 + _0x3d6dda.getDate();
          return _0x3bc10c(Math.ceil(_0x482191 / 7), 2);
        }
        if (_0x2db373(_0x53856f, _0x185342) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x25ab45) {
        var _0x1b933f = new Date(_0x25ab45.tm_year + 1900, 0, 4);
        var _0x4f07b3 = new Date(_0x25ab45.tm_year + 1901, 0, 4);
        var _0x4d750d = _0x23fe28(_0x1b933f);
        var _0x5d9f65 = _0x23fe28(_0x4f07b3);
        var _0x5e85a6 = _0x4fc1e5(new Date(_0x25ab45.tm_year + 1900, 0, 1), _0x25ab45.tm_yday);
        if (_0x2db373(_0x5e85a6, _0x4d750d) < 0) {
          return "53";
        }
        if (_0x2db373(_0x5d9f65, _0x5e85a6) <= 0) {
          return "01";
        }
        var _0x53155f;
        if (_0x4d750d.getFullYear() < _0x25ab45.tm_year + 1900) {
          _0x53155f = _0x25ab45.tm_yday + 32 - _0x4d750d.getDate();
        } else {
          _0x53155f = _0x25ab45.tm_yday + 1 - _0x4d750d.getDate();
        }
        return _0x3bc10c(Math.ceil(_0x53155f / 7), 2);
      },
      "%w": function (_0x32105f) {
        return _0x32105f.tm_wday;
      },
      "%W": function (_0x16293f) {
        var _0xd70bbe = new Date(_0x16293f.tm_year, 0, 1);
        var _0x4c77c0 = _0xd70bbe.getDay() === 1 ? _0xd70bbe : _0x4fc1e5(_0xd70bbe, _0xd70bbe.getDay() === 0 ? 1 : 7 - _0xd70bbe.getDay() + 1);
        var _0x1e88c8 = new Date(_0x16293f.tm_year + 1900, _0x16293f.tm_mon, _0x16293f.tm_mday);
        if (_0x2db373(_0x4c77c0, _0x1e88c8) < 0) {
          var _0x3b03a7 = _0x35d61b(_0x55719b(_0x1e88c8.getFullYear()) ? _0x287a96 : _0x519c8d, _0x1e88c8.getMonth() - 1) - 31;
          var _0x5d7ea8 = 31 - _0x4c77c0.getDate();
          var _0x2ebda6 = _0x5d7ea8 + _0x3b03a7 + _0x1e88c8.getDate();
          return _0x3bc10c(Math.ceil(_0x2ebda6 / 7), 2);
        }
        if (_0x2db373(_0x4c77c0, _0xd70bbe) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x254561) {
        return (_0x254561.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x3e1485) {
        return _0x3e1485.tm_year + 1900;
      },
      "%z": function (_0x5dec9b) {
        var _0x5a1de4 = _0x5dec9b.tm_gmtoff;
        var _0x5ec52c = _0x5a1de4 >= 0;
        _0x5a1de4 = Math.abs(_0x5a1de4) / 60;
        _0x5a1de4 = _0x5a1de4 / 60 * 100 + _0x5a1de4 % 60;
        return (_0x5ec52c ? "+" : "-") + String("0000" + _0x5a1de4).slice(-4);
      },
      "%Z": function (_0x801cc0) {
        return _0x801cc0.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0xd939b9 in _0x3c1738) {
      if (_0x2b02c3.includes(_0xd939b9)) {
        _0x2b02c3 = _0x2b02c3.replace(new RegExp(_0xd939b9, "g"), _0x3c1738[_0xd939b9](_0x52870d));
      }
    }
    var _0x4863e3 = _0x380359(_0x2b02c3, false);
    if (_0x4863e3.length > _0x27a9dc) {
      return 0;
    }
    _0x4bdb39(_0x4863e3, _0x19ea35);
    return _0x4863e3.length - 1;
  }
  function _0x4286ec(_0x76eab2) {
    var _0x5783fb = Date.now() / 1000 | 0;
    if (_0x76eab2) {
      _0x447875[_0x76eab2 >> 2] = _0x5783fb;
    }
    return _0x5783fb;
  }
  function _0x235f72(_0x11c835, _0x40bc34) {
    _0x11c835 = _0x242db5(_0x11c835);
    try {
      _0x415c36.utime(_0x11c835, _0x40bc34, _0x40bc34);
      return 0;
    } catch (_0xa2d1f3) {
      if (!(_0xa2d1f3 instanceof _0x415c36.ErrnoError)) {
        throw _0xa2d1f3 + " : " + _0x19fe57();
      }
      _0x4c5b5d(_0xa2d1f3.errno);
      return -1;
    }
  }
  function _0x34a90d(_0x2f3463, _0x26c9c2) {
    var _0x560714;
    if (_0x26c9c2) {
      _0x560714 = _0x447875[_0x26c9c2 + 4 >> 2] * 1000;
    } else {
      _0x560714 = Date.now();
    }
    return _0x235f72(_0x2f3463, _0x560714);
  }
  var _0x2bee7e = function (_0x540179, _0x226166, _0x47ecc5, _0x5d9954) {
    if (!_0x540179) {
      _0x540179 = this;
    }
    this.parent = _0x540179;
    this.mount = _0x540179.mount;
    this.mounted = null;
    this.id = _0x415c36.nextInode++;
    this.name = _0x226166;
    this.mode = _0x47ecc5;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x5d9954;
  };
  var _0x5eeb6d = 365;
  var _0x1c87b = 146;
  Object.defineProperties(_0x2bee7e.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x5eeb6d) === _0x5eeb6d;
      },
      set: function (_0x1afeee) {
        if (_0x1afeee) {
          this.mode |= _0x5eeb6d;
        } else {
          this.mode &= ~_0x5eeb6d;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x1c87b) === _0x1c87b;
      },
      set: function (_0x368402) {
        if (_0x368402) {
          this.mode |= _0x1c87b;
        } else {
          this.mode &= ~_0x1c87b;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x415c36.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x415c36.isChrdev(this.mode);
      }
    }
  });
  _0x415c36.FSNode = _0x2bee7e;
  _0x415c36.staticInit();
  _0x24391e.FS_createPath = _0x415c36.createPath;
  _0x24391e.FS_createDataFile = _0x415c36.createDataFile;
  _0x24391e.requestFullscreen = function _0x27a78e(_0x2c9cb6, _0x47ac9a) {
    _0x43e1b2.requestFullscreen(_0x2c9cb6, _0x47ac9a);
  };
  _0x24391e.requestAnimationFrame = function _0x408b0b(_0xd49787) {
    _0x43e1b2.requestAnimationFrame(_0xd49787);
  };
  _0x24391e.setCanvasSize = function _0x230fb2(_0xd3b2fd, _0x27f1c1, _0x159392) {
    _0x43e1b2.setCanvasSize(_0xd3b2fd, _0x27f1c1, _0x159392);
  };
  _0x24391e.pauseMainLoop = function _0x3bb7b7() {
    _0x43e1b2.mainLoop.pause();
  };
  _0x24391e.resumeMainLoop = function _0x5cdcb4() {
    _0x43e1b2.mainLoop.resume();
  };
  _0x24391e.getUserMedia = function _0x2a5159() {
    _0x43e1b2.getUserMedia();
  };
  _0x24391e.createContext = function _0x37df52(_0x243208, _0x88299c, _0x191419, _0x1d5e8a) {
    return _0x43e1b2.createContext(_0x243208, _0x88299c, _0x191419, _0x1d5e8a);
  };
  var _0x2eecc9;
  for (var _0x33fd50 = 0; _0x33fd50 < 32; ++_0x33fd50) {
    _0xc22a58.push(new Array(_0x33fd50));
  }
  var _0xb74ae = new Float32Array(288);
  for (var _0x33fd50 = 0; _0x33fd50 < 288; ++_0x33fd50) {
    _0x41924f[_0x33fd50] = _0xb74ae.subarray(0, _0x33fd50 + 1);
  }
  var _0xb3cf8e = new Int32Array(288);
  for (var _0x33fd50 = 0; _0x33fd50 < 288; ++_0x33fd50) {
    _0x1566ec[_0x33fd50] = _0xb3cf8e.subarray(0, _0x33fd50 + 1);
  }
  function _0x380359(_0x1bab3c, _0x1e83d0, _0x2be05c) {
    var _0x2212df = _0x2be05c > 0 ? _0x2be05c : _0x72e291(_0x1bab3c) + 1;
    var _0x3bac39 = new Array(_0x2212df);
    var _0x4b1162 = _0x389f76(_0x1bab3c, _0x3bac39, 0, _0x3bac39.length);
    if (_0x1e83d0) {
      _0x3bac39.length = _0x4b1162;
    }
    return _0x3bac39;
  }
  var _0x521387 = {
    Bj: _0x4a1cfe,
    xj: _0x87ea14,
    ad: _0x7c3c0c,
    vk: _0x20d55d,
    gk: _0x47eb67,
    Yj: _0x1eaf3e,
    tk: _0x39faad,
    sk: _0x445810,
    pk: _0x43242d,
    rk: _0x2aae00,
    qk: _0x3373a9,
    zj: _0x46082e,
    yj: _0x2d61cc,
    Pj: _0x117c47,
    dd: _0x17e791,
    oj: _0x4d580d,
    Dk: _0x3ad725,
    id: _0x324769,
    hj: _0x3a4eef,
    rd: _0x58805e,
    kj: _0x7bd10f,
    Lc: _0x4c10a6,
    Nc: _0x55171a,
    Mc: _0x3c76d4,
    $k: _0x4df394,
    lk: _0x1b748b,
    kk: _0x194a28,
    qj: _0x398619,
    Ej: _0x5acae0,
    Dj: _0x5d91ce,
    xk: _0x5b704b,
    ok: _0x5c44c7,
    nk: _0x1b73a9,
    yk: _0x230edf,
    Tj: _0x3c89a8,
    _j: _0x2483a4,
    ve: _0xd2dc2b,
    we: _0x3dd2b7,
    dk: _0x3c4341,
    ck: _0x3f48d0,
    bk: _0x3d9086,
    jl: _0xa04472,
    il: _0x23ccf4,
    hl: _0x599e46,
    gl: _0x2c48ae,
    mk: _0x1e3e82,
    hk: _0x2480c8,
    jj: _0x7643ac,
    ij: _0x44bc3a,
    vj: _0x8c6fdc,
    zk: _0x2afbb8,
    _c: _0x45cf36,
    Hk: _0x121f40,
    $j: _0xc7247e,
    Jf: _0x1cf046,
    Pb: _0x168858,
    Ob: _0x3c408a,
    Of: _0x300b38,
    Ya: _0x174970,
    Xa: _0xbd03fb,
    pf: _0x689948,
    Qf: _0x571806,
    rf: _0x4011f5,
    hf: _0x51a271,
    la: _0x1c5783,
    Hf: _0xb67ef2,
    Lb: _0x17dc3d,
    Kb: _0x13c5b7,
    Ff: _0x2db342,
    Gf: _0x5ad744,
    Jb: _0x5e5cdc,
    Ib: _0x4642ec,
    Bd: _0x49fcd0,
    If: _0x390411,
    Nb: _0x4e60a6,
    Mb: _0xe4104c,
    qf: _0x45c919,
    sf: _0x3c3dc2,
    Kf: _0x2b7522,
    Rb: _0x2e0d4f,
    Qb: _0x10e9f8,
    Sb: _0x562bf7,
    lf: _0x24e4f8,
    Ef: _0x2fdfe5,
    Mf: _0x20374b,
    ha: _0x25a1b7,
    tg: _0x31c24f,
    ja: _0x521cf8,
    ng: _0x302f12,
    og: _0xd47ef0,
    kg: _0x403353,
    fc: _0x6c3422,
    gc: _0x204e29,
    $a: _0x4e5878,
    va: _0x149893,
    Tb: _0x57e97d,
    pg: _0x3827be,
    ig: _0x4847a5,
    jg: _0x27218c,
    ic: _0xfd955d,
    hc: _0x2b225c,
    ta: _0x3324d4,
    ia: _0x148e02,
    sg: _0x4ed43a,
    qg: _0x2d4c9d,
    ua: _0x19da8a,
    na: _0x2d1df5,
    ec: _0x30cfe7,
    Cb: _0x97677,
    Hb: _0x126e2e,
    Qa: _0x84f147,
    Db: _0x3ea2ba,
    Fb: _0x4d2771,
    uf: _0xacda2f,
    dc: _0x1b5044,
    Rf: _0x4c6429,
    Eb: _0x4cf016,
    Df: _0x51f07d,
    xa: _0x3d2a52,
    Pf: _0x508e09,
    of: _0x2952fc,
    fg: _0x2044d4,
    bg: _0x5e197,
    dg: _0x3961ce,
    eg: _0x5941ba,
    _a: _0xe27e9b,
    Zf: _0x4b7117,
    $f: _0x4c96d5,
    _f: _0x31828e,
    ag: _0x310972,
    Ek: _0x5651e8,
    Mj: _0x444d94,
    Kj: _0x2696e8,
    Ij: _0x4818b1,
    sj: _0x42ffcc,
    uj: _0x2953fc,
    Oj: _0xfbfce2,
    mj: _0x9b5a0f,
    lj: _0x505442,
    Ik: _0x4b1d50,
    Gj: _0x46831b,
    Uj: _0xf90643,
    cl: _0x58cfaf,
    Sj: _0x39e12,
    Rj: _0xdbb827,
    fl: _0x352501,
    ub: _0xfc7c4e,
    bl: _0x24a5b3,
    ed: _0x49ee35,
    al: _0x4b3713,
    wj: _0x4f3312,
    wk: _0x40dfe0,
    uk: _0x28ed3f,
    jk: _0x200ca7,
    Vi: _0x536e10,
    Ui: _0x2e4744,
    Si: _0x249424,
    Ti: _0x145730,
    Cj: _0x5c7ba6,
    nj: _0xdb79b1,
    ek: _0x21e686,
    fk: _0x42e373,
    ik: _0x2c1c02,
    qd: _0x39fb9e,
    Zj: _0x365ddf,
    Xj: _0x4b947d,
    Vj: _0x2cc4fe,
    Wj: _0x3188aa,
    Lj: _0x40b66a,
    Jj: _0x20a684,
    Hj: _0x1ff015,
    rj: _0x47dfbc,
    tj: _0x3cb2ee,
    Nj: _0x3451c7,
    ak: _0x5d0f7f,
    Fj: _0x39453b,
    Aj: _0x200022,
    Qj: _0x28eb49,
    pj: _0x5cbcc0,
    gj: _0x2a3e4e,
    Yk: _0x571ee3,
    nd: _0x2e5975,
    Xk: _0x299d77,
    tb: _0x2a1073,
    md: _0x36458f,
    pd: _0x125e84,
    Nk: _0x275ff3,
    Pk: _0x3a91eb,
    Zk: _0x30cf35,
    _k: _0x3f21af,
    Uk: _0x16fe58,
    Sk: _0xbe230,
    Vk: _0x5659bc,
    Rk: _0x347ef5,
    Tk: _0x567db7,
    od: _0x5cd68a,
    rb: _0x50830a,
    sb: _0x3dad0f,
    Qk: _0x53613e,
    Wk: _0x40d1c2,
    Ok: _0x438f47,
    Jk: _0x36d218,
    ld: _0x559685,
    jd: _0xdb3107,
    Lk: _0x9dd370,
    Mk: _0x2e5866,
    Kk: _0x136f5f,
    kd: _0x218e7b,
    nb: _0x26eff3,
    bj: _0x1ac21d,
    Rc: _0x1d9594,
    $i: _0x259079,
    Tc: _0x247d67,
    Yi: _0x98d8ac,
    _i: _0x50bcd7,
    Zi: _0x26a36d,
    aj: _0x377f8b,
    p: _0x15148c,
    i: _0x5f22c4,
    o: _0x5df71f,
    j: _0x5ac526,
    a: _0x4abc16,
    nl: _0x232a53,
    pb: _0x309f0e,
    Sd: _0x45b29b,
    ga: _0x35f546,
    Ed: _0x3e6e62,
    Fd: _0x1e0ba5,
    l: _0x12c5c7,
    Wf: _0x7c3e6a,
    Kg: _0x4f63d2,
    cg: _0x2737a2,
    yh: _0x5354f2,
    Pd: _0x2c4371,
    sh: _0x61b07d,
    Yd: _0xc3eaeb,
    W: _0x10874d,
    Ai: _0x1d9e8e,
    ki: _0x788403,
    Md: _0x49f5ff,
    Jd: _0x5d4782,
    Oc: _0x5708a8,
    Pc: _0x213576,
    se: _0x541686,
    Pa: _0x6dee0c,
    Id: _0x160405,
    ah: _0x1c7405,
    th: _0x1ca295,
    xg: _0x63f6ac,
    cc: _0x3a2270,
    Sg: _0x38626c,
    Qd: _0x3f6c0e,
    Ld: _0x15217b,
    mg: _0x55a804,
    gf: _0x3b034d,
    lb: _0x43109e,
    Rd: _0x551fb3,
    lh: _0x4c1f3c,
    Wi: _0x1ef058,
    rg: _0xf50021,
    Td: _0x25e134,
    Nd: _0x4352b8,
    Kd: _0x5e9aea,
    Ud: _0x4a8495,
    yg: _0x350f93,
    lg: _0x295515,
    he: _0x4f6e0e,
    Ab: _0x4fcca7,
    Hc: _0xcb9de3,
    ug: _0x96dac4,
    vg: _0x13a921,
    Ne: _0x365c17,
    Od: _0x48aca3,
    x: _0x1cc445,
    T: _0x4af134,
    Hd: _0x3c4579,
    xb: _0x5ae50f,
    Dd: _0x52b9ff,
    Hh: _0x12d09e,
    Ba: _0x493071,
    Fc: _0xcd6d85,
    Nh: _0x108606,
    Za: _0x1252ed,
    mf: _0x56e9a8,
    kf: _0x4d90a8,
    Bf: _0x2f18cb,
    vf: _0x344d1e,
    tf: _0x3f3231,
    Af: _0x268820,
    Ua: _0x4da936,
    Gd: _0x28e45b,
    P: _0x5412fd,
    Va: _0x4a2eb9,
    nf: _0x8d2b8b,
    Uf: _0x5e566a,
    C: _0x1c19ba,
    G: _0xe92050,
    ol: _0x3073c2,
    Cf: _0x30eb4d,
    wf: _0x3d2ad6,
    pl: _0x586f8f,
    Wa: _0x2321d4,
    Gb: _0x1f1a1,
    Ra: _0x4f3b85,
    yf: _0x6f40fb,
    zf: _0x2a76f5,
    Vb: _0x46538f,
    Ub: _0x4577ae,
    ef: _0x130b9c,
    qa: _0x5dce30,
    oa: _0x29ecc6,
    pa: _0x2b1c89,
    df: _0x12b51f,
    jf: _0x5b36ec,
    ac: _0x3e7f7f,
    $b: _0x82515b,
    bc: _0x57dd19,
    xf: _0x34d439,
    Wb: _0x3fc1c6,
    Yb: _0x1c39a4,
    Xb: _0x12be4c,
    Zb: _0x43638a,
    _b: _0x2c4f45,
    Cd: _0xc293eb,
    Xf: _0x39c9b5,
    Vf: _0x5a637f,
    ra: _0x353e62,
    Tf: _0xf649e4,
    zg: _0x30c126,
    sa: _0x2c24e8,
    Lf: _0x274732,
    Nf: _0x516427,
    A: _0x1ce215,
    aa: _0x55fbf3,
    Bc: _0x1f1533,
    zb: _0x16c9ac,
    cf: _0x4e8b8a,
    mb: _0x452782,
    wa: _0x560f17,
    b: _0x85bf40,
    ff: _0x3b8d1e,
    gg: _0x1c6cfa,
    hg: _0x3d5e4b,
    Bb: _0x3537ba,
    wg: _0x3cf828,
    La: _0x1e262c,
    Ii: _0x314cc7,
    Fi: _0x380d27,
    oc: _0x12d099,
    oh: _0x4cd5c7,
    Fa: _0x1877a3,
    Ei: _0xad1395,
    Ng: _0x399c3d,
    Mg: _0x4b8bc1,
    Bi: _0x2cef2e,
    Ci: _0x207074,
    Gg: _0x233415,
    Di: _0x226b71,
    gh: _0x414482,
    jh: _0x5a49fe,
    Ic: _0x232d13,
    Jc: _0x5e2f17,
    Kc: _0x4bb9f6,
    Zg: _0x363029,
    yi: _0x58ce38,
    zi: _0x570d33,
    xi: _0x505eb6,
    ti: _0x341cf2,
    Cg: _0x560d5d,
    Bg: _0x4d4a67,
    Ag: _0x4d72a6,
    ui: _0xbc9c70,
    vi: _0x201587,
    wi: _0x2a1adf,
    Vd: _0x286527,
    kb: _0xf9e3c8,
    si: _0x14b6bb,
    qi: _0x4ccd81,
    $g: _0xc1d8b7,
    ri: _0x5604de,
    eh: _0x2ff737,
    Qg: _0x30c4d2,
    pi: _0x2a254e,
    Gc: _0x4fa757,
    oi: _0x129980,
    ni: _0x57593f,
    mi: _0x31db15,
    li: _0x483d75,
    ji: _0x223f23,
    ii: _0x162484,
    eb: _0x1c21e5,
    hi: _0x481bcf,
    Fg: _0x5f21a6,
    gi: _0x3331e6,
    kc: _0x13363b,
    fi: _0x14c84f,
    hh: _0x392ff7,
    mh: _0x44a85e,
    Ea: _0x345d5f,
    Da: _0x3ce268,
    ei: _0x4c6bfe,
    di: _0x38216e,
    ci: _0x702f16,
    $h: _0x5e2683,
    Tg: _0xb36a1b,
    Pg: _0x32787a,
    ai: _0x4dcce1,
    Rg: _0x2bb7f2,
    bi: _0x4c347e,
    _h: _0xadd60a,
    pc: _0x244e43,
    ph: _0x992081,
    jc: _0x42e325,
    Xh: _0x297aa8,
    Yh: _0x430b41,
    Wg: _0xcfad5f,
    X: _0x18f2f8,
    V: _0x2ef743,
    ya: _0x3c8903,
    Ca: _0x13c82b,
    Wh: _0xaea1d7,
    Sh: _0x52ea86,
    nc: _0x15b445,
    Th: _0x2fb0c7,
    Eg: _0x523724,
    Vh: _0x4cee95,
    ih: _0xd968b1,
    nh: _0x3b82e4,
    Uh: _0x55e688,
    Oi: _0x139602,
    jb: _0x2ed0c8,
    bb: _0x1ed779,
    da: _0x2d4150,
    ca: _0x36fabd,
    Ni: _0x4a34fa,
    Sf: _0x2a56c3,
    Rh: _0x287cb4,
    Qh: _0x43a6e7,
    Hi: _0x5a8c17,
    Ga: _0x1bbe14,
    Ig: _0x5dd9d5,
    lc: _0x27bca9,
    Ki: _0x496289,
    $: _0x1b2ac2,
    rh: _0x24da3a,
    qh: _0x1148b0,
    Zh: _0x238480,
    Oh: _0x12ade2,
    Ec: _0x27a44c,
    Ph: _0x4c013e,
    Ji: _0xef710c,
    Mh: _0x3f4280,
    Xg: _0x3c46e4,
    Lh: _0x6fb292,
    Jg: _0x4be686,
    ab: _0x3af141,
    ka: _0xce8b72,
    Dc: _0x47d1c0,
    Mi: _0x14f41d,
    db: _0x5ed5c3,
    Gi: _0x449507,
    kh: _0x51022e,
    Jh: _0x28df41,
    Ug: _0x37b4b9,
    Kh: _0x183092,
    Cc: _0x35f991,
    mc: _0x2ccc61,
    Dg: _0x375978,
    Og: _0xa5cd58,
    fa: _0x52438f,
    Ih: _0x334192,
    Yg: _0x55c7b1,
    Hg: _0x3ebe2d,
    ib: _0x2430de,
    Fh: _0x3a4a64,
    Gh: _0x4e04da,
    Dh: _0x4f121c,
    Eh: _0xca87ee,
    Bh: _0x2e1a8e,
    ch: _0x416ddc,
    Ch: _0x4a0f11,
    hb: _0x133f4d,
    Ah: _0x283a7f,
    _g: _0x21800e,
    bh: _0x3aa2bd,
    zh: _0x3b3967,
    dh: _0xa2029e,
    fh: _0x1cc340,
    qc: _0x1c6a83,
    za: _0x1def22,
    rc: _0x2b3dc8,
    sc: _0x55ecc7,
    tc: _0x192833,
    uc: _0x2ad9cb,
    vc: _0xd4b102,
    gb: _0x32fd7f,
    wc: _0x27b99b,
    xc: _0x139b71,
    ea: _0x2815db,
    yc: _0x26bcd1,
    zc: _0x1bd303,
    cb: _0x1e277f,
    Ac: _0x2bccdd,
    Aa: _0x58ee8a,
    Vg: _0x21debd,
    uh: _0x50e20a,
    Li: _0x2ea7a6,
    vh: _0x7d9983,
    wh: _0x50b1af,
    Lg: _0x5991bb,
    xh: _0x55d17f,
    fb: _0x25a6ed,
    ud: _0xc83917,
    dl: _0x5e24ca,
    Xc: _0x2bc5ce,
    K: _0x19ae15,
    S: _0x376812,
    xd: _0x57acd0,
    sd: _0x51eb1f,
    re: _0x2140e1,
    vd: _0x2a6dc4,
    U: _0x41616b,
    N: _0x25dc6e,
    D: _0x11a91e,
    wd: _0x33b3ba,
    Yc: _0x2f0002,
    w: _0x4169b3,
    vb: _0x275070,
    zd: _0x2f68ba,
    d: _0x1f8fd3,
    el: _0x1c035e,
    R: _0x14c6fb,
    Y: _0x3d1666,
    Ck: _0x16b445,
    td: _0x2f248a,
    Ja: _0x36c49b,
    c: _0x4f137c,
    ob: _0x2c493e,
    Wc: _0xe4f950,
    f: _0x3cec49,
    Qi: _0x4f8d67,
    ml: _0x46786e,
    hd: _0x5441f7,
    Ri: _0x52c8fc,
    Pi: _0x3a0715,
    Ad: _0x202bc5,
    q: _0x419669,
    Ka: _0x2bb953,
    Xi: _0x9f105f,
    s: _0x3f8b9d,
    u: _0x2932ff,
    Ak: _0x96edea,
    y: _0x3cbfcf,
    E: _0x466849,
    O: _0x50f46a,
    Qc: _0x239aeb,
    ba: _0x2f2823,
    bd: _0x1ae8d3,
    le: _0x8c6fe7,
    me: _0x4217b0,
    Wd: _0x2f0191,
    Ue: _0x29d192,
    af: _0x29ea31,
    qe: _0x4995cb,
    Ze: _0x59c608,
    _e: _0x33e94b,
    Oe: _0x4ccb3d,
    Ve: _0x387f08,
    Be: _0x9d6ecc,
    fe: _0x567b2f,
    _d: _0x163293,
    ge: _0x3526d3,
    ze: _0x41c76a,
    Ee: _0x4e5496,
    He: _0x238f88,
    $e: _0x3714cd,
    ue: _0x56a1b9,
    Ye: _0x74e33f,
    Le: _0x1734d9,
    Xe: _0x5b520f,
    Qe: _0x43148b,
    bf: _0x3bea39,
    Xd: _0x1d2722,
    ce: _0x4b158a,
    De: _0x44bf49,
    Ge: _0x3ac45b,
    xe: _0x140e1c,
    Zd: _0x3cc26c,
    Pe: _0x2e7edc,
    Ae: _0x88f337,
    Ce: _0x1911bf,
    Ie: _0x88864d,
    h: _0x3e2961,
    cd: _0x1b70be,
    g: _0x56a5df,
    Yf: _0x5a4cb9,
    z: _0x151673,
    Vc: _0x4d3940,
    ll: _0x20b9b8,
    F: _0x49bfe6,
    L: _0xc3c535,
    m: _0x5c269b,
    dj: _0x55c2f9,
    Ma: _0xd90a67,
    ej: _0x1ae42a,
    Sc: _0x25dd52,
    _: _0x2c6557,
    Fk: _0x24d804,
    kl: _0x488625,
    J: _0x1823f0,
    H: _0x498161,
    Gk: _0xafd34b,
    e: _0xc1600c,
    fd: _0xe99304,
    gd: _0x51f8c7,
    qb: _0x5242a6,
    Ha: _0x2623f9,
    n: _0x32e2b5,
    Bk: _0x173b5f,
    te: _0xa7681e,
    Ia: _0x19adf2,
    Zc: _0x3fb525,
    r: _0x4c8ef4,
    t: _0x216db3,
    B: _0x499280,
    fj: _0x2bcd1d,
    cj: _0x180502,
    Q: _0x2771b8,
    pe: _0x5cfe40,
    I: _0x1217c5,
    Z: _0x49370d,
    Uc: _0x3818a0,
    Na: _0x73d291,
    yd: _0x538d65,
    $c: _0x5ef683,
    M: _0x31699a,
    ee: _0x5e570e,
    Se: _0x466f26,
    Me: _0x4b5dc1,
    ye: _0x358b35,
    Fe: _0x3d0859,
    We: _0x291f5c,
    Te: _0x5876ca,
    $d: _0x4132a9,
    oe: _0x506073,
    je: _0x57ff6e,
    Re: _0x1af684,
    Je: _0x43e2af,
    ie: _0x5ab199,
    Ke: _0x20b073,
    de: _0xb3ddc3,
    ne: _0x457957,
    ke: _0x16e398,
    ae: _0x36d8a7,
    be: _0x4045c9,
    k: _0x4b115a,
    wb: _0x53ef25,
    v: _0x3a41ab,
    Sa: _0x26cacc,
    Ta: _0x3af286,
    Oa: _0x2e7330,
    ma: _0x4286ec,
    yb: _0x34a90d
  };
  var _0x547492 = _0x4f75ae();
  var _0x650cae = _0x24391e.___wasm_call_ctors = function () {
    return (_0x650cae = _0x24391e.___wasm_call_ctors = _0x24391e.asm.rl).apply(null, arguments);
  };
  var _0x291ad7 = _0x24391e._ReleaseKeys = function () {
    return (_0x291ad7 = _0x24391e._ReleaseKeys = _0x24391e.asm.sl).apply(null, arguments);
  };
  var _0x4db00e = _0x24391e._SendMessageFloat = function () {
    return (_0x4db00e = _0x24391e._SendMessageFloat = _0x24391e.asm.tl).apply(null, arguments);
  };
  var _0x5ba8af = _0x24391e._SendMessageString = function () {
    return (_0x5ba8af = _0x24391e._SendMessageString = _0x24391e.asm.ul).apply(null, arguments);
  };
  var _0x5d9154 = _0x24391e._SendMessage = function () {
    return (_0x5d9154 = _0x24391e._SendMessage = _0x24391e.asm.vl).apply(null, arguments);
  };
  var _0x928fc6 = _0x24391e._SetFullscreen = function () {
    return (_0x928fc6 = _0x24391e._SetFullscreen = _0x24391e.asm.wl).apply(null, arguments);
  };
  var _0xe92da4 = _0x24391e._main = function () {
    return (_0xe92da4 = _0x24391e._main = _0x24391e.asm.xl).apply(null, arguments);
  };
  var _0x25512d = _0x24391e.___errno_location = function () {
    return (_0x25512d = _0x24391e.___errno_location = _0x24391e.asm.yl).apply(null, arguments);
  };
  var _0x4c5302 = _0x24391e._htonl = function () {
    return (_0x4c5302 = _0x24391e._htonl = _0x24391e.asm.zl).apply(null, arguments);
  };
  var _0x150ea4 = _0x24391e._htons = function () {
    return (_0x150ea4 = _0x24391e._htons = _0x24391e.asm.Al).apply(null, arguments);
  };
  var _0x2253b0 = _0x24391e._ntohs = function () {
    return (_0x2253b0 = _0x24391e._ntohs = _0x24391e.asm.Bl).apply(null, arguments);
  };
  var _0x173d77 = _0x24391e.__get_tzname = function () {
    return (_0x173d77 = _0x24391e.__get_tzname = _0x24391e.asm.Cl).apply(null, arguments);
  };
  var _0x55a096 = _0x24391e.__get_daylight = function () {
    return (_0x55a096 = _0x24391e.__get_daylight = _0x24391e.asm.Dl).apply(null, arguments);
  };
  var _0x4ce763 = _0x24391e.__get_timezone = function () {
    return (_0x4ce763 = _0x24391e.__get_timezone = _0x24391e.asm.El).apply(null, arguments);
  };
  var _0x27ee1f = _0x24391e.stackSave = function () {
    return (_0x27ee1f = _0x24391e.stackSave = _0x24391e.asm.Fl).apply(null, arguments);
  };
  var _0x1df486 = _0x24391e.stackRestore = function () {
    return (_0x1df486 = _0x24391e.stackRestore = _0x24391e.asm.Gl).apply(null, arguments);
  };
  var _0xbe2651 = _0x24391e.stackAlloc = function () {
    return (_0xbe2651 = _0x24391e.stackAlloc = _0x24391e.asm.Hl).apply(null, arguments);
  };
  var _0x225d08 = _0x24391e._setThrew = function () {
    return (_0x225d08 = _0x24391e._setThrew = _0x24391e.asm.Il).apply(null, arguments);
  };
  var _0x176592 = _0x24391e.___cxa_can_catch = function () {
    return (_0x176592 = _0x24391e.___cxa_can_catch = _0x24391e.asm.Jl).apply(null, arguments);
  };
  var _0x1888ca = _0x24391e.___cxa_is_pointer_type = function () {
    return (_0x1888ca = _0x24391e.___cxa_is_pointer_type = _0x24391e.asm.Kl).apply(null, arguments);
  };
  var _0x25ed17 = _0x24391e._malloc = function () {
    return (_0x25ed17 = _0x24391e._malloc = _0x24391e.asm.Ll).apply(null, arguments);
  };
  var _0xc27a35 = _0x24391e._free = function () {
    return (_0xc27a35 = _0x24391e._free = _0x24391e.asm.Ml).apply(null, arguments);
  };
  var _0x2a72f5 = _0x24391e._memalign = function () {
    return (_0x2a72f5 = _0x24391e._memalign = _0x24391e.asm.Nl).apply(null, arguments);
  };
  var _0xbf679d = _0x24391e._memset = function () {
    return (_0xbf679d = _0x24391e._memset = _0x24391e.asm.Ol).apply(null, arguments);
  };
  var _0x3cbd81 = _0x24391e._strlen = function () {
    return (_0x3cbd81 = _0x24391e._strlen = _0x24391e.asm.Pl).apply(null, arguments);
  };
  var _0x393342 = _0x24391e.dynCall_iidiiii = function () {
    return (_0x393342 = _0x24391e.dynCall_iidiiii = _0x24391e.asm.Rl).apply(null, arguments);
  };
  var _0x55ba98 = _0x24391e.dynCall_vii = function () {
    return (_0x55ba98 = _0x24391e.dynCall_vii = _0x24391e.asm.Sl).apply(null, arguments);
  };
  var _0x9d1641 = _0x24391e.dynCall_iii = function () {
    return (_0x9d1641 = _0x24391e.dynCall_iii = _0x24391e.asm.Tl).apply(null, arguments);
  };
  var _0x5a9657 = _0x24391e.dynCall_ii = function () {
    return (_0x5a9657 = _0x24391e.dynCall_ii = _0x24391e.asm.Ul).apply(null, arguments);
  };
  var _0x348186 = _0x24391e.dynCall_iiii = function () {
    return (_0x348186 = _0x24391e.dynCall_iiii = _0x24391e.asm.Vl).apply(null, arguments);
  };
  var _0x11e9fb = _0x24391e.dynCall_jiji = function () {
    return (_0x11e9fb = _0x24391e.dynCall_jiji = _0x24391e.asm.Wl).apply(null, arguments);
  };
  var _0xe5b92e = _0x24391e.dynCall_vi = function () {
    return (_0xe5b92e = _0x24391e.dynCall_vi = _0x24391e.asm.Xl).apply(null, arguments);
  };
  var _0x5bf0d7 = _0x24391e.dynCall_iiiii = function () {
    return (_0x5bf0d7 = _0x24391e.dynCall_iiiii = _0x24391e.asm.Yl).apply(null, arguments);
  };
  var _0x4fa5fa = _0x24391e.dynCall_viii = function () {
    return (_0x4fa5fa = _0x24391e.dynCall_viii = _0x24391e.asm.Zl).apply(null, arguments);
  };
  var _0x3ded6d = _0x24391e.dynCall_viiiiii = function () {
    return (_0x3ded6d = _0x24391e.dynCall_viiiiii = _0x24391e.asm._l).apply(null, arguments);
  };
  var _0x352f8e = _0x24391e.dynCall_viiiii = function () {
    return (_0x352f8e = _0x24391e.dynCall_viiiii = _0x24391e.asm.$l).apply(null, arguments);
  };
  var _0x1e2588 = _0x24391e.dynCall_viiii = function () {
    return (_0x1e2588 = _0x24391e.dynCall_viiii = _0x24391e.asm.am).apply(null, arguments);
  };
  var _0x13dc9d = _0x24391e.dynCall_iiiiii = function () {
    return (_0x13dc9d = _0x24391e.dynCall_iiiiii = _0x24391e.asm.bm).apply(null, arguments);
  };
  var _0x25e433 = _0x24391e.dynCall_iiij = function () {
    return (_0x25e433 = _0x24391e.dynCall_iiij = _0x24391e.asm.cm).apply(null, arguments);
  };
  var _0x3fcf98 = _0x24391e.dynCall_v = function () {
    return (_0x3fcf98 = _0x24391e.dynCall_v = _0x24391e.asm.dm).apply(null, arguments);
  };
  var _0x42fc8a = _0x24391e.dynCall_i = function () {
    return (_0x42fc8a = _0x24391e.dynCall_i = _0x24391e.asm.em).apply(null, arguments);
  };
  var _0x1a07ea = _0x24391e.dynCall_iiiiiiii = function () {
    return (_0x1a07ea = _0x24391e.dynCall_iiiiiiii = _0x24391e.asm.fm).apply(null, arguments);
  };
  var _0x3833ff = _0x24391e.dynCall_iiijiii = function () {
    return (_0x3833ff = _0x24391e.dynCall_iiijiii = _0x24391e.asm.gm).apply(null, arguments);
  };
  var _0x274692 = _0x24391e.dynCall_iij = function () {
    return (_0x274692 = _0x24391e.dynCall_iij = _0x24391e.asm.hm).apply(null, arguments);
  };
  var _0x4c5496 = _0x24391e.dynCall_iiiiiii = function () {
    return (_0x4c5496 = _0x24391e.dynCall_iiiiiii = _0x24391e.asm.im).apply(null, arguments);
  };
  var _0x49e71b = _0x24391e.dynCall_jii = function () {
    return (_0x49e71b = _0x24391e.dynCall_jii = _0x24391e.asm.jm).apply(null, arguments);
  };
  var _0x3d15bb = _0x24391e.dynCall_viiiiiii = function () {
    return (_0x3d15bb = _0x24391e.dynCall_viiiiiii = _0x24391e.asm.km).apply(null, arguments);
  };
  var _0x5eae95 = _0x24391e.dynCall_viiji = function () {
    return (_0x5eae95 = _0x24391e.dynCall_viiji = _0x24391e.asm.lm).apply(null, arguments);
  };
  var _0x1a49db = _0x24391e.dynCall_fii = function () {
    return (_0x1a49db = _0x24391e.dynCall_fii = _0x24391e.asm.mm).apply(null, arguments);
  };
  var _0x2aed64 = _0x24391e.dynCall_viifi = function () {
    return (_0x2aed64 = _0x24391e.dynCall_viifi = _0x24391e.asm.nm).apply(null, arguments);
  };
  var _0x178ba6 = _0x24391e.dynCall_viiff = function () {
    return (_0x178ba6 = _0x24391e.dynCall_viiff = _0x24391e.asm.om).apply(null, arguments);
  };
  var _0xce1885 = _0x24391e.dynCall_jiii = function () {
    return (_0xce1885 = _0x24391e.dynCall_jiii = _0x24391e.asm.pm).apply(null, arguments);
  };
  var _0x539530 = _0x24391e.dynCall_j = function () {
    return (_0x539530 = _0x24391e.dynCall_j = _0x24391e.asm.qm).apply(null, arguments);
  };
  var _0x30e526 = _0x24391e.dynCall_ji = function () {
    return (_0x30e526 = _0x24391e.dynCall_ji = _0x24391e.asm.rm).apply(null, arguments);
  };
  var _0x1b663a = _0x24391e.dynCall_jijj = function () {
    return (_0x1b663a = _0x24391e.dynCall_jijj = _0x24391e.asm.sm).apply(null, arguments);
  };
  var _0x53379b = _0x24391e.dynCall_fiiffi = function () {
    return (_0x53379b = _0x24391e.dynCall_fiiffi = _0x24391e.asm.tm).apply(null, arguments);
  };
  var _0x112a9a = _0x24391e.dynCall_viiififii = function () {
    return (_0x112a9a = _0x24391e.dynCall_viiififii = _0x24391e.asm.um).apply(null, arguments);
  };
  var _0x1fb510 = _0x24391e.dynCall_viiiiiiiiiiii = function () {
    return (_0x1fb510 = _0x24391e.dynCall_viiiiiiiiiiii = _0x24391e.asm.vm).apply(null, arguments);
  };
  var _0xa70c6e = _0x24391e.dynCall_viiiiiiiiiiiii = function () {
    return (_0xa70c6e = _0x24391e.dynCall_viiiiiiiiiiiii = _0x24391e.asm.wm).apply(null, arguments);
  };
  var _0x30727b = _0x24391e.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x30727b = _0x24391e.dynCall_viiiiiiiiiiiiii = _0x24391e.asm.xm).apply(null, arguments);
  };
  var _0x2a2fd8 = _0x24391e.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x2a2fd8 = _0x24391e.dynCall_viiiiiiiiiiiiiii = _0x24391e.asm.ym).apply(null, arguments);
  };
  var _0x304ee0 = _0x24391e.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x304ee0 = _0x24391e.dynCall_viiiiiiiiiiiiiiii = _0x24391e.asm.zm).apply(null, arguments);
  };
  var _0x31e150 = _0x24391e.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x31e150 = _0x24391e.dynCall_viiiiiiiiiiiiiiiii = _0x24391e.asm.Am).apply(null, arguments);
  };
  var _0x4ae193 = _0x24391e.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x4ae193 = _0x24391e.dynCall_viiiiiiiiiiiiiiiiii = _0x24391e.asm.Bm).apply(null, arguments);
  };
  var _0x3a9c5a = _0x24391e.dynCall_viidi = function () {
    return (_0x3a9c5a = _0x24391e.dynCall_viidi = _0x24391e.asm.Cm).apply(null, arguments);
  };
  var _0x5b01e3 = _0x24391e.dynCall_viiidi = function () {
    return (_0x5b01e3 = _0x24391e.dynCall_viiidi = _0x24391e.asm.Dm).apply(null, arguments);
  };
  var _0x2e8fe6 = _0x24391e.dynCall_viiiji = function () {
    return (_0x2e8fe6 = _0x24391e.dynCall_viiiji = _0x24391e.asm.Em).apply(null, arguments);
  };
  var _0x13466d = _0x24391e.dynCall_viiifi = function () {
    return (_0x13466d = _0x24391e.dynCall_viiifi = _0x24391e.asm.Fm).apply(null, arguments);
  };
  var _0x3ba00a = _0x24391e.dynCall_vifffi = function () {
    return (_0x3ba00a = _0x24391e.dynCall_vifffi = _0x24391e.asm.Gm).apply(null, arguments);
  };
  var _0x5f2a88 = _0x24391e.dynCall_viidiji = function () {
    return (_0x5f2a88 = _0x24391e.dynCall_viidiji = _0x24391e.asm.Hm).apply(null, arguments);
  };
  var _0x57398b = _0x24391e.dynCall_viidjii = function () {
    return (_0x57398b = _0x24391e.dynCall_viidjii = _0x24391e.asm.Im).apply(null, arguments);
  };
  var _0x249aa6 = _0x24391e.dynCall_vijijii = function () {
    return (_0x249aa6 = _0x24391e.dynCall_vijijii = _0x24391e.asm.Jm).apply(null, arguments);
  };
  var _0x4d3687 = _0x24391e.dynCall_viiiiiiii = function () {
    return (_0x4d3687 = _0x24391e.dynCall_viiiiiiii = _0x24391e.asm.Km).apply(null, arguments);
  };
  var _0x55854a = _0x24391e.dynCall_viiiiiiiii = function () {
    return (_0x55854a = _0x24391e.dynCall_viiiiiiiii = _0x24391e.asm.Lm).apply(null, arguments);
  };
  var _0x36b4b5 = _0x24391e.dynCall_viiiiiiiiii = function () {
    return (_0x36b4b5 = _0x24391e.dynCall_viiiiiiiiii = _0x24391e.asm.Mm).apply(null, arguments);
  };
  var _0x10880b = _0x24391e.dynCall_viiiiiiiiiii = function () {
    return (_0x10880b = _0x24391e.dynCall_viiiiiiiiiii = _0x24391e.asm.Nm).apply(null, arguments);
  };
  var _0x34781f = _0x24391e.dynCall_jiiijii = function () {
    return (_0x34781f = _0x24391e.dynCall_jiiijii = _0x24391e.asm.Om).apply(null, arguments);
  };
  var _0x1ab67e = _0x24391e.dynCall_viiijiii = function () {
    return (_0x1ab67e = _0x24391e.dynCall_viiijiii = _0x24391e.asm.Pm).apply(null, arguments);
  };
  var _0x5567c9 = _0x24391e.dynCall_vijii = function () {
    return (_0x5567c9 = _0x24391e.dynCall_vijii = _0x24391e.asm.Qm).apply(null, arguments);
  };
  var _0x2a1deb = _0x24391e.dynCall_iijji = function () {
    return (_0x2a1deb = _0x24391e.dynCall_iijji = _0x24391e.asm.Rm).apply(null, arguments);
  };
  var _0x3d2d87 = _0x24391e.dynCall_iiddi = function () {
    return (_0x3d2d87 = _0x24391e.dynCall_iiddi = _0x24391e.asm.Sm).apply(null, arguments);
  };
  var _0x24a4b0 = _0x24391e.dynCall_iiffi = function () {
    return (_0x24a4b0 = _0x24391e.dynCall_iiffi = _0x24391e.asm.Tm).apply(null, arguments);
  };
  var _0x229062 = _0x24391e.dynCall_viiffi = function () {
    return (_0x229062 = _0x24391e.dynCall_viiffi = _0x24391e.asm.Um).apply(null, arguments);
  };
  var _0x5dc8d7 = _0x24391e.dynCall_diii = function () {
    return (_0x5dc8d7 = _0x24391e.dynCall_diii = _0x24391e.asm.Vm).apply(null, arguments);
  };
  var _0x5a898f = _0x24391e.dynCall_dii = function () {
    return (_0x5a898f = _0x24391e.dynCall_dii = _0x24391e.asm.Wm).apply(null, arguments);
  };
  var _0x47d30b = _0x24391e.dynCall_ifi = function () {
    return (_0x47d30b = _0x24391e.dynCall_ifi = _0x24391e.asm.Xm).apply(null, arguments);
  };
  var _0x3ccb5c = _0x24391e.dynCall_idi = function () {
    return (_0x3ccb5c = _0x24391e.dynCall_idi = _0x24391e.asm.Ym).apply(null, arguments);
  };
  var _0x9db5e = _0x24391e.dynCall_jiiii = function () {
    return (_0x9db5e = _0x24391e.dynCall_jiiii = _0x24391e.asm.Zm).apply(null, arguments);
  };
  var _0x1e789e = _0x24391e.dynCall_iiiiji = function () {
    return (_0x1e789e = _0x24391e.dynCall_iiiiji = _0x24391e.asm._m).apply(null, arguments);
  };
  var _0xb8aa81 = _0x24391e.dynCall_fiii = function () {
    return (_0xb8aa81 = _0x24391e.dynCall_fiii = _0x24391e.asm.$m).apply(null, arguments);
  };
  var _0x561bc4 = _0x24391e.dynCall_vidi = function () {
    return (_0x561bc4 = _0x24391e.dynCall_vidi = _0x24391e.asm.an).apply(null, arguments);
  };
  var _0x5bed8c = _0x24391e.dynCall_viji = function () {
    return (_0x5bed8c = _0x24391e.dynCall_viji = _0x24391e.asm.bn).apply(null, arguments);
  };
  var _0x37d853 = _0x24391e.dynCall_vifi = function () {
    return (_0x37d853 = _0x24391e.dynCall_vifi = _0x24391e.asm.cn).apply(null, arguments);
  };
  var _0x121b23 = _0x24391e.dynCall_fffi = function () {
    return (_0x121b23 = _0x24391e.dynCall_fffi = _0x24391e.asm.dn).apply(null, arguments);
  };
  var _0x17239c = _0x24391e.dynCall_ijji = function () {
    return (_0x17239c = _0x24391e.dynCall_ijji = _0x24391e.asm.en).apply(null, arguments);
  };
  var _0x30ec38 = _0x24391e.dynCall_jji = function () {
    return (_0x30ec38 = _0x24391e.dynCall_jji = _0x24391e.asm.fn).apply(null, arguments);
  };
  var _0x989d7c = _0x24391e.dynCall_jjji = function () {
    return (_0x989d7c = _0x24391e.dynCall_jjji = _0x24391e.asm.gn).apply(null, arguments);
  };
  var _0x35d470 = _0x24391e.dynCall_dddi = function () {
    return (_0x35d470 = _0x24391e.dynCall_dddi = _0x24391e.asm.hn).apply(null, arguments);
  };
  var _0x21707f = _0x24391e.dynCall_diiii = function () {
    return (_0x21707f = _0x24391e.dynCall_diiii = _0x24391e.asm.jn).apply(null, arguments);
  };
  var _0x313a21 = _0x24391e.dynCall_iidi = function () {
    return (_0x313a21 = _0x24391e.dynCall_iidi = _0x24391e.asm.kn).apply(null, arguments);
  };
  var _0x10d236 = _0x24391e.dynCall_iifi = function () {
    return (_0x10d236 = _0x24391e.dynCall_iifi = _0x24391e.asm.ln).apply(null, arguments);
  };
  var _0xadb496 = _0x24391e.dynCall_vijiiii = function () {
    return (_0xadb496 = _0x24391e.dynCall_vijiiii = _0x24391e.asm.mn).apply(null, arguments);
  };
  var _0x3adcdc = _0x24391e.dynCall_iji = function () {
    return (_0x3adcdc = _0x24391e.dynCall_iji = _0x24391e.asm.nn).apply(null, arguments);
  };
  var _0x54b547 = _0x24391e.dynCall_iiiiiiiii = function () {
    return (_0x54b547 = _0x24391e.dynCall_iiiiiiiii = _0x24391e.asm.on).apply(null, arguments);
  };
  var _0x4cefb6 = _0x24391e.dynCall_iiiiiiiiii = function () {
    return (_0x4cefb6 = _0x24391e.dynCall_iiiiiiiiii = _0x24391e.asm.pn).apply(null, arguments);
  };
  var _0x588dfd = _0x24391e.dynCall_jjii = function () {
    return (_0x588dfd = _0x24391e.dynCall_jjii = _0x24391e.asm.qn).apply(null, arguments);
  };
  var _0x312ee = _0x24391e.dynCall_iiji = function () {
    return (_0x312ee = _0x24391e.dynCall_iiji = _0x24391e.asm.rn).apply(null, arguments);
  };
  var _0x3fba87 = _0x24391e.dynCall_iijiii = function () {
    return (_0x3fba87 = _0x24391e.dynCall_iijiii = _0x24391e.asm.sn).apply(null, arguments);
  };
  var _0x2f30b5 = _0x24391e.dynCall_iiiiidi = function () {
    return (_0x2f30b5 = _0x24391e.dynCall_iiiiidi = _0x24391e.asm.tn).apply(null, arguments);
  };
  var _0x2a8e0b = _0x24391e.dynCall_diiid = function () {
    return (_0x2a8e0b = _0x24391e.dynCall_diiid = _0x24391e.asm.un).apply(null, arguments);
  };
  var _0x9841cf = _0x24391e.dynCall_jiiij = function () {
    return (_0x9841cf = _0x24391e.dynCall_jiiij = _0x24391e.asm.vn).apply(null, arguments);
  };
  var _0x77e8aa = _0x24391e.dynCall_fiiif = function () {
    return (_0x77e8aa = _0x24391e.dynCall_fiiif = _0x24391e.asm.wn).apply(null, arguments);
  };
  var _0x58f1d6 = _0x24391e.dynCall_ddiii = function () {
    return (_0x58f1d6 = _0x24391e.dynCall_ddiii = _0x24391e.asm.xn).apply(null, arguments);
  };
  var _0x24e2ba = _0x24391e.dynCall_jiiji = function () {
    return (_0x24e2ba = _0x24391e.dynCall_jiiji = _0x24391e.asm.yn).apply(null, arguments);
  };
  var _0x45c359 = _0x24391e.dynCall_ijiii = function () {
    return (_0x45c359 = _0x24391e.dynCall_ijiii = _0x24391e.asm.zn).apply(null, arguments);
  };
  var _0x2e4163 = _0x24391e.dynCall_viiij = function () {
    return (_0x2e4163 = _0x24391e.dynCall_viiij = _0x24391e.asm.An).apply(null, arguments);
  };
  var _0x30c91d = _0x24391e.dynCall_vifii = function () {
    return (_0x30c91d = _0x24391e.dynCall_vifii = _0x24391e.asm.Bn).apply(null, arguments);
  };
  var _0x36d70f = _0x24391e.dynCall_viij = function () {
    return (_0x36d70f = _0x24391e.dynCall_viij = _0x24391e.asm.Cn).apply(null, arguments);
  };
  var _0x3b8434 = _0x24391e.dynCall_iijii = function () {
    return (_0x3b8434 = _0x24391e.dynCall_iijii = _0x24391e.asm.Dn).apply(null, arguments);
  };
  var _0x4a741b = _0x24391e.dynCall_viiijj = function () {
    return (_0x4a741b = _0x24391e.dynCall_viiijj = _0x24391e.asm.En).apply(null, arguments);
  };
  var _0x390fa2 = _0x24391e.dynCall_jidi = function () {
    return (_0x390fa2 = _0x24391e.dynCall_jidi = _0x24391e.asm.Fn).apply(null, arguments);
  };
  var _0x1f2519 = _0x24391e.dynCall_viifii = function () {
    return (_0x1f2519 = _0x24391e.dynCall_viifii = _0x24391e.asm.Gn).apply(null, arguments);
  };
  var _0x29f892 = _0x24391e.dynCall_iiiiffi = function () {
    return (_0x29f892 = _0x24391e.dynCall_iiiiffi = _0x24391e.asm.Hn).apply(null, arguments);
  };
  var _0x3f125f = _0x24391e.dynCall_viiiiffi = function () {
    return (_0x3f125f = _0x24391e.dynCall_viiiiffi = _0x24391e.asm.In).apply(null, arguments);
  };
  var _0x3624fb = _0x24391e.dynCall_viiiffi = function () {
    return (_0x3624fb = _0x24391e.dynCall_viiiffi = _0x24391e.asm.Jn).apply(null, arguments);
  };
  var _0x4ae572 = _0x24391e.dynCall_iiiiiiiiiiiii = function () {
    return (_0x4ae572 = _0x24391e.dynCall_iiiiiiiiiiiii = _0x24391e.asm.Kn).apply(null, arguments);
  };
  var _0x16e489 = _0x24391e.dynCall_viiiifiii = function () {
    return (_0x16e489 = _0x24391e.dynCall_viiiifiii = _0x24391e.asm.Ln).apply(null, arguments);
  };
  var _0x280ea5 = _0x24391e.dynCall_viiifffiiiiii = function () {
    return (_0x280ea5 = _0x24391e.dynCall_viiifffiiiiii = _0x24391e.asm.Mn).apply(null, arguments);
  };
  var _0x264269 = _0x24391e.dynCall_viiffffffiiiiifi = function () {
    return (_0x264269 = _0x24391e.dynCall_viiffffffiiiiifi = _0x24391e.asm.Nn).apply(null, arguments);
  };
  var _0x27031c = _0x24391e.dynCall_viffi = function () {
    return (_0x27031c = _0x24391e.dynCall_viffi = _0x24391e.asm.On).apply(null, arguments);
  };
  var _0x6b62ab = _0x24391e.dynCall_viiifffi = function () {
    return (_0x6b62ab = _0x24391e.dynCall_viiifffi = _0x24391e.asm.Pn).apply(null, arguments);
  };
  var _0x20dc72 = _0x24391e.dynCall_viiffiiiiiiiiiiiii = function () {
    return (_0x20dc72 = _0x24391e.dynCall_viiffiiiiiiiiiiiii = _0x24391e.asm.Qn).apply(null, arguments);
  };
  var _0x4ab408 = _0x24391e.dynCall_viiifii = function () {
    return (_0x4ab408 = _0x24391e.dynCall_viiifii = _0x24391e.asm.Rn).apply(null, arguments);
  };
  var _0x4932fa = _0x24391e.dynCall_fi = function () {
    return (_0x4932fa = _0x24391e.dynCall_fi = _0x24391e.asm.Sn).apply(null, arguments);
  };
  var _0x10a4dd = _0x24391e.dynCall_viiiifiiifiiiiiiii = function () {
    return (_0x10a4dd = _0x24391e.dynCall_viiiifiiifiiiiiiii = _0x24391e.asm.Tn).apply(null, arguments);
  };
  var _0x47857a = _0x24391e.dynCall_vfi = function () {
    return (_0x47857a = _0x24391e.dynCall_vfi = _0x24391e.asm.Un).apply(null, arguments);
  };
  var _0x5972f1 = _0x24391e.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x5972f1 = _0x24391e.dynCall_iiiiiiiiiiiiiiiiiii = _0x24391e.asm.Vn).apply(null, arguments);
  };
  var _0x3ef8f6 = _0x24391e.dynCall_iifii = function () {
    return (_0x3ef8f6 = _0x24391e.dynCall_iifii = _0x24391e.asm.Wn).apply(null, arguments);
  };
  var _0x5475a9 = _0x24391e.dynCall_iiffii = function () {
    return (_0x5475a9 = _0x24391e.dynCall_iiffii = _0x24391e.asm.Xn).apply(null, arguments);
  };
  var _0x34466a = _0x24391e.dynCall_viffffi = function () {
    return (_0x34466a = _0x24391e.dynCall_viffffi = _0x24391e.asm.Yn).apply(null, arguments);
  };
  var _0xa06227 = _0x24391e.dynCall_iiffifiiii = function () {
    return (_0xa06227 = _0x24391e.dynCall_iiffifiiii = _0x24391e.asm.Zn).apply(null, arguments);
  };
  var _0x279cdc = _0x24391e.dynCall_jdi = function () {
    return (_0x279cdc = _0x24391e.dynCall_jdi = _0x24391e.asm._n).apply(null, arguments);
  };
  var _0x3a8c18 = _0x24391e.dynCall_vifffiii = function () {
    return (_0x3a8c18 = _0x24391e.dynCall_vifffiii = _0x24391e.asm.$n).apply(null, arguments);
  };
  var _0x5c883f = _0x24391e.dynCall_iiiifiiiiiiiii = function () {
    return (_0x5c883f = _0x24391e.dynCall_iiiifiiiiiiiii = _0x24391e.asm.ao).apply(null, arguments);
  };
  var _0x41c7d3 = _0x24391e.dynCall_viiiidi = function () {
    return (_0x41c7d3 = _0x24391e.dynCall_viiiidi = _0x24391e.asm.bo).apply(null, arguments);
  };
  var _0x136bb6 = _0x24391e.dynCall_iiiiiiidii = function () {
    return (_0x136bb6 = _0x24391e.dynCall_iiiiiiidii = _0x24391e.asm.co).apply(null, arguments);
  };
  var _0x4fa658 = _0x24391e.dynCall_viiiidij = function () {
    return (_0x4fa658 = _0x24391e.dynCall_viiiidij = _0x24391e.asm.eo).apply(null, arguments);
  };
  var _0x1f6705 = _0x24391e.dynCall_dji = function () {
    return (_0x1f6705 = _0x24391e.dynCall_dji = _0x24391e.asm.fo).apply(null, arguments);
  };
  var _0x4e934e = _0x24391e.dynCall_viffiiiiiiiiiiiii = function () {
    return (_0x4e934e = _0x24391e.dynCall_viffiiiiiiiiiiiii = _0x24391e.asm.go).apply(null, arguments);
  };
  var _0x5a723c = _0x24391e.dynCall_iiiifii = function () {
    return (_0x5a723c = _0x24391e.dynCall_iiiifii = _0x24391e.asm.ho).apply(null, arguments);
  };
  var _0x5b4399 = _0x24391e.dynCall_iiifii = function () {
    return (_0x5b4399 = _0x24391e.dynCall_iiifii = _0x24391e.asm.io).apply(null, arguments);
  };
  var _0x44d9d1 = _0x24391e.dynCall_viiiifii = function () {
    return (_0x44d9d1 = _0x24391e.dynCall_viiiifii = _0x24391e.asm.jo).apply(null, arguments);
  };
  var _0x357520 = _0x24391e.dynCall_iiiiff = function () {
    return (_0x357520 = _0x24391e.dynCall_iiiiff = _0x24391e.asm.ko).apply(null, arguments);
  };
  var _0x51074c = _0x24391e.dynCall_viiiifi = function () {
    return (_0x51074c = _0x24391e.dynCall_viiiifi = _0x24391e.asm.lo).apply(null, arguments);
  };
  var _0x4b2d2a = _0x24391e.dynCall_fiiii = function () {
    return (_0x4b2d2a = _0x24391e.dynCall_fiiii = _0x24391e.asm.mo).apply(null, arguments);
  };
  var _0x599628 = _0x24391e.dynCall_di = function () {
    return (_0x599628 = _0x24391e.dynCall_di = _0x24391e.asm.no).apply(null, arguments);
  };
  var _0x345e41 = _0x24391e.dynCall_iiiji = function () {
    return (_0x345e41 = _0x24391e.dynCall_iiiji = _0x24391e.asm.oo).apply(null, arguments);
  };
  var _0x33f07f = _0x24391e.dynCall_viiiiiiifiifiii = function () {
    return (_0x33f07f = _0x24391e.dynCall_viiiiiiifiifiii = _0x24391e.asm.po).apply(null, arguments);
  };
  var _0xde0453 = _0x24391e.dynCall_viiiiiiifddfiii = function () {
    return (_0xde0453 = _0x24391e.dynCall_viiiiiiifddfiii = _0x24391e.asm.qo).apply(null, arguments);
  };
  var _0x20422f = _0x24391e.dynCall_viiiiiiifjjfiii = function () {
    return (_0x20422f = _0x24391e.dynCall_viiiiiiifjjfiii = _0x24391e.asm.ro).apply(null, arguments);
  };
  var _0xba9ff5 = _0x24391e.dynCall_viif = function () {
    return (_0xba9ff5 = _0x24391e.dynCall_viif = _0x24391e.asm.so).apply(null, arguments);
  };
  var _0x250464 = _0x24391e.dynCall_viidii = function () {
    return (_0x250464 = _0x24391e.dynCall_viidii = _0x24391e.asm.to).apply(null, arguments);
  };
  var _0x5e3afc = _0x24391e.dynCall_vidiii = function () {
    return (_0x5e3afc = _0x24391e.dynCall_vidiii = _0x24391e.asm.uo).apply(null, arguments);
  };
  var _0x5329e5 = _0x24391e.dynCall_viiddi = function () {
    return (_0x5329e5 = _0x24391e.dynCall_viiddi = _0x24391e.asm.vo).apply(null, arguments);
  };
  var _0x9dcec5 = _0x24391e.dynCall_fiffffi = function () {
    return (_0x9dcec5 = _0x24391e.dynCall_fiffffi = _0x24391e.asm.wo).apply(null, arguments);
  };
  var _0x23a096 = _0x24391e.dynCall_viiiiiiiffffiii = function () {
    return (_0x23a096 = _0x24391e.dynCall_viiiiiiiffffiii = _0x24391e.asm.xo).apply(null, arguments);
  };
  var _0x4b5a26 = _0x24391e.dynCall_iiifi = function () {
    return (_0x4b5a26 = _0x24391e.dynCall_iiifi = _0x24391e.asm.yo).apply(null, arguments);
  };
  var _0x4ec60e = _0x24391e.dynCall_viiiiiiiiifi = function () {
    return (_0x4ec60e = _0x24391e.dynCall_viiiiiiiiifi = _0x24391e.asm.zo).apply(null, arguments);
  };
  var _0x3ee7e5 = _0x24391e.dynCall_iiiifi = function () {
    return (_0x3ee7e5 = _0x24391e.dynCall_iiiifi = _0x24391e.asm.Ao).apply(null, arguments);
  };
  var _0x49f2bb = _0x24391e.dynCall_viijiiijiiii = function () {
    return (_0x49f2bb = _0x24391e.dynCall_viijiiijiiii = _0x24391e.asm.Bo).apply(null, arguments);
  };
  var _0x52dfac = _0x24391e.dynCall_iiiiij = function () {
    return (_0x52dfac = _0x24391e.dynCall_iiiiij = _0x24391e.asm.Co).apply(null, arguments);
  };
  var _0x3d7bf6 = _0x24391e.dynCall_vijjji = function () {
    return (_0x3d7bf6 = _0x24391e.dynCall_vijjji = _0x24391e.asm.Do).apply(null, arguments);
  };
  var _0x16d8fc = _0x24391e.dynCall_iiiiiiiiiji = function () {
    return (_0x16d8fc = _0x24391e.dynCall_iiiiiiiiiji = _0x24391e.asm.Eo).apply(null, arguments);
  };
  var _0x5a1229 = _0x24391e.dynCall_vji = function () {
    return (_0x5a1229 = _0x24391e.dynCall_vji = _0x24391e.asm.Fo).apply(null, arguments);
  };
  var _0x4960d3 = _0x24391e.dynCall_viijji = function () {
    return (_0x4960d3 = _0x24391e.dynCall_viijji = _0x24391e.asm.Go).apply(null, arguments);
  };
  var _0x3f6ae5 = _0x24391e.dynCall_vijiii = function () {
    return (_0x3f6ae5 = _0x24391e.dynCall_vijiii = _0x24391e.asm.Ho).apply(null, arguments);
  };
  var _0x39c996 = _0x24391e.dynCall_iiijii = function () {
    return (_0x39c996 = _0x24391e.dynCall_iiijii = _0x24391e.asm.Io).apply(null, arguments);
  };
  var _0x6b47a0 = _0x24391e.dynCall_iijiiii = function () {
    return (_0x6b47a0 = _0x24391e.dynCall_iijiiii = _0x24391e.asm.Jo).apply(null, arguments);
  };
  var _0x67613f = _0x24391e.dynCall_jijiii = function () {
    return (_0x67613f = _0x24391e.dynCall_jijiii = _0x24391e.asm.Ko).apply(null, arguments);
  };
  var _0x39382e = _0x24391e.dynCall_viijii = function () {
    return (_0x39382e = _0x24391e.dynCall_viijii = _0x24391e.asm.Lo).apply(null, arguments);
  };
  var _0x1bdd66 = _0x24391e.dynCall_iijiiiiii = function () {
    return (_0x1bdd66 = _0x24391e.dynCall_iijiiiiii = _0x24391e.asm.Mo).apply(null, arguments);
  };
  var _0x34651f = _0x24391e.dynCall_iijjiiiiii = function () {
    return (_0x34651f = _0x24391e.dynCall_iijjiiiiii = _0x24391e.asm.No).apply(null, arguments);
  };
  var _0x463fd4 = _0x24391e.dynCall_iiiijjii = function () {
    return (_0x463fd4 = _0x24391e.dynCall_iiiijjii = _0x24391e.asm.Oo).apply(null, arguments);
  };
  var _0x1fc86f = _0x24391e.dynCall_viiiijiii = function () {
    return (_0x1fc86f = _0x24391e.dynCall_viiiijiii = _0x24391e.asm.Po).apply(null, arguments);
  };
  var _0x5c14f0 = _0x24391e.dynCall_iiiiiiiiiii = function () {
    return (_0x5c14f0 = _0x24391e.dynCall_iiiiiiiiiii = _0x24391e.asm.Qo).apply(null, arguments);
  };
  var _0x399782 = _0x24391e.dynCall_iiiiiiiiiiii = function () {
    return (_0x399782 = _0x24391e.dynCall_iiiiiiiiiiii = _0x24391e.asm.Ro).apply(null, arguments);
  };
  var _0x62029b = _0x24391e.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x62029b = _0x24391e.dynCall_iiiiiiiiiiiiii = _0x24391e.asm.So).apply(null, arguments);
  };
  var _0x30277f = _0x24391e.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x30277f = _0x24391e.dynCall_iiiiiiiiiiiiiii = _0x24391e.asm.To).apply(null, arguments);
  };
  var _0x5480a9 = _0x24391e.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x5480a9 = _0x24391e.dynCall_iiiiiiiiiiiiiiii = _0x24391e.asm.Uo).apply(null, arguments);
  };
  var _0x24e255 = _0x24391e.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x24e255 = _0x24391e.dynCall_iiiiiiiiiiiiiiiii = _0x24391e.asm.Vo).apply(null, arguments);
  };
  var _0x1985f9 = _0x24391e.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x1985f9 = _0x24391e.dynCall_iiiiiiiiiiiiiiiiii = _0x24391e.asm.Wo).apply(null, arguments);
  };
  var _0x35f092 = _0x24391e.dynCall_fifi = function () {
    return (_0x35f092 = _0x24391e.dynCall_fifi = _0x24391e.asm.Xo).apply(null, arguments);
  };
  var _0x57a529 = _0x24391e.dynCall_fiifi = function () {
    return (_0x57a529 = _0x24391e.dynCall_fiifi = _0x24391e.asm.Yo).apply(null, arguments);
  };
  var _0x2ba791 = _0x24391e.dynCall_iiidii = function () {
    return (_0x2ba791 = _0x24391e.dynCall_iiidii = _0x24391e.asm.Zo).apply(null, arguments);
  };
  var _0x230e50 = _0x24391e.dynCall_fiifii = function () {
    return (_0x230e50 = _0x24391e.dynCall_fiifii = _0x24391e.asm._o).apply(null, arguments);
  };
  var _0x46d9f0 = _0x24391e.dynCall_iiiiidii = function () {
    return (_0x46d9f0 = _0x24391e.dynCall_iiiiidii = _0x24391e.asm.$o).apply(null, arguments);
  };
  var _0x34b89b = _0x24391e.dynCall_jiiiiiiiiii = function () {
    return (_0x34b89b = _0x24391e.dynCall_jiiiiiiiiii = _0x24391e.asm.ap).apply(null, arguments);
  };
  var _0x580e90 = _0x24391e.dynCall_viijiiiiii = function () {
    return (_0x580e90 = _0x24391e.dynCall_viijiiiiii = _0x24391e.asm.bp).apply(null, arguments);
  };
  var _0x2de679 = _0x24391e.dynCall_vjjjiiii = function () {
    return (_0x2de679 = _0x24391e.dynCall_vjjjiiii = _0x24391e.asm.cp).apply(null, arguments);
  };
  var _0x5019f1 = _0x24391e.dynCall_vjiiiii = function () {
    return (_0x5019f1 = _0x24391e.dynCall_vjiiiii = _0x24391e.asm.dp).apply(null, arguments);
  };
  var _0x39fcd6 = _0x24391e.dynCall_jiiiii = function () {
    return (_0x39fcd6 = _0x24391e.dynCall_jiiiii = _0x24391e.asm.ep).apply(null, arguments);
  };
  var _0x1f0da4 = _0x24391e.dynCall_fifii = function () {
    return (_0x1f0da4 = _0x24391e.dynCall_fifii = _0x24391e.asm.fp).apply(null, arguments);
  };
  var _0x1dc61e = _0x24391e.dynCall_fiffi = function () {
    return (_0x1dc61e = _0x24391e.dynCall_fiffi = _0x24391e.asm.gp).apply(null, arguments);
  };
  var _0x50d437 = _0x24391e.dynCall_fiiifi = function () {
    return (_0x50d437 = _0x24391e.dynCall_fiiifi = _0x24391e.asm.hp).apply(null, arguments);
  };
  var _0x5c78b7 = _0x24391e.dynCall_viiifiii = function () {
    return (_0x5c78b7 = _0x24391e.dynCall_viiifiii = _0x24391e.asm.ip).apply(null, arguments);
  };
  var _0x6d5310 = _0x24391e.dynCall_fifffi = function () {
    return (_0x6d5310 = _0x24391e.dynCall_fifffi = _0x24391e.asm.jp).apply(null, arguments);
  };
  var _0x167e98 = _0x24391e.dynCall_iiifiii = function () {
    return (_0x167e98 = _0x24391e.dynCall_iiifiii = _0x24391e.asm.kp).apply(null, arguments);
  };
  var _0x318d06 = _0x24391e.dynCall_iifffffiii = function () {
    return (_0x318d06 = _0x24391e.dynCall_iifffffiii = _0x24391e.asm.lp).apply(null, arguments);
  };
  var _0x525ffa = _0x24391e.dynCall_viiiffii = function () {
    return (_0x525ffa = _0x24391e.dynCall_viiiffii = _0x24391e.asm.mp).apply(null, arguments);
  };
  var _0x489da4 = _0x24391e.dynCall_viiiiffiii = function () {
    return (_0x489da4 = _0x24391e.dynCall_viiiiffiii = _0x24391e.asm.np).apply(null, arguments);
  };
  var _0x13e2d8 = _0x24391e.dynCall_viiiiffiiii = function () {
    return (_0x13e2d8 = _0x24391e.dynCall_viiiiffiiii = _0x24391e.asm.op).apply(null, arguments);
  };
  var _0x14e9b8 = _0x24391e.dynCall_viiifiiii = function () {
    return (_0x14e9b8 = _0x24391e.dynCall_viiifiiii = _0x24391e.asm.pp).apply(null, arguments);
  };
  var _0x49f762 = _0x24391e.dynCall_vifiii = function () {
    return (_0x49f762 = _0x24391e.dynCall_vifiii = _0x24391e.asm.qp).apply(null, arguments);
  };
  var _0xde526 = _0x24391e.dynCall_vifiiifi = function () {
    return (_0xde526 = _0x24391e.dynCall_vifiiifi = _0x24391e.asm.rp).apply(null, arguments);
  };
  var _0x27c38a = _0x24391e.dynCall_viifiiifi = function () {
    return (_0x27c38a = _0x24391e.dynCall_viifiiifi = _0x24391e.asm.sp).apply(null, arguments);
  };
  var _0x50d710 = _0x24391e.dynCall_viffiifi = function () {
    return (_0x50d710 = _0x24391e.dynCall_viffiifi = _0x24391e.asm.tp).apply(null, arguments);
  };
  var _0x1ec010 = _0x24391e.dynCall_ffi = function () {
    return (_0x1ec010 = _0x24391e.dynCall_ffi = _0x24391e.asm.up).apply(null, arguments);
  };
  var _0x4a6672 = _0x24391e.dynCall_viiiiffffi = function () {
    return (_0x4a6672 = _0x24391e.dynCall_viiiiffffi = _0x24391e.asm.vp).apply(null, arguments);
  };
  var _0x51fb31 = _0x24391e.dynCall_fiiiii = function () {
    return (_0x51fb31 = _0x24391e.dynCall_fiiiii = _0x24391e.asm.wp).apply(null, arguments);
  };
  var _0xd13a9 = _0x24391e.dynCall_fiiiiii = function () {
    return (_0xd13a9 = _0x24391e.dynCall_fiiiiii = _0x24391e.asm.xp).apply(null, arguments);
  };
  var _0x195bd0 = _0x24391e.dynCall_ffffi = function () {
    return (_0x195bd0 = _0x24391e.dynCall_ffffi = _0x24391e.asm.yp).apply(null, arguments);
  };
  var _0xa82a6a = _0x24391e.dynCall_ffffffi = function () {
    return (_0xa82a6a = _0x24391e.dynCall_ffffffi = _0x24391e.asm.zp).apply(null, arguments);
  };
  var _0x16eb17 = _0x24391e.dynCall_viiifffiiiiiiifffiiii = function () {
    return (_0x16eb17 = _0x24391e.dynCall_viiifffiiiiiiifffiiii = _0x24391e.asm.Ap).apply(null, arguments);
  };
  var _0x51b573 = _0x24391e.dynCall_viiffii = function () {
    return (_0x51b573 = _0x24391e.dynCall_viiffii = _0x24391e.asm.Bp).apply(null, arguments);
  };
  var _0x451f44 = _0x24391e.dynCall_viiiffiii = function () {
    return (_0x451f44 = _0x24391e.dynCall_viiiffiii = _0x24391e.asm.Cp).apply(null, arguments);
  };
  var _0x5a490f = _0x24391e.dynCall_viiiijii = function () {
    return (_0x5a490f = _0x24391e.dynCall_viiiijii = _0x24391e.asm.Dp).apply(null, arguments);
  };
  var _0x4e3123 = _0x24391e.dynCall_vifiiii = function () {
    return (_0x4e3123 = _0x24391e.dynCall_vifiiii = _0x24391e.asm.Ep).apply(null, arguments);
  };
  var _0x4dc3b6 = _0x24391e.dynCall_iiiffi = function () {
    return (_0x4dc3b6 = _0x24391e.dynCall_iiiffi = _0x24391e.asm.Fp).apply(null, arguments);
  };
  var _0x1e1633 = _0x24391e.dynCall_iiififii = function () {
    return (_0x1e1633 = _0x24391e.dynCall_iiififii = _0x24391e.asm.Gp).apply(null, arguments);
  };
  var _0x290a04 = _0x24391e.dynCall_iiifiiiii = function () {
    return (_0x290a04 = _0x24391e.dynCall_iiifiiiii = _0x24391e.asm.Hp).apply(null, arguments);
  };
  var _0x2dd30d = _0x24391e.dynCall_iifiifiiii = function () {
    return (_0x2dd30d = _0x24391e.dynCall_iifiifiiii = _0x24391e.asm.Ip).apply(null, arguments);
  };
  var _0x46ff3c = _0x24391e.dynCall_iiiifiii = function () {
    return (_0x46ff3c = _0x24391e.dynCall_iiiifiii = _0x24391e.asm.Jp).apply(null, arguments);
  };
  var _0x216de0 = _0x24391e.dynCall_iiifiiii = function () {
    return (_0x216de0 = _0x24391e.dynCall_iiifiiii = _0x24391e.asm.Kp).apply(null, arguments);
  };
  var _0x40cc65 = _0x24391e.dynCall_iiiffiii = function () {
    return (_0x40cc65 = _0x24391e.dynCall_iiiffiii = _0x24391e.asm.Lp).apply(null, arguments);
  };
  var _0x9b975e = _0x24391e.dynCall_iiiiifii = function () {
    return (_0x9b975e = _0x24391e.dynCall_iiiiifii = _0x24391e.asm.Mp).apply(null, arguments);
  };
  var _0x283119 = _0x24391e.dynCall_iifiifffii = function () {
    return (_0x283119 = _0x24391e.dynCall_iifiifffii = _0x24391e.asm.Np).apply(null, arguments);
  };
  var _0x5e9d26 = _0x24391e.dynCall_iiiiiiffi = function () {
    return (_0x5e9d26 = _0x24391e.dynCall_iiiiiiffi = _0x24391e.asm.Op).apply(null, arguments);
  };
  var _0x201391 = _0x24391e.dynCall_iifffi = function () {
    return (_0x201391 = _0x24391e.dynCall_iifffi = _0x24391e.asm.Pp).apply(null, arguments);
  };
  var _0x2b69e0 = _0x24391e.dynCall_iiifffi = function () {
    return (_0x2b69e0 = _0x24391e.dynCall_iiifffi = _0x24391e.asm.Qp).apply(null, arguments);
  };
  var _0xc42a24 = _0x24391e.dynCall_iifiii = function () {
    return (_0xc42a24 = _0x24391e.dynCall_iifiii = _0x24391e.asm.Rp).apply(null, arguments);
  };
  var _0x525ca8 = _0x24391e.dynCall_iifiiii = function () {
    return (_0x525ca8 = _0x24391e.dynCall_iifiiii = _0x24391e.asm.Sp).apply(null, arguments);
  };
  var _0x40baae = _0x24391e.dynCall_viiiiifi = function () {
    return (_0x40baae = _0x24391e.dynCall_viiiiifi = _0x24391e.asm.Tp).apply(null, arguments);
  };
  var _0x46eb91 = _0x24391e.dynCall_viiiiifii = function () {
    return (_0x46eb91 = _0x24391e.dynCall_viiiiifii = _0x24391e.asm.Up).apply(null, arguments);
  };
  var _0x2cf153 = _0x24391e.dynCall_viiiiiifi = function () {
    return (_0x2cf153 = _0x24391e.dynCall_viiiiiifi = _0x24391e.asm.Vp).apply(null, arguments);
  };
  var _0x1164af = _0x24391e.dynCall_viiiiiifii = function () {
    return (_0x1164af = _0x24391e.dynCall_viiiiiifii = _0x24391e.asm.Wp).apply(null, arguments);
  };
  var _0x431da7 = _0x24391e.dynCall_ifffi = function () {
    return (_0x431da7 = _0x24391e.dynCall_ifffi = _0x24391e.asm.Xp).apply(null, arguments);
  };
  var _0x37c840 = _0x24391e.dynCall_iffffi = function () {
    return (_0x37c840 = _0x24391e.dynCall_iffffi = _0x24391e.asm.Yp).apply(null, arguments);
  };
  var _0x43986d = _0x24391e.dynCall_vffi = function () {
    return (_0x43986d = _0x24391e.dynCall_vffi = _0x24391e.asm.Zp).apply(null, arguments);
  };
  var _0x215c30 = _0x24391e.dynCall_ifiiiii = function () {
    return (_0x215c30 = _0x24391e.dynCall_ifiiiii = _0x24391e.asm._p).apply(null, arguments);
  };
  var _0x436609 = _0x24391e.dynCall_vfiiiii = function () {
    return (_0x436609 = _0x24391e.dynCall_vfiiiii = _0x24391e.asm.$p).apply(null, arguments);
  };
  var _0x3f7b57 = _0x24391e.dynCall_vfiiiiiiiiii = function () {
    return (_0x3f7b57 = _0x24391e.dynCall_vfiiiiiiiiii = _0x24391e.asm.aq).apply(null, arguments);
  };
  var _0xc33f6b = _0x24391e.dynCall_vfii = function () {
    return (_0xc33f6b = _0x24391e.dynCall_vfii = _0x24391e.asm.bq).apply(null, arguments);
  };
  var _0x5383dc = _0x24391e.dynCall_iifiiiii = function () {
    return (_0x5383dc = _0x24391e.dynCall_iifiiiii = _0x24391e.asm.cq).apply(null, arguments);
  };
  var _0x3a096e = _0x24391e.dynCall_vififii = function () {
    return (_0x3a096e = _0x24391e.dynCall_vififii = _0x24391e.asm.dq).apply(null, arguments);
  };
  var _0x3f62f2 = _0x24391e.dynCall_ifii = function () {
    return (_0x3f62f2 = _0x24391e.dynCall_ifii = _0x24391e.asm.eq).apply(null, arguments);
  };
  var _0x5ed994 = _0x24391e.dynCall_iiiiiifiii = function () {
    return (_0x5ed994 = _0x24391e.dynCall_iiiiiifiii = _0x24391e.asm.fq).apply(null, arguments);
  };
  var _0x3c596f = _0x24391e.dynCall_viiiiiifiii = function () {
    return (_0x3c596f = _0x24391e.dynCall_viiiiiifiii = _0x24391e.asm.gq).apply(null, arguments);
  };
  var _0xe91e59 = _0x24391e.dynCall_iifiiiiii = function () {
    return (_0xe91e59 = _0x24391e.dynCall_iifiiiiii = _0x24391e.asm.hq).apply(null, arguments);
  };
  var _0x9ad959 = _0x24391e.dynCall_iifffiiii = function () {
    return (_0x9ad959 = _0x24391e.dynCall_iifffiiii = _0x24391e.asm.iq).apply(null, arguments);
  };
  var _0x2bc104 = _0x24391e.dynCall_iiffiiii = function () {
    return (_0x2bc104 = _0x24391e.dynCall_iiffiiii = _0x24391e.asm.jq).apply(null, arguments);
  };
  var _0x3e900e = _0x24391e.dynCall_viiiifffiiii = function () {
    return (_0x3e900e = _0x24391e.dynCall_viiiifffiiii = _0x24391e.asm.kq).apply(null, arguments);
  };
  var _0xc3427e = _0x24391e.dynCall_viiiifiiiiii = function () {
    return (_0xc3427e = _0x24391e.dynCall_viiiifiiiiii = _0x24391e.asm.lq).apply(null, arguments);
  };
  var _0x2c9366 = _0x24391e.dynCall_iiiiiffi = function () {
    return (_0x2c9366 = _0x24391e.dynCall_iiiiiffi = _0x24391e.asm.mq).apply(null, arguments);
  };
  var _0x288e66 = _0x24391e.dynCall_viiiiiiifiii = function () {
    return (_0x288e66 = _0x24391e.dynCall_viiiiiiifiii = _0x24391e.asm.nq).apply(null, arguments);
  };
  var _0x1e619e = _0x24391e.dynCall_fiiifii = function () {
    return (_0x1e619e = _0x24391e.dynCall_fiiifii = _0x24391e.asm.oq).apply(null, arguments);
  };
  var _0xb7bf7a = _0x24391e.dynCall_iiiffii = function () {
    return (_0xb7bf7a = _0x24391e.dynCall_iiiffii = _0x24391e.asm.pq).apply(null, arguments);
  };
  var _0x3dce3e = _0x24391e.dynCall_fifiii = function () {
    return (_0x3dce3e = _0x24391e.dynCall_fifiii = _0x24391e.asm.qq).apply(null, arguments);
  };
  var _0x593486 = _0x24391e.dynCall_viiiiffii = function () {
    return (_0x593486 = _0x24391e.dynCall_viiiiffii = _0x24391e.asm.rq).apply(null, arguments);
  };
  var _0x15c638 = _0x24391e.dynCall_viiiiifffi = function () {
    return (_0x15c638 = _0x24391e.dynCall_viiiiifffi = _0x24391e.asm.sq).apply(null, arguments);
  };
  var _0x1865e8 = _0x24391e.dynCall_iiiiifi = function () {
    return (_0x1865e8 = _0x24391e.dynCall_iiiiifi = _0x24391e.asm.tq).apply(null, arguments);
  };
  var _0x451330 = _0x24391e.dynCall_fifiiiii = function () {
    return (_0x451330 = _0x24391e.dynCall_fifiiiii = _0x24391e.asm.uq).apply(null, arguments);
  };
  var _0x2e2bae = _0x24391e.dynCall_viifiii = function () {
    return (_0x2e2bae = _0x24391e.dynCall_viifiii = _0x24391e.asm.vq).apply(null, arguments);
  };
  var _0x174e9f = _0x24391e.dynCall_vifiiiii = function () {
    return (_0x174e9f = _0x24391e.dynCall_vifiiiii = _0x24391e.asm.wq).apply(null, arguments);
  };
  var _0x28d4fc = _0x24391e.dynCall_viffiifffiii = function () {
    return (_0x28d4fc = _0x24391e.dynCall_viffiifffiii = _0x24391e.asm.xq).apply(null, arguments);
  };
  var _0x120c59 = _0x24391e.dynCall_viffiiiii = function () {
    return (_0x120c59 = _0x24391e.dynCall_viffiiiii = _0x24391e.asm.yq).apply(null, arguments);
  };
  var _0x11a6bc = _0x24391e.dynCall_vifffffi = function () {
    return (_0x11a6bc = _0x24391e.dynCall_vifffffi = _0x24391e.asm.zq).apply(null, arguments);
  };
  var _0x3a0b8b = _0x24391e.dynCall_iifiifiii = function () {
    return (_0x3a0b8b = _0x24391e.dynCall_iifiifiii = _0x24391e.asm.Aq).apply(null, arguments);
  };
  var _0xdf0408 = _0x24391e.dynCall_viddi = function () {
    return (_0xdf0408 = _0x24391e.dynCall_viddi = _0x24391e.asm.Bq).apply(null, arguments);
  };
  var _0x54f46f = _0x24391e.dynCall_vijji = function () {
    return (_0x54f46f = _0x24391e.dynCall_vijji = _0x24391e.asm.Cq).apply(null, arguments);
  };
  var _0x4bdd8c = _0x24391e.dynCall_vijjjji = function () {
    return (_0x4bdd8c = _0x24391e.dynCall_vijjjji = _0x24391e.asm.Dq).apply(null, arguments);
  };
  var _0x55d867 = _0x24391e.dynCall_iijjjji = function () {
    return (_0x55d867 = _0x24391e.dynCall_iijjjji = _0x24391e.asm.Eq).apply(null, arguments);
  };
  var _0x4a8a5e = _0x24391e.dynCall_iiidi = function () {
    return (_0x4a8a5e = _0x24391e.dynCall_iiidi = _0x24391e.asm.Fq).apply(null, arguments);
  };
  var _0x27f5e3 = _0x24391e.dynCall_iijjjjiii = function () {
    return (_0x27f5e3 = _0x24391e.dynCall_iijjjjiii = _0x24391e.asm.Gq).apply(null, arguments);
  };
  var _0xc6ee78 = _0x24391e.dynCall_viiiiiifiifiiii = function () {
    return (_0xc6ee78 = _0x24391e.dynCall_viiiiiifiifiiii = _0x24391e.asm.Hq).apply(null, arguments);
  };
  var _0x10205a = _0x24391e.dynCall_iiffffiii = function () {
    return (_0x10205a = _0x24391e.dynCall_iiffffiii = _0x24391e.asm.Iq).apply(null, arguments);
  };
  var _0xa07812 = _0x24391e.dynCall_iiidfi = function () {
    return (_0xa07812 = _0x24391e.dynCall_iiidfi = _0x24391e.asm.Jq).apply(null, arguments);
  };
  var _0x2a5e1b = _0x24391e.dynCall_iiijfi = function () {
    return (_0x2a5e1b = _0x24391e.dynCall_iiijfi = _0x24391e.asm.Kq).apply(null, arguments);
  };
  var _0x7c5ecf = _0x24391e.dynCall_iiiififi = function () {
    return (_0x7c5ecf = _0x24391e.dynCall_iiiififi = _0x24391e.asm.Lq).apply(null, arguments);
  };
  var _0xf7fd1c = _0x24391e.dynCall_iiiffifiiii = function () {
    return (_0xf7fd1c = _0x24391e.dynCall_iiiffifiiii = _0x24391e.asm.Mq).apply(null, arguments);
  };
  var _0x12af5 = _0x24391e.dynCall_iiifiifiii = function () {
    return (_0x12af5 = _0x24391e.dynCall_iiifiifiii = _0x24391e.asm.Nq).apply(null, arguments);
  };
  var _0x5b0052 = _0x24391e.dynCall_iiifiifiiiii = function () {
    return (_0x5b0052 = _0x24391e.dynCall_iiifiifiiiii = _0x24391e.asm.Oq).apply(null, arguments);
  };
  var _0x34fce0 = _0x24391e.dynCall_ifffii = function () {
    return (_0x34fce0 = _0x24391e.dynCall_ifffii = _0x24391e.asm.Pq).apply(null, arguments);
  };
  var _0x98df48 = _0x24391e.dynCall_ffffii = function () {
    return (_0x98df48 = _0x24391e.dynCall_ffffii = _0x24391e.asm.Qq).apply(null, arguments);
  };
  var _0x5d4e3b = _0x24391e.dynCall_ffffifi = function () {
    return (_0x5d4e3b = _0x24391e.dynCall_ffffifi = _0x24391e.asm.Rq).apply(null, arguments);
  };
  var _0x545795 = _0x24391e.dynCall_ffffiffi = function () {
    return (_0x545795 = _0x24391e.dynCall_ffffiffi = _0x24391e.asm.Sq).apply(null, arguments);
  };
  var _0x27ecb9 = _0x24391e.dynCall_viiififi = function () {
    return (_0x27ecb9 = _0x24391e.dynCall_viiififi = _0x24391e.asm.Tq).apply(null, arguments);
  };
  var _0x5d6e20 = _0x24391e.dynCall_viiififfi = function () {
    return (_0x5d6e20 = _0x24391e.dynCall_viiififfi = _0x24391e.asm.Uq).apply(null, arguments);
  };
  var _0x120cc7 = _0x24391e.dynCall_ifiii = function () {
    return (_0x120cc7 = _0x24391e.dynCall_ifiii = _0x24391e.asm.Vq).apply(null, arguments);
  };
  var _0x4bb72d = _0x24391e.dynCall_iiffiiiii = function () {
    return (_0x4bb72d = _0x24391e.dynCall_iiffiiiii = _0x24391e.asm.Wq).apply(null, arguments);
  };
  var _0x3aa011 = _0x24391e.dynCall_iiffifiii = function () {
    return (_0x3aa011 = _0x24391e.dynCall_iiffifiii = _0x24391e.asm.Xq).apply(null, arguments);
  };
  var _0x4f74b4 = _0x24391e.dynCall_iififi = function () {
    return (_0x4f74b4 = _0x24391e.dynCall_iififi = _0x24391e.asm.Yq).apply(null, arguments);
  };
  var _0x243cde = _0x24391e.dynCall_iiififi = function () {
    return (_0x243cde = _0x24391e.dynCall_iiififi = _0x24391e.asm.Zq).apply(null, arguments);
  };
  var _0x4962f8 = _0x24391e.dynCall_iiiiifiiii = function () {
    return (_0x4962f8 = _0x24391e.dynCall_iiiiifiiii = _0x24391e.asm._q).apply(null, arguments);
  };
  var _0x586875 = _0x24391e.dynCall_viidiii = function () {
    return (_0x586875 = _0x24391e.dynCall_viidiii = _0x24391e.asm.$q).apply(null, arguments);
  };
  var _0x3b2b13 = _0x24391e.dynCall_diidi = function () {
    return (_0x3b2b13 = _0x24391e.dynCall_diidi = _0x24391e.asm.ar).apply(null, arguments);
  };
  var _0x14dda = _0x24391e.dynCall_fiifdi = function () {
    return (_0x14dda = _0x24391e.dynCall_fiifdi = _0x24391e.asm.br).apply(null, arguments);
  };
  var _0x5465b0 = _0x24391e.dynCall_viiiiiifddfiiii = function () {
    return (_0x5465b0 = _0x24391e.dynCall_viiiiiifddfiiii = _0x24391e.asm.cr).apply(null, arguments);
  };
  var _0xcfc7df = _0x24391e.dynCall_viijiii = function () {
    return (_0xcfc7df = _0x24391e.dynCall_viijiii = _0x24391e.asm.dr).apply(null, arguments);
  };
  var _0x5ebce0 = _0x24391e.dynCall_fiifji = function () {
    return (_0x5ebce0 = _0x24391e.dynCall_fiifji = _0x24391e.asm.er).apply(null, arguments);
  };
  var _0x2e722e = _0x24391e.dynCall_viiiiiifjjfiiii = function () {
    return (_0x2e722e = _0x24391e.dynCall_viiiiiifjjfiiii = _0x24391e.asm.fr).apply(null, arguments);
  };
  var _0x5b7595 = _0x24391e.dynCall_viiiiiiffffiiii = function () {
    return (_0x5b7595 = _0x24391e.dynCall_viiiiiiffffiiii = _0x24391e.asm.gr).apply(null, arguments);
  };
  var _0x3cf3d6 = _0x24391e.dynCall_viifiiii = function () {
    return (_0x3cf3d6 = _0x24391e.dynCall_viifiiii = _0x24391e.asm.hr).apply(null, arguments);
  };
  var _0x106711 = _0x24391e.dynCall_iiiiifiii = function () {
    return (_0x106711 = _0x24391e.dynCall_iiiiifiii = _0x24391e.asm.ir).apply(null, arguments);
  };
  var _0x39b5b7 = _0x24391e.dynCall_fffffi = function () {
    return (_0x39b5b7 = _0x24391e.dynCall_fffffi = _0x24391e.asm.jr).apply(null, arguments);
  };
  var _0x408376 = _0x24391e.dynCall_fiiffffi = function () {
    return (_0x408376 = _0x24391e.dynCall_fiiffffi = _0x24391e.asm.kr).apply(null, arguments);
  };
  var _0x22dafe = _0x24391e.dynCall_fffifffi = function () {
    return (_0x22dafe = _0x24391e.dynCall_fffifffi = _0x24391e.asm.lr).apply(null, arguments);
  };
  var _0x29c0ac = _0x24391e.dynCall_ifiiii = function () {
    return (_0x29c0ac = _0x24391e.dynCall_ifiiii = _0x24391e.asm.mr).apply(null, arguments);
  };
  var _0x50d699 = _0x24391e.dynCall_idiiiii = function () {
    return (_0x50d699 = _0x24391e.dynCall_idiiiii = _0x24391e.asm.nr).apply(null, arguments);
  };
  var _0x16c673 = _0x24391e.dynCall_idiiii = function () {
    return (_0x16c673 = _0x24391e.dynCall_idiiii = _0x24391e.asm.or).apply(null, arguments);
  };
  var _0x450e8d = _0x24391e.dynCall_idii = function () {
    return (_0x450e8d = _0x24391e.dynCall_idii = _0x24391e.asm.pr).apply(null, arguments);
  };
  var _0x3165aa = _0x24391e.dynCall_ijii = function () {
    return (_0x3165aa = _0x24391e.dynCall_ijii = _0x24391e.asm.qr).apply(null, arguments);
  };
  var _0x11506a = _0x24391e.dynCall_iidii = function () {
    return (_0x11506a = _0x24391e.dynCall_iidii = _0x24391e.asm.rr).apply(null, arguments);
  };
  var _0x2696fa = _0x24391e.dynCall_iidiii = function () {
    return (_0x2696fa = _0x24391e.dynCall_iidiii = _0x24391e.asm.sr).apply(null, arguments);
  };
  var _0x5c14ba = _0x24391e.dynCall_iiijiiii = function () {
    return (_0x5c14ba = _0x24391e.dynCall_iiijiiii = _0x24391e.asm.tr).apply(null, arguments);
  };
  var _0x1fde86 = _0x24391e.dynCall_vjiiii = function () {
    return (_0x1fde86 = _0x24391e.dynCall_vjiiii = _0x24391e.asm.ur).apply(null, arguments);
  };
  var _0xe3ed4c = _0x24391e.dynCall_iddi = function () {
    return (_0xe3ed4c = _0x24391e.dynCall_iddi = _0x24391e.asm.vr).apply(null, arguments);
  };
  var _0x4faefd = _0x24391e.dynCall_viifiifi = function () {
    return (_0x4faefd = _0x24391e.dynCall_viifiifi = _0x24391e.asm.wr).apply(null, arguments);
  };
  var _0x1566ce = _0x24391e.dynCall_vifiifi = function () {
    return (_0x1566ce = _0x24391e.dynCall_vifiifi = _0x24391e.asm.xr).apply(null, arguments);
  };
  var _0x3e7980 = _0x24391e.dynCall_viffii = function () {
    return (_0x3e7980 = _0x24391e.dynCall_viffii = _0x24391e.asm.yr).apply(null, arguments);
  };
  var _0x5316c8 = _0x24391e.dynCall_viddfffi = function () {
    return (_0x5316c8 = _0x24391e.dynCall_viddfffi = _0x24391e.asm.zr).apply(null, arguments);
  };
  var _0x15e05b = _0x24391e.dynCall_viidfffi = function () {
    return (_0x15e05b = _0x24391e.dynCall_viidfffi = _0x24391e.asm.Ar).apply(null, arguments);
  };
  var _0x5699ed = _0x24391e.dynCall_vidifffi = function () {
    return (_0x5699ed = _0x24391e.dynCall_vidifffi = _0x24391e.asm.Br).apply(null, arguments);
  };
  var _0x206716 = _0x24391e.dynCall_vidii = function () {
    return (_0x206716 = _0x24391e.dynCall_vidii = _0x24391e.asm.Cr).apply(null, arguments);
  };
  var _0x391c29 = _0x24391e.dynCall_viiiiiiifi = function () {
    return (_0x391c29 = _0x24391e.dynCall_viiiiiiifi = _0x24391e.asm.Dr).apply(null, arguments);
  };
  var _0x2cecaf = _0x24391e.dynCall_iffi = function () {
    return (_0x2cecaf = _0x24391e.dynCall_iffi = _0x24391e.asm.Er).apply(null, arguments);
  };
  var _0x47b2fa = _0x24391e.dynCall_viiffffi = function () {
    return (_0x47b2fa = _0x24391e.dynCall_viiffffi = _0x24391e.asm.Fr).apply(null, arguments);
  };
  var _0x17928d = _0x24391e.dynCall_ffii = function () {
    return (_0x17928d = _0x24391e.dynCall_ffii = _0x24391e.asm.Gr).apply(null, arguments);
  };
  var _0x151ae1 = _0x24391e.dynCall_ddddi = function () {
    return (_0x151ae1 = _0x24391e.dynCall_ddddi = _0x24391e.asm.Hr).apply(null, arguments);
  };
  var _0x5e6468 = _0x24391e.dynCall_ddi = function () {
    return (_0x5e6468 = _0x24391e.dynCall_ddi = _0x24391e.asm.Ir).apply(null, arguments);
  };
  var _0x3edeba = _0x24391e.dynCall_jijii = function () {
    return (_0x3edeba = _0x24391e.dynCall_jijii = _0x24391e.asm.Jr).apply(null, arguments);
  };
  var _0x16850a = _0x24391e.dynCall_iiiiiji = function () {
    return (_0x16850a = _0x24391e.dynCall_iiiiiji = _0x24391e.asm.Kr).apply(null, arguments);
  };
  var _0x5c76b3 = _0x24391e.dynCall_viiijii = function () {
    return (_0x5c76b3 = _0x24391e.dynCall_viiijii = _0x24391e.asm.Lr).apply(null, arguments);
  };
  var _0x55d48a = _0x24391e.dynCall_viffffffi = function () {
    return (_0x55d48a = _0x24391e.dynCall_viffffffi = _0x24391e.asm.Mr).apply(null, arguments);
  };
  var _0xb3a56d = _0x24391e.dynCall_ijjiiii = function () {
    return (_0xb3a56d = _0x24391e.dynCall_ijjiiii = _0x24391e.asm.Nr).apply(null, arguments);
  };
  var _0x1df622 = _0x24391e.dynCall_vdiiiii = function () {
    return (_0x1df622 = _0x24391e.dynCall_vdiiiii = _0x24391e.asm.Or).apply(null, arguments);
  };
  var _0x3edd25 = _0x24391e.dynCall_diiji = function () {
    return (_0x3edd25 = _0x24391e.dynCall_diiji = _0x24391e.asm.Pr).apply(null, arguments);
  };
  var _0x120c54 = _0x24391e.dynCall_vjiiiiiiii = function () {
    return (_0x120c54 = _0x24391e.dynCall_vjiiiiiiii = _0x24391e.asm.Qr).apply(null, arguments);
  };
  var _0x468e24 = _0x24391e.dynCall_vjiiiiiii = function () {
    return (_0x468e24 = _0x24391e.dynCall_vjiiiiiii = _0x24391e.asm.Rr).apply(null, arguments);
  };
  var _0x2643b8 = _0x24391e.dynCall_ijiiii = function () {
    return (_0x2643b8 = _0x24391e.dynCall_ijiiii = _0x24391e.asm.Sr).apply(null, arguments);
  };
  var _0x195aee = _0x24391e.dynCall_diji = function () {
    return (_0x195aee = _0x24391e.dynCall_diji = _0x24391e.asm.Tr).apply(null, arguments);
  };
  var _0x9226b3 = _0x24391e.dynCall_fidi = function () {
    return (_0x9226b3 = _0x24391e.dynCall_fidi = _0x24391e.asm.Ur).apply(null, arguments);
  };
  var _0x4ffa0e = _0x24391e.dynCall_vfffi = function () {
    return (_0x4ffa0e = _0x24391e.dynCall_vfffi = _0x24391e.asm.Vr).apply(null, arguments);
  };
  var _0x113eac = _0x24391e.dynCall_vffffi = function () {
    return (_0x113eac = _0x24391e.dynCall_vffffi = _0x24391e.asm.Wr).apply(null, arguments);
  };
  var _0x1a1cf0 = _0x24391e.dynCall_vffffiiii = function () {
    return (_0x1a1cf0 = _0x24391e.dynCall_vffffiiii = _0x24391e.asm.Xr).apply(null, arguments);
  };
  var _0x436cc5 = _0x24391e.dynCall_vifffii = function () {
    return (_0x436cc5 = _0x24391e.dynCall_vifffii = _0x24391e.asm.Yr).apply(null, arguments);
  };
  var _0x526e1e = _0x24391e.dynCall_vffffii = function () {
    return (_0x526e1e = _0x24391e.dynCall_vffffii = _0x24391e.asm.Zr).apply(null, arguments);
  };
  var _0xaa8625 = _0x24391e.dynCall_viiiifffi = function () {
    return (_0xaa8625 = _0x24391e.dynCall_viiiifffi = _0x24391e.asm._r).apply(null, arguments);
  };
  var _0xe413ba = _0x24391e.dynCall_vfiii = function () {
    return (_0xe413ba = _0x24391e.dynCall_vfiii = _0x24391e.asm.$r).apply(null, arguments);
  };
  var _0x3bfcbf = _0x24391e.dynCall_fffifi = function () {
    return (_0x3bfcbf = _0x24391e.dynCall_fffifi = _0x24391e.asm.as).apply(null, arguments);
  };
  var _0x50bff5 = _0x24391e.dynCall_viifffi = function () {
    return (_0x50bff5 = _0x24391e.dynCall_viifffi = _0x24391e.asm.bs).apply(null, arguments);
  };
  var _0x11ed9d = _0x24391e.dynCall_iiiifiiiii = function () {
    return (_0x11ed9d = _0x24391e.dynCall_iiiifiiiii = _0x24391e.asm.cs).apply(null, arguments);
  };
  var _0x241071 = _0x24391e.dynCall_iiiifiiii = function () {
    return (_0x241071 = _0x24391e.dynCall_iiiifiiii = _0x24391e.asm.ds).apply(null, arguments);
  };
  var _0x1f04e0 = _0x24391e.dynCall_vijjii = function () {
    return (_0x1f04e0 = _0x24391e.dynCall_vijjii = _0x24391e.asm.es).apply(null, arguments);
  };
  var _0x5098c8 = _0x24391e.dynCall_viiiififfi = function () {
    return (_0x5098c8 = _0x24391e.dynCall_viiiififfi = _0x24391e.asm.fs).apply(null, arguments);
  };
  var _0x4e98ad = _0x24391e.dynCall_viiiifiifi = function () {
    return (_0x4e98ad = _0x24391e.dynCall_viiiifiifi = _0x24391e.asm.gs).apply(null, arguments);
  };
  var _0x5c700f = _0x24391e.dynCall_viiiifiiii = function () {
    return (_0x5c700f = _0x24391e.dynCall_viiiifiiii = _0x24391e.asm.hs).apply(null, arguments);
  };
  var _0x4689ba = _0x24391e.dynCall_viiiifiiiii = function () {
    return (_0x4689ba = _0x24391e.dynCall_viiiifiiiii = _0x24391e.asm.is).apply(null, arguments);
  };
  var _0xeddacb = _0x24391e.dynCall_viiiifiiiiiiii = function () {
    return (_0xeddacb = _0x24391e.dynCall_viiiifiiiiiiii = _0x24391e.asm.js).apply(null, arguments);
  };
  var _0x110642 = _0x24391e.dynCall_viiiiiffii = function () {
    return (_0x110642 = _0x24391e.dynCall_viiiiiffii = _0x24391e.asm.ks).apply(null, arguments);
  };
  var _0x3291be = _0x24391e.dynCall_viffiii = function () {
    return (_0x3291be = _0x24391e.dynCall_viffiii = _0x24391e.asm.ls).apply(null, arguments);
  };
  var _0x325de7 = _0x24391e.dynCall_viffffiii = function () {
    return (_0x325de7 = _0x24391e.dynCall_viffffiii = _0x24391e.asm.ms).apply(null, arguments);
  };
  var _0x2d6360 = _0x24391e.dynCall_viffffii = function () {
    return (_0x2d6360 = _0x24391e.dynCall_viffffii = _0x24391e.asm.ns).apply(null, arguments);
  };
  var _0x2a2d77 = _0x24391e.dynCall_viiiififii = function () {
    return (_0x2a2d77 = _0x24391e.dynCall_viiiififii = _0x24391e.asm.os).apply(null, arguments);
  };
  var _0x26a60f = _0x24391e.dynCall_viiififiii = function () {
    return (_0x26a60f = _0x24391e.dynCall_viiififiii = _0x24391e.asm.ps).apply(null, arguments);
  };
  var _0x339308 = _0x24391e.dynCall_iiififfi = function () {
    return (_0x339308 = _0x24391e.dynCall_iiififfi = _0x24391e.asm.qs).apply(null, arguments);
  };
  var _0x51ca14 = _0x24391e.dynCall_viffiiii = function () {
    return (_0x51ca14 = _0x24391e.dynCall_viffiiii = _0x24391e.asm.rs).apply(null, arguments);
  };
  var _0x2a7c55 = _0x24391e.dynCall_viiiiffffiiii = function () {
    return (_0x2a7c55 = _0x24391e.dynCall_viiiiffffiiii = _0x24391e.asm.ss).apply(null, arguments);
  };
  var _0x575786 = _0x24391e.dynCall_viifiiiii = function () {
    return (_0x575786 = _0x24391e.dynCall_viifiiiii = _0x24391e.asm.ts).apply(null, arguments);
  };
  var _0x36b657 = _0x24391e.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x36b657 = _0x24391e.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x24391e.asm.us).apply(null, arguments);
  };
  var _0x351bbf = _0x24391e.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x351bbf = _0x24391e.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x24391e.asm.vs).apply(null, arguments);
  };
  var _0x35a7d8 = _0x24391e.dynCall_viififii = function () {
    return (_0x35a7d8 = _0x24391e.dynCall_viififii = _0x24391e.asm.ws).apply(null, arguments);
  };
  var _0x5b7a11 = _0x24391e.dynCall_iiiffiiii = function () {
    return (_0x5b7a11 = _0x24391e.dynCall_iiiffiiii = _0x24391e.asm.xs).apply(null, arguments);
  };
  var _0x2e8638 = _0x24391e.dynCall_iiiiffiiii = function () {
    return (_0x2e8638 = _0x24391e.dynCall_iiiiffiiii = _0x24391e.asm.ys).apply(null, arguments);
  };
  var _0xbe5148 = _0x24391e.dynCall_vjii = function () {
    return (_0xbe5148 = _0x24391e.dynCall_vjii = _0x24391e.asm.zs).apply(null, arguments);
  };
  var _0xad6f2a = _0x24391e.dynCall_fffffffi = function () {
    return (_0xad6f2a = _0x24391e.dynCall_fffffffi = _0x24391e.asm.As).apply(null, arguments);
  };
  var _0x4a45dc = _0x24391e.dynCall_viffifi = function () {
    return (_0x4a45dc = _0x24391e.dynCall_viffifi = _0x24391e.asm.Bs).apply(null, arguments);
  };
  var _0x29e50f = _0x24391e.dynCall_viiffifi = function () {
    return (_0x29e50f = _0x24391e.dynCall_viiffifi = _0x24391e.asm.Cs).apply(null, arguments);
  };
  var _0x19d352 = _0x24391e.dynCall_fiiiffi = function () {
    return (_0x19d352 = _0x24391e.dynCall_fiiiffi = _0x24391e.asm.Ds).apply(null, arguments);
  };
  var _0xf80ccd = _0x24391e.dynCall_viiffiiiiiiiii = function () {
    return (_0xf80ccd = _0x24391e.dynCall_viiffiiiiiiiii = _0x24391e.asm.Es).apply(null, arguments);
  };
  var _0x181a30 = _0x24391e.dynCall_viiiiiffiii = function () {
    return (_0x181a30 = _0x24391e.dynCall_viiiiiffiii = _0x24391e.asm.Fs).apply(null, arguments);
  };
  var _0x140d6d = _0x24391e.dynCall_viiffiii = function () {
    return (_0x140d6d = _0x24391e.dynCall_viiffiii = _0x24391e.asm.Gs).apply(null, arguments);
  };
  var _0x1bb864 = _0x24391e.dynCall_viiffiiiiiii = function () {
    return (_0x1bb864 = _0x24391e.dynCall_viiffiiiiiii = _0x24391e.asm.Hs).apply(null, arguments);
  };
  var _0x2cfdfc = _0x24391e.dynCall_fffffffffi = function () {
    return (_0x2cfdfc = _0x24391e.dynCall_fffffffffi = _0x24391e.asm.Is).apply(null, arguments);
  };
  var _0x1add72 = _0x24391e.dynCall_vifiiiiii = function () {
    return (_0x1add72 = _0x24391e.dynCall_vifiiiiii = _0x24391e.asm.Js).apply(null, arguments);
  };
  var _0x17fb63 = _0x24391e.dynCall_viifiiiiiii = function () {
    return (_0x17fb63 = _0x24391e.dynCall_viifiiiiiii = _0x24391e.asm.Ks).apply(null, arguments);
  };
  var _0x3440d7 = _0x24391e.dynCall_viiififfiiiiiii = function () {
    return (_0x3440d7 = _0x24391e.dynCall_viiififfiiiiiii = _0x24391e.asm.Ls).apply(null, arguments);
  };
  var _0x351a66 = _0x24391e.dynCall_viiffiifiiiiiii = function () {
    return (_0x351a66 = _0x24391e.dynCall_viiffiifiiiiiii = _0x24391e.asm.Ms).apply(null, arguments);
  };
  var _0x168f5c = _0x24391e.dynCall_viifiiiiii = function () {
    return (_0x168f5c = _0x24391e.dynCall_viifiiiiii = _0x24391e.asm.Ns).apply(null, arguments);
  };
  var _0xd9a9ba = _0x24391e.dynCall_viiifiiiiii = function () {
    return (_0xd9a9ba = _0x24391e.dynCall_viiifiiiiii = _0x24391e.asm.Os).apply(null, arguments);
  };
  var _0xf3a0ab = _0x24391e.dynCall_viififiiiiii = function () {
    return (_0xf3a0ab = _0x24391e.dynCall_viififiiiiii = _0x24391e.asm.Ps).apply(null, arguments);
  };
  var _0x134b39 = _0x24391e.dynCall_viiiffiifiiiiiii = function () {
    return (_0x134b39 = _0x24391e.dynCall_viiiffiifiiiiiii = _0x24391e.asm.Qs).apply(null, arguments);
  };
  var _0x32f83e = _0x24391e.dynCall_viiiiiifiiiiii = function () {
    return (_0x32f83e = _0x24391e.dynCall_viiiiiifiiiiii = _0x24391e.asm.Rs).apply(null, arguments);
  };
  var _0x4caca8 = _0x24391e.dynCall_vififiii = function () {
    return (_0x4caca8 = _0x24391e.dynCall_vififiii = _0x24391e.asm.Ss).apply(null, arguments);
  };
  var _0x655e95 = _0x24391e.dynCall_viiiiiiiijiiii = function () {
    return (_0x655e95 = _0x24391e.dynCall_viiiiiiiijiiii = _0x24391e.asm.Ts).apply(null, arguments);
  };
  var _0x5d8fa8 = _0x24391e.dynCall_viiiiiffi = function () {
    return (_0x5d8fa8 = _0x24391e.dynCall_viiiiiffi = _0x24391e.asm.Us).apply(null, arguments);
  };
  var _0x358195 = _0x24391e.dynCall_viiidii = function () {
    return (_0x358195 = _0x24391e.dynCall_viiidii = _0x24391e.asm.Vs).apply(null, arguments);
  };
  var _0xdba47f = _0x24391e.dynCall_ijiiiiiiiii = function () {
    return (_0xdba47f = _0x24391e.dynCall_ijiiiiiiiii = _0x24391e.asm.Ws).apply(null, arguments);
  };
  var _0x3bf0a8 = _0x24391e.dynCall_ijjiii = function () {
    return (_0x3bf0a8 = _0x24391e.dynCall_ijjiii = _0x24391e.asm.Xs).apply(null, arguments);
  };
  var _0x52481d = _0x24391e.dynCall_jjjii = function () {
    return (_0x52481d = _0x24391e.dynCall_jjjii = _0x24391e.asm.Ys).apply(null, arguments);
  };
  var _0x361a3c = _0x24391e.dynCall_iijjijii = function () {
    return (_0x361a3c = _0x24391e.dynCall_iijjijii = _0x24391e.asm.Zs).apply(null, arguments);
  };
  var _0x47871d = _0x24391e.dynCall_jiijii = function () {
    return (_0x47871d = _0x24391e.dynCall_jiijii = _0x24391e.asm._s).apply(null, arguments);
  };
  var _0x36920a = _0x24391e.dynCall_viiiidii = function () {
    return (_0x36920a = _0x24391e.dynCall_viiiidii = _0x24391e.asm.$s).apply(null, arguments);
  };
  var _0x98c990 = _0x24391e.dynCall_vidiiiii = function () {
    return (_0x98c990 = _0x24391e.dynCall_vidiiiii = _0x24391e.asm.at).apply(null, arguments);
  };
  var _0x389e25 = _0x24391e.dynCall_viiidjii = function () {
    return (_0x389e25 = _0x24391e.dynCall_viiidjii = _0x24391e.asm.bt).apply(null, arguments);
  };
  var _0x24e75e = _0x24391e.dynCall_viijijji = function () {
    return (_0x24e75e = _0x24391e.dynCall_viijijji = _0x24391e.asm.ct).apply(null, arguments);
  };
  var _0x1b8e17 = _0x24391e.dynCall_vijijji = function () {
    return (_0x1b8e17 = _0x24391e.dynCall_vijijji = _0x24391e.asm.dt).apply(null, arguments);
  };
  var _0x262cb0 = _0x24391e.dynCall_viffffffffffffffffi = function () {
    return (_0x262cb0 = _0x24391e.dynCall_viffffffffffffffffi = _0x24391e.asm.et).apply(null, arguments);
  };
  var _0x476362 = _0x24391e.dynCall_jiidi = function () {
    return (_0x476362 = _0x24391e.dynCall_jiidi = _0x24391e.asm.ft).apply(null, arguments);
  };
  var _0x56129c = _0x24391e.dynCall_viiiidijii = function () {
    return (_0x56129c = _0x24391e.dynCall_viiiidijii = _0x24391e.asm.gt).apply(null, arguments);
  };
  var _0xbc736 = _0x24391e.dynCall_iiidiii = function () {
    return (_0xbc736 = _0x24391e.dynCall_iiidiii = _0x24391e.asm.ht).apply(null, arguments);
  };
  var _0x3853e5 = _0x24391e.dynCall_viijiiiii = function () {
    return (_0x3853e5 = _0x24391e.dynCall_viijiiiii = _0x24391e.asm.it).apply(null, arguments);
  };
  var _0x16c3dd = _0x24391e.dynCall_viifffffi = function () {
    return (_0x16c3dd = _0x24391e.dynCall_viifffffi = _0x24391e.asm.jt).apply(null, arguments);
  };
  var _0x578c8e = _0x24391e.dynCall_viiffffffi = function () {
    return (_0x578c8e = _0x24391e.dynCall_viiffffffi = _0x24391e.asm.kt).apply(null, arguments);
  };
  var _0x2d5cee = _0x24391e.dynCall_viifffffffi = function () {
    return (_0x2d5cee = _0x24391e.dynCall_viifffffffi = _0x24391e.asm.lt).apply(null, arguments);
  };
  var _0x3142b4 = _0x24391e.dynCall_viiffffffffi = function () {
    return (_0x3142b4 = _0x24391e.dynCall_viiffffffffi = _0x24391e.asm.mt).apply(null, arguments);
  };
  var _0x12e644 = _0x24391e.dynCall_viiffffffffiii = function () {
    return (_0x12e644 = _0x24391e.dynCall_viiffffffffiii = _0x24391e.asm.nt).apply(null, arguments);
  };
  var _0x51733b = _0x24391e.dynCall_viiiiffffii = function () {
    return (_0x51733b = _0x24391e.dynCall_viiiiffffii = _0x24391e.asm.ot).apply(null, arguments);
  };
  var _0x56a0bf = _0x24391e.dynCall_didi = function () {
    return (_0x56a0bf = _0x24391e.dynCall_didi = _0x24391e.asm.pt).apply(null, arguments);
  };
  var _0x448926 = _0x24391e.dynCall_ddidi = function () {
    return (_0x448926 = _0x24391e.dynCall_ddidi = _0x24391e.asm.qt).apply(null, arguments);
  };
  var _0x3dfdd3 = _0x24391e.dynCall_viddii = function () {
    return (_0x3dfdd3 = _0x24391e.dynCall_viddii = _0x24391e.asm.rt).apply(null, arguments);
  };
  var _0x389602 = _0x24391e.dynCall_iiiddi = function () {
    return (_0x389602 = _0x24391e.dynCall_iiiddi = _0x24391e.asm.st).apply(null, arguments);
  };
  var _0x438a56 = _0x24391e.dynCall_viddiiii = function () {
    return (_0x438a56 = _0x24391e.dynCall_viddiiii = _0x24391e.asm.tt).apply(null, arguments);
  };
  var _0x3a57a3 = _0x24391e.dynCall_viiijji = function () {
    return (_0x3a57a3 = _0x24391e.dynCall_viiijji = _0x24391e.asm.ut).apply(null, arguments);
  };
  var _0x47a372 = _0x24391e.dynCall_vijiiiiiii = function () {
    return (_0x47a372 = _0x24391e.dynCall_vijiiiiiii = _0x24391e.asm.vt).apply(null, arguments);
  };
  var _0x1f79d1 = _0x24391e.dynCall_vijiiiiiiii = function () {
    return (_0x1f79d1 = _0x24391e.dynCall_vijiiiiiiii = _0x24391e.asm.wt).apply(null, arguments);
  };
  var _0x11af32 = _0x24391e.dynCall_jjiiii = function () {
    return (_0x11af32 = _0x24391e.dynCall_jjiiii = _0x24391e.asm.xt).apply(null, arguments);
  };
  var _0x477809 = _0x24391e.dynCall_jjiiiii = function () {
    return (_0x477809 = _0x24391e.dynCall_jjiiiii = _0x24391e.asm.yt).apply(null, arguments);
  };
  var _0x4829fd = _0x24391e.dynCall_jijjji = function () {
    return (_0x4829fd = _0x24391e.dynCall_jijjji = _0x24391e.asm.zt).apply(null, arguments);
  };
  var _0x88a55c = _0x24391e.dynCall_jijjjii = function () {
    return (_0x88a55c = _0x24391e.dynCall_jijjjii = _0x24391e.asm.At).apply(null, arguments);
  };
  var _0x242552 = _0x24391e.dynCall_jjiii = function () {
    return (_0x242552 = _0x24391e.dynCall_jjiii = _0x24391e.asm.Bt).apply(null, arguments);
  };
  var _0x1701c2 = _0x24391e.dynCall_ijijiiiii = function () {
    return (_0x1701c2 = _0x24391e.dynCall_ijijiiiii = _0x24391e.asm.Ct).apply(null, arguments);
  };
  var _0x59ce0c = _0x24391e.dynCall_ijjjiii = function () {
    return (_0x59ce0c = _0x24391e.dynCall_ijjjiii = _0x24391e.asm.Dt).apply(null, arguments);
  };
  var _0x456bc7 = _0x24391e.dynCall_vijjjiijii = function () {
    return (_0x456bc7 = _0x24391e.dynCall_vijjjiijii = _0x24391e.asm.Et).apply(null, arguments);
  };
  var _0xa844a2 = _0x24391e.dynCall_ijjjiijii = function () {
    return (_0xa844a2 = _0x24391e.dynCall_ijjjiijii = _0x24391e.asm.Ft).apply(null, arguments);
  };
  var _0x265f21 = _0x24391e.dynCall_vijiiiiii = function () {
    return (_0x265f21 = _0x24391e.dynCall_vijiiiiii = _0x24391e.asm.Gt).apply(null, arguments);
  };
  var _0x4d7d2f = _0x24391e.dynCall_jfi = function () {
    return (_0x4d7d2f = _0x24391e.dynCall_jfi = _0x24391e.asm.Ht).apply(null, arguments);
  };
  var _0x262f57 = _0x24391e.dynCall_fji = function () {
    return (_0x262f57 = _0x24391e.dynCall_fji = _0x24391e.asm.It).apply(null, arguments);
  };
  var _0x22b512 = _0x24391e.dynCall_fdi = function () {
    return (_0x22b512 = _0x24391e.dynCall_fdi = _0x24391e.asm.Jt).apply(null, arguments);
  };
  var _0x138774 = _0x24391e.dynCall_dfi = function () {
    return (_0x138774 = _0x24391e.dynCall_dfi = _0x24391e.asm.Kt).apply(null, arguments);
  };
  var _0x5ebebb = _0x24391e.dynCall_jidii = function () {
    return (_0x5ebebb = _0x24391e.dynCall_jidii = _0x24391e.asm.Lt).apply(null, arguments);
  };
  var _0x100887 = _0x24391e.dynCall_viiiiiiiji = function () {
    return (_0x100887 = _0x24391e.dynCall_viiiiiiiji = _0x24391e.asm.Mt).apply(null, arguments);
  };
  var _0x56effc = _0x24391e.dynCall_viiiiiiiiji = function () {
    return (_0x56effc = _0x24391e.dynCall_viiiiiiiiji = _0x24391e.asm.Nt).apply(null, arguments);
  };
  var _0x5336c5 = _0x24391e.dynCall_viiiiiiiiiji = function () {
    return (_0x5336c5 = _0x24391e.dynCall_viiiiiiiiiji = _0x24391e.asm.Ot).apply(null, arguments);
  };
  var _0x42bbcf = _0x24391e.dynCall_ijiijii = function () {
    return (_0x42bbcf = _0x24391e.dynCall_ijiijii = _0x24391e.asm.Pt).apply(null, arguments);
  };
  var _0x582134 = _0x24391e.dynCall_vjjiiiii = function () {
    return (_0x582134 = _0x24391e.dynCall_vjjiiiii = _0x24391e.asm.Qt).apply(null, arguments);
  };
  var _0x2249cf = _0x24391e.dynCall_vjjii = function () {
    return (_0x2249cf = _0x24391e.dynCall_vjjii = _0x24391e.asm.Rt).apply(null, arguments);
  };
  var _0x5a9d8f = _0x24391e.dynCall_ijiiji = function () {
    return (_0x5a9d8f = _0x24391e.dynCall_ijiiji = _0x24391e.asm.St).apply(null, arguments);
  };
  var _0x2f2d7d = _0x24391e.dynCall_ijiiiii = function () {
    return (_0x2f2d7d = _0x24391e.dynCall_ijiiiii = _0x24391e.asm.Tt).apply(null, arguments);
  };
  var _0x13674b = _0x24391e.dynCall_ijiiiiji = function () {
    return (_0x13674b = _0x24391e.dynCall_ijiiiiji = _0x24391e.asm.Ut).apply(null, arguments);
  };
  var _0x541f92 = _0x24391e.dynCall_jiiiiii = function () {
    return (_0x541f92 = _0x24391e.dynCall_jiiiiii = _0x24391e.asm.Vt).apply(null, arguments);
  };
  var _0x1221a6 = _0x24391e.dynCall_ddii = function () {
    return (_0x1221a6 = _0x24391e.dynCall_ddii = _0x24391e.asm.Wt).apply(null, arguments);
  };
  var _0x1bd0f9 = _0x24391e.dynCall_idiii = function () {
    return (_0x1bd0f9 = _0x24391e.dynCall_idiii = _0x24391e.asm.Xt).apply(null, arguments);
  };
  var _0x5f0f9a = _0x24391e.dynCall_vdiii = function () {
    return (_0x5f0f9a = _0x24391e.dynCall_vdiii = _0x24391e.asm.Yt).apply(null, arguments);
  };
  var _0x42557a = _0x24391e.dynCall_jdii = function () {
    return (_0x42557a = _0x24391e.dynCall_jdii = _0x24391e.asm.Zt).apply(null, arguments);
  };
  var _0x2509ff = _0x24391e.dynCall_iijjji = function () {
    return (_0x2509ff = _0x24391e.dynCall_iijjji = _0x24391e.asm._t).apply(null, arguments);
  };
  var _0x52b873 = _0x24391e.dynCall_viijjji = function () {
    return (_0x52b873 = _0x24391e.dynCall_viijjji = _0x24391e.asm.$t).apply(null, arguments);
  };
  var _0x578b8f = _0x24391e.dynCall_vdii = function () {
    return (_0x578b8f = _0x24391e.dynCall_vdii = _0x24391e.asm.au).apply(null, arguments);
  };
  var _0x250086 = _0x24391e.dynCall_iiiijii = function () {
    return (_0x250086 = _0x24391e.dynCall_iiiijii = _0x24391e.asm.bu).apply(null, arguments);
  };
  var _0x5b824f = _0x24391e.dynCall_jijji = function () {
    return (_0x5b824f = _0x24391e.dynCall_jijji = _0x24391e.asm.cu).apply(null, arguments);
  };
  var _0x57c542 = _0x24391e.dynCall_diddi = function () {
    return (_0x57c542 = _0x24391e.dynCall_diddi = _0x24391e.asm.du).apply(null, arguments);
  };
  var _0x34f38a = _0x24391e.dynCall_iijjii = function () {
    return (_0x34f38a = _0x24391e.dynCall_iijjii = _0x24391e.asm.eu).apply(null, arguments);
  };
  var _0x53312a = _0x24391e.dynCall_viiiiijji = function () {
    return (_0x53312a = _0x24391e.dynCall_viiiiijji = _0x24391e.asm.fu).apply(null, arguments);
  };
  var _0x56d9e2 = _0x24391e.dynCall_viiiiji = function () {
    return (_0x56d9e2 = _0x24391e.dynCall_viiiiji = _0x24391e.asm.gu).apply(null, arguments);
  };
  var _0x2ee8ba = _0x24391e.dynCall_vijjjii = function () {
    return (_0x2ee8ba = _0x24391e.dynCall_vijjjii = _0x24391e.asm.hu).apply(null, arguments);
  };
  var _0x2f3a30 = _0x24391e.dynCall_jjjji = function () {
    return (_0x2f3a30 = _0x24391e.dynCall_jjjji = _0x24391e.asm.iu).apply(null, arguments);
  };
  var _0x348abe = _0x24391e.dynCall_viijijii = function () {
    return (_0x348abe = _0x24391e.dynCall_viijijii = _0x24391e.asm.ju).apply(null, arguments);
  };
  var _0x344ecf = _0x24391e.dynCall_viijijiii = function () {
    return (_0x344ecf = _0x24391e.dynCall_viijijiii = _0x24391e.asm.ku).apply(null, arguments);
  };
  var _0x115ea0 = _0x24391e.dynCall_vijiji = function () {
    return (_0x115ea0 = _0x24391e.dynCall_vijiji = _0x24391e.asm.lu).apply(null, arguments);
  };
  var _0x1f7551 = _0x24391e.dynCall_viijiijiii = function () {
    return (_0x1f7551 = _0x24391e.dynCall_viijiijiii = _0x24391e.asm.mu).apply(null, arguments);
  };
  var _0x5726c0 = _0x24391e.dynCall_viiiijiiii = function () {
    return (_0x5726c0 = _0x24391e.dynCall_viiiijiiii = _0x24391e.asm.nu).apply(null, arguments);
  };
  var _0x16347d = _0x24391e.dynCall_viijjii = function () {
    return (_0x16347d = _0x24391e.dynCall_viijjii = _0x24391e.asm.ou).apply(null, arguments);
  };
  var _0x52d87e = _0x24391e.dynCall_jiiiiiiiii = function () {
    return (_0x52d87e = _0x24391e.dynCall_jiiiiiiiii = _0x24391e.asm.pu).apply(null, arguments);
  };
  var _0x21a22c = _0x24391e.dynCall_iiiiijii = function () {
    return (_0x21a22c = _0x24391e.dynCall_iiiiijii = _0x24391e.asm.qu).apply(null, arguments);
  };
  var _0x4ba6d2 = _0x24391e.dynCall_iiiidii = function () {
    return (_0x4ba6d2 = _0x24391e.dynCall_iiiidii = _0x24391e.asm.ru).apply(null, arguments);
  };
  var _0x4c781a = _0x24391e.dynCall_iidfii = function () {
    return (_0x4c781a = _0x24391e.dynCall_iidfii = _0x24391e.asm.su).apply(null, arguments);
  };
  var _0x3bfb00 = _0x24391e.dynCall_iidfi = function () {
    return (_0x3bfb00 = _0x24391e.dynCall_iidfi = _0x24391e.asm.tu).apply(null, arguments);
  };
  var _0xefbf00 = _0x24391e.dynCall_iiddfi = function () {
    return (_0xefbf00 = _0x24391e.dynCall_iiddfi = _0x24391e.asm.uu).apply(null, arguments);
  };
  var _0x87c3e6 = _0x24391e.dynCall_iijfii = function () {
    return (_0x87c3e6 = _0x24391e.dynCall_iijfii = _0x24391e.asm.vu).apply(null, arguments);
  };
  var _0x23ac8f = _0x24391e.dynCall_iijfi = function () {
    return (_0x23ac8f = _0x24391e.dynCall_iijfi = _0x24391e.asm.wu).apply(null, arguments);
  };
  var _0x117f4f = _0x24391e.dynCall_iijjfi = function () {
    return (_0x117f4f = _0x24391e.dynCall_iijjfi = _0x24391e.asm.xu).apply(null, arguments);
  };
  var _0x2945e2 = _0x24391e.dynCall_iiiiffiiiji = function () {
    return (_0x2945e2 = _0x24391e.dynCall_iiiiffiiiji = _0x24391e.asm.yu).apply(null, arguments);
  };
  var _0x31fa32 = _0x24391e.dynCall_iiidfii = function () {
    return (_0x31fa32 = _0x24391e.dynCall_iiidfii = _0x24391e.asm.zu).apply(null, arguments);
  };
  var _0x1d404f = _0x24391e.dynCall_iiijfii = function () {
    return (_0x1d404f = _0x24391e.dynCall_iiijfii = _0x24391e.asm.Au).apply(null, arguments);
  };
  var _0x4d6f37 = _0x24391e.dynCall_jiiiiiii = function () {
    return (_0x4d6f37 = _0x24391e.dynCall_jiiiiiii = _0x24391e.asm.Bu).apply(null, arguments);
  };
  var _0x404bd2 = _0x24391e.dynCall_fiiiiiii = function () {
    return (_0x404bd2 = _0x24391e.dynCall_fiiiiiii = _0x24391e.asm.Cu).apply(null, arguments);
  };
  var _0xb1503d = _0x24391e.dynCall_iiiiffiiiii = function () {
    return (_0xb1503d = _0x24391e.dynCall_iiiiffiiiii = _0x24391e.asm.Du).apply(null, arguments);
  };
  var _0x49f089 = _0x24391e.dynCall_iiiidfii = function () {
    return (_0x49f089 = _0x24391e.dynCall_iiiidfii = _0x24391e.asm.Eu).apply(null, arguments);
  };
  var _0x3f71d8 = _0x24391e.dynCall_iiiijfii = function () {
    return (_0x3f71d8 = _0x24391e.dynCall_iiiijfii = _0x24391e.asm.Fu).apply(null, arguments);
  };
  var _0x15698b = _0x24391e.dynCall_iiiiffii = function () {
    return (_0x15698b = _0x24391e.dynCall_iiiiffii = _0x24391e.asm.Gu).apply(null, arguments);
  };
  var _0x3aa631 = _0x24391e.dynCall_jiiiiji = function () {
    return (_0x3aa631 = _0x24391e.dynCall_jiiiiji = _0x24391e.asm.Hu).apply(null, arguments);
  };
  var _0x29aae9 = _0x24391e.dynCall_fiiiifi = function () {
    return (_0x29aae9 = _0x24391e.dynCall_fiiiifi = _0x24391e.asm.Iu).apply(null, arguments);
  };
  var _0x4fdfc8 = _0x24391e.dynCall_didii = function () {
    return (_0x4fdfc8 = _0x24391e.dynCall_didii = _0x24391e.asm.Ju).apply(null, arguments);
  };
  var _0x243c0a = _0x24391e.dynCall_iiijjii = function () {
    return (_0x243c0a = _0x24391e.dynCall_iiijjii = _0x24391e.asm.Ku).apply(null, arguments);
  };
  var _0x50c5eb = _0x24391e.dynCall_vidiji = function () {
    return (_0x50c5eb = _0x24391e.dynCall_vidiji = _0x24391e.asm.Lu).apply(null, arguments);
  };
  var _0xfc2da4 = _0x24391e.dynCall_vidjii = function () {
    return (_0xfc2da4 = _0x24391e.dynCall_vidjii = _0x24391e.asm.Mu).apply(null, arguments);
  };
  var _0x13ea8f = _0x24391e.dynCall_vij = function () {
    return (_0x13ea8f = _0x24391e.dynCall_vij = _0x24391e.asm.Nu).apply(null, arguments);
  };
  var _0x221740 = _0x24391e.dynCall_iiiijiii = function () {
    return (_0x221740 = _0x24391e.dynCall_iiiijiii = _0x24391e.asm.Ou).apply(null, arguments);
  };
  var _0x39419a = _0x24391e.dynCall_iiiij = function () {
    return (_0x39419a = _0x24391e.dynCall_iiiij = _0x24391e.asm.Pu).apply(null, arguments);
  };
  var _0x357e15 = _0x24391e.dynCall_ijj = function () {
    return (_0x357e15 = _0x24391e.dynCall_ijj = _0x24391e.asm.Qu).apply(null, arguments);
  };
  var _0x3ef634 = _0x24391e.dynCall_vjji = function () {
    return (_0x3ef634 = _0x24391e.dynCall_vjji = _0x24391e.asm.Ru).apply(null, arguments);
  };
  var _0x6ee284 = _0x24391e.dynCall_ij = function () {
    return (_0x6ee284 = _0x24391e.dynCall_ij = _0x24391e.asm.Su).apply(null, arguments);
  };
  var _0x534376 = _0x24391e.dynCall_vif = function () {
    return (_0x534376 = _0x24391e.dynCall_vif = _0x24391e.asm.Tu).apply(null, arguments);
  };
  var _0x10a78d = _0x24391e.dynCall_vid = function () {
    return (_0x10a78d = _0x24391e.dynCall_vid = _0x24391e.asm.Uu).apply(null, arguments);
  };
  var _0x3deab7 = _0x24391e.dynCall_viiiiif = function () {
    return (_0x3deab7 = _0x24391e.dynCall_viiiiif = _0x24391e.asm.Vu).apply(null, arguments);
  };
  var _0x199d89 = _0x24391e.dynCall_viiiif = function () {
    return (_0x199d89 = _0x24391e.dynCall_viiiif = _0x24391e.asm.Wu).apply(null, arguments);
  };
  var _0x790225 = _0x24391e.dynCall_viiiiiif = function () {
    return (_0x790225 = _0x24391e.dynCall_viiiiiif = _0x24391e.asm.Xu).apply(null, arguments);
  };
  var _0x355ebd = _0x24391e.dynCall_iiif = function () {
    return (_0x355ebd = _0x24391e.dynCall_iiif = _0x24391e.asm.Yu).apply(null, arguments);
  };
  var _0x548c8a = _0x24391e.dynCall_fif = function () {
    return (_0x548c8a = _0x24391e.dynCall_fif = _0x24391e.asm.Zu).apply(null, arguments);
  };
  var _0x5b5483 = _0x24391e.dynCall_iiiiiifff = function () {
    return (_0x5b5483 = _0x24391e.dynCall_iiiiiifff = _0x24391e.asm._u).apply(null, arguments);
  };
  var _0x8d7e65 = _0x24391e.dynCall_iiiiiifiif = function () {
    return (_0x8d7e65 = _0x24391e.dynCall_iiiiiifiif = _0x24391e.asm.$u).apply(null, arguments);
  };
  var _0x5c1498 = _0x24391e.dynCall_iiiiiiifiif = function () {
    return (_0x5c1498 = _0x24391e.dynCall_iiiiiiifiif = _0x24391e.asm.av).apply(null, arguments);
  };
  var _0x4eedf8 = _0x24391e.dynCall_fiff = function () {
    return (_0x4eedf8 = _0x24391e.dynCall_fiff = _0x24391e.asm.bv).apply(null, arguments);
  };
  var _0x24b47f = _0x24391e.dynCall_fiiiiiifiifif = function () {
    return (_0x24b47f = _0x24391e.dynCall_fiiiiiifiifif = _0x24391e.asm.cv).apply(null, arguments);
  };
  var _0x5dbfe1 = _0x24391e.dynCall_fiiiiiifiiiif = function () {
    return (_0x5dbfe1 = _0x24391e.dynCall_fiiiiiifiiiif = _0x24391e.asm.dv).apply(null, arguments);
  };
  var _0x415ab9 = _0x24391e.dynCall_iifiiiijii = function () {
    return (_0x415ab9 = _0x24391e.dynCall_iifiiiijii = _0x24391e.asm.ev).apply(null, arguments);
  };
  var _0x395af6 = _0x24391e.dynCall_vifijii = function () {
    return (_0x395af6 = _0x24391e.dynCall_vifijii = _0x24391e.asm.fv).apply(null, arguments);
  };
  var _0xb25097 = _0x24391e.dynCall_iiiifffiii = function () {
    return (_0xb25097 = _0x24391e.dynCall_iiiifffiii = _0x24391e.asm.gv).apply(null, arguments);
  };
  var _0xafd349 = _0x24391e.dynCall_iiiifffffi = function () {
    return (_0xafd349 = _0x24391e.dynCall_iiiifffffi = _0x24391e.asm.hv).apply(null, arguments);
  };
  var _0x30787e = _0x24391e.dynCall_viffiiiif = function () {
    return (_0x30787e = _0x24391e.dynCall_viffiiiif = _0x24391e.asm.iv).apply(null, arguments);
  };
  var _0x555b02 = _0x24391e.dynCall_viffiifffffiii = function () {
    return (_0x555b02 = _0x24391e.dynCall_viffiifffffiii = _0x24391e.asm.jv).apply(null, arguments);
  };
  var _0x235c33 = _0x24391e.dynCall_viffffiifffiiiiif = function () {
    return (_0x235c33 = _0x24391e.dynCall_viffffiifffiiiiif = _0x24391e.asm.kv).apply(null, arguments);
  };
  var _0x12f5fd = _0x24391e.dynCall_iiiifffffii = function () {
    return (_0x12f5fd = _0x24391e.dynCall_iiiifffffii = _0x24391e.asm.lv).apply(null, arguments);
  };
  var _0x4b600e = _0x24391e.dynCall_viiiiiiiiiiifii = function () {
    return (_0x4b600e = _0x24391e.dynCall_viiiiiiiiiiifii = _0x24391e.asm.mv).apply(null, arguments);
  };
  var _0x4d3070 = _0x24391e.dynCall_viff = function () {
    return (_0x4d3070 = _0x24391e.dynCall_viff = _0x24391e.asm.nv).apply(null, arguments);
  };
  var _0x8ee6e8 = _0x24391e.dynCall_iiiiifiiiiif = function () {
    return (_0x8ee6e8 = _0x24391e.dynCall_iiiiifiiiiif = _0x24391e.asm.ov).apply(null, arguments);
  };
  var _0xcdc311 = _0x24391e.dynCall_viiifiiiii = function () {
    return (_0xcdc311 = _0x24391e.dynCall_viiifiiiii = _0x24391e.asm.pv).apply(null, arguments);
  };
  var _0x22efe3 = _0x24391e.dynCall_viiiifiiiiif = function () {
    return (_0x22efe3 = _0x24391e.dynCall_viiiifiiiiif = _0x24391e.asm.qv).apply(null, arguments);
  };
  var _0xa08149 = _0x24391e.dynCall_iifff = function () {
    return (_0xa08149 = _0x24391e.dynCall_iifff = _0x24391e.asm.rv).apply(null, arguments);
  };
  var _0x1b5da5 = _0x24391e.dynCall_iif = function () {
    return (_0x1b5da5 = _0x24391e.dynCall_iif = _0x24391e.asm.sv).apply(null, arguments);
  };
  var _0x3cbd7c = _0x24391e.dynCall_viijijj = function () {
    return (_0x3cbd7c = _0x24391e.dynCall_viijijj = _0x24391e.asm.tv).apply(null, arguments);
  };
  var _0x8a59fa = _0x24391e.dynCall_viijj = function () {
    return (_0x8a59fa = _0x24391e.dynCall_viijj = _0x24391e.asm.uv).apply(null, arguments);
  };
  var _0x3b7019 = _0x24391e.dynCall_viiiij = function () {
    return (_0x3b7019 = _0x24391e.dynCall_viiiij = _0x24391e.asm.vv).apply(null, arguments);
  };
  var _0x54ee14 = _0x24391e.dynCall_iiijji = function () {
    return (_0x54ee14 = _0x24391e.dynCall_iiijji = _0x24391e.asm.wv).apply(null, arguments);
  };
  var _0x2d32ee = _0x24391e.dynCall_ijjiiiii = function () {
    return (_0x2d32ee = _0x24391e.dynCall_ijjiiiii = _0x24391e.asm.xv).apply(null, arguments);
  };
  var _0x3b3254 = _0x24391e.dynCall_vidd = function () {
    return (_0x3b3254 = _0x24391e.dynCall_vidd = _0x24391e.asm.yv).apply(null, arguments);
  };
  var _0x19a96d = _0x24391e.dynCall_iiiiiifffiiifiii = function () {
    return (_0x19a96d = _0x24391e.dynCall_iiiiiifffiiifiii = _0x24391e.asm.zv).apply(null, arguments);
  };
  var _0x13ebb3 = _0x24391e.dynCall_viid = function () {
    return (_0x13ebb3 = _0x24391e.dynCall_viid = _0x24391e.asm.Av).apply(null, arguments);
  };
  var _0x744881 = _0x24391e.dynCall_viiif = function () {
    return (_0x744881 = _0x24391e.dynCall_viiif = _0x24391e.asm.Bv).apply(null, arguments);
  };
  var _0x122f55 = _0x24391e.dynCall_fiiiif = function () {
    return (_0x122f55 = _0x24391e.dynCall_fiiiif = _0x24391e.asm.Cv).apply(null, arguments);
  };
  var _0x5692bf = _0x24391e.dynCall_iiiiiff = function () {
    return (_0x5692bf = _0x24391e.dynCall_iiiiiff = _0x24391e.asm.Dv).apply(null, arguments);
  };
  var _0x2f4444 = _0x24391e.dynCall_viffff = function () {
    return (_0x2f4444 = _0x24391e.dynCall_viffff = _0x24391e.asm.Ev).apply(null, arguments);
  };
  var _0xd8de97 = _0x24391e.dynCall_vifff = function () {
    return (_0xd8de97 = _0x24391e.dynCall_vifff = _0x24391e.asm.Fv).apply(null, arguments);
  };
  var _0x2cf15b = _0x24391e.dynCall_viifff = function () {
    return (_0x2cf15b = _0x24391e.dynCall_viifff = _0x24391e.asm.Gv).apply(null, arguments);
  };
  var _0x558e44 = _0x24391e.dynCall_vf = function () {
    return (_0x558e44 = _0x24391e.dynCall_vf = _0x24391e.asm.Hv).apply(null, arguments);
  };
  var _0x135a07 = _0x24391e.dynCall_vffff = function () {
    return (_0x135a07 = _0x24391e.dynCall_vffff = _0x24391e.asm.Iv).apply(null, arguments);
  };
  var _0x489d8e = _0x24391e.dynCall_vff = function () {
    return (_0x489d8e = _0x24391e.dynCall_vff = _0x24391e.asm.Jv).apply(null, arguments);
  };
  var _0x5b848b = _0x24391e.dynCall_fff = function () {
    return (_0x5b848b = _0x24391e.dynCall_fff = _0x24391e.asm.Kv).apply(null, arguments);
  };
  var _0x47d0d5 = _0x24391e.dynCall_f = function () {
    return (_0x47d0d5 = _0x24391e.dynCall_f = _0x24391e.asm.Lv).apply(null, arguments);
  };
  var _0x399b31 = _0x24391e.dynCall_vfff = function () {
    return (_0x399b31 = _0x24391e.dynCall_vfff = _0x24391e.asm.Mv).apply(null, arguments);
  };
  var _0x392be0 = _0x24391e.dynCall_ff = function () {
    return (_0x392be0 = _0x24391e.dynCall_ff = _0x24391e.asm.Nv).apply(null, arguments);
  };
  var _0x4b5dd6 = _0x24391e.dynCall_iiifiifii = function () {
    return (_0x4b5dd6 = _0x24391e.dynCall_iiifiifii = _0x24391e.asm.Ov).apply(null, arguments);
  };
  var _0x2f1ba7 = _0x24391e.dynCall_fiif = function () {
    return (_0x2f1ba7 = _0x24391e.dynCall_fiif = _0x24391e.asm.Pv).apply(null, arguments);
  };
  var _0x15143d = _0x24391e.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x15143d = _0x24391e.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x24391e.asm.Qv).apply(null, arguments);
  };
  var _0x1e25e2 = _0x24391e.dynCall_viififi = function () {
    return (_0x1e25e2 = _0x24391e.dynCall_viififi = _0x24391e.asm.Rv).apply(null, arguments);
  };
  var _0x37263f = _0x24391e.dynCall_viiiiiiiijiii = function () {
    return (_0x37263f = _0x24391e.dynCall_viiiiiiiijiii = _0x24391e.asm.Sv).apply(null, arguments);
  };
  var _0x7f8907 = _0x24391e.dynCall_d = function () {
    return (_0x7f8907 = _0x24391e.dynCall_d = _0x24391e.asm.Tv).apply(null, arguments);
  };
  function _0x1f8fd3(_0x3eda92, _0x476df2) {
    var _0x34055a = _0x27ee1f();
    try {
      return _0x5a9657(_0x3eda92, _0x476df2);
    } catch (_0x4790f6) {
      _0x1df486(_0x34055a);
      if (_0x4790f6 !== _0x4790f6 + 0 && _0x4790f6 !== "longjmp") {
        throw _0x4790f6;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4f137c(_0x295d72, _0x1ea261, _0x331afb) {
    var _0x2f9760 = _0x27ee1f();
    try {
      return _0x9d1641(_0x295d72, _0x1ea261, _0x331afb);
    } catch (_0x1c04d7) {
      _0x1df486(_0x2f9760);
      if (_0x1c04d7 !== _0x1c04d7 + 0 && _0x1c04d7 !== "longjmp") {
        throw _0x1c04d7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xc1600c(_0x3deb8a, _0x4fc35e, _0x1e937a, _0x51fd30) {
    var _0x4d05f6 = _0x27ee1f();
    try {
      _0x4fa5fa(_0x3deb8a, _0x4fc35e, _0x1e937a, _0x51fd30);
    } catch (_0x111562) {
      _0x1df486(_0x4d05f6);
      if (_0x111562 !== _0x111562 + 0 && _0x111562 !== "longjmp") {
        throw _0x111562;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3f8b9d(_0x348853, _0x2c4c1f, _0x58aa8a, _0x1b44d1, _0x4cb3fe, _0x2441ac) {
    var _0x4ce7a0 = _0x27ee1f();
    try {
      return _0x13dc9d(_0x348853, _0x2c4c1f, _0x58aa8a, _0x1b44d1, _0x4cb3fe, _0x2441ac);
    } catch (_0x31a736) {
      _0x1df486(_0x4ce7a0);
      if (_0x31a736 !== _0x31a736 + 0 && _0x31a736 !== "longjmp") {
        throw _0x31a736;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3cec49(_0x228d02, _0x15417a, _0x2ec5bb, _0x41eed5) {
    var _0x1e356b = _0x27ee1f();
    try {
      return _0x348186(_0x228d02, _0x15417a, _0x2ec5bb, _0x41eed5);
    } catch (_0x3e8ba2) {
      _0x1df486(_0x1e356b);
      if (_0x3e8ba2 !== _0x3e8ba2 + 0 && _0x3e8ba2 !== "longjmp") {
        throw _0x3e8ba2;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x32e2b5(_0x29d4b7, _0xadb72b, _0x110a5c, _0x3b19f2, _0x4fc9ee) {
    var _0x4c0c67 = _0x27ee1f();
    try {
      _0x1e2588(_0x29d4b7, _0xadb72b, _0x110a5c, _0x3b19f2, _0x4fc9ee);
    } catch (_0x29dc33) {
      _0x1df486(_0x4c0c67);
      if (_0x29dc33 !== _0x29dc33 + 0 && _0x29dc33 !== "longjmp") {
        throw _0x29dc33;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x419669(_0x41a24d, _0x2f3cf4, _0x4757c0, _0x3ffb87, _0x6998d6) {
    var _0x28c037 = _0x27ee1f();
    try {
      return _0x5bf0d7(_0x41a24d, _0x2f3cf4, _0x4757c0, _0x3ffb87, _0x6998d6);
    } catch (_0x4e32e8) {
      _0x1df486(_0x28c037);
      if (_0x4e32e8 !== _0x4e32e8 + 0 && _0x4e32e8 !== "longjmp") {
        throw _0x4e32e8;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x11a91e(_0x3a141f, _0x20cbf7, _0xe6c96f, _0x5030cf) {
    var _0x387927 = _0x27ee1f();
    try {
      return _0xb8aa81(_0x3a141f, _0x20cbf7, _0xe6c96f, _0x5030cf);
    } catch (_0x316d9c) {
      _0x1df486(_0x387927);
      if (_0x316d9c !== _0x316d9c + 0 && _0x316d9c !== "longjmp") {
        throw _0x316d9c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x376812(_0x54c7c3, _0x31cdb5, _0x433661, _0xa3d3e8) {
    var _0xe4cb9d = _0x27ee1f();
    try {
      return _0x5dc8d7(_0x54c7c3, _0x31cdb5, _0x433661, _0xa3d3e8);
    } catch (_0x78d8f1) {
      _0x1df486(_0xe4cb9d);
      if (_0x78d8f1 !== _0x78d8f1 + 0 && _0x78d8f1 !== "longjmp") {
        throw _0x78d8f1;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x25dd52(_0x5be214, _0x1b5675, _0x114cd8, _0x3d65e5) {
    var _0xce4cf = _0x27ee1f();
    try {
      _0xba9ff5(_0x5be214, _0x1b5675, _0x114cd8, _0x3d65e5);
    } catch (_0x576fc7) {
      _0x1df486(_0xce4cf);
      if (_0x576fc7 !== _0x576fc7 + 0 && _0x576fc7 !== "longjmp") {
        throw _0x576fc7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5c269b(_0x5e7e91, _0x4e0102, _0x41b209) {
    var _0x115ef4 = _0x27ee1f();
    try {
      _0x55ba98(_0x5e7e91, _0x4e0102, _0x41b209);
    } catch (_0x41ab79) {
      _0x1df486(_0x115ef4);
      if (_0x41ab79 !== _0x41ab79 + 0 && _0x41ab79 !== "longjmp") {
        throw _0x41ab79;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x56a5df(_0x3666ee, _0x20e5b7) {
    var _0x19c810 = _0x27ee1f();
    try {
      _0xe5b92e(_0x3666ee, _0x20e5b7);
    } catch (_0x3acda9) {
      _0x1df486(_0x19c810);
      if (_0x3acda9 !== _0x3acda9 + 0 && _0x3acda9 !== "longjmp") {
        throw _0x3acda9;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3e2961(_0x5eeb82) {
    var _0x47b71d = _0x27ee1f();
    try {
      _0x3fcf98(_0x5eeb82);
    } catch (_0x20a675) {
      _0x1df486(_0x47b71d);
      if (_0x20a675 !== _0x20a675 + 0 && _0x20a675 !== "longjmp") {
        throw _0x20a675;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4169b3(_0xaf352d) {
    var _0x50248f = _0x27ee1f();
    try {
      return _0x42fc8a(_0xaf352d);
    } catch (_0x413568) {
      _0x1df486(_0x50248f);
      if (_0x413568 !== _0x413568 + 0 && _0x413568 !== "longjmp") {
        throw _0x413568;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3cbfcf(_0x326266, _0x3f980a, _0xf39315, _0x940272, _0x548617, _0x3dc64e, _0x5c2335, _0xbb7525) {
    var _0x2044d0 = _0x27ee1f();
    try {
      return _0x1a07ea(_0x326266, _0x3f980a, _0xf39315, _0x940272, _0x548617, _0x3dc64e, _0x5c2335, _0xbb7525);
    } catch (_0x535b4f) {
      _0x1df486(_0x2044d0);
      if (_0x535b4f !== _0x535b4f + 0 && _0x535b4f !== "longjmp") {
        throw _0x535b4f;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4c8ef4(_0x3e8d41, _0x943256, _0x303247, _0x4057be, _0x4fd1ec, _0x36b15b) {
    var _0x5076cd = _0x27ee1f();
    try {
      _0x352f8e(_0x3e8d41, _0x943256, _0x303247, _0x4057be, _0x4fd1ec, _0x36b15b);
    } catch (_0x14fd0a) {
      _0x1df486(_0x5076cd);
      if (_0x14fd0a !== _0x14fd0a + 0 && _0x14fd0a !== "longjmp") {
        throw _0x14fd0a;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2932ff(_0xe33780, _0x58d161, _0x296ee1, _0xbc13f5, _0x4d99d1, _0x42bbc8, _0x4900f1) {
    var _0x285128 = _0x27ee1f();
    try {
      return _0x4c5496(_0xe33780, _0x58d161, _0x296ee1, _0xbc13f5, _0x4d99d1, _0x42bbc8, _0x4900f1);
    } catch (_0x6c083a) {
      _0x1df486(_0x285128);
      if (_0x6c083a !== _0x6c083a + 0 && _0x6c083a !== "longjmp") {
        throw _0x6c083a;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x499280(_0x14e2ae, _0x1183ae, _0x15f166, _0x3d3cfc, _0x22bee1, _0x400cf5, _0x3603e3, _0x31bd62) {
    var _0x43b2b0 = _0x27ee1f();
    try {
      _0x3d15bb(_0x14e2ae, _0x1183ae, _0x15f166, _0x3d3cfc, _0x22bee1, _0x400cf5, _0x3603e3, _0x31bd62);
    } catch (_0x81bd1c) {
      _0x1df486(_0x43b2b0);
      if (_0x81bd1c !== _0x81bd1c + 0 && _0x81bd1c !== "longjmp") {
        throw _0x81bd1c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x216db3(_0x162e2b, _0x5cce30, _0x2b241c, _0x2a251e, _0x367113, _0x9d8497, _0x2f24a0) {
    var _0x4cd7b4 = _0x27ee1f();
    try {
      _0x3ded6d(_0x162e2b, _0x5cce30, _0x2b241c, _0x2a251e, _0x367113, _0x9d8497, _0x2f24a0);
    } catch (_0x1cf653) {
      _0x1df486(_0x4cd7b4);
      if (_0x1cf653 !== _0x1cf653 + 0 && _0x1cf653 !== "longjmp") {
        throw _0x1cf653;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x25dc6e(_0x24abe4, _0x1b3a0a, _0x229939) {
    var _0x579ef3 = _0x27ee1f();
    try {
      return _0x1a49db(_0x24abe4, _0x1b3a0a, _0x229939);
    } catch (_0x33d805) {
      _0x1df486(_0x579ef3);
      if (_0x33d805 !== _0x33d805 + 0 && _0x33d805 !== "longjmp") {
        throw _0x33d805;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x498161(_0x38ccfa, _0x47ed5a, _0x58ebc1, _0x2331d5, _0x873522) {
    var _0x476b9b = _0x27ee1f();
    try {
      _0x2aed64(_0x38ccfa, _0x47ed5a, _0x58ebc1, _0x2331d5, _0x873522);
    } catch (_0x3e8204) {
      _0x1df486(_0x476b9b);
      if (_0x3e8204 !== _0x3e8204 + 0 && _0x3e8204 !== "longjmp") {
        throw _0x3e8204;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2c6557(_0x33d40a, _0x2dd45c, _0x73cfee, _0x4083d3, _0x3f4b79) {
    var _0x3827bf = _0x27ee1f();
    try {
      _0x178ba6(_0x33d40a, _0x2dd45c, _0x73cfee, _0x4083d3, _0x3f4b79);
    } catch (_0x3ae53f) {
      _0x1df486(_0x3827bf);
      if (_0x3ae53f !== _0x3ae53f + 0 && _0x3ae53f !== "longjmp") {
        throw _0x3ae53f;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x73d291(_0x313f44, _0x458ca9, _0x22d2e0, _0x93ef77, _0x463520, _0x40557b, _0x24d8e2, _0x116d49, _0x2573d8, _0x266fd8, _0x3a3a0a) {
    var _0xb7bc8c = _0x27ee1f();
    try {
      _0x36b4b5(_0x313f44, _0x458ca9, _0x22d2e0, _0x93ef77, _0x463520, _0x40557b, _0x24d8e2, _0x116d49, _0x2573d8, _0x266fd8, _0x3a3a0a);
    } catch (_0x105940) {
      _0x1df486(_0xb7bc8c);
      if (_0x105940 !== _0x105940 + 0 && _0x105940 !== "longjmp") {
        throw _0x105940;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x466849(_0x2f7a8e, _0x58a067, _0xb21a47, _0x4131a8, _0x231a01, _0x2eaeeb, _0x2fe28f, _0x147014, _0x1eef80) {
    var _0x3ece20 = _0x27ee1f();
    try {
      return _0x54b547(_0x2f7a8e, _0x58a067, _0xb21a47, _0x4131a8, _0x231a01, _0x2eaeeb, _0x2fe28f, _0x147014, _0x1eef80);
    } catch (_0x492b68) {
      _0x1df486(_0x3ece20);
      if (_0x492b68 !== _0x492b68 + 0 && _0x492b68 !== "longjmp") {
        throw _0x492b68;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1217c5(_0x531405, _0x46da67, _0x1a50a6, _0x1bffd1, _0x189ccb, _0x47ec2d, _0x52a118, _0x2f44e4, _0x4a4271) {
    var _0x495919 = _0x27ee1f();
    try {
      _0x4d3687(_0x531405, _0x46da67, _0x1a50a6, _0x1bffd1, _0x189ccb, _0x47ec2d, _0x52a118, _0x2f44e4, _0x4a4271);
    } catch (_0x332ca8) {
      _0x1df486(_0x495919);
      if (_0x332ca8 !== _0x332ca8 + 0 && _0x332ca8 !== "longjmp") {
        throw _0x332ca8;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x46786e(_0xcd4e6d, _0x94e1eb, _0x4229da, _0x5e150d, _0x1ad026, _0x17c595) {
    var _0x35b959 = _0x27ee1f();
    try {
      return _0x357520(_0xcd4e6d, _0x94e1eb, _0x4229da, _0x5e150d, _0x1ad026, _0x17c595);
    } catch (_0x192bc4) {
      _0x1df486(_0x35b959);
      if (_0x192bc4 !== _0x192bc4 + 0 && _0x192bc4 !== "longjmp") {
        throw _0x192bc4;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x41616b(_0x34cf69, _0x196359) {
    var _0x83163c = _0x27ee1f();
    try {
      return _0x4932fa(_0x34cf69, _0x196359);
    } catch (_0x2b88d6) {
      _0x1df486(_0x83163c);
      if (_0x2b88d6 !== _0x2b88d6 + 0 && _0x2b88d6 !== "longjmp") {
        throw _0x2b88d6;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x20b9b8(_0x2d43ba, _0xe4d79f, _0x1ae235, _0xbdd7e2, _0x2d1619, _0x5a5f7a, _0x5d27ca, _0x4096ca, _0x5d789a, _0x3e94f4, _0x398f2c, _0x472e74, _0x5505e7, _0x210eb8, _0x4963ed, _0x564d75, _0x30fa17) {
    var _0x5d90cb = _0x27ee1f();
    try {
      _0x4e934e(_0x2d43ba, _0xe4d79f, _0x1ae235, _0xbdd7e2, _0x2d1619, _0x5a5f7a, _0x5d27ca, _0x4096ca, _0x5d789a, _0x3e94f4, _0x398f2c, _0x472e74, _0x5505e7, _0x210eb8, _0x4963ed, _0x564d75, _0x30fa17);
    } catch (_0x1a9d70) {
      _0x1df486(_0x5d90cb);
      if (_0x1a9d70 !== _0x1a9d70 + 0 && _0x1a9d70 !== "longjmp") {
        throw _0x1a9d70;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x49bfe6(_0x30055e, _0x52dc84, _0x5e0f1a, _0x228ce5) {
    var _0x10c158 = _0x27ee1f();
    try {
      _0x37d853(_0x30055e, _0x52dc84, _0x5e0f1a, _0x228ce5);
    } catch (_0x4c32a6) {
      _0x1df486(_0x10c158);
      if (_0x4c32a6 !== _0x4c32a6 + 0 && _0x4c32a6 !== "longjmp") {
        throw _0x4c32a6;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x202bc5(_0x402f32, _0x390a8a, _0x1f678f, _0x58ec73, _0x174531, _0x5cad4a, _0xf727ec, _0x25ca4f, _0x463b3b, _0x12fec4, _0x19040e, _0xb6091c, _0x17b4c3, _0x283cab) {
    var _0x4472 = _0x27ee1f();
    try {
      return _0x5c883f(_0x402f32, _0x390a8a, _0x1f678f, _0x58ec73, _0x174531, _0x5cad4a, _0xf727ec, _0x25ca4f, _0x463b3b, _0x12fec4, _0x19040e, _0xb6091c, _0x17b4c3, _0x283cab);
    } catch (_0x4829b5) {
      _0x1df486(_0x4472);
      if (_0x4829b5 !== _0x4829b5 + 0 && _0x4829b5 !== "longjmp") {
        throw _0x4829b5;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x488625(_0x1447f4, _0x346849, _0x2398c1, _0x410c10, _0x23b115, _0x28ca08) {
    var _0x555129 = _0x27ee1f();
    try {
      _0x229062(_0x1447f4, _0x346849, _0x2398c1, _0x410c10, _0x23b115, _0x28ca08);
    } catch (_0x57b20c) {
      _0x1df486(_0x555129);
      if (_0x57b20c !== _0x57b20c + 0 && _0x57b20c !== "longjmp") {
        throw _0x57b20c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xd90a67(_0x465355, _0x1381f0, _0x4806f0, _0x476145, _0x37f828) {
    var _0x2d6762 = _0x27ee1f();
    try {
      _0x3a9c5a(_0x465355, _0x1381f0, _0x4806f0, _0x476145, _0x37f828);
    } catch (_0x3954d6) {
      _0x1df486(_0x2d6762);
      if (_0x3954d6 !== _0x3954d6 + 0 && _0x3954d6 !== "longjmp") {
        throw _0x3954d6;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x151673(_0xafc250, _0x3f7bd0, _0x5b6fa7, _0x37c0cd) {
    var _0x201155 = _0x27ee1f();
    try {
      _0x561bc4(_0xafc250, _0x3f7bd0, _0x5b6fa7, _0x37c0cd);
    } catch (_0x59d57d) {
      _0x1df486(_0x201155);
      if (_0x59d57d !== _0x59d57d + 0 && _0x59d57d !== "longjmp") {
        throw _0x59d57d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xc3c535(_0x2eb3aa, _0x1d6612, _0x5c210b, _0xbc0802, _0x496bf7) {
    var _0x5308d3 = _0x27ee1f();
    try {
      _0x30c91d(_0x2eb3aa, _0x1d6612, _0x5c210b, _0xbc0802, _0x496bf7);
    } catch (_0x3281da) {
      _0x1df486(_0x5308d3);
      if (_0x3281da !== _0x3281da + 0 && _0x3281da !== "longjmp") {
        throw _0x3281da;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x19ae15(_0x146318, _0x468527, _0x49e04f) {
    var _0x440e98 = _0x27ee1f();
    try {
      return _0x5a898f(_0x146318, _0x468527, _0x49e04f);
    } catch (_0x4f625b) {
      _0x1df486(_0x440e98);
      if (_0x4f625b !== _0x4f625b + 0 && _0x4f625b !== "longjmp") {
        throw _0x4f625b;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2f68ba(_0x3d5fb4, _0x3e5348, _0x15cd76) {
    var _0xe569a = _0x27ee1f();
    try {
      return _0x47d30b(_0x3d5fb4, _0x3e5348, _0x15cd76);
    } catch (_0x45cf4b) {
      _0x1df486(_0xe569a);
      if (_0x45cf4b !== _0x45cf4b + 0 && _0x45cf4b !== "longjmp") {
        throw _0x45cf4b;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x275070(_0x5707f5, _0x1fdf97, _0x3fef76) {
    var _0x1e9f85 = _0x27ee1f();
    try {
      return _0x3ccb5c(_0x5707f5, _0x1fdf97, _0x3fef76);
    } catch (_0x38981e) {
      _0x1df486(_0x1e9f85);
      if (_0x38981e !== _0x38981e + 0 && _0x38981e !== "longjmp") {
        throw _0x38981e;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x49370d(_0x458fb9, _0x2e675c, _0x2f58f8, _0x51508f, _0x588498, _0x415807, _0x2f43f1, _0x2901a2, _0x3b88bc, _0x3af11b) {
    var _0xe804fc = _0x27ee1f();
    try {
      _0x55854a(_0x458fb9, _0x2e675c, _0x2f58f8, _0x51508f, _0x588498, _0x415807, _0x2f43f1, _0x2901a2, _0x3b88bc, _0x3af11b);
    } catch (_0x18cae9) {
      _0x1df486(_0xe804fc);
      if (_0x18cae9 !== _0x18cae9 + 0 && _0x18cae9 !== "longjmp") {
        throw _0x18cae9;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x538d65(_0xb94cf5, _0x1fdfd0, _0x431b23, _0x7d5790, _0xf03efd, _0x125bb5, _0x781a2d, _0x1cf2f3, _0x23e427, _0x42fb0e, _0x223481, _0x4be512, _0x373b80) {
    var _0x559fe0 = _0x27ee1f();
    try {
      _0x1fb510(_0xb94cf5, _0x1fdfd0, _0x431b23, _0x7d5790, _0xf03efd, _0x125bb5, _0x781a2d, _0x1cf2f3, _0x23e427, _0x42fb0e, _0x223481, _0x4be512, _0x373b80);
    } catch (_0x2bada7) {
      _0x1df486(_0x559fe0);
      if (_0x2bada7 !== _0x2bada7 + 0 && _0x2bada7 !== "longjmp") {
        throw _0x2bada7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x57acd0(_0x19d9d8, _0x556106, _0x33309d, _0x463f03, _0x1a5ca4) {
    var _0xd17cff = _0x27ee1f();
    try {
      return _0x2a8e0b(_0x19d9d8, _0x556106, _0x33309d, _0x463f03, _0x1a5ca4);
    } catch (_0x427787) {
      _0x1df486(_0xd17cff);
      if (_0x427787 !== _0x427787 + 0 && _0x427787 !== "longjmp") {
        throw _0x427787;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x33b3ba(_0xd70a89, _0x29f43a, _0x6a5b62, _0x8383ac, _0x487ac2) {
    var _0x18dae2 = _0x27ee1f();
    try {
      return _0x77e8aa(_0xd70a89, _0x29f43a, _0x6a5b62, _0x8383ac, _0x487ac2);
    } catch (_0x37fea8) {
      _0x1df486(_0x18dae2);
      if (_0x37fea8 !== _0x37fea8 + 0 && _0x37fea8 !== "longjmp") {
        throw _0x37fea8;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x50f46a(_0x4265a8, _0x1e5c35, _0x3bdb63, _0x4bec22, _0x339c41, _0x2a8e83, _0x3f9047, _0x244517, _0x506514, _0x359144) {
    var _0x27f500 = _0x27ee1f();
    try {
      return _0x4cefb6(_0x4265a8, _0x1e5c35, _0x3bdb63, _0x4bec22, _0x339c41, _0x2a8e83, _0x3f9047, _0x244517, _0x506514, _0x359144);
    } catch (_0x255c9b) {
      _0x1df486(_0x27f500);
      if (_0x255c9b !== _0x255c9b + 0 && _0x255c9b !== "longjmp") {
        throw _0x255c9b;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2a6dc4(_0x4d980e, _0x40e284, _0x48fb57, _0x4fdd84) {
    var _0x57f83c = _0x27ee1f();
    try {
      return _0x121b23(_0x4d980e, _0x40e284, _0x48fb57, _0x4fdd84);
    } catch (_0x3b7529) {
      _0x1df486(_0x57f83c);
      if (_0x3b7529 !== _0x3b7529 + 0 && _0x3b7529 !== "longjmp") {
        throw _0x3b7529;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xc83917(_0x20a016, _0x53347e, _0x20b738, _0x14292e) {
    var _0x4d1cae = _0x27ee1f();
    try {
      return _0x35d470(_0x20a016, _0x53347e, _0x20b738, _0x14292e);
    } catch (_0x406030) {
      _0x1df486(_0x4d1cae);
      if (_0x406030 !== _0x406030 + 0 && _0x406030 !== "longjmp") {
        throw _0x406030;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1c035e(_0x2ae0dd, _0x46eb60, _0x239d28, _0x16e844) {
    var _0x95732d = _0x27ee1f();
    try {
      return _0x313a21(_0x2ae0dd, _0x46eb60, _0x239d28, _0x16e844);
    } catch (_0xcdd5ac) {
      _0x1df486(_0x95732d);
      if (_0xcdd5ac !== _0xcdd5ac + 0 && _0xcdd5ac !== "longjmp") {
        throw _0xcdd5ac;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2f248a(_0x1a8f1d, _0xa77a16, _0x1d4562, _0x4db8fd) {
    var _0x4b94d9 = _0x27ee1f();
    try {
      return _0x10d236(_0x1a8f1d, _0xa77a16, _0x1d4562, _0x4db8fd);
    } catch (_0x5152f9) {
      _0x1df486(_0x4b94d9);
      if (_0x5152f9 !== _0x5152f9 + 0 && _0x5152f9 !== "longjmp") {
        throw _0x5152f9;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x51eb1f(_0x216e03, _0x176970, _0x26c25b, _0x3d4ee3, _0x3bec45) {
    var _0x3bb546 = _0x27ee1f();
    try {
      return _0x21707f(_0x216e03, _0x176970, _0x26c25b, _0x3d4ee3, _0x3bec45);
    } catch (_0x2fc17e) {
      _0x1df486(_0x3bb546);
      if (_0x2fc17e !== _0x2fc17e + 0 && _0x2fc17e !== "longjmp") {
        throw _0x2fc17e;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2bb953(_0x4d14c3, _0x30b50a, _0x1efd56, _0x15db31, _0x3ec2be, _0xe8100, _0xcc6378) {
    var _0x5a5316 = _0x27ee1f();
    try {
      return _0x2f30b5(_0x4d14c3, _0x30b50a, _0x1efd56, _0x15db31, _0x3ec2be, _0xe8100, _0xcc6378);
    } catch (_0x324324) {
      _0x1df486(_0x5a5316);
      if (_0x324324 !== _0x324324 + 0 && _0x324324 !== "longjmp") {
        throw _0x324324;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5e24ca(_0x50692a, _0x46303c, _0x869db5, _0x3285c9, _0x1314fc) {
    var _0x4d1726 = _0x27ee1f();
    try {
      return _0x58f1d6(_0x50692a, _0x46303c, _0x869db5, _0x3285c9, _0x1314fc);
    } catch (_0x51c651) {
      _0x1df486(_0x4d1726);
      if (_0x51c651 !== _0x51c651 + 0 && _0x51c651 !== "longjmp") {
        throw _0x51c651;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2f2823(_0x2d72aa, _0x4b5056, _0x22f8fb, _0x42e5b3, _0x55cbdd, _0x36ba74, _0x883897, _0x5420ce, _0x16516d, _0x424bdd, _0x1b110f, _0x4f8117, _0x46cdc9) {
    var _0x1cc2f2 = _0x27ee1f();
    try {
      return _0x4ae572(_0x2d72aa, _0x4b5056, _0x22f8fb, _0x42e5b3, _0x55cbdd, _0x36ba74, _0x883897, _0x5420ce, _0x16516d, _0x424bdd, _0x1b110f, _0x4f8117, _0x46cdc9);
    } catch (_0x2d9da7) {
      _0x1df486(_0x1cc2f2);
      if (_0x2d9da7 !== _0x2d9da7 + 0 && _0x2d9da7 !== "longjmp") {
        throw _0x2d9da7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x36c49b(_0x42bc0a, _0x13d5d5, _0x36ed2e, _0x1d57c4, _0x5374e3) {
    var _0x1921ef = _0x27ee1f();
    try {
      return _0x3ef8f6(_0x42bc0a, _0x13d5d5, _0x36ed2e, _0x1d57c4, _0x5374e3);
    } catch (_0x296764) {
      _0x1df486(_0x1921ef);
      if (_0x296764 !== _0x296764 + 0 && _0x296764 !== "longjmp") {
        throw _0x296764;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xafd34b(_0x563e0f, _0x41a2af, _0x463420, _0x38b469, _0x17515a, _0x52c99d) {
    var _0x623c4d = _0x27ee1f();
    try {
      _0x1f2519(_0x563e0f, _0x41a2af, _0x463420, _0x38b469, _0x17515a, _0x52c99d);
    } catch (_0xc531e5) {
      _0x1df486(_0x623c4d);
      if (_0xc531e5 !== _0xc531e5 + 0 && _0xc531e5 !== "longjmp") {
        throw _0xc531e5;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5441f7(_0xd1eb61, _0x3dd476, _0x26d916, _0x1a7ea1, _0x1e62b6, _0x410311, _0x19c00e) {
    var _0x547c19 = _0x27ee1f();
    try {
      return _0x29f892(_0xd1eb61, _0x3dd476, _0x26d916, _0x1a7ea1, _0x1e62b6, _0x410311, _0x19c00e);
    } catch (_0x5d42c3) {
      _0x1df486(_0x547c19);
      if (_0x5d42c3 !== _0x5d42c3 + 0 && _0x5d42c3 !== "longjmp") {
        throw _0x5d42c3;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x19adf2(_0x4f42c1, _0x4a1926, _0x55654b, _0x5c654a, _0x3fcbb7, _0x4b4d12, _0x4fc03b, _0xa23182) {
    var _0x200911 = _0x27ee1f();
    try {
      _0x3f125f(_0x4f42c1, _0x4a1926, _0x55654b, _0x5c654a, _0x3fcbb7, _0x4b4d12, _0x4fc03b, _0xa23182);
    } catch (_0x111b95) {
      _0x1df486(_0x200911);
      if (_0x111b95 !== _0x111b95 + 0 && _0x111b95 !== "longjmp") {
        throw _0x111b95;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5242a6(_0x10075a, _0x3301bb, _0x47974f, _0x4c88bd, _0x2b1257, _0x43a981, _0xfad3fb) {
    var _0x3c3843 = _0x27ee1f();
    try {
      _0x3624fb(_0x10075a, _0x3301bb, _0x47974f, _0x4c88bd, _0x2b1257, _0x43a981, _0xfad3fb);
    } catch (_0x41f726) {
      _0x1df486(_0x3c3843);
      if (_0x41f726 !== _0x41f726 + 0 && _0x41f726 !== "longjmp") {
        throw _0x41f726;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x51f8c7(_0xd6ac3d, _0x50d00c, _0x106ae8, _0x10a34a, _0x2a2c94, _0x1cf1f4, _0x3b0391, _0x22a082, _0x3bcfbd, _0x59b65c, _0x1f269b, _0x4bbf97, _0x504a0d) {
    var _0x2d461c = _0x27ee1f();
    try {
      _0x280ea5(_0xd6ac3d, _0x50d00c, _0x106ae8, _0x10a34a, _0x2a2c94, _0x1cf1f4, _0x3b0391, _0x22a082, _0x3bcfbd, _0x59b65c, _0x1f269b, _0x4bbf97, _0x504a0d);
    } catch (_0x2e51a4) {
      _0x1df486(_0x2d461c);
      if (_0x2e51a4 !== _0x2e51a4 + 0 && _0x2e51a4 !== "longjmp") {
        throw _0x2e51a4;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x24d804(_0x53ab2b, _0xd00ea, _0x429f4a, _0x4d6bf0, _0x140434, _0x31584a, _0x2e2c0f, _0x11b119, _0x85f3be, _0x33bf7c, _0x5a857b, _0xf74b7d, _0x3fbaee, _0xb47093, _0x55cfc8, _0x125109) {
    var _0x62c991 = _0x27ee1f();
    try {
      _0x264269(_0x53ab2b, _0xd00ea, _0x429f4a, _0x4d6bf0, _0x140434, _0x31584a, _0x2e2c0f, _0x11b119, _0x85f3be, _0x33bf7c, _0x5a857b, _0xf74b7d, _0x3fbaee, _0xb47093, _0x55cfc8, _0x125109);
    } catch (_0x1c32fe) {
      _0x1df486(_0x62c991);
      if (_0x1c32fe !== _0x1c32fe + 0 && _0x1c32fe !== "longjmp") {
        throw _0x1c32fe;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xe99304(_0x55003d, _0x23df3d, _0x1260a5, _0x2f9923, _0x19e1a4, _0x27573d, _0xe8a5a, _0x274d2f) {
    var _0x828e5b = _0x27ee1f();
    try {
      _0x6b62ab(_0x55003d, _0x23df3d, _0x1260a5, _0x2f9923, _0x19e1a4, _0x27573d, _0xe8a5a, _0x274d2f);
    } catch (_0x4bc133) {
      _0x1df486(_0x828e5b);
      if (_0x4bc133 !== _0x4bc133 + 0 && _0x4bc133 !== "longjmp") {
        throw _0x4bc133;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1823f0(_0x30624e, _0x45ec23, _0x5f4bfb, _0x59a845, _0x3bae9b, _0x406044, _0x2c78e2, _0x2cd40f, _0x19ce0a, _0x378080, _0x25fcc5, _0x18a634, _0x4b6efb, _0x5d8e21, _0x1f5208, _0x51369b, _0x115d3c, _0x19a9cf) {
    var _0x1856ec = _0x27ee1f();
    try {
      _0x20dc72(_0x30624e, _0x45ec23, _0x5f4bfb, _0x59a845, _0x3bae9b, _0x406044, _0x2c78e2, _0x2cd40f, _0x19ce0a, _0x378080, _0x25fcc5, _0x18a634, _0x4b6efb, _0x5d8e21, _0x1f5208, _0x51369b, _0x115d3c, _0x19a9cf);
    } catch (_0x4c6461) {
      _0x1df486(_0x1856ec);
      if (_0x4c6461 !== _0x4c6461 + 0 && _0x4c6461 !== "longjmp") {
        throw _0x4c6461;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x31699a(_0x119610, _0x2eaad0, _0x2bdacd, _0x5d02bd, _0x909c59, _0x22a3a2, _0xa37b86, _0x3c7a18, _0x3c6241, _0x2eddae, _0x4ebc13, _0x45c63a, _0x3ad898, _0x284329, _0xb03a1a, _0x2b3c5b, _0x2e0221, _0x3c1679) {
    var _0x455a2b = _0x27ee1f();
    try {
      _0x31e150(_0x119610, _0x2eaad0, _0x2bdacd, _0x5d02bd, _0x909c59, _0x22a3a2, _0xa37b86, _0x3c7a18, _0x3c6241, _0x2eddae, _0x4ebc13, _0x45c63a, _0x3ad898, _0x284329, _0xb03a1a, _0x2b3c5b, _0x2e0221, _0x3c1679);
    } catch (_0x1affce) {
      _0x1df486(_0x455a2b);
      if (_0x1affce !== _0x1affce + 0 && _0x1affce !== "longjmp") {
        throw _0x1affce;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1b70be(_0x244a48, _0x23ff28, _0x148fcb) {
    var _0x45690e = _0x27ee1f();
    try {
      _0x47857a(_0x244a48, _0x23ff28, _0x148fcb);
    } catch (_0x57c4fb) {
      _0x1df486(_0x45690e);
      if (_0x57c4fb !== _0x57c4fb + 0 && _0x57c4fb !== "longjmp") {
        throw _0x57c4fb;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1ae8d3(_0x312ebd, _0x38574e, _0x25b3ff, _0x49921e, _0x3248ec, _0x16cdde, _0x3e3e1f, _0x2529a6, _0x4323c1, _0x461d76, _0x24c5cd, _0x44a2e4, _0x360e8d, _0x155945, _0x39357e, _0x2ef376, _0x9d4bcd, _0x3b37d2, _0x4a07c9) {
    var _0x277a97 = _0x27ee1f();
    try {
      return _0x5972f1(_0x312ebd, _0x38574e, _0x25b3ff, _0x49921e, _0x3248ec, _0x16cdde, _0x3e3e1f, _0x2529a6, _0x4323c1, _0x461d76, _0x24c5cd, _0x44a2e4, _0x360e8d, _0x155945, _0x39357e, _0x2ef376, _0x9d4bcd, _0x3b37d2, _0x4a07c9);
    } catch (_0x41785e) {
      _0x1df486(_0x277a97);
      if (_0x41785e !== _0x41785e + 0 && _0x41785e !== "longjmp") {
        throw _0x41785e;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x16b445(_0x54e4f3, _0x200655, _0x5a5bc0, _0x394ee7, _0xdd927c, _0x4196df) {
    var _0x1f521a = _0x27ee1f();
    try {
      return _0x5475a9(_0x54e4f3, _0x200655, _0x5a5bc0, _0x394ee7, _0xdd927c, _0x4196df);
    } catch (_0x63782f) {
      _0x1df486(_0x1f521a);
      if (_0x63782f !== _0x63782f + 0 && _0x63782f !== "longjmp") {
        throw _0x63782f;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2623f9(_0x314c9d, _0x50e23d, _0x22f3aa, _0xb7a02f, _0x1ba83f, _0x4a53a5) {
    var _0xbf88c8 = _0x27ee1f();
    try {
      _0x13466d(_0x314c9d, _0x50e23d, _0x22f3aa, _0xb7a02f, _0x1ba83f, _0x4a53a5);
    } catch (_0xf5d9ab) {
      _0x1df486(_0xbf88c8);
      if (_0xf5d9ab !== _0xf5d9ab + 0 && _0xf5d9ab !== "longjmp") {
        throw _0xf5d9ab;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3d1666(_0x582b49, _0x52c234, _0x449ff8, _0x2aa866, _0x56396e, _0x109ffc, _0x1b1a1e, _0x86c5eb, _0x5c6852, _0x3f5b48) {
    var _0x4ccf87 = _0x27ee1f();
    try {
      return _0xa06227(_0x582b49, _0x52c234, _0x449ff8, _0x2aa866, _0x56396e, _0x109ffc, _0x1b1a1e, _0x86c5eb, _0x5c6852, _0x3f5b48);
    } catch (_0x5c76b0) {
      _0x1df486(_0x4ccf87);
      if (_0x5c76b0 !== _0x5c76b0 + 0 && _0x5c76b0 !== "longjmp") {
        throw _0x5c76b0;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x173b5f(_0x5216f5, _0x38df87, _0x16fdb3, _0x5ef5a2, _0x83fe42, _0x24e682, _0x1de272) {
    var _0x394401 = _0x27ee1f();
    try {
      _0x41c7d3(_0x5216f5, _0x38df87, _0x16fdb3, _0x5ef5a2, _0x83fe42, _0x24e682, _0x1de272);
    } catch (_0x4fd2f2) {
      _0x1df486(_0x394401);
      if (_0x4fd2f2 !== _0x4fd2f2 + 0 && _0x4fd2f2 !== "longjmp") {
        throw _0x4fd2f2;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x96edea(_0x8df0f9, _0x3b82fe, _0x128995, _0x437a43, _0x8176bc, _0x12d434, _0x49804f, _0x2dc41c, _0xbf8794, _0x407301) {
    var _0x1a0644 = _0x27ee1f();
    try {
      return _0x136bb6(_0x8df0f9, _0x3b82fe, _0x128995, _0x437a43, _0x8176bc, _0x12d434, _0x49804f, _0x2dc41c, _0xbf8794, _0x407301);
    } catch (_0x1b8b9e) {
      _0x1df486(_0x1a0644);
      if (_0x1b8b9e !== _0x1b8b9e + 0 && _0x1b8b9e !== "longjmp") {
        throw _0x1b8b9e;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5ef683(_0x536560, _0x4e4b9e, _0x35b4d3, _0x241244, _0xb8e662, _0x850fe8, _0x15e534, _0x505b8b, _0x598a5b, _0x1db9a4, _0x5eea35, _0x235d61, _0x3ef95b, _0x391125, _0x4b8d62) {
    var _0x4863ec = _0x27ee1f();
    try {
      _0x30727b(_0x536560, _0x4e4b9e, _0x35b4d3, _0x241244, _0xb8e662, _0x850fe8, _0x15e534, _0x505b8b, _0x598a5b, _0x1db9a4, _0x5eea35, _0x235d61, _0x3ef95b, _0x391125, _0x4b8d62);
    } catch (_0x14d9d1) {
      _0x1df486(_0x4863ec);
      if (_0x14d9d1 !== _0x14d9d1 + 0 && _0x14d9d1 !== "longjmp") {
        throw _0x14d9d1;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x14c6fb(_0x516ce1, _0x4eaec3, _0x3482eb, _0x4599d8, _0x2d22c1) {
    var _0x5cbc05 = _0x27ee1f();
    try {
      return _0x24a4b0(_0x516ce1, _0x4eaec3, _0x3482eb, _0x4599d8, _0x2d22c1);
    } catch (_0x384637) {
      _0x1df486(_0x5cbc05);
      if (_0x384637 !== _0x384637 + 0 && _0x384637 !== "longjmp") {
        throw _0x384637;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3fb525(_0x28652f, _0xee3887, _0x1dbcc4, _0x244910, _0x2372c5, _0x21cc9b, _0x3ad9d4) {
    var _0x19ebf8 = _0x27ee1f();
    try {
      _0x51074c(_0x28652f, _0xee3887, _0x1dbcc4, _0x244910, _0x2372c5, _0x21cc9b, _0x3ad9d4);
    } catch (_0x5115a7) {
      _0x1df486(_0x19ebf8);
      if (_0x5115a7 !== _0x5115a7 + 0 && _0x5115a7 !== "longjmp") {
        throw _0x5115a7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2f0002(_0x5a9e54, _0x5d40b6, _0x3cf47f, _0x57be7f, _0x4170e6) {
    var _0x18d4d2 = _0x27ee1f();
    try {
      return _0x4b2d2a(_0x5a9e54, _0x5d40b6, _0x3cf47f, _0x57be7f, _0x4170e6);
    } catch (_0x556694) {
      _0x1df486(_0x18d4d2);
      if (_0x556694 !== _0x556694 + 0 && _0x556694 !== "longjmp") {
        throw _0x556694;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2bc5ce(_0x5cab3c, _0x40c2cb) {
    var _0xa3eb20 = _0x27ee1f();
    try {
      return _0x599628(_0x5cab3c, _0x40c2cb);
    } catch (_0x9489b7) {
      _0x1df486(_0xa3eb20);
      if (_0x9489b7 !== _0x9489b7 + 0 && _0x9489b7 !== "longjmp") {
        throw _0x9489b7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xe4f950(_0x2c7ebe, _0xe79c78, _0x280d0d, _0x4fc085, _0x5b8f23, _0x30ddb7) {
    var _0x229e4c = _0x27ee1f();
    try {
      return _0x5b4399(_0x2c7ebe, _0xe79c78, _0x280d0d, _0x4fc085, _0x5b8f23, _0x30ddb7);
    } catch (_0x35cd2d) {
      _0x1df486(_0x229e4c);
      if (_0x35cd2d !== _0x35cd2d + 0 && _0x35cd2d !== "longjmp") {
        throw _0x35cd2d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2771b8(_0xa5b24f, _0x41cc77, _0xd7cfaa, _0xf2dba5, _0x6c15c5, _0x1d3ded, _0x5362ce, _0x104539, _0xb9ebc8, _0x16019d, _0x1be2a0, _0x3e6443, _0x5896f3, _0x4c8254, _0x468bd2) {
    var _0x59bb73 = _0x27ee1f();
    try {
      _0x33f07f(_0xa5b24f, _0x41cc77, _0xd7cfaa, _0xf2dba5, _0x6c15c5, _0x1d3ded, _0x5362ce, _0x104539, _0xb9ebc8, _0x16019d, _0x1be2a0, _0x3e6443, _0x5896f3, _0x4c8254, _0x468bd2);
    } catch (_0x1c6d12) {
      _0x1df486(_0x59bb73);
      if (_0x1c6d12 !== _0x1c6d12 + 0 && _0x1c6d12 !== "longjmp") {
        throw _0x1c6d12;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2bcd1d(_0xdddcc7, _0xffac5, _0x203cc2, _0x2add32, _0x309622, _0xbb6605, _0x5b772e, _0x2b92d0, _0x3804bc, _0x3cf65a, _0xed143e, _0x35a73f, _0x311af1, _0x3ed9dd, _0xf2359c) {
    var _0x4fe1dd = _0x27ee1f();
    try {
      _0xde0453(_0xdddcc7, _0xffac5, _0x203cc2, _0x2add32, _0x309622, _0xbb6605, _0x5b772e, _0x2b92d0, _0x3804bc, _0x3cf65a, _0xed143e, _0x35a73f, _0x311af1, _0x3ed9dd, _0xf2359c);
    } catch (_0x539c08) {
      _0x1df486(_0x4fe1dd);
      if (_0x539c08 !== _0x539c08 + 0 && _0x539c08 !== "longjmp") {
        throw _0x539c08;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1ae42a(_0x185e19, _0xca7b44, _0xfffa3c, _0x2f7cdf, _0x4426ce, _0x6186b) {
    var _0x5f1291 = _0x27ee1f();
    try {
      _0x250464(_0x185e19, _0xca7b44, _0xfffa3c, _0x2f7cdf, _0x4426ce, _0x6186b);
    } catch (_0x5f33f8) {
      _0x1df486(_0x5f1291);
      if (_0x5f33f8 !== _0x5f33f8 + 0 && _0x5f33f8 !== "longjmp") {
        throw _0x5f33f8;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4d3940(_0x102bc5, _0x1f2ad6, _0x3f8cc4, _0x4592b0, _0x2b2cf6, _0x1e7d69) {
    var _0x351c39 = _0x27ee1f();
    try {
      _0x5e3afc(_0x102bc5, _0x1f2ad6, _0x3f8cc4, _0x4592b0, _0x2b2cf6, _0x1e7d69);
    } catch (_0x52a809) {
      _0x1df486(_0x351c39);
      if (_0x52a809 !== _0x52a809 + 0 && _0x52a809 !== "longjmp") {
        throw _0x52a809;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x55c2f9(_0x1b4a84, _0x44714f, _0x1d262d, _0x56eebc, _0x5084b6, _0x4b4816) {
    var _0x25bb92 = _0x27ee1f();
    try {
      _0x5329e5(_0x1b4a84, _0x44714f, _0x1d262d, _0x56eebc, _0x5084b6, _0x4b4816);
    } catch (_0x59ac1d) {
      _0x1df486(_0x25bb92);
      if (_0x59ac1d !== _0x59ac1d + 0 && _0x59ac1d !== "longjmp") {
        throw _0x59ac1d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x180502(_0x2f69f7, _0x4de1dd, _0x5598f5, _0x3ea5a4, _0x5e35ac, _0x3833a1, _0x3a8c45, _0x2691df, _0x198e10, _0x50920f, _0x47ec48, _0x4a04bf, _0x29bcf1, _0x121be0, _0x29f32e) {
    var _0x217fb1 = _0x27ee1f();
    try {
      _0x23a096(_0x2f69f7, _0x4de1dd, _0x5598f5, _0x3ea5a4, _0x5e35ac, _0x3833a1, _0x3a8c45, _0x2691df, _0x198e10, _0x50920f, _0x47ec48, _0x4a04bf, _0x29bcf1, _0x121be0, _0x29f32e);
    } catch (_0xe18d99) {
      _0x1df486(_0x217fb1);
      if (_0xe18d99 !== _0xe18d99 + 0 && _0xe18d99 !== "longjmp") {
        throw _0xe18d99;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2c493e(_0x234a16, _0x35c566, _0x1eceb5, _0x49fd79, _0x122fde) {
    var _0x4dc8c6 = _0x27ee1f();
    try {
      return _0x4b5a26(_0x234a16, _0x35c566, _0x1eceb5, _0x49fd79, _0x122fde);
    } catch (_0x3eb432) {
      _0x1df486(_0x4dc8c6);
      if (_0x3eb432 !== _0x3eb432 + 0 && _0x3eb432 !== "longjmp") {
        throw _0x3eb432;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3818a0(_0x2ca9ca, _0x3dad73, _0x3e0e0b, _0x59d1a2, _0x4f9550, _0x357deb, _0x34c9fb, _0x33ed0f, _0x537608, _0x3cea03, _0x1fec4e, _0x4f892a) {
    var _0x23ac89 = _0x27ee1f();
    try {
      _0x4ec60e(_0x2ca9ca, _0x3dad73, _0x3e0e0b, _0x59d1a2, _0x4f9550, _0x357deb, _0x34c9fb, _0x33ed0f, _0x537608, _0x3cea03, _0x1fec4e, _0x4f892a);
    } catch (_0x3040dc) {
      _0x1df486(_0x23ac89);
      if (_0x3040dc !== _0x3040dc + 0 && _0x3040dc !== "longjmp") {
        throw _0x3040dc;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x9f105f(_0x2219d0, _0x35564b, _0x565078, _0x401317, _0x2141c8, _0x52ce14, _0x467641, _0x186835) {
    var _0xbd3216 = _0x27ee1f();
    try {
      return _0x46d9f0(_0x2219d0, _0x35564b, _0x565078, _0x401317, _0x2141c8, _0x52ce14, _0x467641, _0x186835);
    } catch (_0x5db294) {
      _0x1df486(_0xbd3216);
      if (_0x5db294 !== _0x5db294 + 0 && _0x5db294 !== "longjmp") {
        throw _0x5db294;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x239aeb(_0x2c7ede, _0x2d4c36, _0x2f4723, _0x189e0d, _0x7ec7e3, _0x175ee9, _0x44faf0, _0x2a70cf, _0x18d4a7, _0x58dd58, _0x355ee5) {
    var _0x4177e2 = _0x27ee1f();
    try {
      return _0x5c14f0(_0x2c7ede, _0x2d4c36, _0x2f4723, _0x189e0d, _0x7ec7e3, _0x175ee9, _0x44faf0, _0x2a70cf, _0x18d4a7, _0x58dd58, _0x355ee5);
    } catch (_0x19a9eb) {
      _0x1df486(_0x4177e2);
      if (_0x19a9eb !== _0x19a9eb + 0 && _0x19a9eb !== "longjmp") {
        throw _0x19a9eb;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x52c8fc(_0x208ce9, _0x2e501e, _0x3e9eb4, _0x41d337, _0x5bdfb9, _0x575f8a) {
    var _0x50cee8 = _0x27ee1f();
    try {
      return _0x3ee7e5(_0x208ce9, _0x2e501e, _0x3e9eb4, _0x41d337, _0x5bdfb9, _0x575f8a);
    } catch (_0x1b0768) {
      _0x1df486(_0x50cee8);
      if (_0x1b0768 !== _0x1b0768 + 0 && _0x1b0768 !== "longjmp") {
        throw _0x1b0768;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4f8d67(_0x3e3a56, _0x1123cc, _0x201bab, _0x916f1b, _0x2c68b5, _0x32a9cc, _0x3876cc) {
    var _0x5b351d = _0x27ee1f();
    try {
      return _0x4ba6d2(_0x3e3a56, _0x1123cc, _0x201bab, _0x916f1b, _0x2c68b5, _0x32a9cc, _0x3876cc);
    } catch (_0x4e2f83) {
      _0x1df486(_0x5b351d);
      if (_0x4e2f83 !== _0x4e2f83 + 0 && _0x4e2f83 !== "longjmp") {
        throw _0x4e2f83;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3a0715(_0x3340bf, _0x7bc88c, _0x47b137, _0x4ecdd9, _0x1bb4dd, _0x483fca, _0x940df5) {
    var _0x42d233 = _0x27ee1f();
    try {
      return _0x5a723c(_0x3340bf, _0x7bc88c, _0x47b137, _0x4ecdd9, _0x1bb4dd, _0x483fca, _0x940df5);
    } catch (_0x87541d) {
      _0x1df486(_0x42d233);
      if (_0x87541d !== _0x87541d + 0 && _0x87541d !== "longjmp") {
        throw _0x87541d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5a4cb9(_0x118cc7, _0x2997ac, _0x48e582, _0x570a8f) {
    var _0x5d43a2 = _0x27ee1f();
    try {
      _0x3b3254(_0x118cc7, _0x2997ac, _0x48e582, _0x570a8f);
    } catch (_0x6254d2) {
      _0x1df486(_0x5d43a2);
      if (_0x6254d2 !== _0x6254d2 + 0 && _0x6254d2 !== "longjmp") {
        throw _0x6254d2;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3bea39(_0x27c426, _0x44d98d, _0x4c8283, _0x4600e2, _0x415f67) {
    var _0x27aba3 = _0x27ee1f();
    try {
      return _0x9db5e(_0x27c426, _0x44d98d, _0x4c8283, _0x4600e2, _0x415f67);
    } catch (_0x4a8105) {
      _0x1df486(_0x27aba3);
      if (_0x4a8105 !== _0x4a8105 + 0 && _0x4a8105 !== "longjmp") {
        throw _0x4a8105;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x29ea31(_0x3e2a35, _0x212bce, _0x4ccd37, _0xe5a9ba, _0x264d08) {
    var _0x171828 = _0x27ee1f();
    try {
      return _0x25e433(_0x3e2a35, _0x212bce, _0x4ccd37, _0xe5a9ba, _0x264d08);
    } catch (_0xaf82e7) {
      _0x1df486(_0x171828);
      if (_0xaf82e7 !== _0xaf82e7 + 0 && _0xaf82e7 !== "longjmp") {
        throw _0xaf82e7;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3714cd(_0x4721b5) {
    var _0x8cdd15 = _0x27ee1f();
    try {
      return _0x539530(_0x4721b5);
    } catch (_0x7585f2) {
      _0x1df486(_0x8cdd15);
      if (_0x7585f2 !== _0x7585f2 + 0 && _0x7585f2 !== "longjmp") {
        throw _0x7585f2;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x33e94b(_0xe511dc, _0x4c4879, _0x39668c, _0x2ef676) {
    var _0x432330 = _0x27ee1f();
    try {
      return _0x274692(_0xe511dc, _0x4c4879, _0x39668c, _0x2ef676);
    } catch (_0xf27a76) {
      _0x1df486(_0x432330);
      if (_0xf27a76 !== _0xf27a76 + 0 && _0xf27a76 !== "longjmp") {
        throw _0xf27a76;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x59c608(_0x4b1eb0, _0x590dde, _0x18d27c, _0x154d56, _0x3e8e78, _0x571e61, _0x198bec, _0x54c03f) {
    var _0x333ccd = _0x27ee1f();
    try {
      return _0x3833ff(_0x4b1eb0, _0x590dde, _0x18d27c, _0x154d56, _0x3e8e78, _0x571e61, _0x198bec, _0x54c03f);
    } catch (_0x51c256) {
      _0x1df486(_0x333ccd);
      if (_0x51c256 !== _0x51c256 + 0 && _0x51c256 !== "longjmp") {
        throw _0x51c256;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x74e33f(_0xf871a5, _0x552774) {
    var _0x2befd3 = _0x27ee1f();
    try {
      return _0x30e526(_0xf871a5, _0x552774);
    } catch (_0x19b416) {
      _0x1df486(_0x2befd3);
      if (_0x19b416 !== _0x19b416 + 0 && _0x19b416 !== "longjmp") {
        throw _0x19b416;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5b520f(_0x115abb, _0x484d43, _0x5a474a) {
    var _0x33536b = _0x27ee1f();
    try {
      return _0x49e71b(_0x115abb, _0x484d43, _0x5a474a);
    } catch (_0x1e753c) {
      _0x1df486(_0x33536b);
      if (_0x1e753c !== _0x1e753c + 0 && _0x1e753c !== "longjmp") {
        throw _0x1e753c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x291f5c(_0x5673c7, _0x265aef, _0x27a3ee, _0x22bf5a, _0x83a630, _0x543122) {
    var _0x48fb5b = _0x27ee1f();
    try {
      _0x5eae95(_0x5673c7, _0x265aef, _0x27a3ee, _0x22bf5a, _0x83a630, _0x543122);
    } catch (_0x1b005e) {
      _0x1df486(_0x48fb5b);
      if (_0x1b005e !== _0x1b005e + 0 && _0x1b005e !== "longjmp") {
        throw _0x1b005e;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x387f08(_0x4ce6bc, _0x42495d, _0x110e5a, _0x50ae84, _0x42e2d4, _0x196f5e) {
    var _0x32b2fb = _0x27ee1f();
    try {
      return _0x3b8434(_0x4ce6bc, _0x42495d, _0x110e5a, _0x50ae84, _0x42e2d4, _0x196f5e);
    } catch (_0xe7901a) {
      _0x1df486(_0x32b2fb);
      if (_0xe7901a !== _0xe7901a + 0 && _0xe7901a !== "longjmp") {
        throw _0xe7901a;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x29d192(_0x4d716c, _0x2b342c, _0x3fc30f, _0x2ac40b, _0x33d5b2, _0x4e85a2, _0x18a428, _0x3dc39a, _0x373495, _0x543560) {
    var _0x59b750 = _0x27ee1f();
    try {
      return _0x463fd4(_0x4d716c, _0x2b342c, _0x3fc30f, _0x2ac40b, _0x33d5b2, _0x4e85a2, _0x18a428, _0x3dc39a, _0x373495, _0x543560);
    } catch (_0x49f690) {
      _0x1df486(_0x59b750);
      if (_0x49f690 !== _0x49f690 + 0 && _0x49f690 !== "longjmp") {
        throw _0x49f690;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5876ca(_0x5b6891, _0x48d29c, _0x522d5d, _0x193b31, _0x1c9dc4, _0x4b3aca, _0x48c07f) {
    var _0x5c7ff4 = _0x27ee1f();
    try {
      _0x39382e(_0x5b6891, _0x48d29c, _0x522d5d, _0x193b31, _0x1c9dc4, _0x4b3aca, _0x48c07f);
    } catch (_0x30af5b) {
      _0x1df486(_0x5c7ff4);
      if (_0x30af5b !== _0x30af5b + 0 && _0x30af5b !== "longjmp") {
        throw _0x30af5b;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x466f26(_0x128623, _0x5dd25f, _0x520f42, _0x153929, _0x55a1d2, _0x5bb91d) {
    var _0x39c17c = _0x27ee1f();
    try {
      _0x2e4163(_0x128623, _0x5dd25f, _0x520f42, _0x153929, _0x55a1d2, _0x5bb91d);
    } catch (_0x257346) {
      _0x1df486(_0x39c17c);
      if (_0x257346 !== _0x257346 + 0 && _0x257346 !== "longjmp") {
        throw _0x257346;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1af684(_0x2f37f1, _0x2ec024, _0x4005b6, _0x2f97c4, _0x58c4e6) {
    var _0x51594a = _0x27ee1f();
    try {
      _0x5bed8c(_0x2f37f1, _0x2ec024, _0x4005b6, _0x2f97c4, _0x58c4e6);
    } catch (_0x4f21bd) {
      _0x1df486(_0x51594a);
      if (_0x4f21bd !== _0x4f21bd + 0 && _0x4f21bd !== "longjmp") {
        throw _0x4f21bd;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x43148b(_0x20f406, _0x24281a, _0x1fa781, _0x1cf659) {
    var _0x54d8d9 = _0x27ee1f();
    try {
      return _0xce1885(_0x20f406, _0x24281a, _0x1fa781, _0x1cf659);
    } catch (_0x139436) {
      _0x1df486(_0x54d8d9);
      if (_0x139436 !== _0x139436 + 0 && _0x139436 !== "longjmp") {
        throw _0x139436;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2e7edc(_0x46c0fa, _0x1bb6e0, _0x21ba8a, _0x169a2b, _0x2b8e93, _0x111fe6) {
    var _0x5bb01e = _0x27ee1f();
    try {
      return _0x1b663a(_0x46c0fa, _0x1bb6e0, _0x21ba8a, _0x169a2b, _0x2b8e93, _0x111fe6);
    } catch (_0x2dfb63) {
      _0x1df486(_0x5bb01e);
      if (_0x2dfb63 !== _0x2dfb63 + 0 && _0x2dfb63 !== "longjmp") {
        throw _0x2dfb63;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4ccb3d(_0x6b6e79, _0x3c7f85, _0x1ef308, _0x2ad1d1, _0x4b9063) {
    var _0x59c90a = _0x27ee1f();
    try {
      return _0x312ee(_0x6b6e79, _0x3c7f85, _0x1ef308, _0x2ad1d1, _0x4b9063);
    } catch (_0x1d126a) {
      _0x1df486(_0x59c90a);
      if (_0x1d126a !== _0x1d126a + 0 && _0x1d126a !== "longjmp") {
        throw _0x1d126a;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4b5dc1(_0x28fe4c, _0x53bd31, _0xc1e4e9, _0x5e7830, _0x3c6e4a, _0x46eca9, _0x5e6e86) {
    var _0x475052 = _0x27ee1f();
    try {
      _0x2e8fe6(_0x28fe4c, _0x53bd31, _0xc1e4e9, _0x5e7830, _0x3c6e4a, _0x46eca9, _0x5e6e86);
    } catch (_0x5aa99f) {
      _0x1df486(_0x475052);
      if (_0x5aa99f !== _0x5aa99f + 0 && _0x5aa99f !== "longjmp") {
        throw _0x5aa99f;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1734d9(_0x3af4cc, _0x436199, _0x530acb, _0x8c1deb) {
    var _0x4963b3 = _0x27ee1f();
    try {
      return _0x390fa2(_0x3af4cc, _0x436199, _0x530acb, _0x8c1deb);
    } catch (_0xf9e48b) {
      _0x1df486(_0x4963b3);
      if (_0xf9e48b !== _0xf9e48b + 0 && _0xf9e48b !== "longjmp") {
        throw _0xf9e48b;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x20b073(_0x13d900, _0x2395b6, _0x2ea5f7, _0x1d08ba, _0x19fe40, _0x2da1ef, _0x5c3c4c, _0x44c4a7) {
    var _0x15c300 = _0x27ee1f();
    try {
      _0xadb496(_0x13d900, _0x2395b6, _0x2ea5f7, _0x1d08ba, _0x19fe40, _0x2da1ef, _0x5c3c4c, _0x44c4a7);
    } catch (_0x3b94ad) {
      _0x1df486(_0x15c300);
      if (_0x3b94ad !== _0x3b94ad + 0 && _0x3b94ad !== "longjmp") {
        throw _0x3b94ad;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x43e2af(_0x244986, _0x3b40dd, _0xce4628, _0x47f446, _0xfda7ab, _0x26bad2) {
    var _0x5b0134 = _0x27ee1f();
    try {
      _0x5567c9(_0x244986, _0x3b40dd, _0xce4628, _0x47f446, _0xfda7ab, _0x26bad2);
    } catch (_0x33aba8) {
      _0x1df486(_0x5b0134);
      if (_0x33aba8 !== _0x33aba8 + 0 && _0x33aba8 !== "longjmp") {
        throw _0x33aba8;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x88864d(_0x3607f5, _0x448d0a, _0x63fc7b, _0x49e394, _0x5bae98, _0x6157) {
    var _0x48b8a7 = _0x27ee1f();
    try {
      return _0x989d7c(_0x3607f5, _0x448d0a, _0x63fc7b, _0x49e394, _0x5bae98, _0x6157);
    } catch (_0x5c54f5) {
      _0x1df486(_0x48b8a7);
      if (_0x5c54f5 !== _0x5c54f5 + 0 && _0x5c54f5 !== "longjmp") {
        throw _0x5c54f5;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x238f88(_0x565332, _0x2c03fa, _0x12ef2f, _0x46d2b2, _0x4a932b, _0x441164) {
    var _0x3f87d1 = _0x27ee1f();
    try {
      return _0x17239c(_0x565332, _0x2c03fa, _0x12ef2f, _0x46d2b2, _0x4a932b, _0x441164);
    } catch (_0x1b2eac) {
      _0x1df486(_0x3f87d1);
      if (_0x1b2eac !== _0x1b2eac + 0 && _0x1b2eac !== "longjmp") {
        throw _0x1b2eac;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3ac45b(_0x4294e8, _0x5e076d, _0x2f21aa, _0x433dec, _0x48f68b, _0x30401d) {
    var _0x4cba23 = _0x27ee1f();
    try {
      return _0x24e2ba(_0x4294e8, _0x5e076d, _0x2f21aa, _0x433dec, _0x48f68b, _0x30401d);
    } catch (_0x59e57d) {
      _0x1df486(_0x4cba23);
      if (_0x59e57d !== _0x59e57d + 0 && _0x59e57d !== "longjmp") {
        throw _0x59e57d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3d0859(_0x2964ba, _0x3cfaff, _0x44fb66, _0x3839a4, _0x44059c) {
    var _0x171fcc = _0x27ee1f();
    try {
      _0x36d70f(_0x2964ba, _0x3cfaff, _0x44fb66, _0x3839a4, _0x44059c);
    } catch (_0x3c9edd) {
      _0x1df486(_0x171fcc);
      if (_0x3c9edd !== _0x3c9edd + 0 && _0x3c9edd !== "longjmp") {
        throw _0x3c9edd;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4e5496(_0x50497c, _0x3f37f9, _0x4b478e, _0x4107bc, _0x296549, _0x487543) {
    var _0x28bed6 = _0x27ee1f();
    try {
      return _0x45c359(_0x50497c, _0x3f37f9, _0x4b478e, _0x4107bc, _0x296549, _0x487543);
    } catch (_0x1d3209) {
      _0x1df486(_0x28bed6);
      if (_0x1d3209 !== _0x1d3209 + 0 && _0x1d3209 !== "longjmp") {
        throw _0x1d3209;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x44bf49(_0x4ccae1, _0x1423fe, _0x1a4a18, _0x1def6c, _0x2edd90, _0x4e40c4) {
    var _0x307c9b = _0x27ee1f();
    try {
      return _0x9841cf(_0x4ccae1, _0x1423fe, _0x1a4a18, _0x1def6c, _0x2edd90, _0x4e40c4);
    } catch (_0x5d3c2f) {
      _0x1df486(_0x307c9b);
      if (_0x5d3c2f !== _0x5d3c2f + 0 && _0x5d3c2f !== "longjmp") {
        throw _0x5d3c2f;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1911bf(_0xdb98f0, _0x5177a7, _0xce6518, _0xccd696, _0xf72241) {
    var _0xae9d25 = _0x27ee1f();
    try {
      return _0x588dfd(_0xdb98f0, _0x5177a7, _0xce6518, _0xccd696, _0xf72241);
    } catch (_0x49de07) {
      _0x1df486(_0xae9d25);
      if (_0x49de07 !== _0x49de07 + 0 && _0x49de07 !== "longjmp") {
        throw _0x49de07;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x9d6ecc(_0x436175, _0x215d6c, _0x3e510d, _0x2ab1c9, _0x465e52, _0x587da3, _0x41bb54) {
    var _0x4cea31 = _0x27ee1f();
    try {
      return _0x3fba87(_0x436175, _0x215d6c, _0x3e510d, _0x2ab1c9, _0x465e52, _0x587da3, _0x41bb54);
    } catch (_0xdf74e0) {
      _0x1df486(_0x4cea31);
      if (_0xdf74e0 !== _0xdf74e0 + 0 && _0xdf74e0 !== "longjmp") {
        throw _0xdf74e0;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x88f337(_0x248f5d, _0x3c371f, _0xb77475, _0x305af0) {
    var _0x3e88b1 = _0x27ee1f();
    try {
      return _0x30ec38(_0x248f5d, _0x3c371f, _0xb77475, _0x305af0);
    } catch (_0xc5d8c6) {
      _0x1df486(_0x3e88b1);
      if (_0xc5d8c6 !== _0xc5d8c6 + 0 && _0xc5d8c6 !== "longjmp") {
        throw _0xc5d8c6;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x41c76a(_0x3a6fc5, _0x49f1c1, _0x1a5b63, _0x44177c) {
    var _0x7b39c3 = _0x27ee1f();
    try {
      return _0x3adcdc(_0x3a6fc5, _0x49f1c1, _0x1a5b63, _0x44177c);
    } catch (_0x37d5e9) {
      _0x1df486(_0x7b39c3);
      if (_0x37d5e9 !== _0x37d5e9 + 0 && _0x37d5e9 !== "longjmp") {
        throw _0x37d5e9;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x358b35(_0x5f210c, _0x6e0418, _0x32d5a7, _0x3b1de0, _0x5de36b, _0x3557eb, _0x42f12a, _0x470c73) {
    var _0xb0e36c = _0x27ee1f();
    try {
      _0x4a741b(_0x5f210c, _0x6e0418, _0x32d5a7, _0x3b1de0, _0x5de36b, _0x3557eb, _0x42f12a, _0x470c73);
    } catch (_0x15f4f8) {
      _0x1df486(_0xb0e36c);
      if (_0x15f4f8 !== _0x15f4f8 + 0 && _0x15f4f8 !== "longjmp") {
        throw _0x15f4f8;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x140e1c(_0x1f76a1, _0xaf15e, _0x277764, _0x5072cb, _0x63966b) {
    var _0x56d96a = _0x27ee1f();
    try {
      return _0x11e9fb(_0x1f76a1, _0xaf15e, _0x277764, _0x5072cb, _0x63966b);
    } catch (_0x38c587) {
      _0x1df486(_0x56d96a);
      if (_0x38c587 !== _0x38c587 + 0 && _0x38c587 !== "longjmp") {
        throw _0x38c587;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x56a1b9(_0x4b7351, _0x24729d, _0x1dd861) {
    var _0xc97c6d = _0x27ee1f();
    try {
      return _0x279cdc(_0x4b7351, _0x24729d, _0x1dd861);
    } catch (_0x87b6ed) {
      _0x1df486(_0xc97c6d);
      if (_0x87b6ed !== _0x87b6ed + 0 && _0x87b6ed !== "longjmp") {
        throw _0x87b6ed;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xa7681e(_0x2a6cc3, _0x8fb045, _0x3b3870, _0x4866b7, _0x11bfa1, _0x1abb48, _0x5a5ff4, _0x1a1a09, _0x35c539) {
    var _0x3884a2 = _0x27ee1f();
    try {
      _0x4fa658(_0x2a6cc3, _0x8fb045, _0x3b3870, _0x4866b7, _0x11bfa1, _0x1abb48, _0x5a5ff4, _0x1a1a09, _0x35c539);
    } catch (_0x33d8a4) {
      _0x1df486(_0x3884a2);
      if (_0x33d8a4 !== _0x33d8a4 + 0 && _0x33d8a4 !== "longjmp") {
        throw _0x33d8a4;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2140e1(_0x46e338, _0x302a78, _0x272043, _0x109705) {
    var _0x3d4101 = _0x27ee1f();
    try {
      return _0x1f6705(_0x46e338, _0x302a78, _0x272043, _0x109705);
    } catch (_0x24344f) {
      _0x1df486(_0x3d4101);
      if (_0x24344f !== _0x24344f + 0 && _0x24344f !== "longjmp") {
        throw _0x24344f;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4995cb(_0x36129a, _0x468edd, _0x419782, _0xcf7dd1, _0x4383cc, _0x5af768) {
    var _0x372b8e = _0x27ee1f();
    try {
      return _0x345e41(_0x36129a, _0x468edd, _0x419782, _0xcf7dd1, _0x4383cc, _0x5af768);
    } catch (_0x5bb274) {
      _0x1df486(_0x372b8e);
      if (_0x5bb274 !== _0x5bb274 + 0 && _0x5bb274 !== "longjmp") {
        throw _0x5bb274;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5cfe40(_0xfb4aec, _0x3c110a, _0x405a61, _0x1da577, _0x5f2728, _0x58a1d2, _0x50a06d, _0x1c094c, _0x4f7cc4, _0x53fc58, _0x56f557, _0x557879, _0x7b07ad, _0x16a5fc, _0x3bd88b, _0x2ddd72, _0x13b896) {
    var _0x1ca157 = _0x27ee1f();
    try {
      _0x20422f(_0xfb4aec, _0x3c110a, _0x405a61, _0x1da577, _0x5f2728, _0x58a1d2, _0x50a06d, _0x1c094c, _0x4f7cc4, _0x53fc58, _0x56f557, _0x557879, _0x7b07ad, _0x16a5fc, _0x3bd88b, _0x2ddd72, _0x13b896);
    } catch (_0x5b2f8d) {
      _0x1df486(_0x1ca157);
      if (_0x5b2f8d !== _0x5b2f8d + 0 && _0x5b2f8d !== "longjmp") {
        throw _0x5b2f8d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x506073(_0xf33282, _0x1eb6e5, _0x1a27de, _0x356a12, _0x50b343, _0x9fb8b2, _0x333947, _0xcd46d5, _0x3d8ed1, _0x2f8ec3, _0x492215, _0x47ace9, _0x4bf61e, _0x4917fd) {
    var _0x2e5715 = _0x27ee1f();
    try {
      _0x49f2bb(_0xf33282, _0x1eb6e5, _0x1a27de, _0x356a12, _0x50b343, _0x9fb8b2, _0x333947, _0xcd46d5, _0x3d8ed1, _0x2f8ec3, _0x492215, _0x47ace9, _0x4bf61e, _0x4917fd);
    } catch (_0x2fce24) {
      _0x1df486(_0x2e5715);
      if (_0x2fce24 !== _0x2fce24 + 0 && _0x2fce24 !== "longjmp") {
        throw _0x2fce24;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x457957(_0x31ac72, _0x38cd42, _0x93afe2, _0x488630, _0x46b59a, _0x4373e1, _0x43cd88, _0x1e9e41, _0x3e2f91) {
    var _0x2bb9af = _0x27ee1f();
    try {
      _0x3d7bf6(_0x31ac72, _0x38cd42, _0x93afe2, _0x488630, _0x46b59a, _0x4373e1, _0x43cd88, _0x1e9e41, _0x3e2f91);
    } catch (_0x2efedb) {
      _0x1df486(_0x2bb9af);
      if (_0x2efedb !== _0x2efedb + 0 && _0x2efedb !== "longjmp") {
        throw _0x2efedb;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4217b0(_0x238806, _0x4eef4d, _0x5da747, _0x112dbd, _0x4b8f5f, _0x244287, _0x5d1ec3) {
    var _0x5a33a0 = _0x27ee1f();
    try {
      return _0x52dfac(_0x238806, _0x4eef4d, _0x5da747, _0x112dbd, _0x4b8f5f, _0x244287, _0x5d1ec3);
    } catch (_0x4fdf3d) {
      _0x1df486(_0x5a33a0);
      if (_0x4fdf3d !== _0x4fdf3d + 0 && _0x4fdf3d !== "longjmp") {
        throw _0x4fdf3d;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x8c6fe7(_0x3e8e77, _0x83683e, _0x1a658a, _0x1fdf9c, _0x4bbd77, _0x2e9b53, _0xbf66cb, _0x5aedc8, _0x4f275d, _0x263d7b, _0xa24aa8, _0x510c4d) {
    var _0x22db38 = _0x27ee1f();
    try {
      return _0x16d8fc(_0x3e8e77, _0x83683e, _0x1a658a, _0x1fdf9c, _0x4bbd77, _0x2e9b53, _0xbf66cb, _0x5aedc8, _0x4f275d, _0x263d7b, _0xa24aa8, _0x510c4d);
    } catch (_0x2c796c) {
      _0x1df486(_0x22db38);
      if (_0x2c796c !== _0x2c796c + 0 && _0x2c796c !== "longjmp") {
        throw _0x2c796c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x16e398(_0x5920ae, _0x2b2c7a, _0x2f9398, _0x13f8d1) {
    var _0x2812d0 = _0x27ee1f();
    try {
      _0x5a1229(_0x5920ae, _0x2b2c7a, _0x2f9398, _0x13f8d1);
    } catch (_0x3575e2) {
      _0x1df486(_0x2812d0);
      if (_0x3575e2 !== _0x3575e2 + 0 && _0x3575e2 !== "longjmp") {
        throw _0x3575e2;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x57ff6e(_0x33ca10, _0xefd054, _0x80aa16, _0x820b43, _0x55de51, _0x2997d2, _0x264a80, _0x5586ff) {
    var _0x250f39 = _0x27ee1f();
    try {
      _0x4960d3(_0x33ca10, _0xefd054, _0x80aa16, _0x820b43, _0x55de51, _0x2997d2, _0x264a80, _0x5586ff);
    } catch (_0x42a4d1) {
      _0x1df486(_0x250f39);
      if (_0x42a4d1 !== _0x42a4d1 + 0 && _0x42a4d1 !== "longjmp") {
        throw _0x42a4d1;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5ab199(_0x16ac84, _0x58a179, _0x15c242, _0x532e23, _0x5638b4, _0x35afdb, _0x5e47db) {
    var _0x4f3421 = _0x27ee1f();
    try {
      _0x3f6ae5(_0x16ac84, _0x58a179, _0x15c242, _0x532e23, _0x5638b4, _0x35afdb, _0x5e47db);
    } catch (_0x2348f9) {
      _0x1df486(_0x4f3421);
      if (_0x2348f9 !== _0x2348f9 + 0 && _0x2348f9 !== "longjmp") {
        throw _0x2348f9;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3526d3(_0x351bc5, _0x28cc89, _0x1cfb0b, _0x369049, _0x4241f9, _0x2f359a, _0x178ba1, _0x44c0b2, _0x46d66f, _0x1d20f6, _0x2286c3, _0x1853a8) {
    var _0x2cdc0b = _0x27ee1f();
    try {
      return _0x34651f(_0x351bc5, _0x28cc89, _0x1cfb0b, _0x369049, _0x4241f9, _0x2f359a, _0x178ba1, _0x44c0b2, _0x46d66f, _0x1d20f6, _0x2286c3, _0x1853a8);
    } catch (_0x30f9c2) {
      _0x1df486(_0x2cdc0b);
      if (_0x30f9c2 !== _0x30f9c2 + 0 && _0x30f9c2 !== "longjmp") {
        throw _0x30f9c2;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x567b2f(_0x1c201d, _0x3ce48f, _0x58195b, _0x29e63c, _0x14f47d, _0x1beee3, _0x301e83, _0x31486e, _0x3dd56a, _0x3b6a2f) {
    var _0x52a83f = _0x27ee1f();
    try {
      return _0x1bdd66(_0x1c201d, _0x3ce48f, _0x58195b, _0x29e63c, _0x14f47d, _0x1beee3, _0x301e83, _0x31486e, _0x3dd56a, _0x3b6a2f);
    } catch (_0x1a353c) {
      _0x1df486(_0x52a83f);
      if (_0x1a353c !== _0x1a353c + 0 && _0x1a353c !== "longjmp") {
        throw _0x1a353c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x5e570e(_0x41faf9, _0x36f42f, _0xe7e0b6, _0x21f7f9, _0x32a7c8, _0x162947, _0x561161, _0xc56b49, _0x571ed2, _0x5af930) {
    var _0x26dd32 = _0x27ee1f();
    try {
      _0x1fc86f(_0x41faf9, _0x36f42f, _0xe7e0b6, _0x21f7f9, _0x32a7c8, _0x162947, _0x561161, _0xc56b49, _0x571ed2, _0x5af930);
    } catch (_0x5ba086) {
      _0x1df486(_0x26dd32);
      if (_0x5ba086 !== _0x5ba086 + 0 && _0x5ba086 !== "longjmp") {
        throw _0x5ba086;
      }
      _0x225d08(1, 0);
    }
  }
  function _0xb3ddc3(_0x2480cf, _0x130b54, _0x151c71, _0x29e290, _0xc69fb3, _0x33137, _0xd5d062, _0x557424, _0x5ea1c1) {
    var _0x121884 = _0x27ee1f();
    try {
      _0x249aa6(_0x2480cf, _0x130b54, _0x151c71, _0x29e290, _0xc69fb3, _0x33137, _0xd5d062, _0x557424, _0x5ea1c1);
    } catch (_0x4fba35) {
      _0x1df486(_0x121884);
      if (_0x4fba35 !== _0x4fba35 + 0 && _0x4fba35 !== "longjmp") {
        throw _0x4fba35;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4b158a(_0x3536a6, _0x56186f, _0x486a98, _0x5775af, _0x4bedac, _0x4b1e01, _0x5c82fd, _0x2db63b, _0x2f1d6b, _0x21d339, _0x5a293c) {
    var _0x19f156 = _0x27ee1f();
    try {
      return _0x34b89b(_0x3536a6, _0x56186f, _0x486a98, _0x5775af, _0x4bedac, _0x4b1e01, _0x5c82fd, _0x2db63b, _0x2f1d6b, _0x21d339, _0x5a293c);
    } catch (_0x1f752c) {
      _0x1df486(_0x19f156);
      if (_0x1f752c !== _0x1f752c + 0 && _0x1f752c !== "longjmp") {
        throw _0x1f752c;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4045c9(_0x39821f, _0x4a1587, _0x3b3d7, _0x5cbe14, _0x95eb1, _0x3d32b9, _0x17f13e, _0x288c18, _0x5177b3, _0x2e751f, _0x58b81a) {
    var _0x34a3a0 = _0x27ee1f();
    try {
      _0x2de679(_0x39821f, _0x4a1587, _0x3b3d7, _0x5cbe14, _0x95eb1, _0x3d32b9, _0x17f13e, _0x288c18, _0x5177b3, _0x2e751f, _0x58b81a);
    } catch (_0x579f88) {
      _0x1df486(_0x34a3a0);
      if (_0x579f88 !== _0x579f88 + 0 && _0x579f88 !== "longjmp") {
        throw _0x579f88;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x36d8a7(_0x1ab705, _0x3cee7f, _0x50a215, _0x18a269, _0x402287, _0x377c6e, _0xfd0b41, _0x16ebfe) {
    var _0x161e28 = _0x27ee1f();
    try {
      _0x5019f1(_0x1ab705, _0x3cee7f, _0x50a215, _0x18a269, _0x402287, _0x377c6e, _0xfd0b41, _0x16ebfe);
    } catch (_0xfdd62a) {
      _0x1df486(_0x161e28);
      if (_0xfdd62a !== _0xfdd62a + 0 && _0xfdd62a !== "longjmp") {
        throw _0xfdd62a;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x4132a9(_0x2b03e3, _0x4560eb, _0x10bbf9, _0x51f252, _0x4484ae, _0x30a149, _0x283896, _0x581c00, _0x110322, _0x5a57b8, _0x685637) {
    var _0x3b0345 = _0x27ee1f();
    try {
      _0x580e90(_0x2b03e3, _0x4560eb, _0x10bbf9, _0x51f252, _0x4484ae, _0x30a149, _0x283896, _0x581c00, _0x110322, _0x5a57b8, _0x685637);
    } catch (_0x441c93) {
      _0x1df486(_0x3b0345);
      if (_0x441c93 !== _0x441c93 + 0 && _0x441c93 !== "longjmp") {
        throw _0x441c93;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x163293(_0x117573, _0x53a28c, _0x47d98, _0xcd453b, _0x33f3e8, _0x31ba24, _0x13c047) {
    var _0x32e3ea = _0x27ee1f();
    try {
      return _0x2a1deb(_0x117573, _0x53a28c, _0x47d98, _0xcd453b, _0x33f3e8, _0x31ba24, _0x13c047);
    } catch (_0x86c02b) {
      _0x1df486(_0x32e3ea);
      if (_0x86c02b !== _0x86c02b + 0 && _0x86c02b !== "longjmp") {
        throw _0x86c02b;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x3cc26c(_0x3f896e, _0x15ef92, _0x385232, _0x536041, _0x31199b, _0x1a14ae, _0xf420ce) {
    var _0x4711c3 = _0x27ee1f();
    try {
      return _0x67613f(_0x3f896e, _0x15ef92, _0x385232, _0x536041, _0x31199b, _0x1a14ae, _0xf420ce);
    } catch (_0x2460f4) {
      _0x1df486(_0x4711c3);
      if (_0x2460f4 !== _0x2460f4 + 0 && _0x2460f4 !== "longjmp") {
        throw _0x2460f4;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x1d2722(_0x3027a1, _0x50e529, _0x291146, _0x364618, _0x53061b, _0x1323d9) {
    var _0x1fe316 = _0x27ee1f();
    try {
      return _0x39fcd6(_0x3027a1, _0x50e529, _0x291146, _0x364618, _0x53061b, _0x1323d9);
    } catch (_0x39b6ed) {
      _0x1df486(_0x1fe316);
      if (_0x39b6ed !== _0x39b6ed + 0 && _0x39b6ed !== "longjmp") {
        throw _0x39b6ed;
      }
      _0x225d08(1, 0);
    }
  }
  function _0x2f0191(_0x35ba47, _0x3e7a3e, _0xc98c1f, _0x48dc41, _0x1b9bf3, _0x1836af, _0x3b508f, _0x3db381) {
    var _0x24a5a0 = _0x27ee1f();
    try {
      return _0x250086(_0x35ba47, _0x3e7a3e, _0xc98c1f, _0x48dc41, _0x1b9bf3, _0x1836af, _0x3b508f, _0x3db381);
    } catch (_0x2ffe0d) {
      _0x1df486(_0x24a5a0);
      if (_0x2ffe0d !== _0x2ffe0d + 0 && _0x2ffe0d !== "longjmp") {
        throw _0x2ffe0d;
      }
      _0x225d08(1, 0);
    }
  }
  _0x24391e.ccall = _0x5dcbe5;
  _0x24391e.cwrap = _0x187b1f;
  _0x24391e.stackTrace = _0x19fe57;
  _0x24391e.addRunDependency = _0xb357;
  _0x24391e.removeRunDependency = _0xe3545b;
  _0x24391e.FS_createPath = _0x415c36.createPath;
  _0x24391e.FS_createDataFile = _0x415c36.createDataFile;
  _0x24391e.stackTrace = _0x19fe57;
  var _0x58acb2;
  function _0x4210ac(_0x462749) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x462749 + ")";
    this.status = _0x462749;
  }
  var _0x553e82 = false;
  _0x3b2e29 = function _0x40cf07() {
    if (!_0x58acb2) {
      _0x239c35();
    }
    if (!_0x58acb2) {
      _0x3b2e29 = _0x40cf07;
    }
  };
  function _0x423267(_0x539b67) {
    var _0x2b2a23 = _0x24391e._main;
    _0x539b67 = _0x539b67 || [];
    var _0x36a1c6 = _0x539b67.length + 1;
    var _0x178d55 = _0xbe2651((_0x36a1c6 + 1) * 4);
    _0x447875[_0x178d55 >> 2] = _0x42289a(_0x5b6f88);
    for (var _0x181a80 = 1; _0x181a80 < _0x36a1c6; _0x181a80++) {
      _0x447875[(_0x178d55 >> 2) + _0x181a80] = _0x42289a(_0x539b67[_0x181a80 - 1]);
    }
    _0x447875[(_0x178d55 >> 2) + _0x36a1c6] = 0;
    try {
      var _0x55faa5 = _0x2b2a23(_0x36a1c6, _0x178d55);
      _0xe39eeb(_0x55faa5, true);
    } catch (_0x182fed) {
      if (_0x182fed instanceof _0x4210ac) {
        return;
      } else if (_0x182fed == "unwind") {
        return;
      } else {
        var _0x115075 = _0x182fed;
        if (_0x182fed && typeof _0x182fed === "object" && _0x182fed.stack) {
          _0x115075 = [_0x182fed, _0x182fed.stack];
        }
        _0x38748e("exception thrown: " + _0x115075);
        _0x2c59b9(1, _0x182fed);
      }
    } finally {
      _0x553e82 = true;
    }
  }
  function _0x239c35(_0x1a8c18) {
    _0x1a8c18 = _0x1a8c18 || _0x9bb8e8;
    if (_0xcab905 > 0) {
      return;
    }
    _0x45f933();
    if (_0xcab905 > 0) {
      return;
    }
    function _0x4dd19a() {
      if (_0x58acb2) {
        return;
      }
      _0x58acb2 = true;
      _0x24391e.calledRun = true;
      if (_0x23d11b) {
        return;
      }
      _0x240418();
      _0x38dcb();
      if (_0x24391e.onRuntimeInitialized) {
        _0x24391e.onRuntimeInitialized();
      }
      if (_0x5701b5) {
        _0x423267(_0x1a8c18);
      }
      _0x1dc4a2();
    }
    if (_0x24391e.setStatus) {
      _0x24391e.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x24391e.setStatus("");
        }, 1);
        _0x4dd19a();
      }, 1);
    } else {
      _0x4dd19a();
    }
  }
  _0x24391e.run = _0x239c35;
  function _0xe39eeb(_0x1df2c4, _0x6336c4) {
    _0x3fb91d = _0x1df2c4;
    if (_0x6336c4 && _0x54e3a5() && _0x1df2c4 === 0) {
      return;
    }
    if (_0x54e3a5()) {} else {
      _0x26fa6b();
      if (_0x24391e.onExit) {
        _0x24391e.onExit(_0x1df2c4);
      }
      _0x23d11b = true;
    }
    _0x2c59b9(_0x1df2c4, new _0x4210ac(_0x1df2c4));
  }
  if (_0x24391e.preInit) {
    if (typeof _0x24391e.preInit == "function") {
      _0x24391e.preInit = [_0x24391e.preInit];
    }
    while (_0x24391e.preInit.length > 0) {
      _0x24391e.preInit.pop()();
    }
  }
  var _0x5701b5 = true;
  if (_0x24391e.noInitialRun) {
    _0x5701b5 = false;
  }
  _0x239c35();
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XaFdBd2NLUkVKTEdodEdBUWdXU2xVR0ZRd2xWVzlFU1ROSE5UQjBTUTRW";
check_enable_debug();
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://games.1games.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x1d5ad5) {
  console.log("_TIME_" + _0x1d5ad5 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x5282d0) {
  console.log(_0x5282d0);
}
function gmEvent(_0x62e514, _0x2798ae) {
  loadGMData(_0x62e514, _0x2798ae);
}
function gmStartGame(_0x326525) {
  _0x326525();
}
function gmStartAds(_0x328aa5) {
  _0x328aa5();
}
let fireFPS = 0;
async function loadGMData(_0x5c653f, _0x13793b) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x5c653f != "document-ready" && _0x5c653f != "start-game" && _0x5c653f != "unload-game") {
      return;
    }
    if (_0x5c653f == "fps") {
      try {
        let _0x2deed0 = _0x13793b.split("|");
        if (_0x2deed0.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x2deed0[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x2deed0[1]);
          }
        }
      } catch (_0x42d71c) {
        console.log("Error extracting time from abc:", _0x42d71c.message);
      }
    }
    let _0x52b9d2 = "";
    if (_0x13793b) {
      _0x52b9d2 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x13793b));
    }
    _0x52b9d2 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x52b9d2 += "&gid=" + config.gameId;
    if (_0x5c653f == "ban-game" || _0x5c653f == "document-ready" || _0x5c653f == "start-game") {
      _0x52b9d2 += "&wtop=" + "1games.io";
      _0x52b9d2 += "&hn=" + "https://games.1games.io";
      _0x52b9d2 += "&referrer=" + config.referrer;
    }
    let _0x1d02ed = "&data=" + btoa(_0x52b9d2);
    let _0x2b5ba3 = config.buildAPI + "?event=" + _0x5c653f + _0x1d02ed;
    let _0x5860a6 = new XMLHttpRequest();
    _0x5860a6.open("GET", _0x2b5ba3);
    _0x5860a6.onreadystatechange = function () {
      if (_0x5860a6.readyState !== 4) {
        return;
      }
      if (_0x5860a6.status === 200) {
        console.log(_0x5860a6.responseText);
      } else {
        console.log("HTTP error", _0x5860a6.status, _0x5860a6.statusText);
      }
    };
    _0x5860a6.send();
  } catch (_0x4d281a) {}
}
function xorEncryptMsg(_0x48203b) {
  let _0x6a8add = "gmdata@&!message@!3!@";
  let _0x5b78ab = "";
  for (let _0x14955b = 0; _0x14955b < _0x48203b.length; _0x14955b++) {
    const _0x182daa = _0x48203b.charCodeAt(_0x14955b) ^ _0x6a8add.charCodeAt(_0x14955b % _0x6a8add.length);
    _0x5b78ab += String.fromCharCode(_0x182daa);
  }
  return btoa(_0x5b78ab);
}
function check_event_log() {
  const _0x2416b8 = window.location.search;
  const _0x5df2db = new URLSearchParams(_0x2416b8);
  if (_0x5df2db.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x4b4b86) {
  try {
    const _0x5ae60a = eval(_0x4b4b86);
    gmdebug("Result:", _0x5ae60a);
    return _0x5ae60a;
  } catch (_0x492f73) {
    gmdebug("Error executing code:", _0x492f73);
  }
}
window.addEventListener("beforeunload", function (_0x397be2) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0xbeba18 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x431336 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x10c5e0 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x189fda = _0x431336;
      let _0x1c975d = "";
      for (let _0x5d227a = 0; _0x5d227a < _0x10c5e0.length; _0x5d227a++) {
        const _0x16fb72 = _0x10c5e0.charCodeAt(_0x5d227a) ^ _0xbeba18.charCodeAt(_0x5d227a % _0xbeba18.length);
        _0x1c975d += String.fromCharCode(_0x16fb72);
      }
      sourceHtml = _0x1c975d;
      let _0x4de11c = document.getElementById("gmsoft-jssdk");
      if (!_0x4de11c || _0x4de11c.src != sourceHtml) {
      }
    } catch (_0x216335) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x271323 = window.location.search;
    const _0x3812a3 = new URLSearchParams(_0x271323);
    if (_0x3812a3.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x26e245) {}
}