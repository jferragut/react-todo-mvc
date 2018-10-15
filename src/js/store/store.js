const getState = scope => {
	return {
		//create an object for the store state
		store: {
			list: [
				{
					todo: "Brush your teeth",
					done: false
				},
				{
					todo: "Walk the dog",
					done: false
				}
			]
		},
		//create actions that will be used
		actions: {
			addTodo: (item, element) => {
				let store = scope.state.store; //copy store into temp var
				store.list.push({
					todo: item,
					done: false
				}); //define new item and push into store copy
				scope.setState({ store }); //Set the store from the copy
			},
			deleteTodo: (index, element) => {
				let store = scope.state.store; //copy store into temp var
				store.list.splice(index, 1); //splice item out of array
				scope.setState({ store }); //Set the store
			},
			setDone: (index, element) => {
				let store = scope.state.store; //copy store into temp var
				store.list[index].done = true; //define new item and push into store copy
				scope.setState({ store }); //Set the store from the copy
			},
			unsetDone: (index, element) => {
				let store = scope.state.store; //copy store into temp var
				store.list[index].done = false; //define new item and push into store copy
				scope.setState({ store }); //Set the store from the copy
			}
		}
	};
};

export default getState;
