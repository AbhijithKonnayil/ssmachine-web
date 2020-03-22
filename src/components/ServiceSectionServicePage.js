import React, { Component } from "react";
import ServiceImage1 from "../img/service/1.jpg";
import ServiceImage2 from "../img/service/2.jpg";
import ServiceImage3 from "../img/service/3.jpg";
import ServiceImage4 from "../img/service/4.jpg";
import ServiceImage5 from "../img/service/5.jpg";
import ServiceImage6 from "../img/service/6.jpg";
import "../css/service-section.css";
import ServiceItemServicePage from "./ServiceItemServicePage";

class ServiceSectionServicePage extends Component {
  render() {
    return (
      <div class="service-area">
        <div class="container">
          <div class="row">
            <ServiceItemServicePage
              id="service1"
              image={ServiceImage6}
              title="Mechanical Repair"
              description="The heart and soul of your car, truck or SUV is the engine; a complex system as vital to your vehicle as your heart is to you. Even with excellent maintenance, engines will still fail. Those who gave their vehicles excellent regular maintenance will usually get a significantly higher number of miles out of their engine compared to those who didn’t but the sad truth is that anything with moving parts is doomed to fail.
                            Seven SEas Automobiles has highly trained mechanics that are familiar with all types of engine repairs. They can inspect, diagnose problems, discuss the repairs required with you and then fix your engine issues.
                            "
            />

            <ServiceItemServicePage
              id="service2"
              image={ServiceImage1}
              title="Car Dent Repair"
              description="Unfortunately, accidents happen that can cause damage to the vehicle in terms of paint damage and dent. Paint scratches and dents shows detract from the appearance of your car.

                            Seven Seas Automobiles specialises in car dent repair and car painting services for all makes and models. Whether you need to fix a small scratch or a huge dent on your car, our expert mechanics can help you with all car body repair services.
                            
                            Our end to end denting and painting solutions include car scratch repair, car paint repair, car bumper repair and more. We have trained technicians and equipment technology to restore your paint jobs original look and feel with high quality and cost effective. If you wish to get rid of those scratches and dents on your car, call us today."
            />

            <ServiceItemServicePage
              id="service3"
              image={ServiceImage2}
              title="Painting"
              description="
                            Your vehicle’s paint is often the first thing people notice—especially if the finish is chipped, scratched, or damaged. Seaven Seas Automobiles is home to the latest paint-matching technology, the industry’s top talent, and the very best products to restore your paint job’s original look and feel.
We takes paint seriously. All of our locations use the very latest technology, so that each vehicle entering our booths precisely matches its original finish and color.
All our painters are professionally trained. Plus, we provide our painters with top quality refinishing products that are globally recognized and used by the best auto professionals in the industry.
                            "
            />

            <ServiceItemServicePage
              id="service4"
              image={ServiceImage3}
              title="Car Detailing"
              description="
                            Maintain your car’s visual and functional aesthetics is by availing the best car detailing services in your city.
                            Car detailing is a comprehensive cleaning procedure for the interiors as well as the exteriors of your automobile that attends to stubborn stains, 
                            making your car look as good as new. A classic car wash and auto detailing service includes car interior vacuum cleaning, 
                            car seat dry cleaning, upholstery cleaning, windshield cleaning, application of wax coating, and tyre and bumper dressings.
                            Instead of searching for car cleaning and detailing near me, reach out to Seven Seas Automobiles delivering the best cleaning results for your vehicle.
                            A professional car wash and cleaning service is a periodic maintenance program for your car.
                            Car wash and auto detailing are the most efficient forms of renovation for your car. At Seven Seas Automobiles, we assure industry experts using the best 
                            skills and the premium products to protect the surface of the car and keep its features working in excellent conditions. Moreover, we will assist you in choosing a car detailing package that best suits your requirements.
                            "
            />

            <ServiceItemServicePage
              id="service5"
              image={ServiceImage4}
              title="Electric Repair"
              description="
                            Cars these days are as much electronics as they are mechanics. That is why we are skilled at both.
                            As cars and their engines become more modern, most of the systems are computer controlled.
                            This results in more efficient cars with improved performance but it also means cars are more complex than ever.
                            The good thing about auto electrical problems is that they are usually indicated by a light or error message on your dash,
                            making it easy for the driver to know something is amiss. There are more sinister issues though,
                            such as your car not starting at all or cutting out unexpectedly.
                            When you have a problem with your car’s auto electrical system, Seven Seas Automobiles has the latest technology to diagnose the problem and trained, skilled technicians to service and repair any auto electrical components. 
                            For all your auto electrical servicing and repairs, We have the latest state of art equipments and tools with the expertise of our certified technicians.
                            "
            />

            <ServiceItemServicePage
              id="service6"
              image={ServiceImage5}
              title="Air Conditioning"
              description="Car air conditioners not only keep you cool during summer, but can also remove humidityair-condition-flush from the cabin, which can be handy with the winter to counteract a foggy windscreen.
                            Running your AC during winter also helps to maintain the system in good working order.Air conditioning systems contains hoses and seals that can dry out or crack, which could lead to coolant leaks and poor performance.
                        Regular car service will check for obvious faults which may be associated with the air conditioning system, such as drive belt tension, visible signs of refrigerant leaks and loose or faulty compressor or equipment mounting brackets, but it is good practice to have a comprehensive air condition service.
                        When you visit your Aarya Auto , trained technicians will perform a series of checks, repairs and replacements to get your air conditioner in top condition.
                        If your car air conditioner isn’t running efficiently, needs gas, or you haven’t had it serviced for a long time, now is your moments contact Seven Seas Automobiles for an appointment."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceSectionServicePage;
