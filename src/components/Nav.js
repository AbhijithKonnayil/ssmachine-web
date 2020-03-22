import React, { Component } from "react";
import "../css/nav.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="col-md-12 col-lg-10">
        <div className="main-menu d-none d-md-block">
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
                <NavLink to="/service">Services</NavLink>
                {/*<ul className="submenu">
                                    <li><a href="elements.html">Pipe Freeze Plugging - Pipe Freezing</a></li>
                                    <li><a href="service-details.html">Repair Service Maintenance</a></li>
                                    <li><a href="project-details.html">Trading</a></li>
        </ul>*/}
              </li>
              <li>
                <a href="#">
                  Enquiry<i className="ti-angle-down"></i>
                </a>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
