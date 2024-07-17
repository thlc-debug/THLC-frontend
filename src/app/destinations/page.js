"use client"

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/destinations/HeroSection';
import FeaturedDestinations from '@/components/destinations/FeaturedDestination';
import BestOfOne from '@/components/destinations/BestOfOne';
import Footer from '@/components/Footer';
import StaycationDeals from '@/components/destinations/StaycationDeals';
import WhyChooseUs from '@/components/destinations/WhyChooseUs';
import Hotels from '@/components/destinations/Hotels';
import { base_url } from '@/base_url';

const Page = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelOne, setHotelOne] = useState([]);
  const [hotelTwo, setHotelTwo] = useState([]);
  const [hotelThree, setHotelThree] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch(`${base_url}/fetch/hotel`)
      .then(response => response.json())
      .then(data => {
        setHotels(data);
        filterHotels(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterHotels = (hotels) => {
    const hotelsInArgentina = hotels.filter(hotel => hotel.city === "Paris");
    const hotelsInBrazil = hotels.filter(hotel => hotel.city === "New York");
    const hotelsInLondon = hotels.filter(hotel => hotel.city === "London");

    setHotelOne(hotelsInArgentina);

    setHotelTwo(hotelsInBrazil);

    setHotelThree(hotelsInLondon);
  };

  return (
    <div className='font-f_3'>
      <Header />
      <Hero />
      <FeaturedDestinations />

      <Hotels />

      <BestOfOne city="London" hotels={hotelThree} />


      <WhyChooseUs />

      <BestOfOne city="Paris" hotels={hotelOne} />
      <BestOfOne city="New York" hotels={hotelTwo} />
      {/* <StaycationDeals /> */}
      <Footer />
    </div>
  );
}

export default Page;
