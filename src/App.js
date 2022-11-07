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
import CreditCard from "./Components/CreditCard";
import FAQs from "./Components/FAQs";
import Tabs from "./Components/Tabs";
import NavBarCondiitional from "./Components/NavBarCondiitonal";

// To be developed
import DatePickerFilter from "./Components/DatePickerFilter";
import ButtonFilter from "./Components/ButtonsFilter";
import Dropdown from "./Components/Dropdown";
import FormValidation from "./Components/FormValidation";
import CardCarousel from "./Components/CardCarousel";
import TextAnimation from "./Components/TextAnimation";
import Movies from "./Components/Movies";

function App() {
  const projects = [
    { name: "Read More", link: "readmore", id: 1 },
    { name: "Clock", link: "clock", id: 2 },
    { name: "Modal", link: "modal", id: 3 },
    { name: "Dark mode", link: "color-mode", id: 4 },
    { name: "Load More", link: "loadmore", id: 5 },
    { name: "Credit Card", link: "credit-card", id: 6 },
    { name: "FAQs", link: "faqs", id: 7 },
    { name: "Tabs", link: "tabs", id: 8 },
    { name: "Buttons filter", link: "buttons", id: 9 },
    { name: "Dropdown", link: "dropdown", id: 10 },
    { name: "Form Validation", link: "form-validation", id: 11 },
    { name: "Nav bar conditional", link: "conditional-rendering", id: 12 },
    // { name: "Card Carousel", link: "card-carousel", id: 13 },
    { name: "Text Animation", link: "text-animation", id: 14 },
    { name: "Movies App", link: "movies", id: 15 },

    // To be developed
    { name: "Date Filter", link: "date-filter", id: 30 },
  ];
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home projects={projects} />} />
        <Route path='projects' element={<Projects projects={projects} />} />
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
        <Route path='credit-card' element={<CreditCard />} />
        <Route path='faqs' element={<FAQs />} />
        <Route path='tabs' element={<Tabs />} />
        <Route path='buttons' element={<ButtonFilter />} />
        <Route path='conditional-rendering' element={<NavBarCondiitional />} />
        <Route path='dropdown' element={<Dropdown />} />
        <Route path='form-validation' element={<FormValidation />} />
        {/* <Route path='card-carousel' element={<CardCarousel />} /> */}
        <Route path='text-animation' element={<TextAnimation />} />
        <Route path='date-filter' element={<DatePickerFilter />} />

        <Route path='movies' element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
