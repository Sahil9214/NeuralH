import React, { useState, useEffect } from "react";
import Constant from "../../Utils/Constant";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Owner, Employees } from "../../Utils/TeamMember";
import linkedin from "../../Images/linkedin.png";

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

  return <p className="about_us_our_team_description_context">{displayText}</p>;
};

const AboutUSTeam = () => {
  const [showAllEmployees, setShowAllEmployees] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="about_us_page">
      <div className="about_us_container">
        <div className="about_us_inner_container">
          <p className="about_us_our_team">{Constant.OUR_TEAM}</p>
          <p className="about_us_our_team_description">
            {Constant.ABOUT_US_DESCRIPTION}
          </p>
          <TypingText text={Constant.ABOUT_US_DECSRIPTION_CONTEXT} />
          <div className="owner" data-testid="owner">
            {Owner.map((team, i) => (
              <div key={i} className="owner_team" data-aos={`${team.effect}`}>
                <img src={team.img} loading="lazy" alt={`${team.Linkedin}`} />
                <p className="team_member">{team.teamMember}</p>
                <br />
                <div className="owner_desgination">
                  <p className="owner_paragraph">{team.Designation}</p>
                  <a href={`${team.Linkedin}`} target="_blank">
                    <img
                      style={{ cursor: "pointer" }}
                      src={linkedin}
                      alt="linkedin-img"
                      className="owner-linkedin"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="employees-container">
        <div className="employees" data-testid="employees">
          {Employees.slice(0, showAllEmployees ? Employees.length : 4).map(
            (team, i) => (
              <div
                className="employees_team"
                key={i}
                data-aos={`${team.effect}`}
              >
                <img src={`${team.img}`} loading="lazy" />
                <p className="team_member">{team.teamMember}</p>
                <br />
                <div className="description_of_desgination">
                  <p className="designation_paragraph">{team.Designation}</p>
                  <a href={`${team.Linkedin}`}>
                    <img
                      src={linkedin}
                      alt="linkedin-img"
                      className="owner-linkedin"
                    />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
        {/* {Employees.length > 4 && !showAllEmployees && (
          <div className="see-more-container">
            <button
              className="btn_see_more"
              onClick={() => setShowAllEmployees(true)}
            >
              Show More
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AboutUSTeam;
