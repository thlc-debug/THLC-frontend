"use client";

import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import { base_url } from "@/base_url";
import { IoLocation } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdCall } from "react-icons/md";

function openPolicyPDF() {
  window.open("/privacyPolicy.pdf", "_blank");
}

const Footer = () => {
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
    <div className="bg-black rounded-t-3xl px-4 py-10 md:px-20 md:py-16">
      <div className="text-center">
        <div className="text-2xl md:text-4xl text-gray-200">
          You're precious to us!
        </div>
        <div className="text-lg md:text-xl text-gray-400 mt-3">
          Subscribe to get notified about exciting travelling plans..
        </div>
      </div>

      <div className="text-2xl md:text-3xl text-gray-200 text-center mt-10">
        Newsletter
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="relative w-full max-w-lg md:max-w-3xl">
          <input
            type="text"
            className="w-full h-10 md:h-14 pl-3 md:pl-10 pr-32 rounded-full text-white bg-black border-2 border-white focus:shadow focus:outline-none"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
          <button
            className="absolute top-0 right-0 h-10 md:h-14 w-28 md:w-52 text-black rounded-full bg-white hover:bg-gray-200 text-xs md:text-lg"
            onClick={handleNewsletterSubmit}
          >
            Receive newsletters
          </button>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-16">
        <div className="text-2xl pb-8 md:text-4xl text-gray-200">
          Start your journey today, don’t miss out!
        </div>
        <div>
          <Link href="/hotels">
            <button
              type="button"
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Start Booking Hotels
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center text-center md:text-left  md:items-start mt-5 md:mt-16 gap-[20px] md:gap-0">
        <div className="md:w-1/4 ">
          <div className="text-lg text-gray-200 pb-2 md:pb-8">
            <b>TheLuxuryHotelConcierge</b>
          </div>
        
          <Link
            href="https://www.google.co.in/maps/place/Chandigarh/@30.7219251,76.7521701,12z/data=!4m6!3m5!1s0x390fed0be66ec96b:0xa5ff67f9527319fe!8m2!3d30.7333148!4d76.7794179!16zL20vMDFmMXE4?entry=ttu"
            target="_blank"
          >
            <div className="text-gray-400 leading-relaxed text-sm md:text-lg flex  gap-[10px]">
              <IoLocation className="text-[2.2rem]" />
              Chandigarh, India
            </div>
          </Link>
          <div className="text-gray-400 leading-relaxed text-sm mt-3 md:text-lg flex gap-2 justify-center items-center md:items-start md:justify-start">
            <MdCall className="text-[1.6rem] ml-2" />
            <a
              href="tel:18889285558"
              className="text-gray-400 hover:text-gray-500"
            >
              18889285558
            </a>
          </div>
        </div>
        <div className="leading-relaxed ">
          <div className="text-gray-200 text-lg pb-2">
            <b>Company</b>
          </div>
         
          <Link href="/explore">
            <div className="cursor-pointer text-gray-400 text-sm md:text-lg">
              Explore
            </div>
          </Link>
          <Link href="/destinations">
            <div className="cursor-pointer text-gray-400 text-sm md:text-lg">
             Destinations
            </div>
          </Link>
          <Link href="/hotels">
            <div className="cursor-pointer text-gray-400 text-sm md:text-lg">
             Hotels
            </div>
          </Link>
          <Link href="/blog">
            <div className="cursor-pointer text-gray-400 text-sm md:text-lg">
              Blog
            </div>
          </Link>
          <Link href="/aboutus">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              About Us
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Careers
            </div>
          </Link>
        </div>
        <div className="leading-relaxed">
          {/* <Link href="/contact"> */}
          <div className="text-gray-200 text-lg pb-2">
            <b>Support</b>
          </div>
          {/* </Link> */}
          <Link href="/contact">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Help Center
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Contact Us
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Status
            </div>
          </Link>
        </div>
        <div className="leading-relaxed">
          {/* <Link href="/contact"> */}
          <div className="text-gray-200 text-lg pb-2">
            <b>Legal</b>
          </div>
          {/* </Link> */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openPolicyPDF}
          >
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Privacy Policy
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openPolicyPDF}
          >
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Terms and Conditions
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openPolicyPDF}
          >
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">
              Cancellation and Refund
            </div>
          </a>
        </div>
      </div>

      <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-xs md:text-lg">
          © 2021-2024 TheLuxuryHotelConcierge. All rights reserved
        </div>
        <div className="flex gap-4">
          {/* <div className="text-gray-500 text-xs md:text-lg cursor-pointer">
            Terms
          </div>
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">
            Cookies
          </div>
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">
            Privacy Policies
          </div> */}
          <div className="text-gray-500 flex items-center gap-2 md:mr-5">
            <a
              href="https://www.facebook.com/profile.php?id=61562328525447&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook className="text-xl md:text-2xl" />
            </a>
            <a
              href="https://x.com/theluxuryh19009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="text-xl md:text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/luxuryhotelconcierge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl md:text-2xl" />
            </a>

            <a
              href="https://www.instagram.com/theluxuryhotelconcierge?igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="text-xl md:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
