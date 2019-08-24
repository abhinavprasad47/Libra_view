import React from "react";
import Home from "./Home.js"

function Menu() {
  return (
    <div>
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a herf = "/logs">All Logs</a>
        </li>
        <li>
          <a>All books</a>
        </li>
        <li>
          <a>All authors</a>
        </li>
        <li>
          <a>Add user</a>
        </li>
        <li>
          <a>Log Book Echanges</a>
        </li>
        <li>
          <a>Add Books</a>
        </li>
      </ul>
    </aside>
    <Home />
    </div>
  );
}

export default Menu;