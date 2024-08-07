import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Footer from "../components/templates/Footer/Footer";
import Logo from "../components/templates/Logo/Logo";
import Nav from "../components/templates/Nav/Nav";
import Routes from "./Routes";

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
