import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default PrivateRouter;
