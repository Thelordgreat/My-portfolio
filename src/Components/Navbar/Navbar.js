import React from 'react';
import "./Navbar.css"
import logo from "../../Images/Logo.png";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_content">
        <h1 className='logo'>
          <img src={logo} alt="" />
          thelordgreat
        </h1>

        <ul className='links'>
          <li><Link to='/'>Portfolio</Link></li>
          <li><Link to='/'>Experience</Link></li>
          <li><Link to='/'>Skills</Link></li>
        </ul>

        <a href="/" className='contact_btn'>Contact</a>

        <div className='mobile_icon'>
          <GiHamburgerMenu size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar