import Login from "./Core Pages/Login";
import Home from "./Core Pages/Home";
import About from "./Core Pages/About";
import Logout from "./Core Pages/Logout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./Styles/Navbar.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  return (
    <>
      <div className="app-container">
        {/* Define all application routes */}
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/home"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/logout"
              element={<Logout setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
