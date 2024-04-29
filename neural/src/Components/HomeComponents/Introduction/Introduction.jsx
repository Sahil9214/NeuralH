import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Constant from "../../../Utils/Constant";
import "./Introduction.css";
import IntroductionImage from "../../../Images/file.png";
import file2 from "../../../Images/file2.png";

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

  return <p className="Introduction_description">{displayText}</p>;
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
    <div className="introduction_container" ref={introductionRef}>
      <div className="introduction_inner_container">
        <p className="powering_transformation_with">
          {Constant.POWERING_TRANSFORMATION_WITH}
        </p>

        <p className="artificial_intelligence">
          {Constant.ARTIFICIAL_INTELLIGENCE}
        </p>

        <TypingText
          text={
            Constant.WE_HELP_YOU_TO_HARNESS_THE_POWER_OF_AI_FOR_A_BRIGHTER_TOMORROW
          }
        />

        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            fontStyle: "none",
            color: "#0F1C2E",
          }}
        >
          <div className="introduction_contact_us">
            <p className="introduction_contact_us_text">
              {Constant.CONTACT_US}
            </p>
          </div>
        </Link>
      </div>
      {/* //For image */}
      {screenSize < 768 ? (
        <div className="introduction_img">
          <img alt="ai-img" loading="lazy" src={file2} />
        </div>
      ) : (
        <div className="introduction_img">
          <img alt="ai-img" loading="lazy" src={IntroductionImage} />
        </div>
      )}
    </div>
  );
};

export default Introduction;
