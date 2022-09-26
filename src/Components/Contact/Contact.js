import React, { useRef } from "react";
import "./Contact.css";
import { BsHouseDoor } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import vector from "../../Images/Vector.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9asr2w1",
      "template_kb656fo",
      form.current,
      "DwPdl7kceozGrckrp"
    );
    e.target.reset();
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputs">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <input
                type="text"
                name="message"
                placeholder="Type Message"
                className="message"
              />

              <div className="btn_area">
                <button type="submit" className="btn">
                  Send Message
                  <img src={vector} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
