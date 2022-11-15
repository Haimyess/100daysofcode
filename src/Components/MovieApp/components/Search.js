/** @format */

import React from "react";

import "../styles/moviessearch.css";

import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className='movies-search'>
      <SearchIcon />
      <input
        className='search-input'
        type='search'
        placeholder='Search movies...'
      />
    </div>
  );
}

export default Search;
