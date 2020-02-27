import React, { Component } from 'react';
import '../css/about-section.css';
import aboutImage from '../img/about.jpg';
class AboutSection extends Component {
    render() {
        return (
            <div class="about-area section-padding">
                <div class="pattent-bg-img">
                    <img src="img/about/pattern.png" alt="" />
                </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-12 col-lg-6">
                            <div class="about-thumb">
                                <img src={aboutImage} alt="" />
                            </div>
                        </div>
                        <div class="col-xl-5 col-md-12 col-lg-6">
                            <div class="section-title">
                                <span>About Company</span>
                                <p class="para-text">
                                    Seven Seas Machinery is prominent at providing full range of services to meet our customer needs. The Company has rapidly expanded the Product range along with the Infrastructure & Manufacturing facility, with the help of Top grade engineering practice and stringent quality. We maintain a professional relationship with each customer. We are firm believers in teamwork and consistent customer service. When considering a quality piece of heavy equipment, equipment appraisals, containerization, washing or attachments for your machine, make Seven Seas your primary resource. We are engaged in specialized services and repair of all kinds of construction machineries such as fork lift, heavy vehicle, hydraulic equipment, Marine etc.
                            </p>
                                <a href="#" class="boxed-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutSection;