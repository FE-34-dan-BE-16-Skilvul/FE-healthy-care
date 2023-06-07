import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" Component={MainPage} />
        {/* <Route path="/layanan" Component={<LayananPage />} />
          <Route path="/artikel" Component={<ArtikelPage />} /> */}
        <Route path="/login" Component={LoginComponent} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
