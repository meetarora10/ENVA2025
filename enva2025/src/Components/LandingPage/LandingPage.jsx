import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="bgContainer">
      <div className="topSection">
        <img src="/ENVA-image.png" className="image" alt="" />
        <h1 className="heading">ENVA'25</h1>
      </div>
      <button className="cta-button">EXPLORE EVENTS</button>

      <h1 className="dateSection">
        29<sup>th</sup>
        <span>JANUARY - </span>30<sup>th</sup>JANUARY
      </h1>
    </div>
  );
};

export default LandingPage;
