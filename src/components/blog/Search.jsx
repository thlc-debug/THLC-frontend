"use client"
import React , {useState}from 'react'
import { IoSearch } from "react-icons/io5";
import Highlight from '../contact/Highlight';

const Search = () => {
  const [highlighted, setHighlighted] = useState(null);

    const handleHighlight = (id) => {
        setHighlighted(id);
    };
  const values=[
    {
      id:1,
      name:"Budget Travel"
    },
    {
      id:2,
      name:"Solo Travel"
    },
    {
      id:3,
      name:"Business Trip Tips"
    },
    {
      id:4,
      name:"Underrated places to Travel"
    },
    {
      id:5,
      name:"Best Clubs"
    },
    {
      id:6,
      name:"Best Photo Locations"
    }
  ];
  return (
    <>
      <div className='mx-auto mt-5 w-full max-w-[503px] relative h-[49px] flex items-center justify-center px-4 sm:px-0'>
        <input 
          type="search" 
          placeholder='search...' 
          className='w-full border focus:outline-none px-5 py-3 text-gray-500 rounded-l-full rounded-r-full' 
        />
        <div className='flex items-center w-[50px] sm:w-[100px] h-full justify-center absolute right-0 bg-black rounded-r-full'>
          <IoSearch className='text-white text-xl sm:text-3xl' />
        </div>
      </div>

      <div className='justify-center items-center md:pb-10 md:pt-10 py-5    md:text-lg text-md flex flex-wrap '>
                            {values.map(value => (
                                <Highlight 
                                key={value.id} 
                                id={value.id} 
                                name={value.name} 
                                isHighlighted={highlighted === value.id} 
                                onClick={handleHighlight} 
                                />
                            ))}
                        </div>
    </>
  );
}

export default Search;
