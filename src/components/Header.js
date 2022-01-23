import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink end to="/">Home</NavLink></li>
      {/* end prop instead of exact */}
      {/* This is a simple renaming of a prop to better align with the common practices of other libraries in the React ecosystem. */}
      <li><NavLink to="/about" style={({ isActive }) => ({ background: isActive && 'tomato'})}>About</NavLink></li>
      {/* the activeStyle prop has been removed, to apply inline styles you now pass a function to the style */}
      <li><NavLink to="/teachers" className={({ isActive }) => "nav-link" + (isActive && " active activated")}>Teachers</NavLink></li>
      {/* the activeClassName prop has been removed. To add a specific class when an element is active you now use a function for the className */}
      {/* In the example above instead of the `active` class being added there will now be an `activated` class when the route matches the link */}
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;