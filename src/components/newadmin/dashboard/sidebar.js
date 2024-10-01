import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaKey, FaSignOutAlt } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";

import { MdNavigateNext } from "react-icons/md";

const Sidebar = ({ setCurrentView, onLogout }) => {
  // State to track the active sidebar item
  const [activeItem, setActiveItem] = useState("dashboard");

  // Function to handle clicking a sidebar item
  const handleItemClick = (view) => {
    setActiveItem(view); // Set the clicked item as active
    setCurrentView(view); // Update the parent component with the current view
  };

  return (
    <div className="h-[670px] flex flex-col m-3 rounded-md justify-between bg-white shadow-lg">
      <div className="flex flex-col h-full justify-between p-4">
        <nav className="flex-1">
          <ul>
            {/* Sidebar buttons for each section */}
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${activeItem === "dashboard"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
                  }`}
                onClick={() => handleItemClick("dashboard")}
              >
                <div className="gap-10 flex flex-row">
                  <div className="flex justify-between">
                    <HiMiniHome
                      size={24}
                      className={`mr-2 ${activeItem === "dashboard" ? "text-white" : ""}`}
                    />
                    <span>Dashboard</span>
                  </div>
                  <div>
                    {activeItem === "dashboard" && (
                      <MdNavigateNext className='flex items-center ' size={25} />
                    )}
                  </div>
                </div>

              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${activeItem === "users" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => handleItemClick("users")}
              >
                <div className="gap-16 flex flex-row">
                  <div className="flex justify-between">
                    <HiOutlineUsers
                      size={24}
                      className={`mr-2 ${activeItem === "users" ? "text-white" : ""}`}
                    />
                    <span>Users</span>
                  </div>

                  <div>
                    {activeItem === "users" && (
                      <MdNavigateNext className='flex items-center ' size={25} />
                    )}
                  </div>
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${activeItem === "bookings" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => handleItemClick("bookings")}
              >
                <SlCalender
                  size={24}
                  className={`mr-2 ${activeItem === "bookings" ? "text-white" : ""}`}
                />
                <span>Bookings</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${activeItem === "hotels" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => handleItemClick("hotels")}
              >
                <FaKey
                  size={24}
                  className={`mr-2 ${activeItem === "hotels" ? "text-white" : ""}`}
                />
                <span>Hotels</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${activeItem === "transaction"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
                  }`}
                onClick={() => handleItemClick("transaction")}
              >
                <MdOutlineSpaceDashboard
                  size={24}
                  className={`mr-2 ${activeItem === "transaction" ? "text-white" : ""
                    }`}
                />
                <span>Transaction</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${activeItem === "contact-us"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
                  }`}
                onClick={() => handleItemClick("contact-us")}
              >
                <MdOutlineSpaceDashboard
                  size={24}
                  className={` ${activeItem === "contact-us" ? "text-white" : ""
                    }`}
                />
                <span>Contact Us</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          className="flex items-center p-3 mb-8 rounded-lg text-black hover:bg-gray-100 w-full mt-auto"
          onClick={onLogout}
        >
          <FaSignOutAlt size={24} className="mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
