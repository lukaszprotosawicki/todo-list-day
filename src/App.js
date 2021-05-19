import React from "react";
import Footer from "./componentes/Footer.js";
import Form from "./componentes/Form.js";
import List from "./componentes/List.js";
import DataProvider from "./componentes/DataProvider.js";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>What's the Plan for Today</h1>
        <Form />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
