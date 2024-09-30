"use client"
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Simulating a delay for fetching dynamic data
    setTimeout(() => {
      setHotels([
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Pimplad Nasik, Maharashtra, India",
          photos: "+9",
          amenities: 10,
          price: "$300/person",
          rating: 4.5,
          createdDate: "22 Dec 24",
          createdTime: "09:42 PM",
          status: "Available",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
          {
            name: "Olivia Rhye",
            hotelId: "#457863",
            location: "Maharashtra, India",
            photos: "+7",
            amenities: 5,
            price: "$200/person",
            rating: 5.0,
            createdDate: "10 Dec 24",
            createdTime: "09:42 AM",
            status: "Sold out",
          },
       
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-3 bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Hotel</h2>
          <p className="text-gray-500">Total 506 Hotels</p>
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
        {/* Tabs */}
        <div className="bg-gray-100 rounded-md flex border  ">
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "all" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "publish" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("publish")}
          >
            Publish <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">130</span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "draft" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("draft")}
          >
            Draft <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">20</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search by name, location, hotel id..."
            className="px-4 py-2 border text-sm rounded-md focus:outline-none w-64"
          />
          <button className="flex items-center px-4 py-2 text-sm border rounded-md text-gray-500 hover:bg-gray-100">
            <BiFilterAlt className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Hotels Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Hotel Id</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Location</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Photos</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Amenities</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Rating</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Created Date & Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-4 py-2 text-sm font-semibold">{hotel.name}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{hotel.hotelId}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{hotel.location}</td>
                <td className="px-4 py-2 flex items-center gap-2 text-sm text-gray-500">
                     <img src="/y1.png" className="h-10 w-10"/> {hotel.photos}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{hotel.amenities}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{hotel.price}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{hotel.rating} <span className="text-yellow-300">★</span></td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {hotel.createdDate}, {hotel.createdTime}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      hotel.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {hotel.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <BiDotsVerticalRounded className="text-gray-500 w-5 h-5 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hotels;
