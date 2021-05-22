import React from "react";

const Footer = () => {
  // const [checkAll, setCheckAll] = useState(false);
  // const [todos, setTodos] = useContext(DataContext);

  // /// select all
  // const handleCheckAll = () => {
  //   const newTodos = [...todos];
  //   newTodos.forEach((todo) => {
  //     todo.complete = !checkAll;
  //   });
  //   setTodos(newTodos);
  //   setCheckAll(!checkAll);
  // };

  // const newTodosComplete = () => {
  //   return todos.filter((todo) => todo.complete === false);
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
        <p>You have to do</p>
        <button className="bt-font-size" id="delete">
          Delete
        </button>
      </div>
    </>
  );
};

export default Footer;
