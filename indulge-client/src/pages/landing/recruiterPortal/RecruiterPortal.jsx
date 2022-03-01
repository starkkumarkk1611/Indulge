import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./RecruiterPortal.css";
import { Link, Route } from "react-router-dom";

const RecruiterPortal = () => {
  return (
    <div>
      <Navbar
        navName="RECRUITER PORTAL"
        navitem={[
          { label: "OVERVIEW", href: "#overview" },
          { label: "POLICES", href: "#policies" },
          { label: "CONTACT US", href: "#contact-us" },
        ]}
      />
      <div className="recruiter-hero">
        <div
          className="left-recruiter"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: "6",
          }}
        >
          <h1 style={{ color: "#01418B", textAlign: "center" }}>
            PLACEMENT SEASON (2021-2022)
          </h1>
          <h4 style={{ color: "#01418B" }}>AT A GLANCE</h4>
          <h6>DOWNLOAD BROUCHERE</h6>
        </div>
        <div
          className="right-recruiter"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: "4",
          }}
        >
          <Link to="/recruiter/fill-jnf">FILL JNF</Link>
          <Link to="/recruiter/fill-inf">FILL INF</Link>
          <Link to="/recruiter/jnf-inf-status">INF/JNF STATUS</Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPortal;
