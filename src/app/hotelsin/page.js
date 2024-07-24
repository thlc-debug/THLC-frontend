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
    <h1 className="text-2xl font-semibold text-gray-800">Sorry, we currently do not have hotels in this city.</h1>
  </div>
);

const Page = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const cityQuery = searchParams.get('city') || '';
  const countryQuery = searchParams.get('country') || '';
  const [searchInput, setSearchInput] = useState(cityQuery);
  const [countryInput, setCountryInput] = useState(countryQuery)

  const api = base_url;

  useEffect(() => {
    applyFilter();
  }, [searchInput])

  useEffect(() => {
    filterByType(selectedTypes);
  }, [selectedTypes, data]);

  useEffect(() => {
    filterByType(selectedTypes);
  }, [selectedTypes, data]);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setCountryInput('');
  };

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set('city', searchInput);
    params.set('country', '');
    router.push(`?${params.toString()}`);
    handleFilter(searchInput);
  };

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${api}/newHotel`, {
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
    if (searchInput === "") {
      fetchHotels();
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${api}/search/hotels?city=${searchValue}&country=${countryInput}`, {
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
  }, 300);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchInput !== cityQuery) {
        handleFilter();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  const filterByType = (types) => {
    if (types.length === 0) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => types.includes(item.type));
      setFilteredData(filtered);
    }
  };

  const handleTypeChange = (type) => {
    setSelectedTypes(prevTypes =>
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type]
    );
  };

  return (
    <div className='font-f_3'>
      <Header />
      <HeroSection cityName={searchInput} />
      <Search
        searchInput={searchInput}
        handleInput={handleInput}
        handleFilter={applyFilter}
      />
      <div className="flex flex-col items-center my-4">
       
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
          <label className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md shadow-sm bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer transition-all ease-in-out duration-200">
            <input
              type="checkbox"
              checked={selectedTypes.includes('Hotel')}
              onChange={() => handleTypeChange('Hotel')}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Luxury Hotels</span>
          </label>
          <label className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md shadow-sm bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer transition-all ease-in-out duration-200">
            <input
              type="checkbox"
              checked={selectedTypes.includes('Villa')}
              onChange={() => handleTypeChange('Villa')}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Exclusive Villas</span>
          </label>
          <label className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md shadow-sm bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer transition-all ease-in-out duration-200">
            <input
              type="checkbox"
              checked={selectedTypes.includes('Resort')}
              onChange={() => handleTypeChange('Resort')}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Elegant Resorts</span>
          </label>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 p-4">
          {filteredData.length === 0 ? (
            <NoResults />
          ) : (
            <>
              {filteredData.slice(0, visibleCards).map((hotel, i) => (
                <Card key={i} data={hotel} />
              ))}
              {visibleCards < filteredData.length && (
                <button
                  className="text-center text-xl text-black font-normal py-2 px-4 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-all ease-in-out duration-200"
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
