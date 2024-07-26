"use client"
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const hotels = [
    {
        id: 1,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotels/pexels-kimberly-mcneilus-2480608 2.png"
    },
    {
        id: 2,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotels/pexels-kimberly-mcneilus-2480608 4.png"
    },
    {
        id: 3,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotels/Rectangle 796.png"
    },
    {
        id: 4,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotel-img2.png"
    },
    {
        id: 5,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotel-img2.png"
    },
    {
        id: 6,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotel-img2.png"
    },
    {
        id: 7,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotel-img2.png"
    },
    {
        id: 8,
        name: "Villa, Kemah Tinggi",
        rating: 4,
        photo: "./hotel-img2.png"
    }
];

const ImageWithTextOverlay = ({ imageUrl, text }) => {
    return (
        <div className="relative">
            <img src={imageUrl} alt="Image" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                <div className="text-4xl font-bold">{text}</div>
            </div>
        </div>
    );
};

class TopHotelsUSA extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            centerMode: true, // Enable center mode
            centerPadding: '10px', // Padding for center mode
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };

        return (
            <div className='w-full max-w-[1200px] mt-[7rem] mx-auto px-4'>
    <div className='text-2xl md:text-4xl font-f_3'>Top hotels in <b>USA</b></div>
    <div className='p-4 sm:p-6 md:p-10 h-auto md:h-[400px] my-5 w-full bg-gray-100 border-2 border-gray-200 rounded-xl'>
        <Slider {...settings}>
            {hotels.map(item => (
                <div key={item.id} className='p-2 sm:p-4 md:p-5 relative'>
                    <img className='brightness-75 rounded-xl h-[200px] md:h-[270px] w-[200px] md:w-[270px] mx-auto hover:brightness-50' src={item.photo} alt={item.name} />
                    
                    <div className='absolute top-4 left-4 rounded-full h-[1.5rem] w-[3.2rem] px-1 flex bg-white'>
                        <FaStar className='mx-1 mt-1 text-yellow-300' />
                        {item.rating}
                    </div>
                    
                    <div className="absolute bottom-4 inset-x-4 flex items-center justify-center text-white text-center">
                        <div className="text-sm md:text-md font-f_2 font-bold">{item.name}</div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>

        );
    }
}

export default TopHotelsUSA;
