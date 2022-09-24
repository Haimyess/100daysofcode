/** @format */

import React, { useState, useEffect } from "react";
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
      <button className='modal-btn' onClick={handleModal}>
        Click me!
      </button>

      {isOpen && <ModalContainer onClose={setIsOpen} />}
    </div>
  );
}

export default Modal;
