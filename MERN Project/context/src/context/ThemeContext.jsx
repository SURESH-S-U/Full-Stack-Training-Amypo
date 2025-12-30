import { createContext, useState } from "react";


// Create context
export const ThemeContext = createContext();



const ThemeProvider = ({children}) => {

    // Create State
    const [theme , setTheme] = useState("light");

    // Function to change the Theme.
    // If current is light - then change to dark or viceversa

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <div>

        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {children}      {/* All wrapped components can aceess */}
        </ThemeContext.Provider>

    </div>
  )
}

export default ThemeProvider