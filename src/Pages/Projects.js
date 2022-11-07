/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Projects({ projects }) {
  console.log(projects);
  return (
    <div className='projects-wrapper'>
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
              <Link to={`/${project.link}`} className='project'>
                <div key={project.id} className='project-card'>
                  {project.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
