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
                    <Slider index="0"/>
                    <Slider index="1"/>
                    <Slider index="2"/>
                </Slide>
            </div>
        );
    }
}

export default Sliders;