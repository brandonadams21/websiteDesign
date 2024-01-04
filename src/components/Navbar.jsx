import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Work");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    // set the event listener for the scroll
    window.addEventListener("scroll", onScroll);

    // clean up the event listener
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/notes") {
      setActive("Notes");
    } else if (currentPath === "/about") {
      setActive("About");
    } else if (currentPath === "/contact") {
      setActive("Contact");
    } else {
      setActive("Work");
    }
  }, [window.location.href]);

  const handleSetActive = (item) => {
    setActive(item);
    if (item === 'Work') {
      window.location.href = './'
    } else {
    window.location.href = `./${item.toLowerCase()}`;
    }
  };

  return (
    <div className={`navbar ${scroll ? "scrolled" : ""}`}>
      <Link
        style={{
          color: "#025a4e",
          backgroundColor: "transparent",
          textDecoration: "none",
        }}
        to="/"
        className={`navbar-child ${active === "Work" ? "active" : ""}`}
      >
        Work
      </Link>
      <Link
        style={{
          color: "#025a4e",
          backgroundColor: "transparent",
          textDecoration: "none",
        }}
        to="/about"
        className={`navbar-child ${active === "About" ? "active" : ""}`}
      >
        About
      </Link>
      <Link
        style={{
          color: "#025a4e",
          backgroundColor: "transparent",
          textDecoration: "none",
        }}
        to="/notes"
        className={`navbar-child ${active === "Notes" ? "active" : ""}`}
      >
        Notes
      </Link>
      <Link
        style={{
          color: "#025a4e",
          backgroundColor: "transparent",
          textDecoration: "none",
        }}
        to="/contact"
        className={`navbar-child ${active === "Contact" ? "active" : ""}`}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
