import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import '../components/index.css';
import withStyles from 'react-jss'
import Collapse, { Panel } from 'rc-collapse'
import 'rc-collapse/assets/index.css'

import { IconAstanaJSLogo, IconBTSDLogo, IconJS } from '../icons'

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
const speaker4 = '/speaker4.png';

const map = '/map.png';

const black = '#111111'
const yellow = '#FFD222'

const family = 'SuisseBook'
const maxWidth = 1221

const headerBlock = {
  height: 60,
  boxSizing: 'border-box',
  borderRight: `1px solid ${black}`,
  borderBottom: `1px solid ${black}`
}

const buttonBase = {
  fontFamily: family,
  fontSize: 28,
  display: 'block',
  textAlign: 'center',
  border: `1px solid ${black}`,
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
}

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
    color: `${black}!important`,
    '& + div': {
      background: yellow,
      color: `${black}!important`,
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
    borderBottom: `1px solid ${black}!important`,
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      height: 16,
      width: 17,
      right: 8,
      bottom: 24,
      background: `url(${arrow})`,
      position: 'absolute',
      transition: 'all 0.5s ease',
    },
    '&.rc-collapse-item-active:after': {
      transform: 'rotate(180deg)',
    },
    '&:hover .rc-collapse-header': {
      color: '#464646!important'
    },
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
    borderRight: `1px solid ${black}`,
    borderBottom: `1px solid ${black}`,
    marginTop: 20,
    marginBottom: 30,
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
    borderBottom: `1px solid rgba(17, 17, 17, .3)`,
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
    justifyContent: 'space-between',
  },
  map: {
    width: 779,
    height: 400,
    flexShrink: 0,
    backgroundImage: `url(${map})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: yellow,
    backgroundBlendMode: 'multiply',
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
  [`@media (max-width: ${maxWidth}px)`]: {
    header: {
      margin: {
        top: 10
      }
    },
    app: {
      padding: 20,
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
        bottom: 13,
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
      width: '100%',
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
}

const speakers = [
  {
    name: 'Алексей Какоулин',
    desc: 'Алматы, InDriver',
    talkTitle: 'Дизайн-система inDriver',
    talkContent: 'Ежедневно мобильными приложениями inDriver пользуются миллионы людей в 40+ странах.\n\nЧтобы обеспечить высокий уровень пользовательского опыта на всех платформах мы развиваем дизайн-систему, о которой расскажет iOS engineer inDriver Алексей Какоулин.\n\nКакие проблемы решает дизайн-система, из каких компонентов состоит, как организована её разработка и какое отношение всё это имеет к самому холодному месту на планете Земля вы узнаете на митапе в Астане.',
    img: speaker3
  },
  {
    name: 'Александр Щербаков',
    desc: 'Нур-Султан, BTS Digital',
    talkTitle: 'Face Detection на СКУД-терминале',
    talkContent: 'Web-технологии давно заняли огромную нишу в сфере enterprise-приложений. Можно любить или не любить заниматься web-разработкой, но остается только признать, что это эффективно.\n\nБуквально в несколько строк кода возможно подключение artificial intelligence технологий, без установки дополнительного программного обеспечения или расширений для браузера.\n\nКак использование голой OS и браузера помогло создать hardware-решение для системы контроля управления доступом в своем докладе постарается рассказать Александр Щербаков.',
    img: speaker1
  },
  {
    name: 'Мусабек Коков',
    desc: 'Нальчик, Farzoom',
    talkTitle: 'Погоня за технологиями или как ничего не сделать',
    talkContent: 'Многие считают, что хороший продукт - это набор современных технологических стеков и модных подходов в разработке.\n\n\При этом у бизнеса зачастую свои цели, не требующие сложных технических решений.\n\nВ своём докладе Мусабек Коков постарается раскрыть, почему важно выбирать оптимальные инструменты для каждого конкретного бизнес кейса.',
    img: speaker2
  },
  {
    name: 'Надир Нурлыбеков',
    desc: 'Нур-Султан, Kazdream',
    talkTitle: 'TBD...',
    talkContent: 'TBD...',
    img: speaker4
  }
];

const schedule = [
  {
    time: '18:00 — 18:20',
    content: 'Регистрация'
  },
  {
    time: '18:20 — 18:30',
    content: 'Открытие мероприятия'
  },
  {
    time: '18:30 — 19:00',
    content: 'Спикер 1',
    speaker: speakers[0]
  },
  {
    time: '19:00 — 19:30',
    content: 'Спикер 2',
    speaker: speakers[1]
  },
  {
    time: '19:30 — 19:50',
    content: 'Сoffee break'
  },
  {
    time: '19:50 — 20:20',
    content: 'Спикер 3',
    speaker: speakers[2]
  },
  {
    time: '20:20 — 20:50',
    content: 'Спикер 4',
    speaker: speakers[3]
  },
  {
    time: '20:50 — 21:00',
    content: 'Окончание мероприятия, афтепати'
  },
];

function App({ classes }) {
  const [activeKey, setActiveKey] = useState('0')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'UA-142482372-1', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      })
    }
  }, [])

  const panelProps = {
    headerClass: classes.headerPanel,
    className: classes.panel,
    showArrow: false
  }

  return (
    <div className={classes.app}>
      <Head>
        <title>AstanaJS</title>
      </Head>
      <div className={classes.header}>
        <div className={classes.logo}>
          <IconAstanaJSLogo />
          <div className={classes.jsLogo}>
            <IconJS />
          </div>
        </div>
        <div className={classes.astanajs}>
          <div className={classes.astana}>Astana</div>
          <div className={classes.y2019}>2022</div>
          <div className={classes.jsLogo}>
            <IconJS />
          </div>
        </div>
        <div className={classes.powered} onClick={() => {window.open('https://btsdigital.kz', '_blank')}}>
          <div className={classes.poweredText}>
            Powered by
          </div>
          <div className={classes.btsdWrapper}>
            <IconBTSDLogo />
          </div>
        </div>
        <div className={classes.registrationWrapper}>
          <a 
            href="https://forms.gle/3m1jeprW16ymiG9V8"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.registration}
          >зарегистрироваться</a>
        </div>
      </div>
      <div className={classes.registrationMobileWrapper}>
        <a
          href="https://forms.gle/3m1jeprW16ymiG9V8"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.registration}
        >зарегистрироваться</a>
      </div>
      <div className={classes.mainText}>
        Вместе мы&nbsp;делаем еще один шаг к&nbsp;становлению frontend сообщества <br/>в&nbsp;Нур-Султане.<br /><br />
        8 июня<br />18:00<br />Astana Hub
      </div>
      <div className="Main">
        <div>
          <Collapse
            className={classes.collapse}
            accordion={true}
            activeKey={activeKey}
            onChange={activeKey => {
              setActiveKey(activeKey)
            }}
          >
            <Panel header="Для кого?" {...panelProps}>
              <b>8 июня</b> митап <b>AstanaJS</b> приглашает всех, кто пишет на JavaScript. А также всех, кому интересно узнать больше о frontend-разработке — бэкендеров, тестировщиков, дизайнеров, менеджеров, и студентов, которые планируют карьеру в IT.
              <div className={classes.bottomLink} onClick={() => { setActiveKey('1') }}>ясно</div>
            </Panel>
            <Panel header="Первый раз?" {...panelProps}>
              Нет! Это уже <b>5-ое</b> по счету событие <b>AstanaJS</b>!<br />
              Как это было:<br />
              - <a target="_blank" className={classes.pastLink} href="https://www.facebook.com/events/304756690289447/">AstanaJS #1</a> <br />
              - <a target="_blank" className={classes.pastLink} href="https://www.facebook.com/events/2116889328332193/">AstanaJS #2 </a>  <br />
              - <a target="_blank" className={classes.pastLink} href="https://www.facebook.com/events/450018115541840/">AstanaJS #3 </a> <br />
              - <a target="_blank" className={classes.pastLink} href="/2019">AstanaJS #4 </a>  
              <div className={classes.bottomLink} onClick={() => { setActiveKey('2') }}>ясно</div>
            </Panel>
            <Panel header="Кто в этот раз спикеры?" {...panelProps}>
              <div className={classes.speakers}>
                {
                  speakers.map(({ img, name, desc }) => {
                    return (
                      <div className={classes.speaker} key={name}>
                        <div className={classes.outerImage}>
                          <div style={
                            img ? { backgroundImage: `url(${img})` } : { background: yellow }
                          } className={classes.speakerImage} />
                        </div>
                        <div className={classes.speakerText}>
                          <div className={classes.speakerName}>{name}</div>
                          <div className={classes.speakerDesc}>{desc}</div> 
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className={classes.bottomLink} onClick={() => { setActiveKey('3') }}>понял</div>
            </Panel>
            <Panel header="Какое расписание?" {...panelProps}>
              <div className={classes.schedule}>
                {
                  schedule.map(({ time, content, speaker }) => {
                    return (
                      <div className={classes.scheduleItem} key={time}>
                        <div className={classes.scheduleTime}>{time}</div>
                        {
                          speaker && (
                            <div className={classes.scheduleSpeaker}>
                              <div>{speaker.name}</div>
                              <div className={classes.scheduleSpeakerImage}>
                                <div style={
                                  speaker.img ? { backgroundImage: `url(${speaker.img})` } : { background: yellow }
                                } className={classes.speakerImage} />
                              </div>
                            </div>
                          )
                        }
                        {
                          speaker ? (
                            <div className={classes.scheduleSpearkerWrapper}>
                              <div className={classes.scheduleContent}>{speaker.talkTitle}</div>
                              <div className={classes.scheduleTalkContent}>{speaker.talkContent}</div>
                            </div>
                          ) : <div className={classes.scheduleContent}>{content}</div>
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className={classes.bottomLink} onClick={() => { setActiveKey('4') }}>ок-ок</div>
            </Panel>
            <Panel header="Где?" {...panelProps}>
              <div className={classes.where}>
                <div className={classes.map} />
                <div className={classes.place}>
                  <div className={classes.placeName}>Аstana Hub</div>
                  <div className={classes.placeDesc}>
                    Митап пройдет на первом этаже международного технопарка IT-стартапов  Astana Hub в районе Экспо.<br />
                    Точный адрес: г. Нур-Султан, Мәңгілік Ел проспект, С4.6
                    <br /><br />2gis: <a href="https://go.2gis.com/1a5of" target="_blank" rel="noopener noreferrer">https://go.2gis.com/1a5of</a>
                  </div>
                </div>
              </div>
              <div className={classes.bottomLink} onClick={() => { setActiveKey('5') }}>годится</div>
            </Panel>
            <Panel header="Когда?" {...panelProps}>
              <div>
                8 июня 2022 (среда) в 18:00
              </div>
              <div className={classes.bottomLink} onClick={() => { setActiveKey('6') }}>ага</div>
            </Panel>
            <Panel header="Как принять участие?" {...panelProps}>
              <div>
                Благодаря нашему партнеру BTS Digital участие в митапе является бесплатным. Просто зарегистрируйтесь и приходите.
              </div>
              <a 
                href="https://forms.gle/3m1jeprW16ymiG9V8"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.participate}
              >я в деле, участвую!</a>
              <div className={classes.bottomLink} onClick={() => { setActiveKey() }}>чудненько</div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.footerItem}>
          <a 
            className={classes.footerLink}
            href="https://www.facebook.com/events/790754704680704/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AstanaJS @ Facebook
          </a>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(App);
