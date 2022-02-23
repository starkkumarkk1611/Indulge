import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="heritage">
        <div id="page">
          <div id="text">
            <h1>
              A ONE STOP PORTAL
              <br /> FOR PLACEMENTS AT
              <br />
              IIT(ISM) DHANBAD
            </h1>
          </div>
          <div id="login">
            <div className="logIn" id="login-student">
              <Link to="/auth/login/student">Login As Student</Link>
            </div>
            <div className="logIn" id="login-recruiter">
              <Link to="/auth/login/recruiter">Login As Recruiter</Link>
            </div>
            <div className="logIn" id="login-admin">
              <Link to="/auth/login/admin">Login As Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
