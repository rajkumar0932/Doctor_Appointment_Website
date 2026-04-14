import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create Context
export const AppContext = createContext();

// Provider Component
const AppContextProvider = ({ children }) => {

  // Global state / data
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;