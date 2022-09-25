/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Switch from "@mui/material/Switch";

// export const ThemeContext = createContext(null)

function ColorMode() {
  const [theme, setTheme] = useState("light");

  const handleMode = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className='colormode-wrapper' id={theme}>
      <header className='nav-container'>
        <Link className='logo' to='/'>
          <img src='' alt='Logo' />
        </Link>
        <nav>
          <ul>
            <Link className='projects' to='/projects'>
              Projects
            </Link>
          </ul>
        </nav>
      </header>
      <div className='colormode-container'>
        <Switch onClick={handleMode} />
        <p className='colormode-p'>Dark mode</p>
      </div>
    </div>
  );
}

export default ColorMode;
