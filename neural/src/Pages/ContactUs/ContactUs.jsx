/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Constant from "../../Utils/Constant";
import "./ContactUs.css";
import Navbar from "../../Components/Navbar/Navbar";

import { useToast } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter1.png";
import companyLogo from "../../Images/About-footer-logo.png";
import Infinity from "../../Images/Infinitylogo.png";
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

    fetch("https://neuralhq-master-backend-6yifzhtasq-el.a.run.app/contact", {
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
      </div>
      <AboutFooter />
    </>
  );
};

export default ContactUs;

function AboutFooter() {
  return (
    <footer
      className="max-w-8xl mx-auto px-4"
      style={{
        padding: `${window.innerWidth < 768 ? "45px 0 10px" : ""}`,
        // margin: `${window.innerWidth < 768 ? "10vh 0" : ""}`,
        background: "var(--background-color)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
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
          <p className="text-white ">
            &copy; {new Date().getFullYear()} neuralhq.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
