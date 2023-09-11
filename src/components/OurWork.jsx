import React from "react";
import { Card, Row, Col } from "antd";
import "../styles/OurWork.css"; // Create a CSS file for styling

const { Meta } = Card;

const projects = [
  {
    title: "Unique Website Designs",
    description: "Crafting one-of-a-kind websites tailored to your brand.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Custom Web Development",
    description:
      "Building web solutions that match your specific needs and requirements.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Creating online stores that drive sales and enhance user experiences.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const OurWork = () => {
  return (
    <div className="ourWork">
      <h2>Our Solutions</h2>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.imageUrl} />}
            >
              <Meta title={project.title} description={project.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurWork;
