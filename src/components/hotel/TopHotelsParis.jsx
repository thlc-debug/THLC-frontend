"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-3 sm:-right-4 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowRight size={16} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-3 sm:-left-4 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={16} />
    </div>
  );
};

class TopHotelsParis extends Component {
  render() {
    const { city, hotels } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: "10px",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const getDirectImageUrl = (url) => {
      return url.replace("?rlkey=", "?raw=1&rlkey=");
    };

    // console.log(hotels);

    return (
      <div className="my-[7rem] w-full max-w-[1200px] mx-auto px-4">
        <div className="text-2xl md:text-4xl font-f_3">
          Top hotels in <b>{city}</b>
        </div>
        <div className="p-4 sm:p-6 md:p-10 h-auto md:h-[380px] my-5 w-full bg-gray-100 border-2 border-gray-200 rounded-xl">
          <Slider {...settings}>
            {hotels.map((item) => (
              <Link
                href={`/hotelsdetail?id=${item._id}`}
                className="p-3 relative hover:cursor-pointer no-focus-outline block"
                key={item._id}
              >
                <div key={item._id} className=" relative">
                  <img
                    className="rounded-xl brightness-75 h-[200px] md:h-[270px] w-full mx-auto hover:brightness-50"
                    src={getDirectImageUrl(item.photoUrls[0])}
                    alt={item.name}
                  />
                  <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-50 rounded-b-xl text-white text-center">
                    <div className="text-md font-f_3">{item.name}</div>
                    <div className="text-md font-f_3">
                      {item.city}, {item.country}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default TopHotelsParis;
