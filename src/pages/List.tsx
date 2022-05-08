import { useState } from "react";
import { useTodoContext } from "../components/TodoContext";
import { TaskOnList } from "../components/TaskOnList";
export const List = () => {
  const { items, addItem } = useTodoContext();
  const [newItem, setNewItem] = useState("");
  const Todo = items.map((item) => <TaskOnList item={item} key={item.id} />);
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      addItem(newItem, setNewItem);
    }
  };

  return (
    <div className="flex flex-col justify-center align-center gap-24 w-full mt-24 m-14">
      <h1 className="flex self-center text-3xl font-black color-brown">
        Todo App
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <input
          className="text-xl w-80 bg-brown p-2 rounded color-white"
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeypress}
          value={newItem}
          type="text"
        />
        <button
          className="text-xl bg-brown text-white  px-8 rounded font-semibold"
          onClick={() => addItem(newItem, setNewItem)}
        >
          Add
        </button>
      </div>
      <ul className="flex justify-center flex-wrap gap-16">{Todo}</ul>
    </div>
  );
};
