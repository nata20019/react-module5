import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const IcedCoffee = lazy(() => import('../pages/IcedCoffe'));
const CoffeeDetails = lazy(() => import('../pages/CoffeeDetails'));

export const App = () => {
  return (
    <BrowserRouter basename="/react-module5">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="iced" element={<IcedCoffee />} />
          <Route path=":type/:coffeId" element={<CoffeeDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
