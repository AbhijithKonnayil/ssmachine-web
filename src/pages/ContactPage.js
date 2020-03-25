import React from "react";

import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";


import "bootstrap/dist/css/bootstrap.min.css";
import "../css/common.css";

function ContactPage() {
  return (
    <div className="App">
      <Header />
      <Sliders pagename="Contact Us"/>
      <ContactBody />
      <Footer />
    </div>
  );
}

export default ContactPage;
