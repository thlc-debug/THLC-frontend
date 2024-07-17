import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Features = () => {
    return (
        <section className="md:py-[5rem] py-10 max-w-screen overflow-hidden bg-white min-h-screen flex  items-center justify-center">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl justify-center ">
                
                <div className="space-y-8 md:-mr-14 md:ml-[70px] md:mt-14 ">
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:mb-[70px] mb-7">
                        <div className="order-1 md:order-2 lg:w-1/2">
                            <div className="mx-auto lg:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/aboutus/cr=w_600,h_300 (1).webp"
                                    alt="Impressive experience"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2 ">
                            <div className="lg:max-w-md max-w-[320px] text-center md:text-left mx-auto md:mx-0">
                                <h3 className="lg:text-[40px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">About Us</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-relaxed">Welcome to The Luxury Hotel Concierge, the top destination for customised premium vacation experiences. We specialise in connecting discerning travellers with the best hotels, exclusive services, and unforgettable excursions throughout the world. Our objective is to make every experience unforgettable by delivering luxury service and unequalled access to the best that luxury travel has to offer.
                                </p>
                                {/* <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">At our agency, we understand that luxury travel is more than just staying at a fancy hotel or flying first class. It's about immersing oneself in the culture of a destination, exploring hidden gems, and creating unforgettable memories. That's why we take the time to get to know each of our clients, their interests, and their travel preferences. With this knowledge, we are able to create custom itineraries that cater to each individual's unique travel style.</p> */}

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:pb-[70px] pb-7 pt-4">
                        <div className="order-1 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/aboutus/cr=w_600,h_300 (2).webp"
                                    alt="Premium sport destination"
                                    className="lg:w-[500px] lg:h-auto w-[300px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:w-1/2 lg:max-w-[350px] max-w-[340px]">
                            <div className="lg:max-w-lg max-w-[350px] text-center md:text-left md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black leading-tight">Our Vision</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px]  leading-relaxed">The Luxury Hotel Concierge believes that travel should be more than just a trip,  it should be an unforgettable experience. Our mission is to turn ordinary travel into amazing experiences by providing personalised services, special bargains, and a simple booking process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/aboutus/cr=w_600,h_300.webp"
                                    alt="Big savings"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="lg:max-w-md max-w-[300px] text-center md:text-left mx-auto md:mx-0 ">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">Our Story</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-relaxed">The Luxury Hotel Concierge was founded by travel enthusiasts who have a passion for luxury and a thorough understanding of the needs of high-end travellers. With years of experience in the luxury hospitality sector, our founders saw an opportunity to share their knowledge with a wider audience through an innovative online platform.</p>
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
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black leading-tight">Commitment to Excellence</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px]  leading-relaxed">Our commitment to excellence is unshakeable. We constantly try to exceed your expectations, ensuring that your stay is both sophisticated and comfortable. Your contentment is our biggest reward, and we take pride in the many long-term relationships we've established with our visitors over the years.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/aboutus/cr=w_600,h_300.webp"
                                    alt="Big savings"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="lg:max-w-md max-w-[300px] text-center md:text-left mx-auto md:mx-0 ">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">Join Us</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-relaxed">The Luxury Hotel Concierge is more than simply a travel booking website; we are your partners in making wonderful memories. Join us on a journey to discover the world's most compelling destinations and feel the true spirit of luxury travel.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center mt-10">
                <Link href="/contact" className="bg-black text-white py-2 px-4 rounded-lg">Contact Us</Link>
            </div>
            </div>
           
        </section>
    );
};

export default Features;
