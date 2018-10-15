import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class CreateTodo extends React.Component {
	constructor(props) {
		super(props);
		this.newTodo = React.createRef();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let createNewTodo = e => {
						e.preventDefault();
						actions.addTodo(this.newTodo.current.value);
						this.newTodo.current.value = "";
					};

					return (
						<form onSubmit={createNewTodo} className="mb-5">
							<input
								className="form-control"
								type="text"
								ref={this.newTodo}
							/>
						</form>
					);
				}}
			</Context.Consumer>
		);
	}
}
