import React from "react";
import { CreateTodo } from "../component/CreateTodo.jsx";
import { CurrentTodoItem } from "../component/CurrentTodoItem.jsx";

export const Main = props => {
	return (
		<div className="container mt-5">
			<CreateTodo />
			<CurrentTodoItem />
		</div>
	);
};
