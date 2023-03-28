import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/EditableView';

function App() {

  const defaultText = 'Edit src/App.jsx and save to reload.';
  const logo: string = require("./logo.svg").default;
  const [text, setText] = useState(defaultText);

  
  return (
    <div className="App">
      <HelloWorld />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <p className='App-text'>{text}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
