import React from 'react'
import withStyles from 'react-jss'

import { IconAstanaJSLogo, IconBTSDLogo } from './icons'

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

const footerItems = [
  'astanaJS',
  'astanaJS',
  'astanaJS',
  'astanaJS',
  'astanaJS',
  'astanaJS',
]

const styles = {
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
    extend: headerBlock
  },
  registration: {
    fontFamily: family,
    fontSize: 28,
    display: 'block',
    textAlign: 'center',
    border: `1px solid ${black}`,
    boxSizing: 'border-box',
    borderRadius: 6,
    width: 381,
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
  },
  astanajs: {
    width: 560,
    extend: headerBlock
  },
  powered: {
    width: 130,
    position: 'relative',
    flexShrink: 0,
    extend: headerBlock
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
  mainText: {
    fontFamily: family,
    fontSize: 50,
    lineHeight: '50px',
    marginTop: 45
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: family,
    fontSize: 16,
    lineHeight: '16px',
    padding: '40px 0'
  },
  footerItem: {},
  [`@media (max-width: ${maxWidth}px)`]: {
    header: {
      margin: {
        top: 10
      }
    },
    app: {
      padding: 20,
    },
    registrationWrapper: {
      display: 'none'
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

function App({ classes }) {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <IconAstanaJSLogo />
        </div>
        <div className={classes.astanajs}>
          <div className={classes.astana}>Astana</div>
          <div className={classes.y2019}>2019</div>
          <div className={classes.js}>JS</div>
        </div>
        <div className={classes.powered}>
          <div className={classes.poweredText}>
            Powered by
          </div>
          <div className={classes.btsdWrapper}>
            <IconBTSDLogo />
          </div>
        </div>
        <div className={classes.registrationWrapper}>
          <a href="#/" className={classes.registration}>зарегистрироваться</a>
        </div>
      </div>
      <div className={classes.mainText}>
        вместе мы делаем первый шаг к становлению сообщества frontend-разработки в астане
      </div>
      <div className="Main">
        <div>
          <div className="Title">для кого</div>
          <div>
            Митап AstanaJS 2019 приглашает в гости всех, кто пишет на JavaScript. А также всех, кому интересено узнать больше о frontend-разработке — бэкендеров, тестировщиков, дизайнеров, менеджеров, и судентов, котоыре планируют карьеру в IT.
          </div>
        </div>
        <div>
          <div className="Title">докладчики</div>
          <div>
            <div>Рома</div>
            <div>Андрей</div>
            <div>Илья</div>
            <div>Паша</div>
            <div>?</div>
          </div>
        </div>
        <div>
          <div className="Title">где</div>
          <div>
            Митап пройдет в помещении Astana Hub в районе экспо. Просто доберитесь до гигантского шара, найдите у него пупок и идите на север от этого места до следующего здания.

            До гигантского шара в раоне экспо можно добраться на автобусах 04587, 2е04г34, 2ге4 или на такси.
          </div>
        </div>
        <div>
          <div className="Title">участие</div>
          <div>
            Благодаря нашим партнерам участие в митапе бесплатно для всех желающих. Просто зарегистрируйтесь и приходите.
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        {
          footerItems.map(item => <div className={classes.footerItem}>astanaJS</div>)
        }
      </div>
    </div>
  )
}

export default withStyles(styles)(App)
