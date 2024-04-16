import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navigate = useNavigate();

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");

    // Icon Toggler
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  const handleNavigation = (path) => {
    navigate(path);
    navToggle(); // Close the menu after navigation
  };

  return (
    <div>
      
      <nav className="nav">
      <img
        src="./logo.png"
        alt="Company Logo"
        className="logo"
      
      />
        <a href="/" className="navybrand" onClick={() => handleNavigation("/")}>
          NumericVeda
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={() => handleNavigation("/")}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/message.html" target="_blank" className="nav__link" onClick={() => handleNavigation("/message.html")}>
              messageUs
            </a>
          </li>
          <li className="nav__item">
            <a href="/sir.html" target="_blank" className="nav__link" onClick={() => handleNavigation("/drBhatia")}>
              Dr. Bhatia
            </a>
          </li>
          
          <li className="nav__item">
            <a href="/contact" target="_blank" className="nav__link" onClick={() => handleNavigation("/contact")}>
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a
              href="/Login"
              className="nav__link"
              onClick={() => handleNavigation("/login")}
            >
              Login/Signup
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
