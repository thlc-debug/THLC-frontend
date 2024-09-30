"use client"
import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaKey } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import DashBoard from '@/components/admin/DashBoard';
import Bookings from '@/components/admin/Bookings';
import Hotels from '@/components/admin/Hotels';
import Users from '@/components/admin/Users';

const Page = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderComponent = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashBoard />;
      case 'bookings':
        return <Bookings />;
      case 'hotels':
        return <Hotels />;
      case 'users':
        return <Users />;
      default:
        return <Users />;
    }
  };

  return (
    <>
<div className='m-10 '>
      {/* aside nav bar */}
      {/* <div className='fixed h-full w-[25%] md:w-[15%] lg:w-[10%] flex flex-col shadow-lg items-center gap-10 bg-[#FFFFFF]'>
        <h1 className='text-[20px] text-black my-4'>LHC</h1>
        <MdOutlineSpaceDashboard
          size={35}
          className={`cursor-pointer ${currentView === 'dashboard' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setCurrentView('dashboard')}
        />
        <SlCalender
          size={30}
          className={`cursor-pointer ${currentView === 'bookings' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setCurrentView('bookings')}
        />
        <FaKey
          size={30}
          className={`cursor-pointer ${currentView === 'hotels' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setCurrentView('hotels')}
        />
        <HiOutlineUsers
          size={30}
          className={`cursor-pointer ${currentView === 'users' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setCurrentView('users')}
        />
      </div> */}
      
      <h2 >welcome to deshboard</h2>

      {/* main content area */}
      {/* <div className='ml-[25%] md:ml-[15%] lg:ml-[10%] w-[75%] md:w-[85%] lg:w-[90%] h-full p-4'>
        {renderComponent()}
      </div> */}
    </div>
   </>
  );
}

export default Page;
