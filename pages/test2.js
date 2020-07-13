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

  const handleSetItem = async (keyName, keyValue) => {
    setCalledMethods(prevArray => [...prevArray, `setItem(${keyName}, ${keyValue})`]);
    try {
      await aituBridge.storage.setItem(keyName, keyValue)
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleGetItem = async (keyName) => {
    setCalledMethods(prevArray => [...prevArray, `getItem(${keyName})`]);
    try {
      const str = await aituBridge.storage.getItem(keyName)
      setReceivedData(prevArray => [...prevArray, JSON.stringify(str)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleRemoveItem = async (keyName) => {
    setCalledMethods(prevArray => [...prevArray, `removeItem(${keyName})`]);
    try {
      await aituBridge.storage.removeItem(keyName)
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleKey = async (index) => {
    setCalledMethods(prevArray => [...prevArray, `key(${index})`]);
    try {
      const str = await aituBridge.storage.key(index)
      setReceivedData(prevArray => [...prevArray, JSON.stringify(str)])
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  const handleClear = async () => {
    setCalledMethods(prevArray => [...prevArray, 'clear()']);
    try {
      await aituBridge.storage.clear();
    } catch(e) {
      setReceivedError(prevArray => [...prevArray, JSON.stringify(e)])
    }
  }

  return (
    <div className={classes.testWrapper}>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleSetItem('testItem', '123-456-789')}>setItem('testItem', '123-456-789')</button>
        <button onClick={() => handleGetItem('testItem')}>getItem('testItem')</button>
        <button onClick={() => handleRemoveItem('testItem')}>removeItem('testItem')</button>
        <button onClick={() => handleKey(0)}>key(0)</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleSetItem('oneMoreTest', 'tatatatata')}>setItem('oneMoreTest', 'tatatatata')</button>
        <button onClick={() => handleGetItem('oneMoreTest')}>getItem('oneMoreTest')</button>
        <button onClick={() => handleRemoveItem('oneMoreTest')}>removeItem('oneMoreTest')</button>
        <button onClick={() => handleKey(1)}>key(1)</button>
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
