import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { base_url } from "@/base_url";

// Renders errors or successful transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
  
}

function Paypal({ nextStep }) {
  const initialOptions = {
    "client-id": 'AfYCrbdw9c3J7tdR1EmqfQq7D6nUDrAAi84Xxr1CqKZzkzX-py306qEL-V_19Twtskm1fadxX5_1nbL0',
    "enable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const [message, setMessage] = useState("");
  const [cartDetails, setCartDetails] = useState({});

  useEffect(() => {
    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const userId = userDetails ? userDetails._id : '6694380c177c63bfcd747404';

    if (bookingInfo) {
      setCartDetails({
        name: `${bookingInfo.name} ${bookingInfo.lastname}`,
        email: bookingInfo.email,
        phone: bookingInfo.number,
        no_of_people: bookingInfo.guestCount,
        check_in: bookingInfo.checkin,
        check_out: bookingInfo.checkout,
        user_id: userId,
        hotel_id: bookingInfo.hotelId,
        amount: bookingInfo.price,
      });
    }
  }, []);

  return (
    <div className="paypal">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={async () => {
            try {
              const response = await fetch(`${base_url}/api/transactions/orders`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart: cartDetails }),
              });

              const orderData = await response.json();

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(
                `${base_url}/api/transactions/orders/${data.orderID}/capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                },
              );

              const orderData = await response.json();
              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`,
                );
              } else {
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                setMessage(
                  `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                );
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2),
                );
                nextStep()
              }
            } catch (error) {
              console.error(error);
              setMessage(
                `Sorry, your transaction could not be processed...${error}`,
              );
            }
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default Paypal;
