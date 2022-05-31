webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-collapse */ "./node_modules/rc-collapse/es/index.js");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-collapse/assets/index.css */ "./node_modules/rc-collapse/assets/index.css");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons */ "./icons/index.js");


var _jsxFileName = "/Users/lgordey/BTS/lgordey.github.io/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var arrow = '/icon-arrow.svg';
var dauren = '/dauren.jpg';
var andrew = '/andrew.jpg';
var serezha = '/serezha.jpg';
var tanya = '/tanya.jpg';
var saken = '/saken.jpg';
var vitalik = '/vitalik.jpg';
var anton = '/anton.jpg';
var speaker1 = '/speaker1.jpg';
var speaker2 = '/speaker2.jpg';
var speaker3 = '/speaker3.jpg';
var speaker4 = '/speaker4.png';
var map = '/map.png';
var black = '#111111';
var yellow = '#FFD222';
var family = 'SuisseBook';
var maxWidth = 1221;
var headerBlock = {
  height: 60,
  boxSizing: 'border-box',
  borderRight: "1px solid ".concat(black),
  borderBottom: "1px solid ".concat(black)
};
var buttonBase = {
  fontFamily: family,
  fontSize: 28,
  display: 'block',
  textAlign: 'center',
  border: "1px solid ".concat(black),
  boxSizing: 'border-box',
  borderRadius: 6,
  height: 60,
  lineHeight: '60px',
  background: black,
  color: yellow,
  textDecoration: 'none',
  '&:hover': {
    background: '#282828',
    borderColor: '#282828'
  },
  '&:active': {
    background: 'none',
    color: black
  }
};

var styles = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
  '@global': {
    '.rc-collapse-content > .rc-collapse-content-box': {
      margin: '12px 0 69px!important',
      lineHeight: '40px'
    }
  },
  app: {
    width: '100%',
    maxWidth: maxWidth,
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box'
  },
  header: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: {
      top: 30
    }
  },
  logo: {
    width: 60,
    padding: 7,
    flexShrink: 0,
    position: 'relative',
    extend: headerBlock,
    '&:hover': {
      cursor: 'pointer',
      color: '#282828'
    }
  },
  jsLogo: {
    position: 'absolute',
    right: 7,
    bottom: 3
  },
  registration: {
    extend: buttonBase,
    width: 381
  },
  astanajs: {
    width: 560,
    position: 'relative',
    extend: headerBlock,
    '&:hover': {
      cursor: 'pointer',
      color: '#282828'
    }
  },
  astana: {
    fontFamily: family,
    fontSize: 20,
    position: 'absolute',
    left: 6
  },
  y2019: {
    fontFamily: family,
    fontSize: 20,
    position: 'absolute',
    right: 7
  },
  powered: {
    width: 130,
    position: 'relative',
    flexShrink: 0,
    extend: headerBlock,
    '&:hover': {
      cursor: 'pointer',
      color: '#282828'
    }
  },
  poweredText: {
    fontFamily: family,
    fontSize: 11,
    position: 'absolute',
    left: 5,
    top: 4
  },
  btsdWrapper: {
    position: 'absolute',
    right: 5,
    bottom: -2
  },
  registrationWrapper: {},
  collapse: {
    background: yellow,
    border: 'none'
  },
  headerPanel: {
    background: yellow,
    height: 66,
    lineHeight: '66px',
    fontFamily: family,
    fontSize: 28,
    outline: 'none',
    padding: '0 0 0 9px!important',
    color: "".concat(black, "!important"),
    '& + div': {
      background: yellow,
      color: "".concat(black, "!important"),
      fontFamily: family,
      fontSize: 28,
      padding: 0,
      '& > div': {
        margin: '12px 0 69px!important',
        lineHeight: '40px'
      }
    }
  },
  panel: {
    background: yellow,
    border: 'none!important',
    borderBottom: "1px solid ".concat(black, "!important"),
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      height: 16,
      width: 17,
      right: 8,
      bottom: 24,
      background: "url(".concat(arrow, ")"),
      position: 'absolute',
      transition: 'all 0.5s ease'
    },
    '&.rc-collapse-item-active:after': {
      transform: 'rotate(180deg)'
    },
    '&:hover .rc-collapse-header': {
      color: '#464646!important'
    }
  },
  bottomLink: {
    position: 'absolute',
    bottom: 14,
    right: 0,
    width: '100%',
    textAlign: 'right',
    paddingRight: 65,
    cursor: 'pointer',
    '&:hover': {
      color: '#464646'
    }
  },
  speakers: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  speaker: {},
  outerImage: {
    width: 380,
    height: 380,
    overflow: 'hidden'
  },
  speakerImage: {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundColor: yellow,
    backgroundBlendMode: 'multiply',
    transition: 'all 0.5s ease',
    '&:hover': {
      backgroundBlendMode: 'normal',
      transform: 'scale(1.2)'
    }
  },
  speakerText: {
    fontFamily: family,
    width: 380,
    padding: '5px 15px 12px 0',
    boxSizing: 'border-box',
    borderRight: "1px solid ".concat(black),
    borderBottom: "1px solid ".concat(black),
    marginTop: 20,
    marginBottom: 30
  },
  speakerName: {
    fontSize: 28,
    paddingLeft: 15
  },
  speakerDesc: {
    fontSize: 16,
    marginTop: 13,
    lineHeight: '25px',
    textAlign: 'right',
    whiteSpace: 'pre-wrap'
  },
  mainText: {
    fontFamily: family,
    fontSize: 50,
    lineHeight: '50px',
    marginTop: 53,
    marginBottom: 61
  },
  schedule: {},
  scheduleItem: {
    display: 'flex',
    borderBottom: "1px solid rgba(17, 17, 17, .3)",
    padding: '10px 0 15px',
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  scheduleTime: {
    width: 295,
    flexShrink: 0
  },
  scheduleSpeaker: {
    width: 370,
    flexShrink: 0
  },
  scheduleSpeakerImage: {
    width: 220,
    height: 220,
    marginTop: 10,
    overflow: 'hidden'
  },
  scheduleContent: {},
  scheduleTalkContent: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: '25px',
    whiteSpace: 'pre-wrap'
  },
  where: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  map: {
    width: 779,
    height: 400,
    flexShrink: 0,
    backgroundImage: "url(".concat(map, ")"),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: yellow,
    backgroundBlendMode: 'multiply'
  },
  place: {
    width: 383
  },
  placeName: {
    fontFamily: family,
    fontSize: 28,
    paddingTop: 14
  },
  placeDesc: {
    fontFamily: family,
    fontSize: 16,
    lineHeight: '25px',
    marginTop: 26,
    '& a': {
      color: black,
      '&:hover': {
        textDecoration: 'none'
      }
    }
  },
  pastLink: {
    color: black,
    '&: hover': {
      textDecoration: 'none'
    }
  },
  participate: {
    extend: buttonBase,
    width: 339,
    marginTop: 50
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: family,
    fontSize: 16,
    lineHeight: '16px',
    padding: '40px 0'
  },
  footerItem: {},
  footerLink: {
    color: black,
    textDecoration: 'none'
  }
}, "@media (max-width: ".concat(maxWidth, "px)"), {
  header: {
    margin: {
      top: 10
    }
  },
  app: {
    padding: 20
  },
  astanajs: {
    flex: 1,
    margin: '0 10px'
  },
  registrationWrapper: {
    display: 'none'
  },
  outerImage: {
    width: 280,
    height: 280,
    margin: '0 auto'
  },
  panel: {
    '&:after': {
      right: 5,
      bottom: 13
    }
  },
  bottomLink: {
    paddingRight: 37
  },
  mainText: {
    fontSize: 28,
    margin: '15px 0',
    lineHeight: '30px'
  },
  speaker: {
    width: '100%'
  },
  speakerText: {
    width: 280,
    margin: '10px auto',
    position: 'relative'
  },
  scheduleItem: {
    flexFlow: 'row wrap'
  },
  scheduleSpearkerWrapper: {
    '& > div:first-child': {
      fontWeight: 'bold',
      marginTop: 12
    }
  },
  scheduleSpeaker: {
    width: '100%'
  },
  scheduleTime: {
    width: 110
  },
  where: {
    flexFlow: 'column-reverse'
  },
  place: {
    width: '100%',
    margin: '0 0 20px'
  },
  map: {
    width: '100%'
  },
  headerPanel: {
    fontSize: 16,
    height: 40,
    '& + div': {
      fontSize: 16,
      '& > div': {
        lineHeight: '25px'
      }
    }
  },
  footer: {
    justifyContent: 'center',
    flexFlow: 'row wrap',
    alignContent: 'flex-end'
  },
  footerItem: {
    flexBasis: 'calc(33%-10px)',
    '&:nth-child(2), &:nth-child(5)': {
      textAlign: 'center'
    },
    '&:nth-child(3), &:nth-child(6)': {
      textAlign: 'right'
    }
  }
});

var speakers = [{
  name: 'Алексей Какоулин',
  desc: 'Алматы, InDriver',
  talkTitle: 'TBD...',
  talkContent: 'TBD...',
  img: speaker3
}, {
  name: 'Александр Щербаков',
  desc: 'Нур-Султан, BTS Digital',
  talkTitle: 'TBD...',
  talkContent: 'TBD...',
  img: speaker1
}, {
  name: 'Мусабек Коков',
  desc: 'Нальчик, Farzoom',
  talkTitle: 'TBD...',
  talkContent: 'TBD...',
  img: speaker2
}, {
  name: 'Надир Нурлыбеков',
  desc: 'Нур-Султан, Kazdream',
  talkTitle: 'TBD...',
  talkContent: 'TBD...',
  img: speaker4
}];
var schedule = [{
  time: '18:00 — 18:20',
  content: 'Регистрация'
}, {
  time: '18:20 — 18:30',
  content: 'Открытие мероприятия'
}, {
  time: '18:30 — 19:00',
  content: 'Спикер 1',
  speaker: speakers[0]
}, {
  time: '19:00 — 19:30',
  content: 'Спикер 2',
  speaker: speakers[1]
}, {
  time: '19:30 — 19:50',
  content: 'Сoffee break'
}, {
  time: '19:50 — 20:20',
  content: 'Спикер 3',
  speaker: speakers[2]
}, {
  time: '20:20 — 20:50',
  content: 'Спикер 4',
  speaker: speakers[3]
}, {
  time: '20:50 — 21:00',
  content: 'Окончание мероприятия, афтепати'
}];

function App(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('0'),
      activeKey = _useState[0],
      setActiveKey = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (false) { var gtag; }
  }, []);
  var panelProps = {
    headerClass: classes.headerPanel,
    className: classes.panel,
    showArrow: false
  };
  return __jsx("div", {
    className: classes.app,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, "AstanaJS")), __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, __jsx("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconAstanaJSLogo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }), __jsx("div", {
    className: classes.jsLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconJS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }))), __jsx("div", {
    className: classes.astanajs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, __jsx("div", {
    className: classes.astana,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, "Astana"), __jsx("div", {
    className: classes.y2019,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "2022"), __jsx("div", {
    className: classes.jsLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconJS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }))), __jsx("div", {
    className: classes.powered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, __jsx("div", {
    className: classes.poweredText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, "Powered by"), __jsx("div", {
    className: classes.btsdWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconBTSDLogo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }))), __jsx("div", {
    className: classes.registrationWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }, __jsx("a", {
    href: "https://astanajs.timepad.ru/event/1093307/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.registration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))), __jsx("div", {
    className: classes.mainText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, "\u0412\u043C\u0435\u0441\u0442\u0435 \u043C\u044B\xA0\u0434\u0435\u043B\u0430\u0435\u043C \u0435\u0449\u0435 \u043E\u0434\u0438\u043D \u0448\u0430\u0433 \u043A\xA0\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E frontend \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }), "\u0432\xA0\u041D\u0443\u0440-\u0421\u0443\u043B\u0442\u0430\u043D\u0435."), __jsx("div", {
    className: "Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.collapse,
    accordion: true,
    activeKey: activeKey,
    onChange: function onChange(activeKey) {
      setActiveKey(activeKey);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u0414\u043B\u044F \u043A\u043E\u0433\u043E?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, "8 \u0438\u044E\u043D\u044F"), " \u043C\u0438\u0442\u0430\u043F (\u0438\u043B\u0438 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044F?) ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, "AstanaJS"), " \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u0442 \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u043D\u0430 JavaScript. \u0410 \u0442\u0430\u043A\u0436\u0435 \u0432\u0441\u0435\u0445, \u043A\u043E\u043C\u0443 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u2014 \u0431\u044D\u043A\u0435\u043D\u0434\u0435\u0440\u043E\u0432, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A\u043E\u0432, \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432, \u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0442 \u043A\u0430\u0440\u044C\u0435\u0440\u0443 \u0432 IT.", __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('1');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "\u044F\u0441\u043D\u043E")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u0430\u0437?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }), "\u041D\u0435\u0442! \u042D\u0442\u043E \u0443\u0436\u0435 ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, "5-\u043E\u0435"), " \u043F\u043E \u0441\u0447\u0435\u0442\u0443 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, "AstanaJS"), "!", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }), "\u041A\u0430\u043A \u044D\u0442\u043E \u0431\u044B\u043B\u043E:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "https://www.facebook.com/events/304756690289447/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }, "AstanaJS #1"), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "https://www.facebook.com/events/2116889328332193/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, "AstanaJS #2 "), "  ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "https://www.facebook.com/events/450018115541840/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, "AstanaJS #3 "), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "/2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, "AstanaJS #4 "), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('2');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, "\u044F\u0441\u043D\u043E")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0442\u043E \u0432 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u0441\u043F\u0438\u043A\u0435\u0440\u044B?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), __jsx("div", {
    className: classes.speakers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, speakers.map(function (_ref2) {
    var img = _ref2.img,
        name = _ref2.name,
        desc = _ref2.desc;
    return __jsx("div", {
      className: classes.speaker,
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606
      },
      __self: this
    }, __jsx("div", {
      className: classes.outerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607
      },
      __self: this
    }, __jsx("div", {
      style: img ? {
        backgroundImage: "url(".concat(img, ")")
      } : {
        background: yellow
      },
      className: classes.speakerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608
      },
      __self: this
    })), __jsx("div", {
      className: classes.speakerText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }, __jsx("div", {
      className: classes.speakerName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, name), __jsx("div", {
      className: classes.speakerDesc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, desc)));
  })), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('3');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }, "\u043F\u043E\u043D\u044F\u043B")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0430\u043A\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }), __jsx("div", {
    className: classes.schedule,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, schedule.map(function (_ref3) {
    var time = _ref3.time,
        content = _ref3.content,
        speaker = _ref3.speaker;
    return __jsx("div", {
      className: classes.scheduleItem,
      key: time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628
      },
      __self: this
    }, __jsx("div", {
      className: classes.scheduleTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629
      },
      __self: this
    }, time), speaker && __jsx("div", {
      className: classes.scheduleSpeaker,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633
      },
      __self: this
    }, speaker.name), __jsx("div", {
      className: classes.scheduleSpeakerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }, __jsx("div", {
      style: speaker.img ? {
        backgroundImage: "url(".concat(speaker.img, ")")
      } : {
        background: yellow
      },
      className: classes.speakerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }))), speaker ? __jsx("div", {
      className: classes.scheduleSpearkerWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644
      },
      __self: this
    }, __jsx("div", {
      className: classes.scheduleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645
      },
      __self: this
    }, speaker.talkTitle), __jsx("div", {
      className: classes.scheduleTalkContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646
      },
      __self: this
    }, speaker.talkContent)) : __jsx("div", {
      className: classes.scheduleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648
      },
      __self: this
    }, content));
  })), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('4');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }, "\u043E\u043A-\u043E\u043A")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u0413\u0434\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }), __jsx("div", {
    className: classes.where,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, __jsx("div", {
    className: classes.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }), __jsx("div", {
    className: classes.place,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, __jsx("div", {
    className: classes.placeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, "\u0410stana Hub"), __jsx("div", {
    className: classes.placeDesc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }, "\u041C\u0438\u0442\u0430\u043F \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u0436\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0435\u0445\u043D\u043E\u043F\u0430\u0440\u043A\u0430 IT-\u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432  Astana Hub \u0432 \u0440\u0430\u0439\u043E\u043D\u0435 \u042D\u043A\u0441\u043F\u043E.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }), "\u0422\u043E\u0447\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441: \u0433. \u041D\u0443\u0440-\u0421\u0443\u043B\u0442\u0430\u043D, \u041C\u04D9\u04A3\u0433\u0456\u043B\u0456\u043A \u0415\u043B \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442, \u04214.6", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }), "2gis: ", __jsx("a", {
    href: "https://go.2gis.com/1a5of",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, "https://go.2gis.com/1a5of")))), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('5');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, "\u0433\u043E\u0434\u0438\u0442\u0441\u044F")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u043E\u0433\u0434\u0430?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, "8 \u0438\u044E\u043D\u044F 2022 (\u0441\u0443\u0431\u0431\u043E\u0442\u0430)"), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('6');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675
    },
    __self: this
  }, "\u0430\u0433\u0430")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0430\u043A \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u0430\u0448\u0435\u043C\u0443 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0443 BTS Digital \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043C\u0438\u0442\u0430\u043F\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C. \u041F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435."), __jsx("a", {
    href: "https://astanajs.timepad.ru/event/1093307/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.participate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }, "\u044F \u0432 \u0434\u0435\u043B\u0435, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E!"), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, "\u0447\u0443\u0434\u043D\u0435\u043D\u044C\u043A\u043E"))))), __jsx("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }, __jsx("div", {
    className: classes.footerItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }, __jsx("a", {
    className: classes.footerLink,
    href: "https://www.facebook.com/events/790754704680704/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, "AstanaJS @ Facebook"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_5__["default"])(styles)(App));

/***/ })

})
//# sourceMappingURL=index.js.cf978e61611082a25ab6.hot-update.js.map