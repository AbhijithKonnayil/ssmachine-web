import React, { Component } from 'react';

class ServiceItemServicePage extends Component {
    render() {
        return (
            <div className="">
                <div className="col-lg-4 float-left align-items-center">
                    <div class="single-service text-left">
                        <div class="service-thumb align-items-center">
                            <img src={this.props.image1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 float-left title">
                    <span className="text-left">{this.props.title1}</span>
                    <p className="para-text align-items-center">
                        {this.props.description1}
                    </p>

                </div>

            </div>


        );
    }
}

export default ServiceItemServicePage;