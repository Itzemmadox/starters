import React from 'react'

import { useState } from 'react';

const ExuseState = () => {
  //useState react hook
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue')


  const increaseCount = () => {
    setCount(prevCount => prevCount + 1)
    setTheme("Pink")
  }

  const decreamentCount = () => {
    setCount(prevCount => prevCount - 1)
    setTheme("red")
  }


  return (
    <div className="App">
      <button onClick={decreamentCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default ExuseState