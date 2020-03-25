import React, { Component } from "react";
import "../css/sliders.css";
import Slider from "./Slider";
import { Slide } from "react-slideshow-image";

import SliderImage1 from "../img/slider/slider-img-1.jpg";
import SliderImage2 from "../img/slider/slider-img-2.jpg";
import SliderImage3 from "../img/slider/slider-img-3.jpg";

const slideImages = [SliderImage1, SliderImage2, SliderImage3];


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export default class Sliders extends Component {
  render() {
    return (
      <div className="slider-area">
        <div className="single-slider"
          style={{
            backgroundImage: "url(" + slideImages[Math.floor(Math.random() * 3)] + ")"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7  col-lg-7">
                <div className="slider-content-default">
                  <h3>{this.props.pagename}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SlidersHome extends Component {
  render() {
    return (
      <div className="slider-area">
        <Slide {...properties}>
          <Slider
            index="0"
            text2="One stop solution for all your Automobile Service needs"
          />
          <Slider
            index="1"
            text2="Quality work. Trustable service. Dedicated team"
          />
          <Slider
            index="2"
            text2="We are specialized in European car service and repair"
          />
        </Slide>
      </div>
    );
  }
}

export {SlidersHome};
