import React, { useEffect } from "react";
import "./CaseStudy.css";
import CaseStudyGrid from "../../../Utils/CaseStudyGrid";
import AOS from "aos";
import "aos/dist/aos.css";
const CaseStudy = () => {
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
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="case_study_mainContainer" id="casestudy">
      <div className="animation">
        <h1 className="case_study_heading">Case Studies</h1>

        <div className="case_study_container">
          {CaseStudyGrid.map((study, i) => {
            return (
              <div
                key={i}
                className="case_study_inner_containers"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="case_study_study_name">{study.case_study_name}</p>
                <svg
                  className="case_study_svg_file"
                  width="40"
                  height="40"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="29.5"
                    fill="white"
                    stroke="#0F1C2E"
                  />
                  <g clipPath="url(#clip0_218_2429)">
                    <path
                      d="M26.6154 15L23 18.525L34.7436 30L23 41.475L26.6154 45L42 30L26.6154 15Z"
                      fill="#0F1C2E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_218_2429">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
