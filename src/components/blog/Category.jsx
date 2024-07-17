"use client"
import React,{useState} from 'react'
import Highlight from '../contact/Highlight';

const Category = () => {

  const [highlighted, setHighlighted] = useState(null);

    const handleHighlight = (id) => {
        setHighlighted(id);
    };
  const values=[
    {
      id:1,
      name:"Hotels guide"
    },
    {
      id:2,
      name:"Travel guide"
    },
    {
      id:3,
      name:"Booking guide"
    },
    {
      id:4,
      name:"Booking guide"
    },
    {
      id:5,
      name:"Offers guide"
    },
    {
      id:6,
      name:"Top safari"
    }
  ];

  return (
    <div className='w-full max-w-[1023px] h-auto flex flex-col justify-center items-center gap-5 mx-auto px-5  py-10'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-bold text-xl sm:text-5xl text-[#2B2C34]'>Browse the category</h1>
        <p className='text-lg sm:text-2xl text-[#2B2C34E5] font-medium cursor-pointer '>see all</p>
      </div>
      <div className='md:pb-10 md:pt-10 py-10  md:mr-[10rem] sm:mr-10 mr-5 md:text-lg text-md flex flex-wrap '>
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
    </div>
  )
}

export default Category;
