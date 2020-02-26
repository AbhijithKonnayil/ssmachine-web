import React, { Component } from 'react';
import Nav from './nav';
import '../css/header.css'
import logo from '../img/logo.png';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="header-area ">
                    {/* <div class="header-top black-bg d-none d-md-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-lg-6">
                                    <div class="header-contact">
                                        <a href="#"><i class="fa fa-phone"></i> +880 256 356 256</a>
                                        <a href="#"><i class="fa fa-envelope"></i> support24@durg.com</a>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-lg-6">
                                    <div class="header-top-menu">
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
                    <div id="sticky-header" class="main-header-area white-bg">
                        <div class="container-lg ">
                            <div class="row align-items-center">
                                <div class="col-xl-2 col-lg-2">
                                    <div class="logo-img">
                                        <a href="index.html">
                                            <img src={logo} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <Nav />

                            <div class="mobile_menu d-block d-md-none">
                                <span class="fa fa-fw fa-bars"></span>
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