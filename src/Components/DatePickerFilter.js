/** @format */

import React, { useState } from "react";
import Header from "./Header";
import concerts from "../media/concertsData";

function DatePickerFilter() {
  //   console.log(typeof concerts[0].date);
  //   console.log(concerts[0].date);

  const [concertsData, setConcertsData] = useState(concerts);
  const [filteredConcert, setFilteredConcert] = useState([]);

  //   console.log(concertsData);

  const handleDate = (e) => {
    const selectedDate = e.target.value;
    // console.log(selectedDate);

    const concert = concertsData.filter(
      (concert) => concert.date === JSON.stringify(selectedDate)
    );

    console.log(concert);
    // console.log(typeof JSON.stringify(concert));
    setFilteredConcert(concert);
  };
  return (
    <div>
      <Header />
      <h1 className='title'>Date Picker Filter</h1>
      <div className='concerts-wrapper'>
        <p className='date-picker'>
          <input type='date' onChange={handleDate} />
        </p>
        <p className='title'>All Concerts</p>

        <div className='concert-items-container'>
          {concertsData.map((item) => {
            return (
              <div key={item.id} className='concert-item'>
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.id}</p>
              </div>
            );
          })}
        </div>
        <p className='title'>Selected Concerts</p>
        <div>{filteredConcert}</div>
      </div>

      {/* create an object to filter with dates  */}
      {/* map objects */}
      {/* create a filter depending on the select of the date picker */}
      {/* display filtered objects */}
    </div>
  );
}

export default DatePickerFilter;
