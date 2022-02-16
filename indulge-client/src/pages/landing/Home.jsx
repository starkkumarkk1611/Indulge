import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import heritagebuilding from '../../assets/image/heritage.png'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="heritage">
        <div id="page">
          <div id="text">

            <h1>A ONE STOP PORTAL<br /> FOR PLACEMENTS AT<br />IIT(ISM) DHANBAD</h1>

          </div>
          <div id="login">
            <div className="logIn" id="login-student">
              <Link to="/login/student">Login As Student</Link>
            </div>
            <div className="logIn" id="login-recuiter">
              <Link to="/login/recuiter">Login As Recuiter</Link>
            </div>
            <div className="logIn" id="login-admin">
              <Link to="/login/recuiter">Login As Admin</Link>
            </div>

          </div>
        </div>
      </div>

      <div id="cards">
        yash
      </div>

      <Link to="/login/student">Login As Student</Link> <br />
      <Link to="/login/recuiter">Login As Recuiter</Link> <br />
      <Link to="/login/admin">Login As Admin</Link> <br /> <br />
      <Link to="/signup/student">Signup As Student</Link> <br />
      <Link to="/signup/recuiter">Signup As Recuiter</Link> <br />
    </div>
  );
};

export default Home;
