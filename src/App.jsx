import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
// import ArtikelPage from "./pages/ArtikelPage";
import FaqPages from "./pages/FaqPages";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

import RegistComponent from "./components/RegistComponent";
import LoginComponent from "./components/LoginComponent";
import BMIComponent from "./components/BMIComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/layanan" Component={LayananPage} />
        <Route path="/layanan/bmi" Component={BMIComponent} />
        {/* <Route path="/artikel" Component={ArtikelPage} /> */}
        <Route path="/faq" Component={FaqPages} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/login" Component={LoginComponent} />
        <Route path="/register" Component={RegistComponent} />
        <Route path="*" Component={NotFound} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
