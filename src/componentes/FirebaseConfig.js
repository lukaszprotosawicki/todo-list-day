import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAS7VIWuYt_Jb0xhI2Q_YQ8lRWWNafFeFw",
  authDomain: "todo-list-day.firebaseapp.com",
  projectId: "todo-list-day",
  storageBucket: "todo-list-day.appspot.com",
  messagingSenderId: "733796133590",
  appId: "1:733796133590:web:1a19373809a00085803777",
};

firebase.initializeApp(firebaseConfig);

const firebaseTodo = firebase.firestore();

export { firebaseTodo };
