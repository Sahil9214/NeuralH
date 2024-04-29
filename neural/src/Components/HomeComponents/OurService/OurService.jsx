/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./OurService.css";
import Constant from "../../../Utils/Constant";
import rectangle from "../../../Images/Rectangle.png";
import AOS from "aos";
import "aos/dist/aos.css";
import OurServive1 from "../../../Images/Our_Servive_1.png";
import OurServive2 from "../../../Images/Our_Service_2.png";
const OurService = () => {
  return (
    <div className="service" id="services">
      <h1 className="our_servive_heading">{Constant.OUR_SERVICES}</h1>
      <br />

      <div className="service_main_container">
        <div className="service_left_container">
          <InnersContainers
            OurServiceImg={OurServive1}
            heading={Constant.TAILORED_AI_ML_DEVELOPMENT}
            Description={Constant.TAILORED_AI_ML_DEVELOPMENT_DESCRIPTION}
          />
        </div>

        <div className="service_left_container">
          <InnersContainers
            OurServiceImg={OurServive2}
            heading={Constant.STRATEGIC_AI_CONSULTANCY}
            Description={Constant.STRATEGIC_AI_CONSULTANCY_DESCRIPTION}
          />
        </div>
      </div>
    </div>
  );
};

export default OurService;

function InnersContainers({ OurServiceImg, heading, Description }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= Description.length) {
        setDisplayText(Description.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust the interval to control typing speed

    return () => clearInterval(typingInterval);
  }, [Description]);

  return (
    <>
      <div>
        {/* For Image */}
        <div className="ourservice_img_container">
          <img
            src={OurServiceImg}
            alt={heading}
            loading="lazy"
            className="ourservice_img"
          />
        </div>

        <div className="our_service_paragraph">
          <p className="our_service_heading_paragraph">{heading}</p>
        </div>
        {/* For Description */}
        <div className="our_service_description">
          <p className="our_service_description_paragraph">{displayText}</p>
        </div>
      </div>
    </>
  );
}
