import Head from "next/head";

export const metadata = {
  title: "Contact Us | The Luxury Hotel Concierge",
  description:
    "Experience Personalized luxury with TheLuxuryHotelConcierge. Discover Top Luxury Hotels, Villas, Safaris, Procurement Services and effortless VISA requests.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/contact",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/contact"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
