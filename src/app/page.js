'use client'
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/FeatureSection';
import Map from '@/components/home/Map'
//import Experts from '@/components/home/Experts'
import BestChoice from '@/components/home/BestChoice'
//import Reviews from '@/components/home/Reviews'
import { base_url } from "@/base_url";
import Footer from '@/components/Footer'
import Fixed from '@/components/home/Fixed';
import Virtual from '@/components/home/Virtual';
import WeTrust from '@/components/home/WeTrust';
import BoxSection from '@/components/home/BoxSection';
import TopVillas from '@/components/home/TopVillas';
import Services from '@/components/home/Services';
import OurService from '@/components/home/OurService';
import Script from 'next/script';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { setUserData } from '@/store/features/auth/auth-slice';


const Home = () => {

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchUserDetails = async (token) => {
      console.log("object");
      try {
        const response = await axios.get(`${base_url}/user/details`, {
          headers: { Authorization: `Bearer ${token}` },
        });

         console.log("res in deshboard",response.data);
    
          if (response.data) {
           
            dispatch(setUserData({
              _id: response.data._id,
              name: response.data.username,
              userType: response.data.accountType,
              whishList: response.data.wishlist,
              lastLogin: response.data.lastLoggedIn,
              mail: response.data.mail
            }));
          }
      } catch (error) {
        toast.error("Failed to fetch user details. Please try again.");
        console.log(error);
      }
    };

    if (auth.token) {
      fetchUserDetails(auth.token);
    }
  }, [auth.token]);

  console.log("auth details in deshboard",auth);

  return (
    <div className='font-f_3'>
      <Header />
      <HeroSection />
      <BoxSection />
      <OurService />
      <Features />
      <Map />
      <WeTrust />
      <TopVillas />
      <BestChoice />
      <Services />
      <Virtual />
      <Footer />
    </div>
  )
}

export default Home;