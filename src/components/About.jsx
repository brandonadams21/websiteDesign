import React from "react";
import "../styles/About.css"; // Make sure to update this CSS file as shown below

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content right">
            <h2>Lead Full Stack Software Developer</h2>
            <h3>VK Integrated Systems</h3>
            <p>2023-present</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <h2>Full Stack Software Developer</h2>
            <h3>Joint Special Operations Command, United States Army</h3>
            <p>2022-2023</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <h2>Penn State University</h2>
            <h3>Software Engineering</h3>
            <p>2022-Present</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content left">
            <h2>Galavnize Inc.</h2>
            <h3>Software Development Immersive Course</h3>
            <p>2022-2022</p>
          </div>
        </div>
        {/* Add more timeline items here */}
      </div>
    </div>
  );
};

export default AboutUs;
