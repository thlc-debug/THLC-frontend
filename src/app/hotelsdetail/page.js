"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OneHotel from "@/components/hotelsdetail/OneHotel";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Script from "next/script";

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

const Page = () => {
  const [id, setId] = useState(null);
  const [hotelData, setHotelData] = useState({});
  const [photoUrl, setPhotoUrl] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const idFromParams = searchParams.get("id");
    setId(idFromParams);
  }, [searchParams]);

  const getHotelData = (data) => {
    setHotelData(data);
    setPhotoUrl(data.photoUrl[0]);
  };

  return (
    <>
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: hotelData.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: hotelData.city ? hotelData.city : "",
                addressRegion: hotelData.state ? hotelData.state : "",
                postalCode: "",
                addressCountry: hotelData.country ? hotelData.country : "",
              },
              starRating: {
                "@type": "Rating",
                ratingValue: hotelData.stars ? hotelData.starts : "",
              },
              priceRange: hotelData.price ? hotelData.price : "",
              url: photoUrl ? photoUrl : "",
            }),
          }}
        />
      </Head>
      <div className="font-f_3">
        <Header />
        <Suspense fallback={<Loader />}>
          {id ? <OneHotel id={id} getDetails={getHotelData} /> : <Loader />}
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

const SuspendedPage = () => (
  <Suspense fallback={<Loader />}>
    <Page />
  </Suspense>
);

export default SuspendedPage;
