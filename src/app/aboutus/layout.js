import Head from "next/head";

export const metadata = {
  title: "About Us | The Luxury Hotel Concierge: Your Gateway to Luxury",
  description:
    "Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement Services and effortless VISA requests.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/aboutus",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/aboutus"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
