import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.css';
import Header from './components/Header';
import Sliders from './components/Sliders';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Sliders/>
      <AboutSection/>
      <ServiceSection/>
      <Footer/>
    </div>
  );
}

export default App;
