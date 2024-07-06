import React from 'react'
import ExuseState from './Components/ExuseState';
import ExuseEffect from './Components/ExuseEffect';
import ExuseMemo from './Components/ExuseMemo';
import ExuseRef from './Components/ExuseRef';

function App() {
  return (
    <div className="App">
      <ExuseState />
      <ExuseEffect />
      <ExuseMemo />
      <ExuseRef />
    </div>
  );
}

export default App;
