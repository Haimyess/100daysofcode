/** @format */

import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";

function TextAnimation() {
  // List of islands
  // Show the name every 1 sec

  const listOfIslands = ["Hawaii", "Madagascar", "Cayman", "Seychelles"];

  const [currText, setCurrText] = useState(listOfIslands[0]);
  const [indexText, setIndexText] = useState(0);
  const [indexWord, setIndexWord] = useState(0);

  //   const [seconds, setSeconds] = useState(0);

  //   const index = useRef(0);

  //   const word = "Bienvenido";
  //   const [word, setWord] = useState(currText[0]);

  //   Display each letter
  //   useEffect(() => {
  //     const wordInterval = setInterval(() => {
  //       const letters = currText.split("");
  //       //   console.log(letters);

  //       setIndexWord((indexWord) => indexWord + 1);
  //       setCurrText((letter) => letter + letters[indexWord]);

  //       if (indexWord >= currText.length - 1) {
  //         setIndexWord(0);
  //       }
  //     }, 300);

  //     return () => clearInterval(wordInterval);
  //   }, [indexWord]);

  //   Changing the words
  useEffect(() => {
    const interval = setInterval(() => {
      //   index.current++;

      setIndexText((index) => index + 1);

      setCurrText(listOfIslands[indexText]);

      if (indexText >= listOfIslands.length - 1) {
        setIndexText(0);
      }

      //   Loop every each one of the strings within the array and display one by one in an animation.

      //   setSeconds((seconds) => seconds + 1);

      //   });
    }, 2000);

    return () => clearInterval(interval);
  }, [indexText]);

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

          {/* <p>{palabra}</p> */}
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
