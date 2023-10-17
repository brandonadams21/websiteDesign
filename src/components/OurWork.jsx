import React from "react";
import { Card, Row, Col } from "antd";
import "../styles/OurWork.css"; // Create a CSS file for styling

const { Meta } = Card;

// Define an array of projects, each representing a different service or offering.
const projects = [
  {
    title: "Web Support",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Custom Work",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Responsive Applications",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const OurWork = () => {
  return (
    <div className="ourWork">
      <h2>Our Services</h2>
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
