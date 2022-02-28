import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const AdminPortal = () => {
  const { user } = useAuth();
  if (user?.type !== "admin") return <Navigate to="/" />;
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
