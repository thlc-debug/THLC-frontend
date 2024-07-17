import React from 'react';

const Map = () => {
  

  return (
    <div className="w-full  px-4 sm:pt-10 pt-5 md:pt-8">
      <div className=" md:h-[780px]">
        <div className="w-full md:w-[610px] mx-auto my-10 flex flex-col gap-3">
          <h1 className="text-black text-[30px]  md:text-[45px] font-bold  text-center">
            Our Global Reach
          </h1>
          <p className="text-[#00000066] font-f_3 text-[18px] md:text-[24px] text-center leading-[22px] md:leading-[28px]">
            Discover the destinations we offer around the world.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-12 w-full md:w-[810px] mx-auto my-10">
          {/* <img src="/Mexi.png" alt="Mexico" className='absolute left-4 md:left-0 top-[60%] md:top-[40%] w-[40px] md:w-auto' /> */}
          <img src="/map.png" alt="Map" className="w-full md:w-auto" />
          {/* <img src="/paris.png" alt="Paris" className='absolute left-20 md:left-16 top-[70%] md:top-[60%] w-[40px] md:w-auto' /> */}
          {/* <img src="/Aus.png" alt="Australia" className='absolute left-[50%] md:left-[60%] top-[80%] md:top-[70%] w-[40px] md:w-auto' /> */}
          {/* <img src="/India.png" alt="India" className='absolute right-4 md:right-10 top-[40%] md:top-[50%] w-[40px] md:w-auto' /> */}
        </div>
      </div>
    </div>
  );
};

export default Map;
