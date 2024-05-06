// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect } from "react";
// import Constant from "../../Utils/Constant";
// import GlobalStyle from "../../Utils/color";
// import { Link } from "react-router-dom";
// import twitter from "../../Images/twitter1.png";
// import logo from "../../Images/LogoFooter.png";
// import linkedin from "../../Images/linkedin.png";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Footer.css";
// function FooterLinks(props) {
//   console.log(props.text);
//   return (
//     <div className="footer_text_links">
//       <p className="links_or_footer" style={{ color: props.color }}>
//         {props.text}
//       </p>
//     </div>
//   );
// }

// const Footer = () => {
//   // You can also pass an optional settings object
//   // below listed default settings

//   return (
//     <footer
//       className="footer_container"
//       data-testid="footer"
//       style={{ scrollSnapAlign: "start" }}
//     >
//       <div className="footer_links_Logo">
//         <img
//           alt="footer_neuralhq_logo"
//           loading="lazy"
//           src={logo}
//           className="footer-logo-new"
//         />
//       </div>

//       <div className="footer_links_mainContainer">
//         <div className="footer_links_container">
//           <div>
//             <Link
//               to="/about"
//               style={{ textDecoration: "none", listStyle: "none" }}
//             >
//               <FooterLinks text={Constant.ABOUT_US} color={GlobalStyle.blue3} />
//             </Link>

//             <Link
//               to="/#services"
//               style={{ textDecoration: "none", listStyle: "none" }}
//             >
//               <FooterLinks
//                 text={Constant.OUR_SERVICES}
//                 color={GlobalStyle.blue3}
//               />
//             </Link>

//             <Link
//               to="/#solution"
//               style={{ textDecoration: "none", listStyle: "none" }}
//             >
//               <FooterLinks
//                 text={Constant.OUR_SOLUTIONS}
//                 color={GlobalStyle.blue3}
//               />
//             </Link>
//           </div>
//           <div>
//             <Link
//               to="/#casestudy"
//               style={{ textDecoration: "none", listStyle: "none" }}
//             >
//               <FooterLinks
//                 text={Constant.CASE_STUDIES}
//                 color={GlobalStyle.blue3}
//                 size={"18px"}
//               />
//             </Link>

//             <Link
//               to="/contact"
//               style={{ textDecoration: "none", listStyle: "none" }}
//             >
//               <FooterLinks
//                 text={Constant.CONTACT_US}
//                 color={GlobalStyle.blue3}
//                 size={"18px"}
//               />
//             </Link>

//             <Link
//               to="/about"
//               style={{ textDecoration: "none", listStyle: "none" }}
//             >
//               <FooterLinks text={Constant.OUR_TEAM} color={GlobalStyle.blue3} />
//             </Link>
//           </div>
//         </div>
//         <div className="follow_us_social_media_platform">
//           <div className="footerlinks_components">
//             <p style={{ color: GlobalStyle.blue3 }} className="Follow_us_on">
//               {Constant.FOLLOW_US_ON}
//             </p>

//             <div className="footer_logos" bor>
//               <a href="">
//                 <img src={twitter} className="footer_social_media" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/neuralhq/"
//                 target="_blank"
//               >
//                 <img src={linkedin} className="footer_social_media" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
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
    <div className="footer_text_links">
      <p className="links_or_footer" style={{ color: props.color }}>
        {props.text}
      </p>
    </div>
  );
}

const Footer = () => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init();
  }, []);

  // Smooth scroll to target
  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className="footer_container"
      data-testid="footer"
      style={{ scrollSnapAlign: "start" }}
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
            <Link to="/about">
              <FooterLinks
                text={Constant.ABOUT_US}
                color={GlobalStyle.blue3}
                onClick={() => scrollToTarget("about")}
              />
            </Link>
            <Link to="/#services" onClick={() => scrollToTarget("services")}>
              <FooterLinks
                text={Constant.OUR_SERVICES}
                color={GlobalStyle.blue3}
              />
            </Link>
            <Link to="/#solution" onClick={() => scrollToTarget("solution")}>
              <FooterLinks
                text={Constant.OUR_SOLUTIONS}
                color={GlobalStyle.blue3}
              />
            </Link>
          </div>
          <div>
            <Link
              to={"/#casestudy"}
              onClick={() => scrollToTarget("casestudy")}
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
                // onClick={() => scrollToTarget("contact")}
              />
            </Link>
            <Link to="/about" onClick={() => scrollToTarget("about")}>
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
              <a href="https://twitter.com/neuralhq" target="_blank">
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
