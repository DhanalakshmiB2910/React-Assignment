import { useState } from "react";
import "../Styles/Logout.css";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleLoginRedirect = () => {
    setAnimate(true);
    setTimeout(() => {
      navigate("/login"); // navigate after animation
    }, 700); // duration of animation
  };

  return (
    <div className={`container card logout-page ${animate ? "slide-out" : ""}`}>
      <h2>You have successfully logged out!</h2>
      <p>Thank you for using the application.</p>
      <button className="primary" onClick={handleLoginRedirect}>
        <FiLogIn className="icon-button" /> Login Again
      </button>
    </div>
  );
};

export default Logout;
