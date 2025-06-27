import React, { useState, useEffect } from 'react';
import { fetchIcedCoffee } from '../api/coffee-api';
import Loader from '../components/Loader';
import CoffeeList from '../components/CoffeeList';
import './pages.css';

const IcedCoffee = () => {
  const [coffeeList, setCoffeeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIcedCoffee = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const icedCoffee = await fetchIcedCoffee();
        setCoffeeList(icedCoffee);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getIcedCoffee();
  }, []);

  return (
    <div className="container">
      <h1>Iced Coffee Recipes</h1>
      {isLoading && <Loader />}
      {error && (
        <p className="error-message">
          Oops! Something went wrong: {error.message}
        </p>
      )}
      {!isLoading && !error && coffeeList.length > 0 && (
        <CoffeeList coffees={coffeeList} type="iced" />
      )}
      {!isLoading && !error && coffeeList.length === 0 && (
        <p>No iced coffee recipes available.</p>
      )}
    </div>
  );
};

export default IcedCoffee;

// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovies } from '../api/themoviedb-api';
// import Loader from '../components/Loader';
// import MoviesList from '../components/MoviesList';
// import './pages.css';

// const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') || '';

//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [inputValue, setInputValue] = useState(query);

//   useEffect(() => {
//     if (!query) {
//       setMovies([]);
//       return;
//     }

//     const fetchMovies = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const data = await searchMovies(query);
//         if (data.results.length === 0) {
//           alert(`No movies found for "${query}".`);
//         }
//         setMovies(data.results);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [query]);
//   const handleSearch = e => {
//     e.preventDefault();
//     const newQuery = inputValue.trim();
//     if (newQuery === '') {
//       alert('Please enter a search query.');
//       return;
//     }
//     setSearchParams({ query: newQuery });
//   };

//   return (
//     <div className="container">
//       <h1>Search Movies</h1>
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//           placeholder="Search movies..."
//         />
//         <button type="submit">Search</button>
//       </form>

//       {isLoading && <Loader />}
//       {error && (
//         <p className="error-message">
//           Oops! Something went wrong: {error.message}
//         </p>
//       )}
//       {!isLoading && !error && movies.length > 0 && (
//         <MoviesList movies={movies} />
//       )}
//       {!isLoading && !error && movies.length === 0 && query && (
//         <p>No movies found for "{query}".</p>
//       )}

//     </div>
//   );
// };

// export default Movies;
