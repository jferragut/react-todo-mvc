import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

// This entire section wraps the store
const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store
		}

		render() {
			/* When the value prop changes, component re-renders */
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
