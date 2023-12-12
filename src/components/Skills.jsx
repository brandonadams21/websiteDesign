import React from "react";
import { Row, Col } from "antd";
import "../styles/About.css"; // Create a CSS file for styling

const Skills = () => {
  return (
    <div className="aboutUs">
      <h2>Skills</h2>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <img
            src="https://via.placeholder.com/400"
            alt="Team"
            className="aboutUs-image"
          />
        </Col>
        <Col span={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vivamus sed leo vel ante volutpat gravida. Proin interdum
            fermentum orci, eget vestibulum nulla bibendum non.
          </p>
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

export default Skills;
