"use client";

import { useEffect, useState, useRef } from 'react';
import { useTransition, useSpring, animated } from '@react-spring/web';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import Link from 'next/link';
import Procurement from '../forms/Procurement';
import VillaForm from '../forms/VillaForm';
import VisaForm from '../forms/VisaForm';
import Safariform from '../forms/Safariform';

const images = [
  { src: '/heroHome/pexels-h1ghland_fox-396772126-26737937.jpg', link: "/explore", alt: 'Background 1', title: 'The Carlton', description: 'Skiing in the Lush White Snow of a Switzerland this Winter!' },
  { src: '/Aman-le-melezin-chourchevel-exterior.webp', link: "/explore", alt: 'Background 2', title: 'Aman Le melezin', description: 'Let us Take you on your next vacation with your loved ones!' },
  { src: '/umaid-bhawan-2-866x487.jpg', link: "/explore", alt: 'Background 3', title: 'Umaid Bhawan Palace', description: 'Experience the Royal Era with our selection of Palaces!' },
  { src: '/adare-manor-aerial-image.jpg', link: "/explore", alt: 'Background 4', title: 'The Adare Manor', description: 'The Rich History held within the Castles of Ireland awaits you!' },
  { src: '/amanera.jpg', alt: 'Background 5', link: "/explore", title: 'Amanera', description: "A Beach, Jungle, and Adventure Paradise!" },
  { src: '/night-shot.jpg', alt: 'Background 6', link: "/explore", title: 'The Argos', description: 'Witness the Unique Rocks of Cappadocia on a Hot Air balloon!' },
  { src: '/home/yacht.jpg', alt: 'Background 7', link: Procurement, title: 'Procurement Services', description: 'We offer top-tier procurement services to meet your business needs' },
  { src: '/home/beachside.jpg', alt: 'Background 8', link: VillaForm, title: 'Villas', description: 'Explore the unparalleled luxury of the villas we offer, designed for your ultimate comfort and relaxation.' },
  { src: '/HeroSection/aboutuspage.jpg', alt: 'Background 9', link: VisaForm, title: 'Visas', description: 'Discover our comprehensive visa services, tailored to ensure a smooth and hassle-free experience for all your travel needs.' },
  { src: '/home/animalsafari.jpg', alt: 'Background 10', link: Safariform, title: 'Safaris', description: 'Discover our exceptional safari services, designed to provide you with an unforgettable and thrilling wildlife adventure.' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
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

  const imageTransitions = useTransition(index, {
    keys: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    return (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block w-3 h-3 rounded-full border-2 border-white ${index === i ? 'bg-white' : ''} cursor-pointer`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
      {imageTransitions((style, i) => (
        <animated.div key={i} className="absolute w-full h-full" style={style}>
          <div className="relative h-full">
            <img src={images[i].src} alt={images[i].alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:justify-start md:pl-[120px] text-white">
              <div className="max-w-lg md:max-w-2xl p-4 md:p-8">
                {/* <AnimatedText title={images[i].title} description={images[i].description} /> */}
                <div className="mt-[14rem]">
                  <h2 className="flex font-f_2 gap-[5px] items-center text-[.8rem] bg-[rgb(255,255,255,80%)] text-black md:text-[.8rem] px-3 py-[3px] w-fit font-[400]">
                    <IoLocation className='opacity-90' />
                    {images[i].title}
                  </h2>
                  <p className="mt-2 text-[2rem] font-[600] md:text-[2rem] font-f_2">
                    {images[i].description}
                  </p>
                  {typeof images[i].link === 'string' ? (
                    <Link href={images[i].link} className='text-[18px] py-[10px] font-[500] flex gap-[5px] items-center'>Let's go <IoIosArrowForward className='text-[18px]' /></Link>
                  ) : (
                    <button onClick={() => openModal(images[i])} className='text-[18px] py-[10px] font-[500] flex gap-[5px] items-center'>Let's go <IoIosArrowForward className='text-[18px]' /></button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
      {renderDots()}

      {/* Modal */}
      {isOpen && selectedService && (
        <div className="fixed py-5 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white h-[80vh] overflow-y-scroll overflow-x-hidden px-6 py-2 rounded-lg max-w-lg w-full flex flex-col gap-[20px]">
            <button className="absolute top-[15px] right-[50vw] text-right text-white bg-[#00000]" onClick={closeModal}>X</button>
            <div className="text-center">
              <img className='zoom-image rounded-xl my-5 h-[100px] sm:h-[200px] w-full mx-auto mb-[20px]'
                src={selectedService.src}
                alt={selectedService.title} />
              {selectedService.link && <selectedService.link />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AnimatedText = ({ title, description }) => {
  const titleRef = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const descriptionRef = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 800,
  });

  return (
    <div>
      <animated.h2 style={titleRef} className="text-3xl md:text-5xl font-semibold">
        {title}
      </animated.h2>
      <animated.p style={descriptionRef} className="mt-2 text-md md:text-lg">
        {description}
      </animated.p>
    </div>
  );
};

export default Hero;
