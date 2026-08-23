var unityFramework = (() => {
  var _0x229c0d = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x229c0d = _0x229c0d || __filename;
  }
  return function (_0x14f574) {
    _0x14f574 = _0x14f574 || {};
    var _0x17aa78 = typeof _0x14f574 != "undefined" ? _0x14f574 : {};
    var _0x5d683d;
    var _0x505718;
    _0x17aa78.ready = new Promise(function (_0x1a94e7, _0x2bd5e1) {
      _0x5d683d = _0x1a94e7;
      _0x505718 = _0x2bd5e1;
    });
    function _0x2e24a8(_0x45e6e7, _0x5fa61a) {
      _0x27db15("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x3d5aa0(_0x45e6e7, _0x5fa61a);
    }
    _0x17aa78.Pointer_stringify = _0x2e24a8;
    var _0x53dcdc = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
    var _0x743274 = _0x9b2cc6().match(new RegExp(_0x53dcdc));
    if (_0x743274) {
      _0x17aa78.stackTraceRegExp = new RegExp(_0x53dcdc.replace("([^\\n]+)", _0x743274[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    function _0x2db121(_0x1f0705) {
      if (_0x1cc874) {
        return;
      }
      _0x1cc874 = true;
      _0x336bbc = 1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x1f0705 !== undefined) {
        _0x329315(_0x1f0705);
        _0x2e37f2(_0x1f0705);
        _0x1f0705 = JSON.stringify(_0x1f0705);
      } else {
        _0x1f0705 = "";
      }
      var _0x253c9b = "abort(" + _0x1f0705 + ") at " + _0x35c797();
      if (_0x17aa78.abortHandler && _0x17aa78.abortHandler(_0x253c9b)) {
        return;
      }
      throw _0x253c9b;
    }
    _0x17aa78.SetFullscreen = function (_0x970c46) {
      if (typeof _0x440f06 === "undefined" || !_0x440f06) {
        console.log("Runtime not initialized yet.");
      } else if (typeof _0x106067 === "undefined") {
        console.log("Player not loaded yet.");
      } else {
        var _0x42434f = _0x106067.canPerformEventHandlerRequests;
        _0x106067.canPerformEventHandlerRequests = function () {
          return 1;
        };
        _0x17aa78.ccall("SetFullscreen", null, ["number"], [_0x970c46]);
        _0x106067.canPerformEventHandlerRequests = _0x42434f;
      }
    };
    if (!_0x17aa78.ENVIRONMENT_IS_PTHREAD) {
      _0x17aa78.preRun.push(function () {
        function _0x3b0f11() {
          _0x4fc026.queuePersist = function (_0x4a887c) {
            function _0x183526() {
              if (_0x4a887c.idbPersistState === "again") {
                _0x6ae511();
              } else {
                _0x4a887c.idbPersistState = 0;
              }
            }
            function _0x6ae511() {
              _0x4a887c.idbPersistState = "idb";
              _0x4fc026.syncfs(_0x4a887c, false, _0x183526);
            }
            if (!_0x4a887c.idbPersistState) {
              _0x4a887c.idbPersistState = setTimeout(_0x6ae511, 0);
            } else if (_0x4a887c.idbPersistState === "idb") {
              _0x4a887c.idbPersistState = "again";
            }
          };
          _0x4fc026.mount = function (_0x293dfc) {
            var _0x5010bd = _0x30c139.mount(_0x293dfc);
            if (typeof _0x293dfc !== "undefined" && _0x293dfc.opts && _0x293dfc.opts.autoPersist) {
              _0x5010bd.idbPersistState = 0;
              var _0x2213f9 = _0x5010bd.node_ops;
              _0x5010bd.node_ops = Object.assign({}, _0x5010bd.node_ops);
              _0x5010bd.node_ops.mknod = function (_0x2b7446, _0x546b2d, _0x9966a5, _0x4f6dca) {
                var _0x111813 = _0x2213f9.mknod(_0x2b7446, _0x546b2d, _0x9966a5, _0x4f6dca);
                _0x111813.node_ops = _0x5010bd.node_ops;
                _0x111813.idbfs_mount = _0x5010bd.mount;
                _0x111813.memfs_stream_ops = _0x111813.stream_ops;
                _0x111813.stream_ops = Object.assign({}, _0x111813.stream_ops);
                _0x111813.stream_ops.write = function (_0x12d210, _0x353953, _0x2b2f16, _0x3898cb, _0x349859, _0x488937) {
                  _0x12d210.node.isModified = true;
                  return _0x111813.memfs_stream_ops.write(_0x12d210, _0x353953, _0x2b2f16, _0x3898cb, _0x349859, _0x488937);
                };
                _0x111813.stream_ops.close = function (_0x6b7dea) {
                  var _0x590b4f = _0x6b7dea.node;
                  if (_0x590b4f.isModified) {
                    _0x4fc026.queuePersist(_0x590b4f.idbfs_mount);
                    _0x590b4f.isModified = false;
                  }
                  if (_0x590b4f.memfs_stream_ops.close) {
                    return _0x590b4f.memfs_stream_ops.close(_0x6b7dea);
                  }
                };
                return _0x111813;
              };
              _0x5010bd.node_ops.rmdir = function (_0x4cf311) {
                _0x4fc026.queuePersist(_0x5010bd.mount);
                return _0x2213f9.rmdir(_0x4cf311);
              };
              _0x5010bd.node_ops.unlink = function (_0x194b6a) {
                _0x4fc026.queuePersist(_0x5010bd.mount);
                return _0x2213f9.unlink(_0x194b6a);
              };
              _0x5010bd.node_ops.mkdir = function (_0x1120e6, _0x5ae327) {
                _0x4fc026.queuePersist(_0x5010bd.mount);
                return _0x2213f9.mkdir(_0x1120e6, _0x5ae327);
              };
              _0x5010bd.node_ops.symlink = function (_0x2a62c5, _0x133789, _0x5d1ae0) {
                _0x4fc026.queuePersist(_0x5010bd.mount);
                return _0x2213f9.symlink(_0x2a62c5, _0x133789, _0x5d1ae0);
              };
              _0x5010bd.node_ops.rename = function (_0x2160f5, _0x23a7de, _0x29bd04) {
                _0x4fc026.queuePersist(_0x5010bd.mount);
                return _0x2213f9.rename(_0x2160f5, _0x23a7de, _0x29bd04);
              };
            }
            return _0x5010bd;
          };
        }
        _0x3b0f11();
        var _0x4260dc = _0x17aa78.unityFileSystemInit || function () {
          _0x5292fc.mkdir("/idbfs");
          _0x17aa78.__unityIdbfsMount = _0x5292fc.mount(_0x4fc026, {
            autoPersist: !!_0x17aa78.autoSyncPersistentDataPath
          }, "/idbfs");
          _0x17aa78.addRunDependency("JS_FileSystem_Mount");
          _0x5292fc.syncfs(true, function (_0x5045d4) {
            if (_0x5045d4) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0x17aa78.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x4260dc();
      });
    }
    var _0x165a26 = [];
    var _0x1d9db1 = false;
    var _0x82b6e;
    var _0x18b95c = null;
    function _0x139d34(_0x23d6cd) {
      var _0x107a54 = Object.keys(_0x165a26);
      for (var _0x12917e = 0; _0x12917e < _0x107a54.length; ++_0x12917e) {
        var _0x442e22 = _0x165a26[_0x107a54[_0x12917e]];
        if (_0x442e22.deviceId && _0x442e22.deviceId == _0x23d6cd.deviceId) {
          return _0x442e22;
        }
      }
      for (var _0x12917e = 0; _0x12917e < _0x107a54.length; ++_0x12917e) {
        var _0x442e22 = _0x165a26[_0x107a54[_0x12917e]];
        if (_0x442e22 == _0x23d6cd) {
          return _0x442e22;
        }
      }
      for (var _0x12917e = 0; _0x12917e < _0x107a54.length; ++_0x12917e) {
        var _0x442e22 = _0x165a26[_0x107a54[_0x12917e]];
        if (_0x442e22.label && _0x442e22.label == _0x23d6cd.label) {
          return _0x442e22;
        }
      }
      for (var _0x12917e = 0; _0x12917e < _0x107a54.length; ++_0x12917e) {
        var _0x442e22 = _0x165a26[_0x107a54[_0x12917e]];
        if (_0x442e22.groupId && _0x442e22.kind && _0x442e22.groupId == _0x23d6cd.groupId && _0x442e22.kind == _0x23d6cd.kind) {
          return _0x442e22;
        }
      }
    }
    function _0x3d23b4() {
      for (var _0x28a0ec = 0;; ++_0x28a0ec) {
        if (!_0x165a26[_0x28a0ec]) {
          return _0x28a0ec;
        }
      }
    }
    function _0x55db0d(_0x20ed17) {
      _0x82b6e();
      _0x165a26 = [];
      var _0x57032e = {};
      var _0x543fe9 = [];
      _0x20ed17.forEach(function (_0x2eaf92) {
        if (_0x2eaf92.kind === "videoinput") {
          var _0x274eab = _0x139d34(_0x2eaf92);
          if (_0x274eab) {
            _0x57032e[_0x274eab.id] = _0x274eab;
          } else {
            _0x543fe9.push(_0x2eaf92);
          }
        }
      });
      _0x165a26 = _0x57032e;
      _0x543fe9.forEach(function (_0xa3ec11) {
        if (!_0xa3ec11.id) {
          _0xa3ec11.id = _0x3d23b4();
          _0xa3ec11.name = _0xa3ec11.label || "Video input #" + (_0xa3ec11.id + 1);
          _0xa3ec11.isFrontFacing = _0xa3ec11.name.toLowerCase().includes("front") || !_0xa3ec11.name.toLowerCase().includes("front") && !_0xa3ec11.name.toLowerCase().includes("back");
          _0x165a26[_0xa3ec11.id] = _0xa3ec11;
        }
      });
    }
    function _0x46ad0d() {
      if (!_0x165a26) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x28d1a1) {
        _0x55db0d(_0x28d1a1);
        _0x1d9db1 = true;
      }).catch(function (_0x553aba) {
        console.warn("Unable to enumerate media devices: " + _0x553aba + "\nWebcams will not be available.");
        _0x3181d0();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x46ad0d, 60000);
        _0x27db15("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0x3181d0() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x46ad0d);
      }
      _0x165a26 = null;
    }
    _0x17aa78.disableAccessToMediaDevices = _0x3181d0;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0x3181d0();
    } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
      setTimeout(function () {
        try {
          _0x3cd447("enumerateMediaDevices");
          _0x82b6e = function () {
            if (_0x18b95c !== null) {
              clearTimeout(_0x18b95c);
            }
            _0x5057aa("enumerateMediaDevices");
            if (navigator.mediaDevices) {
              console.log("navigator.mediaDevices support available");
            }
            _0x82b6e = function () {};
          };
          _0x46ad0d();
          _0x18b95c = setTimeout(_0x82b6e, 1000);
          navigator.mediaDevices.addEventListener("devicechange", _0x46ad0d);
        } catch (_0x37610a) {
          console.warn("Unable to enumerate media devices: " + _0x37610a);
          _0x3181d0();
        }
      }, 0);
    }
    function _0xd6c6ec(_0x405db0, _0x961ec0, _0x5b0901) {
      var _0x1ef2c7 = _0xdb8b5a(_0x961ec0);
      var _0x596d4a = _0xdb8b5a(_0x405db0);
      var _0x50a90c = 0;
      try {
        if (_0x5b0901 === undefined) {
          _0x18d1ec(_0x596d4a, _0x1ef2c7);
        } else if (typeof _0x5b0901 === "string") {
          _0x50a90c = _0xdb8b5a(_0x5b0901);
          _0x458b60(_0x596d4a, _0x1ef2c7, _0x50a90c);
        } else if (typeof _0x5b0901 === "number") {
          _0x5f229b(_0x596d4a, _0x1ef2c7, _0x5b0901);
        } else {
          throw "" + _0x5b0901 + " is does not have a type which is supported by SendMessage.";
        }
      } finally {
        _0x1e689c(_0x50a90c);
        _0x1e689c(_0x596d4a);
        _0x1e689c(_0x1ef2c7);
      }
    }
    _0x17aa78.SendMessage = _0xd6c6ec;
    var _0x42494 = Object.assign({}, _0x17aa78);
    var _0x174ec7 = [];
    var _0x5c2241 = "./this.program";
    var _0x23dfcf = (_0x5775cb, _0x47dd09) => {
      throw _0x47dd09;
    };
    var _0x54db29 = typeof window == "object";
    var _0x186d8a = typeof importScripts == "function";
    var _0x232f5c = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0x319cf2 = "";
    function _0x92593b(_0x2af4be) {
      if (_0x17aa78.locateFile) {
        return _0x17aa78.locateFile(_0x2af4be, _0x319cf2);
      }
      return _0x319cf2 + _0x2af4be;
    }
    var _0x316c58;
    var _0x1783c4;
    var _0x326de2;
    var _0x2dca6f;
    function _0x36f82b(_0x8aee4d) {
      if (_0x8aee4d instanceof _0x24b85b) {
        return;
      }
      let _0x48e2d1 = _0x8aee4d;
      _0x2e37f2("exiting due to exception: " + _0x48e2d1);
    }
    var _0x3cfdc5;
    var _0x1aee86;
    var _0x19537d;
    if (_0x232f5c) {
      if (_0x186d8a) {
        _0x319cf2 = require("path").dirname(_0x319cf2) + "/";
      } else {
        _0x319cf2 = __dirname + "/";
      }
      _0x19537d = () => {
        if (!_0x1aee86) {
          _0x3cfdc5 = require("fs");
          _0x1aee86 = require("path");
        }
      };
      _0x316c58 = function _0x5de305(_0x109245, _0x315342) {
        _0x19537d();
        _0x109245 = _0x1aee86.normalize(_0x109245);
        return _0x3cfdc5.readFileSync(_0x109245, _0x315342 ? undefined : "utf8");
      };
      _0x326de2 = _0xd3b11 => {
        var _0x3de715 = _0x316c58(_0xd3b11, true);
        if (!_0x3de715.buffer) {
          _0x3de715 = new Uint8Array(_0x3de715);
        }
        return _0x3de715;
      };
      _0x1783c4 = (_0x23147a, _0xac3b5a, _0x5353f2) => {
        _0x19537d();
        _0x23147a = _0x1aee86.normalize(_0x23147a);
        _0x3cfdc5.readFile(_0x23147a, function (_0x3e1002, _0x50bd1f) {
          if (_0x3e1002) {
            _0x5353f2(_0x3e1002);
          } else {
            _0xac3b5a(_0x50bd1f.buffer);
          }
        });
      };
      if (process.argv.length > 1) {
        _0x5c2241 = process.argv[1].replace(/\\/g, "/");
      }
      _0x174ec7 = process.argv.slice(2);
      process.on("uncaughtException", function (_0x1f073d) {
        if (!(_0x1f073d instanceof _0x24b85b)) {
          throw _0x1f073d;
        }
      });
      process.on("unhandledRejection", function (_0x2ecfc0) {
        throw _0x2ecfc0;
      });
      _0x23dfcf = (_0x35e0f8, _0x2bb04b) => {
        if (_0x2f160c()) {
          process.exitCode = _0x35e0f8;
          throw _0x2bb04b;
        }
        _0x36f82b(_0x2bb04b);
        process.exit(_0x35e0f8);
      };
      _0x17aa78.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else if (_0x54db29 || _0x186d8a) {
      if (_0x186d8a) {
        _0x319cf2 = "https://games.ofree.io/escape-road-3/game.html";
      } else if (typeof document != "undefined" && document.currentScript) {
        _0x319cf2 = document.currentScript.src;
      }
      if (_0x229c0d) {
        _0x319cf2 = _0x229c0d;
      }
      if (_0x319cf2.indexOf("blob:") !== 0) {
        _0x319cf2 = _0x319cf2.substr(0, _0x319cf2.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      } else {
        _0x319cf2 = "";
      }
      {
        _0x316c58 = _0x5c176f => {
          var _0x548fd0 = new XMLHttpRequest();
          _0x548fd0.open("GET", _0x5c176f, false);
          _0x548fd0.send(null);
          return _0x548fd0.responseText;
        };
        if (_0x186d8a) {
          _0x326de2 = _0x576435 => {
            var _0x4567d1 = new XMLHttpRequest();
            _0x4567d1.open("GET", _0x576435, false);
            _0x4567d1.responseType = "arraybuffer";
            _0x4567d1.send(null);
            return new Uint8Array(_0x4567d1.response);
          };
        }
        _0x1783c4 = (_0x37c416, _0x4b1030, _0x4c8e43) => {
          var _0x125513 = new XMLHttpRequest();
          _0x125513.open("GET", _0x37c416, true);
          _0x125513.responseType = "arraybuffer";
          _0x125513.onload = () => {
            if (_0x125513.status == 200 || _0x125513.status == 0 && _0x125513.response) {
              _0x4b1030(_0x125513.response);
              return;
            }
            _0x4c8e43();
          };
          _0x125513.onerror = _0x4c8e43;
          _0x125513.send(null);
        };
      }
      _0x2dca6f = _0x3ccb83 => document.title = _0x3ccb83;
    } else {}
    var _0x329315 = _0x17aa78.print || console.log.bind(console);
    var _0x2e37f2 = _0x17aa78.printErr || console.warn.bind(console);
    Object.assign(_0x17aa78, _0x42494);
    _0x42494 = null;
    if (_0x17aa78.arguments) {
      _0x174ec7 = _0x17aa78.arguments;
    }
    if (_0x17aa78.thisProgram) {
      _0x5c2241 = _0x17aa78.thisProgram;
    }
    if (_0x17aa78.quit) {
      _0x23dfcf = _0x17aa78.quit;
    }
    var _0x542f72 = 4;
    function _0x27db15(_0x292d73) {
      if (!_0x27db15.shown) {
        _0x27db15.shown = {};
      }
      if (!_0x27db15.shown[_0x292d73]) {
        _0x27db15.shown[_0x292d73] = 1;
        _0x2e37f2(_0x292d73);
      }
    }
    function _0x490729(_0x3f4b5a, _0x4c54e5) {
      if (typeof WebAssembly.Function == "function") {
        var _0x10635c = {
          i: "i32",
          j: "i64",
          f: "f32",
          d: "f64"
        };
        var _0x12c966 = {
          parameters: [],
          results: _0x4c54e5[0] == "v" ? [] : [_0x10635c[_0x4c54e5[0]]]
        };
        for (var _0x1b0cf5 = 1; _0x1b0cf5 < _0x4c54e5.length; ++_0x1b0cf5) {
          _0x12c966.parameters.push(_0x10635c[_0x4c54e5[_0x1b0cf5]]);
        }
        return new WebAssembly.Function(_0x12c966, _0x3f4b5a);
      }
      var _0x58e056 = [1, 0, 1, 96];
      var _0x636a53 = _0x4c54e5.slice(0, 1);
      var _0x3e8a13 = _0x4c54e5.slice(1);
      var _0x8c032c = {
        i: 127,
        j: 126,
        f: 125,
        d: 124
      };
      _0x58e056.push(_0x3e8a13.length);
      for (var _0x1b0cf5 = 0; _0x1b0cf5 < _0x3e8a13.length; ++_0x1b0cf5) {
        _0x58e056.push(_0x8c032c[_0x3e8a13[_0x1b0cf5]]);
      }
      if (_0x636a53 == "v") {
        _0x58e056.push(0);
      } else {
        _0x58e056 = _0x58e056.concat([1, _0x8c032c[_0x636a53]]);
      }
      _0x58e056[1] = _0x58e056.length - 2;
      var _0x108a1e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(_0x58e056, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
      var _0x1cc524 = new WebAssembly.Module(_0x108a1e);
      var _0x46e896 = new WebAssembly.Instance(_0x1cc524, {
        e: {
          f: _0x3f4b5a
        }
      });
      var _0x312ef1 = _0x46e896.exports.f;
      return _0x312ef1;
    }
    var _0x37531f = [];
    var _0x19d828;
    function _0x3bade9() {
      if (_0x37531f.length) {
        return _0x37531f.pop();
      }
      try {
        _0xc453ff.grow(1);
      } catch (_0x3fc58d) {
        if (!(_0x3fc58d instanceof RangeError)) {
          throw _0x3fc58d;
        }
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return _0xc453ff.length - 1;
    }
    function _0x18c984(_0x2db26c, _0x1ab548) {
      for (var _0x25ae5d = _0x2db26c; _0x25ae5d < _0x2db26c + _0x1ab548; _0x25ae5d++) {
        var _0x43440f = _0xed17dd(_0x25ae5d);
        if (_0x43440f) {
          _0x19d828.set(_0x43440f, _0x25ae5d);
        }
      }
    }
    var _0x25af41 = 0;
    var _0x1b256f = _0x30113a => {
      _0x25af41 = _0x30113a;
    };
    var _0x3d0afa = () => _0x25af41;
    var _0x51d54b;
    if (_0x17aa78.wasmBinary) {
      _0x51d54b = _0x17aa78.wasmBinary;
    }
    var _0x3a51ec = _0x17aa78.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0x2db121("no native wasm support detected");
    }
    var _0x48fb0c;
    var _0x1cc874 = false;
    var _0x336bbc;
    function _0x469125(_0x1c7409, _0x7f3f69) {
      if (!_0x1c7409) {
        _0x2db121(_0x7f3f69);
      }
    }
    function _0x5e29a3(_0x4c54a2) {
      var _0x551b1d = _0x17aa78["_" + _0x4c54a2];
      return _0x551b1d;
    }
    function _0x58a4b2(_0x3f7d63, _0x2276c0, _0x2d2b9e, _0x381c97, _0x4d1b02) {
      var _0x170baa = {
        string: function (_0x3b3f58) {
          var _0x2cd965 = 0;
          if (_0x3b3f58 !== null && _0x3b3f58 !== undefined && _0x3b3f58 !== 0) {
            var _0x5b0607 = (_0x3b3f58.length << 2) + 1;
            _0x2cd965 = _0x8020c5(_0x5b0607);
            _0x4f8934(_0x3b3f58, _0x2cd965, _0x5b0607);
          }
          return _0x2cd965;
        },
        array: function (_0x3613fe) {
          var _0x480ed7 = _0x8020c5(_0x3613fe.length);
          _0x1dddd9(_0x3613fe, _0x480ed7);
          return _0x480ed7;
        }
      };
      function _0x1ec3fb(_0x22fded) {
        if (_0x2276c0 === "string") {
          return _0x3d5aa0(_0x22fded);
        }
        if (_0x2276c0 === "boolean") {
          return Boolean(_0x22fded);
        }
        return _0x22fded;
      }
      var _0x5453a4 = _0x5e29a3(_0x3f7d63);
      var _0x2adda7 = [];
      var _0x38256b = 0;
      if (_0x381c97) {
        for (var _0x229e98 = 0; _0x229e98 < _0x381c97.length; _0x229e98++) {
          var _0x121f45 = _0x170baa[_0x2d2b9e[_0x229e98]];
          if (_0x121f45) {
            if (_0x38256b === 0) {
              _0x38256b = _0x47dca3();
            }
            _0x2adda7[_0x229e98] = _0x121f45(_0x381c97[_0x229e98]);
          } else {
            _0x2adda7[_0x229e98] = _0x381c97[_0x229e98];
          }
        }
      }
      var _0x2bd613 = _0x5453a4.apply(null, _0x2adda7);
      function _0x11fc81(_0xb8b9db) {
        if (_0x38256b !== 0) {
          _0xafab9e(_0x38256b);
        }
        return _0x1ec3fb(_0xb8b9db);
      }
      _0x2bd613 = _0x11fc81(_0x2bd613);
      return _0x2bd613;
    }
    function _0x41b3d5(_0x49ae73, _0x8914c, _0x4d5572, _0x4974c8) {
      _0x4d5572 = _0x4d5572 || [];
      var _0xcf41a2 = _0x4d5572.every(function (_0xc4e1b) {
        return _0xc4e1b === "number";
      });
      var _0xc7fbb1 = _0x8914c !== "string";
      if (_0xc7fbb1 && _0xcf41a2 && !_0x4974c8) {
        return _0x5e29a3(_0x49ae73);
      }
      return function () {
        return _0x58a4b2(_0x49ae73, _0x8914c, _0x4d5572, arguments, _0x4974c8);
      };
    }
    var _0x50685f = 1;
    var _0x42af64 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x29c7fe(_0x51295a, _0x3af524, _0x1dae0c) {
      var _0x348b81 = _0x3af524 + _0x1dae0c;
      var _0x1e25e5 = _0x3af524;
      while (_0x51295a[_0x1e25e5] && !(_0x1e25e5 >= _0x348b81)) {
        ++_0x1e25e5;
      }
      if (_0x1e25e5 - _0x3af524 > 16 && _0x51295a.buffer && _0x42af64) {
        return _0x42af64.decode(_0x51295a.subarray(_0x3af524, _0x1e25e5));
      } else {
        var _0x586dd2 = "";
        while (_0x3af524 < _0x1e25e5) {
          var _0x28f5d6 = _0x51295a[_0x3af524++];
          if (!(_0x28f5d6 & 128)) {
            _0x586dd2 += String.fromCharCode(_0x28f5d6);
            continue;
          }
          var _0x5759b6 = _0x51295a[_0x3af524++] & 63;
          if ((_0x28f5d6 & 224) == 192) {
            _0x586dd2 += String.fromCharCode((_0x28f5d6 & 31) << 6 | _0x5759b6);
            continue;
          }
          var _0x38b6ef = _0x51295a[_0x3af524++] & 63;
          if ((_0x28f5d6 & 240) == 224) {
            _0x28f5d6 = (_0x28f5d6 & 15) << 12 | _0x5759b6 << 6 | _0x38b6ef;
          } else {
            _0x28f5d6 = (_0x28f5d6 & 7) << 18 | _0x5759b6 << 12 | _0x38b6ef << 6 | _0x51295a[_0x3af524++] & 63;
          }
          if (_0x28f5d6 < 65536) {
            _0x586dd2 += String.fromCharCode(_0x28f5d6);
          } else {
            var _0x3e5048 = _0x28f5d6 - 65536;
            _0x586dd2 += String.fromCharCode(_0x3e5048 >> 10 | 55296, _0x3e5048 & 1023 | 56320);
          }
        }
      }
      return _0x586dd2;
    }
    function _0x3d5aa0(_0x4940ea, _0x3e9e9f) {
      if (_0x4940ea) {
        return _0x29c7fe(_0x59122e, _0x4940ea, _0x3e9e9f);
      } else {
        return "";
      }
    }
    function _0x3ea981(_0xe96cd0, _0x4f5778, _0x29935e, _0x47bd45) {
      if (!(_0x47bd45 > 0)) {
        return 0;
      }
      var _0x219c56 = _0x29935e;
      var _0x48d0a9 = _0x29935e + _0x47bd45 - 1;
      for (var _0x22ccfa = 0; _0x22ccfa < _0xe96cd0.length; ++_0x22ccfa) {
        var _0x1795f7 = _0xe96cd0.charCodeAt(_0x22ccfa);
        if (_0x1795f7 >= 55296 && _0x1795f7 <= 57343) {
          var _0x1f31dd = _0xe96cd0.charCodeAt(++_0x22ccfa);
          _0x1795f7 = 65536 + ((_0x1795f7 & 1023) << 10) | _0x1f31dd & 1023;
        }
        if (_0x1795f7 <= 127) {
          if (_0x29935e >= _0x48d0a9) {
            break;
          }
          _0x4f5778[_0x29935e++] = _0x1795f7;
        } else if (_0x1795f7 <= 2047) {
          if (_0x29935e + 1 >= _0x48d0a9) {
            break;
          }
          _0x4f5778[_0x29935e++] = _0x1795f7 >> 6 | 192;
          _0x4f5778[_0x29935e++] = _0x1795f7 & 63 | 128;
        } else if (_0x1795f7 <= 65535) {
          if (_0x29935e + 2 >= _0x48d0a9) {
            break;
          }
          _0x4f5778[_0x29935e++] = _0x1795f7 >> 12 | 224;
          _0x4f5778[_0x29935e++] = _0x1795f7 >> 6 & 63 | 128;
          _0x4f5778[_0x29935e++] = _0x1795f7 & 63 | 128;
        } else {
          if (_0x29935e + 3 >= _0x48d0a9) {
            break;
          }
          _0x4f5778[_0x29935e++] = _0x1795f7 >> 18 | 240;
          _0x4f5778[_0x29935e++] = _0x1795f7 >> 12 & 63 | 128;
          _0x4f5778[_0x29935e++] = _0x1795f7 >> 6 & 63 | 128;
          _0x4f5778[_0x29935e++] = _0x1795f7 & 63 | 128;
        }
      }
      _0x4f5778[_0x29935e] = 0;
      return _0x29935e - _0x219c56;
    }
    function _0x4f8934(_0x5aae5d, _0x3e171d, _0x2ca9ce) {
      return _0x3ea981(_0x5aae5d, _0x59122e, _0x3e171d, _0x2ca9ce);
    }
    function _0xa3918a(_0x2d7871) {
      var _0x50ac81 = 0;
      for (var _0x1cb1b5 = 0; _0x1cb1b5 < _0x2d7871.length; ++_0x1cb1b5) {
        var _0x3677a0 = _0x2d7871.charCodeAt(_0x1cb1b5);
        if (_0x3677a0 >= 55296 && _0x3677a0 <= 57343) {
          _0x3677a0 = 65536 + ((_0x3677a0 & 1023) << 10) | _0x2d7871.charCodeAt(++_0x1cb1b5) & 1023;
        }
        if (_0x3677a0 <= 127) {
          ++_0x50ac81;
        } else if (_0x3677a0 <= 2047) {
          _0x50ac81 += 2;
        } else if (_0x3677a0 <= 65535) {
          _0x50ac81 += 3;
        } else {
          _0x50ac81 += 4;
        }
      }
      return _0x50ac81;
    }
    var _0x533bc2 = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
    function _0x1254fd(_0x14357c) {
      var _0x22dd73 = _0xa3918a(_0x14357c) + 1;
      var _0x4f72bc = _0x302e44(_0x22dd73);
      if (_0x4f72bc) {
        _0x3ea981(_0x14357c, _0xe1b6fc, _0x4f72bc, _0x22dd73);
      }
      return _0x4f72bc;
    }
    function _0x34e24b(_0x252a53) {
      var _0x1a4300 = _0xa3918a(_0x252a53) + 1;
      var _0x1f2eab = _0x8020c5(_0x1a4300);
      _0x3ea981(_0x252a53, _0xe1b6fc, _0x1f2eab, _0x1a4300);
      return _0x1f2eab;
    }
    function _0x1dddd9(_0x1c98ce, _0x40b518) {
      _0xe1b6fc.set(_0x1c98ce, _0x40b518);
    }
    function _0x128dbf(_0x4761b4, _0x13765f, _0x43d9a3) {
      for (var _0x141c28 = 0; _0x141c28 < _0x4761b4.length; ++_0x141c28) {
        _0xe1b6fc[_0x13765f++ >> 0] = _0x4761b4.charCodeAt(_0x141c28);
      }
      if (!_0x43d9a3) {
        _0xe1b6fc[_0x13765f >> 0] = 0;
      }
    }
    var _0x5ac3fe;
    var _0xe1b6fc;
    var _0x59122e;
    var _0x2b0fe4;
    var _0x319c2a;
    var _0x576263;
    var _0x50f6f2;
    var _0x51ee3f;
    var _0xe5eb95;
    function _0x533823(_0x267a14) {
      _0x5ac3fe = _0x267a14;
      _0x17aa78.HEAP8 = _0xe1b6fc = new Int8Array(_0x267a14);
      _0x17aa78.HEAP16 = _0x2b0fe4 = new Int16Array(_0x267a14);
      _0x17aa78.HEAP32 = _0x576263 = new Int32Array(_0x267a14);
      _0x17aa78.HEAPU8 = _0x59122e = new Uint8Array(_0x267a14);
      _0x17aa78.HEAPU16 = _0x319c2a = new Uint16Array(_0x267a14);
      _0x17aa78.HEAPU32 = _0x50f6f2 = new Uint32Array(_0x267a14);
      _0x17aa78.HEAPF32 = _0x51ee3f = new Float32Array(_0x267a14);
      _0x17aa78.HEAPF64 = _0xe5eb95 = new Float64Array(_0x267a14);
    }
    var _0x1ea051 = _0x17aa78.INITIAL_MEMORY || 33554432;
    var _0xc453ff;
    var _0x5391e1 = [];
    var _0x3d35de = [];
    var _0x13ecd1 = [];
    var _0xdbee52 = [];
    var _0x233e27 = [];
    var _0x440f06 = false;
    function _0x2f160c() {
      return _0x3a51ec;
    }
    function _0x2af5e0() {
      if (_0x17aa78.preRun) {
        if (typeof _0x17aa78.preRun == "function") {
          _0x17aa78.preRun = [_0x17aa78.preRun];
        }
        while (_0x17aa78.preRun.length) {
          _0x59cbb7(_0x17aa78.preRun.shift());
        }
      }
      _0xf6c7b7(_0x5391e1);
    }
    function _0x362694() {
      _0x440f06 = true;
      if (!_0x17aa78.noFSInit && !_0x5292fc.init.initialized) {
        _0x5292fc.init();
      }
      _0x5292fc.ignorePermissions = false;
      _0x496db8.init();
      _0x5e5b72.root = _0x5292fc.mount(_0x5e5b72, {}, null);
      _0x2a2418.root = _0x5292fc.mount(_0x2a2418, {}, null);
      _0xf6c7b7(_0x3d35de);
    }
    function _0x22cf7d() {
      _0xf6c7b7(_0x13ecd1);
    }
    function _0x461791() {
      if (_0x17aa78.postRun) {
        if (typeof _0x17aa78.postRun == "function") {
          _0x17aa78.postRun = [_0x17aa78.postRun];
        }
        while (_0x17aa78.postRun.length) {
          _0x69661f(_0x17aa78.postRun.shift());
        }
      }
      _0xf6c7b7(_0x233e27);
    }
    function _0x59cbb7(_0x533712) {
      _0x5391e1.unshift(_0x533712);
    }
    function _0x2b53bd(_0x28a73b) {
      _0x3d35de.unshift(_0x28a73b);
    }
    function _0x69661f(_0xe29dc1) {
      _0x233e27.unshift(_0xe29dc1);
    }
    var _0xe90c1e = 0;
    var _0x185843 = null;
    var _0x2743b8 = null;
    function _0x454e79(_0x2843ef) {
      return _0x2843ef;
    }
    function _0x3cd447(_0x421533) {
      _0xe90c1e++;
      if (_0x17aa78.monitorRunDependencies) {
        _0x17aa78.monitorRunDependencies(_0xe90c1e);
      }
    }
    function _0x5057aa(_0x475f34) {
      _0xe90c1e--;
      if (_0x17aa78.monitorRunDependencies) {
        _0x17aa78.monitorRunDependencies(_0xe90c1e);
      }
      if (_0xe90c1e == 0) {
        if (_0x185843 !== null) {
          clearInterval(_0x185843);
          _0x185843 = null;
        }
        if (_0x2743b8) {
          var _0x5750de = _0x2743b8;
          _0x2743b8 = null;
          _0x5750de();
        }
      }
    }
    _0x17aa78.preloadedImages = {};
    _0x17aa78.preloadedAudios = {};
    function _0x2db121(_0x3dba7f) {
      {
        if (_0x17aa78.onAbort) {
          _0x17aa78.onAbort(_0x3dba7f);
        }
      }
      _0x3dba7f = "Aborted(" + _0x3dba7f + ")";
      _0x2e37f2(_0x3dba7f);
      _0x1cc874 = true;
      _0x336bbc = 1;
      _0x3dba7f += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x220ee0 = new WebAssembly.RuntimeError(_0x3dba7f);
      _0x505718(_0x220ee0);
      throw _0x220ee0;
    }
    var _0x2b1339 = "data:application/octet-stream;base64,";
    function _0x17aac6(_0x5926b0) {
      return _0x5926b0.startsWith(_0x2b1339);
    }
    function _0xc0daf5(_0x4b5a14) {
      return _0x4b5a14.startsWith("file://");
    }
    var _0x229ef9;
    _0x229ef9 = "build.wasm";
    if (!_0x17aac6(_0x229ef9)) {
      _0x229ef9 = _0x92593b(_0x229ef9);
    }
    function _0x3a1218(_0x29c009) {
      try {
        if (_0x29c009 == _0x229ef9 && _0x51d54b) {
          return new Uint8Array(_0x51d54b);
        }
        if (_0x326de2) {
          return _0x326de2(_0x29c009);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (_0x3e619b) {
        _0x2db121(_0x3e619b);
      }
    }
    function _0x44de66() {
      if (!_0x51d54b && (_0x54db29 || _0x186d8a)) {
        if (typeof fetch == "function" && !_0xc0daf5(_0x229ef9)) {
          return fetch(_0x229ef9, {
            credentials: "same-origin"
          }).then(function (_0x46a118) {
            if (!_0x46a118.ok) {
              throw "failed to load wasm binary file at '" + _0x229ef9 + "'";
            }
            return _0x46a118.arrayBuffer();
          }).catch(function () {
            return _0x3a1218(_0x229ef9);
          });
        } else if (_0x1783c4) {
          return new Promise(function (_0x5550c6, _0x2cec61) {
            _0x1783c4(_0x229ef9, function (_0x4f8400) {
              _0x5550c6(new Uint8Array(_0x4f8400));
            }, _0x2cec61);
          });
        }
      }
      return Promise.resolve().then(function () {
        return _0x3a1218(_0x229ef9);
      });
    }
    function _0x27b938() {
      var _0x547ce1 = {
        env: _0x105b8a,
        wasi_snapshot_preview1: _0x105b8a
      };
      function _0x2a5645(_0xbcc4f0, _0xe25102) {
        var _0x31651a = _0xbcc4f0.exports;
        _0x17aa78.asm = _0x31651a;
        _0x48fb0c = _0x17aa78.asm.memory;
        _0x533823(_0x48fb0c.buffer);
        _0xc453ff = _0x17aa78.asm.__indirect_function_table;
        _0x2b53bd(_0x17aa78.asm.__wasm_call_ctors);
        _0x5057aa("wasm-instantiate");
      }
      _0x3cd447("wasm-instantiate");
      function _0x573828(_0x539d8d) {
        _0x2a5645(_0x539d8d.instance);
      }
      function _0x49a223(_0x2a6ff2) {
        return _0x44de66().then(function (_0xc41b3d) {
          return WebAssembly.instantiate(_0xc41b3d, _0x547ce1);
        }).then(function (_0x31e02b) {
          return _0x31e02b;
        }).then(_0x2a6ff2, function (_0x5d7d36) {
          _0x2e37f2("failed to asynchronously prepare wasm: " + _0x5d7d36);
          _0x2db121(_0x5d7d36);
        });
      }
      function _0x5a010b() {
        if (!_0x51d54b && typeof WebAssembly.instantiateStreaming == "function" && !_0x17aac6(_0x229ef9) && !_0xc0daf5(_0x229ef9) && typeof fetch == "function") {
          return fetch(_0x229ef9, {
            credentials: "same-origin"
          }).then(function (_0x4f566e) {
            var _0x1ecb10 = WebAssembly.instantiateStreaming(_0x4f566e, _0x547ce1);
            return _0x1ecb10.then(_0x573828, function (_0x140c55) {
              _0x2e37f2("wasm streaming compile failed: " + _0x140c55);
              _0x2e37f2("falling back to ArrayBuffer instantiation");
              return _0x49a223(_0x573828);
            });
          });
        } else {
          return _0x49a223(_0x573828);
        }
      }
      if (_0x17aa78.instantiateWasm) {
        try {
          var _0x52912c = _0x17aa78.instantiateWasm(_0x547ce1, _0x2a5645);
          return _0x52912c;
        } catch (_0xac998e) {
          _0x2e37f2("Module.instantiateWasm callback failed with error: " + _0xac998e);
          return false;
        }
      }
      _0x5a010b().catch(_0x505718);
      return {};
    }
    var _0x161da0;
    var _0x34cc1;
    var _0x3de1ac = {
      5132648: function () {
        return _0x17aa78.webglContextAttributes.premultipliedAlpha;
      },
      5132709: function () {
        return _0x17aa78.webglContextAttributes.preserveDrawingBuffer;
      },
      5132773: function () {
        return _0x17aa78.webglContextAttributes.powerPreference;
      }
    };
    function _0xf6c7b7(_0x325fe9) {
      while (_0x325fe9.length > 0) {
        var _0xf90af9 = _0x325fe9.shift();
        if (typeof _0xf90af9 == "function") {
          _0xf90af9(_0x17aa78);
          continue;
        }
        var _0x453f58 = _0xf90af9.func;
        if (typeof _0x453f58 == "number") {
          if (_0xf90af9.arg === undefined) {
            (function () {
              _0x2366b1.call(null, _0x453f58);
            })();
          } else {
            (function (_0x4d59a2) {
              _0x529933.apply(null, [_0x453f58, _0x4d59a2]);
            })(_0xf90af9.arg);
          }
        } else {
          _0x453f58(_0xf90af9.arg === undefined ? null : _0xf90af9.arg);
        }
      }
    }
    function _0x371c3e(_0x156192) {
      var _0x4ff504 = _0x47dca3();
      var _0x5060f9 = _0x156192();
      _0xafab9e(_0x4ff504);
      return _0x5060f9;
    }
    function _0x553aa6(_0x3a77ec) {
      return _0x3a77ec;
    }
    function _0x38b734(_0x5789c9) {
      var _0x5146c6 = /\b_Z[\w\d_]+/g;
      return _0x5789c9.replace(_0x5146c6, function (_0x49f11c) {
        var _0x5f4df6 = _0x553aa6(_0x49f11c);
        if (_0x49f11c === _0x5f4df6) {
          return _0x49f11c;
        } else {
          return _0x5f4df6 + " [" + _0x49f11c + "]";
        }
      });
    }
    function _0x1c882c(_0x3952cb, _0xa72d78, _0x4476e2) {
      var _0x3b384a = _0x17aa78["dynCall_" + _0x3952cb];
      if (_0x4476e2 && _0x4476e2.length) {
        return _0x3b384a.apply(null, [_0xa72d78].concat(_0x4476e2));
      } else {
        return _0x3b384a.call(null, _0xa72d78);
      }
    }
    var _0x429389 = [];
    function _0xed17dd(_0x5d7643) {
      var _0x3f53ee = _0x429389[_0x5d7643];
      if (!_0x3f53ee) {
        if (_0x5d7643 >= _0x429389.length) {
          _0x429389.length = _0x5d7643 + 1;
        }
        _0x429389[_0x5d7643] = _0x3f53ee = _0xc453ff.get(_0x5d7643);
      }
      return _0x3f53ee;
    }
    function _0x50de76(_0xc4167b, _0x40871e, _0x2553d2) {
      return _0x1c882c(_0xc4167b, _0x40871e, _0x2553d2);
    }
    function _0x1fa151(_0x1743f4) {
      if (_0x1743f4 instanceof _0x24b85b || _0x1743f4 == "unwind") {
        return _0x336bbc;
      }
      _0x23dfcf(1, _0x1743f4);
    }
    function _0x9b2cc6() {
      var _0x3566c3 = new Error();
      if (!_0x3566c3.stack) {
        try {
          throw new Error();
        } catch (_0x4d8bb3) {
          _0x3566c3 = _0x4d8bb3;
        }
        if (!_0x3566c3.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x3566c3.stack.toString();
    }
    function _0x4fde89(_0x314e14, _0x313fdf) {
      _0xc453ff.set(_0x314e14, _0x313fdf);
      _0x429389[_0x314e14] = _0x313fdf;
    }
    function _0x35c797() {
      var _0x41070c = _0x9b2cc6();
      if (_0x17aa78.extraStackTrace) {
        _0x41070c += "\n" + _0x17aa78.extraStackTrace();
      }
      return _0x38b734(_0x41070c);
    }
    function _0x2cb0c5(_0x1505ac, _0x128464, _0x478b96, _0x92ca6e, _0x3f8ae6) {
      var _0x13f156 = _0x3d5aa0(_0x1505ac);
      var _0x5a00c9 = _0x3d5aa0(_0x128464);
      var _0x4c9fc7 = _0x3d5aa0(_0x478b96);
      var _0x35437b = _0x3d5aa0(_0x92ca6e);
      var _0x3a20f8 = _0x3d5aa0(_0x3f8ae6);
      try {
        firebase.firestore().collection(_0x13f156).add(JSON.parse(_0x5a00c9)).then(function (_0x3f7459) {
          window.unityInstance.SendMessage(_0x4c9fc7, _0x35437b, "Success: document added in collection " + _0x13f156);
        }).catch(function (_0x8feccc) {
          window.unityInstance.SendMessage(_0x4c9fc7, _0x3a20f8, JSON.stringify(_0x8feccc, Object.getOwnPropertyNames(_0x8feccc)));
        });
      } catch (_0x5f1278) {
        window.unityInstance.SendMessage(_0x4c9fc7, _0x3a20f8, JSON.stringify(_0x5f1278, Object.getOwnPropertyNames(_0x5f1278)));
      }
    }
    function _0x28a637(_0x29b5db, _0x58e78b, _0x316b11, _0x19c640, _0x55e735, _0xb9814b, _0x375344) {
      var _0x47f3ff = _0x3d5aa0(_0x29b5db);
      var _0xa309e1 = _0x3d5aa0(_0x58e78b);
      var _0x51ceca = _0x3d5aa0(_0x316b11);
      var _0x391a1f = _0x3d5aa0(_0x19c640);
      var _0xff7f76 = _0x3d5aa0(_0x55e735);
      var _0x126d79 = _0x3d5aa0(_0xb9814b);
      var _0x4975eb = _0x3d5aa0(_0x375344);
      try {
        var _0x19c640 = {};
        _0x19c640[_0x51ceca] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x391a1f));
        firebase.firestore().collection(_0x47f3ff).doc(_0xa309e1).update(_0x19c640).then(function () {
          window.unityInstance.SendMessage(_0xff7f76, _0x126d79, "Success: element " + _0x391a1f + " was added in " + _0x51ceca);
        }).catch(function (_0x3bb86b) {
          window.unityInstance.SendMessage(_0xff7f76, _0x4975eb, JSON.stringify(_0x3bb86b, Object.getOwnPropertyNames(_0x3bb86b)));
        });
      } catch (_0x1bbc42) {
        window.unityInstance.SendMessage(_0xff7f76, _0x4975eb, JSON.stringify(_0x1bbc42, Object.getOwnPropertyNames(_0x1bbc42)));
      }
    }
    function _0x3edb6f(_0x337301) {
      try {
        window.CrazyGames.SDK.user.addScore(_0x337301);
      } catch (_0x3bc342) {
        window.UnitySDK.logError("Error while calling addScore:", _0x3bc342);
      }
    }
    function _0x5b8f0f(_0x6b56d8, _0x33313e) {
      try {
        window.CrazyGames.SDK.analytics.trackOrder(window.unityStringify(_0x6b56d8), JSON.parse(window.unityStringify(_0x33313e)));
      } catch (_0x458612) {
        window.UnitySDK.logError("Error while calling trackOrder:", _0x458612);
      }
    }
    function _0x284fa6(_0x8aa980) {
      var _0xf52d2c = _0x3d5aa0(_0x8aa980);
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(_0xf52d2c).then(function () {
          console.log("Text copied to clipboard");
        }).catch(function (_0x49b35c) {
          console.error("Failed to copy text: ", _0x49b35c);
        });
      } else {
        var _0x38a3c7 = document.createElement("textarea");
        _0x38a3c7.value = _0xf52d2c;
        _0x38a3c7.style.position = "fixed";
        _0x38a3c7.style.left = "-999999px";
        document.body.appendChild(_0x38a3c7);
        _0x38a3c7.focus();
        _0x38a3c7.select();
        try {
          document.execCommand("copy");
          console.log("Text copied to clipboard (fallback)");
        } catch (_0x15c95d) {
          console.error("Failed to copy text: ", _0x15c95d);
        }
        document.body.removeChild(_0x38a3c7);
      }
    }
    function _0x2cc43e(_0x807fa8) {
      const _0x3e6a2b = document.createElement("textarea");
      _0x3e6a2b.value = window.unityStringify(_0x807fa8);
      document.body.appendChild(_0x3e6a2b);
      _0x3e6a2b.select();
      _0x3e6a2b.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(_0x3e6a2b);
    }
    function _0x1d75a3(_0x536d3e, _0x4049b5, _0x3899cf, _0x585c16, _0x378269) {
      var _0x23d03b = _0x3d5aa0(_0x536d3e);
      var _0x4bc4de = _0x3d5aa0(_0x4049b5);
      var _0x32d1a1 = _0x3d5aa0(_0x3899cf);
      var _0x103f0b = _0x3d5aa0(_0x585c16);
      var _0x519c00 = _0x3d5aa0(_0x378269);
      try {
        firebase.auth().createUserWithEmailAndPassword(_0x23d03b, _0x4bc4de).then(function (_0x10f336) {
          window.unityInstance.SendMessage(_0x32d1a1, _0x103f0b, "Success: signed up for " + _0x23d03b);
        }).catch(function (_0x156800) {
          window.unityInstance.SendMessage(_0x32d1a1, _0x519c00, JSON.stringify(_0x156800, Object.getOwnPropertyNames(_0x156800)));
        });
      } catch (_0x1cc846) {
        window.unityInstance.SendMessage(_0x32d1a1, _0x519c00, JSON.stringify(_0x1cc846, Object.getOwnPropertyNames(_0x1cc846)));
      }
    }
    function _0x5bdec2() {
      try {
        window.CrazyGames.SDK.data.clear();
      } catch (_0x48ec00) {
        window.UnitySDK.logError("Error while calling clear:", _0x48ec00);
      }
    }
    function _0x50cab0(_0x3e797b) {
      var _0x236869 = null;
      try {
        _0x236869 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x3e797b));
      } catch (_0x5644e2) {
        window.UnitySDK.logError("Error while calling getItem:", _0x5644e2);
      }
      var _0x1a5e71 = _0xa3918a(_0x236869 + "") + 1;
      var _0x444f1d = _0x302e44(_0x1a5e71);
      _0x4f8934(_0x236869, _0x444f1d, _0x1a5e71);
      return _0x444f1d;
    }
    function _0x51d9b0(_0x4c1812) {
      var _0x482d98 = null;
      try {
        _0x482d98 = window.CrazyGames.SDK.data.getItem(window.unityStringify(_0x4c1812));
      } catch (_0x378407) {
        window.UnitySDK.logError("Error while calling getItem:", _0x378407);
      }
      return _0x482d98 !== null;
    }
    function _0x93d2b0(_0x4924d4) {
      try {
        window.CrazyGames.SDK.data.removeItem(window.unityStringify(_0x4924d4));
      } catch (_0x55dad3) {
        window.UnitySDK.logError("Error while calling removeItem:", _0x55dad3);
      }
    }
    function _0x186176(_0x5cf9de, _0x1a7607) {
      try {
        window.CrazyGames.SDK.data.setItem(window.unityStringify(_0x5cf9de), window.unityStringify(_0x1a7607));
      } catch (_0x3b1fbd) {
        window.UnitySDK.logError("Error while calling setItem:", _0x3b1fbd);
      }
    }
    function _0x1b1738(_0x38c5ce, _0x107038, _0x26bcb1, _0x4eadca, _0x1ff64c) {
      var _0x458607 = _0x3d5aa0(_0x38c5ce);
      var _0x1d922 = _0x3d5aa0(_0x107038);
      var _0xd29db1 = _0x3d5aa0(_0x26bcb1);
      var _0x545c9d = _0x3d5aa0(_0x4eadca);
      var _0x4aa4b4 = _0x3d5aa0(_0x1ff64c);
      try {
        firebase.firestore().collection(_0x458607).doc(_0x1d922).delete().then(function () {
          window.unityInstance.SendMessage(_0xd29db1, _0x545c9d, "Success: document " + _0x1d922 + " was deleted");
        }).catch(function (_0x5981e7) {
          window.unityInstance.SendMessage(_0xd29db1, _0x4aa4b4, JSON.stringify(_0x5981e7, Object.getOwnPropertyNames(_0x5981e7)));
        });
      } catch (_0x1cc097) {
        window.unityInstance.SendMessage(_0xd29db1, _0x4aa4b4, JSON.stringify(_0x1cc097, Object.getOwnPropertyNames(_0x1cc097)));
      }
    }
    function _0x2453bb(_0x260089, _0x6c9cca, _0x388a80, _0xdf9cde, _0x47428b, _0x6cc3e3) {
      var _0x3b50b1 = _0x3d5aa0(_0x260089);
      var _0x1e0d7f = _0x3d5aa0(_0x6c9cca);
      var _0x1f88ef = _0x3d5aa0(_0x388a80);
      var _0x10cfa0 = _0x3d5aa0(_0xdf9cde);
      var _0x51ade5 = _0x3d5aa0(_0x47428b);
      var _0x541b41 = _0x3d5aa0(_0x6cc3e3);
      try {
        var _0x12739e = {};
        _0x12739e[_0x1f88ef] = firebase.firestore.FieldValue.delete();
        firebase.firestore().collection(_0x3b50b1).doc(_0x1e0d7f).update(_0x12739e).then(function () {
          window.unityInstance.SendMessage(_0x10cfa0, _0x51ade5, "Success: field " + _0x1f88ef + " was deleted");
        }).catch(function (_0x32659b) {
          window.unityInstance.SendMessage(_0x10cfa0, _0x541b41, JSON.stringify(_0x32659b, Object.getOwnPropertyNames(_0x32659b)));
        });
      } catch (_0x3fa64d) {
        window.unityInstance.SendMessage(_0x10cfa0, _0x541b41, JSON.stringify(_0x3fa64d, Object.getOwnPropertyNames(_0x3fa64d)));
      }
    }
    function _0x364457(_0x511b23, _0x3d17e6, _0x50b59a, _0x473bf6) {
      var _0x3f0c46 = _0x3d5aa0(_0x511b23);
      var _0x2e3d42 = _0x3d5aa0(_0x3d17e6);
      var _0x12595c = _0x3d5aa0(_0x50b59a);
      var _0x1e9051 = _0x3d5aa0(_0x473bf6);
      try {
        firebase.database().ref(_0x3f0c46).remove().then(function (_0x101441) {
          window.unityInstance.SendMessage(_0x2e3d42, _0x12595c, "Success: " + _0x3f0c46 + " was deleted");
        });
      } catch (_0x328b0f) {
        window.unityInstance.SendMessage(_0x2e3d42, _0x1e9051, JSON.stringify(_0x328b0f, Object.getOwnPropertyNames(_0x328b0f)));
      }
    }
    function _0x134ab9(_0x154abb, _0x23a9c2, _0x54b531, _0x3265b0) {
      var _0x255b42 = _0x3d5aa0(_0x154abb);
      var _0x4a9688 = _0x3d5aa0(_0x23a9c2);
      var _0x3f1d36 = _0x3d5aa0(_0x54b531);
      var _0x28109e = _0x3d5aa0(_0x3265b0);
      try {
        firebase.storage().ref(_0x255b42).getDownloadURL().then(function (_0x30ff17) {
          var _0x4b35ba = new XMLHttpRequest();
          _0x4b35ba.responseType = "arraybuffer";
          _0x4b35ba.onload = function (_0x5a97d1) {
            var _0x3aeb8d = _0x4b35ba.response;
            window.unityInstance.SendMessage(_0x4a9688, _0x3f1d36, _0x317373(_0x3aeb8d));
          };
          _0x4b35ba.open("GET", _0x30ff17);
          _0x4b35ba.send();
        }).catch(function (_0x5e47e2) {
          window.unityInstance.SendMessage(_0x4a9688, _0x28109e, JSON.stringify(_0x5e47e2, Object.getOwnPropertyNames(_0x5e47e2)));
        });
      } catch (_0x4e7ac7) {
        window.unityInstance.SendMessage(_0x4a9688, _0x28109e, JSON.stringify(_0x4e7ac7, Object.getOwnPropertyNames(_0x4e7ac7)));
      }
      function _0x317373(_0xc51fdc) {
        var _0x322b97 = "";
        var _0x220356 = new Uint8Array(_0xc51fdc);
        var _0x7443fb = _0x220356.byteLength;
        for (var _0x2bb948 = 0; _0x2bb948 < _0x7443fb; _0x2bb948++) {
          _0x322b97 += String.fromCharCode(_0x220356[_0x2bb948]);
        }
        return window.btoa(_0x322b97);
      }
    }
    function _0x42f42a() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
        window[preroll.config.loaderObjectName].refetchAd();
      } catch (_0xc17113) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x9f3c89(_0x1ba4dc) {
      var _0x3000f7 = {
        adStarted: function () {
          _0xd6c6ec("GMSDKAdvertisement", "JSLibCallback_AdStarted");
        },
        adFinished: function () {
          _0xd6c6ec("GMSDKAdvertisement", "JSLibCallback_AdFinished");
        },
        adError: function (_0x2be157) {
          _0xd6c6ec("GMSDKAdvertisement", "JSLibCallback_AdError", JSON.stringify(_0x2be157));
        }
      };
      var _0x2e04f9 = window.GMSOFT_GMADS_INFO.reward;
      var _0x416528 = _0x2e04f9[Math.floor(Math.random() * _0x2e04f9.length)];
      try {
        var _0x20ff7c = document.createElement("div");
        _0x20ff7c.id = "gm-ad-overlay";
        _0x20ff7c.style.cssText = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
        var _0x420256 = document.createElement("div");
        _0x420256.style.cssText = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
        var _0x3cd387 = document.createElement("video");
        _0x3cd387.src = _0x416528.image;
        _0x3cd387.style.cssText = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ";
        _0x3cd387.autoplay = true;
        _0x3cd387.muted = true;
        _0x3cd387.preload = "auto";
        var _0x21efb4 = document.createElement("button");
        _0x21efb4.innerHTML = "Skip (5)";
        _0x21efb4.disabled = true;
        _0x21efb4.style.cssText = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ";
        _0x21efb4.disabled = true;
        _0x21efb4.style.opacity = "0.5";
        var _0x105ca1 = document.createElement("div");
        _0x105ca1.style.cssText = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
        var _0x43dd23 = document.createElement("div");
        _0x43dd23.style.cssText = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
        var _0x5b568d = 5;
        var _0x1e1de3 = setInterval(function () {
          _0x5b568d--;
          if (_0x5b568d > 0) {
            _0x21efb4.innerHTML = "Skip (" + _0x5b568d + ")";
          } else {
            _0x21efb4.innerHTML = "Skip";
            _0x21efb4.disabled = false;
            _0x21efb4.style.opacity = "1";
            _0x21efb4.style.cursor = "pointer";
            clearInterval(_0x1e1de3);
          }
        }, 1000);
        function _0x42e23a() {
          if (_0x20ff7c && _0x20ff7c.parentNode) {
            _0x20ff7c.parentNode.removeChild(_0x20ff7c);
          }
          clearInterval(_0x1e1de3);
          _0x3000f7.adFinished();
        }
        function _0x1281d7() {
          window.open(_0x416528.url, "_blank");
        }
        function _0x4391e6() {
          if (_0x3cd387.duration && _0x3cd387.currentTime) {
            var _0x93d6e7 = _0x3cd387.currentTime / _0x3cd387.duration * 100;
            _0x43dd23.style.width = _0x93d6e7 + "%";
          }
        }
        _0x3cd387.addEventListener("loadstart", function () {
          _0x3000f7.adStarted();
        });
        _0x3cd387.addEventListener("timeupdate", function () {
          _0x4391e6();
        });
        _0x3cd387.addEventListener("ended", function () {
          _0x42e23a();
        });
        _0x3cd387.addEventListener("error", function (_0x18895b) {
          var _0x1176ec = {
            message: "Video load error",
            code: _0x18895b.target.error ? _0x18895b.target.error.code : "unknown"
          };
          _0x3000f7.adError(_0x1176ec);
          _0x42e23a();
        });
        _0x3cd387.addEventListener("click", function () {
          _0x1281d7();
        });
        _0x21efb4.addEventListener("click", function () {
          if (!_0x21efb4.disabled) {
            _0x42e23a();
          }
        });
        _0x3cd387.addEventListener("contextmenu", function (_0xb0dfe2) {
          _0xb0dfe2.preventDefault();
        });
        _0x105ca1.appendChild(_0x43dd23);
        _0x420256.appendChild(_0x3cd387);
        _0x420256.appendChild(_0x21efb4);
        _0x420256.appendChild(_0x105ca1);
        _0x20ff7c.appendChild(_0x420256);
        document.body.appendChild(_0x20ff7c);
        _0x3cd387.play().catch(function (_0x52fd5a) {
          console.error("Video play error:", _0x52fd5a);
          _0x3000f7.adError({
            message: "Cannot play video",
            details: _0x52fd5a.message
          });
          _0x42e23a();
        });
      } catch (_0x51677d) {
        console.error("Ad overlay creation error:", _0x51677d);
        _0x3000f7.adError({
          message: "Failed to create ad overlay",
          details: _0x51677d.message
        });
      }
    }
    function _0x1efe22(_0x414fb7, _0x4e4a08) {
      gmEvent(_0x3d5aa0(_0x414fb7), _0x3d5aa0(_0x4e4a08));
    }
    function _0x9581fe() {
      const _0x2626ca = "gmsdksigndomain";
      try {
        if (localStorage.hasOwnProperty(_0x2626ca)) {
          let _0x3677e8 = localStorage.getItem(_0x2626ca);
          if (_0x3677e8 && _0x3677e8.length > 10) {
            window.GMSOFT_SIGNED = _0x3677e8;
            console.log("Local storage GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
            _0xd6c6ec("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
            return;
          }
        }
      } catch (_0x115429) {
        console.error("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x115429);
      }
      try {
        let _0x490b51 = "hn=" + "games.ofree.io";
        let _0x5c4a18 = btoa(_0x490b51);
        let _0x317b7c = "https://api.cdnwave.com/sdkdom/keysigned";
        if (window.GMSOFT_OPTIONS && window.GMSOFT_OPTIONS.signedurl) {
          _0x317b7c = window.GMSOFT_OPTIONS.signedurl;
        }
        let _0x26ccd8 = _0x317b7c + "?params=" + _0x5c4a18;
        var _0x5efa8c = new XMLHttpRequest();
        let _0x4788b7 = "";
        _0x5efa8c.open("GET", _0x26ccd8, false);
        _0x5efa8c.send(_0x4788b7);
        let _0x2c18d2 = _0x5efa8c.responseText;

        window.GMSOFT_SIGNED = _0x2c18d2;
        localStorage.setItem(_0x2626ca, _0x2c18d2);
        console.log("send request GM_SDK_GetVeryfiedSignature: ", window.GMSOFT_SIGNED);
        _0xd6c6ec("GmSoft", "OnGetVeryfiedSignature", window.GMSOFT_SIGNED);
      } catch (_0x356e91) {
        console.error("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x356e91);
      }
    }
    function _0x16aad1() {
      let _0xb22c6f = "games.ofree.io";
      _0xd6c6ec("GmSoft", "SetUnityHostName", _0xb22c6f);
      _0xd6c6ec("GmSoft", "SetSDKType", window.GMSOFT_SDKTYPE);
    }
    function _0x3137c9() {
      console.log("GM_SDK_StartGame");
      try {
        gmStartGame(function () {
          _0xd6c6ec("GmSoft", "SetGameInfoParam", JSON.stringify(window.GMSOFT_GAME_INFO));
        });
      } catch (_0x4aeeaa) {
        console.error("Error JS 12", _0x4aeeaa);
      }
      try {
        gmStartAds(function () {
          _0xd6c6ec("GmSoft", "SetAdParam", JSON.stringify(window.GMSOFT_ADS_INFO));
        });
      } catch (_0xadb7f6) {
        console.error("Error JS 20", _0xadb7f6);
      }
      try {
      } catch (_0x1d66af) {
        console.error("Error JS 28", _0x1d66af);
      }
    }
    function _0x5b7f9d(_0x5c68a5) {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
        window[preroll.config.loaderObjectName].GameEvent(_0x5c68a5);
      } catch (_0x3615e6) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0xebd4fb() {
      try {
        window.CrazyGames.SDK.game.gameplayStart();
      } catch (_0x3b59d4) {
        window.UnitySDK.logError("Error while calling gameplayStart:", _0x3b59d4);
      }
    }
    function _0x2ca5cc() {
      try {
        window.CrazyGames.SDK.game.gameplayStop();
      } catch (_0x1b6971) {
        window.UnitySDK.logError("Error while calling gameplayStop:", _0x1b6971);
      }
    }
    function _0x3c851f() {
      var _0xaf09cf = firebaseConfig.projectId;
      var _0x403355 = _0xa3918a(_0xaf09cf) + 1;
      var _0x562419 = _0x302e44(_0x403355);
      _0x4f8934(_0xaf09cf, _0x562419, _0x403355);
      return _0x562419;
    }
    function _0x1a582c(_0x2b7289, _0x574618, _0x4d4c94, _0x5b06ae, _0x268bc1) {
      var _0x54f467 = _0x3d5aa0(_0x2b7289);
      var _0x17d7c9 = _0x3d5aa0(_0x574618);
      var _0x1eb833 = _0x3d5aa0(_0x4d4c94);
      var _0x586c52 = _0x3d5aa0(_0x5b06ae);
      var _0xcada92 = _0x3d5aa0(_0x268bc1);
      try {
        firebase.firestore().collection(_0x54f467).doc(_0x17d7c9).get().then(function (_0x5c4345) {
          if (_0x5c4345.exists) {
            window.unityInstance.SendMessage(_0x1eb833, _0x586c52, JSON.stringify(_0x5c4345.data()));
          } else {
            window.unityInstance.SendMessage(_0x1eb833, _0x586c52, "null");
          }
        }).catch(function (_0x13783e) {
          window.unityInstance.SendMessage(_0x1eb833, _0xcada92, JSON.stringify(_0x13783e, Object.getOwnPropertyNames(_0x13783e)));
        });
      } catch (_0x82e385) {
        window.unityInstance.SendMessage(_0x1eb833, _0xcada92, JSON.stringify(_0x82e385, Object.getOwnPropertyNames(_0x82e385)));
      }
    }
    function _0x520a3d(_0x3df4c5, _0x51ff49, _0x5deb9d, _0xb7e934) {
      var _0x4ea211 = _0x3d5aa0(_0x3df4c5);
      var _0x5507d8 = _0x3d5aa0(_0x51ff49);
      var _0x1fddcc = _0x3d5aa0(_0x5deb9d);
      var _0x26e3fa = _0x3d5aa0(_0xb7e934);
      try {
        firebase.firestore().collection(_0x4ea211).get().then(function (_0x34af81) {
          var _0x48c95a = {};
          _0x34af81.forEach(function (_0x141fe0) {
            _0x48c95a[_0x141fe0.id] = _0x141fe0.data();
          });
          window.unityInstance.SendMessage(_0x5507d8, _0x1fddcc, JSON.stringify(_0x48c95a));
        }).catch(function (_0x3858dd) {
          window.unityInstance.SendMessage(_0x5507d8, _0x26e3fa, JSON.stringify(_0x3858dd, Object.getOwnPropertyNames(_0x3858dd)));
        });
      } catch (_0xa89941) {
        window.unityInstance.SendMessage(_0x5507d8, _0x26e3fa, JSON.stringify(_0xa89941, Object.getOwnPropertyNames(_0xa89941)));
      }
    }
    function _0x56df70() {
      var _0x171b85 = window.CrazyGames.SDK.environment;
      var _0x248c9a = _0xa3918a(_0x171b85) + 1;
      var _0x494ebd = _0x302e44(_0x248c9a);
      _0x4f8934(_0x171b85, _0x494ebd, _0x248c9a);
      return _0x494ebd;
    }
    function _0x4356e8() {
      var _0x3652c5 = JSON.stringify(window.CrazyGames.SDK.game.settings);
      var _0xb2d259 = _0xa3918a(_0x3652c5) + 1;
      var _0x2bd582 = _0x302e44(_0xb2d259);
      _0x4f8934(_0x3652c5, _0x2bd582, _0xb2d259);
      return _0x2bd582;
    }
    function _0x168fd9(_0x1028b4) {
      var _0x522e75 = new URLSearchParams(window.location.search);
      var _0x1e3fd1 = _0x522e75.get(window.unityStringify(_0x1028b4));
      if (_0x1e3fd1 === null) {
        _0x1e3fd1 = "";
      }
      var _0x12eac4 = _0xa3918a(_0x1e3fd1) + 1;
      var _0x57acd1 = _0x302e44(_0x12eac4);
      _0x4f8934(_0x1e3fd1, _0x57acd1, _0x12eac4);
      return _0x57acd1;
    }
    function _0x45a7bb() {
      return window.CrazyGames.SDK.isQaTool;
    }
    function _0x4b170b(_0x11e1a8, _0x31d170) {
      if (performance.memory) {
        _0xe5eb95[_0x11e1a8 >> 3] = performance.memory.totalJSHeapSize;
        _0xe5eb95[_0x31d170 >> 3] = performance.memory.usedJSHeapSize;
      } else {
        _0xe5eb95[_0x11e1a8 >> 3] = NaN;
        _0xe5eb95[_0x31d170 >> 3] = NaN;
      }
    }
    function _0x7a2397(_0x4cb595, _0x5bb19a, _0x21dd22, _0x57c4c8) {
      var _0x3ecdf9 = _0x3d5aa0(_0x4cb595);
      var _0x21d545 = _0x3d5aa0(_0x5bb19a);
      var _0x531b34 = _0x3d5aa0(_0x21dd22);
      var _0xa2c815 = _0x3d5aa0(_0x57c4c8);
      try {
        firebase.database().ref(_0x3ecdf9).once("value").then(function (_0x270ac7) {
          window.unityInstance.SendMessage(_0x21d545, _0x531b34, JSON.stringify(_0x270ac7.val()));
        });
      } catch (_0x310c60) {
        window.unityInstance.SendMessage(_0x21d545, _0xa2c815, JSON.stringify(_0x310c60, Object.getOwnPropertyNames(_0x310c60)));
      }
    }
    function _0x34fb8b() {
      var _0x4b52cc = JSON.stringify(window.CrazyGames.SDK.user.systemInfo);
      var _0x273c37 = _0xa3918a(_0x4b52cc) + 1;
      var _0x4eedd3 = _0x302e44(_0x273c37);
      _0x4f8934(_0x4b52cc, _0x4eedd3, _0x273c37);
      return _0x4eedd3;
    }
    function _0x38ab7e() {
      window.CrazyGames.SDK.user.getUser().then(function (_0x5660b5) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
          userJson: JSON.stringify(_0x5660b5)
        }));
      }).catch(function (_0x9415a8) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_GetUser", JSON.stringify({
          errorJson: JSON.stringify(_0x9415a8)
        }));
      });
    }
    function _0xdeaf41() {
      window.CrazyGames.SDK.user.getUserToken().then(function (_0x191765) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
          token: _0x191765
        }));
      }).catch(function (_0x54c1bd) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON.stringify({
          errorJson: JSON.stringify(_0x54c1bd)
        }));
      });
    }
    function _0x205145() {
      window.CrazyGames.SDK.user.getXsollaUserToken().then(function (_0x59454d) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
          token: _0x59454d
        }));
      }).catch(function (_0x2e32ca) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON.stringify({
          errorJson: JSON.stringify(_0x2e32ca)
        }));
      });
    }
    function _0x298c80() {}
    function _0x3ea523() {
      console.log("afg.ready: " + afg.ready);
      if (afg.ready) {
        _0xd6c6ec("H5Adverisement", "PreloadRewardedVideoCallback", 1);
        afg.adBreak({
          type: "reward",
          name: "reward ads",
          beforeReward: function (_0x1d797a) {
            this._showRewardAdFn = _0x1d797a;
            console.log("[H5 Ads] before reward");
          }.bind(this),
          adViewed: function () {
            this._showRewardAdFn = null;
            _0xd6c6ec("H5Adverisement", "RewardedVideoSuccessCallback");
            console.log("[H5 Ads] ad viewed");
          }.bind(this),
          adDismissed: function () {
            this._showRewardAdFn = null;
            _0xd6c6ec("H5Adverisement", "RewardedVideoFailureCallback");
            console.log("[H5 Ads] ad failure");
          }.bind(this),
          adBreakDone: function (_0x57f3ed) {
            console.log("[H5 Ads] Reward break done");
            _0xd6c6ec("H5Adverisement", "ResumeGameCallback");
          }.bind(this)
        });
      } else {
        console.log("[H5 Ads] no reward ads");
        _0xd6c6ec("H5Adverisement", "PreloadRewardedVideoCallback", 0);
      }
    }
    function _0x40d962() {
      if (afg.ready) {
        afg.adBreak({
          type: "next",
          name: "next",
          beforeAd: function () {
            afg.onBeforeAd();
            console.log("[H5 Ads] Before ad");
            _0xd6c6ec("H5Adverisement", "PauseGameCallback");
          }.bind(this),
          adBreakDone: function () {
            console.log("[H5 Ads] Ad break done");
            _0xd6c6ec("H5Adverisement", "ResumeGameCallback");
          }.bind(this)
        });
      } else {
        console.log("no " + adType + " ads");
        _0xd6c6ec("H5Adverisement", "ResumeGameCallback");
      }
    }
    function _0x187ebc() {
      if (this._showRewardAdFn) {
        _0xd6c6ec("H5Adverisement", "PauseGameCallback");
        this._showRewardAdFn();
      } else {
        _0xd6c6ec("H5Adverisement", "ResumeGameCallback");
      }
    }
    function _0x4ed1fe() {
      try {
        window.CrazyGames.SDK.game.happytime();
      } catch (_0x1dfd9c) {
        window.UnitySDK.logError("Error while calling happytime:", _0x1dfd9c);
      }
    }
    function _0x4ff1f6() {
      try {
        window.CrazyGames.SDK.game.hideInviteButton();
      } catch (_0x1ae804) {
        window.UnitySDK.logError("Error while calling hideInviteButton:", _0x1ae804);
      }
    }
    function _0x448c6a(_0x9f10b4, _0x45f8e1, _0x169b9b, _0x1260d1, _0x32cad6, _0x5839fa, _0xe1b8ff) {
      var _0x24d1cd = _0x3d5aa0(_0x9f10b4);
      var _0x1e1610 = _0x3d5aa0(_0x45f8e1);
      var _0x1b7e1b = _0x3d5aa0(_0x169b9b);
      var _0x52d622 = _0x3d5aa0(_0x32cad6);
      var _0x58ab3a = _0x3d5aa0(_0x5839fa);
      var _0x5846c1 = _0x3d5aa0(_0xe1b8ff);
      try {
        var _0x434717 = {};
        _0x434717[_0x1b7e1b] = firebase.firestore.FieldValue.increment(_0x1260d1);
        firebase.firestore().collection(_0x24d1cd).doc(_0x1e1610).update(_0x434717).then(function () {
          window.unityInstance.SendMessage(_0x52d622, _0x58ab3a, "Success: incremented " + _0x1b7e1b + " by " + _0x1260d1);
        }).catch(function (_0x2bb7f6) {
          window.unityInstance.SendMessage(_0x52d622, _0x5846c1, JSON.stringify(_0x2bb7f6, Object.getOwnPropertyNames(_0x2bb7f6)));
        });
      } catch (_0x103081) {
        window.unityInstance.SendMessage(_0x52d622, _0x5846c1, JSON.stringify(_0x103081, Object.getOwnPropertyNames(_0x103081)));
      }
    }
    function _0x4bd2e7(_0x5a700a) {
      if (typeof _0x3d5aa0 !== "undefined") {
        window.unityStringify = _0x3d5aa0;
      } else {
        window.unityStringify = _0x3d5aa0;
      }
      window.UnitySDK = {
        version: window.unityStringify(_0x5a700a),
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
          var _0x4db586 = Array.prototype.slice.call(arguments);
          _0x4db586.unshift("[JsLib]");
          console.error.apply(console, _0x4db586);
        }
      };
      var _0x3abc91 = {
        wrapper: {
          engine: "unity",
          sdkVersion: window.unityStringify(_0x5a700a)
        }
      };
      var _0x554705 = document.createElement("script");
      _0x554705.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
      document.head.appendChild(_0x554705);
      _0x554705.addEventListener("load", function () {
        window.CrazyGames.SDK.init(_0x3abc91).then(function () {
          _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_Init");
          window.CrazyGames.SDK.ad.hasAdblock().then(function (_0x3a90b2) {
            _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x3a90b2 ? 1 : 0);
          }).catch(function (_0x2a5a61) {
            window.UnitySDK.logError("Error while checking adblock:", _0x2a5a61);
            _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
          });
          window.CrazyGames.SDK.user.addAuthListener(function (_0x15fa4c) {
            _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON.stringify({
              userJson: JSON.stringify(_0x15fa4c)
            }));
          });
        });
      });
    }
    function _0x43f292() {
      return window.CrazyGames.SDK.user.isUserAccountAvailable;
    }
    var _0x326a6f = null;
    var _0x188593 = 0;
    function _0x47d54() {
      return _0x326a6f && _0x326a6f.activated || _0x188593 != 0;
    }
    var _0x1d1bd2 = 1;
    var _0x226df3 = {
      x: 0,
      y: 0,
      z: 0
    };
    function _0x3ea0e3() {
      _0x226df3 = {
        x: _0x326a6f.x * _0x1d1bd2,
        y: _0x326a6f.y * _0x1d1bd2,
        z: _0x326a6f.z * _0x1d1bd2
      };
      if (_0x188593 != 0) {
        _0x376e11(_0x188593, _0x226df3.x, _0x226df3.y, _0x226df3.z);
      }
    }
    var _0x3f857f = 0;
    var _0x6c5b7d = 0;
    var _0x508178 = 0;
    var _0x772cc4 = 0;
    var _0x17a267 = 0;
    function _0x28258a(_0x4e1977, _0x976a6b) {
      var _0x372609 = {
        x: _0x4e1977.x - _0x976a6b.x,
        y: _0x4e1977.y - _0x976a6b.y,
        z: _0x4e1977.z - _0x976a6b.z
      };
      var _0x1a3cd3 = _0x372609.x * _0x372609.x + _0x372609.y * _0x372609.y + _0x372609.z * _0x372609.z;
      var _0x8543f7 = {
        x: _0x4e1977.x + _0x976a6b.x,
        y: _0x4e1977.y + _0x976a6b.y,
        z: _0x4e1977.z + _0x976a6b.z
      };
      var _0x3935dd = _0x8543f7.x * _0x8543f7.x + _0x8543f7.y * _0x8543f7.y + _0x8543f7.z * _0x8543f7.z;
      if (_0x1a3cd3 <= _0x3935dd) {
        return _0x372609;
      } else {
        return _0x8543f7;
      }
    }
    function _0x404d3b(_0x2143c7) {
      var _0x1ca367 = {
        x: _0x2143c7.accelerationIncludingGravity.x * _0x1d1bd2,
        y: _0x2143c7.accelerationIncludingGravity.y * _0x1d1bd2,
        z: _0x2143c7.accelerationIncludingGravity.z * _0x1d1bd2
      };
      if (_0x188593 != 0) {
        _0x376e11(_0x188593, _0x1ca367.x, _0x1ca367.y, _0x1ca367.z);
      }
      var _0x534dc8 = {
        x: _0x2143c7.acceleration.x * _0x1d1bd2,
        y: _0x2143c7.acceleration.y * _0x1d1bd2,
        z: _0x2143c7.acceleration.z * _0x1d1bd2
      };
      if (_0x508178 != 0) {
        _0x376e11(_0x508178, _0x534dc8.x, _0x534dc8.y, _0x534dc8.z);
      }
      if (_0x772cc4 != 0) {
        var _0x2c533e = _0x28258a(_0x1ca367, _0x534dc8);
        _0x376e11(_0x772cc4, _0x2c533e.x, _0x2c533e.y, _0x2c533e.z);
      }
      if (_0x17a267 != 0) {
        var _0x48e3a3 = Math.PI / 180;
        _0x376e11(_0x17a267, _0x2143c7.rotationRate.alpha * _0x48e3a3, _0x2143c7.rotationRate.beta * _0x48e3a3, _0x2143c7.rotationRate.gamma * _0x48e3a3);
      }
    }
    var _0x5acb7e = 0;
    function _0x37c07f(_0x3d6866) {
      if (_0x3d6866 & 1) {
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission().then(function (_0x5db113) {
            if (_0x5db113 === "granted") {
              _0x5acb7e &= ~1;
            } else {
              _0x27db15("DeviceOrientationEvent permission not granted");
            }
          }).catch(function (_0x161734) {
            _0x27db15(_0x161734);
            _0x5acb7e |= 1;
          });
        }
      }
      if (_0x3d6866 & 2) {
        if (typeof DeviceMotionEvent.requestPermission === "function") {
          DeviceMotionEvent.requestPermission().then(function (_0x19ac18) {
            if (_0x19ac18 === "granted") {
              _0x5acb7e &= ~2;
            } else {
              _0x27db15("DeviceMotionEvent permission not granted");
            }
          }).catch(function (_0x32a0ac) {
            _0x27db15(_0x32a0ac);
            _0x5acb7e |= 2;
          });
        }
      }
    }
    function _0x493f7a() {
      if (_0x188593 == 0 && _0x508178 == 0 && _0x772cc4 == 0 && _0x17a267 == 0) {
        _0x37c07f(2);
        window.addEventListener("devicemotion", _0x404d3b);
      }
    }
    function _0x436f1b() {
      var _0xe0aba5 = 9.80665;
      _0x1d1bd2 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0xe0aba5 : -1 / _0xe0aba5;
    }
    function _0x2b437b(_0x374997, _0x41be7c) {
      _0x436f1b();
      if (typeof Accelerometer === "undefined") {
        _0x493f7a();
        if (_0x374997 != 0) {
          _0x188593 = _0x374997;
        }
        return;
      }
      if (_0x374997 != 0) {
        _0x188593 = _0x374997;
      }
      function _0x2e9c7f(_0x215777) {
        _0x326a6f = new Accelerometer({
          frequency: _0x215777,
          referenceFrame: "device"
        });
        _0x326a6f.addEventListener("reading", _0x3ea0e3);
        _0x326a6f.addEventListener("error", function (_0x5bcb90) {
          _0x27db15(_0x5bcb90.error ? _0x5bcb90.error : _0x5bcb90);
        });
        _0x326a6f.start();
        _0x6c5b7d = _0x215777;
      }
      if (_0x326a6f) {
        if (_0x6c5b7d != _0x41be7c) {
          _0x326a6f.stop();
          _0x326a6f.removeEventListener("reading", _0x3ea0e3);
          _0x2e9c7f(_0x41be7c);
        }
      } else if (_0x3f857f != 0) {
        _0x3f857f = _0x41be7c;
      } else {
        _0x3f857f = _0x41be7c;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x14be5e) {
          if (_0x14be5e.state === "granted") {
            _0x2e9c7f(_0x3f857f);
          } else {
            _0x27db15("No permission to use Accelerometer.");
          }
          _0x3f857f = 0;
        });
      }
    }
    function _0x5553b9() {
      if (_0x188593 == 0 && _0x508178 == 0 && _0x772cc4 == 0 && _0x17a267 == 0) {
        window.removeEventListener("devicemotion", _0xcb8d62);
      }
    }
    function _0xe0908b() {
      if (_0x326a6f) {
        if (typeof GravitySensor !== "undefined" || _0x772cc4 == 0) {
          _0x326a6f.stop();
          _0x326a6f.removeEventListener("reading", _0x3ea0e3);
          _0x326a6f = null;
        }
        _0x188593 = 0;
        _0x6c5b7d = 0;
      } else if (_0x188593 != 0) {
        _0x188593 = 0;
        _0x5553b9();
      }
    }
    var _0x557917 = 0;
    function _0x65bc72(_0x538077) {
      if (!_0x557917) {
        try {
          (function () {
            _0x2366b1.call(null, _0x538077);
          })();
        } catch (_0x4e3196) {
          _0x557917 = 1;
          console.error("Uncaught exception from main loop:");
          console.error(_0x4e3196);
          console.error("Halting program.");
          if (_0x17aa78.errorHandler) {
            _0x17aa78.errorHandler(_0x4e3196);
          }
          throw _0x4e3196;
        }
      }
    }
    function _0x461bc7(_0x32425d, _0xaf056a) {
      var _0x4c4a3f = "";
      for (var _0x4fad0e = 0; _0x4fad0e < _0xaf056a; _0x4fad0e++) {
        _0x4c4a3f += String.fromCharCode(_0x59122e[_0x32425d + _0x4fad0e]);
      }
      _0x17aa78.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x4c4a3f) + "),default";
    }
    function _0x495d3c(_0x3fbd4f) {
      _0x17aa78.canvas.style.cursor = _0x3fbd4f ? "default" : "none";
    }
    function _0x544131(_0x2bf805) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x2bf805);
      }
      return _0x2bf805.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x1270e8() {
      var _0x49c222 = _0x17aa78.canvas ? _0x17aa78.canvas.id : "unity-canvas";
      return "#" + _0x544131(_0x49c222);
    }
    function _0x12299b(_0x33ae9d, _0x4d8064, _0x4e82c7, _0x5a0857) {
      var _0x17b186 = document.querySelector(_0x1270e8());
      var _0x5dafe0 = _0x17b186 && _0x17b186.getBoundingClientRect();
      _0x50f6f2[_0x4e82c7 >> 2] = _0x33ae9d - (_0x5dafe0 ? _0x5dafe0.left : 0);
      _0x50f6f2[_0x5a0857 >> 2] = _0x4d8064 - (_0x5dafe0 ? _0x5dafe0.top : 0);
    }
    function _0xdb8b5a(_0x23c27d) {
      var _0x2c63e7 = _0xa3918a(_0x23c27d) + 1;
      var _0x287059 = _0x302e44(_0x2c63e7);
      _0x4f8934(_0x23c27d, _0x287059, _0x2c63e7);
      return _0x287059;
    }
    function _0x430ba3() {
      var _0x1cee03 = _0x1270e8();
      if (_0x430ba3.selector != _0x1cee03) {
        _0x1e689c(_0x430ba3.ptr);
        _0x430ba3.ptr = _0xdb8b5a(_0x1cee03);
        _0x430ba3.selector = _0x1cee03;
      }
      return _0x430ba3.ptr;
    }
    function _0x1af7e7(_0x32d558) {
      var _0x519e0c = _0x3d5aa0(_0x32d558);
      try {
        eval(_0x519e0c);
      } catch (_0x1c93c2) {
        console.error(_0x1c93c2);
      }
    }
    function _0x4de9de(_0x4d1756) {
      var _0x5be96e = _0x3d5aa0(_0x4d1756);
      window.open(_0x5be96e, "_blank", "");
    }
    function _0x1e39b() {}
    function _0x152f1a() {
      _0x4fc026.queuePersist(_0x17aa78.__unityIdbfsMount.mount);
      if (!window.warnedAboutManualFilesystemSyncGettingDeprecated) {
        window.warnedAboutManualFilesystemSyncGettingDeprecated = true;
        if (!_0x17aa78.autoSyncPersistentDataPath) {
          console.warn("Manual synchronization of Unity Application.persistentDataPath via JS_FileSystem_Sync() is deprecated and will be later removed in a future Unity version. The persistent data directory will be automatically synchronized instead on file modification. Pass config.autoSyncPersistentDataPath = true; to configuration in createUnityInstance() to opt in to the new behavior.");
        }
      }
    }
    var _0x399a86 = null;
    function _0x2dcf12() {
      if (typeof GravitySensor !== "undefined") {
        return _0x399a86 && _0x399a86.activated;
      } else {
        return _0x772cc4 != 0;
      }
    }
    function _0x42d59d() {
      if (_0x772cc4 != 0) {
        _0x376e11(_0x772cc4, _0x399a86.x * _0x1d1bd2, _0x399a86.y * _0x1d1bd2, _0x399a86.z * _0x1d1bd2);
      }
    }
    var _0x281b91 = 0;
    var _0x2b9050 = null;
    function _0x19fbab() {
      var _0x6e37c5 = {
        x: _0x2b9050.x * _0x1d1bd2,
        y: _0x2b9050.y * _0x1d1bd2,
        z: _0x2b9050.z * _0x1d1bd2
      };
      if (_0x508178 != 0) {
        _0x376e11(_0x508178, _0x6e37c5.x, _0x6e37c5.y, _0x6e37c5.z);
      }
      if (_0x772cc4 != 0 && typeof GravitySensor === "undefined") {
        var _0x395c12 = _0x28258a(_0x226df3, _0x6e37c5);
        _0x376e11(_0x772cc4, _0x395c12.x, _0x395c12.y, _0x395c12.z);
      }
    }
    var _0xfd4de8 = 0;
    var _0x2699ab = 0;
    function _0x3b6205(_0x17b339, _0x21d689) {
      _0x436f1b();
      if (typeof LinearAccelerationSensor === "undefined") {
        _0x493f7a();
        if (_0x17b339 != 0) {
          _0x508178 = _0x17b339;
        }
        return;
      }
      if (_0x17b339 != 0) {
        _0x508178 = _0x17b339;
      }
      function _0x523dd2(_0x4c68d0) {
        _0x2b9050 = new LinearAccelerationSensor({
          frequency: _0x4c68d0,
          referenceFrame: "device"
        });
        _0x2b9050.addEventListener("reading", _0x19fbab);
        _0x2b9050.addEventListener("error", function (_0x50a9b3) {
          _0x27db15(_0x50a9b3.error ? _0x50a9b3.error : _0x50a9b3);
        });
        _0x2b9050.start();
        _0x2699ab = _0x4c68d0;
      }
      if (_0x2b9050) {
        if (_0x2699ab != _0x21d689) {
          _0x2b9050.stop();
          _0x2b9050.removeEventListener("reading", _0x19fbab);
          _0x523dd2(_0x21d689);
        }
      } else if (_0xfd4de8 != 0) {
        _0xfd4de8 = _0x21d689;
      } else {
        _0xfd4de8 = _0x21d689;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x4ed909) {
          if (_0x4ed909.state === "granted") {
            _0x523dd2(_0xfd4de8);
          } else {
            _0x27db15("No permission to use LinearAccelerationSensor.");
          }
          _0xfd4de8 = 0;
        });
      }
    }
    function _0x476de2(_0x115345, _0x1e3b9b) {
      if (typeof GravitySensor === "undefined") {
        _0x2b437b(0, Math.max(_0x1e3b9b, _0x6c5b7d));
        _0x3b6205(0, Math.max(_0x1e3b9b, _0x2699ab));
        _0x772cc4 = _0x115345;
        return;
      }
      _0x436f1b();
      _0x772cc4 = _0x115345;
      function _0x36527f(_0x130247) {
        _0x399a86 = new GravitySensor({
          frequency: _0x130247,
          referenceFrame: "device"
        });
        _0x399a86.addEventListener("reading", _0x42d59d);
        _0x399a86.addEventListener("error", function (_0xa10d89) {
          _0x27db15(_0xa10d89.error ? _0xa10d89.error : _0xa10d89);
        });
        _0x399a86.start();
      }
      if (_0x399a86) {
        _0x399a86.stop();
        _0x399a86.removeEventListener("reading", _0x42d59d);
        _0x36527f(_0x1e3b9b);
      } else if (_0x281b91 != 0) {
        _0x281b91 = _0x1e3b9b;
      } else {
        _0x281b91 = _0x1e3b9b;
        navigator.permissions.query({
          name: "accelerometer"
        }).then(function (_0x48a840) {
          if (_0x48a840.state === "granted") {
            _0x36527f(_0x281b91);
          } else {
            _0x27db15("No permission to use GravitySensor.");
          }
          _0x281b91 = 0;
        });
      }
    }
    function _0x3e7ac6() {
      if (_0x2b9050) {
        if (typeof GravitySensor !== "undefined" || _0x772cc4 == 0) {
          _0x2b9050.stop();
          _0x2b9050.removeEventListener("reading", _0x19fbab);
          _0x2b9050 = null;
        }
        _0x508178 = 0;
        _0x2699ab = 0;
      } else if (_0x508178 != 0) {
        _0x508178 = 0;
        _0x5553b9();
      }
    }
    function _0xea4f44() {
      _0x772cc4 = 0;
      if (typeof GravitySensor === "undefined") {
        if (_0x188593 == 0) {
          _0xe0908b();
        }
        if (_0x508178 == 0) {
          _0x3e7ac6();
        }
        return;
      }
      if (_0x399a86) {
        _0x399a86.stop();
        _0x399a86.removeEventListener("reading", _0x42d59d);
        _0x399a86 = null;
      }
    }
    function _0x15f091(_0x2225b9) {
      try {
        (function () {
          _0x2366b1.call(null, _0x2225b9);
        })();
      } catch (_0xa888f6) {
        console.warn(_0xa888f6);
      }
    }
    var _0x40d992 = null;
    function _0x2a00fd() {
      return _0x40d992 && _0x40d992.activated || _0x17a267 != 0;
    }
    function _0xd513f7() {
      if (_0x17a267 != 0) {
        _0x376e11(_0x17a267, _0x40d992.x, _0x40d992.y, _0x40d992.z);
      }
    }
    var _0xeb1dd = 0;
    function _0x413728(_0x551f92, _0x3d137f) {
      if (typeof Gyroscope === "undefined") {
        _0x493f7a();
        _0x17a267 = _0x551f92;
        return;
      }
      _0x17a267 = _0x551f92;
      function _0x36c6ed(_0x93e95b) {
        _0x40d992 = new Gyroscope({
          frequency: _0x93e95b,
          referenceFrame: "device"
        });
        _0x40d992.addEventListener("reading", _0xd513f7);
        _0x40d992.addEventListener("error", function (_0x8aa5a) {
          _0x27db15(_0x8aa5a.error ? _0x8aa5a.error : _0x8aa5a);
        });
        _0x40d992.start();
      }
      if (_0x40d992) {
        _0x40d992.stop();
        _0x40d992.removeEventListener("reading", _0xd513f7);
        _0x36c6ed(_0x3d137f);
      } else if (_0xeb1dd != 0) {
        _0xeb1dd = _0x3d137f;
      } else {
        _0xeb1dd = _0x3d137f;
        navigator.permissions.query({
          name: "gyroscope"
        }).then(function (_0x295682) {
          if (_0x295682.state === "granted") {
            _0x36c6ed(_0xeb1dd);
          } else {
            _0x27db15("No permission to use Gyroscope.");
          }
          _0xeb1dd = 0;
        });
      }
    }
    function _0x559e39() {
      if (_0x40d992) {
        _0x40d992.stop();
        _0x40d992.removeEventListener("reading", _0xd513f7);
        _0x40d992 = null;
        _0x17a267 = 0;
      } else if (_0x17a267 != 0) {
        _0x17a267 = 0;
        _0x5553b9();
      }
    }
    function _0x196995() {
      const _0xe0d5cb = function (_0x3e589a) {
        if (_0x3e589a.target.localName !== "canvas") {
          _0x5060a0();
        }
      };
      document.addEventListener("contextmenu", _0xe0d5cb);
      _0x17aa78.deinitializers.push(function () {
        document.removeEventListener("contextmenu", _0xe0d5cb);
      });
    }
    function _0x54f4a0() {
      return _0x2b9050 && _0x2b9050.activated || _0x508178 != 0;
    }
    function _0xff8b8f(_0x4fe362, _0x5ee061) {
      var _0x541f25 = _0x3d5aa0(_0x4fe362);
      if (typeof dump == "function") {
        dump(_0x541f25);
      }
      switch (_0x5ee061) {
        case 0:
        case 1:
        case 4:
          console.error(_0x541f25);
          return;
        case 2:
          console.warn(_0x541f25);
          return;
        case 3:
        case 5:
          console.log(_0x541f25);
          return;
        default:
          console.error("Unknown console message type!");
          console.error(_0x541f25);
      }
    }
    function _0x1ab271(_0x1783a9, _0x26576e) {
      var _0x51b55a = _0x35c797();
      if (_0x1783a9) {
        _0x4f8934(_0x51b55a, _0x1783a9, _0x26576e);
      }
      return _0xa3918a(_0x51b55a);
    }
    var _0x580917 = null;
    var _0x17c6c4 = null;
    var _0x951cf = null;
    var _0x2c17a5 = false;
    function _0x53d0eb() {
      return _0x2c17a5;
    }
    function _0x328692() {
      var _0x5221c8 = 0;
      var _0xa5c509 = 1;
      if (!_0x951cf) {
        return _0xa5c509;
      }
      return _0x5221c8;
    }
    function _0x9900bf(_0x3692fa, _0x4ff322) {
      var _0x1fc094 = _0x951cf && _0x951cf.input ? _0x951cf.input.value : _0x17c6c4 ? _0x17c6c4 : "";
      if (_0x3692fa) {
        _0x4f8934(_0x1fc094, _0x3692fa, _0x4ff322);
      }
      return _0xa3918a(_0x1fc094);
    }
    function _0x3c56b2(_0x3b6272, _0x1a8fd5) {
      if (!_0x951cf) {
        _0x576263[_0x3b6272 >> 2] = 0;
        _0x576263[_0x1a8fd5 >> 2] = 0;
        return;
      }
      _0x576263[_0x3b6272 >> 2] = _0x951cf.input.selectionStart;
      _0x576263[_0x1a8fd5 >> 2] = _0x951cf.input.selectionEnd - _0x951cf.input.selectionStart;
    }
    function _0x1d4212(_0x2e8e1e) {
      if (_0x580917) {
        return;
      }
      _0x2c17a5 = true;
      function _0x2515e1() {
        if (_0x951cf && _0x951cf.input) {
          _0x17c6c4 = _0x951cf.input.value;
          _0x951cf.input = null;
          if (_0x951cf.parentNode && _0x951cf.parentNode) {
            _0x951cf.parentNode.removeChild(_0x951cf);
          }
        }
        _0x951cf = null;
        _0x580917 = null;
        setTimeout(function () {
          _0x2c17a5 = false;
        }, 100);
      }
      if (_0x2e8e1e) {
        var _0x539a3b = 200;
        _0x580917 = setTimeout(_0x2515e1, _0x539a3b);
      } else {
        _0x2515e1();
      }
    }
    function _0x38fdde(_0x2cbbba) {
      if (!_0x951cf) {
        return;
      }
      _0x951cf.input.maxLength = _0x2cbbba;
    }
    function _0x22d3e7(_0xa7ab23) {
      if (!_0x951cf) {
        return;
      }
      _0xa7ab23 = _0x3d5aa0(_0xa7ab23);
      _0x951cf.input.value = _0xa7ab23;
    }
    function _0x27fe08(_0x3dc6fa, _0x462a26) {
      if (!_0x951cf) {
        return;
      }
      if (_0x951cf.input.type === "number") {
        _0x951cf.input.type = "text";
        _0x951cf.input.setSelectionRange(_0x3dc6fa, _0x3dc6fa + _0x462a26);
        _0x951cf.input.type = "number";
      } else {
        _0x951cf.input.setSelectionRange(_0x3dc6fa, _0x3dc6fa + _0x462a26);
      }
    }
    function _0x4e4148(_0x5da105, _0x1f630c, _0x11a3fc, _0x1ca5af, _0x139f6a, _0x105c2b, _0x394969, _0x4576fb) {
      if (_0x580917) {
        clearTimeout(_0x580917);
        _0x580917 = null;
      }
      _0x5da105 = _0x3d5aa0(_0x5da105);
      _0x17c6c4 = _0x5da105;
      _0x394969 = _0x3d5aa0(_0x394969);
      var _0x2abcee = document.body;
      var _0x5dd1e1 = !!_0x951cf;
      var _0x26d334;
      var _0x198bc3 = 2;
      var _0x52a286 = 3;
      var _0xb1ffbb = 4;
      var _0x423c4f = 5;
      var _0x3533aa = 7;
      if (!_0x139f6a) {
        switch (_0x1f630c) {
          case _0x3533aa:
            _0x26d334 = "email";
            break;
          case _0x52a286:
            _0x26d334 = "url";
            break;
          case _0x198bc3:
          case _0xb1ffbb:
          case _0x423c4f:
            _0x26d334 = "number";
            break;
          default:
            _0x26d334 = "text";
            break;
        }
      } else {
        _0x26d334 = "password";
      }
      if (_0x5dd1e1) {
        if (_0x951cf.multiline != _0x1ca5af) {
          _0x1d4212(false);
          return;
        }
      }
      var _0x3c005a = _0x951cf || document.createElement("div");
      if (!_0x5dd1e1) {
        _0x3c005a.style = "width:100%; position:fixed; bottom:0px; margin:0px; padding:0px; left:0px; border: 1px solid #000; border-radius: 5px; background-color:#fff; font-size:14pt;";
        _0x2abcee.appendChild(_0x3c005a);
        _0x951cf = _0x3c005a;
      }
      var _0x870c40 = _0x5dd1e1 ? _0x951cf.input : document.createElement(_0x1ca5af ? "textarea" : "input");
      _0x951cf.multiline = _0x1ca5af;
      _0x951cf.secure = _0x139f6a;
      _0x951cf.keyboardType = _0x1f630c;
      _0x951cf.inputType = _0x26d334;
      _0x870c40.type = _0x26d334;
      _0x870c40.style = "width:calc(100% - 85px); " + (_0x1ca5af ? "height:100px;" : "") + "vertical-align:top; border-radius: 5px; outline:none; cursor:default; resize:none; border:0px; padding:10px 0px 10px 10px;";
      _0x870c40.spellcheck = _0x11a3fc ? true : false;
      _0x870c40.maxLength = _0x4576fb > 0 ? _0x4576fb : 524288;
      _0x870c40.value = _0x5da105;
      _0x870c40.placeholder = _0x394969;
      if (!_0x5dd1e1) {
        _0x3c005a.appendChild(_0x870c40);
        _0x3c005a.input = _0x870c40;
      }
      if (!_0x5dd1e1) {
        var _0x18aca0 = document.createElement("button");
        _0x18aca0.innerText = "OK";
        _0x18aca0.style = "border:0; position:absolute; left:calc(100% - 75px); top:0px; width:75px; height:100%; margin:0; padding:0; border-radius: 5px; background-color:#fff";
        _0x18aca0.addEventListener("touchend", function () {
          _0x1d4212(true);
        });
        _0x3c005a.appendChild(_0x18aca0);
        _0x3c005a.okButton = _0x18aca0;
        _0x870c40.addEventListener("keyup", function (_0x48653c) {
          if (_0x870c40.parentNode.multiline) {
            return;
          }
          if (_0x48653c.code == "Enter" || _0x48653c.which == 13 || _0x48653c.keyCode == 13) {
            _0x1d4212(true);
          }
        });
        _0x870c40.addEventListener("blur", function (_0x570d1b) {
          _0x1d4212(true);
          _0x570d1b.stopPropagation();
          _0x570d1b.preventDefault();
        });
        _0x870c40.select();
        _0x870c40.focus();
      } else {
        _0x870c40.select();
      }
    }
    var _0x3ae633 = null;
    var _0x11e233 = 0;
    function _0x58212f() {
      return _0x3ae633 && _0x3ae633.activated || _0x11e233 != 0;
    }
    function _0x17dfa2() {
      if (_0x11e233 != 0) {
        _0x41d778(_0x11e233, _0x3ae633.quaternion[0], _0x3ae633.quaternion[1], _0x3ae633.quaternion[2], _0x3ae633.quaternion[3]);
      }
    }
    var _0x2aabdc = 0;
    function _0xcb8d62(_0x4b2dc8) {
      if (_0x11e233) {
        var _0x11c441 = Math.PI / 180;
        var _0x27a13d = _0x4b2dc8.beta * _0x11c441;
        var _0x4437ea = _0x4b2dc8.gamma * _0x11c441;
        var _0x44542c = _0x4b2dc8.alpha * _0x11c441;
        var _0x4c359c = Math.cos(_0x27a13d / 2);
        var _0x4863ea = Math.sin(_0x27a13d / 2);
        var _0x7ff1d4 = Math.cos(_0x4437ea / 2);
        var _0x52edf2 = Math.sin(_0x4437ea / 2);
        var _0x5ba29a = Math.cos(_0x44542c / 2);
        var _0x5423f3 = Math.sin(_0x44542c / 2);
        var _0x171892 = _0x4863ea * _0x7ff1d4 * _0x5ba29a - _0x4c359c * _0x52edf2 * _0x5423f3;
        var _0x2eb4fe = _0x4c359c * _0x52edf2 * _0x5ba29a + _0x4863ea * _0x7ff1d4 * _0x5423f3;
        var _0x2cf363 = _0x4c359c * _0x7ff1d4 * _0x5423f3 + _0x4863ea * _0x52edf2 * _0x5ba29a;
        var _0x593abb = _0x4c359c * _0x7ff1d4 * _0x5ba29a - _0x4863ea * _0x52edf2 * _0x5423f3;
        _0x41d778(_0x11e233, _0x171892, _0x2eb4fe, _0x2cf363, _0x593abb);
      }
    }
    function _0x5ae362(_0x1fdfba, _0xbada9e) {
      if (typeof RelativeOrientationSensor === "undefined") {
        if (_0x11e233 == 0) {
          _0x11e233 = _0x1fdfba;
          _0x37c07f(1);
          window.addEventListener("deviceorientation", _0xcb8d62);
        }
        return;
      }
      _0x11e233 = _0x1fdfba;
      function _0x1a7c09(_0x4f2f99) {
        _0x3ae633 = new RelativeOrientationSensor({
          frequency: _0x4f2f99,
          referenceFrame: "device"
        });
        _0x3ae633.addEventListener("reading", _0x17dfa2);
        _0x3ae633.addEventListener("error", function (_0x2840b6) {
          _0x27db15(_0x2840b6.error ? _0x2840b6.error : _0x2840b6);
        });
        _0x3ae633.start();
      }
      if (_0x3ae633) {
        _0x3ae633.stop();
        _0x3ae633.removeEventListener("reading", _0x17dfa2);
        _0x1a7c09(_0xbada9e);
      } else if (_0x2aabdc != 0) {
        _0x2aabdc = _0xbada9e;
      } else {
        _0x2aabdc = _0xbada9e;
        Promise.all([navigator.permissions.query({
          name: "accelerometer"
        }), navigator.permissions.query({
          name: "gyroscope"
        })]).then(function (_0x55b572) {
          if (_0x55b572.every(function (_0x266b08) {
            return _0x266b08.state === "granted";
          })) {
            _0x1a7c09(_0x2aabdc);
          } else {
            _0x27db15("No permissions to use RelativeOrientationSensor.");
          }
          _0x2aabdc = 0;
        });
      }
    }
    function _0x3f4ec6() {
      if (_0x3ae633) {
        _0x3ae633.stop();
        _0x3ae633.removeEventListener("reading", _0x17dfa2);
        _0x3ae633 = null;
      } else if (_0x11e233 != 0) {
        window.removeEventListener("deviceorientation", _0xcb8d62);
      }
      _0x11e233 = 0;
    }
    function _0x2b7717() {
      if (_0x5acb7e == 0) {
        return;
      }
      _0x37c07f(_0x5acb7e);
    }
    function _0x478855() {
      _0x17aa78.QuitCleanup();
    }
    var _0x12e7e6 = 0;
    function _0x4b533d() {
      if (_0x12e7e6) {
        _0x17e77d(_0x12e7e6, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
      }
    }
    function _0x371edf() {
      _0x12e7e6 = 0;
      window.removeEventListener("resize", _0x4b533d);
      if (screen.orientation) {
        screen.orientation.removeEventListener("change", _0x4b533d);
      }
    }
    function _0x1fe24f(_0x85010c) {
      if (!_0x12e7e6) {
        if (screen.orientation) {
          screen.orientation.addEventListener("change", _0x4b533d);
        }
        window.addEventListener("resize", _0x4b533d);
        _0x12e7e6 = _0x85010c;
        setTimeout(_0x4b533d, 0);
      }
    }
    var _0x2c6419 = -1;
    var _0x13d040 = -1;
    var _0x41c660 = -1;
    function _0x5adb83(_0x1c1cee) {
      if (!screen.orientation || !screen.orientation.lock) {
        return;
      }
      function _0x35b8fd() {
        _0x13d040 = _0x2c6419;
        var _0x352fe5 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        var _0x4dcdc7 = _0x352fe5[_0x13d040];
        screen.orientation.lock(_0x4dcdc7).then(function () {
          if (_0x2c6419 != _0x13d040) {
            _0x41c660 = setTimeout(_0x35b8fd, 0);
          } else {
            _0x41c660 = -1;
          }
        }).catch(function (_0x15eef9) {
          _0x27db15(_0x15eef9);
          _0x41c660 = -1;
        });
      }
      _0x2c6419 = _0x1c1cee;
      if (_0x41c660 == -1 && _0x1c1cee != _0x13d040) {
        _0x41c660 = setTimeout(_0x35b8fd, 0);
      }
    }
    var _0x193e2d = {
      audioInstanceIdCounter: 0,
      audioInstances: {},
      audioContext: null,
      audioWebEnabled: 0,
      audioCache: [],
      pendingAudioSources: {},
      FAKEMOD_SAMPLERATE: 44100
    };
    function _0x16ec91(_0x53e0a8) {
      _0x53e0a8.estimatePlaybackPosition = function () {
        var _0x204826 = (_0x193e2d.audioContext.currentTime - _0x53e0a8.playbackStartTime) * _0x53e0a8.playbackRate.value;
        if (_0x53e0a8.loop && _0x204826 >= _0x53e0a8.loopStart) {
          _0x204826 = (_0x204826 - _0x53e0a8.loopStart) % (_0x53e0a8.loopEnd - _0x53e0a8.loopStart) + _0x53e0a8.loopStart;
        }
        return _0x204826;
      };
      _0x53e0a8.setPitch = function (_0x114e1e) {
        var _0x1c2994 = _0x53e0a8.estimatePlaybackPosition();
        if (_0x1c2994 >= 0) {
          _0x53e0a8.playbackStartTime = _0x193e2d.audioContext.currentTime - _0x1c2994 / _0x114e1e;
        }
        if (_0x53e0a8.playbackRate.value !== _0x114e1e) {
          _0x53e0a8.playbackRate.value = _0x114e1e;
        }
      };
    }
    function _0x4464de(_0x3480bc, _0x3c7ff2) {
      var _0x4c6214 = {
        buffer: _0x3480bc,
        error: _0x3c7ff2
      };
      _0x4c6214.release = function () {};
      _0x4c6214.getLength = function () {
        if (!this.buffer) {
          console.log("Trying to get length of sound which is not loaded.");
          return 0;
        }
        return this.buffer.length;
      };
      _0x4c6214.getData = function (_0x5c0c12, _0x98eeef) {
        if (!this.buffer) {
          console.log("Trying to get data of sound which is not loaded.");
          return 0;
        }
        var _0x4775fc = _0x5c0c12 >> 2;
        var _0x4755c = _0x51ee3f.subarray(_0x4775fc, _0x4775fc + (_0x98eeef >> 2));
        var _0x276840 = Math.floor((_0x98eeef >> 2) / this.buffer.numberOfChannels);
        var _0x179267 = Math.min(this.buffer.length, _0x276840);
        for (var _0x161a7e = 0; _0x161a7e < this.buffer.numberOfChannels; _0x161a7e++) {
          var _0x8579b4 = this.buffer.getChannelData(_0x161a7e).subarray(0, _0x179267);
          _0x4755c.set(_0x8579b4, _0x161a7e * _0x179267);
        }
        return _0x179267 * this.buffer.numberOfChannels * 4;
      };
      _0x4c6214.getNumberOfChannels = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.numberOfChannels;
      };
      _0x4c6214.getFrequency = function () {
        if (!this.buffer) {
          console.log("Trying to get metadata of sound which is not loaded.");
          return 0;
        }
        return this.buffer.sampleRate;
      };
      _0x4c6214.createSourceNode = function () {
        if (!this.buffer) {
          console.log("Trying to play sound which is not loaded.");
        }
        var _0x154fc7 = _0x193e2d.audioContext.createBufferSource();
        _0x154fc7.buffer = this.buffer;
        _0x16ec91(_0x154fc7);
        return _0x154fc7;
      };
      return _0x4c6214;
    }
    function _0x11617b(_0x10a883, _0x1ad0da) {
      var _0x208f66 = {
        callback: _0x10a883,
        userData: _0x1ad0da,
        source: null,
        gain: _0x193e2d.audioContext.createGain(),
        panner: _0x193e2d.audioContext.createPanner(),
        spatialBlendDryGain: _0x193e2d.audioContext.createGain(),
        spatialBlendWetGain: _0x193e2d.audioContext.createGain(),
        spatialBlendLevel: 0,
        loop: false,
        loopStart: 0,
        loopEnd: 0,
        pitch: 1
      };
      _0x208f66.panner.rolloffFactor = 0;
      _0x208f66.release = function () {
        this.disconnectSource();
        this.gain.disconnect();
        this.panner.disconnect();
      };
      _0x208f66.playSoundClip = function (_0x3dba47, _0x4d3869, _0x565808) {
        try {
          var _0x5d4d62 = this;
          this.source = _0x3dba47.createSourceNode();
          this.configurePanningNodes();
          this.setSpatialBlendLevel(this.spatialBlendLevel);
          this.source.onended = function () {
            _0x5d4d62.source.isStopped = true;
            _0x5d4d62.disconnectSource();
            if (_0x5d4d62.callback) {
              _0x50de76("vi", _0x5d4d62.callback, [_0x5d4d62.userData]);
            }
          };
          this.source.loop = this.loop;
          this.source.loopStart = this.loopStart;
          this.source.loopEnd = this.loopEnd;
          this.source.start(_0x4d3869, _0x565808);
          this.source.playbackStartTime = _0x4d3869 - _0x565808 / this.source.playbackRate.value;
          this.source.setPitch(this.pitch);
        } catch (_0x472b00) {
          console.error("Channel.playSoundClip error. Exception: " + _0x472b00);
        }
      };
      _0x208f66.stop = function (_0x5a36a8) {
        if (!this.source) {
          return;
        }
        try {
          _0x208f66.source.stop(_0x193e2d.audioContext.currentTime + _0x5a36a8);
        } catch (_0x239072) {}
        if (_0x5a36a8 == 0) {
          this.disconnectSource();
        }
      };
      _0x208f66.isPaused = function () {
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
      _0x208f66.pause = function () {
        if (!this.source || this.source.isPausedMockNode) {
          return;
        }
        if (this.source.mediaElement) {
          this.source._pauseMediaElement();
          return;
        }
        var _0x5e4efb = {
          isPausedMockNode: true,
          buffer: this.source.buffer,
          loop: this.source.loop,
          loopStart: this.source.loopStart,
          loopEnd: this.source.loopEnd,
          playbackRate: this.source.playbackRate.value,
          scheduledStopTime: undefined,
          playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
          setPitch: function (_0x280ca9) {
            this.playbackRate = _0x280ca9;
          },
          stop: function (_0x57515c) {
            this.scheduledStopTime = _0x57515c;
          }
        };
        this.stop(0);
        this.disconnectSource();
        this.source = _0x5e4efb;
      };
      _0x208f66.resume = function () {
        if (this.source && this.source.mediaElement) {
          this.source.start(undefined, this.source.currentTime);
          return;
        }
        if (!this.source || !this.source.isPausedMockNode) {
          return;
        }
        var _0x347a5f = this.source;
        var _0x2603da = _0x4464de(_0x347a5f.buffer, false);
        this.playSoundClip(_0x2603da, _0x193e2d.audioContext.currentTime, Math.max(0, _0x347a5f.playbackPausedAtPosition));
        this.source.loop = _0x347a5f.loop;
        this.source.loopStart = _0x347a5f.loopStart;
        this.source.loopEnd = _0x347a5f.loopEnd;
        this.source.setPitch(_0x347a5f.playbackRate);
        if (typeof _0x347a5f.scheduledStopTime !== "undefined") {
          var _0x180f1f = Math.max(_0x347a5f.scheduledStopTime - _0x193e2d.audioContext.currentTime, 0);
          this.stop(_0x180f1f);
        }
      };
      _0x208f66.setLoop = function (_0x5ab956) {
        this.loop = _0x5ab956;
        if (!this.source || this.source.loop == _0x5ab956) {
          return;
        }
        this.source.loop = _0x5ab956;
      };
      _0x208f66.setLoopPoints = function (_0xbb256e, _0x3e9eac) {
        this.loopStart = _0xbb256e;
        this.loopEnd = _0x3e9eac;
        if (!this.source) {
          return;
        }
        if (this.source.loopStart !== _0xbb256e) {
          this.source.loopStart = _0xbb256e;
        }
        if (this.source.loopEnd !== _0x3e9eac) {
          this.source.loopEnd = _0x3e9eac;
        }
      };
      _0x208f66.set3D = function (_0x57e3b7) {
        if (this.spatialBlendLevel != _0x57e3b7) {
          this.setSpatialBlendLevel(_0x57e3b7);
        }
      };
      _0x208f66.setPitch = function (_0x4f1add) {
        this.pitch = _0x4f1add;
        if (!this.source) {
          return;
        }
        this.source.setPitch(_0x4f1add);
      };
      _0x208f66.setVolume = function (_0x37f50b) {
        if (this.gain.gain.value == _0x37f50b) {
          return;
        }
        this.gain.gain.value = _0x37f50b;
      };
      _0x208f66.setPosition = function (_0x541be6, _0x9fa648, _0x5a7085) {
        var _0x411f72 = this.panner;
        if (_0x411f72.positionX) {
          if (_0x411f72.positionX.value !== _0x541be6) {
            _0x411f72.positionX.value = _0x541be6;
          }
          if (_0x411f72.positionY.value !== _0x9fa648) {
            _0x411f72.positionY.value = _0x9fa648;
          }
          if (_0x411f72.positionZ.value !== _0x5a7085) {
            _0x411f72.positionZ.value = _0x5a7085;
          }
        } else if (_0x411f72._x !== _0x541be6 || _0x411f72._y !== _0x9fa648 || _0x411f72._z !== _0x5a7085) {
          _0x411f72.setPosition(_0x541be6, _0x9fa648, _0x5a7085);
          _0x411f72._x = _0x541be6;
          _0x411f72._y = _0x9fa648;
          _0x411f72._z = _0x5a7085;
        }
      };
      _0x208f66.disconnectSource = function () {
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
      _0x208f66.setSpatialBlendLevel = function (_0x3f13f2) {
        var _0x23482b = this.source && !this.source.isPausedMockNode;
        var _0x25b1cd = this.spatialBlendLevel > 0 && _0x3f13f2 == 0 || this.spatialBlendLevel == 0 && _0x3f13f2 > 0;
        var _0x2b444e = _0x23482b && _0x25b1cd;
        this.spatialBlendWetGain.gain.value = _0x3f13f2;
        this.spatialBlendDryGain.gain.value = 1 - _0x3f13f2;
        this.spatialBlendLevel = _0x3f13f2;
        if (_0x2b444e) {
          this.configurePanningNodes();
        }
      };
      _0x208f66.configurePanningNodes = function () {
        if (!this.source) {
          return;
        }
        this.source.disconnect();
        this.spatialBlendDryGain.disconnect();
        this.spatialBlendWetGain.disconnect();
        this.panner.disconnect();
        this.gain.disconnect();
        if (this.spatialBlendLevel > 0) {
          this.source.connect(this.spatialBlendDryGain);
          this.spatialBlendDryGain.connect(this.gain);
          this.source.connect(this.spatialBlendWetGain);
          this.spatialBlendWetGain.connect(this.panner);
          this.panner.connect(this.gain);
        } else {
          this.source.connect(this.gain);
        }
        this.gain.connect(_0x193e2d.audioContext.destination);
      };
      _0x208f66.isStopped = function () {
        if (!this.source) {
          return true;
        }
        if (this.source.mediaElement) {
          return this.source.isStopped;
        }
        return false;
      };
      return _0x208f66;
    }
    function _0x37643e(_0x229418, _0x2722b6) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      _0x193e2d.audioInstances[++_0x193e2d.audioInstanceIdCounter] = _0x11617b(_0x229418, _0x2722b6);
      return _0x193e2d.audioInstanceIdCounter;
    }
    function _0x20bb86(_0x4659c8) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return _0x193e2d.FAKEMOD_SAMPLERATE;
      }
      var _0x24d3f5 = _0x193e2d.audioInstances[_0x4659c8];
      if (!_0x24d3f5) {
        return _0x193e2d.FAKEMOD_SAMPLERATE;
      }
      var _0x5e65d3 = _0x24d3f5.buffer ? _0x24d3f5.buffer : _0x24d3f5.source ? _0x24d3f5.source.buffer : 0;
      if (!_0x5e65d3) {
        return _0x193e2d.FAKEMOD_SAMPLERATE;
      }
      return _0x5e65d3.sampleRate;
    }
    function _0x13fc81() {
      if (_0x193e2d.audioWebEnabled == 0) {
        return _0x193e2d.FAKEMOD_SAMPLERATE;
      }
      return _0x193e2d.audioContext.sampleRate;
    }
    function _0x50b431(_0x2544f2) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return 0;
      }
      var _0x66dbab = _0x193e2d.audioInstances[_0x2544f2];
      if (!_0x66dbab) {
        return 0;
      }
      return _0x66dbab.getLength();
    }
    function _0xf3f953(_0x255e69) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return 2;
      }
      var _0x4b3435 = _0x193e2d.audioInstances[_0x255e69];
      if (_0x4b3435.error) {
        return 2;
      }
      if (_0x4b3435.buffer || _0x4b3435.url) {
        return 0;
      }
      return 1;
    }
    function _0x583b90(_0xd76a11) {
      var _0x42e8d2 = _0x193e2d.pendingAudioSources[_0xd76a11];
      _0x42e8d2.sourceNode._startPlayback(_0x42e8d2.offset);
      delete _0x193e2d.pendingAudioSources[_0xd76a11];
    }
    function _0x42e4a3() {
      Object.keys(_0x193e2d.pendingAudioSources).forEach(function (_0x5cffa3) {
        _0x583b90(_0x5cffa3);
      });
    }
    function _0x302b28() {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        _0x193e2d.audioContext = new AudioContext();
        function _0x52aa2a() {
          if (_0x193e2d.audioContext.state === "suspended") {
            _0x193e2d.audioContext.resume().catch(function (_0x3652c) {
              console.warn("Could not resume audio context. Exception: " + _0x3652c);
            });
          } else {
            _0x17aa78.clearInterval(_0x5458c4);
          }
        }
        var _0x5458c4 = _0x17aa78.setInterval(_0x52aa2a, 400);
        _0x193e2d.audioWebEnabled = 1;
        function _0x296b02() {
          try {
            if (_0x193e2d.audioContext.state !== "running" && _0x193e2d.audioContext.state !== "closed") {
              _0x193e2d.audioContext.resume().catch(function (_0x8fe91c) {
                console.warn("Could not resume audio context. Exception: " + _0x8fe91c);
              });
            }
            _0x42e4a3();
            var _0xc926f3 = 20;
            while (_0x193e2d.audioCache.length < _0xc926f3) {
              var _0x41a7a7 = new Audio();
              _0x41a7a7.autoplay = false;
              _0x193e2d.audioCache.push(_0x41a7a7);
            }
          } catch (_0x5797ce) {}
        }
        window.addEventListener("mousedown", _0x296b02);
        window.addEventListener("touchstart", _0x296b02);
        _0x17aa78.deinitializers.push(function () {
          window.removeEventListener("mousedown", _0x296b02);
          window.removeEventListener("touchstart", _0x296b02);
        });
      } catch (_0x57fe03) {
        alert("Web Audio API is not supported in this browser");
      }
    }
    function _0x545aef(_0x3e8c42) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return true;
      }
      var _0x499ad2 = _0x193e2d.audioInstances[_0x3e8c42];
      if (!_0x499ad2) {
        return true;
      }
      return _0x499ad2.isStopped();
    }
    function _0x3468f4(_0x4fe12) {
      var _0x29947d = _0x4464de(null, false);
      _0x193e2d.audioContext.decodeAudioData(_0x4fe12, function (_0x1253a4) {
        _0x29947d.buffer = _0x1253a4;
      }, function (_0x515e9c) {
        _0x29947d.error = true;
        console.log("Decode error: " + _0x515e9c);
      });
      return _0x29947d;
    }
    function _0x32c749(_0x41e176, _0x7f74b) {
      _0x193e2d.pendingAudioSources[_0x41e176.mediaElement.src] = {
        sourceNode: _0x41e176,
        offset: _0x7f74b
      };
    }
    function _0x58cfb8(_0xbaa9e1) {
      switch (_0xbaa9e1) {
        case 13:
          return "audio/mpeg";
        case 20:
          return "audio/wav";
        default:
          return "audio/mp4";
      }
    }
    function _0x1aa59f(_0xc10ce8, _0x233f00) {
      var _0x3ccb2b = _0x58cfb8(_0x233f00);
      var _0x3a3105 = new Blob([_0xc10ce8], {
        type: _0x3ccb2b
      });
      var _0x26c55d = {
        url: URL.createObjectURL(_0x3a3105),
        error: false,
        mediaElement: new Audio()
      };
      _0x26c55d.mediaElement.preload = "metadata";
      _0x26c55d.mediaElement.src = _0x26c55d.url;
      _0x26c55d.release = function () {
        if (!this.mediaElement) {
          return;
        }
        this.mediaElement.src = "";
        URL.revokeObjectURL(this.url);
        delete this.mediaElement;
        delete this.url;
      };
      _0x26c55d.getLength = function () {
        return this.mediaElement.duration * 44100;
      };
      _0x26c55d.getData = function (_0x2a5fd9, _0x4c6d43) {
        console.warn("getData() is not supported for compressed sound.");
        return 0;
      };
      _0x26c55d.getNumberOfChannels = function () {
        console.warn("getNumberOfChannels() is not supported for compressed sound.");
        return 0;
      };
      _0x26c55d.getFrequency = function () {
        console.warn("getFrequency() is not supported for compressed sound.");
        return 0;
      };
      _0x26c55d.createSourceNode = function () {
        var _0x562ac6 = this;
        var _0x3b794d = _0x193e2d.audioCache.length ? _0x193e2d.audioCache.pop() : new Audio();
        _0x3b794d.preload = "metadata";
        _0x3b794d.src = this.url;
        var _0x3301f0 = _0x193e2d.audioContext.createMediaElementSource(_0x3b794d);
        Object.defineProperty(_0x3301f0, "loop", {
          get: function () {
            return _0x3301f0.mediaElement.loop;
          },
          set: function (_0x31c9d4) {
            if (_0x3301f0.mediaElement.loop !== _0x31c9d4) {
              _0x3301f0.mediaElement.loop = _0x31c9d4;
            }
          }
        });
        _0x3301f0.playbackRate = {};
        Object.defineProperty(_0x3301f0.playbackRate, "value", {
          get: function () {
            return _0x3301f0.mediaElement.playbackRate;
          },
          set: function (_0xfa38e3) {
            if (_0x3301f0.mediaElement.playbackRate !== _0xfa38e3) {
              _0x3301f0.mediaElement.playbackRate = _0xfa38e3;
            }
          }
        });
        Object.defineProperty(_0x3301f0, "currentTime", {
          get: function () {
            return _0x3301f0.mediaElement.currentTime;
          },
          set: function (_0x1586f3) {
            if (_0x3301f0.mediaElement.currentTime !== _0x1586f3) {
              _0x3301f0.mediaElement.currentTime = _0x1586f3;
            }
          }
        });
        Object.defineProperty(_0x3301f0, "mute", {
          get: function () {
            return _0x3301f0.mediaElement.mute;
          },
          set: function (_0x4bea3a) {
            if (_0x3301f0.mediaElement.mute !== _0x4bea3a) {
              _0x3301f0.mediaElement.mute = _0x4bea3a;
            }
          }
        });
        Object.defineProperty(_0x3301f0, "onended", {
          get: function () {
            return _0x3301f0.mediaElement.onended;
          },
          set: function (_0x2d3975) {
            _0x3301f0.mediaElement.onended = _0x2d3975;
          }
        });
        _0x3301f0.playPromise = null;
        _0x3301f0.playTimeout = null;
        _0x3301f0.pauseRequested = false;
        _0x3301f0.isStopped = false;
        _0x3301f0._pauseMediaElement = function () {
          if (_0x3301f0.playPromise || _0x3301f0.playTimeout) {
            _0x3301f0.pauseRequested = true;
          } else {
            _0x3301f0.mediaElement.pause();
          }
        };
        _0x3301f0._startPlayback = function (_0x171857) {
          if (_0x3301f0.playPromise || _0x3301f0.playTimeout) {
            _0x3301f0.mediaElement.currentTime = _0x171857;
            _0x3301f0.pauseRequested = false;
            return;
          }
          _0x3301f0.mediaElement.currentTime = _0x171857;
          _0x3301f0.playPromise = _0x3301f0.mediaElement.play();
          if (_0x3301f0.playPromise) {
            _0x3301f0.playPromise.then(function () {
              if (_0x3301f0.pauseRequested) {
                _0x3301f0.mediaElement.pause();
                _0x3301f0.pauseRequested = false;
              }
              _0x3301f0.playPromise = null;
            }).catch(function (_0x40e01d) {
              _0x3301f0.playPromise = null;
              if (_0x40e01d.name !== "NotAllowedError") {
                throw _0x40e01d;
              }
              _0x32c749(_0x3301f0, _0x171857);
            });
          }
        };
        _0x3301f0.start = function (_0x189721, _0x4f84a1) {
          if (typeof _0x189721 === "undefined") {
            _0x189721 = _0x193e2d.audioContext.currentTime;
          }
          if (typeof _0x4f84a1 === "undefined") {
            _0x4f84a1 = 0;
          }
          var _0x4c35a5 = 4;
          var _0x14cc32 = (_0x189721 - _0x193e2d.audioContext.currentTime) * 1000;
          if (_0x14cc32 > _0x4c35a5) {
            _0x3301f0.playTimeout = setTimeout(function () {
              _0x3301f0.playTimeout = null;
              _0x3301f0._startPlayback(_0x4f84a1);
            }, _0x14cc32);
          } else {
            _0x3301f0._startPlayback(_0x4f84a1);
          }
        };
        _0x3301f0.stop = function (_0x424180) {
          if (typeof _0x424180 === "undefined") {
            _0x424180 = _0x193e2d.audioContext.currentTime;
          }
          var _0x3ad66c = 4;
          var _0x391f3f = (_0x424180 - _0x193e2d.audioContext.currentTime) * 1000;
          if (_0x391f3f > _0x3ad66c) {
            setTimeout(function () {
              _0x3301f0._pauseMediaElement();
              _0x3301f0.isStopped = true;
            }, _0x391f3f);
          } else {
            _0x3301f0._pauseMediaElement();
            _0x3301f0.isStopped = true;
          }
        };
        _0x16ec91(_0x3301f0);
        return _0x3301f0;
      };
      return _0x26c55d;
    }
    function _0xfdff7(_0xf253fc, _0x1c2514, _0x14c3db, _0xd1cce7) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return 0;
      }
      var _0x17ed93 = _0x59122e.buffer.slice(_0xf253fc, _0xf253fc + _0x1c2514);
      if (_0x1c2514 < 131072) {
        _0x14c3db = 1;
      }
      var _0x18636f;
      if (_0x14c3db) {
        _0x18636f = _0x3468f4(_0x17ed93);
      } else {
        _0x18636f = _0x1aa59f(_0x17ed93, _0xd1cce7);
      }
      _0x193e2d.audioInstances[++_0x193e2d.audioInstanceIdCounter] = _0x18636f;
      return _0x193e2d.audioInstanceIdCounter;
    }
    function _0x2fb4df(_0x381d39, _0x18ed33, _0xa55299, _0x32fe22) {
      var _0x18fdab = _0x193e2d.audioContext.createBuffer(_0x381d39, _0x18ed33, _0xa55299);
      for (var _0x2299f5 = 0; _0x2299f5 < _0x381d39; _0x2299f5++) {
        var _0x2dfde6 = (_0x32fe22 >> 2) + _0x18ed33 * _0x2299f5;
        var _0x2c4e92 = _0x18fdab.copyToChannel || function (_0x4cf8bf, _0xfe4a23, _0x336e5c) {
          var _0x472019 = _0x4cf8bf.subarray(0, Math.min(_0x4cf8bf.length, this.length - (_0x336e5c | 0)));
          this.getChannelData(_0xfe4a23 | 0).set(_0x472019, _0x336e5c | 0);
        };
        _0x2c4e92.apply(_0x18fdab, [_0x51ee3f.subarray(_0x2dfde6, _0x2dfde6 + _0x18ed33), _0x2299f5, 0]);
      }
      return _0x4464de(_0x18fdab, false);
    }
    function _0xf9a35c(_0x18e4a7, _0x4055d0, _0x491b22, _0x8b6cbe) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return 0;
      }
      var _0x19bde3 = _0x2fb4df(_0x18e4a7, _0x4055d0, _0x491b22, _0x8b6cbe);
      _0x193e2d.audioInstances[++_0x193e2d.audioInstanceIdCounter] = _0x19bde3;
      return _0x193e2d.audioInstanceIdCounter;
    }
    function _0x5c9d95(_0x131148, _0x54bbdd, _0x337684, _0x2c1e12) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      _0x41cf4a(_0x54bbdd, 0);
      var _0x4c3619 = _0x193e2d.audioInstances[_0x131148];
      var _0x1eb701 = _0x193e2d.audioInstances[_0x54bbdd];
      if (!_0x4c3619) {
        console.log("Trying to play sound which is not loaded.");
        return;
      }
      try {
        _0x1eb701.playSoundClip(_0x4c3619, _0x193e2d.audioContext.currentTime + _0x2c1e12, _0x337684);
      } catch (_0x33b403) {
        console.error("playSoundClip error. Exception: " + e);
      }
    }
    function _0x27c6d0(_0xa2d149) {
      var _0x8e4827 = _0x193e2d.audioInstances[_0xa2d149];
      if (_0x8e4827) {
        _0x8e4827.release();
      }
      delete _0x193e2d.audioInstances[_0xa2d149];
    }
    function _0x51d395() {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      if (_0x193e2d.audioContext.state === "suspended") {
        _0x193e2d.audioContext.resume().catch(function (_0x582afe) {
          console.warn("Could not resume audio context. Exception: " + _0x582afe);
        });
      }
    }
    function _0x3f72f6(_0x1dd45b, _0x41481b) {
      var _0x43bbc4 = _0x193e2d.audioInstances[_0x1dd45b];
      _0x43bbc4.set3D(_0x41481b);
    }
    function _0x441383(_0xcd54ad, _0x59e234, _0x22f982, _0x1f38ba, _0x553999, _0x6ccdc) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      _0xcd54ad = -_0xcd54ad;
      _0x59e234 = -_0x59e234;
      _0x22f982 = -_0x22f982;
      var _0x5d8605 = _0x193e2d.audioContext.listener;
      if (_0x5d8605.forwardX) {
        if (_0x5d8605.forwardX.value !== _0xcd54ad) {
          _0x5d8605.forwardX.value = _0xcd54ad;
        }
        if (_0x5d8605.forwardY.value !== _0x59e234) {
          _0x5d8605.forwardY.value = _0x59e234;
        }
        if (_0x5d8605.forwardZ.value !== _0x22f982) {
          _0x5d8605.forwardZ.value = _0x22f982;
        }
        if (_0x5d8605.upX.value !== _0x1f38ba) {
          _0x5d8605.upX.value = _0x1f38ba;
        }
        if (_0x5d8605.upY.value !== _0x553999) {
          _0x5d8605.upY.value = _0x553999;
        }
        if (_0x5d8605.upZ.value !== _0x6ccdc) {
          _0x5d8605.upZ.value = _0x6ccdc;
        }
      } else if (_0x5d8605._forwardX !== _0xcd54ad || _0x5d8605._forwardY !== _0x59e234 || _0x5d8605._forwardZ !== _0x22f982 || _0x5d8605._upX !== _0x1f38ba || _0x5d8605._upY !== _0x553999 || _0x5d8605._upZ !== _0x6ccdc) {
        _0x5d8605.setOrientation(_0xcd54ad, _0x59e234, _0x22f982, _0x1f38ba, _0x553999, _0x6ccdc);
        _0x5d8605._forwardX = _0xcd54ad;
        _0x5d8605._forwardY = _0x59e234;
        _0x5d8605._forwardZ = _0x22f982;
        _0x5d8605._upX = _0x1f38ba;
        _0x5d8605._upY = _0x553999;
        _0x5d8605._upZ = _0x6ccdc;
      }
    }
    function _0x4ef090(_0x23386c, _0x55d99f, _0x113258) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      var _0xd05438 = _0x193e2d.audioContext.listener;
      if (_0xd05438.positionX) {
        if (_0xd05438.positionX.value !== _0x23386c) {
          _0xd05438.positionX.value = _0x23386c;
        }
        if (_0xd05438.positionY.value !== _0x55d99f) {
          _0xd05438.positionY.value = _0x55d99f;
        }
        if (_0xd05438.positionZ.value !== _0x113258) {
          _0xd05438.positionZ.value = _0x113258;
        }
      } else if (_0xd05438._positionX !== _0x23386c || _0xd05438._positionY !== _0x55d99f || _0xd05438._positionZ !== _0x113258) {
        _0xd05438.setPosition(_0x23386c, _0x55d99f, _0x113258);
        _0xd05438._positionX = _0x23386c;
        _0xd05438._positionY = _0x55d99f;
        _0xd05438._positionZ = _0x113258;
      }
    }
    function _0x484cc2(_0xd034e, _0x233fb2) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      var _0x2da3e1 = _0x193e2d.audioInstances[_0xd034e];
      _0x2da3e1.setLoop(_0x233fb2);
    }
    function _0x50426d(_0x3b662d, _0x4fe630, _0x49a997) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      var _0x4bce91 = _0x193e2d.audioInstances[_0x3b662d];
      _0x4bce91.setLoopPoints(_0x4fe630, _0x49a997);
    }
    function _0x2cb017(_0x22d08d, _0x920914) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      var _0x3c7230 = _0x193e2d.audioInstances[_0x22d08d];
      if (_0x920914 != _0x3c7230.isPaused()) {
        if (_0x920914) {
          _0x3c7230.pause();
        } else {
          _0x3c7230.resume();
        }
      }
    }
    function _0x1f1d0d(_0x2e1544, _0x447c3a) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0xe1065e = _0x193e2d.audioInstances[_0x2e1544];
        _0xe1065e.setPitch(_0x447c3a);
      } catch (_0xb4c285) {
        console.error("JS_Sound_SetPitch(channel=" + _0x2e1544 + ", pitch=" + _0x447c3a + ") threw an exception: " + _0xb4c285);
      }
    }
    function _0x598625(_0x1d97d5, _0x235336, _0xbc11d9, _0x18a28d) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      var _0x114597 = _0x193e2d.audioInstances[_0x1d97d5];
      _0x114597.setPosition(_0x235336, _0xbc11d9, _0x18a28d);
    }
    function _0x53bfae(_0x561cf4, _0x5c5560) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      try {
        var _0x712189 = _0x193e2d.audioInstances[_0x561cf4];
        _0x712189.setVolume(_0x5c5560);
      } catch (_0x52d3d2) {
        console.error("JS_Sound_SetVolume(channel=" + _0x561cf4 + ", volume=" + _0x5c5560 + ") threw an exception: " + _0x52d3d2);
      }
    }
    function _0x41cf4a(_0x17c275, _0x3472e3) {
      if (_0x193e2d.audioWebEnabled == 0) {
        return;
      }
      var _0x21b0cb = _0x193e2d.audioInstances[_0x17c275];
      _0x21b0cb.stop(_0x3472e3);
    }
    function _0x9d7d0f(_0x3d6146, _0x5057cf) {
      var _0x2efb5e = _0x17aa78.SystemInfo.browser;
      if (_0x3d6146) {
        _0x4f8934(_0x2efb5e, _0x3d6146, _0x5057cf);
      }
      return _0xa3918a(_0x2efb5e);
    }
    function _0x4dc18e(_0x1ab002, _0x5f2644) {
      var _0x7b9c2 = _0x17aa78.SystemInfo.browserVersion;
      if (_0x1ab002) {
        _0x4f8934(_0x7b9c2, _0x1ab002, _0x5f2644);
      }
      return _0xa3918a(_0x7b9c2);
    }
    function _0x1b2fa5(_0x1390a6, _0x54f4b4, _0x3d8e2e) {
      var _0x2ffe5c = _0x3d5aa0(_0x1390a6);
      var _0x493ed2 = _0x2ffe5c == "#canvas" ? _0x17aa78.canvas : document.querySelector(_0x2ffe5c);
      var _0x4b51c6 = 0;
      var _0x12536d = 0;
      if (_0x493ed2) {
        var _0x368f9b = _0x493ed2.getBoundingClientRect();
        _0x4b51c6 = _0x368f9b.width;
        _0x12536d = _0x368f9b.height;
      }
      _0xe5eb95[_0x54f4b4 >> 3] = _0x4b51c6;
      _0xe5eb95[_0x3d8e2e >> 3] = _0x12536d;
    }
    function _0x1c767c(_0x4393ac, _0x3b4743) {
      if (_0x4393ac) {
        _0x4f8934("https://games.ofree.io/escape-road-3/game.html", _0x4393ac, _0x3b4743);
      }
      return _0xa3918a("https://games.ofree.io/escape-road-3/game.html");
    }
    function _0x5a49e5(_0x5595e1, _0x2437a0) {
      var _0x33fb9b = _0x17aa78.SystemInfo.gpu;
      if (_0x5595e1) {
        _0x4f8934(_0x33fb9b, _0x5595e1, _0x2437a0);
      }
      return _0xa3918a(_0x33fb9b);
    }
    function _0x4e215a(_0x2d25cc, _0x3e3c15) {
      var _0x48fc9c = _0x17aa78.SystemInfo.language;
      if (_0x2d25cc) {
        _0x4f8934(_0x48fc9c, _0x2d25cc, _0x3e3c15);
      }
      return _0xa3918a(_0x48fc9c);
    }
    function _0x41a602() {
      return _0x17aa78.matchWebGLToCanvasSize || _0x17aa78.matchWebGLToCanvasSize === undefined;
    }
    function _0x3c78ce() {
      return _0x59122e.length / 1048576;
    }
    function _0x42017b(_0x2266b4, _0x1e0302) {
      var _0x12b98e = _0x17aa78.SystemInfo.os + " " + _0x17aa78.SystemInfo.osVersion;
      if (_0x2266b4) {
        _0x4f8934(_0x12b98e, _0x2266b4, _0x1e0302);
      }
      return _0xa3918a(_0x12b98e);
    }
    function _0x3f86de() {
      if (_0x17aa78.matchWebGLToCanvasSize == false) {
        return 1;
      } else {
        return _0x17aa78.devicePixelRatio || window.devicePixelRatio || 1;
      }
    }
    function _0x4f67e0(_0x307032, _0x448018) {
      _0xe5eb95[_0x307032 >> 3] = _0x17aa78.SystemInfo.width;
      _0xe5eb95[_0x448018 >> 3] = _0x17aa78.SystemInfo.height;
    }
    function _0x1e8ddb(_0x377f84, _0x370de2) {
      if (_0x377f84) {
        _0x4f8934(_0x17aa78.streamingAssetsUrl, _0x377f84, _0x370de2);
      }
      return _0xa3918a(_0x17aa78.streamingAssetsUrl);
    }
    function _0x1d8815() {
      var _0x8e14db = _0x5cd50f.getExtension("WEBGL_compressed_texture_astc");
      if (_0x8e14db && _0x8e14db.getSupportedProfiles) {
        return _0x8e14db.getSupportedProfiles().includes("hdr");
      }
      return false;
    }
    function _0x295863() {
      return _0x17aa78.SystemInfo.hasCursorLock;
    }
    function _0x562317() {
      return _0x17aa78.SystemInfo.hasFullscreen;
    }
    function _0x26b908() {
      return _0x17aa78.SystemInfo.hasWebGL;
    }
    function _0x110ba0() {
      return !!_0x17aa78.shouldQuit;
    }
    var _0x13b958 = {
      requests: {},
      responses: {},
      abortControllers: {},
      timer: {},
      nextRequestId: 1
    };
    function _0x167a20(_0x2ec1e7) {
      var _0x434fb6 = _0x13b958.abortControllers[_0x2ec1e7];
      if (!_0x434fb6 || _0x434fb6.signal.aborted) {
        return;
      }
      _0x434fb6.abort();
    }
    function _0xd08161(_0x29f813, _0x4aba3a) {
      var _0x12bd93 = _0x3d5aa0(_0x29f813);
      var _0x46371e = _0x3d5aa0(_0x4aba3a);
      var _0x37c2c6 = new AbortController();
      var _0xce5422 = {
        url: _0x12bd93,
        init: {
          method: _0x46371e,
          signal: _0x37c2c6.signal,
          headers: {},
          enableStreamingDownload: true
        },
        tempBuffer: null,
        tempBufferSize: 0
      };
      _0x13b958.abortControllers[_0x13b958.nextRequestId] = _0x37c2c6;
      _0x13b958.requests[_0x13b958.nextRequestId] = _0xce5422;
      return _0x13b958.nextRequestId++;
    }
    function _0x578107(_0x21a536) {
      var _0x165e01 = _0x13b958.responses[_0x21a536];
      if (!_0x165e01) {
        return "";
      }
      if (_0x165e01.headerString) {
        return _0x165e01.headerString;
      }
      var _0x4d6f93 = "";
      var _0x5577af = _0x165e01.headers.entries();
      for (var _0x2ccab6 = _0x5577af.next(); !_0x2ccab6.done; _0x2ccab6 = _0x5577af.next()) {
        _0x4d6f93 += _0x2ccab6.value[0] + ": " + _0x2ccab6.value[1] + "\r\n";
      }
      _0x165e01.headerString = _0x4d6f93;
      return _0x4d6f93;
    }
    function _0x1ed0ab(_0x4cceb8, _0x9e08f5, _0x11c715, _0x91f15d, _0x420e26) {
      var _0x2b7372 = _0x13b958.responses[_0x4cceb8];
      if (!_0x2b7372) {
        _0x4f8934("", _0x9e08f5, _0x11c715);
        _0x4f8934("", _0x91f15d, _0x420e26);
        return;
      }
      if (_0x9e08f5) {
        var _0x2ba391 = _0x578107(_0x4cceb8);
        _0x4f8934(_0x2ba391, _0x9e08f5, _0x11c715);
      }
      if (_0x91f15d) {
        _0x4f8934(_0x2b7372.url, _0x91f15d, _0x420e26);
      }
    }
    function _0x26a6f1(_0x277a84, _0x4fd7bf) {
      var _0x21406a = _0x13b958.responses[_0x277a84];
      if (!_0x21406a) {
        _0x50f6f2[_0x4fd7bf >> 2] = 0;
        _0x50f6f2[(_0x4fd7bf >> 2) + 1] = 0;
        return;
      }
      var _0x53eadb = _0x578107(_0x277a84);
      _0x50f6f2[_0x4fd7bf >> 2] = _0xa3918a(_0x53eadb);
      _0x50f6f2[(_0x4fd7bf >> 2) + 1] = _0xa3918a(_0x21406a.url);
    }
    function _0x48b7b8(_0x3b8f40) {
      if (_0x13b958.timer[_0x3b8f40]) {
        clearTimeout(_0x13b958.timer[_0x3b8f40]);
      }
      delete _0x13b958.requests[_0x3b8f40];
      delete _0x13b958.responses[_0x3b8f40];
      delete _0x13b958.abortControllers[_0x3b8f40];
      delete _0x13b958.timer[_0x3b8f40];
    }
    function _0x20dce0(_0x42b4e6, _0x4db93f, _0x5462c1, _0x155b72, _0x4346de, _0x17eb64) {
      var _0x122c77 = _0x13b958.requests[_0x42b4e6];
      var _0x2b64ce = _0x13b958.abortControllers[_0x42b4e6];
      function _0x2f6038(_0x1a7297) {
        if (!_0x122c77.tempBuffer) {
          const _0x14a0ca = Math.max(_0x1a7297, 1024);
          _0x122c77.tempBuffer = _0x302e44(_0x14a0ca);
          _0x122c77.tempBufferSize = _0x14a0ca;
        }
        if (_0x122c77.tempBufferSize < _0x1a7297) {
          _0x1e689c(_0x122c77.tempBuffer);
          _0x122c77.tempBuffer = _0x302e44(_0x1a7297);
          _0x122c77.tempBufferSize = _0x1a7297;
        }
        return _0x122c77.tempBuffer;
      }
      function _0x100376() {
        if (_0x13b958.timer[_0x42b4e6]) {
          clearTimeout(_0x13b958.timer[_0x42b4e6]);
          delete _0x13b958.timer[_0x42b4e6];
        }
      }
      function _0x31550e(_0x11e066, _0x2b12b1) {
        _0x100376();
        if (!_0x4346de) {
          return;
        }
        var _0x448da7 = 0;
        if (_0x122c77.init.enableStreamingDownload) {
          _0x50de76("viiiiii", _0x4346de, [_0x155b72, _0x11e066.status, 0, _0x2b12b1.length, 0, _0x448da7]);
        } else if (_0x2b12b1.length != 0) {
          var _0x11340e = _0x302e44(_0x2b12b1.length);
          _0x59122e.set(_0x2b12b1, _0x11340e);
          _0x50de76("viiiiii", _0x4346de, [_0x155b72, _0x11e066.status, _0x11340e, _0x2b12b1.length, 0, _0x448da7]);
        } else {
          _0x50de76("viiiiii", _0x4346de, [_0x155b72, _0x11e066.status, 0, 0, 0, _0x448da7]);
        }
        if (_0x122c77.tempBuffer) {
          _0x1e689c(_0x122c77.tempBuffer);
        }
      }
      function _0x3d515d(_0x104a42, _0x92f7d) {
        _0x100376();
        if (!_0x4346de) {
          return;
        }
        var _0x2cc0bb = _0xa3918a(_0x104a42) + 1;
        var _0x5639ae = _0x302e44(_0x2cc0bb);
        _0x4f8934(_0x104a42, _0x5639ae, _0x2cc0bb);
        _0x50de76("viiiiii", _0x4346de, [_0x155b72, 500, 0, 0, _0x5639ae, _0x92f7d]);
        _0x1e689c(_0x5639ae);
        if (_0x122c77.tempBuffer) {
          _0x1e689c(_0x122c77.tempBuffer);
        }
      }
      function _0x4b16f0(_0x16e9b2) {
        if (!_0x17eb64 || !_0x16e9b2.lengthComputable) {
          return;
        }
        var _0x3ce4c4 = _0x16e9b2.response;
        _0x13b958.responses[_0x42b4e6] = _0x3ce4c4;
        if (_0x16e9b2.chunk) {
          var _0x114787 = _0x2f6038(_0x16e9b2.chunk.length);
          _0x59122e.set(_0x16e9b2.chunk, _0x114787);
          _0x50de76("viiiiii", _0x17eb64, [_0x155b72, _0x3ce4c4.status, _0x16e9b2.loaded, _0x16e9b2.total, _0x114787, _0x16e9b2.chunk.length]);
        } else {
          _0x50de76("viiiiii", _0x17eb64, [_0x155b72, _0x3ce4c4.status, _0x16e9b2.loaded, _0x16e9b2.total, 0, 0]);
        }
      }
      try {
        if (_0x5462c1 > 0) {
          var _0x394fd4 = _0x59122e.subarray(_0x4db93f, _0x4db93f + _0x5462c1);
          _0x122c77.init.body = new Blob([_0x394fd4]);
        }
        if (_0x122c77.timeout) {
          _0x13b958.timer[_0x42b4e6] = setTimeout(function () {
            _0x122c77.isTimedOut = true;
            _0x2b64ce.abort();
          }, _0x122c77.timeout);
        }
        var _0x4233b2 = _0x17aa78.fetchWithProgress;
        _0x122c77.init.onProgress = _0x4b16f0;
        if (_0x17aa78.companyName && _0x17aa78.productName && _0x17aa78.cachedFetch) {
          _0x4233b2 = _0x17aa78.cachedFetch;
          _0x122c77.init.companyName = _0x17aa78.companyName;
          _0x122c77.init.productName = _0x17aa78.productName;
          _0x122c77.init.productVersion = _0x17aa78.productVersion;
          _0x122c77.init.control = _0x17aa78.cacheControl(_0x122c77.url);
        }
        _0x4233b2(_0x122c77.url, _0x122c77.init).then(function (_0x4c6fa8) {
          _0x13b958.responses[_0x42b4e6] = _0x4c6fa8;
          _0x31550e(_0x4c6fa8, _0x4c6fa8.parsedBody);
        }).catch(function (_0x2a4c18) {
          var _0x4f0938 = 2;
          var _0x2309c6 = 17;
          var _0x327c58 = 14;
          if (_0x122c77.isTimedOut) {
            _0x3d515d("Connection timed out.", _0x327c58);
          } else if (_0x2b64ce.signal.aborted) {
            _0x3d515d("Aborted.", _0x2309c6);
          } else {
            _0x3d515d(_0x2a4c18.message, _0x4f0938);
          }
        });
      } catch (_0x1405a2) {
        var _0x1f7ed3 = 2;
        _0x3d515d(_0x1405a2.message, _0x1f7ed3);
      }
    }
    function _0x542eba(_0x1ed614, _0x1da899) {
      var _0x28d5a4 = _0x13b958.requests[_0x1ed614];
      if (!_0x28d5a4) {
        return;
      }
      _0x28d5a4.init.redirect = _0x1da899 === 0 ? "error" : "follow";
    }
    function _0x5071f7(_0x2e6b36, _0x63f159, _0x12702c) {
      var _0x5a45ae = _0x13b958.requests[_0x2e6b36];
      if (!_0x5a45ae) {
        return;
      }
      var _0x399379 = _0x3d5aa0(_0x63f159);
      var _0x367b35 = _0x3d5aa0(_0x12702c);
      _0x5a45ae.init.headers[_0x399379] = _0x367b35;
    }
    function _0x4b8eb3(_0x2b4033, _0x413da3) {
      var _0x3beb0e = _0x13b958.requests[_0x2b4033];
      if (!_0x3beb0e) {
        return;
      }
      _0x3beb0e.timeout = _0x413da3;
    }
    function _0x4a9384(_0x381c9e, _0x2ad6f2, _0x5bb636, _0x10451b) {
      var _0x358ef0 = _0x3d5aa0(_0x381c9e);
      var _0x50ad16 = _0x3d5aa0(_0x2ad6f2);
      var _0x4d558c = _0x3d5aa0(_0x5bb636);
      var _0x11736a = _0x3d5aa0(_0x10451b);
      try {
        firebase.database().ref(_0x358ef0).on("child_added", function (_0x4d5175) {
          window.unityInstance.SendMessage(_0x50ad16, _0x4d558c, JSON.stringify(_0x4d5175.val()));
        });
      } catch (_0x5eae78) {
        window.unityInstance.SendMessage(_0x50ad16, _0x11736a, JSON.stringify(_0x5eae78, Object.getOwnPropertyNames(_0x5eae78)));
      }
    }
    function _0x318d33(_0x1a6905, _0x10ae31, _0x26e321, _0x5a059a) {
      var _0x57b8fc = _0x3d5aa0(_0x1a6905);
      var _0x1fe7b2 = _0x3d5aa0(_0x10ae31);
      var _0x24b7a9 = _0x3d5aa0(_0x26e321);
      var _0x5c8dfc = _0x3d5aa0(_0x5a059a);
      try {
        firebase.database().ref(_0x57b8fc).on("child_changed", function (_0x4537cf) {
          window.unityInstance.SendMessage(_0x1fe7b2, _0x24b7a9, JSON.stringify(_0x4537cf.val()));
        });
      } catch (_0x39ed9f) {
        window.unityInstance.SendMessage(_0x1fe7b2, _0x5c8dfc, JSON.stringify(_0x39ed9f, Object.getOwnPropertyNames(_0x39ed9f)));
      }
    }
    function _0x241b4c(_0x3d8663, _0x1c03e8, _0x4f6458, _0x5330d6) {
      var _0x49fefc = _0x3d5aa0(_0x3d8663);
      var _0x2da8cb = _0x3d5aa0(_0x1c03e8);
      var _0x42f412 = _0x3d5aa0(_0x4f6458);
      var _0x2a1f71 = _0x3d5aa0(_0x5330d6);
      try {
        firebase.database().ref(_0x49fefc).on("child_removed", function (_0x1ef817) {
          window.unityInstance.SendMessage(_0x2da8cb, _0x42f412, JSON.stringify(_0x1ef817.val()));
        });
      } catch (_0x7daa3c) {
        window.unityInstance.SendMessage(_0x2da8cb, _0x2a1f71, JSON.stringify(_0x7daa3c, Object.getOwnPropertyNames(_0x7daa3c)));
      }
    }
    function _0x38b595(_0x56029f, _0x50b35e, _0x36e33e, _0x4dbb14, _0x21d2a0) {
      var _0x51af8f = _0x3d5aa0(_0x56029f);
      var _0x52853d = _0x3d5aa0(_0x36e33e);
      var _0x51cee6 = _0x3d5aa0(_0x4dbb14);
      var _0x339d97 = _0x3d5aa0(_0x21d2a0);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x51af8f + "/collection/"] = firebase.firestore().collection(_0x51af8f).onSnapshot({
          includeMetadataChanges: _0x50b35e == 1
        }, function (_0x57b263) {
          var _0x59db90 = {};
          _0x57b263.forEach(function (_0x29a126) {
            _0x59db90[_0x29a126.id] = _0x29a126.data();
          });
          window.unityInstance.SendMessage(_0x52853d, _0x51cee6, JSON.stringify(_0x59db90));
        }, function (_0x477b06) {
          window.unityInstance.SendMessage(_0x52853d, _0x339d97, JSON.stringify(_0x477b06, Object.getOwnPropertyNames(_0x477b06)));
        });
      } catch (_0xb9725c) {
        window.unityInstance.SendMessage(_0x52853d, _0x339d97, JSON.stringify(_0xb9725c, Object.getOwnPropertyNames(_0xb9725c)));
      }
    }
    function _0x7f9b56(_0x55bdbe, _0x417daf, _0x499b89, _0x5b1742, _0x2a7ae1, _0x325203) {
      var _0x2ba8a1 = _0x3d5aa0(_0x55bdbe);
      var _0x171866 = _0x3d5aa0(_0x417daf);
      var _0x186d11 = _0x3d5aa0(_0x5b1742);
      var _0x42b648 = _0x3d5aa0(_0x2a7ae1);
      var _0x191a25 = _0x3d5aa0(_0x325203);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x2ba8a1 + "/" + _0x171866] = firebase.firestore().collection(_0x2ba8a1).doc(_0x171866).onSnapshot({
          includeMetadataChanges: _0x499b89 == 1
        }, function (_0x4f9f9b) {
          window.unityInstance.SendMessage(_0x186d11, _0x42b648, JSON.stringify(_0x4f9f9b.data()));
        }, function (_0x22d677) {
          window.unityInstance.SendMessage(_0x186d11, _0x191a25, JSON.stringify(_0x22d677, Object.getOwnPropertyNames(_0x22d677)));
        });
      } catch (_0x5c8a31) {
        window.unityInstance.SendMessage(_0x186d11, _0x191a25, JSON.stringify(_0x5c8a31, Object.getOwnPropertyNames(_0x5c8a31)));
      }
    }
    function _0x4a848d(_0x1fc372, _0x58aacc, _0x5f1c46, _0x45710c) {
      var _0x1429ea = _0x3d5aa0(_0x1fc372);
      var _0x14083d = _0x3d5aa0(_0x58aacc);
      var _0x2ce1f7 = _0x3d5aa0(_0x5f1c46);
      var _0x86002f = _0x3d5aa0(_0x45710c);
      try {
        firebase.database().ref(_0x1429ea).on("value", function (_0x2f5474) {
          window.unityInstance.SendMessage(_0x14083d, _0x2ce1f7, JSON.stringify(_0x2f5474.val()));
        });
      } catch (_0x3bc01a) {
        window.unityInstance.SendMessage(_0x14083d, _0x86002f, JSON.stringify(_0x3bc01a, Object.getOwnPropertyNames(_0x3bc01a)));
      }
    }
    function _0x573559(_0x3071c0) {
      var _0x5bcc12 = _0x3d5aa0(_0x3071c0);
      firebaseLogEvent(_0x5bcc12);
    }
    function _0x18812a(_0x398d09, _0x1794c3) {
      var _0x22002f = _0x3d5aa0(_0x398d09);
      var _0x457a9b = JSON.parse(_0x3d5aa0(_0x1794c3));
      firebaseLogEventParameter(_0x22002f, _0x457a9b);
    }
    function _0x3c2b5b(_0x4a74cd, _0x298c3c, _0x92ec83, _0x51cb6d, _0x6e0a03) {
      var _0x1660eb = _0x3d5aa0(_0x4a74cd);
      var _0x4c8050 = _0x3d5aa0(_0x92ec83);
      var _0x344bf9 = _0x3d5aa0(_0x51cb6d);
      var _0x186956 = _0x3d5aa0(_0x6e0a03);
      try {
        firebase.database().ref(_0x1660eb).transaction(function (_0x4f11d4) {
          if (!isNaN(_0x4f11d4)) {
            return _0x4f11d4 + _0x298c3c;
          } else {
            return _0x298c3c;
          }
        }).then(function (_0x457791) {
          window.unityInstance.SendMessage(_0x4c8050, _0x344bf9, "Success: transaction run in " + _0x1660eb);
        });
      } catch (_0x2d64dc) {
        window.unityInstance.SendMessage(_0x4c8050, _0x186956, JSON.stringify(_0x2d64dc, Object.getOwnPropertyNames(_0x2d64dc)));
      }
    }
    function _0x382a84(_0xae3ba2, _0x4d296c, _0x49fe18) {
      var _0x35fbcd = _0x3d5aa0(_0xae3ba2);
      var _0x443a5d = _0x3d5aa0(_0x4d296c);
      var _0x3ca209 = _0x3d5aa0(_0x49fe18);
      firebase.auth().onAuthStateChanged(function (_0x284db7) {
        if (_0x284db7) {
          window.unityInstance.SendMessage(_0x35fbcd, _0x443a5d, JSON.stringify(_0x284db7));
        } else {
          window.unityInstance.SendMessage(_0x35fbcd, _0x3ca209, "User signed out");
        }
      });
    }
    function _0x2bcee2(_0x1851b3) {
      window.wgUnityInstance = _0x17aa78;
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
        window[preroll.config.loaderObjectName].ping(_0x1851b3);
      } catch (_0x189e4d) {
        console.log("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0x2a9eae = document.createElement("script");
        _0x2a9eae.addEventListener("load", function (_0x3b546c) {
          var _0x4eef19 = document.createElement("script");
          _0x4eef19.addEventListener("load", function (_0xea1634) {
            console.log("WGSDK: Development resources loaded.");
            _0x53a6b8(_0x1851b3, true);
          }.bind(this));
          document.getElementsByTagName("head")[0].appendChild(_0x4eef19);
          _0x4eef19.src = window.GMSOFT_ADS_INFO.wgLibrary;
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0x2a9eae);
        _0x2a9eae.src = window.GMSOFT_ADS_INFO.wgConf;
      }
    }
    function _0x53a6b8(_0x4f1333, _0x16871b) {
      var _0x2e9d0c;
      if (_0x16871b === true) {
        _0x2e9d0c = _0x4f1333;
      } else {
        _0x2e9d0c = _0x3d5aa0(_0x4f1333);
      }
      setTimeout(function () {
        _0x2bcee2(_0x2e9d0c);
      }, 250);
    }
    function _0x3c52a7(_0x592690, _0x6046de, _0x5c0485, _0x4520c0, _0x1beecb) {
      var _0x5c9efc = _0x3d5aa0(_0x592690);
      var _0x216bb2 = _0x3d5aa0(_0x6046de);
      var _0x280221 = _0x3d5aa0(_0x5c0485);
      var _0x1935af = _0x3d5aa0(_0x4520c0);
      var _0x15ddbe = _0x3d5aa0(_0x1beecb);
      try {
        firebase.database().ref(_0x5c9efc).set(JSON.parse(_0x216bb2)).then(function (_0x3c964a) {
          window.unityInstance.SendMessage(_0x280221, _0x1935af, "Success: " + _0x216bb2 + " was posted to " + _0x5c9efc);
        });
      } catch (_0x1eb6d6) {
        window.unityInstance.SendMessage(_0x280221, _0x15ddbe, JSON.stringify(_0x1eb6d6, Object.getOwnPropertyNames(_0x1eb6d6)));
      }
    }
    function _0x5ba2b1(_0x4bb6fb, _0x2ad3a0, _0x5e4826, _0x3983b7, _0x4ea571) {
      var _0x41cbaa = _0x3d5aa0(_0x4bb6fb);
      var _0x343416 = _0x3d5aa0(_0x2ad3a0);
      var _0xa729f = _0x3d5aa0(_0x5e4826);
      var _0x55dee7 = _0x3d5aa0(_0x3983b7);
      var _0x11a837 = _0x3d5aa0(_0x4ea571);
      try {
        firebase.database().ref(_0x41cbaa).push().set(JSON.parse(_0x343416)).then(function (_0x3bbf5d) {
          window.unityInstance.SendMessage(_0xa729f, _0x55dee7, "Success: " + _0x343416 + " was pushed to " + _0x41cbaa);
        });
      } catch (_0x9a2b10) {
        window.unityInstance.SendMessage(_0xa729f, _0x11a837, JSON.stringify(_0x9a2b10, Object.getOwnPropertyNames(_0x9a2b10)));
      }
    }
    function _0x203e71(_0x4fe6f9, _0x23dcf3) {
      var _0x1d6532 = true;
      var _0x9ad5b4 = _0x2e24a8(_0x4fe6f9);
      var _0x203dfe = _0x2e24a8(_0x23dcf3);
      var _0x41321d = _0x9ad5b4.split("|");
      for (var _0x17c70f = 0; _0x17c70f < _0x41321d.length; _0x17c70f++) {
        var _0x5ccc56 = _0x41321d[_0x17c70f];
        if ("games.ofree.io" == _0x5ccc56) {
          _0x1d6532 = false;
        }
      }
      return false;
    }
    function _0x3e2332() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
        window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
      } catch (_0x1041f0) {
        console.log("No WeeGooAFG implementation found!");
      }
    }
    function _0x23c6f0() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0x17aa78);
      } catch (_0x539559) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x23c6f0();
        }, 250);
      }
    }
    function _0x3dfe3f() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          onReady: "OnReadyMethod",
          onSuccess: "OnSuccessMethod",
          onFail: "OnFailMethod"
        });
      } catch (_0x30a48b) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x33eb3a();
      }
    }
    function _0x33eb3a() {
      setTimeout(function () {
        _0x3dfe3f();
      }, 250);
    }
    function _0x1d4be1(_0x3356a9, _0x5088cf, _0x4585b3, _0x2fc6ca, _0x52c4a0, _0x2188cc, _0x3f6758) {
      var _0x17987c = _0x3d5aa0(_0x3356a9);
      var _0x4a533b = _0x3d5aa0(_0x5088cf);
      var _0x118abd = _0x3d5aa0(_0x4585b3);
      var _0x594f62 = _0x3d5aa0(_0x2fc6ca);
      var _0x23944a = _0x3d5aa0(_0x52c4a0);
      var _0x3aee23 = _0x3d5aa0(_0x2188cc);
      var _0x4e4ae9 = _0x3d5aa0(_0x3f6758);
      try {
        var _0x2fc6ca = {};
        _0x2fc6ca[_0x118abd] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x594f62));
        firebase.firestore().collection(_0x17987c).doc(_0x4a533b).update(_0x2fc6ca).then(function () {
          window.unityInstance.SendMessage(_0x23944a, _0x3aee23, "Success: element " + _0x594f62 + " was removed in " + _0x118abd);
        }).catch(function (_0x4971eb) {
          window.unityInstance.SendMessage(_0x23944a, _0x4e4ae9, JSON.stringify(_0x4971eb, Object.getOwnPropertyNames(_0x4971eb)));
        });
      } catch (_0x3ae53f) {
        window.unityInstance.SendMessage(_0x23944a, _0x4e4ae9, JSON.stringify(_0x3ae53f, Object.getOwnPropertyNames(_0x3ae53f)));
      }
    }
    function _0x465f24(_0x249964) {
      var _0x458edb = window.unityStringify(_0x249964);
      var _0x5eba20 = {
        adStarted: function () {
          window.UnitySDK.unlockPointer();
          _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AdStarted");
        },
        adFinished: function () {
          window.UnitySDK.lockPointer();
          _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AdFinished");
        },
        adError: function (_0x15ea2d) {
          _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify(_0x15ea2d));
        }
      };
      window.CrazyGames.SDK.ad.requestAd(_0x458edb, _0x5eba20).catch(function (_0x53f617) {
        window.UnitySDK.logError("Error while requesting ad:", _0x53f617);
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_AdError", JSON.stringify({
          code: "unknown",
          message: _0x53f617.message || "Unknown error"
        }));
      });
    }
    function _0x18f77a(_0x19baef) {
      var _0x19563e = JSON.parse(window.unityStringify(_0x19baef));
      try {
        window.CrazyGames.SDK.banner.requestOverlayBanners(_0x19563e, function (_0x3eff21, _0x1985cf, _0x550ae9) {});
      } catch (_0x54c423) {
        window.UnitySDK.logError("Error while requesting banners:", _0x54c423);
      }
    }
    function _0x8818d2(_0x5888b2) {
      var _0x4c0087 = JSON.parse(window.unityStringify(_0x5888b2));
      var _0x32d00e = "";
      try {
        _0x32d00e = window.CrazyGames.SDK.game.inviteLink(_0x4c0087);
      } catch (_0x12f39a) {
        window.UnitySDK.logError("Error while requesting invite url:", _0x12f39a);
      }
      var _0x812711 = _0xa3918a(_0x32d00e) + 1;
      var _0x546459 = _0x302e44(_0x812711);
      _0x4f8934(_0x32d00e, _0x546459, _0x812711);
      return _0x546459;
    }
    function _0x2e73b5(_0x2efdff) {
      _0x2efdff = _0x3d5aa0(_0x2efdff);
      window.GD_OPTIONS = {
        debug: false,
        gameId: _0x2efdff,
        onEvent: function (_0x14823c) {
          switch (_0x14823c.name) {
            case "SDK_GAME_START":
              _0xd6c6ec("GameDistribution", "ResumeGameCallback");
              break;
            case "SDK_GAME_PAUSE":
              _0xd6c6ec("GameDistribution", "PauseGameCallback");
              break;
            case "SDK_REWARDED_WATCH_COMPLETE":
              _0xd6c6ec("GameDistribution", "RewardedCompleteCallback");
              break;
            case "SDK_ERROR":
              break;
            default:
              _0xd6c6ec("GameDistribution", "EventCallback", _0x14823c.name);
          }
        }
      };
      (function (_0x40337a, _0x534863, _0x44975d) {
        var _0x29234e;
        var _0x58bd34 = _0x40337a.getElementsByTagName(_0x534863)[0];
        if (_0x40337a.getElementById(_0x44975d)) {
          return;
        }
        _0x29234e = _0x40337a.createElement(_0x534863);
        _0x29234e.id = _0x44975d;
        _0x29234e.src = "//html5.api.gamedistribution.com/main.min.js";
        _0x58bd34.parentNode.insertBefore(_0x29234e, _0x58bd34);
      })(document, "script", "gamedistribution-jssdk");
    }
    function _0x3a3b16() {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
        gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x5e4323) {
          _0xd6c6ec("GameDistribution", "PreloadRewardedVideoCallback", 1);
        }).catch(function (_0x4cc48d) {
          _0xd6c6ec("GameDistribution", "PreloadRewardedVideoCallback", 0);
        });
      }
    }
    function _0x314774(_0x126b5e) {
      _0x126b5e = _0x3d5aa0(_0x126b5e);
      if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x126b5e !== "undefined") {
        gdsdk.sendEvent(_0x126b5e).then(function (_0x3d817d) {
          console.log("Game event post message sent Succesfully...");
        }).catch(function (_0x383670) {
          console.log(_0x383670.message);
        });
      }
    }
    function _0x2705a1(_0x3bf0f7) {
      if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
        _0x3bf0f7 = _0x3d5aa0(_0x3bf0f7) || gdsdk.AdType.Interstitial;
        gdsdk.showAd(_0x3bf0f7).then(function (_0x47b70b) {
          if (_0x3bf0f7 === gdsdk.AdType.Rewarded) {
            _0xd6c6ec("GameDistribution", "RewardedVideoSuccessCallback");
          }
        }).catch(function (_0x28479b) {
          if (_0x3bf0f7 === gdsdk.AdType.Rewarded) {
            _0xd6c6ec("GameDistribution", "RewardedVideoFailureCallback");
          }
        });
      }
    }
    function _0x32bc34(_0x15a025, _0x1b82c7, _0x98ca1e, _0x22f8ce, _0x3e91d6, _0xc737a2) {
      var _0x3dece3 = _0x3d5aa0(_0x15a025);
      var _0x30a679 = _0x3d5aa0(_0x1b82c7);
      var _0xfe7940 = _0x3d5aa0(_0x98ca1e);
      var _0xb08153 = _0x3d5aa0(_0x22f8ce);
      var _0xa10bde = _0x3d5aa0(_0x3e91d6);
      var _0x297b53 = _0x3d5aa0(_0xc737a2);
      try {
        firebase.firestore().collection(_0x3dece3).doc(_0x30a679).set(JSON.parse(_0xfe7940)).then(function () {
          window.unityInstance.SendMessage(_0xb08153, _0xa10bde, "Success: document " + _0x30a679 + " was set");
        }).catch(function (_0x2d5f07) {
          window.unityInstance.SendMessage(_0xb08153, _0x297b53, JSON.stringify(_0x2d5f07, Object.getOwnPropertyNames(_0x2d5f07)));
        });
      } catch (_0x528a7f) {
        window.unityInstance.SendMessage(_0xb08153, _0x297b53, JSON.stringify(_0x528a7f, Object.getOwnPropertyNames(_0x528a7f)));
      }
    }
    function _0x31e244(_0x355dcc) {
      var _0x1707ed = JSON.parse(_0x3d5aa0(_0x355dcc));
      firebaseSetUserProperties(_0x1707ed);
    }
    function _0x248b97() {
      window.CrazyGames.SDK.user.showAccountLinkPrompt().then(function (_0x2f4d2b) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
          linkAccountResponseStr: JSON.stringify(_0x2f4d2b)
        }));
      }).catch(function (_0x491680) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON.stringify({
          errorJson: JSON.stringify(_0x491680)
        }));
      });
    }
    function _0x57fead() {
      window.CrazyGames.SDK.user.showAuthPrompt().then(function (_0x329ad8) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
          userJson: JSON.stringify(_0x329ad8)
        }));
      }).catch(function (_0x316822) {
        _0xd6c6ec("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON.stringify({
          errorJson: JSON.stringify(_0x316822)
        }));
      });
    }
    function _0x1a6457(_0x245bf0) {
      var _0x1d8e81 = JSON.parse(window.unityStringify(_0x245bf0));
      var _0x5e282d = "";
      try {
        _0x5e282d = window.CrazyGames.SDK.game.showInviteButton(_0x1d8e81);
      } catch (_0x2fe67f) {
        window.UnitySDK.logError("Error while showing invite button:", _0x2fe67f);
      }
      var _0x40ebbc = _0xa3918a(_0x5e282d) + 1;
      var _0x2bd8db = _0x302e44(_0x40ebbc);
      _0x4f8934(_0x5e282d, _0x2bd8db, _0x40ebbc);
      return _0x2bd8db;
    }
    function _0x3491b4() {
      window[preroll.config.loaderObjectName].showRewardAd();
    }
    function _0x20fd0c(_0x5ef3aa, _0x5c12da, _0x14c869) {
      var _0x3a0107 = _0x3d5aa0(_0x5ef3aa);
      var _0x314cca = _0x3d5aa0(_0x5c12da);
      var _0x49281c = _0x3d5aa0(_0x14c869);
      try {
        firebase.auth().signInAnonymously().then(function (_0x55806d) {
          window.unityInstance.SendMessage(_0x3a0107, _0x314cca, "Success: signed up for " + _0x55806d);
        }).catch(function (_0x4727ca) {
          window.unityInstance.SendMessage(_0x3a0107, _0x49281c, JSON.stringify(_0x4727ca, Object.getOwnPropertyNames(_0x4727ca)));
        });
      } catch (_0x346a80) {
        window.unityInstance.SendMessage(_0x3a0107, _0x49281c, JSON.stringify(_0x346a80, Object.getOwnPropertyNames(_0x346a80)));
      }
    }
    function _0x159947(_0x222ee6, _0x41c9ed, _0x28f865, _0x215ef8, _0x181cd1) {
      var _0x45bd51 = _0x3d5aa0(_0x222ee6);
      var _0x43dfc4 = _0x3d5aa0(_0x41c9ed);
      var _0x12508d = _0x3d5aa0(_0x28f865);
      var _0x5479a3 = _0x3d5aa0(_0x215ef8);
      var _0x4ab1a1 = _0x3d5aa0(_0x181cd1);
      try {
        firebase.auth().signInWithEmailAndPassword(_0x45bd51, _0x43dfc4).then(function (_0x5b35b7) {
          window.unityInstance.SendMessage(_0x12508d, _0x5479a3, "Success: signed in for " + _0x45bd51);
        }).catch(function (_0x53ce68) {
          window.unityInstance.SendMessage(_0x12508d, _0x4ab1a1, JSON.stringify(_0x53ce68, Object.getOwnPropertyNames(_0x53ce68)));
        });
      } catch (_0x3f4d02) {
        window.unityInstance.SendMessage(_0x12508d, _0x4ab1a1, JSON.stringify(_0x3f4d02, Object.getOwnPropertyNames(_0x3f4d02)));
      }
    }
    function _0x4664c4(_0x2c0af5, _0x242476, _0x3ca2e3) {
      var _0x40d91f = _0x3d5aa0(_0x2c0af5);
      var _0x3e3879 = _0x3d5aa0(_0x242476);
      var _0xd0dbdd = _0x3d5aa0(_0x3ca2e3);
      try {
        var _0xbd44c2 = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(_0xbd44c2).then(function (_0xc8a7b5) {
          window.unityInstance.SendMessage(_0x40d91f, _0x3e3879, "Success: signed in with Facebook!");
        }).catch(function (_0x91f7bb) {
          window.unityInstance.SendMessage(_0x40d91f, _0xd0dbdd, JSON.stringify(_0x91f7bb, Object.getOwnPropertyNames(_0x91f7bb)));
        });
      } catch (_0x248806) {
        window.unityInstance.SendMessage(_0x40d91f, _0xd0dbdd, JSON.stringify(_0x248806, Object.getOwnPropertyNames(_0x248806)));
      }
    }
    function _0x2b543f(_0x5e7b34, _0x505288, _0x5e7199) {
      var _0x2a5fcc = _0x3d5aa0(_0x5e7b34);
      var _0x2d7a78 = _0x3d5aa0(_0x505288);
      var _0x1e61fa = _0x3d5aa0(_0x5e7199);
      try {
        var _0x2adc6d = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(_0x2adc6d).then(function (_0x1b9ce5) {
          window.unityInstance.SendMessage(_0x2a5fcc, _0x2d7a78, "Success: signed in with Google!");
        }).catch(function (_0x373181) {
          window.unityInstance.SendMessage(_0x2a5fcc, _0x1e61fa, JSON.stringify(_0x373181, Object.getOwnPropertyNames(_0x373181)));
        });
      } catch (_0x46c73b) {
        window.unityInstance.SendMessage(_0x2a5fcc, _0x1e61fa, JSON.stringify(_0x46c73b, Object.getOwnPropertyNames(_0x46c73b)));
      }
    }
    function _0x3cfcd2(_0x350c00, _0x2b8722, _0x38a38a, _0x18759e) {
      var _0x437830 = _0x3d5aa0(_0x350c00);
      var _0x1f3200 = _0x3d5aa0(_0x2b8722);
      var _0x1c6cc1 = _0x3d5aa0(_0x38a38a);
      var _0x3042fb = _0x3d5aa0(_0x18759e);
      try {
        firebase.database().ref(_0x437830).off("child_added");
        window.unityInstance.SendMessage(_0x1f3200, _0x1c6cc1, "Success: listener removed");
      } catch (_0x32fc20) {
        window.unityInstance.SendMessage(_0x1f3200, _0x3042fb, JSON.stringify(_0x32fc20, Object.getOwnPropertyNames(_0x32fc20)));
      }
    }
    function _0x133ed8(_0x44c1e1, _0x1a9505, _0x31a44a, _0x5acaf8) {
      var _0x2c08fb = _0x3d5aa0(_0x44c1e1);
      var _0x248135 = _0x3d5aa0(_0x1a9505);
      var _0x910083 = _0x3d5aa0(_0x31a44a);
      var _0x2c6c5d = _0x3d5aa0(_0x5acaf8);
      try {
        firebase.database().ref(_0x2c08fb).off("child_changed");
        window.unityInstance.SendMessage(_0x248135, _0x910083, "Success: listener removed");
      } catch (_0x492220) {
        window.unityInstance.SendMessage(_0x248135, _0x2c6c5d, JSON.stringify(_0x492220, Object.getOwnPropertyNames(_0x492220)));
      }
    }
    function _0x21882a(_0xb3e944, _0x366053, _0x504238, _0x40a3d4) {
      var _0x5d2c0d = _0x3d5aa0(_0xb3e944);
      var _0x7f2929 = _0x3d5aa0(_0x366053);
      var _0x33fd01 = _0x3d5aa0(_0x504238);
      var _0x502f5a = _0x3d5aa0(_0x40a3d4);
      try {
        firebase.database().ref(_0x5d2c0d).off("child_removed");
        window.unityInstance.SendMessage(_0x7f2929, _0x33fd01, "Success: listener removed");
      } catch (_0x185517) {
        window.unityInstance.SendMessage(_0x7f2929, _0x502f5a, JSON.stringify(_0x185517, Object.getOwnPropertyNames(_0x185517)));
      }
    }
    function _0x20b977(_0x5df31e, _0x2dda0a, _0x5c62a8, _0x2341cb) {
      var _0x434752 = _0x3d5aa0(_0x5df31e);
      var _0x130e0e = _0x3d5aa0(_0x2dda0a);
      var _0x3e63b5 = _0x3d5aa0(_0x5c62a8);
      var _0x3107ae = _0x3d5aa0(_0x2341cb);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x434752 + "/collection/"]();
        window.unityInstance.SendMessage(_0x130e0e, _0x3e63b5, "Success: listener was removed");
      } catch (_0x5f3ae7) {
        window.unityInstance.SendMessage(_0x130e0e, _0x3107ae, JSON.stringify(_0x5f3ae7, Object.getOwnPropertyNames(_0x5f3ae7)));
      }
    }
    function _0x34ee6a(_0x4153dc, _0x3ecb65, _0x32c6b6, _0x329cad, _0x3fcb5f) {
      var _0x24433c = _0x3d5aa0(_0x4153dc);
      var _0x1194fe = _0x3d5aa0(_0x3ecb65);
      var _0x50287b = _0x3d5aa0(_0x32c6b6);
      var _0x233d6a = _0x3d5aa0(_0x329cad);
      var _0x3388bf = _0x3d5aa0(_0x3fcb5f);
      try {
        if (typeof firestorelisteners === "undefined") {
          firestorelisteners = {};
        }
        this.firestorelisteners[_0x24433c + "/" + _0x1194fe]();
        window.unityInstance.SendMessage(_0x50287b, _0x233d6a, "Success: listener was removed");
      } catch (_0xe19072) {
        window.unityInstance.SendMessage(_0x50287b, _0x3388bf, JSON.stringify(_0xe19072, Object.getOwnPropertyNames(_0xe19072)));
      }
    }
    function _0x6f8a6f(_0x128269, _0x1bdab5, _0x9c2d6b, _0x22d68b) {
      var _0x5240c4 = _0x3d5aa0(_0x128269);
      var _0x4f6e75 = _0x3d5aa0(_0x1bdab5);
      var _0x269550 = _0x3d5aa0(_0x9c2d6b);
      var _0x5e67e9 = _0x3d5aa0(_0x22d68b);
      try {
        firebase.database().ref(_0x5240c4).off("value");
        window.unityInstance.SendMessage(_0x4f6e75, _0x269550, "Success: listener removed");
      } catch (_0x2b8ec2) {
        window.unityInstance.SendMessage(_0x4f6e75, _0x5e67e9, JSON.stringify(_0x2b8ec2, Object.getOwnPropertyNames(_0x2b8ec2)));
      }
    }
    function _0x341df0() {
      try {
        window.CrazyGames.SDK.data.syncUnityGameData();
      } catch (_0x1a6764) {
        window.UnitySDK.logError("Error while calling syncUnityGameData:", _0x1a6764);
      }
    }
    function _0x263d58(_0x38396d, _0x4c1c67, _0x24e407, _0x32d308) {
      var _0x4a1edc = _0x3d5aa0(_0x38396d);
      var _0x4201ed = _0x3d5aa0(_0x4c1c67);
      var _0x2a761f = _0x3d5aa0(_0x24e407);
      var _0x45b200 = _0x3d5aa0(_0x32d308);
      try {
        firebase.database().ref(_0x4a1edc).transaction(function (_0x261495) {
          if (typeof _0x261495 === "boolean") {
            return !_0x261495;
          } else {
            return true;
          }
        }).then(function (_0x28193c) {
          window.unityInstance.SendMessage(_0x4201ed, _0x2a761f, "Success: transaction run in " + _0x4a1edc);
        });
      } catch (_0x5d236a) {
        window.unityInstance.SendMessage(_0x4201ed, _0x45b200, JSON.stringify(_0x5d236a, Object.getOwnPropertyNames(_0x5d236a)));
      }
    }
    function _0xc22b2a(_0x55bf41, _0x3c1c49, _0x156840, _0x4b4313, _0x593767, _0x31cb6a) {
      var _0x3e6701 = _0x3d5aa0(_0x55bf41);
      var _0x2c8e88 = _0x3d5aa0(_0x3c1c49);
      var _0x370582 = _0x3d5aa0(_0x156840);
      var _0x504f69 = _0x3d5aa0(_0x4b4313);
      var _0x32d804 = _0x3d5aa0(_0x593767);
      var _0x4f7b44 = _0x3d5aa0(_0x31cb6a);
      try {
        firebase.firestore().collection(_0x3e6701).doc(_0x2c8e88).update(JSON.parse(_0x370582)).then(function () {
          window.unityInstance.SendMessage(_0x504f69, _0x32d804, "Success: document " + _0x2c8e88 + " was updated");
        }).catch(function (_0x1a3f2d) {
          window.unityInstance.SendMessage(_0x504f69, _0x4f7b44, JSON.stringify(_0x1a3f2d, Object.getOwnPropertyNames(_0x1a3f2d)));
        });
      } catch (_0x595054) {
        window.unityInstance.SendMessage(_0x504f69, _0x4f7b44, JSON.stringify(_0x595054, Object.getOwnPropertyNames(_0x595054)));
      }
    }
    function _0x181e9e(_0x555c94, _0x15987c, _0x142505, _0x3df5d8, _0x5375c1) {
      var _0x21a537 = _0x3d5aa0(_0x555c94);
      var _0x38a307 = _0x3d5aa0(_0x15987c);
      var _0x5cc2cb = _0x3d5aa0(_0x142505);
      var _0x2f2730 = _0x3d5aa0(_0x3df5d8);
      var _0x1401ea = _0x3d5aa0(_0x5375c1);
      try {
        firebase.database().ref(_0x21a537).update(JSON.parse(_0x38a307)).then(function (_0x5bd4ec) {
          window.unityInstance.SendMessage(_0x5cc2cb, _0x2f2730, "Success: " + _0x38a307 + " was updated in " + _0x21a537);
        });
      } catch (_0x346e24) {
        window.unityInstance.SendMessage(_0x5cc2cb, _0x1401ea, JSON.stringify(_0x346e24, Object.getOwnPropertyNames(_0x346e24)));
      }
    }
    function _0x177b45(_0xd1a131, _0x53ca59, _0x487fae, _0x2f424f, _0xcec0a7) {
      var _0x495b5c = _0x3d5aa0(_0xd1a131);
      var _0x1cd92f = _0x3d5aa0(_0x53ca59);
      var _0x4b3388 = _0x3d5aa0(_0x487fae);
      var _0x1bc335 = _0x3d5aa0(_0x2f424f);
      var _0x25aca5 = _0x3d5aa0(_0xcec0a7);
      try {
        firebase.storage().ref(_0x495b5c).put(_0x5f2975(_0x1cd92f)).then(function (_0x2b00f2) {
          window.unityInstance.SendMessage(_0x4b3388, _0x1bc335, "Success: data was posted to " + _0x495b5c);
        });
      } catch (_0x5703b7) {
        window.unityInstance.SendMessage(_0x4b3388, _0x25aca5, JSON.stringify(_0x5703b7, Object.getOwnPropertyNames(_0x5703b7)));
      }
      function _0x5f2975(_0x5109c2) {
        var _0x3eb9cd = window.atob(_0x5109c2);
        var _0x5912ea = _0x3eb9cd.length;
        var _0x1558ca = new Uint8Array(_0x5912ea);
        for (var _0x1289e3 = 0; _0x1289e3 < _0x5912ea; _0x1289e3++) {
          _0x1558ca[_0x1289e3] = _0x3eb9cd.charCodeAt(_0x1289e3);
        }
        return _0x1558ca.buffer;
      }
    }
    var _0x25574a = {
      requestInstances: {},
      nextRequestId: 1,
      loglevel: 2,
      SendTextToCSharpSide: function (_0xbff0a5, _0x32cc65, _0x24c13e) {
        const _0x32102c = new TextEncoder();
        const _0x25f08e = _0x32102c.encode(_0x24c13e);
        const _0x1d1e2f = function (_0x464297, _0x13f63c) {
          return _0x731b8d.apply(null, [_0x25574a.onallocbuffer, _0x464297, _0x13f63c]);
        }(_0xbff0a5, _0x25f08e.length);
        _0x59122e.set(_0x25f08e, _0x1d1e2f);
        (function (_0xe5983f, _0x7c99f9, _0x8df070) {
          _0x17e77d.apply(null, [_0x32cc65, _0xe5983f, _0x7c99f9, _0x8df070]);
        })(_0xbff0a5, _0x1d1e2f, _0x25f08e.length);
      },
      GetResponseHeaders: function (_0x5773a5, _0x24d858) {
        if (_0x25574a.loglevel <= 1) {
          console.log("GetResponseHeaders(" + _0x5773a5 + ")");
        }
        var _0x472fec = "";
        if (document && document.cookie) {
          var _0x516239 = document.cookie.split(";");
          for (var _0x1b1b56 = 0; _0x1b1b56 < _0x516239.length; ++_0x1b1b56) {
            const _0xcc831b = _0x516239[_0x1b1b56].trim();
            if (_0xcc831b.length > 0) {
              _0x472fec += "Set-Cookie:" + _0xcc831b + "\n";
            }
          }
        }
        const _0x372fda = _0x25574a.requestInstances[_0x5773a5].getAllResponseHeaders().trim().split(/[\r\n]+/);
        _0x372fda.forEach(_0x5c81f8 => {
          const _0xbb342f = _0x5c81f8.split(": ");
          const _0x1c43bc = _0xbb342f.shift();
          const _0x482bc8 = _0xbb342f.join(": ");
          if (_0x1c43bc !== "content-length") {
            _0x472fec += _0x1c43bc + ":" + _0x482bc8 + "\n";
          }
        });
        _0x25574a.SendTextToCSharpSide(_0x5773a5, _0x24d858, _0x472fec);
      }
    };
    function _0x521218(_0x4832f8) {
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_Abort(" + _0x4832f8 + ")");
      }
      _0x25574a.requestInstances[_0x4832f8].abort();
    }
    function _0x3da137(_0x1b8d70, _0x274733, _0x27c519, _0x1829e1, _0x31f4bf) {
      var _0x1c70d8 = new URL(_0x3d5aa0(_0x274733));
      var _0x5215a4 = _0x3d5aa0(_0x1b8d70);
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_Create (" + _0x25574a.nextRequestId + ", " + _0x5215a4 + ", " + _0x1c70d8.toString() + ", " + _0x31f4bf + ")");
      }
      var _0x517a82 = new XMLHttpRequest();
      if (_0x27c519 && _0x1829e1) {
        var _0x3de0ea = _0x3d5aa0(_0x27c519);
        var _0x4b27ae = _0x3d5aa0(_0x1829e1);
        _0x517a82.withCredentials = true;
        _0x517a82.open(_0x5215a4, _0x1c70d8.toString(), true, _0x3de0ea, _0x4b27ae);
      } else {
        _0x517a82.withCredentials = _0x31f4bf;
        _0x517a82.open(_0x5215a4, _0x1c70d8.toString(), true);
      }
      _0x517a82.responseType = "arraybuffer";
      _0x25574a.requestInstances[_0x25574a.nextRequestId] = _0x517a82;
      return _0x25574a.nextRequestId++;
    }
    function _0x15add3(_0xa88038) {
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_Release(" + _0xa88038 + ")");
      }
      delete _0x25574a.requestInstances[_0xa88038];
    }
    function _0xeb5372(_0xab02cf, _0x20e455, _0x4dc7e0) {
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_Send(" + _0xab02cf + ", " + _0x20e455 + ", " + _0x4dc7e0 + ")");
      }
      var _0x4501cf = _0x25574a.requestInstances[_0xab02cf];
      try {
        if (_0x4dc7e0 > 0) {
          _0x4501cf.send(_0x59122e.subarray(_0x20e455, _0x20e455 + _0x4dc7e0));
        } else {
          _0x4501cf.send();
        }
      } catch (_0xd8814a) {
        if (_0x25574a.loglevel <= 4) {
          console.error("XHR_Send(" + _0xab02cf + "): " + _0xd8814a.name + " : " + _0xd8814a.message);
        }
      }
    }
    function _0x9e2441(_0x2d1b74) {
      _0x25574a.loglevel = _0x2d1b74;
    }
    function _0x1bbe9f(_0x28af10, _0xc85d99, _0x2d3afd) {
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_SetProgressHandler(" + _0x28af10 + ")");
      }
      var _0x16173e = _0x25574a.requestInstances[_0x28af10];
      if (_0x16173e) {
        if (_0xc85d99) {
          _0x16173e.onprogress = function _0x534796(_0x5db967) {
            if (_0x25574a.loglevel <= 1) {
              console.log("XHR_SetProgressHandler download(" + _0x28af10 + ", " + _0x5db967.loaded + ", " + _0x5db967.total + ")");
            }
            if (_0x5db967.lengthComputable) {
              (function (_0x8d45ca, _0x20584e, _0x5de6ed) {
                _0x17e77d.apply(null, [_0xc85d99, _0x8d45ca, _0x20584e, _0x5de6ed]);
              })(_0x28af10, _0x5db967.loaded, _0x5db967.total);
            }
          };
        }
        if (_0x2d3afd) {
          _0x16173e.upload.addEventListener("progress", function _0x38a089(_0x262abb) {
            if (_0x25574a.loglevel <= 1) {
              console.log("XHR_SetProgressHandler upload(" + _0x28af10 + ", " + _0x262abb.loaded + ", " + _0x262abb.total + ")");
            }
            if (_0x262abb.lengthComputable) {
              (function (_0x5d0101, _0xbb5289, _0x17bcf3) {
                _0x17e77d.apply(null, [_0x2d3afd, _0x5d0101, _0xbb5289, _0x17bcf3]);
              })(_0x28af10, _0x262abb.loaded, _0x262abb.total);
            }
          }, true);
        }
      }
    }
    function _0x459ad5(_0x3bb4b3, _0x319d5e, _0x277968) {
      var _0x313424 = _0x3d5aa0(_0x319d5e);
      var _0x277459 = _0x3d5aa0(_0x277968);
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_SetRequestHeader(" + _0x313424 + ", " + _0x277459 + ")");
      }
      if (_0x313424 != "Cookie") {
        _0x25574a.requestInstances[_0x3bb4b3].setRequestHeader(_0x313424, _0x277459);
      } else {
        var _0x2f2c37 = _0x277459.split(";");
        for (var _0x5cb4fb = 0; _0x5cb4fb < _0x2f2c37.length; _0x5cb4fb++) {
          document.cookie = _0x2f2c37[_0x5cb4fb];
        }
      }
    }
    function _0x45b521(_0x4d5858, _0x32afd1, _0x11f1bf, _0x53afd7, _0x5d17e5, _0x83921d, _0x6eb250) {
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_SetResponseHandler(" + _0x4d5858 + ")");
      }
      _0x25574a.onallocbuffer = _0x6eb250;
      var _0x11ca6e = _0x25574a.requestInstances[_0x4d5858];
      _0x11ca6e.onreadystatechange = _0x13f6b1 => {
        if (_0x25574a.loglevel <= 1) {
          console.log(_0x4d5858 + " onreadystatechange(" + _0x11ca6e.readyState + ")");
        }
        switch (_0x11ca6e.readyState) {
          case XMLHttpRequest.UNSENT:
            break;
          case XMLHttpRequest.OPENED:
            break;
          case XMLHttpRequest.HEADERS_RECEIVED:
            {
              _0x25574a.SendTextToCSharpSide(_0x4d5858, _0x83921d, "HTTP/1.1 " + _0x11ca6e.status + " " + _0x11ca6e.statusText + "\n");
              _0x25574a.GetResponseHeaders(_0x4d5858, _0x83921d);
              break;
            }
          case XMLHttpRequest.LOADING:
            break;
          case XMLHttpRequest.DONE:
            break;
        }
      };
      _0x11ca6e.onloadstart = _0x4ab866 => {
        if (_0x25574a.loglevel <= 1) {
          console.log(_0x4d5858 + " onloadstart: " + _0x4ab866);
        }
      };
      _0x11ca6e.onload = function _0x354226(_0x4f73bd) {
        if (_0x25574a.loglevel <= 1) {
          console.log(_0x4d5858 + " onload(" + _0x11ca6e.status + ", " + _0x11ca6e.statusText + ")");
        }
        if (_0x32afd1) {
          var _0x1a8b6e = 0;
          var _0x5b384f = 0;
          if (_0x11ca6e.response) {
            var _0x3bf1b1 = _0x11ca6e.response;
            _0x1a8b6e = _0x3bf1b1.byteLength;
            _0x25574a.SendTextToCSharpSide(_0x4d5858, _0x83921d, "content-length:" + _0x1a8b6e + "\n\n");
            _0x5b384f = function (_0x52ba0b, _0x394b53) {
              return _0x731b8d.apply(null, [_0x6eb250, _0x52ba0b, _0x394b53]);
            }(_0x4d5858, _0x1a8b6e);
            var _0x5743da = new Uint8Array(_0x3bf1b1);
            var _0x56f5d9 = _0x59122e.subarray(_0x5b384f, _0x5b384f + _0x1a8b6e);
            _0x56f5d9.set(_0x5743da);
          } else {
            _0x25574a.SendTextToCSharpSide(_0x4d5858, _0x83921d, "content-length:0\n\n");
          }
          (function (_0x423d3b, _0x49d67d, _0x4f4696) {
            _0x17e77d.apply(null, [_0x32afd1, _0x423d3b, _0x49d67d, _0x4f4696]);
          })(_0x4d5858, _0x5b384f, _0x1a8b6e);
        }
      };
      if (_0x11f1bf) {
        _0x11ca6e.onerror = function _0x15db7c(_0x5c908c) {
          function _0x154977(_0x1de302) {
            var _0x38758b = _0xa3918a(_0x1de302) + 1;
            var _0x6d1985 = _0x302e44(_0x38758b);
            _0x3ea981(_0x1de302, _0x59122e, _0x6d1985, _0x38758b);
            (function (_0xc8b84a, _0xec80c9) {
              _0x34cbb3.apply(null, [_0x11f1bf, _0xc8b84a, _0xec80c9]);
            })(_0x4d5858, _0x6d1985);
            _0x1e689c(_0x6d1985);
          }
          if (_0x5c908c.error) {
            _0x154977(_0x5c908c.error);
          } else {
            _0x154977("Unknown Error! Maybe a CORS porblem?");
          }
        };
      }
      if (_0x53afd7) {
        _0x11ca6e.ontimeout = function _0x25bd23(_0x3c2e45) {
          (function (_0x29943e) {
            _0x529933.apply(null, [_0x53afd7, _0x29943e]);
          })(_0x4d5858);
        };
      }
      if (_0x5d17e5) {
        _0x11ca6e.onabort = function _0x433de0(_0x4966fe) {
          (function (_0x594f8f) {
            _0x529933.apply(null, [_0x5d17e5, _0x594f8f]);
          })(_0x4d5858);
        };
      }
    }
    function _0x30c087(_0x23bfd0, _0x386260) {
      if (_0x25574a.loglevel <= 1) {
        console.log("XHR_SetTimeout(" + _0x23bfd0 + ", " + _0x386260 + ")");
      }
      _0x25574a.requestInstances[_0x23bfd0].timeout = _0x386260;
    }
    function _0x183806(_0x97ecc5) {
      return _0x302e44(_0x97ecc5 + 16) + 16;
    }
    function _0x158dba(_0x472b1b) {
      this.excPtr = _0x472b1b;
      this.ptr = _0x472b1b - 16;
      this.set_type = function (_0x338ab9) {
        _0x576263[this.ptr + 4 >> 2] = _0x338ab9;
      };
      this.get_type = function () {
        return _0x576263[this.ptr + 4 >> 2];
      };
      this.set_destructor = function (_0x428749) {
        _0x576263[this.ptr + 8 >> 2] = _0x428749;
      };
      this.get_destructor = function () {
        return _0x576263[this.ptr + 8 >> 2];
      };
      this.set_refcount = function (_0x947924) {
        _0x576263[this.ptr >> 2] = _0x947924;
      };
      this.set_caught = function (_0x1d5ee4) {
        _0x1d5ee4 = _0x1d5ee4 ? 1 : 0;
        _0xe1b6fc[this.ptr + 12 >> 0] = _0x1d5ee4;
      };
      this.get_caught = function () {
        return _0xe1b6fc[this.ptr + 12 >> 0] != 0;
      };
      this.set_rethrown = function (_0x20a750) {
        _0x20a750 = _0x20a750 ? 1 : 0;
        _0xe1b6fc[this.ptr + 13 >> 0] = _0x20a750;
      };
      this.get_rethrown = function () {
        return _0xe1b6fc[this.ptr + 13 >> 0] != 0;
      };
      this.init = function (_0x516088, _0x128938) {
        this.set_type(_0x516088);
        this.set_destructor(_0x128938);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function () {
        var _0x24417b = _0x576263[this.ptr >> 2];
        _0x576263[this.ptr >> 2] = _0x24417b + 1;
      };
      this.release_ref = function () {
        var _0x59133d = _0x576263[this.ptr >> 2];
        _0x576263[this.ptr >> 2] = _0x59133d - 1;
        return _0x59133d === 1;
      };
    }
    function _0x348300(_0x3480c9) {
      this.free = function () {
        _0x1e689c(this.ptr);
        this.ptr = 0;
      };
      this.set_base_ptr = function (_0xd48c4f) {
        _0x576263[this.ptr >> 2] = _0xd48c4f;
      };
      this.get_base_ptr = function () {
        return _0x576263[this.ptr >> 2];
      };
      this.set_adjusted_ptr = function (_0x498c2b) {
        _0x576263[this.ptr + 4 >> 2] = _0x498c2b;
      };
      this.get_adjusted_ptr_addr = function () {
        return this.ptr + 4;
      };
      this.get_adjusted_ptr = function () {
        return _0x576263[this.ptr + 4 >> 2];
      };
      this.get_exception_ptr = function () {
        var _0x4418b1 = _0x2f7aed(this.get_exception_info().get_type());
        if (_0x4418b1) {
          return _0x576263[this.get_base_ptr() >> 2];
        }
        var _0x25f79f = this.get_adjusted_ptr();
        if (_0x25f79f !== 0) {
          return _0x25f79f;
        }
        return this.get_base_ptr();
      };
      this.get_exception_info = function () {
        return new _0x158dba(this.get_base_ptr());
      };
      if (_0x3480c9 === undefined) {
        this.ptr = _0x302e44(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = _0x3480c9;
      }
    }
    var _0xe299e4 = [];
    function _0x5113f0(_0x5b591b) {
      _0x5b591b.add_ref();
    }
    var _0x18f6f4 = 0;
    function _0x52ad8c(_0x4fdacd) {
      var _0x371139 = new _0x348300(_0x4fdacd);
      var _0x352a64 = _0x371139.get_exception_info();
      if (!_0x352a64.get_caught()) {
        _0x352a64.set_caught(true);
        _0x18f6f4--;
      }
      _0x352a64.set_rethrown(false);
      _0xe299e4.push(_0x371139);
      _0x5113f0(_0x352a64);
      return _0x371139.get_exception_ptr();
    }
    var _0x2463e1 = 0;
    function _0xecb4a5(_0x396f3a) {
      return _0x1e689c(new _0x158dba(_0x396f3a).ptr);
    }
    function _0x30175f(_0x3ff590) {
      if (_0x3ff590.release_ref() && !_0x3ff590.get_rethrown()) {
        var _0x33a690 = _0x3ff590.get_destructor();
        if (_0x33a690) {
          (function (_0x41ae87) {
            return _0x399e12.apply(null, [_0x33a690, _0x41ae87]);
          })(_0x3ff590.excPtr);
        }
        _0xecb4a5(_0x3ff590.excPtr);
      }
    }
    function _0x9119dd() {
      _0x4ceae9(0);
      var _0x1263e9 = _0xe299e4.pop();
      _0x30175f(_0x1263e9.get_exception_info());
      _0x1263e9.free();
      _0x2463e1 = 0;
    }
    function _0x376add(_0x40ced6) {
      var _0x12c186 = new _0x348300(_0x40ced6);
      var _0x5a18da = _0x12c186.get_base_ptr();
      if (!_0x2463e1) {
        _0x2463e1 = _0x5a18da;
      }
      _0x12c186.free();
      throw _0x5a18da;
    }
    function _0x32e5db() {
      var _0x24f4b8 = _0x2463e1;
      if (!_0x24f4b8) {
        _0x1b256f(0);
        return 0;
      }
      var _0x333755 = new _0x158dba(_0x24f4b8);
      var _0x55ca48 = _0x333755.get_type();
      var _0x2ac369 = new _0x348300();
      _0x2ac369.set_base_ptr(_0x24f4b8);
      _0x2ac369.set_adjusted_ptr(_0x24f4b8);
      if (!_0x55ca48) {
        _0x1b256f(0);
        return _0x2ac369.ptr | 0;
      }
      var _0x3e52e8 = Array.prototype.slice.call(arguments);
      for (var _0x335a02 = 0; _0x335a02 < _0x3e52e8.length; _0x335a02++) {
        var _0x332305 = _0x3e52e8[_0x335a02];
        if (_0x332305 === 0 || _0x332305 === _0x55ca48) {
          break;
        }
        if (_0x3c88da(_0x332305, _0x55ca48, _0x2ac369.get_adjusted_ptr_addr())) {
          _0x1b256f(_0x332305);
          return _0x2ac369.ptr | 0;
        }
      }
      _0x1b256f(_0x55ca48);
      return _0x2ac369.ptr | 0;
    }
    function _0x5a87fd() {
      var _0x5e3580 = _0x2463e1;
      if (!_0x5e3580) {
        _0x1b256f(0);
        return 0;
      }
      var _0x5cf57b = new _0x158dba(_0x5e3580);
      var _0x5b0f88 = _0x5cf57b.get_type();
      var _0xbe8664 = new _0x348300();
      _0xbe8664.set_base_ptr(_0x5e3580);
      _0xbe8664.set_adjusted_ptr(_0x5e3580);
      if (!_0x5b0f88) {
        _0x1b256f(0);
        return _0xbe8664.ptr | 0;
      }
      var _0x2b6e41 = Array.prototype.slice.call(arguments);
      for (var _0x2fe421 = 0; _0x2fe421 < _0x2b6e41.length; _0x2fe421++) {
        var _0x288662 = _0x2b6e41[_0x2fe421];
        if (_0x288662 === 0 || _0x288662 === _0x5b0f88) {
          break;
        }
        if (_0x3c88da(_0x288662, _0x5b0f88, _0xbe8664.get_adjusted_ptr_addr())) {
          _0x1b256f(_0x288662);
          return _0xbe8664.ptr | 0;
        }
      }
      _0x1b256f(_0x5b0f88);
      return _0xbe8664.ptr | 0;
    }
    function _0x163fa4() {
      var _0x576c7f = _0x2463e1;
      if (!_0x576c7f) {
        _0x1b256f(0);
        return 0;
      }
      var _0x18bd6f = new _0x158dba(_0x576c7f);
      var _0x436538 = _0x18bd6f.get_type();
      var _0x1b3178 = new _0x348300();
      _0x1b3178.set_base_ptr(_0x576c7f);
      _0x1b3178.set_adjusted_ptr(_0x576c7f);
      if (!_0x436538) {
        _0x1b256f(0);
        return _0x1b3178.ptr | 0;
      }
      var _0x965434 = Array.prototype.slice.call(arguments);
      for (var _0x201b0c = 0; _0x201b0c < _0x965434.length; _0x201b0c++) {
        var _0x98bfd4 = _0x965434[_0x201b0c];
        if (_0x98bfd4 === 0 || _0x98bfd4 === _0x436538) {
          break;
        }
        if (_0x3c88da(_0x98bfd4, _0x436538, _0x1b3178.get_adjusted_ptr_addr())) {
          _0x1b256f(_0x98bfd4);
          return _0x1b3178.ptr | 0;
        }
      }
      _0x1b256f(_0x436538);
      return _0x1b3178.ptr | 0;
    }
    function _0x46ea2b() {
      var _0x506cdd = _0xe299e4.pop();
      if (!_0x506cdd) {
        _0x2db121("no exception to throw");
      }
      var _0xce9b9d = _0x506cdd.get_exception_info();
      var _0x595637 = _0x506cdd.get_base_ptr();
      if (!_0xce9b9d.get_rethrown()) {
        _0xe299e4.push(_0x506cdd);
        _0xce9b9d.set_rethrown(true);
        _0xce9b9d.set_caught(false);
        _0x18f6f4++;
      } else {
        _0x506cdd.free();
      }
      _0x2463e1 = _0x595637;
      throw _0x595637;
    }
    function _0x391141(_0x2760b5, _0x963b5b, _0x44632b) {
      var _0x452c29 = new _0x158dba(_0x2760b5);
      _0x452c29.init(_0x963b5b, _0x44632b);
      _0x2463e1 = _0x2760b5;
      _0x18f6f4++;
      throw _0x2760b5;
    }
    var _0x369aa8 = {
      splitPath: function (_0x1331fe) {
        var _0x3b9e36 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x3b9e36.exec(_0x1331fe).slice(1);
      },
      normalizeArray: function (_0x2f9938, _0x23b963) {
        var _0xbbdbef = 0;
        for (var _0x1297be = _0x2f9938.length - 1; _0x1297be >= 0; _0x1297be--) {
          var _0x1884b2 = _0x2f9938[_0x1297be];
          if (_0x1884b2 === ".") {
            _0x2f9938.splice(_0x1297be, 1);
          } else if (_0x1884b2 === "..") {
            _0x2f9938.splice(_0x1297be, 1);
            _0xbbdbef++;
          } else if (_0xbbdbef) {
            _0x2f9938.splice(_0x1297be, 1);
            _0xbbdbef--;
          }
        }
        if (_0x23b963) {
          for (; _0xbbdbef; _0xbbdbef--) {
            _0x2f9938.unshift("..");
          }
        }
        return _0x2f9938;
      },
      normalize: function (_0xade90) {
        var _0xf1eb20 = _0xade90.charAt(0) === "/";
        var _0x3f0800 = _0xade90.substr(-1) === "/";
        _0xade90 = _0x369aa8.normalizeArray(_0xade90.split("/").filter(function (_0x4723a7) {
          return !!_0x4723a7;
        }), !_0xf1eb20).join("/");
        if (!_0xade90 && !_0xf1eb20) {
          _0xade90 = ".";
        }
        if (_0xade90 && _0x3f0800) {
          _0xade90 += "/";
        }
        return (_0xf1eb20 ? "/" : "") + _0xade90;
      },
      dirname: function (_0x1a4000) {
        var _0x677b24 = _0x369aa8.splitPath(_0x1a4000);
        var _0x4ebd4a = _0x677b24[0];
        var _0x5ac472 = _0x677b24[1];
        if (!_0x4ebd4a && !_0x5ac472) {
          return ".";
        }
        _0x5ac472 &&= _0x5ac472.substr(0, _0x5ac472.length - 1);
        return _0x4ebd4a + _0x5ac472;
      },
      basename: function (_0x1c8dd2) {
        if (_0x1c8dd2 === "/") {
          return "/";
        }
        _0x1c8dd2 = _0x369aa8.normalize(_0x1c8dd2);
        _0x1c8dd2 = _0x1c8dd2.replace(/\/$/, "");
        var _0x10b6e3 = _0x1c8dd2.lastIndexOf("/");
        if (_0x10b6e3 === -1) {
          return _0x1c8dd2;
        }
        return _0x1c8dd2.substr(_0x10b6e3 + 1);
      },
      extname: function (_0x367de9) {
        return _0x369aa8.splitPath(_0x367de9)[3];
      },
      join: function () {
        var _0x9f39b4 = Array.prototype.slice.call(arguments, 0);
        return _0x369aa8.normalize(_0x9f39b4.join("/"));
      },
      join2: function (_0x3955a0, _0x3ea8f0) {
        return _0x369aa8.normalize(_0x3955a0 + "/" + _0x3ea8f0);
      }
    };
    function _0x4bdf86() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x4c6256 = new Uint8Array(1);
        return function () {
          crypto.getRandomValues(_0x4c6256);
          return _0x4c6256[0];
        };
      } else if (_0x232f5c) {
        try {
          var _0x332313 = require("crypto");
          return function () {
            return _0x332313.randomBytes(1)[0];
          };
        } catch (_0x476efe) {}
      }
      return function () {
        _0x2db121("randomDevice");
      };
    }
    var _0x59d0d7 = {
      resolve: function () {
        var _0x5b41a3 = "";
        var _0x3241a1 = false;
        for (var _0x260a45 = arguments.length - 1; _0x260a45 >= -1 && !_0x3241a1; _0x260a45--) {
          var _0x1edcea = _0x260a45 >= 0 ? arguments[_0x260a45] : _0x5292fc.cwd();
          if (typeof _0x1edcea != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!_0x1edcea) {
            return "";
          }
          _0x5b41a3 = _0x1edcea + "/" + _0x5b41a3;
          _0x3241a1 = _0x1edcea.charAt(0) === "/";
        }
        _0x5b41a3 = _0x369aa8.normalizeArray(_0x5b41a3.split("/").filter(function (_0x4fa0a8) {
          return !!_0x4fa0a8;
        }), !_0x3241a1).join("/");
        return (_0x3241a1 ? "/" : "") + _0x5b41a3 || ".";
      },
      relative: function (_0x17abbd, _0x364f4e) {
        _0x17abbd = _0x59d0d7.resolve(_0x17abbd).substr(1);
        _0x364f4e = _0x59d0d7.resolve(_0x364f4e).substr(1);
        function _0x5ed588(_0x25abd5) {
          var _0x47e11e = 0;
          for (; _0x47e11e < _0x25abd5.length; _0x47e11e++) {
            if (_0x25abd5[_0x47e11e] !== "") {
              break;
            }
          }
          var _0xf958a8 = _0x25abd5.length - 1;
          for (; _0xf958a8 >= 0; _0xf958a8--) {
            if (_0x25abd5[_0xf958a8] !== "") {
              break;
            }
          }
          if (_0x47e11e > _0xf958a8) {
            return [];
          }
          return _0x25abd5.slice(_0x47e11e, _0xf958a8 - _0x47e11e + 1);
        }
        var _0x371d6e = _0x5ed588(_0x17abbd.split("/"));
        var _0x2934ba = _0x5ed588(_0x364f4e.split("/"));
        var _0x1ec527 = Math.min(_0x371d6e.length, _0x2934ba.length);
        var _0xefd751 = _0x1ec527;
        for (var _0x37954d = 0; _0x37954d < _0x1ec527; _0x37954d++) {
          if (_0x371d6e[_0x37954d] !== _0x2934ba[_0x37954d]) {
            _0xefd751 = _0x37954d;
            break;
          }
        }
        var _0x3dde73 = [];
        for (var _0x37954d = _0xefd751; _0x37954d < _0x371d6e.length; _0x37954d++) {
          _0x3dde73.push("..");
        }
        _0x3dde73 = _0x3dde73.concat(_0x2934ba.slice(_0xefd751));
        return _0x3dde73.join("/");
      }
    };
    var _0x496db8 = {
      ttys: [],
      init: function () {},
      shutdown: function () {},
      register: function (_0x13e8e0, _0x3afabf) {
        _0x496db8.ttys[_0x13e8e0] = {
          input: [],
          output: [],
          ops: _0x3afabf
        };
        _0x5292fc.registerDevice(_0x13e8e0, _0x496db8.stream_ops);
      },
      stream_ops: {
        open: function (_0x274398) {
          var _0x10800b = _0x496db8.ttys[_0x274398.node.rdev];
          if (!_0x10800b) {
            throw new _0x5292fc.ErrnoError(43);
          }
          _0x274398.tty = _0x10800b;
          _0x274398.seekable = false;
        },
        close: function (_0x188129) {
          _0x188129.tty.ops.flush(_0x188129.tty);
        },
        flush: function (_0x5c72ea) {
          _0x5c72ea.tty.ops.flush(_0x5c72ea.tty);
        },
        read: function (_0x5c0a53, _0x32f1f8, _0xc548dc, _0x1a516e, _0x23e550) {
          if (!_0x5c0a53.tty || !_0x5c0a53.tty.ops.get_char) {
            throw new _0x5292fc.ErrnoError(60);
          }
          var _0x48e178 = 0;
          for (var _0x3f31d0 = 0; _0x3f31d0 < _0x1a516e; _0x3f31d0++) {
            var _0x2a6c5e;
            try {
              _0x2a6c5e = _0x5c0a53.tty.ops.get_char(_0x5c0a53.tty);
            } catch (_0xdba964) {
              throw new _0x5292fc.ErrnoError(29);
            }
            if (_0x2a6c5e === undefined && _0x48e178 === 0) {
              throw new _0x5292fc.ErrnoError(6);
            }
            if (_0x2a6c5e === null || _0x2a6c5e === undefined) {
              break;
            }
            _0x48e178++;
            _0x32f1f8[_0xc548dc + _0x3f31d0] = _0x2a6c5e;
          }
          if (_0x48e178) {
            _0x5c0a53.node.timestamp = Date.now();
          }
          return _0x48e178;
        },
        write: function (_0x415c11, _0x3a9cde, _0x313859, _0x517ee7, _0xecfa56) {
          if (!_0x415c11.tty || !_0x415c11.tty.ops.put_char) {
            throw new _0x5292fc.ErrnoError(60);
          }
          try {
            for (var _0xbdcb54 = 0; _0xbdcb54 < _0x517ee7; _0xbdcb54++) {
              _0x415c11.tty.ops.put_char(_0x415c11.tty, _0x3a9cde[_0x313859 + _0xbdcb54]);
            }
          } catch (_0x2fe2ac) {
            throw new _0x5292fc.ErrnoError(29);
          }
          if (_0x517ee7) {
            _0x415c11.node.timestamp = Date.now();
          }
          return _0xbdcb54;
        }
      },
      default_tty_ops: {
        get_char: function (_0x306903) {
          if (!_0x306903.input.length) {
            var _0x3a9565 = null;
            if (_0x232f5c) {
              var _0x2f4838 = 256;
              var _0x3567df = Buffer.alloc(_0x2f4838);
              var _0x99d535 = 0;
              try {
                _0x99d535 = _0x3cfdc5.readSync(process.stdin.fd, _0x3567df, 0, _0x2f4838, -1);
              } catch (_0x453968) {
                if (_0x453968.toString().includes("EOF")) {
                  _0x99d535 = 0;
                } else {
                  throw _0x453968;
                }
              }
              if (_0x99d535 > 0) {
                _0x3a9565 = _0x3567df.slice(0, _0x99d535).toString("utf-8");
              } else {
                _0x3a9565 = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              _0x3a9565 = window.prompt("Input: ");
              if (_0x3a9565 !== null) {
                _0x3a9565 += "\n";
              }
            } else if (typeof readline == "function") {
              _0x3a9565 = readline();
              if (_0x3a9565 !== null) {
                _0x3a9565 += "\n";
              }
            }
            if (!_0x3a9565) {
              return null;
            }
            _0x306903.input = _0x198eb8(_0x3a9565, true);
          }
          return _0x306903.input.shift();
        },
        put_char: function (_0xff2df3, _0x8d0b4) {
          if (_0x8d0b4 === null || _0x8d0b4 === 10) {
            _0x329315(_0x29c7fe(_0xff2df3.output, 0));
            _0xff2df3.output = [];
          } else if (_0x8d0b4 != 0) {
            _0xff2df3.output.push(_0x8d0b4);
          }
        },
        flush: function (_0x3c7d4f) {
          if (_0x3c7d4f.output && _0x3c7d4f.output.length > 0) {
            _0x329315(_0x29c7fe(_0x3c7d4f.output, 0));
            _0x3c7d4f.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function (_0x153e1c, _0x205610) {
          if (_0x205610 === null || _0x205610 === 10) {
            _0x2e37f2(_0x29c7fe(_0x153e1c.output, 0));
            _0x153e1c.output = [];
          } else if (_0x205610 != 0) {
            _0x153e1c.output.push(_0x205610);
          }
        },
        flush: function (_0x5c17d8) {
          if (_0x5c17d8.output && _0x5c17d8.output.length > 0) {
            _0x2e37f2(_0x29c7fe(_0x5c17d8.output, 0));
            _0x5c17d8.output = [];
          }
        }
      }
    };
    function _0xf74918(_0x1dab76, _0x39cdf8) {
      _0x59122e.fill(0, _0x1dab76, _0x1dab76 + _0x39cdf8);
    }
    function _0x2cbff2(_0x12aa33, _0x886361) {
      return Math.ceil(_0x12aa33 / _0x886361) * _0x886361;
    }
    function _0x4cbb94(_0x943243) {
      _0x943243 = _0x2cbff2(_0x943243, 65536);
      var _0x140eae = _0x4ed481(65536, _0x943243);
      if (!_0x140eae) {
        return 0;
      }
      _0xf74918(_0x140eae, _0x943243);
      return _0x140eae;
    }
    var _0x30c139 = {
      ops_table: null,
      mount: function (_0x2130ae) {
        return _0x30c139.createNode(null, "/", 16895, 0);
      },
      createNode: function (_0x169fac, _0x328820, _0x40e7b2, _0x4b62f2) {
        if (_0x5292fc.isBlkdev(_0x40e7b2) || _0x5292fc.isFIFO(_0x40e7b2)) {
          throw new _0x5292fc.ErrnoError(63);
        }
        if (!_0x30c139.ops_table) {
          _0x30c139.ops_table = {
            dir: {
              node: {
                getattr: _0x30c139.node_ops.getattr,
                setattr: _0x30c139.node_ops.setattr,
                lookup: _0x30c139.node_ops.lookup,
                mknod: _0x30c139.node_ops.mknod,
                rename: _0x30c139.node_ops.rename,
                unlink: _0x30c139.node_ops.unlink,
                rmdir: _0x30c139.node_ops.rmdir,
                readdir: _0x30c139.node_ops.readdir,
                symlink: _0x30c139.node_ops.symlink
              },
              stream: {
                llseek: _0x30c139.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: _0x30c139.node_ops.getattr,
                setattr: _0x30c139.node_ops.setattr
              },
              stream: {
                llseek: _0x30c139.stream_ops.llseek,
                read: _0x30c139.stream_ops.read,
                write: _0x30c139.stream_ops.write,
                allocate: _0x30c139.stream_ops.allocate,
                mmap: _0x30c139.stream_ops.mmap,
                msync: _0x30c139.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: _0x30c139.node_ops.getattr,
                setattr: _0x30c139.node_ops.setattr,
                readlink: _0x30c139.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: _0x30c139.node_ops.getattr,
                setattr: _0x30c139.node_ops.setattr
              },
              stream: _0x5292fc.chrdev_stream_ops
            }
          };
        }
        var _0x513c29 = _0x5292fc.createNode(_0x169fac, _0x328820, _0x40e7b2, _0x4b62f2);
        if (_0x5292fc.isDir(_0x513c29.mode)) {
          _0x513c29.node_ops = _0x30c139.ops_table.dir.node;
          _0x513c29.stream_ops = _0x30c139.ops_table.dir.stream;
          _0x513c29.contents = {};
        } else if (_0x5292fc.isFile(_0x513c29.mode)) {
          _0x513c29.node_ops = _0x30c139.ops_table.file.node;
          _0x513c29.stream_ops = _0x30c139.ops_table.file.stream;
          _0x513c29.usedBytes = 0;
          _0x513c29.contents = null;
        } else if (_0x5292fc.isLink(_0x513c29.mode)) {
          _0x513c29.node_ops = _0x30c139.ops_table.link.node;
          _0x513c29.stream_ops = _0x30c139.ops_table.link.stream;
        } else if (_0x5292fc.isChrdev(_0x513c29.mode)) {
          _0x513c29.node_ops = _0x30c139.ops_table.chrdev.node;
          _0x513c29.stream_ops = _0x30c139.ops_table.chrdev.stream;
        }
        _0x513c29.timestamp = Date.now();
        if (_0x169fac) {
          _0x169fac.contents[_0x328820] = _0x513c29;
          _0x169fac.timestamp = _0x513c29.timestamp;
        }
        return _0x513c29;
      },
      getFileDataAsTypedArray: function (_0x232eb2) {
        if (!_0x232eb2.contents) {
          return new Uint8Array(0);
        }
        if (_0x232eb2.contents.subarray) {
          return _0x232eb2.contents.subarray(0, _0x232eb2.usedBytes);
        }
        return new Uint8Array(_0x232eb2.contents);
      },
      expandFileStorage: function (_0x33468d, _0x33fd47) {
        var _0xe588f0 = _0x33468d.contents ? _0x33468d.contents.length : 0;
        if (_0xe588f0 >= _0x33fd47) {
          return;
        }
        var _0xbaf6c9 = 1048576;
        _0x33fd47 = Math.max(_0x33fd47, _0xe588f0 * (_0xe588f0 < _0xbaf6c9 ? 2 : 1.125) >>> 0);
        if (_0xe588f0 != 0) {
          _0x33fd47 = Math.max(_0x33fd47, 256);
        }
        var _0xa6f03b = _0x33468d.contents;
        _0x33468d.contents = new Uint8Array(_0x33fd47);
        if (_0x33468d.usedBytes > 0) {
          _0x33468d.contents.set(_0xa6f03b.subarray(0, _0x33468d.usedBytes), 0);
        }
      },
      resizeFileStorage: function (_0x56c0bf, _0x25be41) {
        if (_0x56c0bf.usedBytes == _0x25be41) {
          return;
        }
        if (_0x25be41 == 0) {
          _0x56c0bf.contents = null;
          _0x56c0bf.usedBytes = 0;
        } else {
          var _0xc8650b = _0x56c0bf.contents;
          _0x56c0bf.contents = new Uint8Array(_0x25be41);
          if (_0xc8650b) {
            _0x56c0bf.contents.set(_0xc8650b.subarray(0, Math.min(_0x25be41, _0x56c0bf.usedBytes)));
          }
          _0x56c0bf.usedBytes = _0x25be41;
        }
      },
      node_ops: {
        getattr: function (_0xd0eddc) {
          var _0x33e2d5 = {};
          _0x33e2d5.dev = _0x5292fc.isChrdev(_0xd0eddc.mode) ? _0xd0eddc.id : 1;
          _0x33e2d5.ino = _0xd0eddc.id;
          _0x33e2d5.mode = _0xd0eddc.mode;
          _0x33e2d5.nlink = 1;
          _0x33e2d5.uid = 0;
          _0x33e2d5.gid = 0;
          _0x33e2d5.rdev = _0xd0eddc.rdev;
          if (_0x5292fc.isDir(_0xd0eddc.mode)) {
            _0x33e2d5.size = 4096;
          } else if (_0x5292fc.isFile(_0xd0eddc.mode)) {
            _0x33e2d5.size = _0xd0eddc.usedBytes;
          } else if (_0x5292fc.isLink(_0xd0eddc.mode)) {
            _0x33e2d5.size = _0xd0eddc.link.length;
          } else {
            _0x33e2d5.size = 0;
          }
          _0x33e2d5.atime = new Date(_0xd0eddc.timestamp);
          _0x33e2d5.mtime = new Date(_0xd0eddc.timestamp);
          _0x33e2d5.ctime = new Date(_0xd0eddc.timestamp);
          _0x33e2d5.blksize = 4096;
          _0x33e2d5.blocks = Math.ceil(_0x33e2d5.size / _0x33e2d5.blksize);
          return _0x33e2d5;
        },
        setattr: function (_0x452b75, _0x5ec02a) {
          if (_0x5ec02a.mode !== undefined) {
            _0x452b75.mode = _0x5ec02a.mode;
          }
          if (_0x5ec02a.timestamp !== undefined) {
            _0x452b75.timestamp = _0x5ec02a.timestamp;
          }
          if (_0x5ec02a.size !== undefined) {
            _0x30c139.resizeFileStorage(_0x452b75, _0x5ec02a.size);
          }
        },
        lookup: function (_0x17c411, _0x5cd9a0) {
          throw _0x5292fc.genericErrors[44];
        },
        mknod: function (_0x5045ae, _0x34ff5d, _0xd30f03, _0x4156bd) {
          return _0x30c139.createNode(_0x5045ae, _0x34ff5d, _0xd30f03, _0x4156bd);
        },
        rename: function (_0x5cb583, _0xe3febf, _0x339005) {
          if (_0x5292fc.isDir(_0x5cb583.mode)) {
            var _0x57b428;
            try {
              _0x57b428 = _0x5292fc.lookupNode(_0xe3febf, _0x339005);
            } catch (_0x23b88f) {}
            if (_0x57b428) {
              for (var _0x38d74b in _0x57b428.contents) {
                throw new _0x5292fc.ErrnoError(55);
              }
            }
          }
          delete _0x5cb583.parent.contents[_0x5cb583.name];
          _0x5cb583.parent.timestamp = Date.now();
          _0x5cb583.name = _0x339005;
          _0xe3febf.contents[_0x339005] = _0x5cb583;
          _0xe3febf.timestamp = _0x5cb583.parent.timestamp;
          _0x5cb583.parent = _0xe3febf;
        },
        unlink: function (_0x2f8f35, _0x30fe4f) {
          delete _0x2f8f35.contents[_0x30fe4f];
          _0x2f8f35.timestamp = Date.now();
        },
        rmdir: function (_0x2c18a5, _0x173e57) {
          var _0x14bfcc = _0x5292fc.lookupNode(_0x2c18a5, _0x173e57);
          for (var _0x457afd in _0x14bfcc.contents) {
            throw new _0x5292fc.ErrnoError(55);
          }
          delete _0x2c18a5.contents[_0x173e57];
          _0x2c18a5.timestamp = Date.now();
        },
        readdir: function (_0x3bb140) {
          var _0xc2fb50 = [".", ".."];
          for (var _0x4fd31e in _0x3bb140.contents) {
            if (!_0x3bb140.contents.hasOwnProperty(_0x4fd31e)) {
              continue;
            }
            _0xc2fb50.push(_0x4fd31e);
          }
          return _0xc2fb50;
        },
        symlink: function (_0x322a21, _0x394150, _0x3d1d9e) {
          var _0x1f38eb = _0x30c139.createNode(_0x322a21, _0x394150, 41471, 0);
          _0x1f38eb.link = _0x3d1d9e;
          return _0x1f38eb;
        },
        readlink: function (_0x3768b5) {
          if (!_0x5292fc.isLink(_0x3768b5.mode)) {
            throw new _0x5292fc.ErrnoError(28);
          }
          return _0x3768b5.link;
        }
      },
      stream_ops: {
        read: function (_0x4caf48, _0x5d16dd, _0x325556, _0x252830, _0x3c3aef) {
          var _0x4c7be4 = _0x4caf48.node.contents;
          if (_0x3c3aef >= _0x4caf48.node.usedBytes) {
            return 0;
          }
          var _0x24b50f = Math.min(_0x4caf48.node.usedBytes - _0x3c3aef, _0x252830);
          if (_0x24b50f > 8 && _0x4c7be4.subarray) {
            _0x5d16dd.set(_0x4c7be4.subarray(_0x3c3aef, _0x3c3aef + _0x24b50f), _0x325556);
          } else {
            for (var _0x2cc320 = 0; _0x2cc320 < _0x24b50f; _0x2cc320++) {
              _0x5d16dd[_0x325556 + _0x2cc320] = _0x4c7be4[_0x3c3aef + _0x2cc320];
            }
          }
          return _0x24b50f;
        },
        write: function (_0x2682d4, _0x63416b, _0x16c15e, _0x2ab5cf, _0x273ae4, _0x35deb8) {
          if (_0x63416b.buffer === _0xe1b6fc.buffer) {
            _0x35deb8 = false;
          }
          if (!_0x2ab5cf) {
            return 0;
          }
          var _0x20736a = _0x2682d4.node;
          _0x20736a.timestamp = Date.now();
          if (_0x63416b.subarray && (!_0x20736a.contents || _0x20736a.contents.subarray)) {
            if (_0x35deb8) {
              _0x20736a.contents = _0x63416b.subarray(_0x16c15e, _0x16c15e + _0x2ab5cf);
              _0x20736a.usedBytes = _0x2ab5cf;
              return _0x2ab5cf;
            } else if (_0x20736a.usedBytes === 0 && _0x273ae4 === 0) {
              _0x20736a.contents = _0x63416b.slice(_0x16c15e, _0x16c15e + _0x2ab5cf);
              _0x20736a.usedBytes = _0x2ab5cf;
              return _0x2ab5cf;
            } else if (_0x273ae4 + _0x2ab5cf <= _0x20736a.usedBytes) {
              _0x20736a.contents.set(_0x63416b.subarray(_0x16c15e, _0x16c15e + _0x2ab5cf), _0x273ae4);
              return _0x2ab5cf;
            }
          }
          _0x30c139.expandFileStorage(_0x20736a, _0x273ae4 + _0x2ab5cf);
          if (_0x20736a.contents.subarray && _0x63416b.subarray) {
            _0x20736a.contents.set(_0x63416b.subarray(_0x16c15e, _0x16c15e + _0x2ab5cf), _0x273ae4);
          } else {
            for (var _0x11b533 = 0; _0x11b533 < _0x2ab5cf; _0x11b533++) {
              _0x20736a.contents[_0x273ae4 + _0x11b533] = _0x63416b[_0x16c15e + _0x11b533];
            }
          }
          _0x20736a.usedBytes = Math.max(_0x20736a.usedBytes, _0x273ae4 + _0x2ab5cf);
          return _0x2ab5cf;
        },
        llseek: function (_0x4cbba6, _0x563e9d, _0x3f4f88) {
          var _0x4a6dc9 = _0x563e9d;
          if (_0x3f4f88 === 1) {
            _0x4a6dc9 += _0x4cbba6.position;
          } else if (_0x3f4f88 === 2) {
            if (_0x5292fc.isFile(_0x4cbba6.node.mode)) {
              _0x4a6dc9 += _0x4cbba6.node.usedBytes;
            }
          }
          if (_0x4a6dc9 < 0) {
            throw new _0x5292fc.ErrnoError(28);
          }
          return _0x4a6dc9;
        },
        allocate: function (_0x5b6b52, _0x5a2d70, _0x4cc9ec) {
          _0x30c139.expandFileStorage(_0x5b6b52.node, _0x5a2d70 + _0x4cc9ec);
          _0x5b6b52.node.usedBytes = Math.max(_0x5b6b52.node.usedBytes, _0x5a2d70 + _0x4cc9ec);
        },
        mmap: function (_0x116bf8, _0x1b711d, _0x3a661f, _0x44ef86, _0x20ec81, _0x37eb98) {
          if (_0x1b711d !== 0) {
            throw new _0x5292fc.ErrnoError(28);
          }
          if (!_0x5292fc.isFile(_0x116bf8.node.mode)) {
            throw new _0x5292fc.ErrnoError(43);
          }
          var _0x5197ca;
          var _0x1ce245;
          var _0x32f27c = _0x116bf8.node.contents;
          if (!(_0x37eb98 & 2) && _0x32f27c.buffer === _0x5ac3fe) {
            _0x1ce245 = false;
            _0x5197ca = _0x32f27c.byteOffset;
          } else {
            if (_0x44ef86 > 0 || _0x44ef86 + _0x3a661f < _0x32f27c.length) {
              if (_0x32f27c.subarray) {
                _0x32f27c = _0x32f27c.subarray(_0x44ef86, _0x44ef86 + _0x3a661f);
              } else {
                _0x32f27c = Array.prototype.slice.call(_0x32f27c, _0x44ef86, _0x44ef86 + _0x3a661f);
              }
            }
            _0x1ce245 = true;
            _0x5197ca = _0x4cbb94(_0x3a661f);
            if (!_0x5197ca) {
              throw new _0x5292fc.ErrnoError(48);
            }
            _0xe1b6fc.set(_0x32f27c, _0x5197ca);
          }
          return {
            ptr: _0x5197ca,
            allocated: _0x1ce245
          };
        },
        msync: function (_0xf9abe5, _0x3358b3, _0x1c6060, _0x35507, _0x1b1273) {
          if (!_0x5292fc.isFile(_0xf9abe5.node.mode)) {
            throw new _0x5292fc.ErrnoError(43);
          }
          if (_0x1b1273 & 2) {
            return 0;
          }
          var _0x2e5d89 = _0x30c139.stream_ops.write(_0xf9abe5, _0x3358b3, 0, _0x35507, _0x1c6060, false);
          return 0;
        }
      }
    };
    function _0x52ffaf(_0x30fe40, _0x1cc7af, _0x1acbb7, _0x39db50) {
      var _0x34578f = !_0x39db50 ? _0x454e79("al " + _0x30fe40) : "";
      _0x1783c4(_0x30fe40, function (_0x4043d3) {
        _0x469125(_0x4043d3, "Loading data file \"" + _0x30fe40 + "\" failed (no arrayBuffer).");
        _0x1cc7af(new Uint8Array(_0x4043d3));
        if (_0x34578f) {
          _0x5057aa(_0x34578f);
        }
      }, function (_0x32d517) {
        if (_0x1acbb7) {
          _0x1acbb7();
        } else {
          throw "Loading data file \"" + _0x30fe40 + "\" failed.";
        }
      });
      if (_0x34578f) {
        _0x3cd447(_0x34578f);
      }
    }
    var _0x4fc026 = {
      dbs: {},
      indexedDB: () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0x3a08bf = null;
        if (typeof window == "object") {
          _0x3a08bf = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x469125(_0x3a08bf, "IDBFS used, but indexedDB not supported");
        return _0x3a08bf;
      },
      DB_VERSION: 21,
      DB_STORE_NAME: "FILE_DATA",
      mount: function (_0x47dc09) {
        return _0x30c139.mount.apply(null, arguments);
      },
      syncfs: (_0x3b2add, _0x7c9a0c, _0x48849b) => {
        _0x4fc026.getLocalSet(_0x3b2add, (_0x178439, _0x4a747b) => {
          if (_0x178439) {
            return _0x48849b(_0x178439);
          }
          _0x4fc026.getRemoteSet(_0x3b2add, (_0x3c5129, _0x4538a5) => {
            if (_0x3c5129) {
              return _0x48849b(_0x3c5129);
            }
            var _0x15870e = _0x7c9a0c ? _0x4538a5 : _0x4a747b;
            var _0x225701 = _0x7c9a0c ? _0x4a747b : _0x4538a5;
            _0x4fc026.reconcile(_0x15870e, _0x225701, _0x48849b);
          });
        });
      },
      getDB: (_0x2ff2a6, _0xd9375f) => {
        var _0x1b8ad5 = _0x4fc026.dbs[_0x2ff2a6];
        if (_0x1b8ad5) {
          return _0xd9375f(null, _0x1b8ad5);
        }
        var _0x14e3c4;
        try {
          _0x14e3c4 = _0x4fc026.indexedDB().open(_0x2ff2a6, _0x4fc026.DB_VERSION);
        } catch (_0x34623d) {
          return _0xd9375f(_0x34623d);
        }
        if (!_0x14e3c4) {
          return _0xd9375f("Unable to connect to IndexedDB");
        }
        _0x14e3c4.onupgradeneeded = _0x39ee8d => {
          var _0x2dacf7 = _0x39ee8d.target.result;
          var _0x30e7dd = _0x39ee8d.target.transaction;
          var _0x182dce;
          if (_0x2dacf7.objectStoreNames.contains(_0x4fc026.DB_STORE_NAME)) {
            _0x182dce = _0x30e7dd.objectStore(_0x4fc026.DB_STORE_NAME);
          } else {
            _0x182dce = _0x2dacf7.createObjectStore(_0x4fc026.DB_STORE_NAME);
          }
          if (!_0x182dce.indexNames.contains("timestamp")) {
            _0x182dce.createIndex("timestamp", "timestamp", {
              unique: false
            });
          }
        };
        _0x14e3c4.onsuccess = () => {
          _0x1b8ad5 = _0x14e3c4.result;
          _0x4fc026.dbs[_0x2ff2a6] = _0x1b8ad5;
          _0xd9375f(null, _0x1b8ad5);
        };
        _0x14e3c4.onerror = _0xa9f3f2 => {
          _0xd9375f(this.error);
          _0xa9f3f2.preventDefault();
        };
      },
      getLocalSet: (_0x10aaa9, _0x118c42) => {
        var _0x311fd5 = {};
        function _0x3728a0(_0x3f4a00) {
          return _0x3f4a00 !== "." && _0x3f4a00 !== "..";
        }
        function _0x3a8278(_0x1d49fb) {
          return _0x321937 => {
            return _0x369aa8.join2(_0x1d49fb, _0x321937);
          };
        }
        var _0x14d590 = _0x5292fc.readdir(_0x10aaa9.mountpoint).filter(_0x3728a0).map(_0x3a8278(_0x10aaa9.mountpoint));
        while (_0x14d590.length) {
          var _0x2f82ca = _0x14d590.pop();
          var _0xe54337;
          try {
            _0xe54337 = _0x5292fc.stat(_0x2f82ca);
          } catch (_0x13abbf) {
            return _0x118c42(_0x13abbf);
          }
          if (_0x5292fc.isDir(_0xe54337.mode)) {
            _0x14d590.push.apply(_0x14d590, _0x5292fc.readdir(_0x2f82ca).filter(_0x3728a0).map(_0x3a8278(_0x2f82ca)));
          }
          _0x311fd5[_0x2f82ca] = {
            timestamp: _0xe54337.mtime
          };
        }
        return _0x118c42(null, {
          type: "local",
          entries: _0x311fd5
        });
      },
      getRemoteSet: (_0x2c5343, _0x3f4e7d) => {
        var _0x1c0563 = {};
        _0x4fc026.getDB(_0x2c5343.mountpoint, (_0x5829b0, _0x4b3f71) => {
          if (_0x5829b0) {
            return _0x3f4e7d(_0x5829b0);
          }
          try {
            var _0xb73fee = _0x4b3f71.transaction([_0x4fc026.DB_STORE_NAME], "readonly");
            _0xb73fee.onerror = _0x17f398 => {
              _0x3f4e7d(this.error);
              _0x17f398.preventDefault();
            };
            var _0x6843dc = _0xb73fee.objectStore(_0x4fc026.DB_STORE_NAME);
            var _0x4b5da1 = _0x6843dc.index("timestamp");
            _0x4b5da1.openKeyCursor().onsuccess = _0x195abb => {
              var _0x46b9c8 = _0x195abb.target.result;
              if (!_0x46b9c8) {
                return _0x3f4e7d(null, {
                  type: "remote",
                  db: _0x4b3f71,
                  entries: _0x1c0563
                });
              }
              _0x1c0563[_0x46b9c8.primaryKey] = {
                timestamp: _0x46b9c8.key
              };
              _0x46b9c8.continue();
            };
          } catch (_0x3eacf7) {
            return _0x3f4e7d(_0x3eacf7);
          }
        });
      },
      loadLocalEntry: (_0x4fd73c, _0x56af1b) => {
        var _0x28878a;
        var _0x515ec1;
        try {
          var _0x593af4 = _0x5292fc.lookupPath(_0x4fd73c);
          _0x515ec1 = _0x593af4.node;
          _0x28878a = _0x5292fc.stat(_0x4fd73c);
        } catch (_0x390108) {
          return _0x56af1b(_0x390108);
        }
        if (_0x5292fc.isDir(_0x28878a.mode)) {
          return _0x56af1b(null, {
            timestamp: _0x28878a.mtime,
            mode: _0x28878a.mode
          });
        } else if (_0x5292fc.isFile(_0x28878a.mode)) {
          _0x515ec1.contents = _0x30c139.getFileDataAsTypedArray(_0x515ec1);
          return _0x56af1b(null, {
            timestamp: _0x28878a.mtime,
            mode: _0x28878a.mode,
            contents: _0x515ec1.contents
          });
        } else {
          return _0x56af1b(new Error("node type not supported"));
        }
      },
      storeLocalEntry: (_0x48a235, _0x44f209, _0x211c56) => {
        try {
          if (_0x5292fc.isDir(_0x44f209.mode)) {
            _0x5292fc.mkdirTree(_0x48a235, _0x44f209.mode);
          } else if (_0x5292fc.isFile(_0x44f209.mode)) {
            _0x5292fc.writeFile(_0x48a235, _0x44f209.contents, {
              canOwn: true
            });
          } else {
            return _0x211c56(new Error("node type not supported"));
          }
          _0x5292fc.chmod(_0x48a235, _0x44f209.mode);
          _0x5292fc.utime(_0x48a235, _0x44f209.timestamp, _0x44f209.timestamp);
        } catch (_0x229a84) {
          return _0x211c56(_0x229a84);
        }
        _0x211c56(null);
      },
      removeLocalEntry: (_0x544a25, _0x37f61d) => {
        try {
          var _0x5fe904 = _0x5292fc.lookupPath(_0x544a25);
          var _0x5b9022 = _0x5292fc.stat(_0x544a25);
          if (_0x5292fc.isDir(_0x5b9022.mode)) {
            _0x5292fc.rmdir(_0x544a25);
          } else if (_0x5292fc.isFile(_0x5b9022.mode)) {
            _0x5292fc.unlink(_0x544a25);
          }
        } catch (_0x37751b) {
          return _0x37f61d(_0x37751b);
        }
        _0x37f61d(null);
      },
      loadRemoteEntry: (_0x3ea7af, _0x1c2f21, _0x112708) => {
        var _0x278bd4 = _0x3ea7af.get(_0x1c2f21);
        _0x278bd4.onsuccess = _0x2dc289 => {
          _0x112708(null, _0x2dc289.target.result);
        };
        _0x278bd4.onerror = _0x3e83e5 => {
          _0x112708(this.error);
          _0x3e83e5.preventDefault();
        };
      },
      storeRemoteEntry: (_0x3ac339, _0x1bb7c6, _0x1a7a13, _0x3b7f8c) => {
        try {
          var _0x41012d = _0x3ac339.put(_0x1a7a13, _0x1bb7c6);
        } catch (_0x54d070) {
          _0x3b7f8c(_0x54d070);
          return;
        }
        _0x41012d.onsuccess = () => {
          _0x3b7f8c(null);
        };
        _0x41012d.onerror = _0x56875b => {
          _0x3b7f8c(this.error);
          _0x56875b.preventDefault();
        };
      },
      removeRemoteEntry: (_0x5aeeb0, _0x172ac6, _0x2dca88) => {
        var _0x24fa5c = _0x5aeeb0.delete(_0x172ac6);
        _0x24fa5c.onsuccess = () => {
          _0x2dca88(null);
        };
        _0x24fa5c.onerror = _0x4e39fc => {
          _0x2dca88(this.error);
          _0x4e39fc.preventDefault();
        };
      },
      reconcile: (_0xfc37dc, _0x245a46, _0x41fd22) => {
        var _0x45fe96 = 0;
        var _0x239cf4 = [];
        Object.keys(_0xfc37dc.entries).forEach(function (_0x27dd9b) {
          var _0x2226a8 = _0xfc37dc.entries[_0x27dd9b];
          var _0x22ba70 = _0x245a46.entries[_0x27dd9b];
          if (!_0x22ba70 || _0x2226a8.timestamp.getTime() != _0x22ba70.timestamp.getTime()) {
            _0x239cf4.push(_0x27dd9b);
            _0x45fe96++;
          }
        });
        var _0x330d5f = [];
        Object.keys(_0x245a46.entries).forEach(function (_0x23675c) {
          if (!_0xfc37dc.entries[_0x23675c]) {
            _0x330d5f.push(_0x23675c);
            _0x45fe96++;
          }
        });
        if (!_0x45fe96) {
          return _0x41fd22(null);
        }
        var _0x7267c0 = false;
        var _0x24001b = _0xfc37dc.type === "remote" ? _0xfc37dc.db : _0x245a46.db;
        var _0x45dc07 = _0x24001b.transaction([_0x4fc026.DB_STORE_NAME], "readwrite");
        var _0x29eb15 = _0x45dc07.objectStore(_0x4fc026.DB_STORE_NAME);
        function _0x577082(_0x182be8) {
          if (_0x182be8 && !_0x7267c0) {
            _0x7267c0 = true;
            return _0x41fd22(_0x182be8);
          }
        }
        _0x45dc07.onerror = _0x49d28b => {
          _0x577082(this.error);
          _0x49d28b.preventDefault();
        };
        _0x45dc07.oncomplete = _0x14d566 => {
          if (!_0x7267c0) {
            _0x41fd22(null);
          }
        };
        _0x239cf4.sort().forEach(_0xb8a17d => {
          if (_0x245a46.type === "local") {
            _0x4fc026.loadRemoteEntry(_0x29eb15, _0xb8a17d, (_0x5955ae, _0x374fae) => {
              if (_0x5955ae) {
                return _0x577082(_0x5955ae);
              }
              _0x4fc026.storeLocalEntry(_0xb8a17d, _0x374fae, _0x577082);
            });
          } else {
            _0x4fc026.loadLocalEntry(_0xb8a17d, (_0x1d0c9b, _0x5757f1) => {
              if (_0x1d0c9b) {
                return _0x577082(_0x1d0c9b);
              }
              _0x4fc026.storeRemoteEntry(_0x29eb15, _0xb8a17d, _0x5757f1, _0x577082);
            });
          }
        });
        _0x330d5f.sort().reverse().forEach(_0x47d697 => {
          if (_0x245a46.type === "local") {
            _0x4fc026.removeLocalEntry(_0x47d697, _0x577082);
          } else {
            _0x4fc026.removeRemoteEntry(_0x29eb15, _0x47d697, _0x577082);
          }
        });
      }
    };
    var _0x5292fc = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      lookupPath: (_0x197824, _0x100c5e = {}) => {
        _0x197824 = _0x59d0d7.resolve(_0x5292fc.cwd(), _0x197824);
        if (!_0x197824) {
          return {
            path: "",
            node: null
          };
        }
        var _0x4a0a3d = {
          follow_mount: true,
          recurse_count: 0
        };
        _0x100c5e = Object.assign(_0x4a0a3d, _0x100c5e);
        if (_0x100c5e.recurse_count > 8) {
          throw new _0x5292fc.ErrnoError(32);
        }
        var _0x2cbd0a = _0x369aa8.normalizeArray(_0x197824.split("/").filter(_0x5d6716 => !!_0x5d6716), false);
        var _0x2fb07d = _0x5292fc.root;
        var _0x5bdfb9 = "/";
        for (var _0x804e2e = 0; _0x804e2e < _0x2cbd0a.length; _0x804e2e++) {
          var _0xe12944 = _0x804e2e === _0x2cbd0a.length - 1;
          if (_0xe12944 && _0x100c5e.parent) {
            break;
          }
          _0x2fb07d = _0x5292fc.lookupNode(_0x2fb07d, _0x2cbd0a[_0x804e2e]);
          _0x5bdfb9 = _0x369aa8.join2(_0x5bdfb9, _0x2cbd0a[_0x804e2e]);
          if (_0x5292fc.isMountpoint(_0x2fb07d)) {
            if (!_0xe12944 || _0xe12944 && _0x100c5e.follow_mount) {
              _0x2fb07d = _0x2fb07d.mounted.root;
            }
          }
          if (!_0xe12944 || _0x100c5e.follow) {
            var _0x8a9d0b = 0;
            while (_0x5292fc.isLink(_0x2fb07d.mode)) {
              var _0x2de073 = _0x5292fc.readlink(_0x5bdfb9);
              _0x5bdfb9 = _0x59d0d7.resolve(_0x369aa8.dirname(_0x5bdfb9), _0x2de073);
              var _0x3dc2ce = _0x5292fc.lookupPath(_0x5bdfb9, {
                recurse_count: _0x100c5e.recurse_count + 1
              });
              _0x2fb07d = _0x3dc2ce.node;
              if (_0x8a9d0b++ > 40) {
                throw new _0x5292fc.ErrnoError(32);
              }
            }
          }
        }
        return {
          path: _0x5bdfb9,
          node: _0x2fb07d
        };
      },
      getPath: _0xce5fd5 => {
        var _0x175dbe;
        while (true) {
          if (_0x5292fc.isRoot(_0xce5fd5)) {
            var _0x48d3cb = _0xce5fd5.mount.mountpoint;
            if (!_0x175dbe) {
              return _0x48d3cb;
            }
            if (_0x48d3cb[_0x48d3cb.length - 1] !== "/") {
              return _0x48d3cb + "/" + _0x175dbe;
            } else {
              return _0x48d3cb + _0x175dbe;
            }
          }
          _0x175dbe = _0x175dbe ? _0xce5fd5.name + "/" + _0x175dbe : _0xce5fd5.name;
          _0xce5fd5 = _0xce5fd5.parent;
        }
      },
      hashName: (_0x304e71, _0x163425) => {
        var _0x5ed615 = 0;
        for (var _0x3eb007 = 0; _0x3eb007 < _0x163425.length; _0x3eb007++) {
          _0x5ed615 = (_0x5ed615 << 5) - _0x5ed615 + _0x163425.charCodeAt(_0x3eb007) | 0;
        }
        return (_0x304e71 + _0x5ed615 >>> 0) % _0x5292fc.nameTable.length;
      },
      hashAddNode: _0x1c5cec => {
        var _0x3dd233 = _0x5292fc.hashName(_0x1c5cec.parent.id, _0x1c5cec.name);
        _0x1c5cec.name_next = _0x5292fc.nameTable[_0x3dd233];
        _0x5292fc.nameTable[_0x3dd233] = _0x1c5cec;
      },
      hashRemoveNode: _0x122b45 => {
        var _0x3df931 = _0x5292fc.hashName(_0x122b45.parent.id, _0x122b45.name);
        if (_0x5292fc.nameTable[_0x3df931] === _0x122b45) {
          _0x5292fc.nameTable[_0x3df931] = _0x122b45.name_next;
        } else {
          var _0x4c5be0 = _0x5292fc.nameTable[_0x3df931];
          while (_0x4c5be0) {
            if (_0x4c5be0.name_next === _0x122b45) {
              _0x4c5be0.name_next = _0x122b45.name_next;
              break;
            }
            _0x4c5be0 = _0x4c5be0.name_next;
          }
        }
      },
      lookupNode: (_0x30f3c8, _0x5a0b7d) => {
        var _0x30994a = _0x5292fc.mayLookup(_0x30f3c8);
        if (_0x30994a) {
          throw new _0x5292fc.ErrnoError(_0x30994a, _0x30f3c8);
        }
        var _0xeec6cc = _0x5292fc.hashName(_0x30f3c8.id, _0x5a0b7d);
        for (var _0x5a81ce = _0x5292fc.nameTable[_0xeec6cc]; _0x5a81ce; _0x5a81ce = _0x5a81ce.name_next) {
          var _0x1d68bb = _0x5a81ce.name;
          if (_0x5a81ce.parent.id === _0x30f3c8.id && _0x1d68bb === _0x5a0b7d) {
            return _0x5a81ce;
          }
        }
        return _0x5292fc.lookup(_0x30f3c8, _0x5a0b7d);
      },
      createNode: (_0x252284, _0x1e32cd, _0x54912a, _0x354677) => {
        var _0x827b70 = new _0x5292fc.FSNode(_0x252284, _0x1e32cd, _0x54912a, _0x354677);
        _0x5292fc.hashAddNode(_0x827b70);
        return _0x827b70;
      },
      destroyNode: _0x2af355 => {
        _0x5292fc.hashRemoveNode(_0x2af355);
      },
      isRoot: _0x549a25 => {
        return _0x549a25 === _0x549a25.parent;
      },
      isMountpoint: _0x33342e => {
        return !!_0x33342e.mounted;
      },
      isFile: _0x5632c0 => {
        return (_0x5632c0 & 61440) === 32768;
      },
      isDir: _0x42c999 => {
        return (_0x42c999 & 61440) === 16384;
      },
      isLink: _0x19926c => {
        return (_0x19926c & 61440) === 40960;
      },
      isChrdev: _0x4b7b65 => {
        return (_0x4b7b65 & 61440) === 8192;
      },
      isBlkdev: _0x76e05c => {
        return (_0x76e05c & 61440) === 24576;
      },
      isFIFO: _0x4c6980 => {
        return (_0x4c6980 & 61440) === 4096;
      },
      isSocket: _0x2b794b => {
        return (_0x2b794b & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      },
      modeStringToFlags: _0x3f2643 => {
        var _0x18024f = _0x5292fc.flagModes[_0x3f2643];
        if (typeof _0x18024f == "undefined") {
          throw new Error("Unknown file open mode: " + _0x3f2643);
        }
        return _0x18024f;
      },
      flagsToPermissionString: _0x1a835b => {
        var _0x39d300 = ["r", "w", "rw"][_0x1a835b & 3];
        if (_0x1a835b & 512) {
          _0x39d300 += "w";
        }
        return _0x39d300;
      },
      nodePermissions: (_0x486efe, _0x5e0448) => {
        if (_0x5292fc.ignorePermissions) {
          return 0;
        }
        if (_0x5e0448.includes("r") && !(_0x486efe.mode & 292)) {
          return 2;
        } else if (_0x5e0448.includes("w") && !(_0x486efe.mode & 146)) {
          return 2;
        } else if (_0x5e0448.includes("x") && !(_0x486efe.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: _0x1f4e32 => {
        var _0x28424d = _0x5292fc.nodePermissions(_0x1f4e32, "x");
        if (_0x28424d) {
          return _0x28424d;
        }
        if (!_0x1f4e32.node_ops.lookup) {
          return 2;
        }
        return 0;
      },
      mayCreate: (_0x26dc50, _0x259d30) => {
        try {
          var _0x507e06 = _0x5292fc.lookupNode(_0x26dc50, _0x259d30);
          return 20;
        } catch (_0x40f8e8) {}
        return _0x5292fc.nodePermissions(_0x26dc50, "wx");
      },
      mayDelete: (_0x9f4ff0, _0x3080c1, _0x1a591e) => {
        var _0x2495b2;
        try {
          _0x2495b2 = _0x5292fc.lookupNode(_0x9f4ff0, _0x3080c1);
        } catch (_0x479aac) {
          return _0x479aac.errno;
        }
        var _0x490579 = _0x5292fc.nodePermissions(_0x9f4ff0, "wx");
        if (_0x490579) {
          return _0x490579;
        }
        if (_0x1a591e) {
          if (!_0x5292fc.isDir(_0x2495b2.mode)) {
            return 54;
          }
          if (_0x5292fc.isRoot(_0x2495b2) || _0x5292fc.getPath(_0x2495b2) === _0x5292fc.cwd()) {
            return 10;
          }
        } else if (_0x5292fc.isDir(_0x2495b2.mode)) {
          return 31;
        }
        return 0;
      },
      mayOpen: (_0x1b1ab2, _0x594e96) => {
        if (!_0x1b1ab2) {
          return 44;
        }
        if (_0x5292fc.isLink(_0x1b1ab2.mode)) {
          return 32;
        } else if (_0x5292fc.isDir(_0x1b1ab2.mode)) {
          if (_0x5292fc.flagsToPermissionString(_0x594e96) !== "r" || _0x594e96 & 512) {
            return 31;
          }
        }
        return _0x5292fc.nodePermissions(_0x1b1ab2, _0x5292fc.flagsToPermissionString(_0x594e96));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: (_0x432c58 = 0, _0x27e7e8 = _0x5292fc.MAX_OPEN_FDS) => {
        for (var _0x19e834 = _0x432c58; _0x19e834 <= _0x27e7e8; _0x19e834++) {
          if (!_0x5292fc.streams[_0x19e834]) {
            return _0x19e834;
          }
        }
        throw new _0x5292fc.ErrnoError(33);
      },
      getStream: _0x4b32f4 => _0x5292fc.streams[_0x4b32f4],
      createStream: (_0x4053b0, _0x201f3e, _0x299ec7) => {
        if (!_0x5292fc.FSStream) {
          _0x5292fc.FSStream = function () {};
          _0x5292fc.FSStream.prototype = {
            object: {
              get: function () {
                return this.node;
              },
              set: function (_0x21204a) {
                this.node = _0x21204a;
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
        _0x4053b0 = Object.assign(new _0x5292fc.FSStream(), _0x4053b0);
        var _0x16ce85 = _0x5292fc.nextfd(_0x201f3e, _0x299ec7);
        _0x4053b0.fd = _0x16ce85;
        _0x5292fc.streams[_0x16ce85] = _0x4053b0;
        return _0x4053b0;
      },
      closeStream: _0x24e10a => {
        _0x5292fc.streams[_0x24e10a] = null;
      },
      chrdev_stream_ops: {
        open: _0x295684 => {
          var _0x4763d6 = _0x5292fc.getDevice(_0x295684.node.rdev);
          _0x295684.stream_ops = _0x4763d6.stream_ops;
          if (_0x295684.stream_ops.open) {
            _0x295684.stream_ops.open(_0x295684);
          }
        },
        llseek: () => {
          throw new _0x5292fc.ErrnoError(70);
        }
      },
      major: _0x274cc5 => _0x274cc5 >> 8,
      minor: _0x208ba0 => _0x208ba0 & 255,
      makedev: (_0xbe9953, _0x541318) => _0xbe9953 << 8 | _0x541318,
      registerDevice: (_0x3f739c, _0x1c5a4f) => {
        _0x5292fc.devices[_0x3f739c] = {
          stream_ops: _0x1c5a4f
        };
      },
      getDevice: _0x4db5c5 => _0x5292fc.devices[_0x4db5c5],
      getMounts: _0x43de41 => {
        var _0x1d2723 = [];
        var _0x2c66cb = [_0x43de41];
        while (_0x2c66cb.length) {
          var _0x466b84 = _0x2c66cb.pop();
          _0x1d2723.push(_0x466b84);
          _0x2c66cb.push.apply(_0x2c66cb, _0x466b84.mounts);
        }
        return _0x1d2723;
      },
      syncfs: (_0xab1a3f, _0x528a5c) => {
        if (typeof _0xab1a3f == "function") {
          _0x528a5c = _0xab1a3f;
          _0xab1a3f = false;
        }
        _0x5292fc.syncFSRequests++;
        if (_0x5292fc.syncFSRequests > 1) {
          _0x2e37f2("warning: " + _0x5292fc.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var _0x5a369b = _0x5292fc.getMounts(_0x5292fc.root.mount);
        var _0x199a5c = 0;
        function _0x52e20a(_0x18944b) {
          _0x5292fc.syncFSRequests--;
          return _0x528a5c(_0x18944b);
        }
        function _0x4bd455(_0x3c89be) {
          if (_0x3c89be) {
            if (!_0x4bd455.errored) {
              _0x4bd455.errored = true;
              return _0x52e20a(_0x3c89be);
            }
            return;
          }
          if (++_0x199a5c >= _0x5a369b.length) {
            _0x52e20a(null);
          }
        }
        _0x5a369b.forEach(_0x2abdad => {
          if (!_0x2abdad.type.syncfs) {
            return _0x4bd455(null);
          }
          _0x2abdad.type.syncfs(_0x2abdad, _0xab1a3f, _0x4bd455);
        });
      },
      mount: (_0x5efaa1, _0x8c361d, _0x2d4b99) => {
        var _0x6a922c = _0x2d4b99 === "/";
        var _0x2f7883 = !_0x2d4b99;
        var _0x146fdb;
        if (_0x6a922c && _0x5292fc.root) {
          throw new _0x5292fc.ErrnoError(10);
        } else if (!_0x6a922c && !_0x2f7883) {
          var _0x21cfd6 = _0x5292fc.lookupPath(_0x2d4b99, {
            follow_mount: false
          });
          _0x2d4b99 = _0x21cfd6.path;
          _0x146fdb = _0x21cfd6.node;
          if (_0x5292fc.isMountpoint(_0x146fdb)) {
            throw new _0x5292fc.ErrnoError(10);
          }
          if (!_0x5292fc.isDir(_0x146fdb.mode)) {
            throw new _0x5292fc.ErrnoError(54);
          }
        }
        var _0x1dc8fa = {
          type: _0x5efaa1,
          opts: _0x8c361d,
          mountpoint: _0x2d4b99,
          mounts: []
        };
        var _0x1aba45 = _0x5efaa1.mount(_0x1dc8fa);
        _0x1aba45.mount = _0x1dc8fa;
        _0x1dc8fa.root = _0x1aba45;
        if (_0x6a922c) {
          _0x5292fc.root = _0x1aba45;
        } else if (_0x146fdb) {
          _0x146fdb.mounted = _0x1dc8fa;
          if (_0x146fdb.mount) {
            _0x146fdb.mount.mounts.push(_0x1dc8fa);
          }
        }
        return _0x1aba45;
      },
      unmount: _0x596a9a => {
        var _0x34d1fd = _0x5292fc.lookupPath(_0x596a9a, {
          follow_mount: false
        });
        if (!_0x5292fc.isMountpoint(_0x34d1fd.node)) {
          throw new _0x5292fc.ErrnoError(28);
        }
        var _0x43b2eb = _0x34d1fd.node;
        var _0x151feb = _0x43b2eb.mounted;
        var _0x5b65a2 = _0x5292fc.getMounts(_0x151feb);
        Object.keys(_0x5292fc.nameTable).forEach(_0x98539e => {
          var _0x45177b = _0x5292fc.nameTable[_0x98539e];
          while (_0x45177b) {
            var _0x48d889 = _0x45177b.name_next;
            if (_0x5b65a2.includes(_0x45177b.mount)) {
              _0x5292fc.destroyNode(_0x45177b);
            }
            _0x45177b = _0x48d889;
          }
        });
        _0x43b2eb.mounted = null;
        var _0x5355c5 = _0x43b2eb.mount.mounts.indexOf(_0x151feb);
        _0x43b2eb.mount.mounts.splice(_0x5355c5, 1);
      },
      lookup: (_0x2a3f9b, _0x4bda36) => {
        return _0x2a3f9b.node_ops.lookup(_0x2a3f9b, _0x4bda36);
      },
      mknod: (_0x1d6e1c, _0x58dfcb, _0xf0f2aa) => {
        var _0xef2bf5 = _0x5292fc.lookupPath(_0x1d6e1c, {
          parent: true
        });
        var _0x4e169f = _0xef2bf5.node;
        var _0x2fa88f = _0x369aa8.basename(_0x1d6e1c);
        if (!_0x2fa88f || _0x2fa88f === "." || _0x2fa88f === "..") {
          throw new _0x5292fc.ErrnoError(28);
        }
        var _0x390024 = _0x5292fc.mayCreate(_0x4e169f, _0x2fa88f);
        if (_0x390024) {
          throw new _0x5292fc.ErrnoError(_0x390024);
        }
        if (!_0x4e169f.node_ops.mknod) {
          throw new _0x5292fc.ErrnoError(63);
        }
        return _0x4e169f.node_ops.mknod(_0x4e169f, _0x2fa88f, _0x58dfcb, _0xf0f2aa);
      },
      create: (_0x26da88, _0xc70351) => {
        _0xc70351 = _0xc70351 !== undefined ? _0xc70351 : 438;
        _0xc70351 &= 4095;
        _0xc70351 |= 32768;
        return _0x5292fc.mknod(_0x26da88, _0xc70351, 0);
      },
      mkdir: (_0x1ced79, _0x6e3abe) => {
        _0x6e3abe = _0x6e3abe !== undefined ? _0x6e3abe : 511;
        _0x6e3abe &= 1023;
        _0x6e3abe |= 16384;
        return _0x5292fc.mknod(_0x1ced79, _0x6e3abe, 0);
      },
      mkdirTree: (_0x516cf6, _0x23ac1d) => {
        var _0x5b522c = _0x516cf6.split("/");
        var _0x91dc2f = "";
        for (var _0x33b04b = 0; _0x33b04b < _0x5b522c.length; ++_0x33b04b) {
          if (!_0x5b522c[_0x33b04b]) {
            continue;
          }
          _0x91dc2f += "/" + _0x5b522c[_0x33b04b];
          try {
            _0x5292fc.mkdir(_0x91dc2f, _0x23ac1d);
          } catch (_0x1206e0) {
            if (_0x1206e0.errno != 20) {
              throw _0x1206e0;
            }
          }
        }
      },
      mkdev: (_0x4116c9, _0x5eb666, _0x44fb77) => {
        if (typeof _0x44fb77 == "undefined") {
          _0x44fb77 = _0x5eb666;
          _0x5eb666 = 438;
        }
        _0x5eb666 |= 8192;
        return _0x5292fc.mknod(_0x4116c9, _0x5eb666, _0x44fb77);
      },
      symlink: (_0xb93645, _0x3d5cce) => {
        if (!_0x59d0d7.resolve(_0xb93645)) {
          throw new _0x5292fc.ErrnoError(44);
        }
        var _0x4cd235 = _0x5292fc.lookupPath(_0x3d5cce, {
          parent: true
        });
        var _0x386213 = _0x4cd235.node;
        if (!_0x386213) {
          throw new _0x5292fc.ErrnoError(44);
        }
        var _0x201581 = _0x369aa8.basename(_0x3d5cce);
        var _0x5c47be = _0x5292fc.mayCreate(_0x386213, _0x201581);
        if (_0x5c47be) {
          throw new _0x5292fc.ErrnoError(_0x5c47be);
        }
        if (!_0x386213.node_ops.symlink) {
          throw new _0x5292fc.ErrnoError(63);
        }
        return _0x386213.node_ops.symlink(_0x386213, _0x201581, _0xb93645);
      },
      rename: (_0xc2ab77, _0x178048) => {
        var _0x3986df = _0x369aa8.dirname(_0xc2ab77);
        var _0x5471db = _0x369aa8.dirname(_0x178048);
        var _0x365af3 = _0x369aa8.basename(_0xc2ab77);
        var _0x3d112d = _0x369aa8.basename(_0x178048);
        var _0x1992ce;
        var _0x1f4cb6;
        var _0x11f3ce;
        _0x1992ce = _0x5292fc.lookupPath(_0xc2ab77, {
          parent: true
        });
        _0x1f4cb6 = _0x1992ce.node;
        _0x1992ce = _0x5292fc.lookupPath(_0x178048, {
          parent: true
        });
        _0x11f3ce = _0x1992ce.node;
        if (!_0x1f4cb6 || !_0x11f3ce) {
          throw new _0x5292fc.ErrnoError(44);
        }
        if (_0x1f4cb6.mount !== _0x11f3ce.mount) {
          throw new _0x5292fc.ErrnoError(75);
        }
        var _0x5dc1a6 = _0x5292fc.lookupNode(_0x1f4cb6, _0x365af3);
        var _0x4e8c81 = _0x59d0d7.relative(_0xc2ab77, _0x5471db);
        if (_0x4e8c81.charAt(0) !== ".") {
          throw new _0x5292fc.ErrnoError(28);
        }
        _0x4e8c81 = _0x59d0d7.relative(_0x178048, _0x3986df);
        if (_0x4e8c81.charAt(0) !== ".") {
          throw new _0x5292fc.ErrnoError(55);
        }
        var _0x3bf3c8;
        try {
          _0x3bf3c8 = _0x5292fc.lookupNode(_0x11f3ce, _0x3d112d);
        } catch (_0x23c195) {}
        if (_0x5dc1a6 === _0x3bf3c8) {
          return;
        }
        var _0x1db1d2 = _0x5292fc.isDir(_0x5dc1a6.mode);
        var _0x5bfc6a = _0x5292fc.mayDelete(_0x1f4cb6, _0x365af3, _0x1db1d2);
        if (_0x5bfc6a) {
          throw new _0x5292fc.ErrnoError(_0x5bfc6a);
        }
        _0x5bfc6a = _0x3bf3c8 ? _0x5292fc.mayDelete(_0x11f3ce, _0x3d112d, _0x1db1d2) : _0x5292fc.mayCreate(_0x11f3ce, _0x3d112d);
        if (_0x5bfc6a) {
          throw new _0x5292fc.ErrnoError(_0x5bfc6a);
        }
        if (!_0x1f4cb6.node_ops.rename) {
          throw new _0x5292fc.ErrnoError(63);
        }
        if (_0x5292fc.isMountpoint(_0x5dc1a6) || _0x3bf3c8 && _0x5292fc.isMountpoint(_0x3bf3c8)) {
          throw new _0x5292fc.ErrnoError(10);
        }
        if (_0x11f3ce !== _0x1f4cb6) {
          _0x5bfc6a = _0x5292fc.nodePermissions(_0x1f4cb6, "w");
          if (_0x5bfc6a) {
            throw new _0x5292fc.ErrnoError(_0x5bfc6a);
          }
        }
        _0x5292fc.hashRemoveNode(_0x5dc1a6);
        try {
          _0x1f4cb6.node_ops.rename(_0x5dc1a6, _0x11f3ce, _0x3d112d);
        } catch (_0x2af692) {
          throw _0x2af692;
        } finally {
          _0x5292fc.hashAddNode(_0x5dc1a6);
        }
      },
      rmdir: _0x29b91d => {
        var _0x958bf4 = _0x5292fc.lookupPath(_0x29b91d, {
          parent: true
        });
        var _0x42e152 = _0x958bf4.node;
        var _0xa20d1c = _0x369aa8.basename(_0x29b91d);
        var _0xce8598 = _0x5292fc.lookupNode(_0x42e152, _0xa20d1c);
        var _0x4b47ee = _0x5292fc.mayDelete(_0x42e152, _0xa20d1c, true);
        if (_0x4b47ee) {
          throw new _0x5292fc.ErrnoError(_0x4b47ee);
        }
        if (!_0x42e152.node_ops.rmdir) {
          throw new _0x5292fc.ErrnoError(63);
        }
        if (_0x5292fc.isMountpoint(_0xce8598)) {
          throw new _0x5292fc.ErrnoError(10);
        }
        _0x42e152.node_ops.rmdir(_0x42e152, _0xa20d1c);
        _0x5292fc.destroyNode(_0xce8598);
      },
      readdir: _0x516bdd => {
        var _0x2399ce = _0x5292fc.lookupPath(_0x516bdd, {
          follow: true
        });
        var _0x531eb4 = _0x2399ce.node;
        if (!_0x531eb4.node_ops.readdir) {
          throw new _0x5292fc.ErrnoError(54);
        }
        return _0x531eb4.node_ops.readdir(_0x531eb4);
      },
      unlink: _0x1c6b77 => {
        var _0x1f1bc4 = _0x5292fc.lookupPath(_0x1c6b77, {
          parent: true
        });
        var _0x1cca56 = _0x1f1bc4.node;
        if (!_0x1cca56) {
          throw new _0x5292fc.ErrnoError(44);
        }
        var _0x14cf50 = _0x369aa8.basename(_0x1c6b77);
        var _0x428e35 = _0x5292fc.lookupNode(_0x1cca56, _0x14cf50);
        var _0x3bf154 = _0x5292fc.mayDelete(_0x1cca56, _0x14cf50, false);
        if (_0x3bf154) {
          throw new _0x5292fc.ErrnoError(_0x3bf154);
        }
        if (!_0x1cca56.node_ops.unlink) {
          throw new _0x5292fc.ErrnoError(63);
        }
        if (_0x5292fc.isMountpoint(_0x428e35)) {
          throw new _0x5292fc.ErrnoError(10);
        }
        _0x1cca56.node_ops.unlink(_0x1cca56, _0x14cf50);
        _0x5292fc.destroyNode(_0x428e35);
      },
      readlink: _0x55bb3d => {
        var _0x2f4b71 = _0x5292fc.lookupPath(_0x55bb3d);
        var _0x317c80 = _0x2f4b71.node;
        if (!_0x317c80) {
          throw new _0x5292fc.ErrnoError(44);
        }
        if (!_0x317c80.node_ops.readlink) {
          throw new _0x5292fc.ErrnoError(28);
        }
        return _0x59d0d7.resolve(_0x5292fc.getPath(_0x317c80.parent), _0x317c80.node_ops.readlink(_0x317c80));
      },
      stat: (_0x519f06, _0x1990fe) => {
        var _0x17002a = _0x5292fc.lookupPath(_0x519f06, {
          follow: !_0x1990fe
        });
        var _0x152246 = _0x17002a.node;
        if (!_0x152246) {
          throw new _0x5292fc.ErrnoError(44);
        }
        if (!_0x152246.node_ops.getattr) {
          throw new _0x5292fc.ErrnoError(63);
        }
        return _0x152246.node_ops.getattr(_0x152246);
      },
      lstat: _0x144b57 => {
        return _0x5292fc.stat(_0x144b57, true);
      },
      chmod: (_0x592b08, _0x4d8f9a, _0x18a351) => {
        var _0x20c363;
        if (typeof _0x592b08 == "string") {
          var _0x261373 = _0x5292fc.lookupPath(_0x592b08, {
            follow: !_0x18a351
          });
          _0x20c363 = _0x261373.node;
        } else {
          _0x20c363 = _0x592b08;
        }
        if (!_0x20c363.node_ops.setattr) {
          throw new _0x5292fc.ErrnoError(63);
        }
        _0x20c363.node_ops.setattr(_0x20c363, {
          mode: _0x4d8f9a & 4095 | _0x20c363.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: (_0xedcfa7, _0x5db3a7) => {
        _0x5292fc.chmod(_0xedcfa7, _0x5db3a7, true);
      },
      fchmod: (_0x1ff09b, _0x12b6ca) => {
        var _0x40809b = _0x5292fc.getStream(_0x1ff09b);
        if (!_0x40809b) {
          throw new _0x5292fc.ErrnoError(8);
        }
        _0x5292fc.chmod(_0x40809b.node, _0x12b6ca);
      },
      chown: (_0x40c365, _0x5c85b8, _0x4987d5, _0x4ddb67) => {
        var _0x2447d8;
        if (typeof _0x40c365 == "string") {
          var _0xc59d5b = _0x5292fc.lookupPath(_0x40c365, {
            follow: !_0x4ddb67
          });
          _0x2447d8 = _0xc59d5b.node;
        } else {
          _0x2447d8 = _0x40c365;
        }
        if (!_0x2447d8.node_ops.setattr) {
          throw new _0x5292fc.ErrnoError(63);
        }
        _0x2447d8.node_ops.setattr(_0x2447d8, {
          timestamp: Date.now()
        });
      },
      lchown: (_0x212eb2, _0x55bd77, _0x193fdc) => {
        _0x5292fc.chown(_0x212eb2, _0x55bd77, _0x193fdc, true);
      },
      fchown: (_0x8426c8, _0x225f5a, _0x59963a) => {
        var _0x1c7ca5 = _0x5292fc.getStream(_0x8426c8);
        if (!_0x1c7ca5) {
          throw new _0x5292fc.ErrnoError(8);
        }
        _0x5292fc.chown(_0x1c7ca5.node, _0x225f5a, _0x59963a);
      },
      truncate: (_0x23fdd2, _0x2fc6cb) => {
        if (_0x2fc6cb < 0) {
          throw new _0x5292fc.ErrnoError(28);
        }
        var _0x57e51a;
        if (typeof _0x23fdd2 == "string") {
          var _0x2803cc = _0x5292fc.lookupPath(_0x23fdd2, {
            follow: true
          });
          _0x57e51a = _0x2803cc.node;
        } else {
          _0x57e51a = _0x23fdd2;
        }
        if (!_0x57e51a.node_ops.setattr) {
          throw new _0x5292fc.ErrnoError(63);
        }
        if (_0x5292fc.isDir(_0x57e51a.mode)) {
          throw new _0x5292fc.ErrnoError(31);
        }
        if (!_0x5292fc.isFile(_0x57e51a.mode)) {
          throw new _0x5292fc.ErrnoError(28);
        }
        var _0x1062b9 = _0x5292fc.nodePermissions(_0x57e51a, "w");
        if (_0x1062b9) {
          throw new _0x5292fc.ErrnoError(_0x1062b9);
        }
        _0x57e51a.node_ops.setattr(_0x57e51a, {
          size: _0x2fc6cb,
          timestamp: Date.now()
        });
      },
      ftruncate: (_0x563792, _0x1fd7e8) => {
        var _0x4d2c14 = _0x5292fc.getStream(_0x563792);
        if (!_0x4d2c14) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if ((_0x4d2c14.flags & 2097155) === 0) {
          throw new _0x5292fc.ErrnoError(28);
        }
        _0x5292fc.truncate(_0x4d2c14.node, _0x1fd7e8);
      },
      utime: (_0x41ad2a, _0x47b505, _0x1e71fd) => {
        var _0x4c3b9d = _0x5292fc.lookupPath(_0x41ad2a, {
          follow: true
        });
        var _0x5757db = _0x4c3b9d.node;
        _0x5757db.node_ops.setattr(_0x5757db, {
          timestamp: Math.max(_0x47b505, _0x1e71fd)
        });
      },
      open: (_0x20436d, _0x5aaca6, _0x5d853b, _0x3667ea, _0x4747b2) => {
        if (_0x20436d === "") {
          throw new _0x5292fc.ErrnoError(44);
        }
        _0x5aaca6 = typeof _0x5aaca6 == "string" ? _0x5292fc.modeStringToFlags(_0x5aaca6) : _0x5aaca6;
        _0x5d853b = typeof _0x5d853b == "undefined" ? 438 : _0x5d853b;
        if (_0x5aaca6 & 64) {
          _0x5d853b = _0x5d853b & 4095 | 32768;
        } else {
          _0x5d853b = 0;
        }
        var _0x3dc773;
        if (typeof _0x20436d == "object") {
          _0x3dc773 = _0x20436d;
        } else {
          _0x20436d = _0x369aa8.normalize(_0x20436d);
          try {
            var _0xf008b2 = _0x5292fc.lookupPath(_0x20436d, {
              follow: !(_0x5aaca6 & 131072)
            });
            _0x3dc773 = _0xf008b2.node;
          } catch (_0x547ffd) {}
        }
        var _0xc1c6d3 = false;
        if (_0x5aaca6 & 64) {
          if (_0x3dc773) {
            if (_0x5aaca6 & 128) {
              throw new _0x5292fc.ErrnoError(20);
            }
          } else {
            _0x3dc773 = _0x5292fc.mknod(_0x20436d, _0x5d853b, 0);
            _0xc1c6d3 = true;
          }
        }
        if (!_0x3dc773) {
          throw new _0x5292fc.ErrnoError(44);
        }
        if (_0x5292fc.isChrdev(_0x3dc773.mode)) {
          _0x5aaca6 &= ~512;
        }
        if (_0x5aaca6 & 65536 && !_0x5292fc.isDir(_0x3dc773.mode)) {
          throw new _0x5292fc.ErrnoError(54);
        }
        if (!_0xc1c6d3) {
          var _0x11e280 = _0x5292fc.mayOpen(_0x3dc773, _0x5aaca6);
          if (_0x11e280) {
            throw new _0x5292fc.ErrnoError(_0x11e280);
          }
        }
        if (_0x5aaca6 & 512) {
          _0x5292fc.truncate(_0x3dc773, 0);
        }
        _0x5aaca6 &= ~131712;
        var _0x5ac5d8 = _0x5292fc.createStream({
          node: _0x3dc773,
          path: _0x5292fc.getPath(_0x3dc773),
          flags: _0x5aaca6,
          seekable: true,
          position: 0,
          stream_ops: _0x3dc773.stream_ops,
          ungotten: [],
          error: false
        }, _0x3667ea, _0x4747b2);
        if (_0x5ac5d8.stream_ops.open) {
          _0x5ac5d8.stream_ops.open(_0x5ac5d8);
        }
        if (_0x17aa78.logReadFiles && !(_0x5aaca6 & 1)) {
          if (!_0x5292fc.readFiles) {
            _0x5292fc.readFiles = {};
          }
          if (!(_0x20436d in _0x5292fc.readFiles)) {
            _0x5292fc.readFiles[_0x20436d] = 1;
          }
        }
        return _0x5ac5d8;
      },
      close: _0x412b30 => {
        if (_0x5292fc.isClosed(_0x412b30)) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if (_0x412b30.getdents) {
          _0x412b30.getdents = null;
        }
        try {
          if (_0x412b30.stream_ops.close) {
            _0x412b30.stream_ops.close(_0x412b30);
          }
        } catch (_0x5cc5ff) {
          throw _0x5cc5ff;
        } finally {
          _0x5292fc.closeStream(_0x412b30.fd);
        }
        _0x412b30.fd = null;
      },
      isClosed: _0x1a7aff => {
        return _0x1a7aff.fd === null;
      },
      llseek: (_0x33f2ca, _0x2332fe, _0x30e8f1) => {
        if (_0x5292fc.isClosed(_0x33f2ca)) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if (!_0x33f2ca.seekable || !_0x33f2ca.stream_ops.llseek) {
          throw new _0x5292fc.ErrnoError(70);
        }
        if (_0x30e8f1 != 0 && _0x30e8f1 != 1 && _0x30e8f1 != 2) {
          throw new _0x5292fc.ErrnoError(28);
        }
        _0x33f2ca.position = _0x33f2ca.stream_ops.llseek(_0x33f2ca, _0x2332fe, _0x30e8f1);
        _0x33f2ca.ungotten = [];
        return _0x33f2ca.position;
      },
      read: (_0x46c192, _0x47d820, _0x30bdfd, _0x3e4989, _0x49d0aa) => {
        if (_0x3e4989 < 0 || _0x49d0aa < 0) {
          throw new _0x5292fc.ErrnoError(28);
        }
        if (_0x5292fc.isClosed(_0x46c192)) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if ((_0x46c192.flags & 2097155) === 1) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if (_0x5292fc.isDir(_0x46c192.node.mode)) {
          throw new _0x5292fc.ErrnoError(31);
        }
        if (!_0x46c192.stream_ops.read) {
          throw new _0x5292fc.ErrnoError(28);
        }
        var _0x345680 = typeof _0x49d0aa != "undefined";
        if (!_0x345680) {
          _0x49d0aa = _0x46c192.position;
        } else if (!_0x46c192.seekable) {
          throw new _0x5292fc.ErrnoError(70);
        }
        var _0x204744 = _0x46c192.stream_ops.read(_0x46c192, _0x47d820, _0x30bdfd, _0x3e4989, _0x49d0aa);
        if (!_0x345680) {
          _0x46c192.position += _0x204744;
        }
        return _0x204744;
      },
      write: (_0x341a7e, _0x4f0b4a, _0x22fe96, _0x4d27e7, _0x18a981, _0x9aeb30) => {
        if (_0x4d27e7 < 0 || _0x18a981 < 0) {
          throw new _0x5292fc.ErrnoError(28);
        }
        if (_0x5292fc.isClosed(_0x341a7e)) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if ((_0x341a7e.flags & 2097155) === 0) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if (_0x5292fc.isDir(_0x341a7e.node.mode)) {
          throw new _0x5292fc.ErrnoError(31);
        }
        if (!_0x341a7e.stream_ops.write) {
          throw new _0x5292fc.ErrnoError(28);
        }
        if (_0x341a7e.seekable && _0x341a7e.flags & 1024) {
          _0x5292fc.llseek(_0x341a7e, 0, 2);
        }
        var _0x154f3c = typeof _0x18a981 != "undefined";
        if (!_0x154f3c) {
          _0x18a981 = _0x341a7e.position;
        } else if (!_0x341a7e.seekable) {
          throw new _0x5292fc.ErrnoError(70);
        }
        var _0x181cb2 = _0x341a7e.stream_ops.write(_0x341a7e, _0x4f0b4a, _0x22fe96, _0x4d27e7, _0x18a981, _0x9aeb30);
        if (!_0x154f3c) {
          _0x341a7e.position += _0x181cb2;
        }
        return _0x181cb2;
      },
      allocate: (_0x434b4f, _0x449898, _0x5ebd11) => {
        if (_0x5292fc.isClosed(_0x434b4f)) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if (_0x449898 < 0 || _0x5ebd11 <= 0) {
          throw new _0x5292fc.ErrnoError(28);
        }
        if ((_0x434b4f.flags & 2097155) === 0) {
          throw new _0x5292fc.ErrnoError(8);
        }
        if (!_0x5292fc.isFile(_0x434b4f.node.mode) && !_0x5292fc.isDir(_0x434b4f.node.mode)) {
          throw new _0x5292fc.ErrnoError(43);
        }
        if (!_0x434b4f.stream_ops.allocate) {
          throw new _0x5292fc.ErrnoError(138);
        }
        _0x434b4f.stream_ops.allocate(_0x434b4f, _0x449898, _0x5ebd11);
      },
      mmap: (_0x3dd4df, _0x3fcda1, _0xe3a9ed, _0x598ab2, _0x3e4f21, _0x4cc49f) => {
        if ((_0x3e4f21 & 2) !== 0 && (_0x4cc49f & 2) === 0 && (_0x3dd4df.flags & 2097155) !== 2) {
          throw new _0x5292fc.ErrnoError(2);
        }
        if ((_0x3dd4df.flags & 2097155) === 1) {
          throw new _0x5292fc.ErrnoError(2);
        }
        if (!_0x3dd4df.stream_ops.mmap) {
          throw new _0x5292fc.ErrnoError(43);
        }
        return _0x3dd4df.stream_ops.mmap(_0x3dd4df, _0x3fcda1, _0xe3a9ed, _0x598ab2, _0x3e4f21, _0x4cc49f);
      },
      msync: (_0xa600c1, _0x51a98f, _0xda7127, _0x345647, _0x12aefd) => {
        if (!_0xa600c1 || !_0xa600c1.stream_ops.msync) {
          return 0;
        }
        return _0xa600c1.stream_ops.msync(_0xa600c1, _0x51a98f, _0xda7127, _0x345647, _0x12aefd);
      },
      munmap: _0x5dfa9f => 0,
      ioctl: (_0x27cb58, _0x268ab9, _0x58a92f) => {
        if (!_0x27cb58.stream_ops.ioctl) {
          throw new _0x5292fc.ErrnoError(59);
        }
        return _0x27cb58.stream_ops.ioctl(_0x27cb58, _0x268ab9, _0x58a92f);
      },
      readFile: (_0x2fbc71, _0x2fee71 = {}) => {
        _0x2fee71.flags = _0x2fee71.flags || 0;
        _0x2fee71.encoding = _0x2fee71.encoding || "binary";
        if (_0x2fee71.encoding !== "utf8" && _0x2fee71.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x2fee71.encoding + "\"");
        }
        var _0xe70eeb;
        var _0x1a0c78 = _0x5292fc.open(_0x2fbc71, _0x2fee71.flags);
        var _0x808dd7 = _0x5292fc.stat(_0x2fbc71);
        var _0x2785d3 = _0x808dd7.size;
        var _0x3d5f99 = new Uint8Array(_0x2785d3);
        _0x5292fc.read(_0x1a0c78, _0x3d5f99, 0, _0x2785d3, 0);
        if (_0x2fee71.encoding === "utf8") {
          _0xe70eeb = _0x29c7fe(_0x3d5f99, 0);
        } else if (_0x2fee71.encoding === "binary") {
          _0xe70eeb = _0x3d5f99;
        }
        _0x5292fc.close(_0x1a0c78);
        return _0xe70eeb;
      },
      writeFile: (_0x268e8c, _0x4d4c0e, _0x5ade74 = {}) => {
        _0x5ade74.flags = _0x5ade74.flags || 577;
        var _0x11c158 = _0x5292fc.open(_0x268e8c, _0x5ade74.flags, _0x5ade74.mode);
        if (typeof _0x4d4c0e == "string") {
          var _0x2c73ef = new Uint8Array(_0xa3918a(_0x4d4c0e) + 1);
          var _0x42900d = _0x3ea981(_0x4d4c0e, _0x2c73ef, 0, _0x2c73ef.length);
          _0x5292fc.write(_0x11c158, _0x2c73ef, 0, _0x42900d, undefined, _0x5ade74.canOwn);
        } else if (ArrayBuffer.isView(_0x4d4c0e)) {
          _0x5292fc.write(_0x11c158, _0x4d4c0e, 0, _0x4d4c0e.byteLength, undefined, _0x5ade74.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        _0x5292fc.close(_0x11c158);
      },
      cwd: () => _0x5292fc.currentPath,
      chdir: _0x146255 => {
        var _0x36014e = _0x5292fc.lookupPath(_0x146255, {
          follow: true
        });
        if (_0x36014e.node === null) {
          throw new _0x5292fc.ErrnoError(44);
        }
        if (!_0x5292fc.isDir(_0x36014e.node.mode)) {
          throw new _0x5292fc.ErrnoError(54);
        }
        var _0xb3b56f = _0x5292fc.nodePermissions(_0x36014e.node, "x");
        if (_0xb3b56f) {
          throw new _0x5292fc.ErrnoError(_0xb3b56f);
        }
        _0x5292fc.currentPath = _0x36014e.path;
      },
      createDefaultDirectories: () => {
        _0x5292fc.mkdir("/tmp");
        _0x5292fc.mkdir("/home");
        _0x5292fc.mkdir("/home/web_user");
      },
      createDefaultDevices: () => {
        _0x5292fc.mkdir("/dev");
        _0x5292fc.registerDevice(_0x5292fc.makedev(1, 3), {
          read: () => 0,
          write: (_0x172a6b, _0x1be819, _0x2715a7, _0x47026d, _0x142503) => _0x47026d
        });
        _0x5292fc.mkdev("/dev/null", _0x5292fc.makedev(1, 3));
        _0x496db8.register(_0x5292fc.makedev(5, 0), _0x496db8.default_tty_ops);
        _0x496db8.register(_0x5292fc.makedev(6, 0), _0x496db8.default_tty1_ops);
        _0x5292fc.mkdev("/dev/tty", _0x5292fc.makedev(5, 0));
        _0x5292fc.mkdev("/dev/tty1", _0x5292fc.makedev(6, 0));
        var _0x14a040 = _0x4bdf86();
        _0x5292fc.createDevice("/dev", "random", _0x14a040);
        _0x5292fc.createDevice("/dev", "urandom", _0x14a040);
        _0x5292fc.mkdir("/dev/shm");
        _0x5292fc.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: () => {
        _0x5292fc.mkdir("/proc");
        var _0x43c8f7 = _0x5292fc.mkdir("/proc/self");
        _0x5292fc.mkdir("/proc/self/fd");
        _0x5292fc.mount({
          mount: () => {
            var _0x74bd8e = _0x5292fc.createNode(_0x43c8f7, "fd", 16895, 73);
            _0x74bd8e.node_ops = {
              lookup: (_0x421a7d, _0x1580cb) => {
                var _0x5e5e31 = +_0x1580cb;
                var _0x3fc8ef = _0x5292fc.getStream(_0x5e5e31);
                if (!_0x3fc8ef) {
                  throw new _0x5292fc.ErrnoError(8);
                }
                var _0x2d78d3 = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => _0x3fc8ef.path
                  }
                };
                _0x2d78d3.parent = _0x2d78d3;
                return _0x2d78d3;
              }
            };
            return _0x74bd8e;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: () => {
        if (_0x17aa78.stdin) {
          _0x5292fc.createDevice("/dev", "stdin", _0x17aa78.stdin);
        } else {
          _0x5292fc.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0x17aa78.stdout) {
          _0x5292fc.createDevice("/dev", "stdout", null, _0x17aa78.stdout);
        } else {
          _0x5292fc.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0x17aa78.stderr) {
          _0x5292fc.createDevice("/dev", "stderr", null, _0x17aa78.stderr);
        } else {
          _0x5292fc.symlink("/dev/tty1", "/dev/stderr");
        }
        var _0x9cd20b = _0x5292fc.open("/dev/stdin", 0);
        var _0x253332 = _0x5292fc.open("/dev/stdout", 1);
        var _0x26d114 = _0x5292fc.open("/dev/stderr", 1);
      },
      ensureErrnoError: () => {
        if (_0x5292fc.ErrnoError) {
          return;
        }
        _0x5292fc.ErrnoError = function _0x3523c2(_0x30852b, _0x5c007e) {
          this.node = _0x5c007e;
          this.setErrno = function (_0x35acc1) {
            this.errno = _0x35acc1;
          };
          this.setErrno(_0x30852b);
          this.message = "FS error";
        };
        _0x5292fc.ErrnoError.prototype = new Error();
        _0x5292fc.ErrnoError.prototype.constructor = _0x5292fc.ErrnoError;
        [44].forEach(_0x54dba3 => {
          _0x5292fc.genericErrors[_0x54dba3] = new _0x5292fc.ErrnoError(_0x54dba3);
          _0x5292fc.genericErrors[_0x54dba3].stack = "<generic error, no stack>";
        });
      },
      staticInit: () => {
        _0x5292fc.ensureErrnoError();
        _0x5292fc.nameTable = new Array(4096);
        _0x5292fc.mount(_0x30c139, {}, "/");
        _0x5292fc.createDefaultDirectories();
        _0x5292fc.createDefaultDevices();
        _0x5292fc.createSpecialDirectories();
        _0x5292fc.filesystems = {
          MEMFS: _0x30c139,
          IDBFS: _0x4fc026
        };
      },
      init: (_0x2f626e, _0x325189, _0x37089d) => {
        _0x5292fc.init.initialized = true;
        _0x5292fc.ensureErrnoError();
        _0x17aa78.stdin = _0x2f626e || _0x17aa78.stdin;
        _0x17aa78.stdout = _0x325189 || _0x17aa78.stdout;
        _0x17aa78.stderr = _0x37089d || _0x17aa78.stderr;
        _0x5292fc.createStandardStreams();
      },
      quit: () => {
        _0x5292fc.init.initialized = false;
        for (var _0x39d868 = 0; _0x39d868 < _0x5292fc.streams.length; _0x39d868++) {
          var _0x27118e = _0x5292fc.streams[_0x39d868];
          if (!_0x27118e) {
            continue;
          }
          _0x5292fc.close(_0x27118e);
        }
      },
      getMode: (_0x668546, _0x42efe5) => {
        var _0x43e4c1 = 0;
        if (_0x668546) {
          _0x43e4c1 |= 365;
        }
        if (_0x42efe5) {
          _0x43e4c1 |= 146;
        }
        return _0x43e4c1;
      },
      findObject: (_0x334e92, _0xd7b687) => {
        var _0x2cc92a = _0x5292fc.analyzePath(_0x334e92, _0xd7b687);
        if (_0x2cc92a.exists) {
          return _0x2cc92a.object;
        } else {
          return null;
        }
      },
      analyzePath: (_0x3614e9, _0x424e8c) => {
        try {
          var _0x59aa65 = _0x5292fc.lookupPath(_0x3614e9, {
            follow: !_0x424e8c
          });
          _0x3614e9 = _0x59aa65.path;
        } catch (_0x5b523c) {}
        var _0x5e1711 = {
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
          var _0x59aa65 = _0x5292fc.lookupPath(_0x3614e9, {
            parent: true
          });
          _0x5e1711.parentExists = true;
          _0x5e1711.parentPath = _0x59aa65.path;
          _0x5e1711.parentObject = _0x59aa65.node;
          _0x5e1711.name = _0x369aa8.basename(_0x3614e9);
          _0x59aa65 = _0x5292fc.lookupPath(_0x3614e9, {
            follow: !_0x424e8c
          });
          _0x5e1711.exists = true;
          _0x5e1711.path = _0x59aa65.path;
          _0x5e1711.object = _0x59aa65.node;
          _0x5e1711.name = _0x59aa65.node.name;
          _0x5e1711.isRoot = _0x59aa65.path === "/";
        } catch (_0xbe1c44) {
          _0x5e1711.error = _0xbe1c44.errno;
        }
        return _0x5e1711;
      },
      createPath: (_0x43d427, _0x3ed687, _0x4035bc, _0x4e1d28) => {
        _0x43d427 = typeof _0x43d427 == "string" ? _0x43d427 : _0x5292fc.getPath(_0x43d427);
        var _0x4a01a8 = _0x3ed687.split("/").reverse();
        while (_0x4a01a8.length) {
          var _0x439072 = _0x4a01a8.pop();
          if (!_0x439072) {
            continue;
          }
          var _0x22d558 = _0x369aa8.join2(_0x43d427, _0x439072);
          try {
            _0x5292fc.mkdir(_0x22d558);
          } catch (_0x5a4062) {}
          _0x43d427 = _0x22d558;
        }
        return _0x22d558;
      },
      createFile: (_0x38e8e5, _0x3c36a8, _0x20ac6c, _0xc7883a, _0x40380a) => {
        var _0x173b5a = _0x369aa8.join2(typeof _0x38e8e5 == "string" ? _0x38e8e5 : _0x5292fc.getPath(_0x38e8e5), _0x3c36a8);
        var _0x2e4a6a = _0x5292fc.getMode(_0xc7883a, _0x40380a);
        return _0x5292fc.create(_0x173b5a, _0x2e4a6a);
      },
      createDataFile: (_0x5d27a2, _0x16a2c0, _0x185e91, _0x52858c, _0x1ff40a, _0x12ca5a) => {
        var _0x64a230 = _0x16a2c0;
        if (_0x5d27a2) {
          _0x5d27a2 = typeof _0x5d27a2 == "string" ? _0x5d27a2 : _0x5292fc.getPath(_0x5d27a2);
          _0x64a230 = _0x16a2c0 ? _0x369aa8.join2(_0x5d27a2, _0x16a2c0) : _0x5d27a2;
        }
        var _0x3f61c3 = _0x5292fc.getMode(_0x52858c, _0x1ff40a);
        var _0x221ead = _0x5292fc.create(_0x64a230, _0x3f61c3);
        if (_0x185e91) {
          if (typeof _0x185e91 == "string") {
            var _0x3e9d0d = new Array(_0x185e91.length);
            for (var _0x44aaac = 0, _0x35edb5 = _0x185e91.length; _0x44aaac < _0x35edb5; ++_0x44aaac) {
              _0x3e9d0d[_0x44aaac] = _0x185e91.charCodeAt(_0x44aaac);
            }
            _0x185e91 = _0x3e9d0d;
          }
          _0x5292fc.chmod(_0x221ead, _0x3f61c3 | 146);
          var _0x2f2321 = _0x5292fc.open(_0x221ead, 577);
          _0x5292fc.write(_0x2f2321, _0x185e91, 0, _0x185e91.length, 0, _0x12ca5a);
          _0x5292fc.close(_0x2f2321);
          _0x5292fc.chmod(_0x221ead, _0x3f61c3);
        }
        return _0x221ead;
      },
      createDevice: (_0x847eaf, _0x425ac1, _0x5a78aa, _0x4e974e) => {
        var _0x2c08c4 = _0x369aa8.join2(typeof _0x847eaf == "string" ? _0x847eaf : _0x5292fc.getPath(_0x847eaf), _0x425ac1);
        var _0x2c21b1 = _0x5292fc.getMode(!!_0x5a78aa, !!_0x4e974e);
        if (!_0x5292fc.createDevice.major) {
          _0x5292fc.createDevice.major = 64;
        }
        var _0x257af3 = _0x5292fc.makedev(_0x5292fc.createDevice.major++, 0);
        _0x5292fc.registerDevice(_0x257af3, {
          open: _0x5ce061 => {
            _0x5ce061.seekable = false;
          },
          close: _0x2a5d85 => {
            if (_0x4e974e && _0x4e974e.buffer && _0x4e974e.buffer.length) {
              _0x4e974e(10);
            }
          },
          read: (_0x40f9ac, _0x4f72d7, _0x57b25d, _0x974124, _0xb084de) => {
            var _0xe2ca37 = 0;
            for (var _0x189e7a = 0; _0x189e7a < _0x974124; _0x189e7a++) {
              var _0x399e30;
              try {
                _0x399e30 = _0x5a78aa();
              } catch (_0x2ccf32) {
                throw new _0x5292fc.ErrnoError(29);
              }
              if (_0x399e30 === undefined && _0xe2ca37 === 0) {
                throw new _0x5292fc.ErrnoError(6);
              }
              if (_0x399e30 === null || _0x399e30 === undefined) {
                break;
              }
              _0xe2ca37++;
              _0x4f72d7[_0x57b25d + _0x189e7a] = _0x399e30;
            }
            if (_0xe2ca37) {
              _0x40f9ac.node.timestamp = Date.now();
            }
            return _0xe2ca37;
          },
          write: (_0x5578a8, _0x40df86, _0x6d4da, _0x2148c3, _0x1a3a4e) => {
            for (var _0x4ac425 = 0; _0x4ac425 < _0x2148c3; _0x4ac425++) {
              try {
                _0x4e974e(_0x40df86[_0x6d4da + _0x4ac425]);
              } catch (_0xaccb4d) {
                throw new _0x5292fc.ErrnoError(29);
              }
            }
            if (_0x2148c3) {
              _0x5578a8.node.timestamp = Date.now();
            }
            return _0x4ac425;
          }
        });
        return _0x5292fc.mkdev(_0x2c08c4, _0x2c21b1, _0x257af3);
      },
      forceLoadFile: _0x2bfb80 => {
        if (_0x2bfb80.isDevice || _0x2bfb80.isFolder || _0x2bfb80.link || _0x2bfb80.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (_0x316c58) {
          try {
            _0x2bfb80.contents = _0x198eb8(_0x316c58(_0x2bfb80.url), true);
            _0x2bfb80.usedBytes = _0x2bfb80.contents.length;
          } catch (_0x5e9cce) {
            throw new _0x5292fc.ErrnoError(29);
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      createLazyFile: (_0x350a87, _0x31577e, _0x2c2550, _0x54ab30, _0x3df5a9) => {
        function _0x1a83b7() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x1a83b7.prototype.get = function _0x5ae9bd(_0x163951) {
          if (_0x163951 > this.length - 1 || _0x163951 < 0) {
            return undefined;
          }
          var _0x1a34e8 = _0x163951 % this.chunkSize;
          var _0x281415 = _0x163951 / this.chunkSize | 0;
          return this.getter(_0x281415)[_0x1a34e8];
        };
        _0x1a83b7.prototype.setDataGetter = function _0x2d52ae(_0x489ef6) {
          this.getter = _0x489ef6;
        };
        _0x1a83b7.prototype.cacheLength = function _0x70168f() {
          var _0x5b559a = new XMLHttpRequest();
          _0x5b559a.open("HEAD", _0x2c2550, false);
          _0x5b559a.send(null);
          if ((!(_0x5b559a.status >= 200) || !(_0x5b559a.status < 300)) && _0x5b559a.status !== 304) {
            throw new Error("Couldn't load " + _0x2c2550 + ". Status: " + _0x5b559a.status);
          }
          var _0x3318c3 = Number(_0x5b559a.getResponseHeader("Content-length"));
          var _0x19cba4;
          var _0x514b6a = (_0x19cba4 = _0x5b559a.getResponseHeader("Accept-Ranges")) && _0x19cba4 === "bytes";
          var _0x2d598c = (_0x19cba4 = _0x5b559a.getResponseHeader("Content-Encoding")) && _0x19cba4 === "gzip";
          var _0x3e5d9c = 1048576;
          if (!_0x514b6a) {
            _0x3e5d9c = _0x3318c3;
          }
          var _0x32f386 = (_0x140e59, _0x392f79) => {
            if (_0x140e59 > _0x392f79) {
              throw new Error("invalid range (" + _0x140e59 + ", " + _0x392f79 + ") or no bytes requested!");
            }
            if (_0x392f79 > _0x3318c3 - 1) {
              throw new Error("only " + _0x3318c3 + " bytes available! programmer error!");
            }
            var _0x11deb4 = new XMLHttpRequest();
            _0x11deb4.open("GET", _0x2c2550, false);
            if (_0x3318c3 !== _0x3e5d9c) {
              _0x11deb4.setRequestHeader("Range", "bytes=" + _0x140e59 + "-" + _0x392f79);
            }
            _0x11deb4.responseType = "arraybuffer";
            if (_0x11deb4.overrideMimeType) {
              _0x11deb4.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x11deb4.send(null);
            if ((!(_0x11deb4.status >= 200) || !(_0x11deb4.status < 300)) && _0x11deb4.status !== 304) {
              throw new Error("Couldn't load " + _0x2c2550 + ". Status: " + _0x11deb4.status);
            }
            if (_0x11deb4.response !== undefined) {
              return new Uint8Array(_0x11deb4.response || []);
            } else {
              return _0x198eb8(_0x11deb4.responseText || "", true);
            }
          };
          var _0x3706b6 = this;
          _0x3706b6.setDataGetter(_0x2b909c => {
            var _0x17b281 = _0x2b909c * _0x3e5d9c;
            var _0x3f22d5 = (_0x2b909c + 1) * _0x3e5d9c - 1;
            _0x3f22d5 = Math.min(_0x3f22d5, _0x3318c3 - 1);
            if (typeof _0x3706b6.chunks[_0x2b909c] == "undefined") {
              _0x3706b6.chunks[_0x2b909c] = _0x32f386(_0x17b281, _0x3f22d5);
            }
            if (typeof _0x3706b6.chunks[_0x2b909c] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x3706b6.chunks[_0x2b909c];
          });
          if (_0x2d598c || !_0x3318c3) {
            _0x3e5d9c = _0x3318c3 = 1;
            _0x3318c3 = this.getter(0).length;
            _0x3e5d9c = _0x3318c3;
            _0x329315("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x3318c3;
          this._chunkSize = _0x3e5d9c;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x186d8a) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x253bf4 = new _0x1a83b7();
          Object.defineProperties(_0x253bf4, {
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
          var _0x5e8da3 = {
            isDevice: false,
            contents: _0x253bf4
          };
        } else {
          var _0x5e8da3 = {
            isDevice: false,
            url: _0x2c2550
          };
        }
        var _0x704084 = _0x5292fc.createFile(_0x350a87, _0x31577e, _0x5e8da3, _0x54ab30, _0x3df5a9);
        if (_0x5e8da3.contents) {
          _0x704084.contents = _0x5e8da3.contents;
        } else if (_0x5e8da3.url) {
          _0x704084.contents = null;
          _0x704084.url = _0x5e8da3.url;
        }
        Object.defineProperties(_0x704084, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            }
          }
        });
        var _0x326403 = {};
        var _0xe13f28 = Object.keys(_0x704084.stream_ops);
        _0xe13f28.forEach(_0x1873bb => {
          var _0x4e6d87 = _0x704084.stream_ops[_0x1873bb];
          _0x326403[_0x1873bb] = function _0x12c969() {
            _0x5292fc.forceLoadFile(_0x704084);
            return _0x4e6d87.apply(null, arguments);
          };
        });
        _0x326403.read = (_0x4fe289, _0x6e259, _0x39d2b3, _0x544d93, _0xcce3de) => {
          _0x5292fc.forceLoadFile(_0x704084);
          var _0x26aa43 = _0x4fe289.node.contents;
          if (_0xcce3de >= _0x26aa43.length) {
            return 0;
          }
          var _0x5c73a8 = Math.min(_0x26aa43.length - _0xcce3de, _0x544d93);
          if (_0x26aa43.slice) {
            for (var _0x22eeb1 = 0; _0x22eeb1 < _0x5c73a8; _0x22eeb1++) {
              _0x6e259[_0x39d2b3 + _0x22eeb1] = _0x26aa43[_0xcce3de + _0x22eeb1];
            }
          } else {
            for (var _0x22eeb1 = 0; _0x22eeb1 < _0x5c73a8; _0x22eeb1++) {
              _0x6e259[_0x39d2b3 + _0x22eeb1] = _0x26aa43.get(_0xcce3de + _0x22eeb1);
            }
          }
          return _0x5c73a8;
        };
        _0x704084.stream_ops = _0x326403;
        return _0x704084;
      },
      createPreloadedFile: (_0x3e248c, _0x5c4bd4, _0x157dc5, _0x5d87ee, _0x3a1428, _0x575844, _0x1f96b0, _0x496656, _0x380218, _0x785cac) => {
        var _0x374c4d = _0x5c4bd4 ? _0x59d0d7.resolve(_0x369aa8.join2(_0x3e248c, _0x5c4bd4)) : _0x3e248c;
        var _0x1ec5bf = _0x454e79("cp " + _0x374c4d);
        function _0x1a4b58(_0x1615df) {
          function _0x36019c(_0x2e285f) {
            if (_0x785cac) {
              _0x785cac();
            }
            if (!_0x496656) {
              _0x5292fc.createDataFile(_0x3e248c, _0x5c4bd4, _0x2e285f, _0x5d87ee, _0x3a1428, _0x380218);
            }
            if (_0x575844) {
              _0x575844();
            }
            _0x5057aa(_0x1ec5bf);
          }
          if (_0x2a402d.handledByPreloadPlugin(_0x1615df, _0x374c4d, _0x36019c, () => {
            if (_0x1f96b0) {
              _0x1f96b0();
            }
            _0x5057aa(_0x1ec5bf);
          })) {
            return;
          }
          _0x36019c(_0x1615df);
        }
        _0x3cd447(_0x1ec5bf);
        if (typeof _0x157dc5 == "string") {
          _0x52ffaf(_0x157dc5, _0x41bc36 => _0x1a4b58(_0x41bc36), _0x1f96b0);
        } else {
          _0x1a4b58(_0x157dc5);
        }
      },
      indexedDB: () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: () => {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: (_0x1fb70e, _0x45e3cd, _0x29b0ba) => {
        _0x45e3cd = _0x45e3cd || (() => {});
        _0x29b0ba = _0x29b0ba || (() => {});
        var _0x525014 = _0x5292fc.indexedDB();
        try {
          var _0x4f55d7 = _0x525014.open(_0x5292fc.DB_NAME(), _0x5292fc.DB_VERSION);
        } catch (_0x5901f8) {
          return _0x29b0ba(_0x5901f8);
        }
        _0x4f55d7.onupgradeneeded = () => {
          _0x329315("creating db");
          var _0x4cb5e8 = _0x4f55d7.result;
          _0x4cb5e8.createObjectStore(_0x5292fc.DB_STORE_NAME);
        };
        _0x4f55d7.onsuccess = () => {
          var _0x1ce1c6 = _0x4f55d7.result;
          var _0x4b8ccc = _0x1ce1c6.transaction([_0x5292fc.DB_STORE_NAME], "readwrite");
          var _0x51d626 = _0x4b8ccc.objectStore(_0x5292fc.DB_STORE_NAME);
          var _0x186a8c = 0;
          var _0x54efba = 0;
          var _0x604529 = _0x1fb70e.length;
          function _0xe9b6f3() {
            if (_0x54efba == 0) {
              _0x45e3cd();
            } else {
              _0x29b0ba();
            }
          }
          _0x1fb70e.forEach(_0x3d8c97 => {
            var _0x5c8a8f = _0x51d626.put(_0x5292fc.analyzePath(_0x3d8c97).object.contents, _0x3d8c97);
            _0x5c8a8f.onsuccess = () => {
              _0x186a8c++;
              if (_0x186a8c + _0x54efba == _0x604529) {
                _0xe9b6f3();
              }
            };
            _0x5c8a8f.onerror = () => {
              _0x54efba++;
              if (_0x186a8c + _0x54efba == _0x604529) {
                _0xe9b6f3();
              }
            };
          });
          _0x4b8ccc.onerror = _0x29b0ba;
        };
        _0x4f55d7.onerror = _0x29b0ba;
      },
      loadFilesFromDB: (_0x1c5837, _0x2dd049, _0xa4b57e) => {
        _0x2dd049 = _0x2dd049 || (() => {});
        _0xa4b57e = _0xa4b57e || (() => {});
        var _0x4c8f7e = _0x5292fc.indexedDB();
        try {
          var _0x2fd4a4 = _0x4c8f7e.open(_0x5292fc.DB_NAME(), _0x5292fc.DB_VERSION);
        } catch (_0x38ebed) {
          return _0xa4b57e(_0x38ebed);
        }
        _0x2fd4a4.onupgradeneeded = _0xa4b57e;
        _0x2fd4a4.onsuccess = () => {
          var _0x556ff4 = _0x2fd4a4.result;
          try {
            var _0x2c4046 = _0x556ff4.transaction([_0x5292fc.DB_STORE_NAME], "readonly");
          } catch (_0x44c1bc) {
            _0xa4b57e(_0x44c1bc);
            return;
          }
          var _0x4db238 = _0x2c4046.objectStore(_0x5292fc.DB_STORE_NAME);
          var _0x3d96a6 = 0;
          var _0xc00e2e = 0;
          var _0x529110 = _0x1c5837.length;
          function _0x30ae86() {
            if (_0xc00e2e == 0) {
              _0x2dd049();
            } else {
              _0xa4b57e();
            }
          }
          _0x1c5837.forEach(_0x53dc60 => {
            var _0x4edffc = _0x4db238.get(_0x53dc60);
            _0x4edffc.onsuccess = () => {
              if (_0x5292fc.analyzePath(_0x53dc60).exists) {
                _0x5292fc.unlink(_0x53dc60);
              }
              _0x5292fc.createDataFile(_0x369aa8.dirname(_0x53dc60), _0x369aa8.basename(_0x53dc60), _0x4edffc.result, true, true, true);
              _0x3d96a6++;
              if (_0x3d96a6 + _0xc00e2e == _0x529110) {
                _0x30ae86();
              }
            };
            _0x4edffc.onerror = () => {
              _0xc00e2e++;
              if (_0x3d96a6 + _0xc00e2e == _0x529110) {
                _0x30ae86();
              }
            };
          });
          _0x2c4046.onerror = _0xa4b57e;
        };
        _0x2fd4a4.onerror = _0xa4b57e;
      }
    };
    var _0x4203c0 = {
      DEFAULT_POLLMASK: 5,
      calculateAt: function (_0x62e5fe, _0x280659, _0x2cb651) {
        if (_0x280659[0] === "/") {
          return _0x280659;
        }
        var _0x2c9858;
        if (_0x62e5fe === -100) {
          _0x2c9858 = _0x5292fc.cwd();
        } else {
          var _0x7c7647 = _0x5292fc.getStream(_0x62e5fe);
          if (!_0x7c7647) {
            throw new _0x5292fc.ErrnoError(8);
          }
          _0x2c9858 = _0x7c7647.path;
        }
        if (_0x280659.length == 0) {
          if (!_0x2cb651) {
            throw new _0x5292fc.ErrnoError(44);
          }
          return _0x2c9858;
        }
        return _0x369aa8.join2(_0x2c9858, _0x280659);
      },
      doStat: function (_0xfc87cf, _0x518a78, _0x2162e4) {
        try {
          var _0x7bc872 = _0xfc87cf(_0x518a78);
        } catch (_0x20470e) {
          if (_0x20470e && _0x20470e.node && _0x369aa8.normalize(_0x518a78) !== _0x369aa8.normalize(_0x5292fc.getPath(_0x20470e.node))) {
            return -54;
          }
          throw _0x20470e;
        }
        _0x576263[_0x2162e4 >> 2] = _0x7bc872.dev;
        _0x576263[_0x2162e4 + 4 >> 2] = 0;
        _0x576263[_0x2162e4 + 8 >> 2] = _0x7bc872.ino;
        _0x576263[_0x2162e4 + 12 >> 2] = _0x7bc872.mode;
        _0x576263[_0x2162e4 + 16 >> 2] = _0x7bc872.nlink;
        _0x576263[_0x2162e4 + 20 >> 2] = _0x7bc872.uid;
        _0x576263[_0x2162e4 + 24 >> 2] = _0x7bc872.gid;
        _0x576263[_0x2162e4 + 28 >> 2] = _0x7bc872.rdev;
        _0x576263[_0x2162e4 + 32 >> 2] = 0;
        _0x34cc1 = [_0x7bc872.size >>> 0, (_0x161da0 = _0x7bc872.size, +Math.abs(_0x161da0) >= 1 ? _0x161da0 > 0 ? (Math.min(+Math.floor(_0x161da0 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x161da0 - +(~~_0x161da0 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x576263[_0x2162e4 + 40 >> 2] = _0x34cc1[0];
        _0x576263[_0x2162e4 + 44 >> 2] = _0x34cc1[1];
        _0x576263[_0x2162e4 + 48 >> 2] = 4096;
        _0x576263[_0x2162e4 + 52 >> 2] = _0x7bc872.blocks;
        _0x576263[_0x2162e4 + 56 >> 2] = _0x7bc872.atime.getTime() / 1000 | 0;
        _0x576263[_0x2162e4 + 60 >> 2] = 0;
        _0x576263[_0x2162e4 + 64 >> 2] = _0x7bc872.mtime.getTime() / 1000 | 0;
        _0x576263[_0x2162e4 + 68 >> 2] = 0;
        _0x576263[_0x2162e4 + 72 >> 2] = _0x7bc872.ctime.getTime() / 1000 | 0;
        _0x576263[_0x2162e4 + 76 >> 2] = 0;
        _0x34cc1 = [_0x7bc872.ino >>> 0, (_0x161da0 = _0x7bc872.ino, +Math.abs(_0x161da0) >= 1 ? _0x161da0 > 0 ? (Math.min(+Math.floor(_0x161da0 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x161da0 - +(~~_0x161da0 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x576263[_0x2162e4 + 80 >> 2] = _0x34cc1[0];
        _0x576263[_0x2162e4 + 84 >> 2] = _0x34cc1[1];
        return 0;
      },
      doMsync: function (_0x37d846, _0x21f828, _0x2071e2, _0x3b500e, _0xdcfb83) {
        var _0x5438b3 = _0x59122e.slice(_0x37d846, _0x37d846 + _0x2071e2);
        _0x5292fc.msync(_0x21f828, _0x5438b3, _0xdcfb83, _0x2071e2, _0x3b500e);
      },
      doMkdir: function (_0xcddcb3, _0x5a07d6) {
        _0xcddcb3 = _0x369aa8.normalize(_0xcddcb3);
        if (_0xcddcb3[_0xcddcb3.length - 1] === "/") {
          _0xcddcb3 = _0xcddcb3.substr(0, _0xcddcb3.length - 1);
        }
        _0x5292fc.mkdir(_0xcddcb3, _0x5a07d6, 0);
        return 0;
      },
      doMknod: function (_0x343583, _0x16c729, _0x3b35ff) {
        switch (_0x16c729 & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        _0x5292fc.mknod(_0x343583, _0x16c729, _0x3b35ff);
        return 0;
      },
      doReadlink: function (_0x2858d6, _0x1397df, _0x5af887) {
        if (_0x5af887 <= 0) {
          return -28;
        }
        var _0x4c9cf6 = _0x5292fc.readlink(_0x2858d6);
        var _0x2be7b1 = Math.min(_0x5af887, _0xa3918a(_0x4c9cf6));
        var _0x5aff0b = _0xe1b6fc[_0x1397df + _0x2be7b1];
        _0x4f8934(_0x4c9cf6, _0x1397df, _0x5af887 + 1);
        _0xe1b6fc[_0x1397df + _0x2be7b1] = _0x5aff0b;
        return _0x2be7b1;
      },
      doAccess: function (_0x321bf4, _0x410f30) {
        if (_0x410f30 & ~7) {
          return -28;
        }
        var _0x9d5c04 = _0x5292fc.lookupPath(_0x321bf4, {
          follow: true
        });
        var _0x932009 = _0x9d5c04.node;
        if (!_0x932009) {
          return -44;
        }
        var _0x13e1ce = "";
        if (_0x410f30 & 4) {
          _0x13e1ce += "r";
        }
        if (_0x410f30 & 2) {
          _0x13e1ce += "w";
        }
        if (_0x410f30 & 1) {
          _0x13e1ce += "x";
        }
        if (_0x13e1ce && _0x5292fc.nodePermissions(_0x932009, _0x13e1ce)) {
          return -2;
        }
        return 0;
      },
      doReadv: function (_0x45bcd1, _0x5e5841, _0x6821e1, _0xc761dd) {
        var _0x2ba915 = 0;
        for (var _0x759a8c = 0; _0x759a8c < _0x6821e1; _0x759a8c++) {
          var _0x18af33 = _0x576263[_0x5e5841 + _0x759a8c * 8 >> 2];
          var _0x2f5a5a = _0x576263[_0x5e5841 + (_0x759a8c * 8 + 4) >> 2];
          var _0x10558e = _0x5292fc.read(_0x45bcd1, _0xe1b6fc, _0x18af33, _0x2f5a5a, _0xc761dd);
          if (_0x10558e < 0) {
            return -1;
          }
          _0x2ba915 += _0x10558e;
          if (_0x10558e < _0x2f5a5a) {
            break;
          }
        }
        return _0x2ba915;
      },
      doWritev: function (_0x4997e1, _0x3834a7, _0xb30efc, _0x3eb9a9) {
        var _0x5aa8a2 = 0;
        for (var _0x2fa900 = 0; _0x2fa900 < _0xb30efc; _0x2fa900++) {
          var _0x57093a = _0x576263[_0x3834a7 + _0x2fa900 * 8 >> 2];
          var _0x1caf51 = _0x576263[_0x3834a7 + (_0x2fa900 * 8 + 4) >> 2];
          var _0x117a1a = _0x5292fc.write(_0x4997e1, _0xe1b6fc, _0x57093a, _0x1caf51, _0x3eb9a9);
          if (_0x117a1a < 0) {
            return -1;
          }
          _0x5aa8a2 += _0x117a1a;
        }
        return _0x5aa8a2;
      },
      varargs: undefined,
      get: function () {
        _0x4203c0.varargs += 4;
        var _0x4af1b5 = _0x576263[_0x4203c0.varargs - 4 >> 2];
        return _0x4af1b5;
      },
      getStr: function (_0x5a4004) {
        var _0x561591 = _0x3d5aa0(_0x5a4004);
        return _0x561591;
      },
      getStreamFromFD: function (_0x371e29) {
        var _0x488447 = _0x5292fc.getStream(_0x371e29);
        if (!_0x488447) {
          throw new _0x5292fc.ErrnoError(8);
        }
        return _0x488447;
      },
      get64: function (_0x164b94, _0x949357) {
        return _0x164b94;
      }
    };
    function _0x2e2b40(_0x60c554, _0x206d83, _0xff976b, _0x235017, _0x732c28) {
      try {
        var _0x3c818c = 0;
        var _0x325821 = _0x206d83 ? _0x576263[_0x206d83 >> 2] : 0;
        var _0x220a41 = _0x206d83 ? _0x576263[_0x206d83 + 4 >> 2] : 0;
        var _0x4e9fe3 = _0xff976b ? _0x576263[_0xff976b >> 2] : 0;
        var _0x5cd582 = _0xff976b ? _0x576263[_0xff976b + 4 >> 2] : 0;
        var _0x5cba0d = _0x235017 ? _0x576263[_0x235017 >> 2] : 0;
        var _0x120e3d = _0x235017 ? _0x576263[_0x235017 + 4 >> 2] : 0;
        var _0x4372bc = 0;
        var _0x35cfa6 = 0;
        var _0x108bb8 = 0;
        var _0x28d6b6 = 0;
        var _0x2b29e4 = 0;
        var _0x57ee33 = 0;
        var _0x2ea4a1 = (_0x206d83 ? _0x576263[_0x206d83 >> 2] : 0) | (_0xff976b ? _0x576263[_0xff976b >> 2] : 0) | (_0x235017 ? _0x576263[_0x235017 >> 2] : 0);
        var _0x2cf079 = (_0x206d83 ? _0x576263[_0x206d83 + 4 >> 2] : 0) | (_0xff976b ? _0x576263[_0xff976b + 4 >> 2] : 0) | (_0x235017 ? _0x576263[_0x235017 + 4 >> 2] : 0);
        function _0x2153ec(_0x208386, _0x4ac2f3, _0x118151, _0x1d9b37) {
          if (_0x208386 < 32) {
            return _0x4ac2f3 & _0x1d9b37;
          } else {
            return _0x118151 & _0x1d9b37;
          }
        }
        for (var _0x3b2a0d = 0; _0x3b2a0d < _0x60c554; _0x3b2a0d++) {
          var _0x2ac099 = 1 << _0x3b2a0d % 32;
          if (!_0x2153ec(_0x3b2a0d, _0x2ea4a1, _0x2cf079, _0x2ac099)) {
            continue;
          }
          var _0x4b7e9f = _0x5292fc.getStream(_0x3b2a0d);
          if (!_0x4b7e9f) {
            throw new _0x5292fc.ErrnoError(8);
          }
          var _0x22f042 = _0x4203c0.DEFAULT_POLLMASK;
          if (_0x4b7e9f.stream_ops.poll) {
            _0x22f042 = _0x4b7e9f.stream_ops.poll(_0x4b7e9f);
          }
          if (_0x22f042 & 1 && _0x2153ec(_0x3b2a0d, _0x325821, _0x220a41, _0x2ac099)) {
            if (_0x3b2a0d < 32) {
              _0x4372bc = _0x4372bc | _0x2ac099;
            } else {
              _0x35cfa6 = _0x35cfa6 | _0x2ac099;
            }
            _0x3c818c++;
          }
          if (_0x22f042 & 4 && _0x2153ec(_0x3b2a0d, _0x4e9fe3, _0x5cd582, _0x2ac099)) {
            if (_0x3b2a0d < 32) {
              _0x108bb8 = _0x108bb8 | _0x2ac099;
            } else {
              _0x28d6b6 = _0x28d6b6 | _0x2ac099;
            }
            _0x3c818c++;
          }
          if (_0x22f042 & 2 && _0x2153ec(_0x3b2a0d, _0x5cba0d, _0x120e3d, _0x2ac099)) {
            if (_0x3b2a0d < 32) {
              _0x2b29e4 = _0x2b29e4 | _0x2ac099;
            } else {
              _0x57ee33 = _0x57ee33 | _0x2ac099;
            }
            _0x3c818c++;
          }
        }
        if (_0x206d83) {
          _0x576263[_0x206d83 >> 2] = _0x4372bc;
          _0x576263[_0x206d83 + 4 >> 2] = _0x35cfa6;
        }
        if (_0xff976b) {
          _0x576263[_0xff976b >> 2] = _0x108bb8;
          _0x576263[_0xff976b + 4 >> 2] = _0x28d6b6;
        }
        if (_0x235017) {
          _0x576263[_0x235017 >> 2] = _0x2b29e4;
          _0x576263[_0x235017 + 4 >> 2] = _0x57ee33;
        }
        return _0x3c818c;
      } catch (_0x5e5c1f) {
        if (typeof _0x5292fc == "undefined" || !(_0x5e5c1f instanceof _0x5292fc.ErrnoError)) {
          throw _0x5e5c1f;
        }
        return -_0x5e5c1f.errno;
      }
    }
    var _0x5e5b72 = {
      mount: function (_0x21f121) {
        _0x17aa78.websocket = _0x17aa78.websocket && typeof _0x17aa78.websocket === "object" ? _0x17aa78.websocket : {};
        _0x17aa78.websocket._callbacks = {};
        _0x17aa78.websocket.on = function (_0x16825b, _0x502fa5) {
          if (typeof _0x502fa5 === "function") {
            this._callbacks[_0x16825b] = _0x502fa5;
          }
          return this;
        };
        _0x17aa78.websocket.emit = function (_0x8e030c, _0x69f8e8) {
          if (typeof this._callbacks[_0x8e030c] === "function") {
            this._callbacks[_0x8e030c].call(this, _0x69f8e8);
          }
        };
        return _0x5292fc.createNode(null, "/", 16895, 0);
      },
      createSocket: function (_0x4f8574, _0x323552, _0x460914) {
        _0x323552 &= ~526336;
        var _0xba08a4 = _0x323552 == 1;
        if (_0xba08a4 && _0x460914 && _0x460914 != 6) {
          throw new _0x5292fc.ErrnoError(66);
        }
        var _0x2a919f = {
          family: _0x4f8574,
          type: _0x323552,
          protocol: _0x460914,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: _0x5e5b72.websocket_sock_ops
        };
        var _0x3eea03 = _0x5e5b72.nextname();
        var _0x27e2c0 = _0x5292fc.createNode(_0x5e5b72.root, _0x3eea03, 49152, 0);
        _0x27e2c0.sock = _0x2a919f;
        var _0x303304 = _0x5292fc.createStream({
          path: _0x3eea03,
          node: _0x27e2c0,
          flags: 2,
          seekable: false,
          stream_ops: _0x5e5b72.stream_ops
        });
        _0x2a919f.stream = _0x303304;
        return _0x2a919f;
      },
      getSocket: function (_0x377b47) {
        var _0x2be2b8 = _0x5292fc.getStream(_0x377b47);
        if (!_0x2be2b8 || !_0x5292fc.isSocket(_0x2be2b8.node.mode)) {
          return null;
        }
        return _0x2be2b8.node.sock;
      },
      stream_ops: {
        poll: function (_0x13fbb6) {
          var _0x23de31 = _0x13fbb6.node.sock;
          return _0x23de31.sock_ops.poll(_0x23de31);
        },
        ioctl: function (_0x99e7f3, _0x478f9e, _0x19640f) {
          var _0x2366a6 = _0x99e7f3.node.sock;
          return _0x2366a6.sock_ops.ioctl(_0x2366a6, _0x478f9e, _0x19640f);
        },
        read: function (_0xc67d21, _0xd65f25, _0x5280cf, _0x509e95, _0x38e124) {
          var _0x7cdaf9 = _0xc67d21.node.sock;
          var _0x344288 = _0x7cdaf9.sock_ops.recvmsg(_0x7cdaf9, _0x509e95);
          if (!_0x344288) {
            return 0;
          }
          _0xd65f25.set(_0x344288.buffer, _0x5280cf);
          return _0x344288.buffer.length;
        },
        write: function (_0x1efd24, _0x23427e, _0x177254, _0x541e74, _0x42eb6d) {
          var _0x194156 = _0x1efd24.node.sock;
          return _0x194156.sock_ops.sendmsg(_0x194156, _0x23427e, _0x177254, _0x541e74);
        },
        close: function (_0x367773) {
          var _0x1ba796 = _0x367773.node.sock;
          _0x1ba796.sock_ops.close(_0x1ba796);
        }
      },
      nextname: function () {
        if (!_0x5e5b72.nextname.current) {
          _0x5e5b72.nextname.current = 0;
        }
        return "socket[" + _0x5e5b72.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function (_0x375183, _0xdd85f9, _0x4f922a) {
          var _0x37ac17;
          if (typeof _0xdd85f9 == "object") {
            _0x37ac17 = _0xdd85f9;
            _0xdd85f9 = null;
            _0x4f922a = null;
          }
          if (_0x37ac17) {
            if (_0x37ac17._socket) {
              _0xdd85f9 = _0x37ac17._socket.remoteAddress;
              _0x4f922a = _0x37ac17._socket.remotePort;
            } else {
              var _0x4092e1 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x37ac17.url);
              if (!_0x4092e1) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0xdd85f9 = _0x4092e1[1];
              _0x4f922a = parseInt(_0x4092e1[2], 10);
            }
          } else {
            try {
              var _0x43086b = _0x17aa78.websocket && typeof _0x17aa78.websocket === "object";
              var _0x45073b = "ws:#".replace("#", "//");
              if (_0x43086b) {
                if (typeof _0x17aa78.websocket.url === "string") {
                  _0x45073b = _0x17aa78.websocket.url;
                }
              }
              if (_0x45073b === "ws://" || _0x45073b === "wss://") {
                var _0x475f83 = _0xdd85f9.split("/");
                _0x45073b = _0x45073b + _0x475f83[0] + ":" + _0x4f922a + "/" + _0x475f83.slice(1).join("/");
              }
              var _0x8a6574 = "binary";
              if (_0x43086b) {
                if (typeof _0x17aa78.websocket.subprotocol === "string") {
                  _0x8a6574 = _0x17aa78.websocket.subprotocol;
                }
              }
              var _0x1c72da = undefined;
              if (_0x8a6574 !== "null") {
                _0x8a6574 = _0x8a6574.replace(/^ +| +$/g, "").split(/ *, */);
                _0x1c72da = _0x232f5c ? {
                  protocol: _0x8a6574.toString()
                } : _0x8a6574;
              }
              if (_0x43086b && _0x17aa78.websocket.subprotocol === null) {
                _0x8a6574 = "null";
                _0x1c72da = undefined;
              }
              var _0x158fcb;
              if (_0x232f5c) {
                _0x158fcb = require("ws");
              } else {
                _0x158fcb = WebSocket;
              }
              _0x37ac17 = new _0x158fcb(_0x45073b, _0x1c72da);
              _0x37ac17.binaryType = "arraybuffer";
            } catch (_0x4d0cb8) {
              throw new _0x5292fc.ErrnoError(23);
            }
          }
          var _0x2ed583 = {
            addr: _0xdd85f9,
            port: _0x4f922a,
            socket: _0x37ac17,
            dgram_send_queue: []
          };
          _0x5e5b72.websocket_sock_ops.addPeer(_0x375183, _0x2ed583);
          _0x5e5b72.websocket_sock_ops.handlePeerEvents(_0x375183, _0x2ed583);
          if (_0x375183.type === 2 && typeof _0x375183.sport != "undefined") {
            _0x2ed583.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x375183.sport & 65280) >> 8, _0x375183.sport & 255]));
          }
          return _0x2ed583;
        },
        getPeer: function (_0x443309, _0x1719c2, _0x11bad1) {
          return _0x443309.peers[_0x1719c2 + ":" + _0x11bad1];
        },
        addPeer: function (_0x4a4ccc, _0x12ee59) {
          _0x4a4ccc.peers[_0x12ee59.addr + ":" + _0x12ee59.port] = _0x12ee59;
        },
        removePeer: function (_0x275552, _0x53bd0a) {
          delete _0x275552.peers[_0x53bd0a.addr + ":" + _0x53bd0a.port];
        },
        handlePeerEvents: function (_0x415973, _0x4b0d9b) {
          var _0x48d398 = true;
          function _0x3a13bb() {
            _0x17aa78.websocket.emit("open", _0x415973.stream.fd);
            try {
              var _0x4adc82 = _0x4b0d9b.dgram_send_queue.shift();
              while (_0x4adc82) {
                _0x4b0d9b.socket.send(_0x4adc82);
                _0x4adc82 = _0x4b0d9b.dgram_send_queue.shift();
              }
            } catch (_0x4d1d4a) {
              _0x4b0d9b.socket.close();
            }
          }
          function _0x2550f4(_0x31747e) {
            if (typeof _0x31747e == "string") {
              var _0x5bd876 = new TextEncoder();
              _0x31747e = _0x5bd876.encode(_0x31747e);
            } else {
              _0x469125(_0x31747e.byteLength !== undefined);
              if (_0x31747e.byteLength == 0) {
                return;
              } else {
                _0x31747e = new Uint8Array(_0x31747e);
              }
            }
            var _0x4bf85f = _0x48d398;
            _0x48d398 = false;
            if (_0x4bf85f && _0x31747e.length === 10 && _0x31747e[0] === 255 && _0x31747e[1] === 255 && _0x31747e[2] === 255 && _0x31747e[3] === 255 && _0x31747e[4] === "p".charCodeAt(0) && _0x31747e[5] === "o".charCodeAt(0) && _0x31747e[6] === "r".charCodeAt(0) && _0x31747e[7] === "t".charCodeAt(0)) {
              var _0x2e160c = _0x31747e[8] << 8 | _0x31747e[9];
              _0x5e5b72.websocket_sock_ops.removePeer(_0x415973, _0x4b0d9b);
              _0x4b0d9b.port = _0x2e160c;
              _0x5e5b72.websocket_sock_ops.addPeer(_0x415973, _0x4b0d9b);
              return;
            }
            _0x415973.recv_queue.push({
              addr: _0x4b0d9b.addr,
              port: _0x4b0d9b.port,
              data: _0x31747e
            });
            _0x17aa78.websocket.emit("message", _0x415973.stream.fd);
          }
          if (_0x232f5c) {
            _0x4b0d9b.socket.on("open", _0x3a13bb);
            _0x4b0d9b.socket.on("message", function (_0x598b2d, _0x167e42) {
              if (!_0x167e42.binary) {
                return;
              }
              _0x2550f4(new Uint8Array(_0x598b2d).buffer);
            });
            _0x4b0d9b.socket.on("close", function () {
              _0x17aa78.websocket.emit("close", _0x415973.stream.fd);
            });
            _0x4b0d9b.socket.on("error", function (_0x3df7e9) {
              _0x415973.error = 14;
              _0x17aa78.websocket.emit("error", [_0x415973.stream.fd, _0x415973.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x4b0d9b.socket.onopen = _0x3a13bb;
            _0x4b0d9b.socket.onclose = function () {
              _0x17aa78.websocket.emit("close", _0x415973.stream.fd);
            };
            _0x4b0d9b.socket.onmessage = function _0x47ed48(_0x294528) {
              _0x2550f4(_0x294528.data);
            };
            _0x4b0d9b.socket.onerror = function (_0x55a2d5) {
              _0x415973.error = 14;
              _0x17aa78.websocket.emit("error", [_0x415973.stream.fd, _0x415973.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        poll: function (_0x20297f) {
          if (_0x20297f.type === 1 && _0x20297f.server) {
            if (_0x20297f.pending.length) {
              return 65;
            } else {
              return 0;
            }
          }
          var _0x857dcb = 0;
          var _0xe19a88 = _0x20297f.type === 1 ? _0x5e5b72.websocket_sock_ops.getPeer(_0x20297f, _0x20297f.daddr, _0x20297f.dport) : null;
          if (_0x20297f.recv_queue.length || !_0xe19a88 || _0xe19a88 && _0xe19a88.socket.readyState === _0xe19a88.socket.CLOSING || _0xe19a88 && _0xe19a88.socket.readyState === _0xe19a88.socket.CLOSED) {
            _0x857dcb |= 65;
          }
          if (!_0xe19a88 || _0xe19a88 && _0xe19a88.socket.readyState === _0xe19a88.socket.OPEN) {
            _0x857dcb |= 4;
          }
          if (_0xe19a88 && _0xe19a88.socket.readyState === _0xe19a88.socket.CLOSING || _0xe19a88 && _0xe19a88.socket.readyState === _0xe19a88.socket.CLOSED) {
            _0x857dcb |= 16;
          }
          return _0x857dcb;
        },
        ioctl: function (_0x511281, _0x139ce7, _0x56531a) {
          switch (_0x139ce7) {
            case 21531:
              var _0x1ed8c7 = 0;
              if (_0x511281.recv_queue.length) {
                _0x1ed8c7 = _0x511281.recv_queue[0].data.length;
              }
              _0x576263[_0x56531a >> 2] = _0x1ed8c7;
              return 0;
            default:
              return 28;
          }
        },
        close: function (_0x3cc48d) {
          if (_0x3cc48d.server) {
            try {
              _0x3cc48d.server.close();
            } catch (_0x230a3e) {}
            _0x3cc48d.server = null;
          }
          var _0x2f1284 = Object.keys(_0x3cc48d.peers);
          for (var _0x5d8dec = 0; _0x5d8dec < _0x2f1284.length; _0x5d8dec++) {
            var _0x137151 = _0x3cc48d.peers[_0x2f1284[_0x5d8dec]];
            try {
              _0x137151.socket.close();
            } catch (_0x49a780) {}
            _0x5e5b72.websocket_sock_ops.removePeer(_0x3cc48d, _0x137151);
          }
          return 0;
        },
        bind: function (_0x4a5e9c, _0x57aebc, _0x338e86) {
          if (typeof _0x4a5e9c.saddr != "undefined" || typeof _0x4a5e9c.sport != "undefined") {
            throw new _0x5292fc.ErrnoError(28);
          }
          _0x4a5e9c.saddr = _0x57aebc;
          _0x4a5e9c.sport = _0x338e86;
          if (_0x4a5e9c.type === 2) {
            if (_0x4a5e9c.server) {
              _0x4a5e9c.server.close();
              _0x4a5e9c.server = null;
            }
            try {
              _0x4a5e9c.sock_ops.listen(_0x4a5e9c, 0);
            } catch (_0x27c045) {
              if (!(_0x27c045 instanceof _0x5292fc.ErrnoError)) {
                throw _0x27c045;
              }
              if (_0x27c045.errno !== 138) {
                throw _0x27c045;
              }
            }
          }
        },
        connect: function (_0x38d90f, _0x318f70, _0x1bb975) {
          if (_0x38d90f.server) {
            throw new _0x5292fc.ErrnoError(138);
          }
          if (typeof _0x38d90f.daddr != "undefined" && typeof _0x38d90f.dport != "undefined") {
            var _0x3fb407 = _0x5e5b72.websocket_sock_ops.getPeer(_0x38d90f, _0x38d90f.daddr, _0x38d90f.dport);
            if (_0x3fb407) {
              if (_0x3fb407.socket.readyState === _0x3fb407.socket.CONNECTING) {
                throw new _0x5292fc.ErrnoError(7);
              } else {
                throw new _0x5292fc.ErrnoError(30);
              }
            }
          }
          var _0x407521 = _0x5e5b72.websocket_sock_ops.createPeer(_0x38d90f, _0x318f70, _0x1bb975);
          _0x38d90f.daddr = _0x407521.addr;
          _0x38d90f.dport = _0x407521.port;
          throw new _0x5292fc.ErrnoError(26);
        },
        listen: function (_0x173149, _0x5965ae) {
          if (!_0x232f5c) {
            throw new _0x5292fc.ErrnoError(138);
          }
          if (_0x173149.server) {
            throw new _0x5292fc.ErrnoError(28);
          }
          var _0xda617b = require("ws").Server;
          var _0x1a8839 = _0x173149.saddr;
          _0x173149.server = new _0xda617b({
            host: _0x1a8839,
            port: _0x173149.sport
          });
          _0x17aa78.websocket.emit("listen", _0x173149.stream.fd);
          _0x173149.server.on("connection", function (_0x5e62f4) {
            if (_0x173149.type === 1) {
              var _0x22f1e1 = _0x5e5b72.createSocket(_0x173149.family, _0x173149.type, _0x173149.protocol);
              var _0x46b00d = _0x5e5b72.websocket_sock_ops.createPeer(_0x22f1e1, _0x5e62f4);
              _0x22f1e1.daddr = _0x46b00d.addr;
              _0x22f1e1.dport = _0x46b00d.port;
              _0x173149.pending.push(_0x22f1e1);
              _0x17aa78.websocket.emit("connection", _0x22f1e1.stream.fd);
            } else {
              _0x5e5b72.websocket_sock_ops.createPeer(_0x173149, _0x5e62f4);
              _0x17aa78.websocket.emit("connection", _0x173149.stream.fd);
            }
          });
          _0x173149.server.on("closed", function () {
            _0x17aa78.websocket.emit("close", _0x173149.stream.fd);
            _0x173149.server = null;
          });
          _0x173149.server.on("error", function (_0x26f78e) {
            _0x173149.error = 23;
            _0x17aa78.websocket.emit("error", [_0x173149.stream.fd, _0x173149.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        accept: function (_0x41ac06) {
          if (!_0x41ac06.server || !_0x41ac06.pending.length) {
            throw new _0x5292fc.ErrnoError(28);
          }
          var _0x2f59b3 = _0x41ac06.pending.shift();
          _0x2f59b3.stream.flags = _0x41ac06.stream.flags;
          return _0x2f59b3;
        },
        getname: function (_0x5ec605, _0x38dd27) {
          var _0xcd8a60;
          var _0x5f3102;
          if (_0x38dd27) {
            if (_0x5ec605.daddr === undefined || _0x5ec605.dport === undefined) {
              throw new _0x5292fc.ErrnoError(53);
            }
            _0xcd8a60 = _0x5ec605.daddr;
            _0x5f3102 = _0x5ec605.dport;
          } else {
            _0xcd8a60 = _0x5ec605.saddr || 0;
            _0x5f3102 = _0x5ec605.sport || 0;
          }
          return {
            addr: _0xcd8a60,
            port: _0x5f3102
          };
        },
        sendmsg: function (_0x11a514, _0x163cfd, _0x2370f3, _0x432f9d, _0x55eb23, _0x1bca22) {
          if (_0x11a514.type === 2) {
            if (_0x55eb23 === undefined || _0x1bca22 === undefined) {
              _0x55eb23 = _0x11a514.daddr;
              _0x1bca22 = _0x11a514.dport;
            }
            if (_0x55eb23 === undefined || _0x1bca22 === undefined) {
              throw new _0x5292fc.ErrnoError(17);
            }
          } else {
            _0x55eb23 = _0x11a514.daddr;
            _0x1bca22 = _0x11a514.dport;
          }
          var _0x109cb0 = _0x5e5b72.websocket_sock_ops.getPeer(_0x11a514, _0x55eb23, _0x1bca22);
          if (_0x11a514.type === 1) {
            if (!_0x109cb0 || _0x109cb0.socket.readyState === _0x109cb0.socket.CLOSING || _0x109cb0.socket.readyState === _0x109cb0.socket.CLOSED) {
              throw new _0x5292fc.ErrnoError(53);
            } else if (_0x109cb0.socket.readyState === _0x109cb0.socket.CONNECTING) {
              throw new _0x5292fc.ErrnoError(6);
            }
          }
          if (ArrayBuffer.isView(_0x163cfd)) {
            _0x2370f3 += _0x163cfd.byteOffset;
            _0x163cfd = _0x163cfd.buffer;
          }
          var _0x2d5f08;
          _0x2d5f08 = _0x163cfd.slice(_0x2370f3, _0x2370f3 + _0x432f9d);
          if (_0x11a514.type === 2) {
            if (!_0x109cb0 || _0x109cb0.socket.readyState !== _0x109cb0.socket.OPEN) {
              if (!_0x109cb0 || _0x109cb0.socket.readyState === _0x109cb0.socket.CLOSING || _0x109cb0.socket.readyState === _0x109cb0.socket.CLOSED) {
                _0x109cb0 = _0x5e5b72.websocket_sock_ops.createPeer(_0x11a514, _0x55eb23, _0x1bca22);
              }
              _0x109cb0.dgram_send_queue.push(_0x2d5f08);
              return _0x432f9d;
            }
          }
          try {
            _0x109cb0.socket.send(_0x2d5f08);
            return _0x432f9d;
          } catch (_0x1a0fcf) {
            throw new _0x5292fc.ErrnoError(28);
          }
        },
        recvmsg: function (_0x2d67e6, _0x111486) {
          if (_0x2d67e6.type === 1 && _0x2d67e6.server) {
            throw new _0x5292fc.ErrnoError(53);
          }
          var _0x5575aa = _0x2d67e6.recv_queue.shift();
          if (!_0x5575aa) {
            if (_0x2d67e6.type === 1) {
              var _0x286c94 = _0x5e5b72.websocket_sock_ops.getPeer(_0x2d67e6, _0x2d67e6.daddr, _0x2d67e6.dport);
              if (!_0x286c94) {
                throw new _0x5292fc.ErrnoError(53);
              } else if (_0x286c94.socket.readyState === _0x286c94.socket.CLOSING || _0x286c94.socket.readyState === _0x286c94.socket.CLOSED) {
                return null;
              } else {
                throw new _0x5292fc.ErrnoError(6);
              }
            } else {
              throw new _0x5292fc.ErrnoError(6);
            }
          }
          var _0x3771f4 = _0x5575aa.data.byteLength || _0x5575aa.data.length;
          var _0xc5b034 = _0x5575aa.data.byteOffset || 0;
          var _0x380393 = _0x5575aa.data.buffer || _0x5575aa.data;
          var _0x2e26d7 = Math.min(_0x111486, _0x3771f4);
          var _0x367cd1 = {
            buffer: new Uint8Array(_0x380393, _0xc5b034, _0x2e26d7),
            addr: _0x5575aa.addr,
            port: _0x5575aa.port
          };
          if (_0x2d67e6.type === 1 && _0x2e26d7 < _0x3771f4) {
            var _0x575590 = _0x3771f4 - _0x2e26d7;
            _0x5575aa.data = new Uint8Array(_0x380393, _0xc5b034 + _0x2e26d7, _0x575590);
            _0x2d67e6.recv_queue.unshift(_0x5575aa);
          }
          return _0x367cd1;
        }
      }
    };
    function _0x43bf14(_0x3a453f) {
      var _0x49c637 = _0x5e5b72.getSocket(_0x3a453f);
      if (!_0x49c637) {
        throw new _0x5292fc.ErrnoError(8);
      }
      return _0x49c637;
    }
    function _0xaba781(_0x28b23a) {
      _0x576263[_0x6cabf5() >> 2] = _0x28b23a;
      return _0x28b23a;
    }
    function _0x3d7498(_0x412895) {
      var _0x42db24 = _0x412895.split(".");
      for (var _0x11bc93 = 0; _0x11bc93 < 4; _0x11bc93++) {
        var _0x53842b = Number(_0x42db24[_0x11bc93]);
        if (isNaN(_0x53842b)) {
          return null;
        }
        _0x42db24[_0x11bc93] = _0x53842b;
      }
      return (_0x42db24[0] | _0x42db24[1] << 8 | _0x42db24[2] << 16 | _0x42db24[3] << 24) >>> 0;
    }
    function _0x31233d(_0x5953d4) {
      return parseInt(_0x5953d4);
    }
    function _0x2548f2(_0x12682e) {
      var _0x48b516;
      var _0x3b8429;
      var _0x5e713e;
      var _0x53cb1c;
      var _0x433bf1 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0x280c66 = [];
      if (!_0x433bf1.test(_0x12682e)) {
        return null;
      }
      if (_0x12682e === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (_0x12682e.startsWith("::")) {
        _0x12682e = _0x12682e.replace("::", "Z:");
      } else {
        _0x12682e = _0x12682e.replace("::", ":Z:");
      }
      if (_0x12682e.indexOf(".") > 0) {
        _0x12682e = _0x12682e.replace(new RegExp("[.]", "g"), ":");
        _0x48b516 = _0x12682e.split(":");
        _0x48b516[_0x48b516.length - 4] = _0x31233d(_0x48b516[_0x48b516.length - 4]) + _0x31233d(_0x48b516[_0x48b516.length - 3]) * 256;
        _0x48b516[_0x48b516.length - 3] = _0x31233d(_0x48b516[_0x48b516.length - 2]) + _0x31233d(_0x48b516[_0x48b516.length - 1]) * 256;
        _0x48b516 = _0x48b516.slice(0, _0x48b516.length - 2);
      } else {
        _0x48b516 = _0x12682e.split(":");
      }
      _0x5e713e = 0;
      _0x53cb1c = 0;
      for (_0x3b8429 = 0; _0x3b8429 < _0x48b516.length; _0x3b8429++) {
        if (typeof _0x48b516[_0x3b8429] == "string") {
          if (_0x48b516[_0x3b8429] === "Z") {
            for (_0x53cb1c = 0; _0x53cb1c < 8 - _0x48b516.length + 1; _0x53cb1c++) {
              _0x280c66[_0x3b8429 + _0x53cb1c] = 0;
            }
            _0x5e713e = _0x53cb1c - 1;
          } else {
            _0x280c66[_0x3b8429 + _0x5e713e] = _0x5e39e7(parseInt(_0x48b516[_0x3b8429], 16));
          }
        } else {
          _0x280c66[_0x3b8429 + _0x5e713e] = _0x48b516[_0x3b8429];
        }
      }
      return [_0x280c66[1] << 16 | _0x280c66[0], _0x280c66[3] << 16 | _0x280c66[2], _0x280c66[5] << 16 | _0x280c66[4], _0x280c66[7] << 16 | _0x280c66[6]];
    }
    function _0x3d1759(_0x7ae64e, _0x526b1e, _0x2a5497, _0xf893f9, _0x517463) {
      switch (_0x526b1e) {
        case 2:
          _0x2a5497 = _0x3d7498(_0x2a5497);
          _0xf74918(_0x7ae64e, 16);
          if (_0x517463) {
            _0x576263[_0x517463 >> 2] = 16;
          }
          _0x2b0fe4[_0x7ae64e >> 1] = _0x526b1e;
          _0x576263[_0x7ae64e + 4 >> 2] = _0x2a5497;
          _0x2b0fe4[_0x7ae64e + 2 >> 1] = _0x5e39e7(_0xf893f9);
          break;
        case 10:
          _0x2a5497 = _0x2548f2(_0x2a5497);
          _0xf74918(_0x7ae64e, 28);
          if (_0x517463) {
            _0x576263[_0x517463 >> 2] = 28;
          }
          _0x576263[_0x7ae64e >> 2] = _0x526b1e;
          _0x576263[_0x7ae64e + 8 >> 2] = _0x2a5497[0];
          _0x576263[_0x7ae64e + 12 >> 2] = _0x2a5497[1];
          _0x576263[_0x7ae64e + 16 >> 2] = _0x2a5497[2];
          _0x576263[_0x7ae64e + 20 >> 2] = _0x2a5497[3];
          _0x2b0fe4[_0x7ae64e + 2 >> 1] = _0x5e39e7(_0xf893f9);
          break;
        default:
          return 5;
      }
      return 0;
    }
    var _0x43a9e1 = {
      address_map: {
        id: 1,
        addrs: {},
        names: {}
      },
      lookup_name: function (_0x2df06d) {
        var _0x68ff64 = _0x3d7498(_0x2df06d);
        if (_0x68ff64 !== null) {
          return _0x2df06d;
        }
        _0x68ff64 = _0x2548f2(_0x2df06d);
        if (_0x68ff64 !== null) {
          return _0x2df06d;
        }
        var _0x1c58da;
        if (_0x43a9e1.address_map.addrs[_0x2df06d]) {
          _0x1c58da = _0x43a9e1.address_map.addrs[_0x2df06d];
        } else {
          var _0x475c78 = _0x43a9e1.address_map.id++;
          _0x469125(_0x475c78 < 65535, "exceeded max address mappings of 65535");
          _0x1c58da = "172.29." + (_0x475c78 & 255) + "." + (_0x475c78 & 65280);
          _0x43a9e1.address_map.names[_0x1c58da] = _0x2df06d;
          _0x43a9e1.address_map.addrs[_0x2df06d] = _0x1c58da;
        }
        return _0x1c58da;
      },
      lookup_addr: function (_0x3c0eb5) {
        if (_0x43a9e1.address_map.names[_0x3c0eb5]) {
          return _0x43a9e1.address_map.names[_0x3c0eb5];
        }
        return null;
      }
    };
    function _0x2b1430(_0xe85174, _0x267316, _0x4bfb43, _0x38fafb) {
      try {
        var _0x541199 = _0x43bf14(_0xe85174);
        var _0x41e125 = _0x541199.sock_ops.accept(_0x541199);
        if (_0x267316) {
          var _0x48624b = _0x3d1759(_0x267316, _0x41e125.family, _0x43a9e1.lookup_name(_0x41e125.daddr), _0x41e125.dport, _0x4bfb43);
        }
        return _0x41e125.stream.fd;
      } catch (_0x476b69) {
        if (typeof _0x5292fc == "undefined" || !(_0x476b69 instanceof _0x5292fc.ErrnoError)) {
          throw _0x476b69;
        }
        return -_0x476b69.errno;
      }
    }
    function _0x1d6c1b(_0x456f9c) {
      return (_0x456f9c & 255) + "." + (_0x456f9c >> 8 & 255) + "." + (_0x456f9c >> 16 & 255) + "." + (_0x456f9c >> 24 & 255);
    }
    function _0x4ba758(_0x1a3cf2) {
      var _0x4ce89c = "";
      var _0x21e0ac = 0;
      var _0x127a21 = 0;
      var _0x22c54d = 0;
      var _0x2c7ded = 0;
      var _0x1640ce = 0;
      var _0x19a242 = 0;
      var _0x4b9692 = [_0x1a3cf2[0] & 65535, _0x1a3cf2[0] >> 16, _0x1a3cf2[1] & 65535, _0x1a3cf2[1] >> 16, _0x1a3cf2[2] & 65535, _0x1a3cf2[2] >> 16, _0x1a3cf2[3] & 65535, _0x1a3cf2[3] >> 16];
      var _0x4035fb = true;
      var _0x338eea = "";
      for (_0x19a242 = 0; _0x19a242 < 5; _0x19a242++) {
        if (_0x4b9692[_0x19a242] !== 0) {
          _0x4035fb = false;
          break;
        }
      }
      if (_0x4035fb) {
        _0x338eea = _0x1d6c1b(_0x4b9692[6] | _0x4b9692[7] << 16);
        if (_0x4b9692[5] === -1) {
          _0x4ce89c = "::ffff:";
          _0x4ce89c += _0x338eea;
          return _0x4ce89c;
        }
        if (_0x4b9692[5] === 0) {
          _0x4ce89c = "::";
          if (_0x338eea === "0.0.0.0") {
            _0x338eea = "";
          }
          if (_0x338eea === "0.0.0.1") {
            _0x338eea = "1";
          }
          _0x4ce89c += _0x338eea;
          return _0x4ce89c;
        }
      }
      for (_0x21e0ac = 0; _0x21e0ac < 8; _0x21e0ac++) {
        if (_0x4b9692[_0x21e0ac] === 0) {
          if (_0x21e0ac - _0x22c54d > 1) {
            _0x1640ce = 0;
          }
          _0x22c54d = _0x21e0ac;
          _0x1640ce++;
        }
        if (_0x1640ce > _0x127a21) {
          _0x127a21 = _0x1640ce;
          _0x2c7ded = _0x21e0ac - _0x127a21 + 1;
        }
      }
      for (_0x21e0ac = 0; _0x21e0ac < 8; _0x21e0ac++) {
        if (_0x127a21 > 1) {
          if (_0x4b9692[_0x21e0ac] === 0 && _0x21e0ac >= _0x2c7ded && _0x21e0ac < _0x2c7ded + _0x127a21) {
            if (_0x21e0ac === _0x2c7ded) {
              _0x4ce89c += ":";
              if (_0x2c7ded === 0) {
                _0x4ce89c += ":";
              }
            }
            continue;
          }
        }
        _0x4ce89c += Number(_0x5181e6(_0x4b9692[_0x21e0ac] & 65535)).toString(16);
        _0x4ce89c += _0x21e0ac < 7 ? ":" : "";
      }
      return _0x4ce89c;
    }
    function _0x43a17d(_0x316535, _0x5905ef) {
      var _0x42830d = _0x2b0fe4[_0x316535 >> 1];
      var _0x462bf7 = _0x5181e6(_0x319c2a[_0x316535 + 2 >> 1]);
      var _0x301e57;
      switch (_0x42830d) {
        case 2:
          if (_0x5905ef !== 16) {
            return {
              errno: 28
            };
          }
          _0x301e57 = _0x576263[_0x316535 + 4 >> 2];
          _0x301e57 = _0x1d6c1b(_0x301e57);
          break;
        case 10:
          if (_0x5905ef !== 28) {
            return {
              errno: 28
            };
          }
          _0x301e57 = [_0x576263[_0x316535 + 8 >> 2], _0x576263[_0x316535 + 12 >> 2], _0x576263[_0x316535 + 16 >> 2], _0x576263[_0x316535 + 20 >> 2]];
          _0x301e57 = _0x4ba758(_0x301e57);
          break;
        default:
          return {
            errno: 5
          };
      }
      return {
        family: _0x42830d,
        addr: _0x301e57,
        port: _0x462bf7
      };
    }
    function _0x3102db(_0x56cf3c, _0x4b6f90, _0x586846) {
      if (_0x586846 && _0x56cf3c === 0) {
        return null;
      }
      var _0x2e3a8b = _0x43a17d(_0x56cf3c, _0x4b6f90);
      if (_0x2e3a8b.errno) {
        throw new _0x5292fc.ErrnoError(_0x2e3a8b.errno);
      }
      _0x2e3a8b.addr = _0x43a9e1.lookup_addr(_0x2e3a8b.addr) || _0x2e3a8b.addr;
      return _0x2e3a8b;
    }
    function _0x2cfb8b(_0x429608, _0x26d782, _0xc54b6c) {
      try {
        var _0x4f75b7 = _0x43bf14(_0x429608);
        var _0x385ea1 = _0x3102db(_0x26d782, _0xc54b6c);
        _0x4f75b7.sock_ops.bind(_0x4f75b7, _0x385ea1.addr, _0x385ea1.port);
        return 0;
      } catch (_0x4f0652) {
        if (typeof _0x5292fc == "undefined" || !(_0x4f0652 instanceof _0x5292fc.ErrnoError)) {
          throw _0x4f0652;
        }
        return -_0x4f0652.errno;
      }
    }
    function _0x2295f3(_0x4bdf55, _0x264424) {
      try {
        _0x4bdf55 = _0x4203c0.getStr(_0x4bdf55);
        _0x5292fc.chmod(_0x4bdf55, _0x264424);
        return 0;
      } catch (_0x33be1a) {
        if (typeof _0x5292fc == "undefined" || !(_0x33be1a instanceof _0x5292fc.ErrnoError)) {
          throw _0x33be1a;
        }
        return -_0x33be1a.errno;
      }
    }
    function _0x24c6b8(_0x517f5f, _0x29cbd1, _0x3dcd60) {
      try {
        var _0x53cf4c = _0x43bf14(_0x517f5f);
        var _0x2c6510 = _0x3102db(_0x29cbd1, _0x3dcd60);
        _0x53cf4c.sock_ops.connect(_0x53cf4c, _0x2c6510.addr, _0x2c6510.port);
        return 0;
      } catch (_0x5c07c6) {
        if (typeof _0x5292fc == "undefined" || !(_0x5c07c6 instanceof _0x5292fc.ErrnoError)) {
          throw _0x5c07c6;
        }
        return -_0x5c07c6.errno;
      }
    }
    function _0x21ef78(_0x4ef525, _0x2129b8, _0x3e7004) {
      try {
        var _0xac6fd3 = _0x4203c0.getStreamFromFD(_0x4ef525);
        if (_0xac6fd3.fd === _0x2129b8) {
          return -28;
        }
        var _0x1375f8 = _0x5292fc.getStream(_0x2129b8);
        if (_0x1375f8) {
          _0x5292fc.close(_0x1375f8);
        }
        return _0x5292fc.open(_0xac6fd3.path, _0xac6fd3.flags, 0, _0x2129b8, _0x2129b8).fd;
      } catch (_0xc498eb) {
        if (typeof _0x5292fc == "undefined" || !(_0xc498eb instanceof _0x5292fc.ErrnoError)) {
          throw _0xc498eb;
        }
        return -_0xc498eb.errno;
      }
    }
    function _0x303d7e(_0x3fcac9, _0x168049, _0x13df87, _0x461b06) {
      try {
        _0x168049 = _0x4203c0.getStr(_0x168049);
        _0x168049 = _0x4203c0.calculateAt(_0x3fcac9, _0x168049);
        return _0x4203c0.doAccess(_0x168049, _0x13df87);
      } catch (_0x2dc536) {
        if (typeof _0x5292fc == "undefined" || !(_0x2dc536 instanceof _0x5292fc.ErrnoError)) {
          throw _0x2dc536;
        }
        return -_0x2dc536.errno;
      }
    }
    function _0x2fcff3(_0x215e09, _0x1f89de, _0x4b0751) {
      _0x4203c0.varargs = _0x4b0751;
      try {
        var _0x2d1827 = _0x4203c0.getStreamFromFD(_0x215e09);
        switch (_0x1f89de) {
          case 0:
            {
              var _0x5ce932 = _0x4203c0.get();
              if (_0x5ce932 < 0) {
                return -28;
              }
              var _0xe35b7a;
              _0xe35b7a = _0x5292fc.open(_0x2d1827.path, _0x2d1827.flags, 0, _0x5ce932);
              return _0xe35b7a.fd;
            }
          case 1:
          case 2:
            return 0;
          case 3:
            return _0x2d1827.flags;
          case 4:
            {
              var _0x5ce932 = _0x4203c0.get();
              _0x2d1827.flags |= _0x5ce932;
              return 0;
            }
          case 5:
            {
              var _0x5ce932 = _0x4203c0.get();
              var _0x10515c = 0;
              _0x2b0fe4[_0x5ce932 + _0x10515c >> 1] = 2;
              return 0;
            }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            _0xaba781(28);
            return -1;
          default:
            {
              return -28;
            }
        }
      } catch (_0x22efcd) {
        if (typeof _0x5292fc == "undefined" || !(_0x22efcd instanceof _0x5292fc.ErrnoError)) {
          throw _0x22efcd;
        }
        return -_0x22efcd.errno;
      }
    }
    function _0x28d2c(_0x30e7de, _0x5468b5) {
      try {
        var _0x13227b = _0x4203c0.getStreamFromFD(_0x30e7de);
        return _0x4203c0.doStat(_0x5292fc.stat, _0x13227b.path, _0x5468b5);
      } catch (_0x27a31b) {
        if (typeof _0x5292fc == "undefined" || !(_0x27a31b instanceof _0x5292fc.ErrnoError)) {
          throw _0x27a31b;
        }
        return -_0x27a31b.errno;
      }
    }
    function _0x550fcc(_0x1a1bef, _0x4f81d7, _0x3f4803) {
      try {
        var _0x773cbf = _0x4203c0.get64(_0x4f81d7, _0x3f4803);
        _0x5292fc.ftruncate(_0x1a1bef, _0x773cbf);
        return 0;
      } catch (_0x2a0143) {
        if (typeof _0x5292fc == "undefined" || !(_0x2a0143 instanceof _0x5292fc.ErrnoError)) {
          throw _0x2a0143;
        }
        return -_0x2a0143.errno;
      }
    }
    function _0x225d0f(_0x3e041b, _0x387e62) {
      try {
        if (_0x387e62 === 0) {
          return -28;
        }
        var _0xae4714 = _0x5292fc.cwd();
        var _0x2262f7 = _0xa3918a(_0xae4714);
        if (_0x387e62 < _0x2262f7 + 1) {
          return -68;
        }
        _0x4f8934(_0xae4714, _0x3e041b, _0x387e62);
        return _0x3e041b;
      } catch (_0x16ed0d) {
        if (typeof _0x5292fc == "undefined" || !(_0x16ed0d instanceof _0x5292fc.ErrnoError)) {
          throw _0x16ed0d;
        }
        return -_0x16ed0d.errno;
      }
    }
    function _0x49401f(_0x11243d, _0x28e063, _0x4a04ff) {
      try {
        var _0xf92b9e = _0x4203c0.getStreamFromFD(_0x11243d);
        if (!_0xf92b9e.getdents) {
          _0xf92b9e.getdents = _0x5292fc.readdir(_0xf92b9e.path);
        }
        var _0x45d349 = 280;
        var _0x21350a = 0;
        var _0x40dc72 = _0x5292fc.llseek(_0xf92b9e, 0, 1);
        var _0x329462 = Math.floor(_0x40dc72 / _0x45d349);
        while (_0x329462 < _0xf92b9e.getdents.length && _0x21350a + _0x45d349 <= _0x4a04ff) {
          var _0x3b69b0;
          var _0x4a4618;
          var _0x19b38e = _0xf92b9e.getdents[_0x329462];
          if (_0x19b38e === ".") {
            _0x3b69b0 = _0xf92b9e.node.id;
            _0x4a4618 = 4;
          } else if (_0x19b38e === "..") {
            var _0x246365 = _0x5292fc.lookupPath(_0xf92b9e.path, {
              parent: true
            });
            _0x3b69b0 = _0x246365.node.id;
            _0x4a4618 = 4;
          } else {
            var _0x3a8a03 = _0x5292fc.lookupNode(_0xf92b9e.node, _0x19b38e);
            _0x3b69b0 = _0x3a8a03.id;
            _0x4a4618 = _0x5292fc.isChrdev(_0x3a8a03.mode) ? 2 : _0x5292fc.isDir(_0x3a8a03.mode) ? 4 : _0x5292fc.isLink(_0x3a8a03.mode) ? 10 : 8;
          }
          _0x34cc1 = [_0x3b69b0 >>> 0, (_0x161da0 = _0x3b69b0, +Math.abs(_0x161da0) >= 1 ? _0x161da0 > 0 ? (Math.min(+Math.floor(_0x161da0 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x161da0 - +(~~_0x161da0 >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x576263[_0x28e063 + _0x21350a >> 2] = _0x34cc1[0];
          _0x576263[_0x28e063 + _0x21350a + 4 >> 2] = _0x34cc1[1];
          _0x34cc1 = [(_0x329462 + 1) * _0x45d349 >>> 0, (_0x161da0 = (_0x329462 + 1) * _0x45d349, +Math.abs(_0x161da0) >= 1 ? _0x161da0 > 0 ? (Math.min(+Math.floor(_0x161da0 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x161da0 - +(~~_0x161da0 >>> 0)) / 4294967296) >>> 0 : 0)];
          _0x576263[_0x28e063 + _0x21350a + 8 >> 2] = _0x34cc1[0];
          _0x576263[_0x28e063 + _0x21350a + 12 >> 2] = _0x34cc1[1];
          _0x2b0fe4[_0x28e063 + _0x21350a + 16 >> 1] = 280;
          _0xe1b6fc[_0x28e063 + _0x21350a + 18 >> 0] = _0x4a4618;
          _0x4f8934(_0x19b38e, _0x28e063 + _0x21350a + 19, 256);
          _0x21350a += _0x45d349;
          _0x329462 += 1;
        }
        _0x5292fc.llseek(_0xf92b9e, _0x329462 * _0x45d349, 0);
        return _0x21350a;
      } catch (_0x17c417) {
        if (typeof _0x5292fc == "undefined" || !(_0x17c417 instanceof _0x5292fc.ErrnoError)) {
          throw _0x17c417;
        }
        return -_0x17c417.errno;
      }
    }
    function _0x3f428f(_0x4c5869, _0x222a19, _0x2cb802) {
      try {
        var _0x36f496 = _0x43bf14(_0x4c5869);
        if (!_0x36f496.daddr) {
          return -53;
        }
        var _0x441458 = _0x3d1759(_0x222a19, _0x36f496.family, _0x43a9e1.lookup_name(_0x36f496.daddr), _0x36f496.dport, _0x2cb802);
        return 0;
      } catch (_0x5451ae) {
        if (typeof _0x5292fc == "undefined" || !(_0x5451ae instanceof _0x5292fc.ErrnoError)) {
          throw _0x5451ae;
        }
        return -_0x5451ae.errno;
      }
    }
    function _0x480fa1(_0x4ee9d4, _0x5edd4b, _0x41fdd9) {
      try {
        _0x2e37f2("__syscall_getsockname " + _0x4ee9d4);
        var _0x31c35e = _0x43bf14(_0x4ee9d4);
        var _0x147489 = _0x3d1759(_0x5edd4b, _0x31c35e.family, _0x43a9e1.lookup_name(_0x31c35e.saddr || "0.0.0.0"), _0x31c35e.sport, _0x41fdd9);
        return 0;
      } catch (_0x2d98cb) {
        if (typeof _0x5292fc == "undefined" || !(_0x2d98cb instanceof _0x5292fc.ErrnoError)) {
          throw _0x2d98cb;
        }
        return -_0x2d98cb.errno;
      }
    }
    function _0x7d7bd3(_0x58f292, _0x41aad2, _0x42cc33, _0x49293, _0x431925) {
      try {
        var _0x11c23d = _0x43bf14(_0x58f292);
        if (_0x41aad2 === 1) {
          if (_0x42cc33 === 4) {
            _0x576263[_0x49293 >> 2] = _0x11c23d.error;
            _0x576263[_0x431925 >> 2] = 4;
            _0x11c23d.error = null;
            return 0;
          }
        }
        return -50;
      } catch (_0x4fbcb3) {
        if (typeof _0x5292fc == "undefined" || !(_0x4fbcb3 instanceof _0x5292fc.ErrnoError)) {
          throw _0x4fbcb3;
        }
        return -_0x4fbcb3.errno;
      }
    }
    function _0x2413be(_0x44d1d8, _0x382497, _0x20ea69) {
      _0x4203c0.varargs = _0x20ea69;
      try {
        var _0x387d15 = _0x4203c0.getStreamFromFD(_0x44d1d8);
        switch (_0x382497) {
          case 21509:
          case 21505:
            {
              if (!_0x387d15.tty) {
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
              if (!_0x387d15.tty) {
                return -59;
              }
              return 0;
            }
          case 21519:
            {
              if (!_0x387d15.tty) {
                return -59;
              }
              var _0x53995b = _0x4203c0.get();
              _0x576263[_0x53995b >> 2] = 0;
              return 0;
            }
          case 21520:
            {
              if (!_0x387d15.tty) {
                return -59;
              }
              return -28;
            }
          case 21531:
            {
              var _0x53995b = _0x4203c0.get();
              return _0x5292fc.ioctl(_0x387d15, _0x382497, _0x53995b);
            }
          case 21523:
            {
              if (!_0x387d15.tty) {
                return -59;
              }
              return 0;
            }
          case 21524:
            {
              if (!_0x387d15.tty) {
                return -59;
              }
              return 0;
            }
          default:
            _0x2db121("bad ioctl syscall " + _0x382497);
        }
      } catch (_0xeb30a8) {
        if (typeof _0x5292fc == "undefined" || !(_0xeb30a8 instanceof _0x5292fc.ErrnoError)) {
          throw _0xeb30a8;
        }
        return -_0xeb30a8.errno;
      }
    }
    function _0x5af803(_0x272344, _0x2bbd75) {
      try {
        var _0x2c1d7a = _0x43bf14(_0x272344);
        _0x2c1d7a.sock_ops.listen(_0x2c1d7a, _0x2bbd75);
        return 0;
      } catch (_0x3b40cd) {
        if (typeof _0x5292fc == "undefined" || !(_0x3b40cd instanceof _0x5292fc.ErrnoError)) {
          throw _0x3b40cd;
        }
        return -_0x3b40cd.errno;
      }
    }
    function _0x301fbf(_0x530c9f, _0x4bf7be) {
      try {
        _0x530c9f = _0x4203c0.getStr(_0x530c9f);
        return _0x4203c0.doStat(_0x5292fc.lstat, _0x530c9f, _0x4bf7be);
      } catch (_0x2de80b) {
        if (typeof _0x5292fc == "undefined" || !(_0x2de80b instanceof _0x5292fc.ErrnoError)) {
          throw _0x2de80b;
        }
        return -_0x2de80b.errno;
      }
    }
    function _0x26781e(_0x119511, _0x417ee9) {
      try {
        _0x119511 = _0x4203c0.getStr(_0x119511);
        return _0x4203c0.doMkdir(_0x119511, _0x417ee9);
      } catch (_0x27477b) {
        if (typeof _0x5292fc == "undefined" || !(_0x27477b instanceof _0x5292fc.ErrnoError)) {
          throw _0x27477b;
        }
        return -_0x27477b.errno;
      }
    }
    function _0x21399f(_0xe71f46, _0x2f95a3, _0x1eb1df, _0x404055) {
      try {
        _0x2f95a3 = _0x4203c0.getStr(_0x2f95a3);
        var _0xe68bb6 = _0x404055 & 256;
        var _0x23b45c = _0x404055 & 4096;
        _0x404055 = _0x404055 & ~4352;
        _0x2f95a3 = _0x4203c0.calculateAt(_0xe71f46, _0x2f95a3, _0x23b45c);
        return _0x4203c0.doStat(_0xe68bb6 ? _0x5292fc.lstat : _0x5292fc.stat, _0x2f95a3, _0x1eb1df);
      } catch (_0x4ba253) {
        if (typeof _0x5292fc == "undefined" || !(_0x4ba253 instanceof _0x5292fc.ErrnoError)) {
          throw _0x4ba253;
        }
        return -_0x4ba253.errno;
      }
    }
    function _0x1887dc(_0x47805d, _0x18728f, _0x2a0198, _0x45a673) {
      _0x4203c0.varargs = _0x45a673;
      try {
        _0x18728f = _0x4203c0.getStr(_0x18728f);
        _0x18728f = _0x4203c0.calculateAt(_0x47805d, _0x18728f);
        var _0x591907 = _0x45a673 ? _0x4203c0.get() : 0;
        return _0x5292fc.open(_0x18728f, _0x2a0198, _0x591907).fd;
      } catch (_0x259b3a) {
        if (typeof _0x5292fc == "undefined" || !(_0x259b3a instanceof _0x5292fc.ErrnoError)) {
          throw _0x259b3a;
        }
        return -_0x259b3a.errno;
      }
    }
    var _0x2a2418 = {
      BUCKET_BUFFER_SIZE: 8192,
      mount: function (_0x63c2e0) {
        return _0x5292fc.createNode(null, "/", 16895, 0);
      },
      createPipe: function () {
        var _0x46036b = {
          buckets: [],
          refcnt: 2
        };
        _0x46036b.buckets.push({
          buffer: new Uint8Array(_0x2a2418.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
        var _0xbf6ea8 = _0x2a2418.nextname();
        var _0x9cbe43 = _0x2a2418.nextname();
        var _0x146948 = _0x5292fc.createNode(_0x2a2418.root, _0xbf6ea8, 4096, 0);
        var _0x921c32 = _0x5292fc.createNode(_0x2a2418.root, _0x9cbe43, 4096, 0);
        _0x146948.pipe = _0x46036b;
        _0x921c32.pipe = _0x46036b;
        var _0x4bc83b = _0x5292fc.createStream({
          path: _0xbf6ea8,
          node: _0x146948,
          flags: 0,
          seekable: false,
          stream_ops: _0x2a2418.stream_ops
        });
        _0x146948.stream = _0x4bc83b;
        var _0x96a2af = _0x5292fc.createStream({
          path: _0x9cbe43,
          node: _0x921c32,
          flags: 1,
          seekable: false,
          stream_ops: _0x2a2418.stream_ops
        });
        _0x921c32.stream = _0x96a2af;
        return {
          readable_fd: _0x4bc83b.fd,
          writable_fd: _0x96a2af.fd
        };
      },
      stream_ops: {
        poll: function (_0x28e24b) {
          var _0x5e77ee = _0x28e24b.node.pipe;
          if ((_0x28e24b.flags & 2097155) === 1) {
            return 260;
          } else if (_0x5e77ee.buckets.length > 0) {
            for (var _0x1f7736 = 0; _0x1f7736 < _0x5e77ee.buckets.length; _0x1f7736++) {
              var _0x3e4704 = _0x5e77ee.buckets[_0x1f7736];
              if (_0x3e4704.offset - _0x3e4704.roffset > 0) {
                return 65;
              }
            }
          }
          return 0;
        },
        ioctl: function (_0x209172, _0x5e760d, _0x6d9140) {
          return 28;
        },
        fsync: function (_0x24a618) {
          return 28;
        },
        read: function (_0x1d967e, _0x57f909, _0x3f4641, _0xd36cbc, _0x1a1d72) {
          var _0x2703d7 = _0x1d967e.node.pipe;
          var _0x55491c = 0;
          for (var _0x57f9af = 0; _0x57f9af < _0x2703d7.buckets.length; _0x57f9af++) {
            var _0x2f9c19 = _0x2703d7.buckets[_0x57f9af];
            _0x55491c += _0x2f9c19.offset - _0x2f9c19.roffset;
          }
          _0x469125(_0x57f909 instanceof ArrayBuffer || ArrayBuffer.isView(_0x57f909));
          var _0x3de6ff = _0x57f909.subarray(_0x3f4641, _0x3f4641 + _0xd36cbc);
          if (_0xd36cbc <= 0) {
            return 0;
          }
          if (_0x55491c == 0) {
            throw new _0x5292fc.ErrnoError(6);
          }
          var _0x7b26dc = Math.min(_0x55491c, _0xd36cbc);
          var _0x24cea8 = _0x7b26dc;
          var _0xd9e39e = 0;
          for (var _0x57f9af = 0; _0x57f9af < _0x2703d7.buckets.length; _0x57f9af++) {
            var _0x1ae44e = _0x2703d7.buckets[_0x57f9af];
            var _0x253eeb = _0x1ae44e.offset - _0x1ae44e.roffset;
            if (_0x7b26dc <= _0x253eeb) {
              var _0x70d388 = _0x1ae44e.buffer.subarray(_0x1ae44e.roffset, _0x1ae44e.offset);
              if (_0x7b26dc < _0x253eeb) {
                _0x70d388 = _0x70d388.subarray(0, _0x7b26dc);
                _0x1ae44e.roffset += _0x7b26dc;
              } else {
                _0xd9e39e++;
              }
              _0x3de6ff.set(_0x70d388);
              break;
            } else {
              var _0x70d388 = _0x1ae44e.buffer.subarray(_0x1ae44e.roffset, _0x1ae44e.offset);
              _0x3de6ff.set(_0x70d388);
              _0x3de6ff = _0x3de6ff.subarray(_0x70d388.byteLength);
              _0x7b26dc -= _0x70d388.byteLength;
              _0xd9e39e++;
            }
          }
          if (_0xd9e39e && _0xd9e39e == _0x2703d7.buckets.length) {
            _0xd9e39e--;
            _0x2703d7.buckets[_0xd9e39e].offset = 0;
            _0x2703d7.buckets[_0xd9e39e].roffset = 0;
          }
          _0x2703d7.buckets.splice(0, _0xd9e39e);
          return _0x24cea8;
        },
        write: function (_0x115576, _0x588a09, _0x815ba0, _0x1136f9, _0x546194) {
          var _0x174121 = _0x115576.node.pipe;
          _0x469125(_0x588a09 instanceof ArrayBuffer || ArrayBuffer.isView(_0x588a09));
          var _0x5c9355 = _0x588a09.subarray(_0x815ba0, _0x815ba0 + _0x1136f9);
          var _0x47cea6 = _0x5c9355.byteLength;
          if (_0x47cea6 <= 0) {
            return 0;
          }
          var _0x57d71b = null;
          if (_0x174121.buckets.length == 0) {
            _0x57d71b = {
              buffer: new Uint8Array(_0x2a2418.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            _0x174121.buckets.push(_0x57d71b);
          } else {
            _0x57d71b = _0x174121.buckets[_0x174121.buckets.length - 1];
          }
          _0x469125(_0x57d71b.offset <= _0x2a2418.BUCKET_BUFFER_SIZE);
          var _0x4c7659 = _0x2a2418.BUCKET_BUFFER_SIZE - _0x57d71b.offset;
          if (_0x4c7659 >= _0x47cea6) {
            _0x57d71b.buffer.set(_0x5c9355, _0x57d71b.offset);
            _0x57d71b.offset += _0x47cea6;
            return _0x47cea6;
          } else if (_0x4c7659 > 0) {
            _0x57d71b.buffer.set(_0x5c9355.subarray(0, _0x4c7659), _0x57d71b.offset);
            _0x57d71b.offset += _0x4c7659;
            _0x5c9355 = _0x5c9355.subarray(_0x4c7659, _0x5c9355.byteLength);
          }
          var _0x1f6296 = _0x5c9355.byteLength / _0x2a2418.BUCKET_BUFFER_SIZE | 0;
          var _0x327370 = _0x5c9355.byteLength % _0x2a2418.BUCKET_BUFFER_SIZE;
          for (var _0x2b1e70 = 0; _0x2b1e70 < _0x1f6296; _0x2b1e70++) {
            var _0xfeebe6 = {
              buffer: new Uint8Array(_0x2a2418.BUCKET_BUFFER_SIZE),
              offset: _0x2a2418.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            _0x174121.buckets.push(_0xfeebe6);
            _0xfeebe6.buffer.set(_0x5c9355.subarray(0, _0x2a2418.BUCKET_BUFFER_SIZE));
            _0x5c9355 = _0x5c9355.subarray(_0x2a2418.BUCKET_BUFFER_SIZE, _0x5c9355.byteLength);
          }
          if (_0x327370 > 0) {
            var _0xfeebe6 = {
              buffer: new Uint8Array(_0x2a2418.BUCKET_BUFFER_SIZE),
              offset: _0x5c9355.byteLength,
              roffset: 0
            };
            _0x174121.buckets.push(_0xfeebe6);
            _0xfeebe6.buffer.set(_0x5c9355);
          }
          return _0x47cea6;
        },
        close: function (_0x34f34e) {
          var _0x5b3448 = _0x34f34e.node.pipe;
          _0x5b3448.refcnt--;
          if (_0x5b3448.refcnt === 0) {
            _0x5b3448.buckets = null;
          }
        }
      },
      nextname: function () {
        if (!_0x2a2418.nextname.current) {
          _0x2a2418.nextname.current = 0;
        }
        return "pipe[" + _0x2a2418.nextname.current++ + "]";
      }
    };
    function _0x5adbe1(_0x42ac2a) {
      try {
        if (_0x42ac2a == 0) {
          throw new _0x5292fc.ErrnoError(21);
        }
        var _0xc64e43 = _0x2a2418.createPipe();
        _0x576263[_0x42ac2a >> 2] = _0xc64e43.readable_fd;
        _0x576263[_0x42ac2a + 4 >> 2] = _0xc64e43.writable_fd;
        return 0;
      } catch (_0x107756) {
        if (typeof _0x5292fc == "undefined" || !(_0x107756 instanceof _0x5292fc.ErrnoError)) {
          throw _0x107756;
        }
        return -_0x107756.errno;
      }
    }
    function _0x23307d(_0x23424d, _0x2cfa04, _0x720c04) {
      try {
        var _0x5a04d5 = 0;
        for (var _0x1dccdc = 0; _0x1dccdc < _0x2cfa04; _0x1dccdc++) {
          var _0x55f222 = _0x23424d + _0x1dccdc * 8;
          var _0x589ff3 = _0x576263[_0x55f222 >> 2];
          var _0x10498d = _0x2b0fe4[_0x55f222 + 4 >> 1];
          var _0x31881b = 32;
          var _0x51b142 = _0x5292fc.getStream(_0x589ff3);
          if (_0x51b142) {
            _0x31881b = _0x4203c0.DEFAULT_POLLMASK;
            if (_0x51b142.stream_ops.poll) {
              _0x31881b = _0x51b142.stream_ops.poll(_0x51b142);
            }
          }
          _0x31881b &= _0x10498d | 8 | 16;
          if (_0x31881b) {
            _0x5a04d5++;
          }
          _0x2b0fe4[_0x55f222 + 6 >> 1] = _0x31881b;
        }
        return _0x5a04d5;
      } catch (_0x12ff77) {
        if (typeof _0x5292fc == "undefined" || !(_0x12ff77 instanceof _0x5292fc.ErrnoError)) {
          throw _0x12ff77;
        }
        return -_0x12ff77.errno;
      }
    }
    function _0x452d9c(_0x207311, _0x3b93d9, _0x19fb2f, _0x40a173) {
      try {
        _0x3b93d9 = _0x4203c0.getStr(_0x3b93d9);
        _0x3b93d9 = _0x4203c0.calculateAt(_0x207311, _0x3b93d9);
        return _0x4203c0.doReadlink(_0x3b93d9, _0x19fb2f, _0x40a173);
      } catch (_0x419f2e) {
        if (typeof _0x5292fc == "undefined" || !(_0x419f2e instanceof _0x5292fc.ErrnoError)) {
          throw _0x419f2e;
        }
        return -_0x419f2e.errno;
      }
    }
    function _0x2f79fe(_0x4bf1bf, _0x44a451, _0x323487, _0x1b4163, _0x2d9825, _0x2bcf11) {
      try {
        var _0x3b6f7c = _0x43bf14(_0x4bf1bf);
        var _0xe6e779 = _0x3b6f7c.sock_ops.recvmsg(_0x3b6f7c, _0x323487);
        if (!_0xe6e779) {
          return 0;
        }
        if (_0x2d9825) {
          var _0x1a34c4 = _0x3d1759(_0x2d9825, _0x3b6f7c.family, _0x43a9e1.lookup_name(_0xe6e779.addr), _0xe6e779.port, _0x2bcf11);
        }
        _0x59122e.set(_0xe6e779.buffer, _0x44a451);
        return _0xe6e779.buffer.byteLength;
      } catch (_0x225b28) {
        if (typeof _0x5292fc == "undefined" || !(_0x225b28 instanceof _0x5292fc.ErrnoError)) {
          throw _0x225b28;
        }
        return -_0x225b28.errno;
      }
    }
    function _0x2d20ec(_0x12f5fc, _0x5da092, _0x2f22c1) {
      try {
        var _0x12fee1 = _0x43bf14(_0x12f5fc);
        var _0x58f130 = _0x576263[_0x5da092 + 8 >> 2];
        var _0x41c757 = _0x576263[_0x5da092 + 12 >> 2];
        var _0x2a5862 = 0;
        for (var _0xc5769b = 0; _0xc5769b < _0x41c757; _0xc5769b++) {
          _0x2a5862 += _0x576263[_0x58f130 + (_0xc5769b * 8 + 4) >> 2];
        }
        var _0x414705 = _0x12fee1.sock_ops.recvmsg(_0x12fee1, _0x2a5862);
        if (!_0x414705) {
          return 0;
        }
        var _0x1bd174 = _0x576263[_0x5da092 >> 2];
        if (_0x1bd174) {
          var _0x5cbc18 = _0x3d1759(_0x1bd174, _0x12fee1.family, _0x43a9e1.lookup_name(_0x414705.addr), _0x414705.port);
        }
        var _0x21c399 = 0;
        var _0x2dd3f4 = _0x414705.buffer.byteLength;
        for (var _0xc5769b = 0; _0x2dd3f4 > 0 && _0xc5769b < _0x41c757; _0xc5769b++) {
          var _0x51f24a = _0x576263[_0x58f130 + (_0xc5769b * 8 + 0) >> 2];
          var _0x1edc93 = _0x576263[_0x58f130 + (_0xc5769b * 8 + 4) >> 2];
          if (!_0x1edc93) {
            continue;
          }
          var _0x1857ea = Math.min(_0x1edc93, _0x2dd3f4);
          var _0x2ee0ba = _0x414705.buffer.subarray(_0x21c399, _0x21c399 + _0x1857ea);
          _0x59122e.set(_0x2ee0ba, _0x51f24a + _0x21c399);
          _0x21c399 += _0x1857ea;
          _0x2dd3f4 -= _0x1857ea;
        }
        return _0x21c399;
      } catch (_0x1e08d5) {
        if (typeof _0x5292fc == "undefined" || !(_0x1e08d5 instanceof _0x5292fc.ErrnoError)) {
          throw _0x1e08d5;
        }
        return -_0x1e08d5.errno;
      }
    }
    function _0x59c29d(_0x5d936e, _0x1e6caa, _0xe77de6, _0x39d109) {
      try {
        _0x1e6caa = _0x4203c0.getStr(_0x1e6caa);
        _0x39d109 = _0x4203c0.getStr(_0x39d109);
        _0x1e6caa = _0x4203c0.calculateAt(_0x5d936e, _0x1e6caa);
        _0x39d109 = _0x4203c0.calculateAt(_0xe77de6, _0x39d109);
        _0x5292fc.rename(_0x1e6caa, _0x39d109);
        return 0;
      } catch (_0x187610) {
        if (typeof _0x5292fc == "undefined" || !(_0x187610 instanceof _0x5292fc.ErrnoError)) {
          throw _0x187610;
        }
        return -_0x187610.errno;
      }
    }
    function _0x5d6e5c(_0x4a193d) {
      try {
        _0x4a193d = _0x4203c0.getStr(_0x4a193d);
        _0x5292fc.rmdir(_0x4a193d);
        return 0;
      } catch (_0x2ddd31) {
        if (typeof _0x5292fc == "undefined" || !(_0x2ddd31 instanceof _0x5292fc.ErrnoError)) {
          throw _0x2ddd31;
        }
        return -_0x2ddd31.errno;
      }
    }
    function _0x47770a(_0x268bdc, _0x1ecbab, _0x5637b3) {
      try {
        var _0x180a10 = _0x43bf14(_0x268bdc);
        var _0x488cc3 = _0x576263[_0x1ecbab + 8 >> 2];
        var _0x2ceaf5 = _0x576263[_0x1ecbab + 12 >> 2];
        var _0x411ccd;
        var _0x470e4c;
        var _0x5d8f9c = _0x576263[_0x1ecbab >> 2];
        var _0x534bf7 = _0x576263[_0x1ecbab + 4 >> 2];
        if (_0x5d8f9c) {
          var _0x2d355c = _0x43a17d(_0x5d8f9c, _0x534bf7);
          if (_0x2d355c.errno) {
            return -_0x2d355c.errno;
          }
          _0x470e4c = _0x2d355c.port;
          _0x411ccd = _0x43a9e1.lookup_addr(_0x2d355c.addr) || _0x2d355c.addr;
        }
        var _0x2aaf02 = 0;
        for (var _0x513fad = 0; _0x513fad < _0x2ceaf5; _0x513fad++) {
          _0x2aaf02 += _0x576263[_0x488cc3 + (_0x513fad * 8 + 4) >> 2];
        }
        var _0x285263 = new Uint8Array(_0x2aaf02);
        var _0x5847ac = 0;
        for (var _0x513fad = 0; _0x513fad < _0x2ceaf5; _0x513fad++) {
          var _0x174ae7 = _0x576263[_0x488cc3 + (_0x513fad * 8 + 0) >> 2];
          var _0x27fc3b = _0x576263[_0x488cc3 + (_0x513fad * 8 + 4) >> 2];
          for (var _0x59294d = 0; _0x59294d < _0x27fc3b; _0x59294d++) {
            _0x285263[_0x5847ac++] = _0xe1b6fc[_0x174ae7 + _0x59294d >> 0];
          }
        }
        return _0x180a10.sock_ops.sendmsg(_0x180a10, _0x285263, 0, _0x2aaf02, _0x411ccd, _0x470e4c);
      } catch (_0x3fdf91) {
        if (typeof _0x5292fc == "undefined" || !(_0x3fdf91 instanceof _0x5292fc.ErrnoError)) {
          throw _0x3fdf91;
        }
        return -_0x3fdf91.errno;
      }
    }
    function _0x32c423(_0x10d4b8, _0x397339, _0xe4033c, _0x1f2de5, _0x2eed7b, _0x440561) {
      try {
        var _0x1e5b50 = _0x43bf14(_0x10d4b8);
        var _0x337962 = _0x3102db(_0x2eed7b, _0x440561, true);
        if (!_0x337962) {
          return _0x5292fc.write(_0x1e5b50.stream, _0xe1b6fc, _0x397339, _0xe4033c);
        } else {
          return _0x1e5b50.sock_ops.sendmsg(_0x1e5b50, _0xe1b6fc, _0x397339, _0xe4033c, _0x337962.addr, _0x337962.port);
        }
      } catch (_0x5bf665) {
        if (typeof _0x5292fc == "undefined" || !(_0x5bf665 instanceof _0x5292fc.ErrnoError)) {
          throw _0x5bf665;
        }
        return -_0x5bf665.errno;
      }
    }
    function _0xf3c46a(_0x18e03b, _0xb84db5, _0x45f1c4) {
      try {
        var _0x287dd6 = _0x5e5b72.createSocket(_0x18e03b, _0xb84db5, _0x45f1c4);
        return _0x287dd6.stream.fd;
      } catch (_0x4b715a) {
        if (typeof _0x5292fc == "undefined" || !(_0x4b715a instanceof _0x5292fc.ErrnoError)) {
          throw _0x4b715a;
        }
        return -_0x4b715a.errno;
      }
    }
    function _0x49c5b1(_0x565dd9, _0x17d990) {
      try {
        _0x565dd9 = _0x4203c0.getStr(_0x565dd9);
        return _0x4203c0.doStat(_0x5292fc.stat, _0x565dd9, _0x17d990);
      } catch (_0x5bf852) {
        if (typeof _0x5292fc == "undefined" || !(_0x5bf852 instanceof _0x5292fc.ErrnoError)) {
          throw _0x5bf852;
        }
        return -_0x5bf852.errno;
      }
    }
    function _0x57072f(_0x4f30d0, _0x39998b, _0x230920) {
      try {
        _0x4f30d0 = _0x4203c0.getStr(_0x4f30d0);
        _0x576263[_0x230920 + 4 >> 2] = 4096;
        _0x576263[_0x230920 + 40 >> 2] = 4096;
        _0x576263[_0x230920 + 8 >> 2] = 1000000;
        _0x576263[_0x230920 + 12 >> 2] = 500000;
        _0x576263[_0x230920 + 16 >> 2] = 500000;
        _0x576263[_0x230920 + 20 >> 2] = _0x5292fc.nextInode;
        _0x576263[_0x230920 + 24 >> 2] = 1000000;
        _0x576263[_0x230920 + 28 >> 2] = 42;
        _0x576263[_0x230920 + 44 >> 2] = 2;
        _0x576263[_0x230920 + 36 >> 2] = 255;
        return 0;
      } catch (_0x176b6b) {
        if (typeof _0x5292fc == "undefined" || !(_0x176b6b instanceof _0x5292fc.ErrnoError)) {
          throw _0x176b6b;
        }
        return -_0x176b6b.errno;
      }
    }
    function _0xb18b36(_0x4960a0, _0x1c3e87) {
      try {
        _0x4960a0 = _0x4203c0.getStr(_0x4960a0);
        _0x1c3e87 = _0x4203c0.getStr(_0x1c3e87);
        _0x5292fc.symlink(_0x4960a0, _0x1c3e87);
        return 0;
      } catch (_0x12b8a9) {
        if (typeof _0x5292fc == "undefined" || !(_0x12b8a9 instanceof _0x5292fc.ErrnoError)) {
          throw _0x12b8a9;
        }
        return -_0x12b8a9.errno;
      }
    }
    function _0x19a936(_0x11d1e1, _0x6d5af3, _0x2dc6e3) {
      try {
        _0x11d1e1 = _0x4203c0.getStr(_0x11d1e1);
        var _0x53fba5 = _0x4203c0.get64(_0x6d5af3, _0x2dc6e3);
        _0x5292fc.truncate(_0x11d1e1, _0x53fba5);
        return 0;
      } catch (_0xbcc04d) {
        if (typeof _0x5292fc == "undefined" || !(_0xbcc04d instanceof _0x5292fc.ErrnoError)) {
          throw _0xbcc04d;
        }
        return -_0xbcc04d.errno;
      }
    }
    function _0x75634a(_0x4ccc97, _0x2400cc, _0x107d36) {
      try {
        _0x2400cc = _0x4203c0.getStr(_0x2400cc);
        _0x2400cc = _0x4203c0.calculateAt(_0x4ccc97, _0x2400cc);
        if (_0x107d36 === 0) {
          _0x5292fc.unlink(_0x2400cc);
        } else if (_0x107d36 === 512) {
          _0x5292fc.rmdir(_0x2400cc);
        } else {
          _0x2db121("Invalid flags passed to unlinkat");
        }
        return 0;
      } catch (_0x3e906e) {
        if (typeof _0x5292fc == "undefined" || !(_0x3e906e instanceof _0x5292fc.ErrnoError)) {
          throw _0x3e906e;
        }
        return -_0x3e906e.errno;
      }
    }
    function _0x370939(_0x35dd4e, _0x428f45, _0x34ba5a, _0x52112a) {
      try {
        _0x428f45 = _0x4203c0.getStr(_0x428f45);
        _0x428f45 = _0x4203c0.calculateAt(_0x35dd4e, _0x428f45, true);
        if (!_0x34ba5a) {
          var _0x150423 = Date.now();
          var _0x334633 = _0x150423;
        } else {
          var _0x50c65f = _0x576263[_0x34ba5a >> 2];
          var _0x2d4fe1 = _0x576263[_0x34ba5a + 4 >> 2];
          _0x150423 = _0x50c65f * 1000 + _0x2d4fe1 / 1000000;
          _0x34ba5a += 8;
          _0x50c65f = _0x576263[_0x34ba5a >> 2];
          _0x2d4fe1 = _0x576263[_0x34ba5a + 4 >> 2];
          _0x334633 = _0x50c65f * 1000 + _0x2d4fe1 / 1000000;
        }
        _0x5292fc.utime(_0x428f45, _0x150423, _0x334633);
        return 0;
      } catch (_0x5bbf49) {
        if (typeof _0x5292fc == "undefined" || !(_0x5bbf49 instanceof _0x5292fc.ErrnoError)) {
          throw _0x5bbf49;
        }
        return -_0x5bbf49.errno;
      }
    }
    var _0x52f4b0 = 0;
    function _0x2c73b4(_0x3ab11d) {
      var _0x56f459 = !_0x52f4b0;
      _0x52f4b0 = 1;
      return _0x56f459;
    }
    function _0x3c5ac8(_0x337e94, _0x3b8c80) {
      return 0;
    }
    function _0x430708() {
      return Date.now();
    }
    var _0x302d44 = true;
    function _0x1b5957() {
      return _0x302d44;
    }
    function _0x26127a() {
      throw Infinity;
    }
    function _0x300d0a(_0x25eef6, _0x590f93) {
      var _0x520aab = new Date(_0x576263[_0x25eef6 >> 2] * 1000);
      _0x576263[_0x590f93 >> 2] = _0x520aab.getUTCSeconds();
      _0x576263[_0x590f93 + 4 >> 2] = _0x520aab.getUTCMinutes();
      _0x576263[_0x590f93 + 8 >> 2] = _0x520aab.getUTCHours();
      _0x576263[_0x590f93 + 12 >> 2] = _0x520aab.getUTCDate();
      _0x576263[_0x590f93 + 16 >> 2] = _0x520aab.getUTCMonth();
      _0x576263[_0x590f93 + 20 >> 2] = _0x520aab.getUTCFullYear() - 1900;
      _0x576263[_0x590f93 + 24 >> 2] = _0x520aab.getUTCDay();
      var _0x3d6798 = Date.UTC(_0x520aab.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var _0x5717ee = (_0x520aab.getTime() - _0x3d6798) / 86400000 | 0;
      _0x576263[_0x590f93 + 28 >> 2] = _0x5717ee;
    }
    function _0x17f61f(_0xda330f, _0x3f3feb) {
      var _0x1b4f99 = new Date(_0x576263[_0xda330f >> 2] * 1000);
      _0x576263[_0x3f3feb >> 2] = _0x1b4f99.getSeconds();
      _0x576263[_0x3f3feb + 4 >> 2] = _0x1b4f99.getMinutes();
      _0x576263[_0x3f3feb + 8 >> 2] = _0x1b4f99.getHours();
      _0x576263[_0x3f3feb + 12 >> 2] = _0x1b4f99.getDate();
      _0x576263[_0x3f3feb + 16 >> 2] = _0x1b4f99.getMonth();
      _0x576263[_0x3f3feb + 20 >> 2] = _0x1b4f99.getFullYear() - 1900;
      _0x576263[_0x3f3feb + 24 >> 2] = _0x1b4f99.getDay();
      var _0x3b33aa = new Date(_0x1b4f99.getFullYear(), 0, 1);
      var _0x3d928f = (_0x1b4f99.getTime() - _0x3b33aa.getTime()) / 86400000 | 0;
      _0x576263[_0x3f3feb + 28 >> 2] = _0x3d928f;
      _0x576263[_0x3f3feb + 36 >> 2] = -(_0x1b4f99.getTimezoneOffset() * 60);
      var _0x1f1fba = new Date(_0x1b4f99.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x101220 = _0x3b33aa.getTimezoneOffset();
      var _0x132897 = (_0x1f1fba != _0x101220 && _0x1b4f99.getTimezoneOffset() == Math.min(_0x101220, _0x1f1fba)) | 0;
      _0x576263[_0x3f3feb + 32 >> 2] = _0x132897;
    }
    function _0x35e765(_0x3e2fdc) {
      var _0x1a611c = new Date(_0x576263[_0x3e2fdc + 20 >> 2] + 1900, _0x576263[_0x3e2fdc + 16 >> 2], _0x576263[_0x3e2fdc + 12 >> 2], _0x576263[_0x3e2fdc + 8 >> 2], _0x576263[_0x3e2fdc + 4 >> 2], _0x576263[_0x3e2fdc >> 2], 0);
      var _0x4c5fa3 = _0x576263[_0x3e2fdc + 32 >> 2];
      var _0x3f384c = _0x1a611c.getTimezoneOffset();
      var _0x1bbf96 = new Date(_0x1a611c.getFullYear(), 0, 1);
      var _0x172d62 = new Date(_0x1a611c.getFullYear(), 6, 1).getTimezoneOffset();
      var _0x1b4e01 = _0x1bbf96.getTimezoneOffset();
      var _0x3c0ef9 = Math.min(_0x1b4e01, _0x172d62);
      if (_0x4c5fa3 < 0) {
        _0x576263[_0x3e2fdc + 32 >> 2] = Number(_0x172d62 != _0x1b4e01 && _0x3c0ef9 == _0x3f384c);
      } else if (_0x4c5fa3 > 0 != (_0x3c0ef9 == _0x3f384c)) {
        var _0x48828c = Math.max(_0x1b4e01, _0x172d62);
        var _0x1b50c7 = _0x4c5fa3 > 0 ? _0x3c0ef9 : _0x48828c;
        _0x1a611c.setTime(_0x1a611c.getTime() + (_0x1b50c7 - _0x3f384c) * 60000);
      }
      _0x576263[_0x3e2fdc + 24 >> 2] = _0x1a611c.getDay();
      var _0x32cd06 = (_0x1a611c.getTime() - _0x1bbf96.getTime()) / 86400000 | 0;
      _0x576263[_0x3e2fdc + 28 >> 2] = _0x32cd06;
      _0x576263[_0x3e2fdc >> 2] = _0x1a611c.getSeconds();
      _0x576263[_0x3e2fdc + 4 >> 2] = _0x1a611c.getMinutes();
      _0x576263[_0x3e2fdc + 8 >> 2] = _0x1a611c.getHours();
      _0x576263[_0x3e2fdc + 12 >> 2] = _0x1a611c.getDate();
      _0x576263[_0x3e2fdc + 16 >> 2] = _0x1a611c.getMonth();
      return _0x1a611c.getTime() / 1000 | 0;
    }
    function _0x4e4c90(_0x3fcd85, _0x287649, _0x59ddc7, _0x136191, _0x455ca8, _0xa79b5f, _0x5122c4, _0x57fe5a) {
      try {
        var _0x3e3941 = _0x5292fc.getStream(_0x455ca8);
        if (!_0x3e3941) {
          return -8;
        }
        var _0x1dd770 = _0x5292fc.mmap(_0x3e3941, _0x3fcd85, _0x287649, _0xa79b5f, _0x59ddc7, _0x136191);
        var _0x335f2b = _0x1dd770.ptr;
        _0x576263[_0x5122c4 >> 2] = _0x1dd770.allocated;
        return _0x335f2b;
      } catch (_0x302a74) {
        if (typeof _0x5292fc == "undefined" || !(_0x302a74 instanceof _0x5292fc.ErrnoError)) {
          throw _0x302a74;
        }
        return -_0x302a74.errno;
      }
    }
    function _0x58d8cf(_0x31b274, _0x59319c, _0x47dc39, _0x4d4d08, _0x33ea01, _0x4fd0aa) {
      try {
        var _0x2456ae = _0x5292fc.getStream(_0x33ea01);
        if (_0x2456ae) {
          if (_0x47dc39 & 2) {
            _0x4203c0.doMsync(_0x31b274, _0x2456ae, _0x59319c, _0x4d4d08, _0x4fd0aa);
          }
          _0x5292fc.munmap(_0x2456ae);
        }
      } catch (_0x56a761) {
        if (typeof _0x5292fc == "undefined" || !(_0x56a761 instanceof _0x5292fc.ErrnoError)) {
          throw _0x56a761;
        }
        return -_0x56a761.errno;
      }
    }
    function _0x400750(_0x3bd4df, _0x2d37a3, _0x1d0d7b) {
      var _0x27fbb9 = new Date().getFullYear();
      var _0x43abab = new Date(_0x27fbb9, 0, 1);
      var _0x2beded = new Date(_0x27fbb9, 6, 1);
      var _0x49825e = _0x43abab.getTimezoneOffset();
      var _0x5e7200 = _0x2beded.getTimezoneOffset();
      var _0x27f8f6 = Math.max(_0x49825e, _0x5e7200);
      _0x576263[_0x3bd4df >> 2] = _0x27f8f6 * 60;
      _0x576263[_0x2d37a3 >> 2] = Number(_0x49825e != _0x5e7200);
      function _0x349344(_0x2dacbe) {
        var _0x524302 = _0x2dacbe.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        if (_0x524302) {
          return _0x524302[1];
        } else {
          return "GMT";
        }
      }
      var _0x7dbea1 = _0x349344(_0x43abab);
      var _0x537e6a = _0x349344(_0x2beded);
      var _0x36db84 = _0x1254fd(_0x7dbea1);
      var _0x353c55 = _0x1254fd(_0x537e6a);
      if (_0x5e7200 < _0x49825e) {
        _0x576263[_0x1d0d7b >> 2] = _0x36db84;
        _0x576263[_0x1d0d7b + 4 >> 2] = _0x353c55;
      } else {
        _0x576263[_0x1d0d7b >> 2] = _0x353c55;
        _0x576263[_0x1d0d7b + 4 >> 2] = _0x36db84;
      }
    }
    function _0x1db139(_0x5b87ed, _0x9c2a14, _0x2f4a87) {
      if (_0x1db139.called) {
        return;
      }
      _0x1db139.called = true;
      _0x400750(_0x5b87ed, _0x9c2a14, _0x2f4a87);
    }
    function _0x1cc5a6() {
      _0x2db121("");
    }
    var _0x1f9551 = [];
    function _0x5c21d5(_0x4a930f, _0x2d5a55) {
      _0x1f9551.length = 0;
      var _0x75a799;
      _0x2d5a55 >>= 2;
      while (_0x75a799 = _0x59122e[_0x4a930f++]) {
        var _0xa60b35 = _0x75a799 < 105;
        if (_0xa60b35 && _0x2d5a55 & 1) {
          _0x2d5a55++;
        }
        _0x1f9551.push(_0xa60b35 ? _0xe5eb95[_0x2d5a55++ >> 1] : _0x576263[_0x2d5a55]);
        ++_0x2d5a55;
      }
      return _0x1f9551;
    }
    function _0x36c432(_0x2d6104, _0x27f9e3, _0x2ed920, _0x515f8e) {
      var _0x443e4c = _0x5c21d5(_0x27f9e3, _0x2ed920);
      return _0x3de1ac[_0x2d6104].apply(null, _0x443e4c);
    }
    function _0x2e0685(_0x3aaf6a, _0x2c8ba8, _0xa23b46) {
      return _0x36c432(_0x3aaf6a, _0x2c8ba8, _0xa23b46, 1);
    }
    function _0x4d5bf9(_0x345ec8, _0x50cd57) {
      _0x2a402d.mainLoop.timingMode = _0x345ec8;
      _0x2a402d.mainLoop.timingValue = _0x50cd57;
      if (!_0x2a402d.mainLoop.func) {
        return 1;
      }
      if (!_0x2a402d.mainLoop.running) {
        _0x2a402d.mainLoop.running = true;
      }
      if (_0x345ec8 == 0) {
        _0x2a402d.mainLoop.scheduler = function _0x559c69() {
          var _0x57c694 = Math.max(0, _0x2a402d.mainLoop.tickStartTime + _0x50cd57 - _0x1b9e3f()) | 0;
          setTimeout(_0x2a402d.mainLoop.runner, _0x57c694);
        };
        _0x2a402d.mainLoop.method = "timeout";
      } else if (_0x345ec8 == 1) {
        _0x2a402d.mainLoop.scheduler = function _0x195c96() {
          _0x2a402d.requestAnimationFrame(_0x2a402d.mainLoop.runner);
        };
        _0x2a402d.mainLoop.method = "rAF";
      } else if (_0x345ec8 == 2) {
        if (typeof setImmediate == "undefined") {
          var _0xfbf577 = [];
          var _0x1b6f02 = "setimmediate";
          function _0x469a24(_0x2975b1) {
            if (_0x2975b1.data === _0x1b6f02 || _0x2975b1.data.target === _0x1b6f02) {
              _0x2975b1.stopPropagation();
              _0xfbf577.shift()();
            }
          }
          addEventListener("message", _0x469a24, true);
          setImmediate = function _0x512e1b(_0x5e5ef2) {
            _0xfbf577.push(_0x5e5ef2);
            if (_0x186d8a) {
              if (_0x17aa78.setImmediates === undefined) {
                _0x17aa78.setImmediates = [];
              }
              _0x17aa78.setImmediates.push(_0x5e5ef2);
              postMessage({
                target: _0x1b6f02
              });
            } else {
              postMessage(_0x1b6f02, "*");
            }
          };
        }
        _0x2a402d.mainLoop.scheduler = function _0x4948ea() {
          setImmediate(_0x2a402d.mainLoop.runner);
        };
        _0x2a402d.mainLoop.method = "immediate";
      }
      return 0;
    }
    var _0x1b9e3f;
    if (_0x232f5c) {
      _0x1b9e3f = () => {
        var _0xb94ed5 = process.hrtime();
        return _0xb94ed5[0] * 1000 + _0xb94ed5[1] / 1000000;
      };
    } else {
      _0x1b9e3f = () => performance.now();
    }
    function _0x442607(_0x4b2592) {
      _0x49da6d(_0x4b2592);
    }
    function _0x3f907e() {}
    function _0x3ddb3f(_0xbc9798, _0x1699b8, _0x2ca84b, _0xabc89c, _0x25d325) {
      _0x469125(!_0x2a402d.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x2a402d.mainLoop.func = _0xbc9798;
      _0x2a402d.mainLoop.arg = _0xabc89c;
      var _0x1d1dfe = _0x2a402d.mainLoop.currentlyRunningMainloop;
      function _0x2ba542() {
        if (_0x1d1dfe < _0x2a402d.mainLoop.currentlyRunningMainloop) {
          _0x3f907e();
          return false;
        }
        return true;
      }
      _0x2a402d.mainLoop.running = false;
      _0x2a402d.mainLoop.runner = function _0x37f93a() {
        if (_0x1cc874) {
          return;
        }
        if (_0x2a402d.mainLoop.queue.length > 0) {
          var _0x18bd43 = Date.now();
          var _0x527149 = _0x2a402d.mainLoop.queue.shift();
          _0x527149.func(_0x527149.arg);
          if (_0x2a402d.mainLoop.remainingBlockers) {
            var _0x4d1cb5 = _0x2a402d.mainLoop.remainingBlockers;
            var _0x2febf1 = _0x4d1cb5 % 1 == 0 ? _0x4d1cb5 - 1 : Math.floor(_0x4d1cb5);
            if (_0x527149.counted) {
              _0x2a402d.mainLoop.remainingBlockers = _0x2febf1;
            } else {
              _0x2febf1 = _0x2febf1 + 0.5;
              _0x2a402d.mainLoop.remainingBlockers = (_0x4d1cb5 * 8 + _0x2febf1) / 9;
            }
          }
          _0x329315("main loop blocker \"" + _0x527149.name + "\" took " + (Date.now() - _0x18bd43) + " ms");
          _0x2a402d.mainLoop.updateStatus();
          if (!_0x2ba542()) {
            return;
          }
          setTimeout(_0x2a402d.mainLoop.runner, 0);
          return;
        }
        if (!_0x2ba542()) {
          return;
        }
        _0x2a402d.mainLoop.currentFrameNumber = _0x2a402d.mainLoop.currentFrameNumber + 1 | 0;
        if (_0x2a402d.mainLoop.timingMode == 1 && _0x2a402d.mainLoop.timingValue > 1 && _0x2a402d.mainLoop.currentFrameNumber % _0x2a402d.mainLoop.timingValue != 0) {
          _0x2a402d.mainLoop.scheduler();
          return;
        } else if (_0x2a402d.mainLoop.timingMode == 0) {
          _0x2a402d.mainLoop.tickStartTime = _0x1b9e3f();
        }
        _0x18b0dd.newRenderingFrameStarted();
        _0x2a402d.mainLoop.runIter(_0xbc9798);
        if (!_0x2ba542()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x2a402d.mainLoop.scheduler();
      };
      if (!_0x25d325) {
        if (_0x1699b8 && _0x1699b8 > 0) {
          _0x4d5bf9(0, 1000 / _0x1699b8);
        } else {
          _0x4d5bf9(1, 1);
        }
        _0x2a402d.mainLoop.scheduler();
      }
      if (_0x2ca84b) {
        throw "unwind";
      }
    }
    function _0x5d8402(_0x3714ac, _0x1eabe8) {
      if (_0x1cc874) {
        return;
      }
      if (_0x1eabe8) {
        _0x3714ac();
        return;
      }
      try {
        _0x3714ac();
      } catch (_0x5a293e) {
        _0x1fa151(_0x5a293e);
      }
    }
    function _0x405d33(_0x41652d, _0x18fe56) {
      return setTimeout(function () {
        _0x5d8402(_0x41652d);
      }, _0x18fe56);
    }
    var _0x2a402d = {
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
          _0x2a402d.mainLoop.scheduler = null;
          _0x2a402d.mainLoop.currentlyRunningMainloop++;
        },
        resume: function () {
          _0x2a402d.mainLoop.currentlyRunningMainloop++;
          var _0xdc9e2f = _0x2a402d.mainLoop.timingMode;
          var _0x494933 = _0x2a402d.mainLoop.timingValue;
          var _0x51f648 = _0x2a402d.mainLoop.func;
          _0x2a402d.mainLoop.func = null;
          _0x3ddb3f(_0x51f648, 0, false, _0x2a402d.mainLoop.arg, true);
          _0x4d5bf9(_0xdc9e2f, _0x494933);
          _0x2a402d.mainLoop.scheduler();
        },
        updateStatus: function () {
          if (_0x17aa78.setStatus) {
            var _0x232ec8 = _0x17aa78.statusMessage || "Please wait...";
            var _0x486f40 = _0x2a402d.mainLoop.remainingBlockers;
            var _0xc4808e = _0x2a402d.mainLoop.expectedBlockers;
            if (_0x486f40) {
              if (_0x486f40 < _0xc4808e) {
                _0x17aa78.setStatus(_0x232ec8 + " (" + (_0xc4808e - _0x486f40) + "/" + _0xc4808e + ")");
              } else {
                _0x17aa78.setStatus(_0x232ec8);
              }
            } else {
              _0x17aa78.setStatus("");
            }
          }
        },
        runIter: function (_0x3e91da) {
          if (_0x1cc874) {
            return;
          }
          if (_0x17aa78.preMainLoop) {
            var _0x57c564 = _0x17aa78.preMainLoop();
            if (_0x57c564 === false) {
              return;
            }
          }
          _0x5d8402(_0x3e91da);
          if (_0x17aa78.postMainLoop) {
            _0x17aa78.postMainLoop();
          }
        }
      },
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      init: function () {
        if (!_0x17aa78.preloadPlugins) {
          _0x17aa78.preloadPlugins = [];
        }
        if (_0x2a402d.initted) {
          return;
        }
        _0x2a402d.initted = true;
        try {
          new Blob();
          _0x2a402d.hasBlobConstructor = true;
        } catch (_0x577ed9) {
          _0x2a402d.hasBlobConstructor = false;
          _0x329315("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x2a402d.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x2a402d.hasBlobConstructor ? _0x329315("warning: no BlobBuilder") : null;
        _0x2a402d.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0x17aa78.noImageDecoding && typeof _0x2a402d.URLObject == "undefined") {
          _0x329315("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0x17aa78.noImageDecoding = true;
        }
        var _0x1a9d0b = {};
        _0x1a9d0b.canHandle = function _0x384125(_0x250268) {
          return !_0x17aa78.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x250268);
        };
        _0x1a9d0b.handle = function _0x44f56c(_0x17c279, _0x572292, _0x40669e, _0x58817f) {
          var _0x207a97 = null;
          if (_0x2a402d.hasBlobConstructor) {
            try {
              _0x207a97 = new Blob([_0x17c279], {
                type: _0x2a402d.getMimetype(_0x572292)
              });
              if (_0x207a97.size !== _0x17c279.length) {
                _0x207a97 = new Blob([new Uint8Array(_0x17c279).buffer], {
                  type: _0x2a402d.getMimetype(_0x572292)
                });
              }
            } catch (_0x459678) {
              _0x27db15("Blob constructor present but fails: " + _0x459678 + "; falling back to blob builder");
            }
          }
          if (!_0x207a97) {
            var _0x4955fd = new _0x2a402d.BlobBuilder();
            _0x4955fd.append(new Uint8Array(_0x17c279).buffer);
            _0x207a97 = _0x4955fd.getBlob();
          }
          var _0x87398 = _0x2a402d.URLObject.createObjectURL(_0x207a97);
          var _0x50f9ab = new Image();
          _0x50f9ab.onload = () => {
            _0x469125(_0x50f9ab.complete, "Image " + _0x572292 + " could not be decoded");
            var _0x35d729 = document.createElement("canvas");
            _0x35d729.width = _0x50f9ab.width;
            _0x35d729.height = _0x50f9ab.height;
            var _0xf69269 = _0x35d729.getContext("2d");
            _0xf69269.drawImage(_0x50f9ab, 0, 0);
            _0x17aa78.preloadedImages[_0x572292] = _0x35d729;
            _0x2a402d.URLObject.revokeObjectURL(_0x87398);
            if (_0x40669e) {
              _0x40669e(_0x17c279);
            }
          };
          _0x50f9ab.onerror = _0x13f440 => {
            _0x329315("Image " + _0x87398 + " could not be decoded");
            if (_0x58817f) {
              _0x58817f();
            }
          };
          _0x50f9ab.src = _0x87398;
        };
        _0x17aa78.preloadPlugins.push(_0x1a9d0b);
        var _0x13e087 = {};
        _0x13e087.canHandle = function _0x155772(_0x264260) {
          return !_0x17aa78.noAudioDecoding && _0x264260.substr(-4) in {
            ".ogg": 1,
            ".wav": 1,
            ".mp3": 1
          };
        };
        _0x13e087.handle = function _0x23eb4b(_0x17cea2, _0x13cbe8, _0x192949, _0x15d35e) {
          var _0x303cd8 = false;
          function _0x55d303(_0xf613b7) {
            if (_0x303cd8) {
              return;
            }
            _0x303cd8 = true;
            _0x17aa78.preloadedAudios[_0x13cbe8] = _0xf613b7;
            if (_0x192949) {
              _0x192949(_0x17cea2);
            }
          }
          function _0x3d3ca0() {
            if (_0x303cd8) {
              return;
            }
            _0x303cd8 = true;
            _0x17aa78.preloadedAudios[_0x13cbe8] = new Audio();
            if (_0x15d35e) {
              _0x15d35e();
            }
          }
          if (_0x2a402d.hasBlobConstructor) {
            try {
              var _0x1805a2 = new Blob([_0x17cea2], {
                type: _0x2a402d.getMimetype(_0x13cbe8)
              });
            } catch (_0x3bc621) {
              return _0x3d3ca0();
            }
            var _0x46304c = _0x2a402d.URLObject.createObjectURL(_0x1805a2);
            var _0x105e72 = new Audio();
            _0x105e72.addEventListener("canplaythrough", function () {
              _0x55d303(_0x105e72);
            }, false);
            _0x105e72.onerror = function _0x9b88c8(_0x38af00) {
              if (_0x303cd8) {
                return;
              }
              _0x329315("warning: browser could not fully decode audio " + _0x13cbe8 + ", trying slower base64 approach");
              function _0x4fb108(_0x243353) {
                var _0x503850 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var _0x51fa57 = "=";
                var _0x19c9fa = "";
                var _0x1f153e = 0;
                var _0xb17d74 = 0;
                for (var _0x43b620 = 0; _0x43b620 < _0x243353.length; _0x43b620++) {
                  _0x1f153e = _0x1f153e << 8 | _0x243353[_0x43b620];
                  _0xb17d74 += 8;
                  while (_0xb17d74 >= 6) {
                    var _0x5bf668 = _0x1f153e >> _0xb17d74 - 6 & 63;
                    _0xb17d74 -= 6;
                    _0x19c9fa += _0x503850[_0x5bf668];
                  }
                }
                if (_0xb17d74 == 2) {
                  _0x19c9fa += _0x503850[(_0x1f153e & 3) << 4];
                  _0x19c9fa += _0x51fa57 + _0x51fa57;
                } else if (_0xb17d74 == 4) {
                  _0x19c9fa += _0x503850[(_0x1f153e & 15) << 2];
                  _0x19c9fa += _0x51fa57;
                }
                return _0x19c9fa;
              }
              _0x105e72.src = "data:audio/x-" + _0x13cbe8.substr(-3) + ";base64," + _0x4fb108(_0x17cea2);
              _0x55d303(_0x105e72);
            };
            _0x105e72.src = _0x46304c;
            _0x405d33(function () {
              _0x55d303(_0x105e72);
            }, 10000);
          } else {
            return _0x3d3ca0();
          }
        };
        _0x17aa78.preloadPlugins.push(_0x13e087);
        function _0xbd36fa() {
          _0x2a402d.pointerLock = document.pointerLockElement === _0x17aa78.canvas || document.mozPointerLockElement === _0x17aa78.canvas || document.webkitPointerLockElement === _0x17aa78.canvas || document.msPointerLockElement === _0x17aa78.canvas;
        }
        var _0x50a07f = _0x17aa78.canvas;
        if (_0x50a07f) {
          _0x50a07f.requestPointerLock = _0x50a07f.requestPointerLock || _0x50a07f.mozRequestPointerLock || _0x50a07f.webkitRequestPointerLock || _0x50a07f.msRequestPointerLock || function () {};
          _0x50a07f.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x50a07f.exitPointerLock = _0x50a07f.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0xbd36fa, false);
          document.addEventListener("mozpointerlockchange", _0xbd36fa, false);
          document.addEventListener("webkitpointerlockchange", _0xbd36fa, false);
          document.addEventListener("mspointerlockchange", _0xbd36fa, false);
          if (_0x17aa78.elementPointerLock) {
            _0x50a07f.addEventListener("click", function (_0x2ae525) {
              if (!_0x2a402d.pointerLock && _0x17aa78.canvas.requestPointerLock) {
                _0x17aa78.canvas.requestPointerLock();
                _0x2ae525.preventDefault();
              }
            }, false);
          }
        }
      },
      handledByPreloadPlugin: function (_0x41a417, _0x1a93d3, _0x513ed, _0x1cd88d) {
        _0x2a402d.init();
        var _0xc2722f = false;
        _0x17aa78.preloadPlugins.forEach(function (_0x36947e) {
          if (_0xc2722f) {
            return;
          }
          if (_0x36947e.canHandle(_0x1a93d3)) {
            _0x36947e.handle(_0x41a417, _0x1a93d3, _0x513ed, _0x1cd88d);
            _0xc2722f = true;
          }
        });
        return _0xc2722f;
      },
      createContext: function (_0x41bc07, _0x26e8c0, _0x29d68e, _0x4890c3) {
        if (_0x26e8c0 && _0x17aa78.ctx && _0x41bc07 == _0x17aa78.canvas) {
          return _0x17aa78.ctx;
        }
        var _0x4658c2;
        var _0x2b7a81;
        if (_0x26e8c0) {
          var _0x377f68 = {
            antialias: false,
            alpha: false,
            majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
          };
          if (_0x4890c3) {
            for (var _0xf4d9d1 in _0x4890c3) {
              _0x377f68[_0xf4d9d1] = _0x4890c3[_0xf4d9d1];
            }
          }
          if (typeof _0x18b0dd != "undefined") {
            _0x2b7a81 = _0x18b0dd.createContext(_0x41bc07, _0x377f68);
            if (_0x2b7a81) {
              _0x4658c2 = _0x18b0dd.getContext(_0x2b7a81).GLctx;
            }
          }
        } else {
          _0x4658c2 = _0x41bc07.getContext("2d");
        }
        if (!_0x4658c2) {
          return null;
        }
        if (_0x29d68e) {
          if (!_0x26e8c0) {
            _0x469125(typeof _0x5cd50f == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0x17aa78.ctx = _0x4658c2;
          if (_0x26e8c0) {
            _0x18b0dd.makeContextCurrent(_0x2b7a81);
          }
          _0x17aa78.useWebGL = _0x26e8c0;
          _0x2a402d.moduleContextCreatedCallbacks.forEach(function (_0x19d991) {
            _0x19d991();
          });
          _0x2a402d.init();
        }
        return _0x4658c2;
      },
      destroyContext: function (_0x5770ec, _0x1d015c, _0x39ce47) {},
      fullscreenHandlersInstalled: false,
      lockPointer: undefined,
      resizeCanvas: undefined,
      requestFullscreen: function (_0x523458, _0x56708d) {
        _0x2a402d.lockPointer = _0x523458;
        _0x2a402d.resizeCanvas = _0x56708d;
        if (typeof _0x2a402d.lockPointer == "undefined") {
          _0x2a402d.lockPointer = true;
        }
        if (typeof _0x2a402d.resizeCanvas == "undefined") {
          _0x2a402d.resizeCanvas = false;
        }
        var _0x564336 = _0x17aa78.canvas;
        function _0xbbcd70() {
          _0x2a402d.isFullscreen = false;
          var _0x253a90 = _0x564336.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x253a90) {
            _0x564336.exitFullscreen = _0x2a402d.exitFullscreen;
            if (_0x2a402d.lockPointer) {
              _0x564336.requestPointerLock();
            }
            _0x2a402d.isFullscreen = true;
            if (_0x2a402d.resizeCanvas) {
              _0x2a402d.setFullscreenCanvasSize();
            } else {
              _0x2a402d.updateCanvasDimensions(_0x564336);
            }
          } else {
            _0x253a90.parentNode.insertBefore(_0x564336, _0x253a90);
            _0x253a90.parentNode.removeChild(_0x253a90);
            if (_0x2a402d.resizeCanvas) {
              _0x2a402d.setWindowedCanvasSize();
            } else {
              _0x2a402d.updateCanvasDimensions(_0x564336);
            }
          }
          if (_0x17aa78.onFullScreen) {
            _0x17aa78.onFullScreen(_0x2a402d.isFullscreen);
          }
          if (_0x17aa78.onFullscreen) {
            _0x17aa78.onFullscreen(_0x2a402d.isFullscreen);
          }
        }
        if (!_0x2a402d.fullscreenHandlersInstalled) {
          _0x2a402d.fullscreenHandlersInstalled = true;
          document.addEventListener("fullscreenchange", _0xbbcd70, false);
          document.addEventListener("mozfullscreenchange", _0xbbcd70, false);
          document.addEventListener("webkitfullscreenchange", _0xbbcd70, false);
          document.addEventListener("MSFullscreenChange", _0xbbcd70, false);
        }
        var _0x4a4ea0 = document.createElement("div");
        _0x564336.parentNode.insertBefore(_0x4a4ea0, _0x564336);
        _0x4a4ea0.appendChild(_0x564336);
        _0x4a4ea0.requestFullscreen = _0x4a4ea0.requestFullscreen || _0x4a4ea0.mozRequestFullScreen || _0x4a4ea0.msRequestFullscreen || (_0x4a4ea0.webkitRequestFullscreen ? function () {
          _0x4a4ea0.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x4a4ea0.webkitRequestFullScreen ? function () {
          _0x4a4ea0.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x4a4ea0.requestFullscreen();
      },
      exitFullscreen: function () {
        if (!_0x2a402d.isFullscreen) {
          return false;
        }
        var _0x573beb = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0x573beb.apply(document, []);
        return true;
      },
      nextRAF: 0,
      fakeRequestAnimationFrame: function (_0x446b57) {
        var _0xa63059 = Date.now();
        if (_0x2a402d.nextRAF === 0) {
          _0x2a402d.nextRAF = _0xa63059 + 1000 / 60;
        } else {
          while (_0xa63059 + 2 >= _0x2a402d.nextRAF) {
            _0x2a402d.nextRAF += 1000 / 60;
          }
        }
        var _0xeaa868 = Math.max(_0x2a402d.nextRAF - _0xa63059, 0);
        setTimeout(_0x446b57, _0xeaa868);
      },
      requestAnimationFrame: function (_0x8dac6c) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x8dac6c);
          return;
        }
        var _0x43404e = _0x2a402d.fakeRequestAnimationFrame;
        _0x43404e(_0x8dac6c);
      },
      safeSetTimeout: function (_0x20e5af) {
        return _0x405d33(_0x20e5af);
      },
      safeRequestAnimationFrame: function (_0x161edc) {
        return _0x2a402d.requestAnimationFrame(function () {
          _0x5d8402(_0x161edc);
        });
      },
      getMimetype: function (_0x3b30f7) {
        return {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          bmp: "image/bmp",
          ogg: "audio/ogg",
          wav: "audio/wav",
          mp3: "audio/mpeg"
        }[_0x3b30f7.substr(_0x3b30f7.lastIndexOf(".") + 1)];
      },
      getUserMedia: function (_0x25e7e6) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x25e7e6);
      },
      getMovementX: function (_0x84b4de) {
        return _0x84b4de.movementX || _0x84b4de.mozMovementX || _0x84b4de.webkitMovementX || 0;
      },
      getMovementY: function (_0x2dbf3b) {
        return _0x2dbf3b.movementY || _0x2dbf3b.mozMovementY || _0x2dbf3b.webkitMovementY || 0;
      },
      getMouseWheelDelta: function (_0x34e788) {
        var _0xa9641f = 0;
        switch (_0x34e788.type) {
          case "DOMMouseScroll":
            _0xa9641f = _0x34e788.detail / 3;
            break;
          case "mousewheel":
            _0xa9641f = _0x34e788.wheelDelta / 120;
            break;
          case "wheel":
            _0xa9641f = _0x34e788.deltaY;
            switch (_0x34e788.deltaMode) {
              case 0:
                _0xa9641f /= 100;
                break;
              case 1:
                _0xa9641f /= 3;
                break;
              case 2:
                _0xa9641f *= 80;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x34e788.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x34e788.type;
        }
        return _0xa9641f;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseEvent: function (_0x97dc11) {
        if (_0x2a402d.pointerLock) {
          if (_0x97dc11.type != "mousemove" && "mozMovementX" in _0x97dc11) {
            _0x2a402d.mouseMovementX = _0x2a402d.mouseMovementY = 0;
          } else {
            _0x2a402d.mouseMovementX = _0x2a402d.getMovementX(_0x97dc11);
            _0x2a402d.mouseMovementY = _0x2a402d.getMovementY(_0x97dc11);
          }
          if (typeof SDL != "undefined") {
            _0x2a402d.mouseX = SDL.mouseX + _0x2a402d.mouseMovementX;
            _0x2a402d.mouseY = SDL.mouseY + _0x2a402d.mouseMovementY;
          } else {
            _0x2a402d.mouseX += _0x2a402d.mouseMovementX;
            _0x2a402d.mouseY += _0x2a402d.mouseMovementY;
          }
        } else {
          var _0x1b53b8 = _0x17aa78.canvas.getBoundingClientRect();
          var _0x195a18 = _0x17aa78.canvas.width;
          var _0x456474 = _0x17aa78.canvas.height;
          var _0x20471f = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
          var _0x5c01d1 = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
          if (_0x97dc11.type === "touchstart" || _0x97dc11.type === "touchend" || _0x97dc11.type === "touchmove") {
            var _0x4ccfa2 = _0x97dc11.touch;
            if (_0x4ccfa2 === undefined) {
              return;
            }
            var _0x747d82 = _0x4ccfa2.pageX - (_0x20471f + _0x1b53b8.left);
            var _0x2fd9d7 = _0x4ccfa2.pageY - (_0x5c01d1 + _0x1b53b8.top);
            _0x747d82 = _0x747d82 * (_0x195a18 / _0x1b53b8.width);
            _0x2fd9d7 = _0x2fd9d7 * (_0x456474 / _0x1b53b8.height);
            var _0x7b3cf9 = {
              x: _0x747d82,
              y: _0x2fd9d7
            };
            if (_0x97dc11.type === "touchstart") {
              _0x2a402d.lastTouches[_0x4ccfa2.identifier] = _0x7b3cf9;
              _0x2a402d.touches[_0x4ccfa2.identifier] = _0x7b3cf9;
            } else if (_0x97dc11.type === "touchend" || _0x97dc11.type === "touchmove") {
              var _0x2c3393 = _0x2a402d.touches[_0x4ccfa2.identifier];
              if (!_0x2c3393) {
                _0x2c3393 = _0x7b3cf9;
              }
              _0x2a402d.lastTouches[_0x4ccfa2.identifier] = _0x2c3393;
              _0x2a402d.touches[_0x4ccfa2.identifier] = _0x7b3cf9;
            }
            return;
          }
          var _0x489b96 = _0x97dc11.pageX - (_0x20471f + _0x1b53b8.left);
          var _0x5e0bea = _0x97dc11.pageY - (_0x5c01d1 + _0x1b53b8.top);
          _0x489b96 = _0x489b96 * (_0x195a18 / _0x1b53b8.width);
          _0x5e0bea = _0x5e0bea * (_0x456474 / _0x1b53b8.height);
          _0x2a402d.mouseMovementX = _0x489b96 - _0x2a402d.mouseX;
          _0x2a402d.mouseMovementY = _0x5e0bea - _0x2a402d.mouseY;
          _0x2a402d.mouseX = _0x489b96;
          _0x2a402d.mouseY = _0x5e0bea;
        }
      },
      resizeListeners: [],
      updateResizeListeners: function () {
        var _0x41c0da = _0x17aa78.canvas;
        _0x2a402d.resizeListeners.forEach(function (_0x182334) {
          _0x182334(_0x41c0da.width, _0x41c0da.height);
        });
      },
      setCanvasSize: function (_0x5743ba, _0x19fe6b, _0xe0e9f9) {
        var _0x4cc25a = _0x17aa78.canvas;
        _0x2a402d.updateCanvasDimensions(_0x4cc25a, _0x5743ba, _0x19fe6b);
        if (!_0xe0e9f9) {
          _0x2a402d.updateResizeListeners();
        }
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x44f976 = _0x50f6f2[SDL.screen >> 2];
          _0x44f976 = _0x44f976 | 8388608;
          _0x576263[SDL.screen >> 2] = _0x44f976;
        }
        _0x2a402d.updateCanvasDimensions(_0x17aa78.canvas);
        _0x2a402d.updateResizeListeners();
      },
      setWindowedCanvasSize: function () {
        if (typeof SDL != "undefined") {
          var _0x3c6516 = _0x50f6f2[SDL.screen >> 2];
          _0x3c6516 = _0x3c6516 & ~8388608;
          _0x576263[SDL.screen >> 2] = _0x3c6516;
        }
        _0x2a402d.updateCanvasDimensions(_0x17aa78.canvas);
        _0x2a402d.updateResizeListeners();
      },
      updateCanvasDimensions: function (_0x2cb8a2, _0x1244fd, _0x349f7e) {
        if (_0x1244fd && _0x349f7e) {
          _0x2cb8a2.widthNative = _0x1244fd;
          _0x2cb8a2.heightNative = _0x349f7e;
        } else {
          _0x1244fd = _0x2cb8a2.widthNative;
          _0x349f7e = _0x2cb8a2.heightNative;
        }
        var _0x2bef15 = _0x1244fd;
        var _0xd4eb40 = _0x349f7e;
        if (_0x17aa78.forcedAspectRatio && _0x17aa78.forcedAspectRatio > 0) {
          if (_0x2bef15 / _0xd4eb40 < _0x17aa78.forcedAspectRatio) {
            _0x2bef15 = Math.round(_0xd4eb40 * _0x17aa78.forcedAspectRatio);
          } else {
            _0xd4eb40 = Math.round(_0x2bef15 / _0x17aa78.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x2cb8a2.parentNode && typeof screen != "undefined") {
          var _0x248c38 = Math.min(screen.width / _0x2bef15, screen.height / _0xd4eb40);
          _0x2bef15 = Math.round(_0x2bef15 * _0x248c38);
          _0xd4eb40 = Math.round(_0xd4eb40 * _0x248c38);
        }
        if (_0x2a402d.resizeCanvas) {
          if (_0x2cb8a2.width != _0x2bef15) {
            _0x2cb8a2.width = _0x2bef15;
          }
          if (_0x2cb8a2.height != _0xd4eb40) {
            _0x2cb8a2.height = _0xd4eb40;
          }
          if (typeof _0x2cb8a2.style != "undefined") {
            _0x2cb8a2.style.removeProperty("width");
            _0x2cb8a2.style.removeProperty("height");
          }
        } else {
          if (_0x2cb8a2.width != _0x1244fd) {
            _0x2cb8a2.width = _0x1244fd;
          }
          if (_0x2cb8a2.height != _0x349f7e) {
            _0x2cb8a2.height = _0x349f7e;
          }
          if (typeof _0x2cb8a2.style != "undefined") {
            if (_0x2bef15 != _0x1244fd || _0xd4eb40 != _0x349f7e) {
              _0x2cb8a2.style.setProperty("width", _0x2bef15 + "px", "important");
              _0x2cb8a2.style.setProperty("height", _0xd4eb40 + "px", "important");
            } else {
              _0x2cb8a2.style.removeProperty("width");
              _0x2cb8a2.style.removeProperty("height");
            }
          }
        }
      }
    };
    function _0x40bb1a() {
      _0x2a402d.mainLoop.pause();
      _0x2a402d.mainLoop.func = null;
    }
    function _0x465ec9(_0x239fa8) {
      clearInterval(_0x239fa8);
    }
    var _0x106067 = {
      inEventHandler: 0,
      removeAllEventListeners: function () {
        for (var _0x2739a8 = _0x106067.eventHandlers.length - 1; _0x2739a8 >= 0; --_0x2739a8) {
          _0x106067._removeHandler(_0x2739a8);
        }
        _0x106067.eventHandlers = [];
        _0x106067.deferredCalls = [];
      },
      registerRemoveEventListeners: function () {
        if (!_0x106067.removeEventListenersRegistered) {
          _0xdbee52.push(_0x106067.removeAllEventListeners);
          _0x106067.removeEventListenersRegistered = true;
        }
      },
      deferredCalls: [],
      deferCall: function (_0x5e3eee, _0xc3eb87, _0x1372a5) {
        function _0x38e722(_0x24a656, _0x4e6caa) {
          if (_0x24a656.length != _0x4e6caa.length) {
            return false;
          }
          for (var _0x5c42b5 in _0x24a656) {
            if (_0x24a656[_0x5c42b5] != _0x4e6caa[_0x5c42b5]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x1b3a48 in _0x106067.deferredCalls) {
          var _0x2066d4 = _0x106067.deferredCalls[_0x1b3a48];
          if (_0x2066d4.targetFunction == _0x5e3eee && _0x38e722(_0x2066d4.argsList, _0x1372a5)) {
            return;
          }
        }
        _0x106067.deferredCalls.push({
          targetFunction: _0x5e3eee,
          precedence: _0xc3eb87,
          argsList: _0x1372a5
        });
        _0x106067.deferredCalls.sort(function (_0x3eae03, _0xaa4798) {
          return _0x3eae03.precedence < _0xaa4798.precedence;
        });
      },
      removeDeferredCalls: function (_0x43dd8e) {
        for (var _0xad5215 = 0; _0xad5215 < _0x106067.deferredCalls.length; ++_0xad5215) {
          if (_0x106067.deferredCalls[_0xad5215].targetFunction == _0x43dd8e) {
            _0x106067.deferredCalls.splice(_0xad5215, 1);
            --_0xad5215;
          }
        }
      },
      canPerformEventHandlerRequests: function () {
        return _0x106067.inEventHandler && _0x106067.currentEventHandler.allowsDeferredCalls;
      },
      runDeferredCalls: function () {
        if (!_0x106067.canPerformEventHandlerRequests()) {
          return;
        }
        for (var _0x52741f = 0; _0x52741f < _0x106067.deferredCalls.length; ++_0x52741f) {
          var _0x1dad89 = _0x106067.deferredCalls[_0x52741f];
          _0x106067.deferredCalls.splice(_0x52741f, 1);
          --_0x52741f;
          _0x1dad89.targetFunction.apply(null, _0x1dad89.argsList);
        }
      },
      eventHandlers: [],
      removeAllHandlersOnTarget: function (_0x23046a, _0x4d2a35) {
        for (var _0x47e835 = 0; _0x47e835 < _0x106067.eventHandlers.length; ++_0x47e835) {
          if (_0x106067.eventHandlers[_0x47e835].target == _0x23046a && (!_0x4d2a35 || _0x4d2a35 == _0x106067.eventHandlers[_0x47e835].eventTypeString)) {
            _0x106067._removeHandler(_0x47e835--);
          }
        }
      },
      _removeHandler: function (_0x346d34) {
        var _0x1e3a12 = _0x106067.eventHandlers[_0x346d34];
        _0x1e3a12.target.removeEventListener(_0x1e3a12.eventTypeString, _0x1e3a12.eventListenerFunc, _0x1e3a12.useCapture);
        _0x106067.eventHandlers.splice(_0x346d34, 1);
      },
      registerOrRemoveHandler: function (_0x95bc83) {
        var _0x1af206 = function _0x5357fa(_0x2a380c) {
          ++_0x106067.inEventHandler;
          _0x106067.currentEventHandler = _0x95bc83;
          _0x106067.runDeferredCalls();
          _0x95bc83.handlerFunc(_0x2a380c);
          _0x106067.runDeferredCalls();
          --_0x106067.inEventHandler;
        };
        if (_0x95bc83.callbackfunc) {
          _0x95bc83.eventListenerFunc = _0x1af206;
          _0x95bc83.target.addEventListener(_0x95bc83.eventTypeString, _0x1af206, _0x95bc83.useCapture);
          _0x106067.eventHandlers.push(_0x95bc83);
          _0x106067.registerRemoveEventListeners();
        } else {
          for (var _0x5dde91 = 0; _0x5dde91 < _0x106067.eventHandlers.length; ++_0x5dde91) {
            if (_0x106067.eventHandlers[_0x5dde91].target == _0x95bc83.target && _0x106067.eventHandlers[_0x5dde91].eventTypeString == _0x95bc83.eventTypeString) {
              _0x106067._removeHandler(_0x5dde91--);
            }
          }
        }
      },
      getNodeNameForTarget: function (_0x2a95b5) {
        if (!_0x2a95b5) {
          return "";
        }
        if (_0x2a95b5 == window) {
          return "#window";
        }
        if (_0x2a95b5 == screen) {
          return "#screen";
        }
        if (_0x2a95b5 && _0x2a95b5.nodeName) {
          return _0x2a95b5.nodeName;
        } else {
          return "";
        }
      },
      fullscreenEnabled: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    var _0x21f779 = {};
    function _0x52318e(_0x3f3481) {
      if (_0x3f3481 > 2) {
        return _0x3d5aa0(_0x3f3481);
      } else {
        return _0x3f3481;
      }
    }
    var _0x4835a9 = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
    function _0x34d727(_0x3f6c1e) {
      _0x3f6c1e = _0x52318e(_0x3f6c1e);
      var _0x2cf237 = _0x4835a9[_0x3f6c1e] || (typeof document != "undefined" ? document.querySelector(_0x3f6c1e) : undefined);
      return _0x2cf237;
    }
    function _0x35599b(_0x173f0b) {
      return _0x34d727(_0x173f0b);
    }
    function _0x4e5688(_0x421003, _0x538670, _0x401651) {
      var _0xdb73ec = _0x35599b(_0x421003);
      if (!_0xdb73ec) {
        return -4;
      }
      _0x576263[_0x538670 >> 2] = _0xdb73ec.width;
      _0x576263[_0x401651 >> 2] = _0xdb73ec.height;
    }
    function _0x248ebf(_0x1f91f2) {
      return _0x371c3e(function () {
        var _0x125e3c = _0x8020c5(8);
        var _0xeb5211 = _0x125e3c + 4;
        var _0x3a0af6 = _0x8020c5(_0x1f91f2.id.length + 1);
        _0x4f8934(_0x1f91f2.id, _0x3a0af6, _0x1f91f2.id.length + 1);
        var _0x269810 = _0x4e5688(_0x3a0af6, _0x125e3c, _0xeb5211);
        var _0x154217 = [_0x576263[_0x125e3c >> 2], _0x576263[_0xeb5211 >> 2]];
        return _0x154217;
      });
    }
    function _0x1105c1(_0x4e6d4c, _0x16d38d, _0x1809b6) {
      var _0x1871e2 = _0x35599b(_0x4e6d4c);
      if (!_0x1871e2) {
        return -4;
      }
      _0x1871e2.width = _0x16d38d;
      _0x1871e2.height = _0x1809b6;
      return 0;
    }
    function _0x1917d7(_0x265c21, _0x27dfa8, _0x41a6d6) {
      if (!_0x265c21.controlTransferredOffscreen) {
        _0x265c21.width = _0x27dfa8;
        _0x265c21.height = _0x41a6d6;
      } else {
        _0x371c3e(function () {
          var _0x43c906 = _0x8020c5(_0x265c21.id.length + 1);
          _0x4f8934(_0x265c21.id, _0x43c906, _0x265c21.id.length + 1);
          _0x1105c1(_0x43c906, _0x27dfa8, _0x41a6d6);
        });
      }
    }
    function _0x37c61f(_0x56594b) {
      var _0x4356a6 = _0x248ebf(_0x56594b);
      var _0xaa74e5 = _0x4356a6[0];
      var _0x9d2105 = _0x4356a6[1];
      var _0x221538 = _0x56594b.style.width;
      var _0x4505e5 = _0x56594b.style.height;
      var _0x4a31f3 = _0x56594b.style.backgroundColor;
      var _0x11a517 = document.body.style.backgroundColor;
      var _0x1bafed = _0x56594b.style.paddingLeft;
      var _0x43f035 = _0x56594b.style.paddingRight;
      var _0x339b17 = _0x56594b.style.paddingTop;
      var _0x22c3ed = _0x56594b.style.paddingBottom;
      var _0x441d15 = _0x56594b.style.marginLeft;
      var _0x56550c = _0x56594b.style.marginRight;
      var _0x268742 = _0x56594b.style.marginTop;
      var _0x5aeb0d = _0x56594b.style.marginBottom;
      var _0x527ef1 = document.body.style.margin;
      var _0x105329 = document.documentElement.style.overflow;
      var _0x35baf2 = document.body.scroll;
      var _0x1ac6a0 = _0x56594b.style.imageRendering;
      function _0x153564() {
        var _0x33925c = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!_0x33925c) {
          document.removeEventListener("fullscreenchange", _0x153564);
          document.removeEventListener("webkitfullscreenchange", _0x153564);
          _0x1917d7(_0x56594b, _0xaa74e5, _0x9d2105);
          _0x56594b.style.width = _0x221538;
          _0x56594b.style.height = _0x4505e5;
          _0x56594b.style.backgroundColor = _0x4a31f3;
          if (!_0x11a517) {
            document.body.style.backgroundColor = "white";
          }
          document.body.style.backgroundColor = _0x11a517;
          _0x56594b.style.paddingLeft = _0x1bafed;
          _0x56594b.style.paddingRight = _0x43f035;
          _0x56594b.style.paddingTop = _0x339b17;
          _0x56594b.style.paddingBottom = _0x22c3ed;
          _0x56594b.style.marginLeft = _0x441d15;
          _0x56594b.style.marginRight = _0x56550c;
          _0x56594b.style.marginTop = _0x268742;
          _0x56594b.style.marginBottom = _0x5aeb0d;
          document.body.style.margin = _0x527ef1;
          document.documentElement.style.overflow = _0x105329;
          document.body.scroll = _0x35baf2;
          _0x56594b.style.imageRendering = _0x1ac6a0;
          if (_0x56594b.GLctxObject) {
            _0x56594b.GLctxObject.GLctx.viewport(0, 0, _0xaa74e5, _0x9d2105);
          }
          if (_0x21f779.canvasResizedCallback) {
            (function (_0x442f88, _0x418ef8, _0x94f2e9) {
              return _0x3427a6.apply(null, [_0x21f779.canvasResizedCallback, _0x442f88, _0x418ef8, _0x94f2e9]);
            })(37, 0, _0x21f779.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener("fullscreenchange", _0x153564);
      document.addEventListener("webkitfullscreenchange", _0x153564);
      return _0x153564;
    }
    function _0x2c57db(_0x29d713, _0x75e4ff, _0x4c112d) {
      _0x29d713.style.paddingLeft = _0x29d713.style.paddingRight = _0x4c112d + "px";
      _0x29d713.style.paddingTop = _0x29d713.style.paddingBottom = _0x75e4ff + "px";
    }
    function _0x21d1e1(_0x9c5ccd) {
      if (_0x4835a9.indexOf(_0x9c5ccd) < 0) {
        return _0x9c5ccd.getBoundingClientRect();
      } else {
        return {
          left: 0,
          top: 0
        };
      }
    }
    function _0x1d3c45(_0x5e6643, _0x30347f) {
      var _0x5b8d53 = _0x37c61f(_0x5e6643);
      var _0x5b83a7 = _0x30347f.softFullscreen ? innerWidth : screen.width;
      var _0x78ed45 = _0x30347f.softFullscreen ? innerHeight : screen.height;
      var _0x26368a = _0x21d1e1(_0x5e6643);
      var _0x28056a = _0x26368a.width;
      var _0x19feb4 = _0x26368a.height;
      var _0x1092af = _0x248ebf(_0x5e6643);
      var _0x37a297 = _0x1092af[0];
      var _0x5861a4 = _0x1092af[1];
      if (_0x30347f.scaleMode == 3) {
        _0x2c57db(_0x5e6643, (_0x78ed45 - _0x19feb4) / 2, (_0x5b83a7 - _0x28056a) / 2);
        _0x5b83a7 = _0x28056a;
        _0x78ed45 = _0x19feb4;
      } else if (_0x30347f.scaleMode == 2) {
        if (_0x5b83a7 * _0x5861a4 < _0x37a297 * _0x78ed45) {
          var _0x384610 = _0x5861a4 * _0x5b83a7 / _0x37a297;
          _0x2c57db(_0x5e6643, (_0x78ed45 - _0x384610) / 2, 0);
          _0x78ed45 = _0x384610;
        } else {
          var _0x4b7bcd = _0x37a297 * _0x78ed45 / _0x5861a4;
          _0x2c57db(_0x5e6643, 0, (_0x5b83a7 - _0x4b7bcd) / 2);
          _0x5b83a7 = _0x4b7bcd;
        }
      }
      if (!_0x5e6643.style.backgroundColor) {
        _0x5e6643.style.backgroundColor = "black";
      }
      if (!document.body.style.backgroundColor) {
        document.body.style.backgroundColor = "black";
      }
      _0x5e6643.style.width = _0x5b83a7 + "px";
      _0x5e6643.style.height = _0x78ed45 + "px";
      if (_0x30347f.filteringMode == 1) {
        _0x5e6643.style.imageRendering = "optimizeSpeed";
        _0x5e6643.style.imageRendering = "-moz-crisp-edges";
        _0x5e6643.style.imageRendering = "-o-crisp-edges";
        _0x5e6643.style.imageRendering = "-webkit-optimize-contrast";
        _0x5e6643.style.imageRendering = "optimize-contrast";
        _0x5e6643.style.imageRendering = "crisp-edges";
        _0x5e6643.style.imageRendering = "pixelated";
      }
      var _0x221fd9 = _0x30347f.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
      if (_0x30347f.canvasResolutionScaleMode != 0) {
        var _0x23daf5 = _0x5b83a7 * _0x221fd9 | 0;
        var _0x454caa = _0x78ed45 * _0x221fd9 | 0;
        _0x1917d7(_0x5e6643, _0x23daf5, _0x454caa);
        if (_0x5e6643.GLctxObject) {
          _0x5e6643.GLctxObject.GLctx.viewport(0, 0, _0x23daf5, _0x454caa);
        }
      }
      return _0x5b8d53;
    }
    function _0x40415e(_0x15769b, _0x2bca25) {
      if (_0x2bca25.scaleMode != 0 || _0x2bca25.canvasResolutionScaleMode != 0) {
        _0x1d3c45(_0x15769b, _0x2bca25);
      }
      if (_0x15769b.requestFullscreen) {
        _0x15769b.requestFullscreen();
      } else if (_0x15769b.webkitRequestFullscreen) {
        _0x15769b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (_0x106067.fullscreenEnabled()) {
        return -3;
      } else {
        return -1;
      }
      _0x21f779 = _0x2bca25;
      if (_0x2bca25.canvasResizedCallback) {
        (function (_0x422ea1, _0x1c46ea, _0x2ba50b) {
          return _0x3427a6.apply(null, [_0x2bca25.canvasResizedCallback, _0x422ea1, _0x1c46ea, _0x2ba50b]);
        })(37, 0, _0x2bca25.canvasResizedCallbackUserData);
      }
      return 0;
    }
    function _0x353469() {
      if (!_0x106067.fullscreenEnabled()) {
        return -1;
      }
      _0x106067.removeDeferredCalls(_0x40415e);
      var _0x3af3a4 = _0x4835a9[1];
      if (_0x3af3a4.exitFullscreen) {
        if (_0x3af3a4.fullscreenElement) {
          _0x3af3a4.exitFullscreen();
        }
      } else if (_0x3af3a4.webkitExitFullscreen) {
        if (_0x3af3a4.webkitFullscreenElement) {
          _0x3af3a4.webkitExitFullscreen();
        }
      } else {
        return -1;
      }
      return 0;
    }
    function _0x2ec996(_0x2e68b3) {
      if (_0x2e68b3.requestPointerLock) {
        _0x2e68b3.requestPointerLock();
      } else if (_0x2e68b3.msRequestPointerLock) {
        _0x2e68b3.msRequestPointerLock();
      } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
        return -3;
      } else {
        return -1;
      }
      return 0;
    }
    function _0x81a2c8() {
      _0x106067.removeDeferredCalls(_0x2ec996);
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else if (document.msExitPointerLock) {
        document.msExitPointerLock();
      } else {
        return -1;
      }
      return 0;
    }
    function _0xe262b8(_0x5c19fe) {
      var _0x582368 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var _0xb50531 = !!_0x582368;
      _0x576263[_0x5c19fe >> 2] = _0xb50531;
      _0x576263[_0x5c19fe + 4 >> 2] = _0x106067.fullscreenEnabled();
      var _0x1b37b5 = _0xb50531 ? _0x582368 : _0x106067.previousFullscreenElement;
      var _0x233b00 = _0x106067.getNodeNameForTarget(_0x1b37b5);
      var _0x5bb1b7 = _0x1b37b5 && _0x1b37b5.id ? _0x1b37b5.id : "";
      _0x4f8934(_0x233b00, _0x5c19fe + 8, 128);
      _0x4f8934(_0x5bb1b7, _0x5c19fe + 136, 128);
      _0x576263[_0x5c19fe + 264 >> 2] = _0x1b37b5 ? _0x1b37b5.clientWidth : 0;
      _0x576263[_0x5c19fe + 268 >> 2] = _0x1b37b5 ? _0x1b37b5.clientHeight : 0;
      _0x576263[_0x5c19fe + 272 >> 2] = screen.width;
      _0x576263[_0x5c19fe + 276 >> 2] = screen.height;
      if (_0xb50531) {
        _0x106067.previousFullscreenElement = _0x582368;
      }
    }
    function _0x5ca99b(_0x4f0dd1) {
      if (!_0x106067.fullscreenEnabled()) {
        return -1;
      }
      _0xe262b8(_0x4f0dd1);
      return 0;
    }
    function _0x2f9372(_0x20fb84, _0x13ec10) {
      _0xe5eb95[_0x20fb84 >> 3] = _0x13ec10.timestamp;
      for (var _0x37c287 = 0; _0x37c287 < _0x13ec10.axes.length; ++_0x37c287) {
        _0xe5eb95[_0x20fb84 + _0x37c287 * 8 + 16 >> 3] = _0x13ec10.axes[_0x37c287];
      }
      for (var _0x37c287 = 0; _0x37c287 < _0x13ec10.buttons.length; ++_0x37c287) {
        if (typeof _0x13ec10.buttons[_0x37c287] == "object") {
          _0xe5eb95[_0x20fb84 + _0x37c287 * 8 + 528 >> 3] = _0x13ec10.buttons[_0x37c287].value;
        } else {
          _0xe5eb95[_0x20fb84 + _0x37c287 * 8 + 528 >> 3] = _0x13ec10.buttons[_0x37c287];
        }
      }
      for (var _0x37c287 = 0; _0x37c287 < _0x13ec10.buttons.length; ++_0x37c287) {
        if (typeof _0x13ec10.buttons[_0x37c287] == "object") {
          _0x576263[_0x20fb84 + _0x37c287 * 4 + 1040 >> 2] = _0x13ec10.buttons[_0x37c287].pressed;
        } else {
          _0x576263[_0x20fb84 + _0x37c287 * 4 + 1040 >> 2] = _0x13ec10.buttons[_0x37c287] == 1;
        }
      }
      _0x576263[_0x20fb84 + 1296 >> 2] = _0x13ec10.connected;
      _0x576263[_0x20fb84 + 1300 >> 2] = _0x13ec10.index;
      _0x576263[_0x20fb84 + 8 >> 2] = _0x13ec10.axes.length;
      _0x576263[_0x20fb84 + 12 >> 2] = _0x13ec10.buttons.length;
      _0x4f8934(_0x13ec10.id, _0x20fb84 + 1304, 64);
      _0x4f8934(_0x13ec10.mapping, _0x20fb84 + 1368, 64);
    }
    function _0x32523f(_0x1374ec, _0x13731f) {
      if (_0x1374ec < 0 || _0x1374ec >= _0x106067.lastGamepadState.length) {
        return -5;
      }
      if (!_0x106067.lastGamepadState[_0x1374ec]) {
        return -7;
      }
      _0x2f9372(_0x13731f, _0x106067.lastGamepadState[_0x1374ec]);
      return 0;
    }
    function _0x1f438a() {
      return 2147483648;
    }
    function _0x6c3555() {
      if (_0x232f5c) {
        return 1;
      } else {
        return 1000;
      }
    }
    function _0xce5bc5() {
      return _0x106067.lastGamepadState.length;
    }
    function _0x6370c5() {
      _0x106067.removeAllEventListeners();
    }
    function _0x8340e6(_0x39265a) {
      return !_0x18b0dd.contexts[_0x39265a] || _0x18b0dd.contexts[_0x39265a].GLctx.isContextLost();
    }
    function _0x5877e4(_0x1d159d) {
      return _0x1d159d < 0 || _0x1d159d === 0 && 1 / _0x1d159d === -Infinity;
    }
    function _0x236c9e(_0x396ac0, _0x30c9a2) {
      return (_0x396ac0 >>> 0) + _0x30c9a2 * 4294967296;
    }
    function _0x27ceaf(_0x3d03f7, _0x10d911) {
      return (_0x3d03f7 >>> 0) + (_0x10d911 >>> 0) * 4294967296;
    }
    function _0x24284d(_0xc5196b, _0x5b86d3) {
      if (_0xc5196b <= 0) {
        return _0xc5196b;
      }
      var _0x3746b8 = _0x5b86d3 <= 32 ? Math.abs(1 << _0x5b86d3 - 1) : Math.pow(2, _0x5b86d3 - 1);
      if (_0xc5196b >= _0x3746b8 && (_0x5b86d3 <= 32 || _0xc5196b > _0x3746b8)) {
        _0xc5196b = _0x3746b8 * -2 + _0xc5196b;
      }
      return _0xc5196b;
    }
    function _0x2d0d9d(_0x9bc01b, _0x1f4110) {
      if (_0x9bc01b >= 0) {
        return _0x9bc01b;
      }
      if (_0x1f4110 <= 32) {
        return Math.abs(1 << _0x1f4110 - 1) * 2 + _0x9bc01b;
      } else {
        return Math.pow(2, _0x1f4110) + _0x9bc01b;
      }
    }
    function _0x454b10(_0x2e2fac, _0x583049) {
      var _0x7c4931 = _0x2e2fac;
      var _0x3c5c37 = _0x583049;
      function _0x8ad77d(_0x246abf, _0x5a0360) {
        if (_0x5a0360 === "double" || _0x5a0360 === "i64") {
          if (_0x246abf & 7) {
            _0x246abf += 4;
          }
        } else {}
        return _0x246abf;
      }
      function _0x385661(_0x4ba430) {
        var _0x3254e4;
        _0x3c5c37 = _0x8ad77d(_0x3c5c37, _0x4ba430);
        if (_0x4ba430 === "double") {
          _0x3254e4 = Number(_0xe5eb95[_0x3c5c37 >> 3]);
          _0x3c5c37 += 8;
        } else if (_0x4ba430 == "i64") {
          _0x3254e4 = [_0x576263[_0x3c5c37 >> 2], _0x576263[_0x3c5c37 + 4 >> 2]];
          _0x3c5c37 += 8;
        } else {
          _0x4ba430 = "i32";
          _0x3254e4 = _0x576263[_0x3c5c37 >> 2];
          _0x3c5c37 += 4;
        }
        return _0x3254e4;
      }
      var _0x582de4 = [];
      var _0x32def7;
      var _0x425757;
      var _0x4cbee5;
      while (1) {
        var _0x20a55f = _0x7c4931;
        _0x32def7 = _0xe1b6fc[_0x7c4931 >> 0];
        if (_0x32def7 === 0) {
          break;
        }
        _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
        if (_0x32def7 == 37) {
          var _0x59554e = false;
          var _0x32ed2c = false;
          var _0x44b2d9 = false;
          var _0x56e5c1 = false;
          var _0x238386 = false;
          _0x2dcff3: while (1) {
            switch (_0x425757) {
              case 43:
                _0x59554e = true;
                break;
              case 45:
                _0x32ed2c = true;
                break;
              case 35:
                _0x44b2d9 = true;
                break;
              case 48:
                if (_0x56e5c1) {
                  break _0x2dcff3;
                } else {
                  _0x56e5c1 = true;
                  break;
                }
              case 32:
                _0x238386 = true;
                break;
              default:
                break _0x2dcff3;
            }
            _0x7c4931++;
            _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
          }
          var _0x3876f8 = 0;
          if (_0x425757 == 42) {
            _0x3876f8 = _0x385661("i32");
            _0x7c4931++;
            _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
          } else {
            while (_0x425757 >= 48 && _0x425757 <= 57) {
              _0x3876f8 = _0x3876f8 * 10 + (_0x425757 - 48);
              _0x7c4931++;
              _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
            }
          }
          var _0xb30230 = false;
          var _0x1522b6 = -1;
          if (_0x425757 == 46) {
            _0x1522b6 = 0;
            _0xb30230 = true;
            _0x7c4931++;
            _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
            if (_0x425757 == 42) {
              _0x1522b6 = _0x385661("i32");
              _0x7c4931++;
            } else {
              while (1) {
                var _0x37036a = _0xe1b6fc[_0x7c4931 + 1 >> 0];
                if (_0x37036a < 48 || _0x37036a > 57) {
                  break;
                }
                _0x1522b6 = _0x1522b6 * 10 + (_0x37036a - 48);
                _0x7c4931++;
              }
            }
            _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
          }
          if (_0x1522b6 < 0) {
            _0x1522b6 = 6;
            _0xb30230 = false;
          }
          var _0x40fbc3;
          switch (String.fromCharCode(_0x425757)) {
            case "h":
              var _0x441877 = _0xe1b6fc[_0x7c4931 + 2 >> 0];
              if (_0x441877 == 104) {
                _0x7c4931++;
                _0x40fbc3 = 1;
              } else {
                _0x40fbc3 = 2;
              }
              break;
            case "l":
              var _0x441877 = _0xe1b6fc[_0x7c4931 + 2 >> 0];
              if (_0x441877 == 108) {
                _0x7c4931++;
                _0x40fbc3 = 8;
              } else {
                _0x40fbc3 = 4;
              }
              break;
            case "L":
            case "q":
            case "j":
              _0x40fbc3 = 8;
              break;
            case "z":
            case "t":
            case "I":
              _0x40fbc3 = 4;
              break;
            default:
              _0x40fbc3 = null;
          }
          if (_0x40fbc3) {
            _0x7c4931++;
          }
          _0x425757 = _0xe1b6fc[_0x7c4931 + 1 >> 0];
          switch (String.fromCharCode(_0x425757)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p":
              {
                var _0xed6892 = _0x425757 == 100 || _0x425757 == 105;
                _0x40fbc3 = _0x40fbc3 || 4;
                _0x4cbee5 = _0x385661("i" + _0x40fbc3 * 8);
                var _0x436665;
                if (_0x40fbc3 == 8) {
                  _0x4cbee5 = _0x425757 == 117 ? _0x27ceaf(_0x4cbee5[0], _0x4cbee5[1]) : _0x236c9e(_0x4cbee5[0], _0x4cbee5[1]);
                }
                if (_0x40fbc3 <= 4) {
                  var _0xf1abab = Math.pow(256, _0x40fbc3) - 1;
                  _0x4cbee5 = (_0xed6892 ? _0x24284d : _0x2d0d9d)(_0x4cbee5 & _0xf1abab, _0x40fbc3 * 8);
                }
                var _0x1ef556 = Math.abs(_0x4cbee5);
                var _0x9149be = "";
                if (_0x425757 == 100 || _0x425757 == 105) {
                  _0x436665 = _0x24284d(_0x4cbee5, _0x40fbc3 * 8).toString(10);
                } else if (_0x425757 == 117) {
                  _0x436665 = _0x2d0d9d(_0x4cbee5, _0x40fbc3 * 8).toString(10);
                  _0x4cbee5 = Math.abs(_0x4cbee5);
                } else if (_0x425757 == 111) {
                  _0x436665 = (_0x44b2d9 ? "0" : "") + _0x1ef556.toString(8);
                } else if (_0x425757 == 120 || _0x425757 == 88) {
                  _0x9149be = _0x44b2d9 && _0x4cbee5 != 0 ? "0x" : "";
                  if (_0x4cbee5 < 0) {
                    _0x4cbee5 = -_0x4cbee5;
                    _0x436665 = (_0x1ef556 - 1).toString(16);
                    var _0x5d2535 = [];
                    for (var _0x20b54f = 0; _0x20b54f < _0x436665.length; _0x20b54f++) {
                      _0x5d2535.push((15 - parseInt(_0x436665[_0x20b54f], 16)).toString(16));
                    }
                    _0x436665 = _0x5d2535.join("");
                    while (_0x436665.length < _0x40fbc3 * 2) {
                      _0x436665 = "f" + _0x436665;
                    }
                  } else {
                    _0x436665 = _0x1ef556.toString(16);
                  }
                  if (_0x425757 == 88) {
                    _0x9149be = _0x9149be.toUpperCase();
                    _0x436665 = _0x436665.toUpperCase();
                  }
                } else if (_0x425757 == 112) {
                  if (_0x1ef556 === 0) {
                    _0x436665 = "(nil)";
                  } else {
                    _0x9149be = "0x";
                    _0x436665 = _0x1ef556.toString(16);
                  }
                }
                if (_0xb30230) {
                  while (_0x436665.length < _0x1522b6) {
                    _0x436665 = "0" + _0x436665;
                  }
                }
                if (_0x4cbee5 >= 0) {
                  if (_0x59554e) {
                    _0x9149be = "+" + _0x9149be;
                  } else if (_0x238386) {
                    _0x9149be = " " + _0x9149be;
                  }
                }
                if (_0x436665.charAt(0) == "-") {
                  _0x9149be = "-" + _0x9149be;
                  _0x436665 = _0x436665.substr(1);
                }
                while (_0x9149be.length + _0x436665.length < _0x3876f8) {
                  if (_0x32ed2c) {
                    _0x436665 += " ";
                  } else if (_0x56e5c1) {
                    _0x436665 = "0" + _0x436665;
                  } else {
                    _0x9149be = " " + _0x9149be;
                  }
                }
                _0x436665 = _0x9149be + _0x436665;
                _0x436665.split("").forEach(function (_0x235514) {
                  _0x582de4.push(_0x235514.charCodeAt(0));
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
                _0x4cbee5 = _0x385661("double");
                var _0x436665;
                if (isNaN(_0x4cbee5)) {
                  _0x436665 = "nan";
                  _0x56e5c1 = false;
                } else if (!isFinite(_0x4cbee5)) {
                  _0x436665 = (_0x4cbee5 < 0 ? "-" : "") + "inf";
                  _0x56e5c1 = false;
                } else {
                  var _0x1ea79d = false;
                  var _0x3adf1 = Math.min(_0x1522b6, 20);
                  if (_0x425757 == 103 || _0x425757 == 71) {
                    _0x1ea79d = true;
                    _0x1522b6 = _0x1522b6 || 1;
                    var _0x3e49a9 = parseInt(_0x4cbee5.toExponential(_0x3adf1).split("e")[1], 10);
                    if (_0x1522b6 > _0x3e49a9 && _0x3e49a9 >= -4) {
                      _0x425757 = (_0x425757 == 103 ? "f" : "F").charCodeAt(0);
                      _0x1522b6 -= _0x3e49a9 + 1;
                    } else {
                      _0x425757 = (_0x425757 == 103 ? "e" : "E").charCodeAt(0);
                      _0x1522b6--;
                    }
                    _0x3adf1 = Math.min(_0x1522b6, 20);
                  }
                  if (_0x425757 == 101 || _0x425757 == 69) {
                    _0x436665 = _0x4cbee5.toExponential(_0x3adf1);
                    if (/[eE][-+]\d$/.test(_0x436665)) {
                      _0x436665 = _0x436665.slice(0, -1) + "0" + _0x436665.slice(-1);
                    }
                  } else if (_0x425757 == 102 || _0x425757 == 70) {
                    _0x436665 = _0x4cbee5.toFixed(_0x3adf1);
                    if (_0x4cbee5 === 0 && _0x5877e4(_0x4cbee5)) {
                      _0x436665 = "-" + _0x436665;
                    }
                  }
                  var _0x5859a7 = _0x436665.split("e");
                  if (_0x1ea79d && !_0x44b2d9) {
                    while (_0x5859a7[0].length > 1 && _0x5859a7[0].includes(".") && (_0x5859a7[0].slice(-1) == "0" || _0x5859a7[0].slice(-1) == ".")) {
                      _0x5859a7[0] = _0x5859a7[0].slice(0, -1);
                    }
                  } else {
                    if (_0x44b2d9 && _0x436665.indexOf(".") == -1) {
                      _0x5859a7[0] += ".";
                    }
                    while (_0x1522b6 > _0x3adf1++) {
                      _0x5859a7[0] += "0";
                    }
                  }
                  _0x436665 = _0x5859a7[0] + (_0x5859a7.length > 1 ? "e" + _0x5859a7[1] : "");
                  if (_0x425757 == 69) {
                    _0x436665 = _0x436665.toUpperCase();
                  }
                  if (_0x4cbee5 >= 0) {
                    if (_0x59554e) {
                      _0x436665 = "+" + _0x436665;
                    } else if (_0x238386) {
                      _0x436665 = " " + _0x436665;
                    }
                  }
                }
                while (_0x436665.length < _0x3876f8) {
                  if (_0x32ed2c) {
                    _0x436665 += " ";
                  } else if (_0x56e5c1 && (_0x436665[0] == "-" || _0x436665[0] == "+")) {
                    _0x436665 = _0x436665[0] + "0" + _0x436665.slice(1);
                  } else {
                    _0x436665 = (_0x56e5c1 ? "0" : " ") + _0x436665;
                  }
                }
                if (_0x425757 < 97) {
                  _0x436665 = _0x436665.toUpperCase();
                }
                _0x436665.split("").forEach(function (_0x570dc8) {
                  _0x582de4.push(_0x570dc8.charCodeAt(0));
                });
                break;
              }
            case "s":
              {
                var _0x26cd37 = _0x385661("i8*");
                var _0xc53fc3 = _0x26cd37 ? _0x9c787a(_0x26cd37) : "(null)".length;
                if (_0xb30230) {
                  _0xc53fc3 = Math.min(_0xc53fc3, _0x1522b6);
                }
                if (!_0x32ed2c) {
                  while (_0xc53fc3 < _0x3876f8--) {
                    _0x582de4.push(32);
                  }
                }
                if (_0x26cd37) {
                  for (var _0x20b54f = 0; _0x20b54f < _0xc53fc3; _0x20b54f++) {
                    _0x582de4.push(_0x59122e[_0x26cd37++ >> 0]);
                  }
                } else {
                  _0x582de4 = _0x582de4.concat(_0x198eb8("(null)".substr(0, _0xc53fc3), true));
                }
                if (_0x32ed2c) {
                  while (_0xc53fc3 < _0x3876f8--) {
                    _0x582de4.push(32);
                  }
                }
                break;
              }
            case "c":
              {
                if (_0x32ed2c) {
                  _0x582de4.push(_0x385661("i8"));
                }
                while (--_0x3876f8 > 0) {
                  _0x582de4.push(32);
                }
                if (!_0x32ed2c) {
                  _0x582de4.push(_0x385661("i8"));
                }
                break;
              }
            case "n":
              {
                var _0x5f58fb = _0x385661("i32*");
                _0x576263[_0x5f58fb >> 2] = _0x582de4.length;
                break;
              }
            case "%":
              {
                _0x582de4.push(_0x32def7);
                break;
              }
            default:
              {
                for (var _0x20b54f = _0x20a55f; _0x20b54f < _0x7c4931 + 2; _0x20b54f++) {
                  _0x582de4.push(_0xe1b6fc[_0x20b54f >> 0]);
                }
              }
          }
          _0x7c4931 += 2;
        } else {
          _0x582de4.push(_0x32def7);
          _0x7c4931 += 1;
        }
      }
      return _0x582de4;
    }
    function _0x2c768c(_0x157553) {
      if (!_0x157553 || !_0x157553.callee || !_0x157553.callee.name) {
        return [null, "", ""];
      }
      var _0x50989d = _0x157553.callee.toString();
      var _0x24f587 = _0x157553.callee.name;
      var _0x32c953 = "(";
      var _0x5802df = true;
      for (var _0x36d56e in _0x157553) {
        var _0x209ff8 = _0x157553[_0x36d56e];
        if (!_0x5802df) {
          _0x32c953 += ", ";
        }
        _0x5802df = false;
        if (typeof _0x209ff8 == "number" || typeof _0x209ff8 == "string") {
          _0x32c953 += _0x209ff8;
        } else {
          _0x32c953 += "(" + typeof _0x209ff8 + ")";
        }
      }
      _0x32c953 += ")";
      var _0xc566a3 = _0x157553.callee.caller;
      _0x157553 = _0xc566a3 ? _0xc566a3.arguments : [];
      if (_0x5802df) {
        _0x32c953 = "";
      }
      return [_0x157553, _0x24f587, _0x32c953];
    }
    function _0x592f94(_0x10b630) {
      var _0x4b5c6b = _0x9b2cc6();
      var _0x1f6bd3 = _0x4b5c6b.lastIndexOf("_emscripten_log");
      var _0x2ef99f = _0x4b5c6b.lastIndexOf("_emscripten_get_callstack");
      var _0x3dd2fa = _0x4b5c6b.indexOf("\n", Math.max(_0x1f6bd3, _0x2ef99f)) + 1;
      _0x4b5c6b = _0x4b5c6b.slice(_0x3dd2fa);
      if (_0x10b630 & 32) {
        _0x27db15("EM_LOG_DEMANGLE is deprecated; ignoring");
      }
      if (_0x10b630 & 8 && typeof emscripten_source_map == "undefined") {
        _0x27db15("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
        _0x10b630 ^= 8;
        _0x10b630 |= 16;
      }
      var _0x2e1e4c = null;
      if (_0x10b630 & 128) {
        _0x2e1e4c = _0x2c768c(arguments);
        while (_0x2e1e4c[1].includes("_emscripten_")) {
          _0x2e1e4c = _0x2c768c(_0x2e1e4c[0]);
        }
      }
      var _0x23edd2 = _0x4b5c6b.split("\n");
      _0x4b5c6b = "";
      var _0x5bf73b = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
      var _0x43968e = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
      var _0x1c5c19 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var _0x4a7f11 in _0x23edd2) {
        var _0x80743e = _0x23edd2[_0x4a7f11];
        var _0x390858 = "";
        var _0x3bd4b5 = "";
        var _0x2498cd = 0;
        var _0x3e90af = 0;
        var _0x5c6468 = _0x1c5c19.exec(_0x80743e);
        if (_0x5c6468 && _0x5c6468.length == 5) {
          _0x390858 = _0x5c6468[1];
          _0x3bd4b5 = _0x5c6468[2];
          _0x2498cd = _0x5c6468[3];
          _0x3e90af = _0x5c6468[4];
        } else {
          _0x5c6468 = _0x5bf73b.exec(_0x80743e);
          if (!_0x5c6468) {
            _0x5c6468 = _0x43968e.exec(_0x80743e);
          }
          if (_0x5c6468 && _0x5c6468.length >= 4) {
            _0x390858 = _0x5c6468[1];
            _0x3bd4b5 = _0x5c6468[2];
            _0x2498cd = _0x5c6468[3];
            _0x3e90af = _0x5c6468[4] | 0;
          } else {
            _0x4b5c6b += _0x80743e + "\n";
            continue;
          }
        }
        var _0x9c7c33 = false;
        if (_0x10b630 & 8) {
          var _0x595f8f = emscripten_source_map.originalPositionFor({
            line: _0x2498cd,
            column: _0x3e90af
          });
          _0x9c7c33 = _0x595f8f && _0x595f8f.source;
          if (_0x9c7c33) {
            if (_0x10b630 & 64) {
              _0x595f8f.source = _0x595f8f.source.substring(_0x595f8f.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
            }
            _0x4b5c6b += "    at " + _0x390858 + " (" + _0x595f8f.source + ":" + _0x595f8f.line + ":" + _0x595f8f.column + ")\n";
          }
        }
        if (_0x10b630 & 16 || !_0x9c7c33) {
          if (_0x10b630 & 64) {
            _0x3bd4b5 = _0x3bd4b5.substring(_0x3bd4b5.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x4b5c6b += (_0x9c7c33 ? "     = " + _0x390858 : "    at " + _0x390858) + " (" + _0x3bd4b5 + ":" + _0x2498cd + ":" + _0x3e90af + ")\n";
        }
        if (_0x10b630 & 128 && _0x2e1e4c[0]) {
          if (_0x2e1e4c[1] == _0x390858 && _0x2e1e4c[2].length > 0) {
            _0x4b5c6b = _0x4b5c6b.replace(/\s+$/, "");
            _0x4b5c6b += " with values: " + _0x2e1e4c[1] + _0x2e1e4c[2] + "\n";
          }
          _0x2e1e4c = _0x2c768c(_0x2e1e4c[0]);
        }
      }
      _0x4b5c6b = _0x4b5c6b.replace(/\s+$/, "");
      return _0x4b5c6b;
    }
    function _0x64910f(_0x3f873d, _0x1fc59c) {
      if (_0x3f873d & 24) {
        _0x1fc59c = _0x1fc59c.replace(/\s+$/, "");
        _0x1fc59c += (_0x1fc59c.length > 0 ? "\n" : "") + _0x592f94(_0x3f873d);
      }
      if (_0x3f873d & 1) {
        if (_0x3f873d & 4) {
          console.error(_0x1fc59c);
        } else if (_0x3f873d & 2) {
          console.warn(_0x1fc59c);
        } else if (_0x3f873d & 512) {
          console.info(_0x1fc59c);
        } else if (_0x3f873d & 256) {
          console.debug(_0x1fc59c);
        } else {
          console.log(_0x1fc59c);
        }
      } else if (_0x3f873d & 6) {
        _0x2e37f2(_0x1fc59c);
      } else {
        _0x329315(_0x1fc59c);
      }
    }
    function _0x387dd5(_0x24049f, _0x2b711a, _0x5e1dcf) {
      var _0x3d3752 = _0x454b10(_0x2b711a, _0x5e1dcf);
      var _0x38b5a2 = _0x29c7fe(_0x3d3752, 0);
      _0x64910f(_0x24049f, _0x38b5a2);
    }
    function _0x37d271(_0x4eda5b, _0x3d82f9, _0x1bf382) {
      _0x59122e.copyWithin(_0x4eda5b, _0x3d82f9, _0x3d82f9 + _0x1bf382);
    }
    function _0x1908e1(_0x217aaa, _0x32e8cd) {
      if (!_0x106067.fullscreenEnabled()) {
        return -1;
      }
      _0x217aaa = _0x34d727(_0x217aaa);
      if (!_0x217aaa) {
        return -4;
      }
      if (!_0x217aaa.requestFullscreen && !_0x217aaa.webkitRequestFullscreen) {
        return -3;
      }
      var _0x5df306 = _0x106067.canPerformEventHandlerRequests();
      if (!_0x5df306) {
        if (_0x32e8cd.deferUntilInEventHandler) {
          _0x106067.deferCall(_0x40415e, 1, [_0x217aaa, _0x32e8cd]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x40415e(_0x217aaa, _0x32e8cd);
    }
    function _0x9af776(_0x4be195, _0x251b2f) {
      var _0x5509fb = {
        scaleMode: 0,
        canvasResolutionScaleMode: 0,
        filteringMode: 0,
        deferUntilInEventHandler: _0x251b2f,
        canvasResizedCallbackTargetThread: 2
      };
      return _0x1908e1(_0x4be195, _0x5509fb);
    }
    function _0x1f3bf6(_0x3ae810, _0x2722a4) {
      _0x3ae810 = _0x34d727(_0x3ae810);
      if (!_0x3ae810) {
        return -4;
      }
      if (!_0x3ae810.requestPointerLock && !_0x3ae810.msRequestPointerLock) {
        return -1;
      }
      var _0x4a5cd2 = _0x106067.canPerformEventHandlerRequests();
      if (!_0x4a5cd2) {
        if (_0x2722a4) {
          _0x106067.deferCall(_0x2ec996, 2, [_0x3ae810]);
          return 1;
        } else {
          return -2;
        }
      }
      return _0x2ec996(_0x3ae810);
    }
    function _0xcc19dc(_0x5d8fe1) {
      try {
        _0x48fb0c.grow(_0x5d8fe1 - _0x5ac3fe.byteLength + 65535 >>> 16);
        _0x533823(_0x48fb0c.buffer);
        return 1;
      } catch (_0x598b39) {}
    }
    function _0x1fc2de(_0x3f9057) {
      var _0x2c4115 = _0x59122e.length;
      _0x3f9057 = _0x3f9057 >>> 0;
      var _0x44e2b3 = _0x1f438a();
      if (_0x3f9057 > _0x44e2b3) {
        return false;
      }
      let _0x4c95df = (_0xbc9c29, _0xcf7711) => _0xbc9c29 + (_0xcf7711 - _0xbc9c29 % _0xcf7711) % _0xcf7711;
      for (var _0x11c4f3 = 1; _0x11c4f3 <= 4; _0x11c4f3 *= 2) {
        var _0x408e06 = _0x2c4115 * (1 + 0.2 / _0x11c4f3);
        _0x408e06 = Math.min(_0x408e06, _0x3f9057 + 100663296);
        var _0x893fe0 = Math.min(_0x44e2b3, _0x4c95df(Math.max(_0x3f9057, _0x408e06), 65536));
        var _0x4fd82f = _0xcc19dc(_0x893fe0);
        if (_0x4fd82f) {
          return true;
        }
      }
      return false;
    }
    function _0x5bbf56() {
      try {
        if (navigator.getGamepads) {
          if (_0x106067.lastGamepadState = navigator.getGamepads()) {
            return 0;
          } else {
            return -1;
          }
        }
      } catch (_0x58f23b) {
        navigator.getGamepads = null;
      }
      return -1;
    }
    function _0x50ee87(_0x4642d3, _0x3be0b6, _0x54bd2e, _0xb23fbf, _0x11942c, _0x5c87a4, _0x3124f6) {
      if (!_0x106067.focusEvent) {
        _0x106067.focusEvent = _0x302e44(256);
      }
      function _0x1b41b9(_0x31d624) {
        var _0x318961 = _0x31d624 || event;
        var _0x838029 = _0x106067.getNodeNameForTarget(_0x318961.target);
        var _0x2e9a29 = _0x318961.target.id ? _0x318961.target.id : "";
        var _0x4ddea5 = _0x106067.focusEvent;
        _0x4f8934(_0x838029, _0x4ddea5 + 0, 128);
        _0x4f8934(_0x2e9a29, _0x4ddea5 + 128, 128);
        if (function (_0x12dcc1, _0x211171, _0x35beb8) {
          return _0x3427a6.apply(null, [_0xb23fbf, _0x12dcc1, _0x211171, _0x35beb8]);
        }(_0x11942c, _0x4ddea5, _0x3be0b6)) {
          _0x318961.preventDefault();
        }
      }
      var _0x55fee1 = {
        target: _0x34d727(_0x4642d3),
        eventTypeString: _0x5c87a4,
        callbackfunc: _0xb23fbf,
        handlerFunc: _0x1b41b9,
        useCapture: _0x54bd2e
      };
      _0x106067.registerOrRemoveHandler(_0x55fee1);
    }
    function _0xe46d76(_0x398a18, _0x4d8ac6, _0x2358a5, _0x408696, _0x5e7d49) {
      _0x50ee87(_0x398a18, _0x4d8ac6, _0x2358a5, _0x408696, 12, "blur", _0x5e7d49);
      return 0;
    }
    function _0xbaff66(_0x1037bc, _0x4f0839, _0x36cd54, _0x10ad41, _0x557024) {
      _0x50ee87(_0x1037bc, _0x4f0839, _0x36cd54, _0x10ad41, 13, "focus", _0x557024);
      return 0;
    }
    function _0x45250e(_0x1bd42d, _0x4309ff, _0x4347fc, _0x8ad05d, _0x4edddb, _0x2c152b, _0x39cb2b) {
      if (!_0x106067.fullscreenChangeEvent) {
        _0x106067.fullscreenChangeEvent = _0x302e44(280);
      }
      function _0x1a9824(_0x5f2392) {
        var _0x2f658f = _0x5f2392 || event;
        var _0x183d39 = _0x106067.fullscreenChangeEvent;
        _0xe262b8(_0x183d39);
        if (function (_0x5640d9, _0x278247, _0x25dd64) {
          return _0x3427a6.apply(null, [_0x8ad05d, _0x5640d9, _0x278247, _0x25dd64]);
        }(_0x4edddb, _0x183d39, _0x4309ff)) {
          _0x2f658f.preventDefault();
        }
      }
      var _0x17e723 = {
        target: _0x1bd42d,
        eventTypeString: _0x2c152b,
        callbackfunc: _0x8ad05d,
        handlerFunc: _0x1a9824,
        useCapture: _0x4347fc
      };
      _0x106067.registerOrRemoveHandler(_0x17e723);
    }
    function _0x3e306b(_0xffaf17, _0xf806bf, _0x4bbc2d, _0x55fcba, _0x422fef) {
      if (!_0x106067.fullscreenEnabled()) {
        return -1;
      }
      _0xffaf17 = _0x34d727(_0xffaf17);
      if (!_0xffaf17) {
        return -4;
      }
      _0x45250e(_0xffaf17, _0xf806bf, _0x4bbc2d, _0x55fcba, 19, "fullscreenchange", _0x422fef);
      _0x45250e(_0xffaf17, _0xf806bf, _0x4bbc2d, _0x55fcba, 19, "webkitfullscreenchange", _0x422fef);
      return 0;
    }
    function _0x5b7832(_0x2049ba, _0x4460d7, _0x23a5ba, _0x11a23a, _0x123cc6, _0x463ca7, _0x353c07) {
      if (!_0x106067.gamepadEvent) {
        _0x106067.gamepadEvent = _0x302e44(1432);
      }
      function _0x4ff9d1(_0x41f0e3) {
        var _0x193735 = _0x41f0e3 || event;
        var _0x1474ba = _0x106067.gamepadEvent;
        _0x2f9372(_0x1474ba, _0x193735.gamepad);
        if (function (_0x23e171, _0x1a7808, _0x1f160d) {
          return _0x3427a6.apply(null, [_0x11a23a, _0x23e171, _0x1a7808, _0x1f160d]);
        }(_0x123cc6, _0x1474ba, _0x4460d7)) {
          _0x193735.preventDefault();
        }
      }
      var _0x167c82 = {
        target: _0x34d727(_0x2049ba),
        allowsDeferredCalls: true,
        eventTypeString: _0x463ca7,
        callbackfunc: _0x11a23a,
        handlerFunc: _0x4ff9d1,
        useCapture: _0x23a5ba
      };
      _0x106067.registerOrRemoveHandler(_0x167c82);
    }
    function _0x369a3c(_0x248090, _0x2e9533, _0x536479, _0x4f3e73) {
      if (_0x5bbf56()) {
        return -1;
      }
      return _0x5b7832(2, _0x248090, _0x2e9533, _0x536479, 26, "gamepadconnected", _0x4f3e73);
    }
    function _0x5d987d(_0x3355a5, _0x42dab0, _0xb1c9c1, _0x2358d4) {
      if (_0x5bbf56()) {
        return -1;
      }
      return _0x5b7832(2, _0x3355a5, _0x42dab0, _0xb1c9c1, 27, "gamepaddisconnected", _0x2358d4);
    }
    function _0x2f14bd(_0x4e7667, _0xdf8802, _0x129c04) {
      return setInterval(function () {
        _0x5d8402(function () {
          (function (_0x5f3617) {
            _0x529933.apply(null, [_0x4e7667, _0x5f3617]);
          })(_0x129c04);
        });
      }, _0xdf8802);
    }
    function _0x9deb80(_0x5e27d9, _0x1834bb, _0x73a47e, _0x411162, _0x133700, _0x19a4c4, _0x36442c) {
      if (!_0x106067.keyEvent) {
        _0x106067.keyEvent = _0x302e44(176);
      }
      function _0x2eee0a(_0x13b2da) {
        var _0x5e41d3 = _0x106067.keyEvent;
        _0xe5eb95[_0x5e41d3 >> 3] = _0x13b2da.timeStamp;
        var _0x514527 = _0x5e41d3 >> 2;
        _0x576263[_0x514527 + 2] = _0x13b2da.location;
        _0x576263[_0x514527 + 3] = _0x13b2da.ctrlKey;
        _0x576263[_0x514527 + 4] = _0x13b2da.shiftKey;
        _0x576263[_0x514527 + 5] = _0x13b2da.altKey;
        _0x576263[_0x514527 + 6] = _0x13b2da.metaKey;
        _0x576263[_0x514527 + 7] = _0x13b2da.repeat;
        _0x576263[_0x514527 + 8] = _0x13b2da.charCode;
        _0x576263[_0x514527 + 9] = _0x13b2da.keyCode;
        _0x576263[_0x514527 + 10] = _0x13b2da.which;
        _0x4f8934(_0x13b2da.key || "", _0x5e41d3 + 44, 32);
        _0x4f8934(_0x13b2da.code || "", _0x5e41d3 + 76, 32);
        _0x4f8934(_0x13b2da.char || "", _0x5e41d3 + 108, 32);
        _0x4f8934(_0x13b2da.locale || "", _0x5e41d3 + 140, 32);
        if (function (_0x46a4c9, _0x3875c1, _0x3ce2c0) {
          return _0x3427a6.apply(null, [_0x411162, _0x46a4c9, _0x3875c1, _0x3ce2c0]);
        }(_0x133700, _0x5e41d3, _0x1834bb)) {
          _0x13b2da.preventDefault();
        }
      }
      var _0x2aa214 = {
        target: _0x34d727(_0x5e27d9),
        allowsDeferredCalls: true,
        eventTypeString: _0x19a4c4,
        callbackfunc: _0x411162,
        handlerFunc: _0x2eee0a,
        useCapture: _0x73a47e
      };
      _0x106067.registerOrRemoveHandler(_0x2aa214);
    }
    function _0x2e8e72(_0x4e4179, _0x267a54, _0x4f9268, _0xf11936, _0x5297d9) {
      _0x9deb80(_0x4e4179, _0x267a54, _0x4f9268, _0xf11936, 2, "keydown", _0x5297d9);
      return 0;
    }
    function _0x48f4af(_0x1ff802, _0x15fa4b, _0x55515e, _0x3ebc35, _0x41f5a4) {
      _0x9deb80(_0x1ff802, _0x15fa4b, _0x55515e, _0x3ebc35, 1, "keypress", _0x41f5a4);
      return 0;
    }
    function _0x5a95ff(_0x18388b, _0x144aa5, _0x2bdb9c, _0x2773b2, _0x8a8b9a) {
      _0x9deb80(_0x18388b, _0x144aa5, _0x2bdb9c, _0x2773b2, 3, "keyup", _0x8a8b9a);
      return 0;
    }
    function _0x5a36ef(_0xd22934, _0x5cf91d, _0xa85345) {
      function _0x130aac() {
        _0x2366b1.call(null, _0xd22934);
      }
      _0x3ddb3f(_0x130aac, _0x5cf91d, _0xa85345);
    }
    function _0x4fd7f3(_0x58ecee, _0x1f4c07, _0x4b2c91) {
      _0xe5eb95[_0x58ecee >> 3] = _0x1f4c07.timeStamp;
      var _0x566d99 = _0x58ecee >> 2;
      _0x576263[_0x566d99 + 2] = _0x1f4c07.screenX;
      _0x576263[_0x566d99 + 3] = _0x1f4c07.screenY;
      _0x576263[_0x566d99 + 4] = _0x1f4c07.clientX;
      _0x576263[_0x566d99 + 5] = _0x1f4c07.clientY;
      _0x576263[_0x566d99 + 6] = _0x1f4c07.ctrlKey;
      _0x576263[_0x566d99 + 7] = _0x1f4c07.shiftKey;
      _0x576263[_0x566d99 + 8] = _0x1f4c07.altKey;
      _0x576263[_0x566d99 + 9] = _0x1f4c07.metaKey;
      _0x2b0fe4[_0x566d99 * 2 + 20] = _0x1f4c07.button;
      _0x2b0fe4[_0x566d99 * 2 + 21] = _0x1f4c07.buttons;
      _0x576263[_0x566d99 + 11] = _0x1f4c07.movementX;
      _0x576263[_0x566d99 + 12] = _0x1f4c07.movementY;
      var _0x4e5c21 = _0x21d1e1(_0x4b2c91);
      _0x576263[_0x566d99 + 13] = _0x1f4c07.clientX - _0x4e5c21.left;
      _0x576263[_0x566d99 + 14] = _0x1f4c07.clientY - _0x4e5c21.top;
    }
    function _0x24ca68(_0x2d0966, _0x23b64b, _0x4b0700, _0x3351b3, _0x5a7f2d, _0x3d278d, _0x302dcc) {
      if (!_0x106067.mouseEvent) {
        _0x106067.mouseEvent = _0x302e44(72);
      }
      _0x2d0966 = _0x34d727(_0x2d0966);
      function _0x1183f5(_0x453778) {
        var _0x281e3a = _0x453778 || event;
        _0x4fd7f3(_0x106067.mouseEvent, _0x281e3a, _0x2d0966);
        if (function (_0x4f6c4d, _0x2ce0ba, _0x3ad6e7) {
          return _0x3427a6.apply(null, [_0x3351b3, _0x4f6c4d, _0x2ce0ba, _0x3ad6e7]);
        }(_0x5a7f2d, _0x106067.mouseEvent, _0x23b64b)) {
          _0x281e3a.preventDefault();
        }
      }
      var _0xea2877 = {
        target: _0x2d0966,
        allowsDeferredCalls: _0x3d278d != "mousemove" && _0x3d278d != "mouseenter" && _0x3d278d != "mouseleave",
        eventTypeString: _0x3d278d,
        callbackfunc: _0x3351b3,
        handlerFunc: _0x1183f5,
        useCapture: _0x4b0700
      };
      _0x106067.registerOrRemoveHandler(_0xea2877);
    }
    function _0x25f56a(_0xa19e3c, _0xe553dd, _0x352543, _0x244307, _0x1918f0) {
      _0x24ca68(_0xa19e3c, _0xe553dd, _0x352543, _0x244307, 5, "mousedown", _0x1918f0);
      return 0;
    }
    function _0x4ae351(_0x2d0c0c, _0x36628b, _0x3505a1, _0x210b18, _0x374031) {
      _0x24ca68(_0x2d0c0c, _0x36628b, _0x3505a1, _0x210b18, 8, "mousemove", _0x374031);
      return 0;
    }
    function _0x5893c8(_0x253fc2, _0x1a36d3, _0x1b7d29, _0x84d1b3, _0x1a7a72) {
      _0x24ca68(_0x253fc2, _0x1a36d3, _0x1b7d29, _0x84d1b3, 6, "mouseup", _0x1a7a72);
      return 0;
    }
    function _0xd93fcc(_0xe070bf) {
      var _0x56bafc = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var _0x35a749 = !!_0x56bafc;
      _0x576263[_0xe070bf >> 2] = _0x35a749;
      var _0x5b1071 = _0x106067.getNodeNameForTarget(_0x56bafc);
      var _0x134e07 = _0x56bafc && _0x56bafc.id ? _0x56bafc.id : "";
      _0x4f8934(_0x5b1071, _0xe070bf + 4, 128);
      _0x4f8934(_0x134e07, _0xe070bf + 132, 128);
    }
    function _0x388967(_0x26e191, _0x1e2f72, _0x306baf, _0x3d4719, _0xed3772, _0x24584c, _0x37b45d) {
      if (!_0x106067.pointerlockChangeEvent) {
        _0x106067.pointerlockChangeEvent = _0x302e44(260);
      }
      function _0x4daa7f(_0x34436d) {
        var _0x165586 = _0x34436d || event;
        var _0x7c9001 = _0x106067.pointerlockChangeEvent;
        _0xd93fcc(_0x7c9001);
        if (function (_0x216e3c, _0x96d8aa, _0x1d6869) {
          return _0x3427a6.apply(null, [_0x3d4719, _0x216e3c, _0x96d8aa, _0x1d6869]);
        }(_0xed3772, _0x7c9001, _0x1e2f72)) {
          _0x165586.preventDefault();
        }
      }
      var _0x5bedaa = {
        target: _0x26e191,
        eventTypeString: _0x24584c,
        callbackfunc: _0x3d4719,
        handlerFunc: _0x4daa7f,
        useCapture: _0x306baf
      };
      _0x106067.registerOrRemoveHandler(_0x5bedaa);
    }
    function _0x433176(_0x3fd95b, _0x3ed0e5, _0x69d3a9, _0x54c799, _0x47c691) {
      if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1;
      }
      _0x3fd95b = _0x34d727(_0x3fd95b);
      if (!_0x3fd95b) {
        return -4;
      }
      _0x388967(_0x3fd95b, _0x3ed0e5, _0x69d3a9, _0x54c799, 20, "pointerlockchange", _0x47c691);
      _0x388967(_0x3fd95b, _0x3ed0e5, _0x69d3a9, _0x54c799, 20, "mozpointerlockchange", _0x47c691);
      _0x388967(_0x3fd95b, _0x3ed0e5, _0x69d3a9, _0x54c799, 20, "webkitpointerlockchange", _0x47c691);
      _0x388967(_0x3fd95b, _0x3ed0e5, _0x69d3a9, _0x54c799, 20, "mspointerlockchange", _0x47c691);
      return 0;
    }
    function _0x4217d0(_0x352ac2, _0xd51099, _0x4e62af, _0x17feed, _0x376b4f, _0x371f66, _0x14fd22) {
      if (!_0x106067.touchEvent) {
        _0x106067.touchEvent = _0x302e44(1696);
      }
      _0x352ac2 = _0x34d727(_0x352ac2);
      function _0x4727fb(_0x45a19a) {
        var _0x25264e;
        var _0x862cc7 = {};
        var _0x495ec1 = _0x45a19a.touches;
        for (var _0xbf7360 = 0; _0xbf7360 < _0x495ec1.length; ++_0xbf7360) {
          _0x25264e = _0x495ec1[_0xbf7360];
          _0x25264e.isChanged = _0x25264e.onTarget = 0;
          _0x862cc7[_0x25264e.identifier] = _0x25264e;
        }
        for (var _0xbf7360 = 0; _0xbf7360 < _0x45a19a.changedTouches.length; ++_0xbf7360) {
          _0x25264e = _0x45a19a.changedTouches[_0xbf7360];
          _0x25264e.isChanged = 1;
          _0x862cc7[_0x25264e.identifier] = _0x25264e;
        }
        for (var _0xbf7360 = 0; _0xbf7360 < _0x45a19a.targetTouches.length; ++_0xbf7360) {
          _0x862cc7[_0x45a19a.targetTouches[_0xbf7360].identifier].onTarget = 1;
        }
        var _0x4bbad1 = _0x106067.touchEvent;
        var _0x44470e = _0x4bbad1 >> 2;
        _0x576263[_0x44470e + 3] = _0x45a19a.ctrlKey;
        _0x576263[_0x44470e + 4] = _0x45a19a.shiftKey;
        _0x576263[_0x44470e + 5] = _0x45a19a.altKey;
        _0x576263[_0x44470e + 6] = _0x45a19a.metaKey;
        _0x44470e += 7;
        var _0x20437b = _0x21d1e1(_0x352ac2);
        var _0x342092 = 0;
        for (var _0xbf7360 in _0x862cc7) {
          var _0x25264e = _0x862cc7[_0xbf7360];
          _0x576263[_0x44470e + 0] = _0x25264e.identifier;
          _0x576263[_0x44470e + 1] = _0x25264e.screenX;
          _0x576263[_0x44470e + 2] = _0x25264e.screenY;
          _0x576263[_0x44470e + 3] = _0x25264e.clientX;
          _0x576263[_0x44470e + 4] = _0x25264e.clientY;
          _0x576263[_0x44470e + 5] = _0x25264e.pageX;
          _0x576263[_0x44470e + 6] = _0x25264e.pageY;
          _0x576263[_0x44470e + 7] = _0x25264e.isChanged;
          _0x576263[_0x44470e + 8] = _0x25264e.onTarget;
          _0x576263[_0x44470e + 9] = _0x25264e.clientX - _0x20437b.left;
          _0x576263[_0x44470e + 10] = _0x25264e.clientY - _0x20437b.top;
          _0x44470e += 13;
          if (++_0x342092 > 31) {
            break;
          }
        }
        _0x576263[_0x4bbad1 + 8 >> 2] = _0x342092;
        if (function (_0x134269, _0x3869fe, _0x1ba983) {
          return _0x3427a6.apply(null, [_0x17feed, _0x134269, _0x3869fe, _0x1ba983]);
        }(_0x376b4f, _0x4bbad1, _0xd51099)) {
          _0x45a19a.preventDefault();
        }
      }
      var _0x237eb6 = {
        target: _0x352ac2,
        allowsDeferredCalls: _0x371f66 == "touchstart" || _0x371f66 == "touchend",
        eventTypeString: _0x371f66,
        callbackfunc: _0x17feed,
        handlerFunc: _0x4727fb,
        useCapture: _0x4e62af
      };
      _0x106067.registerOrRemoveHandler(_0x237eb6);
    }
    function _0x3dbd57(_0x1f0b3, _0x417ffa, _0x3d3ff5, _0xd0d8, _0x28f117) {
      _0x4217d0(_0x1f0b3, _0x417ffa, _0x3d3ff5, _0xd0d8, 25, "touchcancel", _0x28f117);
      return 0;
    }
    function _0x35c8f8(_0xa2eb4a, _0x932096, _0x666fdd, _0x37c395, _0x5b19be) {
      _0x4217d0(_0xa2eb4a, _0x932096, _0x666fdd, _0x37c395, 23, "touchend", _0x5b19be);
      return 0;
    }
    function _0x1fc03d(_0x4db852, _0x510d98, _0x24c1ad, _0x59324b, _0x38d4bc) {
      _0x4217d0(_0x4db852, _0x510d98, _0x24c1ad, _0x59324b, 24, "touchmove", _0x38d4bc);
      return 0;
    }
    function _0x4178bc(_0x442cff, _0xbbd486, _0x385b5b, _0x2bdb45, _0x2dfa87) {
      _0x4217d0(_0x442cff, _0xbbd486, _0x385b5b, _0x2bdb45, 22, "touchstart", _0x2dfa87);
      return 0;
    }
    function _0x8a0a27(_0x283006, _0x38cb1e, _0x22c97d, _0x5f2a02, _0x1f7d56, _0x1456de, _0x65d538) {
      if (!_0x106067.wheelEvent) {
        _0x106067.wheelEvent = _0x302e44(104);
      }
      function _0x3b54a7(_0x3ab12e) {
        var _0x3dd832 = _0x3ab12e || event;
        var _0x2308d0 = _0x106067.wheelEvent;
        _0x4fd7f3(_0x2308d0, _0x3dd832, _0x283006);
        _0xe5eb95[_0x2308d0 + 72 >> 3] = _0x3dd832.deltaX;
        _0xe5eb95[_0x2308d0 + 80 >> 3] = _0x3dd832.deltaY;
        _0xe5eb95[_0x2308d0 + 88 >> 3] = _0x3dd832.deltaZ;
        _0x576263[_0x2308d0 + 96 >> 2] = _0x3dd832.deltaMode;
        if (function (_0x87951c, _0x49680a, _0xfda31e) {
          return _0x3427a6.apply(null, [_0x5f2a02, _0x87951c, _0x49680a, _0xfda31e]);
        }(_0x1f7d56, _0x2308d0, _0x38cb1e)) {
          _0x3dd832.preventDefault();
        }
      }
      var _0x248865 = {
        target: _0x283006,
        allowsDeferredCalls: true,
        eventTypeString: _0x1456de,
        callbackfunc: _0x5f2a02,
        handlerFunc: _0x3b54a7,
        useCapture: _0x22c97d
      };
      _0x106067.registerOrRemoveHandler(_0x248865);
    }
    function _0x357326(_0x17fdc6, _0xa0ce54, _0x5e8ed9, _0x259dce, _0x2ba2e4) {
      _0x17fdc6 = _0x34d727(_0x17fdc6);
      if (typeof _0x17fdc6.onwheel != "undefined") {
        _0x8a0a27(_0x17fdc6, _0xa0ce54, _0x5e8ed9, _0x259dce, 9, "wheel", _0x2ba2e4);
        return 0;
      } else {
        return -1;
      }
    }
    function _0x87813b(_0x34b5d1) {
      var _0x5bb53e = _0x34b5d1.getExtension("ANGLE_instanced_arrays");
      if (_0x5bb53e) {
        _0x34b5d1.vertexAttribDivisor = function (_0x38dd1b, _0x2e79e9) {
          _0x5bb53e.vertexAttribDivisorANGLE(_0x38dd1b, _0x2e79e9);
        };
        _0x34b5d1.drawArraysInstanced = function (_0xf52f0b, _0x5df506, _0x3d5693, _0x2da8b7) {
          _0x5bb53e.drawArraysInstancedANGLE(_0xf52f0b, _0x5df506, _0x3d5693, _0x2da8b7);
        };
        _0x34b5d1.drawElementsInstanced = function (_0x40fabe, _0x516f96, _0x596f6d, _0x2a2272, _0x33d57e) {
          _0x5bb53e.drawElementsInstancedANGLE(_0x40fabe, _0x516f96, _0x596f6d, _0x2a2272, _0x33d57e);
        };
        return 1;
      }
    }
    function _0x2668bf(_0x58d0ef) {
      var _0x35b516 = _0x58d0ef.getExtension("OES_vertex_array_object");
      if (_0x35b516) {
        _0x58d0ef.createVertexArray = function () {
          return _0x35b516.createVertexArrayOES();
        };
        _0x58d0ef.deleteVertexArray = function (_0x2c70a1) {
          _0x35b516.deleteVertexArrayOES(_0x2c70a1);
        };
        _0x58d0ef.bindVertexArray = function (_0x42b6ee) {
          _0x35b516.bindVertexArrayOES(_0x42b6ee);
        };
        _0x58d0ef.isVertexArray = function (_0x47b273) {
          return _0x35b516.isVertexArrayOES(_0x47b273);
        };
        return 1;
      }
    }
    function _0x297a32(_0x327f4d) {
      var _0x196cf0 = _0x327f4d.getExtension("WEBGL_draw_buffers");
      if (_0x196cf0) {
        _0x327f4d.drawBuffers = function (_0x7fda83, _0xdbf13c) {
          _0x196cf0.drawBuffersWEBGL(_0x7fda83, _0xdbf13c);
        };
        return 1;
      }
    }
    function _0x135758(_0x247db3) {
      return !!(_0x247db3.dibvbi = _0x247db3.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0x58cdfa(_0x57258b) {
      return !!(_0x57258b.mdibvbi = _0x57258b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0xf6c9a4(_0x1e5fed) {
      return !!(_0x1e5fed.multiDrawWebgl = _0x1e5fed.getExtension("WEBGL_multi_draw"));
    }
    var _0x18b0dd = {
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
      recordError: function _0x1f9ed5(_0x1b594c) {
        if (!_0x18b0dd.lastError) {
          _0x18b0dd.lastError = _0x1b594c;
        }
      },
      getNewId: function (_0x3ac2ca) {
        var _0x3a96b7 = _0x18b0dd.counter++;
        for (var _0x152519 = _0x3ac2ca.length; _0x152519 < _0x3a96b7; _0x152519++) {
          _0x3ac2ca[_0x152519] = null;
        }
        return _0x3a96b7;
      },
      MAX_TEMP_BUFFER_SIZE: 2097152,
      numTempVertexBuffersPerSize: 64,
      log2ceilLookup: function (_0x3b89a7) {
        return 32 - Math.clz32(_0x3b89a7 === 0 ? 0 : _0x3b89a7 - 1);
      },
      generateTempBuffers: function (_0x1767a7, _0x506845) {
        var _0x5c5e8d = _0x18b0dd.log2ceilLookup(_0x18b0dd.MAX_TEMP_BUFFER_SIZE);
        _0x506845.tempVertexBufferCounters1 = [];
        _0x506845.tempVertexBufferCounters2 = [];
        _0x506845.tempVertexBufferCounters1.length = _0x506845.tempVertexBufferCounters2.length = _0x5c5e8d + 1;
        _0x506845.tempVertexBuffers1 = [];
        _0x506845.tempVertexBuffers2 = [];
        _0x506845.tempVertexBuffers1.length = _0x506845.tempVertexBuffers2.length = _0x5c5e8d + 1;
        _0x506845.tempIndexBuffers = [];
        _0x506845.tempIndexBuffers.length = _0x5c5e8d + 1;
        for (var _0x41962f = 0; _0x41962f <= _0x5c5e8d; ++_0x41962f) {
          _0x506845.tempIndexBuffers[_0x41962f] = null;
          _0x506845.tempVertexBufferCounters1[_0x41962f] = _0x506845.tempVertexBufferCounters2[_0x41962f] = 0;
          var _0x17c79b = _0x18b0dd.numTempVertexBuffersPerSize;
          _0x506845.tempVertexBuffers1[_0x41962f] = [];
          _0x506845.tempVertexBuffers2[_0x41962f] = [];
          var _0x534ab3 = _0x506845.tempVertexBuffers1[_0x41962f];
          var _0x1c9a2a = _0x506845.tempVertexBuffers2[_0x41962f];
          _0x534ab3.length = _0x1c9a2a.length = _0x17c79b;
          for (var _0x149658 = 0; _0x149658 < _0x17c79b; ++_0x149658) {
            _0x534ab3[_0x149658] = _0x1c9a2a[_0x149658] = null;
          }
        }
        if (_0x1767a7) {
          _0x506845.tempQuadIndexBuffer = _0x5cd50f.createBuffer();
          _0x506845.GLctx.bindBuffer(34963, _0x506845.tempQuadIndexBuffer);
          var _0x35d719 = _0x18b0dd.MAX_TEMP_BUFFER_SIZE >> 1;
          var _0x3a4760 = new Uint16Array(_0x35d719);
          var _0x41962f = 0;
          var _0x166353 = 0;
          while (1) {
            _0x3a4760[_0x41962f++] = _0x166353;
            if (_0x41962f >= _0x35d719) {
              break;
            }
            _0x3a4760[_0x41962f++] = _0x166353 + 1;
            if (_0x41962f >= _0x35d719) {
              break;
            }
            _0x3a4760[_0x41962f++] = _0x166353 + 2;
            if (_0x41962f >= _0x35d719) {
              break;
            }
            _0x3a4760[_0x41962f++] = _0x166353;
            if (_0x41962f >= _0x35d719) {
              break;
            }
            _0x3a4760[_0x41962f++] = _0x166353 + 2;
            if (_0x41962f >= _0x35d719) {
              break;
            }
            _0x3a4760[_0x41962f++] = _0x166353 + 3;
            if (_0x41962f >= _0x35d719) {
              break;
            }
            _0x166353 += 4;
          }
          _0x506845.GLctx.bufferData(34963, _0x3a4760, 35044);
          _0x506845.GLctx.bindBuffer(34963, null);
        }
      },
      getTempVertexBuffer: function _0x2d5067(_0x9cefcb) {
        var _0x1cd05a = _0x18b0dd.log2ceilLookup(_0x9cefcb);
        var _0x4b531d = _0x18b0dd.currentContext.tempVertexBuffers1[_0x1cd05a];
        var _0x17db91 = _0x18b0dd.currentContext.tempVertexBufferCounters1[_0x1cd05a];
        _0x18b0dd.currentContext.tempVertexBufferCounters1[_0x1cd05a] = _0x18b0dd.currentContext.tempVertexBufferCounters1[_0x1cd05a] + 1 & _0x18b0dd.numTempVertexBuffersPerSize - 1;
        var _0x5a9a1b = _0x4b531d[_0x17db91];
        if (_0x5a9a1b) {
          return _0x5a9a1b;
        }
        var _0x359d4a = _0x5cd50f.getParameter(34964);
        _0x4b531d[_0x17db91] = _0x5cd50f.createBuffer();
        _0x5cd50f.bindBuffer(34962, _0x4b531d[_0x17db91]);
        _0x5cd50f.bufferData(34962, 1 << _0x1cd05a, 35048);
        _0x5cd50f.bindBuffer(34962, _0x359d4a);
        return _0x4b531d[_0x17db91];
      },
      getTempIndexBuffer: function _0xfd90a1(_0x345766) {
        var _0x99cdef = _0x18b0dd.log2ceilLookup(_0x345766);
        var _0x43ecc1 = _0x18b0dd.currentContext.tempIndexBuffers[_0x99cdef];
        if (_0x43ecc1) {
          return _0x43ecc1;
        }
        var _0x29b363 = _0x5cd50f.getParameter(34965);
        _0x18b0dd.currentContext.tempIndexBuffers[_0x99cdef] = _0x5cd50f.createBuffer();
        _0x5cd50f.bindBuffer(34963, _0x18b0dd.currentContext.tempIndexBuffers[_0x99cdef]);
        _0x5cd50f.bufferData(34963, 1 << _0x99cdef, 35048);
        _0x5cd50f.bindBuffer(34963, _0x29b363);
        return _0x18b0dd.currentContext.tempIndexBuffers[_0x99cdef];
      },
      newRenderingFrameStarted: function _0x209ef6() {
        if (!_0x18b0dd.currentContext) {
          return;
        }
        var _0x21f134 = _0x18b0dd.currentContext.tempVertexBuffers1;
        _0x18b0dd.currentContext.tempVertexBuffers1 = _0x18b0dd.currentContext.tempVertexBuffers2;
        _0x18b0dd.currentContext.tempVertexBuffers2 = _0x21f134;
        _0x21f134 = _0x18b0dd.currentContext.tempVertexBufferCounters1;
        _0x18b0dd.currentContext.tempVertexBufferCounters1 = _0x18b0dd.currentContext.tempVertexBufferCounters2;
        _0x18b0dd.currentContext.tempVertexBufferCounters2 = _0x21f134;
        var _0x5a60ad = _0x18b0dd.log2ceilLookup(_0x18b0dd.MAX_TEMP_BUFFER_SIZE);
        for (var _0x153c8a = 0; _0x153c8a <= _0x5a60ad; ++_0x153c8a) {
          _0x18b0dd.currentContext.tempVertexBufferCounters1[_0x153c8a] = 0;
        }
      },
      getSource: function (_0x4330b9, _0x476f34, _0x568343, _0x16545) {
        var _0x30d580 = "";
        for (var _0x4ebc85 = 0; _0x4ebc85 < _0x476f34; ++_0x4ebc85) {
          var _0x1a7350 = _0x16545 ? _0x576263[_0x16545 + _0x4ebc85 * 4 >> 2] : -1;
          _0x30d580 += _0x3d5aa0(_0x576263[_0x568343 + _0x4ebc85 * 4 >> 2], _0x1a7350 < 0 ? undefined : _0x1a7350);
        }
        return _0x30d580;
      },
      calcBufLength: function _0x24b298(_0x53a910, _0x2bd7fe, _0x3a9bf0, _0x1e78e7) {
        if (_0x3a9bf0 > 0) {
          return _0x1e78e7 * _0x3a9bf0;
        }
        var _0x563a4b = _0x18b0dd.byteSizeByType[_0x2bd7fe - _0x18b0dd.byteSizeByTypeRoot];
        return _0x53a910 * _0x563a4b * _0x1e78e7;
      },
      usedTempBuffers: [],
      preDrawHandleClientVertexAttribBindings: function _0x4f755d(_0xb0f482) {
        _0x18b0dd.resetBufferBinding = false;
        for (var _0x2d05cd = 0; _0x2d05cd < _0x18b0dd.currentContext.maxVertexAttribs; ++_0x2d05cd) {
          var _0x4ec4a6 = _0x18b0dd.currentContext.clientBuffers[_0x2d05cd];
          if (!_0x4ec4a6.clientside || !_0x4ec4a6.enabled) {
            continue;
          }
          _0x18b0dd.resetBufferBinding = true;
          var _0x3f1ea8 = _0x18b0dd.calcBufLength(_0x4ec4a6.size, _0x4ec4a6.type, _0x4ec4a6.stride, _0xb0f482);
          var _0x3da003 = _0x18b0dd.getTempVertexBuffer(_0x3f1ea8);
          _0x5cd50f.bindBuffer(34962, _0x3da003);
          _0x5cd50f.bufferSubData(34962, 0, _0x59122e.subarray(_0x4ec4a6.ptr, _0x4ec4a6.ptr + _0x3f1ea8));
          _0x4ec4a6.vertexAttribPointerAdaptor.call(_0x5cd50f, _0x2d05cd, _0x4ec4a6.size, _0x4ec4a6.type, _0x4ec4a6.normalized, _0x4ec4a6.stride, 0);
        }
      },
      postDrawHandleClientVertexAttribBindings: function _0x545e25() {
        if (_0x18b0dd.resetBufferBinding) {
          _0x5cd50f.bindBuffer(34962, _0x18b0dd.buffers[_0x5cd50f.currentArrayBufferBinding]);
        }
      },
      createContext: function (_0x2b7f91, _0x35fdbd) {
        if (!_0x2b7f91.getContextSafariWebGL2Fixed) {
          _0x2b7f91.getContextSafariWebGL2Fixed = _0x2b7f91.getContext;
          function _0x36be69(_0x5878f4, _0x40b7c1) {
            var _0x3a72ce = _0x2b7f91.getContextSafariWebGL2Fixed(_0x5878f4, _0x40b7c1);
            if (_0x5878f4 == "webgl" == _0x3a72ce instanceof WebGLRenderingContext) {
              return _0x3a72ce;
            } else {
              return null;
            }
          }
          _0x2b7f91.getContext = _0x36be69;
        }
        var _0x5148ae = _0x35fdbd.majorVersion > 1 ? _0x2b7f91.getContext("webgl2", _0x35fdbd) : _0x2b7f91.getContext("webgl", _0x35fdbd);
        if (!_0x5148ae) {
          return 0;
        }
        var _0x166649 = _0x18b0dd.registerContext(_0x5148ae, _0x35fdbd);
        return _0x166649;
      },
      registerContext: function (_0x56dcb1, _0x410f5d) {
        var _0x1217e2 = _0x18b0dd.getNewId(_0x18b0dd.contexts);
        var _0x3beaf5 = {
          handle: _0x1217e2,
          attributes: _0x410f5d,
          version: _0x410f5d.majorVersion,
          GLctx: _0x56dcb1
        };
        if (_0x56dcb1.canvas) {
          _0x56dcb1.canvas.GLctxObject = _0x3beaf5;
        }
        _0x18b0dd.contexts[_0x1217e2] = _0x3beaf5;
        if (typeof _0x410f5d.enableExtensionsByDefault == "undefined" || _0x410f5d.enableExtensionsByDefault) {
          _0x18b0dd.initExtensions(_0x3beaf5);
        }
        _0x3beaf5.maxVertexAttribs = _0x3beaf5.GLctx.getParameter(34921);
        _0x3beaf5.clientBuffers = [];
        for (var _0x2ec126 = 0; _0x2ec126 < _0x3beaf5.maxVertexAttribs; _0x2ec126++) {
          _0x3beaf5.clientBuffers[_0x2ec126] = {
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
        _0x18b0dd.generateTempBuffers(false, _0x3beaf5);
        return _0x1217e2;
      },
      makeContextCurrent: function (_0x1d6400) {
        _0x18b0dd.currentContext = _0x18b0dd.contexts[_0x1d6400];
        _0x17aa78.ctx = _0x5cd50f = _0x18b0dd.currentContext && _0x18b0dd.currentContext.GLctx;
        return !_0x1d6400 || !!_0x5cd50f;
      },
      getContext: function (_0x59bfaa) {
        return _0x18b0dd.contexts[_0x59bfaa];
      },
      deleteContext: function (_0x6da0c8) {
        if (_0x18b0dd.currentContext === _0x18b0dd.contexts[_0x6da0c8]) {
          _0x18b0dd.currentContext = null;
        }
        if (typeof _0x106067 == "object") {
          _0x106067.removeAllHandlersOnTarget(_0x18b0dd.contexts[_0x6da0c8].GLctx.canvas);
        }
        if (_0x18b0dd.contexts[_0x6da0c8] && _0x18b0dd.contexts[_0x6da0c8].GLctx.canvas) {
          _0x18b0dd.contexts[_0x6da0c8].GLctx.canvas.GLctxObject = undefined;
        }
        _0x18b0dd.contexts[_0x6da0c8] = null;
      },
      initExtensions: function (_0x5ece64) {
        if (!_0x5ece64) {
          _0x5ece64 = _0x18b0dd.currentContext;
        }
        if (_0x5ece64.initExtensionsDone) {
          return;
        }
        _0x5ece64.initExtensionsDone = true;
        var _0x491951 = _0x5ece64.GLctx;
        _0x87813b(_0x491951);
        _0x2668bf(_0x491951);
        _0x297a32(_0x491951);
        _0x135758(_0x491951);
        _0x58cdfa(_0x491951);
        if (_0x5ece64.version >= 2) {
          _0x491951.disjointTimerQueryExt = _0x491951.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0x5ece64.version < 2 || !_0x491951.disjointTimerQueryExt) {
          _0x491951.disjointTimerQueryExt = _0x491951.getExtension("EXT_disjoint_timer_query");
        }
        _0xf6c9a4(_0x491951);
        var _0x557a36 = _0x491951.getSupportedExtensions() || [];
        _0x557a36.forEach(function (_0x3bb7bc) {
          if (!_0x3bb7bc.includes("lose_context") && !_0x3bb7bc.includes("debug")) {
            _0x491951.getExtension(_0x3bb7bc);
          }
        });
      }
    };
    var _0x588e92 = ["default", "low-power", "high-performance"];
    function _0x26fd90(_0x47ceaa, _0x3848d9) {
      var _0x12ba87 = _0x3848d9 >> 2;
      var _0x34922c = _0x576263[_0x12ba87 + 6];
      var _0x149574 = {
        alpha: !!_0x576263[_0x12ba87 + 0],
        depth: !!_0x576263[_0x12ba87 + 1],
        stencil: !!_0x576263[_0x12ba87 + 2],
        antialias: !!_0x576263[_0x12ba87 + 3],
        premultipliedAlpha: !!_0x576263[_0x12ba87 + 4],
        preserveDrawingBuffer: !!_0x576263[_0x12ba87 + 5],
        powerPreference: _0x588e92[_0x34922c],
        failIfMajorPerformanceCaveat: !!_0x576263[_0x12ba87 + 7],
        majorVersion: _0x576263[_0x12ba87 + 8],
        minorVersion: _0x576263[_0x12ba87 + 9],
        enableExtensionsByDefault: _0x576263[_0x12ba87 + 10],
        explicitSwapControl: _0x576263[_0x12ba87 + 11],
        proxyContextToMainThread: _0x576263[_0x12ba87 + 12],
        renderViaOffscreenBackBuffer: _0x576263[_0x12ba87 + 13]
      };
      var _0x419432 = _0x35599b(_0x47ceaa);
      if (!_0x419432) {
        return 0;
      }
      if (_0x149574.explicitSwapControl) {
        return 0;
      }
      var _0x58d2af = _0x18b0dd.createContext(_0x419432, _0x149574);
      return _0x58d2af;
    }
    function _0x13de3b(_0x984431, _0x17807b) {
      return _0x26fd90(_0x984431, _0x17807b);
    }
    function _0x3f971a(_0x37ee75) {
      if (_0x18b0dd.currentContext == _0x37ee75) {
        _0x18b0dd.currentContext = 0;
      }
      _0x18b0dd.deleteContext(_0x37ee75);
    }
    function _0x39ebd6(_0x5ddc13, _0x48e784) {
      var _0x47d803 = _0x18b0dd.getContext(_0x5ddc13);
      var _0x4ec431 = _0x3d5aa0(_0x48e784);
      if (_0x4ec431.startsWith("GL_")) {
        _0x4ec431 = _0x4ec431.substr(3);
      }
      if (_0x4ec431 == "ANGLE_instanced_arrays") {
        _0x87813b(_0x5cd50f);
      }
      if (_0x4ec431 == "OES_vertex_array_object") {
        _0x2668bf(_0x5cd50f);
      }
      if (_0x4ec431 == "WEBGL_draw_buffers") {
        _0x297a32(_0x5cd50f);
      }
      if (_0x4ec431 == "WEBGL_draw_instanced_base_vertex_base_instance") {
        _0x135758(_0x5cd50f);
      }
      if (_0x4ec431 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
        _0x58cdfa(_0x5cd50f);
      }
      if (_0x4ec431 == "WEBGL_multi_draw") {
        _0xf6c9a4(_0x5cd50f);
      }
      var _0xeb6a35 = _0x47d803.GLctx.getExtension(_0x4ec431);
      return !!_0xeb6a35;
    }
    function _0x1012ab() {
      if (_0x18b0dd.currentContext) {
        return _0x18b0dd.currentContext.handle;
      } else {
        return 0;
      }
    }
    function _0x464c17() {
      return _0x1012ab();
    }
    function _0x1ef658(_0x3656e6) {
      var _0x84d97 = _0x3656e6 >> 2;
      for (var _0x2e358b = 0; _0x2e358b < 14; ++_0x2e358b) {
        _0x576263[_0x84d97 + _0x2e358b] = 0;
      }
      _0x576263[_0x84d97 + 0] = _0x576263[_0x84d97 + 1] = _0x576263[_0x84d97 + 3] = _0x576263[_0x84d97 + 4] = _0x576263[_0x84d97 + 8] = _0x576263[_0x84d97 + 10] = 1;
    }
    function _0x270de2(_0x1eec65) {
      var _0x14a5ce = _0x18b0dd.makeContextCurrent(_0x1eec65);
      if (_0x14a5ce) {
        return 0;
      } else {
        return -5;
      }
    }
    var _0x14dcf4 = {};
    function _0x15c642() {
      return _0x5c2241 || "./this.program";
    }
    function _0x310db4() {
      if (!_0x310db4.strings) {
        var _0x3dbadd = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var _0x34f13d = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: _0x3dbadd,
          _: _0x15c642()
        };
        for (var _0x1ec964 in _0x14dcf4) {
          if (_0x14dcf4[_0x1ec964] === undefined) {
            delete _0x34f13d[_0x1ec964];
          } else {
            _0x34f13d[_0x1ec964] = _0x14dcf4[_0x1ec964];
          }
        }
        var _0xe3951d = [];
        for (var _0x1ec964 in _0x34f13d) {
          _0xe3951d.push(_0x1ec964 + "=" + _0x34f13d[_0x1ec964]);
        }
        _0x310db4.strings = _0xe3951d;
      }
      return _0x310db4.strings;
    }
    function _0x2e6a1d(_0x230259, _0x554ace) {
      var _0x5852fe = 0;
      _0x310db4().forEach(function (_0x2a3332, _0xffa914) {
        var _0x2291fc = _0x554ace + _0x5852fe;
        _0x576263[_0x230259 + _0xffa914 * 4 >> 2] = _0x2291fc;
        _0x128dbf(_0x2a3332, _0x2291fc);
        _0x5852fe += _0x2a3332.length + 1;
      });
      return 0;
    }
    function _0x4c20db(_0x541732, _0x3b2347) {
      var _0x32ad68 = _0x310db4();
      _0x576263[_0x541732 >> 2] = _0x32ad68.length;
      var _0x593b6b = 0;
      _0x32ad68.forEach(function (_0xdbab76) {
        _0x593b6b += _0xdbab76.length + 1;
      });
      _0x576263[_0x3b2347 >> 2] = _0x593b6b;
      return 0;
    }
    function _0x1d13e6(_0x10befd) {
      try {
        var _0x4e82c1 = _0x4203c0.getStreamFromFD(_0x10befd);
        _0x5292fc.close(_0x4e82c1);
        return 0;
      } catch (_0x3bea5f) {
        if (typeof _0x5292fc == "undefined" || !(_0x3bea5f instanceof _0x5292fc.ErrnoError)) {
          throw _0x3bea5f;
        }
        return _0x3bea5f.errno;
      }
    }
    function _0x19c5cd(_0x9a8ff7, _0x5f2e66) {
      try {
        var _0x1acd7b = _0x4203c0.getStreamFromFD(_0x9a8ff7);
        var _0x1ac057 = _0x1acd7b.tty ? 2 : _0x5292fc.isDir(_0x1acd7b.mode) ? 3 : _0x5292fc.isLink(_0x1acd7b.mode) ? 7 : 4;
        _0xe1b6fc[_0x5f2e66 >> 0] = _0x1ac057;
        return 0;
      } catch (_0x52b0e6) {
        if (typeof _0x5292fc == "undefined" || !(_0x52b0e6 instanceof _0x5292fc.ErrnoError)) {
          throw _0x52b0e6;
        }
        return _0x52b0e6.errno;
      }
    }
    function _0x41c955(_0x91631d, _0x1f0f8c, _0x36f978, _0x5bf5c1) {
      try {
        var _0x2776ec = _0x4203c0.getStreamFromFD(_0x91631d);
        var _0x98ba96 = _0x4203c0.doReadv(_0x2776ec, _0x1f0f8c, _0x36f978);
        _0x576263[_0x5bf5c1 >> 2] = _0x98ba96;
        return 0;
      } catch (_0x500a10) {
        if (typeof _0x5292fc == "undefined" || !(_0x500a10 instanceof _0x5292fc.ErrnoError)) {
          throw _0x500a10;
        }
        return _0x500a10.errno;
      }
    }
    function _0x261124(_0x1a276f, _0x14538a, _0x122509, _0x53def0, _0x3fc377) {
      try {
        var _0x5d9315 = _0x4203c0.getStreamFromFD(_0x1a276f);
        var _0x1ead08 = 4294967296;
        var _0x4a5950 = _0x122509 * _0x1ead08 + (_0x14538a >>> 0);
        var _0x5140cf = 9007199254740992;
        if (_0x4a5950 <= -_0x5140cf || _0x4a5950 >= _0x5140cf) {
          return -61;
        }
        _0x5292fc.llseek(_0x5d9315, _0x4a5950, _0x53def0);
        _0x34cc1 = [_0x5d9315.position >>> 0, (_0x161da0 = _0x5d9315.position, +Math.abs(_0x161da0) >= 1 ? _0x161da0 > 0 ? (Math.min(+Math.floor(_0x161da0 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x161da0 - +(~~_0x161da0 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x576263[_0x3fc377 >> 2] = _0x34cc1[0];
        _0x576263[_0x3fc377 + 4 >> 2] = _0x34cc1[1];
        if (_0x5d9315.getdents && _0x4a5950 === 0 && _0x53def0 === 0) {
          _0x5d9315.getdents = null;
        }
        return 0;
      } catch (_0x5a2867) {
        if (typeof _0x5292fc == "undefined" || !(_0x5a2867 instanceof _0x5292fc.ErrnoError)) {
          throw _0x5a2867;
        }
        return _0x5a2867.errno;
      }
    }
    function _0x394562(_0x4edcb4, _0x63df44, _0x3e28ca, _0x59e315) {
      try {
        var _0x3ea833 = _0x4203c0.getStreamFromFD(_0x4edcb4);
        var _0x501955 = _0x4203c0.doWritev(_0x3ea833, _0x63df44, _0x3e28ca);
        _0x576263[_0x59e315 >> 2] = _0x501955;
        return 0;
      } catch (_0x66a5aa) {
        if (typeof _0x5292fc == "undefined" || !(_0x66a5aa instanceof _0x5292fc.ErrnoError)) {
          throw _0x66a5aa;
        }
        return _0x66a5aa.errno;
      }
    }
    function _0x1a4bc8() {
      return _0x3d0afa();
    }
    function _0x3327a4(_0x360801, _0x221c01, _0x1a8d92, _0x463865) {
      var _0x4683b4 = 0;
      var _0x1d38da = 0;
      var _0x39ea1e = 0;
      var _0x46fe46 = 0;
      var _0x5aed52 = 0;
      var _0x26cfad = 0;
      var _0x23772b;
      function _0x215f42(_0x12a954, _0x1d89a0, _0xc077d8, _0x597a98, _0x20a72f, _0x2ed6da) {
        var _0x284fe4;
        var _0x3e355c;
        var _0x29d77a;
        var _0x3506fe;
        _0x3e355c = _0x12a954 === 10 ? 28 : 16;
        _0x20a72f = _0x12a954 === 10 ? _0x4ba758(_0x20a72f) : _0x1d6c1b(_0x20a72f);
        _0x284fe4 = _0x302e44(_0x3e355c);
        _0x3506fe = _0x3d1759(_0x284fe4, _0x12a954, _0x20a72f, _0x2ed6da);
        _0x469125(!_0x3506fe);
        _0x29d77a = _0x302e44(32);
        _0x576263[_0x29d77a + 4 >> 2] = _0x12a954;
        _0x576263[_0x29d77a + 8 >> 2] = _0x1d89a0;
        _0x576263[_0x29d77a + 12 >> 2] = _0xc077d8;
        _0x576263[_0x29d77a + 24 >> 2] = _0x597a98;
        _0x576263[_0x29d77a + 20 >> 2] = _0x284fe4;
        if (_0x12a954 === 10) {
          _0x576263[_0x29d77a + 16 >> 2] = 28;
        } else {
          _0x576263[_0x29d77a + 16 >> 2] = 16;
        }
        _0x576263[_0x29d77a + 28 >> 2] = 0;
        return _0x29d77a;
      }
      if (_0x1a8d92) {
        _0x39ea1e = _0x576263[_0x1a8d92 >> 2];
        _0x46fe46 = _0x576263[_0x1a8d92 + 4 >> 2];
        _0x5aed52 = _0x576263[_0x1a8d92 + 8 >> 2];
        _0x26cfad = _0x576263[_0x1a8d92 + 12 >> 2];
      }
      if (_0x5aed52 && !_0x26cfad) {
        _0x26cfad = _0x5aed52 === 2 ? 17 : 6;
      }
      if (!_0x5aed52 && _0x26cfad) {
        _0x5aed52 = _0x26cfad === 17 ? 2 : 1;
      }
      if (_0x26cfad === 0) {
        _0x26cfad = 6;
      }
      if (_0x5aed52 === 0) {
        _0x5aed52 = 1;
      }
      if (!_0x360801 && !_0x221c01) {
        return -2;
      }
      if (_0x39ea1e & ~1087) {
        return -1;
      }
      if (_0x1a8d92 !== 0 && _0x576263[_0x1a8d92 >> 2] & 2 && !_0x360801) {
        return -1;
      }
      if (_0x39ea1e & 32) {
        return -2;
      }
      if (_0x5aed52 !== 0 && _0x5aed52 !== 1 && _0x5aed52 !== 2) {
        return -7;
      }
      if (_0x46fe46 !== 0 && _0x46fe46 !== 2 && _0x46fe46 !== 10) {
        return -6;
      }
      if (_0x221c01) {
        _0x221c01 = _0x3d5aa0(_0x221c01);
        _0x1d38da = parseInt(_0x221c01, 10);
        if (isNaN(_0x1d38da)) {
          if (_0x39ea1e & 1024) {
            return -2;
          }
          return -8;
        }
      }
      if (!_0x360801) {
        if (_0x46fe46 === 0) {
          _0x46fe46 = 2;
        }
        if ((_0x39ea1e & 1) === 0) {
          if (_0x46fe46 === 2) {
            _0x4683b4 = _0x1a7842(2130706433);
          } else {
            _0x4683b4 = [0, 0, 0, 1];
          }
        }
        _0x23772b = _0x215f42(_0x46fe46, _0x5aed52, _0x26cfad, null, _0x4683b4, _0x1d38da);
        _0x576263[_0x463865 >> 2] = _0x23772b;
        return 0;
      }
      _0x360801 = _0x3d5aa0(_0x360801);
      _0x4683b4 = _0x3d7498(_0x360801);
      if (_0x4683b4 !== null) {
        if (_0x46fe46 === 0 || _0x46fe46 === 2) {
          _0x46fe46 = 2;
        } else if (_0x46fe46 === 10 && _0x39ea1e & 8) {
          _0x4683b4 = [0, 0, _0x1a7842(65535), _0x4683b4];
          _0x46fe46 = 10;
        } else {
          return -2;
        }
      } else {
        _0x4683b4 = _0x2548f2(_0x360801);
        if (_0x4683b4 !== null) {
          if (_0x46fe46 === 0 || _0x46fe46 === 10) {
            _0x46fe46 = 10;
          } else {
            return -2;
          }
        }
      }
      if (_0x4683b4 != null) {
        _0x23772b = _0x215f42(_0x46fe46, _0x5aed52, _0x26cfad, _0x360801, _0x4683b4, _0x1d38da);
        _0x576263[_0x463865 >> 2] = _0x23772b;
        return 0;
      }
      if (_0x39ea1e & 4) {
        return -2;
      }
      _0x360801 = _0x43a9e1.lookup_name(_0x360801);
      _0x4683b4 = _0x3d7498(_0x360801);
      if (_0x46fe46 === 0) {
        _0x46fe46 = 2;
      } else if (_0x46fe46 === 10) {
        _0x4683b4 = [0, 0, _0x1a7842(65535), _0x4683b4];
      }
      _0x23772b = _0x215f42(_0x46fe46, _0x5aed52, _0x26cfad, null, _0x4683b4, _0x1d38da);
      _0x576263[_0x463865 >> 2] = _0x23772b;
      return 0;
    }
    function _0x26fbc5(_0x2e0341) {
      var _0x26f557 = _0x302e44(20);
      var _0x3d0fb6 = _0x302e44(_0x2e0341.length + 1);
      _0x4f8934(_0x2e0341, _0x3d0fb6, _0x2e0341.length + 1);
      _0x576263[_0x26f557 >> 2] = _0x3d0fb6;
      var _0x3e81cf = _0x302e44(4);
      _0x576263[_0x3e81cf >> 2] = 0;
      _0x576263[_0x26f557 + 4 >> 2] = _0x3e81cf;
      var _0x3ee2a1 = 2;
      _0x576263[_0x26f557 + 8 >> 2] = _0x3ee2a1;
      _0x576263[_0x26f557 + 12 >> 2] = 4;
      var _0x488e67 = _0x302e44(12);
      _0x576263[_0x488e67 >> 2] = _0x488e67 + 8;
      _0x576263[_0x488e67 + 4 >> 2] = 0;
      _0x576263[_0x488e67 + 8 >> 2] = _0x3d7498(_0x43a9e1.lookup_name(_0x2e0341));
      _0x576263[_0x26f557 + 16 >> 2] = _0x488e67;
      return _0x26f557;
    }
    function _0x4de21a(_0x2d8f29, _0x5733ed, _0x41f328) {
      if (_0x41f328 !== 2) {
        _0xaba781(5);
        return null;
      }
      _0x2d8f29 = _0x576263[_0x2d8f29 >> 2];
      var _0x40c8f8 = _0x1d6c1b(_0x2d8f29);
      var _0x121219 = _0x43a9e1.lookup_addr(_0x40c8f8);
      if (_0x121219) {
        _0x40c8f8 = _0x121219;
      }
      return _0x26fbc5(_0x40c8f8);
    }
    function _0x56ebd2(_0xd65efa) {
      return _0x26fbc5(_0x3d5aa0(_0xd65efa));
    }
    function _0x3d1587(_0x21c911, _0x226ea9, _0x190ef1, _0x22df68, _0x1b1a04, _0x48d25b, _0x2ead13) {
      var _0x1e7b40 = _0x43a17d(_0x21c911, _0x226ea9);
      if (_0x1e7b40.errno) {
        return -6;
      }
      var _0x29cc87 = _0x1e7b40.port;
      var _0x280b48 = _0x1e7b40.addr;
      var _0x15c1b6 = false;
      if (_0x190ef1 && _0x22df68) {
        var _0x403105;
        if (_0x2ead13 & 1 || !(_0x403105 = _0x43a9e1.lookup_addr(_0x280b48))) {
          if (_0x2ead13 & 8) {
            return -2;
          }
        } else {
          _0x280b48 = _0x403105;
        }
        var _0x31782a = _0x4f8934(_0x280b48, _0x190ef1, _0x22df68);
        if (_0x31782a + 1 >= _0x22df68) {
          _0x15c1b6 = true;
        }
      }
      if (_0x1b1a04 && _0x48d25b) {
        _0x29cc87 = "" + _0x29cc87;
        var _0x31782a = _0x4f8934(_0x29cc87, _0x1b1a04, _0x48d25b);
        if (_0x31782a + 1 >= _0x48d25b) {
          _0x15c1b6 = true;
        }
      }
      if (_0x15c1b6) {
        return -12;
      }
      return 0;
    }
    function _0x12ad07(_0x29433a) {
      _0x5cd50f.activeTexture(_0x29433a);
    }
    function _0x59e3bb(_0x103c6c, _0x3bc229) {
      _0x103c6c = _0x18b0dd.programs[_0x103c6c];
      _0x3bc229 = _0x18b0dd.shaders[_0x3bc229];
      _0x103c6c[_0x3bc229.shaderType] = _0x3bc229;
      _0x5cd50f.attachShader(_0x103c6c, _0x3bc229);
    }
    function _0x260378(_0x2b1a6e, _0x469203) {
      _0x5cd50f.beginQuery(_0x2b1a6e, _0x18b0dd.queries[_0x469203]);
    }
    function _0xf9aec6(_0x191249, _0x362dc1, _0x182577) {
      _0x5cd50f.bindAttribLocation(_0x18b0dd.programs[_0x191249], _0x362dc1, _0x3d5aa0(_0x182577));
    }
    function _0x288314(_0x2d8897, _0x32cd5e) {
      if (_0x2d8897 == 34962) {
        _0x5cd50f.currentArrayBufferBinding = _0x32cd5e;
      } else if (_0x2d8897 == 34963) {
        _0x5cd50f.currentElementArrayBufferBinding = _0x32cd5e;
      }
      if (_0x2d8897 == 35051) {
        _0x5cd50f.currentPixelPackBufferBinding = _0x32cd5e;
      } else if (_0x2d8897 == 35052) {
        _0x5cd50f.currentPixelUnpackBufferBinding = _0x32cd5e;
      }
      _0x5cd50f.bindBuffer(_0x2d8897, _0x18b0dd.buffers[_0x32cd5e]);
    }
    function _0x2711dc(_0x375710, _0xef4bdb, _0x2a86ae) {
      _0x5cd50f.bindBufferBase(_0x375710, _0xef4bdb, _0x18b0dd.buffers[_0x2a86ae]);
    }
    function _0x3090d0(_0x3f8e8a, _0x1081d5, _0x325a44, _0x3460f0, _0x2ebbae) {
      _0x5cd50f.bindBufferRange(_0x3f8e8a, _0x1081d5, _0x18b0dd.buffers[_0x325a44], _0x3460f0, _0x2ebbae);
    }
    function _0x16c149(_0x5c9c70, _0x54e7ed) {
      _0x5cd50f.bindFramebuffer(_0x5c9c70, _0x18b0dd.framebuffers[_0x54e7ed]);
    }
    function _0x1d5e08(_0x54378f, _0x1ce025) {
      _0x5cd50f.bindRenderbuffer(_0x54378f, _0x18b0dd.renderbuffers[_0x1ce025]);
    }
    function _0x327bbc(_0x17f55d, _0x3f768b) {
      _0x5cd50f.bindSampler(_0x17f55d, _0x18b0dd.samplers[_0x3f768b]);
    }
    function _0x48b9f4(_0x24ed12, _0xf647f6) {
      _0x5cd50f.bindTexture(_0x24ed12, _0x18b0dd.textures[_0xf647f6]);
    }
    function _0x50a0e3(_0x53a3b9) {
      _0x5cd50f.bindVertexArray(_0x18b0dd.vaos[_0x53a3b9]);
      var _0x11353a = _0x5cd50f.getParameter(34965);
      _0x5cd50f.currentElementArrayBufferBinding = _0x11353a ? _0x11353a.name | 0 : 0;
    }
    function _0x5e94eb(_0x81df85) {
      _0x5cd50f.blendEquation(_0x81df85);
    }
    function _0x15a679(_0x2d41bf, _0x5f0e7b) {
      _0x5cd50f.blendEquationSeparate(_0x2d41bf, _0x5f0e7b);
    }
    function _0x408825(_0x487aa8, _0x4b5728, _0xa56db0, _0xf11c2d) {
      _0x5cd50f.blendFuncSeparate(_0x487aa8, _0x4b5728, _0xa56db0, _0xf11c2d);
    }
    function _0xef3554(_0xca3cab, _0x8b119a, _0x5f4923, _0x2421f0, _0x834a8e, _0x5711c1, _0x19423a, _0x280ff4, _0x1f2d86, _0x44ff6f) {
      _0x5cd50f.blitFramebuffer(_0xca3cab, _0x8b119a, _0x5f4923, _0x2421f0, _0x834a8e, _0x5711c1, _0x19423a, _0x280ff4, _0x1f2d86, _0x44ff6f);
    }
    function _0x2053bb(_0x2d242d, _0x409f09, _0x3f5400, _0x52bba7) {
      if (_0x18b0dd.currentContext.version >= 2) {
        if (_0x3f5400) {
          _0x5cd50f.bufferData(_0x2d242d, _0x59122e, _0x52bba7, _0x3f5400, _0x409f09);
        } else {
          _0x5cd50f.bufferData(_0x2d242d, _0x409f09, _0x52bba7);
        }
      } else {
        _0x5cd50f.bufferData(_0x2d242d, _0x3f5400 ? _0x59122e.subarray(_0x3f5400, _0x3f5400 + _0x409f09) : _0x409f09, _0x52bba7);
      }
    }
    function _0xc61163(_0x4737c6, _0x21aa21, _0x528222, _0xf9f694) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.bufferSubData(_0x4737c6, _0x21aa21, _0x59122e, _0xf9f694, _0x528222);
        return;
      }
      _0x5cd50f.bufferSubData(_0x4737c6, _0x21aa21, _0x59122e.subarray(_0xf9f694, _0xf9f694 + _0x528222));
    }
    function _0x35c248(_0x4a5d4e) {
      return _0x5cd50f.checkFramebufferStatus(_0x4a5d4e);
    }
    function _0x253924(_0x5cdf41) {
      _0x5cd50f.clear(_0x5cdf41);
    }
    function _0x4f8d20(_0x2359fb, _0x56a7ea, _0x5f1d68, _0x59c609) {
      _0x5cd50f.clearBufferfi(_0x2359fb, _0x56a7ea, _0x5f1d68, _0x59c609);
    }
    function _0x422406(_0x1836a0, _0x5eaf65, _0x2e473d) {
      _0x5cd50f.clearBufferfv(_0x1836a0, _0x5eaf65, _0x51ee3f, _0x2e473d >> 2);
    }
    function _0x21d06c(_0x45cf44, _0x5016b1, _0x14c6ad) {
      _0x5cd50f.clearBufferuiv(_0x45cf44, _0x5016b1, _0x50f6f2, _0x14c6ad >> 2);
    }
    function _0x2b2bc7(_0x31228e, _0x58a78c, _0x42feed, _0x431cf9) {
      _0x5cd50f.clearColor(_0x31228e, _0x58a78c, _0x42feed, _0x431cf9);
    }
    function _0x4e07d0(_0x5e062c) {
      _0x5cd50f.clearDepth(_0x5e062c);
    }
    function _0x3b9b0d(_0x198363) {
      _0x5cd50f.clearStencil(_0x198363);
    }
    function _0x29681b(_0x111965, _0x3e4fbd, _0x5d577c, _0x46e7c3) {
      return _0x5cd50f.clientWaitSync(_0x18b0dd.syncs[_0x111965], _0x3e4fbd, _0x236c9e(_0x5d577c, _0x46e7c3));
    }
    function _0x336620(_0x5eae8c, _0x32b5de, _0x3cfab1, _0x4c57db) {
      _0x5cd50f.colorMask(!!_0x5eae8c, !!_0x32b5de, !!_0x3cfab1, !!_0x4c57db);
    }
    function _0x472a4d(_0x559be9) {
      _0x5cd50f.compileShader(_0x18b0dd.shaders[_0x559be9]);
    }
    function _0x17b4f2(_0x4099c3, _0x3e2ab6, _0x29214f, _0x4ac4bf, _0x1d1c0f, _0x18f47b, _0x269394, _0x3ff197) {
      if (_0x18b0dd.currentContext.version >= 2) {
        if (_0x5cd50f.currentPixelUnpackBufferBinding) {
          _0x5cd50f.compressedTexImage2D(_0x4099c3, _0x3e2ab6, _0x29214f, _0x4ac4bf, _0x1d1c0f, _0x18f47b, _0x269394, _0x3ff197);
        } else {
          _0x5cd50f.compressedTexImage2D(_0x4099c3, _0x3e2ab6, _0x29214f, _0x4ac4bf, _0x1d1c0f, _0x18f47b, _0x59122e, _0x3ff197, _0x269394);
        }
        return;
      }
      _0x5cd50f.compressedTexImage2D(_0x4099c3, _0x3e2ab6, _0x29214f, _0x4ac4bf, _0x1d1c0f, _0x18f47b, _0x3ff197 ? _0x59122e.subarray(_0x3ff197, _0x3ff197 + _0x269394) : null);
    }
    function _0x2b144c(_0x86f3c7, _0x31fd7c, _0x4d3a4b, _0x21e298, _0x24c3fc, _0xb78e12, _0x21d5ca, _0x317a21, _0x54eeaf) {
      if (_0x5cd50f.currentPixelUnpackBufferBinding) {
        _0x5cd50f.compressedTexImage3D(_0x86f3c7, _0x31fd7c, _0x4d3a4b, _0x21e298, _0x24c3fc, _0xb78e12, _0x21d5ca, _0x317a21, _0x54eeaf);
      } else {
        _0x5cd50f.compressedTexImage3D(_0x86f3c7, _0x31fd7c, _0x4d3a4b, _0x21e298, _0x24c3fc, _0xb78e12, _0x21d5ca, _0x59122e, _0x54eeaf, _0x317a21);
      }
    }
    function _0x132fbe(_0x299ddd, _0x19d144, _0x5f5120, _0xa30e66, _0x5d7918, _0x19f937, _0x3f8460, _0x453c3c, _0x2ec2b5) {
      if (_0x18b0dd.currentContext.version >= 2) {
        if (_0x5cd50f.currentPixelUnpackBufferBinding) {
          _0x5cd50f.compressedTexSubImage2D(_0x299ddd, _0x19d144, _0x5f5120, _0xa30e66, _0x5d7918, _0x19f937, _0x3f8460, _0x453c3c, _0x2ec2b5);
        } else {
          _0x5cd50f.compressedTexSubImage2D(_0x299ddd, _0x19d144, _0x5f5120, _0xa30e66, _0x5d7918, _0x19f937, _0x3f8460, _0x59122e, _0x2ec2b5, _0x453c3c);
        }
        return;
      }
      _0x5cd50f.compressedTexSubImage2D(_0x299ddd, _0x19d144, _0x5f5120, _0xa30e66, _0x5d7918, _0x19f937, _0x3f8460, _0x2ec2b5 ? _0x59122e.subarray(_0x2ec2b5, _0x2ec2b5 + _0x453c3c) : null);
    }
    function _0x293b85(_0x79d454, _0x3f9457, _0x38c83d, _0xd1f843, _0x64e179, _0x3df797, _0x120e61, _0x5ae6ad, _0x47dc81, _0xe1dc7c, _0x3a1381) {
      if (_0x5cd50f.currentPixelUnpackBufferBinding) {
        _0x5cd50f.compressedTexSubImage3D(_0x79d454, _0x3f9457, _0x38c83d, _0xd1f843, _0x64e179, _0x3df797, _0x120e61, _0x5ae6ad, _0x47dc81, _0xe1dc7c, _0x3a1381);
      } else {
        _0x5cd50f.compressedTexSubImage3D(_0x79d454, _0x3f9457, _0x38c83d, _0xd1f843, _0x64e179, _0x3df797, _0x120e61, _0x5ae6ad, _0x47dc81, _0x59122e, _0x3a1381, _0xe1dc7c);
      }
    }
    function _0x13a8df(_0x43fd52, _0x19e3f2, _0x1de1a7, _0x179f9e, _0x89f881) {
      _0x5cd50f.copyBufferSubData(_0x43fd52, _0x19e3f2, _0x1de1a7, _0x179f9e, _0x89f881);
    }
    function _0x4c5c81(_0x344c1a, _0x47d67d, _0x3bb3c9, _0x34d2e1, _0x5fd5b0, _0x306203, _0x7c7631, _0x16a228) {
      _0x5cd50f.copyTexImage2D(_0x344c1a, _0x47d67d, _0x3bb3c9, _0x34d2e1, _0x5fd5b0, _0x306203, _0x7c7631, _0x16a228);
    }
    function _0x12fbd1(_0x1cbbc1, _0x254d66, _0x172e02, _0x36940d, _0x386877, _0x57ddca, _0x1088f6, _0xd7dd55) {
      _0x5cd50f.copyTexSubImage2D(_0x1cbbc1, _0x254d66, _0x172e02, _0x36940d, _0x386877, _0x57ddca, _0x1088f6, _0xd7dd55);
    }
    function _0x5c193e() {
      var _0x19d364 = _0x18b0dd.getNewId(_0x18b0dd.programs);
      var _0x150d52 = _0x5cd50f.createProgram();
      _0x150d52.name = _0x19d364;
      _0x150d52.maxUniformLength = _0x150d52.maxAttributeLength = _0x150d52.maxUniformBlockNameLength = 0;
      _0x150d52.uniformIdCounter = 1;
      _0x18b0dd.programs[_0x19d364] = _0x150d52;
      return _0x19d364;
    }
    function _0x395f3c(_0x8a9512) {
      var _0x1055ef = _0x18b0dd.getNewId(_0x18b0dd.shaders);
      _0x18b0dd.shaders[_0x1055ef] = _0x5cd50f.createShader(_0x8a9512);
      _0x18b0dd.shaders[_0x1055ef].shaderType = _0x8a9512 & 1 ? "vs" : "fs";
      return _0x1055ef;
    }
    function _0x3add7b(_0x5079a2) {
      _0x5cd50f.cullFace(_0x5079a2);
    }
    function _0x2fc989(_0x3d91c3, _0x814f1c) {
      for (var _0x955321 = 0; _0x955321 < _0x3d91c3; _0x955321++) {
        var _0x25deef = _0x576263[_0x814f1c + _0x955321 * 4 >> 2];
        var _0x6f61f5 = _0x18b0dd.buffers[_0x25deef];
        if (!_0x6f61f5) {
          continue;
        }
        _0x5cd50f.deleteBuffer(_0x6f61f5);
        _0x6f61f5.name = 0;
        _0x18b0dd.buffers[_0x25deef] = null;
        if (_0x25deef == _0x5cd50f.currentArrayBufferBinding) {
          _0x5cd50f.currentArrayBufferBinding = 0;
        }
        if (_0x25deef == _0x5cd50f.currentElementArrayBufferBinding) {
          _0x5cd50f.currentElementArrayBufferBinding = 0;
        }
        if (_0x25deef == _0x5cd50f.currentPixelPackBufferBinding) {
          _0x5cd50f.currentPixelPackBufferBinding = 0;
        }
        if (_0x25deef == _0x5cd50f.currentPixelUnpackBufferBinding) {
          _0x5cd50f.currentPixelUnpackBufferBinding = 0;
        }
      }
    }
    function _0x51f3f9(_0x483bff, _0x3b6b2c) {
      for (var _0x4ec7ad = 0; _0x4ec7ad < _0x483bff; ++_0x4ec7ad) {
        var _0x2b18d4 = _0x576263[_0x3b6b2c + _0x4ec7ad * 4 >> 2];
        var _0x49d0e8 = _0x18b0dd.framebuffers[_0x2b18d4];
        if (!_0x49d0e8) {
          continue;
        }
        _0x5cd50f.deleteFramebuffer(_0x49d0e8);
        _0x49d0e8.name = 0;
        _0x18b0dd.framebuffers[_0x2b18d4] = null;
      }
    }
    function _0x29a434(_0x3237d7) {
      if (!_0x3237d7) {
        return;
      }
      var _0x468a12 = _0x18b0dd.programs[_0x3237d7];
      if (!_0x468a12) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x5cd50f.deleteProgram(_0x468a12);
      _0x468a12.name = 0;
      _0x18b0dd.programs[_0x3237d7] = null;
    }
    function _0x2dd984(_0x4c050e, _0x2ebb5f) {
      for (var _0x1d16b7 = 0; _0x1d16b7 < _0x4c050e; _0x1d16b7++) {
        var _0x547842 = _0x576263[_0x2ebb5f + _0x1d16b7 * 4 >> 2];
        var _0x4632be = _0x18b0dd.queries[_0x547842];
        if (!_0x4632be) {
          continue;
        }
        _0x5cd50f.deleteQuery(_0x4632be);
        _0x18b0dd.queries[_0x547842] = null;
      }
    }
    function _0x3297ed(_0x871923, _0x51dafc) {
      for (var _0x386232 = 0; _0x386232 < _0x871923; _0x386232++) {
        var _0x539bce = _0x576263[_0x51dafc + _0x386232 * 4 >> 2];
        var _0x22bd49 = _0x18b0dd.renderbuffers[_0x539bce];
        if (!_0x22bd49) {
          continue;
        }
        _0x5cd50f.deleteRenderbuffer(_0x22bd49);
        _0x22bd49.name = 0;
        _0x18b0dd.renderbuffers[_0x539bce] = null;
      }
    }
    function _0x5e4d29(_0x20fd00, _0x54615c) {
      for (var _0x152f34 = 0; _0x152f34 < _0x20fd00; _0x152f34++) {
        var _0x56f151 = _0x576263[_0x54615c + _0x152f34 * 4 >> 2];
        var _0x348f08 = _0x18b0dd.samplers[_0x56f151];
        if (!_0x348f08) {
          continue;
        }
        _0x5cd50f.deleteSampler(_0x348f08);
        _0x348f08.name = 0;
        _0x18b0dd.samplers[_0x56f151] = null;
      }
    }
    function _0x5947c9(_0xd937ac) {
      if (!_0xd937ac) {
        return;
      }
      var _0xdf1d4a = _0x18b0dd.shaders[_0xd937ac];
      if (!_0xdf1d4a) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x5cd50f.deleteShader(_0xdf1d4a);
      _0x18b0dd.shaders[_0xd937ac] = null;
    }
    function _0x2c8fbd(_0x109566) {
      if (!_0x109566) {
        return;
      }
      var _0x59192e = _0x18b0dd.syncs[_0x109566];
      if (!_0x59192e) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x5cd50f.deleteSync(_0x59192e);
      _0x59192e.name = 0;
      _0x18b0dd.syncs[_0x109566] = null;
    }
    function _0x45612c(_0x1b1d6d, _0x576fc3) {
      for (var _0x326ccb = 0; _0x326ccb < _0x1b1d6d; _0x326ccb++) {
        var _0x2984bf = _0x576263[_0x576fc3 + _0x326ccb * 4 >> 2];
        var _0x310d30 = _0x18b0dd.textures[_0x2984bf];
        if (!_0x310d30) {
          continue;
        }
        _0x5cd50f.deleteTexture(_0x310d30);
        _0x310d30.name = 0;
        _0x18b0dd.textures[_0x2984bf] = null;
      }
    }
    function _0x3b8444(_0x23afa4, _0x6f7b08) {
      for (var _0x5b2bff = 0; _0x5b2bff < _0x23afa4; _0x5b2bff++) {
        var _0xa70b88 = _0x576263[_0x6f7b08 + _0x5b2bff * 4 >> 2];
        _0x5cd50f.deleteVertexArray(_0x18b0dd.vaos[_0xa70b88]);
        _0x18b0dd.vaos[_0xa70b88] = null;
      }
    }
    function _0xd29aaf(_0x1fbcda) {
      _0x5cd50f.depthFunc(_0x1fbcda);
    }
    function _0x46fe1e(_0x405490) {
      _0x5cd50f.depthMask(!!_0x405490);
    }
    function _0x4936b7(_0x3e9965, _0x109715) {
      _0x5cd50f.detachShader(_0x18b0dd.programs[_0x3e9965], _0x18b0dd.shaders[_0x109715]);
    }
    function _0x244792(_0x2d9e61) {
      _0x5cd50f.disable(_0x2d9e61);
    }
    function _0x3858e1(_0x4b6fa9) {
      var _0x1aa70d = _0x18b0dd.currentContext.clientBuffers[_0x4b6fa9];
      _0x1aa70d.enabled = false;
      _0x5cd50f.disableVertexAttribArray(_0x4b6fa9);
    }
    function _0x3a8f75(_0x202173, _0x55b128, _0x2c9875) {
      _0x18b0dd.preDrawHandleClientVertexAttribBindings(_0x55b128 + _0x2c9875);
      _0x5cd50f.drawArrays(_0x202173, _0x55b128, _0x2c9875);
      _0x18b0dd.postDrawHandleClientVertexAttribBindings();
    }
    function _0x559898(_0x501489, _0x1007c1, _0x1a98b1, _0x3d976f) {
      _0x5cd50f.drawArraysInstanced(_0x501489, _0x1007c1, _0x1a98b1, _0x3d976f);
    }
    var _0x337663 = [];
    function _0x55b123(_0x34a6c0, _0x31e2e7) {
      var _0x483fd1 = _0x337663[_0x34a6c0];
      for (var _0x119d48 = 0; _0x119d48 < _0x34a6c0; _0x119d48++) {
        _0x483fd1[_0x119d48] = _0x576263[_0x31e2e7 + _0x119d48 * 4 >> 2];
      }
      _0x5cd50f.drawBuffers(_0x483fd1);
    }
    function _0x19e536(_0x5aea84, _0x435476, _0x2dce9d, _0x24d6aa) {
      var _0x23c380;
      if (!_0x5cd50f.currentElementArrayBufferBinding) {
        var _0x270186 = _0x18b0dd.calcBufLength(1, _0x2dce9d, 0, _0x435476);
        _0x23c380 = _0x18b0dd.getTempIndexBuffer(_0x270186);
        _0x5cd50f.bindBuffer(34963, _0x23c380);
        _0x5cd50f.bufferSubData(34963, 0, _0x59122e.subarray(_0x24d6aa, _0x24d6aa + _0x270186));
        _0x24d6aa = 0;
      }
      _0x18b0dd.preDrawHandleClientVertexAttribBindings(_0x435476);
      _0x5cd50f.drawElements(_0x5aea84, _0x435476, _0x2dce9d, _0x24d6aa);
      _0x18b0dd.postDrawHandleClientVertexAttribBindings(_0x435476);
      if (!_0x5cd50f.currentElementArrayBufferBinding) {
        _0x5cd50f.bindBuffer(34963, null);
      }
    }
    function _0x353264(_0x93ecb7, _0x32bbe6, _0x1bfe38, _0x2f99c3, _0x3c2a12) {
      _0x5cd50f.drawElementsInstanced(_0x93ecb7, _0x32bbe6, _0x1bfe38, _0x2f99c3, _0x3c2a12);
    }
    function _0x27170f(_0x500306) {
      _0x5cd50f.enable(_0x500306);
    }
    function _0x1ff111(_0x5d80f2) {
      var _0x588b89 = _0x18b0dd.currentContext.clientBuffers[_0x5d80f2];
      _0x588b89.enabled = true;
      _0x5cd50f.enableVertexAttribArray(_0x5d80f2);
    }
    function _0x86eb3e(_0x1c98b0) {
      _0x5cd50f.endQuery(_0x1c98b0);
    }
    function _0x4f9aae(_0x209623, _0x1249fa) {
      var _0x1dffc2 = _0x5cd50f.fenceSync(_0x209623, _0x1249fa);
      if (_0x1dffc2) {
        var _0x2f2570 = _0x18b0dd.getNewId(_0x18b0dd.syncs);
        _0x1dffc2.name = _0x2f2570;
        _0x18b0dd.syncs[_0x2f2570] = _0x1dffc2;
        return _0x2f2570;
      } else {
        return 0;
      }
    }
    function _0x20adbe() {
      _0x5cd50f.finish();
    }
    function _0x346e79() {
      _0x5cd50f.flush();
    }
    function _0x5b65e0(_0x375f63) {
      switch (_0x375f63) {
        case 34962:
          _0x375f63 = 34964;
          break;
        case 34963:
          _0x375f63 = 34965;
          break;
        case 35051:
          _0x375f63 = 35053;
          break;
        case 35052:
          _0x375f63 = 35055;
          break;
        case 35982:
          _0x375f63 = 35983;
          break;
        case 36662:
          _0x375f63 = 36662;
          break;
        case 36663:
          _0x375f63 = 36663;
          break;
        case 35345:
          _0x375f63 = 35368;
          break;
      }
      var _0x5bc66e = _0x5cd50f.getParameter(_0x375f63);
      if (_0x5bc66e) {
        return _0x5bc66e.name | 0;
      } else {
        return 0;
      }
    }
    function _0x468701(_0x42065d) {
      switch (_0x42065d) {
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
    function _0x17218a(_0x3aa1bf, _0x364acd, _0x310757) {
      if (!_0x468701(_0x3aa1bf)) {
        _0x18b0dd.recordError(1280);
        _0x2e37f2("GL_INVALID_ENUM in glFlushMappedBufferRange");
        return;
      }
      var _0x19b8b4 = _0x18b0dd.mappedBuffers[_0x5b65e0(_0x3aa1bf)];
      if (!_0x19b8b4) {
        _0x18b0dd.recordError(1282);
        _0x2e37f2("buffer was never mapped in glFlushMappedBufferRange");
        return;
      }
      if (!(_0x19b8b4.access & 16)) {
        _0x18b0dd.recordError(1282);
        _0x2e37f2("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
        return;
      }
      if (_0x364acd < 0 || _0x310757 < 0 || _0x364acd + _0x310757 > _0x19b8b4.length) {
        _0x18b0dd.recordError(1281);
        _0x2e37f2("invalid range in glFlushMappedBufferRange");
        return;
      }
      _0x5cd50f.bufferSubData(_0x3aa1bf, _0x19b8b4.offset, _0x59122e.subarray(_0x19b8b4.mem + _0x364acd, _0x19b8b4.mem + _0x364acd + _0x310757));
    }
    function _0x34bf17(_0x1e75a4, _0x4d3252, _0x59618b, _0x7868a5) {
      _0x5cd50f.framebufferRenderbuffer(_0x1e75a4, _0x4d3252, _0x59618b, _0x18b0dd.renderbuffers[_0x7868a5]);
    }
    function _0x4b5aae(_0x44519a, _0x1f76ce, _0x30616d, _0x1b164e, _0x1fe4fd) {
      _0x5cd50f.framebufferTexture2D(_0x44519a, _0x1f76ce, _0x30616d, _0x18b0dd.textures[_0x1b164e], _0x1fe4fd);
    }
    function _0x3c0a32(_0x572a0e, _0x30b4b7, _0x2c2023, _0xd3c6d5, _0x135956) {
      _0x5cd50f.framebufferTextureLayer(_0x572a0e, _0x30b4b7, _0x18b0dd.textures[_0x2c2023], _0xd3c6d5, _0x135956);
    }
    function _0x2e67f9(_0x11bd72) {
      _0x5cd50f.frontFace(_0x11bd72);
    }
    function _0x439ba8(_0x28bb44, _0x9b3c25, _0xa0b99, _0x3327cc) {
      for (var _0x312676 = 0; _0x312676 < _0x28bb44; _0x312676++) {
        var _0x279ebb = _0x5cd50f[_0xa0b99]();
        var _0x4cfac1 = _0x279ebb && _0x18b0dd.getNewId(_0x3327cc);
        if (_0x279ebb) {
          _0x279ebb.name = _0x4cfac1;
          _0x3327cc[_0x4cfac1] = _0x279ebb;
        } else {
          _0x18b0dd.recordError(1282);
        }
        _0x576263[_0x9b3c25 + _0x312676 * 4 >> 2] = _0x4cfac1;
      }
    }
    function _0x3411c9(_0x2d78f5, _0xfb87e0) {
      _0x439ba8(_0x2d78f5, _0xfb87e0, "createBuffer", _0x18b0dd.buffers);
    }
    function _0x2c9c61(_0x42e333, _0x5d1fda) {
      _0x439ba8(_0x42e333, _0x5d1fda, "createFramebuffer", _0x18b0dd.framebuffers);
    }
    function _0x3d206c(_0x3c58, _0x2b8867) {
      _0x439ba8(_0x3c58, _0x2b8867, "createQuery", _0x18b0dd.queries);
    }
    function _0x596507(_0x3d4cd9, _0x722ab8) {
      _0x439ba8(_0x3d4cd9, _0x722ab8, "createRenderbuffer", _0x18b0dd.renderbuffers);
    }
    function _0x23959f(_0x2fb239, _0xba0f72) {
      _0x439ba8(_0x2fb239, _0xba0f72, "createSampler", _0x18b0dd.samplers);
    }
    function _0x5b5a72(_0x136fd1, _0x564c03) {
      _0x439ba8(_0x136fd1, _0x564c03, "createTexture", _0x18b0dd.textures);
    }
    function _0x1a5a5(_0x47e9d4, _0x230614) {
      _0x439ba8(_0x47e9d4, _0x230614, "createVertexArray", _0x18b0dd.vaos);
    }
    function _0x11a01f(_0x16dd1e) {
      _0x5cd50f.generateMipmap(_0x16dd1e);
    }
    function _0x2c1d3c(_0xdaa321, _0x5a581c, _0x18ffdc, _0x23c58c, _0xdb4a73, _0x590b82, _0x5e22a4, _0x18af93) {
      _0x5a581c = _0x18b0dd.programs[_0x5a581c];
      var _0x5cc905 = _0x5cd50f[_0xdaa321](_0x5a581c, _0x18ffdc);
      if (_0x5cc905) {
        var _0x4ffee0 = _0x18af93 && _0x4f8934(_0x5cc905.name, _0x18af93, _0x23c58c);
        if (_0xdb4a73) {
          _0x576263[_0xdb4a73 >> 2] = _0x4ffee0;
        }
        if (_0x590b82) {
          _0x576263[_0x590b82 >> 2] = _0x5cc905.size;
        }
        if (_0x5e22a4) {
          _0x576263[_0x5e22a4 >> 2] = _0x5cc905.type;
        }
      }
    }
    function _0x5c3e4d(_0x27fe7d, _0x159d57, _0x49cd04, _0x3896ad, _0x1a3bb1, _0x329c00, _0x2649a7) {
      _0x2c1d3c("getActiveAttrib", _0x27fe7d, _0x159d57, _0x49cd04, _0x3896ad, _0x1a3bb1, _0x329c00, _0x2649a7);
    }
    function _0x3e5cf1(_0x17527c, _0x4ff91b, _0x408555, _0x3afb76, _0x19a73e, _0x1a0baa, _0x365998) {
      _0x2c1d3c("getActiveUniform", _0x17527c, _0x4ff91b, _0x408555, _0x3afb76, _0x19a73e, _0x1a0baa, _0x365998);
    }
    function _0x480fea(_0x4c792e, _0x1a8cc7, _0x433254, _0x13f4a5, _0x364173) {
      _0x4c792e = _0x18b0dd.programs[_0x4c792e];
      var _0x170fed = _0x5cd50f.getActiveUniformBlockName(_0x4c792e, _0x1a8cc7);
      if (!_0x170fed) {
        return;
      }
      if (_0x364173 && _0x433254 > 0) {
        var _0x4e0c4d = _0x4f8934(_0x170fed, _0x364173, _0x433254);
        if (_0x13f4a5) {
          _0x576263[_0x13f4a5 >> 2] = _0x4e0c4d;
        }
      } else if (_0x13f4a5) {
        _0x576263[_0x13f4a5 >> 2] = 0;
      }
    }
    function _0x13f63e(_0x302943, _0xee8d9c, _0xb00b29, _0x298cd3) {
      if (!_0x298cd3) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x302943 = _0x18b0dd.programs[_0x302943];
      if (_0xb00b29 == 35393) {
        var _0x4f2941 = _0x5cd50f.getActiveUniformBlockName(_0x302943, _0xee8d9c);
        _0x576263[_0x298cd3 >> 2] = _0x4f2941.length + 1;
        return;
      }
      var _0x150a31 = _0x5cd50f.getActiveUniformBlockParameter(_0x302943, _0xee8d9c, _0xb00b29);
      if (_0x150a31 === null) {
        return;
      }
      if (_0xb00b29 == 35395) {
        for (var _0x2153ff = 0; _0x2153ff < _0x150a31.length; _0x2153ff++) {
          _0x576263[_0x298cd3 + _0x2153ff * 4 >> 2] = _0x150a31[_0x2153ff];
        }
      } else {
        _0x576263[_0x298cd3 >> 2] = _0x150a31;
      }
    }
    function _0x3d92da(_0x236a20, _0x31d50d, _0xb69e0b, _0x3e7a96, _0x864c8) {
      if (!_0x864c8) {
        _0x18b0dd.recordError(1281);
        return;
      }
      if (_0x31d50d > 0 && _0xb69e0b == 0) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x236a20 = _0x18b0dd.programs[_0x236a20];
      var _0x150204 = [];
      for (var _0x3e476e = 0; _0x3e476e < _0x31d50d; _0x3e476e++) {
        _0x150204.push(_0x576263[_0xb69e0b + _0x3e476e * 4 >> 2]);
      }
      var _0x5e783a = _0x5cd50f.getActiveUniforms(_0x236a20, _0x150204, _0x3e7a96);
      if (!_0x5e783a) {
        return;
      }
      var _0x52baba = _0x5e783a.length;
      for (var _0x3e476e = 0; _0x3e476e < _0x52baba; _0x3e476e++) {
        _0x576263[_0x864c8 + _0x3e476e * 4 >> 2] = _0x5e783a[_0x3e476e];
      }
    }
    function _0x3bf5d5(_0xde7165, _0xa88025) {
      return _0x5cd50f.getAttribLocation(_0x18b0dd.programs[_0xde7165], _0x3d5aa0(_0xa88025));
    }
    function _0x179b3c(_0xed0c6f, _0x55e5bf, _0x3d1c1b, _0x4ea553) {
      if (!_0x4ea553) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x5cd50f.getBufferSubData(_0xed0c6f, _0x55e5bf, _0x59122e, _0x4ea553, _0x3d1c1b);
    }
    function _0x6c1a5b() {
      var _0x11a955 = _0x5cd50f.getError() || _0x18b0dd.lastError;
      _0x18b0dd.lastError = 0;
      return _0x11a955;
    }
    function _0x38e955(_0x318ea2, _0x12220a, _0x184f75, _0x26ed84) {
      var _0x40743e = _0x5cd50f.getFramebufferAttachmentParameter(_0x318ea2, _0x12220a, _0x184f75);
      if (_0x40743e instanceof WebGLRenderbuffer || _0x40743e instanceof WebGLTexture) {
        _0x40743e = _0x40743e.name | 0;
      }
      _0x576263[_0x26ed84 >> 2] = _0x40743e;
    }
    function _0x2543c4(_0x34ee6f, _0x278a15) {
      _0x50f6f2[_0x34ee6f >> 2] = _0x278a15;
      _0x50f6f2[_0x34ee6f + 4 >> 2] = (_0x278a15 - _0x50f6f2[_0x34ee6f >> 2]) / 4294967296;
    }
    function _0x386cb2(_0x275a4e, _0xfe2c6a, _0x14da52, _0x34cc6a) {
      if (!_0x14da52) {
        _0x18b0dd.recordError(1281);
        return;
      }
      var _0x4749b5 = _0x5cd50f.getIndexedParameter(_0x275a4e, _0xfe2c6a);
      var _0x546542;
      switch (typeof _0x4749b5) {
        case "boolean":
          _0x546542 = _0x4749b5 ? 1 : 0;
          break;
        case "number":
          _0x546542 = _0x4749b5;
          break;
        case "object":
          if (_0x4749b5 === null) {
            switch (_0x275a4e) {
              case 35983:
              case 35368:
                _0x546542 = 0;
                break;
              default:
                {
                  _0x18b0dd.recordError(1280);
                  return;
                }
            }
          } else if (_0x4749b5 instanceof WebGLBuffer) {
            _0x546542 = _0x4749b5.name | 0;
          } else {
            _0x18b0dd.recordError(1280);
            return;
          }
          break;
        default:
          _0x18b0dd.recordError(1280);
          return;
      }
      switch (_0x34cc6a) {
        case 1:
          _0x2543c4(_0x14da52, _0x546542);
          break;
        case 0:
          _0x576263[_0x14da52 >> 2] = _0x546542;
          break;
        case 2:
          _0x51ee3f[_0x14da52 >> 2] = _0x546542;
          break;
        case 4:
          _0xe1b6fc[_0x14da52 >> 0] = _0x546542 ? 1 : 0;
          break;
        default:
          throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x34cc6a;
      }
    }
    function _0x2868ff(_0x238e6d, _0x2169ca, _0x269a6c) {
      _0x386cb2(_0x238e6d, _0x2169ca, _0x269a6c, 0);
    }
    function _0x452426(_0x2ecabf, _0x152e90, _0x1795a3) {
      if (!_0x152e90) {
        _0x18b0dd.recordError(1281);
        return;
      }
      var _0x467f3e = undefined;
      switch (_0x2ecabf) {
        case 36346:
          _0x467f3e = 1;
          break;
        case 36344:
          if (_0x1795a3 != 0 && _0x1795a3 != 1) {
            _0x18b0dd.recordError(1280);
          }
          return;
        case 34814:
        case 36345:
          _0x467f3e = 0;
          break;
        case 34466:
          var _0x21f986 = _0x5cd50f.getParameter(34467);
          _0x467f3e = _0x21f986 ? _0x21f986.length : 0;
          break;
        case 33390:
          _0x467f3e = 1048576;
          break;
        case 33309:
          if (_0x18b0dd.currentContext.version < 2) {
            _0x18b0dd.recordError(1282);
            return;
          }
          var _0x358db0 = _0x5cd50f.getSupportedExtensions() || [];
          _0x467f3e = _0x358db0.length * 2;
          break;
        case 33307:
        case 33308:
          if (_0x18b0dd.currentContext.version < 2) {
            _0x18b0dd.recordError(1280);
            return;
          }
          _0x467f3e = _0x2ecabf == 33307 ? 3 : 0;
          break;
      }
      if (_0x467f3e === undefined) {
        var _0x56c365 = _0x5cd50f.getParameter(_0x2ecabf);
        switch (typeof _0x56c365) {
          case "number":
            _0x467f3e = _0x56c365;
            break;
          case "boolean":
            _0x467f3e = _0x56c365 ? 1 : 0;
            break;
          case "string":
            _0x18b0dd.recordError(1280);
            return;
          case "object":
            if (_0x56c365 === null) {
              switch (_0x2ecabf) {
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
                    _0x467f3e = 0;
                    break;
                  }
                default:
                  {
                    _0x18b0dd.recordError(1280);
                    return;
                  }
              }
            } else if (_0x56c365 instanceof Float32Array || _0x56c365 instanceof Uint32Array || _0x56c365 instanceof Int32Array || _0x56c365 instanceof Array) {
              for (var _0xfe51d2 = 0; _0xfe51d2 < _0x56c365.length; ++_0xfe51d2) {
                switch (_0x1795a3) {
                  case 0:
                    _0x576263[_0x152e90 + _0xfe51d2 * 4 >> 2] = _0x56c365[_0xfe51d2];
                    break;
                  case 2:
                    _0x51ee3f[_0x152e90 + _0xfe51d2 * 4 >> 2] = _0x56c365[_0xfe51d2];
                    break;
                  case 4:
                    _0xe1b6fc[_0x152e90 + _0xfe51d2 >> 0] = _0x56c365[_0xfe51d2] ? 1 : 0;
                    break;
                }
              }
              return;
            } else {
              try {
                _0x467f3e = _0x56c365.name | 0;
              } catch (_0x1385a5) {
                _0x18b0dd.recordError(1280);
                _0x2e37f2("GL_INVALID_ENUM in glGet" + _0x1795a3 + "v: Unknown object returned from WebGL getParameter(" + _0x2ecabf + ")! (error: " + _0x1385a5 + ")");
                return;
              }
            }
            break;
          default:
            _0x18b0dd.recordError(1280);
            _0x2e37f2("GL_INVALID_ENUM in glGet" + _0x1795a3 + "v: Native code calling glGet" + _0x1795a3 + "v(" + _0x2ecabf + ") and it returns " + _0x56c365 + " of type " + typeof _0x56c365 + "!");
            return;
        }
      }
      switch (_0x1795a3) {
        case 1:
          _0x2543c4(_0x152e90, _0x467f3e);
          break;
        case 0:
          _0x576263[_0x152e90 >> 2] = _0x467f3e;
          break;
        case 2:
          _0x51ee3f[_0x152e90 >> 2] = _0x467f3e;
          break;
        case 4:
          _0xe1b6fc[_0x152e90 >> 0] = _0x467f3e ? 1 : 0;
          break;
      }
    }
    function _0x216130(_0x601b82, _0x4d527a) {
      _0x452426(_0x601b82, _0x4d527a, 0);
    }
    function _0x5c437a(_0x45db42, _0x31eaa5, _0x5d5dde, _0x2fc796, _0x2c6e2f) {
      if (_0x2fc796 < 0) {
        _0x18b0dd.recordError(1281);
        return;
      }
      if (!_0x2c6e2f) {
        _0x18b0dd.recordError(1281);
        return;
      }
      var _0x58b804 = _0x5cd50f.getInternalformatParameter(_0x45db42, _0x31eaa5, _0x5d5dde);
      if (_0x58b804 === null) {
        return;
      }
      for (var _0x471eba = 0; _0x471eba < _0x58b804.length && _0x471eba < _0x2fc796; ++_0x471eba) {
        _0x576263[_0x2c6e2f + _0x471eba * 4 >> 2] = _0x58b804[_0x471eba];
      }
    }
    function _0x2e5ea0(_0x28d27c, _0x71b794, _0x3452a5, _0x2423d4, _0x4d9712) {
      _0x18b0dd.recordError(1282);
    }
    function _0x548769(_0x37abd5, _0x135417, _0x427bca, _0x3d9505) {
      var _0x1c516d = _0x5cd50f.getProgramInfoLog(_0x18b0dd.programs[_0x37abd5]);
      if (_0x1c516d === null) {
        _0x1c516d = "(unknown error)";
      }
      var _0x39c161 = _0x135417 > 0 && _0x3d9505 ? _0x4f8934(_0x1c516d, _0x3d9505, _0x135417) : 0;
      if (_0x427bca) {
        _0x576263[_0x427bca >> 2] = _0x39c161;
      }
    }
    function _0x433086(_0x4d1a23, _0x535896, _0x54a7de) {
      if (!_0x54a7de) {
        _0x18b0dd.recordError(1281);
        return;
      }
      if (_0x4d1a23 >= _0x18b0dd.counter) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x4d1a23 = _0x18b0dd.programs[_0x4d1a23];
      if (_0x535896 == 35716) {
        var _0x288a75 = _0x5cd50f.getProgramInfoLog(_0x4d1a23);
        if (_0x288a75 === null) {
          _0x288a75 = "(unknown error)";
        }
        _0x576263[_0x54a7de >> 2] = _0x288a75.length + 1;
      } else if (_0x535896 == 35719) {
        if (!_0x4d1a23.maxUniformLength) {
          for (var _0x24007d = 0; _0x24007d < _0x5cd50f.getProgramParameter(_0x4d1a23, 35718); ++_0x24007d) {
            _0x4d1a23.maxUniformLength = Math.max(_0x4d1a23.maxUniformLength, _0x5cd50f.getActiveUniform(_0x4d1a23, _0x24007d).name.length + 1);
          }
        }
        _0x576263[_0x54a7de >> 2] = _0x4d1a23.maxUniformLength;
      } else if (_0x535896 == 35722) {
        if (!_0x4d1a23.maxAttributeLength) {
          for (var _0x24007d = 0; _0x24007d < _0x5cd50f.getProgramParameter(_0x4d1a23, 35721); ++_0x24007d) {
            _0x4d1a23.maxAttributeLength = Math.max(_0x4d1a23.maxAttributeLength, _0x5cd50f.getActiveAttrib(_0x4d1a23, _0x24007d).name.length + 1);
          }
        }
        _0x576263[_0x54a7de >> 2] = _0x4d1a23.maxAttributeLength;
      } else if (_0x535896 == 35381) {
        if (!_0x4d1a23.maxUniformBlockNameLength) {
          for (var _0x24007d = 0; _0x24007d < _0x5cd50f.getProgramParameter(_0x4d1a23, 35382); ++_0x24007d) {
            _0x4d1a23.maxUniformBlockNameLength = Math.max(_0x4d1a23.maxUniformBlockNameLength, _0x5cd50f.getActiveUniformBlockName(_0x4d1a23, _0x24007d).length + 1);
          }
        }
        _0x576263[_0x54a7de >> 2] = _0x4d1a23.maxUniformBlockNameLength;
      } else {
        _0x576263[_0x54a7de >> 2] = _0x5cd50f.getProgramParameter(_0x4d1a23, _0x535896);
      }
    }
    function _0x542a1b(_0x60ed0e, _0x45b514, _0x302306) {
      if (!_0x302306) {
        _0x18b0dd.recordError(1281);
        return;
      }
      var _0x2030f1 = _0x18b0dd.queries[_0x60ed0e];
      var _0x10180a = _0x5cd50f.getQueryParameter(_0x2030f1, _0x45b514);
      var _0xfc19f8;
      if (typeof _0x10180a == "boolean") {
        _0xfc19f8 = _0x10180a ? 1 : 0;
      } else {
        _0xfc19f8 = _0x10180a;
      }
      _0x576263[_0x302306 >> 2] = _0xfc19f8;
    }
    function _0x4fabc0(_0x26e73e, _0x112422, _0x39ef6b) {
      if (!_0x39ef6b) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x576263[_0x39ef6b >> 2] = _0x5cd50f.getQuery(_0x26e73e, _0x112422);
    }
    function _0x16c70b(_0x22657f, _0xb2c3bf, _0x23174e) {
      if (!_0x23174e) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x576263[_0x23174e >> 2] = _0x5cd50f.getRenderbufferParameter(_0x22657f, _0xb2c3bf);
    }
    function _0x45ccbe(_0x3062cc, _0x51ed5a, _0x157647, _0x4d0649) {
      var _0x4067fe = _0x5cd50f.getShaderInfoLog(_0x18b0dd.shaders[_0x3062cc]);
      if (_0x4067fe === null) {
        _0x4067fe = "(unknown error)";
      }
      var _0x11f31e = _0x51ed5a > 0 && _0x4d0649 ? _0x4f8934(_0x4067fe, _0x4d0649, _0x51ed5a) : 0;
      if (_0x157647) {
        _0x576263[_0x157647 >> 2] = _0x11f31e;
      }
    }
    function _0xfcc68(_0x2d0cfa, _0x3ae839, _0x332f35, _0x4e8c37) {
      var _0x512894 = _0x5cd50f.getShaderPrecisionFormat(_0x2d0cfa, _0x3ae839);
      _0x576263[_0x332f35 >> 2] = _0x512894.rangeMin;
      _0x576263[_0x332f35 + 4 >> 2] = _0x512894.rangeMax;
      _0x576263[_0x4e8c37 >> 2] = _0x512894.precision;
    }
    function _0x1e0c9d(_0x1eee02, _0x2083a2, _0x1a4d6b, _0x5051e3) {
      var _0x2a3e4e = _0x5cd50f.getShaderSource(_0x18b0dd.shaders[_0x1eee02]);
      if (!_0x2a3e4e) {
        return;
      }
      var _0x2aa17c = _0x2083a2 > 0 && _0x5051e3 ? _0x4f8934(_0x2a3e4e, _0x5051e3, _0x2083a2) : 0;
      if (_0x1a4d6b) {
        _0x576263[_0x1a4d6b >> 2] = _0x2aa17c;
      }
    }
    function _0x177fbc(_0x54b243, _0xbd17, _0x2e6b82) {
      if (!_0x2e6b82) {
        _0x18b0dd.recordError(1281);
        return;
      }
      if (_0xbd17 == 35716) {
        var _0x4e1e86 = _0x5cd50f.getShaderInfoLog(_0x18b0dd.shaders[_0x54b243]);
        if (_0x4e1e86 === null) {
          _0x4e1e86 = "(unknown error)";
        }
        var _0xce89f5 = _0x4e1e86 ? _0x4e1e86.length + 1 : 0;
        _0x576263[_0x2e6b82 >> 2] = _0xce89f5;
      } else if (_0xbd17 == 35720) {
        var _0x1f90e6 = _0x5cd50f.getShaderSource(_0x18b0dd.shaders[_0x54b243]);
        var _0x4ab2f7 = _0x1f90e6 ? _0x1f90e6.length + 1 : 0;
        _0x576263[_0x2e6b82 >> 2] = _0x4ab2f7;
      } else {
        _0x576263[_0x2e6b82 >> 2] = _0x5cd50f.getShaderParameter(_0x18b0dd.shaders[_0x54b243], _0xbd17);
      }
    }
    function _0x3f195a(_0x3e2466) {
      var _0x265926 = _0x18b0dd.stringCache[_0x3e2466];
      if (!_0x265926) {
        switch (_0x3e2466) {
          case 7939:
            var _0x4802db = _0x5cd50f.getSupportedExtensions() || [];
            _0x4802db = _0x4802db.concat(_0x4802db.map(function (_0x569850) {
              return "GL_" + _0x569850;
            }));
            _0x265926 = _0xdb8b5a(_0x4802db.join(" "));
            break;
          case 7936:
          case 7937:
          case 37445:
          case 37446:
            var _0x3bd690 = _0x5cd50f.getParameter(_0x3e2466);
            if (!_0x3bd690) {
              _0x18b0dd.recordError(1280);
            }
            _0x265926 = _0x3bd690 && _0xdb8b5a(_0x3bd690);
            break;
          case 7938:
            var _0x60dd5b = _0x5cd50f.getParameter(7938);
            if (_0x18b0dd.currentContext.version >= 2) {
              _0x60dd5b = "OpenGL ES 3.0 (" + _0x60dd5b + ")";
            } else {
              _0x60dd5b = "OpenGL ES 2.0 (" + _0x60dd5b + ")";
            }
            _0x265926 = _0xdb8b5a(_0x60dd5b);
            break;
          case 35724:
            var _0x98bb2d = _0x5cd50f.getParameter(35724);
            var _0x54bd2d = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var _0x5b9dcc = _0x98bb2d.match(_0x54bd2d);
            if (_0x5b9dcc !== null) {
              if (_0x5b9dcc[1].length == 3) {
                _0x5b9dcc[1] = _0x5b9dcc[1] + "0";
              }
              _0x98bb2d = "OpenGL ES GLSL ES " + _0x5b9dcc[1] + " (" + _0x98bb2d + ")";
            }
            _0x265926 = _0xdb8b5a(_0x98bb2d);
            break;
          default:
            _0x18b0dd.recordError(1280);
        }
        _0x18b0dd.stringCache[_0x3e2466] = _0x265926;
      }
      return _0x265926;
    }
    function _0x1cc2c2(_0x7a40a0, _0x4de27f) {
      if (_0x18b0dd.currentContext.version < 2) {
        _0x18b0dd.recordError(1282);
        return 0;
      }
      var _0x519e5d = _0x18b0dd.stringiCache[_0x7a40a0];
      if (_0x519e5d) {
        if (_0x4de27f < 0 || _0x4de27f >= _0x519e5d.length) {
          _0x18b0dd.recordError(1281);
          return 0;
        }
        return _0x519e5d[_0x4de27f];
      }
      switch (_0x7a40a0) {
        case 7939:
          var _0x2248d8 = _0x5cd50f.getSupportedExtensions() || [];
          _0x2248d8 = _0x2248d8.concat(_0x2248d8.map(function (_0x2263fa) {
            return "GL_" + _0x2263fa;
          }));
          _0x2248d8 = _0x2248d8.map(function (_0x322f20) {
            return _0xdb8b5a(_0x322f20);
          });
          _0x519e5d = _0x18b0dd.stringiCache[_0x7a40a0] = _0x2248d8;
          if (_0x4de27f < 0 || _0x4de27f >= _0x519e5d.length) {
            _0x18b0dd.recordError(1281);
            return 0;
          }
          return _0x519e5d[_0x4de27f];
        default:
          _0x18b0dd.recordError(1280);
          return 0;
      }
    }
    function _0x53ab34(_0xd8dd95, _0x3a8e29, _0x3917ba) {
      if (!_0x3917ba) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x576263[_0x3917ba >> 2] = _0x5cd50f.getTexParameter(_0xd8dd95, _0x3a8e29);
    }
    function _0x544f30(_0x32039f, _0x2c91ac) {
      return _0x5cd50f.getUniformBlockIndex(_0x18b0dd.programs[_0x32039f], _0x3d5aa0(_0x2c91ac));
    }
    function _0x248711(_0x107812, _0x568b3a, _0x1c9a4b, _0x38fe01) {
      if (!_0x38fe01) {
        _0x18b0dd.recordError(1281);
        return;
      }
      if (_0x568b3a > 0 && (_0x1c9a4b == 0 || _0x38fe01 == 0)) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x107812 = _0x18b0dd.programs[_0x107812];
      var _0x10e082 = [];
      for (var _0x1e914c = 0; _0x1e914c < _0x568b3a; _0x1e914c++) {
        _0x10e082.push(_0x3d5aa0(_0x576263[_0x1c9a4b + _0x1e914c * 4 >> 2]));
      }
      var _0x1b659b = _0x5cd50f.getUniformIndices(_0x107812, _0x10e082);
      if (!_0x1b659b) {
        return;
      }
      var _0x5e0a67 = _0x1b659b.length;
      for (var _0x1e914c = 0; _0x1e914c < _0x5e0a67; _0x1e914c++) {
        _0x576263[_0x38fe01 + _0x1e914c * 4 >> 2] = _0x1b659b[_0x1e914c];
      }
    }
    function _0xd76b79(_0x4cebec) {
      return _0x4cebec.slice(-1) == "]" && _0x4cebec.lastIndexOf("[");
    }
    function _0x53dd34(_0x42ba56) {
      var _0x3b4fec = _0x42ba56.uniformLocsById;
      var _0xab2221 = _0x42ba56.uniformSizeAndIdsByName;
      var _0x113e06;
      var _0xcd8ab0;
      if (!_0x3b4fec) {
        _0x42ba56.uniformLocsById = _0x3b4fec = {};
        _0x42ba56.uniformArrayNamesById = {};
        for (_0x113e06 = 0; _0x113e06 < _0x5cd50f.getProgramParameter(_0x42ba56, 35718); ++_0x113e06) {
          var _0x2e9aaa = _0x5cd50f.getActiveUniform(_0x42ba56, _0x113e06);
          var _0x1ed22c = _0x2e9aaa.name;
          var _0x462686 = _0x2e9aaa.size;
          var _0x10a536 = _0xd76b79(_0x1ed22c);
          var _0x29dae6 = _0x10a536 > 0 ? _0x1ed22c.slice(0, _0x10a536) : _0x1ed22c;
          var _0x409a3c = _0xab2221[_0x29dae6] ? _0xab2221[_0x29dae6][1] : _0x42ba56.uniformIdCounter;
          _0x42ba56.uniformIdCounter = Math.max(_0x409a3c + _0x462686, _0x42ba56.uniformIdCounter);
          _0xab2221[_0x29dae6] = [_0x462686, _0x409a3c];
          for (_0xcd8ab0 = 0; _0xcd8ab0 < _0x462686; ++_0xcd8ab0) {
            _0x3b4fec[_0x409a3c] = _0xcd8ab0;
            _0x42ba56.uniformArrayNamesById[_0x409a3c++] = _0x29dae6;
          }
        }
      }
    }
    function _0x275199(_0xa72cf0, _0x409866) {
      _0x409866 = _0x3d5aa0(_0x409866);
      if (_0xa72cf0 = _0x18b0dd.programs[_0xa72cf0]) {
        _0x53dd34(_0xa72cf0);
        var _0x544e1a = _0xa72cf0.uniformLocsById;
        var _0x414198 = 0;
        var _0x249d80 = _0x409866;
        var _0x5456de = _0xd76b79(_0x409866);
        if (_0x5456de > 0) {
          _0x414198 = _0x31233d(_0x409866.slice(_0x5456de + 1)) >>> 0;
          _0x249d80 = _0x409866.slice(0, _0x5456de);
        }
        var _0x2b8a9d = _0xa72cf0.uniformSizeAndIdsByName[_0x249d80];
        if (_0x2b8a9d && _0x414198 < _0x2b8a9d[0]) {
          _0x414198 += _0x2b8a9d[1];
          if (_0x544e1a[_0x414198] = _0x544e1a[_0x414198] || _0x5cd50f.getUniformLocation(_0xa72cf0, _0x409866)) {
            return _0x414198;
          }
        }
      } else {
        _0x18b0dd.recordError(1281);
      }
      return -1;
    }
    function _0x35c2fb(_0x3e2740) {
      var _0x4a3de0 = _0x5cd50f.currentProgram;
      if (_0x4a3de0) {
        var _0x49ad8c = _0x4a3de0.uniformLocsById[_0x3e2740];
        if (typeof _0x49ad8c == "number") {
          _0x4a3de0.uniformLocsById[_0x3e2740] = _0x49ad8c = _0x5cd50f.getUniformLocation(_0x4a3de0, _0x4a3de0.uniformArrayNamesById[_0x3e2740] + (_0x49ad8c > 0 ? "[" + _0x49ad8c + "]" : ""));
        }
        return _0x49ad8c;
      } else {
        _0x18b0dd.recordError(1282);
      }
    }
    function _0x4cd63e(_0x35dc95, _0x3155d5, _0xa27028, _0x33c586) {
      if (!_0xa27028) {
        _0x18b0dd.recordError(1281);
        return;
      }
      _0x35dc95 = _0x18b0dd.programs[_0x35dc95];
      _0x53dd34(_0x35dc95);
      var _0x322c0e = _0x5cd50f.getUniform(_0x35dc95, _0x35c2fb(_0x3155d5));
      if (typeof _0x322c0e == "number" || typeof _0x322c0e == "boolean") {
        switch (_0x33c586) {
          case 0:
            _0x576263[_0xa27028 >> 2] = _0x322c0e;
            break;
          case 2:
            _0x51ee3f[_0xa27028 >> 2] = _0x322c0e;
            break;
        }
      } else {
        for (var _0xa7e777 = 0; _0xa7e777 < _0x322c0e.length; _0xa7e777++) {
          switch (_0x33c586) {
            case 0:
              _0x576263[_0xa27028 + _0xa7e777 * 4 >> 2] = _0x322c0e[_0xa7e777];
              break;
            case 2:
              _0x51ee3f[_0xa27028 + _0xa7e777 * 4 >> 2] = _0x322c0e[_0xa7e777];
              break;
          }
        }
      }
    }
    function _0x4dd694(_0x56cbb5, _0x2f6353, _0x5cbee7) {
      _0x4cd63e(_0x56cbb5, _0x2f6353, _0x5cbee7, 0);
    }
    function _0x195507(_0x1c5060, _0x2b7ff4, _0x4a713c, _0x1d7494) {
      if (!_0x4a713c) {
        _0x18b0dd.recordError(1281);
        return;
      }
      if (_0x18b0dd.currentContext.clientBuffers[_0x1c5060].enabled) {
        _0x2e37f2("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
      }
      var _0x1d41b8 = _0x5cd50f.getVertexAttrib(_0x1c5060, _0x2b7ff4);
      if (_0x2b7ff4 == 34975) {
        _0x576263[_0x4a713c >> 2] = _0x1d41b8 && _0x1d41b8.name;
      } else if (typeof _0x1d41b8 == "number" || typeof _0x1d41b8 == "boolean") {
        switch (_0x1d7494) {
          case 0:
            _0x576263[_0x4a713c >> 2] = _0x1d41b8;
            break;
          case 2:
            _0x51ee3f[_0x4a713c >> 2] = _0x1d41b8;
            break;
          case 5:
            _0x576263[_0x4a713c >> 2] = Math.fround(_0x1d41b8);
            break;
        }
      } else {
        for (var _0x52dc18 = 0; _0x52dc18 < _0x1d41b8.length; _0x52dc18++) {
          switch (_0x1d7494) {
            case 0:
              _0x576263[_0x4a713c + _0x52dc18 * 4 >> 2] = _0x1d41b8[_0x52dc18];
              break;
            case 2:
              _0x51ee3f[_0x4a713c + _0x52dc18 * 4 >> 2] = _0x1d41b8[_0x52dc18];
              break;
            case 5:
              _0x576263[_0x4a713c + _0x52dc18 * 4 >> 2] = Math.fround(_0x1d41b8[_0x52dc18]);
              break;
          }
        }
      }
    }
    function _0x8008a7(_0x155d7b, _0x3555c7, _0x90f6e9) {
      _0x195507(_0x155d7b, _0x3555c7, _0x90f6e9, 5);
    }
    function _0x32e176(_0x3fef45, _0x2958fc, _0x23bd2c) {
      var _0x350316 = _0x337663[_0x2958fc];
      for (var _0x5a4970 = 0; _0x5a4970 < _0x2958fc; _0x5a4970++) {
        _0x350316[_0x5a4970] = _0x576263[_0x23bd2c + _0x5a4970 * 4 >> 2];
      }
      _0x5cd50f.invalidateFramebuffer(_0x3fef45, _0x350316);
    }
    function _0x1ced5e(_0xdef538) {
      return _0x5cd50f.isEnabled(_0xdef538);
    }
    function _0x5e367a(_0x219492) {
      var _0x4e6795 = _0x18b0dd.vaos[_0x219492];
      if (!_0x4e6795) {
        return 0;
      }
      return _0x5cd50f.isVertexArray(_0x4e6795);
    }
    function _0x58fbca(_0x4e0b36) {
      _0x4e0b36 = _0x18b0dd.programs[_0x4e0b36];
      _0x5cd50f.linkProgram(_0x4e0b36);
      _0x4e0b36.uniformLocsById = 0;
      _0x4e0b36.uniformSizeAndIdsByName = {};
      [_0x4e0b36.vs, _0x4e0b36.fs].forEach(function (_0x444b8b) {
        Object.keys(_0x444b8b.explicitUniformLocations).forEach(function (_0x233de5) {
          var _0x381d7a = _0x444b8b.explicitUniformLocations[_0x233de5];
          _0x4e0b36.uniformSizeAndIdsByName[_0x233de5] = [1, _0x381d7a];
          _0x4e0b36.uniformIdCounter = Math.max(_0x4e0b36.uniformIdCounter, _0x381d7a + 1);
        });
      });
      function _0x4d5f0a(_0x3d4ec9, _0x33300d) {
        Object.keys(_0x33300d).forEach(function (_0x14a5dc) {
          _0x3d4ec9[_0x14a5dc] = _0x33300d[_0x14a5dc];
        });
      }
      _0x4e0b36.explicitUniformBindings = {};
      _0x4e0b36.explicitSamplerBindings = {};
      [_0x4e0b36.vs, _0x4e0b36.fs].forEach(function (_0xa1efa6) {
        _0x4d5f0a(_0x4e0b36.explicitUniformBindings, _0xa1efa6.explicitUniformBindings);
        _0x4d5f0a(_0x4e0b36.explicitSamplerBindings, _0xa1efa6.explicitSamplerBindings);
      });
      _0x4e0b36.explicitProgramBindingsApplied = 0;
    }
    function _0x16ebe3(_0x581e05, _0x45bfb2, _0x39d18a, _0x3e9ea9) {
      if (_0x3e9ea9 != 26 && _0x3e9ea9 != 10) {
        _0x2e37f2("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0;
      }
      if (!_0x468701(_0x581e05)) {
        _0x18b0dd.recordError(1280);
        _0x2e37f2("GL_INVALID_ENUM in glMapBufferRange");
        return 0;
      }
      var _0x3ce4bd = _0x302e44(_0x39d18a);
      if (!_0x3ce4bd) {
        return 0;
      }
      _0x18b0dd.mappedBuffers[_0x5b65e0(_0x581e05)] = {
        offset: _0x45bfb2,
        length: _0x39d18a,
        mem: _0x3ce4bd,
        access: _0x3e9ea9
      };
      return _0x3ce4bd;
    }
    function _0x68781b(_0x5969b5, _0x5be350) {
      if (_0x5969b5 == 3317) {
        _0x18b0dd.unpackAlignment = _0x5be350;
      }
      _0x5cd50f.pixelStorei(_0x5969b5, _0x5be350);
    }
    function _0x536295(_0x4919ca, _0x388096) {
      _0x5cd50f.polygonOffset(_0x4919ca, _0x388096);
    }
    function _0x14746d(_0x256859, _0x168315, _0x13a4ef, _0x8e2ddf) {
      _0x18b0dd.recordError(1280);
    }
    function _0x323ab6(_0xc2510d, _0x4890c8, _0x5d4c61) {
      _0x18b0dd.recordError(1280);
    }
    function _0x111d11(_0x59a7b4) {
      _0x5cd50f.readBuffer(_0x59a7b4);
    }
    function _0x1b2a25(_0x515b40, _0x1cc109, _0x1318c9, _0x5adf78) {
      function _0x3028cf(_0x45cdea, _0x3c322) {
        return _0x45cdea + _0x3c322 - 1 & -_0x3c322;
      }
      var _0x5a4257 = _0x515b40 * _0x1318c9;
      var _0x211132 = _0x3028cf(_0x5a4257, _0x5adf78);
      return _0x1cc109 * _0x211132;
    }
    function _0x30b880(_0x23d9b9) {
      var _0x56ab80 = {
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
      return _0x56ab80[_0x23d9b9 - 6402] || 1;
    }
    function _0x48e529(_0x7c004d) {
      _0x7c004d -= 5120;
      if (_0x7c004d == 0) {
        return _0xe1b6fc;
      }
      if (_0x7c004d == 1) {
        return _0x59122e;
      }
      if (_0x7c004d == 2) {
        return _0x2b0fe4;
      }
      if (_0x7c004d == 4) {
        return _0x576263;
      }
      if (_0x7c004d == 6) {
        return _0x51ee3f;
      }
      if (_0x7c004d == 5 || _0x7c004d == 28922 || _0x7c004d == 28520 || _0x7c004d == 30779 || _0x7c004d == 30782) {
        return _0x50f6f2;
      }
      return _0x319c2a;
    }
    function _0x227952(_0x3b2a00) {
      return 31 - Math.clz32(_0x3b2a00.BYTES_PER_ELEMENT);
    }
    function _0x4b8550(_0x364eca, _0x4b2825, _0x391c1e, _0x6b0d27, _0x68ec91, _0x3e092e) {
      var _0x48731f = _0x48e529(_0x364eca);
      var _0x5617b9 = _0x227952(_0x48731f);
      var _0x3f41c7 = 1 << _0x5617b9;
      var _0x7b0e62 = _0x30b880(_0x4b2825) * _0x3f41c7;
      var _0xc1c2e5 = _0x1b2a25(_0x391c1e, _0x6b0d27, _0x7b0e62, _0x18b0dd.unpackAlignment);
      return _0x48731f.subarray(_0x68ec91 >> _0x5617b9, _0x68ec91 + _0xc1c2e5 >> _0x5617b9);
    }
    function _0x3924b2(_0xce86dc, _0x2d938e, _0xc67920, _0xa83e0e, _0x4d95de, _0x40a7a3, _0x1d9e05) {
      if (_0x18b0dd.currentContext.version >= 2) {
        if (_0x5cd50f.currentPixelPackBufferBinding) {
          _0x5cd50f.readPixels(_0xce86dc, _0x2d938e, _0xc67920, _0xa83e0e, _0x4d95de, _0x40a7a3, _0x1d9e05);
        } else {
          var _0x3dfead = _0x48e529(_0x40a7a3);
          _0x5cd50f.readPixels(_0xce86dc, _0x2d938e, _0xc67920, _0xa83e0e, _0x4d95de, _0x40a7a3, _0x3dfead, _0x1d9e05 >> _0x227952(_0x3dfead));
        }
        return;
      }
      var _0x28848a = _0x4b8550(_0x40a7a3, _0x4d95de, _0xc67920, _0xa83e0e, _0x1d9e05, _0x4d95de);
      if (!_0x28848a) {
        _0x18b0dd.recordError(1280);
        return;
      }
      _0x5cd50f.readPixels(_0xce86dc, _0x2d938e, _0xc67920, _0xa83e0e, _0x4d95de, _0x40a7a3, _0x28848a);
    }
    function _0x4c920a(_0x2d8923, _0x16c82f, _0x2164d7, _0x1db606) {
      _0x5cd50f.renderbufferStorage(_0x2d8923, _0x16c82f, _0x2164d7, _0x1db606);
    }
    function _0x2e0c85(_0x2f19cc, _0x1cec1c, _0x39778e, _0x326396, _0x3ec097) {
      _0x5cd50f.renderbufferStorageMultisample(_0x2f19cc, _0x1cec1c, _0x39778e, _0x326396, _0x3ec097);
    }
    function _0xc06aff(_0x30ffbe, _0x353a4a, _0x4fc99f) {
      _0x5cd50f.samplerParameteri(_0x18b0dd.samplers[_0x30ffbe], _0x353a4a, _0x4fc99f);
    }
    function _0x565527(_0x341ab8, _0x1f8d2e, _0x5af38c, _0x197648) {
      _0x5cd50f.scissor(_0x341ab8, _0x1f8d2e, _0x5af38c, _0x197648);
    }
    function _0x4dd9c2(_0x486f90, _0xea1c2b, _0xbc2e6d = "(", _0x20f2ae = ")") {
      var _0x4c2e31 = 0;
      for (; _0xea1c2b < _0x486f90.length; ++_0xea1c2b) {
        if (_0x486f90[_0xea1c2b] == _0xbc2e6d) {
          ++_0x4c2e31;
        }
        if (_0x486f90[_0xea1c2b] == _0x20f2ae && --_0x4c2e31 == 0) {
          return _0xea1c2b;
        }
      }
    }
    function _0x1426d7(_0x4bb94d, _0x3b596a = {}) {
      var _0x517889 = 0;
      var _0x5baab1 = _0x4bb94d.length;
      var _0x27b98e = "";
      var _0x57f7b8 = [1];
      _0x3b596a.defined = _0x14eab4 => {
        if (_0x3b596a[_0x14eab4[0]]) {
          return 1;
        } else {
          return 0;
        }
      };
      function _0xb2aa92(_0x4562c2, _0x2db320) {
        return !(_0x4562c2.charCodeAt(_0x2db320) > 32);
      }
      function _0x3ea845(_0x11c426, _0x4d8c81) {
        while (!_0xb2aa92(_0x11c426, _0x4d8c81)) {
          ++_0x4d8c81;
        }
        return _0x4d8c81;
      }
      function _0x161888(_0x5e5aa2, _0x20d2bc) {
        var _0x6dc657 = _0x5e5aa2.charCodeAt(_0x20d2bc);
        if (_0x6dc657 > 32) {
          if (_0x6dc657 < 48) {
            return 1;
          }
          if (_0x6dc657 < 58) {
            return 2;
          }
          if (_0x6dc657 < 65) {
            return 1;
          }
          if (_0x6dc657 < 91 || _0x6dc657 == 95) {
            return 3;
          }
          if (_0x6dc657 < 97) {
            return 1;
          }
          if (_0x6dc657 < 123) {
            return 3;
          }
          return 1;
        }
        if (_0x6dc657 < 33) {
          return 0;
        } else {
          return 4;
        }
      }
      function _0x942bcb(_0xcb343f, _0x1295cd) {
        var _0x269fb0 = [];
        var _0x51c757 = _0xcb343f.length;
        for (var _0x51f03c = 0; _0x51f03c <= _0x51c757; ++_0x51f03c) {
          var _0x1327e7 = _0x161888(_0xcb343f, _0x51f03c);
          if (_0x1327e7 == 2 || _0x1327e7 == 3) {
            for (var _0x4024e7 = _0x51f03c + 1; _0x4024e7 <= _0x51c757; ++_0x4024e7) {
              var _0x219149 = _0x161888(_0xcb343f, _0x4024e7);
              if (_0x219149 != _0x1327e7 && (_0x219149 != 2 || _0x1327e7 != 3)) {
                _0x269fb0.push(_0xcb343f.substring(_0x51f03c, _0x4024e7));
                _0x51f03c = _0x4024e7 - 1;
                break;
              }
            }
          } else if (_0x1327e7 == 1) {
            var _0x5870fb = _0xcb343f.substr(_0x51f03c, 2);
            if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x5870fb)) {
              _0x269fb0.push(_0x5870fb);
              ++_0x51f03c;
            } else {
              _0x269fb0.push(_0xcb343f[_0x51f03c]);
            }
          }
        }
        return _0x269fb0;
      }
      function _0x159b45(_0xd291f6, _0x339fe9, _0x18b55a = _0xd291f6.length) {
        var _0x27e86a = _0xd291f6.length;
        var _0x32d21c = "";
        for (var _0x2cdc97 = _0x339fe9; _0x2cdc97 < _0x18b55a; ++_0x2cdc97) {
          var _0x517dfb = _0x161888(_0xd291f6, _0x2cdc97);
          if (_0x517dfb == 3) {
            for (var _0x4a3d1e = _0x2cdc97 + 1; _0x4a3d1e <= _0x18b55a; ++_0x4a3d1e) {
              var _0x54e700 = _0x161888(_0xd291f6, _0x4a3d1e);
              if (_0x54e700 != 2 && _0x54e700 != 3) {
                var _0x4c1970 = _0xd291f6.substring(_0x2cdc97, _0x4a3d1e);
                var _0x1b547c = _0x3b596a[_0x4c1970];
                if (_0x1b547c) {
                  var _0x10b7c0 = _0xd291f6.substring(_0x339fe9, _0x2cdc97);
                  if (_0x1b547c.length && _0xd291f6[_0x4a3d1e] == "(") {
                    var _0x50b832 = _0x4dd9c2(_0xd291f6, _0x4a3d1e);
                    _0x10b7c0 += _0x1b547c(_0xd291f6.substring(_0x4a3d1e + 1, _0x50b832).split(",")) + _0xd291f6.substring(_0x50b832 + 1, _0x18b55a);
                  } else {
                    _0x10b7c0 += _0x1b547c() + _0xd291f6.substring(_0x4a3d1e, _0x18b55a);
                  }
                  return _0x159b45(_0x10b7c0, 0);
                } else {
                  _0x32d21c += _0x4c1970;
                  _0x2cdc97 = _0x4a3d1e - 1;
                  break;
                }
              }
            }
          } else {
            _0x32d21c += _0xd291f6[_0x2cdc97];
          }
        }
        return _0x32d21c;
      }
      function _0x10e766(_0x488b72) {
        while (_0x488b72.length > 1 || typeof _0x488b72[0] != "function") {
          _0x488b72 = function (_0x1b1df5) {
            var _0x47cc41;
            var _0x3b88b3;
            var _0x11b7fc;
            var _0x83fd5a = -2;
            for (_0x3b88b3 = 0; _0x3b88b3 < _0x1b1df5.length; ++_0x3b88b3) {
              if ((_0x11b7fc = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x1b1df5[_0x3b88b3])) > _0x83fd5a) {
                _0x47cc41 = _0x3b88b3;
                _0x83fd5a = _0x11b7fc;
              }
            }
            if (_0x83fd5a == 13) {
              var _0x3b88b3 = _0x4dd9c2(_0x1b1df5, _0x47cc41);
              if (_0x3b88b3) {
                _0x1b1df5.splice(_0x47cc41, _0x3b88b3 + 1 - _0x47cc41, _0x10e766(_0x1b1df5.slice(_0x47cc41 + 1, _0x3b88b3)));
                return _0x1b1df5;
              }
            }
            if (_0x83fd5a == 4) {
              _0x47cc41 = _0x1b1df5.lastIndexOf("!");
              var _0x1893ed = _0x10e766(_0x1b1df5.slice(_0x47cc41 + 1, _0x47cc41 + 2));
              _0x1b1df5.splice(_0x47cc41, 2, function () {
                return !_0x1893ed();
              });
              return _0x1b1df5;
            }
            if (_0x83fd5a >= 0) {
              var _0x3caaa8 = _0x10e766(_0x1b1df5.slice(0, _0x47cc41));
              var _0x4d48f6 = _0x10e766(_0x1b1df5.slice(_0x47cc41 + 1));
              switch (_0x1b1df5[_0x47cc41]) {
                case "&&":
                  return [function () {
                    return _0x3caaa8() && _0x4d48f6();
                  }];
                case "||":
                  return [function () {
                    return _0x3caaa8() || _0x4d48f6();
                  }];
                case "==":
                  return [function () {
                    return _0x3caaa8() == _0x4d48f6();
                  }];
                case "!=":
                  return [function () {
                    return _0x3caaa8() != _0x4d48f6();
                  }];
                case "<":
                  return [function () {
                    return _0x3caaa8() < _0x4d48f6();
                  }];
                case "<=":
                  return [function () {
                    return _0x3caaa8() <= _0x4d48f6();
                  }];
                case ">":
                  return [function () {
                    return _0x3caaa8() > _0x4d48f6();
                  }];
                case ">=":
                  return [function () {
                    return _0x3caaa8() >= _0x4d48f6();
                  }];
                case "+":
                  return [function () {
                    return _0x3caaa8() + _0x4d48f6();
                  }];
                case "-":
                  return [function () {
                    return _0x3caaa8() - _0x4d48f6();
                  }];
                case "*":
                  return [function () {
                    return _0x3caaa8() * _0x4d48f6();
                  }];
                case "/":
                  return [function () {
                    return Math.floor(_0x3caaa8() / _0x4d48f6());
                  }];
              }
            }
            var _0x1ee564 = _0x31233d(_0x1b1df5[_0x47cc41]);
            return [function () {
              return _0x1ee564;
            }];
          }(_0x488b72);
        }
        return _0x488b72[0];
      }
      for (; _0x517889 < _0x5baab1; ++_0x517889) {
        var _0x23c23a = _0x517889;
        _0x517889 = _0x4bb94d.indexOf("\n", _0x517889);
        if (_0x517889 < 0) {
          _0x517889 = _0x5baab1;
        }
        for (var _0x11e919 = _0x23c23a; _0x11e919 < _0x517889 && _0xb2aa92(_0x4bb94d, _0x11e919); ++_0x11e919);
        var _0x120fe8 = _0x57f7b8[_0x57f7b8.length - 1];
        if (_0x4bb94d[_0x11e919] != "#") {
          if (_0x120fe8) {
            _0x27b98e += _0x159b45(_0x4bb94d, _0x23c23a, _0x517889) + "\n";
          }
          continue;
        }
        var _0x4e31c8 = _0x3ea845(_0x4bb94d, _0x11e919);
        var _0x2ae495 = _0x4bb94d.substring(_0x11e919 + 1, _0x4e31c8);
        var _0x2f78c1 = _0x4bb94d.substring(_0x4e31c8, _0x517889).trim();
        switch (_0x2ae495) {
          case "if":
            var _0xea11eb = _0x942bcb(_0x159b45(_0x2f78c1, 0));
            var _0x2c32e5 = _0x10e766(_0xea11eb);
            var _0x53ec12 = _0x2c32e5();
            _0x57f7b8.push(!!_0x53ec12 * _0x57f7b8[_0x57f7b8.length - 1]);
            break;
          case "ifdef":
            _0x57f7b8.push(!!_0x3b596a[_0x2f78c1] * _0x57f7b8[_0x57f7b8.length - 1]);
            break;
          case "ifndef":
            _0x57f7b8.push(!_0x3b596a[_0x2f78c1] * _0x57f7b8[_0x57f7b8.length - 1]);
            break;
          case "else":
            _0x57f7b8[_0x57f7b8.length - 1] = 1 - _0x57f7b8[_0x57f7b8.length - 1];
            break;
          case "endif":
            _0x57f7b8.pop();
            break;
          case "define":
            if (_0x120fe8) {
              var _0xf13d0a = _0x2f78c1.indexOf("(");
              var _0x3fba8a = _0x3ea845(_0x2f78c1, 0);
              if (_0x3fba8a < _0xf13d0a) {
                _0xf13d0a = 0;
              }
              if (_0xf13d0a > 0) {
                var _0x290bfb = _0x2f78c1.indexOf(")", _0xf13d0a);
                let _0x549f3d = _0x2f78c1.substring(_0xf13d0a + 1, _0x290bfb).split(",").map(_0x5e171f => _0x5e171f.trim());
                let _0x4c0f5f = _0x942bcb(_0x2f78c1.substring(_0x290bfb + 1).trim());
                _0x3b596a[_0x2f78c1.substring(0, _0xf13d0a)] = _0x160252 => {
                  var _0x5324c5 = "";
                  _0x4c0f5f.forEach(_0x1d7bed => {
                    var _0x448160 = _0x549f3d.indexOf(_0x1d7bed);
                    _0x5324c5 += _0x448160 >= 0 ? _0x160252[_0x448160] : _0x1d7bed;
                  });
                  return _0x5324c5;
                };
              } else {
                let _0x544dc2 = _0x159b45(_0x2f78c1.substring(_0x3fba8a + 1).trim(), 0);
                _0x3b596a[_0x2f78c1.substring(0, _0x3fba8a)] = () => _0x544dc2;
              }
            }
            break;
          case "undef":
            if (_0x120fe8) {
              delete _0x3b596a[_0x2f78c1];
            }
            break;
          default:
            if (_0x2ae495 != "version" && _0x2ae495 != "pragma" && _0x2ae495 != "extension") {}
            _0x27b98e += _0x159b45(_0x4bb94d, _0x23c23a, _0x517889) + "\n";
        }
      }
      return _0x27b98e;
    }
    function _0x2a591d(_0x1fe37c) {
      var _0x5214d7 = 0;
      var _0x5e5703 = "";
      var _0x45f30b;
      var _0x30d5c0;
      var _0x71151d = _0x1fe37c.length;
      for (; _0x5214d7 < _0x71151d; ++_0x5214d7) {
        _0x45f30b = _0x1fe37c[_0x5214d7];
        if (_0x45f30b == "/") {
          _0x30d5c0 = _0x1fe37c[_0x5214d7 + 1];
          if (_0x30d5c0 == "/") {
            while (_0x5214d7 < _0x71151d && _0x1fe37c[_0x5214d7 + 1] != "\n") {
              ++_0x5214d7;
            }
          } else if (_0x30d5c0 == "*") {
            while (_0x5214d7 < _0x71151d && (_0x1fe37c[_0x5214d7 - 1] != "*" || _0x1fe37c[_0x5214d7] != "/")) {
              ++_0x5214d7;
            }
          } else {
            _0x5e5703 += _0x45f30b;
          }
        } else {
          _0x5e5703 += _0x45f30b;
        }
      }
      return _0x5e5703;
    }
    function _0x16329f(_0x3ec08a, _0x6e427e, _0x5926e4, _0x4bb2f0) {
      var _0x618dcf = _0x18b0dd.getSource(_0x3ec08a, _0x6e427e, _0x5926e4, _0x4bb2f0);
      _0x618dcf = _0x1426d7(_0x2a591d(_0x618dcf), {
        GL_FRAGMENT_PRECISION_HIGH: () => 1,
        GL_ES: () => 1,
        __VERSION__: () => _0x618dcf.includes("#version 300") ? 300 : 100
      });
      var _0x202fa7 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
      var _0x2e057e = {};
      var _0x5bd32b;
      while (_0x5bd32b = _0x202fa7.exec(_0x618dcf)) {
        _0x2e057e[_0x5bd32b[5]] = _0x31233d(_0x5bd32b[1]);
        if (!(_0x2e057e[_0x5bd32b[5]] >= 0) || !(_0x2e057e[_0x5bd32b[5]] < 1048576)) {
          _0x2e37f2("Specified an out of range layout(location=x) directive \"" + _0x2e057e[_0x5bd32b[5]] + "\"! (" + _0x5bd32b[0] + ")");
          _0x18b0dd.recordError(1281);
          return;
        }
      }
      _0x618dcf = _0x618dcf.replace(_0x202fa7, "$2");
      _0x18b0dd.shaders[_0x3ec08a].explicitUniformLocations = _0x2e057e;
      var _0x5d96fd = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
      var _0x273b36 = {};
      var _0xcfe86 = {};
      var _0x5b3e55;
      while (_0x5b3e55 = _0x5d96fd.exec(_0x618dcf)) {
        var _0x3a0fb8 = 1;
        for (var _0x4aa891 = _0x5b3e55.index; _0x4aa891 < _0x618dcf.length && _0x618dcf[_0x4aa891] != ";"; ++_0x4aa891) {
          if (_0x618dcf[_0x4aa891] == "[") {
            _0x3a0fb8 = _0x31233d(_0x618dcf.slice(_0x4aa891 + 1));
            break;
          }
          if (_0x618dcf[_0x4aa891] == "{") {
            _0x4aa891 = _0x4dd9c2(_0x618dcf, _0x4aa891, "{", "}") - 1;
          }
        }
        var _0x45742b = _0x31233d(_0x5b3e55[1]);
        var _0x3707c2 = 34930;
        if (_0x5b3e55[3] && _0x5b3e55[2].indexOf("sampler") != -1) {
          _0x273b36[_0x5b3e55[3]] = [_0x45742b, _0x3a0fb8];
        } else {
          _0x3707c2 = 35374;
          _0xcfe86[_0x5b3e55[2]] = [_0x45742b, _0x3a0fb8];
        }
        var _0x5350d2 = _0x5cd50f.getParameter(_0x3707c2);
        if (!(_0x45742b >= 0) || !(_0x45742b + _0x3a0fb8 <= _0x5350d2)) {
          _0x2e37f2("Specified an out of range layout(binding=x) directive \"" + _0x45742b + "\"! (" + _0x5b3e55[0] + "). Valid range is [0, " + _0x5350d2 + "-1]");
          _0x18b0dd.recordError(1281);
          return;
        }
      }
      _0x618dcf = _0x618dcf.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
      _0x618dcf = _0x618dcf.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
      _0x618dcf = _0x618dcf.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
      _0x18b0dd.shaders[_0x3ec08a].explicitSamplerBindings = _0x273b36;
      _0x18b0dd.shaders[_0x3ec08a].explicitUniformBindings = _0xcfe86;
      _0x5cd50f.shaderSource(_0x18b0dd.shaders[_0x3ec08a], _0x618dcf);
    }
    function _0x58260a(_0x2e73cb, _0x178261, _0x51cb73, _0xbb8371) {
      _0x5cd50f.stencilFuncSeparate(_0x2e73cb, _0x178261, _0x51cb73, _0xbb8371);
    }
    function _0x253870(_0x53d2cc) {
      _0x5cd50f.stencilMask(_0x53d2cc);
    }
    function _0x58570a(_0x4ffa2c, _0x524628, _0xbcf6a0, _0x4ff9dc) {
      _0x5cd50f.stencilOpSeparate(_0x4ffa2c, _0x524628, _0xbcf6a0, _0x4ff9dc);
    }
    function _0x5e4b0e(_0x1c4dca, _0x50c573, _0x1cfe60, _0x111c2c, _0x2ef218, _0x25ad32, _0xc7c55a, _0x4b9b12, _0x25cadb) {
      if (_0x18b0dd.currentContext.version >= 2) {
        if (_0x5cd50f.currentPixelUnpackBufferBinding) {
          _0x5cd50f.texImage2D(_0x1c4dca, _0x50c573, _0x1cfe60, _0x111c2c, _0x2ef218, _0x25ad32, _0xc7c55a, _0x4b9b12, _0x25cadb);
        } else if (_0x25cadb) {
          var _0x5e7d45 = _0x48e529(_0x4b9b12);
          _0x5cd50f.texImage2D(_0x1c4dca, _0x50c573, _0x1cfe60, _0x111c2c, _0x2ef218, _0x25ad32, _0xc7c55a, _0x4b9b12, _0x5e7d45, _0x25cadb >> _0x227952(_0x5e7d45));
        } else {
          _0x5cd50f.texImage2D(_0x1c4dca, _0x50c573, _0x1cfe60, _0x111c2c, _0x2ef218, _0x25ad32, _0xc7c55a, _0x4b9b12, null);
        }
        return;
      }
      _0x5cd50f.texImage2D(_0x1c4dca, _0x50c573, _0x1cfe60, _0x111c2c, _0x2ef218, _0x25ad32, _0xc7c55a, _0x4b9b12, _0x25cadb ? _0x4b8550(_0x4b9b12, _0xc7c55a, _0x111c2c, _0x2ef218, _0x25cadb, _0x1cfe60) : null);
    }
    function _0x155a5b(_0x22ad01, _0x1bf88f, _0x21cfe5, _0x100b86, _0x3f3792, _0x194f44, _0x3cd227, _0x48a1fd, _0x1fa052, _0x35f011) {
      if (_0x5cd50f.currentPixelUnpackBufferBinding) {
        _0x5cd50f.texImage3D(_0x22ad01, _0x1bf88f, _0x21cfe5, _0x100b86, _0x3f3792, _0x194f44, _0x3cd227, _0x48a1fd, _0x1fa052, _0x35f011);
      } else if (_0x35f011) {
        var _0x33f35c = _0x48e529(_0x1fa052);
        _0x5cd50f.texImage3D(_0x22ad01, _0x1bf88f, _0x21cfe5, _0x100b86, _0x3f3792, _0x194f44, _0x3cd227, _0x48a1fd, _0x1fa052, _0x33f35c, _0x35f011 >> _0x227952(_0x33f35c));
      } else {
        _0x5cd50f.texImage3D(_0x22ad01, _0x1bf88f, _0x21cfe5, _0x100b86, _0x3f3792, _0x194f44, _0x3cd227, _0x48a1fd, _0x1fa052, null);
      }
    }
    function _0x5cd78b(_0x4262f1, _0xdcf54e, _0x5301f6) {
      _0x5cd50f.texParameterf(_0x4262f1, _0xdcf54e, _0x5301f6);
    }
    function _0x2598f0(_0x2fd078, _0x11e739, _0x44c7fa) {
      _0x5cd50f.texParameteri(_0x2fd078, _0x11e739, _0x44c7fa);
    }
    function _0x435fb3(_0x43cd5d, _0x1586c1, _0x578f73) {
      var _0xc1207d = _0x576263[_0x578f73 >> 2];
      _0x5cd50f.texParameteri(_0x43cd5d, _0x1586c1, _0xc1207d);
    }
    function _0x365b42(_0x1f1f4e, _0x176784, _0x4a7f0e, _0x3ca2ed, _0x3a1447) {
      _0x5cd50f.texStorage2D(_0x1f1f4e, _0x176784, _0x4a7f0e, _0x3ca2ed, _0x3a1447);
    }
    function _0x802f7d(_0x20e463, _0x5286bf, _0x4097a0, _0x57a945, _0x22e645, _0x20d90e) {
      _0x5cd50f.texStorage3D(_0x20e463, _0x5286bf, _0x4097a0, _0x57a945, _0x22e645, _0x20d90e);
    }
    function _0x193cc0(_0x16d028, _0x31e488, _0x3783fe, _0x5d3b39, _0xeb1dd9, _0x24c033, _0x2a9051, _0x5cb50f, _0x43ad06) {
      if (_0x18b0dd.currentContext.version >= 2) {
        if (_0x5cd50f.currentPixelUnpackBufferBinding) {
          _0x5cd50f.texSubImage2D(_0x16d028, _0x31e488, _0x3783fe, _0x5d3b39, _0xeb1dd9, _0x24c033, _0x2a9051, _0x5cb50f, _0x43ad06);
        } else if (_0x43ad06) {
          var _0xd89593 = _0x48e529(_0x5cb50f);
          _0x5cd50f.texSubImage2D(_0x16d028, _0x31e488, _0x3783fe, _0x5d3b39, _0xeb1dd9, _0x24c033, _0x2a9051, _0x5cb50f, _0xd89593, _0x43ad06 >> _0x227952(_0xd89593));
        } else {
          _0x5cd50f.texSubImage2D(_0x16d028, _0x31e488, _0x3783fe, _0x5d3b39, _0xeb1dd9, _0x24c033, _0x2a9051, _0x5cb50f, null);
        }
        return;
      }
      var _0x197350 = null;
      if (_0x43ad06) {
        _0x197350 = _0x4b8550(_0x5cb50f, _0x2a9051, _0xeb1dd9, _0x24c033, _0x43ad06, 0);
      }
      _0x5cd50f.texSubImage2D(_0x16d028, _0x31e488, _0x3783fe, _0x5d3b39, _0xeb1dd9, _0x24c033, _0x2a9051, _0x5cb50f, _0x197350);
    }
    function _0x5e704c(_0x803f3, _0x393dc1, _0x513b5b, _0x340e79, _0x22f562, _0x21a878, _0x5e61a8, _0x349327, _0x1902da, _0x103131, _0x44e3a2) {
      if (_0x5cd50f.currentPixelUnpackBufferBinding) {
        _0x5cd50f.texSubImage3D(_0x803f3, _0x393dc1, _0x513b5b, _0x340e79, _0x22f562, _0x21a878, _0x5e61a8, _0x349327, _0x1902da, _0x103131, _0x44e3a2);
      } else if (_0x44e3a2) {
        var _0x2d8819 = _0x48e529(_0x103131);
        _0x5cd50f.texSubImage3D(_0x803f3, _0x393dc1, _0x513b5b, _0x340e79, _0x22f562, _0x21a878, _0x5e61a8, _0x349327, _0x1902da, _0x103131, _0x2d8819, _0x44e3a2 >> _0x227952(_0x2d8819));
      } else {
        _0x5cd50f.texSubImage3D(_0x803f3, _0x393dc1, _0x513b5b, _0x340e79, _0x22f562, _0x21a878, _0x5e61a8, _0x349327, _0x1902da, _0x103131, null);
      }
    }
    var _0x496da2 = [];
    function _0x34377d(_0x1e97f1, _0x3fcc2b, _0x1264c0) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform1fv(_0x35c2fb(_0x1e97f1), _0x51ee3f, _0x1264c0 >> 2, _0x3fcc2b);
        return;
      }
      if (_0x3fcc2b <= 288) {
        var _0x126212 = _0x496da2[_0x3fcc2b - 1];
        for (var _0x4f5c0a = 0; _0x4f5c0a < _0x3fcc2b; ++_0x4f5c0a) {
          _0x126212[_0x4f5c0a] = _0x51ee3f[_0x1264c0 + _0x4f5c0a * 4 >> 2];
        }
      } else {
        var _0x126212 = _0x51ee3f.subarray(_0x1264c0 >> 2, _0x1264c0 + _0x3fcc2b * 4 >> 2);
      }
      _0x5cd50f.uniform1fv(_0x35c2fb(_0x1e97f1), _0x126212);
    }
    function _0x240d60(_0x4fc67b, _0xd79e8) {
      _0x5cd50f.uniform1i(_0x35c2fb(_0x4fc67b), _0xd79e8);
    }
    var _0x2dee97 = [];
    function _0xb3ebca(_0x5b4335, _0x47682e, _0x369724) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform1iv(_0x35c2fb(_0x5b4335), _0x576263, _0x369724 >> 2, _0x47682e);
        return;
      }
      if (_0x47682e <= 288) {
        var _0x47e2f8 = _0x2dee97[_0x47682e - 1];
        for (var _0x4fbf5d = 0; _0x4fbf5d < _0x47682e; ++_0x4fbf5d) {
          _0x47e2f8[_0x4fbf5d] = _0x576263[_0x369724 + _0x4fbf5d * 4 >> 2];
        }
      } else {
        var _0x47e2f8 = _0x576263.subarray(_0x369724 >> 2, _0x369724 + _0x47682e * 4 >> 2);
      }
      _0x5cd50f.uniform1iv(_0x35c2fb(_0x5b4335), _0x47e2f8);
    }
    function _0x5553a4(_0x595c59, _0x5ae815, _0x125775) {
      _0x5cd50f.uniform1uiv(_0x35c2fb(_0x595c59), _0x50f6f2, _0x125775 >> 2, _0x5ae815);
    }
    function _0x15a13e(_0x746fef, _0x505218, _0xb1890a) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform2fv(_0x35c2fb(_0x746fef), _0x51ee3f, _0xb1890a >> 2, _0x505218 * 2);
        return;
      }
      if (_0x505218 <= 144) {
        var _0x2a413f = _0x496da2[_0x505218 * 2 - 1];
        for (var _0xb285b4 = 0; _0xb285b4 < _0x505218 * 2; _0xb285b4 += 2) {
          _0x2a413f[_0xb285b4] = _0x51ee3f[_0xb1890a + _0xb285b4 * 4 >> 2];
          _0x2a413f[_0xb285b4 + 1] = _0x51ee3f[_0xb1890a + (_0xb285b4 * 4 + 4) >> 2];
        }
      } else {
        var _0x2a413f = _0x51ee3f.subarray(_0xb1890a >> 2, _0xb1890a + _0x505218 * 8 >> 2);
      }
      _0x5cd50f.uniform2fv(_0x35c2fb(_0x746fef), _0x2a413f);
    }
    function _0x2aa3a4(_0x5db14f, _0x380a8f, _0x518e80) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform2iv(_0x35c2fb(_0x5db14f), _0x576263, _0x518e80 >> 2, _0x380a8f * 2);
        return;
      }
      if (_0x380a8f <= 144) {
        var _0x33be82 = _0x2dee97[_0x380a8f * 2 - 1];
        for (var _0x4c8eb5 = 0; _0x4c8eb5 < _0x380a8f * 2; _0x4c8eb5 += 2) {
          _0x33be82[_0x4c8eb5] = _0x576263[_0x518e80 + _0x4c8eb5 * 4 >> 2];
          _0x33be82[_0x4c8eb5 + 1] = _0x576263[_0x518e80 + (_0x4c8eb5 * 4 + 4) >> 2];
        }
      } else {
        var _0x33be82 = _0x576263.subarray(_0x518e80 >> 2, _0x518e80 + _0x380a8f * 8 >> 2);
      }
      _0x5cd50f.uniform2iv(_0x35c2fb(_0x5db14f), _0x33be82);
    }
    function _0x3a2431(_0x32acc8, _0x1321a4, _0x2184b8) {
      _0x5cd50f.uniform2uiv(_0x35c2fb(_0x32acc8), _0x50f6f2, _0x2184b8 >> 2, _0x1321a4 * 2);
    }
    function _0x431e1e(_0x4ac239, _0x40c41e, _0x74c729) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform3fv(_0x35c2fb(_0x4ac239), _0x51ee3f, _0x74c729 >> 2, _0x40c41e * 3);
        return;
      }
      if (_0x40c41e <= 96) {
        var _0x42581a = _0x496da2[_0x40c41e * 3 - 1];
        for (var _0x535314 = 0; _0x535314 < _0x40c41e * 3; _0x535314 += 3) {
          _0x42581a[_0x535314] = _0x51ee3f[_0x74c729 + _0x535314 * 4 >> 2];
          _0x42581a[_0x535314 + 1] = _0x51ee3f[_0x74c729 + (_0x535314 * 4 + 4) >> 2];
          _0x42581a[_0x535314 + 2] = _0x51ee3f[_0x74c729 + (_0x535314 * 4 + 8) >> 2];
        }
      } else {
        var _0x42581a = _0x51ee3f.subarray(_0x74c729 >> 2, _0x74c729 + _0x40c41e * 12 >> 2);
      }
      _0x5cd50f.uniform3fv(_0x35c2fb(_0x4ac239), _0x42581a);
    }
    function _0x4670b7(_0x2d5197, _0x5163d9, _0x4e54d1) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform3iv(_0x35c2fb(_0x2d5197), _0x576263, _0x4e54d1 >> 2, _0x5163d9 * 3);
        return;
      }
      if (_0x5163d9 <= 96) {
        var _0x129af1 = _0x2dee97[_0x5163d9 * 3 - 1];
        for (var _0x4b5999 = 0; _0x4b5999 < _0x5163d9 * 3; _0x4b5999 += 3) {
          _0x129af1[_0x4b5999] = _0x576263[_0x4e54d1 + _0x4b5999 * 4 >> 2];
          _0x129af1[_0x4b5999 + 1] = _0x576263[_0x4e54d1 + (_0x4b5999 * 4 + 4) >> 2];
          _0x129af1[_0x4b5999 + 2] = _0x576263[_0x4e54d1 + (_0x4b5999 * 4 + 8) >> 2];
        }
      } else {
        var _0x129af1 = _0x576263.subarray(_0x4e54d1 >> 2, _0x4e54d1 + _0x5163d9 * 12 >> 2);
      }
      _0x5cd50f.uniform3iv(_0x35c2fb(_0x2d5197), _0x129af1);
    }
    function _0x93694a(_0x52761d, _0x54e2b0, _0x477561) {
      _0x5cd50f.uniform3uiv(_0x35c2fb(_0x52761d), _0x50f6f2, _0x477561 >> 2, _0x54e2b0 * 3);
    }
    function _0x39c65b(_0x1e4d9c, _0x15e1a2, _0x4e756c) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform4fv(_0x35c2fb(_0x1e4d9c), _0x51ee3f, _0x4e756c >> 2, _0x15e1a2 * 4);
        return;
      }
      if (_0x15e1a2 <= 72) {
        var _0x2f07a0 = _0x496da2[_0x15e1a2 * 4 - 1];
        var _0x35d5b6 = _0x51ee3f;
        _0x4e756c >>= 2;
        for (var _0x4c8e18 = 0; _0x4c8e18 < _0x15e1a2 * 4; _0x4c8e18 += 4) {
          var _0x1e09ff = _0x4e756c + _0x4c8e18;
          _0x2f07a0[_0x4c8e18] = _0x35d5b6[_0x1e09ff];
          _0x2f07a0[_0x4c8e18 + 1] = _0x35d5b6[_0x1e09ff + 1];
          _0x2f07a0[_0x4c8e18 + 2] = _0x35d5b6[_0x1e09ff + 2];
          _0x2f07a0[_0x4c8e18 + 3] = _0x35d5b6[_0x1e09ff + 3];
        }
      } else {
        var _0x2f07a0 = _0x51ee3f.subarray(_0x4e756c >> 2, _0x4e756c + _0x15e1a2 * 16 >> 2);
      }
      _0x5cd50f.uniform4fv(_0x35c2fb(_0x1e4d9c), _0x2f07a0);
    }
    function _0x584760(_0x502260, _0x395fb2, _0x48ca72) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniform4iv(_0x35c2fb(_0x502260), _0x576263, _0x48ca72 >> 2, _0x395fb2 * 4);
        return;
      }
      if (_0x395fb2 <= 72) {
        var _0x3af67f = _0x2dee97[_0x395fb2 * 4 - 1];
        for (var _0x1dfa4c = 0; _0x1dfa4c < _0x395fb2 * 4; _0x1dfa4c += 4) {
          _0x3af67f[_0x1dfa4c] = _0x576263[_0x48ca72 + _0x1dfa4c * 4 >> 2];
          _0x3af67f[_0x1dfa4c + 1] = _0x576263[_0x48ca72 + (_0x1dfa4c * 4 + 4) >> 2];
          _0x3af67f[_0x1dfa4c + 2] = _0x576263[_0x48ca72 + (_0x1dfa4c * 4 + 8) >> 2];
          _0x3af67f[_0x1dfa4c + 3] = _0x576263[_0x48ca72 + (_0x1dfa4c * 4 + 12) >> 2];
        }
      } else {
        var _0x3af67f = _0x576263.subarray(_0x48ca72 >> 2, _0x48ca72 + _0x395fb2 * 16 >> 2);
      }
      _0x5cd50f.uniform4iv(_0x35c2fb(_0x502260), _0x3af67f);
    }
    function _0x1b4ee8(_0x2cc18f, _0x3ddcd3, _0xd0c3e5) {
      _0x5cd50f.uniform4uiv(_0x35c2fb(_0x2cc18f), _0x50f6f2, _0xd0c3e5 >> 2, _0x3ddcd3 * 4);
    }
    function _0x1011fc(_0x3e8284, _0x536794, _0x51850d) {
      _0x3e8284 = _0x18b0dd.programs[_0x3e8284];
      _0x5cd50f.uniformBlockBinding(_0x3e8284, _0x536794, _0x51850d);
    }
    function _0x125d5a(_0x3f56de, _0x3945ea, _0x22de59, _0x2243ae) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniformMatrix3fv(_0x35c2fb(_0x3f56de), !!_0x22de59, _0x51ee3f, _0x2243ae >> 2, _0x3945ea * 9);
        return;
      }
      if (_0x3945ea <= 32) {
        var _0x4f9faf = _0x496da2[_0x3945ea * 9 - 1];
        for (var _0x3d36c = 0; _0x3d36c < _0x3945ea * 9; _0x3d36c += 9) {
          _0x4f9faf[_0x3d36c] = _0x51ee3f[_0x2243ae + _0x3d36c * 4 >> 2];
          _0x4f9faf[_0x3d36c + 1] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 4) >> 2];
          _0x4f9faf[_0x3d36c + 2] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 8) >> 2];
          _0x4f9faf[_0x3d36c + 3] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 12) >> 2];
          _0x4f9faf[_0x3d36c + 4] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 16) >> 2];
          _0x4f9faf[_0x3d36c + 5] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 20) >> 2];
          _0x4f9faf[_0x3d36c + 6] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 24) >> 2];
          _0x4f9faf[_0x3d36c + 7] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 28) >> 2];
          _0x4f9faf[_0x3d36c + 8] = _0x51ee3f[_0x2243ae + (_0x3d36c * 4 + 32) >> 2];
        }
      } else {
        var _0x4f9faf = _0x51ee3f.subarray(_0x2243ae >> 2, _0x2243ae + _0x3945ea * 36 >> 2);
      }
      _0x5cd50f.uniformMatrix3fv(_0x35c2fb(_0x3f56de), !!_0x22de59, _0x4f9faf);
    }
    function _0x689cc5(_0xc5559, _0x1fa54b, _0x5a0954, _0xf8cf8) {
      if (_0x18b0dd.currentContext.version >= 2) {
        _0x5cd50f.uniformMatrix4fv(_0x35c2fb(_0xc5559), !!_0x5a0954, _0x51ee3f, _0xf8cf8 >> 2, _0x1fa54b * 16);
        return;
      }
      if (_0x1fa54b <= 18) {
        var _0x131109 = _0x496da2[_0x1fa54b * 16 - 1];
        var _0x38392d = _0x51ee3f;
        _0xf8cf8 >>= 2;
        for (var _0x293bd0 = 0; _0x293bd0 < _0x1fa54b * 16; _0x293bd0 += 16) {
          var _0x5a534a = _0xf8cf8 + _0x293bd0;
          _0x131109[_0x293bd0] = _0x38392d[_0x5a534a];
          _0x131109[_0x293bd0 + 1] = _0x38392d[_0x5a534a + 1];
          _0x131109[_0x293bd0 + 2] = _0x38392d[_0x5a534a + 2];
          _0x131109[_0x293bd0 + 3] = _0x38392d[_0x5a534a + 3];
          _0x131109[_0x293bd0 + 4] = _0x38392d[_0x5a534a + 4];
          _0x131109[_0x293bd0 + 5] = _0x38392d[_0x5a534a + 5];
          _0x131109[_0x293bd0 + 6] = _0x38392d[_0x5a534a + 6];
          _0x131109[_0x293bd0 + 7] = _0x38392d[_0x5a534a + 7];
          _0x131109[_0x293bd0 + 8] = _0x38392d[_0x5a534a + 8];
          _0x131109[_0x293bd0 + 9] = _0x38392d[_0x5a534a + 9];
          _0x131109[_0x293bd0 + 10] = _0x38392d[_0x5a534a + 10];
          _0x131109[_0x293bd0 + 11] = _0x38392d[_0x5a534a + 11];
          _0x131109[_0x293bd0 + 12] = _0x38392d[_0x5a534a + 12];
          _0x131109[_0x293bd0 + 13] = _0x38392d[_0x5a534a + 13];
          _0x131109[_0x293bd0 + 14] = _0x38392d[_0x5a534a + 14];
          _0x131109[_0x293bd0 + 15] = _0x38392d[_0x5a534a + 15];
        }
      } else {
        var _0x131109 = _0x51ee3f.subarray(_0xf8cf8 >> 2, _0xf8cf8 + _0x1fa54b * 64 >> 2);
      }
      _0x5cd50f.uniformMatrix4fv(_0x35c2fb(_0xc5559), !!_0x5a0954, _0x131109);
    }
    function _0x1de3cf(_0x41b505) {
      if (!_0x468701(_0x41b505)) {
        _0x18b0dd.recordError(1280);
        _0x2e37f2("GL_INVALID_ENUM in glUnmapBuffer");
        return 0;
      }
      var _0x48286e = _0x5b65e0(_0x41b505);
      var _0x1f89d6 = _0x18b0dd.mappedBuffers[_0x48286e];
      if (!_0x1f89d6) {
        _0x18b0dd.recordError(1282);
        _0x2e37f2("buffer was never mapped in glUnmapBuffer");
        return 0;
      }
      _0x18b0dd.mappedBuffers[_0x48286e] = null;
      if (!(_0x1f89d6.access & 16)) {
        if (_0x18b0dd.currentContext.version >= 2) {
          _0x5cd50f.bufferSubData(_0x41b505, _0x1f89d6.offset, _0x59122e, _0x1f89d6.mem, _0x1f89d6.length);
        } else {
          _0x5cd50f.bufferSubData(_0x41b505, _0x1f89d6.offset, _0x59122e.subarray(_0x1f89d6.mem, _0x1f89d6.mem + _0x1f89d6.length));
        }
      }
      _0x1e689c(_0x1f89d6.mem);
      return 1;
    }
    function _0x5205c3() {
      var _0x10b946 = _0x5cd50f.currentProgram;
      if (!_0x10b946.explicitProgramBindingsApplied) {
        if (_0x18b0dd.currentContext.version >= 2) {
          Object.keys(_0x10b946.explicitUniformBindings).forEach(function (_0x349b3a) {
            var _0x7bb13b = _0x10b946.explicitUniformBindings[_0x349b3a];
            for (var _0x51cd1b = 0; _0x51cd1b < _0x7bb13b[1]; ++_0x51cd1b) {
              var _0x595034 = _0x5cd50f.getUniformBlockIndex(_0x10b946, _0x349b3a + (_0x7bb13b[1] > 1 ? "[" + _0x51cd1b + "]" : ""));
              _0x5cd50f.uniformBlockBinding(_0x10b946, _0x595034, _0x7bb13b[0] + _0x51cd1b);
            }
          });
        }
        Object.keys(_0x10b946.explicitSamplerBindings).forEach(function (_0x598326) {
          var _0x5f1206 = _0x10b946.explicitSamplerBindings[_0x598326];
          for (var _0x26c329 = 0; _0x26c329 < _0x5f1206[1]; ++_0x26c329) {
            _0x5cd50f.uniform1i(_0x5cd50f.getUniformLocation(_0x10b946, _0x598326 + (_0x26c329 ? "[" + _0x26c329 + "]" : "")), _0x5f1206[0] + _0x26c329);
          }
        });
        _0x10b946.explicitProgramBindingsApplied = 1;
      }
    }
    function _0x1bc71f(_0x18edf1) {
      _0x18edf1 = _0x18b0dd.programs[_0x18edf1];
      _0x5cd50f.useProgram(_0x18edf1);
      if (_0x5cd50f.currentProgram = _0x18edf1) {
        _0x5205c3();
      }
    }
    function _0x2af17e(_0x1c7339) {
      _0x5cd50f.validateProgram(_0x18b0dd.programs[_0x1c7339]);
    }
    function _0x358d70(_0x3537a5, _0x3c6d4b, _0x5120d6, _0x5c41a1, _0x3eda5c) {
      _0x5cd50f.vertexAttrib4f(_0x3537a5, _0x3c6d4b, _0x5120d6, _0x5c41a1, _0x3eda5c);
    }
    function _0x24ff06(_0x61a00a, _0x2ea656) {
      _0x5cd50f.vertexAttrib4f(_0x61a00a, _0x51ee3f[_0x2ea656 >> 2], _0x51ee3f[_0x2ea656 + 4 >> 2], _0x51ee3f[_0x2ea656 + 8 >> 2], _0x51ee3f[_0x2ea656 + 12 >> 2]);
    }
    function _0x1d9ea2(_0x47fe51, _0x357417, _0x23967d, _0x41fac4, _0x29f658) {
      var _0x28b282 = _0x18b0dd.currentContext.clientBuffers[_0x47fe51];
      if (!_0x5cd50f.currentArrayBufferBinding) {
        _0x28b282.size = _0x357417;
        _0x28b282.type = _0x23967d;
        _0x28b282.normalized = false;
        _0x28b282.stride = _0x41fac4;
        _0x28b282.ptr = _0x29f658;
        _0x28b282.clientside = true;
        _0x28b282.vertexAttribPointerAdaptor = function (_0x180494, _0x132441, _0x26dda3, _0x36ac13, _0x4bd894, _0xf1f570) {
          this.vertexAttribIPointer(_0x180494, _0x132441, _0x26dda3, _0x4bd894, _0xf1f570);
        };
        return;
      }
      _0x28b282.clientside = false;
      _0x5cd50f.vertexAttribIPointer(_0x47fe51, _0x357417, _0x23967d, _0x41fac4, _0x29f658);
    }
    function _0x4144d6(_0x3f4ffe, _0x45924d, _0x5ccb0d, _0x5f4674, _0x2d09a6, _0x433428) {
      var _0x458b36 = _0x18b0dd.currentContext.clientBuffers[_0x3f4ffe];
      if (!_0x5cd50f.currentArrayBufferBinding) {
        _0x458b36.size = _0x45924d;
        _0x458b36.type = _0x5ccb0d;
        _0x458b36.normalized = _0x5f4674;
        _0x458b36.stride = _0x2d09a6;
        _0x458b36.ptr = _0x433428;
        _0x458b36.clientside = true;
        _0x458b36.vertexAttribPointerAdaptor = function (_0x40c6c5, _0x27108c, _0x1f02ec, _0x6ea808, _0x49cf2e, _0x5deea4) {
          this.vertexAttribPointer(_0x40c6c5, _0x27108c, _0x1f02ec, _0x6ea808, _0x49cf2e, _0x5deea4);
        };
        return;
      }
      _0x458b36.clientside = false;
      _0x5cd50f.vertexAttribPointer(_0x3f4ffe, _0x45924d, _0x5ccb0d, !!_0x5f4674, _0x2d09a6, _0x433428);
    }
    function _0xcfc2ea(_0x22b036, _0xc7ef08, _0x5c6db0, _0xa6817c) {
      _0x5cd50f.viewport(_0x22b036, _0xc7ef08, _0x5c6db0, _0xa6817c);
    }
    function _0x3b6fd6(_0x43c602) {
      return _0x43c602;
    }
    function _0x2dbb7c(_0xccb412) {
      _0x1b256f(_0xccb412);
    }
    function _0x5433be(_0x2e070b) {
      return _0x2e070b % 4 === 0 && (_0x2e070b % 100 !== 0 || _0x2e070b % 400 === 0);
    }
    function _0xca13c5(_0xdd038b, _0x308666) {
      var _0x35fd31 = 0;
      for (var _0x1944cb = 0; _0x1944cb <= _0x308666; _0x35fd31 += _0xdd038b[_0x1944cb++]) {}
      return _0x35fd31;
    }
    var _0x268d41 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _0x14af5f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function _0x355de0(_0x37946b, _0x5de907) {
      var _0x3dbf28 = new Date(_0x37946b.getTime());
      while (_0x5de907 > 0) {
        var _0x45c9f3 = _0x5433be(_0x3dbf28.getFullYear());
        var _0x588744 = _0x3dbf28.getMonth();
        var _0x2923f6 = (_0x45c9f3 ? _0x268d41 : _0x14af5f)[_0x588744];
        if (_0x5de907 > _0x2923f6 - _0x3dbf28.getDate()) {
          _0x5de907 -= _0x2923f6 - _0x3dbf28.getDate() + 1;
          _0x3dbf28.setDate(1);
          if (_0x588744 < 11) {
            _0x3dbf28.setMonth(_0x588744 + 1);
          } else {
            _0x3dbf28.setMonth(0);
            _0x3dbf28.setFullYear(_0x3dbf28.getFullYear() + 1);
          }
        } else {
          _0x3dbf28.setDate(_0x3dbf28.getDate() + _0x5de907);
          return _0x3dbf28;
        }
      }
      return _0x3dbf28;
    }
    function _0x27c394(_0x2bf03d, _0x13360c, _0x757571, _0x9d30e9) {
      var _0x2f4069 = _0x576263[_0x9d30e9 + 40 >> 2];
      var _0x4123d2 = {
        tm_sec: _0x576263[_0x9d30e9 >> 2],
        tm_min: _0x576263[_0x9d30e9 + 4 >> 2],
        tm_hour: _0x576263[_0x9d30e9 + 8 >> 2],
        tm_mday: _0x576263[_0x9d30e9 + 12 >> 2],
        tm_mon: _0x576263[_0x9d30e9 + 16 >> 2],
        tm_year: _0x576263[_0x9d30e9 + 20 >> 2],
        tm_wday: _0x576263[_0x9d30e9 + 24 >> 2],
        tm_yday: _0x576263[_0x9d30e9 + 28 >> 2],
        tm_isdst: _0x576263[_0x9d30e9 + 32 >> 2],
        tm_gmtoff: _0x576263[_0x9d30e9 + 36 >> 2],
        tm_zone: _0x2f4069 ? _0x3d5aa0(_0x2f4069) : ""
      };
      var _0x401767 = _0x3d5aa0(_0x757571);
      var _0x2abf2d = {
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
      for (var _0x52a45a in _0x2abf2d) {
        _0x401767 = _0x401767.replace(new RegExp(_0x52a45a, "g"), _0x2abf2d[_0x52a45a]);
      }
      var _0x44e469 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var _0x3aeaaa = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function _0x5a4211(_0x2281a2, _0x3eef69, _0x102064) {
        var _0x56574c = typeof _0x2281a2 == "number" ? _0x2281a2.toString() : _0x2281a2 || "";
        while (_0x56574c.length < _0x3eef69) {
          _0x56574c = _0x102064[0] + _0x56574c;
        }
        return _0x56574c;
      }
      function _0x7ef75c(_0x44e492, _0x406ec9) {
        return _0x5a4211(_0x44e492, _0x406ec9, "0");
      }
      function _0x24447e(_0x32b823, _0x3e72a8) {
        function _0x33627d(_0x109cfb) {
          if (_0x109cfb < 0) {
            return -1;
          } else if (_0x109cfb > 0) {
            return 1;
          } else {
            return 0;
          }
        }
        var _0x3cec68;
        if ((_0x3cec68 = _0x33627d(_0x32b823.getFullYear() - _0x3e72a8.getFullYear())) === 0) {
          if ((_0x3cec68 = _0x33627d(_0x32b823.getMonth() - _0x3e72a8.getMonth())) === 0) {
            _0x3cec68 = _0x33627d(_0x32b823.getDate() - _0x3e72a8.getDate());
          }
        }
        return _0x3cec68;
      }
      function _0x8e47b(_0x15cd7c) {
        switch (_0x15cd7c.getDay()) {
          case 0:
            return new Date(_0x15cd7c.getFullYear() - 1, 11, 29);
          case 1:
            return _0x15cd7c;
          case 2:
            return new Date(_0x15cd7c.getFullYear(), 0, 3);
          case 3:
            return new Date(_0x15cd7c.getFullYear(), 0, 2);
          case 4:
            return new Date(_0x15cd7c.getFullYear(), 0, 1);
          case 5:
            return new Date(_0x15cd7c.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(_0x15cd7c.getFullYear() - 1, 11, 30);
        }
      }
      function _0x192762(_0x48f6b6) {
        var _0x270d8a = _0x355de0(new Date(_0x48f6b6.tm_year + 1900, 0, 1), _0x48f6b6.tm_yday);
        var _0x2b565e = new Date(_0x270d8a.getFullYear(), 0, 4);
        var _0x11ae21 = new Date(_0x270d8a.getFullYear() + 1, 0, 4);
        var _0x4a5248 = _0x8e47b(_0x2b565e);
        var _0x29252b = _0x8e47b(_0x11ae21);
        if (_0x24447e(_0x4a5248, _0x270d8a) <= 0) {
          if (_0x24447e(_0x29252b, _0x270d8a) <= 0) {
            return _0x270d8a.getFullYear() + 1;
          } else {
            return _0x270d8a.getFullYear();
          }
        } else {
          return _0x270d8a.getFullYear() - 1;
        }
      }
      var _0x2db167 = {
        "%a": function (_0x18e6c6) {
          return _0x44e469[_0x18e6c6.tm_wday].substring(0, 3);
        },
        "%A": function (_0x37b6e5) {
          return _0x44e469[_0x37b6e5.tm_wday];
        },
        "%b": function (_0x536487) {
          return _0x3aeaaa[_0x536487.tm_mon].substring(0, 3);
        },
        "%B": function (_0x588ecb) {
          return _0x3aeaaa[_0x588ecb.tm_mon];
        },
        "%C": function (_0x137756) {
          var _0x197d45 = _0x137756.tm_year + 1900;
          return _0x7ef75c(_0x197d45 / 100 | 0, 2);
        },
        "%d": function (_0x5006e7) {
          return _0x7ef75c(_0x5006e7.tm_mday, 2);
        },
        "%e": function (_0x2c0c49) {
          return _0x5a4211(_0x2c0c49.tm_mday, 2, " ");
        },
        "%g": function (_0x2f8574) {
          return _0x192762(_0x2f8574).toString().substring(2);
        },
        "%G": function (_0x5cde78) {
          return _0x192762(_0x5cde78);
        },
        "%H": function (_0x244675) {
          return _0x7ef75c(_0x244675.tm_hour, 2);
        },
        "%I": function (_0x5d96b3) {
          var _0xfc030f = _0x5d96b3.tm_hour;
          if (_0xfc030f == 0) {
            _0xfc030f = 12;
          } else if (_0xfc030f > 12) {
            _0xfc030f -= 12;
          }
          return _0x7ef75c(_0xfc030f, 2);
        },
        "%j": function (_0x48859b) {
          return _0x7ef75c(_0x48859b.tm_mday + _0xca13c5(_0x5433be(_0x48859b.tm_year + 1900) ? _0x268d41 : _0x14af5f, _0x48859b.tm_mon - 1), 3);
        },
        "%m": function (_0x52439b) {
          return _0x7ef75c(_0x52439b.tm_mon + 1, 2);
        },
        "%M": function (_0x9eb99f) {
          return _0x7ef75c(_0x9eb99f.tm_min, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (_0x22cecd) {
          if (_0x22cecd.tm_hour >= 0 && _0x22cecd.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function (_0x2f8a8a) {
          return _0x7ef75c(_0x2f8a8a.tm_sec, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (_0x1864ec) {
          return _0x1864ec.tm_wday || 7;
        },
        "%U": function (_0x5142be) {
          var _0x5986f0 = _0x5142be.tm_yday + 7 - _0x5142be.tm_wday;
          return _0x7ef75c(Math.floor(_0x5986f0 / 7), 2);
        },
        "%V": function (_0x3a2a6c) {
          var _0x1bf13b = Math.floor((_0x3a2a6c.tm_yday + 7 - (_0x3a2a6c.tm_wday + 6) % 7) / 7);
          if ((_0x3a2a6c.tm_wday + 371 - _0x3a2a6c.tm_yday - 2) % 7 <= 2) {
            _0x1bf13b++;
          }
          if (!_0x1bf13b) {
            _0x1bf13b = 52;
            var _0x53547c = (_0x3a2a6c.tm_wday + 7 - _0x3a2a6c.tm_yday - 1) % 7;
            if (_0x53547c == 4 || _0x53547c == 5 && _0x5433be(_0x3a2a6c.tm_year % 400 - 1)) {
              _0x1bf13b++;
            }
          } else if (_0x1bf13b == 53) {
            var _0x495fbc = (_0x3a2a6c.tm_wday + 371 - _0x3a2a6c.tm_yday) % 7;
            if (_0x495fbc != 4 && (_0x495fbc != 3 || !_0x5433be(_0x3a2a6c.tm_year))) {
              _0x1bf13b = 1;
            }
          }
          return _0x7ef75c(_0x1bf13b, 2);
        },
        "%w": function (_0x35ab66) {
          return _0x35ab66.tm_wday;
        },
        "%W": function (_0x9e458d) {
          var _0x25359a = _0x9e458d.tm_yday + 7 - (_0x9e458d.tm_wday + 6) % 7;
          return _0x7ef75c(Math.floor(_0x25359a / 7), 2);
        },
        "%y": function (_0x32581c) {
          return (_0x32581c.tm_year + 1900).toString().substring(2);
        },
        "%Y": function (_0x222e04) {
          return _0x222e04.tm_year + 1900;
        },
        "%z": function (_0x5cd710) {
          var _0xf8be34 = _0x5cd710.tm_gmtoff;
          var _0x1bc7f8 = _0xf8be34 >= 0;
          _0xf8be34 = Math.abs(_0xf8be34) / 60;
          _0xf8be34 = _0xf8be34 / 60 * 100 + _0xf8be34 % 60;
          return (_0x1bc7f8 ? "+" : "-") + String("0000" + _0xf8be34).slice(-4);
        },
        "%Z": function (_0x53df48) {
          return _0x53df48.tm_zone;
        },
        "%%": function () {
          return "%";
        }
      };
      _0x401767 = _0x401767.replace(/%%/g, "\0\0");
      for (var _0x52a45a in _0x2db167) {
        if (_0x401767.includes(_0x52a45a)) {
          _0x401767 = _0x401767.replace(new RegExp(_0x52a45a, "g"), _0x2db167[_0x52a45a](_0x4123d2));
        }
      }
      _0x401767 = _0x401767.replace(/\0\0/g, "%");
      var _0x196ece = _0x198eb8(_0x401767, false);
      if (_0x196ece.length > _0x13360c) {
        return 0;
      }
      _0x1dddd9(_0x196ece, _0x2bf03d);
      return _0x196ece.length - 1;
    }
    function _0x2d74ed(_0x1ab06a, _0x71dedf, _0x58ab69, _0x3e6316) {
      if (!_0x1ab06a) {
        _0x1ab06a = this;
      }
      this.parent = _0x1ab06a;
      this.mount = _0x1ab06a.mount;
      this.mounted = null;
      this.id = _0x5292fc.nextInode++;
      this.name = _0x71dedf;
      this.mode = _0x58ab69;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x3e6316;
    }
    var _0x32adfb = 365;
    var _0xa294ee = 146;
    Object.defineProperties(_0x2d74ed.prototype, {
      read: {
        get: function () {
          return (this.mode & _0x32adfb) === _0x32adfb;
        },
        set: function (_0x12cfc1) {
          if (_0x12cfc1) {
            this.mode |= _0x32adfb;
          } else {
            this.mode &= ~_0x32adfb;
          }
        }
      },
      write: {
        get: function () {
          return (this.mode & _0xa294ee) === _0xa294ee;
        },
        set: function (_0x52e3ea) {
          if (_0x52e3ea) {
            this.mode |= _0xa294ee;
          } else {
            this.mode &= ~_0xa294ee;
          }
        }
      },
      isFolder: {
        get: function () {
          return _0x5292fc.isDir(this.mode);
        }
      },
      isDevice: {
        get: function () {
          return _0x5292fc.isChrdev(this.mode);
        }
      }
    });
    _0x5292fc.FSNode = _0x2d74ed;
    _0x5292fc.staticInit();
    _0x17aa78.FS_createPath = _0x5292fc.createPath;
    _0x17aa78.FS_createDataFile = _0x5292fc.createDataFile;
    _0x17aa78.requestFullscreen = function _0x1c320b(_0x8dc900, _0x4fd40d) {
      _0x2a402d.requestFullscreen(_0x8dc900, _0x4fd40d);
    };
    _0x17aa78.requestAnimationFrame = function _0xadfc5c(_0x45166a) {
      _0x2a402d.requestAnimationFrame(_0x45166a);
    };
    _0x17aa78.setCanvasSize = function _0x5332e4(_0x592733, _0x478166, _0x32af1c) {
      _0x2a402d.setCanvasSize(_0x592733, _0x478166, _0x32af1c);
    };
    _0x17aa78.pauseMainLoop = function _0x26ef54() {
      _0x2a402d.mainLoop.pause();
    };
    _0x17aa78.resumeMainLoop = function _0x147343() {
      _0x2a402d.mainLoop.resume();
    };
    _0x17aa78.getUserMedia = function _0x550440() {
      _0x2a402d.getUserMedia();
    };
    _0x17aa78.createContext = function _0x59af74(_0x2f3988, _0x359318, _0x49cf78, _0x26d2a6) {
      return _0x2a402d.createContext(_0x2f3988, _0x359318, _0x49cf78, _0x26d2a6);
    };
    var _0x5cd50f;
    for (var _0x21d234 = 0; _0x21d234 < 32; ++_0x21d234) {
      _0x337663.push(new Array(_0x21d234));
    }
    var _0x5c0aa1 = new Float32Array(288);
    for (var _0x21d234 = 0; _0x21d234 < 288; ++_0x21d234) {
      _0x496da2[_0x21d234] = _0x5c0aa1.subarray(0, _0x21d234 + 1);
    }
    var _0xe56b = new Int32Array(288);
    for (var _0x21d234 = 0; _0x21d234 < 288; ++_0x21d234) {
      _0x2dee97[_0x21d234] = _0xe56b.subarray(0, _0x21d234 + 1);
    }
    var _0x10899d = false;
    function _0x198eb8(_0x53ca39, _0x995b02, _0x2aa13b) {
      var _0x123903 = _0x2aa13b > 0 ? _0x2aa13b : _0xa3918a(_0x53ca39) + 1;
      var _0x4a09dc = new Array(_0x123903);
      var _0x54b4fb = _0x3ea981(_0x53ca39, _0x4a09dc, 0, _0x4a09dc.length);
      if (_0x995b02) {
        _0x4a09dc.length = _0x54b4fb;
      }
      return _0x4a09dc;
    }
    var _0x105b8a = {
      AddDocument: _0x2cb0c5,
      AddElementInArrayField: _0x28a637,
      AddUserScoreSDK: _0x3edb6f,
      AnalyticsTrackOrderSDK: _0x5b8f0f,
      CopyToClipboard: _0x284fa6,
      CopyToClipboardSDK: _0x2cc43e,
      CreateUserWithEmailAndPassword: _0x1d75a3,
      DataClearSDK: _0x5bdec2,
      DataGetItemSDK: _0x50cab0,
      DataHasKeySDK: _0x51d9b0,
      DataRemoveItemSDK: _0x93d2b0,
      DataSetItemSDK: _0x186176,
      DeleteDocument: _0x1b1738,
      DeleteField: _0x2453bb,
      DeleteJSON: _0x364457,
      DownloadFile: _0x134ab9,
      FetchAd: _0x42f42a,
      GMRequestAd: _0x9f3c89,
      GM_SDK_GMEvent: _0x1efe22,
      GM_SDK_GetVeryfiedSignature: _0x9581fe,
      GM_SDK_InitParam: _0x16aad1,
      GM_SDK_StartGame: _0x3137c9,
      GameEvent: _0x5b7f9d,
      GameplayStartSDK: _0xebd4fb,
      GameplayStopSDK: _0x2ca5cc,
      GetCurrentProjectId: _0x3c851f,
      GetDocument: _0x1a582c,
      GetDocumentsInCollection: _0x520a3d,
      GetEnvironmentSDK: _0x56df70,
      GetGameSettingsJSONSDK: _0x4356e8,
      GetInviteLinkParamSDK: _0x168fd9,
      GetIsQaToolSDK: _0x45a7bb,
      GetJSMemoryInfo: _0x4b170b,
      GetJSON: _0x7a2397,
      GetSystemInfoSDK: _0x34fb8b,
      GetUserSDK: _0x38ab7e,
      GetUserTokenSDK: _0xdeaf41,
      GetXsollaUserTokenSDK: _0x205145,
      H5ADS_Init: _0x298c80,
      H5_PreloadAd: _0x3ea523,
      H5_ShowAd: _0x40d962,
      H5_ShowRewardAd: _0x187ebc,
      HappyTimeSDK: _0x4ed1fe,
      HideInviteButtonSDK: _0x4ff1f6,
      IncrementFieldValue: _0x448c6a,
      InitSDK: _0x4bd2e7,
      IsUserAccountAvailableSDK: _0x43f292,
      JS_Accelerometer_IsRunning: _0x47d54,
      JS_Accelerometer_Start: _0x2b437b,
      JS_Accelerometer_Stop: _0xe0908b,
      JS_CallAsLongAsNoExceptionsSeen: _0x65bc72,
      JS_Cursor_SetImage: _0x461bc7,
      JS_Cursor_SetShow: _0x495d3c,
      JS_DOM_MapViewportCoordinateToElementLocalCoordinate: _0x12299b,
      JS_DOM_UnityCanvasSelector: _0x430ba3,
      JS_Eval_EvalJS: _0x1af7e7,
      JS_Eval_OpenURL: _0x4de9de,
      JS_FileSystem_Initialize: _0x1e39b,
      JS_FileSystem_Sync: _0x152f1a,
      JS_GravitySensor_IsRunning: _0x2dcf12,
      JS_GravitySensor_Start: _0x476de2,
      JS_GravitySensor_Stop: _0xea4f44,
      JS_GuardAgainstJsExceptions: _0x15f091,
      JS_Gyroscope_IsRunning: _0x2a00fd,
      JS_Gyroscope_Start: _0x413728,
      JS_Gyroscope_Stop: _0x559e39,
      JS_Init_ContextMenuHandler: _0x196995,
      JS_LinearAccelerationSensor_IsRunning: _0x54f4a0,
      JS_LinearAccelerationSensor_Start: _0x3b6205,
      JS_LinearAccelerationSensor_Stop: _0x3e7ac6,
      JS_Log_Dump: _0xff8b8f,
      JS_Log_StackTrace: _0x1ab271,
      JS_MobileKeybard_GetIgnoreBlurEvent: _0x53d0eb,
      JS_MobileKeyboard_GetKeyboardStatus: _0x328692,
      JS_MobileKeyboard_GetText: _0x9900bf,
      JS_MobileKeyboard_GetTextSelection: _0x3c56b2,
      JS_MobileKeyboard_Hide: _0x1d4212,
      JS_MobileKeyboard_SetCharacterLimit: _0x38fdde,
      JS_MobileKeyboard_SetText: _0x22d3e7,
      JS_MobileKeyboard_SetTextSelection: _0x27fe08,
      JS_MobileKeyboard_Show: _0x4e4148,
      JS_OrientationSensor_IsRunning: _0x58212f,
      JS_OrientationSensor_Start: _0x5ae362,
      JS_OrientationSensor_Stop: _0x3f4ec6,
      JS_RequestDeviceSensorPermissionsOnTouch: _0x2b7717,
      JS_RunQuitCallbacks: _0x478855,
      JS_ScreenOrientation_DeInit: _0x371edf,
      JS_ScreenOrientation_Init: _0x1fe24f,
      JS_ScreenOrientation_Lock: _0x5adb83,
      JS_Sound_Create_Channel: _0x37643e,
      JS_Sound_GetAudioBufferSampleRate: _0x20bb86,
      JS_Sound_GetAudioContextSampleRate: _0x13fc81,
      JS_Sound_GetLength: _0x50b431,
      JS_Sound_GetLoadState: _0xf3f953,
      JS_Sound_Init: _0x302b28,
      JS_Sound_IsStopped: _0x545aef,
      JS_Sound_Load: _0xfdff7,
      JS_Sound_Load_PCM: _0xf9a35c,
      JS_Sound_Play: _0x5c9d95,
      JS_Sound_ReleaseInstance: _0x27c6d0,
      JS_Sound_ResumeIfNeeded: _0x51d395,
      JS_Sound_Set3D: _0x3f72f6,
      JS_Sound_SetListenerOrientation: _0x441383,
      JS_Sound_SetListenerPosition: _0x4ef090,
      JS_Sound_SetLoop: _0x484cc2,
      JS_Sound_SetLoopPoints: _0x50426d,
      JS_Sound_SetPaused: _0x2cb017,
      JS_Sound_SetPitch: _0x1f1d0d,
      JS_Sound_SetPosition: _0x598625,
      JS_Sound_SetVolume: _0x53bfae,
      JS_Sound_Stop: _0x41cf4a,
      JS_SystemInfo_GetBrowserName: _0x9d7d0f,
      JS_SystemInfo_GetBrowserVersionString: _0x4dc18e,
      JS_SystemInfo_GetCanvasClientSize: _0x1b2fa5,
      JS_SystemInfo_GetDocumentURL: _0x1c767c,
      JS_SystemInfo_GetGPUInfo: _0x5a49e5,
      JS_SystemInfo_GetLanguage: _0x4e215a,
      JS_SystemInfo_GetMatchWebGLToCanvasSize: _0x41a602,
      JS_SystemInfo_GetMemory: _0x3c78ce,
      JS_SystemInfo_GetOS: _0x42017b,
      JS_SystemInfo_GetPreferredDevicePixelRatio: _0x3f86de,
      JS_SystemInfo_GetScreenSize: _0x4f67e0,
      JS_SystemInfo_GetStreamingAssetsURL: _0x1e8ddb,
      JS_SystemInfo_HasAstcHdr: _0x1d8815,
      JS_SystemInfo_HasCursorLock: _0x295863,
      JS_SystemInfo_HasFullscreen: _0x562317,
      JS_SystemInfo_HasWebGL: _0x26b908,
      JS_UnityEngineShouldQuit: _0x110ba0,
      JS_WebRequest_Abort: _0x167a20,
      JS_WebRequest_Create: _0xd08161,
      JS_WebRequest_GetResponseMetaData: _0x1ed0ab,
      JS_WebRequest_GetResponseMetaDataLengths: _0x26a6f1,
      JS_WebRequest_Release: _0x48b7b8,
      JS_WebRequest_Send: _0x20dce0,
      JS_WebRequest_SetRedirectLimit: _0x542eba,
      JS_WebRequest_SetRequestHeader: _0x5071f7,
      JS_WebRequest_SetTimeout: _0x4b8eb3,
      ListenForChildAdded: _0x4a9384,
      ListenForChildChanged: _0x318d33,
      ListenForChildRemoved: _0x241b4c,
      ListenForCollectionChange: _0x38b595,
      ListenForDocumentChange: _0x7f9b56,
      ListenForValueChanged: _0x4a848d,
      LogEvent: _0x573559,
      LogEventParameter: _0x18812a,
      ModifyNumberWithTransaction: _0x3c2b5b,
      OnAuthStateChanged: _0x382a84,
      Ping: _0x53a6b8,
      PostJSON: _0x3c52a7,
      PushJSON: _0x5ba2b1,
      RedirectDomain: _0x203e71,
      RefetchReward: _0x3e2332,
      RegisterGameControls: _0x23c6f0,
      RegisterRewardCallbacks: _0x33eb3a,
      RemoveElementInArrayField: _0x1d4be1,
      RequestAdSDK: _0x465f24,
      RequestBannersSDK: _0x18f77a,
      RequestInviteUrlSDK: _0x8818d2,
      SDK_Init: _0x2e73b5,
      SDK_PreloadAd: _0x3a3b16,
      SDK_SendEvent: _0x314774,
      SDK_ShowAd: _0x2705a1,
      SetDocument: _0x32bc34,
      SetUserProperties: _0x31e244,
      ShowAccountLinkPromptSDK: _0x248b97,
      ShowAuthPromptSDK: _0x57fead,
      ShowInviteButtonSDK: _0x1a6457,
      ShowRewardAdCallback: _0x3491b4,
      SignInAnonymously: _0x20fd0c,
      SignInWithEmailAndPassword: _0x159947,
      SignInWithFacebook: _0x4664c4,
      SignInWithGoogle: _0x2b543f,
      StopListeningForChildAdded: _0x3cfcd2,
      StopListeningForChildChanged: _0x133ed8,
      StopListeningForChildRemoved: _0x21882a,
      StopListeningForCollectionChange: _0x20b977,
      StopListeningForDocumentChange: _0x34ee6a,
      StopListeningForValueChanged: _0x6f8a6f,
      SyncUnityGameDataSDK: _0x341df0,
      ToggleBooleanWithTransaction: _0x263d58,
      UpdateDocument: _0xc22b2a,
      UpdateJSON: _0x181e9e,
      UploadFile: _0x177b45,
      XHR_Abort: _0x521218,
      XHR_Create: _0x3da137,
      XHR_Release: _0x15add3,
      XHR_Send: _0xeb5372,
      XHR_SetLoglevel: _0x9e2441,
      XHR_SetProgressHandler: _0x1bbe9f,
      XHR_SetRequestHeader: _0x459ad5,
      XHR_SetResponseHandler: _0x45b521,
      XHR_SetTimeout: _0x30c087,
      __cxa_allocate_exception: _0x183806,
      __cxa_begin_catch: _0x52ad8c,
      __cxa_end_catch: _0x9119dd,
      __cxa_find_matching_catch_2: _0x32e5db,
      __cxa_find_matching_catch_3: _0x5a87fd,
      __cxa_find_matching_catch_4: _0x163fa4,
      __cxa_free_exception: _0xecb4a5,
      __cxa_rethrow: _0x46ea2b,
      __cxa_throw: _0x391141,
      __resumeException: _0x376add,
      __syscall__newselect: _0x2e2b40,
      __syscall_accept4: _0x2b1430,
      __syscall_bind: _0x2cfb8b,
      __syscall_chmod: _0x2295f3,
      __syscall_connect: _0x24c6b8,
      __syscall_dup3: _0x21ef78,
      __syscall_faccessat: _0x303d7e,
      __syscall_fcntl64: _0x2fcff3,
      __syscall_fstat64: _0x28d2c,
      __syscall_ftruncate64: _0x550fcc,
      __syscall_getcwd: _0x225d0f,
      __syscall_getdents64: _0x49401f,
      __syscall_getpeername: _0x3f428f,
      __syscall_getsockname: _0x480fa1,
      __syscall_getsockopt: _0x7d7bd3,
      __syscall_ioctl: _0x2413be,
      __syscall_listen: _0x5af803,
      __syscall_lstat64: _0x301fbf,
      __syscall_mkdir: _0x26781e,
      __syscall_newfstatat: _0x21399f,
      __syscall_openat: _0x1887dc,
      __syscall_pipe: _0x5adbe1,
      __syscall_poll: _0x23307d,
      __syscall_readlinkat: _0x452d9c,
      __syscall_recvfrom: _0x2f79fe,
      __syscall_recvmsg: _0x2d20ec,
      __syscall_renameat: _0x59c29d,
      __syscall_rmdir: _0x5d6e5c,
      __syscall_sendmsg: _0x47770a,
      __syscall_sendto: _0x32c423,
      __syscall_socket: _0xf3c46a,
      __syscall_stat64: _0x49c5b1,
      __syscall_statfs64: _0x57072f,
      __syscall_symlink: _0xb18b36,
      __syscall_truncate64: _0x19a936,
      __syscall_unlinkat: _0x75634a,
      __syscall_utimensat: _0x370939,
      _dlopen_js: _0x2c73b4,
      _dlsym_js: _0x3c5ac8,
      _emscripten_date_now: _0x430708,
      _emscripten_get_now_is_monotonic: _0x1b5957,
      _emscripten_throw_longjmp: _0x26127a,
      _gmtime_js: _0x300d0a,
      _localtime_js: _0x17f61f,
      _mktime_js: _0x35e765,
      _mmap_js: _0x4e4c90,
      _munmap_js: _0x58d8cf,
      _tzset_js: _0x1db139,
      abort: _0x1cc5a6,
      emscripten_asm_const_int_sync_on_main_thread: _0x2e0685,
      emscripten_cancel_main_loop: _0x40bb1a,
      emscripten_clear_interval: _0x465ec9,
      emscripten_exit_fullscreen: _0x353469,
      emscripten_exit_pointerlock: _0x81a2c8,
      emscripten_get_canvas_element_size: _0x4e5688,
      emscripten_get_fullscreen_status: _0x5ca99b,
      emscripten_get_gamepad_status: _0x32523f,
      emscripten_get_heap_max: _0x1f438a,
      emscripten_get_now: _0x1b9e3f,
      emscripten_get_now_res: _0x6c3555,
      emscripten_get_num_gamepads: _0xce5bc5,
      emscripten_html5_remove_all_event_listeners: _0x6370c5,
      emscripten_is_webgl_context_lost: _0x8340e6,
      emscripten_log: _0x387dd5,
      emscripten_memcpy_big: _0x37d271,
      emscripten_request_fullscreen: _0x9af776,
      emscripten_request_pointerlock: _0x1f3bf6,
      emscripten_resize_heap: _0x1fc2de,
      emscripten_sample_gamepad_data: _0x5bbf56,
      emscripten_set_blur_callback_on_thread: _0xe46d76,
      emscripten_set_canvas_element_size: _0x1105c1,
      emscripten_set_focus_callback_on_thread: _0xbaff66,
      emscripten_set_fullscreenchange_callback_on_thread: _0x3e306b,
      emscripten_set_gamepadconnected_callback_on_thread: _0x369a3c,
      emscripten_set_gamepaddisconnected_callback_on_thread: _0x5d987d,
      emscripten_set_interval: _0x2f14bd,
      emscripten_set_keydown_callback_on_thread: _0x2e8e72,
      emscripten_set_keypress_callback_on_thread: _0x48f4af,
      emscripten_set_keyup_callback_on_thread: _0x5a95ff,
      emscripten_set_main_loop: _0x5a36ef,
      emscripten_set_main_loop_timing: _0x4d5bf9,
      emscripten_set_mousedown_callback_on_thread: _0x25f56a,
      emscripten_set_mousemove_callback_on_thread: _0x4ae351,
      emscripten_set_mouseup_callback_on_thread: _0x5893c8,
      emscripten_set_pointerlockchange_callback_on_thread: _0x433176,
      emscripten_set_touchcancel_callback_on_thread: _0x3dbd57,
      emscripten_set_touchend_callback_on_thread: _0x35c8f8,
      emscripten_set_touchmove_callback_on_thread: _0x1fc03d,
      emscripten_set_touchstart_callback_on_thread: _0x4178bc,
      emscripten_set_wheel_callback_on_thread: _0x357326,
      emscripten_webgl_create_context: _0x13de3b,
      emscripten_webgl_destroy_context: _0x3f971a,
      emscripten_webgl_enable_extension: _0x39ebd6,
      emscripten_webgl_get_current_context: _0x464c17,
      emscripten_webgl_init_context_attributes: _0x1ef658,
      emscripten_webgl_make_context_current: _0x270de2,
      environ_get: _0x2e6a1d,
      environ_sizes_get: _0x4c20db,
      exit: _0x442607,
      fd_close: _0x1d13e6,
      fd_fdstat_get: _0x19c5cd,
      fd_read: _0x41c955,
      fd_seek: _0x261124,
      fd_write: _0x394562,
      getTempRet0: _0x1a4bc8,
      getaddrinfo: _0x3327a4,
      gethostbyaddr: _0x4de21a,
      gethostbyname: _0x56ebd2,
      getnameinfo: _0x3d1587,
      glActiveTexture: _0x12ad07,
      glAttachShader: _0x59e3bb,
      glBeginQuery: _0x260378,
      glBindAttribLocation: _0xf9aec6,
      glBindBuffer: _0x288314,
      glBindBufferBase: _0x2711dc,
      glBindBufferRange: _0x3090d0,
      glBindFramebuffer: _0x16c149,
      glBindRenderbuffer: _0x1d5e08,
      glBindSampler: _0x327bbc,
      glBindTexture: _0x48b9f4,
      glBindVertexArray: _0x50a0e3,
      glBlendEquation: _0x5e94eb,
      glBlendEquationSeparate: _0x15a679,
      glBlendFuncSeparate: _0x408825,
      glBlitFramebuffer: _0xef3554,
      glBufferData: _0x2053bb,
      glBufferSubData: _0xc61163,
      glCheckFramebufferStatus: _0x35c248,
      glClear: _0x253924,
      glClearBufferfi: _0x4f8d20,
      glClearBufferfv: _0x422406,
      glClearBufferuiv: _0x21d06c,
      glClearColor: _0x2b2bc7,
      glClearDepthf: _0x4e07d0,
      glClearStencil: _0x3b9b0d,
      glClientWaitSync: _0x29681b,
      glColorMask: _0x336620,
      glCompileShader: _0x472a4d,
      glCompressedTexImage2D: _0x17b4f2,
      glCompressedTexImage3D: _0x2b144c,
      glCompressedTexSubImage2D: _0x132fbe,
      glCompressedTexSubImage3D: _0x293b85,
      glCopyBufferSubData: _0x13a8df,
      glCopyTexImage2D: _0x4c5c81,
      glCopyTexSubImage2D: _0x12fbd1,
      glCreateProgram: _0x5c193e,
      glCreateShader: _0x395f3c,
      glCullFace: _0x3add7b,
      glDeleteBuffers: _0x2fc989,
      glDeleteFramebuffers: _0x51f3f9,
      glDeleteProgram: _0x29a434,
      glDeleteQueries: _0x2dd984,
      glDeleteRenderbuffers: _0x3297ed,
      glDeleteSamplers: _0x5e4d29,
      glDeleteShader: _0x5947c9,
      glDeleteSync: _0x2c8fbd,
      glDeleteTextures: _0x45612c,
      glDeleteVertexArrays: _0x3b8444,
      glDepthFunc: _0xd29aaf,
      glDepthMask: _0x46fe1e,
      glDetachShader: _0x4936b7,
      glDisable: _0x244792,
      glDisableVertexAttribArray: _0x3858e1,
      glDrawArrays: _0x3a8f75,
      glDrawArraysInstanced: _0x559898,
      glDrawBuffers: _0x55b123,
      glDrawElements: _0x19e536,
      glDrawElementsInstanced: _0x353264,
      glEnable: _0x27170f,
      glEnableVertexAttribArray: _0x1ff111,
      glEndQuery: _0x86eb3e,
      glFenceSync: _0x4f9aae,
      glFinish: _0x20adbe,
      glFlush: _0x346e79,
      glFlushMappedBufferRange: _0x17218a,
      glFramebufferRenderbuffer: _0x34bf17,
      glFramebufferTexture2D: _0x4b5aae,
      glFramebufferTextureLayer: _0x3c0a32,
      glFrontFace: _0x2e67f9,
      glGenBuffers: _0x3411c9,
      glGenFramebuffers: _0x2c9c61,
      glGenQueries: _0x3d206c,
      glGenRenderbuffers: _0x596507,
      glGenSamplers: _0x23959f,
      glGenTextures: _0x5b5a72,
      glGenVertexArrays: _0x1a5a5,
      glGenerateMipmap: _0x11a01f,
      glGetActiveAttrib: _0x5c3e4d,
      glGetActiveUniform: _0x3e5cf1,
      glGetActiveUniformBlockName: _0x480fea,
      glGetActiveUniformBlockiv: _0x13f63e,
      glGetActiveUniformsiv: _0x3d92da,
      glGetAttribLocation: _0x3bf5d5,
      glGetBufferSubData: _0x179b3c,
      glGetError: _0x6c1a5b,
      glGetFramebufferAttachmentParameteriv: _0x38e955,
      glGetIntegeri_v: _0x2868ff,
      glGetIntegerv: _0x216130,
      glGetInternalformativ: _0x5c437a,
      glGetProgramBinary: _0x2e5ea0,
      glGetProgramInfoLog: _0x548769,
      glGetProgramiv: _0x433086,
      glGetQueryObjectuiv: _0x542a1b,
      glGetQueryiv: _0x4fabc0,
      glGetRenderbufferParameteriv: _0x16c70b,
      glGetShaderInfoLog: _0x45ccbe,
      glGetShaderPrecisionFormat: _0xfcc68,
      glGetShaderSource: _0x1e0c9d,
      glGetShaderiv: _0x177fbc,
      glGetString: _0x3f195a,
      glGetStringi: _0x1cc2c2,
      glGetTexParameteriv: _0x53ab34,
      glGetUniformBlockIndex: _0x544f30,
      glGetUniformIndices: _0x248711,
      glGetUniformLocation: _0x275199,
      glGetUniformiv: _0x4dd694,
      glGetVertexAttribiv: _0x8008a7,
      glInvalidateFramebuffer: _0x32e176,
      glIsEnabled: _0x1ced5e,
      glIsVertexArray: _0x5e367a,
      glLinkProgram: _0x58fbca,
      glMapBufferRange: _0x16ebe3,
      glPixelStorei: _0x68781b,
      glPolygonOffset: _0x536295,
      glProgramBinary: _0x14746d,
      glProgramParameteri: _0x323ab6,
      glReadBuffer: _0x111d11,
      glReadPixels: _0x3924b2,
      glRenderbufferStorage: _0x4c920a,
      glRenderbufferStorageMultisample: _0x2e0c85,
      glSamplerParameteri: _0xc06aff,
      glScissor: _0x565527,
      glShaderSource: _0x16329f,
      glStencilFuncSeparate: _0x58260a,
      glStencilMask: _0x253870,
      glStencilOpSeparate: _0x58570a,
      glTexImage2D: _0x5e4b0e,
      glTexImage3D: _0x155a5b,
      glTexParameterf: _0x5cd78b,
      glTexParameteri: _0x2598f0,
      glTexParameteriv: _0x435fb3,
      glTexStorage2D: _0x365b42,
      glTexStorage3D: _0x802f7d,
      glTexSubImage2D: _0x193cc0,
      glTexSubImage3D: _0x5e704c,
      glUniform1fv: _0x34377d,
      glUniform1i: _0x240d60,
      glUniform1iv: _0xb3ebca,
      glUniform1uiv: _0x5553a4,
      glUniform2fv: _0x15a13e,
      glUniform2iv: _0x2aa3a4,
      glUniform2uiv: _0x3a2431,
      glUniform3fv: _0x431e1e,
      glUniform3iv: _0x4670b7,
      glUniform3uiv: _0x93694a,
      glUniform4fv: _0x39c65b,
      glUniform4iv: _0x584760,
      glUniform4uiv: _0x1b4ee8,
      glUniformBlockBinding: _0x1011fc,
      glUniformMatrix3fv: _0x125d5a,
      glUniformMatrix4fv: _0x689cc5,
      glUnmapBuffer: _0x1de3cf,
      glUseProgram: _0x1bc71f,
      glValidateProgram: _0x2af17e,
      glVertexAttrib4f: _0x358d70,
      glVertexAttrib4fv: _0x24ff06,
      glVertexAttribIPointer: _0x1d9ea2,
      glVertexAttribPointer: _0x4144d6,
      glViewport: _0xcfc2ea,
      invoke_dddi: _0x5ab664,
      invoke_ddiii: _0x357a81,
      invoke_dii: _0x1028c1,
      invoke_diidi: _0x8af767,
      invoke_diii: _0x106775,
      invoke_diiii: _0x29e51c,
      invoke_dji: _0x1809a7,
      invoke_fffi: _0x2c3c58,
      invoke_fi: _0x4662c8,
      invoke_fii: _0x348491,
      invoke_fiifi: _0x53ed58,
      invoke_fiii: _0x4f8860,
      invoke_fiiii: _0x105839,
      invoke_i: _0x4fd677,
      invoke_idi: _0x29532a,
      invoke_ifi: _0x13395e,
      invoke_ii: _0x45798b,
      invoke_iidi: _0x344098,
      invoke_iifi: _0x1188f8,
      invoke_iii: _0x49a667,
      invoke_iiid: _0x18ae50,
      invoke_iiidii: _0x411405,
      invoke_iiidiii: _0x2bab1b,
      invoke_iiifi: _0x3f99ae,
      invoke_iiifii: _0x34a877,
      invoke_iiii: _0x5ef164,
      invoke_iiiidii: _0x1556da,
      invoke_iiiifi: _0x49b249,
      invoke_iiiifii: _0x65aae1,
      invoke_iiiii: _0x5f3379,
      invoke_iiiiii: _0x1cbc46,
      invoke_iiiiiii: _0x2270f1,
      invoke_iiiiiiii: _0x41df3a,
      invoke_iiiiiiiii: _0x359e00,
      invoke_iiiiiiiiii: _0x3d04ca,
      invoke_iiiiiiiiiii: _0x225436,
      invoke_iiiiiiiiiji: _0x182ee0,
      invoke_iiiiij: _0x51e616,
      invoke_iiiijii: _0x565d43,
      invoke_iiiijjii: _0x279f63,
      invoke_iiij: _0x15173e,
      invoke_iiiji: _0x5dd860,
      invoke_iiijii: _0x52f3d7,
      invoke_iiijiii: _0x24ef61,
      invoke_iij: _0x216e5e,
      invoke_iiji: _0x161df5,
      invoke_iijii: _0x24b344,
      invoke_iijiii: _0xb35b56,
      invoke_iijiiiiii: _0x199e1e,
      invoke_iijji: _0x40500c,
      invoke_iijjiiiiii: _0x34f976,
      invoke_iji: _0xad21ae,
      invoke_ijiii: _0x44ba41,
      invoke_ijji: _0x4c5420,
      invoke_j: _0x2c0771,
      invoke_jdi: _0x2b6f76,
      invoke_ji: _0x37e8ef,
      invoke_jidi: _0xdb3074,
      invoke_jii: _0x38feeb,
      invoke_jiii: _0x208e01,
      invoke_jiiii: _0x91cb8,
      invoke_jiiiii: _0x4546c0,
      invoke_jiiiiiiiiii: _0x143ebb,
      invoke_jiiji: _0x493598,
      invoke_jiji: _0x474f2f,
      invoke_jijii: _0x2aa6f7,
      invoke_jji: _0x25a6a4,
      invoke_jjii: _0x48ffae,
      invoke_jjji: _0x2fd4d3,
      invoke_v: _0x507e2a,
      invoke_vi: _0x1b403c,
      invoke_vidd: _0x43c8bf,
      invoke_vidi: _0x2d7dea,
      invoke_viffi: _0x3b0bcf,
      invoke_vifi: _0x29aea3,
      invoke_vifii: _0xdfbc6,
      invoke_vii: _0x4f938e,
      invoke_viid: _0x444150,
      invoke_viidi: _0x2497ef,
      invoke_viif: _0x100f8d,
      invoke_viiffi: _0x5cdc1a,
      invoke_viifi: _0x1748f4,
      invoke_viifii: _0x3bd584,
      invoke_viii: _0x57bbd1,
      invoke_viiidii: _0x81663a,
      invoke_viiii: _0x13d6cb,
      invoke_viiiifi: _0x24ecf4,
      invoke_viiiii: _0x4ec25b,
      invoke_viiiiii: _0x116e42,
      invoke_viiiiiifddfiiii: _0x195b24,
      invoke_viiiiiiffffiiii: _0x1b5edf,
      invoke_viiiiiifiifiiii: _0x5d943d,
      invoke_viiiiiifjjfiiii: _0x20b476,
      invoke_viiiiiii: _0x331ad1,
      invoke_viiiiiiii: _0x4419f7,
      invoke_viiiiiiiii: _0x44db83,
      invoke_viiiiiiiiii: _0x112ded,
      invoke_viiiiiiiiiiii: _0x1685a6,
      invoke_viiiiiiiiiiiii: _0x27db1c,
      invoke_viiiijiii: _0x5c03e4,
      invoke_viiiji: _0x1107d0,
      invoke_viij: _0x421027,
      invoke_viiji: _0x58a9d6,
      invoke_viijii: _0x1de423,
      invoke_viijiii: _0x1ffd45,
      invoke_viijiiijiiii: _0xeb6a15,
      invoke_viijji: _0x57c084,
      invoke_viji: _0x39e013,
      invoke_vijii: _0x2ef832,
      invoke_vijiii: _0x41a717,
      invoke_vijiiii: _0x575a9a,
      invoke_vijijii: _0x262ef6,
      invoke_vijji: _0x324579,
      invoke_vijjji: _0x434c80,
      invoke_vji: _0x39d53c,
      invoke_vjiii: _0x10e1da,
      invoke_vjiiiii: _0x1b8735,
      invoke_vjiiiiii: _0x1bea50,
      invoke_vjjjiiii: _0x5600de,
      llvm_eh_typeid_for: _0x3b6fd6,
      setTempRet0: _0x2dbb7c,
      strftime: _0x27c394
    };
    var _0x16e8e1 = _0x27b938();
    var _0xbab21e = _0x17aa78.___wasm_call_ctors = function () {
      return (_0xbab21e = _0x17aa78.___wasm_call_ctors = _0x17aa78.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var _0x5060a0 = _0x17aa78._ReleaseKeys = function () {
      return (_0x5060a0 = _0x17aa78._ReleaseKeys = _0x17aa78.asm.ReleaseKeys).apply(null, arguments);
    };
    var _0x34696d = _0x17aa78._getMemInfo = function () {
      return (_0x34696d = _0x17aa78._getMemInfo = _0x17aa78.asm.getMemInfo).apply(null, arguments);
    };
    var _0x5f229b = _0x17aa78._SendMessageFloat = function () {
      return (_0x5f229b = _0x17aa78._SendMessageFloat = _0x17aa78.asm.SendMessageFloat).apply(null, arguments);
    };
    var _0x458b60 = _0x17aa78._SendMessageString = function () {
      return (_0x458b60 = _0x17aa78._SendMessageString = _0x17aa78.asm.SendMessageString).apply(null, arguments);
    };
    var _0x18d1ec = _0x17aa78._SendMessage = function () {
      return (_0x18d1ec = _0x17aa78._SendMessage = _0x17aa78.asm.SendMessage).apply(null, arguments);
    };
    var _0x5c6f4e = _0x17aa78._SetFullscreen = function () {
      return (_0x5c6f4e = _0x17aa78._SetFullscreen = _0x17aa78.asm.SetFullscreen).apply(null, arguments);
    };
    var _0x3a16e0 = _0x17aa78._main = function () {
      return (_0x3a16e0 = _0x17aa78._main = _0x17aa78.asm.main).apply(null, arguments);
    };
    var _0x6cabf5 = _0x17aa78.___errno_location = function () {
      return (_0x6cabf5 = _0x17aa78.___errno_location = _0x17aa78.asm.__errno_location).apply(null, arguments);
    };
    var _0x249677 = _0x17aa78.___dl_seterr = function () {
      return (_0x249677 = _0x17aa78.___dl_seterr = _0x17aa78.asm.__dl_seterr).apply(null, arguments);
    };
    var _0x1a7842 = _0x17aa78._htonl = function () {
      return (_0x1a7842 = _0x17aa78._htonl = _0x17aa78.asm.htonl).apply(null, arguments);
    };
    var _0x5e39e7 = _0x17aa78._htons = function () {
      return (_0x5e39e7 = _0x17aa78._htons = _0x17aa78.asm.htons).apply(null, arguments);
    };
    var _0x5181e6 = _0x17aa78._ntohs = function () {
      return (_0x5181e6 = _0x17aa78._ntohs = _0x17aa78.asm.ntohs).apply(null, arguments);
    };
    var _0x9c787a = _0x17aa78._strlen = function () {
      return (_0x9c787a = _0x17aa78._strlen = _0x17aa78.asm.strlen).apply(null, arguments);
    };
    var _0x302e44 = _0x17aa78._malloc = function () {
      return (_0x302e44 = _0x17aa78._malloc = _0x17aa78.asm.malloc).apply(null, arguments);
    };
    var _0x1e689c = _0x17aa78._free = function () {
      return (_0x1e689c = _0x17aa78._free = _0x17aa78.asm.free).apply(null, arguments);
    };
    var _0x4ed481 = _0x17aa78._emscripten_builtin_memalign = function () {
      return (_0x4ed481 = _0x17aa78._emscripten_builtin_memalign = _0x17aa78.asm.emscripten_builtin_memalign).apply(null, arguments);
    };
    var _0x4ceae9 = _0x17aa78._setThrew = function () {
      return (_0x4ceae9 = _0x17aa78._setThrew = _0x17aa78.asm.setThrew).apply(null, arguments);
    };
    var _0x19ccb9 = _0x17aa78._saveSetjmp = function () {
      return (_0x19ccb9 = _0x17aa78._saveSetjmp = _0x17aa78.asm.saveSetjmp).apply(null, arguments);
    };
    var _0x47dca3 = _0x17aa78.stackSave = function () {
      return (_0x47dca3 = _0x17aa78.stackSave = _0x17aa78.asm.stackSave).apply(null, arguments);
    };
    var _0xafab9e = _0x17aa78.stackRestore = function () {
      return (_0xafab9e = _0x17aa78.stackRestore = _0x17aa78.asm.stackRestore).apply(null, arguments);
    };
    var _0x8020c5 = _0x17aa78.stackAlloc = function () {
      return (_0x8020c5 = _0x17aa78.stackAlloc = _0x17aa78.asm.stackAlloc).apply(null, arguments);
    };
    var _0x3c88da = _0x17aa78.___cxa_can_catch = function () {
      return (_0x3c88da = _0x17aa78.___cxa_can_catch = _0x17aa78.asm.__cxa_can_catch).apply(null, arguments);
    };
    var _0x2f7aed = _0x17aa78.___cxa_is_pointer_type = function () {
      return (_0x2f7aed = _0x17aa78.___cxa_is_pointer_type = _0x17aa78.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    var _0x4e82a8 = _0x17aa78.dynCall_iidiiii = function () {
      return (_0x4e82a8 = _0x17aa78.dynCall_iidiiii = _0x17aa78.asm.dynCall_iidiiii).apply(null, arguments);
    };
    var _0x34cbb3 = _0x17aa78.dynCall_vii = function () {
      return (_0x34cbb3 = _0x17aa78.dynCall_vii = _0x17aa78.asm.dynCall_vii).apply(null, arguments);
    };
    var _0x3427a6 = _0x17aa78.dynCall_iiii = function () {
      return (_0x3427a6 = _0x17aa78.dynCall_iiii = _0x17aa78.asm.dynCall_iiii).apply(null, arguments);
    };
    var _0x731b8d = _0x17aa78.dynCall_iii = function () {
      return (_0x731b8d = _0x17aa78.dynCall_iii = _0x17aa78.asm.dynCall_iii).apply(null, arguments);
    };
    var _0x399e12 = _0x17aa78.dynCall_ii = function () {
      return (_0x399e12 = _0x17aa78.dynCall_ii = _0x17aa78.asm.dynCall_ii).apply(null, arguments);
    };
    var _0xf5b5a1 = _0x17aa78.dynCall_jiji = function () {
      return (_0xf5b5a1 = _0x17aa78.dynCall_jiji = _0x17aa78.asm.dynCall_jiji).apply(null, arguments);
    };
    var _0x529933 = _0x17aa78.dynCall_vi = function () {
      return (_0x529933 = _0x17aa78.dynCall_vi = _0x17aa78.asm.dynCall_vi).apply(null, arguments);
    };
    var _0x137916 = _0x17aa78.dynCall_iiiii = function () {
      return (_0x137916 = _0x17aa78.dynCall_iiiii = _0x17aa78.asm.dynCall_iiiii).apply(null, arguments);
    };
    var _0x17e77d = _0x17aa78.dynCall_viii = function () {
      return (_0x17e77d = _0x17aa78.dynCall_viii = _0x17aa78.asm.dynCall_viii).apply(null, arguments);
    };
    var _0x2366b1 = _0x17aa78.dynCall_v = function () {
      return (_0x2366b1 = _0x17aa78.dynCall_v = _0x17aa78.asm.dynCall_v).apply(null, arguments);
    };
    var _0x1738f7 = _0x17aa78.dynCall_viiiiii = function () {
      return (_0x1738f7 = _0x17aa78.dynCall_viiiiii = _0x17aa78.asm.dynCall_viiiiii).apply(null, arguments);
    };
    var _0x51b946 = _0x17aa78.dynCall_viiiii = function () {
      return (_0x51b946 = _0x17aa78.dynCall_viiiii = _0x17aa78.asm.dynCall_viiiii).apply(null, arguments);
    };
    var _0x24cce8 = _0x17aa78.dynCall_viiii = function () {
      return (_0x24cce8 = _0x17aa78.dynCall_viiii = _0x17aa78.asm.dynCall_viiii).apply(null, arguments);
    };
    var _0x328299 = _0x17aa78.dynCall_iiiiii = function () {
      return (_0x328299 = _0x17aa78.dynCall_iiiiii = _0x17aa78.asm.dynCall_iiiiii).apply(null, arguments);
    };
    var _0x27d67f = _0x17aa78.dynCall_iiiiiiii = function () {
      return (_0x27d67f = _0x17aa78.dynCall_iiiiiiii = _0x17aa78.asm.dynCall_iiiiiiii).apply(null, arguments);
    };
    var _0x4cd5b9 = _0x17aa78.dynCall_iiijiii = function () {
      return (_0x4cd5b9 = _0x17aa78.dynCall_iiijiii = _0x17aa78.asm.dynCall_iiijiii).apply(null, arguments);
    };
    var _0x2c9b5e = _0x17aa78.dynCall_iij = function () {
      return (_0x2c9b5e = _0x17aa78.dynCall_iij = _0x17aa78.asm.dynCall_iij).apply(null, arguments);
    };
    var _0x867403 = _0x17aa78.dynCall_i = function () {
      return (_0x867403 = _0x17aa78.dynCall_i = _0x17aa78.asm.dynCall_i).apply(null, arguments);
    };
    var _0x410025 = _0x17aa78.dynCall_iiiiiii = function () {
      return (_0x410025 = _0x17aa78.dynCall_iiiiiii = _0x17aa78.asm.dynCall_iiiiiii).apply(null, arguments);
    };
    var _0x129621 = _0x17aa78.dynCall_jii = function () {
      return (_0x129621 = _0x17aa78.dynCall_jii = _0x17aa78.asm.dynCall_jii).apply(null, arguments);
    };
    var _0x5b8728 = _0x17aa78.dynCall_iijji = function () {
      return (_0x5b8728 = _0x17aa78.dynCall_iijji = _0x17aa78.asm.dynCall_iijji).apply(null, arguments);
    };
    var _0x2f752d = _0x17aa78.dynCall_iiddi = function () {
      return (_0x2f752d = _0x17aa78.dynCall_iiddi = _0x17aa78.asm.dynCall_iiddi).apply(null, arguments);
    };
    var _0x2fb6c0 = _0x17aa78.dynCall_iiffi = function () {
      return (_0x2fb6c0 = _0x17aa78.dynCall_iiffi = _0x17aa78.asm.dynCall_iiffi).apply(null, arguments);
    };
    var _0x28e8c1 = _0x17aa78.dynCall_iiiifii = function () {
      return (_0x28e8c1 = _0x17aa78.dynCall_iiiifii = _0x17aa78.asm.dynCall_iiiifii).apply(null, arguments);
    };
    var _0x2633f0 = _0x17aa78.dynCall_iiiijii = function () {
      return (_0x2633f0 = _0x17aa78.dynCall_iiiijii = _0x17aa78.asm.dynCall_iiiijii).apply(null, arguments);
    };
    var _0x4d57a9 = _0x17aa78.dynCall_iiiidii = function () {
      return (_0x4d57a9 = _0x17aa78.dynCall_iiiidii = _0x17aa78.asm.dynCall_iiiidii).apply(null, arguments);
    };
    var _0xc5193 = _0x17aa78.dynCall_viji = function () {
      return (_0xc5193 = _0x17aa78.dynCall_viji = _0x17aa78.asm.dynCall_viji).apply(null, arguments);
    };
    var _0xc81dc6 = _0x17aa78.dynCall_viiji = function () {
      return (_0xc81dc6 = _0x17aa78.dynCall_viiji = _0x17aa78.asm.dynCall_viiji).apply(null, arguments);
    };
    var _0x2b7e35 = _0x17aa78.dynCall_vidi = function () {
      return (_0x2b7e35 = _0x17aa78.dynCall_vidi = _0x17aa78.asm.dynCall_vidi).apply(null, arguments);
    };
    var _0x38508c = _0x17aa78.dynCall_vifi = function () {
      return (_0x38508c = _0x17aa78.dynCall_vifi = _0x17aa78.asm.dynCall_vifi).apply(null, arguments);
    };
    var _0x5d826e = _0x17aa78.dynCall_viiiiiiiiiiii = function () {
      return (_0x5d826e = _0x17aa78.dynCall_viiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3df42f = _0x17aa78.dynCall_viiiiiiiiiiiii = function () {
      return (_0x3df42f = _0x17aa78.dynCall_viiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x188445 = _0x17aa78.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x188445 = _0x17aa78.dynCall_viiiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3cf150 = _0x17aa78.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x3cf150 = _0x17aa78.dynCall_viiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x1c675b = _0x17aa78.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0x1c675b = _0x17aa78.dynCall_viiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x50b243 = _0x17aa78.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x50b243 = _0x17aa78.dynCall_viiiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x4a8d46 = _0x17aa78.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x4a8d46 = _0x17aa78.dynCall_viiiiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3c52db = _0x17aa78.dynCall_viifi = function () {
      return (_0x3c52db = _0x17aa78.dynCall_viifi = _0x17aa78.asm.dynCall_viifi).apply(null, arguments);
    };
    var _0x4561df = _0x17aa78.dynCall_vijii = function () {
      return (_0x4561df = _0x17aa78.dynCall_vijii = _0x17aa78.asm.dynCall_vijii).apply(null, arguments);
    };
    var _0x7e957a = _0x17aa78.dynCall_viidi = function () {
      return (_0x7e957a = _0x17aa78.dynCall_viidi = _0x17aa78.asm.dynCall_viidi).apply(null, arguments);
    };
    var _0x49ad99 = _0x17aa78.dynCall_viiidi = function () {
      return (_0x49ad99 = _0x17aa78.dynCall_viiidi = _0x17aa78.asm.dynCall_viiidi).apply(null, arguments);
    };
    var _0x1062d0 = _0x17aa78.dynCall_viiiji = function () {
      return (_0x1062d0 = _0x17aa78.dynCall_viiiji = _0x17aa78.asm.dynCall_viiiji).apply(null, arguments);
    };
    var _0x42f76c = _0x17aa78.dynCall_viiifi = function () {
      return (_0x42f76c = _0x17aa78.dynCall_viiifi = _0x17aa78.asm.dynCall_viiifi).apply(null, arguments);
    };
    var _0x43c231 = _0x17aa78.dynCall_vijijii = function () {
      return (_0x43c231 = _0x17aa78.dynCall_vijijii = _0x17aa78.asm.dynCall_vijijii).apply(null, arguments);
    };
    var _0x158723 = _0x17aa78.dynCall_viiiiiii = function () {
      return (_0x158723 = _0x17aa78.dynCall_viiiiiii = _0x17aa78.asm.dynCall_viiiiiii).apply(null, arguments);
    };
    var _0x4e1358 = _0x17aa78.dynCall_viiiiiiii = function () {
      return (_0x4e1358 = _0x17aa78.dynCall_viiiiiiii = _0x17aa78.asm.dynCall_viiiiiiii).apply(null, arguments);
    };
    var _0x251740 = _0x17aa78.dynCall_viiiiiiiii = function () {
      return (_0x251740 = _0x17aa78.dynCall_viiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiii).apply(null, arguments);
    };
    var _0x123fe6 = _0x17aa78.dynCall_viiiiiiiiii = function () {
      return (_0x123fe6 = _0x17aa78.dynCall_viiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiii).apply(null, arguments);
    };
    var _0x2a8c72 = _0x17aa78.dynCall_viiiiiiiiiii = function () {
      return (_0x2a8c72 = _0x17aa78.dynCall_viiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiii).apply(null, arguments);
    };
    var _0x522f6c = _0x17aa78.dynCall_iiifii = function () {
      return (_0x522f6c = _0x17aa78.dynCall_iiifii = _0x17aa78.asm.dynCall_iiifii).apply(null, arguments);
    };
    var _0x22ba71 = _0x17aa78.dynCall_viiiifii = function () {
      return (_0x22ba71 = _0x17aa78.dynCall_viiiifii = _0x17aa78.asm.dynCall_viiiifii).apply(null, arguments);
    };
    var _0x4b0074 = _0x17aa78.dynCall_viiffi = function () {
      return (_0x4b0074 = _0x17aa78.dynCall_viiffi = _0x17aa78.asm.dynCall_viiffi).apply(null, arguments);
    };
    var _0x1a9c40 = _0x17aa78.dynCall_j = function () {
      return (_0x1a9c40 = _0x17aa78.dynCall_j = _0x17aa78.asm.dynCall_j).apply(null, arguments);
    };
    var _0x4e670c = _0x17aa78.dynCall_ji = function () {
      return (_0x4e670c = _0x17aa78.dynCall_ji = _0x17aa78.asm.dynCall_ji).apply(null, arguments);
    };
    var _0x4f0023 = _0x17aa78.dynCall_viijji = function () {
      return (_0x4f0023 = _0x17aa78.dynCall_viijji = _0x17aa78.asm.dynCall_viijji).apply(null, arguments);
    };
    var _0x1c9557 = _0x17aa78.dynCall_jdi = function () {
      return (_0x1c9557 = _0x17aa78.dynCall_jdi = _0x17aa78.asm.dynCall_jdi).apply(null, arguments);
    };
    var _0x2558a4 = _0x17aa78.dynCall_vijiii = function () {
      return (_0x2558a4 = _0x17aa78.dynCall_vijiii = _0x17aa78.asm.dynCall_vijiii).apply(null, arguments);
    };
    var _0x326fb9 = _0x17aa78.dynCall_ijiii = function () {
      return (_0x326fb9 = _0x17aa78.dynCall_ijiii = _0x17aa78.asm.dynCall_ijiii).apply(null, arguments);
    };
    var _0x4b8601 = _0x17aa78.dynCall_iiji = function () {
      return (_0x4b8601 = _0x17aa78.dynCall_iiji = _0x17aa78.asm.dynCall_iiji).apply(null, arguments);
    };
    var _0x3d67f6 = _0x17aa78.dynCall_jji = function () {
      return (_0x3d67f6 = _0x17aa78.dynCall_jji = _0x17aa78.asm.dynCall_jji).apply(null, arguments);
    };
    var _0x2a47c2 = _0x17aa78.dynCall_jjji = function () {
      return (_0x2a47c2 = _0x17aa78.dynCall_jjji = _0x17aa78.asm.dynCall_jjji).apply(null, arguments);
    };
    var _0x202858 = _0x17aa78.dynCall_ijji = function () {
      return (_0x202858 = _0x17aa78.dynCall_ijji = _0x17aa78.asm.dynCall_ijji).apply(null, arguments);
    };
    var _0x266573 = _0x17aa78.dynCall_jiiii = function () {
      return (_0x266573 = _0x17aa78.dynCall_jiiii = _0x17aa78.asm.dynCall_jiiii).apply(null, arguments);
    };
    var _0xef254d = _0x17aa78.dynCall_iiijii = function () {
      return (_0xef254d = _0x17aa78.dynCall_iiijii = _0x17aa78.asm.dynCall_iiijii).apply(null, arguments);
    };
    var _0x8c96fa = _0x17aa78.dynCall_fiii = function () {
      return (_0x8c96fa = _0x17aa78.dynCall_fiii = _0x17aa78.asm.dynCall_fiii).apply(null, arguments);
    };
    var _0x54a87d = _0x17aa78.dynCall_fffi = function () {
      return (_0x54a87d = _0x17aa78.dynCall_fffi = _0x17aa78.asm.dynCall_fffi).apply(null, arguments);
    };
    var _0x2ec8b7 = _0x17aa78.dynCall_viifii = function () {
      return (_0x2ec8b7 = _0x17aa78.dynCall_viifii = _0x17aa78.asm.dynCall_viifii).apply(null, arguments);
    };
    var _0x3e1374 = _0x17aa78.dynCall_fiiffi = function () {
      return (_0x3e1374 = _0x17aa78.dynCall_fiiffi = _0x17aa78.asm.dynCall_fiiffi).apply(null, arguments);
    };
    var _0x16362e = _0x17aa78.dynCall_viiififii = function () {
      return (_0x16362e = _0x17aa78.dynCall_viiififii = _0x17aa78.asm.dynCall_viiififii).apply(null, arguments);
    };
    var _0x364174 = _0x17aa78.dynCall_vifii = function () {
      return (_0x364174 = _0x17aa78.dynCall_vifii = _0x17aa78.asm.dynCall_vifii).apply(null, arguments);
    };
    var _0x2523a8 = _0x17aa78.dynCall_iiiiiiiiiji = function () {
      return (_0x2523a8 = _0x17aa78.dynCall_iiiiiiiiiji = _0x17aa78.asm.dynCall_iiiiiiiiiji).apply(null, arguments);
    };
    var _0x167917 = _0x17aa78.dynCall_vji = function () {
      return (_0x167917 = _0x17aa78.dynCall_vji = _0x17aa78.asm.dynCall_vji).apply(null, arguments);
    };
    var _0x163d64 = _0x17aa78.dynCall_fi = function () {
      return (_0x163d64 = _0x17aa78.dynCall_fi = _0x17aa78.asm.dynCall_fi).apply(null, arguments);
    };
    var _0x52a03c = _0x17aa78.dynCall_iiiiiiiiii = function () {
      return (_0x52a03c = _0x17aa78.dynCall_iiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiii).apply(null, arguments);
    };
    var _0x890330 = _0x17aa78.dynCall_iiiiiiiii = function () {
      return (_0x890330 = _0x17aa78.dynCall_iiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };
    var _0x2d043c = _0x17aa78.dynCall_jjii = function () {
      return (_0x2d043c = _0x17aa78.dynCall_jjii = _0x17aa78.asm.dynCall_jjii).apply(null, arguments);
    };
    var _0x2bb254 = _0x17aa78.dynCall_dii = function () {
      return (_0x2bb254 = _0x17aa78.dynCall_dii = _0x17aa78.asm.dynCall_dii).apply(null, arguments);
    };
    var _0x55ed24 = _0x17aa78.dynCall_fii = function () {
      return (_0x55ed24 = _0x17aa78.dynCall_fii = _0x17aa78.asm.dynCall_fii).apply(null, arguments);
    };
    var _0x684dc7 = _0x17aa78.dynCall_ifi = function () {
      return (_0x684dc7 = _0x17aa78.dynCall_ifi = _0x17aa78.asm.dynCall_ifi).apply(null, arguments);
    };
    var _0x410351 = _0x17aa78.dynCall_idi = function () {
      return (_0x410351 = _0x17aa78.dynCall_idi = _0x17aa78.asm.dynCall_idi).apply(null, arguments);
    };
    var _0x1aee5b = _0x17aa78.dynCall_jiii = function () {
      return (_0x1aee5b = _0x17aa78.dynCall_jiii = _0x17aa78.asm.dynCall_jiii).apply(null, arguments);
    };
    var _0x3cd25b = _0x17aa78.dynCall_diii = function () {
      return (_0x3cd25b = _0x17aa78.dynCall_diii = _0x17aa78.asm.dynCall_diii).apply(null, arguments);
    };
    var _0x43793e = _0x17aa78.dynCall_iidi = function () {
      return (_0x43793e = _0x17aa78.dynCall_iidi = _0x17aa78.asm.dynCall_iidi).apply(null, arguments);
    };
    var _0x5f18b0 = _0x17aa78.dynCall_iifi = function () {
      return (_0x5f18b0 = _0x17aa78.dynCall_iifi = _0x17aa78.asm.dynCall_iifi).apply(null, arguments);
    };
    var _0xc22589 = _0x17aa78.dynCall_diiii = function () {
      return (_0xc22589 = _0x17aa78.dynCall_diiii = _0x17aa78.asm.dynCall_diiii).apply(null, arguments);
    };
    var _0x35f86c = _0x17aa78.dynCall_dddi = function () {
      return (_0x35f86c = _0x17aa78.dynCall_dddi = _0x17aa78.asm.dynCall_dddi).apply(null, arguments);
    };
    var _0x2a1ebf = _0x17aa78.dynCall_viijjii = function () {
      return (_0x2a1ebf = _0x17aa78.dynCall_viijjii = _0x17aa78.asm.dynCall_viijjii).apply(null, arguments);
    };
    var _0x54e2b8 = _0x17aa78.dynCall_iiiifi = function () {
      return (_0x54e2b8 = _0x17aa78.dynCall_iiiifi = _0x17aa78.asm.dynCall_iiiifi).apply(null, arguments);
    };
    var _0x120e27 = _0x17aa78.dynCall_viiidii = function () {
      return (_0x120e27 = _0x17aa78.dynCall_viiidii = _0x17aa78.asm.dynCall_viiidii).apply(null, arguments);
    };
    var _0x1d79a7 = _0x17aa78.dynCall_viiiifi = function () {
      return (_0x1d79a7 = _0x17aa78.dynCall_viiiifi = _0x17aa78.asm.dynCall_viiiifi).apply(null, arguments);
    };
    var _0x1d3d11 = _0x17aa78.dynCall_fifi = function () {
      return (_0x1d3d11 = _0x17aa78.dynCall_fifi = _0x17aa78.asm.dynCall_fifi).apply(null, arguments);
    };
    var _0x9a69ed = _0x17aa78.dynCall_fiffi = function () {
      return (_0x9a69ed = _0x17aa78.dynCall_fiffi = _0x17aa78.asm.dynCall_fiffi).apply(null, arguments);
    };
    var _0x3077a8 = _0x17aa78.dynCall_fifffi = function () {
      return (_0x3077a8 = _0x17aa78.dynCall_fifffi = _0x17aa78.asm.dynCall_fifffi).apply(null, arguments);
    };
    var _0x37b343 = _0x17aa78.dynCall_viidii = function () {
      return (_0x37b343 = _0x17aa78.dynCall_viidii = _0x17aa78.asm.dynCall_viidii).apply(null, arguments);
    };
    var _0x27c1b3 = _0x17aa78.dynCall_vijiiii = function () {
      return (_0x27c1b3 = _0x17aa78.dynCall_vijiiii = _0x17aa78.asm.dynCall_vijiiii).apply(null, arguments);
    };
    var _0xbd8084 = _0x17aa78.dynCall_viijii = function () {
      return (_0xbd8084 = _0x17aa78.dynCall_viijii = _0x17aa78.asm.dynCall_viijii).apply(null, arguments);
    };
    var _0x49005c = _0x17aa78.dynCall_viijiii = function () {
      return (_0x49005c = _0x17aa78.dynCall_viijiii = _0x17aa78.asm.dynCall_viijiii).apply(null, arguments);
    };
    var _0x4b5a55 = _0x17aa78.dynCall_vjiii = function () {
      return (_0x4b5a55 = _0x17aa78.dynCall_vjiii = _0x17aa78.asm.dynCall_vjiii).apply(null, arguments);
    };
    var _0xd3c2c1 = _0x17aa78.dynCall_vjiiiiii = function () {
      return (_0xd3c2c1 = _0x17aa78.dynCall_vjiiiiii = _0x17aa78.asm.dynCall_vjiiiiii).apply(null, arguments);
    };
    var _0x4c2cf1 = _0x17aa78.dynCall_vijiiiiii = function () {
      return (_0x4c2cf1 = _0x17aa78.dynCall_vijiiiiii = _0x17aa78.asm.dynCall_vijiiiiii).apply(null, arguments);
    };
    var _0x3fd37c = _0x17aa78.dynCall_iiiji = function () {
      return (_0x3fd37c = _0x17aa78.dynCall_iiiji = _0x17aa78.asm.dynCall_iiiji).apply(null, arguments);
    };
    var _0x1a1065 = _0x17aa78.dynCall_vijjji = function () {
      return (_0x1a1065 = _0x17aa78.dynCall_vijjji = _0x17aa78.asm.dynCall_vijjji).apply(null, arguments);
    };
    var _0x156cf6 = _0x17aa78.dynCall_iiiiij = function () {
      return (_0x156cf6 = _0x17aa78.dynCall_iiiiij = _0x17aa78.asm.dynCall_iiiiij).apply(null, arguments);
    };
    var _0x1f8d0a = _0x17aa78.dynCall_viijiiijiiii = function () {
      return (_0x1f8d0a = _0x17aa78.dynCall_viijiiijiiii = _0x17aa78.asm.dynCall_viijiiijiiii).apply(null, arguments);
    };
    var _0x4abb2e = _0x17aa78.dynCall_viiiijiii = function () {
      return (_0x4abb2e = _0x17aa78.dynCall_viiiijiii = _0x17aa78.asm.dynCall_viiiijiii).apply(null, arguments);
    };
    var _0x3edd87 = _0x17aa78.dynCall_jidi = function () {
      return (_0x3edd87 = _0x17aa78.dynCall_jidi = _0x17aa78.asm.dynCall_jidi).apply(null, arguments);
    };
    var _0x281dc7 = _0x17aa78.dynCall_iijii = function () {
      return (_0x281dc7 = _0x17aa78.dynCall_iijii = _0x17aa78.asm.dynCall_iijii).apply(null, arguments);
    };
    var _0x21ef9f = _0x17aa78.dynCall_diidi = function () {
      return (_0x21ef9f = _0x17aa78.dynCall_diidi = _0x17aa78.asm.dynCall_diidi).apply(null, arguments);
    };
    var _0x784e8f = _0x17aa78.dynCall_fiiii = function () {
      return (_0x784e8f = _0x17aa78.dynCall_fiiii = _0x17aa78.asm.dynCall_fiiii).apply(null, arguments);
    };
    var _0x2a74d1 = _0x17aa78.dynCall_jiiji = function () {
      return (_0x2a74d1 = _0x17aa78.dynCall_jiiji = _0x17aa78.asm.dynCall_jiiji).apply(null, arguments);
    };
    var _0x57590e = _0x17aa78.dynCall_fiifi = function () {
      return (_0x57590e = _0x17aa78.dynCall_fiifi = _0x17aa78.asm.dynCall_fiifi).apply(null, arguments);
    };
    var _0xb7426d = _0x17aa78.dynCall_jijii = function () {
      return (_0xb7426d = _0x17aa78.dynCall_jijii = _0x17aa78.asm.dynCall_jijii).apply(null, arguments);
    };
    var _0x4871b2 = _0x17aa78.dynCall_iijiiii = function () {
      return (_0x4871b2 = _0x17aa78.dynCall_iijiiii = _0x17aa78.asm.dynCall_iijiiii).apply(null, arguments);
    };
    var _0xb7f9a3 = _0x17aa78.dynCall_jijiii = function () {
      return (_0xb7f9a3 = _0x17aa78.dynCall_jijiii = _0x17aa78.asm.dynCall_jijiii).apply(null, arguments);
    };
    var _0x22c956 = _0x17aa78.dynCall_iijiiiiii = function () {
      return (_0x22c956 = _0x17aa78.dynCall_iijiiiiii = _0x17aa78.asm.dynCall_iijiiiiii).apply(null, arguments);
    };
    var _0x432297 = _0x17aa78.dynCall_iijjiiiiii = function () {
      return (_0x432297 = _0x17aa78.dynCall_iijjiiiiii = _0x17aa78.asm.dynCall_iijjiiiiii).apply(null, arguments);
    };
    var _0x4d4c1d = _0x17aa78.dynCall_iiiijjii = function () {
      return (_0x4d4c1d = _0x17aa78.dynCall_iiiijjii = _0x17aa78.asm.dynCall_iiiijjii).apply(null, arguments);
    };
    var _0x468f13 = _0x17aa78.dynCall_dji = function () {
      return (_0x468f13 = _0x17aa78.dynCall_dji = _0x17aa78.asm.dynCall_dji).apply(null, arguments);
    };
    var _0x23497a = _0x17aa78.dynCall_iji = function () {
      return (_0x23497a = _0x17aa78.dynCall_iji = _0x17aa78.asm.dynCall_iji).apply(null, arguments);
    };
    var _0x448846 = _0x17aa78.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x448846 = _0x17aa78.dynCall_viiiiiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_viiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x31ef06 = _0x17aa78.dynCall_didi = function () {
      return (_0x31ef06 = _0x17aa78.dynCall_didi = _0x17aa78.asm.dynCall_didi).apply(null, arguments);
    };
    var _0x1d2e12 = _0x17aa78.dynCall_iiiiji = function () {
      return (_0x1d2e12 = _0x17aa78.dynCall_iiiiji = _0x17aa78.asm.dynCall_iiiiji).apply(null, arguments);
    };
    var _0x39382e = _0x17aa78.dynCall_iiifi = function () {
      return (_0x39382e = _0x17aa78.dynCall_iiifi = _0x17aa78.asm.dynCall_iiifi).apply(null, arguments);
    };
    var _0x4258c2 = _0x17aa78.dynCall_ddiii = function () {
      return (_0x4258c2 = _0x17aa78.dynCall_ddiii = _0x17aa78.asm.dynCall_ddiii).apply(null, arguments);
    };
    var _0x289cce = _0x17aa78.dynCall_fiffffi = function () {
      return (_0x289cce = _0x17aa78.dynCall_fiffffi = _0x17aa78.asm.dynCall_fiffffi).apply(null, arguments);
    };
    var _0x42fc99 = _0x17aa78.dynCall_iijiii = function () {
      return (_0x42fc99 = _0x17aa78.dynCall_iijiii = _0x17aa78.asm.dynCall_iijiii).apply(null, arguments);
    };
    var _0x20b71b = _0x17aa78.dynCall_vjjjiiii = function () {
      return (_0x20b71b = _0x17aa78.dynCall_vjjjiiii = _0x17aa78.asm.dynCall_vjjjiiii).apply(null, arguments);
    };
    var _0xf82efc = _0x17aa78.dynCall_vjiiiii = function () {
      return (_0xf82efc = _0x17aa78.dynCall_vjiiiii = _0x17aa78.asm.dynCall_vjiiiii).apply(null, arguments);
    };
    var _0x3fcb9e = _0x17aa78.dynCall_jiiiii = function () {
      return (_0x3fcb9e = _0x17aa78.dynCall_jiiiii = _0x17aa78.asm.dynCall_jiiiii).apply(null, arguments);
    };
    var _0x49a193 = _0x17aa78.dynCall_viffi = function () {
      return (_0x49a193 = _0x17aa78.dynCall_viffi = _0x17aa78.asm.dynCall_viffi).apply(null, arguments);
    };
    var _0x183325 = _0x17aa78.dynCall_vffi = function () {
      return (_0x183325 = _0x17aa78.dynCall_vffi = _0x17aa78.asm.dynCall_vffi).apply(null, arguments);
    };
    var _0x47db8c = _0x17aa78.dynCall_viiifiii = function () {
      return (_0x47db8c = _0x17aa78.dynCall_viiifiii = _0x17aa78.asm.dynCall_viiifiii).apply(null, arguments);
    };
    var _0x23950c = _0x17aa78.dynCall_vifiiiii = function () {
      return (_0x23950c = _0x17aa78.dynCall_vifiiiii = _0x17aa78.asm.dynCall_vifiiiii).apply(null, arguments);
    };
    var _0x12fa80 = _0x17aa78.dynCall_viffffiiii = function () {
      return (_0x12fa80 = _0x17aa78.dynCall_viffffiiii = _0x17aa78.asm.dynCall_viffffiiii).apply(null, arguments);
    };
    var _0x7e679c = _0x17aa78.dynCall_vfiiiii = function () {
      return (_0x7e679c = _0x17aa78.dynCall_vfiiiii = _0x17aa78.asm.dynCall_vfiiiii).apply(null, arguments);
    };
    var _0xf45898 = _0x17aa78.dynCall_vffffiiii = function () {
      return (_0xf45898 = _0x17aa78.dynCall_vffffiiii = _0x17aa78.asm.dynCall_vffffiiii).apply(null, arguments);
    };
    var _0x592579 = _0x17aa78.dynCall_iifffi = function () {
      return (_0x592579 = _0x17aa78.dynCall_iifffi = _0x17aa78.asm.dynCall_iifffi).apply(null, arguments);
    };
    var _0x64b48d = _0x17aa78.dynCall_iiffffi = function () {
      return (_0x64b48d = _0x17aa78.dynCall_iiffffi = _0x17aa78.asm.dynCall_iiffffi).apply(null, arguments);
    };
    var _0x184622 = _0x17aa78.dynCall_iifii = function () {
      return (_0x184622 = _0x17aa78.dynCall_iifii = _0x17aa78.asm.dynCall_iifii).apply(null, arguments);
    };
    var _0x10de38 = _0x17aa78.dynCall_viiiifiii = function () {
      return (_0x10de38 = _0x17aa78.dynCall_viiiifiii = _0x17aa78.asm.dynCall_viiiifiii).apply(null, arguments);
    };
    var _0x536a93 = _0x17aa78.dynCall_viiiiiiiffiii = function () {
      return (_0x536a93 = _0x17aa78.dynCall_viiiiiiiffiii = _0x17aa78.asm.dynCall_viiiiiiiffiii).apply(null, arguments);
    };
    var _0x273ad5 = _0x17aa78.dynCall_viifffi = function () {
      return (_0x273ad5 = _0x17aa78.dynCall_viifffi = _0x17aa78.asm.dynCall_viifffi).apply(null, arguments);
    };
    var _0x3dade0 = _0x17aa78.dynCall_iiiiffi = function () {
      return (_0x3dade0 = _0x17aa78.dynCall_iiiiffi = _0x17aa78.asm.dynCall_iiiiffi).apply(null, arguments);
    };
    var _0xaf6228 = _0x17aa78.dynCall_iiiiiffi = function () {
      return (_0xaf6228 = _0x17aa78.dynCall_iiiiiffi = _0x17aa78.asm.dynCall_iiiiiffi).apply(null, arguments);
    };
    var _0x58e076 = _0x17aa78.dynCall_viiffffi = function () {
      return (_0x58e076 = _0x17aa78.dynCall_viiffffi = _0x17aa78.asm.dynCall_viiffffi).apply(null, arguments);
    };
    var _0x389d93 = _0x17aa78.dynCall_viifffffffi = function () {
      return (_0x389d93 = _0x17aa78.dynCall_viifffffffi = _0x17aa78.asm.dynCall_viifffffffi).apply(null, arguments);
    };
    var _0x1a7e04 = _0x17aa78.dynCall_viifffffffffi = function () {
      return (_0x1a7e04 = _0x17aa78.dynCall_viifffffffffi = _0x17aa78.asm.dynCall_viifffffffffi).apply(null, arguments);
    };
    var _0x3b5ea2 = _0x17aa78.dynCall_viiiffi = function () {
      return (_0x3b5ea2 = _0x17aa78.dynCall_viiiffi = _0x17aa78.asm.dynCall_viiiffi).apply(null, arguments);
    };
    var _0x5096cd = _0x17aa78.dynCall_viiiiffi = function () {
      return (_0x5096cd = _0x17aa78.dynCall_viiiiffi = _0x17aa78.asm.dynCall_viiiiffi).apply(null, arguments);
    };
    var _0x5b72ab = _0x17aa78.dynCall_viiiiifi = function () {
      return (_0x5b72ab = _0x17aa78.dynCall_viiiiifi = _0x17aa78.asm.dynCall_viiiiifi).apply(null, arguments);
    };
    var _0x375eba = _0x17aa78.dynCall_viiifii = function () {
      return (_0x375eba = _0x17aa78.dynCall_viiifii = _0x17aa78.asm.dynCall_viiifii).apply(null, arguments);
    };
    var _0x5557be = _0x17aa78.dynCall_ffi = function () {
      return (_0x5557be = _0x17aa78.dynCall_ffi = _0x17aa78.asm.dynCall_ffi).apply(null, arguments);
    };
    var _0x405707 = _0x17aa78.dynCall_fiiffffi = function () {
      return (_0x405707 = _0x17aa78.dynCall_fiiffffi = _0x17aa78.asm.dynCall_fiiffffi).apply(null, arguments);
    };
    var _0x234db2 = _0x17aa78.dynCall_viffffi = function () {
      return (_0x234db2 = _0x17aa78.dynCall_viffffi = _0x17aa78.asm.dynCall_viffffi).apply(null, arguments);
    };
    var _0x315005 = _0x17aa78.dynCall_viiiffffi = function () {
      return (_0x315005 = _0x17aa78.dynCall_viiiffffi = _0x17aa78.asm.dynCall_viiiffffi).apply(null, arguments);
    };
    var _0x41f845 = _0x17aa78.dynCall_viffffii = function () {
      return (_0x41f845 = _0x17aa78.dynCall_viffffii = _0x17aa78.asm.dynCall_viffffii).apply(null, arguments);
    };
    var _0x43932f = _0x17aa78.dynCall_viffii = function () {
      return (_0x43932f = _0x17aa78.dynCall_viffii = _0x17aa78.asm.dynCall_viffii).apply(null, arguments);
    };
    var _0x40c6c4 = _0x17aa78.dynCall_vifffii = function () {
      return (_0x40c6c4 = _0x17aa78.dynCall_vifffii = _0x17aa78.asm.dynCall_vifffii).apply(null, arguments);
    };
    var _0x361450 = _0x17aa78.dynCall_viiiiiiifi = function () {
      return (_0x361450 = _0x17aa78.dynCall_viiiiiiifi = _0x17aa78.asm.dynCall_viiiiiiifi).apply(null, arguments);
    };
    var _0x5996af = _0x17aa78.dynCall_vifffffii = function () {
      return (_0x5996af = _0x17aa78.dynCall_vifffffii = _0x17aa78.asm.dynCall_vifffffii).apply(null, arguments);
    };
    var _0x470a23 = _0x17aa78.dynCall_viiffiffi = function () {
      return (_0x470a23 = _0x17aa78.dynCall_viiffiffi = _0x17aa78.asm.dynCall_viiffiffi).apply(null, arguments);
    };
    var _0xb41623 = _0x17aa78.dynCall_viiffifi = function () {
      return (_0xb41623 = _0x17aa78.dynCall_viiffifi = _0x17aa78.asm.dynCall_viiffifi).apply(null, arguments);
    };
    var _0x4e8f39 = _0x17aa78.dynCall_viiffii = function () {
      return (_0x4e8f39 = _0x17aa78.dynCall_viiffii = _0x17aa78.asm.dynCall_viiffii).apply(null, arguments);
    };
    var _0x51b5e4 = _0x17aa78.dynCall_viifffiffi = function () {
      return (_0x51b5e4 = _0x17aa78.dynCall_viifffiffi = _0x17aa78.asm.dynCall_viifffiffi).apply(null, arguments);
    };
    var _0x22c709 = _0x17aa78.dynCall_viifffifi = function () {
      return (_0x22c709 = _0x17aa78.dynCall_viifffifi = _0x17aa78.asm.dynCall_viifffifi).apply(null, arguments);
    };
    var _0x1a9ebe = _0x17aa78.dynCall_viifffii = function () {
      return (_0x1a9ebe = _0x17aa78.dynCall_viifffii = _0x17aa78.asm.dynCall_viifffii).apply(null, arguments);
    };
    var _0x240c6c = _0x17aa78.dynCall_viiffffiffi = function () {
      return (_0x240c6c = _0x17aa78.dynCall_viiffffiffi = _0x17aa78.asm.dynCall_viiffffiffi).apply(null, arguments);
    };
    var _0x40ef12 = _0x17aa78.dynCall_viiffffifi = function () {
      return (_0x40ef12 = _0x17aa78.dynCall_viiffffifi = _0x17aa78.asm.dynCall_viiffffifi).apply(null, arguments);
    };
    var _0x3315bd = _0x17aa78.dynCall_viiffffii = function () {
      return (_0x3315bd = _0x17aa78.dynCall_viiffffii = _0x17aa78.asm.dynCall_viiffffii).apply(null, arguments);
    };
    var _0x440fce = _0x17aa78.dynCall_iififfi = function () {
      return (_0x440fce = _0x17aa78.dynCall_iififfi = _0x17aa78.asm.dynCall_iififfi).apply(null, arguments);
    };
    var _0x293687 = _0x17aa78.dynCall_vifiii = function () {
      return (_0x293687 = _0x17aa78.dynCall_vifiii = _0x17aa78.asm.dynCall_vifiii).apply(null, arguments);
    };
    var _0x35454b = _0x17aa78.dynCall_iiiiffii = function () {
      return (_0x35454b = _0x17aa78.dynCall_iiiiffii = _0x17aa78.asm.dynCall_iiiiffii).apply(null, arguments);
    };
    var _0x2a5031 = _0x17aa78.dynCall_iifiii = function () {
      return (_0x2a5031 = _0x17aa78.dynCall_iifiii = _0x17aa78.asm.dynCall_iifiii).apply(null, arguments);
    };
    var _0x53e554 = _0x17aa78.dynCall_iiffiii = function () {
      return (_0x53e554 = _0x17aa78.dynCall_iiffiii = _0x17aa78.asm.dynCall_iiffiii).apply(null, arguments);
    };
    var _0x558819 = _0x17aa78.dynCall_iifffiii = function () {
      return (_0x558819 = _0x17aa78.dynCall_iifffiii = _0x17aa78.asm.dynCall_iifffiii).apply(null, arguments);
    };
    var _0x2eee52 = _0x17aa78.dynCall_vfi = function () {
      return (_0x2eee52 = _0x17aa78.dynCall_vfi = _0x17aa78.asm.dynCall_vfi).apply(null, arguments);
    };
    var _0x10a474 = _0x17aa78.dynCall_ffffi = function () {
      return (_0x10a474 = _0x17aa78.dynCall_ffffi = _0x17aa78.asm.dynCall_ffffi).apply(null, arguments);
    };
    var _0x789aad = _0x17aa78.dynCall_ffffffi = function () {
      return (_0x789aad = _0x17aa78.dynCall_ffffffi = _0x17aa78.asm.dynCall_ffffffi).apply(null, arguments);
    };
    var _0x3599e0 = _0x17aa78.dynCall_ffffffffi = function () {
      return (_0x3599e0 = _0x17aa78.dynCall_ffffffffi = _0x17aa78.asm.dynCall_ffffffffi).apply(null, arguments);
    };
    var _0x33ee3b = _0x17aa78.dynCall_fiifffi = function () {
      return (_0x33ee3b = _0x17aa78.dynCall_fiifffi = _0x17aa78.asm.dynCall_fiifffi).apply(null, arguments);
    };
    var _0x4cd723 = _0x17aa78.dynCall_fffii = function () {
      return (_0x4cd723 = _0x17aa78.dynCall_fffii = _0x17aa78.asm.dynCall_fffii).apply(null, arguments);
    };
    var _0x5ce49d = _0x17aa78.dynCall_vifffi = function () {
      return (_0x5ce49d = _0x17aa78.dynCall_vifffi = _0x17aa78.asm.dynCall_vifffi).apply(null, arguments);
    };
    var _0x1664ec = _0x17aa78.dynCall_viffiii = function () {
      return (_0x1664ec = _0x17aa78.dynCall_viffiii = _0x17aa78.asm.dynCall_viffiii).apply(null, arguments);
    };
    var _0x2b2578 = _0x17aa78.dynCall_iiiifffii = function () {
      return (_0x2b2578 = _0x17aa78.dynCall_iiiifffii = _0x17aa78.asm.dynCall_iiiifffii).apply(null, arguments);
    };
    var _0x30ab05 = _0x17aa78.dynCall_fiiiifffi = function () {
      return (_0x30ab05 = _0x17aa78.dynCall_fiiiifffi = _0x17aa78.asm.dynCall_fiiiifffi).apply(null, arguments);
    };
    var _0x5182de = _0x17aa78.dynCall_viifffffi = function () {
      return (_0x5182de = _0x17aa78.dynCall_viifffffi = _0x17aa78.asm.dynCall_viifffffi).apply(null, arguments);
    };
    var _0x1d5eea = _0x17aa78.dynCall_fiffii = function () {
      return (_0x1d5eea = _0x17aa78.dynCall_fiffii = _0x17aa78.asm.dynCall_fiffii).apply(null, arguments);
    };
    var _0x2ab68b = _0x17aa78.dynCall_viiiffiii = function () {
      return (_0x2ab68b = _0x17aa78.dynCall_viiiffiii = _0x17aa78.asm.dynCall_viiiffiii).apply(null, arguments);
    };
    var _0x43aa68 = _0x17aa78.dynCall_fiiiffii = function () {
      return (_0x43aa68 = _0x17aa78.dynCall_fiiiffii = _0x17aa78.asm.dynCall_fiiiffii).apply(null, arguments);
    };
    var _0x3705b0 = _0x17aa78.dynCall_fiiiiiii = function () {
      return (_0x3705b0 = _0x17aa78.dynCall_fiiiiiii = _0x17aa78.asm.dynCall_fiiiiiii).apply(null, arguments);
    };
    var _0x435d41 = _0x17aa78.dynCall_vijijijii = function () {
      return (_0x435d41 = _0x17aa78.dynCall_vijijijii = _0x17aa78.asm.dynCall_vijijijii).apply(null, arguments);
    };
    var _0x34a0da = _0x17aa78.dynCall_iiidiiii = function () {
      return (_0x34a0da = _0x17aa78.dynCall_iiidiiii = _0x17aa78.asm.dynCall_iiidiiii).apply(null, arguments);
    };
    var _0x45000d = _0x17aa78.dynCall_viiiijii = function () {
      return (_0x45000d = _0x17aa78.dynCall_viiiijii = _0x17aa78.asm.dynCall_viiiijii).apply(null, arguments);
    };
    var _0x9aa7c6 = _0x17aa78.dynCall_viiijiii = function () {
      return (_0x9aa7c6 = _0x17aa78.dynCall_viiijiii = _0x17aa78.asm.dynCall_viiijiii).apply(null, arguments);
    };
    var _0x28320d = _0x17aa78.dynCall_iijiiiii = function () {
      return (_0x28320d = _0x17aa78.dynCall_iijiiiii = _0x17aa78.asm.dynCall_iijiiiii).apply(null, arguments);
    };
    var _0x1be3a2 = _0x17aa78.dynCall_iijiiiiiiii = function () {
      return (_0x1be3a2 = _0x17aa78.dynCall_iijiiiiiiii = _0x17aa78.asm.dynCall_iijiiiiiiii).apply(null, arguments);
    };
    var _0x533825 = _0x17aa78.dynCall_viiiijiiiii = function () {
      return (_0x533825 = _0x17aa78.dynCall_viiiijiiiii = _0x17aa78.asm.dynCall_viiiijiiiii).apply(null, arguments);
    };
    var _0x1e500d = _0x17aa78.dynCall_iiiiiiiiiii = function () {
      return (_0x1e500d = _0x17aa78.dynCall_iiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    };
    var _0x38a439 = _0x17aa78.dynCall_vidii = function () {
      return (_0x38a439 = _0x17aa78.dynCall_vidii = _0x17aa78.asm.dynCall_vidii).apply(null, arguments);
    };
    var _0x14d69b = _0x17aa78.dynCall_viiidiiiii = function () {
      return (_0x14d69b = _0x17aa78.dynCall_viiidiiiii = _0x17aa78.asm.dynCall_viiidiiiii).apply(null, arguments);
    };
    var _0x57d908 = _0x17aa78.dynCall_vifiiii = function () {
      return (_0x57d908 = _0x17aa78.dynCall_vifiiii = _0x17aa78.asm.dynCall_vifiiii).apply(null, arguments);
    };
    var _0x533582 = _0x17aa78.dynCall_iiiffi = function () {
      return (_0x533582 = _0x17aa78.dynCall_iiiffi = _0x17aa78.asm.dynCall_iiiffi).apply(null, arguments);
    };
    var _0xc3dca8 = _0x17aa78.dynCall_iiffii = function () {
      return (_0xc3dca8 = _0x17aa78.dynCall_iiffii = _0x17aa78.asm.dynCall_iiffii).apply(null, arguments);
    };
    var _0x551dc5 = _0x17aa78.dynCall_iiifiii = function () {
      return (_0x551dc5 = _0x17aa78.dynCall_iiifiii = _0x17aa78.asm.dynCall_iiifiii).apply(null, arguments);
    };
    var _0x208fbf = _0x17aa78.dynCall_iiififii = function () {
      return (_0x208fbf = _0x17aa78.dynCall_iiififii = _0x17aa78.asm.dynCall_iiififii).apply(null, arguments);
    };
    var _0x255799 = _0x17aa78.dynCall_iiifiiiii = function () {
      return (_0x255799 = _0x17aa78.dynCall_iiifiiiii = _0x17aa78.asm.dynCall_iiifiiiii).apply(null, arguments);
    };
    var _0x5d06f9 = _0x17aa78.dynCall_iiffifiiii = function () {
      return (_0x5d06f9 = _0x17aa78.dynCall_iiffifiiii = _0x17aa78.asm.dynCall_iiffifiiii).apply(null, arguments);
    };
    var _0x1793b4 = _0x17aa78.dynCall_iifiifiiii = function () {
      return (_0x1793b4 = _0x17aa78.dynCall_iifiifiiii = _0x17aa78.asm.dynCall_iifiifiiii).apply(null, arguments);
    };
    var _0x3c2d25 = _0x17aa78.dynCall_iiiifiii = function () {
      return (_0x3c2d25 = _0x17aa78.dynCall_iiiifiii = _0x17aa78.asm.dynCall_iiiifiii).apply(null, arguments);
    };
    var _0x5d0b0f = _0x17aa78.dynCall_iiifiiii = function () {
      return (_0x5d0b0f = _0x17aa78.dynCall_iiifiiii = _0x17aa78.asm.dynCall_iiifiiii).apply(null, arguments);
    };
    var _0x13d2ce = _0x17aa78.dynCall_iiiffiii = function () {
      return (_0x13d2ce = _0x17aa78.dynCall_iiiffiii = _0x17aa78.asm.dynCall_iiiffiii).apply(null, arguments);
    };
    var _0x23d4f4 = _0x17aa78.dynCall_iiiiifii = function () {
      return (_0x23d4f4 = _0x17aa78.dynCall_iiiiifii = _0x17aa78.asm.dynCall_iiiiifii).apply(null, arguments);
    };
    var _0x2d94a0 = _0x17aa78.dynCall_iifiifffii = function () {
      return (_0x2d94a0 = _0x17aa78.dynCall_iifiifffii = _0x17aa78.asm.dynCall_iifiifffii).apply(null, arguments);
    };
    var _0x1c8c00 = _0x17aa78.dynCall_fiifii = function () {
      return (_0x1c8c00 = _0x17aa78.dynCall_fiifii = _0x17aa78.asm.dynCall_fiifii).apply(null, arguments);
    };
    var _0x6f6f39 = _0x17aa78.dynCall_viiiiiifiifiiii = function () {
      return (_0x6f6f39 = _0x17aa78.dynCall_viiiiiifiifiiii = _0x17aa78.asm.dynCall_viiiiiifiifiiii).apply(null, arguments);
    };
    var _0x1127c3 = _0x17aa78.dynCall_iiffffiii = function () {
      return (_0x1127c3 = _0x17aa78.dynCall_iiffffiii = _0x17aa78.asm.dynCall_iiffffiii).apply(null, arguments);
    };
    var _0x1cf4d7 = _0x17aa78.dynCall_iiidfi = function () {
      return (_0x1cf4d7 = _0x17aa78.dynCall_iiidfi = _0x17aa78.asm.dynCall_iiidfi).apply(null, arguments);
    };
    var _0xb02e45 = _0x17aa78.dynCall_iiijfi = function () {
      return (_0xb02e45 = _0x17aa78.dynCall_iiijfi = _0x17aa78.asm.dynCall_iiijfi).apply(null, arguments);
    };
    var _0x49baac = _0x17aa78.dynCall_iiiffii = function () {
      return (_0x49baac = _0x17aa78.dynCall_iiiffii = _0x17aa78.asm.dynCall_iiiffii).apply(null, arguments);
    };
    var _0x40a649 = _0x17aa78.dynCall_iiiififi = function () {
      return (_0x40a649 = _0x17aa78.dynCall_iiiififi = _0x17aa78.asm.dynCall_iiiififi).apply(null, arguments);
    };
    var _0x86ff72 = _0x17aa78.dynCall_iiiffifiiii = function () {
      return (_0x86ff72 = _0x17aa78.dynCall_iiiffifiiii = _0x17aa78.asm.dynCall_iiiffifiiii).apply(null, arguments);
    };
    var _0xdd0026 = _0x17aa78.dynCall_iiifiifiii = function () {
      return (_0xdd0026 = _0x17aa78.dynCall_iiifiifiii = _0x17aa78.asm.dynCall_iiifiifiii).apply(null, arguments);
    };
    var _0x42400c = _0x17aa78.dynCall_iiifiifiiiii = function () {
      return (_0x42400c = _0x17aa78.dynCall_iiifiifiiiii = _0x17aa78.asm.dynCall_iiifiifiiiii).apply(null, arguments);
    };
    var _0xe99a42 = _0x17aa78.dynCall_ifii = function () {
      return (_0xe99a42 = _0x17aa78.dynCall_ifii = _0x17aa78.asm.dynCall_ifii).apply(null, arguments);
    };
    var _0x498ad3 = _0x17aa78.dynCall_ifffii = function () {
      return (_0x498ad3 = _0x17aa78.dynCall_ifffii = _0x17aa78.asm.dynCall_ifffii).apply(null, arguments);
    };
    var _0x423d2a = _0x17aa78.dynCall_ffffii = function () {
      return (_0x423d2a = _0x17aa78.dynCall_ffffii = _0x17aa78.asm.dynCall_ffffii).apply(null, arguments);
    };
    var _0x17fd17 = _0x17aa78.dynCall_ffffifi = function () {
      return (_0x17fd17 = _0x17aa78.dynCall_ffffifi = _0x17aa78.asm.dynCall_ffffifi).apply(null, arguments);
    };
    var _0x502804 = _0x17aa78.dynCall_ffffiffi = function () {
      return (_0x502804 = _0x17aa78.dynCall_ffffiffi = _0x17aa78.asm.dynCall_ffffiffi).apply(null, arguments);
    };
    var _0x11236d = _0x17aa78.dynCall_viiififi = function () {
      return (_0x11236d = _0x17aa78.dynCall_viiififi = _0x17aa78.asm.dynCall_viiififi).apply(null, arguments);
    };
    var _0x32fa39 = _0x17aa78.dynCall_viiififfi = function () {
      return (_0x32fa39 = _0x17aa78.dynCall_viiififfi = _0x17aa78.asm.dynCall_viiififfi).apply(null, arguments);
    };
    var _0x3d4405 = _0x17aa78.dynCall_ifiii = function () {
      return (_0x3d4405 = _0x17aa78.dynCall_ifiii = _0x17aa78.asm.dynCall_ifiii).apply(null, arguments);
    };
    var _0x284ab2 = _0x17aa78.dynCall_iifiiiiii = function () {
      return (_0x284ab2 = _0x17aa78.dynCall_iifiiiiii = _0x17aa78.asm.dynCall_iifiiiiii).apply(null, arguments);
    };
    var _0x20194c = _0x17aa78.dynCall_iifiiiii = function () {
      return (_0x20194c = _0x17aa78.dynCall_iifiiiii = _0x17aa78.asm.dynCall_iifiiiii).apply(null, arguments);
    };
    var _0x4e78f0 = _0x17aa78.dynCall_iiffiiiii = function () {
      return (_0x4e78f0 = _0x17aa78.dynCall_iiffiiiii = _0x17aa78.asm.dynCall_iiffiiiii).apply(null, arguments);
    };
    var _0x5ec7c1 = _0x17aa78.dynCall_iiffifiii = function () {
      return (_0x5ec7c1 = _0x17aa78.dynCall_iiffifiii = _0x17aa78.asm.dynCall_iiffifiii).apply(null, arguments);
    };
    var _0x3a484b = _0x17aa78.dynCall_iifiifiii = function () {
      return (_0x3a484b = _0x17aa78.dynCall_iifiifiii = _0x17aa78.asm.dynCall_iifiifiii).apply(null, arguments);
    };
    var _0x307000 = _0x17aa78.dynCall_iififi = function () {
      return (_0x307000 = _0x17aa78.dynCall_iififi = _0x17aa78.asm.dynCall_iififi).apply(null, arguments);
    };
    var _0x398432 = _0x17aa78.dynCall_iiififi = function () {
      return (_0x398432 = _0x17aa78.dynCall_iiififi = _0x17aa78.asm.dynCall_iiififi).apply(null, arguments);
    };
    var _0x24c46f = _0x17aa78.dynCall_iiiiifiiii = function () {
      return (_0x24c46f = _0x17aa78.dynCall_iiiiifiiii = _0x17aa78.asm.dynCall_iiiiifiiii).apply(null, arguments);
    };
    var _0x4de7b5 = _0x17aa78.dynCall_viidiii = function () {
      return (_0x4de7b5 = _0x17aa78.dynCall_viidiii = _0x17aa78.asm.dynCall_viidiii).apply(null, arguments);
    };
    var _0x49271f = _0x17aa78.dynCall_fiifdi = function () {
      return (_0x49271f = _0x17aa78.dynCall_fiifdi = _0x17aa78.asm.dynCall_fiifdi).apply(null, arguments);
    };
    var _0x3296bf = _0x17aa78.dynCall_viiiiiifddfiiii = function () {
      return (_0x3296bf = _0x17aa78.dynCall_viiiiiifddfiiii = _0x17aa78.asm.dynCall_viiiiiifddfiiii).apply(null, arguments);
    };
    var _0x70524d = _0x17aa78.dynCall_fiifji = function () {
      return (_0x70524d = _0x17aa78.dynCall_fiifji = _0x17aa78.asm.dynCall_fiifji).apply(null, arguments);
    };
    var _0x25b38e = _0x17aa78.dynCall_viiiiiifjjfiiii = function () {
      return (_0x25b38e = _0x17aa78.dynCall_viiiiiifjjfiiii = _0x17aa78.asm.dynCall_viiiiiifjjfiiii).apply(null, arguments);
    };
    var _0x3ba98c = _0x17aa78.dynCall_viifiii = function () {
      return (_0x3ba98c = _0x17aa78.dynCall_viifiii = _0x17aa78.asm.dynCall_viifiii).apply(null, arguments);
    };
    var _0x265aa2 = _0x17aa78.dynCall_viiiiiiffffiiii = function () {
      return (_0x265aa2 = _0x17aa78.dynCall_viiiiiiffffiiii = _0x17aa78.asm.dynCall_viiiiiiffffiiii).apply(null, arguments);
    };
    var _0x6f8dc7 = _0x17aa78.dynCall_viifiiii = function () {
      return (_0x6f8dc7 = _0x17aa78.dynCall_viifiiii = _0x17aa78.asm.dynCall_viifiiii).apply(null, arguments);
    };
    var _0xbade7c = _0x17aa78.dynCall_iiiiifiii = function () {
      return (_0xbade7c = _0x17aa78.dynCall_iiiiifiii = _0x17aa78.asm.dynCall_iiiiifiii).apply(null, arguments);
    };
    var _0x469d32 = _0x17aa78.dynCall_fffffi = function () {
      return (_0x469d32 = _0x17aa78.dynCall_fffffi = _0x17aa78.asm.dynCall_fffffi).apply(null, arguments);
    };
    var _0x1df941 = _0x17aa78.dynCall_fffifffi = function () {
      return (_0x1df941 = _0x17aa78.dynCall_fffifffi = _0x17aa78.asm.dynCall_fffifffi).apply(null, arguments);
    };
    var _0x56025e = _0x17aa78.dynCall_ifiiii = function () {
      return (_0x56025e = _0x17aa78.dynCall_ifiiii = _0x17aa78.asm.dynCall_ifiiii).apply(null, arguments);
    };
    var _0x36db0f = _0x17aa78.dynCall_idiiiii = function () {
      return (_0x36db0f = _0x17aa78.dynCall_idiiiii = _0x17aa78.asm.dynCall_idiiiii).apply(null, arguments);
    };
    var _0x475010 = _0x17aa78.dynCall_idiiii = function () {
      return (_0x475010 = _0x17aa78.dynCall_idiiii = _0x17aa78.asm.dynCall_idiiii).apply(null, arguments);
    };
    var _0x22a412 = _0x17aa78.dynCall_idii = function () {
      return (_0x22a412 = _0x17aa78.dynCall_idii = _0x17aa78.asm.dynCall_idii).apply(null, arguments);
    };
    var _0x33733c = _0x17aa78.dynCall_iiijiiii = function () {
      return (_0x33733c = _0x17aa78.dynCall_iiijiiii = _0x17aa78.asm.dynCall_iiijiiii).apply(null, arguments);
    };
    var _0x748d46 = _0x17aa78.dynCall_vjiiii = function () {
      return (_0x748d46 = _0x17aa78.dynCall_vjiiii = _0x17aa78.asm.dynCall_vjiiii).apply(null, arguments);
    };
    var _0xb53efa = _0x17aa78.dynCall_iddi = function () {
      return (_0xb53efa = _0x17aa78.dynCall_iddi = _0x17aa78.asm.dynCall_iddi).apply(null, arguments);
    };
    var _0x325502 = _0x17aa78.dynCall_iiiiiiiiiiii = function () {
      return (_0x325502 = _0x17aa78.dynCall_iiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiii).apply(null, arguments);
    };
    var _0x52ce92 = _0x17aa78.dynCall_iiiiiiiiiiiiii = function () {
      return (_0x52ce92 = _0x17aa78.dynCall_iiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x41e51a = _0x17aa78.dynCall_viifiifi = function () {
      return (_0x41e51a = _0x17aa78.dynCall_viifiifi = _0x17aa78.asm.dynCall_viifiifi).apply(null, arguments);
    };
    var _0x41e05e = _0x17aa78.dynCall_vifiifi = function () {
      return (_0x41e05e = _0x17aa78.dynCall_vifiifi = _0x17aa78.asm.dynCall_vifiifi).apply(null, arguments);
    };
    var _0x244b6a = _0x17aa78.dynCall_viddfffi = function () {
      return (_0x244b6a = _0x17aa78.dynCall_viddfffi = _0x17aa78.asm.dynCall_viddfffi).apply(null, arguments);
    };
    var _0x33ebde = _0x17aa78.dynCall_viidfffi = function () {
      return (_0x33ebde = _0x17aa78.dynCall_viidfffi = _0x17aa78.asm.dynCall_viidfffi).apply(null, arguments);
    };
    var _0x4b8fa3 = _0x17aa78.dynCall_vidifffi = function () {
      return (_0x4b8fa3 = _0x17aa78.dynCall_vidifffi = _0x17aa78.asm.dynCall_vidifffi).apply(null, arguments);
    };
    var _0x372de9 = _0x17aa78.dynCall_viiifffi = function () {
      return (_0x372de9 = _0x17aa78.dynCall_viiifffi = _0x17aa78.asm.dynCall_viiifffi).apply(null, arguments);
    };
    var _0x111279 = _0x17aa78.dynCall_viddi = function () {
      return (_0x111279 = _0x17aa78.dynCall_viddi = _0x17aa78.asm.dynCall_viddi).apply(null, arguments);
    };
    var _0x4c51c5 = _0x17aa78.dynCall_viiiiffffffffii = function () {
      return (_0x4c51c5 = _0x17aa78.dynCall_viiiiffffffffii = _0x17aa78.asm.dynCall_viiiiffffffffii).apply(null, arguments);
    };
    var _0xa50c08 = _0x17aa78.dynCall_iffi = function () {
      return (_0xa50c08 = _0x17aa78.dynCall_iffi = _0x17aa78.asm.dynCall_iffi).apply(null, arguments);
    };
    var _0x6ddca7 = _0x17aa78.dynCall_ffii = function () {
      return (_0x6ddca7 = _0x17aa78.dynCall_ffii = _0x17aa78.asm.dynCall_ffii).apply(null, arguments);
    };
    var _0x5dbdd4 = _0x17aa78.dynCall_fiiiii = function () {
      return (_0x5dbdd4 = _0x17aa78.dynCall_fiiiii = _0x17aa78.asm.dynCall_fiiiii).apply(null, arguments);
    };
    var _0x3652ca = _0x17aa78.dynCall_ddddi = function () {
      return (_0x3652ca = _0x17aa78.dynCall_ddddi = _0x17aa78.asm.dynCall_ddddi).apply(null, arguments);
    };
    var _0x5322a2 = _0x17aa78.dynCall_ddi = function () {
      return (_0x5322a2 = _0x17aa78.dynCall_ddi = _0x17aa78.asm.dynCall_ddi).apply(null, arguments);
    };
    var _0x250dae = _0x17aa78.dynCall_viiijiiii = function () {
      return (_0x250dae = _0x17aa78.dynCall_viiijiiii = _0x17aa78.asm.dynCall_viiijiiii).apply(null, arguments);
    };
    var _0x19fd74 = _0x17aa78.dynCall_iiiiiiiiiiiii = function () {
      return (_0x19fd74 = _0x17aa78.dynCall_iiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x24e1b6 = _0x17aa78.dynCall_iiiiiji = function () {
      return (_0x24e1b6 = _0x17aa78.dynCall_iiiiiji = _0x17aa78.asm.dynCall_iiiiiji).apply(null, arguments);
    };
    var _0x2de501 = _0x17aa78.dynCall_viiijii = function () {
      return (_0x2de501 = _0x17aa78.dynCall_viiijii = _0x17aa78.asm.dynCall_viiijii).apply(null, arguments);
    };
    var _0x45f154 = _0x17aa78.dynCall_viiiiiji = function () {
      return (_0x45f154 = _0x17aa78.dynCall_viiiiiji = _0x17aa78.asm.dynCall_viiiiiji).apply(null, arguments);
    };
    var _0x3b29cd = _0x17aa78.dynCall_ijii = function () {
      return (_0x3b29cd = _0x17aa78.dynCall_ijii = _0x17aa78.asm.dynCall_ijii).apply(null, arguments);
    };
    var _0x24124b = _0x17aa78.dynCall_ijjiiii = function () {
      return (_0x24124b = _0x17aa78.dynCall_ijjiiii = _0x17aa78.asm.dynCall_ijjiiii).apply(null, arguments);
    };
    var _0x4317b6 = _0x17aa78.dynCall_vdiiiii = function () {
      return (_0x4317b6 = _0x17aa78.dynCall_vdiiiii = _0x17aa78.asm.dynCall_vdiiiii).apply(null, arguments);
    };
    var _0x2f5d5f = _0x17aa78.dynCall_diiji = function () {
      return (_0x2f5d5f = _0x17aa78.dynCall_diiji = _0x17aa78.asm.dynCall_diiji).apply(null, arguments);
    };
    var _0x19fd29 = _0x17aa78.dynCall_vjiiiiiiii = function () {
      return (_0x19fd29 = _0x17aa78.dynCall_vjiiiiiiii = _0x17aa78.asm.dynCall_vjiiiiiiii).apply(null, arguments);
    };
    var _0x1ada1c = _0x17aa78.dynCall_vjiiiiiii = function () {
      return (_0x1ada1c = _0x17aa78.dynCall_vjiiiiiii = _0x17aa78.asm.dynCall_vjiiiiiii).apply(null, arguments);
    };
    var _0x50dee6 = _0x17aa78.dynCall_ijiiii = function () {
      return (_0x50dee6 = _0x17aa78.dynCall_ijiiii = _0x17aa78.asm.dynCall_ijiiii).apply(null, arguments);
    };
    var _0x59e055 = _0x17aa78.dynCall_iidii = function () {
      return (_0x59e055 = _0x17aa78.dynCall_iidii = _0x17aa78.asm.dynCall_iidii).apply(null, arguments);
    };
    var _0x505d75 = _0x17aa78.dynCall_iidiii = function () {
      return (_0x505d75 = _0x17aa78.dynCall_iidiii = _0x17aa78.asm.dynCall_iidiii).apply(null, arguments);
    };
    var _0x275048 = _0x17aa78.dynCall_diji = function () {
      return (_0x275048 = _0x17aa78.dynCall_diji = _0x17aa78.asm.dynCall_diji).apply(null, arguments);
    };
    var _0x29a005 = _0x17aa78.dynCall_fidi = function () {
      return (_0x29a005 = _0x17aa78.dynCall_fidi = _0x17aa78.asm.dynCall_fidi).apply(null, arguments);
    };
    var _0x18e7d2 = _0x17aa78.dynCall_vifffffi = function () {
      return (_0x18e7d2 = _0x17aa78.dynCall_vifffffi = _0x17aa78.asm.dynCall_vifffffi).apply(null, arguments);
    };
    var _0x4f2d4a = _0x17aa78.dynCall_viiiiiffii = function () {
      return (_0x4f2d4a = _0x17aa78.dynCall_viiiiiffii = _0x17aa78.asm.dynCall_viiiiiffii).apply(null, arguments);
    };
    var _0x584047 = _0x17aa78.dynCall_viiiiiffi = function () {
      return (_0x584047 = _0x17aa78.dynCall_viiiiiffi = _0x17aa78.asm.dynCall_viiiiiffi).apply(null, arguments);
    };
    var _0x4b7b94 = _0x17aa78.dynCall_viififi = function () {
      return (_0x4b7b94 = _0x17aa78.dynCall_viififi = _0x17aa78.asm.dynCall_viififi).apply(null, arguments);
    };
    var _0xa2b107 = _0x17aa78.dynCall_viififfi = function () {
      return (_0xa2b107 = _0x17aa78.dynCall_viififfi = _0x17aa78.asm.dynCall_viififfi).apply(null, arguments);
    };
    var _0x317c39 = _0x17aa78.dynCall_ijjiii = function () {
      return (_0x317c39 = _0x17aa78.dynCall_ijjiii = _0x17aa78.asm.dynCall_ijjiii).apply(null, arguments);
    };
    var _0x2331ad = _0x17aa78.dynCall_diiiii = function () {
      return (_0x2331ad = _0x17aa78.dynCall_diiiii = _0x17aa78.asm.dynCall_diiiii).apply(null, arguments);
    };
    var _0x373459 = _0x17aa78.dynCall_vijji = function () {
      return (_0x373459 = _0x17aa78.dynCall_vijji = _0x17aa78.asm.dynCall_vijji).apply(null, arguments);
    };
    var _0x3b9b0c = _0x17aa78.dynCall_vfffi = function () {
      return (_0x3b9b0c = _0x17aa78.dynCall_vfffi = _0x17aa78.asm.dynCall_vfffi).apply(null, arguments);
    };
    var _0x4ee419 = _0x17aa78.dynCall_vffffi = function () {
      return (_0x4ee419 = _0x17aa78.dynCall_vffffi = _0x17aa78.asm.dynCall_vffffi).apply(null, arguments);
    };
    var _0x1d0259 = _0x17aa78.dynCall_viiiffii = function () {
      return (_0x1d0259 = _0x17aa78.dynCall_viiiffii = _0x17aa78.asm.dynCall_viiiffii).apply(null, arguments);
    };
    var _0x556a38 = _0x17aa78.dynCall_viiiifffi = function () {
      return (_0x556a38 = _0x17aa78.dynCall_viiiifffi = _0x17aa78.asm.dynCall_viiiifffi).apply(null, arguments);
    };
    var _0x6db2f2 = _0x17aa78.dynCall_vfiii = function () {
      return (_0x6db2f2 = _0x17aa78.dynCall_vfiii = _0x17aa78.asm.dynCall_vfiii).apply(null, arguments);
    };
    var _0x46ba4d = _0x17aa78.dynCall_fdi = function () {
      return (_0x46ba4d = _0x17aa78.dynCall_fdi = _0x17aa78.asm.dynCall_fdi).apply(null, arguments);
    };
    var _0x585608 = _0x17aa78.dynCall_vfii = function () {
      return (_0x585608 = _0x17aa78.dynCall_vfii = _0x17aa78.asm.dynCall_vfii).apply(null, arguments);
    };
    var _0x4758a2 = _0x17aa78.dynCall_jjjji = function () {
      return (_0x4758a2 = _0x17aa78.dynCall_jjjji = _0x17aa78.asm.dynCall_jjjji).apply(null, arguments);
    };
    var _0x4380f0 = _0x17aa78.dynCall_iiiifiiiiii = function () {
      return (_0x4380f0 = _0x17aa78.dynCall_iiiifiiiiii = _0x17aa78.asm.dynCall_iiiifiiiiii).apply(null, arguments);
    };
    var _0x512c05 = _0x17aa78.dynCall_iiiifiiiii = function () {
      return (_0x512c05 = _0x17aa78.dynCall_iiiifiiiii = _0x17aa78.asm.dynCall_iiiifiiiii).apply(null, arguments);
    };
    var _0x1c5474 = _0x17aa78.dynCall_iiiifiiii = function () {
      return (_0x1c5474 = _0x17aa78.dynCall_iiiifiiii = _0x17aa78.asm.dynCall_iiiifiiii).apply(null, arguments);
    };
    var _0x38140a = _0x17aa78.dynCall_vijjii = function () {
      return (_0x38140a = _0x17aa78.dynCall_vijjii = _0x17aa78.asm.dynCall_vijjii).apply(null, arguments);
    };
    var _0x119480 = _0x17aa78.dynCall_viiiiiiiijijiii = function () {
      return (_0x119480 = _0x17aa78.dynCall_viiiiiiiijijiii = _0x17aa78.asm.dynCall_viiiiiiiijijiii).apply(null, arguments);
    };
    var _0x4fc991 = _0x17aa78.dynCall_viijijiii = function () {
      return (_0x4fc991 = _0x17aa78.dynCall_viijijiii = _0x17aa78.asm.dynCall_viijijiii).apply(null, arguments);
    };
    var _0x1d8aa7 = _0x17aa78.dynCall_viiiififfi = function () {
      return (_0x1d8aa7 = _0x17aa78.dynCall_viiiififfi = _0x17aa78.asm.dynCall_viiiififfi).apply(null, arguments);
    };
    var _0x5a8f1a = _0x17aa78.dynCall_viiiifiifi = function () {
      return (_0x5a8f1a = _0x17aa78.dynCall_viiiifiifi = _0x17aa78.asm.dynCall_viiiifiifi).apply(null, arguments);
    };
    var _0x49039f = _0x17aa78.dynCall_viiiifiiii = function () {
      return (_0x49039f = _0x17aa78.dynCall_viiiifiiii = _0x17aa78.asm.dynCall_viiiifiiii).apply(null, arguments);
    };
    var _0x488ead = _0x17aa78.dynCall_viiiifiiiii = function () {
      return (_0x488ead = _0x17aa78.dynCall_viiiifiiiii = _0x17aa78.asm.dynCall_viiiifiiiii).apply(null, arguments);
    };
    var _0x3ff319 = _0x17aa78.dynCall_viiiifiiiiiiii = function () {
      return (_0x3ff319 = _0x17aa78.dynCall_viiiifiiiiiiii = _0x17aa78.asm.dynCall_viiiifiiiiiiii).apply(null, arguments);
    };
    var _0x29c762 = _0x17aa78.dynCall_viffffiii = function () {
      return (_0x29c762 = _0x17aa78.dynCall_viffffiii = _0x17aa78.asm.dynCall_viffffiii).apply(null, arguments);
    };
    var _0x270647 = _0x17aa78.dynCall_viififiii = function () {
      return (_0x270647 = _0x17aa78.dynCall_viififiii = _0x17aa78.asm.dynCall_viififiii).apply(null, arguments);
    };
    var _0x74fa3b = _0x17aa78.dynCall_iiiiifi = function () {
      return (_0x74fa3b = _0x17aa78.dynCall_iiiiifi = _0x17aa78.asm.dynCall_iiiiifi).apply(null, arguments);
    };
    var _0x82fa76 = _0x17aa78.dynCall_viififii = function () {
      return (_0x82fa76 = _0x17aa78.dynCall_viififii = _0x17aa78.asm.dynCall_viififii).apply(null, arguments);
    };
    var _0x4445dd = _0x17aa78.dynCall_iifiifii = function () {
      return (_0x4445dd = _0x17aa78.dynCall_iifiifii = _0x17aa78.asm.dynCall_iifiifii).apply(null, arguments);
    };
    var _0x35ed36 = _0x17aa78.dynCall_vififfii = function () {
      return (_0x35ed36 = _0x17aa78.dynCall_vififfii = _0x17aa78.asm.dynCall_vififfii).apply(null, arguments);
    };
    var _0x436513 = _0x17aa78.dynCall_vififfi = function () {
      return (_0x436513 = _0x17aa78.dynCall_vififfi = _0x17aa78.asm.dynCall_vififfi).apply(null, arguments);
    };
    var _0x4f4028 = _0x17aa78.dynCall_iiififiiii = function () {
      return (_0x4f4028 = _0x17aa78.dynCall_iiififiiii = _0x17aa78.asm.dynCall_iiififiiii).apply(null, arguments);
    };
    var _0x4f5392 = _0x17aa78.dynCall_viffiiii = function () {
      return (_0x4f5392 = _0x17aa78.dynCall_viffiiii = _0x17aa78.asm.dynCall_viffiiii).apply(null, arguments);
    };
    var _0x2c6495 = _0x17aa78.dynCall_viiiffffiiii = function () {
      return (_0x2c6495 = _0x17aa78.dynCall_viiiffffiiii = _0x17aa78.asm.dynCall_viiiffffiiii).apply(null, arguments);
    };
    var _0x4cae59 = _0x17aa78.dynCall_viifffffffiiiii = function () {
      return (_0x4cae59 = _0x17aa78.dynCall_viifffffffiiiii = _0x17aa78.asm.dynCall_viifffffffiiiii).apply(null, arguments);
    };
    var _0x32d98e = _0x17aa78.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x32d98e = _0x17aa78.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x17aa78.asm.dynCall_iiiiiiffiiiiiiiiiffffiiii).apply(null, arguments);
    };
    var _0x33e260 = _0x17aa78.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x33e260 = _0x17aa78.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiffiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x47fc03 = _0x17aa78.dynCall_vififiii = function () {
      return (_0x47fc03 = _0x17aa78.dynCall_vififiii = _0x17aa78.asm.dynCall_vififiii).apply(null, arguments);
    };
    var _0x469928 = _0x17aa78.dynCall_jijji = function () {
      return (_0x469928 = _0x17aa78.dynCall_jijji = _0x17aa78.asm.dynCall_jijji).apply(null, arguments);
    };
    var _0x129a69 = _0x17aa78.dynCall_ifffi = function () {
      return (_0x129a69 = _0x17aa78.dynCall_ifffi = _0x17aa78.asm.dynCall_ifffi).apply(null, arguments);
    };
    var _0x45f39b = _0x17aa78.dynCall_fiifiii = function () {
      return (_0x45f39b = _0x17aa78.dynCall_fiifiii = _0x17aa78.asm.dynCall_fiifiii).apply(null, arguments);
    };
    var _0x297723 = _0x17aa78.dynCall_viffifi = function () {
      return (_0x297723 = _0x17aa78.dynCall_viffifi = _0x17aa78.asm.dynCall_viffifi).apply(null, arguments);
    };
    var _0x1301d1 = _0x17aa78.dynCall_fffffffi = function () {
      return (_0x1301d1 = _0x17aa78.dynCall_fffffffi = _0x17aa78.asm.dynCall_fffffffi).apply(null, arguments);
    };
    var _0x580645 = _0x17aa78.dynCall_viiiffiiiiiiiii = function () {
      return (_0x580645 = _0x17aa78.dynCall_viiiffiiiiiiiii = _0x17aa78.asm.dynCall_viiiffiiiiiiiii).apply(null, arguments);
    };
    var _0x55eb17 = _0x17aa78.dynCall_viiiffiiiiii = function () {
      return (_0x55eb17 = _0x17aa78.dynCall_viiiffiiiiii = _0x17aa78.asm.dynCall_viiiffiiiiii).apply(null, arguments);
    };
    var _0x1d21f5 = _0x17aa78.dynCall_viiffiiiiiiiiii = function () {
      return (_0x1d21f5 = _0x17aa78.dynCall_viiffiiiiiiiiii = _0x17aa78.asm.dynCall_viiffiiiiiiiiii).apply(null, arguments);
    };
    var _0x402943 = _0x17aa78.dynCall_viiffiiiiiii = function () {
      return (_0x402943 = _0x17aa78.dynCall_viiffiiiiiii = _0x17aa78.asm.dynCall_viiffiiiiiii).apply(null, arguments);
    };
    var _0x5e2e98 = _0x17aa78.dynCall_viffffffi = function () {
      return (_0x5e2e98 = _0x17aa78.dynCall_viffffffi = _0x17aa78.asm.dynCall_viffffffi).apply(null, arguments);
    };
    var _0x57ce7e = _0x17aa78.dynCall_iiiffiiii = function () {
      return (_0x57ce7e = _0x17aa78.dynCall_iiiffiiii = _0x17aa78.asm.dynCall_iiiffiiii).apply(null, arguments);
    };
    var _0x38559b = _0x17aa78.dynCall_iiiiffiiii = function () {
      return (_0x38559b = _0x17aa78.dynCall_iiiiffiiii = _0x17aa78.asm.dynCall_iiiiffiiii).apply(null, arguments);
    };
    var _0x2af1e3 = _0x17aa78.dynCall_fiiiffi = function () {
      return (_0x2af1e3 = _0x17aa78.dynCall_fiiiffi = _0x17aa78.asm.dynCall_fiiiffi).apply(null, arguments);
    };
    var _0x4c04a2 = _0x17aa78.dynCall_vjii = function () {
      return (_0x4c04a2 = _0x17aa78.dynCall_vjii = _0x17aa78.asm.dynCall_vjii).apply(null, arguments);
    };
    var _0x3f0056 = _0x17aa78.dynCall_viiiiiiiijiiii = function () {
      return (_0x3f0056 = _0x17aa78.dynCall_viiiiiiiijiiii = _0x17aa78.asm.dynCall_viiiiiiiijiiii).apply(null, arguments);
    };
    var _0x140687 = _0x17aa78.dynCall_viiiiiifiiiiii = function () {
      return (_0x140687 = _0x17aa78.dynCall_viiiiiifiiiiii = _0x17aa78.asm.dynCall_viiiiiifiiiiii).apply(null, arguments);
    };
    var _0x503c7c = _0x17aa78.dynCall_vifiiiiii = function () {
      return (_0x503c7c = _0x17aa78.dynCall_vifiiiiii = _0x17aa78.asm.dynCall_vifiiiiii).apply(null, arguments);
    };
    var _0x38206a = _0x17aa78.dynCall_fifii = function () {
      return (_0x38206a = _0x17aa78.dynCall_fifii = _0x17aa78.asm.dynCall_fifii).apply(null, arguments);
    };
    var _0x3d3e9b = _0x17aa78.dynCall_iiidi = function () {
      return (_0x3d3e9b = _0x17aa78.dynCall_iiidi = _0x17aa78.asm.dynCall_iiidi).apply(null, arguments);
    };
    var _0x46c18c = _0x17aa78.dynCall_iidiiiii = function () {
      return (_0x46c18c = _0x17aa78.dynCall_iidiiiii = _0x17aa78.asm.dynCall_iidiiiii).apply(null, arguments);
    };
    var _0x36dce1 = _0x17aa78.dynCall_ijiiiiiiiii = function () {
      return (_0x36dce1 = _0x17aa78.dynCall_ijiiiiiiiii = _0x17aa78.asm.dynCall_ijiiiiiiiii).apply(null, arguments);
    };
    var _0x51eeec = _0x17aa78.dynCall_viijiiiiii = function () {
      return (_0x51eeec = _0x17aa78.dynCall_viijiiiiii = _0x17aa78.asm.dynCall_viijiiiiii).apply(null, arguments);
    };
    var _0x139599 = _0x17aa78.dynCall_jiidi = function () {
      return (_0x139599 = _0x17aa78.dynCall_jiidi = _0x17aa78.asm.dynCall_jiidi).apply(null, arguments);
    };
    var _0x185c53 = _0x17aa78.dynCall_viiiidijii = function () {
      return (_0x185c53 = _0x17aa78.dynCall_viiiidijii = _0x17aa78.asm.dynCall_viiiidijii).apply(null, arguments);
    };
    var _0x43e9cf = _0x17aa78.dynCall_viiiidii = function () {
      return (_0x43e9cf = _0x17aa78.dynCall_viiiidii = _0x17aa78.asm.dynCall_viiiidii).apply(null, arguments);
    };
    var _0xf2b8a6 = _0x17aa78.dynCall_iiidiii = function () {
      return (_0xf2b8a6 = _0x17aa78.dynCall_iiidiii = _0x17aa78.asm.dynCall_iiidiii).apply(null, arguments);
    };
    var _0x400b19 = _0x17aa78.dynCall_iiidii = function () {
      return (_0x400b19 = _0x17aa78.dynCall_iiidii = _0x17aa78.asm.dynCall_iiidii).apply(null, arguments);
    };
    var _0x15a490 = _0x17aa78.dynCall_vidiii = function () {
      return (_0x15a490 = _0x17aa78.dynCall_vidiii = _0x17aa78.asm.dynCall_vidiii).apply(null, arguments);
    };
    var _0x55a015 = _0x17aa78.dynCall_viijiiiii = function () {
      return (_0x55a015 = _0x17aa78.dynCall_viijiiiii = _0x17aa78.asm.dynCall_viijiiiii).apply(null, arguments);
    };
    var _0x3dbae3 = _0x17aa78.dynCall_viiffffffi = function () {
      return (_0x3dbae3 = _0x17aa78.dynCall_viiffffffi = _0x17aa78.asm.dynCall_viiffffffi).apply(null, arguments);
    };
    var _0x2cdcd4 = _0x17aa78.dynCall_viiffffffffi = function () {
      return (_0x2cdcd4 = _0x17aa78.dynCall_viiffffffffi = _0x17aa78.asm.dynCall_viiffffffffi).apply(null, arguments);
    };
    var _0x117f4e = _0x17aa78.dynCall_viiffffffffiii = function () {
      return (_0x117f4e = _0x17aa78.dynCall_viiffffffffiii = _0x17aa78.asm.dynCall_viiffffffffiii).apply(null, arguments);
    };
    var _0x23f5a0 = _0x17aa78.dynCall_viiiiffffii = function () {
      return (_0x23f5a0 = _0x17aa78.dynCall_viiiiffffii = _0x17aa78.asm.dynCall_viiiiffffii).apply(null, arguments);
    };
    var _0x39d7e8 = _0x17aa78.dynCall_fiiiiii = function () {
      return (_0x39d7e8 = _0x17aa78.dynCall_fiiiiii = _0x17aa78.asm.dynCall_fiiiiii).apply(null, arguments);
    };
    var _0x5f42d7 = _0x17aa78.dynCall_viiijji = function () {
      return (_0x5f42d7 = _0x17aa78.dynCall_viiijji = _0x17aa78.asm.dynCall_viiijji).apply(null, arguments);
    };
    var _0x45801c = _0x17aa78.dynCall_vijiiiiiii = function () {
      return (_0x45801c = _0x17aa78.dynCall_vijiiiiiii = _0x17aa78.asm.dynCall_vijiiiiiii).apply(null, arguments);
    };
    var _0x409c7d = _0x17aa78.dynCall_vijiiiiiiii = function () {
      return (_0x409c7d = _0x17aa78.dynCall_vijiiiiiiii = _0x17aa78.asm.dynCall_vijiiiiiiii).apply(null, arguments);
    };
    var _0x4bd446 = _0x17aa78.dynCall_jjiiii = function () {
      return (_0x4bd446 = _0x17aa78.dynCall_jjiiii = _0x17aa78.asm.dynCall_jjiiii).apply(null, arguments);
    };
    var _0x5d2773 = _0x17aa78.dynCall_jjiiiii = function () {
      return (_0x5d2773 = _0x17aa78.dynCall_jjiiiii = _0x17aa78.asm.dynCall_jjiiiii).apply(null, arguments);
    };
    var _0x228f9b = _0x17aa78.dynCall_jijjji = function () {
      return (_0x228f9b = _0x17aa78.dynCall_jijjji = _0x17aa78.asm.dynCall_jijjji).apply(null, arguments);
    };
    var _0xb6d869 = _0x17aa78.dynCall_jijjjii = function () {
      return (_0xb6d869 = _0x17aa78.dynCall_jijjjii = _0x17aa78.asm.dynCall_jijjjii).apply(null, arguments);
    };
    var _0x25483b = _0x17aa78.dynCall_jjiii = function () {
      return (_0x25483b = _0x17aa78.dynCall_jjiii = _0x17aa78.asm.dynCall_jjiii).apply(null, arguments);
    };
    var _0x694146 = _0x17aa78.dynCall_ijijiiiii = function () {
      return (_0x694146 = _0x17aa78.dynCall_ijijiiiii = _0x17aa78.asm.dynCall_ijijiiiii).apply(null, arguments);
    };
    var _0x41642f = _0x17aa78.dynCall_ijjjiii = function () {
      return (_0x41642f = _0x17aa78.dynCall_ijjjiii = _0x17aa78.asm.dynCall_ijjjiii).apply(null, arguments);
    };
    var _0x183412 = _0x17aa78.dynCall_vijjjiijii = function () {
      return (_0x183412 = _0x17aa78.dynCall_vijjjiijii = _0x17aa78.asm.dynCall_vijjjiijii).apply(null, arguments);
    };
    var _0x4abccf = _0x17aa78.dynCall_ijjjiijii = function () {
      return (_0x4abccf = _0x17aa78.dynCall_ijjjiijii = _0x17aa78.asm.dynCall_ijjjiijii).apply(null, arguments);
    };
    var _0x1ec9da = _0x17aa78.dynCall_jfi = function () {
      return (_0x1ec9da = _0x17aa78.dynCall_jfi = _0x17aa78.asm.dynCall_jfi).apply(null, arguments);
    };
    var _0x28c9de = _0x17aa78.dynCall_fji = function () {
      return (_0x28c9de = _0x17aa78.dynCall_fji = _0x17aa78.asm.dynCall_fji).apply(null, arguments);
    };
    var _0x2a63a1 = _0x17aa78.dynCall_dfi = function () {
      return (_0x2a63a1 = _0x17aa78.dynCall_dfi = _0x17aa78.asm.dynCall_dfi).apply(null, arguments);
    };
    var _0x5b9680 = _0x17aa78.dynCall_jidii = function () {
      return (_0x5b9680 = _0x17aa78.dynCall_jidii = _0x17aa78.asm.dynCall_jidii).apply(null, arguments);
    };
    var _0x10b668 = _0x17aa78.dynCall_viiiiiiiji = function () {
      return (_0x10b668 = _0x17aa78.dynCall_viiiiiiiji = _0x17aa78.asm.dynCall_viiiiiiiji).apply(null, arguments);
    };
    var _0x288619 = _0x17aa78.dynCall_viiiiiiiiji = function () {
      return (_0x288619 = _0x17aa78.dynCall_viiiiiiiiji = _0x17aa78.asm.dynCall_viiiiiiiiji).apply(null, arguments);
    };
    var _0x5eda56 = _0x17aa78.dynCall_viiiiiiiiiji = function () {
      return (_0x5eda56 = _0x17aa78.dynCall_viiiiiiiiiji = _0x17aa78.asm.dynCall_viiiiiiiiiji).apply(null, arguments);
    };
    var _0x159da1 = _0x17aa78.dynCall_ijiijii = function () {
      return (_0x159da1 = _0x17aa78.dynCall_ijiijii = _0x17aa78.asm.dynCall_ijiijii).apply(null, arguments);
    };
    var _0x27d401 = _0x17aa78.dynCall_vjjiiiii = function () {
      return (_0x27d401 = _0x17aa78.dynCall_vjjiiiii = _0x17aa78.asm.dynCall_vjjiiiii).apply(null, arguments);
    };
    var _0x54eeb5 = _0x17aa78.dynCall_vjjii = function () {
      return (_0x54eeb5 = _0x17aa78.dynCall_vjjii = _0x17aa78.asm.dynCall_vjjii).apply(null, arguments);
    };
    var _0x5c4346 = _0x17aa78.dynCall_ijiiji = function () {
      return (_0x5c4346 = _0x17aa78.dynCall_ijiiji = _0x17aa78.asm.dynCall_ijiiji).apply(null, arguments);
    };
    var _0x4a7e41 = _0x17aa78.dynCall_ijiiiii = function () {
      return (_0x4a7e41 = _0x17aa78.dynCall_ijiiiii = _0x17aa78.asm.dynCall_ijiiiii).apply(null, arguments);
    };
    var _0x1ecdb8 = _0x17aa78.dynCall_ijiiiiji = function () {
      return (_0x1ecdb8 = _0x17aa78.dynCall_ijiiiiji = _0x17aa78.asm.dynCall_ijiiiiji).apply(null, arguments);
    };
    var _0x4167d9 = _0x17aa78.dynCall_jiiiiii = function () {
      return (_0x4167d9 = _0x17aa78.dynCall_jiiiiii = _0x17aa78.asm.dynCall_jiiiiii).apply(null, arguments);
    };
    var _0x1c862a = _0x17aa78.dynCall_ddii = function () {
      return (_0x1c862a = _0x17aa78.dynCall_ddii = _0x17aa78.asm.dynCall_ddii).apply(null, arguments);
    };
    var _0x160922 = _0x17aa78.dynCall_idiii = function () {
      return (_0x160922 = _0x17aa78.dynCall_idiii = _0x17aa78.asm.dynCall_idiii).apply(null, arguments);
    };
    var _0x3c9ec5 = _0x17aa78.dynCall_ifiiiii = function () {
      return (_0x3c9ec5 = _0x17aa78.dynCall_ifiiiii = _0x17aa78.asm.dynCall_ifiiiii).apply(null, arguments);
    };
    var _0x352225 = _0x17aa78.dynCall_jjjii = function () {
      return (_0x352225 = _0x17aa78.dynCall_jjjii = _0x17aa78.asm.dynCall_jjjii).apply(null, arguments);
    };
    var _0x5ecbd4 = _0x17aa78.dynCall_vdiii = function () {
      return (_0x5ecbd4 = _0x17aa78.dynCall_vdiii = _0x17aa78.asm.dynCall_vdiii).apply(null, arguments);
    };
    var _0x81578f = _0x17aa78.dynCall_jdii = function () {
      return (_0x81578f = _0x17aa78.dynCall_jdii = _0x17aa78.asm.dynCall_jdii).apply(null, arguments);
    };
    var _0x2a5d0e = _0x17aa78.dynCall_vijijji = function () {
      return (_0x2a5d0e = _0x17aa78.dynCall_vijijji = _0x17aa78.asm.dynCall_vijijji).apply(null, arguments);
    };
    var _0x3cc2e2 = _0x17aa78.dynCall_iijjji = function () {
      return (_0x3cc2e2 = _0x17aa78.dynCall_iijjji = _0x17aa78.asm.dynCall_iijjji).apply(null, arguments);
    };
    var _0x501b90 = _0x17aa78.dynCall_viijjji = function () {
      return (_0x501b90 = _0x17aa78.dynCall_viijjji = _0x17aa78.asm.dynCall_viijjji).apply(null, arguments);
    };
    var _0x1fd790 = _0x17aa78.dynCall_vdii = function () {
      return (_0x1fd790 = _0x17aa78.dynCall_vdii = _0x17aa78.asm.dynCall_vdii).apply(null, arguments);
    };
    var _0x4a063c = _0x17aa78.dynCall_diddi = function () {
      return (_0x4a063c = _0x17aa78.dynCall_diddi = _0x17aa78.asm.dynCall_diddi).apply(null, arguments);
    };
    var _0xf6cf80 = _0x17aa78.dynCall_iijjii = function () {
      return (_0xf6cf80 = _0x17aa78.dynCall_iijjii = _0x17aa78.asm.dynCall_iijjii).apply(null, arguments);
    };
    var _0xcf7e8d = _0x17aa78.dynCall_viijijii = function () {
      return (_0xcf7e8d = _0x17aa78.dynCall_viijijii = _0x17aa78.asm.dynCall_viijijii).apply(null, arguments);
    };
    var _0x3a2ec3 = _0x17aa78.dynCall_vijiji = function () {
      return (_0x3a2ec3 = _0x17aa78.dynCall_vijiji = _0x17aa78.asm.dynCall_vijiji).apply(null, arguments);
    };
    var _0x1d6e31 = _0x17aa78.dynCall_viijiijiii = function () {
      return (_0x1d6e31 = _0x17aa78.dynCall_viijiijiii = _0x17aa78.asm.dynCall_viijiijiii).apply(null, arguments);
    };
    var _0x2d1e09 = _0x17aa78.dynCall_viiiijiiii = function () {
      return (_0x2d1e09 = _0x17aa78.dynCall_viiiijiiii = _0x17aa78.asm.dynCall_viiiijiiii).apply(null, arguments);
    };
    var _0xd66275 = _0x17aa78.dynCall_di = function () {
      return (_0xd66275 = _0x17aa78.dynCall_di = _0x17aa78.asm.dynCall_di).apply(null, arguments);
    };
    var _0x26a786 = _0x17aa78.dynCall_jiiiiiiiii = function () {
      return (_0x26a786 = _0x17aa78.dynCall_jiiiiiiiii = _0x17aa78.asm.dynCall_jiiiiiiiii).apply(null, arguments);
    };
    var _0x1e5e08 = _0x17aa78.dynCall_jiiiiiiiiii = function () {
      return (_0x1e5e08 = _0x17aa78.dynCall_jiiiiiiiiii = _0x17aa78.asm.dynCall_jiiiiiiiiii).apply(null, arguments);
    };
    var _0x28d1c1 = _0x17aa78.dynCall_iiiiijii = function () {
      return (_0x28d1c1 = _0x17aa78.dynCall_iiiiijii = _0x17aa78.asm.dynCall_iiiiijii).apply(null, arguments);
    };
    var _0x74a9c = _0x17aa78.dynCall_iiiiidii = function () {
      return (_0x74a9c = _0x17aa78.dynCall_iiiiidii = _0x17aa78.asm.dynCall_iiiiidii).apply(null, arguments);
    };
    var _0x31663e = _0x17aa78.dynCall_viifffiii = function () {
      return (_0x31663e = _0x17aa78.dynCall_viifffiii = _0x17aa78.asm.dynCall_viifffiii).apply(null, arguments);
    };
    var _0x50c3d1 = _0x17aa78.dynCall_iidfii = function () {
      return (_0x50c3d1 = _0x17aa78.dynCall_iidfii = _0x17aa78.asm.dynCall_iidfii).apply(null, arguments);
    };
    var _0x2ba594 = _0x17aa78.dynCall_iidfi = function () {
      return (_0x2ba594 = _0x17aa78.dynCall_iidfi = _0x17aa78.asm.dynCall_iidfi).apply(null, arguments);
    };
    var _0x4083c8 = _0x17aa78.dynCall_iiddfi = function () {
      return (_0x4083c8 = _0x17aa78.dynCall_iiddfi = _0x17aa78.asm.dynCall_iiddfi).apply(null, arguments);
    };
    var _0x146d8f = _0x17aa78.dynCall_iijfii = function () {
      return (_0x146d8f = _0x17aa78.dynCall_iijfii = _0x17aa78.asm.dynCall_iijfii).apply(null, arguments);
    };
    var _0x579aac = _0x17aa78.dynCall_iijfi = function () {
      return (_0x579aac = _0x17aa78.dynCall_iijfi = _0x17aa78.asm.dynCall_iijfi).apply(null, arguments);
    };
    var _0xaee30f = _0x17aa78.dynCall_iijjfi = function () {
      return (_0xaee30f = _0x17aa78.dynCall_iijjfi = _0x17aa78.asm.dynCall_iijjfi).apply(null, arguments);
    };
    var _0x655127 = _0x17aa78.dynCall_iiiiffiiiji = function () {
      return (_0x655127 = _0x17aa78.dynCall_iiiiffiiiji = _0x17aa78.asm.dynCall_iiiiffiiiji).apply(null, arguments);
    };
    var _0x1a4790 = _0x17aa78.dynCall_iiidfii = function () {
      return (_0x1a4790 = _0x17aa78.dynCall_iiidfii = _0x17aa78.asm.dynCall_iiidfii).apply(null, arguments);
    };
    var _0x22dee6 = _0x17aa78.dynCall_iiijfii = function () {
      return (_0x22dee6 = _0x17aa78.dynCall_iiijfii = _0x17aa78.asm.dynCall_iiijfii).apply(null, arguments);
    };
    var _0xf622d8 = _0x17aa78.dynCall_jiiiiiii = function () {
      return (_0xf622d8 = _0x17aa78.dynCall_jiiiiiii = _0x17aa78.asm.dynCall_jiiiiiii).apply(null, arguments);
    };
    var _0x4cacb7 = _0x17aa78.dynCall_iiiiffiiiii = function () {
      return (_0x4cacb7 = _0x17aa78.dynCall_iiiiffiiiii = _0x17aa78.asm.dynCall_iiiiffiiiii).apply(null, arguments);
    };
    var _0x731ce6 = _0x17aa78.dynCall_iiiidfii = function () {
      return (_0x731ce6 = _0x17aa78.dynCall_iiiidfii = _0x17aa78.asm.dynCall_iiiidfii).apply(null, arguments);
    };
    var _0x47c8f9 = _0x17aa78.dynCall_iiiijfii = function () {
      return (_0x47c8f9 = _0x17aa78.dynCall_iiiijfii = _0x17aa78.asm.dynCall_iiiijfii).apply(null, arguments);
    };
    var _0x49b739 = _0x17aa78.dynCall_diiiidi = function () {
      return (_0x49b739 = _0x17aa78.dynCall_diiiidi = _0x17aa78.asm.dynCall_diiiidi).apply(null, arguments);
    };
    var _0x5eab10 = _0x17aa78.dynCall_jiiiiji = function () {
      return (_0x5eab10 = _0x17aa78.dynCall_jiiiiji = _0x17aa78.asm.dynCall_jiiiiji).apply(null, arguments);
    };
    var _0x19f89d = _0x17aa78.dynCall_fiiiifi = function () {
      return (_0x19f89d = _0x17aa78.dynCall_fiiiifi = _0x17aa78.asm.dynCall_fiiiifi).apply(null, arguments);
    };
    var _0x3257c4 = _0x17aa78.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0x3257c4 = _0x17aa78.dynCall_iiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x299090 = _0x17aa78.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x299090 = _0x17aa78.dynCall_iiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3e4ffd = _0x17aa78.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0x3e4ffd = _0x17aa78.dynCall_iiiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3b1a50 = _0x17aa78.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x3b1a50 = _0x17aa78.dynCall_iiiiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x148adb = _0x17aa78.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0x148adb = _0x17aa78.dynCall_iiiiiiiiiiiiiiiiiii = _0x17aa78.asm.dynCall_iiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3183ea = _0x17aa78.dynCall_iiijjii = function () {
      return (_0x3183ea = _0x17aa78.dynCall_iiijjii = _0x17aa78.asm.dynCall_iiijjii).apply(null, arguments);
    };
    var _0x23c25d = _0x17aa78.dynCall_ijiiiiii = function () {
      return (_0x23c25d = _0x17aa78.dynCall_ijiiiiii = _0x17aa78.asm.dynCall_ijiiiiii).apply(null, arguments);
    };
    var _0x7404ba = _0x17aa78.dynCall_ijjiiiiii = function () {
      return (_0x7404ba = _0x17aa78.dynCall_ijjiiiiii = _0x17aa78.asm.dynCall_ijjiiiiii).apply(null, arguments);
    };
    var _0x329f55 = _0x17aa78.dynCall_vdi = function () {
      return (_0x329f55 = _0x17aa78.dynCall_vdi = _0x17aa78.asm.dynCall_vdi).apply(null, arguments);
    };
    var _0x4942a5 = _0x17aa78.dynCall_vjijii = function () {
      return (_0x4942a5 = _0x17aa78.dynCall_vjijii = _0x17aa78.asm.dynCall_vjijii).apply(null, arguments);
    };
    var _0x12f03d = _0x17aa78.dynCall_fff = function () {
      return (_0x12f03d = _0x17aa78.dynCall_fff = _0x17aa78.asm.dynCall_fff).apply(null, arguments);
    };
    var _0x2f98d1 = _0x17aa78.dynCall_ijj = function () {
      return (_0x2f98d1 = _0x17aa78.dynCall_ijj = _0x17aa78.asm.dynCall_ijj).apply(null, arguments);
    };
    var _0x18ca6f = _0x17aa78.dynCall_vjji = function () {
      return (_0x18ca6f = _0x17aa78.dynCall_vjji = _0x17aa78.asm.dynCall_vjji).apply(null, arguments);
    };
    var _0x7ed884 = _0x17aa78.dynCall_vif = function () {
      return (_0x7ed884 = _0x17aa78.dynCall_vif = _0x17aa78.asm.dynCall_vif).apply(null, arguments);
    };
    var _0x3e9526 = _0x17aa78.dynCall_viif = function () {
      return (_0x3e9526 = _0x17aa78.dynCall_viif = _0x17aa78.asm.dynCall_viif).apply(null, arguments);
    };
    var _0x565c00 = _0x17aa78.dynCall_vid = function () {
      return (_0x565c00 = _0x17aa78.dynCall_vid = _0x17aa78.asm.dynCall_vid).apply(null, arguments);
    };
    var _0x50004a = _0x17aa78.dynCall_viiiiif = function () {
      return (_0x50004a = _0x17aa78.dynCall_viiiiif = _0x17aa78.asm.dynCall_viiiiif).apply(null, arguments);
    };
    var _0x374060 = _0x17aa78.dynCall_viiiif = function () {
      return (_0x374060 = _0x17aa78.dynCall_viiiif = _0x17aa78.asm.dynCall_viiiif).apply(null, arguments);
    };
    var _0x28f830 = _0x17aa78.dynCall_viiiiiif = function () {
      return (_0x28f830 = _0x17aa78.dynCall_viiiiiif = _0x17aa78.asm.dynCall_viiiiiif).apply(null, arguments);
    };
    var _0x24c427 = _0x17aa78.dynCall_iiiijiii = function () {
      return (_0x24c427 = _0x17aa78.dynCall_iiiijiii = _0x17aa78.asm.dynCall_iiiijiii).apply(null, arguments);
    };
    var _0x3d60ff = _0x17aa78.dynCall_iiiij = function () {
      return (_0x3d60ff = _0x17aa78.dynCall_iiiij = _0x17aa78.asm.dynCall_iiiij).apply(null, arguments);
    };
    var _0x47bccb = _0x17aa78.dynCall_iiif = function () {
      return (_0x47bccb = _0x17aa78.dynCall_iiif = _0x17aa78.asm.dynCall_iiif).apply(null, arguments);
    };
    var _0x47aa51 = _0x17aa78.dynCall_fif = function () {
      return (_0x47aa51 = _0x17aa78.dynCall_fif = _0x17aa78.asm.dynCall_fif).apply(null, arguments);
    };
    var _0x2ab058 = _0x17aa78.dynCall_iiiiiifff = function () {
      return (_0x2ab058 = _0x17aa78.dynCall_iiiiiifff = _0x17aa78.asm.dynCall_iiiiiifff).apply(null, arguments);
    };
    var _0x8b8e68 = _0x17aa78.dynCall_iiiiiifiif = function () {
      return (_0x8b8e68 = _0x17aa78.dynCall_iiiiiifiif = _0x17aa78.asm.dynCall_iiiiiifiif).apply(null, arguments);
    };
    var _0x1d5e12 = _0x17aa78.dynCall_iiiiiifiii = function () {
      return (_0x1d5e12 = _0x17aa78.dynCall_iiiiiifiii = _0x17aa78.asm.dynCall_iiiiiifiii).apply(null, arguments);
    };
    var _0xd45a9d = _0x17aa78.dynCall_iiiiiiifiif = function () {
      return (_0xd45a9d = _0x17aa78.dynCall_iiiiiiifiif = _0x17aa78.asm.dynCall_iiiiiiifiif).apply(null, arguments);
    };
    var _0x3802c6 = _0x17aa78.dynCall_fiff = function () {
      return (_0x3802c6 = _0x17aa78.dynCall_fiff = _0x17aa78.asm.dynCall_fiff).apply(null, arguments);
    };
    var _0xd94cbe = _0x17aa78.dynCall_fiiiiiifiifif = function () {
      return (_0xd94cbe = _0x17aa78.dynCall_fiiiiiifiifif = _0x17aa78.asm.dynCall_fiiiiiifiifif).apply(null, arguments);
    };
    var _0x3ba101 = _0x17aa78.dynCall_fiiiiiifiiiif = function () {
      return (_0x3ba101 = _0x17aa78.dynCall_fiiiiiifiiiif = _0x17aa78.asm.dynCall_fiiiiiifiiiif).apply(null, arguments);
    };
    var _0x3cd264 = _0x17aa78.dynCall_iifiiiijii = function () {
      return (_0x3cd264 = _0x17aa78.dynCall_iifiiiijii = _0x17aa78.asm.dynCall_iifiiiijii).apply(null, arguments);
    };
    var _0xd8cd4e = _0x17aa78.dynCall_vifif = function () {
      return (_0xd8cd4e = _0x17aa78.dynCall_vifif = _0x17aa78.asm.dynCall_vifif).apply(null, arguments);
    };
    var _0x423557 = _0x17aa78.dynCall_vifijii = function () {
      return (_0x423557 = _0x17aa78.dynCall_vifijii = _0x17aa78.asm.dynCall_vifijii).apply(null, arguments);
    };
    var _0x591cf9 = _0x17aa78.dynCall_iiiifffiii = function () {
      return (_0x591cf9 = _0x17aa78.dynCall_iiiifffiii = _0x17aa78.asm.dynCall_iiiifffiii).apply(null, arguments);
    };
    var _0x56aa07 = _0x17aa78.dynCall_iiiifffffi = function () {
      return (_0x56aa07 = _0x17aa78.dynCall_iiiifffffi = _0x17aa78.asm.dynCall_iiiifffffi).apply(null, arguments);
    };
    var _0x4caca7 = _0x17aa78.dynCall_viffiiiif = function () {
      return (_0x4caca7 = _0x17aa78.dynCall_viffiiiif = _0x17aa78.asm.dynCall_viffiiiif).apply(null, arguments);
    };
    var _0x12df90 = _0x17aa78.dynCall_viffiifffffiii = function () {
      return (_0x12df90 = _0x17aa78.dynCall_viffiifffffiii = _0x17aa78.asm.dynCall_viffiifffffiii).apply(null, arguments);
    };
    var _0x42cc29 = _0x17aa78.dynCall_viffffiifffiiiiif = function () {
      return (_0x42cc29 = _0x17aa78.dynCall_viffffiifffiiiiif = _0x17aa78.asm.dynCall_viffffiifffiiiiif).apply(null, arguments);
    };
    var _0x3e5f9a = _0x17aa78.dynCall_iiiifffffii = function () {
      return (_0x3e5f9a = _0x17aa78.dynCall_iiiifffffii = _0x17aa78.asm.dynCall_iiiifffffii).apply(null, arguments);
    };
    var _0x13ce38 = _0x17aa78.dynCall_viiiiiiiiiiifii = function () {
      return (_0x13ce38 = _0x17aa78.dynCall_viiiiiiiiiiifii = _0x17aa78.asm.dynCall_viiiiiiiiiiifii).apply(null, arguments);
    };
    var _0x371e7b = _0x17aa78.dynCall_viff = function () {
      return (_0x371e7b = _0x17aa78.dynCall_viff = _0x17aa78.asm.dynCall_viff).apply(null, arguments);
    };
    var _0x23567f = _0x17aa78.dynCall_iiiiifiiiiif = function () {
      return (_0x23567f = _0x17aa78.dynCall_iiiiifiiiiif = _0x17aa78.asm.dynCall_iiiiifiiiiif).apply(null, arguments);
    };
    var _0x578324 = _0x17aa78.dynCall_viiff = function () {
      return (_0x578324 = _0x17aa78.dynCall_viiff = _0x17aa78.asm.dynCall_viiff).apply(null, arguments);
    };
    var _0x290002 = _0x17aa78.dynCall_viiifiiiii = function () {
      return (_0x290002 = _0x17aa78.dynCall_viiifiiiii = _0x17aa78.asm.dynCall_viiifiiiii).apply(null, arguments);
    };
    var _0x4760bb = _0x17aa78.dynCall_viiiifiiiiif = function () {
      return (_0x4760bb = _0x17aa78.dynCall_viiiifiiiiif = _0x17aa78.asm.dynCall_viiiifiiiiif).apply(null, arguments);
    };
    var _0x30a1f2 = _0x17aa78.dynCall_iifff = function () {
      return (_0x30a1f2 = _0x17aa78.dynCall_iifff = _0x17aa78.asm.dynCall_iifff).apply(null, arguments);
    };
    var _0x3cd44a = _0x17aa78.dynCall_iif = function () {
      return (_0x3cd44a = _0x17aa78.dynCall_iif = _0x17aa78.asm.dynCall_iif).apply(null, arguments);
    };
    var _0x25b4fa = _0x17aa78.dynCall_viij = function () {
      return (_0x25b4fa = _0x17aa78.dynCall_viij = _0x17aa78.asm.dynCall_viij).apply(null, arguments);
    };
    var _0x34ee86 = _0x17aa78.dynCall_viijijj = function () {
      return (_0x34ee86 = _0x17aa78.dynCall_viijijj = _0x17aa78.asm.dynCall_viijijj).apply(null, arguments);
    };
    var _0x1669d3 = _0x17aa78.dynCall_viijj = function () {
      return (_0x1669d3 = _0x17aa78.dynCall_viijj = _0x17aa78.asm.dynCall_viijj).apply(null, arguments);
    };
    var _0x12a350 = _0x17aa78.dynCall_viiiij = function () {
      return (_0x12a350 = _0x17aa78.dynCall_viiiij = _0x17aa78.asm.dynCall_viiiij).apply(null, arguments);
    };
    var _0x455485 = _0x17aa78.dynCall_iiijji = function () {
      return (_0x455485 = _0x17aa78.dynCall_iiijji = _0x17aa78.asm.dynCall_iiijji).apply(null, arguments);
    };
    var _0x4f7e85 = _0x17aa78.dynCall_ijjiiiii = function () {
      return (_0x4f7e85 = _0x17aa78.dynCall_ijjiiiii = _0x17aa78.asm.dynCall_ijjiiiii).apply(null, arguments);
    };
    var _0x4db047 = _0x17aa78.dynCall_vidd = function () {
      return (_0x4db047 = _0x17aa78.dynCall_vidd = _0x17aa78.asm.dynCall_vidd).apply(null, arguments);
    };
    var _0x450196 = _0x17aa78.dynCall_iiiiiifffiiifiii = function () {
      return (_0x450196 = _0x17aa78.dynCall_iiiiiifffiiifiii = _0x17aa78.asm.dynCall_iiiiiifffiiifiii).apply(null, arguments);
    };
    var _0x1bb24f = _0x17aa78.dynCall_viid = function () {
      return (_0x1bb24f = _0x17aa78.dynCall_viid = _0x17aa78.asm.dynCall_viid).apply(null, arguments);
    };
    var _0x82ee7d = _0x17aa78.dynCall_viiif = function () {
      return (_0x82ee7d = _0x17aa78.dynCall_viiif = _0x17aa78.asm.dynCall_viiif).apply(null, arguments);
    };
    var _0x3aa640 = _0x17aa78.dynCall_fiiiif = function () {
      return (_0x3aa640 = _0x17aa78.dynCall_fiiiif = _0x17aa78.asm.dynCall_fiiiif).apply(null, arguments);
    };
    var _0x3cfd5a = _0x17aa78.dynCall_iiiiiff = function () {
      return (_0x3cfd5a = _0x17aa78.dynCall_iiiiiff = _0x17aa78.asm.dynCall_iiiiiff).apply(null, arguments);
    };
    var _0x45cd26 = _0x17aa78.dynCall_iiij = function () {
      return (_0x45cd26 = _0x17aa78.dynCall_iiij = _0x17aa78.asm.dynCall_iiij).apply(null, arguments);
    };
    var _0x2fb9eb = _0x17aa78.dynCall_viffffffffffffiiii = function () {
      return (_0x2fb9eb = _0x17aa78.dynCall_viffffffffffffiiii = _0x17aa78.asm.dynCall_viffffffffffffiiii).apply(null, arguments);
    };
    var _0x580560 = _0x17aa78.dynCall_viffff = function () {
      return (_0x580560 = _0x17aa78.dynCall_viffff = _0x17aa78.asm.dynCall_viffff).apply(null, arguments);
    };
    var _0x2fdc0f = _0x17aa78.dynCall_ij = function () {
      return (_0x2fdc0f = _0x17aa78.dynCall_ij = _0x17aa78.asm.dynCall_ij).apply(null, arguments);
    };
    var _0x603659 = _0x17aa78.dynCall_vf = function () {
      return (_0x603659 = _0x17aa78.dynCall_vf = _0x17aa78.asm.dynCall_vf).apply(null, arguments);
    };
    var _0x41d778 = _0x17aa78.dynCall_vffff = function () {
      return (_0x41d778 = _0x17aa78.dynCall_vffff = _0x17aa78.asm.dynCall_vffff).apply(null, arguments);
    };
    var _0x450b7b = _0x17aa78.dynCall_vff = function () {
      return (_0x450b7b = _0x17aa78.dynCall_vff = _0x17aa78.asm.dynCall_vff).apply(null, arguments);
    };
    var _0x21f70f = _0x17aa78.dynCall_vifff = function () {
      return (_0x21f70f = _0x17aa78.dynCall_vifff = _0x17aa78.asm.dynCall_vifff).apply(null, arguments);
    };
    var _0x19e657 = _0x17aa78.dynCall_viifff = function () {
      return (_0x19e657 = _0x17aa78.dynCall_viifff = _0x17aa78.asm.dynCall_viifff).apply(null, arguments);
    };
    var _0x473433 = _0x17aa78.dynCall_vij = function () {
      return (_0x473433 = _0x17aa78.dynCall_vij = _0x17aa78.asm.dynCall_vij).apply(null, arguments);
    };
    var _0x376e11 = _0x17aa78.dynCall_vfff = function () {
      return (_0x376e11 = _0x17aa78.dynCall_vfff = _0x17aa78.asm.dynCall_vfff).apply(null, arguments);
    };
    var _0x5b49ce = _0x17aa78.dynCall_f = function () {
      return (_0x5b49ce = _0x17aa78.dynCall_f = _0x17aa78.asm.dynCall_f).apply(null, arguments);
    };
    var _0xb5bc1d = _0x17aa78.dynCall_ff = function () {
      return (_0xb5bc1d = _0x17aa78.dynCall_ff = _0x17aa78.asm.dynCall_ff).apply(null, arguments);
    };
    var _0x2ecd70 = _0x17aa78.dynCall_iiid = function () {
      return (_0x2ecd70 = _0x17aa78.dynCall_iiid = _0x17aa78.asm.dynCall_iiid).apply(null, arguments);
    };
    var _0x192327 = _0x17aa78.dynCall_vifffff = function () {
      return (_0x192327 = _0x17aa78.dynCall_vifffff = _0x17aa78.asm.dynCall_vifffff).apply(null, arguments);
    };
    var _0x537909 = _0x17aa78.dynCall_viififf = function () {
      return (_0x537909 = _0x17aa78.dynCall_viififf = _0x17aa78.asm.dynCall_viififf).apply(null, arguments);
    };
    var _0x4636cb = _0x17aa78.dynCall_iiififiii = function () {
      return (_0x4636cb = _0x17aa78.dynCall_iiififiii = _0x17aa78.asm.dynCall_iiififiii).apply(null, arguments);
    };
    var _0x4365b7 = _0x17aa78.dynCall_fiif = function () {
      return (_0x4365b7 = _0x17aa78.dynCall_fiif = _0x17aa78.asm.dynCall_fiif).apply(null, arguments);
    };
    var _0xe3e455 = _0x17aa78.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0xe3e455 = _0x17aa78.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x17aa78.asm.dynCall_iiiiiiffiiiiiiiiiffffiii).apply(null, arguments);
    };
    var _0x174878 = _0x17aa78.dynCall_viiffiiiiiiiii = function () {
      return (_0x174878 = _0x17aa78.dynCall_viiffiiiiiiiii = _0x17aa78.asm.dynCall_viiffiiiiiiiii).apply(null, arguments);
    };
    var _0x498d75 = _0x17aa78.dynCall_viiffiiiiii = function () {
      return (_0x498d75 = _0x17aa78.dynCall_viiffiiiiii = _0x17aa78.asm.dynCall_viiffiiiiii).apply(null, arguments);
    };
    var _0x3b213b = _0x17aa78.dynCall_viiiiiiiijiii = function () {
      return (_0x3b213b = _0x17aa78.dynCall_viiiiiiiijiii = _0x17aa78.asm.dynCall_viiiiiiiijiii).apply(null, arguments);
    };
    function _0x45798b(_0x552e3d, _0x8722a9) {
      var _0x2fec95 = _0x47dca3();
      try {
        return _0x399e12(_0x552e3d, _0x8722a9);
      } catch (_0x589ba5) {
        _0xafab9e(_0x2fec95);
        if (_0x589ba5 !== _0x589ba5 + 0) {
          throw _0x589ba5;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x507e2a(_0x351c71) {
      var _0x5702f0 = _0x47dca3();
      try {
        _0x2366b1(_0x351c71);
      } catch (_0x56887e) {
        _0xafab9e(_0x5702f0);
        if (_0x56887e !== _0x56887e + 0) {
          throw _0x56887e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4f938e(_0xc5dfd1, _0x393825, _0x42bb2d) {
      var _0x34b7e8 = _0x47dca3();
      try {
        _0x34cbb3(_0xc5dfd1, _0x393825, _0x42bb2d);
      } catch (_0x461422) {
        _0xafab9e(_0x34b7e8);
        if (_0x461422 !== _0x461422 + 0) {
          throw _0x461422;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x49a667(_0x46e3a5, _0x576e66, _0x20edb2) {
      var _0x317bfd = _0x47dca3();
      try {
        return _0x731b8d(_0x46e3a5, _0x576e66, _0x20edb2);
      } catch (_0x15520f) {
        _0xafab9e(_0x317bfd);
        if (_0x15520f !== _0x15520f + 0) {
          throw _0x15520f;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1b403c(_0x2556d8, _0x3eea42) {
      var _0x40f337 = _0x47dca3();
      try {
        _0x529933(_0x2556d8, _0x3eea42);
      } catch (_0x48c665) {
        _0xafab9e(_0x40f337);
        if (_0x48c665 !== _0x48c665 + 0) {
          throw _0x48c665;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5ef164(_0x16b3d1, _0x55c7bb, _0xd907f8, _0x1afc95) {
      var _0x401003 = _0x47dca3();
      try {
        return _0x3427a6(_0x16b3d1, _0x55c7bb, _0xd907f8, _0x1afc95);
      } catch (_0x27df2c) {
        _0xafab9e(_0x401003);
        if (_0x27df2c !== _0x27df2c + 0) {
          throw _0x27df2c;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5f3379(_0x3dca30, _0x38fc33, _0x1f68e1, _0x5819e7, _0x4c6107) {
      var _0x319892 = _0x47dca3();
      try {
        return _0x137916(_0x3dca30, _0x38fc33, _0x1f68e1, _0x5819e7, _0x4c6107);
      } catch (_0x3a0ede) {
        _0xafab9e(_0x319892);
        if (_0x3a0ede !== _0x3a0ede + 0) {
          throw _0x3a0ede;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1cbc46(_0x5517c2, _0x1d0a72, _0x101fb3, _0x4a7f3e, _0x39586e, _0x25ac23) {
      var _0xfe24e1 = _0x47dca3();
      try {
        return _0x328299(_0x5517c2, _0x1d0a72, _0x101fb3, _0x4a7f3e, _0x39586e, _0x25ac23);
      } catch (_0x17bf59) {
        _0xafab9e(_0xfe24e1);
        if (_0x17bf59 !== _0x17bf59 + 0) {
          throw _0x17bf59;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x57bbd1(_0x3cf3a4, _0x315415, _0x4a7bd6, _0xcc7fdc) {
      var _0x156c4f = _0x47dca3();
      try {
        _0x17e77d(_0x3cf3a4, _0x315415, _0x4a7bd6, _0xcc7fdc);
      } catch (_0x4161af) {
        _0xafab9e(_0x156c4f);
        if (_0x4161af !== _0x4161af + 0) {
          throw _0x4161af;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x41df3a(_0x4c9488, _0x1fd0db, _0x5143cd, _0x5e8116, _0x356b13, _0x2aa7d2, _0x5c69d5, _0x2a9285) {
      var _0x121b1b = _0x47dca3();
      try {
        return _0x27d67f(_0x4c9488, _0x1fd0db, _0x5143cd, _0x5e8116, _0x356b13, _0x2aa7d2, _0x5c69d5, _0x2a9285);
      } catch (_0x184522) {
        _0xafab9e(_0x121b1b);
        if (_0x184522 !== _0x184522 + 0) {
          throw _0x184522;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4fd677(_0x16aa48) {
      var _0x1fd9e1 = _0x47dca3();
      try {
        return _0x867403(_0x16aa48);
      } catch (_0x14328b) {
        _0xafab9e(_0x1fd9e1);
        if (_0x14328b !== _0x14328b + 0) {
          throw _0x14328b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x13d6cb(_0x13e6cc, _0xe2e32c, _0x3ce6be, _0x5804d6, _0x2509f2) {
      var _0x3014d5 = _0x47dca3();
      try {
        _0x24cce8(_0x13e6cc, _0xe2e32c, _0x3ce6be, _0x5804d6, _0x2509f2);
      } catch (_0x4597d4) {
        _0xafab9e(_0x3014d5);
        if (_0x4597d4 !== _0x4597d4 + 0) {
          throw _0x4597d4;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2270f1(_0x2b8003, _0x3dfad3, _0x509650, _0x8a66a2, _0x30058f, _0x2b8f11, _0xd6c3e9) {
      var _0x585141 = _0x47dca3();
      try {
        return _0x410025(_0x2b8003, _0x3dfad3, _0x509650, _0x8a66a2, _0x30058f, _0x2b8f11, _0xd6c3e9);
      } catch (_0x104e8a) {
        _0xafab9e(_0x585141);
        if (_0x104e8a !== _0x104e8a + 0) {
          throw _0x104e8a;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x225436(_0x59d778, _0x557356, _0x4304cc, _0xa0ff33, _0x299a2e, _0x23044d, _0x5108e2, _0x36f16d, _0x2e7cd9, _0x3804c2, _0x79c2d2) {
      var _0x236ef2 = _0x47dca3();
      try {
        return _0x1e500d(_0x59d778, _0x557356, _0x4304cc, _0xa0ff33, _0x299a2e, _0x23044d, _0x5108e2, _0x36f16d, _0x2e7cd9, _0x3804c2, _0x79c2d2);
      } catch (_0x4420ec) {
        _0xafab9e(_0x236ef2);
        if (_0x4420ec !== _0x4420ec + 0) {
          throw _0x4420ec;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4f8860(_0xb692e9, _0x5745a1, _0x275db4, _0x20bcd5) {
      var _0x5eece2 = _0x47dca3();
      try {
        return _0x8c96fa(_0xb692e9, _0x5745a1, _0x275db4, _0x20bcd5);
      } catch (_0x5c1279) {
        _0xafab9e(_0x5eece2);
        if (_0x5c1279 !== _0x5c1279 + 0) {
          throw _0x5c1279;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x106775(_0x60dc9f, _0x553382, _0x3a8222, _0x380ea0) {
      var _0x2a55d2 = _0x47dca3();
      try {
        return _0x3cd25b(_0x60dc9f, _0x553382, _0x3a8222, _0x380ea0);
      } catch (_0x3608a8) {
        _0xafab9e(_0x2a55d2);
        if (_0x3608a8 !== _0x3608a8 + 0) {
          throw _0x3608a8;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x331ad1(_0x307afc, _0x51139d, _0x146142, _0x335cd2, _0x2cf2c7, _0xf57270, _0x51fe64, _0x2cf52a) {
      var _0x1da18a = _0x47dca3();
      try {
        _0x158723(_0x307afc, _0x51139d, _0x146142, _0x335cd2, _0x2cf2c7, _0xf57270, _0x51fe64, _0x2cf52a);
      } catch (_0x7fcbf9) {
        _0xafab9e(_0x1da18a);
        if (_0x7fcbf9 !== _0x7fcbf9 + 0) {
          throw _0x7fcbf9;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x112ded(_0x402fc6, _0x3e70a4, _0x2d92e5, _0x1a1a0e, _0x341f24, _0xe1d532, _0x413feb, _0x2e489a, _0x34ce65, _0x439ffa, _0xc4a07b) {
      var _0x24b5b0 = _0x47dca3();
      try {
        _0x123fe6(_0x402fc6, _0x3e70a4, _0x2d92e5, _0x1a1a0e, _0x341f24, _0xe1d532, _0x413feb, _0x2e489a, _0x34ce65, _0x439ffa, _0xc4a07b);
      } catch (_0x452470) {
        _0xafab9e(_0x24b5b0);
        if (_0x452470 !== _0x452470 + 0) {
          throw _0x452470;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x116e42(_0x15fbe8, _0x975df, _0x370c54, _0x167b8f, _0x5475e5, _0x2f7490, _0x274c26) {
      var _0x5a6d51 = _0x47dca3();
      try {
        _0x1738f7(_0x15fbe8, _0x975df, _0x370c54, _0x167b8f, _0x5475e5, _0x2f7490, _0x274c26);
      } catch (_0x33789e) {
        _0xafab9e(_0x5a6d51);
        if (_0x33789e !== _0x33789e + 0) {
          throw _0x33789e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4ec25b(_0x83681c, _0x4df697, _0x4d8a7d, _0x8b5545, _0x35930b, _0x3e3aac) {
      var _0x4fb3c8 = _0x47dca3();
      try {
        _0x51b946(_0x83681c, _0x4df697, _0x4d8a7d, _0x8b5545, _0x35930b, _0x3e3aac);
      } catch (_0x38d6fe) {
        _0xafab9e(_0x4fb3c8);
        if (_0x38d6fe !== _0x38d6fe + 0) {
          throw _0x38d6fe;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x65aae1(_0x2cdce5, _0x39822f, _0x389e33, _0x151037, _0x59816c, _0x1f0d69, _0x4e3fa9) {
      var _0x1c9260 = _0x47dca3();
      try {
        return _0x28e8c1(_0x2cdce5, _0x39822f, _0x389e33, _0x151037, _0x59816c, _0x1f0d69, _0x4e3fa9);
      } catch (_0x1122a1) {
        _0xafab9e(_0x1c9260);
        if (_0x1122a1 !== _0x1122a1 + 0) {
          throw _0x1122a1;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1556da(_0x52d9a4, _0x3e08ef, _0x1c06c3, _0x464923, _0x3f4479, _0x11d0a8, _0x11e13d) {
      var _0x5cfd19 = _0x47dca3();
      try {
        return _0x4d57a9(_0x52d9a4, _0x3e08ef, _0x1c06c3, _0x464923, _0x3f4479, _0x11d0a8, _0x11e13d);
      } catch (_0xe2a766) {
        _0xafab9e(_0x5cfd19);
        if (_0xe2a766 !== _0xe2a766 + 0) {
          throw _0xe2a766;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2d7dea(_0x1fed6b, _0x67ad33, _0x3c79ea, _0x1847d3) {
      var _0x41ce14 = _0x47dca3();
      try {
        _0x2b7e35(_0x1fed6b, _0x67ad33, _0x3c79ea, _0x1847d3);
      } catch (_0x1c4d3a) {
        _0xafab9e(_0x41ce14);
        if (_0x1c4d3a !== _0x1c4d3a + 0) {
          throw _0x1c4d3a;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2497ef(_0x3f8549, _0x2b4ca4, _0x4dcc59, _0x5490fb, _0x4b0782) {
      var _0x54bdd8 = _0x47dca3();
      try {
        _0x7e957a(_0x3f8549, _0x2b4ca4, _0x4dcc59, _0x5490fb, _0x4b0782);
      } catch (_0x433f11) {
        _0xafab9e(_0x54bdd8);
        if (_0x433f11 !== _0x433f11 + 0) {
          throw _0x433f11;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1028c1(_0x4856ae, _0x41d0f6, _0x36c8b7) {
      var _0x1482c6 = _0x47dca3();
      try {
        return _0x2bb254(_0x4856ae, _0x41d0f6, _0x36c8b7);
      } catch (_0xff6dd9) {
        _0xafab9e(_0x1482c6);
        if (_0xff6dd9 !== _0xff6dd9 + 0) {
          throw _0xff6dd9;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5d943d(_0x8f14d3, _0x5259b1, _0x2790fc, _0xd8c902, _0x24d902, _0x3b1e4b, _0x332da2, _0x23437b, _0x13cca0, _0x193f41, _0x1b24ec, _0x36a34a, _0x1c5444, _0x3ed0f4, _0x16c026) {
      var _0xceab99 = _0x47dca3();
      try {
        _0x6f6f39(_0x8f14d3, _0x5259b1, _0x2790fc, _0xd8c902, _0x24d902, _0x3b1e4b, _0x332da2, _0x23437b, _0x13cca0, _0x193f41, _0x1b24ec, _0x36a34a, _0x1c5444, _0x3ed0f4, _0x16c026);
      } catch (_0x53807f) {
        _0xafab9e(_0xceab99);
        if (_0x53807f !== _0x53807f + 0) {
          throw _0x53807f;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x29aea3(_0x1358a5, _0x2ccc69, _0x263e70, _0x6f98ed) {
      var _0xd9e65b = _0x47dca3();
      try {
        _0x38508c(_0x1358a5, _0x2ccc69, _0x263e70, _0x6f98ed);
      } catch (_0x164f40) {
        _0xafab9e(_0xd9e65b);
        if (_0x164f40 !== _0x164f40 + 0) {
          throw _0x164f40;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1748f4(_0x18ae76, _0x539fd0, _0x50f90a, _0x2a7257, _0x202e4a) {
      var _0x25b681 = _0x47dca3();
      try {
        _0x3c52db(_0x18ae76, _0x539fd0, _0x50f90a, _0x2a7257, _0x202e4a);
      } catch (_0x1c3a90) {
        _0xafab9e(_0x25b681);
        if (_0x1c3a90 !== _0x1c3a90 + 0) {
          throw _0x1c3a90;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x348491(_0x472851, _0x49cc4, _0x13caed) {
      var _0x57dcb2 = _0x47dca3();
      try {
        return _0x55ed24(_0x472851, _0x49cc4, _0x13caed);
      } catch (_0x26f964) {
        _0xafab9e(_0x57dcb2);
        if (_0x26f964 !== _0x26f964 + 0) {
          throw _0x26f964;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x34a877(_0x45e3de, _0x1279bd, _0x308e48, _0x15e61f, _0x373518, _0x68273) {
      var _0x5d5475 = _0x47dca3();
      try {
        return _0x522f6c(_0x45e3de, _0x1279bd, _0x308e48, _0x15e61f, _0x373518, _0x68273);
      } catch (_0x5c8d0d) {
        _0xafab9e(_0x5d5475);
        if (_0x5c8d0d !== _0x5c8d0d + 0) {
          throw _0x5c8d0d;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5cdc1a(_0x237335, _0x459bea, _0x425fd7, _0x20ea77, _0x1e8eec, _0x27a79b) {
      var _0x214209 = _0x47dca3();
      try {
        _0x4b0074(_0x237335, _0x459bea, _0x425fd7, _0x20ea77, _0x1e8eec, _0x27a79b);
      } catch (_0x685bdd) {
        _0xafab9e(_0x214209);
        if (_0x685bdd !== _0x685bdd + 0) {
          throw _0x685bdd;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4662c8(_0x2276e0, _0x1adc83) {
      var _0x4c5c1b = _0x47dca3();
      try {
        return _0x163d64(_0x2276e0, _0x1adc83);
      } catch (_0x26da00) {
        _0xafab9e(_0x4c5c1b);
        if (_0x26da00 !== _0x26da00 + 0) {
          throw _0x26da00;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2c3c58(_0x3ae82a, _0x2e92d4, _0x2ea7c5, _0x28cd4d) {
      var _0x4289ab = _0x47dca3();
      try {
        return _0x54a87d(_0x3ae82a, _0x2e92d4, _0x2ea7c5, _0x28cd4d);
      } catch (_0x40bf32) {
        _0xafab9e(_0x4289ab);
        if (_0x40bf32 !== _0x40bf32 + 0) {
          throw _0x40bf32;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4419f7(_0x5ea57e, _0x263b53, _0x25506a, _0x3acf2d, _0xab7f3f, _0x5dba2a, _0x18c2f5, _0x198ed1, _0x22f463) {
      var _0x1afac7 = _0x47dca3();
      try {
        _0x4e1358(_0x5ea57e, _0x263b53, _0x25506a, _0x3acf2d, _0xab7f3f, _0x5dba2a, _0x18c2f5, _0x198ed1, _0x22f463);
      } catch (_0x14960d) {
        _0xafab9e(_0x1afac7);
        if (_0x14960d !== _0x14960d + 0) {
          throw _0x14960d;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x3bd584(_0xbb15ed, _0x58c263, _0x12406, _0x47a11f, _0x2ce93f, _0x51ddff) {
      var _0x22d13e = _0x47dca3();
      try {
        _0x2ec8b7(_0xbb15ed, _0x58c263, _0x12406, _0x47a11f, _0x2ce93f, _0x51ddff);
      } catch (_0x12228d) {
        _0xafab9e(_0x22d13e);
        if (_0x12228d !== _0x12228d + 0) {
          throw _0x12228d;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0xdfbc6(_0x6815ec, _0x49ac9f, _0x286ea2, _0x447190, _0x30abef) {
      var _0x27c0a9 = _0x47dca3();
      try {
        _0x364174(_0x6815ec, _0x49ac9f, _0x286ea2, _0x447190, _0x30abef);
      } catch (_0x184d11) {
        _0xafab9e(_0x27c0a9);
        if (_0x184d11 !== _0x184d11 + 0) {
          throw _0x184d11;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x3d04ca(_0x32c498, _0x678aa0, _0x18e338, _0x18c975, _0x1aaf25, _0x29e3b1, _0x43c9d1, _0x3691d2, _0x4c3eb0, _0x1af688) {
      var _0x3b1a48 = _0x47dca3();
      try {
        return _0x52a03c(_0x32c498, _0x678aa0, _0x18e338, _0x18c975, _0x1aaf25, _0x29e3b1, _0x43c9d1, _0x3691d2, _0x4c3eb0, _0x1af688);
      } catch (_0x334336) {
        _0xafab9e(_0x3b1a48);
        if (_0x334336 !== _0x334336 + 0) {
          throw _0x334336;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x359e00(_0x4b910e, _0x4ed4ac, _0x128cba, _0x39025c, _0x4394e0, _0x193ac6, _0x2c58ba, _0x369826, _0x48505a) {
      var _0x1b07f2 = _0x47dca3();
      try {
        return _0x890330(_0x4b910e, _0x4ed4ac, _0x128cba, _0x39025c, _0x4394e0, _0x193ac6, _0x2c58ba, _0x369826, _0x48505a);
      } catch (_0x1163f3) {
        _0xafab9e(_0x1b07f2);
        if (_0x1163f3 !== _0x1163f3 + 0) {
          throw _0x1163f3;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x44db83(_0x4d132b, _0x2ed949, _0x58b7e3, _0x4eeb0f, _0x876b76, _0x15d69e, _0x2800f6, _0x329dfa, _0x49e3e4, _0x425cd0) {
      var _0x181cf5 = _0x47dca3();
      try {
        _0x251740(_0x4d132b, _0x2ed949, _0x58b7e3, _0x4eeb0f, _0x876b76, _0x15d69e, _0x2800f6, _0x329dfa, _0x49e3e4, _0x425cd0);
      } catch (_0x353623) {
        _0xafab9e(_0x181cf5);
        if (_0x353623 !== _0x353623 + 0) {
          throw _0x353623;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x13395e(_0x2c25de, _0x41e449, _0x38635c) {
      var _0x145632 = _0x47dca3();
      try {
        return _0x684dc7(_0x2c25de, _0x41e449, _0x38635c);
      } catch (_0x2c9f9d) {
        _0xafab9e(_0x145632);
        if (_0x2c9f9d !== _0x2c9f9d + 0) {
          throw _0x2c9f9d;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x29532a(_0x46e54f, _0x4c32c4, _0x9b97c1) {
      var _0x555fc2 = _0x47dca3();
      try {
        return _0x410351(_0x46e54f, _0x4c32c4, _0x9b97c1);
      } catch (_0x4e0600) {
        _0xafab9e(_0x555fc2);
        if (_0x4e0600 !== _0x4e0600 + 0) {
          throw _0x4e0600;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x344098(_0x4bcade, _0x3cb3ff, _0x214e38, _0x4a3774) {
      var _0x101188 = _0x47dca3();
      try {
        return _0x43793e(_0x4bcade, _0x3cb3ff, _0x214e38, _0x4a3774);
      } catch (_0x5ad94f) {
        _0xafab9e(_0x101188);
        if (_0x5ad94f !== _0x5ad94f + 0) {
          throw _0x5ad94f;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1188f8(_0x17a918, _0x30d48b, _0x52087e, _0x319bde) {
      var _0x57046a = _0x47dca3();
      try {
        return _0x5f18b0(_0x17a918, _0x30d48b, _0x52087e, _0x319bde);
      } catch (_0xf1f0ff) {
        _0xafab9e(_0x57046a);
        if (_0xf1f0ff !== _0xf1f0ff + 0) {
          throw _0xf1f0ff;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x29e51c(_0x31494d, _0x23ac63, _0x27bb2a, _0x4e0e04, _0x45cc82) {
      var _0x2f8340 = _0x47dca3();
      try {
        return _0xc22589(_0x31494d, _0x23ac63, _0x27bb2a, _0x4e0e04, _0x45cc82);
      } catch (_0x517cd8) {
        _0xafab9e(_0x2f8340);
        if (_0x517cd8 !== _0x517cd8 + 0) {
          throw _0x517cd8;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5ab664(_0x2b2397, _0x143acc, _0x37d64b, _0x688004) {
      var _0x3747c1 = _0x47dca3();
      try {
        return _0x35f86c(_0x2b2397, _0x143acc, _0x37d64b, _0x688004);
      } catch (_0x2b48af) {
        _0xafab9e(_0x3747c1);
        if (_0x2b48af !== _0x2b48af + 0) {
          throw _0x2b48af;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x49b249(_0xbc9984, _0x3e4375, _0xbda9a3, _0x4e2c4c, _0x138d71, _0x1128b3) {
      var _0x5b8918 = _0x47dca3();
      try {
        return _0x54e2b8(_0xbc9984, _0x3e4375, _0xbda9a3, _0x4e2c4c, _0x138d71, _0x1128b3);
      } catch (_0x2dfa6b) {
        _0xafab9e(_0x5b8918);
        if (_0x2dfa6b !== _0x2dfa6b + 0) {
          throw _0x2dfa6b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x18ae50(_0x539b24, _0x52c5ce, _0x3939bc, _0x505763) {
      var _0x54b851 = _0x47dca3();
      try {
        return _0x2ecd70(_0x539b24, _0x52c5ce, _0x3939bc, _0x505763);
      } catch (_0x30c93e) {
        _0xafab9e(_0x54b851);
        if (_0x30c93e !== _0x30c93e + 0) {
          throw _0x30c93e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x81663a(_0x488b81, _0x247a7c, _0x2424b0, _0x5381f4, _0x10fcac, _0x153a19, _0x1d8c3c) {
      var _0x2a147d = _0x47dca3();
      try {
        _0x120e27(_0x488b81, _0x247a7c, _0x2424b0, _0x5381f4, _0x10fcac, _0x153a19, _0x1d8c3c);
      } catch (_0x590b9b) {
        _0xafab9e(_0x2a147d);
        if (_0x590b9b !== _0x590b9b + 0) {
          throw _0x590b9b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x24ecf4(_0x1687cf, _0x3b6e96, _0x118d07, _0x2c92c3, _0x473ed4, _0x4aee14, _0x57e8ec) {
      var _0x4c7862 = _0x47dca3();
      try {
        _0x1d79a7(_0x1687cf, _0x3b6e96, _0x118d07, _0x2c92c3, _0x473ed4, _0x4aee14, _0x57e8ec);
      } catch (_0x1327af) {
        _0xafab9e(_0x4c7862);
        if (_0x1327af !== _0x1327af + 0) {
          throw _0x1327af;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2bab1b(_0x5a9f77, _0x569a2d, _0x5e1984, _0x42fc33, _0x53fee5, _0x41506c, _0x51b467) {
      var _0x3130c8 = _0x47dca3();
      try {
        return _0xf2b8a6(_0x5a9f77, _0x569a2d, _0x5e1984, _0x42fc33, _0x53fee5, _0x41506c, _0x51b467);
      } catch (_0x1a8b11) {
        _0xafab9e(_0x3130c8);
        if (_0x1a8b11 !== _0x1a8b11 + 0) {
          throw _0x1a8b11;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x411405(_0x304001, _0x1235cb, _0x4d4140, _0x3037d1, _0x298fb8, _0x3020c5) {
      var _0x3b9dd0 = _0x47dca3();
      try {
        return _0x400b19(_0x304001, _0x1235cb, _0x4d4140, _0x3037d1, _0x298fb8, _0x3020c5);
      } catch (_0x53e78a) {
        _0xafab9e(_0x3b9dd0);
        if (_0x53e78a !== _0x53e78a + 0) {
          throw _0x53e78a;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x3b0bcf(_0xd73347, _0x466572, _0x2e1254, _0x34f19d, _0x437147) {
      var _0x4a2516 = _0x47dca3();
      try {
        _0x49a193(_0xd73347, _0x466572, _0x2e1254, _0x34f19d, _0x437147);
      } catch (_0x4a2164) {
        _0xafab9e(_0x4a2516);
        if (_0x4a2164 !== _0x4a2164 + 0) {
          throw _0x4a2164;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x195b24(_0x58e09f, _0x1dccbc, _0x22ce55, _0x1691ad, _0x191c3d, _0x3fbbe1, _0x5ddbe7, _0xc9f70a, _0x5604b4, _0xf19422, _0x7a123a, _0x58949c, _0x46d9c4, _0x2c6f5a, _0x589ac6) {
      var _0x4f929a = _0x47dca3();
      try {
        _0x3296bf(_0x58e09f, _0x1dccbc, _0x22ce55, _0x1691ad, _0x191c3d, _0x3fbbe1, _0x5ddbe7, _0xc9f70a, _0x5604b4, _0xf19422, _0x7a123a, _0x58949c, _0x46d9c4, _0x2c6f5a, _0x589ac6);
      } catch (_0x3248d7) {
        _0xafab9e(_0x4f929a);
        if (_0x3248d7 !== _0x3248d7 + 0) {
          throw _0x3248d7;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1b5edf(_0x5428b1, _0x535fb9, _0x49da67, _0x702bbf, _0x52844, _0x463cbd, _0x20b565, _0x27432b, _0x2e75e7, _0x4723ed, _0xc1e0d5, _0x415a08, _0x305490, _0x4db60a, _0xcbad77) {
      var _0x42e6fe = _0x47dca3();
      try {
        _0x265aa2(_0x5428b1, _0x535fb9, _0x49da67, _0x702bbf, _0x52844, _0x463cbd, _0x20b565, _0x27432b, _0x2e75e7, _0x4723ed, _0xc1e0d5, _0x415a08, _0x305490, _0x4db60a, _0xcbad77);
      } catch (_0x53667e) {
        _0xafab9e(_0x42e6fe);
        if (_0x53667e !== _0x53667e + 0) {
          throw _0x53667e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x105839(_0x6f70cf, _0x50fe62, _0x1aec3e, _0x3a4080, _0x16a921) {
      var _0x322755 = _0x47dca3();
      try {
        return _0x784e8f(_0x6f70cf, _0x50fe62, _0x1aec3e, _0x3a4080, _0x16a921);
      } catch (_0xe11208) {
        _0xafab9e(_0x322755);
        if (_0xe11208 !== _0xe11208 + 0) {
          throw _0xe11208;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x444150(_0x41b5f3, _0x41a5a4, _0x1c60cd, _0xb50b45) {
      var _0x25dc88 = _0x47dca3();
      try {
        _0x1bb24f(_0x41b5f3, _0x41a5a4, _0x1c60cd, _0xb50b45);
      } catch (_0x577ce4) {
        _0xafab9e(_0x25dc88);
        if (_0x577ce4 !== _0x577ce4 + 0) {
          throw _0x577ce4;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x100f8d(_0xd13e2d, _0x3c91bc, _0xbab758, _0x46edfb) {
      var _0x3b0244 = _0x47dca3();
      try {
        _0x3e9526(_0xd13e2d, _0x3c91bc, _0xbab758, _0x46edfb);
      } catch (_0x705f14) {
        _0xafab9e(_0x3b0244);
        if (_0x705f14 !== _0x705f14 + 0) {
          throw _0x705f14;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1685a6(_0x230ad0, _0x3e6c73, _0x45b3ce, _0x4df62a, _0x4b58e4, _0x49cae5, _0x306b14, _0x2c925e, _0x321299, _0x4af12f, _0x3ab03a, _0x2b0e51, _0x920f1f) {
      var _0x4f60bc = _0x47dca3();
      try {
        _0x5d826e(_0x230ad0, _0x3e6c73, _0x45b3ce, _0x4df62a, _0x4b58e4, _0x49cae5, _0x306b14, _0x2c925e, _0x321299, _0x4af12f, _0x3ab03a, _0x2b0e51, _0x920f1f);
      } catch (_0x6f1924) {
        _0xafab9e(_0x4f60bc);
        if (_0x6f1924 !== _0x6f1924 + 0) {
          throw _0x6f1924;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x27db1c(_0x39d7f1, _0x344d7c, _0x13ffb7, _0x55bde2, _0x1fbba2, _0x28c4ac, _0x4c50f4, _0x530e39, _0x535306, _0x493510, _0x51636f, _0x4c712a, _0x1f305d, _0x2228ea) {
      var _0x14e0ce = _0x47dca3();
      try {
        _0x3df42f(_0x39d7f1, _0x344d7c, _0x13ffb7, _0x55bde2, _0x1fbba2, _0x28c4ac, _0x4c50f4, _0x530e39, _0x535306, _0x493510, _0x51636f, _0x4c712a, _0x1f305d, _0x2228ea);
      } catch (_0x351693) {
        _0xafab9e(_0x14e0ce);
        if (_0x351693 !== _0x351693 + 0) {
          throw _0x351693;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x3f99ae(_0x5f677f, _0x161848, _0x239ed2, _0x21566b, _0x5b9cb8) {
      var _0x22c0f8 = _0x47dca3();
      try {
        return _0x39382e(_0x5f677f, _0x161848, _0x239ed2, _0x21566b, _0x5b9cb8);
      } catch (_0xd23b79) {
        _0xafab9e(_0x22c0f8);
        if (_0xd23b79 !== _0xd23b79 + 0) {
          throw _0xd23b79;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x357a81(_0x436edb, _0x7a1ef6, _0x5a9b95, _0x4329c9, _0x3e80c3) {
      var _0x67eff1 = _0x47dca3();
      try {
        return _0x4258c2(_0x436edb, _0x7a1ef6, _0x5a9b95, _0x4329c9, _0x3e80c3);
      } catch (_0x30beb8) {
        _0xafab9e(_0x67eff1);
        if (_0x30beb8 !== _0x30beb8 + 0) {
          throw _0x30beb8;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x8af767(_0x1e607f, _0x250647, _0x171046, _0x36e165, _0x106ffb) {
      var _0x1030a9 = _0x47dca3();
      try {
        return _0x21ef9f(_0x1e607f, _0x250647, _0x171046, _0x36e165, _0x106ffb);
      } catch (_0x278289) {
        _0xafab9e(_0x1030a9);
        if (_0x278289 !== _0x278289 + 0) {
          throw _0x278289;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x53ed58(_0x187550, _0x1d7c85, _0x5a0529, _0x4ea681, _0x1ed6b9) {
      var _0x210968 = _0x47dca3();
      try {
        return _0x57590e(_0x187550, _0x1d7c85, _0x5a0529, _0x4ea681, _0x1ed6b9);
      } catch (_0x502501) {
        _0xafab9e(_0x210968);
        if (_0x502501 !== _0x502501 + 0) {
          throw _0x502501;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x43c8bf(_0x19f7b3, _0x5e0446, _0x391e05, _0x2423f3) {
      var _0x344f90 = _0x47dca3();
      try {
        _0x4db047(_0x19f7b3, _0x5e0446, _0x391e05, _0x2423f3);
      } catch (_0x498978) {
        _0xafab9e(_0x344f90);
        if (_0x498978 !== _0x498978 + 0) {
          throw _0x498978;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x216e5e(_0x2163b8, _0x525870, _0x152a59, _0x3d6482) {
      var _0x50bc2e = _0x47dca3();
      try {
        return _0x2c9b5e(_0x2163b8, _0x525870, _0x152a59, _0x3d6482);
      } catch (_0xf7b65) {
        _0xafab9e(_0x50bc2e);
        if (_0xf7b65 !== _0xf7b65 + 0) {
          throw _0xf7b65;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x24ef61(_0x2f4d72, _0x348375, _0x2ba5d2, _0x4c8ac7, _0x5ed650, _0x37c5d7, _0x4b9dba, _0x5c3942) {
      var _0x431b2c = _0x47dca3();
      try {
        return _0x4cd5b9(_0x2f4d72, _0x348375, _0x2ba5d2, _0x4c8ac7, _0x5ed650, _0x37c5d7, _0x4b9dba, _0x5c3942);
      } catch (_0x49ce12) {
        _0xafab9e(_0x431b2c);
        if (_0x49ce12 !== _0x49ce12 + 0) {
          throw _0x49ce12;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x38feeb(_0x2a802d, _0x32f8de, _0x188623) {
      var _0xc387c9 = _0x47dca3();
      try {
        return _0x129621(_0x2a802d, _0x32f8de, _0x188623);
      } catch (_0x332089) {
        _0xafab9e(_0xc387c9);
        if (_0x332089 !== _0x332089 + 0) {
          throw _0x332089;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x91cb8(_0x531729, _0x1f4923, _0x455cd5, _0x9556b2, _0x197950) {
      var _0x47e4b6 = _0x47dca3();
      try {
        return _0x266573(_0x531729, _0x1f4923, _0x455cd5, _0x9556b2, _0x197950);
      } catch (_0x2e597e) {
        _0xafab9e(_0x47e4b6);
        if (_0x2e597e !== _0x2e597e + 0) {
          throw _0x2e597e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x37e8ef(_0x4c061b, _0x3e6ea5) {
      var _0x57a6d9 = _0x47dca3();
      try {
        return _0x4e670c(_0x4c061b, _0x3e6ea5);
      } catch (_0x10b831) {
        _0xafab9e(_0x57a6d9);
        if (_0x10b831 !== _0x10b831 + 0) {
          throw _0x10b831;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1de423(_0x32de9a, _0x2e073, _0x5d03c3, _0x5ba48c, _0x5a7eec, _0x5735cf, _0x3055f1) {
      var _0x22746d = _0x47dca3();
      try {
        _0xbd8084(_0x32de9a, _0x2e073, _0x5d03c3, _0x5ba48c, _0x5a7eec, _0x5735cf, _0x3055f1);
      } catch (_0x4ec8b4) {
        _0xafab9e(_0x22746d);
        if (_0x4ec8b4 !== _0x4ec8b4 + 0) {
          throw _0x4ec8b4;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x51e616(_0x3fea79, _0x2809e0, _0x1e1794, _0x4b8e18, _0x4beab6, _0x237c6e, _0x4b3634) {
      var _0x4e4989 = _0x47dca3();
      try {
        return _0x156cf6(_0x3fea79, _0x2809e0, _0x1e1794, _0x4b8e18, _0x4beab6, _0x237c6e, _0x4b3634);
      } catch (_0x41851b) {
        _0xafab9e(_0x4e4989);
        if (_0x41851b !== _0x41851b + 0) {
          throw _0x41851b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2c0771(_0x4f1e71) {
      var _0x1ca720 = _0x47dca3();
      try {
        return _0x1a9c40(_0x4f1e71);
      } catch (_0x29ce4d) {
        _0xafab9e(_0x1ca720);
        if (_0x29ce4d !== _0x29ce4d + 0) {
          throw _0x29ce4d;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0xb35b56(_0x21f584, _0x446169, _0x3834a1, _0x4af9ae, _0x490445, _0x37b024, _0x5d8a79) {
      var _0x3bcf80 = _0x47dca3();
      try {
        return _0x42fc99(_0x21f584, _0x446169, _0x3834a1, _0x4af9ae, _0x490445, _0x37b024, _0x5d8a79);
      } catch (_0x34f8ee) {
        _0xafab9e(_0x3bcf80);
        if (_0x34f8ee !== _0x34f8ee + 0) {
          throw _0x34f8ee;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x565d43(_0x493d1a, _0x525fdd, _0x2d220a, _0x14bcb3, _0x3b6da4, _0x3c710a, _0x5218ba, _0x2743a9) {
      var _0x31d5ab = _0x47dca3();
      try {
        return _0x2633f0(_0x493d1a, _0x525fdd, _0x2d220a, _0x14bcb3, _0x3b6da4, _0x3c710a, _0x5218ba, _0x2743a9);
      } catch (_0x1d36a7) {
        _0xafab9e(_0x31d5ab);
        if (_0x1d36a7 !== _0x1d36a7 + 0) {
          throw _0x1d36a7;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x208e01(_0x37b324, _0x18dab5, _0x523192, _0x29fb9b) {
      var _0x35caa5 = _0x47dca3();
      try {
        return _0x1aee5b(_0x37b324, _0x18dab5, _0x523192, _0x29fb9b);
      } catch (_0x6faf3f) {
        _0xafab9e(_0x35caa5);
        if (_0x6faf3f !== _0x6faf3f + 0) {
          throw _0x6faf3f;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2aa6f7(_0xe9a291, _0x48e515, _0x3890f8, _0x36b78a, _0x54e8e7, _0x40fbc7) {
      var _0x301a72 = _0x47dca3();
      try {
        return _0xb7426d(_0xe9a291, _0x48e515, _0x3890f8, _0x36b78a, _0x54e8e7, _0x40fbc7);
      } catch (_0x569d51) {
        _0xafab9e(_0x301a72);
        if (_0x569d51 !== _0x569d51 + 0) {
          throw _0x569d51;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x161df5(_0x187102, _0x82cdb2, _0x31d35c, _0x918576, _0x48ac60) {
      var _0x9982fd = _0x47dca3();
      try {
        return _0x4b8601(_0x187102, _0x82cdb2, _0x31d35c, _0x918576, _0x48ac60);
      } catch (_0xdd92e6) {
        _0xafab9e(_0x9982fd);
        if (_0xdd92e6 !== _0xdd92e6 + 0) {
          throw _0xdd92e6;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0xdb3074(_0x4bfec1, _0x55c00d, _0x397a0a, _0x28cd53) {
      var _0xfb5f4b = _0x47dca3();
      try {
        return _0x3edd87(_0x4bfec1, _0x55c00d, _0x397a0a, _0x28cd53);
      } catch (_0x226e88) {
        _0xafab9e(_0xfb5f4b);
        if (_0x226e88 !== _0x226e88 + 0) {
          throw _0x226e88;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2ef832(_0xbece38, _0x2ce9fa, _0x21bbbb, _0x3b189d, _0x2531ab, _0x4ea141) {
      var _0x2b441e = _0x47dca3();
      try {
        _0x4561df(_0xbece38, _0x2ce9fa, _0x21bbbb, _0x3b189d, _0x2531ab, _0x4ea141);
      } catch (_0x1702fd) {
        _0xafab9e(_0x2b441e);
        if (_0x1702fd !== _0x1702fd + 0) {
          throw _0x1702fd;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x24b344(_0x374bae, _0x4d3697, _0x370908, _0x1b4121, _0x35ab1d, _0x1579ac) {
      var _0x1b4cb9 = _0x47dca3();
      try {
        return _0x281dc7(_0x374bae, _0x4d3697, _0x370908, _0x1b4121, _0x35ab1d, _0x1579ac);
      } catch (_0x411468) {
        _0xafab9e(_0x1b4cb9);
        if (_0x411468 !== _0x411468 + 0) {
          throw _0x411468;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x39e013(_0x158f03, _0x23dc9f, _0x22d37e, _0x5f13b6, _0x129d43) {
      var _0x5d4199 = _0x47dca3();
      try {
        _0xc5193(_0x158f03, _0x23dc9f, _0x22d37e, _0x5f13b6, _0x129d43);
      } catch (_0x4d1eac) {
        _0xafab9e(_0x5d4199);
        if (_0x4d1eac !== _0x4d1eac + 0) {
          throw _0x4d1eac;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4c5420(_0x4f335, _0x53a1ed, _0x5396b9, _0x125753, _0xb37fd1, _0x11afe0) {
      var _0x5aa860 = _0x47dca3();
      try {
        return _0x202858(_0x4f335, _0x53a1ed, _0x5396b9, _0x125753, _0xb37fd1, _0x11afe0);
      } catch (_0x29f760) {
        _0xafab9e(_0x5aa860);
        if (_0x29f760 !== _0x29f760 + 0) {
          throw _0x29f760;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x58a9d6(_0x37e0fb, _0xe5d445, _0x51a703, _0x1a6f3e, _0x2a47fe, _0x1e2bda) {
      var _0x461460 = _0x47dca3();
      try {
        _0xc81dc6(_0x37e0fb, _0xe5d445, _0x51a703, _0x1a6f3e, _0x2a47fe, _0x1e2bda);
      } catch (_0x1466cd) {
        _0xafab9e(_0x461460);
        if (_0x1466cd !== _0x1466cd + 0) {
          throw _0x1466cd;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x143ebb(_0x11e6d1, _0x21e0b5, _0x191abc, _0x3e7827, _0x47986a, _0x3c479b, _0x1e52c2, _0xa1c238, _0x72eb7d, _0x400287, _0x2f8509) {
      var _0x2814cc = _0x47dca3();
      try {
        return _0x1e5e08(_0x11e6d1, _0x21e0b5, _0x191abc, _0x3e7827, _0x47986a, _0x3c479b, _0x1e52c2, _0xa1c238, _0x72eb7d, _0x400287, _0x2f8509);
      } catch (_0x55c1f) {
        _0xafab9e(_0x2814cc);
        if (_0x55c1f !== _0x55c1f + 0) {
          throw _0x55c1f;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x474f2f(_0x2cda2e, _0x4f9cae, _0x59ffff, _0xd13e46, _0x6e23a7) {
      var _0x37ad7b = _0x47dca3();
      try {
        return _0xf5b5a1(_0x2cda2e, _0x4f9cae, _0x59ffff, _0xd13e46, _0x6e23a7);
      } catch (_0x37a8a9) {
        _0xafab9e(_0x37ad7b);
        if (_0x37a8a9 !== _0x37a8a9 + 0) {
          throw _0x37a8a9;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x57c084(_0x20713e, _0xd2917f, _0x4fe2aa, _0x489826, _0x1d32ce, _0x5b1c94, _0x549c58, _0x2f667e) {
      var _0x2e9468 = _0x47dca3();
      try {
        _0x4f0023(_0x20713e, _0xd2917f, _0x4fe2aa, _0x489826, _0x1d32ce, _0x5b1c94, _0x549c58, _0x2f667e);
      } catch (_0x3a7b19) {
        _0xafab9e(_0x2e9468);
        if (_0x3a7b19 !== _0x3a7b19 + 0) {
          throw _0x3a7b19;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2b6f76(_0x305a8c, _0x356ac2, _0x50c26b) {
      var _0x49b333 = _0x47dca3();
      try {
        return _0x1c9557(_0x305a8c, _0x356ac2, _0x50c26b);
      } catch (_0x47bf25) {
        _0xafab9e(_0x49b333);
        if (_0x47bf25 !== _0x47bf25 + 0) {
          throw _0x47bf25;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x41a717(_0x248fd1, _0xcf5e47, _0x3e1d68, _0xbe17cc, _0xb586d1, _0x3cf4d0, _0x55e007) {
      var _0x261259 = _0x47dca3();
      try {
        _0x2558a4(_0x248fd1, _0xcf5e47, _0x3e1d68, _0xbe17cc, _0xb586d1, _0x3cf4d0, _0x55e007);
      } catch (_0xbc92c9) {
        _0xafab9e(_0x261259);
        if (_0xbc92c9 !== _0xbc92c9 + 0) {
          throw _0xbc92c9;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x44ba41(_0x24b042, _0x39918c, _0x168e9f, _0x41da2d, _0x338ec4, _0x5a7e89) {
      var _0xf51a37 = _0x47dca3();
      try {
        return _0x326fb9(_0x24b042, _0x39918c, _0x168e9f, _0x41da2d, _0x338ec4, _0x5a7e89);
      } catch (_0x282078) {
        _0xafab9e(_0xf51a37);
        if (_0x282078 !== _0x282078 + 0) {
          throw _0x282078;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x25a6a4(_0x151c26, _0x5d83ad, _0x30c3a4, _0x189b17) {
      var _0x51582 = _0x47dca3();
      try {
        return _0x3d67f6(_0x151c26, _0x5d83ad, _0x30c3a4, _0x189b17);
      } catch (_0xd0d487) {
        _0xafab9e(_0x51582);
        if (_0xd0d487 !== _0xd0d487 + 0) {
          throw _0xd0d487;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x2fd4d3(_0x14ac6c, _0x1da347, _0x25a92d, _0x54960e, _0x55f288, _0x2d4aa8) {
      var _0x3d7487 = _0x47dca3();
      try {
        return _0x2a47c2(_0x14ac6c, _0x1da347, _0x25a92d, _0x54960e, _0x55f288, _0x2d4aa8);
      } catch (_0x541662) {
        _0xafab9e(_0x3d7487);
        if (_0x541662 !== _0x541662 + 0) {
          throw _0x541662;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x324579(_0x37db88, _0x5bcdbf, _0x258467, _0x191fd3, _0x4480b8, _0x4f4089, _0x1f5ca9) {
      var _0x4610fd = _0x47dca3();
      try {
        _0x373459(_0x37db88, _0x5bcdbf, _0x258467, _0x191fd3, _0x4480b8, _0x4f4089, _0x1f5ca9);
      } catch (_0x3d3916) {
        _0xafab9e(_0x4610fd);
        if (_0x3d3916 !== _0x3d3916 + 0) {
          throw _0x3d3916;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x52f3d7(_0x340b36, _0x1f5cb6, _0xfc5300, _0x1f16d2, _0x331157, _0x1a1327, _0x4467cf) {
      var _0x1a631e = _0x47dca3();
      try {
        return _0xef254d(_0x340b36, _0x1f5cb6, _0xfc5300, _0x1f16d2, _0x331157, _0x1a1327, _0x4467cf);
      } catch (_0x25f1f6) {
        _0xafab9e(_0x1a631e);
        if (_0x25f1f6 !== _0x25f1f6 + 0) {
          throw _0x25f1f6;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1107d0(_0x350443, _0x33a421, _0x2f6c61, _0x58ace7, _0x29e03b, _0x181cb0, _0x4778cd) {
      var _0x33284a = _0x47dca3();
      try {
        _0x1062d0(_0x350443, _0x33a421, _0x2f6c61, _0x58ace7, _0x29e03b, _0x181cb0, _0x4778cd);
      } catch (_0x5bfe42) {
        _0xafab9e(_0x33284a);
        if (_0x5bfe42 !== _0x5bfe42 + 0) {
          throw _0x5bfe42;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x182ee0(_0x77597f, _0x9cec38, _0x1dad09, _0x1922d6, _0x392320, _0x25f73d, _0xbe6f4e, _0x6260d8, _0x5082c4, _0x4abeb7, _0x3b4df4, _0x42a7d4) {
      var _0x11ccf2 = _0x47dca3();
      try {
        return _0x2523a8(_0x77597f, _0x9cec38, _0x1dad09, _0x1922d6, _0x392320, _0x25f73d, _0xbe6f4e, _0x6260d8, _0x5082c4, _0x4abeb7, _0x3b4df4, _0x42a7d4);
      } catch (_0x12cc01) {
        _0xafab9e(_0x11ccf2);
        if (_0x12cc01 !== _0x12cc01 + 0) {
          throw _0x12cc01;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x39d53c(_0x1cfda0, _0x29d7e0, _0xf17b35, _0x5c24f1) {
      var _0x27c272 = _0x47dca3();
      try {
        _0x167917(_0x1cfda0, _0x29d7e0, _0xf17b35, _0x5c24f1);
      } catch (_0x50888b) {
        _0xafab9e(_0x27c272);
        if (_0x50888b !== _0x50888b + 0) {
          throw _0x50888b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x48ffae(_0x330818, _0x5e95aa, _0x5232ba, _0x4163bb, _0x561b99) {
      var _0x55f9b7 = _0x47dca3();
      try {
        return _0x2d043c(_0x330818, _0x5e95aa, _0x5232ba, _0x4163bb, _0x561b99);
      } catch (_0x9610ec) {
        _0xafab9e(_0x55f9b7);
        if (_0x9610ec !== _0x9610ec + 0) {
          throw _0x9610ec;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x15173e(_0x121e11, _0x17576e, _0x3cb772, _0x508409, _0x39a7fd) {
      var _0x3d4683 = _0x47dca3();
      try {
        return _0x45cd26(_0x121e11, _0x17576e, _0x3cb772, _0x508409, _0x39a7fd);
      } catch (_0xd17075) {
        _0xafab9e(_0x3d4683);
        if (_0xd17075 !== _0xd17075 + 0) {
          throw _0xd17075;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1ffd45(_0x2acce8, _0x13b26c, _0x5caf9f, _0x35195b, _0x4393eb, _0x3734f0, _0x8c3a56, _0x1f05fd) {
      var _0x218c69 = _0x47dca3();
      try {
        _0x49005c(_0x2acce8, _0x13b26c, _0x5caf9f, _0x35195b, _0x4393eb, _0x3734f0, _0x8c3a56, _0x1f05fd);
      } catch (_0x1411b9) {
        _0xafab9e(_0x218c69);
        if (_0x1411b9 !== _0x1411b9 + 0) {
          throw _0x1411b9;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x10e1da(_0x35da52, _0x585b78, _0x3fd513, _0x4f1052, _0x2a1832, _0x178318) {
      var _0x5a1c37 = _0x47dca3();
      try {
        _0x4b5a55(_0x35da52, _0x585b78, _0x3fd513, _0x4f1052, _0x2a1832, _0x178318);
      } catch (_0x11bf6b) {
        _0xafab9e(_0x5a1c37);
        if (_0x11bf6b !== _0x11bf6b + 0) {
          throw _0x11bf6b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1bea50(_0x592b3e, _0x1fcbd2, _0x155712, _0x416798, _0x57b626, _0x5d4f4b, _0x2c55b7, _0x1db83e, _0x896167) {
      var _0x2bc9f3 = _0x47dca3();
      try {
        _0xd3c2c1(_0x592b3e, _0x1fcbd2, _0x155712, _0x416798, _0x57b626, _0x5d4f4b, _0x2c55b7, _0x1db83e, _0x896167);
      } catch (_0x1f33b3) {
        _0xafab9e(_0x2bc9f3);
        if (_0x1f33b3 !== _0x1f33b3 + 0) {
          throw _0x1f33b3;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x575a9a(_0x1c4616, _0x10c68d, _0x4c12b5, _0x1ccf64, _0x5b9490, _0x35c9d7, _0x584467, _0x45753a) {
      var _0x2549c3 = _0x47dca3();
      try {
        _0x27c1b3(_0x1c4616, _0x10c68d, _0x4c12b5, _0x1ccf64, _0x5b9490, _0x35c9d7, _0x584467, _0x45753a);
      } catch (_0x4b96bc) {
        _0xafab9e(_0x2549c3);
        if (_0x4b96bc !== _0x4b96bc + 0) {
          throw _0x4b96bc;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5dd860(_0x13cd7e, _0x311901, _0x19ec26, _0x6410a8, _0x2e19e9, _0x3bd450) {
      var _0x2cfe10 = _0x47dca3();
      try {
        return _0x3fd37c(_0x13cd7e, _0x311901, _0x19ec26, _0x6410a8, _0x2e19e9, _0x3bd450);
      } catch (_0x5b4345) {
        _0xafab9e(_0x2cfe10);
        if (_0x5b4345 !== _0x5b4345 + 0) {
          throw _0x5b4345;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x434c80(_0x11f7c0, _0x199e2c, _0x45f5d5, _0x4f44a9, _0x2e0c28, _0x37967b, _0x101faa, _0x409660, _0x306eec) {
      var _0x50f535 = _0x47dca3();
      try {
        _0x1a1065(_0x11f7c0, _0x199e2c, _0x45f5d5, _0x4f44a9, _0x2e0c28, _0x37967b, _0x101faa, _0x409660, _0x306eec);
      } catch (_0x301691) {
        _0xafab9e(_0x50f535);
        if (_0x301691 !== _0x301691 + 0) {
          throw _0x301691;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0xeb6a15(_0x5bac36, _0x321ca7, _0x5784e5, _0x20a735, _0x2c22dc, _0x4fd6d7, _0x43b587, _0x4c7af0, _0x50134f, _0x3a2486, _0x44ea10, _0x453d7f, _0x51b1b2, _0x158de0) {
      var _0x76f049 = _0x47dca3();
      try {
        _0x1f8d0a(_0x5bac36, _0x321ca7, _0x5784e5, _0x20a735, _0x2c22dc, _0x4fd6d7, _0x43b587, _0x4c7af0, _0x50134f, _0x3a2486, _0x44ea10, _0x453d7f, _0x51b1b2, _0x158de0);
      } catch (_0x19a271) {
        _0xafab9e(_0x76f049);
        if (_0x19a271 !== _0x19a271 + 0) {
          throw _0x19a271;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5c03e4(_0x53b957, _0x3573b7, _0x2dd716, _0x198e00, _0x520daa, _0x5067dd, _0x2a3710, _0x48098f, _0x2ebc19, _0x22d704) {
      var _0x14fc9a = _0x47dca3();
      try {
        _0x4abb2e(_0x53b957, _0x3573b7, _0x2dd716, _0x198e00, _0x520daa, _0x5067dd, _0x2a3710, _0x48098f, _0x2ebc19, _0x22d704);
      } catch (_0x4558c2) {
        _0xafab9e(_0x14fc9a);
        if (_0x4558c2 !== _0x4558c2 + 0) {
          throw _0x4558c2;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x20b476(_0x283780, _0x2fb2e7, _0x3962cc, _0x45a97a, _0xf5a4d3, _0x243757, _0x43e35, _0x4ee4cf, _0x4b6bae, _0x367670, _0x4b7c9e, _0x4794d5, _0x235168, _0x9ce74e, _0x457fdf, _0x16c190, _0x1afb80) {
      var _0x5a12a7 = _0x47dca3();
      try {
        _0x25b38e(_0x283780, _0x2fb2e7, _0x3962cc, _0x45a97a, _0xf5a4d3, _0x243757, _0x43e35, _0x4ee4cf, _0x4b6bae, _0x367670, _0x4b7c9e, _0x4794d5, _0x235168, _0x9ce74e, _0x457fdf, _0x16c190, _0x1afb80);
      } catch (_0x440194) {
        _0xafab9e(_0x5a12a7);
        if (_0x440194 !== _0x440194 + 0) {
          throw _0x440194;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x279f63(_0x2b3098, _0x523737, _0x69533e, _0x3ced12, _0xb1b8f6, _0x3b8d42, _0x129db7, _0x25a421, _0x3d62ac, _0x4a0534) {
      var _0x23f3dc = _0x47dca3();
      try {
        return _0x4d4c1d(_0x2b3098, _0x523737, _0x69533e, _0x3ced12, _0xb1b8f6, _0x3b8d42, _0x129db7, _0x25a421, _0x3d62ac, _0x4a0534);
      } catch (_0x264842) {
        _0xafab9e(_0x23f3dc);
        if (_0x264842 !== _0x264842 + 0) {
          throw _0x264842;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x34f976(_0x204ad5, _0x401fab, _0x1940c3, _0x13e422, _0x6dd8ad, _0x32e87d, _0x296735, _0x48b731, _0x598eb9, _0x292a00, _0x4b4279, _0x2744d7) {
      var _0x18369e = _0x47dca3();
      try {
        return _0x432297(_0x204ad5, _0x401fab, _0x1940c3, _0x13e422, _0x6dd8ad, _0x32e87d, _0x296735, _0x48b731, _0x598eb9, _0x292a00, _0x4b4279, _0x2744d7);
      } catch (_0x265799) {
        _0xafab9e(_0x18369e);
        if (_0x265799 !== _0x265799 + 0) {
          throw _0x265799;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x199e1e(_0x3e5d34, _0x717c9b, _0x5c9b83, _0x5a2ff7, _0x229681, _0x196dc9, _0x4eaf7e, _0x5897b0, _0x36215e, _0x2fab99) {
      var _0x500d71 = _0x47dca3();
      try {
        return _0x22c956(_0x3e5d34, _0x717c9b, _0x5c9b83, _0x5a2ff7, _0x229681, _0x196dc9, _0x4eaf7e, _0x5897b0, _0x36215e, _0x2fab99);
      } catch (_0x14ea16) {
        _0xafab9e(_0x500d71);
        if (_0x14ea16 !== _0x14ea16 + 0) {
          throw _0x14ea16;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x421027(_0x306df9, _0x5c867f, _0x92bc99, _0xbf15ef, _0x51936b) {
      var _0x142c26 = _0x47dca3();
      try {
        _0x25b4fa(_0x306df9, _0x5c867f, _0x92bc99, _0xbf15ef, _0x51936b);
      } catch (_0x383484) {
        _0xafab9e(_0x142c26);
        if (_0x383484 !== _0x383484 + 0) {
          throw _0x383484;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1809a7(_0x35e540, _0x502d7e, _0x51b15a, _0x534917) {
      var _0x334be4 = _0x47dca3();
      try {
        return _0x468f13(_0x35e540, _0x502d7e, _0x51b15a, _0x534917);
      } catch (_0xca90d0) {
        _0xafab9e(_0x334be4);
        if (_0xca90d0 !== _0xca90d0 + 0) {
          throw _0xca90d0;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0xad21ae(_0x431497, _0x317a0f, _0x3f2834, _0x4004c3) {
      var _0x11c451 = _0x47dca3();
      try {
        return _0x23497a(_0x431497, _0x317a0f, _0x3f2834, _0x4004c3);
      } catch (_0x59409b) {
        _0xafab9e(_0x11c451);
        if (_0x59409b !== _0x59409b + 0) {
          throw _0x59409b;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x262ef6(_0x5e446d, _0x2bf132, _0xdc964, _0x3e5809, _0x486f3e, _0x4ab016, _0x14081c, _0x326ff1, _0x2aebd3) {
      var _0x3302a7 = _0x47dca3();
      try {
        _0x43c231(_0x5e446d, _0x2bf132, _0xdc964, _0x3e5809, _0x486f3e, _0x4ab016, _0x14081c, _0x326ff1, _0x2aebd3);
      } catch (_0x151c9a) {
        _0xafab9e(_0x3302a7);
        if (_0x151c9a !== _0x151c9a + 0) {
          throw _0x151c9a;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x493598(_0x29865e, _0x4b26b0, _0x1586f9, _0x493d91, _0x21ef20, _0x1ef77a) {
      var _0x4d1b80 = _0x47dca3();
      try {
        return _0x2a74d1(_0x29865e, _0x4b26b0, _0x1586f9, _0x493d91, _0x21ef20, _0x1ef77a);
      } catch (_0x1ee06e) {
        _0xafab9e(_0x4d1b80);
        if (_0x1ee06e !== _0x1ee06e + 0) {
          throw _0x1ee06e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x40500c(_0x28a59e, _0x221af0, _0x447c90, _0x535599, _0x2e864a, _0x22d374, _0x3e6b0a) {
      var _0xde7719 = _0x47dca3();
      try {
        return _0x5b8728(_0x28a59e, _0x221af0, _0x447c90, _0x535599, _0x2e864a, _0x22d374, _0x3e6b0a);
      } catch (_0x451fde) {
        _0xafab9e(_0xde7719);
        if (_0x451fde !== _0x451fde + 0) {
          throw _0x451fde;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x5600de(_0x4fe78e, _0x4b8961, _0x38f1d2, _0x30206e, _0x40134c, _0x226110, _0x54fc34, _0x51575d, _0x1b42a8, _0x53dd57, _0x1844cd) {
      var _0x312867 = _0x47dca3();
      try {
        _0x20b71b(_0x4fe78e, _0x4b8961, _0x38f1d2, _0x30206e, _0x40134c, _0x226110, _0x54fc34, _0x51575d, _0x1b42a8, _0x53dd57, _0x1844cd);
      } catch (_0x5036cc) {
        _0xafab9e(_0x312867);
        if (_0x5036cc !== _0x5036cc + 0) {
          throw _0x5036cc;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x1b8735(_0xa6975e, _0xc1c9cd, _0x5602e9, _0x7761a9, _0x1be6d9, _0x3d2909, _0x24960f, _0x39258e) {
      var _0x1df583 = _0x47dca3();
      try {
        _0xf82efc(_0xa6975e, _0xc1c9cd, _0x5602e9, _0x7761a9, _0x1be6d9, _0x3d2909, _0x24960f, _0x39258e);
      } catch (_0x569a0e) {
        _0xafab9e(_0x1df583);
        if (_0x569a0e !== _0x569a0e + 0) {
          throw _0x569a0e;
        }
        _0x4ceae9(1, 0);
      }
    }
    function _0x4546c0(_0x247ddc, _0x296cc6, _0x1d8776, _0x261342, _0xbc94b0, _0x4bc960) {
      var _0x57eadd = _0x47dca3();
      try {
        return _0x3fcb9e(_0x247ddc, _0x296cc6, _0x1d8776, _0x261342, _0xbc94b0, _0x4bc960);
      } catch (_0x49ed49) {
        _0xafab9e(_0x57eadd);
        if (_0x49ed49 !== _0x49ed49 + 0) {
          throw _0x49ed49;
        }
        _0x4ceae9(1, 0);
      }
    }
    _0x17aa78.ccall = _0x58a4b2;
    _0x17aa78.cwrap = _0x41b3d5;
    _0x17aa78.stackTrace = _0x35c797;
    _0x17aa78.addRunDependency = _0x3cd447;
    _0x17aa78.removeRunDependency = _0x5057aa;
    _0x17aa78.FS_createPath = _0x5292fc.createPath;
    _0x17aa78.FS_createDataFile = _0x5292fc.createDataFile;
    _0x17aa78.stackTrace = _0x35c797;
    var _0x49071d;
    function _0x24b85b(_0x3dd0d2) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x3dd0d2 + ")";
      this.status = _0x3dd0d2;
    }
    var _0x2034d3 = false;
    _0x2743b8 = function _0x2de87b() {
      if (!_0x49071d) {
        _0x235e46();
      }
      if (!_0x49071d) {
        _0x2743b8 = _0x2de87b;
      }
    };
    function _0x1a3496(_0x10b7c9) {
      var _0x444f39 = _0x17aa78._main;
      _0x10b7c9 = _0x10b7c9 || [];
      var _0x170ce6 = _0x10b7c9.length + 1;
      var _0x2aea0a = _0x8020c5((_0x170ce6 + 1) * 4);
      _0x576263[_0x2aea0a >> 2] = _0x34e24b(_0x5c2241);
      for (var _0xc05e57 = 1; _0xc05e57 < _0x170ce6; _0xc05e57++) {
        _0x576263[(_0x2aea0a >> 2) + _0xc05e57] = _0x34e24b(_0x10b7c9[_0xc05e57 - 1]);
      }
      _0x576263[(_0x2aea0a >> 2) + _0x170ce6] = 0;
      try {
        var _0x4ee85c = _0x444f39(_0x170ce6, _0x2aea0a);
        _0x49da6d(_0x4ee85c, true);
        return _0x4ee85c;
      } catch (_0x433c3c) {
        return _0x1fa151(_0x433c3c);
      } finally {
        _0x2034d3 = true;
      }
    }
    function _0x235e46(_0x5f21e9) {
      _0x5f21e9 = _0x5f21e9 || _0x174ec7;
      if (_0xe90c1e > 0) {
        return;
      }
      _0x2af5e0();
      if (_0xe90c1e > 0) {
        return;
      }
      function _0x41188() {
        if (_0x49071d) {
          return;
        }
        _0x49071d = true;
        _0x17aa78.calledRun = true;
        if (_0x1cc874) {
          return;
        }
        _0x362694();
        _0x22cf7d();
        _0x5d683d(_0x17aa78);
        if (_0x17aa78.onRuntimeInitialized) {
          _0x17aa78.onRuntimeInitialized();
        }
        if (_0x516e29) {
          _0x1a3496(_0x5f21e9);
        }
        _0x461791();
      }
      if (_0x17aa78.setStatus) {
        _0x17aa78.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0x17aa78.setStatus("");
          }, 1);
          _0x41188();
        }, 1);
      } else {
        _0x41188();
      }
    }
    _0x17aa78.run = _0x235e46;
    function _0x49da6d(_0x2f6174, _0x148668) {
      _0x336bbc = _0x2f6174;
      _0xf9f1c3(_0x2f6174);
    }
    function _0xf9f1c3(_0x2d0aa0) {
      _0x336bbc = _0x2d0aa0;
      if (!_0x2f160c()) {
        if (_0x17aa78.onExit) {
          _0x17aa78.onExit(_0x2d0aa0);
        }
        _0x1cc874 = true;
      }
      _0x23dfcf(_0x2d0aa0, new _0x24b85b(_0x2d0aa0));
    }
    if (_0x17aa78.preInit) {
      if (typeof _0x17aa78.preInit == "function") {
        _0x17aa78.preInit = [_0x17aa78.preInit];
      }
      while (_0x17aa78.preInit.length > 0) {
        _0x17aa78.preInit.pop()();
      }
    }
    var _0x516e29 = true;
    if (_0x17aa78.noInitialRun) {
      _0x516e29 = false;
    }
    _0x235e46();
    return _0x14f574.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") {
  module.exports = unityFramework;
} else if (typeof define === "function" && define.amd) {
  define([], function () {
    return unityFramework;
  });
} else if (typeof exports === "object") {
  exports.unityFramework = unityFramework;
}
config.sourceHtml = "REJVQUVUTWNid3hESVU0N05XZ0lBaFFDUkI4TUhGc09BQklRRGtzU0FBQTBUeU1NUXkxUU9pMHdWa29NRkE9PQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = "games.ofree.io";
}
config.referrer = document.referrer;
function gmdebugtime(_0x15808b) {
  console.log("_TIME_" + _0x15808b + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x5335dc) {
  console.log(_0x5335dc);
}
function gmEvent(_0x4ed512, _0x203390) {
  loadGMData(_0x4ed512, _0x203390);
}
function gmStartGame(_0x2bfe29) {
  _0x2bfe29();
}
function gmStartAds(_0x40a1b9) {
  _0x40a1b9();
}
let fireFPS = 0;
async function loadGMData(_0x25d3a1, _0x347eeb) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x25d3a1 != "document-ready" && _0x25d3a1 != "start-game" && _0x25d3a1 != "unload-game") {
      return;
    }
    if (_0x25d3a1 == "fps") {
      try {
        let _0x552e8e = _0x347eeb.split("|");
        if (_0x552e8e.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x552e8e[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x552e8e[1]);
          }
        }
      } catch (_0x35eec1) {
        console.log("Error extracting time from abc:", _0x35eec1.message);
      }
    }
    let _0x2002e1 = "";
    if (_0x347eeb) {
      _0x2002e1 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x347eeb));
    }
    _0x2002e1 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x2002e1 += "&gid=" + config.gameId;
    if (_0x25d3a1 == "ban-game" || _0x25d3a1 == "document-ready" || _0x25d3a1 == "start-game") {
      _0x2002e1 += "&wtop=" + "escaperoad2d.io";
      _0x2002e1 += "&hn=" + "games.ofree.io";
      _0x2002e1 += "&referrer=" + config.referrer;
    }
    let _0xf1df84 = "&data=" + btoa(_0x2002e1);
    let _0x534b5a = config.eventAPI + "?event=" + _0x25d3a1 + _0xf1df84;
    let _0x2b90f7 = new XMLHttpRequest();
    _0x2b90f7.open("GET", _0x534b5a);
    _0x2b90f7.onreadystatechange = function () {
      if (_0x2b90f7.readyState !== 4) {
        return;
      }
      if (_0x2b90f7.status === 200) {
        console.log(_0x2b90f7.responseText);
      } else {
        console.log("HTTP error", _0x2b90f7.status, _0x2b90f7.statusText);
      }
    };
    _0x2b90f7.send();
  } catch (_0x1e2294) {}
}
function xorEncryptMsg(_0x4216fb) {
  let _0x311aaa = "gmdata@&!message@!3!@";
  let _0x2ce521 = "";
  for (let _0x471069 = 0; _0x471069 < _0x4216fb.length; _0x471069++) {
    const _0xdcdf02 = _0x4216fb.charCodeAt(_0x471069) ^ _0x311aaa.charCodeAt(_0x471069 % _0x311aaa.length);
    _0x2ce521 += String.fromCharCode(_0xdcdf02);
  }
  return btoa(_0x2ce521);
}
function check_event_log() {
  const _0x215bed = window.location.search;
  const _0x5cfc82 = new URLSearchParams(_0x215bed);
  if (_0x5cfc82.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x538d19) {
  try {
    const _0x1aa752 = eval(_0x538d19);
    gmdebug("Result:", _0x1aa752);
    return _0x1aa752;
  } catch (_0x8abb13) {
    gmdebug("Error executing code:", _0x8abb13);
  }
}
function bangame(_0x38c6d5, _0x1606f6, _0x303d09, _0x234275) {

}
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0x240b84) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x7298a = "data@&@#$@#^FFgdfg!1estimate";
      let _0x1b3430 = "data@&&%^*((*^&^&766))nNhZmRzZGY=";
      let _0x83d016 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x2957b2 = _0x1b3430;
      let _0x2bf9c4 = "";
      for (let _0x43efcc = 0; _0x43efcc < _0x83d016.length; _0x43efcc++) {
        const _0x3ff568 = _0x83d016.charCodeAt(_0x43efcc) ^ _0x7298a.charCodeAt(_0x43efcc % _0x7298a.length);
        _0x2bf9c4 += String.fromCharCode(_0x3ff568);
      }
      sourceHtml = _0x2bf9c4;
      let _0xf77ccc = document.getElementById("gmsoft-jssdk");
      if (!_0xf77ccc || _0xf77ccc.src != sourceHtml) {
      }
    } catch (_0x358517) {
    }
  }, 3000);
}