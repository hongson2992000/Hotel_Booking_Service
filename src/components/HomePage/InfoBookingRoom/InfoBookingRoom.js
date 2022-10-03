import classNames from "classnames"
import { useState } from "react";
import Styles from './InfoBookingRoom.module.scss'

const InfoBookingRoom = () => {

    const renderDropdownPerson = () => {
        return (
            <select defaultValue={0} className={classNames('hs-bg-dark hs-text-dark-grey', Styles.infoBookingDate)}>
                {Array.from(Array(10), (e, i) => {
                    return <option value={i} key={i}>{i}</option>
                })}
            </select>
        )
    }

    const handleClick = () => {
        console.log("click button check available");
    }

    return (

        <div className="hs-bg-dark">
            <div className="container-fluid hs-py-32">
                <div className={classNames('col-12 row', Styles.infoContainer)}>
                    <div className={classNames('col-12 col-lg-8 d-md-flex d-block', Styles.subContainer)}>
                        <div className={classNames('hs-text-white col-md-3 col-12', Styles.infoBooking)}>
                            <p>
                                Ngày đến:
                            </p>
                            <div className="col-12 hs-py-8">
                                <input className={classNames('hs-bg-dark hs-text-dark-grey', Styles.infoBookingDate)} id="dateStart" name="name" type="date" defaultValue />
                            </div>
                        </div>
                        <div className={classNames('hs-text-white col-md-3 col-12', Styles.infoBooking)}>
                            <p>
                                Ngày đi:
                            </p>
                            <div className=" col-12 hs-py-8">
                                <input className={classNames('hs-bg-dark hs-text-dark-grey', Styles.infoBookingDate)} id="dateStart" name="name" type="date" defaultValue />
                            </div>
                        </div>
                        <div className={classNames('hs-text-white col-md-3 col-12', Styles.infoBooking)}>
                            <p>
                                Số Người:
                            </p>
                            <div className="col-12 hs-py-8">
                                {/* <input
                                    className={classNames('hs-bg-dark hs-text-dark-grey', Styles.infoBookingDate)}
                                    type="number"
                                    onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
                                    placeholder='input number of person'
                                /> */}
                                {renderDropdownPerson()}
                            </div>
                        </div>
                        <div className={classNames('hs-text-white col-lg-4 col-md-3 col-12', Styles.infoBooking)}>
                            <p className="d-md-block invisible d-none">
                                hành động
                            </p>
                            <div className="col-12 hs-py-8">
                                <button className={classNames('hs-bg-maggie hs-text-white', Styles.btnInfoBooking)} onClick={handleClick}>Kiểm tra phòng trống</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InfoBookingRoom