import React from "react";
import { Row, Col } from "antd";
import "../styles/About.css"; // Create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h2>Experience</h2>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <img
            src="https://via.placeholder.com/400"
            alt="Team"
            className="aboutUs-image"
          />
        </Col>
        <Col span={12}>
          <h2>Lead Full Stack Software Developer</h2>
          <h3>VK Integrated Systems</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vivamus sed leo vel ante volutpat gravida. Proin interdum
            fermentum orci, eget vestibulum nulla bibendum non.
          </p>
          <h2>Full Stack Software Developer</h2>
          <h3>Joint Special Operations Command, United States Army</h3>
          <p>
            Duis euismod dui ut nisl fringilla, eu luctus purus sagittis.
            Suspendisse potenti. Integer suscipit, libero id cursus feugiat, ex
            est aliquet justo.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
