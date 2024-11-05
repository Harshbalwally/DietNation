import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./HomePage.css";
import Layout from "../Layout";
import Card from "../Card/Card";
import Verticalline from "../Vertical-Line/Verticalline";
import UserContext from "../../UserContext";

const Home = () => {
  const navigate = useNavigate();

  // Access context to store and retrieve BMI, maintenance calories, and weight
  const { setBmi, setMaintenanceCalories, setWeight, maintenanceCalories } = useContext(UserContext);

  // States for BMI calculation
  const [showBmiSection, setShowBmiSection] = useState(false);
  const [weight, localSetWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");

  // States for maintenance calories calculation
  const [showCaloriesSection, setShowCaloriesSection] = useState(false);
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  // Toggle BMI section visibility
  const toggleBmiSection = () => {
    setShowBmiSection((prev) => !prev);
  };

  // Toggle Maintenance Calories section visibility
  const toggleCaloriesSection = () => {
    setShowCaloriesSection((prev) => !prev);
  };

  // BMI calculation logic
  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi); // Store BMI in context
      determineBmiCategory(calculatedBmi);
    }
  };

  const determineBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiCategory("Underweight - Consider gaining weight.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory("Normal weight - You are in good shape!");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory("Overweight - Consider losing weight.");
    } else if (bmiValue >= 30 && bmiValue < 34.9) {
      setBmiCategory("Obese (Class I) - Please consult with a healthcare professional.");
    } else if (bmiValue >= 35 && bmiValue < 39.9) {
      setBmiCategory("Obese (Class II) - High risk, consider immediate lifestyle changes.");
    } else {
      setBmiCategory("Obese (Class III) - Very high risk, consult with a doctor.");
    }
  };

  // Maintenance calories calculation logic
  const calculateMaintenanceCalories = () => {
    if (weight && height && age && activityLevel) {
      const bmr =
        10 * weight + 6.25 * height - 5 * age + (activityLevel === "male" ? 5 : -161);

      const activityMultiplier = {
        sedentary: 1.2,
        "lightly active": 1.375,
        "moderately active": 1.55,
        "very active": 1.725,
        "super active": 1.9,
      };

      setMaintenanceCalories((bmr * activityMultiplier[activityLevel]).toFixed(0)); // Store Maintenance Calories in context
    }
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    localSetWeight(newWeight); // Update local weight
    setWeight(newWeight); // Update weight in context
  };

  return (
    <Layout>
      <div className="home-container">
        {/* Toggleable BMI Section */}
        <div className="bmi-toggle-section" onClick={toggleBmiSection}>
          <button id="aboutheading">Calculate Your BMI</button>
        </div>

        {showBmiSection && (
          <div className="bmi-section">
            <div className="bmi-box">
              <div className="bmi-inputs">
                <label>Weight (kg):<br /></label>
                <input
                  className="weight"
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="Enter your weight"
                />
              </div>
              <div className="bmi-inputs">
                <label>Height (cm):<br /></label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                />
              </div>
              <button onClick={calculateBmi} className="calculate-bmi-btn">
                Calculate BMI
              </button>
            </div>

            {bmiCategory && (
              <div className="bmi-result">
                <h3>Your BMI Category: {bmiCategory}</h3>
                {(bmiCategory.includes("gaining weight") || bmiCategory.includes("losing weight")) && (
                  <button className="see-diets-btn">
                    {bmiCategory.includes("gaining weight")
                      ? "See diets for gaining weight"
                      : "See diets for losing weight"}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Maintenance Calories Section */}
        <div className="calories-toggle-section" onClick={toggleCaloriesSection}>
          <button id="aboutheadings">Calculate Your Maintenance Calories</button>
        </div>
        {showCaloriesSection && (
          <div className="calories-section">
            <div className="calories-box">
              <div className="calories-inputs">
                <label>Weight (kg):<br /></label>
                <input
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                  placeholder="Enter your weight"
                />
              </div>
              <div className="calories-inputs">
                <label>Height (cm):<br /></label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                />
              </div>
              <div className="calories-inputs">
                <label>Age:<br /></label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                />
              </div>
              <div className="calories-input">
                <label>Activity Level:<br /></label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="lightly active">Lightly active</option>
                  <option value="moderately active">Moderately active</option>
                  <option value="very active">Very active</option>
                  <option value="super active">Super active</option>
                </select>
              </div>
              <button onClick={calculateMaintenanceCalories} className="calculate-bmi-btn">
                Calculate Maintenance Calories
              </button>
            </div>

            <div className="calories-result">
              <h3>Your Maintenance Calories: {maintenanceCalories} kcal/day</h3>
            </div>
          </div>
        )}
        
        <br /><br /><br /><br />

        <h1 className="headinghaiye">Recommended Diets:</h1>
        <br />
       
        <table>
          <tr>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <Verticalline />
          </tr>
          <br />
          <tr>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
          </tr>
          <br />
          <tr>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
            <th><Card /></th>
          </tr>
        </table>
      </div>
    </Layout>
  );
};

export default Home;
