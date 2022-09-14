import React from 'react'
import './style.css'
export default function OverviewRoom() {
  return (
    <div className="overview-room">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 overview-room-image">
          <img
            src="https://i.ibb.co/HYfwgxD/stick3.jpg"
            className="overview-room-image1"
            alt=""
          ></img>
          <br />
          <img
            src="https://i.ibb.co/3Ryrcg8/stick2.jpg"
            className="overview-room-image2"
            alt=""
          ></img>
          <br />
          <img
            src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
            className="overview-room-image3"
            alt=""
          ></img>
          <br />
        </div>
        <div className="col-sm-6 overview-room-info">
          <div className="overview-text">
            <p className="overview-text-item1">5 Men Hotel</p>
            <p className="overview-text-item2">
              Những Căn Phòng Xinh Đẹp, Thoáng Mát
            </p>
            <hr className="hr3" style={{ backgroundColor: "#AD854B" }} />
            <p className="overview-text-item3">
              Một trong những yếu tố hàng đầu để những chuyến công tác của
              bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một
              khách sạn cao cấp để lưu trú trong suốt thời gian đi công tác.
              Những khách sạn sang trọng với nhiều dịch vụ cao cấp, gần
              trung tâm và nơi công tác vừa giúp cho bạn được thư thả, tận
              hưởng thời gian nghỉ ngơi.
            </p>
            <p className="overview-text-item4">
              <a href="#">Xem Chi Tiết</a>
            </p>
            <hr className="hr4" style={{ backgroundColor: "#AD854B" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
