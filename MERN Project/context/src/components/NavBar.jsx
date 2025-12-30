import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {

    // Using Created Context
    const {user, login , logout} = useContext(AuthContext);

  return (
    <div>
        {user ? 
        (<>
        <span>Welcome {user}</span>
        <button onClick={logout}>LogOut</button>
        </>) 
        : 
        (
            <button onClick={() => login("Suresh")}>login</button>
        )}
    </div>
  )
}

export default NavBar