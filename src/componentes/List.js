import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  console.log(todos);
  return (
    <ul>
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default List;
