'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Highlight from '../contact/Highlight';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import { base_url } from '@/base_url';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="flex text-yellow-500" />);
  }
  return <div className="flex pt-2 justify-center items-center">{stars}</div>;
};

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

const OneVilla = ({ id }) => {
  const [hotel, setHotel] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  const api = base_url;

  useEffect(() => {
    if (id) {
      fetchHotelDetail(id);
    }
  }, [id]);

  const fetchHotelDetail = async (hotelId) => {
    try {
      const res = await fetch(`${api}/newHotel/${hotelId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setHotel(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleHighlight = (index) => {
    setHighlighted(index);
  };

  if (!hotel) {
    return <Loader />;
  }

 //  console.log(hotel)

  return (
    <div className='h-full w-full'>
      <section className="relative h-[500px] w-auto z-0">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/heroHome/pexels-pixabay-258154.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center text-center h-full text-white pointer-events-auto">
          <div className="md:text-[70px] text-[40px] font-bold mb-8 mt-[130px]">{hotel.name}</div>
          <p className="text-lg md:text-[19px] text-[14px]">{hotel.city}, {hotel.country}</p>
        </div>
      </section>
      <div className='mx-5 my-10 '>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 '>
          {hotel.photoUrls.slice(0, 5).map((image, index) => (
            <div key={index} className='w-full h-64 overflow-hidden'>
              <img className='shadow-2xl hover:scale-105 w-full h-full object-cover rounded-md' src={image.replace("www.dropbox.com", "dl.dropboxusercontent.com")} alt={`hotel-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center text-lg mx-5 md:text-2xl my-5 text-center'>Discover the exquisite details of this hotel and secure your reservation today!</div>

      <div className='md:flex'>
        <div className="mx-10 mb-10">
          <div className="text-4xl font-bold text-center md:text-left">Facilities</div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {hotel.facilities.slice(1, 5).map((facility, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center border border-gray-300  rounded-full px-4 py-1 text-center text-lg"
                            >
                                {facility}
                            </div>
                        ))}
                    </div>
        </div>
        <div className='mt-5 sm:w-2/5 text-center m-auto md:mx-[5rem] text-black'>
          <div className='text-4xl font-bold text-center '>Contact</div>
          {/* <div className='pt-5'>{hotel.address}</div> */}
          {/* <div>City: {hotel.location.city}</div>
                    <div>Country: {hotel.location.country}</div> */}
          {hotel.price ? (
            <Link href={`/checkout?id=${hotel._id}`}>
              <button className="bg-black text-white m-auto my-5 flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3">
                Book Now <GoArrowUpRight className="ml-2" />
              </button>
            </Link>
          ) : (
            <a href="tel:+91-9888334677">
              <button className="bg-black text-white m-auto my-5 flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3">
                Call Now
              </button>
            </a>
          )}
        </div>
      </div>
      {/* <div className='px-10 md:pb-10 md:pt-10 py-10 md:mr-[10rem] sm:mr-10 md:text-lg text-md flex flex-wrap'>
                {hotel.rooms.map((room, index) => (
                    <Highlight
                        key={index}
                        name={room}
                        isHighlighted={highlighted === index}
                        onClick={() => handleHighlight(index)}
                    />
                ))}
            </div> */}
    </div>
  );
};

export default OneVilla;
