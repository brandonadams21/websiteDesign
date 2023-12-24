import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

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
      <div
        className={`navbar-child ${active === "Work" ? "active" : ""}`}
        onClick={() => handleSetActive("Work")}
      >
        Work
      </div>
      <div
        className={`navbar-child ${active === "About" ? "active" : ""}`}
        onClick={() => handleSetActive("About")}
      >
        About
      </div>
      <div
        className={`navbar-child ${active === "Notes" ? "active" : ""}`}
        onClick={() => handleSetActive("Notes")}
      >
        Notes
      </div>
      <div
        className={`navbar-child ${active === "Contact" ? "active" : ""}`}
        onClick={() => handleSetActive("Contact")}
      >
        Contact
      </div>
    </div>
  );
}

export default Navbar;
