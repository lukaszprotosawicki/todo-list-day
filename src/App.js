import React from "react";
import Footer from "./componentes/Footer.js";
import Form from "./componentes/Form.js";
import List from "./componentes/List.js";

function App() {
  return (
    <div className="App">
      <h1>What's the Plan for Today</h1>
      <Form />
      <List />
      <Footer />
    </div>
  );
}

export default App;
