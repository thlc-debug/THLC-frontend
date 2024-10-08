import Head from "next/head";

export const metadata = {
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/hotelsdetail",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/hotelsdetail"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
