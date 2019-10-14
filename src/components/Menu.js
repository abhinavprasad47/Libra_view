import React, { Component } from "react";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logs from "./Logs";
import Books from "./Books";
import Author from "./Author";
import User from "./AddUser";
import AllUser from "./allUser"
class Menu extends Component {
  render() {
    return (
      <div>
        <Router>
          <aside className="menu">
            <ul className="sidebar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Logs">All Logs</Link>
              </li>
              <li>
                <Link to="/allUsers">All Users</Link>
              </li>
              <li>
                <Link to="/Books">All books</Link>
              </li>
              <li>
                <Link to="/Author">All authors</Link>
              </li>
              <li>
                <Link to="/User">Add user</Link>
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
          <Route path="/Books" component={Books} />
          <Route path="/Author" component={Author} />
          <Route path="/User" component={User} />
          <Route path="/allUser" component ={AllUser} />
        </Router>
      </div>
    );
  }
}
export default Menu;
