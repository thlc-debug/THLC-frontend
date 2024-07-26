import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Features = () => {
    return (
        <section className="md:py-[2rem]  py-10 max-w-screen overflow-hidden bg-white min-h-screen flex  items-center justify-center">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl justify-center ">
                <div className="text-center md:mb-10 mb-5">
                    <div className="text-[30px] lg:text-[47px]  text-black font-bold mb-4">Features we provide</div>
                    {/* <p className="text-gray-500 lg:text-[24px] md:text-[20px] font-f_3 text-[18px] text-center px-2 pb-8">Explore the unexplored, Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> */}
                </div>
                <div className="space-y-8 md:-mr-14 md:ml-[70px] md:mt-14 ">
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:mb-[70px] mb-7">
                        <div className="order-1 md:order-2 lg:w-1/2">
                            <div className="mx-auto lg:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/home/f3.webp"
                                    alt="Impressive experience"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2 ">
                            <div className="lg:max-w-md max-w-[320px] text-center md:text-left mx-auto md:mx-0">
                                <h3 className="lg:text-[40px] mt-6 lg:mt-0 text-[26px]  font-semibold mb-2 text-black leading-normal">Unique life experiences</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-normal">We specialize in offering once in a lifetime experiences that will create lasting memories.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:pb-[70px] pb-7 pt-4">
                        <div className="order-1 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/home/f2.webp"
                                    alt="Premium sport destination"
                                    className="lg:w-[500px] lg:h-auto w-[300px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:w-1/2 lg:max-w-[350px] max-w-[340px]">
                            <div className="lg:max-w-lg max-w-[350px] text-center md:text-left md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px]  font-semibold mb-2 text-black leading-normal">Personalized trips</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px]  leading-normal">Travel isn't one-size-fits-all!  That's why we're here to help you design the perfect adventure for YOU. Tell us what makes your heart race, and we'll craft a dream vacation that's unforgettable.  Let's get started!</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/home/f1.webp"
                                    alt="Big savings"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="lg:max-w-md max-w-[300px] text-center md:text-left mx-auto md:mx-0 ">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black leading-normal">Incredible detail and service</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-normal">We've got your back. In the event something does come up. Our team is here to help make sure your trip is not interrupted.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-center mt-10 flex justify-center">
                    <button className="px-6 py-2 bg-black text-white rounded-full flex items-center">
                        See all <IoIosArrowForward className="ml-2" />
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default Features;
