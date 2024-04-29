import React, { useEffect, useState } from "react";

import Constant from "../../../Utils/Constant";
import { Link } from "react-router-dom";
import "./AboutUsComponent.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsComponent = () => {
  const [text, setText] = useState("");
  const fullText = Constant.ABOUT_US_OUR_TEAM;

  useEffect(() => {
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
  }, [fullText]);
  useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="aboutus_container" id="about">
      <div className="animation">
        <div className="aboutus_inner_container">
          <p className="aboutus">{Constant.ABOUT_US}</p>
          <div className="aboutus_context">
            <p className="aboutus_context_description">
              {Constant.ABOUT_US_CONTEXT}
            </p>
          </div>
          <div className="aboutus_our_team">
            <p className="aboutus_our_team_description">
              {/* {Constant.ABOUT_US_OUR_TEAM} */}
              {text}
            </p>
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
    </div>
  );
};

export default AboutUsComponent;
