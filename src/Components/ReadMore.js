/** @format */

import { setRef } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReadMore({ limit, children }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const text = children;

  const handleReadMore = () => {
    setIsReadMore((prev) => !prev);
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
      {/* <p>
        <Link to='/'>Go back Home..</Link>
      </p> */}

      <main className='readmore-wrapper'>
        <div className='readmore-container'>
          {isReadMore ? text : children.substr(0, limit)}
          <span className='readmore-btn' onClick={handleReadMore}>
            {isReadMore ? "read less" : "...read more"}
          </span>
        </div>
      </main>
    </div>
  );
}

export default ReadMore;
