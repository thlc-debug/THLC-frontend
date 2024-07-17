"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { base_url } from '@/base_url';

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [numVisibleCards, setNumVisibleCards] = useState(6);
  const [countries, setCountries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(`${base_url}/cityImg/fetchAllImg`);
        const data = await response.json();
        // console.log('Fetched data:', data); // Debugging log
        setCountries(data.slice(0, 10)); // Limiting to 10 countries
        // console.log("data:", countries)
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    }

    fetchCountries();
  }, []);

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + numVisibleCards) % countries.length);
        setIsAnimating(false);
      }, 400);
    }
  };

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - numVisibleCards + countries.length) % countries.length);
        setIsAnimating(false);
      }, 400);
    }
  };

  const getVisibleDestinations = () => {
    const visibleDestinations = [];
    for (let i = 0; i < numVisibleCards; i++) {
      visibleDestinations.push(countries[(currentIndex + i) % countries.length]);
    }
    return visibleDestinations;
  };

  const getDirectImageUrl = (url) => {
    return url.replace("dl=0", "raw=1");
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
          <h2 className="md:text-4xl text-2xl font-bold">Featured Destinations</h2>
          <p className="md:text-lg text-md">2000+ hotels</p>
        </div>
        <div className="flex space-x-2">
          <button onClick={handlePrevClick} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdKeyboardArrowLeft className="text-2xl" />
          </button>
          <button onClick={handleNextClick} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' : ''} gap-6 transition-transform duration-400 ease-in-out`}>
        {countries.length > 0 ? getVisibleDestinations().map((destination, index) => (
          <Link href={`/hotelsin?search=${destination.city}`} key={index}>
            <div
              className="bg-white p-4 rounded-lg border border-gray-400 flex items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer"
            >
              <img src={getDirectImageUrl(destination.photoUrl)} alt={destination._id} className="w-[90px] h-[90px] rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold">{destination.city ? destination.city : "Aruba"}</h3>
              </div>
            </div>
          </Link>
        )) : (
          <div className="col-span-full text-center">Loading...</div>
        )}
      </div>
    </div>
  ); 
};

export default FeaturedDestinations;
