import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoReturnUpBack } from "react-icons/io5";

const user = ({ onClose }) => {



    const userData = {
        "id": "65243",
        "date": "24 Sep, 2024",
        "time": "12:40:26 pm",
        "name": "Demi Wilkinson",
        "mobile": "9784115599",
        "email": "deepaksutharr@gmail.com",
        "location": "American Asturias Flores 121, BA, UK",
        "status": "Active",
        "activities": [
            {
                "activityId": "457863",
                "paymentMethod": "Visa card **** 4831",
                "amount": "$4831",
                "date": "Jan 17, 2025",
                "hotel": "Taj Hotel, India",
                "location": "india",
                "status": "Success"
            },
            {
                "activityId": "457864",
                "paymentMethod": "Mastercard **** 6442",
                "amount": "$5612",
                "date": "Jan 17, 2025",
                "hotel": "Taj Hotel, India",
                "location": "india",
                "status": "Canceled"
            },
            {
                "activityId": "457865",
                "paymentMethod": "Account **** 882",
                "amount": "$7819",
                "date": "Jan 17, 2025",
                "hotel": "Taj Hotel, India",
                "location": "india",
                "status": "Refunded"
            }
        ]
    }


    return (
        <div className="w-full mx-auto rounded-lg ">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <button className="text-gray-500 font-semibold flex items-center" onClick={onClose} > {/* Navigate back */}
                    <span className="text-3xl mr-2"><GrFormPreviousLink size={40} /></span> <p className='text-2xl'>Users</p>
                </button>
                <div className=''>
                    <p className="text-gray-400 flex flex-row gap-2">1245 of 1953 <GrFormPrevious ClassName='flex items-center ' size={20} />
                        <MdNavigateNext className='flex items-center ' size={20} /></p>

                </div>
            </div>

            {/* User Info Section */}
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-2xl font-semibold mb-2">ID #{userData.id}</h1>
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

            {/* Activity Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Any Activity ({userData.activities.length})</h2>
                <table className="min-w-full bg-white border-b-2 border-gray-200 rounded-lg ">

                    <tbody>
                        {userData.activities.map((activity) => (
                            <tr key={activity.activityId} className="border-b">
                                <td className="py-4 px-6 text-sm font-medium text-gray-400">#{activity.activityId}</td>
                                <td className="py-4 px-6 text-sm text-gray-700"><div className="w-1/4 flex flex-col whitespace-nowrap">{activity.paymentMethod}
                                    <span className='text-gray-500 whitespace-nowrap'>card payment</span></div></td>
                                <td ><div className="w-1/4 flex flex-col">{activity.amount}
                                    <span className='text-gray-500 whitespace-nowrap text-sm'>{activity.date}</span></div></td>
                                {/* <td className="py-4 px-6 text-sm text-gray-700">{activity.date}</td> */}
                                <td className="py-4 px-6 text-sm text-gray-700"><div>{activity.hotel}</div>
                                    <div className="text-gray-500">{activity.location}</div></td>
                                <td className="py-4 px-6">
                                    <div className='flex flex-row-reverse'>
                                        <span
                                            className={`text-sm font-medium px-3 py-1 rounded-full flex flex-row items-center ${activity.status === "Success"
                                                ? "bg-green-100 text-green-600"
                                                : activity.status === "Canceled"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-blue-100 text-gray-600"
                                                }`}
                                        >
                                            {activity.status === 'Success' && <FaCheck color='green' className="mr-1" size={13} />}
                                            {activity.status === 'Canceled' && <RxCross2 color='red' className="mr-1" size={13} />}
                                            {activity.status === 'Refunded' && <IoReturnUpBack color='gray' className="mr-1 font-bold " size={13} />}
                                            {activity.status}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default user;



