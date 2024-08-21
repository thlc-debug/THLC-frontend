"use client";

import DatePicker from "react-datepicker";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import { base_url } from "@/base_url";
import { toast } from "react-toastify";

const showservice = [
  {
    id: 1,
    name: "Event Registration",
  },
  {
    id: 2,
    name: "Luxury Items",
  },
  {
    id: 3,
    name: "Procurement Services",
  },
];

const villaType = [
  {
    id: 1,
    name: "Luxury Lakeside Villa",
  },
  {
    id: 2,
    name: "Luxury Beachside Villa",
  },
];

const BoxSection = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  // const [nationalities, setNationalities] = useState([]);
  // const [travellingTo, setTravellingTo] = useState('');
  // const [nationality, setNationality] = useState('');
  // const [contactNumber, setContactNumber] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [requestCall, setRequestCall] = useState(false);
  // const [eventReservation, setEventReservation] = useState('');
  //   const [eventReservation, setEventReservation] = useState('');
  // const [luxuryItems, setLuxuryItems] = useState('');
  // const [checkInDate, setCheckInDate] = useState(null);
  // const [checkOutDate, setCheckOutDate] = useState(null);
  // const [checkInOpen, setCheckInOpen] = useState(false);
  // const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [tab, setTab] = useState("hotels");
  const [location, setLocation] = useState("");
  // const [result, setResult] = useState('');
  // const [service, setService]=useState('');
  // const [villa, setVilla]=useState('');
  // const [destination, setDestination]= useState('');
  // const [service, setService]=useState('');
  const router = useRouter();

  const countryRef = useRef(null);
  const cityRef = useRef(null);

  const api = base_url;

  useEffect(() => {
    // Fetch countries when the component mounts
    axios
      .get(`${base_url}/newHotel/countries-alphabetical`)
      .then((response) => {
        const data = response.data.filter((country) => country !== "Various");
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch cities when a country is selected
    if (selectedCountry) {
      axios
        .get(`${base_url}/newHotel/cities-by-country/${selectedCountry}`)
        .then((response) => {
          setCities(response.data.cities);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    }
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(""); // Reset city selection when country changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = () => {
    if (!selectedCountry) {
      countryRef.current.focus();
      return;
    }

    if (!selectedCity) {
      cityRef.current.focus();
      return;
    }
    router.push(`/hotelsin?city=${selectedCity}&country=${selectedCountry}`);
  };

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".check-in-date") &&
      !event.target.closest(".check-out-date") &&
      !event.target.closest(".city-search") &&
      !event.target.closest(".location-search")
    ) {
      // setCheckInOpen(false);
      // setCheckOutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  let KEY = process.env.NEXT_PUBLIC_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", KEY);
    formData.append("location", location);
    formData.append("checkInDate", checkInDate);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form submission error", error);
      setResult(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className=" min-h-[400px] sm:min-h-[500px] mt-12  mb-14 md:mb-0 flex justify-center overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center  md:pt-0 pt-[60px] text-black px-4">
        <div className=" w-[55rem] p-8  bg-[#0000000D] rounded-3xl">
          {/* <span className= 'text-[10px] md:text-[15px] mb-5 md:mb-2 font-f_2 text-black rounded-[30px] border border-gray-400 py-1 px-2'>
          it’s time for vacation 🚀
          </span> */}
          <h1 className="md:text-[50px] text-[20px]  font-bold mx-auto">
            Discover Luxurious Adventures
          </h1>
          <p className="text-[15px] font-f_2 text-black">
            Discover the perfect space for you!
          </p>

          <div className="mt-14 m-auto px-2 md:px-8 pb-8 pt-3 rounded-3xl md:max-w-[763px] sm:max-w-[450px] max-w-[360px] w-full bg-white">
            <div className="rounded-3xl sm:px-4 sm:py-4 text-black">
              <div className="flex items-center mb-4">
                <button
                  onClick={() => setTab("hotels")}
                  className={`px-2 sm:px-4 text-sm md:text-xl py-2 font-semibold ${
                    tab === "hotels" ? "border-b-2 border-black" : ""
                  }`}
                >
                  Hotels
                </button>
                {/* <button
                  onClick={() => setTab('safari')}
                  className={`px-4 text-xs md:text-lg py-2 ${tab === 'safari' ? 'border-b-2 border-black' : ''}`}
                >
                  Safaris
                </button>
                <button
                  onClick={() => setTab('visas')}
                  className={`px-4 text-xs md:text-lg py-2 ${tab === 'visas' ? 'border-b-2 border-black' : ''}`}
                >
                  Visas
                </button> */}
                {/* <button
                  onClick={() => setTab('services')}
                  className={`px-4 text-xs md:text-lg py-2 ${tab === 'services' ? 'border-b-2 border-black' : ''}`}
                >
                  Procurement Services
                </button>
                <button
                  onClick={() => setTab('villas')}
                  className={`px-2 text-xs md:text-lg py-2 ${tab === 'villas' ? 'border-b-2 border-black' : ''}`}
                >
                  Villas
                </button> */}
              </div>
              <hr className="border-gray-300 -mt-[17px] mx-2 mr-2 w-full mb-8" />

              {tab === "hotels" && (
                <>
                  <div className="flex items-center mb-4 w-full">
                    <div className="flex justify-between city-search px-2 gap-4 w-full">
                      <>
                        <select
                          className={`px-4 py-2 bg-gray-200 rounded-lg w-1/2 ${
                            selectedCountry
                              ? "focus:outline-blue-400"
                              : "focus:outline-red-400"
                          }`}
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          ref={countryRef}
                        >
                          <option className="sm:text-xs text-gray-700" value="">
                            Select Country
                          </option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </>

                      <div>
                        {/* <label htmlFor="city">Select City:</label> */}
                        {/* <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {Array.isArray(cities) && cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select> */}
                      </div>

                      <select
                        id="city"
                        className={`px-4 py-2 bg-gray-200 rounded-lg flex-grow w-1/2 ${
                          selectedCity
                            ? "focus:outline-blue-400"
                            : "focus:outline-red-400"
                        }`}
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={!selectedCountry}
                        ref={cityRef}
                      >
                        <option value="" className="sm:text-xs text-gray-700">
                          Select a city
                        </option>
                        {Array.isArray(cities) &&
                          cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <div className=" check-in-date px-2 flex-grow">
                      <button
                        onClick={() => setCheckInOpen(!checkInOpen)}
                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                      >
                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Check In'}
                      </button>
                      {checkInOpen && (
                        <div className="z-50">
                          <DatePicker
                            selected={checkInDate}
                            onChange={(date) => {
                              setCheckInDate(date);
                              setCheckInOpen(false);
                            }}
                            inline
                            className="text-sm"
                          />
                        </div>
                      )}
                    </div>
                    <div className=" check-out-date px-2 flex-grow ml-4">
                      <button
                        onClick={() => setCheckOutOpen(!checkOutOpen)}
                        className="px-2 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                      >
                        {checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Check Out'}
                      </button>
                      {checkOutOpen && (
                        <div className="z-50">
                          <DatePicker
                            selected={checkOutDate}
                            onChange={(date) => {
                              setCheckOutDate(date);
                              setCheckOutOpen(false);
                            }}
                            inline
                            className="text-sm"
                          />
                        </div>
                      )}
                    </div>
                    <div className="">
                    
                  </div>
                  
                  </div> */}
                  <div className="flex gap-5">
                    {/* <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-0.5 mt-3 mx-2 mr-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    /> */}
                    <button
                      onClick={handleSearch}
                      className="bg-black mt-3 w-full text-white px-4 py-2 rounded-lg flex items-center justify-center"
                    >
                      Search
                    </button>
                  </div>
                </>
              )}

              {/* {tab === 'safari' && (
                <>
                <form onSubmit={onSubmit}>
                  <div className="flex items-center mb-4">
                    <div className="  location-search flex-grow">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location..."
                        className="w-full px-4 py-2 bg-gray-200  rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex mb-4 items-center space-x-2">
                    <div className=" check-in-date flex-grow">
                      <button
                        onClick={() => setCheckInOpen(!checkInOpen)}
                        className="px-4 py-2 bg-gray-200 placeholder-gray-400 rounded-lg w-full text-left"
                      >
                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Date'}
                      </button>
                      {checkInOpen && (
                        <div className="z-50">
                          <DatePicker
                            selected={checkInDate}
                            onChange={(date) => {
                              setCheckInDate(date);
                              setCheckInOpen(false);
                            }}
                            inline
                            className="text-sm"
                          />
                        </div>
                      )}
                    </div>
                    
                  </div>
                  <div className="mb-4 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="requestCall"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a Call</span>
                    </label>
                  </div>
                  <button
                      type="submit"
                      className="bg-black px-4 py-2 over:bg-[#111111] text-white font-bold rounded w-full"
                    >
                      Submit
                    </button>
                  </form>
                </>
              )} */}

              {/* {tab === 'visas' && (
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="subject" value="Visa Inquiry Form" />
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 placeholder-gray-500 rounded-lg focus:outline-none w-full"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      name="nationality"
                      required
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map((nat) => (
                        <option key={nat.country} value={nat.country}>
                          {nat.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={travellingTo}
                      onChange={(e) => setTravellingTo(e.target.value)}
                      name="travellingTo"
                      required
                    >
                      <option value="">Travelling To</option>
                      {countries.map((country) => (
                        <option key={country.country} value={country.country}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="requestCall"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a Call</span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#111111] text-white font-bold py-2 px-4 rounded w-full"
                    >
                      Submit
                    </button>
                    {result}
                  </div>
                </form>
              )} */}

              {/* {tab === 'services' && (
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="subject" value="Procurement Services Form" />
                  <div className="mb-4">
                  <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      name="service"
                      required
                    >
                      <option value="">Select Service</option>
                      {showservice.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      name="nationality"
                      required
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map((nat) => (
                        <option key={nat.country} value={nat.country}>
                          {nat.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="requestCall"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a Call</span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#111111] text-white font-bold py-2 px-4 rounded w-full"
                    >
                      Submit
                    </button>
                    {result}
                  </div>
                </form>
              )} */}
              {/* {tab === 'villas' && (
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="subject" value="Villas Form" />
                  <div className="mb-4">
                  <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={villa}
                      onChange={(e) => setVilla(e.target.value)}
                      name="villas"
                      required
                    >
                      <option value="">Select Villa Type</option>
                      {villaType.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      name="destination"
                      required
                    >
                      <option value="">Select Destination</option>
                      {nationalities.map((nat) => (
                        <option key={nat.country} value={nat.country}>
                          {nat.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="requestCall"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a Call</span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#111111] text-white font-bold py-2 px-4 rounded w-full"
                    >
                      Submit
                    </button>
                    {result}
                  </div>
                </form>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
