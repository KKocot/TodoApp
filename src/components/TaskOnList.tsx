import { Link } from "react-router-dom";

export const TaskOnList = ({ item }) => {
  return (
    <li className="h-fit drop-shadow-xl flex-col items-start rounded-lg flex bg-brown color-white  p-6 text-xl w-52 gap-6">
      <h2 className="wrapword text-xl font-semibold">{item.value}</h2>
      <div className="wrapword text-sm">{item.details}</div>
      <Link className=" self-end justify-self-end" to={`/task/${item.id}`}>
        <button className=" bg-light-brown color-brown p-0.25 px-3 rounded font-semibold">
          Edit
        </button>
      </Link>
    </li>
  );
};
