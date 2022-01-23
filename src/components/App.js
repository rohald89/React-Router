import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="about" element={<About />}/>
        <Route exact path="teachers" element={<Teachers />}/>
        <Route exact path="courses" element={<Courses />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;