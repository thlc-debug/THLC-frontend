import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaRegCreditCard,
  FaPaypal,
  FaGoogle,
  FaApplePay,
} from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import Paypal from "./paypal/Paypal";

const PaymentDetails = ({ nextStep }) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [showPaypal, setShowPaypal] = useState(false);
  const [amount, setAmount] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const cards = [
    // { name: "Credit", icon: <FaRegCreditCard className="text-blue-500" /> },
    // { name: "Debit", icon: <FaRegCreditCard className="text-red-400" /> },
    { name: "Paypal", icon: <FaPaypal className="text-blue-500" /> },
    // { name: "Gpay", icon: <FaGoogle className="text-black" /> },
    // { name: "Stripe", icon: <FaRegCreditCard className="text-red-400" /> },
    // { name: "Apple Pay", icon: <FaApplePay className="text-black text-2xl" /> },
  ];

  useEffect(() => {
    const storedBookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

    // const finalPrice = (
    //   storedBookingInfo.price * storedBookingInfo.days
    // ).toFixed(2);
    // setAmount(finalPrice > 0 ? finalPrice : 499);

    setAmount(storedBookingInfo.price);
  }, []);

  const handlePaymentMethodSelect = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "Paypal") {
      toggleDropdown();
      setShowPaypal(true);
    }
  };

  const handleStep = async () => {
    nextStep();
  };

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto p-6 bg-gray-100 mt-10 rounded-md">
      {/* Payment Method Dropdown */}
      <div
        className="flex bg-white justify-between items-center p-6 rounded-md shadow-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex justify-center items-center gap-3">
          <FaCheckCircle className="text-4xl text-green-500" />
          <h1 className="text-xl font-bold">Choose Payment Method</h1>
        </div>
        {showDropdown ? (
          <IoIosArrowDropup className="text-2xl" />
        ) : (
          <IoIosArrowDropdown className="text-2xl" />
        )}
      </div>

      {/* Dropdown Content */}
      {showDropdown && (
        <div className="flex flex-col md:flex-row flex-wrap gap-5 bg-white rounded-md shadow-md p-4">
          {cards.map((card, index) => (
            <button
              key={card.name}
              value={card.name}
              className="flex justify-between border items-center p-4 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={handlePaymentMethodSelect}
            >
              <div className="flex items-center gap-3">
                {card.icon}
                <h2 className="text-lg font-semibold">{card.name}</h2>
              </div>
            </button>
          ))}
        </div>
      )}

      {amount && (
        <div className="text-xl font-bold text-right">Amount: ${amount}</div>
      )}

      {/* <div className="flex flex-col bg-white items-center p-6 rounded-md shadow-md mt-5">
        <div className="flex justify-between items-center w-full mb-3">
          <div className="flex items-center gap-3">
            <FaRegCreditCard className="text-2xl text-blue-500" />
            <h1 className="text-xl font-bold">Registered cards <span className="bg-gray-300 text-blue-500 rounded-full px-2">Visa</span></h1>
            
          </div>
          <CiSquarePlus className="text-2xl cursor-pointer" />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span className="font-semibold">Bank</span>
                </div>
              </th>
              <th className="py-2 font-semibold">CVV</th>
              <th className="py-2 font-semibold">Name</th>
              <th className="py-2 font-semibold">Expiry Date</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">
                <div className="flex items-center">
                  <FaRegCreditCard className="text-blue-500 mr-2" />
                  <span>Bank of India</span>
                </div>
              </td>
              <td className="py-4">1234</td>
              <td className="py-4">Unknown</td>
              <td className="py-4">12/34</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {showPaypal && <Paypal nextStep={nextStep} />}

      {/* Checkout Button */}
      {/* <div className="mt-5">
        <button
          type="button"
          onClick={handleStep}
          className="bg-black w-full text-white font-bold text-2xl flex items-center justify-center py-2 px-4 rounded-[30px] focus:outline-none focus:shadow-outline"
        >
          Checkout
        </button>
      </div> */}
    </div>
  );
};

export default PaymentDetails;
