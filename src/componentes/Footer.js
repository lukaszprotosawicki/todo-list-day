import React from "react";

const Footer = ({ todo }) => {
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

  // const ilosc = () => {
  //   firebaseTodo.collection("todos").getSize();
  //   console.log(todos.length);
  // };

  // ///// delete task
  // const deleteTodo = () => {
  //   setTodos(newTodosComplete());
  //   setCheckAll(false);
  // };

  /// select all

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
