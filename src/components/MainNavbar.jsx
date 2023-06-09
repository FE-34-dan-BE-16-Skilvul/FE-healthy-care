import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import Logo from "../assets/img/logo.png";
import { navLinks } from "../data/index";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

import '../styles/App.css'
import logo from '../assets/logo.png';
import DietPopup from './DietPopUp';
import diet1 from '../assets/diet1.jpg';
import diet2 from '../assets/diet2.jpeg';
import diet3 from '../assets/diet3.jpg';
import diet5 from '../assets/diet5.jpg';
import diet6 from '../assets/diet6.jpg';
import diet7 from '../assets/diet7.jpeg';
import diet8 from '../assets/diet8.jpg';
import danone from '../assets/danone.png';
import skilvul from '../assets/skilvul.png';

const HeaderNavbar = () => {
  const navigate = useNavigate();

  return (
    <div>
     <header className="l-header" id="header">
          <nav className="nav bd-container">
            <a href="#" className="nav__logo">
              <img src={logo} alt="Logo" />
            </a>
  
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item"><button className="nav__link">Beranda</button></li>
                <li className="nav__item"><button className="nav__link">Layanan</button></li>
                <li className="nav__item"><button className="nav__link active-link" onClick={() => navigate("/main-artikel")}>Artikel</button></li>
  
                <li><i className='bx bx-toggle-left change-theme' id="theme-button"></i></li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1683212547~exp=1683213147~hmac=43998cc7e627b739389fb891b5b5bbcc4f6555a3954160ff4542ef62c42b8a3c" className="nav__logo avatar" alt="Avatar" /></li>
              </ul>
            </div>
  
            <div className="nav__toggle" id="nav-toggle">
              <i className='bx bx-grid-alt'></i>
            </div>
          </nav>
        </header>
    </div>
  );
};

export default HeaderNavbar;
