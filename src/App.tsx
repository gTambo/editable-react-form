import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ControlView from "./components/EditableView/ControlView";

function App() {
  // const logo: string = require("./logo.svg").default;

  return (
    <div className="App" data-testid="app-wrapper">
      <header className="App-header">
        <ControlView />
      </header>
    </div>
  );
}

export default App;
