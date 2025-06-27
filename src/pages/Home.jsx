import React, { useState, useEffect } from 'react';
import { fetchHotCoffee } from '../api/coffee-api';
import Loader from '../components/Loader';
import CoffeeList from '../components/CoffeeList';
import './pages.css';

const Home = () => {
  const [coffeeList, setCoffeeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotCoffee = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const hotCoffee = await fetchHotCoffee();
        setCoffeeList(hotCoffee);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getHotCoffee();
  }, []);

  return (
    <div className="container">
      <h1>Hot Coffee Recipes</h1>
      {isLoading && <Loader />}
      {error && (
        <p className="error-message">
          Oops! Something went wrong: {error.message}
        </p>
      )}
      {!isLoading && !error && coffeeList.length > 0 && (
        <CoffeeList coffees={coffeeList} type="hot" />
      )}
      {!isLoading && !error && coffeeList.length === 0 && (
        <p>No hot coffee recipes available.</p>
      )}
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from '../api/themoviedb-api';
// import Loader from '../components/Loader';
// import MoviesList from '../components/MoviesList';
// import './pages.css';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getTrendingMovies = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const trendingMovies = await fetchTrendingMovies();
//         setMovies(trendingMovies);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getTrendingMovies();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Trending movies today</h1>
//       {isLoading && <Loader />}
//       {error && (
//         <p className="error-message">
//           Oops! Something went wrong: {error.message}
//         </p>
//       )}
//       {!isLoading && !error && movies.length > 0 && (
//         <MoviesList movies={movies} />
//       )}
//       {!isLoading && !error && movies.length === 0 && (
//         <p>No trending movies available.</p>
//       )}
//       </div>
//   );
// };

// export default Home;
