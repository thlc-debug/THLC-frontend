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
  const [hotelFour, setHotelFour] = useState([]);
  const [hotelFive, setHotelFive] = useState([]);
  const [hotelSix, setHotelSix] = useState([]);
  const [hotelSeven, setHotelSeven] = useState([]);
  const [hotelEight, setHotelEight] = useState([]);


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
    const hotelsInSanFrancisco = hotels.filter(hotel => hotel.city === "San Francisco");
    const hotelsInMexico = hotels.filter(hotel => hotel.city === "Austin");
    const hotelsInChicago = hotels.filter(hotel => hotel.city === "Chicago");
    const hotelsInLasVegas = hotels.filter(hotel => hotel.city === "Las Vegas");
    const hotelsInMiami = hotels.filter(hotel => hotel.city === "Los Angeles");


    setHotelOne(hotelsInArgentina);

    setHotelTwo(hotelsInBrazil);

    setHotelThree(hotelsInLondon);

    setHotelFour(hotelsInSanFrancisco);
    setHotelFive(hotelsInMexico);
    setHotelSix(hotelsInChicago);
    setHotelSeven(hotelsInLasVegas);
    setHotelEight(hotelsInMiami);

  };

  return (
    <div className='font-f_3'>
      <Header />
      <Hero />
      <FeaturedDestinations />

      <Hotels />

      <BestOfOne city="London" hotels={hotelThree} />
      <BestOfOne city="New York" hotels={hotelTwo} />


      <WhyChooseUs />


      <BestOfOne city="San Francisco" hotels={hotelFour} />
      <BestOfOne city="Paris" hotels={hotelOne} />
      <BestOfOne city="Austin" hotels={hotelFive} />
      <BestOfOne city="Chicago" hotels={hotelSix} />

      <BestOfOne city="Las Vegas" hotels={hotelSeven} />
      <BestOfOne city="Los Angeles" hotels={hotelEight} />


      {/* <StaycationDeals /> */}
      <Footer />
    </div>
  );
}

export default Page;
