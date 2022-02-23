import React from "react";
import { Link, NavLink } from "react-router-dom";
import ismLogo from "../../assets/image/ISMLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav-logo-container">
        <div id="main-logo">
          <img height="85px" src={ismLogo} alt="" />
          <div
            style={{
              margin: "0.6rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ margin: "0" }}>CDC, IIT(ISM) DHANBAD</h2>
            <p style={{ fontSize: "1.2rem", margin: "0" }}>
              Legacy that inspires the future
            </p>
          </div>
        </div>
      </div>
      <div id="nav-link">
        <div className="nav-link-item">
          <NavLink to="/overview">OVERVIEW</NavLink>
        </div>
        <div className="nav-link-item">
          <NavLink to="/why-iit-ism">WHY IIT(ISM)</NavLink>
        </div>
        <div className="nav-link-item">
          <NavLink to="/about-us">ABOUT US</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
