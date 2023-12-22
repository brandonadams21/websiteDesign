import React, { useRef, useContext } from "react";
import { Layout, Menu } from "antd";
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
import Navbar from './Navbar.js';

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
      <Navbar/>
      <Content>
        <div ref={homeRef}>{children}</div>
        
        <div>
          <Work />
        </div>

        <div ref={contactRef}>
          <ContactUs />
        </div>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#141414",
          color: "#04c4ca",
        }}
      >
        Brandon Adams Software Developer Portfolio © {new Date().getFullYear()}
      </Footer> */}
    </Layout>
  );
};

export default AppLayout;
