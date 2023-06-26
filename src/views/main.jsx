import React from "react";
import { CreateTodo } from "../components/CreateTodo.jsx";
import { useStoreContext } from "../store/storeContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Main = props => {
	const { store, addTodo, updateTodo, deleteTodo } = useStoreContext();
	
	const setDone = 
		(index)=>{
			let item = {...store[index]};
			item.done = true;
			updateTodo(index,item);
		}
	
	const unsetDone = 
		(index) => {
			let item = { ...store[index] };
			item.done = false;
			updateTodo(index, item);
		}

	return (
		<div className="container mt-5">
			<CreateTodo />
			<ul className="list-unstyled">
				{store.map((item, index) => {
				return (
					<li
					className={item.done ? "todoItem done" : "todoItem"}
					key={index}
					>
					<div
						className="container"
						onClick={
						item.done
							? () => unsetDone(index)
							: () => setDone(index)
						}
					>
						<input
						type="checkbox"
						value={item.done}
						onChange={
							item.done
							? () => unsetDone(index)
							: () => setDone(index)
						}
						checked={item.done}
						/>
						<span
						className="checkmark"
						onClick={
							item.done
							? () => unsetDone(index)
							: () => setDone(index)
						}
						/>
					</div>
					<span
						className="ms-5 itemText"
						onClick={
						item.done
							? () => unsetDone(index)
							: () => setDone(index)
						}
					>
						{item.todo}
					</span>
					<FontAwesomeIcon
						icon="trash-alt"
						className="float-end"
						onClick={() => deleteTodo(index)}
						data-toggle="tooltip"
						data-placement="bottom"
						title="Delete Todo Item"
					/>
					</li>
				);
				})}
			</ul>
		</div>
	);
};
