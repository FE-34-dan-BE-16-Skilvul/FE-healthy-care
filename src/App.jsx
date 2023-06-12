import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import DietMayo from "./components/DietMayo";
import DTP from "./components/DTP";
import DPS from "./components/DPS";
import ZoneDiet from "./components/ZoneDiet";
import DietMediterania from "./components/DietMediterania";
import DietAtkins from "./components/DietAtkins";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/artikel" Component={MainPage} />
        {/* <Route path="/layanan" Component={<LayananPage />} />
          <Route path="/artikel" Component={<ArtikelPage />} /> */}
        <Route path="/diet-mayo" Component={DietMayo} />
        <Route path="/dtp" Component={DTP} />
        <Route path="/dps" Component={DPS} />
        <Route path="/zone-diet" Component={ZoneDiet} />
        <Route path="/diet-mediterania" Component={DietMediterania} />
        <Route path="/diet-atkins" Component={DietAtkins} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
