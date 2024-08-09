import Head from "next/head";

export const metadata = {
  title: "Contact Us | The Luxury Hotel Concierge",
  description:
    "Get in touch with The Luxury Hotel Concierge for personalized luxury travel arrangements. Let us make your dream journey a reality.",
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
