import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navigation bg-light list-unstyled">
      <li className="navigation__item">
        <NavLink to="/" className="navigation__item__link">
          Strona Główna
        </NavLink>
        <NavLink to="/users" className="navigation__item__link">
          Użytkownicy
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;