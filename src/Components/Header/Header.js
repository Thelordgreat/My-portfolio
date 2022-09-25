import React from "react";
import "./Header.css";
import Hero from "../../Images/hero image 1.png";
import { FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";

const Header = () => {
  return (
    <section id="header">
      {/*=== desktop layout ===== */}
      <div className="hero_content_desktop">
        <div className="hero_texts">
          <div>
            <span>Hello i'm</span>
            <span>Great Okafor</span>
            <span className="title">Front-end Developer</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
            ad ducimus blanditiis delectus inventore, minus sapiente nemo
            molestiae at ipsa ratione, maiores voluptate numquam dicta aliquid
            suscipit accusantium temporibus.
          </p>

          <div className="bottom">
            <h4>Find Me On</h4>
            <div className="social_icons">
              <FiInstagram className="icon" />
              <FiTwitter className="icon" />
              <FiGithub className="icon" />
            </div>
          </div>
        </div>

        <div className="hero_img_shadow">
          <img src={Hero} alt="" />
        </div>
      </div>

          {/*====== Mobile Layout =======*/}
      <div className="hero_content_mobile">
        <div className="text_container">
          <div className="intro">
            <span>Hello i'm</span>
            <span>Great Okafor</span>
            <span className="title">Front-end Developer</span>
          </div>

          <div className="hero_img_shadow">
            <img src={Hero} alt="" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
            ad ducimus blanditiis delectus inventore, minus sapiente nemo
            molestiae at ipsa ratione, maiores voluptate numquam dicta aliquid
            suscipit accusantium temporibus.
          </p>

          <div className="bottom">
            <h4>Find Me On</h4>
            <div className="social_icons">
              <FiInstagram className="icon" />
              <FiTwitter className="icon" />
              <FiGithub className="icon" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
