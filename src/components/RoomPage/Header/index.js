import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/style.css";
export default function Header() {
  return (
    <div className="nav-bar-room">
      <div className="brand-logo">
        <img
          className="logo animate__animated animate__flip"
          src="https://i.ibb.co/jTjg1xS/LOGO.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        ></img>
        <span className="brand-name animate__animated animate__zoomIn">5 Men Hotel</span>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink className="nav-bar-link" to="/">
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/gioithieu">
              Giới Thiệu
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/room">
              Phòng
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/">
              Tin Tức
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/">
              Liên Hệ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
