import React, { useState } from "react";
import { Row, Col, Form, Input, Button, InputNumber } from "antd";
import "../styles/ContactUs.css"; // Create a CSS file for styling

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

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

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <div className="contactUs">
      <h2>Contact me!</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form>
        <div>
          <input placeholder="Name" />
        </div>
        <div>
          <input placeholder="Email" />
        </div>
        <div>
          <textarea placeholder="Message" />
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
