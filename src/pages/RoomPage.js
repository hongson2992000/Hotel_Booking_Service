import React from "react";
import Carousel from "../components/RoomPage/Carousel";
import RoomType from "../components/RoomPage/RoomType";
// import Footer from "../components/RoomPage/Footer";
// import FooterCopyRight from "../components/RoomPage/FooterCopyright";
// import "./GeneralStyle.module.css"
export default function RoomPage() {
  return (
    <div className="main-screen">
      <Carousel />
      <RoomType />
      {/* <Footer />
      <FooterCopyRight /> */}
    </div>
  );
}
