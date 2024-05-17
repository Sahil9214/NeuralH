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
      <div className="about_us_page">
        <div className="about_us_container">
          <div className="about_us_inner_container">
            <div className="about_us_inner_container_content">
              <p className="about_us_our_team">{Constant.OUR_TEAM}</p>
              <p className="about_us_our_team_description">
                {Constant.ABOUT_US_DESCRIPTION}
              </p>
              <p className="about_us_our_team_description_context">
                {Constant.ABOUT_US_KNOW_MORE_DESCRIPTION}
              </p>
            </div>
            <div className="owner" data-testid="owner">
              {Owner.map((team, i) => (
                <div key={i} className="owner_team">
                  <img src={team.img} loading="lazy" alt={`${team.Linkedin}`} />
                  <p className="team_member">{team.teamMember}</p>
                  <div className="owner_desgination">
                    <p className="owner_paragraph">{team.Designation}</p>
                    <a href={team.Linkedin} target="_blank">
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
            {Employees.map((team, i) => (
              <div className="employees_team" key={i}>
                <img src={`${team.img}`} loading="lazy" alt={team.teamMember} />
                <p className="team_member">{team.teamMember}</p>
                <div className="description_of_desgination">
                  <p className="designation_paragraph">{team.Designation}</p>
                  {team.teamMember === "Deependra Kumar" ? (
                    <img
                      src={linkedin}
                      alt="linkedin-img"
                      className="owner-linkedin"
                    />
                  ) : (
                    <a
                      href={
                        team.teamMember === "Deependra Kumar"
                          ? "# "
                          : team.Linkedin
                      }
                      target="_blank"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={linkedin}
                        alt="linkedin-img"
                        className="owner-linkedin"
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
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
