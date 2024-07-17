"use client";

import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GlobalEventAccessForm from '../forms/GlobalEventAccessForm';
import AdventureSportsForm from '../forms/AdventureSportsForm';
import VillaForm from '../forms/VillaForm';
import CorporateEvForm from '../forms/CorporateEventForm';

const service = [
  {
    id: 1,
    name: "Racing Events",
    photo: "/Explore/racing-1.jpg",
    formComponent: GlobalEventAccessForm,
  },
  {
    id: 2,
    name: "Racing Events",
    photo: "/Explore/racing-2.jpg",
    formComponent: GlobalEventAccessForm,
  },
  {
    id: 3,
    name: "Private Events",
    photo: "/Explore/private.jpg",
    formComponent: GlobalEventAccessForm,
  },
  {
    id: 4,
    name: "Sky-diving",
    photo: "/Explore/sky-diving.jpg",
    formComponent: AdventureSportsForm,
  },
  {
    id: 5,
    name: "Sea-diving",
    photo: "/Explore/sea-diving.jpg",
    formComponent: AdventureSportsForm,
  },
  {
    id: 6,
    name: "Luxury Ocean Villa / Hotel",
    photo: "/Explore/ocean.jpg",
    formComponent: VillaForm,
  },
  {
    id: 7,
    name: "Luxury Hill Villa / Hotel",
    photo: "/Explore/hill-villa.jpg",
    formComponent: VillaForm,
  },
  {
    id: 8,
    name: "Organise a Corporate Event",
    photo: "/Explore/corporate",
    formComponent: CorporateEvForm,
  }
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
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
      className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={16} />
    </div>
  );
};

function Service() {
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
    <div className='mt-[1rem] mb-[7rem] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-3xl sm:text-4xl font-bold font-f_3'>Services We Provide</div>

      <div className='p-5  h-auto sm:h-[305px] my-5 w-full sm:w-[1150px] bg-gray-100 border-2 border-gray-200 rounded-xl'>
        <Slider {...settings}>
          {service.map(item => (
            <div key={item.id} onClick={() => openModal(item)} className='p-5 relative hover:cursor-pointer no-focus-outline block'>
              <div className='relative'>
                <img className='brightness-75 rounded-xl h-[200px] sm:h-[220px] w-full sm:w-[370px] mx-auto hover:brightness-50'
                  src={item.photo}
                  alt={item.name} />
                <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-50 rounded-b-xl text-white text-center">
                  <h3 className="text-lg font-f_3">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Modal */}
      {isOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white h-[80vh] overflow-y-scroll overflow-x-hidden px-6 py-2 rounded-lg max-w-lg w-full flex flex-col gap-[20px]">
            {/* <button className="absolute top-[15px] right-[50vw] text-right text-white bg-[#00000]" onClick={closeModal}>X</button> */}
            <button className="absolute top-[15px] right-[50vw] text-black h-[2rem] w-[2rem] bg-white rounded-full text-center  bg-[#00000]" onClick={closeModal}>X</button>
            <div className="text-center">
              <img className='zoom-image my-5 rounded-xl h-[100px] sm:h-[200px] w-full mx-auto mb-[20px]'
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

export default Service;
