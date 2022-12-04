import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAuthorized({ children, loggedIn }) {
  return (loggedIn ? <Navigate to={"/movies"} replace /> : children)
};
