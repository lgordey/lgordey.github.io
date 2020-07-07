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
    border: '2px solid black',
    marginTop: 20,
    '& button:not(:first-child)': {
      marginLeft: 20
    }
  }
};

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    handleMethod('InitApps');
  }, []);

  const handleMethod = async (methodName) => {
    setCalledMethods(prevArray => [...prevArray, methodName])
    const data = await aituBridge.invoke(methodName);
    console.log('__Received__data!', data);
    setReceivedData(prevArray => [...prevArray, data])
  }

  return (
    <div className={classes.testWrapper}>
      <div className={classes.btnWrapper}>
        <button onClick={() => handleMethod('getMe')}>getMe</button>
        <button onClick={() => handleMethod('getPhone')}>getPhone</button>
      </div>
      <div style={{ marginTop: 20, display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <b style={{ marginBottom: 10 }}>Invoked methods:</b>
          {calledMethods.map((method, i) => (
            <div key={i + method}>{i+1 + ') '}{method}</div>
          ))}
        </div>
        <div style={{ width: '50%' }}>
          <b style={{ marginBottom: 10 }}>Received data:</b>
          {receivedData && receivedData.map((data, i) => (
            <div key={i + data}>{i+1 + '. '}{data}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Test);