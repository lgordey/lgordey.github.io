import React, { useState } from 'react'
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
    body: {
      display: 'block'
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
    name: 'Сергей Попов',
    desc: 'Санкт-Петербург, Лига А.',
    talkTitle: 'Про Lighthouse',
    talkContent: 'Lighthouse делает за нас всю грязную работу, но мы продолжаем его игнорировать. Проверку на этом инструменте должен проходить каждый сайт и приложение, так как в современном мире фронтенда становится важным не то, на чём написано приложение, а то, как быстро оно грузится и какому объему пользователей оно доступно. Lighthouse проще использовать, чем игнорировать.',
    img: serezha
  },
  {
    name: 'Антон Оленин ',
    desc: 'Нур-Султан, Aitu Dala',
    talkTitle: 'JSON:api или как фронтенд и бекенд разработчикам перестать спорить о формате api',
    talkContent: 'В докладе я расскажу:\n- как запрашивать связанные сущности без дополнительных запросов\n- фильтрация, пагинация - все проблемы уже решены\n- как писать меньше однотипного кода на клиенте, на примере redux',
    img: anton
  },
  {
    name: 'Виталий Потапов',
    desc: 'Москва, Яндекс',
    talkTitle: 'Как и зачем разрабатывать свой скилл для Алисы',
    talkContent: '- Привет, Алиса! Зачем мне делать для тебя свой навык?\n...\n- А можно как-то быстро попробовать и посмотреть, что получится?\n...\n- Окей, делаю... Какие инструменты лучше использовать? И как вообще это тестировать?\n...\n- Готово! Куда деплоить?\n...\nАлиса! Я вижу в логах, что пользователи называют мой навык нехорошими словами! Что мне делать?!\n...\n\nВсе ответы в докладе 🙂',
    img: vitalik
  },
  {
    name: 'Татьяна Новикова',
    desc: 'Нур-Султан, ЦАРКА',
    talkTitle: 'Фантастические уязвимости и места их обитания',
    talkContent: 'Коротко о jaVasCript:/*-/*`/*\`/*/*"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=alert()//>\x3e и других страшных монстрах, которых стоит остерегаться фронтенд-разработчику',
    img: tanya
  },
  {
    name: 'Андрей Смирнов',
    desc: 'Москва, IPONWEB',
    talkTitle: 'Soft Effect: исследование развития навыков',
    talkContent: 'У меня, как и у многих, есть сильное мнение, что в 2019 году разработчикам развивать soft skills важнее для успешной карьеры, чем hard skills, но мне бы хотелось это доказать необычным образом. Я приведу в пример различные статистические исследования (в том числе собственное) и проанализирую их результаты, а также расскажу, что из всего многообразия гибких навыков стоит развивать в первую очередь и как это легче всего сделать.',
    img: andrew
  },
  {
    name: 'Даурен Бекжанов',
    desc: 'Нур-Султан, BTS Digital',
    talkTitle: 'Как я познал дзен в интервьюинге',
    talkContent: 'История о том, как миддл фронтендер работу в зарубежной компании искал. Как мне назначили первое интервью и как это число перешагнуло цифру 30. Поделюсь своим опытом прохождения различных интервью (от локального стартапа до Амазона).',
    img: dauren
  },
  {
    name: 'Сакен Алимбаев',
    desc: 'Нур-Султан, EPAM Systems',
    talkTitle: 'Анализируем и оптимизируем React bundle',
    talkContent: 'Google не раз заявлял — скорость является фактором, влияющим на общую оценку сайта. Игнорировать этот факт мы не можем. Приложение, которое быстро становится доступным пользователям, должно иметь преимущество перед приложением, которое загружается несколько секунд или минут. В связи с этим, мы поговорим о том, как проанализировать свой продакшн React бандл, и разберёмся как работает code-splitting в React.',
    img: saken
  }
];

const schedule = [
  {
    time: '13:30 — 14:20',
    content: 'Регистрация'
  },
  {
    time: '14:20 — 14:30',
    content: 'Открытие мероприятия'
  },
  {
    time: '14:30 — 15:00',
    content: 'Спикер 1',
    speaker: speakers[0]
  },
  {
    time: '15:00 — 15:30',
    content: 'Спикер 2',
    speaker: speakers[6]
  },
  {
    time: '15:30 — 15:50',
    content: 'Сoffee break'
  },
  {
    time: '15:50 — 16:20',
    content: 'Спикер 3',
    speaker: speakers[1]
  },
  {
    time: '16:20 — 16:50',
    content: 'Спикер 4',
    speaker: speakers[2]
  },
  {
    time: '16:50 — 17:20',
    content: 'Спикер 4',
    speaker: speakers[5]
  },
  {
    time: '17:20 — 17:50',
    content: 'Pizza break'
  },
  {
    time: '17:50 — 18:20',
    content: 'Спикер 5',
    speaker: speakers[3]
  },
  {
    time: '18:20 — 18:50',
    content: 'Спикер 5',
    speaker: speakers[4]
  },
  {
    time: '18:50 — 19:00',
    content: 'Окончание мероприятия, афтепати'
  },
];

function App({ classes }) {
  const [activeKey, setActiveKey] = useState('0')

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
        <div className={classes.logo} onClick={() => {window.open('https://www.facebook.com/events/790754704680704/', '_blank')}}>
          <IconAstanaJSLogo />
          <div className={classes.jsLogo}>
            <IconJS />
          </div>
        </div>
        <div className={classes.astanajs} onClick={() => {window.open('https://www.facebook.com/events/790754704680704/', '_blank')}}>
          <div className={classes.astana}>Astana</div>
          <div className={classes.y2019}>2019</div>
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
            href="https://astanajs.timepad.ru/event/1093307/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.registration}
          >зарегистрироваться</a>
        </div>
      </div>
      <div className={classes.mainText}>
        Вместе мы&nbsp;делаем еще один шаг к&nbsp;становлению frontend сообщества <br/>в&nbsp;Нур-Султане.
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
              <b>16 ноября</b> митап (или конференция?) <b>AstanaJS</b> приглашает всех, кто пишет на JavaScript. А также всех, кому интересно узнать больше о frontend-разработке — бэкендеров, тестировщиков, дизайнеров, менеджеров, и студентов, которые планируют карьеру в IT.
              <div className={classes.bottomLink} onClick={() => { setActiveKey('1') }}>ясно</div>
            </Panel>
            <Panel header="Первый раз?" {...panelProps}>
              Нет! Это уже <b>4-ое</b> по счету событие <b>AstanaJS</b>!<br />
              Как это было:<br />
              - AstanaJS #1 <a className={classes.pastLink} href="https://www.facebook.com/events/304756690289447/">https://www.facebook.com/events/304756690289447/</a> <br />
              - AstanaJS #2 <a className={classes.pastLink} href="https://www.facebook.com/events/2116889328332193/">https://www.facebook.com/events/2116889328332193/</a>  <br />
              - AstanaJS #3 <a className={classes.pastLink} href="https://www.facebook.com/events/450018115541840/">https://www.facebook.com/events/450018115541840/</a>  
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
                16 ноября 2019 (суббота)
              </div>
              <div className={classes.bottomLink} onClick={() => { setActiveKey('6') }}>ага</div>
            </Panel>
            <Panel header="Как принять участие?" {...panelProps}>
              <div>
                Благодаря нашему партнеру BTS Digital участие в митапе является бесплатным. Просто зарегистрируйтесь и приходите.
              </div>
              <a 
                href="https://astanajs.timepad.ru/event/1093307/"
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
