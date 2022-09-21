import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
export default function Header() {
  const [navbarRecommendActive, setNavbarRecommendActive] = useState(false);
  const [serviceBookingActive, setServiceBookingActive] = useState(false);
  const [navbarContactActive, setnavbarContactActive] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgba(173, 133, 75, 1)" : "rgba(255, 255, 255, 1)",
    };
  };
  const changeBackground = () => {
    if (window.scrollY >= 610) {
      setNavbarRecommendActive(true);
      setServiceBookingActive(true);
      setnavbarContactActive(true);
    } else {
      setNavbarRecommendActive(false);
      setServiceBookingActive(false);
      setnavbarContactActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="main-screen">
      <div className="header">
        <div className="nav-bar">
          <div
            className={
              navbarRecommendActive
                ? "nav-bar-recommend active"
                : "nav-bar-recommend"
            }
          >
            <span className="recommend-text">
              Nhiều Chương Trình Khuyến Mãi Dành Riêng Cho Bạn
            </span>
            <button className="btn btn-primary recommened-btn">
              Khám Phá Ngay
            </button>
          </div>
          <div
            className={
              navbarContactActive ? "nav-bar-contact active" : "nav-bar-contact"
            }
          >
            <div className="brand-logo">
              <img
                className="logo animate__animated animate__flip"
                src="https://i.ibb.co/jTjg1xS/LOGO.png"
                alt="#"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <span className="brand-name animate__animated animate__zoomIn">
                5 Men Hotel
              </span>
            </div>
            <nav>
              <ul className="navbar">
                <li>
                  <NavLink className="nav-bar-link" to={"/" || "/home"}>
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
                  <NavLink className="nav-bar-link" to="/tintuc">
                    Tin Tức
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-bar-link" to="/lienhe">
                    Liên Hệ
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={
              serviceBookingActive
                ? "service-booking active"
                : "service-booking"
            }
          >
            <div className="service-booking-item">
              <div className="service-booking-tag">
                <p>Hot</p>
              </div>
              <a href="#" className="service-booking-icon">
                <i class="fa-solid fa-people-roof"></i>
              </a>
              <p className="service-booking-text">Phòng</p>
            </div>
            <div className="service-booking-item">
              <div
                style={{ width: "40px", height: "15px", margin: "8px auto" }}
              >
                {/* <p>Hot</p> */}
              </div>
              <a href="#">
                <i class="fa-solid fa-utensils"></i>
              </a>
              <p className="service-booking-text">Nhà Hàng</p>
            </div>
            <div className="service-booking-item">
              <div
                style={{ width: "40px", height: "15px", margin: "8px auto" }}
              >
                {/* <p>Hot</p> */}
              </div>
              <a href="#">
                <i class="fa-solid fa-bell-concierge"></i>
              </a>
              <p className="service-booking-text">Dịch Vụ</p>
            </div>
            <div className="service-booking-item">
              <div className="service-booking-tag">
                <p>New !</p>
              </div>
              <a href="#">
                <i class="fa-solid fa-person-swimming"></i>
              </a>
              <p className="service-booking-text">Hồ Bơi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="arrow-btn">
        <a href="#">
          <span className="fa-solid fa-angle-up"></span>
        </a>
      </div>
    </div>
  );
}
