import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo.png";
import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";

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
            <Link href="/contact">
              <li>Portfolio</li>
            </Link>
            <Link href="/contact">
              <li>Resume</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
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
            <a href="https://twitter.com">
              <FiTwitter className="icon" />
            </a>
            <a href="https://instagram.com">
              <FiInstagram className="icon" />
            </a>
            <a href="https://github.com">
              <FiGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
