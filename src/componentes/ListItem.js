import React from "react";
import { firebaseTodo } from "./FirebaseConfig";

export default function ListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    firebaseTodo.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    firebaseTodo.collection("todos").doc(id).delete();
  }

  return (
    <ul>
      <li>
        <div style={{ display: "flex" }}>
          <label>
            sadas {console.log(!inprogress)}
            <input type="checkbox" />
            {todo.name}
          </label>
          <div style={{ display: "block" }}>
            {todo}
            <p className="in-progress">
              {inprogress ? "In Progress" : "Completed"}
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ cursor: "pointer" }} className="bt-font-size">
            ⚙️
          </div>
          <div style={{ cursor: "pointer" }} onClick={toggleInProgress}>
            {inprogress ? "✔️" : "❌"}
          </div>
          <div style={{ cursor: "pointer" }} onClick={deleteTodo}>
            🗑️
          </div>
        </div>
      </li>
    </ul>
  );
}
