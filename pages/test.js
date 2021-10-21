import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';

import { basedGif, basedJpg, basedPng } from '../basedImages';

const styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  },
  btnWrapper: {
    padding: '0 20px 20px 0',
    border: '10px solid black',
    marginTop: 20,
    '& button, & a, & span': {
      margin: '20px 0 0 20px',
      display: 'inline-block'
    }
  }
};

const invokeMethods = ['getMe', 'getPhone', 'getContacts', 'getUserProfile', 'enableNotifications', 'disableNotifications'];

const copyToClipboardParams = ['some text'];

const commonParams = {
  userIdProd: '4e8d2806-f3c7-11e8-a5aa-0242ac15000a',
  userIdDev: '48dc41ec-0424-11e9-a03c-ce89e00e5d74'
};

const shareParams = {
  textOnly: ['privet ya kakaoi-to straniy text ЛАЛА'],
  gif: ['Look at this magical present!', basedGif],
  jpg: ['Look at this silly upside-down cat!', basedJpg],
  jpgOnly: ['', basedJpg],
  png: ['Look at this beautiful Earth-in-space wallpaper!', basedPng],
};

const vibrateParams = {
  once: [[1000]],
  march: [[
    291, 291,
    291, 291,
    291, 291,
    291, 291,
    145, 146, 145, 146,
    291, 291,
    145, 146, 145, 728,

    291, 291,
    291, 291,
    291, 291,
    291, 291,
    145, 146, 145, 146,
    291, 291,
    145, 146, 145, 146
  ]],
};

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedError, setReceivedError] = useState([]);
  const [ errors, setErrors ] = useState([]);
  const [url, setUrl] = useState('loading...');
  const [aituBridge, setAituBridge] = useState();

  useEffect(() => {
    setUrl(window.location.href);

    window.AITU_ORIGIN = 'http://localhost:3000';
    setAituBridge(require('@btsd/aitu-bridge').default);
  }, []);

  const setShakeHandlerParams = {
    log: [() => setReceivedData(prevArray => [...prevArray, 'Shaken'])],
    off: [null],
  };

  const handleInvokeFakeMethod = async (methodName = 'fakeMethod') => {
    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log(`===handle ${methodName} method`);
    try {
      const data = await aituBridge.invoke(methodName);
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      console.error(e);
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleMethod = async (methodName, params = []) => {
    if (!invokeMethods.includes(methodName) && !aituBridge.supports(methodName)) {
      setErrors(prevArray => [...prevArray, `Метод "${methodName}" не поддерживается в текущей версии приложения`]);
      return;
    }
    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log(`==handle ${methodName} method${params.length > 0 ? ` with params ${JSON.stringify(params)}`: ''}`);
    try {
      const data = await aituBridge[methodName](...params);
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      console.error(e);
      const errorText = e instanceof Error ? `${e.name}: ${e.message}` : JSON.stringify(e);
      setReceivedError(prevArray => [...prevArray, errorText])
    }
  }

  return (
    <div className={classes.testWrapper}>
      <a href="/test2">To test2</a><br />
      <a href="/test-share">To test share</a>
      <div className={classes.btnWrapper}><span>Current url: {url}</span></div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('getMe')}>getMe</button>
        <button onClick={() => handleMethod('getPhone')}>getPhone</button>
        <button onClick={() => handleInvokeFakeMethod()}>fakeMethod</button>
        <button onClick={() => handleMethod('getContacts')}>getContacts</button>
        <button onClick={() => handleMethod('getGeo')}>getGeo</button>
        <button onClick={() => handleMethod('getQr')}>getQr</button>
        <button onClick={() => handleMethod('getSMSCode')}>getSMSCode</button>
        <button onClick={() => handleMethod('getUserProfile', [{ id: commonParams.userIdProd }])}>getUserProfile (prod)</button>
        <button onClick={() => handleMethod('getUserProfile', [{ id: commonParams.userIdDev }])}>getUserProfile (dev)</button>
        <button onClick={() => handleMethod('openSettings')}>openSettings</button>
        <button onClick={() => handleMethod('selectContact')}>selectContact</button>
        <button onClick={() => handleMethod('setTitle', 'text for title')}>setTitle</button>
        <button onClick={() => handleMethod('closeApplication')}>closeApplication</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('copyToClipboard', copyToClipboardParams)}>copyToClipboard</button>
        <button onClick={() => handleMethod('share', shareParams.textOnly)}>share text</button>
        <button onClick={() => handleMethod('shareImage', shareParams.jpg)}>shareImage jpg</button>
        <button onClick={() => handleMethod('shareImage', shareParams.gif)}>shareImage gif</button>
        <button onClick={() => handleMethod('shareImage', shareParams.png)}>shareImage png</button>
        <button onClick={() => handleMethod('shareImage', shareParams.jpgOnly)}>shareImage jpg w/o caption</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('vibrate', vibrateParams.once)}>vibrate once</button>
        <button onClick={() => handleMethod('vibrate', vibrateParams.march)}>vibrate march</button>
        <button onClick={() => handleMethod('setShakeHandler', setShakeHandlerParams.log)}>enable log on shake</button>
        <button onClick={() => handleMethod('setShakeHandler', setShakeHandlerParams.off)}>disable log on shake</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('enableNotifications')}>enableNotifications</button>
        <button onClick={() => handleMethod('disableNotifications')}>disableNotifications</button>
      </div>
      <div className={classes.btnWrapper}>
        <a href="/javascriptquestions.pdf">PDF Link</a>
        <a href="https://i2.app.link/rNwc1ePWheb?promocode=ABCDE">Contest mini-app</a>
        <a href="https://i2.app.link/open_chat_with?user_id=a92a86e7-e677-11e8-89fc-5a93b0f4e028">DeepLink Open Chat</a>
      </div>
      <div style={{ marginTop: 20 }} >
        <b>Errors:</b>
        {errors.map((errMessage, i) => (
            <div key={i + errMessage}>{errMessage}</div>
          ))}
      </div>
      <div style={{ marginTop: 20, display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <b style={{ marginBottom: 10 }}>Invoked methods:</b>
          {calledMethods.map((method, i) => {
            return (
              <div key={i + method}>{i+1 + ') '}{method}</div>
            );
          })}
        </div>
        <div style={{ width: '30%' }}>
          <b style={{ marginBottom: 10 }}>Received data:</b>
          {receivedData && receivedData.map((data, i) => {
            return (
              <div key={i + data}>{i+1 + '. '}{data}</div>
            )
          })}
        </div>
        <div style={{ width: '30%' }}>
          <b style={{ marginBottom: 10 }}>Received errors:</b>
          {receivedError && receivedError.map((error, i) => {
            return (
              <div key={i + error}>{i+1 + '. '}{error}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Test);
