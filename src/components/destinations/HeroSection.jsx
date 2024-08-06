"use client";

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const images = [
        { src: "/heroimg/destination/Antartica.jpg", alt: "image1" },
        { src: "/heroimg/destination/Bangkok, Thailand.jpg", alt: "image2" },
        { src: "/heroimg/destination/Cairo, Egypt.jpg", alt: "image3" },
        { src: "/destination_bg.webp", alt: "image4" },
        { src: "/heroimg/destination/Gothenburg, Sweden.jpg", alt: "image5" },
        { src: "/heroimg/destination/Paris, France.jpg", alt: "image6" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false
    };

    return (
        <section className="relative h-[500px] w-full z-0">
            <div className="relative h-[500px] w-full">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative h-[500px] w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="object-cover "
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-auto z-10">
                <h1 id="text" className="md:text-[70px] text-[60px] font-bold mb-8 mt-[130px]">
                    <TypeAnimation
                        sequence={[
                            'Destinations',
                            3000
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </h1>
                <h2 className="text-lg md:text-[19px] text-[14px]">Explore New Destinations..</h2>
                <p>Home › Destinations</p>
            </div>
        </section>
    );
};

export default Hero;
