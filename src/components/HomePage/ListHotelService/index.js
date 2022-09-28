import React from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { hotelServiceState$ } from "../../../redux/selectors/HotelServiceSelector";
import * as actions from "../../../redux/actions/HotelServiceAction";
import HotelService from "../HotelService";
export default function ListHotelService() {
  const dispatch = useDispatch();
  const listService = useSelector(hotelServiceState$);
  React.useEffect(() => {
    dispatch(actions.getHotelService.getHotelServiceRequest());
  }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="service-outstanding">
      <p className="service-outstanding-text-item1">5 Men Hotel</p>
      <p className="service-outstanding-text-item2">Những Dịch Vụ Hấp Dẫn</p>
      <hr className="hr5" style={{ backgroundColor: "#AD854B" }} />
      <div className="service-outstanding-item">
        <Slider {...settings}>
          {listService.map((service) => (
            <HotelService service={service} key={service.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
