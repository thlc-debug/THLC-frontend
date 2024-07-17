"use client";
import { FaPlus, FaMinus, FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { base_url } from "@/base_url";

const PersonalInfo = ({ id, nextStep }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(<FaArrowRightLong />);
  const [guestCount, setGuestCount] = useState(1);

  // Check-in and Check-out dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [minCheckoutDate, setMinCheckoutDate] = useState(tomorrow);

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(minCheckoutDate);

  let KEY = process.env.NEXT_PUBLIC_KEY;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    const guestUser = JSON.parse(localStorage.getItem("guestUser"));
    if (user) {
      setName(user.username.split(" ")[0]);
      setLastName(user.username.split(" ")[1] || "");
      setEmail(user.mail);
      // setNumber(user.phone);
    } else if (guestUser) {
      setName(guestUser.name.split(" ")[0]);
      setLastName(guestUser.name.split(" ")[1] || "");
      setEmail(guestUser.email);
    }
  }, []);

  const fetchHotelDetails = async () => {
    try {
      const response = await fetch(`${base_url}/newHotel/${id}`);
      const data = await response.json();
      return data.price;
    } catch (error) {
      console.error("Error fetching hotel details:", error);
      return null;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const price = await fetchHotelDetails();

    const bookingInfo = {
      name,
      lastname,
      email,
      number,
      checkin,
      checkout,
      guestCount,
      hotelId: id,
      price: price ? price : 999,
    };

    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

    nextStep();
  };

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  const decrementGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const setCheckInDate = (date) => {
    setCheckin(date);

    const selectedDate = new Date(date);
    const newCheckoutDate = new Date(
      selectedDate.setDate(selectedDate.getDate() + 1)
    );

    setMinCheckoutDate(newCheckoutDate);
    setCheckout(newCheckoutDate);
  };

  const setCheckoutDate = (date) => {
    setCheckout(date);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-4 w-full border-t border-b p-3 md:p-6 border-gray-300">
          <div className="flex flex-col  md:flex-row items-center w-full gap-3">
            <div className="w-full">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
            </div>
            <div className="w-full">
              <input
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full border-b p-3 md:p-6 border-gray-300">
          <div className="flex flex-col  md:flex-row items-center w-full gap-3">
            <div className="w-full">
              <input
                value={email}
                placeholder="demo.email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
            </div>
            <div className="w-full">
              <input
                value={number}
                placeholder="+1234567890"
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full border-b p-3 md:p-6 border-gray-300">
          <div className="flex flex-row items-center w-full gap-3">
            <div className="w-[50px] aspect-square flex items-center justify-center">
              <span
                className="rounded-full bg-black flex justify-center items-center border cursor-pointer p-2"
                onClick={decrementGuestCount}
              >
                <FaMinus className="text-white text-xl" />
              </span>
            </div>
            <div className="w-auto flex-grow">
              <input
                value={`${guestCount} Guests`}
                readOnly
                type="text"
                className="p-2 w-full border rounded-[30px] outline-none text-center"
                required
              />
            </div>
            <div className="w-[50px] aspect-square flex items-center justify-center">
              <span
                className="rounded-full bg-black flex justify-center items-center border cursor-pointer p-2"
                onClick={incrementGuestCount}
              >
                <FaPlus className="text-white text-xl" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full border-b p-3 md:p-6 border-gray-300">
          <div className="flex flex-col  md:flex-row items-center w-full gap-3">
            <div className="relative w-full">
              <DatePicker
                selected={checkin}
                onChange={(date) => setCheckInDate(date)}
                minDate={today}
                placeholderText="Check-in"
                className="mt-1 p-2 w-full md:w-[250px] border rounded-[30px] outline-none text-center text-gray-500"
              />
              <span className="absolute inset-y-0 right-3  flex items-center">
                <FaCalendarAlt className="text-gray-500" />
              </span>
            </div>
            <div className="relative w-full">
              <DatePicker
                selected={checkout}
                minDate={minCheckoutDate}
                onChange={(date) => setCheckoutDate(date)}
                placeholderText="Check-out"
                className="mt-1 p-2 md:w-[250px] border rounded-[30px] outline-none text-center text-gray-500"
              />
              <span className="absolute inset-y-0 right-3  flex items-center">
                <FaCalendarAlt className="text-gray-500" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between mt-6">
          <button
            type="submit"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="bg-black w-full text-white font-bold text-2xl flex items-center justify-center py-2 px-4 rounded-[30px] focus:outline-none focus:shadow-outline"
          >
            {result}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
