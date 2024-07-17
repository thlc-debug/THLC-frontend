"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { base_url } from '@/base_url';

const TopPickings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(3);
  const [resorts, setResorts] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const [isAnimatingIndex, setIsAnimatingIndex] = useState(null); // Track index for animation
  const api = base_url;
  const defaultImageUrl = '/hoe-img3.jpeg';

  useEffect(() => {
    async function fetchResorts() {
      try {
        const res = await fetch(`${api}/fetch/resort`);
        const data = await res.json();
        const limitedResorts = data.slice(0, 10);
        setResorts(limitedResorts);
      } catch (error) {
        console.error('Failed to fetch resorts:', error);
      }
    }
    fetchResorts();
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      resorts.forEach((resort, index) => {
        const img = new Image();
        img.src = getDirectImageUrl(resort.photoUrls[0]);
        img.onload = () => handleImageLoad(index, true);
        img.onerror = () => handleImageLoad(index, false);
      });
    };

    preloadImages();
  }, [resorts]);

  const handleImageLoad = (index, success) => {
    setLoadedImages(prevState => ({
      ...prevState,
      [index]: success
    }));
  };

  const getDirectImageUrl = (url) => {
    return url.replace("dl=0", "raw=1");
  };

  const handlePrevClick = () => {
    if (isAnimatingIndex !== null) return;
    setIsAnimatingIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resorts.length) % resorts.length);
    setTimeout(() => {
      setIsAnimatingIndex(null);
    }, 500);
  };

  const handleNextClick = () => {
    if (isAnimatingIndex !== null) return;
    setIsAnimatingIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resorts.length);
    setTimeout(() => {
      setIsAnimatingIndex(null);
    }, 500);
  };

  const updateNumVisibleCards = () => {
    if (window.innerWidth < 768) {
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

  const getVisibleResorts = () => {
    const visibleResorts = [];
    for (let i = 0; i < numVisibleCards; i++) {
      visibleResorts.push(resorts[(currentIndex + i) % resorts.length]);
    }
    return visibleResorts;
  };

  return (
    <div className="w-full max-w-6xl m-auto mt-4 px-4 mb-[8rem]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl text-black font-bold mb-2">Must Visit Resorts</h1>
          <p className="text-black text-sm">50+ resorts</p>
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
      <div className="container mx-auto max-w-6xl lg:px-0 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resorts.length > 0 && getVisibleResorts().map((resort, index) => (
            <Link href={`/resortdetail?id=${resort._id}`} key={resort._id}>
              <div
                className={`rounded-lg shadow-lg overflow-hidden hover:cursor-pointer transform transition-transform duration-500 ease-in-out `}
                style={{
                  backgroundImage: `url(${loadedImages[(currentIndex + index) % resorts.length] ? getDirectImageUrl(resort.photoUrls[0]) : defaultImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '350px',
                  opacity: index === 0 ? '100' : '50' // Adjust opacity based on index
                }}
              >
                <div className="p-4 bottom-0 w-full mb-0 bg-black bg-opacity-50 text-white mt-[17rem] transition-opacity duration-500 ease-in-out">
                  <h3 className="text-xl font-f_3">{resort.name}</h3>
                  <p>{resort.city}, {resort.country}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPickings;
