import { createContext } from "react";
import { useContext } from "react";

//1. createcontext 2.usecontext(Provider Drama nhi chahiye toh)
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo_msg: "Todo Msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
