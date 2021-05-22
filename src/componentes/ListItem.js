import React from "react";

export default function ListItem(todo, inprogress, id) {
  return (
    <ul>
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            // onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <div>
          {todo.todo}
          <p>{inprogress ? "In Progress" : "Completed"}</p>
        </div>

        <button
          // disabled={todo.complete}
          // onClick={handleOnEdit}
          className="bt-font-size"
        >
          Edit
        </button>
        <button>Done</button>
      </li>
    </ul>
  );
}
