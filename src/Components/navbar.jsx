import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <Link to="/login">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/logout">Logout</Link>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
