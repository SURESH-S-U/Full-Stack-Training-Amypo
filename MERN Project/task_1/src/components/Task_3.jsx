import React, { useState } from 'react'

function Task_3() {
    const [isDarkMode, setisDarkMode] = useState(false);

    const toggleTheme = () => {
        setisDarkMode(!isDarkMode);
    }

    const themeStyle = {
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#333',

        minHeight: '100vh',
        padding: '20px',

        display: 'flex',          // enable flexbox
        justifyContent: 'center', // horizontal center
        alignItems: 'center',     // vertical center
        flexDirection: 'column',  // stack items vertically

        transition: '0.7s',
    };


    const buttonStyle = {
        padding: '10px',
        backgroundColor: isDarkMode ? '#7f7f7fff' : '#7d98dcff',
        color: isDarkMode ? '#ffffffff' : '#000000ff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: '0.7s'
    }

  return (
    <div style={themeStyle}>
        <h2>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h2>
        <button onClick={toggleTheme} style={buttonStyle}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</button>
    </div>
  )
}

export default Task_3