"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { base_url } from "@/base_url";
import SeeMoreButton from "../utils/SeeMoreButton";
import { numCardsToDisplay } from "./TopPickings";

const Yards = () => {
  const [hotels, setHotels] = useState([]);
  const [visibleHotels, setVisibleHotels] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const defaultImageUrl = "/hoe-img3.jpeg";
  const api = base_url;

  const RANGE = 30;

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${api}/fetch/hotel`);
        const data = await response.json();
        const limitedHotels = data;
        let filteredHotels = limitedHotels.filter((hotel) =>
          hotel.photoUrls.some((url) => url.startsWith("https://photos"))
        );
        filteredHotels = filteredHotels.slice(0, RANGE);
        setHotels(filteredHotels);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVisibleHotels(3 * numCardsToDisplay());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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

  const getVisibleHotels = () => {
    return hotels.slice(0, visibleHotels);
  };

  const addNewCards = () => {
    if (hotels.length === 0) return;

    const newCards = 3 * numCardsToDisplay();
    if (visibleHotels + newCards > hotels.length) return;
    setVisibleHotels((prev) => prev + newCards);
  };

  return (
    <div className="w-full max-w-6xl m-auto  px-4 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
          <div className="text-4xl text-black font-bold mb-2">
            Must Visit Places
          </div>
          <p className="text-black text-sm">50+ hotels</p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotels.length > 0 &&
              getVisibleHotels().map((item, index) => (
                <Link href={`/hotelsdetail?id=${item._id}`} key={item._id}>
                  <div className="w-full">
                    <img
                      className="shadow-2xl hover:scale-105 h-[220px] w-full object-cover rounded-md"
                      src={
                        loadedImages[index]
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

          {hotels.length > 0 && visibleHotels < hotels.length - 3 && (
            <SeeMoreButton func={addNewCards} />
          )}
        </div>
      )}
    </div>
  );
};

export default Yards;
