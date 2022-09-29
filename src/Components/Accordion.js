/** @format */

import { shouldForwardProp } from "@mui/styled-engine";
import React, { useState } from "react";

function Accordion({ name, text }) {
  const [show, setShow] = useState(false);
  const minus = "-";
  const max = "+";

  return (
    <div>
      <div className='question-flex' onClick={() => setShow(!show)}>
        <div className='question'>{name}</div>
        <div>
          {show ? (
            <span className='question-btn'>{minus}</span>
          ) : (
            <span className='question-btn'>{max}</span>
          )}
        </div>
      </div>
      {show && <div className='answer'> {text} </div>}
    </div>
  );
}

export default Accordion;
