"use client";
import Image from 'next/image';
import Link from 'next/link';
import { base_url } from '@/base_url';
import { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopVillaForm from '../forms/TopVillaForm';

const api = base_url;

const VillaList = () => {
  const [villas, setVillas] = useState([]);
  const [visibleVillas, setVisibleVillas] = useState([]);
  const [showMore, setShowMore] = useState(false);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${api}/fetch/villa`);
        const data = await response.json();
        setVillas(data);
        console.log(data);
        setVisibleVillas(data.slice(0, 15));
      } catch (error) {
        console.error('Failed to fetch hotels:', error);
      }
    }

    fetchData();
  }, []);

  const getDirectImageUrl = (url) => {
    if (!url) return '';
    // Convert the Dropbox URL to a direct link
    return url.replace("dl=0", "raw=1");
  };

  const handleShowMore = () => {
    const newVisibleCount = showMore ? 15 : villas.length;
    setVisibleVillas(villas.slice(0, newVisibleCount));
    setShowMore(!showMore);
  };

  const VillaSlider = ({ villas }) => (
    <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {villas.map(item => (
        // onClick={() => openModal(item)} 
        <Link href={`/villasdetail?id=${item._id}`} key={item.id}>
          <div className="relative group">
            <img className="brightness-75 rounded-xl h-[200px] sm:h-[300px] w-full object-cover hover:brightness-50 transition duration-300"
              src={getDirectImageUrl(item.photoUrls[0])}
              alt={item.name} />

          </div>
          <div className=" bottom-0 w-full py-2  rounded-b-xl text-black text-center">
            <h3 className="text-xl font-f_3 font-bold">{item.name}</h3>
            <p className='font-f_3'>{item.city}, {item.country}</p>
          </div>
        </Link>
      ))}
    </div>
  );
     // console.log(villas)
  return (
    <div className="mt-[7rem] mb-[7rem] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-5 h-auto w-full my-5">
        <VillaSlider villas={visibleVillas} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleShowMore}
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition duration-300">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      {isOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white h-[80vh] overflow-y-scroll overflow-x-hidden px-6 py-2 rounded-lg max-w-lg w-full flex flex-col gap-[20px]">
            <button className="absolute top-[15px] right-[50vw] text-right text-white bg-[#00000]" onClick={closeModal}>X</button>
            <button className="absolute top-[15px] right-[50vw] text-black text-right bg-[#00000]" onClick={closeModal}>X</button>
            <div className="text-center">
              <img className='zoom-image my-5 rounded-xl h-[100px] sm:h-[200px] w-full mx-auto mb-[20px]'
                src={getDirectImageUrl(selectedService.photoUrls[0])}
                alt={selectedService.name} />
              <TopVillaForm villaname={selectedService.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VillaList;
