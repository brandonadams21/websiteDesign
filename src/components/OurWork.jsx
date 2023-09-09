import React from "react";
import { Card, Row, Col } from "antd";
import "../styles/OurWork.css"; // Create a CSS file for styling

const { Meta } = Card;

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Project 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const OurWork = () => {
  return (
    <div className="ourWork">
      <h2>Our Work</h2>
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
