"use client";
import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoStarSharp, IoEarth } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getUserDetailsFromLocalStorage, updateUserWishlistInLocalStorage } from '@/utils/fetchUserDetails';
import { base_url } from "@/base_url";

const Card = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const userDetails = getUserDetailsFromLocalStorage();

  useEffect(() => {
    if (userDetails) {
      const isLiked = userDetails.wishlist.includes(data._id);
      setLiked(isLiked);
    }
  }, [userDetails, data._id]);

  const handleWishlistToggle = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
      return;
    }

    try {
      let updatedWishlist;
      if (liked) {
        await axios.delete(`${base_url}/user/remove-from-wishlist/${data._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        updatedWishlist = userDetails.wishlist.filter(id => id !== data._id);
      } else {
        await axios.post(`${base_url}/user/add-to-wishlist`, { hotelId: data._id }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        updatedWishlist = [...userDetails.wishlist, data._id];
      }
      updateUserWishlistInLocalStorage(updatedWishlist);
      setLiked(!liked);
    } catch (error) {
      console.error('Error updating wishlist status:', error);
    }
  };

  const imagesToShow = Array.isArray(data.photoUrls)
    ? data.photoUrls.slice(0, 3).map(url =>
      url.replace("www.dropbox.com", "dl.dropboxusercontent.com")
    )
    : [];

  const starElements = [];
  const stars = (!data.stars || data.stars === null) ? 4 : data.stars
  for (let i = 0; i < 5; i++) {
    starElements.push(
      <IoStarSharp
        key={i}
        className={`text-xl ${i < stars ? 'text-yellow-300' : 'text-gray-300'}`}
      />
    );
  }

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-full max-w-[1200px] border border-gray-300 rounded-md flex flex-col gap-4 p-6 bg-white shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-[#000000E5] font-semibold text-2xl sm:text-3xl md:text-4xl">{data.name}</div>
          {/* <div
            className="flex items-center border border-gray-300 justify-center w-10 h-10 rounded-full cursor-pointer"
            onClick={handleWishlistToggle}
          > */}
            {/* {liked ? <FaHeart className="text-xl text-red-500" /> : <FaRegHeart className="text-xl" />} */}
          {/* </div> */}
        </div>

        <div className="grid grid-cols-3 items-center justify-center gap-2 overflow-x-auto">
          {imagesToShow.map((image, i) => (
            <img key={i} src={image} alt={`image-${i}`} className="object-cover w-full h-32 sm:h-48 md:h-64 rounded-md" />
          ))}
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-1">
            {starElements}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col items-start sm:items-center gap-3">
            <p className="text-[#000000E5] text-base sm:text-lg md:text-xl flex items-center">
              <IoEarth className="mr-2" />
              {data.city}, {data.country}
            </p>
          </div>
          <Link href={`/hotelsdetail?id=${data._id}`}>
            <button className="bg-black text-white flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3">
              Start Booking <GoArrowUpRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
