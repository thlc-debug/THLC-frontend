import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutUs from '@/components/aboutus/AboutUs'
import Hero from '@/components/aboutus/HeroSection'
import Head from 'next/head'

import React from 'react'

const page = () => {
  
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/aboutus" />
      </Head>

      <div className='font-f_3'>
        <Header/>
        <Hero/>
        <AboutUs/>
        
        <Footer/>
      </div>
    </>
  )
}

export default page