"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { base_url } from '@/base_url';

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${base_url}/fetch/hotel`);
        const data = await response.json();
        const limitedHotels = data;
        let filteredHotels = limitedHotels.filter(hotel =>
          hotel.photoUrls.some(url => url.startsWith("https://photos"))
        );
        filteredHotels = filteredHotels.slice(9, 17);
        setHotels(filteredHotels);
        preloadImages(filteredHotels);
      } catch (error) {
        console.error('Failed to fetch hotels:', error);
      }
    }

    fetchData();
  }, []);

  const getDirectImageUrl = (url) => {
    if (url.startsWith('https://photos')) return url;
    return url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
  };

  const preloadImages = (hotels) => {
    hotels.forEach(hotel => {
      hotel.photoUrls.slice(0, 3).forEach(url => {
        const img = new Image();
        img.src = getDirectImageUrl(url);
      });
    });
  };

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const getVisibleImages = () => {
    if (hotels.length === 0) return null;
    const hotel = hotels[currentIndex];
    if (hotel.photoUrls.length === 0) return null;
    return hotel.photoUrls.slice(0, 3).map((image, index) => (
      <img
        key={index}
        src={getDirectImageUrl(image)}
        alt={`Featured hotel image ${index + 1}`}
        loading="lazy"
        className={`w-full h-64 sm:h-72 md:h-90 lg:h-100 object-cover rounded-md  transition-transform duration-500 ease-in-out transform ${index === 0 ? 'opacity-100 scale-105' : 'opacity-100 scale-100'} ${isAnimating ? 'opacity-0 scale-95' : ''} ${index > 0 ? 'hidden sm:block' : 'block'}`}
      />
    ));
  };

  return (
    <div className="w-full p-4 mt-14 mb-[5rem]">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl text-black font-bold mb-2">Luxury Hubs of the World</h1>
            <p className="text-black text-sm">50+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous" onClick={handlePrevClick}>
              <div className="bg-white text-black border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <MdKeyboardArrowLeft />
              </div>
            </button>
            <button aria-label="Next" onClick={handleNextClick}>
              <div className="bg-black text-white border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {getVisibleImages()}
          </div>
        </div>
        {hotels.length > 0 && (
          <div className={`mt-4 sm:mt-0 flex flex-col justify-between sm:flex-row items-center p-2 md:p-3 w-full sm:w-auto bg-white rounded-md shadow-xl  transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-medium text-black">{hotels[currentIndex].name}</h3>
            </div>
            <Link href={`/hoteldetail?id=${hotels[currentIndex]._id}`}>
              <button className="px-4 py-1 mx-2 my-2 text-black border-[.5px] border-black hover:bg-black hover:text-white rounded-[25px] font-[400] text-[16px]">Start Booking</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedHotels;
