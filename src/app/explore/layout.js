import Head from "next/head";

export const metadata = {
  title: "Explore Unique Experiences | The Luxury Hotel Concierge",
  description:
    "Explore exclusive travel experiences with The Luxury Hotel Concierge. Discover luxury adventures and hidden gems around the world.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/explore",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/explore"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
