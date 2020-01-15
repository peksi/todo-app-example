import React from 'react';
import "./App.css";

const Todo = (props) => {
	return (
		<div className={props.done ? 'done' : '' } >
			{props.text}
		</div>
	)
}

export const TodoList = () => {
	return (
		<div>
			<Todo done={false} text="Do the dishes" />
			<Todo done={false} text="Laundry" />
			<Todo done={true} text="Learn some react" />
		</div>
	)
}