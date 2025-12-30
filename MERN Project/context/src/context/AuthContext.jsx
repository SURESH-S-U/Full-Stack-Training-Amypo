import { createContext, useState } from "react";

// Create a constext onject for Authentication
// This will store and share the login date globally

export const AuthContext = createContext();



const AuthProvider = ({children}) => {

    // Create a state to store the logged in information.
    const [user , setUser] = useState(null);

    // Function to login the user
    const login = (name) => {
        setUser(name);
    }

    // Function to logOut the user
    const logout = () => {
        setUser(null);
    }

  
  
  
    return (
        
        <AuthContext.Provider value={{user, login, logout}}>
            {children}      {/* All wrapped components can aceess */}
        </AuthContext.Provider>
  )
}

export default AuthProvider