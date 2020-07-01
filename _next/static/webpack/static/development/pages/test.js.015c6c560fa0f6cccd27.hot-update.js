webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @btsd/aitu-bridge */ "./node_modules/@btsd/aitu-bridge/dist/index.module.js");

var _jsxFileName = "/Users/gordey/github/lgordey.github.io/pages/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  }
};

function Test(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      calledMethods = _useState[0],
      setCalledMethods = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      methodName = _useState2[0],
      setMethodName = _useState2[1];

  _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_3__["default"];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    invokeMethod('InitApps');
  }, []);

  var handleChange = function handleChange(event) {
    setMethodName(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    invokeMethod(methodName);
  };

  var invokeMethod = function invokeMethod(name) {
    _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_3__["default"].invoke(name);
    setCalledMethods(function (prevArray) {
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevArray), [name]);
    });
    setMethodName('');
  };

  return __jsx("div", {
    className: classes.testWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Method name:", __jsx("input", {
    type: "text",
    name: "method-name",
    value: methodName,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "Invoke method",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    style: {
      marginTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Invoked methods:"), calledMethods.map(function (method, i) {
    return __jsx("div", {
      key: i + method,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, i + 1 + ') ', method);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["default"])(styles)(Test));
;

/***/ })

})
//# sourceMappingURL=test.js.015c6c560fa0f6cccd27.hot-update.js.map