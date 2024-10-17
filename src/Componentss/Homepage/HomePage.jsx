import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Layout from "../Layout";

const Home = () => {
  const navigate = useNavigate();

  // States for BMI calculation
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const handleLogout = () => {
    // Handle any logout logic here, then navigate back to login
    navigate("/");
  };

  // BMI calculation logic
  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const calculatedBmi = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(calculatedBmi);
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
      setBmiCategory(
        "Obese (Class I) - Please consult with a healthcare professional."
      );
    } else if (bmiValue >= 35 && bmiValue < 39.9) {
      setBmiCategory(
        "Obese (Class II) - High risk, consider immediate lifestyle changes."
      );
    } else {
      setBmiCategory(
        "Obese (Class III) - Very high risk, consult with a doctor."
      );
    }
  };

  return (
    <Layout>
      {" "}
      <div className="home-container">
        {/* About Section */}
        <div className="about-section">
          <h2>About</h2>
          <p>
            Welcome to Diet Nation! Our website helps you track your calorie
            intake and monitor your food consumption based on the tailored diets
            we offer, guiding you towards your fitness goals. We place a strong
            emphasis on maintaining overall physical health and well-being.
          </p>
        </div>

        {/* BMI Section */}
        <div className="bmi-section">
          <h2>Calculate Your BMI</h2>
          <div className="bmi-box">
            <div className="bmi-inputs">
              <label>Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
              />
            </div>
            <div className="bmi-inputs">
              <label>Height (cm):</label>
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

          {bmi && (
            <div className="bmi-result">
              <h3>Your BMI: {bmi}</h3>
              <p>{bmiCategory}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
