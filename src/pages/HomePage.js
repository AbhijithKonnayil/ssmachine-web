import React from "react";

import Header from "../components/Header";
import {SlidersHome} from "../components/Sliders";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import { TilesList } from "../components/TilesList";
import WhyUsSection from "../components/WhyUsSection";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/common.css";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <SlidersHome />
      <AboutSection />
      <ServiceSection />
      <TilesList />
      <WhyUsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
