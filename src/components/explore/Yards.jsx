"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { base_url } from "@/base_url";

const Yards = () => {
  const [hotels, setHotels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleHotels, setNumVisibleHotels] = useState(3);
  const [loadedImages, setLoadedImages] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const defaultImageUrl = "/hoe-img3.jpeg";
  const api = base_url;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${api}/fetch/hotel`);
        const data = await response.json();
        const limitedHotels = data;
        let filteredHotels = limitedHotels.filter((hotel) =>
          hotel.photoUrls.some((url) => url.startsWith("https://photos"))
        );
        filteredHotels = filteredHotels.slice(0, 8);
        setHotels(filteredHotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      hotels.forEach((hotel, index) => {
        if (hotel.photoUrls && hotel.photoUrls.length > 0) {
          const img = new Image();
          img.src = getDirectImageUrl(hotel.photoUrls[0]);
          img.onload = () => handleImageLoad(index, true);
          img.onerror = () => handleImageLoad(index, false);
        } else {
          handleImageLoad(index, false);
        }
      });
    };
    preloadImages();
  }, [hotels]);

  const handleImageLoad = (index, success) => {
    setLoadedImages((prevState) => ({
      ...prevState,
      [index]: success,
    }));
  };

  const getDirectImageUrl = (url) => {
    return url
      .replace("www.dropbox.com", "dl.dropboxusercontent.com")
      .replace("?dl=0", "");
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - numVisibleHotels + hotels.length) % hotels.length
    );
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + numVisibleHotels) % hotels.length
      );
      setIsAnimating(false);
    }, 500); // Adjust duration as needed
  };

  const getVisibleHotels = () => {
    const visibleHotels = [];
    for (let i = 0; i < numVisibleHotels; i++) {
      visibleHotels.push(hotels[(currentIndex + i) % hotels.length]);
    }
    return visibleHotels;
  };

  const updateNumVisibleHotels = () => {
    if (window.innerWidth < 768) {
      setNumVisibleHotels(1);
    } else if (window.innerWidth < 1024) {
      setNumVisibleHotels(2);
    } else {
      setNumVisibleHotels(3);
    }
  };

  useEffect(() => {
    updateNumVisibleHotels();
    window.addEventListener("resize", updateNumVisibleHotels);
    return () => window.removeEventListener("resize", updateNumVisibleHotels);
  }, []);

  return (
    <div className="w-full max-w-6xl m-auto  px-4 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl text-black font-bold mb-2">
            Must Visit Places
          </h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.length > 0 &&
          getVisibleHotels().map((item, index) => (
            <Link href={`/hotelsdetail?id=${item._id}`} key={item._id}>
              <div
                className={`w-full ${
                  isAnimating
                    ? "transform transition-transform duration-500 ease-in-out"
                    : ""
                }`}
              >
                <img
                  className="shadow-2xl hover:scale-105 h-[220px] w-full object-cover rounded-md"
                  src={
                    loadedImages[currentIndex + index]
                      ? getDirectImageUrl(item.photoUrls[0])
                      : defaultImageUrl
                  }
                  alt={item.name}
                  onError={(e) => {
                    e.target.src =
                      "https://th.bing.com/th/id/OIP.kWsCDTmLQ4tBj6X3yXA4UAHaGQ?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
                  }}
                />
                <div className="text-lg mx-2 mt-1">
                  <b>{item.name}</b>
                </div>
                <div className="text-md mx-2 text-gray-500">
                  {item.city}, {item.country}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Yards;
