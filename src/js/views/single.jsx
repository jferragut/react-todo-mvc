import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Single extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				{/*define this as a consumer so that we can access store*/}
				<Context.Consumer>
					{({ store }) => {
						return (
							<h1 className="display-4">
								This will show the demo element:
								{String.fromCharCode("8195") /*insert emsp*/}
								{
									store.demo[
										this.props.match.params
											.theid /*get id from url*/
									].title /*access title prop from store*/
								}
							</h1>
						);
					}}
				</Context.Consumer>
				<hr className="my-4" />
				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
