"use client";

import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Safariform from '../forms/Safariform';
import Procurement from '../forms/Procurement';
import VillaForm from '../forms/VillaForm';
import GlobalEventAccessForm from '../forms/GlobalEventAccessForm';
import AdventureSportsForm from '../forms/AdventureSportsForm';
import VillaForm6 from '../forms/VillaForm6';
import CorporateEvForm from '../forms/CorporateEventForm';
import OtherServicesForm from '../forms/OtherServicesForm';

const service = [
  {
    id: 1,
    name: "Desert-Safari",
    photo: "/home/desertsafari.jpg",
    formComponent: Safariform,
  },
  {
    id: 2,
    name: "Animal Safari’s",
    photo: "/home/animalsafari.jpg",
    formComponent: Safariform,
  },
  {
    id: 3,
    name: "Explore Antarctica",
    photo: "/home/antarctica.jpg",
    formComponent: Procurement,
  },
  {
    id: 4,
    name: "Live Aboard Yachts",
    photo: "/home/yacht.jpg",
    formComponent: Procurement,
  },
  {
    id: 5,
    name: "Luxury Lakeside Villa / Hotel",
    photo: "/home/lakeside.jpg",
    formComponent: VillaForm,
  },
  {
    id: 6,
    name: "Luxury Beachside Villa / Hotel",
    photo: "/home/beachside.jpg",
    formComponent: VillaForm,
  },
  {
    id: 7,
    name: "Racing Events",
    photo: "/Explore/racing-1.jpg",
    formComponent: GlobalEventAccessForm,
  },
  {
    id: 8,
    name: "Private Events",
    photo: "/Explore/private.jpg",
    formComponent: GlobalEventAccessForm,
  },
  {
    id: 9,
    name: "Sky-diving",
    photo: "/Explore/sky-diving.jpg",
    formComponent: AdventureSportsForm,
  },
  {
    id: 10,
    name: "Sea-diving",
    photo: "/Explore/sea-diving.jpg",
    formComponent: AdventureSportsForm,
  },
  {
    id: 11,
    name: "Luxury Ocean Villa / Hotel",
    photo: "/Explore/ocean.jpg",
    formComponent: VillaForm6,
  },
  {
    id: 12,
    name: "Luxury Hill Villa / Hotel",
    photo: "/Explore/hill-villa.jpg",
    formComponent: VillaForm6,
  },
  {
    id: 13,
    name: "Organise a Corporate Event",
    photo: "/Explore/corporate.jpg",
    formComponent: CorporateEvForm,
  },
  {
    id: 14,
    name: "Custom Services",
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

function Service2() {

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
    <div className="w-full max-w-6xl m-auto my-[5rem]  px-4 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
          <div className="text-4xl text-black font-bold mb-2">Our Services</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {service.map(item => (
          <div key={item.id} onClick={() => openModal(item)} className='hover:cursor-pointer no-focus-outline'>
            <div className='relative w-full h-full'>
              <img className='brightness-75 rounded-xl w-full h-full mx-auto hover:brightness-50'
                src={item.photo}
                alt={item.name} />
              <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-50 rounded-b-xl text-white text-center">
                <h3 className="sm:text-md md:text-lg font-f_3">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white h-[80vh] overflow-y-scroll overflow-x-hidden px-6 py-2 rounded-lg max-w-lg w-full flex flex-col gap-[20px]">
            {/* <button className="absolute top-[15px] right-[50vw] text-right text-white bg-[#00000]" onClick={closeModal}>X</button> */}
            <button className="absolute top-[15px] right-[50vw] text-center text-black h-[2rem] w-[2rem] bg-white rounded-full bg-[#00000]" onClick={closeModal}>X</button>
            <div className="text-center">
              <img className='zoom-image my-5 rounded-xl h-[100px] sm:h-[200px] w-full mx-auto mb-[20px]'
                src={selectedService.photo}
                alt={selectedService.name}
              />
              {selectedService.formComponent && <selectedService.formComponent />}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default Service2;
