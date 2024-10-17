import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Homepage/HomePage.css';




const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Handle any logout logic here, then navigate back to login
        navigate('/');
      };
  return (
    <div>

       <nav className='navbar'>
        <nav className="nav-buttons">
          <button onClick={() => navigate('/home')}>Home</button>
          <button onClick={() => navigate('/diets')}>Diets</button>
          <button onClick={() => navigate('/profile')}>Your Profile</button>
          <button onClick={handleLogout}>Log Out</button>
        </nav>
        </nav>
    </div>
  )
}

export default Header
