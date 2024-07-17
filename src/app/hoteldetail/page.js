"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OneHotel from "@/components/hoteldetail/OneHotel";
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

const Page = () => {
  const [id, setId] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const idFromParams = searchParams.get('id');
    setId(idFromParams);
  }, [searchParams]);

  return (
    <div className="font-f_3">
      <Header />
      <Suspense fallback={<Loader />}>
        {id ? <OneHotel id={id} /> : <Loader />}
      </Suspense>
      <Footer />
    </div>
  );
}

const SuspendedPage = () => (
  <Suspense fallback={<Loader />}>
    <Page />
  </Suspense>
);

export default SuspendedPage;
