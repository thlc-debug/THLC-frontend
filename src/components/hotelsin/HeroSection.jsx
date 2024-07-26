"use client";

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({cityName}) => {
    return (
        <section className="relative h-[500px] w-auto z-0">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/HeroSection/hotelpage.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white pointer-events-auto">
            <h1 className="md:text-[70px] text-[30px] font-bold mb-8 mt-[130px]"><TypeAnimation
                sequence={[
                    
                    'Our Recommendations',
                    3000 

                ]}
                wrapper="span"
                speed={50}
                // style={{ display: 'inline-block' }}
                repeat={Infinity}
            /></h1>
                 <h2 className="text-lg md:text-[19px] text-[14px]">Find hotels as per your convinence..</h2>
                {/* <p>Home › Hotels</p> */} 
            </div>
        </section>
    );
};

export default Hero;