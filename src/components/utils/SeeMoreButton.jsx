import React from "react";

const SeeMoreButton = ({ func }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <button
        className="text-center text-xl text-black font-normal py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-all ease-in-out duration-200"
        onClick={func}
      >
        See More
      </button>
    </div>
  );
};

export default SeeMoreButton;
