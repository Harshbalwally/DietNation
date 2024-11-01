import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Componentss/LoginSignup/LoginSignup";
import Home from "./Componentss/Homepage/HomePage";


function App() {
  return (
    <Routes>
    
    
      <Route path="/login" element={<LoginSignup />} />

      {/* Home page that user navigates to after login/signup */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
