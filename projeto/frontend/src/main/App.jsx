import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import React from "react";
import "./App.css";

import Footer from "../components/templates/Footer/Footer";
import Logo from "../components/templates/Logo/Logo";
import Home from "../components/home/Home";
import Nav from "../components/templates/Nav/Nav";

export default (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>
);
