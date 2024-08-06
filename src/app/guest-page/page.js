import LandingPage from '@/components/LandingPage'
import React from 'react'
import Head from 'next/head'
const page = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://theluxuryhotelconcierge.com" />
      </Head>
    <div className='font-f_3'>
        <LandingPage/>
    </div>
    </>
  )
}

export default page