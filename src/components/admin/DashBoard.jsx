import React, { useState, useEffect } from 'react';
import StatsCard from '@/components/admin/dashboard/StatsCard';
import NewBookings from '@/components/admin/dashboard/NewBookings';
import axios from 'axios';
import { base_url } from '@/base_url';

export default function Home() {
  const [newReservationCount, setNewReservationCount] = useState('-');
  const [pendingReservationCount, setPendingReservationCount] = useState('-');
  const [confirmedReservationCount, setConfirmedReservationCount] = useState('-');
  const [customBookingCount, setCustomBookingCount] = useState('-');

  useEffect(() => {
    async function fetchNewBookingsCount() {
      try {
        const newRes = await axios.get(`${base_url}/reservation/recent-count`);
        const pendingRes = await axios.get(`${base_url}/reservation/pending-count`);
        const confirmedRes = await axios.get(`${base_url}/reservation/confirmed-count`);
        const custom = await axios.get(`${base_url}/reservation/custom-bookings`);
        setNewReservationCount(newRes.data.count);
        setPendingReservationCount(pendingRes.data.count);
        setConfirmedReservationCount(confirmedRes.data.count);
        setCustomBookingCount(custom.data.count);
      } catch (error) {
        console.error("Error fetching new bookings count:", error);
      }
    }
    fetchNewBookingsCount();
  }, []);

  const stats = [
    { title: "New Bookings", count: newReservationCount, change: 12 },
    { title: "Pending Bookings", count: pendingReservationCount, change: 12 },
    { title: "Approved Bookings", count: confirmedReservationCount, change: 12 },
    { title: "Custom Bookings", count: customBookingCount, change: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Dashboard</h1>
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      
      {/* New Bookings Section */}
      <div className="w-full">
        <NewBookings />
      </div>
    </div>
  );
}
