import React from 'react';
import { GrFormPreviousLink, GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

const BookingDetails = ({ userData }) => {
  return (
    <div className="w-full mx-auto rounded-lg p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-500 font-semibold flex items-center">
          <span className="text-3xl mr-2"><GrFormPreviousLink size={40} /></span> 
          <p className='text-2xl'>Booking</p>
        </button>
        <div className='text-gray-400'>
          <p className="flex flex-row gap-2 items-center">
            1245 of 1953 
            <GrFormPrevious className='flex items-center' size={20} />
            <MdNavigateNext className='flex items-center' size={20} />
          </p>
        </div>
      </div>

      {/* User Info Section */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-semibold mb-2">ID #{userData.id}</h1>
        <p className="text-sm text-gray-500 mb-6">{userData.date} | {userData.time}</p>
        
        <div className="flex flex-col gap-4 w-full">
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Name:</p>
            <p className='w-[80%]'>{userData.name}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">User Id:</p>
            <p className='w-[80%]'>{userData.userId}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Mobile No:</p>
            <p className='w-[80%]'>{userData.mobile}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Email Address:</p>
            <p className='w-[80%]'>{userData.email}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Location:</p>
            <p className='w-[80%]'>{userData.location}</p>
          </div>
          <div className="text-sm flex flex-row w-full items-center">
            <p className="font-normal text-gray-600 w-[13%]">Status:</p>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              {userData.status}
            </span>
          </div>
        </div>
      </div>

      {/* Resort Info Section */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">{userData.resort}</h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Check In:</p>
            <p className='w-[80%]'>{userData.checkIn}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Check Out:</p>
            <p className='w-[80%]'>{userData.checkOut}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Night:</p>
            <p className='w-[80%]'>{userData.night}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Person/ Guest:</p>
            <p className='w-[80%]'>{userData.guests}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Amount:</p>
            <p className='w-[80%]'>{userData.amount}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Payment:</p>
            <p className='w-[80%]'>{userData.paymentStatus}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-black text-white rounded-lg transition duration-200">
          Update
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg border-2 transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;