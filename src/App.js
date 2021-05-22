import React, { useState } from "react";
import Footer from "./componentes/Footer.js";
import Form from "./componentes/Form.js";
import List from "./componentes/List.js";
import DataProvider from "./componentes/DataProvider.js";
import { ThemeProvider, createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"}
  color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")}
}
`;
  const [theme, setTheme] = useState({ mode: "dark" });
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <div className="container-bg">
            <button
              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            >
              Light/Dark
            </button>
            <h1>What's the Plan for Today</h1>
            <Form />
            <List />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
