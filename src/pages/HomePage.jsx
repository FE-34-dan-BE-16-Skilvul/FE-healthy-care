import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

import HeroImage from "../assets/img/main-pic.png";

// Import styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="homepage">
      <HomeNavbar />
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Welcome <span>name,</span> <br /> di Healthy Care
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Control diet-mu sekarang dengan Healthy Care. Solusi Cerdas Diet
                Gizi seimbang!
              </p>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <Footer />
    </div>
  );
};

export default HomePage;
