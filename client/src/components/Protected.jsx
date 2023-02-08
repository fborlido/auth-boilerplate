import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Protected = () => {
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) toast.error("Unauthorized");
  }, []);

  if (!auth.user) return <Navigate to="/login" state={{ from: location }} />;
  else return <Outlet />;
};

export default Protected;
