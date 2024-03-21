import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <div className="w-full bg-black bg-dot-white/[0.2] relative pb-8">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} ></Route>
          <Route path='/login' element={<Authentication />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
