import React, { Component } from 'react';
import '../css/nav.css'

class Nav extends Component {
    render() {
        return (
            <div class="col-lg-10">
                <div class="main-menu d-none d-lg-block">
                    <nav>
                        <ul id="navigation">
                            <li><a class="active" href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a>
                                <ul class="submenu">
                                    <li><a href="elements.html">Pipe Freeze Plugging - Pipe Freezing</a></li>
                                    <li><a href="service-details.html">Repair Service Maintenance</a></li>
                                    <li><a href="project-details.html">Trading</a></li>
                                </ul>
                            </li>
                            <li><a href="project.html">Plant Hire/Rentals</a></li>
                            <li><a href="#">Garrage <i class="ti-angle-down"></i></a>
                            <ul class="submenu">
                                    <li><a href="elements.html">Op 1</a></li>
                                    <li><a href="service-details.html">Op 3</a></li>
                                    <li><a href="project-details.html">Trading</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Career <i class="ti-angle-down"></i></a></li>
                            <li><a href="#">Enquiry<i class="ti-angle-down"></i></a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                
            </div>
        );
    }
}

export default Nav;