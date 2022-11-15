/** @format */

import React, { useState, createContext } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  // array of likes
  const [likes, setLikes] = useState([]);
  const [isLike, setIsLike] = useState(false);

  return (
    <LikeContext.Provider value={{ likes, setLikes, isLike, setIsLike }}>
      {children}
    </LikeContext.Provider>
  );
};
