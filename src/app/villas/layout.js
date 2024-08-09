import Head from "next/head";

export const metadata = {
  title: "Exclusive Luxury Villas | The Luxury Hotel Concierge",
  description:
    "Experience privacy and luxury in our handpicked villas. The Luxury Hotel Concierge offers top-tier service in stunning global locations.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/villas",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/villas"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
