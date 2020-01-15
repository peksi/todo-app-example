import React from 'react';
import "./App.css";

const Todo = (props) => {
	return (
		<div className={props.done ? 'done' : '' } >
			{props.text}
		</div>
	)
}

export const TodoList = (props) => {
	return (
		<div>
			{
				props.todos.map(
					(todo, index) => {
						return( 
						<Todo 
							key={index}
							done={todo.done}
							text={todo.text}
						/>
						)
					}
				)
			}

		</div>
	)
}