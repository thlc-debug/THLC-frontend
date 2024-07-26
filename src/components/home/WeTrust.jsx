"use client";

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { base_url } from '@/base_url';

const WeTrust = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [numVisibleCards, setNumVisibleCards] = useState(6);
  const [hotels, setHotels] = useState([]);
  const api = base_url;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${api}/fetch/chain`);
        const data = await response.json();
        setHotels(data)
      } catch (error) {
        console.error('Failed to fetch hotels:', error);
      }
    }

    fetchData();
  }, []);

  const getDirectImageUrl = (url) => {
    if (!url.includes("?rlkey=")) return url;
    return url.replace("?rlkey=", "?raw=1&rlkey=");
  };

  const router = useRouter();

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + numVisibleCards) % hotels.length);
        setIsAnimating(false);
      }, 400);
    }
  };

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - numVisibleCards + hotels.length) % hotels.length);
        setIsAnimating(false);
      }, 400);
    }
  };

  const getVisibleHotels = () => {
    const visibleHotels = [];
    for (let i = 0; i < numVisibleCards; i++) {
      visibleHotels.push(hotels[(currentIndex + i) % hotels.length]);
    }
    return visibleHotels;
  };

  const updateNumVisibleCards = () => {
    if (window.innerWidth < 1024) {
      setNumVisibleCards(3);
    } else {
      setNumVisibleCards(6);
    }
  };

  useEffect(() => {
    updateNumVisibleCards();
    window.addEventListener('resize', updateNumVisibleCards);
    return () => window.removeEventListener('resize', updateNumVisibleCards);
  }, []);

  return (
    <div className="max-w-5xl sm:mx-auto mx-6 p-4 pb-14 pt-[80px] relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="md:text-4xl text-2xl font-bold">Luxury Chains We Trust</div>
          <p className="md:text-lg text-md">50+ chains</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button onClick={handlePrevClick} className="bg-gray-200 md:p-2  rounded-full hover:bg-gray-300 cursor-pointer">
            <MdKeyboardArrowLeft className="text-2xl  " />
          </button>
          <button onClick={handleNextClick} className="bg-gray-200 md:p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdKeyboardArrowRight className="text-2xl " />
          </button>
        </div>
      </div>
      <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' : ''} gap-6 transition-transform duration-300 ease-in-out`}>
        {getVisibleHotels().map((item, index) => {
          if (!item || !item._id || !item.photoUrls || item.photoUrls.length === 0) {
            console.warn('Missing data for hotel:', item);
            return null;
          }
          return (
            <Link href={`/hoteldetail?id=${item._id}`} key={item._id} className='px-2 pt-2 relative hover:cursor-pointer'>
              <div className="bg-white p-4 rounded-lg border border-gray-400 flex items-center transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                <img
                  src={getDirectImageUrl(item.photoUrls[0])}
                  alt={item.name}
                  className="w-[90px] h-[90px] rounded-full mr-4"
                  onError={(e) => {
                    e.target.src = "https://th.bing.com/th/id/OIP.kWsCDTmLQ4tBj6X3yXA4UAHaGQ?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
                  }}
                />

                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WeTrust;
