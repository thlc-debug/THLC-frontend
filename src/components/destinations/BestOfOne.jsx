"use client";

import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
const BestOfOne = ({ city, hotels }) => {
  const [numVisibleCards, setNumVisibleCards] = useState(3);

  const updateNumVisibleCards = () => {
    if (window.innerWidth < 640) {
      setNumVisibleCards(1);
    } else if (window.innerWidth < 1024) {
      setNumVisibleCards(2);
    } else {
      setNumVisibleCards(3);
    }
  };

  useEffect(() => {
    updateNumVisibleCards();
    window.addEventListener('resize', updateNumVisibleCards);
    return () => window.removeEventListener('resize', updateNumVisibleCards);
  }, []);

  const getDirectImageUrl = (url) => {
    if (!url) return url
    return url.replace("?rlkey=", "?raw=1&rlkey=");
  };

  return (
    <div className="max-w-5xl sm:mx-auto mx-6 p-4 pb-14 pt-[80px] relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="md:text-4xl  mb-5 text-2xl font-bold">Best Of {city}</div>
          {/* <p className="md:text-lg text-md">50+ hotels</p> */}
        </div>
        <div className="flex space-x-2">
          <Link className='font-f_3 ' href={`/hotelsin?city=${city}`}>See All</Link>
        </div>
      </div>
      <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'sm:grid-cols-2' : ''} ${numVisibleCards > 2 ? 'lg:grid-cols-3' : ''} gap-6 transition-transform duration-400 ease-in-out`}>
        {hotels.slice(0, numVisibleCards).map((item) => (
          <Link href={`/hotelsdetail?id=${item._id}`} key={item._id}>
            <div key={item.id} className="bg-white rounded-xl h-[24rem] border border-gray-400 items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer">
              <img src={getDirectImageUrl(item.photoUrls[0])} alt={item.name} className="w-full h-[270px] rounded-t-lg mr-4" />
              <div className="p-4">
                <h3 className="text-lg font-bold pt-2">{item.name}</h3>
                <p className="text-md text-gray-400">{item.city}, {item.country}</p>

                {/* <div className="flex text-sm text-gray-500 mt-3 gap-1">
                <FaStar className='mx-1 mt-1 text-yellow-300' />
                  <p>{item.rating}</p>
                  <p>({item.people})</p>
                </div> */}
                {/* <div className="mt-6">
                  {/* <hr /> */}
                {/* </div>  */}
                {/* <div className="flex justify-between text-md pt-3">
                  <p>{item.days} days</p>

                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestOfOne;
