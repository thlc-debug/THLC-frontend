import Head from "next/head";

export const metadata = {
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
