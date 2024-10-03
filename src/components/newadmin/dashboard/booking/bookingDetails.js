import React from 'react';
import { GrFormPreviousLink, GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

const BookingDetails = ({ onClose }) => {
const bookingData={
          name: "Olivia Rhye",
          userId:"#4564812",
          mobileNo:777775554,
          date: "24 Sep, 2024",
          time: "12:40:26 pm",
          persons: 10,
          email:"depaksutharr@gmail.com",
          status:"confirm",
          location: "American Asturias Flores 111,BA,UK",
          days: 3,
          nights: 2,
          status: "Confirm",
          dateTime: "22 Dec 24, 09:42 PM",
          resot:"Mack Conic Resort",
          checkIn:"Friday,12 Nov 2024",
          checkOut:"Monday, 22 Nov 2024",
          paymentStatus:"Success",
          amount:"$12000"

}

  return (
    <div className="w-full mx-auto rounded-lg p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-black-500 font-semibold flex items-center" onClick={onClose}>
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

      {/* Booking Info Section */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-semibold mb-2">ID:{bookingData.userId}</h1>
        <p className="text-sm text-gray-500 mb-6">{bookingData.dateTime}</p>
        
        
        <div className="flex flex-col gap-4 w-full">
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Name:</p>
            <p className='w-[80%]'>{bookingData.name}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">User Id:</p>
            <p className='w-[80%]'>{bookingData.userId}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Mobile No:</p>
            <p className='w-[80%]'>{bookingData.mobileNo}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Email Address:</p>
            <p className='w-[80%]'>{bookingData.email}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Location:</p>
            <p className='w-[80%]'>{bookingData.location}</p>
          </div>
          <div className="text-sm flex flex-row w-full items-center">
            <p className="font-normal text-gray-600 w-[13%]">Status:</p>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${bookingData.status === 'Confirm' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {bookingData.status}
            </span>
          </div>
        </div>
      </div>
       {/* Resort Info Section */}
       <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">{bookingData.resort}</h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Check In:</p>
            <p className='w-[80%]'>{bookingData.checkIn}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Check Out:</p>
            <p className='w-[80%]'>{bookingData.checkOut}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Night:</p>
            <p className='w-[80%]'>{bookingData.night}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Person/ Guest:</p>
            <p className='w-[80%]'>{bookingData.guests}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Amount:</p>
            <p className='w-[80%]'>{bookingData.amount}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Payment:</p>
            <p className='w-[80%]'>{bookingData.paymentStatus}</p>
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
