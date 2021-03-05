webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @btsd/aitu-bridge */ "./node_modules/@btsd/aitu-bridge/dist/index.module.js");
/* harmony import */ var _basedImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basedImages */ "./basedImages/index.js");




var _jsxFileName = "C:\\Projects\\lgordey.github.io\\pages\\test.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  },
  btnWrapper: {
    padding: '0 20px 20px 0',
    border: '10px solid black',
    marginTop: 20,
    '& button, & a': {
      margin: '20px 0 0 20px',
      display: 'inline-block'
    }
  }
};
var invokeMethods = ['getMe', 'getPhone', 'getContacts', 'enableNotifications', 'disableNotifications', 'copyToClipboard'];
var shareParams = {
  textOnly: ['privet ya kakaoi-to straniy text ЛАЛА'],
  gif: ['Look at this magical present!', _basedImages__WEBPACK_IMPORTED_MODULE_6__["basedGif"]],
  jpg: ['Look at this silly upside-down cat!', _basedImages__WEBPACK_IMPORTED_MODULE_6__["basedJpg"]],
  jpgOnly: ['', _basedImages__WEBPACK_IMPORTED_MODULE_6__["basedJpg"]],
  png: ['Look at this beautiful Earth-in-space wallpaper!', _basedImages__WEBPACK_IMPORTED_MODULE_6__["basedPng"]]
};

function Test(_ref) {
  _s();

  var _this = this;

  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      calledMethods = _useState[0],
      setCalledMethods = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      receivedData = _useState2[0],
      setReceivedData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      receivedError = _useState3[0],
      setReceivedError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      errors = _useState4[0],
      setErrors = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.onShake = function () {
      return setReceivedData(function (prevArray) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), ['Shaken']);
      });
    };

    return function () {
      delete window.onShake;
    };
  }, []);

  var handleInvokeFakeMethod = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var methodName,
          data,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              methodName = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'fakeMethod';
              setCalledMethods(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [methodName]);
              });
              console.log("==handle ".concat(methodName, " method"));
              _context.prev = 3;
              _context.next = 6;
              return _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__["default"].invoke(methodName);

            case 6:
              data = _context.sent;
              setReceivedData(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [JSON.stringify(data)]);
              });
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              console.error(_context.t0);
              setReceivedError(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [JSON.stringify(_context.t0)]);
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));

    return function handleInvokeFakeMethod() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleMethod = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(methodName) {
      var params,
          data,
          errorText,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];

              if (!(!invokeMethods.includes(methodName) && !_btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__["default"].supports(methodName))) {
                _context2.next = 4;
                break;
              }

              setErrors(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), ["\u041C\u0435\u0442\u043E\u0434 \"".concat(methodName, "\" \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F")]);
              });
              return _context2.abrupt("return");

            case 4:
              setCalledMethods(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [methodName]);
              });
              console.log("==handle ".concat(methodName, " method").concat(params.length > 0 ? " with params ".concat(JSON.stringify(params)) : ''));
              _context2.prev = 6;
              _context2.next = 9;
              return _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__["default"][methodName].apply(_btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(params));

            case 9:
              data = _context2.sent;
              setReceivedData(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [JSON.stringify(data)]);
              });
              _context2.next = 18;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](6);
              console.error(_context2.t0);
              errorText = _context2.t0 instanceof Error ? "".concat(_context2.t0.name, ": ").concat(_context2.t0.message) : JSON.stringify(_context2.t0);
              setReceivedError(function (prevArray) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [errorText]);
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 13]]);
    }));

    return function handleMethod(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: classes.testWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.btnWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getMe');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "getMe"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getPhone');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "getPhone"), __jsx("button", {
    onClick: function onClick() {
      return handleInvokeFakeMethod();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "fakeMethod"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getContacts');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "getContacts"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getGeo');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "getGeo"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getQr');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "getQr"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('openSettings');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "openSettings")), __jsx("div", {
    className: classes.btnWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('copyToClipboard', shareParams.textOnly);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "copyToClipboard"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('share', shareParams.textOnly);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "share text"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.jpg);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "shareImage jpg"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.gif);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "shareImage gif"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.png);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "shareImage png"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.jpgOnly);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "shareImage jpg w/o caption")), __jsx("div", {
    className: classes.btnWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('enableNotifications');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "enableNotifications"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('disableNotifications');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "disableNotifications")), __jsx("div", {
    className: classes.btnWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/javascriptquestions.pdf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "PDF Link"), __jsx("a", {
    href: "https://i2.app.link/rNwc1ePWheb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Contest mini-app")), __jsx("div", {
    style: {
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Errors:"), errors.map(function (errMessage, i) {
    return __jsx("div", {
      key: i + errMessage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, errMessage);
  })), __jsx("div", {
    style: {
      marginTop: 20,
      display: 'flex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      width: '30%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Invoked methods:"), calledMethods.map(function (method, i) {
    return __jsx("div", {
      key: i + method,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, i + 1 + ') ', method);
  })), __jsx("div", {
    style: {
      width: '30%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "Received data:"), receivedData && receivedData.map(function (data, i) {
    return __jsx("div", {
      key: i + data,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, i + 1 + '. ', data);
  })), __jsx("div", {
    style: {
      width: '30%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "Received errors:"), receivedError && receivedError.map(function (error, i) {
    return __jsx("div", {
      key: i + error,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }
    }, i + 1 + '. ', error);
  }))));
}

_s(Test, "8HfTunC/RLLdjA0qM2J9hdASHKs=");

_c = Test;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["default"])(styles)(Test));

var _c;

$RefreshReg$(_c, "Test");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0ZXN0V3JhcHBlciIsIndpZHRoIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJidG5XcmFwcGVyIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJpbnZva2VNZXRob2RzIiwic2hhcmVQYXJhbXMiLCJ0ZXh0T25seSIsImdpZiIsImJhc2VkR2lmIiwianBnIiwiYmFzZWRKcGciLCJqcGdPbmx5IiwicG5nIiwiYmFzZWRQbmciLCJUZXN0IiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiY2FsbGVkTWV0aG9kcyIsInNldENhbGxlZE1ldGhvZHMiLCJyZWNlaXZlZERhdGEiLCJzZXRSZWNlaXZlZERhdGEiLCJyZWNlaXZlZEVycm9yIiwic2V0UmVjZWl2ZWRFcnJvciIsImVycm9ycyIsInNldEVycm9ycyIsInVzZUVmZmVjdCIsIndpbmRvdyIsIm9uU2hha2UiLCJwcmV2QXJyYXkiLCJoYW5kbGVJbnZva2VGYWtlTWV0aG9kIiwibWV0aG9kTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhaXR1QnJpZGdlIiwiaW52b2tlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImhhbmRsZU1ldGhvZCIsInBhcmFtcyIsImluY2x1ZGVzIiwic3VwcG9ydHMiLCJsZW5ndGgiLCJlcnJvclRleHQiLCJFcnJvciIsIm5hbWUiLCJtZXNzYWdlIiwibWFwIiwiZXJyTWVzc2FnZSIsImkiLCJtYXJnaW5Cb3R0b20iLCJtZXRob2QiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsYUFBVyxFQUFFO0FBQ1hDLFNBQUssRUFBRSxNQURJO0FBRVhDLFlBQVEsRUFBRSxHQUZDO0FBR1hDLFVBQU0sRUFBRTtBQUhHLEdBREE7QUFN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VixLQUFELEVBQVFZLENBQVIsRUFBYztBQUNoRCxXQUNFO0FBQUssU0FBRyxFQUFFQSxDQUFDLEdBQUdaLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQlksQ0FBQyxHQUFDLENBQUYsR0FBTSxJQUE1QixFQUFrQ1osS0FBbEMsQ0FERjtBQUdELEdBSmlCLENBRnBCLENBakJGLENBaENGLENBREY7QUE2REQ7O0dBMUdReEIsSTs7S0FBQUEsSTtBQTRHTXVDLHdIQUFVLENBQUMzRCxNQUFELENBQVYsQ0FBbUJvQixJQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuZjUyZTU5ZTc4ZTY4MGM2Y2U2ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdyZWFjdC1qc3MnO1xyXG5pbXBvcnQgYWl0dUJyaWRnZSBmcm9tICdAYnRzZC9haXR1LWJyaWRnZSc7XHJcblxyXG5pbXBvcnQgeyBiYXNlZEdpZiwgYmFzZWRKcGcsIGJhc2VkUG5nIH0gZnJvbSAnLi4vYmFzZWRJbWFnZXMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRlc3RXcmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bydcclxuICB9LFxyXG4gIGJ0bldyYXBwZXI6IHtcclxuICAgIHBhZGRpbmc6ICcwIDIwcHggMjBweCAwJyxcclxuICAgIGJvcmRlcjogJzEwcHggc29saWQgYmxhY2snLFxyXG4gICAgbWFyZ2luVG9wOiAyMCxcclxuICAgICcmIGJ1dHRvbiwgJiBhJzoge1xyXG4gICAgICBtYXJnaW46ICcyMHB4IDAgMCAyMHB4JyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpbnZva2VNZXRob2RzID0gWydnZXRNZScsICdnZXRQaG9uZScsICdnZXRDb250YWN0cycsICdlbmFibGVOb3RpZmljYXRpb25zJywgJ2Rpc2FibGVOb3RpZmljYXRpb25zJywgJ2NvcHlUb0NsaXBib2FyZCddO1xyXG5cclxuY29uc3Qgc2hhcmVQYXJhbXMgPSB7XHJcbiAgdGV4dE9ubHk6IFsncHJpdmV0IHlhIGtha2FvaS10byBzdHJhbml5IHRleHQg0JvQkNCb0JAnXSxcclxuICBnaWY6IFsnTG9vayBhdCB0aGlzIG1hZ2ljYWwgcHJlc2VudCEnLCBiYXNlZEdpZl0sXHJcbiAganBnOiBbJ0xvb2sgYXQgdGhpcyBzaWxseSB1cHNpZGUtZG93biBjYXQhJywgYmFzZWRKcGddLFxyXG4gIGpwZ09ubHk6IFsnJywgYmFzZWRKcGddLFxyXG4gIHBuZzogWydMb29rIGF0IHRoaXMgYmVhdXRpZnVsIEVhcnRoLWluLXNwYWNlIHdhbGxwYXBlciEnLCBiYXNlZFBuZ10sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBUZXN0KHsgY2xhc3NlcyB9KSB7XHJcbiAgY29uc3QgW2NhbGxlZE1ldGhvZHMsIHNldENhbGxlZE1ldGhvZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWNlaXZlZERhdGEsIHNldFJlY2VpdmVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlY2VpdmVkRXJyb3IsIHNldFJlY2VpdmVkRXJyb3JdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFsgZXJyb3JzLCBzZXRFcnJvcnMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5vblNoYWtlID0gKCkgPT4gc2V0UmVjZWl2ZWREYXRhKHByZXZBcnJheSA9PiBbLi4ucHJldkFycmF5LCAnU2hha2VuJ10pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRlbGV0ZSB3aW5kb3cub25TaGFrZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnZva2VGYWtlTWV0aG9kID0gYXN5bmMgKG1ldGhvZE5hbWUgPSAnZmFrZU1ldGhvZCcpID0+IHtcclxuICAgIHNldENhbGxlZE1ldGhvZHMocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIG1ldGhvZE5hbWVdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGA9PWhhbmRsZSAke21ldGhvZE5hbWV9IG1ldGhvZGApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFpdHVCcmlkZ2UuaW52b2tlKG1ldGhvZE5hbWUpO1xyXG4gICAgICBzZXRSZWNlaXZlZERhdGEocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIEpTT04uc3RyaW5naWZ5KGRhdGEpXSlcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICBzZXRSZWNlaXZlZEVycm9yKHByZXZBcnJheSA9PiBbLi4ucHJldkFycmF5LCBKU09OLnN0cmluZ2lmeShlKV0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNZXRob2QgPSBhc3luYyAobWV0aG9kTmFtZSwgcGFyYW1zID0gW10pID0+IHtcclxuICAgIGlmICghaW52b2tlTWV0aG9kcy5pbmNsdWRlcyhtZXRob2ROYW1lKSAmJiAhYWl0dUJyaWRnZS5zdXBwb3J0cyhtZXRob2ROYW1lKSkge1xyXG4gICAgICBzZXRFcnJvcnMocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIGDQnNC10YLQvtC0IFwiJHttZXRob2ROYW1lfVwiINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQsiDRgtC10LrRg9GJ0LXQuSDQstC10YDRgdC40Lgg0L/RgNC40LvQvtC20LXQvdC40Y9gXSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldENhbGxlZE1ldGhvZHMocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIG1ldGhvZE5hbWVdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGA9PWhhbmRsZSAke21ldGhvZE5hbWV9IG1ldGhvZCR7cGFyYW1zLmxlbmd0aCA+IDAgPyBgIHdpdGggcGFyYW1zICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gOiAnJ31gKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhaXR1QnJpZGdlW21ldGhvZE5hbWVdKC4uLnBhcmFtcyk7XHJcbiAgICAgIHNldFJlY2VpdmVkRGF0YShwcmV2QXJyYXkgPT4gWy4uLnByZXZBcnJheSwgSlNPTi5zdHJpbmdpZnkoZGF0YSldKVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWAgOiBKU09OLnN0cmluZ2lmeShlKTtcclxuICAgICAgc2V0UmVjZWl2ZWRFcnJvcihwcmV2QXJyYXkgPT4gWy4uLnByZXZBcnJheSwgZXJyb3JUZXh0XSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXN0V3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTWV0aG9kKCdnZXRNZScpfT5nZXRNZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTWV0aG9kKCdnZXRQaG9uZScpfT5nZXRQaG9uZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSW52b2tlRmFrZU1ldGhvZCgpfT5mYWtlTWV0aG9kPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXRob2QoJ2dldENvbnRhY3RzJyl9PmdldENvbnRhY3RzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXRob2QoJ2dldEdlbycpfT5nZXRHZW88L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1ldGhvZCgnZ2V0UXInKX0+Z2V0UXI8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1ldGhvZCgnb3BlblNldHRpbmdzJyl9Pm9wZW5TZXR0aW5nczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuV3JhcHBlcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXRob2QoJ2NvcHlUb0NsaXBib2FyZCcsIHNoYXJlUGFyYW1zLnRleHRPbmx5KX0+Y29weVRvQ2xpcGJvYXJkPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXRob2QoJ3NoYXJlJywgc2hhcmVQYXJhbXMudGV4dE9ubHkpfT5zaGFyZSB0ZXh0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXRob2QoJ3NoYXJlSW1hZ2UnLCBzaGFyZVBhcmFtcy5qcGcpfT5zaGFyZUltYWdlIGpwZzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTWV0aG9kKCdzaGFyZUltYWdlJywgc2hhcmVQYXJhbXMuZ2lmKX0+c2hhcmVJbWFnZSBnaWY8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1ldGhvZCgnc2hhcmVJbWFnZScsIHNoYXJlUGFyYW1zLnBuZyl9PnNoYXJlSW1hZ2UgcG5nPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZXRob2QoJ3NoYXJlSW1hZ2UnLCBzaGFyZVBhcmFtcy5qcGdPbmx5KX0+c2hhcmVJbWFnZSBqcGcgdy9vIGNhcHRpb248L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlTWV0aG9kKCdlbmFibGVOb3RpZmljYXRpb25zJyl9PmVuYWJsZU5vdGlmaWNhdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1ldGhvZCgnZGlzYWJsZU5vdGlmaWNhdGlvbnMnKX0+ZGlzYWJsZU5vdGlmaWNhdGlvbnM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgIDxhIGhyZWY9XCIvamF2YXNjcmlwdHF1ZXN0aW9ucy5wZGZcIj5QREYgTGluazwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pMi5hcHAubGluay9yTndjMWVQV2hlYlwiPkNvbnRlc3QgbWluaS1hcHA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0gPlxyXG4gICAgICAgIDxiPkVycm9yczo8L2I+XHJcbiAgICAgICAge2Vycm9ycy5tYXAoKGVyck1lc3NhZ2UsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyBlcnJNZXNzYWdlfT57ZXJyTWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+XHJcbiAgICAgICAgICA8YiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19Pkludm9rZWQgbWV0aG9kczo8L2I+XHJcbiAgICAgICAgICB7Y2FsbGVkTWV0aG9kcy5tYXAoKG1ldGhvZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgbWV0aG9kfT57aSsxICsgJykgJ317bWV0aG9kfTwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+XHJcbiAgICAgICAgICA8YiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlJlY2VpdmVkIGRhdGE6PC9iPlxyXG4gICAgICAgICAge3JlY2VpdmVkRGF0YSAmJiByZWNlaXZlZERhdGEubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyBkYXRhfT57aSsxICsgJy4gJ317ZGF0YX08L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScgfX0+XHJcbiAgICAgICAgICA8YiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlJlY2VpdmVkIGVycm9yczo8L2I+XHJcbiAgICAgICAgICB7cmVjZWl2ZWRFcnJvciAmJiByZWNlaXZlZEVycm9yLm1hcCgoZXJyb3IsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIGVycm9yfT57aSsxICsgJy4gJ317ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFRlc3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9