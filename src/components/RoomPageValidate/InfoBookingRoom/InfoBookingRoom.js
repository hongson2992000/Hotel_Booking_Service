import classNames from 'classnames'
import React from 'react'
import Styles from "./InfoBookingRoom.module.scss"
export default function InfoBookingRoom() {
  return (
    <div className={classNames("hs-bg-dark-9 col-12",Styles.InfoBookingRoom)}>
        <div className={classNames('col-8 row',Styles.InfoBookingRoomItem)}>
        <div className='col-6'>
        <select>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
        </select>
        </div>
        <div className='col-6'>
        <select>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
            <option>29 Tháng Chín - 30 Tháng Chín</option>
        </select>
        </div>
        </div>
    </div>
  )
}
