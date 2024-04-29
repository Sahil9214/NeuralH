import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AboutUsComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Constant from "../../../Utils/Constant";

const AboutUsComponent = () => {
  const fullText = Constant.ABOUT_US_DECSRIPTION_CONTEXT; // Replace with your full text
  const [text, setText] = useState("");
  const location = useLocation();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setText(fullText.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, 50); // Adjust the interval to control typing speed

        return () => clearInterval(typingInterval);
      }
    }, options);

    const target = document.querySelector(".aboutus_container");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [fullText]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="aboutus_container" id="about">
      <div className="aboutus_inner_container">
        <p className="aboutus">{Constant.ABOUT_US}</p>
        <div className="aboutus_context">
          <p className="aboutus_context_description">
            {Constant.ABOUT_US_CONTEXT}
          </p>
        </div>
        <div className="aboutus_our_team">
          <p className="aboutus_our_team_description">{text}</p>
        </div>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            fontStyle: "none",
          }}
        >
          <div className="about_us_know_more">
            <p className="about_us_know_more_text">Know More</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsComponent;
