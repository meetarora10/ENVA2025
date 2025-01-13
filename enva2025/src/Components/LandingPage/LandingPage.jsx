import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="bgContainer">
      <div className="topSection">
        <h1 className="heading">ENVA'25</h1>
        <img src="/ENVA-image.png" className="image" alt="" />
      </div>
      <button className="cta-button">EXPLORE EVENTS</button>

      <h1 className="dateSection">
        31<sup>st</sup>
        <span>JANUARY | </span>1<sup>st</sup>FEBRUARY
      </h1>
    </div>
  );
};

export default LandingPage;
