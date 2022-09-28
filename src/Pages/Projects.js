/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Projects() {
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
      <div className='project-container'>
        <div>
          <p>
            <Link to='/'>Go back Home..</Link>
          </p>
        </div>
        <div className='project-grid'>
          <div>
            <p>
              <Link to='/readmore'> Read more</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to='/clock'> Clock</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to='/modal'> Modal</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to='/color-mode'> Ligh/night mode</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to='/loadmore'> Load more</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to='/credit-card'> Credit Card</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
