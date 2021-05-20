import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

const Form = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");

  // add / create daily task
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName(""); /// clear input
  };
  return (
    <form className="form-container" autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="Create daily tasks.."
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLowerCase())}
      />
      <button className="bt-font-size" type="submit">
        Create
      </button>
    </form>
  );
};

export default Form;
