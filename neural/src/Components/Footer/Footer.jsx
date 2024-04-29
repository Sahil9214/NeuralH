/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Constant from "../../Utils/Constant";
import GlobalStyle from "../../Utils/color";
import { Link } from "react-router-dom";
import twitter from "../../Images/twitter1.png";
import logo from "../../Images/LogoFooter.png";
import linkedin from "../../Images/linkedin.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
function FooterLinks(props) {
  console.log(props.text);
  return (
    <div className="footer_components">
      <p className="links_or_footer" style={{ color: props.color }}>
        {props.text}
      </p>
    </div>
  );
}

const Footer = () => {
  // You can also pass an optional settings object
  // below listed default settings

  return (
    <footer className="footer_container" data-testid="footer">
      <div className="animation" data-aos="zoom-in">
        <div className="footer_links_Logo">
          <img
            alt="footer_neuralhq_logo"
            loading="lazy"
            src={logo}
            className="footer-logo-new"
          />
        </div>
      </div>
      <div className="footer_links_mainContainer">
        <div className="footer_links_container">
          <div>
            <Link
              to="/about"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <FooterLinks text={Constant.ABOUT_US} color={GlobalStyle.blue3} />
            </Link>
            <br />
            <Link to="/" style={{ textDecoration: "none", listStyle: "none" }}>
              <FooterLinks
                text={Constant.OUR_SERVICES}
                color={GlobalStyle.blue3}
              />
            </Link>
            <br />
            <Link to="/" style={{ textDecoration: "none", listStyle: "none" }}>
              <FooterLinks
                text={Constant.OUR_SOLUTIONS}
                color={GlobalStyle.blue3}
              />
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none", listStyle: "none" }}>
              <FooterLinks
                text={Constant.CASE_STUDIES}
                color={GlobalStyle.blue3}
                size={"18px"}
              />
            </Link>
            <br />
            <Link
              to="/contact"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <FooterLinks
                text={Constant.CONTACT_US}
                color={GlobalStyle.blue3}
                size={"18px"}
              />
            </Link>
            <br />
            <Link
              to="/about"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <FooterLinks text={Constant.OUR_TEAM} color={GlobalStyle.blue3} />
            </Link>
          </div>
        </div>
        <div className="follow_us_social_media_platform">
          <div className="footerlinks_components">
            <p style={{ color: GlobalStyle.blue3 }} className="Follow_us_on">
              {Constant.FOLLOW_US_ON}
            </p>
            <div className="footer_logos" bor>
              <a href="">
                <img src={twitter} className="footer_social_media" />
              </a>
              <a
                href="https://www.linkedin.com/company/neuralhq/"
                target="_blank"
              >
                <img src={linkedin} className="footer_social_media" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
