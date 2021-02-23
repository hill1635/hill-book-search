import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand mr-1">Google</span>
        <span className="navbar-brand"> Book Search</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContennt"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved" className="nav-link">
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
