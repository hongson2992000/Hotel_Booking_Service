import React from 'react'
import './style.css'
export default function IntroduceHotel() {
  return (
    <div className="introduce-hotel">
    <p className="introduce-name-text">5 Men Hotel</p>
    <p className="introduce-welcome-text">Chào Mừng Đến Với Chúng Tôi</p>
    <hr className="hr1" />
    <div className="introduce-hotel-detail">
      <p className="introduce-hotel-detail-text">
        Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở
        nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao
        cấp để lưu trú trong suốt thời gian đi công tác. Những khách sạn
        sang trọng với nhiều dịch vụ cao cấp, gần trung tâm và nơi công tác
        vừa giúp cho bạn được thư thả, tận
      </p>
    </div>
    <p style={{ paddingTop: "20px" }}>
      <a href="#" style={{ color: "rgba(173, 133, 75, 1)" }}>
        Xem Chi Tiết
      </a>
    </p>
    <hr className="hr2" />
  </div>
  )
}
