/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import "./AboutUs.css";
import Constant from "../../Utils/Constant";
import { Owner, Employees } from "../../Utils/TeamMember";
import linkedin from "../../Images/linkedin.png";
import Navbar from "../../Components/Navbar/Navbar";
import GlobalStyle from "../../Utils/color";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/LogoFooter.png";
import twitter from "../../Images/twitter1.png";

const AboutUSTeam = () => {
  const { pathname } = useLocation();

  const smoothScrollTo = (target, offset) => {
    const targetElement = document.querySelector(target);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    let adjustedOffset = offset;

    if (window.innerWidth < 768) {
      adjustedOffset += 260;
    }

    if (targetElement && pathname === "/") {
      const targetPosition =
        targetElement.offsetTop - navbarHeight - adjustedOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else if (pathname !== "/") {
      localStorage.setItem("scrollTarget", target);
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const scrollTarget = localStorage.getItem("scrollTarget");

    if (scrollTarget) {
      if (window.innerWidth < 767) {
        if (scrollTarget === "#solution") {
          smoothScrollTo(scrollTarget, -600);
        } else if (scrollTarget === "#casestudy") {
          smoothScrollTo(scrollTarget, -4000);
        } else if (scrollTarget === "#services") {
          smoothScrollTo(scrollTarget, -740);
        } else if (scrollTarget === "#about") {
          smoothScrollTo(scrollTarget, -240);
        }
      } else {
        smoothScrollTo(scrollTarget, -20);
      }

      setTimeout(() => {
        localStorage.removeItem("scrollTarget");
      }, 2000);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar showNavs={true} />
      <div className="about">
        <div className="about_container">
          <div className="about1">
            <h3 className="heading ">Our team</h3>
            <h1 className="about-description">
              We believe in the transformative power of technology to solve
              complex problems, enhance human creativity, and drive forward
              innovation in unprecedented ways.
            </h1>
            <h3 className="about-detail">
              Our team consists of passionate AI researchers, data scientists,
              engineers and visionaries dedicated to pushing the boundaries of
              what's possible with AI.{" "}
            </h3>
          </div>
          <div className="owner">
            <OwnerDetails />
          </div>
        </div>
        <div className="about2">
          {" "}
          <EmployeeDetails />
        </div>
      </div>
      <footer className="footer_container" data-testid="footer">
        <div className="footer_links_Logo">
          <img
            alt="footer_neuralhq_logo"
            loading="lazy"
            src={logo}
            className="footer-logo-new"
          />
        </div>
        <div className="footer_links_mainContainer">
          <div className="footer_links_container">
            <div>
              <Link
                onClick={() =>
                  smoothScrollTo("#about", window.innerWidth < 400 ? -80 : -20)
                }
              >
                <FooterLinks
                  text={Constant.ABOUT_US}
                  color={GlobalStyle.blue3}
                />
              </Link>
              <Link
                onClick={() =>
                  smoothScrollTo(
                    "#services",
                    window.innerWidth < 400 ? -840 : -20
                    //740
                  )
                }
              >
                <FooterLinks
                  text={Constant.OUR_SERVICES}
                  color={GlobalStyle.blue3}
                />
              </Link>
              <Link
                onClick={() =>
                  smoothScrollTo(
                    "#solution",
                    window.innerWidth < 400 ? -280 : -20
                  )
                }
              >
                <FooterLinks
                  text={Constant.OUR_SOLUTIONS}
                  color={GlobalStyle.blue3}
                />
              </Link>
            </div>
            <div>
              <Link
                onClick={() =>
                  smoothScrollTo(
                    "#casestudy",
                    window.innerWidth < 400 ? -2400 : -20
                  )
                }
              >
                <FooterLinks
                  text={Constant.CASE_STUDIES}
                  color={GlobalStyle.blue3}
                  size={"18px"}
                />
              </Link>
              <Link to="/contact">
                <FooterLinks
                  text={Constant.CONTACT_US}
                  color={GlobalStyle.blue3}
                  size={"18px"}
                />
              </Link>
              <Link to="/about">
                <FooterLinks
                  text={Constant.OUR_TEAM}
                  color={GlobalStyle.blue3}
                />
              </Link>
            </div>
          </div>
          <div className="follow_us_social_media_platform">
            <div className="footerlinks_components">
              <p style={{ color: GlobalStyle.blue3 }} className="Follow_us_on">
                {Constant.FOLLOW_US_ON}
              </p>
              <div className="footer_logos">
                <a
                  href="https://twitter.com/neuralhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="twitter"
                    className="footer_social_media"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/neuralhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="footer_social_media"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUSTeam;

function FooterLinks(props) {
  return (
    <div className="footer_text_links">
      <p className="links_or_footer" style={{ color: props.color }}>
        {props.text}
      </p>
    </div>
  );
}

function OwnerDetails() {
  return (
    <div className="owner-container">
      {Owner.map((el, i) => {
        return (
          <div key={i} className="owner-card">
            <img
              src={el.img}
              alt={`${el.teamMember}${el.Linkedin}`}
              className="owner-img"
            />
            <p className="teammember">{el.teamMember}</p>
            <div className="owner-details">
              <p className="designation">{el.Designation}</p>
              <a
                href={`${el.Linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin-img"
                  className="linkedin-img"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function EmployeeDetails() {
  return (
    <div className="employee">
      {Employees.map((el, i) => {
        return (
          <div key={i} className="owner-card">
            <img
              src={el.img}
              alt={`${el.teamMember}${el.Linkedin}`}
              className="owner-img"
            />
            <p className="teammember">{el.teamMember}</p>
            <div className="owner-details">
              <p className="designation">{el.Designation}</p>
              <a
                href={`${el.Linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin-img"
                  className="linkedin-img"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
