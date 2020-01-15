import React from "react";
import "./App.css";
import {InputRow} from './InputRow.js'
import {TodoList} from './TodoList.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My own todos</h1>
		<InputRow />
		<TodoList />
      </header>
    </div>
  );
};

export default App;
