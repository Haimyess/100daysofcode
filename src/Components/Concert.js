/** @format */

import React from "react";

function Concert({ concertsData }) {
  return (
    <div>
      {concertsData.map((concert) => {
        return <div> {concert.name} </div>;
      })}
    </div>
  );
}

export default Concert;
