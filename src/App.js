import React from "react";
import WOW from "wowjs";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { Route, Routes } from "react-router-dom";
function App() {
  React.useEffect(() => {
    new WOW.WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 300, // default
      mobile: false, // default
      live: true, // default
    }).init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
