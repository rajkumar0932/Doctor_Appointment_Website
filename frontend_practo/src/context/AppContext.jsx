import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create Context
export const AppContext = createContext();
// it creates a global container

// Provider Component
const AppContextProvider = ({ children }) => {

  // Global state / data
   const currencySymbol ='$'
  const value = {
    doctors,
    currencySymbol
  };
 

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
    // any component inisde this container can access value directly
  );
};
// without it we will need propdrilling

export default AppContextProvider;