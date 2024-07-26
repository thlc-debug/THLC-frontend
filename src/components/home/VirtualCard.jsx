"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const VirtualCard = ({ data, onContactClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mx-auto w-full max-w-[350px] p-5">
  <div className="w-full">
    <img src={data.img} alt="image" className="object-cover rounded-md w-full h-[200px]" />
  </div>

  <div className="flex flex-col justify-center items-center w-full space-y-2">
    <div className="text-2xl text-black font-semibold text-center">{data.heading}</div>
    <p className="text-gray-400 text-sm text-center">{data.info}</p>
  </div>
    <Link href="/contact">
  <div className="w-full flex justify-center">
    <button
      className="text-white bg-black flex items-center justify-center rounded-md w-[180px] h-10 mt-4"
      // onClick={onContactClick}
    >
      Contact Now
    </button>
  </div>
  </Link>
</div>


  );
};

export default VirtualCard;
