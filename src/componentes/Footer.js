import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  /// select all
  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  ///// delete task
  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h2> Congratulations! Nothings To Do</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            ALL
          </label>
          <p>You have {newTodosComplete().length} to do</p>
          <button onClick={deleteTodo} className="bt-font-size" id="delete">
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
