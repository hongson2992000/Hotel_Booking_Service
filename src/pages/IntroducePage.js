import React from "react";
import Carousel from "../components/IntroducePage/Carousel";
import CustomerFeedback from "../components/IntroducePage/CustomerFeedback";
import ParameterSection from "../components/IntroducePage/ParameterSection";
import SupportService from "../components/IntroducePage/SupportService";
import WelcomeSection from "../components/IntroducePage/WelcomeSection";

export default function IntroducePage() {
  return (
    <div className="main-screen">
      <Carousel />
      <WelcomeSection />
      <ParameterSection/>
      <SupportService/>
      <CustomerFeedback/>
    </div>
  );
}
