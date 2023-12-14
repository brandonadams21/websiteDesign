import React from "react";
import { Card, Row, Col } from "antd";
import "../styles/Experience.css"; // Create a CSS file for styling

const { Meta } = Card;

const Experience = () => {
  const cardStyle = {
    // width: '80%', // Set the width as per your preference
    marginLeft: '15%',
    marginRight: '15%',
    justifyContent: 'center',
    
  };

  return (
    <div className="ourWork">
      <h2 style={{ fontSize: "56px" }}>Projects</h2>
      <Row gutter={16}>
        {/* Add gutter for spacing between columns */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          {/* Define column widths for responsiveness */}
          <Card
            hoverable
            cover={<img alt="example" src="/images/sat_img.png" />}
            style={cardStyle}
          >
            <Meta
              title="SAT by VK Integrated Systems"
              description="https://sat.vkintsys.com"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card
            hoverable
            cover={<img alt="example" src="/images/sat_img.png" />}
            style={cardStyle}
          >
            <Meta title="TAK Stack" description="www.instagram.com" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card
            hoverable
            cover={<img alt="example" src="/images/sat_img.png" />}
            style={cardStyle}
          >
            <Meta title="MARS" description="Mars" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
