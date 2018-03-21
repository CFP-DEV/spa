import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation navbar navbar-expand-md navbar-light bg-white">
      <div className="container">
        <div className="navbar-brand">
          SPA
        </div>

        <button className="navbar-toggler border-0 text-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
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
    </nav>
  );
}

export default Navigation;