import React from "react";
import { useStoreContext } from "../store/storeContext.js";

export const CreateTodo = () => {
	const { store, addTodo, updateTodo, deleteTodo } = useStoreContext();
	const newTodo = React.createRef();

	const createNewTodo = e => {
		e.preventDefault();
		addTodo(newTodo.current.value);
		newTodo.current.value = "";
	};

	return (
		<div>
			<form onSubmit={createNewTodo} className="mb-5">
				<input className="form-control" type="text" ref={newTodo} />
			</form>
		</div>
	);
};
