import React from 'react'
// import ArrowButton from '../components/HomePage/ArrowButton';
import CarouselHomePage from '../components/HomePage/CarouselHomePage';
// import Footer from '../components/HomePage/Footer';
// import FooterCopyright from '../components/HomePage/FooterCopyright';
// import Header from '../components/HomePage/Header';
import InfoBookingRoom from '../components/HomePage/InfoBookingRoom';
import IntroduceHotel from '../components/HomePage/IntroduceHotel';
import ListHotelService from '../components/HomePage/ListHotelService';
// import NavbarHotelService from '../components/HomePage/NavbarHotelService';
import OverviewRoom from '../components/HomePage/OverviewRoom';
export default function HomePage() {
  return (
    <div className='main-screen'>
      {/* <Header/> */}
      <CarouselHomePage/>
      <InfoBookingRoom/>
      <IntroduceHotel/>
      <OverviewRoom/>
      <ListHotelService/>
      {/* <Footer/>
      <FooterCopyright/>
      <ArrowButton/> */}
    </div>

  )
}
