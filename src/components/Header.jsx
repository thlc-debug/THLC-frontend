"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BsSuitcaseLgFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Fixed from './home/Fixed';
import { fetchUserDetails } from '@/utils/fetchUserDetails';
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "@/store/features/auth/auth-slice";

const Header = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (isVisible && !event.target.closest('.show-hide-container')) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVisible]);

  useEffect(() => {
    // fetchUserDetails()
    // const token = localStorage.getItem('token');
    console.log("auth in header",auth);
    const token = auth.token;
    setIsAuthenticated(token !== null && token !== undefined);
  }, []);

  const handleSignout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('userDetails');
    dispatch(logout());
    router.push('/signin')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  

  return (
    <header className="flex justify-between items-center p-6 absolute w-full font-f_3 top-0 z-10 bg-opacity-50 px-8 mt-4">
      <button onClick={() => handleNavigation('/')} className="lg:text-2xl text-lg font-bold text-white text-[24px] hover:cursor-pointer">TheLuxuryHotelConcierge</button>
      <nav className="hidden xl:flex flex-grow justify-center space-x-4 text-[16px] gap-5">
        <button onClick={() => handleNavigation('/')} className={`text-white ${pathname === '/' ? 'font-bold' : ''}`}>Home</button>
        <button onClick={() => handleNavigation('/explore')} className={`text-white ${pathname === '/explore' ? 'font-bold' : ''}`}>Explore</button>
        <button onClick={() => handleNavigation('/destinations')} className={`text-white ${pathname === '/destinations' ? 'font-bold' : ''}`}>Destinations</button>
        <button onClick={() => handleNavigation('/blog')} className={`text-white ${pathname === '/blog' ? 'font-bold' : ''}`}>Blogs</button>
        <button onClick={() => handleNavigation('/hotels')} className={`text-white ${pathname === '/hotels' ? 'font-bold' : ''}`}>Hotels</button>
        <button onClick={() => handleNavigation('/contact')} className={`text-white ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact Us</button>
        <button onClick={() => handleNavigation('/aboutus')} className={`text-white ${pathname === '/aboutus' ? 'font-bold' : ''}`}>About Us</button>

      </nav>

      <div className="hidden xl:flex items-center space-x-4 gap-7">
        {isAuthenticated ? (
          <>
            {/* <button onClick={() => handleNavigation('/waitlist')} className="text-white text-2xl"><BsSuitcaseLgFill /></button> */}
            <button onClick={toggleVisibility} className="text-white text-3xl"><CgProfile /></button>


            {isVisible && (
              <div className="fixed top-20 right-5 p-5 rounded-lg  bg-gray-200 border border-gray-300 shadow-lg show-hide-container">
                {/* <button onClick={() => handleSignout()}  className=" mx-1 bg-black rounded-lg p-2 text-white">Sign Out</button> */}
                <div onClick={() => handleSignout()} className=' mb-2 p-3 cursor-pointer hover:bg-gray-300 rounded-lg  text-center text-black'>Sign Out</div>
                <div onClick={() => handleNavigation('/bookings')} className=' p-3 cursor-pointer hover:bg-gray-300 rounded-lg  text-center text-black'>Your Bookings</div>

                {/* <p>This will appear when clicked.</p> */}
              </div>

            )}
          </>
        ) : (
          <>
            <button onClick={() => handleNavigation('/signin')} className="text-white">Sign In</button>
            <button className="bg-white text-black px-7 py-1 rounded-full" onClick={() => handleNavigation('/signup')}>Join</button>
          </>
        )}
      </div>
      <div className="xl:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-70 flex justify-end">
          <div className="bg-black bg-opacity-50 w-full h-full" onClick={toggleMenu}></div>
          <div className="bg-white w-64 h-full p-6 flex flex-col absolute right-0">
            <div className="flex justify-end mb-6">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-[16px] mt-4">
              <button onClick={() => handleNavigation('/')} className={`text-black px-2 py-1 rounded-md ${pathname === '/' ? 'font-bold' : ''} hover:bg-gray-200`}>Home</button>
              <button onClick={() => handleNavigation('/explore')} className={`text-black px-2 py-1 rounded-md ${pathname === '/explore' ? 'font-bold' : ''} hover:bg-gray-200`}>Explore</button>
              <button onClick={() => handleNavigation('/destinations')} className={`text-black px-2 py-1 rounded-md ${pathname === '/destinations' ? 'font-bold' : ''} hover:bg-gray-200`}>Destinations</button>
              <button onClick={() => handleNavigation('/blog')} className={`text-black px-2 py-1 rounded-md ${pathname === '/blog' ? 'font-bold' : ''} hover:bg-gray-200`}>Blogs</button>
              <button onClick={() => handleNavigation('/hotels')} className={`text-black px-2 py-1 rounded-md ${pathname === '/hotels' ? 'font-bold' : ''} hover:bg-gray-200`}>Hotel</button>
              <button onClick={() => handleNavigation('/contact')} className={`text-black px-2 py-1 rounded-md ${pathname === '/contact' ? 'font-bold' : ''} hover:bg-gray-200`}>Contact Us</button>
              <button onClick={() => handleNavigation('/aboutus')} className={`text-black px-2 py-1 rounded-md ${pathname === '/aboutus' ? 'font-bold' : ''} hover:bg-gray-200`}>About Us</button>

              {isAuthenticated ? (
                <>
                  {/* <button onClick={() => handleNavigation('/waitlist')} className={`text-black px-2 py-1 rounded-md ${pathname === '/waitlist' ? 'font-bold' : ''} hover:bg-gray-200`}>Waitlist</button> */}
                  <button onClick={() => handleNavigation('/bookings')} className="text-black px-2 cursor-pointer py-1 rounded-md hover:bg-gray-200">Your Bookings</button>
                  <button onClick={() => handleSignout()} className="text-black px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200">Sign Out</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleNavigation('/signin')} className="text-black px-2 py-1 rounded-md hover:bg-gray-200">Sign In</button>
                  <button className="bg-black text-white px-7 py-1 rounded-full mt-4" onClick={() => handleNavigation('/signup')}>Join</button>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
      <Fixed />
    </header>
  );
};

export default Header;
