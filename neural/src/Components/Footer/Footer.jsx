// import React, { useEffect, useState } from "react";
// import Constant from "../../Utils/Constant";
// import GlobalStyle from "../../Utils/color";
// import { Link } from "react-router-dom";
// import twitter from "../../Images/twitter1.png";
// import logo from "../../Images/LogoFooter.png";
// import linkedin from "../../Images/linkedin.png";
// import "./Footer.css";
// import { useLocation } from "react-router-dom";

// function FooterLinks(props) {
//   return (
//     <div className="footer_text_links">
//       <p
//         className="links_or_footer"
//         style={{ color: props.color, fontWeight: "500" }}
//       >
//         {props.text}
//       </p>
//     </div>
//   );
// }

// function Footer() {
//   const { pathname } = useLocation();
//   const [path, setPath] = useState("start");

//   function scrollTarget(target) {
//     const element = document.getElementById(target);

//     if (element && pathname === "/") {
//       const offset = target === "solution" && window.innerWidth < 768 ? 180 : 0;
//       const elementPosition =
//         element.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition + offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     } else if (pathname !== "/") {
//       localStorage.setItem("footerTarget", target);
//       window.location.href = "/";
//     }
//   }

//   useEffect(() => {
//     let moveToScrollTarget = localStorage.getItem("footerTarget");

//     if (moveToScrollTarget) {
//       scrollTarget(`${moveToScrollTarget}`);
//       localStorage.removeItem("footerTarget");
//     }
//   }, []);
//   useEffect(() => {
//     if (pathname !== "/") {
//       setPath("none");
//     }
//   }, []);
//   return (
//     <footer
//       className="footer_container"
//       data-testid="footer"
//       style={{ scrollSnapAlign: "end" }}
//     >
//       <div
//         //className="footer_links_Logo"
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <img
//           alt="footer_neuralhq_logo"
//           loading="lazy"
//           //src={logo}
//           src="https://github.com/user-attachments/assets/c56094db-154e-405a-b84e-a1974ef61fec"
//           className="footer-logo-new"
//           style={{ width: "50%", margin: "auto" }}
//         />
//         <br />
//         <img
//           alt="footer_neuralhq_logo"
//           loading="lazy"
//           src={
//             "https://github.com/user-attachments/assets/a200743f-474d-4b91-8869-eb3fac95ed6a"
//           }
//           className="footer-logo-new"
//         />
//       </div>

//       <div className="footer_links_mainContainer">
//         <div className="footer_links_container">
//           <div>
//             <Link onClick={() => scrollTarget("about")}>
//               <FooterLinks text={Constant.ABOUT_US} color={GlobalStyle.blue3} />
//             </Link>
//             <Link onClick={() => scrollTarget("services")}>
//               <FooterLinks
//                 text={Constant.OUR_SERVICES}
//                 color={GlobalStyle.blue3}
//               />
//             </Link>
//             <Link onClick={() => scrollTarget("solution")}>
//               <FooterLinks
//                 text={Constant.OUR_SOLUTIONS}
//                 color={GlobalStyle.blue3}
//               />
//             </Link>
//           </div>
//           <div
//             style={{
//               border: "2px solid red",
//               gap: "20px",
//               display: "flex",
//               alignItems: "center",
//               flexDirection: "column",
//               margin: "auto",
//               gap: "30px",
//             }}
//           >
//             <Link to="/contact">
//               <FooterLinks
//                 text={Constant.CONTACT_US}
//                 color={GlobalStyle.blue3}
//                 size={"18px"}
//               />
//             </Link>
//             <Link to="/about">
//               <FooterLinks text={Constant.OUR_TEAM} color={GlobalStyle.blue3} />
//             </Link>
//           </div>
//         </div>
//         <div className="follow_us_social_media_platform">
//           <div className="footerlinks_components">
//             <p
//               style={{ color: `${GlobalStyle.blue3}`, fontWeight: "500" }}
//               className="Follow_us_on"
//             >
//               {Constant.FOLLOW_US_ON}
//             </p>
//             <div className="footer_logos">
//               <a
//                 href="https://twitter.com/neuralhq"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={twitter}
//                   alt="twitter"
//                   className="footer_social_media"
//                 />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/neuralhq/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={linkedin}
//                   alt="linkedin"
//                   className="footer_social_media"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter1.png";
import companyLogo from "../../Images/NeuralHq1.png";
const Footer = () => {
  return (
    <footer
      className="max-w-8xl mx-auto px-4"
      style={{
        scrollSnapAlign: "end",
        paddingTop: `${window.innerWidth < 768 ? "45px" : ""}`,
        paddingBottom: `${window.innerWidth < 768 ? "10px" : ""}`,
      }}
    >
      <div
        className="
      // max-w-8xl
      max-w-screen-2xl
       mx-auto "
      >
        {/* White Container */}
        <div className="bg-white rounded-lg  p-6 mb-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <div>
                <img src={companyLogo} alt="neuralHQ" />
                <div
                  className={`text-gray-600 flex flex-row gap-1  border-4 border-red-400 ${
                    window.innerWidth < 768
                      ? "text-center justify-center gap-3"
                      : ""
                  }`}
                >
                  {" "}
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
                  contact@neuralhq.ai
                </div>
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
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`text-center text-sm flex justify-center items-center h-10 border-t border-gray-300 ${
            window.screenWidth < 768 ? "pt-6" : ""
          }`}
          style={{ borderTop: "1px solid rgb(100 116 139)" }}
        >
          <p>© {new Date().getFullYear()} neuralhq.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
