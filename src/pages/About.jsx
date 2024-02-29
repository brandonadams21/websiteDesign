import React from "react";
import "../styles/About.css"; // Assuming you will update this CSS file as described below
import HeroSection from "../components/HeroSection";

const Work = () => {
  return (
    <div className="about-body">
      <h2 style={{textAlign: 'center'}} className="about-header">Who am I?</h2>
      <h3>I'm a Software Developer working from Clarksville, Tennessee.</h3>
      <div>
        Over the past 2+ years, I have built multiple applications for the
        defense sector which include full stack development, UI/UX design,
        server management, and mobile development.
      </div>
      <h2 className="about-header">My recent experiences</h2>
      <div className="history-block">
        <h4 className="history-company">VK Integrated Systems</h4>
        <div className="history-role">Lead Software Developer</div>
        <div className="history-description">
          Design, build, and ship high quaility websites and mobile apps for
          clients such as local government agenices, event centers, and more.
          Provide leadership within engineering department through close
          collaboration, knowledge shares, and spearheading the development of
          internal tools such as ticketing systems and automated server
          deployments.
        </div>
      </div>
      <div className="history-block">
        <h4 className="history-company">Joint Special Operations Command</h4>
        <div className="history-role">Full Stack Software Developer</div>
        <div className="history-description">
          Developed and styled interactive web application which allowed mission
          planning to be more effiecent and effective.
        </div>
      </div>
      <div className="history-block">
        <h4 className="history-company">Freelancer</h4>
        <div className="history-role">Software Developer</div>
        <div className="history-description">
          Develope and design web and mobile apps for clients that meet their
          needs. Give small businesses the opportunity to have modern
          sophisticated applications at low costs.
        </div>
      </div>
      <h2 className="about-header">
        Let's talk together if my experiences align with your goals.
      </h2>
      <div className="collab-block">
        I have a passion for the work I do. I have an even bigger passion for
        helping people. If my skills will help you achieve your goals then I'd
        love to talk.
      </div>
      <div className="collab-box">
        <div className="collab-number">01</div>
        <div className="collab-header">Make it</div>
        <div className="collab-text">
          I sketch wireframes and make prototypes. Talking through tactile
          designs existing in the browser is worth its weight. Design tools only
          carry you so far; the rest should be realized with a link my team can
          rally around.
        </div>
        <div className="collab-number">01</div>
        <div className="collab-header">Make it</div>
        <div className="collab-text">
          I sketch wireframes and make prototypes. Talking through tactile
          designs existing in the browser is worth its weight. Design tools only
          carry you so far; the rest should be realized with a link my team can
          rally around.
        </div>
        <div className="collab-number">01</div>
        <div className="collab-header">Make it</div>
        <div className="collab-text">
          I sketch wireframes and make prototypes. Talking through tactile
          designs existing in the browser is worth its weight. Design tools only
          carry you so far; the rest should be realized with a link my team can
          rally around.
        </div>
        <div className="collab-number">01</div>
        <div className="collab-header">Make it</div>
        <div className="collab-text">
          I sketch wireframes and make prototypes. Talking through tactile
          designs existing in the browser is worth its weight. Design tools only
          carry you so far; the rest should be realized with a link my team can
          rally around.
        </div>
        
      </div>
    </div>
  );
};

export default Work;
