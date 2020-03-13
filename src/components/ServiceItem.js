import React, { Component } from 'react';
import '../css/service-section.css';

class ServiceItem extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-4">
                            <div class="single-service text-left">
                                <div class="service-thumb">
                                    <img src={this.props.image} alt=""/>
                                </div>
                                <h3>{this.props.title}</h3>
                                <p>{this.props.description}</p>
                                <a href="#" class="read-more">Read More</a>
                            </div>
                        </div>
        );
    }
}

export default ServiceItem;