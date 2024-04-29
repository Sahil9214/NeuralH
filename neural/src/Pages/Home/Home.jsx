import React from "react";
import Introduction from "../../Components/HomeComponents/Introduction/Introduction";
import GenerativeAi from "../../Components/HomeComponents/GenerativeAi/GenerativeAi";
import OurService from "../../Components/HomeComponents/OurService/OurService";
import CaseStudy from "../../Components/HomeComponents/CaseStudy/CaseStudy";
import AboutUsComponent from "../../Components/HomeComponents/AboutUSComponents/AboutUsComponent";

const Home = () => {
  return (
    <>
      <Introduction />
      <AboutUsComponent />
      <GenerativeAi />
      <OurService />
      <CaseStudy />
    </>
  );
};

export default Home;
