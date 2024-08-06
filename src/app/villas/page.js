import Header from '@/components/Header'
import Hero from '@/components/villas/HeroSection'
import VillaList from '@/components/villas/VillaList'
import React from 'react'
import Footer from '../../components/Footer'
import Head from 'next/head'
const page = () => {
  return (
    <>
    <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/villas" />
    </Head>
    <div className='font-f_3'>
        <Header/>
        <Hero/>
        <VillaList/>
        <Footer/>
    </div>
    </>
  )
}

export default page