import React, { useState } from "react";
import Paypal from '../../../../../public/adminicons/payment/paypal.svg'
import Debit from '../../../../../public/adminicons/payment/debit.svg'
import Credit from '../../../../../public/adminicons/payment/credit.svg'
import Gpay from '../../../../../public/adminicons/payment/gpay.svg'
import Image from "next/image";

const PaymentModal = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("razorpay");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Payment</h2>

        
        <div className="mb-6">
          <label className="font-medium flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="razorpay"
              checked={paymentMethod === "razorpay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Razor pay / Stripe
          </label>
          <div className="flex justify-center gap-4">
            <Image src={Paypal} alt="Paypal" className="w-12 h-12" />
            <Image src={Gpay} alt="Google Pay" className="w-12 h-12" />
            <Image src={Paypal} alt="Visa" className="w-12 h-12" />
            <Image src={Paypal} alt="MasterCard" className="w-12 h-12" />
          </div>
        </div>

     
        <div className="mb-6">
          <label className="font-medium flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="creditcard"
              checked={paymentMethod === "creditcard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Pay by Credit Card
          </label>
          <div className="flex justify-center gap-4">
            <Image src={Paypal} alt="Visa" className="w-12 h-12" />
            <Image src={Paypal} alt="MasterCard" className="w-12 h-12" />
            <Image src={Paypal} alt="Discover" className="w-12 h-12" />
            <Image src={Paypal} alt="Discover" className="w-12 h-12" />
          </div>
        </div>

        <button
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition"
          onClick={onClose}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
