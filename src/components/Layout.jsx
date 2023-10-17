import React, { useRef } from "react";
import { Layout, Menu } from "antd";
import OurWork from "./OurWork";
import About from "./About";
import ContactUs from "./ContactUs";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
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
            onClick={() => scrollToRef(workRef)}
          >
            Our Work
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
            icon={<ContactsOutlined />}
            onClick={() => scrollToRef(contactRef)}
          >
            Contact Us
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div ref={homeRef}>{children}</div>
        <div ref={workRef}>
          <OurWork />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <ContactUs />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Brandon Adams Web Template © {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default AppLayout;
