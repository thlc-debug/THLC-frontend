"use client";
import React, { useState } from "react";

const BlogCard = ({ data }) => {
  return (
    <div className="max-w-[95%] lg:max-w-[1023.75px] h-auto flex flex-col lg:flex-row justify-between p-5 rounded-md border border-gray-300 mx-auto my-5 bg-white shadow-md">
      {/* content */}
      <div className="flex flex-col justify-center lg:w-2/3 gap-4 p-2 lg:p-5">
        <div className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
          {data.heading}
        </div>
        <div>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            {data.paragraph}
          </p>
        </div>
      </div>

      {/* image */}
      <div className="mt-4 lg:mt-0 lg:ml-4 flex-shrink-0 lg:w-1/3 p-2 lg:p-5">
        <img
          src={data.image}
          alt="Blog"
          className="w-full h-[200px] lg:w-[250px] lg:h-[250px] rounded-md object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default BlogCard;
