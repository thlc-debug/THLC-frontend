// pages/payment.js
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import PersonalInfo from "@/components/checkouts/PersonalInfo";
import PaymentDetails from "@/components/checkouts/PaymentDetails";
import Confirmation from "@/components/checkouts/Confirmation";
import Link from "next/link";
import withAuth from "@/utils/withAuth";
import { useSearchParams } from "next/navigation";
import BackButton from "@/components/BackButton";

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
);

const Payment = () => {
  const [step, setStep] = useState(1);
  const [id, setId] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const idFromParams = searchParams.get("id");
    setId(idFromParams);
    console.log(id);
  }, [searchParams]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getLineColor = (currentStep, targetStep) => {
    return currentStep >= targetStep ? "bg-black" : "bg-gray-200";
  };

  return (
    <div className="min-h-screen font-f_3 bg-white bg-opacity-50 flex flex-col items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: 'url("/hotel-img3.jpeg")' }}
      ></div>
      <div className="absolute flex items-center justify-between top-6 left-6 z-20">
        {/* <Link href="/" className="text-2xl font-bold text-black">LuxuryHotelConcierge</Link> */}
        <div className="ms-5 mr-auto">
          <BackButton />
        </div>
        {step > 1 && (
          <div className="ml-10">
            <button
              onClick={prevStep}
              className="flex  items-center justify-center gap-2 text-xl text-gray-900  hover:text-black"
            >
              <FaArrowLeft className="" />
              Back
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-20 w-full md:w-[800px] flex flex-col items-center z-10 px-4 md:px-0">
        <div className="flex items-center justify-between w-full md:w-3/4">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 1 ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {step >= 1 && <FaCheck />}
            </div>
            <span className="text-sm">Hotel</span>
          </div>
          <div
            className={`flex-1 mb-5 ml-1 h-1 ${getLineColor(step, 1)}`}
          ></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 2 ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {step >= 2 && <FaCheck />}
            </div>
            <span className="text-sm">Personal</span>
          </div>
          <div className={`flex-1 mb-5 h-1 ${getLineColor(step, 2)}`}></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 3 ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {step >= 3 && <FaCheck />}
            </div>
            <span className="text-sm">Payment</span>
          </div>
          <div className={`flex-1 mb-5 h-1 ${getLineColor(step, 2)}`}></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step === 4 ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {step === 3 && <FaCheck />}
            </div>
            <span className="text-sm">Confirm</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl relative z-20 mt-24 shadow-md p-4">
        {step === 1 && <PersonalInfo id={id} nextStep={nextStep} />}
        {step === 2 && <PaymentDetails id={id} nextStep={nextStep} />}
        {step === 3 && (
          <Suspense fallback={<Loader />}>
            {id ? <Confirmation id={id} /> : <Loader />}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default withAuth(Payment);
