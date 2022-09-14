import React from 'react'
import Footer from '../components/HomePage/Footer';
import FooterCopyright from '../components/HomePage/FooterCopyright';
import Header from '../components/HomePage/Header';
import InfoBookingRoom from '../components/HomePage/InfoBookingRoom';
import IntroduceHotel from '../components/HomePage/IntroduceHotel';
import ListHotelService from '../components/HomePage/ListHotelService';
import OverviewRoom from '../components/HomePage/OverviewRoom';
export default function HomePage() {
  return (
    <div className='main-screen'>
      <Header/>
      <InfoBookingRoom/>
      <IntroduceHotel/>
      <OverviewRoom/>
      <ListHotelService/>
      <Footer/>
      <FooterCopyright/>
    </div>

  )
}
