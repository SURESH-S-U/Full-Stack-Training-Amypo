import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const {theme,toggleTheme} =useContext(ThemeContext);
  return (
    <div className='{theme}'>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <span>{theme.toUpperCase()} Mode</span>
    </div>
  )
}

export default Home