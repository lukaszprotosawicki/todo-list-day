import React from "react";
// import { firebaseTodo } from "./FirebaseConfig";

const Footer = ({ id, inprogress }) => {
  // const [checkAll, setCheckAll] = useState(false);

  // /// select all
  // const handleCheckAll = () => {
  //   const newTodos = [...todos];
  //   newTodos.forEach((todo) => {
  //     todo.complete = !checkAll;
  //   });
  //   setTodos(newTodos);
  //   setCheckAll(!checkAll);
  // };

  // ///// delete task
  // const deleteTodo = () => {
  //   setTodos(newTodosComplete());
  //   setCheckAll(false);
  // };

  return (
    <>
      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          ALL
        </label>
        <p>You have to do </p>
        <button className="bt-font-size" id="delete">
          Delete
        </button>
      </div>
    </>
  );
};

export default Footer;
