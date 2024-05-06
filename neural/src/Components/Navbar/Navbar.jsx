import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Link from "react-anchor-link-smooth-scroll";
import close from "../../Images/Close.png";

import Constant from "../../Utils/Constant";
import NavbarLogo from "../../Images/NeuralHq1.png";

const Navbar = ({ showNavs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollTo = (target, offset) => {
    const targetElement = document.querySelector(target);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    console.log(navbarHeight, "navbarHeight");
    console.log(targetElement.offsetTop, "TARGETeLEMENT");
    let adjustedOffset = offset;

    if (window.innerWidth < 768) {
      adjustedOffset += 260;
    }
    if (targetElement) {
      const targetPosition =
        targetElement.offsetTop - navbarHeight - adjustedOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/";
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  console.log(showNavs, "show******************");
  return (
    <div data-testid="navbar">
      <nav className={`navbar ${scrollPosition > 20 ? "scrolled" : ""}`}>
        <div className="logo">
          <Link
            to="/#introductionComponent"
            onClick={(e) => {
              smoothScrollTo("#introductionComponent", -20);
              closeMenu();
              e.preventDefault();
            }}
          >
            <img className="navbar_logo" src={NavbarLogo} alt="website-name" />
          </Link>
        </div>
        <button
          style={{ backgroundColor: "transparent", border: "none" }}
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <img
              src={close}
              alt="close"
              style={{ height: "30px", width: "30px" }}
            />
          ) : (
            <svg
              style={{ marginTop: "3px" }}
              width="30"
              height="30"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="#374357"
              />
            </svg>
          )}
        </button>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          {showNavs && (
            <>
              <li>
                <Link
                  to="/#about"
                  className="Navbar_Tags"
                  onClick={(e) => {
                    smoothScrollTo("#about", -20);
                    closeMenu();
                    e.preventDefault();
                  }}
                >
                  {Constant.ABOUT_US}
                  <div className="line"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/#solution"
                  className="Navbar_Tags"
                  onClick={(e) => {
                    smoothScrollTo("#solution", -20);
                    closeMenu();
                    e.preventDefault();
                  }}
                >
                  {Constant.OUR_SOLUTIONS}
                  <div className="line"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="Navbar_Tags"
                  onClick={(e) => {
                    smoothScrollTo("#services", -20);
                    closeMenu();
                    e.preventDefault();
                  }}
                >
                  {Constant.OUR_SERVICES}
                  <div className="line"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/#casestudy"
                  className="Navbar_Tags"
                  onClick={(e) => {
                    smoothScrollTo("#casestudy", 0);
                    closeMenu();
                    e.preventDefault();
                  }}
                >
                  {Constant.CASE_STUDIES}
                  <div className="line"></div>
                </Link>
              </li>
            </>
          )}

          {showNavs ? (
            <li>
              <Link to="/contact" className="Navbar_Tags" onClick={closeMenu}>
                {Constant.CONTACT_US} <div className="line"></div>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/contact" className="Navbar_Tags" onClick={closeMenu}>
                {Constant.CONTACT_US}
                <div className="line"></div>
              </Link>
            </li>
          )}

          <li></li>
        </ul>
      </nav>
      {isOpen && <div className="spacer"></div>}
    </div>
  );
};

export default Navbar;
