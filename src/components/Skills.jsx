import React from "react";
import "../styles/Tech.css"; // Your updated CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faPython,
  faScss,
  faNpm,
  faGitAlt,
  faDocker,
  faSass,
  faDigitalOcean,
  // ... import other specific icons you need
} from "@fortawesome/free-brands-svg-icons";
// Import any additional icons from other Font Awesome categories as needed

const Skills = () => {
  const techs = [
    { name: "React", color: "#61DBFB", icon: faReact },
    { name: "React Native", color: "#61DBFB", icon: faReact },
    { name: "JavaScript", color: "#F0DB4F", icon: faJsSquare },
    { name: "TypeScript", color: "#3178C6", icon: faJsSquare }, // TypeScript does not have a dedicated FA icon
    { name: "HTML", color: "#E34F26", icon: faHtml5 },
    { name: "CSS", color: "#264de4", icon: faCss3Alt },
    { name: "NodeJS", color: "#68A063", icon: faNodeJs },
    { name: "Python", color: "#68A063", icon: faPython },
    { name: "Bash", color: "#68A063", icon: faNodeJs },
    { name: "Firebase", color: "#68A063", icon: faNodeJs },
    { name: "UFW", color: "#68A063", icon: faNodeJs },
    { name: "Digital Ocean", color: "#68A063", icon: faDigitalOcean },
    { name: "Saas", color: "#68A063", icon: faSass },
    { name: "Ant D", color: "#68A063", icon: faNodeJs },
    { name: "MUI", color: "#68A063", icon: faPython },
    { name: "Tailwind", color: "#68A063", icon: faNodeJs },
    { name: "Git", color: "#68A063", icon: faGitAlt },
    { name: "Docker", color: "#68A063", icon: faDocker },
    { name: "TAK Servers", color: "#68A063", icon: faNodeJs },
    { name: "NPM", color: "#68A063", icon: faNpm },
    // ... add additional techs with their respective colors and icons
  ];

  return (
    <div className="skills-container">
      <h2>SKILLS</h2>
      <div className="technologies-grid">
        {techs.map((tech, index) => (
          <div key={index} className="tech" style={{ borderColor: tech.color }}>
            <FontAwesomeIcon icon={tech.icon} /> {/* This renders the icon */}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
