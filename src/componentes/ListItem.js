import React from "react";

const ListItem = ({ todo, id }) => {
  return (
    <ul>
      <li>
        <label htmlFor={id}>
          <input type="checkbox" id={id} />
          {todo.name}
        </label>
        <button>Edit</button>
      </li>
    </ul>
  );
};

export default ListItem;