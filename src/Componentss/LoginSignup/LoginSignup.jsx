import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import phone_icon from '../Assets/phone.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");

  const toggleAction = () => {
    setAction(action === "Sign up" ? "Login" : "Sign up");
  };

  return (
    <div className='Signup'>
      <div className='logo'>DietNation</div>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Sign up" && (
          <div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Enter your username' />
          </div>
        )}
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Enter your email' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Enter your password' />
        </div>
        {action === "Sign up" && (
          <>
            <div className='input'>
              <img src={password_icon} alt='' />
              <input type='password' placeholder='Confirm your password' />
            </div>
            <div className='input'>
              <img src={phone_icon} alt='' />
              <input type='text' placeholder='Enter your mobile number' />
            </div>
          </>
        )}
      </div>
      <button type='submit' className='submit'>
        {action}
      </button>
      <button type='button' className='toggle-action' onClick={toggleAction}>
        {action === "Sign up" ? "Switch to Login" : "Switch to Sign up"}
      </button>
    </div>
  );
};

export default LoginSignup;
