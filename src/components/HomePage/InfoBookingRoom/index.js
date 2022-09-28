import React from "react";
import "./style.css"
export default function InfoBookingRoom() {
  return (
    <div className="info-booking-room">
      <form style={{ display: "flex" }}>
        <div className="info-booking-item">
          <label htmlFor="name">Ngày Đến:</label>
          <br />
          <input id="dateStart" name="name" type="date" defaultValue />
          <br />
        </div>
        <div className="info-booking-item">
          <label htmlFor="name">Ngày Đi:</label>
          <br />
          <input id="dateEnd" name="name" type="date" defaultValue />
          <br />
        </div>
        <div className="info-booking-item">
          <label htmlFor="name">Số Người:</label>
          <br />
          <input id="dateStart" name="name" type="text" defaultValue/>
          <br />
        </div>
        <div className="info-booking-item">
          <label htmlFor="name"></label>
          <br />
          <button type="submit" className="btn btn-primary info-booking-btn">
            Kiểm Tra Phòng Trống
          </button>
        </div>
      </form>
    </div>
  );
}
