import classNames from "classnames";
import React from "react";
import Styles from "../ListRoomAvailability/ListRoomAvailability.module.scss";
import image1 from "../../../assets/images/roomAvailability/DeluxeDouble.jpg";
import image2 from "../../../assets/images/roomAvailability/DeluxeKing.jpg";
import image3 from "../../../assets/images/roomAvailability/DeluxeTwin.jpg";
import RoomAvailability from "../RoomAvailability/RoomAvailability";
export default function ListRoomAvailability() {
  const data = [
    {
      title: "Deluxe Double",
      image: image1,
      listService: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        {
          icon: "fa-regular fa-compass",
          text: "Thanh Toán Trực Tuyến Hoặc Tại Khách Sạn",
        },
        { icon: "fa-solid fa-text-width", text: "19m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
      limitRoom: "1 dem, 1 nguoi",
      price: "2000000",
    },
    {
      title: "Deluxe Twin",
      image: image2,
      listService: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        {
          icon: "fa-regular fa-compass",
          text: "Thanh Toán Trực Tuyến Hoặc Tại Khách Sạn",
        },
        { icon: "fa-solid fa-text-width", text: "19m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
      limitRoom: "1 dem, 1 nguoi",
      price: "2000000",
    },
    {
      title: "Deluxe King",
      image: image3,
      listService: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        {
          icon: "fa-regular fa-compass",
          text: "Thanh Toán Trực Tuyến Hoặc Tại Khách Sạn",
        },
        { icon: "fa-solid fa-text-width", text: "19m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
      limitRoom: "1 dem, 1 nguoi",
      price: "2000000",
    },
  ];

  return (
    <div className={classNames("hs-bg-dark", Styles.ListRoomAvailability)}>
      <RoomAvailability data={data} />
    </div>
  );
}
