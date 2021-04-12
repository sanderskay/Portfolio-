import React from "react";
import "../App.css";
import "./HeroSection.css";
import jobpic from "../images/jobpic.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>JULIAN SANDERS-KAY</h1>
      <p>React Developer</p>
      <img className="personalpic" src={jobpic} alt="" />
    </div>
  );
}

export default HeroSection;
