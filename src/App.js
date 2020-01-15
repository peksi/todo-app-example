import React from "react";
import "./App.css";
import {InputRow} from './InputRow.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Todo app</h1>
		<InputRow />
      </header>
    </div>
  );
};

export default App;
