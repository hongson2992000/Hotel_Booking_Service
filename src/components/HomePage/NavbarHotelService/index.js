import React from "react";
import { useState } from "react";
import './style.css'
export default function NavbarHotelService() {
  const [serviceBookingActive, setServiceBookingActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 610) {
      setServiceBookingActive(true);
    } else {
      setServiceBookingActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={
        serviceBookingActive ? "service-booking active" : "service-booking"
      }
    >
      <div className="service-booking-item">
        <div className="service-booking-tag animate__animated animate__heartBeat animate__infinite">
          <p>Hot</p>
        </div>
        <a href="#" className="service-booking-icon">
          <i class="fa-solid fa-people-roof"></i>
        </a>
        <p className="service-booking-text">Phòng</p>
      </div>
      <div className="service-booking-item">
        <div style={{ width: "40px", height: "15px", margin: "8px auto" }}>
          {/* <p>Hot</p> */}
        </div>
        <a href="#">
          <i class="fa-solid fa-utensils"></i>
        </a>
        <p className="service-booking-text">Nhà Hàng</p>
      </div>
      <div className="service-booking-item">
        <div style={{ width: "40px", height: "15px", margin: "8px auto" }}>
          {/* <p>Hot</p> */}
        </div>
        <a href="#">
          <i class="fa-solid fa-bell-concierge"></i>
        </a>
        <p className="service-booking-text">Dịch Vụ</p>
      </div>
      <div className="service-booking-item">
        <div className="service-booking-tag animate__animated animate__heartBeat animate__infinite">
          <p>New !</p>
        </div>
        <a href="#">
          <i class="fa-solid fa-person-swimming"></i>
        </a>
        <p className="service-booking-text">Hồ Bơi</p>
      </div>
    </div>
  );
}
