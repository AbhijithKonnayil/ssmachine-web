import React, { Component } from 'react';
import '../css/sliders.css';
import SliderImage1 from '../img/slider/slider-img-1.jpg' ;
class Slider extends Component {
    render() {
        return (
            <div className="single-slider" style={{backgroundImage:`url(${SliderImage1})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 offset-xl-1 col-lg-7">
                            <div className="slider-content">
                                <p>Quality work. Trustable service. Dedicated team</p>
                                <h3>We provide your Industrial solution</h3>
                                {/* <div className="slider-btn">
                                    <a className="boxed-btn2" href="#">Our Services <i
                                            className="Flaticon flaticon-right-arrow"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;