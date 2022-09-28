import React from 'react'
import Header from '../components/HomePage/Header/Header'
// import Footer from '../components/HomePage/Footer';
// import FooterCopyright from '../components/HomePage/FooterCopyright';

import ListHotelService from '../components/HomePage/ListHotelService/ListHotelService';
import InfoBookingRoom from '../components/InfoBookingRoom/InfoBookingRoom';
// import OverviewRoom from '../components/HomePage/OverviewRoom/OverviewRoom';
import IntroduceHotel from '../components/IntroduceHotel/IntroduceHotel';
import OverviewRoom from '../components/OverviewRoom/OverviewRoom';

// import IntroduceHotel from '../components/HomePage/IntroduceHotel';

// import OverviewRoom from '../components/HomePage/OverviewRoom';

export default function HomePage() {
  return (

    <>
      <Header />
      <InfoBookingRoom />
      <IntroduceHotel />
      <OverviewRoom />
      <ListHotelService />
      {/* <Footer */}
      {/* <FooterCopyright />*/}
    </>
  )
}
