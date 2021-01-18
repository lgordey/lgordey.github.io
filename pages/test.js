import React, { useState } from 'react';
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

const invokeMethods = ['getMe', 'getPhone', 'getContacts', 'enableNotifications', 'disableNotifications'];

const shareParams = {
  textOnly: ['privet ya kakaoi-to straniy text ЛАЛА'],
  gif: ['Look at this magical present!', basedGif],
  jpg: ['Look at this silly upside-down cat!', basedJpg],
  jpgOnly: ['', basedJpg],
  png: ['Look at this beautiful Earth-in-space wallpaper!', basedPng],
};

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedError, setReceivedError] = useState([]);
  const [ errors, setErrors ] = useState([]);

  const handleInvokeFakeMethod = async (methodName = 'fakeMethod') => {
    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log(`==handle ${methodName} method`);
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
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('getMe')}>getMe</button>
        <button onClick={() => handleMethod('getPhone')}>getPhone</button>
        <button onClick={() => handleInvokeFakeMethod()}>fakeMethod</button>
        <button onClick={() => handleMethod('getContacts')}>getContacts</button>
        <button onClick={() => handleMethod('getGeo')}>getGeo</button>
        <button onClick={() => handleMethod('getQr')}>getQr</button>
        <button onClick={() => handleMethod('openSettings')}>openSettings</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('share', shareParams.textOnly)}>share text only</button>
        <button onClick={() => handleMethod('share', shareParams.jpg)}>share jpg</button>
        <button onClick={() => handleMethod('share', shareParams.gif)}>share gif</button>
        <button onClick={() => handleMethod('share', shareParams.png)}>share png</button>
        <button onClick={() => handleMethod('share', shareParams.jpgOnly)}>share jpg w/o caption</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('enableNotifications')}>enableNotifications</button>
        <button onClick={() => handleMethod('disableNotifications')}>disableNotifications</button>
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
