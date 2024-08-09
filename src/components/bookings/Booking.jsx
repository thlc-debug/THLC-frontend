"use client"
import React, { useEffect, useState } from 'react';
import { base_url } from '@/base_url';

const Booking = () => {
  const [id, setId] = useState('');
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (details) {
      const parsedData = JSON.parse(details);
      setId(parsedData._id);
    }
  }, []);

  useEffect(() => {
    async function fetchBookings() {
      try {
        if (id) {
          const response = await fetch(`${base_url}/reservation/user/${id}`);
          const data = await response.json();
          setBookingList(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
    }

    fetchBookings();

  }, [id]);



  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 mb-10">
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-4">My Bookings: Manage Your Reservations</div>
          <p className="text-gray-500">View and manage all your bookings in one place with ease.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
          {bookingList.length > 0 ? (
            bookingList.map((booking) => (
              <div key={booking._id} className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="relative h-60">
                  <img src={booking.hotel_id.photoUrls[0].replace("www.dropbox.com", "dl.dropboxusercontent.com")} alt={booking.hotel_id.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{booking.hotel_id.name}</h3>
                  <p className="text-sm text-gray-500">{booking.hotel_id.city}, {booking.hotel_id.country}</p>
                  {/* <div className="flex items-center text-yellow-500 my-2">

                    {Array.from({ length: 5 }, (_, index) => (
                      <svg key={index} className={`h-5 w-5 ${index < booking.hotel_id.rating || 4 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 1.52l1.745 4.932H17.66l-3.772 2.88 1.744 4.931-4.576-3.34-4.576 3.34 1.743-4.93L2.34 7.432h5.915L10 1.52z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div> */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      {/* <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 1.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zm1.37 9.63l-3.5 3.5a1.5 1.5 0 01-2.12 0l-1.5-1.5a1.5 1.5 0 112.12-2.12l.79.79 2.79-2.79a1.5 1.5 0 112.12 2.12z"
                          clipRule="evenodd"
                        />
                      </svg> */}
                      {/* <span className="text-sm">{booking.room_id && booking.room_id.type}</span> */}
                      <span
                        className={`text-sm 
                        ${booking.status === "pending" && 'text-orange-500'}
                        ${booking.status === "confirmed" && 'text-green-500'}
                        `}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg className="h-4 w-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 1.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zm0 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-500">{new Date(booking.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3">
              <div className="flex justify-center items-center h-full">
                <p className="text-black text-2xl">You currently don't have any bookings.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Booking;
