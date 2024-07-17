"use client";

import { FaPlay, FaPause } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const LandingPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const videoRef = useRef(null);
  const router = useRouter()

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
    const guestUser = {
      id: guestEmail,
      name: guestName,
      email: guestEmail
    };
    localStorage.setItem("guestUser", JSON.stringify(guestUser));
    router.push('/hotels')
  };

  return (
    <div className="relative h-screen w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/guest/vid_01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="absolute top-6 left-6 text-lg font-semibold">
          TheLuxuryHotelConcierge
        </div>
        <button
          onClick={handlePlayPause}
          className="bg-white opacity-60 text-black rounded-full p-7 mb-4"
        >
          {isPlaying ? <FaPause className="text-black opacity-100" size={14} /> : <FaPlay className="text-black opacity-100" size={14} />}
        </button>
        <div className="absolute bottom-20 flex flex-col mb-6 items-center space-y-4">
          <div className="text-[18px] text-center max-w-[330px] font-[400]">
            Elevate your travel experience with our personalized concierge services.
          </div>
          {!showGuestForm ? (
            <>
              <Link href='/signup' className="bg-black text-center text-white text-lg py-2 px-6 rounded-full w-[320px] text-[13px]">
                Sign up
              </Link>
              <button
                onClick={() => setShowGuestForm(true)}
                className="border border-white transition-colors duration-300 hover:bg-white hover:text-black text-center text-white text-lg py-2 px-6 rounded-full w-[320px] text-[13px]"
              >
                Continue as guest
              </button>
            </>
          ) : (
            <form className="flex flex-col space-y-4 items-center" onSubmit={handleGuestSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="p-2 w-[320px] text-black border rounded-full outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="p-2 w-[320px] text-black border rounded-full outline-none"
                required
              />
              <button
                type="submit"
                className="bg-black text-white text-lg py-2 px-6 rounded-full w-[320px] text-[13px]"
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="absolute left-7 bottom-5 flex space-x-4 text-sm">
          <Link href="#" className="hover:underline">Policy</Link>
          <Link href="#" className="hover:underline">Legal</Link>
        </div>
        <div className="absolute right-7 bottom-5 flex space-x-4 text-white">
          <a
            href="https://www.facebook.com/profile.php?id=61562328525447&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={16} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter size={16} />
          </a>
          <a
            href="https://www.linkedin.com/company/luxuryhotelconcierge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/theluxuryhotelconcierge?igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
