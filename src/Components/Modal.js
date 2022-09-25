/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalContainer from "./ModalContainer";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleModal = (e) => {
    console.log("clicked!");
    setIsOpen(true);
    // setIsOPen((prev) => !prev);
  };

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
      <button className='modal-btn' onClick={handleModal}>
        Click me!
      </button>

      {isOpen && <ModalContainer onClose={setIsOpen} />}
    </div>
  );
}

export default Modal;
