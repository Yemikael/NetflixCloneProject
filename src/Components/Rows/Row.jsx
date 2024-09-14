import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []); // Ensure it's always an array
      } catch (error) {
        setError('Failed to load movies.');
        console.error(error); // Log error for debugging purposes
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {error && <div className="row__error">{error}</div>}
      <div className="row__posters">
        {Array.isArray(movies) && movies.map((movie) => ( // Ensure movies is an array
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
