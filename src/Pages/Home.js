/** @format */

import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className='nav-container'>
        <Link to='/'>
          <img src='' alt='Logo' />
        </Link>
        <nav>
          <ul>
            <Link to='/projects'>Projects</Link>
          </ul>
        </nav>
      </header>
      <div className='home-wrapper'>
        <div className='home-container'>
          <h1>100 Days of Coding React!!</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
