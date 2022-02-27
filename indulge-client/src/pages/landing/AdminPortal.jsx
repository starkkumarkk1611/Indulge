import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
const AdminPortal = () => {
  const { user } = useAuth();
  if (user?.type !== "admin") return <Navigate to="/" />;
  return <div>AdminPortal</div>;
};
export default AdminPortal;
