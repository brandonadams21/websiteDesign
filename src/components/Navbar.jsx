import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Work");
  const [scroll, setScroll] = useState(false);
  const location = useLocation(); // get the current location

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
    const currentPath = location.pathname;
    if (currentPath === "/notes") {
      setActive("Notes");
    } else if (currentPath === "/about") {
      setActive("About");
    } else if (currentPath === "/contact") {
      setActive("Contact");
    } else {
      setActive("Work");
    }
  }, [location]); // re-run this effect when location changes


  const handleSetActive = (item) => {
    setActive(item);
    if (item === "Work") {
      window.location.href = "./";
    } else {
      window.location.href = `./${item.toLowerCase()}`;
    }
  };

  return (
    <div className={`navbar ${scroll ? "scrolled" : ""}`}>
      <Link
        style={{
          color: "#025a4e",
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
