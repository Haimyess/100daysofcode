/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/onscroll.css";

function OnScroll() {
  const firstSectionRef = useRef();
  const [firstSectionVisible, setFirstSectionVisible] = useState();
  console.log(firstSectionVisible);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      //   const entry = entries[0];
      console.log("entries", entries[0].target.clientHeight);
      setFirstSectionVisible(entries[0].isIntersecting);
    });
    observer.observe(firstSectionRef.current);
  }, []);

  useEffect(() => {
    // const
  }, []);

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
        </Link>
        <nav>
          <ul className='list'>
            <li>About</li>
            <li>Categories</li>
            <li>Cart</li>
          </ul>
        </nav>
        {firstSectionVisible !== true && (
          <nav className='subnav'>
            <div className='subnav-container'>
              <ul className='subnav-list'>
                <li className='subnav-item'>Info</li>
                <li className='subnav-item'>Services</li>
                <li className='subnav-item'>Dates</li>
                <li className='subnav-item'>Location</li>
              </ul>
            </div>
          </nav>
        )}
      </header>

      {/*) <header className='nav-container stick'>
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
         
          </Link>
          <nav>
            <ul className='list'>
              <li>About</li>
              <li>Categories</li>
              <li>Cart</li>
           
            </ul>
          </nav>
        </header>
      ) : (
        <nav className='subnav'>
          <div className='subnav-container'>
            <ul className='subnav-list'>
              <li className='subnav-item'>Info</li>
              <li className='subnav-item'>Services</li>
              <li className='subnav-item'>Dates</li>
              <li className='subnav-item'>Location</li>
            </ul>
          </div>
        </nav>
      ) */}

      <main className='main-container'>
        <section ref={firstSectionRef} className='first-section section'>
          <h2>About</h2>
        </section>

        <section className='second-section section'>
          <section id='left'>
            <section>
              <h2>Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                praesentium magnam quia ducimus! Totam nulla fuga, officia iure
                architecto consequuntur minus dicta illum facilis commodi quod
                dignissimos pariatur, temporibus qui culpa blanditiis laborum
                ullam minima non repudiandae, nihil quas recusandae hic placeat?
                Dolore, eum natus tenetur est animi ratione accusamus id quia
                eos unde quam eligendi architecto fugiat aperiam at doloremque
              </p>
              <p>
                autem, temporibus voluptates doloribus rem! Magni quia et optio
                accusamus voluptatibus labore unde facere sapiente libero nihil.
                Labore nostrum eum blanditiis, est cum adipisci maxime dicta vel
                eveniet temporibus facilis commodi ad molestiae quo itaque, rem,
                sit laudantium nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                praesentium dolor numquam consequatur dolorum voluptas corrupti
                fugiat est ea, nemo officiis suscipit
              </p>
            </section>
            <section>
              <h2>Services</h2>
              <p>
                autem, temporibus voluptates doloribus rem! Magni quia et optio
                accusamus voluptatibus labore unde facere sapiente libero nihil.
                Labore nostrum eum blanditiis, est cum adipisci maxime dicta vel
                eveniet temporibus facilis commodi ad molestiae quo itaque, rem,
                sit laudantium nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                praesentium magnam quia ducimus! Totam nulla fuga, officia iure
                architecto consequuntur minus dicta illum facilis commodi quod
                dignissimos pariatur, temporibus qui culpa blanditiis laborum
                ullam minima non repudiandae, nihil quas recusandae hic placeat?
                Dolore, eum natus tenetur est animi ratione accusamus id quia
                eos unde quam eligendi architecto fugiat aperiam at doloremque
                autem, temporibus voluptates doloribus rem! Magni quia et optio
                accusamus voluptatibus labore unde facere sapiente
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                praesentium dolor numquam consequatur dolorum voluptas corrupti
                fugiat est ea, nemo officiis suscipit
              </p>
            </section>
            <section>
              <h2>Dates</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
              <p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis praesentium dolor numquam consequatur dolorum
                  voluptas corrupti fugiat est ea, nemo officiis suscipit
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis praesentium dolor numquam consequatur dolorum
                  voluptas corrupti fugiat est ea, nemo officiis suscipit
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis praesentium dolor numquam consequatur dolorum
                  voluptas corrupti fugiat est ea, nemo officiis suscipit
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis praesentium dolor numquam consequatur dolorum
                  voluptas corrupti fugiat est ea, nemo officiis suscipit
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis praesentium dolor numquam consequatur dolorum
                  voluptas corrupti fugiat est ea, nemo officiis suscipit
                </p>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis praesentium dolor numquam consequatur dolorum
                voluptas corrupti fugiat est ea, nemo officiis suscipit
              </p>
            </section>
          </section>
          <aside id='right'>
            <div className='aside-container'>
              <p>Aside</p>
              <button className='btn-reserve'>Reserve</button>
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
