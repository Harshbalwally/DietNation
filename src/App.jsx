import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Componentss/LoginSignup/LoginSignup';
import Home from './Componentss/Homepage/HomePage';


function App() {
  return (
   
      <Routes>

        {/* Default path to show Login/Signup page */}
        <Route path="/" element={<LoginSignup />} />

        {/* Home page that user navigates to after login/signup */}
        <Route path="/Home" element={<Home />} />
      </Routes>
  
  );
}

export default App;
