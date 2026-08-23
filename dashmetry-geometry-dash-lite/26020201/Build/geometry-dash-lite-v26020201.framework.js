function unityFramework(_0xad46db) {
  var _0xad46db = typeof _0xad46db !== "undefined" ? _0xad46db : {};
  _0xad46db.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x142101(_0x46f228, _0x1fd77d) {
    _0x2e60ec("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x5d80c0(_0x46f228, _0x1fd77d);
  }
  _0xad46db.Pointer_stringify = _0x142101;
  var _0x26058a = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x56a860 = _0x321f58().match(new RegExp(_0x26058a));
  if (_0x56a860) {
    _0xad46db.stackTraceRegExp = new RegExp(_0x26058a.replace("([^\\n]+)", _0x56a860[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x24323c = function (_0x33bc50) {
    if (_0x150bd9) {
      return;
    }
    _0x150bd9 = true;
    _0x66bf97 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x33bc50 !== undefined) {
      _0x2014a7(_0x33bc50);
      _0xf7c01a(_0x33bc50);
      _0x33bc50 = JSON.stringify(_0x33bc50);
    } else {
      _0x33bc50 = "";
    }
    var _0x12ab67 = "abort(" + _0x33bc50 + ") at " + _0xd75f1d();
    if (_0xad46db.abortHandler && _0xad46db.abortHandler(_0x12ab67)) {
      return;
    }
    throw _0x12ab67;
  };
  _0xad46db.SetFullscreen = function (_0x3b6d19) {
    if (typeof _0x9e12d5 === "undefined" || !_0x9e12d5) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x1a92b2 === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x2c668d = _0x1a92b2.canPerformEventHandlerRequests;
      _0x1a92b2.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0xad46db.ccall("SetFullscreen", null, ["number"], [_0x3b6d19]);
      _0x1a92b2.canPerformEventHandlerRequests = _0x2c668d;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0xad46db.preRun.push(function () {
      var _0x292ea7 = _0xad46db.unityFileSystemInit || function () {
        _0x379d8a.mkdir("/idbfs");
        _0x379d8a.mount(_0x1ae0b4, {}, "/idbfs");
        _0xad46db.addRunDependency("JS_FileSystem_Mount");
        _0x379d8a.syncfs(true, function (_0x3c4661) {
          if (_0x3c4661) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0xad46db.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x292ea7();
    });
  }
  var _0x4d64ce = [];
  var _0x17b818 = false;
  var _0x4888f5;
  var _0x57f640 = null;
  function _0xc71c11(_0x33001b) {
    var _0x101cd2 = Object.keys(_0x4d64ce);
    for (var _0x30b047 = 0; _0x30b047 < _0x101cd2.length; ++_0x30b047) {
      var _0x16f44a = _0x4d64ce[_0x101cd2[_0x30b047]];
      if (_0x16f44a.deviceId && _0x16f44a.deviceId == _0x33001b.deviceId) {
        return _0x16f44a;
      }
    }
    for (var _0x30b047 = 0; _0x30b047 < _0x101cd2.length; ++_0x30b047) {
      var _0x16f44a = _0x4d64ce[_0x101cd2[_0x30b047]];
      if (_0x16f44a == _0x33001b) {
        return _0x16f44a;
      }
    }
    for (var _0x30b047 = 0; _0x30b047 < _0x101cd2.length; ++_0x30b047) {
      var _0x16f44a = _0x4d64ce[_0x101cd2[_0x30b047]];
      if (_0x16f44a.label && _0x16f44a.label == _0x33001b.label) {
        return _0x16f44a;
      }
    }
    for (var _0x30b047 = 0; _0x30b047 < _0x101cd2.length; ++_0x30b047) {
      var _0x16f44a = _0x4d64ce[_0x101cd2[_0x30b047]];
      if (_0x16f44a.groupId && _0x16f44a.kind && _0x16f44a.groupId == _0x33001b.groupId && _0x16f44a.kind == _0x33001b.kind) {
        return _0x16f44a;
      }
    }
  }
  function _0x4345d1() {
    for (var _0x5063d1 = 0;; ++_0x5063d1) {
      if (!_0x4d64ce[_0x5063d1]) {
        return _0x5063d1;
      }
    }
  }
  function _0x4cefee(_0x222deb) {
    _0x4888f5();
    _0x4d64ce = [];
    var _0x2d3fba = {};
    var _0x40dbf3 = [];
    _0x222deb.forEach(function (_0x4ea25f) {
      if (_0x4ea25f.kind === "videoinput") {
        var _0x24ff36 = _0xc71c11(_0x4ea25f);
        if (_0x24ff36) {
          _0x2d3fba[_0x24ff36.id] = _0x24ff36;
        } else {
          _0x40dbf3.push(_0x4ea25f);
        }
      }
    });
    _0x4d64ce = _0x2d3fba;
    _0x40dbf3.forEach(function (_0x2f055b) {
      if (!_0x2f055b.id) {
        _0x2f055b.id = _0x4345d1();
        _0x2f055b.name = _0x2f055b.label || "Video input #" + (_0x2f055b.id + 1);
        _0x2f055b.isFrontFacing = _0x2f055b.name.toLowerCase().includes("front") || !_0x2f055b.name.toLowerCase().includes("front") && !_0x2f055b.name.toLowerCase().includes("back");
        _0x4d64ce[_0x2f055b.id] = _0x2f055b;
      }
    });
  }
  function _0x36f1d8() {
    if (!_0x4d64ce) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x50bfa4) {
      _0x4cefee(_0x50bfa4);
      _0x17b818 = true;
    }).catch(function (_0x5ed509) {
      console.warn("Unable to enumerate media devices: " + _0x5ed509 + "\nWebcams will not be available.");
      _0x4fd165();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x36f1d8, 60000);
      _0x2e60ec("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x4fd165() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x36f1d8);
    }
    _0x4d64ce = null;
  }
  _0xad46db.disableAccessToMediaDevices = _0x4fd165;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x4fd165();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x37f4a1("enumerateMediaDevices");
        _0x4888f5 = function () {
          if (_0x57f640 !== null) {
            clearTimeout(_0x57f640);
          }
          _0x42d77a("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x4888f5 = function () {};
        };
        _0x36f1d8();
        _0x57f640 = setTimeout(_0x4888f5, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x36f1d8);
      } catch (_0x2b14ef) {
        console.warn("Unable to enumerate media devices: " + _0x2b14ef);
        _0x4fd165();
      }
    }, 0);
  }
  function _0x1bb0a2(_0x3f4d87, _0x13c982, _0x7eec9d) {
    var _0x32873f = _0x36ad9d(_0x13c982);
    var _0x154563 = _0x36ad9d(_0x3f4d87);
    var _0x2e33ba = 0;
    try {
      if (_0x7eec9d === undefined) {
        _0x18591a(_0x154563, _0x32873f);
      } else if (typeof _0x7eec9d === "string") {
        _0x2e33ba = _0x36ad9d(_0x7eec9d);
        _0x395ee5(_0x154563, _0x32873f, _0x2e33ba);
      } else if (typeof _0x7eec9d === "number") {
        _0x2139ed(_0x154563, _0x32873f, _0x7eec9d);
      } else {
        throw "" + _0x7eec9d + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x3d1553(_0x2e33ba);
      _0x3d1553(_0x154563);
      _0x3d1553(_0x32873f);
    }
  }
  _0xad46db.SendMessage = _0x1bb0a2;
  var _0x4fd301 = {};
  var _0x4d5ec5;
  for (_0x4d5ec5 in _0xad46db) {
    if (_0xad46db.hasOwnProperty(_0x4d5ec5)) {
      _0x4fd301[_0x4d5ec5] = _0xad46db[_0x4d5ec5];
    }
  }
  var _0x4d71e8 = [];
  var _0x4953ab = "./this.program";
  var _0x31b7e8 = function (_0xc72fbc, _0x3bec4) {
    throw _0x3bec4;
  };
  var _0x1a54c2 = false;
  var _0x4b8188 = false;
  var _0xa8980b = false;
  var _0x44bd25 = false;
  _0x1a54c2 = typeof window === "object";
  _0x4b8188 = typeof importScripts === "function";
  _0xa8980b = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x44bd25 = !_0x1a54c2 && !_0xa8980b && !_0x4b8188;
  var _0x18b613 = "";
  function _0x2cc0d0(_0x4fff61) {
    if (_0xad46db.locateFile) {
      return _0xad46db.locateFile(_0x4fff61, _0x18b613);
    }
    return _0x18b613 + _0x4fff61;
  }
  var _0x643ab5;
  var _0x18acf5;
  var _0x3235b7;
  var _0x11fcc1;
  var _0xed9771;
  var _0x1d3c1c;
  if (_0xa8980b) {
    if (_0x4b8188) {
      _0x18b613 = require("path").dirname(_0x18b613) + "/";
    } else {
      _0x18b613 = __dirname + "/";
    }
    _0x643ab5 = function _0x243203(_0x3a82b3, _0x1f4036) {
      if (!_0xed9771) {
        _0xed9771 = require("fs");
      }
      if (!_0x1d3c1c) {
        _0x1d3c1c = require("path");
      }
      _0x3a82b3 = _0x1d3c1c.normalize(_0x3a82b3);
      return _0xed9771.readFileSync(_0x3a82b3, _0x1f4036 ? null : "utf8");
    };
    _0x3235b7 = function _0x19442b(_0x2765b1) {
      var _0xe23625 = _0x643ab5(_0x2765b1, true);
      if (!_0xe23625.buffer) {
        _0xe23625 = new Uint8Array(_0xe23625);
      }
      _0x5e3281(_0xe23625.buffer);
      return _0xe23625;
    };
    if (process.argv.length > 1) {
      _0x4953ab = process.argv[1].replace(/\\/g, "/");
    }
    _0x4d71e8 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0xad46db;
    }
    process.on("uncaughtException", function (_0x358b68) {
      if (!(_0x358b68 instanceof _0x179a79)) {
        throw _0x358b68;
      }
    });
    process.on("unhandledRejection", _0x24323c);
    _0x31b7e8 = function (_0x2d20ec) {
      process.exit(_0x2d20ec);
    };
    _0xad46db.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x44bd25) {
    if (typeof read != "undefined") {
      _0x643ab5 = function _0x5b61a4(_0x273378) {
        return read(_0x273378);
      };
    }
    _0x3235b7 = function _0x42b9d8(_0x587bc4) {
      var _0x2c3a46;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x587bc4));
      }
      _0x2c3a46 = read(_0x587bc4, "binary");
      _0x5e3281(typeof _0x2c3a46 === "object");
      return _0x2c3a46;
    };
    if (typeof scriptArgs != "undefined") {
      _0x4d71e8 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x4d71e8 = arguments;
    }
    if (typeof quit === "function") {
      _0x31b7e8 = function (_0x5ab5a9) {
        quit(_0x5ab5a9);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0x1a54c2 || _0x4b8188) {
    if (_0x4b8188) {
      _0x18b613 = "https://games.1games.io";
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x18b613 = document.currentScript.src;
    }
    if (_0x18b613.indexOf("blob:") !== 0) {
      _0x18b613 = _0x18b613.substr(0, _0x18b613.lastIndexOf("/") + 1);
    } else {
      _0x18b613 = "";
    }
    {
      _0x643ab5 = function (_0x15a092) {
        var _0x16a844 = new XMLHttpRequest();
        _0x16a844.open("GET", _0x15a092, false);
        _0x16a844.send(null);
        return _0x16a844.responseText;
      };
      if (_0x4b8188) {
        _0x3235b7 = function (_0x8e9663) {
          var _0x1d2276 = new XMLHttpRequest();
          _0x1d2276.open("GET", _0x8e9663, false);
          _0x1d2276.responseType = "arraybuffer";
          _0x1d2276.send(null);
          return new Uint8Array(_0x1d2276.response);
        };
      }
      _0x18acf5 = function (_0x559a21, _0x33fe33, _0x389dd9) {
        var _0x4d1387 = new XMLHttpRequest();
        _0x4d1387.open("GET", _0x559a21, true);
        _0x4d1387.responseType = "arraybuffer";
        _0x4d1387.onload = function () {
          if (_0x4d1387.status == 200 || _0x4d1387.status == 0 && _0x4d1387.response) {
            _0x33fe33(_0x4d1387.response);
            return;
          }
          _0x389dd9();
        };
        _0x4d1387.onerror = _0x389dd9;
        _0x4d1387.send(null);
      };
    }
    _0x11fcc1 = function (_0x3ef23e) {
      document.title = _0x3ef23e;
    };
  } else {}
  var _0x2014a7 = _0xad46db.print || console.log.bind(console);
  var _0xf7c01a = _0xad46db.printErr || console.warn.bind(console);
  for (_0x4d5ec5 in _0x4fd301) {
    if (_0x4fd301.hasOwnProperty(_0x4d5ec5)) {
      _0xad46db[_0x4d5ec5] = _0x4fd301[_0x4d5ec5];
    }
  }
  _0x4fd301 = null;
  if (_0xad46db.arguments) {
    _0x4d71e8 = _0xad46db.arguments;
  }
  if (_0xad46db.thisProgram) {
    _0x4953ab = _0xad46db.thisProgram;
  }
  if (_0xad46db.quit) {
    _0x31b7e8 = _0xad46db.quit;
  }
  var _0x5a3d1d = 16;
  function _0x23a686(_0x131435, _0x41f328) {
    if (!_0x41f328) {
      _0x41f328 = _0x5a3d1d;
    }
    return Math.ceil(_0x131435 / _0x41f328) * _0x41f328;
  }
  function _0x2e60ec(_0x4007cc) {
    if (!_0x2e60ec.shown) {
      _0x2e60ec.shown = {};
    }
    if (!_0x2e60ec.shown[_0x4007cc]) {
      _0x2e60ec.shown[_0x4007cc] = 1;
      _0xf7c01a(_0x4007cc);
    }
  }
  var _0x5859bb = 0;
  var _0x395517 = function (_0x3b7c48) {
    _0x5859bb = _0x3b7c48;
  };
  var _0x96ff5 = function () {
    return _0x5859bb;
  };
  var _0x502051;
  if (_0xad46db.wasmBinary) {
    _0x502051 = _0xad46db.wasmBinary;
  }
  var _0x535cd4 = _0xad46db.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x24323c("no native wasm support detected");
  }
  var _0x5d8ae6;
  var _0x150bd9 = false;
  var _0x66bf97;
  function _0x5e3281(_0x216bb1, _0x15e1ea) {
    if (!_0x216bb1) {
      _0x24323c("Assertion failed: " + _0x15e1ea);
    }
  }
  function _0x2922f5(_0x28cb54) {
    var _0x5eb0b9 = _0xad46db["_" + _0x28cb54];
    _0x5e3281(_0x5eb0b9, "Cannot call unknown function " + _0x28cb54 + ", make sure it is exported");
    return _0x5eb0b9;
  }
  function _0x42a8b0(_0x1f8180, _0x56470f, _0x4a454e, _0x554b02, _0x231ee4) {
    var _0xbd2353 = {
      string: function (_0x7739e5) {
        var _0xac2490 = 0;
        if (_0x7739e5 !== null && _0x7739e5 !== undefined && _0x7739e5 !== 0) {
          var _0x1fa57e = (_0x7739e5.length << 2) + 1;
          _0xac2490 = _0x9577d8(_0x1fa57e);
          _0x2117d9(_0x7739e5, _0xac2490, _0x1fa57e);
        }
        return _0xac2490;
      },
      array: function (_0x28b2ae) {
        var _0x59dd9b = _0x9577d8(_0x28b2ae.length);
        _0x587bd3(_0x28b2ae, _0x59dd9b);
        return _0x59dd9b;
      }
    };
    function _0x374084(_0x311930) {
      if (_0x56470f === "string") {
        return _0x5d80c0(_0x311930);
      }
      if (_0x56470f === "boolean") {
        return Boolean(_0x311930);
      }
      return _0x311930;
    }
    var _0x27ce7d = _0x2922f5(_0x1f8180);
    var _0x5527f4 = [];
    var _0x33b765 = 0;
    if (_0x554b02) {
      for (var _0x38758a = 0; _0x38758a < _0x554b02.length; _0x38758a++) {
        var _0x53ab83 = _0xbd2353[_0x4a454e[_0x38758a]];
        if (_0x53ab83) {
          if (_0x33b765 === 0) {
            _0x33b765 = _0xd24b5e();
          }
          _0x5527f4[_0x38758a] = _0x53ab83(_0x554b02[_0x38758a]);
        } else {
          _0x5527f4[_0x38758a] = _0x554b02[_0x38758a];
        }
      }
    }
    var _0x12e056 = _0x27ce7d.apply(null, _0x5527f4);
    _0x12e056 = _0x374084(_0x12e056);
    if (_0x33b765 !== 0) {
      _0x114b19(_0x33b765);
    }
    return _0x12e056;
  }
  function _0x2cdd9c(_0x5d5fee, _0x8a9914, _0x11d5ff, _0x5407bd) {
    _0x11d5ff = _0x11d5ff || [];
    var _0x1ed95c = _0x11d5ff.every(function (_0x5910a5) {
      return _0x5910a5 === "number";
    });
    var _0x1fc26f = _0x8a9914 !== "string";
    if (_0x1fc26f && _0x1ed95c && !_0x5407bd) {
      return _0x2922f5(_0x5d5fee);
    }
    return function () {
      return _0x42a8b0(_0x5d5fee, _0x8a9914, _0x11d5ff, arguments, _0x5407bd);
    };
  }
  var _0x4f27f4 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x17265e(_0x56df30, _0x18e571, _0x1542e4) {
    var _0x58b89c = _0x18e571 + _0x1542e4;
    var _0xc9260b = _0x18e571;
    while (_0x56df30[_0xc9260b] && !(_0xc9260b >= _0x58b89c)) {
      ++_0xc9260b;
    }
    if (_0xc9260b - _0x18e571 > 16 && _0x56df30.subarray && _0x4f27f4) {
      return _0x4f27f4.decode(_0x56df30.subarray(_0x18e571, _0xc9260b));
    } else {
      var _0x4efde9 = "";
      while (_0x18e571 < _0xc9260b) {
        var _0x4541dc = _0x56df30[_0x18e571++];
        if (!(_0x4541dc & 128)) {
          _0x4efde9 += String.fromCharCode(_0x4541dc);
          continue;
        }
        var _0x5eb04c = _0x56df30[_0x18e571++] & 63;
        if ((_0x4541dc & 224) == 192) {
          _0x4efde9 += String.fromCharCode((_0x4541dc & 31) << 6 | _0x5eb04c);
          continue;
        }
        var _0x21be10 = _0x56df30[_0x18e571++] & 63;
        if ((_0x4541dc & 240) == 224) {
          _0x4541dc = (_0x4541dc & 15) << 12 | _0x5eb04c << 6 | _0x21be10;
        } else {
          _0x4541dc = (_0x4541dc & 7) << 18 | _0x5eb04c << 12 | _0x21be10 << 6 | _0x56df30[_0x18e571++] & 63;
        }
        if (_0x4541dc < 65536) {
          _0x4efde9 += String.fromCharCode(_0x4541dc);
        } else {
          var _0x5250dd = _0x4541dc - 65536;
          _0x4efde9 += String.fromCharCode(_0x5250dd >> 10 | 55296, _0x5250dd & 1023 | 56320);
        }
      }
    }
    return _0x4efde9;
  }
  function _0x5d80c0(_0xfdd70, _0x5eded8) {
    if (_0xfdd70) {
      return _0x17265e(_0x1c9190, _0xfdd70, _0x5eded8);
    } else {
      return "";
    }
  }
  function _0x299e6c(_0x58f493, _0x4afc83, _0x11911a, _0x3ad9e8) {
    if (!(_0x3ad9e8 > 0)) {
      return 0;
    }
    var _0x278f44 = _0x11911a;
    var _0x3a4e3a = _0x11911a + _0x3ad9e8 - 1;
    for (var _0x5428a0 = 0; _0x5428a0 < _0x58f493.length; ++_0x5428a0) {
      var _0x577406 = _0x58f493.charCodeAt(_0x5428a0);
      if (_0x577406 >= 55296 && _0x577406 <= 57343) {
        var _0x37a25e = _0x58f493.charCodeAt(++_0x5428a0);
        _0x577406 = 65536 + ((_0x577406 & 1023) << 10) | _0x37a25e & 1023;
      }
      if (_0x577406 <= 127) {
        if (_0x11911a >= _0x3a4e3a) {
          break;
        }
        _0x4afc83[_0x11911a++] = _0x577406;
      } else if (_0x577406 <= 2047) {
        if (_0x11911a + 1 >= _0x3a4e3a) {
          break;
        }
        _0x4afc83[_0x11911a++] = _0x577406 >> 6 | 192;
        _0x4afc83[_0x11911a++] = _0x577406 & 63 | 128;
      } else if (_0x577406 <= 65535) {
        if (_0x11911a + 2 >= _0x3a4e3a) {
          break;
        }
        _0x4afc83[_0x11911a++] = _0x577406 >> 12 | 224;
        _0x4afc83[_0x11911a++] = _0x577406 >> 6 & 63 | 128;
        _0x4afc83[_0x11911a++] = _0x577406 & 63 | 128;
      } else {
        if (_0x11911a + 3 >= _0x3a4e3a) {
          break;
        }
        _0x4afc83[_0x11911a++] = _0x577406 >> 18 | 240;
        _0x4afc83[_0x11911a++] = _0x577406 >> 12 & 63 | 128;
        _0x4afc83[_0x11911a++] = _0x577406 >> 6 & 63 | 128;
        _0x4afc83[_0x11911a++] = _0x577406 & 63 | 128;
      }
    }
    _0x4afc83[_0x11911a] = 0;
    return _0x11911a - _0x278f44;
  }
  function _0x2117d9(_0x153786, _0x1f7c27, _0x54467f) {
    return _0x299e6c(_0x153786, _0x1c9190, _0x1f7c27, _0x54467f);
  }
  function _0x18f5b9(_0x30eeca) {
    var _0x36ed02 = 0;
    for (var _0x10364e = 0; _0x10364e < _0x30eeca.length; ++_0x10364e) {
      var _0x1e7075 = _0x30eeca.charCodeAt(_0x10364e);
      if (_0x1e7075 >= 55296 && _0x1e7075 <= 57343) {
        _0x1e7075 = 65536 + ((_0x1e7075 & 1023) << 10) | _0x30eeca.charCodeAt(++_0x10364e) & 1023;
      }
      if (_0x1e7075 <= 127) {
        ++_0x36ed02;
      } else if (_0x1e7075 <= 2047) {
        _0x36ed02 += 2;
      } else if (_0x1e7075 <= 65535) {
        _0x36ed02 += 3;
      } else {
        _0x36ed02 += 4;
      }
    }
    return _0x36ed02;
  }
  function _0xd6e6b0(_0x3074b9) {
    var _0x498a96 = _0x18f5b9(_0x3074b9) + 1;
    var _0x30955e = _0x304a50(_0x498a96);
    if (_0x30955e) {
      _0x299e6c(_0x3074b9, _0x1e6f7f, _0x30955e, _0x498a96);
    }
    return _0x30955e;
  }
  function _0x1cae6d(_0x2ad743) {
    var _0xd81994 = _0x18f5b9(_0x2ad743) + 1;
    var _0x11f62d = _0x9577d8(_0xd81994);
    _0x299e6c(_0x2ad743, _0x1e6f7f, _0x11f62d, _0xd81994);
    return _0x11f62d;
  }
  function _0x587bd3(_0x10552f, _0x319a00) {
    _0x1e6f7f.set(_0x10552f, _0x319a00);
  }
  function _0x421c6e(_0x1efad1, _0x39a583, _0x3aebca) {
    for (var _0x5388f3 = 0; _0x5388f3 < _0x1efad1.length; ++_0x5388f3) {
      _0x1e6f7f[_0x39a583++ >> 0] = _0x1efad1.charCodeAt(_0x5388f3);
    }
    if (!_0x3aebca) {
      _0x1e6f7f[_0x39a583 >> 0] = 0;
    }
  }
  function _0x2ce8e6(_0x37d21a, _0x1d871e) {
    if (_0x37d21a % _0x1d871e > 0) {
      _0x37d21a += _0x1d871e - _0x37d21a % _0x1d871e;
    }
    return _0x37d21a;
  }
  var _0x154bbd;
  var _0x1e6f7f;
  var _0x1c9190;
  var _0x9533b8;
  var _0x3d21d8;
  var _0x49ddaa;
  var _0x2fe6c1;
  var _0x72ca9a;
  var _0x1a8d8e;
  function _0x403ebe(_0x3f277f) {
    _0x154bbd = _0x3f277f;
    _0xad46db.HEAP8 = _0x1e6f7f = new Int8Array(_0x3f277f);
    _0xad46db.HEAP16 = _0x9533b8 = new Int16Array(_0x3f277f);
    _0xad46db.HEAP32 = _0x49ddaa = new Int32Array(_0x3f277f);
    _0xad46db.HEAPU8 = _0x1c9190 = new Uint8Array(_0x3f277f);
    _0xad46db.HEAPU16 = _0x3d21d8 = new Uint16Array(_0x3f277f);
    _0xad46db.HEAPU32 = _0x2fe6c1 = new Uint32Array(_0x3f277f);
    _0xad46db.HEAPF32 = _0x72ca9a = new Float32Array(_0x3f277f);
    _0xad46db.HEAPF64 = _0x1a8d8e = new Float64Array(_0x3f277f);
  }
  var _0x5d0b7a = _0xad46db.INITIAL_MEMORY || 33554432;
  var _0x57322d;
  var _0x33fa15 = [];
  var _0x3881a5 = [];
  var _0x379dd8 = [];
  var _0x43e8f2 = [];
  var _0x10f281 = [];
  var _0x9e12d5 = false;
  var _0x44acd7 = false;
  function _0xce195b() {
    if (_0xad46db.preRun) {
      if (typeof _0xad46db.preRun == "function") {
        _0xad46db.preRun = [_0xad46db.preRun];
      }
      while (_0xad46db.preRun.length) {
        _0x5550ee(_0xad46db.preRun.shift());
      }
    }
    _0x4af9aa(_0x33fa15);
  }
  function _0x12a8d6() {
    _0x9e12d5 = true;
    if (!_0xad46db.noFSInit && !_0x379d8a.init.initialized) {
      _0x379d8a.init();
    }
    _0x38c05b.init();
    _0x28da01.root = _0x379d8a.mount(_0x28da01, {}, null);
    _0x4536ce.root = _0x379d8a.mount(_0x4536ce, {}, null);
    _0x4af9aa(_0x3881a5);
  }
  function _0x40bd1() {
    _0x379d8a.ignorePermissions = false;
    _0x4af9aa(_0x379dd8);
  }
  function _0x23d1ce() {
    _0x44acd7 = true;
  }
  function _0x63c92e() {
    if (_0xad46db.postRun) {
      if (typeof _0xad46db.postRun == "function") {
        _0xad46db.postRun = [_0xad46db.postRun];
      }
      while (_0xad46db.postRun.length) {
        _0x5d2aa9(_0xad46db.postRun.shift());
      }
    }
    _0x4af9aa(_0x10f281);
  }
  function _0x5550ee(_0x161de9) {
    _0x33fa15.unshift(_0x161de9);
  }
  function _0x2b4c3c(_0x2b06c2) {
    _0x3881a5.unshift(_0x2b06c2);
  }
  function _0x5d2aa9(_0x5474eb) {
    _0x10f281.unshift(_0x5474eb);
  }
  var _0x5e15a9 = 0;
  var _0x578f61 = null;
  var _0x531915 = null;
  function _0x5c0398(_0x5a42c0) {
    return _0x5a42c0;
  }
  function _0x37f4a1(_0x244969) {
    _0x5e15a9++;
    if (_0xad46db.monitorRunDependencies) {
      _0xad46db.monitorRunDependencies(_0x5e15a9);
    }
  }
  function _0x42d77a(_0x801690) {
    _0x5e15a9--;
    if (_0xad46db.monitorRunDependencies) {
      _0xad46db.monitorRunDependencies(_0x5e15a9);
    }
    if (_0x5e15a9 == 0) {
      if (_0x578f61 !== null) {
        clearInterval(_0x578f61);
        _0x578f61 = null;
      }
      if (_0x531915) {
        var _0x5bb5da = _0x531915;
        _0x531915 = null;
        _0x5bb5da();
      }
    }
  }
  _0xad46db.preloadedImages = {};
  _0xad46db.preloadedAudios = {};
  function _0x24323c(_0x233996) {
    if (_0xad46db.onAbort) {
      _0xad46db.onAbort(_0x233996);
    }
    _0x233996 += "";
    _0xf7c01a(_0x233996);
    _0x150bd9 = true;
    _0x66bf97 = 1;
    _0x233996 = "abort(" + _0x233996 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x20c78c = new WebAssembly.RuntimeError(_0x233996);
    throw _0x20c78c;
  }
  var _0x5a7372 = "data:application/octet-stream;base64,";
  function _0xb3a85d(_0x442d0a) {
    return _0x442d0a.startsWith(_0x5a7372);
  }
  function _0x86f662(_0xb4f897) {
    return _0xb4f897.startsWith("file://");
  }
  var _0x6f5d5c = "build.wasm";
  if (!_0xb3a85d(_0x6f5d5c)) {
    _0x6f5d5c = _0x2cc0d0(_0x6f5d5c);
  }
  function _0x5bbb85(_0x481a25) {
    try {
      if (_0x481a25 == _0x6f5d5c && _0x502051) {
        return new Uint8Array(_0x502051);
      }
      if (_0x3235b7) {
        return _0x3235b7(_0x481a25);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x39368b) {
      _0x24323c(_0x39368b);
    }
  }
  function _0xe63a16() {
    if (!_0x502051 && (_0x1a54c2 || _0x4b8188)) {
      if (typeof fetch === "function" && !_0x86f662(_0x6f5d5c)) {
        return fetch(_0x6f5d5c, {
          credentials: "same-origin"
        }).then(function (_0x417d4b) {
          if (!_0x417d4b.ok) {
            throw "failed to load wasm binary file at '" + _0x6f5d5c + "'";
          }
          return _0x417d4b.arrayBuffer();
        }).catch(function () {
          return _0x5bbb85(_0x6f5d5c);
        });
      } else if (_0x18acf5) {
        return new Promise(function (_0x5d460f, _0x345250) {
          _0x18acf5(_0x6f5d5c, function (_0x5ce7fe) {
            _0x5d460f(new Uint8Array(_0x5ce7fe));
          }, _0x345250);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x5bbb85(_0x6f5d5c);
    });
  }
  function _0x2ace15() {
    var _0x327ab1 = {
      a: _0xa4cb41
    };
    function _0xf8a6d1(_0x57da07, _0x2da8ce) {
      var _0xeb4b7c = _0x57da07.exports;
      _0xad46db.asm = _0xeb4b7c;
      _0x5d8ae6 = _0xad46db.asm.kl;
      _0x403ebe(_0x5d8ae6.buffer);
      _0x57322d = _0xad46db.asm.Kl;
      _0x2b4c3c(_0xad46db.asm.ll);
      _0x42d77a("wasm-instantiate");
    }
    _0x37f4a1("wasm-instantiate");
    function _0x575f3f(_0x44c21c) {
      _0xf8a6d1(_0x44c21c.instance);
    }
    function _0x4ed8f7(_0x5d53a0) {
      return _0xe63a16().then(function (_0x28a4c6) {
        var _0x596991 = WebAssembly.instantiate(_0x28a4c6, _0x327ab1);
        return _0x596991;
      }).then(_0x5d53a0, function (_0x67b9c9) {
        _0xf7c01a("failed to asynchronously prepare wasm: " + _0x67b9c9);
        _0x24323c(_0x67b9c9);
      });
    }
    function _0x3d5e39() {
      if (!_0x502051 && typeof WebAssembly.instantiateStreaming === "function" && !_0xb3a85d(_0x6f5d5c) && !_0x86f662(_0x6f5d5c) && typeof fetch === "function") {
        return fetch(_0x6f5d5c, {
          credentials: "same-origin"
        }).then(function (_0x2c3887) {
          var _0x356632 = WebAssembly.instantiateStreaming(_0x2c3887, _0x327ab1);
          return _0x356632.then(_0x575f3f, function (_0x4aeab2) {
            _0xf7c01a("wasm streaming compile failed: " + _0x4aeab2);
            _0xf7c01a("falling back to ArrayBuffer instantiation");
            return _0x4ed8f7(_0x575f3f);
          });
        });
      } else {
        return _0x4ed8f7(_0x575f3f);
      }
    }
    if (_0xad46db.instantiateWasm) {
      try {
        var _0x4b948a = _0xad46db.instantiateWasm(_0x327ab1, _0xf8a6d1);
        return _0x4b948a;
      } catch (_0x5100bd) {
        _0xf7c01a("Module.instantiateWasm callback failed with error: " + _0x5100bd);
        return false;
      }
    }
    _0x3d5e39();
    return {};
  }
  var _0x23d490;
  var _0x522fe6;
  var _0x148a64 = {
    5444824: function () {
      return _0xad46db.webglContextAttributes.premultipliedAlpha;
    },
    5444885: function () {
      return _0xad46db.webglContextAttributes.preserveDrawingBuffer;
    },
    5444949: function () {
      return _0xad46db.webglContextAttributes.powerPreference;
    }
  };
  function _0x4af9aa(_0x11fabf) {
    while (_0x11fabf.length > 0) {
      var _0x36766d = _0x11fabf.shift();
      if (typeof _0x36766d == "function") {
        _0x36766d(_0xad46db);
        continue;
      }
      var _0x46bfa3 = _0x36766d.func;
      if (typeof _0x46bfa3 === "number") {
        if (_0x36766d.arg === undefined) {
          (function () {
            _0x111b3b.call(null, _0x46bfa3);
          })();
        } else {
          (function (_0x248d42) {
            _0xc7c4be.apply(null, [_0x46bfa3, _0x248d42]);
          })(_0x36766d.arg);
        }
      } else {
        _0x46bfa3(_0x36766d.arg === undefined ? null : _0x36766d.arg);
      }
    }
  }
  function _0xf9cae1(_0x8265bb) {
    return _0x8265bb;
  }
  function _0x489ed7(_0x15e9bf) {
    var _0x2d1c2e = /\b_Z[\w\d_]+/g;
    return _0x15e9bf.replace(_0x2d1c2e, function (_0x45452b) {
      var _0x38b0c5 = _0xf9cae1(_0x45452b);
      if (_0x45452b === _0x38b0c5) {
        return _0x45452b;
      } else {
        return _0x38b0c5 + " [" + _0x45452b + "]";
      }
    });
  }
  function _0xa0a249(_0x19da0d, _0x3a6ff6, _0x5c8544) {
    var _0x2f7282 = _0xad46db["dynCall_" + _0x19da0d];
    if (_0x5c8544 && _0x5c8544.length) {
      return _0x2f7282.apply(null, [_0x3a6ff6].concat(_0x5c8544));
    } else {
      return _0x2f7282.call(null, _0x3a6ff6);
    }
  }
  function _0x48bfa2(_0x40614c, _0x338708, _0x15ed48) {
    return _0xa0a249(_0x40614c, _0x338708, _0x15ed48);
  }
  function _0x321f58() {
    var _0xb1b9f1 = new Error();
    if (!_0xb1b9f1.stack) {
      try {
        throw new Error();
      } catch (_0x1bbf2a) {
        _0xb1b9f1 = _0x1bbf2a;
      }
      if (!_0xb1b9f1.stack) {
        return "(no stack trace available)";
      }
    }
    return _0xb1b9f1.stack.toString();
  }
  var _0x5b0e0e = 0;
  function _0xd18990() {
    return _0x535cd4 || _0x5b0e0e > 0;
  }
  function _0xd75f1d() {
    var _0x293a99 = _0x321f58();
    if (_0xad46db.extraStackTrace) {
      _0x293a99 += "\n" + _0xad46db.extraStackTrace();
    }
    return _0x489ed7(_0x293a99);
  }
  function _0x2f388c(_0x15b19e, _0x2e7d30, _0x406357, _0x15df85, _0xaf112c) {
    var _0x127044 = _0x5d80c0(_0x15b19e);
    var _0x2f39db = _0x5d80c0(_0x2e7d30);
    var _0x7c3dde = _0x5d80c0(_0x406357);
    var _0x183db0 = _0x5d80c0(_0x15df85);
    var _0x2b4b8e = _0x5d80c0(_0xaf112c);
    try {
      firebase.firestore().collection(_0x127044).add(JSON.parse(_0x2f39db)).then(function (_0xbe2612) {
        window.unityInstance.SendMessage(_0x7c3dde, _0x183db0, "Success: document added in collection " + _0x127044);
      }).catch(function (_0x5af072) {
        window.unityInstance.SendMessage(_0x7c3dde, _0x2b4b8e, JSON.stringify(_0x5af072, Object.getOwnPropertyNames(_0x5af072)));
      });
    } catch (_0x559b63) {
      window.unityInstance.SendMessage(_0x7c3dde, _0x2b4b8e, JSON.stringify(_0x559b63, Object.getOwnPropertyNames(_0x559b63)));
    }
  }
  function _0x528214(_0x381ec3, _0x651a60, _0x3a316e, _0x5893b7, _0x3cbb58, _0x3748a1, _0x4184fb) {
    var _0x4787cb = _0x5d80c0(_0x381ec3);
    var _0x49bb5d = _0x5d80c0(_0x651a60);
    var _0x4b0779 = _0x5d80c0(_0x3a316e);
    var _0x39f669 = _0x5d80c0(_0x5893b7);
    var _0x4ff895 = _0x5d80c0(_0x3cbb58);
    var _0x375abc = _0x5d80c0(_0x3748a1);
    var _0x53df93 = _0x5d80c0(_0x4184fb);
    try {
      var _0x5893b7 = {};
      _0x5893b7[_0x4b0779] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x39f669));
      firebase.firestore().collection(_0x4787cb).doc(_0x49bb5d).update(_0x5893b7).then(function () {
        window.unityInstance.SendMessage(_0x4ff895, _0x375abc, "Success: element " + _0x39f669 + " was added in " + _0x4b0779);
      }).catch(function (_0x3540f0) {
        window.unityInstance.SendMessage(_0x4ff895, _0x53df93, JSON.stringify(_0x3540f0, Object.getOwnPropertyNames(_0x3540f0)));
      });
    } catch (_0x1322e0) {
      window.unityInstance.SendMessage(_0x4ff895, _0x53df93, JSON.stringify(_0x1322e0, Object.getOwnPropertyNames(_0x1322e0)));
    }
  }
  function _0x3cfe57(_0x4ecc55) {
    try {
      window.CrazyGames.SDK.user.addScore(_0x4ecc55);
    } catch (_0x10da53) {
      window.UnitySDK.logError("Error while calling addScore:", _0x10da53);
    }
  }
  function _0x4f8a60(_0x4d32d8, _0x30e6ae) {
    try {
      window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x4d32d8), JSON.parse(window.unityStringify(_0x30e6ae)));
    } catch (_0xd8d780) {
      window.UnitySDK.logError("Error while calling trackOrder:", _0xd8d780);
    }
  }
  function _0x49f172(_0x264fef) {
    const _0x22543b = document.createElement("textarea");
    _0x22543b.value = window.unityStringify(_0x264fef);
    document.body.appendChild(_0x22543b);
    _0x22543b.select();
    _0x22543b.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(_0x22543b);
  }
  function _0x1e1304(_0x3e4fef, _0x26b1ed, _0x3f79e5, _0x47e332, _0x1c4246) {
    var _0x4087eb = _0x5d80c0(_0x3e4fef);
    var _0x441a35 = _0x5d80c0(_0x26b1ed);
    var _0x534dc3 = _0x5d80c0(_0x3f79e5);
    var _0x405e21 = _0x5d80c0(_0x47e332);
    var _0x5d485b = _0x5d80c0(_0x1c4246);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x4087eb, _0x441a35).then(function (_0x5862ab) {
        window.unityInstance.SendMessage(_0x534dc3, _0x405e21, "Success: signed up for " + _0x4087eb);
      }).catch(function (_0x4d1ce8) {
        window.unityInstance.SendMessage(_0x534dc3, _0x5d485b, JSON.stringify(_0x4d1ce8, Object.getOwnPropertyNames(_0x4d1ce8)));
      });
    } catch (_0x304e75) {
      window.unityInstance.SendMessage(_0x534dc3, _0x5d485b, JSON.stringify(_0x304e75, Object.getOwnPropertyNames(_0x304e75)));
    }
  }
  function _0x42ac24() {
    try {
      window.CrazyGames.SDK.data.clear();
    } catch (_0x2e8578) {
      window.UnitySDK.logError("Error while calling clear:", _0x2e8578);
    }
  }
  function _0x3f290e(_0x29ef30) {
    var _0x1f884a = null;
    try {
      _0x1f884a = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x29ef30));
    } catch (_0x13701b) {
      window.UnitySDK.logError("Error while calling getItem:", _0x13701b);
    }
    var _0x955a8 = _0x18f5b9(_0x1f884a + "") + 1;
    var _0x24383f = _0x304a50(_0x955a8);
    _0x2117d9(_0x1f884a, _0x24383f, _0x955a8);
    return _0x24383f;
  }
  function _0x5c846e(_0x44c9aa) {
    var _0x3ec0a4 = null;
    try {
      _0x3ec0a4 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x44c9aa));
    } catch (_0x1e582e) {
      window.UnitySDK.logError("Error while calling getItem:", _0x1e582e);
    }
    return _0x3ec0a4 !== null;
  }
  function _0x49f30(_0x252bb9) {
    try {
      window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x252bb9));
    } catch (_0x4c0927) {
      window.UnitySDK.logError("Error while calling removeItem:", _0x4c0927);
    }
  }
  function _0xdc579b(_0xaf0ba8, _0x217dac) {
    try {
      window.CrazyGames.SDK.data.setItem(window.unityStringify(_0xaf0ba8), window.unityStringify(_0x217dac));
    } catch (_0x4fbc79) {
      window.UnitySDK.logError("Error while calling setItem:", _0x4fbc79);
    }
  }
  function _0x2d1cca(_0x2b198c, _0x4b246e, _0x2e7aba, _0x3a2bc3, _0xe4d338) {
    var _0x53612e = _0x5d80c0(_0x2b198c);
    var _0xab6455 = _0x5d80c0(_0x4b246e);
    var _0x829239 = _0x5d80c0(_0x2e7aba);
    var _0x3d25e7 = _0x5d80c0(_0x3a2bc3);
    var _0x377b54 = _0x5d80c0(_0xe4d338);
    try {
      firebase.firestore().collection(_0x53612e).doc(_0xab6455).delete().then(function () {
        window.unityInstance.SendMessage(_0x829239, _0x3d25e7, "Success: document " + _0xab6455 + " was deleted");
      }).catch(function (_0x567e5d) {
        window.unityInstance.SendMessage(_0x829239, _0x377b54, JSON.stringify(_0x567e5d, Object.getOwnPropertyNames(_0x567e5d)));
      });
    } catch (_0x252803) {
      window.unityInstance.SendMessage(_0x829239, _0x377b54, JSON.stringify(_0x252803, Object.getOwnPropertyNames(_0x252803)));
    }
  }
  function _0x529527(_0x6431ec, _0x4c97ac, _0x56d837, _0x26ecea, _0x777a05, _0x377ca5) {
    var _0x3e6d7a = _0x5d80c0(_0x6431ec);
    var _0x5005c3 = _0x5d80c0(_0x4c97ac);
    var _0x449d02 = _0x5d80c0(_0x56d837);
    var _0x3489a9 = _0x5d80c0(_0x26ecea);
    var _0x14795a = _0x5d80c0(_0x777a05);
    var _0x244dc2 = _0x5d80c0(_0x377ca5);
    try {
      var _0x21a84a = {};
      _0x21a84a[_0x449d02] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0x3e6d7a).doc(_0x5005c3).update(_0x21a84a).then(function () {
        window.unityInstance.SendMessage(_0x3489a9, _0x14795a, "Success: field " + _0x449d02 + " was deleted");
      }).catch(function (_0x384f86) {
        window.unityInstance.SendMessage(_0x3489a9, _0x244dc2, JSON.stringify(_0x384f86, Object.getOwnPropertyNames(_0x384f86)));
      });
    } catch (_0x460c0c) {
      window.unityInstance.SendMessage(_0x3489a9, _0x244dc2, JSON.stringify(_0x460c0c, Object.getOwnPropertyNames(_0x460c0c)));
    }
  }
  function _0x2d6691(_0x5db913, _0x41ef96, _0x2f7c07, _0x3049a3) {
    var _0x56498b = _0x5d80c0(_0x5db913);
    var _0x317c31 = _0x5d80c0(_0x41ef96);
    var _0x20ab04 = _0x5d80c0(_0x2f7c07);
    var _0xfb9de2 = _0x5d80c0(_0x3049a3);
    try {
      firebase.database().ref(_0x56498b).remove().then(function (_0x58c3e7) {
        window.unityInstance.SendMessage(_0x317c31, _0x20ab04, "Success: " + _0x56498b + " was deleted");
      });
    } catch (_0x5946d) {
      window.unityInstance.SendMessage(_0x317c31, _0xfb9de2, JSON.stringify(_0x5946d, Object.getOwnPropertyNames(_0x5946d)));
    }
  }
  function _0x4ea22b() {
    if (window.clipboardPasteHandler) {
      window.removeEventListener("paste", window.clipboardPasteHandler);
      window.clipboardPasteHandler = null;
      console.log("Paste listener disabled.");
    }
  }
  function _0x4e1f24(_0x41c1e6, _0x3e4629, _0x12d8b4, _0x214b45) {
    var _0x3fda1e = _0x5d80c0(_0x41c1e6);
    var _0x25d2ac = _0x5d80c0(_0x3e4629);
    var _0x212295 = _0x5d80c0(_0x12d8b4);
    var _0x1e04c2 = _0x5d80c0(_0x214b45);
    try {
      firebase.storage().ref(_0x3fda1e).getDownloadURL().then(function (_0x5d23f2) {
        var _0x43af9c = new XMLHttpRequest();
        _0x43af9c.responseType = "arraybuffer";
        _0x43af9c.onload = function (_0x2b85e2) {
          var _0x5a80b4 = _0x43af9c.response;
          window.unityInstance.SendMessage(_0x25d2ac, _0x212295, _0x39c12f(_0x5a80b4));
        };
        _0x43af9c.open("GET", _0x5d23f2);
        _0x43af9c.send();
      }).catch(function (_0x351067) {
        window.unityInstance.SendMessage(_0x25d2ac, _0x1e04c2, JSON.stringify(_0x351067, Object.getOwnPropertyNames(_0x351067)));
      });
    } catch (_0x4efded) {
      window.unityInstance.SendMessage(_0x25d2ac, _0x1e04c2, JSON.stringify(_0x4efded, Object.getOwnPropertyNames(_0x4efded)));
    }
    function _0x39c12f(_0xc99002) {
      var _0x51472e = "";
      var _0x2003db = new Uint8Array(_0xc99002);
      var _0x4e59e3 = _0x2003db.byteLength;
      for (var _0x509deb = 0; _0x509deb < _0x4e59e3; _0x509deb++) {
        _0x51472e += String.fromCharCode(_0x2003db[_0x509deb]);
      }
      return window.btoa(_0x51472e);
    }
  }
  function _0x4a23ce(_0x4d533f, _0x3ec8de) {
    var _0x189f7d = _0x5d80c0(_0x4d533f);
    var _0xf27c96 = _0x5d80c0(_0x3ec8de);
    if (window.clipboardPasteHandler) {
      return;
    }
    window.clipboardPasteHandler = function (_0x4f9230) {
      _0x4f9230.preventDefault();
      var _0x5b25cf = (_0x4f9230.clipboardData || window.clipboardData).getData("text");
      _0x1bb0a2(_0x189f7d, _0xf27c96, _0x5b25cf);
    };
    window.addEventListener("paste", window.clipboardPasteHandler);
    console.log("Paste listener enabled.");
  }
  function _0x1d0424() {
    var _0x1f2044 = window.document;
    var _0x5eea65 = _0x1f2044.fullscreenElement || _0x1f2044.mozFullScreenElement || _0x1f2044.webkitFullscreenElement || _0x1f2044.msFullscreenElement;
    if (_0x5eea65) {
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
  function _0x58f53e(_0x9dddf9, _0x57d17d) {
    var _0x2722b4 = _0x5d80c0(_0x9dddf9);
    var _0x4d62a2 = _0x5d80c0(_0x57d17d);
    var _0x2fcd1c = new Blob([_0x4d62a2], {
      type: "text/plain"
    });
    var _0x210eaf = document.createElement("a");
    _0x210eaf.href = URL.createObjectURL(_0x2fcd1c);
    _0x210eaf.download = _0x2722b4;
    _0x210eaf.click();
    setTimeout(() => URL.revokeObjectURL(_0x210eaf.href), 100);
  }
  function _0xb67f14() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x410be3) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0xda18f6(_0x3c8f6a) {
    var _0x4a2463 = {
      adStarted: function () {
        _0x1bb0a2("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        _0x1bb0a2("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      },
      adError: function (_0x4bb98a) {
        _0x1bb0a2("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x4bb98a));
      }
    };
    var _0x43f4ad = window.GMSOFT_GMADS_INFO.reward;
    var _0x1e8929 = _0x43f4ad[Math.floor(Math.random() * _0x43f4ad.length)];
    try {
      var _0x13378b = document.createElement("div");
      _0x13378b.id = "gm-ad-overlay";
      _0x13378b.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x547945 = document.createElement("div");
      _0x547945.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x20722b = document.createElement("video");
      _0x20722b.src = _0x1e8929.image;
      _0x20722b.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
      _0x20722b.autoplay = true;
      _0x20722b.muted = true;
      _0x20722b.preload = "auto";
      var _0x48d813 = document.createElement("button");
      _0x48d813.innerHTML = "Skip (5)";
      _0x48d813.disabled = true;
      _0x48d813.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
      _0x48d813.disabled = true;
      _0x48d813.style.opacity = "0.5";
      var _0xdb7f25 = document.createElement("div");
      _0xdb7f25.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0x48cfb5 = document.createElement("div");
      _0x48cfb5.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x3a11fa = 5;
      var _0x355303 = setInterval(function () {
        _0x3a11fa--;
        if (_0x3a11fa > 0) {
          _0x48d813.innerHTML = "Skip (" + _0x3a11fa + ")";
        } else {
          _0x48d813.innerHTML = "Skip";
          _0x48d813.disabled = false;
          _0x48d813.style.opacity = "1";
          _0x48d813.style.cursor = "pointer";
          clearInterval(_0x355303);
        }
      }, 1000);
      function _0x4492f9() {
        if (_0x13378b && _0x13378b.parentNode) {
          _0x13378b.parentNode.removeChild(_0x13378b);
        }
        clearInterval(_0x355303);
        _0x4a2463.adFinished();
      }
      function _0x1befd7() {
        window.open(_0x1e8929.url, "_blank");
      }
      function _0x1e0a6a() {
        if (_0x20722b.duration && _0x20722b.currentTime) {
          var _0x2490b0 = _0x20722b.currentTime / _0x20722b.duration * 100;
          _0x48cfb5.style.width = _0x2490b0 + "%";
        }
      }
      _0x20722b.addEventListener("loadstart", function () {
        _0x4a2463.adStarted();
      });
      _0x20722b.addEventListener("timeupdate", function () {
        _0x1e0a6a();
      });
      _0x20722b.addEventListener("ended", function () {
        _0x4492f9();
      });
      _0x20722b.addEventListener("error", function (_0x4d1d96) {
        var _0x1d851b = {
          message: "Video load error",
          code: _0x4d1d96.target.error ? _0x4d1d96.target.error.code : "unknown"
        };
        _0x4a2463.adError(_0x1d851b);
        _0x4492f9();
      });
      _0x20722b.addEventListener("click", function () {
        _0x1befd7();
      });
      _0x48d813.addEventListener("click", function () {
        if (!_0x48d813.disabled) {
          _0x4492f9();
        }
      });
      _0x20722b.addEventListener("contextmenu", function (_0xc8479e) {
        _0xc8479e.preventDefault();
      });
      _0xdb7f25.appendChild(_0x48cfb5);
      _0x547945.appendChild(_0x20722b);
      _0x547945.appendChild(_0x48d813);
      _0x547945.appendChild(_0xdb7f25);
      _0x13378b.appendChild(_0x547945);
      document.body.appendChild(_0x13378b);
      _0x20722b.play().catch(function (_0x8a362) {
        console.error("Video play error:", _0x8a362);
        _0x4a2463.adError({
          message: "Cannot play video",
          details: _0x8a362.message
        });
        _0x4492f9();
      });
    } catch (_0x14686b) {
      console.error("Ad overlay creation error:", _0x14686b);
      _0x4a2463.adError({
        message: "Failed to create ad overlay",
        details: _0x14686b.message
      });
    }
  }
  function _0x4502fe(_0x2b4ad3, _0x2f6a67) {
    gmEvent(_0x5d80c0(_0x2b4ad3), _0x5d80c0(_0x2f6a67));
  }
  function _0xf0b4d4() {
    const _0x2e66a5 = "gmsdksigndomain";
    try {
      if (localStorage.hasOwnProperty(_0x2e66a5)) {
        let _0x20d216 = localStorage.getItem(_0x2e66a5);
        if (_0x20d216 && _0x20d216.length > 10) {
          window.GMSOFT_SIGNED = _0x20d216;
          console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
          _0x1bb0a2("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
          return;
        }
      }
    } catch (_0x511f75) {
      console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x511f75);
    }
    try {
      let _0x36070f = "hn=" + "https://games.1games.io";
      let _0x481780 = btoa(_0x36070f);
      let _0x2c6408 = "https://api.cdnwave.com/sdkdom/keysigned";
      if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
        _0x2c6408 = window.GMSOFT_OPTIONS.signedurl;
      }
      let _0x2d8d29 = _0x2c6408 + "?params=" + _0x481780;
      var _0x2d3b61 = new XMLHttpRequest();
      let _0x36e90d = "";
      _0x2d3b61.open("GET", _0x2d8d29, false);
      _0x2d3b61.send(_0x36e90d);
      let _0x4b489a = _0x2d3b61.responseText;
      window.GMSOFT_SIGNED = _0x4b489a;
      localStorage.setItem(_0x2e66a5, _0x4b489a);
      console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
      _0x1bb0a2("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
    } catch (_0x2cb75f) {
      console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x2cb75f);
    }
  }
  function _0x2d5746() {
    let _0x29762f = "https://games.1games.io";
    _0x1bb0a2("GmSoft", "SetUnityHostName", _0x29762f);
    _0x1bb0a2("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
  }
  function _0x5b8441() {
    console.log("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x1bb0a2("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
      });
    } catch (_0x851d51) {
      console.error("Error JS 12", _0x851d51);
    }
    try {
      gmStartAds(function () {
        _0x1bb0a2("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
      });
    } catch (_0x199633) {
      console.error("Error JS 20", _0x199633);
    }
    try {
      document.addEventListener("gmsoftbanevent", _0x5134c2 => {
        _0x1bb0a2("GmSoft", "LockGame", _0x5134c2.detail);
      });
    } catch (_0x4f6db5) {
      console.error("Error JS 28", _0x4f6db5);
    }
  }
  function _0x185ced(_0x4a7f94) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x4a7f94);
    } catch (_0x5be684) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x3073c6() {
    try {
      window.CrazyGames.SDK.game.gameplayStart();
    } catch (_0x24233e) {
      window.UnitySDK.logError("Error while calling gameplayStart:", _0x24233e);
    }
  }
  function _0x53c30e() {
    try {
      window.CrazyGames.SDK.game.gameplayStop();
    } catch (_0xb63780) {
      window.UnitySDK.logError("Error while calling gameplayStop:", _0xb63780);
    }
  }
  function _0x2b5e6a() {
    var _0x19645a = firebaseConfig.projectId;
    var _0x3a2be5 = _0x18f5b9(_0x19645a) + 1;
    var _0x6c43a8 = _0x304a50(_0x3a2be5);
    _0x2117d9(_0x19645a, _0x6c43a8, _0x3a2be5);
    return _0x6c43a8;
  }
  function _0x37df69(_0x246d72, _0x1f45d1, _0x49357b, _0x1fbaa3, _0x426080) {
    var _0x14db42 = _0x5d80c0(_0x246d72);
    var _0x2a60de = _0x5d80c0(_0x1f45d1);
    var _0x3a706f = _0x5d80c0(_0x49357b);
    var _0x58d0f5 = _0x5d80c0(_0x1fbaa3);
    var _0x580a23 = _0x5d80c0(_0x426080);
    try {
      firebase.firestore().collection(_0x14db42).doc(_0x2a60de).get().then(function (_0x4e735c) {
        if (_0x4e735c.exists) {
          window.unityInstance.SendMessage(_0x3a706f, _0x58d0f5, JSON.stringify(_0x4e735c.data()));
        } else {
          window.unityInstance.SendMessage(_0x3a706f, _0x58d0f5, "null");
        }
      }).catch(function (_0x265e69) {
        window.unityInstance.SendMessage(_0x3a706f, _0x580a23, JSON.stringify(_0x265e69, Object.getOwnPropertyNames(_0x265e69)));
      });
    } catch (_0x5a3607) {
      window.unityInstance.SendMessage(_0x3a706f, _0x580a23, JSON.stringify(_0x5a3607, Object.getOwnPropertyNames(_0x5a3607)));
    }
  }
  function _0x542055(_0x2e2b05, _0x1efad0, _0x51384e, _0x41f732) {
    var _0x470ddc = _0x5d80c0(_0x2e2b05);
    var _0xfdae0d = _0x5d80c0(_0x1efad0);
    var _0x1843ff = _0x5d80c0(_0x51384e);
    var _0xead39 = _0x5d80c0(_0x41f732);
    try {
      firebase.firestore().collection(_0x470ddc).get().then(function (_0x2e65a6) {
        var _0x2be184 = {};
        _0x2e65a6.forEach(function (_0x252da3) {
          _0x2be184[_0x252da3.id] = _0x252da3.data();
        });
        window.unityInstance.SendMessage(_0xfdae0d, _0x1843ff, JSON.stringify(_0x2be184));
      }).catch(function (_0x265a72) {
        window.unityInstance.SendMessage(_0xfdae0d, _0xead39, JSON.stringify(_0x265a72, Object.getOwnPropertyNames(_0x265a72)));
      });
    } catch (_0x49a90f) {
      window.unityInstance.SendMessage(_0xfdae0d, _0xead39, JSON.stringify(_0x49a90f, Object.getOwnPropertyNames(_0x49a90f)));
    }
  }
  function _0x56ef67() {
    var _0x1a1029 = window.CrazyGames.SDK.environment;
    var _0x232ef0 = _0x18f5b9(_0x1a1029) + 1;
    var _0x13737a = _0x304a50(_0x232ef0);
    _0x2117d9(_0x1a1029, _0x13737a, _0x232ef0);
    return _0x13737a;
  }
  function _0x47633c() {
    var _0x147009 = JSON.stringify(window.CrazyGames.SDK.game.settings);
    var _0x5349c1 = _0x18f5b9(_0x147009) + 1;
    var _0x4c41da = _0x304a50(_0x5349c1);
    _0x2117d9(_0x147009, _0x4c41da, _0x5349c1);
    return _0x4c41da;
  }
  function _0x10cd87(_0xa9de6f) {
    var _0x2817f9 = new URLSearchParams(window.location.search);
    var _0x24dfb4 = _0x2817f9.get(window.unityStringify(_0xa9de6f));
    if (_0x24dfb4 === null) {
      _0x24dfb4 = "";
    }
    var _0x228fa1 = _0x18f5b9(_0x24dfb4) + 1;
    var _0x5a31aa = _0x304a50(_0x228fa1);
    _0x2117d9(_0x24dfb4, _0x5a31aa, _0x228fa1);
    return _0x5a31aa;
  }
  function _0x5bdd35() {
    return window.CrazyGames.SDK.isQaTool;
  }
  function _0x585ac5(_0x5b45ff, _0x23393a, _0x55af3d, _0x47c808) {
    var _0x5a57fb = _0x5d80c0(_0x5b45ff);
    var _0x228124 = _0x5d80c0(_0x23393a);
    var _0x5c173c = _0x5d80c0(_0x55af3d);
    var _0x41f2ab = _0x5d80c0(_0x47c808);
    try {
      firebase.database().ref(_0x5a57fb).once("value").then(function (_0x1b1650) {
        window.unityInstance.SendMessage(_0x228124, _0x5c173c, JSON.stringify(_0x1b1650.val()));
      });
    } catch (_0x1b1441) {
      window.unityInstance.SendMessage(_0x228124, _0x41f2ab, JSON.stringify(_0x1b1441, Object.getOwnPropertyNames(_0x1b1441)));
    }
  }
  function _0x49b8de() {
    var _0x5df264 = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
    var _0x4a8c93 = _0x18f5b9(_0x5df264) + 1;
    var _0x88435c = _0x304a50(_0x4a8c93);
    _0x2117d9(_0x5df264, _0x88435c, _0x4a8c93);
    return _0x88435c;
  }
  function _0x51cbda() {
    if (performance.memory) {
      return performance.memory.totalJSHeapSize;
    }
    return 0;
  }
  function _0x1231b0() {
    if (performance.memory) {
      return performance.memory.usedJSHeapSize;
    }
    return 0;
  }
  function _0x5502c0() {
    window.CrazyGames.SDK.user.getUser().then(function (_0x137eea) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        userJson: JSON.stringify(_0x137eea)
      }));
    }).catch(function (_0xe8f6d2) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
        errorJson: JSON.stringify(_0xe8f6d2)
      }));
    });
  }
  function _0x1bc909() {
    window.CrazyGames.SDK.user.getUserToken().then(function (_0x27c661) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        token: _0x27c661
      }));
    }).catch(function (_0x36f5c6) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x36f5c6)
      }));
    });
  }
  function _0x34ee6c() {
    window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x483147) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        token: _0x483147
      }));
    }).catch(function (_0x329b32) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
        errorJson: JSON.stringify(_0x329b32)
      }));
    });
  }
  function _0x2d7b60() {}
  function _0x2b362a() {
    console.log("afg.ready: " + afg.ready);
    if (afg.ready) {
      _0x1bb0a2("H5Adverisement", "PreloadRewardedVideoCallback", 1);
      afg.adBreak({
        type: "reward",
        name: "reward ads",
        beforeReward: function (_0xab8703) {
          this._showRewardAdFn = _0xab8703;
          console.log("[H5 Ads] before reward");
        }.bind(this),
        adViewed: function () {
          this._showRewardAdFn = null;
          _0x1bb0a2("H5Adverisement", "RewardedVideoSuccessCallback");
          console.log("[H5 Ads] ad viewed");
        }.bind(this),
        adDismissed: function () {
          this._showRewardAdFn = null;
          _0x1bb0a2("H5Adverisement", "RewardedVideoFailureCallback");
          console.log("[H5 Ads] ad failure");
        }.bind(this),
        adBreakDone: function (_0x586936) {
          console.log("[H5 Ads] Reward break done");
          _0x1bb0a2("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("[H5 Ads] no reward ads");
      _0x1bb0a2("H5Adverisement", "PreloadRewardedVideoCallback", 0);
    }
  }
  function _0x5ca12b() {
    if (afg.ready) {
      afg.adBreak({
        type: "next",
        name: "next",
        beforeAd: function () {
          afg.onBeforeAd();
          console.log("[H5 Ads] Before ad");
          _0x1bb0a2("H5Adverisement", "PauseGameCallback");
        }.bind(this),
        adBreakDone: function () {
          console.log("[H5 Ads] Ad break done");
          _0x1bb0a2("H5Adverisement", "ResumeGameCallback");
        }.bind(this)
      });
    } else {
      console.log("no next ads");
      _0x1bb0a2("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x4b3e8b() {
    if (this._showRewardAdFn) {
      _0x1bb0a2("H5Adverisement", "PauseGameCallback");
      this._showRewardAdFn();
    } else {
      _0x1bb0a2("H5Adverisement", "ResumeGameCallback");
    }
  }
  function _0x39bfcf() {
    try {
      window.CrazyGames.SDK.game.happytime();
    } catch (_0x29af16) {
      window.UnitySDK.logError("Error while calling happytime:", _0x29af16);
    }
  }
  function _0xb7cd90() {
    try {
      window.CrazyGames.SDK.game.hideInviteButton();
    } catch (_0x42ef3e) {
      window.UnitySDK.logError("Error while calling hideInviteButton:", _0x42ef3e);
    }
  }
  function _0x3d6aa0(_0x53c8ef, _0x58f256) {
    const _0x36f290 = _0x5d80c0(_0x53c8ef);
    const _0x900582 = _0x5d80c0(_0x58f256);
    const _0x4d222b = document.createElement("input");
    _0x4d222b.type = "file";
    _0x4d222b.accept = ".txt";
    _0x4d222b.onchange = _0x17a8fd => {
      const _0x49f998 = _0x17a8fd.target.files[0];
      if (_0x49f998) {
        const _0x13a3eb = new FileReader();
        _0x13a3eb.onload = () => {
          const _0x483cb5 = _0x13a3eb.result;
          _0x1bb0a2(_0x36f290, _0x900582, _0x483cb5);
        };
        _0x13a3eb.readAsText(_0x49f998);
      }
    };
    _0x4d222b.click();
  }
  function _0x4531d3(_0x4a8255, _0x166295) {
    const _0x310bdf = _0x5d80c0(_0x4a8255);
    const _0x5aa90d = _0x5d80c0(_0x166295);
    const _0x36c11a = document.createElement("input");
    _0x36c11a.type = "file";
    _0x36c11a.accept = ".gmd";
    _0x36c11a.onchange = _0x3a3610 => {
      const _0x3c0439 = _0x3a3610.target.files[0];
      if (_0x3c0439) {
        const _0x52b649 = new FileReader();
        _0x52b649.onload = () => {
          const _0x11ec18 = _0x52b649.result;
          _0x1bb0a2(_0x310bdf, _0x5aa90d, _0x11ec18);
        };
        _0x52b649.readAsText(_0x3c0439);
      }
    };
    _0x36c11a.click();
  }
  function _0x48ea1e(_0x1678da, _0x204eca, _0x328e46, _0x1ec085, _0x43a03a, _0x481034, _0x2cb790) {
    var _0x53a0e0 = _0x5d80c0(_0x1678da);
    var _0x5e091e = _0x5d80c0(_0x204eca);
    var _0x5d4e2a = _0x5d80c0(_0x328e46);
    var _0x527676 = _0x5d80c0(_0x43a03a);
    var _0x48d4ba = _0x5d80c0(_0x481034);
    var _0x52f4f5 = _0x5d80c0(_0x2cb790);
    try {
      var _0x29b521 = {};
      _0x29b521[_0x5d4e2a] = firebase.firestore.FieldValue.increment(_0x1ec085);
      firebase.firestore().collection(_0x53a0e0).doc(_0x5e091e).update(_0x29b521).then(function () {
        window.unityInstance.SendMessage(_0x527676, _0x48d4ba, "Success: incremented " + _0x5d4e2a + " by " + _0x1ec085);
      }).catch(function (_0xccb11c) {
        window.unityInstance.SendMessage(_0x527676, _0x52f4f5, JSON.stringify(_0xccb11c, Object.getOwnPropertyNames(_0xccb11c)));
      });
    } catch (_0x1adb74) {
      window.unityInstance.SendMessage(_0x527676, _0x52f4f5, JSON.stringify(_0x1adb74, Object.getOwnPropertyNames(_0x1adb74)));
    }
  }
  function _0x52b468(_0x4dafb5) {
    if (typeof _0x5d80c0 !== "undefined") {
      window.unityStringify = _0x5d80c0;
    } else {
      window.unityStringify = _0x5d80c0;
    }
    window.UnitySDK = {
      version: window.unityStringify(_0x4dafb5),
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
        var _0x330a74 = Array.prototype.slice.call(arguments);
        _0x330a74.unshift("[JsLib]");
        console.error.apply(console, _0x330a74);
      }
    };
    var _0x49a4ae = {
      wrapper: {
        engine: "unity",
        sdkVersion: window.unityStringify(_0x4dafb5)
      }
    };
    var _0x4af9dc = document.createElement("script");
    _0x4af9dc.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
    document.head.appendChild(_0x4af9dc);
    _0x4af9dc.addEventListener("load", function () {
      window.CrazyGames.SDK.init(_0x49a4ae).then(function () {
        _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_Init");
        window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x40f3ae) {
          _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x40f3ae ? 1 : 0);
        }).catch(function (_0x5bef76) {
          window.UnitySDK.logError("Error while checking adblock:", _0x5bef76);
          _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        });
        window.CrazyGames.SDK.user.addAuthListener(function (_0xd2ee15) {
          _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
            userJson: JSON.stringify(_0xd2ee15)
          }));
        });
      });
    });
  }
  function _0x4d83a9() {
    var _0x271534 = window.document;
    var _0x16811a = _0x271534.fullscreenElement || _0x271534.mozFullScreenElement || _0x271534.webkitFullscreenElement || _0x271534.msFullscreenElement;
    return _0x16811a != null;
  }
  function _0x30a754() {
    return window.CrazyGames.SDK.user.isUserAccountAvailable;
  }
  var _0x51a9d1 = null;
  var _0x268e0d = 0;
  function _0xa589a8() {
    return _0x51a9d1 && _0x51a9d1.activated || _0x268e0d != 0;
  }
  var _0x1da71c = 1;
  var _0xd3abd1 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x581231() {
    _0xd3abd1 = {
      x: _0x51a9d1.x * _0x1da71c,
      y: _0x51a9d1.y * _0x1da71c,
      z: _0x51a9d1.z * _0x1da71c
    };
    if (_0x268e0d != 0) {
      _0x50366e(_0x268e0d, _0xd3abd1.x, _0xd3abd1.y, _0xd3abd1.z);
    }
  }
  var _0x3a15b2 = 0;
  var _0x49b38b = 0;
  var _0x382cb6 = 0;
  var _0x43822e = 0;
  var _0xa6629b = 0;
  function _0x3877c5(_0xa502c8, _0x1ab9d5) {
    var _0x9b8079 = {
      x: _0xa502c8.x - _0x1ab9d5.x,
      y: _0xa502c8.y - _0x1ab9d5.y,
      z: _0xa502c8.z - _0x1ab9d5.z
    };
    var _0x2d44ce = _0x9b8079.x * _0x9b8079.x + _0x9b8079.y * _0x9b8079.y + _0x9b8079.z * _0x9b8079.z;
    var _0x1790ac = {
      x: _0xa502c8.x + _0x1ab9d5.x,
      y: _0xa502c8.y + _0x1ab9d5.y,
      z: _0xa502c8.z + _0x1ab9d5.z
    };
    var _0xb1cf7c = _0x1790ac.x * _0x1790ac.x + _0x1790ac.y * _0x1790ac.y + _0x1790ac.z * _0x1790ac.z;
    if (_0x2d44ce <= _0xb1cf7c) {
      return _0x9b8079;
    } else {
      return _0x1790ac;
    }
  }
  function _0x489582(_0x450b51) {
    var _0x1b3000 = {
      x: _0x450b51.accelerationIncludingGravity.x * _0x1da71c,
      y: _0x450b51.accelerationIncludingGravity.y * _0x1da71c,
      z: _0x450b51.accelerationIncludingGravity.z * _0x1da71c
    };
    if (_0x268e0d != 0) {
      _0x50366e(_0x268e0d, _0x1b3000.x, _0x1b3000.y, _0x1b3000.z);
    }
    var _0x29b0dc = {
      x: _0x450b51.acceleration.x * _0x1da71c,
      y: _0x450b51.acceleration.y * _0x1da71c,
      z: _0x450b51.acceleration.z * _0x1da71c
    };
    if (_0x382cb6 != 0) {
      _0x50366e(_0x382cb6, _0x29b0dc.x, _0x29b0dc.y, _0x29b0dc.z);
    }
    if (_0x43822e != 0) {
      var _0x546add = _0x3877c5(_0x1b3000, _0x29b0dc);
      _0x50366e(_0x43822e, _0x546add.x, _0x546add.y, _0x546add.z);
    }
    if (_0xa6629b != 0) {
      var _0x4947af = Math.PI / 180;
      _0x50366e(_0xa6629b, _0x450b51.rotationRate.alpha * _0x4947af, _0x450b51.rotationRate.beta * _0x4947af, _0x450b51.rotationRate.gamma * _0x4947af);
    }
  }
  var _0x334c73 = 0;
  function _0x2b8000(_0x444627) {
    if (_0x444627 & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x526425) {
          if (_0x526425 === "granted") {
            _0x334c73 &= ~1;
          } else {
            _0x2e60ec("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x4bd433) {
          _0x2e60ec(_0x4bd433);
          _0x334c73 |= 1;
        });
      }
    }
    if (_0x444627 & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x5a7a3f) {
          if (_0x5a7a3f === "granted") {
            _0x334c73 &= ~2;
          } else {
            _0x2e60ec("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x3f2504) {
          _0x2e60ec(_0x3f2504);
          _0x334c73 |= 2;
        });
      }
    }
  }
  function _0x55987c() {
    if (_0x268e0d == 0 && _0x382cb6 == 0 && _0x43822e == 0 && _0xa6629b == 0) {
      _0x2b8000(2);
      window.addEventListener("devicemotion", _0x489582);
    }
  }
  function _0x18e3c9() {
    var _0x353c10 = 9.80665;
    _0x1da71c = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x353c10 : -1 / _0x353c10;
  }
  function _0x2392ca(_0x1614ff, _0x19fd1a) {
    _0x18e3c9();
    if (typeof Accelerometer === "undefined") {
      _0x55987c();
      if (_0x1614ff != 0) {
        _0x268e0d = _0x1614ff;
      }
      return;
    }
    if (_0x1614ff != 0) {
      _0x268e0d = _0x1614ff;
    }
    function _0x2640f5(_0x3409e9) {
      _0x51a9d1 = new Accelerometer({
        frequency: _0x3409e9,
        referenceFrame: "device"
      });
      _0x51a9d1.addEventListener("reading", _0x581231);
      _0x51a9d1.addEventListener("error", function (_0x397ad5) {
        _0x2e60ec(_0x397ad5.error ? _0x397ad5.error : _0x397ad5);
      });
      _0x51a9d1.start();
      _0x49b38b = _0x3409e9;
    }
    if (_0x51a9d1) {
      if (_0x49b38b != _0x19fd1a) {
        _0x51a9d1.stop();
        _0x51a9d1.removeEventListener("reading", _0x581231);
        _0x2640f5(_0x19fd1a);
      }
    } else if (_0x3a15b2 != 0) {
      _0x3a15b2 = _0x19fd1a;
    } else {
      _0x3a15b2 = _0x19fd1a;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x49889f) {
        if (_0x49889f.state === "granted") {
          _0x2640f5(_0x3a15b2);
        } else {
          _0x2e60ec("No permission to use Accelerometer.");
        }
        _0x3a15b2 = 0;
      });
    }
  }
  function _0x548ced() {
    if (_0x268e0d == 0 && _0x382cb6 == 0 && _0x43822e == 0 && _0xa6629b == 0) {
      window.removeEventListener("devicemotion", _0x4ee1f0);
    }
  }
  function _0xe110cd() {
    if (_0x51a9d1) {
      if (typeof GravitySensor !== "undefined" || _0x43822e == 0) {
        _0x51a9d1.stop();
        _0x51a9d1.removeEventListener("reading", _0x581231);
        _0x51a9d1 = null;
      }
      _0x268e0d = 0;
      _0x49b38b = 0;
    } else if (_0x268e0d != 0) {
      _0x268e0d = 0;
      _0x548ced();
    }
  }
  function _0x4ac933(_0x4f325c, _0x41efb3) {
    var _0x5cdf1d = "";
    for (var _0xe9098e = 0; _0xe9098e < _0x41efb3; _0xe9098e++) {
      _0x5cdf1d += String.fromCharCode(_0x1c9190[_0x4f325c + _0xe9098e]);
    }
    _0xad46db.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x5cdf1d) + "),default";
  }
  function _0x510792(_0x3a780c) {
    _0xad46db.canvas.style.cursor = _0x3a780c ? "default" : "none";
  }
  function _0x1c8d20(_0x438e63) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x438e63);
    }
    return _0x438e63.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x1d0613() {
    var _0x408389 = _0xad46db.canvas ? _0xad46db.canvas.id : "unity-canvas";
    return "#" + _0x1c8d20(_0x408389);
  }
  function _0x458b11(_0x29e7a9, _0x234e21, _0x3fb67b, _0x55bfdc) {
    var _0x9bbbe2 = document.querySelector(_0x1d0613());
    var _0xb8c04c = _0x9bbbe2 && _0x9bbbe2.getBoundingClientRect();
    _0x2fe6c1[_0x3fb67b >> 2] = _0x29e7a9 - (_0xb8c04c ? _0xb8c04c.left : 0);
    _0x2fe6c1[_0x55bfdc >> 2] = _0x234e21 - (_0xb8c04c ? _0xb8c04c.top : 0);
  }
  function _0x36ad9d(_0x5c7c72) {
    var _0x466c2d = _0x18f5b9(_0x5c7c72) + 1;
    var _0x17ac35 = _0x304a50(_0x466c2d);
    _0x2117d9(_0x5c7c72, _0x17ac35, _0x466c2d);
    return _0x17ac35;
  }
  function _0x589c4b() {
    var _0x15d76a = _0x1d0613();
    if (_0x589c4b.selector != _0x15d76a) {
      _0x3d1553(_0x589c4b.ptr);
      _0x589c4b.ptr = _0x36ad9d(_0x15d76a);
      _0x589c4b.selector = _0x15d76a;
    }
    return _0x589c4b.ptr;
  }
  function _0x45232c(_0x19a084) {
    var _0xabf25d = _0x5d80c0(_0x19a084);
    try {
      eval(_0xabf25d);
    } catch (_0x311541) {
      console.error(_0x311541);
    }
  }
  function _0x562d9e(_0x2ccbfc) {
    var _0x3888d7 = _0x5d80c0(_0x2ccbfc);
    window.open(_0x3888d7, "_blank", "");
  }
  var _0x493ead = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0xb68b47) {
      if (_0xb68b47) {
        if (_0x493ead.numPendingSync == 0) {
          return;
        }
      } else if (_0x493ead.syncInProgress) {
        _0x493ead.numPendingSync++;
        return;
      }
      _0x493ead.syncInProgress = true;
      _0x379d8a.syncfs(false, function (_0x1eac8b) {
        _0x493ead.syncInProgress = false;
      });
      _0x493ead.numPendingSync = 0;
    }
  };
  function _0x590afa() {
    _0xad46db.setInterval(function () {
      _0x493ead.sync(true);
    }, _0x493ead.syncInternal);
  }
  function _0x31effb() {
    _0x493ead.sync(false);
  }
  var _0x13ab2a = null;
  function _0xbc9af8() {
    if (typeof GravitySensor !== "undefined") {
      return _0x13ab2a && _0x13ab2a.activated;
    } else {
      return _0x43822e != 0;
    }
  }
  function _0xa12e4b() {
    if (_0x43822e != 0) {
      _0x50366e(_0x43822e, _0x13ab2a.x * _0x1da71c, _0x13ab2a.y * _0x1da71c, _0x13ab2a.z * _0x1da71c);
    }
  }
  var _0x499073 = 0;
  var _0x565aba = null;
  function _0x4cb54d() {
    var _0x1aab2d = {
      x: _0x565aba.x * _0x1da71c,
      y: _0x565aba.y * _0x1da71c,
      z: _0x565aba.z * _0x1da71c
    };
    if (_0x382cb6 != 0) {
      _0x50366e(_0x382cb6, _0x1aab2d.x, _0x1aab2d.y, _0x1aab2d.z);
    }
    if (_0x43822e != 0 && typeof GravitySensor === "undefined") {
      var _0x3102a7 = _0x3877c5(_0xd3abd1, _0x1aab2d);
      _0x50366e(_0x43822e, _0x3102a7.x, _0x3102a7.y, _0x3102a7.z);
    }
  }
  var _0x38bc2e = 0;
  var _0x1b20aa = 0;
  function _0x4b74f0(_0x48dc85, _0x34ca97) {
    _0x18e3c9();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x55987c();
      if (_0x48dc85 != 0) {
        _0x382cb6 = _0x48dc85;
      }
      return;
    }
    if (_0x48dc85 != 0) {
      _0x382cb6 = _0x48dc85;
    }
    function _0x25f9b0(_0x569acf) {
      _0x565aba = new LinearAccelerationSensor({
        frequency: _0x569acf,
        referenceFrame: "device"
      });
      _0x565aba.addEventListener("reading", _0x4cb54d);
      _0x565aba.addEventListener("error", function (_0x4e58c4) {
        _0x2e60ec(_0x4e58c4.error ? _0x4e58c4.error : _0x4e58c4);
      });
      _0x565aba.start();
      _0x1b20aa = _0x569acf;
    }
    if (_0x565aba) {
      if (_0x1b20aa != _0x34ca97) {
        _0x565aba.stop();
        _0x565aba.removeEventListener("reading", _0x4cb54d);
        _0x25f9b0(_0x34ca97);
      }
    } else if (_0x38bc2e != 0) {
      _0x38bc2e = _0x34ca97;
    } else {
      _0x38bc2e = _0x34ca97;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x354499) {
        if (_0x354499.state === "granted") {
          _0x25f9b0(_0x38bc2e);
        } else {
          _0x2e60ec("No permission to use LinearAccelerationSensor.");
        }
        _0x38bc2e = 0;
      });
    }
  }
  function _0x40c4dc(_0x1da9d1, _0x2f5af5) {
    if (typeof GravitySensor === "undefined") {
      _0x2392ca(0, Math.max(_0x2f5af5, _0x49b38b));
      _0x4b74f0(0, Math.max(_0x2f5af5, _0x1b20aa));
      _0x43822e = _0x1da9d1;
      return;
    }
    _0x18e3c9();
    _0x43822e = _0x1da9d1;
    function _0x184579(_0x1c9d4b) {
      _0x13ab2a = new GravitySensor({
        frequency: _0x1c9d4b,
        referenceFrame: "device"
      });
      _0x13ab2a.addEventListener("reading", _0xa12e4b);
      _0x13ab2a.addEventListener("error", function (_0x57c145) {
        _0x2e60ec(_0x57c145.error ? _0x57c145.error : _0x57c145);
      });
      _0x13ab2a.start();
    }
    if (_0x13ab2a) {
      _0x13ab2a.stop();
      _0x13ab2a.removeEventListener("reading", _0xa12e4b);
      _0x184579(_0x2f5af5);
    } else if (_0x499073 != 0) {
      _0x499073 = _0x2f5af5;
    } else {
      _0x499073 = _0x2f5af5;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x328933) {
        if (_0x328933.state === "granted") {
          _0x184579(_0x499073);
        } else {
          _0x2e60ec("No permission to use GravitySensor.");
        }
        _0x499073 = 0;
      });
    }
  }
  function _0x24582c() {
    if (_0x565aba) {
      if (typeof GravitySensor !== "undefined" || _0x43822e == 0) {
        _0x565aba.stop();
        _0x565aba.removeEventListener("reading", _0x4cb54d);
        _0x565aba = null;
      }
      _0x382cb6 = 0;
      _0x1b20aa = 0;
    } else if (_0x382cb6 != 0) {
      _0x382cb6 = 0;
      _0x548ced();
    }
  }
  function _0x55bf6c() {
    _0x43822e = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x268e0d == 0) {
        _0xe110cd();
      }
      if (_0x382cb6 == 0) {
        _0x24582c();
      }
      return;
    }
    if (_0x13ab2a) {
      _0x13ab2a.stop();
      _0x13ab2a.removeEventListener("reading", _0xa12e4b);
      _0x13ab2a = null;
    }
  }
  function _0x1ad6e9(_0x4c1394) {
    try {
      (function () {
        _0x111b3b.call(null, _0x4c1394);
      })();
    } catch (_0xe47a7d) {
      console.warn(_0xe47a7d);
    }
  }
  var _0x5a3851 = null;
  function _0x57aeec() {
    return _0x5a3851 && _0x5a3851.activated || _0xa6629b != 0;
  }
  function _0x3157ca() {
    if (_0xa6629b != 0) {
      _0x50366e(_0xa6629b, _0x5a3851.x, _0x5a3851.y, _0x5a3851.z);
    }
  }
  var _0x5cd4f2 = 0;
  function _0x311dad(_0x184ea0, _0x385c79) {
    if (typeof Gyroscope === "undefined") {
      _0x55987c();
      _0xa6629b = _0x184ea0;
      return;
    }
    _0xa6629b = _0x184ea0;
    function _0x526a91(_0x13c619) {
      _0x5a3851 = new Gyroscope({
        frequency: _0x13c619,
        referenceFrame: "device"
      });
      _0x5a3851.addEventListener("reading", _0x3157ca);
      _0x5a3851.addEventListener("error", function (_0x2c1231) {
        _0x2e60ec(_0x2c1231.error ? _0x2c1231.error : _0x2c1231);
      });
      _0x5a3851.start();
    }
    if (_0x5a3851) {
      _0x5a3851.stop();
      _0x5a3851.removeEventListener("reading", _0x3157ca);
      _0x526a91(_0x385c79);
    } else if (_0x5cd4f2 != 0) {
      _0x5cd4f2 = _0x385c79;
    } else {
      _0x5cd4f2 = _0x385c79;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x343172) {
        if (_0x343172.state === "granted") {
          _0x526a91(_0x5cd4f2);
        } else {
          _0x2e60ec("No permission to use Gyroscope.");
        }
        _0x5cd4f2 = 0;
      });
    }
  }
  function _0x10e811() {
    if (_0x5a3851) {
      _0x5a3851.stop();
      _0x5a3851.removeEventListener("reading", _0x3157ca);
      _0x5a3851 = null;
      _0xa6629b = 0;
    } else if (_0xa6629b != 0) {
      _0xa6629b = 0;
      _0x548ced();
    }
  }
  function _0x54e0d1() {
    const _0x5044df = function (_0x4f6118) {
      if (_0x4f6118.target.localName !== "canvas") {
        _0xe73633();
      }
    };
    document.addEventListener("contextmenu", _0x5044df);
    _0xad46db.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x5044df);
    });
  }
  function _0x273fc2() {
    return _0x565aba && _0x565aba.activated || _0x382cb6 != 0;
  }
  function _0x260bf0(_0x276afa, _0x43c005) {
    var _0x245e1d = _0x5d80c0(_0x276afa);
    if (typeof dump == "function") {
      dump(_0x245e1d);
    }
    switch (_0x43c005) {
      case 0:
      case 1:
      case 4:
        console.error(_0x245e1d);
        return;
      case 2:
        console.warn(_0x245e1d);
        return;
      case 3:
      case 5:
        console.log(_0x245e1d);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(_0x245e1d);
    }
  }
  function _0x54e434(_0x3ca898, _0x5cdfde) {
    var _0x4bb8f9 = _0xd75f1d();
    if (_0x3ca898) {
      _0x2117d9(_0x4bb8f9, _0x3ca898, _0x5cdfde);
    }
    return _0x18f5b9(_0x4bb8f9);
  }
  var _0x7003aa = null;
  var _0x59c499 = 0;
  function _0x28fece() {
    return _0x7003aa && _0x7003aa.activated || _0x59c499 != 0;
  }
  function _0x1545fb() {
    if (_0x59c499 != 0) {
      _0x33fa3d(_0x59c499, _0x7003aa.quaternion[0], _0x7003aa.quaternion[1], _0x7003aa.quaternion[2], _0x7003aa.quaternion[3]);
    }
  }
  var _0xb19fe8 = 0;
  function _0x4ee1f0(_0xba710e) {
    if (_0x59c499) {
      var _0x501a88 = Math.PI / 180;
      var _0x2a6d97 = _0xba710e.beta * _0x501a88;
      var _0x33477c = _0xba710e.gamma * _0x501a88;
      var _0x3c7e98 = _0xba710e.alpha * _0x501a88;
      var _0x1527fb = Math.cos(_0x2a6d97 / 2);
      var _0x37eb85 = Math.sin(_0x2a6d97 / 2);
      var _0xf929ac = Math.cos(_0x33477c / 2);
      var _0x13eef5 = Math.sin(_0x33477c / 2);
      var _0x4219b2 = Math.cos(_0x3c7e98 / 2);
      var _0x23a48f = Math.sin(_0x3c7e98 / 2);
      var _0xd1ebdf = _0x37eb85 * _0xf929ac * _0x4219b2 - _0x1527fb * _0x13eef5 * _0x23a48f;
      var _0x1ea641 = _0x1527fb * _0x13eef5 * _0x4219b2 + _0x37eb85 * _0xf929ac * _0x23a48f;
      var _0x197f7a = _0x1527fb * _0xf929ac * _0x23a48f + _0x37eb85 * _0x13eef5 * _0x4219b2;
      var _0x1d5f96 = _0x1527fb * _0xf929ac * _0x4219b2 - _0x37eb85 * _0x13eef5 * _0x23a48f;
      _0x33fa3d(_0x59c499, _0xd1ebdf, _0x1ea641, _0x197f7a, _0x1d5f96);
    }
  }
  function _0x4a9836(_0x350e2e, _0x119754) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x59c499 == 0) {
        _0x59c499 = _0x350e2e;
        _0x2b8000(1);
        window.addEventListener("deviceorientation", _0x4ee1f0);
      }
      return;
    }
    _0x59c499 = _0x350e2e;
    function _0x439f3f(_0x2d0c95) {
      _0x7003aa = new RelativeOrientationSensor({
        frequency: _0x2d0c95,
        referenceFrame: "device"
      });
      _0x7003aa.addEventListener("reading", _0x1545fb);
      _0x7003aa.addEventListener("error", function (_0x29d63c) {
        _0x2e60ec(_0x29d63c.error ? _0x29d63c.error : _0x29d63c);
      });
      _0x7003aa.start();
    }
    if (_0x7003aa) {
      _0x7003aa.stop();
      _0x7003aa.removeEventListener("reading", _0x1545fb);
      _0x439f3f(_0x119754);
    } else if (_0xb19fe8 != 0) {
      _0xb19fe8 = _0x119754;
    } else {
      _0xb19fe8 = _0x119754;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x380a88) {
        if (_0x380a88.every(function (_0x1368ee) {
          return _0x1368ee.state === "granted";
        })) {
          _0x439f3f(_0xb19fe8);
        } else {
          _0x2e60ec("No permissions to use RelativeOrientationSensor.");
        }
        _0xb19fe8 = 0;
      });
    }
  }
  function _0x261001() {
    if (_0x7003aa) {
      _0x7003aa.stop();
      _0x7003aa.removeEventListener("reading", _0x1545fb);
      _0x7003aa = null;
    } else if (_0x59c499 != 0) {
      window.removeEventListener("deviceorientation", _0x4ee1f0);
    }
    _0x59c499 = 0;
  }
  function _0x5b853b() {
    if (_0x334c73 == 0) {
      return;
    }
    _0x2b8000(_0x334c73);
  }
  function _0x35e92a() {
    _0xad46db.QuitCleanup();
  }
  var _0x313ef1 = 0;
  function _0x5d1c6c() {
    if (_0x313ef1) {
      _0x1d6d2d(_0x313ef1, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x1e249c() {
    _0x313ef1 = 0;
    window.removeEventListener("resize", _0x5d1c6c);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x5d1c6c);
    }
  }
  function _0x53e9b6(_0x43cbc1) {
    if (!_0x313ef1) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x5d1c6c);
      }
      window.addEventListener("resize", _0x5d1c6c);
      _0x313ef1 = _0x43cbc1;
      setTimeout(_0x5d1c6c, 0);
    }
  }
  var _0x26d2f6 = -1;
  var _0x47de35 = -1;
  var _0x2aaa2d = -1;
  function _0x3b6edf(_0x94d8a0) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x25571c() {
      _0x47de35 = _0x26d2f6;
      var _0x1248b6 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x2c7b5b = _0x1248b6[_0x47de35];
      screen.orientation.lock(_0x2c7b5b).then(function () {
        if (_0x26d2f6 != _0x47de35) {
          _0x2aaa2d = setTimeout(_0x25571c, 0);
        } else {
          _0x2aaa2d = -1;
        }
      }).catch(function (_0x52d4de) {
        _0x2e60ec(_0x52d4de);
        _0x2aaa2d = -1;
      });
    }
    _0x26d2f6 = _0x94d8a0;
    if (_0x2aaa2d == -1 && _0x94d8a0 != _0x47de35) {
      _0x2aaa2d = setTimeout(_0x25571c, 0);
    }
  }
  var _0x59339f = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x184523(_0x444eb8) {
    _0x444eb8.estimatePlaybackPosition = function () {
      var _0x1e6cda = (_0x59339f.audioContext.currentTime - _0x444eb8.playbackStartTime) * _0x444eb8.playbackRate.value;
      if (_0x444eb8.loop && _0x1e6cda >= _0x444eb8.loopStart) {
        _0x1e6cda = (_0x1e6cda - _0x444eb8.loopStart) % (_0x444eb8.loopEnd - _0x444eb8.loopStart) + _0x444eb8.loopStart;
      }
      return _0x1e6cda;
    };
    _0x444eb8.setPitch = function (_0x2e1c54) {
      var _0x2f8935 = _0x444eb8.estimatePlaybackPosition();
      if (_0x2f8935 >= 0) {
        _0x444eb8.playbackStartTime = _0x59339f.audioContext.currentTime - _0x2f8935 / _0x2e1c54;
      }
      if (_0x444eb8.playbackRate.value !== _0x2e1c54) {
        _0x444eb8.playbackRate.value = _0x2e1c54;
      }
    };
  }
  function _0x541fb9(_0x2d8c47, _0x4afbd8) {
    var _0xd8529e = {
      buffer: _0x2d8c47,
      error: _0x4afbd8
    };
    _0xd8529e.release = function () {};
    _0xd8529e.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x50ab8a = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x50ab8a;
    };
    _0xd8529e.getData = function (_0x3b10ad, _0x5cc2e3) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x144e87 = _0x3b10ad >> 2;
      var _0x5db04b = _0x72ca9a.subarray(_0x144e87, _0x144e87 + (_0x5cc2e3 >> 2));
      var _0x482755 = Math.floor((_0x5cc2e3 >> 2) / this.buffer.numberOfChannels);
      var _0x25b677 = Math.min(this.buffer.length, _0x482755);
      for (var _0x5b259a = 0; _0x5b259a < this.buffer.numberOfChannels; _0x5b259a++) {
        var _0x2501c2 = this.buffer.getChannelData(_0x5b259a).subarray(0, _0x25b677);
        _0x5db04b.set(_0x2501c2, _0x5b259a * _0x25b677);
      }
      return _0x25b677 * this.buffer.numberOfChannels * 4;
    };
    _0xd8529e.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0xd8529e.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0xd8529e.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x4f7c63 = _0x59339f.audioContext.createBufferSource();
      _0x4f7c63.buffer = this.buffer;
      _0x184523(_0x4f7c63);
      return _0x4f7c63;
    };
    return _0xd8529e;
  }
  function _0x27f97f(_0x2cf1ed, _0x52f26b) {
    var _0x584170 = {
      callback: _0x2cf1ed,
      userData: _0x52f26b,
      source: null,
      gain: _0x59339f.audioContext.createGain(),
      panner: _0x59339f.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x584170.panner.rolloffFactor = 0;
    _0x584170.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x584170.playSoundClip = function (_0x489785, _0x4b89ea, _0xa7f004) {
      try {
        var _0x17be56 = this;
        this.source = _0x489785.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x17be56.source.isStopped = true;
          _0x17be56.disconnectSource();
          if (_0x17be56.callback) {
            _0x48bfa2("vi", _0x17be56.callback, [_0x17be56.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x4b89ea, _0xa7f004);
        this.source.playbackStartTime = _0x4b89ea - _0xa7f004 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x36cf58) {
        console.error("Channel.playSoundClip error. Exception: " + _0x36cf58);
      }
    };
    _0x584170.stop = function (_0x4f589b) {
      if (!this.source) {
        return;
      }
      try {
        _0x584170.source.stop(_0x59339f.audioContext.currentTime + _0x4f589b);
      } catch (_0x2b1006) {}
      if (_0x4f589b == 0) {
        this.disconnectSource();
      }
    };
    _0x584170.isPaused = function () {
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
    _0x584170.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x480cc8 = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x2d8f6d) {
          this.playbackRate = _0x2d8f6d;
        },
        stop: function (_0x3c31f8) {
          this.scheduledStopTime = _0x3c31f8;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x480cc8;
    };
    _0x584170.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x1938ab = this.source;
      var _0x202fc9 = _0x541fb9(_0x1938ab.buffer, false);
      this.playSoundClip(_0x202fc9, _0x59339f.audioContext.currentTime, Math.max(0, _0x1938ab.playbackPausedAtPosition));
      this.source.loop = _0x1938ab.loop;
      this.source.loopStart = _0x1938ab.loopStart;
      this.source.loopEnd = _0x1938ab.loopEnd;
      this.source.setPitch(_0x1938ab.playbackRate);
      if (typeof _0x1938ab.scheduledStopTime !== "undefined") {
        var _0x3981cf = Math.max(_0x1938ab.scheduledStopTime - _0x59339f.audioContext.currentTime, 0);
        this.stop(_0x3981cf);
      }
    };
    _0x584170.setLoop = function (_0x340bf2) {
      this.loop = _0x340bf2;
      if (!this.source || this.source.loop == _0x340bf2) {
        return;
      }
      this.source.loop = _0x340bf2;
    };
    _0x584170.setLoopPoints = function (_0x295231, _0x509f52) {
      this.loopStart = _0x295231;
      this.loopEnd = _0x509f52;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x295231) {
        this.source.loopStart = _0x295231;
      }
      if (this.source.loopEnd !== _0x509f52) {
        this.source.loopEnd = _0x509f52;
      }
    };
    _0x584170.set3D = function (_0x2d4a6f) {
      if (this.threeD == _0x2d4a6f) {
        return;
      }
      this.threeD = _0x2d4a6f;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x584170.setPitch = function (_0x4991c2) {
      this.pitch = _0x4991c2;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x4991c2);
    };
    _0x584170.setVolume = function (_0x4eb0ae) {
      if (this.gain.gain.value == _0x4eb0ae) {
        return;
      }
      this.gain.gain.value = _0x4eb0ae;
    };
    _0x584170.setPosition = function (_0x2d8206, _0x331f8d, _0x1282c8) {
      var _0x4d60c0 = this.panner;
      if (_0x4d60c0.positionX) {
        if (_0x4d60c0.positionX.value !== _0x2d8206) {
          _0x4d60c0.positionX.value = _0x2d8206;
        }
        if (_0x4d60c0.positionY.value !== _0x331f8d) {
          _0x4d60c0.positionY.value = _0x331f8d;
        }
        if (_0x4d60c0.positionZ.value !== _0x1282c8) {
          _0x4d60c0.positionZ.value = _0x1282c8;
        }
      } else if (_0x4d60c0._x !== _0x2d8206 || _0x4d60c0._y !== _0x331f8d || _0x4d60c0._z !== _0x1282c8) {
        _0x4d60c0.setPosition(_0x2d8206, _0x331f8d, _0x1282c8);
        _0x4d60c0._x = _0x2d8206;
        _0x4d60c0._y = _0x331f8d;
        _0x4d60c0._z = _0x1282c8;
      }
    };
    _0x584170.disconnectSource = function () {
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
    _0x584170.setupPanning = function () {
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
      this.gain.connect(_0x59339f.audioContext.destination);
    };
    _0x584170.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x584170;
  }
  function _0x229f3c(_0x5b9bdb, _0x53d629) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    _0x59339f.audioInstances[++_0x59339f.audioInstanceIdCounter] = _0x27f97f(_0x5b9bdb, _0x53d629);
    return _0x59339f.audioInstanceIdCounter;
  }
  function _0x5b1a97(_0x240872) {
    if (_0x59339f.audioWebEnabled == 0) {
      return 0;
    }
    var _0x2f2ecb = _0x59339f.audioInstances[_0x240872];
    if (!_0x2f2ecb) {
      return 0;
    }
    return _0x2f2ecb.getLength();
  }
  function _0x5b5398(_0x398f4d) {
    if (_0x59339f.audioWebEnabled == 0) {
      return 2;
    }
    var _0x1e61f8 = _0x59339f.audioInstances[_0x398f4d];
    if (_0x1e61f8.error) {
      return 2;
    }
    if (_0x1e61f8.buffer || _0x1e61f8.url) {
      return 0;
    }
    return 1;
  }
  function _0x4d3545(_0x9cdf66, _0x59355e) {
    if (_0x59339f.audioWebEnabled == 0) {
      _0x2fe6c1[_0x59355e >> 2] = 0;
      _0x2fe6c1[(_0x59355e >> 2) + 1] = 0;
      return false;
    }
    var _0x40cc06 = _0x59339f.audioInstances[_0x9cdf66];
    if (!_0x40cc06) {
      _0x2fe6c1[_0x59355e >> 2] = 0;
      _0x2fe6c1[(_0x59355e >> 2) + 1] = 0;
      return false;
    }
    _0x2fe6c1[_0x59355e >> 2] = _0x40cc06.getNumberOfChannels();
    _0x2fe6c1[(_0x59355e >> 2) + 1] = _0x40cc06.getFrequency();
    return true;
  }
  function _0x1133f7(_0x276993) {
    var _0x40bab9 = _0x59339f.pendingAudioSources[_0x276993];
    _0x40bab9.sourceNode._startPlayback(_0x40bab9.offset);
    delete _0x59339f.pendingAudioSources[_0x276993];
  }
  function _0x1b2a13() {
    Object.keys(_0x59339f.pendingAudioSources).forEach(function (_0x3055d4) {
      _0x1133f7(_0x3055d4);
    });
  }
  function _0x1e8a10() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x59339f.audioContext = new AudioContext();
      var _0x5df33 = function () {
        if (_0x59339f.audioContext.state === "suspended") {
          _0x59339f.audioContext.resume().catch(function (_0x2b6ba6) {
            console.warn("Could not resume audio context. Exception: " + _0x2b6ba6);
          });
        } else {
          _0xad46db.clearInterval(_0x23a8b2);
        }
      };
      var _0x23a8b2 = _0xad46db.setInterval(_0x5df33, 400);
      _0x59339f.audioWebEnabled = 1;
      var _0x331d98 = function () {
        try {
          if (_0x59339f.audioContext.state !== "running" && _0x59339f.audioContext.state !== "closed") {
            _0x59339f.audioContext.resume().catch(function (_0x3d8ba3) {
              console.warn("Could not resume audio context. Exception: " + _0x3d8ba3);
            });
          }
          _0x1b2a13();
          var _0x464523 = 20;
          while (_0x59339f.audioCache.length < _0x464523) {
            var _0x396616 = new Audio();
            _0x396616.autoplay = false;
            _0x59339f.audioCache.push(_0x396616);
          }
        } catch (_0x47c91b) {}
      };
      window.addEventListener("mousedown", _0x331d98);
      window.addEventListener("touchstart", _0x331d98);
      _0xad46db.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x331d98);
        window.removeEventListener("touchstart", _0x331d98);
      });
    } catch (_0x1bef2c) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x4fce8b(_0x477ab7) {
    var _0x5f0ea9 = _0x541fb9(null, false);
    _0x59339f.audioContext.decodeAudioData(_0x477ab7, function (_0xef76f7) {
      _0x5f0ea9.buffer = _0xef76f7;
    }, function (_0x21993d) {
      _0x5f0ea9.error = true;
      console.log("Decode error: " + _0x21993d);
    });
    return _0x5f0ea9;
  }
  function _0x57866b(_0x52b537, _0x5747c9) {
    _0x59339f.pendingAudioSources[_0x52b537.mediaElement.src] = {
      sourceNode: _0x52b537,
      offset: _0x5747c9
    };
  }
  function _0x2d7710(_0x4cd35b) {
    switch (_0x4cd35b) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x4ad7e3(_0x21dbed, _0x37d123) {
    var _0x3780fb = _0x2d7710(_0x37d123);
    var _0x421de5 = new Blob([_0x21dbed], {
      type: _0x3780fb
    });
    var _0x18aa6d = {
      url: URL.createObjectURL(_0x421de5),
      error: false,
      mediaElement: new Audio()
    };
    _0x18aa6d.mediaElement.preload = "metadata";
    _0x18aa6d.mediaElement.src = _0x18aa6d.url;
    _0x18aa6d.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x18aa6d.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x18aa6d.getData = function (_0x5d2499, _0x25c2e8) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x18aa6d.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x18aa6d.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x18aa6d.createSourceNode = function () {
      var _0x39a672 = this;
      var _0xc527f0 = _0x59339f.audioCache.length ? _0x59339f.audioCache.pop() : new Audio();
      _0xc527f0.preload = "metadata";
      _0xc527f0.src = this.url;
      var _0x4cac5a = _0x59339f.audioContext.createMediaElementSource(_0xc527f0);
      Object.defineProperty(_0x4cac5a, "loop", {
        get: function () {
          return _0x4cac5a.mediaElement.loop;
        },
        set: function (_0x13f3dd) {
          if (_0x4cac5a.mediaElement.loop !== _0x13f3dd) {
            _0x4cac5a.mediaElement.loop = _0x13f3dd;
          }
        }
      });
      _0x4cac5a.playbackRate = {};
      Object.defineProperty(_0x4cac5a.playbackRate, "value", {
        get: function () {
          return _0x4cac5a.mediaElement.playbackRate;
        },
        set: function (_0x2f5fa8) {
          if (_0x4cac5a.mediaElement.playbackRate !== _0x2f5fa8) {
            _0x4cac5a.mediaElement.playbackRate = _0x2f5fa8;
          }
        }
      });
      Object.defineProperty(_0x4cac5a, "currentTime", {
        get: function () {
          return _0x4cac5a.mediaElement.currentTime;
        },
        set: function (_0x3b5eb8) {
          if (_0x4cac5a.mediaElement.currentTime !== _0x3b5eb8) {
            _0x4cac5a.mediaElement.currentTime = _0x3b5eb8;
          }
        }
      });
      Object.defineProperty(_0x4cac5a, "mute", {
        get: function () {
          return _0x4cac5a.mediaElement.mute;
        },
        set: function (_0x159473) {
          if (_0x4cac5a.mediaElement.mute !== _0x159473) {
            _0x4cac5a.mediaElement.mute = _0x159473;
          }
        }
      });
      Object.defineProperty(_0x4cac5a, "onended", {
        get: function () {
          return _0x4cac5a.mediaElement.onended;
        },
        set: function (_0x4bcad4) {
          _0x4cac5a.mediaElement.onended = _0x4bcad4;
        }
      });
      _0x4cac5a.playPromise = null;
      _0x4cac5a.playTimeout = null;
      _0x4cac5a.pauseRequested = false;
      _0x4cac5a.isStopped = false;
      _0x4cac5a._pauseMediaElement = function () {
        if (_0x4cac5a.playPromise || _0x4cac5a.playTimeout) {
          _0x4cac5a.pauseRequested = true;
        } else {
          _0x4cac5a.mediaElement.pause();
        }
      };
      _0x4cac5a._startPlayback = function (_0x146e07) {
        if (_0x4cac5a.playPromise || _0x4cac5a.playTimeout) {
          _0x4cac5a.mediaElement.currentTime = _0x146e07;
          _0x4cac5a.pauseRequested = false;
          return;
        }
        _0x4cac5a.mediaElement.currentTime = _0x146e07;
        _0x4cac5a.playPromise = _0x4cac5a.mediaElement.play();
        if (_0x4cac5a.playPromise) {
          _0x4cac5a.playPromise.then(function () {
            if (_0x4cac5a.pauseRequested) {
              _0x4cac5a.mediaElement.pause();
              _0x4cac5a.pauseRequested = false;
            }
            _0x4cac5a.playPromise = null;
          }).catch(function (_0xf38ae2) {
            _0x4cac5a.playPromise = null;
            if (_0xf38ae2.name !== "NotAllowedError") {
              throw _0xf38ae2;
            }
            _0x57866b(_0x4cac5a, _0x146e07);
          });
        }
      };
      _0x4cac5a.start = function (_0x11e9db, _0x5592b9) {
        if (typeof _0x11e9db === "undefined") {
          _0x11e9db = _0x59339f.audioContext.currentTime;
        }
        if (typeof _0x5592b9 === "undefined") {
          _0x5592b9 = 0;
        }
        var _0x1d0068 = 4;
        var _0x4e440d = (_0x11e9db - _0x59339f.audioContext.currentTime) * 1000;
        if (_0x4e440d > _0x1d0068) {
          _0x4cac5a.playTimeout = setTimeout(function () {
            _0x4cac5a.playTimeout = null;
            _0x4cac5a._startPlayback(_0x5592b9);
          }, _0x4e440d);
        } else {
          _0x4cac5a._startPlayback(_0x5592b9);
        }
      };
      _0x4cac5a.stop = function (_0xb1b858) {
        if (typeof _0xb1b858 === "undefined") {
          _0xb1b858 = _0x59339f.audioContext.currentTime;
        }
        var _0x383ec9 = 4;
        var _0x39832c = (_0xb1b858 - _0x59339f.audioContext.currentTime) * 1000;
        if (_0x39832c > _0x383ec9) {
          setTimeout(function () {
            _0x4cac5a._pauseMediaElement();
            _0x4cac5a.isStopped = true;
          }, _0x39832c);
        } else {
          _0x4cac5a._pauseMediaElement();
          _0x4cac5a.isStopped = true;
        }
      };
      _0x184523(_0x4cac5a);
      return _0x4cac5a;
    };
    return _0x18aa6d;
  }
  function _0x49dadd(_0x1a4638, _0x2b928c, _0x2d43bf, _0x592462) {
    if (_0x59339f.audioWebEnabled == 0) {
      return 0;
    }
    var _0xf17944 = _0x1c9190.buffer.slice(_0x1a4638, _0x1a4638 + _0x2b928c);
    if (_0x2b928c < 131072) {
      _0x2d43bf = 1;
    }
    var _0x455f35;
    if (_0x2d43bf) {
      _0x455f35 = _0x4fce8b(_0xf17944);
    } else {
      _0x455f35 = _0x4ad7e3(_0xf17944, _0x592462);
    }
    _0x59339f.audioInstances[++_0x59339f.audioInstanceIdCounter] = _0x455f35;
    return _0x59339f.audioInstanceIdCounter;
  }
  function _0x3451b4(_0x368bdf, _0x496e4d, _0x38ab20, _0x375636) {
    var _0x4adb46 = _0x59339f.audioContext.createBuffer(_0x368bdf, _0x496e4d, _0x38ab20);
    for (var _0xbaed9d = 0; _0xbaed9d < _0x368bdf; _0xbaed9d++) {
      var _0x53e999 = (_0x375636 >> 2) + _0x496e4d * _0xbaed9d;
      var _0x27a332 = _0x4adb46.copyToChannel || function (_0x13f333, _0xaa0881, _0x502c2b) {
        var _0x10d25a = _0x13f333.subarray(0, Math.min(_0x13f333.length, this.length - (_0x502c2b | 0)));
        this.getChannelData(_0xaa0881 | 0).set(_0x10d25a, _0x502c2b | 0);
      };
      _0x27a332.apply(_0x4adb46, [_0x72ca9a.subarray(_0x53e999, _0x53e999 + _0x496e4d), _0xbaed9d, 0]);
    }
    return _0x541fb9(_0x4adb46, false);
  }
  function _0x422a2a(_0x37dc9a, _0x1e4c73, _0x31a5f5, _0x4ccdc2) {
    if (_0x59339f.audioWebEnabled == 0) {
      return 0;
    }
    var _0x5dbe82 = _0x3451b4(_0x37dc9a, _0x1e4c73, _0x31a5f5, _0x4ccdc2);
    _0x59339f.audioInstances[++_0x59339f.audioInstanceIdCounter] = _0x5dbe82;
    return _0x59339f.audioInstanceIdCounter;
  }
  function _0x36f9ae(_0x39cd8a, _0x7e96f7, _0x59da99, _0x1d20f3) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    _0x2696f4(_0x7e96f7, 0);
    var _0x43df8c = _0x59339f.audioInstances[_0x39cd8a];
    var _0x52adac = _0x59339f.audioInstances[_0x7e96f7];
    if (!_0x43df8c) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x52adac.playSoundClip(_0x43df8c, _0x59339f.audioContext.currentTime + _0x1d20f3, _0x59da99);
    } catch (_0x107a46) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x46c052(_0x358f98) {
    var _0x44faa9 = _0x59339f.audioInstances[_0x358f98];
    if (_0x44faa9) {
      _0x44faa9.release();
    }
    delete _0x59339f.audioInstances[_0x358f98];
  }
  function _0x28f8c6() {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    if (_0x59339f.audioContext.state === "suspended") {
      _0x59339f.audioContext.resume().catch(function (_0x3511ee) {
        console.warn("Could not resume audio context. Exception: " + _0x3511ee);
      });
    }
  }
  function _0x1c6db9(_0x2d80c1, _0x4eba4b) {
    var _0x293a2e = _0x59339f.audioInstances[_0x2d80c1];
    _0x293a2e.set3D(_0x4eba4b);
  }
  function _0x9c764(_0x3e032b, _0x1844c9, _0x4596e4, _0x1385f7, _0x129373, _0x4dd13b) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    _0x3e032b = -_0x3e032b;
    _0x1844c9 = -_0x1844c9;
    _0x4596e4 = -_0x4596e4;
    var _0x5ca8b3 = _0x59339f.audioContext.listener;
    if (_0x5ca8b3.forwardX) {
      if (_0x5ca8b3.forwardX.value !== _0x3e032b) {
        _0x5ca8b3.forwardX.value = _0x3e032b;
      }
      if (_0x5ca8b3.forwardY.value !== _0x1844c9) {
        _0x5ca8b3.forwardY.value = _0x1844c9;
      }
      if (_0x5ca8b3.forwardZ.value !== _0x4596e4) {
        _0x5ca8b3.forwardZ.value = _0x4596e4;
      }
      if (_0x5ca8b3.upX.value !== _0x1385f7) {
        _0x5ca8b3.upX.value = _0x1385f7;
      }
      if (_0x5ca8b3.upY.value !== _0x129373) {
        _0x5ca8b3.upY.value = _0x129373;
      }
      if (_0x5ca8b3.upZ.value !== _0x4dd13b) {
        _0x5ca8b3.upZ.value = _0x4dd13b;
      }
    } else if (_0x5ca8b3._forwardX !== _0x3e032b || _0x5ca8b3._forwardY !== _0x1844c9 || _0x5ca8b3._forwardZ !== _0x4596e4 || _0x5ca8b3._upX !== _0x1385f7 || _0x5ca8b3._upY !== _0x129373 || _0x5ca8b3._upZ !== _0x4dd13b) {
      _0x5ca8b3.setOrientation(_0x3e032b, _0x1844c9, _0x4596e4, _0x1385f7, _0x129373, _0x4dd13b);
      _0x5ca8b3._forwardX = _0x3e032b;
      _0x5ca8b3._forwardY = _0x1844c9;
      _0x5ca8b3._forwardZ = _0x4596e4;
      _0x5ca8b3._upX = _0x1385f7;
      _0x5ca8b3._upY = _0x129373;
      _0x5ca8b3._upZ = _0x4dd13b;
    }
  }
  function _0x25e53a(_0x269578, _0x2fd145, _0x370894) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    var _0x37525d = _0x59339f.audioContext.listener;
    if (_0x37525d.positionX) {
      if (_0x37525d.positionX.value !== _0x269578) {
        _0x37525d.positionX.value = _0x269578;
      }
      if (_0x37525d.positionY.value !== _0x2fd145) {
        _0x37525d.positionY.value = _0x2fd145;
      }
      if (_0x37525d.positionZ.value !== _0x370894) {
        _0x37525d.positionZ.value = _0x370894;
      }
    } else if (_0x37525d._positionX !== _0x269578 || _0x37525d._positionY !== _0x2fd145 || _0x37525d._positionZ !== _0x370894) {
      _0x37525d.setPosition(_0x269578, _0x2fd145, _0x370894);
      _0x37525d._positionX = _0x269578;
      _0x37525d._positionY = _0x2fd145;
      _0x37525d._positionZ = _0x370894;
    }
  }
  function _0xdaf6f0(_0x271677, _0xe13123) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    var _0x50f914 = _0x59339f.audioInstances[_0x271677];
    _0x50f914.setLoop(_0xe13123);
  }
  function _0xf4ed6f(_0x1aa376, _0x25221a, _0x26df20) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    var _0x5a8936 = _0x59339f.audioInstances[_0x1aa376];
    _0x5a8936.setLoopPoints(_0x25221a, _0x26df20);
  }
  function _0x263ba0(_0x14a541, _0x50fa95) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    var _0x20ba10 = _0x59339f.audioInstances[_0x14a541];
    if (_0x50fa95 != _0x20ba10.isPaused()) {
      if (_0x50fa95) {
        _0x20ba10.pause();
      } else {
        _0x20ba10.resume();
      }
    }
  }
  function _0x4bf349(_0x469e20, _0x5095c7) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x2b1faf = _0x59339f.audioInstances[_0x469e20];
      _0x2b1faf.setPitch(_0x5095c7);
    } catch (_0x553ff6) {
      console.error("JS_Sound_SetPitch(channel=" + _0x469e20 + ", pitch=" + _0x5095c7 + ") threw an exception: " + _0x553ff6);
    }
  }
  function _0x25d652(_0x1108e2, _0x5641fc, _0x58307e, _0x2e8571) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    var _0x3ddb21 = _0x59339f.audioInstances[_0x1108e2];
    _0x3ddb21.setPosition(_0x5641fc, _0x58307e, _0x2e8571);
  }
  function _0x4993b0(_0x5a2990, _0x10e046) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x5e8f5e = _0x59339f.audioInstances[_0x5a2990];
      _0x5e8f5e.setVolume(_0x10e046);
    } catch (_0x220261) {
      console.error("JS_Sound_SetVolume(channel=" + _0x5a2990 + ", volume=" + _0x10e046 + ") threw an exception: " + _0x220261);
    }
  }
  function _0x2696f4(_0xcbd6ed, _0x2ea5ab) {
    if (_0x59339f.audioWebEnabled == 0) {
      return;
    }
    var _0x1b4f53 = _0x59339f.audioInstances[_0xcbd6ed];
    _0x1b4f53.stop(_0x2ea5ab);
  }
  function _0x3ee588(_0x38fcfa, _0x21d3ed, _0x31f850) {
    var _0x3de710 = _0x5d80c0(_0x38fcfa);
    var _0xf578c5 = _0x3de710 == "#canvas" ? _0xad46db.canvas : document.querySelector(_0x3de710);
    var _0x1b6ccc = 0;
    var _0x3401d8 = 0;
    if (_0xf578c5) {
      var _0x4e8d41 = _0xf578c5.getBoundingClientRect();
      _0x1b6ccc = _0x4e8d41.width;
      _0x3401d8 = _0x4e8d41.height;
    }
    _0x1a8d8e[_0x21d3ed >> 3] = _0x1b6ccc;
    _0x1a8d8e[_0x31f850 >> 3] = _0x3401d8;
  }
  function _0x1ac651(_0x5985a0, _0x2e7617) {
    if (_0x5985a0) {
      _0x2117d9("https://games.1games.io", _0x5985a0, _0x2e7617);
    }
    return _0x18f5b9("https://games.1games.io");
  }
  function _0x236d1b(_0x175215, _0x5c9069) {
    var _0xb06cd6 = _0xad46db.SystemInfo.gpu;
    if (_0x175215) {
      _0x2117d9(_0xb06cd6, _0x175215, _0x5c9069);
    }
    return _0x18f5b9(_0xb06cd6);
  }
  function _0x13e31c() {
    return _0xad46db.matchWebGLToCanvasSize || _0xad46db.matchWebGLToCanvasSize === undefined;
  }
  function _0x20f82b() {
    return _0x1c9190.length / 1048576;
  }
  function _0x16a050(_0x5037f8, _0x4efc73) {
    var _0x44f0c1 = _0xad46db.SystemInfo.os + " " + _0xad46db.SystemInfo.osVersion;
    if (_0x5037f8) {
      _0x2117d9(_0x44f0c1, _0x5037f8, _0x4efc73);
    }
    return _0x18f5b9(_0x44f0c1);
  }
  function _0x167266() {
    if (_0xad46db.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0xad46db.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x43b27f(_0x565c88, _0x39b2e7) {
    _0x1a8d8e[_0x565c88 >> 3] = _0xad46db.SystemInfo.width;
    _0x1a8d8e[_0x39b2e7 >> 3] = _0xad46db.SystemInfo.height;
  }
  function _0x48be68(_0x593eb7, _0xfa7708) {
    if (_0x593eb7) {
      _0x2117d9(_0xad46db.streamingAssetsUrl, _0x593eb7, _0xfa7708);
    }
    return _0x18f5b9(_0xad46db.streamingAssetsUrl);
  }
  function _0x3c9126() {
    var _0x53a6e5 = _0x134071.getExtension("WEBGL_compressed_texture_astc");
    if (_0x53a6e5 && _0x53a6e5.getSupportedProfiles) {
      return _0x53a6e5.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x30afbb() {
    return _0xad46db.SystemInfo.hasCursorLock;
  }
  function _0x153fa4() {
    return _0xad46db.SystemInfo.hasFullscreen;
  }
  function _0x3936f8() {
    return _0xad46db.SystemInfo.hasWebGL;
  }
  function _0x30fe2c() {
    return _0xad46db.SystemInfo.mobile;
  }
  function _0x45034c() {
    return !!_0xad46db.shouldQuit;
  }
  var _0x11b0af = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0xe9e869(_0xf43dfe) {
    var _0x4d8089 = _0x11b0af.abortControllers[_0xf43dfe];
    if (!_0x4d8089 || _0x4d8089.signal.aborted) {
      return;
    }
    _0x4d8089.abort();
  }
  function _0x2b8c32(_0x5056d1, _0x3e8355) {
    var _0x142f4c = _0x5d80c0(_0x5056d1);
    var _0x5dace3 = _0x5d80c0(_0x3e8355);
    var _0x5264e7 = new AbortController();
    var _0x14fe49 = {
      url: _0x142f4c,
      init: {
        method: _0x5dace3,
        signal: _0x5264e7.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x11b0af.abortControllers[_0x11b0af.nextRequestId] = _0x5264e7;
    _0x11b0af.requests[_0x11b0af.nextRequestId] = _0x14fe49;
    return _0x11b0af.nextRequestId++;
  }
  function _0x3c41ef(_0x2f9ab1) {
    var _0x515927 = _0x11b0af.responses[_0x2f9ab1];
    if (!_0x515927) {
      return "";
    }
    if (_0x515927.headerString) {
      return _0x515927.headerString;
    }
    var _0x2cdfcd = "";
    var _0x435047 = _0x515927.headers.entries();
    for (var _0xac9cd8 = _0x435047.next(); !_0xac9cd8.done; _0xac9cd8 = _0x435047.next()) {
      _0x2cdfcd += _0xac9cd8.value[0] + ": " + _0xac9cd8.value[1] + "\r\n";
    }
    _0x515927.headerString = _0x2cdfcd;
    return _0x2cdfcd;
  }
  function _0x4e5f50(_0x3527a0, _0x2bbaa6, _0x1a4fe0, _0x3a9700, _0x1fa252) {
    var _0x3810a1 = _0x11b0af.responses[_0x3527a0];
    if (!_0x3810a1) {
      _0x2117d9("", _0x2bbaa6, _0x1a4fe0);
      _0x2117d9("", _0x3a9700, _0x1fa252);
      return;
    }
    if (_0x2bbaa6) {
      var _0x105750 = _0x3c41ef(_0x3527a0);
      _0x2117d9(_0x105750, _0x2bbaa6, _0x1a4fe0);
    }
    if (_0x3a9700) {
      _0x2117d9(_0x3810a1.url, _0x3a9700, _0x1fa252);
    }
  }
  function _0x1177a2(_0x49e5fc, _0x28eff2) {
    var _0x31472e = _0x11b0af.responses[_0x49e5fc];
    if (!_0x31472e) {
      _0x2fe6c1[_0x28eff2 >> 2] = 0;
      _0x2fe6c1[(_0x28eff2 >> 2) + 1] = 0;
      return;
    }
    var _0x54ab3a = _0x3c41ef(_0x49e5fc);
    _0x2fe6c1[_0x28eff2 >> 2] = _0x18f5b9(_0x54ab3a);
    _0x2fe6c1[(_0x28eff2 >> 2) + 1] = _0x18f5b9(_0x31472e.url);
  }
  function _0x15a666(_0x6b715d) {
    if (_0x11b0af.timer[_0x6b715d]) {
      clearTimeout(_0x11b0af.timer[_0x6b715d]);
    }
    delete _0x11b0af.requests[_0x6b715d];
    delete _0x11b0af.responses[_0x6b715d];
    delete _0x11b0af.abortControllers[_0x6b715d];
    delete _0x11b0af.timer[_0x6b715d];
  }
  function _0x2bac5a(_0xb23c60, _0x48dedc, _0x22a25c, _0x24cbc0, _0x31e89a, _0x297adf) {
    var _0x43bd43 = _0x11b0af.requests[_0xb23c60];
    var _0x54d334 = _0x11b0af.abortControllers[_0xb23c60];
    function _0x375917(_0x8cec38) {
      if (!_0x43bd43.tempBuffer) {
        const _0x118640 = Math.max(_0x8cec38, 1024);
        _0x43bd43.tempBuffer = _0x304a50(_0x118640);
        _0x43bd43.tempBufferSize = _0x118640;
      }
      if (_0x43bd43.tempBufferSize < _0x8cec38) {
        _0x3d1553(_0x43bd43.tempBuffer);
        _0x43bd43.tempBuffer = _0x304a50(_0x8cec38);
        _0x43bd43.tempBufferSize = _0x8cec38;
      }
      return _0x43bd43.tempBuffer;
    }
    function _0x594278() {
      if (_0x11b0af.timer[_0xb23c60]) {
        clearTimeout(_0x11b0af.timer[_0xb23c60]);
        delete _0x11b0af.timer[_0xb23c60];
      }
    }
    function _0x210f71(_0x41285a, _0x5117a2) {
      _0x594278();
      if (!_0x31e89a) {
        return;
      }
      var _0x2a12a2 = 0;
      if (_0x43bd43.init.enableStreamingDownload) {
        _0x48bfa2("viiiiii", _0x31e89a, [_0x24cbc0, _0x41285a.status, 0, _0x5117a2.length, 0, _0x2a12a2]);
      } else if (_0x5117a2.length != 0) {
        var _0x33e038 = _0x304a50(_0x5117a2.length);
        _0x1c9190.set(_0x5117a2, _0x33e038);
        _0x48bfa2("viiiiii", _0x31e89a, [_0x24cbc0, _0x41285a.status, _0x33e038, _0x5117a2.length, 0, _0x2a12a2]);
      } else {
        _0x48bfa2("viiiiii", _0x31e89a, [_0x24cbc0, _0x41285a.status, 0, 0, 0, _0x2a12a2]);
      }
      if (_0x43bd43.tempBuffer) {
        _0x3d1553(_0x43bd43.tempBuffer);
      }
    }
    function _0x4f8d8b(_0xcee95c, _0x34f86c) {
      _0x594278();
      if (!_0x31e89a) {
        return;
      }
      var _0x364fce = _0x18f5b9(_0xcee95c) + 1;
      var _0xf4e55e = _0x304a50(_0x364fce);
      _0x2117d9(_0xcee95c, _0xf4e55e, _0x364fce);
      _0x48bfa2("viiiiii", _0x31e89a, [_0x24cbc0, 500, 0, 0, _0xf4e55e, _0x34f86c]);
      _0x3d1553(_0xf4e55e);
      if (_0x43bd43.tempBuffer) {
        _0x3d1553(_0x43bd43.tempBuffer);
      }
    }
    function _0x3004fc(_0xc6fb7c) {
      if (!_0x297adf || !_0xc6fb7c.lengthComputable) {
        return;
      }
      var _0x2dec54 = _0xc6fb7c.response;
      _0x11b0af.responses[_0xb23c60] = _0x2dec54;
      if (_0xc6fb7c.chunk) {
        var _0xdc8707 = _0x375917(_0xc6fb7c.chunk.length);
        _0x1c9190.set(_0xc6fb7c.chunk, _0xdc8707);
        _0x48bfa2("viiiiii", _0x297adf, [_0x24cbc0, _0x2dec54.status, _0xc6fb7c.loaded, _0xc6fb7c.total, _0xdc8707, _0xc6fb7c.chunk.length]);
      } else {
        _0x48bfa2("viiiiii", _0x297adf, [_0x24cbc0, _0x2dec54.status, _0xc6fb7c.loaded, _0xc6fb7c.total, 0, 0]);
      }
    }
    try {
      if (_0x22a25c > 0) {
        var _0x2c9467 = _0x1c9190.subarray(_0x48dedc, _0x48dedc + _0x22a25c);
        _0x43bd43.init.body = new Blob([_0x2c9467]);
      }
      if (_0x43bd43.timeout) {
        _0x11b0af.timer[_0xb23c60] = setTimeout(function () {
          _0x43bd43.isTimedOut = true;
          _0x54d334.abort();
        }, _0x43bd43.timeout);
      }
      var _0x4dec87 = _0xad46db.fetchWithProgress;
      _0x43bd43.init.onProgress = _0x3004fc;
      if (_0xad46db.companyName && _0xad46db.productName && _0xad46db.cachedFetch) {
        _0x4dec87 = _0xad46db.cachedFetch;
        _0x43bd43.init.companyName = _0xad46db.companyName;
        _0x43bd43.init.productName = _0xad46db.productName;
        _0x43bd43.control = _0xad46db.cacheControl(_0x43bd43.url);
      }
      _0x4dec87(_0x43bd43.url, _0x43bd43.init).then(function (_0x57609b) {
        _0x11b0af.responses[_0xb23c60] = _0x57609b;
        _0x210f71(_0x57609b, _0x57609b.parsedBody);
      }).catch(function (_0x2c6ef2) {
        var _0x3262f2 = 2;
        var _0x4be7b1 = 17;
        var _0x226b0a = 14;
        if (_0x43bd43.isTimedOut) {
          _0x4f8d8b("Connection timed out.", _0x226b0a);
        } else if (_0x54d334.signal.aborted) {
          _0x4f8d8b("Aborted.", _0x4be7b1);
        } else {
          _0x4f8d8b(_0x2c6ef2.message, _0x3262f2);
        }
      });
    } catch (_0x254720) {
      var _0x1a3a84 = 2;
      _0x4f8d8b(_0x254720.message, _0x1a3a84);
    }
  }
  function _0x2775ff(_0x2120f7, _0x328d8f) {
    var _0x344585 = _0x11b0af.requests[_0x2120f7];
    if (!_0x344585) {
      return;
    }
    _0x344585.init.redirect = _0x328d8f === 0 ? "error" : "follow";
  }
  function _0x1ee736(_0xe7c7e6, _0x438549, _0x191a8a) {
    var _0x4058be = _0x11b0af.requests[_0xe7c7e6];
    if (!_0x4058be) {
      return;
    }
    var _0x3e393a = _0x5d80c0(_0x438549);
    var _0x3fc75b = _0x5d80c0(_0x191a8a);
    _0x4058be.init.headers[_0x3e393a] = _0x3fc75b;
  }
  function _0x26c9d7(_0xa3a414, _0x37bee4) {
    var _0x584ac4 = _0x11b0af.requests[_0xa3a414];
    if (!_0x584ac4) {
      return;
    }
    _0x584ac4.timeout = _0x37bee4;
  }
  function _0x4b14c6(_0x3dde87, _0x3dcbe4, _0x1bb326) {
    const _0x346d04 = _0x5d80c0(_0x3dde87);
    let _0x2e2d82 = _0x5d80c0(_0x3dcbe4);
    _0x2e2d82 = _0x3dcbe4 || 300000;
    let _0x3757f3 = _0x5d80c0(_0x1bb326);
    if (window._keepAliveInterval) {
      clearInterval(window._keepAliveInterval);
    }
    window._keepAliveInterval = setInterval(() => {
      let _0x2c0c0b = new Date().toISOString();
      fetch(_0x346d04, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
          session_id: _0x3757f3
        })
      }).then(_0x2ec429 => {
        if (!_0x2ec429.ok) {
          console.warn("Keep-alive failed:" + _0x2ec429.status);
        } else {
          console.log("Keep-alive successful");
        }
      }).catch(_0x44d4f8 => {
        console.error("Keep-alive error:", _0x44d4f8);
      });
    }, _0x2e2d82);
  }
  function _0x441245(_0x58d82b, _0x2816a7, _0x4595fc, _0x472d89) {
    var _0x5e0e9f = _0x5d80c0(_0x58d82b);
    var _0x174251 = _0x5d80c0(_0x2816a7);
    var _0x3e724e = _0x5d80c0(_0x4595fc);
    var _0x1ddbf5 = _0x5d80c0(_0x472d89);
    try {
      firebase.database().ref(_0x5e0e9f).on("child_added", function (_0x39845e) {
        window.unityInstance.SendMessage(_0x174251, _0x3e724e, JSON.stringify(_0x39845e.val()));
      });
    } catch (_0x227eee) {
      window.unityInstance.SendMessage(_0x174251, _0x1ddbf5, JSON.stringify(_0x227eee, Object.getOwnPropertyNames(_0x227eee)));
    }
  }
  function _0x3ebcd3(_0x2276f6, _0x59e3e9, _0x8912fa, _0x22f365) {
    var _0x34043e = _0x5d80c0(_0x2276f6);
    var _0x4e6536 = _0x5d80c0(_0x59e3e9);
    var _0x3ae631 = _0x5d80c0(_0x8912fa);
    var _0x50a7be = _0x5d80c0(_0x22f365);
    try {
      firebase.database().ref(_0x34043e).on("child_changed", function (_0x196c5a) {
        window.unityInstance.SendMessage(_0x4e6536, _0x3ae631, JSON.stringify(_0x196c5a.val()));
      });
    } catch (_0x1a67f5) {
      window.unityInstance.SendMessage(_0x4e6536, _0x50a7be, JSON.stringify(_0x1a67f5, Object.getOwnPropertyNames(_0x1a67f5)));
    }
  }
  function _0x5a7e24(_0x40ce45, _0x294e59, _0x539dc0, _0x1f8a57) {
    var _0x50774c = _0x5d80c0(_0x40ce45);
    var _0x21831a = _0x5d80c0(_0x294e59);
    var _0x3088b0 = _0x5d80c0(_0x539dc0);
    var _0x22ac1c = _0x5d80c0(_0x1f8a57);
    try {
      firebase.database().ref(_0x50774c).on("child_removed", function (_0x2f1e02) {
        window.unityInstance.SendMessage(_0x21831a, _0x3088b0, JSON.stringify(_0x2f1e02.val()));
      });
    } catch (_0x49a1a4) {
      window.unityInstance.SendMessage(_0x21831a, _0x22ac1c, JSON.stringify(_0x49a1a4, Object.getOwnPropertyNames(_0x49a1a4)));
    }
  }
  function _0x905443(_0x4e413b, _0x275122, _0x5b91ca, _0x5a2e11, _0x7f0197) {
    var _0xf860be = _0x5d80c0(_0x4e413b);
    var _0x4cfd7e = _0x5d80c0(_0x5b91ca);
    var _0x269c87 = _0x5d80c0(_0x5a2e11);
    var _0x34ee19 = _0x5d80c0(_0x7f0197);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0xf860be + "/collection/"] = firebase.firestore().collection(_0xf860be).onSnapshot({
        includeMetadataChanges: _0x275122 == 1
      }, function (_0x404a41) {
        var _0x5d7ed9 = {};
        _0x404a41.forEach(function (_0x566485) {
          _0x5d7ed9[_0x566485.id] = _0x566485.data();
        });
        window.unityInstance.SendMessage(_0x4cfd7e, _0x269c87, JSON.stringify(_0x5d7ed9));
      }, function (_0x3fd2bf) {
        window.unityInstance.SendMessage(_0x4cfd7e, _0x34ee19, JSON.stringify(_0x3fd2bf, Object.getOwnPropertyNames(_0x3fd2bf)));
      });
    } catch (_0x420124) {
      window.unityInstance.SendMessage(_0x4cfd7e, _0x34ee19, JSON.stringify(_0x420124, Object.getOwnPropertyNames(_0x420124)));
    }
  }
  function _0x5637a1(_0x43861e, _0x310966, _0x1e1099, _0xac9a2b, _0x42d47f, _0x11d790) {
    var _0x2b62f6 = _0x5d80c0(_0x43861e);
    var _0x9935f2 = _0x5d80c0(_0x310966);
    var _0x347446 = _0x5d80c0(_0xac9a2b);
    var _0x458d3c = _0x5d80c0(_0x42d47f);
    var _0x575a63 = _0x5d80c0(_0x11d790);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x2b62f6 + "/" + _0x9935f2] = firebase.firestore().collection(_0x2b62f6).doc(_0x9935f2).onSnapshot({
        includeMetadataChanges: _0x1e1099 == 1
      }, function (_0x1b469e) {
        window.unityInstance.SendMessage(_0x347446, _0x458d3c, JSON.stringify(_0x1b469e.data()));
      }, function (_0xc6fb93) {
        window.unityInstance.SendMessage(_0x347446, _0x575a63, JSON.stringify(_0xc6fb93, Object.getOwnPropertyNames(_0xc6fb93)));
      });
    } catch (_0x492c63) {
      window.unityInstance.SendMessage(_0x347446, _0x575a63, JSON.stringify(_0x492c63, Object.getOwnPropertyNames(_0x492c63)));
    }
  }
  function _0x16cded(_0x2e38f2, _0x151e7c, _0x2ee994, _0x162aa9) {
    var _0x2ebd02 = _0x5d80c0(_0x2e38f2);
    var _0x4abb07 = _0x5d80c0(_0x151e7c);
    var _0x307218 = _0x5d80c0(_0x2ee994);
    var _0x49252d = _0x5d80c0(_0x162aa9);
    try {
      firebase.database().ref(_0x2ebd02).on("value", function (_0x3acca6) {
        window.unityInstance.SendMessage(_0x4abb07, _0x307218, JSON.stringify(_0x3acca6.val()));
      });
    } catch (_0x48f447) {
      window.unityInstance.SendMessage(_0x4abb07, _0x49252d, JSON.stringify(_0x48f447, Object.getOwnPropertyNames(_0x48f447)));
    }
  }
  function _0x22729d(_0x1fc921) {
    var _0x147e09 = _0x5d80c0(_0x1fc921);
    firebaseLogEvent(_0x147e09);
  }
  function _0x20ae63(_0x485043, _0x457399) {
    var _0x4ffb3a = _0x5d80c0(_0x485043);
    var _0x4e97ec = JSON.parse(_0x5d80c0(_0x457399));
    firebaseLogEventParameter(_0x4ffb3a, _0x4e97ec);
  }
  function _0x1f4920(_0x3bfbe0) {
    document.makeFullscreen(_0x5d80c0(_0x3bfbe0));
  }
  function _0x1c0af3(_0x4dae57, _0x1dd8d6, _0x16d33b, _0x244327, _0xd8e84d) {
    var _0x475fef = _0x5d80c0(_0x4dae57);
    var _0x3adf71 = _0x5d80c0(_0x16d33b);
    var _0x1225f3 = _0x5d80c0(_0x244327);
    var _0x31450c = _0x5d80c0(_0xd8e84d);
    try {
      firebase.database().ref(_0x475fef).transaction(function (_0x103c90) {
        if (!isNaN(_0x103c90)) {
          return _0x103c90 + _0x1dd8d6;
        } else {
          return _0x1dd8d6;
        }
      }).then(function (_0x4b9d92) {
        window.unityInstance.SendMessage(_0x3adf71, _0x1225f3, "Success: transaction run in " + _0x475fef);
      });
    } catch (_0x5aa7af) {
      window.unityInstance.SendMessage(_0x3adf71, _0x31450c, JSON.stringify(_0x5aa7af, Object.getOwnPropertyNames(_0x5aa7af)));
    }
  }
  function _0x803640(_0xf7317d, _0x291e97, _0x3983e0) {
    var _0x2bccfd = _0x5d80c0(_0xf7317d);
    var _0x230ab3 = _0x5d80c0(_0x291e97);
    var _0x186021 = _0x5d80c0(_0x3983e0);
    firebase.auth().onAuthStateChanged(function (_0x27f126) {
      if (_0x27f126) {
        window.unityInstance.SendMessage(_0x2bccfd, _0x230ab3, JSON.stringify(_0x27f126));
      } else {
        window.unityInstance.SendMessage(_0x2bccfd, _0x186021, "User signed out");
      }
    });
  }
  function _0x4c889a(_0x510179) {
    window.wgUnityInstance = _0xad46db;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x510179);
    } catch (_0x1099a8) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x56daf8 = document.createElement("script");
      _0x56daf8.addEventListener("load", function (_0x1a642d) {
        var _0x3a2ff2 = document.createElement("script");
        _0x3a2ff2.addEventListener("load", function (_0x251eeb) {
          console.log("WGSDK: Development resources loaded.");
          _0x577812(_0x510179, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x3a2ff2);
        _0x3a2ff2.src = window.GMSOFT_ADS_INFO.wgLibrary;
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x56daf8);
      _0x56daf8.src = window.GMSOFT_ADS_INFO.wgConf;
    }
  }
  function _0x577812(_0x1576f8, _0x332599) {
    var _0x9b56fd;
    if (_0x332599 === true) {
      _0x9b56fd = _0x1576f8;
    } else {
      _0x9b56fd = _0x5d80c0(_0x1576f8);
    }
    setTimeout(function () {
      _0x4c889a(_0x9b56fd);
    }, 250);
  }
  function _0x1c56f9(_0x5bc8d8, _0x8e8966, _0x451eb0, _0x3e24d0, _0x33e260) {
    var _0x534482 = _0x5d80c0(_0x5bc8d8);
    var _0x696cb7 = _0x5d80c0(_0x8e8966);
    var _0x3cd53e = _0x5d80c0(_0x451eb0);
    var _0x176488 = _0x5d80c0(_0x3e24d0);
    var _0x509dda = _0x5d80c0(_0x33e260);
    try {
      firebase.database().ref(_0x534482).set(JSON.parse(_0x696cb7)).then(function (_0x57f183) {
        window.unityInstance.SendMessage(_0x3cd53e, _0x176488, "Success: " + _0x696cb7 + " was posted to " + _0x534482);
      });
    } catch (_0x8361e7) {
      window.unityInstance.SendMessage(_0x3cd53e, _0x509dda, JSON.stringify(_0x8361e7, Object.getOwnPropertyNames(_0x8361e7)));
    }
  }
  function _0x2690f1(_0x2234bc, _0x54fcdf, _0x137d5e, _0x248056, _0x250896) {
    var _0x1a8e22 = _0x5d80c0(_0x2234bc);
    var _0x3da5b0 = _0x5d80c0(_0x54fcdf);
    var _0x59d8cf = _0x5d80c0(_0x137d5e);
    var _0x3e1efd = _0x5d80c0(_0x248056);
    var _0x511d8d = _0x5d80c0(_0x250896);
    try {
      firebase.database().ref(_0x1a8e22).push().set(JSON.parse(_0x3da5b0)).then(function (_0x18510c) {
        window.unityInstance.SendMessage(_0x59d8cf, _0x3e1efd, "Success: " + _0x3da5b0 + " was pushed to " + _0x1a8e22);
      });
    } catch (_0x21cf6a) {
      window.unityInstance.SendMessage(_0x59d8cf, _0x511d8d, JSON.stringify(_0x21cf6a, Object.getOwnPropertyNames(_0x21cf6a)));
    }
  }
  function _0x45620c(_0x2832c4) {
    _0x2832c4 = _0x142101(_0x2832c4);
    window.open(_0x2832c4);
  }
  function _0x52e54e() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x490da6) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x3cd5c9() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0xad46db);
    } catch (_0x8590bb) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x3cd5c9();
      }, 250);
    }
  }
  function _0x29ab92() {
    window.onbeforeunload = function (_0x2ef730) {
      if (typeof _0x1bb0a2 === "function") {
        _0x1bb0a2("CanvasLoading", "OnTabCloseDetected");
      }
    };
  }
  function _0x343597() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x473e29) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x19577d();
    }
  }
  function _0x19577d() {
    setTimeout(function () {
      _0x343597();
    }, 250);
  }
  function _0x41f911(_0x3291b9, _0x2216aa, _0x52e0e1, _0x4def5d, _0x2f0bbd, _0x385fd4, _0x1d618b) {
    var _0x14706a = _0x5d80c0(_0x3291b9);
    var _0x116295 = _0x5d80c0(_0x2216aa);
    var _0x525d20 = _0x5d80c0(_0x52e0e1);
    var _0x138982 = _0x5d80c0(_0x4def5d);
    var _0x416c65 = _0x5d80c0(_0x2f0bbd);
    var _0x46b801 = _0x5d80c0(_0x385fd4);
    var _0x43a13d = _0x5d80c0(_0x1d618b);
    try {
      var _0x4def5d = {};
      _0x4def5d[_0x525d20] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x138982));
      firebase.firestore().collection(_0x14706a).doc(_0x116295).update(_0x4def5d).then(function () {
        window.unityInstance.SendMessage(_0x416c65, _0x46b801, "Success: element " + _0x138982 + " was removed in " + _0x525d20);
      }).catch(function (_0x329825) {
        window.unityInstance.SendMessage(_0x416c65, _0x43a13d, JSON.stringify(_0x329825, Object.getOwnPropertyNames(_0x329825)));
      });
    } catch (_0x5cb789) {
      window.unityInstance.SendMessage(_0x416c65, _0x43a13d, JSON.stringify(_0x5cb789, Object.getOwnPropertyNames(_0x5cb789)));
    }
  }
  function _0x59110e(_0x1ce1f1) {
    var _0x5f5df0 = window.unityStringify(_0x1ce1f1);
    var _0x18343b = {
      adStarted: function () {
        window.UnitySDK.unlockPointer();
        _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AdStarted");
      },
      adFinished: function () {
        window.UnitySDK.lockPointer();
        _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AdFinished");
      },
      adError: function (_0xf9b51f) {
        _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0xf9b51f));
      }
    };
    window.CrazyGames.SDK.ad.requestAd(_0x5f5df0, _0x18343b).catch(function (_0x12a044) {
      window.UnitySDK.logError("Error while requesting ad:", _0x12a044);
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
        code: "unknown",
        message: _0x12a044.message || "Unknown error"
      }));
    });
  }
  function _0x1a8be7(_0x467ad8) {
    var _0x5eb2b3 = JSON.parse(window.unityStringify(_0x467ad8));
    try {
      window.CrazyGames.SDK.banner.requestOverlayBanners(_0x5eb2b3, function (_0x4eac7c, _0x3b3aeb, _0x17a824) {});
    } catch (_0xd2f97d) {
      window.UnitySDK.logError("Error while requesting banners:", _0xd2f97d);
    }
  }
  function _0x3c7acd(_0x1ee667) {
    var _0x237e0e = JSON.parse(window.unityStringify(_0x1ee667));
    var _0x2bb238 = "";
    try {
      _0x2bb238 = window.CrazyGames.SDK.game.inviteLink(_0x237e0e);
    } catch (_0x30d4db) {
      window.UnitySDK.logError("Error while requesting invite url:", _0x30d4db);
    }
    var _0x44874f = _0x18f5b9(_0x2bb238) + 1;
    var _0x276b8f = _0x304a50(_0x44874f);
    _0x2117d9(_0x2bb238, _0x276b8f, _0x44874f);
    return _0x276b8f;
  }
  function _0x56d600(_0x237b38) {
    _0x237b38 = _0x5d80c0(_0x237b38);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x237b38,
      onEvent: function (_0x5cba50) {
        switch (_0x5cba50.name) {
          case "SDK_GAME_START":
            _0x1bb0a2("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x1bb0a2("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x1bb0a2("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x1bb0a2("GameDistribution", "EventCallback", _0x5cba50.name);
        }
      }
    };
    (function (_0x31e9, _0x14a46b, _0x4c34b8) {
      var _0x282cbc;
      var _0x1b87c8 = _0x31e9.getElementsByTagName(_0x14a46b)[0];
      if (_0x31e9.getElementById(_0x4c34b8)) {
        return;
      }
      _0x282cbc = _0x31e9.createElement(_0x14a46b);
      _0x282cbc.id = _0x4c34b8;
      _0x282cbc.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x1b87c8.parentNode.insertBefore(_0x282cbc, _0x1b87c8);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x337a06() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x4e194a) {
        _0x1bb0a2("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x353fcd) {
        _0x1bb0a2("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x401ddf(_0x813c3c) {
    _0x813c3c = _0x5d80c0(_0x813c3c);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x813c3c !== "undefined") {
      gdsdk.sendEvent(_0x813c3c).then(function (_0x267c44) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x434a02) {
        console.log(_0x434a02.message);
      });
    }
  }
  function _0x38b47d(_0x54a39e) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x54a39e = _0x5d80c0(_0x54a39e) || gdsdk.AdType.Interstitial;
      gdsdk.showAd(_0x54a39e).then(function (_0x325bb4) {
        if (_0x54a39e === gdsdk.AdType.Rewarded) {
          _0x1bb0a2("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x86751a) {
        if (_0x54a39e === gdsdk.AdType.Rewarded) {
          _0x1bb0a2("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x5eb056(_0x56bbcf, _0x3bb32e, _0x2501b9, _0x29bfae, _0x23af29, _0x1ce09e) {
    var _0x3acbbc = _0x5d80c0(_0x56bbcf);
    var _0x4070c2 = _0x5d80c0(_0x3bb32e);
    var _0x18987b = _0x5d80c0(_0x2501b9);
    var _0x235e8a = _0x5d80c0(_0x29bfae);
    var _0x26c006 = _0x5d80c0(_0x23af29);
    var _0x39f6ba = _0x5d80c0(_0x1ce09e);
    try {
      firebase.firestore().collection(_0x3acbbc).doc(_0x4070c2).set(JSON.parse(_0x18987b)).then(function () {
        window.unityInstance.SendMessage(_0x235e8a, _0x26c006, "Success: document " + _0x4070c2 + " was set");
      }).catch(function (_0x13cf39) {
        window.unityInstance.SendMessage(_0x235e8a, _0x39f6ba, JSON.stringify(_0x13cf39, Object.getOwnPropertyNames(_0x13cf39)));
      });
    } catch (_0x4d38d2) {
      window.unityInstance.SendMessage(_0x235e8a, _0x39f6ba, JSON.stringify(_0x4d38d2, Object.getOwnPropertyNames(_0x4d38d2)));
    }
  }
  function _0x8bd201(_0x45cbeb) {
    var _0x2c62ec = JSON.parse(_0x5d80c0(_0x45cbeb));
    firebaseSetUserProperties(_0x2c62ec);
  }
  function _0x267e17() {
    window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x141585) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        linkAccountResponseStr: JSON.stringify(_0x141585)
      }));
    }).catch(function (_0x96a337) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x96a337)
      }));
    });
  }
  function _0x223d06() {
    window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x1bf21e) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        userJson: JSON.stringify(_0x1bf21e)
      }));
    }).catch(function (_0x32460e) {
      _0x1bb0a2("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
        errorJson: JSON.stringify(_0x32460e)
      }));
    });
  }
  function _0x1db528(_0x4e94cd) {
    var _0x3d7b81 = JSON.parse(window.unityStringify(_0x4e94cd));
    var _0x3526cd = "";
    try {
      _0x3526cd = window.CrazyGames.SDK.game.showInviteButton(_0x3d7b81);
    } catch (_0x5028d8) {
      window.UnitySDK.logError("Error while showing invite button:", _0x5028d8);
    }
    var _0x26444d = _0x18f5b9(_0x3526cd) + 1;
    var _0x515617 = _0x304a50(_0x26444d);
    _0x2117d9(_0x3526cd, _0x515617, _0x26444d);
    return _0x515617;
  }
  function _0x344147() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x2c1478(_0x289fa7, _0x2de68c, _0x2ca788) {
    var _0x2fb851 = _0x5d80c0(_0x289fa7);
    var _0xa439c3 = _0x5d80c0(_0x2de68c);
    var _0x55ffe4 = _0x5d80c0(_0x2ca788);
    try {
      firebase.auth().signInAnonymously().then(function (_0x20a9f6) {
        window.unityInstance.SendMessage(_0x2fb851, _0xa439c3, "Success: signed up for " + _0x20a9f6);
      }).catch(function (_0x57882a) {
        window.unityInstance.SendMessage(_0x2fb851, _0x55ffe4, JSON.stringify(_0x57882a, Object.getOwnPropertyNames(_0x57882a)));
      });
    } catch (_0x1bf081) {
      window.unityInstance.SendMessage(_0x2fb851, _0x55ffe4, JSON.stringify(_0x1bf081, Object.getOwnPropertyNames(_0x1bf081)));
    }
  }
  function _0x324152(_0x30d232, _0x2b5196, _0x59d840, _0x23d741, _0x12b6a7) {
    var _0x416d1b = _0x5d80c0(_0x30d232);
    var _0x3540b5 = _0x5d80c0(_0x2b5196);
    var _0x451194 = _0x5d80c0(_0x59d840);
    var _0x22c098 = _0x5d80c0(_0x23d741);
    var _0x3df88b = _0x5d80c0(_0x12b6a7);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x416d1b, _0x3540b5).then(function (_0x18d47e) {
        window.unityInstance.SendMessage(_0x451194, _0x22c098, "Success: signed in for " + _0x416d1b);
      }).catch(function (_0x3cd1e4) {
        window.unityInstance.SendMessage(_0x451194, _0x3df88b, JSON.stringify(_0x3cd1e4, Object.getOwnPropertyNames(_0x3cd1e4)));
      });
    } catch (_0x310ba6) {
      window.unityInstance.SendMessage(_0x451194, _0x3df88b, JSON.stringify(_0x310ba6, Object.getOwnPropertyNames(_0x310ba6)));
    }
  }
  function _0xf21e2e(_0x209e68, _0x126697, _0x8533f2) {
    var _0x41ddf0 = _0x5d80c0(_0x209e68);
    var _0x228ab = _0x5d80c0(_0x126697);
    var _0x5c3b60 = _0x5d80c0(_0x8533f2);
    try {
      var _0x352ccb = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0x352ccb).then(function (_0x357f5e) {
        window.unityInstance.SendMessage(_0x41ddf0, _0x228ab, "Success: signed in with Facebook!");
      }).catch(function (_0x282b0d) {
        window.unityInstance.SendMessage(_0x41ddf0, _0x5c3b60, JSON.stringify(_0x282b0d, Object.getOwnPropertyNames(_0x282b0d)));
      });
    } catch (_0x7e1136) {
      window.unityInstance.SendMessage(_0x41ddf0, _0x5c3b60, JSON.stringify(_0x7e1136, Object.getOwnPropertyNames(_0x7e1136)));
    }
  }
  function _0x24d718(_0xabff78, _0x1fabc6, _0x2ac5d6) {
    var _0x11c24a = _0x5d80c0(_0xabff78);
    var _0x590ab9 = _0x5d80c0(_0x1fabc6);
    var _0x136a67 = _0x5d80c0(_0x2ac5d6);
    try {
      var _0x2c97ee = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x2c97ee).then(function (_0x5bfb34) {
        window.unityInstance.SendMessage(_0x11c24a, _0x590ab9, "Success: signed in with Google!");
      }).catch(function (_0x5b04a9) {
        window.unityInstance.SendMessage(_0x11c24a, _0x136a67, JSON.stringify(_0x5b04a9, Object.getOwnPropertyNames(_0x5b04a9)));
      });
    } catch (_0x4cc8f4) {
      window.unityInstance.SendMessage(_0x11c24a, _0x136a67, JSON.stringify(_0x4cc8f4, Object.getOwnPropertyNames(_0x4cc8f4)));
    }
  }
  function _0x112014(_0x12d8a8, _0x575623, _0x562099, _0x24b350) {
    var _0x4a39c9 = _0x5d80c0(_0x12d8a8);
    var _0x486002 = _0x5d80c0(_0x575623);
    var _0x1f67f2 = _0x5d80c0(_0x562099);
    var _0x5ef526 = _0x5d80c0(_0x24b350);
    try {
      firebase.database().ref(_0x4a39c9).off("child_added");
      window.unityInstance.SendMessage(_0x486002, _0x1f67f2, "Success: listener removed");
    } catch (_0x5b2b1a) {
      window.unityInstance.SendMessage(_0x486002, _0x5ef526, JSON.stringify(_0x5b2b1a, Object.getOwnPropertyNames(_0x5b2b1a)));
    }
  }
  function _0x900c4e(_0x10f255, _0x8286cd, _0x5e9e37, _0x2e703d) {
    var _0x21bc0f = _0x5d80c0(_0x10f255);
    var _0x1ffac8 = _0x5d80c0(_0x8286cd);
    var _0x2da28c = _0x5d80c0(_0x5e9e37);
    var _0x5095fb = _0x5d80c0(_0x2e703d);
    try {
      firebase.database().ref(_0x21bc0f).off("child_changed");
      window.unityInstance.SendMessage(_0x1ffac8, _0x2da28c, "Success: listener removed");
    } catch (_0x53dfca) {
      window.unityInstance.SendMessage(_0x1ffac8, _0x5095fb, JSON.stringify(_0x53dfca, Object.getOwnPropertyNames(_0x53dfca)));
    }
  }
  function _0x848e0c(_0x266609, _0x3950d0, _0x324342, _0x873be0) {
    var _0x2d3f3d = _0x5d80c0(_0x266609);
    var _0x22d41e = _0x5d80c0(_0x3950d0);
    var _0x35d6cc = _0x5d80c0(_0x324342);
    var _0x4b4f9f = _0x5d80c0(_0x873be0);
    try {
      firebase.database().ref(_0x2d3f3d).off("child_removed");
      window.unityInstance.SendMessage(_0x22d41e, _0x35d6cc, "Success: listener removed");
    } catch (_0x3c1f36) {
      window.unityInstance.SendMessage(_0x22d41e, _0x4b4f9f, JSON.stringify(_0x3c1f36, Object.getOwnPropertyNames(_0x3c1f36)));
    }
  }
  function _0x1a775c(_0xb036ae, _0xe4f223, _0x2497d2, _0x4f0d51) {
    var _0xbe408f = _0x5d80c0(_0xb036ae);
    var _0x557df1 = _0x5d80c0(_0xe4f223);
    var _0x269c03 = _0x5d80c0(_0x2497d2);
    var _0x576026 = _0x5d80c0(_0x4f0d51);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0xbe408f + "/collection/"]();
      window.unityInstance.SendMessage(_0x557df1, _0x269c03, "Success: listener was removed");
    } catch (_0x3ab3d0) {
      window.unityInstance.SendMessage(_0x557df1, _0x576026, JSON.stringify(_0x3ab3d0, Object.getOwnPropertyNames(_0x3ab3d0)));
    }
  }
  function _0x4fb9bd(_0xaa780b, _0x26bda3, _0x47239c, _0x4afc1d, _0x5efa62) {
    var _0x1e25dd = _0x5d80c0(_0xaa780b);
    var _0x28a468 = _0x5d80c0(_0x26bda3);
    var _0x3da4ce = _0x5d80c0(_0x47239c);
    var _0xc57919 = _0x5d80c0(_0x4afc1d);
    var _0x1646fc = _0x5d80c0(_0x5efa62);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x1e25dd + "/" + _0x28a468]();
      window.unityInstance.SendMessage(_0x3da4ce, _0xc57919, "Success: listener was removed");
    } catch (_0x1430db) {
      window.unityInstance.SendMessage(_0x3da4ce, _0x1646fc, JSON.stringify(_0x1430db, Object.getOwnPropertyNames(_0x1430db)));
    }
  }
  function _0x13f447(_0x11a9af, _0x48729f, _0xe30131, _0x6fab6e) {
    var _0x536bf7 = _0x5d80c0(_0x11a9af);
    var _0x33c2c0 = _0x5d80c0(_0x48729f);
    var _0x5b0cdd = _0x5d80c0(_0xe30131);
    var _0x2ce940 = _0x5d80c0(_0x6fab6e);
    try {
      firebase.database().ref(_0x536bf7).off("value");
      window.unityInstance.SendMessage(_0x33c2c0, _0x5b0cdd, "Success: listener removed");
    } catch (_0x725d98) {
      window.unityInstance.SendMessage(_0x33c2c0, _0x2ce940, JSON.stringify(_0x725d98, Object.getOwnPropertyNames(_0x725d98)));
    }
  }
  function _0x5b1adc() {
    try {
      window.CrazyGames.SDK.data.syncUnityGameData();
    } catch (_0x30eee4) {
      window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x30eee4);
    }
  }
  function _0x7dd9c5(_0x57b628, _0x32ef61, _0x1a63c0, _0x4b4552) {
    var _0xbbc8d7 = _0x5d80c0(_0x57b628);
    var _0x26f39f = _0x5d80c0(_0x32ef61);
    var _0x2d1caf = _0x5d80c0(_0x1a63c0);
    var _0x263cc5 = _0x5d80c0(_0x4b4552);
    try {
      firebase.database().ref(_0xbbc8d7).transaction(function (_0xdbca57) {
        if (typeof _0xdbca57 === "boolean") {
          return !_0xdbca57;
        } else {
          return true;
        }
      }).then(function (_0x3e525b) {
        window.unityInstance.SendMessage(_0x26f39f, _0x2d1caf, "Success: transaction run in " + _0xbbc8d7);
      });
    } catch (_0x2168e6) {
      window.unityInstance.SendMessage(_0x26f39f, _0x263cc5, JSON.stringify(_0x2168e6, Object.getOwnPropertyNames(_0x2168e6)));
    }
  }
  function _0x29af3d(_0x25c6de, _0x271e81, _0x2dfc4f, _0xa7af15, _0x5beba6, _0xaedb1d) {
    var _0x157c36 = _0x5d80c0(_0x25c6de);
    var _0x13bf51 = _0x5d80c0(_0x271e81);
    var _0x3a0a42 = _0x5d80c0(_0x2dfc4f);
    var _0x2ad5dc = _0x5d80c0(_0xa7af15);
    var _0x96ecf3 = _0x5d80c0(_0x5beba6);
    var _0x1d2d2e = _0x5d80c0(_0xaedb1d);
    try {
      firebase.firestore().collection(_0x157c36).doc(_0x13bf51).update(JSON.parse(_0x3a0a42)).then(function () {
        window.unityInstance.SendMessage(_0x2ad5dc, _0x96ecf3, "Success: document " + _0x13bf51 + " was updated");
      }).catch(function (_0x3593a9) {
        window.unityInstance.SendMessage(_0x2ad5dc, _0x1d2d2e, JSON.stringify(_0x3593a9, Object.getOwnPropertyNames(_0x3593a9)));
      });
    } catch (_0x31430e) {
      window.unityInstance.SendMessage(_0x2ad5dc, _0x1d2d2e, JSON.stringify(_0x31430e, Object.getOwnPropertyNames(_0x31430e)));
    }
  }
  function _0x489990(_0x64600d, _0x7f724, _0x12ae59, _0xa8c0ef, _0x32ad43) {
    var _0x27ff40 = _0x5d80c0(_0x64600d);
    var _0x5c958b = _0x5d80c0(_0x7f724);
    var _0x2ddbca = _0x5d80c0(_0x12ae59);
    var _0x30fadc = _0x5d80c0(_0xa8c0ef);
    var _0xc7163e = _0x5d80c0(_0x32ad43);
    try {
      firebase.database().ref(_0x27ff40).update(JSON.parse(_0x5c958b)).then(function (_0x154464) {
        window.unityInstance.SendMessage(_0x2ddbca, _0x30fadc, "Success: " + _0x5c958b + " was updated in " + _0x27ff40);
      });
    } catch (_0xdffeb2) {
      window.unityInstance.SendMessage(_0x2ddbca, _0xc7163e, JSON.stringify(_0xdffeb2, Object.getOwnPropertyNames(_0xdffeb2)));
    }
  }
  function _0x8f1318(_0x208250, _0x2fcf88, _0x105e33, _0x32ba05, _0x5a5bf4) {
    var _0x946b69 = _0x5d80c0(_0x208250);
    var _0x21f8f0 = _0x5d80c0(_0x2fcf88);
    var _0x2bc990 = _0x5d80c0(_0x105e33);
    var _0x85d94f = _0x5d80c0(_0x32ba05);
    var _0x4534d6 = _0x5d80c0(_0x5a5bf4);
    try {
      firebase.storage().ref(_0x946b69).put(_0x3c952b(_0x21f8f0)).then(function (_0xaa5e4e) {
        window.unityInstance.SendMessage(_0x2bc990, _0x85d94f, "Success: data was posted to " + _0x946b69);
      });
    } catch (_0x283c29) {
      window.unityInstance.SendMessage(_0x2bc990, _0x4534d6, JSON.stringify(_0x283c29, Object.getOwnPropertyNames(_0x283c29)));
    }
    function _0x3c952b(_0x3dc805) {
      var _0x247759 = window.atob(_0x3dc805);
      var _0x5307c5 = _0x247759.length;
      var _0x166ade = new Uint8Array(_0x5307c5);
      for (var _0xa52313 = 0; _0xa52313 < _0x5307c5; _0xa52313++) {
        _0x166ade[_0xa52313] = _0x247759.charCodeAt(_0xa52313);
      }
      return _0x166ade.buffer;
    }
  }
  function _0x19afd5(_0x316062) {
    _0x316062 = _0x5d80c0(_0x316062);
    let _0x6b6333 = document.createElement("input");
    _0x6b6333.type = "file";
    _0x6b6333.accept = ".mp3";
    _0x6b6333.style.display = "none";
    _0x6b6333.onchange = () => {
      _0x1bb0a2("SongUploader", "LoadingPanel", "open");
      let _0x2e47fc = _0x6b6333.files[0];
      if (!_0x2e47fc) {
        console.log("empty_file");
        _0x1bb0a2("SongUploader", "OnFileUploadError", "empty_file");
        return;
      }
      if (_0x2e47fc.type !== "audio/mpeg") {
        console.log("invalid_file_type");
        _0x1bb0a2("SongUploader", "OnFileUploadError", "invalid_file_type");
        return;
      }
      if (_0x2e47fc.size > 5242880) {
        console.log("max_exceed_file_size");
        _0x1bb0a2("SongUploader", "OnFileUploadError", "max_exceed_file_size");
        return;
      }
      let _0x5168b5 = new FormData();
      _0x5168b5.append("file", _0x2e47fc);
      _0x5168b5.append("payload", _0x316062);
      fetch("https://api.1games.io/sound/upload", {
        method: "POST",
        body: _0x5168b5
      }).then(_0x2a6f23 => _0x2a6f23.text()).then(_0x5761a3 => {
        _0x1bb0a2("SongUploader", "OnFileUploaded", _0x5761a3);
        console.log("AFTER UPLOAD");
        _0x1bb0a2("SongUploader", "LoadingPanel", "close");
      }).catch(_0x2af8fe => {
        console.error("Upload error", _0x2af8fe);
        _0x1bb0a2("SongUploader", "OnFileUploadError", "upload_file_error");
        console.log("AFTER UPLOAD ERR");
        _0x1bb0a2("SongUploader", "LoadingPanel", "close");
      });
    };
    document.body.appendChild(_0x6b6333);
    _0x6b6333.click();
    setTimeout(() => _0x6b6333.remove(), 1000);
  }
  var _0x30e0b8 = [];
  function _0x259e58(_0x3ec6e0, _0x485e97, _0x3210ab, _0x1e55b1, _0x178e1f, _0x109e43, _0x5a17d3, _0x4ee92e, _0x75520a, _0x391b2e, _0xc944ea, _0x16510a) {
    var _0x368c12 = document.getElementById(_0x5d80c0(_0x3ec6e0));
    var _0x2b7fd6 = _0x368c12.getElementsByTagName("canvas")[0];
    if (!_0x368c12 && _0x2b7fd6) {
      _0x368c12 = _0x2b7fd6.parentNode;
    }
    if (_0x2b7fd6) {
      var _0x4b7ff4 = _0x368c12.offsetWidth / _0x2b7fd6.width;
      var _0x378fcc = _0x368c12.offsetHeight / _0x2b7fd6.height;
      if (_0x4b7ff4 && _0x378fcc) {
        _0x485e97 *= _0x4b7ff4;
        _0x1e55b1 *= _0x4b7ff4;
        _0x3210ab *= _0x378fcc;
        _0x178e1f *= _0x378fcc;
      }
    }
    var _0x2f4c81 = document.createElement(_0x75520a ? "textarea" : "input");
    _0x2f4c81.style.position = "absolute";
    if (_0x16510a) {
      _0x2f4c81.style.bottom = "1vh";
      _0x2f4c81.style.left = "5vw";
      _0x2f4c81.style.width = "90vw";
      _0x2f4c81.style.height = (_0x75520a ? 18 : 10) + "vh";
      _0x2f4c81.style.fontSize = "5vh";
      _0x2f4c81.style.borderWidth = "5px";
      _0x2f4c81.style.borderColor = "#000000";
    } else {
      _0x2f4c81.style.top = _0x3210ab + "px";
      _0x2f4c81.style.left = _0x485e97 + "px";
      _0x2f4c81.style.width = _0x1e55b1 + "px";
      _0x2f4c81.style.height = _0x178e1f + "px";
      _0x2f4c81.style.fontSize = _0x109e43 + "px";
    }
    _0x2f4c81.style.outlineWidth = "1px";
    _0x2f4c81.style.opacity = _0xc944ea ? 0 : 1;
    _0x2f4c81.style.resize = "none";
    _0x2f4c81.style.padding = "0px 1px";
    _0x2f4c81.style.cursor = "default";
    _0x2f4c81.style.touchAction = "none";
    _0x2f4c81.spellcheck = false;
    _0x2f4c81.value = _0x5d80c0(_0x5a17d3);
    _0x2f4c81.placeholder = _0x5d80c0(_0x4ee92e);
    _0x2f4c81.style.outlineColor = "black";
    if (_0x391b2e) {
      _0x2f4c81.type = "password";
    }
    if (_0x16510a) {
      document.body.appendChild(_0x2f4c81);
    } else {
      _0x368c12.appendChild(_0x2f4c81);
    }
    return _0x30e0b8.push(_0x2f4c81) - 1;
  }
  function _0x471260(_0x35ae25) {
    var _0x5b116f = _0x30e0b8[_0x35ae25];
    _0x5b116f.parentNode.removeChild(_0x5b116f);
    _0x30e0b8[_0x35ae25] = null;
  }
  function _0x50a41d(_0x1b275e, _0xecc72c) {
    var _0x1fb26f = _0x30e0b8[_0x1b275e];
    _0x1fb26f.addEventListener("keydown", function (_0x3ee4aa) {
      if (_0x3ee4aa.which && _0x3ee4aa.which === 13 || _0x3ee4aa.keyCode && _0x3ee4aa.keyCode === 13) {
        if (_0xecc72c) {
          _0x3ee4aa.preventDefault();
          _0x1fb26f.blur();
        }
      }
    });
  }
  function _0x192b95(_0x1fb945) {
    var _0x4229a2 = _0x30e0b8[_0x1fb945];
    _0x4229a2.focus();
  }
  function _0x51dd5d(_0x346a87) {
    var _0x28acd0 = _0x30e0b8[_0x346a87];
    _0x28acd0.blur();
  }
  function _0x965bf2() {
    if (typeof _0x48bfa2 === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x48bfa2
      };
    }
  }
  function _0x587223(_0xece433) {
    return _0x30e0b8[_0xece433] === document.activeElement;
  }
  function _0x4f01f1(_0x304f6b, _0x549f49) {
    var _0x22c038 = _0x30e0b8[_0x304f6b];
    _0x22c038.maxLength = _0x549f49;
  }
  function _0x352d5e(_0x22d3c5, _0x37c49b) {
    document.body.addEventListener("focusout", function () {
      document.body.removeEventListener("focusout", arguments.callee);
      Runtime.dynCall("vi", _0x37c49b, [_0x22d3c5]);
    });
  }
  function _0x3901e(_0x57bf97) {
    var _0x211e17 = _0x30e0b8.push(null) - 1;
    document.body.addEventListener("touchend", function () {
      document.body.removeEventListener("touchend", arguments.callee);
      Runtime.dynCall("vi", _0x57bf97, [_0x211e17]);
    });
    return _0x211e17;
  }
  function _0x44c8b8(_0x200e76, _0xbd5275) {
    var _0x3aa17e = _0x30e0b8[_0x200e76];
    _0x3aa17e.onblur = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0xbd5275, [_0x200e76]);
      } else {
        (function (_0x4a14c2) {
          _0xc7c4be.apply(null, [_0xbd5275, _0x4a14c2]);
        })(_0x200e76);
      }
    };
  }
  function _0x1740dd(_0x2d2ab1, _0x2f1b8c) {
    var _0x511e0c = _0x30e0b8[_0x2d2ab1];
    _0x511e0c.onchange = function () {
      var _0x5ec8fa = _0x511e0c.value;
      var _0x594bcf = _0x18f5b9(_0x5ec8fa) + 1;
      var _0x3cf121 = _0x304a50(_0x594bcf);
      _0x2117d9(_0x5ec8fa, _0x3cf121, _0x594bcf);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x2f1b8c, [_0x2d2ab1, _0x3cf121]);
      } else {
        (function (_0x179e4c, _0x3cf646) {
          _0x172fa8.apply(null, [_0x2f1b8c, _0x179e4c, _0x3cf646]);
        })(_0x2d2ab1, _0x3cf121);
      }
    };
  }
  function _0x4b0e55(_0x39746c, _0x5028cb) {
    var _0x5aa77e = _0x30e0b8[_0x39746c];
    _0x5aa77e.onfocus = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("vi", _0x5028cb, [_0x39746c]);
      } else {
        (function (_0x52f9fb) {
          _0xc7c4be.apply(null, [_0x5028cb, _0x52f9fb]);
        })(_0x39746c);
      }
    };
  }
  function _0x52dea9(_0x217fa1, _0x65d642) {
    var _0x295806 = _0x30e0b8[_0x217fa1];
    var _0x167d47 = function (_0x287d8a, _0x226b36) {
      if (_0x226b36 instanceof KeyboardEvent) {
        var _0x6b2e38 = _0x18f5b9(_0x226b36.key) + 1;
        var _0x4cd135 = _0x304a50(_0x6b2e38);
        _0x2117d9(_0x226b36.key, _0x4cd135, _0x6b2e38);
        var _0x28e03c = _0x226b36.code;
        var _0x2763d8 = _0x226b36.shiftKey ? 1 : 0;
        var _0x41a901 = _0x226b36.ctrlKey ? 1 : 0;
        var _0x2772a0 = _0x226b36.altKey ? 1 : 0;
        if (Runtime.dynCall) {
          Runtime.dynCall("viiiiiii", _0x65d642, [_0x217fa1, _0x287d8a, _0x4cd135, _0x28e03c, _0x2763d8, _0x41a901, _0x2772a0]);
        } else {
          (function (_0x11f994, _0x1526c7, _0x23f9b3, _0x53a9d3, _0x48c898, _0x44ff61, _0x128462) {
            _0x45f597.apply(null, [_0x65d642, _0x11f994, _0x1526c7, _0x23f9b3, _0x53a9d3, _0x48c898, _0x44ff61, _0x128462]);
          })(_0x217fa1, _0x287d8a, _0x4cd135, _0x28e03c, _0x2763d8, _0x41a901, _0x2772a0);
        }
      }
    };
    _0x295806.addEventListener("keydown", function (_0x360f66) {
      _0x167d47(1, _0x360f66);
    });
    _0x295806.addEventListener("keyup", function (_0x2cabd9) {
      _0x167d47(2, _0x2cabd9);
    });
  }
  function _0x47782a(_0x58e75b, _0x267e87) {
    var _0x177a26 = _0x30e0b8[_0x58e75b];
    _0x177a26.oninput = function () {
      var _0x5756cd = _0x177a26.value;
      var _0x5ef739 = _0x18f5b9(_0x5756cd) + 1;
      var _0x37f3e6 = _0x304a50(_0x5ef739);
      _0x2117d9(_0x5756cd, _0x37f3e6, _0x5ef739);
      if (Runtime.dynCall) {
        Runtime.dynCall("vii", _0x267e87, [_0x58e75b, _0x37f3e6]);
      } else {
        (function (_0x3211e4, _0x2843ca) {
          _0x172fa8.apply(null, [_0x267e87, _0x3211e4, _0x2843ca]);
        })(_0x58e75b, _0x37f3e6);
      }
    };
  }
  function _0x476914(_0x5742ce) {
    var _0x53ee2e = _0x30e0b8[_0x5742ce];
    if (_0x53ee2e.selectionDirection == "backward") {
      return -1;
    } else {
      return 1;
    }
  }
  function _0x47a969(_0x49045b) {
    var _0x35f06d = _0x30e0b8[_0x49045b];
    return _0x35f06d.selectionEnd;
  }
  function _0x34c57d(_0x4f7528) {
    var _0x266ae4 = _0x30e0b8[_0x4f7528];
    return _0x266ae4.selectionStart;
  }
  function _0xbc5b21(_0x98864d, _0x45ab1d, _0x380dae) {
    var _0x1f5e01 = _0x30e0b8[_0x98864d];
    _0x1f5e01.setSelectionRange(_0x45ab1d, _0x380dae);
  }
  function _0xb1de29(_0x22ab43, _0x1e0117) {
    var _0x182e68 = _0x30e0b8[_0x22ab43];
    _0x182e68.addEventListener("keydown", function (_0x4fc512) {
      if (_0x4fc512.which && _0x4fc512.which === 9 || _0x4fc512.keyCode && _0x4fc512.keyCode === 9) {
        _0x4fc512.preventDefault();
        if (_0x182e68.enableTabText) {
          var _0xc75122 = _0x182e68.value;
          var _0xa8bceb = _0x182e68.selectionStart;
          var _0x4cb759 = _0x182e68.selectionEnd;
          _0x182e68.value = _0xc75122.substr(0, _0xa8bceb) + "\t" + _0xc75122.substr(_0x4cb759, _0xc75122.length);
          _0x182e68.setSelectionRange(_0xa8bceb + 1, _0xa8bceb + 1);
          _0x182e68.oninput();
        } else if (Runtime.dynCall) {
          Runtime.dynCall("vii", _0x1e0117, [_0x22ab43, _0x4fc512.shiftKey ? -1 : 1]);
        } else {
          (function (_0x3eb5d9, _0x14e44f) {
            _0x172fa8.apply(null, [_0x1e0117, _0x3eb5d9, _0x14e44f]);
          })(_0x22ab43, _0x4fc512.shiftKey ? -1 : 1);
        }
      }
    });
  }
  function _0x49a444(_0x242fad, _0x21d1eb) {
    var _0x1b99fe = _0x30e0b8[_0x242fad];
    _0x1b99fe.value = _0x5d80c0(_0x21d1eb);
  }
  function _0x3f90c9() {
    var _0x5ae5a6 = document.getElementsByTagName("canvas");
    var _0x1a5a2c = "";
    if (_0x5ae5a6.length >= 1) {
      _0x1a5a2c = _0x5ae5a6[0].parentNode.id;
      if (_0x1a5a2c == "") {
        _0x1a5a2c = _0x5ae5a6[0].parentNode.id = "WebGLWindow:Canvas:ParentNode";
      }
    }
    var _0x4d05fb = _0x18f5b9(_0x1a5a2c) + 1;
    var _0x25297e = _0x304a50(_0x4d05fb);
    _0x2117d9(_0x1a5a2c, _0x25297e, _0x4d05fb);
    return _0x25297e;
  }
  function _0x327885() {
    if (typeof _0x48bfa2 === "undefined") {
      Runtime = {
        dynCall: undefined
      };
    } else if (typeof Runtime === "undefined") {
      Runtime = {
        dynCall: _0x48bfa2
      };
    }
  }
  function _0x5e8ee3() {
    document.makeFullscreen = function (_0x3f9702, _0x45ea1b) {
      var _0x9f3d8e = function () {
        var _0x2c543d = window.document;
        var _0xfeaed1 = _0x2c543d.fullscreenElement || _0x2c543d.mozFullScreenElement || _0x2c543d.webkitFullscreenElement || _0x2c543d.msFullscreenElement;
        return _0xfeaed1;
      };
      var _0x6a07a = function (_0x2d3a6d) {
        document.addEventListener("fullscreenchange", _0x2d3a6d, false);
        document.addEventListener("webkitfullscreenchange", _0x2d3a6d, false);
        document.addEventListener("mozfullscreenchange", _0x2d3a6d, false);
        document.addEventListener("MSFullscreenChange", _0x2d3a6d, false);
      };
      var _0x55e040 = function (_0x159e72) {
        document.removeEventListener("fullscreenchange", _0x159e72, false);
        document.removeEventListener("webkitfullscreenchange", _0x159e72, false);
        document.removeEventListener("mozfullscreenchange", _0x159e72, false);
        document.removeEventListener("MSFullscreenChange", _0x159e72, false);
      };
      var _0x27f9d9 = document.createElement("div");
      document.body.appendChild(_0x27f9d9);
      var _0x5894c4 = document.getElementsByTagName("canvas")[0];
      var _0x3eada9 = {
        width: _0x5894c4.style.width,
        height: _0x5894c4.style.height
      };
      var _0x354fad = document.getElementById(_0x3f9702);
      var _0x5cf217 = _0x354fad.tagName.toLowerCase() == "body";
      if (_0x5cf217) {
        _0x27f9d9.id = _0x354fad.id;
        _0x354fad.id = "";
        _0x354fad = _0x5894c4;
      }
      var _0xb84344 = _0x354fad.parentNode;
      var _0x3352c3 = window.getComputedStyle(_0x354fad);
      var _0x174ac3 = parseInt(_0x3352c3.width);
      var _0x4bd895 = parseInt(_0x3352c3.height);
      var _0xadad31 = Array.from(_0xb84344.children).findIndex(function (_0x33a4b5) {
        return _0x33a4b5 == _0x354fad;
      });
      _0x27f9d9.appendChild(_0x354fad);
      var _0x138ee4 = function () {
        if (_0x9f3d8e()) {
          if (_0x45ea1b) {
            var _0x4f61ea = Math.min(window.screen.width / _0x174ac3, window.screen.height / _0x4bd895);
            var _0x37bdaa = Math.floor(_0x174ac3 * _0x4f61ea);
            var _0x5d695f = Math.floor(_0x4bd895 * _0x4f61ea);
            _0x354fad.style.width = _0x37bdaa + "px";
            _0x354fad.style.height = _0x5d695f + "px";
          } else {
            _0x354fad.style.width = window.screen.width + "px";
            _0x354fad.style.height = window.screen.height + "px";
          }
          _0x5894c4.style.width = "100%";
          _0x5894c4.style.height = "100%";
        } else {
          _0x354fad.style.width = _0x174ac3 + "px";
          _0x354fad.style.height = _0x4bd895 + "px";
          _0xb84344.insertBefore(_0x354fad, Array.from(_0xb84344.children)[_0xadad31]);
          if (_0x5cf217) {
            _0xb84344.id = _0x27f9d9.id;
          }
          _0x27f9d9.parentNode.removeChild(_0x27f9d9);
          _0x5894c4.style.width = _0x3eada9.width;
          _0x5894c4.style.height = _0x3eada9.height;
          _0x55e040(_0x138ee4);
        }
      };
      _0x6a07a(_0x138ee4);
      if (_0x27f9d9.mozRequestFullScreen) {
        _0x27f9d9.mozRequestFullScreen();
      } else if (_0x27f9d9.webkitRequestFullScreen) {
        _0x27f9d9.webkitRequestFullScreen();
      } else if (_0x27f9d9.msRequestFullscreen) {
        _0x27f9d9.msRequestFullscreen();
      } else if (_0x27f9d9.requestFullscreen) {
        _0x27f9d9.requestFullscreen();
      }
    };
  }
  function _0xd1d451(_0x3ec42a) {
    this.blurListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x3ec42a, []);
      } else {
        (function () {
          _0x111b3b.call(null, _0x3ec42a);
        })();
      }
    };
    window.addEventListener("blur", this.blurListener);
  }
  function _0x6edbc6(_0x2033ca) {
    this.focusListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x2033ca, []);
      } else {
        (function () {
          _0x111b3b.call(null, _0x2033ca);
        })();
      }
    };
    window.addEventListener("focus", this.focusListener);
  }
  function _0x3d453f(_0x272a12) {
    this.resizeListener = function () {
      if (Runtime.dynCall) {
        Runtime.dynCall("v", _0x272a12, []);
      } else {
        (function () {
          _0x111b3b.call(null, _0x272a12);
        })();
      }
    };
    window.addEventListener("resize", this.resizeListener);
  }
  function _0x3e9b48() {
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
  var _0x39eddb = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x1e35b1, _0x5a8528, _0x2859a4) {
      const _0x5b82c4 = new TextEncoder();
      const _0x3a6052 = _0x5b82c4.encode(_0x2859a4);
      const _0x3ca959 = function (_0xbc8dde, _0x76d9f9) {
        return _0x1123cc.apply(null, [_0x39eddb.onallocbuffer, _0xbc8dde, _0x76d9f9]);
      }(_0x1e35b1, _0x3a6052.length);
      _0x1c9190.set(_0x3a6052, _0x3ca959);
      (function (_0x48129c, _0x38416b, _0x33bf74) {
        _0x1d6d2d.apply(null, [_0x5a8528, _0x48129c, _0x38416b, _0x33bf74]);
      })(_0x1e35b1, _0x3ca959, _0x3a6052.length);
    },
    GetResponseHeaders: function (_0x2247a9, _0x2bf055) {
      if (_0x39eddb.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x2247a9 + ")");
      }
      var _0x185a7f = "";
      if (document && document.cookie) {
        var _0x530ddb = document.cookie.split(";");
        for (var _0x1ecafa = 0; _0x1ecafa < _0x530ddb.length; ++_0x1ecafa) {
          const _0x42691a = _0x530ddb[_0x1ecafa].trim();
          if (_0x42691a.length > 0) {
            _0x185a7f += "Set-Cookie:" + _0x42691a + "\n";
          }
        }
      }
      const _0x500627 = _0x39eddb.requestInstances[_0x2247a9].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x500627.forEach(_0x500386 => {
        const _0x420cfb = _0x500386.split(": ");
        const _0x5def4c = _0x420cfb.shift();
        const _0x27f36e = _0x420cfb.join(": ");
        if (_0x5def4c !== "content-length") {
          _0x185a7f += _0x5def4c + ":" + _0x27f36e + "\n";
        }
      });
      _0x39eddb.SendTextToCSharpSide(_0x2247a9, _0x2bf055, _0x185a7f);
    }
  };
  function _0x45ecd2(_0x2a048a) {
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x2a048a + ")");
    }
    _0x39eddb.requestInstances[_0x2a048a].abort();
  }
  function _0x5f5448(_0x5e1204, _0x12ff4c, _0x13e29c, _0x4f8547, _0x3bac2c) {
    var _0x8ac56a = new URL(_0x5d80c0(_0x12ff4c));
    var _0x591349 = _0x5d80c0(_0x5e1204);
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_Create (" + _0x39eddb.nextRequestId + ", " + _0x591349 + ", " + _0x8ac56a.toString() + ", " + _0x3bac2c + ")");
    }
    var _0x5d079a = new XMLHttpRequest();
    if (_0x13e29c && _0x4f8547) {
      var _0x49d9e9 = _0x5d80c0(_0x13e29c);
      var _0x381317 = _0x5d80c0(_0x4f8547);
      _0x5d079a.withCredentials = true;
      _0x5d079a.open(_0x591349, _0x8ac56a.toString(), true, _0x49d9e9, _0x381317);
    } else {
      _0x5d079a.withCredentials = _0x3bac2c;
      _0x5d079a.open(_0x591349, _0x8ac56a.toString(), true);
    }
    _0x5d079a.responseType = "arraybuffer";
    _0x39eddb.requestInstances[_0x39eddb.nextRequestId] = _0x5d079a;
    return _0x39eddb.nextRequestId++;
  }
  function _0x5a4002(_0xf50bc6) {
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_Release(" + _0xf50bc6 + ")");
    }
    delete _0x39eddb.requestInstances[_0xf50bc6];
  }
  function _0x393298(_0x398658, _0x231157, _0x3c60bd) {
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_Send(" + _0x398658 + ", " + _0x231157 + ", " + _0x3c60bd + ")");
    }
    var _0x24fe52 = _0x39eddb.requestInstances[_0x398658];
    try {
      if (_0x3c60bd > 0) {
        _0x24fe52.send(_0x1c9190.subarray(_0x231157, _0x231157 + _0x3c60bd));
      } else {
        _0x24fe52.send();
      }
    } catch (_0x1109be) {
      if (_0x39eddb.loglevel <= 4) {
        console.error("XHR_Send(" + _0x398658 + "): " + _0x1109be.name + " : " + _0x1109be.message);
      }
    }
  }
  function _0x5e09b7(_0x3fc8b2) {
    _0x39eddb.loglevel = _0x3fc8b2;
  }
  function _0x49f872(_0x4606f1, _0x564d23, _0x487a88) {
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x4606f1 + ")");
    }
    var _0x1b1229 = _0x39eddb.requestInstances[_0x4606f1];
    if (_0x1b1229) {
      if (_0x564d23) {
        _0x1b1229.onprogress = function _0x2cf7c6(_0x428025) {
          if (_0x39eddb.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x4606f1 + ", " + _0x428025.loaded + ", " + _0x428025.total + ")");
          }
          if (_0x428025.lengthComputable) {
            (function (_0x1920e5, _0x31b6de, _0x35e556) {
              _0x1d6d2d.apply(null, [_0x564d23, _0x1920e5, _0x31b6de, _0x35e556]);
            })(_0x4606f1, _0x428025.loaded, _0x428025.total);
          }
        };
      }
      if (_0x487a88) {
        _0x1b1229.upload.addEventListener("progress", function _0x51e3d8(_0x383682) {
          if (_0x39eddb.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x4606f1 + ", " + _0x383682.loaded + ", " + _0x383682.total + ")");
          }
          if (_0x383682.lengthComputable) {
            (function (_0x3768fe, _0x1dfefa, _0x308919) {
              _0x1d6d2d.apply(null, [_0x487a88, _0x3768fe, _0x1dfefa, _0x308919]);
            })(_0x4606f1, _0x383682.loaded, _0x383682.total);
          }
        }, true);
      }
    }
  }
  function _0x40f276(_0xe3323f, _0x3db7a9, _0x59d583) {
    var _0x41fbcc = _0x5d80c0(_0x3db7a9);
    var _0x59dabc = _0x5d80c0(_0x59d583);
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x41fbcc + ", " + _0x59dabc + ")");
    }
    if (_0x41fbcc != "Cookie") {
      _0x39eddb.requestInstances[_0xe3323f].setRequestHeader(_0x41fbcc, _0x59dabc);
    } else {
      var _0x1d721 = _0x59dabc.split(";");
      for (var _0x1543c7 = 0; _0x1543c7 < _0x1d721.length; _0x1543c7++) {
        document.cookie = _0x1d721[_0x1543c7];
      }
    }
  }
  function _0x36123b(_0x3994af, _0x16a767, _0x3cc99c, _0x139cb0, _0x539c4e, _0x4ee5cd, _0x4ee85c) {
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x3994af + ")");
    }
    _0x39eddb.onallocbuffer = _0x4ee85c;
    var _0x25ab4b = _0x39eddb.requestInstances[_0x3994af];
    _0x25ab4b.onreadystatechange = _0x1ae743 => {
      if (_0x39eddb.loglevel <= 1) {
        console.log(_0x3994af + " onreadystatechange(" + _0x25ab4b.readyState + ")");
      }
      switch (_0x25ab4b.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x39eddb.SendTextToCSharpSide(_0x3994af, _0x4ee5cd, "HTTP/1.1 " + _0x25ab4b.status + " " + _0x25ab4b.statusText + "\n");
            _0x39eddb.GetResponseHeaders(_0x3994af, _0x4ee5cd);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x25ab4b.onloadstart = _0x998187 => {
      if (_0x39eddb.loglevel <= 1) {
        console.log(_0x3994af + " onloadstart: " + _0x998187);
      }
    };
    _0x25ab4b.onload = function _0xec0cc7(_0x55791c) {
      if (_0x39eddb.loglevel <= 1) {
        console.log(_0x3994af + " onload(" + _0x25ab4b.status + ", " + _0x25ab4b.statusText + ")");
      }
      if (_0x16a767) {
        var _0x4d366b = 0;
        var _0x52d393 = 0;
        if (_0x25ab4b.response) {
          var _0x369ea4 = _0x25ab4b.response;
          _0x4d366b = _0x369ea4.byteLength;
          _0x39eddb.SendTextToCSharpSide(_0x3994af, _0x4ee5cd, "content-length:" + _0x4d366b + "\n\n");
          _0x52d393 = function (_0x9c460, _0x2e5096) {
            return _0x1123cc.apply(null, [_0x4ee85c, _0x9c460, _0x2e5096]);
          }(_0x3994af, _0x4d366b);
          var _0x153197 = new Uint8Array(_0x369ea4);
          var _0x4909f4 = _0x1c9190.subarray(_0x52d393, _0x52d393 + _0x4d366b);
          _0x4909f4.set(_0x153197);
        } else {
          _0x39eddb.SendTextToCSharpSide(_0x3994af, _0x4ee5cd, "content-length:0\n\n");
        }
        (function (_0x21634a, _0x5eb70b, _0x2fa9a2) {
          _0x1d6d2d.apply(null, [_0x16a767, _0x21634a, _0x5eb70b, _0x2fa9a2]);
        })(_0x3994af, _0x52d393, _0x4d366b);
      }
    };
    if (_0x3cc99c) {
      _0x25ab4b.onerror = function _0x5dad72(_0x367139) {
        function _0x21e6c8(_0x24e69e) {
          var _0x2ffa6f = _0x18f5b9(_0x24e69e) + 1;
          var _0x2a6b2b = _0x304a50(_0x2ffa6f);
          _0x299e6c(_0x24e69e, _0x1c9190, _0x2a6b2b, _0x2ffa6f);
          (function (_0x404866, _0x27586e) {
            _0x172fa8.apply(null, [_0x3cc99c, _0x404866, _0x27586e]);
          })(_0x3994af, _0x2a6b2b);
          _0x3d1553(_0x2a6b2b);
        }
        if (_0x367139.error) {
          _0x21e6c8(_0x367139.error);
        } else {
          _0x21e6c8("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x139cb0) {
      _0x25ab4b.ontimeout = function _0x4cf6f1(_0x51c00b) {
        (function (_0xaac0c2) {
          _0xc7c4be.apply(null, [_0x139cb0, _0xaac0c2]);
        })(_0x3994af);
      };
    }
    if (_0x539c4e) {
      _0x25ab4b.onabort = function _0x337db1(_0x4b0d87) {
        (function (_0x341400) {
          _0xc7c4be.apply(null, [_0x539c4e, _0x341400]);
        })(_0x3994af);
      };
    }
  }
  function _0x4b420d(_0x13a755, _0x5da218) {
    if (_0x39eddb.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x13a755 + ", " + _0x5da218 + ")");
    }
    _0x39eddb.requestInstances[_0x13a755].timeout = _0x5da218;
  }
  var _0x4c1238 = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
  };
  function _0x1e2feb(_0x4a7686) {
    return _0x304a50(_0x4a7686 + _0x4c1238.SIZE) + _0x4c1238.SIZE;
  }
  function _0x2f307(_0x1cea85) {
    this.excPtr = _0x1cea85;
    this.ptr = _0x1cea85 - _0x4c1238.SIZE;
    this.set_type = function (_0x13fe76) {
      _0x49ddaa[this.ptr + _0x4c1238.TYPE_OFFSET >> 2] = _0x13fe76;
    };
    this.get_type = function () {
      return _0x49ddaa[this.ptr + _0x4c1238.TYPE_OFFSET >> 2];
    };
    this.set_destructor = function (_0xc445ce) {
      _0x49ddaa[this.ptr + _0x4c1238.DESTRUCTOR_OFFSET >> 2] = _0xc445ce;
    };
    this.get_destructor = function () {
      return _0x49ddaa[this.ptr + _0x4c1238.DESTRUCTOR_OFFSET >> 2];
    };
    this.set_refcount = function (_0x2f74a4) {
      _0x49ddaa[this.ptr + _0x4c1238.REFCOUNT_OFFSET >> 2] = _0x2f74a4;
    };
    this.set_caught = function (_0x555187) {
      _0x555187 = _0x555187 ? 1 : 0;
      _0x1e6f7f[this.ptr + _0x4c1238.CAUGHT_OFFSET >> 0] = _0x555187;
    };
    this.get_caught = function () {
      return _0x1e6f7f[this.ptr + _0x4c1238.CAUGHT_OFFSET >> 0] != 0;
    };
    this.set_rethrown = function (_0x59cbb6) {
      _0x59cbb6 = _0x59cbb6 ? 1 : 0;
      _0x1e6f7f[this.ptr + _0x4c1238.RETHROWN_OFFSET >> 0] = _0x59cbb6;
    };
    this.get_rethrown = function () {
      return _0x1e6f7f[this.ptr + _0x4c1238.RETHROWN_OFFSET >> 0] != 0;
    };
    this.init = function (_0x273889, _0x7b7d4f) {
      this.set_type(_0x273889);
      this.set_destructor(_0x7b7d4f);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x3f5c02 = _0x49ddaa[this.ptr + _0x4c1238.REFCOUNT_OFFSET >> 2];
      _0x49ddaa[this.ptr + _0x4c1238.REFCOUNT_OFFSET >> 2] = _0x3f5c02 + 1;
    };
    this.release_ref = function () {
      var _0x5ccce2 = _0x49ddaa[this.ptr + _0x4c1238.REFCOUNT_OFFSET >> 2];
      _0x49ddaa[this.ptr + _0x4c1238.REFCOUNT_OFFSET >> 2] = _0x5ccce2 - 1;
      return _0x5ccce2 === 1;
    };
  }
  function _0x1f1386(_0x4c565d) {
    this.free = function () {
      _0x3d1553(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x4e8a59) {
      _0x49ddaa[this.ptr >> 2] = _0x4e8a59;
    };
    this.get_base_ptr = function () {
      return _0x49ddaa[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x59010c) {
      var _0x5e8ae3 = 4;
      _0x49ddaa[this.ptr + _0x5e8ae3 >> 2] = _0x59010c;
    };
    this.get_adjusted_ptr = function () {
      var _0xbe3ba0 = 4;
      return _0x49ddaa[this.ptr + _0xbe3ba0 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0xbb5c06 = _0x24dcf3(this.get_exception_info().get_type());
      if (_0xbb5c06) {
        return _0x49ddaa[this.get_base_ptr() >> 2];
      }
      var _0x113529 = this.get_adjusted_ptr();
      if (_0x113529 !== 0) {
        return _0x113529;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0x2f307(this.get_base_ptr());
    };
    if (_0x4c565d === undefined) {
      this.ptr = _0x304a50(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x4c565d;
    }
  }
  var _0x1970c0 = [];
  function _0x27ea1e(_0x1c76c0) {
    _0x1c76c0.add_ref();
  }
  var _0x5bc6fb = 0;
  function _0x36504f(_0x4b54a0) {
    var _0x14c877 = new _0x1f1386(_0x4b54a0);
    var _0x27ae53 = _0x14c877.get_exception_info();
    if (!_0x27ae53.get_caught()) {
      _0x27ae53.set_caught(true);
      _0x5bc6fb--;
    }
    _0x27ae53.set_rethrown(false);
    _0x1970c0.push(_0x14c877);
    _0x27ea1e(_0x27ae53);
    return _0x14c877.get_exception_ptr();
  }
  var _0x5c48b6 = 0;
  function _0x2af807(_0x1d962f) {
    return _0x3d1553(new _0x2f307(_0x1d962f).ptr);
  }
  function _0x4a4e56(_0x18578c) {
    if (_0x18578c.release_ref() && !_0x18578c.get_rethrown()) {
      var _0x497d06 = _0x18578c.get_destructor();
      if (_0x497d06) {
        (function (_0x470bea) {
          return _0x48001e.apply(null, [_0x497d06, _0x470bea]);
        })(_0x18578c.excPtr);
      }
      _0x2af807(_0x18578c.excPtr);
    }
  }
  function _0x3d2ca1() {
    _0xf302ad(0);
    var _0x862b06 = _0x1970c0.pop();
    _0x4a4e56(_0x862b06.get_exception_info());
    _0x862b06.free();
    _0x5c48b6 = 0;
  }
  function _0x1be206(_0x1a8c3d) {
    var _0x210033 = new _0x1f1386(_0x1a8c3d);
    var _0x2c629b = _0x210033.get_base_ptr();
    if (!_0x5c48b6) {
      _0x5c48b6 = _0x2c629b;
    }
    _0x210033.free();
    throw _0x2c629b;
  }
  function _0xa28d04() {
    var _0x5aec60 = _0x5c48b6;
    if (!_0x5aec60) {
      _0x395517(0);
      return 0;
    }
    var _0x458f7b = new _0x2f307(_0x5aec60);
    var _0xf0af1f = _0x458f7b.get_type();
    var _0x4995fc = new _0x1f1386();
    _0x4995fc.set_base_ptr(_0x5aec60);
    if (!_0xf0af1f) {
      _0x395517(0);
      return _0x4995fc.ptr | 0;
    }
    var _0x25b183 = Array.prototype.slice.call(arguments);
    var _0x3e68bb = _0xd24b5e();
    var _0x18b1ef = _0x9577d8(4);
    _0x49ddaa[_0x18b1ef >> 2] = _0x5aec60;
    for (var _0x12df9a = 0; _0x12df9a < _0x25b183.length; _0x12df9a++) {
      var _0x38decb = _0x25b183[_0x12df9a];
      if (_0x38decb === 0 || _0x38decb === _0xf0af1f) {
        break;
      }
      if (_0x219a2e(_0x38decb, _0xf0af1f, _0x18b1ef)) {
        var _0x2a59cd = _0x49ddaa[_0x18b1ef >> 2];
        if (_0x5aec60 !== _0x2a59cd) {
          _0x4995fc.set_adjusted_ptr(_0x2a59cd);
        }
        _0x395517(_0x38decb);
        return _0x4995fc.ptr | 0;
      }
    }
    _0x114b19(_0x3e68bb);
    _0x395517(_0xf0af1f);
    return _0x4995fc.ptr | 0;
  }
  function _0x406ef3() {
    var _0x2e1006 = _0x5c48b6;
    if (!_0x2e1006) {
      _0x395517(0);
      return 0;
    }
    var _0x3efb6f = new _0x2f307(_0x2e1006);
    var _0x4ad882 = _0x3efb6f.get_type();
    var _0x1a3ab7 = new _0x1f1386();
    _0x1a3ab7.set_base_ptr(_0x2e1006);
    if (!_0x4ad882) {
      _0x395517(0);
      return _0x1a3ab7.ptr | 0;
    }
    var _0x425285 = Array.prototype.slice.call(arguments);
    var _0xdf727e = _0xd24b5e();
    var _0x29d44e = _0x9577d8(4);
    _0x49ddaa[_0x29d44e >> 2] = _0x2e1006;
    for (var _0x1dc973 = 0; _0x1dc973 < _0x425285.length; _0x1dc973++) {
      var _0x4ff137 = _0x425285[_0x1dc973];
      if (_0x4ff137 === 0 || _0x4ff137 === _0x4ad882) {
        break;
      }
      if (_0x219a2e(_0x4ff137, _0x4ad882, _0x29d44e)) {
        var _0x437f12 = _0x49ddaa[_0x29d44e >> 2];
        if (_0x2e1006 !== _0x437f12) {
          _0x1a3ab7.set_adjusted_ptr(_0x437f12);
        }
        _0x395517(_0x4ff137);
        return _0x1a3ab7.ptr | 0;
      }
    }
    _0x114b19(_0xdf727e);
    _0x395517(_0x4ad882);
    return _0x1a3ab7.ptr | 0;
  }
  function _0x4ea96c() {
    var _0x552ee4 = _0x5c48b6;
    if (!_0x552ee4) {
      _0x395517(0);
      return 0;
    }
    var _0x5b063e = new _0x2f307(_0x552ee4);
    var _0x5bf911 = _0x5b063e.get_type();
    var _0x3fde20 = new _0x1f1386();
    _0x3fde20.set_base_ptr(_0x552ee4);
    if (!_0x5bf911) {
      _0x395517(0);
      return _0x3fde20.ptr | 0;
    }
    var _0x14e17d = Array.prototype.slice.call(arguments);
    var _0x2f8a8d = _0xd24b5e();
    var _0x5a7125 = _0x9577d8(4);
    _0x49ddaa[_0x5a7125 >> 2] = _0x552ee4;
    for (var _0x409da5 = 0; _0x409da5 < _0x14e17d.length; _0x409da5++) {
      var _0x1036ba = _0x14e17d[_0x409da5];
      if (_0x1036ba === 0 || _0x1036ba === _0x5bf911) {
        break;
      }
      if (_0x219a2e(_0x1036ba, _0x5bf911, _0x5a7125)) {
        var _0x20ba6c = _0x49ddaa[_0x5a7125 >> 2];
        if (_0x552ee4 !== _0x20ba6c) {
          _0x3fde20.set_adjusted_ptr(_0x20ba6c);
        }
        _0x395517(_0x1036ba);
        return _0x3fde20.ptr | 0;
      }
    }
    _0x114b19(_0x2f8a8d);
    _0x395517(_0x5bf911);
    return _0x3fde20.ptr | 0;
  }
  function _0x5672a8() {
    var _0x5009ad = _0x1970c0.pop();
    if (!_0x5009ad) {
      _0x24323c("no exception to throw");
    }
    var _0x551fab = _0x5009ad.get_exception_info();
    var _0x39976c = _0x5009ad.get_base_ptr();
    if (!_0x551fab.get_rethrown()) {
      _0x1970c0.push(_0x5009ad);
      _0x551fab.set_rethrown(true);
      _0x551fab.set_caught(false);
      _0x5bc6fb++;
    } else {
      _0x5009ad.free();
    }
    _0x5c48b6 = _0x39976c;
    throw _0x39976c;
  }
  function _0x1539d3(_0x9a2d52, _0x3aaee9, _0x31adaf) {
    var _0x2b5a9e = new _0x2f307(_0x9a2d52);
    _0x2b5a9e.init(_0x3aaee9, _0x31adaf);
    _0x5c48b6 = _0x9a2d52;
    _0x5bc6fb++;
    throw _0x9a2d52;
  }
  function _0x3488f4(_0x309532, _0x152ea7) {
    var _0x2443d6 = new Date(_0x49ddaa[_0x309532 >> 2] * 1000);
    _0x49ddaa[_0x152ea7 >> 2] = _0x2443d6.getUTCSeconds();
    _0x49ddaa[_0x152ea7 + 4 >> 2] = _0x2443d6.getUTCMinutes();
    _0x49ddaa[_0x152ea7 + 8 >> 2] = _0x2443d6.getUTCHours();
    _0x49ddaa[_0x152ea7 + 12 >> 2] = _0x2443d6.getUTCDate();
    _0x49ddaa[_0x152ea7 + 16 >> 2] = _0x2443d6.getUTCMonth();
    _0x49ddaa[_0x152ea7 + 20 >> 2] = _0x2443d6.getUTCFullYear() - 1900;
    _0x49ddaa[_0x152ea7 + 24 >> 2] = _0x2443d6.getUTCDay();
    _0x49ddaa[_0x152ea7 + 36 >> 2] = 0;
    _0x49ddaa[_0x152ea7 + 32 >> 2] = 0;
    var _0xc0a5e9 = Date.UTC(_0x2443d6.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x3649b9 = (_0x2443d6.getTime() - _0xc0a5e9) / 86400000 | 0;
    _0x49ddaa[_0x152ea7 + 28 >> 2] = _0x3649b9;
    if (!_0x3488f4.GMTString) {
      _0x3488f4.GMTString = _0xd6e6b0("GMT");
    }
    _0x49ddaa[_0x152ea7 + 40 >> 2] = _0x3488f4.GMTString;
    return _0x152ea7;
  }
  function _0x5637df(_0x500b33, _0xa68a1c) {
    return _0x3488f4(_0x500b33, _0xa68a1c);
  }
  function _0x432863() {
    if (_0x432863.called) {
      return;
    }
    _0x432863.called = true;
    var _0x54829e = new Date().getFullYear();
    var _0x3248ee = new Date(_0x54829e, 0, 1);
    var _0x5475e8 = new Date(_0x54829e, 6, 1);
    var _0x54baf1 = _0x3248ee.getTimezoneOffset();
    var _0xa30674 = _0x5475e8.getTimezoneOffset();
    var _0x1a5774 = Math.max(_0x54baf1, _0xa30674);
    _0x49ddaa[_0x6f5e63() >> 2] = _0x1a5774 * 60;
    _0x49ddaa[_0x1dafae() >> 2] = Number(_0x54baf1 != _0xa30674);
    function _0x1c9a05(_0x462e7a) {
      var _0x3a8567 = _0x462e7a.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x3a8567) {
        return _0x3a8567[1];
      } else {
        return "GMT";
      }
    }
    var _0x5e2293 = _0x1c9a05(_0x3248ee);
    var _0xd9d8a8 = _0x1c9a05(_0x5475e8);
    var _0x2723db = _0xd6e6b0(_0x5e2293);
    var _0x1bb113 = _0xd6e6b0(_0xd9d8a8);
    if (_0xa30674 < _0x54baf1) {
      _0x49ddaa[_0x35b629() >> 2] = _0x2723db;
      _0x49ddaa[_0x35b629() + 4 >> 2] = _0x1bb113;
    } else {
      _0x49ddaa[_0x35b629() >> 2] = _0x1bb113;
      _0x49ddaa[_0x35b629() + 4 >> 2] = _0x2723db;
    }
  }
  function _0x121d26(_0x1049db, _0x4c7254) {
    _0x432863();
    var _0x58e309 = new Date(_0x49ddaa[_0x1049db >> 2] * 1000);
    _0x49ddaa[_0x4c7254 >> 2] = _0x58e309.getSeconds();
    _0x49ddaa[_0x4c7254 + 4 >> 2] = _0x58e309.getMinutes();
    _0x49ddaa[_0x4c7254 + 8 >> 2] = _0x58e309.getHours();
    _0x49ddaa[_0x4c7254 + 12 >> 2] = _0x58e309.getDate();
    _0x49ddaa[_0x4c7254 + 16 >> 2] = _0x58e309.getMonth();
    _0x49ddaa[_0x4c7254 + 20 >> 2] = _0x58e309.getFullYear() - 1900;
    _0x49ddaa[_0x4c7254 + 24 >> 2] = _0x58e309.getDay();
    var _0xb5db9d = new Date(_0x58e309.getFullYear(), 0, 1);
    var _0x4c2d97 = (_0x58e309.getTime() - _0xb5db9d.getTime()) / 86400000 | 0;
    _0x49ddaa[_0x4c7254 + 28 >> 2] = _0x4c2d97;
    _0x49ddaa[_0x4c7254 + 36 >> 2] = -(_0x58e309.getTimezoneOffset() * 60);
    var _0x48b159 = new Date(_0x58e309.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x4753c9 = _0xb5db9d.getTimezoneOffset();
    var _0x4a1078 = (_0x48b159 != _0x4753c9 && _0x58e309.getTimezoneOffset() == Math.min(_0x4753c9, _0x48b159)) | 0;
    _0x49ddaa[_0x4c7254 + 32 >> 2] = _0x4a1078;
    var _0x459704 = _0x49ddaa[_0x35b629() + (_0x4a1078 ? 4 : 0) >> 2];
    _0x49ddaa[_0x4c7254 + 40 >> 2] = _0x459704;
    return _0x4c7254;
  }
  function _0x5372ea(_0x3d9cff, _0x5979c7) {
    return _0x121d26(_0x3d9cff, _0x5979c7);
  }
  var _0x5cb440 = {
    splitPath: function (_0x57b7b3) {
      var _0x137688 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x137688.exec(_0x57b7b3).slice(1);
    },
    normalizeArray: function (_0x5b67bd, _0x4f3689) {
      var _0x1ac8ec = 0;
      for (var _0x1c512d = _0x5b67bd.length - 1; _0x1c512d >= 0; _0x1c512d--) {
        var _0x35b49a = _0x5b67bd[_0x1c512d];
        if (_0x35b49a === ".") {
          _0x5b67bd.splice(_0x1c512d, 1);
        } else if (_0x35b49a === "..") {
          _0x5b67bd.splice(_0x1c512d, 1);
          _0x1ac8ec++;
        } else if (_0x1ac8ec) {
          _0x5b67bd.splice(_0x1c512d, 1);
          _0x1ac8ec--;
        }
      }
      if (_0x4f3689) {
        for (; _0x1ac8ec; _0x1ac8ec--) {
          _0x5b67bd.unshift("..");
        }
      }
      return _0x5b67bd;
    },
    normalize: function (_0x3978cd) {
      var _0x5aced8 = _0x3978cd.charAt(0) === "/";
      var _0x440eaf = _0x3978cd.substr(-1) === "/";
      _0x3978cd = _0x5cb440.normalizeArray(_0x3978cd.split("/").filter(function (_0x542d85) {
        return !!_0x542d85;
      }), !_0x5aced8).join("/");
      if (!_0x3978cd && !_0x5aced8) {
        _0x3978cd = ".";
      }
      if (_0x3978cd && _0x440eaf) {
        _0x3978cd += "/";
      }
      return (_0x5aced8 ? "/" : "") + _0x3978cd;
    },
    dirname: function (_0x283e2a) {
      var _0x345b4b = _0x5cb440.splitPath(_0x283e2a);
      var _0x25ed15 = _0x345b4b[0];
      var _0x2984f3 = _0x345b4b[1];
      if (!_0x25ed15 && !_0x2984f3) {
        return ".";
      }
      _0x2984f3 &&= _0x2984f3.substr(0, _0x2984f3.length - 1);
      return _0x25ed15 + _0x2984f3;
    },
    basename: function (_0x159666) {
      if (_0x159666 === "/") {
        return "/";
      }
      _0x159666 = _0x5cb440.normalize(_0x159666);
      _0x159666 = _0x159666.replace(/\/$/, "");
      var _0x119bec = _0x159666.lastIndexOf("/");
      if (_0x119bec === -1) {
        return _0x159666;
      }
      return _0x159666.substr(_0x119bec + 1);
    },
    extname: function (_0xe81f37) {
      return _0x5cb440.splitPath(_0xe81f37)[3];
    },
    join: function () {
      var _0x89557c = Array.prototype.slice.call(arguments, 0);
      return _0x5cb440.normalize(_0x89557c.join("/"));
    },
    join2: function (_0x2cf6dc, _0x42915c) {
      return _0x5cb440.normalize(_0x2cf6dc + "/" + _0x42915c);
    }
  };
  function _0x227634() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x1b161e = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x1b161e);
        return _0x1b161e[0];
      };
    } else if (_0xa8980b) {
      try {
        var _0x508f4 = require("crypto");
        return function () {
          return _0x508f4.randomBytes(1)[0];
        };
      } catch (_0x42dc68) {}
    }
    return function () {
      _0x24323c("randomDevice");
    };
  }
  var _0x41f34b = {
    resolve: function () {
      var _0x29941e = "";
      var _0x1c2b65 = false;
      for (var _0x1a6ab3 = arguments.length - 1; _0x1a6ab3 >= -1 && !_0x1c2b65; _0x1a6ab3--) {
        var _0x5453cb = _0x1a6ab3 >= 0 ? arguments[_0x1a6ab3] : _0x379d8a.cwd();
        if (typeof _0x5453cb !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x5453cb) {
          return "";
        }
        _0x29941e = _0x5453cb + "/" + _0x29941e;
        _0x1c2b65 = _0x5453cb.charAt(0) === "/";
      }
      _0x29941e = _0x5cb440.normalizeArray(_0x29941e.split("/").filter(function (_0xf9d5e4) {
        return !!_0xf9d5e4;
      }), !_0x1c2b65).join("/");
      return (_0x1c2b65 ? "/" : "") + _0x29941e || ".";
    },
    relative: function (_0x411891, _0x15ba97) {
      _0x411891 = _0x41f34b.resolve(_0x411891).substr(1);
      _0x15ba97 = _0x41f34b.resolve(_0x15ba97).substr(1);
      function _0x2e701d(_0x3af15d) {
        var _0x3e7e75 = 0;
        for (; _0x3e7e75 < _0x3af15d.length; _0x3e7e75++) {
          if (_0x3af15d[_0x3e7e75] !== "") {
            break;
          }
        }
        var _0xb2197e = _0x3af15d.length - 1;
        for (; _0xb2197e >= 0; _0xb2197e--) {
          if (_0x3af15d[_0xb2197e] !== "") {
            break;
          }
        }
        if (_0x3e7e75 > _0xb2197e) {
          return [];
        }
        return _0x3af15d.slice(_0x3e7e75, _0xb2197e - _0x3e7e75 + 1);
      }
      var _0x1873c5 = _0x2e701d(_0x411891.split("/"));
      var _0x70fc = _0x2e701d(_0x15ba97.split("/"));
      var _0x238b19 = Math.min(_0x1873c5.length, _0x70fc.length);
      var _0x233a39 = _0x238b19;
      for (var _0x1e8df4 = 0; _0x1e8df4 < _0x238b19; _0x1e8df4++) {
        if (_0x1873c5[_0x1e8df4] !== _0x70fc[_0x1e8df4]) {
          _0x233a39 = _0x1e8df4;
          break;
        }
      }
      var _0x533f66 = [];
      for (var _0x1e8df4 = _0x233a39; _0x1e8df4 < _0x1873c5.length; _0x1e8df4++) {
        _0x533f66.push("..");
      }
      _0x533f66 = _0x533f66.concat(_0x70fc.slice(_0x233a39));
      return _0x533f66.join("/");
    }
  };
  var _0x38c05b = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x150d9f, _0x2f88c8) {
      _0x38c05b.ttys[_0x150d9f] = {
        input: [],
        output: [],
        ops: _0x2f88c8
      };
      _0x379d8a.registerDevice(_0x150d9f, _0x38c05b.stream_ops);
    },
    stream_ops: {
      open: function (_0x4d30be) {
        var _0x4a108c = _0x38c05b.ttys[_0x4d30be.node.rdev];
        if (!_0x4a108c) {
          throw new _0x379d8a.ErrnoError(43);
        }
        _0x4d30be.tty = _0x4a108c;
        _0x4d30be.seekable = false;
      },
      close: function (_0x45c818) {
        _0x45c818.tty.ops.flush(_0x45c818.tty);
      },
      flush: function (_0x3acbb7) {
        _0x3acbb7.tty.ops.flush(_0x3acbb7.tty);
      },
      read: function (_0x448825, _0x4cba5f, _0x4ccde6, _0x27529f, _0x434e2b) {
        if (!_0x448825.tty || !_0x448825.tty.ops.get_char) {
          throw new _0x379d8a.ErrnoError(60);
        }
        var _0x19bea1 = 0;
        for (var _0x36a588 = 0; _0x36a588 < _0x27529f; _0x36a588++) {
          var _0x182ee3;
          try {
            _0x182ee3 = _0x448825.tty.ops.get_char(_0x448825.tty);
          } catch (_0x11552b) {
            throw new _0x379d8a.ErrnoError(29);
          }
          if (_0x182ee3 === undefined && _0x19bea1 === 0) {
            throw new _0x379d8a.ErrnoError(6);
          }
          if (_0x182ee3 === null || _0x182ee3 === undefined) {
            break;
          }
          _0x19bea1++;
          _0x4cba5f[_0x4ccde6 + _0x36a588] = _0x182ee3;
        }
        if (_0x19bea1) {
          _0x448825.node.timestamp = Date.now();
        }
        return _0x19bea1;
      },
      write: function (_0x2fb7e0, _0x33410a, _0x223ba0, _0x32c741, _0x552157) {
        if (!_0x2fb7e0.tty || !_0x2fb7e0.tty.ops.put_char) {
          throw new _0x379d8a.ErrnoError(60);
        }
        try {
          for (var _0x4f9dc5 = 0; _0x4f9dc5 < _0x32c741; _0x4f9dc5++) {
            _0x2fb7e0.tty.ops.put_char(_0x2fb7e0.tty, _0x33410a[_0x223ba0 + _0x4f9dc5]);
          }
        } catch (_0x55985a) {
          throw new _0x379d8a.ErrnoError(29);
        }
        if (_0x32c741) {
          _0x2fb7e0.node.timestamp = Date.now();
        }
        return _0x4f9dc5;
      }
    },
    default_tty_ops: {
      get_char: function (_0x13e183) {
        if (!_0x13e183.input.length) {
          var _0x2c1b17 = null;
          if (_0xa8980b) {
            var _0x37b643 = 256;
            var _0x399abe = Buffer.alloc ? Buffer.alloc(_0x37b643) : new Buffer(_0x37b643);
            var _0x5e4ea5 = 0;
            try {
              _0x5e4ea5 = _0xed9771.readSync(process.stdin.fd, _0x399abe, 0, _0x37b643, null);
            } catch (_0xbc498b) {
              if (_0xbc498b.toString().includes("EOF")) {
                _0x5e4ea5 = 0;
              } else {
                throw _0xbc498b;
              }
            }
            if (_0x5e4ea5 > 0) {
              _0x2c1b17 = _0x399abe.slice(0, _0x5e4ea5).toString("utf-8");
            } else {
              _0x2c1b17 = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x2c1b17 = window.prompt("Input: ");
            if (_0x2c1b17 !== null) {
              _0x2c1b17 += "\n";
            }
          } else if (typeof readline == "function") {
            _0x2c1b17 = readline();
            if (_0x2c1b17 !== null) {
              _0x2c1b17 += "\n";
            }
          }
          if (!_0x2c1b17) {
            return null;
          }
          _0x13e183.input = _0x3c7b26(_0x2c1b17, true);
        }
        return _0x13e183.input.shift();
      },
      put_char: function (_0x49dc04, _0x35ca4f) {
        if (_0x35ca4f === null || _0x35ca4f === 10) {
          _0x2014a7(_0x17265e(_0x49dc04.output, 0));
          _0x49dc04.output = [];
        } else if (_0x35ca4f != 0) {
          _0x49dc04.output.push(_0x35ca4f);
        }
      },
      flush: function (_0x5550a9) {
        if (_0x5550a9.output && _0x5550a9.output.length > 0) {
          _0x2014a7(_0x17265e(_0x5550a9.output, 0));
          _0x5550a9.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x7f6248, _0x173ca8) {
        if (_0x173ca8 === null || _0x173ca8 === 10) {
          _0xf7c01a(_0x17265e(_0x7f6248.output, 0));
          _0x7f6248.output = [];
        } else if (_0x173ca8 != 0) {
          _0x7f6248.output.push(_0x173ca8);
        }
      },
      flush: function (_0x5086af) {
        if (_0x5086af.output && _0x5086af.output.length > 0) {
          _0xf7c01a(_0x17265e(_0x5086af.output, 0));
          _0x5086af.output = [];
        }
      }
    }
  };
  function _0x337183(_0x2efaeb) {
    var _0x2f1a82 = _0x23a686(_0x2efaeb, 65536);
    var _0x757e4d = _0x304a50(_0x2f1a82);
    while (_0x2efaeb < _0x2f1a82) {
      _0x1e6f7f[_0x757e4d + _0x2efaeb++] = 0;
    }
    return _0x757e4d;
  }
  var _0xbe4805 = {
    ops_table: null,
    mount: function (_0x1b03e4) {
      return _0xbe4805.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x300807, _0x14ecab, _0x3a7a53, _0x33c804) {
      if (_0x379d8a.isBlkdev(_0x3a7a53) || _0x379d8a.isFIFO(_0x3a7a53)) {
        throw new _0x379d8a.ErrnoError(63);
      }
      if (!_0xbe4805.ops_table) {
        _0xbe4805.ops_table = {
          dir: {
            node: {
              getattr: _0xbe4805.node_ops.getattr,
              setattr: _0xbe4805.node_ops.setattr,
              lookup: _0xbe4805.node_ops.lookup,
              mknod: _0xbe4805.node_ops.mknod,
              rename: _0xbe4805.node_ops.rename,
              unlink: _0xbe4805.node_ops.unlink,
              rmdir: _0xbe4805.node_ops.rmdir,
              readdir: _0xbe4805.node_ops.readdir,
              symlink: _0xbe4805.node_ops.symlink
            },
            stream: {
              llseek: _0xbe4805.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0xbe4805.node_ops.getattr,
              setattr: _0xbe4805.node_ops.setattr
            },
            stream: {
              llseek: _0xbe4805.stream_ops.llseek,
              read: _0xbe4805.stream_ops.read,
              write: _0xbe4805.stream_ops.write,
              allocate: _0xbe4805.stream_ops.allocate,
              mmap: _0xbe4805.stream_ops.mmap,
              msync: _0xbe4805.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0xbe4805.node_ops.getattr,
              setattr: _0xbe4805.node_ops.setattr,
              readlink: _0xbe4805.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0xbe4805.node_ops.getattr,
              setattr: _0xbe4805.node_ops.setattr
            },
            stream: _0x379d8a.chrdev_stream_ops
          }
        };
      }
      var _0x327e35 = _0x379d8a.createNode(_0x300807, _0x14ecab, _0x3a7a53, _0x33c804);
      if (_0x379d8a.isDir(_0x327e35.mode)) {
        _0x327e35.node_ops = _0xbe4805.ops_table.dir.node;
        _0x327e35.stream_ops = _0xbe4805.ops_table.dir.stream;
        _0x327e35.contents = {};
      } else if (_0x379d8a.isFile(_0x327e35.mode)) {
        _0x327e35.node_ops = _0xbe4805.ops_table.file.node;
        _0x327e35.stream_ops = _0xbe4805.ops_table.file.stream;
        _0x327e35.usedBytes = 0;
        _0x327e35.contents = null;
      } else if (_0x379d8a.isLink(_0x327e35.mode)) {
        _0x327e35.node_ops = _0xbe4805.ops_table.link.node;
        _0x327e35.stream_ops = _0xbe4805.ops_table.link.stream;
      } else if (_0x379d8a.isChrdev(_0x327e35.mode)) {
        _0x327e35.node_ops = _0xbe4805.ops_table.chrdev.node;
        _0x327e35.stream_ops = _0xbe4805.ops_table.chrdev.stream;
      }
      _0x327e35.timestamp = Date.now();
      if (_0x300807) {
        _0x300807.contents[_0x14ecab] = _0x327e35;
        _0x300807.timestamp = _0x327e35.timestamp;
      }
      return _0x327e35;
    },
    getFileDataAsTypedArray: function (_0x43601d) {
      if (!_0x43601d.contents) {
        return new Uint8Array(0);
      }
      if (_0x43601d.contents.subarray) {
        return _0x43601d.contents.subarray(0, _0x43601d.usedBytes);
      }
      return new Uint8Array(_0x43601d.contents);
    },
    expandFileStorage: function (_0x3eb2d9, _0x43da85) {
      var _0x39fdbe = _0x3eb2d9.contents ? _0x3eb2d9.contents.length : 0;
      if (_0x39fdbe >= _0x43da85) {
        return;
      }
      var _0x80c0c = 1048576;
      _0x43da85 = Math.max(_0x43da85, _0x39fdbe * (_0x39fdbe < _0x80c0c ? 2 : 1.125) >>> 0);
      if (_0x39fdbe != 0) {
        _0x43da85 = Math.max(_0x43da85, 256);
      }
      var _0x54a01c = _0x3eb2d9.contents;
      _0x3eb2d9.contents = new Uint8Array(_0x43da85);
      if (_0x3eb2d9.usedBytes > 0) {
        _0x3eb2d9.contents.set(_0x54a01c.subarray(0, _0x3eb2d9.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x360fad, _0x5da14f) {
      if (_0x360fad.usedBytes == _0x5da14f) {
        return;
      }
      if (_0x5da14f == 0) {
        _0x360fad.contents = null;
        _0x360fad.usedBytes = 0;
      } else {
        var _0x12ff84 = _0x360fad.contents;
        _0x360fad.contents = new Uint8Array(_0x5da14f);
        if (_0x12ff84) {
          _0x360fad.contents.set(_0x12ff84.subarray(0, Math.min(_0x5da14f, _0x360fad.usedBytes)));
        }
        _0x360fad.usedBytes = _0x5da14f;
      }
    },
    node_ops: {
      getattr: function (_0x598a0b) {
        var _0x1c9b4d = {};
        _0x1c9b4d.dev = _0x379d8a.isChrdev(_0x598a0b.mode) ? _0x598a0b.id : 1;
        _0x1c9b4d.ino = _0x598a0b.id;
        _0x1c9b4d.mode = _0x598a0b.mode;
        _0x1c9b4d.nlink = 1;
        _0x1c9b4d.uid = 0;
        _0x1c9b4d.gid = 0;
        _0x1c9b4d.rdev = _0x598a0b.rdev;
        if (_0x379d8a.isDir(_0x598a0b.mode)) {
          _0x1c9b4d.size = 4096;
        } else if (_0x379d8a.isFile(_0x598a0b.mode)) {
          _0x1c9b4d.size = _0x598a0b.usedBytes;
        } else if (_0x379d8a.isLink(_0x598a0b.mode)) {
          _0x1c9b4d.size = _0x598a0b.link.length;
        } else {
          _0x1c9b4d.size = 0;
        }
        _0x1c9b4d.atime = new Date(_0x598a0b.timestamp);
        _0x1c9b4d.mtime = new Date(_0x598a0b.timestamp);
        _0x1c9b4d.ctime = new Date(_0x598a0b.timestamp);
        _0x1c9b4d.blksize = 4096;
        _0x1c9b4d.blocks = Math.ceil(_0x1c9b4d.size / _0x1c9b4d.blksize);
        return _0x1c9b4d;
      },
      setattr: function (_0x5836aa, _0x454abc) {
        if (_0x454abc.mode !== undefined) {
          _0x5836aa.mode = _0x454abc.mode;
        }
        if (_0x454abc.timestamp !== undefined) {
          _0x5836aa.timestamp = _0x454abc.timestamp;
        }
        if (_0x454abc.size !== undefined) {
          _0xbe4805.resizeFileStorage(_0x5836aa, _0x454abc.size);
        }
      },
      lookup: function (_0x1fdfd7, _0x683d38) {
        throw _0x379d8a.genericErrors[44];
      },
      mknod: function (_0x1635fe, _0x3745d3, _0xea95da, _0x11ec36) {
        return _0xbe4805.createNode(_0x1635fe, _0x3745d3, _0xea95da, _0x11ec36);
      },
      rename: function (_0x37a3dd, _0x3538c8, _0x369d9a) {
        if (_0x379d8a.isDir(_0x37a3dd.mode)) {
          var _0x38863a;
          try {
            _0x38863a = _0x379d8a.lookupNode(_0x3538c8, _0x369d9a);
          } catch (_0x2aa7d0) {}
          if (_0x38863a) {
            for (var _0x52dcac in _0x38863a.contents) {
              throw new _0x379d8a.ErrnoError(55);
            }
          }
        }
        delete _0x37a3dd.parent.contents[_0x37a3dd.name];
        _0x37a3dd.parent.timestamp = Date.now();
        _0x37a3dd.name = _0x369d9a;
        _0x3538c8.contents[_0x369d9a] = _0x37a3dd;
        _0x3538c8.timestamp = _0x37a3dd.parent.timestamp;
        _0x37a3dd.parent = _0x3538c8;
      },
      unlink: function (_0x52b312, _0x2e1140) {
        delete _0x52b312.contents[_0x2e1140];
        _0x52b312.timestamp = Date.now();
      },
      rmdir: function (_0xcc4e7f, _0x14e855) {
        var _0xd54732 = _0x379d8a.lookupNode(_0xcc4e7f, _0x14e855);
        for (var _0x131277 in _0xd54732.contents) {
          throw new _0x379d8a.ErrnoError(55);
        }
        delete _0xcc4e7f.contents[_0x14e855];
        _0xcc4e7f.timestamp = Date.now();
      },
      readdir: function (_0x252773) {
        var _0x76ff22 = [".", ".."];
        for (var _0x1dc016 in _0x252773.contents) {
          if (!_0x252773.contents.hasOwnProperty(_0x1dc016)) {
            continue;
          }
          _0x76ff22.push(_0x1dc016);
        }
        return _0x76ff22;
      },
      symlink: function (_0x471d4c, _0x371feb, _0x324944) {
        var _0x2d2f18 = _0xbe4805.createNode(_0x471d4c, _0x371feb, 41471, 0);
        _0x2d2f18.link = _0x324944;
        return _0x2d2f18;
      },
      readlink: function (_0x47b9f4) {
        if (!_0x379d8a.isLink(_0x47b9f4.mode)) {
          throw new _0x379d8a.ErrnoError(28);
        }
        return _0x47b9f4.link;
      }
    },
    stream_ops: {
      read: function (_0x41865f, _0x391dcf, _0x35a380, _0x501ced, _0x2287f8) {
        var _0x2df136 = _0x41865f.node.contents;
        if (_0x2287f8 >= _0x41865f.node.usedBytes) {
          return 0;
        }
        var _0x4e986b = Math.min(_0x41865f.node.usedBytes - _0x2287f8, _0x501ced);
        if (_0x4e986b > 8 && _0x2df136.subarray) {
          _0x391dcf.set(_0x2df136.subarray(_0x2287f8, _0x2287f8 + _0x4e986b), _0x35a380);
        } else {
          for (var _0xdd9d82 = 0; _0xdd9d82 < _0x4e986b; _0xdd9d82++) {
            _0x391dcf[_0x35a380 + _0xdd9d82] = _0x2df136[_0x2287f8 + _0xdd9d82];
          }
        }
        return _0x4e986b;
      },
      write: function (_0x195b27, _0x77a3ad, _0x407482, _0x48bccd, _0x74b726, _0x1e827a) {
        if (_0x77a3ad.buffer === _0x1e6f7f.buffer) {
          _0x1e827a = false;
        }
        if (!_0x48bccd) {
          return 0;
        }
        var _0x900c1e = _0x195b27.node;
        _0x900c1e.timestamp = Date.now();
        if (_0x77a3ad.subarray && (!_0x900c1e.contents || _0x900c1e.contents.subarray)) {
          if (_0x1e827a) {
            _0x900c1e.contents = _0x77a3ad.subarray(_0x407482, _0x407482 + _0x48bccd);
            _0x900c1e.usedBytes = _0x48bccd;
            return _0x48bccd;
          } else if (_0x900c1e.usedBytes === 0 && _0x74b726 === 0) {
            _0x900c1e.contents = _0x77a3ad.slice(_0x407482, _0x407482 + _0x48bccd);
            _0x900c1e.usedBytes = _0x48bccd;
            return _0x48bccd;
          } else if (_0x74b726 + _0x48bccd <= _0x900c1e.usedBytes) {
            _0x900c1e.contents.set(_0x77a3ad.subarray(_0x407482, _0x407482 + _0x48bccd), _0x74b726);
            return _0x48bccd;
          }
        }
        _0xbe4805.expandFileStorage(_0x900c1e, _0x74b726 + _0x48bccd);
        if (_0x900c1e.contents.subarray && _0x77a3ad.subarray) {
          _0x900c1e.contents.set(_0x77a3ad.subarray(_0x407482, _0x407482 + _0x48bccd), _0x74b726);
        } else {
          for (var _0x7a1341 = 0; _0x7a1341 < _0x48bccd; _0x7a1341++) {
            _0x900c1e.contents[_0x74b726 + _0x7a1341] = _0x77a3ad[_0x407482 + _0x7a1341];
          }
        }
        _0x900c1e.usedBytes = Math.max(_0x900c1e.usedBytes, _0x74b726 + _0x48bccd);
        return _0x48bccd;
      },
      llseek: function (_0x4eb3a6, _0x140574, _0x50d7d6) {
        var _0xe739c4 = _0x140574;
        if (_0x50d7d6 === 1) {
          _0xe739c4 += _0x4eb3a6.position;
        } else if (_0x50d7d6 === 2) {
          if (_0x379d8a.isFile(_0x4eb3a6.node.mode)) {
            _0xe739c4 += _0x4eb3a6.node.usedBytes;
          }
        }
        if (_0xe739c4 < 0) {
          throw new _0x379d8a.ErrnoError(28);
        }
        return _0xe739c4;
      },
      allocate: function (_0x2850ff, _0x3108cf, _0x58e49e) {
        _0xbe4805.expandFileStorage(_0x2850ff.node, _0x3108cf + _0x58e49e);
        _0x2850ff.node.usedBytes = Math.max(_0x2850ff.node.usedBytes, _0x3108cf + _0x58e49e);
      },
      mmap: function (_0x38b356, _0x58119d, _0x243e12, _0x4e0f9a, _0x3bd5c3, _0x354a9e) {
        if (_0x58119d !== 0) {
          throw new _0x379d8a.ErrnoError(28);
        }
        if (!_0x379d8a.isFile(_0x38b356.node.mode)) {
          throw new _0x379d8a.ErrnoError(43);
        }
        var _0x4ab607;
        var _0x114327;
        var _0xa545e4 = _0x38b356.node.contents;
        if (!(_0x354a9e & 2) && _0xa545e4.buffer === _0x154bbd) {
          _0x114327 = false;
          _0x4ab607 = _0xa545e4.byteOffset;
        } else {
          if (_0x4e0f9a > 0 || _0x4e0f9a + _0x243e12 < _0xa545e4.length) {
            if (_0xa545e4.subarray) {
              _0xa545e4 = _0xa545e4.subarray(_0x4e0f9a, _0x4e0f9a + _0x243e12);
            } else {
              _0xa545e4 = Array.prototype.slice.call(_0xa545e4, _0x4e0f9a, _0x4e0f9a + _0x243e12);
            }
          }
          _0x114327 = true;
          _0x4ab607 = _0x337183(_0x243e12);
          if (!_0x4ab607) {
            throw new _0x379d8a.ErrnoError(48);
          }
          _0x1e6f7f.set(_0xa545e4, _0x4ab607);
        }
        return {
          ptr: _0x4ab607,
          allocated: _0x114327
        };
      },
      msync: function (_0x453529, _0xf2a5a7, _0x5a3404, _0x177c60, _0x5c0669) {
        if (!_0x379d8a.isFile(_0x453529.node.mode)) {
          throw new _0x379d8a.ErrnoError(43);
        }
        if (_0x5c0669 & 2) {
          return 0;
        }
        var _0x5ee1a8 = _0xbe4805.stream_ops.write(_0x453529, _0xf2a5a7, 0, _0x177c60, _0x5a3404, false);
        return 0;
      }
    }
  };
  var _0x1ae0b4 = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x9c8e69 = null;
      if (typeof window === "object") {
        _0x9c8e69 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x5e3281(_0x9c8e69, "IDBFS used, but indexedDB not supported");
      return _0x9c8e69;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x15c0a9) {
      return _0xbe4805.mount.apply(null, arguments);
    },
    syncfs: function (_0x1ee66d, _0x4dca13, _0x1ac11c) {
      _0x1ae0b4.getLocalSet(_0x1ee66d, function (_0x9b6fd2, _0x1f4ea4) {
        if (_0x9b6fd2) {
          return _0x1ac11c(_0x9b6fd2);
        }
        _0x1ae0b4.getRemoteSet(_0x1ee66d, function (_0x1fd34a, _0x5c1177) {
          if (_0x1fd34a) {
            return _0x1ac11c(_0x1fd34a);
          }
          var _0xa94aa7 = _0x4dca13 ? _0x5c1177 : _0x1f4ea4;
          var _0x49e5a1 = _0x4dca13 ? _0x1f4ea4 : _0x5c1177;
          _0x1ae0b4.reconcile(_0xa94aa7, _0x49e5a1, _0x1ac11c);
        });
      });
    },
    getDB: function (_0x6b139d, _0xd37a4) {
      var _0x217925 = _0x1ae0b4.dbs[_0x6b139d];
      if (_0x217925) {
        return _0xd37a4(null, _0x217925);
      }
      var _0xbce98d;
      try {
        _0xbce98d = _0x1ae0b4.indexedDB().open(_0x6b139d, _0x1ae0b4.DB_VERSION);
      } catch (_0x2ef490) {
        return _0xd37a4(_0x2ef490);
      }
      if (!_0xbce98d) {
        return _0xd37a4("Unable to connect to IndexedDB");
      }
      _0xbce98d.onupgradeneeded = function (_0x2c8f01) {
        var _0x3b8b77 = _0x2c8f01.target.result;
        var _0x29bc54 = _0x2c8f01.target.transaction;
        var _0x3112a0;
        if (_0x3b8b77.objectStoreNames.contains(_0x1ae0b4.DB_STORE_NAME)) {
          _0x3112a0 = _0x29bc54.objectStore(_0x1ae0b4.DB_STORE_NAME);
        } else {
          _0x3112a0 = _0x3b8b77.createObjectStore(_0x1ae0b4.DB_STORE_NAME);
        }
        if (!_0x3112a0.indexNames.contains("timestamp")) {
          _0x3112a0.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0xbce98d.onsuccess = function () {
        _0x217925 = _0xbce98d.result;
        _0x1ae0b4.dbs[_0x6b139d] = _0x217925;
        _0xd37a4(null, _0x217925);
      };
      _0xbce98d.onerror = function (_0x3b8b2e) {
        _0xd37a4(this.error);
        _0x3b8b2e.preventDefault();
      };
    },
    getLocalSet: function (_0x577595, _0x54d9bc) {
      var _0x499374 = {};
      function _0x2c0a5b(_0x41d9a3) {
        return _0x41d9a3 !== "." && _0x41d9a3 !== "..";
      }
      function _0x5923be(_0x1d6407) {
        return function (_0x29a218) {
          return _0x5cb440.join2(_0x1d6407, _0x29a218);
        };
      }
      var _0x363629 = _0x379d8a.readdir(_0x577595.mountpoint).filter(_0x2c0a5b).map(_0x5923be(_0x577595.mountpoint));
      while (_0x363629.length) {
        var _0x443ed8 = _0x363629.pop();
        var _0x5d35c1;
        try {
          _0x5d35c1 = _0x379d8a.stat(_0x443ed8);
        } catch (_0x3667b3) {
          return _0x54d9bc(_0x3667b3);
        }
        if (_0x379d8a.isDir(_0x5d35c1.mode)) {
          _0x363629.push.apply(_0x363629, _0x379d8a.readdir(_0x443ed8).filter(_0x2c0a5b).map(_0x5923be(_0x443ed8)));
        }
        _0x499374[_0x443ed8] = {
          timestamp: _0x5d35c1.mtime
        };
      }
      return _0x54d9bc(null, {
        type: "local",
        entries: _0x499374
      });
    },
    getRemoteSet: function (_0x190011, _0x2f379f) {
      var _0x36f17e = {};
      _0x1ae0b4.getDB(_0x190011.mountpoint, function (_0x3b20e1, _0xe972f1) {
        if (_0x3b20e1) {
          return _0x2f379f(_0x3b20e1);
        }
        try {
          var _0x437817 = _0xe972f1.transaction([_0x1ae0b4.DB_STORE_NAME], "readonly");
          _0x437817.onerror = function (_0x1e6685) {
            _0x2f379f(this.error);
            _0x1e6685.preventDefault();
          };
          var _0x4f1be5 = _0x437817.objectStore(_0x1ae0b4.DB_STORE_NAME);
          var _0x360db6 = _0x4f1be5.index("timestamp");
          _0x360db6.openKeyCursor().onsuccess = function (_0x5451c4) {
            var _0x4fd417 = _0x5451c4.target.result;
            if (!_0x4fd417) {
              return _0x2f379f(null, {
                type: "remote",
                db: _0xe972f1,
                entries: _0x36f17e
              });
            }
            _0x36f17e[_0x4fd417.primaryKey] = {
              timestamp: _0x4fd417.key
            };
            _0x4fd417.continue();
          };
        } catch (_0x34e776) {
          return _0x2f379f(_0x34e776);
        }
      });
    },
    loadLocalEntry: function (_0x17cc62, _0x568fa2) {
      var _0x4bc424;
      var _0x249ae0;
      try {
        var _0x3b6fc0 = _0x379d8a.lookupPath(_0x17cc62);
        _0x249ae0 = _0x3b6fc0.node;
        _0x4bc424 = _0x379d8a.stat(_0x17cc62);
      } catch (_0x5d7d24) {
        return _0x568fa2(_0x5d7d24);
      }
      if (_0x379d8a.isDir(_0x4bc424.mode)) {
        return _0x568fa2(null, {
          timestamp: _0x4bc424.mtime,
          mode: _0x4bc424.mode
        });
      } else if (_0x379d8a.isFile(_0x4bc424.mode)) {
        _0x249ae0.contents = _0xbe4805.getFileDataAsTypedArray(_0x249ae0);
        return _0x568fa2(null, {
          timestamp: _0x4bc424.mtime,
          mode: _0x4bc424.mode,
          contents: _0x249ae0.contents
        });
      } else {
        return _0x568fa2(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x29bf35, _0x5004ed, _0x34a58d) {
      try {
        if (_0x379d8a.isDir(_0x5004ed.mode)) {
          _0x379d8a.mkdirTree(_0x29bf35, _0x5004ed.mode);
        } else if (_0x379d8a.isFile(_0x5004ed.mode)) {
          _0x379d8a.writeFile(_0x29bf35, _0x5004ed.contents, {
            canOwn: true
          });
        } else {
          return _0x34a58d(new Error("node type not supported"));
        }
        _0x379d8a.chmod(_0x29bf35, _0x5004ed.mode);
        _0x379d8a.utime(_0x29bf35, _0x5004ed.timestamp, _0x5004ed.timestamp);
      } catch (_0x22b131) {
        return _0x34a58d(_0x22b131);
      }
      _0x34a58d(null);
    },
    removeLocalEntry: function (_0x57d3bc, _0x45fc4b) {
      try {
        var _0x123c3a = _0x379d8a.lookupPath(_0x57d3bc);
        var _0x2cb586 = _0x379d8a.stat(_0x57d3bc);
        if (_0x379d8a.isDir(_0x2cb586.mode)) {
          _0x379d8a.rmdir(_0x57d3bc);
        } else if (_0x379d8a.isFile(_0x2cb586.mode)) {
          _0x379d8a.unlink(_0x57d3bc);
        }
      } catch (_0x5d4865) {
        return _0x45fc4b(_0x5d4865);
      }
      _0x45fc4b(null);
    },
    loadRemoteEntry: function (_0x68949d, _0x246670, _0x3d5c4f) {
      var _0x7d9e78 = _0x68949d.get(_0x246670);
      _0x7d9e78.onsuccess = function (_0x2fff7f) {
        _0x3d5c4f(null, _0x2fff7f.target.result);
      };
      _0x7d9e78.onerror = function (_0x2a4927) {
        _0x3d5c4f(this.error);
        _0x2a4927.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x2ab18a, _0x5c2769, _0x3cfd35, _0x2deade) {
      var _0x11a105 = _0x2ab18a.put(_0x3cfd35, _0x5c2769);
      _0x11a105.onsuccess = function () {
        _0x2deade(null);
      };
      _0x11a105.onerror = function (_0x23cef2) {
        _0x2deade(this.error);
        _0x23cef2.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x3a79c9, _0x384ebc, _0x30998d) {
      var _0x2442be = _0x3a79c9.delete(_0x384ebc);
      _0x2442be.onsuccess = function () {
        _0x30998d(null);
      };
      _0x2442be.onerror = function (_0x20a793) {
        _0x30998d(this.error);
        _0x20a793.preventDefault();
      };
    },
    reconcile: function (_0x2de7eb, _0xdee368, _0x5e2609) {
      var _0x38479c = 0;
      var _0x87b44f = [];
      Object.keys(_0x2de7eb.entries).forEach(function (_0x29390a) {
        var _0x164357 = _0x2de7eb.entries[_0x29390a];
        var _0x2d564a = _0xdee368.entries[_0x29390a];
        if (!_0x2d564a || _0x164357.timestamp.getTime() != _0x2d564a.timestamp.getTime()) {
          _0x87b44f.push(_0x29390a);
          _0x38479c++;
        }
      });
      var _0x2ee16c = [];
      Object.keys(_0xdee368.entries).forEach(function (_0x6c5814) {
        if (!_0x2de7eb.entries[_0x6c5814]) {
          _0x2ee16c.push(_0x6c5814);
          _0x38479c++;
        }
      });
      if (!_0x38479c) {
        return _0x5e2609(null);
      }
      var _0x3a2424 = false;
      var _0xc752ca = _0x2de7eb.type === "remote" ? _0x2de7eb.db : _0xdee368.db;
      var _0x2208e9 = _0xc752ca.transaction([_0x1ae0b4.DB_STORE_NAME], "readwrite");
      var _0x300ce8 = _0x2208e9.objectStore(_0x1ae0b4.DB_STORE_NAME);
      function _0xbef39b(_0x2bb13c) {
        if (_0x2bb13c && !_0x3a2424) {
          _0x3a2424 = true;
          return _0x5e2609(_0x2bb13c);
        }
      }
      _0x2208e9.onerror = function (_0x5a19cc) {
        _0xbef39b(this.error);
        _0x5a19cc.preventDefault();
      };
      _0x2208e9.oncomplete = function (_0x5d75d2) {
        if (!_0x3a2424) {
          _0x5e2609(null);
        }
      };
      _0x87b44f.sort().forEach(function (_0x217c3e) {
        if (_0xdee368.type === "local") {
          _0x1ae0b4.loadRemoteEntry(_0x300ce8, _0x217c3e, function (_0x338ac5, _0x581982) {
            if (_0x338ac5) {
              return _0xbef39b(_0x338ac5);
            }
            _0x1ae0b4.storeLocalEntry(_0x217c3e, _0x581982, _0xbef39b);
          });
        } else {
          _0x1ae0b4.loadLocalEntry(_0x217c3e, function (_0x4281dd, _0x320e98) {
            if (_0x4281dd) {
              return _0xbef39b(_0x4281dd);
            }
            _0x1ae0b4.storeRemoteEntry(_0x300ce8, _0x217c3e, _0x320e98, _0xbef39b);
          });
        }
      });
      _0x2ee16c.sort().reverse().forEach(function (_0x1b35df) {
        if (_0xdee368.type === "local") {
          _0x1ae0b4.removeLocalEntry(_0x1b35df, _0xbef39b);
        } else {
          _0x1ae0b4.removeRemoteEntry(_0x300ce8, _0x1b35df, _0xbef39b);
        }
      });
    }
  };
  var _0x379d8a = {
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
    lookupPath: function (_0x97933d, _0x2f11b1) {
      _0x97933d = _0x41f34b.resolve(_0x379d8a.cwd(), _0x97933d);
      _0x2f11b1 = _0x2f11b1 || {};
      if (!_0x97933d) {
        return {
          path: "",
          node: null
        };
      }
      var _0xf2265a = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x1a0999 in _0xf2265a) {
        if (_0x2f11b1[_0x1a0999] === undefined) {
          _0x2f11b1[_0x1a0999] = _0xf2265a[_0x1a0999];
        }
      }
      if (_0x2f11b1.recurse_count > 8) {
        throw new _0x379d8a.ErrnoError(32);
      }
      var _0x2051cf = _0x5cb440.normalizeArray(_0x97933d.split("/").filter(function (_0x4199ac) {
        return !!_0x4199ac;
      }), false);
      var _0x36093c = _0x379d8a.root;
      var _0x11ba1d = "/";
      for (var _0x1ba38d = 0; _0x1ba38d < _0x2051cf.length; _0x1ba38d++) {
        var _0x1a6795 = _0x1ba38d === _0x2051cf.length - 1;
        if (_0x1a6795 && _0x2f11b1.parent) {
          break;
        }
        _0x36093c = _0x379d8a.lookupNode(_0x36093c, _0x2051cf[_0x1ba38d]);
        _0x11ba1d = _0x5cb440.join2(_0x11ba1d, _0x2051cf[_0x1ba38d]);
        if (_0x379d8a.isMountpoint(_0x36093c)) {
          if (!_0x1a6795 || _0x1a6795 && _0x2f11b1.follow_mount) {
            _0x36093c = _0x36093c.mounted.root;
          }
        }
        if (!_0x1a6795 || _0x2f11b1.follow) {
          var _0x59af87 = 0;
          while (_0x379d8a.isLink(_0x36093c.mode)) {
            var _0x4f3cf7 = _0x379d8a.readlink(_0x11ba1d);
            _0x11ba1d = _0x41f34b.resolve(_0x5cb440.dirname(_0x11ba1d), _0x4f3cf7);
            var _0x343eb2 = _0x379d8a.lookupPath(_0x11ba1d, {
              recurse_count: _0x2f11b1.recurse_count
            });
            _0x36093c = _0x343eb2.node;
            if (_0x59af87++ > 40) {
              throw new _0x379d8a.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x11ba1d,
        node: _0x36093c
      };
    },
    getPath: function (_0x2c8850) {
      var _0x57efa0;
      while (true) {
        if (_0x379d8a.isRoot(_0x2c8850)) {
          var _0x462db8 = _0x2c8850.mount.mountpoint;
          if (!_0x57efa0) {
            return _0x462db8;
          }
          if (_0x462db8[_0x462db8.length - 1] !== "/") {
            return _0x462db8 + "/" + _0x57efa0;
          } else {
            return _0x462db8 + _0x57efa0;
          }
        }
        _0x57efa0 = _0x57efa0 ? _0x2c8850.name + "/" + _0x57efa0 : _0x2c8850.name;
        _0x2c8850 = _0x2c8850.parent;
      }
    },
    hashName: function (_0x2cd4b7, _0x3124d8) {
      var _0x422f02 = 0;
      for (var _0x43677f = 0; _0x43677f < _0x3124d8.length; _0x43677f++) {
        _0x422f02 = (_0x422f02 << 5) - _0x422f02 + _0x3124d8.charCodeAt(_0x43677f) | 0;
      }
      return (_0x2cd4b7 + _0x422f02 >>> 0) % _0x379d8a.nameTable.length;
    },
    hashAddNode: function (_0xfdd465) {
      var _0x174d79 = _0x379d8a.hashName(_0xfdd465.parent.id, _0xfdd465.name);
      _0xfdd465.name_next = _0x379d8a.nameTable[_0x174d79];
      _0x379d8a.nameTable[_0x174d79] = _0xfdd465;
    },
    hashRemoveNode: function (_0x28aafe) {
      var _0x125355 = _0x379d8a.hashName(_0x28aafe.parent.id, _0x28aafe.name);
      if (_0x379d8a.nameTable[_0x125355] === _0x28aafe) {
        _0x379d8a.nameTable[_0x125355] = _0x28aafe.name_next;
      } else {
        var _0x1b304d = _0x379d8a.nameTable[_0x125355];
        while (_0x1b304d) {
          if (_0x1b304d.name_next === _0x28aafe) {
            _0x1b304d.name_next = _0x28aafe.name_next;
            break;
          }
          _0x1b304d = _0x1b304d.name_next;
        }
      }
    },
    lookupNode: function (_0x32af4b, _0x4b4383) {
      var _0x557201 = _0x379d8a.mayLookup(_0x32af4b);
      if (_0x557201) {
        throw new _0x379d8a.ErrnoError(_0x557201, _0x32af4b);
      }
      var _0x124f2a = _0x379d8a.hashName(_0x32af4b.id, _0x4b4383);
      for (var _0x3fc9bd = _0x379d8a.nameTable[_0x124f2a]; _0x3fc9bd; _0x3fc9bd = _0x3fc9bd.name_next) {
        var _0x2732ae = _0x3fc9bd.name;
        if (_0x3fc9bd.parent.id === _0x32af4b.id && _0x2732ae === _0x4b4383) {
          return _0x3fc9bd;
        }
      }
      return _0x379d8a.lookup(_0x32af4b, _0x4b4383);
    },
    createNode: function (_0x32a237, _0x27a02e, _0x116e40, _0x3aa766) {
      var _0x3081d3 = new _0x379d8a.FSNode(_0x32a237, _0x27a02e, _0x116e40, _0x3aa766);
      _0x379d8a.hashAddNode(_0x3081d3);
      return _0x3081d3;
    },
    destroyNode: function (_0xc7cf87) {
      _0x379d8a.hashRemoveNode(_0xc7cf87);
    },
    isRoot: function (_0x2e5e3a) {
      return _0x2e5e3a === _0x2e5e3a.parent;
    },
    isMountpoint: function (_0x22e303) {
      return !!_0x22e303.mounted;
    },
    isFile: function (_0x1cbe5f) {
      return (_0x1cbe5f & 61440) === 32768;
    },
    isDir: function (_0x14813d) {
      return (_0x14813d & 61440) === 16384;
    },
    isLink: function (_0x5cbd41) {
      return (_0x5cbd41 & 61440) === 40960;
    },
    isChrdev: function (_0x1831a0) {
      return (_0x1831a0 & 61440) === 8192;
    },
    isBlkdev: function (_0x1e9de9) {
      return (_0x1e9de9 & 61440) === 24576;
    },
    isFIFO: function (_0x384d1c) {
      return (_0x384d1c & 61440) === 4096;
    },
    isSocket: function (_0x381ac6) {
      return (_0x381ac6 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x5d2756) {
      var _0x4d0fa5 = _0x379d8a.flagModes[_0x5d2756];
      if (typeof _0x4d0fa5 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x5d2756);
      }
      return _0x4d0fa5;
    },
    flagsToPermissionString: function (_0x4e584d) {
      var _0x3d6a4a = ["r", "w", "rw"][_0x4e584d & 3];
      if (_0x4e584d & 512) {
        _0x3d6a4a += "w";
      }
      return _0x3d6a4a;
    },
    nodePermissions: function (_0x2827e6, _0x29a043) {
      if (_0x379d8a.ignorePermissions) {
        return 0;
      }
      if (_0x29a043.includes("r") && !(_0x2827e6.mode & 292)) {
        return 2;
      } else if (_0x29a043.includes("w") && !(_0x2827e6.mode & 146)) {
        return 2;
      } else if (_0x29a043.includes("x") && !(_0x2827e6.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x8d39cc) {
      var _0x984074 = _0x379d8a.nodePermissions(_0x8d39cc, "x");
      if (_0x984074) {
        return _0x984074;
      }
      if (!_0x8d39cc.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x3f1bfb, _0x28f9ef) {
      try {
        var _0x22ac47 = _0x379d8a.lookupNode(_0x3f1bfb, _0x28f9ef);
        return 20;
      } catch (_0x1d77b1) {}
      return _0x379d8a.nodePermissions(_0x3f1bfb, "wx");
    },
    mayDelete: function (_0x410d97, _0x25aacb, _0x1fd021) {
      var _0x37c6e4;
      try {
        _0x37c6e4 = _0x379d8a.lookupNode(_0x410d97, _0x25aacb);
      } catch (_0x20c547) {
        return _0x20c547.errno;
      }
      var _0xa8d6a9 = _0x379d8a.nodePermissions(_0x410d97, "wx");
      if (_0xa8d6a9) {
        return _0xa8d6a9;
      }
      if (_0x1fd021) {
        if (!_0x379d8a.isDir(_0x37c6e4.mode)) {
          return 54;
        }
        if (_0x379d8a.isRoot(_0x37c6e4) || _0x379d8a.getPath(_0x37c6e4) === _0x379d8a.cwd()) {
          return 10;
        }
      } else if (_0x379d8a.isDir(_0x37c6e4.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x197107, _0x4cd291) {
      if (!_0x197107) {
        return 44;
      }
      if (_0x379d8a.isLink(_0x197107.mode)) {
        return 32;
      } else if (_0x379d8a.isDir(_0x197107.mode)) {
        if (_0x379d8a.flagsToPermissionString(_0x4cd291) !== "r" || _0x4cd291 & 512) {
          return 31;
        }
      }
      return _0x379d8a.nodePermissions(_0x197107, _0x379d8a.flagsToPermissionString(_0x4cd291));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x15e12c, _0x52a898) {
      _0x15e12c = _0x15e12c || 0;
      _0x52a898 = _0x52a898 || _0x379d8a.MAX_OPEN_FDS;
      for (var _0x506ea3 = _0x15e12c; _0x506ea3 <= _0x52a898; _0x506ea3++) {
        if (!_0x379d8a.streams[_0x506ea3]) {
          return _0x506ea3;
        }
      }
      throw new _0x379d8a.ErrnoError(33);
    },
    getStream: function (_0x24bec6) {
      return _0x379d8a.streams[_0x24bec6];
    },
    createStream: function (_0x188af4, _0x188e3f, _0x3cc9e8) {
      if (!_0x379d8a.FSStream) {
        _0x379d8a.FSStream = function () {};
        _0x379d8a.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x1cc599) {
              this.node = _0x1cc599;
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
      var _0x140e23 = new _0x379d8a.FSStream();
      for (var _0x152385 in _0x188af4) {
        _0x140e23[_0x152385] = _0x188af4[_0x152385];
      }
      _0x188af4 = _0x140e23;
      var _0x3b6307 = _0x379d8a.nextfd(_0x188e3f, _0x3cc9e8);
      _0x188af4.fd = _0x3b6307;
      _0x379d8a.streams[_0x3b6307] = _0x188af4;
      return _0x188af4;
    },
    closeStream: function (_0x109283) {
      _0x379d8a.streams[_0x109283] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x4f0ffa) {
        var _0x31175b = _0x379d8a.getDevice(_0x4f0ffa.node.rdev);
        _0x4f0ffa.stream_ops = _0x31175b.stream_ops;
        if (_0x4f0ffa.stream_ops.open) {
          _0x4f0ffa.stream_ops.open(_0x4f0ffa);
        }
      },
      llseek: function () {
        throw new _0x379d8a.ErrnoError(70);
      }
    },
    major: function (_0x3b1df0) {
      return _0x3b1df0 >> 8;
    },
    minor: function (_0x5483f5) {
      return _0x5483f5 & 255;
    },
    makedev: function (_0x1eb7a0, _0x36b66a) {
      return _0x1eb7a0 << 8 | _0x36b66a;
    },
    registerDevice: function (_0x35108f, _0x5395ae) {
      _0x379d8a.devices[_0x35108f] = {
        stream_ops: _0x5395ae
      };
    },
    getDevice: function (_0x54e942) {
      return _0x379d8a.devices[_0x54e942];
    },
    getMounts: function (_0xff8cfa) {
      var _0x5f2a34 = [];
      var _0xec556a = [_0xff8cfa];
      while (_0xec556a.length) {
        var _0x406f4e = _0xec556a.pop();
        _0x5f2a34.push(_0x406f4e);
        _0xec556a.push.apply(_0xec556a, _0x406f4e.mounts);
      }
      return _0x5f2a34;
    },
    syncfs: function (_0x485b4c, _0x54e77a) {
      if (typeof _0x485b4c === "function") {
        _0x54e77a = _0x485b4c;
        _0x485b4c = false;
      }
      _0x379d8a.syncFSRequests++;
      if (_0x379d8a.syncFSRequests > 1) {
        _0xf7c01a("warning: " + _0x379d8a.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x881f4f = _0x379d8a.getMounts(_0x379d8a.root.mount);
      var _0x42c824 = 0;
      function _0x1653fd(_0x3efb43) {
        _0x379d8a.syncFSRequests--;
        return _0x54e77a(_0x3efb43);
      }
      function _0x50c9a9(_0x5f0ab0) {
        if (_0x5f0ab0) {
          if (!_0x50c9a9.errored) {
            _0x50c9a9.errored = true;
            return _0x1653fd(_0x5f0ab0);
          }
          return;
        }
        if (++_0x42c824 >= _0x881f4f.length) {
          _0x1653fd(null);
        }
      }
      _0x881f4f.forEach(function (_0x4c4eaa) {
        if (!_0x4c4eaa.type.syncfs) {
          return _0x50c9a9(null);
        }
        _0x4c4eaa.type.syncfs(_0x4c4eaa, _0x485b4c, _0x50c9a9);
      });
    },
    mount: function (_0x35f382, _0x175b3f, _0x146b23) {
      var _0x3563f2 = _0x146b23 === "/";
      var _0x32f451 = !_0x146b23;
      var _0x1f389b;
      if (_0x3563f2 && _0x379d8a.root) {
        throw new _0x379d8a.ErrnoError(10);
      } else if (!_0x3563f2 && !_0x32f451) {
        var _0x4d1dfc = _0x379d8a.lookupPath(_0x146b23, {
          follow_mount: false
        });
        _0x146b23 = _0x4d1dfc.path;
        _0x1f389b = _0x4d1dfc.node;
        if (_0x379d8a.isMountpoint(_0x1f389b)) {
          throw new _0x379d8a.ErrnoError(10);
        }
        if (!_0x379d8a.isDir(_0x1f389b.mode)) {
          throw new _0x379d8a.ErrnoError(54);
        }
      }
      var _0x310507 = {
        type: _0x35f382,
        opts: _0x175b3f,
        mountpoint: _0x146b23,
        mounts: []
      };
      var _0x245208 = _0x35f382.mount(_0x310507);
      _0x245208.mount = _0x310507;
      _0x310507.root = _0x245208;
      if (_0x3563f2) {
        _0x379d8a.root = _0x245208;
      } else if (_0x1f389b) {
        _0x1f389b.mounted = _0x310507;
        if (_0x1f389b.mount) {
          _0x1f389b.mount.mounts.push(_0x310507);
        }
      }
      return _0x245208;
    },
    unmount: function (_0x39710d) {
      var _0x239af0 = _0x379d8a.lookupPath(_0x39710d, {
        follow_mount: false
      });
      if (!_0x379d8a.isMountpoint(_0x239af0.node)) {
        throw new _0x379d8a.ErrnoError(28);
      }
      var _0x1c6c50 = _0x239af0.node;
      var _0x355dc1 = _0x1c6c50.mounted;
      var _0x1f57b7 = _0x379d8a.getMounts(_0x355dc1);
      Object.keys(_0x379d8a.nameTable).forEach(function (_0x5bc377) {
        var _0x515881 = _0x379d8a.nameTable[_0x5bc377];
        while (_0x515881) {
          var _0x9fd7c4 = _0x515881.name_next;
          if (_0x1f57b7.includes(_0x515881.mount)) {
            _0x379d8a.destroyNode(_0x515881);
          }
          _0x515881 = _0x9fd7c4;
        }
      });
      _0x1c6c50.mounted = null;
      var _0x985f9 = _0x1c6c50.mount.mounts.indexOf(_0x355dc1);
      _0x1c6c50.mount.mounts.splice(_0x985f9, 1);
    },
    lookup: function (_0x12be4d, _0x33ba93) {
      return _0x12be4d.node_ops.lookup(_0x12be4d, _0x33ba93);
    },
    mknod: function (_0x314412, _0x96a4b5, _0x11cae0) {
      var _0x9db315 = _0x379d8a.lookupPath(_0x314412, {
        parent: true
      });
      var _0x3d9148 = _0x9db315.node;
      var _0x85f085 = _0x5cb440.basename(_0x314412);
      if (!_0x85f085 || _0x85f085 === "." || _0x85f085 === "..") {
        throw new _0x379d8a.ErrnoError(28);
      }
      var _0x360a0d = _0x379d8a.mayCreate(_0x3d9148, _0x85f085);
      if (_0x360a0d) {
        throw new _0x379d8a.ErrnoError(_0x360a0d);
      }
      if (!_0x3d9148.node_ops.mknod) {
        throw new _0x379d8a.ErrnoError(63);
      }
      return _0x3d9148.node_ops.mknod(_0x3d9148, _0x85f085, _0x96a4b5, _0x11cae0);
    },
    create: function (_0x3395e8, _0x3eca56) {
      _0x3eca56 = _0x3eca56 !== undefined ? _0x3eca56 : 438;
      _0x3eca56 &= 4095;
      _0x3eca56 |= 32768;
      return _0x379d8a.mknod(_0x3395e8, _0x3eca56, 0);
    },
    mkdir: function (_0x5310d2, _0x11e094) {
      _0x11e094 = _0x11e094 !== undefined ? _0x11e094 : 511;
      _0x11e094 &= 1023;
      _0x11e094 |= 16384;
      return _0x379d8a.mknod(_0x5310d2, _0x11e094, 0);
    },
    mkdirTree: function (_0x2e0ba7, _0x354b8a) {
      var _0x56767e = _0x2e0ba7.split("/");
      var _0x4236f7 = "";
      for (var _0x625a24 = 0; _0x625a24 < _0x56767e.length; ++_0x625a24) {
        if (!_0x56767e[_0x625a24]) {
          continue;
        }
        _0x4236f7 += "/" + _0x56767e[_0x625a24];
        try {
          _0x379d8a.mkdir(_0x4236f7, _0x354b8a);
        } catch (_0x1656aa) {
          if (_0x1656aa.errno != 20) {
            throw _0x1656aa;
          }
        }
      }
    },
    mkdev: function (_0x2ffab4, _0x1d660f, _0x37c55a) {
      if (typeof _0x37c55a === "undefined") {
        _0x37c55a = _0x1d660f;
        _0x1d660f = 438;
      }
      _0x1d660f |= 8192;
      return _0x379d8a.mknod(_0x2ffab4, _0x1d660f, _0x37c55a);
    },
    symlink: function (_0x114821, _0x4693fe) {
      if (!_0x41f34b.resolve(_0x114821)) {
        throw new _0x379d8a.ErrnoError(44);
      }
      var _0x61eddd = _0x379d8a.lookupPath(_0x4693fe, {
        parent: true
      });
      var _0x439d56 = _0x61eddd.node;
      if (!_0x439d56) {
        throw new _0x379d8a.ErrnoError(44);
      }
      var _0x113def = _0x5cb440.basename(_0x4693fe);
      var _0x2e57bc = _0x379d8a.mayCreate(_0x439d56, _0x113def);
      if (_0x2e57bc) {
        throw new _0x379d8a.ErrnoError(_0x2e57bc);
      }
      if (!_0x439d56.node_ops.symlink) {
        throw new _0x379d8a.ErrnoError(63);
      }
      return _0x439d56.node_ops.symlink(_0x439d56, _0x113def, _0x114821);
    },
    rename: function (_0x13377d, _0x4bbea0) {
      var _0x317b4e = _0x5cb440.dirname(_0x13377d);
      var _0x4d1706 = _0x5cb440.dirname(_0x4bbea0);
      var _0x5a8f25 = _0x5cb440.basename(_0x13377d);
      var _0x29e8ae = _0x5cb440.basename(_0x4bbea0);
      var _0x566ce6;
      var _0x5a3a3;
      var _0x44ac53;
      _0x566ce6 = _0x379d8a.lookupPath(_0x13377d, {
        parent: true
      });
      _0x5a3a3 = _0x566ce6.node;
      _0x566ce6 = _0x379d8a.lookupPath(_0x4bbea0, {
        parent: true
      });
      _0x44ac53 = _0x566ce6.node;
      if (!_0x5a3a3 || !_0x44ac53) {
        throw new _0x379d8a.ErrnoError(44);
      }
      if (_0x5a3a3.mount !== _0x44ac53.mount) {
        throw new _0x379d8a.ErrnoError(75);
      }
      var _0x4ada38 = _0x379d8a.lookupNode(_0x5a3a3, _0x5a8f25);
      var _0x310d18 = _0x41f34b.relative(_0x13377d, _0x4d1706);
      if (_0x310d18.charAt(0) !== ".") {
        throw new _0x379d8a.ErrnoError(28);
      }
      _0x310d18 = _0x41f34b.relative(_0x4bbea0, _0x317b4e);
      if (_0x310d18.charAt(0) !== ".") {
        throw new _0x379d8a.ErrnoError(55);
      }
      var _0x355889;
      try {
        _0x355889 = _0x379d8a.lookupNode(_0x44ac53, _0x29e8ae);
      } catch (_0x530cb5) {}
      if (_0x4ada38 === _0x355889) {
        return;
      }
      var _0x22fd6d = _0x379d8a.isDir(_0x4ada38.mode);
      var _0x362e62 = _0x379d8a.mayDelete(_0x5a3a3, _0x5a8f25, _0x22fd6d);
      if (_0x362e62) {
        throw new _0x379d8a.ErrnoError(_0x362e62);
      }
      _0x362e62 = _0x355889 ? _0x379d8a.mayDelete(_0x44ac53, _0x29e8ae, _0x22fd6d) : _0x379d8a.mayCreate(_0x44ac53, _0x29e8ae);
      if (_0x362e62) {
        throw new _0x379d8a.ErrnoError(_0x362e62);
      }
      if (!_0x5a3a3.node_ops.rename) {
        throw new _0x379d8a.ErrnoError(63);
      }
      if (_0x379d8a.isMountpoint(_0x4ada38) || _0x355889 && _0x379d8a.isMountpoint(_0x355889)) {
        throw new _0x379d8a.ErrnoError(10);
      }
      if (_0x44ac53 !== _0x5a3a3) {
        _0x362e62 = _0x379d8a.nodePermissions(_0x5a3a3, "w");
        if (_0x362e62) {
          throw new _0x379d8a.ErrnoError(_0x362e62);
        }
      }
      try {
        if (_0x379d8a.trackingDelegate.willMovePath) {
          _0x379d8a.trackingDelegate.willMovePath(_0x13377d, _0x4bbea0);
        }
      } catch (_0x3762b7) {
        _0xf7c01a("FS.trackingDelegate['willMovePath']('" + _0x13377d + "', '" + _0x4bbea0 + "') threw an exception: " + _0x3762b7.message);
      }
      _0x379d8a.hashRemoveNode(_0x4ada38);
      try {
        _0x5a3a3.node_ops.rename(_0x4ada38, _0x44ac53, _0x29e8ae);
      } catch (_0x2ad546) {
        throw _0x2ad546;
      } finally {
        _0x379d8a.hashAddNode(_0x4ada38);
      }
      try {
        if (_0x379d8a.trackingDelegate.onMovePath) {
          _0x379d8a.trackingDelegate.onMovePath(_0x13377d, _0x4bbea0);
        }
      } catch (_0x5bf000) {
        _0xf7c01a("FS.trackingDelegate['onMovePath']('" + _0x13377d + "', '" + _0x4bbea0 + "') threw an exception: " + _0x5bf000.message);
      }
    },
    rmdir: function (_0x1289f2) {
      var _0x3704af = _0x379d8a.lookupPath(_0x1289f2, {
        parent: true
      });
      var _0x8763a0 = _0x3704af.node;
      var _0x36cbfe = _0x5cb440.basename(_0x1289f2);
      var _0xaf380c = _0x379d8a.lookupNode(_0x8763a0, _0x36cbfe);
      var _0x2ad54c = _0x379d8a.mayDelete(_0x8763a0, _0x36cbfe, true);
      if (_0x2ad54c) {
        throw new _0x379d8a.ErrnoError(_0x2ad54c);
      }
      if (!_0x8763a0.node_ops.rmdir) {
        throw new _0x379d8a.ErrnoError(63);
      }
      if (_0x379d8a.isMountpoint(_0xaf380c)) {
        throw new _0x379d8a.ErrnoError(10);
      }
      try {
        if (_0x379d8a.trackingDelegate.willDeletePath) {
          _0x379d8a.trackingDelegate.willDeletePath(_0x1289f2);
        }
      } catch (_0x2765a0) {
        _0xf7c01a("FS.trackingDelegate['willDeletePath']('" + _0x1289f2 + "') threw an exception: " + _0x2765a0.message);
      }
      _0x8763a0.node_ops.rmdir(_0x8763a0, _0x36cbfe);
      _0x379d8a.destroyNode(_0xaf380c);
      try {
        if (_0x379d8a.trackingDelegate.onDeletePath) {
          _0x379d8a.trackingDelegate.onDeletePath(_0x1289f2);
        }
      } catch (_0x48f167) {
        _0xf7c01a("FS.trackingDelegate['onDeletePath']('" + _0x1289f2 + "') threw an exception: " + _0x48f167.message);
      }
    },
    readdir: function (_0x167789) {
      var _0x204506 = _0x379d8a.lookupPath(_0x167789, {
        follow: true
      });
      var _0x57d9b2 = _0x204506.node;
      if (!_0x57d9b2.node_ops.readdir) {
        throw new _0x379d8a.ErrnoError(54);
      }
      return _0x57d9b2.node_ops.readdir(_0x57d9b2);
    },
    unlink: function (_0x1c6ee7) {
      var _0x33cdac = _0x379d8a.lookupPath(_0x1c6ee7, {
        parent: true
      });
      var _0x195acf = _0x33cdac.node;
      var _0x17575f = _0x5cb440.basename(_0x1c6ee7);
      var _0x24351f = _0x379d8a.lookupNode(_0x195acf, _0x17575f);
      var _0x46f4cb = _0x379d8a.mayDelete(_0x195acf, _0x17575f, false);
      if (_0x46f4cb) {
        throw new _0x379d8a.ErrnoError(_0x46f4cb);
      }
      if (!_0x195acf.node_ops.unlink) {
        throw new _0x379d8a.ErrnoError(63);
      }
      if (_0x379d8a.isMountpoint(_0x24351f)) {
        throw new _0x379d8a.ErrnoError(10);
      }
      try {
        if (_0x379d8a.trackingDelegate.willDeletePath) {
          _0x379d8a.trackingDelegate.willDeletePath(_0x1c6ee7);
        }
      } catch (_0x503b72) {
        _0xf7c01a("FS.trackingDelegate['willDeletePath']('" + _0x1c6ee7 + "') threw an exception: " + _0x503b72.message);
      }
      _0x195acf.node_ops.unlink(_0x195acf, _0x17575f);
      _0x379d8a.destroyNode(_0x24351f);
      try {
        if (_0x379d8a.trackingDelegate.onDeletePath) {
          _0x379d8a.trackingDelegate.onDeletePath(_0x1c6ee7);
        }
      } catch (_0x22850a) {
        _0xf7c01a("FS.trackingDelegate['onDeletePath']('" + _0x1c6ee7 + "') threw an exception: " + _0x22850a.message);
      }
    },
    readlink: function (_0x2bf004) {
      var _0x3242be = _0x379d8a.lookupPath(_0x2bf004);
      var _0xfbea7e = _0x3242be.node;
      if (!_0xfbea7e) {
        throw new _0x379d8a.ErrnoError(44);
      }
      if (!_0xfbea7e.node_ops.readlink) {
        throw new _0x379d8a.ErrnoError(28);
      }
      return _0x41f34b.resolve(_0x379d8a.getPath(_0xfbea7e.parent), _0xfbea7e.node_ops.readlink(_0xfbea7e));
    },
    stat: function (_0x1c090b, _0x152826) {
      var _0x39e74f = _0x379d8a.lookupPath(_0x1c090b, {
        follow: !_0x152826
      });
      var _0x648ab9 = _0x39e74f.node;
      if (!_0x648ab9) {
        throw new _0x379d8a.ErrnoError(44);
      }
      if (!_0x648ab9.node_ops.getattr) {
        throw new _0x379d8a.ErrnoError(63);
      }
      return _0x648ab9.node_ops.getattr(_0x648ab9);
    },
    lstat: function (_0x114388) {
      return _0x379d8a.stat(_0x114388, true);
    },
    chmod: function (_0xf76364, _0x3eecb0, _0x490909) {
      var _0x577c64;
      if (typeof _0xf76364 === "string") {
        var _0x46a727 = _0x379d8a.lookupPath(_0xf76364, {
          follow: !_0x490909
        });
        _0x577c64 = _0x46a727.node;
      } else {
        _0x577c64 = _0xf76364;
      }
      if (!_0x577c64.node_ops.setattr) {
        throw new _0x379d8a.ErrnoError(63);
      }
      _0x577c64.node_ops.setattr(_0x577c64, {
        mode: _0x3eecb0 & 4095 | _0x577c64.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x2296a6, _0x58d338) {
      _0x379d8a.chmod(_0x2296a6, _0x58d338, true);
    },
    fchmod: function (_0x4e1c5e, _0x21705c) {
      var _0x2717f0 = _0x379d8a.getStream(_0x4e1c5e);
      if (!_0x2717f0) {
        throw new _0x379d8a.ErrnoError(8);
      }
      _0x379d8a.chmod(_0x2717f0.node, _0x21705c);
    },
    chown: function (_0x476c98, _0xa5c81a, _0x49c707, _0x4d4db6) {
      var _0xe9e79a;
      if (typeof _0x476c98 === "string") {
        var _0x21dd93 = _0x379d8a.lookupPath(_0x476c98, {
          follow: !_0x4d4db6
        });
        _0xe9e79a = _0x21dd93.node;
      } else {
        _0xe9e79a = _0x476c98;
      }
      if (!_0xe9e79a.node_ops.setattr) {
        throw new _0x379d8a.ErrnoError(63);
      }
      _0xe9e79a.node_ops.setattr(_0xe9e79a, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x122646, _0x38e930, _0x4f9255) {
      _0x379d8a.chown(_0x122646, _0x38e930, _0x4f9255, true);
    },
    fchown: function (_0x2ec37f, _0x54cbec, _0x448dfa) {
      var _0x3386bd = _0x379d8a.getStream(_0x2ec37f);
      if (!_0x3386bd) {
        throw new _0x379d8a.ErrnoError(8);
      }
      _0x379d8a.chown(_0x3386bd.node, _0x54cbec, _0x448dfa);
    },
    truncate: function (_0x2b4aa6, _0x2a3dc5) {
      if (_0x2a3dc5 < 0) {
        throw new _0x379d8a.ErrnoError(28);
      }
      var _0x565065;
      if (typeof _0x2b4aa6 === "string") {
        var _0x52f0c4 = _0x379d8a.lookupPath(_0x2b4aa6, {
          follow: true
        });
        _0x565065 = _0x52f0c4.node;
      } else {
        _0x565065 = _0x2b4aa6;
      }
      if (!_0x565065.node_ops.setattr) {
        throw new _0x379d8a.ErrnoError(63);
      }
      if (_0x379d8a.isDir(_0x565065.mode)) {
        throw new _0x379d8a.ErrnoError(31);
      }
      if (!_0x379d8a.isFile(_0x565065.mode)) {
        throw new _0x379d8a.ErrnoError(28);
      }
      var _0x22eafd = _0x379d8a.nodePermissions(_0x565065, "w");
      if (_0x22eafd) {
        throw new _0x379d8a.ErrnoError(_0x22eafd);
      }
      _0x565065.node_ops.setattr(_0x565065, {
        size: _0x2a3dc5,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x52aa68, _0x3800fd) {
      var _0x2e3bda = _0x379d8a.getStream(_0x52aa68);
      if (!_0x2e3bda) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if ((_0x2e3bda.flags & 2097155) === 0) {
        throw new _0x379d8a.ErrnoError(28);
      }
      _0x379d8a.truncate(_0x2e3bda.node, _0x3800fd);
    },
    utime: function (_0x5e34ec, _0x15cef9, _0x564108) {
      var _0x285d95 = _0x379d8a.lookupPath(_0x5e34ec, {
        follow: true
      });
      var _0x15f93e = _0x285d95.node;
      _0x15f93e.node_ops.setattr(_0x15f93e, {
        timestamp: Math.max(_0x15cef9, _0x564108)
      });
    },
    open: function (_0x5cade6, _0x5e8ac8, _0x4cd3d2, _0x4c39fc, _0x2dd36d) {
      if (_0x5cade6 === "") {
        throw new _0x379d8a.ErrnoError(44);
      }
      _0x5e8ac8 = typeof _0x5e8ac8 === "string" ? _0x379d8a.modeStringToFlags(_0x5e8ac8) : _0x5e8ac8;
      _0x4cd3d2 = typeof _0x4cd3d2 === "undefined" ? 438 : _0x4cd3d2;
      if (_0x5e8ac8 & 64) {
        _0x4cd3d2 = _0x4cd3d2 & 4095 | 32768;
      } else {
        _0x4cd3d2 = 0;
      }
      var _0x4a3bae;
      if (typeof _0x5cade6 === "object") {
        _0x4a3bae = _0x5cade6;
      } else {
        _0x5cade6 = _0x5cb440.normalize(_0x5cade6);
        try {
          var _0x326ab0 = _0x379d8a.lookupPath(_0x5cade6, {
            follow: !(_0x5e8ac8 & 131072)
          });
          _0x4a3bae = _0x326ab0.node;
        } catch (_0x1cc8af) {}
      }
      var _0x20eca9 = false;
      if (_0x5e8ac8 & 64) {
        if (_0x4a3bae) {
          if (_0x5e8ac8 & 128) {
            throw new _0x379d8a.ErrnoError(20);
          }
        } else {
          _0x4a3bae = _0x379d8a.mknod(_0x5cade6, _0x4cd3d2, 0);
          _0x20eca9 = true;
        }
      }
      if (!_0x4a3bae) {
        throw new _0x379d8a.ErrnoError(44);
      }
      if (_0x379d8a.isChrdev(_0x4a3bae.mode)) {
        _0x5e8ac8 &= ~512;
      }
      if (_0x5e8ac8 & 65536 && !_0x379d8a.isDir(_0x4a3bae.mode)) {
        throw new _0x379d8a.ErrnoError(54);
      }
      if (!_0x20eca9) {
        var _0x3a33e4 = _0x379d8a.mayOpen(_0x4a3bae, _0x5e8ac8);
        if (_0x3a33e4) {
          throw new _0x379d8a.ErrnoError(_0x3a33e4);
        }
      }
      if (_0x5e8ac8 & 512) {
        _0x379d8a.truncate(_0x4a3bae, 0);
      }
      _0x5e8ac8 &= ~131712;
      var _0x5e28ba = _0x379d8a.createStream({
        node: _0x4a3bae,
        path: _0x379d8a.getPath(_0x4a3bae),
        flags: _0x5e8ac8,
        seekable: true,
        position: 0,
        stream_ops: _0x4a3bae.stream_ops,
        ungotten: [],
        error: false
      }, _0x4c39fc, _0x2dd36d);
      if (_0x5e28ba.stream_ops.open) {
        _0x5e28ba.stream_ops.open(_0x5e28ba);
      }
      if (_0xad46db.logReadFiles && !(_0x5e8ac8 & 1)) {
        if (!_0x379d8a.readFiles) {
          _0x379d8a.readFiles = {};
        }
        if (!(_0x5cade6 in _0x379d8a.readFiles)) {
          _0x379d8a.readFiles[_0x5cade6] = 1;
          _0xf7c01a("FS.trackingDelegate error on read file: " + _0x5cade6);
        }
      }
      try {
        if (_0x379d8a.trackingDelegate.onOpenFile) {
          var _0x2cfc5e = 0;
          if ((_0x5e8ac8 & 2097155) !== 1) {
            _0x2cfc5e |= _0x379d8a.tracking.openFlags.READ;
          }
          if ((_0x5e8ac8 & 2097155) !== 0) {
            _0x2cfc5e |= _0x379d8a.tracking.openFlags.WRITE;
          }
          _0x379d8a.trackingDelegate.onOpenFile(_0x5cade6, _0x2cfc5e);
        }
      } catch (_0x3eab89) {
        _0xf7c01a("FS.trackingDelegate['onOpenFile']('" + _0x5cade6 + "', flags) threw an exception: " + _0x3eab89.message);
      }
      return _0x5e28ba;
    },
    close: function (_0x503180) {
      if (_0x379d8a.isClosed(_0x503180)) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if (_0x503180.getdents) {
        _0x503180.getdents = null;
      }
      try {
        if (_0x503180.stream_ops.close) {
          _0x503180.stream_ops.close(_0x503180);
        }
      } catch (_0x2469cf) {
        throw _0x2469cf;
      } finally {
        _0x379d8a.closeStream(_0x503180.fd);
      }
      _0x503180.fd = null;
    },
    isClosed: function (_0x34d125) {
      return _0x34d125.fd === null;
    },
    llseek: function (_0x34bea6, _0x4a47ae, _0x1ac244) {
      if (_0x379d8a.isClosed(_0x34bea6)) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if (!_0x34bea6.seekable || !_0x34bea6.stream_ops.llseek) {
        throw new _0x379d8a.ErrnoError(70);
      }
      if (_0x1ac244 != 0 && _0x1ac244 != 1 && _0x1ac244 != 2) {
        throw new _0x379d8a.ErrnoError(28);
      }
      _0x34bea6.position = _0x34bea6.stream_ops.llseek(_0x34bea6, _0x4a47ae, _0x1ac244);
      _0x34bea6.ungotten = [];
      return _0x34bea6.position;
    },
    read: function (_0x193719, _0x933896, _0x59385c, _0xfabfef, _0x10171b) {
      if (_0xfabfef < 0 || _0x10171b < 0) {
        throw new _0x379d8a.ErrnoError(28);
      }
      if (_0x379d8a.isClosed(_0x193719)) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if ((_0x193719.flags & 2097155) === 1) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if (_0x379d8a.isDir(_0x193719.node.mode)) {
        throw new _0x379d8a.ErrnoError(31);
      }
      if (!_0x193719.stream_ops.read) {
        throw new _0x379d8a.ErrnoError(28);
      }
      var _0x6b71c8 = typeof _0x10171b !== "undefined";
      if (!_0x6b71c8) {
        _0x10171b = _0x193719.position;
      } else if (!_0x193719.seekable) {
        throw new _0x379d8a.ErrnoError(70);
      }
      var _0x59b469 = _0x193719.stream_ops.read(_0x193719, _0x933896, _0x59385c, _0xfabfef, _0x10171b);
      if (!_0x6b71c8) {
        _0x193719.position += _0x59b469;
      }
      return _0x59b469;
    },
    write: function (_0x5e785b, _0x3dfe14, _0x1ec967, _0x21608e, _0x33e468, _0x16900f) {
      if (_0x21608e < 0 || _0x33e468 < 0) {
        throw new _0x379d8a.ErrnoError(28);
      }
      if (_0x379d8a.isClosed(_0x5e785b)) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if ((_0x5e785b.flags & 2097155) === 0) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if (_0x379d8a.isDir(_0x5e785b.node.mode)) {
        throw new _0x379d8a.ErrnoError(31);
      }
      if (!_0x5e785b.stream_ops.write) {
        throw new _0x379d8a.ErrnoError(28);
      }
      if (_0x5e785b.seekable && _0x5e785b.flags & 1024) {
        _0x379d8a.llseek(_0x5e785b, 0, 2);
      }
      var _0x1ae6c8 = typeof _0x33e468 !== "undefined";
      if (!_0x1ae6c8) {
        _0x33e468 = _0x5e785b.position;
      } else if (!_0x5e785b.seekable) {
        throw new _0x379d8a.ErrnoError(70);
      }
      var _0x4593b3 = _0x5e785b.stream_ops.write(_0x5e785b, _0x3dfe14, _0x1ec967, _0x21608e, _0x33e468, _0x16900f);
      if (!_0x1ae6c8) {
        _0x5e785b.position += _0x4593b3;
      }
      try {
        if (_0x5e785b.path && _0x379d8a.trackingDelegate.onWriteToFile) {
          _0x379d8a.trackingDelegate.onWriteToFile(_0x5e785b.path);
        }
      } catch (_0x34444a) {
        _0xf7c01a("FS.trackingDelegate['onWriteToFile']('" + _0x5e785b.path + "') threw an exception: " + _0x34444a.message);
      }
      return _0x4593b3;
    },
    allocate: function (_0x3d84cd, _0x47c56a, _0x1ed14d) {
      if (_0x379d8a.isClosed(_0x3d84cd)) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if (_0x47c56a < 0 || _0x1ed14d <= 0) {
        throw new _0x379d8a.ErrnoError(28);
      }
      if ((_0x3d84cd.flags & 2097155) === 0) {
        throw new _0x379d8a.ErrnoError(8);
      }
      if (!_0x379d8a.isFile(_0x3d84cd.node.mode) && !_0x379d8a.isDir(_0x3d84cd.node.mode)) {
        throw new _0x379d8a.ErrnoError(43);
      }
      if (!_0x3d84cd.stream_ops.allocate) {
        throw new _0x379d8a.ErrnoError(138);
      }
      _0x3d84cd.stream_ops.allocate(_0x3d84cd, _0x47c56a, _0x1ed14d);
    },
    mmap: function (_0x1d949b, _0x252596, _0x7a7718, _0xcb3756, _0x3fcc77, _0x4e9b41) {
      if ((_0x3fcc77 & 2) !== 0 && (_0x4e9b41 & 2) === 0 && (_0x1d949b.flags & 2097155) !== 2) {
        throw new _0x379d8a.ErrnoError(2);
      }
      if ((_0x1d949b.flags & 2097155) === 1) {
        throw new _0x379d8a.ErrnoError(2);
      }
      if (!_0x1d949b.stream_ops.mmap) {
        throw new _0x379d8a.ErrnoError(43);
      }
      return _0x1d949b.stream_ops.mmap(_0x1d949b, _0x252596, _0x7a7718, _0xcb3756, _0x3fcc77, _0x4e9b41);
    },
    msync: function (_0x480b00, _0x1db41b, _0x45442a, _0x1c4548, _0x5d6e73) {
      if (!_0x480b00 || !_0x480b00.stream_ops.msync) {
        return 0;
      }
      return _0x480b00.stream_ops.msync(_0x480b00, _0x1db41b, _0x45442a, _0x1c4548, _0x5d6e73);
    },
    munmap: function (_0x24e0ef) {
      return 0;
    },
    ioctl: function (_0x12f18e, _0x4d4b62, _0x4d42a1) {
      if (!_0x12f18e.stream_ops.ioctl) {
        throw new _0x379d8a.ErrnoError(59);
      }
      return _0x12f18e.stream_ops.ioctl(_0x12f18e, _0x4d4b62, _0x4d42a1);
    },
    readFile: function (_0x5ee221, _0x346330) {
      _0x346330 = _0x346330 || {};
      _0x346330.flags = _0x346330.flags || 0;
      _0x346330.encoding = _0x346330.encoding || "binary";
      if (_0x346330.encoding !== "utf8" && _0x346330.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x346330.encoding + "\"");
      }
      var _0x4c12d8;
      var _0x9c3cae = _0x379d8a.open(_0x5ee221, _0x346330.flags);
      var _0x35ca88 = _0x379d8a.stat(_0x5ee221);
      var _0x3d1d19 = _0x35ca88.size;
      var _0x25eb82 = new Uint8Array(_0x3d1d19);
      _0x379d8a.read(_0x9c3cae, _0x25eb82, 0, _0x3d1d19, 0);
      if (_0x346330.encoding === "utf8") {
        _0x4c12d8 = _0x17265e(_0x25eb82, 0);
      } else if (_0x346330.encoding === "binary") {
        _0x4c12d8 = _0x25eb82;
      }
      _0x379d8a.close(_0x9c3cae);
      return _0x4c12d8;
    },
    writeFile: function (_0x53957c, _0x4d2123, _0x5968d0) {
      _0x5968d0 = _0x5968d0 || {};
      _0x5968d0.flags = _0x5968d0.flags || 577;
      var _0x2b1f6e = _0x379d8a.open(_0x53957c, _0x5968d0.flags, _0x5968d0.mode);
      if (typeof _0x4d2123 === "string") {
        var _0x5bfc6f = new Uint8Array(_0x18f5b9(_0x4d2123) + 1);
        var _0x400504 = _0x299e6c(_0x4d2123, _0x5bfc6f, 0, _0x5bfc6f.length);
        _0x379d8a.write(_0x2b1f6e, _0x5bfc6f, 0, _0x400504, undefined, _0x5968d0.canOwn);
      } else if (ArrayBuffer.isView(_0x4d2123)) {
        _0x379d8a.write(_0x2b1f6e, _0x4d2123, 0, _0x4d2123.byteLength, undefined, _0x5968d0.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x379d8a.close(_0x2b1f6e);
    },
    cwd: function () {
      return _0x379d8a.currentPath;
    },
    chdir: function (_0x12accb) {
      var _0x176e46 = _0x379d8a.lookupPath(_0x12accb, {
        follow: true
      });
      if (_0x176e46.node === null) {
        throw new _0x379d8a.ErrnoError(44);
      }
      if (!_0x379d8a.isDir(_0x176e46.node.mode)) {
        throw new _0x379d8a.ErrnoError(54);
      }
      var _0x182fd6 = _0x379d8a.nodePermissions(_0x176e46.node, "x");
      if (_0x182fd6) {
        throw new _0x379d8a.ErrnoError(_0x182fd6);
      }
      _0x379d8a.currentPath = _0x176e46.path;
    },
    createDefaultDirectories: function () {
      _0x379d8a.mkdir("/tmp");
      _0x379d8a.mkdir("/home");
      _0x379d8a.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x379d8a.mkdir("/dev");
      _0x379d8a.registerDevice(_0x379d8a.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x3dce9d, _0x3f9511, _0x25c91c, _0x23c209, _0x543014) {
          return _0x23c209;
        }
      });
      _0x379d8a.mkdev("/dev/null", _0x379d8a.makedev(1, 3));
      _0x38c05b.register(_0x379d8a.makedev(5, 0), _0x38c05b.default_tty_ops);
      _0x38c05b.register(_0x379d8a.makedev(6, 0), _0x38c05b.default_tty1_ops);
      _0x379d8a.mkdev("/dev/tty", _0x379d8a.makedev(5, 0));
      _0x379d8a.mkdev("/dev/tty1", _0x379d8a.makedev(6, 0));
      var _0x3b0e1d = _0x227634();
      _0x379d8a.createDevice("/dev", "random", _0x3b0e1d);
      _0x379d8a.createDevice("/dev", "urandom", _0x3b0e1d);
      _0x379d8a.mkdir("/dev/shm");
      _0x379d8a.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x379d8a.mkdir("/proc");
      var _0x3f8f43 = _0x379d8a.mkdir("/proc/self");
      _0x379d8a.mkdir("/proc/self/fd");
      _0x379d8a.mount({
        mount: function () {
          var _0x33be82 = _0x379d8a.createNode(_0x3f8f43, "fd", 16895, 73);
          _0x33be82.node_ops = {
            lookup: function (_0x276f6f, _0x1d1bc) {
              var _0x420abc = +_0x1d1bc;
              var _0x56e2b7 = _0x379d8a.getStream(_0x420abc);
              if (!_0x56e2b7) {
                throw new _0x379d8a.ErrnoError(8);
              }
              var _0x1d6029 = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x56e2b7.path;
                  }
                }
              };
              _0x1d6029.parent = _0x1d6029;
              return _0x1d6029;
            }
          };
          return _0x33be82;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0xad46db.stdin) {
        _0x379d8a.createDevice("/dev", "stdin", _0xad46db.stdin);
      } else {
        _0x379d8a.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0xad46db.stdout) {
        _0x379d8a.createDevice("/dev", "stdout", null, _0xad46db.stdout);
      } else {
        _0x379d8a.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0xad46db.stderr) {
        _0x379d8a.createDevice("/dev", "stderr", null, _0xad46db.stderr);
      } else {
        _0x379d8a.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0xaaf661 = _0x379d8a.open("/dev/stdin", 0);
      var _0x5d882b = _0x379d8a.open("/dev/stdout", 1);
      var _0x1f1859 = _0x379d8a.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x379d8a.ErrnoError) {
        return;
      }
      _0x379d8a.ErrnoError = function _0x284e4d(_0x45b44b, _0xbc278e) {
        this.node = _0xbc278e;
        this.setErrno = function (_0x33cd20) {
          this.errno = _0x33cd20;
        };
        this.setErrno(_0x45b44b);
        this.message = "FS error";
      };
      _0x379d8a.ErrnoError.prototype = new Error();
      _0x379d8a.ErrnoError.prototype.constructor = _0x379d8a.ErrnoError;
      [44].forEach(function (_0x12d290) {
        _0x379d8a.genericErrors[_0x12d290] = new _0x379d8a.ErrnoError(_0x12d290);
        _0x379d8a.genericErrors[_0x12d290].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x379d8a.ensureErrnoError();
      _0x379d8a.nameTable = new Array(4096);
      _0x379d8a.mount(_0xbe4805, {}, "/");
      _0x379d8a.createDefaultDirectories();
      _0x379d8a.createDefaultDevices();
      _0x379d8a.createSpecialDirectories();
      _0x379d8a.filesystems = {
        MEMFS: _0xbe4805,
        IDBFS: _0x1ae0b4
      };
    },
    init: function (_0x22f384, _0x3756c5, _0x58ab98) {
      _0x379d8a.init.initialized = true;
      _0x379d8a.ensureErrnoError();
      _0xad46db.stdin = _0x22f384 || _0xad46db.stdin;
      _0xad46db.stdout = _0x3756c5 || _0xad46db.stdout;
      _0xad46db.stderr = _0x58ab98 || _0xad46db.stderr;
      _0x379d8a.createStandardStreams();
    },
    quit: function () {
      _0x379d8a.init.initialized = false;
      var _0x4a07e3 = _0xad46db._fflush;
      if (_0x4a07e3) {
        _0x4a07e3(0);
      }
      for (var _0x4da81b = 0; _0x4da81b < _0x379d8a.streams.length; _0x4da81b++) {
        var _0x5ac352 = _0x379d8a.streams[_0x4da81b];
        if (!_0x5ac352) {
          continue;
        }
        _0x379d8a.close(_0x5ac352);
      }
    },
    getMode: function (_0x3138d1, _0x1aee30) {
      var _0x161f74 = 0;
      if (_0x3138d1) {
        _0x161f74 |= 365;
      }
      if (_0x1aee30) {
        _0x161f74 |= 146;
      }
      return _0x161f74;
    },
    findObject: function (_0x4302bb, _0x4e1772) {
      var _0x39a349 = _0x379d8a.analyzePath(_0x4302bb, _0x4e1772);
      if (_0x39a349.exists) {
        return _0x39a349.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x247c55, _0x25da8f) {
      try {
        var _0xdd40bf = _0x379d8a.lookupPath(_0x247c55, {
          follow: !_0x25da8f
        });
        _0x247c55 = _0xdd40bf.path;
      } catch (_0x11de87) {}
      var _0x38583d = {
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
        var _0xdd40bf = _0x379d8a.lookupPath(_0x247c55, {
          parent: true
        });
        _0x38583d.parentExists = true;
        _0x38583d.parentPath = _0xdd40bf.path;
        _0x38583d.parentObject = _0xdd40bf.node;
        _0x38583d.name = _0x5cb440.basename(_0x247c55);
        _0xdd40bf = _0x379d8a.lookupPath(_0x247c55, {
          follow: !_0x25da8f
        });
        _0x38583d.exists = true;
        _0x38583d.path = _0xdd40bf.path;
        _0x38583d.object = _0xdd40bf.node;
        _0x38583d.name = _0xdd40bf.node.name;
        _0x38583d.isRoot = _0xdd40bf.path === "/";
      } catch (_0x31f332) {
        _0x38583d.error = _0x31f332.errno;
      }
      return _0x38583d;
    },
    createPath: function (_0x5a6f79, _0x53f3c4, _0x4f5364, _0xf27eb6) {
      _0x5a6f79 = typeof _0x5a6f79 === "string" ? _0x5a6f79 : _0x379d8a.getPath(_0x5a6f79);
      var _0x53d110 = _0x53f3c4.split("/").reverse();
      while (_0x53d110.length) {
        var _0x56c4cf = _0x53d110.pop();
        if (!_0x56c4cf) {
          continue;
        }
        var _0x393354 = _0x5cb440.join2(_0x5a6f79, _0x56c4cf);
        try {
          _0x379d8a.mkdir(_0x393354);
        } catch (_0x56f8b3) {}
        _0x5a6f79 = _0x393354;
      }
      return _0x393354;
    },
    createFile: function (_0x18e67c, _0x5a8564, _0x115680, _0x33562a, _0x21b254) {
      var _0x5aa906 = _0x5cb440.join2(typeof _0x18e67c === "string" ? _0x18e67c : _0x379d8a.getPath(_0x18e67c), _0x5a8564);
      var _0x247700 = _0x379d8a.getMode(_0x33562a, _0x21b254);
      return _0x379d8a.create(_0x5aa906, _0x247700);
    },
    createDataFile: function (_0x209bfa, _0x1fb915, _0x3378ef, _0x4c65ff, _0x26edc7, _0x5c92ef) {
      var _0x107d50 = _0x1fb915 ? _0x5cb440.join2(typeof _0x209bfa === "string" ? _0x209bfa : _0x379d8a.getPath(_0x209bfa), _0x1fb915) : _0x209bfa;
      var _0x1bdc8a = _0x379d8a.getMode(_0x4c65ff, _0x26edc7);
      var _0x2d1b8b = _0x379d8a.create(_0x107d50, _0x1bdc8a);
      if (_0x3378ef) {
        if (typeof _0x3378ef === "string") {
          var _0xba07ab = new Array(_0x3378ef.length);
          for (var _0x495632 = 0, _0x208035 = _0x3378ef.length; _0x495632 < _0x208035; ++_0x495632) {
            _0xba07ab[_0x495632] = _0x3378ef.charCodeAt(_0x495632);
          }
          _0x3378ef = _0xba07ab;
        }
        _0x379d8a.chmod(_0x2d1b8b, _0x1bdc8a | 146);
        var _0x8d7195 = _0x379d8a.open(_0x2d1b8b, 577);
        _0x379d8a.write(_0x8d7195, _0x3378ef, 0, _0x3378ef.length, 0, _0x5c92ef);
        _0x379d8a.close(_0x8d7195);
        _0x379d8a.chmod(_0x2d1b8b, _0x1bdc8a);
      }
      return _0x2d1b8b;
    },
    createDevice: function (_0x1b546, _0x25a697, _0x4a72d7, _0x26f7c0) {
      var _0x7d4cce = _0x5cb440.join2(typeof _0x1b546 === "string" ? _0x1b546 : _0x379d8a.getPath(_0x1b546), _0x25a697);
      var _0x46ff4f = _0x379d8a.getMode(!!_0x4a72d7, !!_0x26f7c0);
      if (!_0x379d8a.createDevice.major) {
        _0x379d8a.createDevice.major = 64;
      }
      var _0x5cb22b = _0x379d8a.makedev(_0x379d8a.createDevice.major++, 0);
      _0x379d8a.registerDevice(_0x5cb22b, {
        open: function (_0x2232f9) {
          _0x2232f9.seekable = false;
        },
        close: function (_0x38adce) {
          if (_0x26f7c0 && _0x26f7c0.buffer && _0x26f7c0.buffer.length) {
            _0x26f7c0(10);
          }
        },
        read: function (_0x1d0710, _0xc525c3, _0x268a34, _0x1c6ed2, _0x418000) {
          var _0x9f1d67 = 0;
          for (var _0x5d9410 = 0; _0x5d9410 < _0x1c6ed2; _0x5d9410++) {
            var _0x574adf;
            try {
              _0x574adf = _0x4a72d7();
            } catch (_0x5698ab) {
              throw new _0x379d8a.ErrnoError(29);
            }
            if (_0x574adf === undefined && _0x9f1d67 === 0) {
              throw new _0x379d8a.ErrnoError(6);
            }
            if (_0x574adf === null || _0x574adf === undefined) {
              break;
            }
            _0x9f1d67++;
            _0xc525c3[_0x268a34 + _0x5d9410] = _0x574adf;
          }
          if (_0x9f1d67) {
            _0x1d0710.node.timestamp = Date.now();
          }
          return _0x9f1d67;
        },
        write: function (_0x14aa58, _0x52bb40, _0x5d947b, _0xdfbea1, _0x3e18fd) {
          for (var _0x1a7d03 = 0; _0x1a7d03 < _0xdfbea1; _0x1a7d03++) {
            try {
              _0x26f7c0(_0x52bb40[_0x5d947b + _0x1a7d03]);
            } catch (_0x5a0bad) {
              throw new _0x379d8a.ErrnoError(29);
            }
          }
          if (_0xdfbea1) {
            _0x14aa58.node.timestamp = Date.now();
          }
          return _0x1a7d03;
        }
      });
      return _0x379d8a.mkdev(_0x7d4cce, _0x46ff4f, _0x5cb22b);
    },
    forceLoadFile: function (_0x47f75a) {
      if (_0x47f75a.isDevice || _0x47f75a.isFolder || _0x47f75a.link || _0x47f75a.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x643ab5) {
        try {
          _0x47f75a.contents = _0x3c7b26(_0x643ab5(_0x47f75a.url), true);
          _0x47f75a.usedBytes = _0x47f75a.contents.length;
        } catch (_0x57978f) {
          throw new _0x379d8a.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x207fe0, _0x531ca4, _0x3b765e, _0x510716, _0x4cc2d6) {
      function _0x21fa99() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x21fa99.prototype.get = function _0x16d6da(_0x5e1065) {
        if (_0x5e1065 > this.length - 1 || _0x5e1065 < 0) {
          return undefined;
        }
        var _0x116f3d = _0x5e1065 % this.chunkSize;
        var _0x243782 = _0x5e1065 / this.chunkSize | 0;
        return this.getter(_0x243782)[_0x116f3d];
      };
      _0x21fa99.prototype.setDataGetter = function _0x2f31e8(_0x556bd0) {
        this.getter = _0x556bd0;
      };
      _0x21fa99.prototype.cacheLength = function _0xd3eb4e() {
        var _0x1457a2 = new XMLHttpRequest();
        _0x1457a2.open("HEAD", _0x3b765e, false);
        _0x1457a2.send(null);
        if ((!(_0x1457a2.status >= 200) || !(_0x1457a2.status < 300)) && _0x1457a2.status !== 304) {
          throw new Error("Couldn't load " + _0x3b765e + ". Status: " + _0x1457a2.status);
        }
        var _0x3aebf1 = Number(_0x1457a2.getResponseHeader("Content-length"));
        var _0x199906;
        var _0x9d5bea = (_0x199906 = _0x1457a2.getResponseHeader("Accept-Ranges")) && _0x199906 === "bytes";
        var _0x9388d0 = (_0x199906 = _0x1457a2.getResponseHeader("Content-Encoding")) && _0x199906 === "gzip";
        var _0x34d863 = 1048576;
        if (!_0x9d5bea) {
          _0x34d863 = _0x3aebf1;
        }
        var _0x331acb = function (_0x109c0c, _0x5d5d44) {
          if (_0x109c0c > _0x5d5d44) {
            throw new Error("invalid range (" + _0x109c0c + ", " + _0x5d5d44 + ") or no bytes requested!");
          }
          if (_0x5d5d44 > _0x3aebf1 - 1) {
            throw new Error("only " + _0x3aebf1 + " bytes available! programmer error!");
          }
          var _0x15e8ba = new XMLHttpRequest();
          _0x15e8ba.open("GET", _0x3b765e, false);
          if (_0x3aebf1 !== _0x34d863) {
            _0x15e8ba.setRequestHeader("Range", "bytes=" + _0x109c0c + "-" + _0x5d5d44);
          }
          if (typeof Uint8Array != "undefined") {
            _0x15e8ba.responseType = "arraybuffer";
          }
          if (_0x15e8ba.overrideMimeType) {
            _0x15e8ba.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x15e8ba.send(null);
          if ((!(_0x15e8ba.status >= 200) || !(_0x15e8ba.status < 300)) && _0x15e8ba.status !== 304) {
            throw new Error("Couldn't load " + _0x3b765e + ". Status: " + _0x15e8ba.status);
          }
          if (_0x15e8ba.response !== undefined) {
            return new Uint8Array(_0x15e8ba.response || []);
          } else {
            return _0x3c7b26(_0x15e8ba.responseText || "", true);
          }
        };
        var _0x5bd519 = this;
        _0x5bd519.setDataGetter(function (_0x1465cc) {
          var _0x1b1bd9 = _0x1465cc * _0x34d863;
          var _0xc59eba = (_0x1465cc + 1) * _0x34d863 - 1;
          _0xc59eba = Math.min(_0xc59eba, _0x3aebf1 - 1);
          if (typeof _0x5bd519.chunks[_0x1465cc] === "undefined") {
            _0x5bd519.chunks[_0x1465cc] = _0x331acb(_0x1b1bd9, _0xc59eba);
          }
          if (typeof _0x5bd519.chunks[_0x1465cc] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x5bd519.chunks[_0x1465cc];
        });
        if (_0x9388d0 || !_0x3aebf1) {
          _0x34d863 = _0x3aebf1 = 1;
          _0x3aebf1 = this.getter(0).length;
          _0x34d863 = _0x3aebf1;
          _0x2014a7("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x3aebf1;
        this._chunkSize = _0x34d863;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x4b8188) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x1a7c4f = new _0x21fa99();
        Object.defineProperties(_0x1a7c4f, {
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
        var _0x31ea2b = {
          isDevice: false,
          contents: _0x1a7c4f
        };
      } else {
        var _0x31ea2b = {
          isDevice: false,
          url: _0x3b765e
        };
      }
      var _0x28afbc = _0x379d8a.createFile(_0x207fe0, _0x531ca4, _0x31ea2b, _0x510716, _0x4cc2d6);
      if (_0x31ea2b.contents) {
        _0x28afbc.contents = _0x31ea2b.contents;
      } else if (_0x31ea2b.url) {
        _0x28afbc.contents = null;
        _0x28afbc.url = _0x31ea2b.url;
      }
      Object.defineProperties(_0x28afbc, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x118298 = {};
      var _0x582871 = Object.keys(_0x28afbc.stream_ops);
      _0x582871.forEach(function (_0x456a21) {
        var _0xd2aee6 = _0x28afbc.stream_ops[_0x456a21];
        _0x118298[_0x456a21] = function _0x4d1f73() {
          _0x379d8a.forceLoadFile(_0x28afbc);
          return _0xd2aee6.apply(null, arguments);
        };
      });
      _0x118298.read = function _0xcf7613(_0x9d2799, _0x4ea603, _0x513ad9, _0x143222, _0x5d4d48) {
        _0x379d8a.forceLoadFile(_0x28afbc);
        var _0x7942f7 = _0x9d2799.node.contents;
        if (_0x5d4d48 >= _0x7942f7.length) {
          return 0;
        }
        var _0x1f5736 = Math.min(_0x7942f7.length - _0x5d4d48, _0x143222);
        if (_0x7942f7.slice) {
          for (var _0x356592 = 0; _0x356592 < _0x1f5736; _0x356592++) {
            _0x4ea603[_0x513ad9 + _0x356592] = _0x7942f7[_0x5d4d48 + _0x356592];
          }
        } else {
          for (var _0x356592 = 0; _0x356592 < _0x1f5736; _0x356592++) {
            _0x4ea603[_0x513ad9 + _0x356592] = _0x7942f7.get(_0x5d4d48 + _0x356592);
          }
        }
        return _0x1f5736;
      };
      _0x28afbc.stream_ops = _0x118298;
      return _0x28afbc;
    },
    createPreloadedFile: function (_0x7a6eff, _0x1d45ef, _0x4d608f, _0x43d4b4, _0x5c071a, _0x46f1a2, _0x313ed0, _0x3d8615, _0x7ffe51, _0x38180b) {
      _0x5a6ed0.init();
      var _0x441374 = _0x1d45ef ? _0x41f34b.resolve(_0x5cb440.join2(_0x7a6eff, _0x1d45ef)) : _0x7a6eff;
      var _0xc88a4f = _0x5c0398("cp " + _0x441374);
      function _0x2df86b(_0x2c19ad) {
        function _0x4d4ee3(_0x571dcc) {
          if (_0x38180b) {
            _0x38180b();
          }
          if (!_0x3d8615) {
            _0x379d8a.createDataFile(_0x7a6eff, _0x1d45ef, _0x571dcc, _0x43d4b4, _0x5c071a, _0x7ffe51);
          }
          if (_0x46f1a2) {
            _0x46f1a2();
          }
          _0x42d77a(_0xc88a4f);
        }
        var _0x460232 = false;
        _0xad46db.preloadPlugins.forEach(function (_0x58255c) {
          if (_0x460232) {
            return;
          }
          if (_0x58255c.canHandle(_0x441374)) {
            _0x58255c.handle(_0x2c19ad, _0x441374, _0x4d4ee3, function () {
              if (_0x313ed0) {
                _0x313ed0();
              }
              _0x42d77a(_0xc88a4f);
            });
            _0x460232 = true;
          }
        });
        if (!_0x460232) {
          _0x4d4ee3(_0x2c19ad);
        }
      }
      _0x37f4a1(_0xc88a4f);
      if (typeof _0x4d608f == "string") {
        _0x5a6ed0.asyncLoad(_0x4d608f, function (_0x24aa33) {
          _0x2df86b(_0x24aa33);
        }, _0x313ed0);
      } else {
        _0x2df86b(_0x4d608f);
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
    saveFilesToDB: function (_0x3a8483, _0x39868e, _0x4f4402) {
      _0x39868e = _0x39868e || function () {};
      _0x4f4402 = _0x4f4402 || function () {};
      var _0x4eb98d = _0x379d8a.indexedDB();
      try {
        var _0x846159 = _0x4eb98d.open(_0x379d8a.DB_NAME(), _0x379d8a.DB_VERSION);
      } catch (_0x19a1a2) {
        return _0x4f4402(_0x19a1a2);
      }
      _0x846159.onupgradeneeded = function _0x76f271() {
        _0x2014a7("creating db");
        var _0x37bd1e = _0x846159.result;
        _0x37bd1e.createObjectStore(_0x379d8a.DB_STORE_NAME);
      };
      _0x846159.onsuccess = function _0x538f4c() {
        var _0x5415f3 = _0x846159.result;
        var _0x257147 = _0x5415f3.transaction([_0x379d8a.DB_STORE_NAME], "readwrite");
        var _0x540e23 = _0x257147.objectStore(_0x379d8a.DB_STORE_NAME);
        var _0x54604b = 0;
        var _0x476502 = 0;
        var _0x5f5c48 = _0x3a8483.length;
        function _0x441da() {
          if (_0x476502 == 0) {
            _0x39868e();
          } else {
            _0x4f4402();
          }
        }
        _0x3a8483.forEach(function (_0x1d338c) {
          var _0x53593c = _0x540e23.put(_0x379d8a.analyzePath(_0x1d338c).object.contents, _0x1d338c);
          _0x53593c.onsuccess = function _0x235477() {
            _0x54604b++;
            if (_0x54604b + _0x476502 == _0x5f5c48) {
              _0x441da();
            }
          };
          _0x53593c.onerror = function _0x43ea2b() {
            _0x476502++;
            if (_0x54604b + _0x476502 == _0x5f5c48) {
              _0x441da();
            }
          };
        });
        _0x257147.onerror = _0x4f4402;
      };
      _0x846159.onerror = _0x4f4402;
    },
    loadFilesFromDB: function (_0x5ccbe3, _0x69a8c6, _0x11f987) {
      _0x69a8c6 = _0x69a8c6 || function () {};
      _0x11f987 = _0x11f987 || function () {};
      var _0x1e43ab = _0x379d8a.indexedDB();
      try {
        var _0xab6232 = _0x1e43ab.open(_0x379d8a.DB_NAME(), _0x379d8a.DB_VERSION);
      } catch (_0x4243f9) {
        return _0x11f987(_0x4243f9);
      }
      _0xab6232.onupgradeneeded = _0x11f987;
      _0xab6232.onsuccess = function _0x188aa8() {
        var _0x578937 = _0xab6232.result;
        try {
          var _0x31ba58 = _0x578937.transaction([_0x379d8a.DB_STORE_NAME], "readonly");
        } catch (_0x2a3919) {
          _0x11f987(_0x2a3919);
          return;
        }
        var _0x3bd81c = _0x31ba58.objectStore(_0x379d8a.DB_STORE_NAME);
        var _0x33503c = 0;
        var _0x1af232 = 0;
        var _0x3f6ac1 = _0x5ccbe3.length;
        function _0x2fdc36() {
          if (_0x1af232 == 0) {
            _0x69a8c6();
          } else {
            _0x11f987();
          }
        }
        _0x5ccbe3.forEach(function (_0x4534b6) {
          var _0x55b57f = _0x3bd81c.get(_0x4534b6);
          _0x55b57f.onsuccess = function _0x56c713() {
            if (_0x379d8a.analyzePath(_0x4534b6).exists) {
              _0x379d8a.unlink(_0x4534b6);
            }
            _0x379d8a.createDataFile(_0x5cb440.dirname(_0x4534b6), _0x5cb440.basename(_0x4534b6), _0x55b57f.result, true, true, true);
            _0x33503c++;
            if (_0x33503c + _0x1af232 == _0x3f6ac1) {
              _0x2fdc36();
            }
          };
          _0x55b57f.onerror = function _0x550334() {
            _0x1af232++;
            if (_0x33503c + _0x1af232 == _0x3f6ac1) {
              _0x2fdc36();
            }
          };
        });
        _0x31ba58.onerror = _0x11f987;
      };
      _0xab6232.onerror = _0x11f987;
    }
  };
  var _0x4bec8f = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x38fca0, _0x3af8da, _0x38d0b4) {
      if (_0x3af8da[0] === "/") {
        return _0x3af8da;
      }
      var _0xdf20f7;
      if (_0x38fca0 === -100) {
        _0xdf20f7 = _0x379d8a.cwd();
      } else {
        var _0x4dddab = _0x379d8a.getStream(_0x38fca0);
        if (!_0x4dddab) {
          throw new _0x379d8a.ErrnoError(8);
        }
        _0xdf20f7 = _0x4dddab.path;
      }
      if (_0x3af8da.length == 0) {
        if (!_0x38d0b4) {
          throw new _0x379d8a.ErrnoError(44);
        }
        return _0xdf20f7;
      }
      return _0x5cb440.join2(_0xdf20f7, _0x3af8da);
    },
    doStat: function (_0x5190a5, _0x160c2d, _0x15c709) {
      try {
        var _0x4832ae = _0x5190a5(_0x160c2d);
      } catch (_0xe8a336) {
        if (_0xe8a336 && _0xe8a336.node && _0x5cb440.normalize(_0x160c2d) !== _0x5cb440.normalize(_0x379d8a.getPath(_0xe8a336.node))) {
          return -54;
        }
        throw _0xe8a336;
      }
      _0x49ddaa[_0x15c709 >> 2] = _0x4832ae.dev;
      _0x49ddaa[_0x15c709 + 4 >> 2] = 0;
      _0x49ddaa[_0x15c709 + 8 >> 2] = _0x4832ae.ino;
      _0x49ddaa[_0x15c709 + 12 >> 2] = _0x4832ae.mode;
      _0x49ddaa[_0x15c709 + 16 >> 2] = _0x4832ae.nlink;
      _0x49ddaa[_0x15c709 + 20 >> 2] = _0x4832ae.uid;
      _0x49ddaa[_0x15c709 + 24 >> 2] = _0x4832ae.gid;
      _0x49ddaa[_0x15c709 + 28 >> 2] = _0x4832ae.rdev;
      _0x49ddaa[_0x15c709 + 32 >> 2] = 0;
      _0x522fe6 = [_0x4832ae.size >>> 0, (_0x23d490 = _0x4832ae.size, +Math.abs(_0x23d490) >= 1 ? _0x23d490 > 0 ? (Math.min(+Math.floor(_0x23d490 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x23d490 - +(~~_0x23d490 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x49ddaa[_0x15c709 + 40 >> 2] = _0x522fe6[0];
      _0x49ddaa[_0x15c709 + 44 >> 2] = _0x522fe6[1];
      _0x49ddaa[_0x15c709 + 48 >> 2] = 4096;
      _0x49ddaa[_0x15c709 + 52 >> 2] = _0x4832ae.blocks;
      _0x49ddaa[_0x15c709 + 56 >> 2] = _0x4832ae.atime.getTime() / 1000 | 0;
      _0x49ddaa[_0x15c709 + 60 >> 2] = 0;
      _0x49ddaa[_0x15c709 + 64 >> 2] = _0x4832ae.mtime.getTime() / 1000 | 0;
      _0x49ddaa[_0x15c709 + 68 >> 2] = 0;
      _0x49ddaa[_0x15c709 + 72 >> 2] = _0x4832ae.ctime.getTime() / 1000 | 0;
      _0x49ddaa[_0x15c709 + 76 >> 2] = 0;
      _0x522fe6 = [_0x4832ae.ino >>> 0, (_0x23d490 = _0x4832ae.ino, +Math.abs(_0x23d490) >= 1 ? _0x23d490 > 0 ? (Math.min(+Math.floor(_0x23d490 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x23d490 - +(~~_0x23d490 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x49ddaa[_0x15c709 + 80 >> 2] = _0x522fe6[0];
      _0x49ddaa[_0x15c709 + 84 >> 2] = _0x522fe6[1];
      return 0;
    },
    doMsync: function (_0x546eaa, _0x422ffc, _0x141a62, _0xe4811a, _0x420841) {
      var _0x419335 = _0x1c9190.slice(_0x546eaa, _0x546eaa + _0x141a62);
      _0x379d8a.msync(_0x422ffc, _0x419335, _0x420841, _0x141a62, _0xe4811a);
    },
    doMkdir: function (_0x11cb19, _0x5d8fe5) {
      _0x11cb19 = _0x5cb440.normalize(_0x11cb19);
      if (_0x11cb19[_0x11cb19.length - 1] === "/") {
        _0x11cb19 = _0x11cb19.substr(0, _0x11cb19.length - 1);
      }
      _0x379d8a.mkdir(_0x11cb19, _0x5d8fe5, 0);
      return 0;
    },
    doMknod: function (_0x28942a, _0x2d35f2, _0x413ae8) {
      switch (_0x2d35f2 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x379d8a.mknod(_0x28942a, _0x2d35f2, _0x413ae8);
      return 0;
    },
    doReadlink: function (_0x1855c9, _0x34062e, _0x194310) {
      if (_0x194310 <= 0) {
        return -28;
      }
      var _0x3dd65b = _0x379d8a.readlink(_0x1855c9);
      var _0x128529 = Math.min(_0x194310, _0x18f5b9(_0x3dd65b));
      var _0x1b6bef = _0x1e6f7f[_0x34062e + _0x128529];
      _0x2117d9(_0x3dd65b, _0x34062e, _0x194310 + 1);
      _0x1e6f7f[_0x34062e + _0x128529] = _0x1b6bef;
      return _0x128529;
    },
    doAccess: function (_0x139b20, _0x23fbbd) {
      if (_0x23fbbd & ~7) {
        return -28;
      }
      var _0x120a9a;
      var _0x496422 = _0x379d8a.lookupPath(_0x139b20, {
        follow: true
      });
      _0x120a9a = _0x496422.node;
      if (!_0x120a9a) {
        return -44;
      }
      var _0x3870b7 = "";
      if (_0x23fbbd & 4) {
        _0x3870b7 += "r";
      }
      if (_0x23fbbd & 2) {
        _0x3870b7 += "w";
      }
      if (_0x23fbbd & 1) {
        _0x3870b7 += "x";
      }
      if (_0x3870b7 && _0x379d8a.nodePermissions(_0x120a9a, _0x3870b7)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0xc1f355, _0x1e36e2, _0x1679f1) {
      var _0x215c00 = _0x379d8a.getStream(_0x1679f1);
      if (_0x215c00) {
        _0x379d8a.close(_0x215c00);
      }
      return _0x379d8a.open(_0xc1f355, _0x1e36e2, 0, _0x1679f1, _0x1679f1).fd;
    },
    doReadv: function (_0x211043, _0x5a5cc7, _0x523dcb, _0x44eb82) {
      var _0x3376aa = 0;
      for (var _0x4a90a4 = 0; _0x4a90a4 < _0x523dcb; _0x4a90a4++) {
        var _0x5a386e = _0x49ddaa[_0x5a5cc7 + _0x4a90a4 * 8 >> 2];
        var _0x2beb07 = _0x49ddaa[_0x5a5cc7 + (_0x4a90a4 * 8 + 4) >> 2];
        var _0x5cd7ea = _0x379d8a.read(_0x211043, _0x1e6f7f, _0x5a386e, _0x2beb07, _0x44eb82);
        if (_0x5cd7ea < 0) {
          return -1;
        }
        _0x3376aa += _0x5cd7ea;
        if (_0x5cd7ea < _0x2beb07) {
          break;
        }
      }
      return _0x3376aa;
    },
    doWritev: function (_0x5333d6, _0x39f6b5, _0x58731b, _0x259946) {
      var _0x5bc3e4 = 0;
      for (var _0x5b8983 = 0; _0x5b8983 < _0x58731b; _0x5b8983++) {
        var _0x3c1009 = _0x49ddaa[_0x39f6b5 + _0x5b8983 * 8 >> 2];
        var _0x1e1320 = _0x49ddaa[_0x39f6b5 + (_0x5b8983 * 8 + 4) >> 2];
        var _0x42329a = _0x379d8a.write(_0x5333d6, _0x1e6f7f, _0x3c1009, _0x1e1320, _0x259946);
        if (_0x42329a < 0) {
          return -1;
        }
        _0x5bc3e4 += _0x42329a;
      }
      return _0x5bc3e4;
    },
    varargs: undefined,
    get: function () {
      _0x4bec8f.varargs += 4;
      var _0xfbd90a = _0x49ddaa[_0x4bec8f.varargs - 4 >> 2];
      return _0xfbd90a;
    },
    getStr: function (_0x2f0923) {
      var _0x3110af = _0x5d80c0(_0x2f0923);
      return _0x3110af;
    },
    getStreamFromFD: function (_0x552b62) {
      var _0x388402 = _0x379d8a.getStream(_0x552b62);
      if (!_0x388402) {
        throw new _0x379d8a.ErrnoError(8);
      }
      return _0x388402;
    },
    get64: function (_0x47ae83, _0xcda5ea) {
      return _0x47ae83;
    }
  };
  function _0x183dd2(_0x31cfca, _0x29cf60, _0x136e99, _0x18be71, _0xcda5b8) {
    try {
      var _0x47776a = 0;
      var _0x5ed071 = _0x29cf60 ? _0x49ddaa[_0x29cf60 >> 2] : 0;
      var _0x307c1f = _0x29cf60 ? _0x49ddaa[_0x29cf60 + 4 >> 2] : 0;
      var _0x3c33f1 = _0x136e99 ? _0x49ddaa[_0x136e99 >> 2] : 0;
      var _0x200f35 = _0x136e99 ? _0x49ddaa[_0x136e99 + 4 >> 2] : 0;
      var _0x56cabf = _0x18be71 ? _0x49ddaa[_0x18be71 >> 2] : 0;
      var _0x1a97b5 = _0x18be71 ? _0x49ddaa[_0x18be71 + 4 >> 2] : 0;
      var _0x38c097 = 0;
      var _0x29cf6e = 0;
      var _0x24ef12 = 0;
      var _0x35ea81 = 0;
      var _0xf2d9d4 = 0;
      var _0x76ba8 = 0;
      var _0x227ad6 = (_0x29cf60 ? _0x49ddaa[_0x29cf60 >> 2] : 0) | (_0x136e99 ? _0x49ddaa[_0x136e99 >> 2] : 0) | (_0x18be71 ? _0x49ddaa[_0x18be71 >> 2] : 0);
      var _0x4fb3a0 = (_0x29cf60 ? _0x49ddaa[_0x29cf60 + 4 >> 2] : 0) | (_0x136e99 ? _0x49ddaa[_0x136e99 + 4 >> 2] : 0) | (_0x18be71 ? _0x49ddaa[_0x18be71 + 4 >> 2] : 0);
      var _0x78b384 = function (_0x5a4355, _0x40fc5e, _0x444bf8, _0x5f9fa0) {
        if (_0x5a4355 < 32) {
          return _0x40fc5e & _0x5f9fa0;
        } else {
          return _0x444bf8 & _0x5f9fa0;
        }
      };
      for (var _0x15807e = 0; _0x15807e < _0x31cfca; _0x15807e++) {
        var _0x254301 = 1 << _0x15807e % 32;
        if (!_0x78b384(_0x15807e, _0x227ad6, _0x4fb3a0, _0x254301)) {
          continue;
        }
        var _0x38406f = _0x379d8a.getStream(_0x15807e);
        if (!_0x38406f) {
          throw new _0x379d8a.ErrnoError(8);
        }
        var _0x25cb80 = _0x4bec8f.DEFAULT_POLLMASK;
        if (_0x38406f.stream_ops.poll) {
          _0x25cb80 = _0x38406f.stream_ops.poll(_0x38406f);
        }
        if (_0x25cb80 & 1 && _0x78b384(_0x15807e, _0x5ed071, _0x307c1f, _0x254301)) {
          if (_0x15807e < 32) {
            _0x38c097 = _0x38c097 | _0x254301;
          } else {
            _0x29cf6e = _0x29cf6e | _0x254301;
          }
          _0x47776a++;
        }
        if (_0x25cb80 & 4 && _0x78b384(_0x15807e, _0x3c33f1, _0x200f35, _0x254301)) {
          if (_0x15807e < 32) {
            _0x24ef12 = _0x24ef12 | _0x254301;
          } else {
            _0x35ea81 = _0x35ea81 | _0x254301;
          }
          _0x47776a++;
        }
        if (_0x25cb80 & 2 && _0x78b384(_0x15807e, _0x56cabf, _0x1a97b5, _0x254301)) {
          if (_0x15807e < 32) {
            _0xf2d9d4 = _0xf2d9d4 | _0x254301;
          } else {
            _0x76ba8 = _0x76ba8 | _0x254301;
          }
          _0x47776a++;
        }
      }
      if (_0x29cf60) {
        _0x49ddaa[_0x29cf60 >> 2] = _0x38c097;
        _0x49ddaa[_0x29cf60 + 4 >> 2] = _0x29cf6e;
      }
      if (_0x136e99) {
        _0x49ddaa[_0x136e99 >> 2] = _0x24ef12;
        _0x49ddaa[_0x136e99 + 4 >> 2] = _0x35ea81;
      }
      if (_0x18be71) {
        _0x49ddaa[_0x18be71 >> 2] = _0xf2d9d4;
        _0x49ddaa[_0x18be71 + 4 >> 2] = _0x76ba8;
      }
      return _0x47776a;
    } catch (_0x4839c5) {
      if (typeof _0x379d8a === "undefined" || !(_0x4839c5 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x4839c5);
      }
      return -_0x4839c5.errno;
    }
  }
  var _0x4d9e71 = {
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
  var _0x28da01 = {
    mount: function (_0x3a23a9) {
      _0xad46db.websocket = _0xad46db.websocket && typeof _0xad46db.websocket === "object" ? _0xad46db.websocket : {};
      _0xad46db.websocket._callbacks = {};
      _0xad46db.websocket.on = function (_0x48f116, _0x41bbf3) {
        if (typeof _0x41bbf3 === "function") {
          this._callbacks[_0x48f116] = _0x41bbf3;
        }
        return this;
      };
      _0xad46db.websocket.emit = function (_0x4430c3, _0xd55706) {
        if (typeof this._callbacks[_0x4430c3] === "function") {
          this._callbacks[_0x4430c3].call(this, _0xd55706);
        }
      };
      return _0x379d8a.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x451719, _0x353594, _0xaf08b7) {
      _0x353594 &= ~526336;
      var _0x4f67b4 = _0x353594 == 1;
      if (_0xaf08b7) {
        _0x5e3281(_0x4f67b4 == (_0xaf08b7 == 6));
      }
      var _0xd43841 = {
        family: _0x451719,
        type: _0x353594,
        protocol: _0xaf08b7,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x28da01.websocket_sock_ops
      };
      var _0x15298e = _0x28da01.nextname();
      var _0x429a56 = _0x379d8a.createNode(_0x28da01.root, _0x15298e, 49152, 0);
      _0x429a56.sock = _0xd43841;
      var _0x3d5810 = _0x379d8a.createStream({
        path: _0x15298e,
        node: _0x429a56,
        flags: 2,
        seekable: false,
        stream_ops: _0x28da01.stream_ops
      });
      _0xd43841.stream = _0x3d5810;
      return _0xd43841;
    },
    getSocket: function (_0x4a6aa3) {
      var _0x2b69bc = _0x379d8a.getStream(_0x4a6aa3);
      if (!_0x2b69bc || !_0x379d8a.isSocket(_0x2b69bc.node.mode)) {
        return null;
      }
      return _0x2b69bc.node.sock;
    },
    stream_ops: {
      poll: function (_0x2b9111) {
        var _0x2d05d0 = _0x2b9111.node.sock;
        return _0x2d05d0.sock_ops.poll(_0x2d05d0);
      },
      ioctl: function (_0x192f91, _0x3f0342, _0x2153b8) {
        var _0xc068f1 = _0x192f91.node.sock;
        return _0xc068f1.sock_ops.ioctl(_0xc068f1, _0x3f0342, _0x2153b8);
      },
      read: function (_0x45f7ec, _0x53abc1, _0x48e806, _0x3dfcff, _0x4f6bf) {
        var _0x2323be = _0x45f7ec.node.sock;
        var _0x34d701 = _0x2323be.sock_ops.recvmsg(_0x2323be, _0x3dfcff);
        if (!_0x34d701) {
          return 0;
        }
        _0x53abc1.set(_0x34d701.buffer, _0x48e806);
        return _0x34d701.buffer.length;
      },
      write: function (_0x110a53, _0x443d7a, _0x11ede1, _0x1d2fe2, _0x33fae1) {
        var _0xdcfb32 = _0x110a53.node.sock;
        return _0xdcfb32.sock_ops.sendmsg(_0xdcfb32, _0x443d7a, _0x11ede1, _0x1d2fe2);
      },
      close: function (_0x465000) {
        var _0x36319c = _0x465000.node.sock;
        _0x36319c.sock_ops.close(_0x36319c);
      }
    },
    nextname: function () {
      if (!_0x28da01.nextname.current) {
        _0x28da01.nextname.current = 0;
      }
      return "socket[" + _0x28da01.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x5749d0, _0x2c8393, _0x3504a1) {
        var _0x3ae729;
        if (typeof _0x2c8393 === "object") {
          _0x3ae729 = _0x2c8393;
          _0x2c8393 = null;
          _0x3504a1 = null;
        }
        if (_0x3ae729) {
          if (_0x3ae729._socket) {
            _0x2c8393 = _0x3ae729._socket.remoteAddress;
            _0x3504a1 = _0x3ae729._socket.remotePort;
          } else {
            var _0x1f7982 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x3ae729.url);
            if (!_0x1f7982) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x2c8393 = _0x1f7982[1];
            _0x3504a1 = parseInt(_0x1f7982[2], 10);
          }
        } else {
          try {
            var _0x3a1d81 = _0xad46db.websocket && typeof _0xad46db.websocket === "object";
            var _0x417911 = "ws:#".replace("#", "//");
            if (_0x3a1d81) {
              if (typeof _0xad46db.websocket.url === "string") {
                _0x417911 = _0xad46db.websocket.url;
              }
            }
            if (_0x417911 === "ws://" || _0x417911 === "wss://") {
              var _0x31ebe9 = _0x2c8393.split("/");
              _0x417911 = _0x417911 + _0x31ebe9[0] + ":" + _0x3504a1 + "/" + _0x31ebe9.slice(1).join("/");
            }
            var _0x3b922f = "binary";
            if (_0x3a1d81) {
              if (typeof _0xad46db.websocket.subprotocol === "string") {
                _0x3b922f = _0xad46db.websocket.subprotocol;
              }
            }
            var _0x1fe48d = undefined;
            if (_0x3b922f !== "null") {
              _0x3b922f = _0x3b922f.replace(/^ +| +$/g, "").split(/ *, */);
              _0x1fe48d = _0xa8980b ? {
                protocol: _0x3b922f.toString()
              } : _0x3b922f;
            }
            if (_0x3a1d81 && _0xad46db.websocket.subprotocol === null) {
              _0x3b922f = "null";
              _0x1fe48d = undefined;
            }
            var _0x133845;
            if (_0xa8980b) {
              _0x133845 = require("ws");
            } else {
              _0x133845 = WebSocket;
            }
            _0x3ae729 = new _0x133845(_0x417911, _0x1fe48d);
            _0x3ae729.binaryType = "arraybuffer";
          } catch (_0x39bfff) {
            throw new _0x379d8a.ErrnoError(_0x4d9e71.EHOSTUNREACH);
          }
        }
        var _0x46d59a = {
          addr: _0x2c8393,
          port: _0x3504a1,
          socket: _0x3ae729,
          dgram_send_queue: []
        };
        _0x28da01.websocket_sock_ops.addPeer(_0x5749d0, _0x46d59a);
        _0x28da01.websocket_sock_ops.handlePeerEvents(_0x5749d0, _0x46d59a);
        if (_0x5749d0.type === 2 && typeof _0x5749d0.sport !== "undefined") {
          _0x46d59a.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x5749d0.sport & 65280) >> 8, _0x5749d0.sport & 255]));
        }
        return _0x46d59a;
      },
      getPeer: function (_0x532e57, _0x1ed9fb, _0x263c72) {
        return _0x532e57.peers[_0x1ed9fb + ":" + _0x263c72];
      },
      addPeer: function (_0x1079b6, _0x19b778) {
        _0x1079b6.peers[_0x19b778.addr + ":" + _0x19b778.port] = _0x19b778;
      },
      removePeer: function (_0x336d34, _0x22c5f1) {
        delete _0x336d34.peers[_0x22c5f1.addr + ":" + _0x22c5f1.port];
      },
      handlePeerEvents: function (_0x59a772, _0x598b19) {
        var _0x1957e8 = true;
        var _0x4e02c3 = function () {
          _0xad46db.websocket.emit("open", _0x59a772.stream.fd);
          try {
            var _0xeb0ea0 = _0x598b19.dgram_send_queue.shift();
            while (_0xeb0ea0) {
              _0x598b19.socket.send(_0xeb0ea0);
              _0xeb0ea0 = _0x598b19.dgram_send_queue.shift();
            }
          } catch (_0x3ad66b) {
            _0x598b19.socket.close();
          }
        };
        function _0x1a60b4(_0x25a246) {
          if (typeof _0x25a246 === "string") {
            var _0x27b4bf = new TextEncoder();
            _0x25a246 = _0x27b4bf.encode(_0x25a246);
          } else {
            _0x5e3281(_0x25a246.byteLength !== undefined);
            if (_0x25a246.byteLength == 0) {
              return;
            } else {
              _0x25a246 = new Uint8Array(_0x25a246);
            }
          }
          var _0x57d9b1 = _0x1957e8;
          _0x1957e8 = false;
          if (_0x57d9b1 && _0x25a246.length === 10 && _0x25a246[0] === 255 && _0x25a246[1] === 255 && _0x25a246[2] === 255 && _0x25a246[3] === 255 && _0x25a246[4] === "p".charCodeAt(0) && _0x25a246[5] === "o".charCodeAt(0) && _0x25a246[6] === "r".charCodeAt(0) && _0x25a246[7] === "t".charCodeAt(0)) {
            var _0x2c596f = _0x25a246[8] << 8 | _0x25a246[9];
            _0x28da01.websocket_sock_ops.removePeer(_0x59a772, _0x598b19);
            _0x598b19.port = _0x2c596f;
            _0x28da01.websocket_sock_ops.addPeer(_0x59a772, _0x598b19);
            return;
          }
          _0x59a772.recv_queue.push({
            addr: _0x598b19.addr,
            port: _0x598b19.port,
            data: _0x25a246
          });
          _0xad46db.websocket.emit("message", _0x59a772.stream.fd);
        }
        if (_0xa8980b) {
          _0x598b19.socket.on("open", _0x4e02c3);
          _0x598b19.socket.on("message", function (_0x2d3407, _0x5eb7cd) {
            if (!_0x5eb7cd.binary) {
              return;
            }
            _0x1a60b4(new Uint8Array(_0x2d3407).buffer);
          });
          _0x598b19.socket.on("close", function () {
            _0xad46db.websocket.emit("close", _0x59a772.stream.fd);
          });
          _0x598b19.socket.on("error", function (_0x50cbb1) {
            _0x59a772.error = _0x4d9e71.ECONNREFUSED;
            _0xad46db.websocket.emit("error", [_0x59a772.stream.fd, _0x59a772.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x598b19.socket.onopen = _0x4e02c3;
          _0x598b19.socket.onclose = function () {
            _0xad46db.websocket.emit("close", _0x59a772.stream.fd);
          };
          _0x598b19.socket.onmessage = function _0x32a163(_0x544ee6) {
            _0x1a60b4(_0x544ee6.data);
          };
          _0x598b19.socket.onerror = function (_0x41355b) {
            _0x59a772.error = _0x4d9e71.ECONNREFUSED;
            _0xad46db.websocket.emit("error", [_0x59a772.stream.fd, _0x59a772.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x533272) {
        if (_0x533272.type === 1 && _0x533272.server) {
          if (_0x533272.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0x92b752 = 0;
        var _0x38c233 = _0x533272.type === 1 ? _0x28da01.websocket_sock_ops.getPeer(_0x533272, _0x533272.daddr, _0x533272.dport) : null;
        if (_0x533272.recv_queue.length || !_0x38c233 || _0x38c233 && _0x38c233.socket.readyState === _0x38c233.socket.CLOSING || _0x38c233 && _0x38c233.socket.readyState === _0x38c233.socket.CLOSED) {
          _0x92b752 |= 65;
        }
        if (!_0x38c233 || _0x38c233 && _0x38c233.socket.readyState === _0x38c233.socket.OPEN) {
          _0x92b752 |= 4;
        }
        if (_0x38c233 && _0x38c233.socket.readyState === _0x38c233.socket.CLOSING || _0x38c233 && _0x38c233.socket.readyState === _0x38c233.socket.CLOSED) {
          _0x92b752 |= 16;
        }
        return _0x92b752;
      },
      ioctl: function (_0xaafce5, _0xff12f1, _0x306a6d) {
        switch (_0xff12f1) {
          case 21531:
            var _0x51216b = 0;
            if (_0xaafce5.recv_queue.length) {
              _0x51216b = _0xaafce5.recv_queue[0].data.length;
            }
            _0x49ddaa[_0x306a6d >> 2] = _0x51216b;
            return 0;
          default:
            return _0x4d9e71.EINVAL;
        }
      },
      close: function (_0x579eca) {
        if (_0x579eca.server) {
          try {
            _0x579eca.server.close();
          } catch (_0x5de0de) {}
          _0x579eca.server = null;
        }
        var _0x176189 = Object.keys(_0x579eca.peers);
        for (var _0x14f5be = 0; _0x14f5be < _0x176189.length; _0x14f5be++) {
          var _0x32cb4d = _0x579eca.peers[_0x176189[_0x14f5be]];
          try {
            _0x32cb4d.socket.close();
          } catch (_0x538b20) {}
          _0x28da01.websocket_sock_ops.removePeer(_0x579eca, _0x32cb4d);
        }
        return 0;
      },
      bind: function (_0x1cf485, _0x34e772, _0x20357f) {
        if (typeof _0x1cf485.saddr !== "undefined" || typeof _0x1cf485.sport !== "undefined") {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EINVAL);
        }
        _0x1cf485.saddr = _0x34e772;
        _0x1cf485.sport = _0x20357f;
        if (_0x1cf485.type === 2) {
          if (_0x1cf485.server) {
            _0x1cf485.server.close();
            _0x1cf485.server = null;
          }
          try {
            _0x1cf485.sock_ops.listen(_0x1cf485, 0);
          } catch (_0x26b6ea) {
            if (!(_0x26b6ea instanceof _0x379d8a.ErrnoError)) {
              throw _0x26b6ea;
            }
            if (_0x26b6ea.errno !== _0x4d9e71.EOPNOTSUPP) {
              throw _0x26b6ea;
            }
          }
        }
      },
      connect: function (_0x1f67c2, _0x38759c, _0x3f2560) {
        if (_0x1f67c2.server) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EOPNOTSUPP);
        }
        if (typeof _0x1f67c2.daddr !== "undefined" && typeof _0x1f67c2.dport !== "undefined") {
          var _0x1e7031 = _0x28da01.websocket_sock_ops.getPeer(_0x1f67c2, _0x1f67c2.daddr, _0x1f67c2.dport);
          if (_0x1e7031) {
            if (_0x1e7031.socket.readyState === _0x1e7031.socket.CONNECTING) {
              throw new _0x379d8a.ErrnoError(_0x4d9e71.EALREADY);
            } else {
              throw new _0x379d8a.ErrnoError(_0x4d9e71.EISCONN);
            }
          }
        }
        var _0x2ce6bc = _0x28da01.websocket_sock_ops.createPeer(_0x1f67c2, _0x38759c, _0x3f2560);
        _0x1f67c2.daddr = _0x2ce6bc.addr;
        _0x1f67c2.dport = _0x2ce6bc.port;
        throw new _0x379d8a.ErrnoError(_0x4d9e71.EINPROGRESS);
      },
      listen: function (_0x4c8ca6, _0x39da7b) {
        if (!_0xa8980b) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EOPNOTSUPP);
        }
        if (_0x4c8ca6.server) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EINVAL);
        }
        var _0x476d0f = require("ws").Server;
        var _0x5c602b = _0x4c8ca6.saddr;
        _0x4c8ca6.server = new _0x476d0f({
          host: _0x5c602b,
          port: _0x4c8ca6.sport
        });
        _0xad46db.websocket.emit("listen", _0x4c8ca6.stream.fd);
        _0x4c8ca6.server.on("connection", function (_0x338751) {
          if (_0x4c8ca6.type === 1) {
            var _0x2815cf = _0x28da01.createSocket(_0x4c8ca6.family, _0x4c8ca6.type, _0x4c8ca6.protocol);
            var _0x2d0e57 = _0x28da01.websocket_sock_ops.createPeer(_0x2815cf, _0x338751);
            _0x2815cf.daddr = _0x2d0e57.addr;
            _0x2815cf.dport = _0x2d0e57.port;
            _0x4c8ca6.pending.push(_0x2815cf);
            _0xad46db.websocket.emit("connection", _0x2815cf.stream.fd);
          } else {
            _0x28da01.websocket_sock_ops.createPeer(_0x4c8ca6, _0x338751);
            _0xad46db.websocket.emit("connection", _0x4c8ca6.stream.fd);
          }
        });
        _0x4c8ca6.server.on("closed", function () {
          _0xad46db.websocket.emit("close", _0x4c8ca6.stream.fd);
          _0x4c8ca6.server = null;
        });
        _0x4c8ca6.server.on("error", function (_0x2b2f13) {
          _0x4c8ca6.error = _0x4d9e71.EHOSTUNREACH;
          _0xad46db.websocket.emit("error", [_0x4c8ca6.stream.fd, _0x4c8ca6.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x5d889f) {
        if (!_0x5d889f.server) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EINVAL);
        }
        var _0x38e812 = _0x5d889f.pending.shift();
        _0x38e812.stream.flags = _0x5d889f.stream.flags;
        return _0x38e812;
      },
      getname: function (_0x1a5de3, _0x40b1d6) {
        var _0x338098;
        var _0xac06ba;
        if (_0x40b1d6) {
          if (_0x1a5de3.daddr === undefined || _0x1a5de3.dport === undefined) {
            throw new _0x379d8a.ErrnoError(_0x4d9e71.ENOTCONN);
          }
          _0x338098 = _0x1a5de3.daddr;
          _0xac06ba = _0x1a5de3.dport;
        } else {
          _0x338098 = _0x1a5de3.saddr || 0;
          _0xac06ba = _0x1a5de3.sport || 0;
        }
        return {
          addr: _0x338098,
          port: _0xac06ba
        };
      },
      sendmsg: function (_0x5e2dca, _0x5e7f09, _0x559fb0, _0x4fbc06, _0x5dccf2, _0x1e7248) {
        if (_0x5e2dca.type === 2) {
          if (_0x5dccf2 === undefined || _0x1e7248 === undefined) {
            _0x5dccf2 = _0x5e2dca.daddr;
            _0x1e7248 = _0x5e2dca.dport;
          }
          if (_0x5dccf2 === undefined || _0x1e7248 === undefined) {
            throw new _0x379d8a.ErrnoError(_0x4d9e71.EDESTADDRREQ);
          }
        } else {
          _0x5dccf2 = _0x5e2dca.daddr;
          _0x1e7248 = _0x5e2dca.dport;
        }
        var _0x15fd0f = _0x28da01.websocket_sock_ops.getPeer(_0x5e2dca, _0x5dccf2, _0x1e7248);
        if (_0x5e2dca.type === 1) {
          if (!_0x15fd0f || _0x15fd0f.socket.readyState === _0x15fd0f.socket.CLOSING || _0x15fd0f.socket.readyState === _0x15fd0f.socket.CLOSED) {
            throw new _0x379d8a.ErrnoError(_0x4d9e71.ENOTCONN);
          } else if (_0x15fd0f.socket.readyState === _0x15fd0f.socket.CONNECTING) {
            throw new _0x379d8a.ErrnoError(_0x4d9e71.EAGAIN);
          }
        }
        if (ArrayBuffer.isView(_0x5e7f09)) {
          _0x559fb0 += _0x5e7f09.byteOffset;
          _0x5e7f09 = _0x5e7f09.buffer;
        }
        var _0x41d74b;
        _0x41d74b = _0x5e7f09.slice(_0x559fb0, _0x559fb0 + _0x4fbc06);
        if (_0x5e2dca.type === 2) {
          if (!_0x15fd0f || _0x15fd0f.socket.readyState !== _0x15fd0f.socket.OPEN) {
            if (!_0x15fd0f || _0x15fd0f.socket.readyState === _0x15fd0f.socket.CLOSING || _0x15fd0f.socket.readyState === _0x15fd0f.socket.CLOSED) {
              _0x15fd0f = _0x28da01.websocket_sock_ops.createPeer(_0x5e2dca, _0x5dccf2, _0x1e7248);
            }
            _0x15fd0f.dgram_send_queue.push(_0x41d74b);
            return _0x4fbc06;
          }
        }
        try {
          _0x15fd0f.socket.send(_0x41d74b);
          return _0x4fbc06;
        } catch (_0x4d9c1a) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EINVAL);
        }
      },
      recvmsg: function (_0x2aff91, _0x55fb5a) {
        if (_0x2aff91.type === 1 && _0x2aff91.server) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.ENOTCONN);
        }
        var _0x30bfd7 = _0x2aff91.recv_queue.shift();
        if (!_0x30bfd7) {
          if (_0x2aff91.type === 1) {
            var _0x42be9c = _0x28da01.websocket_sock_ops.getPeer(_0x2aff91, _0x2aff91.daddr, _0x2aff91.dport);
            if (!_0x42be9c) {
              throw new _0x379d8a.ErrnoError(_0x4d9e71.ENOTCONN);
            } else if (_0x42be9c.socket.readyState === _0x42be9c.socket.CLOSING || _0x42be9c.socket.readyState === _0x42be9c.socket.CLOSED) {
              return null;
            } else {
              throw new _0x379d8a.ErrnoError(_0x4d9e71.EAGAIN);
            }
          } else {
            throw new _0x379d8a.ErrnoError(_0x4d9e71.EAGAIN);
          }
        }
        var _0x1bf99c = _0x30bfd7.data.byteLength || _0x30bfd7.data.length;
        var _0x548e7f = _0x30bfd7.data.byteOffset || 0;
        var _0x5891f7 = _0x30bfd7.data.buffer || _0x30bfd7.data;
        var _0x4d0af3 = Math.min(_0x55fb5a, _0x1bf99c);
        var _0x345a09 = {
          buffer: new Uint8Array(_0x5891f7, _0x548e7f, _0x4d0af3),
          addr: _0x30bfd7.addr,
          port: _0x30bfd7.port
        };
        if (_0x2aff91.type === 1 && _0x4d0af3 < _0x1bf99c) {
          var _0x247fac = _0x1bf99c - _0x4d0af3;
          _0x30bfd7.data = new Uint8Array(_0x5891f7, _0x548e7f + _0x4d0af3, _0x247fac);
          _0x2aff91.recv_queue.unshift(_0x30bfd7);
        }
        return _0x345a09;
      }
    }
  };
  function _0xc2943d(_0x2f66e3) {
    var _0x427f1c = _0x28da01.getSocket(_0x2f66e3);
    if (!_0x427f1c) {
      throw new _0x379d8a.ErrnoError(8);
    }
    return _0x427f1c;
  }
  function _0x25893a(_0xe43588) {
    _0x49ddaa[_0x123843() >> 2] = _0xe43588;
    return _0xe43588;
  }
  function _0x241ceb(_0x18e2aa) {
    var _0x483132 = _0x18e2aa.split(".");
    for (var _0x5b6647 = 0; _0x5b6647 < 4; _0x5b6647++) {
      var _0x2845d5 = Number(_0x483132[_0x5b6647]);
      if (isNaN(_0x2845d5)) {
        return null;
      }
      _0x483132[_0x5b6647] = _0x2845d5;
    }
    return (_0x483132[0] | _0x483132[1] << 8 | _0x483132[2] << 16 | _0x483132[3] << 24) >>> 0;
  }
  function _0x4d49bd(_0x2c1d23) {
    return parseInt(_0x2c1d23);
  }
  function _0x5a7c1d(_0x57034c) {
    var _0xed3e24;
    var _0x198872;
    var _0x2a7479;
    var _0x4830eb;
    var _0x1e6920 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x173439 = [];
    if (!_0x1e6920.test(_0x57034c)) {
      return null;
    }
    if (_0x57034c === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x57034c.startsWith("::")) {
      _0x57034c = _0x57034c.replace("::", "Z:");
    } else {
      _0x57034c = _0x57034c.replace("::", ":Z:");
    }
    if (_0x57034c.indexOf(".") > 0) {
      _0x57034c = _0x57034c.replace(new RegExp("[.]", "g"), ":");
      _0xed3e24 = _0x57034c.split(":");
      _0xed3e24[_0xed3e24.length - 4] = _0x4d49bd(_0xed3e24[_0xed3e24.length - 4]) + _0x4d49bd(_0xed3e24[_0xed3e24.length - 3]) * 256;
      _0xed3e24[_0xed3e24.length - 3] = _0x4d49bd(_0xed3e24[_0xed3e24.length - 2]) + _0x4d49bd(_0xed3e24[_0xed3e24.length - 1]) * 256;
      _0xed3e24 = _0xed3e24.slice(0, _0xed3e24.length - 2);
    } else {
      _0xed3e24 = _0x57034c.split(":");
    }
    _0x2a7479 = 0;
    _0x4830eb = 0;
    for (_0x198872 = 0; _0x198872 < _0xed3e24.length; _0x198872++) {
      if (typeof _0xed3e24[_0x198872] === "string") {
        if (_0xed3e24[_0x198872] === "Z") {
          for (_0x4830eb = 0; _0x4830eb < 8 - _0xed3e24.length + 1; _0x4830eb++) {
            _0x173439[_0x198872 + _0x4830eb] = 0;
          }
          _0x2a7479 = _0x4830eb - 1;
        } else {
          _0x173439[_0x198872 + _0x2a7479] = _0x5c681e(parseInt(_0xed3e24[_0x198872], 16));
        }
      } else {
        _0x173439[_0x198872 + _0x2a7479] = _0xed3e24[_0x198872];
      }
    }
    return [_0x173439[1] << 16 | _0x173439[0], _0x173439[3] << 16 | _0x173439[2], _0x173439[5] << 16 | _0x173439[4], _0x173439[7] << 16 | _0x173439[6]];
  }
  function _0x4be409(_0x8d4671, _0x4188d0, _0x14dd46, _0x32509f, _0x3639de) {
    switch (_0x4188d0) {
      case 2:
        _0x14dd46 = _0x241ceb(_0x14dd46);
        if (_0x3639de) {
          _0x49ddaa[_0x3639de >> 2] = 16;
        }
        _0x9533b8[_0x8d4671 >> 1] = _0x4188d0;
        _0x49ddaa[_0x8d4671 + 4 >> 2] = _0x14dd46;
        _0x9533b8[_0x8d4671 + 2 >> 1] = _0x5c681e(_0x32509f);
        _0x522fe6 = [0, (_0x23d490 = 0, +Math.abs(_0x23d490) >= 1 ? _0x23d490 > 0 ? (Math.min(+Math.floor(_0x23d490 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x23d490 - +(~~_0x23d490 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x49ddaa[_0x8d4671 + 8 >> 2] = _0x522fe6[0];
        _0x49ddaa[_0x8d4671 + 12 >> 2] = _0x522fe6[1];
        break;
      case 10:
        _0x14dd46 = _0x5a7c1d(_0x14dd46);
        if (_0x3639de) {
          _0x49ddaa[_0x3639de >> 2] = 28;
        }
        _0x49ddaa[_0x8d4671 >> 2] = _0x4188d0;
        _0x49ddaa[_0x8d4671 + 8 >> 2] = _0x14dd46[0];
        _0x49ddaa[_0x8d4671 + 12 >> 2] = _0x14dd46[1];
        _0x49ddaa[_0x8d4671 + 16 >> 2] = _0x14dd46[2];
        _0x49ddaa[_0x8d4671 + 20 >> 2] = _0x14dd46[3];
        _0x9533b8[_0x8d4671 + 2 >> 1] = _0x5c681e(_0x32509f);
        _0x49ddaa[_0x8d4671 + 4 >> 2] = 0;
        _0x49ddaa[_0x8d4671 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x557335 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x56cead) {
      var _0x419893 = _0x241ceb(_0x56cead);
      if (_0x419893 !== null) {
        return _0x56cead;
      }
      _0x419893 = _0x5a7c1d(_0x56cead);
      if (_0x419893 !== null) {
        return _0x56cead;
      }
      var _0x3f1728;
      if (_0x557335.address_map.addrs[_0x56cead]) {
        _0x3f1728 = _0x557335.address_map.addrs[_0x56cead];
      } else {
        var _0x177a4e = _0x557335.address_map.id++;
        _0x5e3281(_0x177a4e < 65535, "exceeded max address mappings of 65535");
        _0x3f1728 = "172.29." + (_0x177a4e & 255) + "." + (_0x177a4e & 65280);
        _0x557335.address_map.names[_0x3f1728] = _0x56cead;
        _0x557335.address_map.addrs[_0x56cead] = _0x3f1728;
      }
      return _0x3f1728;
    },
    lookup_addr: function (_0x360624) {
      if (_0x557335.address_map.names[_0x360624]) {
        return _0x557335.address_map.names[_0x360624];
      }
      return null;
    }
  };
  function _0xaf5ebc(_0x377909, _0x2bb9d4, _0x1f6f85, _0x20f464) {
    try {
      var _0x41f876 = _0xc2943d(_0x377909);
      var _0xf022a0 = _0x41f876.sock_ops.accept(_0x41f876);
      if (_0x2bb9d4) {
        var _0x11ccb1 = _0x4be409(_0x2bb9d4, _0xf022a0.family, _0x557335.lookup_name(_0xf022a0.daddr), _0xf022a0.dport, _0x1f6f85);
      }
      return _0xf022a0.stream.fd;
    } catch (_0x27ccbf) {
      if (typeof _0x379d8a === "undefined" || !(_0x27ccbf instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x27ccbf);
      }
      return -_0x27ccbf.errno;
    }
  }
  function _0xb896cd(_0xe87e0c, _0x23f6cd) {
    try {
      _0xe87e0c = _0x4bec8f.getStr(_0xe87e0c);
      return _0x4bec8f.doAccess(_0xe87e0c, _0x23f6cd);
    } catch (_0x4f8267) {
      if (typeof _0x379d8a === "undefined" || !(_0x4f8267 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x4f8267);
      }
      return -_0x4f8267.errno;
    }
  }
  function _0x22b87b(_0x327184) {
    return (_0x327184 & 255) + "." + (_0x327184 >> 8 & 255) + "." + (_0x327184 >> 16 & 255) + "." + (_0x327184 >> 24 & 255);
  }
  function _0x568ddc(_0x1e201b) {
    var _0x522078 = "";
    var _0xd286cc = 0;
    var _0x27fa1e = 0;
    var _0x6f155 = 0;
    var _0x347e01 = 0;
    var _0x385aa1 = 0;
    var _0x1d7a61 = 0;
    var _0x4fb92d = [_0x1e201b[0] & 65535, _0x1e201b[0] >> 16, _0x1e201b[1] & 65535, _0x1e201b[1] >> 16, _0x1e201b[2] & 65535, _0x1e201b[2] >> 16, _0x1e201b[3] & 65535, _0x1e201b[3] >> 16];
    var _0x3c11a5 = true;
    var _0x28e743 = "";
    for (_0x1d7a61 = 0; _0x1d7a61 < 5; _0x1d7a61++) {
      if (_0x4fb92d[_0x1d7a61] !== 0) {
        _0x3c11a5 = false;
        break;
      }
    }
    if (_0x3c11a5) {
      _0x28e743 = _0x22b87b(_0x4fb92d[6] | _0x4fb92d[7] << 16);
      if (_0x4fb92d[5] === -1) {
        _0x522078 = "::ffff:";
        _0x522078 += _0x28e743;
        return _0x522078;
      }
      if (_0x4fb92d[5] === 0) {
        _0x522078 = "::";
        if (_0x28e743 === "0.0.0.0") {
          _0x28e743 = "";
        }
        if (_0x28e743 === "0.0.0.1") {
          _0x28e743 = "1";
        }
        _0x522078 += _0x28e743;
        return _0x522078;
      }
    }
    for (_0xd286cc = 0; _0xd286cc < 8; _0xd286cc++) {
      if (_0x4fb92d[_0xd286cc] === 0) {
        if (_0xd286cc - _0x6f155 > 1) {
          _0x385aa1 = 0;
        }
        _0x6f155 = _0xd286cc;
        _0x385aa1++;
      }
      if (_0x385aa1 > _0x27fa1e) {
        _0x27fa1e = _0x385aa1;
        _0x347e01 = _0xd286cc - _0x27fa1e + 1;
      }
    }
    for (_0xd286cc = 0; _0xd286cc < 8; _0xd286cc++) {
      if (_0x27fa1e > 1) {
        if (_0x4fb92d[_0xd286cc] === 0 && _0xd286cc >= _0x347e01 && _0xd286cc < _0x347e01 + _0x27fa1e) {
          if (_0xd286cc === _0x347e01) {
            _0x522078 += ":";
            if (_0x347e01 === 0) {
              _0x522078 += ":";
            }
          }
          continue;
        }
      }
      _0x522078 += Number(_0x567f2e(_0x4fb92d[_0xd286cc] & 65535)).toString(16);
      _0x522078 += _0xd286cc < 7 ? ":" : "";
    }
    return _0x522078;
  }
  function _0xa7a705(_0x417105, _0x5dcdcb) {
    var _0x431f2b = _0x9533b8[_0x417105 >> 1];
    var _0x55521f = _0x567f2e(_0x3d21d8[_0x417105 + 2 >> 1]);
    var _0x5a1fc6;
    switch (_0x431f2b) {
      case 2:
        if (_0x5dcdcb !== 16) {
          return {
            errno: 28
          };
        }
        _0x5a1fc6 = _0x49ddaa[_0x417105 + 4 >> 2];
        _0x5a1fc6 = _0x22b87b(_0x5a1fc6);
        break;
      case 10:
        if (_0x5dcdcb !== 28) {
          return {
            errno: 28
          };
        }
        _0x5a1fc6 = [_0x49ddaa[_0x417105 + 8 >> 2], _0x49ddaa[_0x417105 + 12 >> 2], _0x49ddaa[_0x417105 + 16 >> 2], _0x49ddaa[_0x417105 + 20 >> 2]];
        _0x5a1fc6 = _0x568ddc(_0x5a1fc6);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x431f2b,
      addr: _0x5a1fc6,
      port: _0x55521f
    };
  }
  function _0x369a2d(_0x4f4576, _0x4f8ac5, _0xf38685) {
    if (_0xf38685 && _0x4f4576 === 0) {
      return null;
    }
    var _0x4da58f = _0xa7a705(_0x4f4576, _0x4f8ac5);
    if (_0x4da58f.errno) {
      throw new _0x379d8a.ErrnoError(_0x4da58f.errno);
    }
    _0x4da58f.addr = _0x557335.lookup_addr(_0x4da58f.addr) || _0x4da58f.addr;
    return _0x4da58f;
  }
  function _0x342e6e(_0x3f8f7, _0x24eb26, _0x1747da) {
    try {
      var _0x43d1f6 = _0xc2943d(_0x3f8f7);
      var _0x290ec6 = _0x369a2d(_0x24eb26, _0x1747da);
      _0x43d1f6.sock_ops.bind(_0x43d1f6, _0x290ec6.addr, _0x290ec6.port);
      return 0;
    } catch (_0x194462) {
      if (typeof _0x379d8a === "undefined" || !(_0x194462 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x194462);
      }
      return -_0x194462.errno;
    }
  }
  function _0x308a73(_0x533dd6, _0x3bd9ed) {
    try {
      _0x533dd6 = _0x4bec8f.getStr(_0x533dd6);
      _0x379d8a.chmod(_0x533dd6, _0x3bd9ed);
      return 0;
    } catch (_0x193c4d) {
      if (typeof _0x379d8a === "undefined" || !(_0x193c4d instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x193c4d);
      }
      return -_0x193c4d.errno;
    }
  }
  function _0x23817f(_0x996bdd, _0x2439d1, _0x3b8d01) {
    try {
      var _0x107654 = _0xc2943d(_0x996bdd);
      var _0x420365 = _0x369a2d(_0x2439d1, _0x3b8d01);
      _0x107654.sock_ops.connect(_0x107654, _0x420365.addr, _0x420365.port);
      return 0;
    } catch (_0x25e6e8) {
      if (typeof _0x379d8a === "undefined" || !(_0x25e6e8 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x25e6e8);
      }
      return -_0x25e6e8.errno;
    }
  }
  function _0x31ece3(_0x3450b5, _0x34d0b5) {
    try {
      var _0x2d1d7e = _0x4bec8f.getStreamFromFD(_0x3450b5);
      if (_0x2d1d7e.fd === _0x34d0b5) {
        return _0x34d0b5;
      }
      return _0x4bec8f.doDup(_0x2d1d7e.path, _0x2d1d7e.flags, _0x34d0b5);
    } catch (_0x257c39) {
      if (typeof _0x379d8a === "undefined" || !(_0x257c39 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x257c39);
      }
      return -_0x257c39.errno;
    }
  }
  function _0x5136ed(_0x5a0e6b, _0x586006, _0x37de19) {
    _0x4bec8f.varargs = _0x37de19;
    try {
      var _0xb54894 = _0x4bec8f.getStreamFromFD(_0x5a0e6b);
      switch (_0x586006) {
        case 0:
          {
            var _0x59e5ae = _0x4bec8f.get();
            if (_0x59e5ae < 0) {
              return -28;
            }
            var _0x22b78d;
            _0x22b78d = _0x379d8a.open(_0xb54894.path, _0xb54894.flags, 0, _0x59e5ae);
            return _0x22b78d.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0xb54894.flags;
        case 4:
          {
            var _0x59e5ae = _0x4bec8f.get();
            _0xb54894.flags |= _0x59e5ae;
            return 0;
          }
        case 12:
          {
            var _0x59e5ae = _0x4bec8f.get();
            var _0x5da743 = 0;
            _0x9533b8[_0x59e5ae + _0x5da743 >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x25893a(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x1308e1) {
      if (typeof _0x379d8a === "undefined" || !(_0x1308e1 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x1308e1);
      }
      return -_0x1308e1.errno;
    }
  }
  function _0x3ef4c6(_0x2e1ddf, _0xb4414b) {
    try {
      var _0x2c5518 = _0x4bec8f.getStreamFromFD(_0x2e1ddf);
      return _0x4bec8f.doStat(_0x379d8a.stat, _0x2c5518.path, _0xb4414b);
    } catch (_0x17264c) {
      if (typeof _0x379d8a === "undefined" || !(_0x17264c instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x17264c);
      }
      return -_0x17264c.errno;
    }
  }
  function _0x5aa82a(_0x9feca8, _0x393963, _0xf02a49, _0x1fe584) {
    try {
      var _0x557b95 = _0x4bec8f.get64(_0xf02a49, _0x1fe584);
      _0x379d8a.ftruncate(_0x9feca8, _0x557b95);
      return 0;
    } catch (_0x14b3e7) {
      if (typeof _0x379d8a === "undefined" || !(_0x14b3e7 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x14b3e7);
      }
      return -_0x14b3e7.errno;
    }
  }
  function _0x2dd49b(_0x54fb7b, _0x2d981a) {
    try {
      if (_0x2d981a === 0) {
        return -28;
      }
      var _0x3bb31d = _0x379d8a.cwd();
      var _0x4dedfe = _0x18f5b9(_0x3bb31d);
      if (_0x2d981a < _0x4dedfe + 1) {
        return -68;
      }
      _0x2117d9(_0x3bb31d, _0x54fb7b, _0x2d981a);
      return _0x54fb7b;
    } catch (_0x14240b) {
      if (typeof _0x379d8a === "undefined" || !(_0x14240b instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x14240b);
      }
      return -_0x14240b.errno;
    }
  }
  function _0x48b327(_0x4f6227, _0x8ebc90, _0x4e00bb) {
    try {
      var _0x3b5dea = _0x4bec8f.getStreamFromFD(_0x4f6227);
      if (!_0x3b5dea.getdents) {
        _0x3b5dea.getdents = _0x379d8a.readdir(_0x3b5dea.path);
      }
      var _0x71feb7 = 280;
      var _0x3b168c = 0;
      var _0x382ea0 = _0x379d8a.llseek(_0x3b5dea, 0, 1);
      var _0x569d18 = Math.floor(_0x382ea0 / _0x71feb7);
      while (_0x569d18 < _0x3b5dea.getdents.length && _0x3b168c + _0x71feb7 <= _0x4e00bb) {
        var _0x213d47;
        var _0x461ca0;
        var _0x323815 = _0x3b5dea.getdents[_0x569d18];
        if (_0x323815[0] === ".") {
          _0x213d47 = 1;
          _0x461ca0 = 4;
        } else {
          var _0x4f94b0 = _0x379d8a.lookupNode(_0x3b5dea.node, _0x323815);
          _0x213d47 = _0x4f94b0.id;
          _0x461ca0 = _0x379d8a.isChrdev(_0x4f94b0.mode) ? 2 : _0x379d8a.isDir(_0x4f94b0.mode) ? 4 : _0x379d8a.isLink(_0x4f94b0.mode) ? 10 : 8;
        }
        _0x522fe6 = [_0x213d47 >>> 0, (_0x23d490 = _0x213d47, +Math.abs(_0x23d490) >= 1 ? _0x23d490 > 0 ? (Math.min(+Math.floor(_0x23d490 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x23d490 - +(~~_0x23d490 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x49ddaa[_0x8ebc90 + _0x3b168c >> 2] = _0x522fe6[0];
        _0x49ddaa[_0x8ebc90 + _0x3b168c + 4 >> 2] = _0x522fe6[1];
        _0x522fe6 = [(_0x569d18 + 1) * _0x71feb7 >>> 0, (_0x23d490 = (_0x569d18 + 1) * _0x71feb7, +Math.abs(_0x23d490) >= 1 ? _0x23d490 > 0 ? (Math.min(+Math.floor(_0x23d490 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x23d490 - +(~~_0x23d490 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x49ddaa[_0x8ebc90 + _0x3b168c + 8 >> 2] = _0x522fe6[0];
        _0x49ddaa[_0x8ebc90 + _0x3b168c + 12 >> 2] = _0x522fe6[1];
        _0x9533b8[_0x8ebc90 + _0x3b168c + 16 >> 1] = 280;
        _0x1e6f7f[_0x8ebc90 + _0x3b168c + 18 >> 0] = _0x461ca0;
        _0x2117d9(_0x323815, _0x8ebc90 + _0x3b168c + 19, 256);
        _0x3b168c += _0x71feb7;
        _0x569d18 += 1;
      }
      _0x379d8a.llseek(_0x3b5dea, _0x569d18 * _0x71feb7, 0);
      return _0x3b168c;
    } catch (_0x2b1cae) {
      if (typeof _0x379d8a === "undefined" || !(_0x2b1cae instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x2b1cae);
      }
      return -_0x2b1cae.errno;
    }
  }
  function _0x2afe29() {
    return 0;
  }
  function _0x262301() {
    return _0x2afe29();
  }
  function _0x1adf9a(_0x2f83c8, _0x33ba45, _0x25b320) {
    try {
      var _0x44fd92 = _0xc2943d(_0x2f83c8);
      if (!_0x44fd92.daddr) {
        return -53;
      }
      var _0x1acf2c = _0x4be409(_0x33ba45, _0x44fd92.family, _0x557335.lookup_name(_0x44fd92.daddr), _0x44fd92.dport, _0x25b320);
      return 0;
    } catch (_0x29160f) {
      if (typeof _0x379d8a === "undefined" || !(_0x29160f instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x29160f);
      }
      return -_0x29160f.errno;
    }
  }
  function _0x56bf23() {
    return 42;
  }
  function _0x318fb2(_0x39e616, _0x4038c3) {
    try {
      _0x1d382b(_0x4038c3, 0, 136);
      _0x49ddaa[_0x4038c3 >> 2] = 1;
      _0x49ddaa[_0x4038c3 + 4 >> 2] = 2;
      _0x49ddaa[_0x4038c3 + 8 >> 2] = 3;
      _0x49ddaa[_0x4038c3 + 12 >> 2] = 4;
      return 0;
    } catch (_0x59e061) {
      if (typeof _0x379d8a === "undefined" || !(_0x59e061 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x59e061);
      }
      return -_0x59e061.errno;
    }
  }
  function _0x60448a(_0x44ff7b, _0x5cbce1, _0xb8b95b) {
    try {
      _0xf7c01a("__sys_getsockname " + _0x44ff7b);
      var _0x52034e = _0xc2943d(_0x44ff7b);
      var _0x1c6406 = _0x4be409(_0x5cbce1, _0x52034e.family, _0x557335.lookup_name(_0x52034e.saddr || "0.0.0.0"), _0x52034e.sport, _0xb8b95b);
      return 0;
    } catch (_0x4db0e5) {
      if (typeof _0x379d8a === "undefined" || !(_0x4db0e5 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x4db0e5);
      }
      return -_0x4db0e5.errno;
    }
  }
  function _0x534943(_0x2c286b, _0x50ed94, _0x178d80, _0x291bf2, _0x5b7ff5) {
    try {
      var _0x3895ff = _0xc2943d(_0x2c286b);
      if (_0x50ed94 === 1) {
        if (_0x178d80 === 4) {
          _0x49ddaa[_0x291bf2 >> 2] = _0x3895ff.error;
          _0x49ddaa[_0x5b7ff5 >> 2] = 4;
          _0x3895ff.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x3fd485) {
      if (typeof _0x379d8a === "undefined" || !(_0x3fd485 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3fd485);
      }
      return -_0x3fd485.errno;
    }
  }
  function _0x3edf18() {
    return _0x2afe29();
  }
  function _0x518f3c(_0x31eeb1, _0x2c982d, _0x32ac62) {
    _0x4bec8f.varargs = _0x32ac62;
    try {
      var _0x1e188d = _0x4bec8f.getStreamFromFD(_0x31eeb1);
      switch (_0x2c982d) {
        case 21509:
        case 21505:
          {
            if (!_0x1e188d.tty) {
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
            if (!_0x1e188d.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x1e188d.tty) {
              return -59;
            }
            var _0x14fbf0 = _0x4bec8f.get();
            _0x49ddaa[_0x14fbf0 >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x1e188d.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x14fbf0 = _0x4bec8f.get();
            return _0x379d8a.ioctl(_0x1e188d, _0x2c982d, _0x14fbf0);
          }
        case 21523:
          {
            if (!_0x1e188d.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x1e188d.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0x24323c("bad ioctl syscall " + _0x2c982d);
      }
    } catch (_0x36b582) {
      if (typeof _0x379d8a === "undefined" || !(_0x36b582 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x36b582);
      }
      return -_0x36b582.errno;
    }
  }
  function _0x6d5f92(_0x107eb5, _0x160fdf) {
    try {
      var _0x5cd8a1 = _0xc2943d(_0x107eb5);
      _0x5cd8a1.sock_ops.listen(_0x5cd8a1, _0x160fdf);
      return 0;
    } catch (_0x546633) {
      if (typeof _0x379d8a === "undefined" || !(_0x546633 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x546633);
      }
      return -_0x546633.errno;
    }
  }
  function _0x590d2d(_0x14917f, _0x205e4a) {
    try {
      _0x14917f = _0x4bec8f.getStr(_0x14917f);
      return _0x4bec8f.doStat(_0x379d8a.lstat, _0x14917f, _0x205e4a);
    } catch (_0x2fbe9f) {
      if (typeof _0x379d8a === "undefined" || !(_0x2fbe9f instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x2fbe9f);
      }
      return -_0x2fbe9f.errno;
    }
  }
  function _0x7b189a(_0x2d13d1, _0xf8b1b4) {
    try {
      _0x2d13d1 = _0x4bec8f.getStr(_0x2d13d1);
      return _0x4bec8f.doMkdir(_0x2d13d1, _0xf8b1b4);
    } catch (_0x161f89) {
      if (typeof _0x379d8a === "undefined" || !(_0x161f89 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x161f89);
      }
      return -_0x161f89.errno;
    }
  }
  function _0x4f2833(_0x5942f4, _0x14c9ad, _0x40a360, _0x2aa335, _0x26a7f1, _0x3b754c) {
    _0x3b754c <<= 12;
    var _0x1aaf01;
    var _0x248644 = false;
    if ((_0x2aa335 & 16) !== 0 && _0x5942f4 % 65536 !== 0) {
      return -28;
    }
    if ((_0x2aa335 & 32) !== 0) {
      _0x1aaf01 = _0x2a641e(65536, _0x14c9ad);
      if (!_0x1aaf01) {
        return -48;
      }
      _0x1d382b(_0x1aaf01, 0, _0x14c9ad);
      _0x248644 = true;
    } else {
      var _0x475c67 = _0x379d8a.getStream(_0x26a7f1);
      if (!_0x475c67) {
        return -8;
      }
      var _0x1b91e2 = _0x379d8a.mmap(_0x475c67, _0x5942f4, _0x14c9ad, _0x3b754c, _0x40a360, _0x2aa335);
      _0x1aaf01 = _0x1b91e2.ptr;
      _0x248644 = _0x1b91e2.allocated;
    }
    _0x4bec8f.mappings[_0x1aaf01] = {
      malloc: _0x1aaf01,
      len: _0x14c9ad,
      allocated: _0x248644,
      fd: _0x26a7f1,
      prot: _0x40a360,
      flags: _0x2aa335,
      offset: _0x3b754c
    };
    return _0x1aaf01;
  }
  function _0x2b37ce(_0x5365ee, _0x42eec8, _0x366245, _0xda7df5, _0x5dc758, _0x354850) {
    try {
      return _0x4f2833(_0x5365ee, _0x42eec8, _0x366245, _0xda7df5, _0x5dc758, _0x354850);
    } catch (_0x135d62) {
      if (typeof _0x379d8a === "undefined" || !(_0x135d62 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x135d62);
      }
      return -_0x135d62.errno;
    }
  }
  function _0x5a6b77(_0x34945e, _0x15fc60) {
    if ((_0x34945e | 0) === -1 || _0x15fc60 === 0) {
      return -28;
    }
    var _0x383b04 = _0x4bec8f.mappings[_0x34945e];
    if (!_0x383b04) {
      return 0;
    }
    if (_0x15fc60 === _0x383b04.len) {
      var _0x8ca7ff = _0x379d8a.getStream(_0x383b04.fd);
      if (_0x8ca7ff) {
        if (_0x383b04.prot & 2) {
          _0x4bec8f.doMsync(_0x34945e, _0x8ca7ff, _0x15fc60, _0x383b04.flags, _0x383b04.offset);
        }
        _0x379d8a.munmap(_0x8ca7ff);
      }
      _0x4bec8f.mappings[_0x34945e] = null;
      if (_0x383b04.allocated) {
        _0x3d1553(_0x383b04.malloc);
      }
    }
    return 0;
  }
  function _0xcc69e3(_0x219942, _0x3e09b4) {
    try {
      return _0x5a6b77(_0x219942, _0x3e09b4);
    } catch (_0x4cb3e1) {
      if (typeof _0x379d8a === "undefined" || !(_0x4cb3e1 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x4cb3e1);
      }
      return -_0x4cb3e1.errno;
    }
  }
  function _0x528f64(_0x3174aa, _0x45890f, _0x3bae39) {
    _0x4bec8f.varargs = _0x3bae39;
    try {
      var _0x28cd6d = _0x4bec8f.getStr(_0x3174aa);
      var _0x398bca = _0x3bae39 ? _0x4bec8f.get() : 0;
      var _0x1ea3ef = _0x379d8a.open(_0x28cd6d, _0x45890f, _0x398bca);
      return _0x1ea3ef.fd;
    } catch (_0x3e4f6d) {
      if (typeof _0x379d8a === "undefined" || !(_0x3e4f6d instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3e4f6d);
      }
      return -_0x3e4f6d.errno;
    }
  }
  var _0x4536ce = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x329048) {
      return _0x379d8a.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x2e8bb1 = {
        buckets: []
      };
      _0x2e8bb1.buckets.push({
        buffer: new Uint8Array(_0x4536ce.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x5f0a93 = _0x4536ce.nextname();
      var _0x1ed457 = _0x4536ce.nextname();
      var _0x3f3f35 = _0x379d8a.createNode(_0x4536ce.root, _0x5f0a93, 4096, 0);
      var _0x515e87 = _0x379d8a.createNode(_0x4536ce.root, _0x1ed457, 4096, 0);
      _0x3f3f35.pipe = _0x2e8bb1;
      _0x515e87.pipe = _0x2e8bb1;
      var _0x3db6f2 = _0x379d8a.createStream({
        path: _0x5f0a93,
        node: _0x3f3f35,
        flags: 0,
        seekable: false,
        stream_ops: _0x4536ce.stream_ops
      });
      _0x3f3f35.stream = _0x3db6f2;
      var _0x38c170 = _0x379d8a.createStream({
        path: _0x1ed457,
        node: _0x515e87,
        flags: 1,
        seekable: false,
        stream_ops: _0x4536ce.stream_ops
      });
      _0x515e87.stream = _0x38c170;
      return {
        readable_fd: _0x3db6f2.fd,
        writable_fd: _0x38c170.fd
      };
    },
    stream_ops: {
      poll: function (_0x5c274e) {
        var _0x78b76e = _0x5c274e.node.pipe;
        if ((_0x5c274e.flags & 2097155) === 1) {
          return 260;
        } else if (_0x78b76e.buckets.length > 0) {
          for (var _0x1dde8c = 0; _0x1dde8c < _0x78b76e.buckets.length; _0x1dde8c++) {
            var _0x369d45 = _0x78b76e.buckets[_0x1dde8c];
            if (_0x369d45.offset - _0x369d45.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x2b7741, _0x102da0, _0x40cb94) {
        return _0x4d9e71.EINVAL;
      },
      fsync: function (_0xd503ce) {
        return _0x4d9e71.EINVAL;
      },
      read: function (_0x9e255b, _0x38cce6, _0xab464e, _0x1e6ffb, _0x4abc5c) {
        var _0x2c7a1d = _0x9e255b.node.pipe;
        var _0x40588c = 0;
        for (var _0x3194ec = 0; _0x3194ec < _0x2c7a1d.buckets.length; _0x3194ec++) {
          var _0x5c6303 = _0x2c7a1d.buckets[_0x3194ec];
          _0x40588c += _0x5c6303.offset - _0x5c6303.roffset;
        }
        _0x5e3281(_0x38cce6 instanceof ArrayBuffer || ArrayBuffer.isView(_0x38cce6));
        var _0x201323 = _0x38cce6.subarray(_0xab464e, _0xab464e + _0x1e6ffb);
        if (_0x1e6ffb <= 0) {
          return 0;
        }
        if (_0x40588c == 0) {
          throw new _0x379d8a.ErrnoError(_0x4d9e71.EAGAIN);
        }
        var _0x56d7a8 = Math.min(_0x40588c, _0x1e6ffb);
        var _0x589967 = _0x56d7a8;
        var _0x1746b7 = 0;
        for (var _0x3194ec = 0; _0x3194ec < _0x2c7a1d.buckets.length; _0x3194ec++) {
          var _0x5a1d40 = _0x2c7a1d.buckets[_0x3194ec];
          var _0x2e45f0 = _0x5a1d40.offset - _0x5a1d40.roffset;
          if (_0x56d7a8 <= _0x2e45f0) {
            var _0x242dd8 = _0x5a1d40.buffer.subarray(_0x5a1d40.roffset, _0x5a1d40.offset);
            if (_0x56d7a8 < _0x2e45f0) {
              _0x242dd8 = _0x242dd8.subarray(0, _0x56d7a8);
              _0x5a1d40.roffset += _0x56d7a8;
            } else {
              _0x1746b7++;
            }
            _0x201323.set(_0x242dd8);
            break;
          } else {
            var _0x242dd8 = _0x5a1d40.buffer.subarray(_0x5a1d40.roffset, _0x5a1d40.offset);
            _0x201323.set(_0x242dd8);
            _0x201323 = _0x201323.subarray(_0x242dd8.byteLength);
            _0x56d7a8 -= _0x242dd8.byteLength;
            _0x1746b7++;
          }
        }
        if (_0x1746b7 && _0x1746b7 == _0x2c7a1d.buckets.length) {
          _0x1746b7--;
          _0x2c7a1d.buckets[_0x1746b7].offset = 0;
          _0x2c7a1d.buckets[_0x1746b7].roffset = 0;
        }
        _0x2c7a1d.buckets.splice(0, _0x1746b7);
        return _0x589967;
      },
      write: function (_0x2ff79f, _0x13d42b, _0x21dc63, _0x4111df, _0x5bce91) {
        var _0x39b1c8 = _0x2ff79f.node.pipe;
        _0x5e3281(_0x13d42b instanceof ArrayBuffer || ArrayBuffer.isView(_0x13d42b));
        var _0x324de0 = _0x13d42b.subarray(_0x21dc63, _0x21dc63 + _0x4111df);
        var _0x56db20 = _0x324de0.byteLength;
        if (_0x56db20 <= 0) {
          return 0;
        }
        var _0x24a86 = null;
        if (_0x39b1c8.buckets.length == 0) {
          _0x24a86 = {
            buffer: new Uint8Array(_0x4536ce.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x39b1c8.buckets.push(_0x24a86);
        } else {
          _0x24a86 = _0x39b1c8.buckets[_0x39b1c8.buckets.length - 1];
        }
        _0x5e3281(_0x24a86.offset <= _0x4536ce.BUCKET_BUFFER_SIZE);
        var _0x110436 = _0x4536ce.BUCKET_BUFFER_SIZE - _0x24a86.offset;
        if (_0x110436 >= _0x56db20) {
          _0x24a86.buffer.set(_0x324de0, _0x24a86.offset);
          _0x24a86.offset += _0x56db20;
          return _0x56db20;
        } else if (_0x110436 > 0) {
          _0x24a86.buffer.set(_0x324de0.subarray(0, _0x110436), _0x24a86.offset);
          _0x24a86.offset += _0x110436;
          _0x324de0 = _0x324de0.subarray(_0x110436, _0x324de0.byteLength);
        }
        var _0x1f8d96 = _0x324de0.byteLength / _0x4536ce.BUCKET_BUFFER_SIZE | 0;
        var _0x5b7716 = _0x324de0.byteLength % _0x4536ce.BUCKET_BUFFER_SIZE;
        for (var _0x2a5c7d = 0; _0x2a5c7d < _0x1f8d96; _0x2a5c7d++) {
          var _0x44877d = {
            buffer: new Uint8Array(_0x4536ce.BUCKET_BUFFER_SIZE),
            offset: _0x4536ce.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x39b1c8.buckets.push(_0x44877d);
          _0x44877d.buffer.set(_0x324de0.subarray(0, _0x4536ce.BUCKET_BUFFER_SIZE));
          _0x324de0 = _0x324de0.subarray(_0x4536ce.BUCKET_BUFFER_SIZE, _0x324de0.byteLength);
        }
        if (_0x5b7716 > 0) {
          var _0x44877d = {
            buffer: new Uint8Array(_0x4536ce.BUCKET_BUFFER_SIZE),
            offset: _0x324de0.byteLength,
            roffset: 0
          };
          _0x39b1c8.buckets.push(_0x44877d);
          _0x44877d.buffer.set(_0x324de0);
        }
        return _0x56db20;
      },
      close: function (_0x43786c) {
        var _0x53ab31 = _0x43786c.node.pipe;
        _0x53ab31.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x4536ce.nextname.current) {
        _0x4536ce.nextname.current = 0;
      }
      return "pipe[" + _0x4536ce.nextname.current++ + "]";
    }
  };
  function _0x48cbf9(_0x1acb62) {
    try {
      if (_0x1acb62 == 0) {
        throw new _0x379d8a.ErrnoError(21);
      }
      var _0x159a92 = _0x4536ce.createPipe();
      _0x49ddaa[_0x1acb62 >> 2] = _0x159a92.readable_fd;
      _0x49ddaa[_0x1acb62 + 4 >> 2] = _0x159a92.writable_fd;
      return 0;
    } catch (_0x3e13a5) {
      if (typeof _0x379d8a === "undefined" || !(_0x3e13a5 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3e13a5);
      }
      return -_0x3e13a5.errno;
    }
  }
  function _0x51f05b(_0x15001d, _0x4d51, _0x1c5658) {
    try {
      var _0x1f2a7c = 0;
      for (var _0x3fd02e = 0; _0x3fd02e < _0x4d51; _0x3fd02e++) {
        var _0x13787f = _0x15001d + _0x3fd02e * 8;
        var _0x530f78 = _0x49ddaa[_0x13787f >> 2];
        var _0x2874cd = _0x9533b8[_0x13787f + 4 >> 1];
        var _0x2b10e6 = 32;
        var _0x162eae = _0x379d8a.getStream(_0x530f78);
        if (_0x162eae) {
          _0x2b10e6 = _0x4bec8f.DEFAULT_POLLMASK;
          if (_0x162eae.stream_ops.poll) {
            _0x2b10e6 = _0x162eae.stream_ops.poll(_0x162eae);
          }
        }
        _0x2b10e6 &= _0x2874cd | 8 | 16;
        if (_0x2b10e6) {
          _0x1f2a7c++;
        }
        _0x9533b8[_0x13787f + 6 >> 1] = _0x2b10e6;
      }
      return _0x1f2a7c;
    } catch (_0x22bff9) {
      if (typeof _0x379d8a === "undefined" || !(_0x22bff9 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x22bff9);
      }
      return -_0x22bff9.errno;
    }
  }
  function _0x28bb78(_0x238bc0, _0x22d709, _0x1e19d3) {
    try {
      _0x238bc0 = _0x4bec8f.getStr(_0x238bc0);
      return _0x4bec8f.doReadlink(_0x238bc0, _0x22d709, _0x1e19d3);
    } catch (_0x3acf10) {
      if (typeof _0x379d8a === "undefined" || !(_0x3acf10 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3acf10);
      }
      return -_0x3acf10.errno;
    }
  }
  function _0x4e11b7(_0x1b435a, _0x5be4d3, _0x25d84f, _0x339054, _0x5646df, _0x20b8df) {
    try {
      var _0x5b371f = _0xc2943d(_0x1b435a);
      var _0x5132f4 = _0x5b371f.sock_ops.recvmsg(_0x5b371f, _0x25d84f);
      if (!_0x5132f4) {
        return 0;
      }
      if (_0x5646df) {
        var _0x427a53 = _0x4be409(_0x5646df, _0x5b371f.family, _0x557335.lookup_name(_0x5132f4.addr), _0x5132f4.port, _0x20b8df);
      }
      _0x1c9190.set(_0x5132f4.buffer, _0x5be4d3);
      return _0x5132f4.buffer.byteLength;
    } catch (_0x5724c1) {
      if (typeof _0x379d8a === "undefined" || !(_0x5724c1 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x5724c1);
      }
      return -_0x5724c1.errno;
    }
  }
  function _0x24e56c(_0x2ed488, _0x52ae36, _0x2a2a9b) {
    try {
      var _0x3d5ef7 = _0xc2943d(_0x2ed488);
      var _0x31a396 = _0x49ddaa[_0x52ae36 + 8 >> 2];
      var _0x17fb93 = _0x49ddaa[_0x52ae36 + 12 >> 2];
      var _0x31d9be = 0;
      for (var _0x309747 = 0; _0x309747 < _0x17fb93; _0x309747++) {
        _0x31d9be += _0x49ddaa[_0x31a396 + (_0x309747 * 8 + 4) >> 2];
      }
      var _0x15bc50 = _0x3d5ef7.sock_ops.recvmsg(_0x3d5ef7, _0x31d9be);
      if (!_0x15bc50) {
        return 0;
      }
      var _0xeab693 = _0x49ddaa[_0x52ae36 >> 2];
      if (_0xeab693) {
        var _0x5a0e69 = _0x4be409(_0xeab693, _0x3d5ef7.family, _0x557335.lookup_name(_0x15bc50.addr), _0x15bc50.port);
      }
      var _0x5b9d08 = 0;
      var _0x5c09da = _0x15bc50.buffer.byteLength;
      for (var _0x309747 = 0; _0x5c09da > 0 && _0x309747 < _0x17fb93; _0x309747++) {
        var _0x3d84a2 = _0x49ddaa[_0x31a396 + (_0x309747 * 8 + 0) >> 2];
        var _0x145e24 = _0x49ddaa[_0x31a396 + (_0x309747 * 8 + 4) >> 2];
        if (!_0x145e24) {
          continue;
        }
        var _0xbc7667 = Math.min(_0x145e24, _0x5c09da);
        var _0x27ed52 = _0x15bc50.buffer.subarray(_0x5b9d08, _0x5b9d08 + _0xbc7667);
        _0x1c9190.set(_0x27ed52, _0x3d84a2 + _0x5b9d08);
        _0x5b9d08 += _0xbc7667;
        _0x5c09da -= _0xbc7667;
      }
      return _0x5b9d08;
    } catch (_0x4382db) {
      if (typeof _0x379d8a === "undefined" || !(_0x4382db instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x4382db);
      }
      return -_0x4382db.errno;
    }
  }
  function _0x2a8e25(_0x4c47d3, _0x205b9f) {
    try {
      _0x4c47d3 = _0x4bec8f.getStr(_0x4c47d3);
      _0x205b9f = _0x4bec8f.getStr(_0x205b9f);
      _0x379d8a.rename(_0x4c47d3, _0x205b9f);
      return 0;
    } catch (_0x67c30b) {
      if (typeof _0x379d8a === "undefined" || !(_0x67c30b instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x67c30b);
      }
      return -_0x67c30b.errno;
    }
  }
  function _0x46e08e(_0x4bb6a2) {
    try {
      _0x4bb6a2 = _0x4bec8f.getStr(_0x4bb6a2);
      _0x379d8a.rmdir(_0x4bb6a2);
      return 0;
    } catch (_0x145bc8) {
      if (typeof _0x379d8a === "undefined" || !(_0x145bc8 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x145bc8);
      }
      return -_0x145bc8.errno;
    }
  }
  function _0x13eaf9(_0x3765fa, _0x3f01ff, _0xff7cef) {
    try {
      var _0x2c985a = _0xc2943d(_0x3765fa);
      var _0xe93891 = _0x49ddaa[_0x3f01ff + 8 >> 2];
      var _0x240dbd = _0x49ddaa[_0x3f01ff + 12 >> 2];
      var _0x7cab12;
      var _0x8b3e9;
      var _0x58fc0c = _0x49ddaa[_0x3f01ff >> 2];
      var _0x4b0833 = _0x49ddaa[_0x3f01ff + 4 >> 2];
      if (_0x58fc0c) {
        var _0x259718 = _0xa7a705(_0x58fc0c, _0x4b0833);
        if (_0x259718.errno) {
          return -_0x259718.errno;
        }
        _0x8b3e9 = _0x259718.port;
        _0x7cab12 = _0x557335.lookup_addr(_0x259718.addr) || _0x259718.addr;
      }
      var _0x3c8263 = 0;
      for (var _0x4580d7 = 0; _0x4580d7 < _0x240dbd; _0x4580d7++) {
        _0x3c8263 += _0x49ddaa[_0xe93891 + (_0x4580d7 * 8 + 4) >> 2];
      }
      var _0x988e6 = new Uint8Array(_0x3c8263);
      var _0x5a335e = 0;
      for (var _0x4580d7 = 0; _0x4580d7 < _0x240dbd; _0x4580d7++) {
        var _0x1c152a = _0x49ddaa[_0xe93891 + (_0x4580d7 * 8 + 0) >> 2];
        var _0x426d80 = _0x49ddaa[_0xe93891 + (_0x4580d7 * 8 + 4) >> 2];
        for (var _0x74cfe2 = 0; _0x74cfe2 < _0x426d80; _0x74cfe2++) {
          _0x988e6[_0x5a335e++] = _0x1e6f7f[_0x1c152a + _0x74cfe2 >> 0];
        }
      }
      return _0x2c985a.sock_ops.sendmsg(_0x2c985a, _0x988e6, 0, _0x3c8263, _0x7cab12, _0x8b3e9);
    } catch (_0x3b98d8) {
      if (typeof _0x379d8a === "undefined" || !(_0x3b98d8 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3b98d8);
      }
      return -_0x3b98d8.errno;
    }
  }
  function _0x2f3f56(_0x470887, _0x4d007c, _0x371759, _0xfaf08a, _0xe6ceeb, _0x20cb0c) {
    try {
      var _0xcc7f51 = _0xc2943d(_0x470887);
      var _0x2245d4 = _0x369a2d(_0xe6ceeb, _0x20cb0c, true);
      if (!_0x2245d4) {
        return _0x379d8a.write(_0xcc7f51.stream, _0x1e6f7f, _0x4d007c, _0x371759);
      } else {
        return _0xcc7f51.sock_ops.sendmsg(_0xcc7f51, _0x1e6f7f, _0x4d007c, _0x371759, _0x2245d4.addr, _0x2245d4.port);
      }
    } catch (_0x264e7f) {
      if (typeof _0x379d8a === "undefined" || !(_0x264e7f instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x264e7f);
      }
      return -_0x264e7f.errno;
    }
  }
  function _0x2d01b3(_0x45099f) {
    try {
      return -50;
    } catch (_0x16a7a1) {
      if (typeof _0x379d8a === "undefined" || !(_0x16a7a1 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x16a7a1);
      }
      return -_0x16a7a1.errno;
    }
  }
  function _0x30960d(_0x548782, _0x5b29c6) {
    try {
      _0xc2943d(_0x548782);
      return -52;
    } catch (_0x509023) {
      if (typeof _0x379d8a === "undefined" || !(_0x509023 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x509023);
      }
      return -_0x509023.errno;
    }
  }
  function _0x980fb5(_0x806271, _0x4f2a4d, _0x1cf922) {
    try {
      var _0x9b3cd1 = _0x28da01.createSocket(_0x806271, _0x4f2a4d, _0x1cf922);
      return _0x9b3cd1.stream.fd;
    } catch (_0x432397) {
      if (typeof _0x379d8a === "undefined" || !(_0x432397 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x432397);
      }
      return -_0x432397.errno;
    }
  }
  function _0x437e96(_0x5b4aa1, _0x4796ef) {
    try {
      _0x5b4aa1 = _0x4bec8f.getStr(_0x5b4aa1);
      return _0x4bec8f.doStat(_0x379d8a.stat, _0x5b4aa1, _0x4796ef);
    } catch (_0x23da5d) {
      if (typeof _0x379d8a === "undefined" || !(_0x23da5d instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x23da5d);
      }
      return -_0x23da5d.errno;
    }
  }
  function _0x1f1e9c(_0x3d9631, _0x40592c, _0x3b2c77) {
    try {
      _0x3d9631 = _0x4bec8f.getStr(_0x3d9631);
      _0x49ddaa[_0x3b2c77 + 4 >> 2] = 4096;
      _0x49ddaa[_0x3b2c77 + 40 >> 2] = 4096;
      _0x49ddaa[_0x3b2c77 + 8 >> 2] = 1000000;
      _0x49ddaa[_0x3b2c77 + 12 >> 2] = 500000;
      _0x49ddaa[_0x3b2c77 + 16 >> 2] = 500000;
      _0x49ddaa[_0x3b2c77 + 20 >> 2] = _0x379d8a.nextInode;
      _0x49ddaa[_0x3b2c77 + 24 >> 2] = 1000000;
      _0x49ddaa[_0x3b2c77 + 28 >> 2] = 42;
      _0x49ddaa[_0x3b2c77 + 44 >> 2] = 2;
      _0x49ddaa[_0x3b2c77 + 36 >> 2] = 255;
      return 0;
    } catch (_0x5d354d) {
      if (typeof _0x379d8a === "undefined" || !(_0x5d354d instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x5d354d);
      }
      return -_0x5d354d.errno;
    }
  }
  function _0x4acd59(_0x38ef1d, _0x43cae7, _0x29e851, _0xd067f2) {
    try {
      _0x38ef1d = _0x4bec8f.getStr(_0x38ef1d);
      var _0x3152c6 = _0x4bec8f.get64(_0x29e851, _0xd067f2);
      _0x379d8a.truncate(_0x38ef1d, _0x3152c6);
      return 0;
    } catch (_0x2a92c1) {
      if (typeof _0x379d8a === "undefined" || !(_0x2a92c1 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x2a92c1);
      }
      return -_0x2a92c1.errno;
    }
  }
  function _0x2079c2(_0x10f2cb) {
    try {
      if (!_0x10f2cb) {
        return -21;
      }
      var _0x169805 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      var _0x5110e2 = function (_0x3fc657, _0x83268e) {
        var _0x3fbd0d = _0x169805[_0x3fc657];
        _0x421c6e(_0x83268e, _0x10f2cb + _0x3fbd0d);
      };
      _0x5110e2("sysname", "Emscripten");
      _0x5110e2("nodename", "emscripten");
      _0x5110e2("release", "1.0");
      _0x5110e2("version", "#1");
      _0x5110e2("machine", "wasm32");
      return 0;
    } catch (_0x3d7c35) {
      if (typeof _0x379d8a === "undefined" || !(_0x3d7c35 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3d7c35);
      }
      return -_0x3d7c35.errno;
    }
  }
  function _0x534957(_0x2a41d1) {
    try {
      _0x2a41d1 = _0x4bec8f.getStr(_0x2a41d1);
      _0x379d8a.unlink(_0x2a41d1);
      return 0;
    } catch (_0x31ea81) {
      if (typeof _0x379d8a === "undefined" || !(_0x31ea81 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x31ea81);
      }
      return -_0x31ea81.errno;
    }
  }
  function _0x3e54be() {
    _0x24323c();
  }
  function _0x1fdb6a() {
    if (_0x1fdb6a.start === undefined) {
      _0x1fdb6a.start = Date.now();
    }
    return (Date.now() - _0x1fdb6a.start) * 1000 | 0;
  }
  function _0x3fe9af() {
    if (_0xa8980b) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x4ba9af = true;
  function _0x417de1(_0x183cf1, _0x2c5c83) {
    var _0x36f57c;
    if (_0x183cf1 === 0) {
      _0x36f57c = 1000000;
    } else if (_0x183cf1 === 1 && _0x4ba9af) {
      _0x36f57c = _0x3fe9af();
    } else {
      _0x25893a(28);
      return -1;
    }
    _0x49ddaa[_0x2c5c83 >> 2] = _0x36f57c / 1000000000 | 0;
    _0x49ddaa[_0x2c5c83 + 4 >> 2] = _0x36f57c;
    return 0;
  }
  var _0x5abed0;
  if (_0xa8980b) {
    _0x5abed0 = function () {
      var _0x26ec70 = process.hrtime();
      return _0x26ec70[0] * 1000 + _0x26ec70[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x5abed0 = dateNow;
  } else {
    _0x5abed0 = function () {
      return performance.now();
    };
  }
  function _0x5513eb(_0xe795a9, _0x5179be) {
    var _0x2274cc;
    if (_0xe795a9 === 0) {
      _0x2274cc = Date.now();
    } else if ((_0xe795a9 === 1 || _0xe795a9 === 4) && _0x4ba9af) {
      _0x2274cc = _0x5abed0();
    } else {
      _0x25893a(28);
      return -1;
    }
    _0x49ddaa[_0x5179be >> 2] = _0x2274cc / 1000 | 0;
    _0x49ddaa[_0x5179be + 4 >> 2] = _0x2274cc % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x5401e6(_0x5a5e86, _0x2d6478) {
    return _0x5a5e86 - _0x2d6478;
  }
  function _0x268d11(_0x4d0764) {}
  function _0x161def() {
    return 0;
  }
  function _0x3c873c(_0x57b80c, _0x4769b2) {}
  function _0x5339c8(_0x524cbf, _0x72e576) {
    return 0;
  }
  var _0x31ecd8 = [];
  function _0x11df27(_0x15e3a0, _0x5af1dc) {
    _0x31ecd8.length = 0;
    var _0x11be35;
    _0x5af1dc >>= 2;
    while (_0x11be35 = _0x1c9190[_0x15e3a0++]) {
      var _0xe3580e = _0x11be35 < 105;
      if (_0xe3580e && _0x5af1dc & 1) {
        _0x5af1dc++;
      }
      _0x31ecd8.push(_0xe3580e ? _0x1a8d8e[_0x5af1dc++ >> 1] : _0x49ddaa[_0x5af1dc]);
      ++_0x5af1dc;
    }
    return _0x31ecd8;
  }
  function _0x3cba6f(_0x2cf520, _0x48253c, _0x2b7199, _0x535968) {
    var _0x4f83d7 = _0x11df27(_0x48253c, _0x2b7199);
    return _0x148a64[_0x2cf520].apply(null, _0x4f83d7);
  }
  function _0x99e2f1(_0x418384, _0x2310dd, _0x2a3c0f) {
    return _0x3cba6f(_0x418384, _0x2310dd, _0x2a3c0f, 1);
  }
  function _0x2581ce(_0x371f26, _0x1ec5d9) {
    _0x5a6ed0.mainLoop.timingMode = _0x371f26;
    _0x5a6ed0.mainLoop.timingValue = _0x1ec5d9;
    if (!_0x5a6ed0.mainLoop.func) {
      return 1;
    }
    if (!_0x5a6ed0.mainLoop.running) {
      _0x5a6ed0.mainLoop.running = true;
    }
    if (_0x371f26 == 0) {
      _0x5a6ed0.mainLoop.scheduler = function _0x1c086a() {
        var _0x3c1d64 = Math.max(0, _0x5a6ed0.mainLoop.tickStartTime + _0x1ec5d9 - _0x5abed0()) | 0;
        setTimeout(_0x5a6ed0.mainLoop.runner, _0x3c1d64);
      };
      _0x5a6ed0.mainLoop.method = "timeout";
    } else if (_0x371f26 == 1) {
      _0x5a6ed0.mainLoop.scheduler = function _0x3bdc6c() {
        _0x5a6ed0.requestAnimationFrame(_0x5a6ed0.mainLoop.runner);
      };
      _0x5a6ed0.mainLoop.method = "rAF";
    } else if (_0x371f26 == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x9613ef = [];
        var _0x1ceed4 = "setimmediate";
        var _0x2fdc0a = function (_0x17de20) {
          if (_0x17de20.data === _0x1ceed4 || _0x17de20.data.target === _0x1ceed4) {
            _0x17de20.stopPropagation();
            _0x9613ef.shift()();
          }
        };
        addEventListener("message", _0x2fdc0a, true);
        setImmediate = function _0x18c63c(_0x364fdd) {
          _0x9613ef.push(_0x364fdd);
          if (_0x4b8188) {
            if (_0xad46db.setImmediates === undefined) {
              _0xad46db.setImmediates = [];
            }
            _0xad46db.setImmediates.push(_0x364fdd);
            postMessage({
              target: _0x1ceed4
            });
          } else {
            postMessage(_0x1ceed4, "*");
          }
        };
      }
      _0x5a6ed0.mainLoop.scheduler = function _0x12e818() {
        setImmediate(_0x5a6ed0.mainLoop.runner);
      };
      _0x5a6ed0.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x4e863b(_0x2f9842) {
    _0x5d4289(_0x2f9842);
  }
  function _0x4dcf79() {
    if (!_0xd18990()) {
      try {
        _0x4e863b(_0x66bf97);
      } catch (_0x2484dc) {
        if (_0x2484dc instanceof _0x179a79) {
          return;
        }
        throw _0x2484dc;
      }
    }
  }
  function _0x37057d(_0x4e3e20, _0x3d16af, _0x4e8934, _0x48b676, _0x34e7e7) {
    _0x5e3281(!_0x5a6ed0.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x5a6ed0.mainLoop.func = _0x4e3e20;
    _0x5a6ed0.mainLoop.arg = _0x48b676;
    var _0xa73ff4 = _0x5a6ed0.mainLoop.currentlyRunningMainloop;
    function _0x5168ac() {
      if (_0xa73ff4 < _0x5a6ed0.mainLoop.currentlyRunningMainloop) {
        _0x4dcf79();
        return false;
      }
      return true;
    }
    _0x5a6ed0.mainLoop.running = false;
    _0x5a6ed0.mainLoop.runner = function _0x21f6bc() {
      if (_0x150bd9) {
        return;
      }
      if (_0x5a6ed0.mainLoop.queue.length > 0) {
        var _0x208105 = Date.now();
        var _0x518479 = _0x5a6ed0.mainLoop.queue.shift();
        _0x518479.func(_0x518479.arg);
        if (_0x5a6ed0.mainLoop.remainingBlockers) {
          var _0x2681a4 = _0x5a6ed0.mainLoop.remainingBlockers;
          var _0x180bb0 = _0x2681a4 % 1 == 0 ? _0x2681a4 - 1 : Math.floor(_0x2681a4);
          if (_0x518479.counted) {
            _0x5a6ed0.mainLoop.remainingBlockers = _0x180bb0;
          } else {
            _0x180bb0 = _0x180bb0 + 0.5;
            _0x5a6ed0.mainLoop.remainingBlockers = (_0x2681a4 * 8 + _0x180bb0) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x518479.name + "\" took " + (Date.now() - _0x208105) + " ms");
        _0x5a6ed0.mainLoop.updateStatus();
        if (!_0x5168ac()) {
          return;
        }
        setTimeout(_0x5a6ed0.mainLoop.runner, 0);
        return;
      }
      if (!_0x5168ac()) {
        return;
      }
      _0x5a6ed0.mainLoop.currentFrameNumber = _0x5a6ed0.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x5a6ed0.mainLoop.timingMode == 1 && _0x5a6ed0.mainLoop.timingValue > 1 && _0x5a6ed0.mainLoop.currentFrameNumber % _0x5a6ed0.mainLoop.timingValue != 0) {
        _0x5a6ed0.mainLoop.scheduler();
        return;
      } else if (_0x5a6ed0.mainLoop.timingMode == 0) {
        _0x5a6ed0.mainLoop.tickStartTime = _0x5abed0();
      }
      _0x13a76e.newRenderingFrameStarted();
      _0x5a6ed0.mainLoop.runIter(_0x4e3e20);
      if (!_0x5168ac()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x5a6ed0.mainLoop.scheduler();
    };
    if (!_0x34e7e7) {
      if (_0x3d16af && _0x3d16af > 0) {
        _0x2581ce(0, 1000 / _0x3d16af);
      } else {
        _0x2581ce(1, 1);
      }
      _0x5a6ed0.mainLoop.scheduler();
    }
    if (_0x4e8934) {
      throw "unwind";
    }
  }
  function _0x4fe564(_0x122c9b, _0x90eb8) {
    if (_0x150bd9) {
      return;
    }
    if (_0x90eb8) {
      _0x122c9b();
      return;
    }
    try {
      _0x122c9b();
    } catch (_0x4ee127) {
      if (_0x4ee127 instanceof _0x179a79) {
        return;
      } else if (_0x4ee127 !== "unwind") {
        if (_0x4ee127 && typeof _0x4ee127 === "object" && _0x4ee127.stack) {
          _0xf7c01a("exception thrown: " + [_0x4ee127, _0x4ee127.stack]);
        }
        throw _0x4ee127;
      }
    }
  }
  var _0x5a6ed0 = {
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
        _0x5a6ed0.mainLoop.scheduler = null;
        _0x5a6ed0.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x5a6ed0.mainLoop.currentlyRunningMainloop++;
        var _0x25ae00 = _0x5a6ed0.mainLoop.timingMode;
        var _0x4cc42f = _0x5a6ed0.mainLoop.timingValue;
        var _0x582fb4 = _0x5a6ed0.mainLoop.func;
        _0x5a6ed0.mainLoop.func = null;
        _0x37057d(_0x582fb4, 0, false, _0x5a6ed0.mainLoop.arg, true);
        _0x2581ce(_0x25ae00, _0x4cc42f);
        _0x5a6ed0.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0xad46db.setStatus) {
          var _0x4ab428 = _0xad46db.statusMessage || "Please wait...";
          var _0x549524 = _0x5a6ed0.mainLoop.remainingBlockers;
          var _0x3e981f = _0x5a6ed0.mainLoop.expectedBlockers;
          if (_0x549524) {
            if (_0x549524 < _0x3e981f) {
              _0xad46db.setStatus(_0x4ab428 + " (" + (_0x3e981f - _0x549524) + "/" + _0x3e981f + ")");
            } else {
              _0xad46db.setStatus(_0x4ab428);
            }
          } else {
            _0xad46db.setStatus("");
          }
        }
      },
      runIter: function (_0x307496) {
        if (_0x150bd9) {
          return;
        }
        if (_0xad46db.preMainLoop) {
          var _0x2add25 = _0xad46db.preMainLoop();
          if (_0x2add25 === false) {
            return;
          }
        }
        _0x4fe564(_0x307496);
        if (_0xad46db.postMainLoop) {
          _0xad46db.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0xad46db.preloadPlugins) {
        _0xad46db.preloadPlugins = [];
      }
      if (_0x5a6ed0.initted) {
        return;
      }
      _0x5a6ed0.initted = true;
      try {
        new Blob();
        _0x5a6ed0.hasBlobConstructor = true;
      } catch (_0x32fb0c) {
        _0x5a6ed0.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x5a6ed0.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x5a6ed0.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x5a6ed0.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0xad46db.noImageDecoding && typeof _0x5a6ed0.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0xad46db.noImageDecoding = true;
      }
      var _0x4d1ebd = {};
      _0x4d1ebd.canHandle = function _0x2231e7(_0x2e69bc) {
        return !_0xad46db.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x2e69bc);
      };
      _0x4d1ebd.handle = function _0x478d2a(_0x1035a6, _0x88ed75, _0xc7749b, _0x178cb2) {
        var _0x5745c0 = null;
        if (_0x5a6ed0.hasBlobConstructor) {
          try {
            _0x5745c0 = new Blob([_0x1035a6], {
              type: _0x5a6ed0.getMimetype(_0x88ed75)
            });
            if (_0x5745c0.size !== _0x1035a6.length) {
              _0x5745c0 = new Blob([new Uint8Array(_0x1035a6).buffer], {
                type: _0x5a6ed0.getMimetype(_0x88ed75)
              });
            }
          } catch (_0x44824b) {
            _0x2e60ec("Blob constructor present but fails: " + _0x44824b + "; falling back to blob builder");
          }
        }
        if (!_0x5745c0) {
          var _0x235493 = new _0x5a6ed0.BlobBuilder();
          _0x235493.append(new Uint8Array(_0x1035a6).buffer);
          _0x5745c0 = _0x235493.getBlob();
        }
        var _0x5e651f = _0x5a6ed0.URLObject.createObjectURL(_0x5745c0);
        var _0x47ae4f = new Image();
        _0x47ae4f.onload = function _0x5eb342() {
          _0x5e3281(_0x47ae4f.complete, "Image " + _0x88ed75 + " could not be decoded");
          var _0x15f8f5 = document.createElement("canvas");
          _0x15f8f5.width = _0x47ae4f.width;
          _0x15f8f5.height = _0x47ae4f.height;
          var _0x2047f9 = _0x15f8f5.getContext("2d");
          _0x2047f9.drawImage(_0x47ae4f, 0, 0);
          _0xad46db.preloadedImages[_0x88ed75] = _0x15f8f5;
          _0x5a6ed0.URLObject.revokeObjectURL(_0x5e651f);
          if (_0xc7749b) {
            _0xc7749b(_0x1035a6);
          }
        };
        _0x47ae4f.onerror = function _0x5e7b41(_0x20a2a9) {
          console.log("Image " + _0x5e651f + " could not be decoded");
          if (_0x178cb2) {
            _0x178cb2();
          }
        };
        _0x47ae4f.src = _0x5e651f;
      };
      _0xad46db.preloadPlugins.push(_0x4d1ebd);
      var _0x4b73f8 = {};
      _0x4b73f8.canHandle = function _0x24fb30(_0xa00f8a) {
        return !_0xad46db.noAudioDecoding && _0xa00f8a.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x4b73f8.handle = function _0x48f6e5(_0x34a2ad, _0x2ec19, _0x5c9cdb, _0x10a265) {
        var _0x4f8139 = false;
        function _0x2bd3a8(_0x59d762) {
          if (_0x4f8139) {
            return;
          }
          _0x4f8139 = true;
          _0xad46db.preloadedAudios[_0x2ec19] = _0x59d762;
          if (_0x5c9cdb) {
            _0x5c9cdb(_0x34a2ad);
          }
        }
        function _0x54ea79() {
          if (_0x4f8139) {
            return;
          }
          _0x4f8139 = true;
          _0xad46db.preloadedAudios[_0x2ec19] = new Audio();
          if (_0x10a265) {
            _0x10a265();
          }
        }
        if (_0x5a6ed0.hasBlobConstructor) {
          try {
            var _0x4e7da9 = new Blob([_0x34a2ad], {
              type: _0x5a6ed0.getMimetype(_0x2ec19)
            });
          } catch (_0x352ff1) {
            return _0x54ea79();
          }
          var _0x5b33ef = _0x5a6ed0.URLObject.createObjectURL(_0x4e7da9);
          var _0x13d816 = new Audio();
          _0x13d816.addEventListener("canplaythrough", function () {
            _0x2bd3a8(_0x13d816);
          }, false);
          _0x13d816.onerror = function _0x28b762(_0x470b69) {
            if (_0x4f8139) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x2ec19 + ", trying slower base64 approach");
            function _0xbdbcba(_0x5d777f) {
              var _0x5185a1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x16ae77 = "=";
              var _0x1b6856 = "";
              var _0x2fc85e = 0;
              var _0x238022 = 0;
              for (var _0x45cadf = 0; _0x45cadf < _0x5d777f.length; _0x45cadf++) {
                _0x2fc85e = _0x2fc85e << 8 | _0x5d777f[_0x45cadf];
                _0x238022 += 8;
                while (_0x238022 >= 6) {
                  var _0x281e07 = _0x2fc85e >> _0x238022 - 6 & 63;
                  _0x238022 -= 6;
                  _0x1b6856 += _0x5185a1[_0x281e07];
                }
              }
              if (_0x238022 == 2) {
                _0x1b6856 += _0x5185a1[(_0x2fc85e & 3) << 4];
                _0x1b6856 += _0x16ae77 + _0x16ae77;
              } else if (_0x238022 == 4) {
                _0x1b6856 += _0x5185a1[(_0x2fc85e & 15) << 2];
                _0x1b6856 += _0x16ae77;
              }
              return _0x1b6856;
            }
            _0x13d816.src = "data:audio/x-" + _0x2ec19.substr(-3) + ";base64," + _0xbdbcba(_0x34a2ad);
            _0x2bd3a8(_0x13d816);
          };
          _0x13d816.src = _0x5b33ef;
          _0x5a6ed0.safeSetTimeout(function () {
            _0x2bd3a8(_0x13d816);
          }, 10000);
        } else {
          return _0x54ea79();
        }
      };
      _0xad46db.preloadPlugins.push(_0x4b73f8);
      function _0xeae0f4() {
        _0x5a6ed0.pointerLock = document.pointerLockElement === _0xad46db.canvas || document.mozPointerLockElement === _0xad46db.canvas || document.webkitPointerLockElement === _0xad46db.canvas || document.msPointerLockElement === _0xad46db.canvas;
      }
      var _0x1c0635 = _0xad46db.canvas;
      if (_0x1c0635) {
        _0x1c0635.requestPointerLock = _0x1c0635.requestPointerLock || _0x1c0635.mozRequestPointerLock || _0x1c0635.webkitRequestPointerLock || _0x1c0635.msRequestPointerLock || function () {};
        _0x1c0635.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x1c0635.exitPointerLock = _0x1c0635.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0xeae0f4, false);
        document.addEventListener("mozpointerlockchange", _0xeae0f4, false);
        document.addEventListener("webkitpointerlockchange", _0xeae0f4, false);
        document.addEventListener("mspointerlockchange", _0xeae0f4, false);
        if (_0xad46db.elementPointerLock) {
          _0x1c0635.addEventListener("click", function (_0x5076ed) {
            if (!_0x5a6ed0.pointerLock && _0xad46db.canvas.requestPointerLock) {
              _0xad46db.canvas.requestPointerLock();
              _0x5076ed.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x24bee2, _0x1b7ed0, _0x1c75fe, _0x4f42f6) {
      if (_0x1b7ed0 && _0xad46db.ctx && _0x24bee2 == _0xad46db.canvas) {
        return _0xad46db.ctx;
      }
      var _0x3c33bc;
      var _0x2b1027;
      if (_0x1b7ed0) {
        var _0x4f5b56 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x4f42f6) {
          for (var _0x3d75b4 in _0x4f42f6) {
            _0x4f5b56[_0x3d75b4] = _0x4f42f6[_0x3d75b4];
          }
        }
        if (typeof _0x13a76e !== "undefined") {
          _0x2b1027 = _0x13a76e.createContext(_0x24bee2, _0x4f5b56);
          if (_0x2b1027) {
            _0x3c33bc = _0x13a76e.getContext(_0x2b1027).GLctx;
          }
        }
      } else {
        _0x3c33bc = _0x24bee2.getContext("2d");
      }
      if (!_0x3c33bc) {
        return null;
      }
      if (_0x1c75fe) {
        if (!_0x1b7ed0) {
          _0x5e3281(typeof _0x134071 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0xad46db.ctx = _0x3c33bc;
        if (_0x1b7ed0) {
          _0x13a76e.makeContextCurrent(_0x2b1027);
        }
        _0xad46db.useWebGL = _0x1b7ed0;
        _0x5a6ed0.moduleContextCreatedCallbacks.forEach(function (_0x3c7ad7) {
          _0x3c7ad7();
        });
        _0x5a6ed0.init();
      }
      return _0x3c33bc;
    },
    destroyContext: function (_0x38474d, _0x35f3bc, _0x39dde2) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0x590d88, _0x1b7b40) {
      _0x5a6ed0.lockPointer = _0x590d88;
      _0x5a6ed0.resizeCanvas = _0x1b7b40;
      if (typeof _0x5a6ed0.lockPointer === "undefined") {
        _0x5a6ed0.lockPointer = true;
      }
      if (typeof _0x5a6ed0.resizeCanvas === "undefined") {
        _0x5a6ed0.resizeCanvas = false;
      }
      var _0x11aeca = _0xad46db.canvas;
      function _0x1d0dd9() {
        _0x5a6ed0.isFullscreen = false;
        var _0x29bb64 = _0x11aeca.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x29bb64) {
          _0x11aeca.exitFullscreen = _0x5a6ed0.exitFullscreen;
          if (_0x5a6ed0.lockPointer) {
            _0x11aeca.requestPointerLock();
          }
          _0x5a6ed0.isFullscreen = true;
          if (_0x5a6ed0.resizeCanvas) {
            _0x5a6ed0.setFullscreenCanvasSize();
          } else {
            _0x5a6ed0.updateCanvasDimensions(_0x11aeca);
          }
        } else {
          _0x29bb64.parentNode.insertBefore(_0x11aeca, _0x29bb64);
          _0x29bb64.parentNode.removeChild(_0x29bb64);
          if (_0x5a6ed0.resizeCanvas) {
            _0x5a6ed0.setWindowedCanvasSize();
          } else {
            _0x5a6ed0.updateCanvasDimensions(_0x11aeca);
          }
        }
        if (_0xad46db.onFullScreen) {
          _0xad46db.onFullScreen(_0x5a6ed0.isFullscreen);
        }
        if (_0xad46db.onFullscreen) {
          _0xad46db.onFullscreen(_0x5a6ed0.isFullscreen);
        }
      }
      if (!_0x5a6ed0.fullscreenHandlersInstalled) {
        _0x5a6ed0.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x1d0dd9, false);
        document.addEventListener("mozfullscreenchange", _0x1d0dd9, false);
        document.addEventListener("webkitfullscreenchange", _0x1d0dd9, false);
        document.addEventListener("MSFullscreenChange", _0x1d0dd9, false);
      }
      var _0x438ce8 = document.createElement("div");
      _0x11aeca.parentNode.insertBefore(_0x438ce8, _0x11aeca);
      _0x438ce8.appendChild(_0x11aeca);
      _0x438ce8.requestFullscreen = _0x438ce8.requestFullscreen || _0x438ce8.mozRequestFullScreen || _0x438ce8.msRequestFullscreen || (_0x438ce8.webkitRequestFullscreen ? function () {
        _0x438ce8.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x438ce8.webkitRequestFullScreen ? function () {
        _0x438ce8.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x438ce8.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x5a6ed0.isFullscreen) {
        return false;
      }
      var _0xf73b6 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0xf73b6.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x58b318) {
      var _0x43b84b = Date.now();
      if (_0x5a6ed0.nextRAF === 0) {
        _0x5a6ed0.nextRAF = _0x43b84b + 1000 / 60;
      } else {
        while (_0x43b84b + 2 >= _0x5a6ed0.nextRAF) {
          _0x5a6ed0.nextRAF += 1000 / 60;
        }
      }
      var _0x44847e = Math.max(_0x5a6ed0.nextRAF - _0x43b84b, 0);
      setTimeout(_0x58b318, _0x44847e);
    },
    requestAnimationFrame: function (_0x52ad50) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x52ad50);
        return;
      }
      var _0x343341 = _0x5a6ed0.fakeRequestAnimationFrame;
      _0x343341(_0x52ad50);
    },
    safeRequestAnimationFrame: function (_0x5ade3d) {
      return _0x5a6ed0.requestAnimationFrame(function () {
        _0x4fe564(_0x5ade3d);
      });
    },
    safeSetTimeout: function (_0x1cc27e, _0x1ec73f) {
      return setTimeout(function () {
        _0x4fe564(_0x1cc27e);
      }, _0x1ec73f);
    },
    getMimetype: function (_0x2df7c1) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x2df7c1.substr(_0x2df7c1.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0xf640) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0xf640);
    },
    getMovementX: function (_0x14f3c5) {
      return _0x14f3c5.movementX || _0x14f3c5.mozMovementX || _0x14f3c5.webkitMovementX || 0;
    },
    getMovementY: function (_0x4b1a57) {
      return _0x4b1a57.movementY || _0x4b1a57.mozMovementY || _0x4b1a57.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x286b0c) {
      var _0x21a6ae = 0;
      switch (_0x286b0c.type) {
        case "DOMMouseScroll":
          _0x21a6ae = _0x286b0c.detail / 3;
          break;
        case "mousewheel":
          _0x21a6ae = _0x286b0c.wheelDelta / 120;
          break;
        case "wheel":
          _0x21a6ae = _0x286b0c.deltaY;
          switch (_0x286b0c.deltaMode) {
            case 0:
              _0x21a6ae /= 100;
              break;
            case 1:
              _0x21a6ae /= 3;
              break;
            case 2:
              _0x21a6ae *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x286b0c.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x286b0c.type;
      }
      return _0x21a6ae;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x1dfb50) {
      if (_0x5a6ed0.pointerLock) {
        if (_0x1dfb50.type != "mousemove" && "mozMovementX" in _0x1dfb50) {
          _0x5a6ed0.mouseMovementX = _0x5a6ed0.mouseMovementY = 0;
        } else {
          _0x5a6ed0.mouseMovementX = _0x5a6ed0.getMovementX(_0x1dfb50);
          _0x5a6ed0.mouseMovementY = _0x5a6ed0.getMovementY(_0x1dfb50);
        }
        if (typeof SDL != "undefined") {
          _0x5a6ed0.mouseX = SDL.mouseX + _0x5a6ed0.mouseMovementX;
          _0x5a6ed0.mouseY = SDL.mouseY + _0x5a6ed0.mouseMovementY;
        } else {
          _0x5a6ed0.mouseX += _0x5a6ed0.mouseMovementX;
          _0x5a6ed0.mouseY += _0x5a6ed0.mouseMovementY;
        }
      } else {
        var _0x282b97 = _0xad46db.canvas.getBoundingClientRect();
        var _0x3ef76c = _0xad46db.canvas.width;
        var _0x4318b9 = _0xad46db.canvas.height;
        var _0x3a7ee7 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0xd89d0b = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x1dfb50.type === "touchstart" || _0x1dfb50.type === "touchend" || _0x1dfb50.type === "touchmove") {
          var _0x839a73 = _0x1dfb50.touch;
          if (_0x839a73 === undefined) {
            return;
          }
          var _0x33ef56 = _0x839a73.pageX - (_0x3a7ee7 + _0x282b97.left);
          var _0x227371 = _0x839a73.pageY - (_0xd89d0b + _0x282b97.top);
          _0x33ef56 = _0x33ef56 * (_0x3ef76c / _0x282b97.width);
          _0x227371 = _0x227371 * (_0x4318b9 / _0x282b97.height);
          var _0x3df557 = {
            x: _0x33ef56,
            y: _0x227371
          };
          if (_0x1dfb50.type === "touchstart") {
            _0x5a6ed0.lastTouches[_0x839a73.identifier] = _0x3df557;
            _0x5a6ed0.touches[_0x839a73.identifier] = _0x3df557;
          } else if (_0x1dfb50.type === "touchend" || _0x1dfb50.type === "touchmove") {
            var _0x3ded68 = _0x5a6ed0.touches[_0x839a73.identifier];
            if (!_0x3ded68) {
              _0x3ded68 = _0x3df557;
            }
            _0x5a6ed0.lastTouches[_0x839a73.identifier] = _0x3ded68;
            _0x5a6ed0.touches[_0x839a73.identifier] = _0x3df557;
          }
          return;
        }
        var _0x98347e = _0x1dfb50.pageX - (_0x3a7ee7 + _0x282b97.left);
        var _0x11b15f = _0x1dfb50.pageY - (_0xd89d0b + _0x282b97.top);
        _0x98347e = _0x98347e * (_0x3ef76c / _0x282b97.width);
        _0x11b15f = _0x11b15f * (_0x4318b9 / _0x282b97.height);
        _0x5a6ed0.mouseMovementX = _0x98347e - _0x5a6ed0.mouseX;
        _0x5a6ed0.mouseMovementY = _0x11b15f - _0x5a6ed0.mouseY;
        _0x5a6ed0.mouseX = _0x98347e;
        _0x5a6ed0.mouseY = _0x11b15f;
      }
    },
    asyncLoad: function (_0x413f76, _0x4c6001, _0x518626, _0x3fa4cc) {
      var _0xb99049 = !_0x3fa4cc ? _0x5c0398("al " + _0x413f76) : "";
      _0x18acf5(_0x413f76, function (_0x4d766b) {
        _0x5e3281(_0x4d766b, "Loading data file \"" + _0x413f76 + "\" failed (no arrayBuffer).");
        _0x4c6001(new Uint8Array(_0x4d766b));
        if (_0xb99049) {
          _0x42d77a(_0xb99049);
        }
      }, function (_0xc55230) {
        if (_0x518626) {
          _0x518626();
        } else {
          throw "Loading data file \"" + _0x413f76 + "\" failed.";
        }
      });
      if (_0xb99049) {
        _0x37f4a1(_0xb99049);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x1aa899 = _0xad46db.canvas;
      _0x5a6ed0.resizeListeners.forEach(function (_0x27943a) {
        _0x27943a(_0x1aa899.width, _0x1aa899.height);
      });
    },
    setCanvasSize: function (_0x4f2a57, _0x278172, _0x7794be) {
      var _0xc77b12 = _0xad46db.canvas;
      _0x5a6ed0.updateCanvasDimensions(_0xc77b12, _0x4f2a57, _0x278172);
      if (!_0x7794be) {
        _0x5a6ed0.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x4e6997 = _0x2fe6c1[SDL.screen >> 2];
        _0x4e6997 = _0x4e6997 | 8388608;
        _0x49ddaa[SDL.screen >> 2] = _0x4e6997;
      }
      _0x5a6ed0.updateCanvasDimensions(_0xad46db.canvas);
      _0x5a6ed0.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x342687 = _0x2fe6c1[SDL.screen >> 2];
        _0x342687 = _0x342687 & ~8388608;
        _0x49ddaa[SDL.screen >> 2] = _0x342687;
      }
      _0x5a6ed0.updateCanvasDimensions(_0xad46db.canvas);
      _0x5a6ed0.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x14a6ca, _0x451859, _0x43b493) {
      if (_0x451859 && _0x43b493) {
        _0x14a6ca.widthNative = _0x451859;
        _0x14a6ca.heightNative = _0x43b493;
      } else {
        _0x451859 = _0x14a6ca.widthNative;
        _0x43b493 = _0x14a6ca.heightNative;
      }
      var _0x1dea29 = _0x451859;
      var _0x1233c6 = _0x43b493;
      if (_0xad46db.forcedAspectRatio && _0xad46db.forcedAspectRatio > 0) {
        if (_0x1dea29 / _0x1233c6 < _0xad46db.forcedAspectRatio) {
          _0x1dea29 = Math.round(_0x1233c6 * _0xad46db.forcedAspectRatio);
        } else {
          _0x1233c6 = Math.round(_0x1dea29 / _0xad46db.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x14a6ca.parentNode && typeof screen != "undefined") {
        var _0x4a615d = Math.min(screen.width / _0x1dea29, screen.height / _0x1233c6);
        _0x1dea29 = Math.round(_0x1dea29 * _0x4a615d);
        _0x1233c6 = Math.round(_0x1233c6 * _0x4a615d);
      }
      if (_0x5a6ed0.resizeCanvas) {
        if (_0x14a6ca.width != _0x1dea29) {
          _0x14a6ca.width = _0x1dea29;
        }
        if (_0x14a6ca.height != _0x1233c6) {
          _0x14a6ca.height = _0x1233c6;
        }
        if (typeof _0x14a6ca.style != "undefined") {
          _0x14a6ca.style.removeProperty("width");
          _0x14a6ca.style.removeProperty("height");
        }
      } else {
        if (_0x14a6ca.width != _0x451859) {
          _0x14a6ca.width = _0x451859;
        }
        if (_0x14a6ca.height != _0x43b493) {
          _0x14a6ca.height = _0x43b493;
        }
        if (typeof _0x14a6ca.style != "undefined") {
          if (_0x1dea29 != _0x451859 || _0x1233c6 != _0x43b493) {
            _0x14a6ca.style.setProperty("width", _0x1dea29 + "px", "important");
            _0x14a6ca.style.setProperty("height", _0x1233c6 + "px", "important");
          } else {
            _0x14a6ca.style.removeProperty("width");
            _0x14a6ca.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x366b1b = _0x5a6ed0.nextWgetRequestHandle;
      _0x5a6ed0.nextWgetRequestHandle++;
      return _0x366b1b;
    }
  };
  function _0x1cd9f8() {
    _0x5a6ed0.mainLoop.pause();
    _0x5a6ed0.mainLoop.func = null;
  }
  function _0x3a29a8(_0x36472e) {
    clearInterval(_0x36472e);
  }
  var _0x1a92b2 = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x5f10ff = _0x1a92b2.eventHandlers.length - 1; _0x5f10ff >= 0; --_0x5f10ff) {
        _0x1a92b2._removeHandler(_0x5f10ff);
      }
      _0x1a92b2.eventHandlers = [];
      _0x1a92b2.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x1a92b2.removeEventListenersRegistered) {
        _0x43e8f2.push(_0x1a92b2.removeAllEventListeners);
        _0x1a92b2.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x57a43e, _0x544d4d, _0x378c6b) {
      function _0x5bbb49(_0x525cc6, _0x522944) {
        if (_0x525cc6.length != _0x522944.length) {
          return false;
        }
        for (var _0x35449d in _0x525cc6) {
          if (_0x525cc6[_0x35449d] != _0x522944[_0x35449d]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x296167 in _0x1a92b2.deferredCalls) {
        var _0x41907e = _0x1a92b2.deferredCalls[_0x296167];
        if (_0x41907e.targetFunction == _0x57a43e && _0x5bbb49(_0x41907e.argsList, _0x378c6b)) {
          return;
        }
      }
      _0x1a92b2.deferredCalls.push({
        targetFunction: _0x57a43e,
        precedence: _0x544d4d,
        argsList: _0x378c6b
      });
      _0x1a92b2.deferredCalls.sort(function (_0x112992, _0x591b1a) {
        return _0x112992.precedence < _0x591b1a.precedence;
      });
    },
    removeDeferredCalls: function (_0x150fc2) {
      for (var _0x432f1f = 0; _0x432f1f < _0x1a92b2.deferredCalls.length; ++_0x432f1f) {
        if (_0x1a92b2.deferredCalls[_0x432f1f].targetFunction == _0x150fc2) {
          _0x1a92b2.deferredCalls.splice(_0x432f1f, 1);
          --_0x432f1f;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x1a92b2.inEventHandler && _0x1a92b2.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x1a92b2.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x494d6b = 0; _0x494d6b < _0x1a92b2.deferredCalls.length; ++_0x494d6b) {
        var _0x4bd98f = _0x1a92b2.deferredCalls[_0x494d6b];
        _0x1a92b2.deferredCalls.splice(_0x494d6b, 1);
        --_0x494d6b;
        _0x4bd98f.targetFunction.apply(null, _0x4bd98f.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0xe90ae4, _0xeacedc) {
      for (var _0x4e0d92 = 0; _0x4e0d92 < _0x1a92b2.eventHandlers.length; ++_0x4e0d92) {
        if (_0x1a92b2.eventHandlers[_0x4e0d92].target == _0xe90ae4 && (!_0xeacedc || _0xeacedc == _0x1a92b2.eventHandlers[_0x4e0d92].eventTypeString)) {
          _0x1a92b2._removeHandler(_0x4e0d92--);
        }
      }
    },
    _removeHandler: function (_0x394577) {
      var _0x4151d8 = _0x1a92b2.eventHandlers[_0x394577];
      _0x4151d8.target.removeEventListener(_0x4151d8.eventTypeString, _0x4151d8.eventListenerFunc, _0x4151d8.useCapture);
      _0x1a92b2.eventHandlers.splice(_0x394577, 1);
    },
    registerOrRemoveHandler: function (_0x825a10) {
      var _0x5989b6 = function _0xa40d16(_0x257ff2) {
        ++_0x1a92b2.inEventHandler;
        _0x1a92b2.currentEventHandler = _0x825a10;
        _0x1a92b2.runDeferredCalls();
        _0x825a10.handlerFunc(_0x257ff2);
        _0x1a92b2.runDeferredCalls();
        --_0x1a92b2.inEventHandler;
      };
      if (_0x825a10.callbackfunc) {
        _0x825a10.eventListenerFunc = _0x5989b6;
        _0x825a10.target.addEventListener(_0x825a10.eventTypeString, _0x5989b6, _0x825a10.useCapture);
        _0x1a92b2.eventHandlers.push(_0x825a10);
        _0x1a92b2.registerRemoveEventListeners();
      } else {
        for (var _0x7c4e16 = 0; _0x7c4e16 < _0x1a92b2.eventHandlers.length; ++_0x7c4e16) {
          if (_0x1a92b2.eventHandlers[_0x7c4e16].target == _0x825a10.target && _0x1a92b2.eventHandlers[_0x7c4e16].eventTypeString == _0x825a10.eventTypeString) {
            _0x1a92b2._removeHandler(_0x7c4e16--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x337d8d) {
      if (!_0x337d8d) {
        return "";
      }
      if (_0x337d8d == window) {
        return "#window";
      }
      if (_0x337d8d == screen) {
        return "#screen";
      }
      if (_0x337d8d && _0x337d8d.nodeName) {
        return _0x337d8d.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x29c5cf = {};
  function _0x29b915(_0x39a229) {
    if (_0x39a229 > 2) {
      return _0x5d80c0(_0x39a229);
    } else {
      return _0x39a229;
    }
  }
  var _0x2d67d4 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x2fadc4(_0x5b6e00) {
    _0x5b6e00 = _0x29b915(_0x5b6e00);
    var _0x2fc895 = _0x2d67d4[_0x5b6e00] || (typeof document !== "undefined" ? document.querySelector(_0x5b6e00) : undefined);
    return _0x2fc895;
  }
  function _0x3d239d(_0x51489d) {
    return _0x2fadc4(_0x51489d);
  }
  function _0x44b56b(_0xd4a6bb, _0x3e3c84, _0x18ae2c) {
    var _0x23745a = _0x3d239d(_0xd4a6bb);
    if (!_0x23745a) {
      return -4;
    }
    _0x49ddaa[_0x3e3c84 >> 2] = _0x23745a.width;
    _0x49ddaa[_0x18ae2c >> 2] = _0x23745a.height;
  }
  function _0x14f2f5(_0x51c021) {
    var _0x302c5d = _0xd24b5e();
    var _0x1715c4 = _0x9577d8(8);
    var _0x1250e7 = _0x1715c4 + 4;
    var _0x907c08 = _0x9577d8(_0x51c021.id.length + 1);
    _0x2117d9(_0x51c021.id, _0x907c08, _0x51c021.id.length + 1);
    var _0x3dc79a = _0x44b56b(_0x907c08, _0x1715c4, _0x1250e7);
    var _0x324826 = [_0x49ddaa[_0x1715c4 >> 2], _0x49ddaa[_0x1250e7 >> 2]];
    _0x114b19(_0x302c5d);
    return _0x324826;
  }
  function _0x1465de(_0x4ba04a, _0x899097, _0x5b643a) {
    var _0x43142f = _0x3d239d(_0x4ba04a);
    if (!_0x43142f) {
      return -4;
    }
    _0x43142f.width = _0x899097;
    _0x43142f.height = _0x5b643a;
    return 0;
  }
  function _0x3b0afc(_0x451ec9, _0x441795, _0x497d5e) {
    if (!_0x451ec9.controlTransferredOffscreen) {
      _0x451ec9.width = _0x441795;
      _0x451ec9.height = _0x497d5e;
    } else {
      var _0x3565c1 = _0xd24b5e();
      var _0x2ce1a9 = _0x9577d8(_0x451ec9.id.length + 1);
      _0x2117d9(_0x451ec9.id, _0x2ce1a9, _0x451ec9.id.length + 1);
      _0x1465de(_0x2ce1a9, _0x441795, _0x497d5e);
      _0x114b19(_0x3565c1);
    }
  }
  function _0x302ed3(_0x21b153) {
    var _0x113122 = _0x14f2f5(_0x21b153);
    var _0x52608d = _0x113122[0];
    var _0x1f7e1f = _0x113122[1];
    var _0x440080 = _0x21b153.style.width;
    var _0x212183 = _0x21b153.style.height;
    var _0x2d701e = _0x21b153.style.backgroundColor;
    var _0x496306 = document.body.style.backgroundColor;
    var _0xa1c8a4 = _0x21b153.style.paddingLeft;
    var _0x440d78 = _0x21b153.style.paddingRight;
    var _0x30d91f = _0x21b153.style.paddingTop;
    var _0x5d1b2a = _0x21b153.style.paddingBottom;
    var _0x246bfd = _0x21b153.style.marginLeft;
    var _0x2daa74 = _0x21b153.style.marginRight;
    var _0x534040 = _0x21b153.style.marginTop;
    var _0x3a3e7c = _0x21b153.style.marginBottom;
    var _0x3675f4 = document.body.style.margin;
    var _0x31c375 = document.documentElement.style.overflow;
    var _0x5c08f5 = document.body.scroll;
    var _0x56bc3d = _0x21b153.style.imageRendering;
    function _0x364f81() {
      var _0x502223 = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x502223) {
        document.removeEventListener("fullscreenchange", _0x364f81);
        document.removeEventListener("webkitfullscreenchange", _0x364f81);
        _0x3b0afc(_0x21b153, _0x52608d, _0x1f7e1f);
        _0x21b153.style.width = _0x440080;
        _0x21b153.style.height = _0x212183;
        _0x21b153.style.backgroundColor = _0x2d701e;
        if (!_0x496306) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x496306;
        _0x21b153.style.paddingLeft = _0xa1c8a4;
        _0x21b153.style.paddingRight = _0x440d78;
        _0x21b153.style.paddingTop = _0x30d91f;
        _0x21b153.style.paddingBottom = _0x5d1b2a;
        _0x21b153.style.marginLeft = _0x246bfd;
        _0x21b153.style.marginRight = _0x2daa74;
        _0x21b153.style.marginTop = _0x534040;
        _0x21b153.style.marginBottom = _0x3a3e7c;
        document.body.style.margin = _0x3675f4;
        document.documentElement.style.overflow = _0x31c375;
        document.body.scroll = _0x5c08f5;
        _0x21b153.style.imageRendering = _0x56bc3d;
        if (_0x21b153.GLctxObject) {
          _0x21b153.GLctxObject.GLctx.viewport(0, 0, _0x52608d, _0x1f7e1f);
        }
        if (_0x29c5cf.canvasResizedCallback) {
          (function (_0x13e769, _0x2325f9, _0x52d768) {
            return _0x40dc82.apply(null, [_0x29c5cf.canvasResizedCallback, _0x13e769, _0x2325f9, _0x52d768]);
          })(37, 0, _0x29c5cf.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0x364f81);
    document.addEventListener("webkitfullscreenchange", _0x364f81);
    return _0x364f81;
  }
  function _0x269eae(_0x5a2423, _0x4d8893, _0x445aaf) {
    _0x5a2423.style.paddingLeft = _0x5a2423.style.paddingRight = _0x445aaf + "px";
    _0x5a2423.style.paddingTop = _0x5a2423.style.paddingBottom = _0x4d8893 + "px";
  }
  function _0x2fc544(_0x594ad1) {
    if (_0x2d67d4.indexOf(_0x594ad1) < 0) {
      return _0x594ad1.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x3137c5(_0x335b41, _0x27220e) {
    var _0x26f5be = _0x302ed3(_0x335b41);
    var _0x138667 = _0x27220e.softFullscreen ? innerWidth : screen.width;
    var _0x4cbb27 = _0x27220e.softFullscreen ? innerHeight : screen.height;
    var _0x5cca55 = _0x2fc544(_0x335b41);
    var _0x39ce0d = _0x5cca55.width;
    var _0x237b51 = _0x5cca55.height;
    var _0x3e1be4 = _0x14f2f5(_0x335b41);
    var _0x21d2fd = _0x3e1be4[0];
    var _0x1a10f3 = _0x3e1be4[1];
    if (_0x27220e.scaleMode == 3) {
      _0x269eae(_0x335b41, (_0x4cbb27 - _0x237b51) / 2, (_0x138667 - _0x39ce0d) / 2);
      _0x138667 = _0x39ce0d;
      _0x4cbb27 = _0x237b51;
    } else if (_0x27220e.scaleMode == 2) {
      if (_0x138667 * _0x1a10f3 < _0x21d2fd * _0x4cbb27) {
        var _0x5adeb1 = _0x1a10f3 * _0x138667 / _0x21d2fd;
        _0x269eae(_0x335b41, (_0x4cbb27 - _0x5adeb1) / 2, 0);
        _0x4cbb27 = _0x5adeb1;
      } else {
        var _0x18ebc3 = _0x21d2fd * _0x4cbb27 / _0x1a10f3;
        _0x269eae(_0x335b41, 0, (_0x138667 - _0x18ebc3) / 2);
        _0x138667 = _0x18ebc3;
      }
    }
    if (!_0x335b41.style.backgroundColor) {
      _0x335b41.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x335b41.style.width = _0x138667 + "px";
    _0x335b41.style.height = _0x4cbb27 + "px";
    if (_0x27220e.filteringMode == 1) {
      _0x335b41.style.imageRendering = "optimizeSpeed";
      _0x335b41.style.imageRendering = "-moz-crisp-edges";
      _0x335b41.style.imageRendering = "-o-crisp-edges";
      _0x335b41.style.imageRendering = "-webkit-optimize-contrast";
      _0x335b41.style.imageRendering = "optimize-contrast";
      _0x335b41.style.imageRendering = "crisp-edges";
      _0x335b41.style.imageRendering = "pixelated";
    }
    var _0x5a600d = _0x27220e.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x27220e.canvasResolutionScaleMode != 0) {
      var _0x1cc04d = _0x138667 * _0x5a600d | 0;
      var _0x2635ab = _0x4cbb27 * _0x5a600d | 0;
      _0x3b0afc(_0x335b41, _0x1cc04d, _0x2635ab);
      if (_0x335b41.GLctxObject) {
        _0x335b41.GLctxObject.GLctx.viewport(0, 0, _0x1cc04d, _0x2635ab);
      }
    }
    return _0x26f5be;
  }
  function _0x2e8d18(_0x38fbb3, _0x4163ac) {
    if (_0x4163ac.scaleMode != 0 || _0x4163ac.canvasResolutionScaleMode != 0) {
      _0x3137c5(_0x38fbb3, _0x4163ac);
    }
    if (_0x38fbb3.requestFullscreen) {
      _0x38fbb3.requestFullscreen();
    } else if (_0x38fbb3.webkitRequestFullscreen) {
      _0x38fbb3.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x1a92b2.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x29c5cf = _0x4163ac;
    if (_0x4163ac.canvasResizedCallback) {
      (function (_0xc6aaf4, _0x3abfa6, _0x41d6bd) {
        return _0x40dc82.apply(null, [_0x4163ac.canvasResizedCallback, _0xc6aaf4, _0x3abfa6, _0x41d6bd]);
      })(37, 0, _0x4163ac.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x95efde() {
    if (!_0x1a92b2.fullscreenEnabled()) {
      return -1;
    }
    _0x1a92b2.removeDeferredCalls(_0x2e8d18);
    var _0x477f59 = _0x2d67d4[1];
    if (_0x477f59.exitFullscreen) {
      if (_0x477f59.fullscreenElement) {
        _0x477f59.exitFullscreen();
      }
    } else if (_0x477f59.webkitExitFullscreen) {
      if (_0x477f59.webkitFullscreenElement) {
        _0x477f59.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1fab0a(_0x1e76df) {
    if (_0x1e76df.requestPointerLock) {
      _0x1e76df.requestPointerLock();
    } else if (_0x1e76df.msRequestPointerLock) {
      _0x1e76df.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x35a263() {
    _0x1a92b2.removeDeferredCalls(_0x1fab0a);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x1e0c4a(_0x1674ec) {
    var _0x378d7a = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x681794 = !!_0x378d7a;
    _0x49ddaa[_0x1674ec >> 2] = _0x681794;
    _0x49ddaa[_0x1674ec + 4 >> 2] = _0x1a92b2.fullscreenEnabled();
    var _0x197158 = _0x681794 ? _0x378d7a : _0x1a92b2.previousFullscreenElement;
    var _0x478c76 = _0x1a92b2.getNodeNameForTarget(_0x197158);
    var _0x20cf7d = _0x197158 && _0x197158.id ? _0x197158.id : "";
    _0x2117d9(_0x478c76, _0x1674ec + 8, 128);
    _0x2117d9(_0x20cf7d, _0x1674ec + 136, 128);
    _0x49ddaa[_0x1674ec + 264 >> 2] = _0x197158 ? _0x197158.clientWidth : 0;
    _0x49ddaa[_0x1674ec + 268 >> 2] = _0x197158 ? _0x197158.clientHeight : 0;
    _0x49ddaa[_0x1674ec + 272 >> 2] = screen.width;
    _0x49ddaa[_0x1674ec + 276 >> 2] = screen.height;
    if (_0x681794) {
      _0x1a92b2.previousFullscreenElement = _0x378d7a;
    }
  }
  function _0x9ee08(_0x483f1c) {
    if (!_0x1a92b2.fullscreenEnabled()) {
      return -1;
    }
    _0x1e0c4a(_0x483f1c);
    return 0;
  }
  function _0x453d89(_0x5baa8b, _0x3bf607) {
    _0x1a8d8e[_0x5baa8b >> 3] = _0x3bf607.timestamp;
    for (var _0xb6e50 = 0; _0xb6e50 < _0x3bf607.axes.length; ++_0xb6e50) {
      _0x1a8d8e[_0x5baa8b + _0xb6e50 * 8 + 16 >> 3] = _0x3bf607.axes[_0xb6e50];
    }
    for (var _0xb6e50 = 0; _0xb6e50 < _0x3bf607.buttons.length; ++_0xb6e50) {
      if (typeof _0x3bf607.buttons[_0xb6e50] === "object") {
        _0x1a8d8e[_0x5baa8b + _0xb6e50 * 8 + 528 >> 3] = _0x3bf607.buttons[_0xb6e50].value;
      } else {
        _0x1a8d8e[_0x5baa8b + _0xb6e50 * 8 + 528 >> 3] = _0x3bf607.buttons[_0xb6e50];
      }
    }
    for (var _0xb6e50 = 0; _0xb6e50 < _0x3bf607.buttons.length; ++_0xb6e50) {
      if (typeof _0x3bf607.buttons[_0xb6e50] === "object") {
        _0x49ddaa[_0x5baa8b + _0xb6e50 * 4 + 1040 >> 2] = _0x3bf607.buttons[_0xb6e50].pressed;
      } else {
        _0x49ddaa[_0x5baa8b + _0xb6e50 * 4 + 1040 >> 2] = _0x3bf607.buttons[_0xb6e50] == 1;
      }
    }
    _0x49ddaa[_0x5baa8b + 1296 >> 2] = _0x3bf607.connected;
    _0x49ddaa[_0x5baa8b + 1300 >> 2] = _0x3bf607.index;
    _0x49ddaa[_0x5baa8b + 8 >> 2] = _0x3bf607.axes.length;
    _0x49ddaa[_0x5baa8b + 12 >> 2] = _0x3bf607.buttons.length;
    _0x2117d9(_0x3bf607.id, _0x5baa8b + 1304, 64);
    _0x2117d9(_0x3bf607.mapping, _0x5baa8b + 1368, 64);
  }
  function _0x5e96d8(_0x842915, _0x2ec910) {
    if (_0x842915 < 0 || _0x842915 >= _0x1a92b2.lastGamepadState.length) {
      return -5;
    }
    if (!_0x1a92b2.lastGamepadState[_0x842915]) {
      return -7;
    }
    _0x453d89(_0x2ec910, _0x1a92b2.lastGamepadState[_0x842915]);
    return 0;
  }
  function _0x3c05f1() {
    return 2147483648;
  }
  function _0x1339b2() {
    return _0x1a92b2.lastGamepadState.length;
  }
  function _0x3fb1d1() {
    _0x1a92b2.removeAllEventListeners();
  }
  function _0x314183(_0x265cd6) {
    return !_0x13a76e.contexts[_0x265cd6] || _0x13a76e.contexts[_0x265cd6].GLctx.isContextLost();
  }
  function _0x310e77(_0x19548f) {
    return _0x19548f < 0 || _0x19548f === 0 && 1 / _0x19548f === -Infinity;
  }
  function _0x4b6cdf(_0x387a7b, _0x2a00d3) {
    return (_0x387a7b >>> 0) + _0x2a00d3 * 4294967296;
  }
  function _0x570e79(_0xb121b7, _0x13a2ae) {
    return (_0xb121b7 >>> 0) + (_0x13a2ae >>> 0) * 4294967296;
  }
  function _0x3711a3(_0x3c0391, _0x5ed4ab) {
    if (_0x3c0391 <= 0) {
      return _0x3c0391;
    }
    var _0x5a66b2 = _0x5ed4ab <= 32 ? Math.abs(1 << _0x5ed4ab - 1) : Math.pow(2, _0x5ed4ab - 1);
    if (_0x3c0391 >= _0x5a66b2 && (_0x5ed4ab <= 32 || _0x3c0391 > _0x5a66b2)) {
      _0x3c0391 = _0x5a66b2 * -2 + _0x3c0391;
    }
    return _0x3c0391;
  }
  function _0x526428(_0x521c02, _0x437f76) {
    if (_0x521c02 >= 0) {
      return _0x521c02;
    }
    if (_0x437f76 <= 32) {
      return Math.abs(1 << _0x437f76 - 1) * 2 + _0x521c02;
    } else {
      return Math.pow(2, _0x437f76) + _0x521c02;
    }
  }
  function _0x215d60(_0x2f900e, _0x181ba3) {
    var _0x2ead7a = _0x2f900e;
    var _0x240b57 = _0x181ba3;
    function _0x233b6c(_0x3e7e96, _0x315a21) {
      if (_0x315a21 === "double" || _0x315a21 === "i64") {
        if (_0x3e7e96 & 7) {
          _0x3e7e96 += 4;
        }
      } else {}
      return _0x3e7e96;
    }
    function _0x16ba83(_0x10ea88) {
      var _0x42780d;
      _0x240b57 = _0x233b6c(_0x240b57, _0x10ea88);
      if (_0x10ea88 === "double") {
        _0x42780d = _0x1a8d8e[_0x240b57 >> 3];
        _0x240b57 += 8;
      } else if (_0x10ea88 == "i64") {
        _0x42780d = [_0x49ddaa[_0x240b57 >> 2], _0x49ddaa[_0x240b57 + 4 >> 2]];
        _0x240b57 += 8;
      } else {
        _0x10ea88 = "i32";
        _0x42780d = _0x49ddaa[_0x240b57 >> 2];
        _0x240b57 += 4;
      }
      return _0x42780d;
    }
    var _0x19425d = [];
    var _0x1c8ad4;
    var _0x5e7df1;
    var _0x2a729a;
    while (1) {
      var _0x22d618 = _0x2ead7a;
      _0x1c8ad4 = _0x1e6f7f[_0x2ead7a >> 0];
      if (_0x1c8ad4 === 0) {
        break;
      }
      _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
      if (_0x1c8ad4 == 37) {
        var _0x592577 = false;
        var _0x5886bc = false;
        var _0x5b170e = false;
        var _0x229472 = false;
        var _0x2354ca = false;
        _0x8cf899: while (1) {
          switch (_0x5e7df1) {
            case 43:
              _0x592577 = true;
              break;
            case 45:
              _0x5886bc = true;
              break;
            case 35:
              _0x5b170e = true;
              break;
            case 48:
              if (_0x229472) {
                break _0x8cf899;
              } else {
                _0x229472 = true;
                break;
              }
            case 32:
              _0x2354ca = true;
              break;
            default:
              break _0x8cf899;
          }
          _0x2ead7a++;
          _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
        }
        var _0x18abda = 0;
        if (_0x5e7df1 == 42) {
          _0x18abda = _0x16ba83("i32");
          _0x2ead7a++;
          _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
        } else {
          while (_0x5e7df1 >= 48 && _0x5e7df1 <= 57) {
            _0x18abda = _0x18abda * 10 + (_0x5e7df1 - 48);
            _0x2ead7a++;
            _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
          }
        }
        var _0x298aea = false;
        var _0x231a03 = -1;
        if (_0x5e7df1 == 46) {
          _0x231a03 = 0;
          _0x298aea = true;
          _0x2ead7a++;
          _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
          if (_0x5e7df1 == 42) {
            _0x231a03 = _0x16ba83("i32");
            _0x2ead7a++;
          } else {
            while (1) {
              var _0x4419c2 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
              if (_0x4419c2 < 48 || _0x4419c2 > 57) {
                break;
              }
              _0x231a03 = _0x231a03 * 10 + (_0x4419c2 - 48);
              _0x2ead7a++;
            }
          }
          _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
        }
        if (_0x231a03 < 0) {
          _0x231a03 = 6;
          _0x298aea = false;
        }
        var _0x55477a;
        switch (String.fromCharCode(_0x5e7df1)) {
          case "h":
            var _0x397cac = _0x1e6f7f[_0x2ead7a + 2 >> 0];
            if (_0x397cac == 104) {
              _0x2ead7a++;
              _0x55477a = 1;
            } else {
              _0x55477a = 2;
            }
            break;
          case "l":
            var _0x397cac = _0x1e6f7f[_0x2ead7a + 2 >> 0];
            if (_0x397cac == 108) {
              _0x2ead7a++;
              _0x55477a = 8;
            } else {
              _0x55477a = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x55477a = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x55477a = 4;
            break;
          default:
            _0x55477a = null;
        }
        if (_0x55477a) {
          _0x2ead7a++;
        }
        _0x5e7df1 = _0x1e6f7f[_0x2ead7a + 1 >> 0];
        switch (String.fromCharCode(_0x5e7df1)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0xf5b6e7 = _0x5e7df1 == 100 || _0x5e7df1 == 105;
              _0x55477a = _0x55477a || 4;
              _0x2a729a = _0x16ba83("i" + _0x55477a * 8);
              var _0x5b3701;
              if (_0x55477a == 8) {
                _0x2a729a = _0x5e7df1 == 117 ? _0x570e79(_0x2a729a[0], _0x2a729a[1]) : _0x4b6cdf(_0x2a729a[0], _0x2a729a[1]);
              }
              if (_0x55477a <= 4) {
                var _0x593579 = Math.pow(256, _0x55477a) - 1;
                _0x2a729a = (_0xf5b6e7 ? _0x3711a3 : _0x526428)(_0x2a729a & _0x593579, _0x55477a * 8);
              }
              var _0x7576b5 = Math.abs(_0x2a729a);
              var _0x105b9e = "";
              if (_0x5e7df1 == 100 || _0x5e7df1 == 105) {
                _0x5b3701 = _0x3711a3(_0x2a729a, _0x55477a * 8, 1).toString(10);
              } else if (_0x5e7df1 == 117) {
                _0x5b3701 = _0x526428(_0x2a729a, _0x55477a * 8, 1).toString(10);
                _0x2a729a = Math.abs(_0x2a729a);
              } else if (_0x5e7df1 == 111) {
                _0x5b3701 = (_0x5b170e ? "0" : "") + _0x7576b5.toString(8);
              } else if (_0x5e7df1 == 120 || _0x5e7df1 == 88) {
                _0x105b9e = _0x5b170e && _0x2a729a != 0 ? "0x" : "";
                if (_0x2a729a < 0) {
                  _0x2a729a = -_0x2a729a;
                  _0x5b3701 = (_0x7576b5 - 1).toString(16);
                  var _0xd01640 = [];
                  for (var _0x4db831 = 0; _0x4db831 < _0x5b3701.length; _0x4db831++) {
                    _0xd01640.push((15 - parseInt(_0x5b3701[_0x4db831], 16)).toString(16));
                  }
                  _0x5b3701 = _0xd01640.join("");
                  while (_0x5b3701.length < _0x55477a * 2) {
                    _0x5b3701 = "f" + _0x5b3701;
                  }
                } else {
                  _0x5b3701 = _0x7576b5.toString(16);
                }
                if (_0x5e7df1 == 88) {
                  _0x105b9e = _0x105b9e.toUpperCase();
                  _0x5b3701 = _0x5b3701.toUpperCase();
                }
              } else if (_0x5e7df1 == 112) {
                if (_0x7576b5 === 0) {
                  _0x5b3701 = "(nil)";
                } else {
                  _0x105b9e = "0x";
                  _0x5b3701 = _0x7576b5.toString(16);
                }
              }
              if (_0x298aea) {
                while (_0x5b3701.length < _0x231a03) {
                  _0x5b3701 = "0" + _0x5b3701;
                }
              }
              if (_0x2a729a >= 0) {
                if (_0x592577) {
                  _0x105b9e = "+" + _0x105b9e;
                } else if (_0x2354ca) {
                  _0x105b9e = " " + _0x105b9e;
                }
              }
              if (_0x5b3701.charAt(0) == "-") {
                _0x105b9e = "-" + _0x105b9e;
                _0x5b3701 = _0x5b3701.substr(1);
              }
              while (_0x105b9e.length + _0x5b3701.length < _0x18abda) {
                if (_0x5886bc) {
                  _0x5b3701 += " ";
                } else if (_0x229472) {
                  _0x5b3701 = "0" + _0x5b3701;
                } else {
                  _0x105b9e = " " + _0x105b9e;
                }
              }
              _0x5b3701 = _0x105b9e + _0x5b3701;
              _0x5b3701.split("").forEach(function (_0x164bc1) {
                _0x19425d.push(_0x164bc1.charCodeAt(0));
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
              _0x2a729a = _0x16ba83("double");
              var _0x5b3701;
              if (isNaN(_0x2a729a)) {
                _0x5b3701 = "nan";
                _0x229472 = false;
              } else if (!isFinite(_0x2a729a)) {
                _0x5b3701 = (_0x2a729a < 0 ? "-" : "") + "inf";
                _0x229472 = false;
              } else {
                var _0xe2481a = false;
                var _0x164694 = Math.min(_0x231a03, 20);
                if (_0x5e7df1 == 103 || _0x5e7df1 == 71) {
                  _0xe2481a = true;
                  _0x231a03 = _0x231a03 || 1;
                  var _0x33ff2e = parseInt(_0x2a729a.toExponential(_0x164694).split("e")[1], 10);
                  if (_0x231a03 > _0x33ff2e && _0x33ff2e >= -4) {
                    _0x5e7df1 = (_0x5e7df1 == 103 ? "f" : "F").charCodeAt(0);
                    _0x231a03 -= _0x33ff2e + 1;
                  } else {
                    _0x5e7df1 = (_0x5e7df1 == 103 ? "e" : "E").charCodeAt(0);
                    _0x231a03--;
                  }
                  _0x164694 = Math.min(_0x231a03, 20);
                }
                if (_0x5e7df1 == 101 || _0x5e7df1 == 69) {
                  _0x5b3701 = _0x2a729a.toExponential(_0x164694);
                  if (/[eE][-+]\d$/.test(_0x5b3701)) {
                    _0x5b3701 = _0x5b3701.slice(0, -1) + "0" + _0x5b3701.slice(-1);
                  }
                } else if (_0x5e7df1 == 102 || _0x5e7df1 == 70) {
                  _0x5b3701 = _0x2a729a.toFixed(_0x164694);
                  if (_0x2a729a === 0 && _0x310e77(_0x2a729a)) {
                    _0x5b3701 = "-" + _0x5b3701;
                  }
                }
                var _0x27f110 = _0x5b3701.split("e");
                if (_0xe2481a && !_0x5b170e) {
                  while (_0x27f110[0].length > 1 && _0x27f110[0].includes(".") && (_0x27f110[0].slice(-1) == "0" || _0x27f110[0].slice(-1) == ".")) {
                    _0x27f110[0] = _0x27f110[0].slice(0, -1);
                  }
                } else {
                  if (_0x5b170e && _0x5b3701.indexOf(".") == -1) {
                    _0x27f110[0] += ".";
                  }
                  while (_0x231a03 > _0x164694++) {
                    _0x27f110[0] += "0";
                  }
                }
                _0x5b3701 = _0x27f110[0] + (_0x27f110.length > 1 ? "e" + _0x27f110[1] : "");
                if (_0x5e7df1 == 69) {
                  _0x5b3701 = _0x5b3701.toUpperCase();
                }
                if (_0x2a729a >= 0) {
                  if (_0x592577) {
                    _0x5b3701 = "+" + _0x5b3701;
                  } else if (_0x2354ca) {
                    _0x5b3701 = " " + _0x5b3701;
                  }
                }
              }
              while (_0x5b3701.length < _0x18abda) {
                if (_0x5886bc) {
                  _0x5b3701 += " ";
                } else if (_0x229472 && (_0x5b3701[0] == "-" || _0x5b3701[0] == "+")) {
                  _0x5b3701 = _0x5b3701[0] + "0" + _0x5b3701.slice(1);
                } else {
                  _0x5b3701 = (_0x229472 ? "0" : " ") + _0x5b3701;
                }
              }
              if (_0x5e7df1 < 97) {
                _0x5b3701 = _0x5b3701.toUpperCase();
              }
              _0x5b3701.split("").forEach(function (_0x54b9a0) {
                _0x19425d.push(_0x54b9a0.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0x496ead = _0x16ba83("i8*");
              var _0x1d0501 = _0x496ead ? _0x45b0a1(_0x496ead) : "(null)".length;
              if (_0x298aea) {
                _0x1d0501 = Math.min(_0x1d0501, _0x231a03);
              }
              if (!_0x5886bc) {
                while (_0x1d0501 < _0x18abda--) {
                  _0x19425d.push(32);
                }
              }
              if (_0x496ead) {
                for (var _0x4db831 = 0; _0x4db831 < _0x1d0501; _0x4db831++) {
                  _0x19425d.push(_0x1c9190[_0x496ead++ >> 0]);
                }
              } else {
                _0x19425d = _0x19425d.concat(_0x3c7b26("(null)".substr(0, _0x1d0501), true));
              }
              if (_0x5886bc) {
                while (_0x1d0501 < _0x18abda--) {
                  _0x19425d.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x5886bc) {
                _0x19425d.push(_0x16ba83("i8"));
              }
              while (--_0x18abda > 0) {
                _0x19425d.push(32);
              }
              if (!_0x5886bc) {
                _0x19425d.push(_0x16ba83("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x2902b2 = _0x16ba83("i32*");
              _0x49ddaa[_0x2902b2 >> 2] = _0x19425d.length;
              break;
            }
          case "%":
            {
              _0x19425d.push(_0x1c8ad4);
              break;
            }
          default:
            {
              for (var _0x4db831 = _0x22d618; _0x4db831 < _0x2ead7a + 2; _0x4db831++) {
                _0x19425d.push(_0x1e6f7f[_0x4db831 >> 0]);
              }
            }
        }
        _0x2ead7a += 2;
      } else {
        _0x19425d.push(_0x1c8ad4);
        _0x2ead7a += 1;
      }
    }
    return _0x19425d;
  }
  function _0x12041b(_0x49e135) {
    if (!_0x49e135 || !_0x49e135.callee || !_0x49e135.callee.name) {
      return [null, "", ""];
    }
    var _0x5866dd = _0x49e135.callee.toString();
    var _0x17551e = _0x49e135.callee.name;
    var _0x143bd0 = "(";
    var _0x455087 = true;
    for (var _0x1ad935 in _0x49e135) {
      var _0x49696e = _0x49e135[_0x1ad935];
      if (!_0x455087) {
        _0x143bd0 += ", ";
      }
      _0x455087 = false;
      if (typeof _0x49696e === "number" || typeof _0x49696e === "string") {
        _0x143bd0 += _0x49696e;
      } else {
        _0x143bd0 += "(" + typeof _0x49696e + ")";
      }
    }
    _0x143bd0 += ")";
    var _0x314822 = _0x49e135.callee.caller;
    _0x49e135 = _0x314822 ? _0x314822.arguments : [];
    if (_0x455087) {
      _0x143bd0 = "";
    }
    return [_0x49e135, _0x17551e, _0x143bd0];
  }
  function _0x20d9c4(_0x1cd93e) {
    var _0x2a88a5 = _0x321f58();
    var _0x2a10b2 = _0x2a88a5.lastIndexOf("_emscripten_log");
    var _0x38d343 = _0x2a88a5.lastIndexOf("_emscripten_get_callstack");
    var _0x280ca6 = _0x2a88a5.indexOf("\n", Math.max(_0x2a10b2, _0x38d343)) + 1;
    _0x2a88a5 = _0x2a88a5.slice(_0x280ca6);
    if (_0x1cd93e & 32) {
      _0x2e60ec("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x1cd93e & 8 && typeof emscripten_source_map === "undefined") {
      _0x2e60ec("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x1cd93e ^= 8;
      _0x1cd93e |= 16;
    }
    var _0x4bcc2b = null;
    if (_0x1cd93e & 128) {
      _0x4bcc2b = _0x12041b(arguments);
      while (_0x4bcc2b[1].includes("_emscripten_")) {
        _0x4bcc2b = _0x12041b(_0x4bcc2b[0]);
      }
    }
    var _0x2c8872 = _0x2a88a5.split("\n");
    _0x2a88a5 = "";
    var _0x59240d = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x476146 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0x2b85a2 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x2c6baa in _0x2c8872) {
      var _0x216520 = _0x2c8872[_0x2c6baa];
      var _0x53f2df = "";
      var _0x465838 = "";
      var _0x35b9e8 = 0;
      var _0x2c988d = 0;
      var _0xae3b05 = _0x2b85a2.exec(_0x216520);
      if (_0xae3b05 && _0xae3b05.length == 5) {
        _0x53f2df = _0xae3b05[1];
        _0x465838 = _0xae3b05[2];
        _0x35b9e8 = _0xae3b05[3];
        _0x2c988d = _0xae3b05[4];
      } else {
        _0xae3b05 = _0x59240d.exec(_0x216520);
        if (!_0xae3b05) {
          _0xae3b05 = _0x476146.exec(_0x216520);
        }
        if (_0xae3b05 && _0xae3b05.length >= 4) {
          _0x53f2df = _0xae3b05[1];
          _0x465838 = _0xae3b05[2];
          _0x35b9e8 = _0xae3b05[3];
          _0x2c988d = _0xae3b05[4] | 0;
        } else {
          _0x2a88a5 += _0x216520 + "\n";
          continue;
        }
      }
      var _0x4a37e7 = false;
      if (_0x1cd93e & 8) {
        var _0x4bb68b = emscripten_source_map.originalPositionFor({
          line: _0x35b9e8,
          column: _0x2c988d
        });
        _0x4a37e7 = _0x4bb68b && _0x4bb68b.source;
        if (_0x4a37e7) {
          if (_0x1cd93e & 64) {
            _0x4bb68b.source = _0x4bb68b.source.substring(_0x4bb68b.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x2a88a5 += "    at " + _0x53f2df + " (" + _0x4bb68b.source + ":" + _0x4bb68b.line + ":" + _0x4bb68b.column + ")\n";
        }
      }
      if (_0x1cd93e & 16 || !_0x4a37e7) {
        if (_0x1cd93e & 64) {
          _0x465838 = _0x465838.substring(_0x465838.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x2a88a5 += (_0x4a37e7 ? "     = " + _0x53f2df : "    at " + _0x53f2df) + " (" + _0x465838 + ":" + _0x35b9e8 + ":" + _0x2c988d + ")\n";
      }
      if (_0x1cd93e & 128 && _0x4bcc2b[0]) {
        if (_0x4bcc2b[1] == _0x53f2df && _0x4bcc2b[2].length > 0) {
          _0x2a88a5 = _0x2a88a5.replace(/\s+$/, "");
          _0x2a88a5 += " with values: " + _0x4bcc2b[1] + _0x4bcc2b[2] + "\n";
        }
        _0x4bcc2b = _0x12041b(_0x4bcc2b[0]);
      }
    }
    _0x2a88a5 = _0x2a88a5.replace(/\s+$/, "");
    return _0x2a88a5;
  }
  function _0x163f2b(_0x4be833, _0x52f67f) {
    if (_0x4be833 & 24) {
      _0x52f67f = _0x52f67f.replace(/\s+$/, "");
      _0x52f67f += (_0x52f67f.length > 0 ? "\n" : "") + _0x20d9c4(_0x4be833);
    }
    if (_0x4be833 & 1) {
      if (_0x4be833 & 4) {
        console.error(_0x52f67f);
      } else if (_0x4be833 & 2) {
        console.warn(_0x52f67f);
      } else if (_0x4be833 & 512) {
        console.info(_0x52f67f);
      } else if (_0x4be833 & 256) {
        console.debug(_0x52f67f);
      } else {
        console.log(_0x52f67f);
      }
    } else if (_0x4be833 & 6) {
      _0xf7c01a(_0x52f67f);
    } else {
      _0x2014a7(_0x52f67f);
    }
  }
  function _0x447586(_0x28ab4d, _0x259316, _0x5de82b) {
    var _0x4852d0 = _0x215d60(_0x259316, _0x5de82b);
    var _0x42def6 = _0x17265e(_0x4852d0, 0);
    _0x163f2b(_0x28ab4d, _0x42def6);
  }
  function _0x3e99eb(_0x1aed57, _0x33a72f) {
    _0xf302ad(_0x1aed57, _0x33a72f || 1);
    throw "longjmp";
  }
  function _0x32fe3d(_0x34f76a, _0x1397fd) {
    return _0x3e99eb(_0x34f76a, _0x1397fd);
  }
  function _0x337ddd(_0x50c81b, _0x3841f0, _0x5dc95a) {
    _0x1c9190.copyWithin(_0x50c81b, _0x3841f0, _0x3841f0 + _0x5dc95a);
  }
  function _0x365c75(_0x4b50a7, _0xc05d00) {
    if (!_0x1a92b2.fullscreenEnabled()) {
      return -1;
    }
    _0x4b50a7 = _0x2fadc4(_0x4b50a7);
    if (!_0x4b50a7) {
      return -4;
    }
    if (!_0x4b50a7.requestFullscreen && !_0x4b50a7.webkitRequestFullscreen) {
      return -3;
    }
    var _0x118ccd = _0x1a92b2.canPerformEventHandlerRequests();
    if (!_0x118ccd) {
      if (_0xc05d00.deferUntilInEventHandler) {
        _0x1a92b2.deferCall(_0x2e8d18, 1, [_0x4b50a7, _0xc05d00]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x2e8d18(_0x4b50a7, _0xc05d00);
  }
  function _0x1f913a(_0x2852c0, _0x7555ab) {
    var _0x42e4dd = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x7555ab,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x365c75(_0x2852c0, _0x42e4dd);
  }
  function _0x197551(_0xc8fcbe, _0xadc705) {
    _0xc8fcbe = _0x2fadc4(_0xc8fcbe);
    if (!_0xc8fcbe) {
      return -4;
    }
    if (!_0xc8fcbe.requestPointerLock && !_0xc8fcbe.msRequestPointerLock) {
      return -1;
    }
    var _0x7decab = _0x1a92b2.canPerformEventHandlerRequests();
    if (!_0x7decab) {
      if (_0xadc705) {
        _0x1a92b2.deferCall(_0x1fab0a, 2, [_0xc8fcbe]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x1fab0a(_0xc8fcbe);
  }
  function _0x5e2e5d(_0x155d5e) {
    try {
      _0x5d8ae6.grow(_0x155d5e - _0x154bbd.byteLength + 65535 >>> 16);
      _0x403ebe(_0x5d8ae6.buffer);
      return 1;
    } catch (_0xf957dd) {}
  }
  function _0x938784(_0x3d6c94) {
    var _0x53e6b5 = _0x1c9190.length;
    _0x3d6c94 = _0x3d6c94 >>> 0;
    var _0xf26f9b = 2147483648;
    if (_0x3d6c94 > _0xf26f9b) {
      return false;
    }
    for (var _0x4c863c = 1; _0x4c863c <= 4; _0x4c863c *= 2) {
      var _0x147a31 = _0x53e6b5 * (1 + 0.2 / _0x4c863c);
      _0x147a31 = Math.min(_0x147a31, _0x3d6c94 + 100663296);
      var _0x524d36 = Math.min(_0xf26f9b, _0x2ce8e6(Math.max(_0x3d6c94, _0x147a31), 65536));
      var _0x5137cd = _0x5e2e5d(_0x524d36);
      if (_0x5137cd) {
        return true;
      }
    }
    return false;
  }
  function _0x23bccb() {
    try {
      if (navigator.getGamepads) {
        if (_0x1a92b2.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x10bdae) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0x509b9e(_0x406d12, _0x181176, _0x2ea8b8, _0x40faaa, _0x1d7abd, _0x43cfd2, _0x45e6aa) {
    if (!_0x1a92b2.focusEvent) {
      _0x1a92b2.focusEvent = _0x304a50(256);
    }
    var _0x48ebcf = function (_0x9622c9) {
      var _0x3abdb2 = _0x9622c9 || event;
      var _0x3e66ac = _0x1a92b2.getNodeNameForTarget(_0x3abdb2.target);
      var _0x28cd7e = _0x3abdb2.target.id ? _0x3abdb2.target.id : "";
      var _0x222fbb = _0x1a92b2.focusEvent;
      _0x2117d9(_0x3e66ac, _0x222fbb + 0, 128);
      _0x2117d9(_0x28cd7e, _0x222fbb + 128, 128);
      if (function (_0x5e472f, _0x47dd57, _0x4f1659) {
        return _0x40dc82.apply(null, [_0x40faaa, _0x5e472f, _0x47dd57, _0x4f1659]);
      }(_0x1d7abd, _0x222fbb, _0x181176)) {
        _0x3abdb2.preventDefault();
      }
    };
    var _0x59e149 = {
      target: _0x2fadc4(_0x406d12),
      eventTypeString: _0x43cfd2,
      callbackfunc: _0x40faaa,
      handlerFunc: _0x48ebcf,
      useCapture: _0x2ea8b8
    };
    _0x1a92b2.registerOrRemoveHandler(_0x59e149);
  }
  function _0x31b836(_0x3d1bd3, _0x5399c0, _0x3468b9, _0x137c53, _0x34d5c6) {
    _0x509b9e(_0x3d1bd3, _0x5399c0, _0x3468b9, _0x137c53, 12, "blur", _0x34d5c6);
    return 0;
  }
  function _0x2c92a9(_0x5a952e, _0x4fce32, _0x309cca, _0x44cc78, _0x5b531d) {
    _0x509b9e(_0x5a952e, _0x4fce32, _0x309cca, _0x44cc78, 13, "focus", _0x5b531d);
    return 0;
  }
  function _0x368008(_0x28efa5, _0x1aa4e3, _0x4121cd, _0x4c92d9, _0x37a2ec, _0x266e21, _0x24bbf0) {
    if (!_0x1a92b2.fullscreenChangeEvent) {
      _0x1a92b2.fullscreenChangeEvent = _0x304a50(280);
    }
    var _0x4dcbd7 = function (_0x509b52) {
      var _0x334b38 = _0x509b52 || event;
      var _0x305837 = _0x1a92b2.fullscreenChangeEvent;
      _0x1e0c4a(_0x305837);
      if (function (_0x2499c2, _0x53cbd7, _0x5850c7) {
        return _0x40dc82.apply(null, [_0x4c92d9, _0x2499c2, _0x53cbd7, _0x5850c7]);
      }(_0x37a2ec, _0x305837, _0x1aa4e3)) {
        _0x334b38.preventDefault();
      }
    };
    var _0x39216a = {
      target: _0x28efa5,
      eventTypeString: _0x266e21,
      callbackfunc: _0x4c92d9,
      handlerFunc: _0x4dcbd7,
      useCapture: _0x4121cd
    };
    _0x1a92b2.registerOrRemoveHandler(_0x39216a);
  }
  function _0x18b77a(_0x5273d1, _0x3a370c, _0x36a881, _0x1de908, _0x55f420) {
    if (!_0x1a92b2.fullscreenEnabled()) {
      return -1;
    }
    _0x5273d1 = _0x2fadc4(_0x5273d1);
    if (!_0x5273d1) {
      return -4;
    }
    _0x368008(_0x5273d1, _0x3a370c, _0x36a881, _0x1de908, 19, "fullscreenchange", _0x55f420);
    _0x368008(_0x5273d1, _0x3a370c, _0x36a881, _0x1de908, 19, "webkitfullscreenchange", _0x55f420);
    return 0;
  }
  function _0x185e70(_0x4fce6e, _0x1887ab, _0x2746dc, _0x199e12, _0xea746e, _0x4cb6fe, _0x54854c) {
    if (!_0x1a92b2.gamepadEvent) {
      _0x1a92b2.gamepadEvent = _0x304a50(1432);
    }
    var _0x4461f2 = function (_0x54bada) {
      var _0x272d61 = _0x54bada || event;
      var _0x1311c4 = _0x1a92b2.gamepadEvent;
      _0x453d89(_0x1311c4, _0x272d61.gamepad);
      if (function (_0x5a0856, _0x2960e4, _0x739cb1) {
        return _0x40dc82.apply(null, [_0x199e12, _0x5a0856, _0x2960e4, _0x739cb1]);
      }(_0xea746e, _0x1311c4, _0x1887ab)) {
        _0x272d61.preventDefault();
      }
    };
    var _0x3b8e81 = {
      target: _0x2fadc4(_0x4fce6e),
      allowsDeferredCalls: true,
      eventTypeString: _0x4cb6fe,
      callbackfunc: _0x199e12,
      handlerFunc: _0x4461f2,
      useCapture: _0x2746dc
    };
    _0x1a92b2.registerOrRemoveHandler(_0x3b8e81);
  }
  function _0x106d2a(_0x4deab2, _0x19355a, _0x47b6a0, _0xbd826a) {
    if (_0x23bccb()) {
      return -1;
    }
    return _0x185e70(2, _0x4deab2, _0x19355a, _0x47b6a0, 26, "gamepadconnected", _0xbd826a);
  }
  function _0x8d8500(_0x26d160, _0x218f62, _0x3f09cd, _0x5ebc26) {
    if (_0x23bccb()) {
      return -1;
    }
    return _0x185e70(2, _0x26d160, _0x218f62, _0x3f09cd, 27, "gamepaddisconnected", _0x5ebc26);
  }
  function _0x4fe6b0(_0x544a76, _0x46743d, _0x57f20c) {
    return setInterval(function () {
      (function (_0x34f3a2) {
        _0xc7c4be.apply(null, [_0x544a76, _0x34f3a2]);
      })(_0x57f20c);
    }, _0x46743d);
  }
  function _0x565adb(_0x3fd74e, _0x931375, _0x27040a, _0x101671, _0x41caf8, _0x760663, _0x455e23) {
    if (!_0x1a92b2.keyEvent) {
      _0x1a92b2.keyEvent = _0x304a50(164);
    }
    var _0x2c8283 = function (_0x3db0ff) {
      var _0x386887 = _0x1a92b2.keyEvent;
      var _0x382c53 = _0x386887 >> 2;
      _0x49ddaa[_0x382c53 + 0] = _0x3db0ff.location;
      _0x49ddaa[_0x382c53 + 1] = _0x3db0ff.ctrlKey;
      _0x49ddaa[_0x382c53 + 2] = _0x3db0ff.shiftKey;
      _0x49ddaa[_0x382c53 + 3] = _0x3db0ff.altKey;
      _0x49ddaa[_0x382c53 + 4] = _0x3db0ff.metaKey;
      _0x49ddaa[_0x382c53 + 5] = _0x3db0ff.repeat;
      _0x49ddaa[_0x382c53 + 6] = _0x3db0ff.charCode;
      _0x49ddaa[_0x382c53 + 7] = _0x3db0ff.keyCode;
      _0x49ddaa[_0x382c53 + 8] = _0x3db0ff.which;
      _0x2117d9(_0x3db0ff.key || "", _0x386887 + 36, 32);
      _0x2117d9(_0x3db0ff.code || "", _0x386887 + 68, 32);
      _0x2117d9(_0x3db0ff.char || "", _0x386887 + 100, 32);
      _0x2117d9(_0x3db0ff.locale || "", _0x386887 + 132, 32);
      if (function (_0x5f51da, _0x473544, _0x25812d) {
        return _0x40dc82.apply(null, [_0x101671, _0x5f51da, _0x473544, _0x25812d]);
      }(_0x41caf8, _0x386887, _0x931375)) {
        _0x3db0ff.preventDefault();
      }
    };
    var _0x5acc38 = {
      target: _0x2fadc4(_0x3fd74e),
      allowsDeferredCalls: true,
      eventTypeString: _0x760663,
      callbackfunc: _0x101671,
      handlerFunc: _0x2c8283,
      useCapture: _0x27040a
    };
    _0x1a92b2.registerOrRemoveHandler(_0x5acc38);
  }
  function _0x288bb1(_0x5b2fa9, _0x37f98c, _0x13ff9e, _0x2742c6, _0x9d302d) {
    _0x565adb(_0x5b2fa9, _0x37f98c, _0x13ff9e, _0x2742c6, 2, "keydown", _0x9d302d);
    return 0;
  }
  function _0x596f90(_0x2099f0, _0x350c1d, _0x756382, _0x477dc1, _0x23b5f9) {
    _0x565adb(_0x2099f0, _0x350c1d, _0x756382, _0x477dc1, 1, "keypress", _0x23b5f9);
    return 0;
  }
  function _0x11fd14(_0x1bfbc0, _0x3e806a, _0x38d935, _0x284bf8, _0x585e23) {
    _0x565adb(_0x1bfbc0, _0x3e806a, _0x38d935, _0x284bf8, 3, "keyup", _0x585e23);
    return 0;
  }
  function _0x17f087(_0x4344f5, _0x41acd6, _0x3027a5) {
    var _0x5b0b9f = function () {
      _0x111b3b.call(null, _0x4344f5);
    };
    _0x37057d(_0x5b0b9f, _0x41acd6, _0x3027a5);
  }
  function _0x11b3ba(_0x1b38bb, _0x3ef142, _0x449de4) {
    var _0x5c7041 = _0x1b38bb >> 2;
    _0x49ddaa[_0x5c7041 + 0] = _0x3ef142.screenX;
    _0x49ddaa[_0x5c7041 + 1] = _0x3ef142.screenY;
    _0x49ddaa[_0x5c7041 + 2] = _0x3ef142.clientX;
    _0x49ddaa[_0x5c7041 + 3] = _0x3ef142.clientY;
    _0x49ddaa[_0x5c7041 + 4] = _0x3ef142.ctrlKey;
    _0x49ddaa[_0x5c7041 + 5] = _0x3ef142.shiftKey;
    _0x49ddaa[_0x5c7041 + 6] = _0x3ef142.altKey;
    _0x49ddaa[_0x5c7041 + 7] = _0x3ef142.metaKey;
    _0x9533b8[_0x5c7041 * 2 + 16] = _0x3ef142.button;
    _0x9533b8[_0x5c7041 * 2 + 17] = _0x3ef142.buttons;
    _0x49ddaa[_0x5c7041 + 9] = _0x3ef142.movementX;
    _0x49ddaa[_0x5c7041 + 10] = _0x3ef142.movementY;
    var _0x455735 = _0x2fc544(_0x449de4);
    _0x49ddaa[_0x5c7041 + 11] = _0x3ef142.clientX - _0x455735.left;
    _0x49ddaa[_0x5c7041 + 12] = _0x3ef142.clientY - _0x455735.top;
  }
  function _0x2ce0e2(_0x2552a6, _0x497f27, _0x514628, _0x98989d, _0x13bec6, _0x74d5e0, _0x31f5f6) {
    if (!_0x1a92b2.mouseEvent) {
      _0x1a92b2.mouseEvent = _0x304a50(64);
    }
    _0x2552a6 = _0x2fadc4(_0x2552a6);
    var _0x1e8b52 = function (_0x34f03e) {
      var _0x416411 = _0x34f03e || event;
      _0x11b3ba(_0x1a92b2.mouseEvent, _0x416411, _0x2552a6);
      if (function (_0x2b386e, _0x18ab17, _0x352289) {
        return _0x40dc82.apply(null, [_0x98989d, _0x2b386e, _0x18ab17, _0x352289]);
      }(_0x13bec6, _0x1a92b2.mouseEvent, _0x497f27)) {
        _0x416411.preventDefault();
      }
    };
    var _0x10e7b1 = {
      target: _0x2552a6,
      allowsDeferredCalls: _0x74d5e0 != "mousemove" && _0x74d5e0 != "mouseenter" && _0x74d5e0 != "mouseleave",
      eventTypeString: _0x74d5e0,
      callbackfunc: _0x98989d,
      handlerFunc: _0x1e8b52,
      useCapture: _0x514628
    };
    _0x1a92b2.registerOrRemoveHandler(_0x10e7b1);
  }
  function _0xf46e7b(_0x17c228, _0x3ccce0, _0x3fb4b2, _0x25f896, _0x2bd507) {
    _0x2ce0e2(_0x17c228, _0x3ccce0, _0x3fb4b2, _0x25f896, 5, "mousedown", _0x2bd507);
    return 0;
  }
  function _0x30c8f5(_0x2ded7d, _0x510df2, _0x2e90a4, _0xcdb498, _0x32447a) {
    _0x2ce0e2(_0x2ded7d, _0x510df2, _0x2e90a4, _0xcdb498, 8, "mousemove", _0x32447a);
    return 0;
  }
  function _0x2bc42a(_0x158c39, _0x3dcb38, _0x6dde99, _0x3ea18f, _0x4461f8) {
    _0x2ce0e2(_0x158c39, _0x3dcb38, _0x6dde99, _0x3ea18f, 6, "mouseup", _0x4461f8);
    return 0;
  }
  function _0x15b086(_0x569b18) {
    var _0x46e9e0 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x75ab80 = !!_0x46e9e0;
    _0x49ddaa[_0x569b18 >> 2] = _0x75ab80;
    var _0x4c089e = _0x1a92b2.getNodeNameForTarget(_0x46e9e0);
    var _0x2d09eb = _0x46e9e0 && _0x46e9e0.id ? _0x46e9e0.id : "";
    _0x2117d9(_0x4c089e, _0x569b18 + 4, 128);
    _0x2117d9(_0x2d09eb, _0x569b18 + 132, 128);
  }
  function _0x410b5(_0x2dccbe, _0x4334a3, _0x19ab39, _0x58ac3a, _0x37f5ce, _0x5526e1, _0x3b11ce) {
    if (!_0x1a92b2.pointerlockChangeEvent) {
      _0x1a92b2.pointerlockChangeEvent = _0x304a50(260);
    }
    var _0x2383b5 = function (_0x28f330) {
      var _0x1cc939 = _0x28f330 || event;
      var _0xcc8115 = _0x1a92b2.pointerlockChangeEvent;
      _0x15b086(_0xcc8115);
      if (function (_0x5b0886, _0x3c2d88, _0x98b70e) {
        return _0x40dc82.apply(null, [_0x58ac3a, _0x5b0886, _0x3c2d88, _0x98b70e]);
      }(_0x37f5ce, _0xcc8115, _0x4334a3)) {
        _0x1cc939.preventDefault();
      }
    };
    var _0x2932e4 = {
      target: _0x2dccbe,
      eventTypeString: _0x5526e1,
      callbackfunc: _0x58ac3a,
      handlerFunc: _0x2383b5,
      useCapture: _0x19ab39
    };
    _0x1a92b2.registerOrRemoveHandler(_0x2932e4);
  }
  function _0x33b4bd(_0x51dca4, _0x4e9234, _0x1c1f22, _0x364f4f, _0x18c8bd) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x51dca4 = _0x2fadc4(_0x51dca4);
    if (!_0x51dca4) {
      return -4;
    }
    _0x410b5(_0x51dca4, _0x4e9234, _0x1c1f22, _0x364f4f, 20, "pointerlockchange", _0x18c8bd);
    _0x410b5(_0x51dca4, _0x4e9234, _0x1c1f22, _0x364f4f, 20, "mozpointerlockchange", _0x18c8bd);
    _0x410b5(_0x51dca4, _0x4e9234, _0x1c1f22, _0x364f4f, 20, "webkitpointerlockchange", _0x18c8bd);
    _0x410b5(_0x51dca4, _0x4e9234, _0x1c1f22, _0x364f4f, 20, "mspointerlockchange", _0x18c8bd);
    return 0;
  }
  function _0xe65314(_0x1b0ebf, _0x4b49dd, _0x4b3fcf, _0x272af6, _0x34621b, _0x2867a2, _0x36c550) {
    if (!_0x1a92b2.touchEvent) {
      _0x1a92b2.touchEvent = _0x304a50(1684);
    }
    _0x1b0ebf = _0x2fadc4(_0x1b0ebf);
    var _0x327212 = function (_0x3bce2f) {
      var _0x24e357;
      var _0x1d13d1 = {};
      var _0xb2c775 = _0x3bce2f.touches;
      for (var _0x470400 = 0; _0x470400 < _0xb2c775.length; ++_0x470400) {
        _0x24e357 = _0xb2c775[_0x470400];
        _0x24e357.isChanged = _0x24e357.onTarget = 0;
        _0x1d13d1[_0x24e357.identifier] = _0x24e357;
      }
      for (var _0x470400 = 0; _0x470400 < _0x3bce2f.changedTouches.length; ++_0x470400) {
        _0x24e357 = _0x3bce2f.changedTouches[_0x470400];
        _0x24e357.isChanged = 1;
        _0x1d13d1[_0x24e357.identifier] = _0x24e357;
      }
      for (var _0x470400 = 0; _0x470400 < _0x3bce2f.targetTouches.length; ++_0x470400) {
        _0x1d13d1[_0x3bce2f.targetTouches[_0x470400].identifier].onTarget = 1;
      }
      var _0x1ab8a1 = _0x1a92b2.touchEvent;
      var _0x268f10 = _0x1ab8a1 >> 2;
      _0x49ddaa[_0x268f10 + 1] = _0x3bce2f.ctrlKey;
      _0x49ddaa[_0x268f10 + 2] = _0x3bce2f.shiftKey;
      _0x49ddaa[_0x268f10 + 3] = _0x3bce2f.altKey;
      _0x49ddaa[_0x268f10 + 4] = _0x3bce2f.metaKey;
      _0x268f10 += 5;
      var _0x8d201f = _0x2fc544(_0x1b0ebf);
      var _0x545cc1 = 0;
      for (var _0x470400 in _0x1d13d1) {
        var _0x24e357 = _0x1d13d1[_0x470400];
        _0x49ddaa[_0x268f10 + 0] = _0x24e357.identifier;
        _0x49ddaa[_0x268f10 + 1] = _0x24e357.screenX;
        _0x49ddaa[_0x268f10 + 2] = _0x24e357.screenY;
        _0x49ddaa[_0x268f10 + 3] = _0x24e357.clientX;
        _0x49ddaa[_0x268f10 + 4] = _0x24e357.clientY;
        _0x49ddaa[_0x268f10 + 5] = _0x24e357.pageX;
        _0x49ddaa[_0x268f10 + 6] = _0x24e357.pageY;
        _0x49ddaa[_0x268f10 + 7] = _0x24e357.isChanged;
        _0x49ddaa[_0x268f10 + 8] = _0x24e357.onTarget;
        _0x49ddaa[_0x268f10 + 9] = _0x24e357.clientX - _0x8d201f.left;
        _0x49ddaa[_0x268f10 + 10] = _0x24e357.clientY - _0x8d201f.top;
        _0x268f10 += 13;
        if (++_0x545cc1 > 31) {
          break;
        }
      }
      _0x49ddaa[_0x1ab8a1 >> 2] = _0x545cc1;
      if (function (_0x5c7f3b, _0x5d3061, _0x146cde) {
        return _0x40dc82.apply(null, [_0x272af6, _0x5c7f3b, _0x5d3061, _0x146cde]);
      }(_0x34621b, _0x1ab8a1, _0x4b49dd)) {
        _0x3bce2f.preventDefault();
      }
    };
    var _0x275968 = {
      target: _0x1b0ebf,
      allowsDeferredCalls: _0x2867a2 == "touchstart" || _0x2867a2 == "touchend",
      eventTypeString: _0x2867a2,
      callbackfunc: _0x272af6,
      handlerFunc: _0x327212,
      useCapture: _0x4b3fcf
    };
    _0x1a92b2.registerOrRemoveHandler(_0x275968);
  }
  function _0x44f10f(_0x5bdb18, _0x1cc5a8, _0x455f98, _0x1deac9, _0x2c11b1) {
    _0xe65314(_0x5bdb18, _0x1cc5a8, _0x455f98, _0x1deac9, 25, "touchcancel", _0x2c11b1);
    return 0;
  }
  function _0x41ba07(_0x467430, _0x3224cf, _0x4c89d8, _0x5497e2, _0x1e3c14) {
    _0xe65314(_0x467430, _0x3224cf, _0x4c89d8, _0x5497e2, 23, "touchend", _0x1e3c14);
    return 0;
  }
  function _0x38f6f3(_0x320730, _0x58ce95, _0x726e70, _0x5995f9, _0x1f213b) {
    _0xe65314(_0x320730, _0x58ce95, _0x726e70, _0x5995f9, 24, "touchmove", _0x1f213b);
    return 0;
  }
  function _0x4a9434(_0x2bb12a, _0x569ed2, _0x162b0e, _0x539f25, _0x5c87ff) {
    _0xe65314(_0x2bb12a, _0x569ed2, _0x162b0e, _0x539f25, 22, "touchstart", _0x5c87ff);
    return 0;
  }
  function _0x16b2ad(_0x1c42e2, _0x358afe, _0x590b71, _0x73ebfa, _0x52abc3, _0x4b77d4, _0xc8d49c) {
    if (!_0x1a92b2.wheelEvent) {
      _0x1a92b2.wheelEvent = _0x304a50(96);
    }
    var _0x503e17 = function (_0x46bb90) {
      var _0x272684 = _0x46bb90 || event;
      var _0x41bbfb = _0x1a92b2.wheelEvent;
      _0x11b3ba(_0x41bbfb, _0x272684, _0x1c42e2);
      _0x1a8d8e[_0x41bbfb + 64 >> 3] = _0x272684.deltaX;
      _0x1a8d8e[_0x41bbfb + 72 >> 3] = _0x272684.deltaY;
      _0x1a8d8e[_0x41bbfb + 80 >> 3] = _0x272684.deltaZ;
      _0x49ddaa[_0x41bbfb + 88 >> 2] = _0x272684.deltaMode;
      if (function (_0x236dfe, _0x3b9515, _0xe0dcf0) {
        return _0x40dc82.apply(null, [_0x73ebfa, _0x236dfe, _0x3b9515, _0xe0dcf0]);
      }(_0x52abc3, _0x41bbfb, _0x358afe)) {
        _0x272684.preventDefault();
      }
    };
    var _0x3205bc = {
      target: _0x1c42e2,
      allowsDeferredCalls: true,
      eventTypeString: _0x4b77d4,
      callbackfunc: _0x73ebfa,
      handlerFunc: _0x503e17,
      useCapture: _0x590b71
    };
    _0x1a92b2.registerOrRemoveHandler(_0x3205bc);
  }
  function _0x2f8fd9(_0x8981bf, _0x5a4209, _0x2c8af3, _0x152d89, _0x754689) {
    _0x8981bf = _0x2fadc4(_0x8981bf);
    if (typeof _0x8981bf.onwheel !== "undefined") {
      _0x16b2ad(_0x8981bf, _0x5a4209, _0x2c8af3, _0x152d89, 9, "wheel", _0x754689);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x1bf444(_0x59d0ad) {
    var _0x257a24 = _0x5abed0();
    while (_0x5abed0() - _0x257a24 < _0x59d0ad) {}
  }
  function _0x334969(_0x411cda) {
    var _0x3464b2 = _0x411cda.getExtension("ANGLE_instanced_arrays");
    if (_0x3464b2) {
      _0x411cda.vertexAttribDivisor = function (_0x298c11, _0x28405a) {
        _0x3464b2.vertexAttribDivisorANGLE(_0x298c11, _0x28405a);
      };
      _0x411cda.drawArraysInstanced = function (_0x43b2a4, _0x267930, _0x35da06, _0x5aa560) {
        _0x3464b2.drawArraysInstancedANGLE(_0x43b2a4, _0x267930, _0x35da06, _0x5aa560);
      };
      _0x411cda.drawElementsInstanced = function (_0x3a22d7, _0x10b6c2, _0x30ec03, _0x5b0850, _0x29d9a6) {
        _0x3464b2.drawElementsInstancedANGLE(_0x3a22d7, _0x10b6c2, _0x30ec03, _0x5b0850, _0x29d9a6);
      };
      return 1;
    }
  }
  function _0x46a5d5(_0x582ca4) {
    var _0x2f4db6 = _0x582ca4.getExtension("OES_vertex_array_object");
    if (_0x2f4db6) {
      _0x582ca4.createVertexArray = function () {
        return _0x2f4db6.createVertexArrayOES();
      };
      _0x582ca4.deleteVertexArray = function (_0x4180c1) {
        _0x2f4db6.deleteVertexArrayOES(_0x4180c1);
      };
      _0x582ca4.bindVertexArray = function (_0x5c789c) {
        _0x2f4db6.bindVertexArrayOES(_0x5c789c);
      };
      _0x582ca4.isVertexArray = function (_0xd41dde) {
        return _0x2f4db6.isVertexArrayOES(_0xd41dde);
      };
      return 1;
    }
  }
  function _0x321201(_0x4c7bb6) {
    var _0xfdf9c8 = _0x4c7bb6.getExtension("WEBGL_draw_buffers");
    if (_0xfdf9c8) {
      _0x4c7bb6.drawBuffers = function (_0x34bbca, _0x4dc2ee) {
        _0xfdf9c8.drawBuffersWEBGL(_0x34bbca, _0x4dc2ee);
      };
      return 1;
    }
  }
  function _0x1972b9(_0x57ecb7) {
    return !!(_0x57ecb7.dibvbi = _0x57ecb7.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x50bdbc(_0x256b3e) {
    return !!(_0x256b3e.mdibvbi = _0x256b3e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x4f4a26(_0x522c29) {
    return !!(_0x522c29.multiDrawWebgl = _0x522c29.getExtension("WEBGL_multi_draw"));
  }
  var _0x13a76e = {
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
    recordError: function _0x32cc48(_0x9c57ab) {
      if (!_0x13a76e.lastError) {
        _0x13a76e.lastError = _0x9c57ab;
      }
    },
    getNewId: function (_0x26cf34) {
      var _0x42408d = _0x13a76e.counter++;
      for (var _0x5cd2cc = _0x26cf34.length; _0x5cd2cc < _0x42408d; _0x5cd2cc++) {
        _0x26cf34[_0x5cd2cc] = null;
      }
      return _0x42408d;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x9dabb3) {
      return 32 - Math.clz32(_0x9dabb3 === 0 ? 0 : _0x9dabb3 - 1);
    },
    generateTempBuffers: function (_0xfa25d6, _0x362e97) {
      var _0x43e3be = _0x13a76e.log2ceilLookup(_0x13a76e.MAX_TEMP_BUFFER_SIZE);
      _0x362e97.tempVertexBufferCounters1 = [];
      _0x362e97.tempVertexBufferCounters2 = [];
      _0x362e97.tempVertexBufferCounters1.length = _0x362e97.tempVertexBufferCounters2.length = _0x43e3be + 1;
      _0x362e97.tempVertexBuffers1 = [];
      _0x362e97.tempVertexBuffers2 = [];
      _0x362e97.tempVertexBuffers1.length = _0x362e97.tempVertexBuffers2.length = _0x43e3be + 1;
      _0x362e97.tempIndexBuffers = [];
      _0x362e97.tempIndexBuffers.length = _0x43e3be + 1;
      for (var _0x4e32ed = 0; _0x4e32ed <= _0x43e3be; ++_0x4e32ed) {
        _0x362e97.tempIndexBuffers[_0x4e32ed] = null;
        _0x362e97.tempVertexBufferCounters1[_0x4e32ed] = _0x362e97.tempVertexBufferCounters2[_0x4e32ed] = 0;
        var _0x236b7a = _0x13a76e.numTempVertexBuffersPerSize;
        _0x362e97.tempVertexBuffers1[_0x4e32ed] = [];
        _0x362e97.tempVertexBuffers2[_0x4e32ed] = [];
        var _0x1433cd = _0x362e97.tempVertexBuffers1[_0x4e32ed];
        var _0x2be1a0 = _0x362e97.tempVertexBuffers2[_0x4e32ed];
        _0x1433cd.length = _0x2be1a0.length = _0x236b7a;
        for (var _0x1031ba = 0; _0x1031ba < _0x236b7a; ++_0x1031ba) {
          _0x1433cd[_0x1031ba] = _0x2be1a0[_0x1031ba] = null;
        }
      }
      if (_0xfa25d6) {
        _0x362e97.tempQuadIndexBuffer = _0x134071.createBuffer();
        _0x362e97.GLctx.bindBuffer(34963, _0x362e97.tempQuadIndexBuffer);
        var _0x1d37bd = _0x13a76e.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x96ee35 = new Uint16Array(_0x1d37bd);
        var _0x4e32ed = 0;
        var _0x56fe4d = 0;
        while (1) {
          _0x96ee35[_0x4e32ed++] = _0x56fe4d;
          if (_0x4e32ed >= _0x1d37bd) {
            break;
          }
          _0x96ee35[_0x4e32ed++] = _0x56fe4d + 1;
          if (_0x4e32ed >= _0x1d37bd) {
            break;
          }
          _0x96ee35[_0x4e32ed++] = _0x56fe4d + 2;
          if (_0x4e32ed >= _0x1d37bd) {
            break;
          }
          _0x96ee35[_0x4e32ed++] = _0x56fe4d;
          if (_0x4e32ed >= _0x1d37bd) {
            break;
          }
          _0x96ee35[_0x4e32ed++] = _0x56fe4d + 2;
          if (_0x4e32ed >= _0x1d37bd) {
            break;
          }
          _0x96ee35[_0x4e32ed++] = _0x56fe4d + 3;
          if (_0x4e32ed >= _0x1d37bd) {
            break;
          }
          _0x56fe4d += 4;
        }
        _0x362e97.GLctx.bufferData(34963, _0x96ee35, 35044);
        _0x362e97.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0x1279b0(_0x328665) {
      var _0x123fe0 = _0x13a76e.log2ceilLookup(_0x328665);
      var _0x5307bb = _0x13a76e.currentContext.tempVertexBuffers1[_0x123fe0];
      var _0x5ef01c = _0x13a76e.currentContext.tempVertexBufferCounters1[_0x123fe0];
      _0x13a76e.currentContext.tempVertexBufferCounters1[_0x123fe0] = _0x13a76e.currentContext.tempVertexBufferCounters1[_0x123fe0] + 1 & _0x13a76e.numTempVertexBuffersPerSize - 1;
      var _0x1d36e7 = _0x5307bb[_0x5ef01c];
      if (_0x1d36e7) {
        return _0x1d36e7;
      }
      var _0x41368c = _0x134071.getParameter(34964);
      _0x5307bb[_0x5ef01c] = _0x134071.createBuffer();
      _0x134071.bindBuffer(34962, _0x5307bb[_0x5ef01c]);
      _0x134071.bufferData(34962, 1 << _0x123fe0, 35048);
      _0x134071.bindBuffer(34962, _0x41368c);
      return _0x5307bb[_0x5ef01c];
    },
    getTempIndexBuffer: function _0x59a1e6(_0x363fc9) {
      var _0x55e174 = _0x13a76e.log2ceilLookup(_0x363fc9);
      var _0x4d2b1d = _0x13a76e.currentContext.tempIndexBuffers[_0x55e174];
      if (_0x4d2b1d) {
        return _0x4d2b1d;
      }
      var _0x4a1221 = _0x134071.getParameter(34965);
      _0x13a76e.currentContext.tempIndexBuffers[_0x55e174] = _0x134071.createBuffer();
      _0x134071.bindBuffer(34963, _0x13a76e.currentContext.tempIndexBuffers[_0x55e174]);
      _0x134071.bufferData(34963, 1 << _0x55e174, 35048);
      _0x134071.bindBuffer(34963, _0x4a1221);
      return _0x13a76e.currentContext.tempIndexBuffers[_0x55e174];
    },
    newRenderingFrameStarted: function _0x568b8e() {
      if (!_0x13a76e.currentContext) {
        return;
      }
      var _0x2ab8aa = _0x13a76e.currentContext.tempVertexBuffers1;
      _0x13a76e.currentContext.tempVertexBuffers1 = _0x13a76e.currentContext.tempVertexBuffers2;
      _0x13a76e.currentContext.tempVertexBuffers2 = _0x2ab8aa;
      _0x2ab8aa = _0x13a76e.currentContext.tempVertexBufferCounters1;
      _0x13a76e.currentContext.tempVertexBufferCounters1 = _0x13a76e.currentContext.tempVertexBufferCounters2;
      _0x13a76e.currentContext.tempVertexBufferCounters2 = _0x2ab8aa;
      var _0x1e34a4 = _0x13a76e.log2ceilLookup(_0x13a76e.MAX_TEMP_BUFFER_SIZE);
      for (var _0x4ca577 = 0; _0x4ca577 <= _0x1e34a4; ++_0x4ca577) {
        _0x13a76e.currentContext.tempVertexBufferCounters1[_0x4ca577] = 0;
      }
    },
    getSource: function (_0x2cd6ff, _0x40c702, _0x4a7c6b, _0x3ee5d2) {
      var _0x5b4d99 = "";
      for (var _0x31de16 = 0; _0x31de16 < _0x40c702; ++_0x31de16) {
        var _0x2dc455 = _0x3ee5d2 ? _0x49ddaa[_0x3ee5d2 + _0x31de16 * 4 >> 2] : -1;
        _0x5b4d99 += _0x5d80c0(_0x49ddaa[_0x4a7c6b + _0x31de16 * 4 >> 2], _0x2dc455 < 0 ? undefined : _0x2dc455);
      }
      return _0x5b4d99;
    },
    calcBufLength: function _0x17fa46(_0x5cf3c7, _0x49793f, _0x354a56, _0x387e78) {
      if (_0x354a56 > 0) {
        return _0x387e78 * _0x354a56;
      }
      var _0x1a23f7 = _0x13a76e.byteSizeByType[_0x49793f - _0x13a76e.byteSizeByTypeRoot];
      return _0x5cf3c7 * _0x1a23f7 * _0x387e78;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x107eb0(_0x26cacf) {
      _0x13a76e.resetBufferBinding = false;
      for (var _0xce380a = 0; _0xce380a < _0x13a76e.currentContext.maxVertexAttribs; ++_0xce380a) {
        var _0x5a442c = _0x13a76e.currentContext.clientBuffers[_0xce380a];
        if (!_0x5a442c.clientside || !_0x5a442c.enabled) {
          continue;
        }
        _0x13a76e.resetBufferBinding = true;
        var _0x300a7d = _0x13a76e.calcBufLength(_0x5a442c.size, _0x5a442c.type, _0x5a442c.stride, _0x26cacf);
        var _0x1dc508 = _0x13a76e.getTempVertexBuffer(_0x300a7d);
        _0x134071.bindBuffer(34962, _0x1dc508);
        _0x134071.bufferSubData(34962, 0, _0x1c9190.subarray(_0x5a442c.ptr, _0x5a442c.ptr + _0x300a7d));
        _0x5a442c.vertexAttribPointerAdaptor.call(_0x134071, _0xce380a, _0x5a442c.size, _0x5a442c.type, _0x5a442c.normalized, _0x5a442c.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x4a7d89() {
      if (_0x13a76e.resetBufferBinding) {
        _0x134071.bindBuffer(34962, _0x13a76e.buffers[_0x134071.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x5b8488, _0x1e66e8) {
      if (!_0x5b8488.getContextSafariWebGL2Fixed) {
        _0x5b8488.getContextSafariWebGL2Fixed = _0x5b8488.getContext;
        _0x5b8488.getContext = function (_0xf0fc75, _0x45c910) {
          var _0x36d3c2 = _0x5b8488.getContextSafariWebGL2Fixed(_0xf0fc75, _0x45c910);
          if (_0xf0fc75 == "webgl" == _0x36d3c2 instanceof WebGLRenderingContext) {
            return _0x36d3c2;
          } else {
            return null;
          }
        };
      }
      var _0x44f674 = _0x1e66e8.majorVersion > 1 ? _0x5b8488.getContext("webgl2", _0x1e66e8) : _0x5b8488.getContext("webgl", _0x1e66e8);
      if (!_0x44f674) {
        return 0;
      }
      var _0x380499 = _0x13a76e.registerContext(_0x44f674, _0x1e66e8);
      return _0x380499;
    },
    registerContext: function (_0x83fc46, _0x4246c0) {
      var _0x4065f3 = _0x13a76e.getNewId(_0x13a76e.contexts);
      var _0x514115 = {
        handle: _0x4065f3,
        attributes: _0x4246c0,
        version: _0x4246c0.majorVersion,
        GLctx: _0x83fc46
      };
      if (_0x83fc46.canvas) {
        _0x83fc46.canvas.GLctxObject = _0x514115;
      }
      _0x13a76e.contexts[_0x4065f3] = _0x514115;
      if (typeof _0x4246c0.enableExtensionsByDefault === "undefined" || _0x4246c0.enableExtensionsByDefault) {
        _0x13a76e.initExtensions(_0x514115);
      }
      _0x514115.maxVertexAttribs = _0x514115.GLctx.getParameter(34921);
      _0x514115.clientBuffers = [];
      for (var _0x310f3b = 0; _0x310f3b < _0x514115.maxVertexAttribs; _0x310f3b++) {
        _0x514115.clientBuffers[_0x310f3b] = {
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
      _0x13a76e.generateTempBuffers(false, _0x514115);
      return _0x4065f3;
    },
    makeContextCurrent: function (_0x164bdf) {
      _0x13a76e.currentContext = _0x13a76e.contexts[_0x164bdf];
      _0xad46db.ctx = _0x134071 = _0x13a76e.currentContext && _0x13a76e.currentContext.GLctx;
      return !_0x164bdf || !!_0x134071;
    },
    getContext: function (_0x55422c) {
      return _0x13a76e.contexts[_0x55422c];
    },
    deleteContext: function (_0x531216) {
      if (_0x13a76e.currentContext === _0x13a76e.contexts[_0x531216]) {
        _0x13a76e.currentContext = null;
      }
      if (typeof _0x1a92b2 === "object") {
        _0x1a92b2.removeAllHandlersOnTarget(_0x13a76e.contexts[_0x531216].GLctx.canvas);
      }
      if (_0x13a76e.contexts[_0x531216] && _0x13a76e.contexts[_0x531216].GLctx.canvas) {
        _0x13a76e.contexts[_0x531216].GLctx.canvas.GLctxObject = undefined;
      }
      _0x13a76e.contexts[_0x531216] = null;
    },
    initExtensions: function (_0x254014) {
      if (!_0x254014) {
        _0x254014 = _0x13a76e.currentContext;
      }
      if (_0x254014.initExtensionsDone) {
        return;
      }
      _0x254014.initExtensionsDone = true;
      var _0x304178 = _0x254014.GLctx;
      _0x334969(_0x304178);
      _0x46a5d5(_0x304178);
      _0x321201(_0x304178);
      _0x1972b9(_0x304178);
      _0x50bdbc(_0x304178);
      if (_0x254014.version >= 2) {
        _0x304178.disjointTimerQueryExt = _0x304178.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x254014.version < 2 || !_0x304178.disjointTimerQueryExt) {
        _0x304178.disjointTimerQueryExt = _0x304178.getExtension("EXT_disjoint_timer_query");
      }
      _0x4f4a26(_0x304178);
      var _0x374301 = _0x304178.getSupportedExtensions() || [];
      _0x374301.forEach(function (_0x253c44) {
        if (!_0x253c44.includes("lose_context") && !_0x253c44.includes("debug")) {
          _0x304178.getExtension(_0x253c44);
        }
      });
    }
  };
  var _0x5c6c16 = ["default", "low-power", "high-performance"];
  function _0x2a3b0a(_0xda6ef1, _0x3c11b8) {
    var _0x454d96 = _0x3c11b8 >> 2;
    var _0x139cd6 = _0x49ddaa[_0x454d96 + 6];
    var _0x162842 = {
      alpha: !!_0x49ddaa[_0x454d96 + 0],
      depth: !!_0x49ddaa[_0x454d96 + 1],
      stencil: !!_0x49ddaa[_0x454d96 + 2],
      antialias: !!_0x49ddaa[_0x454d96 + 3],
      premultipliedAlpha: !!_0x49ddaa[_0x454d96 + 4],
      preserveDrawingBuffer: !!_0x49ddaa[_0x454d96 + 5],
      powerPreference: _0x5c6c16[_0x139cd6],
      failIfMajorPerformanceCaveat: !!_0x49ddaa[_0x454d96 + 7],
      majorVersion: _0x49ddaa[_0x454d96 + 8],
      minorVersion: _0x49ddaa[_0x454d96 + 9],
      enableExtensionsByDefault: _0x49ddaa[_0x454d96 + 10],
      explicitSwapControl: _0x49ddaa[_0x454d96 + 11],
      proxyContextToMainThread: _0x49ddaa[_0x454d96 + 12],
      renderViaOffscreenBackBuffer: _0x49ddaa[_0x454d96 + 13]
    };
    var _0x1829d1 = _0x3d239d(_0xda6ef1);
    if (!_0x1829d1) {
      return 0;
    }
    if (_0x162842.explicitSwapControl) {
      return 0;
    }
    var _0x2e6acb = _0x13a76e.createContext(_0x1829d1, _0x162842);
    return _0x2e6acb;
  }
  function _0x3ade91(_0x5329cd, _0x3e3c65) {
    return _0x2a3b0a(_0x5329cd, _0x3e3c65);
  }
  function _0x34069d() {
    if (_0x13a76e.currentContext) {
      return _0x13a76e.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x7d2ead() {
    return _0x34069d();
  }
  _0xad46db._emscripten_webgl_get_current_context = _0x7d2ead;
  function _0x12ac77(_0x2930a3) {
    var _0x4f82de = _0x13a76e.makeContextCurrent(_0x2930a3);
    if (_0x4f82de) {
      return 0;
    } else {
      return -5;
    }
  }
  _0xad46db._emscripten_webgl_make_context_current = _0x12ac77;
  function _0x57f317(_0x247884) {
    if (_0x13a76e.currentContext == _0x247884) {
      _0x13a76e.currentContext = 0;
    }
    _0x13a76e.deleteContext(_0x247884);
  }
  function _0x30b486(_0x58730f, _0x4471d0) {
    var _0x1ad1e0 = _0x13a76e.getContext(_0x58730f);
    var _0x35a8e4 = _0x5d80c0(_0x4471d0);
    if (_0x35a8e4.startsWith("GL_")) {
      _0x35a8e4 = _0x35a8e4.substr(3);
    }
    if (_0x35a8e4 == "ANGLE_instanced_arrays") {
      _0x334969(_0x134071);
    }
    if (_0x35a8e4 == "OES_vertex_array_object") {
      _0x46a5d5(_0x134071);
    }
    if (_0x35a8e4 == "WEBGL_draw_buffers") {
      _0x321201(_0x134071);
    }
    if (_0x35a8e4 == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x1972b9(_0x134071);
    }
    if (_0x35a8e4 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x50bdbc(_0x134071);
    }
    if (_0x35a8e4 == "WEBGL_multi_draw") {
      _0x4f4a26(_0x134071);
    }
    var _0x47e690 = _0x1ad1e0.GLctx.getExtension(_0x35a8e4);
    return !!_0x47e690;
  }
  function _0x2143b1(_0x54a167) {
    var _0x93951e = _0x54a167 >> 2;
    for (var _0xa56f4a = 0; _0xa56f4a < 14; ++_0xa56f4a) {
      _0x49ddaa[_0x93951e + _0xa56f4a] = 0;
    }
    _0x49ddaa[_0x93951e + 0] = _0x49ddaa[_0x93951e + 1] = _0x49ddaa[_0x93951e + 3] = _0x49ddaa[_0x93951e + 4] = _0x49ddaa[_0x93951e + 8] = _0x49ddaa[_0x93951e + 10] = 1;
  }
  var _0x334fb8 = {};
  function _0x9ea7dc() {
    return _0x4953ab || "./this.program";
  }
  function _0x346534() {
    if (!_0x346534.strings) {
      var _0x2e43e0 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0xc5a38f = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x2e43e0,
        _: _0x9ea7dc()
      };
      for (var _0x35e6df in _0x334fb8) {
        _0xc5a38f[_0x35e6df] = _0x334fb8[_0x35e6df];
      }
      var _0x40851f = [];
      for (var _0x35e6df in _0xc5a38f) {
        _0x40851f.push(_0x35e6df + "=" + _0xc5a38f[_0x35e6df]);
      }
      _0x346534.strings = _0x40851f;
    }
    return _0x346534.strings;
  }
  function _0x209be6(_0x113215, _0x8a143d) {
    try {
      var _0x4ff25d = 0;
      _0x346534().forEach(function (_0x48d5b2, _0x25f3e8) {
        var _0x5aa9e4 = _0x8a143d + _0x4ff25d;
        _0x49ddaa[_0x113215 + _0x25f3e8 * 4 >> 2] = _0x5aa9e4;
        _0x421c6e(_0x48d5b2, _0x5aa9e4);
        _0x4ff25d += _0x48d5b2.length + 1;
      });
      return 0;
    } catch (_0x28af80) {
      if (typeof _0x379d8a === "undefined" || !(_0x28af80 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x28af80);
      }
      return _0x28af80.errno;
    }
  }
  function _0x4f0c11(_0x199f1c, _0x4bae30) {
    try {
      var _0x3268db = _0x346534();
      _0x49ddaa[_0x199f1c >> 2] = _0x3268db.length;
      var _0x2fcae4 = 0;
      _0x3268db.forEach(function (_0xad90) {
        _0x2fcae4 += _0xad90.length + 1;
      });
      _0x49ddaa[_0x4bae30 >> 2] = _0x2fcae4;
      return 0;
    } catch (_0x6eebb) {
      if (typeof _0x379d8a === "undefined" || !(_0x6eebb instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x6eebb);
      }
      return _0x6eebb.errno;
    }
  }
  function _0x44fb30(_0x324bd0) {
    try {
      var _0x27849a = _0x4bec8f.getStreamFromFD(_0x324bd0);
      _0x379d8a.close(_0x27849a);
      return 0;
    } catch (_0x4a6831) {
      if (typeof _0x379d8a === "undefined" || !(_0x4a6831 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x4a6831);
      }
      return _0x4a6831.errno;
    }
  }
  function _0x51532e(_0x421521, _0x15dbae) {
    try {
      var _0x5c94e1 = _0x4bec8f.getStreamFromFD(_0x421521);
      var _0x4930bb = _0x5c94e1.tty ? 2 : _0x379d8a.isDir(_0x5c94e1.mode) ? 3 : _0x379d8a.isLink(_0x5c94e1.mode) ? 7 : 4;
      _0x1e6f7f[_0x15dbae >> 0] = _0x4930bb;
      return 0;
    } catch (_0x578e77) {
      if (typeof _0x379d8a === "undefined" || !(_0x578e77 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x578e77);
      }
      return _0x578e77.errno;
    }
  }
  function _0x3bb381(_0xd06f88, _0x56defd, _0x58df6f, _0x2cf654) {
    try {
      var _0x4d77f2 = _0x4bec8f.getStreamFromFD(_0xd06f88);
      var _0x52e5bc = _0x4bec8f.doReadv(_0x4d77f2, _0x56defd, _0x58df6f);
      _0x49ddaa[_0x2cf654 >> 2] = _0x52e5bc;
      return 0;
    } catch (_0x5f5a96) {
      if (typeof _0x379d8a === "undefined" || !(_0x5f5a96 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x5f5a96);
      }
      return _0x5f5a96.errno;
    }
  }
  function _0x20a100(_0x3970dc, _0x27b472, _0x2ab05e, _0x2f7304, _0x386b63) {
    try {
      var _0x46750f = _0x4bec8f.getStreamFromFD(_0x3970dc);
      var _0x369251 = 4294967296;
      var _0x313c96 = _0x2ab05e * _0x369251 + (_0x27b472 >>> 0);
      var _0x4086e9 = 9007199254740992;
      if (_0x313c96 <= -_0x4086e9 || _0x313c96 >= _0x4086e9) {
        return -61;
      }
      _0x379d8a.llseek(_0x46750f, _0x313c96, _0x2f7304);
      _0x522fe6 = [_0x46750f.position >>> 0, (_0x23d490 = _0x46750f.position, +Math.abs(_0x23d490) >= 1 ? _0x23d490 > 0 ? (Math.min(+Math.floor(_0x23d490 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x23d490 - +(~~_0x23d490 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x49ddaa[_0x386b63 >> 2] = _0x522fe6[0];
      _0x49ddaa[_0x386b63 + 4 >> 2] = _0x522fe6[1];
      if (_0x46750f.getdents && _0x313c96 === 0 && _0x2f7304 === 0) {
        _0x46750f.getdents = null;
      }
      return 0;
    } catch (_0x445293) {
      if (typeof _0x379d8a === "undefined" || !(_0x445293 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x445293);
      }
      return _0x445293.errno;
    }
  }
  function _0x21a3bb(_0x2705d1, _0x2df577, _0x45a671, _0x46fadc) {
    try {
      var _0x1453fc = _0x4bec8f.getStreamFromFD(_0x2705d1);
      var _0x32f6df = _0x4bec8f.doWritev(_0x1453fc, _0x2df577, _0x45a671);
      _0x49ddaa[_0x46fadc >> 2] = _0x32f6df;
      return 0;
    } catch (_0x3cd7c7) {
      if (typeof _0x379d8a === "undefined" || !(_0x3cd7c7 instanceof _0x379d8a.ErrnoError)) {
        _0x24323c(_0x3cd7c7);
      }
      return _0x3cd7c7.errno;
    }
  }
  function _0x42b2a3(_0x5d9fe1, _0x3b29fb) {
    return 0;
  }
  function _0x166629() {
    return _0x96ff5();
  }
  function _0x4c44e7(_0xa1048f, _0x367a49, _0x346a76, _0x4e9805) {
    var _0x1c6e06 = 0;
    var _0x4492f0 = 0;
    var _0x2620aa = 0;
    var _0x1632ee = 0;
    var _0x271195 = 0;
    var _0x5984dd = 0;
    var _0x2c733b;
    function _0x44b4cd(_0x44e3cd, _0x465ffb, _0x2e3784, _0x3ea730, _0x488ec0, _0x5261d4) {
      var _0x2203db;
      var _0x42048a;
      var _0x127550;
      var _0x1fa279;
      _0x42048a = _0x44e3cd === 10 ? 28 : 16;
      _0x488ec0 = _0x44e3cd === 10 ? _0x568ddc(_0x488ec0) : _0x22b87b(_0x488ec0);
      _0x2203db = _0x304a50(_0x42048a);
      _0x1fa279 = _0x4be409(_0x2203db, _0x44e3cd, _0x488ec0, _0x5261d4);
      _0x5e3281(!_0x1fa279);
      _0x127550 = _0x304a50(32);
      _0x49ddaa[_0x127550 + 4 >> 2] = _0x44e3cd;
      _0x49ddaa[_0x127550 + 8 >> 2] = _0x465ffb;
      _0x49ddaa[_0x127550 + 12 >> 2] = _0x2e3784;
      _0x49ddaa[_0x127550 + 24 >> 2] = _0x3ea730;
      _0x49ddaa[_0x127550 + 20 >> 2] = _0x2203db;
      if (_0x44e3cd === 10) {
        _0x49ddaa[_0x127550 + 16 >> 2] = 28;
      } else {
        _0x49ddaa[_0x127550 + 16 >> 2] = 16;
      }
      _0x49ddaa[_0x127550 + 28 >> 2] = 0;
      return _0x127550;
    }
    if (_0x346a76) {
      _0x2620aa = _0x49ddaa[_0x346a76 >> 2];
      _0x1632ee = _0x49ddaa[_0x346a76 + 4 >> 2];
      _0x271195 = _0x49ddaa[_0x346a76 + 8 >> 2];
      _0x5984dd = _0x49ddaa[_0x346a76 + 12 >> 2];
    }
    if (_0x271195 && !_0x5984dd) {
      _0x5984dd = _0x271195 === 2 ? 17 : 6;
    }
    if (!_0x271195 && _0x5984dd) {
      _0x271195 = _0x5984dd === 17 ? 2 : 1;
    }
    if (_0x5984dd === 0) {
      _0x5984dd = 6;
    }
    if (_0x271195 === 0) {
      _0x271195 = 1;
    }
    if (!_0xa1048f && !_0x367a49) {
      return -2;
    }
    if (_0x2620aa & ~1087) {
      return -1;
    }
    if (_0x346a76 !== 0 && _0x49ddaa[_0x346a76 >> 2] & 2 && !_0xa1048f) {
      return -1;
    }
    if (_0x2620aa & 32) {
      return -2;
    }
    if (_0x271195 !== 0 && _0x271195 !== 1 && _0x271195 !== 2) {
      return -7;
    }
    if (_0x1632ee !== 0 && _0x1632ee !== 2 && _0x1632ee !== 10) {
      return -6;
    }
    if (_0x367a49) {
      _0x367a49 = _0x5d80c0(_0x367a49);
      _0x4492f0 = parseInt(_0x367a49, 10);
      if (isNaN(_0x4492f0)) {
        if (_0x2620aa & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0xa1048f) {
      if (_0x1632ee === 0) {
        _0x1632ee = 2;
      }
      if ((_0x2620aa & 1) === 0) {
        if (_0x1632ee === 2) {
          _0x1c6e06 = _0x4b389e(2130706433);
        } else {
          _0x1c6e06 = [0, 0, 0, 1];
        }
      }
      _0x2c733b = _0x44b4cd(_0x1632ee, _0x271195, _0x5984dd, null, _0x1c6e06, _0x4492f0);
      _0x49ddaa[_0x4e9805 >> 2] = _0x2c733b;
      return 0;
    }
    _0xa1048f = _0x5d80c0(_0xa1048f);
    _0x1c6e06 = _0x241ceb(_0xa1048f);
    if (_0x1c6e06 !== null) {
      if (_0x1632ee === 0 || _0x1632ee === 2) {
        _0x1632ee = 2;
      } else if (_0x1632ee === 10 && _0x2620aa & 8) {
        _0x1c6e06 = [0, 0, _0x4b389e(65535), _0x1c6e06];
        _0x1632ee = 10;
      } else {
        return -2;
      }
    } else {
      _0x1c6e06 = _0x5a7c1d(_0xa1048f);
      if (_0x1c6e06 !== null) {
        if (_0x1632ee === 0 || _0x1632ee === 10) {
          _0x1632ee = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x1c6e06 != null) {
      _0x2c733b = _0x44b4cd(_0x1632ee, _0x271195, _0x5984dd, _0xa1048f, _0x1c6e06, _0x4492f0);
      _0x49ddaa[_0x4e9805 >> 2] = _0x2c733b;
      return 0;
    }
    if (_0x2620aa & 4) {
      return -2;
    }
    _0xa1048f = _0x557335.lookup_name(_0xa1048f);
    _0x1c6e06 = _0x241ceb(_0xa1048f);
    if (_0x1632ee === 0) {
      _0x1632ee = 2;
    } else if (_0x1632ee === 10) {
      _0x1c6e06 = [0, 0, _0x4b389e(65535), _0x1c6e06];
    }
    _0x2c733b = _0x44b4cd(_0x1632ee, _0x271195, _0x5984dd, null, _0x1c6e06, _0x4492f0);
    _0x49ddaa[_0x4e9805 >> 2] = _0x2c733b;
    return 0;
  }
  function _0x4603b4(_0x5ba507) {
    var _0xf28d13 = _0x304a50(20);
    var _0x4a8acf = _0x304a50(_0x5ba507.length + 1);
    _0x2117d9(_0x5ba507, _0x4a8acf, _0x5ba507.length + 1);
    _0x49ddaa[_0xf28d13 >> 2] = _0x4a8acf;
    var _0x20e68f = _0x304a50(4);
    _0x49ddaa[_0x20e68f >> 2] = 0;
    _0x49ddaa[_0xf28d13 + 4 >> 2] = _0x20e68f;
    var _0x5a4476 = 2;
    _0x49ddaa[_0xf28d13 + 8 >> 2] = _0x5a4476;
    _0x49ddaa[_0xf28d13 + 12 >> 2] = 4;
    var _0x599239 = _0x304a50(12);
    _0x49ddaa[_0x599239 >> 2] = _0x599239 + 8;
    _0x49ddaa[_0x599239 + 4 >> 2] = 0;
    _0x49ddaa[_0x599239 + 8 >> 2] = _0x241ceb(_0x557335.lookup_name(_0x5ba507));
    _0x49ddaa[_0xf28d13 + 16 >> 2] = _0x599239;
    return _0xf28d13;
  }
  function _0x37329b(_0x37315d, _0x4a42ab, _0x316510) {
    if (_0x316510 !== 2) {
      _0x25893a(5);
      return null;
    }
    _0x37315d = _0x49ddaa[_0x37315d >> 2];
    var _0x1a6936 = _0x22b87b(_0x37315d);
    var _0x6cab32 = _0x557335.lookup_addr(_0x1a6936);
    if (_0x6cab32) {
      _0x1a6936 = _0x6cab32;
    }
    return _0x4603b4(_0x1a6936);
  }
  function _0x502af9(_0x55500b) {
    return _0x4603b4(_0x5d80c0(_0x55500b));
  }
  function _0x26d19c(_0x1cd5c6, _0x2f49ff, _0x39dcbe, _0x31b49e, _0x44de1, _0x3ee591, _0x3d1012) {
    var _0x4a2903 = _0xa7a705(_0x1cd5c6, _0x2f49ff);
    if (_0x4a2903.errno) {
      return -6;
    }
    var _0x803454 = _0x4a2903.port;
    var _0x37a2c7 = _0x4a2903.addr;
    var _0x272f46 = false;
    if (_0x39dcbe && _0x31b49e) {
      var _0x1f6dfb;
      if (_0x3d1012 & 1 || !(_0x1f6dfb = _0x557335.lookup_addr(_0x37a2c7))) {
        if (_0x3d1012 & 8) {
          return -2;
        }
      } else {
        _0x37a2c7 = _0x1f6dfb;
      }
      var _0x32a3dd = _0x2117d9(_0x37a2c7, _0x39dcbe, _0x31b49e);
      if (_0x32a3dd + 1 >= _0x31b49e) {
        _0x272f46 = true;
      }
    }
    if (_0x44de1 && _0x3ee591) {
      _0x803454 = "" + _0x803454;
      var _0x32a3dd = _0x2117d9(_0x803454, _0x44de1, _0x3ee591);
      if (_0x32a3dd + 1 >= _0x3ee591) {
        _0x272f46 = true;
      }
    }
    if (_0x272f46) {
      return -12;
    }
    return 0;
  }
  function _0x2c898d() {
    throw "getpwuid: TODO";
  }
  function _0x288af5(_0x291362) {
    var _0x4d615e = Date.now();
    _0x49ddaa[_0x291362 >> 2] = _0x4d615e / 1000 | 0;
    _0x49ddaa[_0x291362 + 4 >> 2] = _0x4d615e % 1000 * 1000 | 0;
    return 0;
  }
  function _0x449c19(_0x5a4768) {
    _0x134071.activeTexture(_0x5a4768);
  }
  function _0x8bdc3f(_0x5b5f92, _0x16364a) {
    _0x5b5f92 = _0x13a76e.programs[_0x5b5f92];
    _0x16364a = _0x13a76e.shaders[_0x16364a];
    _0x5b5f92[_0x16364a.shaderType] = _0x16364a;
    _0x134071.attachShader(_0x5b5f92, _0x16364a);
  }
  function _0x48f9f4(_0x50c12, _0x248ce2) {
    _0x134071.beginQuery(_0x50c12, _0x13a76e.queries[_0x248ce2]);
  }
  function _0x27bf47(_0x8fc2cb) {
    _0x134071.beginTransformFeedback(_0x8fc2cb);
  }
  function _0x1551ec(_0x17bfdb, _0x533b32, _0x414ad0) {
    _0x134071.bindAttribLocation(_0x13a76e.programs[_0x17bfdb], _0x533b32, _0x5d80c0(_0x414ad0));
  }
  function _0x2419ac(_0x467f3a, _0xeace2) {
    if (_0x467f3a == 34962) {
      _0x134071.currentArrayBufferBinding = _0xeace2;
    } else if (_0x467f3a == 34963) {
      _0x134071.currentElementArrayBufferBinding = _0xeace2;
    }
    if (_0x467f3a == 35051) {
      _0x134071.currentPixelPackBufferBinding = _0xeace2;
    } else if (_0x467f3a == 35052) {
      _0x134071.currentPixelUnpackBufferBinding = _0xeace2;
    }
    _0x134071.bindBuffer(_0x467f3a, _0x13a76e.buffers[_0xeace2]);
  }
  function _0x536e6e(_0x2d6745, _0xa82bc8, _0x492b60) {
    _0x134071.bindBufferBase(_0x2d6745, _0xa82bc8, _0x13a76e.buffers[_0x492b60]);
  }
  function _0x5b58b9(_0x64d923, _0xfa8b85, _0x5ad48c, _0x41cbc9, _0x29d106) {
    _0x134071.bindBufferRange(_0x64d923, _0xfa8b85, _0x13a76e.buffers[_0x5ad48c], _0x41cbc9, _0x29d106);
  }
  function _0x50744e(_0x5ca9ed, _0x2fa101) {
    _0x134071.bindFramebuffer(_0x5ca9ed, _0x13a76e.framebuffers[_0x2fa101]);
  }
  function _0x2fcfdd(_0x405228, _0xb652b0) {
    _0x134071.bindRenderbuffer(_0x405228, _0x13a76e.renderbuffers[_0xb652b0]);
  }
  function _0x959573(_0x5b7cab, _0x13a634) {
    _0x134071.bindSampler(_0x5b7cab, _0x13a76e.samplers[_0x13a634]);
  }
  function _0x5df5ea(_0x4de146, _0x49efc4) {
    _0x134071.bindTexture(_0x4de146, _0x13a76e.textures[_0x49efc4]);
  }
  function _0x472d95(_0x175819, _0x1ba6d9) {
    _0x134071.bindTransformFeedback(_0x175819, _0x13a76e.transformFeedbacks[_0x1ba6d9]);
  }
  function _0x26f0f4(_0x59a947) {
    _0x134071.bindVertexArray(_0x13a76e.vaos[_0x59a947]);
    var _0x544b12 = _0x134071.getParameter(34965);
    _0x134071.currentElementArrayBufferBinding = _0x544b12 ? _0x544b12.name | 0 : 0;
  }
  function _0x4daae3(_0x3a4007) {
    _0x134071.blendEquation(_0x3a4007);
  }
  function _0x2e6115(_0x380a6f, _0xc5cca9) {
    _0x134071.blendEquationSeparate(_0x380a6f, _0xc5cca9);
  }
  function _0xafba4b(_0x289504, _0x589b03, _0x3f010f, _0x5f065a) {
    _0x134071.blendFuncSeparate(_0x289504, _0x589b03, _0x3f010f, _0x5f065a);
  }
  function _0x16f093(_0x54b423, _0x494bc6, _0x20c132, _0x573be1, _0x493e5b, _0x2f06d6, _0x36151d, _0x124c6b, _0x1111c5, _0x4310b4) {
    _0x134071.blitFramebuffer(_0x54b423, _0x494bc6, _0x20c132, _0x573be1, _0x493e5b, _0x2f06d6, _0x36151d, _0x124c6b, _0x1111c5, _0x4310b4);
  }
  function _0x1001c9(_0x36cfe5, _0x392881, _0x2dfe8b, _0x36bd3d) {
    if (_0x13a76e.currentContext.version >= 2) {
      if (_0x2dfe8b) {
        _0x134071.bufferData(_0x36cfe5, _0x1c9190, _0x36bd3d, _0x2dfe8b, _0x392881);
      } else {
        _0x134071.bufferData(_0x36cfe5, _0x392881, _0x36bd3d);
      }
    } else {
      _0x134071.bufferData(_0x36cfe5, _0x2dfe8b ? _0x1c9190.subarray(_0x2dfe8b, _0x2dfe8b + _0x392881) : _0x392881, _0x36bd3d);
    }
  }
  function _0x2ff470(_0x35e271, _0x2f0eb7, _0x2ae039, _0xf467dc) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.bufferSubData(_0x35e271, _0x2f0eb7, _0x1c9190, _0xf467dc, _0x2ae039);
      return;
    }
    _0x134071.bufferSubData(_0x35e271, _0x2f0eb7, _0x1c9190.subarray(_0xf467dc, _0xf467dc + _0x2ae039));
  }
  function _0x55ba76(_0x333942) {
    return _0x134071.checkFramebufferStatus(_0x333942);
  }
  function _0x3b08bf(_0x4f81ff) {
    _0x134071.clear(_0x4f81ff);
  }
  function _0x5a39e6(_0x15b1cc, _0xb0e7e0, _0x1b95d1, _0x3ce155) {
    _0x134071.clearBufferfi(_0x15b1cc, _0xb0e7e0, _0x1b95d1, _0x3ce155);
  }
  function _0x141506(_0x458ddb, _0x54ae0c, _0x1125eb) {
    _0x134071.clearBufferfv(_0x458ddb, _0x54ae0c, _0x72ca9a, _0x1125eb >> 2);
  }
  function _0x3ce445(_0x59983d, _0x3edfc1, _0x25ac66) {
    _0x134071.clearBufferuiv(_0x59983d, _0x3edfc1, _0x2fe6c1, _0x25ac66 >> 2);
  }
  function _0x44d1ef(_0x4f935c, _0x108ad1, _0x15cf69, _0x4a4a3d) {
    _0x134071.clearColor(_0x4f935c, _0x108ad1, _0x15cf69, _0x4a4a3d);
  }
  function _0x1f2d67(_0x33d30) {
    _0x134071.clearDepth(_0x33d30);
  }
  function _0x3fba89(_0x1ed3aa) {
    _0x134071.clearStencil(_0x1ed3aa);
  }
  function _0x3853a2(_0x56bece, _0x81e184, _0x5d1a38, _0x64c87b) {
    return _0x134071.clientWaitSync(_0x13a76e.syncs[_0x56bece], _0x81e184, _0x4b6cdf(_0x5d1a38, _0x64c87b));
  }
  function _0x4de10c(_0x49afa1, _0x5ec830, _0x1d8f95, _0x1b2138) {
    _0x134071.colorMask(!!_0x49afa1, !!_0x5ec830, !!_0x1d8f95, !!_0x1b2138);
  }
  function _0x270d0c(_0x1e0473) {
    _0x134071.compileShader(_0x13a76e.shaders[_0x1e0473]);
  }
  function _0x31cd8b(_0x25037f, _0x53577, _0x3e8921, _0x4a037d, _0x31e81e, _0x5e6bfd, _0x4a17d0, _0x28e5b5) {
    if (_0x13a76e.currentContext.version >= 2) {
      if (_0x134071.currentPixelUnpackBufferBinding) {
        _0x134071.compressedTexImage2D(_0x25037f, _0x53577, _0x3e8921, _0x4a037d, _0x31e81e, _0x5e6bfd, _0x4a17d0, _0x28e5b5);
      } else {
        _0x134071.compressedTexImage2D(_0x25037f, _0x53577, _0x3e8921, _0x4a037d, _0x31e81e, _0x5e6bfd, _0x1c9190, _0x28e5b5, _0x4a17d0);
      }
      return;
    }
    _0x134071.compressedTexImage2D(_0x25037f, _0x53577, _0x3e8921, _0x4a037d, _0x31e81e, _0x5e6bfd, _0x28e5b5 ? _0x1c9190.subarray(_0x28e5b5, _0x28e5b5 + _0x4a17d0) : null);
  }
  function _0x1e3ec7(_0xacc164, _0x405982, _0x1b26de, _0x5d3bf2, _0x3853c8, _0x3ef7a0, _0x1414ed, _0x1a65f1, _0x30538c) {
    if (_0x134071.currentPixelUnpackBufferBinding) {
      _0x134071.compressedTexImage3D(_0xacc164, _0x405982, _0x1b26de, _0x5d3bf2, _0x3853c8, _0x3ef7a0, _0x1414ed, _0x1a65f1, _0x30538c);
    } else {
      _0x134071.compressedTexImage3D(_0xacc164, _0x405982, _0x1b26de, _0x5d3bf2, _0x3853c8, _0x3ef7a0, _0x1414ed, _0x1c9190, _0x30538c, _0x1a65f1);
    }
  }
  function _0x3831ea(_0xa35897, _0x56d7d7, _0x5e04e6, _0x47e852, _0x333e8d, _0x12544a, _0x4cacaa, _0x2dcbe0, _0x261860) {
    if (_0x13a76e.currentContext.version >= 2) {
      if (_0x134071.currentPixelUnpackBufferBinding) {
        _0x134071.compressedTexSubImage2D(_0xa35897, _0x56d7d7, _0x5e04e6, _0x47e852, _0x333e8d, _0x12544a, _0x4cacaa, _0x2dcbe0, _0x261860);
      } else {
        _0x134071.compressedTexSubImage2D(_0xa35897, _0x56d7d7, _0x5e04e6, _0x47e852, _0x333e8d, _0x12544a, _0x4cacaa, _0x1c9190, _0x261860, _0x2dcbe0);
      }
      return;
    }
    _0x134071.compressedTexSubImage2D(_0xa35897, _0x56d7d7, _0x5e04e6, _0x47e852, _0x333e8d, _0x12544a, _0x4cacaa, _0x261860 ? _0x1c9190.subarray(_0x261860, _0x261860 + _0x2dcbe0) : null);
  }
  function _0x2ec6a7(_0xa9aaac, _0x3d500c, _0x49fcb1, _0x2448cf, _0x17648b, _0xe5c2bc, _0x5a3abd, _0x526ced, _0x52fe95, _0x38670b, _0x12135f) {
    if (_0x134071.currentPixelUnpackBufferBinding) {
      _0x134071.compressedTexSubImage3D(_0xa9aaac, _0x3d500c, _0x49fcb1, _0x2448cf, _0x17648b, _0xe5c2bc, _0x5a3abd, _0x526ced, _0x52fe95, _0x38670b, _0x12135f);
    } else {
      _0x134071.compressedTexSubImage3D(_0xa9aaac, _0x3d500c, _0x49fcb1, _0x2448cf, _0x17648b, _0xe5c2bc, _0x5a3abd, _0x526ced, _0x52fe95, _0x1c9190, _0x12135f, _0x38670b);
    }
  }
  function _0x403c9d(_0x4ea439, _0x52be4a, _0x24a3c1, _0x38c02e, _0xba32bb) {
    _0x134071.copyBufferSubData(_0x4ea439, _0x52be4a, _0x24a3c1, _0x38c02e, _0xba32bb);
  }
  function _0x54c568(_0x16fe57, _0x418d38, _0xb55cc7, _0x145fa6, _0x11c92c, _0x69b894, _0x5f4e96, _0x573232) {
    _0x134071.copyTexImage2D(_0x16fe57, _0x418d38, _0xb55cc7, _0x145fa6, _0x11c92c, _0x69b894, _0x5f4e96, _0x573232);
  }
  function _0x468b92(_0x45943c, _0x3b6e0c, _0x2a36e7, _0x3064b5, _0x5e88ce, _0x3bba56, _0x3e4893, _0x4dea6f) {
    _0x134071.copyTexSubImage2D(_0x45943c, _0x3b6e0c, _0x2a36e7, _0x3064b5, _0x5e88ce, _0x3bba56, _0x3e4893, _0x4dea6f);
  }
  function _0x4455a3() {
    var _0x7708b4 = _0x13a76e.getNewId(_0x13a76e.programs);
    var _0x431835 = _0x134071.createProgram();
    _0x431835.name = _0x7708b4;
    _0x431835.maxUniformLength = _0x431835.maxAttributeLength = _0x431835.maxUniformBlockNameLength = 0;
    _0x431835.uniformIdCounter = 1;
    _0x13a76e.programs[_0x7708b4] = _0x431835;
    return _0x7708b4;
  }
  function _0x24d350(_0x3d47d5) {
    var _0x130114 = _0x13a76e.getNewId(_0x13a76e.shaders);
    _0x13a76e.shaders[_0x130114] = _0x134071.createShader(_0x3d47d5);
    _0x13a76e.shaders[_0x130114].shaderType = _0x3d47d5 & 1 ? "vs" : "fs";
    return _0x130114;
  }
  function _0x221f3f(_0x4a97cf) {
    _0x134071.cullFace(_0x4a97cf);
  }
  function _0x20e46e(_0x5e025f, _0x27a337) {
    for (var _0x1a47f3 = 0; _0x1a47f3 < _0x5e025f; _0x1a47f3++) {
      var _0x310ba2 = _0x49ddaa[_0x27a337 + _0x1a47f3 * 4 >> 2];
      var _0x5b22eb = _0x13a76e.buffers[_0x310ba2];
      if (!_0x5b22eb) {
        continue;
      }
      _0x134071.deleteBuffer(_0x5b22eb);
      _0x5b22eb.name = 0;
      _0x13a76e.buffers[_0x310ba2] = null;
      if (_0x310ba2 == _0x134071.currentArrayBufferBinding) {
        _0x134071.currentArrayBufferBinding = 0;
      }
      if (_0x310ba2 == _0x134071.currentElementArrayBufferBinding) {
        _0x134071.currentElementArrayBufferBinding = 0;
      }
      if (_0x310ba2 == _0x134071.currentPixelPackBufferBinding) {
        _0x134071.currentPixelPackBufferBinding = 0;
      }
      if (_0x310ba2 == _0x134071.currentPixelUnpackBufferBinding) {
        _0x134071.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x112cb8(_0x3c3366, _0x2bbb13) {
    for (var _0x1c491c = 0; _0x1c491c < _0x3c3366; ++_0x1c491c) {
      var _0x2590ff = _0x49ddaa[_0x2bbb13 + _0x1c491c * 4 >> 2];
      var _0x1de5ae = _0x13a76e.framebuffers[_0x2590ff];
      if (!_0x1de5ae) {
        continue;
      }
      _0x134071.deleteFramebuffer(_0x1de5ae);
      _0x1de5ae.name = 0;
      _0x13a76e.framebuffers[_0x2590ff] = null;
    }
  }
  function _0x427f4f(_0x1173b5) {
    if (!_0x1173b5) {
      return;
    }
    var _0x5bc9a1 = _0x13a76e.programs[_0x1173b5];
    if (!_0x5bc9a1) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x134071.deleteProgram(_0x5bc9a1);
    _0x5bc9a1.name = 0;
    _0x13a76e.programs[_0x1173b5] = null;
  }
  function _0x3b3074(_0x2a826e, _0xe1b0fa) {
    for (var _0x61dfc7 = 0; _0x61dfc7 < _0x2a826e; _0x61dfc7++) {
      var _0xa37e61 = _0x49ddaa[_0xe1b0fa + _0x61dfc7 * 4 >> 2];
      var _0x3f089f = _0x13a76e.queries[_0xa37e61];
      if (!_0x3f089f) {
        continue;
      }
      _0x134071.deleteQuery(_0x3f089f);
      _0x13a76e.queries[_0xa37e61] = null;
    }
  }
  function _0x593a45(_0x1c4be9, _0x41f38a) {
    for (var _0x2728aa = 0; _0x2728aa < _0x1c4be9; _0x2728aa++) {
      var _0x2940ec = _0x49ddaa[_0x41f38a + _0x2728aa * 4 >> 2];
      var _0x1fe972 = _0x13a76e.renderbuffers[_0x2940ec];
      if (!_0x1fe972) {
        continue;
      }
      _0x134071.deleteRenderbuffer(_0x1fe972);
      _0x1fe972.name = 0;
      _0x13a76e.renderbuffers[_0x2940ec] = null;
    }
  }
  function _0x439c5e(_0x499b6f, _0x2938d4) {
    for (var _0x38a1a0 = 0; _0x38a1a0 < _0x499b6f; _0x38a1a0++) {
      var _0xa7d6f = _0x49ddaa[_0x2938d4 + _0x38a1a0 * 4 >> 2];
      var _0x504977 = _0x13a76e.samplers[_0xa7d6f];
      if (!_0x504977) {
        continue;
      }
      _0x134071.deleteSampler(_0x504977);
      _0x504977.name = 0;
      _0x13a76e.samplers[_0xa7d6f] = null;
    }
  }
  function _0x177cf5(_0x38a76d) {
    if (!_0x38a76d) {
      return;
    }
    var _0x355aaa = _0x13a76e.shaders[_0x38a76d];
    if (!_0x355aaa) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x134071.deleteShader(_0x355aaa);
    _0x13a76e.shaders[_0x38a76d] = null;
  }
  function _0x14f212(_0x29a29d) {
    if (!_0x29a29d) {
      return;
    }
    var _0x4fac5b = _0x13a76e.syncs[_0x29a29d];
    if (!_0x4fac5b) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x134071.deleteSync(_0x4fac5b);
    _0x4fac5b.name = 0;
    _0x13a76e.syncs[_0x29a29d] = null;
  }
  function _0x2b4b9e(_0x4c5f6a, _0x2200ae) {
    for (var _0x54c716 = 0; _0x54c716 < _0x4c5f6a; _0x54c716++) {
      var _0x56e987 = _0x49ddaa[_0x2200ae + _0x54c716 * 4 >> 2];
      var _0x4913ee = _0x13a76e.textures[_0x56e987];
      if (!_0x4913ee) {
        continue;
      }
      _0x134071.deleteTexture(_0x4913ee);
      _0x4913ee.name = 0;
      _0x13a76e.textures[_0x56e987] = null;
    }
  }
  function _0x5720c4(_0x4fab90, _0x19d15a) {
    for (var _0x4f584f = 0; _0x4f584f < _0x4fab90; _0x4f584f++) {
      var _0x5c4797 = _0x49ddaa[_0x19d15a + _0x4f584f * 4 >> 2];
      var _0x34fd31 = _0x13a76e.transformFeedbacks[_0x5c4797];
      if (!_0x34fd31) {
        continue;
      }
      _0x134071.deleteTransformFeedback(_0x34fd31);
      _0x34fd31.name = 0;
      _0x13a76e.transformFeedbacks[_0x5c4797] = null;
    }
  }
  function _0x5a0b55(_0x3e2b41, _0x536a20) {
    for (var _0x4f4625 = 0; _0x4f4625 < _0x3e2b41; _0x4f4625++) {
      var _0x5270c4 = _0x49ddaa[_0x536a20 + _0x4f4625 * 4 >> 2];
      _0x134071.deleteVertexArray(_0x13a76e.vaos[_0x5270c4]);
      _0x13a76e.vaos[_0x5270c4] = null;
    }
  }
  function _0x2dfa98(_0x3a8878) {
    _0x134071.depthFunc(_0x3a8878);
  }
  function _0x14948c(_0x6f45b2) {
    _0x134071.depthMask(!!_0x6f45b2);
  }
  function _0x2f64a5(_0x2c4b4e, _0x9808c6) {
    _0x134071.detachShader(_0x13a76e.programs[_0x2c4b4e], _0x13a76e.shaders[_0x9808c6]);
  }
  function _0x46cea2(_0x89a97b) {
    _0x134071.disable(_0x89a97b);
  }
  function _0x4dad00(_0x4e730e) {
    var _0xddfeaf = _0x13a76e.currentContext.clientBuffers[_0x4e730e];
    _0xddfeaf.enabled = false;
    _0x134071.disableVertexAttribArray(_0x4e730e);
  }
  function _0x13674e(_0x44d9a3, _0x5718a4, _0x271372) {
    _0x13a76e.preDrawHandleClientVertexAttribBindings(_0x5718a4 + _0x271372);
    _0x134071.drawArrays(_0x44d9a3, _0x5718a4, _0x271372);
    _0x13a76e.postDrawHandleClientVertexAttribBindings();
  }
  function _0x18febb(_0xd85911, _0x161575, _0x57b723, _0x43b110) {
    _0x134071.drawArraysInstanced(_0xd85911, _0x161575, _0x57b723, _0x43b110);
  }
  var _0x2dff67 = [];
  function _0x2742fb(_0x429a9d, _0x5c088e) {
    var _0x2b7cf5 = _0x2dff67[_0x429a9d];
    for (var _0x3b3536 = 0; _0x3b3536 < _0x429a9d; _0x3b3536++) {
      _0x2b7cf5[_0x3b3536] = _0x49ddaa[_0x5c088e + _0x3b3536 * 4 >> 2];
    }
    _0x134071.drawBuffers(_0x2b7cf5);
  }
  function _0x1d2e4f(_0x52153d, _0x11b7fa, _0x21691d, _0x1980a5) {
    var _0x54cdcb;
    if (!_0x134071.currentElementArrayBufferBinding) {
      var _0x14e121 = _0x13a76e.calcBufLength(1, _0x21691d, 0, _0x11b7fa);
      _0x54cdcb = _0x13a76e.getTempIndexBuffer(_0x14e121);
      _0x134071.bindBuffer(34963, _0x54cdcb);
      _0x134071.bufferSubData(34963, 0, _0x1c9190.subarray(_0x1980a5, _0x1980a5 + _0x14e121));
      _0x1980a5 = 0;
    }
    _0x13a76e.preDrawHandleClientVertexAttribBindings(_0x11b7fa);
    _0x134071.drawElements(_0x52153d, _0x11b7fa, _0x21691d, _0x1980a5);
    _0x13a76e.postDrawHandleClientVertexAttribBindings(_0x11b7fa);
    if (!_0x134071.currentElementArrayBufferBinding) {
      _0x134071.bindBuffer(34963, null);
    }
  }
  function _0x5ba08e(_0x3d99df, _0x4b0b66, _0x4db0b3, _0x51c39f, _0x45da81) {
    _0x134071.drawElementsInstanced(_0x3d99df, _0x4b0b66, _0x4db0b3, _0x51c39f, _0x45da81);
  }
  function _0x46b0cd(_0x10b89a) {
    _0x134071.enable(_0x10b89a);
  }
  function _0x253bdd(_0x39aa69) {
    var _0x1543ee = _0x13a76e.currentContext.clientBuffers[_0x39aa69];
    _0x1543ee.enabled = true;
    _0x134071.enableVertexAttribArray(_0x39aa69);
  }
  function _0x3a3f98(_0x46c34f) {
    _0x134071.endQuery(_0x46c34f);
  }
  function _0x458145() {
    _0x134071.endTransformFeedback();
  }
  function _0x59ac09(_0x49cb5a, _0x31d46f) {
    var _0x3b7346 = _0x134071.fenceSync(_0x49cb5a, _0x31d46f);
    if (_0x3b7346) {
      var _0x17d894 = _0x13a76e.getNewId(_0x13a76e.syncs);
      _0x3b7346.name = _0x17d894;
      _0x13a76e.syncs[_0x17d894] = _0x3b7346;
      return _0x17d894;
    } else {
      return 0;
    }
  }
  function _0xa7d8c0() {
    _0x134071.finish();
  }
  function _0x118409() {
    _0x134071.flush();
  }
  function _0x4ce36e(_0x3e642d) {
    switch (_0x3e642d) {
      case 34962:
        _0x3e642d = 34964;
        break;
      case 34963:
        _0x3e642d = 34965;
        break;
      case 35051:
        _0x3e642d = 35053;
        break;
      case 35052:
        _0x3e642d = 35055;
        break;
      case 35982:
        _0x3e642d = 35983;
        break;
      case 36662:
        _0x3e642d = 36662;
        break;
      case 36663:
        _0x3e642d = 36663;
        break;
      case 35345:
        _0x3e642d = 35368;
        break;
    }
    var _0x2f7d76 = _0x134071.getParameter(_0x3e642d);
    if (_0x2f7d76) {
      return _0x2f7d76.name | 0;
    } else {
      return 0;
    }
  }
  function _0x231ced(_0x50f9ff) {
    switch (_0x50f9ff) {
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
  function _0x513378(_0x34899c, _0x4fd480, _0x2a1ab7) {
    if (!_0x231ced(_0x34899c)) {
      _0x13a76e.recordError(1280);
      _0xf7c01a("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0xab1af2 = _0x13a76e.mappedBuffers[_0x4ce36e(_0x34899c)];
    if (!_0xab1af2) {
      _0x13a76e.recordError(1282);
      _0xf7c01a("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0xab1af2.access & 16)) {
      _0x13a76e.recordError(1282);
      _0xf7c01a("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x4fd480 < 0 || _0x2a1ab7 < 0 || _0x4fd480 + _0x2a1ab7 > _0xab1af2.length) {
      _0x13a76e.recordError(1281);
      _0xf7c01a("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x134071.bufferSubData(_0x34899c, _0xab1af2.offset, _0x1c9190.subarray(_0xab1af2.mem + _0x4fd480, _0xab1af2.mem + _0x4fd480 + _0x2a1ab7));
  }
  function _0x310ef3(_0x245e96, _0x1e3ab5, _0x113d23, _0x5b8e61) {
    _0x134071.framebufferRenderbuffer(_0x245e96, _0x1e3ab5, _0x113d23, _0x13a76e.renderbuffers[_0x5b8e61]);
  }
  function _0x4c4e7b(_0x3e025b, _0x406dc8, _0x3da4c0, _0x89ee9b, _0x24726b) {
    _0x134071.framebufferTexture2D(_0x3e025b, _0x406dc8, _0x3da4c0, _0x13a76e.textures[_0x89ee9b], _0x24726b);
  }
  function _0x3bad84(_0x28b21b, _0x1f3893, _0x3973f2, _0x166f36, _0x22b680) {
    _0x134071.framebufferTextureLayer(_0x28b21b, _0x1f3893, _0x13a76e.textures[_0x3973f2], _0x166f36, _0x22b680);
  }
  function _0x339f84(_0x27ba08) {
    _0x134071.frontFace(_0x27ba08);
  }
  function _0x6ebfe7(_0x5b76b4, _0x373b23, _0x2f988c, _0x4d55a6) {
    for (var _0x5ab849 = 0; _0x5ab849 < _0x5b76b4; _0x5ab849++) {
      var _0x1d9f88 = _0x134071[_0x2f988c]();
      var _0x534475 = _0x1d9f88 && _0x13a76e.getNewId(_0x4d55a6);
      if (_0x1d9f88) {
        _0x1d9f88.name = _0x534475;
        _0x4d55a6[_0x534475] = _0x1d9f88;
      } else {
        _0x13a76e.recordError(1282);
      }
      _0x49ddaa[_0x373b23 + _0x5ab849 * 4 >> 2] = _0x534475;
    }
  }
  function _0x8f9db3(_0x326443, _0x46634f) {
    _0x6ebfe7(_0x326443, _0x46634f, "createBuffer", _0x13a76e.buffers);
  }
  function _0x379424(_0x3b2fd6, _0x1a3475) {
    _0x6ebfe7(_0x3b2fd6, _0x1a3475, "createFramebuffer", _0x13a76e.framebuffers);
  }
  function _0x11f44f(_0x33f868, _0x3bd9a0) {
    _0x6ebfe7(_0x33f868, _0x3bd9a0, "createQuery", _0x13a76e.queries);
  }
  function _0x6cf846(_0x2829e3, _0x53f1e6) {
    _0x6ebfe7(_0x2829e3, _0x53f1e6, "createRenderbuffer", _0x13a76e.renderbuffers);
  }
  function _0x510564(_0x637f1d, _0x11501f) {
    _0x6ebfe7(_0x637f1d, _0x11501f, "createSampler", _0x13a76e.samplers);
  }
  function _0x5cf238(_0x22b567, _0x127376) {
    _0x6ebfe7(_0x22b567, _0x127376, "createTexture", _0x13a76e.textures);
  }
  function _0x4129f5(_0x4c5f95, _0x13d7d0) {
    _0x6ebfe7(_0x4c5f95, _0x13d7d0, "createTransformFeedback", _0x13a76e.transformFeedbacks);
  }
  function _0x461b89(_0x358fad, _0x2f38b1) {
    _0x6ebfe7(_0x358fad, _0x2f38b1, "createVertexArray", _0x13a76e.vaos);
  }
  function _0x331079(_0x5891ad) {
    _0x134071.generateMipmap(_0x5891ad);
  }
  function _0x259b2f(_0x81ee2, _0x3e28ca, _0x589a59, _0x785fb2, _0x1ce5e6, _0x1899c2, _0x2a070f, _0x509b13) {
    _0x3e28ca = _0x13a76e.programs[_0x3e28ca];
    var _0x4188fa = _0x134071[_0x81ee2](_0x3e28ca, _0x589a59);
    if (_0x4188fa) {
      var _0x2e3b26 = _0x509b13 && _0x2117d9(_0x4188fa.name, _0x509b13, _0x785fb2);
      if (_0x1ce5e6) {
        _0x49ddaa[_0x1ce5e6 >> 2] = _0x2e3b26;
      }
      if (_0x1899c2) {
        _0x49ddaa[_0x1899c2 >> 2] = _0x4188fa.size;
      }
      if (_0x2a070f) {
        _0x49ddaa[_0x2a070f >> 2] = _0x4188fa.type;
      }
    }
  }
  function _0x2f7258(_0x1d201f, _0x4939bb, _0x527548, _0x3269c8, _0x6bf149, _0x106cbb, _0x733f3b) {
    _0x259b2f("getActiveAttrib", _0x1d201f, _0x4939bb, _0x527548, _0x3269c8, _0x6bf149, _0x106cbb, _0x733f3b);
  }
  function _0x9ecb56(_0x525f6a, _0x16c348, _0x458342, _0x56f08b, _0x4a0f5e, _0xeb50e7, _0x1b2e87) {
    _0x259b2f("getActiveUniform", _0x525f6a, _0x16c348, _0x458342, _0x56f08b, _0x4a0f5e, _0xeb50e7, _0x1b2e87);
  }
  function _0x52350f(_0x17d7cd, _0x86a3ab, _0x53c704, _0x2ae8db, _0x16a124) {
    _0x17d7cd = _0x13a76e.programs[_0x17d7cd];
    var _0x3dc895 = _0x134071.getActiveUniformBlockName(_0x17d7cd, _0x86a3ab);
    if (!_0x3dc895) {
      return;
    }
    if (_0x16a124 && _0x53c704 > 0) {
      var _0x172456 = _0x2117d9(_0x3dc895, _0x16a124, _0x53c704);
      if (_0x2ae8db) {
        _0x49ddaa[_0x2ae8db >> 2] = _0x172456;
      }
    } else if (_0x2ae8db) {
      _0x49ddaa[_0x2ae8db >> 2] = 0;
    }
  }
  function _0x12a6aa(_0x5dc74d, _0x7b28e4, _0x2a7e42, _0x55aaf8) {
    if (!_0x55aaf8) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x5dc74d = _0x13a76e.programs[_0x5dc74d];
    if (_0x2a7e42 == 35393) {
      var _0xf48bdb = _0x134071.getActiveUniformBlockName(_0x5dc74d, _0x7b28e4);
      _0x49ddaa[_0x55aaf8 >> 2] = _0xf48bdb.length + 1;
      return;
    }
    var _0x2caaf4 = _0x134071.getActiveUniformBlockParameter(_0x5dc74d, _0x7b28e4, _0x2a7e42);
    if (_0x2caaf4 === null) {
      return;
    }
    if (_0x2a7e42 == 35395) {
      for (var _0xb79e79 = 0; _0xb79e79 < _0x2caaf4.length; _0xb79e79++) {
        _0x49ddaa[_0x55aaf8 + _0xb79e79 * 4 >> 2] = _0x2caaf4[_0xb79e79];
      }
    } else {
      _0x49ddaa[_0x55aaf8 >> 2] = _0x2caaf4;
    }
  }
  function _0x3f53bf(_0x91cada, _0x3a9bd2, _0x5e28db, _0x217913, _0x33f98a) {
    if (!_0x33f98a) {
      _0x13a76e.recordError(1281);
      return;
    }
    if (_0x3a9bd2 > 0 && _0x5e28db == 0) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x91cada = _0x13a76e.programs[_0x91cada];
    var _0x4f674f = [];
    for (var _0x431049 = 0; _0x431049 < _0x3a9bd2; _0x431049++) {
      _0x4f674f.push(_0x49ddaa[_0x5e28db + _0x431049 * 4 >> 2]);
    }
    var _0x29fcf0 = _0x134071.getActiveUniforms(_0x91cada, _0x4f674f, _0x217913);
    if (!_0x29fcf0) {
      return;
    }
    var _0x392ae1 = _0x29fcf0.length;
    for (var _0x431049 = 0; _0x431049 < _0x392ae1; _0x431049++) {
      _0x49ddaa[_0x33f98a + _0x431049 * 4 >> 2] = _0x29fcf0[_0x431049];
    }
  }
  function _0x162706(_0xa9ac2a, _0x5ce082) {
    return _0x134071.getAttribLocation(_0x13a76e.programs[_0xa9ac2a], _0x5d80c0(_0x5ce082));
  }
  function _0x285ea4(_0x1b0a4b, _0x5d458e, _0x439fe8, _0x134acc) {
    if (!_0x134acc) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x134071.getBufferSubData(_0x1b0a4b, _0x5d458e, _0x1c9190, _0x134acc, _0x439fe8);
  }
  function _0x3565b7() {
    var _0x5b9108 = _0x134071.getError() || _0x13a76e.lastError;
    _0x13a76e.lastError = 0;
    return _0x5b9108;
  }
  function _0x264951(_0x53ea64, _0x43a280, _0x5b03bc, _0xf8a939) {
    var _0x2bad2f = _0x134071.getFramebufferAttachmentParameter(_0x53ea64, _0x43a280, _0x5b03bc);
    if (_0x2bad2f instanceof WebGLRenderbuffer || _0x2bad2f instanceof WebGLTexture) {
      _0x2bad2f = _0x2bad2f.name | 0;
    }
    _0x49ddaa[_0xf8a939 >> 2] = _0x2bad2f;
  }
  function _0x369ff0(_0x16520a, _0x30e3ac) {
    _0x2fe6c1[_0x16520a >> 2] = _0x30e3ac;
    _0x2fe6c1[_0x16520a + 4 >> 2] = (_0x30e3ac - _0x2fe6c1[_0x16520a >> 2]) / 4294967296;
  }
  function _0x5d56d9(_0x116200, _0x3ff59d, _0x4df826, _0x363710) {
    if (!_0x4df826) {
      _0x13a76e.recordError(1281);
      return;
    }
    var _0x5923e0 = _0x134071.getIndexedParameter(_0x116200, _0x3ff59d);
    var _0x1043de;
    switch (typeof _0x5923e0) {
      case "boolean":
        _0x1043de = _0x5923e0 ? 1 : 0;
        break;
      case "number":
        _0x1043de = _0x5923e0;
        break;
      case "object":
        if (_0x5923e0 === null) {
          switch (_0x116200) {
            case 35983:
            case 35368:
              _0x1043de = 0;
              break;
            default:
              {
                _0x13a76e.recordError(1280);
                return;
              }
          }
        } else if (_0x5923e0 instanceof WebGLBuffer) {
          _0x1043de = _0x5923e0.name | 0;
        } else {
          _0x13a76e.recordError(1280);
          return;
        }
        break;
      default:
        _0x13a76e.recordError(1280);
        return;
    }
    switch (_0x363710) {
      case 1:
        _0x369ff0(_0x4df826, _0x1043de);
        break;
      case 0:
        _0x49ddaa[_0x4df826 >> 2] = _0x1043de;
        break;
      case 2:
        _0x72ca9a[_0x4df826 >> 2] = _0x1043de;
        break;
      case 4:
        _0x1e6f7f[_0x4df826 >> 0] = _0x1043de ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x363710;
    }
  }
  function _0x53647f(_0x30ae8a, _0x45e78f, _0x1eef6a) {
    _0x5d56d9(_0x30ae8a, _0x45e78f, _0x1eef6a, 0);
  }
  function _0x45aec2(_0x24d504, _0x4bb91f, _0x4427b5) {
    if (!_0x4bb91f) {
      _0x13a76e.recordError(1281);
      return;
    }
    var _0x3d2766 = undefined;
    switch (_0x24d504) {
      case 36346:
        _0x3d2766 = 1;
        break;
      case 36344:
        if (_0x4427b5 != 0 && _0x4427b5 != 1) {
          _0x13a76e.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0x3d2766 = 0;
        break;
      case 34466:
        var _0x2b53fc = _0x134071.getParameter(34467);
        _0x3d2766 = _0x2b53fc ? _0x2b53fc.length : 0;
        break;
      case 33390:
        _0x3d2766 = 1048576;
        break;
      case 33309:
        if (_0x13a76e.currentContext.version < 2) {
          _0x13a76e.recordError(1282);
          return;
        }
        var _0x38abc2 = _0x134071.getSupportedExtensions() || [];
        _0x3d2766 = _0x38abc2.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x13a76e.currentContext.version < 2) {
          _0x13a76e.recordError(1280);
          return;
        }
        _0x3d2766 = _0x24d504 == 33307 ? 3 : 0;
        break;
    }
    if (_0x3d2766 === undefined) {
      var _0x48affd = _0x134071.getParameter(_0x24d504);
      switch (typeof _0x48affd) {
        case "number":
          _0x3d2766 = _0x48affd;
          break;
        case "boolean":
          _0x3d2766 = _0x48affd ? 1 : 0;
          break;
        case "string":
          _0x13a76e.recordError(1280);
          return;
        case "object":
          if (_0x48affd === null) {
            switch (_0x24d504) {
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
                  _0x3d2766 = 0;
                  break;
                }
              default:
                {
                  _0x13a76e.recordError(1280);
                  return;
                }
            }
          } else if (_0x48affd instanceof Float32Array || _0x48affd instanceof Uint32Array || _0x48affd instanceof Int32Array || _0x48affd instanceof Array) {
            for (var _0x32ebfc = 0; _0x32ebfc < _0x48affd.length; ++_0x32ebfc) {
              switch (_0x4427b5) {
                case 0:
                  _0x49ddaa[_0x4bb91f + _0x32ebfc * 4 >> 2] = _0x48affd[_0x32ebfc];
                  break;
                case 2:
                  _0x72ca9a[_0x4bb91f + _0x32ebfc * 4 >> 2] = _0x48affd[_0x32ebfc];
                  break;
                case 4:
                  _0x1e6f7f[_0x4bb91f + _0x32ebfc >> 0] = _0x48affd[_0x32ebfc] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0x3d2766 = _0x48affd.name | 0;
            } catch (_0x33631b) {
              _0x13a76e.recordError(1280);
              _0xf7c01a("GL_INVALID_ENUM in glGet" + _0x4427b5 + "v: Unknown object returned from WebGL getParameter(" + _0x24d504 + ")! (error: " + _0x33631b + ")");
              return;
            }
          }
          break;
        default:
          _0x13a76e.recordError(1280);
          _0xf7c01a("GL_INVALID_ENUM in glGet" + _0x4427b5 + "v: Native code calling glGet" + _0x4427b5 + "v(" + _0x24d504 + ") and it returns " + _0x48affd + " of type " + typeof _0x48affd + "!");
          return;
      }
    }
    switch (_0x4427b5) {
      case 1:
        _0x369ff0(_0x4bb91f, _0x3d2766);
        break;
      case 0:
        _0x49ddaa[_0x4bb91f >> 2] = _0x3d2766;
        break;
      case 2:
        _0x72ca9a[_0x4bb91f >> 2] = _0x3d2766;
        break;
      case 4:
        _0x1e6f7f[_0x4bb91f >> 0] = _0x3d2766 ? 1 : 0;
        break;
    }
  }
  function _0x1f0187(_0x53a6a3, _0x36eb58) {
    _0x45aec2(_0x53a6a3, _0x36eb58, 0);
  }
  function _0x46d39f(_0x3cd9c6, _0x3d0294, _0x1b5d8b, _0x2d0a03, _0x92ddc8) {
    if (_0x2d0a03 < 0) {
      _0x13a76e.recordError(1281);
      return;
    }
    if (!_0x92ddc8) {
      _0x13a76e.recordError(1281);
      return;
    }
    var _0x216e38 = _0x134071.getInternalformatParameter(_0x3cd9c6, _0x3d0294, _0x1b5d8b);
    if (_0x216e38 === null) {
      return;
    }
    for (var _0x31c4bb = 0; _0x31c4bb < _0x216e38.length && _0x31c4bb < _0x2d0a03; ++_0x31c4bb) {
      _0x49ddaa[_0x92ddc8 + _0x31c4bb * 4 >> 2] = _0x216e38[_0x31c4bb];
    }
  }
  function _0x51a2d2(_0x57a7a2, _0x43eac7, _0xb8c500, _0x170dfb, _0x2f1a5e) {
    _0x13a76e.recordError(1282);
  }
  function _0x283a8e(_0x71992e, _0x222a8c, _0x407d69, _0x3f11f6) {
    var _0x56a876 = _0x134071.getProgramInfoLog(_0x13a76e.programs[_0x71992e]);
    if (_0x56a876 === null) {
      _0x56a876 = "(unknown error)";
    }
    var _0x3212ed = _0x222a8c > 0 && _0x3f11f6 ? _0x2117d9(_0x56a876, _0x3f11f6, _0x222a8c) : 0;
    if (_0x407d69) {
      _0x49ddaa[_0x407d69 >> 2] = _0x3212ed;
    }
  }
  function _0x5dcec2(_0x2f6661, _0x18a550, _0x128d27) {
    if (!_0x128d27) {
      _0x13a76e.recordError(1281);
      return;
    }
    if (_0x2f6661 >= _0x13a76e.counter) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x2f6661 = _0x13a76e.programs[_0x2f6661];
    if (_0x18a550 == 35716) {
      var _0x464113 = _0x134071.getProgramInfoLog(_0x2f6661);
      if (_0x464113 === null) {
        _0x464113 = "(unknown error)";
      }
      _0x49ddaa[_0x128d27 >> 2] = _0x464113.length + 1;
    } else if (_0x18a550 == 35719) {
      if (!_0x2f6661.maxUniformLength) {
        for (var _0x11ace3 = 0; _0x11ace3 < _0x134071.getProgramParameter(_0x2f6661, 35718); ++_0x11ace3) {
          _0x2f6661.maxUniformLength = Math.max(_0x2f6661.maxUniformLength, _0x134071.getActiveUniform(_0x2f6661, _0x11ace3).name.length + 1);
        }
      }
      _0x49ddaa[_0x128d27 >> 2] = _0x2f6661.maxUniformLength;
    } else if (_0x18a550 == 35722) {
      if (!_0x2f6661.maxAttributeLength) {
        for (var _0x11ace3 = 0; _0x11ace3 < _0x134071.getProgramParameter(_0x2f6661, 35721); ++_0x11ace3) {
          _0x2f6661.maxAttributeLength = Math.max(_0x2f6661.maxAttributeLength, _0x134071.getActiveAttrib(_0x2f6661, _0x11ace3).name.length + 1);
        }
      }
      _0x49ddaa[_0x128d27 >> 2] = _0x2f6661.maxAttributeLength;
    } else if (_0x18a550 == 35381) {
      if (!_0x2f6661.maxUniformBlockNameLength) {
        for (var _0x11ace3 = 0; _0x11ace3 < _0x134071.getProgramParameter(_0x2f6661, 35382); ++_0x11ace3) {
          _0x2f6661.maxUniformBlockNameLength = Math.max(_0x2f6661.maxUniformBlockNameLength, _0x134071.getActiveUniformBlockName(_0x2f6661, _0x11ace3).length + 1);
        }
      }
      _0x49ddaa[_0x128d27 >> 2] = _0x2f6661.maxUniformBlockNameLength;
    } else {
      _0x49ddaa[_0x128d27 >> 2] = _0x134071.getProgramParameter(_0x2f6661, _0x18a550);
    }
  }
  function _0x2b6acc(_0x33385c, _0x7b1013, _0x3ce62d) {
    if (!_0x3ce62d) {
      _0x13a76e.recordError(1281);
      return;
    }
    var _0x27a32e = _0x13a76e.queries[_0x33385c];
    var _0x2f0d4d = _0x134071.getQueryParameter(_0x27a32e, _0x7b1013);
    var _0x35215a;
    if (typeof _0x2f0d4d == "boolean") {
      _0x35215a = _0x2f0d4d ? 1 : 0;
    } else {
      _0x35215a = _0x2f0d4d;
    }
    _0x49ddaa[_0x3ce62d >> 2] = _0x35215a;
  }
  function _0x4bb4f(_0x146fd9, _0x2cab82, _0x17fc81) {
    if (!_0x17fc81) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x49ddaa[_0x17fc81 >> 2] = _0x134071.getQuery(_0x146fd9, _0x2cab82);
  }
  function _0x22e6ff(_0x1a5bd5, _0x7e4588, _0x141ce0) {
    if (!_0x141ce0) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x49ddaa[_0x141ce0 >> 2] = _0x134071.getRenderbufferParameter(_0x1a5bd5, _0x7e4588);
  }
  function _0x32e7c4(_0x234e54, _0x53d48e, _0x526943, _0x3b210e) {
    var _0x4784fc = _0x134071.getShaderInfoLog(_0x13a76e.shaders[_0x234e54]);
    if (_0x4784fc === null) {
      _0x4784fc = "(unknown error)";
    }
    var _0x33f8de = _0x53d48e > 0 && _0x3b210e ? _0x2117d9(_0x4784fc, _0x3b210e, _0x53d48e) : 0;
    if (_0x526943) {
      _0x49ddaa[_0x526943 >> 2] = _0x33f8de;
    }
  }
  function _0x14d2b0(_0x5ae1a5, _0x3f5cdb, _0x552d9f, _0x4d092e) {
    var _0x1bf400 = _0x134071.getShaderPrecisionFormat(_0x5ae1a5, _0x3f5cdb);
    _0x49ddaa[_0x552d9f >> 2] = _0x1bf400.rangeMin;
    _0x49ddaa[_0x552d9f + 4 >> 2] = _0x1bf400.rangeMax;
    _0x49ddaa[_0x4d092e >> 2] = _0x1bf400.precision;
  }
  function _0x4d51c9(_0x5de1ee, _0x2d08ce, _0x6feb88, _0x3530c1) {
    var _0x3f0d36 = _0x134071.getShaderSource(_0x13a76e.shaders[_0x5de1ee]);
    if (!_0x3f0d36) {
      return;
    }
    var _0x257ae3 = _0x2d08ce > 0 && _0x3530c1 ? _0x2117d9(_0x3f0d36, _0x3530c1, _0x2d08ce) : 0;
    if (_0x6feb88) {
      _0x49ddaa[_0x6feb88 >> 2] = _0x257ae3;
    }
  }
  function _0x5b6cb9(_0xeb9ea, _0x2cc093, _0x4a19bb) {
    if (!_0x4a19bb) {
      _0x13a76e.recordError(1281);
      return;
    }
    if (_0x2cc093 == 35716) {
      var _0x4db59e = _0x134071.getShaderInfoLog(_0x13a76e.shaders[_0xeb9ea]);
      if (_0x4db59e === null) {
        _0x4db59e = "(unknown error)";
      }
      var _0x21688b = _0x4db59e ? _0x4db59e.length + 1 : 0;
      _0x49ddaa[_0x4a19bb >> 2] = _0x21688b;
    } else if (_0x2cc093 == 35720) {
      var _0x3432ff = _0x134071.getShaderSource(_0x13a76e.shaders[_0xeb9ea]);
      var _0x1d28f7 = _0x3432ff ? _0x3432ff.length + 1 : 0;
      _0x49ddaa[_0x4a19bb >> 2] = _0x1d28f7;
    } else {
      _0x49ddaa[_0x4a19bb >> 2] = _0x134071.getShaderParameter(_0x13a76e.shaders[_0xeb9ea], _0x2cc093);
    }
  }
  function _0x322202(_0x5adb7b) {
    var _0x370624 = _0x13a76e.stringCache[_0x5adb7b];
    if (!_0x370624) {
      switch (_0x5adb7b) {
        case 7939:
          var _0x54df47 = _0x134071.getSupportedExtensions() || [];
          _0x54df47 = _0x54df47.concat(_0x54df47.map(function (_0x32b9d8) {
            return "GL_" + _0x32b9d8;
          }));
          _0x370624 = _0x36ad9d(_0x54df47.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x3f9611 = _0x134071.getParameter(_0x5adb7b);
          if (!_0x3f9611) {
            _0x13a76e.recordError(1280);
          }
          _0x370624 = _0x3f9611 && _0x36ad9d(_0x3f9611);
          break;
        case 7938:
          var _0xfef742 = _0x134071.getParameter(7938);
          if (_0x13a76e.currentContext.version >= 2) {
            _0xfef742 = "OpenGL ES 3.0 (" + _0xfef742 + ")";
          } else {
            _0xfef742 = "OpenGL ES 2.0 (" + _0xfef742 + ")";
          }
          _0x370624 = _0x36ad9d(_0xfef742);
          break;
        case 35724:
          var _0x359d6c = _0x134071.getParameter(35724);
          var _0x5d86f3 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x16dcdf = _0x359d6c.match(_0x5d86f3);
          if (_0x16dcdf !== null) {
            if (_0x16dcdf[1].length == 3) {
              _0x16dcdf[1] = _0x16dcdf[1] + "0";
            }
            _0x359d6c = "OpenGL ES GLSL ES " + _0x16dcdf[1] + " (" + _0x359d6c + ")";
          }
          _0x370624 = _0x36ad9d(_0x359d6c);
          break;
        default:
          _0x13a76e.recordError(1280);
      }
      _0x13a76e.stringCache[_0x5adb7b] = _0x370624;
    }
    return _0x370624;
  }
  function _0x5c4599(_0x27eb28, _0x1ae718) {
    if (_0x13a76e.currentContext.version < 2) {
      _0x13a76e.recordError(1282);
      return 0;
    }
    var _0x2ea3e1 = _0x13a76e.stringiCache[_0x27eb28];
    if (_0x2ea3e1) {
      if (_0x1ae718 < 0 || _0x1ae718 >= _0x2ea3e1.length) {
        _0x13a76e.recordError(1281);
        return 0;
      }
      return _0x2ea3e1[_0x1ae718];
    }
    switch (_0x27eb28) {
      case 7939:
        var _0x2ea1e8 = _0x134071.getSupportedExtensions() || [];
        _0x2ea1e8 = _0x2ea1e8.concat(_0x2ea1e8.map(function (_0x3ce489) {
          return "GL_" + _0x3ce489;
        }));
        _0x2ea1e8 = _0x2ea1e8.map(function (_0x2fd667) {
          return _0x36ad9d(_0x2fd667);
        });
        _0x2ea3e1 = _0x13a76e.stringiCache[_0x27eb28] = _0x2ea1e8;
        if (_0x1ae718 < 0 || _0x1ae718 >= _0x2ea3e1.length) {
          _0x13a76e.recordError(1281);
          return 0;
        }
        return _0x2ea3e1[_0x1ae718];
      default:
        _0x13a76e.recordError(1280);
        return 0;
    }
  }
  function _0x46b2b3(_0x33f1e3, _0x4cc81b, _0x4a65af) {
    if (!_0x4a65af) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x49ddaa[_0x4a65af >> 2] = _0x134071.getTexParameter(_0x33f1e3, _0x4cc81b);
  }
  function _0x4b875d(_0x3fefb0, _0xc707a5) {
    return _0x134071.getUniformBlockIndex(_0x13a76e.programs[_0x3fefb0], _0x5d80c0(_0xc707a5));
  }
  function _0xf6a25c(_0x3db184, _0x338a76, _0x55c121, _0x2e8f4d) {
    if (!_0x2e8f4d) {
      _0x13a76e.recordError(1281);
      return;
    }
    if (_0x338a76 > 0 && (_0x55c121 == 0 || _0x2e8f4d == 0)) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x3db184 = _0x13a76e.programs[_0x3db184];
    var _0x52eae3 = [];
    for (var _0x3016c7 = 0; _0x3016c7 < _0x338a76; _0x3016c7++) {
      _0x52eae3.push(_0x5d80c0(_0x49ddaa[_0x55c121 + _0x3016c7 * 4 >> 2]));
    }
    var _0x535e94 = _0x134071.getUniformIndices(_0x3db184, _0x52eae3);
    if (!_0x535e94) {
      return;
    }
    var _0x5a246e = _0x535e94.length;
    for (var _0x3016c7 = 0; _0x3016c7 < _0x5a246e; _0x3016c7++) {
      _0x49ddaa[_0x2e8f4d + _0x3016c7 * 4 >> 2] = _0x535e94[_0x3016c7];
    }
  }
  function _0x4f743b(_0x88d8a0, _0x11fe7b) {
    function _0x92c3a1(_0x36cdc8) {
      return _0x36cdc8.slice(-1) == "]" && _0x36cdc8.lastIndexOf("[");
    }
    _0x11fe7b = _0x5d80c0(_0x11fe7b);
    if (_0x88d8a0 = _0x13a76e.programs[_0x88d8a0]) {
      var _0x4cab75 = _0x88d8a0.uniformLocsById;
      var _0xc74292 = _0x88d8a0.uniformSizeAndIdsByName;
      var _0x23262f;
      var _0x14d1f4;
      var _0x381c2f = 0;
      var _0x5fd69a = _0x11fe7b;
      var _0x34f00a = _0x92c3a1(_0x11fe7b);
      if (!_0x4cab75) {
        _0x88d8a0.uniformLocsById = _0x4cab75 = {};
        _0x88d8a0.uniformArrayNamesById = {};
        for (_0x23262f = 0; _0x23262f < _0x134071.getProgramParameter(_0x88d8a0, 35718); ++_0x23262f) {
          var _0x1988c8 = _0x134071.getActiveUniform(_0x88d8a0, _0x23262f);
          var _0x20dfb2 = _0x1988c8.name;
          var _0x9cf8c2 = _0x1988c8.size;
          var _0x5c3d40 = _0x92c3a1(_0x20dfb2);
          var _0x34ccc1 = _0x5c3d40 > 0 ? _0x20dfb2.slice(0, _0x5c3d40) : _0x20dfb2;
          var _0x6bba92 = _0xc74292[_0x34ccc1] ? _0xc74292[_0x34ccc1][1] : _0x88d8a0.uniformIdCounter;
          _0x88d8a0.uniformIdCounter = Math.max(_0x6bba92 + _0x9cf8c2, _0x88d8a0.uniformIdCounter);
          _0xc74292[_0x34ccc1] = [_0x9cf8c2, _0x6bba92];
          for (_0x14d1f4 = 0; _0x14d1f4 < _0x9cf8c2; ++_0x14d1f4) {
            _0x4cab75[_0x6bba92] = _0x14d1f4;
            _0x88d8a0.uniformArrayNamesById[_0x6bba92++] = _0x34ccc1;
          }
        }
      }
      if (_0x34f00a > 0) {
        _0x381c2f = _0x4d49bd(_0x11fe7b.slice(_0x34f00a + 1)) >>> 0;
        _0x5fd69a = _0x11fe7b.slice(0, _0x34f00a);
      }
      var _0x20bc26 = _0xc74292[_0x5fd69a];
      if (_0x20bc26 && _0x381c2f < _0x20bc26[0]) {
        _0x381c2f += _0x20bc26[1];
        if (_0x4cab75[_0x381c2f] = _0x4cab75[_0x381c2f] || _0x134071.getUniformLocation(_0x88d8a0, _0x11fe7b)) {
          return _0x381c2f;
        }
      }
    } else {
      _0x13a76e.recordError(1281);
    }
    return -1;
  }
  function _0x3fcb4a(_0x28b14) {
    var _0x374204 = _0x134071.currentProgram;
    if (_0x374204) {
      var _0x3dba85 = _0x374204.uniformLocsById[_0x28b14];
      if (typeof _0x3dba85 === "number") {
        _0x374204.uniformLocsById[_0x28b14] = _0x3dba85 = _0x134071.getUniformLocation(_0x374204, _0x374204.uniformArrayNamesById[_0x28b14] + (_0x3dba85 > 0 ? "[" + _0x3dba85 + "]" : ""));
      }
      return _0x3dba85;
    } else {
      _0x13a76e.recordError(1282);
    }
  }
  function _0x118e50(_0x17d6e1, _0xfff0f2, _0x2f3305, _0x5362a7) {
    if (!_0x2f3305) {
      _0x13a76e.recordError(1281);
      return;
    }
    _0x17d6e1 = _0x13a76e.programs[_0x17d6e1];
    var _0x1e1093 = _0x134071.getUniform(_0x17d6e1, _0x3fcb4a(_0xfff0f2));
    if (typeof _0x1e1093 == "number" || typeof _0x1e1093 == "boolean") {
      switch (_0x5362a7) {
        case 0:
          _0x49ddaa[_0x2f3305 >> 2] = _0x1e1093;
          break;
        case 2:
          _0x72ca9a[_0x2f3305 >> 2] = _0x1e1093;
          break;
      }
    } else {
      for (var _0x313083 = 0; _0x313083 < _0x1e1093.length; _0x313083++) {
        switch (_0x5362a7) {
          case 0:
            _0x49ddaa[_0x2f3305 + _0x313083 * 4 >> 2] = _0x1e1093[_0x313083];
            break;
          case 2:
            _0x72ca9a[_0x2f3305 + _0x313083 * 4 >> 2] = _0x1e1093[_0x313083];
            break;
        }
      }
    }
  }
  function _0x2bdf51(_0x36b3ea, _0x2e68d2, _0x517880) {
    _0x118e50(_0x36b3ea, _0x2e68d2, _0x517880, 0);
  }
  function _0x443744(_0x4108ca, _0x567e85, _0x314333, _0x141cb3) {
    if (!_0x314333) {
      _0x13a76e.recordError(1281);
      return;
    }
    if (_0x13a76e.currentContext.clientBuffers[_0x4108ca].enabled) {
      _0xf7c01a("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x347289 = _0x134071.getVertexAttrib(_0x4108ca, _0x567e85);
    if (_0x567e85 == 34975) {
      _0x49ddaa[_0x314333 >> 2] = _0x347289 && _0x347289.name;
    } else if (typeof _0x347289 == "number" || typeof _0x347289 == "boolean") {
      switch (_0x141cb3) {
        case 0:
          _0x49ddaa[_0x314333 >> 2] = _0x347289;
          break;
        case 2:
          _0x72ca9a[_0x314333 >> 2] = _0x347289;
          break;
        case 5:
          _0x49ddaa[_0x314333 >> 2] = Math.fround(_0x347289);
          break;
      }
    } else {
      for (var _0x40c694 = 0; _0x40c694 < _0x347289.length; _0x40c694++) {
        switch (_0x141cb3) {
          case 0:
            _0x49ddaa[_0x314333 + _0x40c694 * 4 >> 2] = _0x347289[_0x40c694];
            break;
          case 2:
            _0x72ca9a[_0x314333 + _0x40c694 * 4 >> 2] = _0x347289[_0x40c694];
            break;
          case 5:
            _0x49ddaa[_0x314333 + _0x40c694 * 4 >> 2] = Math.fround(_0x347289[_0x40c694]);
            break;
        }
      }
    }
  }
  function _0x56fa56(_0x4ff8df, _0x484f6d, _0x388fc4) {
    _0x443744(_0x4ff8df, _0x484f6d, _0x388fc4, 5);
  }
  function _0x2a54ae(_0x19b545, _0x4c88c2, _0x16a554) {
    var _0x40ec29 = _0x2dff67[_0x4c88c2];
    for (var _0x55a18e = 0; _0x55a18e < _0x4c88c2; _0x55a18e++) {
      _0x40ec29[_0x55a18e] = _0x49ddaa[_0x16a554 + _0x55a18e * 4 >> 2];
    }
    _0x134071.invalidateFramebuffer(_0x19b545, _0x40ec29);
  }
  function _0x5a3510(_0xcb63ba) {
    return _0x134071.isEnabled(_0xcb63ba);
  }
  function _0x3e67e3(_0x20f2df) {
    var _0x1f88e2 = _0x13a76e.vaos[_0x20f2df];
    if (!_0x1f88e2) {
      return 0;
    }
    return _0x134071.isVertexArray(_0x1f88e2);
  }
  function _0x3d5be8(_0x3006e2) {
    _0x3006e2 = _0x13a76e.programs[_0x3006e2];
    _0x134071.linkProgram(_0x3006e2);
    _0x3006e2.uniformLocsById = 0;
    _0x3006e2.uniformSizeAndIdsByName = {};
    [_0x3006e2.vs, _0x3006e2.fs].forEach(function (_0x54fae5) {
      Object.keys(_0x54fae5.explicitUniformLocations).forEach(function (_0x5e9f63) {
        var _0x2d20e9 = _0x54fae5.explicitUniformLocations[_0x5e9f63];
        _0x3006e2.uniformSizeAndIdsByName[_0x5e9f63] = [1, _0x2d20e9];
        _0x3006e2.uniformIdCounter = Math.max(_0x3006e2.uniformIdCounter, _0x2d20e9 + 1);
      });
    });
    function _0x4ec37f(_0x3aa758, _0x4ae92e) {
      Object.keys(_0x4ae92e).forEach(function (_0x12c253) {
        _0x3aa758[_0x12c253] = _0x4ae92e[_0x12c253];
      });
    }
    _0x3006e2.explicitUniformBindings = {};
    _0x3006e2.explicitSamplerBindings = {};
    [_0x3006e2.vs, _0x3006e2.fs].forEach(function (_0x270694) {
      _0x4ec37f(_0x3006e2.explicitUniformBindings, _0x270694.explicitUniformBindings);
      _0x4ec37f(_0x3006e2.explicitSamplerBindings, _0x270694.explicitSamplerBindings);
    });
    _0x3006e2.explicitProgramBindingsApplied = 0;
  }
  function _0x144ced(_0x426f3f, _0x60d6ca, _0x3b592c, _0x421feb) {
    if (_0x421feb != 26 && _0x421feb != 10) {
      _0xf7c01a("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x231ced(_0x426f3f)) {
      _0x13a76e.recordError(1280);
      _0xf7c01a("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x4c425b = _0x304a50(_0x3b592c);
    if (!_0x4c425b) {
      return 0;
    }
    _0x13a76e.mappedBuffers[_0x4ce36e(_0x426f3f)] = {
      offset: _0x60d6ca,
      length: _0x3b592c,
      mem: _0x4c425b,
      access: _0x421feb
    };
    return _0x4c425b;
  }
  function _0xc92bb7(_0x136439, _0x413604) {
    if (_0x136439 == 3317) {
      _0x13a76e.unpackAlignment = _0x413604;
    }
    _0x134071.pixelStorei(_0x136439, _0x413604);
  }
  function _0x3b7b0f(_0x343930, _0x379ef6) {
    _0x134071.polygonOffset(_0x343930, _0x379ef6);
  }
  function _0x32a12d(_0x4fe055, _0x3a3e36, _0x2988bc, _0x290de9) {
    _0x13a76e.recordError(1280);
  }
  function _0x54d51b(_0x207c60, _0x50acd1, _0x4d71f1) {
    _0x13a76e.recordError(1280);
  }
  function _0x469876(_0x3fd651) {
    _0x134071.readBuffer(_0x3fd651);
  }
  function _0x361415(_0x2b43c6, _0x483dff, _0x1cbb21, _0x1bfc1a) {
    function _0x14bd69(_0x58400b, _0x3c0273) {
      return _0x58400b + _0x3c0273 - 1 & -_0x3c0273;
    }
    var _0x10256e = _0x2b43c6 * _0x1cbb21;
    var _0x3195f3 = _0x14bd69(_0x10256e, _0x1bfc1a);
    return _0x483dff * _0x3195f3;
  }
  function _0x22469b(_0x2e4735) {
    var _0xc83d41 = {
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
    return _0xc83d41[_0x2e4735 - 6402] || 1;
  }
  function _0x50d009(_0x5c55a3) {
    _0x5c55a3 -= 5120;
    if (_0x5c55a3 == 0) {
      return _0x1e6f7f;
    }
    if (_0x5c55a3 == 1) {
      return _0x1c9190;
    }
    if (_0x5c55a3 == 2) {
      return _0x9533b8;
    }
    if (_0x5c55a3 == 4) {
      return _0x49ddaa;
    }
    if (_0x5c55a3 == 6) {
      return _0x72ca9a;
    }
    if (_0x5c55a3 == 5 || _0x5c55a3 == 28922 || _0x5c55a3 == 28520 || _0x5c55a3 == 30779 || _0x5c55a3 == 30782) {
      return _0x2fe6c1;
    }
    return _0x3d21d8;
  }
  function _0x17bd83(_0x32366f) {
    return 31 - Math.clz32(_0x32366f.BYTES_PER_ELEMENT);
  }
  function _0x3d2ee9(_0x550060, _0x4c1263, _0x165da0, _0x5eadfa, _0x118339, _0xe2f0be) {
    var _0xdd2fd8 = _0x50d009(_0x550060);
    var _0x33c40b = _0x17bd83(_0xdd2fd8);
    var _0x238276 = 1 << _0x33c40b;
    var _0x5590b4 = _0x22469b(_0x4c1263) * _0x238276;
    var _0x142039 = _0x361415(_0x165da0, _0x5eadfa, _0x5590b4, _0x13a76e.unpackAlignment);
    return _0xdd2fd8.subarray(_0x118339 >> _0x33c40b, _0x118339 + _0x142039 >> _0x33c40b);
  }
  function _0x17a3ac(_0x557fbd, _0x488fd7, _0x3352eb, _0x3a04ea, _0x2afde9, _0x36ddb0, _0x446886) {
    if (_0x13a76e.currentContext.version >= 2) {
      if (_0x134071.currentPixelPackBufferBinding) {
        _0x134071.readPixels(_0x557fbd, _0x488fd7, _0x3352eb, _0x3a04ea, _0x2afde9, _0x36ddb0, _0x446886);
      } else {
        var _0x1c03e3 = _0x50d009(_0x36ddb0);
        _0x134071.readPixels(_0x557fbd, _0x488fd7, _0x3352eb, _0x3a04ea, _0x2afde9, _0x36ddb0, _0x1c03e3, _0x446886 >> _0x17bd83(_0x1c03e3));
      }
      return;
    }
    var _0x4d2208 = _0x3d2ee9(_0x36ddb0, _0x2afde9, _0x3352eb, _0x3a04ea, _0x446886, _0x2afde9);
    if (!_0x4d2208) {
      _0x13a76e.recordError(1280);
      return;
    }
    _0x134071.readPixels(_0x557fbd, _0x488fd7, _0x3352eb, _0x3a04ea, _0x2afde9, _0x36ddb0, _0x4d2208);
  }
  function _0x488d22(_0xa91aca, _0x2bbb89, _0x58d2d4, _0x188cb7) {
    _0x134071.renderbufferStorage(_0xa91aca, _0x2bbb89, _0x58d2d4, _0x188cb7);
  }
  function _0x131a91(_0x1a6fba, _0x53f51f, _0x1a28e3, _0x62e9c8, _0x1965ea) {
    _0x134071.renderbufferStorageMultisample(_0x1a6fba, _0x53f51f, _0x1a28e3, _0x62e9c8, _0x1965ea);
  }
  function _0x525b3b(_0x5ab4c4, _0x225ea4, _0x4f9f1f) {
    _0x134071.samplerParameteri(_0x13a76e.samplers[_0x5ab4c4], _0x225ea4, _0x4f9f1f);
  }
  function _0xca6f6(_0x3841f5, _0x22fdd3, _0x19d2b5, _0x6616ef) {
    _0x134071.scissor(_0x3841f5, _0x22fdd3, _0x19d2b5, _0x6616ef);
  }
  function _0x39a0ff(_0x2ec36f, _0x2dfa71, _0x58841b = "(", _0x512fa5 = ")") {
    var _0x92a1b = 0;
    for (; _0x2dfa71 < _0x2ec36f.length; ++_0x2dfa71) {
      if (_0x2ec36f[_0x2dfa71] == _0x58841b) {
        ++_0x92a1b;
      }
      if (_0x2ec36f[_0x2dfa71] == _0x512fa5 && --_0x92a1b == 0) {
        return _0x2dfa71;
      }
    }
  }
  function _0x2ba441(_0x21c10d) {
    var _0x33763c = 0;
    var _0x4fd6d7 = _0x21c10d.length;
    var _0x44139f = "";
    var _0x41f6f8 = [1];
    var _0x2023d5 = {
      defined: function (_0x542a23) {
        if (_0x2023d5[_0x542a23[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x2c3474(_0x5dc45c, _0x5dd67a) {
      return !(_0x5dc45c.charCodeAt(_0x5dd67a) > 32);
    }
    function _0x2462d4(_0x2de9fa, _0x59ebb5) {
      while (!_0x2c3474(_0x2de9fa, _0x59ebb5)) {
        ++_0x59ebb5;
      }
      return _0x59ebb5;
    }
    function _0x11e7c4(_0x5095e9, _0x274259) {
      var _0x306998 = _0x5095e9.charCodeAt(_0x274259);
      if (_0x306998 > 32) {
        if (_0x306998 < 48) {
          return 1;
        }
        if (_0x306998 < 58) {
          return 2;
        }
        if (_0x306998 < 65) {
          return 1;
        }
        if (_0x306998 < 91 || _0x306998 == 95) {
          return 3;
        }
        if (_0x306998 < 97) {
          return 1;
        }
        if (_0x306998 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x306998 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x489fc8(_0x5cbf93, _0x1e8214) {
      var _0x18726d = [];
      var _0x49d44e = _0x5cbf93.length;
      for (var _0x238930 = 0; _0x238930 <= _0x49d44e; ++_0x238930) {
        var _0x5c34d5 = _0x11e7c4(_0x5cbf93, _0x238930);
        if (_0x5c34d5 == 2 || _0x5c34d5 == 3) {
          for (var _0x2a8290 = _0x238930 + 1; _0x2a8290 <= _0x49d44e; ++_0x2a8290) {
            var _0x54982f = _0x11e7c4(_0x5cbf93, _0x2a8290);
            if (_0x54982f != _0x5c34d5 && (_0x54982f != 2 || _0x5c34d5 != 3)) {
              _0x18726d.push(_0x5cbf93.substring(_0x238930, _0x2a8290));
              _0x238930 = _0x2a8290 - 1;
              break;
            }
          }
        } else if (_0x5c34d5 == 1) {
          var _0x40c36c = _0x5cbf93.substr(_0x238930, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x40c36c)) {
            _0x18726d.push(_0x40c36c);
            ++_0x238930;
          } else {
            _0x18726d.push(_0x5cbf93[_0x238930]);
          }
        }
      }
      return _0x18726d;
    }
    function _0x6563e8(_0x54af8f, _0x166a61, _0x8033a = _0x54af8f.length) {
      var _0x53df20 = _0x54af8f.length;
      var _0x31cf84 = "";
      for (var _0x2c82b5 = _0x166a61; _0x2c82b5 < _0x8033a; ++_0x2c82b5) {
        var _0x364f42 = _0x11e7c4(_0x54af8f, _0x2c82b5);
        if (_0x364f42 == 3) {
          for (var _0x5dbad9 = _0x2c82b5 + 1; _0x5dbad9 <= _0x8033a; ++_0x5dbad9) {
            var _0x3d3001 = _0x11e7c4(_0x54af8f, _0x5dbad9);
            if (_0x3d3001 != 2 && _0x3d3001 != 3) {
              var _0x2c2d44 = _0x54af8f.substring(_0x2c82b5, _0x5dbad9);
              var _0x990f9c = _0x2023d5[_0x2c2d44];
              if (_0x990f9c) {
                var _0x1de938 = _0x54af8f.substring(_0x166a61, _0x2c82b5);
                if (_0x990f9c.length && _0x54af8f[_0x5dbad9] == "(") {
                  var _0x2a4fab = _0x39a0ff(_0x54af8f, _0x5dbad9);
                  _0x1de938 += _0x990f9c(_0x54af8f.substring(_0x5dbad9 + 1, _0x2a4fab).split(",")) + _0x54af8f.substring(_0x2a4fab + 1, _0x8033a);
                } else {
                  _0x1de938 += _0x990f9c() + _0x54af8f.substring(_0x5dbad9, _0x8033a);
                }
                return _0x6563e8(_0x1de938, 0);
              } else {
                _0x31cf84 += _0x2c2d44;
                _0x2c82b5 = _0x5dbad9 - 1;
                break;
              }
            }
          }
        } else {
          _0x31cf84 += _0x54af8f[_0x2c82b5];
        }
      }
      return _0x31cf84;
    }
    function _0x2dec92(_0x956f5a) {
      while (_0x956f5a.length > 1 || typeof _0x956f5a[0] != "function") {
        _0x956f5a = function (_0x2ee7c2) {
          var _0x162669;
          var _0x1a4050;
          var _0x4fd30d;
          var _0x46b3fc = -2;
          for (_0x1a4050 = 0; _0x1a4050 < _0x2ee7c2.length; ++_0x1a4050) {
            if ((_0x4fd30d = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x2ee7c2[_0x1a4050])) > _0x46b3fc) {
              _0x162669 = _0x1a4050;
              _0x46b3fc = _0x4fd30d;
            }
          }
          if (_0x46b3fc == 13) {
            var _0x1a4050 = _0x39a0ff(_0x2ee7c2, _0x162669);
            if (_0x1a4050) {
              _0x2ee7c2.splice(_0x162669, _0x1a4050 + 1 - _0x162669, _0x2dec92(_0x2ee7c2.slice(_0x162669 + 1, _0x1a4050)));
              return _0x2ee7c2;
            }
          }
          if (_0x46b3fc == 4) {
            _0x162669 = _0x2ee7c2.lastIndexOf("!");
            var _0x26611d = _0x2dec92(_0x2ee7c2.slice(_0x162669 + 1, _0x162669 + 2));
            _0x2ee7c2.splice(_0x162669, 2, function () {
              return !_0x26611d();
            });
            return _0x2ee7c2;
          }
          if (_0x46b3fc >= 0) {
            var _0x1322da = _0x2dec92(_0x2ee7c2.slice(0, _0x162669));
            var _0x524676 = _0x2dec92(_0x2ee7c2.slice(_0x162669 + 1));
            switch (_0x2ee7c2[_0x162669]) {
              case "&&":
                return [function () {
                  return _0x1322da() && _0x524676();
                }];
              case "||":
                return [function () {
                  return _0x1322da() || _0x524676();
                }];
              case "==":
                return [function () {
                  return _0x1322da() == _0x524676();
                }];
              case "!=":
                return [function () {
                  return _0x1322da() != _0x524676();
                }];
              case "<":
                return [function () {
                  return _0x1322da() < _0x524676();
                }];
              case "<=":
                return [function () {
                  return _0x1322da() <= _0x524676();
                }];
              case ">":
                return [function () {
                  return _0x1322da() > _0x524676();
                }];
              case ">=":
                return [function () {
                  return _0x1322da() >= _0x524676();
                }];
              case "+":
                return [function () {
                  return _0x1322da() + _0x524676();
                }];
              case "-":
                return [function () {
                  return _0x1322da() - _0x524676();
                }];
              case "*":
                return [function () {
                  return _0x1322da() * _0x524676();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x1322da() / _0x524676());
                }];
            }
          }
          var _0x53b319 = _0x4d49bd(_0x2ee7c2[_0x162669]);
          return [function () {
            return _0x53b319;
          }];
        }(_0x956f5a);
      }
      return _0x956f5a[0];
    }
    for (; _0x33763c < _0x4fd6d7; ++_0x33763c) {
      var _0x11e5a8 = _0x33763c;
      _0x33763c = _0x21c10d.indexOf("\n", _0x33763c);
      if (_0x33763c < 0) {
        _0x33763c = _0x4fd6d7;
      }
      for (var _0x4f5610 = _0x11e5a8; _0x4f5610 < _0x33763c && _0x2c3474(_0x21c10d, _0x4f5610); ++_0x4f5610);
      var _0x4ce0c5 = _0x41f6f8[_0x41f6f8.length - 1];
      if (_0x21c10d[_0x4f5610] != "#") {
        if (_0x4ce0c5) {
          _0x44139f += _0x6563e8(_0x21c10d, _0x11e5a8, _0x33763c) + "\n";
        }
        continue;
      }
      var _0x2013df = _0x2462d4(_0x21c10d, _0x4f5610);
      var _0x25679e = _0x21c10d.substring(_0x4f5610 + 1, _0x2013df);
      var _0x53ac80 = _0x21c10d.substring(_0x2013df, _0x33763c).trim();
      switch (_0x25679e) {
        case "if":
          var _0x201032 = _0x489fc8(_0x6563e8(_0x53ac80, 0));
          var _0x504708 = _0x2dec92(_0x201032);
          var _0x365631 = _0x504708();
          _0x41f6f8.push(!!_0x365631 * _0x41f6f8[_0x41f6f8.length - 1]);
          break;
        case "ifdef":
          _0x41f6f8.push(!!_0x2023d5[_0x53ac80] * _0x41f6f8[_0x41f6f8.length - 1]);
          break;
        case "ifndef":
          _0x41f6f8.push(!_0x2023d5[_0x53ac80] * _0x41f6f8[_0x41f6f8.length - 1]);
          break;
        case "else":
          _0x41f6f8[_0x41f6f8.length - 1] = 1 - _0x41f6f8[_0x41f6f8.length - 1];
          break;
        case "endif":
          _0x41f6f8.pop();
          break;
        case "define":
          if (_0x4ce0c5) {
            var _0x2d7be3 = _0x53ac80.indexOf("(");
            var _0x32b57f = _0x2462d4(_0x53ac80, 0);
            if (_0x32b57f < _0x2d7be3) {
              _0x2d7be3 = 0;
            }
            if (_0x2d7be3 > 0) {
              var _0x568139 = _0x53ac80.indexOf(")", _0x2d7be3);
              let _0x2c3a5a = _0x53ac80.substring(_0x2d7be3 + 1, _0x568139).split(",").map(_0xa6be06 => _0xa6be06.trim());
              let _0x3048d8 = _0x489fc8(_0x53ac80.substring(_0x568139 + 1).trim());
              _0x2023d5[_0x53ac80.substring(0, _0x2d7be3)] = function (_0xbcf85e) {
                var _0x13bf26 = "";
                _0x3048d8.forEach(_0x31d3c8 => {
                  var _0x382f34 = _0x2c3a5a.indexOf(_0x31d3c8);
                  _0x13bf26 += _0x382f34 >= 0 ? _0xbcf85e[_0x382f34] : _0x31d3c8;
                });
                return _0x13bf26;
              };
            } else {
              let _0x489fe6 = _0x6563e8(_0x53ac80.substring(_0x32b57f + 1).trim(), 0);
              _0x2023d5[_0x53ac80.substring(0, _0x32b57f)] = function () {
                return _0x489fe6;
              };
            }
          }
          break;
        case "undef":
          if (_0x4ce0c5) {
            delete _0x2023d5[_0x53ac80];
          }
          break;
        default:
          if (_0x25679e != "version" && _0x25679e != "pragma" && _0x25679e != "extension") {}
          _0x44139f += _0x6563e8(_0x21c10d, _0x11e5a8, _0x33763c) + "\n";
      }
    }
    return _0x44139f;
  }
  function _0x58d88a(_0x5772c6) {
    var _0x3c2ff1 = 0;
    var _0xb5cbfd = "";
    var _0x2a70c8;
    var _0x1667eb;
    var _0x13da88 = _0x5772c6.length;
    for (; _0x3c2ff1 < _0x13da88; ++_0x3c2ff1) {
      _0x2a70c8 = _0x5772c6[_0x3c2ff1];
      if (_0x2a70c8 == "/") {
        _0x1667eb = _0x5772c6[_0x3c2ff1 + 1];
        if (_0x1667eb == "/") {
          while (_0x3c2ff1 < _0x13da88 && _0x5772c6[_0x3c2ff1 + 1] != "\n") {
            ++_0x3c2ff1;
          }
        } else if (_0x1667eb == "*") {
          while (_0x3c2ff1 < _0x13da88 && (_0x5772c6[_0x3c2ff1 - 1] != "*" || _0x5772c6[_0x3c2ff1] != "/")) {
            ++_0x3c2ff1;
          }
        } else {
          _0xb5cbfd += _0x2a70c8;
        }
      } else {
        _0xb5cbfd += _0x2a70c8;
      }
    }
    return _0xb5cbfd;
  }
  function _0x5bf3fd(_0x27ab39, _0x599ccd, _0x4f4a6f, _0x4be1ff) {
    var _0x3b211b = _0x13a76e.getSource(_0x27ab39, _0x599ccd, _0x4f4a6f, _0x4be1ff);
    _0x3b211b = _0x2ba441(_0x58d88a(_0x3b211b));
    var _0x1a6a81 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x416870 = {};
    var _0x3bf14b;
    while (_0x3bf14b = _0x1a6a81.exec(_0x3b211b)) {
      _0x416870[_0x3bf14b[5]] = _0x4d49bd(_0x3bf14b[1]);
      if (!(_0x416870[_0x3bf14b[5]] >= 0) || !(_0x416870[_0x3bf14b[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x416870[_0x3bf14b[5]] + "\"! (" + _0x3bf14b[0] + ")");
        _0x13a76e.recordError(1281);
        return;
      }
    }
    _0x3b211b = _0x3b211b.replace(_0x1a6a81, "$2");
    _0x13a76e.shaders[_0x27ab39].explicitUniformLocations = _0x416870;
    var _0xea21cc = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x273ed7 = {};
    var _0x4615c0 = {};
    var _0x52e25d;
    while (_0x52e25d = _0xea21cc.exec(_0x3b211b)) {
      var _0x7e08b9 = 1;
      for (var _0x346e35 = _0x52e25d.index; _0x346e35 < _0x3b211b.length && _0x3b211b[_0x346e35] != ";"; ++_0x346e35) {
        if (_0x3b211b[_0x346e35] == "[") {
          _0x7e08b9 = _0x4d49bd(_0x3b211b.slice(_0x346e35 + 1));
          break;
        }
        if (_0x3b211b[_0x346e35] == "{") {
          _0x346e35 = _0x39a0ff(_0x3b211b, _0x346e35, "{", "}") - 1;
        }
      }
      var _0x53ee11 = _0x4d49bd(_0x52e25d[1]);
      var _0x3b1f78 = 34930;
      if (_0x52e25d[3] && _0x52e25d[2].indexOf("sampler") != -1) {
        _0x273ed7[_0x52e25d[3]] = [_0x53ee11, _0x7e08b9];
      } else {
        _0x3b1f78 = 35374;
        _0x4615c0[_0x52e25d[2]] = [_0x53ee11, _0x7e08b9];
      }
      var _0x5bb99d = _0x134071.getParameter(_0x3b1f78);
      if (!(_0x53ee11 >= 0) || !(_0x53ee11 + _0x7e08b9 <= _0x5bb99d)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x53ee11 + "\"! (" + _0x52e25d[0] + "). Valid range is [0, " + _0x5bb99d + "-1]");
        _0x13a76e.recordError(1281);
        return;
      }
    }
    _0x3b211b = _0x3b211b.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x3b211b = _0x3b211b.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x3b211b = _0x3b211b.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x13a76e.shaders[_0x27ab39].explicitSamplerBindings = _0x273ed7;
    _0x13a76e.shaders[_0x27ab39].explicitUniformBindings = _0x4615c0;
    _0x134071.shaderSource(_0x13a76e.shaders[_0x27ab39], _0x3b211b);
  }
  function _0x4201ac(_0x199f81, _0x4230c2, _0x16fe70, _0x3596a1) {
    _0x134071.stencilFuncSeparate(_0x199f81, _0x4230c2, _0x16fe70, _0x3596a1);
  }
  function _0xb48aa7(_0x5c8e13) {
    _0x134071.stencilMask(_0x5c8e13);
  }
  function _0x281de0(_0xa712dd, _0x457261, _0x2a8e08, _0x1d7354) {
    _0x134071.stencilOpSeparate(_0xa712dd, _0x457261, _0x2a8e08, _0x1d7354);
  }
  function _0x4330f9(_0x1c6008, _0x130fc0, _0x4f3762, _0x952d19, _0x14a67b, _0x18d757, _0x4f7f2b, _0x283846, _0x423b3c) {
    if (_0x13a76e.currentContext.version >= 2) {
      if (_0x134071.currentPixelUnpackBufferBinding) {
        _0x134071.texImage2D(_0x1c6008, _0x130fc0, _0x4f3762, _0x952d19, _0x14a67b, _0x18d757, _0x4f7f2b, _0x283846, _0x423b3c);
      } else if (_0x423b3c) {
        var _0x5afefd = _0x50d009(_0x283846);
        _0x134071.texImage2D(_0x1c6008, _0x130fc0, _0x4f3762, _0x952d19, _0x14a67b, _0x18d757, _0x4f7f2b, _0x283846, _0x5afefd, _0x423b3c >> _0x17bd83(_0x5afefd));
      } else {
        _0x134071.texImage2D(_0x1c6008, _0x130fc0, _0x4f3762, _0x952d19, _0x14a67b, _0x18d757, _0x4f7f2b, _0x283846, null);
      }
      return;
    }
    _0x134071.texImage2D(_0x1c6008, _0x130fc0, _0x4f3762, _0x952d19, _0x14a67b, _0x18d757, _0x4f7f2b, _0x283846, _0x423b3c ? _0x3d2ee9(_0x283846, _0x4f7f2b, _0x952d19, _0x14a67b, _0x423b3c, _0x4f3762) : null);
  }
  function _0x2627d4(_0x2a1c2b, _0x494be4, _0x462d0e, _0x386374, _0x24ef23, _0x2a911d, _0x1c14c4, _0x8cc8dc, _0x478c60, _0x5c9eca) {
    if (_0x134071.currentPixelUnpackBufferBinding) {
      _0x134071.texImage3D(_0x2a1c2b, _0x494be4, _0x462d0e, _0x386374, _0x24ef23, _0x2a911d, _0x1c14c4, _0x8cc8dc, _0x478c60, _0x5c9eca);
    } else if (_0x5c9eca) {
      var _0x320070 = _0x50d009(_0x478c60);
      _0x134071.texImage3D(_0x2a1c2b, _0x494be4, _0x462d0e, _0x386374, _0x24ef23, _0x2a911d, _0x1c14c4, _0x8cc8dc, _0x478c60, _0x320070, _0x5c9eca >> _0x17bd83(_0x320070));
    } else {
      _0x134071.texImage3D(_0x2a1c2b, _0x494be4, _0x462d0e, _0x386374, _0x24ef23, _0x2a911d, _0x1c14c4, _0x8cc8dc, _0x478c60, null);
    }
  }
  function _0x1f2474(_0x276cc6, _0x147732, _0x867c2d) {
    _0x134071.texParameterf(_0x276cc6, _0x147732, _0x867c2d);
  }
  function _0x519398(_0x47a5a4, _0x4210e5, _0x5765e7) {
    _0x134071.texParameteri(_0x47a5a4, _0x4210e5, _0x5765e7);
  }
  function _0x49df26(_0x5de6b6, _0x251c21, _0x2cd8b0) {
    var _0x13dddb = _0x49ddaa[_0x2cd8b0 >> 2];
    _0x134071.texParameteri(_0x5de6b6, _0x251c21, _0x13dddb);
  }
  function _0x4e37b0(_0x5882e0, _0x434aba, _0x1fb4e7, _0x3f354f, _0x551a) {
    _0x134071.texStorage2D(_0x5882e0, _0x434aba, _0x1fb4e7, _0x3f354f, _0x551a);
  }
  function _0x6e8fcb(_0x26e1c3, _0x571ae6, _0x583dbd, _0x4b2f49, _0x55166d, _0x23e8b8) {
    _0x134071.texStorage3D(_0x26e1c3, _0x571ae6, _0x583dbd, _0x4b2f49, _0x55166d, _0x23e8b8);
  }
  function _0x16cfc9(_0x44a32b, _0xe04b57, _0x112309, _0x448b82, _0xb41f48, _0x3093d1, _0x3c6bed, _0x5937c0, _0x4b1227) {
    if (_0x13a76e.currentContext.version >= 2) {
      if (_0x134071.currentPixelUnpackBufferBinding) {
        _0x134071.texSubImage2D(_0x44a32b, _0xe04b57, _0x112309, _0x448b82, _0xb41f48, _0x3093d1, _0x3c6bed, _0x5937c0, _0x4b1227);
      } else if (_0x4b1227) {
        var _0x28c450 = _0x50d009(_0x5937c0);
        _0x134071.texSubImage2D(_0x44a32b, _0xe04b57, _0x112309, _0x448b82, _0xb41f48, _0x3093d1, _0x3c6bed, _0x5937c0, _0x28c450, _0x4b1227 >> _0x17bd83(_0x28c450));
      } else {
        _0x134071.texSubImage2D(_0x44a32b, _0xe04b57, _0x112309, _0x448b82, _0xb41f48, _0x3093d1, _0x3c6bed, _0x5937c0, null);
      }
      return;
    }
    var _0x597178 = null;
    if (_0x4b1227) {
      _0x597178 = _0x3d2ee9(_0x5937c0, _0x3c6bed, _0xb41f48, _0x3093d1, _0x4b1227, 0);
    }
    _0x134071.texSubImage2D(_0x44a32b, _0xe04b57, _0x112309, _0x448b82, _0xb41f48, _0x3093d1, _0x3c6bed, _0x5937c0, _0x597178);
  }
  function _0x4c921b(_0x301832, _0x4d334a, _0x30f4b1, _0x81f7bd, _0xd709cc, _0x37e85d, _0x25a6dc, _0x472c77, _0x2c43d3, _0x5d6cfe, _0x50ea7e) {
    if (_0x134071.currentPixelUnpackBufferBinding) {
      _0x134071.texSubImage3D(_0x301832, _0x4d334a, _0x30f4b1, _0x81f7bd, _0xd709cc, _0x37e85d, _0x25a6dc, _0x472c77, _0x2c43d3, _0x5d6cfe, _0x50ea7e);
    } else if (_0x50ea7e) {
      var _0x87407 = _0x50d009(_0x5d6cfe);
      _0x134071.texSubImage3D(_0x301832, _0x4d334a, _0x30f4b1, _0x81f7bd, _0xd709cc, _0x37e85d, _0x25a6dc, _0x472c77, _0x2c43d3, _0x5d6cfe, _0x87407, _0x50ea7e >> _0x17bd83(_0x87407));
    } else {
      _0x134071.texSubImage3D(_0x301832, _0x4d334a, _0x30f4b1, _0x81f7bd, _0xd709cc, _0x37e85d, _0x25a6dc, _0x472c77, _0x2c43d3, _0x5d6cfe, null);
    }
  }
  function _0x24af97(_0x3def25, _0x460634, _0x5879bf, _0x2d519e) {
    _0x3def25 = _0x13a76e.programs[_0x3def25];
    var _0x108849 = [];
    for (var _0x357d20 = 0; _0x357d20 < _0x460634; _0x357d20++) {
      _0x108849.push(_0x5d80c0(_0x49ddaa[_0x5879bf + _0x357d20 * 4 >> 2]));
    }
    _0x134071.transformFeedbackVaryings(_0x3def25, _0x108849, _0x2d519e);
  }
  var _0x2d0ed9 = [];
  function _0x5471c3(_0x2c6212, _0x2b1b51, _0x655f60) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform1fv(_0x3fcb4a(_0x2c6212), _0x72ca9a, _0x655f60 >> 2, _0x2b1b51);
      return;
    }
    if (_0x2b1b51 <= 288) {
      var _0xa132b9 = _0x2d0ed9[_0x2b1b51 - 1];
      for (var _0x5b5be8 = 0; _0x5b5be8 < _0x2b1b51; ++_0x5b5be8) {
        _0xa132b9[_0x5b5be8] = _0x72ca9a[_0x655f60 + _0x5b5be8 * 4 >> 2];
      }
    } else {
      var _0xa132b9 = _0x72ca9a.subarray(_0x655f60 >> 2, _0x655f60 + _0x2b1b51 * 4 >> 2);
    }
    _0x134071.uniform1fv(_0x3fcb4a(_0x2c6212), _0xa132b9);
  }
  function _0x3ef6ed(_0x50fb1a, _0x1becbc) {
    _0x134071.uniform1i(_0x3fcb4a(_0x50fb1a), _0x1becbc);
  }
  var _0x2f0570 = [];
  function _0x203117(_0x3784d1, _0x5f1b31, _0x403d1c) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform1iv(_0x3fcb4a(_0x3784d1), _0x49ddaa, _0x403d1c >> 2, _0x5f1b31);
      return;
    }
    if (_0x5f1b31 <= 288) {
      var _0x1012d8 = _0x2f0570[_0x5f1b31 - 1];
      for (var _0x13b8c0 = 0; _0x13b8c0 < _0x5f1b31; ++_0x13b8c0) {
        _0x1012d8[_0x13b8c0] = _0x49ddaa[_0x403d1c + _0x13b8c0 * 4 >> 2];
      }
    } else {
      var _0x1012d8 = _0x49ddaa.subarray(_0x403d1c >> 2, _0x403d1c + _0x5f1b31 * 4 >> 2);
    }
    _0x134071.uniform1iv(_0x3fcb4a(_0x3784d1), _0x1012d8);
  }
  function _0x58c331(_0x339ff9, _0x5a6e14, _0x78779e) {
    _0x134071.uniform1uiv(_0x3fcb4a(_0x339ff9), _0x2fe6c1, _0x78779e >> 2, _0x5a6e14);
  }
  function _0x3ec18e(_0x1ddff4, _0x3b4bc9, _0xe34306) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform2fv(_0x3fcb4a(_0x1ddff4), _0x72ca9a, _0xe34306 >> 2, _0x3b4bc9 * 2);
      return;
    }
    if (_0x3b4bc9 <= 144) {
      var _0x3c9086 = _0x2d0ed9[_0x3b4bc9 * 2 - 1];
      for (var _0x27c37d = 0; _0x27c37d < _0x3b4bc9 * 2; _0x27c37d += 2) {
        _0x3c9086[_0x27c37d] = _0x72ca9a[_0xe34306 + _0x27c37d * 4 >> 2];
        _0x3c9086[_0x27c37d + 1] = _0x72ca9a[_0xe34306 + (_0x27c37d * 4 + 4) >> 2];
      }
    } else {
      var _0x3c9086 = _0x72ca9a.subarray(_0xe34306 >> 2, _0xe34306 + _0x3b4bc9 * 8 >> 2);
    }
    _0x134071.uniform2fv(_0x3fcb4a(_0x1ddff4), _0x3c9086);
  }
  function _0x3885d2(_0x690c50, _0x36b5ff, _0x146633) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform2iv(_0x3fcb4a(_0x690c50), _0x49ddaa, _0x146633 >> 2, _0x36b5ff * 2);
      return;
    }
    if (_0x36b5ff <= 144) {
      var _0x41db5c = _0x2f0570[_0x36b5ff * 2 - 1];
      for (var _0x40e1a6 = 0; _0x40e1a6 < _0x36b5ff * 2; _0x40e1a6 += 2) {
        _0x41db5c[_0x40e1a6] = _0x49ddaa[_0x146633 + _0x40e1a6 * 4 >> 2];
        _0x41db5c[_0x40e1a6 + 1] = _0x49ddaa[_0x146633 + (_0x40e1a6 * 4 + 4) >> 2];
      }
    } else {
      var _0x41db5c = _0x49ddaa.subarray(_0x146633 >> 2, _0x146633 + _0x36b5ff * 8 >> 2);
    }
    _0x134071.uniform2iv(_0x3fcb4a(_0x690c50), _0x41db5c);
  }
  function _0x1ff66b(_0xa44715, _0x1a57db, _0x5208a6) {
    _0x134071.uniform2uiv(_0x3fcb4a(_0xa44715), _0x2fe6c1, _0x5208a6 >> 2, _0x1a57db * 2);
  }
  function _0x1216af(_0x136cf3, _0x2df3d9, _0x501edd) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform3fv(_0x3fcb4a(_0x136cf3), _0x72ca9a, _0x501edd >> 2, _0x2df3d9 * 3);
      return;
    }
    if (_0x2df3d9 <= 96) {
      var _0x5330bf = _0x2d0ed9[_0x2df3d9 * 3 - 1];
      for (var _0x9740dc = 0; _0x9740dc < _0x2df3d9 * 3; _0x9740dc += 3) {
        _0x5330bf[_0x9740dc] = _0x72ca9a[_0x501edd + _0x9740dc * 4 >> 2];
        _0x5330bf[_0x9740dc + 1] = _0x72ca9a[_0x501edd + (_0x9740dc * 4 + 4) >> 2];
        _0x5330bf[_0x9740dc + 2] = _0x72ca9a[_0x501edd + (_0x9740dc * 4 + 8) >> 2];
      }
    } else {
      var _0x5330bf = _0x72ca9a.subarray(_0x501edd >> 2, _0x501edd + _0x2df3d9 * 12 >> 2);
    }
    _0x134071.uniform3fv(_0x3fcb4a(_0x136cf3), _0x5330bf);
  }
  function _0x44576b(_0x35f72f, _0x5a8689, _0x502a86) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform3iv(_0x3fcb4a(_0x35f72f), _0x49ddaa, _0x502a86 >> 2, _0x5a8689 * 3);
      return;
    }
    if (_0x5a8689 <= 96) {
      var _0x147d58 = _0x2f0570[_0x5a8689 * 3 - 1];
      for (var _0x143428 = 0; _0x143428 < _0x5a8689 * 3; _0x143428 += 3) {
        _0x147d58[_0x143428] = _0x49ddaa[_0x502a86 + _0x143428 * 4 >> 2];
        _0x147d58[_0x143428 + 1] = _0x49ddaa[_0x502a86 + (_0x143428 * 4 + 4) >> 2];
        _0x147d58[_0x143428 + 2] = _0x49ddaa[_0x502a86 + (_0x143428 * 4 + 8) >> 2];
      }
    } else {
      var _0x147d58 = _0x49ddaa.subarray(_0x502a86 >> 2, _0x502a86 + _0x5a8689 * 12 >> 2);
    }
    _0x134071.uniform3iv(_0x3fcb4a(_0x35f72f), _0x147d58);
  }
  function _0x4bf789(_0x5236f8, _0x31a641, _0x17c5bc) {
    _0x134071.uniform3uiv(_0x3fcb4a(_0x5236f8), _0x2fe6c1, _0x17c5bc >> 2, _0x31a641 * 3);
  }
  function _0x48474e(_0x2b119e, _0x499f4d, _0x40589e) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform4fv(_0x3fcb4a(_0x2b119e), _0x72ca9a, _0x40589e >> 2, _0x499f4d * 4);
      return;
    }
    if (_0x499f4d <= 72) {
      var _0x442f44 = _0x2d0ed9[_0x499f4d * 4 - 1];
      var _0x15fc7f = _0x72ca9a;
      _0x40589e >>= 2;
      for (var _0x910b4a = 0; _0x910b4a < _0x499f4d * 4; _0x910b4a += 4) {
        var _0x43caca = _0x40589e + _0x910b4a;
        _0x442f44[_0x910b4a] = _0x15fc7f[_0x43caca];
        _0x442f44[_0x910b4a + 1] = _0x15fc7f[_0x43caca + 1];
        _0x442f44[_0x910b4a + 2] = _0x15fc7f[_0x43caca + 2];
        _0x442f44[_0x910b4a + 3] = _0x15fc7f[_0x43caca + 3];
      }
    } else {
      var _0x442f44 = _0x72ca9a.subarray(_0x40589e >> 2, _0x40589e + _0x499f4d * 16 >> 2);
    }
    _0x134071.uniform4fv(_0x3fcb4a(_0x2b119e), _0x442f44);
  }
  function _0x44b3ff(_0x33f12d, _0x8d1f2a, _0x1c14d9) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniform4iv(_0x3fcb4a(_0x33f12d), _0x49ddaa, _0x1c14d9 >> 2, _0x8d1f2a * 4);
      return;
    }
    if (_0x8d1f2a <= 72) {
      var _0x287c75 = _0x2f0570[_0x8d1f2a * 4 - 1];
      for (var _0x18c789 = 0; _0x18c789 < _0x8d1f2a * 4; _0x18c789 += 4) {
        _0x287c75[_0x18c789] = _0x49ddaa[_0x1c14d9 + _0x18c789 * 4 >> 2];
        _0x287c75[_0x18c789 + 1] = _0x49ddaa[_0x1c14d9 + (_0x18c789 * 4 + 4) >> 2];
        _0x287c75[_0x18c789 + 2] = _0x49ddaa[_0x1c14d9 + (_0x18c789 * 4 + 8) >> 2];
        _0x287c75[_0x18c789 + 3] = _0x49ddaa[_0x1c14d9 + (_0x18c789 * 4 + 12) >> 2];
      }
    } else {
      var _0x287c75 = _0x49ddaa.subarray(_0x1c14d9 >> 2, _0x1c14d9 + _0x8d1f2a * 16 >> 2);
    }
    _0x134071.uniform4iv(_0x3fcb4a(_0x33f12d), _0x287c75);
  }
  function _0x594005(_0x52eb5d, _0x17e2a7, _0x4ef6f8) {
    _0x134071.uniform4uiv(_0x3fcb4a(_0x52eb5d), _0x2fe6c1, _0x4ef6f8 >> 2, _0x17e2a7 * 4);
  }
  function _0x438dfc(_0x5a5585, _0x280b33, _0x35925c) {
    _0x5a5585 = _0x13a76e.programs[_0x5a5585];
    _0x134071.uniformBlockBinding(_0x5a5585, _0x280b33, _0x35925c);
  }
  function _0x4531dc(_0x2dacb0, _0x256db3, _0x3964a5, _0x137903) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniformMatrix3fv(_0x3fcb4a(_0x2dacb0), !!_0x3964a5, _0x72ca9a, _0x137903 >> 2, _0x256db3 * 9);
      return;
    }
    if (_0x256db3 <= 32) {
      var _0x231c5a = _0x2d0ed9[_0x256db3 * 9 - 1];
      for (var _0x59d9c6 = 0; _0x59d9c6 < _0x256db3 * 9; _0x59d9c6 += 9) {
        _0x231c5a[_0x59d9c6] = _0x72ca9a[_0x137903 + _0x59d9c6 * 4 >> 2];
        _0x231c5a[_0x59d9c6 + 1] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 4) >> 2];
        _0x231c5a[_0x59d9c6 + 2] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 8) >> 2];
        _0x231c5a[_0x59d9c6 + 3] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 12) >> 2];
        _0x231c5a[_0x59d9c6 + 4] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 16) >> 2];
        _0x231c5a[_0x59d9c6 + 5] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 20) >> 2];
        _0x231c5a[_0x59d9c6 + 6] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 24) >> 2];
        _0x231c5a[_0x59d9c6 + 7] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 28) >> 2];
        _0x231c5a[_0x59d9c6 + 8] = _0x72ca9a[_0x137903 + (_0x59d9c6 * 4 + 32) >> 2];
      }
    } else {
      var _0x231c5a = _0x72ca9a.subarray(_0x137903 >> 2, _0x137903 + _0x256db3 * 36 >> 2);
    }
    _0x134071.uniformMatrix3fv(_0x3fcb4a(_0x2dacb0), !!_0x3964a5, _0x231c5a);
  }
  function _0x319830(_0x3326fc, _0x19d3bc, _0x26a8b5, _0x3c627e) {
    if (_0x13a76e.currentContext.version >= 2) {
      _0x134071.uniformMatrix4fv(_0x3fcb4a(_0x3326fc), !!_0x26a8b5, _0x72ca9a, _0x3c627e >> 2, _0x19d3bc * 16);
      return;
    }
    if (_0x19d3bc <= 18) {
      var _0xacdc3 = _0x2d0ed9[_0x19d3bc * 16 - 1];
      var _0x58747c = _0x72ca9a;
      _0x3c627e >>= 2;
      for (var _0x235410 = 0; _0x235410 < _0x19d3bc * 16; _0x235410 += 16) {
        var _0x107d82 = _0x3c627e + _0x235410;
        _0xacdc3[_0x235410] = _0x58747c[_0x107d82];
        _0xacdc3[_0x235410 + 1] = _0x58747c[_0x107d82 + 1];
        _0xacdc3[_0x235410 + 2] = _0x58747c[_0x107d82 + 2];
        _0xacdc3[_0x235410 + 3] = _0x58747c[_0x107d82 + 3];
        _0xacdc3[_0x235410 + 4] = _0x58747c[_0x107d82 + 4];
        _0xacdc3[_0x235410 + 5] = _0x58747c[_0x107d82 + 5];
        _0xacdc3[_0x235410 + 6] = _0x58747c[_0x107d82 + 6];
        _0xacdc3[_0x235410 + 7] = _0x58747c[_0x107d82 + 7];
        _0xacdc3[_0x235410 + 8] = _0x58747c[_0x107d82 + 8];
        _0xacdc3[_0x235410 + 9] = _0x58747c[_0x107d82 + 9];
        _0xacdc3[_0x235410 + 10] = _0x58747c[_0x107d82 + 10];
        _0xacdc3[_0x235410 + 11] = _0x58747c[_0x107d82 + 11];
        _0xacdc3[_0x235410 + 12] = _0x58747c[_0x107d82 + 12];
        _0xacdc3[_0x235410 + 13] = _0x58747c[_0x107d82 + 13];
        _0xacdc3[_0x235410 + 14] = _0x58747c[_0x107d82 + 14];
        _0xacdc3[_0x235410 + 15] = _0x58747c[_0x107d82 + 15];
      }
    } else {
      var _0xacdc3 = _0x72ca9a.subarray(_0x3c627e >> 2, _0x3c627e + _0x19d3bc * 64 >> 2);
    }
    _0x134071.uniformMatrix4fv(_0x3fcb4a(_0x3326fc), !!_0x26a8b5, _0xacdc3);
  }
  function _0x37936b(_0x5ce05b) {
    if (!_0x231ced(_0x5ce05b)) {
      _0x13a76e.recordError(1280);
      _0xf7c01a("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x528ab0 = _0x4ce36e(_0x5ce05b);
    var _0x41196a = _0x13a76e.mappedBuffers[_0x528ab0];
    if (!_0x41196a) {
      _0x13a76e.recordError(1282);
      _0xf7c01a("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x13a76e.mappedBuffers[_0x528ab0] = null;
    if (!(_0x41196a.access & 16)) {
      if (_0x13a76e.currentContext.version >= 2) {
        _0x134071.bufferSubData(_0x5ce05b, _0x41196a.offset, _0x1c9190, _0x41196a.mem, _0x41196a.length);
      } else {
        _0x134071.bufferSubData(_0x5ce05b, _0x41196a.offset, _0x1c9190.subarray(_0x41196a.mem, _0x41196a.mem + _0x41196a.length));
      }
    }
    _0x3d1553(_0x41196a.mem);
    return 1;
  }
  function _0x4f41cd() {
    var _0x1e18f5 = _0x134071.currentProgram;
    if (!_0x1e18f5.explicitProgramBindingsApplied) {
      if (_0x13a76e.currentContext.version >= 2) {
        Object.keys(_0x1e18f5.explicitUniformBindings).forEach(function (_0x376fe7) {
          var _0x56afd9 = _0x1e18f5.explicitUniformBindings[_0x376fe7];
          for (var _0x3adb7f = 0; _0x3adb7f < _0x56afd9[1]; ++_0x3adb7f) {
            var _0x54f70b = _0x134071.getUniformBlockIndex(_0x1e18f5, _0x376fe7 + (_0x56afd9[1] > 1 ? "[" + _0x3adb7f + "]" : ""));
            _0x134071.uniformBlockBinding(_0x1e18f5, _0x54f70b, _0x56afd9[0] + _0x3adb7f);
          }
        });
      }
      Object.keys(_0x1e18f5.explicitSamplerBindings).forEach(function (_0x37cb8a) {
        var _0xc6d888 = _0x1e18f5.explicitSamplerBindings[_0x37cb8a];
        for (var _0x4f3b29 = 0; _0x4f3b29 < _0xc6d888[1]; ++_0x4f3b29) {
          _0x134071.uniform1i(_0x134071.getUniformLocation(_0x1e18f5, _0x37cb8a + (_0x4f3b29 ? "[" + _0x4f3b29 + "]" : "")), _0xc6d888[0] + _0x4f3b29);
        }
      });
      _0x1e18f5.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x31239f(_0x49a13e) {
    _0x49a13e = _0x13a76e.programs[_0x49a13e];
    _0x134071.useProgram(_0x49a13e);
    if (_0x134071.currentProgram = _0x49a13e) {
      _0x4f41cd();
    }
  }
  function _0x131ecf(_0x2766cd) {
    _0x134071.validateProgram(_0x13a76e.programs[_0x2766cd]);
  }
  function _0x34dd83(_0xcc5250, _0x3bdc31, _0x5c561a, _0x25dba6, _0x1c1b26) {
    _0x134071.vertexAttrib4f(_0xcc5250, _0x3bdc31, _0x5c561a, _0x25dba6, _0x1c1b26);
  }
  function _0x2c9842(_0x1915c3, _0x93a723) {
    _0x134071.vertexAttrib4f(_0x1915c3, _0x72ca9a[_0x93a723 >> 2], _0x72ca9a[_0x93a723 + 4 >> 2], _0x72ca9a[_0x93a723 + 8 >> 2], _0x72ca9a[_0x93a723 + 12 >> 2]);
  }
  function _0x3f5599(_0x20bf55, _0x4835f6, _0x5c87aa, _0xf78df8, _0xc734a1) {
    var _0x30b40d = _0x13a76e.currentContext.clientBuffers[_0x20bf55];
    if (!_0x134071.currentArrayBufferBinding) {
      _0x30b40d.size = _0x4835f6;
      _0x30b40d.type = _0x5c87aa;
      _0x30b40d.normalized = false;
      _0x30b40d.stride = _0xf78df8;
      _0x30b40d.ptr = _0xc734a1;
      _0x30b40d.clientside = true;
      _0x30b40d.vertexAttribPointerAdaptor = function (_0x507ef0, _0x5ccc06, _0x5da8ae, _0x372013, _0x573606, _0x5ba7d8) {
        this.vertexAttribIPointer(_0x507ef0, _0x5ccc06, _0x5da8ae, _0x573606, _0x5ba7d8);
      };
      return;
    }
    _0x30b40d.clientside = false;
    _0x134071.vertexAttribIPointer(_0x20bf55, _0x4835f6, _0x5c87aa, _0xf78df8, _0xc734a1);
  }
  function _0x40d69d(_0x310ff, _0x1e891e, _0x4b1680, _0x54b033, _0x340106, _0x4e4935) {
    var _0x2db3e1 = _0x13a76e.currentContext.clientBuffers[_0x310ff];
    if (!_0x134071.currentArrayBufferBinding) {
      _0x2db3e1.size = _0x1e891e;
      _0x2db3e1.type = _0x4b1680;
      _0x2db3e1.normalized = _0x54b033;
      _0x2db3e1.stride = _0x340106;
      _0x2db3e1.ptr = _0x4e4935;
      _0x2db3e1.clientside = true;
      _0x2db3e1.vertexAttribPointerAdaptor = function (_0x4fcbf1, _0x415f27, _0x76e0b6, _0x249813, _0x18e972, _0x4e9c9f) {
        this.vertexAttribPointer(_0x4fcbf1, _0x415f27, _0x76e0b6, _0x249813, _0x18e972, _0x4e9c9f);
      };
      return;
    }
    _0x2db3e1.clientside = false;
    _0x134071.vertexAttribPointer(_0x310ff, _0x1e891e, _0x4b1680, !!_0x54b033, _0x340106, _0x4e4935);
  }
  function _0x1e8c10(_0x3ad0af, _0x2e8d5d, _0x4afbe5, _0x135f27) {
    _0x134071.viewport(_0x3ad0af, _0x2e8d5d, _0x4afbe5, _0x135f27);
  }
  function _0x43c47c(_0x4c8b35) {
    return _0x4c8b35;
  }
  function _0x314953(_0x452510) {
    _0x432863();
    var _0x4ade3f = new Date(_0x49ddaa[_0x452510 + 20 >> 2] + 1900, _0x49ddaa[_0x452510 + 16 >> 2], _0x49ddaa[_0x452510 + 12 >> 2], _0x49ddaa[_0x452510 + 8 >> 2], _0x49ddaa[_0x452510 + 4 >> 2], _0x49ddaa[_0x452510 >> 2], 0);
    var _0x5daafe = _0x49ddaa[_0x452510 + 32 >> 2];
    var _0x69b83e = _0x4ade3f.getTimezoneOffset();
    var _0x4468eb = new Date(_0x4ade3f.getFullYear(), 0, 1);
    var _0x1dfc2a = new Date(_0x4ade3f.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x5b2fa0 = _0x4468eb.getTimezoneOffset();
    var _0xa961ca = Math.min(_0x5b2fa0, _0x1dfc2a);
    if (_0x5daafe < 0) {
      _0x49ddaa[_0x452510 + 32 >> 2] = Number(_0x1dfc2a != _0x5b2fa0 && _0xa961ca == _0x69b83e);
    } else if (_0x5daafe > 0 != (_0xa961ca == _0x69b83e)) {
      var _0x39a9f0 = Math.max(_0x5b2fa0, _0x1dfc2a);
      var _0x508492 = _0x5daafe > 0 ? _0xa961ca : _0x39a9f0;
      _0x4ade3f.setTime(_0x4ade3f.getTime() + (_0x508492 - _0x69b83e) * 60000);
    }
    _0x49ddaa[_0x452510 + 24 >> 2] = _0x4ade3f.getDay();
    var _0x107451 = (_0x4ade3f.getTime() - _0x4468eb.getTime()) / 86400000 | 0;
    _0x49ddaa[_0x452510 + 28 >> 2] = _0x107451;
    _0x49ddaa[_0x452510 >> 2] = _0x4ade3f.getSeconds();
    _0x49ddaa[_0x452510 + 4 >> 2] = _0x4ade3f.getMinutes();
    _0x49ddaa[_0x452510 + 8 >> 2] = _0x4ade3f.getHours();
    _0x49ddaa[_0x452510 + 12 >> 2] = _0x4ade3f.getDate();
    _0x49ddaa[_0x452510 + 16 >> 2] = _0x4ade3f.getMonth();
    return _0x4ade3f.getTime() / 1000 | 0;
  }
  function _0x441b5c(_0x4eabca) {
    _0x395517(_0x4eabca);
  }
  function _0x22f1e9(_0x4b9b02, _0x3fdd87, _0x2b97db) {
    return 0;
  }
  function _0x4aecee(_0x435ecd) {
    _0x49ddaa[_0x435ecd >> 2] = 0;
    return 0;
  }
  function _0x184a71(_0x5da9d5) {
    return _0x5da9d5 % 4 === 0 && (_0x5da9d5 % 100 !== 0 || _0x5da9d5 % 400 === 0);
  }
  function _0x17a771(_0x395624, _0x341618) {
    var _0xe23fec = 0;
    for (var _0x28034c = 0; _0x28034c <= _0x341618; _0xe23fec += _0x395624[_0x28034c++]) {}
    return _0xe23fec;
  }
  var _0x4e4b94 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x3819dd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0xc698a2(_0x57d73a, _0x4bfaca) {
    var _0x58526b = new Date(_0x57d73a.getTime());
    while (_0x4bfaca > 0) {
      var _0x216012 = _0x184a71(_0x58526b.getFullYear());
      var _0x42e8f5 = _0x58526b.getMonth();
      var _0x4bd045 = (_0x216012 ? _0x4e4b94 : _0x3819dd)[_0x42e8f5];
      if (_0x4bfaca > _0x4bd045 - _0x58526b.getDate()) {
        _0x4bfaca -= _0x4bd045 - _0x58526b.getDate() + 1;
        _0x58526b.setDate(1);
        if (_0x42e8f5 < 11) {
          _0x58526b.setMonth(_0x42e8f5 + 1);
        } else {
          _0x58526b.setMonth(0);
          _0x58526b.setFullYear(_0x58526b.getFullYear() + 1);
        }
      } else {
        _0x58526b.setDate(_0x58526b.getDate() + _0x4bfaca);
        return _0x58526b;
      }
    }
    return _0x58526b;
  }
  function _0x3db1d7(_0x23423b, _0x482214, _0x55e14a, _0x589629) {
    var _0x2049e9 = _0x49ddaa[_0x589629 + 40 >> 2];
    var _0x5612a7 = {
      tm_sec: _0x49ddaa[_0x589629 >> 2],
      tm_min: _0x49ddaa[_0x589629 + 4 >> 2],
      tm_hour: _0x49ddaa[_0x589629 + 8 >> 2],
      tm_mday: _0x49ddaa[_0x589629 + 12 >> 2],
      tm_mon: _0x49ddaa[_0x589629 + 16 >> 2],
      tm_year: _0x49ddaa[_0x589629 + 20 >> 2],
      tm_wday: _0x49ddaa[_0x589629 + 24 >> 2],
      tm_yday: _0x49ddaa[_0x589629 + 28 >> 2],
      tm_isdst: _0x49ddaa[_0x589629 + 32 >> 2],
      tm_gmtoff: _0x49ddaa[_0x589629 + 36 >> 2],
      tm_zone: _0x2049e9 ? _0x5d80c0(_0x2049e9) : ""
    };
    var _0x246a5e = _0x5d80c0(_0x55e14a);
    var _0x68e84e = {
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
    for (var _0x403439 in _0x68e84e) {
      _0x246a5e = _0x246a5e.replace(new RegExp(_0x403439, "g"), _0x68e84e[_0x403439]);
    }
    var _0x49262e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x4691ff = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x3d3330(_0x2bd05e, _0x5dec9e, _0x127c47) {
      var _0xd7483f = typeof _0x2bd05e === "number" ? _0x2bd05e.toString() : _0x2bd05e || "";
      while (_0xd7483f.length < _0x5dec9e) {
        _0xd7483f = _0x127c47[0] + _0xd7483f;
      }
      return _0xd7483f;
    }
    function _0x47e0c2(_0x46fa0a, _0xd23fb0) {
      return _0x3d3330(_0x46fa0a, _0xd23fb0, "0");
    }
    function _0x1764a6(_0xae2017, _0x2514d3) {
      function _0x2375ae(_0x5b000d) {
        if (_0x5b000d < 0) {
          return -1;
        } else if (_0x5b000d > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x352a0c;
      if ((_0x352a0c = _0x2375ae(_0xae2017.getFullYear() - _0x2514d3.getFullYear())) === 0) {
        if ((_0x352a0c = _0x2375ae(_0xae2017.getMonth() - _0x2514d3.getMonth())) === 0) {
          _0x352a0c = _0x2375ae(_0xae2017.getDate() - _0x2514d3.getDate());
        }
      }
      return _0x352a0c;
    }
    function _0xbc3e66(_0x5a5e56) {
      switch (_0x5a5e56.getDay()) {
        case 0:
          return new Date(_0x5a5e56.getFullYear() - 1, 11, 29);
        case 1:
          return _0x5a5e56;
        case 2:
          return new Date(_0x5a5e56.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x5a5e56.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x5a5e56.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x5a5e56.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x5a5e56.getFullYear() - 1, 11, 30);
      }
    }
    function _0x488526(_0xe7cee7) {
      var _0x262c6a = _0xc698a2(new Date(_0xe7cee7.tm_year + 1900, 0, 1), _0xe7cee7.tm_yday);
      var _0x86137b = new Date(_0x262c6a.getFullYear(), 0, 4);
      var _0x2255aa = new Date(_0x262c6a.getFullYear() + 1, 0, 4);
      var _0xe52cf4 = _0xbc3e66(_0x86137b);
      var _0x1f0525 = _0xbc3e66(_0x2255aa);
      if (_0x1764a6(_0xe52cf4, _0x262c6a) <= 0) {
        if (_0x1764a6(_0x1f0525, _0x262c6a) <= 0) {
          return _0x262c6a.getFullYear() + 1;
        } else {
          return _0x262c6a.getFullYear();
        }
      } else {
        return _0x262c6a.getFullYear() - 1;
      }
    }
    var _0x251ae4 = {
      "%a": function (_0x2307aa) {
        return _0x49262e[_0x2307aa.tm_wday].substring(0, 3);
      },
      "%A": function (_0x1a7118) {
        return _0x49262e[_0x1a7118.tm_wday];
      },
      "%b": function (_0x3054aa) {
        return _0x4691ff[_0x3054aa.tm_mon].substring(0, 3);
      },
      "%B": function (_0xccba1b) {
        return _0x4691ff[_0xccba1b.tm_mon];
      },
      "%C": function (_0x533f1a) {
        var _0x23f685 = _0x533f1a.tm_year + 1900;
        return _0x47e0c2(_0x23f685 / 100 | 0, 2);
      },
      "%d": function (_0x5c436b) {
        return _0x47e0c2(_0x5c436b.tm_mday, 2);
      },
      "%e": function (_0x492d94) {
        return _0x3d3330(_0x492d94.tm_mday, 2, " ");
      },
      "%g": function (_0x46b8d2) {
        return _0x488526(_0x46b8d2).toString().substring(2);
      },
      "%G": function (_0x343c4c) {
        return _0x488526(_0x343c4c);
      },
      "%H": function (_0x377b86) {
        return _0x47e0c2(_0x377b86.tm_hour, 2);
      },
      "%I": function (_0x4391fa) {
        var _0x1d9993 = _0x4391fa.tm_hour;
        if (_0x1d9993 == 0) {
          _0x1d9993 = 12;
        } else if (_0x1d9993 > 12) {
          _0x1d9993 -= 12;
        }
        return _0x47e0c2(_0x1d9993, 2);
      },
      "%j": function (_0x2890f1) {
        return _0x47e0c2(_0x2890f1.tm_mday + _0x17a771(_0x184a71(_0x2890f1.tm_year + 1900) ? _0x4e4b94 : _0x3819dd, _0x2890f1.tm_mon - 1), 3);
      },
      "%m": function (_0x57535d) {
        return _0x47e0c2(_0x57535d.tm_mon + 1, 2);
      },
      "%M": function (_0x400709) {
        return _0x47e0c2(_0x400709.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x16fbec) {
        if (_0x16fbec.tm_hour >= 0 && _0x16fbec.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x23dec0) {
        return _0x47e0c2(_0x23dec0.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x4f94c1) {
        return _0x4f94c1.tm_wday || 7;
      },
      "%U": function (_0xf0617b) {
        var _0x338649 = new Date(_0xf0617b.tm_year + 1900, 0, 1);
        var _0xd295fe = _0x338649.getDay() === 0 ? _0x338649 : _0xc698a2(_0x338649, 7 - _0x338649.getDay());
        var _0x32934b = new Date(_0xf0617b.tm_year + 1900, _0xf0617b.tm_mon, _0xf0617b.tm_mday);
        if (_0x1764a6(_0xd295fe, _0x32934b) < 0) {
          var _0x58a3f4 = _0x17a771(_0x184a71(_0x32934b.getFullYear()) ? _0x4e4b94 : _0x3819dd, _0x32934b.getMonth() - 1) - 31;
          var _0x4e5c78 = 31 - _0xd295fe.getDate();
          var _0x51e84b = _0x4e5c78 + _0x58a3f4 + _0x32934b.getDate();
          return _0x47e0c2(Math.ceil(_0x51e84b / 7), 2);
        }
        if (_0x1764a6(_0xd295fe, _0x338649) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x14ce46) {
        var _0x4c707c = new Date(_0x14ce46.tm_year + 1900, 0, 4);
        var _0x3cf0ea = new Date(_0x14ce46.tm_year + 1901, 0, 4);
        var _0x42dc44 = _0xbc3e66(_0x4c707c);
        var _0x364509 = _0xbc3e66(_0x3cf0ea);
        var _0x4c6057 = _0xc698a2(new Date(_0x14ce46.tm_year + 1900, 0, 1), _0x14ce46.tm_yday);
        if (_0x1764a6(_0x4c6057, _0x42dc44) < 0) {
          return "53";
        }
        if (_0x1764a6(_0x364509, _0x4c6057) <= 0) {
          return "01";
        }
        var _0x3cdef2;
        if (_0x42dc44.getFullYear() < _0x14ce46.tm_year + 1900) {
          _0x3cdef2 = _0x14ce46.tm_yday + 32 - _0x42dc44.getDate();
        } else {
          _0x3cdef2 = _0x14ce46.tm_yday + 1 - _0x42dc44.getDate();
        }
        return _0x47e0c2(Math.ceil(_0x3cdef2 / 7), 2);
      },
      "%w": function (_0x10873e) {
        return _0x10873e.tm_wday;
      },
      "%W": function (_0x4c591b) {
        var _0x2455d8 = new Date(_0x4c591b.tm_year, 0, 1);
        var _0x503baf = _0x2455d8.getDay() === 1 ? _0x2455d8 : _0xc698a2(_0x2455d8, _0x2455d8.getDay() === 0 ? 1 : 7 - _0x2455d8.getDay() + 1);
        var _0x1418bb = new Date(_0x4c591b.tm_year + 1900, _0x4c591b.tm_mon, _0x4c591b.tm_mday);
        if (_0x1764a6(_0x503baf, _0x1418bb) < 0) {
          var _0xc528d2 = _0x17a771(_0x184a71(_0x1418bb.getFullYear()) ? _0x4e4b94 : _0x3819dd, _0x1418bb.getMonth() - 1) - 31;
          var _0x4d0c53 = 31 - _0x503baf.getDate();
          var _0x1822cb = _0x4d0c53 + _0xc528d2 + _0x1418bb.getDate();
          return _0x47e0c2(Math.ceil(_0x1822cb / 7), 2);
        }
        if (_0x1764a6(_0x503baf, _0x2455d8) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x11e56a) {
        return (_0x11e56a.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x1c5641) {
        return _0x1c5641.tm_year + 1900;
      },
      "%z": function (_0x3616fb) {
        var _0x35bd60 = _0x3616fb.tm_gmtoff;
        var _0x573c93 = _0x35bd60 >= 0;
        _0x35bd60 = Math.abs(_0x35bd60) / 60;
        _0x35bd60 = _0x35bd60 / 60 * 100 + _0x35bd60 % 60;
        return (_0x573c93 ? "+" : "-") + String("0000" + _0x35bd60).slice(-4);
      },
      "%Z": function (_0x58081a) {
        return _0x58081a.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0x403439 in _0x251ae4) {
      if (_0x246a5e.includes(_0x403439)) {
        _0x246a5e = _0x246a5e.replace(new RegExp(_0x403439, "g"), _0x251ae4[_0x403439](_0x5612a7));
      }
    }
    var _0x1c9364 = _0x3c7b26(_0x246a5e, false);
    if (_0x1c9364.length > _0x482214) {
      return 0;
    }
    _0x587bd3(_0x1c9364, _0x23423b);
    return _0x1c9364.length - 1;
  }
  function _0x59a71f(_0x1ebeb2) {
    var _0x22a45d = Date.now() / 1000 | 0;
    if (_0x1ebeb2) {
      _0x49ddaa[_0x1ebeb2 >> 2] = _0x22a45d;
    }
    return _0x22a45d;
  }
  function _0x1f390e(_0x4f523c, _0x19a49a) {
    _0x4f523c = _0x5d80c0(_0x4f523c);
    try {
      _0x379d8a.utime(_0x4f523c, _0x19a49a, _0x19a49a);
      return 0;
    } catch (_0x1b77b2) {
      if (!(_0x1b77b2 instanceof _0x379d8a.ErrnoError)) {
        throw _0x1b77b2 + " : " + _0xd75f1d();
      }
      _0x25893a(_0x1b77b2.errno);
      return -1;
    }
  }
  function _0x17dd9a(_0x32ec6b, _0x2b79a3) {
    var _0x19fe1d;
    if (_0x2b79a3) {
      _0x19fe1d = _0x49ddaa[_0x2b79a3 + 4 >> 2] * 1000;
    } else {
      _0x19fe1d = Date.now();
    }
    return _0x1f390e(_0x32ec6b, _0x19fe1d);
  }
  var _0x508d91 = function (_0x3a7aa2, _0x150607, _0x5446f0, _0x1974e2) {
    if (!_0x3a7aa2) {
      _0x3a7aa2 = this;
    }
    this.parent = _0x3a7aa2;
    this.mount = _0x3a7aa2.mount;
    this.mounted = null;
    this.id = _0x379d8a.nextInode++;
    this.name = _0x150607;
    this.mode = _0x5446f0;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x1974e2;
  };
  var _0x48354d = 365;
  var _0x47e6e = 146;
  Object.defineProperties(_0x508d91.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x48354d) === _0x48354d;
      },
      set: function (_0x3a6a2b) {
        if (_0x3a6a2b) {
          this.mode |= _0x48354d;
        } else {
          this.mode &= ~_0x48354d;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x47e6e) === _0x47e6e;
      },
      set: function (_0x37d80b) {
        if (_0x37d80b) {
          this.mode |= _0x47e6e;
        } else {
          this.mode &= ~_0x47e6e;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x379d8a.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x379d8a.isChrdev(this.mode);
      }
    }
  });
  _0x379d8a.FSNode = _0x508d91;
  _0x379d8a.staticInit();
  _0xad46db.FS_createPath = _0x379d8a.createPath;
  _0xad46db.FS_createDataFile = _0x379d8a.createDataFile;
  _0xad46db.requestFullscreen = function _0x1d7b0d(_0x4e6efd, _0x2cdd0b) {
    _0x5a6ed0.requestFullscreen(_0x4e6efd, _0x2cdd0b);
  };
  _0xad46db.requestAnimationFrame = function _0x2c9f87(_0x3d5e47) {
    _0x5a6ed0.requestAnimationFrame(_0x3d5e47);
  };
  _0xad46db.setCanvasSize = function _0x420316(_0x226885, _0x1518e0, _0x1532d0) {
    _0x5a6ed0.setCanvasSize(_0x226885, _0x1518e0, _0x1532d0);
  };
  _0xad46db.pauseMainLoop = function _0x38a976() {
    _0x5a6ed0.mainLoop.pause();
  };
  _0xad46db.resumeMainLoop = function _0x14e721() {
    _0x5a6ed0.mainLoop.resume();
  };
  _0xad46db.getUserMedia = function _0x3ad12() {
    _0x5a6ed0.getUserMedia();
  };
  _0xad46db.createContext = function _0x46252a(_0x271e05, _0x9b9b15, _0x3d5f07, _0x359f58) {
    return _0x5a6ed0.createContext(_0x271e05, _0x9b9b15, _0x3d5f07, _0x359f58);
  };
  var _0x134071;
  for (var _0x591669 = 0; _0x591669 < 32; ++_0x591669) {
    _0x2dff67.push(new Array(_0x591669));
  }
  var _0x87dd = new Float32Array(288);
  for (var _0x591669 = 0; _0x591669 < 288; ++_0x591669) {
    _0x2d0ed9[_0x591669] = _0x87dd.subarray(0, _0x591669 + 1);
  }
  var _0x556968 = new Int32Array(288);
  for (var _0x591669 = 0; _0x591669 < 288; ++_0x591669) {
    _0x2f0570[_0x591669] = _0x556968.subarray(0, _0x591669 + 1);
  }
  function _0x3c7b26(_0x252644, _0x5aa5d0, _0x1b2da0) {
    var _0x3c5fc5 = _0x1b2da0 > 0 ? _0x1b2da0 : _0x18f5b9(_0x252644) + 1;
    var _0x1af2ee = new Array(_0x3c5fc5);
    var _0x421f95 = _0x299e6c(_0x252644, _0x1af2ee, 0, _0x1af2ee.length);
    if (_0x5aa5d0) {
      _0x1af2ee.length = _0x421f95;
    }
    return _0x1af2ee;
  }
  var _0xa4cb41 = {
    Ik: _0x2f388c,
    Ek: _0x528214,
    qd: _0x3cfe57,
    nk: _0x4f8a60,
    _j: _0x49f172,
    dl: _0x1e1304,
    lk: _0x42ac24,
    kk: _0x3f290e,
    hk: _0x5c846e,
    jk: _0x49f30,
    ik: _0xdc579b,
    Gk: _0x2d1cca,
    Fk: _0x529527,
    Wk: _0x2d6691,
    od: _0x4ea22b,
    vk: _0x4e1f24,
    Rj: _0x4a23ce,
    Ic: _0x1d0424,
    Dj: _0x58f53e,
    md: _0xb67f14,
    Jj: _0xda18f6,
    dj: _0x4502fe,
    Rc: _0xf0b4d4,
    Tc: _0x2d5746,
    Sc: _0x5b8441,
    Kj: _0x185ced,
    dk: _0x3073c6,
    ck: _0x53c30e,
    xk: _0x2b5e6a,
    Lk: _0x37df69,
    Kk: _0x542055,
    pk: _0x56ef67,
    gk: _0x47633c,
    fk: _0x10cd87,
    qk: _0x5bdd35,
    _k: _0x585ac5,
    Sj: _0x49b8de,
    le: _0x51cbda,
    me: _0x1231b0,
    Xj: _0x5502c0,
    Wj: _0x1bc909,
    Vj: _0x34ee6c,
    rj: _0x2d7b60,
    qj: _0x2b362a,
    pj: _0x5ca12b,
    oj: _0x4b3e8b,
    ek: _0x39bfcf,
    $j: _0xb7cd90,
    Pj: _0x3d6aa0,
    Oj: _0x4531d3,
    Ck: _0x48ea1e,
    rk: _0x52b468,
    Ki: _0x4d83a9,
    Tj: _0x30a754,
    Cf: _0xa589a8,
    Mb: _0x2392ca,
    Lb: _0xe110cd,
    Hf: _0x4ac933,
    Ua: _0x510792,
    Ta: _0x458b11,
    hf: _0x589c4b,
    Jf: _0x45232c,
    kf: _0x562d9e,
    af: _0x590afa,
    la: _0x31effb,
    Af: _0xbc9af8,
    Ib: _0x40c4dc,
    Hb: _0x55bf6c,
    yf: _0x1ad6e9,
    zf: _0x57aeec,
    Gb: _0x311dad,
    Fb: _0x10e811,
    ud: _0x54e0d1,
    Bf: _0x273fc2,
    Kb: _0x4b74f0,
    Jb: _0x24582c,
    jf: _0x260bf0,
    lf: _0x54e434,
    Ef: _0x28fece,
    Ob: _0x4a9836,
    Nb: _0x261001,
    Pb: _0x5b853b,
    df: _0x35e92a,
    xf: _0x1e249c,
    Gf: _0x53e9b6,
    ha: _0x3b6edf,
    mg: _0x229f3c,
    ja: _0x5b1a97,
    gg: _0x5b5398,
    hg: _0x4d3545,
    fg: _0x1e8a10,
    cc: _0x49dadd,
    dc: _0x422a2a,
    Xa: _0x36f9ae,
    va: _0x46c052,
    Qb: _0x28f8c6,
    jg: _0x1c6db9,
    dg: _0x9c764,
    eg: _0x25e53a,
    fc: _0xdaf6f0,
    ec: _0xf4ed6f,
    ta: _0x263ba0,
    ia: _0x4bf349,
    lg: _0x25d652,
    kg: _0x4993b0,
    ua: _0x2696f4,
    na: _0x3ee588,
    bc: _0x1ac651,
    yb: _0x236d1b,
    Eb: _0x13e31c,
    zb: _0x20f82b,
    Ab: _0x16a050,
    Cb: _0x167266,
    nf: _0x43b27f,
    ac: _0x48be68,
    Kf: _0x3c9126,
    Bb: _0x30afbb,
    wf: _0x153fa4,
    xa: _0x3936f8,
    If: _0x30fe2c,
    gf: _0x45034c,
    _f: _0xe9e869,
    Xf: _0x2b8c32,
    Yf: _0x4e5f50,
    Zf: _0x1177a2,
    Wa: _0x15a666,
    Tf: _0x2bac5a,
    Vf: _0x2775ff,
    Uf: _0x1ee736,
    Wf: _0x26c9d7,
    Qj: _0x4b14c6,
    Tk: _0x441245,
    Rk: _0x3ebcd3,
    Pk: _0x5a7e24,
    zk: _0x905443,
    Bk: _0x5637a1,
    Vk: _0x16cded,
    tk: _0x22729d,
    sk: _0x20ae63,
    Li: _0x1f4920,
    Nk: _0x1c0af3,
    $k: _0x803640,
    Nj: _0x577812,
    Zk: _0x1c56f9,
    Yk: _0x2690f1,
    nj: _0x45620c,
    ob: _0x52e54e,
    Mj: _0x3cd5c9,
    ed: _0x29ab92,
    Lj: _0x19577d,
    Dk: _0x41f911,
    ok: _0x59110e,
    mk: _0x1a8be7,
    bk: _0x3c7acd,
    ij: _0x56d600,
    hj: _0x337a06,
    fj: _0x401ddf,
    gj: _0x38b47d,
    Jk: _0x5eb056,
    uk: _0x8bd201,
    Yj: _0x267e17,
    Zj: _0x223d06,
    ak: _0x1db528,
    ld: _0x344147,
    el: _0x2c1478,
    cl: _0x324152,
    al: _0xf21e2e,
    bl: _0x24d718,
    Sk: _0x112014,
    Qk: _0x900c4e,
    Ok: _0x848e0c,
    yk: _0x1a775c,
    Ak: _0x4fb9bd,
    Uk: _0x13f447,
    Uj: _0x5b1adc,
    Mk: _0x7dd9c5,
    Hk: _0x29af3d,
    Xk: _0x489990,
    wk: _0x8f1318,
    mj: _0x19afd5,
    $i: _0x259e58,
    Nc: _0x471260,
    _i: _0x50a41d,
    lb: _0x192b95,
    Mc: _0x51dd5d,
    Qc: _0x965bf2,
    Qi: _0x587223,
    Si: _0x4f01f1,
    aj: _0x352d5e,
    bj: _0x3901e,
    Xi: _0x44c8b8,
    Vi: _0x1740dd,
    Yi: _0x4b0e55,
    Ui: _0x52dea9,
    Wi: _0x47782a,
    Pc: _0x476914,
    jb: _0x47a969,
    kb: _0x34c57d,
    Ti: _0xbc5b21,
    Zi: _0xb1de29,
    Ri: _0x49a444,
    Mi: _0x3f90c9,
    Lc: _0x327885,
    Jc: _0x5e8ee3,
    Oi: _0xd1d451,
    Pi: _0x6edbc6,
    Ni: _0x3d453f,
    Kc: _0x3e9b48,
    mb: _0x45ecd2,
    Aj: _0x5f5448,
    bd: _0x5a4002,
    yj: _0x393298,
    cd: _0x5e09b7,
    vj: _0x49f872,
    xj: _0x40f276,
    wj: _0x36123b,
    zj: _0x4b420d,
    p: _0x1e2feb,
    i: _0x36504f,
    o: _0x3d2ca1,
    j: _0xa28d04,
    a: _0x406ef3,
    hl: _0x4ea96c,
    rb: _0x2af807,
    Ld: _0x5672a8,
    ga: _0x1539d3,
    xd: _0x5637df,
    yd: _0x5372ea,
    l: _0x1be206,
    Lf: _0x183dd2,
    Ag: _0xaf5ebc,
    Sf: _0xb896cd,
    nh: _0x342e6e,
    Id: _0x308a73,
    jh: _0x23817f,
    Od: _0x31ece3,
    T: _0x5136ed,
    qi: _0x3ef4c6,
    _h: _0x5aa82a,
    Fd: _0x2dd49b,
    Cd: _0x48b327,
    Uc: _0x2afe29,
    Vc: _0x262301,
    fe: _0x1adf9a,
    Ma: _0x56bf23,
    Bd: _0x318fb2,
    Pg: _0x60448a,
    mh: _0x534943,
    rg: _0x3edf18,
    _b: _0x518f3c,
    Gg: _0x6d5f92,
    Jd: _0x590d2d,
    Ed: _0x7b189a,
    ag: _0x2b37ce,
    We: _0xcc69e3,
    hb: _0x528f64,
    Kd: _0x48cbf9,
    _g: _0x51f05b,
    jj: _0x28bb78,
    ig: _0x4e11b7,
    Md: _0x24e56c,
    Gd: _0x2a8e25,
    Dd: _0x46e08e,
    Nd: _0x13eaf9,
    ng: _0x2f3f56,
    $f: _0x2d01b3,
    Wd: _0x30960d,
    wb: _0x980fb5,
    Dc: _0x437e96,
    og: _0x1f1e9c,
    pg: _0x4acd59,
    Ae: _0x2079c2,
    Hd: _0x534957,
    x: _0x3e54be,
    R: _0x1fdb6a,
    Ad: _0x417de1,
    tb: _0x5513eb,
    wd: _0x5401e6,
    vh: _0x268d11,
    Ba: _0x161def,
    Cc: _0x3c873c,
    Dh: _0x5339c8,
    Va: _0x99e2f1,
    ef: _0x1cd9f8,
    cf: _0x3a29a8,
    uf: _0x95efde,
    of: _0x35a263,
    mf: _0x44b56b,
    tf: _0x9ee08,
    Qa: _0x5e96d8,
    zd: _0x3c05f1,
    N: _0x5abed0,
    Ra: _0x1339b2,
    ff: _0x3fb1d1,
    Of: _0x314183,
    C: _0x447586,
    F: _0x32fe3d,
    il: _0x337ddd,
    vf: _0x1f913a,
    pf: _0x197551,
    jl: _0x938784,
    Sa: _0x23bccb,
    Db: _0x31b836,
    Oa: _0x1465de,
    rf: _0x2c92a9,
    sf: _0x18b77a,
    Sb: _0x106d2a,
    Rb: _0x8d8500,
    $e: _0x4fe6b0,
    qa: _0x288bb1,
    oa: _0x596f90,
    pa: _0x11fd14,
    _e: _0x17f087,
    bf: _0x2581ce,
    Zb: _0xf46e7b,
    Yb: _0x30c8f5,
    $b: _0x2bc42a,
    qf: _0x33b4bd,
    Tb: _0x44f10f,
    Vb: _0x41ba07,
    Ub: _0x38f6f3,
    Wb: _0x4a9434,
    Xb: _0x2f8fd9,
    vd: _0x1bf444,
    Qf: _0x3ade91,
    Pf: _0x57f317,
    ra: _0x30b486,
    Nf: _0x7d2ead,
    sg: _0x2143b1,
    sa: _0x12ac77,
    Df: _0x209be6,
    Ff: _0x4f0c11,
    A: _0x4e863b,
    _: _0x44fb30,
    xc: _0x51532e,
    vb: _0x3bb381,
    Ze: _0x20a100,
    ib: _0x21a3bb,
    wa: _0x42b2a3,
    b: _0x166629,
    Ve: _0x4c44e7,
    bg: _0x37329b,
    cg: _0x502af9,
    xb: _0x26d19c,
    qg: _0x2c898d,
    Ja: _0x288af5,
    Bi: _0x449c19,
    yi: _0x8bdc3f,
    lc: _0x48f9f4,
    hh: _0x27bf47,
    Fa: _0x1551ec,
    xi: _0x2419ac,
    Hg: _0x536e6e,
    Fg: _0x5b58b9,
    ui: _0x50744e,
    vi: _0x2fcfdd,
    zg: _0x959573,
    wi: _0x5df5ea,
    ah: _0x472d95,
    dh: _0x26f0f4,
    Fc: _0x4daae3,
    Gc: _0x2e6115,
    Hc: _0xafba4b,
    Tg: _0x16f093,
    si: _0x1001c9,
    ti: _0x2ff470,
    ri: _0x55ba76,
    mi: _0x3b08bf,
    vg: _0x5a39e6,
    ug: _0x141506,
    tg: _0x3ce445,
    ni: _0x44d1ef,
    oi: _0x1f2d67,
    pi: _0x3fba89,
    Pd: _0x3853a2,
    gb: _0x4de10c,
    li: _0x270d0c,
    ji: _0x31cd8b,
    Vg: _0x1e3ec7,
    ki: _0x3831ea,
    Zg: _0x2ec6a7,
    Kg: _0x403c9d,
    ii: _0x54c568,
    Ec: _0x468b92,
    hi: _0x4455a3,
    gi: _0x24d350,
    fi: _0x221f3f,
    ei: _0x20e46e,
    di: _0x112cb8,
    ci: _0x427f4f,
    ab: _0x3b3074,
    bi: _0x593a45,
    yg: _0x439c5e,
    ai: _0x177cf5,
    hc: _0x14f212,
    $h: _0x2b4b9e,
    bh: _0x5720c4,
    fh: _0x5a0b55,
    Ea: _0x2dfa98,
    Da: _0x14948c,
    Zh: _0x2f64a5,
    Yh: _0x46cea2,
    Xh: _0x4dad00,
    Uh: _0x13674e,
    Mg: _0x18febb,
    Jg: _0x2742fb,
    Vh: _0x1d2e4f,
    Lg: _0x5ba08e,
    Wh: _0x46b0cd,
    Th: _0x253bdd,
    mc: _0x3a3f98,
    ih: _0x458145,
    gc: _0x59ac09,
    Qh: _0xa7d8c0,
    Rh: _0x118409,
    Qg: _0x513378,
    U: _0x310ef3,
    S: _0x4c4e7b,
    ya: _0x3bad84,
    Ca: _0x339f84,
    Ph: _0x8f9db3,
    Lh: _0x379424,
    kc: _0x11f44f,
    Mh: _0x6cf846,
    xg: _0x510564,
    Oh: _0x5cf238,
    ch: _0x4129f5,
    gh: _0x461b89,
    Nh: _0x331079,
    Hi: _0x2f7258,
    fb: _0x9ecb56,
    Za: _0x52350f,
    ba: _0x12a6aa,
    aa: _0x3f53bf,
    Gi: _0x162706,
    Mf: _0x285ea4,
    Kh: _0x3565b7,
    Jh: _0x264951,
    Ai: _0x53647f,
    Ga: _0x1f0187,
    Cg: _0x46d39f,
    ic: _0x51a2d2,
    Di: _0x283a8e,
    Y: _0x5dcec2,
    lh: _0x2b6acc,
    kh: _0x4bb4f,
    Sh: _0x22e6ff,
    Hh: _0x32e7c4,
    Bc: _0x14d2b0,
    Ih: _0x4d51c9,
    Ci: _0x5b6cb9,
    Gh: _0x322202,
    Rg: _0x5c4599,
    Fh: _0x46b2b3,
    Dg: _0x4b875d,
    Ya: _0xf6a25c,
    ka: _0x4f743b,
    Ac: _0x2bdf51,
    Fi: _0x56fa56,
    $a: _0x2a54ae,
    zi: _0x5a3510,
    eh: _0x3e67e3,
    Ch: _0x3d5be8,
    Ng: _0x144ced,
    Eh: _0xc92bb7,
    zc: _0x3b7b0f,
    jc: _0x32a12d,
    wg: _0x54d51b,
    Ig: _0x469876,
    da: _0x17a3ac,
    Bh: _0x488d22,
    Sg: _0x131a91,
    Bg: _0x525b3b,
    eb: _0xca6f6,
    zh: _0x5bf3fd,
    Ah: _0x4201ac,
    xh: _0xb48aa7,
    yh: _0x281de0,
    uh: _0x4330f9,
    Xg: _0x2627d4,
    wh: _0x1f2474,
    db: _0x519398,
    th: _0x49df26,
    Ug: _0x4e37b0,
    Wg: _0x6e8fcb,
    sh: _0x16cfc9,
    Yg: _0x4c921b,
    $g: _0x24af97,
    nc: _0x5471c3,
    za: _0x3ef6ed,
    oc: _0x203117,
    pc: _0x58c331,
    qc: _0x3ec18e,
    rc: _0x3885d2,
    sc: _0x1ff66b,
    cb: _0x1216af,
    tc: _0x44576b,
    uc: _0x4bf789,
    ca: _0x48474e,
    vc: _0x44b3ff,
    wc: _0x594005,
    _a: _0x438dfc,
    yc: _0x4531dc,
    Aa: _0x319830,
    Og: _0x37936b,
    oh: _0x31239f,
    Ei: _0x131ecf,
    ph: _0x34dd83,
    qh: _0x2c9842,
    Eg: _0x3f5599,
    rh: _0x40d69d,
    bb: _0x1e8c10,
    id: _0x16810e,
    gl: _0x18de3c,
    Zc: _0x2dcfd6,
    J: _0x1cf8bb,
    Q: _0xa4c31c,
    td: _0x4ecfe1,
    gd: _0x59179a,
    te: _0x272041,
    jd: _0x774d02,
    ea: _0x1351d3,
    P: _0x39281e,
    D: _0x3b157d,
    sd: _0x51cdc7,
    $c: _0x4cef0d,
    w: _0x5b2a01,
    nb: _0x487870,
    dd: _0x82b1e3,
    d: _0x30dec0,
    Fj: _0x427e7d,
    ej: _0x4b5c1b,
    V: _0x4cc3cd,
    Cj: _0x168e90,
    hd: _0x2d3d31,
    qb: _0x214e80,
    c: _0x314e63,
    ad: _0x3a71c0,
    Yc: _0x167586,
    f: _0x4cf552,
    Ji: _0x924b2e,
    lj: _0x3191f8,
    cj: _0x3f047f,
    Ii: _0x1384b9,
    fd: _0x1b6445,
    q: _0x3ff5b9,
    Ha: _0x1aa844,
    Gj: _0x2b86cc,
    s: _0x13074d,
    u: _0x3e9c67,
    tj: _0x23ea1d,
    z: _0x2fff52,
    E: _0xfefc7,
    M: _0x4532c0,
    Wc: _0x515909,
    kj: _0x2729d5,
    nd: _0xe2e71e,
    _d: _0x510321,
    ae: _0x3ce81c,
    se: _0xa7b979,
    Le: _0x140325,
    Xe: _0x4a319a,
    ne: _0x582a33,
    Se: _0x1f1a60,
    Te: _0x97faa6,
    Ne: _0x12edc,
    Me: _0x3e4058,
    Ie: _0x5c9d27,
    Ge: _0x52f5bd,
    Sd: _0x3c329b,
    He: _0x4f3bb4,
    re: _0x31ba62,
    xe: _0x26c398,
    ve: _0xf5fbdc,
    Ue: _0x3210f9,
    ue: _0x2a2930,
    Re: _0x2e8153,
    we: _0x1b8b42,
    Qe: _0x2f5e21,
    Oe: _0x498504,
    Ye: _0x581b67,
    Qd: _0x59ffe8,
    Xd: _0x43079c,
    ye: _0x460de0,
    Fe: _0x15a875,
    ke: _0x6c2935,
    Rd: _0x112226,
    $d: _0x338f77,
    pe: _0x42f19f,
    oe: _0x54efc,
    Ee: _0x38ab9b,
    g: _0x524b99,
    pd: _0x31ebaa,
    h: _0x56957d,
    Rf: _0x46f4aa,
    y: _0x370310,
    rd: _0x11c1a5,
    Bj: _0x27d88d,
    G: _0x599847,
    Z: _0x256d7a,
    m: _0x4ef058,
    Ej: _0x56a0c1,
    Ia: _0x3ff92b,
    fl: _0x32f1f4,
    Oc: _0x44eb6c,
    W: _0xde6dc9,
    Hj: _0x2bb489,
    K: _0x28ad13,
    H: _0xc061a6,
    e: _0xee52a7,
    pb: _0xa54e71,
    $: _0x55c9da,
    n: _0x253ecc,
    uj: _0x3845dd,
    ee: _0x13751f,
    kd: _0x2b7e04,
    r: _0x2c5783,
    t: _0x44904e,
    B: _0x29e4e1,
    Ij: _0x197c79,
    sj: _0x4c8ae1,
    O: _0xbf4c58,
    de: _0x38643f,
    I: _0x170f09,
    X: _0x566935,
    Xc: _0x2dc320,
    Ka: _0x4345d5,
    fa: _0x2d831f,
    _c: _0x33d78b,
    L: _0x32235f,
    ce: _0x3ac748,
    Pe: _0x409328,
    Ce: _0x2c8671,
    ge: _0x3f7e9d,
    he: _0x4a36f7,
    Be: _0x34b37c,
    Ke: _0x35ea0f,
    Td: _0x1f86f7,
    De: _0x13a20f,
    je: _0x279da2,
    ze: _0x3bf391,
    Je: _0x3f3ba0,
    ie: _0x24c1be,
    qe: _0x1903d9,
    Yd: _0x4ac26d,
    be: _0x5545f4,
    Zd: _0x389872,
    Ud: _0x235403,
    Vd: _0x14838d,
    k: _0x43c47c,
    sb: _0x314953,
    v: _0x441b5c,
    Na: _0x22f1e9,
    Pa: _0x4aecee,
    La: _0x3db1d7,
    ma: _0x59a71f,
    ub: _0x17dd9a
  };
  var _0xf5964b = _0x2ace15();
  var _0x2a5d17 = _0xad46db.___wasm_call_ctors = function () {
    return (_0x2a5d17 = _0xad46db.___wasm_call_ctors = _0xad46db.asm.ll).apply(null, arguments);
  };
  var _0xe73633 = _0xad46db._ReleaseKeys = function () {
    return (_0xe73633 = _0xad46db._ReleaseKeys = _0xad46db.asm.ml).apply(null, arguments);
  };
  var _0x2139ed = _0xad46db._SendMessageFloat = function () {
    return (_0x2139ed = _0xad46db._SendMessageFloat = _0xad46db.asm.nl).apply(null, arguments);
  };
  var _0x395ee5 = _0xad46db._SendMessageString = function () {
    return (_0x395ee5 = _0xad46db._SendMessageString = _0xad46db.asm.ol).apply(null, arguments);
  };
  var _0x18591a = _0xad46db._SendMessage = function () {
    return (_0x18591a = _0xad46db._SendMessage = _0xad46db.asm.pl).apply(null, arguments);
  };
  var _0x2edadb = _0xad46db._SetFullscreen = function () {
    return (_0x2edadb = _0xad46db._SetFullscreen = _0xad46db.asm.ql).apply(null, arguments);
  };
  var _0x5da318 = _0xad46db._main = function () {
    return (_0x5da318 = _0xad46db._main = _0xad46db.asm.rl).apply(null, arguments);
  };
  var _0x123843 = _0xad46db.___errno_location = function () {
    return (_0x123843 = _0xad46db.___errno_location = _0xad46db.asm.sl).apply(null, arguments);
  };
  var _0x4b389e = _0xad46db._htonl = function () {
    return (_0x4b389e = _0xad46db._htonl = _0xad46db.asm.tl).apply(null, arguments);
  };
  var _0x5c681e = _0xad46db._htons = function () {
    return (_0x5c681e = _0xad46db._htons = _0xad46db.asm.ul).apply(null, arguments);
  };
  var _0x567f2e = _0xad46db._ntohs = function () {
    return (_0x567f2e = _0xad46db._ntohs = _0xad46db.asm.vl).apply(null, arguments);
  };
  var _0x35b629 = _0xad46db.__get_tzname = function () {
    return (_0x35b629 = _0xad46db.__get_tzname = _0xad46db.asm.wl).apply(null, arguments);
  };
  var _0x1dafae = _0xad46db.__get_daylight = function () {
    return (_0x1dafae = _0xad46db.__get_daylight = _0xad46db.asm.xl).apply(null, arguments);
  };
  var _0x6f5e63 = _0xad46db.__get_timezone = function () {
    return (_0x6f5e63 = _0xad46db.__get_timezone = _0xad46db.asm.yl).apply(null, arguments);
  };
  var _0xd24b5e = _0xad46db.stackSave = function () {
    return (_0xd24b5e = _0xad46db.stackSave = _0xad46db.asm.zl).apply(null, arguments);
  };
  var _0x114b19 = _0xad46db.stackRestore = function () {
    return (_0x114b19 = _0xad46db.stackRestore = _0xad46db.asm.Al).apply(null, arguments);
  };
  var _0x9577d8 = _0xad46db.stackAlloc = function () {
    return (_0x9577d8 = _0xad46db.stackAlloc = _0xad46db.asm.Bl).apply(null, arguments);
  };
  var _0xf302ad = _0xad46db._setThrew = function () {
    return (_0xf302ad = _0xad46db._setThrew = _0xad46db.asm.Cl).apply(null, arguments);
  };
  var _0x219a2e = _0xad46db.___cxa_can_catch = function () {
    return (_0x219a2e = _0xad46db.___cxa_can_catch = _0xad46db.asm.Dl).apply(null, arguments);
  };
  var _0x24dcf3 = _0xad46db.___cxa_is_pointer_type = function () {
    return (_0x24dcf3 = _0xad46db.___cxa_is_pointer_type = _0xad46db.asm.El).apply(null, arguments);
  };
  var _0x304a50 = _0xad46db._malloc = function () {
    return (_0x304a50 = _0xad46db._malloc = _0xad46db.asm.Fl).apply(null, arguments);
  };
  var _0x3d1553 = _0xad46db._free = function () {
    return (_0x3d1553 = _0xad46db._free = _0xad46db.asm.Gl).apply(null, arguments);
  };
  var _0x2a641e = _0xad46db._memalign = function () {
    return (_0x2a641e = _0xad46db._memalign = _0xad46db.asm.Hl).apply(null, arguments);
  };
  var _0x1d382b = _0xad46db._memset = function () {
    return (_0x1d382b = _0xad46db._memset = _0xad46db.asm.Il).apply(null, arguments);
  };
  var _0x45b0a1 = _0xad46db._strlen = function () {
    return (_0x45b0a1 = _0xad46db._strlen = _0xad46db.asm.Jl).apply(null, arguments);
  };
  var _0x365b09 = _0xad46db.dynCall_iidiiii = function () {
    return (_0x365b09 = _0xad46db.dynCall_iidiiii = _0xad46db.asm.Ll).apply(null, arguments);
  };
  var _0x172fa8 = _0xad46db.dynCall_vii = function () {
    return (_0x172fa8 = _0xad46db.dynCall_vii = _0xad46db.asm.Ml).apply(null, arguments);
  };
  var _0x1123cc = _0xad46db.dynCall_iii = function () {
    return (_0x1123cc = _0xad46db.dynCall_iii = _0xad46db.asm.Nl).apply(null, arguments);
  };
  var _0x48001e = _0xad46db.dynCall_ii = function () {
    return (_0x48001e = _0xad46db.dynCall_ii = _0xad46db.asm.Ol).apply(null, arguments);
  };
  var _0x40dc82 = _0xad46db.dynCall_iiii = function () {
    return (_0x40dc82 = _0xad46db.dynCall_iiii = _0xad46db.asm.Pl).apply(null, arguments);
  };
  var _0x95f3a2 = _0xad46db.dynCall_jiji = function () {
    return (_0x95f3a2 = _0xad46db.dynCall_jiji = _0xad46db.asm.Ql).apply(null, arguments);
  };
  var _0xc7c4be = _0xad46db.dynCall_vi = function () {
    return (_0xc7c4be = _0xad46db.dynCall_vi = _0xad46db.asm.Rl).apply(null, arguments);
  };
  var _0x10c14c = _0xad46db.dynCall_iiiii = function () {
    return (_0x10c14c = _0xad46db.dynCall_iiiii = _0xad46db.asm.Sl).apply(null, arguments);
  };
  var _0x1d6d2d = _0xad46db.dynCall_viii = function () {
    return (_0x1d6d2d = _0xad46db.dynCall_viii = _0xad46db.asm.Tl).apply(null, arguments);
  };
  var _0x5a8fd7 = _0xad46db.dynCall_viiiiii = function () {
    return (_0x5a8fd7 = _0xad46db.dynCall_viiiiii = _0xad46db.asm.Ul).apply(null, arguments);
  };
  var _0x45902d = _0xad46db.dynCall_viiiii = function () {
    return (_0x45902d = _0xad46db.dynCall_viiiii = _0xad46db.asm.Vl).apply(null, arguments);
  };
  var _0x493d36 = _0xad46db.dynCall_viiii = function () {
    return (_0x493d36 = _0xad46db.dynCall_viiii = _0xad46db.asm.Wl).apply(null, arguments);
  };
  var _0x4477f3 = _0xad46db.dynCall_iiiiii = function () {
    return (_0x4477f3 = _0xad46db.dynCall_iiiiii = _0xad46db.asm.Xl).apply(null, arguments);
  };
  var _0x51faa5 = _0xad46db.dynCall_iiij = function () {
    return (_0x51faa5 = _0xad46db.dynCall_iiij = _0xad46db.asm.Yl).apply(null, arguments);
  };
  var _0x111b3b = _0xad46db.dynCall_v = function () {
    return (_0x111b3b = _0xad46db.dynCall_v = _0xad46db.asm.Zl).apply(null, arguments);
  };
  var _0x21675e = _0xad46db.dynCall_i = function () {
    return (_0x21675e = _0xad46db.dynCall_i = _0xad46db.asm._l).apply(null, arguments);
  };
  var _0x582f5d = _0xad46db.dynCall_iiiiiiii = function () {
    return (_0x582f5d = _0xad46db.dynCall_iiiiiiii = _0xad46db.asm.$l).apply(null, arguments);
  };
  var _0x20e7c4 = _0xad46db.dynCall_iiijiii = function () {
    return (_0x20e7c4 = _0xad46db.dynCall_iiijiii = _0xad46db.asm.am).apply(null, arguments);
  };
  var _0x5dcd46 = _0xad46db.dynCall_iij = function () {
    return (_0x5dcd46 = _0xad46db.dynCall_iij = _0xad46db.asm.bm).apply(null, arguments);
  };
  var _0x4113c4 = _0xad46db.dynCall_iiiiiii = function () {
    return (_0x4113c4 = _0xad46db.dynCall_iiiiiii = _0xad46db.asm.cm).apply(null, arguments);
  };
  var _0x5d6303 = _0xad46db.dynCall_jii = function () {
    return (_0x5d6303 = _0xad46db.dynCall_jii = _0xad46db.asm.dm).apply(null, arguments);
  };
  var _0x45f597 = _0xad46db.dynCall_viiiiiii = function () {
    return (_0x45f597 = _0xad46db.dynCall_viiiiiii = _0xad46db.asm.em).apply(null, arguments);
  };
  var _0x5a5af4 = _0xad46db.dynCall_viiji = function () {
    return (_0x5a5af4 = _0xad46db.dynCall_viiji = _0xad46db.asm.fm).apply(null, arguments);
  };
  var _0x50afcf = _0xad46db.dynCall_fii = function () {
    return (_0x50afcf = _0xad46db.dynCall_fii = _0xad46db.asm.gm).apply(null, arguments);
  };
  var _0x14361e = _0xad46db.dynCall_viifi = function () {
    return (_0x14361e = _0xad46db.dynCall_viifi = _0xad46db.asm.hm).apply(null, arguments);
  };
  var _0x39dba0 = _0xad46db.dynCall_viiff = function () {
    return (_0x39dba0 = _0xad46db.dynCall_viiff = _0xad46db.asm.im).apply(null, arguments);
  };
  var _0x3258c9 = _0xad46db.dynCall_fiiffi = function () {
    return (_0x3258c9 = _0xad46db.dynCall_fiiffi = _0xad46db.asm.jm).apply(null, arguments);
  };
  var _0x404f68 = _0xad46db.dynCall_viiififii = function () {
    return (_0x404f68 = _0xad46db.dynCall_viiififii = _0xad46db.asm.km).apply(null, arguments);
  };
  var _0x56aab3 = _0xad46db.dynCall_jiii = function () {
    return (_0x56aab3 = _0xad46db.dynCall_jiii = _0xad46db.asm.lm).apply(null, arguments);
  };
  var _0xf50222 = _0xad46db.dynCall_iijji = function () {
    return (_0xf50222 = _0xad46db.dynCall_iijji = _0xad46db.asm.mm).apply(null, arguments);
  };
  var _0x5e6ded = _0xad46db.dynCall_iiddi = function () {
    return (_0x5e6ded = _0xad46db.dynCall_iiddi = _0xad46db.asm.nm).apply(null, arguments);
  };
  var _0x5e2f99 = _0xad46db.dynCall_iiffi = function () {
    return (_0x5e2f99 = _0xad46db.dynCall_iiffi = _0xad46db.asm.om).apply(null, arguments);
  };
  var _0x3ade22 = _0xad46db.dynCall_ddiii = function () {
    return (_0x3ade22 = _0xad46db.dynCall_ddiii = _0xad46db.asm.pm).apply(null, arguments);
  };
  var _0x152b2f = _0xad46db.dynCall_vijii = function () {
    return (_0x152b2f = _0xad46db.dynCall_vijii = _0xad46db.asm.qm).apply(null, arguments);
  };
  var _0x96d7a5 = _0xad46db.dynCall_viiij = function () {
    return (_0x96d7a5 = _0xad46db.dynCall_viiij = _0xad46db.asm.rm).apply(null, arguments);
  };
  var _0x1787b2 = _0xad46db.dynCall_iiji = function () {
    return (_0x1787b2 = _0xad46db.dynCall_iiji = _0xad46db.asm.sm).apply(null, arguments);
  };
  var _0x11301d = _0xad46db.dynCall_viiiiiiiii = function () {
    return (_0x11301d = _0xad46db.dynCall_viiiiiiiii = _0xad46db.asm.tm).apply(null, arguments);
  };
  var _0x1eeddd = _0xad46db.dynCall_viiiiiiii = function () {
    return (_0x1eeddd = _0xad46db.dynCall_viiiiiiii = _0xad46db.asm.um).apply(null, arguments);
  };
  var _0x31e6bb = _0xad46db.dynCall_fiii = function () {
    return (_0x31e6bb = _0xad46db.dynCall_fiii = _0xad46db.asm.vm).apply(null, arguments);
  };
  var _0x3be43e = _0xad46db.dynCall_diii = function () {
    return (_0x3be43e = _0xad46db.dynCall_diii = _0xad46db.asm.wm).apply(null, arguments);
  };
  var _0x115fe9 = _0xad46db.dynCall_viiiiiiiiiiii = function () {
    return (_0x115fe9 = _0xad46db.dynCall_viiiiiiiiiiii = _0xad46db.asm.xm).apply(null, arguments);
  };
  var _0x8805cb = _0xad46db.dynCall_viiifi = function () {
    return (_0x8805cb = _0xad46db.dynCall_viiifi = _0xad46db.asm.ym).apply(null, arguments);
  };
  var _0x326be3 = _0xad46db.dynCall_iiffifiiii = function () {
    return (_0x326be3 = _0xad46db.dynCall_iiffifiiii = _0xad46db.asm.zm).apply(null, arguments);
  };
  var _0x2176c6 = _0xad46db.dynCall_jidi = function () {
    return (_0x2176c6 = _0xad46db.dynCall_jidi = _0xad46db.asm.Am).apply(null, arguments);
  };
  var _0x36a5d6 = _0xad46db.dynCall_ji = function () {
    return (_0x36a5d6 = _0xad46db.dynCall_ji = _0xad46db.asm.Bm).apply(null, arguments);
  };
  var _0x39c6e1 = _0xad46db.dynCall_jjji = function () {
    return (_0x39c6e1 = _0xad46db.dynCall_jjji = _0xad46db.asm.Cm).apply(null, arguments);
  };
  var _0x4693dc = _0xad46db.dynCall_iji = function () {
    return (_0x4693dc = _0xad46db.dynCall_iji = _0xad46db.asm.Dm).apply(null, arguments);
  };
  var _0x42c7fa = _0xad46db.dynCall_jdi = function () {
    return (_0x42c7fa = _0xad46db.dynCall_jdi = _0xad46db.asm.Em).apply(null, arguments);
  };
  var _0x2066fa = _0xad46db.dynCall_viffffi = function () {
    return (_0x2066fa = _0xad46db.dynCall_viffffi = _0xad46db.asm.Fm).apply(null, arguments);
  };
  var _0x2fb730 = _0xad46db.dynCall_ijji = function () {
    return (_0x2fb730 = _0xad46db.dynCall_ijji = _0xad46db.asm.Gm).apply(null, arguments);
  };
  var _0x1a5d4a = _0xad46db.dynCall_vifffi = function () {
    return (_0x1a5d4a = _0xad46db.dynCall_vifffi = _0xad46db.asm.Hm).apply(null, arguments);
  };
  var _0x1f4887 = _0xad46db.dynCall_viiffiiiiiiiiiiii = function () {
    return (_0x1f4887 = _0xad46db.dynCall_viiffiiiiiiiiiiii = _0xad46db.asm.Im).apply(null, arguments);
  };
  var _0xcbd103 = _0xad46db.dynCall_viiiifiiifiiiiiiii = function () {
    return (_0xcbd103 = _0xad46db.dynCall_viiiifiiifiiiiiiii = _0xad46db.asm.Jm).apply(null, arguments);
  };
  var _0x3230fb = _0xad46db.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x3230fb = _0xad46db.dynCall_viiiiiiiiiiiiiiiii = _0xad46db.asm.Km).apply(null, arguments);
  };
  var _0x293be6 = _0xad46db.dynCall_fi = function () {
    return (_0x293be6 = _0xad46db.dynCall_fi = _0xad46db.asm.Lm).apply(null, arguments);
  };
  var _0x33d627 = _0xad46db.dynCall_viiifiii = function () {
    return (_0x33d627 = _0xad46db.dynCall_viiifiii = _0xad46db.asm.Mm).apply(null, arguments);
  };
  var _0x3d926c = _0xad46db.dynCall_viiifii = function () {
    return (_0x3d926c = _0xad46db.dynCall_viiifii = _0xad46db.asm.Nm).apply(null, arguments);
  };
  var _0x22b1c7 = _0xad46db.dynCall_vifi = function () {
    return (_0x22b1c7 = _0xad46db.dynCall_vifi = _0xad46db.asm.Om).apply(null, arguments);
  };
  var _0xede808 = _0xad46db.dynCall_vifii = function () {
    return (_0xede808 = _0xad46db.dynCall_vifii = _0xad46db.asm.Pm).apply(null, arguments);
  };
  var _0x268a65 = _0xad46db.dynCall_viffi = function () {
    return (_0x268a65 = _0xad46db.dynCall_viffi = _0xad46db.asm.Qm).apply(null, arguments);
  };
  var _0x28785f = _0xad46db.dynCall_iifii = function () {
    return (_0x28785f = _0xad46db.dynCall_iifii = _0xad46db.asm.Rm).apply(null, arguments);
  };
  var _0x297368 = _0xad46db.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x297368 = _0xad46db.dynCall_iiiiiiiiiiiiiiiiiii = _0xad46db.asm.Sm).apply(null, arguments);
  };
  var _0x2da24b = _0xad46db.dynCall_viifii = function () {
    return (_0x2da24b = _0xad46db.dynCall_viifii = _0xad46db.asm.Tm).apply(null, arguments);
  };
  var _0x149bf5 = _0xad46db.dynCall_iiiiiiiii = function () {
    return (_0x149bf5 = _0xad46db.dynCall_iiiiiiiii = _0xad46db.asm.Um).apply(null, arguments);
  };
  var _0x2e6c4b = _0xad46db.dynCall_vfi = function () {
    return (_0x2e6c4b = _0xad46db.dynCall_vfi = _0xad46db.asm.Vm).apply(null, arguments);
  };
  var _0x2fb05b = _0xad46db.dynCall_iiiiiiiiii = function () {
    return (_0x2fb05b = _0xad46db.dynCall_iiiiiiiiii = _0xad46db.asm.Wm).apply(null, arguments);
  };
  var _0x2afdc7 = _0xad46db.dynCall_viiifffiiiiii = function () {
    return (_0x2afdc7 = _0xad46db.dynCall_viiifffiiiiii = _0xad46db.asm.Xm).apply(null, arguments);
  };
  var _0x550858 = _0xad46db.dynCall_jiiijii = function () {
    return (_0x550858 = _0xad46db.dynCall_jiiijii = _0xad46db.asm.Ym).apply(null, arguments);
  };
  var _0x24652 = _0xad46db.dynCall_viiijiii = function () {
    return (_0x24652 = _0xad46db.dynCall_viiijiii = _0xad46db.asm.Zm).apply(null, arguments);
  };
  var _0x3263e4 = _0xad46db.dynCall_viiiiiiifiifiii = function () {
    return (_0x3263e4 = _0xad46db.dynCall_viiiiiiifiifiii = _0xad46db.asm._m).apply(null, arguments);
  };
  var _0x148fe0 = _0xad46db.dynCall_viiiiiiifddfiii = function () {
    return (_0x148fe0 = _0xad46db.dynCall_viiiiiiifddfiii = _0xad46db.asm.$m).apply(null, arguments);
  };
  var _0x467cb8 = _0xad46db.dynCall_viiiifi = function () {
    return (_0x467cb8 = _0xad46db.dynCall_viiiifi = _0xad46db.asm.an).apply(null, arguments);
  };
  var _0x29675d = _0xad46db.dynCall_iiiifii = function () {
    return (_0x29675d = _0xad46db.dynCall_iiiifii = _0xad46db.asm.bn).apply(null, arguments);
  };
  var _0x1a1423 = _0xad46db.dynCall_iiifii = function () {
    return (_0x1a1423 = _0xad46db.dynCall_iiifii = _0xad46db.asm.cn).apply(null, arguments);
  };
  var _0x4afac1 = _0xad46db.dynCall_viiiifii = function () {
    return (_0x4afac1 = _0xad46db.dynCall_viiiifii = _0xad46db.asm.dn).apply(null, arguments);
  };
  var _0x5b9cc2 = _0xad46db.dynCall_viiffi = function () {
    return (_0x5b9cc2 = _0xad46db.dynCall_viiffi = _0xad46db.asm.en).apply(null, arguments);
  };
  var _0xf29c45 = _0xad46db.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0xf29c45 = _0xad46db.dynCall_viiiiiiiiiiiiiii = _0xad46db.asm.fn).apply(null, arguments);
  };
  var _0xecad5a = _0xad46db.dynCall_dii = function () {
    return (_0xecad5a = _0xad46db.dynCall_dii = _0xad46db.asm.gn).apply(null, arguments);
  };
  var _0x5b668f = _0xad46db.dynCall_vidi = function () {
    return (_0x5b668f = _0xad46db.dynCall_vidi = _0xad46db.asm.hn).apply(null, arguments);
  };
  var _0x3ef19c = _0xad46db.dynCall_viji = function () {
    return (_0x3ef19c = _0xad46db.dynCall_viji = _0xad46db.asm.jn).apply(null, arguments);
  };
  var _0x137f72 = _0xad46db.dynCall_fffi = function () {
    return (_0x137f72 = _0xad46db.dynCall_fffi = _0xad46db.asm.kn).apply(null, arguments);
  };
  var _0x51bb23 = _0xad46db.dynCall_jji = function () {
    return (_0x51bb23 = _0xad46db.dynCall_jji = _0xad46db.asm.ln).apply(null, arguments);
  };
  var _0xfdc466 = _0xad46db.dynCall_dddi = function () {
    return (_0xfdc466 = _0xad46db.dynCall_dddi = _0xad46db.asm.mn).apply(null, arguments);
  };
  var _0xbd9176 = _0xad46db.dynCall_viiiiiiiiii = function () {
    return (_0xbd9176 = _0xad46db.dynCall_viiiiiiiiii = _0xad46db.asm.nn).apply(null, arguments);
  };
  var _0x552f9e = _0xad46db.dynCall_jiiii = function () {
    return (_0x552f9e = _0xad46db.dynCall_jiiii = _0xad46db.asm.on).apply(null, arguments);
  };
  var _0x59d547 = _0xad46db.dynCall_diiii = function () {
    return (_0x59d547 = _0xad46db.dynCall_diiii = _0xad46db.asm.pn).apply(null, arguments);
  };
  var _0x3fafec = _0xad46db.dynCall_iidi = function () {
    return (_0x3fafec = _0xad46db.dynCall_iidi = _0xad46db.asm.qn).apply(null, arguments);
  };
  var _0x4a502e = _0xad46db.dynCall_iifi = function () {
    return (_0x4a502e = _0xad46db.dynCall_iifi = _0xad46db.asm.rn).apply(null, arguments);
  };
  var _0x472bf6 = _0xad46db.dynCall_vijiiii = function () {
    return (_0x472bf6 = _0xad46db.dynCall_vijiiii = _0xad46db.asm.sn).apply(null, arguments);
  };
  var _0x344f1b = _0xad46db.dynCall_iiiiidii = function () {
    return (_0x344f1b = _0xad46db.dynCall_iiiiidii = _0xad46db.asm.tn).apply(null, arguments);
  };
  var _0x426073 = _0xad46db.dynCall_iiiifiiiiiiiii = function () {
    return (_0x426073 = _0xad46db.dynCall_iiiifiiiiiiiii = _0xad46db.asm.un).apply(null, arguments);
  };
  var _0x230148 = _0xad46db.dynCall_jjii = function () {
    return (_0x230148 = _0xad46db.dynCall_jjii = _0xad46db.asm.vn).apply(null, arguments);
  };
  var _0x3fd272 = _0xad46db.dynCall_iijiii = function () {
    return (_0x3fd272 = _0xad46db.dynCall_iijiii = _0xad46db.asm.wn).apply(null, arguments);
  };
  var _0x76e4dc = _0xad46db.dynCall_iiiji = function () {
    return (_0x76e4dc = _0xad46db.dynCall_iiiji = _0xad46db.asm.xn).apply(null, arguments);
  };
  var _0x47e548 = _0xad46db.dynCall_viidii = function () {
    return (_0x47e548 = _0xad46db.dynCall_viidii = _0xad46db.asm.yn).apply(null, arguments);
  };
  var _0x4ea466 = _0xad46db.dynCall_dji = function () {
    return (_0x4ea466 = _0xad46db.dynCall_dji = _0xad46db.asm.zn).apply(null, arguments);
  };
  var _0x2622e1 = _0xad46db.dynCall_vidiii = function () {
    return (_0x2622e1 = _0xad46db.dynCall_vidiii = _0xad46db.asm.An).apply(null, arguments);
  };
  var _0x9dc814 = _0xad46db.dynCall_viiddi = function () {
    return (_0x9dc814 = _0xad46db.dynCall_viiddi = _0xad46db.asm.Bn).apply(null, arguments);
  };
  var _0x374ae6 = _0xad46db.dynCall_diiid = function () {
    return (_0x374ae6 = _0xad46db.dynCall_diiid = _0xad46db.asm.Cn).apply(null, arguments);
  };
  var _0x24dcfa = _0xad46db.dynCall_jiiij = function () {
    return (_0x24dcfa = _0xad46db.dynCall_jiiij = _0xad46db.asm.Dn).apply(null, arguments);
  };
  var _0x36f44c = _0xad46db.dynCall_fiiif = function () {
    return (_0x36f44c = _0xad46db.dynCall_fiiif = _0xad46db.asm.En).apply(null, arguments);
  };
  var _0x3c7d74 = _0xad46db.dynCall_iiffii = function () {
    return (_0x3c7d74 = _0xad46db.dynCall_iiffii = _0xad46db.asm.Fn).apply(null, arguments);
  };
  var _0x337c73 = _0xad46db.dynCall_viffiiiiiiiiiiiii = function () {
    return (_0x337c73 = _0xad46db.dynCall_viffiiiiiiiiiiiii = _0xad46db.asm.Gn).apply(null, arguments);
  };
  var _0x4ae875 = _0xad46db.dynCall_viiiji = function () {
    return (_0x4ae875 = _0xad46db.dynCall_viiiji = _0xad46db.asm.Hn).apply(null, arguments);
  };
  var _0x59c4e7 = _0xad46db.dynCall_iijii = function () {
    return (_0x59c4e7 = _0xad46db.dynCall_iijii = _0xad46db.asm.In).apply(null, arguments);
  };
  var _0x574650 = _0xad46db.dynCall_jiiji = function () {
    return (_0x574650 = _0xad46db.dynCall_jiiji = _0xad46db.asm.Jn).apply(null, arguments);
  };
  var _0x17d3fe = _0xad46db.dynCall_ijiii = function () {
    return (_0x17d3fe = _0xad46db.dynCall_ijiii = _0xad46db.asm.Kn).apply(null, arguments);
  };
  var _0x29c78e = _0xad46db.dynCall_ifi = function () {
    return (_0x29c78e = _0xad46db.dynCall_ifi = _0xad46db.asm.Ln).apply(null, arguments);
  };
  var _0x50304b = _0xad46db.dynCall_idi = function () {
    return (_0x50304b = _0xad46db.dynCall_idi = _0xad46db.asm.Mn).apply(null, arguments);
  };
  var _0x54eb1e = _0xad46db.dynCall_iiiiji = function () {
    return (_0x54eb1e = _0xad46db.dynCall_iiiiji = _0xad46db.asm.Nn).apply(null, arguments);
  };
  var _0x1a7e72 = _0xad46db.dynCall_viiiiiiiiiiiii = function () {
    return (_0x1a7e72 = _0xad46db.dynCall_viiiiiiiiiiiii = _0xad46db.asm.On).apply(null, arguments);
  };
  var _0x5ee164 = _0xad46db.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x5ee164 = _0xad46db.dynCall_viiiiiiiiiiiiii = _0xad46db.asm.Pn).apply(null, arguments);
  };
  var _0x36d5dd = _0xad46db.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x36d5dd = _0xad46db.dynCall_viiiiiiiiiiiiiiii = _0xad46db.asm.Qn).apply(null, arguments);
  };
  var _0x25d05a = _0xad46db.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x25d05a = _0xad46db.dynCall_viiiiiiiiiiiiiiiiii = _0xad46db.asm.Rn).apply(null, arguments);
  };
  var _0x505cfd = _0xad46db.dynCall_viidi = function () {
    return (_0x505cfd = _0xad46db.dynCall_viidi = _0xad46db.asm.Sn).apply(null, arguments);
  };
  var _0x56a116 = _0xad46db.dynCall_viiidi = function () {
    return (_0x56a116 = _0xad46db.dynCall_viiidi = _0xad46db.asm.Tn).apply(null, arguments);
  };
  var _0x360f01 = _0xad46db.dynCall_viidiji = function () {
    return (_0x360f01 = _0xad46db.dynCall_viidiji = _0xad46db.asm.Un).apply(null, arguments);
  };
  var _0x5c2639 = _0xad46db.dynCall_viidjii = function () {
    return (_0x5c2639 = _0xad46db.dynCall_viidjii = _0xad46db.asm.Vn).apply(null, arguments);
  };
  var _0x323741 = _0xad46db.dynCall_vijijii = function () {
    return (_0x323741 = _0xad46db.dynCall_vijijii = _0xad46db.asm.Wn).apply(null, arguments);
  };
  var _0x3bf641 = _0xad46db.dynCall_viiiiiiiiiii = function () {
    return (_0x3bf641 = _0xad46db.dynCall_viiiiiiiiiii = _0xad46db.asm.Xn).apply(null, arguments);
  };
  var _0x3d7b70 = _0xad46db.dynCall_viijji = function () {
    return (_0x3d7b70 = _0xad46db.dynCall_viijji = _0xad46db.asm.Yn).apply(null, arguments);
  };
  var _0x5c8bb1 = _0xad46db.dynCall_vijiii = function () {
    return (_0x5c8bb1 = _0xad46db.dynCall_vijiii = _0xad46db.asm.Zn).apply(null, arguments);
  };
  var _0x72e182 = _0xad46db.dynCall_viij = function () {
    return (_0x72e182 = _0xad46db.dynCall_viij = _0xad46db.asm._n).apply(null, arguments);
  };
  var _0x224367 = _0xad46db.dynCall_viiijj = function () {
    return (_0x224367 = _0xad46db.dynCall_viiijj = _0xad46db.asm.$n).apply(null, arguments);
  };
  var _0x25db0a = _0xad46db.dynCall_viiiidi = function () {
    return (_0x25db0a = _0xad46db.dynCall_viiiidi = _0xad46db.asm.ao).apply(null, arguments);
  };
  var _0x2c28bf = _0xad46db.dynCall_iiiiiiidii = function () {
    return (_0x2c28bf = _0xad46db.dynCall_iiiiiiidii = _0xad46db.asm.bo).apply(null, arguments);
  };
  var _0x5af993 = _0xad46db.dynCall_viiiidij = function () {
    return (_0x5af993 = _0xad46db.dynCall_viiiidij = _0xad46db.asm.co).apply(null, arguments);
  };
  var _0xa14417 = _0xad46db.dynCall_viijii = function () {
    return (_0xa14417 = _0xad46db.dynCall_viijii = _0xad46db.asm.eo).apply(null, arguments);
  };
  var _0x1432a7 = _0xad46db.dynCall_fiffffi = function () {
    return (_0x1432a7 = _0xad46db.dynCall_fiffffi = _0xad46db.asm.fo).apply(null, arguments);
  };
  var _0x34a96f = _0xad46db.dynCall_viiiiiiifjjfiii = function () {
    return (_0x34a96f = _0xad46db.dynCall_viiiiiiifjjfiii = _0xad46db.asm.go).apply(null, arguments);
  };
  var _0x45f243 = _0xad46db.dynCall_viiiiiiiffffiii = function () {
    return (_0x45f243 = _0xad46db.dynCall_viiiiiiiffffiii = _0xad46db.asm.ho).apply(null, arguments);
  };
  var _0x125f11 = _0xad46db.dynCall_iiifi = function () {
    return (_0x125f11 = _0xad46db.dynCall_iiifi = _0xad46db.asm.io).apply(null, arguments);
  };
  var _0x4b2c39 = _0xad46db.dynCall_fiiii = function () {
    return (_0x4b2c39 = _0xad46db.dynCall_fiiii = _0xad46db.asm.jo).apply(null, arguments);
  };
  var _0x5467fc = _0xad46db.dynCall_iiiifi = function () {
    return (_0x5467fc = _0xad46db.dynCall_iiiifi = _0xad46db.asm.ko).apply(null, arguments);
  };
  var _0x243421 = _0xad46db.dynCall_viif = function () {
    return (_0x243421 = _0xad46db.dynCall_viif = _0xad46db.asm.lo).apply(null, arguments);
  };
  var _0x4e9258 = _0xad46db.dynCall_fiifi = function () {
    return (_0x4e9258 = _0xad46db.dynCall_fiifi = _0xad46db.asm.mo).apply(null, arguments);
  };
  var _0x5a4cb8 = _0xad46db.dynCall_iiidii = function () {
    return (_0x5a4cb8 = _0xad46db.dynCall_iiidii = _0xad46db.asm.no).apply(null, arguments);
  };
  var _0x405e15 = _0xad46db.dynCall_iiiiiiiiiii = function () {
    return (_0x405e15 = _0xad46db.dynCall_iiiiiiiiiii = _0xad46db.asm.oo).apply(null, arguments);
  };
  var _0x506d81 = _0xad46db.dynCall_viiiijiii = function () {
    return (_0x506d81 = _0xad46db.dynCall_viiiijiii = _0xad46db.asm.po).apply(null, arguments);
  };
  var _0x33d834 = _0xad46db.dynCall_iiiiidi = function () {
    return (_0x33d834 = _0xad46db.dynCall_iiiiidi = _0xad46db.asm.qo).apply(null, arguments);
  };
  var _0x1b1b5c = _0xad46db.dynCall_fiifii = function () {
    return (_0x1b1b5c = _0xad46db.dynCall_fiifii = _0xad46db.asm.ro).apply(null, arguments);
  };
  var _0x3e5cc2 = _0xad46db.dynCall_viijiiijiiii = function () {
    return (_0x3e5cc2 = _0xad46db.dynCall_viijiiijiiii = _0xad46db.asm.so).apply(null, arguments);
  };
  var _0x7391e = _0xad46db.dynCall_iiiiij = function () {
    return (_0x7391e = _0xad46db.dynCall_iiiiij = _0xad46db.asm.to).apply(null, arguments);
  };
  var _0x10f05c = _0xad46db.dynCall_vijjji = function () {
    return (_0x10f05c = _0xad46db.dynCall_vijjji = _0xad46db.asm.uo).apply(null, arguments);
  };
  var _0x528533 = _0xad46db.dynCall_iiijii = function () {
    return (_0x528533 = _0xad46db.dynCall_iiijii = _0xad46db.asm.vo).apply(null, arguments);
  };
  var _0x5576ec = _0xad46db.dynCall_iijiiii = function () {
    return (_0x5576ec = _0xad46db.dynCall_iijiiii = _0xad46db.asm.wo).apply(null, arguments);
  };
  var _0xcdd05b = _0xad46db.dynCall_jijiii = function () {
    return (_0xcdd05b = _0xad46db.dynCall_jijiii = _0xad46db.asm.xo).apply(null, arguments);
  };
  var _0xdaeaf3 = _0xad46db.dynCall_iijiiiiii = function () {
    return (_0xdaeaf3 = _0xad46db.dynCall_iijiiiiii = _0xad46db.asm.yo).apply(null, arguments);
  };
  var _0x286ea8 = _0xad46db.dynCall_iijjiiiiii = function () {
    return (_0x286ea8 = _0xad46db.dynCall_iijjiiiiii = _0xad46db.asm.zo).apply(null, arguments);
  };
  var _0x44ec0b = _0xad46db.dynCall_iiiijjii = function () {
    return (_0x44ec0b = _0xad46db.dynCall_iiiijjii = _0xad46db.asm.Ao).apply(null, arguments);
  };
  var _0x577dc3 = _0xad46db.dynCall_j = function () {
    return (_0x577dc3 = _0xad46db.dynCall_j = _0xad46db.asm.Bo).apply(null, arguments);
  };
  var _0x497080 = _0xad46db.dynCall_jijj = function () {
    return (_0x497080 = _0xad46db.dynCall_jijj = _0xad46db.asm.Co).apply(null, arguments);
  };
  var _0x1bdda2 = _0xad46db.dynCall_iiiiiiiiiji = function () {
    return (_0x1bdda2 = _0xad46db.dynCall_iiiiiiiiiji = _0xad46db.asm.Do).apply(null, arguments);
  };
  var _0x56adb8 = _0xad46db.dynCall_vji = function () {
    return (_0x56adb8 = _0xad46db.dynCall_vji = _0xad46db.asm.Eo).apply(null, arguments);
  };
  var _0x19a683 = _0xad46db.dynCall_di = function () {
    return (_0x19a683 = _0xad46db.dynCall_di = _0xad46db.asm.Fo).apply(null, arguments);
  };
  var _0x58bb8d = _0xad46db.dynCall_iiiiiiiiiiii = function () {
    return (_0x58bb8d = _0xad46db.dynCall_iiiiiiiiiiii = _0xad46db.asm.Go).apply(null, arguments);
  };
  var _0x5cb871 = _0xad46db.dynCall_iiiiiiiiiiiii = function () {
    return (_0x5cb871 = _0xad46db.dynCall_iiiiiiiiiiiii = _0xad46db.asm.Ho).apply(null, arguments);
  };
  var _0x27d787 = _0xad46db.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x27d787 = _0xad46db.dynCall_iiiiiiiiiiiiii = _0xad46db.asm.Io).apply(null, arguments);
  };
  var _0x969b48 = _0xad46db.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x969b48 = _0xad46db.dynCall_iiiiiiiiiiiiiii = _0xad46db.asm.Jo).apply(null, arguments);
  };
  var _0xd61c6d = _0xad46db.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0xd61c6d = _0xad46db.dynCall_iiiiiiiiiiiiiiii = _0xad46db.asm.Ko).apply(null, arguments);
  };
  var _0x331596 = _0xad46db.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x331596 = _0xad46db.dynCall_iiiiiiiiiiiiiiiii = _0xad46db.asm.Lo).apply(null, arguments);
  };
  var _0x46b193 = _0xad46db.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x46b193 = _0xad46db.dynCall_iiiiiiiiiiiiiiiiii = _0xad46db.asm.Mo).apply(null, arguments);
  };
  var _0xdab37d = _0xad46db.dynCall_fifi = function () {
    return (_0xdab37d = _0xad46db.dynCall_fifi = _0xad46db.asm.No).apply(null, arguments);
  };
  var _0x47a388 = _0xad46db.dynCall_iiiiff = function () {
    return (_0x47a388 = _0xad46db.dynCall_iiiiff = _0xad46db.asm.Oo).apply(null, arguments);
  };
  var _0x4c836a = _0xad46db.dynCall_viiiiiiiiifi = function () {
    return (_0x4c836a = _0xad46db.dynCall_viiiiiiiiifi = _0xad46db.asm.Po).apply(null, arguments);
  };
  var _0x5d0043 = _0xad46db.dynCall_jiiiiiiiiii = function () {
    return (_0x5d0043 = _0xad46db.dynCall_jiiiiiiiiii = _0xad46db.asm.Qo).apply(null, arguments);
  };
  var _0x59e368 = _0xad46db.dynCall_viijiiiiii = function () {
    return (_0x59e368 = _0xad46db.dynCall_viijiiiiii = _0xad46db.asm.Ro).apply(null, arguments);
  };
  var _0x5ea725 = _0xad46db.dynCall_vjjjiiii = function () {
    return (_0x5ea725 = _0xad46db.dynCall_vjjjiiii = _0xad46db.asm.So).apply(null, arguments);
  };
  var _0x52786e = _0xad46db.dynCall_vjiiiii = function () {
    return (_0x52786e = _0xad46db.dynCall_vjiiiii = _0xad46db.asm.To).apply(null, arguments);
  };
  var _0x16a8fe = _0xad46db.dynCall_jiiiii = function () {
    return (_0x16a8fe = _0xad46db.dynCall_jiiiii = _0xad46db.asm.Uo).apply(null, arguments);
  };
  var _0x5054ed = _0xad46db.dynCall_vifffiii = function () {
    return (_0x5054ed = _0xad46db.dynCall_vifffiii = _0xad46db.asm.Vo).apply(null, arguments);
  };
  var _0x20b859 = _0xad46db.dynCall_fifii = function () {
    return (_0x20b859 = _0xad46db.dynCall_fifii = _0xad46db.asm.Wo).apply(null, arguments);
  };
  var _0x4226b8 = _0xad46db.dynCall_fiffi = function () {
    return (_0x4226b8 = _0xad46db.dynCall_fiffi = _0xad46db.asm.Xo).apply(null, arguments);
  };
  var _0x3ac7ab = _0xad46db.dynCall_fiiifi = function () {
    return (_0x3ac7ab = _0xad46db.dynCall_fiiifi = _0xad46db.asm.Yo).apply(null, arguments);
  };
  var _0x2dab38 = _0xad46db.dynCall_viiifffi = function () {
    return (_0x2dab38 = _0xad46db.dynCall_viiifffi = _0xad46db.asm.Zo).apply(null, arguments);
  };
  var _0x59ece8 = _0xad46db.dynCall_vifiiifi = function () {
    return (_0x59ece8 = _0xad46db.dynCall_vifiiifi = _0xad46db.asm._o).apply(null, arguments);
  };
  var _0x310642 = _0xad46db.dynCall_viifiiifi = function () {
    return (_0x310642 = _0xad46db.dynCall_viifiiifi = _0xad46db.asm.$o).apply(null, arguments);
  };
  var _0xd8b66d = _0xad46db.dynCall_viffiifi = function () {
    return (_0xd8b66d = _0xad46db.dynCall_viffiifi = _0xad46db.asm.ap).apply(null, arguments);
  };
  var _0x9f5bea = _0xad46db.dynCall_ffi = function () {
    return (_0x9f5bea = _0xad46db.dynCall_ffi = _0xad46db.asm.bp).apply(null, arguments);
  };
  var _0x594736 = _0xad46db.dynCall_viiiiffffi = function () {
    return (_0x594736 = _0xad46db.dynCall_viiiiffffi = _0xad46db.asm.cp).apply(null, arguments);
  };
  var _0x23935c = _0xad46db.dynCall_fiiiii = function () {
    return (_0x23935c = _0xad46db.dynCall_fiiiii = _0xad46db.asm.dp).apply(null, arguments);
  };
  var _0x2f54d1 = _0xad46db.dynCall_fiiiiii = function () {
    return (_0x2f54d1 = _0xad46db.dynCall_fiiiiii = _0xad46db.asm.ep).apply(null, arguments);
  };
  var _0x1d23c9 = _0xad46db.dynCall_ffffi = function () {
    return (_0x1d23c9 = _0xad46db.dynCall_ffffi = _0xad46db.asm.fp).apply(null, arguments);
  };
  var _0x1e10d1 = _0xad46db.dynCall_ffffffi = function () {
    return (_0x1e10d1 = _0xad46db.dynCall_ffffffi = _0xad46db.asm.gp).apply(null, arguments);
  };
  var _0x2e7175 = _0xad46db.dynCall_viiiijii = function () {
    return (_0x2e7175 = _0xad46db.dynCall_viiiijii = _0xad46db.asm.hp).apply(null, arguments);
  };
  var _0x247881 = _0xad46db.dynCall_vifiiii = function () {
    return (_0x247881 = _0xad46db.dynCall_vifiiii = _0xad46db.asm.ip).apply(null, arguments);
  };
  var _0x22c751 = _0xad46db.dynCall_iiiffi = function () {
    return (_0x22c751 = _0xad46db.dynCall_iiiffi = _0xad46db.asm.jp).apply(null, arguments);
  };
  var _0x1e0b87 = _0xad46db.dynCall_iiifiii = function () {
    return (_0x1e0b87 = _0xad46db.dynCall_iiifiii = _0xad46db.asm.kp).apply(null, arguments);
  };
  var _0x2eb531 = _0xad46db.dynCall_iiififii = function () {
    return (_0x2eb531 = _0xad46db.dynCall_iiififii = _0xad46db.asm.lp).apply(null, arguments);
  };
  var _0x111e92 = _0xad46db.dynCall_iiifiiiii = function () {
    return (_0x111e92 = _0xad46db.dynCall_iiifiiiii = _0xad46db.asm.mp).apply(null, arguments);
  };
  var _0x13a6f5 = _0xad46db.dynCall_iifiifiiii = function () {
    return (_0x13a6f5 = _0xad46db.dynCall_iifiifiiii = _0xad46db.asm.np).apply(null, arguments);
  };
  var _0x91fca1 = _0xad46db.dynCall_iiiifiii = function () {
    return (_0x91fca1 = _0xad46db.dynCall_iiiifiii = _0xad46db.asm.op).apply(null, arguments);
  };
  var _0x2dfc0e = _0xad46db.dynCall_iiifiiii = function () {
    return (_0x2dfc0e = _0xad46db.dynCall_iiifiiii = _0xad46db.asm.pp).apply(null, arguments);
  };
  var _0x2bcb8b = _0xad46db.dynCall_iiiffiii = function () {
    return (_0x2bcb8b = _0xad46db.dynCall_iiiffiii = _0xad46db.asm.qp).apply(null, arguments);
  };
  var _0x16b3ed = _0xad46db.dynCall_iiiiifii = function () {
    return (_0x16b3ed = _0xad46db.dynCall_iiiiifii = _0xad46db.asm.rp).apply(null, arguments);
  };
  var _0xf860d0 = _0xad46db.dynCall_iifiifffii = function () {
    return (_0xf860d0 = _0xad46db.dynCall_iifiifffii = _0xad46db.asm.sp).apply(null, arguments);
  };
  var _0x4f25dd = _0xad46db.dynCall_iiiiiiffi = function () {
    return (_0x4f25dd = _0xad46db.dynCall_iiiiiiffi = _0xad46db.asm.tp).apply(null, arguments);
  };
  var _0x34ff7b = _0xad46db.dynCall_iifffi = function () {
    return (_0x34ff7b = _0xad46db.dynCall_iifffi = _0xad46db.asm.up).apply(null, arguments);
  };
  var _0x8d6db = _0xad46db.dynCall_iiifffi = function () {
    return (_0x8d6db = _0xad46db.dynCall_iiifffi = _0xad46db.asm.vp).apply(null, arguments);
  };
  var _0x2488a2 = _0xad46db.dynCall_viiifiiii = function () {
    return (_0x2488a2 = _0xad46db.dynCall_viiifiiii = _0xad46db.asm.wp).apply(null, arguments);
  };
  var _0x18ede3 = _0xad46db.dynCall_iifiii = function () {
    return (_0x18ede3 = _0xad46db.dynCall_iifiii = _0xad46db.asm.xp).apply(null, arguments);
  };
  var _0xb8d33e = _0xad46db.dynCall_iifiiii = function () {
    return (_0xb8d33e = _0xad46db.dynCall_iifiiii = _0xad46db.asm.yp).apply(null, arguments);
  };
  var _0x2c47a1 = _0xad46db.dynCall_viiiiifi = function () {
    return (_0x2c47a1 = _0xad46db.dynCall_viiiiifi = _0xad46db.asm.zp).apply(null, arguments);
  };
  var _0x2c01ce = _0xad46db.dynCall_viiiiifii = function () {
    return (_0x2c01ce = _0xad46db.dynCall_viiiiifii = _0xad46db.asm.Ap).apply(null, arguments);
  };
  var _0x874482 = _0xad46db.dynCall_viiiiiifi = function () {
    return (_0x874482 = _0xad46db.dynCall_viiiiiifi = _0xad46db.asm.Bp).apply(null, arguments);
  };
  var _0x46cdca = _0xad46db.dynCall_viiiiiifii = function () {
    return (_0x46cdca = _0xad46db.dynCall_viiiiiifii = _0xad46db.asm.Cp).apply(null, arguments);
  };
  var _0x4b0d68 = _0xad46db.dynCall_ifffi = function () {
    return (_0x4b0d68 = _0xad46db.dynCall_ifffi = _0xad46db.asm.Dp).apply(null, arguments);
  };
  var _0x36ece5 = _0xad46db.dynCall_iffffi = function () {
    return (_0x36ece5 = _0xad46db.dynCall_iffffi = _0xad46db.asm.Ep).apply(null, arguments);
  };
  var _0x4d28a7 = _0xad46db.dynCall_vffi = function () {
    return (_0x4d28a7 = _0xad46db.dynCall_vffi = _0xad46db.asm.Fp).apply(null, arguments);
  };
  var _0x2b5821 = _0xad46db.dynCall_ifiiiii = function () {
    return (_0x2b5821 = _0xad46db.dynCall_ifiiiii = _0xad46db.asm.Gp).apply(null, arguments);
  };
  var _0x44c7b5 = _0xad46db.dynCall_vfiiiii = function () {
    return (_0x44c7b5 = _0xad46db.dynCall_vfiiiii = _0xad46db.asm.Hp).apply(null, arguments);
  };
  var _0x375a41 = _0xad46db.dynCall_vfiiiiiiiiii = function () {
    return (_0x375a41 = _0xad46db.dynCall_vfiiiiiiiiii = _0xad46db.asm.Ip).apply(null, arguments);
  };
  var _0xe04c4e = _0xad46db.dynCall_vfii = function () {
    return (_0xe04c4e = _0xad46db.dynCall_vfii = _0xad46db.asm.Jp).apply(null, arguments);
  };
  var _0x4ce9d3 = _0xad46db.dynCall_iifiiiii = function () {
    return (_0x4ce9d3 = _0xad46db.dynCall_iifiiiii = _0xad46db.asm.Kp).apply(null, arguments);
  };
  var _0x1c5445 = _0xad46db.dynCall_vififii = function () {
    return (_0x1c5445 = _0xad46db.dynCall_vififii = _0xad46db.asm.Lp).apply(null, arguments);
  };
  var _0x2729e4 = _0xad46db.dynCall_viiiffi = function () {
    return (_0x2729e4 = _0xad46db.dynCall_viiiffi = _0xad46db.asm.Mp).apply(null, arguments);
  };
  var _0x43fd81 = _0xad46db.dynCall_viiffii = function () {
    return (_0x43fd81 = _0xad46db.dynCall_viiffii = _0xad46db.asm.Np).apply(null, arguments);
  };
  var _0x565991 = _0xad46db.dynCall_ifii = function () {
    return (_0x565991 = _0xad46db.dynCall_ifii = _0xad46db.asm.Op).apply(null, arguments);
  };
  var _0x4ac659 = _0xad46db.dynCall_iiiiiifiii = function () {
    return (_0x4ac659 = _0xad46db.dynCall_iiiiiifiii = _0xad46db.asm.Pp).apply(null, arguments);
  };
  var _0x2a8e5b = _0xad46db.dynCall_viiiiiifiii = function () {
    return (_0x2a8e5b = _0xad46db.dynCall_viiiiiifiii = _0xad46db.asm.Qp).apply(null, arguments);
  };
  var _0x86c8b4 = _0xad46db.dynCall_iifiiiiii = function () {
    return (_0x86c8b4 = _0xad46db.dynCall_iifiiiiii = _0xad46db.asm.Rp).apply(null, arguments);
  };
  var _0x4d6b14 = _0xad46db.dynCall_iifffiiii = function () {
    return (_0x4d6b14 = _0xad46db.dynCall_iifffiiii = _0xad46db.asm.Sp).apply(null, arguments);
  };
  var _0x36f5e0 = _0xad46db.dynCall_iiffiiii = function () {
    return (_0x36f5e0 = _0xad46db.dynCall_iiffiiii = _0xad46db.asm.Tp).apply(null, arguments);
  };
  var _0x3c91b9 = _0xad46db.dynCall_viiiifffiiii = function () {
    return (_0x3c91b9 = _0xad46db.dynCall_viiiifffiiii = _0xad46db.asm.Up).apply(null, arguments);
  };
  var _0x596bbe = _0xad46db.dynCall_viiiifiiiiii = function () {
    return (_0x596bbe = _0xad46db.dynCall_viiiifiiiiii = _0xad46db.asm.Vp).apply(null, arguments);
  };
  var _0x1e399d = _0xad46db.dynCall_iiiiiffi = function () {
    return (_0x1e399d = _0xad46db.dynCall_iiiiiffi = _0xad46db.asm.Wp).apply(null, arguments);
  };
  var _0x54f453 = _0xad46db.dynCall_viiiiiiifiii = function () {
    return (_0x54f453 = _0xad46db.dynCall_viiiiiiifiii = _0xad46db.asm.Xp).apply(null, arguments);
  };
  var _0x20e77e = _0xad46db.dynCall_fiiifii = function () {
    return (_0x20e77e = _0xad46db.dynCall_fiiifii = _0xad46db.asm.Yp).apply(null, arguments);
  };
  var _0x53ed89 = _0xad46db.dynCall_iiiffii = function () {
    return (_0x53ed89 = _0xad46db.dynCall_iiiffii = _0xad46db.asm.Zp).apply(null, arguments);
  };
  var _0x4b4199 = _0xad46db.dynCall_fifiii = function () {
    return (_0x4b4199 = _0xad46db.dynCall_fifiii = _0xad46db.asm._p).apply(null, arguments);
  };
  var _0x45ba1b = _0xad46db.dynCall_viiiiffii = function () {
    return (_0x45ba1b = _0xad46db.dynCall_viiiiffii = _0xad46db.asm.$p).apply(null, arguments);
  };
  var _0x442e36 = _0xad46db.dynCall_viiiiifffi = function () {
    return (_0x442e36 = _0xad46db.dynCall_viiiiifffi = _0xad46db.asm.aq).apply(null, arguments);
  };
  var _0x1e38b3 = _0xad46db.dynCall_iiiiifi = function () {
    return (_0x1e38b3 = _0xad46db.dynCall_iiiiifi = _0xad46db.asm.bq).apply(null, arguments);
  };
  var _0x3a63d8 = _0xad46db.dynCall_fifiiiii = function () {
    return (_0x3a63d8 = _0xad46db.dynCall_fifiiiii = _0xad46db.asm.cq).apply(null, arguments);
  };
  var _0x56aaed = _0xad46db.dynCall_viifiii = function () {
    return (_0x56aaed = _0xad46db.dynCall_viifiii = _0xad46db.asm.dq).apply(null, arguments);
  };
  var _0x48bc1f = _0xad46db.dynCall_vifiiiii = function () {
    return (_0x48bc1f = _0xad46db.dynCall_vifiiiii = _0xad46db.asm.eq).apply(null, arguments);
  };
  var _0x377705 = _0xad46db.dynCall_viffiifffiii = function () {
    return (_0x377705 = _0xad46db.dynCall_viffiifffiii = _0xad46db.asm.fq).apply(null, arguments);
  };
  var _0x27b0d0 = _0xad46db.dynCall_viiiiffi = function () {
    return (_0x27b0d0 = _0xad46db.dynCall_viiiiffi = _0xad46db.asm.gq).apply(null, arguments);
  };
  var _0x4281a8 = _0xad46db.dynCall_fifffi = function () {
    return (_0x4281a8 = _0xad46db.dynCall_fifffi = _0xad46db.asm.hq).apply(null, arguments);
  };
  var _0xd5ab64 = _0xad46db.dynCall_viffiiiii = function () {
    return (_0xd5ab64 = _0xad46db.dynCall_viffiiiii = _0xad46db.asm.iq).apply(null, arguments);
  };
  var _0x13d4bc = _0xad46db.dynCall_vifffffi = function () {
    return (_0x13d4bc = _0xad46db.dynCall_vifffffi = _0xad46db.asm.jq).apply(null, arguments);
  };
  var _0x216197 = _0xad46db.dynCall_vifiii = function () {
    return (_0x216197 = _0xad46db.dynCall_vifiii = _0xad46db.asm.kq).apply(null, arguments);
  };
  var _0x19c45b = _0xad46db.dynCall_iifiifiii = function () {
    return (_0x19c45b = _0xad46db.dynCall_iifiifiii = _0xad46db.asm.lq).apply(null, arguments);
  };
  var _0x1a04f9 = _0xad46db.dynCall_viddi = function () {
    return (_0x1a04f9 = _0xad46db.dynCall_viddi = _0xad46db.asm.mq).apply(null, arguments);
  };
  var _0x233bf8 = _0xad46db.dynCall_vijji = function () {
    return (_0x233bf8 = _0xad46db.dynCall_vijji = _0xad46db.asm.nq).apply(null, arguments);
  };
  var _0x43ffa5 = _0xad46db.dynCall_vijjjji = function () {
    return (_0x43ffa5 = _0xad46db.dynCall_vijjjji = _0xad46db.asm.oq).apply(null, arguments);
  };
  var _0x17e74b = _0xad46db.dynCall_iijjjji = function () {
    return (_0x17e74b = _0xad46db.dynCall_iijjjji = _0xad46db.asm.pq).apply(null, arguments);
  };
  var _0xd4d997 = _0xad46db.dynCall_iiidi = function () {
    return (_0xd4d997 = _0xad46db.dynCall_iiidi = _0xad46db.asm.qq).apply(null, arguments);
  };
  var _0x400059 = _0xad46db.dynCall_iijjjjiii = function () {
    return (_0x400059 = _0xad46db.dynCall_iijjjjiii = _0xad46db.asm.rq).apply(null, arguments);
  };
  var _0x2fd775 = _0xad46db.dynCall_viiiiiifiifiiii = function () {
    return (_0x2fd775 = _0xad46db.dynCall_viiiiiifiifiiii = _0xad46db.asm.sq).apply(null, arguments);
  };
  var _0x41f957 = _0xad46db.dynCall_iiffffiii = function () {
    return (_0x41f957 = _0xad46db.dynCall_iiffffiii = _0xad46db.asm.tq).apply(null, arguments);
  };
  var _0x2677ee = _0xad46db.dynCall_iiidfi = function () {
    return (_0x2677ee = _0xad46db.dynCall_iiidfi = _0xad46db.asm.uq).apply(null, arguments);
  };
  var _0x224d30 = _0xad46db.dynCall_iiijfi = function () {
    return (_0x224d30 = _0xad46db.dynCall_iiijfi = _0xad46db.asm.vq).apply(null, arguments);
  };
  var _0x1a58e9 = _0xad46db.dynCall_iiiififi = function () {
    return (_0x1a58e9 = _0xad46db.dynCall_iiiififi = _0xad46db.asm.wq).apply(null, arguments);
  };
  var _0xc019cb = _0xad46db.dynCall_iiiffifiiii = function () {
    return (_0xc019cb = _0xad46db.dynCall_iiiffifiiii = _0xad46db.asm.xq).apply(null, arguments);
  };
  var _0x5ba14c = _0xad46db.dynCall_iiifiifiii = function () {
    return (_0x5ba14c = _0xad46db.dynCall_iiifiifiii = _0xad46db.asm.yq).apply(null, arguments);
  };
  var _0x68ee92 = _0xad46db.dynCall_iiifiifiiiii = function () {
    return (_0x68ee92 = _0xad46db.dynCall_iiifiifiiiii = _0xad46db.asm.zq).apply(null, arguments);
  };
  var _0x20772f = _0xad46db.dynCall_ifffii = function () {
    return (_0x20772f = _0xad46db.dynCall_ifffii = _0xad46db.asm.Aq).apply(null, arguments);
  };
  var _0xece36c = _0xad46db.dynCall_ffffii = function () {
    return (_0xece36c = _0xad46db.dynCall_ffffii = _0xad46db.asm.Bq).apply(null, arguments);
  };
  var _0x181922 = _0xad46db.dynCall_ffffifi = function () {
    return (_0x181922 = _0xad46db.dynCall_ffffifi = _0xad46db.asm.Cq).apply(null, arguments);
  };
  var _0x488c36 = _0xad46db.dynCall_ffffiffi = function () {
    return (_0x488c36 = _0xad46db.dynCall_ffffiffi = _0xad46db.asm.Dq).apply(null, arguments);
  };
  var _0x150c2b = _0xad46db.dynCall_viiififi = function () {
    return (_0x150c2b = _0xad46db.dynCall_viiififi = _0xad46db.asm.Eq).apply(null, arguments);
  };
  var _0x1f7498 = _0xad46db.dynCall_viiififfi = function () {
    return (_0x1f7498 = _0xad46db.dynCall_viiififfi = _0xad46db.asm.Fq).apply(null, arguments);
  };
  var _0x2b5195 = _0xad46db.dynCall_ifiii = function () {
    return (_0x2b5195 = _0xad46db.dynCall_ifiii = _0xad46db.asm.Gq).apply(null, arguments);
  };
  var _0x3f9fa7 = _0xad46db.dynCall_iiffiiiii = function () {
    return (_0x3f9fa7 = _0xad46db.dynCall_iiffiiiii = _0xad46db.asm.Hq).apply(null, arguments);
  };
  var _0x2b5ef7 = _0xad46db.dynCall_iiffifiii = function () {
    return (_0x2b5ef7 = _0xad46db.dynCall_iiffifiii = _0xad46db.asm.Iq).apply(null, arguments);
  };
  var _0x775a1f = _0xad46db.dynCall_iififi = function () {
    return (_0x775a1f = _0xad46db.dynCall_iififi = _0xad46db.asm.Jq).apply(null, arguments);
  };
  var _0x1b8a8d = _0xad46db.dynCall_iiififi = function () {
    return (_0x1b8a8d = _0xad46db.dynCall_iiififi = _0xad46db.asm.Kq).apply(null, arguments);
  };
  var _0x3f5fc4 = _0xad46db.dynCall_iiiiifiiii = function () {
    return (_0x3f5fc4 = _0xad46db.dynCall_iiiiifiiii = _0xad46db.asm.Lq).apply(null, arguments);
  };
  var _0x4e382f = _0xad46db.dynCall_viidiii = function () {
    return (_0x4e382f = _0xad46db.dynCall_viidiii = _0xad46db.asm.Mq).apply(null, arguments);
  };
  var _0x351632 = _0xad46db.dynCall_diidi = function () {
    return (_0x351632 = _0xad46db.dynCall_diidi = _0xad46db.asm.Nq).apply(null, arguments);
  };
  var _0x33c2dd = _0xad46db.dynCall_fiifdi = function () {
    return (_0x33c2dd = _0xad46db.dynCall_fiifdi = _0xad46db.asm.Oq).apply(null, arguments);
  };
  var _0x5bb1a7 = _0xad46db.dynCall_viiiiiifddfiiii = function () {
    return (_0x5bb1a7 = _0xad46db.dynCall_viiiiiifddfiiii = _0xad46db.asm.Pq).apply(null, arguments);
  };
  var _0x5a52ee = _0xad46db.dynCall_viijiii = function () {
    return (_0x5a52ee = _0xad46db.dynCall_viijiii = _0xad46db.asm.Qq).apply(null, arguments);
  };
  var _0x1bf830 = _0xad46db.dynCall_fiifji = function () {
    return (_0x1bf830 = _0xad46db.dynCall_fiifji = _0xad46db.asm.Rq).apply(null, arguments);
  };
  var _0xd1fd57 = _0xad46db.dynCall_viiiiiifjjfiiii = function () {
    return (_0xd1fd57 = _0xad46db.dynCall_viiiiiifjjfiiii = _0xad46db.asm.Sq).apply(null, arguments);
  };
  var _0x2e77eb = _0xad46db.dynCall_viiiifiii = function () {
    return (_0x2e77eb = _0xad46db.dynCall_viiiifiii = _0xad46db.asm.Tq).apply(null, arguments);
  };
  var _0x1cf766 = _0xad46db.dynCall_viiiiiiffffiiii = function () {
    return (_0x1cf766 = _0xad46db.dynCall_viiiiiiffffiiii = _0xad46db.asm.Uq).apply(null, arguments);
  };
  var _0x234726 = _0xad46db.dynCall_viifiiii = function () {
    return (_0x234726 = _0xad46db.dynCall_viifiiii = _0xad46db.asm.Vq).apply(null, arguments);
  };
  var _0x54b10f = _0xad46db.dynCall_iiiiifiii = function () {
    return (_0x54b10f = _0xad46db.dynCall_iiiiifiii = _0xad46db.asm.Wq).apply(null, arguments);
  };
  var _0x2b48b0 = _0xad46db.dynCall_fffffi = function () {
    return (_0x2b48b0 = _0xad46db.dynCall_fffffi = _0xad46db.asm.Xq).apply(null, arguments);
  };
  var _0x1c2992 = _0xad46db.dynCall_fiiffffi = function () {
    return (_0x1c2992 = _0xad46db.dynCall_fiiffffi = _0xad46db.asm.Yq).apply(null, arguments);
  };
  var _0x45ec8d = _0xad46db.dynCall_fffifffi = function () {
    return (_0x45ec8d = _0xad46db.dynCall_fffifffi = _0xad46db.asm.Zq).apply(null, arguments);
  };
  var _0x44bd12 = _0xad46db.dynCall_ifiiii = function () {
    return (_0x44bd12 = _0xad46db.dynCall_ifiiii = _0xad46db.asm._q).apply(null, arguments);
  };
  var _0x5ab4ee = _0xad46db.dynCall_idiiiii = function () {
    return (_0x5ab4ee = _0xad46db.dynCall_idiiiii = _0xad46db.asm.$q).apply(null, arguments);
  };
  var _0x29e2b5 = _0xad46db.dynCall_idiiii = function () {
    return (_0x29e2b5 = _0xad46db.dynCall_idiiii = _0xad46db.asm.ar).apply(null, arguments);
  };
  var _0xd1bf8b = _0xad46db.dynCall_idii = function () {
    return (_0xd1bf8b = _0xad46db.dynCall_idii = _0xad46db.asm.br).apply(null, arguments);
  };
  var _0x59bfcd = _0xad46db.dynCall_ijii = function () {
    return (_0x59bfcd = _0xad46db.dynCall_ijii = _0xad46db.asm.cr).apply(null, arguments);
  };
  var _0x2ba27e = _0xad46db.dynCall_iidii = function () {
    return (_0x2ba27e = _0xad46db.dynCall_iidii = _0xad46db.asm.dr).apply(null, arguments);
  };
  var _0x596f13 = _0xad46db.dynCall_iidiii = function () {
    return (_0x596f13 = _0xad46db.dynCall_iidiii = _0xad46db.asm.er).apply(null, arguments);
  };
  var _0x144eea = _0xad46db.dynCall_iiijiiii = function () {
    return (_0x144eea = _0xad46db.dynCall_iiijiiii = _0xad46db.asm.fr).apply(null, arguments);
  };
  var _0x2487ed = _0xad46db.dynCall_vjiiii = function () {
    return (_0x2487ed = _0xad46db.dynCall_vjiiii = _0xad46db.asm.gr).apply(null, arguments);
  };
  var _0x4cfb03 = _0xad46db.dynCall_iddi = function () {
    return (_0x4cfb03 = _0xad46db.dynCall_iddi = _0xad46db.asm.hr).apply(null, arguments);
  };
  var _0x7523fd = _0xad46db.dynCall_viifiifi = function () {
    return (_0x7523fd = _0xad46db.dynCall_viifiifi = _0xad46db.asm.ir).apply(null, arguments);
  };
  var _0x1cdb1d = _0xad46db.dynCall_vifiifi = function () {
    return (_0x1cdb1d = _0xad46db.dynCall_vifiifi = _0xad46db.asm.jr).apply(null, arguments);
  };
  var _0x521db3 = _0xad46db.dynCall_viffii = function () {
    return (_0x521db3 = _0xad46db.dynCall_viffii = _0xad46db.asm.kr).apply(null, arguments);
  };
  var _0x2e261d = _0xad46db.dynCall_viddfffi = function () {
    return (_0x2e261d = _0xad46db.dynCall_viddfffi = _0xad46db.asm.lr).apply(null, arguments);
  };
  var _0x142e06 = _0xad46db.dynCall_viidfffi = function () {
    return (_0x142e06 = _0xad46db.dynCall_viidfffi = _0xad46db.asm.mr).apply(null, arguments);
  };
  var _0x16ec87 = _0xad46db.dynCall_vidifffi = function () {
    return (_0x16ec87 = _0xad46db.dynCall_vidifffi = _0xad46db.asm.nr).apply(null, arguments);
  };
  var _0xa5750e = _0xad46db.dynCall_vidii = function () {
    return (_0xa5750e = _0xad46db.dynCall_vidii = _0xad46db.asm.or).apply(null, arguments);
  };
  var _0x100ad1 = _0xad46db.dynCall_viiiiiiifi = function () {
    return (_0x100ad1 = _0xad46db.dynCall_viiiiiiifi = _0xad46db.asm.pr).apply(null, arguments);
  };
  var _0x508855 = _0xad46db.dynCall_iffi = function () {
    return (_0x508855 = _0xad46db.dynCall_iffi = _0xad46db.asm.qr).apply(null, arguments);
  };
  var _0x187b95 = _0xad46db.dynCall_viiffffi = function () {
    return (_0x187b95 = _0xad46db.dynCall_viiffffi = _0xad46db.asm.rr).apply(null, arguments);
  };
  var _0x18774a = _0xad46db.dynCall_ffii = function () {
    return (_0x18774a = _0xad46db.dynCall_ffii = _0xad46db.asm.sr).apply(null, arguments);
  };
  var _0xe6d929 = _0xad46db.dynCall_ddddi = function () {
    return (_0xe6d929 = _0xad46db.dynCall_ddddi = _0xad46db.asm.tr).apply(null, arguments);
  };
  var _0x2e3772 = _0xad46db.dynCall_ddi = function () {
    return (_0x2e3772 = _0xad46db.dynCall_ddi = _0xad46db.asm.ur).apply(null, arguments);
  };
  var _0x190154 = _0xad46db.dynCall_jijii = function () {
    return (_0x190154 = _0xad46db.dynCall_jijii = _0xad46db.asm.vr).apply(null, arguments);
  };
  var _0x226256 = _0xad46db.dynCall_iiiiiji = function () {
    return (_0x226256 = _0xad46db.dynCall_iiiiiji = _0xad46db.asm.wr).apply(null, arguments);
  };
  var _0x239d8d = _0xad46db.dynCall_viiijii = function () {
    return (_0x239d8d = _0xad46db.dynCall_viiijii = _0xad46db.asm.xr).apply(null, arguments);
  };
  var _0xe650ab = _0xad46db.dynCall_viffffffi = function () {
    return (_0xe650ab = _0xad46db.dynCall_viffffffi = _0xad46db.asm.yr).apply(null, arguments);
  };
  var _0x3a3cce = _0xad46db.dynCall_ijjiiii = function () {
    return (_0x3a3cce = _0xad46db.dynCall_ijjiiii = _0xad46db.asm.zr).apply(null, arguments);
  };
  var _0x20ce75 = _0xad46db.dynCall_vdiiiii = function () {
    return (_0x20ce75 = _0xad46db.dynCall_vdiiiii = _0xad46db.asm.Ar).apply(null, arguments);
  };
  var _0x370a0d = _0xad46db.dynCall_diiji = function () {
    return (_0x370a0d = _0xad46db.dynCall_diiji = _0xad46db.asm.Br).apply(null, arguments);
  };
  var _0x50843a = _0xad46db.dynCall_vjiiiiiiii = function () {
    return (_0x50843a = _0xad46db.dynCall_vjiiiiiiii = _0xad46db.asm.Cr).apply(null, arguments);
  };
  var _0x177af7 = _0xad46db.dynCall_vjiiiiiii = function () {
    return (_0x177af7 = _0xad46db.dynCall_vjiiiiiii = _0xad46db.asm.Dr).apply(null, arguments);
  };
  var _0x534d6e = _0xad46db.dynCall_ijiiii = function () {
    return (_0x534d6e = _0xad46db.dynCall_ijiiii = _0xad46db.asm.Er).apply(null, arguments);
  };
  var _0x29f567 = _0xad46db.dynCall_diji = function () {
    return (_0x29f567 = _0xad46db.dynCall_diji = _0xad46db.asm.Fr).apply(null, arguments);
  };
  var _0x14f3d5 = _0xad46db.dynCall_fidi = function () {
    return (_0x14f3d5 = _0xad46db.dynCall_fidi = _0xad46db.asm.Gr).apply(null, arguments);
  };
  var _0x157db8 = _0xad46db.dynCall_vfffi = function () {
    return (_0x157db8 = _0xad46db.dynCall_vfffi = _0xad46db.asm.Hr).apply(null, arguments);
  };
  var _0xa1d584 = _0xad46db.dynCall_vffffi = function () {
    return (_0xa1d584 = _0xad46db.dynCall_vffffi = _0xad46db.asm.Ir).apply(null, arguments);
  };
  var _0x4019c7 = _0xad46db.dynCall_viiiffii = function () {
    return (_0x4019c7 = _0xad46db.dynCall_viiiffii = _0xad46db.asm.Jr).apply(null, arguments);
  };
  var _0xfc63cf = _0xad46db.dynCall_vffffiiii = function () {
    return (_0xfc63cf = _0xad46db.dynCall_vffffiiii = _0xad46db.asm.Kr).apply(null, arguments);
  };
  var _0x395772 = _0xad46db.dynCall_vifffii = function () {
    return (_0x395772 = _0xad46db.dynCall_vifffii = _0xad46db.asm.Lr).apply(null, arguments);
  };
  var _0xe5abb1 = _0xad46db.dynCall_vffffii = function () {
    return (_0xe5abb1 = _0xad46db.dynCall_vffffii = _0xad46db.asm.Mr).apply(null, arguments);
  };
  var _0x415f97 = _0xad46db.dynCall_viiiifffi = function () {
    return (_0x415f97 = _0xad46db.dynCall_viiiifffi = _0xad46db.asm.Nr).apply(null, arguments);
  };
  var _0x3e055e = _0xad46db.dynCall_vfiii = function () {
    return (_0x3e055e = _0xad46db.dynCall_vfiii = _0xad46db.asm.Or).apply(null, arguments);
  };
  var _0x1c4cde = _0xad46db.dynCall_fffifi = function () {
    return (_0x1c4cde = _0xad46db.dynCall_fffifi = _0xad46db.asm.Pr).apply(null, arguments);
  };
  var _0x2ece8a = _0xad46db.dynCall_viifffi = function () {
    return (_0x2ece8a = _0xad46db.dynCall_viifffi = _0xad46db.asm.Qr).apply(null, arguments);
  };
  var _0x4ce121 = _0xad46db.dynCall_iiiifiiiii = function () {
    return (_0x4ce121 = _0xad46db.dynCall_iiiifiiiii = _0xad46db.asm.Rr).apply(null, arguments);
  };
  var _0x8f5f2 = _0xad46db.dynCall_iiiifiiii = function () {
    return (_0x8f5f2 = _0xad46db.dynCall_iiiifiiii = _0xad46db.asm.Sr).apply(null, arguments);
  };
  var _0x317d5b = _0xad46db.dynCall_vijjii = function () {
    return (_0x317d5b = _0xad46db.dynCall_vijjii = _0xad46db.asm.Tr).apply(null, arguments);
  };
  var _0x346166 = _0xad46db.dynCall_viiiififfi = function () {
    return (_0x346166 = _0xad46db.dynCall_viiiififfi = _0xad46db.asm.Ur).apply(null, arguments);
  };
  var _0x579cce = _0xad46db.dynCall_viiiifiifi = function () {
    return (_0x579cce = _0xad46db.dynCall_viiiifiifi = _0xad46db.asm.Vr).apply(null, arguments);
  };
  var _0x262ab2 = _0xad46db.dynCall_viiiifiiii = function () {
    return (_0x262ab2 = _0xad46db.dynCall_viiiifiiii = _0xad46db.asm.Wr).apply(null, arguments);
  };
  var _0x4e18f1 = _0xad46db.dynCall_viiiifiiiii = function () {
    return (_0x4e18f1 = _0xad46db.dynCall_viiiifiiiii = _0xad46db.asm.Xr).apply(null, arguments);
  };
  var _0x16c423 = _0xad46db.dynCall_viiiifiiiiiiii = function () {
    return (_0x16c423 = _0xad46db.dynCall_viiiifiiiiiiii = _0xad46db.asm.Yr).apply(null, arguments);
  };
  var _0x31bb3b = _0xad46db.dynCall_viiiiiffii = function () {
    return (_0x31bb3b = _0xad46db.dynCall_viiiiiffii = _0xad46db.asm.Zr).apply(null, arguments);
  };
  var _0x226a44 = _0xad46db.dynCall_viffiii = function () {
    return (_0x226a44 = _0xad46db.dynCall_viffiii = _0xad46db.asm._r).apply(null, arguments);
  };
  var _0x5994ec = _0xad46db.dynCall_viffffiii = function () {
    return (_0x5994ec = _0xad46db.dynCall_viffffiii = _0xad46db.asm.$r).apply(null, arguments);
  };
  var _0x52aee0 = _0xad46db.dynCall_viffffii = function () {
    return (_0x52aee0 = _0xad46db.dynCall_viffffii = _0xad46db.asm.as).apply(null, arguments);
  };
  var _0x134000 = _0xad46db.dynCall_viiiififii = function () {
    return (_0x134000 = _0xad46db.dynCall_viiiififii = _0xad46db.asm.bs).apply(null, arguments);
  };
  var _0x15395b = _0xad46db.dynCall_viiififiii = function () {
    return (_0x15395b = _0xad46db.dynCall_viiififiii = _0xad46db.asm.cs).apply(null, arguments);
  };
  var _0x1aa4ab = _0xad46db.dynCall_iiififfi = function () {
    return (_0x1aa4ab = _0xad46db.dynCall_iiififfi = _0xad46db.asm.ds).apply(null, arguments);
  };
  var _0x5897af = _0xad46db.dynCall_iiiiffi = function () {
    return (_0x5897af = _0xad46db.dynCall_iiiiffi = _0xad46db.asm.es).apply(null, arguments);
  };
  var _0x22612e = _0xad46db.dynCall_viffiiii = function () {
    return (_0x22612e = _0xad46db.dynCall_viffiiii = _0xad46db.asm.fs).apply(null, arguments);
  };
  var _0x4a8af9 = _0xad46db.dynCall_viiiiffffiiii = function () {
    return (_0x4a8af9 = _0xad46db.dynCall_viiiiffffiiii = _0xad46db.asm.gs).apply(null, arguments);
  };
  var _0x31d693 = _0xad46db.dynCall_viifiiiii = function () {
    return (_0x31d693 = _0xad46db.dynCall_viifiiiii = _0xad46db.asm.hs).apply(null, arguments);
  };
  var _0x360aa5 = _0xad46db.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x360aa5 = _0xad46db.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0xad46db.asm.is).apply(null, arguments);
  };
  var _0x5acbd3 = _0xad46db.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x5acbd3 = _0xad46db.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0xad46db.asm.js).apply(null, arguments);
  };
  var _0x5dfe07 = _0xad46db.dynCall_viififii = function () {
    return (_0x5dfe07 = _0xad46db.dynCall_viififii = _0xad46db.asm.ks).apply(null, arguments);
  };
  var _0x4bf613 = _0xad46db.dynCall_iiiffiiii = function () {
    return (_0x4bf613 = _0xad46db.dynCall_iiiffiiii = _0xad46db.asm.ls).apply(null, arguments);
  };
  var _0x249d05 = _0xad46db.dynCall_iiiiffiiii = function () {
    return (_0x249d05 = _0xad46db.dynCall_iiiiffiiii = _0xad46db.asm.ms).apply(null, arguments);
  };
  var _0x41ad81 = _0xad46db.dynCall_vjii = function () {
    return (_0x41ad81 = _0xad46db.dynCall_vjii = _0xad46db.asm.ns).apply(null, arguments);
  };
  var _0x217294 = _0xad46db.dynCall_fffffffi = function () {
    return (_0x217294 = _0xad46db.dynCall_fffffffi = _0xad46db.asm.os).apply(null, arguments);
  };
  var _0x2444ba = _0xad46db.dynCall_viffifi = function () {
    return (_0x2444ba = _0xad46db.dynCall_viffifi = _0xad46db.asm.ps).apply(null, arguments);
  };
  var _0x499f59 = _0xad46db.dynCall_viiffifi = function () {
    return (_0x499f59 = _0xad46db.dynCall_viiffifi = _0xad46db.asm.qs).apply(null, arguments);
  };
  var _0x3589ce = _0xad46db.dynCall_fiiiffi = function () {
    return (_0x3589ce = _0xad46db.dynCall_fiiiffi = _0xad46db.asm.rs).apply(null, arguments);
  };
  var _0x3864c0 = _0xad46db.dynCall_viiffiiiiiiiii = function () {
    return (_0x3864c0 = _0xad46db.dynCall_viiffiiiiiiiii = _0xad46db.asm.ss).apply(null, arguments);
  };
  var _0x30f934 = _0xad46db.dynCall_viiiiiffiii = function () {
    return (_0x30f934 = _0xad46db.dynCall_viiiiiffiii = _0xad46db.asm.ts).apply(null, arguments);
  };
  var _0x4d98e2 = _0xad46db.dynCall_viiffiii = function () {
    return (_0x4d98e2 = _0xad46db.dynCall_viiffiii = _0xad46db.asm.us).apply(null, arguments);
  };
  var _0x1be395 = _0xad46db.dynCall_viiffiiiiiii = function () {
    return (_0x1be395 = _0xad46db.dynCall_viiffiiiiiii = _0xad46db.asm.vs).apply(null, arguments);
  };
  var _0x42e917 = _0xad46db.dynCall_fffffffffi = function () {
    return (_0x42e917 = _0xad46db.dynCall_fffffffffi = _0xad46db.asm.ws).apply(null, arguments);
  };
  var _0x1e2528 = _0xad46db.dynCall_vifiiiiii = function () {
    return (_0x1e2528 = _0xad46db.dynCall_vifiiiiii = _0xad46db.asm.xs).apply(null, arguments);
  };
  var _0x23579a = _0xad46db.dynCall_viifiiiiiii = function () {
    return (_0x23579a = _0xad46db.dynCall_viifiiiiiii = _0xad46db.asm.ys).apply(null, arguments);
  };
  var _0x3aa9d4 = _0xad46db.dynCall_viiififfiiiiiii = function () {
    return (_0x3aa9d4 = _0xad46db.dynCall_viiififfiiiiiii = _0xad46db.asm.zs).apply(null, arguments);
  };
  var _0x5a7a04 = _0xad46db.dynCall_viiffiifiiiiiii = function () {
    return (_0x5a7a04 = _0xad46db.dynCall_viiffiifiiiiiii = _0xad46db.asm.As).apply(null, arguments);
  };
  var _0x25da18 = _0xad46db.dynCall_viifiiiiii = function () {
    return (_0x25da18 = _0xad46db.dynCall_viifiiiiii = _0xad46db.asm.Bs).apply(null, arguments);
  };
  var _0x56b0cd = _0xad46db.dynCall_viiifiiiiii = function () {
    return (_0x56b0cd = _0xad46db.dynCall_viiifiiiiii = _0xad46db.asm.Cs).apply(null, arguments);
  };
  var _0xc57fd1 = _0xad46db.dynCall_viififiiiiii = function () {
    return (_0xc57fd1 = _0xad46db.dynCall_viififiiiiii = _0xad46db.asm.Ds).apply(null, arguments);
  };
  var _0x478f80 = _0xad46db.dynCall_viiiffiifiiiiiii = function () {
    return (_0x478f80 = _0xad46db.dynCall_viiiffiifiiiiiii = _0xad46db.asm.Es).apply(null, arguments);
  };
  var _0x3ac391 = _0xad46db.dynCall_viiiiiifiiiiii = function () {
    return (_0x3ac391 = _0xad46db.dynCall_viiiiiifiiiiii = _0xad46db.asm.Fs).apply(null, arguments);
  };
  var _0x548874 = _0xad46db.dynCall_vififiii = function () {
    return (_0x548874 = _0xad46db.dynCall_vififiii = _0xad46db.asm.Gs).apply(null, arguments);
  };
  var _0x480638 = _0xad46db.dynCall_viiiiiiiijiiii = function () {
    return (_0x480638 = _0xad46db.dynCall_viiiiiiiijiiii = _0xad46db.asm.Hs).apply(null, arguments);
  };
  var _0x581126 = _0xad46db.dynCall_viiiiiffi = function () {
    return (_0x581126 = _0xad46db.dynCall_viiiiiffi = _0xad46db.asm.Is).apply(null, arguments);
  };
  var _0x497ac7 = _0xad46db.dynCall_viiidii = function () {
    return (_0x497ac7 = _0xad46db.dynCall_viiidii = _0xad46db.asm.Js).apply(null, arguments);
  };
  var _0x35af8b = _0xad46db.dynCall_ijiiiiiiiii = function () {
    return (_0x35af8b = _0xad46db.dynCall_ijiiiiiiiii = _0xad46db.asm.Ks).apply(null, arguments);
  };
  var _0x2d4e5b = _0xad46db.dynCall_ijjiii = function () {
    return (_0x2d4e5b = _0xad46db.dynCall_ijjiii = _0xad46db.asm.Ls).apply(null, arguments);
  };
  var _0x51bd7f = _0xad46db.dynCall_jjjii = function () {
    return (_0x51bd7f = _0xad46db.dynCall_jjjii = _0xad46db.asm.Ms).apply(null, arguments);
  };
  var _0x431939 = _0xad46db.dynCall_iijjijii = function () {
    return (_0x431939 = _0xad46db.dynCall_iijjijii = _0xad46db.asm.Ns).apply(null, arguments);
  };
  var _0x1885ea = _0xad46db.dynCall_jiijii = function () {
    return (_0x1885ea = _0xad46db.dynCall_jiijii = _0xad46db.asm.Os).apply(null, arguments);
  };
  var _0x8f1e8d = _0xad46db.dynCall_viiiidii = function () {
    return (_0x8f1e8d = _0xad46db.dynCall_viiiidii = _0xad46db.asm.Ps).apply(null, arguments);
  };
  var _0x38f4d5 = _0xad46db.dynCall_vidiiiii = function () {
    return (_0x38f4d5 = _0xad46db.dynCall_vidiiiii = _0xad46db.asm.Qs).apply(null, arguments);
  };
  var _0x3c9c92 = _0xad46db.dynCall_viiidjii = function () {
    return (_0x3c9c92 = _0xad46db.dynCall_viiidjii = _0xad46db.asm.Rs).apply(null, arguments);
  };
  var _0x3faf41 = _0xad46db.dynCall_viijijji = function () {
    return (_0x3faf41 = _0xad46db.dynCall_viijijji = _0xad46db.asm.Ss).apply(null, arguments);
  };
  var _0x117d3a = _0xad46db.dynCall_vijijji = function () {
    return (_0x117d3a = _0xad46db.dynCall_vijijji = _0xad46db.asm.Ts).apply(null, arguments);
  };
  var _0x432953 = _0xad46db.dynCall_viffffffffffffffffi = function () {
    return (_0x432953 = _0xad46db.dynCall_viffffffffffffffffi = _0xad46db.asm.Us).apply(null, arguments);
  };
  var _0x4ad9d6 = _0xad46db.dynCall_jiidi = function () {
    return (_0x4ad9d6 = _0xad46db.dynCall_jiidi = _0xad46db.asm.Vs).apply(null, arguments);
  };
  var _0x8e1fd = _0xad46db.dynCall_viiiidijii = function () {
    return (_0x8e1fd = _0xad46db.dynCall_viiiidijii = _0xad46db.asm.Ws).apply(null, arguments);
  };
  var _0x3f088a = _0xad46db.dynCall_iiidiii = function () {
    return (_0x3f088a = _0xad46db.dynCall_iiidiii = _0xad46db.asm.Xs).apply(null, arguments);
  };
  var _0x560c02 = _0xad46db.dynCall_viijiiiii = function () {
    return (_0x560c02 = _0xad46db.dynCall_viijiiiii = _0xad46db.asm.Ys).apply(null, arguments);
  };
  var _0x570cba = _0xad46db.dynCall_viifffffi = function () {
    return (_0x570cba = _0xad46db.dynCall_viifffffi = _0xad46db.asm.Zs).apply(null, arguments);
  };
  var _0x2abc2d = _0xad46db.dynCall_viiffffffi = function () {
    return (_0x2abc2d = _0xad46db.dynCall_viiffffffi = _0xad46db.asm._s).apply(null, arguments);
  };
  var _0x96a256 = _0xad46db.dynCall_viifffffffi = function () {
    return (_0x96a256 = _0xad46db.dynCall_viifffffffi = _0xad46db.asm.$s).apply(null, arguments);
  };
  var _0x21d7fe = _0xad46db.dynCall_viiffffffffi = function () {
    return (_0x21d7fe = _0xad46db.dynCall_viiffffffffi = _0xad46db.asm.at).apply(null, arguments);
  };
  var _0x1b044f = _0xad46db.dynCall_viiffffffffiii = function () {
    return (_0x1b044f = _0xad46db.dynCall_viiffffffffiii = _0xad46db.asm.bt).apply(null, arguments);
  };
  var _0xdea1ae = _0xad46db.dynCall_viiiiffffii = function () {
    return (_0xdea1ae = _0xad46db.dynCall_viiiiffffii = _0xad46db.asm.ct).apply(null, arguments);
  };
  var _0x32c9b8 = _0xad46db.dynCall_didi = function () {
    return (_0x32c9b8 = _0xad46db.dynCall_didi = _0xad46db.asm.dt).apply(null, arguments);
  };
  var _0x24c105 = _0xad46db.dynCall_ddidi = function () {
    return (_0x24c105 = _0xad46db.dynCall_ddidi = _0xad46db.asm.et).apply(null, arguments);
  };
  var _0xa0d1b = _0xad46db.dynCall_viddii = function () {
    return (_0xa0d1b = _0xad46db.dynCall_viddii = _0xad46db.asm.ft).apply(null, arguments);
  };
  var _0x2cdfe0 = _0xad46db.dynCall_iiiddi = function () {
    return (_0x2cdfe0 = _0xad46db.dynCall_iiiddi = _0xad46db.asm.gt).apply(null, arguments);
  };
  var _0x28a1b0 = _0xad46db.dynCall_viddiiii = function () {
    return (_0x28a1b0 = _0xad46db.dynCall_viddiiii = _0xad46db.asm.ht).apply(null, arguments);
  };
  var _0x3bde46 = _0xad46db.dynCall_viiijji = function () {
    return (_0x3bde46 = _0xad46db.dynCall_viiijji = _0xad46db.asm.it).apply(null, arguments);
  };
  var _0x148ef7 = _0xad46db.dynCall_vijiiiiiii = function () {
    return (_0x148ef7 = _0xad46db.dynCall_vijiiiiiii = _0xad46db.asm.jt).apply(null, arguments);
  };
  var _0x2c2e18 = _0xad46db.dynCall_vijiiiiiiii = function () {
    return (_0x2c2e18 = _0xad46db.dynCall_vijiiiiiiii = _0xad46db.asm.kt).apply(null, arguments);
  };
  var _0x12e6f5 = _0xad46db.dynCall_jjiiii = function () {
    return (_0x12e6f5 = _0xad46db.dynCall_jjiiii = _0xad46db.asm.lt).apply(null, arguments);
  };
  var _0x1edbd5 = _0xad46db.dynCall_jjiiiii = function () {
    return (_0x1edbd5 = _0xad46db.dynCall_jjiiiii = _0xad46db.asm.mt).apply(null, arguments);
  };
  var _0x2fea03 = _0xad46db.dynCall_jijjji = function () {
    return (_0x2fea03 = _0xad46db.dynCall_jijjji = _0xad46db.asm.nt).apply(null, arguments);
  };
  var _0xe03b8a = _0xad46db.dynCall_jijjjii = function () {
    return (_0xe03b8a = _0xad46db.dynCall_jijjjii = _0xad46db.asm.ot).apply(null, arguments);
  };
  var _0x1877d3 = _0xad46db.dynCall_jjiii = function () {
    return (_0x1877d3 = _0xad46db.dynCall_jjiii = _0xad46db.asm.pt).apply(null, arguments);
  };
  var _0x5cd649 = _0xad46db.dynCall_ijijiiiii = function () {
    return (_0x5cd649 = _0xad46db.dynCall_ijijiiiii = _0xad46db.asm.qt).apply(null, arguments);
  };
  var _0x6de156 = _0xad46db.dynCall_ijjjiii = function () {
    return (_0x6de156 = _0xad46db.dynCall_ijjjiii = _0xad46db.asm.rt).apply(null, arguments);
  };
  var _0x4674bd = _0xad46db.dynCall_vijjjiijii = function () {
    return (_0x4674bd = _0xad46db.dynCall_vijjjiijii = _0xad46db.asm.st).apply(null, arguments);
  };
  var _0x4d8104 = _0xad46db.dynCall_ijjjiijii = function () {
    return (_0x4d8104 = _0xad46db.dynCall_ijjjiijii = _0xad46db.asm.tt).apply(null, arguments);
  };
  var _0x1f0004 = _0xad46db.dynCall_vijiiiiii = function () {
    return (_0x1f0004 = _0xad46db.dynCall_vijiiiiii = _0xad46db.asm.ut).apply(null, arguments);
  };
  var _0x4719ef = _0xad46db.dynCall_jfi = function () {
    return (_0x4719ef = _0xad46db.dynCall_jfi = _0xad46db.asm.vt).apply(null, arguments);
  };
  var _0x19b2e5 = _0xad46db.dynCall_fji = function () {
    return (_0x19b2e5 = _0xad46db.dynCall_fji = _0xad46db.asm.wt).apply(null, arguments);
  };
  var _0x2822ad = _0xad46db.dynCall_fdi = function () {
    return (_0x2822ad = _0xad46db.dynCall_fdi = _0xad46db.asm.xt).apply(null, arguments);
  };
  var _0x204196 = _0xad46db.dynCall_dfi = function () {
    return (_0x204196 = _0xad46db.dynCall_dfi = _0xad46db.asm.yt).apply(null, arguments);
  };
  var _0x3529f6 = _0xad46db.dynCall_jidii = function () {
    return (_0x3529f6 = _0xad46db.dynCall_jidii = _0xad46db.asm.zt).apply(null, arguments);
  };
  var _0xe5743f = _0xad46db.dynCall_viiiiiiiji = function () {
    return (_0xe5743f = _0xad46db.dynCall_viiiiiiiji = _0xad46db.asm.At).apply(null, arguments);
  };
  var _0x5d6bef = _0xad46db.dynCall_viiiiiiiiji = function () {
    return (_0x5d6bef = _0xad46db.dynCall_viiiiiiiiji = _0xad46db.asm.Bt).apply(null, arguments);
  };
  var _0x18ecb9 = _0xad46db.dynCall_viiiiiiiiiji = function () {
    return (_0x18ecb9 = _0xad46db.dynCall_viiiiiiiiiji = _0xad46db.asm.Ct).apply(null, arguments);
  };
  var _0x35a81e = _0xad46db.dynCall_ijiijii = function () {
    return (_0x35a81e = _0xad46db.dynCall_ijiijii = _0xad46db.asm.Dt).apply(null, arguments);
  };
  var _0x361083 = _0xad46db.dynCall_vjjiiiii = function () {
    return (_0x361083 = _0xad46db.dynCall_vjjiiiii = _0xad46db.asm.Et).apply(null, arguments);
  };
  var _0x9aae5b = _0xad46db.dynCall_vjjii = function () {
    return (_0x9aae5b = _0xad46db.dynCall_vjjii = _0xad46db.asm.Ft).apply(null, arguments);
  };
  var _0x3ae227 = _0xad46db.dynCall_ijiiji = function () {
    return (_0x3ae227 = _0xad46db.dynCall_ijiiji = _0xad46db.asm.Gt).apply(null, arguments);
  };
  var _0x324f92 = _0xad46db.dynCall_ijiiiii = function () {
    return (_0x324f92 = _0xad46db.dynCall_ijiiiii = _0xad46db.asm.Ht).apply(null, arguments);
  };
  var _0x1a42c9 = _0xad46db.dynCall_ijiiiiji = function () {
    return (_0x1a42c9 = _0xad46db.dynCall_ijiiiiji = _0xad46db.asm.It).apply(null, arguments);
  };
  var _0x166a06 = _0xad46db.dynCall_jiiiiii = function () {
    return (_0x166a06 = _0xad46db.dynCall_jiiiiii = _0xad46db.asm.Jt).apply(null, arguments);
  };
  var _0x5156fd = _0xad46db.dynCall_ddii = function () {
    return (_0x5156fd = _0xad46db.dynCall_ddii = _0xad46db.asm.Kt).apply(null, arguments);
  };
  var _0x26b20d = _0xad46db.dynCall_idiii = function () {
    return (_0x26b20d = _0xad46db.dynCall_idiii = _0xad46db.asm.Lt).apply(null, arguments);
  };
  var _0x534615 = _0xad46db.dynCall_vdiii = function () {
    return (_0x534615 = _0xad46db.dynCall_vdiii = _0xad46db.asm.Mt).apply(null, arguments);
  };
  var _0x4cfdfd = _0xad46db.dynCall_jdii = function () {
    return (_0x4cfdfd = _0xad46db.dynCall_jdii = _0xad46db.asm.Nt).apply(null, arguments);
  };
  var _0x45e177 = _0xad46db.dynCall_iijjji = function () {
    return (_0x45e177 = _0xad46db.dynCall_iijjji = _0xad46db.asm.Ot).apply(null, arguments);
  };
  var _0x162389 = _0xad46db.dynCall_viijjji = function () {
    return (_0x162389 = _0xad46db.dynCall_viijjji = _0xad46db.asm.Pt).apply(null, arguments);
  };
  var _0x41ab67 = _0xad46db.dynCall_vdii = function () {
    return (_0x41ab67 = _0xad46db.dynCall_vdii = _0xad46db.asm.Qt).apply(null, arguments);
  };
  var _0x4229d7 = _0xad46db.dynCall_iiiijii = function () {
    return (_0x4229d7 = _0xad46db.dynCall_iiiijii = _0xad46db.asm.Rt).apply(null, arguments);
  };
  var _0x21f9b3 = _0xad46db.dynCall_jijji = function () {
    return (_0x21f9b3 = _0xad46db.dynCall_jijji = _0xad46db.asm.St).apply(null, arguments);
  };
  var _0x1ad74c = _0xad46db.dynCall_diddi = function () {
    return (_0x1ad74c = _0xad46db.dynCall_diddi = _0xad46db.asm.Tt).apply(null, arguments);
  };
  var _0x237c42 = _0xad46db.dynCall_iijjii = function () {
    return (_0x237c42 = _0xad46db.dynCall_iijjii = _0xad46db.asm.Ut).apply(null, arguments);
  };
  var _0x2db647 = _0xad46db.dynCall_viiiiijji = function () {
    return (_0x2db647 = _0xad46db.dynCall_viiiiijji = _0xad46db.asm.Vt).apply(null, arguments);
  };
  var _0x19b6fc = _0xad46db.dynCall_viiiiji = function () {
    return (_0x19b6fc = _0xad46db.dynCall_viiiiji = _0xad46db.asm.Wt).apply(null, arguments);
  };
  var _0x5227d8 = _0xad46db.dynCall_vijjjii = function () {
    return (_0x5227d8 = _0xad46db.dynCall_vijjjii = _0xad46db.asm.Xt).apply(null, arguments);
  };
  var _0x55628f = _0xad46db.dynCall_jjjji = function () {
    return (_0x55628f = _0xad46db.dynCall_jjjji = _0xad46db.asm.Yt).apply(null, arguments);
  };
  var _0x5b1996 = _0xad46db.dynCall_viijijii = function () {
    return (_0x5b1996 = _0xad46db.dynCall_viijijii = _0xad46db.asm.Zt).apply(null, arguments);
  };
  var _0x2ff4f5 = _0xad46db.dynCall_viijijiii = function () {
    return (_0x2ff4f5 = _0xad46db.dynCall_viijijiii = _0xad46db.asm._t).apply(null, arguments);
  };
  var _0x1e704a = _0xad46db.dynCall_vijiji = function () {
    return (_0x1e704a = _0xad46db.dynCall_vijiji = _0xad46db.asm.$t).apply(null, arguments);
  };
  var _0x6738cd = _0xad46db.dynCall_viijiijiii = function () {
    return (_0x6738cd = _0xad46db.dynCall_viijiijiii = _0xad46db.asm.au).apply(null, arguments);
  };
  var _0x5d8b76 = _0xad46db.dynCall_viiiijiiii = function () {
    return (_0x5d8b76 = _0xad46db.dynCall_viiiijiiii = _0xad46db.asm.bu).apply(null, arguments);
  };
  var _0x564910 = _0xad46db.dynCall_viijjii = function () {
    return (_0x564910 = _0xad46db.dynCall_viijjii = _0xad46db.asm.cu).apply(null, arguments);
  };
  var _0x5ce87c = _0xad46db.dynCall_jiiiiiiiii = function () {
    return (_0x5ce87c = _0xad46db.dynCall_jiiiiiiiii = _0xad46db.asm.du).apply(null, arguments);
  };
  var _0x22b769 = _0xad46db.dynCall_iiiiijii = function () {
    return (_0x22b769 = _0xad46db.dynCall_iiiiijii = _0xad46db.asm.eu).apply(null, arguments);
  };
  var _0x4a59ec = _0xad46db.dynCall_iiiidii = function () {
    return (_0x4a59ec = _0xad46db.dynCall_iiiidii = _0xad46db.asm.fu).apply(null, arguments);
  };
  var _0x3ac559 = _0xad46db.dynCall_iidfii = function () {
    return (_0x3ac559 = _0xad46db.dynCall_iidfii = _0xad46db.asm.gu).apply(null, arguments);
  };
  var _0x8aa2cf = _0xad46db.dynCall_iidfi = function () {
    return (_0x8aa2cf = _0xad46db.dynCall_iidfi = _0xad46db.asm.hu).apply(null, arguments);
  };
  var _0x514fe9 = _0xad46db.dynCall_iiddfi = function () {
    return (_0x514fe9 = _0xad46db.dynCall_iiddfi = _0xad46db.asm.iu).apply(null, arguments);
  };
  var _0x97fe13 = _0xad46db.dynCall_iijfii = function () {
    return (_0x97fe13 = _0xad46db.dynCall_iijfii = _0xad46db.asm.ju).apply(null, arguments);
  };
  var _0x1ecc2b = _0xad46db.dynCall_iijfi = function () {
    return (_0x1ecc2b = _0xad46db.dynCall_iijfi = _0xad46db.asm.ku).apply(null, arguments);
  };
  var _0x46d392 = _0xad46db.dynCall_iijjfi = function () {
    return (_0x46d392 = _0xad46db.dynCall_iijjfi = _0xad46db.asm.lu).apply(null, arguments);
  };
  var _0x2ec604 = _0xad46db.dynCall_iiiiffiiiji = function () {
    return (_0x2ec604 = _0xad46db.dynCall_iiiiffiiiji = _0xad46db.asm.mu).apply(null, arguments);
  };
  var _0x456d6d = _0xad46db.dynCall_iiidfii = function () {
    return (_0x456d6d = _0xad46db.dynCall_iiidfii = _0xad46db.asm.nu).apply(null, arguments);
  };
  var _0x5246b3 = _0xad46db.dynCall_iiijfii = function () {
    return (_0x5246b3 = _0xad46db.dynCall_iiijfii = _0xad46db.asm.ou).apply(null, arguments);
  };
  var _0x58ce0c = _0xad46db.dynCall_jiiiiiii = function () {
    return (_0x58ce0c = _0xad46db.dynCall_jiiiiiii = _0xad46db.asm.pu).apply(null, arguments);
  };
  var _0xf79a23 = _0xad46db.dynCall_fiiiiiii = function () {
    return (_0xf79a23 = _0xad46db.dynCall_fiiiiiii = _0xad46db.asm.qu).apply(null, arguments);
  };
  var _0x4146b5 = _0xad46db.dynCall_iiiiffiiiii = function () {
    return (_0x4146b5 = _0xad46db.dynCall_iiiiffiiiii = _0xad46db.asm.ru).apply(null, arguments);
  };
  var _0x671e5a = _0xad46db.dynCall_iiiidfii = function () {
    return (_0x671e5a = _0xad46db.dynCall_iiiidfii = _0xad46db.asm.su).apply(null, arguments);
  };
  var _0x1169d1 = _0xad46db.dynCall_iiiijfii = function () {
    return (_0x1169d1 = _0xad46db.dynCall_iiiijfii = _0xad46db.asm.tu).apply(null, arguments);
  };
  var _0x142440 = _0xad46db.dynCall_iiiiffii = function () {
    return (_0x142440 = _0xad46db.dynCall_iiiiffii = _0xad46db.asm.uu).apply(null, arguments);
  };
  var _0x5e1331 = _0xad46db.dynCall_jiiiiji = function () {
    return (_0x5e1331 = _0xad46db.dynCall_jiiiiji = _0xad46db.asm.vu).apply(null, arguments);
  };
  var _0x925c54 = _0xad46db.dynCall_fiiiifi = function () {
    return (_0x925c54 = _0xad46db.dynCall_fiiiifi = _0xad46db.asm.wu).apply(null, arguments);
  };
  var _0x2ad25e = _0xad46db.dynCall_didii = function () {
    return (_0x2ad25e = _0xad46db.dynCall_didii = _0xad46db.asm.xu).apply(null, arguments);
  };
  var _0x56ad0f = _0xad46db.dynCall_iiijjii = function () {
    return (_0x56ad0f = _0xad46db.dynCall_iiijjii = _0xad46db.asm.yu).apply(null, arguments);
  };
  var _0x4c98c9 = _0xad46db.dynCall_vidiji = function () {
    return (_0x4c98c9 = _0xad46db.dynCall_vidiji = _0xad46db.asm.zu).apply(null, arguments);
  };
  var _0x481571 = _0xad46db.dynCall_vidjii = function () {
    return (_0x481571 = _0xad46db.dynCall_vidjii = _0xad46db.asm.Au).apply(null, arguments);
  };
  var _0x1d1a00 = _0xad46db.dynCall_vij = function () {
    return (_0x1d1a00 = _0xad46db.dynCall_vij = _0xad46db.asm.Bu).apply(null, arguments);
  };
  var _0x1ee174 = _0xad46db.dynCall_iiiijiii = function () {
    return (_0x1ee174 = _0xad46db.dynCall_iiiijiii = _0xad46db.asm.Cu).apply(null, arguments);
  };
  var _0x24f51e = _0xad46db.dynCall_iiiij = function () {
    return (_0x24f51e = _0xad46db.dynCall_iiiij = _0xad46db.asm.Du).apply(null, arguments);
  };
  var _0x5d50ad = _0xad46db.dynCall_ijj = function () {
    return (_0x5d50ad = _0xad46db.dynCall_ijj = _0xad46db.asm.Eu).apply(null, arguments);
  };
  var _0x1d5631 = _0xad46db.dynCall_vjji = function () {
    return (_0x1d5631 = _0xad46db.dynCall_vjji = _0xad46db.asm.Fu).apply(null, arguments);
  };
  var _0x2ab315 = _0xad46db.dynCall_ij = function () {
    return (_0x2ab315 = _0xad46db.dynCall_ij = _0xad46db.asm.Gu).apply(null, arguments);
  };
  var _0xece088 = _0xad46db.dynCall_vif = function () {
    return (_0xece088 = _0xad46db.dynCall_vif = _0xad46db.asm.Hu).apply(null, arguments);
  };
  var _0x1c6eb6 = _0xad46db.dynCall_vid = function () {
    return (_0x1c6eb6 = _0xad46db.dynCall_vid = _0xad46db.asm.Iu).apply(null, arguments);
  };
  var _0x1bb371 = _0xad46db.dynCall_viiiiif = function () {
    return (_0x1bb371 = _0xad46db.dynCall_viiiiif = _0xad46db.asm.Ju).apply(null, arguments);
  };
  var _0x57f6f7 = _0xad46db.dynCall_viiiif = function () {
    return (_0x57f6f7 = _0xad46db.dynCall_viiiif = _0xad46db.asm.Ku).apply(null, arguments);
  };
  var _0x3eb001 = _0xad46db.dynCall_viiiiiif = function () {
    return (_0x3eb001 = _0xad46db.dynCall_viiiiiif = _0xad46db.asm.Lu).apply(null, arguments);
  };
  var _0x576ec8 = _0xad46db.dynCall_iiif = function () {
    return (_0x576ec8 = _0xad46db.dynCall_iiif = _0xad46db.asm.Mu).apply(null, arguments);
  };
  var _0x26f7f9 = _0xad46db.dynCall_fif = function () {
    return (_0x26f7f9 = _0xad46db.dynCall_fif = _0xad46db.asm.Nu).apply(null, arguments);
  };
  var _0x520451 = _0xad46db.dynCall_iiiiiifff = function () {
    return (_0x520451 = _0xad46db.dynCall_iiiiiifff = _0xad46db.asm.Ou).apply(null, arguments);
  };
  var _0x4e001f = _0xad46db.dynCall_iiiiiifiif = function () {
    return (_0x4e001f = _0xad46db.dynCall_iiiiiifiif = _0xad46db.asm.Pu).apply(null, arguments);
  };
  var _0x2703ed = _0xad46db.dynCall_iiiiiiifiif = function () {
    return (_0x2703ed = _0xad46db.dynCall_iiiiiiifiif = _0xad46db.asm.Qu).apply(null, arguments);
  };
  var _0x1848a5 = _0xad46db.dynCall_fiff = function () {
    return (_0x1848a5 = _0xad46db.dynCall_fiff = _0xad46db.asm.Ru).apply(null, arguments);
  };
  var _0x5aa018 = _0xad46db.dynCall_fiiiiiifiifif = function () {
    return (_0x5aa018 = _0xad46db.dynCall_fiiiiiifiifif = _0xad46db.asm.Su).apply(null, arguments);
  };
  var _0x391cd2 = _0xad46db.dynCall_fiiiiiifiiiif = function () {
    return (_0x391cd2 = _0xad46db.dynCall_fiiiiiifiiiif = _0xad46db.asm.Tu).apply(null, arguments);
  };
  var _0x385617 = _0xad46db.dynCall_iifiiiijii = function () {
    return (_0x385617 = _0xad46db.dynCall_iifiiiijii = _0xad46db.asm.Uu).apply(null, arguments);
  };
  var _0x4d73a7 = _0xad46db.dynCall_vifijii = function () {
    return (_0x4d73a7 = _0xad46db.dynCall_vifijii = _0xad46db.asm.Vu).apply(null, arguments);
  };
  var _0x500b26 = _0xad46db.dynCall_iiiifffiii = function () {
    return (_0x500b26 = _0xad46db.dynCall_iiiifffiii = _0xad46db.asm.Wu).apply(null, arguments);
  };
  var _0x3ddff4 = _0xad46db.dynCall_iiiifffffi = function () {
    return (_0x3ddff4 = _0xad46db.dynCall_iiiifffffi = _0xad46db.asm.Xu).apply(null, arguments);
  };
  var _0x4ad061 = _0xad46db.dynCall_viffiiiif = function () {
    return (_0x4ad061 = _0xad46db.dynCall_viffiiiif = _0xad46db.asm.Yu).apply(null, arguments);
  };
  var _0x3e40c6 = _0xad46db.dynCall_viffiifffffiii = function () {
    return (_0x3e40c6 = _0xad46db.dynCall_viffiifffffiii = _0xad46db.asm.Zu).apply(null, arguments);
  };
  var _0x5b6066 = _0xad46db.dynCall_viffffiifffiiiiif = function () {
    return (_0x5b6066 = _0xad46db.dynCall_viffffiifffiiiiif = _0xad46db.asm._u).apply(null, arguments);
  };
  var _0x4107cd = _0xad46db.dynCall_iiiifffffii = function () {
    return (_0x4107cd = _0xad46db.dynCall_iiiifffffii = _0xad46db.asm.$u).apply(null, arguments);
  };
  var _0x24a922 = _0xad46db.dynCall_viiiiiiiiiiifii = function () {
    return (_0x24a922 = _0xad46db.dynCall_viiiiiiiiiiifii = _0xad46db.asm.av).apply(null, arguments);
  };
  var _0x26a78e = _0xad46db.dynCall_viff = function () {
    return (_0x26a78e = _0xad46db.dynCall_viff = _0xad46db.asm.bv).apply(null, arguments);
  };
  var _0x2a8333 = _0xad46db.dynCall_iiiiifiiiiif = function () {
    return (_0x2a8333 = _0xad46db.dynCall_iiiiifiiiiif = _0xad46db.asm.cv).apply(null, arguments);
  };
  var _0x1988aa = _0xad46db.dynCall_viiifiiiii = function () {
    return (_0x1988aa = _0xad46db.dynCall_viiifiiiii = _0xad46db.asm.dv).apply(null, arguments);
  };
  var _0x3620e0 = _0xad46db.dynCall_viiiifiiiiif = function () {
    return (_0x3620e0 = _0xad46db.dynCall_viiiifiiiiif = _0xad46db.asm.ev).apply(null, arguments);
  };
  var _0x1ce3cb = _0xad46db.dynCall_iifff = function () {
    return (_0x1ce3cb = _0xad46db.dynCall_iifff = _0xad46db.asm.fv).apply(null, arguments);
  };
  var _0x5a2b6a = _0xad46db.dynCall_iif = function () {
    return (_0x5a2b6a = _0xad46db.dynCall_iif = _0xad46db.asm.gv).apply(null, arguments);
  };
  var _0x3b97cc = _0xad46db.dynCall_viijijj = function () {
    return (_0x3b97cc = _0xad46db.dynCall_viijijj = _0xad46db.asm.hv).apply(null, arguments);
  };
  var _0x35c486 = _0xad46db.dynCall_viijj = function () {
    return (_0x35c486 = _0xad46db.dynCall_viijj = _0xad46db.asm.iv).apply(null, arguments);
  };
  var _0x4e6a2d = _0xad46db.dynCall_viiiij = function () {
    return (_0x4e6a2d = _0xad46db.dynCall_viiiij = _0xad46db.asm.jv).apply(null, arguments);
  };
  var _0x7a80 = _0xad46db.dynCall_iiijji = function () {
    return (_0x7a80 = _0xad46db.dynCall_iiijji = _0xad46db.asm.kv).apply(null, arguments);
  };
  var _0x3bfc0a = _0xad46db.dynCall_ijjiiiii = function () {
    return (_0x3bfc0a = _0xad46db.dynCall_ijjiiiii = _0xad46db.asm.lv).apply(null, arguments);
  };
  var _0x15f3e8 = _0xad46db.dynCall_vidd = function () {
    return (_0x15f3e8 = _0xad46db.dynCall_vidd = _0xad46db.asm.mv).apply(null, arguments);
  };
  var _0x4171e9 = _0xad46db.dynCall_iiiiiifffiiifiii = function () {
    return (_0x4171e9 = _0xad46db.dynCall_iiiiiifffiiifiii = _0xad46db.asm.nv).apply(null, arguments);
  };
  var _0x175f17 = _0xad46db.dynCall_viid = function () {
    return (_0x175f17 = _0xad46db.dynCall_viid = _0xad46db.asm.ov).apply(null, arguments);
  };
  var _0x11941d = _0xad46db.dynCall_viiif = function () {
    return (_0x11941d = _0xad46db.dynCall_viiif = _0xad46db.asm.pv).apply(null, arguments);
  };
  var _0x54d0d2 = _0xad46db.dynCall_fiiiif = function () {
    return (_0x54d0d2 = _0xad46db.dynCall_fiiiif = _0xad46db.asm.qv).apply(null, arguments);
  };
  var _0x4afbd7 = _0xad46db.dynCall_iiiiiff = function () {
    return (_0x4afbd7 = _0xad46db.dynCall_iiiiiff = _0xad46db.asm.rv).apply(null, arguments);
  };
  var _0x1aa11d = _0xad46db.dynCall_viffff = function () {
    return (_0x1aa11d = _0xad46db.dynCall_viffff = _0xad46db.asm.sv).apply(null, arguments);
  };
  var _0x3d947e = _0xad46db.dynCall_vifff = function () {
    return (_0x3d947e = _0xad46db.dynCall_vifff = _0xad46db.asm.tv).apply(null, arguments);
  };
  var _0x5da580 = _0xad46db.dynCall_viifff = function () {
    return (_0x5da580 = _0xad46db.dynCall_viifff = _0xad46db.asm.uv).apply(null, arguments);
  };
  var _0x5e7472 = _0xad46db.dynCall_vf = function () {
    return (_0x5e7472 = _0xad46db.dynCall_vf = _0xad46db.asm.vv).apply(null, arguments);
  };
  var _0x33fa3d = _0xad46db.dynCall_vffff = function () {
    return (_0x33fa3d = _0xad46db.dynCall_vffff = _0xad46db.asm.wv).apply(null, arguments);
  };
  var _0x494fd5 = _0xad46db.dynCall_vff = function () {
    return (_0x494fd5 = _0xad46db.dynCall_vff = _0xad46db.asm.xv).apply(null, arguments);
  };
  var _0x559bb8 = _0xad46db.dynCall_fff = function () {
    return (_0x559bb8 = _0xad46db.dynCall_fff = _0xad46db.asm.yv).apply(null, arguments);
  };
  var _0x1a98df = _0xad46db.dynCall_f = function () {
    return (_0x1a98df = _0xad46db.dynCall_f = _0xad46db.asm.zv).apply(null, arguments);
  };
  var _0x50366e = _0xad46db.dynCall_vfff = function () {
    return (_0x50366e = _0xad46db.dynCall_vfff = _0xad46db.asm.Av).apply(null, arguments);
  };
  var _0x3e82f6 = _0xad46db.dynCall_ff = function () {
    return (_0x3e82f6 = _0xad46db.dynCall_ff = _0xad46db.asm.Bv).apply(null, arguments);
  };
  var _0x2dfd03 = _0xad46db.dynCall_iiifiifii = function () {
    return (_0x2dfd03 = _0xad46db.dynCall_iiifiifii = _0xad46db.asm.Cv).apply(null, arguments);
  };
  var _0x5c27d0 = _0xad46db.dynCall_fiif = function () {
    return (_0x5c27d0 = _0xad46db.dynCall_fiif = _0xad46db.asm.Dv).apply(null, arguments);
  };
  var _0xf9f014 = _0xad46db.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0xf9f014 = _0xad46db.dynCall_iiiiiiffiiiiiiiiiffffiii = _0xad46db.asm.Ev).apply(null, arguments);
  };
  var _0x1f9952 = _0xad46db.dynCall_viififi = function () {
    return (_0x1f9952 = _0xad46db.dynCall_viififi = _0xad46db.asm.Fv).apply(null, arguments);
  };
  var _0x4d567f = _0xad46db.dynCall_viiiiiiiijiii = function () {
    return (_0x4d567f = _0xad46db.dynCall_viiiiiiiijiii = _0xad46db.asm.Gv).apply(null, arguments);
  };
  var _0x318943 = _0xad46db.dynCall_d = function () {
    return (_0x318943 = _0xad46db.dynCall_d = _0xad46db.asm.Hv).apply(null, arguments);
  };
  function _0x30dec0(_0x371381, _0x25ea3e) {
    var _0x324b9c = _0xd24b5e();
    try {
      return _0x48001e(_0x371381, _0x25ea3e);
    } catch (_0x3a8e74) {
      _0x114b19(_0x324b9c);
      if (_0x3a8e74 !== _0x3a8e74 + 0 && _0x3a8e74 !== "longjmp") {
        throw _0x3a8e74;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x314e63(_0x1677b8, _0x1a26cb, _0x11bcc8) {
    var _0x456bf4 = _0xd24b5e();
    try {
      return _0x1123cc(_0x1677b8, _0x1a26cb, _0x11bcc8);
    } catch (_0x363fcf) {
      _0x114b19(_0x456bf4);
      if (_0x363fcf !== _0x363fcf + 0 && _0x363fcf !== "longjmp") {
        throw _0x363fcf;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xee52a7(_0x2de16a, _0x353432, _0x1507bf, _0x6ddb30) {
    var _0x216154 = _0xd24b5e();
    try {
      _0x1d6d2d(_0x2de16a, _0x353432, _0x1507bf, _0x6ddb30);
    } catch (_0x4b4adb) {
      _0x114b19(_0x216154);
      if (_0x4b4adb !== _0x4b4adb + 0 && _0x4b4adb !== "longjmp") {
        throw _0x4b4adb;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x13074d(_0x3a8de8, _0x1ca899, _0x374648, _0x3b1807, _0x18b8e9, _0x49c7b6) {
    var _0xb924f7 = _0xd24b5e();
    try {
      return _0x4477f3(_0x3a8de8, _0x1ca899, _0x374648, _0x3b1807, _0x18b8e9, _0x49c7b6);
    } catch (_0xe9af71) {
      _0x114b19(_0xb924f7);
      if (_0xe9af71 !== _0xe9af71 + 0 && _0xe9af71 !== "longjmp") {
        throw _0xe9af71;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4cf552(_0x532924, _0x53736b, _0x4d9e08, _0x422728) {
    var _0x58815c = _0xd24b5e();
    try {
      return _0x40dc82(_0x532924, _0x53736b, _0x4d9e08, _0x422728);
    } catch (_0x406e89) {
      _0x114b19(_0x58815c);
      if (_0x406e89 !== _0x406e89 + 0 && _0x406e89 !== "longjmp") {
        throw _0x406e89;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x253ecc(_0x278a86, _0x4a2679, _0x359fb3, _0x60734e, _0x464ce9) {
    var _0x59d69a = _0xd24b5e();
    try {
      _0x493d36(_0x278a86, _0x4a2679, _0x359fb3, _0x60734e, _0x464ce9);
    } catch (_0xd800fb) {
      _0x114b19(_0x59d69a);
      if (_0xd800fb !== _0xd800fb + 0 && _0xd800fb !== "longjmp") {
        throw _0xd800fb;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3ff5b9(_0x24db94, _0x508d26, _0x38065f, _0x212905, _0x5dca80) {
    var _0x3c4a3d = _0xd24b5e();
    try {
      return _0x10c14c(_0x24db94, _0x508d26, _0x38065f, _0x212905, _0x5dca80);
    } catch (_0x4a9b4b) {
      _0x114b19(_0x3c4a3d);
      if (_0x4a9b4b !== _0x4a9b4b + 0 && _0x4a9b4b !== "longjmp") {
        throw _0x4a9b4b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3b157d(_0x484f40, _0x1eb6db, _0x1f4b99, _0xe6d112) {
    var _0x42e700 = _0xd24b5e();
    try {
      return _0x31e6bb(_0x484f40, _0x1eb6db, _0x1f4b99, _0xe6d112);
    } catch (_0xcfe23c) {
      _0x114b19(_0x42e700);
      if (_0xcfe23c !== _0xcfe23c + 0 && _0xcfe23c !== "longjmp") {
        throw _0xcfe23c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xa4c31c(_0x315fa8, _0x168ca2, _0x3e649b, _0x5eed41) {
    var _0x562b2f = _0xd24b5e();
    try {
      return _0x3be43e(_0x315fa8, _0x168ca2, _0x3e649b, _0x5eed41);
    } catch (_0x1582f1) {
      _0x114b19(_0x562b2f);
      if (_0x1582f1 !== _0x1582f1 + 0 && _0x1582f1 !== "longjmp") {
        throw _0x1582f1;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x44eb6c(_0x38b772, _0x4dc01f, _0x460e70, _0x4b636c) {
    var _0x3dbf23 = _0xd24b5e();
    try {
      _0x243421(_0x38b772, _0x4dc01f, _0x460e70, _0x4b636c);
    } catch (_0x85f69b) {
      _0x114b19(_0x3dbf23);
      if (_0x85f69b !== _0x85f69b + 0 && _0x85f69b !== "longjmp") {
        throw _0x85f69b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4ef058(_0x17e888, _0x45aa90, _0x54f379) {
    var _0x103cca = _0xd24b5e();
    try {
      _0x172fa8(_0x17e888, _0x45aa90, _0x54f379);
    } catch (_0x8f30f3) {
      _0x114b19(_0x103cca);
      if (_0x8f30f3 !== _0x8f30f3 + 0 && _0x8f30f3 !== "longjmp") {
        throw _0x8f30f3;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x56957d(_0x2604fd, _0x4beceb) {
    var _0x3a0e20 = _0xd24b5e();
    try {
      _0xc7c4be(_0x2604fd, _0x4beceb);
    } catch (_0x43ef1d) {
      _0x114b19(_0x3a0e20);
      if (_0x43ef1d !== _0x43ef1d + 0 && _0x43ef1d !== "longjmp") {
        throw _0x43ef1d;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x524b99(_0x312bba) {
    var _0x17e210 = _0xd24b5e();
    try {
      _0x111b3b(_0x312bba);
    } catch (_0x5d0070) {
      _0x114b19(_0x17e210);
      if (_0x5d0070 !== _0x5d0070 + 0 && _0x5d0070 !== "longjmp") {
        throw _0x5d0070;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x5b2a01(_0x1e0a56) {
    var _0x3d483e = _0xd24b5e();
    try {
      return _0x21675e(_0x1e0a56);
    } catch (_0x3a8b08) {
      _0x114b19(_0x3d483e);
      if (_0x3a8b08 !== _0x3a8b08 + 0 && _0x3a8b08 !== "longjmp") {
        throw _0x3a8b08;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2fff52(_0x22bd34, _0x4f6eb0, _0x5826d9, _0x3a129d, _0x5c8454, _0xd199f9, _0x3ed9c0, _0x5749c1) {
    var _0x1e52da = _0xd24b5e();
    try {
      return _0x582f5d(_0x22bd34, _0x4f6eb0, _0x5826d9, _0x3a129d, _0x5c8454, _0xd199f9, _0x3ed9c0, _0x5749c1);
    } catch (_0x9e6230) {
      _0x114b19(_0x1e52da);
      if (_0x9e6230 !== _0x9e6230 + 0 && _0x9e6230 !== "longjmp") {
        throw _0x9e6230;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2c5783(_0x516851, _0x36c91e, _0x334a15, _0x2844b6, _0x78b147, _0xc94f56) {
    var _0x4f55f8 = _0xd24b5e();
    try {
      _0x45902d(_0x516851, _0x36c91e, _0x334a15, _0x2844b6, _0x78b147, _0xc94f56);
    } catch (_0x21bf0c) {
      _0x114b19(_0x4f55f8);
      if (_0x21bf0c !== _0x21bf0c + 0 && _0x21bf0c !== "longjmp") {
        throw _0x21bf0c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3e9c67(_0x5059f3, _0x23946c, _0x551036, _0x549465, _0x15dfa5, _0x544f21, _0x66ea0) {
    var _0x444a0e = _0xd24b5e();
    try {
      return _0x4113c4(_0x5059f3, _0x23946c, _0x551036, _0x549465, _0x15dfa5, _0x544f21, _0x66ea0);
    } catch (_0x27e3c7) {
      _0x114b19(_0x444a0e);
      if (_0x27e3c7 !== _0x27e3c7 + 0 && _0x27e3c7 !== "longjmp") {
        throw _0x27e3c7;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x29e4e1(_0x22a035, _0x16ae3a, _0x3e1ae5, _0x2b686b, _0x1f8ad8, _0x5376dd, _0xdfc731, _0x88846) {
    var _0x571334 = _0xd24b5e();
    try {
      _0x45f597(_0x22a035, _0x16ae3a, _0x3e1ae5, _0x2b686b, _0x1f8ad8, _0x5376dd, _0xdfc731, _0x88846);
    } catch (_0x27f807) {
      _0x114b19(_0x571334);
      if (_0x27f807 !== _0x27f807 + 0 && _0x27f807 !== "longjmp") {
        throw _0x27f807;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x44904e(_0x267541, _0xe4ea75, _0x2b5c6e, _0x223f7c, _0x56c15c, _0x3dcc9f, _0x51d12b) {
    var _0x463d14 = _0xd24b5e();
    try {
      _0x5a8fd7(_0x267541, _0xe4ea75, _0x2b5c6e, _0x223f7c, _0x56c15c, _0x3dcc9f, _0x51d12b);
    } catch (_0x357814) {
      _0x114b19(_0x463d14);
      if (_0x357814 !== _0x357814 + 0 && _0x357814 !== "longjmp") {
        throw _0x357814;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xfefc7(_0x216965, _0x1e2c13, _0x3a090a, _0x1ad7c5, _0xc25fef, _0x48ceb0, _0x30df69, _0x3cf98f, _0x4c9bad) {
    var _0x19f251 = _0xd24b5e();
    try {
      return _0x149bf5(_0x216965, _0x1e2c13, _0x3a090a, _0x1ad7c5, _0xc25fef, _0x48ceb0, _0x30df69, _0x3cf98f, _0x4c9bad);
    } catch (_0x171976) {
      _0x114b19(_0x19f251);
      if (_0x171976 !== _0x171976 + 0 && _0x171976 !== "longjmp") {
        throw _0x171976;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x170f09(_0x15c3e8, _0x2e18a4, _0x2126ad, _0x36ccb8, _0x2de97d, _0x307786, _0x54e0b0, _0x502d72, _0x5823ec) {
    var _0x11151e = _0xd24b5e();
    try {
      _0x1eeddd(_0x15c3e8, _0x2e18a4, _0x2126ad, _0x36ccb8, _0x2de97d, _0x307786, _0x54e0b0, _0x502d72, _0x5823ec);
    } catch (_0x131f61) {
      _0x114b19(_0x11151e);
      if (_0x131f61 !== _0x131f61 + 0 && _0x131f61 !== "longjmp") {
        throw _0x131f61;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4345d5(_0x895869, _0xeeb953, _0x524fe3, _0x1157af, _0x38b8f7, _0x1e5b22, _0x43000e, _0x3d0b6a, _0x6f784b, _0x182f57, _0x43bbcb) {
    var _0x343dca = _0xd24b5e();
    try {
      _0xbd9176(_0x895869, _0xeeb953, _0x524fe3, _0x1157af, _0x38b8f7, _0x1e5b22, _0x43000e, _0x3d0b6a, _0x6f784b, _0x182f57, _0x43bbcb);
    } catch (_0x29bbd7) {
      _0x114b19(_0x343dca);
      if (_0x29bbd7 !== _0x29bbd7 + 0 && _0x29bbd7 !== "longjmp") {
        throw _0x29bbd7;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x566935(_0x3fa702, _0x5d96c1, _0x5903ce, _0x49ac63, _0x344aba, _0x14ccf7, _0x474aee, _0x44b77c, _0x329d17, _0x1794c2) {
    var _0xaca489 = _0xd24b5e();
    try {
      _0x11301d(_0x3fa702, _0x5d96c1, _0x5903ce, _0x49ac63, _0x344aba, _0x14ccf7, _0x474aee, _0x44b77c, _0x329d17, _0x1794c2);
    } catch (_0x13d657) {
      _0x114b19(_0xaca489);
      if (_0x13d657 !== _0x13d657 + 0 && _0x13d657 !== "longjmp") {
        throw _0x13d657;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1cf8bb(_0x367889, _0x54d8ca, _0x2249ae) {
    var _0x48553d = _0xd24b5e();
    try {
      return _0xecad5a(_0x367889, _0x54d8ca, _0x2249ae);
    } catch (_0x24d1e8) {
      _0x114b19(_0x48553d);
      if (_0x24d1e8 !== _0x24d1e8 + 0 && _0x24d1e8 !== "longjmp") {
        throw _0x24d1e8;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x39281e(_0x44853d, _0x256341, _0x3d78dd) {
    var _0x434cc0 = _0xd24b5e();
    try {
      return _0x50afcf(_0x44853d, _0x256341, _0x3d78dd);
    } catch (_0x179d91) {
      _0x114b19(_0x434cc0);
      if (_0x179d91 !== _0x179d91 + 0 && _0x179d91 !== "longjmp") {
        throw _0x179d91;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xc061a6(_0x3ecdcb, _0x2a7441, _0x19abc6, _0x32cded, _0x6eb9a9) {
    var _0x55c45b = _0xd24b5e();
    try {
      _0x14361e(_0x3ecdcb, _0x2a7441, _0x19abc6, _0x32cded, _0x6eb9a9);
    } catch (_0x40b5ab) {
      _0x114b19(_0x55c45b);
      if (_0x40b5ab !== _0x40b5ab + 0 && _0x40b5ab !== "longjmp") {
        throw _0x40b5ab;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xde6dc9(_0x44aeb9, _0x920cb4, _0x5e14cf, _0x30e980, _0x230a2b) {
    var _0x19fed7 = _0xd24b5e();
    try {
      _0x39dba0(_0x44aeb9, _0x920cb4, _0x5e14cf, _0x30e980, _0x230a2b);
    } catch (_0x12c7b1) {
      _0x114b19(_0x19fed7);
      if (_0x12c7b1 !== _0x12c7b1 + 0 && _0x12c7b1 !== "longjmp") {
        throw _0x12c7b1;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4ecfe1(_0x58a5ba, _0x4932ad, _0x1f2611, _0x4b1d79, _0x4db15b) {
    var _0xd0077f = _0xd24b5e();
    try {
      return _0x374ae6(_0x58a5ba, _0x4932ad, _0x1f2611, _0x4b1d79, _0x4db15b);
    } catch (_0x5eb57c) {
      _0x114b19(_0xd0077f);
      if (_0x5eb57c !== _0x5eb57c + 0 && _0x5eb57c !== "longjmp") {
        throw _0x5eb57c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x51cdc7(_0x173bf3, _0x8795b3, _0x4fc2fb, _0x2fac2e, _0x36caa5) {
    var _0x102f6b = _0xd24b5e();
    try {
      return _0x36f44c(_0x173bf3, _0x8795b3, _0x4fc2fb, _0x2fac2e, _0x36caa5);
    } catch (_0x1a5b3c) {
      _0x114b19(_0x102f6b);
      if (_0x1a5b3c !== _0x1a5b3c + 0 && _0x1a5b3c !== "longjmp") {
        throw _0x1a5b3c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x18de3c(_0x1116fe, _0x4d8f98, _0x172bc9, _0x40331a, _0x2b9413) {
    var _0x489bec = _0xd24b5e();
    try {
      return _0x3ade22(_0x1116fe, _0x4d8f98, _0x172bc9, _0x40331a, _0x2b9413);
    } catch (_0x4a0aec) {
      _0x114b19(_0x489bec);
      if (_0x4a0aec !== _0x4a0aec + 0 && _0x4a0aec !== "longjmp") {
        throw _0x4a0aec;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x32f1f4(_0x3fe666, _0x59dee9, _0x3c3652, _0x3730d2, _0x15a272, _0x21c1ff) {
    var _0x1cf33d = _0xd24b5e();
    try {
      _0x47e548(_0x3fe666, _0x59dee9, _0x3c3652, _0x3730d2, _0x15a272, _0x21c1ff);
    } catch (_0x4efbb8) {
      _0x114b19(_0x1cf33d);
      if (_0x4efbb8 !== _0x4efbb8 + 0 && _0x4efbb8 !== "longjmp") {
        throw _0x4efbb8;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x11c1a5(_0x3a9f6a, _0x3b92ca, _0x2dd9dc, _0x4c281b, _0xd03a4a, _0x43e275) {
    var _0x304430 = _0xd24b5e();
    try {
      _0x2622e1(_0x3a9f6a, _0x3b92ca, _0x2dd9dc, _0x4c281b, _0xd03a4a, _0x43e275);
    } catch (_0x44a403) {
      _0x114b19(_0x304430);
      if (_0x44a403 !== _0x44a403 + 0 && _0x44a403 !== "longjmp") {
        throw _0x44a403;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x599847(_0x4bd8c0, _0x5ee2d9, _0x1da735, _0x56ab19) {
    var _0xaaed0c = _0xd24b5e();
    try {
      _0x22b1c7(_0x4bd8c0, _0x5ee2d9, _0x1da735, _0x56ab19);
    } catch (_0x363354) {
      _0x114b19(_0xaaed0c);
      if (_0x363354 !== _0x363354 + 0 && _0x363354 !== "longjmp") {
        throw _0x363354;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x31ebaa(_0x32671b, _0x82b8b4, _0x494127) {
    var _0x5696f5 = _0xd24b5e();
    try {
      _0x2e6c4b(_0x32671b, _0x82b8b4, _0x494127);
    } catch (_0x444f07) {
      _0x114b19(_0x5696f5);
      if (_0x444f07 !== _0x444f07 + 0 && _0x444f07 !== "longjmp") {
        throw _0x444f07;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x28ad13(_0x29a5d5, _0x23b361, _0x4f0cae, _0xf5dec0, _0x43008b, _0x49b292, _0x5a0fb8, _0x26643f, _0x5c77bf, _0x1fd9b0, _0x323621, _0x92f783, _0x1c2404, _0x10e6d8, _0x3a1351, _0x1bd96e, _0x2001d2) {
    var _0x1f32ad = _0xd24b5e();
    try {
      _0x1f4887(_0x29a5d5, _0x23b361, _0x4f0cae, _0xf5dec0, _0x43008b, _0x49b292, _0x5a0fb8, _0x26643f, _0x5c77bf, _0x1fd9b0, _0x323621, _0x92f783, _0x1c2404, _0x10e6d8, _0x3a1351, _0x1bd96e, _0x2001d2);
    } catch (_0x2db7a3) {
      _0x114b19(_0x1f32ad);
      if (_0x2db7a3 !== _0x2db7a3 + 0 && _0x2db7a3 !== "longjmp") {
        throw _0x2db7a3;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x32235f(_0x48ceef, _0x4907ff, _0x24e041, _0x32a233, _0x2a16d0, _0x455b73, _0x52ac9f, _0x537987, _0x3325c5, _0x7e214b, _0x17a118, _0x54300e, _0x588257, _0xaa16d6, _0xc80ccd, _0x4f50b8, _0x284a08, _0x2d5506) {
    var _0x3ad34a = _0xd24b5e();
    try {
      _0x3230fb(_0x48ceef, _0x4907ff, _0x24e041, _0x32a233, _0x2a16d0, _0x455b73, _0x52ac9f, _0x537987, _0x3325c5, _0x7e214b, _0x17a118, _0x54300e, _0x588257, _0xaa16d6, _0xc80ccd, _0x4f50b8, _0x284a08, _0x2d5506);
    } catch (_0x1f708f) {
      _0x114b19(_0x3ad34a);
      if (_0x1f708f !== _0x1f708f + 0 && _0x1f708f !== "longjmp") {
        throw _0x1f708f;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3ff92b(_0xedfb55, _0x3f05d2, _0x2d90aa, _0x2fb6a2, _0x19af2f) {
    var _0x1b3783 = _0xd24b5e();
    try {
      _0x505cfd(_0xedfb55, _0x3f05d2, _0x2d90aa, _0x2fb6a2, _0x19af2f);
    } catch (_0x2158e6) {
      _0x114b19(_0x1b3783);
      if (_0x2158e6 !== _0x2158e6 + 0 && _0x2158e6 !== "longjmp") {
        throw _0x2158e6;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x370310(_0x4b8d91, _0x4a1ce7, _0x15cf0f, _0x35a67a) {
    var _0xd00b03 = _0xd24b5e();
    try {
      _0x5b668f(_0x4b8d91, _0x4a1ce7, _0x15cf0f, _0x35a67a);
    } catch (_0x1a28aa) {
      _0x114b19(_0xd00b03);
      if (_0x1a28aa !== _0x1a28aa + 0 && _0x1a28aa !== "longjmp") {
        throw _0x1a28aa;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2d831f(_0x35e072, _0x15fae7, _0x2ea648, _0x9f7e, _0x376bc0, _0x45f91a, _0xb6654d, _0x42233f, _0x2b30f1, _0x52f67b, _0x38825c, _0x1b689f, _0x4067fe) {
    var _0x435b97 = _0xd24b5e();
    try {
      _0x115fe9(_0x35e072, _0x15fae7, _0x2ea648, _0x9f7e, _0x376bc0, _0x45f91a, _0xb6654d, _0x42233f, _0x2b30f1, _0x52f67b, _0x38825c, _0x1b689f, _0x4067fe);
    } catch (_0x38bf07) {
      _0x114b19(_0x435b97);
      if (_0x38bf07 !== _0x38bf07 + 0 && _0x38bf07 !== "longjmp") {
        throw _0x38bf07;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x55c9da(_0x21c8c2, _0x29a336, _0x412d65, _0x37c7a5, _0x55e5ac, _0x5db3e3) {
    var _0x509843 = _0xd24b5e();
    try {
      _0x8805cb(_0x21c8c2, _0x29a336, _0x412d65, _0x37c7a5, _0x55e5ac, _0x5db3e3);
    } catch (_0x4c6de0) {
      _0x114b19(_0x509843);
      if (_0x4c6de0 !== _0x4c6de0 + 0 && _0x4c6de0 !== "longjmp") {
        throw _0x4c6de0;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4cc3cd(_0x590b9f, _0x44cb6b, _0x5e7923, _0x43da54, _0x5ade67, _0x3338a0, _0x2291ac, _0x554aa7, _0x52d11c, _0x241ed2) {
    var _0x401e2c = _0xd24b5e();
    try {
      return _0x326be3(_0x590b9f, _0x44cb6b, _0x5e7923, _0x43da54, _0x5ade67, _0x3338a0, _0x2291ac, _0x554aa7, _0x52d11c, _0x241ed2);
    } catch (_0x5bf307) {
      _0x114b19(_0x401e2c);
      if (_0x5bf307 !== _0x5bf307 + 0 && _0x5bf307 !== "longjmp") {
        throw _0x5bf307;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1351d3(_0x2ae5f2, _0x585562) {
    var _0x53b8f3 = _0xd24b5e();
    try {
      return _0x293be6(_0x2ae5f2, _0x585562);
    } catch (_0x46c810) {
      _0x114b19(_0x53b8f3);
      if (_0x46c810 !== _0x46c810 + 0 && _0x46c810 !== "longjmp") {
        throw _0x46c810;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x256d7a(_0x259342, _0x24a6bb, _0x5da3fb, _0x4a4902, _0x41aa2f) {
    var _0xccd70c = _0xd24b5e();
    try {
      _0xede808(_0x259342, _0x24a6bb, _0x5da3fb, _0x4a4902, _0x41aa2f);
    } catch (_0x328ca0) {
      _0x114b19(_0xccd70c);
      if (_0x328ca0 !== _0x328ca0 + 0 && _0x328ca0 !== "longjmp") {
        throw _0x328ca0;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x214e80(_0x2daf1f, _0x43844f, _0x57a638, _0x3ddbd4, _0x40a052) {
    var _0x50f3c9 = _0xd24b5e();
    try {
      return _0x28785f(_0x2daf1f, _0x43844f, _0x57a638, _0x3ddbd4, _0x40a052);
    } catch (_0x1a1d46) {
      _0x114b19(_0x50f3c9);
      if (_0x1a1d46 !== _0x1a1d46 + 0 && _0x1a1d46 !== "longjmp") {
        throw _0x1a1d46;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xe2e71e(_0x2345fe, _0x589eb6, _0xc79265, _0x54ab7e, _0x540ffd, _0x25adb4, _0x19a843, _0x20fac0, _0x3c77f2, _0x3966d8, _0x427561, _0x275ad4, _0x54ef61, _0x20acda, _0x524a64, _0xba0000, _0x48a93c, _0x2bcd83, _0x17d5a9) {
    var _0x1dd589 = _0xd24b5e();
    try {
      return _0x297368(_0x2345fe, _0x589eb6, _0xc79265, _0x54ab7e, _0x540ffd, _0x25adb4, _0x19a843, _0x20fac0, _0x3c77f2, _0x3966d8, _0x427561, _0x275ad4, _0x54ef61, _0x20acda, _0x524a64, _0xba0000, _0x48a93c, _0x2bcd83, _0x17d5a9);
    } catch (_0x4ebf94) {
      _0x114b19(_0x1dd589);
      if (_0x4ebf94 !== _0x4ebf94 + 0 && _0x4ebf94 !== "longjmp") {
        throw _0x4ebf94;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4532c0(_0x24d43b, _0x196e5b, _0x47fd0b, _0x4a31c0, _0x2b3350, _0x4150f2, _0x41d7a0, _0x322cb1, _0x3cfca7, _0x40f99b) {
    var _0x365b24 = _0xd24b5e();
    try {
      return _0x2fb05b(_0x24d43b, _0x196e5b, _0x47fd0b, _0x4a31c0, _0x2b3350, _0x4150f2, _0x41d7a0, _0x322cb1, _0x3cfca7, _0x40f99b);
    } catch (_0x34239b) {
      _0x114b19(_0x365b24);
      if (_0x34239b !== _0x34239b + 0 && _0x34239b !== "longjmp") {
        throw _0x34239b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xa54e71(_0x3b1912, _0x47ea4d, _0x1d3700, _0x577450, _0x3e098f, _0x1adac7, _0x3dab5e, _0x4ee0e0, _0x4ff911, _0x568d57, _0x16781f, _0x44c475, _0x22c0f3) {
    var _0x1094ca = _0xd24b5e();
    try {
      _0x2afdc7(_0x3b1912, _0x47ea4d, _0x1d3700, _0x577450, _0x3e098f, _0x1adac7, _0x3dab5e, _0x4ee0e0, _0x4ff911, _0x568d57, _0x16781f, _0x44c475, _0x22c0f3);
    } catch (_0x4b33d5) {
      _0x114b19(_0x1094ca);
      if (_0x4b33d5 !== _0x4b33d5 + 0 && _0x4b33d5 !== "longjmp") {
        throw _0x4b33d5;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xbf4c58(_0x5ad592, _0x4dbf37, _0x49ab6d, _0x4dc08d, _0x1869de, _0x1d5435, _0x3d1ff3, _0x269505, _0x873372, _0x2ebe96, _0x1922d9, _0x33bebc, _0x476d8d, _0x1b6b29, _0x50d871) {
    var _0x4a3670 = _0xd24b5e();
    try {
      _0x3263e4(_0x5ad592, _0x4dbf37, _0x49ab6d, _0x4dc08d, _0x1869de, _0x1d5435, _0x3d1ff3, _0x269505, _0x873372, _0x2ebe96, _0x1922d9, _0x33bebc, _0x476d8d, _0x1b6b29, _0x50d871);
    } catch (_0x36ffb6) {
      _0x114b19(_0x4a3670);
      if (_0x36ffb6 !== _0x36ffb6 + 0 && _0x36ffb6 !== "longjmp") {
        throw _0x36ffb6;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x197c79(_0x3557a0, _0x338679, _0x23750a, _0x120aa2, _0x3e0400, _0x1c72d0, _0x24b4a5, _0x36b04f, _0xe27a0a, _0x20a5d9, _0x4ab761, _0x19660f, _0x23a96f, _0x412346, _0x2085e0) {
    var _0x441786 = _0xd24b5e();
    try {
      _0x148fe0(_0x3557a0, _0x338679, _0x23750a, _0x120aa2, _0x3e0400, _0x1c72d0, _0x24b4a5, _0x36b04f, _0xe27a0a, _0x20a5d9, _0x4ab761, _0x19660f, _0x23a96f, _0x412346, _0x2085e0);
    } catch (_0xb1f53a) {
      _0x114b19(_0x441786);
      if (_0xb1f53a !== _0xb1f53a + 0 && _0xb1f53a !== "longjmp") {
        throw _0xb1f53a;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2b7e04(_0xd3fa81, _0x4ba43b, _0x4ea626, _0x47fb23, _0xf00654, _0x2b2faf, _0x35e6b1) {
    var _0x35aa03 = _0xd24b5e();
    try {
      _0x467cb8(_0xd3fa81, _0x4ba43b, _0x4ea626, _0x47fb23, _0xf00654, _0x2b2faf, _0x35e6b1);
    } catch (_0x1ccc81) {
      _0x114b19(_0x35aa03);
      if (_0x1ccc81 !== _0x1ccc81 + 0 && _0x1ccc81 !== "longjmp") {
        throw _0x1ccc81;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2bb489(_0x3f8dd9, _0x443eda, _0x553f4b, _0x103ef9, _0xadc0da, _0x334c4a) {
    var _0x4ebb92 = _0xd24b5e();
    try {
      _0x5b9cc2(_0x3f8dd9, _0x443eda, _0x553f4b, _0x103ef9, _0xadc0da, _0x334c4a);
    } catch (_0x128f30) {
      _0x114b19(_0x4ebb92);
      if (_0x128f30 !== _0x128f30 + 0 && _0x128f30 !== "longjmp") {
        throw _0x128f30;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2b86cc(_0x3d5ed4, _0x38afcd, _0x55dd39, _0xde343e, _0x4fa9d7, _0x38138a, _0x188a88, _0x2d8723) {
    var _0x389486 = _0xd24b5e();
    try {
      return _0x344f1b(_0x3d5ed4, _0x38afcd, _0x55dd39, _0xde343e, _0x4fa9d7, _0x38138a, _0x188a88, _0x2d8723);
    } catch (_0x1446c7) {
      _0x114b19(_0x389486);
      if (_0x1446c7 !== _0x1446c7 + 0 && _0x1446c7 !== "longjmp") {
        throw _0x1446c7;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x774d02(_0x25ac79, _0x26064f, _0x131f40, _0x27bebe) {
    var _0x181899 = _0xd24b5e();
    try {
      return _0x137f72(_0x25ac79, _0x26064f, _0x131f40, _0x27bebe);
    } catch (_0x50805b) {
      _0x114b19(_0x181899);
      if (_0x50805b !== _0x50805b + 0 && _0x50805b !== "longjmp") {
        throw _0x50805b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x16810e(_0x7c4470, _0x237082, _0x20f295, _0x5c35f7) {
    var _0x5be518 = _0xd24b5e();
    try {
      return _0xfdc466(_0x7c4470, _0x237082, _0x20f295, _0x5c35f7);
    } catch (_0x3985d5) {
      _0x114b19(_0x5be518);
      if (_0x3985d5 !== _0x3985d5 + 0 && _0x3985d5 !== "longjmp") {
        throw _0x3985d5;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x427e7d(_0x3627cf, _0x591d2c, _0x2043c7, _0x59b55f) {
    var _0x755327 = _0xd24b5e();
    try {
      return _0x3fafec(_0x3627cf, _0x591d2c, _0x2043c7, _0x59b55f);
    } catch (_0x620ac5) {
      _0x114b19(_0x755327);
      if (_0x620ac5 !== _0x620ac5 + 0 && _0x620ac5 !== "longjmp") {
        throw _0x620ac5;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2d3d31(_0x534729, _0x204478, _0x1b86c3, _0x411428) {
    var _0x3db5a2 = _0xd24b5e();
    try {
      return _0x4a502e(_0x534729, _0x204478, _0x1b86c3, _0x411428);
    } catch (_0x3a10c3) {
      _0x114b19(_0x3db5a2);
      if (_0x3a10c3 !== _0x3a10c3 + 0 && _0x3a10c3 !== "longjmp") {
        throw _0x3a10c3;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x59179a(_0x4ebd34, _0x1fca5e, _0x380519, _0xfc5c89, _0x57d4fb) {
    var _0x525c99 = _0xd24b5e();
    try {
      return _0x59d547(_0x4ebd34, _0x1fca5e, _0x380519, _0xfc5c89, _0x57d4fb);
    } catch (_0x37162e) {
      _0x114b19(_0x525c99);
      if (_0x37162e !== _0x37162e + 0 && _0x37162e !== "longjmp") {
        throw _0x37162e;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1b6445(_0x13364c, _0x3a2394, _0x6e9e7a, _0x4de369, _0x1d24f2, _0x111ffe, _0x5b7fa0, _0xa80101, _0x2ad5f9, _0x8a3ab5, _0x186ede, _0x2fbeeb, _0x465d0c, _0x555dd9) {
    var _0x587b19 = _0xd24b5e();
    try {
      return _0x426073(_0x13364c, _0x3a2394, _0x6e9e7a, _0x4de369, _0x1d24f2, _0x111ffe, _0x5b7fa0, _0xa80101, _0x2ad5f9, _0x8a3ab5, _0x186ede, _0x2fbeeb, _0x465d0c, _0x555dd9);
    } catch (_0x521471) {
      _0x114b19(_0x587b19);
      if (_0x521471 !== _0x521471 + 0 && _0x521471 !== "longjmp") {
        throw _0x521471;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x56a0c1(_0x418ef7, _0x5a1bc1, _0x5c8c41, _0x1514f4, _0x40aa9c, _0x5c38e5) {
    var _0x19f1f8 = _0xd24b5e();
    try {
      _0x9dc814(_0x418ef7, _0x5a1bc1, _0x5c8c41, _0x1514f4, _0x40aa9c, _0x5c38e5);
    } catch (_0x287b9a) {
      _0x114b19(_0x19f1f8);
      if (_0x287b9a !== _0x287b9a + 0 && _0x287b9a !== "longjmp") {
        throw _0x287b9a;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x168e90(_0x1fa903, _0x5a29d5, _0x3a4f31, _0x5d624f, _0x53fcfc, _0x27937d) {
    var _0x3157ad = _0xd24b5e();
    try {
      return _0x3c7d74(_0x1fa903, _0x5a29d5, _0x3a4f31, _0x5d624f, _0x53fcfc, _0x27937d);
    } catch (_0x23d2c5) {
      _0x114b19(_0x3157ad);
      if (_0x23d2c5 !== _0x23d2c5 + 0 && _0x23d2c5 !== "longjmp") {
        throw _0x23d2c5;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x27d88d(_0x33a77e, _0x23175e, _0x54b1ff, _0x441927, _0x1c10bd, _0x46a016, _0x4ea457, _0x5599d7, _0x75c34c, _0x778930, _0x3503b6, _0x2a36a3, _0x596015, _0x3d6846, _0x5ba7eb, _0x1c4f42, _0x4d2336) {
    var _0x2181dd = _0xd24b5e();
    try {
      _0x337c73(_0x33a77e, _0x23175e, _0x54b1ff, _0x441927, _0x1c10bd, _0x46a016, _0x4ea457, _0x5599d7, _0x75c34c, _0x778930, _0x3503b6, _0x2a36a3, _0x596015, _0x3d6846, _0x5ba7eb, _0x1c4f42, _0x4d2336);
    } catch (_0x6f2b0a) {
      _0x114b19(_0x2181dd);
      if (_0x6f2b0a !== _0x6f2b0a + 0 && _0x6f2b0a !== "longjmp") {
        throw _0x6f2b0a;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x82b1e3(_0x2aa067, _0x4ad967, _0x173a66) {
    var _0x1272ef = _0xd24b5e();
    try {
      return _0x29c78e(_0x2aa067, _0x4ad967, _0x173a66);
    } catch (_0x28bf18) {
      _0x114b19(_0x1272ef);
      if (_0x28bf18 !== _0x28bf18 + 0 && _0x28bf18 !== "longjmp") {
        throw _0x28bf18;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x487870(_0x2fff8d, _0x5e8e58, _0x283030) {
    var _0x42b405 = _0xd24b5e();
    try {
      return _0x50304b(_0x2fff8d, _0x5e8e58, _0x283030);
    } catch (_0x34f775) {
      _0x114b19(_0x42b405);
      if (_0x34f775 !== _0x34f775 + 0 && _0x34f775 !== "longjmp") {
        throw _0x34f775;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3845dd(_0x40fcd9, _0x85a83d, _0x16d1f2, _0x111e04, _0x5bb174, _0x3a7938, _0x19b607) {
    var _0x49936a = _0xd24b5e();
    try {
      _0x25db0a(_0x40fcd9, _0x85a83d, _0x16d1f2, _0x111e04, _0x5bb174, _0x3a7938, _0x19b607);
    } catch (_0x54ee87) {
      _0x114b19(_0x49936a);
      if (_0x54ee87 !== _0x54ee87 + 0 && _0x54ee87 !== "longjmp") {
        throw _0x54ee87;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x23ea1d(_0x4682f6, _0x40ca8e, _0x86a268, _0x4e02aa, _0x3daec3, _0x45e7e8, _0x47e4e2, _0x5022ff, _0x511dff, _0x292350) {
    var _0x462ebe = _0xd24b5e();
    try {
      return _0x2c28bf(_0x4682f6, _0x40ca8e, _0x86a268, _0x4e02aa, _0x3daec3, _0x45e7e8, _0x47e4e2, _0x5022ff, _0x511dff, _0x292350);
    } catch (_0x8e36b8) {
      _0x114b19(_0x462ebe);
      if (_0x8e36b8 !== _0x8e36b8 + 0 && _0x8e36b8 !== "longjmp") {
        throw _0x8e36b8;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4c8ae1(_0x3f165d, _0x2a1509, _0x540efe, _0x2ad585, _0xda1ca1, _0xec9b9f, _0x48e12f, _0x194619, _0x253bca, _0x2ca155, _0x114aa1, _0x3d5bc9, _0x54687d, _0x959757, _0x945a20) {
    var _0x3ff470 = _0xd24b5e();
    try {
      _0x45f243(_0x3f165d, _0x2a1509, _0x540efe, _0x2ad585, _0xda1ca1, _0xec9b9f, _0x48e12f, _0x194619, _0x253bca, _0x2ca155, _0x114aa1, _0x3d5bc9, _0x54687d, _0x959757, _0x945a20);
    } catch (_0x1d0008) {
      _0x114b19(_0x3ff470);
      if (_0x1d0008 !== _0x1d0008 + 0 && _0x1d0008 !== "longjmp") {
        throw _0x1d0008;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3a71c0(_0x1ffe9e, _0x5c6fba, _0x3d2dc9, _0x3e1bac, _0x26342c) {
    var _0x48c560 = _0xd24b5e();
    try {
      return _0x125f11(_0x1ffe9e, _0x5c6fba, _0x3d2dc9, _0x3e1bac, _0x26342c);
    } catch (_0x321e05) {
      _0x114b19(_0x48c560);
      if (_0x321e05 !== _0x321e05 + 0 && _0x321e05 !== "longjmp") {
        throw _0x321e05;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4cef0d(_0x27c450, _0x1dbf51, _0x4f1b0b, _0x2feb4f, _0x1407cf) {
    var _0x5af712 = _0xd24b5e();
    try {
      return _0x4b2c39(_0x27c450, _0x1dbf51, _0x4f1b0b, _0x2feb4f, _0x1407cf);
    } catch (_0x4f06de) {
      _0x114b19(_0x5af712);
      if (_0x4f06de !== _0x4f06de + 0 && _0x4f06de !== "longjmp") {
        throw _0x4f06de;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1aa844(_0x4894f4, _0x28e5cb, _0x5a42e3, _0x507f3b, _0xa6e620, _0x1cd68b, _0x24fde4) {
    var _0x534fc8 = _0xd24b5e();
    try {
      return _0x33d834(_0x4894f4, _0x28e5cb, _0x5a42e3, _0x507f3b, _0xa6e620, _0x1cd68b, _0x24fde4);
    } catch (_0x450496) {
      _0x114b19(_0x534fc8);
      if (_0x450496 !== _0x450496 + 0 && _0x450496 !== "longjmp") {
        throw _0x450496;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x33d78b(_0x39ab95, _0x47311d, _0xef676f, _0x20fc35, _0x512086, _0x47e781, _0x4018f2, _0x4f47e8, _0x3f7ccc, _0x3a78f4, _0x58f88c, _0x30c33f, _0x339b91, _0x3b1e73, _0x24a9cd) {
    var _0x4564ad = _0xd24b5e();
    try {
      _0x5ee164(_0x39ab95, _0x47311d, _0xef676f, _0x20fc35, _0x512086, _0x47e781, _0x4018f2, _0x4f47e8, _0x3f7ccc, _0x3a78f4, _0x58f88c, _0x30c33f, _0x339b91, _0x3b1e73, _0x24a9cd);
    } catch (_0x593e16) {
      _0x114b19(_0x4564ad);
      if (_0x593e16 !== _0x593e16 + 0 && _0x593e16 !== "longjmp") {
        throw _0x593e16;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2dcfd6(_0x4ce827, _0x2068a0) {
    var _0x59fdf0 = _0xd24b5e();
    try {
      return _0x19a683(_0x4ce827, _0x2068a0);
    } catch (_0x4c24ee) {
      _0x114b19(_0x59fdf0);
      if (_0x4c24ee !== _0x4c24ee + 0 && _0x4c24ee !== "longjmp") {
        throw _0x4c24ee;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x167586(_0x1ac7e7, _0x56bbca, _0x534792, _0x300059, _0x327f7f, _0x3884f5) {
    var _0x24e96e = _0xd24b5e();
    try {
      return _0x1a1423(_0x1ac7e7, _0x56bbca, _0x534792, _0x300059, _0x327f7f, _0x3884f5);
    } catch (_0x410f56) {
      _0x114b19(_0x24e96e);
      if (_0x410f56 !== _0x410f56 + 0 && _0x410f56 !== "longjmp") {
        throw _0x410f56;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3191f8(_0x1cdb9b, _0x46207f, _0x2df228, _0xdce732, _0x40b8c1, _0x27807d) {
    var _0x3113ba = _0xd24b5e();
    try {
      return _0x47a388(_0x1cdb9b, _0x46207f, _0x2df228, _0xdce732, _0x40b8c1, _0x27807d);
    } catch (_0x1d54f8) {
      _0x114b19(_0x3113ba);
      if (_0x1d54f8 !== _0x1d54f8 + 0 && _0x1d54f8 !== "longjmp") {
        throw _0x1d54f8;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2dc320(_0x4daf7b, _0xe3347e, _0x3efb7b, _0x5e877e, _0xf95727, _0x5beebd, _0x2073b5, _0x236b88, _0x59a2ce, _0x5e3096, _0x2ebfcd, _0x17dc5c) {
    var _0x595981 = _0xd24b5e();
    try {
      _0x4c836a(_0x4daf7b, _0xe3347e, _0x3efb7b, _0x5e877e, _0xf95727, _0x5beebd, _0x2073b5, _0x236b88, _0x59a2ce, _0x5e3096, _0x2ebfcd, _0x17dc5c);
    } catch (_0x38af71) {
      _0x114b19(_0x595981);
      if (_0x38af71 !== _0x38af71 + 0 && _0x38af71 !== "longjmp") {
        throw _0x38af71;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2729d5(_0x519769, _0x3e9a8c, _0x7bb10, _0x4bd739, _0x282f8f, _0x23bb64, _0x108edb, _0x52cd89, _0x4aa7df, _0x4ba549, _0x4c538f, _0x57f793, _0x504f93) {
    var _0x36f1a = _0xd24b5e();
    try {
      return _0x5cb871(_0x519769, _0x3e9a8c, _0x7bb10, _0x4bd739, _0x282f8f, _0x23bb64, _0x108edb, _0x52cd89, _0x4aa7df, _0x4ba549, _0x4c538f, _0x57f793, _0x504f93);
    } catch (_0x3acf14) {
      _0x114b19(_0x36f1a);
      if (_0x3acf14 !== _0x3acf14 + 0 && _0x3acf14 !== "longjmp") {
        throw _0x3acf14;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x515909(_0x21c79b, _0x450b08, _0x5b853c, _0x200f18, _0x392e83, _0x3c1f3f, _0x437a49, _0x5f0b20, _0x103472, _0x146cb3, _0x8adc2) {
    var _0x3ee890 = _0xd24b5e();
    try {
      return _0x405e15(_0x21c79b, _0x450b08, _0x5b853c, _0x200f18, _0x392e83, _0x3c1f3f, _0x437a49, _0x5f0b20, _0x103472, _0x146cb3, _0x8adc2);
    } catch (_0x59af94) {
      _0x114b19(_0x3ee890);
      if (_0x59af94 !== _0x59af94 + 0 && _0x59af94 !== "longjmp") {
        throw _0x59af94;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4b5c1b(_0x237f20, _0x1df904, _0x294ec2, _0xeb0e87, _0x564c3) {
    var _0xa2ef85 = _0xd24b5e();
    try {
      return _0x5e2f99(_0x237f20, _0x1df904, _0x294ec2, _0xeb0e87, _0x564c3);
    } catch (_0x218556) {
      _0x114b19(_0xa2ef85);
      if (_0x218556 !== _0x218556 + 0 && _0x218556 !== "longjmp") {
        throw _0x218556;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3f047f(_0x46af23, _0x3aacfa, _0x4e8fa8, _0x32772a, _0x2791d6, _0x5bbba8) {
    var _0x2a6b66 = _0xd24b5e();
    try {
      return _0x5467fc(_0x46af23, _0x3aacfa, _0x4e8fa8, _0x32772a, _0x2791d6, _0x5bbba8);
    } catch (_0x2bf402) {
      _0x114b19(_0x2a6b66);
      if (_0x2bf402 !== _0x2bf402 + 0 && _0x2bf402 !== "longjmp") {
        throw _0x2bf402;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x924b2e(_0x3fef7c, _0x5bc492, _0x2d72f2, _0x28bfee, _0x5c914d, _0x4b7f6b, _0x187c31) {
    var _0x37b462 = _0xd24b5e();
    try {
      return _0x4a59ec(_0x3fef7c, _0x5bc492, _0x2d72f2, _0x28bfee, _0x5c914d, _0x4b7f6b, _0x187c31);
    } catch (_0x246450) {
      _0x114b19(_0x37b462);
      if (_0x246450 !== _0x246450 + 0 && _0x246450 !== "longjmp") {
        throw _0x246450;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1384b9(_0x4abb8a, _0x1e7ee6, _0x5bbfd0, _0x2f3aee, _0x4fb8bb, _0x59b1e2, _0x40cc2b) {
    var _0xfdbb18 = _0xd24b5e();
    try {
      return _0x29675d(_0x4abb8a, _0x1e7ee6, _0x5bbfd0, _0x2f3aee, _0x4fb8bb, _0x59b1e2, _0x40cc2b);
    } catch (_0x31680f) {
      _0x114b19(_0xfdbb18);
      if (_0x31680f !== _0x31680f + 0 && _0x31680f !== "longjmp") {
        throw _0x31680f;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x46f4aa(_0x59455b, _0x582887, _0x11fc30, _0xbcccdf) {
    var _0x295984 = _0xd24b5e();
    try {
      _0x15f3e8(_0x59455b, _0x582887, _0x11fc30, _0xbcccdf);
    } catch (_0x23e408) {
      _0x114b19(_0x295984);
      if (_0x23e408 !== _0x23e408 + 0 && _0x23e408 !== "longjmp") {
        throw _0x23e408;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x581b67(_0x4e77d8, _0x19d2d4, _0x7b974a, _0x2c0d6c, _0xec07e5) {
    var _0x26b0b8 = _0xd24b5e();
    try {
      return _0x552f9e(_0x4e77d8, _0x19d2d4, _0x7b974a, _0x2c0d6c, _0xec07e5);
    } catch (_0x4bb40a) {
      _0x114b19(_0x26b0b8);
      if (_0x4bb40a !== _0x4bb40a + 0 && _0x4bb40a !== "longjmp") {
        throw _0x4bb40a;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4a319a(_0x49f881, _0x105cce, _0x37cab1, _0x4fcd7c, _0x359f94) {
    var _0x3fd385 = _0xd24b5e();
    try {
      return _0x51faa5(_0x49f881, _0x105cce, _0x37cab1, _0x4fcd7c, _0x359f94);
    } catch (_0x1e7d2b) {
      _0x114b19(_0x3fd385);
      if (_0x1e7d2b !== _0x1e7d2b + 0 && _0x1e7d2b !== "longjmp") {
        throw _0x1e7d2b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3210f9(_0x1ec745) {
    var _0x506ecd = _0xd24b5e();
    try {
      return _0x577dc3(_0x1ec745);
    } catch (_0x3f727c) {
      _0x114b19(_0x506ecd);
      if (_0x3f727c !== _0x3f727c + 0 && _0x3f727c !== "longjmp") {
        throw _0x3f727c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x97faa6(_0x10a49c, _0x56751a, _0x71d47a, _0x5d7e02) {
    var _0x52f3ca = _0xd24b5e();
    try {
      return _0x5dcd46(_0x10a49c, _0x56751a, _0x71d47a, _0x5d7e02);
    } catch (_0x1501cd) {
      _0x114b19(_0x52f3ca);
      if (_0x1501cd !== _0x1501cd + 0 && _0x1501cd !== "longjmp") {
        throw _0x1501cd;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1f1a60(_0x467109, _0x3b22a8, _0x1d4c3d, _0x3a4b3f, _0x18f058, _0x552ae8, _0x728b76, _0x30f821) {
    var _0x2bfcce = _0xd24b5e();
    try {
      return _0x20e7c4(_0x467109, _0x3b22a8, _0x1d4c3d, _0x3a4b3f, _0x18f058, _0x552ae8, _0x728b76, _0x30f821);
    } catch (_0x5c0a88) {
      _0x114b19(_0x2bfcce);
      if (_0x5c0a88 !== _0x5c0a88 + 0 && _0x5c0a88 !== "longjmp") {
        throw _0x5c0a88;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2e8153(_0x401ae6, _0x210cc2) {
    var _0x3a3ada = _0xd24b5e();
    try {
      return _0x36a5d6(_0x401ae6, _0x210cc2);
    } catch (_0x387419) {
      _0x114b19(_0x3a3ada);
      if (_0x387419 !== _0x387419 + 0 && _0x387419 !== "longjmp") {
        throw _0x387419;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2f5e21(_0x3c6c3d, _0x2497e9, _0x15a32b) {
    var _0x4f00a1 = _0xd24b5e();
    try {
      return _0x5d6303(_0x3c6c3d, _0x2497e9, _0x15a32b);
    } catch (_0x32dde7) {
      _0x114b19(_0x4f00a1);
      if (_0x32dde7 !== _0x32dde7 + 0 && _0x32dde7 !== "longjmp") {
        throw _0x32dde7;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x409328(_0x163cfd, _0x34045e, _0x5f14ab, _0x5f481e, _0x41bb25, _0x35a37a) {
    var _0x2cc4da = _0xd24b5e();
    try {
      _0x96d7a5(_0x163cfd, _0x34045e, _0x5f14ab, _0x5f481e, _0x41bb25, _0x35a37a);
    } catch (_0x29276c) {
      _0x114b19(_0x2cc4da);
      if (_0x29276c !== _0x29276c + 0 && _0x29276c !== "longjmp") {
        throw _0x29276c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x498504(_0x12c665, _0x1fb469, _0x47ca0a, _0x146e23) {
    var _0x4b8ab2 = _0xd24b5e();
    try {
      return _0x56aab3(_0x12c665, _0x1fb469, _0x47ca0a, _0x146e23);
    } catch (_0xca2040) {
      _0x114b19(_0x4b8ab2);
      if (_0xca2040 !== _0xca2040 + 0 && _0xca2040 !== "longjmp") {
        throw _0xca2040;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x12edc(_0x284703, _0x5792d3, _0x2fbd7e, _0x475222, _0x11abf1) {
    var _0x1e978b = _0xd24b5e();
    try {
      return _0x1787b2(_0x284703, _0x5792d3, _0x2fbd7e, _0x475222, _0x11abf1);
    } catch (_0x49cc9c) {
      _0x114b19(_0x1e978b);
      if (_0x49cc9c !== _0x49cc9c + 0 && _0x49cc9c !== "longjmp") {
        throw _0x49cc9c;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3e4058(_0x331eec, _0x4bd707, _0x5aa89b, _0x267a3d, _0x5ac433, _0x2c73de) {
    var _0x56f8e1 = _0xd24b5e();
    try {
      return _0x59c4e7(_0x331eec, _0x4bd707, _0x5aa89b, _0x267a3d, _0x5ac433, _0x2c73de);
    } catch (_0x21d171) {
      _0x114b19(_0x56f8e1);
      if (_0x21d171 !== _0x21d171 + 0 && _0x21d171 !== "longjmp") {
        throw _0x21d171;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x140325(_0x23887a, _0x151b6b, _0x39b62d, _0x34411c, _0x2c8c8d, _0x43cb73, _0x5ab8ee, _0x58e8be, _0x3d1d97, _0x3c2d00) {
    var _0x582e34 = _0xd24b5e();
    try {
      return _0x44ec0b(_0x23887a, _0x151b6b, _0x39b62d, _0x34411c, _0x2c8c8d, _0x43cb73, _0x5ab8ee, _0x58e8be, _0x3d1d97, _0x3c2d00);
    } catch (_0x205b78) {
      _0x114b19(_0x582e34);
      if (_0x205b78 !== _0x205b78 + 0 && _0x205b78 !== "longjmp") {
        throw _0x205b78;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x35ea0f(_0x1b9de1, _0x42ef03, _0x1f12b7, _0x5cf76e, _0x344fc2, _0x1ef3c4, _0x51ca15) {
    var _0x4232c0 = _0xd24b5e();
    try {
      _0xa14417(_0x1b9de1, _0x42ef03, _0x1f12b7, _0x5cf76e, _0x344fc2, _0x1ef3c4, _0x51ca15);
    } catch (_0x41ff03) {
      _0x114b19(_0x4232c0);
      if (_0x41ff03 !== _0x41ff03 + 0 && _0x41ff03 !== "longjmp") {
        throw _0x41ff03;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3f3ba0(_0x30e6f7, _0x648e94, _0xe971a, _0x629405, _0x4afc53, _0xed5cbf) {
    var _0x579f46 = _0xd24b5e();
    try {
      _0x152b2f(_0x30e6f7, _0x648e94, _0xe971a, _0x629405, _0x4afc53, _0xed5cbf);
    } catch (_0x27c485) {
      _0x114b19(_0x579f46);
      if (_0x27c485 !== _0x27c485 + 0 && _0x27c485 !== "longjmp") {
        throw _0x27c485;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x5c9d27(_0x415920, _0x1abf43, _0x2eabff, _0x18dda1, _0x5033c6, _0xc6a0fd, _0x1e657d) {
    var _0x3715de = _0xd24b5e();
    try {
      return _0x3fd272(_0x415920, _0x1abf43, _0x2eabff, _0x18dda1, _0x5033c6, _0xc6a0fd, _0x1e657d);
    } catch (_0x4ba897) {
      _0x114b19(_0x3715de);
      if (_0x4ba897 !== _0x4ba897 + 0 && _0x4ba897 !== "longjmp") {
        throw _0x4ba897;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4f3bb4(_0x2923dd, _0x5c3281, _0x5ad740, _0x1e1f0c, _0x35348e, _0x52ec24, _0x549ab1, _0x168d46, _0x529d83, _0x237275, _0x32ec96, _0x4ae1ae) {
    var _0x8ac0b2 = _0xd24b5e();
    try {
      return _0x286ea8(_0x2923dd, _0x5c3281, _0x5ad740, _0x1e1f0c, _0x35348e, _0x52ec24, _0x549ab1, _0x168d46, _0x529d83, _0x237275, _0x32ec96, _0x4ae1ae);
    } catch (_0x4b50b8) {
      _0x114b19(_0x8ac0b2);
      if (_0x4b50b8 !== _0x4b50b8 + 0 && _0x4b50b8 !== "longjmp") {
        throw _0x4b50b8;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x52f5bd(_0xb156ea, _0x3fb2e9, _0x5f4a97, _0x57a1a4, _0x822168, _0x4af0ae, _0x5ecfb7, _0x1b4427, _0x4555c7, _0x5d0f6a) {
    var _0x3e5bab = _0xd24b5e();
    try {
      return _0xdaeaf3(_0xb156ea, _0x3fb2e9, _0x5f4a97, _0x57a1a4, _0x822168, _0x4af0ae, _0x5ecfb7, _0x1b4427, _0x4555c7, _0x5d0f6a);
    } catch (_0x37220e) {
      _0x114b19(_0x3e5bab);
      if (_0x37220e !== _0x37220e + 0 && _0x37220e !== "longjmp") {
        throw _0x37220e;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x15a875(_0xcdbb08, _0x37dc2d, _0x35b7b6, _0x2f60e2, _0x545e29, _0x590c8a) {
    var _0x259bf7 = _0xd24b5e();
    try {
      return _0x574650(_0xcdbb08, _0x37dc2d, _0x35b7b6, _0x2f60e2, _0x545e29, _0x590c8a);
    } catch (_0x36aa22) {
      _0x114b19(_0x259bf7);
      if (_0x36aa22 !== _0x36aa22 + 0 && _0x36aa22 !== "longjmp") {
        throw _0x36aa22;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x38ab9b(_0x847b50, _0x5cde1f, _0x25f75d, _0x49c945, _0x4c20b8, _0x32c7f2) {
    var _0x3395fe = _0xd24b5e();
    try {
      return _0x39c6e1(_0x847b50, _0x5cde1f, _0x25f75d, _0x49c945, _0x4c20b8, _0x32c7f2);
    } catch (_0x2ef1ec) {
      _0x114b19(_0x3395fe);
      if (_0x2ef1ec !== _0x2ef1ec + 0 && _0x2ef1ec !== "longjmp") {
        throw _0x2ef1ec;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x13a20f(_0x1a414e, _0x2724ca, _0x1b74d7, _0x43f4d1, _0x39813b, _0xbe1c46, _0x53cc81, _0x5ee31b, _0x565d13, _0x3d676f, _0x58aeb8, _0x27c726, _0x26e969, _0x2d8394) {
    var _0x2bbd93 = _0xd24b5e();
    try {
      _0x3e5cc2(_0x1a414e, _0x2724ca, _0x1b74d7, _0x43f4d1, _0x39813b, _0xbe1c46, _0x53cc81, _0x5ee31b, _0x565d13, _0x3d676f, _0x58aeb8, _0x27c726, _0x26e969, _0x2d8394);
    } catch (_0x383787) {
      _0x114b19(_0x2bbd93);
      if (_0x383787 !== _0x383787 + 0 && _0x383787 !== "longjmp") {
        throw _0x383787;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2c8671(_0x269948, _0x5cf533, _0x5ec895, _0x59b6c2, _0x72b4c, _0xc96c7b, _0x4ba661) {
    var _0x5507d3 = _0xd24b5e();
    try {
      _0x4ae875(_0x269948, _0x5cf533, _0x5ec895, _0x59b6c2, _0x72b4c, _0xc96c7b, _0x4ba661);
    } catch (_0x593625) {
      _0x114b19(_0x5507d3);
      if (_0x593625 !== _0x593625 + 0 && _0x593625 !== "longjmp") {
        throw _0x593625;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x34b37c(_0x1e70a5, _0x3d090c, _0x4b1057, _0xe8baab, _0x1c9c55, _0x4cabb4) {
    var _0x17d3ba = _0xd24b5e();
    try {
      _0x5a5af4(_0x1e70a5, _0x3d090c, _0x4b1057, _0xe8baab, _0x1c9c55, _0x4cabb4);
    } catch (_0x2a84b6) {
      _0x114b19(_0x17d3ba);
      if (_0x2a84b6 !== _0x2a84b6 + 0 && _0x2a84b6 !== "longjmp") {
        throw _0x2a84b6;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3bf391(_0x4169d, _0x49a67f, _0x9ec17, _0x4d1f64, _0x5e2045) {
    var _0x2ff543 = _0xd24b5e();
    try {
      _0x3ef19c(_0x4169d, _0x49a67f, _0x9ec17, _0x4d1f64, _0x5e2045);
    } catch (_0x339ba5) {
      _0x114b19(_0x2ff543);
      if (_0x339ba5 !== _0x339ba5 + 0 && _0x339ba5 !== "longjmp") {
        throw _0x339ba5;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x460de0(_0x5ceaef, _0x45df13, _0x14071d, _0x162e68, _0x35ad39, _0x2da275) {
    var _0x4e9c4e = _0xd24b5e();
    try {
      return _0x24dcfa(_0x5ceaef, _0x45df13, _0x14071d, _0x162e68, _0x35ad39, _0x2da275);
    } catch (_0x222f49) {
      _0x114b19(_0x4e9c4e);
      if (_0x222f49 !== _0x222f49 + 0 && _0x222f49 !== "longjmp") {
        throw _0x222f49;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x26c398(_0x13160c, _0x64652e, _0x5447b5, _0xf33c05, _0x47e4cf, _0x595a90) {
    var _0x382766 = _0xd24b5e();
    try {
      return _0x17d3fe(_0x13160c, _0x64652e, _0x5447b5, _0xf33c05, _0x47e4cf, _0x595a90);
    } catch (_0xc77075) {
      _0x114b19(_0x382766);
      if (_0xc77075 !== _0xc77075 + 0 && _0xc77075 !== "longjmp") {
        throw _0xc77075;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1b8b42(_0x103384, _0xf72b98, _0xcf5551, _0xbaa2d6) {
    var _0x152e5b = _0xd24b5e();
    try {
      return _0x2176c6(_0x103384, _0xf72b98, _0xcf5551, _0xbaa2d6);
    } catch (_0xb14f23) {
      _0x114b19(_0x152e5b);
      if (_0xb14f23 !== _0xb14f23 + 0 && _0xb14f23 !== "longjmp") {
        throw _0xb14f23;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xf5fbdc(_0x25b3e4, _0x5be693, _0x48136b, _0x2f8cd9, _0x1aeed4, _0x4a7f01) {
    var _0x31c373 = _0xd24b5e();
    try {
      return _0x2fb730(_0x25b3e4, _0x5be693, _0x48136b, _0x2f8cd9, _0x1aeed4, _0x4a7f01);
    } catch (_0x533fb5) {
      _0x114b19(_0x31c373);
      if (_0x533fb5 !== _0x533fb5 + 0 && _0x533fb5 !== "longjmp") {
        throw _0x533fb5;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x2a2930(_0x100dac, _0x963eaa, _0x178692) {
    var _0x102d02 = _0xd24b5e();
    try {
      return _0x42c7fa(_0x100dac, _0x963eaa, _0x178692);
    } catch (_0x53fb86) {
      _0x114b19(_0x102d02);
      if (_0x53fb86 !== _0x53fb86 + 0 && _0x53fb86 !== "longjmp") {
        throw _0x53fb86;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x272041(_0x927a15, _0x43bc0c, _0x31a448, _0x3c1f4c) {
    var _0x1110dd = _0xd24b5e();
    try {
      return _0x4ea466(_0x927a15, _0x43bc0c, _0x31a448, _0x3c1f4c);
    } catch (_0x19c69f) {
      _0x114b19(_0x1110dd);
      if (_0x19c69f !== _0x19c69f + 0 && _0x19c69f !== "longjmp") {
        throw _0x19c69f;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0xa7b979(_0x19b3b8, _0x4e1044, _0x1393f6, _0x187bf1, _0x3c8fec, _0x5ed6ba, _0x4755d3, _0x206a80) {
    var _0xdffe49 = _0xd24b5e();
    try {
      return _0x4229d7(_0x19b3b8, _0x4e1044, _0x1393f6, _0x187bf1, _0x3c8fec, _0x5ed6ba, _0x4755d3, _0x206a80);
    } catch (_0x5d1b62) {
      _0x114b19(_0xdffe49);
      if (_0x5d1b62 !== _0x5d1b62 + 0 && _0x5d1b62 !== "longjmp") {
        throw _0x5d1b62;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x31ba62(_0x3000ff, _0x559272, _0x2c3f96, _0x233a2a) {
    var _0x258c9e = _0xd24b5e();
    try {
      return _0x4693dc(_0x3000ff, _0x559272, _0x2c3f96, _0x233a2a);
    } catch (_0x2807ab) {
      _0x114b19(_0x258c9e);
      if (_0x2807ab !== _0x2807ab + 0 && _0x2807ab !== "longjmp") {
        throw _0x2807ab;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1903d9(_0x584a97, _0x248198, _0x51826e, _0x1996e7, _0x58fff8, _0x3b536a, _0x4c6d02, _0x5929b2) {
    var _0x3ee1fa = _0xd24b5e();
    try {
      _0x472bf6(_0x584a97, _0x248198, _0x51826e, _0x1996e7, _0x58fff8, _0x3b536a, _0x4c6d02, _0x5929b2);
    } catch (_0x57d4d8) {
      _0x114b19(_0x3ee1fa);
      if (_0x57d4d8 !== _0x57d4d8 + 0 && _0x57d4d8 !== "longjmp") {
        throw _0x57d4d8;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x42f19f(_0x2931b9, _0x321fdf, _0x5f3abb, _0x57ff7f) {
    var _0x13c37e = _0xd24b5e();
    try {
      return _0x51bb23(_0x2931b9, _0x321fdf, _0x5f3abb, _0x57ff7f);
    } catch (_0x24b1dd) {
      _0x114b19(_0x13c37e);
      if (_0x24b1dd !== _0x24b1dd + 0 && _0x24b1dd !== "longjmp") {
        throw _0x24b1dd;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x54efc(_0x245989, _0x20a9dd, _0x23d4c7, _0x20d745, _0x214443) {
    var _0x409131 = _0xd24b5e();
    try {
      return _0x230148(_0x245989, _0x20a9dd, _0x23d4c7, _0x20d745, _0x214443);
    } catch (_0x1b0845) {
      _0x114b19(_0x409131);
      if (_0x1b0845 !== _0x1b0845 + 0 && _0x1b0845 !== "longjmp") {
        throw _0x1b0845;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x582a33(_0x23ef84, _0x1a38e4, _0x1f01d3, _0x5bc7b9, _0x4bd5bd, _0x10b543) {
    var _0x560b98 = _0xd24b5e();
    try {
      return _0x76e4dc(_0x23ef84, _0x1a38e4, _0x1f01d3, _0x5bc7b9, _0x4bd5bd, _0x10b543);
    } catch (_0x2b90af) {
      _0x114b19(_0x560b98);
      if (_0x2b90af !== _0x2b90af + 0 && _0x2b90af !== "longjmp") {
        throw _0x2b90af;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x6c2935(_0x1f3937, _0x5cfdb6, _0x23964b, _0xda34e7, _0x2002f2) {
    var _0x32d4ce = _0xd24b5e();
    try {
      return _0x95f3a2(_0x1f3937, _0x5cfdb6, _0x23964b, _0xda34e7, _0x2002f2);
    } catch (_0x4ce0f2) {
      _0x114b19(_0x32d4ce);
      if (_0x4ce0f2 !== _0x4ce0f2 + 0 && _0x4ce0f2 !== "longjmp") {
        throw _0x4ce0f2;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x279da2(_0x305726, _0x4adfa6, _0x2f8430, _0x582249, _0x1fea22, _0x49cea4, _0x152702, _0x36d2be) {
    var _0x5b2ee9 = _0xd24b5e();
    try {
      _0x3d7b70(_0x305726, _0x4adfa6, _0x2f8430, _0x582249, _0x1fea22, _0x49cea4, _0x152702, _0x36d2be);
    } catch (_0x5c49e4) {
      _0x114b19(_0x5b2ee9);
      if (_0x5c49e4 !== _0x5c49e4 + 0 && _0x5c49e4 !== "longjmp") {
        throw _0x5c49e4;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x24c1be(_0x1bea00, _0x5646f7, _0x3a7959, _0x2b1bf0, _0x4a3e2a, _0x1f8044, _0x695210) {
    var _0x1bff5a = _0xd24b5e();
    try {
      _0x5c8bb1(_0x1bea00, _0x5646f7, _0x3a7959, _0x2b1bf0, _0x4a3e2a, _0x1f8044, _0x695210);
    } catch (_0x329ade) {
      _0x114b19(_0x1bff5a);
      if (_0x329ade !== _0x329ade + 0 && _0x329ade !== "longjmp") {
        throw _0x329ade;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4a36f7(_0x54a43c, _0x37849f, _0x51a1e6, _0x16f1fa, _0x5497be) {
    var _0x15a5d3 = _0xd24b5e();
    try {
      _0x72e182(_0x54a43c, _0x37849f, _0x51a1e6, _0x16f1fa, _0x5497be);
    } catch (_0x14234a) {
      _0x114b19(_0x15a5d3);
      if (_0x14234a !== _0x14234a + 0 && _0x14234a !== "longjmp") {
        throw _0x14234a;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3f7e9d(_0x1206c8, _0x5cee50, _0x1b6458, _0x58413f, _0x40e900, _0x381df9, _0x3e4110, _0x16ef16) {
    var _0xb524db = _0xd24b5e();
    try {
      _0x224367(_0x1206c8, _0x5cee50, _0x1b6458, _0x58413f, _0x40e900, _0x381df9, _0x3e4110, _0x16ef16);
    } catch (_0x3bc9a9) {
      _0x114b19(_0xb524db);
      if (_0x3bc9a9 !== _0x3bc9a9 + 0 && _0x3bc9a9 !== "longjmp") {
        throw _0x3bc9a9;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x13751f(_0x5dea72, _0x930356, _0x11e610, _0x1c71fd, _0x46f73c, _0x5e27cf, _0x381bf2, _0x13d7aa, _0x253991) {
    var _0x3f702f = _0xd24b5e();
    try {
      _0x5af993(_0x5dea72, _0x930356, _0x11e610, _0x1c71fd, _0x46f73c, _0x5e27cf, _0x381bf2, _0x13d7aa, _0x253991);
    } catch (_0x19e5c2) {
      _0x114b19(_0x3f702f);
      if (_0x19e5c2 !== _0x19e5c2 + 0 && _0x19e5c2 !== "longjmp") {
        throw _0x19e5c2;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x38643f(_0x48cc18, _0x43bb93, _0x488581, _0x39d652, _0x18f698, _0x22ec3f, _0x1ca531, _0x4d5b5e, _0x1e0f18, _0x2cc373, _0x4d159f, _0x30d115, _0x58e911, _0x273a83, _0x5e0cb0, _0x455843, _0x288ecc) {
    var _0xcfa6d9 = _0xd24b5e();
    try {
      _0x34a96f(_0x48cc18, _0x43bb93, _0x488581, _0x39d652, _0x18f698, _0x22ec3f, _0x1ca531, _0x4d5b5e, _0x1e0f18, _0x2cc373, _0x4d159f, _0x30d115, _0x58e911, _0x273a83, _0x5e0cb0, _0x455843, _0x288ecc);
    } catch (_0x12d8bf) {
      _0x114b19(_0xcfa6d9);
      if (_0x12d8bf !== _0x12d8bf + 0 && _0x12d8bf !== "longjmp") {
        throw _0x12d8bf;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3ac748(_0x4fed03, _0x227def, _0x58e590, _0x4a5ed5, _0x4f25c4, _0x4aed4a, _0x21612d, _0x225684, _0x5e3e5b, _0x59cd1f) {
    var _0x1b1dba = _0xd24b5e();
    try {
      _0x506d81(_0x4fed03, _0x227def, _0x58e590, _0x4a5ed5, _0x4f25c4, _0x4aed4a, _0x21612d, _0x225684, _0x5e3e5b, _0x59cd1f);
    } catch (_0x455c27) {
      _0x114b19(_0x1b1dba);
      if (_0x455c27 !== _0x455c27 + 0 && _0x455c27 !== "longjmp") {
        throw _0x455c27;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x5545f4(_0x1853a5, _0x56fb36, _0x5065bd, _0x21d9c8, _0x10b1c0, _0x49c67d, _0x34b432, _0x4cb392, _0x4ffc01) {
    var _0x44cff5 = _0xd24b5e();
    try {
      _0x10f05c(_0x1853a5, _0x56fb36, _0x5065bd, _0x21d9c8, _0x10b1c0, _0x49c67d, _0x34b432, _0x4cb392, _0x4ffc01);
    } catch (_0x534aef) {
      _0x114b19(_0x44cff5);
      if (_0x534aef !== _0x534aef + 0 && _0x534aef !== "longjmp") {
        throw _0x534aef;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3ce81c(_0x211d6c, _0x4e7ee1, _0x3b8434, _0x2b9495, _0x5e2b4c, _0x559bb0, _0x2d9af0) {
    var _0x46614c = _0xd24b5e();
    try {
      return _0x7391e(_0x211d6c, _0x4e7ee1, _0x3b8434, _0x2b9495, _0x5e2b4c, _0x559bb0, _0x2d9af0);
    } catch (_0x46da82) {
      _0x114b19(_0x46614c);
      if (_0x46da82 !== _0x46da82 + 0 && _0x46da82 !== "longjmp") {
        throw _0x46da82;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x338f77(_0x143ab5, _0xcd9614, _0x387335, _0x1ac854, _0x3829f2, _0x24ac58) {
    var _0xf5c369 = _0xd24b5e();
    try {
      return _0x497080(_0x143ab5, _0xcd9614, _0x387335, _0x1ac854, _0x3829f2, _0x24ac58);
    } catch (_0x56fff1) {
      _0x114b19(_0xf5c369);
      if (_0x56fff1 !== _0x56fff1 + 0 && _0x56fff1 !== "longjmp") {
        throw _0x56fff1;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x510321(_0x4fa490, _0x13c2f8, _0x31dc93, _0xc73a23, _0x22fce8, _0x5d07f6, _0x1f5ee8, _0x3fb91a, _0x222ca7, _0xe5671a, _0x5d9682, _0x21b729) {
    var _0x4729ab = _0xd24b5e();
    try {
      return _0x1bdda2(_0x4fa490, _0x13c2f8, _0x31dc93, _0xc73a23, _0x22fce8, _0x5d07f6, _0x1f5ee8, _0x3fb91a, _0x222ca7, _0xe5671a, _0x5d9682, _0x21b729);
    } catch (_0x3ad64e) {
      _0x114b19(_0x4729ab);
      if (_0x3ad64e !== _0x3ad64e + 0 && _0x3ad64e !== "longjmp") {
        throw _0x3ad64e;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x389872(_0x57eacc, _0x90348c, _0x4deb05, _0x4e9e64) {
    var _0x2199fa = _0xd24b5e();
    try {
      _0x56adb8(_0x57eacc, _0x90348c, _0x4deb05, _0x4e9e64);
    } catch (_0xae716a) {
      _0x114b19(_0x2199fa);
      if (_0xae716a !== _0xae716a + 0 && _0xae716a !== "longjmp") {
        throw _0xae716a;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x4ac26d(_0x330106, _0x3339f2, _0x5d3185, _0x4d8af6, _0x2647ae, _0x202c4c, _0x17df9b, _0x351934, _0x5beaf5) {
    var _0x1076f6 = _0xd24b5e();
    try {
      _0x323741(_0x330106, _0x3339f2, _0x5d3185, _0x4d8af6, _0x2647ae, _0x202c4c, _0x17df9b, _0x351934, _0x5beaf5);
    } catch (_0x259c6b) {
      _0x114b19(_0x1076f6);
      if (_0x259c6b !== _0x259c6b + 0 && _0x259c6b !== "longjmp") {
        throw _0x259c6b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x43079c(_0x16ea10, _0x53cb7c, _0x57a527, _0x16aaa8, _0x5c90aa, _0x557518, _0x3c16aa, _0x51c7dd, _0x56e9fa, _0x3f5b46, _0x3cc3a4) {
    var _0xe2ef78 = _0xd24b5e();
    try {
      return _0x5d0043(_0x16ea10, _0x53cb7c, _0x57a527, _0x16aaa8, _0x5c90aa, _0x557518, _0x3c16aa, _0x51c7dd, _0x56e9fa, _0x3f5b46, _0x3cc3a4);
    } catch (_0x130cdb) {
      _0x114b19(_0xe2ef78);
      if (_0x130cdb !== _0x130cdb + 0 && _0x130cdb !== "longjmp") {
        throw _0x130cdb;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x14838d(_0x2369a7, _0x42b200, _0x2a2e3c, _0x38c33f, _0x464fc0, _0x53dd64, _0xa51c61, _0xacd6af, _0xd7b8ef, _0x5ed21b, _0x3a7caa) {
    var _0x291faf = _0xd24b5e();
    try {
      _0x5ea725(_0x2369a7, _0x42b200, _0x2a2e3c, _0x38c33f, _0x464fc0, _0x53dd64, _0xa51c61, _0xacd6af, _0xd7b8ef, _0x5ed21b, _0x3a7caa);
    } catch (_0x5c112b) {
      _0x114b19(_0x291faf);
      if (_0x5c112b !== _0x5c112b + 0 && _0x5c112b !== "longjmp") {
        throw _0x5c112b;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x235403(_0x568f83, _0x58e7f1, _0x478b3f, _0x57838c, _0x41c049, _0x13a7cc, _0x39e9d1, _0x34c023) {
    var _0x55b6f3 = _0xd24b5e();
    try {
      _0x52786e(_0x568f83, _0x58e7f1, _0x478b3f, _0x57838c, _0x41c049, _0x13a7cc, _0x39e9d1, _0x34c023);
    } catch (_0x5b0168) {
      _0x114b19(_0x55b6f3);
      if (_0x5b0168 !== _0x5b0168 + 0 && _0x5b0168 !== "longjmp") {
        throw _0x5b0168;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x1f86f7(_0x1bcecb, _0x55a63a, _0x231e60, _0x5bde45, _0x20f138, _0x2fb3c9, _0x23d95d, _0x3d278b, _0x4bfc8a, _0x4f084f, _0x5598d3) {
    var _0x1cfef6 = _0xd24b5e();
    try {
      _0x59e368(_0x1bcecb, _0x55a63a, _0x231e60, _0x5bde45, _0x20f138, _0x2fb3c9, _0x23d95d, _0x3d278b, _0x4bfc8a, _0x4f084f, _0x5598d3);
    } catch (_0x16b447) {
      _0x114b19(_0x1cfef6);
      if (_0x16b447 !== _0x16b447 + 0 && _0x16b447 !== "longjmp") {
        throw _0x16b447;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x3c329b(_0x1d08f0, _0x47244b, _0x492003, _0x3fd115, _0x3752a4, _0x432791, _0x195a6f) {
    var _0x1d4dfa = _0xd24b5e();
    try {
      return _0xf50222(_0x1d08f0, _0x47244b, _0x492003, _0x3fd115, _0x3752a4, _0x432791, _0x195a6f);
    } catch (_0x11d96d) {
      _0x114b19(_0x1d4dfa);
      if (_0x11d96d !== _0x11d96d + 0 && _0x11d96d !== "longjmp") {
        throw _0x11d96d;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x112226(_0x2f6168, _0x248ada, _0x5350f2, _0x8caa10, _0x24f84a, _0x1808ad, _0x5946a1) {
    var _0x17c63a = _0xd24b5e();
    try {
      return _0xcdd05b(_0x2f6168, _0x248ada, _0x5350f2, _0x8caa10, _0x24f84a, _0x1808ad, _0x5946a1);
    } catch (_0x4229ae) {
      _0x114b19(_0x17c63a);
      if (_0x4229ae !== _0x4229ae + 0 && _0x4229ae !== "longjmp") {
        throw _0x4229ae;
      }
      _0xf302ad(1, 0);
    }
  }
  function _0x59ffe8(_0x2af3f2, _0x15542f, _0x220a7f, _0x1797dd, _0x196bb2, _0x1e7e9d) {
    var _0x177289 = _0xd24b5e();
    try {
      return _0x16a8fe(_0x2af3f2, _0x15542f, _0x220a7f, _0x1797dd, _0x196bb2, _0x1e7e9d);
    } catch (_0x1ba5e1) {
      _0x114b19(_0x177289);
      if (_0x1ba5e1 !== _0x1ba5e1 + 0 && _0x1ba5e1 !== "longjmp") {
        throw _0x1ba5e1;
      }
      _0xf302ad(1, 0);
    }
  }
  _0xad46db.ccall = _0x42a8b0;
  _0xad46db.cwrap = _0x2cdd9c;
  _0xad46db.stackTrace = _0xd75f1d;
  _0xad46db.addRunDependency = _0x37f4a1;
  _0xad46db.removeRunDependency = _0x42d77a;
  _0xad46db.FS_createPath = _0x379d8a.createPath;
  _0xad46db.FS_createDataFile = _0x379d8a.createDataFile;
  _0xad46db.stackTrace = _0xd75f1d;
  var _0x191897;
  function _0x179a79(_0x28da7b) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x28da7b + ")";
    this.status = _0x28da7b;
  }
  var _0x384bb0 = false;
  _0x531915 = function _0x25ba42() {
    if (!_0x191897) {
      _0x50bddd();
    }
    if (!_0x191897) {
      _0x531915 = _0x25ba42;
    }
  };
  function _0x336e52(_0x854361) {
    var _0x25aaf8 = _0xad46db._main;
    _0x854361 = _0x854361 || [];
    var _0x336d42 = _0x854361.length + 1;
    var _0x4d21d4 = _0x9577d8((_0x336d42 + 1) * 4);
    _0x49ddaa[_0x4d21d4 >> 2] = _0x1cae6d(_0x4953ab);
    for (var _0x326187 = 1; _0x326187 < _0x336d42; _0x326187++) {
      _0x49ddaa[(_0x4d21d4 >> 2) + _0x326187] = _0x1cae6d(_0x854361[_0x326187 - 1]);
    }
    _0x49ddaa[(_0x4d21d4 >> 2) + _0x336d42] = 0;
    try {
      var _0x22fe0d = _0x25aaf8(_0x336d42, _0x4d21d4);
      _0x5d4289(_0x22fe0d, true);
    } catch (_0x366d60) {
      if (_0x366d60 instanceof _0x179a79) {
        return;
      } else if (_0x366d60 == "unwind") {
        return;
      } else {
        var _0x5d3544 = _0x366d60;
        if (_0x366d60 && typeof _0x366d60 === "object" && _0x366d60.stack) {
          _0x5d3544 = [_0x366d60, _0x366d60.stack];
        }
        _0xf7c01a("exception thrown: " + _0x5d3544);
        _0x31b7e8(1, _0x366d60);
      }
    } finally {
      _0x384bb0 = true;
    }
  }
  function _0x50bddd(_0x10d967) {
    _0x10d967 = _0x10d967 || _0x4d71e8;
    if (_0x5e15a9 > 0) {
      return;
    }
    _0xce195b();
    if (_0x5e15a9 > 0) {
      return;
    }
    function _0x44c4eb() {
      if (_0x191897) {
        return;
      }
      _0x191897 = true;
      _0xad46db.calledRun = true;
      if (_0x150bd9) {
        return;
      }
      _0x12a8d6();
      _0x40bd1();
      if (_0xad46db.onRuntimeInitialized) {
        _0xad46db.onRuntimeInitialized();
      }
      if (_0x284418) {
        _0x336e52(_0x10d967);
      }
      _0x63c92e();
    }
    if (_0xad46db.setStatus) {
      _0xad46db.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0xad46db.setStatus("");
        }, 1);
        _0x44c4eb();
      }, 1);
    } else {
      _0x44c4eb();
    }
  }
  _0xad46db.run = _0x50bddd;
  function _0x5d4289(_0x1d6e33, _0x3767ef) {
    _0x66bf97 = _0x1d6e33;
    if (_0x3767ef && _0xd18990() && _0x1d6e33 === 0) {
      return;
    }
    if (_0xd18990()) {} else {
      _0x23d1ce();
      if (_0xad46db.onExit) {
        _0xad46db.onExit(_0x1d6e33);
      }
      _0x150bd9 = true;
    }
    _0x31b7e8(_0x1d6e33, new _0x179a79(_0x1d6e33));
  }
  if (_0xad46db.preInit) {
    if (typeof _0xad46db.preInit == "function") {
      _0xad46db.preInit = [_0xad46db.preInit];
    }
    while (_0xad46db.preInit.length > 0) {
      _0xad46db.preInit.pop()();
    }
  }
  var _0x284418 = true;
  if (_0xad46db.noInitialRun) {
    _0x284418 = false;
  }
  _0x50bddd();
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XaFdBd2NLUkVKTEdodEdBUWdXU2dNTUJ3VXJVSEVOVGpNPQ==";
check_enable_debug();
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "https://games.1games.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x51fb6d) {
  console.log("_TIME_" + _0x51fb6d + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x20a224) {
  console.log(_0x20a224);
}
function gmEvent(_0x31e39b, _0x566c2b) {
  loadGMData(_0x31e39b, _0x566c2b);
}
function gmStartGame(_0xc13593) {
  _0xc13593();
}
function gmStartAds(_0x24e3ff) {
  _0x24e3ff();
}
let fireFPS = 0;
async function loadGMData(_0x4db552, _0x4320ef) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x4db552 != "document-ready" && _0x4db552 != "start-game" && _0x4db552 != "unload-game") {
      return;
    }
    if (_0x4db552 == "fps") {
      try {
        let _0x39782e = _0x4320ef.split("|");
        if (_0x39782e.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x39782e[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x39782e[1]);
          }
        }
      } catch (_0x10805c) {
        console.log("Error extracting time from abc:", _0x10805c.message);
      }
    }
    let _0x270844 = "";
    if (_0x4320ef) {
      _0x270844 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x4320ef));
    }
    _0x270844 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x270844 += "&gid=" + config.gameId;
    if (_0x4db552 == "ban-game" || _0x4db552 == "document-ready" || _0x4db552 == "start-game") {
      _0x270844 += "&wtop=" + "1games.io";
      _0x270844 += "&hn=" + "https://games.1games.io";
      _0x270844 += "&referrer=" + config.referrer;
    }
    let _0x11a389 = "&data=" + btoa(_0x270844);
    let _0x28c2bb = config.buildAPI + "?event=" + _0x4db552 + _0x11a389;
    let _0x384b2a = new XMLHttpRequest();
    _0x384b2a.open("GET", _0x28c2bb);
    _0x384b2a.onreadystatechange = function () {
      if (_0x384b2a.readyState !== 4) {
        return;
      }
      if (_0x384b2a.status === 200) {
        console.log(_0x384b2a.responseText);
      } else {
        console.log("HTTP error", _0x384b2a.status, _0x384b2a.statusText);
      }
    };
    _0x384b2a.send();
  } catch (_0x5ca934) {}
}
function xorEncryptMsg(_0x1140f2) {
  let _0x40dd79 = "gmdata@&!message@!3!@";
  let _0x4949a1 = "";
  for (let _0x29bf01 = 0; _0x29bf01 < _0x1140f2.length; _0x29bf01++) {
    const _0x5373e9 = _0x1140f2.charCodeAt(_0x29bf01) ^ _0x40dd79.charCodeAt(_0x29bf01 % _0x40dd79.length);
    _0x4949a1 += String.fromCharCode(_0x5373e9);
  }
  return btoa(_0x4949a1);
}
function check_event_log() {
  const _0x35f6ac = window.location.search;
  const _0x3fb37d = new URLSearchParams(_0x35f6ac);
  if (_0x3fb37d.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x339521) {
  try {
    const _0x1ba9e0 = eval(_0x339521);
    gmdebug("Result:", _0x1ba9e0);
    return _0x1ba9e0;
  } catch (_0x2bea8d) {
    gmdebug("Error executing code:", _0x2bea8d);
  }
}
window.addEventListener("beforeunload", function (_0x50d21d) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x5b2bb6 = "data@&@#$@#^FFgdfg!1estimate";
      let _0x25f813 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x6225a5 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x180af5 = _0x25f813;
      let _0x32329f = "";
      for (let _0x2a3982 = 0; _0x2a3982 < _0x6225a5.length; _0x2a3982++) {
        const _0x548ff9 = _0x6225a5.charCodeAt(_0x2a3982) ^ _0x5b2bb6.charCodeAt(_0x2a3982 % _0x5b2bb6.length);
        _0x32329f += String.fromCharCode(_0x548ff9);
      }
      sourceHtml = _0x32329f;
      let _0x4b0349 = document.getElementById("gmsoft-jssdk");
      if (!_0x4b0349 || _0x4b0349.src != sourceHtml) {
      }
    } catch (_0x4b21db) {
    }
  }, 3000);
}
function check_enable_debug() {
  try {
    const _0x49b8d5 = window.location.search;
    const _0x5bb65b = new URLSearchParams(_0x49b8d5);
    if (_0x5bb65b.has("d")) {} else {
      console.error = function () {};
      console.warn = function () {};
      console.log = function () {};
    }
  } catch (_0x16442f) {}
}