"use client";
import React, { useEffect, useState } from "react";
import { base_url } from "@/base_url";
import { FaTimes } from "react-icons/fa"; // For the close button in the modal
import { useRouter } from "next/navigation"; // For navigation to the checkout page
import Image from "next/image"; // Next.js optimized Image component

const Booking = () => {
  const [id, setId] = useState("");
  const [bookingList, setBookingList] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null); // State for selected booking
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const router = useRouter(); // Next.js router
  const [isAdmin, setIsAdmin] = useState(true); // State to check if admin confirmed

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (details) {
      const parsedData = JSON.parse(details);
      setId(parsedData._id);
      // Assuming isAdmin is part of userDetails
    }
  }, []);

  useEffect(() => {
    async function fetchBookings() {
      try {
        if (id) {
          const response = await fetch(`${base_url}/reservation/user/${id}`);
          const data = await response.json();
          setBookingList(data);
        }
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    }

    fetchBookings();
  }, [id]);

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  const handleCheckout = () => {
    router.push(`/checkout?id=${selectedBooking._id}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 mb-10">
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-4">
            My Bookings: Manage Your Reservations
          </div>
          <p className="text-gray-500">
            View and manage all your bookings in one place with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
          {bookingList.length > 0 ? (
            bookingList.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
                onClick={() => openModal(booking)} // Open modal on card click
              >
                <div className="relative h-60">
                  <Image
                    src={booking.hotel_id.photoUrls[0].replace(
                      "www.dropbox.com",
                      "dl.dropboxusercontent.com"
                    )}
                    alt={booking.hotel_id.name}
                    className="w-full h-full object-cover"
                    layout="fill" // Adjusted for next/image
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{booking.hotel_id.name}</h3>
                  <p className="text-sm text-gray-500">
                    {booking.hotel_id.city}, {booking.hotel_id.country}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm 
                          ${booking.status === "pending" && "text-red-500"}
                          ${booking.status === "confirmed" && "text-green-500"}
                          ${booking.status === "cancelled" && "text-black"}
                        `}
                      >
                        {booking.status === "confirmed" && isAdmin
                          ? "Confirmed"
                          : booking.status === "confirmed"
                            ? "Waitlisted"
                            : booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      className="h-4 w-4 text-gray-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zm0 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-gray-500">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3">
              <div className="flex justify-center items-center h-full">
                <p className="text-black text-2xl">
                  You currently don't have any bookings.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 relative z-10">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Booking Details: {selectedBooking.hotel_id.name}
            </h2>
            {/* Hotel Image */}
            <div className="relative h-60 mb-4">
              <Image
                src={selectedBooking.hotel_id.photoUrls[0].replace(
                  "www.dropbox.com",
                  "dl.dropboxusercontent.com"
                )}
                alt={selectedBooking.hotel_id.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Check-in:</strong> {new Date(selectedBooking.check_in).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Check-out:</strong> {new Date(selectedBooking.check_out).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Location:</strong> {selectedBooking.hotel_id.city}, {selectedBooking.hotel_id.country}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Room Types:</strong> {selectedBooking.hotel_id.typesOfRooms.join(", ")}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Facilities:</strong> {selectedBooking.hotel_id.facilities.join(", ")}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Booking Status: </strong>
              <span
                className={`font-semibold 
                ${selectedBooking.status === "pending" && "text-red-500"}
                ${selectedBooking.status === "confirmed" && "text-green-500"}
                ${selectedBooking.status === "cancelled" && "text-black"}
              `}
              >
                {selectedBooking.status === "confirmed" && isAdmin
                  ? "Confirmed"
                  : selectedBooking.status === "confirmed"
                    ? "Waitlisted"
                    : selectedBooking.status}
              </span>
            </p>
            {/* Message for waitlisted bookings */}
            {selectedBooking.status === "confirmed" && !isAdmin && (
              <p className="text-orange-500 mb-4">
                Wait while your ticket will be confirmed.
              </p>
            )}
            <p className="text-gray-600 mb-4">
              <strong>Price:</strong> ${selectedBooking.price}
            </p>

            {/* Checkout button for pending status */}
            {selectedBooking.status === "pending" && (
              <button
                className="bg-black text-white px-4 py-2 rounded-full"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            )}
            {selectedBooking.status === "confirmed" && isAdmin &&(
              <button
                className="bg-black text-white px-4 py-2 rounded-full"
                
              >
                Download Ticket
              </button>
            )}
           
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
