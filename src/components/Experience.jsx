import React from "react";
import { Card, Row, Col, Carousel } from "antd";
import "../styles/Experience.css"; // Create a CSS file for styling

const { Meta } = Card;

const Experience = () => {
  return (
    <div className="ourWork">
      <h2>Projects</h2>
      <div className="card-container">
        <Card hoverable cover={<img alt="example" src="/images/sat_img.png" />}>
          <Meta
            title="SAT by VK Integrated Systems"
            description="https://sat.vkintsys.com"
          />
        </Card>
        <Card hoverable cover={<img alt="example" src="/images/sat_img.png" />}>
          <Meta title="TAK Stack" description="www.instagram.com" />
        </Card>
        <Card hoverable cover={<img alt="example" src="/images/sat_img.png" />}>
          <Meta title="MARS" description="Mars" />
        </Card>
      </div>
    </div>
  );
};

export default Experience;
