import React, { useEffect, useState } from "react";
import Constant from "../../Utils/Constant";
import GlobalStyle from "../../Utils/color";
import { Link } from "react-router-dom";
import twitter from "../../Images/twitter1.png";
import logo from "../../Images/LogoFooter.png";
import linkedin from "../../Images/linkedin.png";
import "./Footer.css";
import { useLocation } from "react-router-dom";

function FooterLinks(props) {
  return (
    <div className="footer_text_links">
      <p className="links_or_footer" style={{ color: props.color }}>
        {props.text}
      </p>
    </div>
  );
}

function Footer() {
  const { pathname } = useLocation();
  const [path, setPath] = useState("start");

  function scrollTarget(target) {
    const element = document.getElementById(target);

    if (element && pathname === "/") {
      const offset = target === "solution" && window.innerWidth < 768 ? 180 : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (pathname !== "/") {
      localStorage.setItem("footerTarget", target);
      window.location.href = "/";
    }
  }

  useEffect(() => {
    let moveToScrollTarget = localStorage.getItem("footerTarget");

    if (moveToScrollTarget) {
      scrollTarget(`${moveToScrollTarget}`);
      localStorage.removeItem("footerTarget");
    }
  }, []);
  useEffect(() => {
    if (pathname !== "/") {
      setPath("none");
    }
  }, []);
  return (
    <footer
      className="footer_container"
      data-testid="footer"
      style={{ scrollSnapAlign: "end" }}
    >
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
            <Link onClick={() => scrollTarget("about")}>
              <FooterLinks text={Constant.ABOUT_US} color={GlobalStyle.blue3} />
            </Link>
            <Link onClick={() => scrollTarget("services")}>
              <FooterLinks
                text={Constant.OUR_SERVICES}
                color={GlobalStyle.blue3}
              />
            </Link>
            <Link onClick={() => scrollTarget("solution")}>
              <FooterLinks
                text={Constant.OUR_SOLUTIONS}
                color={GlobalStyle.blue3}
              />
            </Link>
          </div>
          <div>
            <Link onClick={() => scrollTarget("casestudy")}>
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
              <FooterLinks text={Constant.OUR_TEAM} color={GlobalStyle.blue3} />
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
  );
}

export default Footer;
