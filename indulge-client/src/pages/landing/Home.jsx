import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Link to="/login/student">Login As Student</Link> <br />
      <Link to="/login/recuiter">Login As Recuiter</Link> <br />
      <Link to="/login/admin">Login As Admin</Link> <br /> <br />
      <Link to="/signup/student">Signup As Student</Link> <br />
      <Link to="/signup/recuiter">Signup As Recuiter</Link> <br />
    </div>
  );
};

export default Home;
