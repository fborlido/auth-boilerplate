import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserFn } from "../api/authAPI";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

const Protected = () => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) return <Navigate to="/login" state={{ from: location }} />;
  else return <Outlet />;
};

export default Protected;
