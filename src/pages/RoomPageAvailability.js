import React from 'react'
import Breadcrumb from '../components/IntroducePage/Breadcrumb/Breadcrumb'
import image from "../assets/images/roomType/phong.jpg"
import InfoBookingRoom from '../components/RoomPageValidate/InfoBookingRoom/InfoBookingRoom'
import RoomAvailability from '../components/RoomPageValidate/InfoRoomAvailability/InfoRoomAvailability'
export default function RoomPageCheckValidate() {
  return (
    <div className='main-screen'>
        <Breadcrumb image={image}/>
        <InfoBookingRoom/>
        <RoomAvailability/>
    </div>
  )
}
