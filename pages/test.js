import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import aituBridge from '@btsd/aitu-bridge';

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

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedError, setReceivedError] = useState([]);

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
      alert(`Метод ${methodName} не поддерживается в текущей версии приложения`);
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

  const handleOpenSettingsMethod = async (methodName) => {
    if (!aituBridge.supports(methodName)) {
      alert(`Метод ${methodName} не поддерживается в текущей версии приложения`);
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
 
  return (
    <div className={classes.testWrapper}>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleInvokeMethod('GetMe')}>GetMe</button>
        <button onClick={() => handleInvokeMethod('GetPhone')}>GetPhone</button>
        <button onClick={() => handleInvokeMethod('GetAdminPassword')}>GetAdminPassword</button>
        <button onClick={() => handleInvokeMethod('GetContacts')}>GetContacts</button>
        <button onClick={() => handleGetGeoMethod('getGeo')}>aituBridge.getGeo()</button>
        <button onClick={() => handleOpenSettingsMethod('openSettings')}>openSettings</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleInvokeMethod('AllowNotifications')}>AllowNotifications</button>
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
