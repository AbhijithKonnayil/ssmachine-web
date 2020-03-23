import React, { Component } from "react";
import Nav from "./Nav.js";
import "../css/header.css";
import "../css/nav.css";
import logo from "../img/logo.png";
import { rollIn as menuAnimation } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  menuAnimation: {
    animation: 'x 1s',
    animationName: Radium.keyframes(menuAnimation, 'menuAnimation')
  }
}

class Header extends Component {
  state = {
    toggle: false
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area white-bg">
            <div className="container-lg ">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo-img">
                    <a href="index.html">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-lg-10">
                  <div className="main-menu d-none d-md-block">
                    <Nav />
                  </div>
                </div>

                <div className="mobile_menu d-block d-md-none">
                  <span
                    className="fa fa-fw fa-bars"
                    onClick={this.Toggle}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={
            this.state.toggle ? "d-block main-menu d-md-none" : "d-none"
          } >
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
