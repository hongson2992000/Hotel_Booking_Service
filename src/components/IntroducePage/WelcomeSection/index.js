import React from "react";
import "./style.css";
export default function WelcomeSection() {
  return (
    <div className="welcome_introduce_page row">
      <div className="col-6 welcome_introduce_text">
        <p className="welcome_introduce_text1">5 Men Hotel</p>
        <p className="welcome_introduce_text2">Chào Mừng Đến Với Chúng Tôi</p>
        <hr/>
        <p className="welcome_introduce_text3">
          Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở
          nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp
          để lưu trú trong suốt thời gian đi công tác. Những khách sạn sang
          trọng với nhiều dịch vụ cao cấp, gần trung tâm và nơi công tác vừa
          giúp cho bạn được thư thả, tận hưởng thời gian nghỉ ngơi.
        </p>
      </div>
      <div className="welcome_introduce_img col-6">
        <img src="../../../assets/img/receiption.jpg" alt=""></img>
      </div>
    </div>
  );
}
