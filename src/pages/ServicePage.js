import React from "react";

import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import ServiceSectionServicePage from "../components/ServiceSectionServicePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/common.css";

function ServicePage() {
  return (
    <div className="App">
      <Header />
      <Sliders pagename="Service"/>
      <ServiceSectionServicePage />
      <Footer />
    </div>
  );
}

export default ServicePage;
