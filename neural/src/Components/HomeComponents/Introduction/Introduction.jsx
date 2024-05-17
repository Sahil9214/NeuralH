import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Constant from "../../../Utils/Constant";
import "./Introduction.css";
import IntroductionImage from "../../../Images/Introduction-img.png";
import file2 from "../../../Images/introduction-mobile.png";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <p className="text-base mt-4 h-9 sm:text-xl md:text-base lg:text-2xl">
      {displayText}
    </p>
  );
};

const Introduction = ({ scrollToAbout }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const introductionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollToAbout]);

  return (
    <div
      id="introductionComponent"
      className="h-screen py-16 sm:justify-center sm:items-center sm:h-full md:h-screen "
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="sm:flex flex-row-reverse  sm:justify-center sm:items-center md:h-full md:justify-between">
        {/* Images Container */}
        <div className="sm:w-2/5 md:w-2/5 lg:w-2/5 ">
          {screenSize <= 768 ? (
            <div className="h-3/5 object-cover sm:h-3/5 md:w-full lg:h-3/5  ">
              {/* md:border-4 md:border-red-600 lg:border-4 border-brown-800 */}
              <img
                alt="ai-img"
                loading="lazy"
                src={file2}
                className="h-[50vh] w-[100vw] md:w-full sm:w-full "
              />
            </div>
          ) : (
            <div className="w-full ">
              {/* md:border-4 md:border-red-600 lg:border-4 lg:border-brown-800 */}
              <img
                alt="ai-img"
                loading="lazy"
                src={IntroductionImage}
                className="mh-[50vh] w-[100vw] md:w-full sm:w-full"
              />
            </div>
          )}
        </div>
        {/* Content Container */}
        <div className="px-4 mt-4 sm:w-3/5 md:w-3/5 lg:ml-16 lg:w-3/5  ">
          <p
            className="font-lato text-2xl md:text-4xl lg:text-5xl xl:text-5xl  2xl:text-5xl xl:mb-4"
            style={{ color: "#4D658D" }}
          >
            {Constant.POWERING_TRANSFORMATION_WITH}
          </p>
          <p
            className="font-lato text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl  "
            style={{ color: "#1E3A5F" }}
          >
            {Constant.ARTIFICIAL_INTELLIGENCE}
          </p>
          <p
            style={{ color: "#374357" }}
            className="font-lato mt-7 md:text-xl xl:text-2xl"
          >
            {
              Constant.WE_HELP_YOU_TO_HARNESS_THE_POWER_OF_AI_FOR_A_BRIGHTER_TOMORROW
            }
          </p>
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
                style={{ border: "1px solid #0F1C2E ", borderRadius: "10px" }}
                className="font-lato text-base w-40 h-10 lg:w-64 lg:h-14 lg:text-xl"
              >
                {Constant.CONTACT_US}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {screenSize > 1024 ? (
        <div>
          <h1 className="font-lato text-center mt-6">{Constant.SCROLL}</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Introduction;
