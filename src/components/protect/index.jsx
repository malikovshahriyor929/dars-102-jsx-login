import React from "react";
import { Navigate } from "react-router-dom";

let ProtectedRoute = ({ children }) => {
  if (!JSON.parse(localStorage.getItem("token"))) {
    localStorage.removeItem("token");
    // return <Navigate to="/register" replace />;
  }
  return children;
};

export default ProtectedRoute;
