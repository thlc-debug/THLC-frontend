"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/hotel/HeroSection';
import React, { useState, useEffect } from 'react';
import TopHotelsUSA from '@/components/hotel/TopHotelsUSA';
import TopHotelsParis from '@/components/hotel/TopHotelsParis';
import Chains from '@/components/hotel/Chains';
import Countrywise from '@/components/hotel/Countrywise';
import { base_url } from "@/base_url";
import HotelList from '@/components/hotel/HotelList';
import Head from 'next/head';
const Page = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [hotels, setHotels] = useState([]);
  const [hotelOne, setHotelOne] = useState([]);
  const [hotelTwo, setHotelTwo] = useState([]);
  const [hotelThree, setHotelThree] = useState([]);
  const [hotelFour, setHotelFour] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  useEffect(() => {
    fetch(`${base_url}/newHotel`)
      .then(response => response.json())
      .then(data => {
        setHotels(data);
        filterHotels(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    filterByType(selectedTypes);
  }, [selectedTypes, hotels]);

  const filterHotels = (hotels) => {
    const hotelsInCanada = hotels.filter(hotel => hotel.country === "Canada");
    const hotelsInThailand = hotels.filter(hotel => hotel.country === "Thailand");
    const hotelsInMexico = hotels.filter(hotel => hotel.country === "Mexico");
    const hotelsInIndonesia = hotels.filter(hotel => hotel.country === "Indonesia");

    setHotelOne(hotelsInCanada);
    setHotelTwo(hotelsInMexico);
    setHotelThree(hotelsInThailand);
    setHotelFour(hotelsInIndonesia);
  };

  const filterByType = (types) => {
    if (types.length === 0) {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter(hotel => types.includes(hotel.type));
      setFilteredHotels(filtered);
    }
  };

  const handleTypeChange = (type) => {
    setSelectedTypes(prevTypes =>
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type]
    );
  };

  return (
  <>
    <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/hotel" />
      </Head>
    <div className='font-f_3'>
      <Header />
      <Hero />
      <Chains />
      <TopHotelsParis city="Canada" hotels={hotelOne} />
      <TopHotelsParis city="Thailand" hotels={hotelThree} />
      <Countrywise />
      <TopHotelsParis city="Mexico" hotels={hotelTwo} />
      <TopHotelsParis city="Indonesia" hotels={hotelFour} />

      <div className='flex flex-col items-center my-4'>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
          <label className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md shadow-sm bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer transition-all ease-in-out duration-200">
            <input
              type="checkbox"
              checked={selectedTypes.includes('Hotel')}
              onChange={() => handleTypeChange('Hotel')}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Luxury Hotels</span>
          </label>
          <label className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md shadow-sm bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer transition-all ease-in-out duration-200">
            <input
              type="checkbox"
              checked={selectedTypes.includes('Villa')}
              onChange={() => handleTypeChange('Villa')}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Exclusive Villas</span>
          </label>
          <label className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md shadow-sm bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer transition-all ease-in-out duration-200">
            <input
              type="checkbox"
              checked={selectedTypes.includes('Resort')}
              onChange={() => handleTypeChange('Resort')}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Elegant Resorts</span>
          </label>
        </div>
      </div>

      {filteredHotels.slice(0, visibleCards).map((hotel, i) => (
        <HotelList key={i} hotels={hotel} />
      ))}

      {visibleCards < filteredHotels.length && (
        <div className='flex justify-center items-center my-4'>
          <button
            className="text-center text-xl text-black font-normal py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-all ease-in-out duration-200"
            onClick={showMoreCards}
          >
            See More
          </button>
        </div>
      )}

      <Footer />
    </div>
    </>
  );
};

export default Page;
