import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/common.css";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";

function ContactPage() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <ContactBody />
      <Footer />
    </div>
  );
}

export default ContactPage;
