import { Link, useParams } from "react-router-dom";
import { useTodoContext } from "../components/TodoContext";

export const Task = () => {
  const { items } = useTodoContext();
  const { id } = useParams();
  const item = items.find((c) => c.id === +id);
  return (
    <div className="flex flex-col gap-10 text-center justify-center text-xl w-1/2 m-7">
      <h1>{item.value}</h1>
      <span className=" m-7">123</span>
      <div className="flex gap-8 justify-center m-7">
        <Link to="/">
          <button className=" bg-yellow-500 text-white p-2 rounded">
            Back
          </button>
        </Link>
        <button className=" bg-lime-700 text-white p-2 rounded">Edit</button>
        <button className="bg-red-600 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
};
