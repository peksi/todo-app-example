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

	const addTodo = (todoText) => {
		const newTodo = {
			text: todoText,
			done: false
		}
		setTodoList(todoList.concat([newTodo]));
	}

  return (
    <div className="App">
      <header className="App-header">
        <h1>My own todos</h1>
		<InputRow addFunction={addTodo} />
		<TodoList todos={todoList} />
		<button onClick={
			()=> {
				setTodoList(
					[]
				)
		}}>Clear</button>
      </header>
    </div>
  );
};

export default App;
