import React from "react";

const ListItem = ({ todo, id, checkComplete }) => {
  return (
    <ul>
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.complete} className="bt-font-size">
          Edit
        </button>
      </li>
    </ul>
  );
};

export default ListItem;
