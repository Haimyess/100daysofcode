/** @format */

import React, { useState } from "react";
import Header from "../Components/Header";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errPass, setErrPass] = useState(false);

  const handleName = (e) => {
    // console.log(e.target.value);
    const name = e.target.value;
    setName(name);
    if (name.length <= 3) {
      setErrName(true);
    } else {
      setErrName(false);
    }
  };

  const handleEmail = (e) => {
    // console.log(e.target.value);
    const email = e.target.value;

    setEmail(email);

    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailformat)) {
      setErrEmail(false);
    } else {
      setErrEmail(true);
    }
  };

  const handlePhone = (e) => {
    console.log(e.target.value);
    const phoneData = e.target.value;
    setPhone(phoneData);

    // if (isNaN(phone)) {
    if (phone.length < 8) {
      setErrPhone(true);
      //   console.log("Just numbers allowed");

      //   /^[0-9]+$/;
    } else {
      setErrPhone(false);
    }
  };

  const handlePass = (e) => {
    // console.log(e.target.value);
    const pass = e.target.value;
    setPass(pass);
    const passFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

    if (!pass.match(passFormat)) {
      setErrPass(true);
    } else {
      setErrPass(false);
    }
  };

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <div className='heading'>
          <h1 className='title'>Form validation</h1>
          <p className='title'>Try to register!</p>
        </div>
        {/* Register form */}

        <form className='form-validation'>
          <label className='validation-label'>Name:</label>
          <input
            // value={name}
            onChange={handleName}
            className='input-validation'
            type='text'
            placeholder='John Doe'
          />

          {errName ? (
            <small className='require-input'> Minimum 4 characters</small>
          ) : (
            ""
          )}

          <label className='validation-label'>Email:</label>
          <input
            onChange={handleEmail}
            className='input-validation'
            type='email'
            placeholder='johndoe@example.com'
          />
          {errEmail ? (
            <small className='require-input'> Invalid format</small>
          ) : (
            ""
          )}

          <label className='validation-label'>Phone:</label>
          <input
            onChange={handlePhone}
            className='input-validation'
            type='number'
            placeholder='123 4567'
          />

          {errPhone ? (
            <small className='require-input'>Please enter just numbers</small>
          ) : (
            ""
          )}
          <label className='validation-label'>Password:</label>
          <input
            onChange={handlePass}
            className='input-validation'
            type='password'
          />

          {errPass ? (
            <small className='require-input'>
              Minimum eight and maximum 10 characters, at least one uppercase
              letter, one lowercase letter, one number and one special
              character:{" "}
            </small>
          ) : (
            ""
          )}

          <input
            className='validation-btn'
            type='submit'
            value='submit'
            disabled={name && email && phone && pass ? false : true}
          />
        </form>
      </div>
    </div>
  );
}

export default FormValidation;
