"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/hotel/HeroSection'
import React, { useState, useEffect } from 'react';
// import LuxuryChains from '@/components/hotel/LuxuryChains';
import TopHotelsUSA from '@/components/hotel/TopHotelsUSA';
import TopHotelsParis from '@/components/hotel/TopHotelsParis';
import Chains from '@/components/hotel/Chains';
import Countrywise from '@/components/hotel/Countrywise';
import { base_url } from "@/base_url";
import HotelList from '@/components/hotel/HotelList';
// import HotelListFetch from '@/components/hotel/HotelListFetch';


const page = () => {
  const [visibleCards, setVisibleCards] = useState(5);

  const [hotels, setHotels] = useState([]);
  const [hotelOne, setHotelOne] = useState([]);
  const [hotelTwo, setHotelTwo] = useState([]);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  useEffect(() => {
    fetch(`${base_url}/fetch/hotel`)
      .then(response => response.json())
      .then(data => {
        setHotels(data);
        filterHotels(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterHotels = (hotels) => {
    const hotelsInArgentina = hotels.filter(hotel => hotel.country === "Canada");
    const hotelsInBrazil = hotels.filter(hotel => hotel.country === "Mexico");

    setHotelOne(hotelsInArgentina);
    
    setHotelTwo(hotelsInBrazil);
    
  };

  
  return (
    <div className='font-f_3'>
      <Header />
      <Hero />
      <Chains />
      <TopHotelsParis city="Canada" hotels={hotelOne} />
      <Countrywise />
      {/* <LuxuryChains /> */}
      <TopHotelsParis city="Mexico" hotels={hotelTwo} />
      {hotels.slice(0, visibleCards).map((hotel, i) => (
                <HotelList key={i} hotels={hotel} />
              ))}
      {/* <HotelList hotels={hotels}/> */}
      {visibleCards < hotels.length && (
        <div className='flex justify-center items-center'>
                <button
                  className="text-center flex justify-center items-center text-xl text-black font-normal py-2 rounded-md"
                  onClick={showMoreCards}
                >
                  See More
                </button>
                </div>
              )}
      <Footer />
    </div>
  )
}

export default page