import React from "react";
import Styles from "./ListHotelService.module.scss"
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { hotelServiceState$ } from "../../../redux/selectors/HotelServiceSelector";
import * as actions from "../../../redux/actions/HotelServiceAction";
import classNames from "classnames";
import HotelServiceSlide from "../HotelService/HotelServiceSlide";
import './CustomSlider.css'

const ListHotelService = () => {
    const dispatch = useDispatch();
    const listService = useSelector(hotelServiceState$);

    const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
        const { onClick } = props;

        return (
            <div {...props} className="custom-prevArrow d-none" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </div>
        );
    };

    const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
        const { onClick } = props;

        return (
            <div {...props} className="custom-nextArrow d-none" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </div>
        );
    };

    React.useEffect(() => {
        dispatch(actions.getHotelService.getHotelServiceRequest());
    }, [dispatch]);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: "linear",
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    console.log('service: ', listService);
    return (
        <div className={classNames('introduce col-12 hs-bg-dark-9 hs-py-32', Styles.listServiceContainer)}>
            <div className="text-xl hotel-name">5 Men Hotel</div>
            <div className="text-xl title">Những Dịch Vụ Hấp Dẫn</div>
            <hr className="hr" />
            <div className={classNames('hs-py-32 col-12 d-flex', Styles.Slider)}>
                <div className="col-10">
                    <Slider {...settings}>
                        {listService.map((service) => (
                            <HotelServiceSlide service={service} key={service.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ListHotelService