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

  const handleSetActive = (item) => {
    setActive(item);
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
