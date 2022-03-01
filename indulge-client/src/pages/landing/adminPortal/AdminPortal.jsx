import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
const AdminPortal = () => {
  return (
    <div>
      <Navbar
        navName="ADMIN PORTAL"
        navitem={[
          { label: "OVERVIEW", href: "#overview" },
          { label: "POLICES", href: "#policies" },
          { label: "CONTACT US", href: "#contact-us" },
        ]}
      />
    </div>
  );
};
export default AdminPortal;
