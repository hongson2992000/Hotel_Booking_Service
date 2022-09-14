import React from "react";
import './style.css'
export default function HotelService({ service }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={service.imageUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text">{service.description}</p>
        <a href="#">
          Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
}
