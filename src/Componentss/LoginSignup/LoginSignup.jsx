import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import phone_icon from "../Assets/phone.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  const toggleAction = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a login or signup success
    // After login/signup success, navigate to the Home page
    navigate("/home");
  };

  return (
    <div className="Signup">
      <div className="logo">DietNation</div>
      <div className="header">
        <div className="text">{isSignup ? "Sign up" : "Login"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {isSignup && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter your username" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Enter your password" />
        </div>
        {isSignup && (
          <>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Confirm your password" />
            </div>
            <div className="input">
              <img src={phone_icon} alt="" />
              <input type="text" placeholder="Enter your mobile number" />
            </div>
          </>
        )}
      </div>
      <button type="submit" className="submit" onClick={handleSubmit}>
        {isSignup ? "Sign up" : "Login"}
      </button>
      <button type="button" className="toggle-action" onClick={toggleAction}>
        {isSignup ? "Switch to Login" : "Switch to Sign up"}
      </button>
    </div>
  );
};

export default LoginSignup;
