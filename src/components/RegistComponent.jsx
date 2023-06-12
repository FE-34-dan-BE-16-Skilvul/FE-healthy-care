import React from "react";
import { Link } from "react-router-dom";
import { BiUser, BiKey, BiRightArrowAlt, BiMailSend } from "react-icons/bi";

import "../css/login.css";
import img from "../assets/img/reg-cover.jpg";

const RegistComponent = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="imgDiv">
          <img src={img} className="image" />
          <div className="textDiv">
            <h2 className="title">Badan Sehat Gizi Seimbang</h2>
            <p className="title2">Temukan Diet Sehatmu</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Sudah memiliki account? </span>
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <h3 className="h3">Lets Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="input flex">
                <BiMailSend className="icon" />
                <input
                  className="inputBox"
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="input flex">
                <BiUser className="icon" />
                <input
                  className="inputBox"
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
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
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <br />
              <button type="submit" className="btn flex">
                <span>Register</span>
                <BiRightArrowAlt className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistComponent;
