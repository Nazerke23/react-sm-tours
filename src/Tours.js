import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, onNotInterested }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onNotInterested={onNotInterested} />
      ))}
    </div>
  );
};

export default Tours;
