webpackHotUpdate("static/development/pages/test-share.js",{

/***/ "./pages/test-share.js":
/*!*****************************!*\
  !*** ./pages/test-share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _basedImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basedImages */ "./basedImages/index.js");




var _jsxFileName = "/Users/lgordey/BTS/lgordey.github.io/pages/test-share.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



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
    '& button, & a, & span': {
      margin: '20px 0 0 20px',
      display: 'inline-block'
    }
  }
};
var invokeMethods = ['getMe', 'getPhone', 'getContacts', 'enableNotifications', 'disableNotifications'];

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('loading...'),
      url = _useState5[0],
      setUrl = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      aituBridge = _useState6[0],
      setAituBridge = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setUrl(window.location.href);
    setAituBridge(__webpack_require__(/*! @btsd/aitu-bridge */ "./node_modules/@btsd/aitu-bridge/dist/index.module.js")["default"]);
  }, []);

  var handleFileInput = function handleFileInput(e) {
    var file = e.target.files[0]; // read file

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      console.log('===============base64String=!');
      console.log(reader.result);

      if (typeof reader.result === 'string') {
        // get extension from base64 mime type and merge with name
        var ext = reader.result.split(';')[0].split('/')[1];
        var filename = 'Text_FileName.' + ext; // remove mime type

        var base64Data = reader.result.substr(reader.result.indexOf(',') + 1);
        var params = ['Sample text', filename, base64Data];
        console.log('params+++++');
        console.log(params);
        handleMethod('shareFile', params);
      }
    };
  };

  var handleMethod =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(methodName) {
      var params,
          data,
          errorText,
          _args = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];

              if (!(!invokeMethods.includes(methodName) && !aituBridge.supports(methodName))) {
                _context.next = 4;
                break;
              }

              setErrors(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), ["\u041C\u0435\u0442\u043E\u0434 \"".concat(methodName, "\" \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F")]);
              });
              return _context.abrupt("return");

            case 4:
              setCalledMethods(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [methodName]);
              });
              console.log("==handle ".concat(methodName, " method").concat(params.length > 0 ? " with params ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(params)) : ''));
              _context.prev = 6;
              _context.next = 9;
              return aituBridge[methodName].apply(aituBridge, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(params));

            case 9:
              data = _context.sent;
              setReceivedData(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)]);
              });
              _context.next = 18;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);
              console.error(_context.t0);
              errorText = _context.t0 instanceof Error ? "".concat(_context.t0.name, ": ").concat(_context.t0.message) : _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_context.t0);
              setReceivedError(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevArray), [errorText]);
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 13]]);
    }));

    return function handleMethod(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: classes.testWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("a", {
    href: "/test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "To test"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("a", {
    href: "/test2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "To test2"), __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Current url: ", url)), __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    onChange: handleFileInput,
    style: {
      margin: '20px 20px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("p", {
    style: {
      margin: '20px 20px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u041F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u0444\u0430\u0439\u043B\u0430 \u0432\u044B\u0437\u043E\u0432\u0435\u0442\u0441\u044F \u043C\u0435\u0442\u043E\u0434 shareFile() \u0441 filename: 'Test filename' \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C \u0432 base64")), __jsx("div", {
    style: {
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Errors:"), errors.map(function (errMessage, i) {
    return __jsx("div", {
      key: i + errMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
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
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Invoked methods:"), calledMethods.map(function (method, i) {
    return __jsx("div", {
      key: i + method,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, i + 1 + ') ', method);
  })), __jsx("div", {
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Received data:"), receivedData && receivedData.map(function (data, i) {
    return __jsx("div", {
      key: i + data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, i + 1 + '. ', data);
  })), __jsx("div", {
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Received errors:"), receivedError && receivedError.map(function (error, i) {
    return __jsx("div", {
      key: i + error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, i + 1 + '. ', error);
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_5__["default"])(styles)(Test));

/***/ })

})
//# sourceMappingURL=test-share.js.4ccbc1801d4ea1850efd.hot-update.js.map