'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const Find = () => {

  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  return (
    <div className='w-full h-auto md:h-[389px] bg-black mb-10 mt-12 py-10'>
      <div className='w-full max-w-[900px] mx-auto pt-10 px-4 text-center md:text-left'>
        <div className='text-gray-200 text-2xl sm:text-3xl md:text-4xl'>Find Hotels by locations</div>
        <div className='text-gray-400 text-lg sm:text-xl mt-2'>Your lodge according to your destiny...</div>
      </div>

      <div className="flex justify-center items-center mt-10 md:mt-20 px-4">
        <div className="relative w-full max-w-[900px]">
          <input
            type="text"
            className="h-14 w-full pl-10 pr-32 rounded-full text-white bg-black border-2 border-white focus:shadow focus:outline-none"
            placeholder="Where do you want your lodge?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="absolute top-0 left-4 flex items-center h-full">
            <i className="fa fa-search text-white"></i>
          </div>
          <div className="absolute top-0 right-0 h-full flex items-center">
            <button
              onClick={() => {
                if (searchInput === "") return
                router.push(`/hotelsin?city=${searchInput}`)
              }}
              className="h-14  font-f_3 text-lg w-28 md:w-40 text-black rounded-full bg-white hover:bg-gray-200 transition"
            >
              Find
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find;
