import React, { useState, useEffect, useRef } from "react"; 
import { FaPen, FaUpload } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
import axios from "axios";
import { base_url } from "@/base_url";

const Bookings = () => {
  const [activeHeading, setActiveHeading] = useState("Recents");
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);

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
        const updatedReservations = response.data.map((item) => ({
          ...item,
          documentStatus: "waitlist", // Setting initial value to waitlist
        }));
        setReservations(updatedReservations);
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

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full h-full p-5 flex flex-col">
      <h1 className="text-black text-xl font-bold mb-5">Bookings</h1>

      <div className="flex items-center justify-between mx-5 mb-5">
        <div className="flex items-center justify-center gap-6">
          {["Recents", "All", "Pending", "Confirmed", "Cancelled"].map((heading) => (
            <div
              key={heading}
              className={`flex flex-col cursor-pointer ${
                activeHeading === heading ? "text-black" : "text-gray-500"
              }`}
              onClick={() => handleHeadingClick(heading)}
            >
              <h1 className="text-lg">{heading}</h1>
              <span
                className={`w-full h-[2px] ${
                  activeHeading === heading ? "bg-black" : "bg-transparent"
                }`}
              ></span>
            </div>
          ))}
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
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Hotel Name & Code</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Date & Time</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Document Uploadation</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Tickets</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Submit</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={item.img} alt="Hotel" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">Code: XYZ123</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium">
                    <span className={`px-2 py-1 rounded-md ${
                      item.status === "confirmed"
                        ? "bg-green-500 text-white"
                        : item.status === "cancelled"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">{new Date(item.createdAt).toLocaleString()}</td>
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
                      {(item.status === "confirmed") && (
                        <>
                          <button className="text-gray-500 hover:text-gray-900" onClick={handleUploadClick}>
                            <FaUpload />
                          </button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            accept="application/pdf"
                          />
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {item.status === "pending" || item.status === "cancelled" ? (
                      <span className="text-transparent">No Upload</span>
                    ) : (
                      <span className={`px-2 py-1 rounded-md ${
                        item.documentStatus === "confirmed"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}>
                        {item.documentStatus}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {item.status === "pending" || item.status === "cancelled" ? (
                      <span className="text-transparent">View Tickets</span>
                    ) : (item.status === "confirmed" && item.documentStatus === "confirmed") ? (
                      <button className="bg-blue-500 text-white px-1.5 py-1 rounded-md">
                        View Tickets
                      </button>
                    ) : (item.status === "confirmed" && item.documentStatus === "waitlist") ? (
                      <button className="bg-gray-500 text-white px-1.5 py-1 rounded-md" disabled>
                        View Tickets
                      </button>
                    ) : (
                      <span className="text-transparent">View Tickets</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {item.status === "pending" || item.status === "cancelled" ? (
                      <span className="text-transparent">Submit</span>
                    ) : (item.status === "confirmed" && item.documentStatus === "confirmed") ? (
                      <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                        Submit
                      </button>
                    ) : (item.status === "confirmed" && item.documentStatus === "waitlist") ? (
                      <button className="bg-gray-500 text-white px-2 py-1 rounded-md" disabled>
                        Submit
                      </button>
                    ) : (
                      <span className="text-transparent">Submit</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Bookings;
