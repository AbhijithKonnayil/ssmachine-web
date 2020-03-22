import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/common.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/service" component={ServicePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
