"use client";

import React, { useState } from 'react';
import { FaSquareFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Highlight from './Highlight';

const components = [
  { id: 1, name: 'Virtual Assistance' },
  { id: 2, name: 'Hotel Reservations' },
  { id: 3, name: 'Charter services' },
  { id: 4, name: 'Cruise Reservations' },
  { id: 5, name: 'Personal Event Planning' },
  { id: 6, name: "Procurement Services" }
];

export default function ContactSection() {
  const [highlighted, setHighlighted] = useState(null);
  const [result, setResult] = useState("");
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleHighlight = (id) => {
    setHighlighted(id);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("interest", components.find(component => component.id === highlighted)?.name || "None");

    // change these fields as per use
    const recipientEmail = 'contact@theluxuryhotelconcierge.com'
    const pageTitle = 'Contact Us'

    formData.append("pageTitle", pageTitle);              // this field name is fixed 'pageTitle'
    formData.append("pageUrl", window.location.href);     // this field name is fixed 'pageUrl'

    try {
      const response = await fetch(`https://lhc-email.onrender.com/send-email/${encodeURIComponent(recipientEmail)}`, {
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
    <div className="w-full p-4 mt-14">
      <div className="max-w-6xl mx-auto md:px-4">
        <div className='md:flex '>
          <div className='md:w-2/5 md:mt-10 md:pr-[5rem] mx-3'>
            <div className='sm:text-3xl md:text-4xl text-2xl md:leading-normal leading-snug'>
              Reach out to us for more details & <b>custom bookings</b>
            </div>
            <div className='md:mt-[10rem] my-1 text-gray-500'>email: contact@theluxuryhotelconcierge.com</div>
            <div className='md:my-10 my-1 text-gray-500'>Ph no: +91-9888334677</div>
            <div className="text-gray-500 flex items-center md:gap-4 gap-2 text-xl md:text-2xl">
              <FaSquareFacebook aria-label="Facebook" />
              <FaTwitter aria-label="Twitter" />
              <FaYoutube aria-label="YouTube" />
              <RiInstagramFill aria-label="Instagram" />
            </div>
          </div>
          <div className='md:w-3/5 border-gray-300 border-2 rounded-lg md:p-5 sm:p-4 p-3 md:my-0 my-3 md:mx-0 sm:mx-5 mx-1'>
            <form onSubmit={onSubmit}>
              <div className='md:text-xl text-lg'><b>I'm interested in:</b></div>
              <div className='md:pb-5 md:pt-3 py-2 md:mr-[10rem] sm:mr-10 mr-5 md:text-sm text-xs flex flex-wrap'>
                {components.map(component => (
                  <Highlight
                    key={component.id}
                    id={component.id}
                    name={component.name}
                    isHighlighted={highlighted === component.id}
                    onClick={handleHighlight}
                  />
                ))}
              </div>
              {/* <label htmlFor="options" className="mb-2 text-lg font-medium text-gray-700">
                    Type of Service:
                </label> */}
              {/* <select
                  id="options"
                  value={selectedValue}
                  onChange={handleChange}
                  className="w-64 mx-5 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Hotels">Hotels</option>
                  <option value="Visas">Visas</option>
                  <option value="Safaris">Safaris</option>
                  <option value="Procurement Services">Procurement Services</option>
                </select> */}
              {/* {selectedValue && (
                  <p className="mt-4 text-lg text-gray-700">
                    You selected: <span className="font-semibold">{selectedValue}</span>
                  </p>
                )} */}
              <div className="relative h-16 w-full min-w-[200px] my-8 md:px-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  aria-label="Name"
                />
                <label className="md:px-3 after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-16 w-full min-w-[200px] my-8 md:px-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  aria-label="Your email"
                />
                <label className="md:px-3 after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Your email
                </label>
              </div>
              <div className="relative h-16 w-full min-w-[200px] my-8 md:px-3">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  aria-label="Phone Number"
                />
                <label className="md:px-3 after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Phone Number
                </label>
              </div>
              <div className="my-6 md:px-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea
                  name="message"
                  className="w-full h-40 p-2 border border-gray-300 rounded-md hover:border-black"
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="md:mx-3 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
                <a href="tel:+1234567890">
                  <button
                    type="button"
                    className="md:mx-3 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    aria-label="Call Now"
                  >
                    Call Now
                  </button>
                </a>
              </div>
              <span>{result}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
