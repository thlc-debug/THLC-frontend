'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../components/newadmin/dashboard/sidebar";
import Header from "../../../components/newadmin/dashboard/header";
import { useSelector, useDispatch } from "react-redux";

// Import components
import DashBoard from "../../../components/newadmin/dashboard/Admin_DashBoard";
import Users from "../../../components/newadmin/dashboard/user";
import Bookings from "../../../components/newadmin/dashboard/booking";
import Hotels from "../../../components/newadmin/dashboard/hotels";
import Transaction from "../../../components/newadmin/dashboard/transaction";
import ContactUs from "../../../components/newadmin/dashboard/contactus";

const Page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.token);
  const router = useRouter();

  // State to track current view
  const [currentView, setCurrentView] = useState("dashboard");

  useEffect(() => {
    if (!user) {
      router.push("/newadmin/dashboard");
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "dashboard":
        return <DashBoard />;
      case "users":
        return <Users />;
      case "bookings":
        return <Bookings />;
      case "hotels":
        return <Hotels />;
      case "transaction":
        return <Transaction />;
      case "contact-us":
        return <ContactUs />;
      default:
        return <DashBoard />;
    }
  };

  const showSidebar = router.pathname !== "/newadmin";

  return (
    <div className="h-screen bg-gray-200 w-full flex flex-col">
      {/* Header */}
      {showSidebar && (
        <div className="w-full">
          <Header onLogout={handleLogout} />
        </div>
      )}

      {/* Sidebar and Main Content */}
      <div className="flex flex-grow">
        {showSidebar && (
          <div className="w-64">
            <Sidebar setCurrentView={setCurrentView} onLogout={handleLogout} />
          </div>
        )}

        {/* Main content area */}
        <div className="flex-1 p-6 m-4 rounded-md bg-white overflow-y-auto">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
