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
          userId: "#457863",
          mobileNumber: "9876541230",
          email: "olivia@untitledui.com",
          joiningDate: "22 Dec 24",
          joiningTime: "09:42 PM",
          status: "Active",
        },
        {
          name: "Olivia Rhye",
          userId: "#457863",
          mobileNumber: "9876541230",
          email: "phoenix@untitledui.com",
          joiningDate: "10 Dec 24",
          joiningTime: "09:42 AM",
          status: "Block",
        },
        {
          name: "Olivia Rhye",
          userId: "#457863",
          mobileNumber: "9876541230",
          email: "lana@untitledui.com",
          joiningDate: "12 Dec 24",
          joiningTime: "09:42 PM",
          status: "Deactivate",
        },
        // Add more users here to populate the table
      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-3 bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-gray-500">Total 5073 users joined</p>
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
              activeTab === "all" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "newJoined" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("newJoined")}
          >
            New Joined <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">20</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search by name, email, user id..."
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
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">User Id</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Mobile Number</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Email Address</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Joining Date & Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-4 py-2 text-sm font-semibold">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.userId}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.mobileNumber}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {user.joiningDate}, {user.joiningTime}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Block"
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
