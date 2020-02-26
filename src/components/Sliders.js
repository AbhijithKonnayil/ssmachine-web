import React, { Component } from 'react';
import '../css/sliders.css';
import Slider from './Slider';


class Sliders extends Component {
    render() {
        return (
            <div className="slider-area">
                <div className="slider-active owl-carousel">
                    <Slider/>
                    <Slider/>
                    <Slider/>
                </div>
            </div>
        );
    }
}

export default Sliders;