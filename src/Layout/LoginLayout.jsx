import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../Pages/Login/Login/Login";
import NavigationBar from "../Share Pages/NavigationBar/NavigationBar";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
