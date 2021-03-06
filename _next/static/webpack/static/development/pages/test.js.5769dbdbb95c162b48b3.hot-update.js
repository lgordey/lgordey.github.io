webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @btsd/aitu-bridge */ "./node_modules/@btsd/aitu-bridge/dist/index.module.js");
/* harmony import */ var _basedImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basedImages */ "./basedImages/index.js");




var _jsxFileName = "/Users/angly/Work/lgordey.github.io/pages/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



console.log('aituBridge', _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_6__["default"]);

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
  gif: ['Look at this magical present!', _basedImages__WEBPACK_IMPORTED_MODULE_7__["basedGif"]],
  jpg: ['Look at this silly upside-down cat!', _basedImages__WEBPACK_IMPORTED_MODULE_7__["basedJpg"]],
  jpgOnly: ['', _basedImages__WEBPACK_IMPORTED_MODULE_7__["basedJpg"]],
  png: ['Look at this beautiful Earth-in-space wallpaper!', _basedImages__WEBPACK_IMPORTED_MODULE_7__["basedPng"]]
};
var vibrateParams = {
  once: [[1000]],
  march: [[291, 291, 291, 291, 291, 291, 291, 291, 145, 146, 145, 146, 291, 291, 145, 146, 145, 728, 291, 291, 291, 291, 291, 291, 291, 291, 145, 146, 145, 146, 291, 291, 145, 146, 145, 146]]
};

function Test(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      calledMethods = _useState[0],
      setCalledMethods = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      receivedData = _useState2[0],
      setReceivedData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      receivedError = _useState3[0],
      setReceivedError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var setShakeHandlerParams = {
    log: [function () {
      return setReceivedData(function (prevArray) {
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), ['Shaken']);
      });
    }],
    off: [null]
  };

  var handleInvokeFakeMethod =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var methodName,
          data,
          _args = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              methodName = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'fakeMethod';
              setCalledMethods(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), [methodName]);
              });
              console.log("==handle ".concat(methodName, " method"));
              _context.prev = 3;
              _context.next = 6;
              return _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_6__["default"].invoke(methodName);

            case 6:
              data = _context.sent;
              setReceivedData(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), [_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)]);
              });
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              console.error(_context.t0);
              setReceivedError(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), [_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_context.t0)]);
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

  var handleMethod =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(methodName) {
      var params,
          data,
          errorText,
          _args2 = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];

              if (!(!invokeMethods.includes(methodName) && !_btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_6__["default"].supports(methodName))) {
                _context2.next = 4;
                break;
              }

              setErrors(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), ["\u041C\u0435\u0442\u043E\u0434 \"".concat(methodName, "\" \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F")]);
              });
              return _context2.abrupt("return");

            case 4:
              setCalledMethods(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), [methodName]);
              });
              console.log("==handle ".concat(methodName, " method").concat(params.length > 0 ? " with params ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(params)) : ''));
              _context2.prev = 6;
              _context2.next = 9;
              return _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_6__["default"][methodName].apply(_btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(params));

            case 9:
              data = _context2.sent;
              setReceivedData(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), [_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)]);
              });
              _context2.next = 18;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](6);
              console.error(_context2.t0);
              errorText = _context2.t0 instanceof Error ? "".concat(_context2.t0.name, ": ").concat(_context2.t0.message) : _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_context2.t0);
              setReceivedError(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(prevArray), [errorText]);
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getMe');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "getMe"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getPhone');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "getPhone"), __jsx("button", {
    onClick: function onClick() {
      return handleInvokeFakeMethod();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "fakeMethod"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getContacts');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "getContacts"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getGeo');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "getGeo"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getQr');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "getQr"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('openSettings');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "openSettings")), __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('copyToClipboard', shareParams.textOnly);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "copyToClipboard"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('share', shareParams.textOnly);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "share text"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.jpg);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "shareImage jpg"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.gif);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "shareImage gif"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.png);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "shareImage png"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('shareImage', shareParams.jpgOnly);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "shareImage jpg w/o caption")), __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('vibrate', vibrateParams.once);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "vibrate once"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('vibrate', vibrateParams.march);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "vibrate march"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('setShakeHandler', setShakeHandlerParams.log);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "enable log on shake"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('setShakeHandler', setShakeHandlerParams.off);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "disable log on shake")), __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('enableNotifications');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "enableNotifications"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('disableNotifications');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "disableNotifications")), __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("a", {
    href: "/javascriptquestions.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "PDF Link"), __jsx("a", {
    href: "https://i2.app.link/rNwc1ePWheb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Contest mini-app")), __jsx("div", {
    style: {
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Errors:"), errors.map(function (errMessage, i) {
    return __jsx("div", {
      key: i + errMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, errMessage);
  })), __jsx("div", {
    style: {
      marginTop: 20,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Invoked methods:"), calledMethods.map(function (method, i) {
    return __jsx("div", {
      key: i + method,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, i + 1 + ') ', method);
  })), __jsx("div", {
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Received data:"), receivedData && receivedData.map(function (data, i) {
    return __jsx("div", {
      key: i + data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, i + 1 + '. ', data);
  })), __jsx("div", {
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Received errors:"), receivedError && receivedError.map(function (error, i) {
    return __jsx("div", {
      key: i + error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, i + 1 + '. ', error);
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_5__["default"])(styles)(Test));

/***/ })

})
//# sourceMappingURL=test.js.5769dbdbb95c162b48b3.hot-update.js.map