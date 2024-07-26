'use client'

import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BestChoice = () => {

  const router = useRouter()

  const handleSearch = (e) => {
    // console.log("search", e.target)
    // router.push(`/hotels?search=${hotel.location.split(',')[0]}`);
  };



  return (
    <div className="w-full px-4 pb-5">
      <div className="w-full mx-auto my-10 bg-no-repeat bg-cover rounded-md md:rounded-[60px]" >
        <div className="flex flex-col gap-6 mt-5 sm:mt-10">
          <div className="font-semibold  mt-10 text-[28px] md:text-[40px] text-center text-black">
            Discover the best choice for you
          </div>

          <div className="sm:mt-5 sm:mb-10  mx-auto p-5 rounded-md md:rounded-[30px] bg-white w-full max-w-[1000px] shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between px-5">
              <div className="flex flex-col gap-1 mb-4 md:mb-0 text-center md:text-left">
                <div className="text-[#000000] text-[16px] md:text-[18px] font-medium">
                  50+ destinations
                </div>
                <p className="text-[#000000] text-[14px] md:text-[15px]">
                  Explore more than 50 destinations now.
                </p>
              </div>
              <Link href="/explore" className="h-10 w-10 md:h-12 md:w-12 bg-black text-white flex items-center justify-center rounded-full hover:bg-gray-800 transition duration-300">
                <FaGreaterThan />
              </Link>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mt-10">
              {[
                { title: "Panama City", location: "190 hotels at Goa, India", image: "./y1.png" },
                { title: "Buenos Aires", location: "120 hotels at Pune, India", image: "./y2.png" },
                { title: "Mexico City", location: "90 hotels at Delhi, India", image: "./y3.png" },
                { title: "Rio Grande ", location: "50 hotels at Lonavala, India", image: "./y4.png" },
                { title: "Anguilla", location: "110 hotels a tCapri, Italy", image: "./y5.png" },
                { title: "Lima", location: "20 hotels at Paris, France", image: "./y6.png" },
              ].map((hotel, index) => (
                //  <Link href="/contact">
                <div
                  key={index}
                  onClick={() => router.push(`/hotelsin?city=${hotel.title}`)}
                  className="flex gap-4 items-center rounded-lg border border-gray-300 py-3 px-4 hover:cursor-pointer hover:shadow-md transition duration-300"
                >
                  <div className="w-10 h-10 md:w-[100px] md:h-[100px] overflow-hidden rounded-full flex items-center justify-center">
                    <img src={hotel.image} alt={`${hotel.title}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-black text-[20px] md:text-[24px] font-semibold">
                      Hotels in {hotel.title}
                    </div>
                    {/* <p className="text-[#00000080] text-[14px] md:text-[15px]">
                    {hotel.location}
                 </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
