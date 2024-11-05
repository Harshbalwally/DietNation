import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import LoginSignup from "./Componentss/LoginSignup/LoginSignup";
import Home from "./Componentss/Homepage/HomePage";
import Diet from "./Componentss/Diet/Diet";
import Profile from "./Componentss/Profile/Profile";

function App() {
  return (
    <UserProvider>        <Routes>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/" element={<Home />} />
          <Route path="/Diet" element={<Diet />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
    
    </UserProvider>
  );
}

export default App;
