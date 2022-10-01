/** @format */

import React from "react";

function Button({ data, setTabContent, state }) {
  const { active, setActive } = state;

  const handleClick = (tab) => {
    setTabContent(Object.values(tab));
  };

  return (
    <button className='tab-btn' key={data.id} onClick={() => handleClick(data)}>
      {data.name}
      {/* className='tab-btn' value={button.name}
                    // className={` ${active ? "tab-underline" : "tab-btn"}`} */}
    </button>
  );
}

export default Button;
