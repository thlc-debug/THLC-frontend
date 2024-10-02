import React from 'react';
import { GrFormPreviousLink, GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

const TransactionDetails = ({ transaction }) => {
  return (
    <div className="w-full mx-auto p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-500 font-semibold flex items-center">
          <span className="text-3xl mr-2"><GrFormPreviousLink size={40} /></span>
          <p className='text-2xl'>Transaction</p>
        </button>
        <div className='text-gray-400'>
          <p className="flex flex-row gap-2 items-center">
            1245 of 1953
            <GrFormPrevious className='flex items-center' size={20} />
            <MdNavigateNext className='flex items-center' size={20} />
          </p>
        </div>
      </div>

      {/* Transaction Info Section */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-semibold mb-2">ID #{transaction.id}</h1>
        <p className="text-sm text-gray-500 mb-6">{transaction.date} | {transaction.time}</p>
        
        <div className="flex flex-col gap-4 w-full">
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Name:</p>
            <p className='w-[80%]'>{transaction.name}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">User Id:</p>
            <p className='w-[80%]'>{transaction.userId}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Mobile No:</p>
            <p className='w-[80%]'>{transaction.mobile}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Email Address:</p>
            <p className='w-[80%]'>{transaction.email}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Location:</p>
            <p className='w-[80%]'>{transaction.location}</p>
          </div>
          <div className="text-sm flex flex-row w-full items-center">
            <p className="font-normal text-gray-600 w-[13%]">Status:</p>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${transaction.status === 'Canceled' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {transaction.status}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">{transaction.safari}</h2>
        <div className="flex flex-col gap-4 w-full">
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Payment Method:</p>
            <p className='w-[80%]'>{transaction.paymentMethod}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">$ Per Night:</p>
            <p className='w-[80%]'>{transaction.perNight}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Service Fee:</p>
            <p className='w-[80%]'>{transaction.serviceFee}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Other Charge:</p>
            <p className='w-[80%]'>{transaction.otherCharge}</p>
          </div>
          <div className="text-sm flex flex-row w-full">
            <p className="font-normal text-gray-600 w-[13%]">Total Amount:</p>
            <p className='w-[80%]'>{transaction.totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
