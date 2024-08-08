"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdTune } from "react-icons/md";
import { base_url } from "@/base_url";
import Link from "next/link";

const Hotels = () => {
  const [visibleHotels, setVisibleHotels] = useState(9);
  const [countries, setCountries] = useState(["All"]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [numVisibleCards, setNumVisibleCards] = useState(9);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const modalRef = useRef(null);

  const loadMoreHotels = () => {
    setVisibleHotels((prev) => prev + numVisibleCards);
  };

  const updateNumVisibleCards = () => {
    if (window.innerWidth < 640) {
      setNumVisibleCards(3);
    } else if (window.innerWidth < 1024) {
      setNumVisibleCards(6);
    } else {
      setNumVisibleCards(8);
    }
  };

  const toggleCountryFilter = (country) => {
    setSelectedCountry(country);
    setShowFilterModal(false);
    filterHotels(country);
  };

  const toggleModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowFilterModal(false);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${base_url}/newHotel/top-countries`);
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      // Limiting to 7 countries
      const limitedCountries = [
        "All",
        ...data.slice(0, 8).map((country) => country._id),
      ];
      setCountries(limitedCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setError("Failed to load countries. Please try again later.");
    }
  };

  const fetchAllHotels = async () => {
    try {
      const response = await fetch(`${base_url}/fetch/hotel`);
      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received from server");
      }
      setAllHotels(data);
      setFilteredHotels(data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("Failed to load hotels. Please try again later.");
    }
  };

  const filterHotels = (country) => {
    if (country === "All") {
      setFilteredHotels(allHotels);
    } else {
      const filtered = allHotels.filter((hotel) => hotel.country === country);
      setFilteredHotels(filtered);
    }
    setVisibleHotels(numVisibleCards);
  };

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      await Promise.all([fetchCountries(), fetchAllHotels()]);
      setLoading(false);
    };

    initializeData();
    updateNumVisibleCards();
    window.addEventListener("resize", updateNumVisibleCards);
    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      window.removeEventListener("resize", updateNumVisibleCards);
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  useEffect(() => {
    setVisibleHotels(numVisibleCards);
  }, [numVisibleCards]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-8 max-w-7xl mt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4 overflow-x-auto sm:overflow-visible scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => toggleCountryFilter(country)}
              className={`relative px-4 py-2 mb-4 border-2 rounded-lg h-16 overflow-clip transition-transform duration-200 whitespace-nowrap ${
                selectedCountry === country
                  ? "font-bold border-gray-800"
                  : "border-gray-300"
              }`}
            >
              {country}
              {selectedCountry === country && (
                <div className="absolute left-0 bottom-0 h-1 w-full bg-gray-800 animate-fadeIn"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredHotels.slice(0, visibleHotels).map((hotel) => (
          <Link href={`/hotelsdetail?id=${hotel._id}`} key={hotel._id}>
            <div
              key={hotel.id}
              className="relative bg-white h-[20rem] shadow-lg rounded-lg overflow-hidden group"
            >
              <div className="group-hover:scale-105 group-hover:cursor-pointer transition-transform duration-300">
                <Image
                  src={hotel.photoUrls[0].replace(
                    "www.dropbox.com",
                    "dl.dropboxusercontent.com"
                  )}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
              </div>
              {/* <div className="absolute top-[150px] left-0 right-0 text-white px-6 text-center bg-black bg-opacity-50 py-1">
            <span className="text-md font-semibold">{hotel.priceRange}</span>
          </div> */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p className="text-gray-500 text-md mb-4">
                  {hotel.city}, {hotel.country}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visibleHotels < filteredHotels.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreHotels}
            className="px-6 py-2 border-2 border-gray-400 text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            Load more
          </button>
        </div>
      )}

      {showFilterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-10 max-w-md shadow-lg"
          >
            <div className="text-lg font-bold mb-4">Select Country</div>
            {countries.map((country) => (
              <label key={country} className="flex items-center mb-2">
                <input
                  type="radio"
                  checked={selectedCountry === country}
                  onChange={() => toggleCountryFilter(country)}
                  className="mr-2"
                />
                {country}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotels;
