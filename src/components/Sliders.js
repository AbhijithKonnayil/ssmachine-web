import React, { Component } from 'react';
import '../css/sliders.css';
import Slider from './Slider';
import SliderImage1 from '../img/slider/slider-img-1.jpg' 
import { Slide } from 'react-slideshow-image';
 
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

class Sliders extends Component {
    render() {
        return (
            <div className="slider-area">
                <Slide {...properties}>
                    <Slider index="0" text1="We are experts in" text2="Quality Car Maintance"/>
                    <Slider index="1" text2="Quality work. Trustable service. Dedicated team"/>
                    <Slider index="2"text2="We are specialized in European car service and repair"/>
                </Slide>
            </div>
        );
    }
}

export default Sliders;