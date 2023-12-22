import React, { useContext, useEffect, useState } from "react";
import "../styles/heroSection.css";
import { ThemeContext } from "./ThemeContext";

const HeroSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="heroSection">
      <h1 className="header">Hey, I'm Brandon.</h1>
      <h1 className="header">Software Developer.</h1>
      {/* <button className="brk-btn" onClick={toggleTheme}>
        {theme === "light" ? "Modern" : "Retro"}
      </button> */}
    </div>
  );
};

export default HeroSection;
