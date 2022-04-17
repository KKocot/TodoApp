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
    <div className="flex flex-col gap-10 text-center justify-center text-xl w-1/2 m-7">
      <h1 className="font-black text-2xl">{item.value}</h1>
      <textarea onChange={edit} value={newDetails} className="  w-auto h-64" />
      <div className="flex gap-8 justify-center m-7">
        <Link to="/">
          <button className=" bg-yellow-500 text-white p-2 rounded">
            Back
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={() => deleteItem(item.id)}
            className="bg-red-600 text-white p-2 rounded"
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};
