/** @format */

import React from "react";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/onscroll.css";

function OnScroll() {
  return (
    <div className='onscroll-container'>
      <header className='nav-container stick'>
        <div style={{ display: "inline-block" }}>
          <Link className='back-link' to='/projects'>
            <div className='back-link-container'>
              {" "}
              <span>
                <ArrowBackIcon />
              </span>
              back to projects
            </div>
          </Link>
        </div>
        <Link className='logo-link' to='/'>
          <p className='logo'>OnScroll</p>
          {/* <p className='logo'>100DaysCodingReact</p> */}
          {/* <img src={{ logo }} alt='Logo' /> */}
        </Link>
        <nav>
          <ul className='list'>
            <li>About</li>
            <li>Categories</li>
            <li>Cart</li>
            {/* <Link className='projects' to='/projects'>
              Projects
            </Link> */}
          </ul>
        </nav>
      </header>

      <main className='main-container'>
        <section className='first-section section'>About</section>

        {/* Sub navbar appearing after we get to the second section */}

        {/* <nav className='subnav'>
          <ul className='subnav-list'>
            <li className='subnav-item'>Info</li>
            <li className='subnav-item'>Services</li>
            <li className='subnav-item'>Dates</li>
            <li className='subnav-item'>Location</li>
          </ul>
        </nav> */}
        <section className='second-section section'>
          <section id='left'>
            <section>
              <h2>Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
                doloribus accusamus recusandae eveniet incidunt. Amet eius
                impedit eligendi quis, veniam voluptatem perspiciatis obcaecati
                consectetur rem cum maxime dicta ab modi sunt blanditiis
                suscipit autem iste placeat deleniti! Reiciendis at illo
                perferendis rem molestias quas in mollitia libero porro hic
                provident saepe, veritatis, neque optio ut dolorem, earum eum
                harum! Tempore id expedita corporis dignissimos dolorem tempora
                voluptates, voluptas quod obcaecati beatae. Sed tempore ipsa
                quos! Modi excepturi facilis sequi praesentium cum et quidem
                molestias a. Libero eum, et maiores dignissimos sunt dolorem rem
                officiis pariatur, laborum commodi a iste optio ea odio autem
                sit. Minima doloremque voluptas voluptate placeat delectus
                debitis blanditiis enim suscipit! Aliquam reiciendis inventore
                ratione corrupti temporibus recusandae provident, numquam rem
                quo excepturi quidem voluptatibus itaque aspernatur aliquid
                nihil facilis ex ipsum placeat illum minima dolores fuga ipsa
                exercitationem? Laudantium enim ullam, sint pariatur dolorem
                quis necessitatibus nisi ipsam iusto, officiis dignissimos
                voluptas. Similique maxime eaque optio excepturi natus sunt
                officia? Repellat deserunt nostrum magni animi, voluptates
                incidunt sapiente asperiores quibusdam suscipit eligendi fuga.
                Molestiae harum illo nam sit culpa impedit natus sapiente
                fugiat?
              </p>
            </section>
            <section>
              <h2>Services</h2>
            </section>
            <section>
              <h2>Dates</h2>
            </section>
          </section>
          <aside id='right'>
            <div className='aside-container'>
              <p>Aside</p>
            </div>
          </aside>
        </section>
        <section className='third-section section'>Reviews</section>
        <section className='fourth-section section'>Location</section>
      </main>
    </div>
  );
}

export default OnScroll;
