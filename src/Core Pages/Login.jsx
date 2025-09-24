import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiLogIn } from "react-icons/fi";
import RegexValidation from "../Components/RegexValidation";
import "../Styles/Login.css";

const Login = ({ setIsLoggedIn }) => {
  // Local state for username, password, and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // password validation callback from RegexValidation
  const handlePasswordValidation = (valid, value) => {
    setIsPasswordValid(valid);
    setPassword(value);
    if (error) setError("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: fields must not be empty
    if (!username || !password) {
      setError("Both fields are required");
      return;
    }

    // Check if password meets criteria
    if (!isPasswordValid) {
      setError("Password does not meet the criteria");
      return;
    }

    // Hardcoded valid credentials
    const validUsername = "dhanalakshmi";
    const validPassword = "Admin@123";

    // Simulate login (store in localStorage)
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("user", username);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      setError("");
      // If validation passes → navigate to Home
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-form">
      <h2>Login to view the React Assignment</h2>
      <hr></hr>
      <h2>Login</h2>
      {/* Login Form */}
      <form onSubmit={handleSubmit} className="login-form-inner">
        <label htmlFor="username">Username:</label>
        <div className="input-icon">
          <FiUser className="user" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error) setError("");
            }}
          />
        </div>

        <label htmlFor="password">Password:</label>
        <div className="input-icon">
          <FiLock className="user" />
          <RegexValidation onValidPassword={handlePasswordValidation} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">
          <FiLogIn className="icon-button" /> Login
        </button>
      </form>
    </div>
  );
};

export default Login;
