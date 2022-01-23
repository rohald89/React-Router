import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    
    <Outlet />
    {/* Routes are now nested in their parent route, they are now all available in App.js */}
    {/* This Outlet component lets React know where to render the child components */}
  </div>
);

export default Courses;