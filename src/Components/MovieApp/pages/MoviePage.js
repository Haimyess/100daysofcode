/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import "../styles/moviepage.css";

function MoviePage() {
  const [movie, setMovie] = useState([]);
  // const [movieImages, setMovieImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [like, setLike] = useState([]);
  console.log([movie]);

  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=50395059f53249a5a21f7f2fad96e49c&language=en-US`;

      try {
        const response = await axios.get(movieUrl);

        setMovie([response.data]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);

  // useEffect(() => {
  //   const getImages = async () => {
  //     const movieImagesUrl = `https://api.themoviedb.org/3/movie/${params.movieid}/images?api_key=50395059f53249a5a21f7f2fad96e49&language=en-US`;

  //     try {
  //       const response = await axios.get(movieImagesUrl);

  //       setMovieImages([response.data]);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getImages();
  // }, []);

  const handleLike = (movie) => {
    console.log(movie);

    setLike((prev) => prev + movie);
  };

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        movie.map((singleMovie) => {
          return (
            <>
              <header>
                <div className='singlemovie-container'>
                  <div>
                    <div>
                      <img
                        className='singlemovie-poster'
                        src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
                      />
                    </div>

                    <div>
                      <h1>{singleMovie.title}</h1>
                      <p>{singleMovie.tagline}</p>

                      <div>
                        <button onClick={() => handleLike(singleMovie)}>
                          Like
                        </button>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>

                <img
                  className='singlemovie-img'
                  src={`https://image.tmdb.org/t/p/w500/${singleMovie.backdrop_path}`}
                />
              </header>
              <main></main>
            </>
          );
        })
      )}
    </div>
  );
}

// Individual movie page.
/* 
        1. Title
        2. Image
        3. Description
        4. Rate
        5. Actors
        6. Year of release
        7. Comments
        8. Make a comment
        9. Share 
*/

export default MoviePage;
