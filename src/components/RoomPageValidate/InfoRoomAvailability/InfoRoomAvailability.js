import classNames from "classnames";
import React from "react";
import ListRoomAvailability from "../ListRoomAvailability/ListRoomAvailability";
import Styles from "./InfoRoomAvailability.module.scss";
export default function RoomAvailability() {
  return (
    <div className={classNames("hs-bg-dark col-12", Styles.RoomAvailability)}>
      <div className="col-10 row hs-pt-32">
        <div className="col-12 col-md-9">
          <div className={classNames("hs-text-white text-xl",Styles.Title1)}>
            Đặt phòng ngay để có mức giá ưu đãi nhất
          </div>
          <div className={classNames("hs-text-dark-grey text-md",Styles.Title2)}>
            Quý khách sẽ được đặt phòng ở mức giá tốt nhất do không phải qua đơn
            vị trung gian. Quý khách đang ghé thăm trang web của khách sạn.
          </div>
          <ListRoomAvailability/>
        </div>
        <div className={classNames('col-12 col-md-3 hs-text-white',Styles.OrderOfRoom)}>
          <div className={classNames("hs-bg-dark-9",Styles.RoomIsChoose)}>
            <p>Chọn Phòng 1</p>
          </div>
          <div className={classNames("hs-bg-dark-9 hs-mt-16 d-flex",Styles.TotalPrice)}>
            <p>Tổng</p>
            <p>0đ</p>
          </div>
          <button className={classNames('btn btn-primary hs-mt-16 hs-bg-dark-brown',Styles.ContinueButton)}>Tiếp</button>
        </div>
      </div>
    </div>
  );
}
