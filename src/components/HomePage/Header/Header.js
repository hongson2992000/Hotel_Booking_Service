import React from "react";
import Styles from './header.module.scss'
import background from './../../../assets/images/trangchu.jpg'
import Navigation from "../Navigation/Navigation";
import ServiceBookingItem from "../ServiceBookingItem/ServiceBookingItem";

const Header = () => {
  // const [navbarRecommendActive, setNavbarRecommendActive] = useState(false);
  // // const [serviceBookingActive, setServiceBookingActive] = useState(false);

  // // const navLinkStyle = ({ isActive }) => {
  // //   return {
  // //     color: isActive ? "rgba(173, 133, 75, 1)" : "rgba(255, 255, 255, 1)",
  // //   };
  // // };
  // const changeBackground = () => {
  //   if (window.scrollY >= 400) {
  //     setNavbarRecommendActive(true);
  //     // setServiceBookingActive(true);
  //   } else {
  //     setNavbarRecommendActive(false);
  //     // setServiceBookingActive(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

  return (
    <div className={Styles.headerContainer} style={{ '--backgroundImage': `url(${background})` }}>
      <div className={Styles.navBar}>
        <Navigation />
        <ServiceBookingItem />
      </div>
    </div>
  );
}

export default Header