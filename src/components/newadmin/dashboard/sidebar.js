import React, { useState } from "react";
import { MdAssignment, MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaKey, FaSignOutAlt } from "react-icons/fa";
import { HiChevronDown, HiChevronUp, HiMiniHome } from "react-icons/hi2";
import { BsArrowReturnRight } from "react-icons/bs";

const Sidebar = ({ setCurrentView, onLogout, currentView }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="h-[670px] flex flex-col m-3 rounded-md justify-between bg-white shadow-lg">
      {/* Sidebar */}
      <div className="flex flex-col h-full justify-between p-4">
        <nav className="flex-1">
          <ul>
            {/* Sidebar buttons for each section */}
            <li className="mb-2 ">
              <button
                className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                  currentView === "dashboard" && "bg-gray-100"
                }`}
                onClick={() => setCurrentView("dashboard")}
              >
                {/* <MdOutlineSpaceDashboard /> */}
                <HiMiniHome size={24} className="mr-2" />
                <span>Dashboard</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                  currentView === "users" && "bg-gray-100"
                }`}
                onClick={() => setCurrentView("users")}
              >
                <HiOutlineUsers size={24} className="mr-2" />
                <span>Users</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                  currentView === "bookings" && "bg-gray-100"
                }`}
                onClick={() => setCurrentView("bookings")}
              >
                <SlCalender size={24} className="mr-2" />
                <span>Bookings</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                  currentView === "hotels" && "bg-gray-100"
                }`}
                onClick={() => setCurrentView("hotels")}
              >
                <FaKey size={24} className="mr-2" />
                <span>Hotels</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                  currentView === "transaction" && "bg-gray-100"
                }`}
                onClick={() => setCurrentView("transaction")}
              >
                <MdOutlineSpaceDashboard size={24} className="mr-2" />
                <span>Transaction</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                  currentView === "contact-us" && "bg-gray-100"
                }`}
                onClick={() => setCurrentView("contact-us")}
              >
                <MdOutlineSpaceDashboard size={24} className="mr-2" />
                <span>Contact Us</span>
              </button>
            </li>
            <li className="mb-2">
              <div className="relative">
                <button
                  className={`flex items-center p-3 rounded-lg w-full  ${
                    dropdownOpen
                      ? "bg-gray-800 text-gray-50"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <MdAssignment size={24} className="mr-2" />
                  <span>Content Manage</span>
                  {dropdownOpen ? (
                    <HiChevronUp className="ml-auto" />
                  ) : (
                    <HiChevronDown className="ml-auto" />
                  )}
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-full bg-white rounded-md">
                    <li className="mb-1">
                      <button
                        className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                          currentView === "blogs" && "bg-gray-100"
                        }`}
                        onClick={() => setCurrentView("blogs")}
                      >
                        <BsArrowReturnRight size={18} className="mr-2" />
                        <span>Blogs</span>
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                          currentView === "destinations" && "bg-gray-100"
                        }`}
                        onClick={() => setCurrentView("destinations")}
                      >
                        <BsArrowReturnRight size={18} className="mr-2" />
                        <span>Destinations</span>
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        className={`flex items-center p-3 rounded-lg w-full hover:bg-gray-100 ${
                          currentView === "notifications" && "bg-gray-100"
                        }`}
                        onClick={() => setCurrentView("notifications")}
                      >
                        <BsArrowReturnRight size={18} className="mr-2" />
                        <span>Notifications</span>
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          className="flex items-center p-3 rounded-lg text-black hover:bg-gray-100 w-full mt-auto"
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
