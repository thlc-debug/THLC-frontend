"use client";

import Card from '@/components/hotelsin/Card';
import HeroSection from '@/components/hotelsin/HeroSection';
import Search from '@/components/hotelsin/Search';
import Header from '@/components/Header';
import React, { useState, useEffect, Suspense } from "react";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { base_url } from "@/base_url";

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

const NoResults = () => (
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-2xl font-semibold">Sorry, we currently do not have hotels in this city.</h1>
  </div>
);

const Page = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [searchInput, setSearchInput] = useState(searchQuery);

  const api = base_url;

  useEffect(() => {
    if (searchQuery) {
      applyFilter();
    } else {
      fetchHotels();
    }
  }, [searchQuery]);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set('search', searchInput);
    router.push(`?${params.toString()}`);
    handleFilter(searchInput);
  };

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${api}/fetch/hotel`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();
      //  console.log("Data: ", response)
      setData(response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = useDebouncedCallback(async (searchValue = searchInput) => {
    if (searchInput === "") {
      fetchHotels();
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${api}/newHotel/hotel-by-city/${searchValue}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();
       console.log("response: ", response);
      setData(response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, 300);

  // Debounce effect for filtering
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchInput !== searchQuery) {
        handleFilter();
      }
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  return (
    <div className='font-f_3'>
      <Header />
      <HeroSection cityName={searchInput} />
      <Search
        searchInput={searchInput}
        handleInput={handleInput}
        handleFilter={applyFilter}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 p-4">
          {data.length === 0 ? (
            <NoResults />
          ) : (
            <>
              {data.slice(0, visibleCards).map((hotel, i) => (
                <Card key={i} data={hotel} />
              ))}
              {visibleCards < data.length && (
                <button
                  className="text-center text-xl text-black font-normal py-2 rounded-md"
                  onClick={showMoreCards}
                >
                  See More
                </button>
              )}
            </>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

const HotelsPageWithSuspense = () => (
  <Suspense fallback={<Loader />}>
    <Page />
  </Suspense>
);

export default HotelsPageWithSuspense;
