import classNames from 'classnames';
import Styles from './ServiceBookingItem.module.scss'

const ServiceBookingItem = () => {
    return (
        <div className={classNames('hs-bg-dark-8 col-12 d-flex', Styles.ServiceBookingContainer)}>
            <div className={classNames('col-12 col-md-8 d-flex', Styles.ServiceBookingItems)}>
                <div className={classNames('col-2 col-md-3', Styles.ServiceBookingItem)}>
                    <a href="/" className="service-booking-icon">
                        <i className={classNames('fa-solid fa-people-roof hs-text-white-6', Styles.icon)}></i>
                    </a>
                    <p className="hs-text-white">Phòng</p>
                </div>
                <div className={classNames('col-2 col-md-3', Styles.ServiceBookingItem)}>
                    <a href="/">
                        <i className={classNames('fa-solid fa-utensils hs-text-white-6', Styles.icon)}></i>
                    </a>
                    <p className="hs-text-white">Nhà Hàng</p>
                </div>
                <div className={classNames('col-2 col-md-3', Styles.ServiceBookingItem)}>
                    <a href="/">
                        <i className={classNames('fa-solid fa-bell-concierge hs-text-white-6', Styles.icon)}></i>
                    </a>
                    <p className="hs-text-white">Dịch Vụ</p>
                </div>
                <div className={classNames('col-2 col-md-3', Styles.ServiceBookingItem)}>
                    <a href="/">
                        <i className={classNames('fa-solid fa-person-swimming hs-text-white-6', Styles.icon)}></i>
                    </a>
                    <p className="hs-text-white">Hồ Bơi</p>
                </div>
            </div>
            {/* 
            <div className="arrow-btn">
                <a href="/">
                    <span className="fa-solid fa-angle-up"></span>
                </a>
            </div> */}
        </div>
    )
}

export default ServiceBookingItem;