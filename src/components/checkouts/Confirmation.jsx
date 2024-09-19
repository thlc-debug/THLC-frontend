import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { base_url } from "@/base_url";

const Confirmation = ({ id }) => {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [hotelInfo, setHotelInfo] = useState(null);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state

  useEffect(() => {
    const fetchBookingAndHotelInfo = async () => {
      try {
        const storedBookingInfo = JSON.parse(
          localStorage.getItem("bookingInfo")
        );
        if (storedBookingInfo) {
          setBookingInfo(storedBookingInfo);
        } else {
          throw new Error("No booking information found.");
        }

        if (id) {
          const response = await fetch(`${base_url}/newHotel/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch hotel information.");
          }
          const data = await response.json();
          setHotelInfo(data);
        } else {
          throw new Error("No hotel ID provided.");
        }

        // Check if booking details have already been sent
        const bookingSent = localStorage.getItem("bookingSent");
        if (!bookingSent) {
          await sendBookingDetails(storedBookingInfo, data);
          localStorage.setItem("bookingSent", "true");
        }
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingAndHotelInfo();
  }, [id]);

  // Function to send booking details
  const sendBookingDetails = async (booking, hotel) => {
    try {
      const {
        name,
        lastname,
        email,
        number,
        checkin,
        checkout,
        guestCount,
        days,
        hotelId,
        price,
      } = booking;

      const bookingDetails = {
        name,
        lastname,
        email,
        number,
        checkin,
        checkout,
        guestCount,
        days,
        hotelName: hotel.name,
        hotelLocation: `${hotel.city}, ${hotel.country}`,
        hotelFacilities: hotel.facilities.join(", "),
        hotelId,
        price,
        pageTitle: "Booking Confirmation",
        pageUrl: window.location.href,
      };

      const response = await fetch(
        `https://lhc-email.onrender.com/send-email/${encodeURIComponent(
          recipientEmail
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingDetails),
        }
      );

      if (!response.success) {
        throw new Error("Failed to send booking details.");
      }

      const result = await response.json();
      console.log("Booking details sent successfully:", result);
    } catch (err) {
      console.error("Error sending booking details:", err);
      throw err;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p>Error: {error}</p>
        <Link href="/">
          <button className="mt-4 py-2 px-4 bg-black text-white rounded-md">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  const { name, lastname, email, checkin, checkout, guestCount, price } =
    bookingInfo;

  const formattedCheckin = new Date(checkin).toLocaleDateString();
  const formattedCheckout = new Date(checkout).toLocaleDateString();
  const discount = 0;
  const payableAmount = price - discount;

  return (
    <div className="p-6 flex flex-col justify-center items-center bg-white shadow-md rounded-md mt-8">
      {/* Booking Summary Header */}
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-2xl font-bold">Booking Confirmation</h2>
        <FiDownload className="text-2xl cursor-pointer" />
      </div>

      {/* Hotel Details */}
      <div className="flex flex-col w-full mb-6">
        <h3 className="text-xl font-semibold mb-2">Hotel Information</h3>
        <p className="text-md">
          <strong>Hotel Name:</strong> {hotelInfo.name}
        </p>
        <p className="text-md">
          <strong>Location:</strong> {hotelInfo.city}, {hotelInfo.country}
        </p>
        <p className="text-md">
          <strong>Facilities:</strong> {hotelInfo.facilities.join(", ")}
        </p>
      </div>

      {/* Booking Details */}
      <div className="flex flex-col w-full mb-6">
        {/* Guest Details */}
        <div className="flex justify-between items-center border-t border-b py-4">
          <span className="font-medium">Guest Name:</span>
          <span>{`${name} ${lastname}`}</span>
        </div>

        {/* Booking Dates */}
        <div className="flex justify-between items-center border-b py-4">
          <span className="font-medium">Check-in Date:</span>
          <span>{formattedCheckin}</span>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <span className="font-medium">Check-out Date:</span>
          <span>{formattedCheckout}</span>
        </div>

        {/* Guest Count */}
        <div className="flex justify-between items-center border-b py-4">
          <span className="font-medium">Number of Guests:</span>
          <span>{guestCount}</span>
        </div>

        {/* Pricing Details */}
        <div className="flex justify-between items-center border-b py-4">
          <span className="font-medium">Total Price:</span>
          <span>${price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <span className="font-medium">Discount:</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <span className="font-semibold text-lg">Amount Paid:</span>
          <span className="font-semibold text-lg">
            ${payableAmount.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Confirmation Message */}
      <div className="text-center mb-6">
        <p className="text-lg font-medium">Thank you for your booking!</p>
        <p className="text-sm text-gray-600">
          A confirmation email has been sent to <strong>{email}</strong>.
        </p>
      </div>

      {/* Back to Home Button */}
      <Link href="/">
        <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;
