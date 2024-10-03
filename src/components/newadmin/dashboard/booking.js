"use client";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";
import { GrFormPreviousLink } from 'react-icons/gr';
import Image from "next/image";
import Paypal from '../../../../public/adminicons/payment/paypal.svg'
// import Debit from '../../../../../public/adminicons/payment/debit.svg'
// import Credit from '../../../../../public/adminicons/payment/credit.svg'
import Gpay from '../../../../public/adminicons/payment/gpay.svg'
import BookingDetails from "./booking/bookingDetails";
import { AiOutlinePlus, AiOutlineDownload } from "react-icons/ai";


const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const closeBookingDetails = () => {
    setSelectedUser(null); // Close the modal by resetting the selected user
  };
  useEffect(() => {
    setTimeout(() => {
      setBookings([
        {
          name: "Olivia Rhye",
          hotelName: "Found Conice Restro",
          persons: 10,
          rooms: 50,
          dateRange: "2 Dec - 30 Dec",
          days: 3,
          nights: 2,
          status: "Confirm",
          dateTime: "22 Dec 24, 09:42 PM",
        },
        {
          name: "Olivia Rhye",
          hotelName: "ExecuFound Conice",
          persons: 11,
          rooms: 4,
          dateRange: "21 Nov - 25 Nov",
          days: 4,
          nights: 5,
          status: "Canceled",
          dateTime: "10 Dec 24, 09:42 AM",
        },
        // More bookings here
      ]);
    }, 1000);
  }, []);

  // const handleAddClick = () => {
  //   setIsFormVisible(true); // Show the form when "Add" is clicked
  // };

  const handleBack = () => {
    setIsFormVisible(false); // Hide the form and go back to the previous state
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setIsPaymentMethodSelected(false) // Hide the form when "Cancel" is clicked
  };

  const handleConfirm = () => {
    // Perform confirmation action here
    console.log("Confirmed");
    setIsFormVisible(false); // Hide the form when confirm is clicked
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
  
if(isFormVisible && !isPaymentMethodSelected){
  return (
  <div className="p-6 bg-white rounded-md h-full flex flex-col">
  {/* Header */}
  <div className="flex items-center mb-6">
        <button className="text-black-500 font-semibold flex items-center" onClick={handleBack}>
        <span className="text-3xl mr-2"><GrFormPreviousLink size={40} /></span> 
          <p className="text-2xl font-bold">New Bookings</p>
          </button>
        </div>

  {/* Main Form Section */}
  <div className="flex justify-between space-x-6">
    {/* Left Form (Guest Details & Hotel Info) */}
    <div className="flex flex-col w-[50%]">
      <div className="mb-4">
        <label className="block text-gray-500 mb-2">Name*</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          value="Demi Wilkinson" // For example, auto-filling with the given name
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 mb-2">Mobile No*</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          value="9784115599" // Pre-filled value for mobile number
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 mb-2">Email Address*</label>
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          value="depaksutharr@gmail.com" // Pre-filled email
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 mb-2">Address</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          placeholder="Optional"
        />
      </div>

      <div className="mt-6 mb-4">
        <label className="block text-gray-500 mb-2 text-lg font-semibold">Hotel / Resorts</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          value="Mack Conic Resort" // Pre-filled hotel name
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-500 mb-2">Person / Guest*</label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          value="8" // Pre-filled number of guests
        />
      </div>

      {/* Check In/Out Dates */}
      <div className="flex space-x-4 mb-4">
        <div className="flex flex-col">
          <label className="block text-gray-500 mb-2">Check In*</label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
            value="2024-11-22" // Pre-filled check-in date
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-500 mb-2">Check Out*</label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
            value="2024-11-22" // Pre-filled check-out date
          />
        </div>
      </div>

      {/* Availability and Nights/Days Info */}
      <div className="text-green-600">
        <span className="font-semibold">Available</span>
        <span className="text-gray-500 ml-2">4 Days and 3 Nights</span>
      </div>
    </div>

    {/* Right Summary Section */}
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 w-[40%]">
      <div className="text-gray-700">
        <p className="font-semibold mb-4">Name:</p>
        <p>Demi Wilkinson</p>

        <p className="font-semibold mt-4 mb-4">Mobile No:</p>
        <p>9784115599</p>

        <p className="font-semibold mt-4 mb-4">Email Address:</p>
        <p>depaksutharr@gmail.com</p>
      </div>

      <hr className="my-4" />

      <div className="text-gray-700">
        <p className="font-semibold mb-4">Mack Conic Resort</p>

        <div className="flex justify-between mb-2">
          <span>Check In:</span>
          <span>Friday, 22 Nov 2024</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Check Out:</span>
          <span>Monday, 22 Nov 2024</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Night:</span>
          <span>10</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Person/ Guest:</span>
          <span>8</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Pricing Section */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>$200 x 10 nights</span>
          <span>$2000</span>
        </div>

        <div className="flex justify-between text-gray-700 mb-2">
          <span>LTHC service fee</span>
          <span>$200</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-gray-800 font-semibold mb-4">
          <span>Total before taxes</span>
          <span>$2200</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={handleCancel}
          className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 px-5 py-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
            onClick={handleConfirm}
          className="text-white bg-gray-800 hover:bg-gray-900 px-5 py-2.5 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>
  )
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
    <div className="bg-white rounded-md h-full flex flex-col">
      {selectedUser? (
       <BookingDetails
       user={selectedUser}
       onClose={closeBookingDetails}
       />
      ):(
        <div className="p-3 bg-white rounded-md h-full flex flex-col">
      {/* Statistic Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
  {[
    { title: "Recent Bookings", count: 2689 },
    { title: "Pending Bookings", count: 10573 },
    { title: "Confirm Bookings", count: 10293 },
    { title: "Canceled Bookings", count: 89000 },
  ].map((stat, index) => (
    <div
      key={index}
      className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-200"
    >
      {/* Top-right "Today" label */}
      <div className="absolute top-4 right-4 flex items-center space-x-1">
        <span className="text-gray-400 text-sm">Today</span>
        <svg
          className="w-4 h-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Main content */}
      <h3 className="text-sm font-semibold text-gray-500">{stat.title}</h3>
      <p className="text-4xl font-bold text-black mt-2">{stat.count.toLocaleString()}</p>
    </div>
  ))}
</div>


      {/* Header for Table Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Booking</h2>
          <p className="text-gray-500">Manage your booking and hotel details</p>
        </div>
        <div className="flex space-x-3">
        <button
            onClick={() => setIsFormVisible(true)}
            className="px-4 py-2 border text-black font-semibold rounded-md flex items-center space-x-2 hover:bg-gray-100"
         >
            <AiOutlinePlus className="w-5 h-5" />
               <span>Add</span>
           </button>
            <button
            className="px-4 py-2 border text-black font-semibold rounded-md flex items-center space-x-2 hover:bg-gray-100"
            onClick={() => alert("PDF Report Downloaded")}
            >
           <AiOutlineDownload className="w-5 h-5" />
           <span>Download PDF Report</span>
           </button>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-100 rounded-md flex border">
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "all"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "pending"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              20
            </span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "confirmed"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("confirmed")}
          >
            Confirmed{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              11
            </span>
          </button>
          <button
            className={`px-6 py-2 font-medium ${
              activeTab === "canceled"
                ? "bg-white border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("canceled")}
          >
            Canceled{" "}
            <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">
              8
            </span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search by name, email, amount..."
            className="px-4 py-2 border text-sm rounded-md focus:outline-none w-64"
          />
          <button className="flex items-center px-4 py-2 text-sm border rounded-md text-gray-500 hover:bg-gray-100">
            <BiFilterAlt className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="overflow-auto h-[65vh]">
        <table className="min-w-full bg-white border-b border-gray-200">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Hotel Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Persons
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Rooms
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Date Range
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Days
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Nights
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Date & Time
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-t"
              onClick={()=>handleRowClick(booking)}
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </td>
                <td className="px-4 py-2 text-sm font-semibold">
                  {booking.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.hotelName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.persons}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.rooms}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.dateRange}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.days}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.nights}
                </td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      booking.status === "Confirm"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {booking.dateTime}
                </td>
                <td className="px-6 py-4 text-center">
                  <BiDotsVerticalRounded className="w-6 h-6 text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      )}
    </div>
  );
};

export default BookingDashboard;