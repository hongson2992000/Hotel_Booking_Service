import React from "react";
import Breadcrumb from "../components/IntroducePage/Breadcrumb/Breadcrumb";
import CustomerFeedback from "../components/IntroducePage/CustomerFeedback/CustomerFeedback";
import EvaluateComponent from "../components/IntroducePage/EvaluateComponent/EvaluateComponent";
import GainComponent from "../components/IntroducePage/GainComponent/GainComponent";
import WelcomeComponent from "../components/IntroducePage/WelcomeComponent/WelcomeComponent";
// import CustomerFeedback from "../components/IntroducePage/CustomerFeedback";
// import ParameterSection from "../components/IntroducePage/ParameterSection";
// import SupportService from "../components/IntroducePage/SupportService";
// import WelcomeSection from "../components/IntroducePage/WelcomeSection";

export default function IntroducePage() {
  return (
    <div className="main-screen">
      <Breadcrumb />
      <WelcomeComponent />
      <EvaluateComponent />
      <GainComponent />
      <CustomerFeedback />
      {/* <WelcomeSection />
      <ParameterSection/>
      <SupportService/>
      <CustomerFeedback/> */}
    </div>
  );
}
