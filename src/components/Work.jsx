import React from "react";
import "../styles/Work.css"; // Assuming you will update this CSS file as described below

const Work = () => {
  return (
    <div className="ourWork">
      {/* <h2 style={{ fontSize: "56px" }}>Work</h2> */}
      <div className="cardsGrid">
        <div className="card-sat">
          <div className="card-header-company">VK Integrated Systems</div>
          <div className="card-header-project">SAT</div>
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="card-2">
          <div className="card-header-company">VK Integrated Systems</div>
          <div className="card-header-project">TAK Stack</div>
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="card-3">
          <div className="card-header-company">VK Integrated Systems</div>
          <div className="card-header-project">MARS</div>
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="card-4">
          <div className="card-header-company">Brandon Adams</div>
          <div className="card-header-project">Website</div>
          <img
            src="/images/sat_img.png"
            alt="SAT by VK Integrated Systems"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
