import React from "react";
import "./Navbar.css";
import logo from "../../Images/Logo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_content">
        <a href="#header">
          <h1 className="logo">
            <img src={logo} alt="" />
            thelordgreat
          </h1>
        </a>

        <ul className="links">
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="experience">Experience</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
        </ul>

        <div className="btn_container">
          <Toggle/>
          <a href="#contact" className="contact_btn">
            Contact
          </a>
        </div>

        <div className="mobile_icon">
          <GiHamburgerMenu size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
