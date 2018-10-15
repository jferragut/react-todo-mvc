import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { CreateTodo } from "../component/CreateTodo.jsx";
import { CurrentTodoItem } from "../component/CurrentTodoItem.jsx";

export class Main extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<CreateTodo />
				<Context.Consumer>
					{({ store, actions }) => {
						return <CurrentTodoItem />;
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Main.propTypes = {};
