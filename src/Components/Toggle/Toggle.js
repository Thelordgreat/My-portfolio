import React from "react";
import "./Toggle.css";
import moon from "../../Images/moon.png"

const Toggle = () => {
  return (
    <div className="toggle">
      <a href="/" className="theme_toggle">
        Light theme
        <img src={moon} alt="" />
      </a>
    </div>
  );
};

export default Toggle;
