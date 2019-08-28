import React from "react";
import "bulma/css/bulma.css";



import "./App.css";
import Menu from "./components/Menu.js";
import Nav from "./components/Nav.js";



function App() {
  return (
    <div className="App">
      <Nav />
      <Menu />

    </div>
  );
}

export default App;

