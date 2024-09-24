import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
import axios from "axios";
import { base_url } from "@/base_url";
import { FaUpload } from "react-icons/fa6";

const Bookings = () => {
  const [activeHeading, setActiveHeading] = useState("Recents");
  const [reservations, setReservations] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const today = new Date();

  const isToday = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString() === today.toDateString();
  };

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${base_url}/reservation/`);
        setReservations(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const filteredData = reservations.filter((booking) => {
    const createdAt = new Date(booking.createdAt);
    if (activeHeading === "Recents") {
      return isToday(createdAt);
    } else if (activeHeading === "Pending") {
      return booking.status === "pending";
    } else if (activeHeading === "Confirmed") {
      return booking.status === "confirmed";
    } else if (activeHeading === "Cancelled") {
      return booking.status === "cancelled";
    }
    return true;
  });

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      console.log("Selected Pdf file");
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const toggleDetails = (booking) => {
    setSelectedBooking((prev) =>
      prev && prev._id === booking._id ? null : booking
    );
  };

  return (
    <div className="w-full h-full p-5 flex flex-col">
      <h1 className="text-black text-xl font-bold mb-5">Bookings</h1>

      <div className="flex items-center justify-between mx-5 mb-5">
        <div className="flex items-center justify-center gap-6">
          {["Recents", "All", "Pending", "Confirmed", "Cancelled"].map(
            (heading) => (
              <div
                key={heading}
                className={`flex flex-col cursor-pointer ${activeHeading === heading ? "text-black" : "text-gray-500"
                  }`}
                onClick={() => handleHeadingClick(heading)}
              >
                <h1 className="text-lg">{heading}</h1>
                <span
                  className={`w-full h-[2px] ${activeHeading === heading ? "bg-black" : "bg-transparent"
                    }`}
                ></span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="bg-white p-5 rounded-md shadow-md overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <table className="min-w-full table-auto divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                  Hotel Name & Code
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                  Date & Time
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <React.Fragment key={index}>
                  <tr
                    className="bg-white border-b border-gray-200 cursor-pointer"
                    onClick={() => toggleDetails(item)}
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={item.hotel_id?.photoUrls[0]}
                            alt="Hotel"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.hotel_id?.name}
                          </div>
                          <div className="text-sm text-gray-500">Code: XYZ123</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium">
                      <span
                        className={`px-2 py-1 rounded-md ${item.status === "confirmed"
                            ? "bg-green-500 text-white"
                            : item.status === "cancelled"
                              ? "bg-red-500 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-4 flex gap-3">
                      <button className="text-gray-500 hover:text-gray-900">
                        <FaPen />
                      </button>
                      <button className="text-gray-500 hover:text-gray-900">
                        <LuDelete />
                      </button>
                      <button className="text-gray-500 hover:text-gray-900">
                        <HiDotsHorizontal />
                      </button>
                      <div>
                        <button
                          className="text-gray-500 hover:text-gray-900"
                          onClick={handleUploadClick}
                        >
                          <FaUpload />
                        </button>

                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          accept="application/pdf"
                          onChange={handleFileChange}
                        />
                      </div>
                    </td>
                  </tr>
                  {selectedBooking && selectedBooking._id === item._id && (
                    <tr>
                      <td colSpan="4" className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Booking Details</h3>
                          <span
                            className={`px-3 py-1 text-sm font-semibold rounded-full ${item.status === "confirmed"
                                ? "bg-green-100 text-green-600"
                                : item.status === "cancelled"
                                  ? "bg-red-100 text-red-600"
                                  : "bg-yellow-100 text-yellow-600"
                              }`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Hotel Details */}
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <img
                              src={item.hotel_id?.photoUrls[0]}
                              alt="Hotel"
                              className="w-full h-48 object-cover rounded-md mb-3"
                            />
                            <h4 className="text-lg font-semibold text-gray-900">
                              {item.hotel_id?.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.hotel_id?.stars} stars | {item.hotel_id?.city},{" "}
                              {item.hotel_id?.country}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">{item.hotel_id?.about}</p>
                          </div>

                          {/* Booking Information */}
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Booking Information</h4>
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Check-in:</strong> {new Date(item.check_in).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Check-out:</strong> {new Date(item.check_out).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Guests:</strong> {item.no_of_people}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Booking Price:</strong> ${item.price}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              <strong>Email:</strong> {item.email || "N/A"}
                            </div>
                            <div className="text-sm text-gray-600">
                              <strong>Payment Status:</strong>{" "}
                              <span
                                className={`font-semibold ${item.is_payment_done ? "text-green-600" : "text-red-600"
                                  }`}
                              >
                                {item.is_payment_done ? "Completed" : "Pending"}
                              </span>
                            </div>
                          </div>

                          {/* Hotel Facilities */}
                          <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Facilities</h4>
                            <ul className="flex flex-wrap gap-2">
                              {item.hotel_id?.facilities.map((facility, index) => (
                                <li
                                  key={index}
                                  className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-md"
                                >
                                  {facility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Bookings;
