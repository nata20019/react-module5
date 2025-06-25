import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api/themoviedb-api';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import './pages.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className="container">
      <h1>Trending movies today</h1>
      {isLoading && <Loader />}
      {error && (
        <p className="error-message">
          Oops! Something went wrong: {error.message}
        </p>
      )}
      {!isLoading && !error && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
      {!isLoading && !error && movies.length === 0 && (
        <p>No trending movies available.</p>
      )}
      {/* {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Home;
