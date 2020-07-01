import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import aituBridge from '@btsd/aitu-bridge';

const styles = {
  testWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  }
};

function Test({ classes }) {
  const [calledMethods, setCalledMethods] = useState([]);
  const [methodName, setMethodName] = useState('');aituBridge
  useEffect(() => {
    invokeMethod('InitApps');
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
      <div style={{ marginTop: 20 }}>
        <b style={{ marginBottom: 10 }}>Invoked methods:</b>
        {calledMethods.map((method, i) => (
          <div key={i + method}>{i+1 + ') '}{method}</div>
        ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(Test);;