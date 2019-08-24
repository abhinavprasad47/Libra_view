import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Logs from "./components/Logs.js";



function App() {
  return (
    <div className="App">
      <Nav />
      <Menu /><div>
          <Router exact path="/" component={Home} />
          <Router path = "/logs"  component={Logs}  />
        </div>


    </div>
  );
}

export default App;

