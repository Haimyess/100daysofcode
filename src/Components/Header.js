/** @format */

import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  return (
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
  );
}

export default Header;
