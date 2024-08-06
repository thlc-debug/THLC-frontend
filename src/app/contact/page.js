import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/contact/HeroSection'
import React from 'react'
import Head from 'next/head'
export default function page() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com/contact" />
      </Head>
    <div className='font-f_3'>
      <Header/>
      <Hero/>
      <ContactSection/>
      <Footer/>
    </div>
    </>
  )
}
