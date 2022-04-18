import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTodoContext } from "../components/TodoContext";

export const Task = () => {
  const { items, deleteItem, editDetails } = useTodoContext();
  const { id } = useParams();
  const item = items.find((c) => c.id === +id);
  const [newDetails, setNewDetails] = useState(item.details);
  const edit = (e) => {
    setNewDetails(e.target.value);
    editDetails(+id, e.target.value);
  };
  return (
    <div className="flex flex-col gap-24 text-center justify-center text-xl w-1/2 m-24">
      <h1 className="wrapword  color-brown font-black text-3xl">
        {item.value}
      </h1>
      <textarea
        onChange={edit}
        value={newDetails}
        className=" p-4 color-white rounded-xl bg-brown w-auto h-64"
      />
      <div className=" flex-wrap flex gap-6 justify-between ">
        <Link to="/">
          <button className="px-6 bg-brown color-white p-1 rounded">
            Save
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => deleteItem(item.id)}
            className="bg-brown color-white px-6 p-1 rounded"
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};
