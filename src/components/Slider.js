import React, { Component } from "react";
import "../css/sliders.css";
import SliderImage1 from "../img/slider/slider-img-1.jpg";
import SliderImage2 from "../img/slider/slider-img-2.jpg";
import SliderImage3 from "../img/slider/slider-img-3.jpg";

const slideImages = [SliderImage1, SliderImage2, SliderImage3];

class Slider extends Component {
  render() {
    return (
      <div
        className="single-slider"
        style={{
          backgroundImage: "url(" + slideImages[this.props.index] + ")"
        }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="slider-content">
                <p>{this.props.text1}</p>
                <h3>{this.props.text2}</h3>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
