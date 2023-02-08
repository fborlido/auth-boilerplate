import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const auth = useAuth();
  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "2rem",
      }}
    >
      <p>Auth App</p>
      {auth.user ? (
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
