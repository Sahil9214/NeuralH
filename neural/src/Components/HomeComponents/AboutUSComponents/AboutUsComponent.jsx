import React from "react";
import { Link } from "react-router-dom";
import "./AboutUsComponent.css";

import Constant from "../../../Utils/Constant";

const AboutUsComponent = () => {
  return (
    <div
      className="h-full py-28 px-4 md:py-36 md:px-12 lg:py-42 md:flex items-center justify-center md:h-screen lg:h-screen "
      style={{
        background: "linear-gradient(90deg, #203B60 0%, #4C648B 100%)",
        scrollSnapAlign: "start",
      }}
      id="about"
    >
      <div className="lg:w-4/6 xl:w-6/12 2xl:w-7/12  xl:mb-10 ">
        <p
          className="font-lato text-lg md:text-xl lg:text-2xl "
          style={{ color: "#E0E0E0" }}
        >
          {Constant.ABOUT_US}
        </p>
        <div className="mt-4 md:mt-8 lg:mt-10">
          <p
            className="font-lato text-2xl sm:text-4xl/8 md:text-4xl/9 lg:text-4xl"
            style={{ color: "#CEE7FE" }}
          >
            {Constant.ABOUT_US_CONTEXT}
          </p>
        </div>
        <div className="mt-4 md:mt-8 lg:mt-10">
          <p
            className="font-lato text-base/6 md:text-xl/9 lg:text-2xl/snug xl:text-xl"
            style={{ color: "#ACC2EE" }}
          >
            {Constant.ABOUT_US_PAGE_DESCRIPTION}
          </p>
        </div>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            fontStyle: "none",
          }}
        >
          <div
            className="w-40 h-10 mt-6 flex justify-center items-center md:w-48 md:h-16 md:mt-10 lg:w-64"
            style={{ border: "1px solid #ACC2EE" }}
          >
            <p
              className="font-lato text-bas md:text-xl lg:text-2xl"
              style={{ color: "#ACC2EE" }}
            >
              Know More
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsComponent;
