"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingCalendar.css'; // Custom styles for the datepicker

const BookingCalendar = ({ data, onCancel, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [showSlots, setShowSlots] = useState(false);

  const availableDates = [
    new Date('2024-07-01'),
    new Date('2024-07-03'),
    new Date('2024-07-05')
  ];

  const isAvailableDate = (date) => {
    return availableDates.some((availableDate) => date.getTime() === availableDate.getTime());
  };

  const timeSlots = {
    morning: ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'],
    afternoon: ['12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM'],
    evening: ['3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM']
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowSlots(true);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = () => {
    onSubmit(selectedDate, selectedSlot);
  };

  return (
    <div className="flex flex-col md:flex-col justify-center items-center gap-5 mx-auto w-full max-w-[921px] p-5 md:p-0">
      <div className='flex flex-row justify-center items-center gap-6'>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          highlightDates={availableDates}
          dayClassName={(date) => isAvailableDate(date) ? "highlighted-date" : undefined}
          calendarClassName="custom-calendar"
          className="w-full"
        />
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={data.img} alt="image" className="object-cover md:h-[230px]  rounded-md w-full" />
      </div>
      </div>

      {showSlots && (
        <div className="w-full flex flex-col items-center mt-5">
          <h2 className="text-xl font-semibold mb-3">Select a Time Slot</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
            {Object.keys(timeSlots).map((period) => (
              timeSlots[period].map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotClick(slot)}
                  className={`text-white rounded-md px-5 py-3 hover:bg-gray-800 transition ${
                    selectedSlot === slot ? 'bg-gray-800' : 'bg-black'
                  }`}
                >
                  {slot}
                </button>
              ))
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-red-500 rounded-md px-5 py-3 mt-5 hover:bg-gray-800 transition"
          >
            Contact Now
          </button>
          
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
