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

const invokeMethods = ['getMe', 'getPhone', 'getContacts', 'enableNotifications', 'disableNotifications'];

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

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    // read file
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log('===============base64String');
      console.log(reader.result);
      handleMethod('shareImage', reader.result)
    };
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
      <a href="/test">To test</a><br />
      <a href="/test2">To test2</a>
      <div className={classes.btnWrapper}><span>Current url: {url}</span></div>
      <div className={classes.btnWrapper}>
        <input type="file" onChange={handleFileInput} style={{ margin: '20px 20px 0' }} />
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
