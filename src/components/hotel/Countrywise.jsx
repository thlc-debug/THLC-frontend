"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { base_url } from "@/base_url";

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

const Countrywise = () => {
  const [countries, setCountries] = useState([]);

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

  // console.log("countrywise" + countries)

  const getDirectImageUrl = (url) => {
    return url.replace("dl=0", "raw=1");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "10px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[7rem] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-3xl sm:text-4xl font-f_3">
        Browse by <b>City</b>
      </div>
      <div className="my-10">
        <Slider {...settings}>
          {countries.map((country, index) => {
            if (!country.city) return null;

            return (
              <Link
                href={`/hotelsin?city=${country.city}&country=${country.country}`}
                key={index}
                className="p-2"
              >
                <div
                  key={index}
                  className="rounded-xl h-[25rem] sm:mx-2 w-full sm:w-auto relative hover:cursor-pointer"
                >
                  <img
                    className="rounded-xl brightness-75 h-full w-full mx-auto hover:brightness-50"
                    src={getDirectImageUrl(country.photoUrl)}
                    alt={country._id}
                  />
                  <div className="absolute bottom-0 w-full py-4 bg-black bg-opacity-50 rounded-b-xl flex items-center justify-center text-white text-center">
                    <div className="text-lg sm:text-xl font-f_2 font-bold">
                      {country.city}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Countrywise;
