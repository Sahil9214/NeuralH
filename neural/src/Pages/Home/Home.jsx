import React, { useState, useEffect } from "react";
import Introduction from "../../Components/HomeComponents/Introduction/Introduction";
import AboutUsComponent from "../../Components/HomeComponents/AboutUSComponents/AboutUsComponent";
import GenerativeAi from "../../Components/HomeComponents/GenerativeAi/GenerativeAi";
import OurService from "../../Components/HomeComponents/OurService/OurService";
import CaseStudy from "../../Components/HomeComponents/CaseStudy/CaseStudy";
import Navbar from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar showNavs={true} />
      <div className="scroll-snap">
        <Introduction />
        <AboutUsComponent />
        <GenerativeAi />
        <OurService />
        <CaseStudy />
      </div>
      <Footer />
    </>
  );
};

export default Home;
