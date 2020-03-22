import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

class ServiceItemServicePage extends Component {
  render() {
    return (
      <ScrollableAnchor id={this.props.id}>
        <div className="">
          <div className="col-xl-6 col-lg-6 float-left align-items-center">
            <div class="single-service text-left">
              <div class="service-thumb align-items-center">
                <img src={this.props.image} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 float-left title">
            <span className="text-left">{this.props.title}</span>
            <p className="para-text align-items-center">
              {this.props.description}
            </p>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default ServiceItemServicePage;
