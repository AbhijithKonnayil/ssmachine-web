import React, { Component } from 'react';
import Nav from './nav';

class Header extends Component {
    render() {
        return (
            <header>
        <div class="header-area ">
            <div class="header-top black-bg d-none d-md-block">
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
            </div>
            <div id="sticky-header" class="main-header-area white-bg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo-img">
                                <a href="index.html">
                                    <img src="img/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <Nav/>
                        <div class="col-xl-3 col-lg-3">
                            <div class="quote-area">
                                <div class="search-bar">
                                    <a id="search_1" href="javascript:void(0)"><i class="fa fa-search"></i></a>
                                </div>
                                <div class="get-quote d-none d-lg-block">
                                    <a class="boxed-btn" href="#">Get a quote</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div class="search_input" id="search_input_box">
                        <div class="container ">
                            <form class="d-flex justify-content-between search-inner">
                                <input type="text" class="form-control" id="search_input" placeholder="Search Here"/>
                                <button type="submit" class="btn"></button>
                                <span class="fa fa-close" id="close_search" title="Close Search"></span>
                            </form>
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