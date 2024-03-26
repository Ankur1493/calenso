import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./HomeLayout";
import EventTypes from "./components/EventTypes";

function App() {
  return (
    <div className="w-full bg-black bg-dot-white/[0.2] relative pb-8">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Authentication />} />
          <Route path="/HomeLayout" element={<HomeLayout />}>
            <Route path="event-types" element={<EventTypes />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
