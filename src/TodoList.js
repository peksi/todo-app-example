import React from 'react';
import "./App.css";

const Todo = (props) => {
	return (
		<div className={props.done ? 'done' : '' } >
			{props.text}
		</div>
	)
}

const objects = [
	{text: "Do the dishes", done: false},
	{text: "Laundry", done: false},
	{text: "Learn some react", done: true},
	{text: "Yet another", done: false}
]

export const TodoList = () => {
	return (
		<div>
			{
				objects.map(
					todo => {
						return( 
						<Todo 
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