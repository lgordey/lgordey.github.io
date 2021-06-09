import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';

import kundelikBridge from '../kundelik-bridge';

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

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [receivedData, setReceivedData] = useState([]);
  const [receivedError, setReceivedError] = useState([]);
  const [ errors, setErrors ] = useState([]);

  const handleMethod = async (methodName, params = []) => {
    setCalledMethods(prevArray => [...prevArray, methodName])

    console.log(`==handle ${methodName} method${params.length > 0 ? ` with params ${JSON.stringify(params)}`: ''}`);
    try {
      const data = await kundelikBridge[methodName](...params);
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
        <button onClick={() => handleMethod('getKundelikAuthToken')}>getKundelikAuthToken</button>
        <button onClick={() => handleMethod('openSettings')}>openSettings</button>
        <button onClick={() => handleMethod('getContacts')}>getContacts</button>
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
