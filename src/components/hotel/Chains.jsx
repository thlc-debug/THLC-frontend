"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { base_url } from "@/base_url";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const api = base_url;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-3 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowRight size={16} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-3 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={16} />
    </div>
  );
};

function Chains() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${api}/fetch/chain`);
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    }

    fetchData();
  }, []);

  const getDirectImageUrl = (url) => {
    if (!url || !url.includes("?rlkey=")) return url;
    return url.replace("?rlkey=", "?raw=1&rlkey=");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "10px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[7rem] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl sm:text-4xl font-f_3">Luxury Chains</div>
      <div className="text-xl sm:text-2xl text-gray-500">
        55+ chains curated for you..
      </div>

      <div className="p-5 h-auto sm:h-[305px] my-5 w-full bg-gray-100 border-2 border-gray-200 rounded-xl">
        <Slider {...settings}>
          {hotels.map((item, index) => (
            <Link
              href={`/hoteldetail?id=${item._id}`}
              key={index}
              className="p-5 relative hover:cursor-pointer no-focus-outline block"
            >
              <div className="relative">
                <img
                  className="brightness-75 rounded-xl h-[200px] sm:h-[220px] w-full sm:w-[370px] mx-auto hover:brightness-50"
                  src={getDirectImageUrl(item.photoUrls[0])}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src =
                      "https://th.bing.com/th/id/OIP.kWsCDTmLQ4tBj6X3yXA4UAHaGQ?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
                  }}
                />

                <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-50 rounded-b-xl text-white text-center">
                  <h3 className="text-lg font-f_3">{item.name}</h3>
                  <h4 className="text-md font-f_3">
                    {item.city}, {item.country}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <Link href="/luxury-chains">
        <div className="mx-auto h-[2.5rem]  w-[12rem] sm:w-[17rem] sm:h-[3rem] font-f_3 mt-10 border-2 text-sm sm:text-xl border-gray-200 rounded-xl text-center p-2">
          View all Luxury Chains
        </div>
      </Link>
    </div>
  );
}

export default Chains;
