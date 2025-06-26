import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';

import Home from '../pages/Home';
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));
// const SharedLayout = lazy(() => import('../components/SharedLayout'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/galery">Galery</NavLink>
        </nav>
        <Routes>
          {/* <Route path="/" element={<SharedLayout />}> */}
          <Route index element={<Home />} />
          <Route path="galery" element={<div>Galery</div>} />
          <Route path="galery/:coffeId" element={<div>Coffe</div>} />
          {/* <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'block',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101',
//         margin: 100,
//       }}
//       className="App"
//     >
//       React homework template
//     </div>
//   );
// };

// export default App;
