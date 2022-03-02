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
          <Link to="/recruiter/fill-jnf" className="rightone">FILL JNF</Link>
          <Link to="/recruiter/fill-inf" className="rightone">FILL INF</Link>
          <Link to="/recruiter/jnf-inf-status" className="rightone">INF/JNF STATUS</Link>
        </div>
      </div>

      <div id="sectionone">
        <div className="sectioncards" id="programs">
          <div id="kkl">
            <h6>DEPARTMENTS AND PROGRAMS</h6>
          </div>
          <div id="tp">
            <p className="tp-items">ENGINEERING</p>
            <p className="tp-items">SCIENCES</p>
            <p className="tp-items">MANAGMENT</p>
          </div>
        </div>
        <div id="director" className="sectioncards">
          <h6>
            MESSAGE FROM DIRECTOR
          </h6>
        </div>
      </div>


      <div id="downloads">
        <div id="downloads-one">
          <h1>DOWNLOADS</h1>
        </div>
        <div id="dowmloads-two">
          <div className="downloads-ekaur">
            <div className="dowloads-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
            <div className="dowloads-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
          </div>
          <div className="downloads-ekaur">
            <div className="dowloads-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
            <div className="dowloads-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
          </div>

        </div>
      </div>

      <div id="contacts">
        <div id="contacts-one">
          <h1>CONTACT US</h1>
        </div>
        <div id="contacts-two">
          <div className="contacts-ekaur">
            <div className="contacts-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
            <div className="contacts-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
          </div>
          <div className="contacts-ekaur">
            <div className="contacts-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
            <div className="contacts-two-one">
              lorem dks dnjek dejwew ndk wsn njks
            </div>
          </div>

        </div>
      </div>




    </div>



  );
};

export default RecruiterPortal;
