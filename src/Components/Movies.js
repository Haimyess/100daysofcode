/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=50395059f53249a5a21f7f2fad96e49c&language=en-US&page=1";
      try {
        const response = await axios.get(url);
        console.log(response);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <input type='search' placeholder='Search movies...' />
      <section className='movies'>
        {loading ? (
          <div>Loading</div>
        ) : (
          movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
                <div>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}

export default Movies;
