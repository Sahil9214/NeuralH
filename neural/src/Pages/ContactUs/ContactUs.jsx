/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Constant from "../../Utils/Constant";
import "./ContactUs.css";
import Navbar from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("Please type your name");
      return;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    } else if (message.trim() === "") {
      alert("Please type message");
      return;
    }

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
        else alert("notification: " + response.message);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
    setMobileNumber("");
  };

  return (
    <>
      <Navbar showNavs={false} />
      <div
        className="contact_us_container"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="input_box_contact_area">
          <p className="contact_us_heading">{Constant.CONTACT_US}</p>
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={Constant.YOUR_NAME}
            />
          </div>
          <br />
          <div>
            <input
              value={mobile_number}
              onChange={(e) => setMobileNumber(e.target.value)}
              type="tel"
              placeholder={Constant.MOBILE_NUMBER}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
          <br />
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={Constant.EMAIL_ADDRESS}
            />
          </div>
          <br />
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            ></textarea>
          </div>

          <div className="contact_button_div">
            <button className="btn_contact_us" onClick={handleSubmit}>
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

      <Footer />
    </>
  );
};

export default ContactUs;
