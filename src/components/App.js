import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import Featured from './Featured';
import NotFound from './NotFound';

import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About title="About" />} />
        {/* No longer need the render prop to pass in props to the component, you can just pass them right in there with using `element` prop */}
        <Route path="teachers">
          <Route index element={<Teachers />} />
          <Route path=":topic/:name" element={<Featured />} />
        </Route>
        <Route exact path="courses" element={<Courses />} >
          {/* Nested routes for /courses/:topic */}
          <Route index element={<Navigate to="html" />} />
          {/* When going to the index of the /courses route Navigate the user to courses/html */}
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="javascript" element={<CourseContainer data={JSCourses} />} />
        </Route>
        {/* Whatever path that doesn't match any of the above render the NotFound Component */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;