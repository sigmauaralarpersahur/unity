function unityFramework(_0xc94e0) {
  var _0xc94e0 = typeof _0xc94e0 !== "undefined" ? _0xc94e0 : {};
  _0xc94e0.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x558c48(_0x1a7907, _0x5dd935) {
    _0x111cca("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x21e34e(_0x1a7907, _0x5dd935);
  }
  _0xc94e0.Pointer_stringify = _0x558c48;
  var _0x4100e5 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x436412 = _0x5d3033().match(new RegExp(_0x4100e5));
  if (_0x436412) {
    _0xc94e0.stackTraceRegExp = new RegExp(_0x4100e5.replace("([^\\n]+)", _0x436412[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x44e8b0 = function (_0x517a44) {
    if (_0x31a725) {
      return;
    }
    _0x31a725 = true;
    _0x9fbfb9 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x517a44 !== undefined) {
      _0x25d5db(_0x517a44);
      _0x551fc8(_0x517a44);
      _0x517a44 = JSON.stringify(_0x517a44);
    } else {
      _0x517a44 = "";
    }
    var _0x57995c = "abort(" + _0x517a44 + ") at " + _0x2008cc();
    if (_0xc94e0.abortHandler && _0xc94e0.abortHandler(_0x57995c)) {
      return;
    }
    throw _0x57995c;
  };
  _0xc94e0.SetFullscreen = function (_0x5d51e2) {
    if (typeof _0x2901b1 === "undefined" || !_0x2901b1) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x58f09e === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x495637 = _0x58f09e.canPerformEventHandlerRequests;
      _0x58f09e.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0xc94e0.ccall("SetFullscreen", null, ["number"], [_0x5d51e2]);
      _0x58f09e.canPerformEventHandlerRequests = _0x495637;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0xc94e0.preRun.push(function () {
      var _0x8e30cb = _0xc94e0.unityFileSystemInit || function () {
        _0x1e6cd4.mkdir("/idbfs");
        _0x1e6cd4.mount(_0x42af0e, {}, "/idbfs");
        _0xc94e0.addRunDependency("JS_FileSystem_Mount");
        _0x1e6cd4.syncfs(true, function (_0x5d08dd) {
          if (_0x5d08dd) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0xc94e0.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x8e30cb();
    });
  }
  var _0x2121d0 = [];
  var _0x5cc730 = false;
  var _0x596034;
  var _0x556727 = null;
  function _0x2bc14f(_0xaded82) {
    var _0x23b286 = Object.keys(_0x2121d0);
    for (var _0x2195fb = 0; _0x2195fb < _0x23b286.length; ++_0x2195fb) {
      var _0x174385 = _0x2121d0[_0x23b286[_0x2195fb]];
      if (_0x174385.deviceId && _0x174385.deviceId == _0xaded82.deviceId) {
        return _0x174385;
      }
    }
    for (var _0x2195fb = 0; _0x2195fb < _0x23b286.length; ++_0x2195fb) {
      var _0x174385 = _0x2121d0[_0x23b286[_0x2195fb]];
      if (_0x174385 == _0xaded82) {
        return _0x174385;
      }
    }
    for (var _0x2195fb = 0; _0x2195fb < _0x23b286.length; ++_0x2195fb) {
      var _0x174385 = _0x2121d0[_0x23b286[_0x2195fb]];
      if (_0x174385.label && _0x174385.label == _0xaded82.label) {
        return _0x174385;
      }
    }
    for (var _0x2195fb = 0; _0x2195fb < _0x23b286.length; ++_0x2195fb) {
      var _0x174385 = _0x2121d0[_0x23b286[_0x2195fb]];
      if (_0x174385.groupId && _0x174385.kind && _0x174385.groupId == _0xaded82.groupId && _0x174385.kind == _0xaded82.kind) {
        return _0x174385;
      }
    }
  }
  function _0x367343() {
    for (var _0x4f4265 = 0;; ++_0x4f4265) {
      if (!_0x2121d0[_0x4f4265]) {
        return _0x4f4265;
      }
    }
  }
  function _0x519897(_0x3ad515) {
    _0x596034();
    _0x2121d0 = [];
    var _0x2d17c9 = {};
    var _0xda388e = [];
    _0x3ad515.forEach(function (_0x2db19c) {
      if (_0x2db19c.kind === "videoinput") {
        var _0x4994c1 = _0x2bc14f(_0x2db19c);
        if (_0x4994c1) {
          _0x2d17c9[_0x4994c1.id] = _0x4994c1;
        } else {
          _0xda388e.push(_0x2db19c);
        }
      }
    });
    _0x2121d0 = _0x2d17c9;
    _0xda388e.forEach(function (_0x40b4e9) {
      if (!_0x40b4e9.id) {
        _0x40b4e9.id = _0x367343();
        _0x40b4e9.name = _0x40b4e9.label || "Video input #" + (_0x40b4e9.id + 1);
        _0x40b4e9.isFrontFacing = _0x40b4e9.name.toLowerCase().includes("front") || !_0x40b4e9.name.toLowerCase().includes("front") && !_0x40b4e9.name.toLowerCase().includes("back");
        _0x2121d0[_0x40b4e9.id] = _0x40b4e9;
      }
    });
  }
  function _0x3d513b() {
    if (!_0x2121d0) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x19ce27) {
      _0x519897(_0x19ce27);
      _0x5cc730 = true;
    }).catch(function (_0x27b4ca) {
      console.warn("Unable to enumerate media devices: " + _0x27b4ca + "\nWebcams will not be available.");
      _0x1aa401();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x3d513b, 60000);
      _0x111cca("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x1aa401() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x3d513b);
    }
    _0x2121d0 = null;
  }
  _0xc94e0.disableAccessToMediaDevices = _0x1aa401;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x1aa401();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x228ea("enumerateMediaDevices");
        _0x596034 = function () {
          if (_0x556727 !== null) {
            clearTimeout(_0x556727);
          }
          _0x3ac9a4("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x596034 = function () {};
        };
        _0x3d513b();
        _0x556727 = setTimeout(_0x596034, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x3d513b);
      } catch (_0x5f20f4) {
        console.warn("Unable to enumerate media devices: " + _0x5f20f4);
        _0x1aa401();
      }
    }, 0);
  }
  function _0x522612(_0x31e699, _0x1bba3c, _0x43de5e) {
    var _0x5e23ca = _0x49f2d3(_0x1bba3c);
    var _0x49cee1 = _0x49f2d3(_0x31e699);
    var _0x11ada9 = 0;
    try {
      if (_0x43de5e === undefined) {
        _0x14bf63(_0x49cee1, _0x5e23ca);
      } else if (typeof _0x43de5e === "string") {
        _0x11ada9 = _0x49f2d3(_0x43de5e);
        _0x4f0ba3(_0x49cee1, _0x5e23ca, _0x11ada9);
      } else if (typeof _0x43de5e === "number") {
        _0x8c7c7a(_0x49cee1, _0x5e23ca, _0x43de5e);
      } else {
        throw "" + _0x43de5e + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x289376(_0x11ada9);
      _0x289376(_0x49cee1);
      _0x289376(_0x5e23ca);
    }
  }
  _0xc94e0.SendMessage = _0x522612;
  var _0x3101ee = {};
  var _0x21a11f;
  for (_0x21a11f in _0xc94e0) {
    if (_0xc94e0.hasOwnProperty(_0x21a11f)) {
      _0x3101ee[_0x21a11f] = _0xc94e0[_0x21a11f];
    }
  }
  var _0x2402d7 = [];
  var _0xe83b70 = "./this.program";
  var _0x1bcf93 = function (_0x1239ff, _0xc97338) {
    throw _0xc97338;
  };
  var _0x3c78f5 = false;
  var _0xf7de81 = false;
  var _0x50fc22 = false;
  var _0x1c5202 = false;
  _0x3c78f5 = typeof window === "object";
  _0xf7de81 = typeof importScripts === "function";
  _0x50fc22 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x1c5202 = !_0x3c78f5 && !_0x50fc22 && !_0xf7de81;
  var _0x3c8cfa = "";
  function _0x59b28a(_0x3f5226) {
    if (_0xc94e0.locateFile) {
      return _0xc94e0.locateFile(_0x3f5226, _0x3c8cfa);
    }
    return _0x3c8cfa + _0x3f5226;
  }
  var _0x4d4aa5;
  var _0xae001a;
  var _0x10a0bd;
  var _0x1ab804;
  var _0x2c0e69;
  var _0x38e495;
  if (_0x50fc22) {
    if (_0xf7de81) {
      _0x3c8cfa = require("path").dirname(_0x3c8cfa) + "/";
    } else {
      _0x3c8cfa = __dirname + "/";
    }
    _0x4d4aa5 = function _0x983ca6(_0x476347, _0x11f399) {
      if (!_0x2c0e69) {
        _0x2c0e69 = require("fs");
      }
      if (!_0x38e495) {
        _0x38e495 = require("path");
      }
      _0x476347 = _0x38e495.normalize(_0x476347);
      return _0x2c0e69.readFileSync(_0x476347, _0x11f399 ? null : "utf8");
    };
    _0x10a0bd = function _0x5aed0f(_0x37515b) {
      var _0xd2a9b3 = _0x4d4aa5(_0x37515b, true);
      if (!_0xd2a9b3.buffer) {
        _0xd2a9b3 = new Uint8Array(_0xd2a9b3);
      }
      _0x1bfc0b(_0xd2a9b3.buffer);
      return _0xd2a9b3;
    };
    if (process.argv.length > 1) {
      _0xe83b70 = process.argv[1].replace(/\\/g, "/");
    }
    _0x2402d7 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0xc94e0;
    }
    process.on("uncaughtException", function (_0x4fee11) {
      if (!(_0x4fee11 instanceof _0x30c165)) {
        throw _0x4fee11;
      }
    });
    process.on("unhandledRejection", _0x44e8b0);
    _0x1bcf93 = function (_0x52edbd) {
      process.exit(_0x52edbd);
    };
    _0xc94e0.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x1c5202) {
    if (typeof read != "undefined") {
      _0x4d4aa5 = function _0x184c46(_0x4f73a7) {
        return read(_0x4f73a7);
      };
    }
    _0x10a0bd = function _0x3b3c5d(_0x1aa1c2) {
      var _0x1c3930;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x1aa1c2));
      }
      _0x1c3930 = read(_0x1aa1c2, "binary");
      _0x1bfc0b(typeof _0x1c3930 === "object");
      return _0x1c3930;
    };
    if (typeof scriptArgs != "undefined") {
      _0x2402d7 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x2402d7 = arguments;
    }
    if (typeof quit === "function") {
      _0x1bcf93 = function (_0x356452) {
        quit(_0x356452);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x3c78f5 || _0xf7de81) {
    if (_0xf7de81) {
      _0x3c8cfa = "https://gamea.azgame.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x3c8cfa = document.currentScript.src;
    }
    if (_0x3c8cfa.indexOf("blob:") !== 0) {
      _0x3c8cfa = _0x3c8cfa.substr(0, _0x3c8cfa.lastIndexOf("/") + 1);
    } else {
      _0x3c8cfa = "";
    }
    {
      _0x4d4aa5 = function (_0x8d541e) {
        var _0x4d8571 = new XMLHttpRequest();
        _0x4d8571.open("GET", _0x8d541e, false);
        _0x4d8571.send(null);
        return _0x4d8571.responseText;
      };
      if (_0xf7de81) {
        _0x10a0bd = function (_0x54d2b5) {
          var _0x18e904 = new XMLHttpRequest();
          _0x18e904.open("GET", _0x54d2b5, false);
          _0x18e904.responseType = "arraybuffer";
          _0x18e904.send(null);
          return new Uint8Array(_0x18e904.response);
        };
      }
      _0xae001a = function (_0x4e6c0e, _0x294f9c, _0x2c400a) {
        var _0x32e844 = new XMLHttpRequest();
        _0x32e844.open("GET", _0x4e6c0e, true);
        _0x32e844.responseType = "arraybuffer";
        _0x32e844.onload = function () {
          if (_0x32e844.status == 200 || _0x32e844.status == 0 && _0x32e844.response) {
            _0x294f9c(_0x32e844.response);
            return;
          }
          _0x2c400a();
        };
        _0x32e844.onerror = _0x2c400a;
        _0x32e844.send(null);
      };
    }
    _0x1ab804 = function (_0x4eafe8) {
      document.title = _0x4eafe8;
    };
  } else {}
  var _0x25d5db = _0xc94e0.print || console.log.bind(console);
  var _0x551fc8 = _0xc94e0.printErr || console.warn.bind(console);
  for (_0x21a11f in _0x3101ee) {
    if (_0x3101ee.hasOwnProperty(_0x21a11f)) {
      _0xc94e0[_0x21a11f] = _0x3101ee[_0x21a11f];
    }
  }
  _0x3101ee = null;
  if (_0xc94e0.arguments) {
    _0x2402d7 = _0xc94e0.arguments;
  }
  if (_0xc94e0.thisProgram) {
    _0xe83b70 = _0xc94e0.thisProgram;
  }
  if (_0xc94e0.quit) {
    _0x1bcf93 = _0xc94e0.quit;
  }
  var _0x2f1391 = 16;
  function _0x535c27(_0x3eff30, _0x3e15cf) {
    if (!_0x3e15cf) {
      _0x3e15cf = _0x2f1391;
    }
    return Math.ceil(_0x3eff30 / _0x3e15cf) * _0x3e15cf;
  }
  function _0x111cca(_0x3ec2e6) {
    if (!_0x111cca.shown) {
      _0x111cca.shown = {};
    }
    if (!_0x111cca.shown[_0x3ec2e6]) {
      _0x111cca.shown[_0x3ec2e6] = 1;
      _0x551fc8(_0x3ec2e6);
    }
  }
  var _0xfc0d87 = 0;
  var _0x2f751d = function (_0x32d609) {
    _0xfc0d87 = _0x32d609;
  };
  var _0x3e342a = function () {
    return _0xfc0d87;
  };
  var _0x2f8ab3;
  if (_0xc94e0.wasmBinary) {
    _0x2f8ab3 = _0xc94e0.wasmBinary;
  }
  var _0x49a530 = _0xc94e0.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x44e8b0("no native wasm support detected");
  }
  var _0x139b68;
  var _0x31a725 = false;
  var _0x9fbfb9;
  function _0x1bfc0b(_0x221d8e, _0x152aa9) {
    if (!_0x221d8e) {
      _0x44e8b0("Assertion failed: " + _0x152aa9);
    }
  }
  function _0x1aa04e(_0x29920f) {
    var _0x4c8190 = _0xc94e0["_" + _0x29920f];
    _0x1bfc0b(_0x4c8190, "Cannot call unknown function " + _0x29920f + ", make sure it is exported");
    return _0x4c8190;
  }
  function _0x646959(_0x35abd1, _0xae8050, _0x18bb89, _0x18d7f0, _0x1fea77) {
    var _0x1ebcac = {
      string: function (_0x5613b7) {
        var _0x15fc25 = 0;
        if (_0x5613b7 !== null && _0x5613b7 !== undefined && _0x5613b7 !== 0) {
          var _0x585aa0 = (_0x5613b7.length << 2) + 1;
          _0x15fc25 = _0x432d16(_0x585aa0);
          _0x331149(_0x5613b7, _0x15fc25, _0x585aa0);
        }
        return _0x15fc25;
      },
      array: function (_0x53b722) {
        var _0x2cad8d = _0x432d16(_0x53b722.length);
        _0x485da2(_0x53b722, _0x2cad8d);
        return _0x2cad8d;
      }
    };
    function _0x4c1ff6(_0x284a07) {
      if (_0xae8050 === "string") {
        return _0x21e34e(_0x284a07);
      }
      if (_0xae8050 === "boolean") {
        return Boolean(_0x284a07);
      }
      return _0x284a07;
    }
    var _0x1ca207 = _0x1aa04e(_0x35abd1);
    var _0x1051f3 = [];
    var _0x37d39f = 0;
    if (_0x18d7f0) {
      for (var _0x10d8c6 = 0; _0x10d8c6 < _0x18d7f0.length; _0x10d8c6++) {
        var _0x413d44 = _0x1ebcac[_0x18bb89[_0x10d8c6]];
        if (_0x413d44) {
          if (_0x37d39f === 0) {
            _0x37d39f = _0x1b881f();
          }
          _0x1051f3[_0x10d8c6] = _0x413d44(_0x18d7f0[_0x10d8c6]);
        } else {
          _0x1051f3[_0x10d8c6] = _0x18d7f0[_0x10d8c6];
        }
      }
    }
    var _0x15960e = _0x1ca207.apply(null, _0x1051f3);
    _0x15960e = _0x4c1ff6(_0x15960e);
    if (_0x37d39f !== 0) {
      _0x2351aa(_0x37d39f);
    }
    return _0x15960e;
  }
  function _0x2de8ad(_0x498399, _0x5dde7e, _0x446578, _0x343010) {
    _0x446578 = _0x446578 || [];
    var _0x370cd7 = _0x446578.every(function (_0x135116) {
      return _0x135116 === "number";
    });
    var _0x327b26 = _0x5dde7e !== "string";
    if (_0x327b26 && _0x370cd7 && !_0x343010) {
      return _0x1aa04e(_0x498399);
    }
    return function () {
      return _0x646959(_0x498399, _0x5dde7e, _0x446578, arguments, _0x343010);
    };
  }
  var _0x222dbf = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x31b174(_0x226db7, _0x2f17b9, _0x32785e) {
    var _0x2ea3e3 = _0x2f17b9 + _0x32785e;
    var _0x1954c0 = _0x2f17b9;
    while (_0x226db7[_0x1954c0] && !(_0x1954c0 >= _0x2ea3e3)) {
      ++_0x1954c0;
    }
    if (_0x1954c0 - _0x2f17b9 > 16 && _0x226db7.subarray && _0x222dbf) {
      return _0x222dbf.decode(_0x226db7.subarray(_0x2f17b9, _0x1954c0));
    } else {
      var _0x28a025 = "";
      while (_0x2f17b9 < _0x1954c0) {
        var _0x6e40bf = _0x226db7[_0x2f17b9++];
        if (!(_0x6e40bf & 128)) {
          _0x28a025 += String.fromCharCode(_0x6e40bf);
          continue;
        }
        var _0x29b1e7 = _0x226db7[_0x2f17b9++] & 63;
        if ((_0x6e40bf & 224) == 192) {
          _0x28a025 += String.fromCharCode((_0x6e40bf & 31) << 6 | _0x29b1e7);
          continue;
        }
        var _0x2a40b2 = _0x226db7[_0x2f17b9++] & 63;
        if ((_0x6e40bf & 240) == 224) {
          _0x6e40bf = (_0x6e40bf & 15) << 12 | _0x29b1e7 << 6 | _0x2a40b2;
        } else {
          _0x6e40bf = (_0x6e40bf & 7) << 18 | _0x29b1e7 << 12 | _0x2a40b2 << 6 | _0x226db7[_0x2f17b9++] & 63;
        }
        if (_0x6e40bf < 65536) {
          _0x28a025 += String.fromCharCode(_0x6e40bf);
        } else {
          var _0x1ad82b = _0x6e40bf - 65536;
          _0x28a025 += String.fromCharCode(_0x1ad82b >> 10 | 55296, _0x1ad82b & 1023 | 56320);
        }
      }
    }
    return _0x28a025;
  }
  function _0x21e34e(_0x1afdf0, _0x8a322) {
    if (_0x1afdf0) {
      return _0x31b174(_0xb76fd2, _0x1afdf0, _0x8a322);
    } else {
      return "";
    }
  }
  function _0x5291de(_0x11a7fc, _0x521603, _0x39a162, _0x5a82c1) {
    if (!(_0x5a82c1 > 0)) {
      return 0;
    }
    var _0x585678 = _0x39a162;
    var _0xd16135 = _0x39a162 + _0x5a82c1 - 1;
    for (var _0x52be59 = 0; _0x52be59 < _0x11a7fc.length; ++_0x52be59) {
      var _0x3e80e4 = _0x11a7fc.charCodeAt(_0x52be59);
      if (_0x3e80e4 >= 55296 && _0x3e80e4 <= 57343) {
        var _0x1cb060 = _0x11a7fc.charCodeAt(++_0x52be59);
        _0x3e80e4 = 65536 + ((_0x3e80e4 & 1023) << 10) | _0x1cb060 & 1023;
      }
      if (_0x3e80e4 <= 127) {
        if (_0x39a162 >= _0xd16135) {
          break;
        }
        _0x521603[_0x39a162++] = _0x3e80e4;
      } else if (_0x3e80e4 <= 2047) {
        if (_0x39a162 + 1 >= _0xd16135) {
          break;
        }
        _0x521603[_0x39a162++] = _0x3e80e4 >> 6 | 192;
        _0x521603[_0x39a162++] = _0x3e80e4 & 63 | 128;
      } else if (_0x3e80e4 <= 65535) {
        if (_0x39a162 + 2 >= _0xd16135) {
          break;
        }
        _0x521603[_0x39a162++] = _0x3e80e4 >> 12 | 224;
        _0x521603[_0x39a162++] = _0x3e80e4 >> 6 & 63 | 128;
        _0x521603[_0x39a162++] = _0x3e80e4 & 63 | 128;
      } else {
        if (_0x39a162 + 3 >= _0xd16135) {
          break;
        }
        _0x521603[_0x39a162++] = _0x3e80e4 >> 18 | 240;
        _0x521603[_0x39a162++] = _0x3e80e4 >> 12 & 63 | 128;
        _0x521603[_0x39a162++] = _0x3e80e4 >> 6 & 63 | 128;
        _0x521603[_0x39a162++] = _0x3e80e4 & 63 | 128;
      }
    }
    _0x521603[_0x39a162] = 0;
    return _0x39a162 - _0x585678;
  }
  function _0x331149(_0x1ebb87, _0x680a6d, _0x3b1582) {
    return _0x5291de(_0x1ebb87, _0xb76fd2, _0x680a6d, _0x3b1582);
  }
  function _0x356cec(_0xf3bee9) {
    var _0x593ef6 = 0;
    for (var _0x1fe6da = 0; _0x1fe6da < _0xf3bee9.length; ++_0x1fe6da) {
      var _0x415110 = _0xf3bee9.charCodeAt(_0x1fe6da);
      if (_0x415110 >= 55296 && _0x415110 <= 57343) {
        _0x415110 = 65536 + ((_0x415110 & 1023) << 10) | _0xf3bee9.charCodeAt(++_0x1fe6da) & 1023;
      }
      if (_0x415110 <= 127) {
        ++_0x593ef6;
      } else if (_0x415110 <= 2047) {
        _0x593ef6 += 2;
      } else if (_0x415110 <= 65535) {
        _0x593ef6 += 3;
      } else {
        _0x593ef6 += 4;
      }
    }
    return _0x593ef6;
  }
  function _0x35bd4b(_0x3cb5dc) {
    var _0x5f533d = _0x356cec(_0x3cb5dc) + 1;
    var _0x5b6da3 = _0x52fe3e(_0x5f533d);
    if (_0x5b6da3) {
      _0x5291de(_0x3cb5dc, _0x133579, _0x5b6da3, _0x5f533d);
    }
    return _0x5b6da3;
  }
  function _0x52defa(_0x22baaa) {
    var _0x2b29c1 = _0x356cec(_0x22baaa) + 1;
    var _0x14f9be = _0x432d16(_0x2b29c1);
    _0x5291de(_0x22baaa, _0x133579, _0x14f9be, _0x2b29c1);
    return _0x14f9be;
  }
  function _0x485da2(_0x1d02f7, _0x175206) {
    _0x133579.set(_0x1d02f7, _0x175206);
  }
  function _0x1116f2(_0x3cd6a5, _0x934cb9, _0x345fc3) {
    for (var _0x50697f = 0; _0x50697f < _0x3cd6a5.length; ++_0x50697f) {
      _0x133579[_0x934cb9++ >> 0] = _0x3cd6a5.charCodeAt(_0x50697f);
    }
    if (!_0x345fc3) {
      _0x133579[_0x934cb9 >> 0] = 0;
    }
  }
  function _0x6868c8(_0x207ac2, _0xb2973) {
    if (_0x207ac2 % _0xb2973 > 0) {
      _0x207ac2 += _0xb2973 - _0x207ac2 % _0xb2973;
    }
    return _0x207ac2;
  }
  var _0x5c18d0;
  var _0x133579;
  var _0xb76fd2;
  var _0xefd34;
  var _0x353b5e;
  var _0x14d31c;
  var _0x5305b0;
  var _0x29a541;
  var _0x4cdd16;
  function _0x1fb7ab(_0x3505a7) {
    _0x5c18d0 = _0x3505a7;
    _0xc94e0.HEAP8 = _0x133579 = new Int8Array(_0x3505a7);
    _0xc94e0.HEAP16 = _0xefd34 = new Int16Array(_0x3505a7);
    _0xc94e0.HEAP32 = _0x14d31c = new Int32Array(_0x3505a7);
    _0xc94e0.HEAPU8 = _0xb76fd2 = new Uint8Array(_0x3505a7);
    _0xc94e0.HEAPU16 = _0x353b5e = new Uint16Array(_0x3505a7);
    _0xc94e0.HEAPU32 = _0x5305b0 = new Uint32Array(_0x3505a7);
    _0xc94e0.HEAPF32 = _0x29a541 = new Float32Array(_0x3505a7);
    _0xc94e0.HEAPF64 = _0x4cdd16 = new Float64Array(_0x3505a7);
  }
  var _0x545a88 = _0xc94e0.INITIAL_MEMORY || 33554432;
  var _0x103c5b;
  var _0x58c57f = [];
  var _0x2c1c05 = [];
  var _0x510d83 = [];
  var _0xeba85f = [];
  var _0x1436db = [];
  var _0x2901b1 = false;
  var _0x543741 = false;
  function _0x1cbb85() {
    if (_0xc94e0.preRun) {
      if (typeof _0xc94e0.preRun == "function") {
        _0xc94e0.preRun = [_0xc94e0.preRun];
      }
      while (_0xc94e0.preRun.length) {
        _0xaff2db(_0xc94e0.preRun.shift());
      }
    }
    _0x383c8b(_0x58c57f);
  }
  function _0x48dcbf() {
    _0x2901b1 = true;
    if (!_0xc94e0.noFSInit && !_0x1e6cd4.init.initialized) {
      _0x1e6cd4.init();
    }
    _0x394d19.init();
    _0x310d4f.root = _0x1e6cd4.mount(_0x310d4f, {}, null);
    _0x98ef58.root = _0x1e6cd4.mount(_0x98ef58, {}, null);
    _0x383c8b(_0x2c1c05);
  }
  function _0x2b1801() {
    _0x1e6cd4.ignorePermissions = false;
    _0x383c8b(_0x510d83);
  }
  function _0x52e13b() {
    _0x543741 = true;
  }
  function _0x55962c() {
    if (_0xc94e0.postRun) {
      if (typeof _0xc94e0.postRun == "function") {
        _0xc94e0.postRun = [_0xc94e0.postRun];
      }
      while (_0xc94e0.postRun.length) {
        _0x38110c(_0xc94e0.postRun.shift());
      }
    }
    _0x383c8b(_0x1436db);
  }
  function _0xaff2db(_0x11a7d5) {
    _0x58c57f.unshift(_0x11a7d5);
  }
  function _0x36c1be(_0x383267) {
    _0x2c1c05.unshift(_0x383267);
  }
  function _0x38110c(_0x1806b6) {
    _0x1436db.unshift(_0x1806b6);
  }
  var _0x544106 = 0;
  var _0x361c22 = null;
  var _0x60c00f = null;
  function _0x4e7ec8(_0x1378ae) {
    return _0x1378ae;
  }
  function _0x228ea(_0x2c40df) {
    _0x544106++;
    if (_0xc94e0.monitorRunDependencies) {
      _0xc94e0.monitorRunDependencies(_0x544106);
    }
  }
  function _0x3ac9a4(_0x15e11a) {
    _0x544106--;
    if (_0xc94e0.monitorRunDependencies) {
      _0xc94e0.monitorRunDependencies(_0x544106);
    }
    if (_0x544106 == 0) {
      if (_0x361c22 !== null) {
        clearInterval(_0x361c22);
        _0x361c22 = null;
      }
      if (_0x60c00f) {
        var _0x24486a = _0x60c00f;
        _0x60c00f = null;
        _0x24486a();
      }
    }
  }
  _0xc94e0.preloadedImages = {};
  _0xc94e0.preloadedAudios = {};
  function _0x44e8b0(_0x376fb3) {
    if (_0xc94e0.onAbort) {
      _0xc94e0.onAbort(_0x376fb3);
    }
    _0x376fb3 += "";
    _0x551fc8(_0x376fb3);
    _0x31a725 = true;
    _0x9fbfb9 = 1;
    _0x376fb3 = "abort(" + _0x376fb3 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x244946 = new WebAssembly.RuntimeError(_0x376fb3);
    throw _0x244946;
  }
  var _0x5c8ac9 = "data:application/octet-stream;base64,";
  function _0x128c2a(_0x146bc1) {
    return _0x146bc1.startsWith(_0x5c8ac9);
  }
  function _0x3450d1(_0x2f03e1) {
    return _0x2f03e1.startsWith("file://");
  }
  var _0x482ee3 = "build.wasm";
  if (!_0x128c2a(_0x482ee3)) {
    _0x482ee3 = _0x59b28a(_0x482ee3);
  }
  function _0x111a07(_0x2a7417) {
    try {
      if (_0x2a7417 == _0x482ee3 && _0x2f8ab3) {
        return new Uint8Array(_0x2f8ab3);
      }
      if (_0x10a0bd) {
        return _0x10a0bd(_0x2a7417);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x25be7d) {
      _0x44e8b0(_0x25be7d);
    }
  }
  function _0x17a4f4() {
    if (!_0x2f8ab3 && (_0x3c78f5 || _0xf7de81)) {
      if (typeof fetch === "function" && !_0x3450d1(_0x482ee3)) {
        return fetch(_0x482ee3, {
          credentials: "same-origin"
        }).then(function (_0x3af487) {
          if (!_0x3af487.ok) {
            throw "failed to load wasm binary file at '" + _0x482ee3 + "'";
          }
          return _0x3af487.arrayBuffer();
        }).catch(function () {
          return _0x111a07(_0x482ee3);
        });
      } else if (_0xae001a) {
        return new Promise(function (_0x278da6, _0x12ac4d) {
          _0xae001a(_0x482ee3, function (_0x563003) {
            _0x278da6(new Uint8Array(_0x563003));
          }, _0x12ac4d);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x111a07(_0x482ee3);
    });
  }
  function _0x2e76c3() {
    var _0x5f10f7 = {
      a: _0x2e409b
    };
    function _0x319265(_0x110e22, _0x1ff13c) {
      var _0x19a03b = _0x110e22.exports;
      _0xc94e0.asm = _0x19a03b;
      _0x139b68 = _0xc94e0.asm.Tj;
      _0x1fb7ab(_0x139b68.buffer);
      _0x103c5b = _0xc94e0.asm.rk;
      _0x36c1be(_0xc94e0.asm.Uj);
      _0x3ac9a4("wasm-instantiate");
    }
    _0x228ea("wasm-instantiate");
    function _0x15b903(_0x2aa2c3) {
      _0x319265(_0x2aa2c3.instance);
    }
    function _0xa05d82(_0xf89b4) {
      return _0x17a4f4().then(function (_0x1f8c9e) {
        var _0x1ef62c = WebAssembly.instantiate(_0x1f8c9e, _0x5f10f7);
        return _0x1ef62c;
      }).then(_0xf89b4, function (_0x5f2ebb) {
        _0x551fc8("failed to asynchronously prepare wasm: " + _0x5f2ebb);
        _0x44e8b0(_0x5f2ebb);
      });
    }
    function _0x399a43() {
      if (!_0x2f8ab3 && typeof WebAssembly.instantiateStreaming === "function" && !_0x128c2a(_0x482ee3) && !_0x3450d1(_0x482ee3) && typeof fetch === "function") {
        return fetch(_0x482ee3, {
          credentials: "same-origin"
        }).then(function (_0x234263) {
          var _0x119dd5 = WebAssembly.instantiateStreaming(_0x234263, _0x5f10f7);
          return _0x119dd5.then(_0x15b903, function (_0xf48c23) {
            _0x551fc8("wasm streaming compile failed: " + _0xf48c23);
            _0x551fc8("falling back to ArrayBuffer instantiation");
            return _0xa05d82(_0x15b903);
          });
        });
      } else {
        return _0xa05d82(_0x15b903);
      }
    }
    if (_0xc94e0.instantiateWasm) {
      try {
        var _0x5ef373 = _0xc94e0.instantiateWasm(_0x5f10f7, _0x319265);
        return _0x5ef373;
      } catch (_0x19ff0a) {
        _0x551fc8("Module.instantiateWasm callback failed with error: " + _0x19ff0a);
        return false;
      }
    }
    _0x399a43();
    return {};
  }
  var _0x27094f;
  var _0x5804aa;
  var _0x30775f = {
    4113480: function () {
      return _0xc94e0.webglContextAttributes.premultipliedAlpha;
    },
    4113541: function () {
      return _0xc94e0.webglContextAttributes.preserveDrawingBuffer;
    },
    4113605: function () {
      return _0xc94e0.webglContextAttributes.powerPreference;
    }
  };
  function _0x383c8b(_0x2b862e) {
    while (_0x2b862e.length > 0) {
      var _0x5e9392 = _0x2b862e.shift();
      if (typeof _0x5e9392 == "function") {
        _0x5e9392(_0xc94e0);
        continue;
      }
      var _0x539638 = _0x5e9392.func;
      if (typeof _0x539638 === "number") {
        if (_0x5e9392.arg === undefined) {
          (function () {
            _0x55af51.call(null, _0x539638);
          })();
        } else {
          (function (_0x3a24be) {
            _0x3ce20f.apply(null, [_0x539638, _0x3a24be]);
          })(_0x5e9392.arg);
        }
      } else {
        _0x539638(_0x5e9392.arg === undefined ? null : _0x5e9392.arg);
      }
    }
  }
  function _0x51f946(_0x5ee2d2) {
    return _0x5ee2d2;
  }
  function _0x1148ad(_0x452098) {
    var _0x50336e = /\b_Z[\w\d_]+/g;
    return _0x452098.replace(_0x50336e, function (_0x58c29f) {
      var _0x3509fc = _0x51f946(_0x58c29f);
      if (_0x58c29f === _0x3509fc) {
        return _0x58c29f;
      } else {
        return _0x3509fc + " [" + _0x58c29f + "]";
      }
    });
  }
  function _0xc5bbab(_0x28b214, _0x4b29b7, _0x56ef14) {
    var _0x5d6c91 = _0xc94e0["dynCall_" + _0x28b214];
    if (_0x56ef14 && _0x56ef14.length) {
      return _0x5d6c91.apply(null, [_0x4b29b7].concat(_0x56ef14));
    } else {
      return _0x5d6c91.call(null, _0x4b29b7);
    }
  }
  function _0xd5d2c7(_0x1e074b, _0x53f790, _0x571653) {
    return _0xc5bbab(_0x1e074b, _0x53f790, _0x571653);
  }
  function _0x5d3033() {
    var _0xc0898 = new Error();
    if (!_0xc0898.stack) {
      try {
        throw new Error();
      } catch (_0x42cc17) {
        _0xc0898 = _0x42cc17;
      }
      if (!_0xc0898.stack) {
        return "(no stack trace available)";
      }
    }
    return _0xc0898.stack.toString();
  }
  var _0x9c4b03 = 0;
  function _0x1f6248() {
    return _0x49a530 || _0x9c4b03 > 0;
  }
  function _0x2008cc() {
    var _0x696a7b = _0x5d3033();
    if (_0xc94e0.extraStackTrace) {
      _0x696a7b += "\n" + _0xc94e0.extraStackTrace();
    }
    return _0x1148ad(_0x696a7b);
  }
  function _0x2b5e70(_0x4b9fb4, _0x59fe34, _0x224d49, _0x37b229, _0xb02747) {
    var _0x354347 = _0x21e34e(_0x4b9fb4);
    var _0x47ffcd = _0x21e34e(_0x59fe34);
    var _0x1fa444 = _0x21e34e(_0x224d49);
    var _0x4a08fd = _0x21e34e(_0x37b229);
    var _0x3a4ed0 = _0x21e34e(_0xb02747);
    try {
      firebase.firestore().collection(_0x354347).add(JSON.parse(_0x47ffcd)).then(function (_0x4a4681) {
        window.unityInstance.SendMessage(_0x1fa444, _0x4a08fd, "Success: document added in collection " + _0x354347);
      }).catch(function (_0x2fada4) {
        window.unityInstance.SendMessage(_0x1fa444, _0x3a4ed0, JSON.stringify(_0x2fada4, Object.getOwnPropertyNames(_0x2fada4)));
      });
    } catch (_0x4a2a45) {
      window.unityInstance.SendMessage(_0x1fa444, _0x3a4ed0, JSON.stringify(_0x4a2a45, Object.getOwnPropertyNames(_0x4a2a45)));
    }
  }
  function _0x4ab7e9(_0x5718c0, _0x5950b8, _0x35c61d, _0xedf260, _0x12da74, _0x4a446d, _0x266110) {
    var _0x2137f1 = _0x21e34e(_0x5718c0);
    var _0x1bba9c = _0x21e34e(_0x5950b8);
    var _0x372612 = _0x21e34e(_0x35c61d);
    var _0x4be556 = _0x21e34e(_0xedf260);
    var _0x51cd19 = _0x21e34e(_0x12da74);
    var _0x583c3e = _0x21e34e(_0x4a446d);
    var _0x529ddb = _0x21e34e(_0x266110);
    try {
      var _0xedf260 = {};
      _0xedf260[_0x372612] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x4be556));
      firebase.firestore().collection(_0x2137f1).doc(_0x1bba9c).update(_0xedf260).then(function () {
        window.unityInstance.SendMessage(_0x51cd19, _0x583c3e, "Success: element " + _0x4be556 + " was added in " + _0x372612);
      }).catch(function (_0x3246f4) {
        window.unityInstance.SendMessage(_0x51cd19, _0x529ddb, JSON.stringify(_0x3246f4, Object.getOwnPropertyNames(_0x3246f4)));
      });
    } catch (_0x5c9f6e) {
      window.unityInstance.SendMessage(_0x51cd19, _0x529ddb, JSON.stringify(_0x5c9f6e, Object.getOwnPropertyNames(_0x5c9f6e)));
    }
  }
  function _0x36e30a(_0x2fcc98) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x2fcc98);
    } catch (_0x2cea64) {
      window.UnitySDK.logError("Error while calling addScore:", _0x2cea64);
    }
  }
  function _0x437ac7(_0x500c51, _0x2f6773) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x500c51), JSON.parse(window.unityStringify(_0x2f6773)));
    } catch (_0x535801) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0x535801);
    }
  }
  function _0x27629b(_0x796cfc) {
    const _0x29addd = document.createElement("textarea");
    _0x29addd.value = window.unityStringify(_0x796cfc);
    document.body.appendChild(_0x29addd);
    _0x29addd.select();
    _0x29addd.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x29addd);
  }
  function _0x4599fc(_0x4de69b, _0x516965, _0x20075d, _0x580056, _0x145711) {
    var _0x269a3f = _0x21e34e(_0x4de69b);
    var _0x53dc67 = _0x21e34e(_0x516965);
    var _0xb9ca93 = _0x21e34e(_0x20075d);
    var _0x197ebb = _0x21e34e(_0x580056);
    var _0x522f0a = _0x21e34e(_0x145711);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x269a3f, _0x53dc67).then(function (_0x51d324) {
        window.unityInstance.SendMessage(_0xb9ca93, _0x197ebb, "Success: signed up for " + _0x269a3f);
      }).catch(function (_0x18851d) {
        window.unityInstance.SendMessage(_0xb9ca93, _0x522f0a, JSON.stringify(_0x18851d, Object.getOwnPropertyNames(_0x18851d)));
      });
    } catch (_0x383bf6) {
      window.unityInstance.SendMessage(_0xb9ca93, _0x522f0a, JSON.stringify(_0x383bf6, Object.getOwnPropertyNames(_0x383bf6)));
    }
  }
  function _0x271962() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x36b9b0) {
      window.UnitySDK.logError("Error while calling clear:", _0x36b9b0);
    }
  }
  function _0x19916d(_0x5ec9e0) {
    var _0x313a16 = null;
    try {
      _0x313a16 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x5ec9e0));
    } catch (_0x4a4b30) {
      window.UnitySDK.logError("Error while calling getItem:", _0x4a4b30);
    }
    var _0x38de9d = _0x356cec(_0x313a16 + "") + 1;
    var _0x522e9c = _0x52fe3e(_0x38de9d);
    _0x331149(_0x313a16, _0x522e9c, _0x38de9d);
    return _0x522e9c;
  }
  function _0x184b60(_0x4abef7) {
    var _0x365102 = null;
    try {
      _0x365102 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x4abef7));
    } catch (_0x9400fe) {
      window.UnitySDK.logError("Error while calling getItem:", _0x9400fe);
    }
    return _0x365102 !== null;
  }
  function _0x33963d(_0x4d4aef) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x4d4aef));
    } catch (_0x510601) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x510601);
    }
  }
  function _0x40ae69(_0x2f7dc9, _0x435f11) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x2f7dc9), window.unityStringify(_0x435f11));
    } catch (_0x222aa1) {
      window.UnitySDK.logError("Error while calling setItem:", _0x222aa1);
    }
  }
  function _0x39ead6(_0x4c4c53, _0x1ca5a0, _0x630efd, _0x530942, _0x4f8fe4) {
    var _0x103f82 = _0x21e34e(_0x4c4c53);
    var _0x11fb74 = _0x21e34e(_0x1ca5a0);
    var _0x5bac62 = _0x21e34e(_0x630efd);
    var _0x42ba35 = _0x21e34e(_0x530942);
    var _0x404529 = _0x21e34e(_0x4f8fe4);
    try {
      firebase.firestore().collection(_0x103f82).doc(_0x11fb74).delete().then(function () {
        window.unityInstance.SendMessage(_0x5bac62, _0x42ba35, "Success: document " + _0x11fb74 + " was deleted");
      }).catch(function (_0x3cf5cf) {
        window.unityInstance.SendMessage(_0x5bac62, _0x404529, JSON.stringify(_0x3cf5cf, Object.getOwnPropertyNames(_0x3cf5cf)));
      });
    } catch (_0x52a678) {
      window.unityInstance.SendMessage(_0x5bac62, _0x404529, JSON.stringify(_0x52a678, Object.getOwnPropertyNames(_0x52a678)));
    }
  }
  function _0x538210(_0x44e3e1, _0x3fe6ac, _0x6c0f53, _0x4a47b7, _0x30847b, _0x1313b7) {
    var _0x23faa4 = _0x21e34e(_0x44e3e1);
    var _0x10d970 = _0x21e34e(_0x3fe6ac);
    var _0x52b595 = _0x21e34e(_0x6c0f53);
    var _0x5019b4 = _0x21e34e(_0x4a47b7);
    var _0x1119ee = _0x21e34e(_0x30847b);
    var _0x28184f = _0x21e34e(_0x1313b7);
    try {
      var _0x16864c = {};
      _0x16864c[_0x52b595] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x23faa4).doc(_0x10d970).update(_0x16864c).then(function () {
        window.unityInstance.SendMessage(_0x5019b4, _0x1119ee, "Success: field " + _0x52b595 + " was deleted");
      }).catch(function (_0x58dafd) {
        window.unityInstance.SendMessage(_0x5019b4, _0x28184f, JSON.stringify(_0x58dafd, Object.getOwnPropertyNames(_0x58dafd)));
      });
    } catch (_0x3c12ce) {
      window.unityInstance.SendMessage(_0x5019b4, _0x28184f, JSON.stringify(_0x3c12ce, Object.getOwnPropertyNames(_0x3c12ce)));
    }
  }
  function _0x58c04f(_0x26e82f, _0x36e674, _0x18cd54, _0x57cc43) {
    var _0x32fe75 = _0x21e34e(_0x26e82f);
    var _0x3a4de5 = _0x21e34e(_0x36e674);
    var _0x1cd0a8 = _0x21e34e(_0x18cd54);
    var _0x2c7307 = _0x21e34e(_0x57cc43);
    try {
      firebase.database().ref(_0x32fe75).remove().then(function (_0x2f76ef) {
        window.unityInstance.SendMessage(_0x3a4de5, _0x1cd0a8, "Success: " + _0x32fe75 + " was deleted");
      });
    } catch (_0x33f1be) {
      window.unityInstance.SendMessage(_0x3a4de5, _0x2c7307, JSON.stringify(_0x33f1be, Object.getOwnPropertyNames(_0x33f1be)));
    }
  }
  function _0x3911f7(_0x3c28bc, _0x34c069, _0x215301, _0x34b840) {
    var _0x183d3a = _0x21e34e(_0x3c28bc);
    var _0x1175b3 = _0x21e34e(_0x34c069);
    var _0x3b80e2 = _0x21e34e(_0x215301);
    var _0x234f06 = _0x21e34e(_0x34b840);
    try {
      firebase.storage().ref(_0x183d3a).getDownloadURL().then(function (_0x3e15ee) {
        var _0x9f4842 = new XMLHttpRequest();
        _0x9f4842.responseType = "arraybuffer";
        _0x9f4842.onload = function (_0x1b85dc) {
          var _0x32af27 = _0x9f4842.response;
          window.unityInstance.SendMessage(_0x1175b3, _0x3b80e2, _0x50b8c5(_0x32af27));
        };
        _0x9f4842.open("GET", _0x3e15ee);
        _0x9f4842.send();
      }).catch(function (_0x36e854) {
        window.unityInstance.SendMessage(_0x1175b3, _0x234f06, JSON.stringify(_0x36e854, Object.getOwnPropertyNames(_0x36e854)));
      });
    } catch (_0x507b0a) {
      window.unityInstance.SendMessage(_0x1175b3, _0x234f06, JSON.stringify(_0x507b0a, Object.getOwnPropertyNames(_0x507b0a)));
    }
    function _0x50b8c5(_0x432987) {
      var _0x101d92 = "";
      var _0x4fa91f = new Uint8Array(_0x432987);
      var _0x514007 = _0x4fa91f.byteLength;
      for (var _0x463452 = 0; _0x463452 < _0x514007; _0x463452++) {
        _0x101d92 += String.fromCharCode(_0x4fa91f[_0x463452]);
      }
      return window.btoa(_0x101d92);
    }
  }
  function _0x175c4e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x916b6b) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x469ab8(_0x418efc) {
    var _0x477d0b = {
      adStarted: function () {
        _0x522612("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x522612("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x124262) {
        _0x522612("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x124262));
      }
    };
    var _0x17a169 = window.GMSOFT_GMADS_INFO.reward;
    var _0xe2ff3a = _0x17a169[Math.floor(Math.random() * _0x17a169.length)];
    try {
      var _0x5d1de6 = document.createElement("div");
      _0x5d1de6.id = "gm-ad-overlay";
      _0x5d1de6.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0xc4bcd3 = document.createElement("div");
      _0xc4bcd3.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x4fb3d2 = document.createElement("video");
      _0x4fb3d2.src = _0xe2ff3a.image;
      _0x4fb3d2.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x4fb3d2.autoplay = true;
      _0x4fb3d2.muted = true;
      _0x4fb3d2.preload = "auto";
      var _0x3f2c12 = document.createElement("button");
      _0x3f2c12.innerHTML = "Skip (5)";
      _0x3f2c12.disabled = true;
      _0x3f2c12.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x3f2c12.disabled = true;
      _0x3f2c12.style.opacity = "0.5";
      var _0x4e6248 = document.createElement("div");
      _0x4e6248.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x2af272 = document.createElement("div");
      _0x2af272.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0xd71bcb = 5;
      var _0x5e8ce6 = setInterval(function () {
        _0xd71bcb--;
        if (_0xd71bcb > 0) {
          _0x3f2c12.innerHTML = "Skip (" + _0xd71bcb + ")";
        } else {
          _0x3f2c12.innerHTML = "Skip";
          _0x3f2c12.disabled = false;
          _0x3f2c12.style.opacity = "1";
          _0x3f2c12.style.cursor = "pointer";
          clearInterval(_0x5e8ce6);
        }
      }, 1000);
      function _0x521e9d() {
        if (_0x5d1de6 && _0x5d1de6.parentNode) {
          _0x5d1de6.parentNode.removeChild(_0x5d1de6);
        }
        clearInterval(_0x5e8ce6);
        _0x477d0b.adFinished();
      }
      function _0x3f51f0() {
        window.open(_0xe2ff3a.url, "_blank");
      }
      function _0x414af7() {
        if (_0x4fb3d2.duration && _0x4fb3d2.currentTime) {
          var _0xb2157c = _0x4fb3d2.currentTime / _0x4fb3d2.duration * 100;
          _0x2af272.style.width = _0xb2157c + "%";
        }
      }
      _0x4fb3d2.addEventListener("loadstart", function () {
        _0x477d0b.adStarted();
      });
      _0x4fb3d2.addEventListener("timeupdate", function () {
        _0x414af7();
      });
      _0x4fb3d2.addEventListener("ended", function () {
        _0x521e9d();
      });
      _0x4fb3d2.addEventListener("error", function (_0x2c6b8b) {
        var _0x57e29c = {
          message: "Video load error",
          code: _0x2c6b8b.target.error ? _0x2c6b8b.target.error.code : "unknown"
        };
        _0x477d0b.adError(_0x57e29c);
        _0x521e9d();
      });
      _0x4fb3d2.addEventListener("click", function () {
        _0x3f51f0();
      });
      _0x3f2c12.addEventListener("click", function () {
        if (!_0x3f2c12.disabled) {
          _0x521e9d();
        }
      });
      _0x4fb3d2.addEventListener("contextmenu", function (_0x364504) {
        _0x364504.preventDefault();
      });
      _0x4e6248.appendChild(_0x2af272);
      _0xc4bcd3.appendChild(_0x4fb3d2);
      _0xc4bcd3.appendChild(_0x3f2c12);
      _0xc4bcd3.appendChild(_0x4e6248);
      _0x5d1de6.appendChild(_0xc4bcd3);
      document.body.appendChild(_0x5d1de6);
      _0x4fb3d2.play().catch(function (_0x5acb9b) {
        console.error("Video play error:", _0x5acb9b);
        _0x477d0b.adError({
          message: "Cannot play video",
          details: _0x5acb9b.message
        });
        _0x521e9d();
      });
    } catch (_0x409dec) {
      console.error("Ad overlay creation error:", _0x409dec);
      _0x477d0b.adError({
        message: "Failed to create ad overlay",
        details: _0x409dec.message
      });
    }
  }
  function _0x1e3f43(_0x31c089, _0x41c743) {
    gmEvent(_0x21e34e(_0x31c089), _0x21e34e(_0x41c743));
  }
  function _0x448d1c() {
    const _0x2113ef = "gmsdksigndomain";
    try {
      if (localStorage.hasOwnProperty(_0x2113ef)) {
        let _0x2b579d = localStorage.getItem(_0x2113ef);
        if (_0x2b579d && _0x2b579d.length > 10) {
          window.GMSOFT_SIGNED = _0x2b579d;
          console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
          _0x522612("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
          return;
        }
      }
    } catch (_0x97a73a) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x97a73a);
    }
    try {
      let _0xcdeadc = "hn=" + "https://gamea.azgame.io";
      let _0x48b5d4 = btoa(_0xcdeadc);
      let _0x29ab47 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x29ab47 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x3ba550 = _0x29ab47 + "?params=" + _0x48b5d4;
      var _0x54a019 = new XMLHttpRequest();
      let _0x4bf87a = "";
      _0x54a019.open("GET", _0x3ba550, false);
      _0x54a019.send(_0x4bf87a);
      let _0x102e8f = _0x54a019.responseText;
      window.GMSOFT_SIGNED = _0x102e8f;
      localStorage.setItem(_0x2113ef, _0x102e8f);
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x522612("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x195b44) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x195b44);
    }
  }
  function _0x47323e() {
    let _0x3299f3 = "https://gamea.azgame.io";
    _0x522612("GmSoft", "SetUnityHostName", _0x3299f3);
    _0x522612("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x584ea8() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x522612("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x32d510) {
      console.error("Error JS 12", _0x32d510);
    }
    try {
      gmStartAds(function () {
        _0x522612("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x13ff1a) {
      console.error("Error JS 20", _0x13ff1a);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x3616d3 => {
        _0x522612("GmSoft", "LockGame", _0x3616d3.detail);
      });
    } catch (_0x8d44af) {
      console.error("Error JS 28", _0x8d44af);
    }
  }
  function _0x3b6639(_0x4595dc) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x4595dc);
    } catch (_0x35753e) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x5f3d27() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0xcd8a27) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0xcd8a27);
    }
  }
  function _0x16cc1e() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0x1298ff) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0x1298ff);
    }
  }
  function _0x2e0d0e() {
    var _0x4da617 = firebaseConfig.projectId;
    var _0xa5fbc7 = _0x356cec(_0x4da617) + 1;
    var _0x55c9f6 = _0x52fe3e(_0xa5fbc7);
    _0x331149(_0x4da617, _0x55c9f6, _0xa5fbc7);
    return _0x55c9f6;
  }
  function _0x23ba98(_0x35300f, _0x3ff337, _0x29b9be, _0x4a71bf, _0x1335de) {
    var _0x47b934 = _0x21e34e(_0x35300f);
    var _0x2cd65c = _0x21e34e(_0x3ff337);
    var _0x100864 = _0x21e34e(_0x29b9be);
    var _0x26b7c9 = _0x21e34e(_0x4a71bf);
    var _0x44b3ba = _0x21e34e(_0x1335de);
    try {
      firebase.firestore().collection(_0x47b934).doc(_0x2cd65c).get().then(function (_0xfa19b1) {
        if (_0xfa19b1.exists) {
          window.unityInstance.SendMessage(_0x100864, _0x26b7c9, JSON.stringify(_0xfa19b1.data()));
        } else {
          window.unityInstance.SendMessage(_0x100864, _0x26b7c9, "null");
        }
      }).catch(function (_0x34190a) {
        window.unityInstance.SendMessage(_0x100864, _0x44b3ba, JSON.stringify(_0x34190a, Object.getOwnPropertyNames(_0x34190a)));
      });
    } catch (_0x51eeeb) {
      window.unityInstance.SendMessage(_0x100864, _0x44b3ba, JSON.stringify(_0x51eeeb, Object.getOwnPropertyNames(_0x51eeeb)));
    }
  }
  function _0x129281(_0x38e2cb, _0x372909, _0x598a75, _0x26b84b) {
    var _0x42ab6d = _0x21e34e(_0x38e2cb);
    var _0x27b31c = _0x21e34e(_0x372909);
    var _0x3443c6 = _0x21e34e(_0x598a75);
    var _0xe364be = _0x21e34e(_0x26b84b);
    try {
      firebase.firestore().collection(_0x42ab6d).get().then(function (_0x28b079) {
        var _0x323135 = {};
        _0x28b079.forEach(function (_0x4c9ee2) {
          _0x323135[_0x4c9ee2.id] = _0x4c9ee2.data();
        });
        window.unityInstance.SendMessage(_0x27b31c, _0x3443c6, JSON.stringify(_0x323135));
      }).catch(function (_0x17ef82) {
        window.unityInstance.SendMessage(_0x27b31c, _0xe364be, JSON.stringify(_0x17ef82, Object.getOwnPropertyNames(_0x17ef82)));
      });
    } catch (_0x43f318) {
      window.unityInstance.SendMessage(_0x27b31c, _0xe364be, JSON.stringify(_0x43f318, Object.getOwnPropertyNames(_0x43f318)));
    }
  }
  function _0x31d84e() {
    var _0x114166 = window.CrazyGames.SDK.environment;
    var _0x3c4e61 = _0x356cec(_0x114166) + 1;
    var _0x6f2a99 = _0x52fe3e(_0x3c4e61);
    _0x331149(_0x114166, _0x6f2a99, _0x3c4e61);
    return _0x6f2a99;
  }
  function _0x245460() {
    var _0x698f81 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x8a5d3d = _0x356cec(_0x698f81) + 1;
    var _0x20bc54 = _0x52fe3e(_0x8a5d3d);
    _0x331149(_0x698f81, _0x20bc54, _0x8a5d3d);
    return _0x20bc54;
  }
  function _0x317d55(_0x2eb9d3) {
    var _0x307e40 = new URLSearchParams(window.location.search);
    var _0x15bb01 = _0x307e40.get(window.unityStringify(_0x2eb9d3));
    if (_0x15bb01 === null) {
      _0x15bb01 = "";
    }
    var _0xa98083 = _0x356cec(_0x15bb01) + 1;
    var _0x192eb0 = _0x52fe3e(_0xa98083);
    _0x331149(_0x15bb01, _0x192eb0, _0xa98083);
    return _0x192eb0;
  }
  function _0x4651ea() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x28b2fc(_0x36861b, _0x5b54b, _0x227dd1, _0x1d37f1) {
    var _0x42db5b = _0x21e34e(_0x36861b);
    var _0x134371 = _0x21e34e(_0x5b54b);
    var _0x2943f7 = _0x21e34e(_0x227dd1);
    var _0x173828 = _0x21e34e(_0x1d37f1);
    try {
      firebase.database().ref(_0x42db5b).once("value").then(function (_0xd6df1b) {
        window.unityInstance.SendMessage(_0x134371, _0x2943f7, JSON.stringify(_0xd6df1b.val()));
      });
    } catch (_0x17509e) {
      window.unityInstance.SendMessage(_0x134371, _0x173828, JSON.stringify(_0x17509e, Object.getOwnPropertyNames(_0x17509e)));
    }
  }
  function _0x44d99e() {
    var _0x261c88 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x88df42 = _0x356cec(_0x261c88) + 1;
    var _0x433cc6 = _0x52fe3e(_0x88df42);
    _0x331149(_0x261c88, _0x433cc6, _0x88df42);
    return _0x433cc6;
  }
  function _0x5eb548() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x10c54b) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x10c54b)
      }));
    }).catch(function (_0x1ca08f) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0x1ca08f)
      }));
    });
  }
  function _0x352b70() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0xb25921) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0xb25921
      }));
    }).catch(function (_0x39063b) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x39063b)
      }));
    });
  }
  function _0x4810b3() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x65c81e) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x65c81e
      }));
    }).catch(function (_0x24d088) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x24d088)
      }));
    });
  }
  function _0x469447() {}
  function _0xee3aaf() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x522612("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0x5bec21) {
          this._showRewardAdFn = _0x5bec21;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x522612("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x522612("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x1e6ce8) {
          console.log("[H5 Ads] Reward break done");
          _0x522612("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x522612("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x4f53d1() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x522612("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x522612("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no " + adType + " ads");
      _0x522612("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0xd28474() {
    if (this._showRewardAdFn) {
      _0x522612("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x522612("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x1526f7() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x5ba58f) {
      window.UnitySDK.logError("Error while calling happytime:", _0x5ba58f);
    }
  }
  function _0x50122a() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x2734d5) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x2734d5);
    }
  }
  function _0x1da144(_0x27d0b6, _0x218f2, _0x30e4d6, _0x520ae0, _0x5a45d6, _0x47b184, _0x17485d) {
    var _0x355f94 = _0x21e34e(_0x27d0b6);
    var _0x1ab790 = _0x21e34e(_0x218f2);
    var _0x542c3d = _0x21e34e(_0x30e4d6);
    var _0x2b3283 = _0x21e34e(_0x5a45d6);
    var _0x32a209 = _0x21e34e(_0x47b184);
    var _0x174dd5 = _0x21e34e(_0x17485d);
    try {
      var _0x43f904 = {};
      _0x43f904[_0x542c3d] = firebase.firestore.FieldValue.increment(_0x520ae0);
      firebase.firestore().collection(_0x355f94).doc(_0x1ab790).update(_0x43f904).then(function () {
        window.unityInstance.SendMessage(_0x2b3283, _0x32a209, "Success: incremented " + _0x542c3d + " by " + _0x520ae0);
      }).catch(function (_0x2bb43c) {
        window.unityInstance.SendMessage(_0x2b3283, _0x174dd5, JSON.stringify(_0x2bb43c, Object.getOwnPropertyNames(_0x2bb43c)));
      });
    } catch (_0x23fb76) {
      window.unityInstance.SendMessage(_0x2b3283, _0x174dd5, JSON.stringify(_0x23fb76, Object.getOwnPropertyNames(_0x23fb76)));
    }
  }
  function _0x4fb78b(_0x1e5ef9) {
    if (typeof _0x21e34e !== "undefined") {
      window.unityStringify = _0x21e34e;
    } else {
      window.unityStringify = _0x21e34e;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x1e5ef9),
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
        var _0x15a41d = Array.prototype.slice.call(arguments);
        _0x15a41d.unshift("[JsLib]");
        console.error.apply(console, _0x15a41d);
      }
    };
    var _0x4763f8 = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x1e5ef9)
      }
    };
    var _0x508e0e = document.createElement("script");
    _0x508e0e.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x508e0e);
    _0x508e0e.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x4763f8).then(function () {
        _0x522612("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x431f81) {
          _0x522612("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x431f81 ? 1 : 0);
        }).catch(function (_0x24c7ac) {
          window.UnitySDK.logError("Error while checking adblock:", _0x24c7ac);
          _0x522612("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0x2c3863) {
          _0x522612("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0x2c3863)
          }));
        });
      });
    });
  }
  function _0x21a4d9(_0x54f422) {
    var _0x25f702 = _0x558c48(_0x54f422);
    var _0x12b36b = window[_0x25f702];
    if (_0x12b36b) {
      _0x12b36b();
    }
  }
  function _0x5e99cd() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  function _0x2c4994() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  var _0x1b8c64 = null;
  var _0x452e93 = 0;
  function _0x22b64e() {
    return _0x1b8c64 && _0x1b8c64.activated || _0x452e93 != 0;
  }
  var _0x40c434 = 1;
  var _0x38ef6b = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x14cb39() {
    _0x38ef6b = {
      x: _0x1b8c64.x * _0x40c434,
      y: _0x1b8c64.y * _0x40c434,
      z: _0x1b8c64.z * _0x40c434
    };
    if (_0x452e93 != 0) {
      _0x5bfedb(_0x452e93, _0x38ef6b.x, _0x38ef6b.y, _0x38ef6b.z);
    }
  }
  var _0x4a4995 = 0;
  var _0x177bc4 = 0;
  var _0x59ad87 = 0;
  var _0x2ff6db = 0;
  var _0x9ebe2b = 0;
  function _0x30b769(_0x5965e4, _0x269e86) {
    var _0xa3d260 = {
      x: _0x5965e4.x - _0x269e86.x,
      y: _0x5965e4.y - _0x269e86.y,
      z: _0x5965e4.z - _0x269e86.z
    };
    var _0x3181cf = _0xa3d260.x * _0xa3d260.x + _0xa3d260.y * _0xa3d260.y + _0xa3d260.z * _0xa3d260.z;
    var _0x3a7882 = {
      x: _0x5965e4.x + _0x269e86.x,
      y: _0x5965e4.y + _0x269e86.y,
      z: _0x5965e4.z + _0x269e86.z
    };
    var _0x17096a = _0x3a7882.x * _0x3a7882.x + _0x3a7882.y * _0x3a7882.y + _0x3a7882.z * _0x3a7882.z;
    if (_0x3181cf <= _0x17096a) {
      return _0xa3d260;
    } else {
      return _0x3a7882;
    }
  }
  function _0x38b0e0(_0x9004b) {
    var _0x1dab18 = {
      x: _0x9004b.accelerationIncludingGravity.x * _0x40c434,
      y: _0x9004b.accelerationIncludingGravity.y * _0x40c434,
      z: _0x9004b.accelerationIncludingGravity.z * _0x40c434
    };
    if (_0x452e93 != 0) {
      _0x5bfedb(_0x452e93, _0x1dab18.x, _0x1dab18.y, _0x1dab18.z);
    }
    var _0x233faf = {
      x: _0x9004b.acceleration.x * _0x40c434,
      y: _0x9004b.acceleration.y * _0x40c434,
      z: _0x9004b.acceleration.z * _0x40c434
    };
    if (_0x59ad87 != 0) {
      _0x5bfedb(_0x59ad87, _0x233faf.x, _0x233faf.y, _0x233faf.z);
    }
    if (_0x2ff6db != 0) {
      var _0x29e5a4 = _0x30b769(_0x1dab18, _0x233faf);
      _0x5bfedb(_0x2ff6db, _0x29e5a4.x, _0x29e5a4.y, _0x29e5a4.z);
    }
    if (_0x9ebe2b != 0) {
      var _0x451d8a = Math.PI / 180;
      _0x5bfedb(_0x9ebe2b, _0x9004b.rotationRate.alpha * _0x451d8a, _0x9004b.rotationRate.beta * _0x451d8a, _0x9004b.rotationRate.gamma * _0x451d8a);
    }
  }
  var _0x4bc9a4 = 0;
  function _0x4f1330(_0x414f0b) {
    if (_0x414f0b & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x52eb6c) {
          if (_0x52eb6c === "granted") {
            _0x4bc9a4 &= ~1;
          } else {
            _0x111cca("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x5ef401) {
          _0x111cca(_0x5ef401);
          _0x4bc9a4 |= 1;
        });
      }
    }
    if (_0x414f0b & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x4b2044) {
          if (_0x4b2044 === "granted") {
            _0x4bc9a4 &= ~2;
          } else {
            _0x111cca("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x411e49) {
          _0x111cca(_0x411e49);
          _0x4bc9a4 |= 2;
        });
      }
    }
  }
  function _0x23863f() {
    if (_0x452e93 == 0 && _0x59ad87 == 0 && _0x2ff6db == 0 && _0x9ebe2b == 0) {
      _0x4f1330(2);
      window.addEventListener("devicemotion", _0x38b0e0);
    }
  }
  function _0x2e4095() {
    var _0x5e3b58 = 9.80665;
    _0x40c434 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x5e3b58 : -1 / _0x5e3b58;
  }
  function _0x50f90a(_0x5ca220, _0xe5197a) {
    _0x2e4095();
    if (typeof Accelerometer === "undefined") {
      _0x23863f();
      if (_0x5ca220 != 0) {
        _0x452e93 = _0x5ca220;
      }
      return;
    }
    if (_0x5ca220 != 0) {
      _0x452e93 = _0x5ca220;
    }
    function _0x5b8d06(_0x31046b) {
      _0x1b8c64 = new Accelerometer({
        frequency: _0x31046b,
        referenceFrame: "device"
      });
      _0x1b8c64.addEventListener("reading", _0x14cb39);
      _0x1b8c64.addEventListener("error", function (_0x10d633) {
        _0x111cca(_0x10d633.error ? _0x10d633.error : _0x10d633);
      });
      _0x1b8c64.start();
      _0x177bc4 = _0x31046b;
    }
    if (_0x1b8c64) {
      if (_0x177bc4 != _0xe5197a) {
        _0x1b8c64.stop();
        _0x1b8c64.removeEventListener("reading", _0x14cb39);
        _0x5b8d06(_0xe5197a);
      }
    } else if (_0x4a4995 != 0) {
      _0x4a4995 = _0xe5197a;
    } else {
      _0x4a4995 = _0xe5197a;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0xb9da8e) {
        if (_0xb9da8e.state === "granted") {
          _0x5b8d06(_0x4a4995);
        } else {
          _0x111cca("No permission to use Accelerometer.");
        }
        _0x4a4995 = 0;
      });
    }
  }
  function _0x42fe64() {
    if (_0x452e93 == 0 && _0x59ad87 == 0 && _0x2ff6db == 0 && _0x9ebe2b == 0) {
      window.removeEventListener("devicemotion", _0x15344c);
    }
  }
  function _0x4f3b8f() {
    if (_0x1b8c64) {
      if (typeof GravitySensor !== "undefined" || _0x2ff6db == 0) {
        _0x1b8c64.stop();
        _0x1b8c64.removeEventListener("reading", _0x14cb39);
        _0x1b8c64 = null;
      }
      _0x452e93 = 0;
      _0x177bc4 = 0;
    } else if (_0x452e93 != 0) {
      _0x452e93 = 0;
      _0x42fe64();
    }
  }
  function _0x48d577(_0x4a3057, _0x2358ca) {
    var _0x77c86b = "";
    for (var _0x5a0e6e = 0; _0x5a0e6e < _0x2358ca; _0x5a0e6e++) {
      _0x77c86b += String.fromCharCode(_0xb76fd2[_0x4a3057 + _0x5a0e6e]);
    }
    _0xc94e0.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x77c86b) + "),default";
  }
  function _0x3544de(_0x574057) {
    _0xc94e0.canvas.style.cursor = _0x574057 ? "default" : "none";
  }
  function _0x2eeb21(_0xaebfd6) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0xaebfd6);
    }
    return _0xaebfd6.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x539ad4() {
    var _0x2c80fe = _0xc94e0.canvas ? _0xc94e0.canvas.id : "unity-canvas";
    return "#" + _0x2eeb21(_0x2c80fe);
  }
  function _0x230fe2(_0xc31fa8, _0x3d0f64, _0x4a2fe4, _0x1b6301) {
    var _0x2ac6a8 = document.querySelector(_0x539ad4());
    var _0x4557dc = _0x2ac6a8 && _0x2ac6a8.getBoundingClientRect();
    _0x5305b0[_0x4a2fe4 >> 2] = _0xc31fa8 - (_0x4557dc ? _0x4557dc.left : 0);
    _0x5305b0[_0x1b6301 >> 2] = _0x3d0f64 - (_0x4557dc ? _0x4557dc.top : 0);
  }
  function _0x49f2d3(_0x2ad6cf) {
    var _0x549796 = _0x356cec(_0x2ad6cf) + 1;
    var _0x31af2d = _0x52fe3e(_0x549796);
    _0x331149(_0x2ad6cf, _0x31af2d, _0x549796);
    return _0x31af2d;
  }
  function _0x5de60b() {
    var _0x4b49b3 = _0x539ad4();
    if (_0x5de60b.selector != _0x4b49b3) {
      _0x289376(_0x5de60b.ptr);
      _0x5de60b.ptr = _0x49f2d3(_0x4b49b3);
      _0x5de60b.selector = _0x4b49b3;
    }
    return _0x5de60b.ptr;
  }
  function _0x50a671(_0x155774) {
    var _0xdc1c51 = _0x21e34e(_0x155774);
    try {
      eval(_0xdc1c51);
    } catch (_0x2161bf) {
      console.error(_0x2161bf);
    }
  }
  function _0x373ddc(_0x5520c6) {
    var _0xdd0017 = _0x21e34e(_0x5520c6);
    window.open(_0xdd0017, "_blank", "");
  }
  var _0x357cff = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x5412bb) {
      if (_0x5412bb) {
        if (_0x357cff.numPendingSync == 0) {
          return;
        }
      } else if (_0x357cff.syncInProgress) {
        _0x357cff.numPendingSync++;
        return;
      }
      _0x357cff.syncInProgress = true;
      _0x1e6cd4.syncfs(false, function (_0x2245b0) {
        _0x357cff.syncInProgress = false;
      });
      _0x357cff.numPendingSync = 0;
    }
  };
  function _0x28df9c() {
    _0xc94e0.setInterval(function () {
      _0x357cff.sync(true);
    }, _0x357cff.syncInternal);
  }
  function _0x220957() {
    _0x357cff.sync(false);
  }
  var _0x157dc5 = null;
  function _0x170040() {
    if (typeof GravitySensor !== "undefined") {
      return _0x157dc5 && _0x157dc5.activated;
    } else {
      return _0x2ff6db != 0;
    }
  }
  function _0x43ede7() {
    if (_0x2ff6db != 0) {
      _0x5bfedb(_0x2ff6db, _0x157dc5.x * _0x40c434, _0x157dc5.y * _0x40c434, _0x157dc5.z * _0x40c434);
    }
  }
  var _0x385ff6 = 0;
  var _0x156bea = null;
  function _0x11a5b9() {
    var _0x52ee5a = {
      x: _0x156bea.x * _0x40c434,
      y: _0x156bea.y * _0x40c434,
      z: _0x156bea.z * _0x40c434
    };
    if (_0x59ad87 != 0) {
      _0x5bfedb(_0x59ad87, _0x52ee5a.x, _0x52ee5a.y, _0x52ee5a.z);
    }
    if (_0x2ff6db != 0 && typeof GravitySensor === "undefined") {
      var _0x2e539e = _0x30b769(_0x38ef6b, _0x52ee5a);
      _0x5bfedb(_0x2ff6db, _0x2e539e.x, _0x2e539e.y, _0x2e539e.z);
    }
  }
  var _0x492d49 = 0;
  var _0x22ede3 = 0;
  function _0xbc3332(_0x4f8259, _0x261a7d) {
    _0x2e4095();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x23863f();
      if (_0x4f8259 != 0) {
        _0x59ad87 = _0x4f8259;
      }
      return;
    }
    if (_0x4f8259 != 0) {
      _0x59ad87 = _0x4f8259;
    }
    function _0x367137(_0x582e76) {
      _0x156bea = new LinearAccelerationSensor({
        frequency: _0x582e76,
        referenceFrame: "device"
      });
      _0x156bea.addEventListener("reading", _0x11a5b9);
      _0x156bea.addEventListener("error", function (_0x33766b) {
        _0x111cca(_0x33766b.error ? _0x33766b.error : _0x33766b);
      });
      _0x156bea.start();
      _0x22ede3 = _0x582e76;
    }
    if (_0x156bea) {
      if (_0x22ede3 != _0x261a7d) {
        _0x156bea.stop();
        _0x156bea.removeEventListener("reading", _0x11a5b9);
        _0x367137(_0x261a7d);
      }
    } else if (_0x492d49 != 0) {
      _0x492d49 = _0x261a7d;
    } else {
      _0x492d49 = _0x261a7d;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x191b8c) {
        if (_0x191b8c.state === "granted") {
          _0x367137(_0x492d49);
        } else {
          _0x111cca("No permission to use LinearAccelerationSensor.");
        }
        _0x492d49 = 0;
      });
    }
  }
  function _0x236a95(_0x4a18b5, _0x53570c) {
    if (typeof GravitySensor === "undefined") {
      _0x50f90a(0, Math.max(_0x53570c, _0x177bc4));
      _0xbc3332(0, Math.max(_0x53570c, _0x22ede3));
      _0x2ff6db = _0x4a18b5;
      return;
    }
    _0x2e4095();
    _0x2ff6db = _0x4a18b5;
    function _0x461333(_0x34965f) {
      _0x157dc5 = new GravitySensor({
        frequency: _0x34965f,
        referenceFrame: "device"
      });
      _0x157dc5.addEventListener("reading", _0x43ede7);
      _0x157dc5.addEventListener("error", function (_0x25eb5a) {
        _0x111cca(_0x25eb5a.error ? _0x25eb5a.error : _0x25eb5a);
      });
      _0x157dc5.start();
    }
    if (_0x157dc5) {
      _0x157dc5.stop();
      _0x157dc5.removeEventListener("reading", _0x43ede7);
      _0x461333(_0x53570c);
    } else if (_0x385ff6 != 0) {
      _0x385ff6 = _0x53570c;
    } else {
      _0x385ff6 = _0x53570c;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0xac6278) {
        if (_0xac6278.state === "granted") {
          _0x461333(_0x385ff6);
        } else {
          _0x111cca("No permission to use GravitySensor.");
        }
        _0x385ff6 = 0;
      });
    }
  }
  function _0x153a3c() {
    if (_0x156bea) {
      if (typeof GravitySensor !== "undefined" || _0x2ff6db == 0) {
        _0x156bea.stop();
        _0x156bea.removeEventListener("reading", _0x11a5b9);
        _0x156bea = null;
      }
      _0x59ad87 = 0;
      _0x22ede3 = 0;
    } else if (_0x59ad87 != 0) {
      _0x59ad87 = 0;
      _0x42fe64();
    }
  }
  function _0x183cd8() {
    _0x2ff6db = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x452e93 == 0) {
        _0x4f3b8f();
      }
      if (_0x59ad87 == 0) {
        _0x153a3c();
      }
      return;
    }
    if (_0x157dc5) {
      _0x157dc5.stop();
      _0x157dc5.removeEventListener("reading", _0x43ede7);
      _0x157dc5 = null;
    }
  }
  function _0x32ccac(_0x12406b) {
    try {
      (function () {
        _0x55af51.call(null, _0x12406b);
      })();
    } catch (_0x31e5b5) {
      console.warn(_0x31e5b5);
    }
  }
  var _0x49ad7 = null;
  function _0xb7947d() {
    return _0x49ad7 && _0x49ad7.activated || _0x9ebe2b != 0;
  }
  function _0xb77e2c() {
    if (_0x9ebe2b != 0) {
      _0x5bfedb(_0x9ebe2b, _0x49ad7.x, _0x49ad7.y, _0x49ad7.z);
    }
  }
  var _0x49787c = 0;
  function _0x2805f1(_0x20ce66, _0x2fb92d) {
    if (typeof Gyroscope === "undefined") {
      _0x23863f();
      _0x9ebe2b = _0x20ce66;
      return;
    }
    _0x9ebe2b = _0x20ce66;
    function _0x2a939f(_0x4681f7) {
      _0x49ad7 = new Gyroscope({
        frequency: _0x4681f7,
        referenceFrame: "device"
      });
      _0x49ad7.addEventListener("reading", _0xb77e2c);
      _0x49ad7.addEventListener("error", function (_0x2f5581) {
        _0x111cca(_0x2f5581.error ? _0x2f5581.error : _0x2f5581);
      });
      _0x49ad7.start();
    }
    if (_0x49ad7) {
      _0x49ad7.stop();
      _0x49ad7.removeEventListener("reading", _0xb77e2c);
      _0x2a939f(_0x2fb92d);
    } else if (_0x49787c != 0) {
      _0x49787c = _0x2fb92d;
    } else {
      _0x49787c = _0x2fb92d;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x318963) {
        if (_0x318963.state === "granted") {
          _0x2a939f(_0x49787c);
        } else {
          _0x111cca("No permission to use Gyroscope.");
        }
        _0x49787c = 0;
      });
    }
  }
  function _0x4b1569() {
    if (_0x49ad7) {
      _0x49ad7.stop();
      _0x49ad7.removeEventListener("reading", _0xb77e2c);
      _0x49ad7 = null;
      _0x9ebe2b = 0;
    } else if (_0x9ebe2b != 0) {
      _0x9ebe2b = 0;
      _0x42fe64();
    }
  }
  function _0x592560() {
    const _0x520cd4 = function (_0x3dd9f9) {
      if (_0x3dd9f9.target.localName !== "canvas") {
        _0x264d62();
      }
    };
    document.addEventListener("contextmenu", _0x520cd4);
    _0xc94e0.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x520cd4);
    });
  }
  function _0x48ba14() {
    return _0x156bea && _0x156bea.activated || _0x59ad87 != 0;
  }
  function _0x3b32e3(_0x22bb6d, _0x14efaa) {
    var _0x1896ce = _0x21e34e(_0x22bb6d);
    if (typeof dump == "function") {
      dump(_0x1896ce);
    }
    switch (_0x14efaa) {
      case 0:
      case 1:
      case 4:
        console.error(_0x1896ce);
        return;
      case 2:
        console.warn(_0x1896ce);
        return;
      case 3:
      case 5:
        console.log(_0x1896ce);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x1896ce);
    }
  }
  function _0x22ab0b(_0x211cf4, _0x19a01b) {
    var _0x27e41a = _0x2008cc();
    if (_0x211cf4) {
      _0x331149(_0x27e41a, _0x211cf4, _0x19a01b);
    }
    return _0x356cec(_0x27e41a);
  }
  var _0x57b112 = null;
  var _0x4443e0 = 0;
  function _0x3aa4ad() {
    return _0x57b112 && _0x57b112.activated || _0x4443e0 != 0;
  }
  function _0x4797cc() {
    if (_0x4443e0 != 0) {
      _0x130336(_0x4443e0, _0x57b112.quaternion[0], _0x57b112.quaternion[1], _0x57b112.quaternion[2], _0x57b112.quaternion[3]);
    }
  }
  var _0x15cbef = 0;
  function _0x15344c(_0x3c4cf9) {
    if (_0x4443e0) {
      var _0x2a626e = Math.PI / 180;
      var _0x3fba45 = _0x3c4cf9.beta * _0x2a626e;
      var _0x110ddb = _0x3c4cf9.gamma * _0x2a626e;
      var _0x2a88e9 = _0x3c4cf9.alpha * _0x2a626e;
      var _0x3b6635 = Math.cos(_0x3fba45 / 2);
      var _0x3c85dc = Math.sin(_0x3fba45 / 2);
      var _0x564f69 = Math.cos(_0x110ddb / 2);
      var _0x14b51c = Math.sin(_0x110ddb / 2);
      var _0x2a5693 = Math.cos(_0x2a88e9 / 2);
      var _0x426004 = Math.sin(_0x2a88e9 / 2);
      var _0x514668 = _0x3c85dc * _0x564f69 * _0x2a5693 - _0x3b6635 * _0x14b51c * _0x426004;
      var _0x39f525 = _0x3b6635 * _0x14b51c * _0x2a5693 + _0x3c85dc * _0x564f69 * _0x426004;
      var _0x4e4abd = _0x3b6635 * _0x564f69 * _0x426004 + _0x3c85dc * _0x14b51c * _0x2a5693;
      var _0x192723 = _0x3b6635 * _0x564f69 * _0x2a5693 - _0x3c85dc * _0x14b51c * _0x426004;
      _0x130336(_0x4443e0, _0x514668, _0x39f525, _0x4e4abd, _0x192723);
    }
  }
  function _0x2c42e8(_0x16efe8, _0x15a51d) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x4443e0 == 0) {
        _0x4443e0 = _0x16efe8;
        _0x4f1330(1);
        window.addEventListener("deviceorientation", _0x15344c);
      }
      return;
    }
    _0x4443e0 = _0x16efe8;
    function _0x14140e(_0x33d0b4) {
      _0x57b112 = new RelativeOrientationSensor({
        frequency: _0x33d0b4,
        referenceFrame: "device"
      });
      _0x57b112.addEventListener("reading", _0x4797cc);
      _0x57b112.addEventListener("error", function (_0x1c8c86) {
        _0x111cca(_0x1c8c86.error ? _0x1c8c86.error : _0x1c8c86);
      });
      _0x57b112.start();
    }
    if (_0x57b112) {
      _0x57b112.stop();
      _0x57b112.removeEventListener("reading", _0x4797cc);
      _0x14140e(_0x15a51d);
    } else if (_0x15cbef != 0) {
      _0x15cbef = _0x15a51d;
    } else {
      _0x15cbef = _0x15a51d;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x52f494) {
        if (_0x52f494.every(function (_0x4bddff) {
          return _0x4bddff.state === "granted";
        })) {
          _0x14140e(_0x15cbef);
        } else {
          _0x111cca("No permissions to use RelativeOrientationSensor.");
        }
        _0x15cbef = 0;
      });
    }
  }
  function _0x5bd0f4() {
    if (_0x57b112) {
      _0x57b112.stop();
      _0x57b112.removeEventListener("reading", _0x4797cc);
      _0x57b112 = null;
    } else if (_0x4443e0 != 0) {
      window.removeEventListener("deviceorientation", _0x15344c);
    }
    _0x4443e0 = 0;
  }
  function _0x3a6713() {
    if (_0x4bc9a4 == 0) {
      return;
    }
    _0x4f1330(_0x4bc9a4);
  }
  function _0x49cbf2() {
    _0xc94e0.QuitCleanup();
  }
  var _0x39b01e = 0;
  function _0x4e180e() {
    if (_0x39b01e) {
      _0x1159bc(_0x39b01e, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0xa1a89b() {
    _0x39b01e = 0;
    window.removeEventListener("resize", _0x4e180e);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x4e180e);
    }
  }
  function _0x12461c(_0x2ada6b) {
    if (!_0x39b01e) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x4e180e);
      }
      window.addEventListener("resize", _0x4e180e);
      _0x39b01e = _0x2ada6b;
      setTimeout(_0x4e180e, 0);
    }
  }
  var _0x21c890 = -1;
  var _0x3a49d2 = -1;
  var _0x19a399 = -1;
  function _0x14a6ed(_0x14f03e) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x5b20d9() {
      _0x3a49d2 = _0x21c890;
      var _0x572934 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x515954 = _0x572934[_0x3a49d2];
      screen.orientation.lock(_0x515954).then(function () {
        if (_0x21c890 != _0x3a49d2) {
          _0x19a399 = setTimeout(_0x5b20d9, 0);
        } else {
          _0x19a399 = -1;
        }
      }).catch(function (_0x17f2af) {
        _0x111cca(_0x17f2af);
        _0x19a399 = -1;
      });
    }
    _0x21c890 = _0x14f03e;
    if (_0x19a399 == -1 && _0x14f03e != _0x3a49d2) {
      _0x19a399 = setTimeout(_0x5b20d9, 0);
    }
  }
  var _0x59180e = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x2d19eb(_0x35689a) {
    _0x35689a.estimatePlaybackPosition = function () {
      var _0x5b6b26 = (_0x59180e.audioContext.currentTime - _0x35689a.playbackStartTime) * _0x35689a.playbackRate.value;
      if (_0x35689a.loop && _0x5b6b26 >= _0x35689a.loopStart) {
        _0x5b6b26 = (_0x5b6b26 - _0x35689a.loopStart) % (_0x35689a.loopEnd - _0x35689a.loopStart) + _0x35689a.loopStart;
      }
      return _0x5b6b26;
    };
    _0x35689a.setPitch = function (_0x273d97) {
      var _0x347152 = _0x35689a.estimatePlaybackPosition();
      if (_0x347152 >= 0) {
        _0x35689a.playbackStartTime = _0x59180e.audioContext.currentTime - _0x347152 / _0x273d97;
      }
      if (_0x35689a.playbackRate.value !== _0x273d97) {
        _0x35689a.playbackRate.value = _0x273d97;
      }
    };
  }
  function _0x8efa45(_0x56abb8, _0x11c9b5) {
    var _0x2ceccd = {
      buffer: _0x56abb8,
      error: _0x11c9b5
    };
    _0x2ceccd.release = function () {};
    _0x2ceccd.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x20f85f = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x20f85f;
    };
    _0x2ceccd.getData = function (_0x2f2149, _0x358d6d) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x43dc2b = _0x2f2149 >> 2;
      var _0x221977 = _0x29a541.subarray(_0x43dc2b, _0x43dc2b + (_0x358d6d >> 2));
      var _0x1f8d02 = Math.floor((_0x358d6d >> 2) / this.buffer.numberOfChannels);
      var _0x2c9f79 = Math.min(this.buffer.length, _0x1f8d02);
      for (var _0x663898 = 0; _0x663898 < this.buffer.numberOfChannels; _0x663898++) {
        var _0x2d731e = this.buffer.getChannelData(_0x663898).subarray(0, _0x2c9f79);
        _0x221977.set(_0x2d731e, _0x663898 * _0x2c9f79);
      }
      return _0x2c9f79 * this.buffer.numberOfChannels * 4;
    };
    _0x2ceccd.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x2ceccd.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x2ceccd.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x39bc21 = _0x59180e.audioContext.createBufferSource();
      _0x39bc21.buffer = this.buffer;
      _0x2d19eb(_0x39bc21);
      return _0x39bc21;
    };
    return _0x2ceccd;
  }
  function _0x4aec31(_0x29ded2, _0x4e246f) {
    var _0x229f5a = {
      callback: _0x29ded2,
      userData: _0x4e246f,
      source: null,
      gain: _0x59180e.audioContext.createGain(),
      panner: _0x59180e.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x229f5a.panner.rolloffFactor = 0;
    _0x229f5a.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x229f5a.playSoundClip = function (_0x3dee74, _0x21bb51, _0x2da980) {
      try {
        var _0x45abc5 = this;
        this.source = _0x3dee74.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x45abc5.source.isStopped = true;
          _0x45abc5.disconnectSource();
          if (_0x45abc5.callback) {
            _0xd5d2c7("vi", _0x45abc5.callback, [_0x45abc5.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x21bb51, _0x2da980);
        this.source.playbackStartTime = _0x21bb51 - _0x2da980 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x266397) {
        console.error("Channel.playSoundClip error. Exception: " + _0x266397);
      }
    };
    _0x229f5a.stop = function (_0x13508e) {
      if (!this.source) {
        return;
      }
      try {
        _0x229f5a.source.stop(_0x59180e.audioContext.currentTime + _0x13508e);
      } catch (_0x37b685) {}
      if (_0x13508e == 0) {
        this.disconnectSource();
      }
    };
    _0x229f5a.isPaused = function () {
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
    _0x229f5a.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x1f2793 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x5a97c2) {
          this.playbackRate = _0x5a97c2;
        },
        stop: function (_0x152a63) {
          this.scheduledStopTime = _0x152a63;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x1f2793;
    };
    _0x229f5a.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x216236 = this.source;
      var _0x526e84 = _0x8efa45(_0x216236.buffer, false);
      this.playSoundClip(_0x526e84, _0x59180e.audioContext.currentTime, Math.max(0, _0x216236.playbackPausedAtPosition));
      this.source.loop = _0x216236.loop;
      this.source.loopStart = _0x216236.loopStart;
      this.source.loopEnd = _0x216236.loopEnd;
      this.source.setPitch(_0x216236.playbackRate);
      if (typeof _0x216236.scheduledStopTime !== "undefined") {
        var _0x182a43 = Math.max(_0x216236.scheduledStopTime - _0x59180e.audioContext.currentTime, 0);
        this.stop(_0x182a43);
      }
    };
    _0x229f5a.setLoop = function (_0x11bf61) {
      this.loop = _0x11bf61;
      if (!this.source || this.source.loop == _0x11bf61) {
        return;
      }
      this.source.loop = _0x11bf61;
    };
    _0x229f5a.setLoopPoints = function (_0x27c4d0, _0x4938ce) {
      this.loopStart = _0x27c4d0;
      this.loopEnd = _0x4938ce;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x27c4d0) {
        this.source.loopStart = _0x27c4d0;
      }
      if (this.source.loopEnd !== _0x4938ce) {
        this.source.loopEnd = _0x4938ce;
      }
    };
    _0x229f5a.set3D = function (_0x37c830) {
      if (this.threeD == _0x37c830) {
        return;
      }
      this.threeD = _0x37c830;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x229f5a.setPitch = function (_0x5bcfbf) {
      this.pitch = _0x5bcfbf;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x5bcfbf);
    };
    _0x229f5a.setVolume = function (_0x2d5833) {
      if (this.gain.gain.value == _0x2d5833) {
        return;
      }
      this.gain.gain.value = _0x2d5833;
    };
    _0x229f5a.setPosition = function (_0x52b2f3, _0x139225, _0x14d67b) {
      var _0x1da950 = this.panner;
      if (_0x1da950.positionX) {
        if (_0x1da950.positionX.value !== _0x52b2f3) {
          _0x1da950.positionX.value = _0x52b2f3;
        }
        if (_0x1da950.positionY.value !== _0x139225) {
          _0x1da950.positionY.value = _0x139225;
        }
        if (_0x1da950.positionZ.value !== _0x14d67b) {
          _0x1da950.positionZ.value = _0x14d67b;
        }
      } else if (_0x1da950._x !== _0x52b2f3 || _0x1da950._y !== _0x139225 || _0x1da950._z !== _0x14d67b) {
        _0x1da950.setPosition(_0x52b2f3, _0x139225, _0x14d67b);
        _0x1da950._x = _0x52b2f3;
        _0x1da950._y = _0x139225;
        _0x1da950._z = _0x14d67b;
      }
    };
    _0x229f5a.disconnectSource = function () {
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
    _0x229f5a.setupPanning = function () {
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
      this.gain.connect(_0x59180e.audioContext.destination);
    };
    _0x229f5a.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x229f5a;
  }
  function _0x302219(_0x1fb34f, _0x2ffa77) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    _0x59180e.audioInstances[++_0x59180e.audioInstanceIdCounter] = _0x4aec31(_0x1fb34f, _0x2ffa77);
    return _0x59180e.audioInstanceIdCounter;
  }
  function _0x5b1f57(_0x177b7f) {
    if (_0x59180e.audioWebEnabled == 0) {
      return 0;
    }
    var _0x24568b = _0x59180e.audioInstances[_0x177b7f];
    if (!_0x24568b) {
      return 0;
    }
    return _0x24568b.getLength();
  }
  function _0x581ead(_0x3892ac) {
    if (_0x59180e.audioWebEnabled == 0) {
      return 2;
    }
    var _0x4e28ad = _0x59180e.audioInstances[_0x3892ac];
    if (_0x4e28ad.error) {
      return 2;
    }
    if (_0x4e28ad.buffer || _0x4e28ad.url) {
      return 0;
    }
    return 1;
  }
  function _0x57e819(_0x1a2d7e) {
    var _0x45b453 = _0x59180e.pendingAudioSources[_0x1a2d7e];
    _0x45b453.sourceNode._startPlayback(_0x45b453.offset);
    delete _0x59180e.pendingAudioSources[_0x1a2d7e];
  }
  function _0xd0482f() {
    Object.keys(_0x59180e.pendingAudioSources).forEach(function (_0x51fb65) {
      _0x57e819(_0x51fb65);
    });
  }
  function _0x82e95f() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x59180e.audioContext = new AudioContext();
      var _0x251987 = function () {
        if (_0x59180e.audioContext.state === "suspended") {
          _0x59180e.audioContext.resume().catch(function (_0x5c203f) {
            console.warn("Could not resume audio context. Exception: " + _0x5c203f);
          });
        } else {
          _0xc94e0.clearInterval(_0x496e44);
        }
      };
      var _0x496e44 = _0xc94e0.setInterval(_0x251987, 400);
      _0x59180e.audioWebEnabled = 1;
      var _0x32c5b7 = function () {
        try {
          if (_0x59180e.audioContext.state !== "running" && _0x59180e.audioContext.state !== "closed") {
            _0x59180e.audioContext.resume().catch(function (_0x4656ea) {
              console.warn("Could not resume audio context. Exception: " + _0x4656ea);
            });
          }
          _0xd0482f();
          var _0x3cd1ae = 20;
          while (_0x59180e.audioCache.length < _0x3cd1ae) {
            var _0x38e370 = new Audio();
            _0x38e370.autoplay = false;
            _0x59180e.audioCache.push(_0x38e370);
          }
        } catch (_0x37fd7c) {}
      };
      window.addEventListener("mousedown", _0x32c5b7);
      window.addEventListener("touchstart", _0x32c5b7);
      _0xc94e0.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x32c5b7);
        window.removeEventListener("touchstart", _0x32c5b7);
      });
    } catch (_0x454109) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x13bb07(_0x5e682f) {
    var _0x134f5d = _0x8efa45(null, false);
    _0x59180e.audioContext.decodeAudioData(_0x5e682f, function (_0x4a0227) {
      _0x134f5d.buffer = _0x4a0227;
    }, function (_0x390ead) {
      _0x134f5d.error = true;
      console.log("Decode error: " + _0x390ead);
    });
    return _0x134f5d;
  }
  function _0x186ef5(_0x4ddc4c, _0x13a65b) {
    _0x59180e.pendingAudioSources[_0x4ddc4c.mediaElement.src] = {
      sourceNode: _0x4ddc4c,
      offset: _0x13a65b
    };
  }
  function _0x2f53e8(_0xc5f53f) {
    switch (_0xc5f53f) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x565123(_0x1c82a7, _0x586a36) {
    var _0xcaf4e6 = _0x2f53e8(_0x586a36);
    var _0x3ff308 = new Blob([_0x1c82a7], {
      type: _0xcaf4e6
    });
    var _0x2aa5ea = {
      url: URL.createObjectURL(_0x3ff308),
      error: false,
      mediaElement: new Audio()
    };
    _0x2aa5ea.mediaElement.preload = "metadata";
    _0x2aa5ea.mediaElement.src = _0x2aa5ea.url;
    _0x2aa5ea.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x2aa5ea.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x2aa5ea.getData = function (_0x36703d, _0x26963b) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x2aa5ea.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x2aa5ea.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x2aa5ea.createSourceNode = function () {
      var _0x5d79f1 = this;
      var _0x20be07 = _0x59180e.audioCache.length ? _0x59180e.audioCache.pop() : new Audio();
      _0x20be07.preload = "metadata";
      _0x20be07.src = this.url;
      var _0x57e0d7 = _0x59180e.audioContext.createMediaElementSource(_0x20be07);
      Object.defineProperty(_0x57e0d7, "loop", {
        get: function () {
          return _0x57e0d7.mediaElement.loop;
        },
        set: function (_0x278015) {
          if (_0x57e0d7.mediaElement.loop !== _0x278015) {
            _0x57e0d7.mediaElement.loop = _0x278015;
          }
        }
      });
      _0x57e0d7.playbackRate = {};
      Object.defineProperty(_0x57e0d7.playbackRate, "value", {
        get: function () {
          return _0x57e0d7.mediaElement.playbackRate;
        },
        set: function (_0x1fb1a4) {
          if (_0x57e0d7.mediaElement.playbackRate !== _0x1fb1a4) {
            _0x57e0d7.mediaElement.playbackRate = _0x1fb1a4;
          }
        }
      });
      Object.defineProperty(_0x57e0d7, "currentTime", {
        get: function () {
          return _0x57e0d7.mediaElement.currentTime;
        },
        set: function (_0x316735) {
          if (_0x57e0d7.mediaElement.currentTime !== _0x316735) {
            _0x57e0d7.mediaElement.currentTime = _0x316735;
          }
        }
      });
      Object.defineProperty(_0x57e0d7, "mute", {
        get: function () {
          return _0x57e0d7.mediaElement.mute;
        },
        set: function (_0x5ac45b) {
          if (_0x57e0d7.mediaElement.mute !== _0x5ac45b) {
            _0x57e0d7.mediaElement.mute = _0x5ac45b;
          }
        }
      });
      Object.defineProperty(_0x57e0d7, "onended", {
        get: function () {
          return _0x57e0d7.mediaElement.onended;
        },
        set: function (_0x397377) {
          _0x57e0d7.mediaElement.onended = _0x397377;
        }
      });
      _0x57e0d7.playPromise = null;
      _0x57e0d7.playTimeout = null;
      _0x57e0d7.pauseRequested = false;
      _0x57e0d7.isStopped = false;
      _0x57e0d7._pauseMediaElement = function () {
        if (_0x57e0d7.playPromise || _0x57e0d7.playTimeout) {
          _0x57e0d7.pauseRequested = true;
        } else {
          _0x57e0d7.mediaElement.pause();
        }
      };
      _0x57e0d7._startPlayback = function (_0x1d93f0) {
        if (_0x57e0d7.playPromise || _0x57e0d7.playTimeout) {
          _0x57e0d7.mediaElement.currentTime = _0x1d93f0;
          _0x57e0d7.pauseRequested = false;
          return;
        }
        _0x57e0d7.mediaElement.currentTime = _0x1d93f0;
        _0x57e0d7.playPromise = _0x57e0d7.mediaElement.play();
        if (_0x57e0d7.playPromise) {
          _0x57e0d7.playPromise.then(function () {
            if (_0x57e0d7.pauseRequested) {
              _0x57e0d7.mediaElement.pause();
              _0x57e0d7.pauseRequested = false;
            }
            _0x57e0d7.playPromise = null;
          }).catch(function (_0x3a68b8) {
            _0x57e0d7.playPromise = null;
            if (_0x3a68b8.name !== "NotAllowedError") {
              throw _0x3a68b8;
            }
            _0x186ef5(_0x57e0d7, _0x1d93f0);
          });
        }
      };
      _0x57e0d7.start = function (_0x2af97a, _0x50b44f) {
        if (typeof _0x2af97a === "undefined") {
          _0x2af97a = _0x59180e.audioContext.currentTime;
        }
        if (typeof _0x50b44f === "undefined") {
          _0x50b44f = 0;
        }
        var _0x10b88b = 4;
        var _0x2f2ecd = (_0x2af97a - _0x59180e.audioContext.currentTime) * 1000;
        if (_0x2f2ecd > _0x10b88b) {
          _0x57e0d7.playTimeout = setTimeout(function () {
            _0x57e0d7.playTimeout = null;
            _0x57e0d7._startPlayback(_0x50b44f);
          }, _0x2f2ecd);
        } else {
          _0x57e0d7._startPlayback(_0x50b44f);
        }
      };
      _0x57e0d7.stop = function (_0x180519) {
        if (typeof _0x180519 === "undefined") {
          _0x180519 = _0x59180e.audioContext.currentTime;
        }
        var _0x10a2a8 = 4;
        var _0xc0dd84 = (_0x180519 - _0x59180e.audioContext.currentTime) * 1000;
        if (_0xc0dd84 > _0x10a2a8) {
          setTimeout(function () {
            _0x57e0d7._pauseMediaElement();
            _0x57e0d7.isStopped = true;
          }, _0xc0dd84);
        } else {
          _0x57e0d7._pauseMediaElement();
          _0x57e0d7.isStopped = true;
        }
      };
      _0x2d19eb(_0x57e0d7);
      return _0x57e0d7;
    };
    return _0x2aa5ea;
  }
  function _0x563a6e(_0xe6d8ce, _0x5e5c26, _0x419651, _0x17d9ba) {
    if (_0x59180e.audioWebEnabled == 0) {
      return 0;
    }
    var _0x506a81 = _0xb76fd2.buffer.slice(_0xe6d8ce, _0xe6d8ce + _0x5e5c26);
    if (_0x5e5c26 < 131072) {
      _0x419651 = 1;
    }
    var _0x115b81;
    if (_0x419651) {
      _0x115b81 = _0x13bb07(_0x506a81);
    } else {
      _0x115b81 = _0x565123(_0x506a81, _0x17d9ba);
    }
    _0x59180e.audioInstances[++_0x59180e.audioInstanceIdCounter] = _0x115b81;
    return _0x59180e.audioInstanceIdCounter;
  }
  function _0x25cd34(_0x19663f, _0x214f89, _0x226d21, _0xc19969) {
    var _0x1314e7 = _0x59180e.audioContext.createBuffer(_0x19663f, _0x214f89, _0x226d21);
    for (var _0x4ca836 = 0; _0x4ca836 < _0x19663f; _0x4ca836++) {
      var _0x7445e1 = (_0xc19969 >> 2) + _0x214f89 * _0x4ca836;
      var _0xd45599 = _0x1314e7.copyToChannel || function (_0x3bdc76, _0x3409f7, _0x21f7f3) {
        var _0x3b71d9 = _0x3bdc76.subarray(0, Math.min(_0x3bdc76.length, this.length - (_0x21f7f3 | 0)));
        this.getChannelData(_0x3409f7 | 0).set(_0x3b71d9, _0x21f7f3 | 0);
      };
      _0xd45599.apply(_0x1314e7, [_0x29a541.subarray(_0x7445e1, _0x7445e1 + _0x214f89), _0x4ca836, 0]);
    }
    return _0x8efa45(_0x1314e7, false);
  }
  function _0x233d0e(_0x49e784, _0x29942b, _0x17028c, _0x59b60b) {
    if (_0x59180e.audioWebEnabled == 0) {
      return 0;
    }
    var _0x49aa13 = _0x25cd34(_0x49e784, _0x29942b, _0x17028c, _0x59b60b);
    _0x59180e.audioInstances[++_0x59180e.audioInstanceIdCounter] = _0x49aa13;
    return _0x59180e.audioInstanceIdCounter;
  }
  function _0x1f5523(_0x3de9b0, _0x34ca65, _0x5a50c9, _0x5ae13a) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    _0x357a0f(_0x34ca65, 0);
    var _0x5b0b4f = _0x59180e.audioInstances[_0x3de9b0];
    var _0x3e056c = _0x59180e.audioInstances[_0x34ca65];
    if (!_0x5b0b4f) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x3e056c.playSoundClip(_0x5b0b4f, _0x59180e.audioContext.currentTime + _0x5ae13a, _0x5a50c9);
    } catch (_0xfadf69) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x4624ff(_0x428bd3) {
    var _0x3c82c4 = _0x59180e.audioInstances[_0x428bd3];
    if (_0x3c82c4) {
      _0x3c82c4.release();
    }
    delete _0x59180e.audioInstances[_0x428bd3];
  }
  function _0x5b76a9() {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    if (_0x59180e.audioContext.state === "suspended") {
      _0x59180e.audioContext.resume().catch(function (_0x272fb7) {
        console.warn("Could not resume audio context. Exception: " + _0x272fb7);
      });
    }
  }
  function _0x3a97fb(_0x2c07d1, _0x13af30) {
    var _0x54bfcf = _0x59180e.audioInstances[_0x2c07d1];
    _0x54bfcf.set3D(_0x13af30);
  }
  function _0x594ffa(_0x32c3b1, _0x381602, _0x42c8f6, _0x47f433, _0xab51a, _0x4f295b) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    _0x32c3b1 = -_0x32c3b1;
    _0x381602 = -_0x381602;
    _0x42c8f6 = -_0x42c8f6;
    var _0x479378 = _0x59180e.audioContext.listener;
    if (_0x479378.forwardX) {
      if (_0x479378.forwardX.value !== _0x32c3b1) {
        _0x479378.forwardX.value = _0x32c3b1;
      }
      if (_0x479378.forwardY.value !== _0x381602) {
        _0x479378.forwardY.value = _0x381602;
      }
      if (_0x479378.forwardZ.value !== _0x42c8f6) {
        _0x479378.forwardZ.value = _0x42c8f6;
      }
      if (_0x479378.upX.value !== _0x47f433) {
        _0x479378.upX.value = _0x47f433;
      }
      if (_0x479378.upY.value !== _0xab51a) {
        _0x479378.upY.value = _0xab51a;
      }
      if (_0x479378.upZ.value !== _0x4f295b) {
        _0x479378.upZ.value = _0x4f295b;
      }
    } else if (_0x479378._forwardX !== _0x32c3b1 || _0x479378._forwardY !== _0x381602 || _0x479378._forwardZ !== _0x42c8f6 || _0x479378._upX !== _0x47f433 || _0x479378._upY !== _0xab51a || _0x479378._upZ !== _0x4f295b) {
      _0x479378.setOrientation(_0x32c3b1, _0x381602, _0x42c8f6, _0x47f433, _0xab51a, _0x4f295b);
      _0x479378._forwardX = _0x32c3b1;
      _0x479378._forwardY = _0x381602;
      _0x479378._forwardZ = _0x42c8f6;
      _0x479378._upX = _0x47f433;
      _0x479378._upY = _0xab51a;
      _0x479378._upZ = _0x4f295b;
    }
  }
  function _0x54623c(_0x6fbcd7, _0x55a197, _0x1a8c87) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    var _0x93a68d = _0x59180e.audioContext.listener;
    if (_0x93a68d.positionX) {
      if (_0x93a68d.positionX.value !== _0x6fbcd7) {
        _0x93a68d.positionX.value = _0x6fbcd7;
      }
      if (_0x93a68d.positionY.value !== _0x55a197) {
        _0x93a68d.positionY.value = _0x55a197;
      }
      if (_0x93a68d.positionZ.value !== _0x1a8c87) {
        _0x93a68d.positionZ.value = _0x1a8c87;
      }
    } else if (_0x93a68d._positionX !== _0x6fbcd7 || _0x93a68d._positionY !== _0x55a197 || _0x93a68d._positionZ !== _0x1a8c87) {
      _0x93a68d.setPosition(_0x6fbcd7, _0x55a197, _0x1a8c87);
      _0x93a68d._positionX = _0x6fbcd7;
      _0x93a68d._positionY = _0x55a197;
      _0x93a68d._positionZ = _0x1a8c87;
    }
  }
  function _0x109e96(_0x3c918f, _0x17241b) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    var _0x11f748 = _0x59180e.audioInstances[_0x3c918f];
    _0x11f748.setLoop(_0x17241b);
  }
  function _0xa161cb(_0x302f6a, _0x21af35, _0x2b11fd) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    var _0x266a09 = _0x59180e.audioInstances[_0x302f6a];
    _0x266a09.setLoopPoints(_0x21af35, _0x2b11fd);
  }
  function _0x23d7f1(_0x2c090a, _0x4147df) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    var _0x5d904f = _0x59180e.audioInstances[_0x2c090a];
    if (_0x4147df != _0x5d904f.isPaused()) {
      if (_0x4147df) {
        _0x5d904f.pause();
      } else {
        _0x5d904f.resume();
      }
    }
  }
  function _0x25393f(_0xbaae8, _0x1185b5) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x49c4c5 = _0x59180e.audioInstances[_0xbaae8];
      _0x49c4c5.setPitch(_0x1185b5);
    } catch (_0x298a3e) {
      console.error("JS_Sound_SetPitch(channel=" + _0xbaae8 + ", pitch=" + _0x1185b5 + ") threw an exception: " + _0x298a3e);
    }
  }
  function _0x520a71(_0x3b45e0, _0x2b8245, _0x2e53f2, _0x57768f) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    var _0x591267 = _0x59180e.audioInstances[_0x3b45e0];
    _0x591267.setPosition(_0x2b8245, _0x2e53f2, _0x57768f);
  }
  function _0x1f1a1b(_0x928c70, _0x4e5398) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x280611 = _0x59180e.audioInstances[_0x928c70];
      _0x280611.setVolume(_0x4e5398);
    } catch (_0x49036b) {
      console.error("JS_Sound_SetVolume(channel=" + _0x928c70 + ", volume=" + _0x4e5398 + ") threw an exception: " + _0x49036b);
    }
  }
  function _0x357a0f(_0x52e61c, _0x14aa2c) {
    if (_0x59180e.audioWebEnabled == 0) {
      return;
    }
    var _0x2e2771 = _0x59180e.audioInstances[_0x52e61c];
    _0x2e2771.stop(_0x14aa2c);
  }
  function _0x599ae3(_0x1a4c57, _0x43343d, _0x2cc093) {
    var _0x23c89a = _0x21e34e(_0x1a4c57);
    var _0x1d2874 = _0x23c89a == "#canvas" ? _0xc94e0.canvas : document.querySelector(_0x23c89a);
    var _0x561ce1 = 0;
    var _0x45ef9a = 0;
    if (_0x1d2874) {
      var _0x5965ba = _0x1d2874.getBoundingClientRect();
      _0x561ce1 = _0x5965ba.width;
      _0x45ef9a = _0x5965ba.height;
    }
    _0x4cdd16[_0x43343d >> 3] = _0x561ce1;
    _0x4cdd16[_0x2cc093 >> 3] = _0x45ef9a;
  }
  function _0x5f3c77(_0x1d0af4, _0x558c16) {
    if (_0x1d0af4) {
      _0x331149("https://gamea.azgame.io", _0x1d0af4, _0x558c16);
    }
    return _0x356cec("https://gamea.azgame.io");
  }
  function _0x5c67ca(_0x3f7f2b, _0x4f516a) {
    var _0x44f43c = _0xc94e0.SystemInfo.gpu;
    if (_0x3f7f2b) {
      _0x331149(_0x44f43c, _0x3f7f2b, _0x4f516a);
    }
    return _0x356cec(_0x44f43c);
  }
  function _0xdac8ba() {
    return _0xc94e0.matchWebGLToCanvasSize || _0xc94e0.matchWebGLToCanvasSize === undefined;
  }
  function _0x315a61() {
    return _0xb76fd2.length / 1048576;
  }
  function _0x4e96e1(_0xaf1ae, _0x447beb) {
    var _0x5638e9 = _0xc94e0.SystemInfo.os + " " + _0xc94e0.SystemInfo.osVersion;
    if (_0xaf1ae) {
      _0x331149(_0x5638e9, _0xaf1ae, _0x447beb);
    }
    return _0x356cec(_0x5638e9);
  }
  function _0x12fc60() {
    if (_0xc94e0.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0xc94e0.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x435886(_0x3010fa, _0x4bc570) {
    _0x4cdd16[_0x3010fa >> 3] = _0xc94e0.SystemInfo.width;
    _0x4cdd16[_0x4bc570 >> 3] = _0xc94e0.SystemInfo.height;
  }
  function _0x391336(_0x954cd7, _0x3ec18a) {
    if (_0x954cd7) {
      _0x331149(_0xc94e0.streamingAssetsUrl, _0x954cd7, _0x3ec18a);
    }
    return _0x356cec(_0xc94e0.streamingAssetsUrl);
  }
  function _0x57be1c() {
    var _0x3f2970 = _0x3494f0.getExtension("WEBGL_compressed_texture_astc");
    if (_0x3f2970 && _0x3f2970.getSupportedProfiles) {
      return _0x3f2970.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x4a4345() {
    return _0xc94e0.SystemInfo.hasCursorLock;
  }
  function _0x3ec5b9() {
    return _0xc94e0.SystemInfo.hasFullscreen;
  }
  function _0x114b8a() {
    return _0xc94e0.SystemInfo.hasWebGL;
  }
  function _0x39715f() {
    return !!_0xc94e0.shouldQuit;
  }
  var _0x5d2b0c = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x4fb740(_0x293eff) {
    var _0x51b5f4 = _0x5d2b0c.abortControllers[_0x293eff];
    if (!_0x51b5f4 || _0x51b5f4.signal.aborted) {
      return;
    }
    _0x51b5f4.abort();
  }
  function _0x14bd9b(_0x16a894, _0x43e43) {
    var _0x30e8b0 = _0x21e34e(_0x16a894);
    var _0x400737 = _0x21e34e(_0x43e43);
    var _0x5cb2c0 = new AbortController();
    var _0xd4206d = {
      url: _0x30e8b0,
      init: {
        method: _0x400737,
        signal: _0x5cb2c0.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x5d2b0c.abortControllers[_0x5d2b0c.nextRequestId] = _0x5cb2c0;
    _0x5d2b0c.requests[_0x5d2b0c.nextRequestId] = _0xd4206d;
    return _0x5d2b0c.nextRequestId++;
  }
  function _0x22a0be(_0x910084) {
    var _0x24ffd5 = _0x5d2b0c.responses[_0x910084];
    if (!_0x24ffd5) {
      return "";
    }
    if (_0x24ffd5.headerString) {
      return _0x24ffd5.headerString;
    }
    var _0x4d859e = "";
    var _0x549ccd = _0x24ffd5.headers.entries();
    for (var _0x4bf914 = _0x549ccd.next(); !_0x4bf914.done; _0x4bf914 = _0x549ccd.next()) {
      _0x4d859e += _0x4bf914.value[0] + ": " + _0x4bf914.value[1] + "\r\n";
    }
    _0x24ffd5.headerString = _0x4d859e;
    return _0x4d859e;
  }
  function _0x20e46b(_0x5d029b, _0x2a017a, _0x2ee6e2, _0x251cbc, _0x1debd8) {
    var _0x551d9b = _0x5d2b0c.responses[_0x5d029b];
    if (!_0x551d9b) {
      _0x331149("", _0x2a017a, _0x2ee6e2);
      _0x331149("", _0x251cbc, _0x1debd8);
      return;
    }
    if (_0x2a017a) {
      var _0x175a04 = _0x22a0be(_0x5d029b);
      _0x331149(_0x175a04, _0x2a017a, _0x2ee6e2);
    }
    if (_0x251cbc) {
      _0x331149(_0x551d9b.url, _0x251cbc, _0x1debd8);
    }
  }
  function _0x3efe28(_0x516d94, _0xcfb9d0) {
    var _0x6eb86f = _0x5d2b0c.responses[_0x516d94];
    if (!_0x6eb86f) {
      _0x5305b0[_0xcfb9d0 >> 2] = 0;
      _0x5305b0[(_0xcfb9d0 >> 2) + 1] = 0;
      return;
    }
    var _0x2a7400 = _0x22a0be(_0x516d94);
    _0x5305b0[_0xcfb9d0 >> 2] = _0x356cec(_0x2a7400);
    _0x5305b0[(_0xcfb9d0 >> 2) + 1] = _0x356cec(_0x6eb86f.url);
  }
  function _0x4e33dc(_0x12c687) {
    if (_0x5d2b0c.timer[_0x12c687]) {
      clearTimeout(_0x5d2b0c.timer[_0x12c687]);
    }
    delete _0x5d2b0c.requests[_0x12c687];
    delete _0x5d2b0c.responses[_0x12c687];
    delete _0x5d2b0c.abortControllers[_0x12c687];
    delete _0x5d2b0c.timer[_0x12c687];
  }
  function _0x8b7c73(_0x13d077, _0x12b288, _0x1b96ea, _0x111d2a, _0x11f923, _0x576b1a) {
    var _0x374a3f = _0x5d2b0c.requests[_0x13d077];
    var _0x12dea1 = _0x5d2b0c.abortControllers[_0x13d077];
    function _0x483d8a(_0x1df639) {
      if (!_0x374a3f.tempBuffer) {
        const _0x498dd8 = Math.max(_0x1df639, 1024);
        _0x374a3f.tempBuffer = _0x52fe3e(_0x498dd8);
        _0x374a3f.tempBufferSize = _0x498dd8;
      }
      if (_0x374a3f.tempBufferSize < _0x1df639) {
        _0x289376(_0x374a3f.tempBuffer);
        _0x374a3f.tempBuffer = _0x52fe3e(_0x1df639);
        _0x374a3f.tempBufferSize = _0x1df639;
      }
      return _0x374a3f.tempBuffer;
    }
    function _0x59290c() {
      if (_0x5d2b0c.timer[_0x13d077]) {
        clearTimeout(_0x5d2b0c.timer[_0x13d077]);
        delete _0x5d2b0c.timer[_0x13d077];
      }
    }
    function _0xf2559a(_0xd8fbe8, _0x180504) {
      _0x59290c();
      if (!_0x11f923) {
        return;
      }
      var _0x4d6f56 = 0;
      if (_0x374a3f.init.enableStreamingDownload) {
        _0xd5d2c7("viiiiii", _0x11f923, [_0x111d2a, _0xd8fbe8.status, 0, _0x180504.length, 0, _0x4d6f56]);
      } else if (_0x180504.length != 0) {
        var _0x20c1fb = _0x52fe3e(_0x180504.length);
        _0xb76fd2.set(_0x180504, _0x20c1fb);
        _0xd5d2c7("viiiiii", _0x11f923, [_0x111d2a, _0xd8fbe8.status, _0x20c1fb, _0x180504.length, 0, _0x4d6f56]);
      } else {
        _0xd5d2c7("viiiiii", _0x11f923, [_0x111d2a, _0xd8fbe8.status, 0, 0, 0, _0x4d6f56]);
      }
      if (_0x374a3f.tempBuffer) {
        _0x289376(_0x374a3f.tempBuffer);
      }
    }
    function _0x5b6090(_0x498e8b, _0x4634cd) {
      _0x59290c();
      if (!_0x11f923) {
        return;
      }
      var _0x16ad66 = _0x356cec(_0x498e8b) + 1;
      var _0x2b5068 = _0x52fe3e(_0x16ad66);
      _0x331149(_0x498e8b, _0x2b5068, _0x16ad66);
      _0xd5d2c7("viiiiii", _0x11f923, [_0x111d2a, 500, 0, 0, _0x2b5068, _0x4634cd]);
      _0x289376(_0x2b5068);
      if (_0x374a3f.tempBuffer) {
        _0x289376(_0x374a3f.tempBuffer);
      }
    }
    function _0xf292f(_0x45d3e4) {
      if (!_0x576b1a || !_0x45d3e4.lengthComputable) {
        return;
      }
      var _0xdd4290 = _0x45d3e4.response;
      _0x5d2b0c.responses[_0x13d077] = _0xdd4290;
      if (_0x45d3e4.chunk) {
        var _0x3fee3d = _0x483d8a(_0x45d3e4.chunk.length);
        _0xb76fd2.set(_0x45d3e4.chunk, _0x3fee3d);
        _0xd5d2c7("viiiiii", _0x576b1a, [_0x111d2a, _0xdd4290.status, _0x45d3e4.loaded, _0x45d3e4.total, _0x3fee3d, _0x45d3e4.chunk.length]);
      } else {
        _0xd5d2c7("viiiiii", _0x576b1a, [_0x111d2a, _0xdd4290.status, _0x45d3e4.loaded, _0x45d3e4.total, 0, 0]);
      }
    }
    try {
      if (_0x1b96ea > 0) {
        var _0x24f9c1 = _0xb76fd2.subarray(_0x12b288, _0x12b288 + _0x1b96ea);
        _0x374a3f.init.body = new Blob([_0x24f9c1]);
      }
      if (_0x374a3f.timeout) {
        _0x5d2b0c.timer[_0x13d077] = setTimeout(function () {
          _0x374a3f.isTimedOut = true;
          _0x12dea1.abort();
        }, _0x374a3f.timeout);
      }
      var _0xfd5b13 = _0xc94e0.fetchWithProgress;
      _0x374a3f.init.onProgress = _0xf292f;
      if (_0xc94e0.companyName && _0xc94e0.productName && _0xc94e0.cachedFetch) {
        _0xfd5b13 = _0xc94e0.cachedFetch;
        _0x374a3f.init.companyName = _0xc94e0.companyName;
        _0x374a3f.init.productName = _0xc94e0.productName;
        _0x374a3f.control = _0xc94e0.cacheControl(_0x374a3f.url);
      }
      _0xfd5b13(_0x374a3f.url, _0x374a3f.init).then(function (_0x50d485) {
        _0x5d2b0c.responses[_0x13d077] = _0x50d485;
        _0xf2559a(_0x50d485, _0x50d485.parsedBody);
      }).catch(function (_0x5c1498) {
        var _0x2e6169 = 2;
        var _0x2f8c55 = 17;
        var _0x2e6ee7 = 14;
        if (_0x374a3f.isTimedOut) {
          _0x5b6090("Connection timed out.", _0x2e6ee7);
        } else if (_0x12dea1.signal.aborted) {
          _0x5b6090("Aborted.", _0x2f8c55);
        } else {
          _0x5b6090(_0x5c1498.message, _0x2e6169);
        }
      });
    } catch (_0x1ab550) {
      var _0x7b33d1 = 2;
      _0x5b6090(_0x1ab550.message, _0x7b33d1);
    }
  }
  function _0x50ff2e(_0x4075ac, _0x233708) {
    var _0x44ec21 = _0x5d2b0c.requests[_0x4075ac];
    if (!_0x44ec21) {
      return;
    }
    _0x44ec21.init.redirect = _0x233708 === 0 ? "error" : "follow";
  }
  function _0x2b8a2e(_0x18bd71, _0x35b8d7, _0x2fccf6) {
    var _0x4bb488 = _0x5d2b0c.requests[_0x18bd71];
    if (!_0x4bb488) {
      return;
    }
    var _0x5dcb75 = _0x21e34e(_0x35b8d7);
    var _0x1d5ed5 = _0x21e34e(_0x2fccf6);
    _0x4bb488.init.headers[_0x5dcb75] = _0x1d5ed5;
  }
  function _0x492ed0(_0x496de7, _0x1396eb) {
    var _0x2c851d = _0x5d2b0c.requests[_0x496de7];
    if (!_0x2c851d) {
      return;
    }
    _0x2c851d.timeout = _0x1396eb;
  }
  function _0x5d0cb3(_0x41db23, _0x2f2ee9, _0x5dbb37, _0xd32f6c) {
    var _0x44b72a = _0x21e34e(_0x41db23);
    var _0x50d7c7 = _0x21e34e(_0x2f2ee9);
    var _0x2c34e1 = _0x21e34e(_0x5dbb37);
    var _0x5ea598 = _0x21e34e(_0xd32f6c);
    try {
      firebase.database().ref(_0x44b72a).on("child_added", function (_0x5d929a) {
        window.unityInstance.SendMessage(_0x50d7c7, _0x2c34e1, JSON.stringify(_0x5d929a.val()));
      });
    } catch (_0x288105) {
      window.unityInstance.SendMessage(_0x50d7c7, _0x5ea598, JSON.stringify(_0x288105, Object.getOwnPropertyNames(_0x288105)));
    }
  }
  function _0x4ad685(_0x3e8007, _0x51942e, _0x55638e, _0x16dcbd) {
    var _0x17489b = _0x21e34e(_0x3e8007);
    var _0x4ad495 = _0x21e34e(_0x51942e);
    var _0x5d9d2f = _0x21e34e(_0x55638e);
    var _0xccde13 = _0x21e34e(_0x16dcbd);
    try {
      firebase.database().ref(_0x17489b).on("child_changed", function (_0x578151) {
        window.unityInstance.SendMessage(_0x4ad495, _0x5d9d2f, JSON.stringify(_0x578151.val()));
      });
    } catch (_0x1bdce9) {
      window.unityInstance.SendMessage(_0x4ad495, _0xccde13, JSON.stringify(_0x1bdce9, Object.getOwnPropertyNames(_0x1bdce9)));
    }
  }
  function _0x55cecd(_0x2b4934, _0x3741e5, _0x177e08, _0x2c6ef7) {
    var _0x11eeda = _0x21e34e(_0x2b4934);
    var _0x31b4e7 = _0x21e34e(_0x3741e5);
    var _0x1c4bb0 = _0x21e34e(_0x177e08);
    var _0x57d107 = _0x21e34e(_0x2c6ef7);
    try {
      firebase.database().ref(_0x11eeda).on("child_removed", function (_0x293858) {
        window.unityInstance.SendMessage(_0x31b4e7, _0x1c4bb0, JSON.stringify(_0x293858.val()));
      });
    } catch (_0x56c394) {
      window.unityInstance.SendMessage(_0x31b4e7, _0x57d107, JSON.stringify(_0x56c394, Object.getOwnPropertyNames(_0x56c394)));
    }
  }
  function _0x4e2a49(_0x16e919, _0x10a017, _0x1cc13d, _0x515735, _0x2264ad) {
    var _0x46be0b = _0x21e34e(_0x16e919);
    var _0x5f0dca = _0x21e34e(_0x1cc13d);
    var _0x4eb51f = _0x21e34e(_0x515735);
    var _0x16aea0 = _0x21e34e(_0x2264ad);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x46be0b + "/collection/"] = firebase.firestore().collection(_0x46be0b).onSnapshot({
        includeMetadataChanges: _0x10a017 == 1
      }, function (_0x2c8353) {
        var _0x400ce1 = {};
        _0x2c8353.forEach(function (_0x1a76a5) {
          _0x400ce1[_0x1a76a5.id] = _0x1a76a5.data();
        });
        window.unityInstance.SendMessage(_0x5f0dca, _0x4eb51f, JSON.stringify(_0x400ce1));
      }, function (_0x151a4d) {
        window.unityInstance.SendMessage(_0x5f0dca, _0x16aea0, JSON.stringify(_0x151a4d, Object.getOwnPropertyNames(_0x151a4d)));
      });
    } catch (_0x3db9f5) {
      window.unityInstance.SendMessage(_0x5f0dca, _0x16aea0, JSON.stringify(_0x3db9f5, Object.getOwnPropertyNames(_0x3db9f5)));
    }
  }
  function _0x56c067(_0x2db1b8, _0x368523, _0x3ed2e5, _0x4f7df2, _0x797fc4, _0x4a3cfa) {
    var _0x4b7b66 = _0x21e34e(_0x2db1b8);
    var _0x747af7 = _0x21e34e(_0x368523);
    var _0x3fa68c = _0x21e34e(_0x4f7df2);
    var _0x190ad1 = _0x21e34e(_0x797fc4);
    var _0x20cfb8 = _0x21e34e(_0x4a3cfa);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x4b7b66 + "/" + _0x747af7] = firebase.firestore().collection(_0x4b7b66).doc(_0x747af7).onSnapshot({
        includeMetadataChanges: _0x3ed2e5 == 1
      }, function (_0x13671e) {
        window.unityInstance.SendMessage(_0x3fa68c, _0x190ad1, JSON.stringify(_0x13671e.data()));
      }, function (_0x167e56) {
        window.unityInstance.SendMessage(_0x3fa68c, _0x20cfb8, JSON.stringify(_0x167e56, Object.getOwnPropertyNames(_0x167e56)));
      });
    } catch (_0x5008f4) {
      window.unityInstance.SendMessage(_0x3fa68c, _0x20cfb8, JSON.stringify(_0x5008f4, Object.getOwnPropertyNames(_0x5008f4)));
    }
  }
  function _0xeb3380(_0xf85a78, _0x2ef729, _0x41b1fe, _0x3b8ec4) {
    var _0x4e3248 = _0x21e34e(_0xf85a78);
    var _0x54d740 = _0x21e34e(_0x2ef729);
    var _0x4bea71 = _0x21e34e(_0x41b1fe);
    var _0x19a813 = _0x21e34e(_0x3b8ec4);
    try {
      firebase.database().ref(_0x4e3248).on("value", function (_0x1c5551) {
        window.unityInstance.SendMessage(_0x54d740, _0x4bea71, JSON.stringify(_0x1c5551.val()));
      });
    } catch (_0x1d0d6e) {
      window.unityInstance.SendMessage(_0x54d740, _0x19a813, JSON.stringify(_0x1d0d6e, Object.getOwnPropertyNames(_0x1d0d6e)));
    }
  }
  function _0x38d0be(_0x112e2e) {
    var _0x4d223a = _0x21e34e(_0x112e2e);
    firebaseLogEvent(_0x4d223a);
  }
  function _0x14c3c0(_0x57f34a, _0x2ea90c) {
    var _0x35123e = _0x21e34e(_0x57f34a);
    var _0xffcdc2 = JSON.parse(_0x21e34e(_0x2ea90c));
    firebaseLogEventParameter(_0x35123e, _0xffcdc2);
  }
  function _0x341602(_0x565eab, _0x5a58ce, _0x155d11, _0x1245bf, _0x4d7c77) {
    var _0x28ca3b = _0x21e34e(_0x565eab);
    var _0x6b19e3 = _0x21e34e(_0x155d11);
    var _0x4c2557 = _0x21e34e(_0x1245bf);
    var _0x18575f = _0x21e34e(_0x4d7c77);
    try {
      firebase.database().ref(_0x28ca3b).transaction(function (_0x3e5bf6) {
        if (!isNaN(_0x3e5bf6)) {
          return _0x3e5bf6 + _0x5a58ce;
        } else {
          return _0x5a58ce;
        }
      }).then(function (_0x3d708d) {
        window.unityInstance.SendMessage(_0x6b19e3, _0x4c2557, "Success: transaction run in " + _0x28ca3b);
      });
    } catch (_0x45bfca) {
      window.unityInstance.SendMessage(_0x6b19e3, _0x18575f, JSON.stringify(_0x45bfca, Object.getOwnPropertyNames(_0x45bfca)));
    }
  }
  function _0x1f367b(_0x5f1b40, _0x24d68b, _0x2c2fa1) {
    var _0x4f78ea = _0x21e34e(_0x5f1b40);
    var _0x5d0140 = _0x21e34e(_0x24d68b);
    var _0x222888 = _0x21e34e(_0x2c2fa1);
    firebase.auth().onAuthStateChanged(function (_0x2db291) {
      if (_0x2db291) {
        window.unityInstance.SendMessage(_0x4f78ea, _0x5d0140, JSON.stringify(_0x2db291));
      } else {
        window.unityInstance.SendMessage(_0x4f78ea, _0x222888, "User signed out");
      }
    });
  }
  function _0x4105bb(_0x459af0) {
    _0x459af0 = _0x558c48(_0x459af0);
    window.open(_0x459af0, "_blank");
  }
  function _0x5833d0(_0x5acee0) {
    window.wgUnityInstance = _0xc94e0;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x5acee0);
    } catch (_0xabaaec) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x538b0a = document.createElement("script");
      _0x538b0a.addEventListener("load", function (_0x3c0653) {
        var _0xebd44f = document.createElement("script");
        _0xebd44f.addEventListener("load", function (_0x2d4ed8) {
          console.log("WGSDK: Development resources loaded.");
          _0x21574b(_0x5acee0, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0xebd44f);
        _0xebd44f.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x538b0a);
      _0x538b0a.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x21574b(_0x575c01, _0x26bea7) {
    var _0x39c28c;
    if (_0x26bea7 === true) {
      _0x39c28c = _0x575c01;
    } else {
      _0x39c28c = _0x21e34e(_0x575c01);
    }
    setTimeout(function () {
      _0x5833d0(_0x39c28c);
    }, 250);
  }
  function _0x3d4834(_0x333cfd, _0x441c34, _0x3eb920, _0x196e3e, _0x126f84) {
    var _0x5c4ed0 = _0x21e34e(_0x333cfd);
    var _0x5ecafa = _0x21e34e(_0x441c34);
    var _0x10f2b2 = _0x21e34e(_0x3eb920);
    var _0x19218d = _0x21e34e(_0x196e3e);
    var _0x59dde0 = _0x21e34e(_0x126f84);
    try {
      firebase.database().ref(_0x5c4ed0).set(JSON.parse(_0x5ecafa)).then(function (_0x3b39d6) {
        window.unityInstance.SendMessage(_0x10f2b2, _0x19218d, "Success: " + _0x5ecafa + " was posted to " + _0x5c4ed0);
      });
    } catch (_0x4b434c) {
      window.unityInstance.SendMessage(_0x10f2b2, _0x59dde0, JSON.stringify(_0x4b434c, Object.getOwnPropertyNames(_0x4b434c)));
    }
  }
  function _0x33597f(_0x43ab07, _0x3d540a, _0x2127d4, _0x499658, _0x18a825) {
    var _0x40d76c = _0x21e34e(_0x43ab07);
    var _0x53f854 = _0x21e34e(_0x3d540a);
    var _0x5903d0 = _0x21e34e(_0x2127d4);
    var _0x2aed41 = _0x21e34e(_0x499658);
    var _0x453378 = _0x21e34e(_0x18a825);
    try {
      firebase.database().ref(_0x40d76c).push().set(JSON.parse(_0x53f854)).then(function (_0xcb3ea2) {
        window.unityInstance.SendMessage(_0x5903d0, _0x2aed41, "Success: " + _0x53f854 + " was pushed to " + _0x40d76c);
      });
    } catch (_0xefa53a) {
      window.unityInstance.SendMessage(_0x5903d0, _0x453378, JSON.stringify(_0xefa53a, Object.getOwnPropertyNames(_0xefa53a)));
    }
  }
  function _0x506c89(_0x545ef6, _0x5cc078) {
    var _0x1eeda1 = true;
    var _0x2a41df = _0x558c48(_0x545ef6);
    var _0xf29e90 = _0x558c48(_0x5cc078);
    var _0x213476 = _0x2a41df.split("|");
    for (var _0x4d2ef5 = 0; _0x4d2ef5 < _0x213476.length; _0x4d2ef5++) {
      var _0x2e07c5 = _0x213476[_0x4d2ef5];
      if (document.location.host == _0x2e07c5) {
        _0x1eeda1 = false;
      }
    }
    if (_0x1eeda1) {
      document.location = _0xf29e90;
      return true;
    }
    return false;
  }
  function _0x4eb1c3() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x15ddf3) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x3474b6() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0xc94e0);
    } catch (_0xec73f6) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x3474b6();
      }, 250);
    }
  }
  function _0x153100() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x2014db) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x1e9ef7();
    }
  }
  function _0x1e9ef7() {
    setTimeout(function () {
      _0x153100();
    }, 250);
  }
  function _0x1b7a0e(_0x299a21, _0x668049, _0x453f50, _0x3897d4, _0x36d8b3, _0x4df592, _0x5cf32e) {
    var _0xb100b = _0x21e34e(_0x299a21);
    var _0x2f9868 = _0x21e34e(_0x668049);
    var _0x35d4d3 = _0x21e34e(_0x453f50);
    var _0x5b9c37 = _0x21e34e(_0x3897d4);
    var _0x522290 = _0x21e34e(_0x36d8b3);
    var _0x1d5989 = _0x21e34e(_0x4df592);
    var _0x3e95c0 = _0x21e34e(_0x5cf32e);
    try {
      var _0x3897d4 = {};
      _0x3897d4[_0x35d4d3] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x5b9c37));
      firebase.firestore().collection(_0xb100b).doc(_0x2f9868).update(_0x3897d4).then(function () {
        window.unityInstance.SendMessage(_0x522290, _0x1d5989, "Success: element " + _0x5b9c37 + " was removed in " + _0x35d4d3);
      }).catch(function (_0x365aae) {
        window.unityInstance.SendMessage(_0x522290, _0x3e95c0, JSON.stringify(_0x365aae, Object.getOwnPropertyNames(_0x365aae)));
      });
    } catch (_0x21f92d) {
      window.unityInstance.SendMessage(_0x522290, _0x3e95c0, JSON.stringify(_0x21f92d, Object.getOwnPropertyNames(_0x21f92d)));
    }
  }
  function _0x3e74d1(_0x55757e) {
    var _0x4ce362 = window.unityStringify(_0x55757e);
    var _0x101839 = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x522612("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x522612("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0x5506f6) {
        _0x522612("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x5506f6));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x4ce362, _0x101839).catch(function (_0x208242) {
      window.UnitySDK.logError("Error while requesting ad:", _0x208242);
      _0x522612("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x208242.message || "Unknown error"
      }));
    });
  }
  function _0x55d654(_0x2ef0c6) {
    var _0x275e46 = JSON.parse(window.unityStringify(_0x2ef0c6));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x275e46, function (_0x24604c, _0x421bf7, _0x5bc2c7) {});
    } catch (_0x589bd4) {
      window.UnitySDK.logError("Error while requesting banners:", _0x589bd4);
    }
  }
  function _0x4a1269(_0x69e142) {
    var _0x3c8807 = JSON.parse(window.unityStringify(_0x69e142));
    var _0x590650 = "";
    try {
      _0x590650 = window.CrazyGames.SDK.game.inviteLink(_0x3c8807);
    } catch (_0x3ae4d0) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x3ae4d0);
    }
    var _0x4996e1 = _0x356cec(_0x590650) + 1;
    var _0x1f6440 = _0x52fe3e(_0x4996e1);
    _0x331149(_0x590650, _0x1f6440, _0x4996e1);
    return _0x1f6440;
  }
  function _0x50b7ec(_0x5f56ca) {
    _0x5f56ca = _0x21e34e(_0x5f56ca);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x5f56ca,
      onEvent: function (_0x12135c) {
        switch (_0x12135c.name) {
          case "SDK_GAME_START":
            _0x522612("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x522612("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x522612("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x522612("GameDistribution", "EventCallback", _0x12135c.name);
        }
      }
    };
    (function (_0xad2c66, _0x326c67, _0x1f310e) {
      var _0x39f89d;
      var _0x14bbfc = _0xad2c66.getElementsByTagName(_0x326c67)[0];
      if (_0xad2c66.getElementById(_0x1f310e)) {
        return;
      }
      _0x39f89d = _0xad2c66.createElement(_0x326c67);
      _0x39f89d.id = _0x1f310e;
      _0x39f89d.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x14bbfc.parentNode.insertBefore(_0x39f89d, _0x14bbfc);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x35ab4() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x5d4b97) {
        _0x522612("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x184d3e) {
        _0x522612("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x335dd2(_0x3d2145) {
    _0x3d2145 = _0x21e34e(_0x3d2145);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x3d2145 !== "undefined") {
      gdsdk.sendEvent(_0x3d2145).then(function (_0x2abcc5) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x2127b0) {
        console.log(_0x2127b0.message);
      });
    }
  }
  function _0x40a923(_0x46f375) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x46f375 = _0x21e34e(_0x46f375) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x46f375).then(function (_0x9c9abe) {
        if (_0x46f375 === gdsdk.AdType.Rewarded) {
          _0x522612("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x353f8c) {
        if (_0x46f375 === gdsdk.AdType.Rewarded) {
          _0x522612("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x3aff3e(_0xd1d038, _0x3e27e6, _0xdda04f, _0x1141de, _0x2536e6, _0x3721fd) {
    var _0x20ac85 = _0x21e34e(_0xd1d038);
    var _0x2400c4 = _0x21e34e(_0x3e27e6);
    var _0x479dca = _0x21e34e(_0xdda04f);
    var _0x192c33 = _0x21e34e(_0x1141de);
    var _0x30887c = _0x21e34e(_0x2536e6);
    var _0x135bda = _0x21e34e(_0x3721fd);
    try {
      firebase.firestore().collection(_0x20ac85).doc(_0x2400c4).set(JSON.parse(_0x479dca)).then(function () {
        window.unityInstance.SendMessage(_0x192c33, _0x30887c, "Success: document " + _0x2400c4 + " was set");
      }).catch(function (_0x5b1388) {
        window.unityInstance.SendMessage(_0x192c33, _0x135bda, JSON.stringify(_0x5b1388, Object.getOwnPropertyNames(_0x5b1388)));
      });
    } catch (_0x37dd3e) {
      window.unityInstance.SendMessage(_0x192c33, _0x135bda, JSON.stringify(_0x37dd3e, Object.getOwnPropertyNames(_0x37dd3e)));
    }
  }
  function _0x5d56fc(_0x5b5082) {
    var _0x4736b7 = JSON.parse(_0x21e34e(_0x5b5082));
    firebaseSetUserProperties(_0x4736b7);
  }
  function _0x3d8c51() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x1e6fe1) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x1e6fe1)
      }));
    }).catch(function (_0x3b8c39) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x3b8c39)
      }));
    });
  }
  function _0x1321fc() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x3750e8) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x3750e8)
      }));
    }).catch(function (_0x1043bf) {
      _0x522612("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x1043bf)
      }));
    });
  }
  function _0x1fe7e3(_0x3d9c40) {
    var _0x37ba9d = JSON.parse(window.unityStringify(_0x3d9c40));
    var _0x33a730 = "";
    try {
      _0x33a730 = window.CrazyGames.SDK.game.showInviteButton(_0x37ba9d);
    } catch (_0x2b66dd) {
      window.UnitySDK.logError("Error while showing invite button:", _0x2b66dd);
    }
    var _0x1375ef = _0x356cec(_0x33a730) + 1;
    var _0x1f42d9 = _0x52fe3e(_0x1375ef);
    _0x331149(_0x33a730, _0x1f42d9, _0x1375ef);
    return _0x1f42d9;
  }
  function _0x1b440b() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x30ea3e(_0x36f19d, _0x346e1e, _0x26a886) {
    var _0x14de9c = _0x21e34e(_0x36f19d);
    var _0x31b69a = _0x21e34e(_0x346e1e);
    var _0x379a0b = _0x21e34e(_0x26a886);
    try {
      firebase.auth().signInAnonymously().then(function (_0x1f94da) {
        window.unityInstance.SendMessage(_0x14de9c, _0x31b69a, "Success: signed up for " + _0x1f94da);
      }).catch(function (_0x71b9ae) {
        window.unityInstance.SendMessage(_0x14de9c, _0x379a0b, JSON.stringify(_0x71b9ae, Object.getOwnPropertyNames(_0x71b9ae)));
      });
    } catch (_0x3664bb) {
      window.unityInstance.SendMessage(_0x14de9c, _0x379a0b, JSON.stringify(_0x3664bb, Object.getOwnPropertyNames(_0x3664bb)));
    }
  }
  function _0x3ab367(_0x2b2d50, _0x40f3a6, _0x37eb51, _0x296cbe, _0x8cd493) {
    var _0x2f5193 = _0x21e34e(_0x2b2d50);
    var _0x5954ea = _0x21e34e(_0x40f3a6);
    var _0x5a340a = _0x21e34e(_0x37eb51);
    var _0x157d49 = _0x21e34e(_0x296cbe);
    var _0x5e5ecf = _0x21e34e(_0x8cd493);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x2f5193, _0x5954ea).then(function (_0x224c59) {
        window.unityInstance.SendMessage(_0x5a340a, _0x157d49, "Success: signed in for " + _0x2f5193);
      }).catch(function (_0xcd69b6) {
        window.unityInstance.SendMessage(_0x5a340a, _0x5e5ecf, JSON.stringify(_0xcd69b6, Object.getOwnPropertyNames(_0xcd69b6)));
      });
    } catch (_0x29fc1b) {
      window.unityInstance.SendMessage(_0x5a340a, _0x5e5ecf, JSON.stringify(_0x29fc1b, Object.getOwnPropertyNames(_0x29fc1b)));
    }
  }
  function _0x3425f4(_0x1fb921, _0x32ef24, _0x4bc4b4) {
    var _0x579a70 = _0x21e34e(_0x1fb921);
    var _0x824122 = _0x21e34e(_0x32ef24);
    var _0x202921 = _0x21e34e(_0x4bc4b4);
    try {
      var _0x538be8 = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x538be8).then(function (_0x5cfbfc) {
        window.unityInstance.SendMessage(_0x579a70, _0x824122, "Success: signed in with Facebook!");
      }).catch(function (_0x1dee45) {
        window.unityInstance.SendMessage(_0x579a70, _0x202921, JSON.stringify(_0x1dee45, Object.getOwnPropertyNames(_0x1dee45)));
      });
    } catch (_0x44130d) {
      window.unityInstance.SendMessage(_0x579a70, _0x202921, JSON.stringify(_0x44130d, Object.getOwnPropertyNames(_0x44130d)));
    }
  }
  function _0x256c31(_0x12e0c3, _0x592f52, _0xd28b69) {
    var _0x1f0076 = _0x21e34e(_0x12e0c3);
    var _0x521d79 = _0x21e34e(_0x592f52);
    var _0x167155 = _0x21e34e(_0xd28b69);
    try {
      var _0x71bfd2 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x71bfd2).then(function (_0xa37e75) {
        window.unityInstance.SendMessage(_0x1f0076, _0x521d79, "Success: signed in with Google!");
      }).catch(function (_0x4f4b6b) {
        window.unityInstance.SendMessage(_0x1f0076, _0x167155, JSON.stringify(_0x4f4b6b, Object.getOwnPropertyNames(_0x4f4b6b)));
      });
    } catch (_0x47ebcb) {
      window.unityInstance.SendMessage(_0x1f0076, _0x167155, JSON.stringify(_0x47ebcb, Object.getOwnPropertyNames(_0x47ebcb)));
    }
  }
  function _0x4b5f11(_0x3aa332, _0x4d8de6, _0x5204d2, _0x1c1180) {
    var _0x21edae = _0x21e34e(_0x3aa332);
    var _0x36790b = _0x21e34e(_0x4d8de6);
    var _0x744f63 = _0x21e34e(_0x5204d2);
    var _0x2feade = _0x21e34e(_0x1c1180);
    try {
      firebase.database().ref(_0x21edae).off("child_added");
      window.unityInstance.SendMessage(_0x36790b, _0x744f63, "Success: listener removed");
    } catch (_0x21f6e5) {
      window.unityInstance.SendMessage(_0x36790b, _0x2feade, JSON.stringify(_0x21f6e5, Object.getOwnPropertyNames(_0x21f6e5)));
    }
  }
  function _0x3a4cb7(_0x1353b3, _0x5e249c, _0x30bb0, _0x4c3daf) {
    var _0x24186d = _0x21e34e(_0x1353b3);
    var _0xd60638 = _0x21e34e(_0x5e249c);
    var _0x538cb2 = _0x21e34e(_0x30bb0);
    var _0x14babd = _0x21e34e(_0x4c3daf);
    try {
      firebase.database().ref(_0x24186d).off("child_changed");
      window.unityInstance.SendMessage(_0xd60638, _0x538cb2, "Success: listener removed");
    } catch (_0x389f23) {
      window.unityInstance.SendMessage(_0xd60638, _0x14babd, JSON.stringify(_0x389f23, Object.getOwnPropertyNames(_0x389f23)));
    }
  }
  function _0xf87778(_0x1f4c17, _0x116fd2, _0x41ae17, _0x44af49) {
    var _0x2ca693 = _0x21e34e(_0x1f4c17);
    var _0x844eb3 = _0x21e34e(_0x116fd2);
    var _0x497a90 = _0x21e34e(_0x41ae17);
    var _0x1023a5 = _0x21e34e(_0x44af49);
    try {
      firebase.database().ref(_0x2ca693).off("child_removed");
      window.unityInstance.SendMessage(_0x844eb3, _0x497a90, "Success: listener removed");
    } catch (_0x4ae4e0) {
      window.unityInstance.SendMessage(_0x844eb3, _0x1023a5, JSON.stringify(_0x4ae4e0, Object.getOwnPropertyNames(_0x4ae4e0)));
    }
  }
  function _0x1d9eb4(_0x5ce3f7, _0x7220d8, _0x76a04, _0x57cdcd) {
    var _0x4bf024 = _0x21e34e(_0x5ce3f7);
    var _0x298b3b = _0x21e34e(_0x7220d8);
    var _0x36a78f = _0x21e34e(_0x76a04);
    var _0x4b0687 = _0x21e34e(_0x57cdcd);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x4bf024 + "/collection/"]();
      window.unityInstance.SendMessage(_0x298b3b, _0x36a78f, "Success: listener was removed");
    } catch (_0x3a8cb7) {
      window.unityInstance.SendMessage(_0x298b3b, _0x4b0687, JSON.stringify(_0x3a8cb7, Object.getOwnPropertyNames(_0x3a8cb7)));
    }
  }
  function _0x42dd4d(_0x2c8358, _0x5b331f, _0x1e0604, _0x227cb9, _0x58a83a) {
    var _0x2c6a06 = _0x21e34e(_0x2c8358);
    var _0xd2f3a0 = _0x21e34e(_0x5b331f);
    var _0x1012f9 = _0x21e34e(_0x1e0604);
    var _0x4acfb8 = _0x21e34e(_0x227cb9);
    var _0x47e1dd = _0x21e34e(_0x58a83a);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2c6a06 + "/" + _0xd2f3a0]();
      window.unityInstance.SendMessage(_0x1012f9, _0x4acfb8, "Success: listener was removed");
    } catch (_0x209bbe) {
      window.unityInstance.SendMessage(_0x1012f9, _0x47e1dd, JSON.stringify(_0x209bbe, Object.getOwnPropertyNames(_0x209bbe)));
    }
  }
  function _0x58fa08(_0x3ee774, _0x323a80, _0xa10fcc, _0x4d92f7) {
    var _0x3e355f = _0x21e34e(_0x3ee774);
    var _0x477db3 = _0x21e34e(_0x323a80);
    var _0x4f3141 = _0x21e34e(_0xa10fcc);
    var _0x4c1524 = _0x21e34e(_0x4d92f7);
    try {
      firebase.database().ref(_0x3e355f).off("value");
      window.unityInstance.SendMessage(_0x477db3, _0x4f3141, "Success: listener removed");
    } catch (_0x16f9ef) {
      window.unityInstance.SendMessage(_0x477db3, _0x4c1524, JSON.stringify(_0x16f9ef, Object.getOwnPropertyNames(_0x16f9ef)));
    }
  }
  function _0x22b1a6() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x5d1681) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x5d1681);
    }
  }
  function _0x5c0a06(_0x5614fb, _0x487248, _0x2ecd37, _0x2465ac) {
    var _0xdca94b = _0x21e34e(_0x5614fb);
    var _0x19e6ce = _0x21e34e(_0x487248);
    var _0x230ae8 = _0x21e34e(_0x2ecd37);
    var _0xfc687c = _0x21e34e(_0x2465ac);
    try {
      firebase.database().ref(_0xdca94b).transaction(function (_0x391d8b) {
        if (typeof _0x391d8b === "boolean") {
          return !_0x391d8b;
        } else {
          return true;
        }
      }).then(function (_0x31a35c) {
        window.unityInstance.SendMessage(_0x19e6ce, _0x230ae8, "Success: transaction run in " + _0xdca94b);
      });
    } catch (_0x31159d) {
      window.unityInstance.SendMessage(_0x19e6ce, _0xfc687c, JSON.stringify(_0x31159d, Object.getOwnPropertyNames(_0x31159d)));
    }
  }
  function _0x1df64a(_0x1a9fef, _0x460174, _0x5a216e, _0x383c8d, _0x19dc08, _0x1774b1) {
    var _0x5dc34c = _0x21e34e(_0x1a9fef);
    var _0x576302 = _0x21e34e(_0x460174);
    var _0x4fad6f = _0x21e34e(_0x5a216e);
    var _0x1891ff = _0x21e34e(_0x383c8d);
    var _0x21a759 = _0x21e34e(_0x19dc08);
    var _0x497303 = _0x21e34e(_0x1774b1);
    try {
      firebase.firestore().collection(_0x5dc34c).doc(_0x576302).update(JSON.parse(_0x4fad6f)).then(function () {
        window.unityInstance.SendMessage(_0x1891ff, _0x21a759, "Success: document " + _0x576302 + " was updated");
      }).catch(function (_0x337820) {
        window.unityInstance.SendMessage(_0x1891ff, _0x497303, JSON.stringify(_0x337820, Object.getOwnPropertyNames(_0x337820)));
      });
    } catch (_0x51c408) {
      window.unityInstance.SendMessage(_0x1891ff, _0x497303, JSON.stringify(_0x51c408, Object.getOwnPropertyNames(_0x51c408)));
    }
  }
  function _0x177026(_0x589fac, _0x4fa1ce, _0x1c2410, _0x12d0bf, _0x39cba4) {
    var _0x507572 = _0x21e34e(_0x589fac);
    var _0x5ccb15 = _0x21e34e(_0x4fa1ce);
    var _0x37a29c = _0x21e34e(_0x1c2410);
    var _0x1b0a78 = _0x21e34e(_0x12d0bf);
    var _0x147a09 = _0x21e34e(_0x39cba4);
    try {
      firebase.database().ref(_0x507572).update(JSON.parse(_0x5ccb15)).then(function (_0x254401) {
        window.unityInstance.SendMessage(_0x37a29c, _0x1b0a78, "Success: " + _0x5ccb15 + " was updated in " + _0x507572);
      });
    } catch (_0x44234f) {
      window.unityInstance.SendMessage(_0x37a29c, _0x147a09, JSON.stringify(_0x44234f, Object.getOwnPropertyNames(_0x44234f)));
    }
  }
  function _0x6f1f5d(_0x387902, _0x5e37c8, _0x19f065, _0x39faa6, _0x20a82c) {
    var _0x38799c = _0x21e34e(_0x387902);
    var _0x273b1b = _0x21e34e(_0x5e37c8);
    var _0x22b7c0 = _0x21e34e(_0x19f065);
    var _0x51b020 = _0x21e34e(_0x39faa6);
    var _0x10bd8b = _0x21e34e(_0x20a82c);
    try {
      firebase.storage().ref(_0x38799c).put(_0xde227e(_0x273b1b)).then(function (_0x588eec) {
        window.unityInstance.SendMessage(_0x22b7c0, _0x51b020, "Success: data was posted to " + _0x38799c);
      });
    } catch (_0x153530) {
      window.unityInstance.SendMessage(_0x22b7c0, _0x10bd8b, JSON.stringify(_0x153530, Object.getOwnPropertyNames(_0x153530)));
    }
    function _0xde227e(_0x23b6a6) {
      var _0x1417cb = window.atob(_0x23b6a6);
      var _0x3c4615 = _0x1417cb.length;
      var _0x4138c2 = new Uint8Array(_0x3c4615);
      for (var _0xffa82a = 0; _0xffa82a < _0x3c4615; _0xffa82a++) {
        _0x4138c2[_0xffa82a] = _0x1417cb.charCodeAt(_0xffa82a);
      }
      return _0x4138c2.buffer;
    }
  }
  var _0x3ee928 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x53e007(_0x4efc13) {
    return _0x52fe3e(_0x4efc13 + _0x3ee928.SIZE) + _0x3ee928.SIZE;
  }
  function _0x3d004f(_0x147c64) {
    this.excPtr = _0x147c64;
    this.ptr = _0x147c64 - _0x3ee928.SIZE;
    this.set_type = function (_0x48bb9e) {
      _0x14d31c[this.ptr + _0x3ee928.TYPE_OFFSET >> 2] = _0x48bb9e;
    };
    this.get_type = function () {
      return _0x14d31c[this.ptr + _0x3ee928.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0x1ca982) {
      _0x14d31c[this.ptr + _0x3ee928.DESTRUCTOR_OFFSET >> 2] = _0x1ca982;
    };
    this.get_destructor = function () {
      return _0x14d31c[this.ptr + _0x3ee928.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x1386d5) {
      _0x14d31c[this.ptr + _0x3ee928.REFCOUNT_OFFSET >> 2] = _0x1386d5;
    };
    this.set_caught = function (_0x2a78bd) {
      _0x2a78bd = _0x2a78bd ? 1 : 0;
      _0x133579[this.ptr + _0x3ee928.CAUGHT_OFFSET >> 0] = _0x2a78bd;
    };
    this.get_caught = function () {
      return _0x133579[this.ptr + _0x3ee928.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x3cbeaa) {
      _0x3cbeaa = _0x3cbeaa ? 1 : 0;
      _0x133579[this.ptr + _0x3ee928.RETHROWN_OFFSET >> 0] = _0x3cbeaa;
    };
    this.get_rethrown = function () {
      return _0x133579[this.ptr + _0x3ee928.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x346401, _0x40b42d) {
      this.set_type(_0x346401);
      this.set_destructor(_0x40b42d);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x51cb7a = _0x14d31c[this.ptr + _0x3ee928.REFCOUNT_OFFSET >> 2];
      _0x14d31c[this.ptr + _0x3ee928.REFCOUNT_OFFSET >> 2] = _0x51cb7a + 1;
    };
    this.release_ref = function () {
      var _0xfaea59 = _0x14d31c[this.ptr + _0x3ee928.REFCOUNT_OFFSET >> 2];
      _0x14d31c[this.ptr + _0x3ee928.REFCOUNT_OFFSET >> 2] = _0xfaea59 - 1;
      return _0xfaea59 === 1;
    };
  }
  function _0x2a878a(_0x23aba7) {
    this.free = function () {
      _0x289376(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x1d3b0c) {
      _0x14d31c[this.ptr >> 2] = _0x1d3b0c;
    };
    this.get_base_ptr = function () {
      return _0x14d31c[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x110e71) {
      var _0x13c492 = 4;
      _0x14d31c[this.ptr + _0x13c492 >> 2] = _0x110e71;
    };
    this.get_adjusted_ptr = function () {
      var _0xc1e62c = 4;
      return _0x14d31c[this.ptr + _0xc1e62c >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x322be7 = _0xd41ac4(this.get_exception_info().get_type());
      if (_0x322be7) {
        return _0x14d31c[this.get_base_ptr() >> 2];
      }
      var _0x292de7 = this.get_adjusted_ptr();
      if (_0x292de7 !== 0) {
        return _0x292de7;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x3d004f(this.get_base_ptr());
    };
    if (_0x23aba7 === undefined) {
      this.ptr = _0x52fe3e(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x23aba7;
    }
  }
  var _0x17a46f = [];
  function _0x4b3f1a(_0x5aff06) {
    _0x5aff06.add_ref();
  }
  var _0x2bfca2 = 0;
  function _0x53b67a(_0x1ea3b1) {
    var _0x3d1b6d = new _0x2a878a(_0x1ea3b1);
    var _0x137c1a = _0x3d1b6d.get_exception_info();
    if (!_0x137c1a.get_caught()) {
      _0x137c1a.set_caught(true);
      _0x2bfca2--;
    }
    _0x137c1a.set_rethrown(false);
    _0x17a46f.push(_0x3d1b6d);
    _0x4b3f1a(_0x137c1a);
    return _0x3d1b6d.get_exception_ptr();
  }
  var _0x258285 = 0;
  function _0x33c8d5(_0x520237) {
    return _0x289376(new _0x3d004f(_0x520237).ptr);
  }
  function _0xc0b35f(_0x383520) {
    if (_0x383520.release_ref() && !_0x383520.get_rethrown()) {
      var _0x4b7a15 = _0x383520.get_destructor();
      if (_0x4b7a15) {
        (function (_0x264429) {
          return _0x25d073.apply(null, [_0x4b7a15, _0x264429]);
        })(_0x383520.excPtr);
      }
      _0x33c8d5(_0x383520.excPtr);
    }
  }
  function _0x37040a() {
    _0x3054ad(0);
    var _0xdf8c5e = _0x17a46f.pop();
    _0xc0b35f(_0xdf8c5e.get_exception_info());
    _0xdf8c5e.free();
    _0x258285 = 0;
  }
  function _0x2c6667(_0x167663) {
    var _0x1323eb = new _0x2a878a(_0x167663);
    var _0x148419 = _0x1323eb.get_base_ptr();
    if (!_0x258285) {
      _0x258285 = _0x148419;
    }
    _0x1323eb.free();
    throw _0x148419;
  }
  function _0x195ea6() {
    var _0xcb72a7 = _0x258285;
    if (!_0xcb72a7) {
      _0x2f751d(0);
      return 0;
    }
    var _0x32cf66 = new _0x3d004f(_0xcb72a7);
    var _0x38dc6a = _0x32cf66.get_type();
    var _0x3c616c = new _0x2a878a();
    _0x3c616c.set_base_ptr(_0xcb72a7);
    if (!_0x38dc6a) {
      _0x2f751d(0);
      return _0x3c616c.ptr | 0;
    }
    var _0x3b2ce3 = Array.prototype.slice.call(arguments);
    var _0x2d40d3 = _0x1b881f();
    var _0x208963 = _0x432d16(4);
    _0x14d31c[_0x208963 >> 2] = _0xcb72a7;
    for (var _0x4a44b0 = 0; _0x4a44b0 < _0x3b2ce3.length; _0x4a44b0++) {
      var _0x2efbd3 = _0x3b2ce3[_0x4a44b0];
      if (_0x2efbd3 === 0 || _0x2efbd3 === _0x38dc6a) {
        break;
      }
      if (_0x1e5712(_0x2efbd3, _0x38dc6a, _0x208963)) {
        var _0x19b16f = _0x14d31c[_0x208963 >> 2];
        if (_0xcb72a7 !== _0x19b16f) {
          _0x3c616c.set_adjusted_ptr(_0x19b16f);
        }
        _0x2f751d(_0x2efbd3);
        return _0x3c616c.ptr | 0;
      }
    }
    _0x2351aa(_0x2d40d3);
    _0x2f751d(_0x38dc6a);
    return _0x3c616c.ptr | 0;
  }
  function _0x49636d() {
    var _0x4431d5 = _0x258285;
    if (!_0x4431d5) {
      _0x2f751d(0);
      return 0;
    }
    var _0x48c42e = new _0x3d004f(_0x4431d5);
    var _0xd2a13e = _0x48c42e.get_type();
    var _0xacd9f8 = new _0x2a878a();
    _0xacd9f8.set_base_ptr(_0x4431d5);
    if (!_0xd2a13e) {
      _0x2f751d(0);
      return _0xacd9f8.ptr | 0;
    }
    var _0x248ad2 = Array.prototype.slice.call(arguments);
    var _0x3613a7 = _0x1b881f();
    var _0x25dbc6 = _0x432d16(4);
    _0x14d31c[_0x25dbc6 >> 2] = _0x4431d5;
    for (var _0xaab139 = 0; _0xaab139 < _0x248ad2.length; _0xaab139++) {
      var _0x3d0ba1 = _0x248ad2[_0xaab139];
      if (_0x3d0ba1 === 0 || _0x3d0ba1 === _0xd2a13e) {
        break;
      }
      if (_0x1e5712(_0x3d0ba1, _0xd2a13e, _0x25dbc6)) {
        var _0x148e1d = _0x14d31c[_0x25dbc6 >> 2];
        if (_0x4431d5 !== _0x148e1d) {
          _0xacd9f8.set_adjusted_ptr(_0x148e1d);
        }
        _0x2f751d(_0x3d0ba1);
        return _0xacd9f8.ptr | 0;
      }
    }
    _0x2351aa(_0x3613a7);
    _0x2f751d(_0xd2a13e);
    return _0xacd9f8.ptr | 0;
  }
  function _0x40e63f() {
    var _0x531f6e = _0x258285;
    if (!_0x531f6e) {
      _0x2f751d(0);
      return 0;
    }
    var _0x4705f9 = new _0x3d004f(_0x531f6e);
    var _0x1fa58e = _0x4705f9.get_type();
    var _0x53487a = new _0x2a878a();
    _0x53487a.set_base_ptr(_0x531f6e);
    if (!_0x1fa58e) {
      _0x2f751d(0);
      return _0x53487a.ptr | 0;
    }
    var _0x114529 = Array.prototype.slice.call(arguments);
    var _0x2f5ced = _0x1b881f();
    var _0x2ad2fc = _0x432d16(4);
    _0x14d31c[_0x2ad2fc >> 2] = _0x531f6e;
    for (var _0x512eea = 0; _0x512eea < _0x114529.length; _0x512eea++) {
      var _0x56e06c = _0x114529[_0x512eea];
      if (_0x56e06c === 0 || _0x56e06c === _0x1fa58e) {
        break;
      }
      if (_0x1e5712(_0x56e06c, _0x1fa58e, _0x2ad2fc)) {
        var _0x4d0acc = _0x14d31c[_0x2ad2fc >> 2];
        if (_0x531f6e !== _0x4d0acc) {
          _0x53487a.set_adjusted_ptr(_0x4d0acc);
        }
        _0x2f751d(_0x56e06c);
        return _0x53487a.ptr | 0;
      }
    }
    _0x2351aa(_0x2f5ced);
    _0x2f751d(_0x1fa58e);
    return _0x53487a.ptr | 0;
  }
  function _0x4efc7a() {
    var _0x4d01fc = _0x17a46f.pop();
    if (!_0x4d01fc) {
      _0x44e8b0("no exception to throw");
    }
    var _0x4cb973 = _0x4d01fc.get_exception_info();
    var _0xa3cc61 = _0x4d01fc.get_base_ptr();
    if (!_0x4cb973.get_rethrown()) {
      _0x17a46f.push(_0x4d01fc);
      _0x4cb973.set_rethrown(true);
      _0x4cb973.set_caught(false);
      _0x2bfca2++;
    } else {
      _0x4d01fc.free();
    }
    _0x258285 = _0xa3cc61;
    throw _0xa3cc61;
  }
  function _0x45851f(_0x236281, _0x5caf6a, _0x4e5c5d) {
    var _0x58ac50 = new _0x3d004f(_0x236281);
    _0x58ac50.init(_0x5caf6a, _0x4e5c5d);
    _0x258285 = _0x236281;
    _0x2bfca2++;
    throw _0x236281;
  }
  function _0x442dd8(_0xf4a423, _0x4a0708) {
    var _0xbb5dbf = new Date(_0x14d31c[_0xf4a423 >> 2] * 1000);
    _0x14d31c[_0x4a0708 >> 2] = _0xbb5dbf.getUTCSeconds();
    _0x14d31c[_0x4a0708 + 4 >> 2] = _0xbb5dbf.getUTCMinutes();
    _0x14d31c[_0x4a0708 + 8 >> 2] = _0xbb5dbf.getUTCHours();
    _0x14d31c[_0x4a0708 + 12 >> 2] = _0xbb5dbf.getUTCDate();
    _0x14d31c[_0x4a0708 + 16 >> 2] = _0xbb5dbf.getUTCMonth();
    _0x14d31c[_0x4a0708 + 20 >> 2] = _0xbb5dbf.getUTCFullYear() - 1900;
    _0x14d31c[_0x4a0708 + 24 >> 2] = _0xbb5dbf.getUTCDay();
    _0x14d31c[_0x4a0708 + 36 >> 2] = 0;
    _0x14d31c[_0x4a0708 + 32 >> 2] = 0;
    var _0x394e55 = Date.UTC(_0xbb5dbf.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x42df67 = (_0xbb5dbf.getTime() - _0x394e55) / 86400000 | 0;
    _0x14d31c[_0x4a0708 + 28 >> 2] = _0x42df67;
    if (!_0x442dd8.GMTString) {
      _0x442dd8.GMTString = _0x35bd4b("GMT");
    }
    _0x14d31c[_0x4a0708 + 40 >> 2] = _0x442dd8.GMTString;
    return _0x4a0708;
  }
  function _0x3862ae(_0x51ffc5, _0x484d62) {
    return _0x442dd8(_0x51ffc5, _0x484d62);
  }
  function _0x29bd2b() {
    if (_0x29bd2b.called) {
      return;
    }
    _0x29bd2b.called = true;
    var _0x5198fe = new Date().getFullYear();
    var _0x2b7cfa = new Date(_0x5198fe, 0, 1);
    var _0x426e6a = new Date(_0x5198fe, 6, 1);
    var _0x5c8a0b = _0x2b7cfa.getTimezoneOffset();
    var _0x7047b0 = _0x426e6a.getTimezoneOffset();
    var _0x4ad89f = Math.max(_0x5c8a0b, _0x7047b0);
    _0x14d31c[_0x3090f6() >> 2] = _0x4ad89f * 60;
    _0x14d31c[_0x5854d6() >> 2] = Number(_0x5c8a0b != _0x7047b0);
    function _0x3360a0(_0x3b1b2e) {
      var _0x5c3a19 = _0x3b1b2e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x5c3a19) {
        return _0x5c3a19[1];
      } else {
        return "GMT";
      }
    }
    var _0x12630e = _0x3360a0(_0x2b7cfa);
    var _0x35ba70 = _0x3360a0(_0x426e6a);
    var _0x49b12c = _0x35bd4b(_0x12630e);
    var _0x19c634 = _0x35bd4b(_0x35ba70);
    if (_0x7047b0 < _0x5c8a0b) {
      _0x14d31c[_0x56c63c() >> 2] = _0x49b12c;
      _0x14d31c[_0x56c63c() + 4 >> 2] = _0x19c634;
    } else {
      _0x14d31c[_0x56c63c() >> 2] = _0x19c634;
      _0x14d31c[_0x56c63c() + 4 >> 2] = _0x49b12c;
    }
  }
  function _0xa82151(_0xc23884, _0x45d5df) {
    _0x29bd2b();
    var _0x4c520e = new Date(_0x14d31c[_0xc23884 >> 2] * 1000);
    _0x14d31c[_0x45d5df >> 2] = _0x4c520e.getSeconds();
    _0x14d31c[_0x45d5df + 4 >> 2] = _0x4c520e.getMinutes();
    _0x14d31c[_0x45d5df + 8 >> 2] = _0x4c520e.getHours();
    _0x14d31c[_0x45d5df + 12 >> 2] = _0x4c520e.getDate();
    _0x14d31c[_0x45d5df + 16 >> 2] = _0x4c520e.getMonth();
    _0x14d31c[_0x45d5df + 20 >> 2] = _0x4c520e.getFullYear() - 1900;
    _0x14d31c[_0x45d5df + 24 >> 2] = _0x4c520e.getDay();
    var _0x518905 = new Date(_0x4c520e.getFullYear(), 0, 1);
    var _0x33787c = (_0x4c520e.getTime() - _0x518905.getTime()) / 86400000 | 0;
    _0x14d31c[_0x45d5df + 28 >> 2] = _0x33787c;
    _0x14d31c[_0x45d5df + 36 >> 2] = -(_0x4c520e.getTimezoneOffset() * 60);
    var _0x2a4076 = new Date(_0x4c520e.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x1fa738 = _0x518905.getTimezoneOffset();
    var _0x2ed41a = (_0x2a4076 != _0x1fa738 && _0x4c520e.getTimezoneOffset() == Math.min(_0x1fa738, _0x2a4076)) | 0;
    _0x14d31c[_0x45d5df + 32 >> 2] = _0x2ed41a;
    var _0x95995b = _0x14d31c[_0x56c63c() + (_0x2ed41a ? 4 : 0) >> 2];
    _0x14d31c[_0x45d5df + 40 >> 2] = _0x95995b;
    return _0x45d5df;
  }
  function _0x4c7ea8(_0x5deaad, _0x436172) {
    return _0xa82151(_0x5deaad, _0x436172);
  }
  var _0x1ec70c = {
    splitPath: function (_0x2dab1d) {
      var _0x3f4d4d = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x3f4d4d.exec(_0x2dab1d).slice(1);
    },
    normalizeArray: function (_0x42bece, _0x50f0bf) {
      var _0x5d9e21 = 0;
      for (var _0x303003 = _0x42bece.length - 1; _0x303003 >= 0; _0x303003--) {
        var _0x276409 = _0x42bece[_0x303003];
        if (_0x276409 === ".") {
          _0x42bece.splice(_0x303003, 1);
        } else if (_0x276409 === "..") {
          _0x42bece.splice(_0x303003, 1);
          _0x5d9e21++;
        } else if (_0x5d9e21) {
          _0x42bece.splice(_0x303003, 1);
          _0x5d9e21--;
        }
      }
      if (_0x50f0bf) {
        for (; _0x5d9e21; _0x5d9e21--) {
          _0x42bece.unshift("..");
        }
      }
      return _0x42bece;
    },
    normalize: function (_0x47c3be) {
      var _0x14fff1 = _0x47c3be.charAt(0) === "/";
      var _0x5de629 = _0x47c3be.substr(-1) === "/";
      _0x47c3be = _0x1ec70c.normalizeArray(_0x47c3be.split("/").filter(function (_0x4dd1c0) {
        return !!_0x4dd1c0;
      }), !_0x14fff1).join("/");
      if (!_0x47c3be && !_0x14fff1) {
        _0x47c3be = ".";
      }
      if (_0x47c3be && _0x5de629) {
        _0x47c3be += "/";
      }
      return (_0x14fff1 ? "/" : "") + _0x47c3be;
    },
    dirname: function (_0xb96e7a) {
      var _0xdcecaa = _0x1ec70c.splitPath(_0xb96e7a);
      var _0x1b49ae = _0xdcecaa[0];
      var _0x3073c2 = _0xdcecaa[1];
      if (!_0x1b49ae && !_0x3073c2) {
        return ".";
      }
      _0x3073c2 &&= _0x3073c2.substr(0, _0x3073c2.length - 1);
      return _0x1b49ae + _0x3073c2;
    },
    basename: function (_0x566f63) {
      if (_0x566f63 === "/") {
        return "/";
      }
      _0x566f63 = _0x1ec70c.normalize(_0x566f63);
      _0x566f63 = _0x566f63.replace(/\/$/, "");
      var _0x339fc1 = _0x566f63.lastIndexOf("/");
      if (_0x339fc1 === -1) {
        return _0x566f63;
      }
      return _0x566f63.substr(_0x339fc1 + 1);
    },
    extname: function (_0x2f5312) {
      return _0x1ec70c.splitPath(_0x2f5312)[3];
    },
    join: function () {
      var _0xcfe85d = Array.prototype.slice.call(arguments, 0);
      return _0x1ec70c.normalize(_0xcfe85d.join("/"));
    },
    join2: function (_0x5297b0, _0x1f4e28) {
      return _0x1ec70c.normalize(_0x5297b0 + "/" + _0x1f4e28);
    }
  };
  function _0x399012() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x64806e = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x64806e);
        return _0x64806e[0];
      };
    } else if (_0x50fc22) {
      try {
        var _0x4d6c35 = require("crypto");
        return function () {
          return _0x4d6c35.randomBytes(1)[0];
        };
      } catch (_0x380f56) {}
    }
    return function () {
      _0x44e8b0("randomDevice");
    };
  }
  var _0x35eb8a = {
    resolve: function () {
      var _0x1d1df0 = "";
      var _0xd8ed42 = false;
      for (var _0x40c0cb = arguments.length - 1; _0x40c0cb >= -1 && !_0xd8ed42; _0x40c0cb--) {
        var _0x2b19af = _0x40c0cb >= 0 ? arguments[_0x40c0cb] : _0x1e6cd4.cwd();
        if (typeof _0x2b19af !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x2b19af) {
          return "";
        }
        _0x1d1df0 = _0x2b19af + "/" + _0x1d1df0;
        _0xd8ed42 = _0x2b19af.charAt(0) === "/";
      }
      _0x1d1df0 = _0x1ec70c.normalizeArray(_0x1d1df0.split("/").filter(function (_0x5d5dab) {
        return !!_0x5d5dab;
      }), !_0xd8ed42).join("/");
      return (_0xd8ed42 ? "/" : "") + _0x1d1df0 || ".";
    },
    relative: function (_0x4483be, _0x157b04) {
      _0x4483be = _0x35eb8a.resolve(_0x4483be).substr(1);
      _0x157b04 = _0x35eb8a.resolve(_0x157b04).substr(1);
      function _0x119ebd(_0x4beb15) {
        var _0x21e0ab = 0;
        for (; _0x21e0ab < _0x4beb15.length; _0x21e0ab++) {
          if (_0x4beb15[_0x21e0ab] !== "") {
            break;
          }
        }
        var _0x1272fd = _0x4beb15.length - 1;
        for (; _0x1272fd >= 0; _0x1272fd--) {
          if (_0x4beb15[_0x1272fd] !== "") {
            break;
          }
        }
        if (_0x21e0ab > _0x1272fd) {
          return [];
        }
        return _0x4beb15.slice(_0x21e0ab, _0x1272fd - _0x21e0ab + 1);
      }
      var _0x2e5ca0 = _0x119ebd(_0x4483be.split("/"));
      var _0x25186e = _0x119ebd(_0x157b04.split("/"));
      var _0xaca7e6 = Math.min(_0x2e5ca0.length, _0x25186e.length);
      var _0x313e6b = _0xaca7e6;
      for (var _0x4a19b2 = 0; _0x4a19b2 < _0xaca7e6; _0x4a19b2++) {
        if (_0x2e5ca0[_0x4a19b2] !== _0x25186e[_0x4a19b2]) {
          _0x313e6b = _0x4a19b2;
          break;
        }
      }
      var _0x3831b1 = [];
      for (var _0x4a19b2 = _0x313e6b; _0x4a19b2 < _0x2e5ca0.length; _0x4a19b2++) {
        _0x3831b1.push("..");
      }
      _0x3831b1 = _0x3831b1.concat(_0x25186e.slice(_0x313e6b));
      return _0x3831b1.join("/");
    }
  };
  var _0x394d19 = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x455fb3, _0x214e9b) {
      _0x394d19.ttys[_0x455fb3] = {
        input: [],
        output: [],
        ops: _0x214e9b
      };
      _0x1e6cd4.registerDevice(_0x455fb3, _0x394d19.stream_ops);
    },
    stream_ops: {
      open: function (_0xbb6dea) {
        var _0x5e702f = _0x394d19.ttys[_0xbb6dea.node.rdev];
        if (!_0x5e702f) {
          throw new _0x1e6cd4.ErrnoError(43);
        }
        _0xbb6dea.tty = _0x5e702f;
        _0xbb6dea.seekable = false;
      },
      close: function (_0x3c37cf) {
        _0x3c37cf.tty.ops.flush(_0x3c37cf.tty);
      },
      flush: function (_0x196ae4) {
        _0x196ae4.tty.ops.flush(_0x196ae4.tty);
      },
      read: function (_0x479211, _0x5a53ac, _0x2d27b5, _0x40b7ee, _0x488830) {
        if (!_0x479211.tty || !_0x479211.tty.ops.get_char) {
          throw new _0x1e6cd4.ErrnoError(60);
        }
        var _0x3068e3 = 0;
        for (var _0x5c34b4 = 0; _0x5c34b4 < _0x40b7ee; _0x5c34b4++) {
          var _0x1ec5e9;
          try {
            _0x1ec5e9 = _0x479211.tty.ops.get_char(_0x479211.tty);
          } catch (_0x50f960) {
            throw new _0x1e6cd4.ErrnoError(29);
          }
          if (_0x1ec5e9 === undefined && _0x3068e3 === 0) {
            throw new _0x1e6cd4.ErrnoError(6);
          }
          if (_0x1ec5e9 === null || _0x1ec5e9 === undefined) {
            break;
          }
          _0x3068e3++;
          _0x5a53ac[_0x2d27b5 + _0x5c34b4] = _0x1ec5e9;
        }
        if (_0x3068e3) {
          _0x479211.node.timestamp = Date.now();
        }
        return _0x3068e3;
      },
      write: function (_0x9735b6, _0x410e16, _0x10dce7, _0x5d849c, _0x437ce6) {
        if (!_0x9735b6.tty || !_0x9735b6.tty.ops.put_char) {
          throw new _0x1e6cd4.ErrnoError(60);
        }
        try {
          for (var _0x7898db = 0; _0x7898db < _0x5d849c; _0x7898db++) {
            _0x9735b6.tty.ops.put_char(_0x9735b6.tty, _0x410e16[_0x10dce7 + _0x7898db]);
          }
        } catch (_0x4c98f7) {
          throw new _0x1e6cd4.ErrnoError(29);
        }
        if (_0x5d849c) {
          _0x9735b6.node.timestamp = Date.now();
        }
        return _0x7898db;
      }
    },
    default_tty_ops: {
      get_char: function (_0x1612d3) {
        if (!_0x1612d3.input.length) {
          var _0x39ee12 = null;
          if (_0x50fc22) {
            var _0x37cdfa = 256;
            var _0x4ca863 = Buffer.alloc ? Buffer.alloc(_0x37cdfa) : new Buffer(_0x37cdfa);
            var _0x18c0e5 = 0;
            try {
              _0x18c0e5 = _0x2c0e69.readSync(process.stdin.fd, _0x4ca863, 0, _0x37cdfa, null);
            } catch (_0x38751e) {
              if (_0x38751e.toString().includes("EOF")) {
                _0x18c0e5 = 0;
              } else {
                throw _0x38751e;
              }
            }
            if (_0x18c0e5 > 0) {
              _0x39ee12 = _0x4ca863.slice(0, _0x18c0e5).toString("utf-8");
            } else {
              _0x39ee12 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x39ee12 = window.prompt("Input: ");
            if (_0x39ee12 !== null) {
              _0x39ee12 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x39ee12 = readline();
            if (_0x39ee12 !== null) {
              _0x39ee12 += "\n";
            }
          }
          if (!_0x39ee12) {
            return null;
          }
          _0x1612d3.input = _0x37ad12(_0x39ee12, true);
        }
        return _0x1612d3.input.shift();
      },
      put_char: function (_0x242d2d, _0x3b9080) {
        if (_0x3b9080 === null || _0x3b9080 === 10) {
          _0x25d5db(_0x31b174(_0x242d2d.output, 0));
          _0x242d2d.output = [];
        } else if (_0x3b9080 != 0) {
          _0x242d2d.output.push(_0x3b9080);
        }
      },
      flush: function (_0x37c8b7) {
        if (_0x37c8b7.output && _0x37c8b7.output.length > 0) {
          _0x25d5db(_0x31b174(_0x37c8b7.output, 0));
          _0x37c8b7.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x546090, _0x444584) {
        if (_0x444584 === null || _0x444584 === 10) {
          _0x551fc8(_0x31b174(_0x546090.output, 0));
          _0x546090.output = [];
        } else if (_0x444584 != 0) {
          _0x546090.output.push(_0x444584);
        }
      },
      flush: function (_0x5a6dcc) {
        if (_0x5a6dcc.output && _0x5a6dcc.output.length > 0) {
          _0x551fc8(_0x31b174(_0x5a6dcc.output, 0));
          _0x5a6dcc.output = [];
        }
      }
    }
  };
  function _0xc9421c(_0x347a05) {
    var _0x50e373 = _0x535c27(_0x347a05, 65536);
    var _0x417b96 = _0x52fe3e(_0x50e373);
    while (_0x347a05 < _0x50e373) {
      _0x133579[_0x417b96 + _0x347a05++] = 0;
    }
    return _0x417b96;
  }
  var _0x2be4a0 = {
    ops_table: null,
    mount: function (_0x598676) {
      return _0x2be4a0.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x507e52, _0x33a766, _0x4b0879, _0x182892) {
      if (_0x1e6cd4.isBlkdev(_0x4b0879) || _0x1e6cd4.isFIFO(_0x4b0879)) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      if (!_0x2be4a0.ops_table) {
        _0x2be4a0.ops_table = {
          dir: {
            node: {
              getattr: _0x2be4a0.node_ops.getattr,
              setattr: _0x2be4a0.node_ops.setattr,
              lookup: _0x2be4a0.node_ops.lookup,
              mknod: _0x2be4a0.node_ops.mknod,
              rename: _0x2be4a0.node_ops.rename,
              unlink: _0x2be4a0.node_ops.unlink,
              rmdir: _0x2be4a0.node_ops.rmdir,
              readdir: _0x2be4a0.node_ops.readdir,
              symlink: _0x2be4a0.node_ops.symlink
            },
            stream: {
              llseek: _0x2be4a0.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x2be4a0.node_ops.getattr,
              setattr: _0x2be4a0.node_ops.setattr
            },
            stream: {
              llseek: _0x2be4a0.stream_ops.llseek,
              read: _0x2be4a0.stream_ops.read,
              write: _0x2be4a0.stream_ops.write,
              allocate: _0x2be4a0.stream_ops.allocate,
              mmap: _0x2be4a0.stream_ops.mmap,
              msync: _0x2be4a0.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x2be4a0.node_ops.getattr,
              setattr: _0x2be4a0.node_ops.setattr,
              readlink: _0x2be4a0.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x2be4a0.node_ops.getattr,
              setattr: _0x2be4a0.node_ops.setattr
            },
            stream: _0x1e6cd4.chrdev_stream_ops
          }
        };
      }
      var _0x48c895 = _0x1e6cd4.createNode(_0x507e52, _0x33a766, _0x4b0879, _0x182892);
      if (_0x1e6cd4.isDir(_0x48c895.mode)) {
        _0x48c895.node_ops = _0x2be4a0.ops_table.dir.node;
        _0x48c895.stream_ops = _0x2be4a0.ops_table.dir.stream;
        _0x48c895.contents = {};
      } else if (_0x1e6cd4.isFile(_0x48c895.mode)) {
        _0x48c895.node_ops = _0x2be4a0.ops_table.file.node;
        _0x48c895.stream_ops = _0x2be4a0.ops_table.file.stream;
        _0x48c895.usedBytes = 0;
        _0x48c895.contents = null;
      } else if (_0x1e6cd4.isLink(_0x48c895.mode)) {
        _0x48c895.node_ops = _0x2be4a0.ops_table.link.node;
        _0x48c895.stream_ops = _0x2be4a0.ops_table.link.stream;
      } else if (_0x1e6cd4.isChrdev(_0x48c895.mode)) {
        _0x48c895.node_ops = _0x2be4a0.ops_table.chrdev.node;
        _0x48c895.stream_ops = _0x2be4a0.ops_table.chrdev.stream;
      }
      _0x48c895.timestamp = Date.now();
      if (_0x507e52) {
        _0x507e52.contents[_0x33a766] = _0x48c895;
        _0x507e52.timestamp = _0x48c895.timestamp;
      }
      return _0x48c895;
    },
    getFileDataAsTypedArray: function (_0x352eeb) {
      if (!_0x352eeb.contents) {
        return new Uint8Array(0);
      }
      if (_0x352eeb.contents.subarray) {
        return _0x352eeb.contents.subarray(0, _0x352eeb.usedBytes);
      }
      return new Uint8Array(_0x352eeb.contents);
    },
    expandFileStorage: function (_0x47b4a7, _0x260cec) {
      var _0x1b7628 = _0x47b4a7.contents ? _0x47b4a7.contents.length : 0;
      if (_0x1b7628 >= _0x260cec) {
        return;
      }
      var _0x48fe4d = 1048576;
      _0x260cec = Math.max(_0x260cec, _0x1b7628 * (_0x1b7628 < _0x48fe4d ? 2 : 1.125) >>> 0);
      if (_0x1b7628 != 0) {
        _0x260cec = Math.max(_0x260cec, 256);
      }
      var _0x564961 = _0x47b4a7.contents;
      _0x47b4a7.contents = new Uint8Array(_0x260cec);
      if (_0x47b4a7.usedBytes > 0) {
        _0x47b4a7.contents.set(_0x564961.subarray(0, _0x47b4a7.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x268d96, _0x552f07) {
      if (_0x268d96.usedBytes == _0x552f07) {
        return;
      }
      if (_0x552f07 == 0) {
        _0x268d96.contents = null;
        _0x268d96.usedBytes = 0;
      } else {
        var _0x3ee507 = _0x268d96.contents;
        _0x268d96.contents = new Uint8Array(_0x552f07);
        if (_0x3ee507) {
          _0x268d96.contents.set(_0x3ee507.subarray(0, Math.min(_0x552f07, _0x268d96.usedBytes)));
        }
        _0x268d96.usedBytes = _0x552f07;
      }
    },
    node_ops: {
      getattr: function (_0x5c45ff) {
        var _0x191591 = {};
        _0x191591.dev = _0x1e6cd4.isChrdev(_0x5c45ff.mode) ? _0x5c45ff.id : 1;
        _0x191591.ino = _0x5c45ff.id;
        _0x191591.mode = _0x5c45ff.mode;
        _0x191591.nlink = 1;
        _0x191591.uid = 0;
        _0x191591.gid = 0;
        _0x191591.rdev = _0x5c45ff.rdev;
        if (_0x1e6cd4.isDir(_0x5c45ff.mode)) {
          _0x191591.size = 4096;
        } else if (_0x1e6cd4.isFile(_0x5c45ff.mode)) {
          _0x191591.size = _0x5c45ff.usedBytes;
        } else if (_0x1e6cd4.isLink(_0x5c45ff.mode)) {
          _0x191591.size = _0x5c45ff.link.length;
        } else {
          _0x191591.size = 0;
        }
        _0x191591.atime = new Date(_0x5c45ff.timestamp);
        _0x191591.mtime = new Date(_0x5c45ff.timestamp);
        _0x191591.ctime = new Date(_0x5c45ff.timestamp);
        _0x191591.blksize = 4096;
        _0x191591.blocks = Math.ceil(_0x191591.size / _0x191591.blksize);
        return _0x191591;
      },
      setattr: function (_0x37fb8f, _0x22a1c6) {
        if (_0x22a1c6.mode !== undefined) {
          _0x37fb8f.mode = _0x22a1c6.mode;
        }
        if (_0x22a1c6.timestamp !== undefined) {
          _0x37fb8f.timestamp = _0x22a1c6.timestamp;
        }
        if (_0x22a1c6.size !== undefined) {
          _0x2be4a0.resizeFileStorage(_0x37fb8f, _0x22a1c6.size);
        }
      },
      lookup: function (_0x54758d, _0x550afc) {
        throw _0x1e6cd4.genericErrors[44];
      },
      mknod: function (_0x83f295, _0x31d7b0, _0x4aceea, _0x301b3f) {
        return _0x2be4a0.createNode(_0x83f295, _0x31d7b0, _0x4aceea, _0x301b3f);
      },
      rename: function (_0x43fec4, _0x28de2a, _0x5d619b) {
        if (_0x1e6cd4.isDir(_0x43fec4.mode)) {
          var _0x585d79;
          try {
            _0x585d79 = _0x1e6cd4.lookupNode(_0x28de2a, _0x5d619b);
          } catch (_0x1690cb) {}
          if (_0x585d79) {
            for (var _0x3bb585 in _0x585d79.contents) {
              throw new _0x1e6cd4.ErrnoError(55);
            }
          }
        }
        delete _0x43fec4.parent.contents[_0x43fec4.name];
        _0x43fec4.parent.timestamp = Date.now();
        _0x43fec4.name = _0x5d619b;
        _0x28de2a.contents[_0x5d619b] = _0x43fec4;
        _0x28de2a.timestamp = _0x43fec4.parent.timestamp;
        _0x43fec4.parent = _0x28de2a;
      },
      unlink: function (_0x217dbf, _0x4a852a) {
        delete _0x217dbf.contents[_0x4a852a];
        _0x217dbf.timestamp = Date.now();
      },
      rmdir: function (_0xd53d50, _0x93edf9) {
        var _0x1cdf5e = _0x1e6cd4.lookupNode(_0xd53d50, _0x93edf9);
        for (var _0xce8c8e in _0x1cdf5e.contents) {
          throw new _0x1e6cd4.ErrnoError(55);
        }
        delete _0xd53d50.contents[_0x93edf9];
        _0xd53d50.timestamp = Date.now();
      },
      readdir: function (_0x1b3cf6) {
        var _0x17eaed = [".", ".."];
        for (var _0xaeecb4 in _0x1b3cf6.contents) {
          if (!_0x1b3cf6.contents.hasOwnProperty(_0xaeecb4)) {
            continue;
          }
          _0x17eaed.push(_0xaeecb4);
        }
        return _0x17eaed;
      },
      symlink: function (_0x3b1cfd, _0x288a56, _0x34bf3d) {
        var _0x4f42a7 = _0x2be4a0.createNode(_0x3b1cfd, _0x288a56, 41471, 0);
        _0x4f42a7.link = _0x34bf3d;
        return _0x4f42a7;
      },
      readlink: function (_0x26297f) {
        if (!_0x1e6cd4.isLink(_0x26297f.mode)) {
          throw new _0x1e6cd4.ErrnoError(28);
        }
        return _0x26297f.link;
      }
    },
    stream_ops: {
      read: function (_0x860c74, _0xe61ed3, _0x486723, _0x3996ef, _0x1c3821) {
        var _0x52d565 = _0x860c74.node.contents;
        if (_0x1c3821 >= _0x860c74.node.usedBytes) {
          return 0;
        }
        var _0x302a26 = Math.min(_0x860c74.node.usedBytes - _0x1c3821, _0x3996ef);
        if (_0x302a26 > 8 && _0x52d565.subarray) {
          _0xe61ed3.set(_0x52d565.subarray(_0x1c3821, _0x1c3821 + _0x302a26), _0x486723);
        } else {
          for (var _0x377dfe = 0; _0x377dfe < _0x302a26; _0x377dfe++) {
            _0xe61ed3[_0x486723 + _0x377dfe] = _0x52d565[_0x1c3821 + _0x377dfe];
          }
        }
        return _0x302a26;
      },
      write: function (_0x48c22d, _0x1300d, _0x21e8dd, _0x23138d, _0x374d55, _0x2a3a45) {
        if (_0x1300d.buffer === _0x133579.buffer) {
          _0x2a3a45 = false;
        }
        if (!_0x23138d) {
          return 0;
        }
        var _0x5511a6 = _0x48c22d.node;
        _0x5511a6.timestamp = Date.now();
        if (_0x1300d.subarray && (!_0x5511a6.contents || _0x5511a6.contents.subarray)) {
          if (_0x2a3a45) {
            _0x5511a6.contents = _0x1300d.subarray(_0x21e8dd, _0x21e8dd + _0x23138d);
            _0x5511a6.usedBytes = _0x23138d;
            return _0x23138d;
          } else if (_0x5511a6.usedBytes === 0 && _0x374d55 === 0) {
            _0x5511a6.contents = _0x1300d.slice(_0x21e8dd, _0x21e8dd + _0x23138d);
            _0x5511a6.usedBytes = _0x23138d;
            return _0x23138d;
          } else if (_0x374d55 + _0x23138d <= _0x5511a6.usedBytes) {
            _0x5511a6.contents.set(_0x1300d.subarray(_0x21e8dd, _0x21e8dd + _0x23138d), _0x374d55);
            return _0x23138d;
          }
        }
        _0x2be4a0.expandFileStorage(_0x5511a6, _0x374d55 + _0x23138d);
        if (_0x5511a6.contents.subarray && _0x1300d.subarray) {
          _0x5511a6.contents.set(_0x1300d.subarray(_0x21e8dd, _0x21e8dd + _0x23138d), _0x374d55);
        } else {
          for (var _0x218ff8 = 0; _0x218ff8 < _0x23138d; _0x218ff8++) {
            _0x5511a6.contents[_0x374d55 + _0x218ff8] = _0x1300d[_0x21e8dd + _0x218ff8];
          }
        }
        _0x5511a6.usedBytes = Math.max(_0x5511a6.usedBytes, _0x374d55 + _0x23138d);
        return _0x23138d;
      },
      llseek: function (_0x5af213, _0x3ee5e8, _0x48d1a5) {
        var _0x23e63e = _0x3ee5e8;
        if (_0x48d1a5 === 1) {
          _0x23e63e += _0x5af213.position;
        } else if (_0x48d1a5 === 2) {
          if (_0x1e6cd4.isFile(_0x5af213.node.mode)) {
            _0x23e63e += _0x5af213.node.usedBytes;
          }
        }
        if (_0x23e63e < 0) {
          throw new _0x1e6cd4.ErrnoError(28);
        }
        return _0x23e63e;
      },
      allocate: function (_0x2db91a, _0x24b8b0, _0x1ee496) {
        _0x2be4a0.expandFileStorage(_0x2db91a.node, _0x24b8b0 + _0x1ee496);
        _0x2db91a.node.usedBytes = Math.max(_0x2db91a.node.usedBytes, _0x24b8b0 + _0x1ee496);
      },
      mmap: function (_0x1af5a3, _0x2b53bb, _0x569475, _0x4c0f7a, _0x1ba713, _0x38b47b) {
        if (_0x2b53bb !== 0) {
          throw new _0x1e6cd4.ErrnoError(28);
        }
        if (!_0x1e6cd4.isFile(_0x1af5a3.node.mode)) {
          throw new _0x1e6cd4.ErrnoError(43);
        }
        var _0x4618b0;
        var _0x5cf373;
        var _0x2e2afa = _0x1af5a3.node.contents;
        if (!(_0x38b47b & 2) && _0x2e2afa.buffer === _0x5c18d0) {
          _0x5cf373 = false;
          _0x4618b0 = _0x2e2afa.byteOffset;
        } else {
          if (_0x4c0f7a > 0 || _0x4c0f7a + _0x569475 < _0x2e2afa.length) {
            if (_0x2e2afa.subarray) {
              _0x2e2afa = _0x2e2afa.subarray(_0x4c0f7a, _0x4c0f7a + _0x569475);
            } else {
              _0x2e2afa = Array.prototype.slice.call(_0x2e2afa, _0x4c0f7a, _0x4c0f7a + _0x569475);
            }
          }
          _0x5cf373 = true;
          _0x4618b0 = _0xc9421c(_0x569475);
          if (!_0x4618b0) {
            throw new _0x1e6cd4.ErrnoError(48);
          }
          _0x133579.set(_0x2e2afa, _0x4618b0);
        }
        return {
          ptr: _0x4618b0,
          allocated: _0x5cf373
        };
      },
      msync: function (_0x15ea5a, _0x5ca395, _0x547f32, _0x45be57, _0x1f2a22) {
        if (!_0x1e6cd4.isFile(_0x15ea5a.node.mode)) {
          throw new _0x1e6cd4.ErrnoError(43);
        }
        if (_0x1f2a22 & 2) {
          return 0;
        }
        var _0x2b13fb = _0x2be4a0.stream_ops.write(_0x15ea5a, _0x5ca395, 0, _0x45be57, _0x547f32, false);
        return 0;
      }
    }
  };
  var _0x42af0e = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x50f3b1 = null;
      if (typeof window === "object") {
        _0x50f3b1 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x1bfc0b(_0x50f3b1, "IDBFS used, but indexedDB not supported");
      return _0x50f3b1;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x264658) {
      return _0x2be4a0.mount.apply(null, arguments);
    },
    syncfs: function (_0x257d85, _0x246839, _0x1d5313) {
      _0x42af0e.getLocalSet(_0x257d85, function (_0x5d133e, _0x5c9dfb) {
        if (_0x5d133e) {
          return _0x1d5313(_0x5d133e);
        }
        _0x42af0e.getRemoteSet(_0x257d85, function (_0x4a8011, _0x1b831d) {
          if (_0x4a8011) {
            return _0x1d5313(_0x4a8011);
          }
          var _0x5f3e47 = _0x246839 ? _0x1b831d : _0x5c9dfb;
          var _0x299a8e = _0x246839 ? _0x5c9dfb : _0x1b831d;
          _0x42af0e.reconcile(_0x5f3e47, _0x299a8e, _0x1d5313);
        });
      });
    },
    getDB: function (_0x445e3d, _0x8eb204) {
      var _0x59e586 = _0x42af0e.dbs[_0x445e3d];
      if (_0x59e586) {
        return _0x8eb204(null, _0x59e586);
      }
      var _0x4818cc;
      try {
        _0x4818cc = _0x42af0e.indexedDB().open(_0x445e3d, _0x42af0e.DB_VERSION);
      } catch (_0x500593) {
        return _0x8eb204(_0x500593);
      }
      if (!_0x4818cc) {
        return _0x8eb204("Unable to connect to IndexedDB");
      }
      _0x4818cc.onupgradeneeded = function (_0x3af69d) {
        var _0x4001ed = _0x3af69d.target.result;
        var _0x4a0714 = _0x3af69d.target.transaction;
        var _0x29e8a2;
        if (_0x4001ed.objectStoreNames.contains(_0x42af0e.DB_STORE_NAME)) {
          _0x29e8a2 = _0x4a0714.objectStore(_0x42af0e.DB_STORE_NAME);
        } else {
          _0x29e8a2 = _0x4001ed.createObjectStore(_0x42af0e.DB_STORE_NAME);
        }
        if (!_0x29e8a2.indexNames.contains("timestamp")) {
          _0x29e8a2.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x4818cc.onsuccess = function () {
        _0x59e586 = _0x4818cc.result;
        _0x42af0e.dbs[_0x445e3d] = _0x59e586;
        _0x8eb204(null, _0x59e586);
      };
      _0x4818cc.onerror = function (_0x352bd2) {
        _0x8eb204(this.error);
        _0x352bd2.preventDefault();
      };
    },
    getLocalSet: function (_0x47ce29, _0x988595) {
      var _0x15337e = {};
      function _0x3c1fbd(_0xda12ed) {
        return _0xda12ed !== "." && _0xda12ed !== "..";
      }
      function _0x19b9bb(_0x350bc5) {
        return function (_0x284077) {
          return _0x1ec70c.join2(_0x350bc5, _0x284077);
        };
      }
      var _0x5aeefc = _0x1e6cd4.readdir(_0x47ce29.mountpoint).filter(_0x3c1fbd).map(_0x19b9bb(_0x47ce29.mountpoint));
      while (_0x5aeefc.length) {
        var _0x27ba7e = _0x5aeefc.pop();
        var _0x46b003;
        try {
          _0x46b003 = _0x1e6cd4.stat(_0x27ba7e);
        } catch (_0x164b2f) {
          return _0x988595(_0x164b2f);
        }
        if (_0x1e6cd4.isDir(_0x46b003.mode)) {
          _0x5aeefc.push.apply(_0x5aeefc, _0x1e6cd4.readdir(_0x27ba7e).filter(_0x3c1fbd).map(_0x19b9bb(_0x27ba7e)));
        }
        _0x15337e[_0x27ba7e] = {
          timestamp: _0x46b003.mtime
        };
      }
      return _0x988595(null, {
        type: "local",
        entries: _0x15337e
      });
    },
    getRemoteSet: function (_0xa3faec, _0x518129) {
      var _0xc7df26 = {};
      _0x42af0e.getDB(_0xa3faec.mountpoint, function (_0xdbcc8f, _0x403123) {
        if (_0xdbcc8f) {
          return _0x518129(_0xdbcc8f);
        }
        try {
          var _0x40bc61 = _0x403123.transaction([_0x42af0e.DB_STORE_NAME], "readonly");
          _0x40bc61.onerror = function (_0x441be2) {
            _0x518129(this.error);
            _0x441be2.preventDefault();
          };
          var _0x1e2a42 = _0x40bc61.objectStore(_0x42af0e.DB_STORE_NAME);
          var _0x30b600 = _0x1e2a42.index("timestamp");
          _0x30b600.openKeyCursor().onsuccess = function (_0x221014) {
            var _0x5cd1dd = _0x221014.target.result;
            if (!_0x5cd1dd) {
              return _0x518129(null, {
                type: "remote",
                db: _0x403123,
                entries: _0xc7df26
              });
            }
            _0xc7df26[_0x5cd1dd.primaryKey] = {
              timestamp: _0x5cd1dd.key
            };
            _0x5cd1dd.continue();
          };
        } catch (_0x48d531) {
          return _0x518129(_0x48d531);
        }
      });
    },
    loadLocalEntry: function (_0x51526e, _0x282a8d) {
      var _0x2493b1;
      var _0x5f2d9e;
      try {
        var _0x54ff2d = _0x1e6cd4.lookupPath(_0x51526e);
        _0x5f2d9e = _0x54ff2d.node;
        _0x2493b1 = _0x1e6cd4.stat(_0x51526e);
      } catch (_0x1de99b) {
        return _0x282a8d(_0x1de99b);
      }
      if (_0x1e6cd4.isDir(_0x2493b1.mode)) {
        return _0x282a8d(null, {
          timestamp: _0x2493b1.mtime,
          mode: _0x2493b1.mode
        });
      } else if (_0x1e6cd4.isFile(_0x2493b1.mode)) {
        _0x5f2d9e.contents = _0x2be4a0.getFileDataAsTypedArray(_0x5f2d9e);
        return _0x282a8d(null, {
          timestamp: _0x2493b1.mtime,
          mode: _0x2493b1.mode,
          contents: _0x5f2d9e.contents
        });
      } else {
        return _0x282a8d(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x381f03, _0x4f02f3, _0x49dff0) {
      try {
        if (_0x1e6cd4.isDir(_0x4f02f3.mode)) {
          _0x1e6cd4.mkdirTree(_0x381f03, _0x4f02f3.mode);
        } else if (_0x1e6cd4.isFile(_0x4f02f3.mode)) {
          _0x1e6cd4.writeFile(_0x381f03, _0x4f02f3.contents, {
            canOwn: true
          });
        } else {
          return _0x49dff0(new Error("node type not supported"));
        }
        _0x1e6cd4.chmod(_0x381f03, _0x4f02f3.mode);
        _0x1e6cd4.utime(_0x381f03, _0x4f02f3.timestamp, _0x4f02f3.timestamp);
      } catch (_0x2b6ecd) {
        return _0x49dff0(_0x2b6ecd);
      }
      _0x49dff0(null);
    },
    removeLocalEntry: function (_0x5e1fe3, _0x2c2d83) {
      try {
        var _0x5304b3 = _0x1e6cd4.lookupPath(_0x5e1fe3);
        var _0x2246ac = _0x1e6cd4.stat(_0x5e1fe3);
        if (_0x1e6cd4.isDir(_0x2246ac.mode)) {
          _0x1e6cd4.rmdir(_0x5e1fe3);
        } else if (_0x1e6cd4.isFile(_0x2246ac.mode)) {
          _0x1e6cd4.unlink(_0x5e1fe3);
        }
      } catch (_0x55774e) {
        return _0x2c2d83(_0x55774e);
      }
      _0x2c2d83(null);
    },
    loadRemoteEntry: function (_0x47fa7c, _0x5596b3, _0x3c87b9) {
      var _0x2bd9b0 = _0x47fa7c.get(_0x5596b3);
      _0x2bd9b0.onsuccess = function (_0x4ec6b1) {
        _0x3c87b9(null, _0x4ec6b1.target.result);
      };
      _0x2bd9b0.onerror = function (_0x3bd5cc) {
        _0x3c87b9(this.error);
        _0x3bd5cc.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x306bc4, _0x1e12ac, _0x1fcbee, _0x4cebfa) {
      var _0x5a125a = _0x306bc4.put(_0x1fcbee, _0x1e12ac);
      _0x5a125a.onsuccess = function () {
        _0x4cebfa(null);
      };
      _0x5a125a.onerror = function (_0x574bbc) {
        _0x4cebfa(this.error);
        _0x574bbc.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x48a60a, _0x4d88cb, _0x341af3) {
      var _0x2eabe8 = _0x48a60a.delete(_0x4d88cb);
      _0x2eabe8.onsuccess = function () {
        _0x341af3(null);
      };
      _0x2eabe8.onerror = function (_0x32709b) {
        _0x341af3(this.error);
        _0x32709b.preventDefault();
      };
    },
    reconcile: function (_0x4a29c0, _0x4049ac, _0x5ad904) {
      var _0x572300 = 0;
      var _0x514f48 = [];
      Object.keys(_0x4a29c0.entries).forEach(function (_0x219d1a) {
        var _0x1d612a = _0x4a29c0.entries[_0x219d1a];
        var _0x5a94ee = _0x4049ac.entries[_0x219d1a];
        if (!_0x5a94ee || _0x1d612a.timestamp.getTime() != _0x5a94ee.timestamp.getTime()) {
          _0x514f48.push(_0x219d1a);
          _0x572300++;
        }
      });
      var _0x51889e = [];
      Object.keys(_0x4049ac.entries).forEach(function (_0xc8da51) {
        if (!_0x4a29c0.entries[_0xc8da51]) {
          _0x51889e.push(_0xc8da51);
          _0x572300++;
        }
      });
      if (!_0x572300) {
        return _0x5ad904(null);
      }
      var _0x431ba0 = false;
      var _0x5366b5 = _0x4a29c0.type === "remote" ? _0x4a29c0.db : _0x4049ac.db;
      var _0x4112d5 = _0x5366b5.transaction([_0x42af0e.DB_STORE_NAME], "readwrite");
      var _0x130668 = _0x4112d5.objectStore(_0x42af0e.DB_STORE_NAME);
      function _0x9f8061(_0x2b7703) {
        if (_0x2b7703 && !_0x431ba0) {
          _0x431ba0 = true;
          return _0x5ad904(_0x2b7703);
        }
      }
      _0x4112d5.onerror = function (_0x171185) {
        _0x9f8061(this.error);
        _0x171185.preventDefault();
      };
      _0x4112d5.oncomplete = function (_0x50c18c) {
        if (!_0x431ba0) {
          _0x5ad904(null);
        }
      };
      _0x514f48.sort().forEach(function (_0x2d2ff5) {
        if (_0x4049ac.type === "local") {
          _0x42af0e.loadRemoteEntry(_0x130668, _0x2d2ff5, function (_0x1a360e, _0x251e98) {
            if (_0x1a360e) {
              return _0x9f8061(_0x1a360e);
            }
            _0x42af0e.storeLocalEntry(_0x2d2ff5, _0x251e98, _0x9f8061);
          });
        } else {
          _0x42af0e.loadLocalEntry(_0x2d2ff5, function (_0x248fe9, _0x272923) {
            if (_0x248fe9) {
              return _0x9f8061(_0x248fe9);
            }
            _0x42af0e.storeRemoteEntry(_0x130668, _0x2d2ff5, _0x272923, _0x9f8061);
          });
        }
      });
      _0x51889e.sort().reverse().forEach(function (_0x606aa0) {
        if (_0x4049ac.type === "local") {
          _0x42af0e.removeLocalEntry(_0x606aa0, _0x9f8061);
        } else {
          _0x42af0e.removeRemoteEntry(_0x130668, _0x606aa0, _0x9f8061);
        }
      });
    }
  };
  var _0x1e6cd4 = {
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
    lookupPath: function (_0x54fe05, _0x65f5fd) {
      _0x54fe05 = _0x35eb8a.resolve(_0x1e6cd4.cwd(), _0x54fe05);
      _0x65f5fd = _0x65f5fd || {};
      if (!_0x54fe05) {
        return {
          path: "",
          node: null
        };
      }
      var _0x4503c8 = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x520068 in _0x4503c8) {
        if (_0x65f5fd[_0x520068] === undefined) {
          _0x65f5fd[_0x520068] = _0x4503c8[_0x520068];
        }
      }
      if (_0x65f5fd.recurse_count > 8) {
        throw new _0x1e6cd4.ErrnoError(32);
      }
      var _0x5eb11a = _0x1ec70c.normalizeArray(_0x54fe05.split("/").filter(function (_0x5bb4b3) {
        return !!_0x5bb4b3;
      }), false);
      var _0x15f827 = _0x1e6cd4.root;
      var _0x41e47f = "/";
      for (var _0x3a7a98 = 0; _0x3a7a98 < _0x5eb11a.length; _0x3a7a98++) {
        var _0x3b8659 = _0x3a7a98 === _0x5eb11a.length - 1;
        if (_0x3b8659 && _0x65f5fd.parent) {
          break;
        }
        _0x15f827 = _0x1e6cd4.lookupNode(_0x15f827, _0x5eb11a[_0x3a7a98]);
        _0x41e47f = _0x1ec70c.join2(_0x41e47f, _0x5eb11a[_0x3a7a98]);
        if (_0x1e6cd4.isMountpoint(_0x15f827)) {
          if (!_0x3b8659 || _0x3b8659 && _0x65f5fd.follow_mount) {
            _0x15f827 = _0x15f827.mounted.root;
          }
        }
        if (!_0x3b8659 || _0x65f5fd.follow) {
          var _0x2190ea = 0;
          while (_0x1e6cd4.isLink(_0x15f827.mode)) {
            var _0x3cceba = _0x1e6cd4.readlink(_0x41e47f);
            _0x41e47f = _0x35eb8a.resolve(_0x1ec70c.dirname(_0x41e47f), _0x3cceba);
            var _0x490777 = _0x1e6cd4.lookupPath(_0x41e47f, {
              recurse_count: _0x65f5fd.recurse_count
            });
            _0x15f827 = _0x490777.node;
            if (_0x2190ea++ > 40) {
              throw new _0x1e6cd4.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x41e47f,
        node: _0x15f827
      };
    },
    getPath: function (_0x334e66) {
      var _0x202bcd;
      while (true) {
        if (_0x1e6cd4.isRoot(_0x334e66)) {
          var _0x4c6c0c = _0x334e66.mount.mountpoint;
          if (!_0x202bcd) {
            return _0x4c6c0c;
          }
          if (_0x4c6c0c[_0x4c6c0c.length - 1] !== "/") {
            return _0x4c6c0c + "/" + _0x202bcd;
          } else {
            return _0x4c6c0c + _0x202bcd;
          }
        }
        _0x202bcd = _0x202bcd ? _0x334e66.name + "/" + _0x202bcd : _0x334e66.name;
        _0x334e66 = _0x334e66.parent;
      }
    },
    hashName: function (_0x3910de, _0x319cb4) {
      var _0x3fafb6 = 0;
      for (var _0x1019bc = 0; _0x1019bc < _0x319cb4.length; _0x1019bc++) {
        _0x3fafb6 = (_0x3fafb6 << 5) - _0x3fafb6 + _0x319cb4.charCodeAt(_0x1019bc) | 0;
      }
      return (_0x3910de + _0x3fafb6 >>> 0) % _0x1e6cd4.nameTable.length;
    },
    hashAddNode: function (_0x15832e) {
      var _0x290741 = _0x1e6cd4.hashName(_0x15832e.parent.id, _0x15832e.name);
      _0x15832e.name_next = _0x1e6cd4.nameTable[_0x290741];
      _0x1e6cd4.nameTable[_0x290741] = _0x15832e;
    },
    hashRemoveNode: function (_0x419df3) {
      var _0x134af2 = _0x1e6cd4.hashName(_0x419df3.parent.id, _0x419df3.name);
      if (_0x1e6cd4.nameTable[_0x134af2] === _0x419df3) {
        _0x1e6cd4.nameTable[_0x134af2] = _0x419df3.name_next;
      } else {
        var _0x49c37b = _0x1e6cd4.nameTable[_0x134af2];
        while (_0x49c37b) {
          if (_0x49c37b.name_next === _0x419df3) {
            _0x49c37b.name_next = _0x419df3.name_next;
            break;
          }
          _0x49c37b = _0x49c37b.name_next;
        }
      }
    },
    lookupNode: function (_0x5af569, _0x584dab) {
      var _0xfbf040 = _0x1e6cd4.mayLookup(_0x5af569);
      if (_0xfbf040) {
        throw new _0x1e6cd4.ErrnoError(_0xfbf040, _0x5af569);
      }
      var _0x360bde = _0x1e6cd4.hashName(_0x5af569.id, _0x584dab);
      for (var _0x1d531b = _0x1e6cd4.nameTable[_0x360bde]; _0x1d531b; _0x1d531b = _0x1d531b.name_next) {
        var _0x17d853 = _0x1d531b.name;
        if (_0x1d531b.parent.id === _0x5af569.id && _0x17d853 === _0x584dab) {
          return _0x1d531b;
        }
      }
      return _0x1e6cd4.lookup(_0x5af569, _0x584dab);
    },
    createNode: function (_0x2ccb96, _0xf53a21, _0x2dc938, _0x273e73) {
      var _0x4bbe41 = new _0x1e6cd4.FSNode(_0x2ccb96, _0xf53a21, _0x2dc938, _0x273e73);
      _0x1e6cd4.hashAddNode(_0x4bbe41);
      return _0x4bbe41;
    },
    destroyNode: function (_0x3d557d) {
      _0x1e6cd4.hashRemoveNode(_0x3d557d);
    },
    isRoot: function (_0x3b5033) {
      return _0x3b5033 === _0x3b5033.parent;
    },
    isMountpoint: function (_0x69607b) {
      return !!_0x69607b.mounted;
    },
    isFile: function (_0x3bd68c) {
      return (_0x3bd68c & 61440) === 32768;
    },
    isDir: function (_0x560eb0) {
      return (_0x560eb0 & 61440) === 16384;
    },
    isLink: function (_0x40189e) {
      return (_0x40189e & 61440) === 40960;
    },
    isChrdev: function (_0x1ae9eb) {
      return (_0x1ae9eb & 61440) === 8192;
    },
    isBlkdev: function (_0x57d24b) {
      return (_0x57d24b & 61440) === 24576;
    },
    isFIFO: function (_0x45872c) {
      return (_0x45872c & 61440) === 4096;
    },
    isSocket: function (_0x3bbb8f) {
      return (_0x3bbb8f & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x530808) {
      var _0x25c3e0 = _0x1e6cd4.flagModes[_0x530808];
      if (typeof _0x25c3e0 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x530808);
      }
      return _0x25c3e0;
    },
    flagsToPermissionString: function (_0x5b1714) {
      var _0x271dc4 = ["r", "w", "rw"][_0x5b1714 & 3];
      if (_0x5b1714 & 512) {
        _0x271dc4 += "w";
      }
      return _0x271dc4;
    },
    nodePermissions: function (_0xb9320c, _0x252d55) {
      if (_0x1e6cd4.ignorePermissions) {
        return 0;
      }
      if (_0x252d55.includes("r") && !(_0xb9320c.mode & 292)) {
        return 2;
      } else if (_0x252d55.includes("w") && !(_0xb9320c.mode & 146)) {
        return 2;
      } else if (_0x252d55.includes("x") && !(_0xb9320c.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x7f7be0) {
      var _0x134d61 = _0x1e6cd4.nodePermissions(_0x7f7be0, "x");
      if (_0x134d61) {
        return _0x134d61;
      }
      if (!_0x7f7be0.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x4aaa07, _0x43b62d) {
      try {
        var _0x5ec3c1 = _0x1e6cd4.lookupNode(_0x4aaa07, _0x43b62d);
        return 20;
      } catch (_0x48b14a) {}
      return _0x1e6cd4.nodePermissions(_0x4aaa07, "wx");
    },
    mayDelete: function (_0x55eab7, _0x2ffbbb, _0x505cef) {
      var _0x10940f;
      try {
        _0x10940f = _0x1e6cd4.lookupNode(_0x55eab7, _0x2ffbbb);
      } catch (_0x10131e) {
        return _0x10131e.errno;
      }
      var _0x118599 = _0x1e6cd4.nodePermissions(_0x55eab7, "wx");
      if (_0x118599) {
        return _0x118599;
      }
      if (_0x505cef) {
        if (!_0x1e6cd4.isDir(_0x10940f.mode)) {
          return 54;
        }
        if (_0x1e6cd4.isRoot(_0x10940f) || _0x1e6cd4.getPath(_0x10940f) === _0x1e6cd4.cwd()) {
          return 10;
        }
      } else if (_0x1e6cd4.isDir(_0x10940f.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0xea87c3, _0x14795e) {
      if (!_0xea87c3) {
        return 44;
      }
      if (_0x1e6cd4.isLink(_0xea87c3.mode)) {
        return 32;
      } else if (_0x1e6cd4.isDir(_0xea87c3.mode)) {
        if (_0x1e6cd4.flagsToPermissionString(_0x14795e) !== "r" || _0x14795e & 512) {
          return 31;
        }
      }
      return _0x1e6cd4.nodePermissions(_0xea87c3, _0x1e6cd4.flagsToPermissionString(_0x14795e));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x2a02d5, _0xdca18b) {
      _0x2a02d5 = _0x2a02d5 || 0;
      _0xdca18b = _0xdca18b || _0x1e6cd4.MAX_OPEN_FDS;
      for (var _0x26969c = _0x2a02d5; _0x26969c <= _0xdca18b; _0x26969c++) {
        if (!_0x1e6cd4.streams[_0x26969c]) {
          return _0x26969c;
        }
      }
      throw new _0x1e6cd4.ErrnoError(33);
    },
    getStream: function (_0x513088) {
      return _0x1e6cd4.streams[_0x513088];
    },
    createStream: function (_0x506fba, _0x321f2f, _0x3bea30) {
      if (!_0x1e6cd4.FSStream) {
        _0x1e6cd4.FSStream = function () {};
        _0x1e6cd4.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x6617a) {
              this.node = _0x6617a;
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
      var _0x2288a9 = new _0x1e6cd4.FSStream();
      for (var _0x59568d in _0x506fba) {
        _0x2288a9[_0x59568d] = _0x506fba[_0x59568d];
      }
      _0x506fba = _0x2288a9;
      var _0x2c7f69 = _0x1e6cd4.nextfd(_0x321f2f, _0x3bea30);
      _0x506fba.fd = _0x2c7f69;
      _0x1e6cd4.streams[_0x2c7f69] = _0x506fba;
      return _0x506fba;
    },
    closeStream: function (_0x1c088f) {
      _0x1e6cd4.streams[_0x1c088f] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x26d58f) {
        var _0xce92e3 = _0x1e6cd4.getDevice(_0x26d58f.node.rdev);
        _0x26d58f.stream_ops = _0xce92e3.stream_ops;
        if (_0x26d58f.stream_ops.open) {
          _0x26d58f.stream_ops.open(_0x26d58f);
        }
      },
      llseek: function () {
        throw new _0x1e6cd4.ErrnoError(70);
      }
    },
    major: function (_0x220397) {
      return _0x220397 >> 8;
    },
    minor: function (_0x57d727) {
      return _0x57d727 & 255;
    },
    makedev: function (_0x141f34, _0x55c47f) {
      return _0x141f34 << 8 | _0x55c47f;
    },
    registerDevice: function (_0x4fc2d3, _0xcf05a) {
      _0x1e6cd4.devices[_0x4fc2d3] = {
        stream_ops: _0xcf05a
      };
    },
    getDevice: function (_0x57417c) {
      return _0x1e6cd4.devices[_0x57417c];
    },
    getMounts: function (_0x361949) {
      var _0x208446 = [];
      var _0x3209b8 = [_0x361949];
      while (_0x3209b8.length) {
        var _0x5ba272 = _0x3209b8.pop();
        _0x208446.push(_0x5ba272);
        _0x3209b8.push.apply(_0x3209b8, _0x5ba272.mounts);
      }
      return _0x208446;
    },
    syncfs: function (_0x7c8ed3, _0x1004f7) {
      if (typeof _0x7c8ed3 === "function") {
        _0x1004f7 = _0x7c8ed3;
        _0x7c8ed3 = false;
      }
      _0x1e6cd4.syncFSRequests++;
      if (_0x1e6cd4.syncFSRequests > 1) {
        _0x551fc8("warning: " + _0x1e6cd4.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x47ebeb = _0x1e6cd4.getMounts(_0x1e6cd4.root.mount);
      var _0x5c1cdc = 0;
      function _0x55383b(_0x1a487a) {
        _0x1e6cd4.syncFSRequests--;
        return _0x1004f7(_0x1a487a);
      }
      function _0x5e6a58(_0x5655f6) {
        if (_0x5655f6) {
          if (!_0x5e6a58.errored) {
            _0x5e6a58.errored = true;
            return _0x55383b(_0x5655f6);
          }
          return;
        }
        if (++_0x5c1cdc >= _0x47ebeb.length) {
          _0x55383b(null);
        }
      }
      _0x47ebeb.forEach(function (_0x328357) {
        if (!_0x328357.type.syncfs) {
          return _0x5e6a58(null);
        }
        _0x328357.type.syncfs(_0x328357, _0x7c8ed3, _0x5e6a58);
      });
    },
    mount: function (_0x5e9c8c, _0x522c34, _0x441592) {
      var _0x39d2c8 = _0x441592 === "/";
      var _0x332f71 = !_0x441592;
      var _0x406dfd;
      if (_0x39d2c8 && _0x1e6cd4.root) {
        throw new _0x1e6cd4.ErrnoError(10);
      } else if (!_0x39d2c8 && !_0x332f71) {
        var _0x1efcce = _0x1e6cd4.lookupPath(_0x441592, {
          follow_mount: false
        });
        _0x441592 = _0x1efcce.path;
        _0x406dfd = _0x1efcce.node;
        if (_0x1e6cd4.isMountpoint(_0x406dfd)) {
          throw new _0x1e6cd4.ErrnoError(10);
        }
        if (!_0x1e6cd4.isDir(_0x406dfd.mode)) {
          throw new _0x1e6cd4.ErrnoError(54);
        }
      }
      var _0x381c60 = {
        type: _0x5e9c8c,
        opts: _0x522c34,
        mountpoint: _0x441592,
        mounts: []
      };
      var _0x5af63c = _0x5e9c8c.mount(_0x381c60);
      _0x5af63c.mount = _0x381c60;
      _0x381c60.root = _0x5af63c;
      if (_0x39d2c8) {
        _0x1e6cd4.root = _0x5af63c;
      } else if (_0x406dfd) {
        _0x406dfd.mounted = _0x381c60;
        if (_0x406dfd.mount) {
          _0x406dfd.mount.mounts.push(_0x381c60);
        }
      }
      return _0x5af63c;
    },
    unmount: function (_0xbb9d4a) {
      var _0x5b8e02 = _0x1e6cd4.lookupPath(_0xbb9d4a, {
        follow_mount: false
      });
      if (!_0x1e6cd4.isMountpoint(_0x5b8e02.node)) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      var _0xd49efb = _0x5b8e02.node;
      var _0x39bd96 = _0xd49efb.mounted;
      var _0x12b222 = _0x1e6cd4.getMounts(_0x39bd96);
      Object.keys(_0x1e6cd4.nameTable).forEach(function (_0x4e0883) {
        var _0x252a7d = _0x1e6cd4.nameTable[_0x4e0883];
        while (_0x252a7d) {
          var _0x510625 = _0x252a7d.name_next;
          if (_0x12b222.includes(_0x252a7d.mount)) {
            _0x1e6cd4.destroyNode(_0x252a7d);
          }
          _0x252a7d = _0x510625;
        }
      });
      _0xd49efb.mounted = null;
      var _0x199a04 = _0xd49efb.mount.mounts.indexOf(_0x39bd96);
      _0xd49efb.mount.mounts.splice(_0x199a04, 1);
    },
    lookup: function (_0x346e21, _0x225e84) {
      return _0x346e21.node_ops.lookup(_0x346e21, _0x225e84);
    },
    mknod: function (_0x409ffe, _0x90481b, _0x35e6b9) {
      var _0xf08a09 = _0x1e6cd4.lookupPath(_0x409ffe, {
        parent: true
      });
      var _0x5eae98 = _0xf08a09.node;
      var _0x46a3de = _0x1ec70c.basename(_0x409ffe);
      if (!_0x46a3de || _0x46a3de === "." || _0x46a3de === "..") {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      var _0x66346d = _0x1e6cd4.mayCreate(_0x5eae98, _0x46a3de);
      if (_0x66346d) {
        throw new _0x1e6cd4.ErrnoError(_0x66346d);
      }
      if (!_0x5eae98.node_ops.mknod) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      return _0x5eae98.node_ops.mknod(_0x5eae98, _0x46a3de, _0x90481b, _0x35e6b9);
    },
    create: function (_0x2cc316, _0x495ef1) {
      _0x495ef1 = _0x495ef1 !== undefined ? _0x495ef1 : 438;
      _0x495ef1 &= 4095;
      _0x495ef1 |= 32768;
      return _0x1e6cd4.mknod(_0x2cc316, _0x495ef1, 0);
    },
    mkdir: function (_0xd29ec5, _0x380163) {
      _0x380163 = _0x380163 !== undefined ? _0x380163 : 511;
      _0x380163 &= 1023;
      _0x380163 |= 16384;
      return _0x1e6cd4.mknod(_0xd29ec5, _0x380163, 0);
    },
    mkdirTree: function (_0x18d1eb, _0x26b6b9) {
      var _0xe3e52c = _0x18d1eb.split("/");
      var _0x41cc60 = "";
      for (var _0x415aee = 0; _0x415aee < _0xe3e52c.length; ++_0x415aee) {
        if (!_0xe3e52c[_0x415aee]) {
          continue;
        }
        _0x41cc60 += "/" + _0xe3e52c[_0x415aee];
        try {
          _0x1e6cd4.mkdir(_0x41cc60, _0x26b6b9);
        } catch (_0x585d34) {
          if (_0x585d34.errno != 20) {
            throw _0x585d34;
          }
        }
      }
    },
    mkdev: function (_0x2c886d, _0x5917b6, _0xc56f67) {
      if (typeof _0xc56f67 === "undefined") {
        _0xc56f67 = _0x5917b6;
        _0x5917b6 = 438;
      }
      _0x5917b6 |= 8192;
      return _0x1e6cd4.mknod(_0x2c886d, _0x5917b6, _0xc56f67);
    },
    symlink: function (_0x8a03b5, _0x458e88) {
      if (!_0x35eb8a.resolve(_0x8a03b5)) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      var _0x67e940 = _0x1e6cd4.lookupPath(_0x458e88, {
        parent: true
      });
      var _0x2c544a = _0x67e940.node;
      if (!_0x2c544a) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      var _0x209029 = _0x1ec70c.basename(_0x458e88);
      var _0x4a8c35 = _0x1e6cd4.mayCreate(_0x2c544a, _0x209029);
      if (_0x4a8c35) {
        throw new _0x1e6cd4.ErrnoError(_0x4a8c35);
      }
      if (!_0x2c544a.node_ops.symlink) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      return _0x2c544a.node_ops.symlink(_0x2c544a, _0x209029, _0x8a03b5);
    },
    rename: function (_0xf6b6b6, _0x4d6f23) {
      var _0x48d9dd = _0x1ec70c.dirname(_0xf6b6b6);
      var _0x3aede4 = _0x1ec70c.dirname(_0x4d6f23);
      var _0x1dc259 = _0x1ec70c.basename(_0xf6b6b6);
      var _0x1f69b8 = _0x1ec70c.basename(_0x4d6f23);
      var _0x4e752c;
      var _0xa00958;
      var _0x5e953c;
      _0x4e752c = _0x1e6cd4.lookupPath(_0xf6b6b6, {
        parent: true
      });
      _0xa00958 = _0x4e752c.node;
      _0x4e752c = _0x1e6cd4.lookupPath(_0x4d6f23, {
        parent: true
      });
      _0x5e953c = _0x4e752c.node;
      if (!_0xa00958 || !_0x5e953c) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      if (_0xa00958.mount !== _0x5e953c.mount) {
        throw new _0x1e6cd4.ErrnoError(75);
      }
      var _0x332c59 = _0x1e6cd4.lookupNode(_0xa00958, _0x1dc259);
      var _0x48359c = _0x35eb8a.relative(_0xf6b6b6, _0x3aede4);
      if (_0x48359c.charAt(0) !== ".") {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      _0x48359c = _0x35eb8a.relative(_0x4d6f23, _0x48d9dd);
      if (_0x48359c.charAt(0) !== ".") {
        throw new _0x1e6cd4.ErrnoError(55);
      }
      var _0x291768;
      try {
        _0x291768 = _0x1e6cd4.lookupNode(_0x5e953c, _0x1f69b8);
      } catch (_0x119c6f) {}
      if (_0x332c59 === _0x291768) {
        return;
      }
      var _0x2dcef = _0x1e6cd4.isDir(_0x332c59.mode);
      var _0x1de4f4 = _0x1e6cd4.mayDelete(_0xa00958, _0x1dc259, _0x2dcef);
      if (_0x1de4f4) {
        throw new _0x1e6cd4.ErrnoError(_0x1de4f4);
      }
      _0x1de4f4 = _0x291768 ? _0x1e6cd4.mayDelete(_0x5e953c, _0x1f69b8, _0x2dcef) : _0x1e6cd4.mayCreate(_0x5e953c, _0x1f69b8);
      if (_0x1de4f4) {
        throw new _0x1e6cd4.ErrnoError(_0x1de4f4);
      }
      if (!_0xa00958.node_ops.rename) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      if (_0x1e6cd4.isMountpoint(_0x332c59) || _0x291768 && _0x1e6cd4.isMountpoint(_0x291768)) {
        throw new _0x1e6cd4.ErrnoError(10);
      }
      if (_0x5e953c !== _0xa00958) {
        _0x1de4f4 = _0x1e6cd4.nodePermissions(_0xa00958, "w");
        if (_0x1de4f4) {
          throw new _0x1e6cd4.ErrnoError(_0x1de4f4);
        }
      }
      try {
        if (_0x1e6cd4.trackingDelegate.willMovePath) {
          _0x1e6cd4.trackingDelegate.willMovePath(_0xf6b6b6, _0x4d6f23);
        }
      } catch (_0x257fc6) {
        _0x551fc8("FS.trackingDelegate['willMovePath']('" + _0xf6b6b6 + "', '" + _0x4d6f23 + "') threw an exception: " + _0x257fc6.message);
      }
      _0x1e6cd4.hashRemoveNode(_0x332c59);
      try {
        _0xa00958.node_ops.rename(_0x332c59, _0x5e953c, _0x1f69b8);
      } catch (_0x46f9cd) {
        throw _0x46f9cd;
      } finally {
        _0x1e6cd4.hashAddNode(_0x332c59);
      }
      try {
        if (_0x1e6cd4.trackingDelegate.onMovePath) {
          _0x1e6cd4.trackingDelegate.onMovePath(_0xf6b6b6, _0x4d6f23);
        }
      } catch (_0x5c460a) {
        _0x551fc8("FS.trackingDelegate['onMovePath']('" + _0xf6b6b6 + "', '" + _0x4d6f23 + "') threw an exception: " + _0x5c460a.message);
      }
    },
    rmdir: function (_0xf130a7) {
      var _0x2e5d59 = _0x1e6cd4.lookupPath(_0xf130a7, {
        parent: true
      });
      var _0x5114d4 = _0x2e5d59.node;
      var _0x57ca51 = _0x1ec70c.basename(_0xf130a7);
      var _0x272b1a = _0x1e6cd4.lookupNode(_0x5114d4, _0x57ca51);
      var _0x578a4e = _0x1e6cd4.mayDelete(_0x5114d4, _0x57ca51, true);
      if (_0x578a4e) {
        throw new _0x1e6cd4.ErrnoError(_0x578a4e);
      }
      if (!_0x5114d4.node_ops.rmdir) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      if (_0x1e6cd4.isMountpoint(_0x272b1a)) {
        throw new _0x1e6cd4.ErrnoError(10);
      }
      try {
        if (_0x1e6cd4.trackingDelegate.willDeletePath) {
          _0x1e6cd4.trackingDelegate.willDeletePath(_0xf130a7);
        }
      } catch (_0x3b4a74) {
        _0x551fc8("FS.trackingDelegate['willDeletePath']('" + _0xf130a7 + "') threw an exception: " + _0x3b4a74.message);
      }
      _0x5114d4.node_ops.rmdir(_0x5114d4, _0x57ca51);
      _0x1e6cd4.destroyNode(_0x272b1a);
      try {
        if (_0x1e6cd4.trackingDelegate.onDeletePath) {
          _0x1e6cd4.trackingDelegate.onDeletePath(_0xf130a7);
        }
      } catch (_0x5d50e6) {
        _0x551fc8("FS.trackingDelegate['onDeletePath']('" + _0xf130a7 + "') threw an exception: " + _0x5d50e6.message);
      }
    },
    readdir: function (_0x11c8c4) {
      var _0x2d7da7 = _0x1e6cd4.lookupPath(_0x11c8c4, {
        follow: true
      });
      var _0x4ef267 = _0x2d7da7.node;
      if (!_0x4ef267.node_ops.readdir) {
        throw new _0x1e6cd4.ErrnoError(54);
      }
      return _0x4ef267.node_ops.readdir(_0x4ef267);
    },
    unlink: function (_0x65a43a) {
      var _0x1b952b = _0x1e6cd4.lookupPath(_0x65a43a, {
        parent: true
      });
      var _0x2779c8 = _0x1b952b.node;
      var _0x4d63d4 = _0x1ec70c.basename(_0x65a43a);
      var _0x27a310 = _0x1e6cd4.lookupNode(_0x2779c8, _0x4d63d4);
      var _0x2977f5 = _0x1e6cd4.mayDelete(_0x2779c8, _0x4d63d4, false);
      if (_0x2977f5) {
        throw new _0x1e6cd4.ErrnoError(_0x2977f5);
      }
      if (!_0x2779c8.node_ops.unlink) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      if (_0x1e6cd4.isMountpoint(_0x27a310)) {
        throw new _0x1e6cd4.ErrnoError(10);
      }
      try {
        if (_0x1e6cd4.trackingDelegate.willDeletePath) {
          _0x1e6cd4.trackingDelegate.willDeletePath(_0x65a43a);
        }
      } catch (_0x4d804c) {
        _0x551fc8("FS.trackingDelegate['willDeletePath']('" + _0x65a43a + "') threw an exception: " + _0x4d804c.message);
      }
      _0x2779c8.node_ops.unlink(_0x2779c8, _0x4d63d4);
      _0x1e6cd4.destroyNode(_0x27a310);
      try {
        if (_0x1e6cd4.trackingDelegate.onDeletePath) {
          _0x1e6cd4.trackingDelegate.onDeletePath(_0x65a43a);
        }
      } catch (_0x4fe3d8) {
        _0x551fc8("FS.trackingDelegate['onDeletePath']('" + _0x65a43a + "') threw an exception: " + _0x4fe3d8.message);
      }
    },
    readlink: function (_0x4842b9) {
      var _0x725a80 = _0x1e6cd4.lookupPath(_0x4842b9);
      var _0x401730 = _0x725a80.node;
      if (!_0x401730) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      if (!_0x401730.node_ops.readlink) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      return _0x35eb8a.resolve(_0x1e6cd4.getPath(_0x401730.parent), _0x401730.node_ops.readlink(_0x401730));
    },
    stat: function (_0x92fa13, _0x328c3b) {
      var _0x12783f = _0x1e6cd4.lookupPath(_0x92fa13, {
        follow: !_0x328c3b
      });
      var _0x2e3a27 = _0x12783f.node;
      if (!_0x2e3a27) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      if (!_0x2e3a27.node_ops.getattr) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      return _0x2e3a27.node_ops.getattr(_0x2e3a27);
    },
    lstat: function (_0x15f0fe) {
      return _0x1e6cd4.stat(_0x15f0fe, true);
    },
    chmod: function (_0x116973, _0xf95484, _0x31bde2) {
      var _0x440287;
      if (typeof _0x116973 === "string") {
        var _0x3d5b7a = _0x1e6cd4.lookupPath(_0x116973, {
          follow: !_0x31bde2
        });
        _0x440287 = _0x3d5b7a.node;
      } else {
        _0x440287 = _0x116973;
      }
      if (!_0x440287.node_ops.setattr) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      _0x440287.node_ops.setattr(_0x440287, {
        mode: _0xf95484 & 4095 | _0x440287.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x2c034d, _0x45776b) {
      _0x1e6cd4.chmod(_0x2c034d, _0x45776b, true);
    },
    fchmod: function (_0x3be47a, _0x2bce6c) {
      var _0x933c70 = _0x1e6cd4.getStream(_0x3be47a);
      if (!_0x933c70) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      _0x1e6cd4.chmod(_0x933c70.node, _0x2bce6c);
    },
    chown: function (_0xb2ea7a, _0x3d6889, _0x463505, _0x35ec16) {
      var _0x1d9ef4;
      if (typeof _0xb2ea7a === "string") {
        var _0x56500b = _0x1e6cd4.lookupPath(_0xb2ea7a, {
          follow: !_0x35ec16
        });
        _0x1d9ef4 = _0x56500b.node;
      } else {
        _0x1d9ef4 = _0xb2ea7a;
      }
      if (!_0x1d9ef4.node_ops.setattr) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      _0x1d9ef4.node_ops.setattr(_0x1d9ef4, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x1f786b, _0x533ad7, _0x26b341) {
      _0x1e6cd4.chown(_0x1f786b, _0x533ad7, _0x26b341, true);
    },
    fchown: function (_0x1e11dc, _0x32d72a, _0x73d36b) {
      var _0x23dfc6 = _0x1e6cd4.getStream(_0x1e11dc);
      if (!_0x23dfc6) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      _0x1e6cd4.chown(_0x23dfc6.node, _0x32d72a, _0x73d36b);
    },
    truncate: function (_0x2c4375, _0x4e49ea) {
      if (_0x4e49ea < 0) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      var _0x2aecf8;
      if (typeof _0x2c4375 === "string") {
        var _0x3f38a9 = _0x1e6cd4.lookupPath(_0x2c4375, {
          follow: true
        });
        _0x2aecf8 = _0x3f38a9.node;
      } else {
        _0x2aecf8 = _0x2c4375;
      }
      if (!_0x2aecf8.node_ops.setattr) {
        throw new _0x1e6cd4.ErrnoError(63);
      }
      if (_0x1e6cd4.isDir(_0x2aecf8.mode)) {
        throw new _0x1e6cd4.ErrnoError(31);
      }
      if (!_0x1e6cd4.isFile(_0x2aecf8.mode)) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      var _0xfaa8cc = _0x1e6cd4.nodePermissions(_0x2aecf8, "w");
      if (_0xfaa8cc) {
        throw new _0x1e6cd4.ErrnoError(_0xfaa8cc);
      }
      _0x2aecf8.node_ops.setattr(_0x2aecf8, {
        size: _0x4e49ea,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x578904, _0x13529b) {
      var _0x2197a8 = _0x1e6cd4.getStream(_0x578904);
      if (!_0x2197a8) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if ((_0x2197a8.flags & 2097155) === 0) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      _0x1e6cd4.truncate(_0x2197a8.node, _0x13529b);
    },
    utime: function (_0x837ddb, _0x514894, _0x5ef08f) {
      var _0x4973a5 = _0x1e6cd4.lookupPath(_0x837ddb, {
        follow: true
      });
      var _0x462e3a = _0x4973a5.node;
      _0x462e3a.node_ops.setattr(_0x462e3a, {
        timestamp: Math.max(_0x514894, _0x5ef08f)
      });
    },
    open: function (_0x53d3dc, _0x1d74c9, _0x2feb73, _0x54a2d1, _0x5721f2) {
      if (_0x53d3dc === "") {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      _0x1d74c9 = typeof _0x1d74c9 === "string" ? _0x1e6cd4.modeStringToFlags(_0x1d74c9) : _0x1d74c9;
      _0x2feb73 = typeof _0x2feb73 === "undefined" ? 438 : _0x2feb73;
      if (_0x1d74c9 & 64) {
        _0x2feb73 = _0x2feb73 & 4095 | 32768;
      } else {
        _0x2feb73 = 0;
      }
      var _0x50144e;
      if (typeof _0x53d3dc === "object") {
        _0x50144e = _0x53d3dc;
      } else {
        _0x53d3dc = _0x1ec70c.normalize(_0x53d3dc);
        try {
          var _0x2c5089 = _0x1e6cd4.lookupPath(_0x53d3dc, {
            follow: !(_0x1d74c9 & 131072)
          });
          _0x50144e = _0x2c5089.node;
        } catch (_0x31db58) {}
      }
      var _0x302149 = false;
      if (_0x1d74c9 & 64) {
        if (_0x50144e) {
          if (_0x1d74c9 & 128) {
            throw new _0x1e6cd4.ErrnoError(20);
          }
        } else {
          _0x50144e = _0x1e6cd4.mknod(_0x53d3dc, _0x2feb73, 0);
          _0x302149 = true;
        }
      }
      if (!_0x50144e) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      if (_0x1e6cd4.isChrdev(_0x50144e.mode)) {
        _0x1d74c9 &= ~512;
      }
      if (_0x1d74c9 & 65536 && !_0x1e6cd4.isDir(_0x50144e.mode)) {
        throw new _0x1e6cd4.ErrnoError(54);
      }
      if (!_0x302149) {
        var _0x54f1b1 = _0x1e6cd4.mayOpen(_0x50144e, _0x1d74c9);
        if (_0x54f1b1) {
          throw new _0x1e6cd4.ErrnoError(_0x54f1b1);
        }
      }
      if (_0x1d74c9 & 512) {
        _0x1e6cd4.truncate(_0x50144e, 0);
      }
      _0x1d74c9 &= ~131712;
      var _0x44f689 = _0x1e6cd4.createStream({
        node: _0x50144e,
        path: _0x1e6cd4.getPath(_0x50144e),
        flags: _0x1d74c9,
        seekable: true,
        position: 0,
        stream_ops: _0x50144e.stream_ops,
        ungotten: [],
        error: false
      }, _0x54a2d1, _0x5721f2);
      if (_0x44f689.stream_ops.open) {
        _0x44f689.stream_ops.open(_0x44f689);
      }
      if (_0xc94e0.logReadFiles && !(_0x1d74c9 & 1)) {
        if (!_0x1e6cd4.readFiles) {
          _0x1e6cd4.readFiles = {};
        }
        if (!(_0x53d3dc in _0x1e6cd4.readFiles)) {
          _0x1e6cd4.readFiles[_0x53d3dc] = 1;
          _0x551fc8("FS.trackingDelegate error on read file: " + _0x53d3dc);
        }
      }
      try {
        if (_0x1e6cd4.trackingDelegate.onOpenFile) {
          var _0x4de48e = 0;
          if ((_0x1d74c9 & 2097155) !== 1) {
            _0x4de48e |= _0x1e6cd4.tracking.openFlags.READ;
          }
          if ((_0x1d74c9 & 2097155) !== 0) {
            _0x4de48e |= _0x1e6cd4.tracking.openFlags.WRITE;
          }
          _0x1e6cd4.trackingDelegate.onOpenFile(_0x53d3dc, _0x4de48e);
        }
      } catch (_0xf56bb) {
        _0x551fc8("FS.trackingDelegate['onOpenFile']('" + _0x53d3dc + "', flags) threw an exception: " + _0xf56bb.message);
      }
      return _0x44f689;
    },
    close: function (_0x4e8336) {
      if (_0x1e6cd4.isClosed(_0x4e8336)) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if (_0x4e8336.getdents) {
        _0x4e8336.getdents = null;
      }
      try {
        if (_0x4e8336.stream_ops.close) {
          _0x4e8336.stream_ops.close(_0x4e8336);
        }
      } catch (_0x5b4517) {
        throw _0x5b4517;
      } finally {
        _0x1e6cd4.closeStream(_0x4e8336.fd);
      }
      _0x4e8336.fd = null;
    },
    isClosed: function (_0x3b2938) {
      return _0x3b2938.fd === null;
    },
    llseek: function (_0x46cf32, _0x563762, _0x1ae800) {
      if (_0x1e6cd4.isClosed(_0x46cf32)) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if (!_0x46cf32.seekable || !_0x46cf32.stream_ops.llseek) {
        throw new _0x1e6cd4.ErrnoError(70);
      }
      if (_0x1ae800 != 0 && _0x1ae800 != 1 && _0x1ae800 != 2) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      _0x46cf32.position = _0x46cf32.stream_ops.llseek(_0x46cf32, _0x563762, _0x1ae800);
      _0x46cf32.ungotten = [];
      return _0x46cf32.position;
    },
    read: function (_0x1cb705, _0x343bf0, _0x1622f6, _0x32401b, _0x2bf458) {
      if (_0x32401b < 0 || _0x2bf458 < 0) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      if (_0x1e6cd4.isClosed(_0x1cb705)) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if ((_0x1cb705.flags & 2097155) === 1) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if (_0x1e6cd4.isDir(_0x1cb705.node.mode)) {
        throw new _0x1e6cd4.ErrnoError(31);
      }
      if (!_0x1cb705.stream_ops.read) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      var _0x74ee1d = typeof _0x2bf458 !== "undefined";
      if (!_0x74ee1d) {
        _0x2bf458 = _0x1cb705.position;
      } else if (!_0x1cb705.seekable) {
        throw new _0x1e6cd4.ErrnoError(70);
      }
      var _0x3a3290 = _0x1cb705.stream_ops.read(_0x1cb705, _0x343bf0, _0x1622f6, _0x32401b, _0x2bf458);
      if (!_0x74ee1d) {
        _0x1cb705.position += _0x3a3290;
      }
      return _0x3a3290;
    },
    write: function (_0x2d6b0f, _0x2fc912, _0x3d190e, _0x3ce7a7, _0x59b991, _0x4dc47d) {
      if (_0x3ce7a7 < 0 || _0x59b991 < 0) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      if (_0x1e6cd4.isClosed(_0x2d6b0f)) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if ((_0x2d6b0f.flags & 2097155) === 0) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if (_0x1e6cd4.isDir(_0x2d6b0f.node.mode)) {
        throw new _0x1e6cd4.ErrnoError(31);
      }
      if (!_0x2d6b0f.stream_ops.write) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      if (_0x2d6b0f.seekable && _0x2d6b0f.flags & 1024) {
        _0x1e6cd4.llseek(_0x2d6b0f, 0, 2);
      }
      var _0x516440 = typeof _0x59b991 !== "undefined";
      if (!_0x516440) {
        _0x59b991 = _0x2d6b0f.position;
      } else if (!_0x2d6b0f.seekable) {
        throw new _0x1e6cd4.ErrnoError(70);
      }
      var _0x896e43 = _0x2d6b0f.stream_ops.write(_0x2d6b0f, _0x2fc912, _0x3d190e, _0x3ce7a7, _0x59b991, _0x4dc47d);
      if (!_0x516440) {
        _0x2d6b0f.position += _0x896e43;
      }
      try {
        if (_0x2d6b0f.path && _0x1e6cd4.trackingDelegate.onWriteToFile) {
          _0x1e6cd4.trackingDelegate.onWriteToFile(_0x2d6b0f.path);
        }
      } catch (_0xe347b1) {
        _0x551fc8("FS.trackingDelegate['onWriteToFile']('" + _0x2d6b0f.path + "') threw an exception: " + _0xe347b1.message);
      }
      return _0x896e43;
    },
    allocate: function (_0x5bb96f, _0x5ce26e, _0x5f336f) {
      if (_0x1e6cd4.isClosed(_0x5bb96f)) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if (_0x5ce26e < 0 || _0x5f336f <= 0) {
        throw new _0x1e6cd4.ErrnoError(28);
      }
      if ((_0x5bb96f.flags & 2097155) === 0) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      if (!_0x1e6cd4.isFile(_0x5bb96f.node.mode) && !_0x1e6cd4.isDir(_0x5bb96f.node.mode)) {
        throw new _0x1e6cd4.ErrnoError(43);
      }
      if (!_0x5bb96f.stream_ops.allocate) {
        throw new _0x1e6cd4.ErrnoError(138);
      }
      _0x5bb96f.stream_ops.allocate(_0x5bb96f, _0x5ce26e, _0x5f336f);
    },
    mmap: function (_0x570d6a, _0x23836d, _0x43235a, _0x387b0e, _0x3d04e0, _0x55b5ec) {
      if ((_0x3d04e0 & 2) !== 0 && (_0x55b5ec & 2) === 0 && (_0x570d6a.flags & 2097155) !== 2) {
        throw new _0x1e6cd4.ErrnoError(2);
      }
      if ((_0x570d6a.flags & 2097155) === 1) {
        throw new _0x1e6cd4.ErrnoError(2);
      }
      if (!_0x570d6a.stream_ops.mmap) {
        throw new _0x1e6cd4.ErrnoError(43);
      }
      return _0x570d6a.stream_ops.mmap(_0x570d6a, _0x23836d, _0x43235a, _0x387b0e, _0x3d04e0, _0x55b5ec);
    },
    msync: function (_0x2e1e2f, _0x15104b, _0x3fb733, _0x12cd4d, _0x3acf3f) {
      if (!_0x2e1e2f || !_0x2e1e2f.stream_ops.msync) {
        return 0;
      }
      return _0x2e1e2f.stream_ops.msync(_0x2e1e2f, _0x15104b, _0x3fb733, _0x12cd4d, _0x3acf3f);
    },
    munmap: function (_0x1d4e5e) {
      return 0;
    },
    ioctl: function (_0x3f0639, _0x19eb37, _0x1b5f2c) {
      if (!_0x3f0639.stream_ops.ioctl) {
        throw new _0x1e6cd4.ErrnoError(59);
      }
      return _0x3f0639.stream_ops.ioctl(_0x3f0639, _0x19eb37, _0x1b5f2c);
    },
    readFile: function (_0x55e447, _0x1e1156) {
      _0x1e1156 = _0x1e1156 || {};
      _0x1e1156.flags = _0x1e1156.flags || 0;
      _0x1e1156.encoding = _0x1e1156.encoding || "binary";
      if (_0x1e1156.encoding !== "utf8" && _0x1e1156.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x1e1156.encoding + "\"");
      }
      var _0x13544b;
      var _0xac5a8d = _0x1e6cd4.open(_0x55e447, _0x1e1156.flags);
      var _0x28c92f = _0x1e6cd4.stat(_0x55e447);
      var _0x4fde9f = _0x28c92f.size;
      var _0x3bceb8 = new Uint8Array(_0x4fde9f);
      _0x1e6cd4.read(_0xac5a8d, _0x3bceb8, 0, _0x4fde9f, 0);
      if (_0x1e1156.encoding === "utf8") {
        _0x13544b = _0x31b174(_0x3bceb8, 0);
      } else if (_0x1e1156.encoding === "binary") {
        _0x13544b = _0x3bceb8;
      }
      _0x1e6cd4.close(_0xac5a8d);
      return _0x13544b;
    },
    writeFile: function (_0x3c47c7, _0x1444cd, _0x2ef476) {
      _0x2ef476 = _0x2ef476 || {};
      _0x2ef476.flags = _0x2ef476.flags || 577;
      var _0x27515a = _0x1e6cd4.open(_0x3c47c7, _0x2ef476.flags, _0x2ef476.mode);
      if (typeof _0x1444cd === "string") {
        var _0x43961e = new Uint8Array(_0x356cec(_0x1444cd) + 1);
        var _0x5cf7df = _0x5291de(_0x1444cd, _0x43961e, 0, _0x43961e.length);
        _0x1e6cd4.write(_0x27515a, _0x43961e, 0, _0x5cf7df, undefined, _0x2ef476.canOwn);
      } else if (ArrayBuffer.isView(_0x1444cd)) {
        _0x1e6cd4.write(_0x27515a, _0x1444cd, 0, _0x1444cd.byteLength, undefined, _0x2ef476.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x1e6cd4.close(_0x27515a);
    },
    cwd: function () {
      return _0x1e6cd4.currentPath;
    },
    chdir: function (_0x4a9bec) {
      var _0x5069e7 = _0x1e6cd4.lookupPath(_0x4a9bec, {
        follow: true
      });
      if (_0x5069e7.node === null) {
        throw new _0x1e6cd4.ErrnoError(44);
      }
      if (!_0x1e6cd4.isDir(_0x5069e7.node.mode)) {
        throw new _0x1e6cd4.ErrnoError(54);
      }
      var _0x42ec10 = _0x1e6cd4.nodePermissions(_0x5069e7.node, "x");
      if (_0x42ec10) {
        throw new _0x1e6cd4.ErrnoError(_0x42ec10);
      }
      _0x1e6cd4.currentPath = _0x5069e7.path;
    },
    createDefaultDirectories: function () {
      _0x1e6cd4.mkdir("/tmp");
      _0x1e6cd4.mkdir("/home");
      _0x1e6cd4.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x1e6cd4.mkdir("/dev");
      _0x1e6cd4.registerDevice(_0x1e6cd4.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x3ebb60, _0x1c336d, _0x3bf5c1, _0x100333, _0x586828) {
          return _0x100333;
        }
      });
      _0x1e6cd4.mkdev("/dev/null", _0x1e6cd4.makedev(1, 3));
      _0x394d19.register(_0x1e6cd4.makedev(5, 0), _0x394d19.default_tty_ops);
      _0x394d19.register(_0x1e6cd4.makedev(6, 0), _0x394d19.default_tty1_ops);
      _0x1e6cd4.mkdev("/dev/tty", _0x1e6cd4.makedev(5, 0));
      _0x1e6cd4.mkdev("/dev/tty1", _0x1e6cd4.makedev(6, 0));
      var _0x3c93ae = _0x399012();
      _0x1e6cd4.createDevice("/dev", "random", _0x3c93ae);
      _0x1e6cd4.createDevice("/dev", "urandom", _0x3c93ae);
      _0x1e6cd4.mkdir("/dev/shm");
      _0x1e6cd4.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x1e6cd4.mkdir("/proc");
      var _0x2dea1f = _0x1e6cd4.mkdir("/proc/self");
      _0x1e6cd4.mkdir("/proc/self/fd");
      _0x1e6cd4.mount({
        mount: function () {
          var _0x6fde44 = _0x1e6cd4.createNode(_0x2dea1f, "fd", 16895, 73);
          _0x6fde44.node_ops = {
            lookup: function (_0x376426, _0x3ccbe4) {
              var _0x3aa34a = +_0x3ccbe4;
              var _0x2c7f20 = _0x1e6cd4.getStream(_0x3aa34a);
              if (!_0x2c7f20) {
                throw new _0x1e6cd4.ErrnoError(8);
              }
              var _0x1cc99b = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x2c7f20.path;
                  }
                }
              };
              _0x1cc99b.parent = _0x1cc99b;
              return _0x1cc99b;
            }
          };
          return _0x6fde44;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0xc94e0.stdin) {
        _0x1e6cd4.createDevice("/dev", "stdin", _0xc94e0.stdin);
      } else {
        _0x1e6cd4.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0xc94e0.stdout) {
        _0x1e6cd4.createDevice("/dev", "stdout", null, _0xc94e0.stdout);
      } else {
        _0x1e6cd4.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0xc94e0.stderr) {
        _0x1e6cd4.createDevice("/dev", "stderr", null, _0xc94e0.stderr);
      } else {
        _0x1e6cd4.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x2c6a7e = _0x1e6cd4.open("/dev/stdin", 0);
      var _0x3ca390 = _0x1e6cd4.open("/dev/stdout", 1);
      var _0x40fde7 = _0x1e6cd4.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x1e6cd4.ErrnoError) {
        return;
      }
      _0x1e6cd4.ErrnoError = function _0x102b94(_0x5e8774, _0x457d13) {
        this.node = _0x457d13;
        this.setErrno = function (_0x1cf6ac) {
          this.errno = _0x1cf6ac;
        };
        this.setErrno(_0x5e8774);
        this.message = "FS error";
      };
      _0x1e6cd4.ErrnoError.prototype = new Error();
      _0x1e6cd4.ErrnoError.prototype.constructor = _0x1e6cd4.ErrnoError;
      [44].forEach(function (_0x2d9b29) {
        _0x1e6cd4.genericErrors[_0x2d9b29] = new _0x1e6cd4.ErrnoError(_0x2d9b29);
        _0x1e6cd4.genericErrors[_0x2d9b29].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x1e6cd4.ensureErrnoError();
      _0x1e6cd4.nameTable = new Array(4096);
      _0x1e6cd4.mount(_0x2be4a0, {}, "/");
      _0x1e6cd4.createDefaultDirectories();
      _0x1e6cd4.createDefaultDevices();
      _0x1e6cd4.createSpecialDirectories();
      _0x1e6cd4.filesystems = {
        MEMFS: _0x2be4a0,
        IDBFS: _0x42af0e
      };
    },
    init: function (_0x33421b, _0x2ccdb8, _0x1580d2) {
      _0x1e6cd4.init.initialized = true;
      _0x1e6cd4.ensureErrnoError();
      _0xc94e0.stdin = _0x33421b || _0xc94e0.stdin;
      _0xc94e0.stdout = _0x2ccdb8 || _0xc94e0.stdout;
      _0xc94e0.stderr = _0x1580d2 || _0xc94e0.stderr;
      _0x1e6cd4.createStandardStreams();
    },
    quit: function () {
      _0x1e6cd4.init.initialized = false;
      var _0xd73caf = _0xc94e0._fflush;
      if (_0xd73caf) {
        _0xd73caf(0);
      }
      for (var _0x82165f = 0; _0x82165f < _0x1e6cd4.streams.length; _0x82165f++) {
        var _0x290845 = _0x1e6cd4.streams[_0x82165f];
        if (!_0x290845) {
          continue;
        }
        _0x1e6cd4.close(_0x290845);
      }
    },
    getMode: function (_0x2e25e3, _0x33a5eb) {
      var _0x438d14 = 0;
      if (_0x2e25e3) {
        _0x438d14 |= 365;
      }
      if (_0x33a5eb) {
        _0x438d14 |= 146;
      }
      return _0x438d14;
    },
    findObject: function (_0x64cc5d, _0x232441) {
      var _0x2e590f = _0x1e6cd4.analyzePath(_0x64cc5d, _0x232441);
      if (_0x2e590f.exists) {
        return _0x2e590f.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x302e93, _0x218dbc) {
      try {
        var _0x3e558c = _0x1e6cd4.lookupPath(_0x302e93, {
          follow: !_0x218dbc
        });
        _0x302e93 = _0x3e558c.path;
      } catch (_0xf11df5) {}
      var _0x42b104 = {
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
        var _0x3e558c = _0x1e6cd4.lookupPath(_0x302e93, {
          parent: true
        });
        _0x42b104.parentExists = true;
        _0x42b104.parentPath = _0x3e558c.path;
        _0x42b104.parentObject = _0x3e558c.node;
        _0x42b104.name = _0x1ec70c.basename(_0x302e93);
        _0x3e558c = _0x1e6cd4.lookupPath(_0x302e93, {
          follow: !_0x218dbc
        });
        _0x42b104.exists = true;
        _0x42b104.path = _0x3e558c.path;
        _0x42b104.object = _0x3e558c.node;
        _0x42b104.name = _0x3e558c.node.name;
        _0x42b104.isRoot = _0x3e558c.path === "/";
      } catch (_0x4e59a9) {
        _0x42b104.error = _0x4e59a9.errno;
      }
      return _0x42b104;
    },
    createPath: function (_0x1dba09, _0x361256, _0x342a93, _0xaad2d9) {
      _0x1dba09 = typeof _0x1dba09 === "string" ? _0x1dba09 : _0x1e6cd4.getPath(_0x1dba09);
      var _0xdee293 = _0x361256.split("/").reverse();
      while (_0xdee293.length) {
        var _0x207455 = _0xdee293.pop();
        if (!_0x207455) {
          continue;
        }
        var _0x1acc25 = _0x1ec70c.join2(_0x1dba09, _0x207455);
        try {
          _0x1e6cd4.mkdir(_0x1acc25);
        } catch (_0x255de6) {}
        _0x1dba09 = _0x1acc25;
      }
      return _0x1acc25;
    },
    createFile: function (_0x21a3fa, _0x159640, _0x21702d, _0x4ab26a, _0x5509be) {
      var _0x37018e = _0x1ec70c.join2(typeof _0x21a3fa === "string" ? _0x21a3fa : _0x1e6cd4.getPath(_0x21a3fa), _0x159640);
      var _0x1e6066 = _0x1e6cd4.getMode(_0x4ab26a, _0x5509be);
      return _0x1e6cd4.create(_0x37018e, _0x1e6066);
    },
    createDataFile: function (_0x19d477, _0xf09d89, _0xe0ab2d, _0x10d173, _0x1fe0d3, _0x535bbd) {
      var _0x109466 = _0xf09d89 ? _0x1ec70c.join2(typeof _0x19d477 === "string" ? _0x19d477 : _0x1e6cd4.getPath(_0x19d477), _0xf09d89) : _0x19d477;
      var _0x515c43 = _0x1e6cd4.getMode(_0x10d173, _0x1fe0d3);
      var _0x34cf08 = _0x1e6cd4.create(_0x109466, _0x515c43);
      if (_0xe0ab2d) {
        if (typeof _0xe0ab2d === "string") {
          var _0x1e2b92 = new Array(_0xe0ab2d.length);
          for (var _0x1b8294 = 0, _0xefea81 = _0xe0ab2d.length; _0x1b8294 < _0xefea81; ++_0x1b8294) {
            _0x1e2b92[_0x1b8294] = _0xe0ab2d.charCodeAt(_0x1b8294);
          }
          _0xe0ab2d = _0x1e2b92;
        }
        _0x1e6cd4.chmod(_0x34cf08, _0x515c43 | 146);
        var _0xe3d5e3 = _0x1e6cd4.open(_0x34cf08, 577);
        _0x1e6cd4.write(_0xe3d5e3, _0xe0ab2d, 0, _0xe0ab2d.length, 0, _0x535bbd);
        _0x1e6cd4.close(_0xe3d5e3);
        _0x1e6cd4.chmod(_0x34cf08, _0x515c43);
      }
      return _0x34cf08;
    },
    createDevice: function (_0x31c0a3, _0x42ee95, _0x126b00, _0x5d3db3) {
      var _0x545532 = _0x1ec70c.join2(typeof _0x31c0a3 === "string" ? _0x31c0a3 : _0x1e6cd4.getPath(_0x31c0a3), _0x42ee95);
      var _0x1ee7c9 = _0x1e6cd4.getMode(!!_0x126b00, !!_0x5d3db3);
      if (!_0x1e6cd4.createDevice.major) {
        _0x1e6cd4.createDevice.major = 64;
      }
      var _0x161787 = _0x1e6cd4.makedev(_0x1e6cd4.createDevice.major++, 0);
      _0x1e6cd4.registerDevice(_0x161787, {
        open: function (_0x5a26ee) {
          _0x5a26ee.seekable = false;
        },
        close: function (_0x8989c5) {
          if (_0x5d3db3 && _0x5d3db3.buffer && _0x5d3db3.buffer.length) {
            _0x5d3db3(10);
          }
        },
        read: function (_0x1614ed, _0x1e3b91, _0x851984, _0x230144, _0x192c2f) {
          var _0x2afa2d = 0;
          for (var _0xc65798 = 0; _0xc65798 < _0x230144; _0xc65798++) {
            var _0x122ca3;
            try {
              _0x122ca3 = _0x126b00();
            } catch (_0x3e3717) {
              throw new _0x1e6cd4.ErrnoError(29);
            }
            if (_0x122ca3 === undefined && _0x2afa2d === 0) {
              throw new _0x1e6cd4.ErrnoError(6);
            }
            if (_0x122ca3 === null || _0x122ca3 === undefined) {
              break;
            }
            _0x2afa2d++;
            _0x1e3b91[_0x851984 + _0xc65798] = _0x122ca3;
          }
          if (_0x2afa2d) {
            _0x1614ed.node.timestamp = Date.now();
          }
          return _0x2afa2d;
        },
        write: function (_0x49731c, _0x2817ce, _0x21941e, _0x53cfaa, _0x244f51) {
          for (var _0x5cc897 = 0; _0x5cc897 < _0x53cfaa; _0x5cc897++) {
            try {
              _0x5d3db3(_0x2817ce[_0x21941e + _0x5cc897]);
            } catch (_0x43fc07) {
              throw new _0x1e6cd4.ErrnoError(29);
            }
          }
          if (_0x53cfaa) {
            _0x49731c.node.timestamp = Date.now();
          }
          return _0x5cc897;
        }
      });
      return _0x1e6cd4.mkdev(_0x545532, _0x1ee7c9, _0x161787);
    },
    forceLoadFile: function (_0x17c52d) {
      if (_0x17c52d.isDevice || _0x17c52d.isFolder || _0x17c52d.link || _0x17c52d.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x4d4aa5) {
        try {
          _0x17c52d.contents = _0x37ad12(_0x4d4aa5(_0x17c52d.url), true);
          _0x17c52d.usedBytes = _0x17c52d.contents.length;
        } catch (_0x128760) {
          throw new _0x1e6cd4.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x4d81d9, _0x46e735, _0xa3917d, _0x2c99dd, _0x45d2d6) {
      function _0x23144d() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x23144d.prototype.get = function _0x55d0c6(_0x9d15f6) {
        if (_0x9d15f6 > this.length - 1 || _0x9d15f6 < 0) {
          return undefined;
        }
        var _0x43c3cd = _0x9d15f6 % this.chunkSize;
        var _0x3b5e6c = _0x9d15f6 / this.chunkSize | 0;
        return this.getter(_0x3b5e6c)[_0x43c3cd];
      };
      _0x23144d.prototype.setDataGetter = function _0x221a62(_0x2383f1) {
        this.getter = _0x2383f1;
      };
      _0x23144d.prototype.cacheLength = function _0x243c31() {
        var _0x47e7ee = new XMLHttpRequest();
        _0x47e7ee.open("HEAD", _0xa3917d, false);
        _0x47e7ee.send(null);
        if ((!(_0x47e7ee.status >= 200) || !(_0x47e7ee.status < 300)) && _0x47e7ee.status !== 304) {
          throw new Error("Couldn't load " + _0xa3917d + ". Status: " + _0x47e7ee.status);
        }
        var _0x2a6f2a = Number(_0x47e7ee.getResponseHeader("Content-length"));
        var _0x5c7613;
        var _0x16a1e7 = (_0x5c7613 = _0x47e7ee.getResponseHeader("Accept-Ranges")) && _0x5c7613 === "bytes";
        var _0xaaa5b7 = (_0x5c7613 = _0x47e7ee.getResponseHeader("Content-Encoding")) && _0x5c7613 === "gzip";
        var _0x3af8b9 = 1048576;
        if (!_0x16a1e7) {
          _0x3af8b9 = _0x2a6f2a;
        }
        var _0x315374 = function (_0x3f8ea7, _0x79282b) {
          if (_0x3f8ea7 > _0x79282b) {
            throw new Error("invalid range (" + _0x3f8ea7 + ", " + _0x79282b + ") or no bytes requested!");
          }
          if (_0x79282b > _0x2a6f2a - 1) {
            throw new Error("only " + _0x2a6f2a + " bytes available! programmer error!");
          }
          var _0x298eb1 = new XMLHttpRequest();
          _0x298eb1.open("GET", _0xa3917d, false);
          if (_0x2a6f2a !== _0x3af8b9) {
            _0x298eb1.setRequestHeader("Range", "bytes=" + _0x3f8ea7 + "-" + _0x79282b);
          }
          if (typeof Uint8Array != "undefined") {
            _0x298eb1.responseType = "arraybuffer";
          }
          if (_0x298eb1.overrideMimeType) {
            _0x298eb1.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x298eb1.send(null);
          if ((!(_0x298eb1.status >= 200) || !(_0x298eb1.status < 300)) && _0x298eb1.status !== 304) {
            throw new Error("Couldn't load " + _0xa3917d + ". Status: " + _0x298eb1.status);
          }
          if (_0x298eb1.response !== undefined) {
            return new Uint8Array(_0x298eb1.response || []);
          } else {
            return _0x37ad12(_0x298eb1.responseText || "", true);
          }
        };
        var _0x7bd529 = this;
        _0x7bd529.setDataGetter(function (_0x44c6cc) {
          var _0x4e05bf = _0x44c6cc * _0x3af8b9;
          var _0x12f919 = (_0x44c6cc + 1) * _0x3af8b9 - 1;
          _0x12f919 = Math.min(_0x12f919, _0x2a6f2a - 1);
          if (typeof _0x7bd529.chunks[_0x44c6cc] === "undefined") {
            _0x7bd529.chunks[_0x44c6cc] = _0x315374(_0x4e05bf, _0x12f919);
          }
          if (typeof _0x7bd529.chunks[_0x44c6cc] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x7bd529.chunks[_0x44c6cc];
        });
        if (_0xaaa5b7 || !_0x2a6f2a) {
          _0x3af8b9 = _0x2a6f2a = 1;
          _0x2a6f2a = this.getter(0).length;
          _0x3af8b9 = _0x2a6f2a;
          _0x25d5db("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x2a6f2a;
        this._chunkSize = _0x3af8b9;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0xf7de81) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x3450c0 = new _0x23144d();
        Object.defineProperties(_0x3450c0, {
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
        var _0x493425 = {
          isDevice: false,
          contents: _0x3450c0
        };
      } else {
        var _0x493425 = {
          isDevice: false,
          url: _0xa3917d
        };
      }
      var _0x5a1a40 = _0x1e6cd4.createFile(_0x4d81d9, _0x46e735, _0x493425, _0x2c99dd, _0x45d2d6);
      if (_0x493425.contents) {
        _0x5a1a40.contents = _0x493425.contents;
      } else if (_0x493425.url) {
        _0x5a1a40.contents = null;
        _0x5a1a40.url = _0x493425.url;
      }
      Object.defineProperties(_0x5a1a40, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x19fd59 = {};
      var _0x40f845 = Object.keys(_0x5a1a40.stream_ops);
      _0x40f845.forEach(function (_0xd40057) {
        var _0x124a0b = _0x5a1a40.stream_ops[_0xd40057];
        _0x19fd59[_0xd40057] = function _0x195d0c() {
          _0x1e6cd4.forceLoadFile(_0x5a1a40);
          return _0x124a0b.apply(null, arguments);
        };
      });
      _0x19fd59.read = function _0x3f06bc(_0x58f50e, _0x54777c, _0x1669fb, _0x2de422, _0x4d9d0f) {
        _0x1e6cd4.forceLoadFile(_0x5a1a40);
        var _0x12baa8 = _0x58f50e.node.contents;
        if (_0x4d9d0f >= _0x12baa8.length) {
          return 0;
        }
        var _0x3c5390 = Math.min(_0x12baa8.length - _0x4d9d0f, _0x2de422);
        if (_0x12baa8.slice) {
          for (var _0x3dbd84 = 0; _0x3dbd84 < _0x3c5390; _0x3dbd84++) {
            _0x54777c[_0x1669fb + _0x3dbd84] = _0x12baa8[_0x4d9d0f + _0x3dbd84];
          }
        } else {
          for (var _0x3dbd84 = 0; _0x3dbd84 < _0x3c5390; _0x3dbd84++) {
            _0x54777c[_0x1669fb + _0x3dbd84] = _0x12baa8.get(_0x4d9d0f + _0x3dbd84);
          }
        }
        return _0x3c5390;
      };
      _0x5a1a40.stream_ops = _0x19fd59;
      return _0x5a1a40;
    },
    createPreloadedFile: function (_0x5df91d, _0x8bc21, _0x2d82ea, _0x279e73, _0x46731a, _0x5d836f, _0x41f9cd, _0x4b8f7f, _0x46c51b, _0x137207) {
      _0x32b533.init();
      var _0x305f36 = _0x8bc21 ? _0x35eb8a.resolve(_0x1ec70c.join2(_0x5df91d, _0x8bc21)) : _0x5df91d;
      var _0x1932d7 = _0x4e7ec8("cp " + _0x305f36);
      function _0x3feb2a(_0x2adfde) {
        function _0xc7e9d9(_0x2ffa4a) {
          if (_0x137207) {
            _0x137207();
          }
          if (!_0x4b8f7f) {
            _0x1e6cd4.createDataFile(_0x5df91d, _0x8bc21, _0x2ffa4a, _0x279e73, _0x46731a, _0x46c51b);
          }
          if (_0x5d836f) {
            _0x5d836f();
          }
          _0x3ac9a4(_0x1932d7);
        }
        var _0x3ecfc9 = false;
        _0xc94e0.preloadPlugins.forEach(function (_0x18b8c4) {
          if (_0x3ecfc9) {
            return;
          }
          if (_0x18b8c4.canHandle(_0x305f36)) {
            _0x18b8c4.handle(_0x2adfde, _0x305f36, _0xc7e9d9, function () {
              if (_0x41f9cd) {
                _0x41f9cd();
              }
              _0x3ac9a4(_0x1932d7);
            });
            _0x3ecfc9 = true;
          }
        });
        if (!_0x3ecfc9) {
          _0xc7e9d9(_0x2adfde);
        }
      }
      _0x228ea(_0x1932d7);
      if (typeof _0x2d82ea == "string") {
        _0x32b533.asyncLoad(_0x2d82ea, function (_0x4b8e2c) {
          _0x3feb2a(_0x4b8e2c);
        }, _0x41f9cd);
      } else {
        _0x3feb2a(_0x2d82ea);
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
    saveFilesToDB: function (_0x25799d, _0x430e6d, _0x22dfab) {
      _0x430e6d = _0x430e6d || function () {};
      _0x22dfab = _0x22dfab || function () {};
      var _0xb365bf = _0x1e6cd4.indexedDB();
      try {
        var _0x9c4743 = _0xb365bf.open(_0x1e6cd4.DB_NAME(), _0x1e6cd4.DB_VERSION);
      } catch (_0x32972d) {
        return _0x22dfab(_0x32972d);
      }
      _0x9c4743.onupgradeneeded = function _0x47d0bf() {
        _0x25d5db("creating db");
        var _0x28aa7d = _0x9c4743.result;
        _0x28aa7d.createObjectStore(_0x1e6cd4.DB_STORE_NAME);
      };
      _0x9c4743.onsuccess = function _0x589b5() {
        var _0x44ebdf = _0x9c4743.result;
        var _0x5b7f1d = _0x44ebdf.transaction([_0x1e6cd4.DB_STORE_NAME], "readwrite");
        var _0x647d2d = _0x5b7f1d.objectStore(_0x1e6cd4.DB_STORE_NAME);
        var _0x5f0334 = 0;
        var _0x30e947 = 0;
        var _0x75e1b1 = _0x25799d.length;
        function _0x44516e() {
          if (_0x30e947 == 0) {
            _0x430e6d();
          } else {
            _0x22dfab();
          }
        }
        _0x25799d.forEach(function (_0x25baf3) {
          var _0x3170de = _0x647d2d.put(_0x1e6cd4.analyzePath(_0x25baf3).object.contents, _0x25baf3);
          _0x3170de.onsuccess = function _0x430a66() {
            _0x5f0334++;
            if (_0x5f0334 + _0x30e947 == _0x75e1b1) {
              _0x44516e();
            }
          };
          _0x3170de.onerror = function _0x1f61da() {
            _0x30e947++;
            if (_0x5f0334 + _0x30e947 == _0x75e1b1) {
              _0x44516e();
            }
          };
        });
        _0x5b7f1d.onerror = _0x22dfab;
      };
      _0x9c4743.onerror = _0x22dfab;
    },
    loadFilesFromDB: function (_0x1e1533, _0x45eea, _0x317d05) {
      _0x45eea = _0x45eea || function () {};
      _0x317d05 = _0x317d05 || function () {};
      var _0x10674f = _0x1e6cd4.indexedDB();
      try {
        var _0x12af23 = _0x10674f.open(_0x1e6cd4.DB_NAME(), _0x1e6cd4.DB_VERSION);
      } catch (_0x243802) {
        return _0x317d05(_0x243802);
      }
      _0x12af23.onupgradeneeded = _0x317d05;
      _0x12af23.onsuccess = function _0x40d62b() {
        var _0x18384f = _0x12af23.result;
        try {
          var _0x615e83 = _0x18384f.transaction([_0x1e6cd4.DB_STORE_NAME], "readonly");
        } catch (_0x4f3846) {
          _0x317d05(_0x4f3846);
          return;
        }
        var _0x5945e3 = _0x615e83.objectStore(_0x1e6cd4.DB_STORE_NAME);
        var _0x4c0ebc = 0;
        var _0x42a32f = 0;
        var _0x4a36e4 = _0x1e1533.length;
        function _0x5e9138() {
          if (_0x42a32f == 0) {
            _0x45eea();
          } else {
            _0x317d05();
          }
        }
        _0x1e1533.forEach(function (_0x453d06) {
          var _0x5b97ae = _0x5945e3.get(_0x453d06);
          _0x5b97ae.onsuccess = function _0x3f0d6b() {
            if (_0x1e6cd4.analyzePath(_0x453d06).exists) {
              _0x1e6cd4.unlink(_0x453d06);
            }
            _0x1e6cd4.createDataFile(_0x1ec70c.dirname(_0x453d06), _0x1ec70c.basename(_0x453d06), _0x5b97ae.result, true, true, true);
            _0x4c0ebc++;
            if (_0x4c0ebc + _0x42a32f == _0x4a36e4) {
              _0x5e9138();
            }
          };
          _0x5b97ae.onerror = function _0x5795e2() {
            _0x42a32f++;
            if (_0x4c0ebc + _0x42a32f == _0x4a36e4) {
              _0x5e9138();
            }
          };
        });
        _0x615e83.onerror = _0x317d05;
      };
      _0x12af23.onerror = _0x317d05;
    }
  };
  var _0x1ac5a3 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x2b1332, _0x525c06, _0xf4e80c) {
      if (_0x525c06[0] === "/") {
        return _0x525c06;
      }
      var _0x51be76;
      if (_0x2b1332 === -100) {
        _0x51be76 = _0x1e6cd4.cwd();
      } else {
        var _0x2f0a94 = _0x1e6cd4.getStream(_0x2b1332);
        if (!_0x2f0a94) {
          throw new _0x1e6cd4.ErrnoError(8);
        }
        _0x51be76 = _0x2f0a94.path;
      }
      if (_0x525c06.length == 0) {
        if (!_0xf4e80c) {
          throw new _0x1e6cd4.ErrnoError(44);
        }
        return _0x51be76;
      }
      return _0x1ec70c.join2(_0x51be76, _0x525c06);
    },
    doStat: function (_0x1af245, _0x5b3ce0, _0xf7e482) {
      try {
        var _0x583515 = _0x1af245(_0x5b3ce0);
      } catch (_0x4d5c38) {
        if (_0x4d5c38 && _0x4d5c38.node && _0x1ec70c.normalize(_0x5b3ce0) !== _0x1ec70c.normalize(_0x1e6cd4.getPath(_0x4d5c38.node))) {
          return -54;
        }
        throw _0x4d5c38;
      }
      _0x14d31c[_0xf7e482 >> 2] = _0x583515.dev;
      _0x14d31c[_0xf7e482 + 4 >> 2] = 0;
      _0x14d31c[_0xf7e482 + 8 >> 2] = _0x583515.ino;
      _0x14d31c[_0xf7e482 + 12 >> 2] = _0x583515.mode;
      _0x14d31c[_0xf7e482 + 16 >> 2] = _0x583515.nlink;
      _0x14d31c[_0xf7e482 + 20 >> 2] = _0x583515.uid;
      _0x14d31c[_0xf7e482 + 24 >> 2] = _0x583515.gid;
      _0x14d31c[_0xf7e482 + 28 >> 2] = _0x583515.rdev;
      _0x14d31c[_0xf7e482 + 32 >> 2] = 0;
      _0x5804aa = [_0x583515.size >>> 0, (_0x27094f = _0x583515.size, +Math.abs(_0x27094f) >= 1 ? _0x27094f > 0 ? (Math.min(+Math.floor(_0x27094f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x27094f - +(~~_0x27094f >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x14d31c[_0xf7e482 + 40 >> 2] = _0x5804aa[0];
      _0x14d31c[_0xf7e482 + 44 >> 2] = _0x5804aa[1];
      _0x14d31c[_0xf7e482 + 48 >> 2] = 4096;
      _0x14d31c[_0xf7e482 + 52 >> 2] = _0x583515.blocks;
      _0x14d31c[_0xf7e482 + 56 >> 2] = _0x583515.atime.getTime() / 1000 | 0;
      _0x14d31c[_0xf7e482 + 60 >> 2] = 0;
      _0x14d31c[_0xf7e482 + 64 >> 2] = _0x583515.mtime.getTime() / 1000 | 0;
      _0x14d31c[_0xf7e482 + 68 >> 2] = 0;
      _0x14d31c[_0xf7e482 + 72 >> 2] = _0x583515.ctime.getTime() / 1000 | 0;
      _0x14d31c[_0xf7e482 + 76 >> 2] = 0;
      _0x5804aa = [_0x583515.ino >>> 0, (_0x27094f = _0x583515.ino, +Math.abs(_0x27094f) >= 1 ? _0x27094f > 0 ? (Math.min(+Math.floor(_0x27094f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x27094f - +(~~_0x27094f >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x14d31c[_0xf7e482 + 80 >> 2] = _0x5804aa[0];
      _0x14d31c[_0xf7e482 + 84 >> 2] = _0x5804aa[1];
      return 0;
    },
    doMsync: function (_0x124294, _0x395a92, _0x9a7327, _0x33ecf7, _0x48ff02) {
      var _0x295d39 = _0xb76fd2.slice(_0x124294, _0x124294 + _0x9a7327);
      _0x1e6cd4.msync(_0x395a92, _0x295d39, _0x48ff02, _0x9a7327, _0x33ecf7);
    },
    doMkdir: function (_0xe03e76, _0x46a7a1) {
      _0xe03e76 = _0x1ec70c.normalize(_0xe03e76);
      if (_0xe03e76[_0xe03e76.length - 1] === "/") {
        _0xe03e76 = _0xe03e76.substr(0, _0xe03e76.length - 1);
      }
      _0x1e6cd4.mkdir(_0xe03e76, _0x46a7a1, 0);
      return 0;
    },
    doMknod: function (_0x1f81f4, _0x94653a, _0x4bd870) {
      switch (_0x94653a & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x1e6cd4.mknod(_0x1f81f4, _0x94653a, _0x4bd870);
      return 0;
    },
    doReadlink: function (_0x54b509, _0x3be646, _0x27190e) {
      if (_0x27190e <= 0) {
        return -28;
      }
      var _0x41deaf = _0x1e6cd4.readlink(_0x54b509);
      var _0x50ea7f = Math.min(_0x27190e, _0x356cec(_0x41deaf));
      var _0x5efd82 = _0x133579[_0x3be646 + _0x50ea7f];
      _0x331149(_0x41deaf, _0x3be646, _0x27190e + 1);
      _0x133579[_0x3be646 + _0x50ea7f] = _0x5efd82;
      return _0x50ea7f;
    },
    doAccess: function (_0x3b1c3b, _0xb33f11) {
      if (_0xb33f11 & ~7) {
        return -28;
      }
      var _0x32b21d;
      var _0x5d0d2c = _0x1e6cd4.lookupPath(_0x3b1c3b, {
        follow: true
      });
      _0x32b21d = _0x5d0d2c.node;
      if (!_0x32b21d) {
        return -44;
      }
      var _0x52ca93 = "";
      if (_0xb33f11 & 4) {
        _0x52ca93 += "r";
      }
      if (_0xb33f11 & 2) {
        _0x52ca93 += "w";
      }
      if (_0xb33f11 & 1) {
        _0x52ca93 += "x";
      }
      if (_0x52ca93 && _0x1e6cd4.nodePermissions(_0x32b21d, _0x52ca93)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x78634, _0x14bd4a, _0x13ffe5) {
      var _0x42cee4 = _0x1e6cd4.getStream(_0x13ffe5);
      if (_0x42cee4) {
        _0x1e6cd4.close(_0x42cee4);
      }
      return _0x1e6cd4.open(_0x78634, _0x14bd4a, 0, _0x13ffe5, _0x13ffe5).fd;
    },
    doReadv: function (_0x412c1b, _0xa3c2f6, _0x343488, _0x6475f0) {
      var _0x526517 = 0;
      for (var _0xa6de = 0; _0xa6de < _0x343488; _0xa6de++) {
        var _0x301286 = _0x14d31c[_0xa3c2f6 + _0xa6de * 8 >> 2];
        var _0x1e25d2 = _0x14d31c[_0xa3c2f6 + (_0xa6de * 8 + 4) >> 2];
        var _0x410418 = _0x1e6cd4.read(_0x412c1b, _0x133579, _0x301286, _0x1e25d2, _0x6475f0);
        if (_0x410418 < 0) {
          return -1;
        }
        _0x526517 += _0x410418;
        if (_0x410418 < _0x1e25d2) {
          break;
        }
      }
      return _0x526517;
    },
    doWritev: function (_0x50754d, _0x26b23c, _0x2ffda9, _0x2ad059) {
      var _0x3aa6d7 = 0;
      for (var _0x1d8e50 = 0; _0x1d8e50 < _0x2ffda9; _0x1d8e50++) {
        var _0x4b501a = _0x14d31c[_0x26b23c + _0x1d8e50 * 8 >> 2];
        var _0x184258 = _0x14d31c[_0x26b23c + (_0x1d8e50 * 8 + 4) >> 2];
        var _0x3b788e = _0x1e6cd4.write(_0x50754d, _0x133579, _0x4b501a, _0x184258, _0x2ad059);
        if (_0x3b788e < 0) {
          return -1;
        }
        _0x3aa6d7 += _0x3b788e;
      }
      return _0x3aa6d7;
    },
    varargs: undefined,
    get: function () {
      _0x1ac5a3.varargs += 4;
      var _0x1dd8c9 = _0x14d31c[_0x1ac5a3.varargs - 4 >> 2];
      return _0x1dd8c9;
    },
    getStr: function (_0x1fab9f) {
      var _0x43a6b1 = _0x21e34e(_0x1fab9f);
      return _0x43a6b1;
    },
    getStreamFromFD: function (_0x3b5683) {
      var _0x47c87b = _0x1e6cd4.getStream(_0x3b5683);
      if (!_0x47c87b) {
        throw new _0x1e6cd4.ErrnoError(8);
      }
      return _0x47c87b;
    },
    get64: function (_0x549e2f, _0x184407) {
      return _0x549e2f;
    }
  };
  function _0x4262f0(_0x4afa67, _0x412680, _0x44485b, _0x225d13, _0x12eb38) {
    try {
      var _0x521b10 = 0;
      var _0x591b0f = _0x412680 ? _0x14d31c[_0x412680 >> 2] : 0;
      var _0x13ad06 = _0x412680 ? _0x14d31c[_0x412680 + 4 >> 2] : 0;
      var _0x20cd42 = _0x44485b ? _0x14d31c[_0x44485b >> 2] : 0;
      var _0x302274 = _0x44485b ? _0x14d31c[_0x44485b + 4 >> 2] : 0;
      var _0x37c1b2 = _0x225d13 ? _0x14d31c[_0x225d13 >> 2] : 0;
      var _0x4f6c51 = _0x225d13 ? _0x14d31c[_0x225d13 + 4 >> 2] : 0;
      var _0x43f16d = 0;
      var _0x426b72 = 0;
      var _0x4c5569 = 0;
      var _0x44263 = 0;
      var _0x46df8b = 0;
      var _0xaea68a = 0;
      var _0x369837 = (_0x412680 ? _0x14d31c[_0x412680 >> 2] : 0) | (_0x44485b ? _0x14d31c[_0x44485b >> 2] : 0) | (_0x225d13 ? _0x14d31c[_0x225d13 >> 2] : 0);
      var _0x3b2031 = (_0x412680 ? _0x14d31c[_0x412680 + 4 >> 2] : 0) | (_0x44485b ? _0x14d31c[_0x44485b + 4 >> 2] : 0) | (_0x225d13 ? _0x14d31c[_0x225d13 + 4 >> 2] : 0);
      var _0x595fb5 = function (_0x18f6ba, _0x228ff4, _0x532caf, _0xa2542) {
        if (_0x18f6ba < 32) {
          return _0x228ff4 & _0xa2542;
        } else {
          return _0x532caf & _0xa2542;
        }
      };
      for (var _0xf2e483 = 0; _0xf2e483 < _0x4afa67; _0xf2e483++) {
        var _0xf1dade = 1 << _0xf2e483 % 32;
        if (!_0x595fb5(_0xf2e483, _0x369837, _0x3b2031, _0xf1dade)) {
          continue;
        }
        var _0x7dc08d = _0x1e6cd4.getStream(_0xf2e483);
        if (!_0x7dc08d) {
          throw new _0x1e6cd4.ErrnoError(8);
        }
        var _0x527f0e = _0x1ac5a3.DEFAULT_POLLMASK;
        if (_0x7dc08d.stream_ops.poll) {
          _0x527f0e = _0x7dc08d.stream_ops.poll(_0x7dc08d);
        }
        if (_0x527f0e & 1 && _0x595fb5(_0xf2e483, _0x591b0f, _0x13ad06, _0xf1dade)) {
          if (_0xf2e483 < 32) {
            _0x43f16d = _0x43f16d | _0xf1dade;
          } else {
            _0x426b72 = _0x426b72 | _0xf1dade;
          }
          _0x521b10++;
        }
        if (_0x527f0e & 4 && _0x595fb5(_0xf2e483, _0x20cd42, _0x302274, _0xf1dade)) {
          if (_0xf2e483 < 32) {
            _0x4c5569 = _0x4c5569 | _0xf1dade;
          } else {
            _0x44263 = _0x44263 | _0xf1dade;
          }
          _0x521b10++;
        }
        if (_0x527f0e & 2 && _0x595fb5(_0xf2e483, _0x37c1b2, _0x4f6c51, _0xf1dade)) {
          if (_0xf2e483 < 32) {
            _0x46df8b = _0x46df8b | _0xf1dade;
          } else {
            _0xaea68a = _0xaea68a | _0xf1dade;
          }
          _0x521b10++;
        }
      }
      if (_0x412680) {
        _0x14d31c[_0x412680 >> 2] = _0x43f16d;
        _0x14d31c[_0x412680 + 4 >> 2] = _0x426b72;
      }
      if (_0x44485b) {
        _0x14d31c[_0x44485b >> 2] = _0x4c5569;
        _0x14d31c[_0x44485b + 4 >> 2] = _0x44263;
      }
      if (_0x225d13) {
        _0x14d31c[_0x225d13 >> 2] = _0x46df8b;
        _0x14d31c[_0x225d13 + 4 >> 2] = _0xaea68a;
      }
      return _0x521b10;
    } catch (_0x20fcbb) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x20fcbb instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x20fcbb);
      }
      return -_0x20fcbb.errno;
    }
  }
  var _0x4251af = {
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
  var _0x310d4f = {
    mount: function (_0x2578b7) {
      _0xc94e0.websocket = _0xc94e0.websocket && typeof _0xc94e0.websocket === "object" ? _0xc94e0.websocket : {};
      _0xc94e0.websocket._callbacks = {};
      _0xc94e0.websocket.on = function (_0x2923cf, _0x5ef1a4) {
        if (typeof _0x5ef1a4 === "function") {
          this._callbacks[_0x2923cf] = _0x5ef1a4;
        }
        return this;
      };
      _0xc94e0.websocket.emit = function (_0x332057, _0x3cdd57) {
        if (typeof this._callbacks[_0x332057] === "function") {
          this._callbacks[_0x332057].call(this, _0x3cdd57);
        }
      };
      return _0x1e6cd4.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x246007, _0x26f209, _0x1fb861) {
      _0x26f209 &= ~526336;
      var _0xe0a375 = _0x26f209 == 1;
      if (_0x1fb861) {
        _0x1bfc0b(_0xe0a375 == (_0x1fb861 == 6));
      }
      var _0x9e4998 = {
        family: _0x246007,
        type: _0x26f209,
        protocol: _0x1fb861,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x310d4f.websocket_sock_ops
      };
      var _0x49925f = _0x310d4f.nextname();
      var _0x4c6472 = _0x1e6cd4.createNode(_0x310d4f.root, _0x49925f, 49152, 0);
      _0x4c6472.sock = _0x9e4998;
      var _0x2e9f0b = _0x1e6cd4.createStream({
        path: _0x49925f,
        node: _0x4c6472,
        flags: 2,
        seekable: false,
        stream_ops: _0x310d4f.stream_ops
      });
      _0x9e4998.stream = _0x2e9f0b;
      return _0x9e4998;
    },
    getSocket: function (_0x5d60b0) {
      var _0xfd38ac = _0x1e6cd4.getStream(_0x5d60b0);
      if (!_0xfd38ac || !_0x1e6cd4.isSocket(_0xfd38ac.node.mode)) {
        return null;
      }
      return _0xfd38ac.node.sock;
    },
    stream_ops: {
      poll: function (_0x57047d) {
        var _0x3ddc76 = _0x57047d.node.sock;
        return _0x3ddc76.sock_ops.poll(_0x3ddc76);
      },
      ioctl: function (_0x52ec6c, _0x52f2d3, _0x25cb1a) {
        var _0x3ff563 = _0x52ec6c.node.sock;
        return _0x3ff563.sock_ops.ioctl(_0x3ff563, _0x52f2d3, _0x25cb1a);
      },
      read: function (_0x5339f6, _0x2183d8, _0x286524, _0x128574, _0x2be173) {
        var _0x3c572f = _0x5339f6.node.sock;
        var _0x51799c = _0x3c572f.sock_ops.recvmsg(_0x3c572f, _0x128574);
        if (!_0x51799c) {
          return 0;
        }
        _0x2183d8.set(_0x51799c.buffer, _0x286524);
        return _0x51799c.buffer.length;
      },
      write: function (_0x5efb54, _0x4c1419, _0x34e881, _0x5280e1, _0x26ed5e) {
        var _0x2caa2a = _0x5efb54.node.sock;
        return _0x2caa2a.sock_ops.sendmsg(_0x2caa2a, _0x4c1419, _0x34e881, _0x5280e1);
      },
      close: function (_0xdfa223) {
        var _0x11f241 = _0xdfa223.node.sock;
        _0x11f241.sock_ops.close(_0x11f241);
      }
    },
    nextname: function () {
      if (!_0x310d4f.nextname.current) {
        _0x310d4f.nextname.current = 0;
      }
      return "socket[" + _0x310d4f.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x504885, _0x37d199, _0x440fda) {
        var _0x1fe247;
        if (typeof _0x37d199 === "object") {
          _0x1fe247 = _0x37d199;
          _0x37d199 = null;
          _0x440fda = null;
        }
        if (_0x1fe247) {
          if (_0x1fe247._socket) {
            _0x37d199 = _0x1fe247._socket.remoteAddress;
            _0x440fda = _0x1fe247._socket.remotePort;
          } else {
            var _0x2c06f6 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x1fe247.url);
            if (!_0x2c06f6) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x37d199 = _0x2c06f6[1];
            _0x440fda = parseInt(_0x2c06f6[2], 10);
          }
        } else {
          try {
            var _0x414876 = _0xc94e0.websocket && typeof _0xc94e0.websocket === "object";
            var _0x142b3b = "ws:#".replace("#", "//");
            if (_0x414876) {
              if (typeof _0xc94e0.websocket.url === "string") {
                _0x142b3b = _0xc94e0.websocket.url;
              }
            }
            if (_0x142b3b === "ws://" || _0x142b3b === "wss://") {
              var _0x1ee61a = _0x37d199.split("/");
              _0x142b3b = _0x142b3b + _0x1ee61a[0] + ":" + _0x440fda + "/" + _0x1ee61a.slice(1).join("/");
            }
            var _0x58a2ad = "binary";
            if (_0x414876) {
              if (typeof _0xc94e0.websocket.subprotocol === "string") {
                _0x58a2ad = _0xc94e0.websocket.subprotocol;
              }
            }
            var _0x1412bd = undefined;
            if (_0x58a2ad !== "null") {
              _0x58a2ad = _0x58a2ad.replace(/^ +| +$/g, "").split(/ *, */);
              _0x1412bd = _0x50fc22 ? {
                protocol: _0x58a2ad.toString()
              } : _0x58a2ad;
            }
            if (_0x414876 && _0xc94e0.websocket.subprotocol === null) {
              _0x58a2ad = "null";
              _0x1412bd = undefined;
            }
            var _0x12d876;
            if (_0x50fc22) {
              _0x12d876 = require("ws");
            } else {
              _0x12d876 = WebSocket;
            }
            _0x1fe247 = new _0x12d876(_0x142b3b, _0x1412bd);
            _0x1fe247.binaryType = "arraybuffer";
          } catch (_0x47166f) {
            throw new _0x1e6cd4.ErrnoError(_0x4251af.EHOSTUNREACH);
          }
        }
        var _0x578335 = {
          addr: _0x37d199,
          port: _0x440fda,
          socket: _0x1fe247,
          dgram_send_queue: []
        };
        _0x310d4f.websocket_sock_ops.addPeer(_0x504885, _0x578335);
        _0x310d4f.websocket_sock_ops.handlePeerEvents(_0x504885, _0x578335);
        if (_0x504885.type === 2 && typeof _0x504885.sport !== "undefined") {
          _0x578335.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x504885.sport & 65280) >> 8, _0x504885.sport & 255]));
        }
        return _0x578335;
      },
      getPeer: function (_0x1f872e, _0x5537a4, _0x251d05) {
        return _0x1f872e.peers[_0x5537a4 + ":" + _0x251d05];
      },
      addPeer: function (_0x56454c, _0x4b0a79) {
        _0x56454c.peers[_0x4b0a79.addr + ":" + _0x4b0a79.port] = _0x4b0a79;
      },
      removePeer: function (_0x4b32ed, _0x131541) {
        delete _0x4b32ed.peers[_0x131541.addr + ":" + _0x131541.port];
      },
      handlePeerEvents: function (_0x4e6b2f, _0x229e38) {
        var _0x1e45ee = true;
        var _0x46d4e9 = function () {
          _0xc94e0.websocket.emit("open", _0x4e6b2f.stream.fd);
          try {
            var _0x1fe674 = _0x229e38.dgram_send_queue.shift();
            while (_0x1fe674) {
              _0x229e38.socket.send(_0x1fe674);
              _0x1fe674 = _0x229e38.dgram_send_queue.shift();
            }
          } catch (_0x40733e) {
            _0x229e38.socket.close();
          }
        };
        function _0x3f522e(_0x38b103) {
          if (typeof _0x38b103 === "string") {
            var _0xe8ad18 = new TextEncoder();
            _0x38b103 = _0xe8ad18.encode(_0x38b103);
          } else {
            _0x1bfc0b(_0x38b103.byteLength !== undefined);
            if (_0x38b103.byteLength == 0) {
              return;
            } else {
              _0x38b103 = new Uint8Array(_0x38b103);
            }
          }
          var _0x3fa47b = _0x1e45ee;
          _0x1e45ee = false;
          if (_0x3fa47b && _0x38b103.length === 10 && _0x38b103[0] === 255 && _0x38b103[1] === 255 && _0x38b103[2] === 255 && _0x38b103[3] === 255 && _0x38b103[4] === "p".charCodeAt(0) && _0x38b103[5] === "o".charCodeAt(0) && _0x38b103[6] === "r".charCodeAt(0) && _0x38b103[7] === "t".charCodeAt(0)) {
            var _0x3f1ef6 = _0x38b103[8] << 8 | _0x38b103[9];
            _0x310d4f.websocket_sock_ops.removePeer(_0x4e6b2f, _0x229e38);
            _0x229e38.port = _0x3f1ef6;
            _0x310d4f.websocket_sock_ops.addPeer(_0x4e6b2f, _0x229e38);
            return;
          }
          _0x4e6b2f.recv_queue.push({
            addr: _0x229e38.addr,
            port: _0x229e38.port,
            data: _0x38b103
          });
          _0xc94e0.websocket.emit("message", _0x4e6b2f.stream.fd);
        }
        if (_0x50fc22) {
          _0x229e38.socket.on("open", _0x46d4e9);
          _0x229e38.socket.on("message", function (_0x1fad56, _0x2b5d9e) {
            if (!_0x2b5d9e.binary) {
              return;
            }
            _0x3f522e(new Uint8Array(_0x1fad56).buffer);
          });
          _0x229e38.socket.on("close", function () {
            _0xc94e0.websocket.emit("close", _0x4e6b2f.stream.fd);
          });
          _0x229e38.socket.on("error", function (_0x3d123e) {
            _0x4e6b2f.error = _0x4251af.ECONNREFUSED;
            _0xc94e0.websocket.emit("error", [_0x4e6b2f.stream.fd, _0x4e6b2f.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x229e38.socket.onopen = _0x46d4e9;
          _0x229e38.socket.onclose = function () {
            _0xc94e0.websocket.emit("close", _0x4e6b2f.stream.fd);
          };
          _0x229e38.socket.onmessage = function _0x343435(_0x38f9ab) {
            _0x3f522e(_0x38f9ab.data);
          };
          _0x229e38.socket.onerror = function (_0x6d5822) {
            _0x4e6b2f.error = _0x4251af.ECONNREFUSED;
            _0xc94e0.websocket.emit("error", [_0x4e6b2f.stream.fd, _0x4e6b2f.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x148a4f) {
        if (_0x148a4f.type === 1 && _0x148a4f.server) {
          if (_0x148a4f.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x14efd3 = 0;
        var _0x43af80 = _0x148a4f.type === 1 ? _0x310d4f.websocket_sock_ops.getPeer(_0x148a4f, _0x148a4f.daddr, _0x148a4f.dport) : null;
        if (_0x148a4f.recv_queue.length || !_0x43af80 || _0x43af80 && _0x43af80.socket.readyState === _0x43af80.socket.CLOSING || _0x43af80 && _0x43af80.socket.readyState === _0x43af80.socket.CLOSED) {
          _0x14efd3 |= 65;
        }
        if (!_0x43af80 || _0x43af80 && _0x43af80.socket.readyState === _0x43af80.socket.OPEN) {
          _0x14efd3 |= 4;
        }
        if (_0x43af80 && _0x43af80.socket.readyState === _0x43af80.socket.CLOSING || _0x43af80 && _0x43af80.socket.readyState === _0x43af80.socket.CLOSED) {
          _0x14efd3 |= 16;
        }
        return _0x14efd3;
      },
      ioctl: function (_0x540dac, _0x28fe16, _0x435447) {
        switch (_0x28fe16) {
          case 21531:
            var _0x2b26a0 = 0;
            if (_0x540dac.recv_queue.length) {
              _0x2b26a0 = _0x540dac.recv_queue[0].data.length;
            }
            _0x14d31c[_0x435447 >> 2] = _0x2b26a0;
            return 0;
          default:
            return _0x4251af.EINVAL;
        }
      },
      close: function (_0x4f89c1) {
        if (_0x4f89c1.server) {
          try {
            _0x4f89c1.server.close();
          } catch (_0x5af0e8) {}
          _0x4f89c1.server = null;
        }
        var _0x238fc2 = Object.keys(_0x4f89c1.peers);
        for (var _0x3743b5 = 0; _0x3743b5 < _0x238fc2.length; _0x3743b5++) {
          var _0x385f13 = _0x4f89c1.peers[_0x238fc2[_0x3743b5]];
          try {
            _0x385f13.socket.close();
          } catch (_0x5518ad) {}
          _0x310d4f.websocket_sock_ops.removePeer(_0x4f89c1, _0x385f13);
        }
        return 0;
      },
      bind: function (_0x2309e1, _0x51dff8, _0x212093) {
        if (typeof _0x2309e1.saddr !== "undefined" || typeof _0x2309e1.sport !== "undefined") {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EINVAL);
        }
        _0x2309e1.saddr = _0x51dff8;
        _0x2309e1.sport = _0x212093;
        if (_0x2309e1.type === 2) {
          if (_0x2309e1.server) {
            _0x2309e1.server.close();
            _0x2309e1.server = null;
          }
          try {
            _0x2309e1.sock_ops.listen(_0x2309e1, 0);
          } catch (_0xc21c53) {
            if (!(_0xc21c53 instanceof _0x1e6cd4.ErrnoError)) {
              throw _0xc21c53;
            }
            if (_0xc21c53.errno !== _0x4251af.EOPNOTSUPP) {
              throw _0xc21c53;
            }
          }
        }
      },
      connect: function (_0x26b6b0, _0x42d316, _0x15027e) {
        if (_0x26b6b0.server) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EOPNOTSUPP);
        }
        if (typeof _0x26b6b0.daddr !== "undefined" && typeof _0x26b6b0.dport !== "undefined") {
          var _0x25da94 = _0x310d4f.websocket_sock_ops.getPeer(_0x26b6b0, _0x26b6b0.daddr, _0x26b6b0.dport);
          if (_0x25da94) {
            if (_0x25da94.socket.readyState === _0x25da94.socket.CONNECTING) {
              throw new _0x1e6cd4.ErrnoError(_0x4251af.EALREADY);
            } else {
              throw new _0x1e6cd4.ErrnoError(_0x4251af.EISCONN);
            }
          }
        }
        var _0x490cf6 = _0x310d4f.websocket_sock_ops.createPeer(_0x26b6b0, _0x42d316, _0x15027e);
        _0x26b6b0.daddr = _0x490cf6.addr;
        _0x26b6b0.dport = _0x490cf6.port;
        throw new _0x1e6cd4.ErrnoError(_0x4251af.EINPROGRESS);
      },
      listen: function (_0x84f8b, _0x325d14) {
        if (!_0x50fc22) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EOPNOTSUPP);
        }
        if (_0x84f8b.server) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EINVAL);
        }
        var _0x4eb0ad = require("ws").Server;
        var _0x1f43b6 = _0x84f8b.saddr;
        _0x84f8b.server = new _0x4eb0ad({
          host: _0x1f43b6,
          port: _0x84f8b.sport
        });
        _0xc94e0.websocket.emit("listen", _0x84f8b.stream.fd);
        _0x84f8b.server.on("connection", function (_0x200bd0) {
          if (_0x84f8b.type === 1) {
            var _0x52cff7 = _0x310d4f.createSocket(_0x84f8b.family, _0x84f8b.type, _0x84f8b.protocol);
            var _0x110673 = _0x310d4f.websocket_sock_ops.createPeer(_0x52cff7, _0x200bd0);
            _0x52cff7.daddr = _0x110673.addr;
            _0x52cff7.dport = _0x110673.port;
            _0x84f8b.pending.push(_0x52cff7);
            _0xc94e0.websocket.emit("connection", _0x52cff7.stream.fd);
          } else {
            _0x310d4f.websocket_sock_ops.createPeer(_0x84f8b, _0x200bd0);
            _0xc94e0.websocket.emit("connection", _0x84f8b.stream.fd);
          }
        });
        _0x84f8b.server.on("closed", function () {
          _0xc94e0.websocket.emit("close", _0x84f8b.stream.fd);
          _0x84f8b.server = null;
        });
        _0x84f8b.server.on("error", function (_0x498b6f) {
          _0x84f8b.error = _0x4251af.EHOSTUNREACH;
          _0xc94e0.websocket.emit("error", [_0x84f8b.stream.fd, _0x84f8b.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x214755) {
        if (!_0x214755.server) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EINVAL);
        }
        var _0xc99041 = _0x214755.pending.shift();
        _0xc99041.stream.flags = _0x214755.stream.flags;
        return _0xc99041;
      },
      getname: function (_0xba31c6, _0x574be8) {
        var _0x3d19e8;
        var _0x571e30;
        if (_0x574be8) {
          if (_0xba31c6.daddr === undefined || _0xba31c6.dport === undefined) {
            throw new _0x1e6cd4.ErrnoError(_0x4251af.ENOTCONN);
          }
          _0x3d19e8 = _0xba31c6.daddr;
          _0x571e30 = _0xba31c6.dport;
        } else {
          _0x3d19e8 = _0xba31c6.saddr || 0;
          _0x571e30 = _0xba31c6.sport || 0;
        }
        return {
          addr: _0x3d19e8,
          port: _0x571e30
        };
      },
      sendmsg: function (_0x506498, _0x398384, _0x2707aa, _0x376917, _0x540085, _0x4a5ace) {
        if (_0x506498.type === 2) {
          if (_0x540085 === undefined || _0x4a5ace === undefined) {
            _0x540085 = _0x506498.daddr;
            _0x4a5ace = _0x506498.dport;
          }
          if (_0x540085 === undefined || _0x4a5ace === undefined) {
            throw new _0x1e6cd4.ErrnoError(_0x4251af.EDESTADDRREQ);
          }
        } else {
          _0x540085 = _0x506498.daddr;
          _0x4a5ace = _0x506498.dport;
        }
        var _0x2899cd = _0x310d4f.websocket_sock_ops.getPeer(_0x506498, _0x540085, _0x4a5ace);
        if (_0x506498.type === 1) {
          if (!_0x2899cd || _0x2899cd.socket.readyState === _0x2899cd.socket.CLOSING || _0x2899cd.socket.readyState === _0x2899cd.socket.CLOSED) {
            throw new _0x1e6cd4.ErrnoError(_0x4251af.ENOTCONN);
          } else if (_0x2899cd.socket.readyState === _0x2899cd.socket.CONNECTING) {
            throw new _0x1e6cd4.ErrnoError(_0x4251af.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x398384)) {
          _0x2707aa += _0x398384.byteOffset;
          _0x398384 = _0x398384.buffer;
        }
        var _0x20da47;
        _0x20da47 = _0x398384.slice(_0x2707aa, _0x2707aa + _0x376917);
        if (_0x506498.type === 2) {
          if (!_0x2899cd || _0x2899cd.socket.readyState !== _0x2899cd.socket.OPEN) {
            if (!_0x2899cd || _0x2899cd.socket.readyState === _0x2899cd.socket.CLOSING || _0x2899cd.socket.readyState === _0x2899cd.socket.CLOSED) {
              _0x2899cd = _0x310d4f.websocket_sock_ops.createPeer(_0x506498, _0x540085, _0x4a5ace);
            }
            _0x2899cd.dgram_send_queue.push(_0x20da47);
            return _0x376917;
          }
        }
        try {
          _0x2899cd.socket.send(_0x20da47);
          return _0x376917;
        } catch (_0x2673b9) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EINVAL);
        }
      },
      recvmsg: function (_0x460d1e, _0x481d87) {
        if (_0x460d1e.type === 1 && _0x460d1e.server) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.ENOTCONN);
        }
        var _0x218b06 = _0x460d1e.recv_queue.shift();
        if (!_0x218b06) {
          if (_0x460d1e.type === 1) {
            var _0x4fe630 = _0x310d4f.websocket_sock_ops.getPeer(_0x460d1e, _0x460d1e.daddr, _0x460d1e.dport);
            if (!_0x4fe630) {
              throw new _0x1e6cd4.ErrnoError(_0x4251af.ENOTCONN);
            } else if (_0x4fe630.socket.readyState === _0x4fe630.socket.CLOSING || _0x4fe630.socket.readyState === _0x4fe630.socket.CLOSED) {
              return null;
            } else {
              throw new _0x1e6cd4.ErrnoError(_0x4251af.EAGAIN);
            }
          } else {
            throw new _0x1e6cd4.ErrnoError(_0x4251af.EAGAIN);
          }
        }
        var _0x4a6453 = _0x218b06.data.byteLength || _0x218b06.data.length;
        var _0x5b532f = _0x218b06.data.byteOffset || 0;
        var _0x19b466 = _0x218b06.data.buffer || _0x218b06.data;
        var _0x213f51 = Math.min(_0x481d87, _0x4a6453);
        var _0xee02bf = {
          buffer: new Uint8Array(_0x19b466, _0x5b532f, _0x213f51),
          addr: _0x218b06.addr,
          port: _0x218b06.port
        };
        if (_0x460d1e.type === 1 && _0x213f51 < _0x4a6453) {
          var _0x223fe2 = _0x4a6453 - _0x213f51;
          _0x218b06.data = new Uint8Array(_0x19b466, _0x5b532f + _0x213f51, _0x223fe2);
          _0x460d1e.recv_queue.unshift(_0x218b06);
        }
        return _0xee02bf;
      }
    }
  };
  function _0x26547f(_0x1333fb) {
    var _0x4ab30b = _0x310d4f.getSocket(_0x1333fb);
    if (!_0x4ab30b) {
      throw new _0x1e6cd4.ErrnoError(8);
    }
    return _0x4ab30b;
  }
  function _0x2b6e9c(_0x5a4e83) {
    _0x14d31c[_0x328554() >> 2] = _0x5a4e83;
    return _0x5a4e83;
  }
  function _0x1a4dbf(_0x378c78) {
    var _0x6b2cc0 = _0x378c78.split(".");
    for (var _0x3ec9b7 = 0; _0x3ec9b7 < 4; _0x3ec9b7++) {
      var _0xa48be3 = Number(_0x6b2cc0[_0x3ec9b7]);
      if (isNaN(_0xa48be3)) {
        return null;
      }
      _0x6b2cc0[_0x3ec9b7] = _0xa48be3;
    }
    return (_0x6b2cc0[0] | _0x6b2cc0[1] << 8 | _0x6b2cc0[2] << 16 | _0x6b2cc0[3] << 24) >>> 0;
  }
  function _0x26e49b(_0x3a1737) {
    return parseInt(_0x3a1737);
  }
  function _0x57ae32(_0x2b4a94) {
    var _0x5e82b1;
    var _0x5235fb;
    var _0x5dde07;
    var _0x200590;
    var _0x2c9fc4 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x371c2d = [];
    if (!_0x2c9fc4.test(_0x2b4a94)) {
      return null;
    }
    if (_0x2b4a94 === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x2b4a94.startsWith("::")) {
      _0x2b4a94 = _0x2b4a94.replace("::", "Z:");
    } else {
      _0x2b4a94 = _0x2b4a94.replace("::", ":Z:");
    }
    if (_0x2b4a94.indexOf(".") > 0) {
      _0x2b4a94 = _0x2b4a94.replace(new RegExp("[.]", "g"), ":");
      _0x5e82b1 = _0x2b4a94.split(":");
      _0x5e82b1[_0x5e82b1.length - 4] = _0x26e49b(_0x5e82b1[_0x5e82b1.length - 4]) + _0x26e49b(_0x5e82b1[_0x5e82b1.length - 3]) * 256;
      _0x5e82b1[_0x5e82b1.length - 3] = _0x26e49b(_0x5e82b1[_0x5e82b1.length - 2]) + _0x26e49b(_0x5e82b1[_0x5e82b1.length - 1]) * 256;
      _0x5e82b1 = _0x5e82b1.slice(0, _0x5e82b1.length - 2);
    } else {
      _0x5e82b1 = _0x2b4a94.split(":");
    }
    _0x5dde07 = 0;
    _0x200590 = 0;
    for (_0x5235fb = 0; _0x5235fb < _0x5e82b1.length; _0x5235fb++) {
      if (typeof _0x5e82b1[_0x5235fb] === "string") {
        if (_0x5e82b1[_0x5235fb] === "Z") {
          for (_0x200590 = 0; _0x200590 < 8 - _0x5e82b1.length + 1; _0x200590++) {
            _0x371c2d[_0x5235fb + _0x200590] = 0;
          }
          _0x5dde07 = _0x200590 - 1;
        } else {
          _0x371c2d[_0x5235fb + _0x5dde07] = _0x3f28f8(parseInt(_0x5e82b1[_0x5235fb], 16));
        }
      } else {
        _0x371c2d[_0x5235fb + _0x5dde07] = _0x5e82b1[_0x5235fb];
      }
    }
    return [_0x371c2d[1] << 16 | _0x371c2d[0], _0x371c2d[3] << 16 | _0x371c2d[2], _0x371c2d[5] << 16 | _0x371c2d[4], _0x371c2d[7] << 16 | _0x371c2d[6]];
  }
  function _0x45cdef(_0x274463, _0x5a80cf, _0x310db2, _0x1445ef, _0x1b8fe5) {
    switch (_0x5a80cf) {
      case 2:
        _0x310db2 = _0x1a4dbf(_0x310db2);
        if (_0x1b8fe5) {
          _0x14d31c[_0x1b8fe5 >> 2] = 16;
        }
        _0xefd34[_0x274463 >> 1] = _0x5a80cf;
        _0x14d31c[_0x274463 + 4 >> 2] = _0x310db2;
        _0xefd34[_0x274463 + 2 >> 1] = _0x3f28f8(_0x1445ef);
        _0x5804aa = [0, (_0x27094f = 0, +Math.abs(_0x27094f) >= 1 ? _0x27094f > 0 ? (Math.min(+Math.floor(_0x27094f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x27094f - +(~~_0x27094f >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x14d31c[_0x274463 + 8 >> 2] = _0x5804aa[0];
        _0x14d31c[_0x274463 + 12 >> 2] = _0x5804aa[1];
        break;
      case 10:
        _0x310db2 = _0x57ae32(_0x310db2);
        if (_0x1b8fe5) {
          _0x14d31c[_0x1b8fe5 >> 2] = 28;
        }
        _0x14d31c[_0x274463 >> 2] = _0x5a80cf;
        _0x14d31c[_0x274463 + 8 >> 2] = _0x310db2[0];
        _0x14d31c[_0x274463 + 12 >> 2] = _0x310db2[1];
        _0x14d31c[_0x274463 + 16 >> 2] = _0x310db2[2];
        _0x14d31c[_0x274463 + 20 >> 2] = _0x310db2[3];
        _0xefd34[_0x274463 + 2 >> 1] = _0x3f28f8(_0x1445ef);
        _0x14d31c[_0x274463 + 4 >> 2] = 0;
        _0x14d31c[_0x274463 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x4eba22 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x55d097) {
      var _0x51a0e0 = _0x1a4dbf(_0x55d097);
      if (_0x51a0e0 !== null) {
        return _0x55d097;
      }
      _0x51a0e0 = _0x57ae32(_0x55d097);
      if (_0x51a0e0 !== null) {
        return _0x55d097;
      }
      var _0x59f50c;
      if (_0x4eba22.address_map.addrs[_0x55d097]) {
        _0x59f50c = _0x4eba22.address_map.addrs[_0x55d097];
      } else {
        var _0x3b7db0 = _0x4eba22.address_map.id++;
        _0x1bfc0b(_0x3b7db0 < 65535, "exceeded max address mappings of 65535");
        _0x59f50c = "172.29." + (_0x3b7db0 & 255) + "." + (_0x3b7db0 & 65280);
        _0x4eba22.address_map.names[_0x59f50c] = _0x55d097;
        _0x4eba22.address_map.addrs[_0x55d097] = _0x59f50c;
      }
      return _0x59f50c;
    },
    lookup_addr: function (_0x5bf2c9) {
      if (_0x4eba22.address_map.names[_0x5bf2c9]) {
        return _0x4eba22.address_map.names[_0x5bf2c9];
      }
      return null;
    }
  };
  function _0x1300e2(_0x1976e0, _0x2151e3, _0x92b14, _0x2ee3e1) {
    try {
      var _0x5378bf = _0x26547f(_0x1976e0);
      var _0x1a38e7 = _0x5378bf.sock_ops.accept(_0x5378bf);
      if (_0x2151e3) {
        var _0x1fa544 = _0x45cdef(_0x2151e3, _0x1a38e7.family, _0x4eba22.lookup_name(_0x1a38e7.daddr), _0x1a38e7.dport, _0x92b14);
      }
      return _0x1a38e7.stream.fd;
    } catch (_0x57583a) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x57583a instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x57583a);
      }
      return -_0x57583a.errno;
    }
  }
  function _0x18f4e4(_0x927af9, _0x23428a) {
    try {
      _0x927af9 = _0x1ac5a3.getStr(_0x927af9);
      return _0x1ac5a3.doAccess(_0x927af9, _0x23428a);
    } catch (_0xdcbd92) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0xdcbd92 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0xdcbd92);
      }
      return -_0xdcbd92.errno;
    }
  }
  function _0x17b8a2(_0x56b820) {
    return (_0x56b820 & 255) + "." + (_0x56b820 >> 8 & 255) + "." + (_0x56b820 >> 16 & 255) + "." + (_0x56b820 >> 24 & 255);
  }
  function _0x2be764(_0x12f979) {
    var _0x8b2c95 = "";
    var _0x56382e = 0;
    var _0x215721 = 0;
    var _0xf8f7e9 = 0;
    var _0x503922 = 0;
    var _0x3dac4a = 0;
    var _0x5710b8 = 0;
    var _0x3109c2 = [_0x12f979[0] & 65535, _0x12f979[0] >> 16, _0x12f979[1] & 65535, _0x12f979[1] >> 16, _0x12f979[2] & 65535, _0x12f979[2] >> 16, _0x12f979[3] & 65535, _0x12f979[3] >> 16];
    var _0xb634cd = true;
    var _0x2e9c06 = "";
    for (_0x5710b8 = 0; _0x5710b8 < 5; _0x5710b8++) {
      if (_0x3109c2[_0x5710b8] !== 0) {
        _0xb634cd = false;
        break;
      }
    }
    if (_0xb634cd) {
      _0x2e9c06 = _0x17b8a2(_0x3109c2[6] | _0x3109c2[7] << 16);
      if (_0x3109c2[5] === -1) {
        _0x8b2c95 = "::ffff:";
        _0x8b2c95 += _0x2e9c06;
        return _0x8b2c95;
      }
      if (_0x3109c2[5] === 0) {
        _0x8b2c95 = "::";
        if (_0x2e9c06 === "0.0.0.0") {
          _0x2e9c06 = "";
        }
        if (_0x2e9c06 === "0.0.0.1") {
          _0x2e9c06 = "1";
        }
        _0x8b2c95 += _0x2e9c06;
        return _0x8b2c95;
      }
    }
    for (_0x56382e = 0; _0x56382e < 8; _0x56382e++) {
      if (_0x3109c2[_0x56382e] === 0) {
        if (_0x56382e - _0xf8f7e9 > 1) {
          _0x3dac4a = 0;
        }
        _0xf8f7e9 = _0x56382e;
        _0x3dac4a++;
      }
      if (_0x3dac4a > _0x215721) {
        _0x215721 = _0x3dac4a;
        _0x503922 = _0x56382e - _0x215721 + 1;
      }
    }
    for (_0x56382e = 0; _0x56382e < 8; _0x56382e++) {
      if (_0x215721 > 1) {
        if (_0x3109c2[_0x56382e] === 0 && _0x56382e >= _0x503922 && _0x56382e < _0x503922 + _0x215721) {
          if (_0x56382e === _0x503922) {
            _0x8b2c95 += ":";
            if (_0x503922 === 0) {
              _0x8b2c95 += ":";
            }
          }
          continue;
        }
      }
      _0x8b2c95 += Number(_0x4c0b7f(_0x3109c2[_0x56382e] & 65535)).toString(16);
      _0x8b2c95 += _0x56382e < 7 ? ":" : "";
    }
    return _0x8b2c95;
  }
  function _0x39e995(_0x5104be, _0x4c6ef2) {
    var _0x513636 = _0xefd34[_0x5104be >> 1];
    var _0x2bdec6 = _0x4c0b7f(_0x353b5e[_0x5104be + 2 >> 1]);
    var _0x2dded9;
    switch (_0x513636) {
      case 2:
        if (_0x4c6ef2 !== 16) {
          return {
            errno: 28
          };
        }
        _0x2dded9 = _0x14d31c[_0x5104be + 4 >> 2];
        _0x2dded9 = _0x17b8a2(_0x2dded9);
        break;
      case 10:
        if (_0x4c6ef2 !== 28) {
          return {
            errno: 28
          };
        }
        _0x2dded9 = [_0x14d31c[_0x5104be + 8 >> 2], _0x14d31c[_0x5104be + 12 >> 2], _0x14d31c[_0x5104be + 16 >> 2], _0x14d31c[_0x5104be + 20 >> 2]];
        _0x2dded9 = _0x2be764(_0x2dded9);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x513636,
      addr: _0x2dded9,
      port: _0x2bdec6
    };
  }
  function _0x4da45f(_0x2e405c, _0x490b14, _0xbc6b2) {
    if (_0xbc6b2 && _0x2e405c === 0) {
      return null;
    }
    var _0x256723 = _0x39e995(_0x2e405c, _0x490b14);
    if (_0x256723.errno) {
      throw new _0x1e6cd4.ErrnoError(_0x256723.errno);
    }
    _0x256723.addr = _0x4eba22.lookup_addr(_0x256723.addr) || _0x256723.addr;
    return _0x256723;
  }
  function _0x1a5419(_0x1e2896, _0x51d0d1, _0x323548) {
    try {
      var _0x22ca36 = _0x26547f(_0x1e2896);
      var _0x5b3751 = _0x4da45f(_0x51d0d1, _0x323548);
      _0x22ca36.sock_ops.bind(_0x22ca36, _0x5b3751.addr, _0x5b3751.port);
      return 0;
    } catch (_0x56dfab) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x56dfab instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x56dfab);
      }
      return -_0x56dfab.errno;
    }
  }
  function _0x3bd740(_0x3ccc7a, _0x2c7e06) {
    try {
      _0x3ccc7a = _0x1ac5a3.getStr(_0x3ccc7a);
      _0x1e6cd4.chmod(_0x3ccc7a, _0x2c7e06);
      return 0;
    } catch (_0x2c502a) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x2c502a instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x2c502a);
      }
      return -_0x2c502a.errno;
    }
  }
  function _0x5eb4c4(_0x2e81ee, _0x46a8f6, _0x1a736a) {
    try {
      var _0x4efe0a = _0x26547f(_0x2e81ee);
      var _0x243d78 = _0x4da45f(_0x46a8f6, _0x1a736a);
      _0x4efe0a.sock_ops.connect(_0x4efe0a, _0x243d78.addr, _0x243d78.port);
      return 0;
    } catch (_0x331e3b) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x331e3b instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x331e3b);
      }
      return -_0x331e3b.errno;
    }
  }
  function _0xfb44b0(_0xebcf51, _0x248e1a) {
    try {
      var _0x1cbd7a = _0x1ac5a3.getStreamFromFD(_0xebcf51);
      if (_0x1cbd7a.fd === _0x248e1a) {
        return _0x248e1a;
      }
      return _0x1ac5a3.doDup(_0x1cbd7a.path, _0x1cbd7a.flags, _0x248e1a);
    } catch (_0x411c14) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x411c14 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x411c14);
      }
      return -_0x411c14.errno;
    }
  }
  function _0x87b061(_0x41b92a, _0x27136) {
    try {
      _0x1e6cd4.fchmod(_0x41b92a, _0x27136);
      return 0;
    } catch (_0x4b870a) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x4b870a instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x4b870a);
      }
      return -_0x4b870a.errno;
    }
  }
  function _0x1e7492(_0x42e1f9, _0x4ff295, _0x478447) {
    _0x1ac5a3.varargs = _0x478447;
    try {
      var _0x349cb8 = _0x1ac5a3.getStreamFromFD(_0x42e1f9);
      switch (_0x4ff295) {
        case 0:
          {
            var _0x228478 = _0x1ac5a3.get();
            if (_0x228478 < 0) {
              return -28;
            }
            var _0x3e18ef;
            _0x3e18ef = _0x1e6cd4.open(_0x349cb8.path, _0x349cb8.flags, 0, _0x228478);
            return _0x3e18ef.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x349cb8.flags;
        case 4:
          {
            var _0x228478 = _0x1ac5a3.get();
            _0x349cb8.flags |= _0x228478;
            return 0;
          }
        case 12:
          {
            var _0x228478 = _0x1ac5a3.get();
            var _0x3c5e29 = 0;
            _0xefd34[_0x228478 + _0x3c5e29 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x2b6e9c(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x332539) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x332539 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x332539);
      }
      return -_0x332539.errno;
    }
  }
  function _0x204878(_0x288f0f, _0x50d17e) {
    try {
      var _0x4e0fa9 = _0x1ac5a3.getStreamFromFD(_0x288f0f);
      return _0x1ac5a3.doStat(_0x1e6cd4.stat, _0x4e0fa9.path, _0x50d17e);
    } catch (_0x1a452d) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x1a452d instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x1a452d);
      }
      return -_0x1a452d.errno;
    }
  }
  function _0xbada43(_0x486275, _0x3354c0, _0x5dd5a3, _0x40f87e) {
    try {
      var _0x3792e4 = _0x1ac5a3.get64(_0x5dd5a3, _0x40f87e);
      _0x1e6cd4.ftruncate(_0x486275, _0x3792e4);
      return 0;
    } catch (_0x20a6aa) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x20a6aa instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x20a6aa);
      }
      return -_0x20a6aa.errno;
    }
  }
  function _0x24e3f1(_0x203e9c, _0x322586) {
    try {
      if (_0x322586 === 0) {
        return -28;
      }
      var _0x3a0764 = _0x1e6cd4.cwd();
      var _0x5439fd = _0x356cec(_0x3a0764);
      if (_0x322586 < _0x5439fd + 1) {
        return -68;
      }
      _0x331149(_0x3a0764, _0x203e9c, _0x322586);
      return _0x203e9c;
    } catch (_0x4cece2) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x4cece2 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x4cece2);
      }
      return -_0x4cece2.errno;
    }
  }
  function _0x2d00fa(_0x11fab0, _0x40250d, _0x347c7f) {
    try {
      var _0x21aa49 = _0x1ac5a3.getStreamFromFD(_0x11fab0);
      if (!_0x21aa49.getdents) {
        _0x21aa49.getdents = _0x1e6cd4.readdir(_0x21aa49.path);
      }
      var _0x3a1c9e = 280;
      var _0x29ac09 = 0;
      var _0x1e1b45 = _0x1e6cd4.llseek(_0x21aa49, 0, 1);
      var _0x526abe = Math.floor(_0x1e1b45 / _0x3a1c9e);
      while (_0x526abe < _0x21aa49.getdents.length && _0x29ac09 + _0x3a1c9e <= _0x347c7f) {
        var _0x5a4234;
        var _0x20efa4;
        var _0x1c4af2 = _0x21aa49.getdents[_0x526abe];
        if (_0x1c4af2[0] === ".") {
          _0x5a4234 = 1;
          _0x20efa4 = 4;
        } else {
          var _0x440007 = _0x1e6cd4.lookupNode(_0x21aa49.node, _0x1c4af2);
          _0x5a4234 = _0x440007.id;
          _0x20efa4 = _0x1e6cd4.isChrdev(_0x440007.mode) ? 2 : _0x1e6cd4.isDir(_0x440007.mode) ? 4 : _0x1e6cd4.isLink(_0x440007.mode) ? 10 : 8;
        }
        _0x5804aa = [_0x5a4234 >>> 0, (_0x27094f = _0x5a4234, +Math.abs(_0x27094f) >= 1 ? _0x27094f > 0 ? (Math.min(+Math.floor(_0x27094f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x27094f - +(~~_0x27094f >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x14d31c[_0x40250d + _0x29ac09 >> 2] = _0x5804aa[0];
        _0x14d31c[_0x40250d + _0x29ac09 + 4 >> 2] = _0x5804aa[1];
        _0x5804aa = [(_0x526abe + 1) * _0x3a1c9e >>> 0, (_0x27094f = (_0x526abe + 1) * _0x3a1c9e, +Math.abs(_0x27094f) >= 1 ? _0x27094f > 0 ? (Math.min(+Math.floor(_0x27094f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x27094f - +(~~_0x27094f >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x14d31c[_0x40250d + _0x29ac09 + 8 >> 2] = _0x5804aa[0];
        _0x14d31c[_0x40250d + _0x29ac09 + 12 >> 2] = _0x5804aa[1];
        _0xefd34[_0x40250d + _0x29ac09 + 16 >> 1] = 280;
        _0x133579[_0x40250d + _0x29ac09 + 18 >> 0] = _0x20efa4;
        _0x331149(_0x1c4af2, _0x40250d + _0x29ac09 + 19, 256);
        _0x29ac09 += _0x3a1c9e;
        _0x526abe += 1;
      }
      _0x1e6cd4.llseek(_0x21aa49, _0x526abe * _0x3a1c9e, 0);
      return _0x29ac09;
    } catch (_0x42e601) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x42e601 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x42e601);
      }
      return -_0x42e601.errno;
    }
  }
  function _0xf853ca() {
    return 0;
  }
  function _0xd8a133() {
    return _0xf853ca();
  }
  function _0x3a963b(_0x3d989f, _0x36e8b2, _0x22fce8) {
    try {
      var _0x1cffca = _0x26547f(_0x3d989f);
      if (!_0x1cffca.daddr) {
        return -53;
      }
      var _0x57b134 = _0x45cdef(_0x36e8b2, _0x1cffca.family, _0x4eba22.lookup_name(_0x1cffca.daddr), _0x1cffca.dport, _0x22fce8);
      return 0;
    } catch (_0x4655be) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x4655be instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x4655be);
      }
      return -_0x4655be.errno;
    }
  }
  function _0x2b5d9c(_0x5cdaa5, _0x13ca84) {
    try {
      _0x544adf(_0x13ca84, 0, 136);
      _0x14d31c[_0x13ca84 >> 2] = 1;
      _0x14d31c[_0x13ca84 + 4 >> 2] = 2;
      _0x14d31c[_0x13ca84 + 8 >> 2] = 3;
      _0x14d31c[_0x13ca84 + 12 >> 2] = 4;
      return 0;
    } catch (_0x1d01c9) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x1d01c9 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x1d01c9);
      }
      return -_0x1d01c9.errno;
    }
  }
  function _0x20e3d6(_0x3d9105, _0x469f59, _0x39fd5b) {
    try {
      _0x551fc8("__sys_getsockname " + _0x3d9105);
      var _0x5dc091 = _0x26547f(_0x3d9105);
      var _0x39ac0a = _0x45cdef(_0x469f59, _0x5dc091.family, _0x4eba22.lookup_name(_0x5dc091.saddr || "0.0.0.0"), _0x5dc091.sport, _0x39fd5b);
      return 0;
    } catch (_0x1c8aa2) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x1c8aa2 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x1c8aa2);
      }
      return -_0x1c8aa2.errno;
    }
  }
  function _0x5c3a67(_0x1c60de, _0x30f2bc, _0x30a143, _0x37312d, _0x36f4d9) {
    try {
      var _0x1a51cc = _0x26547f(_0x1c60de);
      if (_0x30f2bc === 1) {
        if (_0x30a143 === 4) {
          _0x14d31c[_0x37312d >> 2] = _0x1a51cc.error;
          _0x14d31c[_0x36f4d9 >> 2] = 4;
          _0x1a51cc.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x54cd4b) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x54cd4b instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x54cd4b);
      }
      return -_0x54cd4b.errno;
    }
  }
  function _0x3f7ba9() {
    return _0xf853ca();
  }
  function _0x4e0454(_0x27bccc, _0x400827, _0x19bfce) {
    _0x1ac5a3.varargs = _0x19bfce;
    try {
      var _0x4f87c0 = _0x1ac5a3.getStreamFromFD(_0x27bccc);
      switch (_0x400827) {
        case 21509:
        case 21505:
          {
            if (!_0x4f87c0.tty) {
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
            if (!_0x4f87c0.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x4f87c0.tty) {
              return -59;
            }
            var _0x3ddeb6 = _0x1ac5a3.get();
            _0x14d31c[_0x3ddeb6 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x4f87c0.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x3ddeb6 = _0x1ac5a3.get();
            return _0x1e6cd4.ioctl(_0x4f87c0, _0x400827, _0x3ddeb6);
          }
        case 21523:
          {
            if (!_0x4f87c0.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x4f87c0.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x44e8b0("bad ioctl syscall " + _0x400827);
      }
    } catch (_0x54ef3c) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x54ef3c instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x54ef3c);
      }
      return -_0x54ef3c.errno;
    }
  }
  function _0xae35b4(_0x563195, _0x2dae36) {
    return -34;
  }
  function _0x7ba38b(_0x1b46f1, _0x104b4a) {
    try {
      var _0x5085bb = _0x26547f(_0x1b46f1);
      _0x5085bb.sock_ops.listen(_0x5085bb, _0x104b4a);
      return 0;
    } catch (_0x45a441) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x45a441 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x45a441);
      }
      return -_0x45a441.errno;
    }
  }
  function _0x234e93(_0x7cd3d6, _0x18b874) {
    try {
      _0x7cd3d6 = _0x1ac5a3.getStr(_0x7cd3d6);
      return _0x1ac5a3.doStat(_0x1e6cd4.lstat, _0x7cd3d6, _0x18b874);
    } catch (_0x162abe) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x162abe instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x162abe);
      }
      return -_0x162abe.errno;
    }
  }
  function _0x3ac261(_0x38f1e9, _0x556837) {
    try {
      _0x38f1e9 = _0x1ac5a3.getStr(_0x38f1e9);
      return _0x1ac5a3.doMkdir(_0x38f1e9, _0x556837);
    } catch (_0x133262) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x133262 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x133262);
      }
      return -_0x133262.errno;
    }
  }
  function _0xf37ece(_0x454e31, _0x55da09, _0x15f590, _0x376be9, _0xb7267d, _0x37dbdf) {
    _0x37dbdf <<= 12;
    var _0x42c2e8;
    var _0x577b29 = false;
    if ((_0x376be9 & 16) !== 0 && _0x454e31 % 65536 !== 0) {
      return -28;
    }
    if ((_0x376be9 & 32) !== 0) {
      _0x42c2e8 = _0x483094(65536, _0x55da09);
      if (!_0x42c2e8) {
        return -48;
      }
      _0x544adf(_0x42c2e8, 0, _0x55da09);
      _0x577b29 = true;
    } else {
      var _0x112dfd = _0x1e6cd4.getStream(_0xb7267d);
      if (!_0x112dfd) {
        return -8;
      }
      var _0x3fecf4 = _0x1e6cd4.mmap(_0x112dfd, _0x454e31, _0x55da09, _0x37dbdf, _0x15f590, _0x376be9);
      _0x42c2e8 = _0x3fecf4.ptr;
      _0x577b29 = _0x3fecf4.allocated;
    }
    _0x1ac5a3.mappings[_0x42c2e8] = {
      malloc: _0x42c2e8,
      len: _0x55da09,
      allocated: _0x577b29,
      fd: _0xb7267d,
      prot: _0x15f590,
      flags: _0x376be9,
      offset: _0x37dbdf
    };
    return _0x42c2e8;
  }
  function _0x184459(_0x1eb0a2, _0x31cad5, _0x1f42f5, _0x267ab5, _0x12d0af, _0x1a0d95) {
    try {
      return _0xf37ece(_0x1eb0a2, _0x31cad5, _0x1f42f5, _0x267ab5, _0x12d0af, _0x1a0d95);
    } catch (_0x409f32) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x409f32 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x409f32);
      }
      return -_0x409f32.errno;
    }
  }
  function _0x23f86a(_0x19b95a, _0x3951cd) {
    if ((_0x19b95a | 0) === -1 || _0x3951cd === 0) {
      return -28;
    }
    var _0x6c72c3 = _0x1ac5a3.mappings[_0x19b95a];
    if (!_0x6c72c3) {
      return 0;
    }
    if (_0x3951cd === _0x6c72c3.len) {
      var _0x34d925 = _0x1e6cd4.getStream(_0x6c72c3.fd);
      if (_0x34d925) {
        if (_0x6c72c3.prot & 2) {
          _0x1ac5a3.doMsync(_0x19b95a, _0x34d925, _0x3951cd, _0x6c72c3.flags, _0x6c72c3.offset);
        }
        _0x1e6cd4.munmap(_0x34d925);
      }
      _0x1ac5a3.mappings[_0x19b95a] = null;
      if (_0x6c72c3.allocated) {
        _0x289376(_0x6c72c3.malloc);
      }
    }
    return 0;
  }
  function _0x51524d(_0x309a94, _0x38de26) {
    try {
      return _0x23f86a(_0x309a94, _0x38de26);
    } catch (_0xa5f64b) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0xa5f64b instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0xa5f64b);
      }
      return -_0xa5f64b.errno;
    }
  }
  function _0x490216(_0x2cd6ce, _0x4266ab, _0x2cbd79) {
    _0x1ac5a3.varargs = _0x2cbd79;
    try {
      var _0x5210c3 = _0x1ac5a3.getStr(_0x2cd6ce);
      var _0x124082 = _0x2cbd79 ? _0x1ac5a3.get() : 0;
      var _0x1c3a36 = _0x1e6cd4.open(_0x5210c3, _0x4266ab, _0x124082);
      return _0x1c3a36.fd;
    } catch (_0x4d2881) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x4d2881 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x4d2881);
      }
      return -_0x4d2881.errno;
    }
  }
  var _0x98ef58 = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x52d782) {
      return _0x1e6cd4.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x30356e = {
        buckets: []
      };
      _0x30356e.buckets.push({
        buffer: new Uint8Array(_0x98ef58.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x10f307 = _0x98ef58.nextname();
      var _0xd8187f = _0x98ef58.nextname();
      var _0x3d164d = _0x1e6cd4.createNode(_0x98ef58.root, _0x10f307, 4096, 0);
      var _0x2d5139 = _0x1e6cd4.createNode(_0x98ef58.root, _0xd8187f, 4096, 0);
      _0x3d164d.pipe = _0x30356e;
      _0x2d5139.pipe = _0x30356e;
      var _0x2ff568 = _0x1e6cd4.createStream({
        path: _0x10f307,
        node: _0x3d164d,
        flags: 0,
        seekable: false,
        stream_ops: _0x98ef58.stream_ops
      });
      _0x3d164d.stream = _0x2ff568;
      var _0x571ed5 = _0x1e6cd4.createStream({
        path: _0xd8187f,
        node: _0x2d5139,
        flags: 1,
        seekable: false,
        stream_ops: _0x98ef58.stream_ops
      });
      _0x2d5139.stream = _0x571ed5;
      return {
        readable_fd: _0x2ff568.fd,
        writable_fd: _0x571ed5.fd
      };
    },
    stream_ops: {
      poll: function (_0x3e22b4) {
        var _0x57adaa = _0x3e22b4.node.pipe;
        if ((_0x3e22b4.flags & 2097155) === 1) {
          return 260;
        } else if (_0x57adaa.buckets.length > 0) {
          for (var _0xd14252 = 0; _0xd14252 < _0x57adaa.buckets.length; _0xd14252++) {
            var _0x2947d0 = _0x57adaa.buckets[_0xd14252];
            if (_0x2947d0.offset - _0x2947d0.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x42832e, _0x263c78, _0x18274b) {
        return _0x4251af.EINVAL;
      },
      fsync: function (_0x5a0e15) {
        return _0x4251af.EINVAL;
      },
      read: function (_0x2cc44d, _0x25a694, _0x4b4e22, _0x25dc83, _0x2e58de) {
        var _0x16b9d6 = _0x2cc44d.node.pipe;
        var _0x152617 = 0;
        for (var _0x193134 = 0; _0x193134 < _0x16b9d6.buckets.length; _0x193134++) {
          var _0x2b9a9e = _0x16b9d6.buckets[_0x193134];
          _0x152617 += _0x2b9a9e.offset - _0x2b9a9e.roffset;
        }
        _0x1bfc0b(_0x25a694 instanceof ArrayBuffer || ArrayBuffer.isView(_0x25a694));
        var _0x543ce5 = _0x25a694.subarray(_0x4b4e22, _0x4b4e22 + _0x25dc83);
        if (_0x25dc83 <= 0) {
          return 0;
        }
        if (_0x152617 == 0) {
          throw new _0x1e6cd4.ErrnoError(_0x4251af.EAGAIN);
        }
        var _0x882090 = Math.min(_0x152617, _0x25dc83);
        var _0x552077 = _0x882090;
        var _0x427735 = 0;
        for (var _0x193134 = 0; _0x193134 < _0x16b9d6.buckets.length; _0x193134++) {
          var _0x565184 = _0x16b9d6.buckets[_0x193134];
          var _0x501a78 = _0x565184.offset - _0x565184.roffset;
          if (_0x882090 <= _0x501a78) {
            var _0x278210 = _0x565184.buffer.subarray(_0x565184.roffset, _0x565184.offset);
            if (_0x882090 < _0x501a78) {
              _0x278210 = _0x278210.subarray(0, _0x882090);
              _0x565184.roffset += _0x882090;
            } else {
              _0x427735++;
            }
            _0x543ce5.set(_0x278210);
            break;
          } else {
            var _0x278210 = _0x565184.buffer.subarray(_0x565184.roffset, _0x565184.offset);
            _0x543ce5.set(_0x278210);
            _0x543ce5 = _0x543ce5.subarray(_0x278210.byteLength);
            _0x882090 -= _0x278210.byteLength;
            _0x427735++;
          }
        }
        if (_0x427735 && _0x427735 == _0x16b9d6.buckets.length) {
          _0x427735--;
          _0x16b9d6.buckets[_0x427735].offset = 0;
          _0x16b9d6.buckets[_0x427735].roffset = 0;
        }
        _0x16b9d6.buckets.splice(0, _0x427735);
        return _0x552077;
      },
      write: function (_0x689550, _0x3ffe62, _0x5ed32e, _0x122a68, _0x2aa0f2) {
        var _0x4e34cc = _0x689550.node.pipe;
        _0x1bfc0b(_0x3ffe62 instanceof ArrayBuffer || ArrayBuffer.isView(_0x3ffe62));
        var _0x1a0e05 = _0x3ffe62.subarray(_0x5ed32e, _0x5ed32e + _0x122a68);
        var _0x136342 = _0x1a0e05.byteLength;
        if (_0x136342 <= 0) {
          return 0;
        }
        var _0x2882d1 = null;
        if (_0x4e34cc.buckets.length == 0) {
          _0x2882d1 = {
            buffer: new Uint8Array(_0x98ef58.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x4e34cc.buckets.push(_0x2882d1);
        } else {
          _0x2882d1 = _0x4e34cc.buckets[_0x4e34cc.buckets.length - 1];
        }
        _0x1bfc0b(_0x2882d1.offset <= _0x98ef58.BUCKET_BUFFER_SIZE);
        var _0x164769 = _0x98ef58.BUCKET_BUFFER_SIZE - _0x2882d1.offset;
        if (_0x164769 >= _0x136342) {
          _0x2882d1.buffer.set(_0x1a0e05, _0x2882d1.offset);
          _0x2882d1.offset += _0x136342;
          return _0x136342;
        } else if (_0x164769 > 0) {
          _0x2882d1.buffer.set(_0x1a0e05.subarray(0, _0x164769), _0x2882d1.offset);
          _0x2882d1.offset += _0x164769;
          _0x1a0e05 = _0x1a0e05.subarray(_0x164769, _0x1a0e05.byteLength);
        }
        var _0x510143 = _0x1a0e05.byteLength / _0x98ef58.BUCKET_BUFFER_SIZE | 0;
        var _0x3a2b27 = _0x1a0e05.byteLength % _0x98ef58.BUCKET_BUFFER_SIZE;
        for (var _0x27a25e = 0; _0x27a25e < _0x510143; _0x27a25e++) {
          var _0x19d297 = {
            buffer: new Uint8Array(_0x98ef58.BUCKET_BUFFER_SIZE),
            offset: _0x98ef58.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x4e34cc.buckets.push(_0x19d297);
          _0x19d297.buffer.set(_0x1a0e05.subarray(0, _0x98ef58.BUCKET_BUFFER_SIZE));
          _0x1a0e05 = _0x1a0e05.subarray(_0x98ef58.BUCKET_BUFFER_SIZE, _0x1a0e05.byteLength);
        }
        if (_0x3a2b27 > 0) {
          var _0x19d297 = {
            buffer: new Uint8Array(_0x98ef58.BUCKET_BUFFER_SIZE),
            offset: _0x1a0e05.byteLength,
            roffset: 0
          };
          _0x4e34cc.buckets.push(_0x19d297);
          _0x19d297.buffer.set(_0x1a0e05);
        }
        return _0x136342;
      },
      close: function (_0x5b0f24) {
        var _0x2c32a6 = _0x5b0f24.node.pipe;
        _0x2c32a6.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x98ef58.nextname.current) {
        _0x98ef58.nextname.current = 0;
      }
      return "pipe[" + _0x98ef58.nextname.current++ + "]";
    }
  };
  function _0x7f876d(_0x58e037) {
    try {
      if (_0x58e037 == 0) {
        throw new _0x1e6cd4.ErrnoError(21);
      }
      var _0x40a672 = _0x98ef58.createPipe();
      _0x14d31c[_0x58e037 >> 2] = _0x40a672.readable_fd;
      _0x14d31c[_0x58e037 + 4 >> 2] = _0x40a672.writable_fd;
      return 0;
    } catch (_0x2e6177) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x2e6177 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x2e6177);
      }
      return -_0x2e6177.errno;
    }
  }
  function _0x24e40a(_0x43decf, _0x3e9fc1, _0x46e1bd) {
    try {
      var _0x339b5f = 0;
      for (var _0xc87da3 = 0; _0xc87da3 < _0x3e9fc1; _0xc87da3++) {
        var _0x37912b = _0x43decf + _0xc87da3 * 8;
        var _0x514680 = _0x14d31c[_0x37912b >> 2];
        var _0x58c4fd = _0xefd34[_0x37912b + 4 >> 1];
        var _0x12decd = 32;
        var _0x4e409b = _0x1e6cd4.getStream(_0x514680);
        if (_0x4e409b) {
          _0x12decd = _0x1ac5a3.DEFAULT_POLLMASK;
          if (_0x4e409b.stream_ops.poll) {
            _0x12decd = _0x4e409b.stream_ops.poll(_0x4e409b);
          }
        }
        _0x12decd &= _0x58c4fd | 8 | 16;
        if (_0x12decd) {
          _0x339b5f++;
        }
        _0xefd34[_0x37912b + 6 >> 1] = _0x12decd;
      }
      return _0x339b5f;
    } catch (_0x41644a) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x41644a instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x41644a);
      }
      return -_0x41644a.errno;
    }
  }
  function _0x2049eb(_0x88e93a, _0x43aef9, _0x52caac) {
    try {
      _0x88e93a = _0x1ac5a3.getStr(_0x88e93a);
      return _0x1ac5a3.doReadlink(_0x88e93a, _0x43aef9, _0x52caac);
    } catch (_0x268652) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x268652 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x268652);
      }
      return -_0x268652.errno;
    }
  }
  function _0x42102e(_0x12d9a9, _0xf6220, _0x4787fe, _0x26f292, _0x24b734, _0x23d2f5) {
    try {
      var _0x5f03f4 = _0x26547f(_0x12d9a9);
      var _0x40f495 = _0x5f03f4.sock_ops.recvmsg(_0x5f03f4, _0x4787fe);
      if (!_0x40f495) {
        return 0;
      }
      if (_0x24b734) {
        var _0x4afbd6 = _0x45cdef(_0x24b734, _0x5f03f4.family, _0x4eba22.lookup_name(_0x40f495.addr), _0x40f495.port, _0x23d2f5);
      }
      _0xb76fd2.set(_0x40f495.buffer, _0xf6220);
      return _0x40f495.buffer.byteLength;
    } catch (_0x3fe7d0) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x3fe7d0 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x3fe7d0);
      }
      return -_0x3fe7d0.errno;
    }
  }
  function _0x508926(_0x92ac31, _0xee397e, _0x14544f) {
    try {
      var _0x54d5ce = _0x26547f(_0x92ac31);
      var _0x3efeef = _0x14d31c[_0xee397e + 8 >> 2];
      var _0x23d72a = _0x14d31c[_0xee397e + 12 >> 2];
      var _0x9abc1 = 0;
      for (var _0x285da7 = 0; _0x285da7 < _0x23d72a; _0x285da7++) {
        _0x9abc1 += _0x14d31c[_0x3efeef + (_0x285da7 * 8 + 4) >> 2];
      }
      var _0x4890d0 = _0x54d5ce.sock_ops.recvmsg(_0x54d5ce, _0x9abc1);
      if (!_0x4890d0) {
        return 0;
      }
      var _0x42f8eb = _0x14d31c[_0xee397e >> 2];
      if (_0x42f8eb) {
        var _0xcab814 = _0x45cdef(_0x42f8eb, _0x54d5ce.family, _0x4eba22.lookup_name(_0x4890d0.addr), _0x4890d0.port);
      }
      var _0x59981f = 0;
      var _0x38982e = _0x4890d0.buffer.byteLength;
      for (var _0x285da7 = 0; _0x38982e > 0 && _0x285da7 < _0x23d72a; _0x285da7++) {
        var _0x18ab6a = _0x14d31c[_0x3efeef + (_0x285da7 * 8 + 0) >> 2];
        var _0x33aeb0 = _0x14d31c[_0x3efeef + (_0x285da7 * 8 + 4) >> 2];
        if (!_0x33aeb0) {
          continue;
        }
        var _0x570730 = Math.min(_0x33aeb0, _0x38982e);
        var _0x238c15 = _0x4890d0.buffer.subarray(_0x59981f, _0x59981f + _0x570730);
        _0xb76fd2.set(_0x238c15, _0x18ab6a + _0x59981f);
        _0x59981f += _0x570730;
        _0x38982e -= _0x570730;
      }
      return _0x59981f;
    } catch (_0x526dc5) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x526dc5 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x526dc5);
      }
      return -_0x526dc5.errno;
    }
  }
  function _0x35d571(_0x5823a0, _0x216c6f) {
    try {
      _0x5823a0 = _0x1ac5a3.getStr(_0x5823a0);
      _0x216c6f = _0x1ac5a3.getStr(_0x216c6f);
      _0x1e6cd4.rename(_0x5823a0, _0x216c6f);
      return 0;
    } catch (_0x407093) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x407093 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x407093);
      }
      return -_0x407093.errno;
    }
  }
  function _0x48ad3e(_0x343fcd) {
    try {
      _0x343fcd = _0x1ac5a3.getStr(_0x343fcd);
      _0x1e6cd4.rmdir(_0x343fcd);
      return 0;
    } catch (_0x3dd79e) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x3dd79e instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x3dd79e);
      }
      return -_0x3dd79e.errno;
    }
  }
  function _0x5b3d8d(_0x3ed1b3, _0x46bdb5, _0x3ae444) {
    try {
      var _0x331014 = _0x26547f(_0x3ed1b3);
      var _0x91fff8 = _0x14d31c[_0x46bdb5 + 8 >> 2];
      var _0x15449b = _0x14d31c[_0x46bdb5 + 12 >> 2];
      var _0xa504a2;
      var _0x258846;
      var _0x19d2e3 = _0x14d31c[_0x46bdb5 >> 2];
      var _0x310c07 = _0x14d31c[_0x46bdb5 + 4 >> 2];
      if (_0x19d2e3) {
        var _0x4fc0e1 = _0x39e995(_0x19d2e3, _0x310c07);
        if (_0x4fc0e1.errno) {
          return -_0x4fc0e1.errno;
        }
        _0x258846 = _0x4fc0e1.port;
        _0xa504a2 = _0x4eba22.lookup_addr(_0x4fc0e1.addr) || _0x4fc0e1.addr;
      }
      var _0x59dd78 = 0;
      for (var _0x5ee614 = 0; _0x5ee614 < _0x15449b; _0x5ee614++) {
        _0x59dd78 += _0x14d31c[_0x91fff8 + (_0x5ee614 * 8 + 4) >> 2];
      }
      var _0x416413 = new Uint8Array(_0x59dd78);
      var _0x5aca97 = 0;
      for (var _0x5ee614 = 0; _0x5ee614 < _0x15449b; _0x5ee614++) {
        var _0x20a091 = _0x14d31c[_0x91fff8 + (_0x5ee614 * 8 + 0) >> 2];
        var _0x33e06e = _0x14d31c[_0x91fff8 + (_0x5ee614 * 8 + 4) >> 2];
        for (var _0x265b27 = 0; _0x265b27 < _0x33e06e; _0x265b27++) {
          _0x416413[_0x5aca97++] = _0x133579[_0x20a091 + _0x265b27 >> 0];
        }
      }
      return _0x331014.sock_ops.sendmsg(_0x331014, _0x416413, 0, _0x59dd78, _0xa504a2, _0x258846);
    } catch (_0x5aca7c) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x5aca7c instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x5aca7c);
      }
      return -_0x5aca7c.errno;
    }
  }
  function _0x264b9a(_0x19111e, _0x25eee9, _0x46ac59, _0x42baed, _0x3368d1, _0x5ac32c) {
    try {
      var _0x16ec3a = _0x26547f(_0x19111e);
      var _0x5168cb = _0x4da45f(_0x3368d1, _0x5ac32c, true);
      if (!_0x5168cb) {
        return _0x1e6cd4.write(_0x16ec3a.stream, _0x133579, _0x25eee9, _0x46ac59);
      } else {
        return _0x16ec3a.sock_ops.sendmsg(_0x16ec3a, _0x133579, _0x25eee9, _0x46ac59, _0x5168cb.addr, _0x5168cb.port);
      }
    } catch (_0x1c18a7) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x1c18a7 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x1c18a7);
      }
      return -_0x1c18a7.errno;
    }
  }
  function _0xa1ebc8(_0x4064a4) {
    try {
      return -50;
    } catch (_0x492e0e) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x492e0e instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x492e0e);
      }
      return -_0x492e0e.errno;
    }
  }
  function _0x2b2401(_0x10555f, _0x5e6020) {
    try {
      _0x26547f(_0x10555f);
      return -52;
    } catch (_0x310621) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x310621 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x310621);
      }
      return -_0x310621.errno;
    }
  }
  function _0x3694ff(_0x1d44e8, _0x2cde04, _0x273055) {
    try {
      var _0x49eb0f = _0x310d4f.createSocket(_0x1d44e8, _0x2cde04, _0x273055);
      return _0x49eb0f.stream.fd;
    } catch (_0x52d6e7) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x52d6e7 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x52d6e7);
      }
      return -_0x52d6e7.errno;
    }
  }
  function _0x4e3aa0(_0x1343c9, _0x1bf253) {
    try {
      _0x1343c9 = _0x1ac5a3.getStr(_0x1343c9);
      return _0x1ac5a3.doStat(_0x1e6cd4.stat, _0x1343c9, _0x1bf253);
    } catch (_0x16a349) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x16a349 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x16a349);
      }
      return -_0x16a349.errno;
    }
  }
  function _0x3a22ca(_0x5c249e, _0x209182, _0xdffa2f) {
    try {
      _0x5c249e = _0x1ac5a3.getStr(_0x5c249e);
      _0x14d31c[_0xdffa2f + 4 >> 2] = 4096;
      _0x14d31c[_0xdffa2f + 40 >> 2] = 4096;
      _0x14d31c[_0xdffa2f + 8 >> 2] = 1000000;
      _0x14d31c[_0xdffa2f + 12 >> 2] = 500000;
      _0x14d31c[_0xdffa2f + 16 >> 2] = 500000;
      _0x14d31c[_0xdffa2f + 20 >> 2] = _0x1e6cd4.nextInode;
      _0x14d31c[_0xdffa2f + 24 >> 2] = 1000000;
      _0x14d31c[_0xdffa2f + 28 >> 2] = 42;
      _0x14d31c[_0xdffa2f + 44 >> 2] = 2;
      _0x14d31c[_0xdffa2f + 36 >> 2] = 255;
      return 0;
    } catch (_0x173d56) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x173d56 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x173d56);
      }
      return -_0x173d56.errno;
    }
  }
  function _0x3f4de8(_0x5bbf1f, _0x55fed3) {
    try {
      _0x5bbf1f = _0x1ac5a3.getStr(_0x5bbf1f);
      _0x55fed3 = _0x1ac5a3.getStr(_0x55fed3);
      _0x1e6cd4.symlink(_0x5bbf1f, _0x55fed3);
      return 0;
    } catch (_0x4aea2c) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x4aea2c instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x4aea2c);
      }
      return -_0x4aea2c.errno;
    }
  }
  function _0x3f978a(_0x29bcd0, _0x1719d0, _0x936c7c, _0x46515b) {
    try {
      _0x29bcd0 = _0x1ac5a3.getStr(_0x29bcd0);
      var _0x10ae3c = _0x1ac5a3.get64(_0x936c7c, _0x46515b);
      _0x1e6cd4.truncate(_0x29bcd0, _0x10ae3c);
      return 0;
    } catch (_0xa4de0b) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0xa4de0b instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0xa4de0b);
      }
      return -_0xa4de0b.errno;
    }
  }
  function _0x304fce(_0x36fdc5) {
    try {
      if (!_0x36fdc5) {
        return -21;
      }
      var _0x15a4bd = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x4c561c = function (_0xf0a7d5, _0x148ddf) {
        var _0x59d562 = _0x15a4bd[_0xf0a7d5];
        _0x1116f2(_0x148ddf, _0x36fdc5 + _0x59d562);
      };
      _0x4c561c("sysname", "Emscripten");
      _0x4c561c("nodename", "emscripten");
      _0x4c561c("release", "1.0");
      _0x4c561c("version", "#1");
      _0x4c561c("machine", "wasm32");
      return 0;
    } catch (_0x482cfb) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x482cfb instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x482cfb);
      }
      return -_0x482cfb.errno;
    }
  }
  function _0x358139(_0xfd2e49) {
    try {
      _0xfd2e49 = _0x1ac5a3.getStr(_0xfd2e49);
      _0x1e6cd4.unlink(_0xfd2e49);
      return 0;
    } catch (_0x4d12ee) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x4d12ee instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x4d12ee);
      }
      return -_0x4d12ee.errno;
    }
  }
  function _0xc7f9fc(_0x1d4af6, _0xdfd723, _0x2de874, _0x32b2cb) {
    try {
      _0xdfd723 = _0x1ac5a3.getStr(_0xdfd723);
      _0xdfd723 = _0x1ac5a3.calculateAt(_0x1d4af6, _0xdfd723, true);
      var _0x20f228 = _0x14d31c[_0x2de874 >> 2];
      var _0x12a4fb = _0x14d31c[_0x2de874 + 4 >> 2];
      var _0x9598df = _0x20f228 * 1000 + _0x12a4fb / 1000000;
      _0x2de874 += 8;
      _0x20f228 = _0x14d31c[_0x2de874 >> 2];
      _0x12a4fb = _0x14d31c[_0x2de874 + 4 >> 2];
      var _0x3c761e = _0x20f228 * 1000 + _0x12a4fb / 1000000;
      _0x1e6cd4.utime(_0xdfd723, _0x9598df, _0x3c761e);
      return 0;
    } catch (_0x49346f) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x49346f instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x49346f);
      }
      return -_0x49346f.errno;
    }
  }
  function _0x3f9a64() {
    _0x44e8b0();
  }
  function _0x480a4d() {
    if (_0x480a4d.start === undefined) {
      _0x480a4d.start = Date.now();
    }
    return (Date.now() - _0x480a4d.start) * 1000 | 0;
  }
  function _0x50a9a0() {
    if (_0x50fc22) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x5458db = true;
  function _0xff565b(_0x42d5e3, _0x3b4061) {
    var _0x46ea10;
    if (_0x42d5e3 === 0) {
      _0x46ea10 = 1000000;
    } else if (_0x42d5e3 === 1 && _0x5458db) {
      _0x46ea10 = _0x50a9a0();
    } else {
      _0x2b6e9c(28);
      return -1;
    }
    _0x14d31c[_0x3b4061 >> 2] = _0x46ea10 / 1000000000 | 0;
    _0x14d31c[_0x3b4061 + 4 >> 2] = _0x46ea10;
    return 0;
  }
  var _0xe31097;
  if (_0x50fc22) {
    _0xe31097 = function () {
      var _0x12a135 = process.hrtime();
      return _0x12a135[0] * 1000 + _0x12a135[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0xe31097 = dateNow;
  } else {
    _0xe31097 = function () {
      return performance.now();
    };
  }
  function _0xead2a6(_0xcc2d1c, _0xdfbfc7) {
    var _0xb75e66;
    if (_0xcc2d1c === 0) {
      _0xb75e66 = Date.now();
    } else if ((_0xcc2d1c === 1 || _0xcc2d1c === 4) && _0x5458db) {
      _0xb75e66 = _0xe31097();
    } else {
      _0x2b6e9c(28);
      return -1;
    }
    _0x14d31c[_0xdfbfc7 >> 2] = _0xb75e66 / 1000 | 0;
    _0x14d31c[_0xdfbfc7 + 4 >> 2] = _0xb75e66 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x131171(_0x4e17ef, _0x8450c7) {
    return _0x4e17ef - _0x8450c7;
  }
  function _0x29026b(_0x58bf36) {}
  function _0x130a0d() {
    return 0;
  }
  function _0x2dd682(_0x119b7f, _0x3f4c42) {}
  function _0x36e80b(_0x37685c, _0x2bfb97) {
    return 0;
  }
  var _0x2a9c97 = [];
  function _0x2e6f37(_0x33b5e2, _0xdfb6a) {
    _0x2a9c97.length = 0;
    var _0x39f106;
    _0xdfb6a >>= 2;
    while (_0x39f106 = _0xb76fd2[_0x33b5e2++]) {
      var _0x3c7f00 = _0x39f106 < 105;
      if (_0x3c7f00 && _0xdfb6a & 1) {
        _0xdfb6a++;
      }
      _0x2a9c97.push(_0x3c7f00 ? _0x4cdd16[_0xdfb6a++ >> 1] : _0x14d31c[_0xdfb6a]);
      ++_0xdfb6a;
    }
    return _0x2a9c97;
  }
  function _0x21c79b(_0x1eaa60, _0x426e80, _0x41a1f3, _0x24a0bd) {
    var _0x2a1b46 = _0x2e6f37(_0x426e80, _0x41a1f3);
    return _0x30775f[_0x1eaa60].apply(null, _0x2a1b46);
  }
  function _0x432505(_0x35f9d9, _0x226dff, _0x4e0b19) {
    return _0x21c79b(_0x35f9d9, _0x226dff, _0x4e0b19, 1);
  }
  function _0x2b96c5(_0x12f5d1, _0x29dda4) {
    _0x32b533.mainLoop.timingMode = _0x12f5d1;
    _0x32b533.mainLoop.timingValue = _0x29dda4;
    if (!_0x32b533.mainLoop.func) {
      return 1;
    }
    if (!_0x32b533.mainLoop.running) {
      _0x32b533.mainLoop.running = true;
    }
    if (_0x12f5d1 == 0) {
      _0x32b533.mainLoop.scheduler = function _0x49bb70() {
        var _0x421dee = Math.max(0, _0x32b533.mainLoop.tickStartTime + _0x29dda4 - _0xe31097()) | 0;
        setTimeout(_0x32b533.mainLoop.runner, _0x421dee);
      };
      _0x32b533.mainLoop.method = "timeout";
    } else if (_0x12f5d1 == 1) {
      _0x32b533.mainLoop.scheduler = function _0x386869() {
        _0x32b533.requestAnimationFrame(_0x32b533.mainLoop.runner);
      };
      _0x32b533.mainLoop.method = "rAF";
    } else if (_0x12f5d1 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x5eb85f = [];
        var _0x208e26 = "setimmediate";
        var _0x1f0b9d = function (_0x14e206) {
          if (_0x14e206.data === _0x208e26 || _0x14e206.data.target === _0x208e26) {
            _0x14e206.stopPropagation();
            _0x5eb85f.shift()();
          }
        };
        addEventListener("message", _0x1f0b9d, true);
        setImmediate = function _0x348ae6(_0x210c98) {
          _0x5eb85f.push(_0x210c98);
          if (_0xf7de81) {
            if (_0xc94e0.setImmediates === undefined) {
              _0xc94e0.setImmediates = [];
            }
            _0xc94e0.setImmediates.push(_0x210c98);
            postMessage({
              target: _0x208e26
            });
          } else {
            postMessage(_0x208e26, "*");
          }
        };
      }
      _0x32b533.mainLoop.scheduler = function _0xff23ba() {
        setImmediate(_0x32b533.mainLoop.runner);
      };
      _0x32b533.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0xcb4aa7(_0x56faf9) {
    _0x4bd3f4(_0x56faf9);
  }
  function _0x1cb59f() {
    if (!_0x1f6248()) {
      try {
        _0xcb4aa7(_0x9fbfb9);
      } catch (_0x2ab18b) {
        if (_0x2ab18b instanceof _0x30c165) {
          return;
        }
        throw _0x2ab18b;
      }
    }
  }
  function _0x5ba03a(_0x494887, _0x5391dc, _0x344629, _0x5c7209, _0x19fe7d) {
    _0x1bfc0b(!_0x32b533.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x32b533.mainLoop.func = _0x494887;
    _0x32b533.mainLoop.arg = _0x5c7209;
    var _0x397178 = _0x32b533.mainLoop.currentlyRunningMainloop;
    function _0x2fcf02() {
      if (_0x397178 < _0x32b533.mainLoop.currentlyRunningMainloop) {
        _0x1cb59f();
        return false;
      }
      return true;
    }
    _0x32b533.mainLoop.running = false;
    _0x32b533.mainLoop.runner = function _0x34ff33() {
      if (_0x31a725) {
        return;
      }
      if (_0x32b533.mainLoop.queue.length > 0) {
        var _0x571964 = Date.now();
        var _0x37fd9e = _0x32b533.mainLoop.queue.shift();
        _0x37fd9e.func(_0x37fd9e.arg);
        if (_0x32b533.mainLoop.remainingBlockers) {
          var _0x17e62d = _0x32b533.mainLoop.remainingBlockers;
          var _0x24cfdf = _0x17e62d % 1 == 0 ? _0x17e62d - 1 : Math.floor(_0x17e62d);
          if (_0x37fd9e.counted) {
            _0x32b533.mainLoop.remainingBlockers = _0x24cfdf;
          } else {
            _0x24cfdf = _0x24cfdf + 0.5;
            _0x32b533.mainLoop.remainingBlockers = (_0x17e62d * 8 + _0x24cfdf) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x37fd9e.name + "\" took " + (Date.now() - _0x571964) + " ms");
        _0x32b533.mainLoop.updateStatus();
        if (!_0x2fcf02()) {
          return;
        }
        setTimeout(_0x32b533.mainLoop.runner, 0);
        return;
      }
      if (!_0x2fcf02()) {
        return;
      }
      _0x32b533.mainLoop.currentFrameNumber = _0x32b533.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x32b533.mainLoop.timingMode == 1 && _0x32b533.mainLoop.timingValue > 1 && _0x32b533.mainLoop.currentFrameNumber % _0x32b533.mainLoop.timingValue != 0) {
        _0x32b533.mainLoop.scheduler();
        return;
      } else if (_0x32b533.mainLoop.timingMode == 0) {
        _0x32b533.mainLoop.tickStartTime = _0xe31097();
      }
      _0x797e34.newRenderingFrameStarted();
      _0x32b533.mainLoop.runIter(_0x494887);
      if (!_0x2fcf02()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x32b533.mainLoop.scheduler();
    };
    if (!_0x19fe7d) {
      if (_0x5391dc && _0x5391dc > 0) {
        _0x2b96c5(0, 1000 / _0x5391dc);
      } else {
        _0x2b96c5(1, 1);
      }
      _0x32b533.mainLoop.scheduler();
    }
    if (_0x344629) {
      throw "unwind";
    }
  }
  function _0x4e14cc(_0x525770, _0x9c1772) {
    if (_0x31a725) {
      return;
    }
    if (_0x9c1772) {
      _0x525770();
      return;
    }
    try {
      _0x525770();
    } catch (_0x203a04) {
      if (_0x203a04 instanceof _0x30c165) {
        return;
      } else if (_0x203a04 !== "unwind") {
        if (_0x203a04 && typeof _0x203a04 === "object" && _0x203a04.stack) {
          _0x551fc8("exception thrown: " + [_0x203a04, _0x203a04.stack]);
        }
        throw _0x203a04;
      }
    }
  }
  var _0x32b533 = {
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
        _0x32b533.mainLoop.scheduler = null;
        _0x32b533.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x32b533.mainLoop.currentlyRunningMainloop++;
        var _0x3543e2 = _0x32b533.mainLoop.timingMode;
        var _0x14c451 = _0x32b533.mainLoop.timingValue;
        var _0x335861 = _0x32b533.mainLoop.func;
        _0x32b533.mainLoop.func = null;
        _0x5ba03a(_0x335861, 0, false, _0x32b533.mainLoop.arg, true);
        _0x2b96c5(_0x3543e2, _0x14c451);
        _0x32b533.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0xc94e0.setStatus) {
          var _0x4498bd = _0xc94e0.statusMessage || "Please wait...";
          var _0x3158b3 = _0x32b533.mainLoop.remainingBlockers;
          var _0xbe4180 = _0x32b533.mainLoop.expectedBlockers;
          if (_0x3158b3) {
            if (_0x3158b3 < _0xbe4180) {
              _0xc94e0.setStatus(_0x4498bd + " (" + (_0xbe4180 - _0x3158b3) + "/" + _0xbe4180 + ")");
            } else {
              _0xc94e0.setStatus(_0x4498bd);
            }
          } else {
            _0xc94e0.setStatus("");
          }
        }
      },
      runIter: function (_0x591764) {
        if (_0x31a725) {
          return;
        }
        if (_0xc94e0.preMainLoop) {
          var _0x43ab46 = _0xc94e0.preMainLoop();
          if (_0x43ab46 === false) {
            return;
          }
        }
        _0x4e14cc(_0x591764);
        if (_0xc94e0.postMainLoop) {
          _0xc94e0.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0xc94e0.preloadPlugins) {
        _0xc94e0.preloadPlugins = [];
      }
      if (_0x32b533.initted) {
        return;
      }
      _0x32b533.initted = true;
      try {
        new Blob();
        _0x32b533.hasBlobConstructor = true;
      } catch (_0x54190b) {
        _0x32b533.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x32b533.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x32b533.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x32b533.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0xc94e0.noImageDecoding && typeof _0x32b533.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0xc94e0.noImageDecoding = true;
      }
      var _0x2e04ec = {};
      _0x2e04ec.canHandle = function _0x34f688(_0x484320) {
        return !_0xc94e0.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x484320);
      };
      _0x2e04ec.handle = function _0x4ed709(_0x330107, _0x281210, _0x13bf98, _0x410173) {
        var _0x325e46 = null;
        if (_0x32b533.hasBlobConstructor) {
          try {
            _0x325e46 = new Blob([_0x330107], {
              type: _0x32b533.getMimetype(_0x281210)
            });
            if (_0x325e46.size !== _0x330107.length) {
              _0x325e46 = new Blob([new Uint8Array(_0x330107).buffer], {
                type: _0x32b533.getMimetype(_0x281210)
              });
            }
          } catch (_0x2dccf9) {
            _0x111cca("Blob constructor present but fails: " + _0x2dccf9 + "; falling back to blob builder");
          }
        }
        if (!_0x325e46) {
          var _0x25c7e4 = new _0x32b533.BlobBuilder();
          _0x25c7e4.append(new Uint8Array(_0x330107).buffer);
          _0x325e46 = _0x25c7e4.getBlob();
        }
        var _0x4bb8be = _0x32b533.URLObject.createObjectURL(_0x325e46);
        var _0x107fe3 = new Image();
        _0x107fe3.onload = function _0xeabe0f() {
          _0x1bfc0b(_0x107fe3.complete, "Image " + _0x281210 + " could not be decoded");
          var _0xc8ba96 = document.createElement("canvas");
          _0xc8ba96.width = _0x107fe3.width;
          _0xc8ba96.height = _0x107fe3.height;
          var _0x24cc4f = _0xc8ba96.getContext("2d");
          _0x24cc4f.drawImage(_0x107fe3, 0, 0);
          _0xc94e0.preloadedImages[_0x281210] = _0xc8ba96;
          _0x32b533.URLObject.revokeObjectURL(_0x4bb8be);
          if (_0x13bf98) {
            _0x13bf98(_0x330107);
          }
        };
        _0x107fe3.onerror = function _0x4f311b(_0x480c4e) {
          console.log("Image " + _0x4bb8be + " could not be decoded");
          if (_0x410173) {
            _0x410173();
          }
        };
        _0x107fe3.src = _0x4bb8be;
      };
      _0xc94e0.preloadPlugins.push(_0x2e04ec);
      var _0x3b869b = {};
      _0x3b869b.canHandle = function _0x342864(_0x340c55) {
        return !_0xc94e0.noAudioDecoding && _0x340c55.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x3b869b.handle = function _0x3d35dc(_0x8da3d, _0x449461, _0x5ab22e, _0x28102d) {
        var _0x10e825 = false;
        function _0x1a8487(_0x3165b3) {
          if (_0x10e825) {
            return;
          }
          _0x10e825 = true;
          _0xc94e0.preloadedAudios[_0x449461] = _0x3165b3;
          if (_0x5ab22e) {
            _0x5ab22e(_0x8da3d);
          }
        }
        function _0x8a7ae() {
          if (_0x10e825) {
            return;
          }
          _0x10e825 = true;
          _0xc94e0.preloadedAudios[_0x449461] = new Audio();
          if (_0x28102d) {
            _0x28102d();
          }
        }
        if (_0x32b533.hasBlobConstructor) {
          try {
            var _0x55ae5c = new Blob([_0x8da3d], {
              type: _0x32b533.getMimetype(_0x449461)
            });
          } catch (_0x19490a) {
            return _0x8a7ae();
          }
          var _0x14faef = _0x32b533.URLObject.createObjectURL(_0x55ae5c);
          var _0x291a6a = new Audio();
          _0x291a6a.addEventListener("canplaythrough", function () {
            _0x1a8487(_0x291a6a);
          }, false);
          _0x291a6a.onerror = function _0x5c85f6(_0x4d69e7) {
            if (_0x10e825) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x449461 + ", trying slower base64 approach");
            function _0x2ac642(_0x41633b) {
              var _0x23620f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x4d3128 = "=";
              var _0x5b91f7 = "";
              var _0x95b761 = 0;
              var _0x5323ab = 0;
              for (var _0x12ce84 = 0; _0x12ce84 < _0x41633b.length; _0x12ce84++) {
                _0x95b761 = _0x95b761 << 8 | _0x41633b[_0x12ce84];
                _0x5323ab += 8;
                while (_0x5323ab >= 6) {
                  var _0x5791c0 = _0x95b761 >> _0x5323ab - 6 & 63;
                  _0x5323ab -= 6;
                  _0x5b91f7 += _0x23620f[_0x5791c0];
                }
              }
              if (_0x5323ab == 2) {
                _0x5b91f7 += _0x23620f[(_0x95b761 & 3) << 4];
                _0x5b91f7 += _0x4d3128 + _0x4d3128;
              } else if (_0x5323ab == 4) {
                _0x5b91f7 += _0x23620f[(_0x95b761 & 15) << 2];
                _0x5b91f7 += _0x4d3128;
              }
              return _0x5b91f7;
            }
            _0x291a6a.src = "data:audio/x-" + _0x449461.substr(-3) + ";base64," + _0x2ac642(_0x8da3d);
            _0x1a8487(_0x291a6a);
          };
          _0x291a6a.src = _0x14faef;
          _0x32b533.safeSetTimeout(function () {
            _0x1a8487(_0x291a6a);
          }, 10000);
        } else {
          return _0x8a7ae();
        }
      };
      _0xc94e0.preloadPlugins.push(_0x3b869b);
      function _0x164dee() {
        _0x32b533.pointerLock = document.pointerLockElement === _0xc94e0.canvas || document.mozPointerLockElement === _0xc94e0.canvas || document.webkitPointerLockElement === _0xc94e0.canvas || document.msPointerLockElement === _0xc94e0.canvas;
      }
      var _0x4867c1 = _0xc94e0.canvas;
      if (_0x4867c1) {
        _0x4867c1.requestPointerLock = _0x4867c1.requestPointerLock || _0x4867c1.mozRequestPointerLock || _0x4867c1.webkitRequestPointerLock || _0x4867c1.msRequestPointerLock || function () {};
        _0x4867c1.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x4867c1.exitPointerLock = _0x4867c1.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x164dee, false);
        document.addEventListener("mozpointerlockchange", _0x164dee, false);
        document.addEventListener("webkitpointerlockchange", _0x164dee, false);
        document.addEventListener("mspointerlockchange", _0x164dee, false);
        if (_0xc94e0.elementPointerLock) {
          _0x4867c1.addEventListener("click", function (_0x3c4c80) {
            if (!_0x32b533.pointerLock && _0xc94e0.canvas.requestPointerLock) {
              _0xc94e0.canvas.requestPointerLock();
              _0x3c4c80.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x5efb04, _0x2a3202, _0x541ff9, _0x179c84) {
      if (_0x2a3202 && _0xc94e0.ctx && _0x5efb04 == _0xc94e0.canvas) {
        return _0xc94e0.ctx;
      }
      var _0x31a915;
      var _0x608586;
      if (_0x2a3202) {
        var _0x3389e4 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x179c84) {
          for (var _0x4a4b67 in _0x179c84) {
            _0x3389e4[_0x4a4b67] = _0x179c84[_0x4a4b67];
          }
        }
        if (typeof _0x797e34 !== "undefined") {
          _0x608586 = _0x797e34.createContext(_0x5efb04, _0x3389e4);
          if (_0x608586) {
            _0x31a915 = _0x797e34.getContext(_0x608586).GLctx;
          }
        }
      } else {
        _0x31a915 = _0x5efb04.getContext("2d");
      }
      if (!_0x31a915) {
        return null;
      }
      if (_0x541ff9) {
        if (!_0x2a3202) {
          _0x1bfc0b(typeof _0x3494f0 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0xc94e0.ctx = _0x31a915;
        if (_0x2a3202) {
          _0x797e34.makeContextCurrent(_0x608586);
        }
        _0xc94e0.useWebGL = _0x2a3202;
        _0x32b533.moduleContextCreatedCallbacks.forEach(function (_0x3aeb14) {
          _0x3aeb14();
        });
        _0x32b533.init();
      }
      return _0x31a915;
    },
    destroyContext: function (_0x15b776, _0x271c7a, _0x120c97) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x43b9f8, _0x3eef3c) {
      _0x32b533.lockPointer = _0x43b9f8;
      _0x32b533.resizeCanvas = _0x3eef3c;
      if (typeof _0x32b533.lockPointer === "undefined") {
        _0x32b533.lockPointer = true;
      }
      if (typeof _0x32b533.resizeCanvas === "undefined") {
        _0x32b533.resizeCanvas = false;
      }
      var _0x5073b9 = _0xc94e0.canvas;
      function _0xeac6bb() {
        _0x32b533.isFullscreen = false;
        var _0x1c2b40 = _0x5073b9.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x1c2b40) {
          _0x5073b9.exitFullscreen = _0x32b533.exitFullscreen;
          if (_0x32b533.lockPointer) {
            _0x5073b9.requestPointerLock();
          }
          _0x32b533.isFullscreen = true;
          if (_0x32b533.resizeCanvas) {
            _0x32b533.setFullscreenCanvasSize();
          } else {
            _0x32b533.updateCanvasDimensions(_0x5073b9);
          }
        } else {
          _0x1c2b40.parentNode.insertBefore(_0x5073b9, _0x1c2b40);
          _0x1c2b40.parentNode.removeChild(_0x1c2b40);
          if (_0x32b533.resizeCanvas) {
            _0x32b533.setWindowedCanvasSize();
          } else {
            _0x32b533.updateCanvasDimensions(_0x5073b9);
          }
        }
        if (_0xc94e0.onFullScreen) {
          _0xc94e0.onFullScreen(_0x32b533.isFullscreen);
        }
        if (_0xc94e0.onFullscreen) {
          _0xc94e0.onFullscreen(_0x32b533.isFullscreen);
        }
      }
      if (!_0x32b533.fullscreenHandlersInstalled) {
        _0x32b533.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0xeac6bb, false);
        document.addEventListener("mozfullscreenchange", _0xeac6bb, false);
        document.addEventListener("webkitfullscreenchange", _0xeac6bb, false);
        document.addEventListener("MSFullscreenChange", _0xeac6bb, false);
      }
      var _0xc7ed61 = document.createElement("div");
      _0x5073b9.parentNode.insertBefore(_0xc7ed61, _0x5073b9);
      _0xc7ed61.appendChild(_0x5073b9);
      _0xc7ed61.requestFullscreen = _0xc7ed61.requestFullscreen || _0xc7ed61.mozRequestFullScreen || _0xc7ed61.msRequestFullscreen || (_0xc7ed61.webkitRequestFullscreen ? function () {
        _0xc7ed61.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0xc7ed61.webkitRequestFullScreen ? function () {
        _0xc7ed61.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0xc7ed61.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x32b533.isFullscreen) {
        return false;
      }
      var _0x3594d1 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x3594d1.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x44471a) {
      var _0x11fc2d = Date.now();
      if (_0x32b533.nextRAF === 0) {
        _0x32b533.nextRAF = _0x11fc2d + 1000 / 60;
      } else {
        while (_0x11fc2d + 2 >= _0x32b533.nextRAF) {
          _0x32b533.nextRAF += 1000 / 60;
        }
      }
      var _0x507320 = Math.max(_0x32b533.nextRAF - _0x11fc2d, 0);
      setTimeout(_0x44471a, _0x507320);
    },
    requestAnimationFrame: function (_0x4d0ef9) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x4d0ef9);
        return;
      }
      var _0x2bbcdd = _0x32b533.fakeRequestAnimationFrame;
      _0x2bbcdd(_0x4d0ef9);
    },
    safeRequestAnimationFrame: function (_0x238ec0) {
      return _0x32b533.requestAnimationFrame(function () {
        _0x4e14cc(_0x238ec0);
      });
    },
    safeSetTimeout: function (_0x3e40f3, _0xe90ca7) {
      return setTimeout(function () {
        _0x4e14cc(_0x3e40f3);
      }, _0xe90ca7);
    },
    getMimetype: function (_0x452dda) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x452dda.substr(_0x452dda.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x474d60) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x474d60);
    },
    getMovementX: function (_0x89f718) {
      return _0x89f718.movementX || _0x89f718.mozMovementX || _0x89f718.webkitMovementX || 0;
    },
    getMovementY: function (_0x2a2d55) {
      return _0x2a2d55.movementY || _0x2a2d55.mozMovementY || _0x2a2d55.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x253897) {
      var _0x327223 = 0;
      switch (_0x253897.type) {
        case "DOMMouseScroll":
          _0x327223 = _0x253897.detail / 3;
          break;
        case "mousewheel":
          _0x327223 = _0x253897.wheelDelta / 120;
          break;
        case "wheel":
          _0x327223 = _0x253897.deltaY;
          switch (_0x253897.deltaMode) {
            case 0:
              _0x327223 /= 100;
              break;
            case 1:
              _0x327223 /= 3;
              break;
            case 2:
              _0x327223 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x253897.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x253897.type;
      }
      return _0x327223;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x1cea1c) {
      if (_0x32b533.pointerLock) {
        if (_0x1cea1c.type != "mousemove" && "mozMovementX" in _0x1cea1c) {
          _0x32b533.mouseMovementX = _0x32b533.mouseMovementY = 0;
        } else {
          _0x32b533.mouseMovementX = _0x32b533.getMovementX(_0x1cea1c);
          _0x32b533.mouseMovementY = _0x32b533.getMovementY(_0x1cea1c);
        }
        if (typeof SDL != "undefined") {
          _0x32b533.mouseX = SDL.mouseX + _0x32b533.mouseMovementX;
          _0x32b533.mouseY = SDL.mouseY + _0x32b533.mouseMovementY;
        } else {
          _0x32b533.mouseX += _0x32b533.mouseMovementX;
          _0x32b533.mouseY += _0x32b533.mouseMovementY;
        }
      } else {
        var _0x41465 = _0xc94e0.canvas.getBoundingClientRect();
        var _0x19f7e5 = _0xc94e0.canvas.width;
        var _0x32ff29 = _0xc94e0.canvas.height;
        var _0x4ef444 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x103b22 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x1cea1c.type === "touchstart" || _0x1cea1c.type === "touchend" || _0x1cea1c.type === "touchmove") {
          var _0x214ac4 = _0x1cea1c.touch;
          if (_0x214ac4 === undefined) {
            return;
          }
          var _0x4aab51 = _0x214ac4.pageX - (_0x4ef444 + _0x41465.left);
          var _0xe8d9cf = _0x214ac4.pageY - (_0x103b22 + _0x41465.top);
          _0x4aab51 = _0x4aab51 * (_0x19f7e5 / _0x41465.width);
          _0xe8d9cf = _0xe8d9cf * (_0x32ff29 / _0x41465.height);
          var _0x4401ca = {
            x: _0x4aab51,
            y: _0xe8d9cf
          };
          if (_0x1cea1c.type === "touchstart") {
            _0x32b533.lastTouches[_0x214ac4.identifier] = _0x4401ca;
            _0x32b533.touches[_0x214ac4.identifier] = _0x4401ca;
          } else if (_0x1cea1c.type === "touchend" || _0x1cea1c.type === "touchmove") {
            var _0x11dda4 = _0x32b533.touches[_0x214ac4.identifier];
            if (!_0x11dda4) {
              _0x11dda4 = _0x4401ca;
            }
            _0x32b533.lastTouches[_0x214ac4.identifier] = _0x11dda4;
            _0x32b533.touches[_0x214ac4.identifier] = _0x4401ca;
          }
          return;
        }
        var _0x2a1e95 = _0x1cea1c.pageX - (_0x4ef444 + _0x41465.left);
        var _0x4ad1ab = _0x1cea1c.pageY - (_0x103b22 + _0x41465.top);
        _0x2a1e95 = _0x2a1e95 * (_0x19f7e5 / _0x41465.width);
        _0x4ad1ab = _0x4ad1ab * (_0x32ff29 / _0x41465.height);
        _0x32b533.mouseMovementX = _0x2a1e95 - _0x32b533.mouseX;
        _0x32b533.mouseMovementY = _0x4ad1ab - _0x32b533.mouseY;
        _0x32b533.mouseX = _0x2a1e95;
        _0x32b533.mouseY = _0x4ad1ab;
      }
    },
    asyncLoad: function (_0x1a1577, _0x5069cd, _0x12c2ab, _0x4346b8) {
      var _0x407067 = !_0x4346b8 ? _0x4e7ec8("al " + _0x1a1577) : "";
      _0xae001a(_0x1a1577, function (_0xe5adca) {
        _0x1bfc0b(_0xe5adca, "Loading data file \"" + _0x1a1577 + "\" failed (no arrayBuffer).");
        _0x5069cd(new Uint8Array(_0xe5adca));
        if (_0x407067) {
          _0x3ac9a4(_0x407067);
        }
      }, function (_0x5c9656) {
        if (_0x12c2ab) {
          _0x12c2ab();
        } else {
          throw "Loading data file \"" + _0x1a1577 + "\" failed.";
        }
      });
      if (_0x407067) {
        _0x228ea(_0x407067);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x43f99e = _0xc94e0.canvas;
      _0x32b533.resizeListeners.forEach(function (_0x45ba31) {
        _0x45ba31(_0x43f99e.width, _0x43f99e.height);
      });
    },
    setCanvasSize: function (_0x472c5b, _0x2a2cf7, _0x573b3f) {
      var _0x16799e = _0xc94e0.canvas;
      _0x32b533.updateCanvasDimensions(_0x16799e, _0x472c5b, _0x2a2cf7);
      if (!_0x573b3f) {
        _0x32b533.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x2b2e7c = _0x5305b0[SDL.screen >> 2];
        _0x2b2e7c = _0x2b2e7c | 8388608;
        _0x14d31c[SDL.screen >> 2] = _0x2b2e7c;
      }
      _0x32b533.updateCanvasDimensions(_0xc94e0.canvas);
      _0x32b533.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x49c345 = _0x5305b0[SDL.screen >> 2];
        _0x49c345 = _0x49c345 & ~8388608;
        _0x14d31c[SDL.screen >> 2] = _0x49c345;
      }
      _0x32b533.updateCanvasDimensions(_0xc94e0.canvas);
      _0x32b533.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x801ad1, _0x2b9235, _0x3d2154) {
      if (_0x2b9235 && _0x3d2154) {
        _0x801ad1.widthNative = _0x2b9235;
        _0x801ad1.heightNative = _0x3d2154;
      } else {
        _0x2b9235 = _0x801ad1.widthNative;
        _0x3d2154 = _0x801ad1.heightNative;
      }
      var _0x1bb635 = _0x2b9235;
      var _0x513d6e = _0x3d2154;
      if (_0xc94e0.forcedAspectRatio && _0xc94e0.forcedAspectRatio > 0) {
        if (_0x1bb635 / _0x513d6e < _0xc94e0.forcedAspectRatio) {
          _0x1bb635 = Math.round(_0x513d6e * _0xc94e0.forcedAspectRatio);
        } else {
          _0x513d6e = Math.round(_0x1bb635 / _0xc94e0.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x801ad1.parentNode && typeof screen != "undefined") {
        var _0x12e416 = Math.min(screen.width / _0x1bb635, screen.height / _0x513d6e);
        _0x1bb635 = Math.round(_0x1bb635 * _0x12e416);
        _0x513d6e = Math.round(_0x513d6e * _0x12e416);
      }
      if (_0x32b533.resizeCanvas) {
        if (_0x801ad1.width != _0x1bb635) {
          _0x801ad1.width = _0x1bb635;
        }
        if (_0x801ad1.height != _0x513d6e) {
          _0x801ad1.height = _0x513d6e;
        }
        if (typeof _0x801ad1.style != "undefined") {
          _0x801ad1.style.removeProperty("width");
          _0x801ad1.style.removeProperty("height");
        }
      } else {
        if (_0x801ad1.width != _0x2b9235) {
          _0x801ad1.width = _0x2b9235;
        }
        if (_0x801ad1.height != _0x3d2154) {
          _0x801ad1.height = _0x3d2154;
        }
        if (typeof _0x801ad1.style != "undefined") {
          if (_0x1bb635 != _0x2b9235 || _0x513d6e != _0x3d2154) {
            _0x801ad1.style.setProperty("width", _0x1bb635 + "px", "important");
            _0x801ad1.style.setProperty("height", _0x513d6e + "px", "important");
          } else {
            _0x801ad1.style.removeProperty("width");
            _0x801ad1.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x499f15 = _0x32b533.nextWgetRequestHandle;
      _0x32b533.nextWgetRequestHandle++;
      return _0x499f15;
    }
  };
  function _0x6c4b8e() {
    _0x32b533.mainLoop.pause();
    _0x32b533.mainLoop.func = null;
  }
  function _0x5e0778(_0x5e2bbd) {
    clearInterval(_0x5e2bbd);
  }
  var _0x58f09e = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x359c93 = _0x58f09e.eventHandlers.length - 1; _0x359c93 >= 0; --_0x359c93) {
        _0x58f09e._removeHandler(_0x359c93);
      }
      _0x58f09e.eventHandlers = [];
      _0x58f09e.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x58f09e.removeEventListenersRegistered) {
        _0xeba85f.push(_0x58f09e.removeAllEventListeners);
        _0x58f09e.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x138d11, _0x49d9e6, _0x9f3d1d) {
      function _0x3ecef1(_0x1db351, _0x261df8) {
        if (_0x1db351.length != _0x261df8.length) {
          return false;
        }
        for (var _0x2a17ab in _0x1db351) {
          if (_0x1db351[_0x2a17ab] != _0x261df8[_0x2a17ab]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x481b6b in _0x58f09e.deferredCalls) {
        var _0xd2cf79 = _0x58f09e.deferredCalls[_0x481b6b];
        if (_0xd2cf79.targetFunction == _0x138d11 && _0x3ecef1(_0xd2cf79.argsList, _0x9f3d1d)) {
          return;
        }
      }
      _0x58f09e.deferredCalls.push({
        targetFunction: _0x138d11,
        precedence: _0x49d9e6,
        argsList: _0x9f3d1d
      });
      _0x58f09e.deferredCalls.sort(function (_0x326d40, _0xcf6045) {
        return _0x326d40.precedence < _0xcf6045.precedence;
      });
    },
    removeDeferredCalls: function (_0x1b77b5) {
      for (var _0x4bef5c = 0; _0x4bef5c < _0x58f09e.deferredCalls.length; ++_0x4bef5c) {
        if (_0x58f09e.deferredCalls[_0x4bef5c].targetFunction == _0x1b77b5) {
          _0x58f09e.deferredCalls.splice(_0x4bef5c, 1);
          --_0x4bef5c;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x58f09e.inEventHandler && _0x58f09e.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x58f09e.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x59bf49 = 0; _0x59bf49 < _0x58f09e.deferredCalls.length; ++_0x59bf49) {
        var _0x5b488b = _0x58f09e.deferredCalls[_0x59bf49];
        _0x58f09e.deferredCalls.splice(_0x59bf49, 1);
        --_0x59bf49;
        _0x5b488b.targetFunction.apply(null, _0x5b488b.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x5a69be, _0x2e966a) {
      for (var _0xea0968 = 0; _0xea0968 < _0x58f09e.eventHandlers.length; ++_0xea0968) {
        if (_0x58f09e.eventHandlers[_0xea0968].target == _0x5a69be && (!_0x2e966a || _0x2e966a == _0x58f09e.eventHandlers[_0xea0968].eventTypeString)) {
          _0x58f09e._removeHandler(_0xea0968--);
        }
      }
    },
    _removeHandler: function (_0x33d2bf) {
      var _0x417dfb = _0x58f09e.eventHandlers[_0x33d2bf];
      _0x417dfb.target.removeEventListener(_0x417dfb.eventTypeString, _0x417dfb.eventListenerFunc, _0x417dfb.useCapture);
      _0x58f09e.eventHandlers.splice(_0x33d2bf, 1);
    },
    registerOrRemoveHandler: function (_0x3b59ee) {
      var _0x2fdbeb = function _0x5b0190(_0x4df792) {
        ++_0x58f09e.inEventHandler;
        _0x58f09e.currentEventHandler = _0x3b59ee;
        _0x58f09e.runDeferredCalls();
        _0x3b59ee.handlerFunc(_0x4df792);
        _0x58f09e.runDeferredCalls();
        --_0x58f09e.inEventHandler;
      };
      if (_0x3b59ee.callbackfunc) {
        _0x3b59ee.eventListenerFunc = _0x2fdbeb;
        _0x3b59ee.target.addEventListener(_0x3b59ee.eventTypeString, _0x2fdbeb, _0x3b59ee.useCapture);
        _0x58f09e.eventHandlers.push(_0x3b59ee);
        _0x58f09e.registerRemoveEventListeners();
      } else {
        for (var _0x125855 = 0; _0x125855 < _0x58f09e.eventHandlers.length; ++_0x125855) {
          if (_0x58f09e.eventHandlers[_0x125855].target == _0x3b59ee.target && _0x58f09e.eventHandlers[_0x125855].eventTypeString == _0x3b59ee.eventTypeString) {
            _0x58f09e._removeHandler(_0x125855--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x6302bf) {
      if (!_0x6302bf) {
        return "";
      }
      if (_0x6302bf == window) {
        return "#window";
      }
      if (_0x6302bf == screen) {
        return "#screen";
      }
      if (_0x6302bf && _0x6302bf.nodeName) {
        return _0x6302bf.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x32c1ba = {};
  function _0x39ddad(_0x24b645) {
    if (_0x24b645 > 2) {
      return _0x21e34e(_0x24b645);
    } else {
      return _0x24b645;
    }
  }
  var _0x29983a = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x40e4fc(_0x5f4f99) {
    _0x5f4f99 = _0x39ddad(_0x5f4f99);
    var _0x37b718 = _0x29983a[_0x5f4f99] || (typeof document !== "undefined" ? document.querySelector(_0x5f4f99) : undefined);
    return _0x37b718;
  }
  function _0x49e8f3(_0x1717fa) {
    return _0x40e4fc(_0x1717fa);
  }
  function _0x454295(_0x357b68, _0x48c454, _0x399ff5) {
    var _0x5a18b8 = _0x49e8f3(_0x357b68);
    if (!_0x5a18b8) {
      return -4;
    }
    _0x14d31c[_0x48c454 >> 2] = _0x5a18b8.width;
    _0x14d31c[_0x399ff5 >> 2] = _0x5a18b8.height;
  }
  function _0xf5afce(_0xe937ae) {
    var _0x4e335c = _0x1b881f();
    var _0x5161eb = _0x432d16(8);
    var _0x4a749e = _0x5161eb + 4;
    var _0x330fae = _0x432d16(_0xe937ae.id.length + 1);
    _0x331149(_0xe937ae.id, _0x330fae, _0xe937ae.id.length + 1);
    var _0x4ef619 = _0x454295(_0x330fae, _0x5161eb, _0x4a749e);
    var _0x436996 = [_0x14d31c[_0x5161eb >> 2], _0x14d31c[_0x4a749e >> 2]];
    _0x2351aa(_0x4e335c);
    return _0x436996;
  }
  function _0x15f0bd(_0x25290c, _0x4237bc, _0x2a41a0) {
    var _0x2564bd = _0x49e8f3(_0x25290c);
    if (!_0x2564bd) {
      return -4;
    }
    _0x2564bd.width = _0x4237bc;
    _0x2564bd.height = _0x2a41a0;
    return 0;
  }
  function _0x274a7f(_0x2828d8, _0x4f4dc0, _0x593582) {
    if (!_0x2828d8.controlTransferredOffscreen) {
      _0x2828d8.width = _0x4f4dc0;
      _0x2828d8.height = _0x593582;
    } else {
      var _0x59c6d8 = _0x1b881f();
      var _0x5396cc = _0x432d16(_0x2828d8.id.length + 1);
      _0x331149(_0x2828d8.id, _0x5396cc, _0x2828d8.id.length + 1);
      _0x15f0bd(_0x5396cc, _0x4f4dc0, _0x593582);
      _0x2351aa(_0x59c6d8);
    }
  }
  function _0x4f7a79(_0x30c705) {
    var _0x4b97d0 = _0xf5afce(_0x30c705);
    var _0x1d1982 = _0x4b97d0[0];
    var _0x5277c5 = _0x4b97d0[1];
    var _0x333c03 = _0x30c705.style.width;
    var _0xaf8464 = _0x30c705.style.height;
    var _0x15b279 = _0x30c705.style.backgroundColor;
    var _0x378ef3 = document.body.style.backgroundColor;
    var _0x192b77 = _0x30c705.style.paddingLeft;
    var _0x3d2f98 = _0x30c705.style.paddingRight;
    var _0x289ea5 = _0x30c705.style.paddingTop;
    var _0x40b4ba = _0x30c705.style.paddingBottom;
    var _0x14ca2b = _0x30c705.style.marginLeft;
    var _0x3a9bf5 = _0x30c705.style.marginRight;
    var _0xa3081b = _0x30c705.style.marginTop;
    var _0x12b48b = _0x30c705.style.marginBottom;
    var _0x4581ce = document.body.style.margin;
    var _0x46c9ae = document.documentElement.style.overflow;
    var _0x14d800 = document.body.scroll;
    var _0x383150 = _0x30c705.style.imageRendering;
    function _0x1cd258() {
      var _0x52e4d4 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x52e4d4) {
        document.removeEventListener("fullscreenchange", _0x1cd258);
        document.removeEventListener("webkitfullscreenchange", _0x1cd258);
        _0x274a7f(_0x30c705, _0x1d1982, _0x5277c5);
        _0x30c705.style.width = _0x333c03;
        _0x30c705.style.height = _0xaf8464;
        _0x30c705.style.backgroundColor = _0x15b279;
        if (!_0x378ef3) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x378ef3;
        _0x30c705.style.paddingLeft = _0x192b77;
        _0x30c705.style.paddingRight = _0x3d2f98;
        _0x30c705.style.paddingTop = _0x289ea5;
        _0x30c705.style.paddingBottom = _0x40b4ba;
        _0x30c705.style.marginLeft = _0x14ca2b;
        _0x30c705.style.marginRight = _0x3a9bf5;
        _0x30c705.style.marginTop = _0xa3081b;
        _0x30c705.style.marginBottom = _0x12b48b;
        document.body.style.margin = _0x4581ce;
        document.documentElement.style.overflow = _0x46c9ae;
        document.body.scroll = _0x14d800;
        _0x30c705.style.imageRendering = _0x383150;
        if (_0x30c705.GLctxObject) {
          _0x30c705.GLctxObject.GLctx.viewport(0, 0, _0x1d1982, _0x5277c5);
        }
        if (_0x32c1ba.canvasResizedCallback) {
          (function (_0x2ed0ad, _0x4beb5c, _0x2e2fd9) {
            return _0x116539.apply(null, [_0x32c1ba.canvasResizedCallback, _0x2ed0ad, _0x4beb5c, _0x2e2fd9]);
          })(37, 0, _0x32c1ba.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x1cd258);
    document.addEventListener("webkitfullscreenchange", _0x1cd258);
    return _0x1cd258;
  }
  function _0x15939d(_0x409432, _0x47e964, _0x5eebd1) {
    _0x409432.style.paddingLeft = _0x409432.style.paddingRight = _0x5eebd1 + "px";
    _0x409432.style.paddingTop = _0x409432.style.paddingBottom = _0x47e964 + "px";
  }
  function _0x5ac81a(_0x358ee4) {
    if (_0x29983a.indexOf(_0x358ee4) < 0) {
      return _0x358ee4.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x1083ec(_0x604ef4, _0x51a134) {
    var _0x5bc6b1 = _0x4f7a79(_0x604ef4);
    var _0x4a6eb1 = _0x51a134.softFullscreen ? innerWidth : screen.width;
    var _0x37daeb = _0x51a134.softFullscreen ? innerHeight : screen.height;
    var _0xb6c359 = _0x5ac81a(_0x604ef4);
    var _0x396f1c = _0xb6c359.width;
    var _0x430507 = _0xb6c359.height;
    var _0x5bceed = _0xf5afce(_0x604ef4);
    var _0x16b081 = _0x5bceed[0];
    var _0x472109 = _0x5bceed[1];
    if (_0x51a134.scaleMode == 3) {
      _0x15939d(_0x604ef4, (_0x37daeb - _0x430507) / 2, (_0x4a6eb1 - _0x396f1c) / 2);
      _0x4a6eb1 = _0x396f1c;
      _0x37daeb = _0x430507;
    } else if (_0x51a134.scaleMode == 2) {
      if (_0x4a6eb1 * _0x472109 < _0x16b081 * _0x37daeb) {
        var _0x3bbdc5 = _0x472109 * _0x4a6eb1 / _0x16b081;
        _0x15939d(_0x604ef4, (_0x37daeb - _0x3bbdc5) / 2, 0);
        _0x37daeb = _0x3bbdc5;
      } else {
        var _0x775cb0 = _0x16b081 * _0x37daeb / _0x472109;
        _0x15939d(_0x604ef4, 0, (_0x4a6eb1 - _0x775cb0) / 2);
        _0x4a6eb1 = _0x775cb0;
      }
    }
    if (!_0x604ef4.style.backgroundColor) {
      _0x604ef4.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x604ef4.style.width = _0x4a6eb1 + "px";
    _0x604ef4.style.height = _0x37daeb + "px";
    if (_0x51a134.filteringMode == 1) {
      _0x604ef4.style.imageRendering = "optimizeSpeed";
      _0x604ef4.style.imageRendering = "-moz-crisp-edges";
      _0x604ef4.style.imageRendering = "-o-crisp-edges";
      _0x604ef4.style.imageRendering = "-webkit-optimize-contrast";
      _0x604ef4.style.imageRendering = "optimize-contrast";
      _0x604ef4.style.imageRendering = "crisp-edges";
      _0x604ef4.style.imageRendering = "pixelated";
    }
    var _0xf561b8 = _0x51a134.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x51a134.canvasResolutionScaleMode != 0) {
      var _0x5b778e = _0x4a6eb1 * _0xf561b8 | 0;
      var _0x4a957e = _0x37daeb * _0xf561b8 | 0;
      _0x274a7f(_0x604ef4, _0x5b778e, _0x4a957e);
      if (_0x604ef4.GLctxObject) {
        _0x604ef4.GLctxObject.GLctx.viewport(0, 0, _0x5b778e, _0x4a957e);
      }
    }
    return _0x5bc6b1;
  }
  function _0x1e0a5f(_0x3b5c6e, _0x34a741) {
    if (_0x34a741.scaleMode != 0 || _0x34a741.canvasResolutionScaleMode != 0) {
      _0x1083ec(_0x3b5c6e, _0x34a741);
    }
    if (_0x3b5c6e.requestFullscreen) {
      _0x3b5c6e.requestFullscreen();
    } else if (_0x3b5c6e.webkitRequestFullscreen) {
      _0x3b5c6e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x58f09e.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x32c1ba = _0x34a741;
    if (_0x34a741.canvasResizedCallback) {
      (function (_0x1fce1a, _0x1c4931, _0x5b3f69) {
        return _0x116539.apply(null, [_0x34a741.canvasResizedCallback, _0x1fce1a, _0x1c4931, _0x5b3f69]);
      })(37, 0, _0x34a741.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x26046e() {
    if (!_0x58f09e.fullscreenEnabled()) {
      return -1;
    }
    _0x58f09e.removeDeferredCalls(_0x1e0a5f);
    var _0x391bcc = _0x29983a[1];
    if (_0x391bcc.exitFullscreen) {
      if (_0x391bcc.fullscreenElement) {
        _0x391bcc.exitFullscreen();
      }
    } else if (_0x391bcc.webkitExitFullscreen) {
      if (_0x391bcc.webkitFullscreenElement) {
        _0x391bcc.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x4d243f(_0x3d864d) {
    if (_0x3d864d.requestPointerLock) {
      _0x3d864d.requestPointerLock();
    } else if (_0x3d864d.msRequestPointerLock) {
      _0x3d864d.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x346ac3() {
    _0x58f09e.removeDeferredCalls(_0x4d243f);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x40871c(_0x3e4f9f) {
    var _0x30d607 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x29acb8 = !!_0x30d607;
    _0x14d31c[_0x3e4f9f >> 2] = _0x29acb8;
    _0x14d31c[_0x3e4f9f + 4 >> 2] = _0x58f09e.fullscreenEnabled();
    var _0x483e9b = _0x29acb8 ? _0x30d607 : _0x58f09e.previousFullscreenElement;
    var _0x2e342a = _0x58f09e.getNodeNameForTarget(_0x483e9b);
    var _0x1f8806 = _0x483e9b && _0x483e9b.id ? _0x483e9b.id : "";
    _0x331149(_0x2e342a, _0x3e4f9f + 8, 128);
    _0x331149(_0x1f8806, _0x3e4f9f + 136, 128);
    _0x14d31c[_0x3e4f9f + 264 >> 2] = _0x483e9b ? _0x483e9b.clientWidth : 0;
    _0x14d31c[_0x3e4f9f + 268 >> 2] = _0x483e9b ? _0x483e9b.clientHeight : 0;
    _0x14d31c[_0x3e4f9f + 272 >> 2] = screen.width;
    _0x14d31c[_0x3e4f9f + 276 >> 2] = screen.height;
    if (_0x29acb8) {
      _0x58f09e.previousFullscreenElement = _0x30d607;
    }
  }
  function _0x201af6(_0x301f41) {
    if (!_0x58f09e.fullscreenEnabled()) {
      return -1;
    }
    _0x40871c(_0x301f41);
    return 0;
  }
  function _0x474ccc(_0x1cded7, _0x615be7) {
    _0x4cdd16[_0x1cded7 >> 3] = _0x615be7.timestamp;
    for (var _0x490e3e = 0; _0x490e3e < _0x615be7.axes.length; ++_0x490e3e) {
      _0x4cdd16[_0x1cded7 + _0x490e3e * 8 + 16 >> 3] = _0x615be7.axes[_0x490e3e];
    }
    for (var _0x490e3e = 0; _0x490e3e < _0x615be7.buttons.length; ++_0x490e3e) {
      if (typeof _0x615be7.buttons[_0x490e3e] === "object") {
        _0x4cdd16[_0x1cded7 + _0x490e3e * 8 + 528 >> 3] = _0x615be7.buttons[_0x490e3e].value;
      } else {
        _0x4cdd16[_0x1cded7 + _0x490e3e * 8 + 528 >> 3] = _0x615be7.buttons[_0x490e3e];
      }
    }
    for (var _0x490e3e = 0; _0x490e3e < _0x615be7.buttons.length; ++_0x490e3e) {
      if (typeof _0x615be7.buttons[_0x490e3e] === "object") {
        _0x14d31c[_0x1cded7 + _0x490e3e * 4 + 1040 >> 2] = _0x615be7.buttons[_0x490e3e].pressed;
      } else {
        _0x14d31c[_0x1cded7 + _0x490e3e * 4 + 1040 >> 2] = _0x615be7.buttons[_0x490e3e] == 1;
      }
    }
    _0x14d31c[_0x1cded7 + 1296 >> 2] = _0x615be7.connected;
    _0x14d31c[_0x1cded7 + 1300 >> 2] = _0x615be7.index;
    _0x14d31c[_0x1cded7 + 8 >> 2] = _0x615be7.axes.length;
    _0x14d31c[_0x1cded7 + 12 >> 2] = _0x615be7.buttons.length;
    _0x331149(_0x615be7.id, _0x1cded7 + 1304, 64);
    _0x331149(_0x615be7.mapping, _0x1cded7 + 1368, 64);
  }
  function _0x1afc8b(_0x38fc90, _0x11103d) {
    if (_0x38fc90 < 0 || _0x38fc90 >= _0x58f09e.lastGamepadState.length) {
      return -5;
    }
    if (!_0x58f09e.lastGamepadState[_0x38fc90]) {
      return -7;
    }
    _0x474ccc(_0x11103d, _0x58f09e.lastGamepadState[_0x38fc90]);
    return 0;
  }
  function _0x437c4d() {
    return 2147483648;
  }
  function _0x2fb16c() {
    return _0x58f09e.lastGamepadState.length;
  }
  function _0x294863() {
    _0x58f09e.removeAllEventListeners();
  }
  function _0x33662a(_0x3dc466) {
    return !_0x797e34.contexts[_0x3dc466] || _0x797e34.contexts[_0x3dc466].GLctx.isContextLost();
  }
  function _0x408283(_0x5e04fb) {
    return _0x5e04fb < 0 || _0x5e04fb === 0 && 1 / _0x5e04fb === -Infinity;
  }
  function _0x53c189(_0x578acb, _0x9b5c53) {
    return (_0x578acb >>> 0) + _0x9b5c53 * 4294967296;
  }
  function _0x4d6add(_0x1f5c6d, _0x4ce89c) {
    return (_0x1f5c6d >>> 0) + (_0x4ce89c >>> 0) * 4294967296;
  }
  function _0x33b4e4(_0x4f8448, _0x2a0093) {
    if (_0x4f8448 <= 0) {
      return _0x4f8448;
    }
    var _0x5afa6b = _0x2a0093 <= 32 ? Math.abs(1 << _0x2a0093 - 1) : Math.pow(2, _0x2a0093 - 1);
    if (_0x4f8448 >= _0x5afa6b && (_0x2a0093 <= 32 || _0x4f8448 > _0x5afa6b)) {
      _0x4f8448 = _0x5afa6b * -2 + _0x4f8448;
    }
    return _0x4f8448;
  }
  function _0x5625d1(_0x461598, _0x2f1ceb) {
    if (_0x461598 >= 0) {
      return _0x461598;
    }
    if (_0x2f1ceb <= 32) {
      return Math.abs(1 << _0x2f1ceb - 1) * 2 + _0x461598;
    } else {
      return Math.pow(2, _0x2f1ceb) + _0x461598;
    }
  }
  function _0x50bd14(_0x12f283, _0x128e96) {
    var _0x2c7cf1 = _0x12f283;
    var _0x1974d9 = _0x128e96;
    function _0xad94b8(_0x72f4c9, _0x59ef27) {
      if (_0x59ef27 === "double" || _0x59ef27 === "i64") {
        if (_0x72f4c9 & 7) {
          _0x72f4c9 += 4;
        }
      } else {}
      return _0x72f4c9;
    }
    function _0x46b540(_0x1ae42a) {
      var _0xcbbf91;
      _0x1974d9 = _0xad94b8(_0x1974d9, _0x1ae42a);
      if (_0x1ae42a === "double") {
        _0xcbbf91 = _0x4cdd16[_0x1974d9 >> 3];
        _0x1974d9 += 8;
      } else if (_0x1ae42a == "i64") {
        _0xcbbf91 = [_0x14d31c[_0x1974d9 >> 2], _0x14d31c[_0x1974d9 + 4 >> 2]];
        _0x1974d9 += 8;
      } else {
        _0x1ae42a = "i32";
        _0xcbbf91 = _0x14d31c[_0x1974d9 >> 2];
        _0x1974d9 += 4;
      }
      return _0xcbbf91;
    }
    var _0x12f83f = [];
    var _0xfeedf2;
    var _0x49c47c;
    var _0x546ba8;
    while (1) {
      var _0x2e789b = _0x2c7cf1;
      _0xfeedf2 = _0x133579[_0x2c7cf1 >> 0];
      if (_0xfeedf2 === 0) {
        break;
      }
      _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
      if (_0xfeedf2 == 37) {
        var _0x2dc500 = false;
        var _0x22d7ab = false;
        var _0x39f738 = false;
        var _0x4f8f3c = false;
        var _0x6e5602 = false;
        _0x459857: while (1) {
          switch (_0x49c47c) {
            case 43:
              _0x2dc500 = true;
              break;
            case 45:
              _0x22d7ab = true;
              break;
            case 35:
              _0x39f738 = true;
              break;
            case 48:
              if (_0x4f8f3c) {
                break _0x459857;
              } else {
                _0x4f8f3c = true;
                break;
              }
            case 32:
              _0x6e5602 = true;
              break;
            default:
              break _0x459857;
          }
          _0x2c7cf1++;
          _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
        }
        var _0x5d6010 = 0;
        if (_0x49c47c == 42) {
          _0x5d6010 = _0x46b540("i32");
          _0x2c7cf1++;
          _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
        } else {
          while (_0x49c47c >= 48 && _0x49c47c <= 57) {
            _0x5d6010 = _0x5d6010 * 10 + (_0x49c47c - 48);
            _0x2c7cf1++;
            _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
          }
        }
        var _0x512905 = false;
        var _0x3017ee = -1;
        if (_0x49c47c == 46) {
          _0x3017ee = 0;
          _0x512905 = true;
          _0x2c7cf1++;
          _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
          if (_0x49c47c == 42) {
            _0x3017ee = _0x46b540("i32");
            _0x2c7cf1++;
          } else {
            while (1) {
              var _0x5b4033 = _0x133579[_0x2c7cf1 + 1 >> 0];
              if (_0x5b4033 < 48 || _0x5b4033 > 57) {
                break;
              }
              _0x3017ee = _0x3017ee * 10 + (_0x5b4033 - 48);
              _0x2c7cf1++;
            }
          }
          _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
        }
        if (_0x3017ee < 0) {
          _0x3017ee = 6;
          _0x512905 = false;
        }
        var _0x20830e;
        switch (String.fromCharCode(_0x49c47c)) {
          case "h":
            var _0x431148 = _0x133579[_0x2c7cf1 + 2 >> 0];
            if (_0x431148 == 104) {
              _0x2c7cf1++;
              _0x20830e = 1;
            } else {
              _0x20830e = 2;
            }
            break;
          case "l":
            var _0x431148 = _0x133579[_0x2c7cf1 + 2 >> 0];
            if (_0x431148 == 108) {
              _0x2c7cf1++;
              _0x20830e = 8;
            } else {
              _0x20830e = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x20830e = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x20830e = 4;
            break;
          default:
            _0x20830e = null;
        }
        if (_0x20830e) {
          _0x2c7cf1++;
        }
        _0x49c47c = _0x133579[_0x2c7cf1 + 1 >> 0];
        switch (String.fromCharCode(_0x49c47c)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x36f3f7 = _0x49c47c == 100 || _0x49c47c == 105;
              _0x20830e = _0x20830e || 4;
              _0x546ba8 = _0x46b540("i" + _0x20830e * 8);
              var _0x4f574d;
              if (_0x20830e == 8) {
                _0x546ba8 = _0x49c47c == 117 ? _0x4d6add(_0x546ba8[0], _0x546ba8[1]) : _0x53c189(_0x546ba8[0], _0x546ba8[1]);
              }
              if (_0x20830e <= 4) {
                var _0x292446 = Math.pow(256, _0x20830e) - 1;
                _0x546ba8 = (_0x36f3f7 ? _0x33b4e4 : _0x5625d1)(_0x546ba8 & _0x292446, _0x20830e * 8);
              }
              var _0x421623 = Math.abs(_0x546ba8);
              var _0x780d5e = "";
              if (_0x49c47c == 100 || _0x49c47c == 105) {
                _0x4f574d = _0x33b4e4(_0x546ba8, _0x20830e * 8, 1).toString(10);
              } else if (_0x49c47c == 117) {
                _0x4f574d = _0x5625d1(_0x546ba8, _0x20830e * 8, 1).toString(10);
                _0x546ba8 = Math.abs(_0x546ba8);
              } else if (_0x49c47c == 111) {
                _0x4f574d = (_0x39f738 ? "0" : "") + _0x421623.toString(8);
              } else if (_0x49c47c == 120 || _0x49c47c == 88) {
                _0x780d5e = _0x39f738 && _0x546ba8 != 0 ? "0x" : "";
                if (_0x546ba8 < 0) {
                  _0x546ba8 = -_0x546ba8;
                  _0x4f574d = (_0x421623 - 1).toString(16);
                  var _0x11fc64 = [];
                  for (var _0x4c6f55 = 0; _0x4c6f55 < _0x4f574d.length; _0x4c6f55++) {
                    _0x11fc64.push((15 - parseInt(_0x4f574d[_0x4c6f55], 16)).toString(16));
                  }
                  _0x4f574d = _0x11fc64.join("");
                  while (_0x4f574d.length < _0x20830e * 2) {
                    _0x4f574d = "f" + _0x4f574d;
                  }
                } else {
                  _0x4f574d = _0x421623.toString(16);
                }
                if (_0x49c47c == 88) {
                  _0x780d5e = _0x780d5e.toUpperCase();
                  _0x4f574d = _0x4f574d.toUpperCase();
                }
              } else if (_0x49c47c == 112) {
                if (_0x421623 === 0) {
                  _0x4f574d = "(nil)";
                } else {
                  _0x780d5e = "0x";
                  _0x4f574d = _0x421623.toString(16);
                }
              }
              if (_0x512905) {
                while (_0x4f574d.length < _0x3017ee) {
                  _0x4f574d = "0" + _0x4f574d;
                }
              }
              if (_0x546ba8 >= 0) {
                if (_0x2dc500) {
                  _0x780d5e = "+" + _0x780d5e;
                } else if (_0x6e5602) {
                  _0x780d5e = " " + _0x780d5e;
                }
              }
              if (_0x4f574d.charAt(0) == "-") {
                _0x780d5e = "-" + _0x780d5e;
                _0x4f574d = _0x4f574d.substr(1);
              }
              while (_0x780d5e.length + _0x4f574d.length < _0x5d6010) {
                if (_0x22d7ab) {
                  _0x4f574d += " ";
                } else if (_0x4f8f3c) {
                  _0x4f574d = "0" + _0x4f574d;
                } else {
                  _0x780d5e = " " + _0x780d5e;
                }
              }
              _0x4f574d = _0x780d5e + _0x4f574d;
              _0x4f574d.split("").forEach(function (_0xb272d9) {
                _0x12f83f.push(_0xb272d9.charCodeAt(0));
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
              _0x546ba8 = _0x46b540("double");
              var _0x4f574d;
              if (isNaN(_0x546ba8)) {
                _0x4f574d = "nan";
                _0x4f8f3c = false;
              } else if (!isFinite(_0x546ba8)) {
                _0x4f574d = (_0x546ba8 < 0 ? "-" : "") + "inf";
                _0x4f8f3c = false;
              } else {
                var _0x4b6b88 = false;
                var _0x4d81e9 = Math.min(_0x3017ee, 20);
                if (_0x49c47c == 103 || _0x49c47c == 71) {
                  _0x4b6b88 = true;
                  _0x3017ee = _0x3017ee || 1;
                  var _0x22c46d = parseInt(_0x546ba8.toExponential(_0x4d81e9).split("e")[1], 10);
                  if (_0x3017ee > _0x22c46d && _0x22c46d >= -4) {
                    _0x49c47c = (_0x49c47c == 103 ? "f" : "F").charCodeAt(0);
                    _0x3017ee -= _0x22c46d + 1;
                  } else {
                    _0x49c47c = (_0x49c47c == 103 ? "e" : "E").charCodeAt(0);
                    _0x3017ee--;
                  }
                  _0x4d81e9 = Math.min(_0x3017ee, 20);
                }
                if (_0x49c47c == 101 || _0x49c47c == 69) {
                  _0x4f574d = _0x546ba8.toExponential(_0x4d81e9);
                  if (/[eE][-+]\d$/.test(_0x4f574d)) {
                    _0x4f574d = _0x4f574d.slice(0, -1) + "0" + _0x4f574d.slice(-1);
                  }
                } else if (_0x49c47c == 102 || _0x49c47c == 70) {
                  _0x4f574d = _0x546ba8.toFixed(_0x4d81e9);
                  if (_0x546ba8 === 0 && _0x408283(_0x546ba8)) {
                    _0x4f574d = "-" + _0x4f574d;
                  }
                }
                var _0xf39535 = _0x4f574d.split("e");
                if (_0x4b6b88 && !_0x39f738) {
                  while (_0xf39535[0].length > 1 && _0xf39535[0].includes(".") && (_0xf39535[0].slice(-1) == "0" || _0xf39535[0].slice(-1) == ".")) {
                    _0xf39535[0] = _0xf39535[0].slice(0, -1);
                  }
                } else {
                  if (_0x39f738 && _0x4f574d.indexOf(".") == -1) {
                    _0xf39535[0] += ".";
                  }
                  while (_0x3017ee > _0x4d81e9++) {
                    _0xf39535[0] += "0";
                  }
                }
                _0x4f574d = _0xf39535[0] + (_0xf39535.length > 1 ? "e" + _0xf39535[1] : "");
                if (_0x49c47c == 69) {
                  _0x4f574d = _0x4f574d.toUpperCase();
                }
                if (_0x546ba8 >= 0) {
                  if (_0x2dc500) {
                    _0x4f574d = "+" + _0x4f574d;
                  } else if (_0x6e5602) {
                    _0x4f574d = " " + _0x4f574d;
                  }
                }
              }
              while (_0x4f574d.length < _0x5d6010) {
                if (_0x22d7ab) {
                  _0x4f574d += " ";
                } else if (_0x4f8f3c && (_0x4f574d[0] == "-" || _0x4f574d[0] == "+")) {
                  _0x4f574d = _0x4f574d[0] + "0" + _0x4f574d.slice(1);
                } else {
                  _0x4f574d = (_0x4f8f3c ? "0" : " ") + _0x4f574d;
                }
              }
              if (_0x49c47c < 97) {
                _0x4f574d = _0x4f574d.toUpperCase();
              }
              _0x4f574d.split("").forEach(function (_0x5a9faa) {
                _0x12f83f.push(_0x5a9faa.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x3126bc = _0x46b540("i8*");
              var _0x8e15c8 = _0x3126bc ? _0x4ddc32(_0x3126bc) : "(null)".length;
              if (_0x512905) {
                _0x8e15c8 = Math.min(_0x8e15c8, _0x3017ee);
              }
              if (!_0x22d7ab) {
                while (_0x8e15c8 < _0x5d6010--) {
                  _0x12f83f.push(32);
                }
              }
              if (_0x3126bc) {
                for (var _0x4c6f55 = 0; _0x4c6f55 < _0x8e15c8; _0x4c6f55++) {
                  _0x12f83f.push(_0xb76fd2[_0x3126bc++ >> 0]);
                }
              } else {
                _0x12f83f = _0x12f83f.concat(_0x37ad12("(null)".substr(0, _0x8e15c8), true));
              }
              if (_0x22d7ab) {
                while (_0x8e15c8 < _0x5d6010--) {
                  _0x12f83f.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x22d7ab) {
                _0x12f83f.push(_0x46b540("i8"));
              }
              while (--_0x5d6010 > 0) {
                _0x12f83f.push(32);
              }
              if (!_0x22d7ab) {
                _0x12f83f.push(_0x46b540("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x6dd38d = _0x46b540("i32*");
              _0x14d31c[_0x6dd38d >> 2] = _0x12f83f.length;
              break;
            }
          case "%":
            {
              _0x12f83f.push(_0xfeedf2);
              break;
            }
          default:
            {
              for (var _0x4c6f55 = _0x2e789b; _0x4c6f55 < _0x2c7cf1 + 2; _0x4c6f55++) {
                _0x12f83f.push(_0x133579[_0x4c6f55 >> 0]);
              }
            }
        }
        _0x2c7cf1 += 2;
      } else {
        _0x12f83f.push(_0xfeedf2);
        _0x2c7cf1 += 1;
      }
    }
    return _0x12f83f;
  }
  function _0x5aad62(_0x3c713b) {
    if (!_0x3c713b || !_0x3c713b.callee || !_0x3c713b.callee.name) {
      return [null, "", ""];
    }
    var _0x17f555 = _0x3c713b.callee.toString();
    var _0x584321 = _0x3c713b.callee.name;
    var _0x1d9d13 = "(";
    var _0x8a54fd = true;
    for (var _0x3c257c in _0x3c713b) {
      var _0x4273b5 = _0x3c713b[_0x3c257c];
      if (!_0x8a54fd) {
        _0x1d9d13 += ", ";
      }
      _0x8a54fd = false;
      if (typeof _0x4273b5 === "number" || typeof _0x4273b5 === "string") {
        _0x1d9d13 += _0x4273b5;
      } else {
        _0x1d9d13 += "(" + typeof _0x4273b5 + ")";
      }
    }
    _0x1d9d13 += ")";
    var _0x4d5eaa = _0x3c713b.callee.caller;
    _0x3c713b = _0x4d5eaa ? _0x4d5eaa.arguments : [];
    if (_0x8a54fd) {
      _0x1d9d13 = "";
    }
    return [_0x3c713b, _0x584321, _0x1d9d13];
  }
  function _0xf7263c(_0x243004) {
    var _0x2b0a1f = _0x5d3033();
    var _0x27472a = _0x2b0a1f.lastIndexOf("_emscripten_log");
    var _0x25e26e = _0x2b0a1f.lastIndexOf("_emscripten_get_callstack");
    var _0xbd7b7d = _0x2b0a1f.indexOf("\n", Math.max(_0x27472a, _0x25e26e)) + 1;
    _0x2b0a1f = _0x2b0a1f.slice(_0xbd7b7d);
    if (_0x243004 & 32) {
      _0x111cca("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x243004 & 8 && typeof emscripten_source_map === "undefined") {
      _0x111cca("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x243004 ^= 8;
      _0x243004 |= 16;
    }
    var _0x390c99 = null;
    if (_0x243004 & 128) {
      _0x390c99 = _0x5aad62(arguments);
      while (_0x390c99[1].includes("_emscripten_")) {
        _0x390c99 = _0x5aad62(_0x390c99[0]);
      }
    }
    var _0x17ed64 = _0x2b0a1f.split("\n");
    _0x2b0a1f = "";
    var _0x442110 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x550e05 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x366e81 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x537899 in _0x17ed64) {
      var _0x382184 = _0x17ed64[_0x537899];
      var _0x594aaa = "";
      var _0x314515 = "";
      var _0x3101c5 = 0;
      var _0x2b0438 = 0;
      var _0xfb55f9 = _0x366e81.exec(_0x382184);
      if (_0xfb55f9 && _0xfb55f9.length == 5) {
        _0x594aaa = _0xfb55f9[1];
        _0x314515 = _0xfb55f9[2];
        _0x3101c5 = _0xfb55f9[3];
        _0x2b0438 = _0xfb55f9[4];
      } else {
        _0xfb55f9 = _0x442110.exec(_0x382184);
        if (!_0xfb55f9) {
          _0xfb55f9 = _0x550e05.exec(_0x382184);
        }
        if (_0xfb55f9 && _0xfb55f9.length >= 4) {
          _0x594aaa = _0xfb55f9[1];
          _0x314515 = _0xfb55f9[2];
          _0x3101c5 = _0xfb55f9[3];
          _0x2b0438 = _0xfb55f9[4] | 0;
        } else {
          _0x2b0a1f += _0x382184 + "\n";
          continue;
        }
      }
      var _0x2c37a6 = false;
      if (_0x243004 & 8) {
        var _0x4bc334 = emscripten_source_map.originalPositionFor({
          line: _0x3101c5,
          column: _0x2b0438
        });
        _0x2c37a6 = _0x4bc334 && _0x4bc334.source;
        if (_0x2c37a6) {
          if (_0x243004 & 64) {
            _0x4bc334.source = _0x4bc334.source.substring(_0x4bc334.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x2b0a1f += "    at " + _0x594aaa + " (" + _0x4bc334.source + ":" + _0x4bc334.line + ":" + _0x4bc334.column + ")\n";
        }
      }
      if (_0x243004 & 16 || !_0x2c37a6) {
        if (_0x243004 & 64) {
          _0x314515 = _0x314515.substring(_0x314515.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x2b0a1f += (_0x2c37a6 ? "     = " + _0x594aaa : "    at " + _0x594aaa) + " (" + _0x314515 + ":" + _0x3101c5 + ":" + _0x2b0438 + ")\n";
      }
      if (_0x243004 & 128 && _0x390c99[0]) {
        if (_0x390c99[1] == _0x594aaa && _0x390c99[2].length > 0) {
          _0x2b0a1f = _0x2b0a1f.replace(/\s+$/, "");
          _0x2b0a1f += " with values: " + _0x390c99[1] + _0x390c99[2] + "\n";
        }
        _0x390c99 = _0x5aad62(_0x390c99[0]);
      }
    }
    _0x2b0a1f = _0x2b0a1f.replace(/\s+$/, "");
    return _0x2b0a1f;
  }
  function _0x37d722(_0x4c2b91, _0xa40a50) {
    if (_0x4c2b91 & 24) {
      _0xa40a50 = _0xa40a50.replace(/\s+$/, "");
      _0xa40a50 += (_0xa40a50.length > 0 ? "\n" : "") + _0xf7263c(_0x4c2b91);
    }
    if (_0x4c2b91 & 1) {
      if (_0x4c2b91 & 4) {
        console.error(_0xa40a50);
      } else if (_0x4c2b91 & 2) {
        console.warn(_0xa40a50);
      } else if (_0x4c2b91 & 512) {
        console.info(_0xa40a50);
      } else if (_0x4c2b91 & 256) {
        console.debug(_0xa40a50);
      } else {
        console.log(_0xa40a50);
      }
    } else if (_0x4c2b91 & 6) {
      _0x551fc8(_0xa40a50);
    } else {
      _0x25d5db(_0xa40a50);
    }
  }
  function _0x17f2a4(_0x299c66, _0x2d9b4f, _0x46954f) {
    var _0x1b4755 = _0x50bd14(_0x2d9b4f, _0x46954f);
    var _0x4f7f4f = _0x31b174(_0x1b4755, 0);
    _0x37d722(_0x299c66, _0x4f7f4f);
  }
  function _0x30ec79(_0x8a077b, _0xc0b0b) {
    _0x3054ad(_0x8a077b, _0xc0b0b || 1);
    throw "longjmp";
  }
  function _0x185a01(_0x12c218, _0x42f995) {
    return _0x30ec79(_0x12c218, _0x42f995);
  }
  function _0x50296f(_0x5d0081, _0x362636, _0x46be1e) {
    _0xb76fd2.copyWithin(_0x5d0081, _0x362636, _0x362636 + _0x46be1e);
  }
  function _0x274a4b(_0x1a2bc0, _0x1534b2) {
    if (!_0x58f09e.fullscreenEnabled()) {
      return -1;
    }
    _0x1a2bc0 = _0x40e4fc(_0x1a2bc0);
    if (!_0x1a2bc0) {
      return -4;
    }
    if (!_0x1a2bc0.requestFullscreen && !_0x1a2bc0.webkitRequestFullscreen) {
      return -3;
    }
    var _0x1a568e = _0x58f09e.canPerformEventHandlerRequests();
    if (!_0x1a568e) {
      if (_0x1534b2.deferUntilInEventHandler) {
        _0x58f09e.deferCall(_0x1e0a5f, 1, [_0x1a2bc0, _0x1534b2]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x1e0a5f(_0x1a2bc0, _0x1534b2);
  }
  function _0x276dd9(_0x52da3e, _0x530468) {
    var _0x5b6014 = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x530468,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x274a4b(_0x52da3e, _0x5b6014);
  }
  function _0x56fce7(_0x346cbd, _0x1f7066) {
    _0x346cbd = _0x40e4fc(_0x346cbd);
    if (!_0x346cbd) {
      return -4;
    }
    if (!_0x346cbd.requestPointerLock && !_0x346cbd.msRequestPointerLock) {
      return -1;
    }
    var _0x41a90e = _0x58f09e.canPerformEventHandlerRequests();
    if (!_0x41a90e) {
      if (_0x1f7066) {
        _0x58f09e.deferCall(_0x4d243f, 2, [_0x346cbd]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x4d243f(_0x346cbd);
  }
  function _0x37c537(_0x47e42e) {
    try {
      _0x139b68.grow(_0x47e42e - _0x5c18d0.byteLength + 65535 >>> 16);
      _0x1fb7ab(_0x139b68.buffer);
      return 1;
    } catch (_0x48f585) {}
  }
  function _0x5423bd(_0x3e53e1) {
    var _0x3da768 = _0xb76fd2.length;
    _0x3e53e1 = _0x3e53e1 >>> 0;
    var _0x8eaace = 2147483648;
    if (_0x3e53e1 > _0x8eaace) {
      return false;
    }
    for (var _0x5f35e2 = 1; _0x5f35e2 <= 4; _0x5f35e2 *= 2) {
      var _0x22d3c0 = _0x3da768 * (1 + 0.2 / _0x5f35e2);
      _0x22d3c0 = Math.min(_0x22d3c0, _0x3e53e1 + 100663296);
      var _0x2dcea0 = Math.min(_0x8eaace, _0x6868c8(Math.max(_0x3e53e1, _0x22d3c0), 65536));
      var _0x384fcf = _0x37c537(_0x2dcea0);
      if (_0x384fcf) {
        return true;
      }
    }
    return false;
  }
  function _0xfd0718() {
    try {
      if (navigator.getGamepads) {
        if (_0x58f09e.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x3af990) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x5c5b0a(_0x3ec048, _0x4e619d, _0x26bd49, _0x4ae165, _0x155729, _0x3d82cc, _0x4b0832) {
    if (!_0x58f09e.focusEvent) {
      _0x58f09e.focusEvent = _0x52fe3e(256);
    }
    var _0x15c300 = function (_0xbbdfb9) {
      var _0x4eaa9d = _0xbbdfb9 || event;
      var _0x14c16b = _0x58f09e.getNodeNameForTarget(_0x4eaa9d.target);
      var _0x51263d = _0x4eaa9d.target.id ? _0x4eaa9d.target.id : "";
      var _0x5c97c7 = _0x58f09e.focusEvent;
      _0x331149(_0x14c16b, _0x5c97c7 + 0, 128);
      _0x331149(_0x51263d, _0x5c97c7 + 128, 128);
      if (function (_0x56a0cd, _0x1842cf, _0xbea2c5) {
        return _0x116539.apply(null, [_0x4ae165, _0x56a0cd, _0x1842cf, _0xbea2c5]);
      }(_0x155729, _0x5c97c7, _0x4e619d)) {
        _0x4eaa9d.preventDefault();
      }
    };
    var _0x2a335a = {
      target: _0x40e4fc(_0x3ec048),
      eventTypeString: _0x3d82cc,
      callbackfunc: _0x4ae165,
      handlerFunc: _0x15c300,
      useCapture: _0x26bd49
    };
    _0x58f09e.registerOrRemoveHandler(_0x2a335a);
  }
  function _0xed5693(_0x35d4fb, _0x315a0b, _0x547e43, _0x4fcdc1, _0x588418) {
    _0x5c5b0a(_0x35d4fb, _0x315a0b, _0x547e43, _0x4fcdc1, 12, "blur", _0x588418);
    return 0;
  }
  function _0x3d2d6d(_0x15d931, _0x2ca378, _0x5582cf, _0x2c7610, _0x47350e) {
    _0x5c5b0a(_0x15d931, _0x2ca378, _0x5582cf, _0x2c7610, 13, "focus", _0x47350e);
    return 0;
  }
  function _0xa33b0e(_0x1199ca, _0x1cff9e, _0x43754a, _0x2acb89, _0x5dd734, _0x3eddc8, _0x4e7c9f) {
    if (!_0x58f09e.fullscreenChangeEvent) {
      _0x58f09e.fullscreenChangeEvent = _0x52fe3e(280);
    }
    var _0x47f40f = function (_0x5193a6) {
      var _0x1f9c85 = _0x5193a6 || event;
      var _0x5288f5 = _0x58f09e.fullscreenChangeEvent;
      _0x40871c(_0x5288f5);
      if (function (_0x5d3d5d, _0x4a3593, _0x2b722d) {
        return _0x116539.apply(null, [_0x2acb89, _0x5d3d5d, _0x4a3593, _0x2b722d]);
      }(_0x5dd734, _0x5288f5, _0x1cff9e)) {
        _0x1f9c85.preventDefault();
      }
    };
    var _0x2f3fc0 = {
      target: _0x1199ca,
      eventTypeString: _0x3eddc8,
      callbackfunc: _0x2acb89,
      handlerFunc: _0x47f40f,
      useCapture: _0x43754a
    };
    _0x58f09e.registerOrRemoveHandler(_0x2f3fc0);
  }
  function _0xca2f26(_0x347cd4, _0x1e0313, _0x4fc751, _0x1a99c1, _0x273f1a) {
    if (!_0x58f09e.fullscreenEnabled()) {
      return -1;
    }
    _0x347cd4 = _0x40e4fc(_0x347cd4);
    if (!_0x347cd4) {
      return -4;
    }
    _0xa33b0e(_0x347cd4, _0x1e0313, _0x4fc751, _0x1a99c1, 19, "fullscreenchange", _0x273f1a);
    _0xa33b0e(_0x347cd4, _0x1e0313, _0x4fc751, _0x1a99c1, 19, "webkitfullscreenchange", _0x273f1a);
    return 0;
  }
  function _0x970e00(_0x5b8bd2, _0x374cfa, _0x3ca3a8, _0x853a8e, _0x3d12c8, _0x5c4688, _0x352ea2) {
    if (!_0x58f09e.gamepadEvent) {
      _0x58f09e.gamepadEvent = _0x52fe3e(1432);
    }
    var _0x1e13ce = function (_0x5b3ba0) {
      var _0x5738d6 = _0x5b3ba0 || event;
      var _0x2aacd8 = _0x58f09e.gamepadEvent;
      _0x474ccc(_0x2aacd8, _0x5738d6.gamepad);
      if (function (_0x25b171, _0x53fba3, _0x38e702) {
        return _0x116539.apply(null, [_0x853a8e, _0x25b171, _0x53fba3, _0x38e702]);
      }(_0x3d12c8, _0x2aacd8, _0x374cfa)) {
        _0x5738d6.preventDefault();
      }
    };
    var _0x30d177 = {
      target: _0x40e4fc(_0x5b8bd2),
      allowsDeferredCalls: true,
      eventTypeString: _0x5c4688,
      callbackfunc: _0x853a8e,
      handlerFunc: _0x1e13ce,
      useCapture: _0x3ca3a8
    };
    _0x58f09e.registerOrRemoveHandler(_0x30d177);
  }
  function _0x54aba4(_0x59cd96, _0x19f750, _0x5de458, _0x19d458) {
    if (_0xfd0718()) {
      return -1;
    }
    return _0x970e00(2, _0x59cd96, _0x19f750, _0x5de458, 26, "gamepadconnected", _0x19d458);
  }
  function _0x5cb630(_0x27b4e4, _0x3a6109, _0x1a9b04, _0xaf165e) {
    if (_0xfd0718()) {
      return -1;
    }
    return _0x970e00(2, _0x27b4e4, _0x3a6109, _0x1a9b04, 27, "gamepaddisconnected", _0xaf165e);
  }
  function _0x445fc3(_0xec4c78, _0xcc1052, _0x40e3cc) {
    return setInterval(function () {
      (function (_0x340165) {
        _0x3ce20f.apply(null, [_0xec4c78, _0x340165]);
      })(_0x40e3cc);
    }, _0xcc1052);
  }
  function _0x2fb5d7(_0x3dbc9e, _0x1d0962, _0x414bf8, _0x364844, _0x2fe5a5, _0x2b5cbe, _0x3102c) {
    if (!_0x58f09e.keyEvent) {
      _0x58f09e.keyEvent = _0x52fe3e(164);
    }
    var _0x1b92e0 = function (_0x562227) {
      var _0x4bdb57 = _0x58f09e.keyEvent;
      var _0x40facf = _0x4bdb57 >> 2;
      _0x14d31c[_0x40facf + 0] = _0x562227.location;
      _0x14d31c[_0x40facf + 1] = _0x562227.ctrlKey;
      _0x14d31c[_0x40facf + 2] = _0x562227.shiftKey;
      _0x14d31c[_0x40facf + 3] = _0x562227.altKey;
      _0x14d31c[_0x40facf + 4] = _0x562227.metaKey;
      _0x14d31c[_0x40facf + 5] = _0x562227.repeat;
      _0x14d31c[_0x40facf + 6] = _0x562227.charCode;
      _0x14d31c[_0x40facf + 7] = _0x562227.keyCode;
      _0x14d31c[_0x40facf + 8] = _0x562227.which;
      _0x331149(_0x562227.key || "", _0x4bdb57 + 36, 32);
      _0x331149(_0x562227.code || "", _0x4bdb57 + 68, 32);
      _0x331149(_0x562227.char || "", _0x4bdb57 + 100, 32);
      _0x331149(_0x562227.locale || "", _0x4bdb57 + 132, 32);
      if (function (_0x2f1d17, _0x3d2a57, _0x188a91) {
        return _0x116539.apply(null, [_0x364844, _0x2f1d17, _0x3d2a57, _0x188a91]);
      }(_0x2fe5a5, _0x4bdb57, _0x1d0962)) {
        _0x562227.preventDefault();
      }
    };
    var _0x1cd608 = {
      target: _0x40e4fc(_0x3dbc9e),
      allowsDeferredCalls: true,
      eventTypeString: _0x2b5cbe,
      callbackfunc: _0x364844,
      handlerFunc: _0x1b92e0,
      useCapture: _0x414bf8
    };
    _0x58f09e.registerOrRemoveHandler(_0x1cd608);
  }
  function _0x1578d3(_0x2eb09b, _0x28801b, _0x19c505, _0x4d05f9, _0x238aa0) {
    _0x2fb5d7(_0x2eb09b, _0x28801b, _0x19c505, _0x4d05f9, 2, "keydown", _0x238aa0);
    return 0;
  }
  function _0x8edbcb(_0x22a2ff, _0x27fcb7, _0x21a99b, _0x2db0e9, _0x30f1c8) {
    _0x2fb5d7(_0x22a2ff, _0x27fcb7, _0x21a99b, _0x2db0e9, 1, "keypress", _0x30f1c8);
    return 0;
  }
  function _0x2c0923(_0x105d70, _0x2af2a1, _0x322612, _0x23fc8e, _0x2c3c08) {
    _0x2fb5d7(_0x105d70, _0x2af2a1, _0x322612, _0x23fc8e, 3, "keyup", _0x2c3c08);
    return 0;
  }
  function _0x4c1f02(_0x3b3260, _0x320bf7, _0x182a3a) {
    var _0x61193e = function () {
      _0x55af51.call(null, _0x3b3260);
    };
    _0x5ba03a(_0x61193e, _0x320bf7, _0x182a3a);
  }
  function _0x1b5e05(_0xec2483, _0x3cd6d3, _0x58ebb5) {
    var _0x3e367d = _0xec2483 >> 2;
    _0x14d31c[_0x3e367d + 0] = _0x3cd6d3.screenX;
    _0x14d31c[_0x3e367d + 1] = _0x3cd6d3.screenY;
    _0x14d31c[_0x3e367d + 2] = _0x3cd6d3.clientX;
    _0x14d31c[_0x3e367d + 3] = _0x3cd6d3.clientY;
    _0x14d31c[_0x3e367d + 4] = _0x3cd6d3.ctrlKey;
    _0x14d31c[_0x3e367d + 5] = _0x3cd6d3.shiftKey;
    _0x14d31c[_0x3e367d + 6] = _0x3cd6d3.altKey;
    _0x14d31c[_0x3e367d + 7] = _0x3cd6d3.metaKey;
    _0xefd34[_0x3e367d * 2 + 16] = _0x3cd6d3.button;
    _0xefd34[_0x3e367d * 2 + 17] = _0x3cd6d3.buttons;
    _0x14d31c[_0x3e367d + 9] = _0x3cd6d3.movementX;
    _0x14d31c[_0x3e367d + 10] = _0x3cd6d3.movementY;
    var _0x29855c = _0x5ac81a(_0x58ebb5);
    _0x14d31c[_0x3e367d + 11] = _0x3cd6d3.clientX - _0x29855c.left;
    _0x14d31c[_0x3e367d + 12] = _0x3cd6d3.clientY - _0x29855c.top;
  }
  function _0x11660f(_0x4c47fc, _0x59d4cb, _0x85c352, _0x33c967, _0x44d559, _0x8fcd29, _0x2400d6) {
    if (!_0x58f09e.mouseEvent) {
      _0x58f09e.mouseEvent = _0x52fe3e(64);
    }
    _0x4c47fc = _0x40e4fc(_0x4c47fc);
    var _0x36abf2 = function (_0x121139) {
      var _0x31c473 = _0x121139 || event;
      _0x1b5e05(_0x58f09e.mouseEvent, _0x31c473, _0x4c47fc);
      if (function (_0x3ea90f, _0x5707dc, _0x5d5cdb) {
        return _0x116539.apply(null, [_0x33c967, _0x3ea90f, _0x5707dc, _0x5d5cdb]);
      }(_0x44d559, _0x58f09e.mouseEvent, _0x59d4cb)) {
        _0x31c473.preventDefault();
      }
    };
    var _0x331179 = {
      target: _0x4c47fc,
      allowsDeferredCalls: _0x8fcd29 != "mousemove" && _0x8fcd29 != "mouseenter" && _0x8fcd29 != "mouseleave",
      eventTypeString: _0x8fcd29,
      callbackfunc: _0x33c967,
      handlerFunc: _0x36abf2,
      useCapture: _0x85c352
    };
    _0x58f09e.registerOrRemoveHandler(_0x331179);
  }
  function _0x2ed253(_0x51ac7c, _0x215fb0, _0x171f38, _0x23d88b, _0x43f6fb) {
    _0x11660f(_0x51ac7c, _0x215fb0, _0x171f38, _0x23d88b, 5, "mousedown", _0x43f6fb);
    return 0;
  }
  function _0x504c8e(_0x295477, _0x4b147c, _0x29e0b8, _0x26e1b3, _0x15c8b9) {
    _0x11660f(_0x295477, _0x4b147c, _0x29e0b8, _0x26e1b3, 8, "mousemove", _0x15c8b9);
    return 0;
  }
  function _0x404c22(_0x47343d, _0x2c2216, _0x3bf829, _0x51e445, _0x313f1f) {
    _0x11660f(_0x47343d, _0x2c2216, _0x3bf829, _0x51e445, 6, "mouseup", _0x313f1f);
    return 0;
  }
  function _0x5320e1(_0x389d9d) {
    var _0xf85e1f = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x4ef40a = !!_0xf85e1f;
    _0x14d31c[_0x389d9d >> 2] = _0x4ef40a;
    var _0x3c608e = _0x58f09e.getNodeNameForTarget(_0xf85e1f);
    var _0x166d30 = _0xf85e1f && _0xf85e1f.id ? _0xf85e1f.id : "";
    _0x331149(_0x3c608e, _0x389d9d + 4, 128);
    _0x331149(_0x166d30, _0x389d9d + 132, 128);
  }
  function _0x5962fa(_0x5c07eb, _0x336078, _0xae1f6e, _0x1843a3, _0x581830, _0x4a6a44, _0x1552f7) {
    if (!_0x58f09e.pointerlockChangeEvent) {
      _0x58f09e.pointerlockChangeEvent = _0x52fe3e(260);
    }
    var _0xdd4335 = function (_0x8ca9d9) {
      var _0x147123 = _0x8ca9d9 || event;
      var _0x56e6b2 = _0x58f09e.pointerlockChangeEvent;
      _0x5320e1(_0x56e6b2);
      if (function (_0x5e3848, _0x33dd10, _0x38e03b) {
        return _0x116539.apply(null, [_0x1843a3, _0x5e3848, _0x33dd10, _0x38e03b]);
      }(_0x581830, _0x56e6b2, _0x336078)) {
        _0x147123.preventDefault();
      }
    };
    var _0x52e9f2 = {
      target: _0x5c07eb,
      eventTypeString: _0x4a6a44,
      callbackfunc: _0x1843a3,
      handlerFunc: _0xdd4335,
      useCapture: _0xae1f6e
    };
    _0x58f09e.registerOrRemoveHandler(_0x52e9f2);
  }
  function _0x1cc57c(_0x45c7de, _0x365ce1, _0x19e2f0, _0x40087c, _0x83f7e6) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x45c7de = _0x40e4fc(_0x45c7de);
    if (!_0x45c7de) {
      return -4;
    }
    _0x5962fa(_0x45c7de, _0x365ce1, _0x19e2f0, _0x40087c, 20, "pointerlockchange", _0x83f7e6);
    _0x5962fa(_0x45c7de, _0x365ce1, _0x19e2f0, _0x40087c, 20, "mozpointerlockchange", _0x83f7e6);
    _0x5962fa(_0x45c7de, _0x365ce1, _0x19e2f0, _0x40087c, 20, "webkitpointerlockchange", _0x83f7e6);
    _0x5962fa(_0x45c7de, _0x365ce1, _0x19e2f0, _0x40087c, 20, "mspointerlockchange", _0x83f7e6);
    return 0;
  }
  function _0x2c031f(_0x554841, _0x51a27b, _0x209d7e, _0x332e71, _0x434e20, _0x47d46a, _0x2e4644) {
    if (!_0x58f09e.touchEvent) {
      _0x58f09e.touchEvent = _0x52fe3e(1684);
    }
    _0x554841 = _0x40e4fc(_0x554841);
    var _0x32caf9 = function (_0x11c54b) {
      var _0x347829;
      var _0x3e960a = {};
      var _0x362490 = _0x11c54b.touches;
      for (var _0x132e63 = 0; _0x132e63 < _0x362490.length; ++_0x132e63) {
        _0x347829 = _0x362490[_0x132e63];
        _0x347829.isChanged = _0x347829.onTarget = 0;
        _0x3e960a[_0x347829.identifier] = _0x347829;
      }
      for (var _0x132e63 = 0; _0x132e63 < _0x11c54b.changedTouches.length; ++_0x132e63) {
        _0x347829 = _0x11c54b.changedTouches[_0x132e63];
        _0x347829.isChanged = 1;
        _0x3e960a[_0x347829.identifier] = _0x347829;
      }
      for (var _0x132e63 = 0; _0x132e63 < _0x11c54b.targetTouches.length; ++_0x132e63) {
        _0x3e960a[_0x11c54b.targetTouches[_0x132e63].identifier].onTarget = 1;
      }
      var _0x287991 = _0x58f09e.touchEvent;
      var _0x5e8a64 = _0x287991 >> 2;
      _0x14d31c[_0x5e8a64 + 1] = _0x11c54b.ctrlKey;
      _0x14d31c[_0x5e8a64 + 2] = _0x11c54b.shiftKey;
      _0x14d31c[_0x5e8a64 + 3] = _0x11c54b.altKey;
      _0x14d31c[_0x5e8a64 + 4] = _0x11c54b.metaKey;
      _0x5e8a64 += 5;
      var _0x2092b3 = _0x5ac81a(_0x554841);
      var _0x11f5f5 = 0;
      for (var _0x132e63 in _0x3e960a) {
        var _0x347829 = _0x3e960a[_0x132e63];
        _0x14d31c[_0x5e8a64 + 0] = _0x347829.identifier;
        _0x14d31c[_0x5e8a64 + 1] = _0x347829.screenX;
        _0x14d31c[_0x5e8a64 + 2] = _0x347829.screenY;
        _0x14d31c[_0x5e8a64 + 3] = _0x347829.clientX;
        _0x14d31c[_0x5e8a64 + 4] = _0x347829.clientY;
        _0x14d31c[_0x5e8a64 + 5] = _0x347829.pageX;
        _0x14d31c[_0x5e8a64 + 6] = _0x347829.pageY;
        _0x14d31c[_0x5e8a64 + 7] = _0x347829.isChanged;
        _0x14d31c[_0x5e8a64 + 8] = _0x347829.onTarget;
        _0x14d31c[_0x5e8a64 + 9] = _0x347829.clientX - _0x2092b3.left;
        _0x14d31c[_0x5e8a64 + 10] = _0x347829.clientY - _0x2092b3.top;
        _0x5e8a64 += 13;
        if (++_0x11f5f5 > 31) {
          break;
        }
      }
      _0x14d31c[_0x287991 >> 2] = _0x11f5f5;
      if (function (_0x2ed251, _0x194b49, _0x354b23) {
        return _0x116539.apply(null, [_0x332e71, _0x2ed251, _0x194b49, _0x354b23]);
      }(_0x434e20, _0x287991, _0x51a27b)) {
        _0x11c54b.preventDefault();
      }
    };
    var _0x472a76 = {
      target: _0x554841,
      allowsDeferredCalls: _0x47d46a == "touchstart" || _0x47d46a == "touchend",
      eventTypeString: _0x47d46a,
      callbackfunc: _0x332e71,
      handlerFunc: _0x32caf9,
      useCapture: _0x209d7e
    };
    _0x58f09e.registerOrRemoveHandler(_0x472a76);
  }
  function _0x3632ee(_0x194fac, _0x31dacc, _0x271606, _0x47f552, _0x51d294) {
    _0x2c031f(_0x194fac, _0x31dacc, _0x271606, _0x47f552, 25, "touchcancel", _0x51d294);
    return 0;
  }
  function _0x3e0d35(_0x3090c7, _0x5a2b63, _0x291675, _0x2a1c53, _0x2e4f49) {
    _0x2c031f(_0x3090c7, _0x5a2b63, _0x291675, _0x2a1c53, 23, "touchend", _0x2e4f49);
    return 0;
  }
  function _0x1eb587(_0x25ada2, _0x4a960f, _0x407083, _0xfda198, _0x5bb074) {
    _0x2c031f(_0x25ada2, _0x4a960f, _0x407083, _0xfda198, 24, "touchmove", _0x5bb074);
    return 0;
  }
  function _0x3f8bee(_0x5ef3dc, _0x1d8310, _0x30c3c6, _0x41ca9b, _0x66d7ec) {
    _0x2c031f(_0x5ef3dc, _0x1d8310, _0x30c3c6, _0x41ca9b, 22, "touchstart", _0x66d7ec);
    return 0;
  }
  function _0x2794b4(_0x10604f, _0x3b32b5, _0x36b594, _0x78f1b9, _0x5918db, _0x33a74d, _0x4278f9) {
    if (!_0x58f09e.wheelEvent) {
      _0x58f09e.wheelEvent = _0x52fe3e(96);
    }
    var _0xdb9a25 = function (_0x47bcbc) {
      var _0x594750 = _0x47bcbc || event;
      var _0x55ae9a = _0x58f09e.wheelEvent;
      _0x1b5e05(_0x55ae9a, _0x594750, _0x10604f);
      _0x4cdd16[_0x55ae9a + 64 >> 3] = _0x594750.deltaX;
      _0x4cdd16[_0x55ae9a + 72 >> 3] = _0x594750.deltaY;
      _0x4cdd16[_0x55ae9a + 80 >> 3] = _0x594750.deltaZ;
      _0x14d31c[_0x55ae9a + 88 >> 2] = _0x594750.deltaMode;
      if (function (_0x575833, _0x49dae3, _0x5e3689) {
        return _0x116539.apply(null, [_0x78f1b9, _0x575833, _0x49dae3, _0x5e3689]);
      }(_0x5918db, _0x55ae9a, _0x3b32b5)) {
        _0x594750.preventDefault();
      }
    };
    var _0x361253 = {
      target: _0x10604f,
      allowsDeferredCalls: true,
      eventTypeString: _0x33a74d,
      callbackfunc: _0x78f1b9,
      handlerFunc: _0xdb9a25,
      useCapture: _0x36b594
    };
    _0x58f09e.registerOrRemoveHandler(_0x361253);
  }
  function _0x178d1f(_0x33d22b, _0x5af9ad, _0x40ee22, _0x17e3eb, _0xa67999) {
    _0x33d22b = _0x40e4fc(_0x33d22b);
    if (typeof _0x33d22b.onwheel !== "undefined") {
      _0x2794b4(_0x33d22b, _0x5af9ad, _0x40ee22, _0x17e3eb, 9, "wheel", _0xa67999);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x4677bd(_0x27a62d) {
    var _0x5757e3 = _0xe31097();
    while (_0xe31097() - _0x5757e3 < _0x27a62d) {}
  }
  function _0x57347d(_0x2c093e) {
    var _0x5031e8 = _0x2c093e.getExtension("ANGLE_instanced_arrays");
    if (_0x5031e8) {
      _0x2c093e.vertexAttribDivisor = function (_0x3491bb, _0x23085d) {
        _0x5031e8.vertexAttribDivisorANGLE(_0x3491bb, _0x23085d);
      };
      _0x2c093e.drawArraysInstanced = function (_0x442888, _0x2dd5a9, _0x5e6e1f, _0x154b0c) {
        _0x5031e8.drawArraysInstancedANGLE(_0x442888, _0x2dd5a9, _0x5e6e1f, _0x154b0c);
      };
      _0x2c093e.drawElementsInstanced = function (_0x22219b, _0x378a2f, _0x16cef6, _0x5d9eba, _0xf92b03) {
        _0x5031e8.drawElementsInstancedANGLE(_0x22219b, _0x378a2f, _0x16cef6, _0x5d9eba, _0xf92b03);
      };
      return 1;
    }
  }
  function _0x8181d7(_0x4133e1) {
    var _0x3fb70c = _0x4133e1.getExtension("OES_vertex_array_object");
    if (_0x3fb70c) {
      _0x4133e1.createVertexArray = function () {
        return _0x3fb70c.createVertexArrayOES();
      };
      _0x4133e1.deleteVertexArray = function (_0x57328a) {
        _0x3fb70c.deleteVertexArrayOES(_0x57328a);
      };
      _0x4133e1.bindVertexArray = function (_0x16fd39) {
        _0x3fb70c.bindVertexArrayOES(_0x16fd39);
      };
      _0x4133e1.isVertexArray = function (_0xd1c4a3) {
        return _0x3fb70c.isVertexArrayOES(_0xd1c4a3);
      };
      return 1;
    }
  }
  function _0x57ea79(_0x3420f3) {
    var _0x318239 = _0x3420f3.getExtension("WEBGL_draw_buffers");
    if (_0x318239) {
      _0x3420f3.drawBuffers = function (_0x590a2e, _0x36f14b) {
        _0x318239.drawBuffersWEBGL(_0x590a2e, _0x36f14b);
      };
      return 1;
    }
  }
  function _0x4f21cb(_0x4ef82f) {
    return !!(_0x4ef82f.dibvbi = _0x4ef82f.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x4ade07(_0x29418d) {
    return !!(_0x29418d.mdibvbi = _0x29418d.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x20c18f(_0x21a3ae) {
    return !!(_0x21a3ae.multiDrawWebgl = _0x21a3ae.getExtension("WEBGL_multi_draw"));
  }
  var _0x797e34 = {
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
    recordError: function _0x3cc767(_0x30596e) {
      if (!_0x797e34.lastError) {
        _0x797e34.lastError = _0x30596e;
      }
    },
    getNewId: function (_0x4b3ed1) {
      var _0x5e7574 = _0x797e34.counter++;
      for (var _0x447532 = _0x4b3ed1.length; _0x447532 < _0x5e7574; _0x447532++) {
        _0x4b3ed1[_0x447532] = null;
      }
      return _0x5e7574;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x4217ad) {
      return 32 - Math.clz32(_0x4217ad === 0 ? 0 : _0x4217ad - 1);
    },
    generateTempBuffers: function (_0x1dcefb, _0x12b880) {
      var _0x302550 = _0x797e34.log2ceilLookup(_0x797e34.MAX_TEMP_BUFFER_SIZE);
      _0x12b880.tempVertexBufferCounters1 = [];
      _0x12b880.tempVertexBufferCounters2 = [];
      _0x12b880.tempVertexBufferCounters1.length = _0x12b880.tempVertexBufferCounters2.length = _0x302550 + 1;
      _0x12b880.tempVertexBuffers1 = [];
      _0x12b880.tempVertexBuffers2 = [];
      _0x12b880.tempVertexBuffers1.length = _0x12b880.tempVertexBuffers2.length = _0x302550 + 1;
      _0x12b880.tempIndexBuffers = [];
      _0x12b880.tempIndexBuffers.length = _0x302550 + 1;
      for (var _0x594bb0 = 0; _0x594bb0 <= _0x302550; ++_0x594bb0) {
        _0x12b880.tempIndexBuffers[_0x594bb0] = null;
        _0x12b880.tempVertexBufferCounters1[_0x594bb0] = _0x12b880.tempVertexBufferCounters2[_0x594bb0] = 0;
        var _0x5dfe30 = _0x797e34.numTempVertexBuffersPerSize;
        _0x12b880.tempVertexBuffers1[_0x594bb0] = [];
        _0x12b880.tempVertexBuffers2[_0x594bb0] = [];
        var _0x33b097 = _0x12b880.tempVertexBuffers1[_0x594bb0];
        var _0x4c59e0 = _0x12b880.tempVertexBuffers2[_0x594bb0];
        _0x33b097.length = _0x4c59e0.length = _0x5dfe30;
        for (var _0x512b74 = 0; _0x512b74 < _0x5dfe30; ++_0x512b74) {
          _0x33b097[_0x512b74] = _0x4c59e0[_0x512b74] = null;
        }
      }
      if (_0x1dcefb) {
        _0x12b880.tempQuadIndexBuffer = _0x3494f0.createBuffer();
        _0x12b880.GLctx.bindBuffer(34963, _0x12b880.tempQuadIndexBuffer);
        var _0x2f6368 = _0x797e34.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x43add2 = new Uint16Array(_0x2f6368);
        var _0x594bb0 = 0;
        var _0x527b41 = 0;
        while (1) {
          _0x43add2[_0x594bb0++] = _0x527b41;
          if (_0x594bb0 >= _0x2f6368) {
            break;
          }
          _0x43add2[_0x594bb0++] = _0x527b41 + 1;
          if (_0x594bb0 >= _0x2f6368) {
            break;
          }
          _0x43add2[_0x594bb0++] = _0x527b41 + 2;
          if (_0x594bb0 >= _0x2f6368) {
            break;
          }
          _0x43add2[_0x594bb0++] = _0x527b41;
          if (_0x594bb0 >= _0x2f6368) {
            break;
          }
          _0x43add2[_0x594bb0++] = _0x527b41 + 2;
          if (_0x594bb0 >= _0x2f6368) {
            break;
          }
          _0x43add2[_0x594bb0++] = _0x527b41 + 3;
          if (_0x594bb0 >= _0x2f6368) {
            break;
          }
          _0x527b41 += 4;
        }
        _0x12b880.GLctx.bufferData(34963, _0x43add2, 35044);
        _0x12b880.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x1a28c0(_0x3eba10) {
      var _0x5e4f70 = _0x797e34.log2ceilLookup(_0x3eba10);
      var _0x1b66f0 = _0x797e34.currentContext.tempVertexBuffers1[_0x5e4f70];
      var _0x391ee7 = _0x797e34.currentContext.tempVertexBufferCounters1[_0x5e4f70];
      _0x797e34.currentContext.tempVertexBufferCounters1[_0x5e4f70] = _0x797e34.currentContext.tempVertexBufferCounters1[_0x5e4f70] + 1 & _0x797e34.numTempVertexBuffersPerSize - 1;
      var _0xe458d4 = _0x1b66f0[_0x391ee7];
      if (_0xe458d4) {
        return _0xe458d4;
      }
      var _0xb5e283 = _0x3494f0.getParameter(34964);
      _0x1b66f0[_0x391ee7] = _0x3494f0.createBuffer();
      _0x3494f0.bindBuffer(34962, _0x1b66f0[_0x391ee7]);
      _0x3494f0.bufferData(34962, 1 << _0x5e4f70, 35048);
      _0x3494f0.bindBuffer(34962, _0xb5e283);
      return _0x1b66f0[_0x391ee7];
    },
    getTempIndexBuffer: function _0x4d6449(_0x356dcf) {
      var _0x59e168 = _0x797e34.log2ceilLookup(_0x356dcf);
      var _0x515fc4 = _0x797e34.currentContext.tempIndexBuffers[_0x59e168];
      if (_0x515fc4) {
        return _0x515fc4;
      }
      var _0x2b4172 = _0x3494f0.getParameter(34965);
      _0x797e34.currentContext.tempIndexBuffers[_0x59e168] = _0x3494f0.createBuffer();
      _0x3494f0.bindBuffer(34963, _0x797e34.currentContext.tempIndexBuffers[_0x59e168]);
      _0x3494f0.bufferData(34963, 1 << _0x59e168, 35048);
      _0x3494f0.bindBuffer(34963, _0x2b4172);
      return _0x797e34.currentContext.tempIndexBuffers[_0x59e168];
    },
    newRenderingFrameStarted: function _0x15dba8() {
      if (!_0x797e34.currentContext) {
        return;
      }
      var _0x8b6360 = _0x797e34.currentContext.tempVertexBuffers1;
      _0x797e34.currentContext.tempVertexBuffers1 = _0x797e34.currentContext.tempVertexBuffers2;
      _0x797e34.currentContext.tempVertexBuffers2 = _0x8b6360;
      _0x8b6360 = _0x797e34.currentContext.tempVertexBufferCounters1;
      _0x797e34.currentContext.tempVertexBufferCounters1 = _0x797e34.currentContext.tempVertexBufferCounters2;
      _0x797e34.currentContext.tempVertexBufferCounters2 = _0x8b6360;
      var _0x3fbe1a = _0x797e34.log2ceilLookup(_0x797e34.MAX_TEMP_BUFFER_SIZE);
      for (var _0x4e4494 = 0; _0x4e4494 <= _0x3fbe1a; ++_0x4e4494) {
        _0x797e34.currentContext.tempVertexBufferCounters1[_0x4e4494] = 0;
      }
    },
    getSource: function (_0x17e8ce, _0x1ff6d1, _0x52649c, _0x3b612e) {
      var _0x12e10c = "";
      for (var _0x516295 = 0; _0x516295 < _0x1ff6d1; ++_0x516295) {
        var _0x30fe55 = _0x3b612e ? _0x14d31c[_0x3b612e + _0x516295 * 4 >> 2] : -1;
        _0x12e10c += _0x21e34e(_0x14d31c[_0x52649c + _0x516295 * 4 >> 2], _0x30fe55 < 0 ? undefined : _0x30fe55);
      }
      return _0x12e10c;
    },
    calcBufLength: function _0x560699(_0x16a881, _0x1b6712, _0x1e2095, _0x9924d5) {
      if (_0x1e2095 > 0) {
        return _0x9924d5 * _0x1e2095;
      }
      var _0x3f7178 = _0x797e34.byteSizeByType[_0x1b6712 - _0x797e34.byteSizeByTypeRoot];
      return _0x16a881 * _0x3f7178 * _0x9924d5;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x3364f8(_0x3bb279) {
      _0x797e34.resetBufferBinding = false;
      for (var _0x1f6fd4 = 0; _0x1f6fd4 < _0x797e34.currentContext.maxVertexAttribs; ++_0x1f6fd4) {
        var _0x3d2904 = _0x797e34.currentContext.clientBuffers[_0x1f6fd4];
        if (!_0x3d2904.clientside || !_0x3d2904.enabled) {
          continue;
        }
        _0x797e34.resetBufferBinding = true;
        var _0x179d79 = _0x797e34.calcBufLength(_0x3d2904.size, _0x3d2904.type, _0x3d2904.stride, _0x3bb279);
        var _0x453aff = _0x797e34.getTempVertexBuffer(_0x179d79);
        _0x3494f0.bindBuffer(34962, _0x453aff);
        _0x3494f0.bufferSubData(34962, 0, _0xb76fd2.subarray(_0x3d2904.ptr, _0x3d2904.ptr + _0x179d79));
        _0x3d2904.vertexAttribPointerAdaptor.call(_0x3494f0, _0x1f6fd4, _0x3d2904.size, _0x3d2904.type, _0x3d2904.normalized, _0x3d2904.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0xd8db3e() {
      if (_0x797e34.resetBufferBinding) {
        _0x3494f0.bindBuffer(34962, _0x797e34.buffers[_0x3494f0.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x45873a, _0x4dca34) {
      if (!_0x45873a.getContextSafariWebGL2Fixed) {
        _0x45873a.getContextSafariWebGL2Fixed = _0x45873a.getContext;
        _0x45873a.getContext = function (_0x260cf7, _0x26520c) {
          var _0x407b5 = _0x45873a.getContextSafariWebGL2Fixed(_0x260cf7, _0x26520c);
          if (_0x260cf7 == "webgl" == _0x407b5 instanceof WebGLRenderingContext) {
            return _0x407b5;
          } else {
            return null;
          }
        };
      }
      var _0x595539 = _0x4dca34.majorVersion > 1 ? _0x45873a.getContext("webgl2", _0x4dca34) : _0x45873a.getContext("webgl", _0x4dca34);
      if (!_0x595539) {
        return 0;
      }
      var _0x5ef8aa = _0x797e34.registerContext(_0x595539, _0x4dca34);
      return _0x5ef8aa;
    },
    registerContext: function (_0x3ade0d, _0x5b7ab5) {
      var _0x3f81f5 = _0x797e34.getNewId(_0x797e34.contexts);
      var _0x25cf71 = {
        handle: _0x3f81f5,
        attributes: _0x5b7ab5,
        version: _0x5b7ab5.majorVersion,
        GLctx: _0x3ade0d
      };
      if (_0x3ade0d.canvas) {
        _0x3ade0d.canvas.GLctxObject = _0x25cf71;
      }
      _0x797e34.contexts[_0x3f81f5] = _0x25cf71;
      if (typeof _0x5b7ab5.enableExtensionsByDefault === "undefined" || _0x5b7ab5.enableExtensionsByDefault) {
        _0x797e34.initExtensions(_0x25cf71);
      }
      _0x25cf71.maxVertexAttribs = _0x25cf71.GLctx.getParameter(34921);
      _0x25cf71.clientBuffers = [];
      for (var _0x1c0138 = 0; _0x1c0138 < _0x25cf71.maxVertexAttribs; _0x1c0138++) {
        _0x25cf71.clientBuffers[_0x1c0138] = {
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
      _0x797e34.generateTempBuffers(false, _0x25cf71);
      return _0x3f81f5;
    },
    makeContextCurrent: function (_0x4fde07) {
      _0x797e34.currentContext = _0x797e34.contexts[_0x4fde07];
      _0xc94e0.ctx = _0x3494f0 = _0x797e34.currentContext && _0x797e34.currentContext.GLctx;
      return !_0x4fde07 || !!_0x3494f0;
    },
    getContext: function (_0xda8e6b) {
      return _0x797e34.contexts[_0xda8e6b];
    },
    deleteContext: function (_0x5625dd) {
      if (_0x797e34.currentContext === _0x797e34.contexts[_0x5625dd]) {
        _0x797e34.currentContext = null;
      }
      if (typeof _0x58f09e === "object") {
        _0x58f09e.removeAllHandlersOnTarget(_0x797e34.contexts[_0x5625dd].GLctx.canvas);
      }
      if (_0x797e34.contexts[_0x5625dd] && _0x797e34.contexts[_0x5625dd].GLctx.canvas) {
        _0x797e34.contexts[_0x5625dd].GLctx.canvas.GLctxObject = undefined;
      }
      _0x797e34.contexts[_0x5625dd] = null;
    },
    initExtensions: function (_0x4b629d) {
      if (!_0x4b629d) {
        _0x4b629d = _0x797e34.currentContext;
      }
      if (_0x4b629d.initExtensionsDone) {
        return;
      }
      _0x4b629d.initExtensionsDone = true;
      var _0x3adf78 = _0x4b629d.GLctx;
      _0x57347d(_0x3adf78);
      _0x8181d7(_0x3adf78);
      _0x57ea79(_0x3adf78);
      _0x4f21cb(_0x3adf78);
      _0x4ade07(_0x3adf78);
      if (_0x4b629d.version >= 2) {
        _0x3adf78.disjointTimerQueryExt = _0x3adf78.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x4b629d.version < 2 || !_0x3adf78.disjointTimerQueryExt) {
        _0x3adf78.disjointTimerQueryExt = _0x3adf78.getExtension("EXT_disjoint_timer_query");
      }
      _0x20c18f(_0x3adf78);
      var _0x5304dd = _0x3adf78.getSupportedExtensions() || [];
      _0x5304dd.forEach(function (_0xc2f78a) {
        if (!_0xc2f78a.includes("lose_context") && !_0xc2f78a.includes("debug")) {
          _0x3adf78.getExtension(_0xc2f78a);
        }
      });
    }
  };
  var _0x18e77e = ["default", "low-power", "high-performance"];
  function _0x51f6db(_0x58c574, _0x2a09fd) {
    var _0x5e884d = _0x2a09fd >> 2;
    var _0x3f64bf = _0x14d31c[_0x5e884d + 6];
    var _0x116b3d = {
      alpha: !!_0x14d31c[_0x5e884d + 0],
      depth: !!_0x14d31c[_0x5e884d + 1],
      stencil: !!_0x14d31c[_0x5e884d + 2],
      antialias: !!_0x14d31c[_0x5e884d + 3],
      premultipliedAlpha: !!_0x14d31c[_0x5e884d + 4],
      preserveDrawingBuffer: !!_0x14d31c[_0x5e884d + 5],
      powerPreference: _0x18e77e[_0x3f64bf],
      failIfMajorPerformanceCaveat: !!_0x14d31c[_0x5e884d + 7],
      majorVersion: _0x14d31c[_0x5e884d + 8],
      minorVersion: _0x14d31c[_0x5e884d + 9],
      enableExtensionsByDefault: _0x14d31c[_0x5e884d + 10],
      explicitSwapControl: _0x14d31c[_0x5e884d + 11],
      proxyContextToMainThread: _0x14d31c[_0x5e884d + 12],
      renderViaOffscreenBackBuffer: _0x14d31c[_0x5e884d + 13]
    };
    var _0x3a32bb = _0x49e8f3(_0x58c574);
    if (!_0x3a32bb) {
      return 0;
    }
    if (_0x116b3d.explicitSwapControl) {
      return 0;
    }
    var _0x517f21 = _0x797e34.createContext(_0x3a32bb, _0x116b3d);
    return _0x517f21;
  }
  function _0x36126d(_0x4f6b87, _0x4d3c0d) {
    return _0x51f6db(_0x4f6b87, _0x4d3c0d);
  }
  function _0x3ebf0a() {
    if (_0x797e34.currentContext) {
      return _0x797e34.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x349c1f() {
    return _0x3ebf0a();
  }
  _0xc94e0._emscripten_webgl_get_current_context = _0x349c1f;
  function _0x1e94c6(_0x3f0bfe) {
    var _0x4e5138 = _0x797e34.makeContextCurrent(_0x3f0bfe);
    if (_0x4e5138) {
      return 0;
    } else {
      return -5;
    }
  }
  _0xc94e0._emscripten_webgl_make_context_current = _0x1e94c6;
  function _0x574001(_0x35d454) {
    if (_0x797e34.currentContext == _0x35d454) {
      _0x797e34.currentContext = 0;
    }
    _0x797e34.deleteContext(_0x35d454);
  }
  function _0x30b5a4(_0x46dbdd, _0x3facf6) {
    var _0xb17ffa = _0x797e34.getContext(_0x46dbdd);
    var _0x1b607b = _0x21e34e(_0x3facf6);
    if (_0x1b607b.startsWith("GL_")) {
      _0x1b607b = _0x1b607b.substr(3);
    }
    if (_0x1b607b == "ANGLE_instanced_arrays") {
      _0x57347d(_0x3494f0);
    }
    if (_0x1b607b == "OES_vertex_array_object") {
      _0x8181d7(_0x3494f0);
    }
    if (_0x1b607b == "WEBGL_draw_buffers") {
      _0x57ea79(_0x3494f0);
    }
    if (_0x1b607b == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x4f21cb(_0x3494f0);
    }
    if (_0x1b607b == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x4ade07(_0x3494f0);
    }
    if (_0x1b607b == "WEBGL_multi_draw") {
      _0x20c18f(_0x3494f0);
    }
    var _0x456d82 = _0xb17ffa.GLctx.getExtension(_0x1b607b);
    return !!_0x456d82;
  }
  function _0x34068c(_0x5bb760) {
    var _0x468ae3 = _0x5bb760 >> 2;
    for (var _0x1548af = 0; _0x1548af < 14; ++_0x1548af) {
      _0x14d31c[_0x468ae3 + _0x1548af] = 0;
    }
    _0x14d31c[_0x468ae3 + 0] = _0x14d31c[_0x468ae3 + 1] = _0x14d31c[_0x468ae3 + 3] = _0x14d31c[_0x468ae3 + 4] = _0x14d31c[_0x468ae3 + 8] = _0x14d31c[_0x468ae3 + 10] = 1;
  }
  var _0x2c6ec5 = {};
  function _0x25495e() {
    return _0xe83b70 || "./this.program";
  }
  function _0x418ffe() {
    if (!_0x418ffe.strings) {
      var _0x304a92 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x32ad87 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x304a92,
        _: _0x25495e()
      };
      for (var _0x3ed7b9 in _0x2c6ec5) {
        _0x32ad87[_0x3ed7b9] = _0x2c6ec5[_0x3ed7b9];
      }
      var _0x48c1a8 = [];
      for (var _0x3ed7b9 in _0x32ad87) {
        _0x48c1a8.push(_0x3ed7b9 + "=" + _0x32ad87[_0x3ed7b9]);
      }
      _0x418ffe.strings = _0x48c1a8;
    }
    return _0x418ffe.strings;
  }
  function _0x47ae22(_0x80c5b8, _0x43b917) {
    try {
      var _0x22a9d5 = 0;
      _0x418ffe().forEach(function (_0x1d4678, _0x2389b6) {
        var _0xa6939b = _0x43b917 + _0x22a9d5;
        _0x14d31c[_0x80c5b8 + _0x2389b6 * 4 >> 2] = _0xa6939b;
        _0x1116f2(_0x1d4678, _0xa6939b);
        _0x22a9d5 += _0x1d4678.length + 1;
      });
      return 0;
    } catch (_0x18a8c0) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x18a8c0 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x18a8c0);
      }
      return _0x18a8c0.errno;
    }
  }
  function _0x5efb09(_0x213fa8, _0xff1ce4) {
    try {
      var _0x29bb6b = _0x418ffe();
      _0x14d31c[_0x213fa8 >> 2] = _0x29bb6b.length;
      var _0x512caa = 0;
      _0x29bb6b.forEach(function (_0x26b90e) {
        _0x512caa += _0x26b90e.length + 1;
      });
      _0x14d31c[_0xff1ce4 >> 2] = _0x512caa;
      return 0;
    } catch (_0x3ea5a5) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x3ea5a5 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x3ea5a5);
      }
      return _0x3ea5a5.errno;
    }
  }
  function _0x177143(_0x214a14) {
    try {
      var _0x49d616 = _0x1ac5a3.getStreamFromFD(_0x214a14);
      _0x1e6cd4.close(_0x49d616);
      return 0;
    } catch (_0x3d227e) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x3d227e instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x3d227e);
      }
      return _0x3d227e.errno;
    }
  }
  function _0xdde251(_0xa17d7e, _0x592516) {
    try {
      var _0x4b4ba3 = _0x1ac5a3.getStreamFromFD(_0xa17d7e);
      var _0x3205ea = _0x4b4ba3.tty ? 2 : _0x1e6cd4.isDir(_0x4b4ba3.mode) ? 3 : _0x1e6cd4.isLink(_0x4b4ba3.mode) ? 7 : 4;
      _0x133579[_0x592516 >> 0] = _0x3205ea;
      return 0;
    } catch (_0x53de0a) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x53de0a instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x53de0a);
      }
      return _0x53de0a.errno;
    }
  }
  function _0x2ee546(_0x57351b, _0x1a0b88, _0x57eeb5, _0x454aae) {
    try {
      var _0x4e4ab6 = _0x1ac5a3.getStreamFromFD(_0x57351b);
      var _0x47af8e = _0x1ac5a3.doReadv(_0x4e4ab6, _0x1a0b88, _0x57eeb5);
      _0x14d31c[_0x454aae >> 2] = _0x47af8e;
      return 0;
    } catch (_0xec83e) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0xec83e instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0xec83e);
      }
      return _0xec83e.errno;
    }
  }
  function _0x3c129f(_0x228604, _0x53d1c8, _0x6b867c, _0x2f2734, _0xd41763) {
    try {
      var _0x469a04 = _0x1ac5a3.getStreamFromFD(_0x228604);
      var _0x2e5870 = 4294967296;
      var _0x3df3a8 = _0x6b867c * _0x2e5870 + (_0x53d1c8 >>> 0);
      var _0x240268 = 9007199254740992;
      if (_0x3df3a8 <= -_0x240268 || _0x3df3a8 >= _0x240268) {
        return -61;
      }
      _0x1e6cd4.llseek(_0x469a04, _0x3df3a8, _0x2f2734);
      _0x5804aa = [_0x469a04.position >>> 0, (_0x27094f = _0x469a04.position, +Math.abs(_0x27094f) >= 1 ? _0x27094f > 0 ? (Math.min(+Math.floor(_0x27094f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x27094f - +(~~_0x27094f >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x14d31c[_0xd41763 >> 2] = _0x5804aa[0];
      _0x14d31c[_0xd41763 + 4 >> 2] = _0x5804aa[1];
      if (_0x469a04.getdents && _0x3df3a8 === 0 && _0x2f2734 === 0) {
        _0x469a04.getdents = null;
      }
      return 0;
    } catch (_0x106cb0) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x106cb0 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x106cb0);
      }
      return _0x106cb0.errno;
    }
  }
  function _0x463eff(_0x397c30, _0x405989, _0x4e670d, _0x5cb2f8) {
    try {
      var _0x678893 = _0x1ac5a3.getStreamFromFD(_0x397c30);
      var _0x3ca048 = _0x1ac5a3.doWritev(_0x678893, _0x405989, _0x4e670d);
      _0x14d31c[_0x5cb2f8 >> 2] = _0x3ca048;
      return 0;
    } catch (_0x2dbff9) {
      if (typeof _0x1e6cd4 === "undefined" || !(_0x2dbff9 instanceof _0x1e6cd4.ErrnoError)) {
        _0x44e8b0(_0x2dbff9);
      }
      return _0x2dbff9.errno;
    }
  }
  function _0x4e1a0a(_0x1e3116, _0x46ef54) {
    return 0;
  }
  function _0x5e4c84() {
    return _0x3e342a();
  }
  function _0x2dbab8(_0x37d54d, _0x547a7e, _0x4a596f, _0x5100d1) {
    var _0x249ee5 = 0;
    var _0x4f5e9a = 0;
    var _0x50c175 = 0;
    var _0x4c52a3 = 0;
    var _0x2acd0d = 0;
    var _0x477c50 = 0;
    var _0x4463ee;
    function _0x11f4d9(_0x33d456, _0x2d4d76, _0x7bc2a1, _0x1f25e8, _0x3d03ee, _0x5e7e6a) {
      var _0x2f6e87;
      var _0x4af64d;
      var _0x479218;
      var _0x3c4ca7;
      _0x4af64d = _0x33d456 === 10 ? 28 : 16;
      _0x3d03ee = _0x33d456 === 10 ? _0x2be764(_0x3d03ee) : _0x17b8a2(_0x3d03ee);
      _0x2f6e87 = _0x52fe3e(_0x4af64d);
      _0x3c4ca7 = _0x45cdef(_0x2f6e87, _0x33d456, _0x3d03ee, _0x5e7e6a);
      _0x1bfc0b(!_0x3c4ca7);
      _0x479218 = _0x52fe3e(32);
      _0x14d31c[_0x479218 + 4 >> 2] = _0x33d456;
      _0x14d31c[_0x479218 + 8 >> 2] = _0x2d4d76;
      _0x14d31c[_0x479218 + 12 >> 2] = _0x7bc2a1;
      _0x14d31c[_0x479218 + 24 >> 2] = _0x1f25e8;
      _0x14d31c[_0x479218 + 20 >> 2] = _0x2f6e87;
      if (_0x33d456 === 10) {
        _0x14d31c[_0x479218 + 16 >> 2] = 28;
      } else {
        _0x14d31c[_0x479218 + 16 >> 2] = 16;
      }
      _0x14d31c[_0x479218 + 28 >> 2] = 0;
      return _0x479218;
    }
    if (_0x4a596f) {
      _0x50c175 = _0x14d31c[_0x4a596f >> 2];
      _0x4c52a3 = _0x14d31c[_0x4a596f + 4 >> 2];
      _0x2acd0d = _0x14d31c[_0x4a596f + 8 >> 2];
      _0x477c50 = _0x14d31c[_0x4a596f + 12 >> 2];
    }
    if (_0x2acd0d && !_0x477c50) {
      _0x477c50 = _0x2acd0d === 2 ? 17 : 6;
    }
    if (!_0x2acd0d && _0x477c50) {
      _0x2acd0d = _0x477c50 === 17 ? 2 : 1;
    }
    if (_0x477c50 === 0) {
      _0x477c50 = 6;
    }
    if (_0x2acd0d === 0) {
      _0x2acd0d = 1;
    }
    if (!_0x37d54d && !_0x547a7e) {
      return -2;
    }
    if (_0x50c175 & ~1087) {
      return -1;
    }
    if (_0x4a596f !== 0 && _0x14d31c[_0x4a596f >> 2] & 2 && !_0x37d54d) {
      return -1;
    }
    if (_0x50c175 & 32) {
      return -2;
    }
    if (_0x2acd0d !== 0 && _0x2acd0d !== 1 && _0x2acd0d !== 2) {
      return -7;
    }
    if (_0x4c52a3 !== 0 && _0x4c52a3 !== 2 && _0x4c52a3 !== 10) {
      return -6;
    }
    if (_0x547a7e) {
      _0x547a7e = _0x21e34e(_0x547a7e);
      _0x4f5e9a = parseInt(_0x547a7e, 10);
      if (isNaN(_0x4f5e9a)) {
        if (_0x50c175 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x37d54d) {
      if (_0x4c52a3 === 0) {
        _0x4c52a3 = 2;
      }
      if ((_0x50c175 & 1) === 0) {
        if (_0x4c52a3 === 2) {
          _0x249ee5 = _0x155d20(2130706433);
        } else {
          _0x249ee5 = [0, 0, 0, 1];
        }
      }
      _0x4463ee = _0x11f4d9(_0x4c52a3, _0x2acd0d, _0x477c50, null, _0x249ee5, _0x4f5e9a);
      _0x14d31c[_0x5100d1 >> 2] = _0x4463ee;
      return 0;
    }
    _0x37d54d = _0x21e34e(_0x37d54d);
    _0x249ee5 = _0x1a4dbf(_0x37d54d);
    if (_0x249ee5 !== null) {
      if (_0x4c52a3 === 0 || _0x4c52a3 === 2) {
        _0x4c52a3 = 2;
      } else if (_0x4c52a3 === 10 && _0x50c175 & 8) {
        _0x249ee5 = [0, 0, _0x155d20(65535), _0x249ee5];
        _0x4c52a3 = 10;
      } else {
        return -2;
      }
    } else {
      _0x249ee5 = _0x57ae32(_0x37d54d);
      if (_0x249ee5 !== null) {
        if (_0x4c52a3 === 0 || _0x4c52a3 === 10) {
          _0x4c52a3 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x249ee5 != null) {
      _0x4463ee = _0x11f4d9(_0x4c52a3, _0x2acd0d, _0x477c50, _0x37d54d, _0x249ee5, _0x4f5e9a);
      _0x14d31c[_0x5100d1 >> 2] = _0x4463ee;
      return 0;
    }
    if (_0x50c175 & 4) {
      return -2;
    }
    _0x37d54d = _0x4eba22.lookup_name(_0x37d54d);
    _0x249ee5 = _0x1a4dbf(_0x37d54d);
    if (_0x4c52a3 === 0) {
      _0x4c52a3 = 2;
    } else if (_0x4c52a3 === 10) {
      _0x249ee5 = [0, 0, _0x155d20(65535), _0x249ee5];
    }
    _0x4463ee = _0x11f4d9(_0x4c52a3, _0x2acd0d, _0x477c50, null, _0x249ee5, _0x4f5e9a);
    _0x14d31c[_0x5100d1 >> 2] = _0x4463ee;
    return 0;
  }
  function _0x214011(_0x37b17e) {
    var _0x5500c3 = _0x52fe3e(20);
    var _0x32f069 = _0x52fe3e(_0x37b17e.length + 1);
    _0x331149(_0x37b17e, _0x32f069, _0x37b17e.length + 1);
    _0x14d31c[_0x5500c3 >> 2] = _0x32f069;
    var _0x44ec0f = _0x52fe3e(4);
    _0x14d31c[_0x44ec0f >> 2] = 0;
    _0x14d31c[_0x5500c3 + 4 >> 2] = _0x44ec0f;
    var _0x198c28 = 2;
    _0x14d31c[_0x5500c3 + 8 >> 2] = _0x198c28;
    _0x14d31c[_0x5500c3 + 12 >> 2] = 4;
    var _0x519ac2 = _0x52fe3e(12);
    _0x14d31c[_0x519ac2 >> 2] = _0x519ac2 + 8;
    _0x14d31c[_0x519ac2 + 4 >> 2] = 0;
    _0x14d31c[_0x519ac2 + 8 >> 2] = _0x1a4dbf(_0x4eba22.lookup_name(_0x37b17e));
    _0x14d31c[_0x5500c3 + 16 >> 2] = _0x519ac2;
    return _0x5500c3;
  }
  function _0x4b3483(_0x4a9f82, _0xe947ad, _0x1c30ad) {
    if (_0x1c30ad !== 2) {
      _0x2b6e9c(5);
      return null;
    }
    _0x4a9f82 = _0x14d31c[_0x4a9f82 >> 2];
    var _0x50821e = _0x17b8a2(_0x4a9f82);
    var _0x2e4a08 = _0x4eba22.lookup_addr(_0x50821e);
    if (_0x2e4a08) {
      _0x50821e = _0x2e4a08;
    }
    return _0x214011(_0x50821e);
  }
  function _0x5cd5db(_0x1df74b) {
    return _0x214011(_0x21e34e(_0x1df74b));
  }
  function _0x19aa90(_0x25f2d1, _0xd1e6e2, _0x45df79, _0x4b7787, _0x34112f, _0x360661, _0x2feab4) {
    var _0x59bc2d = _0x39e995(_0x25f2d1, _0xd1e6e2);
    if (_0x59bc2d.errno) {
      return -6;
    }
    var _0x532de9 = _0x59bc2d.port;
    var _0x322588 = _0x59bc2d.addr;
    var _0x138486 = false;
    if (_0x45df79 && _0x4b7787) {
      var _0x18ee18;
      if (_0x2feab4 & 1 || !(_0x18ee18 = _0x4eba22.lookup_addr(_0x322588))) {
        if (_0x2feab4 & 8) {
          return -2;
        }
      } else {
        _0x322588 = _0x18ee18;
      }
      var _0x201be1 = _0x331149(_0x322588, _0x45df79, _0x4b7787);
      if (_0x201be1 + 1 >= _0x4b7787) {
        _0x138486 = true;
      }
    }
    if (_0x34112f && _0x360661) {
      _0x532de9 = "" + _0x532de9;
      var _0x201be1 = _0x331149(_0x532de9, _0x34112f, _0x360661);
      if (_0x201be1 + 1 >= _0x360661) {
        _0x138486 = true;
      }
    }
    if (_0x138486) {
      return -12;
    }
    return 0;
  }
  function _0xdfa331() {
    throw "getpwuid: TODO";
  }
  function _0x32caff(_0x47d75b) {
    var _0xc506ff = Date.now();
    _0x14d31c[_0x47d75b >> 2] = _0xc506ff / 1000 | 0;
    _0x14d31c[_0x47d75b + 4 >> 2] = _0xc506ff % 1000 * 1000 | 0;
    return 0;
  }
  function _0x162b5b(_0xa3b36) {
    _0x3494f0.activeTexture(_0xa3b36);
  }
  function _0x565385(_0x24331c, _0x8a5004) {
    _0x24331c = _0x797e34.programs[_0x24331c];
    _0x8a5004 = _0x797e34.shaders[_0x8a5004];
    _0x24331c[_0x8a5004.shaderType] = _0x8a5004;
    _0x3494f0.attachShader(_0x24331c, _0x8a5004);
  }
  function _0x42e6aa(_0x114806, _0x327144) {
    _0x3494f0.beginQuery(_0x114806, _0x797e34.queries[_0x327144]);
  }
  function _0x47c205(_0x3e42ef) {
    _0x3494f0.beginTransformFeedback(_0x3e42ef);
  }
  function _0x15bb59(_0x531753, _0x1c5fac, _0x1734ae) {
    _0x3494f0.bindAttribLocation(_0x797e34.programs[_0x531753], _0x1c5fac, _0x21e34e(_0x1734ae));
  }
  function _0x5d973a(_0x23f169, _0x1abea8) {
    if (_0x23f169 == 34962) {
      _0x3494f0.currentArrayBufferBinding = _0x1abea8;
    } else if (_0x23f169 == 34963) {
      _0x3494f0.currentElementArrayBufferBinding = _0x1abea8;
    }
    if (_0x23f169 == 35051) {
      _0x3494f0.currentPixelPackBufferBinding = _0x1abea8;
    } else if (_0x23f169 == 35052) {
      _0x3494f0.currentPixelUnpackBufferBinding = _0x1abea8;
    }
    _0x3494f0.bindBuffer(_0x23f169, _0x797e34.buffers[_0x1abea8]);
  }
  function _0x329efd(_0x236e9d, _0x502686, _0x1de412) {
    _0x3494f0.bindBufferBase(_0x236e9d, _0x502686, _0x797e34.buffers[_0x1de412]);
  }
  function _0xf7fc08(_0x309d82, _0x11dd6e, _0x2b748e, _0x581f51, _0xdc73fd) {
    _0x3494f0.bindBufferRange(_0x309d82, _0x11dd6e, _0x797e34.buffers[_0x2b748e], _0x581f51, _0xdc73fd);
  }
  function _0x4ba047(_0x47fad6, _0x2674f2) {
    _0x3494f0.bindFramebuffer(_0x47fad6, _0x797e34.framebuffers[_0x2674f2]);
  }
  function _0x434e00(_0x34c0b9, _0x107c70) {
    _0x3494f0.bindRenderbuffer(_0x34c0b9, _0x797e34.renderbuffers[_0x107c70]);
  }
  function _0xc9f386(_0x239350, _0x3c33d4) {
    _0x3494f0.bindSampler(_0x239350, _0x797e34.samplers[_0x3c33d4]);
  }
  function _0x115d50(_0x389381, _0x4a56ed) {
    _0x3494f0.bindTexture(_0x389381, _0x797e34.textures[_0x4a56ed]);
  }
  function _0x5d06ed(_0x2b307d, _0x5aaf3a) {
    _0x3494f0.bindTransformFeedback(_0x2b307d, _0x797e34.transformFeedbacks[_0x5aaf3a]);
  }
  function _0x54fabd(_0x2c8f9e) {
    _0x3494f0.bindVertexArray(_0x797e34.vaos[_0x2c8f9e]);
    var _0x4ab75f = _0x3494f0.getParameter(34965);
    _0x3494f0.currentElementArrayBufferBinding = _0x4ab75f ? _0x4ab75f.name | 0 : 0;
  }
  function _0x1603ea(_0x13f506) {
    _0x3494f0.blendEquation(_0x13f506);
  }
  function _0x2898b8(_0x43dcc7, _0x35002e) {
    _0x3494f0.blendEquationSeparate(_0x43dcc7, _0x35002e);
  }
  function _0x422ff1(_0x545058, _0x201864, _0x21996b, _0x279391) {
    _0x3494f0.blendFuncSeparate(_0x545058, _0x201864, _0x21996b, _0x279391);
  }
  function _0x345c2f(_0x2d5f12, _0x12999a, _0x226369, _0x3df952, _0x4a340f, _0x218aa6, _0x3283d8, _0x50ba6e, _0x589ebe, _0xa86f4c) {
    _0x3494f0.blitFramebuffer(_0x2d5f12, _0x12999a, _0x226369, _0x3df952, _0x4a340f, _0x218aa6, _0x3283d8, _0x50ba6e, _0x589ebe, _0xa86f4c);
  }
  function _0x308325(_0x27b52f, _0x38546b, _0x3d1860, _0x15612d) {
    if (_0x797e34.currentContext.version >= 2) {
      if (_0x3d1860) {
        _0x3494f0.bufferData(_0x27b52f, _0xb76fd2, _0x15612d, _0x3d1860, _0x38546b);
      } else {
        _0x3494f0.bufferData(_0x27b52f, _0x38546b, _0x15612d);
      }
    } else {
      _0x3494f0.bufferData(_0x27b52f, _0x3d1860 ? _0xb76fd2.subarray(_0x3d1860, _0x3d1860 + _0x38546b) : _0x38546b, _0x15612d);
    }
  }
  function _0x1fd05b(_0x15a0a3, _0x2c6926, _0x12cbea, _0x271238) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.bufferSubData(_0x15a0a3, _0x2c6926, _0xb76fd2, _0x271238, _0x12cbea);
      return;
    }
    _0x3494f0.bufferSubData(_0x15a0a3, _0x2c6926, _0xb76fd2.subarray(_0x271238, _0x271238 + _0x12cbea));
  }
  function _0x205324(_0x54f7e5) {
    return _0x3494f0.checkFramebufferStatus(_0x54f7e5);
  }
  function _0x106af7(_0x24cace) {
    _0x3494f0.clear(_0x24cace);
  }
  function _0x342150(_0x3b099e, _0x3e19fc, _0x5dc1d4, _0x413ae6) {
    _0x3494f0.clearBufferfi(_0x3b099e, _0x3e19fc, _0x5dc1d4, _0x413ae6);
  }
  function _0x3f6bd0(_0x42ebd2, _0x1ed578, _0xf732a1) {
    _0x3494f0.clearBufferfv(_0x42ebd2, _0x1ed578, _0x29a541, _0xf732a1 >> 2);
  }
  function _0x4a4c4e(_0x1689c0, _0x46a1cb, _0x54bf28) {
    _0x3494f0.clearBufferuiv(_0x1689c0, _0x46a1cb, _0x5305b0, _0x54bf28 >> 2);
  }
  function _0x13869b(_0x3ccf2f, _0x184b9d, _0x10f244, _0x10dc40) {
    _0x3494f0.clearColor(_0x3ccf2f, _0x184b9d, _0x10f244, _0x10dc40);
  }
  function _0x210651(_0x30be73) {
    _0x3494f0.clearDepth(_0x30be73);
  }
  function _0x2c6724(_0x30eebe) {
    _0x3494f0.clearStencil(_0x30eebe);
  }
  function _0x5cd206(_0x33f5a1, _0x45ff1c, _0x5382ec, _0x2e04a1) {
    return _0x3494f0.clientWaitSync(_0x797e34.syncs[_0x33f5a1], _0x45ff1c, _0x53c189(_0x5382ec, _0x2e04a1));
  }
  function _0x2c62b4(_0x3c3df3, _0x241c1b, _0x1ba834, _0x1557ab) {
    _0x3494f0.colorMask(!!_0x3c3df3, !!_0x241c1b, !!_0x1ba834, !!_0x1557ab);
  }
  function _0x3e27a0(_0x3f077d) {
    _0x3494f0.compileShader(_0x797e34.shaders[_0x3f077d]);
  }
  function _0x5f3026(_0x3573ab, _0x14ca88, _0x52d90e, _0x1400c5, _0x1d5137, _0x286fc5, _0x484094, _0x82f42d) {
    if (_0x797e34.currentContext.version >= 2) {
      if (_0x3494f0.currentPixelUnpackBufferBinding) {
        _0x3494f0.compressedTexImage2D(_0x3573ab, _0x14ca88, _0x52d90e, _0x1400c5, _0x1d5137, _0x286fc5, _0x484094, _0x82f42d);
      } else {
        _0x3494f0.compressedTexImage2D(_0x3573ab, _0x14ca88, _0x52d90e, _0x1400c5, _0x1d5137, _0x286fc5, _0xb76fd2, _0x82f42d, _0x484094);
      }
      return;
    }
    _0x3494f0.compressedTexImage2D(_0x3573ab, _0x14ca88, _0x52d90e, _0x1400c5, _0x1d5137, _0x286fc5, _0x82f42d ? _0xb76fd2.subarray(_0x82f42d, _0x82f42d + _0x484094) : null);
  }
  function _0xe2dec0(_0x226988, _0x1892ac, _0x36cf95, _0xc6dd7d, _0x17b4aa, _0x16f781, _0x2c22cc, _0x286d02, _0x145292) {
    if (_0x3494f0.currentPixelUnpackBufferBinding) {
      _0x3494f0.compressedTexImage3D(_0x226988, _0x1892ac, _0x36cf95, _0xc6dd7d, _0x17b4aa, _0x16f781, _0x2c22cc, _0x286d02, _0x145292);
    } else {
      _0x3494f0.compressedTexImage3D(_0x226988, _0x1892ac, _0x36cf95, _0xc6dd7d, _0x17b4aa, _0x16f781, _0x2c22cc, _0xb76fd2, _0x145292, _0x286d02);
    }
  }
  function _0x3dddb1(_0x5a813e, _0x4fadc6, _0x3fc399, _0x4fb922, _0x48e41c, _0x52bc9e, _0x5afd71, _0x273711, _0x3c970a) {
    if (_0x797e34.currentContext.version >= 2) {
      if (_0x3494f0.currentPixelUnpackBufferBinding) {
        _0x3494f0.compressedTexSubImage2D(_0x5a813e, _0x4fadc6, _0x3fc399, _0x4fb922, _0x48e41c, _0x52bc9e, _0x5afd71, _0x273711, _0x3c970a);
      } else {
        _0x3494f0.compressedTexSubImage2D(_0x5a813e, _0x4fadc6, _0x3fc399, _0x4fb922, _0x48e41c, _0x52bc9e, _0x5afd71, _0xb76fd2, _0x3c970a, _0x273711);
      }
      return;
    }
    _0x3494f0.compressedTexSubImage2D(_0x5a813e, _0x4fadc6, _0x3fc399, _0x4fb922, _0x48e41c, _0x52bc9e, _0x5afd71, _0x3c970a ? _0xb76fd2.subarray(_0x3c970a, _0x3c970a + _0x273711) : null);
  }
  function _0x11ba61(_0x450930, _0x28ddd3, _0xde2a68, _0xd429e3, _0x2edee8, _0x25737e, _0x4f4167, _0x3b57f7, _0x5701fd, _0x449014, _0x56329f) {
    if (_0x3494f0.currentPixelUnpackBufferBinding) {
      _0x3494f0.compressedTexSubImage3D(_0x450930, _0x28ddd3, _0xde2a68, _0xd429e3, _0x2edee8, _0x25737e, _0x4f4167, _0x3b57f7, _0x5701fd, _0x449014, _0x56329f);
    } else {
      _0x3494f0.compressedTexSubImage3D(_0x450930, _0x28ddd3, _0xde2a68, _0xd429e3, _0x2edee8, _0x25737e, _0x4f4167, _0x3b57f7, _0x5701fd, _0xb76fd2, _0x56329f, _0x449014);
    }
  }
  function _0x27f53f(_0x3ded30, _0x2f375d, _0x5e178a, _0x18677c, _0x57762f) {
    _0x3494f0.copyBufferSubData(_0x3ded30, _0x2f375d, _0x5e178a, _0x18677c, _0x57762f);
  }
  function _0xafc07(_0x3bae19, _0x7eae8b, _0x421fa5, _0x3d354b, _0x2a8660, _0x4b9448, _0x315eaf, _0x27f69c) {
    _0x3494f0.copyTexImage2D(_0x3bae19, _0x7eae8b, _0x421fa5, _0x3d354b, _0x2a8660, _0x4b9448, _0x315eaf, _0x27f69c);
  }
  function _0x352f14(_0x46122f, _0x4f8289, _0x292f45, _0x4c9e49, _0x414ee8, _0x4f818f, _0x3fd884, _0x20d532) {
    _0x3494f0.copyTexSubImage2D(_0x46122f, _0x4f8289, _0x292f45, _0x4c9e49, _0x414ee8, _0x4f818f, _0x3fd884, _0x20d532);
  }
  function _0xd6094e() {
    var _0x2ee1f0 = _0x797e34.getNewId(_0x797e34.programs);
    var _0x5dbff0 = _0x3494f0.createProgram();
    _0x5dbff0.name = _0x2ee1f0;
    _0x5dbff0.maxUniformLength = _0x5dbff0.maxAttributeLength = _0x5dbff0.maxUniformBlockNameLength = 0;
    _0x5dbff0.uniformIdCounter = 1;
    _0x797e34.programs[_0x2ee1f0] = _0x5dbff0;
    return _0x2ee1f0;
  }
  function _0x5595de(_0x2b5241) {
    var _0xc9b38 = _0x797e34.getNewId(_0x797e34.shaders);
    _0x797e34.shaders[_0xc9b38] = _0x3494f0.createShader(_0x2b5241);
    _0x797e34.shaders[_0xc9b38].shaderType = _0x2b5241 & 1 ? "vs" : "fs";
    return _0xc9b38;
  }
  function _0x2de6ab(_0x16324d) {
    _0x3494f0.cullFace(_0x16324d);
  }
  function _0x1a0bdc(_0x57f54f, _0x12a8bf) {
    for (var _0x456ce8 = 0; _0x456ce8 < _0x57f54f; _0x456ce8++) {
      var _0x16b190 = _0x14d31c[_0x12a8bf + _0x456ce8 * 4 >> 2];
      var _0x5ae171 = _0x797e34.buffers[_0x16b190];
      if (!_0x5ae171) {
        continue;
      }
      _0x3494f0.deleteBuffer(_0x5ae171);
      _0x5ae171.name = 0;
      _0x797e34.buffers[_0x16b190] = null;
      if (_0x16b190 == _0x3494f0.currentArrayBufferBinding) {
        _0x3494f0.currentArrayBufferBinding = 0;
      }
      if (_0x16b190 == _0x3494f0.currentElementArrayBufferBinding) {
        _0x3494f0.currentElementArrayBufferBinding = 0;
      }
      if (_0x16b190 == _0x3494f0.currentPixelPackBufferBinding) {
        _0x3494f0.currentPixelPackBufferBinding = 0;
      }
      if (_0x16b190 == _0x3494f0.currentPixelUnpackBufferBinding) {
        _0x3494f0.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x36615a(_0x1f16f9, _0x1c3cc2) {
    for (var _0x611bce = 0; _0x611bce < _0x1f16f9; ++_0x611bce) {
      var _0x4bdfa9 = _0x14d31c[_0x1c3cc2 + _0x611bce * 4 >> 2];
      var _0x192dfa = _0x797e34.framebuffers[_0x4bdfa9];
      if (!_0x192dfa) {
        continue;
      }
      _0x3494f0.deleteFramebuffer(_0x192dfa);
      _0x192dfa.name = 0;
      _0x797e34.framebuffers[_0x4bdfa9] = null;
    }
  }
  function _0x55f927(_0x2a1ff3) {
    if (!_0x2a1ff3) {
      return;
    }
    var _0x49e97f = _0x797e34.programs[_0x2a1ff3];
    if (!_0x49e97f) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x3494f0.deleteProgram(_0x49e97f);
    _0x49e97f.name = 0;
    _0x797e34.programs[_0x2a1ff3] = null;
  }
  function _0x3a6fc2(_0x584494, _0x28105f) {
    for (var _0x3667f4 = 0; _0x3667f4 < _0x584494; _0x3667f4++) {
      var _0x31215d = _0x14d31c[_0x28105f + _0x3667f4 * 4 >> 2];
      var _0x1079af = _0x797e34.queries[_0x31215d];
      if (!_0x1079af) {
        continue;
      }
      _0x3494f0.deleteQuery(_0x1079af);
      _0x797e34.queries[_0x31215d] = null;
    }
  }
  function _0x4f1f0c(_0x37170f, _0x5873d5) {
    for (var _0xfce932 = 0; _0xfce932 < _0x37170f; _0xfce932++) {
      var _0x45c556 = _0x14d31c[_0x5873d5 + _0xfce932 * 4 >> 2];
      var _0x19daa6 = _0x797e34.renderbuffers[_0x45c556];
      if (!_0x19daa6) {
        continue;
      }
      _0x3494f0.deleteRenderbuffer(_0x19daa6);
      _0x19daa6.name = 0;
      _0x797e34.renderbuffers[_0x45c556] = null;
    }
  }
  function _0x2a5588(_0x14b22a, _0x3459cc) {
    for (var _0x3a9716 = 0; _0x3a9716 < _0x14b22a; _0x3a9716++) {
      var _0xb03339 = _0x14d31c[_0x3459cc + _0x3a9716 * 4 >> 2];
      var _0x1075da = _0x797e34.samplers[_0xb03339];
      if (!_0x1075da) {
        continue;
      }
      _0x3494f0.deleteSampler(_0x1075da);
      _0x1075da.name = 0;
      _0x797e34.samplers[_0xb03339] = null;
    }
  }
  function _0x2447e0(_0x48171f) {
    if (!_0x48171f) {
      return;
    }
    var _0xec41b3 = _0x797e34.shaders[_0x48171f];
    if (!_0xec41b3) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x3494f0.deleteShader(_0xec41b3);
    _0x797e34.shaders[_0x48171f] = null;
  }
  function _0x14aaec(_0x276e4b) {
    if (!_0x276e4b) {
      return;
    }
    var _0x1442cf = _0x797e34.syncs[_0x276e4b];
    if (!_0x1442cf) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x3494f0.deleteSync(_0x1442cf);
    _0x1442cf.name = 0;
    _0x797e34.syncs[_0x276e4b] = null;
  }
  function _0x225efe(_0x5a47b0, _0x192128) {
    for (var _0x27fc5b = 0; _0x27fc5b < _0x5a47b0; _0x27fc5b++) {
      var _0x800a70 = _0x14d31c[_0x192128 + _0x27fc5b * 4 >> 2];
      var _0x483c03 = _0x797e34.textures[_0x800a70];
      if (!_0x483c03) {
        continue;
      }
      _0x3494f0.deleteTexture(_0x483c03);
      _0x483c03.name = 0;
      _0x797e34.textures[_0x800a70] = null;
    }
  }
  function _0x189d25(_0x1b1d7d, _0x33d3a8) {
    for (var _0x4b5751 = 0; _0x4b5751 < _0x1b1d7d; _0x4b5751++) {
      var _0x170784 = _0x14d31c[_0x33d3a8 + _0x4b5751 * 4 >> 2];
      var _0xeee4 = _0x797e34.transformFeedbacks[_0x170784];
      if (!_0xeee4) {
        continue;
      }
      _0x3494f0.deleteTransformFeedback(_0xeee4);
      _0xeee4.name = 0;
      _0x797e34.transformFeedbacks[_0x170784] = null;
    }
  }
  function _0x3f073d(_0x192c43, _0xb5d8fd) {
    for (var _0x3f46d1 = 0; _0x3f46d1 < _0x192c43; _0x3f46d1++) {
      var _0xe74028 = _0x14d31c[_0xb5d8fd + _0x3f46d1 * 4 >> 2];
      _0x3494f0.deleteVertexArray(_0x797e34.vaos[_0xe74028]);
      _0x797e34.vaos[_0xe74028] = null;
    }
  }
  function _0x5a3b7f(_0x2baa04) {
    _0x3494f0.depthFunc(_0x2baa04);
  }
  function _0x1bf9aa(_0x38610e) {
    _0x3494f0.depthMask(!!_0x38610e);
  }
  function _0x4ef30a(_0x3f7975, _0x3f3937) {
    _0x3494f0.detachShader(_0x797e34.programs[_0x3f7975], _0x797e34.shaders[_0x3f3937]);
  }
  function _0x228973(_0x4ba153) {
    _0x3494f0.disable(_0x4ba153);
  }
  function _0x5955b2(_0x50e2f6) {
    var _0x424bb0 = _0x797e34.currentContext.clientBuffers[_0x50e2f6];
    _0x424bb0.enabled = false;
    _0x3494f0.disableVertexAttribArray(_0x50e2f6);
  }
  function _0x40b179(_0x2d7135, _0x3d4606, _0x4875cc) {
    _0x797e34.preDrawHandleClientVertexAttribBindings(_0x3d4606 + _0x4875cc);
    _0x3494f0.drawArrays(_0x2d7135, _0x3d4606, _0x4875cc);
    _0x797e34.postDrawHandleClientVertexAttribBindings();
  }
  function _0x3f6225(_0x3459b7, _0x54f8a2, _0x5256c5, _0x63f930) {
    _0x3494f0.drawArraysInstanced(_0x3459b7, _0x54f8a2, _0x5256c5, _0x63f930);
  }
  var _0x1a73d3 = [];
  function _0x1c8bd8(_0x35511d, _0x256678) {
    var _0x4fc83f = _0x1a73d3[_0x35511d];
    for (var _0x31d464 = 0; _0x31d464 < _0x35511d; _0x31d464++) {
      _0x4fc83f[_0x31d464] = _0x14d31c[_0x256678 + _0x31d464 * 4 >> 2];
    }
    _0x3494f0.drawBuffers(_0x4fc83f);
  }
  function _0x512211(_0x141711, _0x51e13d, _0x40be7a, _0x173ffa) {
    var _0x1e1bca;
    if (!_0x3494f0.currentElementArrayBufferBinding) {
      var _0x8e628e = _0x797e34.calcBufLength(1, _0x40be7a, 0, _0x51e13d);
      _0x1e1bca = _0x797e34.getTempIndexBuffer(_0x8e628e);
      _0x3494f0.bindBuffer(34963, _0x1e1bca);
      _0x3494f0.bufferSubData(34963, 0, _0xb76fd2.subarray(_0x173ffa, _0x173ffa + _0x8e628e));
      _0x173ffa = 0;
    }
    _0x797e34.preDrawHandleClientVertexAttribBindings(_0x51e13d);
    _0x3494f0.drawElements(_0x141711, _0x51e13d, _0x40be7a, _0x173ffa);
    _0x797e34.postDrawHandleClientVertexAttribBindings(_0x51e13d);
    if (!_0x3494f0.currentElementArrayBufferBinding) {
      _0x3494f0.bindBuffer(34963, null);
    }
  }
  function _0x126ad7(_0x1eea71, _0x3e7c04, _0x18c6d0, _0x486a5b, _0x357f2f) {
    _0x3494f0.drawElementsInstanced(_0x1eea71, _0x3e7c04, _0x18c6d0, _0x486a5b, _0x357f2f);
  }
  function _0x1e0b0f(_0x132530) {
    _0x3494f0.enable(_0x132530);
  }
  function _0x547b97(_0x156bcc) {
    var _0x1c4733 = _0x797e34.currentContext.clientBuffers[_0x156bcc];
    _0x1c4733.enabled = true;
    _0x3494f0.enableVertexAttribArray(_0x156bcc);
  }
  function _0x4035b9(_0x2d88d1) {
    _0x3494f0.endQuery(_0x2d88d1);
  }
  function _0x115251() {
    _0x3494f0.endTransformFeedback();
  }
  function _0x14f285(_0x6705f3, _0x16966a) {
    var _0x6c0ff6 = _0x3494f0.fenceSync(_0x6705f3, _0x16966a);
    if (_0x6c0ff6) {
      var _0x4c726f = _0x797e34.getNewId(_0x797e34.syncs);
      _0x6c0ff6.name = _0x4c726f;
      _0x797e34.syncs[_0x4c726f] = _0x6c0ff6;
      return _0x4c726f;
    } else {
      return 0;
    }
  }
  function _0x47ce4a() {
    _0x3494f0.finish();
  }
  function _0x42ed7b() {
    _0x3494f0.flush();
  }
  function _0x289cbe(_0x29c707) {
    switch (_0x29c707) {
      case 34962:
        _0x29c707 = 34964;
        break;
      case 34963:
        _0x29c707 = 34965;
        break;
      case 35051:
        _0x29c707 = 35053;
        break;
      case 35052:
        _0x29c707 = 35055;
        break;
      case 35982:
        _0x29c707 = 35983;
        break;
      case 36662:
        _0x29c707 = 36662;
        break;
      case 36663:
        _0x29c707 = 36663;
        break;
      case 35345:
        _0x29c707 = 35368;
        break;
    }
    var _0x13983 = _0x3494f0.getParameter(_0x29c707);
    if (_0x13983) {
      return _0x13983.name | 0;
    } else {
      return 0;
    }
  }
  function _0x437d6c(_0x1a70f4) {
    switch (_0x1a70f4) {
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
  function _0x552c81(_0x2141c3, _0xa3e47e, _0x5ace37) {
    if (!_0x437d6c(_0x2141c3)) {
      _0x797e34.recordError(1280);
      _0x551fc8("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x3d9ed9 = _0x797e34.mappedBuffers[_0x289cbe(_0x2141c3)];
    if (!_0x3d9ed9) {
      _0x797e34.recordError(1282);
      _0x551fc8("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x3d9ed9.access & 16)) {
      _0x797e34.recordError(1282);
      _0x551fc8("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0xa3e47e < 0 || _0x5ace37 < 0 || _0xa3e47e + _0x5ace37 > _0x3d9ed9.length) {
      _0x797e34.recordError(1281);
      _0x551fc8("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x3494f0.bufferSubData(_0x2141c3, _0x3d9ed9.offset, _0xb76fd2.subarray(_0x3d9ed9.mem + _0xa3e47e, _0x3d9ed9.mem + _0xa3e47e + _0x5ace37));
  }
  function _0x23cbe7(_0x13866d, _0x42221b, _0x30ef22, _0x8a8d06) {
    _0x3494f0.framebufferRenderbuffer(_0x13866d, _0x42221b, _0x30ef22, _0x797e34.renderbuffers[_0x8a8d06]);
  }
  function _0x432032(_0x1478d8, _0xc918e4, _0x4bb63e, _0x287ca8, _0x1f8377) {
    _0x3494f0.framebufferTexture2D(_0x1478d8, _0xc918e4, _0x4bb63e, _0x797e34.textures[_0x287ca8], _0x1f8377);
  }
  function _0x5ba1e5(_0x59ed7a, _0x5a0633, _0x3bb1e8, _0x55ac96, _0x2c5b31) {
    _0x3494f0.framebufferTextureLayer(_0x59ed7a, _0x5a0633, _0x797e34.textures[_0x3bb1e8], _0x55ac96, _0x2c5b31);
  }
  function _0x31623a(_0x5814ae) {
    _0x3494f0.frontFace(_0x5814ae);
  }
  function _0xfc6bf6(_0x5f1cb1, _0x1f90d1, _0x5d6efa, _0x45c60f) {
    for (var _0x1589a9 = 0; _0x1589a9 < _0x5f1cb1; _0x1589a9++) {
      var _0x1db647 = _0x3494f0[_0x5d6efa]();
      var _0x889249 = _0x1db647 && _0x797e34.getNewId(_0x45c60f);
      if (_0x1db647) {
        _0x1db647.name = _0x889249;
        _0x45c60f[_0x889249] = _0x1db647;
      } else {
        _0x797e34.recordError(1282);
      }
      _0x14d31c[_0x1f90d1 + _0x1589a9 * 4 >> 2] = _0x889249;
    }
  }
  function _0x29d31c(_0x41917a, _0x18780e) {
    _0xfc6bf6(_0x41917a, _0x18780e, "createBuffer", _0x797e34.buffers);
  }
  function _0x1cfde2(_0x3ffaff, _0x535104) {
    _0xfc6bf6(_0x3ffaff, _0x535104, "createFramebuffer", _0x797e34.framebuffers);
  }
  function _0x109c79(_0x432d1c, _0x3a5698) {
    _0xfc6bf6(_0x432d1c, _0x3a5698, "createQuery", _0x797e34.queries);
  }
  function _0x11cf56(_0x8528ce, _0x5bff9e) {
    _0xfc6bf6(_0x8528ce, _0x5bff9e, "createRenderbuffer", _0x797e34.renderbuffers);
  }
  function _0x2461a1(_0x7b7df2, _0x3fe9fe) {
    _0xfc6bf6(_0x7b7df2, _0x3fe9fe, "createSampler", _0x797e34.samplers);
  }
  function _0x1914d0(_0x1ec72c, _0x4bcc22) {
    _0xfc6bf6(_0x1ec72c, _0x4bcc22, "createTexture", _0x797e34.textures);
  }
  function _0x4ee94e(_0x2acdd4, _0xa80106) {
    _0xfc6bf6(_0x2acdd4, _0xa80106, "createTransformFeedback", _0x797e34.transformFeedbacks);
  }
  function _0x4e9dd1(_0x35ddfc, _0x42435f) {
    _0xfc6bf6(_0x35ddfc, _0x42435f, "createVertexArray", _0x797e34.vaos);
  }
  function _0x2996ce(_0x2295b9) {
    _0x3494f0.generateMipmap(_0x2295b9);
  }
  function _0x7f8b6b(_0x2113e4, _0x5260bf, _0x2d68f7, _0x211f0d, _0x88a651, _0x2876f8, _0x424754, _0x138067) {
    _0x5260bf = _0x797e34.programs[_0x5260bf];
    var _0x515cff = _0x3494f0[_0x2113e4](_0x5260bf, _0x2d68f7);
    if (_0x515cff) {
      var _0x1c9c21 = _0x138067 && _0x331149(_0x515cff.name, _0x138067, _0x211f0d);
      if (_0x88a651) {
        _0x14d31c[_0x88a651 >> 2] = _0x1c9c21;
      }
      if (_0x2876f8) {
        _0x14d31c[_0x2876f8 >> 2] = _0x515cff.size;
      }
      if (_0x424754) {
        _0x14d31c[_0x424754 >> 2] = _0x515cff.type;
      }
    }
  }
  function _0x16595f(_0x44b8fa, _0x4c4291, _0xb97ebe, _0x497a2f, _0x1120ee, _0x2e8e14, _0x35da4e) {
    _0x7f8b6b("getActiveAttrib", _0x44b8fa, _0x4c4291, _0xb97ebe, _0x497a2f, _0x1120ee, _0x2e8e14, _0x35da4e);
  }
  function _0x2fe439(_0x2c683e, _0xc08ce, _0x2c0139, _0x2389e1, _0x2e3311, _0x513531, _0x22b4ec) {
    _0x7f8b6b("getActiveUniform", _0x2c683e, _0xc08ce, _0x2c0139, _0x2389e1, _0x2e3311, _0x513531, _0x22b4ec);
  }
  function _0xe51525(_0x16a6b8, _0x459dba, _0x9cc920, _0x6cf59d, _0x200321) {
    _0x16a6b8 = _0x797e34.programs[_0x16a6b8];
    var _0x4033a1 = _0x3494f0.getActiveUniformBlockName(_0x16a6b8, _0x459dba);
    if (!_0x4033a1) {
      return;
    }
    if (_0x200321 && _0x9cc920 > 0) {
      var _0x391718 = _0x331149(_0x4033a1, _0x200321, _0x9cc920);
      if (_0x6cf59d) {
        _0x14d31c[_0x6cf59d >> 2] = _0x391718;
      }
    } else if (_0x6cf59d) {
      _0x14d31c[_0x6cf59d >> 2] = 0;
    }
  }
  function _0x11c1d6(_0x50d79d, _0x339a14, _0x461c4f, _0x32eab0) {
    if (!_0x32eab0) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x50d79d = _0x797e34.programs[_0x50d79d];
    if (_0x461c4f == 35393) {
      var _0x20a14b = _0x3494f0.getActiveUniformBlockName(_0x50d79d, _0x339a14);
      _0x14d31c[_0x32eab0 >> 2] = _0x20a14b.length + 1;
      return;
    }
    var _0x15980c = _0x3494f0.getActiveUniformBlockParameter(_0x50d79d, _0x339a14, _0x461c4f);
    if (_0x15980c === null) {
      return;
    }
    if (_0x461c4f == 35395) {
      for (var _0x47bdf8 = 0; _0x47bdf8 < _0x15980c.length; _0x47bdf8++) {
        _0x14d31c[_0x32eab0 + _0x47bdf8 * 4 >> 2] = _0x15980c[_0x47bdf8];
      }
    } else {
      _0x14d31c[_0x32eab0 >> 2] = _0x15980c;
    }
  }
  function _0x367309(_0x358862, _0x145176, _0x8e25fc, _0x5757d2, _0xb7f27f) {
    if (!_0xb7f27f) {
      _0x797e34.recordError(1281);
      return;
    }
    if (_0x145176 > 0 && _0x8e25fc == 0) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x358862 = _0x797e34.programs[_0x358862];
    var _0x84049a = [];
    for (var _0xedfb90 = 0; _0xedfb90 < _0x145176; _0xedfb90++) {
      _0x84049a.push(_0x14d31c[_0x8e25fc + _0xedfb90 * 4 >> 2]);
    }
    var _0x294704 = _0x3494f0.getActiveUniforms(_0x358862, _0x84049a, _0x5757d2);
    if (!_0x294704) {
      return;
    }
    var _0x2c50ba = _0x294704.length;
    for (var _0xedfb90 = 0; _0xedfb90 < _0x2c50ba; _0xedfb90++) {
      _0x14d31c[_0xb7f27f + _0xedfb90 * 4 >> 2] = _0x294704[_0xedfb90];
    }
  }
  function _0x26376a(_0x46e8b3, _0x37f013) {
    return _0x3494f0.getAttribLocation(_0x797e34.programs[_0x46e8b3], _0x21e34e(_0x37f013));
  }
  function _0x56ca8d(_0x4bdd25, _0x47c0f1, _0x295fe2, _0x83a156) {
    if (!_0x83a156) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x3494f0.getBufferSubData(_0x4bdd25, _0x47c0f1, _0xb76fd2, _0x83a156, _0x295fe2);
  }
  function _0x48731e() {
    var _0x598d23 = _0x3494f0.getError() || _0x797e34.lastError;
    _0x797e34.lastError = 0;
    return _0x598d23;
  }
  function _0x5bc154(_0x5a3352, _0x3783c9, _0x283b5b, _0x58b28d) {
    var _0x23bc2b = _0x3494f0.getFramebufferAttachmentParameter(_0x5a3352, _0x3783c9, _0x283b5b);
    if (_0x23bc2b instanceof WebGLRenderbuffer || _0x23bc2b instanceof WebGLTexture) {
      _0x23bc2b = _0x23bc2b.name | 0;
    }
    _0x14d31c[_0x58b28d >> 2] = _0x23bc2b;
  }
  function _0x47da3f(_0x56f806, _0x3432cb) {
    _0x5305b0[_0x56f806 >> 2] = _0x3432cb;
    _0x5305b0[_0x56f806 + 4 >> 2] = (_0x3432cb - _0x5305b0[_0x56f806 >> 2]) / 4294967296;
  }
  function _0x53de44(_0x424b9c, _0x47e7fb, _0x3473d5, _0x24394a) {
    if (!_0x3473d5) {
      _0x797e34.recordError(1281);
      return;
    }
    var _0x141aa3 = _0x3494f0.getIndexedParameter(_0x424b9c, _0x47e7fb);
    var _0x3cd19d;
    switch (typeof _0x141aa3) {
      case "boolean":
        _0x3cd19d = _0x141aa3 ? 1 : 0;
        break;
      case "number":
        _0x3cd19d = _0x141aa3;
        break;
      case "object":
        if (_0x141aa3 === null) {
          switch (_0x424b9c) {
            case 35983:
            case 35368:
              _0x3cd19d = 0;
              break;
            default:
              {
                _0x797e34.recordError(1280);
                return;
              }
          }
        } else if (_0x141aa3 instanceof WebGLBuffer) {
          _0x3cd19d = _0x141aa3.name | 0;
        } else {
          _0x797e34.recordError(1280);
          return;
        }
        break;
      default:
        _0x797e34.recordError(1280);
        return;
    }
    switch (_0x24394a) {
      case 1:
        _0x47da3f(_0x3473d5, _0x3cd19d);
        break;
      case 0:
        _0x14d31c[_0x3473d5 >> 2] = _0x3cd19d;
        break;
      case 2:
        _0x29a541[_0x3473d5 >> 2] = _0x3cd19d;
        break;
      case 4:
        _0x133579[_0x3473d5 >> 0] = _0x3cd19d ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x24394a;
    }
  }
  function _0x3e6fef(_0x31e8db, _0x3dc429, _0x324736) {
    _0x53de44(_0x31e8db, _0x3dc429, _0x324736, 0);
  }
  function _0x7623a7(_0x2988d1, _0x377c25, _0x41fe0d) {
    if (!_0x377c25) {
      _0x797e34.recordError(1281);
      return;
    }
    var _0x216355 = undefined;
    switch (_0x2988d1) {
      case 36346:
        _0x216355 = 1;
        break;
      case 36344:
        if (_0x41fe0d != 0 && _0x41fe0d != 1) {
          _0x797e34.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x216355 = 0;
        break;
      case 34466:
        var _0x2e2db1 = _0x3494f0.getParameter(34467);
        _0x216355 = _0x2e2db1 ? _0x2e2db1.length : 0;
        break;
      case 33390:
        _0x216355 = 1048576;
        break;
      case 33309:
        if (_0x797e34.currentContext.version < 2) {
          _0x797e34.recordError(1282);
          return;
        }
        var _0x136dc5 = _0x3494f0.getSupportedExtensions() || [];
        _0x216355 = _0x136dc5.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x797e34.currentContext.version < 2) {
          _0x797e34.recordError(1280);
          return;
        }
        _0x216355 = _0x2988d1 == 33307 ? 3 : 0;
        break;
    }
    if (_0x216355 === undefined) {
      var _0xae1fbd = _0x3494f0.getParameter(_0x2988d1);
      switch (typeof _0xae1fbd) {
        case "number":
          _0x216355 = _0xae1fbd;
          break;
        case "boolean":
          _0x216355 = _0xae1fbd ? 1 : 0;
          break;
        case "string":
          _0x797e34.recordError(1280);
          return;
        case "object":
          if (_0xae1fbd === null) {
            switch (_0x2988d1) {
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
                  _0x216355 = 0;
                  break;
                }
              default:
                {
                  _0x797e34.recordError(1280);
                  return;
                }
            }
          } else if (_0xae1fbd instanceof Float32Array || _0xae1fbd instanceof Uint32Array || _0xae1fbd instanceof Int32Array || _0xae1fbd instanceof Array) {
            for (var _0x4916f5 = 0; _0x4916f5 < _0xae1fbd.length; ++_0x4916f5) {
              switch (_0x41fe0d) {
                case 0:
                  _0x14d31c[_0x377c25 + _0x4916f5 * 4 >> 2] = _0xae1fbd[_0x4916f5];
                  break;
                case 2:
                  _0x29a541[_0x377c25 + _0x4916f5 * 4 >> 2] = _0xae1fbd[_0x4916f5];
                  break;
                case 4:
                  _0x133579[_0x377c25 + _0x4916f5 >> 0] = _0xae1fbd[_0x4916f5] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x216355 = _0xae1fbd.name | 0;
            } catch (_0x38a7f1) {
              _0x797e34.recordError(1280);
              _0x551fc8("GL_INVALID_ENUM in glGet" + _0x41fe0d + "v: Unknown object returned from WebGL getParameter(" + _0x2988d1 + ")! (error: " + _0x38a7f1 + ")");
              return;
            }
          }
          break;
        default:
          _0x797e34.recordError(1280);
          _0x551fc8("GL_INVALID_ENUM in glGet" + _0x41fe0d + "v: Native code calling glGet" + _0x41fe0d + "v(" + _0x2988d1 + ") and it returns " + _0xae1fbd + " of type " + typeof _0xae1fbd + "!");
          return;
      }
    }
    switch (_0x41fe0d) {
      case 1:
        _0x47da3f(_0x377c25, _0x216355);
        break;
      case 0:
        _0x14d31c[_0x377c25 >> 2] = _0x216355;
        break;
      case 2:
        _0x29a541[_0x377c25 >> 2] = _0x216355;
        break;
      case 4:
        _0x133579[_0x377c25 >> 0] = _0x216355 ? 1 : 0;
        break;
    }
  }
  function _0x49310f(_0x3ab314, _0x5ab9ce) {
    _0x7623a7(_0x3ab314, _0x5ab9ce, 0);
  }
  function _0x3d2883(_0x1d9fee, _0x26cd8d, _0x1c27f7, _0x315239, _0x3cbaf9) {
    if (_0x315239 < 0) {
      _0x797e34.recordError(1281);
      return;
    }
    if (!_0x3cbaf9) {
      _0x797e34.recordError(1281);
      return;
    }
    var _0x5f0cf1 = _0x3494f0.getInternalformatParameter(_0x1d9fee, _0x26cd8d, _0x1c27f7);
    if (_0x5f0cf1 === null) {
      return;
    }
    for (var _0x5eae37 = 0; _0x5eae37 < _0x5f0cf1.length && _0x5eae37 < _0x315239; ++_0x5eae37) {
      _0x14d31c[_0x3cbaf9 + _0x5eae37 * 4 >> 2] = _0x5f0cf1[_0x5eae37];
    }
  }
  function _0x518cc3(_0x49ace4, _0x35fe4d, _0x21e9cb, _0x57645c, _0x26d683) {
    _0x797e34.recordError(1282);
  }
  function _0x56f051(_0x1cf4a4, _0x2151ee, _0x24eba2, _0x5fe1c8) {
    var _0x4adc99 = _0x3494f0.getProgramInfoLog(_0x797e34.programs[_0x1cf4a4]);
    if (_0x4adc99 === null) {
      _0x4adc99 = "(unknown error)";
    }
    var _0x141f8f = _0x2151ee > 0 && _0x5fe1c8 ? _0x331149(_0x4adc99, _0x5fe1c8, _0x2151ee) : 0;
    if (_0x24eba2) {
      _0x14d31c[_0x24eba2 >> 2] = _0x141f8f;
    }
  }
  function _0x1460c7(_0x39f139, _0x479897, _0x5b4dd6) {
    if (!_0x5b4dd6) {
      _0x797e34.recordError(1281);
      return;
    }
    if (_0x39f139 >= _0x797e34.counter) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x39f139 = _0x797e34.programs[_0x39f139];
    if (_0x479897 == 35716) {
      var _0x6d2cea = _0x3494f0.getProgramInfoLog(_0x39f139);
      if (_0x6d2cea === null) {
        _0x6d2cea = "(unknown error)";
      }
      _0x14d31c[_0x5b4dd6 >> 2] = _0x6d2cea.length + 1;
    } else if (_0x479897 == 35719) {
      if (!_0x39f139.maxUniformLength) {
        for (var _0x597283 = 0; _0x597283 < _0x3494f0.getProgramParameter(_0x39f139, 35718); ++_0x597283) {
          _0x39f139.maxUniformLength = Math.max(_0x39f139.maxUniformLength, _0x3494f0.getActiveUniform(_0x39f139, _0x597283).name.length + 1);
        }
      }
      _0x14d31c[_0x5b4dd6 >> 2] = _0x39f139.maxUniformLength;
    } else if (_0x479897 == 35722) {
      if (!_0x39f139.maxAttributeLength) {
        for (var _0x597283 = 0; _0x597283 < _0x3494f0.getProgramParameter(_0x39f139, 35721); ++_0x597283) {
          _0x39f139.maxAttributeLength = Math.max(_0x39f139.maxAttributeLength, _0x3494f0.getActiveAttrib(_0x39f139, _0x597283).name.length + 1);
        }
      }
      _0x14d31c[_0x5b4dd6 >> 2] = _0x39f139.maxAttributeLength;
    } else if (_0x479897 == 35381) {
      if (!_0x39f139.maxUniformBlockNameLength) {
        for (var _0x597283 = 0; _0x597283 < _0x3494f0.getProgramParameter(_0x39f139, 35382); ++_0x597283) {
          _0x39f139.maxUniformBlockNameLength = Math.max(_0x39f139.maxUniformBlockNameLength, _0x3494f0.getActiveUniformBlockName(_0x39f139, _0x597283).length + 1);
        }
      }
      _0x14d31c[_0x5b4dd6 >> 2] = _0x39f139.maxUniformBlockNameLength;
    } else {
      _0x14d31c[_0x5b4dd6 >> 2] = _0x3494f0.getProgramParameter(_0x39f139, _0x479897);
    }
  }
  function _0x711560(_0x1ee57e, _0x4851e1, _0x118aa1) {
    if (!_0x118aa1) {
      _0x797e34.recordError(1281);
      return;
    }
    var _0x287233 = _0x797e34.queries[_0x1ee57e];
    var _0x41f493 = _0x3494f0.getQueryParameter(_0x287233, _0x4851e1);
    var _0x22fb22;
    if (typeof _0x41f493 == "boolean") {
      _0x22fb22 = _0x41f493 ? 1 : 0;
    } else {
      _0x22fb22 = _0x41f493;
    }
    _0x14d31c[_0x118aa1 >> 2] = _0x22fb22;
  }
  function _0x4829c5(_0x58bdeb, _0x1e34ab, _0x106400) {
    if (!_0x106400) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x14d31c[_0x106400 >> 2] = _0x3494f0.getQuery(_0x58bdeb, _0x1e34ab);
  }
  function _0x32d0d6(_0x2970c5, _0x5198ae, _0x22d34a) {
    if (!_0x22d34a) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x14d31c[_0x22d34a >> 2] = _0x3494f0.getRenderbufferParameter(_0x2970c5, _0x5198ae);
  }
  function _0x132005(_0x273571, _0x177705, _0x19b5a3, _0x280520) {
    var _0x3a6df7 = _0x3494f0.getShaderInfoLog(_0x797e34.shaders[_0x273571]);
    if (_0x3a6df7 === null) {
      _0x3a6df7 = "(unknown error)";
    }
    var _0xb4aeae = _0x177705 > 0 && _0x280520 ? _0x331149(_0x3a6df7, _0x280520, _0x177705) : 0;
    if (_0x19b5a3) {
      _0x14d31c[_0x19b5a3 >> 2] = _0xb4aeae;
    }
  }
  function _0x36f941(_0x391871, _0x565024, _0xdbc636, _0x461440) {
    var _0x40bdf4 = _0x3494f0.getShaderPrecisionFormat(_0x391871, _0x565024);
    _0x14d31c[_0xdbc636 >> 2] = _0x40bdf4.rangeMin;
    _0x14d31c[_0xdbc636 + 4 >> 2] = _0x40bdf4.rangeMax;
    _0x14d31c[_0x461440 >> 2] = _0x40bdf4.precision;
  }
  function _0x24d01b(_0x1ed960, _0x22f57b, _0x50ef18, _0x7b8664) {
    var _0x2615a5 = _0x3494f0.getShaderSource(_0x797e34.shaders[_0x1ed960]);
    if (!_0x2615a5) {
      return;
    }
    var _0x4d3a33 = _0x22f57b > 0 && _0x7b8664 ? _0x331149(_0x2615a5, _0x7b8664, _0x22f57b) : 0;
    if (_0x50ef18) {
      _0x14d31c[_0x50ef18 >> 2] = _0x4d3a33;
    }
  }
  function _0x5bbdfc(_0x5d0950, _0x465331, _0x176101) {
    if (!_0x176101) {
      _0x797e34.recordError(1281);
      return;
    }
    if (_0x465331 == 35716) {
      var _0x4fd296 = _0x3494f0.getShaderInfoLog(_0x797e34.shaders[_0x5d0950]);
      if (_0x4fd296 === null) {
        _0x4fd296 = "(unknown error)";
      }
      var _0x3a87a8 = _0x4fd296 ? _0x4fd296.length + 1 : 0;
      _0x14d31c[_0x176101 >> 2] = _0x3a87a8;
    } else if (_0x465331 == 35720) {
      var _0x39706e = _0x3494f0.getShaderSource(_0x797e34.shaders[_0x5d0950]);
      var _0x3166b3 = _0x39706e ? _0x39706e.length + 1 : 0;
      _0x14d31c[_0x176101 >> 2] = _0x3166b3;
    } else {
      _0x14d31c[_0x176101 >> 2] = _0x3494f0.getShaderParameter(_0x797e34.shaders[_0x5d0950], _0x465331);
    }
  }
  function _0x2a31a6(_0x174582) {
    var _0x4c2ec4 = _0x797e34.stringCache[_0x174582];
    if (!_0x4c2ec4) {
      switch (_0x174582) {
        case 7939:
          var _0x5db650 = _0x3494f0.getSupportedExtensions() || [];
          _0x5db650 = _0x5db650.concat(_0x5db650.map(function (_0x519ff4) {
            return "GL_" + _0x519ff4;
          }));
          _0x4c2ec4 = _0x49f2d3(_0x5db650.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x1613dd = _0x3494f0.getParameter(_0x174582);
          if (!_0x1613dd) {
            _0x797e34.recordError(1280);
          }
          _0x4c2ec4 = _0x1613dd && _0x49f2d3(_0x1613dd);
          break;
        case 7938:
          var _0x3ee10f = _0x3494f0.getParameter(7938);
          if (_0x797e34.currentContext.version >= 2) {
            _0x3ee10f = "OpenGL ES 3.0 (" + _0x3ee10f + ")";
          } else {
            _0x3ee10f = "OpenGL ES 2.0 (" + _0x3ee10f + ")";
          }
          _0x4c2ec4 = _0x49f2d3(_0x3ee10f);
          break;
        case 35724:
          var _0x17112b = _0x3494f0.getParameter(35724);
          var _0x2a83a3 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x568d38 = _0x17112b.match(_0x2a83a3);
          if (_0x568d38 !== null) {
            if (_0x568d38[1].length == 3) {
              _0x568d38[1] = _0x568d38[1] + "0";
            }
            _0x17112b = "OpenGL ES GLSL ES " + _0x568d38[1] + " (" + _0x17112b + ")";
          }
          _0x4c2ec4 = _0x49f2d3(_0x17112b);
          break;
        default:
          _0x797e34.recordError(1280);
      }
      _0x797e34.stringCache[_0x174582] = _0x4c2ec4;
    }
    return _0x4c2ec4;
  }
  function _0x322305(_0x56297a, _0x58426d) {
    if (_0x797e34.currentContext.version < 2) {
      _0x797e34.recordError(1282);
      return 0;
    }
    var _0x2b2ec1 = _0x797e34.stringiCache[_0x56297a];
    if (_0x2b2ec1) {
      if (_0x58426d < 0 || _0x58426d >= _0x2b2ec1.length) {
        _0x797e34.recordError(1281);
        return 0;
      }
      return _0x2b2ec1[_0x58426d];
    }
    switch (_0x56297a) {
      case 7939:
        var _0x10b7c3 = _0x3494f0.getSupportedExtensions() || [];
        _0x10b7c3 = _0x10b7c3.concat(_0x10b7c3.map(function (_0xaf618b) {
          return "GL_" + _0xaf618b;
        }));
        _0x10b7c3 = _0x10b7c3.map(function (_0x1f4d86) {
          return _0x49f2d3(_0x1f4d86);
        });
        _0x2b2ec1 = _0x797e34.stringiCache[_0x56297a] = _0x10b7c3;
        if (_0x58426d < 0 || _0x58426d >= _0x2b2ec1.length) {
          _0x797e34.recordError(1281);
          return 0;
        }
        return _0x2b2ec1[_0x58426d];
      default:
        _0x797e34.recordError(1280);
        return 0;
    }
  }
  function _0x1949a1(_0x4693b0, _0x9a1810, _0x5c759e) {
    if (!_0x5c759e) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x14d31c[_0x5c759e >> 2] = _0x3494f0.getTexParameter(_0x4693b0, _0x9a1810);
  }
  function _0x13dbee(_0x9f2612, _0xb3cdd5) {
    return _0x3494f0.getUniformBlockIndex(_0x797e34.programs[_0x9f2612], _0x21e34e(_0xb3cdd5));
  }
  function _0xb61d08(_0x367770, _0x552c03, _0x30184d, _0x59b50d) {
    if (!_0x59b50d) {
      _0x797e34.recordError(1281);
      return;
    }
    if (_0x552c03 > 0 && (_0x30184d == 0 || _0x59b50d == 0)) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x367770 = _0x797e34.programs[_0x367770];
    var _0x51ed3d = [];
    for (var _0x265dc5 = 0; _0x265dc5 < _0x552c03; _0x265dc5++) {
      _0x51ed3d.push(_0x21e34e(_0x14d31c[_0x30184d + _0x265dc5 * 4 >> 2]));
    }
    var _0x4ea23e = _0x3494f0.getUniformIndices(_0x367770, _0x51ed3d);
    if (!_0x4ea23e) {
      return;
    }
    var _0x574021 = _0x4ea23e.length;
    for (var _0x265dc5 = 0; _0x265dc5 < _0x574021; _0x265dc5++) {
      _0x14d31c[_0x59b50d + _0x265dc5 * 4 >> 2] = _0x4ea23e[_0x265dc5];
    }
  }
  function _0x43bf46(_0x307e3b, _0x2543ee) {
    function _0x32abd2(_0x3f61b5) {
      return _0x3f61b5.slice(-1) == "]" && _0x3f61b5.lastIndexOf("[");
    }
    _0x2543ee = _0x21e34e(_0x2543ee);
    if (_0x307e3b = _0x797e34.programs[_0x307e3b]) {
      var _0x398a59 = _0x307e3b.uniformLocsById;
      var _0x422f67 = _0x307e3b.uniformSizeAndIdsByName;
      var _0x5d61f4;
      var _0x126384;
      var _0x228790 = 0;
      var _0x1e2bec = _0x2543ee;
      var _0x6ed53a = _0x32abd2(_0x2543ee);
      if (!_0x398a59) {
        _0x307e3b.uniformLocsById = _0x398a59 = {};
        _0x307e3b.uniformArrayNamesById = {};
        for (_0x5d61f4 = 0; _0x5d61f4 < _0x3494f0.getProgramParameter(_0x307e3b, 35718); ++_0x5d61f4) {
          var _0x2d581a = _0x3494f0.getActiveUniform(_0x307e3b, _0x5d61f4);
          var _0x265545 = _0x2d581a.name;
          var _0x3dd942 = _0x2d581a.size;
          var _0xa698cd = _0x32abd2(_0x265545);
          var _0x15847a = _0xa698cd > 0 ? _0x265545.slice(0, _0xa698cd) : _0x265545;
          var _0x5db938 = _0x422f67[_0x15847a] ? _0x422f67[_0x15847a][1] : _0x307e3b.uniformIdCounter;
          _0x307e3b.uniformIdCounter = Math.max(_0x5db938 + _0x3dd942, _0x307e3b.uniformIdCounter);
          _0x422f67[_0x15847a] = [_0x3dd942, _0x5db938];
          for (_0x126384 = 0; _0x126384 < _0x3dd942; ++_0x126384) {
            _0x398a59[_0x5db938] = _0x126384;
            _0x307e3b.uniformArrayNamesById[_0x5db938++] = _0x15847a;
          }
        }
      }
      if (_0x6ed53a > 0) {
        _0x228790 = _0x26e49b(_0x2543ee.slice(_0x6ed53a + 1)) >>> 0;
        _0x1e2bec = _0x2543ee.slice(0, _0x6ed53a);
      }
      var _0x491b77 = _0x422f67[_0x1e2bec];
      if (_0x491b77 && _0x228790 < _0x491b77[0]) {
        _0x228790 += _0x491b77[1];
        if (_0x398a59[_0x228790] = _0x398a59[_0x228790] || _0x3494f0.getUniformLocation(_0x307e3b, _0x2543ee)) {
          return _0x228790;
        }
      }
    } else {
      _0x797e34.recordError(1281);
    }
    return -1;
  }
  function _0x2eff6f(_0x18b0a0) {
    var _0x1e039a = _0x3494f0.currentProgram;
    if (_0x1e039a) {
      var _0x1db48d = _0x1e039a.uniformLocsById[_0x18b0a0];
      if (typeof _0x1db48d === "number") {
        _0x1e039a.uniformLocsById[_0x18b0a0] = _0x1db48d = _0x3494f0.getUniformLocation(_0x1e039a, _0x1e039a.uniformArrayNamesById[_0x18b0a0] + (_0x1db48d > 0 ? "[" + _0x1db48d + "]" : ""));
      }
      return _0x1db48d;
    } else {
      _0x797e34.recordError(1282);
    }
  }
  function _0x438556(_0x171858, _0x126246, _0x537799, _0x220669) {
    if (!_0x537799) {
      _0x797e34.recordError(1281);
      return;
    }
    _0x171858 = _0x797e34.programs[_0x171858];
    var _0x22dea7 = _0x3494f0.getUniform(_0x171858, _0x2eff6f(_0x126246));
    if (typeof _0x22dea7 == "number" || typeof _0x22dea7 == "boolean") {
      switch (_0x220669) {
        case 0:
          _0x14d31c[_0x537799 >> 2] = _0x22dea7;
          break;
        case 2:
          _0x29a541[_0x537799 >> 2] = _0x22dea7;
          break;
      }
    } else {
      for (var _0xd9e16b = 0; _0xd9e16b < _0x22dea7.length; _0xd9e16b++) {
        switch (_0x220669) {
          case 0:
            _0x14d31c[_0x537799 + _0xd9e16b * 4 >> 2] = _0x22dea7[_0xd9e16b];
            break;
          case 2:
            _0x29a541[_0x537799 + _0xd9e16b * 4 >> 2] = _0x22dea7[_0xd9e16b];
            break;
        }
      }
    }
  }
  function _0x35b9b3(_0x485bbe, _0x5f5222, _0x55f244) {
    _0x438556(_0x485bbe, _0x5f5222, _0x55f244, 0);
  }
  function _0x12a645(_0xd6a2, _0x3e56ef, _0x12bf2b, _0x18959f) {
    if (!_0x12bf2b) {
      _0x797e34.recordError(1281);
      return;
    }
    if (_0x797e34.currentContext.clientBuffers[_0xd6a2].enabled) {
      _0x551fc8("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x517d1a = _0x3494f0.getVertexAttrib(_0xd6a2, _0x3e56ef);
    if (_0x3e56ef == 34975) {
      _0x14d31c[_0x12bf2b >> 2] = _0x517d1a && _0x517d1a.name;
    } else if (typeof _0x517d1a == "number" || typeof _0x517d1a == "boolean") {
      switch (_0x18959f) {
        case 0:
          _0x14d31c[_0x12bf2b >> 2] = _0x517d1a;
          break;
        case 2:
          _0x29a541[_0x12bf2b >> 2] = _0x517d1a;
          break;
        case 5:
          _0x14d31c[_0x12bf2b >> 2] = Math.fround(_0x517d1a);
          break;
      }
    } else {
      for (var _0x2a5724 = 0; _0x2a5724 < _0x517d1a.length; _0x2a5724++) {
        switch (_0x18959f) {
          case 0:
            _0x14d31c[_0x12bf2b + _0x2a5724 * 4 >> 2] = _0x517d1a[_0x2a5724];
            break;
          case 2:
            _0x29a541[_0x12bf2b + _0x2a5724 * 4 >> 2] = _0x517d1a[_0x2a5724];
            break;
          case 5:
            _0x14d31c[_0x12bf2b + _0x2a5724 * 4 >> 2] = Math.fround(_0x517d1a[_0x2a5724]);
            break;
        }
      }
    }
  }
  function _0x4466db(_0x39ea3d, _0x22a8ee, _0x71d2a1) {
    _0x12a645(_0x39ea3d, _0x22a8ee, _0x71d2a1, 5);
  }
  function _0x4b06e9(_0x4f4282, _0x2fb986, _0x4784f3) {
    var _0x28eb4f = _0x1a73d3[_0x2fb986];
    for (var _0x4b2918 = 0; _0x4b2918 < _0x2fb986; _0x4b2918++) {
      _0x28eb4f[_0x4b2918] = _0x14d31c[_0x4784f3 + _0x4b2918 * 4 >> 2];
    }
    _0x3494f0.invalidateFramebuffer(_0x4f4282, _0x28eb4f);
  }
  function _0x530346(_0x1c0b41) {
    return _0x3494f0.isEnabled(_0x1c0b41);
  }
  function _0x538c92(_0x2bf645) {
    var _0x13054d = _0x797e34.vaos[_0x2bf645];
    if (!_0x13054d) {
      return 0;
    }
    return _0x3494f0.isVertexArray(_0x13054d);
  }
  function _0x4e3dcd(_0x265c6c) {
    _0x265c6c = _0x797e34.programs[_0x265c6c];
    _0x3494f0.linkProgram(_0x265c6c);
    _0x265c6c.uniformLocsById = 0;
    _0x265c6c.uniformSizeAndIdsByName = {};
    [_0x265c6c.vs, _0x265c6c.fs].forEach(function (_0x80588d) {
      Object.keys(_0x80588d.explicitUniformLocations).forEach(function (_0x3ce2d8) {
        var _0x15cdfe = _0x80588d.explicitUniformLocations[_0x3ce2d8];
        _0x265c6c.uniformSizeAndIdsByName[_0x3ce2d8] = [1, _0x15cdfe];
        _0x265c6c.uniformIdCounter = Math.max(_0x265c6c.uniformIdCounter, _0x15cdfe + 1);
      });
    });
    function _0x1e5bcd(_0x460fb4, _0x3836a7) {
      Object.keys(_0x3836a7).forEach(function (_0x4622c3) {
        _0x460fb4[_0x4622c3] = _0x3836a7[_0x4622c3];
      });
    }
    _0x265c6c.explicitUniformBindings = {};
    _0x265c6c.explicitSamplerBindings = {};
    [_0x265c6c.vs, _0x265c6c.fs].forEach(function (_0x2873b2) {
      _0x1e5bcd(_0x265c6c.explicitUniformBindings, _0x2873b2.explicitUniformBindings);
      _0x1e5bcd(_0x265c6c.explicitSamplerBindings, _0x2873b2.explicitSamplerBindings);
    });
    _0x265c6c.explicitProgramBindingsApplied = 0;
  }
  function _0x26bfd7(_0x18e8cf, _0x54e9e1, _0x1759f0, _0x36005d) {
    if (_0x36005d != 26 && _0x36005d != 10) {
      _0x551fc8("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x437d6c(_0x18e8cf)) {
      _0x797e34.recordError(1280);
      _0x551fc8("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x8fe61b = _0x52fe3e(_0x1759f0);
    if (!_0x8fe61b) {
      return 0;
    }
    _0x797e34.mappedBuffers[_0x289cbe(_0x18e8cf)] = {
      offset: _0x54e9e1,
      length: _0x1759f0,
      mem: _0x8fe61b,
      access: _0x36005d
    };
    return _0x8fe61b;
  }
  function _0xe76392(_0x1b242d, _0x4a17d5) {
    if (_0x1b242d == 3317) {
      _0x797e34.unpackAlignment = _0x4a17d5;
    }
    _0x3494f0.pixelStorei(_0x1b242d, _0x4a17d5);
  }
  function _0x1d18f2(_0x2e2788, _0x24e7f1) {
    _0x3494f0.polygonOffset(_0x2e2788, _0x24e7f1);
  }
  function _0x3c6c6c(_0x4b8835, _0xe82a25, _0x645602, _0x34413d) {
    _0x797e34.recordError(1280);
  }
  function _0x57ecd9(_0x3a386e, _0x52bc35, _0x35b60a) {
    _0x797e34.recordError(1280);
  }
  function _0x20e814(_0x4b277a) {
    _0x3494f0.readBuffer(_0x4b277a);
  }
  function _0x1f4b61(_0xda40d4, _0x2a8cb2, _0x4f1fad, _0x599988) {
    function _0x5318fe(_0x45d332, _0x2c5cb1) {
      return _0x45d332 + _0x2c5cb1 - 1 & -_0x2c5cb1;
    }
    var _0x44d709 = _0xda40d4 * _0x4f1fad;
    var _0x4d3606 = _0x5318fe(_0x44d709, _0x599988);
    return _0x2a8cb2 * _0x4d3606;
  }
  function _0x5d3b48(_0x18b3ec) {
    var _0x307487 = {
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
    return _0x307487[_0x18b3ec - 6402] || 1;
  }
  function _0x252628(_0x48c2b4) {
    _0x48c2b4 -= 5120;
    if (_0x48c2b4 == 0) {
      return _0x133579;
    }
    if (_0x48c2b4 == 1) {
      return _0xb76fd2;
    }
    if (_0x48c2b4 == 2) {
      return _0xefd34;
    }
    if (_0x48c2b4 == 4) {
      return _0x14d31c;
    }
    if (_0x48c2b4 == 6) {
      return _0x29a541;
    }
    if (_0x48c2b4 == 5 || _0x48c2b4 == 28922 || _0x48c2b4 == 28520 || _0x48c2b4 == 30779 || _0x48c2b4 == 30782) {
      return _0x5305b0;
    }
    return _0x353b5e;
  }
  function _0x305dfc(_0x45a10d) {
    return 31 - Math.clz32(_0x45a10d.BYTES_PER_ELEMENT);
  }
  function _0x1d1beb(_0x3d2d4a, _0x37d72a, _0x4fc8d5, _0x37bb0e, _0x11b105, _0x5530e2) {
    var _0x3f27c9 = _0x252628(_0x3d2d4a);
    var _0x10988f = _0x305dfc(_0x3f27c9);
    var _0xa49b6b = 1 << _0x10988f;
    var _0x52b1be = _0x5d3b48(_0x37d72a) * _0xa49b6b;
    var _0x4b7a21 = _0x1f4b61(_0x4fc8d5, _0x37bb0e, _0x52b1be, _0x797e34.unpackAlignment);
    return _0x3f27c9.subarray(_0x11b105 >> _0x10988f, _0x11b105 + _0x4b7a21 >> _0x10988f);
  }
  function _0x97201e(_0x1b2510, _0x137714, _0x2cf7e2, _0xf9b6e4, _0x4dc66f, _0x18501a, _0x3d8d1e) {
    if (_0x797e34.currentContext.version >= 2) {
      if (_0x3494f0.currentPixelPackBufferBinding) {
        _0x3494f0.readPixels(_0x1b2510, _0x137714, _0x2cf7e2, _0xf9b6e4, _0x4dc66f, _0x18501a, _0x3d8d1e);
      } else {
        var _0x151258 = _0x252628(_0x18501a);
        _0x3494f0.readPixels(_0x1b2510, _0x137714, _0x2cf7e2, _0xf9b6e4, _0x4dc66f, _0x18501a, _0x151258, _0x3d8d1e >> _0x305dfc(_0x151258));
      }
      return;
    }
    var _0xbab815 = _0x1d1beb(_0x18501a, _0x4dc66f, _0x2cf7e2, _0xf9b6e4, _0x3d8d1e, _0x4dc66f);
    if (!_0xbab815) {
      _0x797e34.recordError(1280);
      return;
    }
    _0x3494f0.readPixels(_0x1b2510, _0x137714, _0x2cf7e2, _0xf9b6e4, _0x4dc66f, _0x18501a, _0xbab815);
  }
  function _0x2b18a7(_0xb23b8f, _0x455eb5, _0xd3fb83, _0x555018) {
    _0x3494f0.renderbufferStorage(_0xb23b8f, _0x455eb5, _0xd3fb83, _0x555018);
  }
  function _0x5425b3(_0x32d0f2, _0x4644d4, _0x37f6e9, _0x9f6b23, _0x110716) {
    _0x3494f0.renderbufferStorageMultisample(_0x32d0f2, _0x4644d4, _0x37f6e9, _0x9f6b23, _0x110716);
  }
  function _0x2de7ac(_0x44e1a1, _0x36fb1f, _0xfbd4a0) {
    _0x3494f0.samplerParameteri(_0x797e34.samplers[_0x44e1a1], _0x36fb1f, _0xfbd4a0);
  }
  function _0x11ad6a(_0x400c4d, _0x3dcf8f, _0x4421cd, _0x1891b4) {
    _0x3494f0.scissor(_0x400c4d, _0x3dcf8f, _0x4421cd, _0x1891b4);
  }
  function _0x41018e(_0x3a27e0, _0xa80245, _0x58aa3b = "(", _0x1aa9ba = ")") {
    var _0x3490ea = 0;
    for (; _0xa80245 < _0x3a27e0.length; ++_0xa80245) {
      if (_0x3a27e0[_0xa80245] == _0x58aa3b) {
        ++_0x3490ea;
      }
      if (_0x3a27e0[_0xa80245] == _0x1aa9ba && --_0x3490ea == 0) {
        return _0xa80245;
      }
    }
  }
  function _0x29fb66(_0x4a41d7) {
    var _0x313a83 = 0;
    var _0x4ef6cc = _0x4a41d7.length;
    var _0x168151 = "";
    var _0x4c6a2c = [1];
    var _0x50c9f8 = {
      defined: function (_0x34a967) {
        if (_0x50c9f8[_0x34a967[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x1ae0f4(_0x12243a, _0x2a0a8b) {
      return !(_0x12243a.charCodeAt(_0x2a0a8b) > 32);
    }
    function _0x1c5430(_0xb34ace, _0x1a761d) {
      while (!_0x1ae0f4(_0xb34ace, _0x1a761d)) {
        ++_0x1a761d;
      }
      return _0x1a761d;
    }
    function _0x45fc86(_0x2f0655, _0xe34139) {
      var _0x4df056 = _0x2f0655.charCodeAt(_0xe34139);
      if (_0x4df056 > 32) {
        if (_0x4df056 < 48) {
          return 1;
        }
        if (_0x4df056 < 58) {
          return 2;
        }
        if (_0x4df056 < 65) {
          return 1;
        }
        if (_0x4df056 < 91 || _0x4df056 == 95) {
          return 3;
        }
        if (_0x4df056 < 97) {
          return 1;
        }
        if (_0x4df056 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x4df056 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x50b09e(_0x4f2c3e, _0x43481c) {
      var _0x461e97 = [];
      var _0x45d973 = _0x4f2c3e.length;
      for (var _0x5654dc = 0; _0x5654dc <= _0x45d973; ++_0x5654dc) {
        var _0x4e6442 = _0x45fc86(_0x4f2c3e, _0x5654dc);
        if (_0x4e6442 == 2 || _0x4e6442 == 3) {
          for (var _0x13ca94 = _0x5654dc + 1; _0x13ca94 <= _0x45d973; ++_0x13ca94) {
            var _0x4b982c = _0x45fc86(_0x4f2c3e, _0x13ca94);
            if (_0x4b982c != _0x4e6442 && (_0x4b982c != 2 || _0x4e6442 != 3)) {
              _0x461e97.push(_0x4f2c3e.substring(_0x5654dc, _0x13ca94));
              _0x5654dc = _0x13ca94 - 1;
              break;
            }
          }
        } else if (_0x4e6442 == 1) {
          var _0x1a44d9 = _0x4f2c3e.substr(_0x5654dc, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x1a44d9)) {
            _0x461e97.push(_0x1a44d9);
            ++_0x5654dc;
          } else {
            _0x461e97.push(_0x4f2c3e[_0x5654dc]);
          }
        }
      }
      return _0x461e97;
    }
    function _0x483825(_0x2b1403, _0x454151, _0x505ef3 = _0x2b1403.length) {
      var _0x74208c = _0x2b1403.length;
      var _0xc8b40e = "";
      for (var _0x26813b = _0x454151; _0x26813b < _0x505ef3; ++_0x26813b) {
        var _0x515277 = _0x45fc86(_0x2b1403, _0x26813b);
        if (_0x515277 == 3) {
          for (var _0x506cee = _0x26813b + 1; _0x506cee <= _0x505ef3; ++_0x506cee) {
            var _0x5cb4aa = _0x45fc86(_0x2b1403, _0x506cee);
            if (_0x5cb4aa != 2 && _0x5cb4aa != 3) {
              var _0x35809f = _0x2b1403.substring(_0x26813b, _0x506cee);
              var _0x20e8c1 = _0x50c9f8[_0x35809f];
              if (_0x20e8c1) {
                var _0x3b9805 = _0x2b1403.substring(_0x454151, _0x26813b);
                if (_0x20e8c1.length && _0x2b1403[_0x506cee] == "(") {
                  var _0x5a00d2 = _0x41018e(_0x2b1403, _0x506cee);
                  _0x3b9805 += _0x20e8c1(_0x2b1403.substring(_0x506cee + 1, _0x5a00d2).split(",")) + _0x2b1403.substring(_0x5a00d2 + 1, _0x505ef3);
                } else {
                  _0x3b9805 += _0x20e8c1() + _0x2b1403.substring(_0x506cee, _0x505ef3);
                }
                return _0x483825(_0x3b9805, 0);
              } else {
                _0xc8b40e += _0x35809f;
                _0x26813b = _0x506cee - 1;
                break;
              }
            }
          }
        } else {
          _0xc8b40e += _0x2b1403[_0x26813b];
        }
      }
      return _0xc8b40e;
    }
    function _0x43a09d(_0xf9f954) {
      while (_0xf9f954.length > 1 || typeof _0xf9f954[0] != "function") {
        _0xf9f954 = function (_0x21742b) {
          var _0x43a5c2;
          var _0x18eb3d;
          var _0x1fcb37;
          var _0x5f13f2 = -2;
          for (_0x18eb3d = 0; _0x18eb3d < _0x21742b.length; ++_0x18eb3d) {
            if ((_0x1fcb37 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x21742b[_0x18eb3d])) > _0x5f13f2) {
              _0x43a5c2 = _0x18eb3d;
              _0x5f13f2 = _0x1fcb37;
            }
          }
          if (_0x5f13f2 == 13) {
            var _0x18eb3d = _0x41018e(_0x21742b, _0x43a5c2);
            if (_0x18eb3d) {
              _0x21742b.splice(_0x43a5c2, _0x18eb3d + 1 - _0x43a5c2, _0x43a09d(_0x21742b.slice(_0x43a5c2 + 1, _0x18eb3d)));
              return _0x21742b;
            }
          }
          if (_0x5f13f2 == 4) {
            _0x43a5c2 = _0x21742b.lastIndexOf("!");
            var _0x5704f0 = _0x43a09d(_0x21742b.slice(_0x43a5c2 + 1, _0x43a5c2 + 2));
            _0x21742b.splice(_0x43a5c2, 2, function () {
              return !_0x5704f0();
            });
            return _0x21742b;
          }
          if (_0x5f13f2 >= 0) {
            var _0x3df426 = _0x43a09d(_0x21742b.slice(0, _0x43a5c2));
            var _0x16fe54 = _0x43a09d(_0x21742b.slice(_0x43a5c2 + 1));
            switch (_0x21742b[_0x43a5c2]) {
              case "&&":
                return [function () {
                  return _0x3df426() && _0x16fe54();
                }];
              case "||":
                return [function () {
                  return _0x3df426() || _0x16fe54();
                }];
              case "==":
                return [function () {
                  return _0x3df426() == _0x16fe54();
                }];
              case "!=":
                return [function () {
                  return _0x3df426() != _0x16fe54();
                }];
              case "<":
                return [function () {
                  return _0x3df426() < _0x16fe54();
                }];
              case "<=":
                return [function () {
                  return _0x3df426() <= _0x16fe54();
                }];
              case ">":
                return [function () {
                  return _0x3df426() > _0x16fe54();
                }];
              case ">=":
                return [function () {
                  return _0x3df426() >= _0x16fe54();
                }];
              case "+":
                return [function () {
                  return _0x3df426() + _0x16fe54();
                }];
              case "-":
                return [function () {
                  return _0x3df426() - _0x16fe54();
                }];
              case "*":
                return [function () {
                  return _0x3df426() * _0x16fe54();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x3df426() / _0x16fe54());
                }];
            }
          }
          var _0x3f7ad9 = _0x26e49b(_0x21742b[_0x43a5c2]);
          return [function () {
            return _0x3f7ad9;
          }];
        }(_0xf9f954);
      }
      return _0xf9f954[0];
    }
    for (; _0x313a83 < _0x4ef6cc; ++_0x313a83) {
      var _0x234a02 = _0x313a83;
      _0x313a83 = _0x4a41d7.indexOf("\n", _0x313a83);
      if (_0x313a83 < 0) {
        _0x313a83 = _0x4ef6cc;
      }
      for (var _0x34e956 = _0x234a02; _0x34e956 < _0x313a83 && _0x1ae0f4(_0x4a41d7, _0x34e956); ++_0x34e956);
      var _0x178449 = _0x4c6a2c[_0x4c6a2c.length - 1];
      if (_0x4a41d7[_0x34e956] != "#") {
        if (_0x178449) {
          _0x168151 += _0x483825(_0x4a41d7, _0x234a02, _0x313a83) + "\n";
        }
        continue;
      }
      var _0xb603e8 = _0x1c5430(_0x4a41d7, _0x34e956);
      var _0x85d0c5 = _0x4a41d7.substring(_0x34e956 + 1, _0xb603e8);
      var _0x3f881d = _0x4a41d7.substring(_0xb603e8, _0x313a83).trim();
      switch (_0x85d0c5) {
        case "if":
          var _0x57d73a = _0x50b09e(_0x483825(_0x3f881d, 0));
          var _0x4df19f = _0x43a09d(_0x57d73a);
          var _0x3637bb = _0x4df19f();
          _0x4c6a2c.push(!!_0x3637bb * _0x4c6a2c[_0x4c6a2c.length - 1]);
          break;
        case "ifdef":
          _0x4c6a2c.push(!!_0x50c9f8[_0x3f881d] * _0x4c6a2c[_0x4c6a2c.length - 1]);
          break;
        case "ifndef":
          _0x4c6a2c.push(!_0x50c9f8[_0x3f881d] * _0x4c6a2c[_0x4c6a2c.length - 1]);
          break;
        case "else":
          _0x4c6a2c[_0x4c6a2c.length - 1] = 1 - _0x4c6a2c[_0x4c6a2c.length - 1];
          break;
        case "endif":
          _0x4c6a2c.pop();
          break;
        case "define":
          if (_0x178449) {
            var _0x39fb1e = _0x3f881d.indexOf("(");
            var _0x1ae8e0 = _0x1c5430(_0x3f881d, 0);
            if (_0x1ae8e0 < _0x39fb1e) {
              _0x39fb1e = 0;
            }
            if (_0x39fb1e > 0) {
              var _0x29b55c = _0x3f881d.indexOf(")", _0x39fb1e);
              let _0x2f82a2 = _0x3f881d.substring(_0x39fb1e + 1, _0x29b55c).split(",").map(_0x149867 => _0x149867.trim());
              let _0x2ce358 = _0x50b09e(_0x3f881d.substring(_0x29b55c + 1).trim());
              _0x50c9f8[_0x3f881d.substring(0, _0x39fb1e)] = function (_0x52942b) {
                var _0x4b1557 = "";
                _0x2ce358.forEach(_0x1528d4 => {
                  var _0x4e5431 = _0x2f82a2.indexOf(_0x1528d4);
                  _0x4b1557 += _0x4e5431 >= 0 ? _0x52942b[_0x4e5431] : _0x1528d4;
                });
                return _0x4b1557;
              };
            } else {
              let _0x1994a1 = _0x483825(_0x3f881d.substring(_0x1ae8e0 + 1).trim(), 0);
              _0x50c9f8[_0x3f881d.substring(0, _0x1ae8e0)] = function () {
                return _0x1994a1;
              };
            }
          }
          break;
        case "undef":
          if (_0x178449) {
            delete _0x50c9f8[_0x3f881d];
          }
          break;
        default:
          if (_0x85d0c5 != "version" && _0x85d0c5 != "pragma" && _0x85d0c5 != "extension") {}
          _0x168151 += _0x483825(_0x4a41d7, _0x234a02, _0x313a83) + "\n";
      }
    }
    return _0x168151;
  }
  function _0xe57024(_0x4cf482) {
    var _0x4f578f = 0;
    var _0x5944a3 = "";
    var _0x27e9fe;
    var _0x205fee;
    var _0x961fc6 = _0x4cf482.length;
    for (; _0x4f578f < _0x961fc6; ++_0x4f578f) {
      _0x27e9fe = _0x4cf482[_0x4f578f];
      if (_0x27e9fe == "/") {
        _0x205fee = _0x4cf482[_0x4f578f + 1];
        if (_0x205fee == "/") {
          while (_0x4f578f < _0x961fc6 && _0x4cf482[_0x4f578f + 1] != "\n") {
            ++_0x4f578f;
          }
        } else if (_0x205fee == "*") {
          while (_0x4f578f < _0x961fc6 && (_0x4cf482[_0x4f578f - 1] != "*" || _0x4cf482[_0x4f578f] != "/")) {
            ++_0x4f578f;
          }
        } else {
          _0x5944a3 += _0x27e9fe;
        }
      } else {
        _0x5944a3 += _0x27e9fe;
      }
    }
    return _0x5944a3;
  }
  function _0x586c8b(_0x56c43a, _0x242e30, _0x1503fc, _0x493d73) {
    var _0x5d0b2a = _0x797e34.getSource(_0x56c43a, _0x242e30, _0x1503fc, _0x493d73);
    _0x5d0b2a = _0x29fb66(_0xe57024(_0x5d0b2a));
    var _0x438587 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0xf6a28a = {};
    var _0x1b5d28;
    while (_0x1b5d28 = _0x438587.exec(_0x5d0b2a)) {
      _0xf6a28a[_0x1b5d28[5]] = _0x26e49b(_0x1b5d28[1]);
      if (!(_0xf6a28a[_0x1b5d28[5]] >= 0) || !(_0xf6a28a[_0x1b5d28[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0xf6a28a[_0x1b5d28[5]] + "\"! (" + _0x1b5d28[0] + ")");
        _0x797e34.recordError(1281);
        return;
      }
    }
    _0x5d0b2a = _0x5d0b2a.replace(_0x438587, "$2");
    _0x797e34.shaders[_0x56c43a].explicitUniformLocations = _0xf6a28a;
    var _0x20f245 = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x3c6cb7 = {};
    var _0x7033ff = {};
    var _0x201cac;
    while (_0x201cac = _0x20f245.exec(_0x5d0b2a)) {
      var _0x262360 = 1;
      for (var _0x324604 = _0x201cac.index; _0x324604 < _0x5d0b2a.length && _0x5d0b2a[_0x324604] != ";"; ++_0x324604) {
        if (_0x5d0b2a[_0x324604] == "[") {
          _0x262360 = _0x26e49b(_0x5d0b2a.slice(_0x324604 + 1));
          break;
        }
        if (_0x5d0b2a[_0x324604] == "{") {
          _0x324604 = _0x41018e(_0x5d0b2a, _0x324604, "{", "}") - 1;
        }
      }
      var _0x13bba9 = _0x26e49b(_0x201cac[1]);
      var _0x126e1d = 34930;
      if (_0x201cac[3] && _0x201cac[2].indexOf("sampler") != -1) {
        _0x3c6cb7[_0x201cac[3]] = [_0x13bba9, _0x262360];
      } else {
        _0x126e1d = 35374;
        _0x7033ff[_0x201cac[2]] = [_0x13bba9, _0x262360];
      }
      var _0x3febec = _0x3494f0.getParameter(_0x126e1d);
      if (!(_0x13bba9 >= 0) || !(_0x13bba9 + _0x262360 <= _0x3febec)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x13bba9 + "\"! (" + _0x201cac[0] + "). Valid range is [0, " + _0x3febec + "-1]");
        _0x797e34.recordError(1281);
        return;
      }
    }
    _0x5d0b2a = _0x5d0b2a.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x5d0b2a = _0x5d0b2a.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x5d0b2a = _0x5d0b2a.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x797e34.shaders[_0x56c43a].explicitSamplerBindings = _0x3c6cb7;
    _0x797e34.shaders[_0x56c43a].explicitUniformBindings = _0x7033ff;
    _0x3494f0.shaderSource(_0x797e34.shaders[_0x56c43a], _0x5d0b2a);
  }
  function _0x4cfe0a(_0x546ce9, _0x4068a0, _0x3f479e, _0x3ae99c) {
    _0x3494f0.stencilFuncSeparate(_0x546ce9, _0x4068a0, _0x3f479e, _0x3ae99c);
  }
  function _0x35beb0(_0x4571f9) {
    _0x3494f0.stencilMask(_0x4571f9);
  }
  function _0x5f4f4b(_0x4f6a01, _0xd2a6b4, _0x41896b, _0x1087a1) {
    _0x3494f0.stencilOpSeparate(_0x4f6a01, _0xd2a6b4, _0x41896b, _0x1087a1);
  }
  function _0x41c3b0(_0xabc277, _0xa1ec4e, _0x53d934, _0x1c3196, _0xb29e18, _0xc1ee18, _0x550aeb, _0x37ebb9, _0x588d8d) {
    if (_0x797e34.currentContext.version >= 2) {
      if (_0x3494f0.currentPixelUnpackBufferBinding) {
        _0x3494f0.texImage2D(_0xabc277, _0xa1ec4e, _0x53d934, _0x1c3196, _0xb29e18, _0xc1ee18, _0x550aeb, _0x37ebb9, _0x588d8d);
      } else if (_0x588d8d) {
        var _0x4e0f47 = _0x252628(_0x37ebb9);
        _0x3494f0.texImage2D(_0xabc277, _0xa1ec4e, _0x53d934, _0x1c3196, _0xb29e18, _0xc1ee18, _0x550aeb, _0x37ebb9, _0x4e0f47, _0x588d8d >> _0x305dfc(_0x4e0f47));
      } else {
        _0x3494f0.texImage2D(_0xabc277, _0xa1ec4e, _0x53d934, _0x1c3196, _0xb29e18, _0xc1ee18, _0x550aeb, _0x37ebb9, null);
      }
      return;
    }
    _0x3494f0.texImage2D(_0xabc277, _0xa1ec4e, _0x53d934, _0x1c3196, _0xb29e18, _0xc1ee18, _0x550aeb, _0x37ebb9, _0x588d8d ? _0x1d1beb(_0x37ebb9, _0x550aeb, _0x1c3196, _0xb29e18, _0x588d8d, _0x53d934) : null);
  }
  function _0x50d053(_0x53a749, _0x742816, _0x16e69b, _0xd39a9a, _0x47c2e7, _0xff6697, _0x22156c, _0x2e4656, _0x3098cc, _0x18b432) {
    if (_0x3494f0.currentPixelUnpackBufferBinding) {
      _0x3494f0.texImage3D(_0x53a749, _0x742816, _0x16e69b, _0xd39a9a, _0x47c2e7, _0xff6697, _0x22156c, _0x2e4656, _0x3098cc, _0x18b432);
    } else if (_0x18b432) {
      var _0x14f89e = _0x252628(_0x3098cc);
      _0x3494f0.texImage3D(_0x53a749, _0x742816, _0x16e69b, _0xd39a9a, _0x47c2e7, _0xff6697, _0x22156c, _0x2e4656, _0x3098cc, _0x14f89e, _0x18b432 >> _0x305dfc(_0x14f89e));
    } else {
      _0x3494f0.texImage3D(_0x53a749, _0x742816, _0x16e69b, _0xd39a9a, _0x47c2e7, _0xff6697, _0x22156c, _0x2e4656, _0x3098cc, null);
    }
  }
  function _0xf4b506(_0x3a7c5b, _0x1d5cec, _0xbbc6f0) {
    _0x3494f0.texParameterf(_0x3a7c5b, _0x1d5cec, _0xbbc6f0);
  }
  function _0x492925(_0x1fd0b8, _0x59a344, _0x3c36cf) {
    _0x3494f0.texParameteri(_0x1fd0b8, _0x59a344, _0x3c36cf);
  }
  function _0x20ecd6(_0x84ba64, _0x3065d1, _0x45df35) {
    var _0x43db7d = _0x14d31c[_0x45df35 >> 2];
    _0x3494f0.texParameteri(_0x84ba64, _0x3065d1, _0x43db7d);
  }
  function _0x4fafdf(_0x59046b, _0x18cbea, _0x29285a, _0x25bd24, _0x3a4602) {
    _0x3494f0.texStorage2D(_0x59046b, _0x18cbea, _0x29285a, _0x25bd24, _0x3a4602);
  }
  function _0x43dc0e(_0x40c59e, _0x1c741a, _0x210409, _0x4b4240, _0x28389f, _0x310729) {
    _0x3494f0.texStorage3D(_0x40c59e, _0x1c741a, _0x210409, _0x4b4240, _0x28389f, _0x310729);
  }
  function _0x7ee04b(_0x52371e, _0x526716, _0x3760e2, _0x50d8c3, _0x3b25c9, _0x39eb46, _0x50d5f2, _0x44f1f3, _0x45335e) {
    if (_0x797e34.currentContext.version >= 2) {
      if (_0x3494f0.currentPixelUnpackBufferBinding) {
        _0x3494f0.texSubImage2D(_0x52371e, _0x526716, _0x3760e2, _0x50d8c3, _0x3b25c9, _0x39eb46, _0x50d5f2, _0x44f1f3, _0x45335e);
      } else if (_0x45335e) {
        var _0x4de755 = _0x252628(_0x44f1f3);
        _0x3494f0.texSubImage2D(_0x52371e, _0x526716, _0x3760e2, _0x50d8c3, _0x3b25c9, _0x39eb46, _0x50d5f2, _0x44f1f3, _0x4de755, _0x45335e >> _0x305dfc(_0x4de755));
      } else {
        _0x3494f0.texSubImage2D(_0x52371e, _0x526716, _0x3760e2, _0x50d8c3, _0x3b25c9, _0x39eb46, _0x50d5f2, _0x44f1f3, null);
      }
      return;
    }
    var _0x520361 = null;
    if (_0x45335e) {
      _0x520361 = _0x1d1beb(_0x44f1f3, _0x50d5f2, _0x3b25c9, _0x39eb46, _0x45335e, 0);
    }
    _0x3494f0.texSubImage2D(_0x52371e, _0x526716, _0x3760e2, _0x50d8c3, _0x3b25c9, _0x39eb46, _0x50d5f2, _0x44f1f3, _0x520361);
  }
  function _0x4c3e3c(_0x2768b1, _0x71b43e, _0xfec4e4, _0x24dcfd, _0x27f988, _0xa1e235, _0x30ffab, _0x7967ce, _0x36e8fe, _0x3de7e6, _0x1684de) {
    if (_0x3494f0.currentPixelUnpackBufferBinding) {
      _0x3494f0.texSubImage3D(_0x2768b1, _0x71b43e, _0xfec4e4, _0x24dcfd, _0x27f988, _0xa1e235, _0x30ffab, _0x7967ce, _0x36e8fe, _0x3de7e6, _0x1684de);
    } else if (_0x1684de) {
      var _0x541e09 = _0x252628(_0x3de7e6);
      _0x3494f0.texSubImage3D(_0x2768b1, _0x71b43e, _0xfec4e4, _0x24dcfd, _0x27f988, _0xa1e235, _0x30ffab, _0x7967ce, _0x36e8fe, _0x3de7e6, _0x541e09, _0x1684de >> _0x305dfc(_0x541e09));
    } else {
      _0x3494f0.texSubImage3D(_0x2768b1, _0x71b43e, _0xfec4e4, _0x24dcfd, _0x27f988, _0xa1e235, _0x30ffab, _0x7967ce, _0x36e8fe, _0x3de7e6, null);
    }
  }
  function _0x41af89(_0x1b0fff, _0x3727ad, _0x5ead17, _0x1c7742) {
    _0x1b0fff = _0x797e34.programs[_0x1b0fff];
    var _0x2e9adb = [];
    for (var _0x74eb11 = 0; _0x74eb11 < _0x3727ad; _0x74eb11++) {
      _0x2e9adb.push(_0x21e34e(_0x14d31c[_0x5ead17 + _0x74eb11 * 4 >> 2]));
    }
    _0x3494f0.transformFeedbackVaryings(_0x1b0fff, _0x2e9adb, _0x1c7742);
  }
  var _0x58c7c1 = [];
  function _0x4b96c3(_0x16faec, _0x2cde8d, _0x1fbc9c) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform1fv(_0x2eff6f(_0x16faec), _0x29a541, _0x1fbc9c >> 2, _0x2cde8d);
      return;
    }
    if (_0x2cde8d <= 288) {
      var _0x1b999e = _0x58c7c1[_0x2cde8d - 1];
      for (var _0x11a4a3 = 0; _0x11a4a3 < _0x2cde8d; ++_0x11a4a3) {
        _0x1b999e[_0x11a4a3] = _0x29a541[_0x1fbc9c + _0x11a4a3 * 4 >> 2];
      }
    } else {
      var _0x1b999e = _0x29a541.subarray(_0x1fbc9c >> 2, _0x1fbc9c + _0x2cde8d * 4 >> 2);
    }
    _0x3494f0.uniform1fv(_0x2eff6f(_0x16faec), _0x1b999e);
  }
  function _0x16f220(_0x405b3e, _0x29b6e0) {
    _0x3494f0.uniform1i(_0x2eff6f(_0x405b3e), _0x29b6e0);
  }
  var _0x496313 = [];
  function _0x467ef3(_0x3ce3f3, _0x473ff4, _0x30b551) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform1iv(_0x2eff6f(_0x3ce3f3), _0x14d31c, _0x30b551 >> 2, _0x473ff4);
      return;
    }
    if (_0x473ff4 <= 288) {
      var _0x3b520b = _0x496313[_0x473ff4 - 1];
      for (var _0x5b0e4d = 0; _0x5b0e4d < _0x473ff4; ++_0x5b0e4d) {
        _0x3b520b[_0x5b0e4d] = _0x14d31c[_0x30b551 + _0x5b0e4d * 4 >> 2];
      }
    } else {
      var _0x3b520b = _0x14d31c.subarray(_0x30b551 >> 2, _0x30b551 + _0x473ff4 * 4 >> 2);
    }
    _0x3494f0.uniform1iv(_0x2eff6f(_0x3ce3f3), _0x3b520b);
  }
  function _0xe863fb(_0x320bc0, _0x4ba890, _0x11ad6d) {
    _0x3494f0.uniform1uiv(_0x2eff6f(_0x320bc0), _0x5305b0, _0x11ad6d >> 2, _0x4ba890);
  }
  function _0x4de82e(_0x439982, _0x396e76, _0x4c3b10) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform2fv(_0x2eff6f(_0x439982), _0x29a541, _0x4c3b10 >> 2, _0x396e76 * 2);
      return;
    }
    if (_0x396e76 <= 144) {
      var _0x2d9ea9 = _0x58c7c1[_0x396e76 * 2 - 1];
      for (var _0x5d205f = 0; _0x5d205f < _0x396e76 * 2; _0x5d205f += 2) {
        _0x2d9ea9[_0x5d205f] = _0x29a541[_0x4c3b10 + _0x5d205f * 4 >> 2];
        _0x2d9ea9[_0x5d205f + 1] = _0x29a541[_0x4c3b10 + (_0x5d205f * 4 + 4) >> 2];
      }
    } else {
      var _0x2d9ea9 = _0x29a541.subarray(_0x4c3b10 >> 2, _0x4c3b10 + _0x396e76 * 8 >> 2);
    }
    _0x3494f0.uniform2fv(_0x2eff6f(_0x439982), _0x2d9ea9);
  }
  function _0x15c75a(_0xebdca1, _0x20d8d7, _0x34a626) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform2iv(_0x2eff6f(_0xebdca1), _0x14d31c, _0x34a626 >> 2, _0x20d8d7 * 2);
      return;
    }
    if (_0x20d8d7 <= 144) {
      var _0x2f0d00 = _0x496313[_0x20d8d7 * 2 - 1];
      for (var _0xcf4b1d = 0; _0xcf4b1d < _0x20d8d7 * 2; _0xcf4b1d += 2) {
        _0x2f0d00[_0xcf4b1d] = _0x14d31c[_0x34a626 + _0xcf4b1d * 4 >> 2];
        _0x2f0d00[_0xcf4b1d + 1] = _0x14d31c[_0x34a626 + (_0xcf4b1d * 4 + 4) >> 2];
      }
    } else {
      var _0x2f0d00 = _0x14d31c.subarray(_0x34a626 >> 2, _0x34a626 + _0x20d8d7 * 8 >> 2);
    }
    _0x3494f0.uniform2iv(_0x2eff6f(_0xebdca1), _0x2f0d00);
  }
  function _0x4c47f6(_0x11a195, _0x599b5f, _0x43b8a8) {
    _0x3494f0.uniform2uiv(_0x2eff6f(_0x11a195), _0x5305b0, _0x43b8a8 >> 2, _0x599b5f * 2);
  }
  function _0x1f4895(_0xfb229f, _0x1bf6c9, _0x34822f) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform3fv(_0x2eff6f(_0xfb229f), _0x29a541, _0x34822f >> 2, _0x1bf6c9 * 3);
      return;
    }
    if (_0x1bf6c9 <= 96) {
      var _0x265b79 = _0x58c7c1[_0x1bf6c9 * 3 - 1];
      for (var _0x46e09e = 0; _0x46e09e < _0x1bf6c9 * 3; _0x46e09e += 3) {
        _0x265b79[_0x46e09e] = _0x29a541[_0x34822f + _0x46e09e * 4 >> 2];
        _0x265b79[_0x46e09e + 1] = _0x29a541[_0x34822f + (_0x46e09e * 4 + 4) >> 2];
        _0x265b79[_0x46e09e + 2] = _0x29a541[_0x34822f + (_0x46e09e * 4 + 8) >> 2];
      }
    } else {
      var _0x265b79 = _0x29a541.subarray(_0x34822f >> 2, _0x34822f + _0x1bf6c9 * 12 >> 2);
    }
    _0x3494f0.uniform3fv(_0x2eff6f(_0xfb229f), _0x265b79);
  }
  function _0x48d068(_0x5df1d3, _0x571d91, _0x201552) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform3iv(_0x2eff6f(_0x5df1d3), _0x14d31c, _0x201552 >> 2, _0x571d91 * 3);
      return;
    }
    if (_0x571d91 <= 96) {
      var _0xed0711 = _0x496313[_0x571d91 * 3 - 1];
      for (var _0x57c468 = 0; _0x57c468 < _0x571d91 * 3; _0x57c468 += 3) {
        _0xed0711[_0x57c468] = _0x14d31c[_0x201552 + _0x57c468 * 4 >> 2];
        _0xed0711[_0x57c468 + 1] = _0x14d31c[_0x201552 + (_0x57c468 * 4 + 4) >> 2];
        _0xed0711[_0x57c468 + 2] = _0x14d31c[_0x201552 + (_0x57c468 * 4 + 8) >> 2];
      }
    } else {
      var _0xed0711 = _0x14d31c.subarray(_0x201552 >> 2, _0x201552 + _0x571d91 * 12 >> 2);
    }
    _0x3494f0.uniform3iv(_0x2eff6f(_0x5df1d3), _0xed0711);
  }
  function _0x95fcc7(_0x2a0fe0, _0x4eec86, _0x3519b8) {
    _0x3494f0.uniform3uiv(_0x2eff6f(_0x2a0fe0), _0x5305b0, _0x3519b8 >> 2, _0x4eec86 * 3);
  }
  function _0x480989(_0x49bbbf, _0x3e8a82, _0x42cf0b) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform4fv(_0x2eff6f(_0x49bbbf), _0x29a541, _0x42cf0b >> 2, _0x3e8a82 * 4);
      return;
    }
    if (_0x3e8a82 <= 72) {
      var _0x109f38 = _0x58c7c1[_0x3e8a82 * 4 - 1];
      var _0x235a4f = _0x29a541;
      _0x42cf0b >>= 2;
      for (var _0x141241 = 0; _0x141241 < _0x3e8a82 * 4; _0x141241 += 4) {
        var _0x5380a2 = _0x42cf0b + _0x141241;
        _0x109f38[_0x141241] = _0x235a4f[_0x5380a2];
        _0x109f38[_0x141241 + 1] = _0x235a4f[_0x5380a2 + 1];
        _0x109f38[_0x141241 + 2] = _0x235a4f[_0x5380a2 + 2];
        _0x109f38[_0x141241 + 3] = _0x235a4f[_0x5380a2 + 3];
      }
    } else {
      var _0x109f38 = _0x29a541.subarray(_0x42cf0b >> 2, _0x42cf0b + _0x3e8a82 * 16 >> 2);
    }
    _0x3494f0.uniform4fv(_0x2eff6f(_0x49bbbf), _0x109f38);
  }
  function _0x54c504(_0x51731b, _0xbe85a9, _0x427001) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniform4iv(_0x2eff6f(_0x51731b), _0x14d31c, _0x427001 >> 2, _0xbe85a9 * 4);
      return;
    }
    if (_0xbe85a9 <= 72) {
      var _0x450f1d = _0x496313[_0xbe85a9 * 4 - 1];
      for (var _0x3944d4 = 0; _0x3944d4 < _0xbe85a9 * 4; _0x3944d4 += 4) {
        _0x450f1d[_0x3944d4] = _0x14d31c[_0x427001 + _0x3944d4 * 4 >> 2];
        _0x450f1d[_0x3944d4 + 1] = _0x14d31c[_0x427001 + (_0x3944d4 * 4 + 4) >> 2];
        _0x450f1d[_0x3944d4 + 2] = _0x14d31c[_0x427001 + (_0x3944d4 * 4 + 8) >> 2];
        _0x450f1d[_0x3944d4 + 3] = _0x14d31c[_0x427001 + (_0x3944d4 * 4 + 12) >> 2];
      }
    } else {
      var _0x450f1d = _0x14d31c.subarray(_0x427001 >> 2, _0x427001 + _0xbe85a9 * 16 >> 2);
    }
    _0x3494f0.uniform4iv(_0x2eff6f(_0x51731b), _0x450f1d);
  }
  function _0x418542(_0x3e495a, _0x5444a2, _0x331467) {
    _0x3494f0.uniform4uiv(_0x2eff6f(_0x3e495a), _0x5305b0, _0x331467 >> 2, _0x5444a2 * 4);
  }
  function _0x56ad3e(_0x3adde8, _0x5efcbb, _0x1155a5) {
    _0x3adde8 = _0x797e34.programs[_0x3adde8];
    _0x3494f0.uniformBlockBinding(_0x3adde8, _0x5efcbb, _0x1155a5);
  }
  function _0x409988(_0x40314d, _0x3fc8d3, _0x3608e5, _0x280fb5) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniformMatrix3fv(_0x2eff6f(_0x40314d), !!_0x3608e5, _0x29a541, _0x280fb5 >> 2, _0x3fc8d3 * 9);
      return;
    }
    if (_0x3fc8d3 <= 32) {
      var _0x1ce15b = _0x58c7c1[_0x3fc8d3 * 9 - 1];
      for (var _0x2ac22d = 0; _0x2ac22d < _0x3fc8d3 * 9; _0x2ac22d += 9) {
        _0x1ce15b[_0x2ac22d] = _0x29a541[_0x280fb5 + _0x2ac22d * 4 >> 2];
        _0x1ce15b[_0x2ac22d + 1] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 4) >> 2];
        _0x1ce15b[_0x2ac22d + 2] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 8) >> 2];
        _0x1ce15b[_0x2ac22d + 3] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 12) >> 2];
        _0x1ce15b[_0x2ac22d + 4] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 16) >> 2];
        _0x1ce15b[_0x2ac22d + 5] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 20) >> 2];
        _0x1ce15b[_0x2ac22d + 6] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 24) >> 2];
        _0x1ce15b[_0x2ac22d + 7] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 28) >> 2];
        _0x1ce15b[_0x2ac22d + 8] = _0x29a541[_0x280fb5 + (_0x2ac22d * 4 + 32) >> 2];
      }
    } else {
      var _0x1ce15b = _0x29a541.subarray(_0x280fb5 >> 2, _0x280fb5 + _0x3fc8d3 * 36 >> 2);
    }
    _0x3494f0.uniformMatrix3fv(_0x2eff6f(_0x40314d), !!_0x3608e5, _0x1ce15b);
  }
  function _0x5dde24(_0x47f3d0, _0x242ee7, _0x1f197f, _0x5117a2) {
    if (_0x797e34.currentContext.version >= 2) {
      _0x3494f0.uniformMatrix4fv(_0x2eff6f(_0x47f3d0), !!_0x1f197f, _0x29a541, _0x5117a2 >> 2, _0x242ee7 * 16);
      return;
    }
    if (_0x242ee7 <= 18) {
      var _0xe46f0e = _0x58c7c1[_0x242ee7 * 16 - 1];
      var _0x2fecf4 = _0x29a541;
      _0x5117a2 >>= 2;
      for (var _0x25efd4 = 0; _0x25efd4 < _0x242ee7 * 16; _0x25efd4 += 16) {
        var _0x355a64 = _0x5117a2 + _0x25efd4;
        _0xe46f0e[_0x25efd4] = _0x2fecf4[_0x355a64];
        _0xe46f0e[_0x25efd4 + 1] = _0x2fecf4[_0x355a64 + 1];
        _0xe46f0e[_0x25efd4 + 2] = _0x2fecf4[_0x355a64 + 2];
        _0xe46f0e[_0x25efd4 + 3] = _0x2fecf4[_0x355a64 + 3];
        _0xe46f0e[_0x25efd4 + 4] = _0x2fecf4[_0x355a64 + 4];
        _0xe46f0e[_0x25efd4 + 5] = _0x2fecf4[_0x355a64 + 5];
        _0xe46f0e[_0x25efd4 + 6] = _0x2fecf4[_0x355a64 + 6];
        _0xe46f0e[_0x25efd4 + 7] = _0x2fecf4[_0x355a64 + 7];
        _0xe46f0e[_0x25efd4 + 8] = _0x2fecf4[_0x355a64 + 8];
        _0xe46f0e[_0x25efd4 + 9] = _0x2fecf4[_0x355a64 + 9];
        _0xe46f0e[_0x25efd4 + 10] = _0x2fecf4[_0x355a64 + 10];
        _0xe46f0e[_0x25efd4 + 11] = _0x2fecf4[_0x355a64 + 11];
        _0xe46f0e[_0x25efd4 + 12] = _0x2fecf4[_0x355a64 + 12];
        _0xe46f0e[_0x25efd4 + 13] = _0x2fecf4[_0x355a64 + 13];
        _0xe46f0e[_0x25efd4 + 14] = _0x2fecf4[_0x355a64 + 14];
        _0xe46f0e[_0x25efd4 + 15] = _0x2fecf4[_0x355a64 + 15];
      }
    } else {
      var _0xe46f0e = _0x29a541.subarray(_0x5117a2 >> 2, _0x5117a2 + _0x242ee7 * 64 >> 2);
    }
    _0x3494f0.uniformMatrix4fv(_0x2eff6f(_0x47f3d0), !!_0x1f197f, _0xe46f0e);
  }
  function _0x46e862(_0x33a9ac) {
    if (!_0x437d6c(_0x33a9ac)) {
      _0x797e34.recordError(1280);
      _0x551fc8("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x9f319a = _0x289cbe(_0x33a9ac);
    var _0x1cccbc = _0x797e34.mappedBuffers[_0x9f319a];
    if (!_0x1cccbc) {
      _0x797e34.recordError(1282);
      _0x551fc8("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x797e34.mappedBuffers[_0x9f319a] = null;
    if (!(_0x1cccbc.access & 16)) {
      if (_0x797e34.currentContext.version >= 2) {
        _0x3494f0.bufferSubData(_0x33a9ac, _0x1cccbc.offset, _0xb76fd2, _0x1cccbc.mem, _0x1cccbc.length);
      } else {
        _0x3494f0.bufferSubData(_0x33a9ac, _0x1cccbc.offset, _0xb76fd2.subarray(_0x1cccbc.mem, _0x1cccbc.mem + _0x1cccbc.length));
      }
    }
    _0x289376(_0x1cccbc.mem);
    return 1;
  }
  function _0x1f109f() {
    var _0x201249 = _0x3494f0.currentProgram;
    if (!_0x201249.explicitProgramBindingsApplied) {
      if (_0x797e34.currentContext.version >= 2) {
        Object.keys(_0x201249.explicitUniformBindings).forEach(function (_0x3b4d22) {
          var _0x321271 = _0x201249.explicitUniformBindings[_0x3b4d22];
          for (var _0x4ec467 = 0; _0x4ec467 < _0x321271[1]; ++_0x4ec467) {
            var _0x375a0e = _0x3494f0.getUniformBlockIndex(_0x201249, _0x3b4d22 + (_0x321271[1] > 1 ? "[" + _0x4ec467 + "]" : ""));
            _0x3494f0.uniformBlockBinding(_0x201249, _0x375a0e, _0x321271[0] + _0x4ec467);
          }
        });
      }
      Object.keys(_0x201249.explicitSamplerBindings).forEach(function (_0xd67a98) {
        var _0x2f0045 = _0x201249.explicitSamplerBindings[_0xd67a98];
        for (var _0x12a316 = 0; _0x12a316 < _0x2f0045[1]; ++_0x12a316) {
          _0x3494f0.uniform1i(_0x3494f0.getUniformLocation(_0x201249, _0xd67a98 + (_0x12a316 ? "[" + _0x12a316 + "]" : "")), _0x2f0045[0] + _0x12a316);
        }
      });
      _0x201249.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x3668b8(_0x313849) {
    _0x313849 = _0x797e34.programs[_0x313849];
    _0x3494f0.useProgram(_0x313849);
    if (_0x3494f0.currentProgram = _0x313849) {
      _0x1f109f();
    }
  }
  function _0x5360cf(_0x2b486d) {
    _0x3494f0.validateProgram(_0x797e34.programs[_0x2b486d]);
  }
  function _0x427d1d(_0x25f172, _0x46025e, _0x3643d5, _0x43affe, _0x3341d6) {
    _0x3494f0.vertexAttrib4f(_0x25f172, _0x46025e, _0x3643d5, _0x43affe, _0x3341d6);
  }
  function _0x249963(_0x2198ea, _0x2f979f) {
    _0x3494f0.vertexAttrib4f(_0x2198ea, _0x29a541[_0x2f979f >> 2], _0x29a541[_0x2f979f + 4 >> 2], _0x29a541[_0x2f979f + 8 >> 2], _0x29a541[_0x2f979f + 12 >> 2]);
  }
  function _0x21d49f(_0x49d4f2, _0x231d18, _0x5cb1a3, _0x2bc815, _0x9a4387) {
    var _0x1c724e = _0x797e34.currentContext.clientBuffers[_0x49d4f2];
    if (!_0x3494f0.currentArrayBufferBinding) {
      _0x1c724e.size = _0x231d18;
      _0x1c724e.type = _0x5cb1a3;
      _0x1c724e.normalized = false;
      _0x1c724e.stride = _0x2bc815;
      _0x1c724e.ptr = _0x9a4387;
      _0x1c724e.clientside = true;
      _0x1c724e.vertexAttribPointerAdaptor = function (_0x3cedad, _0x3edff8, _0x371206, _0x508719, _0x3130a0, _0x33750f) {
        this.vertexAttribIPointer(_0x3cedad, _0x3edff8, _0x371206, _0x3130a0, _0x33750f);
      };
      return;
    }
    _0x1c724e.clientside = false;
    _0x3494f0.vertexAttribIPointer(_0x49d4f2, _0x231d18, _0x5cb1a3, _0x2bc815, _0x9a4387);
  }
  function _0x1372c4(_0x5e9d49, _0x419fdf, _0x54942d, _0x20c868, _0x1c8bbc, _0x56fb8b) {
    var _0x284137 = _0x797e34.currentContext.clientBuffers[_0x5e9d49];
    if (!_0x3494f0.currentArrayBufferBinding) {
      _0x284137.size = _0x419fdf;
      _0x284137.type = _0x54942d;
      _0x284137.normalized = _0x20c868;
      _0x284137.stride = _0x1c8bbc;
      _0x284137.ptr = _0x56fb8b;
      _0x284137.clientside = true;
      _0x284137.vertexAttribPointerAdaptor = function (_0x23a1ec, _0x2faf97, _0x17c016, _0x3a8ed4, _0x52be9c, _0x4b546b) {
        this.vertexAttribPointer(_0x23a1ec, _0x2faf97, _0x17c016, _0x3a8ed4, _0x52be9c, _0x4b546b);
      };
      return;
    }
    _0x284137.clientside = false;
    _0x3494f0.vertexAttribPointer(_0x5e9d49, _0x419fdf, _0x54942d, !!_0x20c868, _0x1c8bbc, _0x56fb8b);
  }
  function _0x5d8b3b(_0x4bb22c, _0x2c5883, _0x5337ad, _0x26316a) {
    _0x3494f0.viewport(_0x4bb22c, _0x2c5883, _0x5337ad, _0x26316a);
  }
  function _0x3d76f5(_0x95c846) {
    return _0x95c846;
  }
  function _0x1af2e7(_0xe78505) {
    _0x29bd2b();
    var _0x3d3c0c = new Date(_0x14d31c[_0xe78505 + 20 >> 2] + 1900, _0x14d31c[_0xe78505 + 16 >> 2], _0x14d31c[_0xe78505 + 12 >> 2], _0x14d31c[_0xe78505 + 8 >> 2], _0x14d31c[_0xe78505 + 4 >> 2], _0x14d31c[_0xe78505 >> 2], 0);
    var _0x105d5f = _0x14d31c[_0xe78505 + 32 >> 2];
    var _0x15bfcb = _0x3d3c0c.getTimezoneOffset();
    var _0x40a115 = new Date(_0x3d3c0c.getFullYear(), 0, 1);
    var _0x57bdbb = new Date(_0x3d3c0c.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x1936a7 = _0x40a115.getTimezoneOffset();
    var _0x425dab = Math.min(_0x1936a7, _0x57bdbb);
    if (_0x105d5f < 0) {
      _0x14d31c[_0xe78505 + 32 >> 2] = Number(_0x57bdbb != _0x1936a7 && _0x425dab == _0x15bfcb);
    } else if (_0x105d5f > 0 != (_0x425dab == _0x15bfcb)) {
      var _0x2a199f = Math.max(_0x1936a7, _0x57bdbb);
      var _0x223bfa = _0x105d5f > 0 ? _0x425dab : _0x2a199f;
      _0x3d3c0c.setTime(_0x3d3c0c.getTime() + (_0x223bfa - _0x15bfcb) * 60000);
    }
    _0x14d31c[_0xe78505 + 24 >> 2] = _0x3d3c0c.getDay();
    var _0x37f664 = (_0x3d3c0c.getTime() - _0x40a115.getTime()) / 86400000 | 0;
    _0x14d31c[_0xe78505 + 28 >> 2] = _0x37f664;
    _0x14d31c[_0xe78505 >> 2] = _0x3d3c0c.getSeconds();
    _0x14d31c[_0xe78505 + 4 >> 2] = _0x3d3c0c.getMinutes();
    _0x14d31c[_0xe78505 + 8 >> 2] = _0x3d3c0c.getHours();
    _0x14d31c[_0xe78505 + 12 >> 2] = _0x3d3c0c.getDate();
    _0x14d31c[_0xe78505 + 16 >> 2] = _0x3d3c0c.getMonth();
    return _0x3d3c0c.getTime() / 1000 | 0;
  }
  function _0x44f8d9(_0x2b0bce) {
    _0x2f751d(_0x2b0bce);
  }
  function _0x466b54(_0x317800) {
    return _0x317800 % 4 === 0 && (_0x317800 % 100 !== 0 || _0x317800 % 400 === 0);
  }
  function _0x1e04c7(_0x52bae5, _0x1af4de) {
    var _0x2aa309 = 0;
    for (var _0x58f6b4 = 0; _0x58f6b4 <= _0x1af4de; _0x2aa309 += _0x52bae5[_0x58f6b4++]) {}
    return _0x2aa309;
  }
  var _0x311a71 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x1cf806 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x30b3df(_0x50b85d, _0x149512) {
    var _0x3a10df = new Date(_0x50b85d.getTime());
    while (_0x149512 > 0) {
      var _0x76b7a5 = _0x466b54(_0x3a10df.getFullYear());
      var _0x3a3e05 = _0x3a10df.getMonth();
      var _0x33c277 = (_0x76b7a5 ? _0x311a71 : _0x1cf806)[_0x3a3e05];
      if (_0x149512 > _0x33c277 - _0x3a10df.getDate()) {
        _0x149512 -= _0x33c277 - _0x3a10df.getDate() + 1;
        _0x3a10df.setDate(1);
        if (_0x3a3e05 < 11) {
          _0x3a10df.setMonth(_0x3a3e05 + 1);
        } else {
          _0x3a10df.setMonth(0);
          _0x3a10df.setFullYear(_0x3a10df.getFullYear() + 1);
        }
      } else {
        _0x3a10df.setDate(_0x3a10df.getDate() + _0x149512);
        return _0x3a10df;
      }
    }
    return _0x3a10df;
  }
  function _0x3c3247(_0x5b4880, _0x3dd442, _0xf73bf7, _0x238e91) {
    var _0x3a9132 = _0x14d31c[_0x238e91 + 40 >> 2];
    var _0x2e809f = {
      tm_sec: _0x14d31c[_0x238e91 >> 2],
      tm_min: _0x14d31c[_0x238e91 + 4 >> 2],
      tm_hour: _0x14d31c[_0x238e91 + 8 >> 2],
      tm_mday: _0x14d31c[_0x238e91 + 12 >> 2],
      tm_mon: _0x14d31c[_0x238e91 + 16 >> 2],
      tm_year: _0x14d31c[_0x238e91 + 20 >> 2],
      tm_wday: _0x14d31c[_0x238e91 + 24 >> 2],
      tm_yday: _0x14d31c[_0x238e91 + 28 >> 2],
      tm_isdst: _0x14d31c[_0x238e91 + 32 >> 2],
      tm_gmtoff: _0x14d31c[_0x238e91 + 36 >> 2],
      tm_zone: _0x3a9132 ? _0x21e34e(_0x3a9132) : ""
    };
    var _0x18a04e = _0x21e34e(_0xf73bf7);
    var _0x4c513c = {
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
    for (var _0x531cd8 in _0x4c513c) {
      _0x18a04e = _0x18a04e.replace(new RegExp(_0x531cd8, "g"), _0x4c513c[_0x531cd8]);
    }
    var _0x222520 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x192b3d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x5a24ae(_0x545741, _0x26807f, _0x5707ba) {
      var _0x438a52 = typeof _0x545741 === "number" ? _0x545741.toString() : _0x545741 || "";
      while (_0x438a52.length < _0x26807f) {
        _0x438a52 = _0x5707ba[0] + _0x438a52;
      }
      return _0x438a52;
    }
    function _0x5b491c(_0x2c8418, _0x49ae5f) {
      return _0x5a24ae(_0x2c8418, _0x49ae5f, "0");
    }
    function _0x59a6f9(_0x48fffc, _0x405b4d) {
      function _0x33f238(_0x97c317) {
        if (_0x97c317 < 0) {
          return -1;
        } else if (_0x97c317 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x1fa9ec;
      if ((_0x1fa9ec = _0x33f238(_0x48fffc.getFullYear() - _0x405b4d.getFullYear())) === 0) {
        if ((_0x1fa9ec = _0x33f238(_0x48fffc.getMonth() - _0x405b4d.getMonth())) === 0) {
          _0x1fa9ec = _0x33f238(_0x48fffc.getDate() - _0x405b4d.getDate());
        }
      }
      return _0x1fa9ec;
    }
    function _0x1f90e7(_0x575136) {
      switch (_0x575136.getDay()) {
        case 0:
          return new Date(_0x575136.getFullYear() - 1, 11, 29);
        case 1:
          return _0x575136;
        case 2:
          return new Date(_0x575136.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x575136.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x575136.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x575136.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x575136.getFullYear() - 1, 11, 30);
      }
    }
    function _0x5c5eec(_0x5c395c) {
      var _0x29479b = _0x30b3df(new Date(_0x5c395c.tm_year + 1900, 0, 1), _0x5c395c.tm_yday);
      var _0x2c03d1 = new Date(_0x29479b.getFullYear(), 0, 4);
      var _0x21e1e3 = new Date(_0x29479b.getFullYear() + 1, 0, 4);
      var _0x49fdcd = _0x1f90e7(_0x2c03d1);
      var _0x515193 = _0x1f90e7(_0x21e1e3);
      if (_0x59a6f9(_0x49fdcd, _0x29479b) <= 0) {
        if (_0x59a6f9(_0x515193, _0x29479b) <= 0) {
          return _0x29479b.getFullYear() + 1;
        } else {
          return _0x29479b.getFullYear();
        }
      } else {
        return _0x29479b.getFullYear() - 1;
      }
    }
    var _0x13465c = {
      "%a": function (_0x42773c) {
        return _0x222520[_0x42773c.tm_wday].substring(0, 3);
      },
      "%A": function (_0x1bd256) {
        return _0x222520[_0x1bd256.tm_wday];
      },
      "%b": function (_0x23886b) {
        return _0x192b3d[_0x23886b.tm_mon].substring(0, 3);
      },
      "%B": function (_0xb8a94a) {
        return _0x192b3d[_0xb8a94a.tm_mon];
      },
      "%C": function (_0x3a39e9) {
        var _0x329dc7 = _0x3a39e9.tm_year + 1900;
        return _0x5b491c(_0x329dc7 / 100 | 0, 2);
      },
      "%d": function (_0x1adb42) {
        return _0x5b491c(_0x1adb42.tm_mday, 2);
      },
      "%e": function (_0x5d876c) {
        return _0x5a24ae(_0x5d876c.tm_mday, 2, " ");
      },
      "%g": function (_0x174aeb) {
        return _0x5c5eec(_0x174aeb).toString().substring(2);
      },
      "%G": function (_0x5b603c) {
        return _0x5c5eec(_0x5b603c);
      },
      "%H": function (_0xfb4497) {
        return _0x5b491c(_0xfb4497.tm_hour, 2);
      },
      "%I": function (_0x1962e5) {
        var _0x50094d = _0x1962e5.tm_hour;
        if (_0x50094d == 0) {
          _0x50094d = 12;
        } else if (_0x50094d > 12) {
          _0x50094d -= 12;
        }
        return _0x5b491c(_0x50094d, 2);
      },
      "%j": function (_0x3f6f2a) {
        return _0x5b491c(_0x3f6f2a.tm_mday + _0x1e04c7(_0x466b54(_0x3f6f2a.tm_year + 1900) ? _0x311a71 : _0x1cf806, _0x3f6f2a.tm_mon - 1), 3);
      },
      "%m": function (_0x3ece7d) {
        return _0x5b491c(_0x3ece7d.tm_mon + 1, 2);
      },
      "%M": function (_0x1238bd) {
        return _0x5b491c(_0x1238bd.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x331b9a) {
        if (_0x331b9a.tm_hour >= 0 && _0x331b9a.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x21ff3b) {
        return _0x5b491c(_0x21ff3b.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x234dcb) {
        return _0x234dcb.tm_wday || 7;
      },
      "%U": function (_0x5a4fb7) {
        var _0x3e4b04 = new Date(_0x5a4fb7.tm_year + 1900, 0, 1);
        var _0x5d7442 = _0x3e4b04.getDay() === 0 ? _0x3e4b04 : _0x30b3df(_0x3e4b04, 7 - _0x3e4b04.getDay());
        var _0x13ca6d = new Date(_0x5a4fb7.tm_year + 1900, _0x5a4fb7.tm_mon, _0x5a4fb7.tm_mday);
        if (_0x59a6f9(_0x5d7442, _0x13ca6d) < 0) {
          var _0x4a7ff8 = _0x1e04c7(_0x466b54(_0x13ca6d.getFullYear()) ? _0x311a71 : _0x1cf806, _0x13ca6d.getMonth() - 1) - 31;
          var _0x28b841 = 31 - _0x5d7442.getDate();
          var _0x514976 = _0x28b841 + _0x4a7ff8 + _0x13ca6d.getDate();
          return _0x5b491c(Math.ceil(_0x514976 / 7), 2);
        }
        if (_0x59a6f9(_0x5d7442, _0x3e4b04) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x49cf94) {
        var _0x3062ab = new Date(_0x49cf94.tm_year + 1900, 0, 4);
        var _0x1ed368 = new Date(_0x49cf94.tm_year + 1901, 0, 4);
        var _0x4317d2 = _0x1f90e7(_0x3062ab);
        var _0xc09012 = _0x1f90e7(_0x1ed368);
        var _0x3785d1 = _0x30b3df(new Date(_0x49cf94.tm_year + 1900, 0, 1), _0x49cf94.tm_yday);
        if (_0x59a6f9(_0x3785d1, _0x4317d2) < 0) {
          return "53";
        }
        if (_0x59a6f9(_0xc09012, _0x3785d1) <= 0) {
          return "01";
        }
        var _0x1f9042;
        if (_0x4317d2.getFullYear() < _0x49cf94.tm_year + 1900) {
          _0x1f9042 = _0x49cf94.tm_yday + 32 - _0x4317d2.getDate();
        } else {
          _0x1f9042 = _0x49cf94.tm_yday + 1 - _0x4317d2.getDate();
        }
        return _0x5b491c(Math.ceil(_0x1f9042 / 7), 2);
      },
      "%w": function (_0x70890d) {
        return _0x70890d.tm_wday;
      },
      "%W": function (_0x5134a6) {
        var _0x8a3c89 = new Date(_0x5134a6.tm_year, 0, 1);
        var _0x5dfdbd = _0x8a3c89.getDay() === 1 ? _0x8a3c89 : _0x30b3df(_0x8a3c89, _0x8a3c89.getDay() === 0 ? 1 : 7 - _0x8a3c89.getDay() + 1);
        var _0x4592f0 = new Date(_0x5134a6.tm_year + 1900, _0x5134a6.tm_mon, _0x5134a6.tm_mday);
        if (_0x59a6f9(_0x5dfdbd, _0x4592f0) < 0) {
          var _0x1ece21 = _0x1e04c7(_0x466b54(_0x4592f0.getFullYear()) ? _0x311a71 : _0x1cf806, _0x4592f0.getMonth() - 1) - 31;
          var _0x207bbb = 31 - _0x5dfdbd.getDate();
          var _0x495a5a = _0x207bbb + _0x1ece21 + _0x4592f0.getDate();
          return _0x5b491c(Math.ceil(_0x495a5a / 7), 2);
        }
        if (_0x59a6f9(_0x5dfdbd, _0x8a3c89) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x5e3149) {
        return (_0x5e3149.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x1b01b6) {
        return _0x1b01b6.tm_year + 1900;
      },
      "%z": function (_0x5168c8) {
        var _0x1e6644 = _0x5168c8.tm_gmtoff;
        var _0x19101b = _0x1e6644 >= 0;
        _0x1e6644 = Math.abs(_0x1e6644) / 60;
        _0x1e6644 = _0x1e6644 / 60 * 100 + _0x1e6644 % 60;
        return (_0x19101b ? "+" : "-") + String("0000" + _0x1e6644).slice(-4);
      },
      "%Z": function (_0x2ea84f) {
        return _0x2ea84f.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x531cd8 in _0x13465c) {
      if (_0x18a04e.includes(_0x531cd8)) {
        _0x18a04e = _0x18a04e.replace(new RegExp(_0x531cd8, "g"), _0x13465c[_0x531cd8](_0x2e809f));
      }
    }
    var _0x4f49e0 = _0x37ad12(_0x18a04e, false);
    if (_0x4f49e0.length > _0x3dd442) {
      return 0;
    }
    _0x485da2(_0x4f49e0, _0x5b4880);
    return _0x4f49e0.length - 1;
  }
  function _0x1676e4(_0x2935e8) {
    var _0x1dd59e = Date.now() / 1000 | 0;
    if (_0x2935e8) {
      _0x14d31c[_0x2935e8 >> 2] = _0x1dd59e;
    }
    return _0x1dd59e;
  }
  function _0x4f8385(_0x27efb8, _0x39286c) {
    _0x27efb8 = _0x21e34e(_0x27efb8);
    try {
      _0x1e6cd4.utime(_0x27efb8, _0x39286c, _0x39286c);
      return 0;
    } catch (_0xa68267) {
      if (!(_0xa68267 instanceof _0x1e6cd4.ErrnoError)) {
        throw _0xa68267 + " : " + _0x2008cc();
      }
      _0x2b6e9c(_0xa68267.errno);
      return -1;
    }
  }
  function _0x18d9db(_0x403b8f, _0x21df84) {
    var _0x396501;
    if (_0x21df84) {
      _0x396501 = _0x14d31c[_0x21df84 + 4 >> 2] * 1000;
    } else {
      _0x396501 = Date.now();
    }
    return _0x4f8385(_0x403b8f, _0x396501);
  }
  var _0x32a04d = function (_0x29ac55, _0x34ac8d, _0x5914de, _0x298cfa) {
    if (!_0x29ac55) {
      _0x29ac55 = this;
    }
    this.parent = _0x29ac55;
    this.mount = _0x29ac55.mount;
    this.mounted = null;
    this.id = _0x1e6cd4.nextInode++;
    this.name = _0x34ac8d;
    this.mode = _0x5914de;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x298cfa;
  };
  var _0x116ce2 = 365;
  var _0x40180a = 146;
  Object.defineProperties(_0x32a04d.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x116ce2) === _0x116ce2;
      },
      set: function (_0x7941) {
        if (_0x7941) {
          this.mode |= _0x116ce2;
        } else {
          this.mode &= ~_0x116ce2;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x40180a) === _0x40180a;
      },
      set: function (_0x6bcac1) {
        if (_0x6bcac1) {
          this.mode |= _0x40180a;
        } else {
          this.mode &= ~_0x40180a;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x1e6cd4.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x1e6cd4.isChrdev(this.mode);
      }
    }
  });
  _0x1e6cd4.FSNode = _0x32a04d;
  _0x1e6cd4.staticInit();
  _0xc94e0.FS_createPath = _0x1e6cd4.createPath;
  _0xc94e0.FS_createDataFile = _0x1e6cd4.createDataFile;
  _0xc94e0.requestFullscreen = function _0x14f319(_0xcabe01, _0x416b5c) {
    _0x32b533.requestFullscreen(_0xcabe01, _0x416b5c);
  };
  _0xc94e0.requestAnimationFrame = function _0x36f74b(_0x2a6cb2) {
    _0x32b533.requestAnimationFrame(_0x2a6cb2);
  };
  _0xc94e0.setCanvasSize = function _0x2ead09(_0x166e14, _0x1667f8, _0x363cc6) {
    _0x32b533.setCanvasSize(_0x166e14, _0x1667f8, _0x363cc6);
  };
  _0xc94e0.pauseMainLoop = function _0x4bb693() {
    _0x32b533.mainLoop.pause();
  };
  _0xc94e0.resumeMainLoop = function _0x55512a() {
    _0x32b533.mainLoop.resume();
  };
  _0xc94e0.getUserMedia = function _0x2311ab() {
    _0x32b533.getUserMedia();
  };
  _0xc94e0.createContext = function _0x36dd7a(_0x2383ad, _0x131502, _0x137e77, _0x5acd39) {
    return _0x32b533.createContext(_0x2383ad, _0x131502, _0x137e77, _0x5acd39);
  };
  var _0x3494f0;
  for (var _0x12e9e1 = 0; _0x12e9e1 < 32; ++_0x12e9e1) {
    _0x1a73d3.push(new Array(_0x12e9e1));
  }
  var _0x3e0b3f = new Float32Array(288);
  for (var _0x12e9e1 = 0; _0x12e9e1 < 288; ++_0x12e9e1) {
    _0x58c7c1[_0x12e9e1] = _0x3e0b3f.subarray(0, _0x12e9e1 + 1);
  }
  var _0x3c334f = new Int32Array(288);
  for (var _0x12e9e1 = 0; _0x12e9e1 < 288; ++_0x12e9e1) {
    _0x496313[_0x12e9e1] = _0x3c334f.subarray(0, _0x12e9e1 + 1);
  }
  function _0x37ad12(_0x530512, _0x43a24d, _0xfbaabd) {
    var _0x46e139 = _0xfbaabd > 0 ? _0xfbaabd : _0x356cec(_0x530512) + 1;
    var _0x364693 = new Array(_0x46e139);
    var _0x109540 = _0x5291de(_0x530512, _0x364693, 0, _0x364693.length);
    if (_0x43a24d) {
      _0x364693.length = _0x109540;
    }
    return _0x364693;
  }
  var _0x2e409b = {
    pj: _0x2b5e70,
    lj: _0x4ab7e9,
    Dc: _0x36e30a,
    Ai: _0x437ac7,
    li: _0x27629b,
    Mj: _0x4599fc,
    yi: _0x271962,
    xi: _0x19916d,
    ui: _0x184b60,
    wi: _0x33963d,
    vi: _0x40ae69,
    nj: _0x39ead6,
    mj: _0x538210,
    Dj: _0x58c04f,
    cj: _0x3911f7,
    Fc: _0x175c4e,
    Fi: _0x469ab8,
    Wi: _0x1e3f43,
    Gc: _0x448d1c,
    Ic: _0x47323e,
    Hc: _0x584ea8,
    Gi: _0x3b6639,
    qi: _0x5f3d27,
    pi: _0x16cc1e,
    ej: _0x2e0d0e,
    sj: _0x23ba98,
    rj: _0x129281,
    Ci: _0x31d84e,
    ti: _0x245460,
    si: _0x317d55,
    Di: _0x4651ea,
    Hj: _0x28b2fc,
    di: _0x44d99e,
    ii: _0x5eb548,
    hi: _0x352b70,
    gi: _0x4810b3,
    Si: _0x469447,
    Ri: _0xee3aaf,
    Qi: _0x4f53d1,
    Pi: _0xd28474,
    ri: _0x1526f7,
    mi: _0x50122a,
    jj: _0x1da144,
    Ei: _0x4fb78b,
    Ki: _0x21a4d9,
    ei: _0x5e99cd,
    Mi: _0x2c4994,
    Se: _0x22b64e,
    yb: _0x50f90a,
    xb: _0x4f3b8f,
    We: _0x48d577,
    Ja: _0x3544de,
    Ia: _0x230fe2,
    te: _0x5de60b,
    Ye: _0x50a671,
    we: _0x373ddc,
    me: _0x28df9c,
    ea: _0x220957,
    Pe: _0x170040,
    ub: _0x236a95,
    tb: _0x183cd8,
    Ne: _0x32ccac,
    Oe: _0xb7947d,
    sb: _0x2805f1,
    rb: _0x4b1569,
    Nc: _0x592560,
    Re: _0x48ba14,
    wb: _0xbc3332,
    vb: _0x153a3c,
    ue: _0x3b32e3,
    xe: _0x22ab0b,
    Te: _0x3aa4ad,
    Ab: _0x2c42e8,
    zb: _0x5bd0f4,
    Eb: _0x3a6713,
    pe: _0x49cbf2,
    Me: _0xa1a89b,
    Ve: _0x12461c,
    ba: _0x14a6ed,
    Bf: _0x302219,
    pa: _0x5b1f57,
    wf: _0x581ead,
    tf: _0x82e95f,
    Sb: _0x563a6e,
    vf: _0x233d0e,
    Ma: _0x1f5523,
    Na: _0x4624ff,
    Fb: _0x5b76a9,
    xf: _0x3a97fb,
    rf: _0x594ffa,
    sf: _0x54623c,
    Ub: _0x109e96,
    Tb: _0xa161cb,
    oa: _0x23d7f1,
    ca: _0x25393f,
    zf: _0x520a71,
    yf: _0x1f1a1b,
    qa: _0x357a0f,
    ia: _0x599ae3,
    Rb: _0x5f3c77,
    kb: _0x5c67ca,
    qb: _0xdac8ba,
    Ga: _0x315a61,
    mb: _0x4e96e1,
    ob: _0x12fc60,
    ze: _0x435886,
    Qb: _0x391336,
    Ze: _0x57be1c,
    nb: _0x4a4345,
    Je: _0x3ec5b9,
    sa: _0x114b8a,
    se: _0x39715f,
    of: _0x4fb740,
    kf: _0x14bd9b,
    mf: _0x20e46b,
    nf: _0x3efe28,
    La: _0x4e33dc,
    ff: _0x8b7c73,
    hf: _0x50ff2e,
    gf: _0x2b8a2e,
    jf: _0x492ed0,
    Aj: _0x5d0cb3,
    yj: _0x4ad685,
    wj: _0x55cecd,
    gj: _0x4e2a49,
    ij: _0x56c067,
    Cj: _0xeb3380,
    aj: _0x38d0be,
    $i: _0x14c3c0,
    uj: _0x341602,
    Ij: _0x1f367b,
    Li: _0x4105bb,
    Ji: _0x21574b,
    Gj: _0x3d4834,
    Fj: _0x33597f,
    Ni: _0x506c89,
    bb: _0x4eb1c3,
    Ii: _0x3474b6,
    Hi: _0x1e9ef7,
    kj: _0x1b7a0e,
    Bi: _0x3e74d1,
    zi: _0x55d654,
    oi: _0x4a1269,
    _i: _0x50b7ec,
    Zi: _0x35ab4,
    Xi: _0x335dd2,
    Yi: _0x40a923,
    qj: _0x3aff3e,
    bj: _0x5d56fc,
    ji: _0x3d8c51,
    ki: _0x1321fc,
    ni: _0x1fe7e3,
    Ec: _0x1b440b,
    Nj: _0x30ea3e,
    Lj: _0x3ab367,
    Jj: _0x3425f4,
    Kj: _0x256c31,
    zj: _0x4b5f11,
    xj: _0x3a4cb7,
    vj: _0xf87778,
    fj: _0x1d9eb4,
    hj: _0x42dd4d,
    Bj: _0x58fa08,
    fi: _0x22b1a6,
    tj: _0x5c0a06,
    oj: _0x1df64a,
    Ej: _0x177026,
    dj: _0x6f1f5d,
    p: _0x53e007,
    h: _0x53b67a,
    n: _0x37040a,
    g: _0x195ea6,
    a: _0x49636d,
    Mc: _0x40e63f,
    ab: _0x33c8d5,
    bd: _0x4efc7a,
    aa: _0x45851f,
    Qc: _0x3862ae,
    Rc: _0x4c7ea8,
    k: _0x2c6667,
    ve: _0x4262f0,
    Xe: _0x1300e2,
    Ce: _0x18f4e4,
    Mf: _0x1a5419,
    hb: _0x3bd740,
    Af: _0x5eb4c4,
    ed: _0xfb44b0,
    Vh: _0x87b061,
    Q: _0x1e7492,
    Gg: _0x204878,
    Ag: _0xbada43,
    Yc: _0x24e3f1,
    Vc: _0x2d00fa,
    vc: _0xf853ca,
    wc: _0xd8a133,
    gd: _0x3a963b,
    Uc: _0x2b5d9c,
    lf: _0x20e3d6,
    Gf: _0x5c3a67,
    Ff: _0x3f7ba9,
    lb: _0x4e0454,
    Yh: _0xae35b4,
    cf: _0x7ba38b,
    $c: _0x234e93,
    Xc: _0x3ac261,
    Le: _0x184459,
    id: _0x51524d,
    Xa: _0x490216,
    ad: _0x7f876d,
    uf: _0x24e40a,
    Wh: _0x2049eb,
    Qe: _0x42102e,
    cd: _0x508926,
    Zc: _0x35d571,
    Wc: _0x48ad3e,
    dd: _0x5b3d8d,
    Ue: _0x264b9a,
    Ke: _0xa1ebc8,
    fd: _0x2b2401,
    ib: _0x3694ff,
    jc: _0x4e3aa0,
    Cf: _0x3a22ca,
    Xh: _0x3f4de8,
    Df: _0x3f978a,
    hd: _0x304fce,
    _c: _0x358139,
    Uh: _0xc7f9fc,
    x: _0x3f9a64,
    L: _0x480a4d,
    Tc: _0xff565b,
    eb: _0xead2a6,
    Pc: _0x131171,
    Uf: _0x29026b,
    ua: _0x130a0d,
    Zb: _0x2dd682,
    bg: _0x36e80b,
    Ka: _0x432505,
    qe: _0x6c4b8e,
    oe: _0x5e0778,
    He: _0x26046e,
    Ae: _0x346ac3,
    ye: _0x454295,
    Ge: _0x201af6,
    Bb: _0x1afc8b,
    Sc: _0x437c4d,
    J: _0xe31097,
    Cb: _0x2fb16c,
    re: _0x294863,
    af: _0x33662a,
    B: _0x17f2a4,
    D: _0x185a01,
    Rj: _0x50296f,
    Ie: _0x276dd9,
    Be: _0x56fce7,
    Sj: _0x5423bd,
    Db: _0xfd0718,
    pb: _0xed5693,
    Ha: _0x15f0bd,
    Ee: _0x3d2d6d,
    Fe: _0xca2f26,
    Hb: _0x54aba4,
    Gb: _0x5cb630,
    le: _0x445fc3,
    la: _0x1578d3,
    ja: _0x8edbcb,
    ka: _0x2c0923,
    ke: _0x4c1f02,
    ne: _0x2b96c5,
    Ob: _0x2ed253,
    Nb: _0x504c8e,
    Pb: _0x404c22,
    De: _0x1cc57c,
    Ib: _0x3632ee,
    Kb: _0x3e0d35,
    Jb: _0x1eb587,
    Lb: _0x3f8bee,
    Mb: _0x178d1f,
    Oc: _0x4677bd,
    df: _0x36126d,
    bf: _0x574001,
    ma: _0x30b5a4,
    $e: _0x349c1f,
    Hf: _0x34068c,
    na: _0x1e94c6,
    Sd: _0x47ae22,
    be: _0x5efb09,
    z: _0xcb4aa7,
    W: _0x177143,
    Nf: _0xdde251,
    gb: _0x2ee546,
    je: _0x3c129f,
    Za: _0x463eff,
    ra: _0x4e1a0a,
    b: _0x5e4c84,
    nd: _0x2dbab8,
    pf: _0x4b3483,
    qf: _0x5cd5db,
    jb: _0x19aa90,
    Ef: _0xdfa331,
    Da: _0x32caff,
    Lh: _0x162b5b,
    Ih: _0x565385,
    $b: _0x42e6aa,
    wg: _0x47c205,
    Aa: _0x15bb59,
    Hh: _0x5d973a,
    Xf: _0x329efd,
    Wf: _0xf7fc08,
    Eh: _0x4ba047,
    Fh: _0x434e00,
    Qf: _0xc9f386,
    Gh: _0x115d50,
    pg: _0x5d06ed,
    sg: _0x54fabd,
    sc: _0x1603ea,
    tc: _0x2898b8,
    uc: _0x422ff1,
    hg: _0x345c2f,
    Ch: _0x308325,
    Dh: _0x1fd05b,
    Bh: _0x205324,
    xh: _0x106af7,
    Kf: _0x342150,
    Jf: _0x3f6bd0,
    If: _0x4a4c4e,
    yh: _0x13869b,
    zh: _0x210651,
    Ah: _0x2c6724,
    jd: _0x5cd206,
    _a: _0x2c62b4,
    wh: _0x3e27a0,
    uh: _0x5f3026,
    jg: _0xe2dec0,
    vh: _0x3dddb1,
    ng: _0x11ba61,
    _f: _0x27f53f,
    th: _0xafc07,
    rc: _0x352f14,
    sh: _0xd6094e,
    rh: _0x5595de,
    qh: _0x2de6ab,
    ph: _0x1a0bdc,
    oh: _0x36615a,
    nh: _0x55f927,
    Sa: _0x3a6fc2,
    mh: _0x4f1f0c,
    Pf: _0x2a5588,
    lh: _0x2447e0,
    Wb: _0x14aaec,
    kh: _0x225efe,
    qg: _0x189d25,
    ug: _0x3f073d,
    za: _0x5a3b7f,
    ya: _0x1bf9aa,
    jh: _0x4ef30a,
    ih: _0x228973,
    hh: _0x5955b2,
    eh: _0x40b179,
    ag: _0x3f6225,
    Zf: _0x1c8bd8,
    fh: _0x512211,
    $f: _0x126ad7,
    gh: _0x1e0b0f,
    dh: _0x547b97,
    ac: _0x4035b9,
    xg: _0x115251,
    Vb: _0x14f285,
    ah: _0x47ce4a,
    bh: _0x42ed7b,
    eg: _0x552c81,
    R: _0x23cbe7,
    M: _0x432032,
    ta: _0x5ba1e5,
    xa: _0x31623a,
    $g: _0x29d31c,
    Xg: _0x1cfde2,
    _b: _0x109c79,
    Yg: _0x11cf56,
    Of: _0x2461a1,
    _g: _0x1914d0,
    rg: _0x4ee94e,
    vg: _0x4e9dd1,
    Zg: _0x2996ce,
    Rh: _0x16595f,
    Ya: _0x2fe439,
    Pa: _0xe51525,
    Z: _0x11c1d6,
    Y: _0x367309,
    Qh: _0x26376a,
    _e: _0x56ca8d,
    Wg: _0x48731e,
    Vg: _0x5bc154,
    Kh: _0x3e6fef,
    Ba: _0x49310f,
    Sf: _0x3d2883,
    Xb: _0x518cc3,
    Nh: _0x56f051,
    U: _0x1460c7,
    zg: _0x711560,
    yg: _0x4829c5,
    ch: _0x32d0d6,
    Tg: _0x132005,
    pc: _0x36f941,
    Ug: _0x24d01b,
    Mh: _0x5bbdfc,
    Sg: _0x2a31a6,
    fg: _0x322305,
    Rg: _0x1949a1,
    Tf: _0x13dbee,
    Oa: _0xb61d08,
    da: _0x43bf46,
    oc: _0x35b9b3,
    Ph: _0x4466db,
    Ra: _0x4b06e9,
    Jh: _0x530346,
    tg: _0x538c92,
    Pg: _0x4e3dcd,
    cg: _0x26bfd7,
    Qg: _0xe76392,
    nc: _0x1d18f2,
    Yb: _0x3c6c6c,
    Lf: _0x57ecd9,
    Yf: _0x20e814,
    $: _0x97201e,
    Og: _0x2b18a7,
    gg: _0x5425b3,
    Rf: _0x2de7ac,
    Wa: _0x11ad6a,
    Mg: _0x586c8b,
    Ng: _0x4cfe0a,
    Kg: _0x35beb0,
    Lg: _0x5f4f4b,
    Ig: _0x41c3b0,
    lg: _0x50d053,
    Jg: _0xf4b506,
    Va: _0x492925,
    Hg: _0x20ecd6,
    ig: _0x4fafdf,
    kg: _0x43dc0e,
    Fg: _0x7ee04b,
    mg: _0x4c3e3c,
    og: _0x41af89,
    bc: _0x4b96c3,
    va: _0x16f220,
    cc: _0x467ef3,
    dc: _0xe863fb,
    ec: _0x4de82e,
    fc: _0x15c75a,
    gc: _0x4c47f6,
    Ua: _0x1f4895,
    hc: _0x48d068,
    ic: _0x95fcc7,
    _: _0x480989,
    kc: _0x54c504,
    lc: _0x418542,
    Qa: _0x56ad3e,
    mc: _0x409988,
    wa: _0x5dde24,
    dg: _0x46e862,
    Bg: _0x3668b8,
    Oh: _0x5360cf,
    Cg: _0x427d1d,
    Dg: _0x249963,
    Vf: _0x21d49f,
    Eg: _0x1372c4,
    Ta: _0x5d8b3b,
    zc: _0x37eb93,
    Qj: _0x2e586a,
    I: _0x5915c2,
    N: _0xdebb39,
    Lc: _0x3fb446,
    yc: _0x4915e2,
    Bd: _0x4ec264,
    Ac: _0xeb5bf,
    X: _0x57625e,
    V: _0x51ff17,
    C: _0x27ce54,
    Kc: _0x550c14,
    Oj: _0x29401a,
    w: _0xee8c2b,
    $a: _0x1198f2,
    Cc: _0x16a4e4,
    d: _0x5b2795,
    ci: _0x204976,
    bi: _0x267334,
    c: _0x53df90,
    Oi: _0x4accc1,
    fa: _0x36701d,
    i: _0xfee020,
    Th: _0x308232,
    Ti: _0x2556a9,
    Sh: _0x47c269,
    q: _0xe55dc2,
    Ca: _0x2a555,
    Vi: _0x24a257,
    s: _0x4eddc4,
    u: _0x3afb04,
    A: _0x4b3397,
    G: _0x16dfc5,
    O: _0x1629b7,
    xc: _0x3351c6,
    Pj: _0x1b3b6e,
    Fd: _0x4d858f,
    Gd: _0x2c9335,
    Dd: _0x243217,
    zd: _0x478475,
    he: _0x306198,
    ee: _0x512a44,
    fe: _0x388dc6,
    Jd: _0x414120,
    Kd: _0x51a11f,
    xd: _0x220b91,
    vd: _0x5347b1,
    sd: _0x455b6f,
    wd: _0x48e3c6,
    ae: _0xaf58e8,
    Pd: _0x3c8925,
    ge: _0x1c36e6,
    Id: _0x473a39,
    de: _0x1e1eb4,
    Ld: _0x420ed5,
    ce: _0x11fe34,
    Yd: _0x221c2e,
    ie: _0x1d4326,
    Nd: _0x3eb0cf,
    pd: _0x5554f2,
    td: _0x4a7083,
    Td: _0x77cacd,
    Wd: _0x495ebd,
    Qd: _0x47275d,
    qd: _0x15c9cb,
    Xd: _0x9861d4,
    Od: _0x1ad49c,
    Cd: _0x1ab5e3,
    Vd: _0x5a836c,
    e: _0x21d78a,
    l: _0x484a51,
    ef: _0x112949,
    y: _0x249845,
    F: _0x383a8b,
    cb: _0x30d2b1,
    m: _0x1f241e,
    ga: _0xb739fc,
    qc: _0x3783c7,
    S: _0x245377,
    Ui: _0x309a0c,
    P: _0x523230,
    f: _0x40fc98,
    $h: _0x58c2cb,
    o: _0x3b292f,
    ai: _0xec9fda,
    r: _0x3087c5,
    t: _0x4c96ff,
    E: _0x208def,
    _h: _0x1a0aee,
    Zh: _0x404a22,
    K: _0x9b8c22,
    Ad: _0x1a7555,
    H: _0x1f3963,
    T: _0x4f83d6,
    Jc: _0x38d7e7,
    Ea: _0x51b01f,
    Bc: _0x5c0e46,
    rd: _0x5bbea6,
    $d: _0x38feed,
    Md: _0x4f4cd7,
    ud: _0x1ffdc8,
    _d: _0x10efa1,
    yd: _0x2f266f,
    kd: _0x558ad9,
    Ud: _0x2c0e29,
    Zd: _0x4ad076,
    Rd: _0x265a96,
    od: _0x25e0b1,
    Hd: _0x4d52f1,
    Ed: _0x1c78f3,
    ld: _0x242cb2,
    md: _0x1baed5,
    j: _0x3d76f5,
    db: _0x1af2e7,
    v: _0x44f8d9,
    Fa: _0x3c3247,
    ha: _0x1676e4,
    fb: _0x18d9db
  };
  var _0xa3e1ae = _0x2e76c3();
  var _0xf99013 = _0xc94e0.___wasm_call_ctors = function () {
    return (_0xf99013 = _0xc94e0.___wasm_call_ctors = _0xc94e0.asm.Uj).apply(null, arguments);
  };
  var _0x264d62 = _0xc94e0._ReleaseKeys = function () {
    return (_0x264d62 = _0xc94e0._ReleaseKeys = _0xc94e0.asm.Vj).apply(null, arguments);
  };
  var _0x8c7c7a = _0xc94e0._SendMessageFloat = function () {
    return (_0x8c7c7a = _0xc94e0._SendMessageFloat = _0xc94e0.asm.Wj).apply(null, arguments);
  };
  var _0x4f0ba3 = _0xc94e0._SendMessageString = function () {
    return (_0x4f0ba3 = _0xc94e0._SendMessageString = _0xc94e0.asm.Xj).apply(null, arguments);
  };
  var _0x14bf63 = _0xc94e0._SendMessage = function () {
    return (_0x14bf63 = _0xc94e0._SendMessage = _0xc94e0.asm.Yj).apply(null, arguments);
  };
  var _0x7659a9 = _0xc94e0._SetFullscreen = function () {
    return (_0x7659a9 = _0xc94e0._SetFullscreen = _0xc94e0.asm.Zj).apply(null, arguments);
  };
  var _0x36b66d = _0xc94e0._main = function () {
    return (_0x36b66d = _0xc94e0._main = _0xc94e0.asm._j).apply(null, arguments);
  };
  var _0x328554 = _0xc94e0.___errno_location = function () {
    return (_0x328554 = _0xc94e0.___errno_location = _0xc94e0.asm.$j).apply(null, arguments);
  };
  var _0x155d20 = _0xc94e0._htonl = function () {
    return (_0x155d20 = _0xc94e0._htonl = _0xc94e0.asm.ak).apply(null, arguments);
  };
  var _0x3f28f8 = _0xc94e0._htons = function () {
    return (_0x3f28f8 = _0xc94e0._htons = _0xc94e0.asm.bk).apply(null, arguments);
  };
  var _0x4c0b7f = _0xc94e0._ntohs = function () {
    return (_0x4c0b7f = _0xc94e0._ntohs = _0xc94e0.asm.ck).apply(null, arguments);
  };
  var _0x56c63c = _0xc94e0.__get_tzname = function () {
    return (_0x56c63c = _0xc94e0.__get_tzname = _0xc94e0.asm.dk).apply(null, arguments);
  };
  var _0x5854d6 = _0xc94e0.__get_daylight = function () {
    return (_0x5854d6 = _0xc94e0.__get_daylight = _0xc94e0.asm.ek).apply(null, arguments);
  };
  var _0x3090f6 = _0xc94e0.__get_timezone = function () {
    return (_0x3090f6 = _0xc94e0.__get_timezone = _0xc94e0.asm.fk).apply(null, arguments);
  };
  var _0x1b881f = _0xc94e0.stackSave = function () {
    return (_0x1b881f = _0xc94e0.stackSave = _0xc94e0.asm.gk).apply(null, arguments);
  };
  var _0x2351aa = _0xc94e0.stackRestore = function () {
    return (_0x2351aa = _0xc94e0.stackRestore = _0xc94e0.asm.hk).apply(null, arguments);
  };
  var _0x432d16 = _0xc94e0.stackAlloc = function () {
    return (_0x432d16 = _0xc94e0.stackAlloc = _0xc94e0.asm.ik).apply(null, arguments);
  };
  var _0x3054ad = _0xc94e0._setThrew = function () {
    return (_0x3054ad = _0xc94e0._setThrew = _0xc94e0.asm.jk).apply(null, arguments);
  };
  var _0x1e5712 = _0xc94e0.___cxa_can_catch = function () {
    return (_0x1e5712 = _0xc94e0.___cxa_can_catch = _0xc94e0.asm.kk).apply(null, arguments);
  };
  var _0xd41ac4 = _0xc94e0.___cxa_is_pointer_type = function () {
    return (_0xd41ac4 = _0xc94e0.___cxa_is_pointer_type = _0xc94e0.asm.lk).apply(null, arguments);
  };
  var _0x52fe3e = _0xc94e0._malloc = function () {
    return (_0x52fe3e = _0xc94e0._malloc = _0xc94e0.asm.mk).apply(null, arguments);
  };
  var _0x289376 = _0xc94e0._free = function () {
    return (_0x289376 = _0xc94e0._free = _0xc94e0.asm.nk).apply(null, arguments);
  };
  var _0x483094 = _0xc94e0._memalign = function () {
    return (_0x483094 = _0xc94e0._memalign = _0xc94e0.asm.ok).apply(null, arguments);
  };
  var _0x544adf = _0xc94e0._memset = function () {
    return (_0x544adf = _0xc94e0._memset = _0xc94e0.asm.pk).apply(null, arguments);
  };
  var _0x4ddc32 = _0xc94e0._strlen = function () {
    return (_0x4ddc32 = _0xc94e0._strlen = _0xc94e0.asm.qk).apply(null, arguments);
  };
  var _0xd563f8 = _0xc94e0.dynCall_iidiiii = function () {
    return (_0xd563f8 = _0xc94e0.dynCall_iidiiii = _0xc94e0.asm.sk).apply(null, arguments);
  };
  var _0x475030 = _0xc94e0.dynCall_vii = function () {
    return (_0x475030 = _0xc94e0.dynCall_vii = _0xc94e0.asm.tk).apply(null, arguments);
  };
  var _0x456bc5 = _0xc94e0.dynCall_iii = function () {
    return (_0x456bc5 = _0xc94e0.dynCall_iii = _0xc94e0.asm.uk).apply(null, arguments);
  };
  var _0x25d073 = _0xc94e0.dynCall_ii = function () {
    return (_0x25d073 = _0xc94e0.dynCall_ii = _0xc94e0.asm.vk).apply(null, arguments);
  };
  var _0x116539 = _0xc94e0.dynCall_iiii = function () {
    return (_0x116539 = _0xc94e0.dynCall_iiii = _0xc94e0.asm.wk).apply(null, arguments);
  };
  var _0x515cbf = _0xc94e0.dynCall_jiji = function () {
    return (_0x515cbf = _0xc94e0.dynCall_jiji = _0xc94e0.asm.xk).apply(null, arguments);
  };
  var _0x3ce20f = _0xc94e0.dynCall_vi = function () {
    return (_0x3ce20f = _0xc94e0.dynCall_vi = _0xc94e0.asm.yk).apply(null, arguments);
  };
  var _0x27410c = _0xc94e0.dynCall_iiiii = function () {
    return (_0x27410c = _0xc94e0.dynCall_iiiii = _0xc94e0.asm.zk).apply(null, arguments);
  };
  var _0x1159bc = _0xc94e0.dynCall_viii = function () {
    return (_0x1159bc = _0xc94e0.dynCall_viii = _0xc94e0.asm.Ak).apply(null, arguments);
  };
  var _0x59ebba = _0xc94e0.dynCall_viiiiii = function () {
    return (_0x59ebba = _0xc94e0.dynCall_viiiiii = _0xc94e0.asm.Bk).apply(null, arguments);
  };
  var _0x2ac2f8 = _0xc94e0.dynCall_viiiii = function () {
    return (_0x2ac2f8 = _0xc94e0.dynCall_viiiii = _0xc94e0.asm.Ck).apply(null, arguments);
  };
  var _0x3edfb1 = _0xc94e0.dynCall_viiii = function () {
    return (_0x3edfb1 = _0xc94e0.dynCall_viiii = _0xc94e0.asm.Dk).apply(null, arguments);
  };
  var _0x4998d6 = _0xc94e0.dynCall_iiiiii = function () {
    return (_0x4998d6 = _0xc94e0.dynCall_iiiiii = _0xc94e0.asm.Ek).apply(null, arguments);
  };
  var _0x254d38 = _0xc94e0.dynCall_iiij = function () {
    return (_0x254d38 = _0xc94e0.dynCall_iiij = _0xc94e0.asm.Fk).apply(null, arguments);
  };
  var _0x55af51 = _0xc94e0.dynCall_v = function () {
    return (_0x55af51 = _0xc94e0.dynCall_v = _0xc94e0.asm.Gk).apply(null, arguments);
  };
  var _0x5cc7e8 = _0xc94e0.dynCall_i = function () {
    return (_0x5cc7e8 = _0xc94e0.dynCall_i = _0xc94e0.asm.Hk).apply(null, arguments);
  };
  var _0x55d899 = _0xc94e0.dynCall_iiiiiiii = function () {
    return (_0x55d899 = _0xc94e0.dynCall_iiiiiiii = _0xc94e0.asm.Ik).apply(null, arguments);
  };
  var _0x4d0aaf = _0xc94e0.dynCall_iiijiii = function () {
    return (_0x4d0aaf = _0xc94e0.dynCall_iiijiii = _0xc94e0.asm.Jk).apply(null, arguments);
  };
  var _0x176f9c = _0xc94e0.dynCall_iij = function () {
    return (_0x176f9c = _0xc94e0.dynCall_iij = _0xc94e0.asm.Kk).apply(null, arguments);
  };
  var _0x9a11c0 = _0xc94e0.dynCall_iiiiiii = function () {
    return (_0x9a11c0 = _0xc94e0.dynCall_iiiiiii = _0xc94e0.asm.Lk).apply(null, arguments);
  };
  var _0x971019 = _0xc94e0.dynCall_jii = function () {
    return (_0x971019 = _0xc94e0.dynCall_jii = _0xc94e0.asm.Mk).apply(null, arguments);
  };
  var _0x3a15ed = _0xc94e0.dynCall_viiiiiii = function () {
    return (_0x3a15ed = _0xc94e0.dynCall_viiiiiii = _0xc94e0.asm.Nk).apply(null, arguments);
  };
  var _0x4c8f69 = _0xc94e0.dynCall_diii = function () {
    return (_0x4c8f69 = _0xc94e0.dynCall_diii = _0xc94e0.asm.Ok).apply(null, arguments);
  };
  var _0x5351c1 = _0xc94e0.dynCall_jiii = function () {
    return (_0x5351c1 = _0xc94e0.dynCall_jiii = _0xc94e0.asm.Pk).apply(null, arguments);
  };
  var _0x151fc9 = _0xc94e0.dynCall_j = function () {
    return (_0x151fc9 = _0xc94e0.dynCall_j = _0xc94e0.asm.Qk).apply(null, arguments);
  };
  var _0x2e81b7 = _0xc94e0.dynCall_ji = function () {
    return (_0x2e81b7 = _0xc94e0.dynCall_ji = _0xc94e0.asm.Rk).apply(null, arguments);
  };
  var _0x383fb3 = _0xc94e0.dynCall_jijj = function () {
    return (_0x383fb3 = _0xc94e0.dynCall_jijj = _0xc94e0.asm.Sk).apply(null, arguments);
  };
  var _0xaf9b7d = _0xc94e0.dynCall_fiiffi = function () {
    return (_0xaf9b7d = _0xc94e0.dynCall_fiiffi = _0xc94e0.asm.Tk).apply(null, arguments);
  };
  var _0x2c2bd8 = _0xc94e0.dynCall_viiififii = function () {
    return (_0x2c2bd8 = _0xc94e0.dynCall_viiififii = _0xc94e0.asm.Uk).apply(null, arguments);
  };
  var _0x17f7a8 = _0xc94e0.dynCall_dii = function () {
    return (_0x17f7a8 = _0xc94e0.dynCall_dii = _0xc94e0.asm.Vk).apply(null, arguments);
  };
  var _0x23cefc = _0xc94e0.dynCall_viidi = function () {
    return (_0x23cefc = _0xc94e0.dynCall_viidi = _0xc94e0.asm.Wk).apply(null, arguments);
  };
  var _0x2e87ef = _0xc94e0.dynCall_diiid = function () {
    return (_0x2e87ef = _0xc94e0.dynCall_diiid = _0xc94e0.asm.Xk).apply(null, arguments);
  };
  var _0x17154b = _0xc94e0.dynCall_jiiij = function () {
    return (_0x17154b = _0xc94e0.dynCall_jiiij = _0xc94e0.asm.Yk).apply(null, arguments);
  };
  var _0x162b8e = _0xc94e0.dynCall_fiiif = function () {
    return (_0x162b8e = _0xc94e0.dynCall_fiiif = _0xc94e0.asm.Zk).apply(null, arguments);
  };
  var _0x5777b9 = _0xc94e0.dynCall_viiff = function () {
    return (_0x5777b9 = _0xc94e0.dynCall_viiff = _0xc94e0.asm._k).apply(null, arguments);
  };
  var _0x4b0b54 = _0xc94e0.dynCall_ddiii = function () {
    return (_0x4b0b54 = _0xc94e0.dynCall_ddiii = _0xc94e0.asm.$k).apply(null, arguments);
  };
  var _0x82b7c1 = _0xc94e0.dynCall_fiii = function () {
    return (_0x82b7c1 = _0xc94e0.dynCall_fiii = _0xc94e0.asm.al).apply(null, arguments);
  };
  var _0x4b51e3 = _0xc94e0.dynCall_vijii = function () {
    return (_0x4b51e3 = _0xc94e0.dynCall_vijii = _0xc94e0.asm.bl).apply(null, arguments);
  };
  var _0x444cee = _0xc94e0.dynCall_viiij = function () {
    return (_0x444cee = _0xc94e0.dynCall_viiij = _0xc94e0.asm.cl).apply(null, arguments);
  };
  var _0x276c00 = _0xc94e0.dynCall_fii = function () {
    return (_0x276c00 = _0xc94e0.dynCall_fii = _0xc94e0.asm.dl).apply(null, arguments);
  };
  var _0x233450 = _0xc94e0.dynCall_viiiiiiiiifi = function () {
    return (_0x233450 = _0xc94e0.dynCall_viiiiiiiiifi = _0xc94e0.asm.el).apply(null, arguments);
  };
  var _0x65809 = _0xc94e0.dynCall_iiiiiiiiiiiii = function () {
    return (_0x65809 = _0xc94e0.dynCall_iiiiiiiiiiiii = _0xc94e0.asm.fl).apply(null, arguments);
  };
  var _0x47d0ce = _0xc94e0.dynCall_fiiii = function () {
    return (_0x47d0ce = _0xc94e0.dynCall_fiiii = _0xc94e0.asm.gl).apply(null, arguments);
  };
  var _0x1b86db = _0xc94e0.dynCall_iiiifi = function () {
    return (_0x1b86db = _0xc94e0.dynCall_iiiifi = _0xc94e0.asm.hl).apply(null, arguments);
  };
  var _0x2414f4 = _0xc94e0.dynCall_viif = function () {
    return (_0x2414f4 = _0xc94e0.dynCall_viif = _0xc94e0.asm.il).apply(null, arguments);
  };
  var _0x55cea5 = _0xc94e0.dynCall_vifi = function () {
    return (_0x55cea5 = _0xc94e0.dynCall_vifi = _0xc94e0.asm.jl).apply(null, arguments);
  };
  var _0x3b629e = _0xc94e0.dynCall_iijji = function () {
    return (_0x3b629e = _0xc94e0.dynCall_iijji = _0xc94e0.asm.kl).apply(null, arguments);
  };
  var _0x5ba9dc = _0xc94e0.dynCall_iiddi = function () {
    return (_0x5ba9dc = _0xc94e0.dynCall_iiddi = _0xc94e0.asm.ll).apply(null, arguments);
  };
  var _0x1c2c12 = _0xc94e0.dynCall_iiffi = function () {
    return (_0x1c2c12 = _0xc94e0.dynCall_iiffi = _0xc94e0.asm.ml).apply(null, arguments);
  };
  var _0x176d50 = _0xc94e0.dynCall_fi = function () {
    return (_0x176d50 = _0xc94e0.dynCall_fi = _0xc94e0.asm.nl).apply(null, arguments);
  };
  var _0x4d90c0 = _0xc94e0.dynCall_iiifi = function () {
    return (_0x4d90c0 = _0xc94e0.dynCall_iiifi = _0xc94e0.asm.ol).apply(null, arguments);
  };
  var _0x4d1f9d = _0xc94e0.dynCall_iiiiidii = function () {
    return (_0x4d1f9d = _0xc94e0.dynCall_iiiiidii = _0xc94e0.asm.pl).apply(null, arguments);
  };
  var _0x1782da = _0xc94e0.dynCall_iiiiiiiii = function () {
    return (_0x1782da = _0xc94e0.dynCall_iiiiiiiii = _0xc94e0.asm.ql).apply(null, arguments);
  };
  var _0x2123ed = _0xc94e0.dynCall_viiffi = function () {
    return (_0x2123ed = _0xc94e0.dynCall_viiffi = _0xc94e0.asm.rl).apply(null, arguments);
  };
  var _0x30a650 = _0xc94e0.dynCall_iiiifii = function () {
    return (_0x30a650 = _0xc94e0.dynCall_iiiifii = _0xc94e0.asm.sl).apply(null, arguments);
  };
  var _0x10ba94 = _0xc94e0.dynCall_iiifii = function () {
    return (_0x10ba94 = _0xc94e0.dynCall_iiifii = _0xc94e0.asm.tl).apply(null, arguments);
  };
  var _0x2bec6c = _0xc94e0.dynCall_viiiifii = function () {
    return (_0x2bec6c = _0xc94e0.dynCall_viiiifii = _0xc94e0.asm.ul).apply(null, arguments);
  };
  var _0x445de4 = _0xc94e0.dynCall_vifii = function () {
    return (_0x445de4 = _0xc94e0.dynCall_vifii = _0xc94e0.asm.vl).apply(null, arguments);
  };
  var _0x42d5b5 = _0xc94e0.dynCall_iiif = function () {
    return (_0x42d5b5 = _0xc94e0.dynCall_iiif = _0xc94e0.asm.wl).apply(null, arguments);
  };
  var _0x32447c = _0xc94e0.dynCall_iiiiidi = function () {
    return (_0x32447c = _0xc94e0.dynCall_iiiiidi = _0xc94e0.asm.xl).apply(null, arguments);
  };
  var _0x45b2d0 = _0xc94e0.dynCall_viifi = function () {
    return (_0x45b2d0 = _0xc94e0.dynCall_viifi = _0xc94e0.asm.yl).apply(null, arguments);
  };
  var _0x570629 = _0xc94e0.dynCall_viffffi = function () {
    return (_0x570629 = _0xc94e0.dynCall_viffffi = _0xc94e0.asm.zl).apply(null, arguments);
  };
  var _0x13feea = _0xc94e0.dynCall_ifi = function () {
    return (_0x13feea = _0xc94e0.dynCall_ifi = _0xc94e0.asm.Al).apply(null, arguments);
  };
  var _0x346c11 = _0xc94e0.dynCall_idi = function () {
    return (_0x346c11 = _0xc94e0.dynCall_idi = _0xc94e0.asm.Bl).apply(null, arguments);
  };
  var _0x5ed8f7 = _0xc94e0.dynCall_viiiiiiii = function () {
    return (_0x5ed8f7 = _0xc94e0.dynCall_viiiiiiii = _0xc94e0.asm.Cl).apply(null, arguments);
  };
  var _0x423fed = _0xc94e0.dynCall_viiiiiiiii = function () {
    return (_0x423fed = _0xc94e0.dynCall_viiiiiiiii = _0xc94e0.asm.Dl).apply(null, arguments);
  };
  var _0x4c5718 = _0xc94e0.dynCall_jiiii = function () {
    return (_0x4c5718 = _0xc94e0.dynCall_jiiii = _0xc94e0.asm.El).apply(null, arguments);
  };
  var _0xbe5981 = _0xc94e0.dynCall_viiiiiiiiiiii = function () {
    return (_0xbe5981 = _0xc94e0.dynCall_viiiiiiiiiiii = _0xc94e0.asm.Fl).apply(null, arguments);
  };
  var _0x5db324 = _0xc94e0.dynCall_iiiiji = function () {
    return (_0x5db324 = _0xc94e0.dynCall_iiiiji = _0xc94e0.asm.Gl).apply(null, arguments);
  };
  var _0x180e43 = _0xc94e0.dynCall_viiiiiiiiiiiii = function () {
    return (_0x180e43 = _0xc94e0.dynCall_viiiiiiiiiiiii = _0xc94e0.asm.Hl).apply(null, arguments);
  };
  var _0x3c49a6 = _0xc94e0.dynCall_viji = function () {
    return (_0x3c49a6 = _0xc94e0.dynCall_viji = _0xc94e0.asm.Il).apply(null, arguments);
  };
  var _0x2bd8ba = _0xc94e0.dynCall_vidi = function () {
    return (_0x2bd8ba = _0xc94e0.dynCall_vidi = _0xc94e0.asm.Jl).apply(null, arguments);
  };
  var _0x5b8f2c = _0xc94e0.dynCall_fffi = function () {
    return (_0x5b8f2c = _0xc94e0.dynCall_fffi = _0xc94e0.asm.Kl).apply(null, arguments);
  };
  var _0x4e01ce = _0xc94e0.dynCall_ijji = function () {
    return (_0x4e01ce = _0xc94e0.dynCall_ijji = _0xc94e0.asm.Ll).apply(null, arguments);
  };
  var _0x5047d2 = _0xc94e0.dynCall_jji = function () {
    return (_0x5047d2 = _0xc94e0.dynCall_jji = _0xc94e0.asm.Ml).apply(null, arguments);
  };
  var _0x894abe = _0xc94e0.dynCall_jjji = function () {
    return (_0x894abe = _0xc94e0.dynCall_jjji = _0xc94e0.asm.Nl).apply(null, arguments);
  };
  var _0x40eb90 = _0xc94e0.dynCall_dddi = function () {
    return (_0x40eb90 = _0xc94e0.dynCall_dddi = _0xc94e0.asm.Ol).apply(null, arguments);
  };
  var _0x233a7d = _0xc94e0.dynCall_diiii = function () {
    return (_0x233a7d = _0xc94e0.dynCall_diiii = _0xc94e0.asm.Pl).apply(null, arguments);
  };
  var _0x21204b = _0xc94e0.dynCall_iidi = function () {
    return (_0x21204b = _0xc94e0.dynCall_iidi = _0xc94e0.asm.Ql).apply(null, arguments);
  };
  var _0x1d388e = _0xc94e0.dynCall_iifi = function () {
    return (_0x1d388e = _0xc94e0.dynCall_iifi = _0xc94e0.asm.Rl).apply(null, arguments);
  };
  var _0x19bb96 = _0xc94e0.dynCall_viiiiiiiiii = function () {
    return (_0x19bb96 = _0xc94e0.dynCall_viiiiiiiiii = _0xc94e0.asm.Sl).apply(null, arguments);
  };
  var _0x148bc2 = _0xc94e0.dynCall_jiiiid = function () {
    return (_0x148bc2 = _0xc94e0.dynCall_jiiiid = _0xc94e0.asm.Tl).apply(null, arguments);
  };
  var _0x3c93da = _0xc94e0.dynCall_viiiifi = function () {
    return (_0x3c93da = _0xc94e0.dynCall_viiiifi = _0xc94e0.asm.Ul).apply(null, arguments);
  };
  var _0x1744d4 = _0xc94e0.dynCall_iiji = function () {
    return (_0x1744d4 = _0xc94e0.dynCall_iiji = _0xc94e0.asm.Vl).apply(null, arguments);
  };
  var _0x30efb6 = _0xc94e0.dynCall_jidi = function () {
    return (_0x30efb6 = _0xc94e0.dynCall_jidi = _0xc94e0.asm.Wl).apply(null, arguments);
  };
  var _0x15c2b8 = _0xc94e0.dynCall_iijii = function () {
    return (_0x15c2b8 = _0xc94e0.dynCall_iijii = _0xc94e0.asm.Xl).apply(null, arguments);
  };
  var _0xe34432 = _0xc94e0.dynCall_viiifi = function () {
    return (_0xe34432 = _0xc94e0.dynCall_viiifi = _0xc94e0.asm.Yl).apply(null, arguments);
  };
  var _0x2f4f05 = _0xc94e0.dynCall_jiiji = function () {
    return (_0x2f4f05 = _0xc94e0.dynCall_jiiji = _0xc94e0.asm.Zl).apply(null, arguments);
  };
  var _0x50dae2 = _0xc94e0.dynCall_viijiiijiiii = function () {
    return (_0x50dae2 = _0xc94e0.dynCall_viijiiijiiii = _0xc94e0.asm._l).apply(null, arguments);
  };
  var _0x5845cc = _0xc94e0.dynCall_jdi = function () {
    return (_0x5845cc = _0xc94e0.dynCall_jdi = _0xc94e0.asm.$l).apply(null, arguments);
  };
  var _0x3f22ee = _0xc94e0.dynCall_vijjji = function () {
    return (_0x3f22ee = _0xc94e0.dynCall_vijjji = _0xc94e0.asm.am).apply(null, arguments);
  };
  var _0x15209c = _0xc94e0.dynCall_iiiiij = function () {
    return (_0x15209c = _0xc94e0.dynCall_iiiiij = _0xc94e0.asm.bm).apply(null, arguments);
  };
  var _0x40e845 = _0xc94e0.dynCall_iiiiiiiiiji = function () {
    return (_0x40e845 = _0xc94e0.dynCall_iiiiiiiiiji = _0xc94e0.asm.cm).apply(null, arguments);
  };
  var _0x51a0ea = _0xc94e0.dynCall_vji = function () {
    return (_0x51a0ea = _0xc94e0.dynCall_vji = _0xc94e0.asm.dm).apply(null, arguments);
  };
  var _0x92eab1 = _0xc94e0.dynCall_iiiiiiiiii = function () {
    return (_0x92eab1 = _0xc94e0.dynCall_iiiiiiiiii = _0xc94e0.asm.em).apply(null, arguments);
  };
  var _0x4af530 = _0xc94e0.dynCall_jjii = function () {
    return (_0x4af530 = _0xc94e0.dynCall_jjii = _0xc94e0.asm.fm).apply(null, arguments);
  };
  var _0xb2786a = _0xc94e0.dynCall_dji = function () {
    return (_0xb2786a = _0xc94e0.dynCall_dji = _0xc94e0.asm.gm).apply(null, arguments);
  };
  var _0x32c776 = _0xc94e0.dynCall_iji = function () {
    return (_0x32c776 = _0xc94e0.dynCall_iji = _0xc94e0.asm.hm).apply(null, arguments);
  };
  var _0x57f2d5 = _0xc94e0.dynCall_viiji = function () {
    return (_0x57f2d5 = _0xc94e0.dynCall_viiji = _0xc94e0.asm.im).apply(null, arguments);
  };
  var _0x12a4ed = _0xc94e0.dynCall_iiiiiiiiiii = function () {
    return (_0x12a4ed = _0xc94e0.dynCall_iiiiiiiiiii = _0xc94e0.asm.jm).apply(null, arguments);
  };
  var _0x2a73ca = _0xc94e0.dynCall_viiiiiiifiifii = function () {
    return (_0x2a73ca = _0xc94e0.dynCall_viiiiiiifiifii = _0xc94e0.asm.km).apply(null, arguments);
  };
  var _0x3dc4ed = _0xc94e0.dynCall_viiiiiiifddfii = function () {
    return (_0x3dc4ed = _0xc94e0.dynCall_viiiiiiifddfii = _0xc94e0.asm.lm).apply(null, arguments);
  };
  var _0x5c0eac = _0xc94e0.dynCall_viiiiiiifjjfii = function () {
    return (_0x5c0eac = _0xc94e0.dynCall_viiiiiiifjjfii = _0xc94e0.asm.mm).apply(null, arguments);
  };
  var _0x2601ba = _0xc94e0.dynCall_viiiiiiiffffii = function () {
    return (_0x2601ba = _0xc94e0.dynCall_viiiiiiiffffii = _0xc94e0.asm.nm).apply(null, arguments);
  };
  var _0x126aee = _0xc94e0.dynCall_viiiiiiiiiii = function () {
    return (_0x126aee = _0xc94e0.dynCall_viiiiiiiiiii = _0xc94e0.asm.om).apply(null, arguments);
  };
  var _0x6c5e19 = _0xc94e0.dynCall_iiijii = function () {
    return (_0x6c5e19 = _0xc94e0.dynCall_iiijii = _0xc94e0.asm.pm).apply(null, arguments);
  };
  var _0x20997 = _0xc94e0.dynCall_iijiiii = function () {
    return (_0x20997 = _0xc94e0.dynCall_iijiiii = _0xc94e0.asm.qm).apply(null, arguments);
  };
  var _0x3ddcaa = _0xc94e0.dynCall_jijiii = function () {
    return (_0x3ddcaa = _0xc94e0.dynCall_jijiii = _0xc94e0.asm.rm).apply(null, arguments);
  };
  var _0x434929 = _0xc94e0.dynCall_viijii = function () {
    return (_0x434929 = _0xc94e0.dynCall_viijii = _0xc94e0.asm.sm).apply(null, arguments);
  };
  var _0x3b94b8 = _0xc94e0.dynCall_iijiiiiii = function () {
    return (_0x3b94b8 = _0xc94e0.dynCall_iijiiiiii = _0xc94e0.asm.tm).apply(null, arguments);
  };
  var _0x276a60 = _0xc94e0.dynCall_iijjiiiiii = function () {
    return (_0x276a60 = _0xc94e0.dynCall_iijjiiiiii = _0xc94e0.asm.um).apply(null, arguments);
  };
  var _0x4e3ed1 = _0xc94e0.dynCall_iiiijjii = function () {
    return (_0x4e3ed1 = _0xc94e0.dynCall_iiiijjii = _0xc94e0.asm.vm).apply(null, arguments);
  };
  var _0x5cb30c = _0xc94e0.dynCall_iijiii = function () {
    return (_0x5cb30c = _0xc94e0.dynCall_iijiii = _0xc94e0.asm.wm).apply(null, arguments);
  };
  var _0x40ed0e = _0xc94e0.dynCall_viiiji = function () {
    return (_0x40ed0e = _0xc94e0.dynCall_viiiji = _0xc94e0.asm.xm).apply(null, arguments);
  };
  var _0xbda774 = _0xc94e0.dynCall_iiiiiiiiiiii = function () {
    return (_0xbda774 = _0xc94e0.dynCall_iiiiiiiiiiii = _0xc94e0.asm.ym).apply(null, arguments);
  };
  var _0x5dfeef = _0xc94e0.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x5dfeef = _0xc94e0.dynCall_iiiiiiiiiiiiii = _0xc94e0.asm.zm).apply(null, arguments);
  };
  var _0x27dc6a = _0xc94e0.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x27dc6a = _0xc94e0.dynCall_iiiiiiiiiiiiiii = _0xc94e0.asm.Am).apply(null, arguments);
  };
  var _0x5b303e = _0xc94e0.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x5b303e = _0xc94e0.dynCall_iiiiiiiiiiiiiiii = _0xc94e0.asm.Bm).apply(null, arguments);
  };
  var _0x91a725 = _0xc94e0.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x91a725 = _0xc94e0.dynCall_iiiiiiiiiiiiiiiii = _0xc94e0.asm.Cm).apply(null, arguments);
  };
  var _0x23b39e = _0xc94e0.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x23b39e = _0xc94e0.dynCall_iiiiiiiiiiiiiiiiii = _0xc94e0.asm.Dm).apply(null, arguments);
  };
  var _0x2cb7b4 = _0xc94e0.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x2cb7b4 = _0xc94e0.dynCall_iiiiiiiiiiiiiiiiiii = _0xc94e0.asm.Em).apply(null, arguments);
  };
  var _0x1cba15 = _0xc94e0.dynCall_fifi = function () {
    return (_0x1cba15 = _0xc94e0.dynCall_fifi = _0xc94e0.asm.Fm).apply(null, arguments);
  };
  var _0x5a0b8b = _0xc94e0.dynCall_fiifi = function () {
    return (_0x5a0b8b = _0xc94e0.dynCall_fiifi = _0xc94e0.asm.Gm).apply(null, arguments);
  };
  var _0x1401dd = _0xc94e0.dynCall_viij = function () {
    return (_0x1401dd = _0xc94e0.dynCall_viij = _0xc94e0.asm.Hm).apply(null, arguments);
  };
  var _0x5a1b8f = _0xc94e0.dynCall_jiiiiiiiiii = function () {
    return (_0x5a1b8f = _0xc94e0.dynCall_jiiiiiiiiii = _0xc94e0.asm.Im).apply(null, arguments);
  };
  var _0x41ec3e = _0xc94e0.dynCall_viiiijiii = function () {
    return (_0x41ec3e = _0xc94e0.dynCall_viiiijiii = _0xc94e0.asm.Jm).apply(null, arguments);
  };
  var _0x46b69e = _0xc94e0.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x46b69e = _0xc94e0.dynCall_viiiiiiiiiiiiii = _0xc94e0.asm.Km).apply(null, arguments);
  };
  var _0x849ac7 = _0xc94e0.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x849ac7 = _0xc94e0.dynCall_viiiiiiiiiiiiiii = _0xc94e0.asm.Lm).apply(null, arguments);
  };
  var _0x5ce3af = _0xc94e0.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x5ce3af = _0xc94e0.dynCall_viiiiiiiiiiiiiiii = _0xc94e0.asm.Mm).apply(null, arguments);
  };
  var _0x132f51 = _0xc94e0.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x132f51 = _0xc94e0.dynCall_viiiiiiiiiiiiiiiii = _0xc94e0.asm.Nm).apply(null, arguments);
  };
  var _0x5b44fc = _0xc94e0.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x5b44fc = _0xc94e0.dynCall_viiiiiiiiiiiiiiiiii = _0xc94e0.asm.Om).apply(null, arguments);
  };
  var _0x2195a2 = _0xc94e0.dynCall_viiidi = function () {
    return (_0x2195a2 = _0xc94e0.dynCall_viiidi = _0xc94e0.asm.Pm).apply(null, arguments);
  };
  var _0x3f802b = _0xc94e0.dynCall_jiiiii = function () {
    return (_0x3f802b = _0xc94e0.dynCall_jiiiii = _0xc94e0.asm.Qm).apply(null, arguments);
  };
  var _0x17fd36 = _0xc94e0.dynCall_viijiiiiii = function () {
    return (_0x17fd36 = _0xc94e0.dynCall_viijiiiiii = _0xc94e0.asm.Rm).apply(null, arguments);
  };
  var _0x22ac6f = _0xc94e0.dynCall_vijiii = function () {
    return (_0x22ac6f = _0xc94e0.dynCall_vijiii = _0xc94e0.asm.Sm).apply(null, arguments);
  };
  var _0x5b5500 = _0xc94e0.dynCall_vjjjiiii = function () {
    return (_0x5b5500 = _0xc94e0.dynCall_vjjjiiii = _0xc94e0.asm.Tm).apply(null, arguments);
  };
  var _0x538742 = _0xc94e0.dynCall_vjiiiii = function () {
    return (_0x538742 = _0xc94e0.dynCall_vjiiiii = _0xc94e0.asm.Um).apply(null, arguments);
  };
  var _0x5b1747 = _0xc94e0.dynCall_fiffffi = function () {
    return (_0x5b1747 = _0xc94e0.dynCall_fiffffi = _0xc94e0.asm.Vm).apply(null, arguments);
  };
  var _0x49a589 = _0xc94e0.dynCall_iiiffi = function () {
    return (_0x49a589 = _0xc94e0.dynCall_iiiffi = _0xc94e0.asm.Wm).apply(null, arguments);
  };
  var _0x281026 = _0xc94e0.dynCall_iifii = function () {
    return (_0x281026 = _0xc94e0.dynCall_iifii = _0xc94e0.asm.Xm).apply(null, arguments);
  };
  var _0x195b39 = _0xc94e0.dynCall_iiffii = function () {
    return (_0x195b39 = _0xc94e0.dynCall_iiffii = _0xc94e0.asm.Ym).apply(null, arguments);
  };
  var _0x587bc3 = _0xc94e0.dynCall_iiifiii = function () {
    return (_0x587bc3 = _0xc94e0.dynCall_iiifiii = _0xc94e0.asm.Zm).apply(null, arguments);
  };
  var _0x52ad59 = _0xc94e0.dynCall_iiififii = function () {
    return (_0x52ad59 = _0xc94e0.dynCall_iiififii = _0xc94e0.asm._m).apply(null, arguments);
  };
  var _0x539a4f = _0xc94e0.dynCall_iiifiiiii = function () {
    return (_0x539a4f = _0xc94e0.dynCall_iiifiiiii = _0xc94e0.asm.$m).apply(null, arguments);
  };
  var _0x1222ea = _0xc94e0.dynCall_iiffifiii = function () {
    return (_0x1222ea = _0xc94e0.dynCall_iiffifiii = _0xc94e0.asm.an).apply(null, arguments);
  };
  var _0x28dc5e = _0xc94e0.dynCall_iifiifiii = function () {
    return (_0x28dc5e = _0xc94e0.dynCall_iifiifiii = _0xc94e0.asm.bn).apply(null, arguments);
  };
  var _0x337562 = _0xc94e0.dynCall_iiiifiii = function () {
    return (_0x337562 = _0xc94e0.dynCall_iiiifiii = _0xc94e0.asm.cn).apply(null, arguments);
  };
  var _0x218ca5 = _0xc94e0.dynCall_iiifiiii = function () {
    return (_0x218ca5 = _0xc94e0.dynCall_iiifiiii = _0xc94e0.asm.dn).apply(null, arguments);
  };
  var _0x484ffe = _0xc94e0.dynCall_iiiiifii = function () {
    return (_0x484ffe = _0xc94e0.dynCall_iiiiifii = _0xc94e0.asm.en).apply(null, arguments);
  };
  var _0xaf2141 = _0xc94e0.dynCall_iifiifffii = function () {
    return (_0xaf2141 = _0xc94e0.dynCall_iifiifffii = _0xc94e0.asm.fn).apply(null, arguments);
  };
  var _0xc50aad = _0xc94e0.dynCall_iiffffi = function () {
    return (_0xc50aad = _0xc94e0.dynCall_iiffffi = _0xc94e0.asm.gn).apply(null, arguments);
  };
  var _0x22454b = _0xc94e0.dynCall_vifffii = function () {
    return (_0x22454b = _0xc94e0.dynCall_vifffii = _0xc94e0.asm.hn).apply(null, arguments);
  };
  var _0xa04406 = _0xc94e0.dynCall_viifffi = function () {
    return (_0xa04406 = _0xc94e0.dynCall_viifffi = _0xc94e0.asm.jn).apply(null, arguments);
  };
  var _0x38426a = _0xc94e0.dynCall_viiiffi = function () {
    return (_0x38426a = _0xc94e0.dynCall_viiiffi = _0xc94e0.asm.kn).apply(null, arguments);
  };
  var _0x328e4b = _0xc94e0.dynCall_viiififfi = function () {
    return (_0x328e4b = _0xc94e0.dynCall_viiififfi = _0xc94e0.asm.ln).apply(null, arguments);
  };
  var _0x10f37f = _0xc94e0.dynCall_viiififfiffi = function () {
    return (_0x10f37f = _0xc94e0.dynCall_viiififfiffi = _0xc94e0.asm.mn).apply(null, arguments);
  };
  var _0x1f43b3 = _0xc94e0.dynCall_viiiififi = function () {
    return (_0x1f43b3 = _0xc94e0.dynCall_viiiififi = _0xc94e0.asm.nn).apply(null, arguments);
  };
  var _0x3a2b5b = _0xc94e0.dynCall_didddi = function () {
    return (_0x3a2b5b = _0xc94e0.dynCall_didddi = _0xc94e0.asm.on).apply(null, arguments);
  };
  var _0x281b54 = _0xc94e0.dynCall_fdddi = function () {
    return (_0x281b54 = _0xc94e0.dynCall_fdddi = _0xc94e0.asm.pn).apply(null, arguments);
  };
  var _0x4e6664 = _0xc94e0.dynCall_viffifiiiiii = function () {
    return (_0x4e6664 = _0xc94e0.dynCall_viffifiiiiii = _0xc94e0.asm.qn).apply(null, arguments);
  };
  var _0x166bf1 = _0xc94e0.dynCall_vidii = function () {
    return (_0x166bf1 = _0xc94e0.dynCall_vidii = _0xc94e0.asm.rn).apply(null, arguments);
  };
  var _0x39e60d = _0xc94e0.dynCall_iifffi = function () {
    return (_0x39e60d = _0xc94e0.dynCall_iifffi = _0xc94e0.asm.sn).apply(null, arguments);
  };
  var _0x13cf79 = _0xc94e0.dynCall_iiffffii = function () {
    return (_0x13cf79 = _0xc94e0.dynCall_iiffffii = _0xc94e0.asm.tn).apply(null, arguments);
  };
  var _0x587886 = _0xc94e0.dynCall_viiiijii = function () {
    return (_0x587886 = _0xc94e0.dynCall_viiiijii = _0xc94e0.asm.un).apply(null, arguments);
  };
  var _0x2869be = _0xc94e0.dynCall_vifiiii = function () {
    return (_0x2869be = _0xc94e0.dynCall_vifiiii = _0xc94e0.asm.vn).apply(null, arguments);
  };
  var _0x56f220 = _0xc94e0.dynCall_vfi = function () {
    return (_0x56f220 = _0xc94e0.dynCall_vfi = _0xc94e0.asm.wn).apply(null, arguments);
  };
  var _0x30bc07 = _0xc94e0.dynCall_fiifii = function () {
    return (_0x30bc07 = _0xc94e0.dynCall_fiifii = _0xc94e0.asm.xn).apply(null, arguments);
  };
  var _0x1196df = _0xc94e0.dynCall_viiiiiifiifiii = function () {
    return (_0x1196df = _0xc94e0.dynCall_viiiiiifiifiii = _0xc94e0.asm.yn).apply(null, arguments);
  };
  var _0x50753e = _0xc94e0.dynCall_iiffffiii = function () {
    return (_0x50753e = _0xc94e0.dynCall_iiffffiii = _0xc94e0.asm.zn).apply(null, arguments);
  };
  var _0x332b4f = _0xc94e0.dynCall_vffi = function () {
    return (_0x332b4f = _0xc94e0.dynCall_vffi = _0xc94e0.asm.An).apply(null, arguments);
  };
  var _0x1c5f28 = _0xc94e0.dynCall_iiidfi = function () {
    return (_0x1c5f28 = _0xc94e0.dynCall_iiidfi = _0xc94e0.asm.Bn).apply(null, arguments);
  };
  var _0x3e1845 = _0xc94e0.dynCall_iiijfi = function () {
    return (_0x3e1845 = _0xc94e0.dynCall_iiijfi = _0xc94e0.asm.Cn).apply(null, arguments);
  };
  var _0x3a2489 = _0xc94e0.dynCall_iiiffii = function () {
    return (_0x3a2489 = _0xc94e0.dynCall_iiiffii = _0xc94e0.asm.Dn).apply(null, arguments);
  };
  var _0x216eed = _0xc94e0.dynCall_iiiififi = function () {
    return (_0x216eed = _0xc94e0.dynCall_iiiififi = _0xc94e0.asm.En).apply(null, arguments);
  };
  var _0x28961c = _0xc94e0.dynCall_iiiffifiii = function () {
    return (_0x28961c = _0xc94e0.dynCall_iiiffifiii = _0xc94e0.asm.Fn).apply(null, arguments);
  };
  var _0x3e36ab = _0xc94e0.dynCall_iiifiifii = function () {
    return (_0x3e36ab = _0xc94e0.dynCall_iiifiifii = _0xc94e0.asm.Gn).apply(null, arguments);
  };
  var _0x4b97a5 = _0xc94e0.dynCall_iiifiifiiii = function () {
    return (_0x4b97a5 = _0xc94e0.dynCall_iiifiifiiii = _0xc94e0.asm.Hn).apply(null, arguments);
  };
  var _0x7bf528 = _0xc94e0.dynCall_ifii = function () {
    return (_0x7bf528 = _0xc94e0.dynCall_ifii = _0xc94e0.asm.In).apply(null, arguments);
  };
  var _0x2d0a59 = _0xc94e0.dynCall_ifffii = function () {
    return (_0x2d0a59 = _0xc94e0.dynCall_ifffii = _0xc94e0.asm.Jn).apply(null, arguments);
  };
  var _0x4f5727 = _0xc94e0.dynCall_ffffii = function () {
    return (_0x4f5727 = _0xc94e0.dynCall_ffffii = _0xc94e0.asm.Kn).apply(null, arguments);
  };
  var _0x4fa63c = _0xc94e0.dynCall_ffffifi = function () {
    return (_0x4fa63c = _0xc94e0.dynCall_ffffifi = _0xc94e0.asm.Ln).apply(null, arguments);
  };
  var _0x1417d3 = _0xc94e0.dynCall_ffffiffi = function () {
    return (_0x1417d3 = _0xc94e0.dynCall_ffffiffi = _0xc94e0.asm.Mn).apply(null, arguments);
  };
  var _0x33249f = _0xc94e0.dynCall_ifiii = function () {
    return (_0x33249f = _0xc94e0.dynCall_ifiii = _0xc94e0.asm.Nn).apply(null, arguments);
  };
  var _0x3c9de4 = _0xc94e0.dynCall_iifiiiiii = function () {
    return (_0x3c9de4 = _0xc94e0.dynCall_iifiiiiii = _0xc94e0.asm.On).apply(null, arguments);
  };
  var _0x3fdeda = _0xc94e0.dynCall_iifiiiii = function () {
    return (_0x3fdeda = _0xc94e0.dynCall_iifiiiii = _0xc94e0.asm.Pn).apply(null, arguments);
  };
  var _0x172b3b = _0xc94e0.dynCall_iiffiiiii = function () {
    return (_0x172b3b = _0xc94e0.dynCall_iiffiiiii = _0xc94e0.asm.Qn).apply(null, arguments);
  };
  var _0x1e441c = _0xc94e0.dynCall_iiffifii = function () {
    return (_0x1e441c = _0xc94e0.dynCall_iiffifii = _0xc94e0.asm.Rn).apply(null, arguments);
  };
  var _0x50c493 = _0xc94e0.dynCall_iifiifii = function () {
    return (_0x50c493 = _0xc94e0.dynCall_iifiifii = _0xc94e0.asm.Sn).apply(null, arguments);
  };
  var _0x4563c5 = _0xc94e0.dynCall_iififi = function () {
    return (_0x4563c5 = _0xc94e0.dynCall_iififi = _0xc94e0.asm.Tn).apply(null, arguments);
  };
  var _0x21a9b2 = _0xc94e0.dynCall_iiififi = function () {
    return (_0x21a9b2 = _0xc94e0.dynCall_iiififi = _0xc94e0.asm.Un).apply(null, arguments);
  };
  var _0x4b5020 = _0xc94e0.dynCall_iifiii = function () {
    return (_0x4b5020 = _0xc94e0.dynCall_iifiii = _0xc94e0.asm.Vn).apply(null, arguments);
  };
  var _0xc50cc5 = _0xc94e0.dynCall_iiiiifiiii = function () {
    return (_0xc50cc5 = _0xc94e0.dynCall_iiiiifiiii = _0xc94e0.asm.Wn).apply(null, arguments);
  };
  var _0x388414 = _0xc94e0.dynCall_viidiii = function () {
    return (_0x388414 = _0xc94e0.dynCall_viidiii = _0xc94e0.asm.Xn).apply(null, arguments);
  };
  var _0x3f3b48 = _0xc94e0.dynCall_diidi = function () {
    return (_0x3f3b48 = _0xc94e0.dynCall_diidi = _0xc94e0.asm.Yn).apply(null, arguments);
  };
  var _0x53625f = _0xc94e0.dynCall_fiifdi = function () {
    return (_0x53625f = _0xc94e0.dynCall_fiifdi = _0xc94e0.asm.Zn).apply(null, arguments);
  };
  var _0x314a7f = _0xc94e0.dynCall_viiiiiifddfiii = function () {
    return (_0x314a7f = _0xc94e0.dynCall_viiiiiifddfiii = _0xc94e0.asm._n).apply(null, arguments);
  };
  var _0x119339 = _0xc94e0.dynCall_viijiii = function () {
    return (_0x119339 = _0xc94e0.dynCall_viijiii = _0xc94e0.asm.$n).apply(null, arguments);
  };
  var _0x4c9410 = _0xc94e0.dynCall_fiifji = function () {
    return (_0x4c9410 = _0xc94e0.dynCall_fiifji = _0xc94e0.asm.ao).apply(null, arguments);
  };
  var _0x1fb2d3 = _0xc94e0.dynCall_viiiiiifjjfiii = function () {
    return (_0x1fb2d3 = _0xc94e0.dynCall_viiiiiifjjfiii = _0xc94e0.asm.bo).apply(null, arguments);
  };
  var _0x5ced82 = _0xc94e0.dynCall_viiiifiii = function () {
    return (_0x5ced82 = _0xc94e0.dynCall_viiiifiii = _0xc94e0.asm.co).apply(null, arguments);
  };
  var _0x49d875 = _0xc94e0.dynCall_viifiii = function () {
    return (_0x49d875 = _0xc94e0.dynCall_viifiii = _0xc94e0.asm.eo).apply(null, arguments);
  };
  var _0x89e860 = _0xc94e0.dynCall_viiiiiiffffiii = function () {
    return (_0x89e860 = _0xc94e0.dynCall_viiiiiiffffiii = _0xc94e0.asm.fo).apply(null, arguments);
  };
  var _0x288b45 = _0xc94e0.dynCall_viifiiii = function () {
    return (_0x288b45 = _0xc94e0.dynCall_viifiiii = _0xc94e0.asm.go).apply(null, arguments);
  };
  var _0x415f27 = _0xc94e0.dynCall_viifii = function () {
    return (_0x415f27 = _0xc94e0.dynCall_viifii = _0xc94e0.asm.ho).apply(null, arguments);
  };
  var _0x592f6e = _0xc94e0.dynCall_viffi = function () {
    return (_0x592f6e = _0xc94e0.dynCall_viffi = _0xc94e0.asm.io).apply(null, arguments);
  };
  var _0x1aacdb = _0xc94e0.dynCall_iiiiifiii = function () {
    return (_0x1aacdb = _0xc94e0.dynCall_iiiiifiii = _0xc94e0.asm.jo).apply(null, arguments);
  };
  var _0x556630 = _0xc94e0.dynCall_fffffi = function () {
    return (_0x556630 = _0xc94e0.dynCall_fffffi = _0xc94e0.asm.ko).apply(null, arguments);
  };
  var _0x2cffe7 = _0xc94e0.dynCall_fiiffffi = function () {
    return (_0x2cffe7 = _0xc94e0.dynCall_fiiffffi = _0xc94e0.asm.lo).apply(null, arguments);
  };
  var _0x2d3c32 = _0xc94e0.dynCall_fffifffi = function () {
    return (_0x2d3c32 = _0xc94e0.dynCall_fffifffi = _0xc94e0.asm.mo).apply(null, arguments);
  };
  var _0x47824e = _0xc94e0.dynCall_ifiiii = function () {
    return (_0x47824e = _0xc94e0.dynCall_ifiiii = _0xc94e0.asm.no).apply(null, arguments);
  };
  var _0x4922ca = _0xc94e0.dynCall_idiiiii = function () {
    return (_0x4922ca = _0xc94e0.dynCall_idiiiii = _0xc94e0.asm.oo).apply(null, arguments);
  };
  var _0x13b705 = _0xc94e0.dynCall_idiiii = function () {
    return (_0x13b705 = _0xc94e0.dynCall_idiiii = _0xc94e0.asm.po).apply(null, arguments);
  };
  var _0x34cbb5 = _0xc94e0.dynCall_idii = function () {
    return (_0x34cbb5 = _0xc94e0.dynCall_idii = _0xc94e0.asm.qo).apply(null, arguments);
  };
  var _0x4f4191 = _0xc94e0.dynCall_vijiiii = function () {
    return (_0x4f4191 = _0xc94e0.dynCall_vijiiii = _0xc94e0.asm.ro).apply(null, arguments);
  };
  var _0x5d239e = _0xc94e0.dynCall_iiijiiii = function () {
    return (_0x5d239e = _0xc94e0.dynCall_iiijiiii = _0xc94e0.asm.so).apply(null, arguments);
  };
  var _0x114846 = _0xc94e0.dynCall_iiiji = function () {
    return (_0x114846 = _0xc94e0.dynCall_iiiji = _0xc94e0.asm.to).apply(null, arguments);
  };
  var _0x12d5b8 = _0xc94e0.dynCall_vjiiii = function () {
    return (_0x12d5b8 = _0xc94e0.dynCall_vjiiii = _0xc94e0.asm.uo).apply(null, arguments);
  };
  var _0x515b50 = _0xc94e0.dynCall_iddi = function () {
    return (_0x515b50 = _0xc94e0.dynCall_iddi = _0xc94e0.asm.vo).apply(null, arguments);
  };
  var _0x13d0ba = _0xc94e0.dynCall_viifiifi = function () {
    return (_0x13d0ba = _0xc94e0.dynCall_viifiifi = _0xc94e0.asm.wo).apply(null, arguments);
  };
  var _0x248325 = _0xc94e0.dynCall_vifiifi = function () {
    return (_0x248325 = _0xc94e0.dynCall_vifiifi = _0xc94e0.asm.xo).apply(null, arguments);
  };
  var _0x19a883 = _0xc94e0.dynCall_viffii = function () {
    return (_0x19a883 = _0xc94e0.dynCall_viffii = _0xc94e0.asm.yo).apply(null, arguments);
  };
  var _0x41a89c = _0xc94e0.dynCall_vifiii = function () {
    return (_0x41a89c = _0xc94e0.dynCall_vifiii = _0xc94e0.asm.zo).apply(null, arguments);
  };
  var _0x3ca1d1 = _0xc94e0.dynCall_viddfffi = function () {
    return (_0x3ca1d1 = _0xc94e0.dynCall_viddfffi = _0xc94e0.asm.Ao).apply(null, arguments);
  };
  var _0x453aeb = _0xc94e0.dynCall_viidfffi = function () {
    return (_0x453aeb = _0xc94e0.dynCall_viidfffi = _0xc94e0.asm.Bo).apply(null, arguments);
  };
  var _0x3b696a = _0xc94e0.dynCall_vidifffi = function () {
    return (_0x3b696a = _0xc94e0.dynCall_vidifffi = _0xc94e0.asm.Co).apply(null, arguments);
  };
  var _0x5a34d9 = _0xc94e0.dynCall_viiifffi = function () {
    return (_0x5a34d9 = _0xc94e0.dynCall_viiifffi = _0xc94e0.asm.Do).apply(null, arguments);
  };
  var _0x30bfb9 = _0xc94e0.dynCall_viddi = function () {
    return (_0x30bfb9 = _0xc94e0.dynCall_viddi = _0xc94e0.asm.Eo).apply(null, arguments);
  };
  var _0x52566c = _0xc94e0.dynCall_viiiiifi = function () {
    return (_0x52566c = _0xc94e0.dynCall_viiiiifi = _0xc94e0.asm.Fo).apply(null, arguments);
  };
  var _0x24e16a = _0xc94e0.dynCall_viiiiiiifi = function () {
    return (_0x24e16a = _0xc94e0.dynCall_viiiiiiifi = _0xc94e0.asm.Go).apply(null, arguments);
  };
  var _0x4f752e = _0xc94e0.dynCall_viidii = function () {
    return (_0x4f752e = _0xc94e0.dynCall_viidii = _0xc94e0.asm.Ho).apply(null, arguments);
  };
  var _0x3fb41f = _0xc94e0.dynCall_iffi = function () {
    return (_0x3fb41f = _0xc94e0.dynCall_iffi = _0xc94e0.asm.Io).apply(null, arguments);
  };
  var _0x18894e = _0xc94e0.dynCall_viiffffi = function () {
    return (_0x18894e = _0xc94e0.dynCall_viiffffi = _0xc94e0.asm.Jo).apply(null, arguments);
  };
  var _0x2ce6d3 = _0xc94e0.dynCall_viiffii = function () {
    return (_0x2ce6d3 = _0xc94e0.dynCall_viiffii = _0xc94e0.asm.Ko).apply(null, arguments);
  };
  var _0x43cf95 = _0xc94e0.dynCall_viiifii = function () {
    return (_0x43cf95 = _0xc94e0.dynCall_viiifii = _0xc94e0.asm.Lo).apply(null, arguments);
  };
  var _0x251c74 = _0xc94e0.dynCall_ffffi = function () {
    return (_0x251c74 = _0xc94e0.dynCall_ffffi = _0xc94e0.asm.Mo).apply(null, arguments);
  };
  var _0x26787a = _0xc94e0.dynCall_ffi = function () {
    return (_0x26787a = _0xc94e0.dynCall_ffi = _0xc94e0.asm.No).apply(null, arguments);
  };
  var _0x13babe = _0xc94e0.dynCall_ffii = function () {
    return (_0x13babe = _0xc94e0.dynCall_ffii = _0xc94e0.asm.Oo).apply(null, arguments);
  };
  var _0x1ed891 = _0xc94e0.dynCall_fiiiii = function () {
    return (_0x1ed891 = _0xc94e0.dynCall_fiiiii = _0xc94e0.asm.Po).apply(null, arguments);
  };
  var _0x3b5147 = _0xc94e0.dynCall_ddddi = function () {
    return (_0x3b5147 = _0xc94e0.dynCall_ddddi = _0xc94e0.asm.Qo).apply(null, arguments);
  };
  var _0x288f1d = _0xc94e0.dynCall_ddi = function () {
    return (_0x288f1d = _0xc94e0.dynCall_ddi = _0xc94e0.asm.Ro).apply(null, arguments);
  };
  var _0x276105 = _0xc94e0.dynCall_jijii = function () {
    return (_0x276105 = _0xc94e0.dynCall_jijii = _0xc94e0.asm.So).apply(null, arguments);
  };
  var _0x4f8a92 = _0xc94e0.dynCall_iiiiiji = function () {
    return (_0x4f8a92 = _0xc94e0.dynCall_iiiiiji = _0xc94e0.asm.To).apply(null, arguments);
  };
  var _0x4d5a7d = _0xc94e0.dynCall_viiijii = function () {
    return (_0x4d5a7d = _0xc94e0.dynCall_viiijii = _0xc94e0.asm.Uo).apply(null, arguments);
  };
  var _0x22ad37 = _0xc94e0.dynCall_ijii = function () {
    return (_0x22ad37 = _0xc94e0.dynCall_ijii = _0xc94e0.asm.Vo).apply(null, arguments);
  };
  var _0x5a07b7 = _0xc94e0.dynCall_ijjiiii = function () {
    return (_0x5a07b7 = _0xc94e0.dynCall_ijjiiii = _0xc94e0.asm.Wo).apply(null, arguments);
  };
  var _0x19b5d3 = _0xc94e0.dynCall_vdiiiii = function () {
    return (_0x19b5d3 = _0xc94e0.dynCall_vdiiiii = _0xc94e0.asm.Xo).apply(null, arguments);
  };
  var _0x1e3228 = _0xc94e0.dynCall_diiji = function () {
    return (_0x1e3228 = _0xc94e0.dynCall_diiji = _0xc94e0.asm.Yo).apply(null, arguments);
  };
  var _0x4669e4 = _0xc94e0.dynCall_vjiiiiiiii = function () {
    return (_0x4669e4 = _0xc94e0.dynCall_vjiiiiiiii = _0xc94e0.asm.Zo).apply(null, arguments);
  };
  var _0x43f876 = _0xc94e0.dynCall_vjiiiiiii = function () {
    return (_0x43f876 = _0xc94e0.dynCall_vjiiiiiii = _0xc94e0.asm._o).apply(null, arguments);
  };
  var _0x544402 = _0xc94e0.dynCall_ijiiii = function () {
    return (_0x544402 = _0xc94e0.dynCall_ijiiii = _0xc94e0.asm.$o).apply(null, arguments);
  };
  var _0x4d8ddc = _0xc94e0.dynCall_iidii = function () {
    return (_0x4d8ddc = _0xc94e0.dynCall_iidii = _0xc94e0.asm.ap).apply(null, arguments);
  };
  var _0x16f7e7 = _0xc94e0.dynCall_iidiii = function () {
    return (_0x16f7e7 = _0xc94e0.dynCall_iidiii = _0xc94e0.asm.bp).apply(null, arguments);
  };
  var _0x3dd17d = _0xc94e0.dynCall_diji = function () {
    return (_0x3dd17d = _0xc94e0.dynCall_diji = _0xc94e0.asm.cp).apply(null, arguments);
  };
  var _0x227d3c = _0xc94e0.dynCall_fidi = function () {
    return (_0x227d3c = _0xc94e0.dynCall_fidi = _0xc94e0.asm.dp).apply(null, arguments);
  };
  var _0x8cc578 = _0xc94e0.dynCall_ijiii = function () {
    return (_0x8cc578 = _0xc94e0.dynCall_ijiii = _0xc94e0.asm.ep).apply(null, arguments);
  };
  var _0x20aac1 = _0xc94e0.dynCall_vfffi = function () {
    return (_0x20aac1 = _0xc94e0.dynCall_vfffi = _0xc94e0.asm.fp).apply(null, arguments);
  };
  var _0x31f791 = _0xc94e0.dynCall_vffffi = function () {
    return (_0x31f791 = _0xc94e0.dynCall_vffffi = _0xc94e0.asm.gp).apply(null, arguments);
  };
  var _0x5e6512 = _0xc94e0.dynCall_viiiiffi = function () {
    return (_0x5e6512 = _0xc94e0.dynCall_viiiiffi = _0xc94e0.asm.hp).apply(null, arguments);
  };
  var _0x434254 = _0xc94e0.dynCall_viiiffii = function () {
    return (_0x434254 = _0xc94e0.dynCall_viiiffii = _0xc94e0.asm.ip).apply(null, arguments);
  };
  var _0x587503 = _0xc94e0.dynCall_vifffi = function () {
    return (_0x587503 = _0xc94e0.dynCall_vifffi = _0xc94e0.asm.jp).apply(null, arguments);
  };
  var _0x38ed4c = _0xc94e0.dynCall_vffffiiii = function () {
    return (_0x38ed4c = _0xc94e0.dynCall_vffffiiii = _0xc94e0.asm.kp).apply(null, arguments);
  };
  var _0x3bc291 = _0xc94e0.dynCall_viiiifffi = function () {
    return (_0x3bc291 = _0xc94e0.dynCall_viiiifffi = _0xc94e0.asm.lp).apply(null, arguments);
  };
  var _0x39dfb5 = _0xc94e0.dynCall_vfiii = function () {
    return (_0x39dfb5 = _0xc94e0.dynCall_vfiii = _0xc94e0.asm.mp).apply(null, arguments);
  };
  var _0x194385 = _0xc94e0.dynCall_vfii = function () {
    return (_0x194385 = _0xc94e0.dynCall_vfii = _0xc94e0.asm.np).apply(null, arguments);
  };
  var _0x3836cd = _0xc94e0.dynCall_iiiifiiiii = function () {
    return (_0x3836cd = _0xc94e0.dynCall_iiiifiiiii = _0xc94e0.asm.op).apply(null, arguments);
  };
  var _0x3ce62d = _0xc94e0.dynCall_iiiifiiii = function () {
    return (_0x3ce62d = _0xc94e0.dynCall_iiiifiiii = _0xc94e0.asm.pp).apply(null, arguments);
  };
  var _0x392210 = _0xc94e0.dynCall_vijjii = function () {
    return (_0x392210 = _0xc94e0.dynCall_vijjii = _0xc94e0.asm.qp).apply(null, arguments);
  };
  var _0xcf0790 = _0xc94e0.dynCall_viiiififfi = function () {
    return (_0xcf0790 = _0xc94e0.dynCall_viiiififfi = _0xc94e0.asm.rp).apply(null, arguments);
  };
  var _0x205c60 = _0xc94e0.dynCall_viiiifiifi = function () {
    return (_0x205c60 = _0xc94e0.dynCall_viiiifiifi = _0xc94e0.asm.sp).apply(null, arguments);
  };
  var _0x3d7a7d = _0xc94e0.dynCall_viiiifiiii = function () {
    return (_0x3d7a7d = _0xc94e0.dynCall_viiiifiiii = _0xc94e0.asm.tp).apply(null, arguments);
  };
  var _0x35d1bf = _0xc94e0.dynCall_viiiifiiiii = function () {
    return (_0x35d1bf = _0xc94e0.dynCall_viiiifiiiii = _0xc94e0.asm.up).apply(null, arguments);
  };
  var _0x6dc46 = _0xc94e0.dynCall_viiiifiiiiiiii = function () {
    return (_0x6dc46 = _0xc94e0.dynCall_viiiifiiiiiiii = _0xc94e0.asm.vp).apply(null, arguments);
  };
  var _0x158d2c = _0xc94e0.dynCall_viiiiiffii = function () {
    return (_0x158d2c = _0xc94e0.dynCall_viiiiiffii = _0xc94e0.asm.wp).apply(null, arguments);
  };
  var _0x539f69 = _0xc94e0.dynCall_viffiii = function () {
    return (_0x539f69 = _0xc94e0.dynCall_viffiii = _0xc94e0.asm.xp).apply(null, arguments);
  };
  var _0x4e8617 = _0xc94e0.dynCall_viffffiii = function () {
    return (_0x4e8617 = _0xc94e0.dynCall_viffffiii = _0xc94e0.asm.yp).apply(null, arguments);
  };
  var _0x981f5f = _0xc94e0.dynCall_viffffii = function () {
    return (_0x981f5f = _0xc94e0.dynCall_viffffii = _0xc94e0.asm.zp).apply(null, arguments);
  };
  var _0x4f3a19 = _0xc94e0.dynCall_viiiififii = function () {
    return (_0x4f3a19 = _0xc94e0.dynCall_viiiififii = _0xc94e0.asm.Ap).apply(null, arguments);
  };
  var _0x42d3d5 = _0xc94e0.dynCall_viiifiii = function () {
    return (_0x42d3d5 = _0xc94e0.dynCall_viiifiii = _0xc94e0.asm.Bp).apply(null, arguments);
  };
  var _0x462b09 = _0xc94e0.dynCall_viiififiii = function () {
    return (_0x462b09 = _0xc94e0.dynCall_viiififiii = _0xc94e0.asm.Cp).apply(null, arguments);
  };
  var _0x3c9ba5 = _0xc94e0.dynCall_viiififi = function () {
    return (_0x3c9ba5 = _0xc94e0.dynCall_viiififi = _0xc94e0.asm.Dp).apply(null, arguments);
  };
  var _0x470aad = _0xc94e0.dynCall_iiiiifi = function () {
    return (_0x470aad = _0xc94e0.dynCall_iiiiifi = _0xc94e0.asm.Ep).apply(null, arguments);
  };
  var _0x5d4cb3 = _0xc94e0.dynCall_viiifififfi = function () {
    return (_0x5d4cb3 = _0xc94e0.dynCall_viiifififfi = _0xc94e0.asm.Fp).apply(null, arguments);
  };
  var _0x5e9a34 = _0xc94e0.dynCall_vififfii = function () {
    return (_0x5e9a34 = _0xc94e0.dynCall_vififfii = _0xc94e0.asm.Gp).apply(null, arguments);
  };
  var _0x4ce383 = _0xc94e0.dynCall_vifffffi = function () {
    return (_0x4ce383 = _0xc94e0.dynCall_vifffffi = _0xc94e0.asm.Hp).apply(null, arguments);
  };
  var _0x593f20 = _0xc94e0.dynCall_viffiiii = function () {
    return (_0x593f20 = _0xc94e0.dynCall_viffiiii = _0xc94e0.asm.Ip).apply(null, arguments);
  };
  var _0x12104e = _0xc94e0.dynCall_viiiiffffiiii = function () {
    return (_0x12104e = _0xc94e0.dynCall_viiiiffffiiii = _0xc94e0.asm.Jp).apply(null, arguments);
  };
  var _0x9fea7c = _0xc94e0.dynCall_viifiiiii = function () {
    return (_0x9fea7c = _0xc94e0.dynCall_viifiiiii = _0xc94e0.asm.Kp).apply(null, arguments);
  };
  var _0x41d7b0 = _0xc94e0.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x41d7b0 = _0xc94e0.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0xc94e0.asm.Lp).apply(null, arguments);
  };
  var _0x5ecf82 = _0xc94e0.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x5ecf82 = _0xc94e0.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0xc94e0.asm.Mp).apply(null, arguments);
  };
  var _0x2bfb9c = _0xc94e0.dynCall_viijji = function () {
    return (_0x2bfb9c = _0xc94e0.dynCall_viijji = _0xc94e0.asm.Np).apply(null, arguments);
  };
  var _0x4fd6e8 = _0xc94e0.dynCall_viififii = function () {
    return (_0x4fd6e8 = _0xc94e0.dynCall_viififii = _0xc94e0.asm.Op).apply(null, arguments);
  };
  var _0x19d042 = _0xc94e0.dynCall_viffffffi = function () {
    return (_0x19d042 = _0xc94e0.dynCall_viffffffi = _0xc94e0.asm.Pp).apply(null, arguments);
  };
  var _0x2927f8 = _0xc94e0.dynCall_iiiffiiii = function () {
    return (_0x2927f8 = _0xc94e0.dynCall_iiiffiiii = _0xc94e0.asm.Qp).apply(null, arguments);
  };
  var _0x586b87 = _0xc94e0.dynCall_iiiiffiiii = function () {
    return (_0x586b87 = _0xc94e0.dynCall_iiiiffiiii = _0xc94e0.asm.Rp).apply(null, arguments);
  };
  var _0x275a5b = _0xc94e0.dynCall_vjii = function () {
    return (_0x275a5b = _0xc94e0.dynCall_vjii = _0xc94e0.asm.Sp).apply(null, arguments);
  };
  var _0x396c96 = _0xc94e0.dynCall_fifffi = function () {
    return (_0x396c96 = _0xc94e0.dynCall_fifffi = _0xc94e0.asm.Tp).apply(null, arguments);
  };
  var _0x37dd49 = _0xc94e0.dynCall_fffffffi = function () {
    return (_0x37dd49 = _0xc94e0.dynCall_fffffffi = _0xc94e0.asm.Up).apply(null, arguments);
  };
  var _0x493ac8 = _0xc94e0.dynCall_viffifi = function () {
    return (_0x493ac8 = _0xc94e0.dynCall_viffifi = _0xc94e0.asm.Vp).apply(null, arguments);
  };
  var _0x3518e8 = _0xc94e0.dynCall_viiffifi = function () {
    return (_0x3518e8 = _0xc94e0.dynCall_viiffifi = _0xc94e0.asm.Wp).apply(null, arguments);
  };
  var _0x56a82e = _0xc94e0.dynCall_ifffi = function () {
    return (_0x56a82e = _0xc94e0.dynCall_ifffi = _0xc94e0.asm.Xp).apply(null, arguments);
  };
  var _0x2b6d54 = _0xc94e0.dynCall_fiiiffi = function () {
    return (_0x2b6d54 = _0xc94e0.dynCall_fiiiffi = _0xc94e0.asm.Yp).apply(null, arguments);
  };
  var _0x34facc = _0xc94e0.dynCall_viiffiiiiiiiii = function () {
    return (_0x34facc = _0xc94e0.dynCall_viiffiiiiiiiii = _0xc94e0.asm.Zp).apply(null, arguments);
  };
  var _0x4b0645 = _0xc94e0.dynCall_viiiiiffiii = function () {
    return (_0x4b0645 = _0xc94e0.dynCall_viiiiiffiii = _0xc94e0.asm._p).apply(null, arguments);
  };
  var _0x4cb84e = _0xc94e0.dynCall_viiffiii = function () {
    return (_0x4cb84e = _0xc94e0.dynCall_viiffiii = _0xc94e0.asm.$p).apply(null, arguments);
  };
  var _0x32bd4b = _0xc94e0.dynCall_viiffiiiiiii = function () {
    return (_0x32bd4b = _0xc94e0.dynCall_viiffiiiiiii = _0xc94e0.asm.aq).apply(null, arguments);
  };
  var _0x43312b = _0xc94e0.dynCall_fffffffffi = function () {
    return (_0x43312b = _0xc94e0.dynCall_fffffffffi = _0xc94e0.asm.bq).apply(null, arguments);
  };
  var _0x48fd82 = _0xc94e0.dynCall_vifiiiiii = function () {
    return (_0x48fd82 = _0xc94e0.dynCall_vifiiiiii = _0xc94e0.asm.cq).apply(null, arguments);
  };
  var _0x1a2fa0 = _0xc94e0.dynCall_vifiiiii = function () {
    return (_0x1a2fa0 = _0xc94e0.dynCall_vifiiiii = _0xc94e0.asm.dq).apply(null, arguments);
  };
  var _0x354a10 = _0xc94e0.dynCall_viifiiiiiii = function () {
    return (_0x354a10 = _0xc94e0.dynCall_viifiiiiiii = _0xc94e0.asm.eq).apply(null, arguments);
  };
  var _0x1d2a7a = _0xc94e0.dynCall_viiififfiiiiiii = function () {
    return (_0x1d2a7a = _0xc94e0.dynCall_viiififfiiiiiii = _0xc94e0.asm.fq).apply(null, arguments);
  };
  var _0x3d26d6 = _0xc94e0.dynCall_viiffiifiiiiiii = function () {
    return (_0x3d26d6 = _0xc94e0.dynCall_viiffiifiiiiiii = _0xc94e0.asm.gq).apply(null, arguments);
  };
  var _0x10b12d = _0xc94e0.dynCall_viifiiiiii = function () {
    return (_0x10b12d = _0xc94e0.dynCall_viifiiiiii = _0xc94e0.asm.hq).apply(null, arguments);
  };
  var _0x58bb63 = _0xc94e0.dynCall_viiifiiiiii = function () {
    return (_0x58bb63 = _0xc94e0.dynCall_viiifiiiiii = _0xc94e0.asm.iq).apply(null, arguments);
  };
  var _0x268592 = _0xc94e0.dynCall_viiiifiiiiii = function () {
    return (_0x268592 = _0xc94e0.dynCall_viiiifiiiiii = _0xc94e0.asm.jq).apply(null, arguments);
  };
  var _0x49dbdd = _0xc94e0.dynCall_viififiiiiii = function () {
    return (_0x49dbdd = _0xc94e0.dynCall_viififiiiiii = _0xc94e0.asm.kq).apply(null, arguments);
  };
  var _0x2defd6 = _0xc94e0.dynCall_viiiffiifiiiiiii = function () {
    return (_0x2defd6 = _0xc94e0.dynCall_viiiffiifiiiiiii = _0xc94e0.asm.lq).apply(null, arguments);
  };
  var _0x28d586 = _0xc94e0.dynCall_viiiiiifiiiiii = function () {
    return (_0x28d586 = _0xc94e0.dynCall_viiiiiifiiiiii = _0xc94e0.asm.mq).apply(null, arguments);
  };
  var _0x33bd43 = _0xc94e0.dynCall_vififiii = function () {
    return (_0x33bd43 = _0xc94e0.dynCall_vififiii = _0xc94e0.asm.nq).apply(null, arguments);
  };
  var _0x1d638e = _0xc94e0.dynCall_fiffi = function () {
    return (_0x1d638e = _0xc94e0.dynCall_fiffi = _0xc94e0.asm.oq).apply(null, arguments);
  };
  var _0x53e65a = _0xc94e0.dynCall_viiiiiiiijiiii = function () {
    return (_0x53e65a = _0xc94e0.dynCall_viiiiiiiijiiii = _0xc94e0.asm.pq).apply(null, arguments);
  };
  var _0x2fb98a = _0xc94e0.dynCall_fifii = function () {
    return (_0x2fb98a = _0xc94e0.dynCall_fifii = _0xc94e0.asm.qq).apply(null, arguments);
  };
  var _0x4f36ee = _0xc94e0.dynCall_viiiiiffi = function () {
    return (_0x4f36ee = _0xc94e0.dynCall_viiiiiffi = _0xc94e0.asm.rq).apply(null, arguments);
  };
  var _0x4e25c2 = _0xc94e0.dynCall_jiidi = function () {
    return (_0x4e25c2 = _0xc94e0.dynCall_jiidi = _0xc94e0.asm.sq).apply(null, arguments);
  };
  var _0x3173e2 = _0xc94e0.dynCall_viiidiii = function () {
    return (_0x3173e2 = _0xc94e0.dynCall_viiidiii = _0xc94e0.asm.tq).apply(null, arguments);
  };
  var _0x354afb = _0xc94e0.dynCall_viiiidijii = function () {
    return (_0x354afb = _0xc94e0.dynCall_viiiidijii = _0xc94e0.asm.uq).apply(null, arguments);
  };
  var _0x2dddd1 = _0xc94e0.dynCall_viiiidii = function () {
    return (_0x2dddd1 = _0xc94e0.dynCall_viiiidii = _0xc94e0.asm.vq).apply(null, arguments);
  };
  var _0x3cc199 = _0xc94e0.dynCall_viiijiii = function () {
    return (_0x3cc199 = _0xc94e0.dynCall_viiijiii = _0xc94e0.asm.wq).apply(null, arguments);
  };
  var _0x3e40da = _0xc94e0.dynCall_iiidiii = function () {
    return (_0x3e40da = _0xc94e0.dynCall_iiidiii = _0xc94e0.asm.xq).apply(null, arguments);
  };
  var _0x21624b = _0xc94e0.dynCall_iiidii = function () {
    return (_0x21624b = _0xc94e0.dynCall_iiidii = _0xc94e0.asm.yq).apply(null, arguments);
  };
  var _0x46784a = _0xc94e0.dynCall_vidiii = function () {
    return (_0x46784a = _0xc94e0.dynCall_vidiii = _0xc94e0.asm.zq).apply(null, arguments);
  };
  var _0x427d81 = _0xc94e0.dynCall_viijiiiii = function () {
    return (_0x427d81 = _0xc94e0.dynCall_viijiiiii = _0xc94e0.asm.Aq).apply(null, arguments);
  };
  var _0x1823db = _0xc94e0.dynCall_viifffffi = function () {
    return (_0x1823db = _0xc94e0.dynCall_viifffffi = _0xc94e0.asm.Bq).apply(null, arguments);
  };
  var _0x52b8d7 = _0xc94e0.dynCall_viiffffffi = function () {
    return (_0x52b8d7 = _0xc94e0.dynCall_viiffffffi = _0xc94e0.asm.Cq).apply(null, arguments);
  };
  var _0x3eb0e8 = _0xc94e0.dynCall_viifffffffi = function () {
    return (_0x3eb0e8 = _0xc94e0.dynCall_viifffffffi = _0xc94e0.asm.Dq).apply(null, arguments);
  };
  var _0x2d3509 = _0xc94e0.dynCall_viiffffffffi = function () {
    return (_0x2d3509 = _0xc94e0.dynCall_viiffffffffi = _0xc94e0.asm.Eq).apply(null, arguments);
  };
  var _0x250446 = _0xc94e0.dynCall_viiffffffffiii = function () {
    return (_0x250446 = _0xc94e0.dynCall_viiffffffffiii = _0xc94e0.asm.Fq).apply(null, arguments);
  };
  var _0x1d7640 = _0xc94e0.dynCall_viiiiffffii = function () {
    return (_0x1d7640 = _0xc94e0.dynCall_viiiiffffii = _0xc94e0.asm.Gq).apply(null, arguments);
  };
  var _0x2716ee = _0xc94e0.dynCall_fiiiiii = function () {
    return (_0x2716ee = _0xc94e0.dynCall_fiiiiii = _0xc94e0.asm.Hq).apply(null, arguments);
  };
  var _0x332ebe = _0xc94e0.dynCall_jjiiii = function () {
    return (_0x332ebe = _0xc94e0.dynCall_jjiiii = _0xc94e0.asm.Iq).apply(null, arguments);
  };
  var _0x42299c = _0xc94e0.dynCall_vijiiiiiii = function () {
    return (_0x42299c = _0xc94e0.dynCall_vijiiiiiii = _0xc94e0.asm.Jq).apply(null, arguments);
  };
  var _0x44eb90 = _0xc94e0.dynCall_vijiiiiiiii = function () {
    return (_0x44eb90 = _0xc94e0.dynCall_vijiiiiiiii = _0xc94e0.asm.Kq).apply(null, arguments);
  };
  var _0x4ad466 = _0xc94e0.dynCall_jjiiiii = function () {
    return (_0x4ad466 = _0xc94e0.dynCall_jjiiiii = _0xc94e0.asm.Lq).apply(null, arguments);
  };
  var _0x13400c = _0xc94e0.dynCall_jijjji = function () {
    return (_0x13400c = _0xc94e0.dynCall_jijjji = _0xc94e0.asm.Mq).apply(null, arguments);
  };
  var _0x331e78 = _0xc94e0.dynCall_jijjjii = function () {
    return (_0x331e78 = _0xc94e0.dynCall_jijjjii = _0xc94e0.asm.Nq).apply(null, arguments);
  };
  var _0x39b104 = _0xc94e0.dynCall_jjiii = function () {
    return (_0x39b104 = _0xc94e0.dynCall_jjiii = _0xc94e0.asm.Oq).apply(null, arguments);
  };
  var _0x53772f = _0xc94e0.dynCall_ijijiiiii = function () {
    return (_0x53772f = _0xc94e0.dynCall_ijijiiiii = _0xc94e0.asm.Pq).apply(null, arguments);
  };
  var _0x1222d6 = _0xc94e0.dynCall_ijjjiii = function () {
    return (_0x1222d6 = _0xc94e0.dynCall_ijjjiii = _0xc94e0.asm.Qq).apply(null, arguments);
  };
  var _0x9b415f = _0xc94e0.dynCall_vijjjiijii = function () {
    return (_0x9b415f = _0xc94e0.dynCall_vijjjiijii = _0xc94e0.asm.Rq).apply(null, arguments);
  };
  var _0x5afbf2 = _0xc94e0.dynCall_ijjjiijii = function () {
    return (_0x5afbf2 = _0xc94e0.dynCall_ijjjiijii = _0xc94e0.asm.Sq).apply(null, arguments);
  };
  var _0xf496b4 = _0xc94e0.dynCall_vijiiiiii = function () {
    return (_0xf496b4 = _0xc94e0.dynCall_vijiiiiii = _0xc94e0.asm.Tq).apply(null, arguments);
  };
  var _0x24aec7 = _0xc94e0.dynCall_jfi = function () {
    return (_0x24aec7 = _0xc94e0.dynCall_jfi = _0xc94e0.asm.Uq).apply(null, arguments);
  };
  var _0x373c25 = _0xc94e0.dynCall_fji = function () {
    return (_0x373c25 = _0xc94e0.dynCall_fji = _0xc94e0.asm.Vq).apply(null, arguments);
  };
  var _0x161c94 = _0xc94e0.dynCall_fdi = function () {
    return (_0x161c94 = _0xc94e0.dynCall_fdi = _0xc94e0.asm.Wq).apply(null, arguments);
  };
  var _0x52aa19 = _0xc94e0.dynCall_dfi = function () {
    return (_0x52aa19 = _0xc94e0.dynCall_dfi = _0xc94e0.asm.Xq).apply(null, arguments);
  };
  var _0x5e5034 = _0xc94e0.dynCall_jidii = function () {
    return (_0x5e5034 = _0xc94e0.dynCall_jidii = _0xc94e0.asm.Yq).apply(null, arguments);
  };
  var _0x483d52 = _0xc94e0.dynCall_vijji = function () {
    return (_0x483d52 = _0xc94e0.dynCall_vijji = _0xc94e0.asm.Zq).apply(null, arguments);
  };
  var _0x58a65e = _0xc94e0.dynCall_viiiiiiiji = function () {
    return (_0x58a65e = _0xc94e0.dynCall_viiiiiiiji = _0xc94e0.asm._q).apply(null, arguments);
  };
  var _0xf6904f = _0xc94e0.dynCall_viiiiiiiiji = function () {
    return (_0xf6904f = _0xc94e0.dynCall_viiiiiiiiji = _0xc94e0.asm.$q).apply(null, arguments);
  };
  var _0x6a34d5 = _0xc94e0.dynCall_viiiiiiiiiji = function () {
    return (_0x6a34d5 = _0xc94e0.dynCall_viiiiiiiiiji = _0xc94e0.asm.ar).apply(null, arguments);
  };
  var _0x2bba5d = _0xc94e0.dynCall_ijiijii = function () {
    return (_0x2bba5d = _0xc94e0.dynCall_ijiijii = _0xc94e0.asm.br).apply(null, arguments);
  };
  var _0x354a80 = _0xc94e0.dynCall_vjjiiiii = function () {
    return (_0x354a80 = _0xc94e0.dynCall_vjjiiiii = _0xc94e0.asm.cr).apply(null, arguments);
  };
  var _0x2c86b8 = _0xc94e0.dynCall_vjjii = function () {
    return (_0x2c86b8 = _0xc94e0.dynCall_vjjii = _0xc94e0.asm.dr).apply(null, arguments);
  };
  var _0x4e5151 = _0xc94e0.dynCall_ijiiji = function () {
    return (_0x4e5151 = _0xc94e0.dynCall_ijiiji = _0xc94e0.asm.er).apply(null, arguments);
  };
  var _0x44a96c = _0xc94e0.dynCall_ijiiiii = function () {
    return (_0x44a96c = _0xc94e0.dynCall_ijiiiii = _0xc94e0.asm.fr).apply(null, arguments);
  };
  var _0x18e798 = _0xc94e0.dynCall_ijiiiiji = function () {
    return (_0x18e798 = _0xc94e0.dynCall_ijiiiiji = _0xc94e0.asm.gr).apply(null, arguments);
  };
  var _0x56da67 = _0xc94e0.dynCall_ijjiii = function () {
    return (_0x56da67 = _0xc94e0.dynCall_ijjiii = _0xc94e0.asm.hr).apply(null, arguments);
  };
  var _0x1bd2fa = _0xc94e0.dynCall_jiiiiii = function () {
    return (_0x1bd2fa = _0xc94e0.dynCall_jiiiiii = _0xc94e0.asm.ir).apply(null, arguments);
  };
  var _0x29d810 = _0xc94e0.dynCall_ddii = function () {
    return (_0x29d810 = _0xc94e0.dynCall_ddii = _0xc94e0.asm.jr).apply(null, arguments);
  };
  var _0x2a5dfd = _0xc94e0.dynCall_idiii = function () {
    return (_0x2a5dfd = _0xc94e0.dynCall_idiii = _0xc94e0.asm.kr).apply(null, arguments);
  };
  var _0x6717dc = _0xc94e0.dynCall_ifiiiii = function () {
    return (_0x6717dc = _0xc94e0.dynCall_ifiiiii = _0xc94e0.asm.lr).apply(null, arguments);
  };
  var _0x575341 = _0xc94e0.dynCall_jjjii = function () {
    return (_0x575341 = _0xc94e0.dynCall_jjjii = _0xc94e0.asm.mr).apply(null, arguments);
  };
  var _0x4e173a = _0xc94e0.dynCall_vdiii = function () {
    return (_0x4e173a = _0xc94e0.dynCall_vdiii = _0xc94e0.asm.nr).apply(null, arguments);
  };
  var _0x4d4177 = _0xc94e0.dynCall_jdii = function () {
    return (_0x4d4177 = _0xc94e0.dynCall_jdii = _0xc94e0.asm.or).apply(null, arguments);
  };
  var _0x750750 = _0xc94e0.dynCall_vijijji = function () {
    return (_0x750750 = _0xc94e0.dynCall_vijijji = _0xc94e0.asm.pr).apply(null, arguments);
  };
  var _0x5a8322 = _0xc94e0.dynCall_iijjji = function () {
    return (_0x5a8322 = _0xc94e0.dynCall_iijjji = _0xc94e0.asm.qr).apply(null, arguments);
  };
  var _0x1ec0d3 = _0xc94e0.dynCall_viijjji = function () {
    return (_0x1ec0d3 = _0xc94e0.dynCall_viijjji = _0xc94e0.asm.rr).apply(null, arguments);
  };
  var _0x2e01bd = _0xc94e0.dynCall_vdii = function () {
    return (_0x2e01bd = _0xc94e0.dynCall_vdii = _0xc94e0.asm.sr).apply(null, arguments);
  };
  var _0x1df0f2 = _0xc94e0.dynCall_iiiijii = function () {
    return (_0x1df0f2 = _0xc94e0.dynCall_iiiijii = _0xc94e0.asm.tr).apply(null, arguments);
  };
  var _0x3f259b = _0xc94e0.dynCall_jijji = function () {
    return (_0x3f259b = _0xc94e0.dynCall_jijji = _0xc94e0.asm.ur).apply(null, arguments);
  };
  var _0x1c3f26 = _0xc94e0.dynCall_diddi = function () {
    return (_0x1c3f26 = _0xc94e0.dynCall_diddi = _0xc94e0.asm.vr).apply(null, arguments);
  };
  var _0x1b346d = _0xc94e0.dynCall_didi = function () {
    return (_0x1b346d = _0xc94e0.dynCall_didi = _0xc94e0.asm.wr).apply(null, arguments);
  };
  var _0x2dea7d = _0xc94e0.dynCall_viiijji = function () {
    return (_0x2dea7d = _0xc94e0.dynCall_viiijji = _0xc94e0.asm.xr).apply(null, arguments);
  };
  var _0x40b10f = _0xc94e0.dynCall_iijjii = function () {
    return (_0x40b10f = _0xc94e0.dynCall_iijjii = _0xc94e0.asm.yr).apply(null, arguments);
  };
  var _0x4de427 = _0xc94e0.dynCall_jjjji = function () {
    return (_0x4de427 = _0xc94e0.dynCall_jjjji = _0xc94e0.asm.zr).apply(null, arguments);
  };
  var _0x1416ef = _0xc94e0.dynCall_viijijii = function () {
    return (_0x1416ef = _0xc94e0.dynCall_viijijii = _0xc94e0.asm.Ar).apply(null, arguments);
  };
  var _0x423c88 = _0xc94e0.dynCall_viijijiii = function () {
    return (_0x423c88 = _0xc94e0.dynCall_viijijiii = _0xc94e0.asm.Br).apply(null, arguments);
  };
  var _0x17499d = _0xc94e0.dynCall_vijiji = function () {
    return (_0x17499d = _0xc94e0.dynCall_vijiji = _0xc94e0.asm.Cr).apply(null, arguments);
  };
  var _0x3bd84 = _0xc94e0.dynCall_viijiijiii = function () {
    return (_0x3bd84 = _0xc94e0.dynCall_viijiijiii = _0xc94e0.asm.Dr).apply(null, arguments);
  };
  var _0x265085 = _0xc94e0.dynCall_viiiijiiii = function () {
    return (_0x265085 = _0xc94e0.dynCall_viiiijiiii = _0xc94e0.asm.Er).apply(null, arguments);
  };
  var _0xaa95c5 = _0xc94e0.dynCall_di = function () {
    return (_0xaa95c5 = _0xc94e0.dynCall_di = _0xc94e0.asm.Fr).apply(null, arguments);
  };
  var _0x4102cb = _0xc94e0.dynCall_viijjii = function () {
    return (_0x4102cb = _0xc94e0.dynCall_viijjii = _0xc94e0.asm.Gr).apply(null, arguments);
  };
  var _0x1dcc66 = _0xc94e0.dynCall_jiiiiiiiii = function () {
    return (_0x1dcc66 = _0xc94e0.dynCall_jiiiiiiiii = _0xc94e0.asm.Hr).apply(null, arguments);
  };
  var _0x4faa5e = _0xc94e0.dynCall_iiiiijii = function () {
    return (_0x4faa5e = _0xc94e0.dynCall_iiiiijii = _0xc94e0.asm.Ir).apply(null, arguments);
  };
  var _0x1b5722 = _0xc94e0.dynCall_iiiidii = function () {
    return (_0x1b5722 = _0xc94e0.dynCall_iiiidii = _0xc94e0.asm.Jr).apply(null, arguments);
  };
  var _0x189254 = _0xc94e0.dynCall_iidfii = function () {
    return (_0x189254 = _0xc94e0.dynCall_iidfii = _0xc94e0.asm.Kr).apply(null, arguments);
  };
  var _0x1be6e7 = _0xc94e0.dynCall_iidfi = function () {
    return (_0x1be6e7 = _0xc94e0.dynCall_iidfi = _0xc94e0.asm.Lr).apply(null, arguments);
  };
  var _0x1f0436 = _0xc94e0.dynCall_iiddfi = function () {
    return (_0x1f0436 = _0xc94e0.dynCall_iiddfi = _0xc94e0.asm.Mr).apply(null, arguments);
  };
  var _0x1248ef = _0xc94e0.dynCall_iijfii = function () {
    return (_0x1248ef = _0xc94e0.dynCall_iijfii = _0xc94e0.asm.Nr).apply(null, arguments);
  };
  var _0x588f55 = _0xc94e0.dynCall_iijfi = function () {
    return (_0x588f55 = _0xc94e0.dynCall_iijfi = _0xc94e0.asm.Or).apply(null, arguments);
  };
  var _0x2973a2 = _0xc94e0.dynCall_iijjfi = function () {
    return (_0x2973a2 = _0xc94e0.dynCall_iijjfi = _0xc94e0.asm.Pr).apply(null, arguments);
  };
  var _0x5a677e = _0xc94e0.dynCall_iiiiffiiiji = function () {
    return (_0x5a677e = _0xc94e0.dynCall_iiiiffiiiji = _0xc94e0.asm.Qr).apply(null, arguments);
  };
  var _0x18514a = _0xc94e0.dynCall_iiidfii = function () {
    return (_0x18514a = _0xc94e0.dynCall_iiidfii = _0xc94e0.asm.Rr).apply(null, arguments);
  };
  var _0x12898d = _0xc94e0.dynCall_iiijfii = function () {
    return (_0x12898d = _0xc94e0.dynCall_iiijfii = _0xc94e0.asm.Sr).apply(null, arguments);
  };
  var _0x1cc2ff = _0xc94e0.dynCall_jiiiiiii = function () {
    return (_0x1cc2ff = _0xc94e0.dynCall_jiiiiiii = _0xc94e0.asm.Tr).apply(null, arguments);
  };
  var _0x47da78 = _0xc94e0.dynCall_iiiiffiiiii = function () {
    return (_0x47da78 = _0xc94e0.dynCall_iiiiffiiiii = _0xc94e0.asm.Ur).apply(null, arguments);
  };
  var _0x5894b5 = _0xc94e0.dynCall_iiiidfii = function () {
    return (_0x5894b5 = _0xc94e0.dynCall_iiiidfii = _0xc94e0.asm.Vr).apply(null, arguments);
  };
  var _0x21c11b = _0xc94e0.dynCall_iiiijfii = function () {
    return (_0x21c11b = _0xc94e0.dynCall_iiiijfii = _0xc94e0.asm.Wr).apply(null, arguments);
  };
  var _0x392e50 = _0xc94e0.dynCall_iiiiffii = function () {
    return (_0x392e50 = _0xc94e0.dynCall_iiiiffii = _0xc94e0.asm.Xr).apply(null, arguments);
  };
  var _0x2fda32 = _0xc94e0.dynCall_jiiiiji = function () {
    return (_0x2fda32 = _0xc94e0.dynCall_jiiiiji = _0xc94e0.asm.Yr).apply(null, arguments);
  };
  var _0x5210e2 = _0xc94e0.dynCall_fiiiifi = function () {
    return (_0x5210e2 = _0xc94e0.dynCall_fiiiifi = _0xc94e0.asm.Zr).apply(null, arguments);
  };
  var _0x54d5f5 = _0xc94e0.dynCall_iiijjii = function () {
    return (_0x54d5f5 = _0xc94e0.dynCall_iiijjii = _0xc94e0.asm._r).apply(null, arguments);
  };
  var _0x185828 = _0xc94e0.dynCall_vij = function () {
    return (_0x185828 = _0xc94e0.dynCall_vij = _0xc94e0.asm.$r).apply(null, arguments);
  };
  var _0x2a66d4 = _0xc94e0.dynCall_iiiijiii = function () {
    return (_0x2a66d4 = _0xc94e0.dynCall_iiiijiii = _0xc94e0.asm.as).apply(null, arguments);
  };
  var _0x476990 = _0xc94e0.dynCall_iiiij = function () {
    return (_0x476990 = _0xc94e0.dynCall_iiiij = _0xc94e0.asm.bs).apply(null, arguments);
  };
  var _0x5cb80f = _0xc94e0.dynCall_ijj = function () {
    return (_0x5cb80f = _0xc94e0.dynCall_ijj = _0xc94e0.asm.cs).apply(null, arguments);
  };
  var _0x2993bb = _0xc94e0.dynCall_vjji = function () {
    return (_0x2993bb = _0xc94e0.dynCall_vjji = _0xc94e0.asm.ds).apply(null, arguments);
  };
  var _0x5d5d48 = _0xc94e0.dynCall_ij = function () {
    return (_0x5d5d48 = _0xc94e0.dynCall_ij = _0xc94e0.asm.es).apply(null, arguments);
  };
  var _0x4ef85a = _0xc94e0.dynCall_vif = function () {
    return (_0x4ef85a = _0xc94e0.dynCall_vif = _0xc94e0.asm.fs).apply(null, arguments);
  };
  var _0x4c46e4 = _0xc94e0.dynCall_vid = function () {
    return (_0x4c46e4 = _0xc94e0.dynCall_vid = _0xc94e0.asm.gs).apply(null, arguments);
  };
  var _0x1c4c8c = _0xc94e0.dynCall_viiiiif = function () {
    return (_0x1c4c8c = _0xc94e0.dynCall_viiiiif = _0xc94e0.asm.hs).apply(null, arguments);
  };
  var _0x2b15ea = _0xc94e0.dynCall_viiiif = function () {
    return (_0x2b15ea = _0xc94e0.dynCall_viiiif = _0xc94e0.asm.is).apply(null, arguments);
  };
  var _0x59c359 = _0xc94e0.dynCall_viiiiiif = function () {
    return (_0x59c359 = _0xc94e0.dynCall_viiiiiif = _0xc94e0.asm.js).apply(null, arguments);
  };
  var _0xadb840 = _0xc94e0.dynCall_fif = function () {
    return (_0xadb840 = _0xc94e0.dynCall_fif = _0xc94e0.asm.ks).apply(null, arguments);
  };
  var _0x51f77c = _0xc94e0.dynCall_iiiiiifff = function () {
    return (_0x51f77c = _0xc94e0.dynCall_iiiiiifff = _0xc94e0.asm.ls).apply(null, arguments);
  };
  var _0x1a487b = _0xc94e0.dynCall_iiiiiifiif = function () {
    return (_0x1a487b = _0xc94e0.dynCall_iiiiiifiif = _0xc94e0.asm.ms).apply(null, arguments);
  };
  var _0x48931c = _0xc94e0.dynCall_iiiiiifiii = function () {
    return (_0x48931c = _0xc94e0.dynCall_iiiiiifiii = _0xc94e0.asm.ns).apply(null, arguments);
  };
  var _0x5936c0 = _0xc94e0.dynCall_iiiiiiifiif = function () {
    return (_0x5936c0 = _0xc94e0.dynCall_iiiiiiifiif = _0xc94e0.asm.os).apply(null, arguments);
  };
  var _0xf5b70e = _0xc94e0.dynCall_fiff = function () {
    return (_0xf5b70e = _0xc94e0.dynCall_fiff = _0xc94e0.asm.ps).apply(null, arguments);
  };
  var _0x48dae4 = _0xc94e0.dynCall_fiiiiiifiifif = function () {
    return (_0x48dae4 = _0xc94e0.dynCall_fiiiiiifiifif = _0xc94e0.asm.qs).apply(null, arguments);
  };
  var _0x4de3d6 = _0xc94e0.dynCall_fiiiiiifiiiif = function () {
    return (_0x4de3d6 = _0xc94e0.dynCall_fiiiiiifiiiif = _0xc94e0.asm.rs).apply(null, arguments);
  };
  var _0x3c91ef = _0xc94e0.dynCall_iifiiiijii = function () {
    return (_0x3c91ef = _0xc94e0.dynCall_iifiiiijii = _0xc94e0.asm.ss).apply(null, arguments);
  };
  var _0x5ce8cd = _0xc94e0.dynCall_vifijii = function () {
    return (_0x5ce8cd = _0xc94e0.dynCall_vifijii = _0xc94e0.asm.ts).apply(null, arguments);
  };
  var _0x35ba2c = _0xc94e0.dynCall_iiiifffiii = function () {
    return (_0x35ba2c = _0xc94e0.dynCall_iiiifffiii = _0xc94e0.asm.us).apply(null, arguments);
  };
  var _0x4c44ed = _0xc94e0.dynCall_iiiifffffi = function () {
    return (_0x4c44ed = _0xc94e0.dynCall_iiiifffffi = _0xc94e0.asm.vs).apply(null, arguments);
  };
  var _0x41c70a = _0xc94e0.dynCall_viffiiiif = function () {
    return (_0x41c70a = _0xc94e0.dynCall_viffiiiif = _0xc94e0.asm.ws).apply(null, arguments);
  };
  var _0x42f275 = _0xc94e0.dynCall_viffiifffffiii = function () {
    return (_0x42f275 = _0xc94e0.dynCall_viffiifffffiii = _0xc94e0.asm.xs).apply(null, arguments);
  };
  var _0x2f1f81 = _0xc94e0.dynCall_viffffiifffiiiiif = function () {
    return (_0x2f1f81 = _0xc94e0.dynCall_viffffiifffiiiiif = _0xc94e0.asm.ys).apply(null, arguments);
  };
  var _0x42173d = _0xc94e0.dynCall_iiiifffffii = function () {
    return (_0x42173d = _0xc94e0.dynCall_iiiifffffii = _0xc94e0.asm.zs).apply(null, arguments);
  };
  var _0x2e5c22 = _0xc94e0.dynCall_viiiiiiiiiiifii = function () {
    return (_0x2e5c22 = _0xc94e0.dynCall_viiiiiiiiiiifii = _0xc94e0.asm.As).apply(null, arguments);
  };
  var _0x143de7 = _0xc94e0.dynCall_viff = function () {
    return (_0x143de7 = _0xc94e0.dynCall_viff = _0xc94e0.asm.Bs).apply(null, arguments);
  };
  var _0x34f76a = _0xc94e0.dynCall_iiiiifiiiiif = function () {
    return (_0x34f76a = _0xc94e0.dynCall_iiiiifiiiiif = _0xc94e0.asm.Cs).apply(null, arguments);
  };
  var _0x194a75 = _0xc94e0.dynCall_viiifiiiii = function () {
    return (_0x194a75 = _0xc94e0.dynCall_viiifiiiii = _0xc94e0.asm.Ds).apply(null, arguments);
  };
  var _0x2514ef = _0xc94e0.dynCall_viiiifiiiiif = function () {
    return (_0x2514ef = _0xc94e0.dynCall_viiiifiiiiif = _0xc94e0.asm.Es).apply(null, arguments);
  };
  var _0x452fdb = _0xc94e0.dynCall_iifff = function () {
    return (_0x452fdb = _0xc94e0.dynCall_iifff = _0xc94e0.asm.Fs).apply(null, arguments);
  };
  var _0x4d4024 = _0xc94e0.dynCall_iif = function () {
    return (_0x4d4024 = _0xc94e0.dynCall_iif = _0xc94e0.asm.Gs).apply(null, arguments);
  };
  var _0x23d982 = _0xc94e0.dynCall_viijijj = function () {
    return (_0x23d982 = _0xc94e0.dynCall_viijijj = _0xc94e0.asm.Hs).apply(null, arguments);
  };
  var _0x22e712 = _0xc94e0.dynCall_viijj = function () {
    return (_0x22e712 = _0xc94e0.dynCall_viijj = _0xc94e0.asm.Is).apply(null, arguments);
  };
  var _0x4a8e04 = _0xc94e0.dynCall_viiiij = function () {
    return (_0x4a8e04 = _0xc94e0.dynCall_viiiij = _0xc94e0.asm.Js).apply(null, arguments);
  };
  var _0x14d57f = _0xc94e0.dynCall_iiijji = function () {
    return (_0x14d57f = _0xc94e0.dynCall_iiijji = _0xc94e0.asm.Ks).apply(null, arguments);
  };
  var _0x1d6238 = _0xc94e0.dynCall_ijjiiiii = function () {
    return (_0x1d6238 = _0xc94e0.dynCall_ijjiiiii = _0xc94e0.asm.Ls).apply(null, arguments);
  };
  var _0x2b5314 = _0xc94e0.dynCall_vidd = function () {
    return (_0x2b5314 = _0xc94e0.dynCall_vidd = _0xc94e0.asm.Ms).apply(null, arguments);
  };
  var _0x27dda5 = _0xc94e0.dynCall_iiiiiifffiiifiii = function () {
    return (_0x27dda5 = _0xc94e0.dynCall_iiiiiifffiiifiii = _0xc94e0.asm.Ns).apply(null, arguments);
  };
  var _0x13e0fd = _0xc94e0.dynCall_viiif = function () {
    return (_0x13e0fd = _0xc94e0.dynCall_viiif = _0xc94e0.asm.Os).apply(null, arguments);
  };
  var _0x2485af = _0xc94e0.dynCall_fiiiif = function () {
    return (_0x2485af = _0xc94e0.dynCall_fiiiif = _0xc94e0.asm.Ps).apply(null, arguments);
  };
  var _0x1ad0f4 = _0xc94e0.dynCall_viffff = function () {
    return (_0x1ad0f4 = _0xc94e0.dynCall_viffff = _0xc94e0.asm.Qs).apply(null, arguments);
  };
  var _0x45496e = _0xc94e0.dynCall_vifff = function () {
    return (_0x45496e = _0xc94e0.dynCall_vifff = _0xc94e0.asm.Rs).apply(null, arguments);
  };
  var _0x12efa1 = _0xc94e0.dynCall_viifff = function () {
    return (_0x12efa1 = _0xc94e0.dynCall_viifff = _0xc94e0.asm.Ss).apply(null, arguments);
  };
  var _0x6a54dc = _0xc94e0.dynCall_vf = function () {
    return (_0x6a54dc = _0xc94e0.dynCall_vf = _0xc94e0.asm.Ts).apply(null, arguments);
  };
  var _0x130336 = _0xc94e0.dynCall_vffff = function () {
    return (_0x130336 = _0xc94e0.dynCall_vffff = _0xc94e0.asm.Us).apply(null, arguments);
  };
  var _0x28382f = _0xc94e0.dynCall_vff = function () {
    return (_0x28382f = _0xc94e0.dynCall_vff = _0xc94e0.asm.Vs).apply(null, arguments);
  };
  var _0x352d1a = _0xc94e0.dynCall_fff = function () {
    return (_0x352d1a = _0xc94e0.dynCall_fff = _0xc94e0.asm.Ws).apply(null, arguments);
  };
  var _0x84e112 = _0xc94e0.dynCall_f = function () {
    return (_0x84e112 = _0xc94e0.dynCall_f = _0xc94e0.asm.Xs).apply(null, arguments);
  };
  var _0x5bfedb = _0xc94e0.dynCall_vfff = function () {
    return (_0x5bfedb = _0xc94e0.dynCall_vfff = _0xc94e0.asm.Ys).apply(null, arguments);
  };
  var _0x3278f2 = _0xc94e0.dynCall_ff = function () {
    return (_0x3278f2 = _0xc94e0.dynCall_ff = _0xc94e0.asm.Zs).apply(null, arguments);
  };
  var _0x18ae5a = _0xc94e0.dynCall_vififfi = function () {
    return (_0x18ae5a = _0xc94e0.dynCall_vififfi = _0xc94e0.asm._s).apply(null, arguments);
  };
  var _0x407668 = _0xc94e0.dynCall_fiif = function () {
    return (_0x407668 = _0xc94e0.dynCall_fiif = _0xc94e0.asm.$s).apply(null, arguments);
  };
  var _0x1f5528 = _0xc94e0.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x1f5528 = _0xc94e0.dynCall_iiiiiiffiiiiiiiiiffffiii = _0xc94e0.asm.at).apply(null, arguments);
  };
  var _0x35e619 = _0xc94e0.dynCall_viififi = function () {
    return (_0x35e619 = _0xc94e0.dynCall_viififi = _0xc94e0.asm.bt).apply(null, arguments);
  };
  var _0x1891f8 = _0xc94e0.dynCall_viiiiiiiijiii = function () {
    return (_0x1891f8 = _0xc94e0.dynCall_viiiiiiiijiii = _0xc94e0.asm.ct).apply(null, arguments);
  };
  function _0x5b2795(_0x12d95a, _0x1a796c) {
    var _0x305d87 = _0x1b881f();
    try {
      return _0x25d073(_0x12d95a, _0x1a796c);
    } catch (_0x5654ef) {
      _0x2351aa(_0x305d87);
      if (_0x5654ef !== _0x5654ef + 0 && _0x5654ef !== "longjmp") {
        throw _0x5654ef;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x53df90(_0x4fae2c, _0x5100ae, _0x4fcdcb) {
    var _0x8179b2 = _0x1b881f();
    try {
      return _0x456bc5(_0x4fae2c, _0x5100ae, _0x4fcdcb);
    } catch (_0x43ca60) {
      _0x2351aa(_0x8179b2);
      if (_0x43ca60 !== _0x43ca60 + 0 && _0x43ca60 !== "longjmp") {
        throw _0x43ca60;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x40fc98(_0x15bc5b, _0x488fd8, _0x3ccdf6, _0x4f0a17) {
    var _0x425c7d = _0x1b881f();
    try {
      _0x1159bc(_0x15bc5b, _0x488fd8, _0x3ccdf6, _0x4f0a17);
    } catch (_0x4d755d) {
      _0x2351aa(_0x425c7d);
      if (_0x4d755d !== _0x4d755d + 0 && _0x4d755d !== "longjmp") {
        throw _0x4d755d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4eddc4(_0x2a53d6, _0x341636, _0x248ebd, _0x2c8da9, _0x1a731b, _0x24244a) {
    var _0x4213ef = _0x1b881f();
    try {
      return _0x4998d6(_0x2a53d6, _0x341636, _0x248ebd, _0x2c8da9, _0x1a731b, _0x24244a);
    } catch (_0x4168f5) {
      _0x2351aa(_0x4213ef);
      if (_0x4168f5 !== _0x4168f5 + 0 && _0x4168f5 !== "longjmp") {
        throw _0x4168f5;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xfee020(_0x471d5d, _0x446481, _0x5a4a6e, _0x57929c) {
    var _0x5818c6 = _0x1b881f();
    try {
      return _0x116539(_0x471d5d, _0x446481, _0x5a4a6e, _0x57929c);
    } catch (_0x16fa42) {
      _0x2351aa(_0x5818c6);
      if (_0x16fa42 !== _0x16fa42 + 0 && _0x16fa42 !== "longjmp") {
        throw _0x16fa42;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3b292f(_0x1d76c7, _0x43f15d, _0x3f6cbc, _0x5ebb67, _0x16d9eb) {
    var _0x2dbbec = _0x1b881f();
    try {
      _0x3edfb1(_0x1d76c7, _0x43f15d, _0x3f6cbc, _0x5ebb67, _0x16d9eb);
    } catch (_0x230058) {
      _0x2351aa(_0x2dbbec);
      if (_0x230058 !== _0x230058 + 0 && _0x230058 !== "longjmp") {
        throw _0x230058;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xe55dc2(_0x1182f4, _0x205b19, _0x4c913e, _0x2a0de9, _0xe20d59) {
    var _0x5c760b = _0x1b881f();
    try {
      return _0x27410c(_0x1182f4, _0x205b19, _0x4c913e, _0x2a0de9, _0xe20d59);
    } catch (_0x3754f3) {
      _0x2351aa(_0x5c760b);
      if (_0x3754f3 !== _0x3754f3 + 0 && _0x3754f3 !== "longjmp") {
        throw _0x3754f3;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x27ce54(_0xcc3a6b, _0x3e0127, _0x5cb7b0, _0xe401cd) {
    var _0x15043c = _0x1b881f();
    try {
      return _0x82b7c1(_0xcc3a6b, _0x3e0127, _0x5cb7b0, _0xe401cd);
    } catch (_0x313929) {
      _0x2351aa(_0x15043c);
      if (_0x313929 !== _0x313929 + 0 && _0x313929 !== "longjmp") {
        throw _0x313929;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xdebb39(_0x29197a, _0x2c83fc, _0x3e2b26, _0x1d0dd6) {
    var _0x557ad6 = _0x1b881f();
    try {
      return _0x4c8f69(_0x29197a, _0x2c83fc, _0x3e2b26, _0x1d0dd6);
    } catch (_0x3b24eb) {
      _0x2351aa(_0x557ad6);
      if (_0x3b24eb !== _0x3b24eb + 0 && _0x3b24eb !== "longjmp") {
        throw _0x3b24eb;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3783c7(_0x984f94, _0x15b42a, _0x58d95c, _0x39e872) {
    var _0x288523 = _0x1b881f();
    try {
      _0x2414f4(_0x984f94, _0x15b42a, _0x58d95c, _0x39e872);
    } catch (_0x3a971f) {
      _0x2351aa(_0x288523);
      if (_0x3a971f !== _0x3a971f + 0 && _0x3a971f !== "longjmp") {
        throw _0x3a971f;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1f241e(_0x57a926, _0x46b463, _0x1c891f) {
    var _0x5289df = _0x1b881f();
    try {
      _0x475030(_0x57a926, _0x46b463, _0x1c891f);
    } catch (_0x5ab086) {
      _0x2351aa(_0x5289df);
      if (_0x5ab086 !== _0x5ab086 + 0 && _0x5ab086 !== "longjmp") {
        throw _0x5ab086;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x484a51(_0x1449bb, _0x1e08a5) {
    var _0x1cf2cd = _0x1b881f();
    try {
      _0x3ce20f(_0x1449bb, _0x1e08a5);
    } catch (_0x30fa9a) {
      _0x2351aa(_0x1cf2cd);
      if (_0x30fa9a !== _0x30fa9a + 0 && _0x30fa9a !== "longjmp") {
        throw _0x30fa9a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x21d78a(_0x5bed29) {
    var _0x22d803 = _0x1b881f();
    try {
      _0x55af51(_0x5bed29);
    } catch (_0x4a3327) {
      _0x2351aa(_0x22d803);
      if (_0x4a3327 !== _0x4a3327 + 0 && _0x4a3327 !== "longjmp") {
        throw _0x4a3327;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xee8c2b(_0x5c2768) {
    var _0x18761d = _0x1b881f();
    try {
      return _0x5cc7e8(_0x5c2768);
    } catch (_0x24092f) {
      _0x2351aa(_0x18761d);
      if (_0x24092f !== _0x24092f + 0 && _0x24092f !== "longjmp") {
        throw _0x24092f;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4b3397(_0x120294, _0x468bd1, _0x5358f1, _0xcd3b11, _0x4bb8f7, _0xc23c47, _0x20bc28, _0x56ae36) {
    var _0x1299fc = _0x1b881f();
    try {
      return _0x55d899(_0x120294, _0x468bd1, _0x5358f1, _0xcd3b11, _0x4bb8f7, _0xc23c47, _0x20bc28, _0x56ae36);
    } catch (_0xe85066) {
      _0x2351aa(_0x1299fc);
      if (_0xe85066 !== _0xe85066 + 0 && _0xe85066 !== "longjmp") {
        throw _0xe85066;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3087c5(_0x3a798a, _0xddaea7, _0x447a5f, _0x490027, _0x1458d3, _0x88335) {
    var _0x2443b7 = _0x1b881f();
    try {
      _0x2ac2f8(_0x3a798a, _0xddaea7, _0x447a5f, _0x490027, _0x1458d3, _0x88335);
    } catch (_0x3096fd) {
      _0x2351aa(_0x2443b7);
      if (_0x3096fd !== _0x3096fd + 0 && _0x3096fd !== "longjmp") {
        throw _0x3096fd;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3afb04(_0x41c4cb, _0x214c2a, _0x17e935, _0x349dae, _0x1552c8, _0x3da1e2, _0x138e2b) {
    var _0x311901 = _0x1b881f();
    try {
      return _0x9a11c0(_0x41c4cb, _0x214c2a, _0x17e935, _0x349dae, _0x1552c8, _0x3da1e2, _0x138e2b);
    } catch (_0x3c4a94) {
      _0x2351aa(_0x311901);
      if (_0x3c4a94 !== _0x3c4a94 + 0 && _0x3c4a94 !== "longjmp") {
        throw _0x3c4a94;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x208def(_0x51dc7d, _0x2bd7fe, _0x1a80ae, _0x1a6047, _0x463a4f, _0x40d0a7, _0x1d084a, _0x1ec960) {
    var _0x5d1640 = _0x1b881f();
    try {
      _0x3a15ed(_0x51dc7d, _0x2bd7fe, _0x1a80ae, _0x1a6047, _0x463a4f, _0x40d0a7, _0x1d084a, _0x1ec960);
    } catch (_0xeadc6c) {
      _0x2351aa(_0x5d1640);
      if (_0xeadc6c !== _0xeadc6c + 0 && _0xeadc6c !== "longjmp") {
        throw _0xeadc6c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4c96ff(_0x2958f0, _0x5d43ba, _0x1261e6, _0x3c5ea8, _0x3a92ba, _0x41194f, _0x4f5fb7) {
    var _0x153eed = _0x1b881f();
    try {
      _0x59ebba(_0x2958f0, _0x5d43ba, _0x1261e6, _0x3c5ea8, _0x3a92ba, _0x41194f, _0x4f5fb7);
    } catch (_0x21a9da) {
      _0x2351aa(_0x153eed);
      if (_0x21a9da !== _0x21a9da + 0 && _0x21a9da !== "longjmp") {
        throw _0x21a9da;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x9b8c22(_0xe73244, _0x45225b, _0x55b497, _0x3b9de3, _0x462469, _0x13fea6, _0xf2eada, _0x366d20, _0x567c22, _0x699ee2, _0x5d328a, _0x10e0e6, _0x55cfab, _0x45010a) {
    var _0x2e626a = _0x1b881f();
    try {
      _0x2a73ca(_0xe73244, _0x45225b, _0x55b497, _0x3b9de3, _0x462469, _0x13fea6, _0xf2eada, _0x366d20, _0x567c22, _0x699ee2, _0x5d328a, _0x10e0e6, _0x55cfab, _0x45010a);
    } catch (_0x6f2914) {
      _0x2351aa(_0x2e626a);
      if (_0x6f2914 !== _0x6f2914 + 0 && _0x6f2914 !== "longjmp") {
        throw _0x6f2914;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x16dfc5(_0x13e383, _0x23cec0, _0x15f958, _0x3a8b17, _0x35360d, _0x6a7ccf, _0x53b178, _0x2072dd, _0x14fc30) {
    var _0x4383a5 = _0x1b881f();
    try {
      return _0x1782da(_0x13e383, _0x23cec0, _0x15f958, _0x3a8b17, _0x35360d, _0x6a7ccf, _0x53b178, _0x2072dd, _0x14fc30);
    } catch (_0xb9744f) {
      _0x2351aa(_0x4383a5);
      if (_0xb9744f !== _0xb9744f + 0 && _0xb9744f !== "longjmp") {
        throw _0xb9744f;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xb739fc(_0x2e653b, _0x4db2bd, _0x47144e, _0x54b81e, _0x457e37) {
    var _0x456ceb = _0x1b881f();
    try {
      _0x23cefc(_0x2e653b, _0x4db2bd, _0x47144e, _0x54b81e, _0x457e37);
    } catch (_0x9bb7aa) {
      _0x2351aa(_0x456ceb);
      if (_0x9bb7aa !== _0x9bb7aa + 0 && _0x9bb7aa !== "longjmp") {
        throw _0x9bb7aa;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x249845(_0x67d942, _0x5973f3, _0x2f3b46, _0x1df88f) {
    var _0x49d07b = _0x1b881f();
    try {
      _0x2bd8ba(_0x67d942, _0x5973f3, _0x2f3b46, _0x1df88f);
    } catch (_0x155f6a) {
      _0x2351aa(_0x49d07b);
      if (_0x155f6a !== _0x155f6a + 0 && _0x155f6a !== "longjmp") {
        throw _0x155f6a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x51b01f(_0x19e2e3, _0x55d358, _0x519c2a, _0x2f7fdd, _0xb6c538, _0x3df1a2, _0x5950ec, _0x423d6d, _0x3721f7, _0x33e30e, _0x51b4b5) {
    var _0x40f77a = _0x1b881f();
    try {
      _0x19bb96(_0x19e2e3, _0x55d358, _0x519c2a, _0x2f7fdd, _0xb6c538, _0x3df1a2, _0x5950ec, _0x423d6d, _0x3721f7, _0x33e30e, _0x51b4b5);
    } catch (_0x56591e) {
      _0x2351aa(_0x40f77a);
      if (_0x56591e !== _0x56591e + 0 && _0x56591e !== "longjmp") {
        throw _0x56591e;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4f83d6(_0x332e62, _0x555694, _0x134e08, _0x3b2d3d, _0x229590, _0x206dbd, _0x5f38ba, _0x3f4f0c, _0xb18d3, _0x5a1c47) {
    var _0x240192 = _0x1b881f();
    try {
      _0x423fed(_0x332e62, _0x555694, _0x134e08, _0x3b2d3d, _0x229590, _0x206dbd, _0x5f38ba, _0x3f4f0c, _0xb18d3, _0x5a1c47);
    } catch (_0x1dea20) {
      _0x2351aa(_0x240192);
      if (_0x1dea20 !== _0x1dea20 + 0 && _0x1dea20 !== "longjmp") {
        throw _0x1dea20;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x5915c2(_0x1bc4e0, _0x257cc2, _0x36fd33) {
    var _0x145492 = _0x1b881f();
    try {
      return _0x17f7a8(_0x1bc4e0, _0x257cc2, _0x36fd33);
    } catch (_0x2bf02d) {
      _0x2351aa(_0x145492);
      if (_0x2bf02d !== _0x2bf02d + 0 && _0x2bf02d !== "longjmp") {
        throw _0x2bf02d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3fb446(_0xcb9ff7, _0x41a54b, _0x8088ac, _0x3ff005, _0x5f599b) {
    var _0x36f570 = _0x1b881f();
    try {
      return _0x2e87ef(_0xcb9ff7, _0x41a54b, _0x8088ac, _0x3ff005, _0x5f599b);
    } catch (_0x4309ee) {
      _0x2351aa(_0x36f570);
      if (_0x4309ee !== _0x4309ee + 0 && _0x4309ee !== "longjmp") {
        throw _0x4309ee;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x51ff17(_0x36fcc0, _0x3aac89, _0x5bb347) {
    var _0x80afe0 = _0x1b881f();
    try {
      return _0x276c00(_0x36fcc0, _0x3aac89, _0x5bb347);
    } catch (_0x2f3439) {
      _0x2351aa(_0x80afe0);
      if (_0x2f3439 !== _0x2f3439 + 0 && _0x2f3439 !== "longjmp") {
        throw _0x2f3439;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x550c14(_0x33b73d, _0x4f8da, _0x3306b8, _0x2d4ba6, _0x2624c5) {
    var _0x3f5510 = _0x1b881f();
    try {
      return _0x162b8e(_0x33b73d, _0x4f8da, _0x3306b8, _0x2d4ba6, _0x2624c5);
    } catch (_0x64a82) {
      _0x2351aa(_0x3f5510);
      if (_0x64a82 !== _0x64a82 + 0 && _0x64a82 !== "longjmp") {
        throw _0x64a82;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x245377(_0x1ebeb5, _0x47bef6, _0xdd03c1, _0x3c9e36, _0x152ee0) {
    var _0x468723 = _0x1b881f();
    try {
      _0x5777b9(_0x1ebeb5, _0x47bef6, _0xdd03c1, _0x3c9e36, _0x152ee0);
    } catch (_0x179cce) {
      _0x2351aa(_0x468723);
      if (_0x179cce !== _0x179cce + 0 && _0x179cce !== "longjmp") {
        throw _0x179cce;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x2e586a(_0x43229e, _0x3ae71f, _0x268423, _0x5c2400, _0x1ffd1b) {
    var _0x17d08a = _0x1b881f();
    try {
      return _0x4b0b54(_0x43229e, _0x3ae71f, _0x268423, _0x5c2400, _0x1ffd1b);
    } catch (_0x4cf66a) {
      _0x2351aa(_0x17d08a);
      if (_0x4cf66a !== _0x4cf66a + 0 && _0x4cf66a !== "longjmp") {
        throw _0x4cf66a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x523230(_0x231c9f, _0x1800de, _0x23475c, _0x30084d, _0x4891e9) {
    var _0x3e889e = _0x1b881f();
    try {
      _0x45b2d0(_0x231c9f, _0x1800de, _0x23475c, _0x30084d, _0x4891e9);
    } catch (_0x566565) {
      _0x2351aa(_0x3e889e);
      if (_0x566565 !== _0x566565 + 0 && _0x566565 !== "longjmp") {
        throw _0x566565;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x383a8b(_0x52c0ff, _0x55c7ac, _0x3d56e9, _0x25c058) {
    var _0x47dd4a = _0x1b881f();
    try {
      _0x55cea5(_0x52c0ff, _0x55c7ac, _0x3d56e9, _0x25c058);
    } catch (_0x420d9a) {
      _0x2351aa(_0x47dd4a);
      if (_0x420d9a !== _0x420d9a + 0 && _0x420d9a !== "longjmp") {
        throw _0x420d9a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x38d7e7(_0x436654, _0x520d47, _0x379a42, _0x146e37, _0x435ffc, _0x135a07, _0x4246d4, _0x263899, _0x11eb6e, _0x4a582b, _0x3c39b0, _0x4b273d) {
    var _0x32a160 = _0x1b881f();
    try {
      _0x233450(_0x436654, _0x520d47, _0x379a42, _0x146e37, _0x435ffc, _0x135a07, _0x4246d4, _0x263899, _0x11eb6e, _0x4a582b, _0x3c39b0, _0x4b273d);
    } catch (_0x3b55b7) {
      _0x2351aa(_0x32a160);
      if (_0x3b55b7 !== _0x3b55b7 + 0 && _0x3b55b7 !== "longjmp") {
        throw _0x3b55b7;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1b3b6e(_0x1292f1, _0x3f101b, _0x14d4ed, _0x2cc2c3, _0x566d08, _0x400930, _0x1e77e8, _0x354f32, _0x4d5c5e, _0x898574, _0x406f39, _0x340231, _0x18974e) {
    var _0x3159c9 = _0x1b881f();
    try {
      return _0x65809(_0x1292f1, _0x3f101b, _0x14d4ed, _0x2cc2c3, _0x566d08, _0x400930, _0x1e77e8, _0x354f32, _0x4d5c5e, _0x898574, _0x406f39, _0x340231, _0x18974e);
    } catch (_0x22e375) {
      _0x2351aa(_0x3159c9);
      if (_0x22e375 !== _0x22e375 + 0 && _0x22e375 !== "longjmp") {
        throw _0x22e375;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x29401a(_0x4ab2f3, _0x4a3267, _0x683663, _0x56755, _0xed3984) {
    var _0x511fba = _0x1b881f();
    try {
      return _0x47d0ce(_0x4ab2f3, _0x4a3267, _0x683663, _0x56755, _0xed3984);
    } catch (_0x3f75d4) {
      _0x2351aa(_0x511fba);
      if (_0x3f75d4 !== _0x3f75d4 + 0 && _0x3f75d4 !== "longjmp") {
        throw _0x3f75d4;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x57625e(_0x54bda0, _0x9a7a1c) {
    var _0x1b4c12 = _0x1b881f();
    try {
      return _0x176d50(_0x54bda0, _0x9a7a1c);
    } catch (_0xb5cea) {
      _0x2351aa(_0x1b4c12);
      if (_0xb5cea !== _0xb5cea + 0 && _0xb5cea !== "longjmp") {
        throw _0xb5cea;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x36701d(_0x5e5dab, _0x3312cd, _0x25593f, _0x3b0843, _0x37968c) {
    var _0x24c040 = _0x1b881f();
    try {
      return _0x4d90c0(_0x5e5dab, _0x3312cd, _0x25593f, _0x3b0843, _0x37968c);
    } catch (_0x3810bb) {
      _0x2351aa(_0x24c040);
      if (_0x3810bb !== _0x3810bb + 0 && _0x3810bb !== "longjmp") {
        throw _0x3810bb;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x24a257(_0x10fc2d, _0x276c03, _0xd1fabf, _0x555cf5, _0x4a2577, _0x5da7ce, _0x544554, _0x546dcb) {
    var _0x41ef89 = _0x1b881f();
    try {
      return _0x4d1f9d(_0x10fc2d, _0x276c03, _0xd1fabf, _0x555cf5, _0x4a2577, _0x5da7ce, _0x544554, _0x546dcb);
    } catch (_0x20ead3) {
      _0x2351aa(_0x41ef89);
      if (_0x20ead3 !== _0x20ead3 + 0 && _0x20ead3 !== "longjmp") {
        throw _0x20ead3;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x309a0c(_0x2b69ea, _0x38e9b9, _0x206fe4, _0x488358, _0x556c3b, _0x2efc68) {
    var _0x569dca = _0x1b881f();
    try {
      _0x2123ed(_0x2b69ea, _0x38e9b9, _0x206fe4, _0x488358, _0x556c3b, _0x2efc68);
    } catch (_0x504910) {
      _0x2351aa(_0x569dca);
      if (_0x504910 !== _0x504910 + 0 && _0x504910 !== "longjmp") {
        throw _0x504910;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x2556a9(_0x2ee0fe, _0x16d879, _0x5d220f, _0x5c3862, _0x3ebb1d, _0x2e7940) {
    var _0x4b71b0 = _0x1b881f();
    try {
      return _0x1b86db(_0x2ee0fe, _0x16d879, _0x5d220f, _0x5c3862, _0x3ebb1d, _0x2e7940);
    } catch (_0x413a22) {
      _0x2351aa(_0x4b71b0);
      if (_0x413a22 !== _0x413a22 + 0 && _0x413a22 !== "longjmp") {
        throw _0x413a22;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x30d2b1(_0x21558f, _0x2bdf75, _0x373613, _0x50d2a2, _0x4c9f49) {
    var _0x2f66ca = _0x1b881f();
    try {
      _0x445de4(_0x21558f, _0x2bdf75, _0x373613, _0x50d2a2, _0x4c9f49);
    } catch (_0x27d81c) {
      _0x2351aa(_0x2f66ca);
      if (_0x27d81c !== _0x27d81c + 0 && _0x27d81c !== "longjmp") {
        throw _0x27d81c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4accc1(_0x2037fb, _0x1fe1ab, _0x1114a4, _0x4ba487) {
    var _0xb408fa = _0x1b881f();
    try {
      return _0x42d5b5(_0x2037fb, _0x1fe1ab, _0x1114a4, _0x4ba487);
    } catch (_0x35d5bb) {
      _0x2351aa(_0xb408fa);
      if (_0x35d5bb !== _0x35d5bb + 0 && _0x35d5bb !== "longjmp") {
        throw _0x35d5bb;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x2a555(_0x94ef06, _0x1ee691, _0x5a7e7c, _0xadc596, _0x36e916, _0xf13b9d, _0x4933e9) {
    var _0x1f1f82 = _0x1b881f();
    try {
      return _0x32447c(_0x94ef06, _0x1ee691, _0x5a7e7c, _0xadc596, _0x36e916, _0xf13b9d, _0x4933e9);
    } catch (_0x48852b) {
      _0x2351aa(_0x1f1f82);
      if (_0x48852b !== _0x48852b + 0 && _0x48852b !== "longjmp") {
        throw _0x48852b;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x16a4e4(_0x23c03e, _0x385793, _0x4c4c2e) {
    var _0x4ebdec = _0x1b881f();
    try {
      return _0x13feea(_0x23c03e, _0x385793, _0x4c4c2e);
    } catch (_0x391d14) {
      _0x2351aa(_0x4ebdec);
      if (_0x391d14 !== _0x391d14 + 0 && _0x391d14 !== "longjmp") {
        throw _0x391d14;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1198f2(_0x20cfa5, _0x1a9285, _0x34fde0) {
    var _0x5e7078 = _0x1b881f();
    try {
      return _0x346c11(_0x20cfa5, _0x1a9285, _0x34fde0);
    } catch (_0x5ffb6a) {
      _0x2351aa(_0x5e7078);
      if (_0x5ffb6a !== _0x5ffb6a + 0 && _0x5ffb6a !== "longjmp") {
        throw _0x5ffb6a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1f3963(_0x176974, _0xcb677d, _0x565b20, _0x29af64, _0x3fdd8d, _0x5f3877, _0x346217, _0xae80fb, _0x1088b0) {
    var _0x2a816e = _0x1b881f();
    try {
      _0x5ed8f7(_0x176974, _0xcb677d, _0x565b20, _0x29af64, _0x3fdd8d, _0x5f3877, _0x346217, _0xae80fb, _0x1088b0);
    } catch (_0x5380f8) {
      _0x2351aa(_0x2a816e);
      if (_0x5380f8 !== _0x5380f8 + 0 && _0x5380f8 !== "longjmp") {
        throw _0x5380f8;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x5c0e46(_0x2ad65b, _0x2fd796, _0x462ae9, _0x47614b, _0x39128f, _0x5e0889, _0x5d3de4, _0x4a546b, _0x9b236f, _0x20702, _0x376372, _0x44fba4, _0x49bfb0) {
    var _0xa3b1a1 = _0x1b881f();
    try {
      _0xbe5981(_0x2ad65b, _0x2fd796, _0x462ae9, _0x47614b, _0x39128f, _0x5e0889, _0x5d3de4, _0x4a546b, _0x9b236f, _0x20702, _0x376372, _0x44fba4, _0x49bfb0);
    } catch (_0x11a10d) {
      _0x2351aa(_0xa3b1a1);
      if (_0x11a10d !== _0x11a10d + 0 && _0x11a10d !== "longjmp") {
        throw _0x11a10d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xeb5bf(_0x1a8e3f, _0x1edad4, _0x1c122e, _0x5501a8) {
    var _0x46829d = _0x1b881f();
    try {
      return _0x5b8f2c(_0x1a8e3f, _0x1edad4, _0x1c122e, _0x5501a8);
    } catch (_0x33a54d) {
      _0x2351aa(_0x46829d);
      if (_0x33a54d !== _0x33a54d + 0 && _0x33a54d !== "longjmp") {
        throw _0x33a54d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x37eb93(_0x251e7b, _0xc1d494, _0x5df237, _0x3045f9) {
    var _0x2a60fc = _0x1b881f();
    try {
      return _0x40eb90(_0x251e7b, _0xc1d494, _0x5df237, _0x3045f9);
    } catch (_0x3245c1) {
      _0x2351aa(_0x2a60fc);
      if (_0x3245c1 !== _0x3245c1 + 0 && _0x3245c1 !== "longjmp") {
        throw _0x3245c1;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x204976(_0x3d6bcf, _0x491fc6, _0x51d7df, _0xfd7d2b) {
    var _0x35ab80 = _0x1b881f();
    try {
      return _0x21204b(_0x3d6bcf, _0x491fc6, _0x51d7df, _0xfd7d2b);
    } catch (_0x39b722) {
      _0x2351aa(_0x35ab80);
      if (_0x39b722 !== _0x39b722 + 0 && _0x39b722 !== "longjmp") {
        throw _0x39b722;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x267334(_0x147fa7, _0xcc622, _0x130120, _0x34930f) {
    var _0x300646 = _0x1b881f();
    try {
      return _0x1d388e(_0x147fa7, _0xcc622, _0x130120, _0x34930f);
    } catch (_0x31f0f4) {
      _0x2351aa(_0x300646);
      if (_0x31f0f4 !== _0x31f0f4 + 0 && _0x31f0f4 !== "longjmp") {
        throw _0x31f0f4;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4915e2(_0x5bccd1, _0x8d917, _0x30f798, _0x2c9058, _0x30b413) {
    var _0x1bd42c = _0x1b881f();
    try {
      return _0x233a7d(_0x5bccd1, _0x8d917, _0x30f798, _0x2c9058, _0x30b413);
    } catch (_0x17f548) {
      _0x2351aa(_0x1bd42c);
      if (_0x17f548 !== _0x17f548 + 0 && _0x17f548 !== "longjmp") {
        throw _0x17f548;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xec9fda(_0x4dc723, _0x176d27, _0x236ba5, _0x3c7acf, _0x51da72, _0x5da4de, _0x91db17) {
    var _0x51bbbf = _0x1b881f();
    try {
      _0x3c93da(_0x4dc723, _0x176d27, _0x236ba5, _0x3c7acf, _0x51da72, _0x5da4de, _0x91db17);
    } catch (_0x29a0a2) {
      _0x2351aa(_0x51bbbf);
      if (_0x29a0a2 !== _0x29a0a2 + 0 && _0x29a0a2 !== "longjmp") {
        throw _0x29a0a2;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x58c2cb(_0x3f433c, _0x2368a7, _0x1235ac, _0x4b3fe8, _0x33eb77, _0x41b2fe) {
    var _0x12777e = _0x1b881f();
    try {
      _0xe34432(_0x3f433c, _0x2368a7, _0x1235ac, _0x4b3fe8, _0x33eb77, _0x41b2fe);
    } catch (_0x1fc410) {
      _0x2351aa(_0x12777e);
      if (_0x1fc410 !== _0x1fc410 + 0 && _0x1fc410 !== "longjmp") {
        throw _0x1fc410;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1629b7(_0x2963cf, _0x2dfbee, _0x380c0f, _0x54762c, _0x1fb6c2, _0x27eccd, _0x5742ac, _0x19c708, _0x43c85d, _0x22f32b) {
    var _0x3354a5 = _0x1b881f();
    try {
      return _0x92eab1(_0x2963cf, _0x2dfbee, _0x380c0f, _0x54762c, _0x1fb6c2, _0x27eccd, _0x5742ac, _0x19c708, _0x43c85d, _0x22f32b);
    } catch (_0x2eed14) {
      _0x2351aa(_0x3354a5);
      if (_0x2eed14 !== _0x2eed14 + 0 && _0x2eed14 !== "longjmp") {
        throw _0x2eed14;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3351c6(_0x211b2c, _0x39e17b, _0x232bb8, _0x5be070, _0x3a9bf1, _0x1cc75e, _0xc90c90, _0x305a0b, _0x360774, _0x1fa6cb, _0x169aeb) {
    var _0x146593 = _0x1b881f();
    try {
      return _0x12a4ed(_0x211b2c, _0x39e17b, _0x232bb8, _0x5be070, _0x3a9bf1, _0x1cc75e, _0xc90c90, _0x305a0b, _0x360774, _0x1fa6cb, _0x169aeb);
    } catch (_0x3b3712) {
      _0x2351aa(_0x146593);
      if (_0x3b3712 !== _0x3b3712 + 0 && _0x3b3712 !== "longjmp") {
        throw _0x3b3712;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1a0aee(_0x2b2599, _0xf561b9, _0x3de5da, _0x46d090, _0x3d2dd4, _0x4d08a7, _0x49d0c2, _0x142c9e, _0x2e87bd, _0x30b661, _0x3213b8, _0xe2ebb3, _0x3ea4af, _0x299817) {
    var _0x57ab63 = _0x1b881f();
    try {
      _0x3dc4ed(_0x2b2599, _0xf561b9, _0x3de5da, _0x46d090, _0x3d2dd4, _0x4d08a7, _0x49d0c2, _0x142c9e, _0x2e87bd, _0x30b661, _0x3213b8, _0xe2ebb3, _0x3ea4af, _0x299817);
    } catch (_0x1a87ff) {
      _0x2351aa(_0x57ab63);
      if (_0x1a87ff !== _0x1a87ff + 0 && _0x1a87ff !== "longjmp") {
        throw _0x1a87ff;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x404a22(_0x1b8bcb, _0xc1d38e, _0x1ecb71, _0x1f9f30, _0x2720b0, _0x40fb36, _0x563d1a, _0x18a043, _0x3ddc37, _0x37cb04, _0xcde73b, _0x525f74, _0x3be79e, _0x15dca3) {
    var _0x1ac3e3 = _0x1b881f();
    try {
      _0x2601ba(_0x1b8bcb, _0xc1d38e, _0x1ecb71, _0x1f9f30, _0x2720b0, _0x40fb36, _0x563d1a, _0x18a043, _0x3ddc37, _0x37cb04, _0xcde73b, _0x525f74, _0x3be79e, _0x15dca3);
    } catch (_0x5811f7) {
      _0x2351aa(_0x1ac3e3);
      if (_0x5811f7 !== _0x5811f7 + 0 && _0x5811f7 !== "longjmp") {
        throw _0x5811f7;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x308232(_0xd042bd, _0x10b63c, _0x4ea8ee, _0x345155, _0x4ca5be, _0x59b80d, _0x474f02) {
    var _0x5b8440 = _0x1b881f();
    try {
      return _0x1b5722(_0xd042bd, _0x10b63c, _0x4ea8ee, _0x345155, _0x4ca5be, _0x59b80d, _0x474f02);
    } catch (_0x331af5) {
      _0x2351aa(_0x5b8440);
      if (_0x331af5 !== _0x331af5 + 0 && _0x331af5 !== "longjmp") {
        throw _0x331af5;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x47c269(_0x561f56, _0x2cc311, _0x5a8c76, _0x158af1, _0x1caee7, _0x427afb, _0x12dfc8) {
    var _0x56a030 = _0x1b881f();
    try {
      return _0x30a650(_0x561f56, _0x2cc311, _0x5a8c76, _0x158af1, _0x1caee7, _0x427afb, _0x12dfc8);
    } catch (_0x4795c5) {
      _0x2351aa(_0x56a030);
      if (_0x4795c5 !== _0x4795c5 + 0 && _0x4795c5 !== "longjmp") {
        throw _0x4795c5;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x112949(_0x1c6c7c, _0x2e4f06, _0x1574e7, _0x5b6008) {
    var _0x507548 = _0x1b881f();
    try {
      _0x2b5314(_0x1c6c7c, _0x2e4f06, _0x1574e7, _0x5b6008);
    } catch (_0x1ed967) {
      _0x2351aa(_0x507548);
      if (_0x1ed967 !== _0x1ed967 + 0 && _0x1ed967 !== "longjmp") {
        throw _0x1ed967;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1d4326(_0x17ea4f, _0x2e4d26, _0x9b9b23, _0x31b9f0, _0x49a99a) {
    var _0x52eeff = _0x1b881f();
    try {
      return _0x4c5718(_0x17ea4f, _0x2e4d26, _0x9b9b23, _0x31b9f0, _0x49a99a);
    } catch (_0x24511c) {
      _0x2351aa(_0x52eeff);
      if (_0x24511c !== _0x24511c + 0 && _0x24511c !== "longjmp") {
        throw _0x24511c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x306198(_0x27b63d, _0x3c17bd, _0x5ac905, _0x2c52bd, _0x51f19e) {
    var _0x3d3fae = _0x1b881f();
    try {
      return _0x254d38(_0x27b63d, _0x3c17bd, _0x5ac905, _0x2c52bd, _0x51f19e);
    } catch (_0x2e408e) {
      _0x2351aa(_0x3d3fae);
      if (_0x2e408e !== _0x2e408e + 0 && _0x2e408e !== "longjmp") {
        throw _0x2e408e;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1c36e6(_0x11edab) {
    var _0x2c7bef = _0x1b881f();
    try {
      return _0x151fc9(_0x11edab);
    } catch (_0x40b96b) {
      _0x2351aa(_0x2c7bef);
      if (_0x40b96b !== _0x40b96b + 0 && _0x40b96b !== "longjmp") {
        throw _0x40b96b;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x388dc6(_0x510820, _0x2d295f, _0x4735f9, _0x243448) {
    var _0x2f84c2 = _0x1b881f();
    try {
      return _0x176f9c(_0x510820, _0x2d295f, _0x4735f9, _0x243448);
    } catch (_0x14cffb) {
      _0x2351aa(_0x2f84c2);
      if (_0x14cffb !== _0x14cffb + 0 && _0x14cffb !== "longjmp") {
        throw _0x14cffb;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x512a44(_0xec992d, _0x55b133, _0x53ac0d, _0xf3c82d, _0x2edaf0, _0x3c627c, _0x58e5dd, _0x4983a0) {
    var _0x333957 = _0x1b881f();
    try {
      return _0x4d0aaf(_0xec992d, _0x55b133, _0x53ac0d, _0xf3c82d, _0x2edaf0, _0x3c627c, _0x58e5dd, _0x4983a0);
    } catch (_0x320eb2) {
      _0x2351aa(_0x333957);
      if (_0x320eb2 !== _0x320eb2 + 0 && _0x320eb2 !== "longjmp") {
        throw _0x320eb2;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1e1eb4(_0x1fe17e, _0x2e4398) {
    var _0x1f35ac = _0x1b881f();
    try {
      return _0x2e81b7(_0x1fe17e, _0x2e4398);
    } catch (_0x4eb189) {
      _0x2351aa(_0x1f35ac);
      if (_0x4eb189 !== _0x4eb189 + 0 && _0x4eb189 !== "longjmp") {
        throw _0x4eb189;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x11fe34(_0xb3fcfc, _0x26c330, _0x32c81a) {
    var _0x44c901 = _0x1b881f();
    try {
      return _0x971019(_0xb3fcfc, _0x26c330, _0x32c81a);
    } catch (_0x44985c) {
      _0x2351aa(_0x44c901);
      if (_0x44985c !== _0x44985c + 0 && _0x44985c !== "longjmp") {
        throw _0x44985c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0xaf58e8(_0x59105d, _0x1d49f7, _0x3f05ee, _0x1733e8) {
    var _0x1abaf1 = _0x1b881f();
    try {
      return _0x32c776(_0x59105d, _0x1d49f7, _0x3f05ee, _0x1733e8);
    } catch (_0x22e42e) {
      _0x2351aa(_0x1abaf1);
      if (_0x22e42e !== _0x22e42e + 0 && _0x22e42e !== "longjmp") {
        throw _0x22e42e;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x38feed(_0x135a9c, _0x92719f, _0x585d6d, _0x1d3634, _0xc360b4, _0x6efb7) {
    var _0x5b4f54 = _0x1b881f();
    try {
      _0x444cee(_0x135a9c, _0x92719f, _0x585d6d, _0x1d3634, _0xc360b4, _0x6efb7);
    } catch (_0x372914) {
      _0x2351aa(_0x5b4f54);
      if (_0x372914 !== _0x372914 + 0 && _0x372914 !== "longjmp") {
        throw _0x372914;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x10efa1(_0x158132, _0x1e00f4, _0x3b9c99, _0x358f29, _0x34b22e, _0x229073) {
    var _0x1465be = _0x1b881f();
    try {
      _0x57f2d5(_0x158132, _0x1e00f4, _0x3b9c99, _0x358f29, _0x34b22e, _0x229073);
    } catch (_0x5f0355) {
      _0x2351aa(_0x1465be);
      if (_0x5f0355 !== _0x5f0355 + 0 && _0x5f0355 !== "longjmp") {
        throw _0x5f0355;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4ad076(_0x58028f, _0x35e091, _0x5c5bff, _0x6fb73a, _0x1dbf35) {
    var _0x4045fa = _0x1b881f();
    try {
      _0x3c49a6(_0x58028f, _0x35e091, _0x5c5bff, _0x6fb73a, _0x1dbf35);
    } catch (_0x2d3cc0) {
      _0x2351aa(_0x4045fa);
      if (_0x2d3cc0 !== _0x2d3cc0 + 0 && _0x2d3cc0 !== "longjmp") {
        throw _0x2d3cc0;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x221c2e(_0x6d8b8d, _0x589183, _0x20eb42, _0x9c3e27) {
    var _0x32c362 = _0x1b881f();
    try {
      return _0x5351c1(_0x6d8b8d, _0x589183, _0x20eb42, _0x9c3e27);
    } catch (_0xbce0d) {
      _0x2351aa(_0x32c362);
      if (_0xbce0d !== _0xbce0d + 0 && _0xbce0d !== "longjmp") {
        throw _0xbce0d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x9861d4(_0x3fb408, _0x616503, _0x3dee7f, _0xfc193c, _0x3ffcfa, _0x3d7838) {
    var _0x477737 = _0x1b881f();
    try {
      return _0x383fb3(_0x3fb408, _0x616503, _0x3dee7f, _0xfc193c, _0x3ffcfa, _0x3d7838);
    } catch (_0x13962a) {
      _0x2351aa(_0x477737);
      if (_0x13962a !== _0x13962a + 0 && _0x13962a !== "longjmp") {
        throw _0x13962a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x495ebd(_0x1b0f94, _0x2eff7f, _0x30d470, _0xeeba20, _0xa59ed2, _0x3318d6) {
    var _0xe0a6cd = _0x1b881f();
    try {
      return _0x2f4f05(_0x1b0f94, _0x2eff7f, _0x30d470, _0xeeba20, _0xa59ed2, _0x3318d6);
    } catch (_0x122ad2) {
      _0x2351aa(_0xe0a6cd);
      if (_0x122ad2 !== _0x122ad2 + 0 && _0x122ad2 !== "longjmp") {
        throw _0x122ad2;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x5a836c(_0x33b654, _0x92774b, _0x5b3e2e, _0x5f1cad, _0x2b3c8a, _0x235df3) {
    var _0x1cd24c = _0x1b881f();
    try {
      return _0x894abe(_0x33b654, _0x92774b, _0x5b3e2e, _0x5f1cad, _0x2b3c8a, _0x235df3);
    } catch (_0x12279d) {
      _0x2351aa(_0x1cd24c);
      if (_0x12279d !== _0x12279d + 0 && _0x12279d !== "longjmp") {
        throw _0x12279d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x2c0e29(_0x5024fc, _0x4ea6e1, _0x4b9c75, _0xc01bf4, _0x11e152, _0x2e9463, _0x3638a9, _0x110221, _0x2c0816, _0x459db0, _0x41bbef, _0x36ef5c, _0x305a66, _0x25d660) {
    var _0x5bd7e6 = _0x1b881f();
    try {
      _0x50dae2(_0x5024fc, _0x4ea6e1, _0x4b9c75, _0xc01bf4, _0x11e152, _0x2e9463, _0x3638a9, _0x110221, _0x2c0816, _0x459db0, _0x41bbef, _0x36ef5c, _0x305a66, _0x25d660);
    } catch (_0x45b6db) {
      _0x2351aa(_0x5bd7e6);
      if (_0x45b6db !== _0x45b6db + 0 && _0x45b6db !== "longjmp") {
        throw _0x45b6db;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x77cacd(_0x5280c1, _0xa5ac6b, _0x4f512d, _0x41fadf, _0x1cdd2e, _0x2b2ac2) {
    var _0x5b184c = _0x1b881f();
    try {
      return _0x17154b(_0x5280c1, _0xa5ac6b, _0x4f512d, _0x41fadf, _0x1cdd2e, _0x2b2ac2);
    } catch (_0x3d2647) {
      _0x2351aa(_0x5b184c);
      if (_0x3d2647 !== _0x3d2647 + 0 && _0x3d2647 !== "longjmp") {
        throw _0x3d2647;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x265a96(_0x515cbe, _0x1927de, _0xa64d4c, _0x40157f, _0x3fff36, _0x1f0c4e) {
    var _0x347fd6 = _0x1b881f();
    try {
      _0x4b51e3(_0x515cbe, _0x1927de, _0xa64d4c, _0x40157f, _0x3fff36, _0x1f0c4e);
    } catch (_0x4df779) {
      _0x2351aa(_0x347fd6);
      if (_0x4df779 !== _0x4df779 + 0 && _0x4df779 !== "longjmp") {
        throw _0x4df779;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x47275d(_0x4d76ee, _0x2d83e1, _0x110e40, _0x3ed6a6, _0x3527e1) {
    var _0x5aeed9 = _0x1b881f();
    try {
      return _0x515cbf(_0x4d76ee, _0x2d83e1, _0x110e40, _0x3ed6a6, _0x3527e1);
    } catch (_0x54e9fe) {
      _0x2351aa(_0x5aeed9);
      if (_0x54e9fe !== _0x54e9fe + 0 && _0x54e9fe !== "longjmp") {
        throw _0x54e9fe;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3c8925(_0x3ede07, _0x4b5a02, _0x5f0b7a, _0x2282ea, _0x103582, _0x4b1f9c) {
    var _0x1bda65 = _0x1b881f();
    try {
      return _0x4e01ce(_0x3ede07, _0x4b5a02, _0x5f0b7a, _0x2282ea, _0x103582, _0x4b1f9c);
    } catch (_0xe42d06) {
      _0x2351aa(_0x1bda65);
      if (_0xe42d06 !== _0xe42d06 + 0 && _0xe42d06 !== "longjmp") {
        throw _0xe42d06;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1ad49c(_0x492f5f, _0x46e7f3, _0x1105e6, _0x53bcf1) {
    var _0x2cb8e5 = _0x1b881f();
    try {
      return _0x5047d2(_0x492f5f, _0x46e7f3, _0x1105e6, _0x53bcf1);
    } catch (_0x2a4db2) {
      _0x2351aa(_0x2cb8e5);
      if (_0x2a4db2 !== _0x2a4db2 + 0 && _0x2a4db2 !== "longjmp") {
        throw _0x2a4db2;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x3eb0cf(_0x228b96, _0x564750, _0xeecd32, _0x4218f9, _0x4ae97d, _0xfb23d9) {
    var _0xdde94d = _0x1b881f();
    try {
      return _0x148bc2(_0x228b96, _0x564750, _0xeecd32, _0x4218f9, _0x4ae97d, _0xfb23d9);
    } catch (_0x4665d3) {
      _0x2351aa(_0xdde94d);
      if (_0x4665d3 !== _0x4665d3 + 0 && _0x4665d3 !== "longjmp") {
        throw _0x4665d3;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4f4cd7(_0x28318f, _0x5a48f4, _0x1933f0, _0x511ff4, _0x5eaa7c, _0x3d954e, _0x1c65dd) {
    var _0x204fe7 = _0x1b881f();
    try {
      _0x40ed0e(_0x28318f, _0x5a48f4, _0x1933f0, _0x511ff4, _0x5eaa7c, _0x3d954e, _0x1c65dd);
    } catch (_0x570377) {
      _0x2351aa(_0x204fe7);
      if (_0x570377 !== _0x570377 + 0 && _0x570377 !== "longjmp") {
        throw _0x570377;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x420ed5(_0x38e30e, _0xe20572, _0x40363b, _0x544112) {
    var _0x1be881 = _0x1b881f();
    try {
      return _0x30efb6(_0x38e30e, _0xe20572, _0x40363b, _0x544112);
    } catch (_0x55f44a) {
      _0x2351aa(_0x1be881);
      if (_0x55f44a !== _0x55f44a + 0 && _0x55f44a !== "longjmp") {
        throw _0x55f44a;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x51a11f(_0x3642b6, _0x477cd8, _0x436080, _0xaf184f, _0x3e0ce2, _0x3cd634) {
    var _0x4afae9 = _0x1b881f();
    try {
      return _0x15c2b8(_0x3642b6, _0x477cd8, _0x436080, _0xaf184f, _0x3e0ce2, _0x3cd634);
    } catch (_0x8846c8) {
      _0x2351aa(_0x4afae9);
      if (_0x8846c8 !== _0x8846c8 + 0 && _0x8846c8 !== "longjmp") {
        throw _0x8846c8;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x414120(_0x3c31fc, _0xf7e021, _0x56b8f6, _0xcfefac, _0x3e9502) {
    var _0x188ebe = _0x1b881f();
    try {
      return _0x1744d4(_0x3c31fc, _0xf7e021, _0x56b8f6, _0xcfefac, _0x3e9502);
    } catch (_0x4a6c60) {
      _0x2351aa(_0x188ebe);
      if (_0x4a6c60 !== _0x4a6c60 + 0 && _0x4a6c60 !== "longjmp") {
        throw _0x4a6c60;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x473a39(_0x53c2b1, _0x3a4db0, _0x3cd965) {
    var _0x46f635 = _0x1b881f();
    try {
      return _0x5845cc(_0x53c2b1, _0x3a4db0, _0x3cd965);
    } catch (_0x5f1a78) {
      _0x2351aa(_0x46f635);
      if (_0x5f1a78 !== _0x5f1a78 + 0 && _0x5f1a78 !== "longjmp") {
        throw _0x5f1a78;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4d52f1(_0x190ab1, _0x534de6, _0x302dca, _0x36f870, _0xe225f5, _0x19eb02, _0x395dbe, _0x26b1d6, _0x403624) {
    var _0x4d3405 = _0x1b881f();
    try {
      _0x3f22ee(_0x190ab1, _0x534de6, _0x302dca, _0x36f870, _0xe225f5, _0x19eb02, _0x395dbe, _0x26b1d6, _0x403624);
    } catch (_0x2d568d) {
      _0x2351aa(_0x4d3405);
      if (_0x2d568d !== _0x2d568d + 0 && _0x2d568d !== "longjmp") {
        throw _0x2d568d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x2c9335(_0x1b57ef, _0x27227f, _0x10ca9b, _0x3a5bb7, _0x496b38, _0x5dbe5b, _0x4694fb) {
    var _0x112664 = _0x1b881f();
    try {
      return _0x15209c(_0x1b57ef, _0x27227f, _0x10ca9b, _0x3a5bb7, _0x496b38, _0x5dbe5b, _0x4694fb);
    } catch (_0x3784c0) {
      _0x2351aa(_0x112664);
      if (_0x3784c0 !== _0x3784c0 + 0 && _0x3784c0 !== "longjmp") {
        throw _0x3784c0;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4d858f(_0x4e294a, _0x194b54, _0x32989e, _0x167d6d, _0x5c178d, _0x5c4b34, _0x3d2df5, _0x4b2fb8, _0x4ea51d, _0x7eedfe, _0x4a906b, _0xf9fab6) {
    var _0x3df3e5 = _0x1b881f();
    try {
      return _0x40e845(_0x4e294a, _0x194b54, _0x32989e, _0x167d6d, _0x5c178d, _0x5c4b34, _0x3d2df5, _0x4b2fb8, _0x4ea51d, _0x7eedfe, _0x4a906b, _0xf9fab6);
    } catch (_0x46b009) {
      _0x2351aa(_0x3df3e5);
      if (_0x46b009 !== _0x46b009 + 0 && _0x46b009 !== "longjmp") {
        throw _0x46b009;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1c78f3(_0x21c8f7, _0x47706b, _0x4b2350, _0x2dc2ff) {
    var _0x3b22e8 = _0x1b881f();
    try {
      _0x51a0ea(_0x21c8f7, _0x47706b, _0x4b2350, _0x2dc2ff);
    } catch (_0x55352c) {
      _0x2351aa(_0x3b22e8);
      if (_0x55352c !== _0x55352c + 0 && _0x55352c !== "longjmp") {
        throw _0x55352c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x243217(_0x44c8f9, _0x370c49, _0x9fd112, _0x9abd0c, _0x3cddf9, _0x176dee, _0x5be2e9, _0x12da25) {
    var _0x527de1 = _0x1b881f();
    try {
      return _0x1df0f2(_0x44c8f9, _0x370c49, _0x9fd112, _0x9abd0c, _0x3cddf9, _0x176dee, _0x5be2e9, _0x12da25);
    } catch (_0x3ccd38) {
      _0x2351aa(_0x527de1);
      if (_0x3ccd38 !== _0x3ccd38 + 0 && _0x3ccd38 !== "longjmp") {
        throw _0x3ccd38;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1ab5e3(_0x9688a2, _0x16523f, _0x167558, _0x1e2eba, _0x244c06) {
    var _0x49a82f = _0x1b881f();
    try {
      return _0x4af530(_0x9688a2, _0x16523f, _0x167558, _0x1e2eba, _0x244c06);
    } catch (_0x30042d) {
      _0x2351aa(_0x49a82f);
      if (_0x30042d !== _0x30042d + 0 && _0x30042d !== "longjmp") {
        throw _0x30042d;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4ec264(_0x51d551, _0x8fc4cf, _0x5425fe, _0xa57c22) {
    var _0x366adb = _0x1b881f();
    try {
      return _0xb2786a(_0x51d551, _0x8fc4cf, _0x5425fe, _0xa57c22);
    } catch (_0x58d6ad) {
      _0x2351aa(_0x366adb);
      if (_0x58d6ad !== _0x58d6ad + 0 && _0x58d6ad !== "longjmp") {
        throw _0x58d6ad;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1a7555(_0x1b1502, _0x48fa7f, _0x24b11a, _0x14faf9, _0x563fd7, _0x5dea47, _0x46a240, _0x418d5a, _0xdb3a9, _0x410e59, _0x8acbfe, _0x1d8bf9, _0x289969, _0x1a971a, _0x576b55, _0x31dc0e) {
    var _0x5e6d82 = _0x1b881f();
    try {
      _0x5c0eac(_0x1b1502, _0x48fa7f, _0x24b11a, _0x14faf9, _0x563fd7, _0x5dea47, _0x46a240, _0x418d5a, _0xdb3a9, _0x410e59, _0x8acbfe, _0x1d8bf9, _0x289969, _0x1a971a, _0x576b55, _0x31dc0e);
    } catch (_0x1b017c) {
      _0x2351aa(_0x5e6d82);
      if (_0x1b017c !== _0x1b017c + 0 && _0x1b017c !== "longjmp") {
        throw _0x1b017c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x478475(_0x759ba3, _0x3cb9fb, _0x44a753, _0x115ac6, _0x1cd326, _0x559899, _0x1befe5, _0x137d7f, _0x1c09ea, _0x5681ea) {
    var _0x21e233 = _0x1b881f();
    try {
      return _0x4e3ed1(_0x759ba3, _0x3cb9fb, _0x44a753, _0x115ac6, _0x1cd326, _0x559899, _0x1befe5, _0x137d7f, _0x1c09ea, _0x5681ea);
    } catch (_0x58b1e0) {
      _0x2351aa(_0x21e233);
      if (_0x58b1e0 !== _0x58b1e0 + 0 && _0x58b1e0 !== "longjmp") {
        throw _0x58b1e0;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x2f266f(_0x521dcd, _0x48b0ea, _0x1b7525, _0x29b9b5, _0xa832b8, _0x2b2675, _0x56988c) {
    var _0x3ee8e9 = _0x1b881f();
    try {
      _0x434929(_0x521dcd, _0x48b0ea, _0x1b7525, _0x29b9b5, _0xa832b8, _0x2b2675, _0x56988c);
    } catch (_0x74e276) {
      _0x2351aa(_0x3ee8e9);
      if (_0x74e276 !== _0x74e276 + 0 && _0x74e276 !== "longjmp") {
        throw _0x74e276;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x220b91(_0x3ba22e, _0x161b70, _0x10c7d8, _0x25f794, _0x1a172e, _0x3e32a3, _0x36316b) {
    var _0x4500ac = _0x1b881f();
    try {
      return _0x5cb30c(_0x3ba22e, _0x161b70, _0x10c7d8, _0x25f794, _0x1a172e, _0x3e32a3, _0x36316b);
    } catch (_0x1141fb) {
      _0x2351aa(_0x4500ac);
      if (_0x1141fb !== _0x1141fb + 0 && _0x1141fb !== "longjmp") {
        throw _0x1141fb;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x48e3c6(_0x481de8, _0x287a31, _0x2e79a2, _0x113cb7, _0x128be8, _0x332444, _0x13bbbc, _0x2fd3f4, _0x3d2438, _0x1e1431, _0x585a19, _0x22ac17) {
    var _0x223bb9 = _0x1b881f();
    try {
      return _0x276a60(_0x481de8, _0x287a31, _0x2e79a2, _0x113cb7, _0x128be8, _0x332444, _0x13bbbc, _0x2fd3f4, _0x3d2438, _0x1e1431, _0x585a19, _0x22ac17);
    } catch (_0x4bba78) {
      _0x2351aa(_0x223bb9);
      if (_0x4bba78 !== _0x4bba78 + 0 && _0x4bba78 !== "longjmp") {
        throw _0x4bba78;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x5347b1(_0x345bb1, _0x4e4c43, _0x405833, _0x3b1531, _0x230ce8, _0x2cde56, _0x2c368d, _0x46cee2, _0x53a921, _0x2cd77f) {
    var _0x4e1e1d = _0x1b881f();
    try {
      return _0x3b94b8(_0x345bb1, _0x4e4c43, _0x405833, _0x3b1531, _0x230ce8, _0x2cde56, _0x2c368d, _0x46cee2, _0x53a921, _0x2cd77f);
    } catch (_0x310432) {
      _0x2351aa(_0x4e1e1d);
      if (_0x310432 !== _0x310432 + 0 && _0x310432 !== "longjmp") {
        throw _0x310432;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1ffdc8(_0x571f50, _0x1ec591, _0x13af85, _0x159951, _0x186777) {
    var _0x263e56 = _0x1b881f();
    try {
      _0x1401dd(_0x571f50, _0x1ec591, _0x13af85, _0x159951, _0x186777);
    } catch (_0x57185c) {
      _0x2351aa(_0x263e56);
      if (_0x57185c !== _0x57185c + 0 && _0x57185c !== "longjmp") {
        throw _0x57185c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x4a7083(_0x1d6dd4, _0xf7e078, _0x1552f8, _0x502702, _0x5162da, _0x333001, _0x3b0d8b, _0x29b633, _0x50dc15, _0x244e28, _0x59b551) {
    var _0x479957 = _0x1b881f();
    try {
      return _0x5a1b8f(_0x1d6dd4, _0xf7e078, _0x1552f8, _0x502702, _0x5162da, _0x333001, _0x3b0d8b, _0x29b633, _0x50dc15, _0x244e28, _0x59b551);
    } catch (_0x2535f4) {
      _0x2351aa(_0x479957);
      if (_0x2535f4 !== _0x2535f4 + 0 && _0x2535f4 !== "longjmp") {
        throw _0x2535f4;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x455b6f(_0x30c007, _0x5ef775, _0x44551b, _0x5a8921, _0x2882b9, _0x1601f4, _0x6583ef) {
    var _0x34d12d = _0x1b881f();
    try {
      return _0x3b629e(_0x30c007, _0x5ef775, _0x44551b, _0x5a8921, _0x2882b9, _0x1601f4, _0x6583ef);
    } catch (_0x57173f) {
      _0x2351aa(_0x34d12d);
      if (_0x57173f !== _0x57173f + 0 && _0x57173f !== "longjmp") {
        throw _0x57173f;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x5bbea6(_0x54c844, _0x15b3fa, _0x251eec, _0x123cb3, _0x509f44, _0x5423b8, _0x193386, _0x51ecd0, _0x1e4323, _0x37efff) {
    var _0x5be7fe = _0x1b881f();
    try {
      _0x41ec3e(_0x54c844, _0x15b3fa, _0x251eec, _0x123cb3, _0x509f44, _0x5423b8, _0x193386, _0x51ecd0, _0x1e4323, _0x37efff);
    } catch (_0x4208f4) {
      _0x2351aa(_0x5be7fe);
      if (_0x4208f4 !== _0x4208f4 + 0 && _0x4208f4 !== "longjmp") {
        throw _0x4208f4;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x15c9cb(_0x3ebb65, _0x159e9c, _0xb04ec7, _0x395bc7, _0x6f4515, _0x545a2f, _0x330442) {
    var _0x12072b = _0x1b881f();
    try {
      return _0x3ddcaa(_0x3ebb65, _0x159e9c, _0xb04ec7, _0x395bc7, _0x6f4515, _0x545a2f, _0x330442);
    } catch (_0x59244c) {
      _0x2351aa(_0x12072b);
      if (_0x59244c !== _0x59244c + 0 && _0x59244c !== "longjmp") {
        throw _0x59244c;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x5554f2(_0x56190e, _0x312ed3, _0x49b247, _0x330ae3, _0x235262, _0x3c618c) {
    var _0x2500be = _0x1b881f();
    try {
      return _0x3f802b(_0x56190e, _0x312ed3, _0x49b247, _0x330ae3, _0x235262, _0x3c618c);
    } catch (_0x869983) {
      _0x2351aa(_0x2500be);
      if (_0x869983 !== _0x869983 + 0 && _0x869983 !== "longjmp") {
        throw _0x869983;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x25e0b1(_0x5ccdfc, _0x56512c, _0x5b89b7, _0x17f602, _0x587556, _0x1020fe, _0x458167) {
    var _0x1b1e1d = _0x1b881f();
    try {
      _0x22ac6f(_0x5ccdfc, _0x56512c, _0x5b89b7, _0x17f602, _0x587556, _0x1020fe, _0x458167);
    } catch (_0x165cf2) {
      _0x2351aa(_0x1b1e1d);
      if (_0x165cf2 !== _0x165cf2 + 0 && _0x165cf2 !== "longjmp") {
        throw _0x165cf2;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x1baed5(_0x13c07e, _0x3ab416, _0x456aac, _0x2f76c2, _0x48d4c5, _0x521584, _0x34b8ee, _0x1615b1, _0x5d0f89, _0x2d8537, _0x16ccd1) {
    var _0x4cc38c = _0x1b881f();
    try {
      _0x5b5500(_0x13c07e, _0x3ab416, _0x456aac, _0x2f76c2, _0x48d4c5, _0x521584, _0x34b8ee, _0x1615b1, _0x5d0f89, _0x2d8537, _0x16ccd1);
    } catch (_0x1836a1) {
      _0x2351aa(_0x4cc38c);
      if (_0x1836a1 !== _0x1836a1 + 0 && _0x1836a1 !== "longjmp") {
        throw _0x1836a1;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x242cb2(_0xe5f7be, _0x1ed187, _0x2db079, _0x409151, _0x3eb25d, _0x1e2b3b, _0x551250, _0xb6dde3) {
    var _0x13b1bf = _0x1b881f();
    try {
      _0x538742(_0xe5f7be, _0x1ed187, _0x2db079, _0x409151, _0x3eb25d, _0x1e2b3b, _0x551250, _0xb6dde3);
    } catch (_0x4b9fc5) {
      _0x2351aa(_0x13b1bf);
      if (_0x4b9fc5 !== _0x4b9fc5 + 0 && _0x4b9fc5 !== "longjmp") {
        throw _0x4b9fc5;
      }
      _0x3054ad(1, 0);
    }
  }
  function _0x558ad9(_0x387b94, _0xf45561, _0x1bc7b9, _0x487d1b, _0x7b0d95, _0x3d49dd, _0x40a9c4, _0x5d43cc, _0x15a88a, _0x529c36, _0x514749) {
    var _0x392369 = _0x1b881f();
    try {
      _0x17fd36(_0x387b94, _0xf45561, _0x1bc7b9, _0x487d1b, _0x7b0d95, _0x3d49dd, _0x40a9c4, _0x5d43cc, _0x15a88a, _0x529c36, _0x514749);
    } catch (_0xcbfb62) {
      _0x2351aa(_0x392369);
      if (_0xcbfb62 !== _0xcbfb62 + 0 && _0xcbfb62 !== "longjmp") {
        throw _0xcbfb62;
      }
      _0x3054ad(1, 0);
    }
  }
  _0xc94e0.ccall = _0x646959;
  _0xc94e0.cwrap = _0x2de8ad;
  _0xc94e0.stackTrace = _0x2008cc;
  _0xc94e0.addRunDependency = _0x228ea;
  _0xc94e0.removeRunDependency = _0x3ac9a4;
  _0xc94e0.FS_createPath = _0x1e6cd4.createPath;
  _0xc94e0.FS_createDataFile = _0x1e6cd4.createDataFile;
  _0xc94e0.stackTrace = _0x2008cc;
  var _0xb828e5;
  function _0x30c165(_0x1ddfaf) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x1ddfaf + ")";
    this.status = _0x1ddfaf;
  }
  var _0x521a63 = false;
  _0x60c00f = function _0x245678() {
    if (!_0xb828e5) {
      _0x166cde();
    }
    if (!_0xb828e5) {
      _0x60c00f = _0x245678;
    }
  };
  function _0x15f064(_0x5be736) {
    var _0x12b154 = _0xc94e0._main;
    _0x5be736 = _0x5be736 || [];
    var _0x427262 = _0x5be736.length + 1;
    var _0xb0b288 = _0x432d16((_0x427262 + 1) * 4);
    _0x14d31c[_0xb0b288 >> 2] = _0x52defa(_0xe83b70);
    for (var _0x5a8f4c = 1; _0x5a8f4c < _0x427262; _0x5a8f4c++) {
      _0x14d31c[(_0xb0b288 >> 2) + _0x5a8f4c] = _0x52defa(_0x5be736[_0x5a8f4c - 1]);
    }
    _0x14d31c[(_0xb0b288 >> 2) + _0x427262] = 0;
    try {
      var _0x1fb5dd = _0x12b154(_0x427262, _0xb0b288);
      _0x4bd3f4(_0x1fb5dd, true);
    } catch (_0x94b962) {
      if (_0x94b962 instanceof _0x30c165) {
        return;
      } else if (_0x94b962 == "unwind") {
        return;
      } else {
        var _0x2774eb = _0x94b962;
        if (_0x94b962 && typeof _0x94b962 === "object" && _0x94b962.stack) {
          _0x2774eb = [_0x94b962, _0x94b962.stack];
        }
        _0x551fc8("exception thrown: " + _0x2774eb);
        _0x1bcf93(1, _0x94b962);
      }
    } finally {
      _0x521a63 = true;
    }
  }
  function _0x166cde(_0x1781c9) {
    _0x1781c9 = _0x1781c9 || _0x2402d7;
    if (_0x544106 > 0) {
      return;
    }
    _0x1cbb85();
    if (_0x544106 > 0) {
      return;
    }
    function _0x31bc4f() {
      if (_0xb828e5) {
        return;
      }
      _0xb828e5 = true;
      _0xc94e0.calledRun = true;
      if (_0x31a725) {
        return;
      }
      _0x48dcbf();
      _0x2b1801();
      if (_0xc94e0.onRuntimeInitialized) {
        _0xc94e0.onRuntimeInitialized();
      }
      if (_0x37938f) {
        _0x15f064(_0x1781c9);
      }
      _0x55962c();
    }
    if (_0xc94e0.setStatus) {
      _0xc94e0.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0xc94e0.setStatus("");
        }, 1);
        _0x31bc4f();
      }, 1);
    } else {
      _0x31bc4f();
    }
  }
  _0xc94e0.run = _0x166cde;
  function _0x4bd3f4(_0x192cb5, _0x42b45a) {
    _0x9fbfb9 = _0x192cb5;
    if (_0x42b45a && _0x1f6248() && _0x192cb5 === 0) {
      return;
    }
    if (_0x1f6248()) {} else {
      _0x52e13b();
      if (_0xc94e0.onExit) {
        _0xc94e0.onExit(_0x192cb5);
      }
      _0x31a725 = true;
    }
    _0x1bcf93(_0x192cb5, new _0x30c165(_0x192cb5));
  }
  if (_0xc94e0.preInit) {
    if (typeof _0xc94e0.preInit == "function") {
      _0xc94e0.preInit = [_0xc94e0.preInit];
    }
    while (_0xc94e0.preInit.length > 0) {
      _0xc94e0.preInit.pop()();
    }
  }
  var _0x37938f = true;
  if (_0xc94e0.noInitialRun) {
    _0x37938f = false;
  }
  _0x166cde();
}
config.sourceHtml = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://gamea.azgame.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x4b8ba8) {
  console.log("_TIME_" + _0x4b8ba8 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x542da5) {
  console.log(_0x542da5);
}
function gmEvent(_0xb8003a, _0x52438d) {
  loadGMData(_0xb8003a, _0x52438d);
}
function gmStartGame(_0xc0543c) {
  _0xc0543c();
}
function gmStartAds(_0x222cbf) {
  _0x222cbf();
}
let fireFPS = 0;
async function loadGMData(_0xb6d33e, _0x3313a6) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0xb6d33e != "document-ready" && _0xb6d33e != "start-game" && _0xb6d33e != "unload-game") {
      return;
    }
    if (_0xb6d33e == "fps") {
      try {
        let _0x5858b4 = _0x3313a6.split("|");
        if (_0x5858b4.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x5858b4[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x5858b4[1]);
          }
        }
      } catch (_0x58460c) {
        console.log("Error extracting time from abc:", _0x58460c.message);
      }
    }
    let _0x13f9eb = "";
    if (_0x3313a6) {
      _0x13f9eb = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x3313a6));
    }
    _0x13f9eb += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x13f9eb += "&gid=" + config.gameId;
    if (_0xb6d33e == "ban-game" || _0xb6d33e == "document-ready" || _0xb6d33e == "start-game") {
      _0x13f9eb += "&wtop=" + "azgames.io";
      _0x13f9eb += "&hn=" + "https://gamea.azgame.io";
      _0x13f9eb += "&referrer=" + config.referrer;
    }
    let _0x380fbf = "&data=" + btoa(_0x13f9eb);
    let _0x28e140 = config.eventAPI + "?event=" + _0xb6d33e + _0x380fbf;
    let _0x5d3d26 = new XMLHttpRequest();
    _0x5d3d26.open("GET", _0x28e140);
    _0x5d3d26.onreadystatechange = function () {
      if (_0x5d3d26.readyState !== 4) {
        return;
      }
      if (_0x5d3d26.status === 200) {
        console.log(_0x5d3d26.responseText);
      } else {
        console.log("HTTP error", _0x5d3d26.status, _0x5d3d26.statusText);
      }
    };
    _0x5d3d26.send();
  } catch (_0x993043) {}
}
function xorEncryptMsg(_0x26e2b5) {
  let _0x354f46 = "gmdata@&!message@!3!@";
  let _0x58034e = "";
  for (let _0x526a51 = 0; _0x526a51 < _0x26e2b5.length; _0x526a51++) {
    const _0x209216 = _0x26e2b5.charCodeAt(_0x526a51) ^ _0x354f46.charCodeAt(_0x526a51 % _0x354f46.length);
    _0x58034e += String.fromCharCode(_0x209216);
  }
  return btoa(_0x58034e);
}
function check_event_log() {
  const _0x568ccc = window.location.search;
  const _0x43b3d5 = new URLSearchParams(_0x568ccc);
  if (_0x43b3d5.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0xd40d77) {
  try {
    const _0x672e63 = eval(_0xd40d77);
    gmdebug("Result:", _0x672e63);
    return _0x672e63;
  } catch (_0x6b1629) {
    gmdebug("Error executing code:", _0x6b1629);
  }
}
window.addEventListener("beforeunload", function (_0x327acc) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x996bc7 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x2db3db = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x42da16 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x1dd10d = _0x2db3db;
      let _0x55268b = "";
      for (let _0x37e93b = 0; _0x37e93b < _0x42da16.length; _0x37e93b++) {
        const _0x5dc4fd = _0x42da16.charCodeAt(_0x37e93b) ^ _0x996bc7.charCodeAt(_0x37e93b % _0x996bc7.length);
        _0x55268b += String.fromCharCode(_0x5dc4fd);
      }
      sourceHtml = _0x55268b;
      let _0x110296 = document.getElementById("gmsoft-jssdk");
      if (!_0x110296 || _0x110296.src != sourceHtml) {
      }
    } catch (_0x1a5fb7) {
    }
  }, 3000);
}