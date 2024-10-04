import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import HomeIcon from '../../../../public/adminicons/sidebar/home/home.svg'
import HomeIconDark from '../../../../public/adminicons/sidebar/home/homeblack.svg'
import UserIcon from '../../../../public/adminicons/sidebar/user/user.svg'
import LogoutIcon from '../../../../public/adminicons/sidebar/logout.svg'
import UserIconDark from '../../../../public/adminicons/sidebar/user/userblack.svg'
import BookingIcon from '../../../../public/adminicons/sidebar/booking/booking.svg'
import BookingIconDark from '../../../../public/adminicons/sidebar/booking/bookdark.svg';
import HotelIcon from '../../../../public/adminicons/sidebar/hotel/hotel.svg'
import HotelIconDark from '../../../../public/adminicons/sidebar/hotel/hoteldark.svg'
import TransactionIcon from '../../../../public/adminicons/sidebar/transaction/transaction.svg';
import TransactionIconDark from '../../../../public/adminicons/sidebar/transaction/transactiondark.svg';
import ContactIcon from '../../../../public/adminicons/sidebar/contact/contact.svg';
import ContactIconDark from '../../../../public/adminicons/sidebar/contact/contactdark.svg';
import ContentIcon from '../../../../public/adminicons/sidebar/contant/content.svg'
import ContentIconDark from '../../../../public/adminicons/sidebar/contant/contentdark.svg'
import Image from "next/image";
import {
  MdAssignment,
  MdOutlineSpaceDashboard
} from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaKey, FaSignOutAlt } from "react-icons/fa";
import {
  HiChevronDown,
  HiChevronUp,
  HiMiniHome
} from "react-icons/hi2";
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
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${currentView === "dashboard" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => setCurrentView("dashboard")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                   
                    <Image
                      src={currentView === "dashboard" ? HomeIcon : HomeIconDark}
                      alt="Home Icon"
                      width={20}
                      height={20}
                      className={`mr-2 ${currentView === "dashboard" ? "text-white" : ""}`}
                    />


                    <span className="flex-grow">Dashboard</span></div>

                  {currentView === "dashboard" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${currentView === "users" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => setCurrentView("users")}
              >

                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <Image
                      src={currentView === "users" ? UserIcon : UserIconDark}
                      alt="Home Icon"
                      width={20}
                      height={20}
                      className={`mr-2 ${currentView === "users" ? "text-white" : ""}`}
                    />

                    <span className="flex-grow">Users</span></div>

                  {currentView === "users" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>


              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${currentView === "bookings" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => setCurrentView("bookings")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <Image
                      src={currentView === "bookings" ? BookingIconDark : BookingIcon}
                      alt="Home Icon"
                      width={20}
                      height={20}
                      className={`mr-2 ${currentView === "bookings" ? "text-white" : ""}`}
                    />

                    <span className="flex-grow">Bookings</span></div>

                  {currentView === "bookings" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>

                {/* <span></span> */}
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${currentView === "hotels" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => setCurrentView("hotels")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <Image
                      src={currentView === "hotels" ? HotelIcon : HotelIconDark}
                      alt="Home Icon"
                      width={20}
                      height={20}
                      className={`mr-2 ${currentView === "hotels" ? "text-white" : ""}`}
                    />

                    <span className="flex-grow">Hotels</span></div>

                  {currentView === "hotels" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>

                {/* <span></span> */}
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${currentView === "transaction" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => setCurrentView("transaction")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <Image
                      src={currentView === "transaction" ? TransactionIcon : TransactionIconDark}
                      alt="Home Icon"
                      width={20}
                      height={20}
                      className={`mr-2 ${currentView === "transaction" ? "text-white" : ""}`}
                    />
                    <span className="flex-grow">Transaction</span></div>

                  {currentView === "transaction" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>

                {/* <span></span> */}
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full  ${currentView === "contact-us" ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                onClick={() => setCurrentView("contact-us")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <Image
                      src={currentView === "contact-us" ? ContactIconDark : ContactIcon}
                      alt="Home Icon"
                      width={20}
                      height={20}
                      className={`mr-2 ${currentView === "contact-us" ? "text-white" : ""}`}
                    />

                    <span className="flex-grow">Contact Us</span></div>

                  {currentView === "contact-us" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>

                {/* <span></span> */}
              </button>
            </li>
            <li className="mb-2">
              <div className="relative">
                <button
                  className={`flex items-center p-3 rounded-lg w-full ${dropdownOpen
                    ? "bg-gray-800 text-gray-50"
                    : "hover:bg-gray-100"
                    }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}

                >
                  <Image
                    src={dropdownOpen ? ContentIconDark : ContentIcon}
                    alt="Home Icon"
                    width={20}
                    height={20}
                    className={`mr-2 ${currentView === "contact-us" ? "text-white" : ""}`}
                  />
                 
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
                        className={`flex items-center p-3 rounded-lg w-full  ${currentView === "blogs" ? "bg-black text-white" : "hover:bg-gray-100"
                          }`}
                        onClick={() => setCurrentView("blogs")}
                      >
                        <BsArrowReturnRight
                          size={18}
                          className={`mr-2 ${currentView === "blogs" ? "text-white" : ""
                            }`}
                        />
                        <span>Blogs</span>
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        className={`flex items-center p-3 rounded-lg w-full  ${currentView === "destinations"
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                          }`}
                        onClick={() => setCurrentView("destinations")}
                      >
                        <BsArrowReturnRight
                          size={18}
                          className={`mr-2 ${currentView === "destinations" ? "text-white" : ""
                            }`}
                        />
                        <span>Destinations</span>
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        className={`flex items-center p-3 rounded-lg w-full  ${currentView === "notifications"
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                          }`}
                        onClick={() => setCurrentView("notifications")}
                      >
                        <BsArrowReturnRight
                          size={18}
                          className={`mr-2 ${currentView === "notifications"
                            ? "text-white"
                            : ""
                            }`}
                        />
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
          className="flex items-center p-3 mb-4 rounded-lg text-black hover:bg-gray-100 w-full mt-auto"
          onClick={onLogout}
        >
          <Image
            src={LogoutIcon}
            alt="Home Icon"
            width={20}
            height={20}
            className={`mr-2 ${currentView === "contact-us" ? "text-white" : ""}`}
          />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
