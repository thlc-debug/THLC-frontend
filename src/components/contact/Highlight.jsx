import React from 'react'

export default function Highlight ({ id, name, isHighlighted, onClick }) {

    const handleClick = () => {
        onClick(id);
    };

  return (
    <div className={`rounded-full   px-3 py-1 inline-block m-1 border cursor-pointer transition-transform transform  ${isHighlighted ? 'bg-black text-white scale-105' : ' border-gray-300'}`} onClick={handleClick}>
      {name}
    </div>
  )
}
