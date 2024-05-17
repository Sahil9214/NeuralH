/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Constant from "../../../Utils/Constant";
import "./GenerativeAi.css";
import { Link } from "react-router-dom";
import generativeImage from "../../../Images/file1.png";
import "aos/dist/aos.css";
import mobileImage from "../../../Images/file.png";

const GenerativeAi = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1124);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="h-full w-full flex flex-col pb-10  lg:flex-row-reverse lg:h-screen  lg:justify-between lg:space-around lg:pb-0  "
      style={{ scrollSnapAlign: "start" }}
      id="solution"
    >
      <div
        className="h-2/5  w-full md:w-full md:h-2/5 lg:h-full lg:w-3/6 xl:h-full xl:w:3/6 "
        style={{ backgroundImage: "" }}
      >
        {isMobile ? (
          <img
            className="w-full h-full object-cover"
            alt="ai-image"
            src={mobileImage}
            loading="lazy"
            style={{ opacity: "0.6" }}
          />
        ) : (
          <>
            <img
              className="h-full w-full object-fill"
              alt="ai-image"
              src={generativeImage}
              loading="lazy"
              style={{ opacity: ".6" }}
            />
          </>
        )}
      </div>

      <div className="h-3/5  px-4 mt-2 lg:w-3/6 md:h-3/5  lg:m-auto lg:pl-10 xl:m-auto ">
        <div className="lg:text-left ">
          <p
            className="font-lato text-xl sm:text-xl md:text-xl lg:text-2xl  xl:mb-8"
            style={{ color: "#4D658D" }}
          >
            {Constant.OUR_SOLUTIONS}
          </p>
        </div>
        <div className="mt-1 sm:mt-3 ">
          <p
            className="font-lato text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl"
            style={{ color: "#374357" }}
          >
            {Constant.OUR_SOLUTIONS_DESCRIPTION1}
          </p>
        </div>
        <div className="xl:mt-8">
          <p
            className=" font-lato text-xl pt-2 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl "
            style={{ color: "#374357" }}
          >
            {Constant.OUR_SOLUTIONS_DESCRIPTION2}
          </p>
        </div>
        <div className="mt-6">
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              fontStyle: "none",
              color: "#0F1C2E",
            }}
          >
            <button
              style={{
                border: "1px solid #0F1C2E",
                borderRadius: "10px",
                color: "#0F1C2E ",
              }}
              className="font-lato text-base w-40 h-10 lg:w-64 lg:h-14 lg:text-xl"
            >
              {Constant.CONTACT_US}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAi;
{
  /* <div
        className="h-3/6 w-full  md:w-full md:h-full lg:h-full lg:w-3/5"
        style={{
          backgroundImage: `url(${isMobile ? mobileImage : generativeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.6",
        }}
      ></div> */
}
