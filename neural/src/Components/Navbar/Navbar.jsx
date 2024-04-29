import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import humberger from "../../Images/humberger.png";
import close from "../../Images/Close.png";
import neuralhqblack from "../../Images/NeuralHQ_Logo.png";
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

  // Smooth scrolling function with offset
  const smoothScrollTo = (target, offset) => {
    const targetElement = document.querySelector(target);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    let adjustedOffset = offset; // Default offset value

    // Check if the window size is less than 1142
    if (window.innerWidth < 1025) {
      adjustedOffset += 220; // Increase offset value by 40
    }
    if (targetElement) {
      const targetPosition =
        targetElement.offsetTop - navbarHeight - adjustedOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      // Redirect to home page if target element does not exist
      window.location.href = "/";
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div data-testid="navbar">
      <nav className={`navbar ${scrollPosition > 20 ? "scrolled" : ""}`}>
        <div className="logo">
          <Link to={"/"}>
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
            <img
              src={humberger}
              alt="humberger"
              style={{ height: "30px", width: "30px" }}
            />
          )}
        </button>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/#about"
              className="Navbar_Tags"
              onClick={(e) => {
                smoothScrollTo("#about", 0);
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
                smoothScrollTo("#solution", -70);
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
                smoothScrollTo("#services", -50);
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
                smoothScrollTo("#casestudy", 5);
                closeMenu();
                e.preventDefault();
              }}
            >
              {Constant.CASE_STUDIES}
              <div className="line"></div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="Navbar_Tags" onClick={closeMenu}>
              {Constant.CONTACT_US}
              <div className="line"></div>
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && <div className="spacer"></div>}
    </div>
  );
};

export default Navbar;
