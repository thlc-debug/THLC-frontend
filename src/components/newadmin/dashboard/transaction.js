"use client";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        {
          name: "Olivia Rhye",
          transactionId: "#457863",
          product: "Knott's Berry Farm Hotel",
          amount: "$1250.10",
          paymentMethod: "Google Pay",
          date: "22 Dec 2024",
          time: "2:10 PM",
          status: "Success",
        },
        {
          name: "Olivia Rhye",
          transactionId: "#457864",
          product: "Ace Hotel Downtown LA",
          amount: "$5250.20",
          paymentMethod: "Credit Card",
          date: "21 Dec 2024",
          time: "2:10 PM",
          status: "Success",
        },
        {
          name: "Olivia Rhye",
          transactionId: "#457865",
          product: "Pacific Palms Resort",
          amount: "$7835.00",
          paymentMethod: "PhonePe",
          date: "20 Dec 2024",
          time: "2:10 PM",
          status: "Canceled",
        },
        // Add more users here to populate the table
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-5 bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Transaction</h2>
          <p className="text-gray-500">Total 506 Hotels</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100">
            Create Payment
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
                : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "recent"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              130
            </span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "pending"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              20
            </span>
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

      {/* Users Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Customers
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Transaction Id
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Purchase Products
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Payment Methods
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Time
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-4 py-2 text-sm font-semibold">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {user.transactionId}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {user.product}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {user.amount}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {user.paymentMethod}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.date}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.time}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Canceled"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {user.status}
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

export default Users;
