import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
import ServiceImage1 from '../img/service/1.jpg';
import ServiceImage2 from '../img/service/2.jpg';
import ServiceImage3 from '../img/service/3.jpg';
import '../css/service-section.css';
class ServiceSection extends Component {
    render() {
        return (
            <div class="service-area">
                <div class="container">
                    <div class="row align-items-center ">
                        <div className="col-md-12">
                        
                        <div class="section-title text-center mb-65">
                            <span>OUR SERVICES</span>
                            <p class="para-text">
                            We believe customer satisfaction and quality services as a prime factor in our Technical Plan. Professional Field Device Service Managers / Engineers / Supervisors / Technicians understand the client requirements for each application and purpose then propose solutions for each unique need.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <ServiceItem title="Fork Lift" description="" image={ServiceImage1}/>
                        <ServiceItem title="Generator" description="" image={ServiceImage2}/>
                        <ServiceItem title="Rental for Site Work" description="" image={ServiceImage3}/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ServiceSection;