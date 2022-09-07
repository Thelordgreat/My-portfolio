import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience_container" id="experience">
      <div className="experience_content">
        <h2>Experience</h2>

        <div>
          <div className="long_line"></div>
          <div className="short_line"></div>
          <div className="short_line"></div>
          <div className="short_line"></div>

          <div className="experience">
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              deleniti numquam minus, repudiandae id voluptatum sit nisi tenetur
              laboriosam illo, accusamus.
            </div>
            <div className="company_space">
              <div className="company">Zuri team inc</div>
            </div>
          </div>

          <div className="experience">
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              deleniti numquam minus, repudiandae id voluptatum sit nisi tenetur
              laboriosam illo, accusamus.
            </div>
            <div className="company_space">
              <div className="company">Zuri team inc</div>
            </div>
          </div>

          <div className="experience">
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              deleniti numquam minus, repudiandae id voluptatum sit nisi tenetur
              laboriosam illo, accusamus.
            </div>
            <div className="company_space">
              <div className="company">Zuri team inc</div>
            </div>
          </div>


          <div className="btn">
            <a href="#download">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
