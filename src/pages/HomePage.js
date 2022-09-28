import React from 'react'
import Header from '../components/HomePage/Header/Header';
import InfoBookingRoom from '../components/HomePage/InfoBookingRoom';
import IntroduceHotel from '../components/HomePage/IntroduceHotel';
import ListHotelService from '../components/HomePage/ListHotelService';
import OverviewRoom from '../components/HomePage/OverviewRoom';
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
