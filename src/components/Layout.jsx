import React, { useRef, useContext } from "react";
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
import { ThemeContext } from "./ThemeContext";
import "../styles/Layout.css";
import Navbar from "./Navbar.jsx";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <Layout className={theme}>
      <Navbar />
      <Content>
        <HeroSection />
        <Work />
        <ContactUs />
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
