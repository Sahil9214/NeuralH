import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUSTeam from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import NotFound from "../Pages/NotFoundPage/NotFound";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUSTeam />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRouter;
// Made by utkatrsh singhal
