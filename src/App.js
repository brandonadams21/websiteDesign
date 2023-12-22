// src/App.js

import React, { useState, useEffect } from "react";
import { Skeleton } from "antd";
import AppLayout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import "./App.css";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import GradientBackground from "./components/GradientBackground";

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
      <div className="background-container">
        <GradientBackground />
      </div>
      <div className="app-content">
        {isLoading ? (
          // Display Skeleton placeholders for each component while loading
          <>
            <Skeleton active round={{ rows: 4 }} />
            <Skeleton active round={{ rows: 8 }} />
            <Skeleton active round={{ rows: 6 }} />
            <Skeleton active round={{ rows: 10 }} />
          </>
        ) : (
          // Render the app content when not loading
          <ThemeProvider>
            <AppLayout>
              <HeroSection />
              {/* <OurWork />
          <About />
          <ContactUs /> */}
              {/* Add components for Our Work, About Us, and Contact Us here */}
            </AppLayout>
          </ThemeProvider>
        )}
      </div>
    </div>
  );
}

export default App;
