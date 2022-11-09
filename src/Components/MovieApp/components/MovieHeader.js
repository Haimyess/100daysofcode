/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function MovieHeader() {
  return (
    <header className='movie-header'>
      <div>
        <Link to='/projects'>back</Link>
        <p className='logo'>TheMovieApp</p>
      </div>

      <nav className='movie-nav'>
        <Link to=''>Popular Movies</Link>
        <Link>Likes</Link>
      </nav>
    </header>
  );
}

export default MovieHeader;
