"use client";

import React, { useState } from "react";
import Card from "@/components/luxury-chains/Card";

const Chains = ({ hotels }) => {
  const [visibleCards, setVisibleCards] = useState(5);
  // const [searchInput, setSearchInput] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  // const handleInput = (e) => {
  //   const value = e.target.value;
  //   setSearchInput(value);
  //   handleFilter(value);
  // };

  // const handleFilter = (searchValue) => {
  //   const filtered = hotels.filter((hotel) =>
  //     hotel.location.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredHotels(filtered);
  // };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* <div className="mx-auto mt-5 w-full max-w-[503px] relative h-[49px] flex items-center justify-center px-4 sm:px-0">
        <input
          type="search"
          placeholder="Filter by location"
          className="w-full border focus:outline-none px-5 py-3 text-gray-500 rounded-l-full rounded-r-full"
          value={searchInput}
          onChange={handleInput}
        />
      </div> */}
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
