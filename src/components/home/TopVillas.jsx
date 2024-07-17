"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { base_url } from '@/base_url';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const api = base_url;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-1 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
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
      className="absolute top-1/2 left-1 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={16} />
    </div>
  );
};

const TopVillas = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${api}/fetch/villa`);
        const data = await response.json();
        setHotels(data.slice(0, 6));
        // console.log(data);
      } catch (error) {
        console.error('Failed to fetch hotels:', error);
      }
    }

    fetchData();
  }, []);

  const getDirectImageUrl = (url) => {
    return url.replace("?rlkey=", "?raw=1&rlkey=");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true, // Enable center mode
    centerPadding: '10px', // Padding for center mode
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='w-full max-w-5xl mt-[3rem] mx-auto px-4'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl md:text-4xl font-semibold font-f_3'>Top Villas</div>
        <Link href="/villas">
          <div className='cursor-pointer flex space-x-2 text-lg font-f_3'>See More</div>
        </Link>
      </div>

      <div className='p-4 sm:p-6 md:p-10 h-auto md:h-[375px] my-5 w-full bg-gray-100 border-2 border-gray-200 rounded-xl'>
        <Slider {...settings}>
          {hotels.map(item => (
            <Link href={`/villas`} className="p-3 relative hover:cursor-pointer no-focus-outline block" key={item._id}>

              <div key={item._id} className=' relative'>
                <img className='brightness-75 rounded-xl h-[250px] md:h-[270px] w-[250px] md:w-[275px] mx-auto hover:brightness-50' src={getDirectImageUrl(item.photoUrls[0])} alt={item.name} />

                {/* <div className='absolute top-5 left-5 rounded-full h-[1.5rem] w-[3.2rem] px-1 flex bg-white'>
                                <FaStar className='mx-1 mt-1 text-yellow-300' />
                                {item.rating}
                            </div> */}

                <div className="absolute bottom-0  w-full py-2 bg-black bg-opacity-50 rounded-b-xl text-white text-center">
                  <h2 className="text-md font-f_3">{item.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopVillas;
