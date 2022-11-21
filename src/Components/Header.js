/** @format */

import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  return (
    <header className='nav-container'>
      <Link className='logo-link' to='/'>
        <p className='logo'>100DaysCodingReact</p>
        {/* <img src={{ logo }} alt='Logo' /> */}
      </Link>
      <nav>
        <ul>
          <Link className='projects' to='/projects'>
            Projects
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
