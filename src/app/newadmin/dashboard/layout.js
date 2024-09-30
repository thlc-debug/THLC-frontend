"use client"

import { useRouter } from "next/navigation";
import Sidebar from "../../../components/newadmin/dashboard/sidebar";
import Header from "../../../components/newadmin/dashboard/header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AppLayout =  ({ children })  => {


    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.token);
    const router = useRouter();

    // Handle logout state
    useEffect(() => {
        if (!user) {
            // navigate('/');
            router.push('/newadmin/dashboard')
        }
    }, [user]);

    const handleLogout = () => {
        dispatch(logout());
    };

    const showSidebar = location.pathname !== '/newadmin';

    return (
        <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: 'column',overflow: "hidden", backgroundColor:"#F6F6F9" }}>
            {showSidebar && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1 }}>
                    <Header onLogout={handleLogout} />
                </div>
            )}
            <div style={{ display: "flex", height: "100%", marginTop: showSidebar ? "64px" : "0" }}>
                {showSidebar && (
                    <div style={{ position: "fixed", top: "64px", left: 0, height: "calc(100vh - 64px)", width: "250px" }}>
                        <Sidebar />
                    </div>
                )}
                <div style={{ marginLeft: showSidebar ? "250px" : "0", width: "100%", overflowY: "auto", padding: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
export default AppLayout;
