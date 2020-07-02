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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @btsd/aitu-bridge */ "./node_modules/@btsd/aitu-bridge/dist/index.module.js");


var _jsxFileName = "/Users/gordey/github/lgordey.github.io/pages/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var eventType = 'aituEvents';
var styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  }
};

function Test(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      calledMethods = _useState[0],
      setCalledMethods = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      methodName = _useState2[0],
      setMethodName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      receivedData = _useState3[0],
      setReceivedData = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    invokeMethod('InitApps');
    window.addEventListener(eventType, function (event) {
      var evStr = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(event.detail);

      console.log('eventType', eventType);
      console.log('event', event);
      setReceivedData(function (prevArray) {
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevArray), [evStr]);
      });
    });
  }, []);

  var handleChange = function handleChange(event) {
    setMethodName(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    invokeMethod(methodName);
  };

  var invokeMethod = function invokeMethod(name) {
    _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_4__["default"].invoke(name);
    setCalledMethods(function (prevArray) {
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevArray), [name]);
    });
    setMethodName('');
  };

  return __jsx("div", {
    className: classes.testWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Method name:", __jsx("input", {
    type: "text",
    name: "method-name",
    value: methodName,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "Invoke method",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("div", {
    style: {
      marginTop: 20,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Invoked methods:"), calledMethods.map(function (method, i) {
    return __jsx("div", {
      key: i + method,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, i + 1 + ') ', method);
  })), __jsx("div", {
    style: {
      width: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Received data:"), receivedData && receivedData.map(function (data, i) {
    return __jsx("div", {
      key: i + data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, i + 1 + '. ', data);
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["default"])(styles)(Test));
;

/***/ })

})
//# sourceMappingURL=test.js.03ac29b23c7b8c8ecdab.hot-update.js.map