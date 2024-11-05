// Profile.jsx
import React from 'react';
import './profile.css'
import Header from '../Header';

const Profile = ({ userName, profilePicture, bmi, maintenanceCalories, weight, goal }) => {
  return (
    <div>
      <Header/>
    <div className="profile-container">
      <h2>Hey, {userName}!</h2>
      <div className="profile-picture">
        <img src={profilePicture || 'default-profile.jpg'} alt="Profile" />
      </div>
      <div className="user-info-box">

        <p><strong>BMI:</strong> {bmi ? `${bmi}` : 'Not calculated'}</p>
        <p><strong>Maintenance Calories:</strong> {maintenanceCalories ? `${maintenanceCalories} kcal/day` : 'Not calculated'}</p>
        <p><strong>Current Weight:</strong> {weight ? `${weight} kg` : 'Not specified'}</p>
        <p><strong>Goal:</strong> {goal || 'Set your goal'}</p>
      </div>
    </div>
    </div>
  );
};

export default Profile;
