/** @format */

import "./App.css";

import React from "react";

import { Route, Routes, Link } from "react-router-dom";

// project components
import ReadMore from "./Components/ReadMore";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Clock from "./Components/Clock";
import Modal from "./Components/Modal";
import ColorMode from "./Components/ColorMode";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='clock' element={<Clock />} />
        <Route path='readmore' element={<ReadMore />} />
        <Route path='modal' element={<Modal />} />
        <Route path='color-mode' element={<ColorMode />} />
      </Routes>
    </div>
  );
}

export default App;
