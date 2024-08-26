import Head from "next/head";

export const metadata = {
  title: "Welcome to Your Luxury Getaway | The Luxury Hotel Concierge",
  description:
    "Step into a world of unparalleled luxury with The Luxury Hotel Concierge. As our guest, explore personalized services, exquisite stays, and unforgettable experiences tailored just for you.",
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/guest-page",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/guest-page"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
