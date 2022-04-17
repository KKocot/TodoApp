import { useState } from "react";
import { Link } from "react-router-dom";
import { useTodoContext } from "../components/TodoContext";
export const List = () => {
  const { items, addItem, deleteItem } = useTodoContext();
  const [newItem, setNewItem] = useState("");
  const Todo = items.map((item) => (
    <li
      className=" rounded-md flex bg-brown text-white items-center p-2 text-xl w-52 gap-10 "
      key={item.id}
    >
      <Link to={`/task/${item.id}`}>
        <span>{item.value}</span>
      </Link>
      <button
        className=" bg-light-brown color-brown p-2 rounded font-semibold"
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="flex flex-col justify-center align-center gap-24 w-full mt-36 m-14">
      <h1 className="flex self-center text-3xl font-black color-brown">
        Todo App
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <input
          className="text-xl w-80 bg-brown p-2 rounded text-white"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text"
        />
        <button
          className="text-xl bg-brown text-white p-2 rounded"
          onClick={() => addItem(newItem, setNewItem)}
        >
          Add
        </button>
      </div>
      <ul className="flex justify-center flex-wrap gap-16">{Todo}</ul>
    </div>
  );
};
