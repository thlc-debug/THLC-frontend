"use client";

import { useSearchParams } from "next/navigation";

const BookingConfirmation = () => {
  const searchParams = useSearchParams();

  const data = Object.fromEntries(searchParams.entries());
  console.log(data);

  const orderId = searchParams.get("order_id");
  const trackingID = searchParams.get("tracking_id");
  const paymentMethod = searchParams.get("payment_method");
  const bankRefNo = searchParams.get("bank_ref_no");
  const currency = searchParams.get("currency");
  const amount = searchParams.get("amount");
  const message = searchParams.get("status_message");
  const transDate = searchParams.get("trans_date");

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Order ID: {orderId}</p>
      <p>Tracking ID: {trackingID}</p>
      <p>Payment Method: {paymentMethod}</p>
      <p>Bank Reference Number: {bankRefNo}</p>
      <p>Currency: {currency}</p>
      <p>Amount: {amount}</p>
      <p>Message: {message}</p>
      <p>Transaction Date: {transDate}</p>
    </div>
  );
};

export default BookingConfirmation;
