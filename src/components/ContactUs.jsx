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
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
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
              <Input />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please enter your message",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +123456789</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
