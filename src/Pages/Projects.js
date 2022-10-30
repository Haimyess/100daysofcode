/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Projects({ projects }) {
  return (
    <div>
      <Header />

      <div className='project-container'>
        <div>
          <p>
            <Link to='/'>Go back Home..</Link>
          </p>
        </div>

        <div className='project-grid'>
          {projects.map((project) => {
            return (
              <div key={project.id} className='project'>
                <Link to={`/${project.link}`}> {project.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
