import React from "react";
import "../styles/Tech.css"; // Your updated CSS file

const Skills = () => {
  const techs = [
    { name: "React", color: "#61DBFB", }, // Add the rest with their respective colors and logos
    { name: "React Native", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "JavaScript", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "TypeScript", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "HTML", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "CSS", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "NodeJS", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Bash", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Firebase", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "MongoDB", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Digital Ocean", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Python", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Sass", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Stripe", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "UFW", color: "#61DBFB" }, // Add the rest with their respective colors and logos
    { name: "Fail2Ban", color: "#61DBFB" }, // Add the rest with their respective colors and logos

  ];

  return (
    <div className="skills-container">
      <h2>SKILLS</h2>
      <div className="technologies-grid">
        {techs.map((tech, index) => (
          <div key={index} className="tech" style={{ borderColor: tech.color }}>
            {/* Place SVG or image tag for logo here */}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
