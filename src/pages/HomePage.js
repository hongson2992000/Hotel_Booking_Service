import React from 'react'
import Header from '../components/HomePage/Header/Header';
import ListHotelService from '../components/HomePage/ListHotelService/ListHotelService';
import InfoBookingRoom from '../components/InfoBookingRoom/InfoBookingRoom';
import IntroduceHotel from '../components/IntroduceHotel/IntroduceHotel';
import OverviewRoom from '../components/OverviewRoom/OverviewRoom';
export default function HomePage() {
  return (
    <div className='main-screen'>
      <Header />
      {/* <CarouselHomePage /> */}
      <InfoBookingRoom />
      <IntroduceHotel />
      <OverviewRoom />
      <ListHotelService />
    </div>
  )
}
