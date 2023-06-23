import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Logo from "../assets/img/logo.png";
import Cart from "../../public/bag-icon.svg";
import { navLinks } from "../data/index";
import { toggleCart } from "../store/slices/cartSlices";

const HeaderNavbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cartCalories, setCartCalories] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const MySwal = withReactContent(Swal);

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  const handleLogout = () => {
    MySwal.fire({
      title: "Apakah Anda yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("name");
        localStorage.removeItem("cartCalories");
        navigate("/");
      }
    });
  };

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

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  useEffect(() => {
    const storedCartCalories = localStorage.getItem("cartCalories");
    if (storedCartCalories) {
      setCartCalories(storedCartCalories);
    }
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        bg="light"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="/home" className="fs-3 fw-bold">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>

            {location.pathname === "/layanan/kalori" && (
              <div className="nav_menu p-3">
                <div
                  title="History"
                  className="cart_icon"
                  onClick={handleShowModal}
                >
                  <img
                    src="https://img.icons8.com/?size=512&id=70294&format=png"
                    alt="bag-icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              </div>
            )}

            {location.pathname === "/layanan/kalori" && (
              <div className="nav_menu p-3">
                <div
                  title="Cart"
                  className="cart_icon"
                  onClick={() => handleOpenCart(true)}
                >
                  <img src={Cart} alt="bag-icon" />
                  <span className="badge">{cartQuantity}</span>
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                className="btn btn-outline-success rounded-1"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Kalori Harian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            Kebutuhan Kalori Anda{" "}
            <span className="fw-bold">{cartCalories} kal</span>
          </span>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeaderNavbar;
