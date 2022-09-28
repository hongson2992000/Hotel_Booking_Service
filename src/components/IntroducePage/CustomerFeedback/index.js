import React from "react";
import Slider from "react-slick";
import "./style.css";
export default function CustomerFeedback() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="customer_feedback">
      <p className="customer_feedback_text">Khách Hàng Nói Gì Về Chúng Tôi</p>
      <Slider {...settings}>
        <div className="customer_feedback_item">
          <img src="../../../assets/img/son.jpg" alt="" />
          <div className="feedback_item_body">
            <p className="customer_name">Anh Sơn</p>
            <p className="feedback_text">
              Khách sạn đem lại cho tôi những trãi nghiệm tuyện vời, tôi sẽ quay
              lại.
            </p>
          </div>
        </div>
        <div className="customer_feedback_item">
          <img src="../../../assets/img/long.jpg" alt="" />
          <div className="feedback_item_body">
            <p className="customer_name">Anh Long</p>
            <p className="feedback_text">
            Tất cả những trãi nghiệm ở đây tôi không thể nào quên được. Cám ơn nhân viên rất nhiều.
            </p>
          </div>
        </div>
        <div className="customer_feedback_item">
          <img src="../../../assets/img/dat.jpg" alt="" />
          <div className="feedback_item_body">
            <p className="customer_name">Anh Đạt</p>
            <p className="feedback_text">
              Khách sạn đem lại cho tôi những trãi nghiệm tuyện vời, tôi sẽ quay
              lại.
            </p>
          </div>
        </div>
        <div className="customer_feedback_item">
          <img src="../../../assets/img/thuc.jpg" alt="" />
          <div className="feedback_item_body">
            <p className="customer_name">Anh Thức</p>
            <p className="feedback_text">
            Tôi đã có một đêm rất tuyệt vời tại đây, sẽ giới thiệu bạn bè đến trãi nghiệm.
            </p>
          </div>
        </div>
        <div className="customer_feedback_item">
          <img src="../../../assets/img/duong.jpg" alt="" />
          <div className="feedback_item_body">
            <p className="customer_name">Anh Duong</p>
            <p className="feedback_text">
            Tất cả những trãi nghiệm ở đây tôi không thể nào quên được. Cám ơn nhân viên rất nhiều.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
