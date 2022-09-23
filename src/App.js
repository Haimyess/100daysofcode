/** @format */

import "./App.css";

import React from "react";

import { Route, Routes, Link } from "react-router-dom";

// project components
import ReadMore from "./Components/ReadMore";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Clock from "./Components/Clock";

function App() {
  return (
    <div className='App'>
      <header className='nav-container'>
        <Link to='/'>
          <img src='' alt='Logo' />
        </Link>
        <nav>
          <ul>
            <Link to='/projects'>Projects</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='clock' element={<Clock />} />
        <Route path='readmore' element={<ReadMore />} />
      </Routes>
    </div>
  );
}

export default App;
