"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const deals=[
    {
        id:1,
        name:"Best Staycation Deals"
    },
    {
        id:2,
        name:"Top Budget Travel Destinations"
    },
    {
        id:3,
        name:"Best Places for Food Lovers"
    }
];

const StaycationDeals = () => {
    const [numVisibleCards, setNumVisibleCards] = useState(3);

    const updateNumVisibleCards = () => {
        if (window.innerWidth < 640) {
            setNumVisibleCards(1);
        } else if (window.innerWidth < 1024) {
            setNumVisibleCards(2);
        } else {
            setNumVisibleCards(3);
        }
    };

    useEffect(() => {
        updateNumVisibleCards();
        window.addEventListener('resize', updateNumVisibleCards);
        return () => window.removeEventListener('resize', updateNumVisibleCards);
    }, []);

    const deals = [
        { id: 1, image: '/hotel-img1.png', alt: 'Staycation Deal 1' },
        { id: 2, image: '/hotel-img2.png', alt: 'Staycation Deal 2' },
        { id: 3, image: '/hotel-img5.png', alt: 'Staycation Deal 3' },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'sm:grid-cols-2' : ''} ${numVisibleCards > 2 ? 'lg:grid-cols-3' : ''} `}>
                {deals.slice(0, numVisibleCards).map((deal) => (
                    <div key={deal.id} className="relative h-[500px] overflow-hidden bg-gray-800 text-white shadow-lg transform transition-transform duration-500 ease-in-out hover:cursor-pointer">
                        <div className="absolute inset-0">
                            <Image
                                src={deal.image}
                                alt={deal.alt}
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60"
                            />
                        </div>
                        
                        <div className="absolute inset-0 flex flex-col justify-center p-4 pt-[110px]">
                            {/* {deals.map((item)=>{ */}
                                    <div >
                                  <p className="mb-2 text-sm">Enjoy these cool staycation promotions.</p>
                                  <div className="mb-4 text-2xl font-bold">Best Staycation Deals</div>
                                  <Link href="/hotels"><button className="px-4 py-2 w-[110px] text-sm bg-white text-gray-800 rounded-lg">See Hotels</button></Link>
                                  </div>
                            {/* })} */}
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaycationDeals;
