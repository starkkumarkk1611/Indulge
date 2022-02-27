import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const StudentPortal = () => {
  return <div><Navbar navName="STUDENT PORTAL" navitem={[{ label: "OVERVIEW", href: "#overview" }, { label: "POLICES", href: "#policies" }, { label: "CONTACT US", href: "#contact-us" }]} /></div>;

};

export default StudentPortal;
