import Head from "next/head";

export const metadata = {
  alternates: {
    canonical: "https://theluxuryhotelconcierge.com/resortdetail",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://theluxuryhotelconcierge.com/resortdetail"
        />
      </Head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
};

export default layout;
