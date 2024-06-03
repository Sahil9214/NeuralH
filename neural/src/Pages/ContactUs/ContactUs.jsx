/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Constant from "../../Utils/Constant";
import "./ContactUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import GlobalStyle from "../../Utils/color";
import { useToast } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter1.png";
import logo from "../../Images/LogoFooter.png";
import Footer from "../../Components/Footer/Footer";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const toast = useToast();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Please type your name";
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (message.trim() === "") {
      newErrors.message = "Please enter the message";
    }

    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors, "newErrors****************");
      setErrors(newErrors);

      Object.keys(newErrors).forEach((key) => {
        document.getElementById(key).classList.add("vibrate");
        setTimeout(() => {
          document.getElementById(key).classList.remove("vibrate");
        }, 500);
      });

      const firstErrorKey = Object.keys(newErrors)[0];
      const firstErrorMessage = newErrors[firstErrorKey];

      toast({
        title: "Error",
        description: `${firstErrorMessage} in the form.`,
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });

      return;
    }

    setErrors({});

    fetch("https://neuralhq-master-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile_number, message }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (!response.requestStatus) alert(response.error);
        else {
          toast({
            title: "Thank you",
            description: "Your message was successfully sent",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
          setName("");
          setEmail("");
          setMessage("");
          setMobileNumber("");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };
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
      if (window.innerWidth < 400) {
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
  return (
    <>
      <Navbar showNavs={true} />
      <div className="contact-matter">
        <div className="contact_us_container">
          <div className="input_box_contact_area">
            <p className="contact_us_heading">{Constant.CONTACT_US}</p>
            <div className="input_group">
              <input
                style={{ borderRadius: "10px" }}
                id="name"
                value={name}
                onChange={handleChange(setName, "name")}
                type="text"
                placeholder={Constant.YOUR_NAME}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error_mark">!</span>}
            </div>
            <br />
            <div className="input_group">
              <input
                style={{ borderRadius: "10px" }}
                id="mobile_number"
                value={mobile_number}
                onChange={handleChange(setMobileNumber, "mobile_number")}
                type="tel"
                placeholder={Constant.MOBILE_NUMBER}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <br />
            <div className="input_group">
              <input
                style={{ borderRadius: "10px" }}
                id="email"
                value={email}
                onChange={handleChange(setEmail, "email")}
                type="email"
                placeholder={Constant.EMAIL_ADDRESS}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error_mark">!</span>}
            </div>
            <br />
            <div className="input_group">
              <textarea
                style={{ borderRadius: "10px" }}
                id="message"
                value={message}
                onChange={handleChange(setMessage, "message")}
                placeholder="Message"
                className={errors.message ? "error" : ""}
              ></textarea>
              {errors.message && <span className="error_mark_textArea">!</span>}
            </div>
            <br />

            <div className="contact_button_div">
              <button
                className="btn_contact_us"
                style={{ borderRadius: "10px" }}
                onClick={handleSubmit}
              >
                {Constant.SUBMIT}
              </button>
            </div>
          </div>
          {/* for map filed and address */}
          <div className="contact_us_address_map">
            <div>
              <address className="address">{Constant.NEURAL_HQ}</address>
              <address className="address">{Constant.ADDRESS1}</address>
              <address className="address">{Constant.ADDRESS2}</address>
              <address className="address">{Constant.ADDRESS3}</address>
              <p className="address">{Constant.SANDEEP_SIR_EMAIL_ADDRESS}</p>
              <p className="mobile_number_contact_us">
                {Constant.SANDEEP_SIR_MOBILE_NUMBER}
              </p>
            </div>

            <div className="embeded_map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.248800213581!2d77.56281402507508!3d12.891716887416372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15592ff947db%3A0xe0b34b19c276873!2sCentury%20Central%20Tower-E%2C%20CENTURY%20CENTRAL%2C%20Kanakapura%20Rd%2C%20Mango%20Garden%20Layout%2C%20Bikasipura%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1714137682448!5m2!1sen!2sin"
                className="embeded_map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <footer className="footer_container1" data-testid="footer">
          <div className="footer_links_Logo1">
            <img
              alt="footer_neuralhq_logo"
              loading="lazy"
              src={logo}
              className="footer-logo-new"
            />
          </div>
          <div className="footer_links_mainContainer1">
            <div className="footer_links_container1">
              <div>
                <Link
                  onClick={() =>
                    smoothScrollTo(
                      "#about",
                      window.innerWidth < 768 ? -80 : -20
                    )
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
                      window.innerWidth < 768 ? -840 : -20
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
                      window.innerWidth < 768 ? -280 : -20
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
            <div className="follow_us_social_media_platform1">
              <div className="footerlinks_components1">
                <p
                  style={{ color: GlobalStyle.blue3 }}
                  className="Follow_us_on"
                >
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
    </>
  );
};

export default ContactUs;
function FooterLinks(props) {
  return (
    <div className="footer_text_links1">
      <p className="links_or_footer1" style={{ color: props.color }}>
        {props.text}
      </p>
    </div>
  );
}
