import React, { Component } from 'react';
import '../css/sliders.css';
import SliderImage1 from '../img/slider/slider-img-1.jpg' ;
import SliderImage2 from '../img/slider/slider-img-2.jpg' ;
import SliderImage3 from '../img/slider/slider-img-3.jpg' ;

const slideImages = [
    SliderImage1,SliderImage2,SliderImage3
  ];
  
class Slider extends Component {
    render() {
        return (
            <div className="single-slider" style={{  backgroundImage: "url(" + slideImages[this.props.index] + ")" }}>
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