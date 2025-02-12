import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const Root = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className={`${theme === "dark" ? "bg-black" : ""}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
