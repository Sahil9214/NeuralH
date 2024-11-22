/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import "./AboutUs.css";

import { Owner } from "../../Utils/TeamMember";
import linkedin from "../../Images/linkedin.png";
import Navbar from "../../Components/Navbar/Navbar";

import { useLocation } from "react-router-dom";

import twitter from "../../Images/twitter1.png";
import Infinity from "../../Images/Infinitylogo.png";
import companyLogo from "../../Images/About-footer-logo.png";
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
            <AboutFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUSTeam;

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
              loading="lazy"
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
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AboutFooter() {
  return (
    <footer
      className="max-w-8xl mx-auto px-4"
      style={{
        padding: `${window.innerWidth < 768 ? "45px 0 10px" : ""}`,
        margin: `${window.innerWidth < 768 ? "10vh 0" : ""}`,
        background: "var(--background-color)",
      }}
    >
      <div className="    max-w-screen-2xl mx-auto">
        {/* White Container */}
        <div className="rounded-lg p-6 mb-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center flex-col">
              <div className="flex flex-row gap-3 justify-center items-center">
                <img src={Infinity} alt="Infinity Logo" />
                <img src={companyLogo} alt="neuralHQ" />
              </div>
              <div
                className={`flex flex-row gap-1 mt-4 border-4 border-red-400 text-white ${
                  window.innerWidth < 768
                    ? "text-center justify-center gap-3"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                >
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="#64748B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ml-2">contact@neuralhq.ai</span>
              </div>
            </div>

            {/* Email */}

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/neuralhq"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-8 h-8 object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/neuralhq/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className={`object-contain ${
                    window.screenWidth < 768 ? "w-5 h-5" : "w-8 h-8"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`text-center text-sm flex justify-center items-center h-10 border-t border-gray-300 ${
            window.innerWidth < 768 ? "pt-6" : ""
          }`}
          style={{ borderTop: "1px solid rgb(100 116 139)" }}
        >
          <p className="text-white">
            &copy; {new Date().getFullYear()} neuralhq.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
