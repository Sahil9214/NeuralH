/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Constant from "../../../Utils/Constant";
import "./GenerativeAi.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import bulb from "../../../Images/BulbImage.png";
import generativeImage from "../../../Images/file1.png";
import generativeImageMobile from "../../../Images/generative_ai_responsive.png";
import "aos/dist/aos.css";
import mobileImage from "../../../Images/mobile-responsive.png";
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
    }, 50); // Adjust the interval to control typing speed

    return () => clearInterval(typingInterval);
  }, [text]);

  return <p className="generative_description">{displayText}</p>;
};

const GenerativeAi = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init();

    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 500,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="generativeai_container" id="solution">
      <div
        className="generative_ai_container"
        data-aos={isMobile ? "" : "fade-up"}
        data-aos-anchor-placement={isMobile < 768 ? "" : "bottom-bottom"}
      >
        <p className="generative_ai">{Constant.OUR_SOLUTIONS}</p>
        {isMobile < 768 ? "" : <br />}
        {/* <p className="our_solutions_context">
          {Constant.OUR_SOLUTIONS_CONTEXT}
        </p> */}

        <p className="generative_description">
          {Constant.OUR_SOLUTIONS_DESCRIPTION1}
        </p>
        <TypingText text={Constant.OUR_SOLUTIONS_DESCRIPTION2} />
        <div className="generative_contact_us">
          <Link
            to="/contact"
            style={{ textDecoration: "none", listStyle: "none" }}
          >
            <p className="generative_us_text">{Constant.CONTACT_US}</p>
          </Link>
        </div>
      </div>
      <div className="generative_img">
        {isMobile ? (
          <img
            className="generative_img_inside_second_img_mobile_views"
            alt="ai-image"
            src={mobileImage}
            loading="lazy"
          />
        ) : (
          <>
            <img
              className="generative_img_inside_first_img"
              alt="ai-image"
              src={generativeImage}
              loading="lazy"
            />
            <img
              className="generative_img_inside_second_img"
              alt="ai-image"
              src={bulb}
              loading="lazy"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GenerativeAi;
