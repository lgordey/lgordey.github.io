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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @btsd/aitu-bridge */ "./node_modules/@btsd/aitu-bridge/dist/index.module.js");



var _jsxFileName = "/Users/gordey/github/lgordey.github.io/pages/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var eventType = 'aituEvents';
var styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  },
  btnWrapper: {
    padding: 20,
    border: '2px solid black',
    marginTop: 20,
    '& button:not(:first-child)': {
      marginLeft: 20
    }
  }
};

function Test(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      calledMethods = _useState[0],
      setCalledMethods = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      receivedData = _useState2[0],
      setReceivedData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    handleMethod('InitApps');
  }, []);

  var handleMethod =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(methodName) {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setCalledMethods(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevArray), [methodName]);
              });
              _context.next = 3;
              return _btsd_aitu_bridge__WEBPACK_IMPORTED_MODULE_5__["default"].invoke(methodName);

            case 3:
              data = _context.sent;
              console.log('__Received__data!', data);
              setReceivedData(function (prevArray) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevArray), [data]);
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleMethod(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: classes.testWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: classes.btnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getMe');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "getMe"), __jsx("button", {
    onClick: function onClick() {
      return handleMethod('getPhone');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "getPhone")), __jsx("div", {
    style: {
      marginTop: 20,
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Invoked methods:"), calledMethods.map(function (method, i) {
    return __jsx("div", {
      key: i + method,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, i + 1 + ') ', method);
  })), __jsx("div", {
    style: {
      width: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("b", {
    style: {
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Received data:"), receivedData && receivedData.map(function (data, i) {
    return __jsx("div", {
      key: i + data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, i + 1 + '. ', data);
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["default"])(styles)(Test));

/***/ })

})
//# sourceMappingURL=test.js.d2477366c0ae6231dd3d.hot-update.js.map