import React, { Component } from "react";
import "../css/tile-list.css";
class Tile extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 brand-tile">
        <div className="col-12 col-sm-12 text-right">
          <img src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Tile;
