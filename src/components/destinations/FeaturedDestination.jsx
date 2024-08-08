"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { base_url } from "@/base_url";

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [numVisibleCards, setNumVisibleCards] = useState(6);
  const [countries, setCountries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const cityResponse = await fetch(
          `${base_url}/newHotel/cities-alphabetical`
        );
        const cities = await cityResponse.json();
        const response = await fetch(`${base_url}/cityImg/fetchAllImg`);
        const data = await response.json();
        const filteredData = data.filter((obj) => cities.includes(obj.city));
        setCountries(filteredData.slice(0, 20));
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    }

    fetchCountries();
  }, []);

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + numVisibleCards) % countries.length
        );
        setIsAnimating(false);
      }, 400);
    }
  };

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - numVisibleCards + countries.length) % countries.length
        );
        setIsAnimating(false);
      }, 400);
    }
  };

  const getVisibleDestinations = () => {
    const visibleDestinations = [];
    for (let i = 0; i < numVisibleCards; i++) {
      visibleDestinations.push(
        countries[(currentIndex + i) % countries.length]
      );
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
    window.addEventListener("resize", updateNumVisibleCards);
    return () => window.removeEventListener("resize", updateNumVisibleCards);
  }, []);

  return (
    <div className="max-w-5xl sm:mx-auto mx-6 p-4 pb-14 pt-[80px] relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="md:text-4xl text-2xl font-bold">
            Featured Destinations
          </div>
          <p className="md:text-lg text-md">2000+ hotels</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevClick}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer"
          >
            <MdKeyboardArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer"
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
      {countries.length > 0 ? (
        <div
          className={`grid grid-cols-1 ${
            numVisibleCards > 1
              ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
              : ""
          } gap-6 transition-transform duration-400 ease-in-out
        `}
        >
          {getVisibleDestinations().map((destination, index) => (
            <Link href={`/hotelsin?city=${destination.city}`} key={index}>
              <div className="bg-white p-4 rounded-lg border border-gray-400 flex items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer">
                <img
                  src={getDirectImageUrl(destination.photoUrl)}
                  alt={destination._id}
                  className="w-[90px] h-[90px] rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{destination.city}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default FeaturedDestinations;
