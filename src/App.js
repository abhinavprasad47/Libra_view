import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Menu from "./Menu.js";
import Nav from "./Nav.js";
import Home from "./components/Home.js";



function App() {
  return (
    <div className="App">
      <Nav />
      <Menu />

    </div>
  );
}

export default App;
