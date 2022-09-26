import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo.png";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
// import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <a href="/" className="logo">
          <img src={logo} alt="" />
          <h3>Thelordgreat</h3>
        </a>

        <div className="second">
          <h3>Resources</h3>
          <ul>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#experience">
              <li>Resume</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>

        <div className="third">
          <h3>Contact</h3>
          <ul>
            <li>Phone</li>
            <li>Email</li>
            <li>Address</li>
          </ul>
        </div>

        <div className="fourth">
          <h3>Libraries</h3>
          <ul>
            <li>Nextjs</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="fifth">
          <h3 className="socials">Socials</h3>
          <div className="socials_icons">
            <a href="https://twitter.com/thelordgreat" target={" _blank "}>
              <FiTwitter className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/great-okafor-348b39220/"
              target={" _blank "}
            >
              <FiLinkedin className="icon" />
            </a>

            <a href="https://github.com/Thelordgreat" target={" _blank "}>
              <FiGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
