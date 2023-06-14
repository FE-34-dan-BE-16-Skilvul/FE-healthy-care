import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import Logo from "../assets/img/logo.png";
import { navLinks } from "../data/index";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const MainNavbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        bg="light"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="/hartikel" className="fs-3 fw-bold">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <button
                className="btn btn-outline-success rounded-1"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;