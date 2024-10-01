import React, { useState, useEffect } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSearch, FaFilter } from "react-icons/fa"; // Import icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [activeHeading, setActiveHeading] = useState("All"); // State for active tab

  useEffect(() => {
    // Static JSON data
    const jsonData = [
      {
        profilePicture: "https://example.com/profile1.jpg",
        name: "John Doe",
        userId: "USR12345",
        mobileNumber: "9876543210",
        email: "john.doe@example.com",
        joiningDate: "2024-09-15T10:30:00Z",
        status: "Active"
      },
      {
        profilePicture: "https://example.com/profile2.jpg",
        name: "Jane Smith",
        userId: "USR67890",
        mobileNumber: "9123456780",
        email: "jane.smith@example.com",
        joiningDate: "2024-09-12T09:00:00Z",
        status: "Deactivate"
      },
      {
        profilePicture: "https://example.com/profile3.jpg",
        name: "David Brown",
        userId: "USR54321",
        mobileNumber: "9087654321",
        email: "david.brown@example.com",
        joiningDate: "2024-09-10T14:45:00Z",
        status: "Block"
      }
    ];

    setUsers(jsonData);
  }, []);

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#f5f5f5' }}>
      {/* Top bar with total user count and buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '18px', color: '#333' }}>Total 5073 Users Joined</h2>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
            Add
          </button>
          <button style={{ backgroundColor: '#6c757d', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
            Download PDF Report
          </button>
        </div>
      </div>

      {/* Filter bar with tabs and search */}
      <div className="w-full h-full p-5 flex flex-col">
        

        <div className="flex items-center justify-between mx-5 mb-5">
          <div className="flex items-center justify-center gap-6">
            {["All", "New Joined"].map(
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
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* Search Bar with Icon */}
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', backgroundColor: '#fff' }}>
              <FaSearch style={{ marginRight: '10px', color: '#6c757d' }} />
              <input
                type="text"
                placeholder="Search by name, email, user id..."
                style={{ border: 'none', outline: 'none', width: '250px' }}
              />
            </div>
            {/* Filter Button with Icon */}
            <button style={{ backgroundColor: '#6c757d', color: '#fff', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
              <FaFilter style={{ marginRight: '10px' }} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Guest & Users</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>User Id</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Mobile Number</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Email Address</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Joining Date & Time</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Status</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{user.userId}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{user.mobileNumber}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{user.email}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{new Date(user.joiningDate).toLocaleString()}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                  {user.status === 'Active' ? (
                    <span style={{ color: 'green', padding: '5px 10px', border: '1px solid green', borderRadius: '5px' }}>Active</span>
                  ) : user.status === 'Block' ? (
                    <span style={{ color: 'red', padding: '5px 10px', border: '1px solid red', borderRadius: '5px' }}>Block</span>
                  ) : (
                    <span style={{ color: 'gray', padding: '5px 10px', border: '1px solid gray', borderRadius: '5px' }}>Deactivate</span>
                  )}
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                  <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                    <HiDotsHorizontal />
                  </button>
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
