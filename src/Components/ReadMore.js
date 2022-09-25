/** @format */

import React from "react";
import { Link } from "react-router-dom";

function ReadMore() {
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
      <p>
        <Link to='/'>Go back Home..</Link>
      </p>
      <h1>Read More..</h1>
    </div>
  );
}

export default ReadMore;
