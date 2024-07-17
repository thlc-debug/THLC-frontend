import { FaArrowRightLong } from "react-icons/fa6";
import { VscKey } from "react-icons/vsc";
import { RiAccountCircleLine } from "react-icons/ri";
import bookings from "@/data/BookingData.json";

const NewBookings = () => {

    const today = new Date().toISOString().split('T')[0];

    const isValidDate = (dateString) => {
        const date = new Date(dateString);
        return !isNaN(date.getTime());
    };

    const todayBookings = bookings.filter(booking =>
        booking.date === "Today" || (isValidDate(booking.date) && new Date(booking.date).toISOString().split('T')[0] === today)
    );

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="text-lg font-medium text-gray-900 flex gap-2">
                <h1>New Bookings </h1>
                <span className="mt-1.5"><FaArrowRightLong/></span>
            </div>
            <ul className="mt-4 space-y-4">
                {todayBookings.map((booking) => (
                    <li key={booking.id} className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">{booking.date}</p>
                        <p className="text-lg font-medium text-gray-900">{booking.name}</p>
                        <div className="text-sm text-gray-500 flex gap-3">
                            <span className="flex gap-1"><VscKey className="mt-1"/>Room {booking.room}</span> | <span className="flex gap-1"><RiAccountCircleLine className="mt-0.5" size={18}/>{booking.adults} Adults</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewBookings;
