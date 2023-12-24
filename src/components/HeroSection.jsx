import React, { useContext, useEffect, useState } from "react";
import "../styles/heroSection.css";

const HeroSection = () => {

  return (
    <div className="heroSection">
      {/* <h1 className="header">Hey, I'm Brandon.</h1>
      <h1 className="header">Software Developer.</h1> */}
      <h1 className="header">
        <p>
          <span class="text">H</span>
          <span class="text">e</span>
          <span class="text">y</span>
          <span class="text">,</span>
          <span class="text" style={{ marginLeft: "10px" }}>
            I
          </span>
          <span class="text">'</span>
          <span class="text">m</span>
          <span class="text" style={{ marginLeft: "5px" }}>
            Brandon
          </span>
          <span class="text">.</span>
        </p>

        <p style={{ height: "0px", paddingTop: "0px" }}>
          <span class="text">S</span>
          <span class="text">o</span>
          <span class="text">f</span>
          <span class="text">t</span>
          <span class="text">w</span>
          <span class="text">a</span>
          <span class="text">r</span>
          <span class="text">e</span>
          <span class="text" style={{ marginLeft: "5px" }}>
            D
          </span>
          <span class="text">e</span>
          <span class="text">v</span>
          <span class="text">e</span>
          <span class="text">l</span>
          <span class="text">o</span>
          <span class="text">p</span>
          <span class="text">e</span>
          <span class="text">r</span>
          <span class="text">.</span>
        </p>
      </h1>
      <p className="hero-p">
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </p>
    </div>
  );
};

export default HeroSection;
