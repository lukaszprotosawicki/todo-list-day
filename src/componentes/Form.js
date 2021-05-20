import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./DataProvider";

const Form = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  // add / create daily task
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName(""); /// clear input
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <form className="form-container" autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        ref={todoInput}
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
