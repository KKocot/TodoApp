import { type } from "os";
import { useContext, createContext, useReducer } from "react";
import { generateId } from "../lib/idGenerator";

interface Todo {
  value: string;
  details?: string;
  id: number;
}
type State = {
  tasks: Todo[];
};
type Actions =
  | {
      type: "addTask";
      payload: Pick<Todo, "value" | "details">;
    }
  | { type: "removeTask"; payload: Pick<Todo, "id"> }
  | { type: "editTask"; payload: Required<Pick<Todo, "id" | "details">> };
const todoList: Todo[] = [
  { value: "Wash a car", details: "ASAP", id: generateId() },
  { value: "Go out with dog", details: "Morning walk", id: generateId() },
  { value: "Make dinner", details: "Maybe spagetti", id: generateId() },
];
const tasksReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "addTask": {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
            id: generateId(),
          },
        ],
      };
    }
    case "removeTask": {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    }
    case "editTask": {
      return {
        ...state,
        tasks: state.tasks.map((item: any) => {
          if (item.id !== action.payload.id) return item;
          return {
            ...item,
            details: action.payload.details,
          };
        }),
      };
    }
    default: {
      //@ts-ignore
      throw Error("Unknown action" + action.type);
    }
  }
};
export const TodoContext = createContext<
  { state: State; dispatch: React.Dispatch<Actions> } | undefined
>(undefined);
export const useTodoContext = () => useContext(TodoContext);
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: todoList });
  const appData = { state, dispatch };
  return (
    <TodoContext.Provider value={appData}>{children}</TodoContext.Provider>
  );
};
