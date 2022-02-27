import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const RecruiterPortal = () => {
  const { user } = useAuth();
  if (user?.type !== "recruiter") return <Navigate to="/" />;
  return <div>RecruiterPortal</div>;
};

export default RecruiterPortal;
