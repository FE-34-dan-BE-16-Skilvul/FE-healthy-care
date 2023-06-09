import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';


const Header = () => {
    return (
      <div>
        <a href="#" className="scrolltop" id="scroll-top">
          <i className='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a>
  
        <header className="l-header" id="header">
          <nav className="nav bd-container">
            <a href="#" className="nav__logo">
              <img src={logo} alt="Logo" />
            </a>
  
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Beranda</a></li>
                <li className="nav__item"><a href="#decoration" className="nav__link">Layanan</a></li>
                <li className="nav__item"><a href="#artikel" className="nav__link">Artikel</a></li>
  
                <li><a href="#"><img src="https://www.macronutrients.net/wp-content/uploads/2020/08/symbol-3296658_640.png" className="nav__logo keranjang" alt="Keranjang" /></a></li>
                <li>
                  <img src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1683212547~exp=1683213147~hmac=43998cc7e627b739389fb891b5b5bbcc4f6555a3954160ff4542ef62c42b8a3c" className="nav__logo avatar" alt="Avatar"></img>
                </li>
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
export default Header;