'use client'

import React, { useState } from 'react';

const modeOptions = [
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text' },
  { value: 'call', label: 'Call' },
  { value: 'chat', label: 'Chat' },
];

const daysOptions = [
  { value: '3 days', label: '3 days' },
  { value: '5 days', label: '5 days' },
  { value: '7 days', label: '7 days' },
  { value: '10-15 days', label: '10-15 days' },
  { value: '15 days and above', label: '15 days and above' },
];

const queryOptions = [
  { value: 'Explore Antarctica', label: 'Explore Antarctica' },
  { value: 'Live Aboard Yachts', label: 'Live Aboard Yachts' },
];

const Procurement = () => {
  const [phone, setPhone] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [days, setDays] = useState('');
  const [mode, setMode] = useState('');
  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Changed part


  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    // formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY);
    formData.append("Name", event.target.name.value);
    formData.append("Contact", phone);
    formData.append("Email", event.target.email.value);
    formData.append("Type of Query", query);
    formData.append("Destination", event.target.destination.value);
    formData.append("Journey Date", journeyDate);
    formData.append("No of Days", days);
    formData.append("No of Travellers", event.target.travellers.value);
    formData.append("Brief Summary", event.target.brief.value);
    formData.append("Call Back Date and Time", event.target.callBack.value);
    formData.append("Preferred Mode of Communication", mode);

    // change these fields as per use
    const recipientEmail = 'contact@theluxuryhotelconcierge.com'
    const pageTitle = 'Global Luxury Procurement Services'

    formData.append("pageTitle", pageTitle);              // this field name is fixed 'pageTitle'
    formData.append("pageUrl", window.location.href);     // this field name is fixed 'pageUrl'

    try {
      const response = await fetch(`https://lhc-email.onrender.com/send-email/${encodeURIComponent(recipientEmail)}`, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // console.log("Form Submitted Successfully");
        setIsSubmitted(true);

        event.target.reset();
        setPhone('');
        setDays('');
        setMode('');
        setJourneyDate('');
        setQuery(queryOptions[0].value);
      } else {
        console.error("Error", data);
        // console.log(data.message);
      }
    } catch (error) {
      console.error("Form submission error", error);
      // console.log("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center text-green-600 text-xl font-bold">
          Your form has been submitted successfully!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 sm:px-0 max-w-xl mx-auto"
        >
          <h1 className='text-2xl mb-2 font-bold relative -top-24 bg-black bg-opacity-40 text-white drop-shadow-md bg-black-800 text-center'>
            Global Luxury Procurement Services
          </h1>

          <div className="-mt-8 mb-5 text-left">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name" required />
          </div>

          <div className="mb-5 text-left">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email address" required />
          </div>

          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-medium">Contact</label>
            <input className='w-full border border-gray-300 rounded-md py-2 px-3'
              placeholder="Enter phone number"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>

          <div className="mb-5 text-left">
            <label htmlFor="query" className="block mb-2 text-sm font-medium">Type of Query</label>
            <select
              id="query"
              name="query"
              value={query}
              onChange={handleQueryChange}
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Select query type</option>
              {queryOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5 text-left">
            <label htmlFor="destination" className="block mb-2 text-sm font-medium">Destination</label>
            <input type="text" id="destination" name="destination" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Let us know where you’d like to go?" required />
          </div>

          <div className="mb-5 text-left">
            <label htmlFor="journeyDate" className="block mb-2 text-sm font-medium">Select Journey Beginning Date</label>
            <input type="date" id="journeyDate" name="journeyDate" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} required />
          </div>

          <div className="mb-5 text-left">
            <label className="block mb-2 text-sm font-medium">Select Approx No. of Days for Itinerary</label>
            <select
              value={days}
              onChange={handleDaysChange}
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Select days</option>
              {daysOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5 text-left">
            <label htmlFor="travellers" className="block mb-2 text-sm font-medium">No of Travellers</label>
            <input type="number" id="travellers" name="travellers" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter number of travellers" required />
          </div>

          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-medium">Brief Summary</label>
            <textarea
              name='brief'
              id='brief'
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder='Let us know how we can help you?'
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4 text-left">
            <label className="block mb-2 text-sm font-medium">Call Back Date and Time</label>
            <input
              name='callBack'
              id='callBack'
              type="datetime-local"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-5 text-left">
            <label className="block mb-2 text-sm font-medium">Select Preferred Mode of Communication</label>
            <select
              value={mode}
              onChange={handleModeChange}
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Select mode</option>
              {modeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-[#000000] text-white rounded-md shadow-sm hover:bg-[#000000]">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Procurement;
