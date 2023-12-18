import React, { useRef, useContext } from "react";
import { Layout, Menu } from "antd";
import Experience from "./Experience";
import About from "./About";
import ContactUs from "./ContactUs";
import Skills from "./Skills";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "./ThemeContext";
import '../styles/Layout.css';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);


  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <Layout className={theme}>
      <Header
        style={{
          backgroundColor: "transparent",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          style={{ backgroundColor: "transparent", color: "white" }}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => scrollToRef(homeRef)}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<AppstoreOutlined />}
            onClick={() => scrollToRef(experienceRef)}
          >
            Experience
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UserOutlined />}
            onClick={() => scrollToRef(aboutRef)}
          >
            About Us
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<HomeOutlined />}
            onClick={() => scrollToRef(skillsRef)}
          >
            Skills
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<ContactsOutlined />}
            onClick={() => scrollToRef(contactRef)}
          >
            Contact Us
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div ref={homeRef}>{children}</div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={aboutRef}>
          <Skills />
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
