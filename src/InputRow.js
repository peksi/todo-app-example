import React from 'react';

export const InputRow = (props)=> {
	const onSubmit = () => {
		console.log('button is pressed')
		const inputValue = document.getElementById('todoInput').value;
		props.addFunction(inputValue)
	}

	return (
		<div className="inputContainer">
			<input id="todoInput" type="text" />
			<button
				onClick={()=> {onSubmit()}}
			>Submit</button>
		</div>
	)
}