"use client"; 

import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from 'react-icons/bi'; 

const Contactus = () => {
 
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    setTimeout(() => {
      setContacts([
        {
          name: "Olivia Rhye",
          location: "Knotts Berry Farm Hotel",
          email: "olivia@untitledui.com",
          mobile: "9876541230",
          date: "22 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Ace Hotel Downtown LA",
          email: "phoenix@untitledui.com",
          mobile: "9876541230",
          date: "21 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
        {
          name: "Olivia Rhye",
          location: "Pacific Palms Resort",
          email: "lana@untitledui.com",
          mobile: "9876541230",
          date: "20 Dec 2024",
          time: "Friday, 2:10:11 PM",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-8 bg-white/80 rounded-md">
      {/* Header with Title and Download Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col ">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-lg text-gray-500">Total 506 Customers</p>
        </div>
        <button
          className="px-4 py-2 border  text-black font-semibold rounded-lg  focus:outline-none "
          onClick={() => alert("PDF Report Downloaded")}
        >
          Download PDF Report
        </button>
      </div>

      {/* All/Recent Toggle and Search */}
      <div className="flex justify-between items-center mb-4  ">
        {/* All/Recent Toggle */}
        <div className="bg-white border rounded-md flex justify-between  items-center w-1/5 ">
          <button
            className={`px-4 py-2   text-center font-normal ${
              activeTab === "all"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 text-center font-normal ${
              activeTab === "recent"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent{" "}
            <span className="ml-2 rounded-full bg-gray-300 px-2 py-1 text-black text-sm">
              130
            </span>
          </button>
        </div>

       
       {/* Search Bar and Filter */}
       <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by name, location, hotel id..."
            className="w-80 px-4 py-2 border rounded-lg focus:outline-none "
          />
          <button className="px-3 py-2 text-gray-400 flex justify-center items-center gap-3 border rounded-md">
             Filter
            <BiFilterAlt className="text-gray-400 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left  text-gray-700 font-medium">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-black-600"
                />
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">
                Customers
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">
                Interested
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">
                Email address
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">
                Mobile Number
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">
                Time
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-700 font-medium">Actions</th> 
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-black-600"
                  />
                </td>
                <td className="px-6 py-4 text-sm font-semibold">{contact.name}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{contact.location}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{contact.email}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{contact.mobile}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{contact.date}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{contact.time}</td>
                <td className="px-6 py-4 text-sm text-center">
                  <BiDotsVerticalRounded className="text-gray-600 w-6 h-6 cursor-pointer" /> {/* 3-dots Icon */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contactus;
