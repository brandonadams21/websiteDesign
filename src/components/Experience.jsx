import React from "react";
import "../styles/Experience.css"; // Assuming you will update this CSS file as described below

const Experience = () => {
  return (
    <div className="ourWork">
      <h2 style={{ fontSize: "56px" }}>Projects</h2>
      <div className="cardsGrid">
        <div className="card">
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className="card-header">SAT</div>

          <p>
            Team Awarness Kit (TAK) servers as a service. A full stack
            application using a MERN stack to deploy automated servers within
            minutes!
          </p>
          <button className="visit-btn">Visit Website!</button>
        </div>
        <div className="card">
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
        <div className="card">
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
        <div className="card">
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

export default Experience;
