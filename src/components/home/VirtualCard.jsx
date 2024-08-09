"use client";
import React from 'react';
import Link from 'next/link';

const VirtualCard = ({ data, onContactClick }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 mx-auto w-full max-w-[350px] p-5 h-[500px]"> {/* Set a fixed height */}
      <div className="w-full h-[200px] overflow-hidden">
        <img src={data.img} alt="image" className="object-cover rounded-md w-full h-full" />
      </div>

      <div className="flex flex-col justify-between items-center w-full space-y-2 h-[calc(100%-250px)]"> {/* Adjust height for content */}
        <h1 className="text-2xl text-black font-semibold text-center">{data.heading}</h1>
        <p className="text-gray-400 text-sm text-center overflow-hidden">{data.info}</p>
        <Link href="/contact">
          <div className="w-full flex justify-center">
            <button
              className="text-white bg-black flex items-center justify-center rounded-md w-[180px] h-10 mt-4"
              onClick={onContactClick}
            >
              Contact Now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VirtualCard;
