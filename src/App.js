import React, { useEffect, useState } from "react";
import { firebaseTodo } from "./componentes/FirebaseConfig.js";
import firebase from "firebase";
import ListItem from "./componentes/ListItem";
import Footer from "./componentes/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    firebaseTodo.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  // add / create daily task
  const addTodo = (e) => {
    e.preventDefault();
    firebaseTodo.collection("todos").add({
      inprogress: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  };

  return (
    <div className="App">
      <div className="container-bg">
        <h1>What's the Plan for Today</h1>

        <form action="">
          <input
            type="text"
            name="todos"
            id="todos"
            required
            placeholder="Create daily tasks.."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />

          <button onClick={addTodo} className="bt-font-size" type="submit">
            Create
          </button>
        </form>
        {todos.map((todo) => (
          <ListItem
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id}
          />
        ))}

        <Footer />
      </div>
    </div>
  );
}

export default App;
