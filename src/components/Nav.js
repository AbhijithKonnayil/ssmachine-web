import React, { Component } from "react";
import "../css/nav.css";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul id="navigation">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
