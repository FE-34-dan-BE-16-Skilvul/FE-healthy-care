import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import RegistComponent from "./components/RegistComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        {/* <Route path="/layanan" Component={<LayananPage />} />
          <Route path="/artikel" Component={<ArtikelPage />} /> */}
        <Route path="/login" Component={LoginComponent} />
        <Route path="/register" Component={RegistComponent} />
      </Routes>
    </div>
  );
}

export default App;
