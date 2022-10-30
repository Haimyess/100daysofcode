/** @format */

import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { Link } from "react-router-dom";

import logo from "/Users/gyngee/Documents/100daysofcode/src/media/logo.png";

function Home() {
  // function Home({ projects }) {

  // const listOfProjects = projects.map((project) => {
  //   return project.name;
  // });

  return (
    <div>
      <header className='nav-container'>
        <Link className='logo-link' to='/'>
          <p className='logo'>100DaysCodingReact</p>
          {/* <img src={{ logo }} alt='Logo' /> */}
        </Link>
        <nav>
          <ul>
            <Link className='projects' to='/projects'>
              Projects
            </Link>
          </ul>
        </nav>
      </header>
      <div className='home-wrapper'>
        <div className='home-container'>
          {/* <h1>100 Days of Coding React</h1> */}

          <h1 className='home-title'>
            During this time
            <br /> I'll build &nbsp;
            <span style={{ color: "red" }}>
              <Typewriter
                words={[
                  "Dark mode",
                  "Card Carousel",
                  "Text Animation",
                  "Load more",
                  "Read more",
                  "Filters",
                  "Countdown",
                  "Weather App",
                  "Movies Search",
                  "Steps form",
                  "Follow cartoon",
                  "Budget tracker",
                ]}
                // words={{ listOfProjects }}
                loop={0}
                cursor
                // cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
