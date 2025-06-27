import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Hot Coffee
      </NavLink>
      <NavLink
        to="/iced"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Iced Coffee
      </NavLink>
    </nav>
  );
};

export default Navigation;
