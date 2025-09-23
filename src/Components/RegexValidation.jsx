// password regex validation - min 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
// const regexPassword-  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

import { useState } from "react";

const RegexValidation = ({ onValidPassword }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!passwordRegex.test(value)) {
      setError(
        "! Must be at least 8 characters, include uppercase, lowercase, number & special char."
      );
      onValidPassword(false, value);
    } else {
      setError("");
      onValidPassword(true, value);
    }
  };

  return (
    <div className="input-icon">
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RegexValidation;
