import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/font-awesome.min.css';
import Header from './components/Header';
import Sliders from './components/Sliders';
import AboutSection from './components/AboutSection';
function App() {
  return (
    <div className="App">
      <Header/>
      <Sliders/>
      <AboutSection/>
    </div>
  );
}

export default App;
