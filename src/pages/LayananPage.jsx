import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const LayananPage = () => {
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
        <h1>Ini Layanan</h1>
      </div>
      <Footer />
    </div>
  );
};

export default LayananPage;
