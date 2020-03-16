import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/common.css';
import Header from '../components/Header';
import Sliders from '../components/Sliders';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';
import { TilesList } from '../components/TilesList';
import WhyUsSection from '../components/WhyUsSection';

function AboutPage() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <AboutSection />
      <WhyUsSection
        description="We differentiate ourselves by having fully qualified expertise in the prestige market whilst maintaining competitive prices to our customers. We have also developed a loyal customer base through our customer and quality focus. All works are carried out to the same high standard that a main dealer can offer, with qualified, experienced, trained professional Technicians working on the vehicles. Together we inspect your vehicle and establish exactly what work needs to be done. Customers receive a fully itemized quotation before work begins so you know exactly what you will pay."
      />
      <Footer />
    </div>
  );
}

export default AboutPage;
