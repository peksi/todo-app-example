import React, {useState} from 'react';
import "./App.css";

const Todo = (props) => {
	const [isDone, setDone] = useState(props.done);


	return (
		<div 
			onClick={() => {
				const returnState = isDone ? false : true;
				setDone(returnState)
			}}
			className={isDone ? 'done' : '' }
		>
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