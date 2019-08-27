import React from "react";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logs from "./Logs"


function Menu() {
  return (
    <div>
    <Router>
      <aside className="menu">
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Logs">All Logs</Link>
         
          </li>
          <li>
            <Link to>All books</Link>
          </li>
          <li>
            <Link >All authors</Link>
          </li>
          <li>
          <Link>Add user</Link>
          </li>
          <li>
          <Link>Log Book Echanges</Link>
          </li>
          <li>
          <Link>Add Books</Link>
          </li>
        </ul>
      </aside>
      <Route exact path="/" component={Home} />
        <Route path="/Logs" component={Logs} />
      </Router>
    </div>
  );
}

export default Menu;
