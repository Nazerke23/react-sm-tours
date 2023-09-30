import React, { useState } from "react";
import ExpandText from "./ExpandText";

const Tour = ({ tour, onNotInterested }) => {
  return (
    <div>
      <img style={{ width: "400px" }} src={tour.image} alt={tour.info} />
      <h4>{tour.name}</h4>
      <ExpandText>{tour.info}</ExpandText>
      <br />
      <button onClick={() => onNotInterested(tour.id)}>Not interested</button>
    </div>
  );
};

export default Tour;
