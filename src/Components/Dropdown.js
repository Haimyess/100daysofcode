/** @format */

import React, { useState, useEffect } from "react";
import Header from "../Components/Header";

function Dropdown() {
  const [show, setShow] = useState(false);

  const handleShowDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      <Header />
      <h1 className='title'>Dropdown</h1>
      <p className='title'>Click the button and see what happens</p>

      {/* Dropdown */}

      <div className='dropdown-wrapper'>
        <div className='dropdown-container'>
          {/* Dropdown button and functionality */}
          <button
            // onMouseEnter={() => setShow(!show)}
            // onMouseLeave={() => setShow(!show)}
            className='dropdown-btn'
            onClick={handleShowDropdown}>
            Click me
          </button>

          <div className='dropdown-div'>
            {show ? (
              <div className='dropdown'>
                <div className='dropdown-link'>Profile</div>
                <div className='dropdown-link'>Orders</div>
                <div className='dropdown-link'>Logout</div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className='content'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              sit possimus, adipisci culpa ipsa ab maxime provident illum quos
              libero!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
