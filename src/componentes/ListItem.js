import React from "react";
import { firebaseTodo } from "./FirebaseConfig";

export default function ListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    firebaseTodo.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    firebaseTodo.collection("todos").delete();
  }
  return (
    <ul>
      <li>
        <label>
          <input type="checkbox" />
          {todo.name}
        </label>
        <div>
          {todo}
          <p className="in-progress">
            {inprogress ? "In Progress" : "Completed"}
          </p>
        </div>

        <button className="bt-font-size">Edit</button>
        <button onClick={toggleInProgress}>
          {inprogress ? "Done" : "UnDone"}
        </button>
        <button onClick={deleteTodo}>X</button>
      </li>
    </ul>
  );
}
