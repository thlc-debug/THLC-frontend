import React from 'react';
// import Experts from '../../../../public/adminicons/export.svg';
import Image from 'next/image';
import { MdNavigateNext } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import user from '../../../../public/adminicons/user.png'
import Img from '../../../../public/adminicons/hotel.jpeg'

const DashboardOverview = () => {
  const transactions = [
    {
      id: '#457863',
      card: 'Visa card **** 4831',
      amount: '$4831',
      date: 'Jan 17, 2025',
      hotel: 'Taj Hotel',
      location: 'India',
      status: 'Success',
    },
    {
      id: '#457863',
      card: 'Mastercard **** 6442',
      amount: '$5612',
      date: 'Jan 17, 2025',
      hotel: 'Jacques Hotel',
      location: 'London',
      status: 'Success',
    },
    {
      id: '#457863',
      card: 'Account **** 882',
      amount: '$7819',
      date: 'Jan 17, 2025',
      hotel: 'Safari Move Hotel',
      location: 'India',
      status: 'Cancelled',
    },
    {
      id: '#457863',
      card: 'Amex card **** 5666',
      amount: '$2000',
      date: 'Jan 17, 2025',
      hotel: 'Taj Hotel',
      location: 'USA',
      status: 'Refunded',
    }]

  const stats = [
    { title: 'Users Joined', value: '2,689', change: 'Up from past week' },
    { title: 'Hotel Booking', value: '2,689', change: ' Up from past week' },
    { title: 'Transaction', value: '$2,689', change: ' Up from past week' },
    { title: 'Contact Us', value: '689', change: ' Up from past week' }
  ];

  const customers = [
    {
      name: 'Jenny Wilson',
      email: 'j.wilson@example.com',
      time: '6:00 PM',
      avatar: user,
    },
    {
      name: 'Devon Lane',
      email: 'jgraham@example.com',
      time: '7:30 PM',
      avatar: user,
    },
    {
      name: 'Devon Lane',
      email: 'jgraham@example.com',
      time: '6:00 PM',
      avatar: user,
    },
    {
      name: 'Devon Lane',
      email: 'jgraham@example.com',
      time: '6:00 PM',
      avatar: user,
    },
    {
      name: 'Devon Lane',
      email: 'jgraham@example.com',
      time: '6:00 PM',
      avatar: user,
    },

  ];

  return (
    <div className="container mx-auto  ">
      <div className='flex flex-row w-[100%] items-center justify-between '>
        <div>
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <p className="mb-6 text-gray-400">Manage your website data reports</p>
        </div>
        <div className="flex justify-between mb-6 h-10 w-[60%]  g-2">
          <div className="relative w-[60%] flex items-center text-gray-400 gap-2">
          
           <IoSearchSharp size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2"/>
            <input
              type="text"
              placeholder="Search by name, email, user id..."
              // value={searchTerm}
              // onChange={handleSearch}
              className="p-2 pl-8 rounded-lg border w-full"
            />
          </div>
          <div className="flex space-x-4">

            <button className="p-2 border border-gray text-gray-400  rounded-lg pr-5 pl-5 flex flex-row items-center gap-2">
             
              <CiFilter size={18} color='gray'/>
              filter</button>
            <button className="p-2  border border-gray text-black-400 w-[100%] rounded-lg flex flex-row whitespace-nowrap items-center gap-2">

              {/* <Experts/> */}
              <FaDownload size={18} className='flex items-center'/>

              Export Report</button>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 ">
            <h2 className="text-md font-normal text-gray-400 flex justify-between items-center">{stat.title}
              <div className='flex flex-row items-center gap-2 cursor-pointer'>
                <span>Today</span> <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M10.3334 1L5.66673 5.66667L1.00006 1" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </h2>
            <p className="text-2xl font-bold pt-2 pb-2">{stat.value}</p>
            <div className='flex flex-row items-center gap-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#14532D" />
            </svg>
              <p className='text-sm text-green-500 '>1.3% </p>
              <p className="text-sm text-gray-500 ">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto py-4  w-full flex flex-row gap-7 ">
        {/* Transactions Table */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[70%] ">
          <div className="flex justify-between mb-4">
            <div className='flex flex-col'>
              <h2 className="text-xl font-semibold">Transactions</h2>
              <p className="mb-6 text-gray-500">Recently Transaction for booking</p>
            </div>
            <a href="#" className="text-sm text-black-500 flex flex-row  gap-2 ">See All Transactions  <MdNavigateNext className='flex items-center ' size={20} />
            </a>
          </div>
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between text-sm gap-4 border-t-2 pt-2 border-gray-200">
                <div className="w-1/4 text-gray-500">{transaction.id}</div>
                <div className="w-1/4 flex flex-col">{transaction.card}
                  <span className='text-gray-500'>card payment</span></div>
                <div className="w-1/4  flex flex-col">{transaction.amount}
                  <span className='text-gray-500'>jan 17, 2025</span></div>
                <div className="w-1/4">
                  <div>{transaction.hotel}</div>
                  <div className="text-gray-500">{transaction.location}</div>
                </div>
                <div className={`w-1/4 text-right ${transaction.status === 'Success' ? 'text-green-800 bg-green-200 rounded-lg pl-2 pr-2 w-[10%] flex items-center ' : transaction.status === 'Cancelled' ? 'text-red-800 rounded-lg pl-2 pr-2 w-[10%] bg-red-200 ' : 'text-gray-800 pl-2 pr-2 rounded-lg w-[10%] bg-gray-200 '}`}>
                  {transaction.status}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-[30%]">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Customer Joined</h2>
            <a href="#" className="text-sm text-black-500 flex flex-row  gap-2 ">See All <MdNavigateNext className='flex items-center ' size={20} /></a>
          </div>
          <div className="space-y-4">
            {customers.map((customer, index) => (
              <div key={index} className="flex items-center space-x-4 justify-between gap-4">
                <div className='flex flex-row items-center gap-4'><Image
                height={30} width={30}
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{customer.name}</h3>
                  <p className="text-gray-500 text-sm">{customer.email}</p>
                </div></div>
                <div className="ml-auto text-gray-500 text-sm">
                  {customer.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full ">
        {/* Customer Joined Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[60%]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Customer Joined</h3>
              <p className="text-sm text-gray-500">235648 User base status</p>
            </div>
            <span className="text-sm text-gray-500 flex flex-row  items-center gap-2">Yearly <FaChevronDown size={10}/></span>
          </div>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Replace with your chart */}
            <p className="text-gray-400">Line Chart (e.g., using Chart.js)</p>
          </div>
        </div>

        {/* Booking Status Section */}
        <div className='flex flex-col w-[40%] gap-3 '>
          <div className="bg-white shadow-md rounded-lg p-6  h-[80%]">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Booking</h3>
                <p className="text-sm text-gray-500">235648 hotel booking status</p>
              </div>
              <span className="text-sm text-gray-500 flex flex-row  items-center gap-2">Yearly <FaChevronDown size={10}/></span>
            </div>

            <div className="space-y-3">
              {/* Confirm Booking */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Confirm</span>
                  <span>1,43,382</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              {/* Pending Booking */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Pending</span>
                  <span>87,974</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              {/* Events */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Events</span>
                  <span>45,211</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4  h-[80%]">
            <div className="flex justify-between items-center ">
              <div className='flex flex-row items-center gap-4'>
                <Image src='' width={40} height={40}  className='bg-gray-800 rounded-xl object-cover"'/>

                <h3 className="text-lg font-semibold"> Top Hotel Booking</h3>
                {/* <p className="text-sm text-gray-500">235648 hotel booking status</p> */}
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <p className='text-xl '>360</p>
                <span className="text-sm text-gray-500 flex items-center flex-row ">See All <MdNavigateNext className='flex items-center ' size={20} /></span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full pt-4">
        {/* Booking Transaction Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[65%]">
          <div className="flex justify-between items-center mb-4 border-b-2 pb-5">
            <div>
              <h3 className="text-lg font-semibold">Booking Transaction</h3>
              <p className="text-sm text-gray-500">Your current sales summary and activity.</p>
            </div>
            <span className="text-sm text-gray-500 flex flex-row  items-center gap-2">Yearly <FaChevronDown size={10}/></span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Hotel */}
            <div className="border-l-4 pl-2">
              <p className="text-lg text-gray-500">Hotel</p>
              <div className='flex flex-row gap-4 text-lg' ><p className="text-xl font-bold">62%</p>
                <p className="text-md text-purple-500">▲ 10.78%</p></div>

            </div>
            {/* Booking */}
            <div className="border-l-4 pl-2">
              <p className="text-lg text-gray-500">Booking</p>
              <div className='flex flex-row gap-4 text-lg' ><p className="text-xl font-bold">62%</p>
                <p className="text-md text-purple-500">▲ 10.78%</p></div>

            </div>
            {/* Transaction */}
            <div className="border-l-4 pl-2">
              <p className="text-lg text-gray-500">Transaction</p>
              <div className='flex flex-row gap-4 text-lg' ><p className="text-xl font-bold">62%</p>
                <p className="text-md text-purple-500">▲ 10.78%</p></div>

            </div>
          </div>

          {/* Bar Chart Placeholder */}
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Replace with your bar chart */}
            <p className="text-gray-400">Bar Chart (e.g., using Recharts or Chart.js)</p>
          </div>
        </div>

        {/* Top Rated Hotel Section */}
        <div className="bg-white shadow-md rounded-lg p-4 w-[35%]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Top Rated Hotel</h3>
              <p className="text-sm text-gray-500">235648 All hotel reviews</p>
            </div>
            <span className="text-sm text-gray-500 flex flex-row  items-center gap-2">Yearly  <FaChevronDown size={10}/></span>
          </div>

          <div className="flex flex-row  justify-between mb-6">
            <div className='flex flex-col ' >4.2 <span className='text-gray-400'>Above</span></div>
            <div className='flex flex-col text-3xl font-bold ' >2,689
              <span className='text-green-800 text-sm flex flex-row items-center gap-2  '><svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0288 0.0673828L16.3188 2.35738L11.4388 7.23738L7.43881 3.23738L0.0288086 10.6574L1.43881 12.0674L7.43881 6.06738L11.4388 10.0674L17.7388 3.77738L20.0288 6.06738V0.0673828H14.0288Z" fill="#14532D" />
              </svg>1.3%
              </span>
            </div>
          </div>


          {/* Hotel List */}
          <div className="space-y-4">
            {["Jackson Hotel Brokens", "Jackson Hotel Brokens", "Jackson Hotel Brokens"].map((hotel, index) => (
              <div className="flex justify-between items-center  ">
                <div className='flex flex-row items-center gap-4  mb-2' >
                  <Image src='' width={40} height={40} className='bg-gray-800 rounded-xl'/>

                  <h3 className="text-md font-medium"> {hotel}</h3>
                  {/* <p className="text-sm text-gray-500">235648 hotel booking status</p> */}
                </div>
                {/* <div className='flex flex-row gap-3 items-center'>
                <p className='text-xl '>360</p> */}
                <span className="text-sm text-gray-500 flex flex-row">View <MdNavigateNext className='flex items-center ' size={20} /></span>
                {/* </div> */}

              </div>
            ))}
          </div>

          {/* See All Button */}
          <div className="mt-6">
            <button className="w-full py-2  text-black border-gray-400 border-2 rounded-md">See All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;