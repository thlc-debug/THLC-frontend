import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const transactionDetails = ({onClose}) => {

    const userData = {
        "id": "65243",
        "date": "24 Sep, 2024",
        "time": "12:40:26 pm",
        "name": "Demi Wilkinson",
        "userId": "#456281",
        "mobile": "8976543210",
        "email": "deepaksutharr@gmail.com",
        "location": "American Asturias Flores 121, BA, UK",
        "status": "Active",
        
    }



    return (
        <div className="w-full mx-auto rounded-lg ">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <button className="text-black- font-semibold flex items-center" onClick={onClose}>
                    <span className="text-3xl mr-2"><GrFormPreviousLink size={40} /></span> <p className='text-3xl'>Transaction</p>
                </button>
                <div className=''>
                    <p className="text-gray-400 flex flex-row gap-2">1245 of 1953 <GrFormPrevious ClassName='flex items-center ' size={20} />
                        <MdNavigateNext className='flex items-center ' size={20} /></p>

                </div>
            </div>

            {/* User Info Section */}
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-2xl font-normal mb-2">ID #{userData.id}</h1>
                <p className="text-sm text-gray-500 mb-6">{userData.date} | {userData.time}</p>
                <div className="flex flex-col gap-4 w-full">
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-normal text-gray-600 w-[13%] ">Name:</p>
                        <p className='w-[80%]'>{userData.name}</p>
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
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-normal text-gray-600 w-[13%]">Status:</p>
                        <span className={` py-1 rounded-full text-xs font-medium `}>
                            {userData.status}
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-2xl font-normal mb-2">Descent Safari</h1>
                {/* <p className="text-sm text-gray-500 mb-6">{userData.date} | {userData.time}</p> */}
               
                <div className="flex flex-col gap-4 w-full">
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-normal text-gray-600 w-[13%] ">Payment Method:</p>
                        <p className='w-[80%]'>Paypal</p>
                    </div>
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-normal text-gray-600 w-[13%]">$ Per Night:</p>
                        <p className='w-[80%]'>$2500</p>
                    </div>
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-normal text-gray-600 w-[13%]">Service Fee:</p>
                        <p className='w-[80%]'>$150</p>
                    </div>
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-normal text-gray-600 w-[13%]">Other Charge:</p>
                        <p className='w-[80%]'>$1100</p>
                    </div>
                    <div className="text-sm flex flex-row w-full">
                        <p className="font-semibold text-gray-600 w-[13%]">Total Amount:</p>
                        <p className='w-[80%] text-black font-semibold'>$12000</p>
                    </div>
                    
                </div>
            </div>

            
        </div>
    );
};

export default transactionDetails;