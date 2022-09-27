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
import LoadMore from "./Components/LoadMore";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='clock' element={<Clock />} />
        <Route
          path='readmore'
          element={
            <ReadMore limit={150}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC.
            </ReadMore>
          }
        />
        <Route path='modal' element={<Modal />} />
        <Route path='color-mode' element={<ColorMode />} />
        <Route path='loadmore' element={<LoadMore />} />
      </Routes>
    </div>
  );
}

export default App;
