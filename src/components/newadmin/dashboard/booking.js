"use client";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setBookings([
        {
          name: "Olivia Rhye",
          hotelName: "Found Conice Restro",
          persons: 10,
          rooms: 50,
          dateRange: "2 Dec - 30 Dec",
          days: 3,
          nights: 2,
          status: "Confirm",
          dateTime: "22 Dec 24, 09:42 PM",
        },
        {
          name: "Olivia Rhye",
          hotelName: "ExecuFound Conice",
          persons: 11,
          rooms: 4,
          dateRange: "21 Nov - 25 Nov",
          days: 4,
          nights: 5,
          status: "Canceled",
          dateTime: "10 Dec 24, 09:42 AM",
        },
        // More bookings here
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-3 bg-white rounded-md h-full flex flex-col">
      {/* Statistic Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {[
          { title: "Recent Bookings", count: 2689 },
          { title: "Pending Bookings", count: 10573 },
          { title: "Confirm Bookings", count: 10293 },
          { title: "Canceled Bookings", count: 89000 },
        ].map((stat, index) => (
          <div
            key={index}
            className="relative p-4 bg-gray-100 rounded-md shadow-md"
          >
            {/* Top-right "Today" label */}
            <div className="absolute top-2 right-2 flex items-center space-x-1">
              <span className="text-gray-500 text-sm">Today</span>
              <svg
                className="w-3 h-3 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Main content */}
            <h3 className="text-lg font-bold">{stat.title}</h3>
            <p className="text-3xl mt-2 font-semibold">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Header for Table Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Booking</h2>
          <p className="text-gray-500">Manage your booking and hotel details</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100">
            Add
          </button>
          <button
            className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100"
            onClick={() => alert("PDF Report Downloaded")}
          >
            Download PDF Report
          </button>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-100 rounded-md flex border">
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "all"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "pending"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              20
            </span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "confirmed"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("confirmed")}
          >
            Confirmed{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              11
            </span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "canceled"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("canceled")}
          >
            Canceled{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              8
            </span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search by name, email, amount..."
            className="px-4 py-2 border text-sm rounded-md focus:outline-none w-64"
          />
          <button className="flex items-center px-4 py-2 text-sm border rounded-md text-gray-500 hover:bg-gray-100">
            <BiFilterAlt className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Hotel Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Persons
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Rooms
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Date Range
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Days
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Nights
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Date & Time
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-4 py-2 text-sm font-semibold">
                  {booking.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.hotelName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.persons}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.rooms}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.dateRange}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.days}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.nights}
                </td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      booking.status === "Confirm"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.dateTime}
                </td>
                <td className="px-6 py-4 text-center">
                  <BiDotsVerticalRounded className="w-6 h-6 text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDashboard;
