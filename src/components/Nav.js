import React, { Component } from "react";
import "../css/nav.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class MenuItem extends Component {
  render() {
    return (
        <li>
          <NavLink exact to={this.props.linkTo} activeClassName="active">
            {this.props.text}
          </NavLink>
        </li>
    );
  }
}
class Nav extends Component {
  render() {
    return (
      <nav>
        <ul id="navigation">
          <MenuItem linkTo="/" text="Home"/>
          <MenuItem linkTo="/about" text="About"/>
          <MenuItem linkTo="/service" text="Service"/>
          <MenuItem linkTo="/contact" text="Contact"/>
        </ul>
      </nav>
    );
  }
}

export default Nav;
