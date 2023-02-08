import { useMutation } from "@tanstack/react-query";
import React from "react";
import { logoutUserFn } from "../api/authAPI";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => auth.logoutUser()}>Log out</button>
    </div>
  );
};

export default Home;
