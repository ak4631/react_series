import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Learning about Redux ToolKit</h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
