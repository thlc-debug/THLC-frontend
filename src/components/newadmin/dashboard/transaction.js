"use client";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";
import Image from "next/image"; // Assuming you're using Next.js for image handling
import { GrFormPreviousLink} from 'react-icons/gr';
import Paypal from '../../../../public/adminicons/payment/paypal.svg'
// import Debit from '../../../../../public/adminicons/payment/debit.svg'
// import Credit from '../../../../../public/adminicons/payment/credit.svg'
import Gpay from '../../../../public/adminicons/payment/gpay.svg'


const Users = () => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isCreatingPayment, setIsCreatingPayment] = useState(false); // New state to track form visibility
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false); 


  useEffect(() => {
    setTimeout(() => {
      setUsers([
        {
          name: "Olivia Rhye",
          transactionId: "#457863",
          product: "Knott's Berry Farm Hotel",
          amount: "$1250.10",
          paymentMethod: "Google Pay",
          date: "22 Dec 2024",
          time: "2:10 PM",
          status: "Success",
        },
        {
          name: "Olivia Rhye",
          transactionId: "#457864",
          product: "Ace Hotel Downtown LA",
          amount: "$5250.20",
          paymentMethod: "Credit Card",
          date: "21 Dec 2024",
          time: "2:10 PM",
          status: "Success",
        },
        {
          name: "Olivia Rhye",
          transactionId: "#457865",
          product: "Pacific Palms Resort",
          amount: "$7835.00",
          paymentMethod: "PhonePe",
          date: "20 Dec 2024",
          time: "2:10 PM",
          status: "Canceled",
        },
        // Add more users here to populate the table
      ]);
    }, 1000);
  }, []);

  // Handlers for form actions
  const handleBack = () => {
    setIsCreatingPayment(false); // Go back to the transaction table
  };

  const handleCancel = () => {
    // setPaymentMethod(false);
    setIsCreatingPayment(false);
    setIsPaymentMethodSelected(false)
  };

  const handleConfirm = () => {
    // setPaymentMethod(false)
    setIsCreatingPayment(false);
    setIsPaymentMethodSelected(true);
  };
 
  if(isPaymentMethodSelected)
    {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-center">Payment</h2>
    
            
            <div className="mb-6">
              <label className="font-medium flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="razorpay"
                  checked={paymentMethod === "razorpay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Razor pay / Stripe
              </label>
              <div className="flex justify-center gap-4">
                <Image src={Paypal} alt="Paypal" className="w-12 h-12" />
                <Image src={Gpay} alt="Google Pay" className="w-12 h-12" />
                <Image src={Paypal} alt="Visa" className="w-12 h-12" />
                <Image src={Paypal} alt="MasterCard" className="w-12 h-12" />
              </div>
            </div>
    
         
            <div className="mb-6">
              <label className="font-medium flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditcard"
                  checked={paymentMethod === "creditcard"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Pay by Credit Card
              </label>
              <div className="flex justify-center gap-4">
                <Image src={Paypal} alt="Visa" className="w-12 h-12" />
                <Image src={Paypal} alt="MasterCard" className="w-12 h-12" />
                <Image src={Paypal} alt="Discover" className="w-12 h-12" />
                <Image src={Paypal} alt="Discover" className="w-12 h-12" />
              </div>
            </div>
    
            <button
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition"
              onClick={handleCancel}
            >
              Confirm
            </button>
          </div>
        </div>
      );
    
    }
  


  if (isCreatingPayment && !isPaymentMethodSelected) {
    // Render the form when the "Create Payment" button is clicked
    return (
      <div className="p-6 bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="text-gray-500 font-semibold flex items-center" onClick={handleBack}>
        <span className="text-3xl mr-2"><GrFormPreviousLink size={40} /></span> 
          <p className="text-2xl font-bold">Create Transactions</p>
          </button>
        </div>
    
      {/* Main Form Section */}
      <div className="flex flex-col space-y-6">
        {/* Left Form (Guest Details & Hotel Info) */}
        <div className="flex flex-col w-full space-y-4">
          {/* Name */}
          <div className="mb-2">
            <label className="block text-gray-500 mb-1">Name*</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
              value="Demi Wilkinson"
            />
          </div>
    
          {/* Mobile No */}
          <div className="mb-2">
            <label className="block text-gray-500 mb-1">Mobile No*</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
              value="9784115599"
            />
          </div>
    
          {/* Email Address */}
          <div className="mb-2">
            <label className="block text-gray-500 mb-1">Email Address*</label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
              value="depaksutharr@gmail.com"
            />
          </div>
    
          {/* Hotel / Service */}
          <div className="mt-4 mb-2">
            <label className="block text-gray-500 mb-1 text-lg font-semibold">Hotel / Service</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
              value="Mack Conic Resort"
            />
          </div>
    
          {/* Per Night Cost */}
          <div className="mb-2">
            <label className="block text-gray-500 mb-1">Per Night Cost</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
              value="$805"
            />
          </div>
    
          {/* Check In/Out Dates */}
          <div className="flex space-x-4 mb-2">
            <div className="flex flex-col">
              <label className="block text-gray-500 mb-1">Check In*</label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
                value="2024-11-21"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-gray-500 mb-1">Check Out*</label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
                value="2024-11-31"
              />
            </div>
          </div>
    
          {/* Availability and Nights/Days Info */}
          <div className="text-green-600 mb-4">
            <span className="font-semibold">Available</span>
            <span className="text-gray-500 ml-2">4 Days and 3 Nights</span>
          </div>
    
          {/* Pricing Details */}
          <div className="flex flex-col p-4 border-t border-gray-200">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-500 font-semibold">$200 X 10 nights</p>
              <p className="text-gray-800">$2000</p>
            </div>
    
            <div className="mb-2 flex justify-between">
              <p className="text-gray-500 font-semibold">LTHC service fee</p>
              <p className="text-gray-800">$200</p>
            </div>
    
            <div className="mb-2 flex justify-between">
              <p className="text-lg font-semibold text-gray-800">Total before taxes</p>
              <p className="text-lg font-semibold text-gray-800">$2200</p>
            </div>
          </div>
        </div>
      </div>
    
      {/* Footer Section (Buttons) */}
      <div className="flex justify-end mt-8 space-x-4">
        <button
          onClick={handleCancel}
          className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
         onClick={handleConfirm}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Confirm
        </button>
      </div>
    </div>
    
    );
  }

  // if(isPaymentMethodSelected)
  //   {
  //     return (
  //       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  //         <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
  //           <h2 className="text-xl font-semibold mb-4 text-center">Payment</h2>
    
            
  //           <div className="mb-6">
  //             <label className="font-medium flex items-center mb-2">
  //               <input
  //                 type="radio"
  //                 name="paymentMethod"
  //                 value="razorpay"
  //                 checked={paymentMethod === "razorpay"}
  //                 onChange={(e) => setPaymentMethod(e.target.value)}
  //                 className="mr-2"
  //               />
  //               Razor pay / Stripe
  //             </label>
  //             <div className="flex justify-center gap-4">
  //               <Image src={Paypal} alt="Paypal" className="w-12 h-12" />
  //               <Image src={Gpay} alt="Google Pay" className="w-12 h-12" />
  //               <Image src={Paypal} alt="Visa" className="w-12 h-12" />
  //               <Image src={Paypal} alt="MasterCard" className="w-12 h-12" />
  //             </div>
  //           </div>
    
         
  //           <div className="mb-6">
  //             <label className="font-medium flex items-center mb-2">
  //               <input
  //                 type="radio"
  //                 name="paymentMethod"
  //                 value="creditcard"
  //                 checked={paymentMethod === "creditcard"}
  //                 onChange={(e) => setPaymentMethod(e.target.value)}
  //                 className="mr-2"
  //               />
  //               Pay by Credit Card
  //             </label>
  //             <div className="flex justify-center gap-4">
  //               <Image src={Paypal} alt="Visa" className="w-12 h-12" />
  //               <Image src={Paypal} alt="MasterCard" className="w-12 h-12" />
  //               <Image src={Paypal} alt="Discover" className="w-12 h-12" />
  //               <Image src={Paypal} alt="Discover" className="w-12 h-12" />
  //             </div>
  //           </div>
    
  //           <button
  //             className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition"
  //             onClick={handleCancel}
  //           >
  //             Confirm
  //           </button>
  //         </div>
  //       </div>
  //     );
    
  //   }

  return (
    <div className="p-5 bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Transaction</h2>
          <p className="text-gray-500">Total 506 Hotels</p>
        </div>
        <div className="flex space-x-3">
          <button
            className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100"
            onClick={() => setIsCreatingPayment(true)} // Set to true to display form
          >
            Create Payment
          </button>
          <button
            className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100"
            onClick={() => alert("PDF Report Downloaded")}
          >
            Download PDF Report
          </button>
        </div>
      </div>
        <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-100 rounded-md flex border">
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "all" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "recent" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">130</span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "pending" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">20</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search by name, location, hotel id..."
            className="px-4 py-2 border text-sm rounded-md focus:outline-none w-64"
          />
          <button className="flex items-center px-4 py-2 text-sm border rounded-md text-gray-500 hover:bg-gray-100">
            <BiFilterAlt className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Customers</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Transaction Id</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Purchase Products</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Payment Methods</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-4 py-2 text-sm font-semibold">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.transactionId}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.product}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.amount}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.paymentMethod}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.date}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.time}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Canceled"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <BiDotsVerticalRounded className="text-gray-500 w-5 h-5 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Users;
