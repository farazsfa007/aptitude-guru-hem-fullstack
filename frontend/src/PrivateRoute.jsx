import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "./utils/auth";

export default function PrivateRoute({ children }) {
  const user = getUser();
  return user ? children : <Navigate to="/login" />;
}
