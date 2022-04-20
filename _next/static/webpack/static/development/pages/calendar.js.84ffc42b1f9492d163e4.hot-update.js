webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./pages/calendar.jsx":
/*!****************************!*\
  !*** ./pages/calendar.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DemoApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");





var _jsxFileName = "/Users/gordey/github/lgordey.github.io/pages/calendar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var DemoApp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DemoApp, _React$Component);

  function DemoApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DemoApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DemoApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DemoApp, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          maxWidth: 1000,
          margin: '0 auto',
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_9__["default"]],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialDate: "2022-04-12",
        navLinks: true,
        editable: true,
        dayMaxEvents: true,
        events: [{
          title: 'All Day Event',
          start: '2022-04-01'
        }, {
          title: 'Long Event',
          start: '2022-04-07',
          end: '2022-04-10'
        }, {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-04-09T16:00:00'
        }, {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-04-16T16:00:00'
        }, {
          title: 'Conference',
          start: '2022-04-11',
          end: '2022-04-13'
        }, {
          title: 'Meeting',
          start: '2022-04-12T10:30:00',
          end: '2022-04-12T12:30:00'
        }, {
          title: 'Lunch',
          start: '2022-04-12T12:00:00'
        }, {
          title: 'Meeting',
          start: '2022-04-12T14:30:00'
        }, {
          title: 'Happy Hour',
          start: '2022-04-12T17:30:00'
        }, {
          title: 'Dinner',
          start: '2022-04-12T20:00:00'
        }, {
          title: 'Birthday Party',
          start: '2022-04-13T07:00:00'
        }, {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-04-28'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }]);

  return DemoApp;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=calendar.js.84ffc42b1f9492d163e4.hot-update.js.map