/** @format */

// /** @format */

// import React from "react";

// import Header from "../Components/Header";

// import carouselImages from "../media/carouselImages";

// console.log(carouselImages[0]);

// function CardCarousel() {
//   const cards = [
//     {
//       id: 1,
//       name: "Comic Festival",
//       image: carouselImages[0],
//     },
//     {
//       id: 2,
//       name: "Icon Festival",
//       image: carouselImages[1],
//     },
//     {
//       id: 3,
//       name: "Oktober Fest",
//       image: carouselImages[2],
//     },
//     {
//       id: 4,
//       name: "TLV Marathon 2023",
//       image: carouselImages[3],
//     },
//   ];

//   return (
//     <div>
//       <Header />

//       <h1 className='title'>Card Carousel</h1>
//       <p className='title'>Scroll to right or left to see more..</p>

//       <section className='carousel-wrapper'>
//         {/* Carousel 1 */}
//         <div className='carousel-container'>
//           <button>prev</button>
//           {cards.map((event) => {
//             return (
//               <div key={event.id} className='carousel-card'>
//                 <div className='carousel-img-container'>
//                   <img className='carousel-img' src={event.image} alt='' />
//                 </div>
//                 <p className='carousel-card-name'>{event.name}</p>
//               </div>
//             );
//           })}
//           <button>next</button>
//         </div>

//         {/* Carousel 1 */}
//         <div className='carousel-container'>
//           <button>prev</button>
//           {cards.map((event) => {
//             return (
//               <div key={event.id} className='carousel-card'>
//                 <div className='carousel-img-container'>
//                   <img className='carousel-img' src={event.image} alt='' />
//                 </div>
//                 <p className='carousel-card-name'>{event.name}</p>
//               </div>
//             );
//           })}
//           <button>next</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default CardCarousel;
