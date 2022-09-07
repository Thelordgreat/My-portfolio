import React from "react";
import "./Contact.css";
import { BsHouseDoor } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import vector from "../../Images/Vector.png";

const Contact = () => {
  return (
    <section>
      <div className="contact_container" id="contact">
        <h2>Contact Me</h2>

        <div className="contact_content">
          <div className="contact_boxes">
            <div className="box">
              <BsHouseDoor className="icon" />
              <p>Ikeja,Lagos</p>
            </div>
            <div className="box">
              <FiPhoneCall className="icon" />
              <p>+2349055465302</p>
            </div>
            <div className="box">
              <FaRegEnvelope className="icon" />
              <p>greatokafor9@gmail.com</p>
            </div>
          </div>

          <div className="contact_form">
            <form>
              <div className="inputs">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
              </div>

              <input
                type="text"
                placeholder="Type Message"
                className="message"
              />

              <div className="button">
                <a href="/" className="btn">
                  Send Message
                  <img src={vector} alt="" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
