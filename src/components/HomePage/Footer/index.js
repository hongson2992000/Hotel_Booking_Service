import React from "react";

export default function Footer() {
  return (
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
  );
}
