import React from "react";
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <h1 className="header">Business Made Easy.</h1>
      <p className="subheader">
        Transforming your vision into a stunning digital reality with our web
        design expertise.
      </p>
      <button className="ctaButton">Get Started</button>
    </div>
  );
};

export default HeroSection;
