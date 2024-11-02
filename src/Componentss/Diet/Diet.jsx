import React, { useState } from 'react';
import './Diet.css';
import Header from '../Header';
import Card from '../Card/Card';

const Diet = () => {
  const [foodType, setFoodType] = useState('');
  const [calories, setCalories] = useState('');
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [filteredDiets, setFilteredDiets] = useState([]);

  // Sample data for diets (you can replace this with real data)
  const diets = [
    { id: 1, foodType: 'veg', calories: 200, gender: 'male', ageRange: '18-25', name: 'Veg Diet 1' },
    { id: 2, foodType: 'veg', calories: 250, gender: 'female', ageRange: '26-35', name: 'Veg Diet 2' },
    { id: 3, foodType: 'non-veg', calories: 300, gender: 'male', ageRange: '36-45', name: 'Non-Veg Diet 1' },
    { id: 4, foodType: 'non-veg', calories: 350, gender: 'female', ageRange: '46+', name: 'Non-Veg Diet 2' },
    // Add more diet options as needed
  ];

  const handleFilterApply = () => {
    // Check if any input is missing
    if (!foodType || !calories || !gender || !ageRange) {
      alert('Please fill out all fields before applying the filter.');
      return;
    }

    // Filter diets based on the input criteria
    const filtered = diets.filter(diet => {
      return (
        diet.foodType === foodType &&
        diet.calories <= calories &&
        diet.gender === gender &&
        diet.ageRange === ageRange
      );
    });

    setFilteredDiets(filtered);
    console.log('Filters applied:', { foodType, calories, gender, ageRange });
  };

  return (
    <div>
      <Header />
      <div className="diet-container">
        <h1 className='hading'>Choose Your Diet</h1>
        
        <div className="filter-box">
          <div className="filter-option">
            <label>Choose Type of Food:</label>
            <select onChange={(e) => setFoodType(e.target.value)} value={foodType}>
              <option value="">Select</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
          </div>

          <div className="filter-option">
            <label>Enter Calories:</label>
            <input 
              type="number" 
              placeholder="Calories" 
              value={calories} 
              onChange={(e) => setCalories(e.target.value)} 
            />
          </div>

          <div className="filter-option">
            <label>Gender:</label>
            <div className="gender-options">
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  checked={gender === 'male'} 
                  onChange={(e) => setGender(e.target.value)} 
                />
                Male
              </label>
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="female" 
                  checked={gender === 'female'} 
                  onChange={(e) => setGender(e.target.value)} 
                />
                Female
              </label>
            </div>
          </div>

          <div className="filter-option">
            <label>Age Range:</label>
            <select onChange={(e) => setAgeRange(e.target.value)} value={ageRange}>
              <option value="">Select Age Range</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46+">46+</option>
            </select>
          </div>

          <button className="apply-filter-btn" onClick={handleFilterApply}>
            Apply Filter
          </button>

        </div>
      </div>

      <div className="diets-display">
        {filteredDiets.length > 0 ? (
          filteredDiets.map(diet => (
            <Card key={diet.id} diet={diet.name} /> // Assuming Card component accepts a diet prop
          ))
        ) : (
          <p>No diets found based on the applied filters.</p>
        )}
      </div>
    </div>
  );
};

export default Diet;
