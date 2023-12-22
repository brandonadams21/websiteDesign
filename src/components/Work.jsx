import React from "react";
import "../styles/Work.css"; // Assuming you will update this CSS file as described below

const Work = () => {
  return (
    <div className="ourWork">
      <h2 style={{ fontSize: "56px" }}>Work</h2>
      <div className="cardsGrid">
        <div className="card-sat">
          <div className="card-header">VK Integrated Systems</div>
          <div className="card-header">SAT</div>
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        
        </div>
        <div className="card-2">
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className="card-header">TAK Stack</div>
          <p>
            Team Awarness Kit (TAK) servers as a service. A full stack
            application using a MERN stack to deploy automated servers within
            minutes!
          </p>
          <button className="visit-btn">Visit on Android!</button>
          <button className="visit-btn">Visit on iOS!</button>
        </div>
        <div className="card-3">
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className="card-header">MARS</div>
          <p>
            Team Awarness Kit (TAK) servers as a service. A full stack
            application using a MERN stack to deploy automated servers within
            minutes!
          </p>
          <button className="visit-btn">Contact for a demo!</button>
        </div>
        <div className="card-4">
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className="card-header">MARS</div>
          <p>
            Team Awarness Kit (TAK) servers as a service. A full stack
            application using a MERN stack to deploy automated servers within
            minutes!
          </p>
          <button className="visit-btn">Contact for a demo!</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
