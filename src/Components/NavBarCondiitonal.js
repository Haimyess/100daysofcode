/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function NavBarCondiitional() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const capitalizing = userName.split(" ");
  for (let i = 0; i < capitalizing.length; i++) {
    capitalizing[i] =
      capitalizing[i].charAt(0).toUpperCase() + capitalizing[i].slice(1);
  }

  const firstLetterCapitalized = capitalizing.join(" ");
  //   Functions
  const handleStatus = () => {
    if (userName !== "") {
      setIsLoggedIn(!isLoggedIn);
    }

    if (isLoggedIn === true) {
      setUserName("");
    }
  };

  //   const handleUserName = (user) => {
  //     setUserName(user);
  //     console.log(user);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className='conditional-wrapper'>
        <h1 className='title '>Nav bar conditional</h1>
        <nav className='navbar'>
          <div className='user-input-container '>
            <p>
              {isLoggedIn
                ? `Hello ${firstLetterCapitalized}, Welcome again!`
                : ""}{" "}
            </p>
            &nbsp;
            {/* Intial is going to be just the login button */}
            &nbsp;
          </div>
          <div>
            {isLoggedIn ? (
              ""
            ) : (
              <div className='user-input'>
                <p className='question-name'>What's your name?</p> &nbsp;
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input
                    className='name-question-input'
                    type='text'
                    placeholder='Please enter your name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </form>
              </div>
            )}
          </div>
          <div className='profile-container'>
            {isLoggedIn && (
              <div className='profile-icons'>
                <Link className='icon'>Notifications</Link>
                <FontAwesomeIcon icon={faComments} />
                {/* <Link className='icon'>Messages</Link> */}
              </div>
            )}

            <button
              className='login-btn'
              onClick={handleStatus}
              disabled={!userName}>
              {isLoggedIn ? "Log out" : "Log in"}
              {/* {isLoggedIn ? `Hello ${userName}` : "Log in"} */}
            </button>
          </div>
        </nav>
        <br />
        {isLoggedIn ? "" : <p className='username'>{userName}</p>}

        {/* Being logged in it will be displaying a dropdown with another 2 icons, notifications and messages, besides de button that will change to log out */}
      </div>
    </>
  );
}

export default NavBarCondiitional;
