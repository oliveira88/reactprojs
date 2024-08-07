import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default (props) => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/users" element={<UserCrud />} />
    <Route exact path="*" element={<Home />} />
  </Routes>
);
