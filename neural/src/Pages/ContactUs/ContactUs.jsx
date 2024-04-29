/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from "react";
import Constant from "../../Utils/Constant";
import "./ContactUs.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <>
      <div>
        <div className="animation" data-aos="zoom-in">
          <div className="contact_us_container">
            <div className="input_box_contact_area">
              <p className="contact_us_heading">{Constant.CONTACT_US}</p>
              <div>
                <input type="text" placeholder={Constant.YOUR_NAME} />
              </div>
              <br />
              <div>
                <input
                  type="tel"
                  placeholder={Constant.MOBILE_NUMBER}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
              <br />
              <div>
                <input type="email" placeholder={Constant.EMAIL_ADDRESS} />
              </div>
              <br />
              <div>
                <textarea placeholder="Message"></textarea>
              </div>
              <br />
              <br />
              <div className="contact_button_div">
                <button className="btn_contact_us">{Constant.SUBMIT}</button>
              </div>
            </div>
            {/* for map filed and address */}
            <div className="contact_us_address_map">
              <div>
                <address className="address">{Constant.NEURAL_HQ}</address>
                <address className="address">{Constant.ADDRESS1}</address>
                <address className="address">{Constant.ADDRESS2}</address>
                <address className="address">{Constant.ADDRESS3}</address>
                <p className="mobile_number_contact_us">
                  {Constant.SANDEEP_SIR_MOBILE_NUMBER}
                </p>
              </div>

              <div className="embeded_map_container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.248800213581!2d77.56281402507508!3d12.891716887416372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15592ff947db%3A0xe0b34b19c276873!2sCentury%20Central%20Tower-E%2C%20CENTURY%20CENTRAL%2C%20Kanakapura%20Rd%2C%20Mango%20Garden%20Layout%2C%20Bikasipura%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1714137682448!5m2!1sen!2sin"
                  className="embeded_map"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
