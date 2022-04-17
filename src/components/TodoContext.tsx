import { useState, useContext, createContext } from "react";
const todoList = [
  { value: "Wash a car", details: "ASAP", id: 1 },
  { value: "Go out with dog", details: "Morning walk", id: 2 },
  { value: "Make dinner", details: "Maybe spagetti", id: 3 },
];

export const TodoContext = createContext(undefined);

export const useTodoContext = () => useContext(TodoContext);
export const TodoProvider = ({ children }) => {
  const [items, setItems] = useState(todoList);

  const addItem = (newItem, setNewItem) => {
    if (!newItem) {
      alert("Enter an item.");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      details: "",
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };
  const editDetails = (id: number, newDetails) => {
    const array = items.map((item) => {
      if (item.id !== id) return item;
      return {
        ...item,
        details: newDetails,
      };
    });
    setItems(array);
  };
  const appData = { items, addItem, deleteItem, editDetails };
  return (
    <TodoContext.Provider value={appData}>{children}</TodoContext.Provider>
  );
};
