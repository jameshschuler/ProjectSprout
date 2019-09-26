import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav id="navbar" className="green darken-1">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Project Sprout
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
