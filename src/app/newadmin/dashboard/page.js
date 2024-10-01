'use client';
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
    <div className="h-full flex flex-col bg-gray-100">
      {/* Fixed Header */}
      {showSidebar && (
        <div className="fixed top-0 left-0 right-0 z-10">
          <Header onLogout={handleLogout} />
        </div>
      )}

      <div className="flex flex-grow pt-16"> {/* Adjusted padding for the header */}
        {/* Fixed Sidebar */}
        {showSidebar && (
          <div className="fixed top-20 left-0 h-[calc(100vh-4rem)] w-64  shadow-md z-10">
            <Sidebar setCurrentView={setCurrentView} onLogout={handleLogout} />
          </div>
        )}

        {/* Main Content Area */}
        <div className="ml-64 mt-8 flex-1 m-6 p-6 mr-4 bg-white overflow-y-auto">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
