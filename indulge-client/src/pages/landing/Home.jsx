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
            A ONE STOP PORTAL
            <br /> FOR PLACEMENTS AT
            <br />
            IIT(ISM) DHANBAD
          </div>
          <div id="login">
            <Link to="/auth/login/student">
              <div id="login-student">Login As Student</div>
            </Link>
            <Link to="/auth/login/recruiter">
              <div id="login-student">Login As Recruiter</div>
            </Link>
            <Link to="/auth/login/admin">
              <div id="login-student">Login As Admin</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
