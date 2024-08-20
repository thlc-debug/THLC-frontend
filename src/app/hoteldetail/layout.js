import Head from "next/head";

export const metadata = {
  title: "Luxury Hotel Details | The Luxury Hotel Concierge",
  description:
    "Explore the exclusive details of our luxury hotels. Discover top-tier amenities, room types, and personalized services offered by each hotel in our curated collection.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/hoteldetail",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/hoteldetail"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
