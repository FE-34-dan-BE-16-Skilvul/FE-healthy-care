import React from "react";
import { productsData } from "../data/index";
import ProductsCard from "../components/ProductCard";
import HomeNavbar from "../components/HomeNavbar";
// import CalorieHeader from "../components/CalorieHeader";
import Footer from "../components/Footer";

import "../css/calorie.css";

const CaloriePage = () => {
  return (
    <>
      <HomeNavbar />
      {/* <CalorieHeader /> */}
      <section id="home">
        <div className="container">
          <div className="home_content">
            {productsData.map((item) => (
              <ProductsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CaloriePage;
