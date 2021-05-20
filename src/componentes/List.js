import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

const List = () => {
  const [todos, setTodos] = useContext(DataContext);

  /// take id, add class active
  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
        />
      ))}
    </ul>
  );
};

export default List;
