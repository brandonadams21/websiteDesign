import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "../styles/ContactUs.css"; // Create a CSS file for styling

const ContactUs = () => {
  // Handle form submission
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="contactUs">
      <h2>Contact Us</h2>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form name="contact-form" onFinish={onFinish} layout="vertical">
            <Form.Item
              style={{ marginLeft: "20px" }}
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input style={{ color: "black" }} />
            </Form.Item>
            <Form.Item
              style={{ marginLeft: "20px" }}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input style={{ color: "black" }} />
            </Form.Item>
            <Form.Item
            style={{marginLeft: '20px'}}
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please enter your message",
                },
              ]}
            >
              <Input.TextArea style={{ color: "black", height: '100px' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: email@email.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: New York, NY</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
