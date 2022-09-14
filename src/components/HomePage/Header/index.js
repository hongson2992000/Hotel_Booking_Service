import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
export default function Header() {
  const [navbarRecommendActive, setNavbarRecommendActive] = useState(false);
  const [serviceBookingActive, setServiceBookingActive] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgba(173, 133, 75, 1)" : "rgba(255, 255, 255, 1)",
    };
  };
  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbarRecommendActive(true);
      setServiceBookingActive(true);
    } else {
      setNavbarRecommendActive(false);
      setServiceBookingActive(false);
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
          <div className="nav-bar-contact">
            <div className="brand-logo">
              <img
                className="logo"
                src="https://i.ibb.co/kQFB7PG/logo-lagi-8-resize.jpg"
                alt=""
                style={{ width: "50px", height: "50px" }}
              ></img>
              <span className="brand-name">5 Men Hotel</span>
            </div>
            <nav>
              <ul className="nav_link">
                <li>
                  <NavLink exact to="/" style={{ navLinkStyle }}>
                    Trang Chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Giới Thiệu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Phòng
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Tin Tức
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
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
              <a href="#" className="service-booking-icon">
                <i class="fa-solid fa-people-roof"></i>
              </a>
              <p className="service-booking-text">Phòng</p>
            </div>
            <div className="service-booking-item">
              <a href="#">
                <i class="fa-solid fa-utensils"></i>
              </a>
              <p className="service-booking-text">Nhà Hàng</p>
            </div>
            <div className="service-booking-item">
              <a href="#">
                <i class="fa-solid fa-bell-concierge"></i>
              </a>
              <p className="service-booking-text">Dịch Vụ</p>
            </div>
            <div className="service-booking-item">
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
