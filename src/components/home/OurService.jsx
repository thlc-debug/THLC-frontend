"use client";

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Safariform from '../forms/Safariform';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Procurement from '../forms/Procurement';
import VillaForm from '../forms/VillaForm';
import VisaForm from '../forms/VisaForm';
import { RxCross2 } from "react-icons/rx";

import OtherServicesForm from '../forms/OtherServicesForm';

const service = [
  {
    id: 1,
    name: "Safaris",
    photo: "/home/animalsafari.jpg",
    formComponent: Safariform
  },
  {
    id: 2,
    name: "Procurement Services",
    photo: "/home/yacht.jpg",
    formComponent: Procurement,
  },
  {
    id: 3,
    name: " Visa Requests",
    photo: "/home/visa.jpg",
    formComponent: VisaForm,
  },
  {
    id: 4,
    name: " Villas",
    photo: "/home/beachside.jpg",
    formComponent: VillaForm,
  },
  {
    id: 5,
    name: " Other Services",
    photo: "/home/other-services.jpg",
    formComponent: OtherServicesForm,
  }
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
     <FaArrowRight size={16}/>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
     <FaArrowLeft size={16}/>
    </div>
  );
};

function OurService() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="w-full max-w-6xl m-auto px-4 pb-8 mt-8 mb-12">

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {service.map((item, index) => (
          // <Link href={`/hotelsdetail?id=${item._id}`} key={item._id}>
          <div key={item.id} onClick={() => openModal(item)} className='w-full relative hover:cursor-pointer no-focus-outline block'>
            <div className='relative '>
              <img className='brightness-75 items-center rounded-xl h-full w-full mx-auto hover:brightness-50'
                src={item.photo}
                alt={item.name} />

              <div className="absolute  flex justify-center items-center bottom-0 h-full w-full py-2 bg-black bg-opacity-10 hover:bg-opacity-40 rounded-xl text-white text-center">
                <h3 className="sm:text-md md:text-lg font-f_3">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isOpen && selectedService && (
        <div className="fixed py-5 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white h-[80vh] overflow-y-scroll overflow-x-hidden px-6 py-2 rounded-lg max-w-lg w-full flex flex-col gap-[20px]">
            
            <button className="absolute top-[15px] right-[50vw]  text-black h-[2rem] w-[2rem] bg-white rounded-full items-center text-center bg-[#00000]" onClick={closeModal}>X
            </button>
            
            {/* <button className="absolute top-[15px] right-[50vw] text-black text-right bg-[#00000]" onClick={closeModal}>X</button> */}
            <div className="text-center">
              <img className='zoom-image rounded-xl my-5 h-[100px] sm:h-[200px] w-full mx-auto mb-[20px]'
                src={selectedService.photo}
                alt={selectedService.name} />
              {selectedService.formComponent && <selectedService.formComponent />}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default OurService;
