import React, { Component } from 'react';
import '../css/service-section.css';
import { NavLink } from 'react-router-dom';
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
                                <NavLink to={"/service/" + this.props.id} class="read-more">Read More</NavLink>
                            </div>
                        </div>
        );
    }
}

export default ServiceItem;