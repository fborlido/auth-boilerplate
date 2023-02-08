import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "1rem" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
