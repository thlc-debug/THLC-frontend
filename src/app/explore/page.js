import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import TopPickings from '@/components/explore/TopPickings';
import FeaturedHotels from '@/components/explore/FeaturedHotels';
import Yards from '@/components/explore/Yards';
import Find from '@/components/explore/Find';
import TopRatedHotels from '../../components/explore/TopRatedHotels';
import Footer from '../../components/Footer';
import Offers from '@/components/explore/Offers';
import Service from '@/components/explore/Service';
import Service2 from '@/components/explore/Service2';
import Head from 'next/head';
const page = () => {
  return (

    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/explore" />
      </Head>
    <div className='font-f_3'>
      <Header />
      <Hero />
      <FeaturedHotels />
      <TopPickings />
      <Yards />
      <Find />
      <TopRatedHotels />
      <Service2 />
      <Footer />
    </div>
    </>
  );
}

export default page;