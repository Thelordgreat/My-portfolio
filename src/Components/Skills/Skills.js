import React from "react";
import "./Skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Reactimg from "../../Images/react.png";
import Html from "../../Images/html.png";
import Js from "../../Images/js.png";
import Nextjs from "../../Images/nextjs.png";
import Bootstrap from "../../Images/bootstrap.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill_content">
        <h2>Skills</h2>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="skill_slider"
          spaceBetween={40}
          slidesPerView={3}
        >
          <SwiperSlide className="slide">
            <img src={Reactimg} alt="React" />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={Html} alt="React" />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={Js} alt="React" />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={Nextjs} alt="React" />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={Bootstrap} alt="React" />
          </SwiperSlide>

          <div></div>
          <div></div>
          <div></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
