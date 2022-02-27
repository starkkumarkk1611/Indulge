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
      <div id="card-container">
        <div className="first_part">
          <div className="first_p">
            <h4 className="heading">Students@IITISM</h4>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sequi recusandae iure porro voluptates, commodi quisquam provident
              numquam cupiditate? Sunt delectus possimus voluptatem, ipsum nulla
              aliquid porro! Magni, rerum ipsam.
            </p>
          </div>
          <div className="first_p">
            <h4 className="heading">Students@IITISM</h4>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sequi recusandae iure porro voluptates, commodi quisquam provident
              numquam cupiditate? Sunt delectus possimus voluptatem, ipsum nulla
              aliquid porro! Magni, rerum ipsam.
            </p>
          </div>
          <div className="first_p">
            <h4 className="heading">Students@IITISM</h4>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sequi recusandae iure porro voluptates, commodi quisquam provident
              numquam cupiditate? Sunt delectus possimus voluptatem, ipsum nulla
              aliquid porro! Magni, rerum ipsam.
            </p>
          </div>
        </div>
        <h1 id="se">TAKE PART IN THE LEGACY OF IIT(ISM) DHANBAD</h1>
        <div className="first_part">
          <div className="first_p">
            <h4 className="heading">Students@IITISM</h4>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sequi recusandae iure porro voluptates, commodi quisquam provident
              numquam cupiditate? Sunt delectus possimus voluptatem, ipsum nulla
              aliquid porro! Magni, rerum ipsam.
            </p>
          </div>
          <div className="first_p">
            <h4 className="heading">Students@IITISM</h4>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sequi recusandae iure porro voluptates, commodi quisquam provident
              numquam cupiditate? Sunt delectus possimus voluptatem, ipsum nulla
              aliquid porro! Magni, rerum ipsam.
            </p>
          </div>
          <div className="first_p">
            <h4 className="heading">Students@IITISM</h4>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sequi recusandae iure porro voluptates, commodi quisquam provident
              numquam cupiditate? Sunt delectus possimus voluptatem, ipsum nulla
              aliquid porro! Magni, rerum ipsam.
            </p>
          </div>
        </div>
      </div>
      <div id="segment">
        <div id="first">
          <h1>
            OUR STATS <br /> (2021-2022)
          </h1>
        </div>
        <div id="second">
          <div className="route">
            <h1>
              920+ <br />
              TOTAL OFFER <br /> RECEIVED
            </h1>
          </div>
          <div className="route">
            <h1>
              520+ <br />
              TOTAL INTERNSHIP <br /> RECEIVED
            </h1>
          </div>
          <div className="route">
            <h1>
              220+ <br /> COMPANIES <br /> PARTICIPATED
            </h1>
          </div>
        </div>
      </div>
      <div id="past">
        <h1>Past Recruiters</h1>
      </div>

      <div id="company"></div>
    </div>
  );
};

export default Home;
