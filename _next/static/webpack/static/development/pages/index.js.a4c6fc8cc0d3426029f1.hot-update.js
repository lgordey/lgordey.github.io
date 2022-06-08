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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-collapse */ "./node_modules/rc-collapse/es/index.js");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-collapse/assets/index.css */ "./node_modules/rc-collapse/assets/index.css");
/* harmony import */ var rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_collapse_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons */ "./icons/index.js");

var _jsxFileName = "/Users/gordey/github/lgordey.github.io/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const arrow = '/icon-arrow.svg';
const dauren = '/dauren.jpg';
const andrew = '/andrew.jpg';
const serezha = '/serezha.jpg';
const tanya = '/tanya.jpg';
const saken = '/saken.jpg';
const vitalik = '/vitalik.jpg';
const anton = '/anton.jpg';
const speaker1 = '/speaker1.jpg';
const speaker2 = '/speaker2.jpg';
const speaker3 = '/speaker3.jpg';
const speaker5 = '/speaker5.jpg';
const map = '/map.png';
const black = '#111111';
const yellow = '#FFD222';
const family = 'SuisseBook';
const maxWidth = 1221;
const headerBlock = {
  height: 60,
  boxSizing: 'border-box',
  borderRight: "1px solid ".concat(black),
  borderBottom: "1px solid ".concat(black)
};
const buttonBase = {
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
const styles = {
  '@global': {
    '.rc-collapse-content > .rc-collapse-content-box': {
      margin: '12px 0 69px!important',
      lineHeight: '40px'
    }
  },
  app: {
    width: '100%',
    maxWidth,
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
  registrationMobileWrapper: {
    display: 'none',
    marginTop: 20,
    '& $registration': {
      width: '100%'
    }
  },
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
  },
  ["@media (max-width: ".concat(maxWidth, "px)")]: {
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
    registrationMobileWrapper: {
      display: 'block'
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
      width: '100%',
      '& + div $scheduleContent': {
        fontWeight: 600,
        marginTop: 20,
        marginBottom: 12,
        lineHeight: '24px'
      }
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
  }
};
const speakers = [{
  name: 'Алексей Какоулин',
  desc: 'Алматы, InDriver',
  talkTitle: 'Дизайн-система inDriver',
  talkContent: 'Ежедневно мобильными приложениями inDriver пользуются миллионы людей в 40+ странах.\n\nЧтобы обеспечить высокий уровень пользовательского опыта на всех платформах мы развиваем дизайн-систему, о которой расскажет iOS engineer inDriver Алексей Какоулин.\n\nКакие проблемы решает дизайн-система, из каких компонентов состоит, как организована её разработка и какое отношение всё это имеет к самому холодному месту на планете Земля вы узнаете на митапе в Астане.',
  img: speaker3
}, {
  name: 'Александр Щербаков',
  desc: 'Нур-Султан, BTS Digital',
  talkTitle: 'Face Detection на СКУД-терминале',
  talkContent: 'Web-технологии давно заняли огромную нишу в сфере enterprise-приложений. Можно любить или не любить заниматься web-разработкой, но остается только признать, что это эффективно.\n\nБуквально в несколько строк кода возможно подключение artificial intelligence технологий, без установки дополнительного программного обеспечения или расширений для браузера.\n\nКак использование голой OS и браузера помогло создать hardware-решение для системы контроля управления доступом в своем докладе постарается рассказать Александр Щербаков.',
  img: speaker1
}, {
  name: 'Мусабек Коков',
  desc: 'Нальчик, Farzoom',
  talkTitle: 'Погоня за технологиями или как ничего не сделать',
  talkContent: 'Многие считают, что хороший продукт - это набор современных технологических стеков и модных подходов в разработке.\n\n\При этом у бизнеса зачастую свои цели, не требующие сложных технических решений.\n\nВ своём докладе Мусабек Коков постарается раскрыть, почему важно выбирать оптимальные инструменты для каждого конкретного бизнес кейса.',
  img: speaker2
}, {
  name: 'Гордей Левченко',
  desc: 'Нур-Султан, BTS Digital',
  talkTitle: 'История одного доклада',
  talkContent: '– темы нет, когда появится напишу\n…\n\n\– пока желания нет\n…\n\n\– о чем? я ничего такого не делаю\n…\n\n\n А что нужно делать "такого", чтобы иметь возможность рассказать об этом на широкую аудиторию?Будет ли это обзор новой версии React, или же нестандартное применение технологий, а может интересный опыт, эксперименты и рассуждения.\n\n\В своем докладе "История одного доклада" Гордей поделится своими мыслями на тему докладов, спикеров, митапов и выступлений.Доклад носит философско-техническую направленность, рекомендуется для прослушивания любым специалистам сферы IT, студентам и всем тем, кто хочет, но не может решиться на выступление.',
  img: speaker5
}];
const schedule = [{
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

function App({
  classes
}) {
  const {
    0: activeKey,
    1: setActiveKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('0');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (false) {}
  }, []);
  const panelProps = {
    headerClass: classes.headerPanel,
    className: classes.panel,
    showArrow: false
  };
  return __jsx("div", {
    className: classes.app,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, "AstanaJS")), __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }, __jsx("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_7__["IconAstanaJSLogo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }), __jsx("div", {
    className: classes.jsLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_7__["IconJS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }))), __jsx("div", {
    className: classes.astanajs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, __jsx("div", {
    className: classes.astana,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, "Astana"), __jsx("div", {
    className: classes.y2019,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, "2022"), __jsx("div", {
    className: classes.jsLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_7__["IconJS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  }))), __jsx("div", {
    className: classes.powered,
    onClick: () => {
      window.open('https://btsdigital.kz', '_blank');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, __jsx("div", {
    className: classes.poweredText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, "Powered by"), __jsx("div", {
    className: classes.btsdWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_7__["IconBTSDLogo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }))), __jsx("div", {
    className: classes.registrationWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, __jsx("a", {
    href: "https://forms.gle/3m1jeprW16ymiG9V8",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.registration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }, "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))), __jsx("div", {
    className: classes.registrationMobileWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, __jsx("a", {
    href: "https://forms.gle/3m1jeprW16ymiG9V8",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.registration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")), __jsx("div", {
    className: classes.mainText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, "\u0412\u043C\u0435\u0441\u0442\u0435 \u043C\u044B\xA0\u0434\u0435\u043B\u0430\u0435\u043C \u0435\u0449\u0435 \u043E\u0434\u0438\u043D \u0448\u0430\u0433 \u043A\xA0\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E frontend \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }), "\u0432\xA0\u041D\u0443\u0440-\u0421\u0443\u043B\u0442\u0430\u043D\u0435.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }), "8 \u0438\u044E\u043D\u044F", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), "18:00", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), "Astana Hub"), __jsx("div", {
    className: "Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.collapse,
    accordion: true,
    activeKey: activeKey,
    onChange: activeKey => {
      setActiveKey(activeKey);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }, __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u0414\u043B\u044F \u043A\u043E\u0433\u043E?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, "8 \u0438\u044E\u043D\u044F"), " \u043C\u0438\u0442\u0430\u043F ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, "AstanaJS"), " \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u0442 \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u043D\u0430 JavaScript. \u0410 \u0442\u0430\u043A\u0436\u0435 \u0432\u0441\u0435\u0445, \u043A\u043E\u043C\u0443 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u2014 \u0431\u044D\u043A\u0435\u043D\u0434\u0435\u0440\u043E\u0432, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A\u043E\u0432, \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432, \u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0442 \u043A\u0430\u0440\u044C\u0435\u0440\u0443 \u0432 IT.", __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey('1');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, "\u044F\u0441\u043D\u043E")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u0430\u0437?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }), "\u041D\u0435\u0442! \u042D\u0442\u043E \u0443\u0436\u0435 ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, "5-\u043E\u0435"), " \u043F\u043E \u0441\u0447\u0435\u0442\u0443 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, "AstanaJS"), "!", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }), "\u041A\u0430\u043A \u044D\u0442\u043E \u0431\u044B\u043B\u043E:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "https://www.facebook.com/events/304756690289447/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }, "AstanaJS #1"), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "https://www.facebook.com/events/2116889328332193/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }, "AstanaJS #2 "), "  ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "https://www.facebook.com/events/450018115541840/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, "AstanaJS #3 "), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }), "- ", __jsx("a", {
    target: "_blank",
    className: classes.pastLink,
    href: "/2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, "AstanaJS #4 "), __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey('2');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, "\u044F\u0441\u043D\u043E")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0442\u043E \u0432 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u0441\u043F\u0438\u043A\u0435\u0440\u044B?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }), __jsx("div", {
    className: classes.speakers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }, speakers.map(({
    img,
    name,
    desc
  }) => {
    return __jsx("div", {
      className: classes.speaker,
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631
      },
      __self: this
    }, __jsx("div", {
      className: classes.outerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
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
        lineNumber: 633
      },
      __self: this
    })), __jsx("div", {
      className: classes.speakerText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637
      },
      __self: this
    }, __jsx("div", {
      className: classes.speakerName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638
      },
      __self: this
    }, name), __jsx("div", {
      className: classes.speakerDesc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
      },
      __self: this
    }, desc)));
  })), __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey('3');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, "\u043F\u043E\u043D\u044F\u043B")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0430\u043A\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }), __jsx("div", {
    className: classes.schedule,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, schedule.map(({
    time,
    content,
    speaker
  }) => {
    return __jsx("div", {
      className: classes.scheduleItem,
      key: time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653
      },
      __self: this
    }, __jsx("div", {
      className: classes.scheduleTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654
      },
      __self: this
    }, time), speaker && __jsx("div", {
      className: classes.scheduleSpeaker,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658
      },
      __self: this
    }, speaker.name), __jsx("div", {
      className: classes.scheduleSpeakerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659
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
        lineNumber: 660
      },
      __self: this
    }))), speaker ? __jsx("div", {
      className: classes.scheduleSpearkerWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669
      },
      __self: this
    }, __jsx("div", {
      className: classes.scheduleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670
      },
      __self: this
    }, speaker.talkTitle), __jsx("div", {
      className: classes.scheduleTalkContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671
      },
      __self: this
    }, speaker.talkContent)) : __jsx("div", {
      className: classes.scheduleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673
      },
      __self: this
    }, content));
  })), __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey('4');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, "\u043E\u043A-\u043E\u043A")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u0413\u0434\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }), __jsx("div", {
    className: classes.where,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, __jsx("div", {
    className: classes.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: this
  }), __jsx("div", {
    className: classes.place,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }, __jsx("div", {
    className: classes.placeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }, "\u0410stana Hub"), __jsx("div", {
    className: classes.placeDesc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, "\u041C\u0438\u0442\u0430\u043F \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u0436\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0435\u0445\u043D\u043E\u043F\u0430\u0440\u043A\u0430 IT-\u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432  Astana Hub \u0432 \u0440\u0430\u0439\u043E\u043D\u0435 \u042D\u043A\u0441\u043F\u043E.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }), "\u0422\u043E\u0447\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441: \u0433. \u041D\u0443\u0440-\u0421\u0443\u043B\u0442\u0430\u043D, \u041C\u04D9\u04A3\u0433\u0456\u043B\u0456\u043A \u0415\u043B \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442, \u04214.6", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }), "2gis: ", __jsx("a", {
    href: "https://go.2gis.com/1a5of",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }, "https://go.2gis.com/1a5of")))), __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey('5');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, "\u0433\u043E\u0434\u0438\u0442\u0441\u044F")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u043E\u0433\u0434\u0430?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }, "8 \u0438\u044E\u043D\u044F 2022 (\u0441\u0440\u0435\u0434\u0430) \u0432 18:00"), __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey('6');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, "\u0430\u0433\u0430")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_5__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0430\u043A \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u0430\u0448\u0435\u043C\u0443 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0443 BTS Digital \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043C\u0438\u0442\u0430\u043F\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C. \u041F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435."), __jsx("a", {
    href: "https://forms.gle/3m1jeprW16ymiG9V8",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.participate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }, "\u044F \u0432 \u0434\u0435\u043B\u0435, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E!"), __jsx("div", {
    className: classes.bottomLink,
    onClick: () => {
      setActiveKey();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: this
  }, "\u0447\u0443\u0434\u043D\u0435\u043D\u044C\u043A\u043E"))))), __jsx("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, __jsx("div", {
    className: classes.footerItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, __jsx("a", {
    className: classes.footerLink,
    href: "https://www.facebook.com/events/790754704680704/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: this
  }, "AstanaJS @ Facebook"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_4__["default"])(styles)(App));

/***/ })

})
//# sourceMappingURL=index.js.a4c6fc8cc0d3426029f1.hot-update.js.map