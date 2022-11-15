/** @format */

import React from "react";

import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  // const {} = movie;
  return (
    <div key={movie.id}>
      <Link className='movie-link' to={`/movies/${movie.id}`}>
        <div className='movie-card'>
          <div>
            <img
              className='movie-img'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
          <div className='movie-info'>
            <p className='movie-title'>{movie.title}</p>
          </div>
          <div className='rating-wrapper'>
            <span className='rating-container'>
              <h2 className='rating'>{movie.vote_average}</h2>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
