import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiDownload } from "react-icons/fi";
import { base_url } from '@/base_url';

const Confirmation = ({ id }) => {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [hotelInfo, setHotelInfo] = useState(null);

  useEffect(() => {
    const storedBookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    if (storedBookingInfo) {
      setBookingInfo(storedBookingInfo);
    }

    const fetchHotelInfo = async () => {
      try {
        const response = await fetch(`${base_url}/newHotel/${id}`);
        const data = await response.json();
        setHotelInfo(data);
      } catch (error) {
        console.error('Error fetching hotel info:', error);
      }
    };

    if (id) {
      fetchHotelInfo();
    }
  }, [id]);

  if (!bookingInfo || !hotelInfo) {
    return <div>Loading...</div>;
  }

  const { name, lastname, email, checkin, checkout, guestCount, price } = bookingInfo;

  const formattedCheckin = new Date(checkin).toLocaleDateString();
  const formattedCheckout = new Date(checkout).toLocaleDateString();
  const discount = 0;
  const payableAmount = price - discount;

  return (
    <div className="p-6 flex flex-col justify-center items-center bg-white shadow-md rounded-md mt-8">
      {/* Booking Summary Header */}
      <div className='flex justify-between items-center w-full mb-4'>
        <h2 className="text-xl font-bold">Booking Confirmation</h2>
        <FiDownload className='text-2xl' />
      </div>

      {/* Hotel Details */}
      <div className="flex flex-col w-full mb-4">
        <h3 className="text-lg font-semibold">Hotel Information</h3>
        <p className="text-md"><strong>Hotel Name:</strong> {hotelInfo.name}</p>
        <p className="text-md"><strong>Location:</strong> {hotelInfo.city}, {hotelInfo.country}</p>
        <p className="text-md"><strong>Facilities:</strong> {hotelInfo.facilities.join(', ')}</p>
      </div>

      {/* Booking Details */}
      <div className="flex flex-col w-full">
        {/* Booking Item */}
        <div className='flex justify-between items-center border-t border-b p-4 md:p-6'>
          <span className="w-2/3 md:w-1/3">{`${name} ${lastname}`}</span>
          <span className="w-1/3 md:w-1/6">{guestCount} Guests</span>
          <span className='font-bold text-black'>${price}</span>
        </div>

        {/* Booking Dates */}
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-b'>
          <div className='flex justify-between items-center p-4 md:p-6 w-full'>
            <span className="w-2/3 md:w-1/3">Check-in</span>
            <span className="w-1/3 md:w-1/6">{formattedCheckin}</span>
            <span className="w-2/3 md:w-1/3">Check-out</span>
            <span className="w-1/3 md:w-1/6">{formattedCheckout}</span>
          </div>
        </div>

        {/* Pricing Details */}
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-b'>
          <div className='flex justify-between items-center p-4 md:p-6 w-full'>
            <span className="w-2/3 md:w-1/3">Subtotal</span>
            <span className="w-1/3 md:w-1/6">${price}</span>
            <span className="w-2/3 md:w-1/3">Discount</span>
            <span className="w-1/3 md:w-1/6">${discount}</span>
          </div>

          <div className='border py-2 px-3 flex items-center border-black bg-gray-200 p-4 md:p-6 w-full'>
            <span className="w-2/3 md:w-1/3 font-semibold">Total Amount Paid</span>
            <span className='font-bold text-gray-800 w-1/3 md:w-1/6'>${payableAmount}</span>
          </div>
        </div>
      </div>

      {/* Confirmation Message */}
      <div className="mt-6 text-center">
        <p className="text-lg font-medium">Thank you for your booking!</p>
        <p className="text-sm text-gray-600">A confirmation email has been sent to {email}.</p>
      </div>

      {/* Back to Home Button */}
      <Link href="/">
        <button className="w-full mt-4 py-2 px-4 bg-black text-white rounded-md">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;
