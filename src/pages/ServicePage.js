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
import AboutSectionAboutPage from '../components/AboutSectionAboutPage';
import ServiceSectionServicePage from '../components/ServiceSectionServicePage';

function ServicePage() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <ServiceSectionServicePage/>
      <Footer />
    </div>
  );
}

export default ServicePage;
