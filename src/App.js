import React, { useState } from "react";
import "./App.css";
import {InputRow} from './InputRow.js'
import {TodoList} from './TodoList.js'

const objects = [
	{text: "Do the dishes", done: false},
	{text: "Laundry", done: false},
	{text: "Learn some react", done: true},
	{text: "Yet another", done: false}
]

const App = () => {
	const [todoList, setTodoList] = useState(objects)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My own todos</h1>
		<InputRow />
		<TodoList todos={todoList} />
      </header>
    </div>
  );
};

export default App;
