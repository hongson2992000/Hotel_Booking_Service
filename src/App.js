import React from "react";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { Routes, Route } from "react-router-dom";
import IntroducePage from "./pages/IntroducePage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./components/HomePage/Navigation/Navigation";
import Footer from "./components/Footer/Footer/Footer";
import FooterCopyright from "./components/Footer/FooterCopyright/FooterCopyright";
import NewsComponent from "./components/News/NewsComponent";

function App() {
  // const [baseNavbar, setbaseNavbar] = useState(<Navbar />);
  // const [path, setPath] = useState("/");
  // let changePage = () => {
  //   console.log("Hello Son");
  //   if (window.location.pathname !== path) {
  //     setPath(window.location.pathname);
  //   } else {
  //     setPath("/");
  //   }
  // };
  // window.addEventListener("click", changePage)
  // React.useEffect(() => {
  //   console.log("hhelo");
  //   if (window.location.pathname !== "/") {
  //     setbaseNavbar(<NavbarHome />);
  //   } else {
  //     setbaseNavbar(<Navbar />);
  //   }
  // }, [path]);
  // // useMemo(() => {
  // //   return changePage();
  // // }, [window.location.pathname]);
  // // let baseNavbar;

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const checkHomePage = () => {
    if (currentPath === '/' || currentPath === '/home') {
      return true;
    }

    return false;
  }

  return (
    <div className="App">
      {/* <Loading /> */}
      {!checkHomePage() && <Navigation />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/room" element={<RoomPage />} />
        <Route exact path="/introduce" element={<IntroducePage />} />
        <Route exact path="/news" element={<NewsComponent />} />
      </Routes>
      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;
