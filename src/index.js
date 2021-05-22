import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS7VIWuYt_Jb0xhI2Q_YQ8lRWWNafFeFw",
  authDomain: "todo-list-day.firebaseapp.com",
  projectId: "todo-list-day",
  storageBucket: "todo-list-day.appspot.com",
  messagingSenderId: "733796133590",
  appId: "1:733796133590:web:1a19373809a00085803777",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
