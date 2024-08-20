import React from "react";
import { IoFilter } from "react-icons/io5";
const Search = ({ searchInput, handleInput, handleFilter }) => {
  return (
    <div className="mx-auto mt-5 w-full max-w-[503px] relative h-[49px] flex items-center justify-center px-4 sm:px-0">
      <input
        type="search"
        placeholder="Filter by location"
        className="w-full border focus:outline-none px-5 py-3 text-gray-500 rounded-l-full rounded-r-full"
        value={searchInput}
        onChange={handleInput}
      />
      <button
        onClick={handleFilter}
        className="flex items-center w-[50px] sm:w-[100px] h-full justify-center absolute right-0 bg-black rounded-r-full"
      >
        <IoFilter className="text-white text-xl sm:text-3xl" />
      </button>
    </div>
  );
};

export default Search;
