import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
import ServiceImage1 from '../img/service/1.jpg';
import ServiceImage2 from '../img/service/2.jpg';
import ServiceImage3 from '../img/service/3.jpg';
import ServiceImage4 from '../img/service/4.jpg';
import ServiceImage5 from '../img/service/5.jpg';
import ServiceImage6 from '../img/service/6.jpg';
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
                                    Seven Seas Automobiles offers a full range of auto repair services for European cars (AUDI, BMW, Mercedes-Benz, Volkswagen, Mini-Cooper, Bentley, Porsche, Land-Rover, Volvo, Jaguar, Maserati and Lamborghini). We value our integrity, credibility and will never compromise on quality.
                                 </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <ServiceItem title="Mechanical"
                        id="#service1"
                            description="OEM trained service inspectors identify the mechanical problems and rectify with quality parts and perfect suitable tools. Our facility is well equipped to handle Asian, European & American vehicles"
                            image={ServiceImage6} />

                        <ServiceItem title="Car Dent Repair"
                        id="#service2"
                            description="We do refurbish to the original shape even after accidents, including chassis straitening"
                            image={ServiceImage1} />

                        <ServiceItem title="Painting"
                        id="#service3"
                            description="We ensure perfect finishing touch through our fully automatic paint booth, quality paint products & hands on experience of our painters"
                            image={ServiceImage2} />

                        <ServiceItem title="Car Detailing"
                        id="#service4"
                            description="Its a detailed inspection of quality, hygene, aromatic and cleanliness of vehicle. Interier gets cleaned in detail to maintain freshness. Rubbing, polishing & waxing for the exterior makes better look of update."
                            image={ServiceImage3} />

                        <ServiceItem title="Electric Repair"
                        id="#service5"
                            description="We analyze and find solutions for all new generation vehicles. We do have fully computerized electrical unit with qualified & trained technicians"
                            image={ServiceImage4} />
                            
                        <ServiceItem title="A/C Service"
                        id="#service6"
                            description="Aircons are maintained with latest analyzing machined & tools to maintain the perfomance & internl comfort. Environment friendly standard gas is used"
                            image={ServiceImage5} />
                    </div>
                </div>
            </div>

        );
    }
}

export default ServiceSection;