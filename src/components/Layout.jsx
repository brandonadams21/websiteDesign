import React, { useRef, useContext, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import HeroSection from "./HeroSection";
import Work from "./Work";
import ContactUs from "./ContactUs";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "../styles/Layout.css";
import Navbar from "./Navbar.jsx";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [animateHero, setAnimateHero] = useState(false);
  const [animateWork, setAnimateWork] = useState(false);
  const [animateContact, setAnimateContact] = useState(false);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    useEffect(() => {
      setAnimateHero(true);
      setAnimateWork(true); 
      setAnimateContact(true); // could set a timeout on this but it looks weird when it renders in 
    }, []);

  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Content>
        <div className={animateHero ? "animated-section" : ""}>
          <HeroSection />
        </div>
        <div className={animateWork ? "animated-section" : ""}>
          <Work />
        </div>
        <div className={animateContact ? "animated-section" : ""}>
          <ContactUs />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "transparent",
          color: "#025a4e",
        }}
      >
        Brandon Adams © {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AppLayout;
