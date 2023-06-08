import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMailSend, BiKey, BiRightArrowAlt } from "react-icons/bi";

import "../css/login.css";
import logo from "../../public/fav-icon.png";
import img from "../assets/img/reg-cover.jpg";
import axios from "axios";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("https://api-healthycare-dev.up.railway.app/users/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        alert("success");
        localStorage.setItem("token", result.data.token);
        navigate("/home");
      })
      .catch((error) => {
        alert("service error");
        console.log(error.data);
      });
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="imgDiv">
          <img src={img} className="image" />
          <div className="textDiv">
            <h2 className="title">Badan Sehat Gizi Seimbang</h2>
            <p className="title2">Temukan Diet Sehatmu</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Tidak memiliki account? </span>
            <Link to={"/register"}>
              <button className="btn">Register</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" className="image" />
            <h3 className="h3">Selamat Datang!</h3>
            <p>Masukan Email dan Password anda!</p>
          </div>

          {/* Form Login  */}
          <div className="form grid">
            <div className="inputDiv">
              <label htmlFor="username" className="label">
                Email
              </label>
              <div className="input flex">
                <BiMailSend className="icon" />
                <input
                  className="inputBox"
                  type="text"
                  value={email}
                  placeholder="Masukan Email"
                  onChange={handleEmail}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="input flex">
                <BiKey className="icon" />

                <input
                  className="inputBox"
                  type="password"
                  value={password}
                  placeholder="Masukan Password"
                  onChange={handlePassword}
                />
              </div>
              <br />
              <button className="btn flex" onClick={handleApi}>
                <span>Login</span>
                <BiRightArrowAlt className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
