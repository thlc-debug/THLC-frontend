"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaMessage } from "react-icons/fa6";

const Fixed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState("");
  const widgetRef = useRef(null);

  let KEY = process.env.NEXT_PUBLIC_KEY;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (widgetRef.current && !widgetRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form submission error", error);
      setResult("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <>
      {isVisible && (
        <div ref={widgetRef} className="fixed bottom-[4rem] right-5 h-[27rem] w-[15rem] md:bottom-[5rem] md:h-[32rem] md:w-[20rem] xl:bottom-[6rem] xl:h-[34rem] xl:w-[25rem] rounded-xl bg-white border-2 border-black">
          <div className="w-full p-2">
            <div className="text-md md:text-lg text-center p-2">Hi! Let us know how we can help and we’ll respond shortly.</div>
            <form onSubmit={onSubmit}>
              <div className="relative h-11 w-full md:px-3 md:mt-7">
                <input
                  name="name"
                  placeholder="Enter your name"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  aria-label="Name"
                />
                <label className="absolute left-0 -top-2.5 px-3 flex h-full w-full select-none text-sm font-normal text-gray-500 transition-all pointer-events-none truncate leading-tight peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 after:content-[' '] after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative mt-7 h-11 w-full md:px-3 md:mt-7">
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  aria-label="Email"
                />
                <label className="absolute left-0 -top-2.5 px-3 flex h-full w-full select-none text-sm font-normal text-gray-500 transition-all pointer-events-none truncate leading-tight peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 after:content-[' '] after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="mt-5 mb-3 md:px-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea
                  name="message"
                  className="w-full xl:h-40 md:h-[7rem] p-2 border border-gray-300 rounded-md hover:border-black"
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              <div className="w-full md:ml-5 ml-7 justify-center items-center">
                <button
                  type="submit"
                  className="md:mx-3 xl:w-[20rem] md:w-[15rem] w-[10rem] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </div>
              <span>{result}</span>
            </form>
          </div>
        </div>
      )}
      <div onClick={toggleVisibility} className="fixed bottom-3 right-3 md:bottom-5 md:right-5 h-[2.5rem] w-[2.5rem] xl:h-[4rem] xl:w-[4rem] md:h-[3rem] md:w-[3rem] rounded-full bg-black text-lg text-white p-[0.7rem] md:p-[0.8rem] xl:p-[1.1rem] flex items-center justify-center cursor-pointer">
        <FaMessage />
      </div>
    </>
  );
};

export default Fixed;


