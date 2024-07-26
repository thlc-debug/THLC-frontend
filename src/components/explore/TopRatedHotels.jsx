"use client";

import React, { useState, useEffect } from 'react';
import { PiLessThanBold, PiGreaterThanBold } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { base_url } from '@/base_url';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const TopRatedHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const api = base_url;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${api}/fetch/hotel`);
        const data = await response.json();

        const processedHotels = data.slice(8, 15).map(hotel => ({
          ...hotel,
          review_rating: Math.floor(Math.random() * 3) + 3,
          photoUrls: hotel.photoUrls.map(url => url.replace("dl=0", "raw=1"))
        }));

        setHotels(processedHotels);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };
    fetchHotels();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const getVisibleHotel = () => {
    return hotels[currentIndex];
  };

  if (hotels.length === 0) {
    return <div></div>;
  }

  return (
    <div className="w-full p-4">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <div className="text-3xl text-black font-bold">Top Rated Hotels</div>
            <p className="text-black mt-2 text-sm">55+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous" onClick={handlePrevClick}>
              <div className="bg-white text-black w-7 h-7 flex items-center justify-center border border-black rounded-md hover:bg-gray-200 transition">
                <MdKeyboardArrowLeft />
              </div>
            </button>
            <button aria-label="Next" onClick={handleNextClick}>
              <div className="bg-black text-white border border-black w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-700 transition">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 mt-10 p-4 rounded-md">
          <div className="flex-shrink-0 w-full md:w-[270px] h-[250px] md:h-auto">
            <img src={getVisibleHotel().photoUrls[0]} alt="top hotel" className="md:w-[20rem] md:h-[20rem] w-[18rem] h-[15rem] object-cover rounded-md md:rounded-b-full hover:scale-105" />
          </div>

          <div className="flex flex-col justify-center gap-4 w-full">
            <div>
              <div className="text-2xl font-semibold text-black">{getVisibleHotel().name}</div>
              <p className="text-sm text-gray-600">{`${getVisibleHotel().city}, ${getVisibleHotel().country}`}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(getVisibleHotel().review_rating)].map((_, index) => (
                  <IoStar key={index} className="text-yellow-500" />
                ))}
                {[...Array(5 - getVisibleHotel().review_rating)].map((_, index) => (
                  <IoStar key={index + getVisibleHotel().review_rating} className="text-gray-400" />
                ))}
              </div>
              <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">Top Choice</span>
            </div>
            <p className="text-base text-black">{getVisibleHotel().about}</p>
            <div className="flex flex-wrap gap-2">
              {getVisibleHotel().facilities.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheck className="text-white bg-black rounded-full p-1" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link href="/checkout"><button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Book Now
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {getVisibleHotel().photoUrls.slice(1, 5).map((img, index) => (
            <img key={index} src={img} alt={`Hotel ${getVisibleHotel()._id} Image ${index + 1}`} className="w-full h-full object-cover rounded-md hover:scale-105" />
          ))}
        </div>

        <Link href="/luxury-chains"><p
          className="text-center flex items-center justify-center gap-1 text-[16px] text-black font-bold mt-8 hover:cursor-pointer hover:underline"
          onClick={() => router.push('/hotels')}
        >
          See all
          <span>
            <PiGreaterThanBold className='text-[10px]' />
          </span>
        </p>
        </Link>
      </div>
    </div>
  );
};

export default TopRatedHotels;
