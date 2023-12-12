import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "../styles/ContactUs.css"; // Create a CSS file for styling

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form submission
  const onFinish = (values) => {
    // Send a POST request to your Express route
    fetch("https://198.211.102.120:3000/user-management/api/new-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Successful API response
        setSuccessMessage("Form submitted successfully");
        setErrorMessage(null);
        console.log("API response:", data);
      })
      .catch((error) => {
        // Handle API request errors
        console.error("API request failed:", error);
        setErrorMessage("Failed to submit the form. Please try again later.");
        setSuccessMessage(null);
      });
  };

  return (
    <div className="contactUs">
      <h2>Contact me!</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form name="contact-form" onFinish={onFinish} layout="vertical">
            {/* Rest of your form code remains the same */}
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
