import React, { useState, useEffect } from "react";
import { Skeleton } from "antd";
import AppLayout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import OurWork from "./components/OurWork";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  // State to track whether the app is loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds (you can replace this with your actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        // Display Skeleton placeholders for each component while loading
        <>
          <Skeleton active paragraph={{ rows: 4 }} />
          <Skeleton active paragraph={{ rows: 8 }} />
          <Skeleton active paragraph={{ rows: 6 }} />
          <Skeleton active paragraph={{ rows: 10 }} />
        </>
      ) : (
        // Render the app content when not loading
        <AppLayout>
          <HeroSection />
          {/* <OurWork />
          <About />
          <ContactUs /> */}
          {/* Add components for Our Work, About Us, and Contact Us here */}
        </AppLayout>
      )}
    </div>
  );
}

export default App;
