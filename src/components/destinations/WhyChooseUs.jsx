import React from 'react';
import Image from 'next/image';
import { FaTicketAlt, FaHotTub, FaGem } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-[100px]">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col md:flex-row items-center md:items-start md:space-x-8 relative overflow-hidden">
                <div className="flex-1 md:p-10 p-5">
                    <div className="text-3xl font-bold mb-7">Why choose us?</div>
                    <div className="mb-4">
                        <div className="flex items-start mb-2">
                            <FaTicketAlt className="text-xl mr-3 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold">Ultimate flexibility</h3>
                                <p className="text-gray-500">You're in control, with free cancellation and payment.</p>
                            </div>
                        </div>
                        <div className="flex items-start mb-2">
                            <FaHotTub className="text-xl mr-3 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold">Memorable experiences</h3>
                                <p className="text-gray-500">Browse and book tours and activities so magnificent.</p>
                            </div>
                        </div>
                        <div className="flex items-start mb-2">
                            <FaGem className="text-xl mr-3 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold">Quality at our core</h3>
                                <p className="text-gray-500">High quality standards. Millions of reviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative h-80 md:h-96">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 border-t-2 border-b-2 border-gray-200 transform -skew-y-6"></div>
                        <Image
                            src="/hotel-img3.jpeg"
                            alt="Pool"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
