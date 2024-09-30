import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaKey, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ setCurrentView, onLogout }) => {
  return (
    <div className="h-[85vh] flex flex-col m-3 rounded-md justify-between bg-white shadow-lg">
      {/* Sidebar */}
      <div className="flex flex-col h-full justify-between p-4">
        <nav className="flex-1">
          <ul>
            {/* Sidebar buttons for each section */}
            <li className="mb-2">
              <button
                className="flex items-center p-3 rounded-lg w-full hover:bg-gray-100"
                onClick={() => setCurrentView("dashboard")}
              >
                <MdOutlineSpaceDashboard size={24} className="mr-2" />
                <span>Dashboard</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className="flex items-center p-3 rounded-lg w-full hover:bg-gray-100"
                onClick={() => setCurrentView("users")}
              >
                <HiOutlineUsers size={24} className="mr-2" />
                <span>Users</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className="flex items-center p-3 rounded-lg w-full hover:bg-gray-100"
                onClick={() => setCurrentView("bookings")}
              >
                <SlCalender size={24} className="mr-2" />
                <span>Bookings</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className="flex items-center p-3 rounded-lg w-full hover:bg-gray-100"
                onClick={() => setCurrentView("hotels")}
              >
                <FaKey size={24} className="mr-2" />
                <span>Hotels</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className="flex items-center p-3 rounded-lg w-full hover:bg-gray-100"
                onClick={() => setCurrentView("transaction")}
              >
                <MdOutlineSpaceDashboard size={24} className="mr-2" />
                <span>Transaction</span>
              </button>
            </li>
            <li className="mb-2">
              <button
                className="flex items-center p-3 rounded-lg w-full hover:bg-gray-100"
                onClick={() => setCurrentView("contact-us")}
              >
                <MdOutlineSpaceDashboard size={24} className="mr-2" />
                <span>Contact Us</span>
              </button>
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
