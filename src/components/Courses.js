import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Courses = () => {
  return (
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2> 
        <ul className="course-nav">
          {/* adding match.path or full url paths is no longer required as these links are already nested inside /course */}
          <li><NavLink to='html'>HTML</NavLink></li>
          <li><NavLink to='css'>CSS</NavLink></li>
          <li><NavLink to='javascript'>JavaScript</NavLink></li>
        </ul>
      </div>
      
      
      <Outlet />
      {/* Routes are now nested in their parent route, they are now all available in App.js */}
      {/* This Outlet component lets React know where to render the child components */}
    </div>

  )
}

export default Courses;