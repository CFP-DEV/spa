import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <div className="navbar-brand">
          SPA
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar m-0 p-0 h-100 list-unstyled">
            <li className="nav-item h6">
              <Link className="nav-link" to="/">
                Strona Główna
            </Link>
            </li>
            <li className="nav-item h6">
              <Link className="nav-link" to="/users">
                Użytkownicy
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;