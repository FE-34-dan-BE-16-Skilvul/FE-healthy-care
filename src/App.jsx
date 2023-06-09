import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";

import RegistComponent from "./components/RegistComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/layanan" Component={LayananPage} />
        {/*<Route path="/artikel" Component={<ArtikelPage />} /> */}
        <Route path="/login" Component={LoginComponent} />
        <Route path="/register" Component={RegistComponent} />
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
