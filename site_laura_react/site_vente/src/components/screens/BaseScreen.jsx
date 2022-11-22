import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const BaseScreen = () => {
  return (
    <div className="container-fluid">
      <Header />
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default BaseScreen;
