"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Highlight from "../contact/Highlight";
import { GoArrowUpRight } from "react-icons/go";

import Link from "next/link";
import { base_url } from "@/base_url";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import BackButton from "../utils/BackButton";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="flex text-yellow-500" />);
  }
  return <div className="flex pt-2 justify-center items-center">{stars}</div>;
};

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

const OneHotel = ({ id, getDetails }) => {
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
      console.log(data);
      getDetails(data);
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

  const handleZoomChange = (shouldZoom) => {
    setIsZoomed(shouldZoom);
  };

  if (!hotel) {
    return <Loader />;
  }

  return (
    <div className="h-full w-full">
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
          <h2 className="text-lg md:text-[19px] text-[14px]">
            {hotel.city}, {hotel.country}
          </h2>
        </div>
      </section>
      <div className="mx-5 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {hotel.photoUrls.slice(0, 5).map((image, index) => (
            <div
              key={index}
              className="w-full h-64 overflow-hidden rounded-md shadow-lg"
            >
              <img
                className="shadow-2xl hover:scale-110 transition-transform duration-300 ease-in-out w-full h-full object-cover rounded-md cursor-pointer"
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
      <div className="md:flex">
        <div className="mx-5 my-10">
          <div className="sm:w-3/5 m-auto text-center md:mx-[5rem] mb-3 text-black">
            {hotel.about ? (
              <>
                <div className="text-4xl font-bold mb-4">About</div>
                <div className="text-lg leading-relaxed">{hotel.about}</div>
              </>
            ) : (
              <div className="text-lg">
                Discover the exquisite details of this hotel and secure your
                reservation today!
              </div>
            )}
          </div>
          <div className="text-4xl font-bold text-center md:text-left mb-4">
            Facilities
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotel.facilities.slice(1, 5).map((facility, index) => (
              <div
                key={index}
                className="flex items-center justify-center border border-gray-300 bg-white rounded-full px-4 py-2 text-center text-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 sm:w-2/5 text-center m-auto md:mx-[5rem] text-black">
          <div className="text-4xl font-bold pb-4">Contact</div>
          <div className="text-lg mb-2">City: {hotel.city}</div>
          <div className="text-lg mb-4">Country: {hotel.country}</div>
          {hotel.price ? (
            <>
              <div className="text-xl mb-2 mt-10">
                $ {hotel.price} per night
              </div>
              <Link href={`/checkout?id=${hotel._id}`}>
                <button className="bg-black text-white m-auto mb-10 flex items-center justify-center rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg hover:bg-gray-800 transition-colors duration-200">
                  Book Now <GoArrowUpRight className="ml-2" />
                </button>
              </Link>
            </>
          ) : (
            <a
              href={
                hotel.country == "India"
                  ? "tel:+91-9888334677"
                  : `skype:${hotel.phone || "+919888664677"}?call`
              }
            >
              <button className="bg-black text-white m-auto my-10 flex items-center justify-center rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg hover:bg-gray-800 transition-colors duration-200">
                Call Now
              </button>
            </a>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
      >
        <div className="relative w-full max-w-4xl max-h-full">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={handleCloseModal}
          >
            &times;
          </button>
          <Zoom>
            <img
              className="w-full h-auto object-contain rounded-md"
              src={hotel.photoUrls[photoIndex].replace(
                "www.dropbox.com",
                "dl.dropboxusercontent.com"
              )}
              alt={`hotel-${photoIndex}`}
            />
          </Zoom>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={handlePrevImage}
          >
            &#10094;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={handleNextImage}
          >
            &#10095;
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default OneHotel;
