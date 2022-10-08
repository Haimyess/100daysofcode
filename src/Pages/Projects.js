/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Projects() {
  const projects = [
    { name: "Read More", link: "readmore", id: 1 },
    { name: "Clock", link: "clock", id: 2 },
    { name: "Modal", link: "modal", id: 3 },
    { name: "Dark mode", link: "color-mode", id: 4 },
    { name: "Load More", link: "loadmore", id: 5 },
    { name: "Credit Card", link: "credit-card", id: 6 },
    { name: "FAQs", link: "faqs", id: 7 },
    { name: "Tabs", link: "tabs", id: 8 },
    { name: "Buttons filter", link: "buttons", id: 9 },
    { name: "Dropdown", link: "dropdown", id: 10 },
    { name: "Form Validation", link: "form-validation", id: 11 },
    { name: "Nav bar conditional", link: "conditional-rendering", id: 12 },

    // To be developed
    { name: "Date Filter", link: "date-filter", id: 12 },
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
