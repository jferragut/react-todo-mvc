import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class CurrentTodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="list-unstyled">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.list.map((item, index) => {
							var classList = item => {
								var classes = "todoItem";
								if (item.done == true) {
									classes += " done";
								}
								return classes;
							};

							var doneToggle = item => {
								if (item.done) {
									return (
										<input
											type="checkbox"
											value={item.todo}
											onClick={actions.unsetDone}
											checked="true"
										/>
									);
								} else {
									return (
										<input
											type="checkbox"
											value={item.todo}
											onClick={actions.setDone}
											checked="false"
										/>
									);
								}
							};

							return (
								<li
									className={classList}
									key={index}
									onClick={actions.setDone}>
									<span>{doneToggle}</span>
									{item.todo}
									<FontAwesomeIcon
										icon="trash-alt"
										className="float-right"
										onClick={actions.deleteTodo}
									/>
								</li>
							);
						});
					}}
				</Context.Consumer>
			</ul>
		);
	}
}
