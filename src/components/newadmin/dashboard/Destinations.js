import React, { useState } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";

import HotelImage from "../../../../public/hotels/india.jpg";
import Image from "next/image";

const data = [
  {
    title: "Knotts Berry Farm Hotel",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. With an orchard and lawn, guests can enjoy activities like fruit picking, yoga, and sports. Book our private villa in the same complex for your next family gathering or romantic retreat.",
    coverPicture: HotelImage,
    location: "Panchgani, India",
    country: "India",
  },
  {
    title: "Knotts Berry Farm Hotel",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. With an orchard and lawn, guests can enjoy activities like fruit picking, yoga, and sports. Book our private villa in the same complex for your next family gathering or romantic retreat.",
    coverPicture: HotelImage,
    location: "Panchgani, India",
    country: "India",
  },
  {
    title: "Knotts Berry Farm Hotel",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. With an orchard and lawn, guests can enjoy activities like fruit picking, yoga, and sports. Book our private villa in the same complex for your next family gathering or romantic retreat.",
    coverPicture: HotelImage,
    location: "Panchgani, India",
    country: "India",
  },
  {
    title: "Knotts Berry Farm Hotel",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. With an orchard and lawn, guests can enjoy activities like fruit picking, yoga, and sports. Book our private villa in the same complex for your next family gathering or romantic retreat.",
    coverPicture: HotelImage,
    location: "Panchgani, India",
    country: "India",
  },
  {
    title: "Knotts Berry Farm Hotel",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. With an orchard and lawn, guests can enjoy activities like fruit picking, yoga, and sports. Book our private villa in the same complex for your next family gathering or romantic retreat.",
    coverPicture: HotelImage,
    location: "Panchgani, India",
    country: "India",
  },
  {
    title: "Knotts Berry Farm Hotel",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. With an orchard and lawn, guests can enjoy activities like fruit picking, yoga, and sports. Book our private villa in the same complex for your next family gathering or romantic retreat.",
    coverPicture: HotelImage,
    location: "Panchgani, India",
    country: "India",
  },
];

const Destinations = () => {
  return (
    <div className="p-3  bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Destinations</h2>
          <p className="text-gray-500">Total 15 Countries</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search by title, hotel..."
              className="px-4 py-2 text-sm border rounded-md focus:outline-none w-64"
            />
            <button className="flex items-center text-sm px-4 py-2 border rounded-md text-gray-500 hover:bg-gray-100">
              <BiFilterAlt className="mr-2 " /> Filter
            </button>
          </div>

          <button
            className="px-4 py-2 border text-white bg-gray-900 font-semibold rounded-md hover:bg-gray-700"
            onClick={() => {}}
          >
            Add New
          </button>
        </div>
      </div>

      {/* Contact Table */}
      <div className="overflow-auto h-[65vh] ">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Cover Picture
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Country
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-6 py-4 text-sm font-semibold">{row.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {row.description.slice(0, 100)}...
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <Image
                    src={row.coverPicture}
                    alt="cover picture"
                    className="w-10 aspect-square h-10 object-cover rounded-md"
                  />
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {row.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {row.country}
                </td>
                <td className="px-6 py-4 text-end">
                  <BiDotsVerticalRounded className="text-gray-500 w-5 h-5 cursor-pointer mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Destinations;
