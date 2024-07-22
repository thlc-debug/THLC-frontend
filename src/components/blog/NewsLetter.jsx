"use client"
import React, {useState} from 'react';
import { base_url } from "@/base_url";

const NewsLetter = () => {

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = async () => {
    if (newsletterEmail === "") {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(`${base_url}/contact/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        alert("You have successfully subscribed to the newsletter!");
        setNewsletterEmail("");
      } else {
        alert("There was an issue with your subscription. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='w-full h-auto md:h-[389px] bg-black mb-10 mt-12 py-10 flex flex-col md:flex-row items-center md:items-start'>
      <div className='w-full md:w-2/3 max-w-[900px] mx-auto pt-10 px-4 text-center md:text-left'>
        <div className='text-gray-400 text-lg sm:text-2xl mt-2'>Stay up to date</div>
        <div className='text-gray-200 text-2xl sm:text-3xl md:text-4xl mt-2'>Join Our Newsletter</div>

        <div className="flex justify-center md:justify-start items-center mt-10 md:mt-10 ">
          <div className="relative w-full max-w-[900px]  ">
            <input 
              type="text" 
              className="h-14 w-full pl-10 pr-32 rounded-full text-white bg-black border-2 border-white focus:shadow focus:outline-none" 
              placeholder="Enter your email..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <div className="absolute top-0 right-0 h-full flex items-center">
              <button className="h-14 w-28 md:w-40 text-black rounded-full bg-white hover:bg-gray-200 transition"  onClick={handleNewsletterSubmit}>Submit</button>
            </div>
            
          </div>

         
        </div>

        <div className='text-white mt-10 text-xs md:text-sm'>*By subscribing you'll be able to get regular email updates</div>
      </div>

      {/* image */}
      <div className='h-full w-[350px] mt-10 md:mt-0 md:ml-auto flex-shrink-0'>
        <img src="./luxury-hotel-3.webp" alt="Newsletter" className='rounded-l-full rounded-r-full object-cover w-full h-full' />
      </div>
    </div>
  );
}

export default NewsLetter;
