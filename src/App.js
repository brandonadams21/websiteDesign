// src/App.js

import React, { useState, useEffect } from "react";
import { Skeleton } from "antd";
import AppLayout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import About from "./pages/About";
import Navbar from "./components/Navbar.jsx"
import "./App.css";
import GradientBackground from "./components/GradientBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <>
            <Skeleton active round={{ rows: 4 }} />
            <Skeleton active round={{ rows: 8 }} />
            <Skeleton active round={{ rows: 6 }} />
            <Skeleton active round={{ rows: 10 }} />
          </>
        ) : (
          <Router>
          
              <Navbar/>
              {/* <AppLayout>
                
              </AppLayout> */}
              <Routes>
                <Route path="/" exact element={<Layout />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" exact element={<ContactUs />} />
              </Routes>
            
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
