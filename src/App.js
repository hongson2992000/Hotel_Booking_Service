import React from "react";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { Routes, Route } from "react-router-dom";
import IntroducePage from "./pages/IntroducePage";

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

  return (
    <div className="App">
      {/* <Loading /> */}
      {/* <Navigation/> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/room" element={<RoomPage />} />
        <Route exact path="/gioithieu" element={<IntroducePage />} />
      </Routes>
      {/* <Footer />
      <FooterCopyright /> */}
      {/* <ArrowButton /> */}
    </div>
  );
}

export default App;
