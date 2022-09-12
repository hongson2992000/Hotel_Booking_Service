import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Slider from "react-slick";
// import Logo from "../../../../public/assets/img/setup.jpg"
export default function Header() {
  const [navbarRecommendActive, setNavbarRecommendActive] = useState(false);
  const [serviceBookingActive, setServiceBookingActive] = useState(false);
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgba(173, 133, 75, 1)" : "rgba(255, 255, 255, 1)",
    };
  };
  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbarRecommendActive(true);
      setServiceBookingActive(true);
    } else {
      setNavbarRecommendActive(false);
      setServiceBookingActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="main-screen">
      <div className="header">
        <div className="nav-bar">
          <div
            className={
              navbarRecommendActive
                ? "nav-bar-recommend active"
                : "nav-bar-recommend"
            }
          >
            <span className="recommend-text">
              Nhiều Chương Trình Khuyến Mãi Dành Riêng Cho Bạn
            </span>
            <button className="btn btn-primary recommened-btn">
              Khám Phá Ngay
            </button>
          </div>
          <div className="nav-bar-contact">
            <div className="brand-logo">
              <img
                className="logo"
                src="https://i.ibb.co/kQFB7PG/logo-lagi-8-resize.jpg"
                alt=""
                style={{ width: "50px", height: "50px" }}
              ></img>
              <span className="brand-name">5 Men Hotel</span>
            </div>
            <nav>
              <ul className="nav_link">
                <li>
                  <NavLink exact to="/" style={{ navLinkStyle }}>
                    Trang Chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Giới Thiệu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Phòng
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Tin Tức
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ navLinkStyle }}>
                    Liên Hệ
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={
              serviceBookingActive
                ? "service-booking active"
                : "service-booking"
            }
          >
            <div className="service-booking-item">
              <a href="#" className="service-booking-icon">
                <i class="fa-solid fa-people-roof"></i>
              </a>
              <p className="service-booking-text">Phòng</p>
            </div>
            <div className="service-booking-item">
              <a href="#">
                <i class="fa-solid fa-utensils"></i>
              </a>
              <p className="service-booking-text">Nhà Hàng</p>
            </div>
            <div className="service-booking-item">
              <a href="#">
                <i class="fa-solid fa-bell-concierge"></i>
              </a>
              <p className="service-booking-text">Dịch Vụ</p>
            </div>
            <div className="service-booking-item">
              <a href="#">
                <i class="fa-solid fa-person-swimming"></i>
              </a>
              <p className="service-booking-text">Hồ Bơi</p>
            </div>
          </div>
        </div>
      </div>
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
            <label htmlFor="name">Chọn Phòng:</label>
            <br />
            <input id="dateStart" name="name" type="text" defaultValue />
            <br />
          </div>
          <div className="info-booking-item">
            <label htmlFor="name">Số Người:</label>
            <br />
            <input id="dateStart" name="name" type="text" value="--" />
            <br />
          </div>
          <div className="info-booking-item">
            <label htmlFor="name"></label>
            <br />
            <button type="submit" className="btn btn-primary info-booking-btn">
              Gửi
            </button>
          </div>
        </form>
      </div>
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
      <div className="service-outstanding">
        <p className="service-outstanding-text-item1">5 Men Hotel</p>
        <p className="service-outstanding-text-item2">Những Dịch Vụ Hấp Dẫn</p>
        <hr className="hr5" style={{ backgroundColor: "#AD854B" }} />
        <div className="service-outstanding-item">
          <Slider {...settings}>
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#">
                  Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                className="card-img-top"
                src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#">
                  Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#">
                  Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#">
                  Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#">
                  Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#">
                  Xem Chi Tiết <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="footer">
        <div className="row">
          <div className="col-4 footer-item-logo"></div>
          <div className="col-4 footer-item-info">
            <p className="footer-item-info-brand">5 Men Hotel</p>
            <p>
              <i class="fa-solid fa-location-dot"></i> Đại Học FPT, quận 9
            </p>
            <p>
              <i class="fa-solid fa-phone"></i> Đại Học FPT, quận 9
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> Đại Học FPT, quận 9
            </p>
          </div>
          <div className="col-4 footer-item-contact">
            <p className="footer-item-contact-register">Đăng Ký</p>
            <p className="footer-item-contact-text">
              Đăng ký để nhận được thông tin mới nhất từ chúng tôi
            </p>
            <form>
              <input type="email" name="email" placeholder="Email...." />
              <button type="submit">
                <i class="fa-solid fa-forward"></i>
              </button>
            </form>
            <div className="footer-item-contact-social">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <hr className="hr6" />
        <div className="footer-item-page">
          <p>Trang Chủ</p>
          <p>Giới Thiệu</p>
          <p>Phòng</p>
          <p>Tin Tức</p>
          <p>Liên Hệ</p>
        </div>
      </div>
      <div className="footer-copyright">

        <p><i class="fa-regular fa-copyright"></i>2022 Five Men Hotel. All Rights Reserved.</p>
      </div>
      <div className="arrow-btn">
        <a href="#">
          <span className="fa-solid fa-angle-up"></span>
        </a>
      </div>
    </div>
  );
}
