"use client";

import React, { useState } from "react";
import Card from "@/components/luxury-chains/Card";

const Chains = ({ hotels }) => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {filteredHotels.slice(0, visibleCards).map((hotel, i) => (
        <Card key={i} data={hotel} />
      ))}
      {visibleCards < filteredHotels.length && (
        <button
          className="text-center text-xl text-black font-normal py-2 rounded-md"
          onClick={showMoreCards}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Chains;
