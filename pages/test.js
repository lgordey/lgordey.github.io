import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import aituBridge from '@btsd/aitu-bridge';

import { basedGif, basedJpg, basedPng } from '../basedImages';

const styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  },
  btnWrapper: {
    padding: 20,
    border: '10px solid black',
    marginTop: 20,
    '& button:not(:first-child)': {
      marginLeft: 20
    }
  }
};

const shareTestData = {
  textOnly: { text: 'privet ya kakaoi-to straniy text ЛАЛА' },
  gif: { text: 'Look at this magical present!', media: basedGif },
  jpg: { text: 'Look at this silly upside-down cat!', media: basedJpg },
  jpgOnly: { media: basedJpg },
  png: { text: 'Look at this beautiful Earth-in-space wallpaper!', media: basedPng },
};

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedError, setReceivedError] = useState([]);
  const [ errors, setErrors ] = useState([]);

  const handleInvokeMethod = async (methodName) => {
    setCalledMethods(prevArray => [...prevArray, methodName])
    try {
      const data = await aituBridge.invoke(methodName);
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleGetGeoMethod = async (methodName) => {
    if (!aituBridge.supports(methodName)) {
      setErrors(prevArray => [...prevArray, `Метод "${methodName}" не поддерживается в текущей версии приложения`]);
      return;
    }

    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log('==handleGetGeoMethod');
    try {
      const data = await aituBridge.getGeo();
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleGetQrMethod = async (methodName) => {
    if (!aituBridge.supports(methodName)) {
      setErrors(prevArray => [...prevArray, `Метод "${methodName}" не поддерживается в текущей версии приложения`]);
      return;
    }

    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log('==handleGetQrMethod');
    try {
      const data = await aituBridge.getQr();
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleOpenSettingsMethod = async (methodName) => {
    if (!aituBridge.supports(methodName)) {
      setErrors(prevArray => [...prevArray, `Метод "${methodName}" не поддерживается в текущей версии приложения`]);
      return;
    }

    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log('==handleOpenSettingsMethod');
    try {
      const data = await aituBridge.openSettings();
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleShareMethod = async (methodName, { text, media }) => {
    if (!aituBridge.supports(methodName)) {
      setErrors(prevArray => [...prevArray, `Метод "${methodName}" не поддерживается в текущей версии приложения`]);
      return;
    }

    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log('==handleShareMethod');
    try {
      const data = await aituBridge.share(text, media);
      setReceivedData(prevArray => [...prevArray, JSON.stringify(data)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  return (
    <div className={classes.testWrapper}>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleInvokeMethod('GetMe')}>GetMe</button>
        <button onClick={() => handleInvokeMethod('GetPhone')}>GetPhone</button>
        <button onClick={() => handleInvokeMethod('GetAdminPassword')}>GetAdminPassword</button>
        <button onClick={() => handleInvokeMethod('GetContacts')}>GetContacts</button>
        <button onClick={() => handleGetGeoMethod('getGeo')}>aituBridge.getGeo()</button>
        <button onClick={() => handleGetQrMethod('getQr')}>aituBridge.getQr()</button>
        <button onClick={() => handleOpenSettingsMethod('openSettings')}>openSettings</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleShareMethod('share', shareTestData.textOnly)}>share text only</button>
        <button onClick={() => handleShareMethod('share', shareTestData.jpg)}>share jpg</button>
        <button onClick={() => handleShareMethod('share', shareTestData.gif)}>share gif</button>
        <button onClick={() => handleShareMethod('share', shareTestData.png)}>share png</button>
        <button onClick={() => handleShareMethod('share', shareTestData.jpgOnly)}>share jpg w/o caption</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleInvokeMethod('AllowNotifications')}>AllowNotifications</button>
      </div>
      <div className={classes.btnWrapper}>
        <a href="/javascriptquestions.pdf">PDF Link</a>
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
