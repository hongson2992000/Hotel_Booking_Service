import React from "react";
import "./style.css";
export default function OverviewRoom() {
  const loopWithClassName = (className) => {
    for (var i = 0; i < className.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = className[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        className[i].classList.add("active");
      } else {
        className[i].classList.remove("active");
      }
    }
  };

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    var revealImg1 = document.querySelectorAll(".revealImg1");
    var revealImg2 = document.querySelectorAll(".revealImg2");
    var revealImg3 = document.querySelectorAll(".revealImg3");
    loopWithClassName(reveals);
    loopWithClassName(revealImg1);
    loopWithClassName(revealImg2);
    loopWithClassName(revealImg3);
  };
  window.addEventListener("scroll", reveal);
  return (
    <div className="overview-room">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 overview-room-image">
            <img
              src="https://i.ibb.co/HYfwgxD/stick3.jpg"
              className="overview-room-image1 revealImg1"
              alt=""
            ></img>
            <br />
            <img
              src="https://i.ibb.co/3Ryrcg8/stick2.jpg"
              className="overview-room-image2 revealImg2"
              alt=""
            ></img>
            <br />
            <img
              src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
              className="overview-room-image3 revealImg3"
              alt=""
            ></img>
            <br />
          </div>
          <div className="col-sm-6 overview-room-info">
            <div className="overview-text">
              <p className="overview-text-item1 reveal">5 Men Hotel</p>
              <p className="overview-text-item2 reveal">
                Những Căn Phòng Xinh Đẹp, Thoáng Mát
              </p>
              <hr className="hr3" style={{ backgroundColor: "#AD854B" }} />
              <p className="overview-text-item3 reveal">
                Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
                trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách
                sạn cao cấp để lưu trú trong suốt thời gian đi công tác. Những
                khách sạn sang trọng với nhiều dịch vụ cao cấp, gần trung tâm và
                nơi công tác vừa giúp cho bạn được thư thả, tận hưởng thời gian
                nghỉ ngơi.
              </p>
              <p className="overview-text-item4 reveal">
                <a href="#">Xem Chi Tiết</a>
              </p>
              <hr className="hr4" style={{ backgroundColor: "#AD854B" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
