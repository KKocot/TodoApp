import { useState } from "react";
import { Link } from "react-router-dom";
import { useTodoContext } from "../components/TodoContext";
export const List = () => {
  const { items, addItem, deleteItem } = useTodoContext();
  const [newItem, setNewItem] = useState("");
  const Todo = items.map((item) => (
    <li
      className="flex justify-center items-center p-2 text-xl gap-10 "
      key={item.id}
    >
      <Link to={`/task/${item.id}`}>
        <span>{item.value}</span>
      </Link>
      <button
        className=" bg-red-600 text-white p-2 rounded"
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex gap-10 justify-center">
        <input
          className="text-xl  p-2"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text"
        />
        <button
          className="text-xl bg-lime-700 text-white p-2 rounded"
          onClick={() => addItem(newItem, setNewItem)}
        >
          Add Task
        </button>
      </div>
      <ul>{Todo}</ul>
    </div>
  );
};
