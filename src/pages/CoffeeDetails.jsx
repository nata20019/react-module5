import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getCoffeeDetails } from 'api/coffee-api';
import Loader from '../components/Loader';
import './pages.css';

const CoffeeDetails = () => {
  const { type, coffeeId } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!type || !coffeeId) return;

    const fetchDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const details = await getCoffeeDetails(type, coffeeId);
        setCoffee(details);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [type, coffeeId]);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="error-message">
        Oops! Something went wrong: {error.message}
      </p>
    );
  if (!coffee) return null;

  return (
    <div className="container">
      <Link to={backLinkHref} className="go-back-btn">
        Go back
      </Link>{' '}
      {/* Використовуємо Link */}
      <div className="coffee-details-card">
        <img
          src={
            coffee.image ||
            'https://via.placeholder.com/200x200.png?text=No+Image'
          }
          alt={coffee.title}
          width="200"
        />
        <div className="coffee-info">
          <h2>{coffee.title}</h2>
          <h3>Description</h3>
          <p>{coffee.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {coffee.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

// import React, { useState, useEffect, Suspense, useRef } from 'react';
// import {
//   useParams,
//   Link,
//   Outlet,
//   useLocation,
//   // useNavigate,
// } from 'react-router-dom';
// import { getMovieDetails } from '../api/themoviedb-api';
// import Loader from '../components/Loader';
// import './pages.css';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation(); // Для збереження стану попередньої сторінки
//   // const navigate = useNavigate(); // Для навігації назад
//   // const backLinkHref = location.state?.from ?? '/movies';
//   const goBack = useRef(location.state);

//   useEffect(() => {
//     if (!movieId) return;

//     const fetchDetails = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const details = await getMovieDetails(movieId);
//         setMovie(details);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [movieId]);

//   // const handleGoBack = () => {
//   //   navigate(backLinkHref);
//   // };
//   if (isLoading) return <Loader />;
//   if (error)
//     return (
//       <p className="error-message">
//         Oops! Something went wrong: {error.message}
//       </p>
//     );
//   if (!movie) return null;

//   return (
//     <div className="container">
//       {/* <button type="button" onClick={handleGoBack} className="go-back-btn">
//         Go back
//       </button> */}
//       {/* <Link to={backLinkHref}>Go back</Link> */}
//       <Link to={goBack.current}>Go back</Link>
//       <div className="movie-details-card">
//         <img
//           src={
//             movie.poster_path
//               ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//               : 'https://via.placeholder.com/200x300.png?text=No+Image'
//           }
//           alt={movie.title || movie.name}
//           width="300"
//         />
//         <div className="movie-info">
//           <h2>
//             {movie.title || movie.name} (
//             {new Date(movie.release_date).getFullYear()})
//           </h2>
//           <p>
//             User Score:{' '}
//             {movie.vote_average ? Math.round(movie.vote_average * 10) : 'N/A'}%
//           </p>
//           <h3>Overview</h3>
//           <p>{movie.overview}</p>
//           <h3>Genres</h3>
//           <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
//         </div>
//       </div>

//       <hr />

//       <h3>Additional information</h3>
//       <ul className="additional-info-list">
//         <li>
//           {/* <Link to="cast" state={{ from: backLinkHref }}> */}
//           <Link to="cast">Cast</Link>{' '}
//         </li>
//         <li>
//           {/* <Link to="reviews" state={{ from: backLinkHref }}> */}
//           <Link to="reviews">Reviews</Link>{' '}
//         </li>
//       </ul>

//       <hr />

//       {/* Outlet для рендерингу вкладених маршрутів (Cast або Reviews) */}
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// };

// export default MovieDetails;
