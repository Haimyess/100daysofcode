/** @format */

import React, { useState } from "react";
import Header from "./Header";

const ButtonFilter = () => {
  //   Data
  const countriesData = [
    { id: 1, name: "Chile", language: "Spanish" },
    { id: 2, name: "Israel", language: "Hebrew" },
    { id: 3, name: "EEUU", language: "English" },
    { id: 4, name: "Colombia", language: "Spanish" },
    { id: 5, name: "Russia", language: "Russian" },
    { id: 6, name: "France", language: "Francais" },
    { id: 7, name: "Ireland", language: "English" },
    { id: 8, name: "Turkey", language: "Turkish" },
    { id: 9, name: "Germany", language: "German" },
    { id: 10, name: "China", language: "Chinese" },
    { id: 11, name: "Brazil", language: "Portuguese" },
  ];

  //   Create a new array with just the data filtered.
  const uniqueLang = [
    ...new Set(countriesData.map((language) => language.language)),
  ];

  //   -------------------------------------------------
  //    **** Filter unique and return also an array of  objects
  //   -------------------------------------------------

  const unique = [
    ...new Map(countriesData.map((lang) => [lang["language"], lang])).values(),
  ];

  //   console.log(unique);

  const [countries, setCountries] = useState(countriesData);
  const [filtered, setFiltered] = useState(countriesData);
  const [buttons, setButtons] = useState(countriesData);

  const handleFilter = (e) => {
    const selectedLang = e.target.value;
    const filteredCountries = countries.filter(
      (item) => item.language === selectedLang
    );

    // console.log(filteredCountries);

    setFiltered(filteredCountries);
  };

  const handleAll = () => {
    setFiltered(countries);
  };

  return (
    <>
      <Header />
      <h1 className='title'>Buttons Filter</h1>
      <p className='title'>
        Click on the buttons to filter the Countries by language
      </p>

      <main className='buttons-wrapper'>
        {/* Button */}
        <div className='buttons'>
          <button onClick={handleAll} className='all-btn btn'>
            All
          </button>
          {unique.map((button) => {
            return (
              <button
                className='btn'
                value={button.language}
                key={button.id}
                onClick={(e) => handleFilter(e)}>
                {button.language}
              </button>
            );
          })}
        </div>
        {/* Filtered */}

        <div className='countries-container'>
          {filtered.map((country) => {
            return (
              <div className='countries'>
                <div className='country'>
                  <p className='country-name'>{country.name}</p>
                  {/* <p className='country-language'>{country.language}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ButtonFilter;
