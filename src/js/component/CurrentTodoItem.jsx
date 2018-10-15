import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class CurrentTodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	classList = ({ item }) => {
		let classes = "todoItem";
		if (item.done === true) {
			classes += " done";
		}
		return classes;
	};

	render() {
		return (
			<ul className="list-unstyled">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.list.map((item, index) => {
							return (
								<li
									className={this.classList}
									key={index}
									onClick={(item, index) => actions.setDone}>
									{item.todo}
									<FontAwesomeIcon icon="faTrashAlt" />
								</li>
							);
						});
					}}
				</Context.Consumer>
			</ul>
		);
	}
}
