/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";

const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div className='credit-wrapper'>
      <header className='nav-container'>
        <Link className='logo' to='/'>
          <img src='' alt='Logo' />
        </Link>
        <nav>
          <ul>
            <Link className='projects' to='/projects'>
              Projects
            </Link>
          </ul>
        </nav>
      </header>
      <div id='PaymentForm' className='creditcard-container'>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form className='creditcard-form'>
          <input
            type='tel'
            name='number'
            value={number}
            placeholder='Card Number'
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type='tel'
            name='expiry'
            value={expiry}
            placeholder='MM/YY Expiry'
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type='tel'
            name='cvc'
            value={cvc}
            placeholder='Cvc'
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
    </div>
  );
};

export default CreditCard;

//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name });
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };
