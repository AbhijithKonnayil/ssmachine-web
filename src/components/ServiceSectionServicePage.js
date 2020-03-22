import React, { Component } from 'react';
import ServiceImage1 from '../img/service/1.jpg';
import ServiceImage2 from '../img/service/2.jpg';
import ServiceImage3 from '../img/service/3.jpg';
import ServiceImage4 from '../img/service/4.jpg';
import ServiceImage5 from '../img/service/5.jpg';
import ServiceImage6 from '../img/service/6.jpg';
import '../css/service-section.css';
import ServiceItemServicePage from './ServiceItemServicePage';

class ServiceSectionServicePage extends Component {
    render() {
        return (
            <div class="service-area">
                <div class="container">
                    <div class="row">
                        <ServiceItemServicePage
                            image1={ServiceImage1}
                            title1 = "Air Conditioning"
                            description1="Car air conditioners not only keep you cool during summer, but can also remove humidityair-condition-flush from the cabin, which can be handy with the winter to counteract a foggy windscreen.
                            Running your AC during winter also helps to maintain the system in good working order.Air conditioning systems contains hoses and seals that can dry out or crack, which could lead to coolant leaks and poor performance.
                        xlfuplbfETdYA regular car service will check for obvious faults which may be associated with the air conditioning system, such as drive belt tension, visible signs of refrigerant leaks and loose or faulty compressor or equipment mounting brackets, but it is good practice to have a comprehensive air condition service.
                        When you visit your Aarya Auto , trained technicians will perform a series of checks, repairs and replacements to get your air conditioner in top condition.
                        If your car air conditioner isn’t running efficiently, needs gas, or you haven’t had it serviced for a long time, now is your moments contact Aarya Auto  for an appointment."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceSectionServicePage;