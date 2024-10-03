"use client";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from 'react-icons/bi';

const ContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Simulating data fetching delay
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
            location: "Knotts Berry Farm Hotel",
            email: "olivia@untitledui.com",
            mobile: "9876541230",
            date: "22 Dec 2024",
            time: "Friday, 2:10:11 PM",
          },
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
            location: "Knotts Berry Farm Hotel",
            email: "olivia@untitledui.com",
            mobile: "9876541230",
            date: "22 Dec 2024",
            time: "Friday, 2:10:11 PM",
          },
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
            location: "Knotts Berry Farm Hotel",
            email: "olivia@untitledui.com",
            mobile: "9876541230",
            date: "22 Dec 2024",
            time: "Friday, 2:10:11 PM",
          },
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
            location: "Knotts Berry Farm Hotel",
            email: "olivia@untitledui.com",
            mobile: "9876541230",
            date: "22 Dec 2024",
            time: "Friday, 2:10:11 PM",
          },
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
            location: "Knotts Berry Farm Hotel",
            email: "olivia@untitledui.com",
            mobile: "9876541230",
            date: "22 Dec 2024",
            time: "Friday, 2:10:11 PM",
          },
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
            location: "Knotts Berry Farm Hotel",
            email: "olivia@untitledui.com",
            mobile: "9876541230",
            date: "22 Dec 2024",
            time: "Friday, 2:10:11 PM",
          },
        
      ]);
    }, 1000);
  }, []);

  return (
    <div className=" bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-500">Total 506 Customers</p>
        </div>
        <button
          className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100"
          onClick={() => alert("PDF Report Downloaded")}
        >
          Download PDF Report
        </button>
      </div>

      {/* Tabs and Search */}
      <div className="flex justify-between items-center mb-4">
        {/* Tabs */}
        <div className="bg-gray-100 rounded-md flex ">
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "all" ? "bg-white border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "recent" ? "bg-white border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              130
            </span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search by name, location, hotel id..."
            className="px-4 py-2 text-sm border rounded-md focus:outline-none w-64"
          />
          <button className="flex items-center text-sm px-4 py-2 border rounded-md text-gray-500 hover:bg-gray-100">
            <BiFilterAlt className="mr-2 " /> Filter
          </button>
        </div>
      </div>

      {/* Contact Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Customers</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Interested</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email Address</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Mobile Number</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-6 py-4 text-sm font-semibold">{contact.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{contact.location}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{contact.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{contact.mobile}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{contact.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{contact.time}</td>
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

export default ContactUs;
