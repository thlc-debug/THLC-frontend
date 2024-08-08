'use client'
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/FeatureSection';
import Map from '@/components/home/Map'
//import Experts from '@/components/home/Experts'
import BestChoice from '@/components/home/BestChoice'
//import Reviews from '@/components/home/Reviews'
import Footer from '@/components/Footer'
import Fixed from '@/components/home/Fixed';
import Virtual from '@/components/home/Virtual';
import WeTrust from '@/components/home/WeTrust';
import BoxSection from '@/components/home/BoxSection';
import TopVillas from '@/components/home/TopVillas';
import Services from '@/components/home/Services';
import OurService from '@/components/home/OurService';
import Script from 'next/script';


const Home = () => {

  return (
    <div className='font-f_3'>
      <Header />
      <HeroSection />
      <BoxSection />
      <OurService />
      <Features />
      <Map />
      <WeTrust />
      <TopVillas />
      <BestChoice />
      <Services />
      <Virtual />
      <Footer />
    </div>
  )
}

export default Home;