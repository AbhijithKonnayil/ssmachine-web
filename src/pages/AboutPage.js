import React from "react";

import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import WhyUsSection from "../components/WhyUsSection";
import AboutSectionAboutPage from "../components/AboutSectionAboutPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/common.css";

function AboutPage() {
  return (
    <div className="App">
      <Header />
      <Sliders pagename="About Us" />
      <AboutSectionAboutPage />
      <WhyUsSection description="We differentiate ourselves by having fully qualified expertise in the prestige market whilst maintaining competitive prices to our customers. We have also developed a loyal customer base through our customer and quality focus. All works are carried out to the same high standard that a main dealer can offer, with qualified, experienced, trained professional Technicians working on the vehicles. Together we inspect your vehicle and establish exactly what work needs to be done. Customers receive a fully itemized quotation before work begins so you know exactly what you will pay." />
      <Footer />
    </div>
  );
}

export default AboutPage;
