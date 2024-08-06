import Booking from '@/components/bookings/Booking'
import Hero from '@/components/bookings/HeroSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'
const page = () => {
  return (
    <>
    <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/bookings" />
    </Head>
    <div className='font-f_3'>
      <Header />
      <Hero />
      <Booking />
      <Footer />
    </div>
    </>
  )
}

export default page