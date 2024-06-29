// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import { Link } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  // Determine if the current path is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {/* Conditionally render the navbar based on the current path */}
      {!isHomePage && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link to="/" className="navbar-brand mt-2 mt-lg-0">
                USERMANAGEMENT
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">Projects</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center">
              <Link to="/cart" className="text-reset me-3">
                <i className="fas fa-shopping-cart"></i>
              </Link>

              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link to="/news/1" className="dropdown-item">Some news</Link>
                  </li>
                  <li>
                    <Link to="/news/2" className="dropdown-item">Another news</Link>
                  </li>
                  <li>
                    <Link to="/news/3" className="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                  <li>
                    <Link to="/profile" className="dropdown-item">My profile</Link>
                  </li>
                  <li>
                    <Link to="/settings" className="dropdown-item">Settings</Link>
                  </li>
                  <li>
                    <Link to="/logout" className="dropdown-item">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}

      <div className="container mt-5">
        <AppRoutes />
      </div>
    </div>
  );
}
