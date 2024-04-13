import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import EventTypes from "./components/EventTypes";
import Bookings from "./components/Bookings";
import MeetingDetails from "./components/MeetingDetails";
import Calendar from "./components/Calendar";
import ScheduleBooking from "./pages/ScheduleBooking";

function App() {
  return (
    <div className="w-full bg-black bg-dot-white/[0.2] relative ">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Authentication />} />
          <Route path="/Home" element={<HomeLayout />}>
            <Route path="meeting/:id" element={<MeetingDetails />} />
            <Route path="event-types" element={<EventTypes />}></Route>
            <Route path="bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer /> */}
      <Calendar />
      <ScheduleBooking />
    </div>
  );
}

export default App;
