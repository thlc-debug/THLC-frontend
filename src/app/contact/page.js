import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/contact/HeroSection'
import React from 'react'



export default function page() {
  return (
    <div className='font-f_3'>
      <Header/>
      <Hero/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
