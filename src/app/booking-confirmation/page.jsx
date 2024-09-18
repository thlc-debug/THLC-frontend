"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import Tick from "/public/lotties/tick.json";
import Cross from "/public/lotties/cross.json";

const BookingConfirmation = () => {
  const searchParams = useSearchParams();

  const data = Object.fromEntries(searchParams.entries());
  // console.log(data);

  return (
    <>
      {data.order_status === "Success" ? (
        <div className="h-screen flex justify-center items-center bg-gray-100">
          <div className="min-h-[60%] lg:h-[90%] w-[95%] mx-auto lg:w-2/3 rounded-xl bg-white">
            <div className="p-8 md:p-20">
              <div>
                <div>
                  <div>
                    <div className="flex flex-col-reverse md:flex-row gap-2">
                      <h1 className="text-xl text-center md:text-3xl font-medium font-f_2">
                        Your Order is Confirmed!
                      </h1>
                      <div className="flex justify-start">
                        <Lottie
                          options={{
                            loop: true,
                            autoplay: true,
                            animationData: Tick,
                            rendererSettings: {
                              preserveAspectRatio: "xMidYMid slice",
                            },
                          }}
                          height={40}
                          width={40}
                        />
                      </div>
                    </div>

                    <div className="mt-6 md:mt-12">
                      <p className="text-gray-500 text-center md:text-left text-sm md:text-md">
                        Order ID: #{data.order_id}
                      </p>
                      <p className="font-medium text-center md:text-left text-sm md:text-md">
                        Thank you For choosing us,{" "}
                        {data.billing_name.split(" ")[0]}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 mt-8 md:mt-12 border border-1 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Order Info</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      {/* Order Date */}
                      <div>
                        <p className="text-gray-400">Order Date</p>
                        <p className="font-semibold text-gray-900">
                          {data.trans_date}
                        </p>
                      </div>

                      {/* Delivery Date */}
                      <div>
                        <p className="text-gray-400">Tracking ID</p>
                        <p className="font-semibold text-gray-900">
                          {data.tracking_id}
                        </p>
                      </div>

                      {/* Status */}
                      <div>
                        <p className="text-gray-400">Billing Name</p>
                        <p className="font-semibold text-gray-900">
                          {data.billing_name}
                        </p>
                      </div>

                      {/* Payment Status */}
                      <div>
                        <p className="text-gray-400">Payment Status</p>
                        <p className="font-semibold text-gray-900">
                          {data.order_status}
                        </p>
                      </div>

                      {/* Payment Method */}
                      <div>
                        <p className="text-gray-400">Payment Method</p>
                        <p className="font-semibold text-gray-900">
                          {data.payment_mode}
                        </p>
                      </div>

                      {/* Address */}
                      <div>
                        <p className="text-gray-400">Address</p>
                        <p className="font-semibold text-gray-900">
                          {data.billing_address}, {data.billing_city},{" "}
                          {data.billing_state}, {data.billing_zip},{" "}
                          {data.billing_country}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Total Amount Paid</p>
                        <p className="font-semibold text-gray-900">
                          {data.currency}, {data.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 py-5">
                <Link
                  href="/bookings"
                  className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  View Orders
                </Link>
                <Link
                  href="/"
                  className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center bg-gray-100">
          <div className="w-[90%] lg:w-2/3 rounded-xl bg-white shadow-sm p-10 lg:p-20">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Cross,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={70}
              width={70}
            />
            <div className="flex justify-center items-center">
              <div>
                <div className="mt-12 flex flex-col items-center justify-center">
                  <h1 className="text-xl md:text-3xl text-center font-medium font-f_2">
                    Your Order has Failed!
                  </h1>
                  <p className="text-gray-500 mt-4">
                    We are sorry, your order has failed. Please try again.
                  </p>
                </div>

                <div className="flex justify-center space-x-4 py-5">
                  <Link
                    href="/"
                    className=" p-3 md:px-6 md:py-3 text-xs md:text-lg bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                  >
                    Continue Shopping
                  </Link>

                  <Link
                    href="/bookings"
                    className="p-3 md:px-6 md:py-3 text-xs md:text-lg bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700"
                  >
                    Previous Orders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingConfirmation;
