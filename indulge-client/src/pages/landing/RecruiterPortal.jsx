import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../../components/Navbar/Navbar";
import { Navigate } from "react-router-dom";

const RecruiterPortal = () => {
  const { user } = useAuth();
  if (user?.type !== "recruiter") return <Navigate to="/" />;
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
    </div>
  );
};

export default RecruiterPortal;
