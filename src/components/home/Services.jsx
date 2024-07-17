import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import DesertSafarisForm from '../forms/DesertSafarisForm';
// import AnimalSafarisForm from '../forms/AnimalSafarisForm';
import Safariform from '../forms/Safariform';
// import ExploreAntarcticaForm from '../forms/ExploreAntarcticaForm';
// import LiveAboardYachtForm from '../forms/LiveAboardYachtForm';
import Procurement from '../forms/Procurement';
// import LuxuryVillasLakeRequestForm from '../forms/LuxuryVillaLakeside';
// import LuxuryVillasRequestForm from '../forms/LuxuryVilla';
import VillaForm from '../forms/VillaForm';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

const service = [
  {
    id: 1,
    name: "Desert-Safari",
    photo: "/home/desertsafari.jpg",
    formComponent: Safariform
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
  }
];

function Services() {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '10px',
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
    <div className='w-full max-w-5xl m-auto my-[2rem]   px-4 pb-8'>
      <div className='text-3xl sm:text-4xl font-semibold font-f_3'>Services We Provide</div>

      <div className='p-5 h-auto sm:h-[320px] my-5 w-full bg-gray-100 border-2 border-gray-200 rounded-xl'>
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
            <button className="absolute top-[15px] right-[50vw]  text-black h-[2rem] w-[2rem] bg-white rounded-full text-center bg-[#00000]" onClick={closeModal}>X</button>
            {/* <button className="absolute top-[15px] right-[50vw] text-black text-right bg-[#00000]" onClick={closeModal}>X</button> */}
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

export default Services;
