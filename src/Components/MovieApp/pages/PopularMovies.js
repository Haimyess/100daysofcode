/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "../styles/popularmovies.css";
import Filter from "../components/Filter";
import MovieCard from "../components/MovieCard";
import MoviesList from "../components/MoviesList";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [catBtn, setCatBtn] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState(0);

  console.log(movies);
  console.log(catBtn);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=50395059f53249a5a21f7f2fad96e49c&language=en-US&page=1";
      try {
        const response = await axios.get(url);
        console.log(response);
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        setCatBtn(response.data.results);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <Filter
        genre={genre}
        setGenre={setGenre}
        setFilteredMovies={setFilteredMovies}
        movies={movies}
        catBtn={catBtn}
      />
      <MoviesList loading={loading} filteredMovies={filteredMovies} />
    </main>
  );
}

export default PopularMovies;
