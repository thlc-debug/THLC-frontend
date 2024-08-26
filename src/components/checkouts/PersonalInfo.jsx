"use client";
import { FaPlus, FaMinus, FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { base_url } from "@/base_url";
import { useRouter } from "next/navigation";

import PhoneInput from "react-phone-input-2";
import startsWith from "lodash.startswith";
import "react-phone-input-2/lib/style.css";
import parsePhoneNumberFromString, {
  parsePhoneNumber,
} from "libphonenumber-js";

const PersonalInfo = ({ id, nextStep }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState({ countryCode: "in" });
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(<FaArrowRightLong />);
  const [guestCount, setGuestCount] = useState(1);
  const [resultMessage, setResultMessage] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

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

  const validateData = () => {
    const errors = {};

    if (!name) {
      errors.name = "Firstname is required";
    } else if (name.length < 3) {
      errors.name = "Firstname must be at least 3 characters";
    } else if (name.length > 20) {
      errors.name = "Firstname must be at most 20 characters";
    }

    if (!lastname) {
      errors.lastname = "Lastname is required";
    } else if (lastname.length < 3) {
      errors.lastname = "Lastname must be at least 3 characters";
    } else if (lastname.length > 20) {
      errors.lastname = "Lastname must be at most 20 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }

    if (!number) {
      errors.number = "Phone number is required";
    }

    const num = parsePhoneNumberFromString(
      number.slice(country.countryCodeLength),
      country.countryCode.toUpperCase()
    );
    if (!num || !num.isValid()) {
      errors.number = "Phone number is invalid";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateData()) {
      return;
    }

    const days = CountNumberOfDays(checkin, checkout);

    const price = await fetchHotelDetails();

    const bookingInfo = {
      name,
      lastname,
      email,
      number,
      checkin,
      checkout,
      guestCount,
      days,
      hotelId: id,
      price: price ? price * days : 499,
    };

    // if (price) {
    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
    nextStep();
    // } else {
    // setResultMessage("Sending....");
    // const formData = new FormData();
    // formData.append("first name", name);
    // formData.append("last name", lastname);
    // formData.append("email", email);
    // formData.append("phone", number);
    // formData.append("checkin", checkin);
    // formData.append("checkout", checkout);
    // formData.append("guest count", guestCount);
    // formData.append("Hotel Id", hotelId);

    // const recipientEmail = "contact@theluxuryhotelconcierge.com";
    // const pageTitle = "Booking Form";

    // formData.append("pageTitle", pageTitle);
    // formData.append("pageUrl", window.location.href);

    // try {
    //   const response = await fetch(
    //     `https://lhc-email.onrender.com/send-email/${encodeURIComponent(
    //       recipientEmail
    //     )}`,
    //     {
    //       method: "POST",
    //       body: formData,
    //     }
    //   );

    //   const data = await response.json();

    //   if (data.success) {
    //     setResultMessage("Form Submitted Successfully");
    //     event.target.reset();
    //     router.push("/hotels");
    //   } else {
    //     console.error("Error", data);
    //     setResultMessage(data.message);
    //   }
    // } catch (error) {
    //   console.error("Form submission error", error);
    //   setResultMessage(
    //     "An error occurred while submitting the form. Please try again later."
    //   );
    // }
    // }
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

  const CountNumberOfDays = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    const timeDifference = checkoutDate - checkinDate;

    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  };

  const handlePhoneChange = (phone, country) => {
    setNumber(phone);
    setCountry({
      countryCode: country.countryCode,
      countryCodeLength: country.dialCode.length,
    });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <div className="flex flex-wrap gap-6 w-full border-t border-b p-3 pb-8 md:p-6 md:pb-8 border-gray-300">
          <div className="flex flex-col md:flex-row items-center w-full h-full gap-6 md:gap-3">
            <div className="w-full relative">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs absolute w-full ms-3 mt-2">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="w-full relative">
              <input
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
              {errors.lastname && (
                <p className="text-red-500 text-xs absolute w-full ms-3 mt-2">
                  {errors.lastname}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full border-b p-3 pb-8 md:p-6 md:pb-8 border-gray-300">
          <div className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-3">
            <div className="w-full relative">
              <input
                value={email}
                placeholder="demo.email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-1 p-2 w-full border rounded-[30px] outline-none"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs absolute w-full ms-3 mt-2">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="w-full relative">
              <PhoneInput
                country={country.countryCode}
                value={number}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                containerClass="mt-1 p-0.5 w-full border rounded-[30px] outline-none"
                inputClass="!w-full !border-none !outline-none !bg-transparent"
              />
              {errors.number && (
                <p className="text-red-500 text-xs absolute w-full ms-3 mt-2">
                  {errors.number}
                </p>
              )}
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
        <span>{resultMessage}</span>
      </form>
    </div>
  );
};

export default PersonalInfo;
