/** @format */

import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/movieheader.css";

function MovieHeader() {
  return (
    <header className='movie-header'>
      <div>
        <div style={{ display: "inline-block" }}>
          <Link className='back-link' to='/projects'>
            <div className='back-link-container'>
              {" "}
              <span>
                <ArrowBackIcon />
              </span>
              back to projects
            </div>
          </Link>
        </div>

        <div>
          <p className='logo'>TheMovieApp</p>
        </div>
      </div>

      <nav className='movie-nav'>
        <NavLink className='movie-nav-links popular' to='/movies/' end={true}>
          Popular Movies
        </NavLink>

        <NavLink
          className='movie-nav-links likes'
          to='/movies/likes'
          end={true}>
          Likes
        </NavLink>
      </nav>
    </header>
  );
}

export default MovieHeader;
