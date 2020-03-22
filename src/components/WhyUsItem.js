import React, { Component } from "react";
import { importAll } from "./TilesList";
import TilesList from "./TilesList";
class WhyUsItem extends Component {
  render() {
    const images = importAll(
      require.context("../img/why-us/", false, /\.(jpg)$/)
    );
    return (
      <div className="why-us-item-container col-lg-6 col-12 float-left">
        <div
          className="why-us-item col-12 "
          style={{ backgroundImage: "url(" + images[this.props.index] + ")" }}
        >
          <div className="col-12">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUsItem;
