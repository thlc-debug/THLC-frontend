import Head from "next/head";

export const metadata = {
  title: "Your Bookings | The Luxury Hotel Concierge",
  description:
    "Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement Services and effortless VISA requests.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/bookings",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/bookings"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
