/** @format */

import React, { useState } from "react";

// Components
import Header from "./Header";

// Css
import "../utils/variables.css";

// Fontawesome
// Icon import
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Specific icons
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Accordion data
import questionsData from "../media/faqsData";
import Accordion from "./Accordion";

function FAQs() {
  return (
    <div className='faqs-wrapper'>
      <Header />

      <div className='wrapper'>
        <div className='faqs container'>
          {/* item */}
          <div className='faqs-title-container'>
            <p className='faqs-title'>Frequently Asked Questions</p>
          </div>
          <div className='question-container'>
            {questionsData.map(({ text, name }) => {
              return <Accordion text={text} name={name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
