import StatsCard from '@/components/admin/dashboard/StatsCard';
import Overview from '@/components/admin/dashboard/Overview';
import NewBookings from '@/components/admin/dashboard/NewBookings';
import axios from 'axios';

export default function Home() {
  const stats = [
    { title: "New Bookings", count: 212, change: 12 },
    { title: "Pending Bookings", count: 212, change: 12 },
    { title: "Custom Bookings", count: 212, change: 12 },
    { title: "Approved Bookings", count: 212, change: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Overview />
        </div>
        <div>
          <NewBookings />
        </div>
      </div>
    </div>
  );
}