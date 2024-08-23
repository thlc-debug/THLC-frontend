"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaTimes } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { base_url } from "@/base_url";
import Modal from "react-modal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import BackButton from "../utils/BackButton";
import Highlight from "../contact/Highlight";

// StarRating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400 text-2xl" />);
  }
  return <div className="flex pt-2 justify-center items-center">{stars}</div>;
};

// Loader Component
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

// OneVilla Component
const OneVilla = ({ id }) => {
  const [hotel, setHotel] = useState(null);
  const [highlighted, setHighlighted] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const api = base_url;

  useEffect(() => {
    if (id) {
      fetchHotelDetail(id);
    }
  }, [id]);

  const fetchHotelDetail = async (hotelId) => {
    try {
      const res = await fetch(`${api}/newHotel/${hotelId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setHotel(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleHighlight = (index) => {
    setHighlighted(index);
  };

  const handleOpenModal = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handlePrevImage = () => {
    setPhotoIndex(
      (photoIndex + hotel.photoUrls.length - 1) % hotel.photoUrls.length
    );
  };

  const handleNextImage = () => {
    setPhotoIndex((photoIndex + 1) % hotel.photoUrls.length);
  };

  if (!hotel) {
    return <Loader />;
  }

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] w-auto z-0">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/HeroSection/blogspage.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white pointer-events-auto">
          <h1 className="md:text-[70px] text-[40px] text-center font-bold mb-8 mt-[130px]">
            {hotel.name}
          </h1>
          <p className="text-lg md:text-[19px] text-[14px]">
            {hotel.city}, {hotel.country}
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <div className="mx-5 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {hotel.photoUrls.slice(0, 5).map((image, index) => (
            <div
              key={index}
              className="w-full h-64 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-full h-full object-cover rounded-md"
                src={image.replace(
                  "www.dropbox.com",
                  "dl.dropboxusercontent.com"
                )}
                alt={`hotel-${index}`}
                onClick={() => handleOpenModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="md:flex">
        <div className="sm:w-3/5 m-auto mt-16 text-center md:mx-[5rem] mb-3 text-black">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold mb-4">
              {hotel.about ? "About" : ""}
            </div>
            <div className="text-lg leading-relaxed">
              {hotel.about || "Discover the exquisite details of this villa and secure your reservation today!"}
            </div>
            <StarRating rating={hotel.stars} />
          </div>
        </div>

        <div className="mt-5 sm:w-2/5 text-center m-auto md:mx-[5rem] text-black">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {hotel.price && (
              <div className="text-xl font-bold mb-2 mt-5">
                $ {hotel.price} per night
              </div>
            )}
            <Link href={`/checkout?id=${hotel._id}`}>
              <button className="bg-black text-white m-auto mb-5 mt-5 flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg transform transition-transform duration-300 hover:scale-105">
                Book Now <GoArrowUpRight className="ml-2" />
              </button>
            </Link>
            <a
              href={
                hotel.country === "India"
                  ? "tel:+91-9888334677"
                  : `skype:${hotel.phone || "+919888664677"}?call`
              }
            >
              <button className="bg-black text-white m-auto mt-2 flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg transform transition-transform duration-300 hover:scale-105">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="px-10 md:pb-10 md:pt-10 py-10 md:mr-[10rem] sm:mr-10 md:text-lg text-md flex flex-wrap gap-4">
        {hotel.facilities.map((facility, index) => (
          <Highlight
            key={index}
            name={facility}
            isHighlighted={highlighted === index}
            onClick={() => handleHighlight(index)}
            className="cursor-pointer p-3 bg-white rounded-lg shadow-md hover:bg-gray-100 transform transition-transform duration-300"
          />
        ))}
      </div>

      {/* Image Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75 rounded-lg"
      >
        <div className="relative w-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg">
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={handleCloseModal}
          >
            <FaTimes />
          </button>
          <Zoom>
            <img
              className="w-full h-auto object-contain rounded-lg"
              src={hotel.photoUrls[photoIndex].replace(
                "www.dropbox.com",
                "dl.dropboxusercontent.com"
              )}
              alt={`hotel-${photoIndex}`}
            />
          </Zoom>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-2xl"
            onClick={handlePrevImage}
          >
            &#10094;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl"
            onClick={handleNextImage}
          >
            &#10095;
          </button>
        </div>
      </Modal>

      <BackButton />
    </div>
  );
};

export default OneVilla;
