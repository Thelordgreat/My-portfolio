import React from "react";
import "./Header.css";
import Hero from "../../Images/hero image 1.png";
import { FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";

const Header = () => {
  return (
    <section>
      <div className="hero_content">
        <div className="hero_texts">
          <h4>Hello i'm</h4>
          <h1>Great Okafor</h1>
          <h4 className="title">Front-end Developer</h4>

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
    </section>
  );
};

export default Header;
