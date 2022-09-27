/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../media/data";

function LoadMore() {
  const [items, setItems] = useState(data);
  const [load, setLoad] = useState(9);
  const [disable, setDisable] = useState(true);

  console.log(items.length);

  const displayItems = items.slice(0, load);
  console.log(displayItems);

  const overQty = console.log(load);

  //   console.log(data.length);
  const handleLoad = () => {
    setLoad((prev) => prev + 8);
  };

  return (
    <div>
      <header className='nav-container'>
        <Link className='logo' to='/'>
          <img src='' alt='Logo' />
        </Link>
        <nav>
          <ul>
            <Link className='projects' to='/projects'>
              Projects
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <div className='islands-wrapper'>
          <div className='islands-container'>
            {displayItems.map((island) => {
              return (
                <div className='island' key={island.id}>
                  {island.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className='btn-container'>
          <button
            className='loadmore-btn'
            // className={!disable ? "" : "loadmore-btn"}
            onClick={handleLoad}
            disabled={items.length < load && true}
            // disabled
          >
            Load more
          </button>
        </div>
      </main>
    </div>
  );
}

export default LoadMore;
