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

  const handleSetActiveWork = (item) => {
     window.location.href = "./";
    setActive(item);
  };
  const handleSetActiveAbout = (item) => {
     window.location.href = "./about";
    setActive(item);
  };
  const handleSetActiveNotes = (item) => {
     window.location.href = "./notes";
    setActive(item);
  };
  const handleSetActiveContact = (item) => {
     window.location.href = "./contact";
    setActive(item);
  };

  return (
    <div className={`navbar ${scroll ? "scrolled" : ""}`}>
      <div
        className={`navbar-child ${active === "Work" ? "active" : ""}`}
        onClick={() => handleSetActiveWork("Work")}
      >
        Work
      </div>
      <div
        className={`navbar-child ${active === "About" ? "active" : ""}`}
        onClick={() => handleSetActiveAbout("About")}
      >
        About
      </div>
      <div
        className={`navbar-child ${active === "Notes" ? "active" : ""}`}
        onClick={() => handleSetActiveNotes("Notes")}
      >
        Notes
      </div>
      <div
        className={`navbar-child ${active === "Contact" ? "active" : ""}`}
        onClick={() => handleSetActiveContact("Contact")}
      >
        Contact
      </div>
    </div>
  );
}

export default Navbar;
