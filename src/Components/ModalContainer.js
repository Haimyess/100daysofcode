/** @format */

import React from "react";

// Fix later the container position and figure out how to change the background of the entire page when clicking th button to open the modal.

function ModalContainer({ onClose }) {
  return (
    <div className='modal-background '>
      <div className='modal-wrapper'>
        <button className='close-btn' onClick={() => onClose(false)}>
          X
        </button>{" "}
        <div className='modal-container '>
          <p className='modal-text'>You click me, you got me!</p>
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
