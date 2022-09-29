/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Projects() {
  const projects = [
    { name: "Read More", link: "readmore" },
    { name: "Clock", link: "clock" },
    { name: "Modal", link: "modal" },
    { name: "Dark mode", link: "color-mode" },
    { name: "Load More", link: "loadmore" },
    { name: "Credit Card", link: "credit-card" },
    { name: "FAQs", link: "faqs" },
  ];
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
              <div className='project'>
                <p>
                  <Link to={`/${project.link}`}> {project.name}</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
