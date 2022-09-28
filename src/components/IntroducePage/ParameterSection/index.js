import React from "react";
import "./style.css";
export default function ParameterSection() {
  let section = document.querySelector(".three");
  let counters = document.querySelectorAll(".counter");
  let start = false;

  //   const changeNumber = () => {
  //     if (window.scrollY >= 100) {
  //       if (!start) {
  //         counter.forEach((num) => startCount(num));
  //       }
  //       start = true;
  //     }
  //   };
  counters.forEach((counter) => {
    counter.innerText = "0";
    const startCount = () => {
      let goal = counter.getAttribute("data-goal");
      const c = +counter.innerText;

      const increment = goal / 500;
      if (c < goal) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(startCount, 1);
      } else {
        counter.innerText = goal;
      }
    };
    startCount();
  });

  //   window.addEventListener("scroll", changeNumber);
  return (
    <div className="parameter_introduce_page">
      <div className="stats__number">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 stats__content">
            <p className="counter">1500</p>
            <p className="stats__content__detail">Khách sử dụng dịch vụ</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 stats__content">
            <p className="counter">900</p>
            <p className="stats__content__detail">Đánh giá 5 sao</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 stats__content">
            <p className="counter">1220</p>
            <p className="stats__content__detail">Khách hài lòng</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 stats__content">
            <p className="counter">Top 10</p>
            <p className="stats__content__detail">
              Khách sạn đáng lưu trú tại thành phố
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
