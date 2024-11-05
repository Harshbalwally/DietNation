import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [bmi, setBmi] = useState(null);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);
  const [weight, setWeight] = useState("");

  return (
    <UserContext.Provider
      value={{
        bmi,
        setBmi,
        maintenanceCalories,
        setMaintenanceCalories,
        weight,
        setWeight,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
