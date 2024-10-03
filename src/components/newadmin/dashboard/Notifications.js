"use client";
import React, { useState, useRef } from "react";
import { BiDotsVerticalRounded, BiFilterAlt, BiCloudUpload } from "react-icons/bi";
import Image from "next/image";
import HotelImage from "../../../../public/hotels/india.jpg";

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
  
];

const Notifications = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [coverImage, setCoverImage] = useState(null); 

  const fileInputRef = useRef(null);

  const handleCreateModal = () => setShowCreateModal(!showCreateModal);

  const handleUpdateModal = (notification) => {
    setSelectedNotification(notification);
    setShowUpdateModal(true);
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  return (
    <div className=" bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Notifications</h2>
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
              <BiFilterAlt className="mr-2" /> Filter
            </button>
          </div>

          <button
            className="px-4 py-2 border text-white bg-gray-900 font-semibold rounded-md hover:bg-gray-700"
            onClick={handleCreateModal}
          >
            Add New
          </button>
        </div>
      </div>

      {/* Notification Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Cover Picture</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Country</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
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
                <td className="px-6 py-4 text-sm text-gray-500">{row.location}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.country}</td>
                <td className="px-6 py-4 text-end">
                  <BiDotsVerticalRounded
                    className="text-gray-500 w-5 h-5 cursor-pointer mx-auto"
                    onClick={() => handleUpdateModal(row)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Notification Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create Notification</h2>

            {/* Image Upload Section */}
            <div className="mb-4">
              
              <div
                className="border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center rounded-md cursor-pointer hover:border-gray-400"
                onClick={handleDivClick}
              >
                {coverImage ? (
                  <Image
                    src={coverImage}
                    alt="Cover Preview"
                    className="w-full h-48 object-cover rounded-md"
                  />
                ) : (
                  <>
                    <BiCloudUpload className="text-3xl" />
                    <span className="text-sm text-gray-500 text-center">
                      Browse and choose the files you want to upload from your computer
                    </span>
                  </>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Title</label>
              <input type="text" className="block w-full border rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Description</label>
              <textarea className="block w-full border rounded-md p-2" rows="4"></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-gray-500 border rounded-md"
                onClick={handleCreateModal}
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-gray-900 rounded-md">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Notification Modal */}
      {showUpdateModal && selectedNotification && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Notification</h2>

            <div className="mb-4">
              
              <div
                className="flex flex-col items-center justify-center rounded-md cursor-pointer hover:border-gray-400"
                onClick={handleDivClick}
              >
                {coverImage ? (
                  <Image
                    src={coverImage}
                    alt="Cover Preview"
                    className="w-full h-48 object-cover rounded-md"
                  />
                ) : (
                  <Image
                    src={selectedNotification.coverPicture}
                    alt="Cover Picture"
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2">Title</label>
              <input
                type="text"
                className="block w-full border rounded-md p-2"
                defaultValue={selectedNotification.title}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Description</label>
              <textarea
                className="block w-full border rounded-md p-2"
                rows="4"
                defaultValue={selectedNotification.description}
              ></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-gray-500 border rounded-md"
                onClick={() => setShowUpdateModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-gray-900 rounded-md">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
