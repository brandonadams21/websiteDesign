import React, { useContext } from "react";
import "../styles/heroSection.css";
import { ThemeContext } from "./ThemeContext";

const HeroSection = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="heroSection">
      <h1 className="header">Brandon Adams</h1>
      {/* <p className="subheader">Your welding solution</p> */}
      <button className="ctaButton" onClick={toggleTheme}>{theme === 'light' ? 'Modern' : 'Retro'}</button>
    </div>
  );
};

export default HeroSection;
