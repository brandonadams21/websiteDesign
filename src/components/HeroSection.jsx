import React, { useContext, useEffect, useState } from "react";
import "../styles/heroSection.css";
import { ThemeContext } from "./ThemeContext";
import Typewriter from "./Typewriter";

const HeroSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="heroSection">
      <h1 className="header">
        <Typewriter text="Dive into the Digital Dystopia" delay={100} />
      </h1>
      <button className="brk-btn" onClick={toggleTheme}>
        {theme === "light" ? "Modern" : "Retro"}
      </button>
    </div>
  );
};

export default HeroSection;
