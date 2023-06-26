import React, { createContext, useState, useContext } from "react";
export const StoreContext = createContext(null);

const initialState = [
  {
    todo: "brush your teeth",
    done: false,
  },
];

function StoreProvider(props) {
  const [store, setStore] = useState(initialState);

  function addTodo(item) {
    const clone = [ ...store ];
    clone.push({
      todo: item,
      done: false,
    });
    setStore(clone);
  }

  function updateTodo(index,item) {
    setStore((prevState) => {
      const clone = [ ...prevState ];
      clone[index] = item;
      return clone;
    });
  }

  function deleteTodo(index) {
    const clone = [ ...store ];
    clone.splice(index,1);
    setStore(clone);
  }

  const storeData = { store, addTodo, updateTodo, deleteTodo };

  return <StoreContext.Provider value={{ ...storeData }} {...props} />;
}

function useStoreContext() {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
