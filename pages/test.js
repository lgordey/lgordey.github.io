import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import aituBridge from '@btsd/aitu-bridge';

const eventType = 'aituEvents';

const styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  }
};

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [methodName, setMethodName] = useState('');
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    invokeMethod('InitApps');

    window.addEventListener(eventType, (event) => {
      const evStr = JSON.stringify(event.detail);
      console.log('eventType', eventType);
      console.log('event', event);
      setReceivedData(prevArray => [...prevArray, evStr])
    });
  }, []);

  const handleChange = (event) => {
    setMethodName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    invokeMethod(methodName);
  }

  const invokeMethod = (name) => {
    aituBridge.invoke(name);
    setCalledMethods(prevArray => [...prevArray, name])
    setMethodName('');
  }

  return (
    <div className={classes.testWrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          Method name:
          <input type="text" name="method-name" value={methodName} onChange={handleChange} />
        </label>
        <input type="submit" value="Invoke method" />
      </form>
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

export default withStyles(styles)(Test);;