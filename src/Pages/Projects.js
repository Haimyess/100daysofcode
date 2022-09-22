/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div>
        <p>
          <Link to='/'>Go back Home..</Link>
        </p>
        <p>
          <Link to='/readmore'> Read more</Link>
        </p>
      </div>
    </div>
  );
}

export default Projects;
