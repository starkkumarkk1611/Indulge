import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const StudentPortal = () => {
  const { user } = useAuth();
  if (user?.type !== "student") return <Navigate to="/" />;
  return (
    <div>
      <Navbar
        navName="STUDENT PORTAL"
        navitem={[
          { label: "OVERVIEW", href: "#overview" },
          { label: "POLICES", href: "#policies" },
          { label: "CONTACT US", href: "#contact-us" },
        ]}
      />
    </div>
  );
};

export default StudentPortal;
