"use client";

import Card from '@/components/luxury-chains/Card'
import Hero from '@/components/luxury-chains/HeroSection'
import Search from '@/components/luxury-chains/Search'
import Header from '@/components/Header'
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
    fetchHotels();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      handleFilter(searchQuery);
    }
  }, []); // Run once on mount

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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${api}/fetch/chain`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();

      setData(response);

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = useDebouncedCallback(async (searchValue = searchInput) => {
    if (searchInput === "") return;

    try {
      setLoading(true);
      const res = await fetch(`${api}/search/hotels?city=${searchValue}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();
      // console.log("response: ", response);
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
      <Hero />
      {/* <Search
        searchInput={searchInput}
        handleInput={handleInput}
        handleFilter={applyFilter}  
      /> */}
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 p-4">
          {data &&
            data.slice(0, visibleCards).map((hotel, i) => (
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