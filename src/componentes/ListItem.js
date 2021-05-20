import React, { useState } from "react";

const ListItem = ({ todo, id, checkComplete }) => {
  const [onEdit, setOnEdit] = useState(false);

  /// edit button onClick
  const handleOnEdit = () => {
    setOnEdit(true);
  };
  if (onEdit) {
    return (
      <ul>
        <li>
          <input
            type="text"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}

          <button
            disabled={todo.complete}
            onClick={handleOnEdit}
            className="bt-font-size"
          >
            Edit
          </button>
        </li>
      </ul>
    );
  } else {
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
          <button
            disabled={todo.complete}
            onClick={handleOnEdit}
            className="bt-font-size"
          >
            Edit
          </button>
        </li>
      </ul>
    );
  }
};

export default ListItem;
