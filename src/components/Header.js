import React, { Component } from 'react';
import Nav from './Nav.js';
import '../css/header.css'
import logo from '../img/logo.jpeg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-area ">
                    {/* <div className="header-top black-bg d-none d-md-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-6 col-lg-6">
                                    <div className="header-contact">
                                        <a href="#"><i className="fa fa-phone"></i> +880 256 356 256</a>
                                        <a href="#"><i className="fa fa-envelope"></i> support24@durg.com</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6">
                                    <div className="header-top-menu">
                                        <nav>
                                            <ul>
                                                <li><a href="blog.html">News & media</a></li>
                                                <li><a href="review.html">Review</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                <Nav />

                            <div className="mobile_menu d-block d-md-none">
                                <span className="fa fa-fw fa-bars"></span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;