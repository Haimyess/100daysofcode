/** @format */

import React from "react";
import { Link } from "react-router-dom";

// ---------SWIPER------------

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

// ----------------------------

import Header from "../Components/Header";

function Projects({ projects }) {
  console.log(projects);

  // const size = 4;
  // const projectDivided = [];

  // while (projects.length) {
  //   projectDivided.push(projects.splice(0, size));
  // }
  return (
    <div className='projects-wrapper'>
      <Header />

      <div className='project-container'>
        <div className='project-container-info'>
          <h1 className='projects-title'>Pojects</h1>
          <p>
            Take a look at them. You will find here some of the most imprtant
            features a common website has with the minimu CSS.
          </p>
        </div>
        <div>
          <Swiper
            // slidesPerView={5}
            spaceBetween={30}
            // slidesPerGroup={3}
            cssMode={true}
            loop={true}
            breakpoints={{
              600: {
                slidesPerView: 1.3,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.3,
                // spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4.3,
                // spaceBetween: 50,
              },
            }}
            // loopFillGroupWithBlank={true}
            // navigation={true}
            // modules={[Pagination, Navigation]}
            className='mySwiper'>
            {projects.map((project) => {
              return (
                <SwiperSlide>
                  <div key={project.id} className='project-card'>
                    <Link to={`/${project.link}`} className='project'>
                      <p className='project-name'> {project.name}</p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <div>
            <p>
              <Link to='/'>Go back Home..</Link>
            </p>
          </div> */}
          {/* <div className='project-grid'>
            {projects.map((project) => {
              return (
                <Link to={`/${project.link}`} className='project'>
                  <div key={project.id} className='project-card'>
                    {project.name}
                  </div>
                </Link>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
