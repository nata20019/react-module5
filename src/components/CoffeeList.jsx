import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoffeeList = ({ coffees, type }) => {
  const location = useLocation();

  if (!coffees || coffees.length === 0) {
    return <p>No coffee recipes to display.</p>;
  }
  return (
    <ul className="coffee-list">
      {coffees.map(coffee => (
        <li key={coffee.id} className="coffee-list-item">
          <Link to={`/${type}/${coffee.id}`} state={{ from: location }}>
            <img
              src={
                coffee.image ||
                'https://via.placeholder.com/100x100.png?text=No+Image'
              }
              alt={coffee.title}
              width="100"
              className="coffee-image"
            />
            <p className="coffee-title">{coffee.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

CoffeeList.propTypes = {
  coffees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  type: PropTypes.oneOf(['hot', 'iced']),
};

export default CoffeeList;

// import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const MoviesList = ({ movies }) => {
//   const location = useLocation();

//   return (
//     <div className="container">
//       {movies.length > 0 && (
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id}>
//               {/* <Link to={`/movies/${movie.id}`} state={{ from: location }}> */}
//               <Link to={`/movies/${movie.id}`} state={location}>
//                 {movie.title || movie.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// MoviesList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ).isRequired,
// };

// export default MoviesList;
