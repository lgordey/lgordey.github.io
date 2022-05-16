import React from 'react';
import Head from 'next/head';
import withStyles from 'react-jss';
import '../components/index.css';

import { IconAstanaJSLogo, IconBTSDLogo, IconJS } from '../icons'

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
    width: '100%',
    margin: '0 20px',
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
    marginBottom: 61,
    '& a': {
      color: '#000',
      '&:hover': {
        textDecoration: 'none',
      }
    }
  },
  descrText: {
    fontSize: 26,
    '& li': {
      marginBottom: 24
    }
  },
  linkForm: {
    fontSize: 26,
    '& a': {
      color: '#000',
      '&:hover': {
        textDecoration: 'none',
      }
    }
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

function CFP({ classes }) {
  return (
    <div className={classes.app}>
      <Head>
        <title>AstanaJS</title>
      </Head>
      <div className={classes.header}>
        <div className={classes.logo} onClick={() => {window.location.href = 'https://astanajs.kz/'}}>
          <IconAstanaJSLogo />
          <div className={classes.jsLogo}>
            <IconJS />
          </div>
        </div>
        <div className={classes.astanajs} onClick={() => {window.location.href = 'https://astanajs.kz/'}}>
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
      </div>
      <div className={classes.mainText}>
        Call for Papers - 🚀 <a href="https://forms.gle/3i4GNLEigSY6wArF6" target="_blank" rel="noopener noreferrer">Подать доклад</a> 🚀
      </div>
      <div className="Main">
        <h1>Для спикеров</h1><br/>
        <div className={classes.descrText}>
          Друзья!<br/><br/>
          Мы хотим попробовать в самое ближайшее время (конец мая – начало июня) провести оффлайн митап<br/>
          <ul>
            <li><b>Формат:</b><br/>доклад ~20 мин + 5 минут на вопросы-ответы</li>
            <li><b>Темы:</b><br/>про фронтенд и все что рядом - фреймворки, библиотекии, процессы, сообщества, опыт и тд</li>
            <li><b>Площадка:</b><br/>место еще в процессе поиска, где-то в Астане</li>
            <li><b>Дата:</b><br/>конец мая - начало июня, ориентировочно это будет вечер буднего дня, послерабочий формат</li>
          </ul><br/>
        </div>
        <div className={classes.linkForm}>🚀 <a href="https://forms.gle/3i4GNLEigSY6wArF6" target="_blank" rel="noopener noreferrer">Подать заявку на доклад</a> 🚀</div>
      </div>
      <div className={classes.footer}>
        <div className={classes.footerItem}>
          <a 
            className={classes.footerLink}
            href="/"
            rel="noopener noreferrer"
          >
            AstanaJS @ 2022
          </a>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(CFP);
