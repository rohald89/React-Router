import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About title="About" />} />
        {/* No longer need the render prop to pass in props to the component, you can just pass them right in there with using `element` prop */}
        <Route path="teachers" element={<Teachers />} />
        <Route exact path="courses" element={<Courses />} >
          {/* Nested routes for /courses/:topic */}
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;