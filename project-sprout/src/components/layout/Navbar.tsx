import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  return (
    <nav id="navbar" className="green darken-1">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Sprout
        </NavLink>
        <ul id="nav-mobile" className="right">
          {isAuthenticated ? (
            <li></li>
          ) : (
            <>
              <li>
                <a href="#login-modal" className="modal-trigger">
                  Login
                </a>
              </li>
              <li>
                <a href="#signup-modal" className="modal-trigger">
                  Sign Up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
