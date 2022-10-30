/** @format */

import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";

function TextAnimation() {
  // List of islands
  // Show the name every 1 sec

  const listOfIslands = ["Hawaii", "Madagascar", "Cayman", "Seychelles"];

  const [indexText, setIndexText] = useState(0);

  const [currText, setCurrText] = useState([]);

  // -------------------------------------------
  // -------------------------------------------
  // -------------------------------------------
  //   WORDS

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexText((index) => index + 1);

      // const map = listOfIslands[indexText];

      setCurrText(listOfIslands[indexText]);

      // I need to loop the list of islands and every time i am in one string word/phrase, i gotta loop over it also. so its nested loop with if statements

      if (indexText == listOfIslands.length - 1) {
        setIndexText(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [indexText]);

  // -------------------------------------------
  // -------------------------------------------
  // -------------------------------------------

  // LETTER

  // useEffect(() => {
  //   const letterInterval = setInterval(() => {
  //     setIndexLetter((letter) => letter + 1);

  //     if (indexLetter < uniqueIsland.length) {
  //       setCurrWord((prev) => prev + uniqueIsland[indexLetter]);
  //     }
  //     if (indexLetter > uniqueIsland.length - 1) {
  //       setIndexLetter(0);
  //       setCurrWord("");
  //     }
  //   }, [500]);

  //   return () => clearInterval(letterInterval);
  // }, [indexLetter]);

  // console.log(listOfIslands[0][indexLetter]);

  return (
    <div>
      <Header />

      <h1 className='title'>Text Animation</h1>
      <p style={{ textAlign: "center", fontSize: 30 }}>
        Every second there is something different
      </p>

      <div className='text-container'>
        <div className='animation-container'>
          <p className='text blinking-cursor'>
            The best islands
            <br /> to live are:{" "}
            <span className='text-animation'>{currText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
