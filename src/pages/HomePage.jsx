import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <HomeNavbar />
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>Ini Home</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
