import { useState, useContext, createContext } from "react";
const todoList = [
  { value: "Wash a car", details: "task123", id: 1 },
  { value: "Go out with dog", details: "task23", id: 2 },
  { value: "Make dinner", details: "task3", id: 3 },
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
      details: undefined,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };
  const appData = { items, addItem, deleteItem };
  return (
    <TodoContext.Provider value={appData}>{children}</TodoContext.Provider>
  );
};
