import { FaArrowRightLong } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "@/base_url";
const NewBookings = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${base_url}/reservation/`);
        setReservations(response.data.slice(0, 4)); //  top 4 recent bookings
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  console.log(reservations);
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="text-lg font-medium text-gray-900 flex gap-2">
        <h1>New Bookings</h1>
        <span className="mt-1.5">
          <FaArrowRightLong />
        </span>
      </div>
      <ul className="mt-4 space-y-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {reservations.map((booking) => (
          <li key={booking.id} className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">
              {new Date(booking.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
              })}
              , {new Date(booking.createdAt).toLocaleTimeString()}
            </p>
            <p className="text-lg font-medium text-gray-900">
              {booking.hotel_id.name}
            </p>
            <div className="text-sm text-gray-500 flex gap-3">
              <span className="flex gap-1">
                <RiAccountCircleLine className="mt-0.5" size={18} />
                {booking.email}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewBookings;
