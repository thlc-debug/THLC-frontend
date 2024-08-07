import Header from '@/components/Header'
import Hero from '@/components/villas/HeroSection'
import VillaList from '@/components/villas/VillaList'
import React from 'react'
import Footer from '../../components/Footer'



const page = () => {
  return (
    <div className='font-f_3'>
        <Header/>
        <Hero/>
        <VillaList/>
        <Footer/>
    </div>
  )
}

export default page