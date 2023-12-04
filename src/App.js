import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import Conventionhall from "./components/Conventionhall";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Datepicker from "./components/Datepicker";
import Roombooking from "./components/Roombooking";
import Payment from "./components/Payment";
import "react-loading-skeleton/dist/skeleton.css";
import Chat from "./components/Chat";

function App() {
  return (
    <>
    <Chat/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/conventionhall" element={<Conventionhall />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/date" element={<Datepicker />} />
        <Route path="/rooms/:id" element={<Roombooking />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
