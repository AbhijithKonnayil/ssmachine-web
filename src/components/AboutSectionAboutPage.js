import React, { Component } from "react";

import aboutImage from "../img/about.png";
import visionImage from "../img/icons/vision.png";
import missionImage from "../img/icons/mission.png";
import valuesImage from "../img/icons/values.png";

import '../css/about-section.css';
import "../css/common.css";

class AboutSectionAboutPage extends Component {
  render() {
    return (
      <div class="about-area section-padding">
        <div class="container">
          <div class="row ">
            <div class="col-xl-7 col-md-12 col-lg-6">
              <div class="about-thumb">
                <img src={aboutImage} alt="" />
              </div>
            </div>
            <div class="col-xl-5 col-md-12 col-lg-6">
              <p class="para-text">
                Seven Seas Automobiles– the reliable independent German car
                specialist in the UAE. Dedicated to meeting the specific demands
                of European Luxury Cars, our team shares your passion for
                performance, service and value. Seven Seas Automobiles state of
                the art workshop in Al Quoz, Dubai, houses the technical acumen
                and diagnostic equipment to deliver unrivalled levels of
                professionalism and quality at significantly lower costs than
                those of a main dealer. Hundreds of discerning German car owners
                entrust us every year to service, repair and optimize their
                driving machines. We at Seven Seas Machinery are a customer
                friendly business that can offer you a complete car repair
                service we primarily aim at the prestige car market.
              </p>
            </div>
            <div class="col-xl-6 col-md-12 col-lg-6">
              <div class="title">
                <img src={visionImage} alt="" />
                <span>Our Vision</span>
                <p class="para-text">
                  To be the best employer by creating employment oppertunities
                  to the most desirable and competent candidates to create and
                  maintain value addition to the customers
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-12 col-lg-6">
              <div class="title">
                <img src={missionImage} alt="" />
                <span>Our Mission</span>
                <p class="para-text">
                  To revalutionize automobile industry by safe guarding risk and
                  stress factors of the customers in a hassle free manner
                </p>
              </div>
            </div>
            <div class="col-xl-12 col-md-12 col-lg-12">
              <div class="title">
                <img src={valuesImage} alt="" />
                <span>Core Values</span>
                <p class="para-text">
                  We are committed towards delievering the highest standard of
                  integrity, honesty, trust and professionalism. Our business
                  terms and conditions are predefined and simple to understand.
                  Being a strong group of motivated Professionals we can assure
                  you of memorable future alone with long lasting customer
                  satisfation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSectionAboutPage;
