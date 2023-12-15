import React from "react";
import "../styles/About.css"; // Make sure to update this CSS file as shown below

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h2>Experience</h2>
      <div className="timeline">
        {/* Add timeline items here */}
        <div className="timeline-item">
          <div className="timeline-content right">
            <div className="date right">2023-present</div>
            <h3>VK Integrated Systems</h3>
            <p>Lead Full Stack Software Developer</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="date left">2022-2023</div>
            <h3>Joint Special Operations Command, United States Army</h3>
            <p>Full Stack Software Developer</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="date left">2022-2023</div>
            <h3>Joint Special Operations Command, United States Army</h3>
            <p>Full Stack Software Developer</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <div className="date left">2022-2023</div>
            <h3>Joint Special Operations Command, United States Army</h3>
            <p>Full Stack Software Developer</p>
          </div>
        </div>
        {/* Repeat the structure for other items */}
      </div>
    </div>
  );
};

export default AboutUs;
