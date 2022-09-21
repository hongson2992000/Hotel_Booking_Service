import React from "react";
import Header from "../components/RoomPage/Header";
import Carousel from "../components/RoomPage/Carousel";
import RoomType from "../components/RoomPage/RoomType";
import Footer from "../components/RoomPage/Footer";
import FooterCopyRight from "../components/RoomPage/FooterCopyright";
export default function RoomPage() {
  return (
    <div className="main-screen">
      <Header />
      <Carousel />
      <RoomType />
      <Footer />
      <FooterCopyRight />
    </div>
  );
}
