/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Clock() {
  const [clock, setClock] = useState();
  const daysArr = ["SUN", "MON", "TU", "WED", "THU", "FRI", "SAT"];
  const day = new Date().getDay();
  const currDay = daysArr[day];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  //   const date = new Date().toLocaleTimeString;
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const seconds = date.getSeconds();
  //   console.log(seconds);
  return (
    <div>
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
      <p>
        <Link to='/'>Go back Home..</Link>
      </p>
      <h1>Clock</h1>
      <div className='clock-wrapper'>
        <div className='clock'>
          <div>
            <span className='clock-time'>{clock} &nbsp;</span>
          </div>
          {/* <span className='clock-day'>{currDay} </span> */}
        </div>
      </div>
      {/* <div className='clock-wrapper'>
        <div className='clock'>
          {hours} : {minutes} : {seconds}
        </div>
      </div> */}
    </div>
  );
}

export default Clock;
