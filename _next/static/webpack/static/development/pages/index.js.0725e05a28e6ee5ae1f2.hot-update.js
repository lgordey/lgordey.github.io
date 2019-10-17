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
var roman = '/roman.jpeg';
var pavel = '/pavel.png';
var ilya = '/ilya.jpg';
var andrey = '/andrey.png';
var yury = '/yury.png';
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
    body: {
      display: 'block'
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
    lineHeight: '25px'
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
  name: 'Роман Дворнов',
  desc: 'Frontend researcher, спикер,\nавтор @csstree, @basisjs, @rempljs',
  talkTitle: 'Почему фронтенд это круто',
  talkContent: 'Про то как повезло фронтендерам, вдохновение, расширение горизонтов, куда развиваться/расти (области во фронтенде) и немного предсказаний',
  img: roman
}, {
  name: 'Андрей Мелихов',
  desc: 'Программист-эксперт в компании Яндекс.Деньги, ведущий подкаста Девшахта',
  talkTitle: 'Best Friends Forever — когда фронтендер немножко бэкендер',
  talkContent: 'Сайты зародились и развивались на сервере. Выйдя из первичного супа WEB 1.0 в ядовитый воздух браузера, сайты начали стремительно эволюционировать и превращаться в SPA. Времена меняются и мы меняемся с ними, и вот уже нет вебмастеров, есть фронтендеры и бэкендеры. Но, стоп! Кажется, в крупных компаниях фронтендеры начинают снова писать бэкенд. Зачем? Давайте разберёмся, почему мы снова возвращаемся из браузера на сервер, какие преимущества нам это даёт, причём тут Node.js и как с этим дальше жить.',
  img: andrey
}, {
  name: 'Илья Климов',
  desc: '15 лет программирует на JS,\nсейчас занимается фронтом в GitLab',
  talkTitle: 'Пора переходить на Svelte?',
  talkContent: 'Последние пару лет отметились затишьем в мире frontend. На фоне этого затишья выход svelte v3 стал ярким и запоминающимся событием. В этом докладе мы кратко поговорим о достоинствах Svelte и самое главное - ответим на вопрос - нужно ли бросать всё и учить Svelte?',
  img: ilya
}, {
  name: 'Павел Черторогов',
  desc: 'GraphQL-гуру, консультант и тренер, разработчик, опенсорс-мейнтейнер',
  talkTitle: 'GraphQL на сервере, GraphQL на клиенте – раскладываю по полочкам',
  talkContent: 'В докладе буду комплексно рассматривать GraphQL. Буду рассказывать своим языком то, что написано в документации, интернетах, github-ишьюях с высоты своего 3-х летнего практического опыта работы с данной технологией. Вы же хотите сэкономить свое время и не перечитывать доки по 5 раз?!',
  img: pavel
}, {
  name: 'Юрий Абайтов',
  desc: 'Senior Frontend Developer\nв компании BTS Digital',
  talkTitle: 'Как использовать всю мощь webGL без боли на примере PIXI.js',
  talkContent: 'WebGL - это очень круто. Но что, если погружаться в мир вершин и шейдеров нет ни времени ни желания, а творческое начало просит создавать что-то новое и необычное? Я расскажу о своём опыте знакомства с WebGL, покажу как сделать «Hello world» и затем продемонстрирую как можно использовать мощь WebGL не заморачиваясь с векторной алгеброй и точностью float в GLSL.',
  img: yury
}];
var schedule = [{
  time: '13:30 — 14:20',
  content: 'Регистрация'
}, {
  time: '14:20 — 14:30',
  content: 'Открытие мероприятия'
}, {
  time: '14:30 — 15:25',
  content: 'Спикер 1',
  speaker: speakers[3]
}, {
  time: '15:25 — 16:20',
  content: 'Спикер 2',
  speaker: speakers[1]
}, {
  time: '16:20 — 16:40',
  content: 'Сoffee break'
}, {
  time: '16:40 — 17:35',
  content: 'Спикер 3',
  speaker: speakers[4]
}, {
  time: '17:35 — 18:30',
  content: 'Спикер 4',
  speaker: speakers[0]
}, {
  time: '18:30 — 18:50',
  content: 'Сoffee break'
}, {
  time: '18:50 — 19:40',
  content: 'Спикер 5',
  speaker: speakers[2]
}, {
  time: '19:40 — 19:50',
  content: 'Окончание мероприятия, итоги конкурсов, афтепати'
}];

function App(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('0'),
      activeKey = _useState[0],
      setActiveKey = _useState[1];

  var panelProps = {
    headerClass: classes.headerPanel,
    className: classes.panel,
    showArrow: false
  };
  return __jsx("div", {
    className: classes.app,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, "AstanaJS")), __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, __jsx("div", {
    className: classes.logo,
    onClick: function onClick() {
      window.open('https://www.facebook.com/events/450018115541840/', '_blank');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconAstanaJSLogo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }), __jsx("div", {
    className: classes.jsLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconJS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }))), __jsx("div", {
    className: classes.astanajs,
    onClick: function onClick() {
      window.open('https://www.facebook.com/events/450018115541840/', '_blank');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, __jsx("div", {
    className: classes.astana,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Astana"), __jsx("div", {
    className: classes.y2019,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, "2019"), __jsx("div", {
    className: classes.jsLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconJS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }))), __jsx("div", {
    className: classes.powered,
    onClick: function onClick() {
      window.open('https://btsdigital.kz', '_blank');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, __jsx("div", {
    className: classes.poweredText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, "Powered by"), __jsx("div", {
    className: classes.btsdWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_8__["IconBTSDLogo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }))), __jsx("div", {
    className: classes.registrationWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, __jsx("a", {
    href: "https://astanajs.timepad.ru/event/978851/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.registration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))), __jsx("div", {
    className: classes.mainText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, "\u0412\u043C\u0435\u0441\u0442\u0435 \u043C\u044B\xA0\u0434\u0435\u043B\u0430\u0435\u043C \u0435\u0449\u0435 \u043E\u0434\u0438\u043D \u0448\u0430\u0433 \u043A\xA0\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E frontend \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }), "\u0432\xA0\u041D\u0443\u0440-\u0421\u0443\u043B\u0442\u0430\u043D\u0435."), __jsx("div", {
    className: "Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
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
      lineNumber: 572
    },
    __self: this
  }, __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u0414\u043B\u044F \u043A\u043E\u0433\u043E?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, "16 \u043D\u043E\u044F\u0431\u0440\u044F"), " \u043C\u0438\u0442\u0430\u043F (\u0438\u043B\u0438 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044F?) AstanaJS 2019 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u0442 \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u043D\u0430 JavaScript. \u0410 \u0442\u0430\u043A\u0436\u0435 \u0432\u0441\u0435\u0445, \u043A\u043E\u043C\u0443 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u2014 \u0431\u044D\u043A\u0435\u043D\u0434\u0435\u0440\u043E\u0432, \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0449\u0438\u043A\u043E\u0432, \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432, \u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0442 \u043A\u0430\u0440\u044C\u0435\u0440\u0443 \u0432 IT.", __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('1');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, "\u044F\u0441\u043D\u043E")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u0430\u0437?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }), "\u041D\u0435\u0442! \u042D\u0442\u043E \u0443\u0436\u0435 ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, "4-\u0430\u044F"), " \u043F\u043E \u0441\u0447\u0435\u0442\u0443 \u0432\u0441\u0442\u0440\u0435\u0447\u0443 ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, "AstanaJS"), "!", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }), "\u041A\u0430\u043A \u044D\u0442\u043E \u0431\u044B\u043B\u043E:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }), "- AstanaJS #1 ", __jsx("a", {
    className: classes.pastLink,
    href: "https://www.facebook.com/events/304756690289447/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "https://www.facebook.com/events/304756690289447/"), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }), "- AstanaJS #2 ", __jsx("a", {
    className: classes.pastLink,
    href: "https://www.facebook.com/events/2116889328332193/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, "https://www.facebook.com/events/2116889328332193/"), "  ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }), "- AstanaJS #3 ", __jsx("a", {
    className: classes.pastLink,
    href: "https://www.facebook.com/events/450018115541840/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, "https://www.facebook.com/events/450018115541840/"), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('2');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "\u044F\u0441\u043D\u043E")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0442\u043E \u0432 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u0441\u043F\u0438\u043A\u0435\u0440\u044B?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }), __jsx("div", {
    className: classes.speakers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
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
        lineNumber: 597
      },
      __self: this
    }, __jsx("div", {
      className: classes.outerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598
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
        lineNumber: 599
      },
      __self: this
    })), __jsx("div", {
      className: classes.speakerText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603
      },
      __self: this
    }, __jsx("div", {
      className: classes.speakerName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604
      },
      __self: this
    }, name), __jsx("div", {
      className: classes.speakerDesc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605
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
      lineNumber: 612
    },
    __self: this
  }, "\u043F\u043E\u043D\u044F\u043B")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0430\u043A\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }), __jsx("div", {
    className: classes.schedule,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
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
        lineNumber: 619
      },
      __self: this
    }, __jsx("div", {
      className: classes.scheduleTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620
      },
      __self: this
    }, time), speaker && __jsx("div", {
      className: classes.scheduleSpeaker,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624
      },
      __self: this
    }, speaker.name), __jsx("div", {
      className: classes.scheduleSpeakerImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625
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
        lineNumber: 626
      },
      __self: this
    }))), speaker ? __jsx("div", {
      className: classes.scheduleSpearkerWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }, __jsx("div", {
      className: classes.scheduleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636
      },
      __self: this
    }, speaker.talkTitle), __jsx("div", {
      className: classes.scheduleTalkContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637
      },
      __self: this
    }, speaker.talkContent)) : __jsx("div", {
      className: classes.scheduleContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
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
      lineNumber: 646
    },
    __self: this
  }, "\u043E\u043A-\u043E\u043A")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u0413\u0434\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }), __jsx("div", {
    className: classes.where,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, __jsx("div", {
    className: classes.map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }), __jsx("div", {
    className: classes.place,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, __jsx("div", {
    className: classes.placeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, "\u0410stana Hub"), __jsx("div", {
    className: classes.placeDesc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, "\u041C\u0438\u0442\u0430\u043F \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u0436\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0442\u0435\u0445\u043D\u043E\u043F\u0430\u0440\u043A\u0430 IT-\u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432  Astana Hub \u0432 \u0440\u0430\u0439\u043E\u043D\u0435 \u042D\u043A\u0441\u043F\u043E.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }), "\u0422\u043E\u0447\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441: \u0433. \u041D\u0443\u0440-\u0421\u0443\u043B\u0442\u0430\u043D, \u041C\u04D9\u04A3\u0433\u0456\u043B\u0456\u043A \u0415\u043B \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442, \u04214.6", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }), "2gis: ", __jsx("a", {
    href: "https://go.2gis.com/1a5of",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, "https://go.2gis.com/1a5of")))), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('5');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, "\u0433\u043E\u0434\u0438\u0442\u0441\u044F")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u043E\u0433\u0434\u0430?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, "15 \u0438\u044E\u043D\u044F 2019 (\u0441\u0443\u0431\u0431\u043E\u0442\u0430)"), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey('6');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, "\u0430\u0433\u0430")), __jsx(rc_collapse__WEBPACK_IMPORTED_MODULE_6__["Panel"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    header: "\u041A\u0430\u043A \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435?"
  }, panelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u0430\u0448\u0435\u043C\u0443 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0443 BTS Digital \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043C\u0438\u0442\u0430\u043F\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C. \u041F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435."), __jsx("a", {
    href: "https://astanajs.timepad.ru/event/978851/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: classes.participate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, "\u044F \u0432 \u0434\u0435\u043B\u0435, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E!"), __jsx("div", {
    className: classes.bottomLink,
    onClick: function onClick() {
      setActiveKey();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, "\u0447\u0443\u0434\u043D\u0435\u043D\u044C\u043A\u043E"))))), __jsx("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, __jsx("div", {
    className: classes.footerItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: this
  }, __jsx("a", {
    className: classes.footerLink,
    href: "https://www.facebook.com/events/450018115541840/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }, "AstanaJS @ Facebook"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_5__["default"])(styles)(App));

/***/ })

})
//# sourceMappingURL=index.js.0725e05a28e6ee5ae1f2.hot-update.js.map