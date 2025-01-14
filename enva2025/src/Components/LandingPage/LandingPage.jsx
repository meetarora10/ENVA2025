
import React, { useEffect } from "react";
import "./LandingPage.css"; // Add styles for the curtain here

const LandingPage = () => {
  useEffect(() => {
    const leftCurtain = document.querySelector(".curtain-left");
    const rightCurtain = document.querySelector(".curtain-right");
    const bgContainer = document.querySelector(".bgContainer");
  
    setTimeout(() => {
      leftCurtain.classList.add("open-left");
      rightCurtain.classList.add("open-right");
  
      setTimeout(() => {
        const curtainContainer = document.querySelector(".curtain-container");
        if (curtainContainer) {
          curtainContainer.style.display = "none";
        }
        if (bgContainer) {
          bgContainer.classList.add("loaded");
        }
      }, 2500);
    }, 500);
  }, []);

  return (
    <>
      {/* Curtain Animation */}
      <div className="curtain-container">
        <div className="curtain curtain-left"></div>
        <div className="curtain curtain-right"></div>
      </div>

      {/* Main Landing Page Content */}
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
    </>
  );
};

export default LandingPage;

