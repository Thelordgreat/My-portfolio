import React from 'react';
import "./Portfolio.css";
import site from "../../Images/webpage.png";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="portfolio_content">
        <h2>Portfolio</h2>

        <div className='portfolio_boxes'>
          <img src={site} alt="webpage" />
          <img src={site} alt="webpage" />
          <img src={site} alt="webpage" />
          <img src={site} alt="webpage" />
          <img src={site} alt="webpage" />
          <img src={site} alt="webpage" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio